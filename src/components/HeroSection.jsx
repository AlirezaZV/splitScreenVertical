import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ leftScreen, rightScreen }) => {
  const [hoverPosition, setHoverPosition] = useState(50);
  const [selectedService, setSelectedService] = useState('');
  const sliderLineRef = useRef(null);
  const beforeImageRef = useRef(null);
  const afterImageRef = useRef(null);
  const circleRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power1.out" }
      )
      .fromTo(
        beforeImageRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1, ease: "power1.out" },
        "<"
      )
      .fromTo(
        afterImageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power1.out" },
        "<"
      );
  }, []);

  // Smooth animation using GSAP
  useEffect(() => {
    gsap.to(beforeImageRef.current, {
      clipPath: `inset(0 ${100 - hoverPosition}% 0 0)`,
      duration: 0.4, // Smooth transition duration
      ease: "power1.out",
    });
    gsap.to(sliderLineRef.current, {
      left: `${hoverPosition}%`,
      duration: 0.4,
      ease: "power1.out",
    });
  }, [hoverPosition]);

  // Zoom effect when selectedService === "page1"
  useEffect(() => {
    if (selectedService === "page1") {   
      setTimeout(() => {
        gsap.to(beforeImageRef.current, {
        scale: 20, // Zoom 4x
        duration:3,
        ease: "power4.inOut",
      });
      }, 500);   

    } else {
      gsap.to(beforeImageRef.current, {
        scale: 1, // Reset zoom
        duration: 1,
        ease: "power4.in",
      });
    }
  }, [selectedService]);

  // Animate the black circle for page2gram transition
  useEffect(() => {
    if (selectedService === "page2") {
      setTimeout(() => {
        const timeline = gsap.timeline();
        timeline
          .to(circleRef.current, {
            scale: 30, // Grow circle to cover the screen
            duration: 1,
            ease: "power4.inOut",
          });
      }, 1000);
    }
  }, [selectedService, navigate]);


  // Navigate with delay and animation
  useEffect(() => {
    if (selectedService) {
      setTimeout(() => {
        const timeline = gsap.timeline();
        timeline
          .to(".before-after-container", {
            opacity: selectedService === "page2" ? 1 : 0,
            duration: 0.5,
            ease: "power1.inOut",
          })
          .call(() => {
            navigate(`/${selectedService}`);
          });
      }, selectedService === "page1" ? 1800 : 1100);
    }
  }, [selectedService, navigate]);


  // Track mouse movement
  const handleMouseMove = (e) => {
    if (selectedService === '') {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const xPos = ((e.clientX - left) / width) * 100; // Calculate percentage
    setHoverPosition(100 - Math.max(0, Math.min(100, xPos))); // Clamp between 0% and 100%
    }
  };

  const handleMouseLeave = () => {
    if (selectedService === '') {
      setHoverPosition(50); // Reset to center on mouse leave
    }
  };

  const handleMouseClick = () => {
    if (hoverPosition > 50) {
      setHoverPosition(100)
      setSelectedService('page1')
    } else {
      setHoverPosition(0)
      setSelectedService('page2')
    }
  }

  return (
    <div
      className="before-after-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseClick}
      ref={containerRef}
    >
      {/* After Image */}
      <img src={rightScreen} alt="2" className="after-image" ref={afterImageRef}/>

      {/* Before Image */}
      <img src="/2.jpg" alt=""/>

      {/* Black Circle for page2 Animation */}
      <div className="black-circle" ref={circleRef}></div>

      <img
        src={leftScreen}
        alt="1"
        className="before-image"
        ref={beforeImageRef}
      />
    </div>
  );
};

export default HeroSection;
