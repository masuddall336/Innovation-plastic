import React, { useEffect } from "react";
import "./Goalprinciple.css";

const Goalprinciple = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-anim");

    const onScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fgp-container">
      <h1 className="fgp-title scroll-anim">Our Goals & Principles</h1>

      {/* Goals */}
      <div className="fgp-section">
        <h2 className="fgp-heading scroll-anim">Goals</h2>
        <ul className="fgp-list">
          {/* <li className="scroll-anim hover-effect">To confirm the commitment.</li> */}
          <li className="scroll-anim hover-effect">Reduce plastic waste through efficient design and optimized material usage</li>
          {/* <li className="scroll-anim hover-effect">To exceed the customers’ satisfaction.</li> */}
          <li className="scroll-anim hover-effect">Minimize production scrap and promote in-house recycling</li>
          <li className="scroll-anim hover-effect">To stay ahead in research & development.</li>
          <li className="scroll-anim hover-effect">To confirm the commitment to ecology.</li>
        </ul>
      </div>

      {/* Principles */}
      <div className="fgp-section">
        <h2 className="fgp-heading scroll-anim">Principles</h2>
        <ul className="fgp-list">
          <li className="scroll-anim hover-effect">No compromise in quality.</li>
          <li className="scroll-anim hover-effect">Highest flexibility in troubleshooting.</li>
          <li className="scroll-anim hover-effect">24/7 customer service.</li>
        </ul>
      </div>
    </div>
  );
};

export default Goalprinciple;
