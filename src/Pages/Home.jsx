import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { motion,  AnimatePresence } from "framer-motion";

import Hero from "../Components/Hero";
import UseCase from "../Components/UseCase";
import WhyChoose from "../Components/WhyChoose";
import ProblemWeSolve from "../Components/ProblemWeSolve";

import pillIcon from '../Images/subheading-icon.png';
import clientLogo1 from '../Images/client-logo-1.png';
import clientLogo2 from '../Images/client-logo-2.png';
import clientLogo3 from '../Images/client-logo-3.png';
import clientLogo4 from '../Images/client-logo-4.png';
import onbbitsVdo from '../Videos/Onbbits-video-final.mp4'

import { IndustryData, setUpPoints } from "../Data";
import Testimonials from "../Components/Testimonials";


const Home=()=>{

     useEffect(() => {
    // Set the page title
    document.title = "WhatsApp Automation Platform for Sales & Support | Onbbits";

    // Meta Description
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Automate sales, customer support & team workflows with Onbbits — a no-code WhatsApp automation solution built for growing businesses. Start free or book demo."
      );
    }

    // Open Graph Tags
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) ogTitle.setAttribute("content", "WhatsApp Automation Platform for Sales & Support | Onbbits");

    const ogDesc = document.querySelector("meta[property='og:description']");
    if (ogDesc)
      ogDesc.setAttribute(
        "content",
        "Automate sales, customer support & team workflows with Onbbits — a no-code WhatsApp automation solution built for growing businesses. Start free or book demo."
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
    if (twitterTitle) twitterTitle.setAttribute("content", "WhatsApp Automation Platform for Sales & Support | Onbbits");

    const twitterDesc = document.querySelector("meta[name='twitter:description']");
    if (twitterDesc)
      twitterDesc.setAttribute(
        "content",
        "Automate sales, customer support & team workflows with Onbbits — a no-code WhatsApp automation solution built for growing businesses. Start free or book demo."
      );

    /*const twitterImage = document.querySelector("meta[name='twitter:image']");
    if (twitterImage) twitterImage.setAttribute("content", "https://example.com/twitter-about.png");*/
  }, []);


     const [active, setActive] = useState(0);

     const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

    return(
        <>
        <Hero />

       <section className="trusted-section">
  <div className="trusted-container">

    {/* Animated Heading */}
    <motion.h2
      className="section-heading"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      Businesses Scaling with Onbbits
    </motion.h2>

    {/* Logos Container */}
    <motion.div
      className="trusted-logos"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
    >

      {/* Logo 1 */}
      <motion.img
        src={clientLogo1}
        alt="Onbbits Client | Bhuj Swaminarayan Mandir"
        variants={{
          hidden: { opacity: 0, y: 30, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1 }
        }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.08,
          y: -6
        }}
      />

      {/* Logo 2 */}
      <motion.img
        src={clientLogo2}
        alt="Onbbits Client | Shetiya Telecom"
        variants={{
          hidden: { opacity: 0, y: 30, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1 }
        }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.08,
          y: -6
        }}
      />

      {/* Logo 3 */}
      <motion.img
        src={clientLogo3}
        alt="Onbbits Client | Kalyan Integrated Care & Research Center"
        variants={{
          hidden: { opacity: 0, y: 30, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1 }
        }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.08,
          y: -6
        }}
      />

      {/* Logo 4 */}
      <motion.img
        src={clientLogo4}
        alt="Onbbits Client | ArkayApps Pvt Ltd"
        variants={{
          hidden: { opacity: 0, y: 30, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1 }
        }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.08,
          y: -6
        }}
      />

    </motion.div>

  </div>
</section>



       <ProblemWeSolve />

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
      {IndustryData.slice(0,3).map((item, index) => (
        <motion.div
          key={index}
          className="industry-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: item.delay }}
        >
          <div className="industry-img">
            <img src={item.img} alt={`Whatsapp business api for ${item.title} | Onbbits`} />

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

    <UseCase />

     <section className="setup-section">
  
  {/* HEADER */}
  <motion.h2
    className="section-heading"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    Set Up WhatsApp Automation Software in Minutes
  </motion.h2>

  <motion.p
    className="section-sub"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 }}
  >
   Set up WhatsApp automation quickly with an intuitive, no-code platform designed to streamline conversations and boost conversions from day one.

  </motion.p>

<AnimatePresence mode="wait">
  <motion.div
    key={active}
    className="setup-wrapper"
    drag={window.innerWidth < 1024 ? "x" : false}
    dragConstraints={{ left: 0, right: 0 }}
    dragElastic={0.9}
    onDragEnd={(e, { offset, velocity }) => {
      const swipe = swipePower(offset.x, velocity.x);

      if (swipe < -swipeConfidenceThreshold && active < setUpPoints.length - 1) {
        setActive(active + 1);
      } else if (swipe > swipeConfidenceThreshold && active > 0) {
        setActive(active - 1);
      }
    }}
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -40 }}
    transition={{ duration: 0.4 }}
  >
    {/* LEFT */}
    <div className="setup-left">
      
        <motion.div
          key={active}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.35 }}
        >
          <h3>
            {active + 1}. {setUpPoints[active].title}
          </h3>
          <p>{setUpPoints[active].desc}</p>

          <div className="setup-actions">
          <Link to='/book-a-demo'><button className="btn-outline">Book a Demo</button></Link> 
          <a href='https://app.onbbits.io/register' target="_blank"  rel="noopener noreferrer"><button className="btn-primary">Start Free</button></a>
          </div>
        </motion.div>
     
    </div>

    {/* RIGHT */}
    <div className="setup-right">
     
        <motion.video
  key={setUpPoints[active].video}
  src={setUpPoints[active].video}
  autoPlay
  loop
  muted
  playsInline
  initial={{ opacity: 0, y: 20, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: -20, scale: 0.98 }}
  transition={{ duration: 0.4 }}
/>
      
    </div>
  </motion.div>
  </AnimatePresence>

  {/* DOTS */}
  <div className="setup-dots">
    {setUpPoints.map((_, i) => (
      <span
        key={i}
        className={i === active ? "dot active" : "dot"}
        onClick={() => setActive(i)}
      />
    ))}
  </div>
</section>

   <section className="video-section">
  <div className="video-section-container">

    {/* LEFT - VIDEO */}
    <motion.div
      className="video-section-media"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="video-section-video-wrapper">
        <video
          className="video-section-video"
          controls
          preload="metadata"
        >
          <source src={onbbitsVdo} type="video/mp4" />
        </video>
      </div>
    </motion.div>

    {/* RIGHT - CONTENT */}
    <div className="video-section-content">

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        See How Onbbits Works for Sales & Support Teams
      </motion.h2>

      <motion.p
        className="section-sub"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        A quick walkthrough of how businesses use Onbbits to
        manage WhatsApp conversations.
      </motion.p>

      <motion.ul
        className="video-section-list"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <li>Unified WhatsApp inbox</li>
        <li>Automation & templates</li>
        <li>Sales & support workflows</li>
        <li>Real-time analytics</li>
      </motion.ul>

      <motion.div
        className="video-section-actions"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Link to="/book-a-demo">
          <button className="btn-outline">Book a Demo</button>
        </Link>

        <a
          href="https://app.onbbits.io/register"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-primary">Start Free</button>
        </a>
      </motion.div>

    </div>

  </div>
</section>

    <Testimonials />

  <WhyChoose />
        </>
    )
}

export default Home;