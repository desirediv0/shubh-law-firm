import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'About Us - Shubh Law Firm',
  description: 'Learn about Shubh Law Firm\'s history, mission, and the experienced team dedicated to providing exceptional legal services.',
}

export default function AboutPage() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our legal practices and client relationships.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Excellence',
      description: 'We strive for excellence in every case, delivering the best possible outcomes for our clients.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Client Focus',
      description: 'Our clients are at the center of everything we do, with personalized attention and dedicated service.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Knowledge',
      description: 'We stay current with legal developments and maintain deep expertise across all practice areas.',
    },
  ]

  const achievements = [
    { number: '25+', label: 'Years of Experience' },
    { number: '1000+', label: 'Cases Successfully Handled' },
    { number: '50+', label: 'Expert Attorneys' },
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '24/7', label: 'Client Support' },
    { number: '15+', label: 'Practice Areas' },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-neutral-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-brown mb-6 font-playfair">
              About <span className="text-primary-orange">Shubh Law Firm</span>
            </h1>
            <p className="text-xl text-accent-blue max-w-3xl mx-auto">
              For over two decades, we have been providing exceptional legal services with integrity, 
              dedication, and a commitment to achieving the best possible outcomes for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section bg-primary-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary-orange mb-2">{achievement.number}</div>
                <div className="text-white/80 font-source-sans text-sm">{achievement.label}</div>
              </div>
            ))}
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
                  Founded in 1998, Shubh Law Firm began with a simple mission: to provide accessible, 
                  high-quality legal services to individuals and businesses who deserve nothing less than 
                  exceptional representation.
                </p>
                <p className="text-lg leading-relaxed">
                  What started as a small practice has grown into one of the region's most respected law firms, 
                  serving thousands of clients across multiple practice areas. Our growth has been driven by 
                  our unwavering commitment to client success and our reputation for delivering results.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we continue to build on our legacy of excellence, combining traditional legal 
                  expertise with modern approaches to meet the evolving needs of our clients in an 
                  increasingly complex legal landscape.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-brown to-primary-orange p-8 lg:p-12 shadow-2xl">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-6 font-playfair">Our Mission</h3>
                  <p className="text-lg mb-6">
                    To provide exceptional legal counsel with integrity, dedication, and a results-driven 
                    approach that puts our clients' interests first.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">25+</div>
                      <div className="text-white/80">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">1000+</div>
                      <div className="text-white/80">Cases Won</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">50+</div>
                      <div className="text-white/80">Team Members</div>
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

      {/* Our Values Section */}
      <section className="section bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>These fundamental principles guide everything we do and shape our relationships with clients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-primary-brown text-white flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-brown mb-3 font-playfair">
                  {value.title}
                </h3>
                <p className="text-accent-blue">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Member Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-neutral-light to-white p-8 lg:p-12">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-brown to-primary-orange flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-4xl font-bold font-playfair">SL</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary-brown mb-2 font-playfair">Shubh Legal</h3>
                  <p className="text-primary-orange font-semibold mb-4">Founding Partner</p>
                  <p className="text-accent-blue">
                    With over 25 years of legal experience, Shubh Legal has built a reputation for 
                    excellence and integrity in the legal community.
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-brown mb-6 font-playfair">
                Meet Our Founding Partner
              </h2>
              <div className="space-y-6 text-accent-blue">
                <p className="text-lg leading-relaxed">
                  Shubh Legal, our founding partner, brings over 25 years of legal expertise to every case. 
                  A graduate of Harvard Law School, Shubh has successfully represented clients in complex 
                  legal matters across multiple jurisdictions.
                </p>
                <p className="text-lg leading-relaxed">
                  Known for strategic thinking and unwavering dedication to client success, Shubh has 
                  earned recognition as one of the region's top attorneys, with numerous awards and 
                  accolades for legal excellence.
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond legal practice, Shubh is committed to community service and legal education, 
                  regularly speaking at legal conferences and mentoring young attorneys.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="bg-primary-orange/10 text-primary-orange px-4 py-2 font-medium">
                    Harvard Law School
                  </div>
                  <div className="bg-primary-orange/10 text-primary-orange px-4 py-2 font-medium">
                    25+ Years Experience
                  </div>
                  <div className="bg-primary-orange/10 text-primary-orange px-4 py-2 font-medium">
                    Top Attorney Award
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section bg-gradient-to-r from-primary-brown to-primary-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-playfair">
            Our Vision for the Future
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            We envision a future where quality legal representation is accessible to all, where justice 
            is served with integrity, and where our firm continues to be a trusted partner in our 
            clients' success stories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6">
              <h3 className="text-xl font-semibold text-white mb-3 font-playfair">Innovation</h3>
              <p className="text-white/80">
                Embracing technology and modern legal practices to better serve our clients.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6">
              <h3 className="text-xl font-semibold text-white mb-3 font-playfair">Growth</h3>
              <p className="text-white/80">
                Expanding our services and reach while maintaining the personal touch our clients value.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6">
              <h3 className="text-xl font-semibold text-white mb-3 font-playfair">Excellence</h3>
              <p className="text-white/80">
                Continuing to set the standard for legal excellence and client satisfaction.
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
            Let us help you navigate your legal challenges with expertise and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary">
              Schedule Consultation
            </a>
            <a href="/team" className="btn btn-secondary">
              Meet Our Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 