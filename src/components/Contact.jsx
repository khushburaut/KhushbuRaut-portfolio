import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    msg: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus({
      submitting: true,
      success: false,
      error: false,
      msg: ''
    });

    // Local Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        msg: 'Please fill in all required fields.'
      });
      return;
    }

    // Mock form submission
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: false,
        msg: 'Thank you for reaching out! I will get back to you as soon as possible.'
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-canvas relative overflow-hidden border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="editorial-section-tag justify-center">
            <span>—</span> Let's Connect <span>—</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-ink-950 font-heading mb-4">
            Get In <span className="text-brand-crimson">Touch</span>
          </h2>
          <p className="text-black max-w-xl mx-auto text-base sm:text-lg font-normal">
            Have a question, a project idea, or an internship opportunity? Feel free to drop a message!
          </p>
          <div className="w-12 h-1 bg-brand-crimson mx-auto rounded-full mt-4"></div>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-ink-950 font-heading leading-tight">
              Let's build something <span className="text-brand-crimson">amazing</span> together!
            </h3>

            <p className="text-black text-lg leading-relaxed font-normal">
              I am open to discussing junior developer roles, data analytics internships, college projects, or open-source collaboration. Reach out via email or connect with me on social platforms.
            </p>

            {/* Contact Details List */}
            <div className="space-y-3.5 pt-2">
              
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="editorial-card p-5 flex items-center gap-4 bg-white hover:border-brand-300 hover:shadow-editorial-hover transition-all duration-300 group"
              >
                <div className="p-3 bg-brand-50 border border-brand-100 rounded-xl text-brand-crimson group-hover:scale-105 transition-transform duration-200 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-black">
                    Email Me
                  </h4>
                  <p className="text-base font-bold text-ink-950 group-hover:text-brand-crimson transition-colors duration-200 truncate mt-0.5">
                    {personalInfo.email}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-ink-300 group-hover:text-brand-crimson transition-colors duration-200" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-card p-5 flex items-center gap-4 bg-white hover:border-brand-300 hover:shadow-editorial-hover transition-all duration-300 group"
              >
                <div className="p-3 bg-brand-50 border border-brand-100 rounded-xl text-brand-crimson group-hover:scale-105 transition-transform duration-200 shrink-0">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-black">
                    LinkedIn
                  </h4>
                  <p className="text-base font-bold text-ink-950 group-hover:text-brand-crimson transition-colors duration-200 truncate mt-0.5">
                    Khushbu Raut
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-ink-300 group-hover:text-brand-crimson transition-colors duration-200" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-card p-5 flex items-center gap-4 bg-white hover:border-brand-300 hover:shadow-editorial-hover transition-all duration-300 group"
              >
                <div className="p-3 bg-brand-50 border border-brand-100 rounded-xl text-brand-crimson group-hover:scale-105 transition-transform duration-200 shrink-0">
                  <Github className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-black">
                    GitHub
                  </h4>
                  <p className="text-base font-bold text-ink-950 group-hover:text-brand-crimson transition-colors duration-200 truncate mt-0.5">
                    github.com/khushburaut
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-ink-300 group-hover:text-brand-crimson transition-colors duration-200" />
              </a>

            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="editorial-card p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.07] shadow-editorial">
              <h3 className="text-xl font-bold text-ink-950 font-heading mb-6">
                Send Me a Message
              </h3>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold uppercase tracking-wider text-black mb-2"
                    >
                      Name <span className="text-brand-crimson">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="editorial-input"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold uppercase tracking-wider text-black mb-2"
                    >
                      Email <span className="text-brand-crimson">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="editorial-input"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold uppercase tracking-wider text-black mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Collaboration Opportunity / Quick Inquiry"
                    className="editorial-input"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold uppercase tracking-wider text-black mb-2"
                  >
                    Message <span className="text-brand-crimson">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="editorial-input resize-none"
                  ></textarea>
                </div>

                {/* Success Message */}
                {status.success && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-base font-medium">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span>{status.msg}</span>
                  </div>
                )}

                {/* Error Message */}
                {status.error && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-brand-50 border border-brand-200 text-brand-800 text-base font-medium">
                    <AlertCircle className="h-5 w-5 text-brand-crimson shrink-0" />
                    <span>{status.msg}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-ink-950 hover:bg-brand-crimson text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md hover:shadow-editorial-glow hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.submitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}