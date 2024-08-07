import React from 'react';
import { TbCurrentLocation } from 'react-icons/tb';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <>
      <section
        className="px-5 overflow-hidden relative h-[90vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519375722682-222902a76bf6?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          zIndex: -1
        }}>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.95))',
            zIndex: -1
          }}></div>
        <div className="relative container text-white">
          {/* ------------------------------ Left Section ------------------------------ */}
          <motion.div
            initial={{ y: '2rem', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: 'spring' }}>
            <div className="block z-1" style={{ position: 'relative', zIndex: 1 }}>
              <h1 className="text-6xl font-semibold">
                Discover <br /> Most Suitable <br /> Property
              </h1>
              <p className="text-md mt-4 max-w-[54ch]">
                Find a variety of properties that suit you very easilty Forget all difficulties in finding a residence
                for you.
              </p>

              <div className="flex gap-1 relative mt-4">
                <TbCurrentLocation
                  size={25}
                  className="absolute top-1/2 -translate-y-1/2 left-[12px] text-neutral-600"
                />
                <input
                  placeholder="Search Locations..."
                  type="text"
                  className="outline-none border bg-neutral-200 border-black rounded-lg p-3 px-1 pl-[45px] text-black"
                />
                <button className="bg-blue-600 px-5 border border-black rounded-lg">Search</button>
              </div>
            </div>
          </motion.div>

          <motion.div className="flex gap-10 mt-8">
            <div>
              <span className="flex items-center gap-1 pb-1">
                <CountUp start={8000} end={9000} duration={4} className="text-4xl font-semibold" />
                <span className="text-4xl font-semibold">+</span>
              </span>
              <span className="text-md font-semibold">Premium Product</span>
            </div>
            <div>
              <span className="flex items-center gap-1 pb-1">
                <CountUp start={1500} end={2000} duration={4} className="text-4xl font-semibold" />
                <span className="text-4xl font-semibold">+</span>
              </span>
              <span className="text-md font-semibold">Happy Customer</span>
            </div>
            <div>
              <span className="flex items-center gap-1 pb-1">
                <CountUp start={12} end={28} duration={4} className="text-4xl font-semibold" />
                <span className="text-4xl font-semibold">+</span>
              </span>
              <span className="text-md font-semibold">Awards Winning</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
