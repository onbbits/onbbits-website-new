import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import metaVerifiedImg from '../Images/meta-verified.png';

import { FaYoutube, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
  {
    icon: FaYoutube,
    link: "https://www.youtube.com/@Onbbits",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/onbbits.io",
  },
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/onbbits",
  },
  {
    icon: FaXTwitter,
    link: "https://x.com/Onbbits",
  },
];
  return (
    <>
      <motion.footer
        className="footer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="footer-container">
          {/* LEFT */}
          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="footer-logo">ONBBITS</h2>
            <p>
              Onbbits is a WhatsApp automation platform for sales,
              support, and customer engagement, built to help
              businesses grow through conversations.
            </p>
          <div style={{ marginTop: "22px" }}>
    <img 
      src={metaVerifiedImg} 
      alt="Meta Verified | Onbbits" 
      style={{ width: "140px", height: "auto" }} 
    />
  </div>
          </motion.div>

          {/* CENTER */}
          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="col-heading">Company</h4>
            <ul>
             <Link to='/about-us'> <li>About us</li></Link>
               <Link to='/faqs'><li>FAQs</li></Link>
               <Link to='/solutions'><li>Solutions</li></Link>
              <Link to='/pricing-plans'> <li>Pricing</li></Link>
            </ul>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="col-heading">Contact</h4>
           <a href="tel:+919106680019">
  <p className="contact-p">+91 91066 80019</p>
</a>
           <a href="mailto:info@onbbits.io">
  <p className="contact-p">info@onbbits.io</p>
</a>

            <h4 style={{ marginTop: "16px" }}>Follow Us</h4>

           <div className="footer-socials">
  {socialLinks.map(({ icon: Icon, link }, i) => (
    <motion.a
      key={i}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.08 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <Icon />
    </motion.a>
  ))}
</div>

          </motion.div>
        </div>
      </motion.footer>

      {/* BOTTOM BAR */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="footer-bottom-wrapper">
          <span>© 2026 ONBBITS Innovation Pvt. Ltd. All rights reserved. Various trademarks held by their respective owners</span>
          <span>
            <Link to='/privacy-policy'>Privacy Policy</Link> | <Link to='/terms-conditions'>Terms & Conditions</Link> | <Link to='/cancellation-refund-policy'>Cancellation & Refund</Link>
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
