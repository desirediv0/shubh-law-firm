export const metadata = {
  title: "Family Law - Shubh Legal Offices",
  description:
    "Expert family law services including divorce, child custody, maintenance, and more. Compassionate legal representation in Delhi.",
};

export default function FamilyLawPage() {
  const services = [
    {
      title: "Mutual Divorce",
      description:
        "Ending a marriage legally is divorce and the easiest and the least traumatizing way to get a divorce and dissolve the marriage which is not working for either of the spouses is by mutual consent.",
      details: [
        "In a Mutual Consent Divorce a couple can mutually decide to dissolve their marriage under Section 13B of the Hindu Marriage Act, 1955.",
        "The consent of both parties is a key to this provision; therefore, if one or the other does not cooperate, the divorce cannot be granted.",
        "Conditions which have to be met to seek divorce under the Hindu Marriage Act are as follows:",
        "1. The parties have been married for a year;",
        "2. They have been living separately for at least one year;",
        "3. They have not been able to live like husband and wife, i.e. the marriage has broken down irretrievably;",
        "4. They have mutually agreed that marriage should be dissolved.",
      ],
      documents: [
        "Marriage Cards or Marriage Certificate",
        "Marriage Photograph",
        "Two Passport Size photographs of both parties",
        "Adhaar Card and/or any other current address proof of both parties",
        "Birth Certificate of child (if any)",
      ],
    },
    {
      title: "Contested Divorce",
      description:
        "Contested divorce is where the spouses can't agree on their divorce issues, and they end up in court, asking a judge to make these decisions for them.",
      process: [
        "prepare, file, and serve (deliver) the divorce petition (legal paperwork asking for the divorce and stating the grounds for the breakdown of the marriage)",
        "respond to the petition",
        "interview and hire an attorney",
        "engage in divorce discovery – the information gathering process, which involves various legal procedures to get information from your spouse and third-party witnesses (e.g., written questions, subpoenas, and depositions)",
        "pre-trial legal motions and hearings",
        "settlement proposals and negotiations between attorneys",
        "if settlement fails, prepare for trial",
        "complete a court trial, and",
        "file an appeal, if you dispute the trial judge's decision(s).",
      ],
    },
    {
      title: "Maintenance Under Section 125 CrPC",
      description:
        "According to Indian law, maintenance can be provided to specific classes of society such as wife, children, and aged parents.",
      details: [
        "Maintenance is generally allowed by the court to the affected party, just to bear the cost of the basic necessities like food, shelter, medical expenses.",
        "S125 of the CrPC is secular in nature. A Follower of any religion can apply to the court for maintenance.",
        "Section 125 CrPc is a part of criminal law. However, the purpose of the proceedings under Section 125 of Code of Criminal Procedure is not to punish a person for his past neglect, but to prevent destitution by compelling a husband, who can provide support, to the wife, children or Parents who is unable to support themselves.",
        "If you want to file or defend a petition under section 125 Cr.P.C. and looking for a competent lawyer to represent you, look no further; Just give us a call and let us handle the same in the most professional and transparent manner.",
      ],
    },
    {
      title: "Child Custody",
      description:
        "Expert legal representation in child custody matters to ensure the best interests of the child.",
      details: [
        "Custody evaluation and assessment",
        "Best interests of the child determination",
        "Visitation rights establishment",
        "Child support arrangements",
      ],
    },
    {
      title: "Domestic Violence",
      description:
        "Protection and legal support for victims of domestic violence.",
      details: [
        "Protection order applications",
        "Legal representation for victims",
        "Evidence collection and documentation",
        "Safety planning and support",
      ],
    },
    {
      title: "Adoption",
      description: "Legal guidance through the adoption process.",
      details: [
        "Adoption law compliance",
        "Documentation and paperwork",
        "Court representation",
        "Post-adoption legal support",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">👨‍👩‍👧‍👦</div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Family <span className="text-orange-600">Law</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compassionate guidance through family legal matters with a focus
              on protecting your family's best interests. We understand the
              emotional complexities involved and work to protect your family's
              best interests.
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
                Expert Family Law Services
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our family law practice provides compassionate and expert
                guidance through sensitive family legal matters. We understand
                that family disputes can be emotionally challenging and require
                a delicate approach.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From divorce proceedings to child custody matters, we work
                tirelessly to protect your family's interests while ensuring the
                best possible outcomes for all parties involved.
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
                <div className="text-6xl mb-6">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose Our Family Law Services?
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
                    <span>Mediation Services</span>
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
                    <span>Collaborative Law</span>
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
                    <span>Child Advocacy</span>
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
                    <span>Emotional Support Resources</span>
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
              Our Family Law Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive family law services with compassion and expertise
            </p>
          </div>
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {service.details && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Details:
                    </h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.process && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Process Steps:
                    </h4>
                    <ul className="space-y-2">
                      {service.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.documents && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Documents Required:
                    </h4>
                    <ul className="space-y-2">
                      {service.documents.map((doc, docIndex) => (
                        <li key={docIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-orange-600 mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
              Our Family Law Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compassionate approach to family law matters
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description:
                  "Compassionate consultation to understand your family situation and legal needs.",
              },
              {
                step: "02",
                title: "Case Evaluation",
                description:
                  "Thorough evaluation of your case and development of a personalized strategy.",
              },
              {
                step: "03",
                title: "Legal Representation",
                description:
                  "Expert legal representation with focus on family interests and well-being.",
              },
              {
                step: "04",
                title: "Resolution",
                description:
                  "Achieving the best possible outcome for your family's future.",
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
            Need Family Law Assistance?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us today for compassionate family law representation. Our
            experienced attorneys are ready to help you navigate your family
            legal challenges.
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
