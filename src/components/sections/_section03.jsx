import React, { useEffect, useState } from "react";
import { GnbStyle, SectionsStyle } from "../../styles/Sections";
import { GNB_LIST, IMOJI_LIST, VR_LIST } from "../../utils/commom"; 
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
    VrImageArea:styled.article `
        flex: 1; 
        height: 100%;
        position: relative;
    `,
    VrPoligon:styled.div `
        height: 100%;
        position: absolute;
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        &:nth-child(1) {
            z-index: 1;
        }
        &:nth-child(2) {
            z-index: 2;
        }
        &:nth-child(3) {
            z-index: 3;
        }
    `,
    VrPoliImg:styled.img `
        object-fit: cover;
        height: 100%;
        clip-path: polygon(73% 0, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    `,
};



const Section03 = ((props) => {

    const [vrList] = VR_LIST();
    
    return (
        <>
        <SectionsStyle.SectionArea id="section3" className="section">
        {
            vrList.map(({ id, alt, src, title, subtitle, desc, skill, link, midSrc, midAlt }, index) => {
                const sectionNumber = index + 1;

                return (
                    <SectionsStyle.VrSection key={id} className={`vrSection vrSection${sectionNumber}`}>
                        

                            <SectionsStyle.VrCont>
                                <SectionsStyle.VrInner>
                                    <SectionsStyle.VrTextArea>
                                        <SectionsStyle.VrTitleArea>
                                            <SectionsStyle.TitleHead>
                                                
                                                <SectionsStyle.VrTitle>
                                                    {subtitle}
                                                </SectionsStyle.VrTitle>
                                                <SectionsStyle.VrTitleSub>
                                                    {title}
                                                    <SectionsStyle.VrTag>
                                                        {skill}
                                                    </SectionsStyle.VrTag>
                                                </SectionsStyle.VrTitleSub>
                                            </SectionsStyle.TitleHead>
                                        </SectionsStyle.VrTitleArea>

                                        <SectionsStyle.VrDescArea>
                                            <SectionsStyle.VrDesc>
                                                {desc}
                                            </SectionsStyle.VrDesc>
                                        </SectionsStyle.VrDescArea>
                                        <SectionsStyle.VrBtnArea>
                                            <Link to={link} target="_blank" rel="noopener noreferrer" alt={title + " 새창으로 열기"}>바로가기</Link>
                                        </SectionsStyle.VrBtnArea>
                                        
                                    </SectionsStyle.VrTextArea>

                                    <SectionCont.VrImageArea>
                                        {/* {
                                            midSrc.map((map02, index) => {
                                                return (
                                                    <SectionCont.VrPoligon key={map02} className="poligon">
                                                        <SectionCont.VrPoliImg src={midSrc[index]} alt={midAlt[index]}></SectionCont.VrPoliImg>
                                                    </SectionCont.VrPoligon>
                                                )
                                            })
                                        } */}
                                        <SectionCont.VrPoligon className="poligon">
                                            <SectionCont.VrPoliImg src={midSrc} alt={midAlt}></SectionCont.VrPoliImg>
                                        </SectionCont.VrPoligon>
                                    </SectionCont.VrImageArea>

                                    
                                </SectionsStyle.VrInner>  
                                <SectionsStyle.SectionBg src={src} alt={alt} className={"vrBg" + (id+3)}></SectionsStyle.SectionBg>
                                <SectionsStyle.SectionBgDimm></SectionsStyle.SectionBgDimm>      
                            </SectionsStyle.VrCont>
                    </SectionsStyle.VrSection>
                )

            })
        }
        </SectionsStyle.SectionArea>
        
        </>

    );
})

export default Section03;
