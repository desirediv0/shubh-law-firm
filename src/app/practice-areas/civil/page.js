import Link from "next/link";

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
        "Expert legal representation in property partition disputes to ensure fair division of assets among family members.",
      details: [
        "Property division among family members",
        "Legal documentation and filing",
        "Court representation and mediation",
        "Settlement negotiations",
        "Title verification and documentation",
      ],
    },
    {
      title: "Money Recovery",
      description:
        "Aggressive legal action to recover outstanding debts and financial obligations with proven track record.",
      details: [
        "Debt recovery litigation",
        "Bankruptcy proceedings",
        "Asset seizure and recovery",
        "Payment plan negotiations",
        "Commercial debt recovery",
      ],
    },
    {
      title: "Real Estate",
      description:
        "Comprehensive legal services for all real estate transactions and disputes with expert guidance.",
      details: [
        "Property purchase and sale agreements",
        "Landlord-tenant disputes",
        "Property title verification",
        "Real estate litigation",
        "Property registration assistance",
      ],
    },
    {
      title: "Arbitration",
      description:
        "Alternative dispute resolution through professional arbitration services for faster resolution.",
      details: [
        "Commercial arbitration",
        "Construction disputes",
        "Contract arbitration",
        "Award enforcement",
        "Mediation services",
      ],
    },
    {
      title: "Contract Laws",
      description:
        "Expert legal counsel for contract drafting, review, and dispute resolution with comprehensive support.",
      details: [
        "Contract drafting and review",
        "Breach of contract litigation",
        "Contract enforcement",
        "Legal compliance advice",
        "Commercial agreements",
      ],
    },
    {
      title: "Wills",
      description:
        "Professional will drafting and estate planning services for secure future planning.",
      details: [
        "Will drafting and execution",
        "Estate planning",
        "Probate proceedings",
        "Succession planning",
        "Trust creation and management",
      ],
    },
    {
      title: "Eviction Suit",
      description:
        "Legal representation in eviction proceedings for landlords and tenants with fair resolution.",
      details: [
        "Eviction notice preparation",
        "Court representation",
        "Tenant rights protection",
        "Property recovery",
        "Rent dispute resolution",
      ],
    },
    {
      title: "Civil Defamation Cases",
      description:
        "Protection of reputation through civil defamation litigation with expert legal support.",
      details: [
        "Defamation claim filing",
        "Evidence collection",
        "Settlement negotiations",
        "Reputation protection",
        "Media law compliance",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 bg-gradient-to-br from-neutral-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">⚖️</div>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-brown mb-6 font-playfair">
              Civil <span className="text-contact-orange">Law</span>
            </h1>
            <p className="text-xl text-accent-blue max-w-3xl mx-auto">
              Comprehensive civil legal services including property disputes,
              money recovery, contract matters, and more. We provide expert
              representation in all civil legal matters.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-brown mb-6 font-playfair">
                Expert Civil Law Services
              </h2>
              <p className="text-lg text-accent-blue mb-6 leading-relaxed">
                Our civil law practice encompasses a wide range of legal
                services designed to protect your rights and interests. From
                property disputes to contract matters, we provide comprehensive
                legal solutions.
              </p>
              <p className="text-lg text-accent-blue mb-8 leading-relaxed">
                With years of experience in civil litigation, our team
                understands the complexities of civil law and works diligently
                to achieve the best possible outcomes for our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn btn-primary flex">
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
                </Link>
                <Link href="/team" className="btn btn-secondary">
                  Meet Our Team
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-brown to-contact-orange p-8 lg:p-12 shadow-2xl">
              <div className="text-white text-center">
                <div className="text-6xl mb-6">⚖️</div>
                <h3 className="text-2xl font-bold mb-4 font-playfair">
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
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-brown mb-4 font-playfair">
              Our Civil Law Services
            </h2>
            <p className="text-xl text-accent-blue max-w-3xl mx-auto">
              Comprehensive legal services to protect your rights and interests
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold text-primary-brown mb-4 font-playfair">
                  {service.title}
                </h3>
                <p className="text-accent-blue mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-contact-orange mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-accent-blue">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-brown mb-4 font-playfair">
              Our Civil Law Process
            </h2>
            <p className="text-xl text-accent-blue max-w-3xl mx-auto">
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
                <div className="w-16 h-16 bg-contact-orange text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-primary-brown mb-3 font-playfair">
                  {process.title}
                </h3>
                <p className="text-accent-blue">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-brown to-contact-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-playfair">
            Need Civil Law Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for expert civil law representation. Our
            experienced attorneys are ready to help you navigate your legal
            challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary  flex">
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
            </Link>
            <Link href="/practice-areas" className="btn btn-secondary">
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
