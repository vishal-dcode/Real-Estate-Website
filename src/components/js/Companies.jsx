import React from "react";
import C1 from "../assets/images/prologis.png";
import C2 from "../assets/images/tower.png";
import C3 from "../assets/images/equinix.png";
import C4 from "../assets/images/realty.png";

export default function Companies() {
  return (
    <section className="company-wrapper">
      <div className="company-container container py-3">
        <img src={C1} alt="Company Logo" />
        <img src={C2} alt="Company Logo" />
        <img src={C3} alt="Company Logo" />
        <img src={C4} alt="Company Logo" />
      </div>
    </section>
  );
}
