import React, { useRef, useEffect, useState } from "react";
import { GnbStyle, SectionsStyle } from "../../styles/Sections";
import { GNB_LIST, IMOJI_LIST, REF_LIST } from "../../utils/commom"; 
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import styled from 'styled-components';


const SectionCont = {
    ContentArea:styled.article`
        width: 100%; height: 100%;
        position: relative;
        background: #ededf4;
        display: flex; justify-content: center; align-items: center;
        &:after {
            position: absolute;
            content: "";
            top: 0;
            width: 100%;
            height: 110px;
            background: linear-gradient(0deg,rgba(80,69,171,0),rgba(22, 28, 41, 0.88));
            left: 0;
            z-index: 10;
        }
    `,
    innerArea:styled.article `
    width: 100%; max-width: 1440px; height: 100%;
    margin: 0px auto;
    `,
    
};



const Section05 = ((props) => {


    return (
        <SectionsStyle.SectionArea id="section5" className="section">
                <SectionCont.ContentArea>

                    <SectionCont.innerArea>
                        last
                    </SectionCont.innerArea>
                </SectionCont.ContentArea>
        </SectionsStyle.SectionArea>
        
    );
})

export default Section05;
