import React, { useState, useEffect, useRef } from "react";
import { LoadingStyle } from "../../styles/Loading";
import Lottie from 'react-lottie';
import { gsap } from 'gsap';
import ckdAnimation from '../../assets/images/checkbox.json';
import run01 from '../../assets/images/run01.json';
import run02 from '../../assets/images/run02.json';
import run03 from '../../assets/images/run03.json';
import run04 from '../../assets/images/run04.json';
import run05 from '../../assets/images/run05.json';


const Loading = () => {
    const [loading, setLoading] = useState(0);
    const aniAreaRef = useRef(null);
    

    useEffect(() => {
        const interval = setInterval(() => {
            setLoading(prevLoading => {
                const newLoading = prevLoading + 1;
                return newLoading <= 100 ? newLoading : prevLoading;
            });
        }, 50); // Increase every 50ms for smoother animation
    
        setTimeout(() => {
            clearInterval(interval);
            setLoading(100);
            document.documentElement.classList.remove("load"); // Add "active" class to <html>
            document.body.classList.remove("load"); // Add "active" class to <body>
            document.querySelector(".loading").classList.add("off");
        }, 5000);
        
        return () => {
            clearInterval(interval);
        };
    }, []);

    const runAnimations = [run01, run02, run03, run04, run05];

    useEffect(() => {
        // Don't need to register 'window' as a plugin, just use 'gsap'.
        const tl = gsap.timeline({ repeat: -1 });

        runAnimations.forEach((animationData, index) => {
            const animationContainer = aniAreaRef.current.children[index];
            
            // Calculate a random Y-offset within the range of the screen height
            const screenHeight = window.innerHeight;
            const animationHeight = 100; // Height of the animation container
            const maxYOffset = screenHeight - animationHeight;
            const randomYOffset = Math.random() * maxYOffset;

            if (index <= 0) {
                tl.fromTo(
                    animationContainer,
                    { x: '100%', y: randomYOffset },
                    { x: '-100%', y: randomYOffset, duration: 5, ease: "linear" },
                    0
                );
            } else if (index <= 1) {
                tl.fromTo(
                    animationContainer,
                    { x: '100%', y: randomYOffset},
                    { x: '-100%', y: randomYOffset, duration: 10, ease: "steps(12)"},
                    0
                );
            } else if (index <= 2) {
                tl.fromTo(
                    animationContainer,
                    { x: '-100%', y: randomYOffset },
                    { x: '100%', y: randomYOffset, duration: 6, ease: "linear" },
                    0
                );
            } else if (index <= 3) {
                tl.fromTo(
                    animationContainer,
                    { x: '-100%', y: randomYOffset },
                    { x: '100%', y: randomYOffset, duration: 5, ease: "ease-in-out" },
                    0
                );
            } else if (index <= 4) {
                tl.fromTo(
                    animationContainer,
                    { x: '-100%', y: randomYOffset },
                    { x: '100%', y: randomYOffset, duration: 6.5, ease: "ease-out" },
                    0
                );
            }
        });

        tl.play();
    }, []);
    
    return (
        <LoadingStyle.loadingArea className="loading active">
            <LoadingStyle.aniArea ref={aniAreaRef}>
                {runAnimations.map((animationData, index) => (
                    <div key={index} style={{ width: '100%', height: '100px', margin: '10px' }}>
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: false,
                                animationData: animationData,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice'
                                }
                            }}
                        />
                    </div>
                ))}
            </LoadingStyle.aniArea>
            <LoadingStyle.titleArea>
                <LoadingStyle.titleH2>LOADING</LoadingStyle.titleH2>
                <LoadingStyle.loadingTxt>{loading}%</LoadingStyle.loadingTxt>
            </LoadingStyle.titleArea>
        </LoadingStyle.loadingArea>
    );
};

export default Loading;
