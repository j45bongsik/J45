import React, { useRef, useEffect, useState } from "react";
import { GnbStyle, SectionsStyle } from "../../styles/Sections";
import { GNB_LIST, IMOJI_LIST, REF_LIST } from "../../utils/commom"; 
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import styled from 'styled-components';
import Lottie from 'react-lottie';


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

    HorizontalArea:styled.div `
        display: flex; justify-content: space-between; align-items: center;
        width: 700vw; height: 100%;
    `,
    HorizontalItem:styled.div `
        width: 100vw; height: 100%;
        display: flex; justify-content: center; align-items: center;
        flex: 0 0 100vw;
        color: #000;
    
    `,

};



const Section04 = ((props) => {

    const refList = REF_LIST()
   

    return (
        <SectionsStyle.SectionArea id="section4" className="section">
            <SectionCont.ContentArea>
                <SectionCont.HorizontalArea>

                    {
                        refList[0].map(({id, title, desc, src}, index) => {
                            return (
                                <SectionCont.HorizontalItem key={id} className="panel">
                                        <p>
                                            {desc}
                                        </p>
                                    </SectionCont.HorizontalItem>
                            )
                        })
                    }

                </SectionCont.HorizontalArea>
            </SectionCont.ContentArea>

        </SectionsStyle.SectionArea>
        
    );
})

export default Section04;
