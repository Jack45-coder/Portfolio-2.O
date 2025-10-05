import React, { useState } from "react";
import { easeInOut, motion, MotionValue } from "framer-motion";

function Contact() {
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "jackeyjazzbgp1234@gmail.com",
      link: "mailto:jackeyjazzbgp1234@gmail.com?subject=Hello%20Jackey&body=I%20want%20to%20connect%20with%20you",
      color: "from-blue-500 to-blue-600",
    },

    {
      icon: "📱",
      label: "Phone",
      value: "+91 91*4*66*9",
      link: "#",
      color: "from-green-500 to-green-600",
    },

    {
      icon: "📍",
      label: "Location",
      value: "Patna, Bihar",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="relative min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 px-6 py-20 overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]" />
      </div>

      {/* Animated orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0 - 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-6xl w-full">
        {/* Header With Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ direction: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, typ: "spring" }}
            className="inline-block mb-6"
          >
            <span className="px-5 py-2. bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Available for Projects
            </span>
          </motion.div>

          <motion.h2>
            <span className="bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Let's Build
            </span>
            <br />
            <span className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Something Great
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? Drop me a message and let's make it happen!
            ✨
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side - Contact Info (2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, scale: 1.02 }}
                className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  initial={{ opacity: 0, x: "-100%" }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-5`}
                />
                <div className="relative z-10 flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}
                  >
                    {info.icon}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wide">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-900 font-bold text-base hover:text-blue-600 transition-colors break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 font-bold text-base break-all">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${info.color} origin-left`}
                />
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <motion.a
                  href="https://github.com/jack45-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center font-semibold group relative overflow-hidden:"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"
                  />
                  <div className="relative z-10">
                    <div className="text-3xl mb-1">💻</div>
                    <div className="text-sm">GitHub</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/jackey-%E2%81%A0%E2%80%BF%E2%81%A0-94110b247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center font-semibold group relative overflow-hidden"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                  <div className="relative z-10">
                    <div className="text-3xl mb-1">💼</div>
                    <div className="text-sm">LinkedIn</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form (3 columns) */}
          <motion.div
           initial={{opacity: 0, x: 30}}
           whileInView={{opacity: 1, x: 0}}
           viewport={{once: true}}
           transition={{duration: 0.6}}
           className="lg:col-span-3 relative"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden ">
              {/* Decorative corner gradient */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-orange-500/20 rounded-full blur-2xl" />

              <div className="relative z-10 space-y-6">

                {/* Name */}
                <motion.div
                 initial={{opacity: 0, y: 20}}
                 whileInView={{opacity: 1, y: 0}}
                 viewport={{once: true}}
                 transition={{duration: 0.5, delay: 0.1}}
                >
                  <label
                   className="block text-sm font-bold text-gray-700 mb-2"
                  >Full Name</label>
                  <motion.div
                   animate={{scale: focusedField === "name" ? 1.02 : 1}}
                   transition={{ duration: 0.2 }}
                  >
                    <input
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     placeholder="John Doe"
                     onFocus={() => setFocusedField("name")}
                     onBlur={() => setFocusedField(null)}
                     className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-500 focus:outline-none bg-white ${focusedField === "name" ? "border-blue-500 shadow-lg shadow-blue-100 scale-105" : "border-gray-200 hover:border-gray-300"}`}
                    />
                  </motion.div>
                </motion.div>

                {/* Email */}
                <motion.div
                 initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label
                   className="block text-sm font-bold text-gray-700 mb-2"
                  >Email Address</label>
                  <motion.div
                   animate={{ scale: focusedField === "email" ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                     type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none bg-white ${
                        focusedField === "email" 
                          ? "border-purple-500 shadow-lg shadow-purple-100 scale-105" 
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                  </motion.div>
                </motion.div>

                {/* Message */}
                <motion.div
                 initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label
                   className="block text-sm font-bold text-gray-700 mb-2"
                  >Message</label>
                  <motion.div
                   animate={{ scale: focusedField === "message" ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <textarea
                     name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell me about your project..."
                      rows="5"
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none bg-white ${
                        focusedField === "message" 
                          ? "border-pink-500 shadow-lg shadow-pink-100 scale-105" 
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                  </motion.div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                 initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  onClick={handleSubmit}
                  disabled={isSubmitting || submitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group disabled:opacity-70"
                >
                  <motion.div 
                   animate={{x: ["-100%", "100%"]}}
                   transition={{duration: 2, repeat: Infinity, ease: "linear"}}
                   className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : submitted ? (
                      <>
                        <span className="text-2xl">✓</span>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Success message */}
                {submitted && (
                  <motion.p
                   initial={{ opacity: 0, y: -10 }}
                   className="text-center text-gree-600 font-semibold flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">🎉</span>
                    Thanks! I'll get back to you soon!
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
