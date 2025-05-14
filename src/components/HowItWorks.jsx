const steps = [
  {
    title: "Discover Opportunities",
    description:
      "Explore a variety of crowdfunding campaigns and find the ones that align with your interests.",
    icon: "🔍",
  },
  {
    title: "Invest Easily",
    description:
      "Choose your preferred campaign and make your investment with just a few clicks.",
    icon: "💳",
  },
  {
    title: "Watch Your Impact",
    description:
      "Track the progress of the campaigns you’ve supported and see the change you’re part of.",
    icon: "📈",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-700 py-16 mb-8 rounded-lg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 text-center flex-1 transition-transform hover:scale-[1.02]"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
