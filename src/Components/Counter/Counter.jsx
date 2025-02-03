import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // This ensures the animation happens only once when in view
    threshold: 0.2, // You can adjust this value to trigger the animation sooner or later
  });

  return (
    <motion.div
      ref={ref}
      className="mx-auto text-center z-10 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <span className="text-base uppercase font-bold text-[#2885f1]">
        TRUSTED BY THE BEST
      </span>
      <div className="flex flex-wrap justify-center items-center mt-10 gap-20">
        {/* Years of Experience */}
        <div className="text-center">
          <motion.div
            className="font-semibold text-[#1370db]"
            style={{
              fontSize: "96px",
              fontFamily: "Montserrat Variable, sans-serif",
              letterSpacing: "-1.92px",
              lineHeight: "96px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mr-1">{">"}</span>
            {inView && <CountUp start={0} end={20} duration={3} />}
          </motion.div>
          <div className="text-lg text-[#1e2637]">Years of Experience</div>
        </div>

        {/* Financial Institutions */}
        <div className="text-center">
          <motion.div
            className="font-semibold text-[#1370db]"
            style={{
              fontSize: "96px",
              fontFamily: "Montserrat Variable, sans-serif",
              letterSpacing: "-1.92px",
              lineHeight: "96px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {inView && <CountUp start={0} end={40} duration={3} />}+
          </motion.div>
          <div className="text-lg text-[#1e2637]">Financial Institutions</div>
        </div>

        {/* Customers */}
        <div className="text-center">
          <motion.div
            className="font-semibold text-[#1370db]"
            style={{
              fontSize: "96px",
              fontFamily: "Montserrat Variable, sans-serif",
              letterSpacing: "-1.92px",
              lineHeight: "96px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mr-1">{">"}</span>
            {inView && <CountUp start={0} end={200} duration={3} />}m
          </motion.div>
          <div className="text-lg text-[#1e2637]">Customers Each</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Counter;
