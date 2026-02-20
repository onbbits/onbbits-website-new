import React, {useState} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../Images/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
};



const PoliciesHero = ({
  title,
  title2,
  highlightText,
  description,
  className = ""
}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <section className={`policies-hero ${className}`}>
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
      <motion.div
        className="policies-hero-container"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="policies-hero-content">

          <motion.h1 variants={fadeUp} transition={{ duration: 0.5 }}>
            {title} <span className="highlight">{highlightText}</span><br/> {title2}
          </motion.h1>

        </div>
      </motion.div>
    </section>
  );
};

export default PoliciesHero;
