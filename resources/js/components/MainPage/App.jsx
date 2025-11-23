import React, { useEffect, useState, useRef } from 'react';
import { Inertia } from '@inertiajs/inertia';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'flatpickr/dist/flatpickr.min.css';
import * as bootstrap from 'bootstrap';
import axios from 'axios';
import SiteMap from './Site-Map'
import Header from './Header';
import BannerSection from './BannerSection';
import RegistrationModal from './RegistrationModal';
import FeaturesSection from './FeaturesSection';
import RegistrationBanner from './RegistrationsBanner';
import ProjectIntro from './ProjectIntro';
import ApprovedBanks from './ApprovedBanks';
import ProjectHighlights from './ProjectHighlights';
import PriceList from './PriceList';
import LocationAdvantages from './LocationAdvantages';
import GalleryComponent from './Gallery';
import AboutDDJAY from './About-DDJAY';
import Footer from './Footer';

const App = ({ flash }) => {
  const [countdown, setCountdown] = useState({
    days: '00', hours: '00', minutes: '00', seconds: '00',
  });
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showFlash, setShowFlash] = useState(false);

  const [regForm, setRegForm] = useState({
    applicant_name: '',
    father_or_husband_name: '',
    dob: '',
    phone: '',
    email: '',
    aadhaar: '',
    pan: '',
    address: '',
    city: '',
    pincode: '',
    state: '',
    quota: '',
    size: '',
    rmcode: '',
    terms: false,
  });

  const [regFormErrors, setRegFormErrors] = useState({});
  const dobInputRef = useRef(null);

  // Open Registration Modal Function
  const openRegistrationModal = () => {
    const modalElement = document.getElementById('registrationModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  };

  // Flash message handling
  useEffect(() => {
    if (flash && flash.message) {
      setShowFlash(true);
      const timer = setTimeout(() => setShowFlash(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [flash]);

  // Countdown Timer
  useEffect(() => {
    const endTime = Date.parse('October 12, 2025 18:00:00 PDT') / 1000;
    const updateTimer = () => {
      const now = Date.now() / 1000;
      const timeLeft = endTime - now;

      if (timeLeft <= 0) {
        setCountdown({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(timeLeft / 86400);
      const hours = Math.floor((timeLeft % 86400) / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      const seconds = Math.floor(timeLeft % 60);

      setCountdown({
        days: days < 10 ? `0${days}` : days,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fancybox
  useEffect(() => {
    import('@fancyapps/ui').then(({ Fancybox }) => {
      Fancybox.bind('[data-fancybox]', {});
    }).catch(err => console.error('Fancybox load error:', err));
  }, []);

  const toggleNav = () => setIsNavOpen(prev => !prev);

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsNavOpen(false);
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const validateRegForm = () => {
    const errors = {};
    if (!regForm.applicant_name) errors.applicant_name = 'Applicant Name is required';
    if (!regForm.father_or_husband_name) errors.father_or_husband_name = 'Father/Husband Name is required';
    if (!regForm.dob) errors.dob = 'Date of Birth is required';
    if (!regForm.phone || !/^[0-9]{10}$/.test(regForm.phone)) errors.phone = 'Valid 10-digit phone required';
    if (!regForm.email || !/\S+@\S+\.\S+/.test(regForm.email)) errors.email = 'Valid email required';
    if (regForm.aadhaar && !/^[0-9]{12}$/.test(regForm.aadhaar)) errors.aadhaar = 'Valid 12-digit Aadhaar required';
    if (!regForm.pan || !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(regForm.pan)) errors.pan = 'Valid PAN required';
    if (!regForm.address) errors.address = 'Address is required';
    if (!regForm.city) errors.city = 'City is required';
    if (!regForm.pincode || !/^[0-9]{6}$/.test(regForm.pincode)) errors.pincode = 'Valid 6-digit pincode required';
    if (!regForm.state) errors.state = 'State is required';
    if (!regForm.quota) errors.quota = 'Quota is required';
    if (!regForm.size) errors.size = 'Size selection is required';
    if (!regForm.rmcode) errors.rmcode = 'RM Code is required';
    if (!regForm.terms) errors.terms = 'You must agree to Terms & Conditions';
    return errors;
  };

  const handleRegFormChange = (e) => {
    const { name, value, type, checked } = e.target || e;
    setRegForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (regFormErrors[name]) {
      setRegFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRegFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateRegForm();
    if (Object.keys(errors).length > 0) {
      setRegFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post('/api/register', regForm);
      if (response.data.success && response.data.payment_url) {
        const modal = bootstrap.Modal.getInstance(document.getElementById('registrationModal'));
        modal.hide();
        setRegForm({
          applicant_name: '', father_or_husband_name: '', dob: '', phone: '', email: '',
          aadhaar: '', pan: '', address: '', city: '', pincode: '', state: '',
          quota: '', size: '', rmcode: '', terms: false,
        });
        setRegFormErrors({});
        window.location.href = response.data.payment_url;
      }
    } catch (error) {
      console.error(error);
      if (error.response?.data?.errors) {
        setRegFormErrors(error.response.data.errors);
      } else {
        alert('Registration failed. Please try again.');
      }
    }
  };

  return (
    <>
      {/* Flash Message */}
      {showFlash && flash?.message && (
        <div className="alert alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3" style={{ zIndex: 9999 }} role="alert">
          <strong>{flash.success ? 'Success' : 'Error'}:</strong> {flash.message}
          <button type="button" className="btn-close" onClick={() => setShowFlash(false)}></button>
        </div>
      )}

      <Header
        isNavOpen={isNavOpen}
        toggleNav={toggleNav}
        handleNavLinkClick={handleNavLinkClick}
        openRegistrationModal={openRegistrationModal}   
      />

      <div className="">
        <BannerSection openRegistrationModal={openRegistrationModal} />
        <FeaturesSection />
        <ProjectIntro />
        <ApprovedBanks />
        <RegistrationBanner  openRegistrationModal={openRegistrationModal}  />
        <GalleryComponent />
        <ProjectHighlights />
        <SiteMap/>
        <PriceList/>
        <LocationAdvantages/>
        <AboutDDJAY/>
        <Footer/>
      </div>

      {/* Registration Modal */}
      <RegistrationModal
        regForm={regForm}
        regFormErrors={regFormErrors}
        handleRegFormChange={handleRegFormChange}
        handleRegFormSubmit={handleRegFormSubmit}
        validateRegForm={validateRegForm}
        dobInputRef={dobInputRef}
      />
    </>
  );
};

export default App;