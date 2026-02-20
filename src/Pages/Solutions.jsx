import React, {useEffect} from "react";
import { motion } from "framer-motion";

import heroImg1 from '../Images/solutions-hero.webp';
import pillIcon from '../Images/subheading-icon.png';

import PagesHero from "../Components/PagesHero";

import { IndustryData } from "../Data";


const Solutions=()=>{

useEffect(() => {
      // Set the page title
      document.title = "WhatsApp Business Solutions for Sales & Support | Onbbits";
  
      // Meta Description
      const metaDesc = document.querySelector("meta[name='description']");
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Discover Onbbits WhatsApp Business solutions designed for sales, marketing, and customer support teams to manage conversations at scale."
        );
      }
  
      // Open Graph Tags
      const ogTitle = document.querySelector("meta[property='og:title']");
      if (ogTitle) ogTitle.setAttribute("content", "WhatsApp Business Solutions for Sales & Support | Onbbits");
  
      const ogDesc = document.querySelector("meta[property='og:description']");
      if (ogDesc)
        ogDesc.setAttribute(
          "content",
          "Discover Onbbits WhatsApp Business solutions designed for sales, marketing, and customer support teams to manage conversations at scale."
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
      if (twitterTitle) twitterTitle.setAttribute("content", "WhatsApp Business Solutions for Sales & Support | Onbbits");
  
      const twitterDesc = document.querySelector("meta[name='twitter:description']");
      if (twitterDesc)
        twitterDesc.setAttribute(
          "content",
          "Discover Onbbits WhatsApp Business solutions designed for sales, marketing, and customer support teams to manage conversations at scale."
        );
  
      /*const twitterImage = document.querySelector("meta[name='twitter:image']");
      if (twitterImage) twitterImage.setAttribute("content", "https://example.com/twitter-about.png");*/
    }, []);

    return(
        <>
         <PagesHero 
        title="WhatsApp Business Solutions for"
  highlightText="Every Buisness Need"
  title2=" "
  description="Discover how businesses use Onbbits WhatsApp Business API platform to automate conversations, generate leads, and support customers at scale."
  mainImg={heroImg1}/>

   <section className="industries">
  <div className="industries-container">

    {/* PILL */}
    <motion.span
      className="pill"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img src={pillIcon} alt="Trusted by Growing Businesses | Onbbits" />
      Trusted by Growing Businesses
    </motion.span>

    {/* HEADING */}
    <motion.h2
      className="section-heading"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      Powering WhatsApp Conversations Across Industries
    </motion.h2>

    {/* CARDS */}
    <div className="industry-cards">
      {IndustryData.map((item, index) => (
        <motion.div
          key={index}
          className="industry-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: item.delay }}
        >
          <div className="industry-img">
            <img src={item.img} alt={`${item.title} | Onbbits`} />

            <motion.img
              src={item.floatingIcon}
              className={`floating-icon ${item.iconClass}`}
              alt={`${item.title} | Onbbits`}
              animate={{ y: [0, item.floatY, 0] }}
              transition={{
                duration: item.floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="industry-content">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
              {/*<a href={item.link}>Know More</a>*/}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
        </>
    )
}

export default Solutions;