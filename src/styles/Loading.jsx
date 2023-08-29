import styled from 'styled-components';
import '../assets/fonts/_Fonts.scss';

export const LoadingStyle = {
    loadingArea:styled.section `
        position: fixed; left: 0; top: 0;
        width: 100%; height: 100%;
        display: flex; justify-content: center; align-items: center;
        z-index: 9999;
        background: #161c29;
        &.off {
            animation: fadeOut 1s ease 1s forwards;
        }
        @keyframes fadeOut {
            to {
                opacity: 0;
                display: none;
            }
        }
    `,
    headArea:styled.article `

    `,
    checkBox:styled.p `
        position: relative;
        label {
            padding-right: 25px;
            &:after {
                content: ''; position: absolute;
                right: 0; top: 0; width: 20px; height: 20px;
                border: 1px solid #fff;
                border-radius: 5px;
            }
        }
        input[type="checkbox"] {

        }
    `,
    aniArea:styled.article `
        position: fixed;
        width: 100vw;
        height: 100vh;
        > div {
            display: inline-block;
            > div {
                width: 150px !important; height: 150px !important;
                &:nth-child(2) {
                    width: 200px !important; height: 200px !important;
                }
                
            }
        }
    `,
    titleArea:styled.article `
    `,
    titleH2:styled.h2 `
        font-size: 3.4vw;
        color: #fff;
        font-weight: 700;
        text-align: center;
    `,
    loadingTxt:styled.p `
        font-size: 5.5vw;
        font-weight: 900;
        line-height: 1;
        text-align: center;
        color: #0000;
        background: linear-gradient(45deg,rgb(20,240,66) 26%,#b7ff00 100%);
        -webkit-background-clip: text;
        filter: drop-shadow(0px 0px 26px rgba(183,255,0,.3019607843))
    `


}