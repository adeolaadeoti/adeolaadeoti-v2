import * as React from "react";
import { motion } from "framer-motion";

// const variants = {
//   open: {
//     y: 0,
//     opacity: 1,
//     display: "block",
//     transition: {
//       y: { stiffness: 1000, velocity: -100 },
//       delay: 0.5,
//     },
//   },
//   closed: {
//     y: 50,
//     display: "none",
//     opacity: 0,
//     transition: {
//       y: { stiffness: 1000 },
//     },
//   },
// };

export const MobileNavigation = ({ variants }: any) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <h1>Mobile Navigation</h1>
  </motion.div>
);
