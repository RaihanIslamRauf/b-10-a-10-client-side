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
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center flex-1"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
