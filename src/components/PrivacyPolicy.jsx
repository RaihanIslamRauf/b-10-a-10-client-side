import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-[#FF5103] mb-6">Privacy Policy</h1>
      <div className="max-w-4xl mx-auto text-lg text-gray-800 dark:text-white">
        <p className="mb-6">
          At CrowdCube, we take your privacy seriously. This Privacy Policy outlines the types of personal
          information we collect and how it is used and protected. By using our website, you consent to the
          practices described in this policy.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">1. Information We Collect</h2>
        <p className="mb-6">
          We collect personal information that you provide directly to us when you register, submit forms,
          or contact us. This may include your name, email address, and any other information you provide.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">2. How We Use Your Information</h2>
        <p className="mb-6">
          The information we collect is used to provide and improve our services, communicate with you, and
          respond to inquiries. We may also use your data for marketing purposes, but we will always respect
          your preferences.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">3. Sharing Your Information</h2>
        <p className="mb-6">
          We do not share your personal information with third parties, except as necessary to provide
          services (e.g., payment processing) or if required by law.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">4. Data Security</h2>
        <p className="mb-6">
          We implement a variety of security measures to maintain the safety of your personal information
          when you submit it. However, no method of transmission over the internet or electronic storage is
          100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">5. Your Rights</h2>
        <p className="mb-6">
          You have the right to access, correct, or delete your personal information at any time. If you wish
          to exercise these rights, please contact us through our contact page.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">6. Changes to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we
          will notify you if any material changes occur.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle your personal information,
          please feel free to reach out to us using our <a href="/contactUs" className="text-[#FF5103]">Contact Us</a> page.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
