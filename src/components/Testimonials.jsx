const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Startup Founder",
    feedback:
      "Crowdcube made fundraising incredibly easy. The platform is intuitive, and we found amazing support from the community!",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Rafiq Islam",
    role: "Investor",
    feedback:
      "I’ve supported multiple campaigns and love the transparency Crowdcube offers. It’s a game changer for community-backed projects.",
    image: "https://i.pravatar.cc/150?img=56",
  },
  {
    id: 3,
    name: "Mira Chowdhury",
    role: "NGO Director",
    feedback:
      "We funded two social impact projects through Crowdcube. The exposure and trust we gained were beyond our expectations.",
    image: "https://i.pravatar.cc/150?img=24",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-700 py-16 mb-8 rounded-lg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          What People Are Saying
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center flex-1 transition-transform hover:scale-[1.02]"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-red-500 mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {t.name}
              </h4>
              <p className="text-sm text-red-600 dark:text-red-400 font-medium mb-4">
                {t.role}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                “{t.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
