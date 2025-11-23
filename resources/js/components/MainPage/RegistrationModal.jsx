import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';

const RegistrationModal = ({ 
  regForm, 
  regFormErrors, 
  handleRegFormChange, 
  handleRegFormSubmit, 
  validateRegForm,
  dobInputRef 
}) => {
  useEffect(() => {
    if (dobInputRef.current) {
      const fp = flatpickr(dobInputRef.current, {
        maxDate: 'today',
        dateFormat: 'Y-m-d',
        defaultDate: regForm.dob || null,
        onChange: (selectedDates, dateStr) => {
          handleRegFormChange({ target: { name: 'dob', value: dateStr } });
        },
        onReady: () => console.log('Flatpickr initialized'),
        onError: (error) => console.error('Flatpickr error:', error),
      });
      return () => fp.destroy();
    }
  }, [ dobInputRef]);

  return (
    <div className="modal fade" id="registrationModal" tabIndex="-1" aria-labelledby="registrationModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="registrationModalLabel">Registration Form</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleRegFormSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Applicant Name</label>
                  <input
                    type="text"
                    className={`form-control ${regFormErrors.applicant_name ? 'is-invalid' : ''}`}
                    placeholder="Enter Name"
                    name="applicant_name"
                    value={regForm.applicant_name}
                    onChange={handleRegFormChange}
                    required
                  />
                  {regFormErrors.applicant_name && <div className="invalid-feedback">{regFormErrors.applicant_name}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Father's Name/Husband Name</label>
                  <input
                    type="text"
                    className={`form-control ${regFormErrors.father_or_husband_name ? 'is-invalid' : ''}`}
                    placeholder="Father's Name/Husband Name"
                    name="father_or_husband_name"
                    value={regForm.father_or_husband_name}
                    onChange={handleRegFormChange}
                    required
                  />
                  {regFormErrors.father_or_husband_name && <div className="invalid-feedback">{regFormErrors.father_or_husband_name}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Date of Birth</label>
                  <input
                    type="text"
                    id="dobInput"
                    className={`form-control ${regFormErrors.dob ? 'is-invalid' : ''}`}
                    name="dob"
                    value={regForm.dob}
                    onChange={handleRegFormChange}
                    ref={dobInputRef}
                    placeholder="YYYY-MM-DD"
                    required
                    aria-label="Date of Birth"
                    aria-describedby="dobError"
                  />
                  {regFormErrors.dob && <div id="dobError" className="invalid-feedback">{regFormErrors.dob}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className={`form-control ${regFormErrors.phone ? 'is-invalid' : ''}`}
                    placeholder="98xxxxxxxx"
                    name="phone"
                    value={regForm.phone}
                    onChange={handleRegFormChange}
                    pattern="[0-9]{10}"
                    required
                  />
                  {regFormErrors.phone && <div className="invalid-feedback">{regFormErrors.phone}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className={`form-control ${regFormErrors.email ? 'is-invalid' : ''}`}
                    placeholder="example@example.com"
                    name="email"
                    value={regForm.email}
                    onChange={handleRegFormChange}
                    required
                  />
                  {regFormErrors.email && <div className="invalid-feedback">{regFormErrors.email}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Aadhaar Card Number (Optional)</label>
                  <input
                    type="text"
                    className={`form-control ${regFormErrors.aadhaar ? 'is-invalid' : ''}`}
                    placeholder="xxxx-xxxx-xxxx"
                    name="aadhaar"
                    value={regForm.aadhaar}
                    onChange={handleRegFormChange}
                  />
                  {regFormErrors.aadhaar && <div className="invalid-feedback">{regFormErrors.aadhaar}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">PAN Card Number</label>
                  <input
                    type="text"
                    className={`form-control ${regFormErrors.pan ? 'is-invalid' : ''}`}
                    placeholder="e.g. ABCDE1234F"
                    name="pan"
                    value={regForm.pan}
                    onChange={handleRegFormChange}
                    pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                    required
                  />
                  {regFormErrors.pan && <div className="invalid-feedback">{regFormErrors.pan}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className={`form-control ${regFormErrors.address ? 'is-invalid' : ''}`}
                    placeholder="Address"
                    name="address"
                    value={regForm.address}
                    onChange={handleRegFormChange}
                    required
                  />
                  {regFormErrors.address && <div className="invalid-feedback">{regFormErrors.address}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className={`form-control ${regFormErrors.city ? 'is-invalid' : ''}`}
                    placeholder="City"
                    name="city"
                    value={regForm.city}
                    onChange={handleRegFormChange}
                    required
                  />
                  {regFormErrors.city && <div className="invalid-feedback">{regFormErrors.city}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Pincode</label>
                  <input
                    type="text"
                    className={`form-control ${regFormErrors.pincode ? 'is-invalid' : ''}`}
                    placeholder="Pincode"
                    name="pincode"
                    value={regForm.pincode}
                    onChange={handleRegFormChange}
                    pattern="[0-9]{6}"
                    required
                  />
                  {regFormErrors.pincode && <div className="invalid-feedback">{regFormErrors.pincode}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    className={`form-control ${regFormErrors.state ? 'is-invalid' : ''}`}
                    placeholder="State"
                    name="state"
                    value={regForm.state}
                    onChange={handleRegFormChange}
                    required
                  />
                  {regFormErrors.state && <div className="invalid-feedback">{regFormErrors.state}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Quota</label>
                  <select
                    className={`form-control ${regFormErrors.quota ? 'is-invalid' : ''}`}
                    name="quota"
                    value={regForm.quota}
                    onChange={handleRegFormChange}
                    required
                  >
                    <option value="" disabled>Select Quota</option>
                    <option value="Management Quota">Management Quota</option>
                  </select>
                  {regFormErrors.quota && <div className="invalid-feedback">{regFormErrors.quota}</div>}
                </div>
                <div className="col-md-12">
                  <label className="form-label">Select Size</label>
                  <select
                    className={`form-control ${regFormErrors.size ? 'is-invalid' : ''}`}
                    name="size"
                    value={regForm.size}
                    onChange={handleRegFormChange}
                    required
                  >
                    <option value="" disabled>Select Size</option>
                    <option value="143.42 @ 65000">143.42 @ 65000</option>
                    <option value="157.12 @ 65000">157.12 @ 65000</option>
                    <option value="159.76 @ 65000">159.76 @ 65000</option>
                    <option value="162.43 @ 65000">162.43 @ 65000</option>
                    <option value="172.27 @ 65000">172.27 @ 65000</option>
                    <option value="179.39 @ 65000">179.39 @ 65000</option>
                  </select>
                  {regFormErrors.size && <div className="invalid-feedback">{regFormErrors.size}</div>}
                </div>
                <div className="col-md-12 pt-3">
                  <label className="form-label">RM Code</label>
                  <span style={{ color: 'red', fontSize: '10px' }}>(RM Code is Mandatory)</span>
                  <input
                    type="text"
                    className={`form-control ${regFormErrors.rmcode ? 'is-invalid' : ''}`}
                    placeholder="RM Code"
                    name="rmcode"
                    value={regForm.rmcode}
                    onChange={handleRegFormChange}
                    required
                  />
                  {regFormErrors.rmcode && <div className="invalid-feedback">{regFormErrors.rmcode}</div>}
                </div>
                <div className="form-check mt-4">
                  <input
                    className={`form-check-input ${regFormErrors.terms ? 'is-invalid' : ''}`}
                    type="checkbox"
                    id="termsCheck"
                    name="terms"
                    checked={regForm.terms}
                    onChange={handleRegFormChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="termsCheck">
                    By clicking checkbox, you agree to the <a href="terms.php" target="_blank">Terms and Conditions</a> set out by this site.
                  </label>
                  {regFormErrors.terms && <div className="invalid-feedback">{regFormErrors.terms}</div>}
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit & Pay</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;