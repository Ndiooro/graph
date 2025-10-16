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
    description: "Nicomatic Senegal, founded in 2024 after two years of collaboration with top engineering schools, embodies innovation, regional impact, and service expertise. The subsidiary accelerates tech startup development, supports young engineers through real industrial missions, and delivers high-value consulting in IT, engineering, and industrial procurement. It also designs and manufactures custom agricultural machines — a first in Senegal. Backed by a dynamic local team and strong regional partnerships, Nicomatic Senegal enhances innovation, knowledge sharing, and value creation across the Nicomatic Group.",
    services: "Circuit design, system integration, advanced technical support, and local manufacturing.",
    useCases: "Embedded systems for aerospace, medical devices, and industrial automation.",
    Market: "Industrial clients across Africa and Europe."
  },
  F2: {
    id: "F2",
    name: "Nicomatic France",
    logo: "/logos/ngl.png",
    description: "Founded in 1976 in Bons-en-Chablais, in the heart of the Alps, Nicomatic France is at the origin of the group's development. Initially specializing in screw machining, the company has evolved over the years to become a key player in solutions for electronic equipment. With fully integrated in-house production, Nicomatic designs and manufactures all its solutions on its own sites, ensuring quality, responsiveness, and innovation.To strengthen its proximity to strategic industries, Nicomatic has opened a site in Toulouse, at the heart of the aerospace sector, as well as a second site in Saint-Cergues, just a few kilometers from Bons-en-Chablais, continuing its expansion in France.",
    services: "Connected sensors, monitoring platforms, predictive maintenance, and custom IoT solutions.",
    useCases: "Real-time production tracking, asset management, and industrial automation.",
    Market: "Manufacturing plants and industrial sites worldwide."
  },
  F3: {
    id: "F3",
      name: "Nicomatic Switzerland",
    logo: "/logos/nsw.png",
    description:"Based in Geneva, Nicomatic Explorer is the out of core innovation hub of Nicomatic Group, created to : Promote digital transformation within the Group Broaden Nicomatics business by proposing technology services to third parties. We leverage new technologies such as blockchain, homomorphic encryption and AI to develop ground-breaking applications and find new solutions to industry incumbents’ challenges.",
     services: "Technical assistance, training programs, product integration, and partner enablement.",
    useCases: "Third-party solution integration, channel partner support, and custom connectivity projects.",
    Market: "SMEs and large corporate accounts in the DACH region."
  },

  F5: {
    id: "F5",
    name: "Nicomatic South Korea",
    logo: "/logos/ngl.png",
    description: "Nicomatic South Korea has an office in Seoul, located in near the Seokchon Lake, which focuses on supporting technical sales and engineering services.They aim to create reliable and customized interconnection solutions to meet any of your requirements. We actively support local supply channels to subcontractors with on-time delivery.   ",
    services: "Sales, customer support, business development, and local market adaptation.",
    useCases: "Expansion into the Asian high-tech market, and supplying the consumer electronics sector.",
    Market: "High-tech and automotive industries in South Korea and APAC."
  },

  F6: {
    id: "F6",
    name: "Nicomatic United Kingdom",
    logo: "/logos/ngl.png",
    description: "With a proven track record in providing custom connectivity solutions, Nicomatic UK has significantly expanded its offerings alongside the evolution of the Nicomatic Group. Today, we provide high-tech services and products, including connectors, sub-assemblies, and electronic components. Our motto is to listen to your needs and challenge ourselves to facilitate your growth and transformation requirements throughout the entire value chain.",
    services: "Technical assistance, training, product integration, and local sales support.",
    useCases: "Integration of third-party solutions and supporting key accounts in the defense and aerospace sectors.",
    Market: "SMEs and large accounts in the UK, particularly in defense and aerospace."
  },


  P1: {
    id: "P1",
    name: "Boost Aerospace",
    logo: "/logos/boost.png", 
    description: "BoostAeroSpace is a private cloud for the European aerospace and defense industry. As a joint venture of major industry players (Airbus, Dassault Aviation, Safran, Thales), it provides a secure, collaborative platform for managing the entire supply chain.",
    services: "Secure collaboration platform, Supply chain management (AirSupply), Collaborative project management (AirCollab), Secure engineering data exchange (AirDesign).",
    useCases: "Standardizing supply chain processes, Collaborating on complex aerospace projects, Securely exchanging large engineering files between partners.",
    Market: "European Aerospace and Defense industry, including major manufacturers and their suppliers."
  },
  P2: {
    id: "P2",
    name: "GetVocal",
    logo: "/logos/getvocal.png",
    description: "GetVocal is a Conversational AI platform that helps businesses automate their customer interactions across multiple channels. They provide intelligent voicebots and chatbots designed to enhance customer service and operational efficiency.",
    services: "Voicebot development, Chatbot development, Conversational AI platform, Omnichannel customer engagement, Automated customer support.",
    useCases: "Automating call center queries, 24/7 customer support, Lead qualification and sales automation, Appointment booking and reminders.",
    Market: "Businesses in retail, healthcare, finance, and telecommunications seeking to automate customer service."
  },
    P3: {
    id: "P3",
    name: "Zama",
    logo: "/logos/zama.png",
    description: "Zama is an open-source cryptography company building state-of-the-art Fully Homomorphic Encryption (FHE) solutions for blockchain and AI. Their technology enables processing data on the cloud without ever decrypting it, ensuring privacy and security.",
    services: "Open source FHE libraries (TFHE-rs), Privacy-preserving machine learning tools (Concrete ML), Solutions for confidential smart contracts.",
    useCases: "Confidential blockchain transactions, Private AI model training and inference, Secure cloud computing on sensitive data (e.g., medical, financial).",
    Market: "Blockchain, AI, Healthcare, Finance, and any industry requiring data privacy during computation."    
  },
  P4: {
    id: "P4",
    name: "Zozio",
    logo: "/logos/zozio.png",
    description: "Zozio provides a SaaS platform for real-time logistics optimization in the industrial sector. Their solution offers a digital twin of the factory to track assets, optimize flows, and improve overall production efficiency.",
    services: "Real-time asset tracking (RTLS), Digital Twin of the factory, Production flow analysis, Inventory management, Logistics optimization platform (ROBIN).",
    useCases: "Tracking tools and equipment, Optimizing warehouse logistics, Reducing production bottlenecks, Improving Overall Equipment Effectiveness (OEE).",
    Market: "Industrial manufacturing, Logistics, Automotive, Aerospace, and Cosmetics industries."
  },

    P5: {    
    id: "P5",
    name: "Ekitia",
    logo: "/logos/ekitia.png",
    description: "Ekitia is a company specializing in digital accessibility. They assist organizations in making their websites, applications, and digital documents compliant with accessibility standards (like RGAA), ensuring they are usable by people with disabilities.",
    services: "Digital accessibility audits (RGAA compliance), Accessibility consulting and support, User testing with disabled individuals, Training on digital accessibility.",
    useCases: "Making public service websites accessible, Ensuring corporate applications are usable by all employees, Creating inclusive e-commerce platforms.",
    Market: "Public sector, large corporations, educational institutions, and any organization aiming for digital inclusion."
  },
    P6: {    
    name: "Nicomatic Senegal (Partner)",
    logo: "/logos/nsn.png",
    description: "Nicomatic Senegal is an innovation hub supporting the technological and industrial development of Senegal and West Africa. It focuses on training young engineers, developing local industrial solutions, and providing high-value consulting.",
    services: "IT and engineering consulting, Custom agricultural machine design, Startup acceleration, and Industrial procurement.",
    id: "P6",
    useCases: "Developing local tech solutions, Training the next generation of engineers, Supporting industrial projects in West Africa.",
    Market: "Technology, Agriculture, and Industrial sectors in West Africa."
  },
    P7: {    
    name: "Accurate",
    logo: "/logos/accurate.png",
    description: "Accurate Technologies is a global leader in the design and manufacture of high-performance tools for the development and testing of automotive electronics. They provide solutions for network interfacing, data acquisition, and ECU calibration.",
    services: "CAN/CAN-FD and LIN interface hardware, Data acquisition systems, ECU calibration and flashing tools (CANape, CANoe), On-board diagnostics.",
    id: "P7",
    useCases: "Vehicle network analysis, ECU development and testing, End-of-line vehicle diagnostics, In-vehicle data logging.",
    Market: "Automotive OEMs, Tier 1 suppliers, and off-highway vehicle manufacturers."
  },
    P8: {    
    name: "WearTronic",
    logo: "/logos/weartronics.png",
    description: "WearTronic is an R&D company specializing in wearable electronics and smart textiles. They focus on integrating electronics seamlessly into clothing and other wearable items for applications in sports, healthcare, and professional use.",
    services: "Smart textile development, Wearable device prototyping, Miniaturization of electronics, Integration of sensors into fabrics.",
    id: "P8",
    useCases: "Health and performance monitoring for athletes, Connected worker safety gear, Interactive and intelligent clothing.",
    Market: "Sports, Healthcare, Professional safety (PPE), and Fashion-tech sectors."
  },

};
