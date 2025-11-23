import { Head } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';

export default function PaymentForm({ errors }) {
    const [formData, setFormData] = useState({
        amount: '100.00',
        email: 'test@example.com',
        phone: '9876543210',
        productinfo: 'Test Product',
        firstname: 'John',
        address1: '123 Test Street',
        address2: '',
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '400001',
    });
    const [formErrors, setFormErrors] = useState({});
    const [processing, setProcessing] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


const submit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setFormErrors({});
    setResponse(null);

    try {
        const res = await axios.post('/payment/initiate', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Easebuzz API Response:', res.data);

        if (res.data.success) {
            setResponse(res.data);
        } else {
            setFormErrors({ general: res.data.message || 'Payment initiation failed' });
        }
    } catch (error) {
        console.error('Easebuzz API Error:', error);

        if (error.response && error.response.data) {
            setFormErrors({ general: error.response.data.message || 'An error occurred. Please try again.' });
        } else {
            setFormErrors({ general: 'Network error. Please try again later.' });
        }
    } finally {
        setProcessing(false);
    }
};


    return (
        <>
            <Head title="Payment Form" />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Pay via Easebuzz</h2>
                    {response ? (
                        <div className="border rounded-lg p-4 bg-white">
                            <h3 className="text-lg font-medium">{response.message}</h3>
                            <pre className="mt-2 text-sm text-gray-600">{JSON.stringify(response.result, null, 2)}</pre>
                            <button
                                onClick={() => setResponse(null)}
                                className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                            >
                                Back to Form
                            </button>
                        </div>
                    ) : (
                        <form className="mt-8 space-y-6" onSubmit={submit}>
                            <div className="rounded-md shadow-sm space-y-2">
                                <div>
                                    <input
                                        id="firstname"
                                        name="firstname"
                                        type="text"
                                        required
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="First Name"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                    />
                                    {formErrors.firstname && <p className="text-red-500 text-xs mt-1">{formErrors.firstname}</p>}
                                </div>
                                <div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                                </div>
                                <div>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        required
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Phone (10 digits)"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                                </div>
                                <div>
                                    <input
                                        id="productinfo"
                                        name="productinfo"
                                        type="text"
                                        required
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Product Info"
                                        value={formData.productinfo}
                                        onChange={handleChange}
                                    />
                                    {formErrors.productinfo && <p className="text-red-500 text-xs mt-1">{formErrors.productinfo}</p>}
                                </div>
                                <div>
                                    <input
                                        id="amount"
                                        name="amount"
                                        type="number"
                                        step="0.01"
                                        required
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Amount (₹)"
                                        value={formData.amount}
                                        onChange={handleChange}
                                    />
                                    {formErrors.amount && <p className="text-red-500 text-xs mt-1">{formErrors.amount}</p>}
                                </div>
                                <div>
                                    <input
                                        id="address1"
                                        name="address1"
                                        type="text"
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Address Line 1"
                                        value={formData.address1}
                                        onChange={handleChange}
                                    />
                                    {formErrors.address1 && <p className="text-red-500 text-xs mt-1">{formErrors.address1}</p>}
                                </div>
                                <div>
                                    <input
                                        id="address2"
                                        name="address2"
                                        type="text"
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Address Line 2"
                                        value={formData.address2}
                                        onChange={handleChange}
                                    />
                                    {formErrors.address2 && <p className="text-red-500 text-xs mt-1">{formErrors.address2}</p>}
                                </div>
                                <div>
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                    {formErrors.city && <p className="text-red-500 text-xs mt-1">{formErrors.city}</p>}
                                </div>
                                <div>
                                    <input
                                        id="state"
                                        name="state"
                                        type="text"
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="State"
                                        value={formData.state}
                                        onChange={handleChange}
                                    />
                                    {formErrors.state && <p className="text-red-500 text-xs mt-1">{formErrors.state}</p>}
                                </div>
                                <div>
                                    <input
                                        id="country"
                                        name="country"
                                        type="text"
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Country"
                                        value={formData.country}
                                        onChange={handleChange}
                                    />
                                    {formErrors.country && <p className="text-red-500 text-xs mt-1">{formErrors.country}</p>}
                                </div>
                                <div>
                                    <input
                                        id="zipcode"
                                        name="zipcode"
                                        type="text"
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Zipcode"
                                        value={formData.zipcode}
                                        onChange={handleChange}
                                    />
                                    {formErrors.zipcode && <p className="text-red-500 text-xs mt-1">{formErrors.zipcode}</p>}
                                </div>
                            </div>
                            {formErrors.general && <p className="text-red-500 text-sm text-center mt-2">{formErrors.general}</p>}
                            <button
                                type="submit"
                                disabled={processing}
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                            >
                                {processing ? 'Processing...' : 'Pay Now'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
}