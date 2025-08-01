import Link from "next/link";

export const metadata = {
  title: "Shubh Legal Offices - Professional Legal Services Since 2017",
  description:
    "Shubh Legal Offices provides expert legal services in civil law, family law, and criminal law. Founded in 2017 by Deepak Singh Dhaliwal, serving clients in S-147 Bar room -1 Civil Side Tishazari-110054 and 16 Mukharjee Nagar-110009.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-32 bg-luxury-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/3 to-luxury-bronze/3"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-primary-brown mb-8 leading-tight">
                We are proud as
                <span className="text-contact-orange block">
                  law associates
                </span>
              </h1>
              <p className="text-xl text-accent-blue mb-10 leading-relaxed">
                Because our Experience will help to fight against any illegal
                and violence activity. Providing legal services with proud since
                2017.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact" className="btn btn-primary">
                  Read More
                </Link>
                <Link href="/practice-areas" className="btn btn-secondary">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="fade-in">
              <div className="luxury-card bg-white p-12 text-primary-brown relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 to-luxury-bronze/5"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8 font-playfair">
                    About Shubh Legal Offices
                  </h3>
                  <p className="text-lg mb-6">
                    Shubh legal offices was founded in 2017. Is a well-known law
                    firm that provides a variety of legal services to clients
                    around the world.
                  </p>
                  <p className="text-lg mb-6">
                    We are headed by <strong>Deepak Singh Dhaliwal</strong> a
                    nationally renowned lawyer. As a well-known lawyer in the
                    Delhi Court, he is a constant source of inspiration for us,
                    making this law firm unparalleled.
                  </p>
                  <p className="text-lg">
                    The company is based in{" "}
                    <strong>
                      S-147 Bar room -1 Civil Side Tishazari-110054 and 16
                      Mukharjee Nagar-110009
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section bg-primary-brown text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 to-luxury-bronze/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="floating-animation">
              <div className="text-5xl md:text-6xl font-bold text-luxury-gold mb-4">
                8+
              </div>
              <div className="text-white/90 font-source-sans text-lg">
                Years Experience
              </div>
            </div>
            <div
              className="floating-animation"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-5xl md:text-6xl font-bold text-luxury-gold mb-4">
                500+
              </div>
              <div className="text-white/90 font-source-sans text-lg">
                Cases Won
              </div>
            </div>
            <div
              className="floating-animation"
              style={{ animationDelay: "2s" }}
            >
              <div className="text-5xl md:text-6xl font-bold text-luxury-gold mb-4">
                2017
              </div>
              <div className="text-white/90 font-source-sans text-lg">
                Founded
              </div>
            </div>
            <div
              className="floating-animation"
              style={{ animationDelay: "3s" }}
            >
              <div className="text-5xl md:text-6xl font-bold text-luxury-gold mb-4">
                100%
              </div>
              <div className="text-white/90 font-source-sans text-lg">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Are Targeted Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title">
            <h2>Where We Are Targeted</h2>
            <p>
              We as a Law Firm have our objectives clear where we endeavor to
              provide our clients with services which ensure perfect and
              permanent solutions for them. Our objectives can be listed below:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="luxury-card text-center">
              <div className="w-20 h-20 bg-primary-brown mx-auto mb-8 flex items-center justify-center elegant-shadow">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 font-playfair">
                To better understand your needs
              </h3>
              <p className="text-accent-blue text-lg leading-relaxed">
                We believe in devoting sufficient time, listening to our clients
                while understanding their issues.
              </p>
            </div>

            <div className="luxury-card text-center">
              <div className="w-20 h-20 bg-contact-orange mx-auto mb-8 flex items-center justify-center elegant-shadow">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 font-playfair">
                To maintain effective communication
              </h3>
              <p className="text-accent-blue text-lg leading-relaxed">
                To maintain effective communication with client and ensure
                regular updates.
              </p>
            </div>

            <div className="luxury-card text-center">
              <div className="w-20 h-20 bg-accent-blue mx-auto mb-8 flex items-center justify-center elegant-shadow">
                <svg
                  className="w-10 h-10 text-white"
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
              </div>
              <h3 className="text-2xl font-bold mb-6 font-playfair">
                To innovate ways
              </h3>
              <p className="text-accent-blue text-lg leading-relaxed">
                To innovate ways to make the process of obtaining justice
                simpler.
              </p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div className="luxury-card">
              <h3 className="text-2xl font-bold mb-6 font-playfair text-primary-brown">
                Our Additional Objectives
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-luxury-gold mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-accent-blue">
                    To response each and every clients
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-luxury-gold mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-accent-blue">
                    To implement, conduct, and review process periodically to
                    achieve better result
                  </span>
                </li>
              </ul>
            </div>
            <div className="luxury-card">
              <h3 className="text-2xl font-bold mb-6 font-playfair text-primary-brown">
                Why Choose Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-luxury-gold mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-accent-blue">
                    Focus on confidentiality & ethics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-luxury-gold mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-accent-blue">
                    Aggressive legal representation in court
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-luxury-gold mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-accent-blue">
                    Competent fee & billing structure
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-luxury-gold mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-accent-blue">
                    One stop place for all legal services
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-luxury-gold mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-accent-blue">
                    Client satisfaction & regular update on case
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-luxury-gold mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-accent-blue">
                    Result oriented solution with impact
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Overview */}
      <section className="section bg-luxury-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title">
            <h2>Practice Areas</h2>
            <p>We have Focus in almost every legal fields</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="luxury-card bg-white hover:bg-primary-brown group transition-all duration-500">
              <div className="w-16 h-16 bg-contact-orange mb-6 flex items-center justify-center elegant-shadow">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white font-playfair">
                Civil Law
              </h3>
              <ul className="text-sm text-accent-blue group-hover:text-white/80 leading-relaxed space-y-1">
                <li>• Partition Suit</li>
                <li>• Money Recovery</li>
                <li>• Real Estate</li>
                <li>• Arbitration</li>
                <li>• Contract Laws</li>
                <li>• Wills</li>
              </ul>
            </div>

            <div className="luxury-card bg-white hover:bg-primary-brown group transition-all duration-500">
              <div className="w-16 h-16 bg-contact-orange mb-6 flex items-center justify-center elegant-shadow">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white font-playfair">
                Family Law
              </h3>
              <ul className="text-sm text-accent-blue group-hover:text-white/80 leading-relaxed space-y-1">
                <li>• Mutual Divorce</li>
                <li>• Maintenance</li>
                <li>• Child Custody</li>
                <li>• Domestic Violence</li>
                <li>• Transfer Petition</li>
                <li>• Marriage Registration</li>
                <li>• Contested Divorce</li>
                <li>• Matrimonial Criminal</li>
              </ul>
            </div>

            <div className="luxury-card bg-white hover:bg-primary-brown group transition-all duration-500">
              <div className="w-16 h-16 bg-contact-orange mb-6 flex items-center justify-center elegant-shadow">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white font-playfair">
                Criminal Law
              </h3>
              <ul className="text-sm text-accent-blue group-hover:text-white/80 leading-relaxed space-y-1">
                <li>• Sexual Offence</li>
                <li>• Fraud</li>
                <li>• Bail</li>
                <li>• Cyber Crime</li>
                <li>• Cheque Bouncing</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/practice-areas" className="btn btn-primary">
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title">
            <h2>Our Process</h2>
            <p>Our steps to achieve success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-brown text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold elegant-shadow">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 font-playfair">
                Understanding
              </h3>
              <p className="text-accent-blue leading-relaxed">
                We believe in devoting sufficient time, listening to our clients
                while understanding their issues.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-contact-orange text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold elegant-shadow">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 font-playfair">
                Strategic Planning
              </h3>
              <p className="text-accent-blue leading-relaxed">
                Our team further formulates a strategy to aggressively defend
                and contest your stance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-blue text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold elegant-shadow">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 font-playfair">
                Implementing The Steps
              </h3>
              <p className="text-accent-blue leading-relaxed">
                We believe in a wholesome execution of the plan in order to draw
                in fruitful results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section bg-luxury-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-brown mb-8 font-playfair">
                Founded in <span className="text-contact-orange">2017</span>
              </h2>
              <p className="text-xl text-accent-blue mb-8 leading-relaxed">
                Shubh legal offices was founded in 2017. Is a well-known law
                firm that provides a variety of legal services to clients around
                the world. We are headed by Deepak Singh Dhaliwal a nationally
                renowned lawyer.
              </p>
              <p className="text-xl text-accent-blue mb-10 leading-relaxed">
                As a well-known lawyer in the Delhi Court, he is a constant
                source of inspiration for us, making this law firm unparalleled.
                Law firms have been providing legal services to their clients
                for the past 8 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
                <Link href="/team" className="btn btn-secondary">
                  Meet Our Team
                </Link>
              </div>
            </div>
            <div className="luxury-card">
              <h3 className="text-3xl font-bold mb-8 font-playfair text-luxury-gold">
                Our Mission
              </h3>
              <p className="text-accent-blue text-lg mb-8 leading-relaxed">
                To provide exceptional legal counsel with integrity, dedication,
                and a results-driven approach that puts our clients&apos;
                interests first.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-luxury-gold mr-4"></div>
                  <span className="text-primary-brown font-medium text-lg">
                    Based in S-147 Bar room -1 Civil Side Tishazari-110054 and
                    16 Mukharjee Nagar-110009
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-luxury-gold mr-4"></div>
                  <span className="text-primary-brown font-medium text-lg">
                    Headed by Deepak Singh Dhaliwal
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-luxury-gold mr-4"></div>
                  <span className="text-primary-brown font-medium text-lg">
                    8+ Years of Legal Excellence
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-luxury-gold mr-4"></div>
                  <span className="text-primary-brown font-medium text-lg">
                    Nationally Renowned Legal Services
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-brown text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 to-luxury-bronze/5"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-playfair">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Contact us today for a confidential consultation about your legal
            matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn btn-accent">
              Schedule Consultation
            </Link>
            <a href="tel:+919717555175" className="btn btn-secondary">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
