import React from "react";
import ContactIMG from "../assets/images/contact.jpg";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

export default function Contact() {
  return (
    <section className="v-wrapper">
      <div className="v-container container py-5">
        {/* ------------------------------ Left Section ------------------------------ */}
        <div className="value-left">
          <div className="value-container">
            <div className="r-title flow-xsm">
              <h4>Our Contact Us</h4>
              <h3>Easy to contact us</h3>
              <p className="ch-small">We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</p>
            </div>
            <div className="contact-wrapper">
              <div className="contact-crt">
                <div className="contact-crt_detail">
                  <MdCall className="contact-crt__icon" size={25} />
                  <div>
                    <h5>Call</h5>
                    <p>123 123 1234</p>
                  </div>
                </div>
                <div className="contact-crt_btn">Call Now</div>
              </div>
              <div className="contact-crt">
                <div className="contact-crt_detail">
                  <BsFillChatDotsFill className="contact-crt__icon" size={25} />
                  <div>
                    <h5>Chat</h5>
                    <p>123 123 1234</p>
                  </div>
                </div>
                <div className="contact-crt_btn">Chat Now</div>
              </div>
              <div className="contact-crt">
                <div className="contact-crt_detail">
                  <BsFillChatDotsFill className="contact-crt__icon" size={25} />
                  <div>
                    <h5>Video Call</h5>
                    <p>123 123 1234</p>
                  </div>
                </div>
                <div className="contact-crt_btn">Video Call Now</div>
              </div>
              <div className="contact-crt">
                <div className="contact-crt_detail">
                  <HiChatBubbleBottomCenter className="contact-crt__icon" size={25} />
                  <div>
                    <h5>Message</h5>
                    <p>123 123 1234</p>
                  </div>
                </div>
                <div className="contact-crt_btn">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------ Right Section ----------------------------- */}
        <div className="value-right">
          <div className="img-container">
            <img src={ContactIMG} alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
}
