import { motion } from "framer-motion";

interface FadeProps {
  children: any;
  speed: number;
  delay: number;
}

export default function Fade({ children, speed, delay }: FadeProps) {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: speed,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
}
