import { useRef, useEffect, useState, useCallback } from "react";
import type { JSX } from "react";
import ForceGraph2D from "react-force-graph-2d";
import type { ForceGraphMethods, NodeObject, LinkObject } from "react-force-graph-2d";
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
  type?: "filiale" | "partenaire";
  r?: number;
  info?: string;
  __r?: number;
  x?: number;
  y?: number;
};

type MyLink = {
  source: string | number | MyNode;
  target: string | number | MyNode;
};

const initialData = {
  nodes: [
    // Filiales (au centre)
    { id: "F1", name: "NSN", type: "filiale", r: 45 },
    { id: "F2", name: "NFR", type: "filiale", r: 45 },
    { id: "F3", name: "NSW", type: "filiale", r: 45 },

    // Partenaires autour
    { id: "P1", name: "Boost Aerospace", type: "partenaire", r: 30, x: 0, y: 350 },
    { id: "P2", name: "GetVocal", type: "partenaire", r: 30, x: 250, y: 300 },
    { id: "P3", name: "Zama", type: "partenaire", r: 30, x: -250, y: 300 },
    { id: "P4", name: "Zozio", type: "partenaire", r: 30, x: 400, y: -150 },
    { id: "P5", name: "Ekitia", type: "partenaire", r: 30, x: -400, y: -150 },
    { id: "P6", name: "Nicomatic Sénégal", type: "partenaire", r: 30, x: 0, y: -350 },
    { id: "P7", name: "Accurate", type: "partenaire", r: 30, x: 300, y: -300 },
    { id: "P8", name: "WearTronic", type: "partenaire", r: 30, x: -300, y: -300 },
  ] as MyNode[],

  links: [
    { source: "F1", target: "P1" },
    { source: "F1", target: "P2" },
    { source: "F1", target: "P3" },
    { source: "F1", target: "F2" },

    { source: "F2", target: "P4" },
    { source: "F2", target: "P5" },
    { source: "F2", target: "P6" },
    { source: "F2", target: "F3" },

    { source: "F3", target: "P6" },
    { source: "F3", target: "P7" },
    { source: "F3", target: "P8" },
    { source: "F3", target: "F1" },

    // Connexions partenaires
   
    { source: "P5", target: "P6" },
    { source: "P7", target: "P8" },
  ] as MyLink[],
};

export default function App(): JSX.Element {
  const fgRef = useRef<ForceGraphMethods<NodeObject<MyNode>, LinkObject<MyNode, MyLink>> | undefined>(undefined);
  const [data] = useState(initialData);
  const [hoverNode, setHoverNode] = useState<MyNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<MyNode | null>(null);
  const [time, setTime] = useState<number>(0);

  // animation "respiration"
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
  useEffect(() => {
  const radius = 350;
  const partners = data.nodes.filter(n => n.type === "partenaire");
  partners.forEach((p, i) => {
    const angle = (i / partners.length) * 2 * Math.PI;
    p.x = radius * Math.cos(angle);
    p.y = radius * Math.sin(angle);
  });
}, [data]);

  const configureForces = useCallback(() => {
    const fg = fgRef.current as any;
    if (!fg) return;

    try {
      fg.d3Force("charge", forceManyBody().strength(-550));
      fg.d3Force("center", forceCenter());

      // filiales attirées vers le centre, partenaires vers leur x/y init
      fg.d3Force("x", forceX<MyNode>().strength(0.03));
      fg.d3Force("y", forceY<MyNode>().strength(0.03));
      fg.d3Force(
        "collide",
        forceCollide<MyNode>().radius((d: any) => (d.r ?? 12) + 45).iterations(3)
      );
      fg.d3Force(
        "link",
        forceLink<MyNode, MyLink>().id((d) => d.id).distance(220)
      );
      
    } catch (err) {
      console.warn("Force config issue:", err);
    }
  }, []);

  useEffect(() => {
    configureForces();
  }, [configureForces]);

  // zoom et placement fluide
  useEffect(() => {
    const fg = fgRef.current;
    if (fg) setTimeout(() => fg.zoomToFit(1200, 80), 800);
  }, []);
// Effet organique flottant
useEffect(() => {
  let mounted = true;
  const raf = (t: number) => {
    if (!mounted) return;

    const fg: any = fgRef.current;
    if (fg) {
      const nodes: MyNode[] = fg.graphData().nodes as any;
      const amp = 0.5; // amplitude du flottement
      const speed = 0.002; // vitesse du flottement

      nodes.forEach((n, i) => {
        // chaque nœud a un décalage unique pour le mouvement
        const offset = i * 10;
        n.x = (n.x ?? 0) + amp * Math.sin(t * speed + offset);
        n.y = (n.y ?? 0) + amp * Math.cos(t * speed + offset);
      });

      fg.refresh(); // redessine le graphe
    }

    requestAnimationFrame(raf);
  };

  const id = requestAnimationFrame(raf);
  return () => {
    mounted = false;
    cancelAnimationFrame(id);
  };
}, []);

const drawNode = useCallback(
  (node: NodeObject<MyNode>, ctx: CanvasRenderingContext2D, globalScale: number) => {
    // Taille de texte fixe
    const fontWeight = "bold";
    const fontSize = node.type === "filiale" ? 20 : 14; // filiales un peu plus grandes
    ctx.font = `${fontWeight} ${fontSize}px Inter, Arial, sans-serif`;

    const label = node.name ?? "";
    const textWidth = ctx.measureText(label).width;
    const padding = 20; // espace autour du texte
    const r = Math.max(node.r ?? 12, textWidth / 2 + padding); // cercle assez grand pour contenir le texte

    // Cercle
    ctx.beginPath();
    ctx.arc(node.x ?? 0, node.y ?? 0, r, 0, Math.PI * 2, false);
    ctx.fillStyle = node.type === "filiale" ? "#009FE3" : "#256AFF";
    ctx.fill();
    ctx.strokeStyle = "rgba(0,0,0,0.1)";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Texte
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(label, node.x ?? 0, node.y ?? 0);

    node.__r = r; // mettre à jour le rayon pour la force de collision
  },
  []
);


  return (
    <div className="app-root" style={{ backgroundColor: "#ffffff" }}>
      <div className="canvas-wrap" style={{ width: "100vw", height: "100vh" }}>
        <ForceGraph2D<MyNode, MyLink>
          ref={fgRef}
          graphData={data}
          backgroundColor="#ffffff"
          nodeCanvasObject={drawNode}
          nodeLabel=""
          linkColor={() => "#009FE3"} // Couleur des liens assortie aux filiales
          linkWidth={() => 2}
          linkLineDash={[2, 2]} // Style en pointillé pour les liens
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
      </div>

      {selectedNode && (
        <div className="modal-overlay" onClick={() => setSelectedNode(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedNode.name}</h2>
            <p><strong>Type :</strong> {selectedNode.type}</p>
            <p>{selectedNode.info}</p>
            <button onClick={() => setSelectedNode(null)}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}
