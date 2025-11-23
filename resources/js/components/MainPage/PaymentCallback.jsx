'use client';

import { useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

export const PaymentCallback = ({ url }) => {
  useEffect(() => {
    // Parse query parameters from URL
    const params = new URLSearchParams(window.location.search);
    const success = params.get('success') === 'true';
    const message = params.get('message') || 'Payment processing...';
    const error = params.get('error') || '';

    // Show message briefly
    alert(message);

    // Redirect to home page after 2 seconds using Inertia
    const timer = setTimeout(() => {
      Inertia.visit('/'); // Navigate to home
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container text-center mt-5">
      <h2>Processing Payment...</h2>
      <p>Redirecting to home page...</p>
    </div>
  );
};

// export default PaymentCallback;
