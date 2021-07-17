import * as React from "react";
import { motion } from "framer-motion";

const openTransition = {
  duration: 1.1,
  delay: 1.5,
  ease: [0.6, 0.01, -0.05, 0.9],
};
const closedTansition = {
  duration: 1,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export const MobileNavigation = ({ variants, isOpen }: any) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      <div className="navigation-top">
        <div className="navigation-top__left">
          <h4 className="navigation-h4">DONT BE A STRANGER</h4>
          <div className="navigation-top__left--links">
            <a href="https://github.com/adeolaadeoti" target="_blank">
              👾 GH
            </a>
            <a href="https://twitter.com/adeolajs" target="_blank">
              🐦 TW
            </a>
            <a href="https://www.linkedin.com/in/adeoladev" target="_blank">
              💼 LD
            </a>
            <a href="https://www.instagram.com/adeolaadeoti_" target="_blank">
              📸 IN
            </a>
          </div>
        </div>
        <div className="navigation-top__right">
          <h4 className="navigation-h4">HAVE AN IDEA?</h4>
          <a
            href="mailto:adeolaonigegeara@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Tell me about it
          </a>
        </div>
      </div>

      <div className="navigation-bottom">
        <h4 className="navigation-h4">FEATURED PROJECTS</h4>
        <div className="navigation-bottom__projects">
          <a
            href="https://"
            target="_blank"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/alexxandria-1.webp" alt="alexxandria" />
            <h2>
              Alexxandria
              <br />
              Forque
            </h2>
          </a>
          <a
            href="https://"
            target="_blank"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/pixelchef-1.webp" alt="pixelChef" />
            <h2>PixelChef</h2>
          </a>
          <a
            href="https://"
            target="_blank"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/adeola-1.webp" alt="adeola" />
            <h2>
              AdeolaAdeoti
              <br />
              Version 1
            </h2>
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);
