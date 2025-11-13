import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const MotionHeart = motion(Heart);
const HeartAnimation = () => {
  return (
    <MotionHeart
      size={44}
      style={{
        color: "white",
        opacity: 0.5,
        marginTop: 20,
      }}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default HeartAnimation;
