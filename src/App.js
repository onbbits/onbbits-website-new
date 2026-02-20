import './App.css';
import './MediaQueries.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import Cta from './Components/Cta';
import Footer from './Components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Faqs from './Pages/Faqs';
import Solutions from './Pages/Solutions';
import PricingPlan from './Pages/PricingPlan';
import BookDemo from './Pages/BookDemo';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/TermsConditions';
import CancellationRefund from './Pages/CancellationRefund';
import NotFound from './Pages/NotFound';
import WhatsAppButton from './Components/WhatsappButton';
import Features from './Pages/Features';


function App() {
  return (
   <>
     <Toaster position="top-right" 
     containerStyle={{
          zIndex: 999999,
        
  }}/>
    <BrowserRouter>
     <ScrollToTop />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us/" element={<About/>} />
        <Route path="/contact-us/" element={<Contact/>} />
        <Route path="/faqs" element={<Faqs/>} />
        <Route path="/solutions" element={<Solutions/>} />
        <Route path="/pricing-plans" element={<PricingPlan/>} />
        <Route path="/book-a-demo" element={<BookDemo/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-conditions" element={<TermsConditions/>} />
        <Route path="/cancellation-refund-policy" element={<CancellationRefund/>} />
         <Route path="/features" element={<Features/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      <Cta />
      <Footer />
      <WhatsAppButton />
      </BrowserRouter>
   </>
  );
}

export default App;
/**features,recaptcha,book a demo,cookie notice,form text-area */