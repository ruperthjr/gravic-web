import { motion } from "framer-motion";

function AnimatedButton({ text, link }) {
  return (
    <motion.a
      href={link}
      className="bg-accent text-white px-6 py-3 rounded-md font-bold text-lg shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.a>
  );
}

export default AnimatedButton;
