import { motion } from "framer-motion";

const stories = [
  {
    name: "EcoFarm",
    summary:
      "Raised $500,000 to develop sustainable urban farms, now operating in 10+ cities.",
    image:
      "https://i.ibb.co/KgC8pdC/eco-farm.jpg", // Urban farm
  },
  {
    name: "TechSpark",
    summary:
      "A tech startup funded through our platform, now serving over 1 million users.",
    image:
      "https://i.ibb.co/PGYW01cy/techspark.jpg", // Team working on tech
  },
  {
    name: "CleanWave",
    summary:
      "Launched ocean cleanup drones after raising $750,000 in under 2 weeks.",
    image:
      "https://i.ibb.co/nNQk2pMy/drones.jpg", // Ocean cleanup
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const FeaturedSuccessStories = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-700 py-16 mb-6 rounded-lg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Featured Success Stories
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex-1 hover:shadow-xl transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={story.image}
                alt={story.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {story.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {story.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSuccessStories;
