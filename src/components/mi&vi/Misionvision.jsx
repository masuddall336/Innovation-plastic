import React, { useEffect, useRef, useState } from 'react';
import './Misionvision.css';

export default function MissionVision() {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const [missionVisible, setMissionVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === missionRef.current) {
            setMissionVisible(entry.isIntersecting);
          }
          if (entry.target === visionRef.current) {
            setVisionVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => {
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (visionRef.current) observer.unobserve(visionRef.current);
    };
  }, []);

  return (
    <section className="mission-vision-section">
      <h2 className="section-title">Our Mission & Vision</h2>

      <div 
        ref={missionRef} 
        className={`mission-box ${missionVisible ? 'fade-in' : ''}`}
      >
        <h3 className=''>Our Mission</h3>
        <p>
          Our mission is to deliver high-quality, durable and innovative plastic packaging solutions that empower industries to protect, transport and showcase their products with confidence. We are committed to precision manufacturing, consistent quality, sustainable practices and customer-focused service — ensuring every product we create adds value to the brands we serve.
        </p>
      </div>

      <div 
        ref={visionRef} 
        className={`vision-box ${visionVisible ? 'fade-in' : ''}`}
      >
        <h3>Our Vision</h3>
        <p>
          Our vision is to become a leading regional benchmark in plastic packaging by driving innovation, adopting eco-smart technologies and setting new standards of quality and reliability. We aim to shape the future of packaging with solutions that are safer, stronger, environmentally responsible and trusted by industries nationwide.
        </p>
      </div>
    </section>
  );
}
