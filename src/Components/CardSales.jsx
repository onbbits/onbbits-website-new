import React from "react";
import { motion } from "framer-motion";

import useCase3 from '../Images/card-sales.webp';

const CardSales = () => {
  return (
    <motion.div 
      className="usecase-card card-sales"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sales & Lead Management
      </motion.h3>
      
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Capture, qualify, and convert leads with structured workflows and faster follow-ups.

      </motion.p>

      {/* Main Horizontal Line */}
      <motion.span 
        className="line-h" 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* WhatsApp Bubble */}
      <motion.div 
        className="whatsapp-bubble"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
      >
        Hi, I’m interested in your pricing for WhatsApp sales.
        
        {/* Animated L-Connector */}
        <motion.div 
          className="bubble-connector"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <svg width="280" height="70" style={{ overflow: 'visible' }}>
            <motion.path
              d="M 80 0 V 60 H 180" 
              fill="transparent"
              strokeWidth="3"
              stroke="#15DB65"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* UI Image */}
      <motion.img 
        src={useCase3} 
        alt='WhatsApp automation for sales | Onbbits'
        className="ui-img overlap" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      />
    </motion.div>
  );
};

export default CardSales;