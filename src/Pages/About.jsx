import React, {useEffect} from "react";
import { motion } from "framer-motion";

import { ourMission, team } from "../Data";

import missionBg from "../Images/mission-bg.png";
import visionBg from '../Images/vision-bg.png';
import heroImg1 from '../Images/about-hero.webp';

import PagesHero from "../Components/PagesHero";
import UseCase from "../Components/UseCase";
import IndustriesList from "../Components/IndustriesList";
import WhatMakesOnbbitsDifferent from "../Components/WhatMakesOnbbitsDifferent";
import Testimonials from "../Components/Testimonials";

const About=()=>{

  useEffect(() => {
      // Set the page title
      document.title = "About Onbbits | WhatsApp Communication Platform for Business";
  
      // Meta Description
      const metaDesc = document.querySelector("meta[name='description']");
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Discover Onbbits, a team-driven platform focused on helping businesses manage WhatsApp communication with transparency, security, and scale."
        );
      }
  
      // Open Graph Tags
      const ogTitle = document.querySelector("meta[property='og:title']");
      if (ogTitle) ogTitle.setAttribute("content", "About Onbbits | WhatsApp Communication Platform for Business");
  
      const ogDesc = document.querySelector("meta[property='og:description']");
      if (ogDesc)
        ogDesc.setAttribute(
          "content",
          "Discover Onbbits, a team-driven platform focused on helping businesses manage WhatsApp communication with transparency, security, and scale."
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
      if (twitterTitle) twitterTitle.setAttribute("content", "About Onbbits | WhatsApp Communication Platform for Business");
  
      const twitterDesc = document.querySelector("meta[name='twitter:description']");
      if (twitterDesc)
        twitterDesc.setAttribute(
          "content",
          "Discover Onbbits, a team-driven platform focused on helping businesses manage WhatsApp communication with transparency, security, and scale."
        );
  
      /*const twitterImage = document.querySelector("meta[name='twitter:image']");
      if (twitterImage) twitterImage.setAttribute("content", "https://example.com/twitter-about.png");*/
    }, []);
  

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
        <PagesHero 
        title="About Onbbits"
  highlightText="Simplifying WhatsApp Communication"
  title2=" "
  description="Onbbits is an all-in-one WhatsApp automation platform designed to help businesses automate sales, customer support, and team communication at scale."
  mainImg={heroImg1}/>

  <UseCase />

 <section
  className="mission-section"
  style={{ backgroundImage: `url(${missionBg})` }}
>
  <div className="mission-container">

    {/* LEFT */}
    <motion.div
      className="mission-left"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.span
        className="section-sub"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Our Mission
      </motion.span>

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Simplifying WhatsApp Communication for Teams
      </motion.h2>
    </motion.div>

    {/* RIGHT CARD */}
    <motion.div
      className="mission-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {ourMission.map((item, i) => (
        <motion.div
          className="mission-item"
          key={i}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <span className="check-dot" />
          <div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>

  </div>
</section>

    <IndustriesList />

    <Testimonials />

    <section
  className="vision-section"
  style={{ backgroundImage: `url(${visionBg})` }}
>
  <motion.div
    className="vision-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <motion.p
      className="section-sub"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      Our Vision
    </motion.p>

    <motion.h2
      className="section-heading"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 }}
    >
      To make <strong>Onbbits</strong> the definitive growth engine for modern businesses — transforming everyday WhatsApp conversations into measurable revenue, lasting customer relationships, and seamless global expansion.
We envision a world where every message moves a business forward.
    </motion.h2>
    <p className="vision-p">Onbbits. Win with conversations.</p>
  </motion.div>
</section>

<WhatMakesOnbbitsDifferent />

<section className="team-section">
  {/* HEADING */}
  <motion.h2
    className="section-heading"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    Meet Team Onbbits
  </motion.h2>

  {/* TOP GRID – 4 MEMBERS */}
  <motion.div
    className="team-grid grid-4"
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {team.slice(0, 4).map((item, i) => (
      <motion.div
        key={i}
        className="team-card"
        variants={fadeUp}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="team-media">
          <img src={item.img} alt={`${item.name} | Onbbits`} />

          <motion.div
            className="team-info"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{item.name}</h3>
            <p>{item.designation}</p>
          </motion.div>
        </div>
      </motion.div>
    ))}
  </motion.div>

  {/* BOTTOM GRID – 3 MEMBERS */}
  <motion.div
    className="team-grid grid-3"
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay: 0.15 }}
  >
    {team.slice(4, 7).map((item, i) => (
      <motion.div
        key={i}
        className="team-card"
        variants={fadeUp}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="team-media">
          <img src={item.img} alt={`${item.name} | Onbbits`} />

          <motion.div
            className="team-info"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{item.name}</h3>
            <p>{item.designation}</p>
          </motion.div>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>
        </>
    )
}

export default About;