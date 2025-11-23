import React from 'react';

const MainContent = ({ 
  enqForm, 
  handleEnqFormChange, 
  handleEnqFormSubmit, 
  handleNavLinkClick 
}) => {
  return (
    <>
      <section className="elite-homes-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="md:flex md:justify-center blue-bg-box">
                <div className="w-full h-full md:w-1/2 md:h-1/2 place-items-center">
                  <div className="bg-blue-100 p-4 mt-4 rounded text-center text-black">
                    <h2 className="text-2xl font-bold">Elite Homes + O2 Home | Most Affordable Plots in Sonipat</h2>
                    <p>Under Deen Dayal Jan Awas Yojna at Sector-24 Haryana</p>
                    <p className="mt-4 font-bold">EOI REGISTRATION AMOUNT</p>
                    <p className="text-3xl font-bold text-blue-600">₹ 31,000 /-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="amenities-bank" id="amenities-bank" style={{ background: '#f7f7f7' }}>
        <h2 className="cons-heading pb-2 text-center font-sans">The Project has been Approved By</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-4">
              <div className="bank_logo">
                <img src="images/bobbank.png" alt="Bank of Baroda" />
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <div className="bank_logo">
                <img src="images/icicibank.png" alt="ICICI Bank" />
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-4">
              <div className="bank_logo">
                <img src="images/unionbank.png" style={{ height: '100px', width: '80%' }} alt="Union Bank" />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center pt-4">Plot owners can avail loans from these banks for financing purposes.</p>
      </div>

      <section className="pd-30 top-details">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <div className="status-strip">
                <h4>Project Area</h4>
                <p>9.98177 acres</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="status-strip">
                <h4>Project Units</h4>
                <p>181 units</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="status-strip">
                <h4>Gated</h4>
                <p>Society</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="status-strip">
                <h4>Freehold</h4>
                <p>Plot</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="status-strip">
                <h4>HRERA-PKL-SNP-</h4>
                <p>548-2024</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="status-strip">
                <h4>Plots Size</h4>
                <p>143.42 - 179.39 sq.ft.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-success text-white p-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <h2 className="h4 h2-md mb-3">Deen Dayal Jan Awas Yojana Affordable Residential Plots</h2>
              <a href="#" className="btn btn-danger px-4 py-2 fw-bold" data-bs-toggle="modal" data-bs-target="#registrationModal">
                EOI Registration Open
              </a>
            </div>
            <div className="col-md-6 text-center">
              <img src="images/rera-logo.png" alt="DDJAY Image" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="amenities-highlights" id="amenities-highlights">
        <h2 className="cons-heading pb-5 text-center font-sans">Deen Dayal Jan Awas Yojana Highlights</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="amenities-listing">
                <ul className="list-disc list-inside">
                  <li>Freehold Plots</li>
                  <li>RERA Registered (HRERA-PKL-SNP-548-2024)</li>
                  <li>Gated Society with boundary walls</li>
                  <li>Possession Offered</li>
                  <li>Sports Facilities like Basketball Court, Badminton Court, Cricket Net Pitch, Skating Rink and much more</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="amenities-listing">
                <ul className="list-disc list-inside">
                  <li>Gated Society with CCTV Surveillance</li>
                  <li>Gas pipeline connectivity in every plot</li>
                  <li>Entrance from 30 meter wide main road</li>
                  <li>Roadside Shopping complex and Restaurant</li>
                  <li>Temple, Community Area, Kids playing zone</li>
                  <li>Several Families Living</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="amenities-pricing" id="amenities-pricing">
        <h2 className="cons-heading pb-2 text-center font-sans">Price List</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="amenities-listing table-responsive">
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th className="main-th">UNIT SIZE(Sq.yd)</th>
                      <th className="main-th">UNIT PRICE(in Rs. Per Sq.yd.)</th>
                      <th className="main-th">Total Cost*</th>
                      <th className="main-th">EOI Registration Amount</th>
                      <th className="main-th">10% On Allotment</th>
                      <th className="main-th">40% within 30 days of Allotment or at the time of BBA Execution</th>
                      <th className="main-th">25% within 90 days of Allotment</th>
                      <th className="main-th">25% at the time of Possession</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>143.42</td><td>65000</td><td>9322300</td><td>31000</td><td>901230</td><td>3728920</td><td>2330575</td><td>2330575</td>
                    </tr>
                    <tr>
                      <td>157.12</td><td>65000</td><td>10212800</td><td>31000</td><td>990280</td><td>4085120</td><td>2553200</td><td>2553200</td>
                    </tr>
                    <tr>
                      <td>159.76</td><td>65000</td><td>10384400</td><td>31000</td><td>1007440</td><td>4153760</td><td>2596100</td><td>2596100</td>
                    </tr>
                    <tr>
                      <td>162.43</td><td>65000</td><td>10557950</td><td>31000</td><td>1024795</td><td>4223180</td><td>2639487.5</td><td>2639487.5</td>
                    </tr>
                    <tr>
                      <td>167.43</td><td>65000</td><td>10882950</td><td>31000</td><td>1057295</td><td>4353180</td><td>2720737.5</td><td>2720737.5</td>
                    </tr>
                    <tr>
                      <td>172.27</td><td>65000</td><td>11197550</td><td>31000</td><td>1088755</td><td>4479020</td><td>2799387.5</td><td>2799387.5</td>
                    </tr>
                    <tr>
                      <td>179.39</td><td>65000</td><td>11660350</td><td>31000</td><td>1135035</td><td>4664140</td><td>2915087.5</td><td>2915087.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-4 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <p className="bnk-details d-flex justify-content-center mb-4">Site Plan</p>
                <div className="abt-image">
                  <img src="images/layout.png" className="w-100" alt="Site Plan" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <p className="bnk-details d-flex justify-content-center mb-4">Layout Plan</p>
                <div className="abt-image">
                  <img src="images/ma.jpg" className="w-100" alt="Layout Plan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="amenities-overview" id="amenities-overview">
        <h2 className="cons-heading pb-5 text-center font-sans">Deen Dayal Jan Awas Yojna Plots Overview</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="amenities-listing">
                <p>
                  Elite Homes + O2 Home is a project under Deen Dayal Jan Awas Yojna, spread over 10 acres and surrounded by a lush green, peaceful environment. Located on Kakroi Road, Sonipat, Sector 24, the Elite Homes + O2 Home project has unique specifications. For the first time in the history of DDJAY Plots, we offer a Club House provision at our site, creating a cheerful and conversational ambiance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pd-30 gallery" id="gallery">
        <div className="container">
          <div className="text-center">
            <h2 className="cons-heading font-sans">Gallery</h2>
          </div>
          <div className="row">
            {[
              'fieldImage3.webp',
              'fieldImage5.webp',
              'fieldImage4.webp',
              'fieldImage7.webp',
              'fieldImage15.webp',
              'fieldImage8.webp',
              'fieldImage9.webp',
              'fieldImage10.webp',
            ].map((image, index) => (
              <div className="col-md-4 p-0" key={index}>
                <a data-fancybox="gallery-images" href={`images/${image}`}>
                  <img src={`images/${image}`} className="img-fluid img-thumbnail w-100" alt={`Gallery Image ${index + 1}`} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="amenities-location" id="amenities-location">
        <h2 className="cons-heading pb-5 text-center font-sans">Location Advantages</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div>
                <ul className="list-disc list-inside">
                  <li>Mini Secretariat - 1Km</li>
                  <li>OP Jindal University - 6Km</li>
                  <li>UER 2, NH 344 - 2.5Km</li>
                  <li>Main City Bus Stand - 1.5Km</li>
                  <li>Sonipat Railway Station - 800 Mtr.</li>
                  <li>Near to upcoming Kundli Metro station</li>
                  <li>Near to upcoming Bullet Train station</li>
                  <li>Near Maruti Kharkhoda Plant</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.2059465918705!2d76.99502827500032!3d28.98126767547617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dbb00153a4279%3A0x76250346865c7cde!2sElite%20Homes%20%2B%2002%20Home!5e0!3m2!1sen!2sin!4v1748684383425!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elite Homes Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="pd-60" id="developer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ftr_rera"><span>243 OF 2023</span></div>
            </div>
            <div className="col-lg-12">
              <div className="develop">
                <div className="devep-img">
                  <div className="sub-devep" style={{ backgroundColor: 'white' }}>
                    <h4>A BRAND WITH LEGACY ETCHED IN EXCELLENCE.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Get a Callback</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body pd-30">
              <form className="modal-form" onSubmit={handleEnqFormSubmit}>
                <div className="modal-form-section">
                  <div className="form-row p-2">
                    <input
                      type="text"
                      className="border-0 form-control"
                      placeholder="Name"
                      name="name"
                      value={enqForm.name}
                      onChange={handleEnqFormChange}
                      required
                    />
                  </div>
                  <div className="form-row p-2">
                    <input
                      type="email"
                      className="border-0 form-control"
                      placeholder="Email"
                      name="email"
                      value={enqForm.email}
                      onChange={handleEnqFormChange}
                      required
                    />
                  </div>
                  <div className="form-row p-2">
                    <input
                      type="tel"
                      className="border-0 form-control"
                      placeholder="Phone"
                      name="phone"
                      value={enqForm.phone}
                      onChange={handleEnqFormChange}
                      maxLength="10"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                  <div className="modal-submit text-center">
                    <button type="submit" className="modal-submit-btn">Request A Call</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="disclaimer text-center">
                <p className="text-justify">
                  <b>Disclaimer - </b> Please be advised that this website is not an official site and serves solely as an informational portal managed by a RERA authorized real estate agent. It does not constitute an offer or guarantee of any services. The prices displayed on this website are subject to change without prior notice, and the availability of properties cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.
                </p>
                <p>
                  &copy; Copyright 2025. All Rights Reserved{' '}
                  <a href="privacy" target="_blank">Privacy Policy</a> |{' '}
                  <a href="terms" target="_blank">Terms & Conditions</a> |{' '}
                  <a href="refund-policy" target="_blank">Refund Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://api.whatsapp.com/send?phone=+919211494111&text=Hello,%20I%20am%20interested%20in%20DDJAY%20Plots%20,%20Please%20get%20in%20touch%E2%80%A6"
        target="_blank"
        rel="noopener noreferrer"
        className="whtsap-btn"
        onClick={() => window.gtag_whatsapp_conversion?.()}
      >
        <img src="images/whatsup.png" className="w-100" alt="WhatsApp" />
      </a>

      <div className="bid-site-visit">
        <div className="row">
          <div className="col">
            <a href="tel:+919211494111" onClick={() => window.gtag_call_conversion?.()}>
              <img src="images/call-icon-gif.gif" alt="Call" /><br /> Call Now
            </a>
          </div>
          <div className="col">
            <a
              href="https://api.whatsapp.com/send?phone=+919211494111&text=Hello,%20I%20am%20interested%20in%20DDJAY%20Plots%20,%20Please%20get%20in%20touch%E2%80%A6"
              onClick={() => window.gtag_whatsapp_conversion?.()}
            >
              <img src="images/whatsapp.gif" alt="WhatsApp" /><br /> Whatsapp
            </a>
          </div>
          <div className="col">
            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="images/fillaform.jpeg" alt="Enquire" /> <br /> Enquire Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;