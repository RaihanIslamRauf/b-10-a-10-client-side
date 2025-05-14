import React from 'react';
import UseTitle from '../hooks/UseTitle';

const TermsOfService = () => {
  UseTitle();
  return (
    <div className="container mx-auto mb-8 px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-[#FF5103] mb-6">Terms of Service</h1>
      <div className="max-w-4xl mx-auto text-lg text-gray-800 dark:text-white">
        <p className="mb-6">
          These Terms of Service ("Terms") govern your use of the CrowdCube website and services. By accessing or using our website, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our services.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By using our website or services, you agree to abide by these Terms and any applicable laws. If you are using our services on behalf of an organization, you represent and warrant that you are authorized to agree to these Terms on behalf of the organization.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">2. Changes to Terms</h2>
        <p className="mb-6">
          We reserve the right to update or modify these Terms at any time. Any changes will be posted on this page, and the revised Terms will be effective immediately upon posting. It is your responsibility to review these Terms periodically for any updates.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">3. User Accounts</h2>
        <p className="mb-6">
          To access certain features of our website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to notify us immediately if you suspect any unauthorized access to your account.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">4. User Conduct</h2>
        <p className="mb-6">
          You agree to use our website and services in accordance with applicable laws and regulations. You may not use our website for any unlawful purpose, to harass others, or to infringe upon the rights of others. We reserve the right to suspend or terminate your account if you violate these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">5. Intellectual Property</h2>
        <p className="mb-6">
          All content on our website, including text, graphics, logos, images, and software, is the property of Crowdcube or its licensors and is protected by intellectual property laws. You may not use, copy, or distribute any content without prior written permission from Crowdcube.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">6. Disclaimers</h2>
        <p className="mb-6">
          Our website and services are provided "as is" without any warranties, express or implied. We do not guarantee that our website will be error-free, uninterrupted, or free of harmful components. You use our website at your own risk.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">7. Limitation of Liability</h2>
        <p className="mb-6">
          To the fullest extent permitted by law, Crowdcube will not be liable for any indirect, incidental, special, or consequential damages arising out of your use or inability to use our website or services.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">8. Indemnification</h2>
        <p className="mb-6">
          You agree to indemnify, defend, and hold harmless Crowdcube and its affiliates from any claims, losses, or damages arising from your violation of these Terms or your use of our website and services.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">9. Governing Law</h2>
        <p className="mb-6">
          These Terms are governed by and construed in accordance with the laws of the jurisdiction in which Crowdcube operates. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts in that jurisdiction.
        </p>

        <h2 className="text-2xl font-semibold text-[#FF5103] mb-4">10. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms, please contact us using our <a href="/contactUs" className="text-[#FF5103]">Contact Us</a> page.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
