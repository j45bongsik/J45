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
        
    `,
    innerArea:styled.article `
        width: 100%; max-width: 1440px; height: 100%;
        margin: 0px auto;
    `,
};



const Section02 = ((props) => {

    // gsap.registerPlugin(ScrollTrigger);

    // const visualAni = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: developer,
    //     rendererSettiongs: {
    //         preserveAspectRatio: "xMidYMid slice"
    //     }
    // }


    return (
        <SectionsStyle.SectionArea>

        </SectionsStyle.SectionArea>
    )
})

export default Section02;
