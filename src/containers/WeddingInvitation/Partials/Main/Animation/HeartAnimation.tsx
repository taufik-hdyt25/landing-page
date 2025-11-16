import { motion } from "framer-motion";
import { BsBalloonHeart } from "react-icons/bs";

const MotionHeart = motion(BsBalloonHeart);
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
        y: [0, -10, 0],
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
