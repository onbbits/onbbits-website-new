import React,{useState} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../Images/logo.png";
import greenVector from "../Images/circle-vector.png";
import whtspIcon from "../Images/whatsapp-vector.png";

/* Minimal motion helpers */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
};

const PagesHero = ({
  title,
  title2,
  highlightText,
  description,
  mainImg,
  demoLink = "/book-a-demo"
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="inner-hero-wrapper">

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
                <a href="https://help.onbbits.io/"  target="_blank"  rel="noopener noreferrer">Help Center</a>
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
            <a href="/about-us">About us</a>
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
      <section className="inner-hero">
        <motion.div
          className="inner-hero-container"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* LEFT CONTENT */}
          <div className="inner-hero-content">
            <motion.h1 variants={fadeUp} transition={{ duration: 0.5 }}>
              {title} <br/>  <span className="highlight">{highlightText}</span> {title2}
            </motion.h1>

            <motion.p variants={fadeUp} transition={{ duration: 0.45 }} className="section-sub">
              {description} 
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="special-p"
            >
              *No credit card required | Free forever plan available
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={fadeUp}
              transition={{ duration: 0.45 }}
            >
            {demoLink.startsWith("#") ? (
  <a href={demoLink}>
    <button className="btn-outline">Book a Demo</button>
  </a>
) : (
  <Link to={demoLink}>
    <button className="btn-outline">Book a Demo</button>
  </Link>
)}
             <a href='https://app.onbbits.io/register' target="_blank"  rel="noopener noreferrer"><button className="btn-primary">Start Free</button></a>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="inner-hero-visual">
            <motion.div
              className="visual-relative"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* BACK VECTOR */}
              <motion.img
                src={greenVector}
                alt="Rotating circle | Onbbits"
                className="inner-vector"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />

              {/* FLOATING ICON */}
              <motion.img
                src={whtspIcon}
                alt="Whatsapp Icon | Onbbits"
                className="inner-float-icon"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* MAIN IMAGE */}
              <motion.div
                className="inner-dashboard-box"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
              >
                <img src={mainImg} alt={`${title} ${highlightText} ${title2}`} className="inner-main-img" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PagesHero;
