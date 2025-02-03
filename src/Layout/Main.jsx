// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div>
      <Navbar />
      {/* Using motion.div for a smoother scrolling animation */}
      <motion.div
        className="min-h-[calc(100vh-110px)]"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.5, // Increased duration for smoother transition
          ease: [0.42, 0, 0.58, 1], // Custom cubic bezier easing function for smoothness
        }}
        style={{ overflowY: "auto", scrollBehavior: "smooth" }}
      >
        <Outlet />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Main;
