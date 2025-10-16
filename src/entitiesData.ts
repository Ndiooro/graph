// src/entitiesData.ts
export type EntityData = {
  id: string;
  name: string;
  description: string;
  services: string;
  useCases: string;
  Market: string;
   logo?: string;
};

export const entitiesData: Record<string, EntityData> = {
  F1: {
    id: "F1",
    name: "Nicomatic Senegal",
    logo: "/logos/nsn.png",
    description: "NSN is a subsidiary specializing in electronic solutions for various industries. It focuses on delivering high-quality, custom interconnect solutions and providing robust local support to the African market, fostering innovation and technological growth in the region.",
    services: "Circuit design, system integration, advanced technical support, and local manufacturing.",
    useCases: "Embedded systems for aerospace, medical devices, and industrial automation.",
    Market: "Industrial clients across Africa and Europe."
  },
  F2: {
    id: "F2",
    name: "Nicomatic France",
    logo: "/logos/ngl.png",
    description: "Nicomatic Senegal is a regional hub of the Nicomatic Group, specialized in designing and manufacturing high-performance interconnection solutions for harsh environments. Based in Dakar, the company combines engineering expertise, local innovation, and proximity to African markets to deliver tailored electronic solutions for aerospace, defense, medical, and industrial applications.",
    services: "Connected sensors, monitoring platforms, predictive maintenance, and custom IoT solutions.",
    useCases: "Real-time production tracking, asset management, and industrial automation.",
    Market: "Manufacturing plants and industrial sites worldwide."
  },
  F3: {
    id: "F3",
      name: "Nicomatic Switzerland",
    logo: "/logos/nsw.png",
    description: "NSW acts as a central hub for partner support and connectivity services. It specializes in providing technical assistance, comprehensive training programs, and seamless product integration for partners and distributors across Europe, ensuring high standards of service.",
    services: "Technical assistance, training programs, product integration, and partner enablement.",
    useCases: "Third-party solution integration, channel partner support, and custom connectivity projects.",
    Market: "SMEs and large corporate accounts in the DACH region."
  },

  F5: {
    id: "F5",
    name: "Nicomatic South Korea",
    logo: "/logos/ngl.png",
    description: "NSK is a key subsidiary focused on the dynamic South Korean and wider Asian-Pacific market. It provides localized sales, customer support, and business development to meet the specific needs of the region's high-tech industries, including consumer electronics and automotive.",
    services: "Sales, customer support, business development, and local market adaptation.",
    useCases: "Expansion into the Asian high-tech market, and supplying the consumer electronics sector.",
    Market: "High-tech and automotive industries in South Korea and APAC."
  },

  F6: {
    id: "F6",
    name: "Nicomatic United Kingdom",
    logo: "/logos/ngl.png",
    description: "NUK provides dedicated support and connectivity solutions for the UK market. It focuses on building strong relationships with local partners and clients, offering tailored technical assistance, training, and product integration to meet regional demands.",
    services: "Technical assistance, training, product integration, and local sales support.",
    useCases: "Integration of third-party solutions and supporting key accounts in the defense and aerospace sectors.",
    Market: "SMEs and large accounts in the UK, particularly in defense and aerospace."
  },


  P1: {
    id: "P1",
    name: "Boost Aerospace",
    logo: "/logos/boost.png",
    description: "Boost Aerospace is a strategic partner specializing in the aerospace sector. They collaborate on R&D projects and supply high-reliability components, helping to drive innovation and meet the stringent requirements of the aviation industry.",
    services: "Component supply, technical assistance, joint R&D, and certification support.",
    useCases: "Innovative aerospace projects, development of next-generation aircraft systems.",
    Market: "Aerospace and defense companies."
  },
  P2: {
    id: "P2",
    name: "GetVocal",
    logo: "/logos/getvocal.png",
    description: "GetVocal offers advanced voice communication solutions. As a partner, they provide voice-enabled platforms and APIs that integrate with IoT devices, enabling new forms of human-machine interaction and automated communication workflows.",
    services: "Voice platforms, APIs, IoT integration, and automated communication systems.",
    useCases: "Customer call automation, voice-controlled industrial equipment, and smart alerts.",
    Market: "Telecommunications, customer service, and industrial IoT."
  },
    P3: {
    id: "P3",
    name: "Zama",
    logo: "/logos/zama.png",
    description: "Zama is a cutting-edge partner in the field of homomorphic encryption and privacy-preserving AI. Their technology enables processing data without decrypting it, opening up new possibilities for secure machine learning and confidential computing applications.",
    services: "Fully Homomorphic Encryption (FHE) libraries, AI/ML model privacy, and consulting.",
    useCases: "Secure predictive analysis, confidential cloud computing, and privacy-by-design systems.",
    Market: "Various industrial sectors requiring high data security."    
  },
  P4: {
    id: "P4",
    name: "Zozio",
    logo: "/logos/zozio.png",
    description: "Zozio is a partner specializing in real-time logistics and production monitoring for industrial sites. Their platform provides visibility into asset tracking, inventory management, and workflow optimization, helping factories become more efficient and connected.",
    services: "Real-time location systems (RTLS), inventory tracking software, and production flow analysis.",
    useCases: "Real-time tracking of tools and equipment, optimizing warehouse logistics.",
    Market: "Industrial manufacturing, logistics, and supply chain."
  },
    P5: {    
    id: "P5",
    name: "Ekitia",
    logo: "/logos/ekitia.png",
    description: "Ekitia is a technology partner focused on creating inclusive digital solutions. They specialize in developing accessible web platforms and mobile applications, ensuring that technology can be used by everyone, including people with disabilities.",
    services: "Accessibility audits, inclusive design consulting, and development of accessible software.",
    useCases: "Creating accessible public service websites and inclusive corporate tools.",
    Market: "Public sector, corporate, and non-profit organizations."
  },
    P6: {    
    name: "Nicomatic Senegal (Partner)",
    logo: "/logos/nsn.png",
    description: "As a partner, Nicomatic Senegal collaborates on specific regional projects, leveraging its local expertise and network to deploy joint solutions. This partnership focuses on addressing unique market needs and driving technological adoption in West Africa.",
    services: "Joint project deployment, local market intelligence, and system integration.",
    id: "P6",
    useCases: "Deployment of industrial solutions in the West African market.",
    Market: "Industrial clients in Africa."
  },
    P7: {    
    name: "Accurate",
    logo: "/logos/accurate.png",
    description: "Accurate Technologies is a partner providing high-precision measurement and control systems. Their expertise in sensor technology and data acquisition complements our offerings, enabling the creation of comprehensive monitoring and testing solutions.",
    services: "High-precision sensors, data acquisition hardware, and control system integration.",
    id: "P7",
    useCases: "Automated test benches, quality control systems, and R&D measurement setups.",
    Market: "Automotive, aerospace, and industrial R&D."
  },
    P8: {    
    name: "WearTronic",
    logo: "/logos/weartronics.png",
    description: "WearTronic is a partner at the forefront of wearable technology. They design and develop smart textiles and wearable electronic devices for various applications, from health monitoring to industrial safety, integrating connectivity in innovative form factors.",
    services: "Smart textile development, wearable device prototyping, and embedded system design.",
    id: "P8",
    useCases: "Health and wellness monitoring, connected worker safety gear, and interactive textiles.",
    Market: "Healthcare, sports, and industrial safety sectors."
  },

};
