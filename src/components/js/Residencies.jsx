import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from '../utils/slider.json';
import { sliderSettings } from '../utils/common';

export default function Residencies() {
  return (
    <section className="container my-14 px-5">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h4 className="text-3xl font-bold">Best Choices</h4>
          <h3 className="text-sm">Popular Residencies</h3>
        </div>
        <p className="text-sm max-w-[32ch] text-end">
          Discover our handpicked selection of the finest rooms available.
        </p>
      </div>
      <Swiper {...sliderSettings}>
        {data.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="border border-black overflow-hidden rounded-lg">
              <div>
                <figure className="w-full aspect-square border-b border-black">
                  <img
                    src={card.thumbnail ? card.thumbnail : 'https://placeholder.com/500'}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </figure>
                <div className="p-3">
                  <h4 className="text-lg font-bold">{card.title}</h4>
                  <p className="text-sm mt-1">{card.description}</p>
                  <p className="text-md font-bold mt-1">
                    <span>$</span>
                    {card.price}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
