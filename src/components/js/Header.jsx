import React from 'react';
import logo from '../assets/icons/logo.png';

const menuItems = ['Home', 'About us', 'Contact'];

export default function Header() {
  return (
    <section className="w-full bg-black flex justify-center border-b border-white">
      <div className=" container flex gap-4 items-center justify-between py-4 px-5">
        <img className="translate-y-[8px]" src={logo} alt="logo" width="160" />

        <nav className="flex gap-8 items-center justify-between">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href="/"
              className=" max-sm:hidden text-white cursor-pointer font-medium uppercase text-sm hover:text-blue-600">
              {item}
            </a>
          ))}

          <a
            href="#"
            className="border border-white hover:bg-neutral-900 p-3 px-5 rounded-full text-white cursor-pointer font-medium uppercase text-sm">
            Get Started
          </a>
        </nav>
      </div>
    </section>
  );
}
