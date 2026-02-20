import React from "react";
import { motion } from "framer-motion";

import greenVector from '../Images/circle-vector.png';
import useCase2 from '../Images/automation-card.webp';

const CardAutomation = () => {
  return (
    <motion.div 
      className="usecase-card card-automation"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Automation & Chatbots
      </motion.h3>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
       Automate conversations with smart workflows, instant replies, and AI-driven chat experiences.

      </motion.p>

      <div className="connector">
        {/* Horizontal Line - Forces growth from left to right */}
        <motion.span 
          className="line-h" 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          style={{ originX: 0, display: 'block' }} 
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        
        {/* Vertical Line - Forces growth from top to bottom */}
        <motion.span 
          className="line-v" 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          style={{ originY: 0, display: 'block' }} 
          transition={{ duration: 0.5, delay: 1.1 }}
        />

        {/* Toggle - Uses a spring "pop" effect */}
        <motion.div 
          className="toggle-wrapper"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.3 }}
        >
          <span className="toggle-track">
            <span className="toggle-thumb">ON</span>
          </span>
        </motion.div>
      </div>

      <motion.img 
        src={useCase2} 
        alt="Whatsapp business chatbot | Onbbits"
        className="ui-img bottom" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      />
       <motion.img 
  src={greenVector}
  alt='Rotating circle | Onbbits'
  className="vector-bg-automation"
  initial={{ opacity: 0, rotate: 0 }}
  animate={{ 
    opacity: 1, 
    rotate: 360 
  }}
  transition={{ 
    opacity: { duration: 1.5 }, 
    rotate: { 
      duration: 50,          
      repeat: Infinity, 
      ease: "linear"          
    }
  }}
  />
    </motion.div>
  );
};

export default CardAutomation;