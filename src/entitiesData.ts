// src/entitiesData.ts
export type EntityData = {
  id: string;
  description: string;
  services: string;
  useCases: string;
};

export const entitiesData: Record<string, EntityData> = {
  F1: {
    id: "F1",
    description: "NSN est une filiale spécialisée dans les solutions électroniques pour l'industrie.",
    services: "Conception de circuits, intégration de systèmes, support technique avancé.",
    useCases: "Cas d'usage : systèmes embarqués pour l'aéronautique. Marché : clients industriels en Afrique et Europe."
  },
  F2: {
    id: "F2",
    description: "NFR développe des solutions IoT industrielles innovantes.",
    services: "Capteurs connectés, plateformes de monitoring, maintenance prédictive.",
    useCases: "Cas d'usage : suivi de production en temps réel. Marché : usines et sites industriels."
  },
  F3: {
    id: "F3",
    description: "NSW fournit des services de support et de connectivité pour partenaires.",
    services: "Assistance technique, formation, intégration de produits.",
    useCases: "Cas d'usage : intégration de solutions tierces. Marché : PME et grands comptes."
  },
  // Ajoute toutes les filiales et partenaires ici
  P1: {
    id: "P1",
    description: "Boost Aerospace est un partenaire spécialisé dans l'aéronautique.",
    services: "Fourniture de composants, assistance technique, R&D.",
    useCases: "Cas d'usage : projets d'aéronautique innovants. Marché : entreprises aérospatiales."
  },
  P2: {
    id: "P2",
    description: "GetVocal propose des solutions de communication vocale.",
    services: "Plateformes vocales, APIs, intégration IoT.",
    useCases: "Cas d'usage : automatisation des appels clients. Marché : télécommunications."
  },
    P3: {
    id: "P3",
    description: "Technologie Zama est un partenaire en IA et machine learning.",
    services: "Modèles ML, solutions IA, consulting.",
    useCases: "Cas d'usage : analyse prédictive. Marché : divers secteurs industriels."    
  },
  P4: {
    id: "P4",
    description: "Zozio est un partenaire spécialisé en solutions logicielles embarquées.",    
    services: "Conception de circuits, intégration de systèmes, support technique avancé.",
    useCases: "Cas d'usage : systèmes embarqués pour l'aéronautique. Marché : clients industriels en Afrique et Europe."
  },
    P5: {    
    id: "P5",
    description: "Zozio est un partenaire spécialisé en solutions logicielles embarquées.",    
    services: "Conception de circuits, intégration de systèmes, support technique avancé.",
    useCases: "Cas d'usage : systèmes embarqués pour l'aéronautique. Marché : clients industriels en Afrique et Europe."
  },
    P6: {    
    description: "Zozio est un partenaire spécialisé en solutions logicielles embarquées.",    
    services: "Conception de circuits, intégration de systèmes, support technique avancé.",
    id: "P6",
    useCases: "Cas d'usage : systèmes embarqués pour l'aéronautique. Marché : clients industriels en Afrique et Europe."
  },
    P7: {    
    description: "Zozio est un partenaire spécialisé en solutions logicielles embarquées.",    
    services: "Conception de circuits, intégration de systèmes, support technique avancé.",
    id: "P7",
    useCases: "Cas d'usage : systèmes embarqués pour l'aéronautique. Marché : clients industriels en Afrique et Europe."
  },
    P8: {    
    description: "Zozio est un partenaire spécialisé en solutions logicielles embarquées.",    
    services: "Conception de circuits, intégration de systèmes, support technique avancé.",
    id: "P8",
    useCases: "Cas d'usage : systèmes embarqués pour l'aéronautique. Marché : clients industriels en Afrique et Europe."
  },

};
