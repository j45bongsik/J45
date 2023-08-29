import styled from 'styled-components';
import '../assets/fonts/_Fonts.scss';



export const GnbStyle = {


    GnbArea:styled.nav `
        height: 100%;
        margin-left: 100px;
    `,
    GnbList:styled.ul `
        display: flex; justify-content: flex-start; align-items: center;
        height: 100%;
    `,
    GnbItem:styled.li `
        width: 100%;
        height: 100%;

        a {
            display: flex; justify-content: center; align-items: center;
            font-family: 'Noto Sans';
            font-size: 20px;
            color: #fff;
            transition: 0.3s;
            text-align: center;
            height: 100%;
            &:hover {
                color: #fdc128;
            }
        }
        &:not(:first-child) {
            margin-left: 50px;
        }
    `

}