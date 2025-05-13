const features = [
  {
    title: "Efficient Processes",
    description:
      "Our streamlined workflows ensure fast and reliable results, saving time and resources.",
    icon: "⚡",
  },
  {
    title: "Transparent Reporting",
    description:
      "We provide detailed, real-time updates to keep you informed at every stage.",
    icon: "📊",
  },
  {
    title: "Secure Transactions",
    description:
      "With state-of-the-art security, your investments are always protected.",
    icon: "🔒",
  },
];

const EfficiencyTransparency = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-700 py-16 rounded-lg mb-6">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Our Efficiency & Transparency
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 text-center flex-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EfficiencyTransparency;
