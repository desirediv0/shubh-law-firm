import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Practice Areas - Shubh Legal Offices",
  description:
    "Explore our comprehensive legal services including civil law, family law, and criminal law. Expert legal representation in Delhi since 2017.",
};

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      id: "civil",
      title: "Civil Law",
      icon: "⚖️",
      image: "/images/civil-law.jpg",
      shortDescription:
        "Comprehensive civil legal services including property disputes, money recovery, and contract matters.",
      fullDescription:
        "Our civil law practice encompasses a wide range of legal services including property disputes, money recovery, contract matters, and more. We provide expert representation in all civil legal matters.",
      services: [
        "Partition Suit",
        "Money Recovery",
        "Real Estate",
        "Arbitration",
        "Contract Laws",
        "Wills",
        "Eviction Suit",
        "Civil Defamation Cases",
      ],
      features: [
        "Expert Legal Representation",
        "Alternative Dispute Resolution",
        "Settlement Negotiation",
        "Court Litigation",
      ],
    },
    {
      id: "family",
      title: "Family Law",
      icon: "👨‍👩‍👧‍👦",
      image: "/images/family-law.jpg",
      shortDescription:
        "Compassionate guidance through family legal matters with a focus on protecting your family's best interests.",
      fullDescription:
        "Our family law practice provides compassionate and expert guidance through sensitive family legal matters. We understand the emotional complexities involved and work to protect your family's best interests.",
      services: [
        "Mutual Divorce",
        "Maintenance",
        "Child Custody",
        "Domestic Violence",
        "Transfer Petition",
        "Marriage Registration",
        "Contested Divorce",
        "Matrimonial Criminal",
        "Adoption",
        "498A",
      ],
      features: [
        "Mediation Services",
        "Collaborative Law",
        "Child Advocacy",
        "Emotional Support Resources",
      ],
    },
    {
      id: "criminal",
      title: "Criminal Law",
      icon: "🔒",
      image: "/images/criminal-law.jpg",
      shortDescription:
        "Expert defense in criminal cases with a focus on protecting your rights and ensuring fair treatment under the law.",
      fullDescription:
        "Our criminal law practice provides expert defense representation in all types of criminal cases. We focus on protecting your rights and ensuring fair treatment under the law.",
      services: [
        "Sexual Offence",
        "Fraud",
        "Bail",
        "Cyber Crime",
        "Cheque Bouncing",
        "Criminal Defamation Cases",
      ],
      features: [
        "24/7 Emergency Response",
        "Experienced Trial Attorneys",
        "Negotiation and Plea Bargaining",
        "Appeals and Post-Conviction Relief",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-600">Practice Areas</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have Focus in almost every legal fields. Comprehensive legal
              services across multiple practice areas, delivered with expertise,
              integrity, and dedication to achieving the best possible outcomes
              for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <div
                key={area.id}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <Image
                  src={area.image}
                  alt={area.title}
                  width={500}
                  height={500}
                  className="w-full h-56 object-cover"
                />
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {area.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.shortDescription}
                  </p>

                  {/* Services Preview (Limited) */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Our Services
                    </h4>
                    <ul className="space-y-2">
                      {area.services
                        .slice(0, 3)
                        .map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-start">
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
                            <span className="text-gray-600">{service}</span>
                          </li>
                        ))}
                    </ul>

                    {/* Blurred Additional Services */}
                    {area.services.length > 3 && (
                      <div className="relative mt-4">
                        <div className="blur-sm">
                          <ul className="space-y-2">
                            {area.services
                              .slice(3, 5)
                              .map((service, serviceIndex) => (
                                <li
                                  key={serviceIndex}
                                  className="flex items-start"
                                >
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
                                  <span className="text-gray-600">
                                    {service}
                                  </span>
                                </li>
                              ))}
                          </ul>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                      </div>
                    )}
                  </div>

                  {/* Learn More Button */}
                  <Link
                    href={`/practice-areas/${area.id}`}
                    className="inline-flex items-center justify-center w-full bg-orange-600 text-white px-6 py-3 font-semibold transition-all duration-300 hover:bg-orange-700 hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Learn More
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
              Our steps to achieve success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Understanding",
                description:
                  "We believe in devoting sufficient time, listening to our clients while understanding their issues.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Strategic Planning",
                description:
                  "Our team further formulates a strategy to aggressively defend and contest your stance.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Implementing The Steps",
                description:
                  "We believe in a wholesome execution of the plan in order to draw in fruitful results.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
            ].map((process, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-orange-600 text-white flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-700 transition-colors duration-300">
                  {process.icon}
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-2">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
            Need Legal Assistance?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our experienced attorneys
            are ready to help you navigate your legal challenges and achieve the
            best possible outcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
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
            </Link>
            <Link
              href="/team"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Meet Our Attorneys
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
