import React from "react";
import { motion } from "framer-motion";

import { features } from "../Data";

const WhatMakesOnbbitsDifferent=()=>{
        const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};
    return(
        <>
        <section className="difference-section">
          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            What Makes Onbbits Different
          </motion.h2>
        
          <motion.div
            className="difference-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                className="feature-item"
                variants={fadeUp}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span className="check-dot" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        </>
    )
}

export default WhatMakesOnbbitsDifferent;