import React from "react";
import { motion } from "framer-motion";

import useCase4 from '../Images/card-analytics.webp';
import greenVector from '../Images/circle-vector.png';

const CardAnalytics = () => {
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <motion.div 
      className="usecase-card card-analytics"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h3 variants={itemVariants}>
        Analytics & Performance Insights
      </motion.h3>
      
      <motion.p variants={itemVariants}>
      Track conversations, response times, and conversions with actionable performance analytics.

      </motion.p>

      <div className="analytics-visual-container">
        {/* Main UI Image with a slight scale-up effect */}
        <motion.img 
          src={useCase4} 
          className="ui-img" 
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4 } }
          }}
          alt="WhatsApp Business API for customer support | Onbbits"
        />

        {/* rotating vector background */}
        <motion.img 
          src={greenVector}
          alt='Rotating Circle | Onbbits'
          className="vector-bg-analytics"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ 
            opacity: 0.6, 
            rotate: 360 
          }}
          transition={{ 
            opacity: { duration: 1.5 },
            rotate: { 
              duration: 60, 
              repeat: Infinity, 
              ease: "linear" 
            }
          }}
        />
      </div>
    </motion.div>
  );
};

export default CardAnalytics;