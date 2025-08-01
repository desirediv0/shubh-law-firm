import Link from "next/link";

export const metadata = {
  title: "About Us - Shubh Legal Offices",
  description:
    "Learn about Shubh Legal Offices' history since 2017, our mission, and the experienced team led by Deepak Singh Dhaliwal dedicated to providing exceptional legal services in S-147 Bar room -1 Civil Side Tishazari-110054 and 16 Mukharjee Nagar-110009.",
};

export default function AboutPage() {
  const processSteps = [
    {
      title: "Understanding",
      description:
        "We believe in devoting sufficient time, listening to our clients while understanding their issues.",
    },
    {
      title: "Strategic Planning",
      description:
        "Our team further formulates a strategy to aggressively defend and contest your stance.",
    },
    {
      title: "Implementing The Steps",
      description:
        "We believe in a wholesome execution of the plan in order to draw in fruitful results.",
    },
  ];

  const whyChooseUs = [
    "Focus on confidentiality & ethics",
    "Aggressive legal representation in court",
    "Competent fee & billing structure",
    "One stop place for all legal services",
    "Client satisfaction & regular update on case",
    "Result oriented solution with impact",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-10 bg-gradient-to-br from-neutral-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-brown mb-6 font-playfair">
              About{" "}
              <span className="text-contact-orange">Shubh Legal Offices</span>
            </h1>
            <p className="text-xl text-accent-blue max-w-3xl mx-auto">
              Providing legal services with proud since 2017. We are headed by
              Deepak Singh Dhaliwal, a nationally renowned lawyer serving
              clients in S-147 Bar room -1 Civil Side Tishazari-110054 and 16
              Mukharjee Nagar-110009.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-brown mb-6 font-playfair">
                Our Story
              </h2>
              <div className="space-y-6 text-accent-blue">
                <p className="text-lg leading-relaxed">
                  Shubh legal offices was founded in 2017. Is a well-known law
                  firm that provides a variety of legal services to clients
                  around the world.
                </p>
                <p className="text-lg leading-relaxed">
                  We are headed by <strong>Deepak Singh Dhaliwal</strong> a
                  nationally renowned lawyer. As a well-known lawyer in the
                  Delhi Court, he is a constant source of inspiration for us,
                  making this law firm unparalleled.
                </p>
                <p className="text-lg leading-relaxed">
                  Law firms have been providing legal services to their clients
                  for the past 8 years. The company is based in{" "}
                  <strong>
                    S-147 Bar room -1 Civil Side Tishazari-110054 and 16
                    Mukharjee Nagar-110009
                  </strong>
                  .
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-brown to-contact-orange p-8 lg:p-12 shadow-2xl">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-6 font-playfair">
                    Our Mission
                  </h3>
                  <p className="text-lg mb-6">
                    To provide exceptional legal counsel with integrity,
                    dedication, and a results-driven approach that puts our
                    clients&apos; interests first.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">8+</div>
                      <div className="text-white/80">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">500+</div>
                      <div className="text-white/80">Cases Won</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">2017</div>
                      <div className="text-white/80">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">24/7</div>
                      <div className="text-white/80">Availability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Are Targeted Section */}
      <section className="section bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title">
            <h2>Where We Are Targeted</h2>
            <p>
              We as a Law Firm have our objectives clear where we endeavor to
              provide our clients with services which ensure perfect and
              permanent solutions for them. Our objectives can be listed below:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-brown text-white flex items-center justify-center mx-auto mb-4">
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
              </div>
              <h3 className="text-xl font-semibold text-primary-brown mb-3 font-playfair">
                To better understand your needs
              </h3>
              <p className="text-accent-blue">
                We believe in devoting sufficient time, listening to our clients
                while understanding their issues.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-contact-orange text-white flex items-center justify-center mx-auto mb-4">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-brown mb-3 font-playfair">
                To maintain effective communication
              </h3>
              <p className="text-accent-blue">
                To maintain effective communication with client and ensure
                regular updates.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-accent-blue text-white flex items-center justify-center mx-auto mb-4">
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
              </div>
              <h3 className="text-xl font-semibold text-primary-brown mb-3 font-playfair">
                To innovate ways
              </h3>
              <p className="text-accent-blue">
                To innovate ways to make the process of obtaining justice
                simpler.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-luxury-gold text-white flex items-center justify-center mx-auto mb-4">
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
              </div>
              <h3 className="text-xl font-semibold text-primary-brown mb-3 font-playfair">
                To implement and review
              </h3>
              <p className="text-accent-blue">
                To implement, conduct, and review process periodically to
                achieve better result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title">
            <h2>Our Process</h2>
            <p>Our steps to achieve success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-brown to-contact-orange text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-primary-brown mb-4 font-playfair">
                  {step.title}
                </h3>
                <p className="text-accent-blue">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title">
            <h2>Why Choose Us</h2>
            <p>This is why we are the best lawyer firm for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="luxury-card">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-luxury-gold mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg text-accent-blue">{reason}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Member Section */}
      <section className="section bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-neutral-light to-white p-8 lg:p-12">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-brown to-contact-orange flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-4xl font-bold font-playfair">
                    DSD
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary-brown mb-2 font-playfair">
                    Deepak Singh Dhaliwal
                  </h3>
                  <p className="text-contact-orange font-semibold mb-4">
                    Nationally Renowned Lawyer
                  </p>
                  <p className="text-accent-blue">
                    As a well-known lawyer in the Delhi Court, he is a constant
                    source of inspiration for us, making this law firm
                    unparalleled.
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-brown mb-6 font-playfair">
                Meet Our Leading Lawyer
              </h2>
              <div className="space-y-6 text-accent-blue">
                <p className="text-lg leading-relaxed">
                  <strong>Deepak Singh Dhaliwal</strong> is a nationally
                  renowned lawyer who heads Shubh Legal Offices. With extensive
                  experience in the Delhi Court, he has established himself as
                  one of the most respected legal professionals in the region.
                </p>
                <p className="text-lg leading-relaxed">
                  As a well-known lawyer in the Delhi Court, he is a constant
                  source of inspiration for us, making this law firm
                  unparalleled. His expertise spans across civil law, family
                  law, and criminal law, providing comprehensive legal solutions
                  to clients.
                </p>
                <p className="text-lg leading-relaxed">
                  Under his leadership, Shubh Legal Offices has been providing
                  exceptional legal services to clients for the past 8 years,
                  serving the communities of S-147 Bar room -1 Civil Side
                  Tishazari-110054 and 16 Mukharjee Nagar-110009.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="bg-contact-orange/10 text-contact-orange px-4 py-2 font-medium">
                    Delhi Court Experience
                  </div>
                  <div className="bg-contact-orange/10 text-contact-orange px-4 py-2 font-medium">
                    8+ Years Experience
                  </div>
                  <div className="bg-contact-orange/10 text-contact-orange px-4 py-2 font-medium">
                    Nationally Renowned
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section bg-gradient-to-r from-primary-brown to-contact-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-playfair">
            Our Vision for the Future
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            We envision a future where quality legal representation is
            accessible to all, where justice is served with integrity, and where
            our firm continues to be a trusted partner in our clients&apos;
            success stories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6">
              <h3 className="text-xl font-semibold text-white mb-3 font-playfair">
                Innovation
              </h3>
              <p className="text-white/80">
                Embracing technology and modern legal practices to better serve
                our clients.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6">
              <h3 className="text-xl font-semibold text-white mb-3 font-playfair">
                Growth
              </h3>
              <p className="text-white/80">
                Expanding our services and reach while maintaining the personal
                touch our clients value.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6">
              <h3 className="text-xl font-semibold text-white mb-3 font-playfair">
                Excellence
              </h3>
              <p className="text-white/80">
                Continuing to set the standard for legal excellence and client
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-neutral-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-brown mb-6 font-playfair">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-accent-blue mb-8">
            Let us help you navigate your legal challenges with expertise and
            dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary">
              Schedule Consultation
            </Link>
            <Link href="/team" className="btn btn-secondary">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
