const ServicesSection = () => {
  const services = [
    {
      id: "web-dev",
      title: "Développement Web",
      description: "Applications web modernes et évolutives, des sites vitrines aux plateformes complexes",
      features: [
        "Applications web progressives (PWA)",
        "Sites e-commerce performants",
        "Intranets et extranets d'entreprise",
        "Refonte et modernisation de systèmes existants"
      ],
      technologies: "React, Vue.js, Angular, Node.js, PHP, Ruby on Rails",
      icon: (
        <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      )
    },
    {
      id: "mobile-dev",
      title: "Développement Mobile",
      description: "Applications mobiles natives et cross-platform pour iOS et Android",
      features: [
        "Applications natives iOS (Swift) et Android (Kotlin)",
        "Applications cross-platform (React Native, Flutter)",
        "Intégration avec les API et services backend",
        "Maintenance et mise à jour d'applications existantes"
      ],
      technologies: "React Native, Flutter, Swift, Kotlin, Xamarin",
      icon: (
        <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      id: "agile",
      title: "Gestion Agile de Projets",
      description: "Méthodologies agiles pour garantir la réussite de vos projets IT",
      features: [
        "Cadrage et analyse des besoins",
        "Planification et priorisation des fonctionnalités",
        "Management d'équipes de développement",
        "Reporting régulier et transparent"
      ],
      technologies: "Scrum, Kanban, Lean, SAFe",
      icon: (
        <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      )
    },
    {
      id: "qa",
      title: "QA Testing",
      description: "Assurance qualité pour garantir des livrables sans faille",
      features: [
        "Tests fonctionnels et de non-régression",
        "Tests de performance et de charge",
        "Automatisation des tests",
        "Tests d'accessibilité WCAG"
      ],
      technologies: "Selenium, Cypress, Jest, Playwright, JMeter",
      icon: (
        <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle mx-auto">
            Des solutions complètes pour tous vos besoins en développement logiciel
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-[var(--primary)] mb-2">Ce que nous proposons :</h4>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm bg-gray-50 p-3 rounded-md">
                    <span className="font-medium text-gray-700">Technologies :</span> {service.technologies}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 