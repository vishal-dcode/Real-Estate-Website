import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import data from '../utils/accordion';

export default function Value() {
  return (
    <section className="bg-neutral-200 w-full">
      <div className="relative overflow-hidden grid md:flex">
        {/* ------------------------------ Left Section ------------------------------ */}
        <div className="flex-1">
          <figure className="img-container relative w-full h-full">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover object-center"
              src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hero Image"
            />
          </figure>
        </div>
        {/* ------------------------------ Right Section ----------------------------- */}
        <div className="flex-1  md:py-32 sm:p-14 p-5 py-10">
          <div className="flex md:items-center mb-10 max-md:flex-col md:justify-between">
            <div>
              <h4 className="text-3xl font-bold">FAQ</h4>
              <p className="text-sm max-md:hidden">Popular Residencies</p>
            </div>
            <p className="text-sm max-w-[62ch] gap-10 max-md:mt-2 md:text-end">
              We always ready to help by providijng the best services for you. We beleive a good blace to live can make
              your life better
            </p>
          </div>
          <Accordion
            className="border border-black rounded-lg overflow-hidden"
            allowMultipleExpanded={false}
            preExpanded={[0]}>
            {data.map((item, i) => {
              return (
                <AccordionItem className="relative" key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="font-semibold flex gap-3 items-center">
                        {item.icon}
                        {item.heading}
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel className="bg-white p-5">
                    <p className="text-sm">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
