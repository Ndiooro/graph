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
    name: "Nicomatic Sénégal",
    logo: "/logos/nsn.png",
    description: "NSN est une filiale spécialisée dans les solutions électroniques pour l'industrie.",
    services: "Conception de circuits, intégration de systèmes, support technique avancé.",
    useCases: "systèmes embarqués pour l'aéronautique.",
    Market: " clients industriels en Afrique et Europe."
  },
  F2: {
    id: "F2",
      name: "Nicomatic France",
    description: "NFR développe des solutions IoT industrielles innovantes.",
    services: "Capteurs connectés, plateformes de monitoring, maintenance prédictive.",
    useCases: " suivi de production en temps réel.",
    Market: " usines et sites industriels."
  },
  F3: {
    id: "F3",
      name: "Nicomatic Switzerland",
    description: "NSW fournit des services de support et de connectivité pour partenaires.",
    services: "Assistance technique, formation, intégration de produits.",
    useCases: "intégration de solutions tierces. ",
    Market: " PME et grands comptes."
  },



  P1: {
    id: "P1",
    name: "Boost Aerospace",
    description: "Boost Aerospace est un partenaire spécialisé dans l'aéronautique.",
    services: "Fourniture de composants, assistance technique, R&D.",
    useCases: "projets d'aéronautique innovants. ",
    Market: "Entreprises aérospatiales."
  },
  P2: {
    id: "P2",
    name: "GetVocal",
    description: "GetVocal propose des solutions de communication vocale.",
    services: "Plateformes vocales, APIs, intégration IoT.",
    useCases: " automatisation des appels clients. ",
    Market: "télécommunications."
  },
    P3: {
    id: "P3",
      name: "Zama",
    description: "Technologie Zama est un partenaire en IA et machine learning.",
    services: "Modèles ML, solutions IA, consulting.",
    useCases: " analyse prédictive. ",
    Market: " divers secteurs industriels."    
  },
  P4: {
    id: "P4",
      name: "Zozio",
    description: "Zozio est un partenaire spécialisé en solutions logicielles embarquées.",    
    services: "Conception de circuits, intégration de systèmes, support technique avancé.",
    useCases: " systèmes embarqués pour l'aéronautique. ",
    Market: " clients industriels en Afrique et Europe."
  },
    P5: {    
    id: "P5",
    name: "Ekitia",
    description: "Zozio est un partenaire spécialisé en solutions logicielles embarquées.",    
    services: "Conception de circuits, intégration de systèmes, support technique avancé.",
    useCases: " systèmes embarqués pour l'aéronautique.",
    Market: " clients industriels en Afrique et Europe."
  },
    P6: {    
    name: "Nicomatic Sénégal",
    description: "Zozio est un partenaire spécialisé en solutions logicielles embarquées.",    
    services: "Conception de circuits, intégration de systèmes, support technique avancé.",
    id: "P6",
    useCases: " systèmes embarqués pour l'aéronautique.",
    Market: "clients industriels en Afrique et Europe."
  },
    P7: {    
    name: "Accurate",
    description: "Zozio est un partenaire spécialisé en solutions logicielles embarquées.",    
    services: "Conception de circuits, intégration de systèmes, support technique avancé.",
    id: "P7",
    useCases: "systèmes embarqués pour l'aéronautique. ",
    Market: "clients industriels en Afrique et Europe."
  },
    P8: {    
    name: "WearTronic",
    description: "Zozio est un partenaire spécialisé en solutions logicielles embarquées.",    
    services: "Conception de circuits, intégration de systèmes, support technique avancé.",
    id: "P8",
    useCases: " systèmes embarqués pour l'aéronautique.",
    Market: "clients industriels en Afrique et Europe."
  },

};
