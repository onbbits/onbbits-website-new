import React, {useEffect} from "react";
import { motion } from "framer-motion";

import PoliciesHero from "../Components/PoliciesHero";

const TermsConditions=()=>{

useEffect(() => {
      // Set the page title
      document.title = "Terms & Conditions | Onbbits";
  
      // Meta Description
      const metaDesc = document.querySelector("meta[name='description']");
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Review the terms and conditions that govern your access to and use of Onbbits products, services, and platform features."
        );
      }
  
      // Open Graph Tags
      const ogTitle = document.querySelector("meta[property='og:title']");
      if (ogTitle) ogTitle.setAttribute("content", "Terms & Conditions | Onbbits");
  
      const ogDesc = document.querySelector("meta[property='og:description']");
      if (ogDesc)
        ogDesc.setAttribute(
          "content",
          "Review the terms and conditions that govern your access to and use of Onbbits products, services, and platform features."
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
      if (twitterTitle) twitterTitle.setAttribute("content", "Terms & Conditions | Onbbits");
  
      const twitterDesc = document.querySelector("meta[name='twitter:description']");
      if (twitterDesc)
        twitterDesc.setAttribute(
          "content",
          "Review the terms and conditions that govern your access to and use of Onbbits products, services, and platform features."
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
  highlightText="Terms & Conditions"
  
 />

    <motion.section   className="privacy-policy-section"
     variants={containerVariant}
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.1 }}>
             <motion.section variants={sectionVariant}>
              <p className="section-sub">
                Welcome to Onbbits, a SaaS platform providing WhatsApp
                automation and chatbot building services. These Terms and
                Conditions (&quot;Terms&quot;) govern your use of our services
                provided by Arkay Apps Private Limited (&quot;Company&quot;,
                &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              </p>
              <p className="section-sub">
                By accessing or using our Service, you agree to be bound by
                these Terms. If you disagree with any part of these Terms,
                please discontinue using the Service.
              </p>
           </motion.section>

             <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                1. Acceptance of Terms
              </h2>
              <p className="section-sub">
                By creating an account, accessing, or using Onbbits in any
                manner, you acknowledge that you have read, understood, and
                agree to be bound by these Terms and our Privacy Policy. These
                Terms constitute a legally binding agreement between you and
                Arkay Apps Private Limited.
              </p>
           </motion.section>
             <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                2. Description of Service
              </h2>
              <p className="section-sub">
                Onbbits provides the following services:
              </p>
              <ul>
                <li className="section-sub">
                  WhatsApp automation and chatbot building tools
                </li>
                <li className="section-sub">
                  Integration with WhatsApp Business API
                </li>
                <li className="section-sub">Analytics and reporting features</li>
                <li className="section-sub">Customer support and maintenance</li>
                <li className="section-sub">
                  Other software-as-a-service functionalities
                </li>
              </ul>
            </motion.section>
            <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                3. User Accounts and Registration
              </h2>

              <h3 className="section-title">
                3.1 Account Creation
              </h3>
              <ul>
                <li className="section-sub">
                  You must provide accurate, current, and complete information
                  during registration.
                </li>
                <li className="section-sub">
                  You are responsible for maintaining the confidentiality of
                  your account credentials.
                </li>
                <li className="section-sub">
                  You must be at least 18 years old to create an account.
                </li>
                <li className="section-sub">
                  Each person or entity may maintain only one account.
                </li>
              </ul>

              <h3 className="section-title">
                3.2 Account Security
              </h3>
              <ul>
                <li className="section-sub">
                  You are responsible for all activities that occur under your
                  account.
                </li>
                <li className="section-sub">
                  Notify us immediately of any unauthorized use of your account.
                </li>
                <li className="section-sub">
                  We are not liable for any loss or damage arising from
                  unauthorized account access.
                </li>
              </ul>
           </motion.section>

             <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                4. Subscription and Payment Terms
              </h2>

              <h3 className="section-title">
                4.1 Subscription Plans
              </h3>
              <ul>
                <li className="section-sub">
                  Various subscription plans are available with different
                  features and limitations.
                </li>
                <li className="section-sub">
                  Subscription fees are billed in advance on a monthly or annual
                  basis.
                </li>
                <li className="section-sub">
                  All fees are non-refundable except as expressly stated in our
                  Refund Policy.
                </li>
              </ul>

              <h3 className="section-title">
                4.2 Payment Processing
              </h3>
              <ul>
                <li className="section-sub">
                  Payments are processed through secure third-party payment
                  processors.
                </li>
                <li className="section-sub">
                  You authorize us to charge your payment method for all
                  applicable fees.
                </li>
                <li className="section-sub">
                  You are responsible for all applicable taxes related to your
                  use of the Service.
                </li>
              </ul>

              <h3 className="section-title">
                4.3 Price Changes
              </h3>
              <p className="section-sub">
                We reserve the right to modify subscription prices with 30 day&apos;s
                advance notice. Price changes will not affect your current
                billing cycle.
              </p>
            </motion.section>

             <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                5. Acceptable Use Policy
              </h2>

              <h3 className="section-title">
                5.1 Permitted Use
              </h3>
              <p className="section-sub">
                You may use Onbbits only for lawful business purposes in
                accordance with these Terms.
              </p>

              <h3 className="section-title">
                5.2 Prohibited Activities
              </h3>
              <p className="section-sub">
                You agree not to:
              </p>
              <ul>
                <li className="section-sub">
                  Send spam, unsolicited messages, or violate anti-spam laws.
                </li>
                <li className="section-sub">
                  Engage in illegal, harmful, or fraudulent activities.
                </li>
                <li className="section-sub">
                  Violate WhatsApp&apos;s Terms of Service or Business Policy.
                </li>
                <li className="section-sub">
                  Attempt to gain unauthorized access to our systems.
                </li>
                <li className="section-sub">
                  Reverse engineer, decompile, or disassemble our software.
                </li>
                <li className="section-sub">
                  Use the Service to compete with or replicate a similar
                  service.
                </li>
                <li className="section-sub">
                  Share your account access with unauthorized third parties.
                </li>
              </ul>
            </motion.section>

             <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                6. Data and Privacy
              </h2>
              <p className="section-sub">
                Your privacy is important to us. Our collection and use of
                personal information are governed by our Privacy Policy, which
                forms an integral part of these Terms.
              </p>
              <ul>
                <li className="section-sub">
                  You retain ownership of your business data and content.
                </li>
                <li className="section-sub">
                  We may access your data only as necessary to provide the
                  Service.
                </li>
                <li className="section-sub">
                  You are responsible for ensuring you have rights to any data
                  you upload.
                </li>
                <li className="section-sub">
                  You must comply with all applicable data protection laws.
                </li>
              </ul>
            </motion.section>

             <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                7. Intellectual Property
              </h2>

              <h3 className="section-title">
                7.1 Our Rights
              </h3>
              <p className="section-sub">
                Onbbits, along with all related software, technology, and
                content, is owned by Arkay Apps Private Limited and protected by
                applicable intellectual property laws.
              </p>

              <h3 className="section-title">
                7.2 License Grant
              </h3>
              <p className="section-sub">
                Subject to these Terms, we grant you a limited, non-exclusive,
                non-transferable license to use Onbbits during your active
                subscription period.
              </p>
           </motion.section>

             <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                8. Service Availability and Support
              </h2>
              <ul>
                <li className="section-sub">
                  We strive to maintain high service availability but do not
                  guarantee uninterrupted access.
                </li>
                <li className="section-sub">
                  Scheduled maintenance will be communicated in advance when
                  possible.
                </li>
                <li className="section-sub">
                  Support is provided during business hours via email and our
                  support platform.
                </li>
                <li className="section-sub">
                  We may temporarily suspend access for maintenance, security,
                  or legal reasons.
                </li>
              </ul>
            </motion.section>

             <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                9. Limitation of Liability
              </h2>
              <p className="section-sub">
                To the maximum extent permitted by law:
              </p>
              <ul>
                <li className="section-sub">
                  Our total liability shall not exceed the amount paid by you in
                  the 12 months preceding the claim.
                </li>
                <li className="section-sub">
                  We are not liable for indirect, incidental, or consequential
                  damages.
                </li>
                <li className="section-sub">
                  We do not warrant that the Service will be error-free or
                  uninterrupted.
                </li>
                <li className="section-sub">
                  You use the Service at your own risk.
                </li>
              </ul>
            </motion.section>
             <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                10. Termination
              </h2>

              <h3 className="section-title">
                10.1 Termination by You
              </h3>
              <p className="section-sub">
                You may terminate your account at any time through your account
                settings. Termination will take effect at the end of your
                current billing period.
              </p>

              <h3 className="section-title">
                10.2 Termination by Us
              </h3>
              <p className="section-sub">
                We may terminate or suspend your account immediately for
                violations of these Terms or for any other reason at our sole
                discretion.
              </p>
            </motion.section>

             <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                11. Governing Law
              </h2>
              <p className="section-sub">
                These Terms are governed by the laws of India. Any disputes will
                be subject to the exclusive jurisdiction of the courts where
                Arkay Apps Private Limited is registered.
              </p>
            </motion.section>

             <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                12. Changes to Terms
              </h2>
              <p className="section-sub">
                We reserve the right to modify these Terms at any time. Material
                changes will be communicated via email or through the Service.
              </p>
              <p className="section-sub">
                Continued use of Onbbits after such changes constitutes
                acceptance of the revised Terms.
              </p>
           </motion.section>

             <motion.section variants={sectionVariant}>
              <h2 className="section-title">
                13. Contact Information
              </h2>
              <p className="section-sub">
                For questions about these Terms, please contact us:
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
        </motion.section>
        </>
    )
}

export default TermsConditions;