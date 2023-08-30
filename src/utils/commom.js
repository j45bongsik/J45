import imoji01 from "../assets/images/imoji01.png";
import imoji02 from "../assets/images/imoji02.png";
import imoji03 from "../assets/images/imoji03.png";
import imoji04 from "../assets/images/imoji04.png";
import imoji05 from "../assets/images/imoji05.png";

import vrBg01 from "../assets/images/bg_vr01.png";
import vrBg02 from "../assets/images/bg_vr02.png";
import vrBg03 from "../assets/images/bg_vr03.png";
import vrBg04 from "../assets/images/bg_vr04.png";
import vrBg05 from "../assets/images/bg_vr05.png";
import vrBg06 from "../assets/images/bg_vr06.png";
import vrBg07 from "../assets/images/bg_vr07.png";
import vrBg08 from "../assets/images/bg_vr08.png";
import vrBg09 from "../assets/images/bg_vr09.png";
import vrBg10 from "../assets/images/bg_vr10.png";
import vrBg11 from "../assets/images/bg_vr11.png";
import vrBg12 from "../assets/images/bg_vr12.png";

export const VR_LIST = () => {
    let vrList = [
        {id: 0, alt: "포트폴리오01", src: vrBg01, title: "KR철도v.1", subtitle: "WEBSITE(반응형)", desc: "철도재산 대민 웹사이트 퍼블리싱 구축", frac: "공공기관", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/01_%EC%B2%A0%EB%8F%84%EC%9E%AC%EC%82%B0%ED%8F%AC%ED%84%B8(%ED%8F%90%EA%B8%B0)/kr/build/html/00_coding_list.html"},
        {id: 1, alt: "포트폴리오02", src: vrBg02, title: "KLIP헬프데스크", subtitle: "WEBSITE", desc: "KLIP헬프데스크 포털사이트 운영(고도화) 퍼블리싱", frac: "공공기관", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/02_KLIP%ED%97%AC%ED%94%84%EB%8D%B0%EC%8A%A4%ED%81%AC/KLIP%ED%97%AC%ED%94%84%EB%8D%B0%EC%8A%A4%ED%81%AC/build/html/00_coding_list.html"},
        {id: 2, alt: "포트폴리오03", src: vrBg03, title: "LX통합플랫폼", subtitle: "WEBSITE", desc: "LX통합 플랫폼 관리자 및 사용자 사이트 퍼블리싱", frac: "공공기관", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/03_LX%ED%86%B5%ED%95%A9%ED%94%8C%EB%9E%AB%ED%8F%BC/LX%ED%86%B5%ED%95%A9%ED%94%8C%EB%9E%AB%ED%8F%BC/%EA%B4%80%EB%A6%AC%EC%9E%90N/lx/build/html/00_coding_list.html"},
        {id: 3, alt: "포트폴리오04", src: vrBg04, title: "KR철도v.2", subtitle: "WEBSITE(반응형)", desc: "철도재산 대민 웹사이트 퍼블리싱 구축", frac: "공공기관", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/05_%EC%B2%A0%EB%8F%84%EC%9E%AC%EC%82%B0%ED%8F%AC%ED%84%B8/kr-potal/build/html/00_coding_list.html"},
        {id: 4, alt: "포트폴리오05", src: vrBg05, title: "EGIS", subtitle: "WEBSITE(반응형)", desc: "EGIS 기업 홈페이지 퍼블리싱, 원페이지 스크롤 및 애니메이션 효과 일부 적용", frac: "민간업체", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/08_egis/egis/build/html/00_coding_list.html"},
        {id: 5, alt: "포트폴리오06", src: vrBg06, title: "현대오일뱅크", subtitle: "대시보드", desc: "현대오일뱅크 대시보드 퍼블리싱, MyChart / GridStack 등 라이브러리 활용", frac: "민간업체", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/09_%ED%98%84%EB%8C%80%EC%98%A4%EC%9D%BC%EB%B1%85%ED%81%AC/oilbank/build/html/00_coding_list.html"},
        {id: 6, alt: "포트폴리오07", src: vrBg07, title: "KGEOP 입지분석시스템", subtitle: "WEBSITE", desc: "관리자 및 GIS기반 퍼블리싱, AmChart 등 라이브러리 활용", frac: "공공기관 구축", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/15_kgeo%EC%9E%85%EC%A7%80%EB%B6%84%EC%84%9D%EC%8B%9C%EC%8A%A4%ED%85%9C/kgeop/build/html/00_coding_list.html"},
        {id: 7, alt: "포트폴리오08", src: vrBg08, title: "KGEOP 부동산개발업", subtitle: "WEBSITE", desc: "관리자 퍼블리싱, JqGrid 라이브러리 활용하며 BackEnd 개발자와 협업", frac: "공공기관 구축", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/18_KLIS%EB%B6%80%EB%8F%99%EC%82%B0%EA%B0%9C%EB%B0%9C%EC%97%85/%EB%B6%80%EB%8F%99%EC%82%B0%EA%B0%9C%EB%B0%9C%EC%97%85/build/html/00_coding_list.html"},
        {id: 8, alt: "포트폴리오09", src: vrBg09, title: "REPIS 부동산원", subtitle: "WEBSITE", desc: "관리자 퍼블리싱, JqGrid / MyChart 등 라이브러리 활용", frac: "공공기관 구축", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/23_REPIS-%EB%B6%80%EB%8F%99%EC%82%B0%EC%9B%90/%EB%B6%80%EB%8F%99%EC%82%B0%EC%9B%90/build/html/00_coding_list.html"},
        {id: 9, alt: "포트폴리오10", src: vrBg10, title: "똑똑청년농부", subtitle: "WEBSITE(반응형)", desc: "대민사이트 퍼블리싱", frac: "공공기관 구축", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/25_%EB%98%91%EB%98%91%EC%B2%AD%EB%85%84%EB%86%8D%EB%B6%80/%EB%98%91%EB%98%91%EC%B2%AD%EB%85%84%EB%86%8D%EB%B6%80/build/html/00_coding_list.html"},
        {id: 10, alt: "포트폴리오11", src: vrBg11, title: "룰루메딕", subtitle: "WEBAPP", desc: "현대이지웰app 내부 룰루메딕 webapp 퍼블리싱", frac: "민간업체", skill: "Publishing", link: "https://j45bongsik.github.io/short-period-of-time/02_PJT02/index.html"},
        {id: 11, alt: "포트폴리오12", src: vrBg12, title: "워크트로닉스", subtitle: "MOBILEWEB", desc: "워크트로닉스 민간 홈페이지 모바일 퍼블리싱", frac: "민간업체", skill: "Publishing", link: "https://j45bongsik.github.io/short-period-of-time/01_PJT01/%EC%9B%8C%ED%81%AC%ED%8A%B8%EB%A1%9C%EB%8B%89%EC%8A%A4/build/html/00_coding_list.html"},
    ]

    return [vrList]
}

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