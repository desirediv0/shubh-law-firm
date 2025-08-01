import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Our Team - Shubh Law Firm',
  description: 'Meet our experienced team of attorneys and legal professionals dedicated to providing exceptional legal services.',
}

export default function TeamPage() {
  const attorneys = [
    {
      name: 'Shubh Legal',
      position: 'Founding Partner',
      specialization: 'Criminal Law & Civil Litigation',
      experience: '25+ Years',
      education: 'Harvard Law School',
      bio: 'Shubh Legal is the founding partner of Shubh Law Firm, bringing over 25 years of legal expertise. Known for strategic thinking and unwavering dedication to client success.',
      achievements: ['Top Attorney Award 2023', '1000+ Cases Won', 'Harvard Law Alumni'],
      image: '/images/attorney-1.jpg',
    },
    {
      name: 'Sarah Johnson',
      position: 'Senior Partner',
      specialization: 'Corporate Law & Business',
      experience: '18+ Years',
      education: 'Stanford Law School',
      bio: 'Sarah specializes in corporate law and has helped hundreds of businesses navigate complex legal challenges. She is known for her practical approach to business law.',
      achievements: ['Corporate Lawyer of the Year', '500+ Business Clients', 'Stanford Law Alumni'],
      image: '/images/attorney-2.jpg',
    },
    {
      name: 'Michael Chen',
      position: 'Partner',
      specialization: 'Family Law & Mediation',
      experience: '15+ Years',
      education: 'Yale Law School',
      bio: 'Michael focuses on family law with a compassionate approach to sensitive family matters. He is a certified mediator and collaborative law practitioner.',
      achievements: ['Family Law Specialist', 'Certified Mediator', 'Yale Law Alumni'],
      image: '/images/attorney-3.jpg',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Associate Attorney',
      specialization: 'Civil Litigation & Personal Injury',
      experience: '8+ Years',
      education: 'UC Berkeley Law',
      bio: 'Emily is passionate about helping clients recover from personal injuries and civil disputes. She has a strong track record of securing favorable settlements.',
      achievements: ['Rising Star Attorney', '300+ Cases Settled', 'UC Berkeley Alumni'],
      image: '/images/attorney-4.jpg',
    },
    {
      name: 'David Thompson',
      position: 'Associate Attorney',
      specialization: 'Criminal Defense',
      experience: '6+ Years',
      education: 'Georgetown Law',
      bio: 'David specializes in criminal defense and has successfully defended clients in complex criminal cases. He is known for his aggressive defense strategies.',
      achievements: ['Criminal Defense Specialist', '200+ Cases Defended', 'Georgetown Alumni'],
      image: '/images/attorney-5.jpg',
    },
    {
      name: 'Lisa Wang',
      position: 'Associate Attorney',
      specialization: 'Intellectual Property & Technology',
      experience: '5+ Years',
      education: 'MIT & Harvard Law',
      bio: 'Lisa combines her technical background with legal expertise to help technology companies protect their intellectual property and navigate complex legal issues.',
      achievements: ['IP Law Specialist', 'Tech Law Expert', 'MIT/Harvard Alumni'],
      image: '/images/attorney-6.jpg',
    },
  ]

  const supportStaff = [
    {
      name: 'Jennifer Martinez',
      position: 'Legal Assistant',
      specialization: 'Case Management',
      experience: '10+ Years',
      bio: 'Jennifer manages case files and coordinates with clients to ensure smooth communication throughout the legal process.',
    },
    {
      name: 'Robert Wilson',
      position: 'Paralegal',
      specialization: 'Research & Documentation',
      experience: '8+ Years',
      bio: 'Robert conducts legal research and prepares documentation to support our attorneys in building strong cases.',
    },
    {
      name: 'Amanda Foster',
      position: 'Client Relations Manager',
      specialization: 'Client Services',
      experience: '6+ Years',
      bio: 'Amanda ensures that all clients receive personalized attention and support throughout their legal journey.',
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
              Meet Our <span className="text-orange-600">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of attorneys and legal professionals is dedicated to providing 
              exceptional legal services with integrity, expertise, and personalized attention.
            </p>
          </div>
        </div>
      </section>

      {/* Attorneys Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Attorneys
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced legal professionals committed to achieving the best possible outcomes for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attorneys.map((attorney, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="bg-gradient-to-br from-orange-500 to-red-600 h-48 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">
                      {attorney.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {attorney.name}
                  </h3>
                  <p className="text-orange-600 font-semibold mb-2">{attorney.position}</p>
                  <p className="text-gray-600 text-sm mb-3">{attorney.specialization}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {attorney.experience} Experience
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{attorney.bio}</p>
                  <div className="space-y-2">
                    {attorney.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Support Staff
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated support team ensures smooth operations and exceptional client service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportStaff.map((staff, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">
                    {staff.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{staff.name}</h3>
                <p className="text-orange-600 font-medium mb-2">{staff.position}</p>
                <p className="text-gray-600 text-sm mb-3">{staff.specialization}</p>
                <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {staff.experience} Experience
                </div>
                <p className="text-gray-600 text-sm">{staff.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Team by the Numbers
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              The collective experience and dedication of our team translates into exceptional results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Years Combined Experience' },
              { number: '1000+', label: 'Cases Successfully Handled' },
              { number: '50+', label: 'Team Members' },
              { number: '24/7', label: 'Client Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-orange-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Sets Our Team Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team's commitment to excellence and client success is reflected in everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Proven Expertise',
                description: 'Our attorneys have decades of combined experience across all practice areas.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Personalized Approach',
                description: 'Every client receives individual attention and customized legal strategies.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Results-Driven',
                description: 'We focus on achieving the best possible outcomes for our clients.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: '24/7 Availability',
                description: 'Our team is available around the clock for urgent legal matters.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: 'Continuous Learning',
                description: 'Our team stays current with legal developments and best practices.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Client-Focused',
                description: 'Your success and satisfaction are our top priorities.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-700 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
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
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation with one of our experienced attorneys. 
            We're here to help you navigate your legal challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              Schedule Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/practice-areas"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 