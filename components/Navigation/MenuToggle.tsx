import * as React from "react";
import { motion } from "framer-motion";

interface menuToggleProps {
  toggle: () => boolean | void;
  toggleState: boolean;
}

interface pathProps {
  d?: string;
  variants?: {
    closed: {};
    open: {};
  };
  transition?: { duration: number };
}

const Path = (props: pathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="1.5"
    stroke="#c4c4c4"
    {...props}
  />
);

export const MenuToggle: React.FC<menuToggleProps> = ({
  toggle,
  toggleState,
}) => (
  <div className="toggle-button-wrapper" onClick={toggle}>
    {toggleState ? <span>CLOSE</span> : <span>MENU</span>}
    <button className="toggle-button">
      <motion.svg
        whileHover={{ width: 47, height: 15 }}
        width="57"
        height="20"
        viewBox="0 0 26 20"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 57 2.5" },
            open: { d: "M 1 14.5 L 57 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 57 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 27 16.346" },
            open: { d: "M 1 5 L 57 18.346" },
          }}
        />
      </motion.svg>
    </button>
  </div>
);
