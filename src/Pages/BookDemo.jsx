import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import heroImg1 from '../Images/hero-dashboard.webp';
import PagesHero from "../Components/PagesHero";
import ProblemWeSolve from "../Components/ProblemWeSolve";
import IndustriesList from "../Components/IndustriesList";
import WhatMakesOnbbitsDifferent from "../Components/WhatMakesOnbbitsDifferent";
import FaqIndividual from "../Components/FaqIndividual";

import { supportAccountFaqs } from "../Data";

const BookDemo = () => {

  useEffect(() => {
    // Set the page title
    document.title = "Book a Demo | See How Onbbits Works";

    // Meta Description
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Schedule a live demo to see how Onbbits helps teams manage WhatsApp sales, customer support, and conversations more efficiently."
      );
    }

    // Open Graph Tags
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) ogTitle.setAttribute("content", "Book a Demo | See How Onbbits Works");

    const ogDesc = document.querySelector("meta[property='og:description']");
    if (ogDesc)
      ogDesc.setAttribute(
        "content",
        "Schedule a live demo to see how Onbbits helps teams manage WhatsApp sales, customer support, and conversations more efficiently."
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
    if (twitterTitle) twitterTitle.setAttribute("content", "Book a Demo | See How Onbbits Works");

    const twitterDesc = document.querySelector("meta[name='twitter:description']");
    if (twitterDesc)
      twitterDesc.setAttribute(
        "content",
        "Schedule a live demo to see how Onbbits helps teams manage WhatsApp sales, customer support, and conversations more efficiently."
      );

    /*const twitterImage = document.querySelector("meta[name='twitter:image']");
    if (twitterImage) twitterImage.setAttribute("content", "https://example.com/twitter-about.png");*/
  }, []);



  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    visible: {
      transition: { staggerChildren: 0.12 }
    }
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [availableSlots, setAvailableSlots] = useState(null);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setSelectedTime("");
    if (!selectedDate) {
      setAvailableSlots(null);
      return;
    }

    const fetchSlots = async () => {
      setSlotsLoading(true);
      try {
        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const dateStr = `${year}-${month}-${day}`;

        const res = await axios.get(`https://api.onbbits.io/api/get-available-slots`, {
          params: { date: dateStr }
        });
        setAvailableSlots(res.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load available slots");
        setAvailableSlots([]);
      } finally {
        setSlotsLoading(false);
      }
    };
    fetchSlots();
  }, [selectedDate]);

  const handleBookDemo = async (e) => {
    e.preventDefault();
    if (!selectedDate) return toast.error("Please select a date first");
    if (!selectedTime) return toast.error("Please select a time slot");
    if (!email) return toast.error("Please provide your work email");

    setIsBooking(true);
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const day = String(selectedDate.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;

    try {
      const res = await axios.post(`https://api.onbbits.io/api/book-slot`, {
        date: dateStr,
        slot: selectedTime,
        client_email: email,
        description: description
      });

      if (res.data.status === "success" || res.data.message === "Slot booked successfully!") {
        toast.success(res.data.message || "Slot booked successfully!");
        setName("");
        setEmail("");
        setDescription("");
        setSelectedDate(null);
        setSelectedTime("");
        setAvailableSlots(null);
        setShowModal(false);
      } else {
        toast.error(res.data.message || "Failed to book slot");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Error booking demo");
    } finally {
      setIsBooking(false);
    }
  };

  const handleOpenModal = (e) => {
    e.preventDefault();
    if (!selectedDate) return toast.error("Please select a date first");
    if (!selectedTime) return toast.error("Please select a time slot");
    setShowModal(true);
  };

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };


  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Empty spaces before month starts
  const blankDays = Array(firstDayOfMonth).fill(null);
  const daysArray = [...Array(daysInMonth).keys()].map((d) => d + 1);



  // time slots are loaded from API now dynamically

  return (
    <>
      <PagesHero
        title="Book a Demo to see"
        highlightText="How Onbbits Powers"
        title2=""
        description="Get a personalized walkthrough of the Onbbits WhatsApp Business platform and see how it helps teams manage conversations, automate workflows, and close more leads."
        mainImg={heroImg1}
        demoLink="#demo-form" />

      <ProblemWeSolve />

      <IndustriesList />

      <WhatMakesOnbbitsDifferent />

      <section className="demo-form" id='demo-form'>
        <div className="demo-form-inner">
          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch with Onbbits
          </motion.h2>

          <motion.p
            className="section-sub"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            Ready to automate your WhatsApp conversations with Onbbits? Reach out to our team and let’s build smarter customer engagement together.
          </motion.p>

          {/* BOOKING CONTAINER (Removed form wrapping) */}
          <motion.div
            className="booking-wrapper"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            {/* BOTTOM */}
            <div className="booking-bottom">

              {/* CALENDAR */}
              <motion.div
                className="calendar"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >


                {/* HEADER */}
                <div className="calendar-header">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    className="month-btn"
                  >

                    ◀
                  </button>

                  <div>
                    {currentDate.toLocaleString("default", { month: "long" })}{" "}
                    {year}
                  </div>

                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className="month-btn"
                  >
                    ▶
                  </button>
                </div>

                {/* WEEK LABELS */}
                <div className="calendar-week">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="week-day">
                      {day}
                    </div>
                  ))}
                </div>

                {/* DAYS GRID */}
                <div className="calendar-grid">

                  {blankDays.map((_, i) => (
                    <div key={`blank-${i}`} />
                  ))}

                  {daysArray.map((day) => {
                    const fullDate = new Date(year, month, day);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);

                    const isPast = fullDate < today;


                    return (
                      <motion.div
                        key={day}
                        className={`calendar-day
    ${selectedDate &&
                            new Date(selectedDate).getDate() === day &&
                            new Date(selectedDate).getMonth() === month
                            ? "active"
                            : ""
                          }
    ${isPast ? "disabled" : ""}
  `}
                        onClick={() => !isPast && setSelectedDate(fullDate)}
                        whileHover={!isPast ? { scale: 1.08 } : {}}
                        whileTap={!isPast ? { scale: 0.95 } : {}}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {day}
                      </motion.div>

                    );
                  })}
                </div>

              </motion.div>


              {/* TIME SLOTS */}
              <motion.div
                className="time-slots"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >

                {selectedDate ? (
                  <>
                    <div className="slots-title">
                      Available Slots - {new Date(selectedDate).toDateString()}

                    </div>

                    {slotsLoading ? (
                      <div className="select-date-msg">Loading slots...</div>
                    ) : availableSlots && availableSlots.length === 0 ? (
                      <div className="select-date-msg">No slots available, please select a new date.</div>
                    ) : (
                      <motion.div
                        key={selectedDate}
                        className="slots-grid"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {(availableSlots || []).map((slot, i) => (
                          <motion.div
                            key={i}
                            className={`slot ${selectedTime === slot ? "active" : ""}`}
                            onClick={() => setSelectedTime(slot)}
                            whileTap={{ scale: 0.95 }}
                          >
                            {slot}
                          </motion.div>

                        ))}
                      </motion.div>
                    )}
                  </>
                ) : (
                  <div className="select-date-msg">
                    Select a date to see available time slots
                  </div>
                )}
              </motion.div>

            </div>
            <motion.button
              type="button"
              onClick={handleOpenModal}
              className="booking-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Book Demo
            </motion.button>
          </motion.div>

          {/* TRUST POINTS */}
          <motion.div
            className="demo-form-points"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {["No Commitment", "Free Walkthrough", "Takes 20–30 Minutes"].map(
              (text, i) => (
                <motion.span className="point" key={i} variants={fadeUp}>
                  <motion.span
                    className="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                  >
                    ✓
                  </motion.span>
                  {text}
                </motion.span>
              )
            )}
          </motion.div>
        </div>
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
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h2 className="section-heading" style={{ fontSize: "24px", marginBottom: "0", color: "#2d2d2d" }}>Complete Your Booking</h2>
                <button
                  className="close-btn"
                  onClick={() => setShowModal(false)}
                  type="button"
                  style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer", color: "#666" }}
                >
                  ✕
                </button>
              </div>

              <p className="section-sub" style={{ textAlign: "left", marginBottom: "20px", color: "#555" }}>
                You have selected <strong>{selectedTime}</strong> on <strong>{selectedDate && new Date(selectedDate).toDateString()}</strong>. Please provide your work email to confirm your slot.
              </p>

              <form className="modal-form" onSubmit={handleBookDemo}>
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ marginBottom: "15px", width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", color: "#333", backgroundColor: "#f9f9f9" }}
                />

                <textarea
                  name="description"
                  placeholder="Description (Optional)"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{ marginBottom: "20px", width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #ddd", fontFamily: "inherit", color: "#333", backgroundColor: "#f9f9f9" }}
                />

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isBooking}
                  style={{ width: "100%", padding: "14px", fontSize: "16px", borderRadius: "8px", background: "#00c365", color: "#fff", border: "none", cursor: "pointer", fontWeight: "600", transition: "background 0.3s" }}
                >
                  {isBooking ? "Booking..." : "Confirm Booking"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FaqIndividual
        heading="Demo FAQs — Booking an Onbbits WhatsApp Business Demo"
        subheading="Find answers to all your questions about scheduling, joining, and preparing for an Onbbits WhatsApp Business demo, so you know exactly what to expect and how to get the most out of it."
        faqs={supportAccountFaqs}
      />

    </>
  )
}

export default BookDemo;