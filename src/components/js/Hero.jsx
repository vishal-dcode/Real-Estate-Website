import React from "react";
import heroIMG from "../assets/images/hero_image.png";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-container container py-3">
        {/* ------------------------------ Left Section ------------------------------ */}
        <motion.div
          className="hero-left"
          //info: framer-motion animation
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <div className="bg-gradient"></div>
          <h1>
            Discover <br /> Most Suitable <br /> Property
          </h1>
          <p className="ch-small">Find a variety of properties that suit you very easilty Forget all difficulties in finding a residence for you</p>

          <div className="search-bar--wrapper">
            <div className="search-bar">
              <HiLocationMarker color="var(--clr-accent-400)" size={25} />
              <input type="text" />
              <button>Search</button>
            </div>
            <div className="orange-circle"></div>
          </div>

          <div className="c-wrapper pt-3">
            <div className="c-container">
              <span>
                <CountUp start={8000} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span>Premium Product</span>
            </div>
            <div className="c-container">
              <span>
                <CountUp start={1500} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span>Happy Customer</span>
            </div>
            <div className="c-container">
              <span>
                <CountUp start={12} end={28} duration={4} />
                <span>+</span>
              </span>
              <span>Awards Winning</span>
            </div>
          </div>
        </motion.div>
        {/* ------------------------------ Right Section ----------------------------- */}
        <motion.div
          className="hero-right"
          //info: framer-motion animation
          initial={{ x: "5rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <div className="img-container">
            <img src={heroIMG} alt="Hero Image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
