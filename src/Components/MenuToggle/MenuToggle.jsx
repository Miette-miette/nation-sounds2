import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }) => (
  <button className="d-flex align-items-center justify-content-center" onClick={toggle} style={{ background: "none", border: "none", cursor: "pointer" }}>
    <svg width="50" height="50" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", stroke: "#492E34" }, 
          open: { d: "M 3 16.5 L 17 2.5", stroke: "beige" }, 
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1, stroke: "#492E34" },
          open: { opacity: 0, stroke: "beige" },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.2 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346", stroke: "#492E34" },
          open: { d: "M 3 2.5 L 17 16.346", stroke: "beige" },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
    </svg>
  </button>
);

