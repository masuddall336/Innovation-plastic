import React, { useEffect, useRef, useState } from "react";
import "./Aboutus.css";
import aboutImage from "../../../public/img/about_us.jpg";
import { Helmet } from "react-helmet-async";

export default function Aboutus() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  const [textVisible, setTextVisible] = useState(false);
  const [imgVisible, setImgVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) setTextVisible(true);
            if (entry.target === imgRef.current) setImgVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="about_us" className="about-us">
        <Helmet>
          <meta name="robots" content="index, follow" />
          <title>
            About Innovation Plastic Cans Ltd. | Eco-Friendly Plastic Packaging Manufacturer in Bangladesh
          </title>

          <meta
            name="description"
            content="Innovation Plastic Cans Ltd. (IPCL) is a Bangladeshi manufacturer of eco-friendly, food-grade and industrial plastic packaging solutions, established in 2019."
          />

          {/* Optional – Google ignores it, but safe */}
          <meta
            name="keywords"
            content="plastic packaging manufacturer Bangladesh, eco friendly plastic packaging, food grade plastic containers, industrial plastic packaging, plastic cans manufacturer, sustainable plastic packaging"
          />
        </Helmet>

        <div className="about-container">

          {/* TEXT */}
          <div
            ref={textRef}
            className={`about-text ${textVisible ? "fade-in-text" : ""}`}
          >
            <h2>About Us</h2>
            <p>
              Innovation Plastic Cans Ltd. (IPCL), a sister concern of Sigma Oil Industries Ltd. started its journey in 2019. Initially we started our production for our in-house need. But as part our commitment to national economy and ecology, we are now debuting in Bangladesh plastic market as young leader. We can’t ignore the fact that our present life is too busy to remember the commitment to health. Innovation Plastic Cans Ltd. wants to play the innovative role in that very health point. As we can’t avoid use of plastic in our every phase of daily lives, the only solution is quality plastic. To ensure the protection of both ecology and health, we are introducing latest available technology in all aspects. We have built our production and office building with all modern technological and ecofriendly facilities. Our target market is every industrial sector where plastic container is used. To meet our commitment, we have merged natural and mechanical, architectural & ecological with health & hygiene.
            </p>
          </div>

          {/* IMAGE */}
          <div
            ref={imgRef}
            className={`about-image ${imgVisible ? "fade-in-image" : ""}`}
          >
            <img src={aboutImage} alt="About Us" />
          </div>

        </div>
      </section>
    </>
  );
}
