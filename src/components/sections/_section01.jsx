import React, { useState } from "react";
import { GnbStyle, SectionsStyle } from "../../styles/Sections";
import { GNB_LIST, TAG_LIST } from "../../utils/commom"; 
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import developer from '../../assets/images/developer.json';


const SectionCont = {
    ContentArea:styled.article`
        width: 100%; height: 100%;
        position: relative;
        background: #161c29;
        display: flex; justify-content: center; align-items: center;
        &:after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 100%;
            height: 110px;
            background: linear-gradient(0deg,#161c29,rgba(80,69,171,0));
            left: 0;
            z-index: 10;
        }
    `,
    innerArea:styled.article `
        width: 100%; max-width: 1440px; height: 100%;
        margin: 0px auto;
    `,
    BgArea:styled.article `
        
        
    `,
    TxtAreaDimm:styled.div `
        position: absolute; left: 0; top: 0;
        width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.4);
        z-index: 1;
    `,
    tag:styled.div `
        position: absolute; left: 0; top: 0;
        font-family: 'NeoDunggeunmoPro-Regular';
        color: #fff;
        /* font-weight: 600; */
        font-size: 24px;
        z-index: 2;
        animation: infinity 4s ease-in-out infinite, fontSizeAnimation 3s infinite;
        
        @keyframes fontSizeAnimation {
            0%, 100% {
                font-size: 24px;
            }
            50% {
                font-size: 28px;
            }
        }

        @keyframes infinity {
            0%, 100% {
                transform: translate(0, 0); /* Initial and final position */
            }
            25% {
                transform: translate(20px, 20px); /* Move right and down */
            }
            50% {
                transform: translate(0, 40px); /* Move down */
            }
            75% {
                transform: translate(-20px, 20px); /* Move left and down */
            }
        }

    `,
    TxtArea:styled.article`
        position: absolute;
        width: 100%; height: 100%;
        left: 50%; top: 50%; transform: translate(-50%, -50%);
        margin: 0 auto;
        display: flex; justify-content: flex-start; align-items: center;
        text-align: center;
        z-index: 3;
        h2 {
            width: 100%;
            font-size: 13vw;
            font-weight: 100;
            line-height: 0.9;
            color: #fff;
            text-align: center;
            font-family: 'Montserrat Thin';
            z-index: 2;
            animation: heartbeat 1.5s infinite;

            em {
                font-weight: 900;
                color: #17f5a4;
                filter: drop-shadow(0px 0px 26px rgba(23,245,164,.19));
                font-style: normal;
                font-family: 'Montserrat Ex Bold';
                }               
        }

        @keyframes heartbeat {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
    `,
};



const Section01 = ((props) => {

    const tagList = TAG_LIST()

    gsap.registerPlugin(ScrollTrigger);

    const visualAni = {
        loop: true,
        autoplay: true,
        animationData: developer,
        rendererSettiongs: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

     // Calculate random positions within parent boundaries
    const getRandomPosition = () => {
        const parentWidth = window.innerWidth; // Get the parent width
        const parentHeight = window.innerHeight; // Get the parent height
        const tagWidth = 100; // Adjust this based on the tag size
        const tagHeight = 20; // Adjust this based on the tag size

        const randomLeft = Math.random() * (parentWidth - tagWidth);
        const randomTop = Math.random() * (parentHeight - tagHeight);

        return { left: randomLeft, top: randomTop };
    };

    const getRandomColor = () => {
        const randomColor = `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
        return randomColor;
    };


    return (
        <SectionsStyle.SectionArea id="section1" className="section">
            <SectionCont.ContentArea>
                {/* <SectionCont.innerArea> */}
                    <SectionCont.BgArea className="developer">
                        <Lottie options={visualAni}/>
                    </SectionCont.BgArea>
                    <SectionCont.TxtAreaDimm></SectionCont.TxtAreaDimm>
                    {
                        tagList[0].map(({id, tag},index) => {

                            const { left, top } = getRandomPosition(); // Get random position
                            const tagStyle = {
                                position: 'absolute',
                                left: `${left}px`,
                                top: `${top}px`,
                                color: getRandomColor(),
                                animationDuration: `${Math.random() * 6 + 4}s`,
                            };

                            return (

                                <SectionCont.tag key={id} style={tagStyle} className="tag">
                                {tag}
                                </SectionCont.tag>
                            )
                        })
                    }
                    <SectionCont.TxtArea>
                        <h2 className="visualTxt">
                            PORT<br />
                            <em>FOLIO</em>
                        </h2>
                    </SectionCont.TxtArea>
                    
                {/* </SectionCont.innerArea> */}
            </SectionCont.ContentArea>
            
        </SectionsStyle.SectionArea>
    )
})

export default Section01;
