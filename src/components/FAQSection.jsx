import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is CrowdCube?",
      answer:
        "CrowdCube is a web platform that connects individuals and organizations with impactful fundraising campaigns. It allows you to support causes you care about through donations and engagement.",
    },
    {
      question: "How do I start contributing?",
      answer:
        "Simply browse through our available campaigns, choose one that aligns with your values, and click 'Donate' to make a contribution. You can also create an account to manage your activity.",
    },
    {
      question: "Can I start my own fundraising campaign?",
      answer:
        "Yes! Once registered, you can launch your own campaign, set goals, and share it with your network to gain support from donors across the platform.",
    },
    {
      question: "How do I track my donations or campaigns?",
      answer:
        "CrowdCube provides a personalized dashboard where you can view your donation history, track the progress of supported campaigns, and manage your own fundraising efforts.",
    },
    {
      question: "Is my personal and payment information safe?",
      answer:
        "Absolutely. We use industry-standard encryption and security protocols to ensure your data and transactions are protected at all times.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-700 py-16 rounded-lg mb-8">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                onClick={() => toggleAccordion(index)}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {faq.question}
                </h3>
              </div>
              {activeIndex === index && (
                <div className="mt-4 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-6 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
