const MethodSection = () => {
  const steps = [
    {
      number: "01",
      title: "Analyse et découverte",
      description: "Nous commençons par une étude approfondie de vos besoins métier et techniques pour définir précisément les objectifs du projet.",
      details: [
        "Réunions d'analyse des besoins",
        "Étude de faisabilité technique",
        "Analyse de la concurrence",
        "Définition précise des exigences"
      ]
    },
    {
      number: "02",
      title: "Proposition et planification",
      description: "Nous élaborons une proposition détaillée avec estimation des coûts, délais et ressources nécessaires, suivie d'une planification rigoureuse.",
      details: [
        "Devis détaillé et transparent",
        "Calendrier de réalisation",
        "Allocation des ressources",
        "Définition des jalons clés"
      ]
    },
    {
      number: "03",
      title: "Constitution d'équipe",
      description: "Nous sélectionnons les meilleurs talents parmi nos équipes de développement partenaires, adaptés aux spécificités de votre projet.",
      details: [
        "Sélection basée sur l'expertise technique",
        "Évaluation des compétences",
        "Composition d'équipe équilibrée",
        "Briefing complet sur les objectifs"
      ]
    },
    {
      number: "04",
      title: "Développement itératif",
      description: "Le développement se déroule par itérations courtes (sprints) avec des démonstrations régulières pour vous permettre de suivre et valider l'avancement.",
      details: [
        "Cycles de développement de 2 semaines",
        "Démonstrations régulières",
        "Intégration continue",
        "Tests automatisés"
      ]
    },
    {
      number: "05",
      title: "Assurance qualité",
      description: "Chaque fonctionnalité est rigoureusement testée pour garantir la qualité, la performance et la sécurité de la solution.",
      details: [
        "Tests unitaires et d'intégration",
        "Tests de non-régression",
        "Tests de performance",
        "Audits de sécurité"
      ]
    },
    {
      number: "06",
      title: "Livraison et accompagnement",
      description: "Après la mise en production, nous vous accompagnons pour assurer une transition en douceur et garantir le succès de votre solution.",
      details: [
        "Déploiement maîtrisé",
        "Formation des utilisateurs",
        "Support technique",
        "Maintenance évolutive"
      ]
    }
  ];
  
  return (
    <section id="method" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Notre Méthode</h2>
          <p className="section-subtitle mx-auto">
            Une approche éprouvée pour assurer la réussite de vos projets de développement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-6 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-[var(--primary)] bg-opacity-10 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-[var(--primary)] opacity-30">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--primary)]">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-4 h-4 text-[var(--primary)] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white shadow-md rounded-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">Une communication transparente tout au long du projet</h3>
              <p className="text-gray-600 mb-6">
                Notre engagement pour une communication transparente et régulière vous assure de toujours rester informé de l'avancement de votre projet. Nous utilisons des outils collaboratifs modernes pour faciliter les échanges.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center bg-gray-50 p-3 rounded-md">
                  <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Réunions hebdomadaires
                </div>
                <div className="flex items-center bg-gray-50 p-3 rounded-md">
                  <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Rapports d'avancement
                </div>
                <div className="flex items-center bg-gray-50 p-3 rounded-md">
                  <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                  Démonstrations régulières
                </div>
                <div className="flex items-center bg-gray-50 p-3 rounded-md">
                  <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                  </svg>
                  Canal de communication dédié
                </div>
              </div>
            </div>
            <div className="bg-[var(--primary)] rounded-lg p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Notre engagement</h4>
              <p className="mb-6">
                Nous nous engageons à respecter les délais et le budget définis, avec une garantie de satisfaction sur les livrables.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Respect des délais
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Maîtrise du budget
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Code de qualité
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Garantie après livraison
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection; 