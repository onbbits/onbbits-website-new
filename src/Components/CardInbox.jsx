import React from "react";
import { motion } from "framer-motion";

import useCase1 from '../Images/inbox-card.webp';

const CardInbox = () => {
  // Animation Variants
  const containerVars = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1, 
      transition: { staggerChildren: 0.3, delayChildren: 0.2 } 
    }
  };

  const imageVars = {
    initial: { filter: "blur(10px)", opacity: 0, scale: 0.95 },
    whileInView: { 
      filter: "blur(0px)", 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 1, ease: "easeOut" } 
    }
  };

  const cardVars = {
    initial: { y: 40, opacity: 0 },
    whileInView: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, type: "spring", bounce: 0.4 } 
    },
    hover: { 
      y: -10, 
      transition: { duration: 0.3 } 
    }
  };

  const overlayVars = {
    initial: { opacity: 0.8 },
    hover: { opacity: 0.4, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="inbox-wrap"
      variants={containerVars}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* IMAGE SECTION */}
      <motion.div className="inbox-ui" variants={imageVars}>
        <img src={useCase1} className="ui-img" alt="WhatsApp shared inbox | Onbbits" />
        <motion.div 
          className="ui-overlay" 
          variants={overlayVars}
          whileHover="hover"
        />
      </motion.div>

      {/* TEXT CARD */}
      <motion.div 
        className="usecase-card card-inbox" 
        variants={cardVars}
        whileHover="hover"
      >
        <motion.h3>Unified Team Inbox</motion.h3>
        <motion.p>
          Manage all customer conversations in one shared inbox with seamless team collaboration.

        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default CardInbox;