import React from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import ValueIMG from "../assets/images/value.png";
import data from "../utils/accordion";

export default function Value() {
  return (
    <section className="v-wrapper">
      <div className="v-container container py-5">
        {/* ------------------------------ Left Section ------------------------------ */}
        <div className="value-right">
          <div className="img-container">
            <img src={ValueIMG} alt="Hero Image" />
          </div>
        </div>
        {/* ------------------------------ Right Section ----------------------------- */}
        <div className="value-left">
          <div className="value-container">
            <div className="r-title flow-xsm">
              <h4>Best Choices</h4>
              <h3>Popular Residencies</h3>
              <p className="ch-small">We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</p>
            </div>
            <div className="faq-content">
              <Accordion
                className="accordion"
                // allowZeroExpanded
                allowMultipleExpanded={false}
                preExpanded={[0]}
              >
                {data.map((item, i) => {
                  return (
                    <AccordionItem className="accordionItem" key={i} uuid={i}>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <h4 className="accordionHeading">{item.heading}</h4>
                        </AccordionItemButton>
                      </AccordionItemHeading>

                      <AccordionItemPanel>
                        <p>{item.detail}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
