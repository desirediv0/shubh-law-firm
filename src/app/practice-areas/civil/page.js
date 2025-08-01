export const metadata = {
  title: "Civil Law - Shubh Legal Offices",
  description:
    "Expert civil law services including property disputes, money recovery, contract matters, and more. Professional legal representation in Delhi.",
};

export default function CivilLawPage() {
  const services = [
    {
      title: "Partition Suit",
      description:
        "Expert legal representation in property partition disputes to ensure fair division of assets.",
      details: [
        "Property division among family members",
        "Legal documentation and filing",
        "Court representation and mediation",
        "Settlement negotiations",
      ],
    },
    {
      title: "Money Recovery",
      description:
        "Aggressive legal action to recover outstanding debts and financial obligations.",
      details: [
        "Debt recovery litigation",
        "Bankruptcy proceedings",
        "Asset seizure and recovery",
        "Payment plan negotiations",
      ],
    },
    {
      title: "Real Estate",
      description:
        "Comprehensive legal services for all real estate transactions and disputes.",
      details: [
        "Property purchase and sale agreements",
        "Landlord-tenant disputes",
        "Property title verification",
        "Real estate litigation",
      ],
    },
    {
      title: "Arbitration",
      description:
        "Alternative dispute resolution through professional arbitration services.",
      details: [
        "Commercial arbitration",
        "Construction disputes",
        "Contract arbitration",
        "Award enforcement",
      ],
    },
    {
      title: "Contract Laws",
      description:
        "Expert legal counsel for contract drafting, review, and dispute resolution.",
      details: [
        "Contract drafting and review",
        "Breach of contract litigation",
        "Contract enforcement",
        "Legal compliance advice",
      ],
    },
    {
      title: "Wills",
      description: "Professional will drafting and estate planning services.",
      details: [
        "Will drafting and execution",
        "Estate planning",
        "Probate proceedings",
        "Succession planning",
      ],
    },
    {
      title: "Eviction Suit",
      description:
        "Legal representation in eviction proceedings for landlords and tenants.",
      details: [
        "Eviction notice preparation",
        "Court representation",
        "Tenant rights protection",
        "Property recovery",
      ],
    },
    {
      title: "Civil Defamation Cases",
      description:
        "Protection of reputation through civil defamation litigation.",
      details: [
        "Defamation claim filing",
        "Evidence collection",
        "Settlement negotiations",
        "Reputation protection",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">⚖️</div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Civil <span className="text-orange-600">Law</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive civil legal services including property disputes,
              money recovery, contract matters, and more. We provide expert
              representation in all civil legal matters.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Expert Civil Law Services
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our civil law practice encompasses a wide range of legal
                services designed to protect your rights and interests. From
                property disputes to contract matters, we provide comprehensive
                legal solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With years of experience in civil litigation, our team
                understands the complexities of civil law and works diligently
                to achieve the best possible outcomes for our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-orange-600 text-white px-8 py-4 font-semibold transition-all duration-300 hover:bg-orange-700 hover:shadow-lg transform hover:-translate-y-0.5 inline-flex items-center justify-center"
                >
                  Schedule Consultation
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="/team"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 font-semibold transition-all duration-300 inline-flex items-center justify-center"
                >
                  Meet Our Team
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 lg:p-12 shadow-2xl">
              <div className="text-white text-center">
                <div className="text-6xl mb-6">⚖️</div>
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose Our Civil Law Services?
                </h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Expert Legal Representation</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Alternative Dispute Resolution</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Settlement Negotiation</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Court Litigation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Civil Law Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal services to protect your rights and interests
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Civil Law Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to civil law matters
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Case Assessment",
                description:
                  "Thorough evaluation of your civil law matter and legal options.",
              },
              {
                step: "02",
                title: "Strategy Development",
                description:
                  "Creating a comprehensive legal strategy tailored to your case.",
              },
              {
                step: "03",
                title: "Legal Action",
                description:
                  "Implementing the strategy through negotiation or litigation.",
              },
              {
                step: "04",
                title: "Resolution",
                description:
                  "Achieving the best possible outcome for your case.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Civil Law Assistance?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us today for expert civil law representation. Our
            experienced attorneys are ready to help you navigate your legal
            challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              Schedule Free Consultation
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="/practice-areas"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              View All Practice Areas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
