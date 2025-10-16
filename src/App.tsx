import { useRef, useEffect, useState, useCallback } from "react";
import type { JSX } from "react";
import ForceGraph2D from "react-force-graph-2d";
import type { ForceGraphMethods, NodeObject, LinkObject } from "react-force-graph-2d";
import { motion } from "framer-motion";
import { entitiesData } from "./entitiesData";
import "./Modal.css";
import {
  forceCollide,
  forceManyBody,
  forceCenter, 
  forceX,
  forceY,
  forceLink,
} from "d3-force";
import "./index.css";

type MyNode = {
  id: string;
  name: string;
  type?: "subsidiary" | "partner"; // Corrected type definition
  r?: number;
  info?: string;
   logo?: string; 
  __r?: number;
  x?: number;
  y?: number;
  __baseX?: number;
  __baseY?: number;
};

type MyLink = {
  source: string | number | MyNode;
  target: string | number | MyNode;
};

const initialData = {
  nodes: [
    // Subsidiaries (at the center)
    { id: "F1", name: "NSN", type: "subsidiary", r: 65 },
    { id: "F2", name: "NFR", type: "subsidiary", r: 65 },
    { id: "F3", name: "NSW", type: "subsidiary", r: 65 },
    { id: "F5", name: "NSK", type: "subsidiary", r: 65 },
    { id: "F6", name: "NUK", type: "subsidiary", r: 65 },

    // Partners around
    { id: "P1", name: "Boost Aerospace", type: "partner", r: 30 },
    { id: "P2", name: "GetVocal", type: "partner", r: 30 },
    { id: "P3", name: "Zama", type: "partner", r: 30 },
    { id: "P4", name: "Zozio", type: "partner", r: 30 },
    { id: "P5", name: "Ekitia", type: "partner", r: 30 },
    { id: "P6", name: "Nicomatic Sénégal", type: "partner", r: 30 },
    { id: "P7", name: "Accurate", type: "partner", r: 30 },
    { id: "P8", name: "WearTronic", type: "partner", r: 30 },
  ] as MyNode[],

  links: [
  // Liens filiales → partenaires
  { source: "F1", target: "P1" },
  { source: "F1", target: "P2" },
  { source: "F1", target: "P3" },
  { source: "F1", target: "P4" },

  { source: "F2", target: "P4" },
  { source: "F2", target: "P5" },
  { source: "F2", target: "P6" },

  { source: "F3", target: "P7" },
  { source: "F3", target: "P8" },


  // Liens filiales ↔ filiales
  { source: "F1", target: "F2" },
  { source: "F2", target: "F3" },
  { source: "F3", target: "F1" },
  { source: "F3", target: "F6" },
 
  
  { source: "F5", target: "F1" },
  { source: "F5", target: "P3" },

  // Liens partenaires ↔ partenaires (si nécessaire)
  { source: "P5", target: "P6" },
] as MyLink[],
};

export default function App(): JSX.Element {
  const fgRef = useRef<ForceGraphMethods<NodeObject<MyNode>, LinkObject<MyNode, MyLink>> | undefined>(undefined);
  const [data] = useState(initialData);
  const [hoverNode, setHoverNode] = useState<MyNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<MyNode | null>(null);
  const [time, setTime] = useState<number>(0);

  // Animation respiration
  useEffect(() => {
    let mounted = true;
    const raf = (t: number) => {
      if (!mounted) return;
      setTime(t);
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    return () => {
      mounted = false;
      cancelAnimationFrame(id);
    };
  }, []);

  // Circular placement of subsidiaries and partners (reduces tangled effect)
  useEffect(() => {
    const { nodes, links } = data;
    const subsidiaries = nodes.filter(n => n.type === "subsidiary");

    // 1. Place subsidiaries on a larger circle for better spacing
    const radiusSubsidiaries = 250; // Increased for more space
    subsidiaries.forEach((s, i) => {
      const angle = (i / subsidiaries.length) * 2 * Math.PI;
      s.x = radiusSubsidiaries * Math.cos(angle);
      s.y = radiusSubsidiaries * Math.sin(angle);
    });

    // 2. Place partners in orbit around EACH subsidiary
    subsidiaries.forEach(subsidiary => {
      const connectedPartners = links
        .filter(l => l.source === subsidiary.id || l.target === subsidiary.id)
        .map(l => (l.source === subsidiary.id ? l.target : l.source))
        .map(id => nodes.find(n => n.id === id))
        .filter(n => n?.type === 'partner') as MyNode[];

      const radiusPartner = 150; // Distance from the subsidiary
      connectedPartners.forEach((partner, i) => {
        const angle = (i / connectedPartners.length) * 2 * Math.PI;
        partner.x = (subsidiary.x ?? 0) + radiusPartner * Math.cos(angle);
        partner.y = (subsidiary.y ?? 0) + radiusPartner * Math.sin(angle);
      });
    });
  }, [data]);


  // Forces
  const configureForces = useCallback(() => {
    const fg = fgRef.current as any;
    if (!fg) return;

    try {
      fg.d3Force("charge", forceManyBody().strength(-800)); // plus de répulsion
      fg.d3Force("center", forceCenter()); 
      fg.d3Force("x", forceX<MyNode>().strength(0.02));
      fg.d3Force("y", forceY<MyNode>().strength(0.02));
      fg.d3Force("collide", forceCollide<MyNode>().radius((d: any) => (d.r ?? 12) + 50).iterations(3));
      fg.d3Force("link", forceLink<MyNode, MyLink>().id((d) => d.id).distance(200)); // longer links
    } catch (err) {
      console.warn("Force config issue:", err);
    }
  }, []);

  useEffect(() => {
    configureForces();
  }, [configureForces]);

  // Zoom initial
  useEffect(() => {
    const fg = fgRef.current;
    if (fg) setTimeout(() => fg.zoomToFit(1200, 80), 800);
  }, []);

  // Light floating movement on subsidiaries
  useEffect(() => {
    const fg = fgRef.current;
    if (!fg) return;

    let mounted = true;
    const amplitude = 8;
    const speed = 0.001;

    const animate = (t: number) => {
      if (!mounted || !fg) return;
      const nodes: MyNode[] = (fg as any).graphData().nodes as MyNode[];

      nodes.forEach((n, i) => {
        if (n.type === "subsidiary") {
          if (n.__baseX === undefined) {
            n.__baseX = n.x ?? 0;
            n.__baseY = n.y ?? 0;
          }

          const phase = i * 2.1;
          n.x = (n.__baseX ?? 0) + amplitude * Math.sin(t * speed + phase);
          n.y = (n.__baseY ?? 0) + amplitude * Math.cos(t * speed + phase);
        }
      });

      (fg as any)._needsRedraw = true;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    return () => {
      mounted = false;
    };
  }, []);

  // Dessin des nœuds
  const drawNode = useCallback(
    (node: NodeObject<MyNode>, ctx: CanvasRenderingContext2D, globalScale: number) => {
      const isHovered = hoverNode && hoverNode.id === node.id;
      const fontWeight = node.type === "subsidiary" ? "bold" : "normal";
      const fontSize = node.type === "subsidiary" ? 20 : 14;
      ctx.font = `${fontWeight} ${fontSize}px Inter, Arial, sans-serif`;

      const label = node.name ?? "";
      const textWidth = ctx.measureText(label).width;
      const baseRadius = Math.max(node.r ?? 12, textWidth / 2 + 20);

      const breath = isHovered ? 1 + Math.sin(time * 0.005) * 0.1 : 0;
      const r = baseRadius + breath * 5;

      ctx.beginPath();
      ctx.arc(node.x ?? 0, node.y ?? 0, r, 0, Math.PI * 2, false);
      ctx.fillStyle = node.type === "subsidiary" ? "#3DADFF" : "#2A60EA";
      ctx.fill();
      ctx.strokeStyle = "#8bd4ff90";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(label, node.x ?? 0, node.y ?? 0);

      node.__r = r;
    },
    [hoverNode, time]
  );

  return (
    <div className="app-root" style={{ backgroundColor: "#ffffff" }}>
      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
        className="canvas-wrap"
        style={{ width: "100vw", height: "100vh" }}
      >
        <ForceGraph2D<MyNode, MyLink>
          ref={fgRef}
          graphData={data}
          backgroundColor="#ffffff"
          nodeCanvasObject={drawNode}
          nodeLabel=""
          linkColor={() => "#294DA9"}
          linkWidth={() => 2}
          linkLineDash={[2, 2]}
          nodePointerAreaPaint={(node, color, ctx) => {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(node.x ?? 0, node.y ?? 0, (node.r ?? 12) + 8, 0, Math.PI * 2, false);
            ctx.fill();
          }}
          onNodeHover={setHoverNode}
          onNodeClick={setSelectedNode}
          cooldownTicks={300}
          d3VelocityDecay={0.2}
          onEngineStop={() => configureForces()}
        />
      </motion.div>

  {selectedNode && (
  <div className="modal-overlay" onClick={() => setSelectedNode(null)}>
    <div className="modal-card" onClick={(e) => e.stopPropagation()}>

      
        <div 
          className="modal-header" 
          style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
        >
            {entitiesData[selectedNode.id]?.logo && (
              <img
                src={entitiesData[selectedNode.id].logo}
                className="modal-logo"
              />
            )}
            <div style={{ display: 'flex', flexDirection: 'column' , gap: '1px'}}>
              <h2 className="modal-title" style={{ margin: 0 }}>{entitiesData[selectedNode.id].name}</h2>
              <p className="modal-type" style={{ margin: 0 }}>
                  <strong></strong> {selectedNode.type}
              </p>
            </div>
           
        </div>
        
    

      <div className="modal-section">
        <h3>Description</h3>
        <p>{entitiesData[selectedNode.id]?.description ?? "No description available."}</p>
      </div>

      <div className="modal-section">
        <h3>Services</h3>
        {entitiesData[selectedNode.id]?.services ? (
          <ul className="services-list">
            {entitiesData[selectedNode.id].services.split(/, | and /).map((service, index) => (
              <li key={index}>{service.charAt(0).toUpperCase() + service.slice(1)}</li>
            ))}
          </ul>
        ) : (
          <p>No services listed.</p>
        )}
      </div>

      <div className="modal-section">
        <h3>Use Cases</h3>
        {entitiesData[selectedNode.id]?.useCases ? (
          <ul className="services-list">
            {entitiesData[selectedNode.id].useCases.split(/, | and /).map((item, index) => (
              <li key={index}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
            ))}
          </ul>
        ) : (
          <p>No use cases listed.</p>
        )}
      </div>

        <div className="modal-section">
        <h3>Market</h3>
        {entitiesData[selectedNode.id]?.Market ? (
          <ul className="services-list">
            {entitiesData[selectedNode.id].Market.split(/, | and /).map((item, index) => (
              <li key={index}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
            ))}
          </ul>
        ) : (
          <p>No market information.</p>
        )}
      </div>
      <button
        className="modal-button"
        onClick={() => {
          alert("Redirecting to authentication form (to be implemented).");
        }}
      >
        View Capabilities
      </button>
    </div>
  </div>
)}

    </div>
  );
}
// --- Fin du code ---
