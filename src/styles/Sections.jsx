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
        display: flex; justify-content: center; align-items: center;
    `,
    VrCont:styled.article `
        display: flex; justify-content: space-between; align-items: center;
        width: 100%; height: 100%;
    `,
    VrTextArea:styled.article `
        flex: 1%; height: 100%;
        display: flex; flex-direction: column; justify-content: flex-end;
        padding-bottom: 200px;
        z-index: 4;
    `,
    VrTitleArea:styled.article `
        color: #fff;
        display: flex; justify-content: flex-start; align-items: flex-end;
    `,
    TitleHead:styled.article `
        font-size: 32px;
        line-height: 1;
    `,
    TitleBody:styled.article `

    `,
    VrTag:styled.p `
        display: flex; justify-content: center; align-items: center;
        padding: 0px 5px;
        width: 100px; height: 30px;
        /* background: #000; */
        color: #fff;
        text-align: center;
        border-radius: 3px;
        text-transform: uppercase;
        font-size: 12px;
        font-family: 'Noto sans Light';
        margin-left: -18px;
        margin-bottom: -6px;
    `,
    VrTitle:styled.h3 `
        font-family: 'Montserrat Thin','Noto Sans';
        letter-spacing: -1px;
        margin-top: 10px;
        /* font-size: 16px; */
    `,
    VrTitleSub:styled.p `
        display: flex; justify-content: flex-start; align-items: flex-end;
        font-family: 'Noto Sans Bold';
        font-size: 62px;
        margin-top: 3px;
    `,
    VrDescArea:styled.article `
        margin-top: 20px;
        color: #fff;
    `,
    VrDesc:styled.p `
    
    `,
    VrBtnArea:styled.div `
        display: flex; justify-content: flex-start; align-items: center;
        margin-top: 30px;
        a {
            position: relative;
            display: block;height: 40px;
            padding: 0px 20px;
            text-align: center;
            line-height: 40px;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 2px;
            transition: 0.3s;
            &:hover {
                background: #fff;
                color: #000;
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
    `,
    
}