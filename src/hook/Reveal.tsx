import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, Variants } from "framer-motion";

type RevealProps = {
  children?: React.ReactNode;
  threshold?: number;
  variants?: Variants;
  transition?: { [key: string]: any };
};

const Reveal = ({
  children,
  threshold = 0.5,
  variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  transition = { duration: 0.3, ease: "easeOut" },
}: RevealProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });
  const animationRef = useRef(controls);

  useEffect(() => {
    if (inView) {
      animationRef.current.start("visible");
    } else {
      animationRef.current.start("hidden");
    }
  }, [inView]);

  const childVariants = {
    ...variants,
    hidden: {
      ...variants.hidden,
      transition,
    },
    visible: {
      ...variants.visible,
      transition,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animationRef.current}
      variants={childVariants}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
