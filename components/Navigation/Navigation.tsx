import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MobileNavigation } from "./MobileNavigation";
import Link from "next/link";

const variants = {
  open: {
    // y: 0,
    opacity: 1,
    // display: "block",
    transition: {
      // y: { stiffness: 1000, velocity: -100 },
      // delay: 0.5,
    },
  },
  closed: {
    // y: 50,
    // display: "none",
    // pointerEvent: "none",
    opacity: 0,
    transition: {
      // y: { stiffness: 1000 },
    },
  },
};

export const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle<boolean>(false, true);

  // if isOpen is true, select the body element
  // and apply a style to make it unscrollable
  // else if isOpen is false, remove the style
  function toggleBodyScroll(isOpen: boolean) {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }

  React.useEffect(() => {
    toggleBodyScroll(isOpen);
  }, [isOpen]);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="navigation-wrapper"
    >
      <div className="menu-top">
        <Link href="/">
          <a className="brand-logo">
            <img
              className="brand-logo__icon"
              src="svg/adeola-logo-left.svg"
              alt="adeola logo icon"
            />
            <span className="brand-logo__text-wrapper">
              <img
                className="brand-logo__text"
                src="svg/adeola-logo-right.svg"
                alt="adeola logo text"
              />
            </span>
          </a>
        </Link>
        <MenuToggle toggle={() => toggleOpen()} toggleState={isOpen} />
      </div>
      <MobileNavigation variants={variants} />
    </motion.div>
  );
};
