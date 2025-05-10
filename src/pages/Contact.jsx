"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import SectionWrapper from "../components/SectionWrapper";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import { useState, useEffect } from "react";

const contactInfo = [
  {
    icon: <FaEnvelope className="h-6 w-6" />,
    title: "Email",
    content: "zeyad8amr88@gmail.com",
    link: "mailto:zeyad8amr88@gmail.com",
  },
  {
    icon: <FaPhone className="h-6 w-6" />,
    title: "Phone",
    content: "+20 (102) 051-6108",
    link: "tel:+11234567890",
  },
  {
    icon: <FaMapMarkerAlt className="h-6 w-6" />,
    title: "Location",
    content: "Cairo, Egypt",
    link: null,
  },
];

const Contact = () => {
  // Add state to control animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-16">
      <SectionWrapper id="contact">
        <SectionTitle
          title="Contact Me"
          subtitle="Get in touch with me for collaborations or opportunities"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 px-2 sm:px-0">
          <div className="md:col-span-1 lg:col-span-1 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 h-full"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="p-2.5 sm:p-3 bg-slate-800 rounded-full text-slate-100 mr-3 sm:mr-4">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-medium text-gray-900">
                        {item.title}
                      </h4>

                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-sm sm:text-base text-gray-600 hover:text-slate-800 transition-colors"
                          aria-label={`Contact me via ${item.title}: ${item.content}`}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-gray-600">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-100 rounded-lg sm:rounded-xl"
              >
                <p className="text-sm sm:text-base text-gray-700">
                  I'm currently open to freelance opportunities, collaborations,
                  and full-time positions. Feel free to reach out if you have
                  any questions or want to work together!
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className="md:col-span-1 lg:col-span-2 order-1 md:order-2">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Contact;
