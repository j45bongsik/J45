import React, { useRef, useEffect, useState } from "react";
import { GnbStyle, SectionsStyle } from "../../styles/Sections";
import { GNB_LIST, IMOJI_LIST, REF_LIST } from "../../utils/commom"; 
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import developer02 from '../../assets/images/developer02.json';


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
    BgFixedArea:styled.article `
        position: absolute; 
        top: 0; left: 0; width: 100vw; height: 100vh;
        border: 1px solid red;
    `,
    BgDeveloper:styled.div `
        width: 300px;
    `,
    BgTitle:styled.h3 `
        position: absolute;
        left: 50%; top: 50%; transform: translate(-50%, -50%);
        font-family: 'Montserrat Light';
        font-size: 62px;
        white-space: nowrap;
        color: #000;
        em {
            font-style: normal;
            font-family: 'Montserrat Black';
            color: #0000;
            background: linear-gradient(45deg,#ff9a4b 26%,#ff4ac8 76%,#8349ff 100%);
            -webkit-background-clip: text;
        }
    `,
    HorizontalArea:styled.div `
        display: flex; justify-content: space-between; align-items: center;
        width: 700vw; height: 100%;
        background-color: #ededf4;
    `,
    HorizontalItem:styled.div `
        width: 100vw; height: 100%;
        display: flex; justify-content: center; align-items: center;
        flex: 0 0 100vw;
        color: #000;
        b
    `,
    ItemBox:styled.article `
        position: relative;
        width: 500px; height: 300px;
        border-radius: 100px; 
        background-color: linear-gradient(90deg,#161c29 10%,rgba(22,28,41,0));;
        background-size: cover;
        padding: 40px;
        overflow: hidden;
        /* &:after {
            content: ''; position: absolute;
            width: 100%; height: 100%; left: 0; top: 0;
            
        } */
    `,
    BoxBgArea:styled.article `
        position: absolute; left:0; top: 0;
        width: 100%; height: 100%;
        
    `,
    BoxImg:styled.img `
        width: 100%; height: 100%;
        object-fit: cover;
        z-index: 1;
    `,
    BoxDimm:styled.div `
        position: absolute; left: 0; top:0;
        height: 100%;
        width: 50%;
        background: #161c29;
        &:after {
            content: '';
            position: absolute; right: -99%; top: 0;
            width: 100%; height: 100%;
            /* transform: translateX(-50%); */
            background: linear-gradient(90deg,#161c29 10%,rgba(22,28,41,0));
        }
    `,
    BoxContArea:styled.article `
        height: 100%;
        display: flex; flex-direction: column; justify-content: space-between;
        position: relative;
        z-index: 2;
        a {
            display: inline-block;
            width: 80px;
            height: 30px;
            line-height: 30px;
            padding: 0px 10px; 
            color: #fff;
            border: 1px solid #fff;
            border-radius: 15px;
            transition: 0.3s;
            &:hover {
                border: 1px solid #5856d4;
                background: #5856d4;
            }
            &.type02 {
                &:hover {
                    border: 1px solid #fd4e4e;
                    background: #fd4e4e;
                }
            }
            &.type03 {
                &:hover {
                    border: 1px solid #fda34e;
                    background: #fda34e;
                }
            }
            &.type04 {
                &:hover {
                    background: #4ef7fd;
                    border: 1px solid #4ef7fd;
                }
            }
            &.type05 {
                &:hover {
                    background: #fd4ec3;
                    border: 1px solid #fd4ec3;
                }
            }
            &.type06 {
                &:hover {
                    background: #fd4e4e; 
                    border: 1px solid #fd4e4e; 
                }
            }
            &.type07 {
                &:hover {
                    background: #cefd4e; 
                    border: 1px solid #cefd4e; 
                }
            }
        }
    `,
    BoxTitle:styled.h3 `
        font-size: 52px;
        font-family: 'Montserrat Ex Bold Only Not Ko', 'Noto Sans Bold Only Ko';
        color: #fff;
        line-height: 1;
        em {
            color: #5856d4;
            font-style: normal;
            &.type02 {
                color: #fd4e4e;
            }
            &.type03 {
                color: #fda34e;
            }
            &.type04 {
                color: #4ef7fd;
            }
            &.type05 {
                color: #fd4ec3;
            }
            &.type06 {
                color: #fd4e4e; 
            }
            &.type07 {
                color: #cefd4e; 
            }
        }
    `,
    BoxDesc:styled.p `
        color: #fff;
        
    `,
};



const Section04 = ((props) => {

    const refList = REF_LIST()

    gsap.registerPlugin(ScrollTrigger);

    const visualAni02 = {
        loop: true,
        autoplay: true,
        animationData: developer02,
        rendererSettiongs: {
            preserveAspectRatio: "xMidYMid slice"
        },
        width: 200,
    }
   

    return (
        <SectionsStyle.SectionArea id="section4" className="section">
                <SectionCont.BgFixedArea>
                    <SectionCont.BgDeveloper className="developer02">
                        <Lottie options={visualAni02} />

                    </SectionCont.BgDeveloper>

                    <SectionCont.BgTitle>
                        REFERENCE <em>GUIDE</em>
                    </SectionCont.BgTitle>
                </SectionCont.BgFixedArea>
                <SectionCont.HorizontalArea>

                    {
                        refList[0].map(({id, title, desc, src, itemBg}, index) => {
                            return (
                                <SectionCont.HorizontalItem key={id} className="panel">
                                    <SectionCont.ItemBox>
                                        <SectionCont.BoxBgArea>
                                            <SectionCont.BoxDimm></SectionCont.BoxDimm>
                                            <SectionCont.BoxImg src={itemBg}></SectionCont.BoxImg>
                                        </SectionCont.BoxBgArea>
                                        <SectionCont.BoxContArea>
                                            <SectionCont.BoxTitle>{title}</SectionCont.BoxTitle>
                                            <SectionCont.BoxDesc>{desc}</SectionCont.BoxDesc>
                                            <Link to={src} target="_blank" rel="noopener noreferrer" alt={title + " 새창으로 열기"} className={"type0" + (id+1)}>바로가기</Link>
                                        </SectionCont.BoxContArea>
                                    </SectionCont.ItemBox>
                                </SectionCont.HorizontalItem>
                            )
                        })
                    }

                </SectionCont.HorizontalArea>
        </SectionsStyle.SectionArea>
        
    );
})

export default Section04;
