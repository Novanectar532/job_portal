import { useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6 md:p-16">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-8"
          variants={fadeInUp}
        >
          About Us
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-center mb-12 text-gray-600"
          variants={fadeInUp}
        >
          Welcome to <span className="font-semibold text-indigo-600">Your Company</span>, your partner in digital transformation.
        </motion.p>

        <motion.section className="mb-12" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p>
            We’re a team of passionate IT professionals, problem-solvers, and innovators. Since our founding in [Year], we’ve been committed to helping businesses grow by using the power of technology.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Managed IT Services</li>
            <li>Cloud Solutions & Migration</li>
            <li>Cybersecurity & Compliance</li>
            <li>Custom Software Development</li>
            <li>IT Consulting & Strategy</li>
            <li>Web & Mobile App Development</li>
            <li>Technical Support & Helpdesk</li>
          </ul>
        </motion.section>

        <motion.section className="mb-12" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: "💡", text: "Expertise Across Industries" },
              { icon: "🔐", text: "Security First Approach" },
              { icon: "🚀", text: "Innovation-Driven" },
              { icon: "👥", text: "Client-Centric Service" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-medium text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div className="text-center mt-16" variants={fadeInUp}>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-full text-lg shadow hover:bg-indigo-500 transition">
            Contact Us
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
