import React, { useEffect, useState } from "react";
import { GnbStyle, SectionsStyle } from "../../styles/Sections";
import { GNB_LIST, IMOJI_LIST } from "../../utils/commom"; 
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
    flexArea:styled.article `
        display: flex; justify-content: center; align-items: center;
        height: 100%;
    `,
    introTxt:styled.article `
        flex: 1;
        height: 100%;
    `,
    txtList:styled.ul `
        position: relative;
        height: 100%;
    `,
    txtItem:styled.li `
        position: absolute; left: 50%; top: 50%;
        transform: translate(-50%, -50%);
    `,
    txtTag:styled.p `
        font-size: 13.1vw;
        color: #fff;
    `,
    introImg:styled.article `
        flex: 1;
        height: 100%;
    `,
    imojiList:styled.ul `
        position: relative;
        height: 100%;
    `,
    imojiItem:styled.li `
        position: absolute; left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        width: 421px; height: 421px;
    `,
    imojiTag:styled.img `
        display:block; object-fit: cover;
        width: 100%; height: 100%;
    `,
};



const Section02 = ((props) => {

    const imojiList = IMOJI_LIST()


    return (
        <SectionsStyle.SectionArea className="section02">
            <SectionCont.ContentArea>
                <SectionCont.innerArea>
                    <SectionCont.flexArea>
                        <SectionCont.introTxt>
                            <SectionCont.txtList>
                                {
                                    imojiList[0].map(({id, alt, src,text},index) => {
                                        
                                        return (

                                            <SectionCont.txtItem key={id} className={"text0"+ id}>
                                                <SectionCont.txtTag>
                                                    {text}
                                                </SectionCont.txtTag>
                                            </SectionCont.txtItem>
                                            )
                                    })
                                }
                            </SectionCont.txtList>
                        </SectionCont.introTxt>


                        <SectionCont.introImg>
                            
                                    <SectionCont.imojiList>
                                        {
                                            imojiList[0].map(({id, alt, src, text},index) => {
                                                return (

                                                    <SectionCont.imojiItem key={id}>
                                                        <SectionCont.imojiTag src={src} alt={alt}>

                                                        </SectionCont.imojiTag>
                                                    </SectionCont.imojiItem>
                                                    )
                                            })
                                        }
                                    </SectionCont.imojiList>
                             
                        </SectionCont.introImg>
                    </SectionCont.flexArea>
                    {/* <img className="imoji01" src={imoji01} alt="Imoji 1" />
                    <img className="imoji02" src={imoji02} alt="Imoji 2" />
                    <img className="imoji03" src={imoji03} alt="Imoji 3" />
                    <img className="imoji04" src={imoji04} alt="Imoji 4" /> */}
                </SectionCont.innerArea>
            </SectionCont.ContentArea>

        </SectionsStyle.SectionArea>
        
    );
})

export default Section02;
