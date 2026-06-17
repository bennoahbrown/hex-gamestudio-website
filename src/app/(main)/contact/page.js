'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen" style={{ background: "transparent" }}>
      {/* Hero Section */}
      <div className="relative pb-16">
        <div className="relative z-10 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="heading-hero text-[clamp(72px,8vw,92px)] mb-8">
                <span className="block text-white">CONTACT</span>
              </h1>
              <div className="mb-6 space-y-1">
                {["STATE LOTTERIES", "iLOTTERY PLATFORMS", "STRATEGIC PARTNERS"].map((t) => (
                  <div
                    key={t}
                    className="text-2xl font-semibold tracking-[0.02em]"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px rgba(0,255,140,0.55)",
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                For inquiries about original lottery content, partnership opportunities, or platform integration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Matrix-style separator */}
      <div className="px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-px overflow-hidden" style={{ background: "rgba(0,255,140,0.15)" }}>
            <div className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "10px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em" }}>
              {"[CONTACT] [PARTNERSHIP] [INNOVATION] [COLLABORATE] [BUILD]".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: "rgba(0,255,140,0.75)", fontFamily: "var(--font-fira-code)" }}
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border text-white focus:outline-none focus:border-[#00ff8a] transition-colors"
                    style={{
                      borderColor: "rgba(255,255,255,0.16)",
                      fontFamily: "var(--font-geist-sans)"
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: "rgba(0,255,140,0.75)", fontFamily: "var(--font-fira-code)" }}
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border text-white focus:outline-none focus:border-[#00ff8a] transition-colors"
                    style={{
                      borderColor: "rgba(255,255,255,0.16)",
                      fontFamily: "var(--font-geist-sans)"
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="organization" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: "rgba(0,255,140,0.75)", fontFamily: "var(--font-fira-code)" }}
                  >
                    ORGANIZATION
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border text-white focus:outline-none focus:border-[#00ff8a] transition-colors"
                    style={{
                      borderColor: "rgba(255,255,255,0.16)",
                      fontFamily: "var(--font-geist-sans)"
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: "rgba(0,255,140,0.75)", fontFamily: "var(--font-fira-code)" }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-4 py-3 bg-transparent border text-white focus:outline-none focus:border-[#00ff8a] transition-colors resize-none"
                    style={{
                      borderColor: "rgba(255,255,255,0.16)",
                      fontFamily: "var(--font-geist-sans)"
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-4 font-semibold text-black transition-all hover:shadow-lg"
                  style={{
                    background: "#00ff8a",
                    fontFamily: "var(--font-geist-sans)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontSize: "14px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#00cc6e";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#00ff8a";
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="lg:col-span-5">
              <div
                className="border p-8"
                style={{
                  borderColor: "rgba(0,255,140,0.25)",
                  background: "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.20))",
                  boxShadow: "0 22px 70px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(0,255,140,0.10)"
                }}
              >
                <h3 
                  className="text-sm font-medium mb-6"
                  style={{ color: "rgba(0,255,140,0.75)", fontFamily: "var(--font-fira-code)" }}
                >
                  DIRECT CONTACT
                </h3>
                <a 
                  href="mailto:benbrown@hex-perpetual.com"
                  className="text-xl font-bold text-white hover:text-[#00ff8a] transition-colors block mb-8"
                  style={{ fontFamily: "var(--font-geist-sans)" }}
                >
                  benbrown@hex-perpetual.com
                </a>

                <div className="pt-8">
                  <h4 className="text-xs font-semibold tracking-widest text-[rgba(255,255,255,0.70)] mb-4 uppercase">
                    Response Time
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We typically respond to partnership inquiries within 24-48 hours.
                  </p>
                </div>

                <div className="pt-6">
                  <h4 className="text-xs font-semibold tracking-widest text-[rgba(255,255,255,0.70)] mb-4 uppercase">
                    Best For
                  </h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex gap-2">
                      <span className="text-[#00ff8a] flex-shrink-0">•</span>
                      <span>Partnership discussions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#00ff8a] flex-shrink-0">•</span>
                      <span>Platform integration</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#00ff8a] flex-shrink-0">•</span>
                      <span>Content licensing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matrix-style separator */}
      <div className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-px overflow-hidden" style={{ background: "rgba(0,255,140,0.15)" }}>
            <div className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "10px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em" }}>
              {">>> READY >>> CONNECT >>> BUILD >>>".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
