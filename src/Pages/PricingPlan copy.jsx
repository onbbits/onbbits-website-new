import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


import heroImg1 from '../Images/pricing-hero.webp';

import PagesHero from "../Components/PagesHero";
import WhyChoose from "../Components/WhyChoose";

import { FiCheck, FiInfo } from "react-icons/fi";


import { plans } from "../Data";

const PricingPlan = () => {

  useEffect(() => {
    // Set the page title
    document.title = "Onbbits Pricing & Plans for WhatsApp Business API Automation";

    // Meta Description
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore simple and transparent Onbbits pricing plans, including WhatsApp Business API access, automation features, and team tools."
      );
    }

    // Open Graph Tags
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) ogTitle.setAttribute("content", "Onbbits Pricing & Plans for WhatsApp Business API Automation");

    const ogDesc = document.querySelector("meta[property='og:description']");
    if (ogDesc)
      ogDesc.setAttribute(
        "content",
        "Explore simple and transparent Onbbits pricing plans, including WhatsApp Business API access, automation features, and team tools."
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
    if (twitterTitle) twitterTitle.setAttribute("content", "Onbbits Pricing & Plans for WhatsApp Business API Automation");

    const twitterDesc = document.querySelector("meta[name='twitter:description']");
    if (twitterDesc)
      twitterDesc.setAttribute(
        "content",
        "Explore simple and transparent Onbbits pricing plans, including WhatsApp Business API access, automation features, and team tools."
      );

    /*const twitterImage = document.querySelector("meta[name='twitter:image']");
    if (twitterImage) twitterImage.setAttribute("content", "https://example.com/twitter-about.png");*/
  }, []);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const [isYearly, setIsYearly] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, phone, company, website, message } = formData;

    if (!fullName) return toast.error("Full Name is required");
    if (!email) return toast.error("Email is required");
    if (!phone) return toast.error("Phone is required");

    setLoading(true);
    const loadingToast = toast.loading("Sending message...");

    try {
      const template = `
      <h2>New Pricing Plan Enquiry - Onbbits</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Website:</strong> ${website}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

      const data = new FormData();
      data.append("title", "Onbbits Pricing Enquiry");
      data.append("to_email", "info@onbbits.io");
      data.append(
        "cc",
        "arkayappsseo@gmail.com, sales@arkayapps.com, suresh@arkayapps.com"
      );
      data.append("subject", "New Pricing Plan Enquiry - Onbbits");
      data.append("template", template);

      await axios.post(
        "https://api.sendmail.adhyaynam.in/send-mail/two",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      );

      toast.dismiss(loadingToast);
      toast.success("Message sent successfully! 🚀");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        message: ""
      });

      setShowModal(false);

    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showModal]);



  return (
    <>
      <PagesHero
        title="Onbbits"
        highlightText="Pricing & Plans"
        title2=""
        description="Simple, transparent pricing for sales, marketing, and customer support teams using WhatsApp Business API."
        mainImg={heroImg1} />

      <section className="pricing">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Choose the Right Plan for Your Business
        </motion.h2>

        <div className="pricing-toggle-wrapper">
          <span className={!isYearly ? "active-label" : ""}>Monthly</span>

          <div
            className={`pricing-toggle ${isYearly ? "yearly" : ""}`}
            onClick={() => setIsYearly(!isYearly)}
          >
            <div className="toggle-circle"></div>
          </div>

          <span className={isYearly ? "active-label" : ""}>Quarterly</span>
        </div>


        <motion.div
          className="pricing-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`pricing-card ${plan.highlight ? "active" : ""}`}
              variants={card}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {plan.badge && (
                <span
                  className="badge"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {plan.badge}
                </span>
              )}

              <h3>{plan.name}</h3>

              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>

              {isYearly && plan.name === "Basic" && (
                <p className="yearly-note">
                  Save 6.26% on quarterly
                </p>
              )}

              {isYearly && plan.name === "Pro" && (
                <p className="yearly-note">
                  Save 10% on quarterly
                </p>
              )}


              {plan.note && <p className="special-p">{plan.note}</p>}

              <ul className="features">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.03 }}
                  >
                    <FiCheck />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <a
                href="/pricing-details.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="plan-info-box"
              >
                <span>Whatsapp Conversation Charges (per Message)</span>
                <FiInfo />
              </a>

              <button
                className={`plan-btn ${plan.highlight ? "primary" : ""}`}
                onClick={() => {
                  if (idx === 3) {
                    setShowModal(true); // 4th card → open popup
                  } else {
                    window.open(plan.link, "_blank"); // other cards → open link
                  }
                }}
              >
                {plan.icon && plan.icon} {plan.cta}
              </button>

            </motion.div>
          ))}
        </motion.div>
      </section>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="contact-modal"
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // prevent close on inner click
            >
              <div className="modal-header">
                <h2 className="section-heading">Get in touch with Onbbits</h2>
                <button
                  className="close-btn"
                  onClick={() => setShowModal(false)}
                >
                  ✕
                </button>
              </div>

              <p className="section-sub">
                Fill out the form and our team will get in touch to discuss how
                Onbbits can help scale your business.
              </p>

              <form className="modal-form" onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name*"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <PhoneInput
                  country={"in"}
                  enableSearch
                  value={formData.phone}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, phone: value }))
                  }
                  inputStyle={{
                    width: "100%",
                    height: "48px",
                    fontSize: "14px"
                  }}
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                />

                <input
                  type="url"
                  name="website"
                  placeholder="Business Website URL"
                  value={formData.website}
                  onChange={handleChange}
                />

                <textarea
                  name="message"
                  placeholder="Tell us a little about your requirements"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>

              </form>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      <WhyChoose />
    </>
  )
}

export default PricingPlan;