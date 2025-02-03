import { useState } from "react";
import svg1 from "../../assets/backgrounds/WaveLinesDesktop1.svg";
import svg2 from "../../assets/backgrounds/WaveLinesDesktop2.svg";
import svg3 from "../../assets/backgrounds/WaveLinesDesktop3.svg";
import { motion } from "framer-motion";

const FooterAnim = () => {
  // Parallax effect on the background image (Y-axis)
  // const { scrollY } = useViewportScroll();
  // const yPos = useTransform(scrollY, [0, 300], [0, -50]);

  // Mouse movement state for the SVG overlays
  const [mouseX, setMouseX] = useState(window.innerWidth / 2);

  // Update mouseX on mouse move over the container
  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
  };

  // Calculate offset relative to the center of the screen.
  const centerX = window.innerWidth / 2;
  const offset = mouseX - centerX;

  // Reduced multipliers for smaller movement.
  const groupOneOffset = -offset * 0.02; // for 1st and 3rd SVG images
  const groupTwoOffset = -offset * 0.04; // for 2nd and 4th SVG images

  return (
    <div>
      <div
        onMouseMove={handleMouseMove}
        className="mx-auto h-[60vh] lg:h-[530px] bg-[radial-gradient(59.82%_121.73%_at_-9.66%_130.31%,_#00e9ea_0%,_#1f80f0_52.08%,_#005bc4_100%)] hidden lg:flex justify-between items-center relative overflow-hidden "
        style={{ clipPath: "polygon(0 0, 100% 49%, 100% 100%, 0% 100%)" }}
      >
        {/* Text in the center */}

        {/* Centered Text */}
        <motion.div
          className="relative ml-72 mt-10 max-w-[1320px] z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-Montserrat text-[56px] text-white font-semibold leading-[61.6px]">
            Legacy no longer
          </h2>
          <p className="text-white text-lg mt-4">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>

          <button className="bg-[#fe8b53] mt-6 text-white text-[18px] font-semibold leading-[23px] font-Montserrat px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:bg-white hover:text-[#fe8b53]">
            Contact Us <span>›</span>
          </button>
        </motion.div>

        {/* SVG overlays that animate horizontally on mouse move */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.img
            src={svg1}
            alt="Wave 1"
            className="absolute top-0 left-0 min-w-[150%] object-cover"
            animate={{ x: groupOneOffset }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
          <motion.img
            src={svg2}
            alt="Wave 2"
            className="absolute top-0 left-0 min-w-[150%] object-cover"
            animate={{ x: groupTwoOffset }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
          <motion.img
            src={svg3}
            alt="Wave 3"
            className="absolute top-0 right-0 min-w-[120%] object-cover"
            animate={{ x: groupOneOffset }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
          <motion.img
            src={svg2}
            alt="Wave 4"
            className="absolute bottom-0 right-0 min-w-[110%] object-cover"
            animate={{ x: groupTwoOffset }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>
      </div>
      <div
        className="bg-[#005bc4] w-full py-14 lg:hidden"
        style={{
          clipPath: "polygon(0% 0%, 100% 15%, 100% 100%, 0% 100%)",
        }}
      >
        <motion.div
          className="relative  z-10 px-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-Montserrat text-[36px] sm:text-[48px] text-white font-semibold leading-[45px] sm:leading-[61.6px]">
            Legacy no longer
          </h2>
          <p className="text-white text-lg sm:text-xl mt-4">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>

          <button className="mt-6 bg-[#fe8b53] text-white text-lg font-semibold px-6 py-3 w-full rounded-lg transition-all duration-300 hover:bg-white hover:text-[#fe8b53]">
            Contact Us <span>›</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FooterAnim;
