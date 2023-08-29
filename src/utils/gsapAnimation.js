import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const gsapAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  // 애니메이션 기본값
  gsap.to(".developer", {
    scrollTrigger: ".developer",
    // transform: "translate(-50%,-50%) rotate(0deg)",
    duration: 1.3,
  });
  
};

export default gsapAnimation;