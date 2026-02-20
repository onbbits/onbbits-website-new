import React, {useEffect} from "react";
import { motion } from "framer-motion";
import { featuresPgData } from "../Data";
import heroImg1 from '../Images/hero-dashboard.webp';

import PagesHero from "../Components/PagesHero";

const Features=()=>{
    useEffect(() => {
        // Set the page title
        document.title = "WhatsApp Business Automation Features | Onbbits";
    
        // Meta Description
        const metaDesc = document.querySelector("meta[name='description']");
        if (metaDesc) {
          metaDesc.setAttribute(
            "content",
            "Explore powerful WhatsApp automation features including bulk broadcasting, smart sequences, shared inbox, AI auto-replies, and performance tracking."
          );
        }
    
        // Open Graph Tags
        const ogTitle = document.querySelector("meta[property='og:title']");
        if (ogTitle) ogTitle.setAttribute("content", "WhatsApp Business Automation Features | Onbbits");
    
        const ogDesc = document.querySelector("meta[property='og:description']");
        if (ogDesc)
          ogDesc.setAttribute(
            "content",
            "Explore powerful WhatsApp automation features including bulk broadcasting, smart sequences, shared inbox, AI auto-replies, and performance tracking."
          );
    
        const ogUrl = document.querySelector("meta[property='og:url']");
        if (ogUrl) ogUrl.setAttribute("content", window.location.href);
    
        /*const ogImage = document.querySelector("meta[property='og:image']");
        if (ogImage)
          ogImage.setAttribute("content", "https://example.com/og-about.png");*/
    
        // Twitter Card Tags
        const twitterCard = document.querySelector("meta[name='twitter:card']");
        if (twitterCard) twitterCard.setAttribute("content", "summary_large_image");
    
        const twitterTitle = document.querySelector("meta[name='twitter:title']");
        if (twitterTitle) twitterTitle.setAttribute("content", "WhatsApp Business Automation Features | Onbbits");
    
        const twitterDesc = document.querySelector("meta[name='twitter:description']");
        if (twitterDesc)
          twitterDesc.setAttribute(
            "content",
            "Explore powerful WhatsApp automation features including bulk broadcasting, smart sequences, shared inbox, AI auto-replies, and performance tracking."
          );
    
        /*const twitterImage = document.querySelector("meta[name='twitter:image']");
        if (twitterImage) twitterImage.setAttribute("content", "https://example.com/twitter-about.png");*/
      }, []);

      const sectionStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const listStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const pointVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 }
  }
};

    
    return(
        <>
         <PagesHero 
        title="Core Features"
  highlightText="of Onbbits Platform"
  title2=""
  description="Explore advanced features designed to simplify communication, improve response time, and boost conversions through intelligent automation."
  mainImg={heroImg1}/>

  <section className="features-section">
  
  {/* Animated Heading */}
  <motion.h2
    className="section-heading"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    Powerful Features Built to Scale Your WhatsApp Growth
  </motion.h2>

  <motion.div
    className="features-section-container"
    variants={sectionStagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
  >
    {featuresPgData.map((feature, index) => (
      <motion.div
        key={index}
        className="features-section-card"
        variants={cardVariant}
        whileHover={{
          y: -12,
          scale: 1.02,
          boxShadow: "0 25px 60px rgba(0,0,0,0.12)"
        }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
      >
        {/* Card Image */}
        <motion.div
          className="features-section-card-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={feature.img}
            alt={`${feature.title} | Onbbits`}
          />
        </motion.div>

        {/* Card Content */}
        <div className="features-section-card-content">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            {feature.title}
          </motion.h3>

          <motion.ul
            variants={listStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {feature.points.map((point, i) => (
              <motion.li key={i} variants={pointVariant}>
                <motion.span
                  className="features-section-check"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    delay: i * 0.05
                  }}
                  viewport={{ once: true }}
                >
                  ✓
                </motion.span>
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>

        </>
    )
}

export default Features;