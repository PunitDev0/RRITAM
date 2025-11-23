import React from 'react';

const RefundPolicy = () => {
  return (
    <section className="py-10 bg-white text-black min-h-screen">
      <div className="container mx-auto w-4/5 text-justify">
        <div className="flex flex-col">
          <div>
            <h2 className="text-center text-4xl font-sans font-bold mb-6">
              Cancellation & Refund Policy
            </h2>

            <p className="text-base font-light leading-6 mb-4">
              <strong>
                RRITAM REALITY LLP believes in helping its customers as far as possible, and has therefore adopted a liberal cancellation policy.
                <br /><br />
                • All unsuccessful applications will be refunded the registration amount within <span className="font-semibold">14 Working Days</span> of the Allotment Date.
                <br />
                • Refunds will be processed to the same account provided by the user at the time of registration.
                <br />
                • There is a <span className="font-semibold">100% refund policy</span> with no charges if the Allotment is not confirmed.
                <br /><br />
                For cancellations and further information, please contact us at:{' '}
                <a
                  href="mailto:info@haryanaaffordableshopsreg.com"
                  className="text-blue-600 underline"
                >
                  info@haryanaaffordableshopsreg.com
                </a>.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
