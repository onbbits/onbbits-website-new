import React, {useState} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../Images/logo.png";
import heroImg1 from '../Images/hero-dashboard.webp';
import heroImg2 from '../Images/hero-2.webp';
import greenVector from '../Images/circle-vector.png';
import whtspIcon from '../Images/whatsapp-vector.png';
import msgIcon from '../Images/message-vector.png';

/* ================= VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const imageFloat = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};



const Hero = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* TOP BAR */}
    <motion.div
        className="top-bar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <a href="/about-us">About us</a>
           <a href="/contact-us">Contact us</a>
          </div>

          <div className="top-bar-right">
            <a href='https://app.onbbits.io/login' target="_blank"  rel="noopener noreferrer">Login</a>
            <a href="https://help.onbbits.io/"  target="_blank"  rel="noopener noreferrer" >Help Center</a>
          </div>
        </div>
      </motion.div>

      {/* MAIN HEADER */}
      <motion.header
        className="main-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="header-inner">
          <Link to='/'><div className="logo">
            <img src={logo} alt="Onbbits logo" />
          </div></Link>

          <div className="header-right">
            {/* Desktop nav links */}
            <nav className="nav-links">
              <a href='/features'>Features</a>
              <a href='/solutions'>Solutions</a>
               <a href='/faqs'>FAQs</a>
              <a href='/pricing-plans'>Pricing</a>
            </nav>

            <div className="nav-actions">
             <Link to='/book-a-demo'> <button className="btn-outline">Book a Demo</button> </Link>
              <a href='https://app.onbbits.io/register' target="_blank"  rel="noopener noreferrer"><button className="btn-primary">Start Free</button></a>
            </div>

            {/* Hamburger toggle for mobile */}
            <div
              className={`hamburger ${sidebarOpen ? "open" : ""}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* SIDEBAR */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <img src={logo} alt="Onbbits logo" className="sidebar-logo" />
        </div>
        <div className="sidebar-links">
          {/* Top Bar Links */}
         <div className="sidebar-section">
            <a href="/about-us/">About us</a>
            <a href='/contact-us'>Contact us</a>
             <a href='/features'>Features</a>
            <a href='/solutions'>Solutions</a>
            <a href='/faqs'>FAQs</a>
            <a href='/pricing-plans'>Pricing</a>
              <a href='https://app.onbbits.io/login' target="_blank"  rel="noopener noreferrer">Login</a>
            <a href="https://help.onbbits.io/"  target="_blank"  rel="noopener noreferrer">Help Center</a>
        
              {/*<a href='/'>Features</a>*/}
            
          </div>

          {/* Action Buttons */}
          <div className="sidebar-section sidebar-actions">
            <Link to='/book-a-demo'><button className="btn-outline">Book a Demo</button></Link>
             <a href='https://app.onbbits.io/register' target="_blank"  rel="noopener noreferrer"><button className="btn-primary">Start Free</button></a>
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* HERO */}
      <section className="hero">
        <motion.div
          className="hero-content"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={fadeUp}>
            {" "}
            <span className="highlight">WhatsApp Automation</span>
            <br />
            Platform for <span className="bold-heading">Sales & Customer Support</span>
          </motion.h1>

          <motion.p variants={fadeUp}>
          Onbbits helps businesses automate conversations, close more sales, and deliver faster customer support — all from one powerful WhatsApp inbox.

          </motion.p>

          <motion.div
            className="hero-actions"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <Link to='/book-a-demo'><button className="btn-outline">Book a Demo</button></Link>
            <a href='https://app.onbbits.io/register' target="_blank"  rel="noopener noreferrer"><button className="btn-primary">Start Free</button></a>
          </motion.div>
        </motion.div>

        {/* HERO IMAGE */}
       {/* HERO IMAGE CONTAINER */}
<motion.div
  className="hero-image-container"
  variants={imageFloat}
  initial="hidden"
  animate="visible"
>
  <motion.img 
    src={greenVector}
    alt='Rotating circle | Onbbits'
    className="vector-bg-1"
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
 <motion.img 
  src={greenVector}
  alt='Rotating circle | Onbbits'
  className="vector-bg-2"
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

  <motion.img 
    src={whtspIcon}
    alt="Whatsapp icon | Onbbits"
    className="float-icon icon-left"
    animate={{ y: [0, -15, 0] }} 
    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
  />

  <motion.img 
    src={msgIcon}
    alt='Message icon | Onbbits'
    className="float-icon icon-right"
    animate={{ y: [0, 15, 0] }} 
    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
  />
  
  <div className="main-dashboard-wrapper">
    <img src={heroImg1} alt="WhatsApp Automation Platform for Sales & Customer Support | Onbbits" className="main-dashboard" />
  </div>

 
  <motion.div 
    className="chat-overlay-wrapper"
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.8 }}
  >
    <img src={heroImg2} alt="WhatsApp Automation Platform for Sales & Customer Support | Onbbits" className="chat-overlay" />
  </motion.div>
</motion.div>
      </section>
    </>
  );
};

export default Hero;
