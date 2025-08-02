import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Nabvar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/page/LandingPage";
import ContactForm from "./components/ContactUs/ContactUs";
// import ServicesPage from "./components/Services/ServicesPage";
import VendorDirectory from "./components/Vender/VendorDirectory";
import AboutUs from "./components/Aboutus/Aboutus";
import SamajCard from "./components/Samaj/SamajCard";
import VivahMahuratBanner from "./components/LandingPage/VivahMahuratBanner";
import CommunityDetail from "./components/Samaj/CommunityDetail";
import ServiceDetail from "./components/Services/ServiceDetail";
import ServicePages from "./components/Services/ServicePages";
import RitualList from "./components/Vivahrasme/RitualList";
import RitualDetails from "./components/Vivahrasme/RitualDetails";
import ScrollToTop from "./components/ScrollToTop";
import RasmePage from "./components/page/RasmePage";
import ServicesPage from "./components/page/ServicesPage";
import RistePage from "./components/page/RistePage";
import PrivacyPolicy from "./components/Privacy/PrivacyPolicy";
import WeddingVendorDirectory from "./components/Vender/WeddingVendorDirectory";
import LoginForm from "./components/Registration/LoginForm";
import VivahRegistrationForm from "./components/Registration/VivahRegistrationForm";
import GetAllMembers from "./components/Admin/GetAllMembers";
import RegistrationForm from "./components/Registration/RegistrationForm";

function App() {
  return (
   <div>
    {/* <VivahMahuratBanner/> */}
    
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/contactus" element={<ContactForm/>} />
        {/* <Route path="/services" element={<ServicesPage/>} /> */}
        
        <Route path="/vendor" element={<VendorDirectory/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/samaj" element={<SamajCard/>} />
        <Route path="/community/:id" element={<CommunityDetail/>} />
        
        <Route path="/servicepage" element={<ServicePages/>} />
        <Route path="/service/:slug" element={<ServiceDetail/>} />
        <Route path="/servicespage" element={<ServicesPage/>} />

        <Route path="/rasme" element={<RitualList/>} />
        <Route path="/rituals/:id" element={<RitualDetails/>} />
        <Route path="/rasmepage" element={<RasmePage/>} />
        <Route path="/rishtey" element={<RistePage/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/vender" element={<WeddingVendorDirectory/>} />
        <Route path="/vivahregistration" element={<VivahRegistrationForm/>} />
        <Route path="/registration" element={<RegistrationForm/>} />
        
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/allmembers" element={<GetAllMembers/>} />
     
     
      </Routes>

      
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
