import React from "react";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="cta-section">
      <motion.div
        className="cta-box"
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Ready to Grow with WhatsApp?<br/> Try Onbbits Free
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          Unlock powerful automation and conversations with every message.
          No setup hassle. Just results.
        </motion.p>

       <a href='https://app.onbbits.io/register' target="_blank"  rel="noopener noreferrer"><motion.button
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          Start For Free
        </motion.button></a> 
      </motion.div>
    </section>
  );
};

export default Cta;
