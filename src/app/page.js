import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Shubh Law Firm - Professional Legal Services',
  description: 'Shubh Law Firm provides expert legal services in criminal law, civil litigation, corporate law, and family law. Get professional legal consultation today.',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-36 pb-32 bg-luxury-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/3 to-luxury-bronze/3"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-primary-brown mb-8 leading-tight">
                Expert Legal Solutions for 
                <span className="text-accent-gold block">Your Success</span>
              </h1>
              <p className="text-xl text-accent-blue mb-10 leading-relaxed">
                With decades of experience and a commitment to excellence, Shubh Law Firm provides comprehensive legal services tailored to your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="/contact" className="btn btn-primary">
                  Request Consultation
                </a>
                <a href="/practice-areas" className="btn btn-secondary">
                  Our Services
                </a>
              </div>
            </div>
            <div className="fade-in">
              <div className="luxury-card bg-white p-12 text-primary-brown relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 to-luxury-bronze/5"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8 font-playfair">Why Choose Shubh Law Firm?</h3>
                  <ul className="space-y-6">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-accent-gold mr-4"></span>
                      <span className="text-lg">Decades of Legal Experience</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-accent-gold mr-4"></span>
                      <span className="text-lg">Personalized Legal Strategies</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-accent-gold mr-4"></span>
                      <span className="text-lg">Proven Track Record</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-accent-gold mr-4"></span>
                      <span className="text-lg">Client-Focused Approach</span>
                    </li>
                  </ul>
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
              <div className="text-5xl md:text-6xl font-bold text-accent-gold mb-4">25+</div>
              <div className="text-white/90 font-source-sans text-lg">Years Experience</div>
            </div>
            <div className="floating-animation" style={{animationDelay: '1s'}}>
              <div className="text-5xl md:text-6xl font-bold text-accent-gold mb-4">1000+</div>
              <div className="text-white/90 font-source-sans text-lg">Cases Won</div>
            </div>
            <div className="floating-animation" style={{animationDelay: '2s'}}>
              <div className="text-5xl md:text-6xl font-bold text-accent-gold mb-4">50+</div>
              <div className="text-white/90 font-source-sans text-lg">Team Members</div>
            </div>
            <div className="floating-animation" style={{animationDelay: '3s'}}>
              <div className="text-5xl md:text-6xl font-bold text-accent-gold mb-4">98%</div>
              <div className="text-white/90 font-source-sans text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title">
            <h2>Why Choose Us?</h2>
            <p>We combine legal expertise with personalized service to deliver exceptional results for our clients.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="luxury-card text-center">
              <div className="w-20 h-20 bg-primary-brown mx-auto mb-8 flex items-center justify-center elegant-shadow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 font-playfair">Expert Legal Counsel</h3>
              <p className="text-accent-blue text-lg leading-relaxed">Our team of experienced attorneys provides comprehensive legal advice and representation across all practice areas.</p>
            </div>
            
            <div className="luxury-card text-center">
              <div className="w-20 h-20 bg-primary-orange mx-auto mb-8 flex items-center justify-center elegant-shadow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 font-playfair">Personalized Service</h3>
              <p className="text-accent-blue text-lg leading-relaxed">We take the time to understand your unique situation and develop tailored legal strategies for optimal outcomes.</p>
            </div>
            
            <div className="luxury-card text-center">
              <div className="w-20 h-20 bg-accent-blue mx-auto mb-8 flex items-center justify-center elegant-shadow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 font-playfair">Proven Results</h3>
              <p className="text-accent-blue text-lg leading-relaxed">Our track record speaks for itself with successful outcomes in complex legal matters across various practice areas.</p>
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
                Decades of <span className="text-accent-gold">Legal Excellence</span>
              </h2>
              <p className="text-xl text-accent-blue mb-8 leading-relaxed">
                Founded in 1998, Shubh Law Firm has been at the forefront of legal innovation and client advocacy. 
                Our commitment to excellence has made us one of the most trusted names in legal services.
              </p>
              <p className="text-xl text-accent-blue mb-10 leading-relaxed">
                We understand that every legal matter is unique, which is why we provide personalized attention 
                and strategic counsel tailored to your specific needs and objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="/about" className="btn btn-primary">
                  Learn More About Us
                </a>
                <a href="/team" className="btn btn-secondary">
                  Meet Our Team
                </a>
              </div>
            </div>
            <div className="luxury-card">
              <h3 className="text-3xl font-bold mb-8 font-playfair text-accent-gold">Our Mission</h3>
              <p className="text-accent-blue text-lg mb-8 leading-relaxed">
                To provide exceptional legal counsel with integrity, dedication, and a results-driven approach 
                that puts our clients' interests first.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-accent-gold mr-4"></div>
                  <span className="text-primary-brown font-medium text-lg">Integrity in all our dealings</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-accent-gold mr-4"></div>
                  <span className="text-primary-brown font-medium text-lg">Excellence in legal representation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-accent-gold mr-4"></div>
                  <span className="text-primary-brown font-medium text-lg">Client-focused approach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-accent-gold mr-4"></div>
                  <span className="text-primary-brown font-medium text-lg">Innovation in legal strategies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Overview */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title">
            <h2>Our Practice Areas</h2>
            <p>Comprehensive legal services across multiple practice areas to meet all your legal needs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="luxury-card bg-white hover:bg-primary-brown group transition-all duration-500">
              <div className="w-16 h-16 bg-primary-orange mb-6 flex items-center justify-center elegant-shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white font-playfair">Criminal Law</h3>
              <p className="text-sm text-accent-blue group-hover:text-white/80 leading-relaxed">Expert defense representation for all types of criminal cases.</p>
            </div>
            
            <div className="luxury-card bg-white hover:bg-primary-brown group transition-all duration-500">
              <div className="w-16 h-16 bg-primary-orange mb-6 flex items-center justify-center elegant-shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white font-playfair">Civil Litigation</h3>
              <p className="text-sm text-accent-blue group-hover:text-white/80 leading-relaxed">Comprehensive representation in civil disputes and lawsuits.</p>
            </div>
            
            <div className="luxury-card bg-white hover:bg-primary-brown group transition-all duration-500">
              <div className="w-16 h-16 bg-primary-orange mb-6 flex items-center justify-center elegant-shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white font-playfair">Corporate Law</h3>
              <p className="text-sm text-accent-blue group-hover:text-white/80 leading-relaxed">Business formation, compliance, and corporate governance solutions.</p>
            </div>
            
            <div className="luxury-card bg-white hover:bg-primary-brown group transition-all duration-500">
              <div className="w-16 h-16 bg-primary-orange mb-6 flex items-center justify-center elegant-shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white font-playfair">Family Law</h3>
              <p className="text-sm text-accent-blue group-hover:text-white/80 leading-relaxed">Compassionate guidance through family legal matters and disputes.</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <a href="/practice-areas" className="btn btn-primary">
              View All Practice Areas
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-luxury-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it. Here's what our clients have to say about their experience with us.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="luxury-card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-brown rounded-full flex items-center justify-center mr-6 elegant-shadow">
                  <span className="text-white font-bold text-xl">JD</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary-brown font-playfair text-lg">John Davis</h4>
                  <p className="text-accent-blue">Business Owner</p>
                </div>
              </div>
              <p className="text-accent-blue italic text-lg leading-relaxed">
                "Shubh Law Firm handled my corporate legal matters with exceptional professionalism. 
                Their expertise and dedication to my case exceeded all expectations."
              </p>
            </div>
            
            <div className="luxury-card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mr-6 elegant-shadow">
                  <span className="text-white font-bold text-xl">SM</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary-brown font-playfair text-lg">Sarah Mitchell</h4>
                  <p className="text-accent-blue">Family Law Client</p>
                </div>
              </div>
              <p className="text-accent-blue italic text-lg leading-relaxed">
                "During a difficult family law case, the team at Shubh Law Firm provided not just legal 
                expertise, but genuine compassion and support throughout the entire process."
              </p>
            </div>
            
            <div className="luxury-card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center mr-6 elegant-shadow">
                  <span className="text-white font-bold text-xl">RJ</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary-brown font-playfair text-lg">Robert Johnson</h4>
                  <p className="text-accent-blue">Criminal Defense Client</p>
                </div>
              </div>
              <p className="text-accent-blue italic text-lg leading-relaxed">
                "The criminal defense team at Shubh Law Firm fought tirelessly for my rights. 
                Their strategic approach and courtroom expertise resulted in a favorable outcome."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title">
            <h2>Our Legal Process</h2>
            <p>We follow a systematic approach to ensure the best possible outcome for your case.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-brown text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold elegant-shadow">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 font-playfair">Initial Consultation</h3>
              <p className="text-accent-blue leading-relaxed">We begin with a comprehensive consultation to understand your legal needs and objectives.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-orange text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold elegant-shadow">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 font-playfair">Case Analysis</h3>
              <p className="text-accent-blue leading-relaxed">Our team conducts thorough research and analysis to develop the best legal strategy.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-blue text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold elegant-shadow">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 font-playfair">Strategic Execution</h3>
              <p className="text-accent-blue leading-relaxed">We implement our legal strategy with precision and dedication to achieve optimal results.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-gold text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold elegant-shadow">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 font-playfair">Resolution & Follow-up</h3>
              <p className="text-accent-blue leading-relaxed">We ensure your case is resolved satisfactorily and provide ongoing support as needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-brown text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 to-luxury-bronze/5"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-playfair">Ready to Get Started?</h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Contact us today for a confidential consultation about your legal matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="btn btn-accent">
              Schedule Consultation
            </a>
            <a href="tel:+1234567890" className="btn btn-secondary">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
