import React, {useEffect} from "react";
import { motion } from "framer-motion";

import PoliciesHero from "../Components/PoliciesHero";

const PrivacyPolicy=()=>{

useEffect(() => {
      // Set the page title
      document.title = "Privacy Policy | Onbbits";
  
      // Meta Description
      const metaDesc = document.querySelector("meta[name='description']");
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Learn how Onbbits collects, uses, stores, and protects your personal information while ensuring data privacy and security."
        );
      }
  
      // Open Graph Tags
      const ogTitle = document.querySelector("meta[property='og:title']");
      if (ogTitle) ogTitle.setAttribute("content", "Privacy Policy | Onbbits");
  
      const ogDesc = document.querySelector("meta[property='og:description']");
      if (ogDesc)
        ogDesc.setAttribute(
          "content",
          "Learn how Onbbits collects, uses, stores, and protects your personal information while ensuring data privacy and security."
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
      if (twitterTitle) twitterTitle.setAttribute("content", "Privacy Policy | Onbbits");
  
      const twitterDesc = document.querySelector("meta[name='twitter:description']");
      if (twitterDesc)
        twitterDesc.setAttribute(
          "content",
          "Learn how Onbbits collects, uses, stores, and protects your personal information while ensuring data privacy and security."
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
  highlightText="Privacy Policy"
 
  />

  <motion.section   className="privacy-policy-section"
  variants={containerVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}>
            <motion.section variants={sectionVariant}>
              <p className="section-sub">
                Onbbits (hereinafter referred to as &quot;Platform&quot;,
                &quot;Onbbits&quot;, &quot;Website&quot;, or
                &quot;Service&quot;) is a SaaS-based WhatsApp automation and
                chatbot builder platform owned and operated by Arkay Apps
                Private Limited, a company registered in India (hereinafter
                referred to as &quot;Company&quot;, &quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;).
              </p>
              <p className="section-sub">
                This Privacy Policy (&quot;Policy&quot;) describes how we
                collect, use, disclose, and safeguard your information when you
                use Onbbits through our website or platform.
              </p>
              <p className="section-sub">
                By accessing the Platform or using our Services, you agree to
                the collection and use of your data as described in this Policy.
                If you do not agree with the terms, please do not use the
                Service.
              </p>
            </motion.section>

           <motion.section variants={sectionVariant}>
              <h2 className="section-heading">
                1. Legal Compliance
              </h2>
              <p className="section-sub">
                This Policy is prepared in accordance with:
              </p>
              <ul>
                <li className="section-sub">
                  The Information Technology Act, 2000
                </li>
                <li className="section-sub">
                  The Information Technology (Reasonable Security Practices and
                  Procedures and Sensitive Personal Data or Information) Rules,
                  2011
                </li>
                <li className="section-sub">
                  The Digital Personal Data Protection Act, 2023
                </li>
                <li className="section-sub">
                  And is aligned with the GDPR where applicable
                </li>
              </ul>
            </motion.section>

           <motion.section variants={sectionVariant}>
              <h2 className="section-heading">
                2. Definitions
              </h2>
              <ul>
                <li className="section-sub">
                  <strong >Service</strong> – Onbbits
                  platform for WhatsApp automation, chatbot building, and
                  communication workflows.
                </li>
                <li className="section-sub">
                  <strong>Personal Data</strong> –
                  Any information that identifies or can be used to identify you
                  directly or indirectly.
                </li>
                <li className="section-sub">
                  <strong>User</strong> – Any
                  individual who accesses or uses our Service.
                </li>
                <li className="section-sub">
                  <strong>Data Controller</strong> –
                  The entity that determines the purposes and means of
                  processing personal data.
                </li>
              </ul>
            </motion.section>

           <motion.section variants={sectionVariant}>
              <h2 className="section-heading">
                3. Information We Collect
              </h2>

              <h3 className="section-heading">
                3.1 Information You Provide
              </h3>
              <ul>
                <li className="section-sub">
                  Account registration information (name, email address, phone
                  number)
                </li>
                <li className="section-sub">
                  Payment information (processed securely through third-party
                  payment processors)
                </li>
                <li className="section-sub">
                  Profile information and preferences
                </li>
                <li className="section-sub">
                  Communication data (messages, support tickets, feedback)
                </li>
                <li className="section-sub">
                  WhatsApp Business API credentials and configuration data
                </li>
              </ul>

              <h3 className="section-heading">
                3.2 Information We Collect Automatically
              </h3>
              <ul>
                <li className="section-sub">Usage data and analytics</li>
                <li className="section-sub">
                  Device information (IP address, browser type, operating
                  system)
                </li>
                <li className="section-sub">Log files and technical data</li>
                <li className="section-sub">
                  Cookies and similar tracking technologies
                </li>
              </ul>
            </motion.section>

            <motion.section variants={sectionVariant}>
              <h2 className="section-heading">
                4. How We Use Your Information
              </h2>
              <p className="section-sub">
                We use the collected information for the following purposes:
              </p>
              <ul>
                <li className="section-sub">
                  Providing and maintaining our Service
                </li>
                <li className="section-sub">
                  Processing payments and managing subscriptions
                </li>
                <li className="section-sub">
                  Improving our platform and developing new features
                </li>
                <li className="section-sub">
                  Providing customer support and technical assistance
                </li>
                <li className="section-sub">
                  Sending important updates and communications
                </li>
                <li className="section-sub">
                  Ensuring security and preventing fraud
                </li>
                <li className="section-sub">Complying with legal obligations</li>
              </ul>
            </motion.section>

           <motion.section variants={sectionVariant}>
              <h2 className="section-heading">
                5. Data Sharing and Disclosure
              </h2>
              <p className="section-sub">
                We do not sell, trade, or rent your personal information. We may
                share your data in the following circumstances:
              </p>
              <ul>
                <li className="section-sub">
                  With trusted service providers who assist in our operations
                </li>
                <li className="section-sub">
                  When required by law or legal process
                </li>
                <li className="section-sub">
                  To protect our rights, privacy, safety, or property
                </li>
                <li className="section-sub">
                  In connection with a business transaction (merger,
                  acquisition, etc.)
                </li>
                <li className="section-sub">With your explicit consent</li>
              </ul>
            </motion.section>

           <motion.section variants={sectionVariant}>
              <h2 className="section-heading">
                6. Data Security
              </h2>
              <p className="section-sub">
                We implement appropriate technical and organizational security
                measures to protect your personal data against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </motion.section>

           <motion.section variants={sectionVariant}>
              <h2 className="section-heading">
                7. Your Rights
              </h2>
              <p className="section-sub">
                You have the following rights regarding your personal data:
              </p>
              <ul>
                <li className="section-sub">Right to access your personal data</li>
                <li className="section-sub">
                  Right to rectify inaccurate or incomplete data
                </li>
                <li className="section-sub">
                  Right to erase your personal data (right to be forgotten)
                </li>
                <li className="section-sub">Right to restrict processing</li>
                <li className="section-sub">Right to data portability</li>
                <li className="section-sub">Right to object to processing</li>
                <li className="section-sub">Right to withdraw consent</li>
              </ul>
            </motion.section>

            <motion.section variants={sectionVariant}>
              <h2 className="section-heading">
                8. Contact Information
              </h2>
              <p className="section-sub">
                For any questions about this Privacy Policy or to exercise your
                rights, please contact us at:
              </p>
              <div>
                <p className="section-sub">
                  Email:{" "}
                  <a href="mailto:info@onbbits.io">
                    <span className="text-[#25D366]">info@onbbits.io</span>
                  </a>
                </p>
                <address className="section-sub">
                  912, International Finance Center,
                  <br />
                  VIP Road, Vesu, Surat,
                  <br />
                  Gujarat 395007.
                </address>
                <p className="section-sub">India</p>
              </div>
            </motion.section>

            <motion.section variants={sectionVariant}>
              <h2 className="section-heading">
                9. Changes to This Policy
              </h2>
              <p className="section-sub">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Effective Date&quot; at the top
                of this page.
              </p>
            </motion.section>
      </motion.section>
        </>
    )
}

export default PrivacyPolicy;