import { motion } from 'framer-motion';

export default function PPLogo() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.img
        src="/logo.jpg"
        alt="P&P Pizza and Pasta"
        className="w-40 md:w-50 lg:w-50 mx-40 h-auto object-contain"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
