import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Practice Areas - Shubh Law Firm',
  description: 'Explore our comprehensive legal services including criminal law, civil litigation, corporate law, and family law.',
}

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      id: 'criminal',
      title: 'Criminal Law',
      icon: '⚖️',
      description: 'Expert defense in criminal cases with a focus on protecting your rights and ensuring fair treatment under the law.',
      services: [
        'Felony and Misdemeanor Defense',
        'DUI and Traffic Violations',
        'White Collar Crimes',
        'Drug Offenses',
        'Assault and Battery',
        'Theft and Property Crimes',
        'Sexual Assault Defense',
        'Juvenile Criminal Defense',
      ],
      features: [
        '24/7 Emergency Response',
        'Experienced Trial Attorneys',
        'Negotiation and Plea Bargaining',
        'Appeals and Post-Conviction Relief',
      ],
    },
    {
      id: 'civil',
      title: 'Civil Litigation',
      icon: '📋',
      description: 'Comprehensive representation in civil disputes and commercial litigation with strategic advocacy for optimal outcomes.',
      services: [
        'Contract Disputes',
        'Personal Injury Claims',
        'Employment Law Disputes',
        'Real Estate Litigation',
        'Intellectual Property Disputes',
        'Product Liability Cases',
        'Medical Malpractice',
        'Class Action Lawsuits',
      ],
      features: [
        'Alternative Dispute Resolution',
        'Expert Witness Coordination',
        'Settlement Negotiation',
        'Trial and Appellate Advocacy',
      ],
    },
    {
      id: 'corporate',
      title: 'Corporate Law',
      icon: '🏢',
      description: 'Strategic legal counsel for businesses of all sizes, from startups to multinational corporations.',
      services: [
        'Business Formation and Structure',
        'Mergers and Acquisitions',
        'Corporate Governance',
        'Securities Law Compliance',
        'Intellectual Property Protection',
        'Employment Law and HR',
        'Tax Planning and Compliance',
        'International Business Law',
      ],
      features: [
        'Board Advisory Services',
        'Regulatory Compliance',
        'Risk Management',
        'Strategic Planning',
      ],
    },
    {
      id: 'family',
      title: 'Family Law',
      icon: '👨‍👩‍👧‍👦',
      description: 'Compassionate guidance through family legal matters with a focus on protecting your family\'s best interests.',
      services: [
        'Divorce and Separation',
        'Child Custody and Visitation',
        'Child Support and Alimony',
        'Property Division',
        'Prenuptial Agreements',
        'Adoption and Guardianship',
        'Domestic Violence Protection',
        'Paternity and Parentage',
      ],
      features: [
        'Mediation Services',
        'Collaborative Law',
        'Child Advocacy',
        'Emotional Support Resources',
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-600">Practice Areas</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal services across multiple practice areas, delivered with expertise, 
              integrity, and dedication to achieving the best possible outcomes for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {practiceAreas.map((area, index) => (
              <div key={area.id} id={area.id} className="scroll-mt-20">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-fade-in-up`}>
                    <div className="flex items-center mb-6">
                      <div className="text-5xl mr-4">{area.icon}</div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        {area.title}
                      </h2>
                    </div>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {area.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                        <ul className="space-y-2">
                          {area.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-start">
                              <svg className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                        <ul className="space-y-2">
                          {area.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <svg className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative`}>
                    <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 lg:p-12 shadow-2xl">
                      <div className="text-white text-center">
                        <div className="text-6xl mb-6">{area.icon}</div>
                        <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                        <p className="text-orange-100 mb-6">
                          {area.description}
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Why Choose Us?</h4>
                          <ul className="text-left space-y-2 text-sm">
                            <li className="flex items-center">
                              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              Experienced Attorneys
                            </li>
                            <li className="flex items-center">
                              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              Proven Track Record
                            </li>
                            <li className="flex items-center">
                              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              Personalized Approach
                            </li>
                            <li className="flex items-center">
                              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              Free Consultation
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Legal Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure the best possible outcomes for your case.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Free consultation to understand your case and discuss legal options.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Case Analysis',
                description: 'Thorough review of your case to develop the best legal strategy.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Legal Action',
                description: 'Strategic execution of your case with expert legal representation.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                step: '04',
                title: 'Resolution',
                description: 'Achieving the best possible outcome for your case.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((process, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-700 transition-colors duration-300">
                  {process.icon}
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-2">{process.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our experienced attorneys are ready to help you 
            navigate your legal challenges and achieve the best possible outcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              Schedule Free Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/team"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Meet Our Attorneys
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 