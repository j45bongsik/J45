import styled from 'styled-components';
import '../assets/fonts/_Fonts.scss';



export const SectionsStyle = {

    SectionArea:styled.section `
        width: 100%; height: 100vh;
        overflow: hidden;
    `,
    // Sectioninner:styled.article `
    //     width: 100%; max-width: 1440px; height: 100%;
    //     margin: 0px auto;
    // `,
    VrSection:styled.section `
        width: 100%; height: 100vh;
        overflow: hidden;
        position: relative;
    `,
    SectionBg:styled.img `
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* filter: blur(3px); */
    `,
    SectionBgDimm:styled.div `
        position: absolute; top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(22, 28, 41, 0.88);
        z-index: -1;
    `,
    VrInner:styled.div `
        width: 100%; max-width: 1440px; height: 100%;
        margin: 0px auto;
    `,
    VrCont:styled.article `
        display: flex; justify-content: space-between; align-items: center;
        width: 100%; height: 100%;
    `,
    VrTextArea:styled.article `
        width: 100%; height: 100%;
        display: flex; flex-direction: column; justify-content: flex-end;
        padding-bottom: 100px;
    `,
    VrTitleArea:styled.article `
        color: #fff;
        display: flex; justify-content: flex-start; align-items: flex-end;
    `,
    TitleHead:styled.article `
        font-size: 50px;
        line-height: 1;
    `,
    TitleBody:styled.article `
        display: flex; justify-content: center; align-items: center;
        padding: 0px 5px;
        margin-left: 10px;
        margin-bottom: 30px;
        width: 100px; height: 30px;
        background: #000;
        color: #fff;
        text-align: center;
        border-radius: 3px;
        text-transform: uppercase;
        font-size: 14px;
        font-family: 'Noto sans Light';
        @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
            margin-bottom: 18px;
        }
    `,
    VrTag:styled.p `
    
    `,
    VrTitle:styled.h3 `
        font-family: 'Noto Sans Light';
    `,
    VrTitleSub:styled.p `
        font-family: 'Noto Sans Bold';
        font-size: 62px;
        color: transparent;
        -webkit-text-stroke: 1px #fff;
        @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
            font-size: 50px;
            color: #fff;
        }
    `,
    VrDescArea:styled.article `
    
    `,
    VrDesc:styled.p `
    
    `,
    VrBtnArea:styled.div `
        display: flex; justify-content: flex-start; align-items: center;
        a {
            position: relative;
            display: block; padding: 0px 10px; height: 30px;
            text-align: center;
            line-height: 30px;
            color: #fff;
            &:after {
                content: ''; position: absolute; left: 10px; bottom: 0;
                width: 0px; height: 2px;
                transition: 0.3s;
                background: #fff;
            }
            &:hover {
                &:after {
                    width: calc(100% - 20px);
                }
            }
        }
    `,
    VrBtn:styled.button `
        &:not(:first-child) {
            margin-left: 10px;
        }
    `,
    VrImg:styled.article `
        img {
            object-fit: cover;
        }
    `
}