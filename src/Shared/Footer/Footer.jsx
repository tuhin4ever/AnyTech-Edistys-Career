import logo from "../../assets/logo.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className="bg-[#002045] py-12">
        <div className="max-w-[1320px] mx-auto px-6">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Logo Section */}
            <div className="flex items-center space-x-3 mb-6 sm:mb-0">
              <img src={logo} alt="ANYTECH Logo" className="h-8" />
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col sm:flex-row items-center justify-center sm:justify-end space-y-4 sm:space-y-0 sm:space-x-8 text-cyan-300">
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Our Solutions
                </a>
              </li>
              <span className="text-white hidden sm:inline">|</span>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  AnyCaaS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  AnyBaaS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  AnyPaaS
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <hr className="border-gray-600 " />

      <div className="bg-[#00152d] py-6">
        <motion.div
          className="max-w-[1320px] mx-auto flex flex-col sm:flex-row justify-between items-center px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="mb-4 sm:mb-0 text-[#1f80f0] font-[600] text-[14px] sm:text-[12px] leading-[19.2px] font-inter text-center sm:text-left">
            &copy; 2023 All rights reserved. Any Technology Pte Ltd.
          </span>
          <a
            href="#"
            className="text-[#0045b4] hover:text-white text-[14px] sm:text-[12px] font-[600] leading-[19.2px] font-inter text-center sm:text-left"
          >
            Privacy Policy
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
