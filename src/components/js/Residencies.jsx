import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../utils/slider.json";
import { sliderSettings } from "../utils/common";
import cardIMG from "../assets/images/r1.png";

export default function Residencies() {
  return (
    <section className="r-wrapper">
      <div className="r-container container">
        <div className="r-title flow-xsm">
          <h4>Best Choices</h4>
          <h3>Popular Residencies</h3>
        </div>
        <div className="r-slider py-2">
          <Swiper {...sliderSettings}>
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="r-card">
                  <div>
                    <div className="r-card-image">
                      <img src={cardIMG} alt="" />
                    </div>
                    <div className="r-card-content flow-xsm">
                      <p>
                        <span>$</span>
                        {card.price}
                      </p>
                      <h4>{card.title}</h4>
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
