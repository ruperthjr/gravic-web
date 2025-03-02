import { motion } from "framer-motion";
import AnimatedButton from "../components/AnimatedButton";

function Home() {
  return (
    <motion.div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/images/dubai-workers.jpg')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg">
        <motion.h1
          className="text-4xl md:text-6xl font-bold font-poppins"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Bridging Dreams to Reality
        </motion.h1>

        <p className="mt-4 text-lg">Work & Succeed in Dubai with trusted job placements and professional training.</p>

        <div className="mt-6 space-x-4">
          <AnimatedButton text="Explore Jobs" link="/services" />
          <AnimatedButton text="Get Started" link="/contact" />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;