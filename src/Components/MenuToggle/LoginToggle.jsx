import { motion } from "framer-motion";

const MotionPath = motion.path;

export const LoginToggle = ({ toggle, isOpen }) => (
  <button className="d-flex align-items-center justify-content-center" onClick={toggle} style={{ background: "none", border: "none", cursor: "pointer" }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="50" height="50">
      <MotionPath
        fillRule="evenodd"
        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1z"
        variants={{
          closed: { fill: "#492E34" }, 
          open: { fill: "beige" },      
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <MotionPath
        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        variants={{
          closed: { fill: "#492E34" },
          open: { fill: "beige" },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
    </svg>
  </button>
);
