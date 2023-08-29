import imoji01 from "../assets/images/imoji01.png";
import imoji02 from "../assets/images/imoji02.png";
import imoji03 from "../assets/images/imoji03.png";
import imoji04 from "../assets/images/imoji04.png";
import imoji05 from "../assets/images/imoji05.png";

export const IMOJI_LIST = () => {
    let imojiList = [
        {id:0, alt:"이모지1", src: imoji01, text: "test01"},
        {id:1, alt:"이모지2", src: imoji02, text: "test02"},
        {id:2, alt:"이모지3", src: imoji03, text: "test03"},
        {id:3, alt:"이모지4", src: imoji04, text: "test04"},
        {id:4, alt:"이모지5", src: imoji05, text: "test05"},
    ]

    return [imojiList]
}



export const GNB_LIST = () => {

    let gnbList = [
        {
            id: 0,
            name: 'gnb00',
            link: '#section0',
        },
        {
            id: 1,
            name: 'gnb01',
            link: '#section1',
        },
        {
            id: 2,
            name: 'gnb02',
            link: '#section2',
        },
        {
            id: 3,
            name: 'gnb03',
            link: '#section3',
        },
        {
            id: 4,
            name: 'gnb04',
            link: '#section4',
        },
        {
            id: 5,
            name: 'gnb05',
            link: '#section5',
        },
    ]

    return [gnbList]

}