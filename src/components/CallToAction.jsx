import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 mb-8 mt-8 rounded-lg text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Ready to Make a Difference?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-700 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Join us today and start funding projects that will change the world!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link
            to="/register"
            className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-400 dark:hover:bg-orange-600 dark:bg-orange-500 transition-all duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
