import React from "react";
import { motion } from "framer-motion";

import { whyOnbbits } from "../Data";

const WhyChoose=()=>{
    return(
        <>
         <section className="why-section">

  {/* HEADER */}
  <motion.h2
    className="section-heading"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    Why Onbbits is a Smarter WhatsApp Automation Platform
  </motion.h2>

  <motion.p
    className="section-sub"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 }}
  >
    A quick walkthrough of how businesses use Onbbits to manage WhatsApp
    conversations.
  </motion.p>

  {/* CARDS */}
  <div className="why-cards">
    {whyOnbbits.map((item, i) => (
      <motion.div
        className="why-card"
        key={i}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.45,
          delay: i * 0.1
        }}
        whileHover={{ y: -6 }}
      >
        <motion.div
          className="why-icon"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.1 }}
        >
          <img src={item.icon} alt={`${item.title} | Onbbits`} />
        </motion.div>

        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>
        </>
    )
}

export default WhyChoose;