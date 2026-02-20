import React, { useState, useEffect }  from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroImg1 from '../Images/hero-dashboard.webp';

import PagesHero from "../Components/PagesHero";

import { APIFaqs, gettingStartedFaqs, integrationFaqs, pricingPlansFaqs, productFeaturesFaqs, securityComplianceFaqs, supportAccountFaqs, templateAutomationFaqs } from "../Data";

const Faqs=()=>{

  useEffect(() => {
      // Set the page title
      document.title = "Onbbits FAQs | Product, Pricing & WhatsApp API";
  
      // Meta Description
      const metaDesc = document.querySelector("meta[name='description']");
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Find clear answers to common questions about Onbbits features, pricing, integrations, WhatsApp Business API usage, and account setup."
        );
      }
  
      // Open Graph Tags
      const ogTitle = document.querySelector("meta[property='og:title']");
      if (ogTitle) ogTitle.setAttribute("content", "Onbbits FAQs | Product, Pricing & WhatsApp API");
  
      const ogDesc = document.querySelector("meta[property='og:description']");
      if (ogDesc)
        ogDesc.setAttribute(
          "content",
          "Find clear answers to common questions about Onbbits features, pricing, integrations, WhatsApp Business API usage, and account setup."
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
      if (twitterTitle) twitterTitle.setAttribute("content", "Onbbits FAQs | Product, Pricing & WhatsApp API");
  
      const twitterDesc = document.querySelector("meta[name='twitter:description']");
      if (twitterDesc)
        twitterDesc.setAttribute(
          "content",
          "Find clear answers to common questions about Onbbits features, pricing, integrations, WhatsApp Business API usage, and account setup."
        );
  
      /*const twitterImage = document.querySelector("meta[name='twitter:image']");
      if (twitterImage) twitterImage.setAttribute("content", "https://example.com/twitter-about.png");*/
    }, []);
  


    const categories = [
    { label: "Getting Started", data: gettingStartedFaqs },
    { label: "WhatsApp Business API", data: APIFaqs },
    { label: "Product & Features", data: productFeaturesFaqs },
    { label: "Pricing & Plans", data: pricingPlansFaqs },
    { label: "Integrations", data: integrationFaqs },
    { label: "Templates & Automation", data: templateAutomationFaqs },
    { label: "Security & Compliance", data: securityComplianceFaqs },
    { label: "Support & Account", data: supportAccountFaqs },
  ];

    const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState(0);
    return(
        <>
          <PagesHero 
        title="FAQs About"
  highlightText="Onbbits"
  title2=""
  description="Find answers about WhatsApp Business API setup, pricing, features, automation, integrations, and support."
  mainImg={heroImg1}/>

   <section className="faq-section">
  <h2 className="section-heading">Browse FAQs by Category</h2>

  <div className="faq-wrapper">
    {/* LEFT */}
    <div className="faq-categories">
      {categories.map((cat, index) => (
        <button
          key={index}
          className={`faq-category ${
            activeCategory.label === cat.label ? "active" : ""
          }`}
          onClick={() => {
            setActiveCategory(cat);
            setOpenIndex(0);
          }}
        >
          {cat.label}
        </button>
      ))}
    </div>

    {/* RIGHT */}
    <AnimatePresence mode="wait">
      <motion.div
        key={activeCategory.label}
        className="faq-list"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {activeCategory.data.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              className={`faq-item ${isOpen ? "open" : ""}`}
              layout
              transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className="faq-question">
                <h3>{item.ques}</h3>

                <motion.span
                  className="faq-icon"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {isOpen ? "−" : "+"}
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <p>{item.ans}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  </div>
</section>

        </>
    )
}

export default Faqs;