import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemFade = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 }
};

const FaqIndividual = ({
  heading,
  subheading,
  faqs,
  defaultOpenIndex = 0
}) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <section className="faq-individual">
      {/* Heading */}
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {heading}
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="section-sub"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.05 }}
      >
        {subheading}
      </motion.p>

      {/* FAQ LIST */}
      <motion.div
        className="faq-individual-list"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              className={`faq-item ${isOpen ? "open" : ""}`}
              variants={itemFade}
              layout
              transition={{ layout: { duration: 0.28, ease: "easeOut" } }}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {/* Question */}
              <div className="faq-question">
                <span>{item.q || item.ques}</span>

                <motion.span
                  className="faq-icon"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {isOpen ? "−" : "+"}
                </motion.span>
              </div>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <p>{item.a || item.ans}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default FaqIndividual;
