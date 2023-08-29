import React, { useState } from "react";
import { GnbStyle, SectionsStyle } from "../../styles/Sections";
import { GNB_LIST } from "../../utils/commom"; 
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
        background: #000;
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
    TxtArea:styled.article`
        position: absolute;
        width: 100%; height: 100%;
        left: 50%; top: 50%; transform: translate(-50%, -50%);
        margin: 0 auto;
        display: flex; justify-content: flex-start; align-items: center;
        text-align: center;
        h2 {
            width: 100%;
            font-size: 13vw;
            font-weight: 100;
            line-height: 0.9;
            color: #fff;
            text-align: center;
            font-family: 'Noto Sans DemLight';
            z-index: 2;
            em {
                font-weight: 900;
                color: #17f5a4;
                filter: drop-shadow(0px 0px 26px rgba(23,245,164,.19));
                font-style: normal;
                font-family: 'Noto Sans Bold';
                }               
        }
        &:before {
            content: ''; position: absolute;
            width: 100vw; height: 100vh;
            background: rgba(0,0,0,0.4);
            z-index: 1;
        }
    `,
};



const Section01 = ((props) => {

    gsap.registerPlugin(ScrollTrigger);

    const visualAni = {
        loop: true,
        autoplay: true,
        animationData: developer,
        rendererSettiongs: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }


    return (
        <SectionsStyle.SectionArea className="section01">
            <SectionCont.ContentArea>
                {/* <SectionCont.innerArea> */}
                    <SectionCont.BgArea className="developer">
                        <Lottie options={visualAni}/>
                    </SectionCont.BgArea>
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
