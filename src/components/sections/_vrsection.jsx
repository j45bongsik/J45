import React, { useEffect, useState } from "react";
import { GnbStyle, SectionsStyle } from "../../styles/Sections";
import { GNB_LIST, IMOJI_LIST, VR_LIST, MID_LIST } from "../../utils/commom"; 
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
    
};



const VrSection = ((props) => {

    
    





    
    const [vrList] = VR_LIST();
    const [midList] = MID_LIST();
    

    return (
        <>
        {
            vrList.map(({id, alt, src, title, subtitle, desc, frac, skill, link},index) => {
                return (
                    <SectionsStyle.VrSection key={id} className="vrSection">
                        

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


                                    
                                    {
                                        midList.map(({id, src, alt}) => {
                                            return (
                                                // <SectionsStyle.VrImageArea>
                                                //     <SectionsStyle.VrPoligon>
                                                //         <SectionsStyle.VrPoliImg key={id} src={src} alt={alt}></SectionsStyle.VrPoliImg>
                                                //     </SectionsStyle.VrPoligon>
                                                // </SectionsStyle.VrImageArea>
                                                <img key={id} src={src} alt={alt}></img>
                                            )

                                        })
                                    }


                                    
                                </SectionsStyle.VrInner>  
                                <SectionsStyle.SectionBg src={src} alt={alt} className={"vrBg" + (id+3)}></SectionsStyle.SectionBg>
                                <SectionsStyle.SectionBgDimm></SectionsStyle.SectionBgDimm>      
                            </SectionsStyle.VrCont>
                        
                    </SectionsStyle.VrSection>
                )

            })
        }

        
        </>

    );
})

export default VrSection;
