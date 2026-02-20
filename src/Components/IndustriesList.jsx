import React from "react";
import { motion } from "framer-motion";



import pillIcon from '../Images/subheading-icon.png';

const IndustriesList=()=>{
    return(
        <>
        <section className="industries-section">
  
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
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
  >
    Who Onbbits Is Built For ?
  </motion.h2>

  <p className="section-sub"
  initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}>From eCommerce to salons and coaching institutes, Onbbits empowers businesses across industries to automate sales and support on WhatsApp.</p>

  {/* PILLS */}
  {/* PILLS CONTAINER */}
<div className="industries-slider-full">
  {/* TOP ROW */}
  <div className="marquee-row">
    <div className="marquee-track">
      {[
        "E-commerce & D2C",
        "Restaurants & Cafe",
        "Salons & Spas",
        "EdTech & Coaching",
         "E-commerce & D2C",
        "Restaurants & Cafe",
        "Salons & Spas",
        "EdTech & Coaching",
        
      ].map((item, i) => (
        <span key={i} className="industry-pill">{item}</span>
      ))}
      {/* duplicate for seamless scroll */}
      {[
        "E-commerce & D2C",
        "Restaurants & Cafe",
        "Salons & Spas",
        "EdTech & Coaching",
         "E-commerce & D2C",
        "Restaurants & Cafe",
        "Salons & Spas",
        "EdTech & Coaching",
      ].map((item, i) => (
        <span key={i + 100} className="industry-pill">{item}</span>
      ))}
    </div>
  </div>

  {/* BOTTOM ROW */}
  <div className="marquee-row">
    <div className="marquee-track reverse">
      {[
       "Healthcare",
        "Retail Stores",
        "Wholesale & Distributors",
        "Healthcare",
        "Retail Stores",
        "Wholesale & Distributors",
        "Healthcare",
        "Retail Stores",
        "Wholesale & Distributors",
        
      ].map((item, i) => (
        <span key={i} className="industry-pill">{item}</span>
      ))}
      {[
       "Healthcare",
        "Retail Stores",
        "Wholesale & Distributors",
        "Healthcare",
        "Retail Stores",
        "Wholesale & Distributors",
          "Healthcare",
        "Retail Stores",
        "Wholesale & Distributors",
        
      ].map((item, i) => (
        <span key={i + 100} className="industry-pill">{item}</span>
      ))}
    </div>
  </div>
</div>




</section>

        </>
    )
}

export default IndustriesList;