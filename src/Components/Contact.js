import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setStatus({ loading: true, success: false, error: false, message: "" });

    // try {
    //   await emailjs.send(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     formData,
    //     "YOUR_PUBLIC_KEY"
    //   );
    //   setStatus({
    //     loading: false,
    //     success: true,
    //     error: false,
    //     message: "Message sent successfully!",
    //   });
    //   setFormData({ name: "", email: "", message: "" });
    // } catch (error) {
    //   setStatus({
    //     loading: false,
    //     success: false,
    //     error: true,
    //     message: "Failed to send message. Please try again.",
    //   });
    // }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl text-yellow-500" />,
      title: "Email",
      content: "rahulprajapati9369@gmail.com",
      link: "mailto:rahulprajapati9369@gmail.com",
    },
    {
      icon: <FaPhone className="text-3xl text-yellow-500" />,
      title: "Phone",
      content: "+91 9369XXXXXX",
      link: "tel:+919369XXXXXX",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-yellow-500" />,
      title: "Location",
      content: "Gujarat, India",
      link: "https://maps.google.com/?q=Gujarat,India",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-2xl" />,
      link: "https://www.linkedin.com/in/rahul-prajapati-9369/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      link: "https://github.com/rahul9369",
      label: "GitHub",
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      link: "https://twitter.com/yourusername",
      label: "Twitter",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20 bg-gradient-to-br from-[#1e3a8a] via-[#111827] to-[#1e3a8a] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="block bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 p-2 flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400">
                      {info.title}
                    </h3>
                    <p className="text-gray-300">{info.content}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                    aria-label={social.label}>
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-400"
                  placeholder="Your email"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-400 resize-none"
                  placeholder="Your message"></textarea>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={status.loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  {status.loading ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.div>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center p-3 rounded-lg ${
                    status.success
                      ? "bg-green-500/20 text-green-300"
                      : "bg-red-500/20 text-red-300"
                  }`}>
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
