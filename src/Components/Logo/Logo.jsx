"use client";
import { motion } from "framer-motion";

// Import all logos
import logo01 from "../../assets/Logos/01.webp";
import logo02 from "../../assets/Logos/02.webp";
import logo03 from "../../assets/Logos/03.webp";
import logo04 from "../../assets/Logos/04.webp";
import logo05 from "../../assets/Logos/05.png";
import logo06 from "../../assets/Logos/06.webp";
import logo07 from "../../assets/Logos/07.webp";
import logo08 from "../../assets/Logos/08.webp";
import logo09 from "../../assets/Logos/09.webp";
import logo10 from "../../assets/Logos/10.webp";
import logo11 from "../../assets/Logos/11.webp";
import logo12 from "../../assets/Logos/12.webp";
import logo13 from "../../assets/Logos/13.webp";
import logo14 from "../../assets/Logos/14.webp";
import logo15 from "../../assets/Logos/15.webp";

// Array of all logos
const logos = [
  logo01,
  logo02,
  logo03,
  logo04,
  logo05,
  logo06,
  logo07,
  logo08,
  logo09,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
];

const Logo = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 justify-items-center">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
