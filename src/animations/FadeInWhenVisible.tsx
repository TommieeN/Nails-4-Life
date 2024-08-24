import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInWhenVisibleProps = {
  children: ReactNode;
};

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
