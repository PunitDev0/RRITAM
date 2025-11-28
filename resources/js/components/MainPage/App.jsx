import React, { useEffect, useState, useRef } from 'react';
import { Inertia } from '@inertiajs/inertia';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'flatpickr/dist/flatpickr.min.css';
import * as bootstrap from 'bootstrap';
import axios from 'axios';

import SiteMap from './Site-Map';
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
  const [countdown, setCountdown] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showFlash, setShowFlash] = useState(false);

  // Registration Form
  const [regForm, setRegForm] = useState({
    applicant_name: '', father_or_husband_name: '', dob: '', phone: '', email: '',
    aadhaar: '', pan: '', address: '', city: '', pincode: '', state: '',
    quota: '', size: '', rmcode: '', terms: false,
  });
  const [regFormErrors, setRegFormErrors] = useState({});
  const dobInputRef = useRef(null);

  // Quick Enquiry Popup
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({ name: '', email: '', phone: '' });
  const [enquiryErrors, setEnquiryErrors] = useState({});
  const [enquirySubmitting, setEnquirySubmitting] = useState(false);
  const toastRef = useRef(null);

  // Open Registration Modal
  const openRegistrationModal = () => {
    const modalElement = document.getElementById('registrationModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  };

  // Auto-open enquiry popup (only once per session)
  useEffect(() => {
      const timer = setTimeout(() => {
        setShowEnquiryPopup(true);
        sessionStorage.setItem('enquiryPopupSeen', 'true');
      }, 1500);
      return () => clearTimeout(timer);
  }, []);

  // Initialize Toast
  useEffect(() => {
    if (toastRef.current) {
      new bootstrap.Toast(toastRef.current).show();
    }
  }, [showFlash]);

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

  // Registration Form (unchanged)
  const validateRegForm = () => { /* ... your existing validation ... */ };
  const handleRegFormChange = (e) => { /* ... */ };
  const handleRegFormSubmit = async (e) => { /* ... */ };

  // Quick Enquiry Validation & Submit
  const validateEnquiry = () => {
    const err = {};
    if (!enquiryForm.name.trim()) err.name = 'Name is required';
    if (!enquiryForm.phone.match(/^[6-9]\d{9}$/)) err.phone = 'Valid 10-digit mobile required';
    if (enquiryForm.email && !/\S+@\S+\.\S+/.test(enquiryForm.email)) err.email = 'Invalid email';
    return err;
  };

  const handleEnquiryChange = (e) => {
    const { name, value } = e.target;
    setEnquiryForm(prev => ({ ...prev, [name]: value }));
    if (enquiryErrors[name]) setEnquiryErrors(prev => ({ ...prev, [name]: '' }));
  };

  const showToast = (message, isSuccess = true) => {
    const toastEl = document.getElementById('enquiryToast');
    const toastBody = toastEl.querySelector('.toast-body');
    toastBody.textContent = message;
    toastEl.classList.remove('text-bg-success', 'text-bg-danger');
    toastEl.classList.add(isSuccess ? 'text-bg-success' : 'text-bg-danger');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    const errors = validateEnquiry();
    if (Object.keys(errors).length > 0) {
      setEnquiryErrors(errors);
      return;
    }

    setEnquirySubmitting(true);
    try {
      await axios.post('/enquiry', enquiryForm);

      showToast('Thank you! We will contact you shortly.', true);
      setEnquiryForm({ name: '', email: '', phone: '' });
      setEnquiryErrors({});
      setShowEnquiryPopup(false);
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to submit. Please try again.';
      showToast(msg, false);
    } finally {
      setEnquirySubmitting(false);
    }
  };

  return (
    <>
      {/* Inertia Flash Message */}
      {showFlash && flash?.message && (
        <div className="alert alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3" style={{ zIndex: 9999 }} role="alert">
          <strong>{flash.success ? 'Success' : 'Error'}:</strong> {flash.message}
          <button type="button" className="btn-close" onClick={() => setShowFlash(false)}></button>
        </div>
      )}

      {/* Toast Notification for Enquiry */}
      <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 9999 }}>
        <div id="enquiryToast" className="toast align-items-center text-white border-0" role="alert">
          <div className="d-flex">
            <div className="toast-body fw-bold"></div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
          </div>
        </div>
      </div>

      <Header isNavOpen={isNavOpen} toggleNav={toggleNav} handleNavLinkClick={handleNavLinkClick} openRegistrationModal={openRegistrationModal} />

      <div>
        <BannerSection openRegistrationModal={openRegistrationModal} />
        <FeaturesSection />
        <ProjectIntro />
        <ApprovedBanks />
        <RegistrationBanner openRegistrationModal={openRegistrationModal} />
        <GalleryComponent />
        <ProjectHighlights />
        <SiteMap />
        <PriceList />
        <LocationAdvantages />
        <AboutDDJAY />
        <Footer />
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

      {/* Enquiry Popup */}
      {showEnquiryPopup && (
        <div className="position-fixed inset-0 d-flex align-items-center justify-content-center" style={{ zIndex: 9999, background: 'rgba(0,0,0,0.7)' }} onClick={() => setShowEnquiryPopup(false)}>
          <div className="bg-white shadow-lg p-4 mx-3" style={{ maxWidth: '440px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0 text-primary fw-bold">Quick Enquiry</h4>
              <button className="btn-close" onClick={() => setShowEnquiryPopup(false)}></button>
            </div>
            {/* <p className="text-muted small mb-4">Get a call back in 5 minutes!</p> */}
            <form onSubmit={handleEnquirySubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  value={enquiryForm.name}
                  onChange={handleEnquiryChange}
                  className={`form-control ${enquiryErrors.name ? 'is-invalid' : ''}`}
                  placeholder="Your Name *"
                />
                {enquiryErrors.name && <div className="invalid-feedback">{enquiryErrors.name}</div>}
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  name="phone"
                  value={enquiryForm.phone}
                  onChange={handleEnquiryChange}
                  className={`form-control ${enquiryErrors.phone ? 'is-invalid' : ''}`}
                  placeholder="Mobile Number *"
                  maxLength="10"
                />
                {enquiryErrors.phone && <div className="invalid-feedback">{enquiryErrors.phone}</div>}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={enquiryForm.email}
                  onChange={handleEnquiryChange}
                  className={`form-control ${enquiryErrors.email ? 'is-invalid' : ''}`}
                  placeholder="Email (Optional)"
                />
                {enquiryErrors.email && <div className="invalid-feedback">{enquiryErrors.email}</div>}
              </div>
              <button
                type="submit"
                disabled={enquirySubmitting}
                className="btn btn-primary w-100 fw-bold py-3"
                style={{ backgroundColor: '#2563eb', border: 'none' }}
              >
                {enquirySubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Enquiry Button */}
      <button
        onClick={() => setShowEnquiryPopup(true)}
        className="btn btn-primary rounded-circle shadow-lg position-fixed d-flex align-items-center justify-content-center"
        style={{ bottom: '20px', right: '20px', zIndex: 998, width: '60px', height: '60px', fontSize: '24px', backgroundColor: '#2563eb' }}
        title="Quick Enquiry"
      >
        <i className="fas fa-phone-alt text-white"></i>
      </button>
    </>
  );
};

export default App;