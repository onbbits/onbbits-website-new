import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";



import PagesHero from "../Components/PagesHero";

import heroImg1 from '../Images/hero-dashboard.webp';

import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Check
} from 'lucide-react';
import { FaQuestion } from "react-icons/fa6";

import { contactCards } from "../Data";

const Contact=()=>{

useEffect(() => {
      // Set the page title
      document.title = "Contact Onbbits | Sales & Support Team";
  
      // Meta Description
      const metaDesc = document.querySelector("meta[name='description']");
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Contact the Onbbits team for product questions, WhatsApp Business API access, integrations, onboarding help, or technical support."
        );
      }
  
      // Open Graph Tags
      const ogTitle = document.querySelector("meta[property='og:title']");
      if (ogTitle) ogTitle.setAttribute("content", "Contact Onbbits | Sales & Support Team");
  
      const ogDesc = document.querySelector("meta[property='og:description']");
      if (ogDesc)
        ogDesc.setAttribute(
          "content",
          "Contact the Onbbits team for product questions, WhatsApp Business API access, integrations, onboarding help, or technical support."
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
      if (twitterTitle) twitterTitle.setAttribute("content", "Contact Onbbits | Sales & Support Team");
  
      const twitterDesc = document.querySelector("meta[name='twitter:description']");
      if (twitterDesc)
        twitterDesc.setAttribute(
          "content",
          "Contact the Onbbits team for product questions, WhatsApp Business API access, integrations, onboarding help, or technical support."
        );
  
      /*const twitterImage = document.querySelector("meta[name='twitter:image']");
      if (twitterImage) twitterImage.setAttribute("content", "https://example.com/twitter-about.png");*/
    }, []);
  


  const [loading, setLoading] = useState(false);


const [formData, setFormData] = useState({
  fullName: "",
  company: "",
  email: "",
  phone: "",
  reason: "",
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

  const { fullName, company, email, phone, reason, message } = formData;

  if (!fullName) return toast.error("Full Name is required");
  if (!email) return toast.error("Work Email is required");
  if (!phone) return toast.error("Phone / WhatsApp Number is required");
  if (!reason) return toast.error("Please select a reason");
  if (!message) return toast.error("Message is required");

  setLoading(true); // ✅ start loading

  const loadingToast = toast.loading("Sending message...");

  try {
    const template = `
      <h2>New Contact Form Submission - Onbbits</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Reason:</strong> ${reason}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    const data = new FormData();
    data.append("title", "Onbbits Contact Form");
    data.append("to_email", "info@onbbits.io");
    data.append(
      "cc",
      "arkayappsseo@gmail.com, sales@arkayapps.com, suresh@arkayapps.com"
    );
    data.append("subject", "New Contact Form - Onbbits");
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
      company: "",
      email: "",
      phone: "",
      reason: "",
      message: ""
    });

  } catch (err) {
    toast.dismiss(loadingToast);
    toast.error("Something went wrong. Please try again.");
  } finally {
    setLoading(false); // ✅ stop loading
  }
};



    return(
        <>
         <PagesHero 
        title="Contact Onbbits For"
  highlightText="WhatsApp Business API "
  title2=""
  description="Talk to our WhatsApp experts to discuss sales, marketing, customer support automation, integrations, or pricing."
  mainImg={heroImg1}/>

  <section className="contact-options">
      {/* Heading */}
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Get in Touch with Onbbits
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="section-sub"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        Ready to automate your WhatsApp conversations with Onbbits?
        <br />
        Reach out to our team and let's build smarter customer engagement together.
      </motion.p>

      {/* Cards */}
      <div className="contact-cards">
        {contactCards.map((card, i) => (
          <motion.div
            key={i}
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <a href={card.href}>{card.btn}</a>
          </motion.div>
        ))}
      </div>
    </section>

     <section className="contact-form-section" id="contact-form">
      <div className="contact-form-card">

        {/* Header */}
        <motion.div
          className="form-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Get in Touch with Onbbits</h2>
          <p className="section-sub">
            Ready to automate your WhatsApp conversations with Onbbits? Reach out to our team and let's build smarter customer engagement together.
          </p>
        </motion.div>

        {/* Form */}
       <form className="contact-form" onSubmit={handleSubmit} >
  {[
    { type: "row", inputs: [
        { placeholder: "Full Name *", name: "fullName" },
        { placeholder: "Company / Agency Name", name: "company" }
      ] 
    },
    { type: "row", inputs: [
        { placeholder: "Work Email *", name: "email" },
        { placeholder: "Phone / WhatsApp Number *", name: "phone" }
      ] 
    },
    { type: "row", select: true }
  ].map((row, i) => (
    <motion.div
      className="form-row"
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.15 }}
    >
      {row.select ? (
        <>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
             required
          >
            <option value="">Select Reason</option>
            <option value="sales">Sales</option>
            <option value="support">Support</option>
            <option value="partnership">Partnership</option>
            <option value="general">General Enquiry</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            rows={1}
            value={formData.message}
            onChange={handleChange}
          />
        </>
      ) : (
        row.inputs.map((input, j) => {
         if (input.name === "phone") {
    return (
      <PhoneInput
        key={j}
        country={"in"} // default country
        enableSearch
        value={formData.phone}
        onChange={(value) =>
          setFormData((prev) => ({ ...prev, phone: value }))
        }
        inputStyle={{
          width: "100%",
          height: "48px",
          fontSize: "16px",
        }}
        containerStyle={{
          width: "100%",
        }}
        buttonStyle={{
          border: "none",
        }}
      />
    );
  }

  // 🔹 Default handling for other inputs
  const type =
    input.name === "email"
      ? "email"
      : "text";


          return (
            <input
              key={j}
              type={type}
              placeholder={input.placeholder}
              name={input.name}
              value={formData[input.name]}
              onChange={handleChange}
              required={
    input.name === "fullName" ||
    input.name === "email" ||
    input.name === "phone"
  }
            />
          );
        })
      )}
    </motion.div>
  ))}

  <motion.button
    type="submit"
    className="btn-primary"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.5 }}
     disabled={loading}
  >
    Submit & Talk to an Expert
  </motion.button>
</form>

      </div>
    </section>

     <section className="contact-container">

      {/* Left Side */}
      <motion.div
        className="contact-left"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Reach Us Directly</h2>
          <p className="section-sub">We usually respond within 24 business hours.</p>
        </motion.div>

        <div className="contact-list">
        {[
  { 
    icon: <Mail size={24} />, 
    label: "Email", 
    value: "info@onbbits.io",
    href: "mailto:info@onbbits.io"
  },
  { 
    icon: <Phone size={24} />, 
    label: "Phone", 
    value: "+91 91066 80019",
    href: "tel:+919106680019"
  },
  { 
    icon: <MessageCircle size={24} />, 
    label: "WhatsApp", 
    value: "Chat on WhatsApp",
    href: "https://wa.me/919106680019"
  },
  { 
    icon: <Clock size={24} />, 
    label: "Business Hours", 
    value: "09:00 AM to 06:00 PM"
  },
  { 
    icon: <MapPin size={24} />, 
    label: "Address", 
    value: "912, International Finance Center, VIP Road, Vesu, Surat, Gujarat 395007",
    flexStart: true 
  }
]
.map((item, i) => (
            <motion.div
              key={i}
              className="contact-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={item.flexStart ? { alignItems: "flex-start" } : {}}
            >
              <div className="icon-box">{item.icon}</div>
              <div className="contact-info">
  <label>{item.label}</label>

  {item.href ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer">
      {item.value}
    </a>
  ) : (
    <span>{item.value}</span>
  )}

</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="contact-right"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        {/* Why Choose Card */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Why Businesses Choose Onbbits</h2>
          <div className="check-list">
            {[
              "Official WhatsApp Business API Solution",
              "Fast API Setup & Onboarding",
              "Built for Sales, Marketing & Support Teams",
              "Secure, GDPR-Compliant Platform"
            ].map((text, i) => (
              <motion.div
                key={i}
                className="check-item"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="green-icon-badge">
                  <Check size={16} strokeWidth={3} />
                </div>
                {text}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Card */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h2 className="section-heading">Got Questions ? We are here.</h2>

          {[
            { q: "How soon will I hear back after contacting Onbbits?", a: "We usually respond within 24 business hours." },
            { q: "Do you offer WhatsApp Business API demos?", a: "Yes, we offer guided demos to help you understand Better." },
            { q: "Is support included in all plans?", a: "Yes, customer support is included across all plans, including the free plan." }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="faq-item-contact"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="green-icon-badge"><FaQuestion size={16} /></div>
              <div className="faq-content-contact">
                <label>{item.q}</label>
                <p>{item.a}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
        </>
    )
}

export default Contact;