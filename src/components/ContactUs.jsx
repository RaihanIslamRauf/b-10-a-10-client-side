import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending the message (replace with actual backend logic if needed)
    setTimeout(() => {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Your message has been sent successfully.',
      });

      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-[#FF5103] mb-6">Contact Us</h1>
      <div className="max-w-4xl mx-auto text-lg text-gray-800 dark:text-white">
        <p className="mb-6">
          We’d love to hear from you! If you have any questions, suggestions, or just want to
          reach out to us, please use the contact form below. Our team will get back to you as
          soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-800 dark:text-white">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-white border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5103] dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-800 dark:text-white">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-white border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5103] dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-800 dark:text-white">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 bg-white dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5103] dark:bg-gray-700 dark:text-white"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn bg-[#FF5103] text-white hover:bg-[#e44d00] transition-all duration-300 px-6 py-2 rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
