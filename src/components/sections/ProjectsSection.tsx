const ProjectsSection = () => {
  const projects = [
    {
      title: "Plateforme e-commerce B2B pour fabricant industriel",
      client: "IndustriaFrance",
      industry: "Industrie manufacturière",
      duration: "6 mois",
      techs: ["React", "Node.js", "MongoDB", "AWS"],
      challenges: [
        "Interface complexe pour configurateur de produits",
        "Intégration avec l'ERP existant",
        "Gestion des prix personnalisés par client"
      ],
      solutions: [
        "Développement d'un configurateur de produits interactif",
        "API de synchronisation avec l'ERP",
        "Système de tarification dynamique"
      ],
      results: [
        "Augmentation de 35% des commandes en ligne",
        "Réduction de 60% du temps de traitement des commandes",
        "ROI atteint en moins de 8 mois"
      ]
    },
    {
      title: "Application mobile de gestion de flotte pour services de livraison",
      client: "ExpressLogistique",
      industry: "Logistique et transport",
      duration: "4 mois",
      techs: ["React Native", "Firebase", "Google Maps API", "Node.js"],
      challenges: [
        "Géolocalisation en temps réel des livreurs",
        "Optimisation des itinéraires de livraison",
        "Fonctionnement hors ligne partiel"
      ],
      solutions: [
        "Système de tracking GPS optimisé pour la consommation batterie",
        "Algorithme d'optimisation d'itinéraires",
        "Système de synchronisation des données hors ligne"
      ],
      results: [
        "Réduction de 25% des délais de livraison",
        "Économie de carburant de 18%",
        "Amélioration de la satisfaction client de 40%"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Projets réalisés</h2>
          <p className="section-subtitle mx-auto">
            Découvrez comment nous avons aidé nos clients à transformer leurs défis en réussites
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gray-100 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[var(--primary)] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">Étude de cas</h3>
                    <p className="text-lg text-gray-600">{project.industry}</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <span className="text-sm text-gray-500 block">Client</span>
                      <span className="font-medium">{project.client}</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <span className="text-sm text-gray-500 block">Durée</span>
                      <span className="font-medium">{project.duration}</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <span className="text-sm text-gray-500 block">Technologies</span>
                      <span className="font-medium">{project.techs.join(", ")}</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold text-[var(--primary)] mb-3">Défis</h4>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            </svg>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--primary)] mb-3">Solutions</h4>
                      <ul className="space-y-2">
                        {project.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--primary)] mb-3">Résultats</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-8">
            Ces études de cas ne représentent qu'un échantillon de nos réalisations. <br />
            Chaque projet est unique et bénéficie de notre approche personnalisée.
          </p>
          <a href="#contact" className="btn-primary">
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 