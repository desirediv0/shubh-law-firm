import Link from "next/link";

export const metadata = {
  title: "Criminal Law - Shubh Legal Offices",
  description:
    "Expert criminal law defense services including bail, sexual offences, fraud, and more. Professional legal representation in S-147 Bar room -1 Civil Side Tishazari-110054 and 16 Mukharjee Nagar-110009.",
};

export default function CriminalLawPage() {
  const services = [
    {
      title: "Cheque Bouncing",
      description:
        "A cheque bounce is an offence under Section 138 of the Negotiable Instruments Act, 1881 (Act) punishable with a fine which can extend to twice the amount of the cheque or imprisonment for a term not more than two years or both.",
      details: [
        "When the payee presents a cheque to the bank for payment, and the cheque is returned unpaid by the bank with a memo of insufficient funds, then the cheque is said to have bounced.",
        "A cheque bounce can occur due to several reasons, but if a cheque bounces due to insufficient funds in the drawer's account, it amounts to an offence under the Act.",
        "The bank must reject the cheque presented for payment with a return memo stating the reason as insufficient funds.",
        "In such a case, the payee of the cheque can issue a cheque bounce notice to the drawer demanding to pay the cheque amount.",
        "Expert legal representation in cheque bounce cases with proven track record.",
      ],
    },
    {
      title: "Sexual Offence",
      description:
        "Sex crimes are crimes of a sexual nature requiring expert legal defense.",
      details: [
        "Commonly known sexual crimes include rape, child abuse, sexual assault, obscene acts, possession and distribution of child pornography, possession and distribution of obscene materials, prostitution, solicitation of prostitution, pimping, and pandaling.",
        "Publicly obscene, vulgar behavior involving children, etc.",
        "Invasion of foreign matter into the genital or anal area",
        "Expert defense representation in all types of sexual offence cases",
        "Evidence analysis and defense strategy development",
      ],
    },
    {
      title: "Bail",
      description:
        "Bail is a legitimate way to get out of jail temporarily in certain circumstances of arrest.",
      details: [
        "In some cases, depending on the severity and nature of the accusation against you, the law may even allow you to avoid arrest in the first place. This is known as pre-bail.",
        "Once bail is granted, you can consult a lawyer, look for witnesses, collect evidence, and continue working.",
        "If bail is not granted, you will remain in custody with police.",
        "Expert bail application preparation and representation",
        "Emergency bail services available 24/7",
      ],
    },
    {
      title: "Fraud",
      description:
        "Expert legal defense in fraud cases and financial crimes with comprehensive support.",
      details: [
        "Financial fraud defense",
        "Identity theft cases",
        "Insurance fraud",
        "Banking fraud",
        "Corporate fraud defense",
      ],
    },
    {
      title: "Cyber Crime",
      description:
        "Legal representation in cyber crime and digital offense cases with modern expertise.",
      details: [
        "Online fraud defense",
        "Digital evidence handling",
        "Cyber harassment cases",
        "Data protection violations",
        "Internet crime defense",
      ],
    },
    {
      title: "Criminal Defamation Cases",
      description:
        "Expert defense in criminal defamation cases with reputation protection.",
      details: [
        "Defamation case defense",
        "Evidence collection and analysis",
        "Court representation",
        "Settlement negotiations",
        "Appeal proceedings",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 bg-gradient-to-br from-neutral-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🔒</div>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-brown mb-6 font-playfair">
              Criminal <span className="text-contact-orange">Law</span>
            </h1>
            <p className="text-xl text-accent-blue max-w-3xl mx-auto">
              Expert defense in criminal cases with a focus on protecting your
              rights and ensuring fair treatment under the law. We provide
              expert defense representation in all types of criminal cases.
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
                Expert Criminal Law Defense
              </h2>
              <p className="text-lg text-accent-blue mb-6 leading-relaxed">
                Our criminal law practice provides expert defense representation
                in all types of criminal cases. We focus on protecting your
                rights and ensuring fair treatment under the law.
              </p>
              <p className="text-lg text-accent-blue mb-8 leading-relaxed">
                With extensive experience in criminal defense, we understand the
                complexities of criminal law and work tirelessly to protect your
                rights and achieve the best possible outcomes for your case.
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
                <div className="text-6xl mb-6">🔒</div>
                <h3 className="text-2xl font-bold mb-4 font-playfair">
                  Why Choose Our Criminal Law Services?
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
                    <span>24/7 Emergency Response</span>
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
                    <span>Experienced Trial Attorneys</span>
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
                    <span>Negotiation and Plea Bargaining</span>
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
                    <span>Appeals and Post-Conviction Relief</span>
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
              Our Criminal Law Services
            </h2>
            <p className="text-xl text-accent-blue max-w-3xl mx-auto">
              Expert defense services to protect your rights and freedom
            </p>
          </div>
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="card">
                <h3 className="text-2xl font-bold text-primary-brown mb-6 font-playfair">
                  {service.title}
                </h3>
                <p className="text-accent-blue mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary-brown mb-4 font-playfair">
                    Key Details:
                  </h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-contact-orange mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-accent-blue">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 bg-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🚨</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-playfair">
            24/7 Emergency Legal Support
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            If you or a loved one has been arrested or charged with a crime,
            time is critical. Our criminal defense team is available 24/7 for
            emergency legal assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919717555175" className="btn btn-primary flex">
              Emergency Call Now
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
            <Link href="/contact" className="btn btn-secondary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-brown mb-4 font-playfair">
              Our Criminal Defense Process
            </h2>
            <p className="text-xl text-accent-blue max-w-3xl mx-auto">
              Systematic approach to criminal defense
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Immediate Response",
                description:
                  "24/7 emergency response for arrests and urgent legal matters.",
              },
              {
                step: "02",
                title: "Case Analysis",
                description:
                  "Thorough analysis of charges, evidence, and legal options.",
              },
              {
                step: "03",
                title: "Defense Strategy",
                description:
                  "Development of comprehensive defense strategy tailored to your case.",
              },
              {
                step: "04",
                title: "Legal Representation",
                description:
                  "Expert representation in court with focus on protecting your rights.",
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
            Need Criminal Defense?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us immediately for expert criminal defense representation.
            Our experienced attorneys are ready to protect your rights and
            freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary flex">
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
