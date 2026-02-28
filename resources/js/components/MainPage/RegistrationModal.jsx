import React, { useEffect } from "react";
import flatpickr from "flatpickr";

const RegistrationModal = ({
  regForm,
  regFormErrors,
  handleRegFormChange,
  handleRegFormSubmit,
  dobInputRef,
}) => {

  useEffect(() => {
    if (dobInputRef.current) {
      const fp = flatpickr(dobInputRef.current, {
        maxDate: "today",
        dateFormat: "Y-m-d",
        defaultDate: regForm.dob || null,
        onChange: (selectedDates, dateStr) => {
          handleRegFormChange({ target: { name: "dob", value: dateStr } });
        },
      });

      return () => fp.destroy();
    }
  }, [dobInputRef]);

  return (
    <div className="modal fade" id="registrationModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Registration Form</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleRegFormSubmit}>
              <div className="row g-3">

                {/* Applicant Name */}
                <div className="col-md-6">
                  <label className="form-label">Applicant Name</label>
                  <input
                    type="text"
                    name="applicant_name"
                    placeholder="Enter Name"
                    className={`form-control ${regFormErrors.applicant_name ? "is-invalid" : ""}`}
                    value={regForm.applicant_name}
                    onChange={handleRegFormChange}
                    required
                  />
                </div>

                {/* Father/Husband Name */}
                <div className="col-md-6">
                  <label className="form-label">Father's/Husband's Name</label>
                  <input
                    type="text"
                    name="father_or_husband_name"
                    placeholder="Father/Husband Name"
                    className={`form-control ${regFormErrors.father_or_husband_name ? "is-invalid" : ""}`}
                    value={regForm.father_or_husband_name}
                    onChange={handleRegFormChange}
                    required
                  />
                </div>

                {/* Date of Birth */}
                <div className="col-md-6">
                  <label className="form-label">Date of Birth</label>
                  <input
                    type="text"
                    name="dob"
                    placeholder="YYYY-MM-DD"
                    ref={dobInputRef}
                    value={regForm.dob}
                    onChange={handleRegFormChange}
                    className={`form-control ${regFormErrors.dob ? "is-invalid" : ""}`}
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="98xxxxxxxx"
                    pattern="[0-9]{10}"
                    className={`form-control ${regFormErrors.phone ? "is-invalid" : ""}`}
                    value={regForm.phone}
                    onChange={handleRegFormChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@example.com"
                    className={`form-control ${regFormErrors.email ? "is-invalid" : ""}`}
                    value={regForm.email}
                    onChange={handleRegFormChange}
                    required
                  />
                </div>

                {/* Aadhaar */}
                <div className="col-md-6">
                  <label className="form-label">Aadhaar Card Number</label>
                  <input
                    type="text"
                    name="aadhaar"
                    placeholder="xxxx xxxx xxxx"
                    pattern="[0-9]{12}"
                    className={`form-control ${regFormErrors.aadhaar ? "is-invalid" : ""}`}
                    value={regForm.aadhaar}
                    onChange={handleRegFormChange}
                    required
                  />
                </div>

                {/* PAN */}
                <div className="col-md-6">
                  <label className="form-label">PAN Card Number</label>
                  <input
                    type="text"
                    name="pan"
                    placeholder="ABCDE1234F"
                    pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                    className={`form-control ${regFormErrors.pan ? "is-invalid" : ""}`}
                    value={regForm.pan}
                    onChange={handleRegFormChange}
                    required
                  />
                </div>

                {/* Address */}
                <div className="col-md-6">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    className={`form-control ${regFormErrors.address ? "is-invalid" : ""}`}
                    value={regForm.address}
                    onChange={handleRegFormChange}
                    required
                  />
                </div>

                {/* City */}
                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="city"
                    className={`form-control ${regFormErrors.city ? "is-invalid" : ""}`}
                    value={regForm.city}
                    onChange={handleRegFormChange}
                    required
                  />
                </div>

                {/* Pincode */}
                <div className="col-md-6">
                  <label className="form-label">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    pattern="[0-9]{6}"
                    className={`form-control ${regFormErrors.pincode ? "is-invalid" : ""}`}
                    value={regForm.pincode}
                    onChange={handleRegFormChange}
                    required
                  />
                </div>

                {/* State */}
                <div className="col-md-6">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    name="state"
                    className={`form-control ${regFormErrors.state ? "is-invalid" : ""}`}
                    value={regForm.state}
                    onChange={handleRegFormChange}
                    required
                  />
                </div>

                {/* Quota */}
                <div className="col-md-6">
                  <label className="form-label">Quota</label>
                  <select
                    name="quota"
                    className={`form-control ${regFormErrors.quota ? "is-invalid" : ""}`}
                    value={regForm.quota}
                    onChange={handleRegFormChange}
                    required
                  >
                    <option value="">Select Quota</option>
                    <option value="Female Applicant">
                      Female Applicant (₹1500/Sq.Yd. Discount)
                    </option>
                    <option value="Govt Employee Applicant" >
                      Govt Employee Applicant (₹1500/Sq.Yd. Discount)
                    </option>
                    <option value="General Applicant" >
                      General Applicant
                    </option>
                  </select>

                </div>

                {/* Size */}
                <div className="col-md-12">
                  <label className="form-label">Select Size</label>
                  <select
                    name="size"
                    className={`form-control ${regFormErrors.size ? "is-invalid" : ""}`}
                    value={regForm.size}
                    onChange={handleRegFormChange}
                    required
                  >
                    <option value="">Select Size</option>
                    <option value="145.697 @ 85000">145.697 @ 85000</option>
                    <option value="148.245 @ 85000">148 @ 85000</option>
                    <option value="158.159 @ 85000">158.159 @ 85000</option>
                    <option value="162.077 @ 85000">162.077 @ 85000</option>
                    <option value="167.233 @ 85000">167.233 @ 85000</option>
                    <option value="179.395 @ 85000">179.395 @ 85000</option>
                  </select>
                </div>

                {/* RM Code */}
                <div className="col-md-12 pt-3">
                  <label className="form-label">RM Code</label>
                  <input
                    type="text"
                    name="rmcode"
                    placeholder="RM Code"
                    className={`form-control ${regFormErrors.rmcode ? "is-invalid" : ""}`}
                    value={regForm.rmcode}
                    onChange={handleRegFormChange}
                    required
                  />
                </div>

                {/* Terms */}
                <div className="form-check mt-4">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={regForm.terms}
                    className={`form-check-input ${regFormErrors.terms ? "is-invalid" : ""}`}
                    onChange={handleRegFormChange}
                    required
                  />
                  <label className="form-check-label text-[12px] leading-tight text-gray-600">
                    I agree to the Terms & Conditions, <a href="/privacy" target="_blank" className="font-semibold text-primary">Privacy Policy</a>, <a href="/refund-policy" target="_blank" className="font-semibold text-primary">Refund Policy</a>, and <a href="/disclaimer" target="_blank" className="font-semibold text-primary">Disclaimer</a>, and I authorize the company to contact me via call, SMS, WhatsApp, or email regarding this project.
                  </label>
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                  Submit & Pay
                </button>
                <p className="text-gray-500 text-[10px] mt-2 text-center">
                  <a href="/disclaimer" target="_blank" className="underline hover:text-blue-600">Refer Disclaimer</a>
                </p>

              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
