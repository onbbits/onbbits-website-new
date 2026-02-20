import React, {useEffect} from "react";
import { motion } from "framer-motion";


import PoliciesHero from "../Components/PoliciesHero";

const CancellationRefund=()=>{

useEffect(() => {
      // Set the page title
      document.title = "Cancellation & Refund Policy | Onbbits";
  
      // Meta Description
      const metaDesc = document.querySelector("meta[name='description']");
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Understand Onbbits cancellation, refund eligibility, billing cycles, and subscription policies before choosing a plan."
        );
      }
  
      // Open Graph Tags
      const ogTitle = document.querySelector("meta[property='og:title']");
      if (ogTitle) ogTitle.setAttribute("content", "Cancellation & Refund Policy | Onbbits");
  
      const ogDesc = document.querySelector("meta[property='og:description']");
      if (ogDesc)
        ogDesc.setAttribute(
          "content",
          "Understand Onbbits cancellation, refund eligibility, billing cycles, and subscription policies before choosing a plan."
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
      if (twitterTitle) twitterTitle.setAttribute("content", "Cancellation & Refund Policy | Onbbits");
  
      const twitterDesc = document.querySelector("meta[name='twitter:description']");
      if (twitterDesc)
        twitterDesc.setAttribute(
          "content",
          "Understand Onbbits cancellation, refund eligibility, billing cycles, and subscription policies before choosing a plan."
        );
  
      /*const twitterImage = document.querySelector("meta[name='twitter:image']");
      if (twitterImage) twitterImage.setAttribute("content", "https://example.com/twitter-about.png");*/
    }, []);


    const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
    return(
        <>
         <PoliciesHero
        title="Onbbits"
  highlightText="Cancellation & Refund Policy"
/>

  <motion.section   className="privacy-policy-section"
    variants={containerVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}>
              <motion.section variants={sectionVariant}>
              <p className="section-sub">
                This Cancellation and Refund Policy (&quot;Policy&quot;) applies
                to users of Onbbits (hereinafter referred to as
                &quot;Platform&quot;, &quot;Onbbits&quot;, &quot;Website&quot;,
                or &quot;Service&quot;), a SaaS-based WhatsApp automation and
                chatbot builder platform owned and operated by Arkay Apps
                Private Limited (&quot;Company&quot;, &quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;).
              </p>
              <p className="section-sub">
                By subscribing to Onbbits, you agree to this Policy as part of
                our Terms of Service. This document outlines how subscription
                cancellations and refund requests are handled.
              </p>
            </motion.section>

             <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                1. Overview
              </h2>
              <p className="section-sub">
                At Onbbits, we are committed to providing powerful WhatsApp
                automation and chatbot tools tailored for small businesses and
                marketers. This Policy explains how you can cancel your
                subscription, when refunds may be applicable, and the process
                for submitting a refund request.
              </p>
              <p className="section-sub">
                By using our Service, you acknowledge and accept the terms
                outlined below.
              </p>
           </motion.section>

             <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                2. Subscription Cancellation Policy
              </h2>
              <ul>
                <li className="section-sub">
                  Users may cancel their subscription at any time from their
                  Onbbits dashboard.
                </li>
                <li className="section-sub">
                  Cancellations take effect at the end of the current billing
                  cycle (monthly or annually).
                </li>
                <li className="section-sub">
                  You will continue to have access to all features until the
                  billing cycle ends.
                </li>
                <li className="section-sub">
                  No partial refunds or prorated credits will be provided for
                  unused time within the billing period.
                </li>
              </ul>
            </motion.section>

              <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                3. Refund Eligibility
              </h2>
              <p className="section-sub">
                We do not offer refunds on subscription fees once a payment is
                processed, except under the following conditions:
              </p>
              <ul>
                <li className="section-sub">
                  Duplicate charges or other billing errors caused by Onbbits.
                </li>
              </ul>
           </motion.section>

              <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                4. Non-Refundable Items
              </h2>
              <p className="section-sub">
                The following payments are strictly non-refundable, even if the
                associated service has not been used in full:
              </p>
              <ul>
                <li className="section-sub">
                  One-time add-ons such as onboarding, funnel setup, or API
                  integration once activated or work has commenced.
                </li>
                <li className="section-sub">
                  Subscription fees after the payment has been processed and
                  access granted.
                </li>
                <li className="section-sub">
                  Third-party charges (e.g., WhatsApp Business API provider
                  fees) not billed directly by Onbbits.
                </li>
              </ul>
            </motion.section>

              <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                5. How to Request a Refund
              </h2>
              <p className="section-sub">
                To request a refund under eligible conditions:
              </p>
              <ol>
                <li className="section-sub">
                  Email us at{" "}
                  <a href="mailto:info@onbbits.io">
                    <span className="section-sub">
                      info@onbbits.io
                    </span>
                  </a>{" "}
                  with the subject line: Refund Request – [Your Account Email].
                </li>
                <li className="section-sub">
                  Include the following details:
                  <ul>
                    <li className="section-sub">Your registered email ID</li>
                    <li className="section-sub">
                      Invoice number or transaction ID
                    </li>
                    <li className="section-sub">
                      Reason for your request, with relevant documentation (if
                      applicable)
                    </li>
                  </ul>
                </li>
              </ol>
              <p className="section-sub">
                Refund requests must be submitted within 7 days of the billing
                date. Our team will review and respond within 5 business days.
              </p>
            </motion.section>

              <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                6. Exceptional Circumstances
              </h2>
              <p className="section-sub">
                We may, at our sole discretion, issue a refund in exceptional
                cases not covered above. These may include:
              </p>
              <ul>
                <li className="section-sub">
                  Proven inability to access the platform despite proper setup
                  and usage.
                </li>
                <li className="section-sub">
                  Technical failures unresolved after reasonable troubleshooting
                  efforts with our support team.
                </li>
              </ul>
              <p className="section-sub">
                Such cases will be reviewed individually and do not set a
                precedent for future claims.
              </p>
           </motion.section>

              <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                7. Changes to This Policy
              </h2>
              <p className="section-sub">
                Onbbits reserves the right to amend this Cancellation and Refund
                Policy at any time. Updates will be posted on our website with
                the &quot;Effective Date&quot; at the top of this page.
              </p>
              <p className="section-sub">
                We recommend reviewing this Policy periodically. Continued use
                of Onbbits after changes take effect constitutes acceptance of
                the revised Policy.
              </p>
            </motion.section>
      </motion.section>
        </>
    )
}

export default CancellationRefund;