import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import gsap from "gsap";

const gsapSection = () => {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    
    //section1 developer 배경
    ScrollTrigger.create({
        // 어디에 닿으면 반응할건지
        trigger: "#section2",
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

    const vrSections = document.querySelectorAll('.vrSection');

    vrSections.forEach((vrSection, index) => {
            const img1 = vrSection.querySelector('.poligon:nth-child(1) > img');
            const img2 = vrSection.querySelector('.poligon:nth-child(2) > img');
            const img3 = vrSection.querySelector('.poligon:nth-child(3) > img');
        if (index % 2 === 0) {
            
            ScrollTrigger.create({
                trigger: vrSection,
                scrub: 1,
                start: 'center 100%',
                end: 'center 50%',
                animation: gsap.fromTo(
                    img1,
                    {
                        x: '150%',
                        y: '0%',
                        backgroundSize: 0,
                        scale: 1,
                    },
                    {
                        x: '-10%',
                        y: '0%',
                        scale: 1.2,
                    }
                ),
            });

            ScrollTrigger.create({
                trigger: vrSection,
                scrub: 1,
                start: 'center 75%',
                end: 'center 25%',
                animation: gsap.fromTo(
                    img2,
                    {
                        x: '150%',
                        y: '0%',
                        backgroundSize: 0,
                        scale: 1,
                    },
                    {
                        x: '0%',
                        y: '0%',
                        scale: 1.2,
                    }
                ),
            });

            ScrollTrigger.create({
                trigger: vrSection,
                scrub: 1,
                start: 'center 50%',
                end: 'center 0%',
                animation: gsap.fromTo(
                    img3,
                    {
                        x: '150%',
                        y: '0%',
                        backgroundSize: 0,
                        scale: 1,
                    },
                    {
                        x: '10%',
                        y: '0%',
                        scale: 1.2,
                    }
                ),
            });
        } else if (index % 2 === 1) {
            ScrollTrigger.create({
                trigger: vrSection,
                scrub: 1,
                start: 'center 100%',
                end: 'center 50%',
                animation: gsap.fromTo(
                    img1,
                    {
                        x: '-500%',
                        y: '0%',
                        backgroundSize: 0,
                        scale: 1,
                    },
                    {
                        x: '10%',
                        y: '0%',
                        scale: 1.2,
                    }
                ),
            });

            ScrollTrigger.create({
                trigger: vrSection,
                scrub: 1,
                start: 'center 75%',
                end: 'center 25%',
                animation: gsap.fromTo(
                    img2,
                    {
                        x: '-500%',
                        y: '0%',
                        backgroundSize: 0,
                        scale: 1,
                    },
                    {
                        x: '0%',
                        y: '0%',
                        scale: 1.2,
                    }
                ),
            });

            ScrollTrigger.create({
                trigger: vrSection,
                scrub: 1,
                start: 'center 50%',
                end: 'center 0%',
                animation: gsap.fromTo(
                    img3,
                    {
                        x: '-500%',
                        y: '0%',
                        backgroundSize: 0,
                        scale: 1,
                    },
                    {
                        x: '-10%',
                        y: '0%',
                        scale: 1.2,
                    }
                ),
            });
        }
    });

    let sections4 = gsap.utils.toArray(".panel");
    gsap.to(sections4, {
        xPercent: -100 * (sections4.length - 1),
        ease: "none",
        // duration: 122.5,
        scrollTrigger: {
        trigger: "#section4",
        // markers: true,
        pin: true,
        scrub: 1,
        end: "+=7000",
        },
    });

    
};

export default gsapSection;
