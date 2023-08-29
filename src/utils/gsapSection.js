import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import gsap from "gsap";

const gsapSection = () => {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    ScrollTrigger.create({
        // 어디에 닿으면 반응할건지
        trigger: ".section02",
        scrub: 1,
        // 어디다가 적용할건지
        animation: gsap.fromTo(
            ".developer",
            {
                
            },
            {
                transform: "scale(4.0)",
                filter: "blur(6px)",
            }
        ),
    });

    
};

export default gsapSection;