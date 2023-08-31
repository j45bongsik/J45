import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import gsap from "gsap";

const gsapSection = () => {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    //section1 developer 배경
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
                transform: "scale(8.0)",
                filter: "blur(6px)",
            }
        ),
    });



    const slides = document.querySelectorAll(".vrSection");

    function initParallax() {
        slides.forEach((slide, i) => {
            let imageWrappers = slide.querySelectorAll(".vrSection > article");
    
            gsap.fromTo(
            imageWrappers,
            {
                y: "-30vh",
            },
            {
                y: "30vh",
                scrollTrigger: {
                trigger: slide,
                scrub: true,
                start: "top bottom", // position of trigger meets the scroller position
                },
                ease: "none",
            }
            );
        });
    }

    function init() {
        initParallax();
    }
    init();

    
};

export default gsapSection;
