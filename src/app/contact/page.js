"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful submission
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-neutral-light to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-contact-orange mb-6 font-playfair">
            Contact Us
          </h1>
          <p className="text-xl text-accent-blue max-w-2xl mx-auto">
            Get in touch with our experienced legal team for a confidential
            consultation about your legal matter.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6 font-playfair">
                Send Us a Message
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 ">
                  Thank you for your message. We will get back to you within 24
                  hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 ">
                  There was an error sending your message. Please try again or
                  call us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-primary-brown mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border focus:outline-none font-source-sans  transition-colors ${
                        errors.name
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-300 focus:border-primary-brown"
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primary-brown mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border focus:outline-none font-source-sans  transition-colors ${
                        errors.email
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-300 focus:border-primary-brown"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-primary-brown mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary-brown focus:outline-none font-source-sans  transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-primary-brown mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border focus:outline-none font-source-sans  transition-colors ${
                        errors.subject
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-300 focus:border-primary-brown"
                      }`}
                      placeholder="Brief description of your legal matter"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-primary-brown mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 border focus:outline-none font-source-sans resize-none  transition-colors ${
                      errors.message
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-300 focus:border-primary-brown"
                    }`}
                    placeholder="Please describe your legal matter in detail..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed "
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 font-playfair">
                  Get in Touch
                </h2>
                <p className="text-accent-blue mb-8 leading-relaxed">
                  Our experienced legal team led by Deepak Singh Dhaliwal is
                  here to help you navigate your legal challenges. Contact us
                  today for a confidential consultation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-brown flex items-center justify-center flex-shrink-0 ">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-brown mb-2 font-playfair">
                      Office Address
                    </h3>
                    <p className="text-accent-blue">
                      Mukharjee Nagar
                      <br />
                      Delhi, India
                      <br />
                      <br />
                      Tis Hazari
                      <br />
                      Delhi, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-contact-orange flex items-center justify-center flex-shrink-0 ">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-brown mb-2 font-playfair">
                      Phone
                    </h3>
                    <p className="text-accent-blue">
                      <a
                        href="tel:+919876543210"
                        className="hover:text-contact-orange transition-colors duration-200"
                      >
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-blue flex items-center justify-center flex-shrink-0 ">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-brown mb-2 font-playfair">
                      Email
                    </h3>
                    <p className="text-accent-blue">
                      <a
                        href="mailto:info@shubhlegaloffices.com"
                        className="hover:text-contact-orange transition-colors duration-200"
                      >
                        info@shubhlegaloffices.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-brown flex items-center justify-center flex-shrink-0 ">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-brown mb-2 font-playfair">
                      Office Hours
                    </h3>
                    <p className="text-accent-blue">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-neutral-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4 font-playfair">
              Our Locations
            </h2>
            <p className="text-accent-blue">
              Visit our offices for an in-person consultation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 text-center rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-primary-brown mb-4">
                Mukharjee Nagar
              </h3>
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center ">
                <p className="text-accent-blue">Interactive Map Coming Soon</p>
              </div>
            </div>
            <div className="bg-white p-8 text-center rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-primary-brown mb-4">
                Tis Hazari
              </h3>
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center ">
                <p className="text-accent-blue">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-playfair">
              Frequently Asked Questions
            </h2>
            <p className="text-accent-blue">
              Common questions about our legal services
            </p>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-bold mb-3 font-playfair">
                How much does a consultation cost?
              </h3>
              <p className="text-accent-blue">
                We offer a free initial consultation to discuss your legal
                matter and determine how we can help you.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold mb-3 font-playfair">
                What should I bring to my first meeting?
              </h3>
              <p className="text-accent-blue">
                Please bring any relevant documents, court papers, contracts, or
                other materials related to your case.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold mb-3 font-playfair">
                How long does it take to resolve a case?
              </h3>
              <p className="text-accent-blue">
                The timeline varies depending on the complexity of your case and
                the legal process involved. We'll provide you with a realistic
                timeline during your consultation.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold mb-3 font-playfair">
                Do you offer payment plans?
              </h3>
              <p className="text-accent-blue">
                Yes, we offer flexible payment options to make our legal
                services accessible to all clients.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold mb-3 font-playfair">
                What areas of law do you specialize in?
              </h3>
              <p className="text-accent-blue">
                We specialize in Civil Law, Family Law, and Criminal Law,
                providing comprehensive legal services across these practice
                areas.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold mb-3 font-playfair">
                Are you available for emergency legal matters?
              </h3>
              <p className="text-accent-blue">
                Yes, we provide 24/7 emergency response for urgent legal
                matters, especially in criminal cases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
