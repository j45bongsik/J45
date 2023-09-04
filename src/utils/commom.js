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

import vr01_Middle01 from "../assets/images/vr01_middle01.png";
import vr01_Middle02 from "../assets/images/vr01_middle02.png";
import vr01_Middle03 from "../assets/images/vr01_middle03.png";
import vr02_Middle01 from "../assets/images/vr02_middle01.png";
import vr02_Middle02 from "../assets/images/vr02_middle02.png";
import vr02_Middle03 from "../assets/images/vr02_middle03.png";
import vr03_Middle01 from "../assets/images/vr03_middle01.png";
import vr03_Middle02 from "../assets/images/vr03_middle02.png";
import vr03_Middle03 from "../assets/images/vr03_middle03.png";
import vr04_Middle01 from "../assets/images/vr04_middle01.png";
import vr04_Middle02 from "../assets/images/vr04_middle02.png";
import vr04_Middle03 from "../assets/images/vr04_middle03.png";
import vr05_Middle01 from "../assets/images/vr05_middle01.png";
import vr05_Middle02 from "../assets/images/vr05_middle02.png";
import vr05_Middle03 from "../assets/images/vr05_middle03.png";
import vr06_Middle01 from "../assets/images/vr06_middle01.png";
import vr06_Middle02 from "../assets/images/vr06_middle02.png";
import vr06_Middle03 from "../assets/images/vr06_middle03.png";
import vr07_Middle01 from "../assets/images/vr07_middle01.png";
import vr07_Middle02 from "../assets/images/vr07_middle02.png";
import vr07_Middle03 from "../assets/images/vr07_middle03.png";
import vr08_Middle01 from "../assets/images/vr08_middle01.png";
import vr08_Middle02 from "../assets/images/vr08_middle02.png";
import vr08_Middle03 from "../assets/images/vr08_middle03.png";
import vr09_Middle01 from "../assets/images/vr09_middle01.png";
import vr09_Middle02 from "../assets/images/vr09_middle02.png";
import vr09_Middle03 from "../assets/images/vr09_middle03.png";
import vr10_Middle01 from "../assets/images/vr10_middle01.png";
import vr10_Middle02 from "../assets/images/vr10_middle02.png";
import vr10_Middle03 from "../assets/images/vr10_middle03.png";

import bg_ref01 from "../assets/images/bg_ref01.png";
import bg_ref02 from "../assets/images/bg_ref02.png";
import bg_ref03 from "../assets/images/bg_ref03.png";
import bg_ref04 from "../assets/images/bg_ref04.png";
import bg_ref05 from "../assets/images/bg_ref05.png";
import bg_ref06 from "../assets/images/bg_ref06.png";
import bg_ref07 from "../assets/images/bg_ref07.png";


export const REF_LIST = () => {
    let refList = [
        {id: 0, title: (<><em>PORTFOLIO</em> v.7</>), desc: "slick, onePageScroll, anime 인터렉션을 사용해 작성했으며 챗봇을 통한 실시간 채팅이 가능합니다. naver analytics와 google analytics가 심어진 반응형 사이트 입니다.", src: "http://dnrlekzz.dothome.co.kr/pfv7/front/index/index02.html", itemBg: bg_ref01},
        {id: 1, title: (<><em className='type02'>PORTFOLIO</em> v.6</>), desc: "유튜브 레이아웃을 참고해 glassmorphism 인터렉션을 추가해 작성했으며 google analytics가 심어진 반응형 사이트 입니다.", src: "http://j46.dothome.co.kr/pfv6/front/main.html", itemBg: bg_ref02},
        {id: 2, title: (<><em className='type03'>PORTFOLIO</em> v.5</>), desc: "카카오 레이아웃을 참고해 video를 활용하였으며 google analytics가 심어진 반응형 사이트 입니다.", src: "http://dnrlekzz.dothome.co.kr/pfv5/front/main.html", itemBg: bg_ref03},
        {id: 3, title: (<><em className='type04'>PORTFOLIO</em> v.4</>), desc: "캐롯 레이아웃을 참고해 Masonry 라이브러리를 사용해 작성한 반응형 사이트 입니다.", src: "http://j46.dothome.co.kr/pfv4/front/main.html", itemBg: bg_ref04},
        {id: 4, title: (<><em className='type05'>PUBLISHING</em><br />GUIDE</>), desc: "인턴 기간중 작성한 퍼블리싱 가이드 사이트 입니다. 다양한 용도로 활용할수 있는 마크업과 규칙, 웹접근성 등 다양한 정보가 있습니다.", src: "http://j45.dothome.co.kr/pub_guide/convention/intro.html", itemBg: bg_ref05},
        {id: 5, title: (<>기업 <em className='type06'>홈페이지</em><br />고도화</>), desc: "인턴 기간중 참여한 리뉴얼 및 고도화 작업으로 퍼블리싱을 담당 했습니다.", src: null, itemBg: bg_ref06},
        {id: 6, title: (<>예제 <em className='type07'>템플릿</em></>), desc: "다양한 매체를 통해 정보를 수집해 업무 시 활용될만한 인터렉티브한 내용들을 작성하고 있습니다.", src: "http://dnrlekzz.dothome.co.kr/ex_library/front/index.html", itemBg: bg_ref07},
    ]

    return [refList]
}


export const TAG_LIST = () => {
    let tagList = [
        {id: 0, tag: "SEO"},
        {id: 1, tag: "W.A"},
        {id: 2, tag: "HTML5"},
        {id: 3, tag: "CSS3"},
        {id: 4, tag: "JavaScript"},
        {id: 5, tag: "jQuery"},
        {id: 6, tag: "SCSS"},
        {id: 7, tag: "Gulp"},
        {id: 8, tag: "Figma"},
        {id: 9, tag: "Zeplin"},
        {id: 10, tag: "XD"},
        {id: 11, tag: "React.js"},
    ]

    return [tagList]
}

export const VR_LIST = () => {
    let vrList = [
        {id: 0, alt: "포트폴리오01", src: vrBg01, title: "KR철도v.1", subtitle: "WEBSITE(반응형)", desc: "철도재산 대민 웹사이트 퍼블리싱 구축", frac: "공공기관", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/01_%EC%B2%A0%EB%8F%84%EC%9E%AC%EC%82%B0%ED%8F%AC%ED%84%B8(%ED%8F%90%EA%B8%B0)/kr/build/html/00_coding_list.html",
            midSrc: vr01_Middle01,
            midAlt: "KR철도 이미지01"
        },
        {id: 1, alt: "포트폴리오02", src: vrBg02, title: "KLIP헬프데스크", subtitle: "WEBSITE", desc: "KLIP헬프데스크 포털사이트 운영(고도화) 퍼블리싱", frac: "공공기관", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/02_KLIP%ED%97%AC%ED%94%84%EB%8D%B0%EC%8A%A4%ED%81%AC/KLIP%ED%97%AC%ED%94%84%EB%8D%B0%EC%8A%A4%ED%81%AC/build/html/00_coding_list.html",
            midSrc: vr02_Middle01,
            midAlt: "KLIP헬프데스크 이미지01"
        },
        {id: 2, alt: "포트폴리오03", src: vrBg03, title: "LX통합플랫폼", subtitle: "WEBSITE", desc: "LX통합 플랫폼 관리자 및 사용자 사이트 퍼블리싱", frac: "공공기관", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/03_LX%ED%86%B5%ED%95%A9%ED%94%8C%EB%9E%AB%ED%8F%BC/LX%ED%86%B5%ED%95%A9%ED%94%8C%EB%9E%AB%ED%8F%BC/%EA%B4%80%EB%A6%AC%EC%9E%90N/lx/build/html/00_coding_list.html",
            midSrc: vr03_Middle01,
            midAlt: "LX통합플랫폼 이미지01"
        },
        {id: 3, alt: "포트폴리오04", src: vrBg04, title: "KR철도v.2", subtitle: "WEBSITE(반응형)", desc: "철도재산 대민 웹사이트 퍼블리싱 구축", frac: "공공기관", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/05_%EC%B2%A0%EB%8F%84%EC%9E%AC%EC%82%B0%ED%8F%AC%ED%84%B8/kr-potal/build/html/00_coding_list.html",
            midSrc: vr04_Middle01,
            midAlt: "KR철도v.2 이미지01"
        },
        {id: 4, alt: "포트폴리오05", src: vrBg05, title: "EGIS", subtitle: "WEBSITE(반응형)", desc: "EGIS 기업 홈페이지 퍼블리싱, 원페이지 스크롤 및 애니메이션 효과 일부 적용", frac: "민간업체", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/08_egis/egis/build/html/00_coding_list.html",
            midSrc: vr05_Middle01,
            midAlt: "LX통합플랫폼 이미지01"
        },
        {id: 5, alt: "포트폴리오06", src: vrBg06, title: "현대오일뱅크", subtitle: "대시보드", desc: "현대오일뱅크 대시보드 퍼블리싱, MyChart / GridStack 등 라이브러리 활용", frac: "민간업체", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/09_%ED%98%84%EB%8C%80%EC%98%A4%EC%9D%BC%EB%B1%85%ED%81%AC/oilbank/build/html/00_coding_list.html",
            midSrc: vr06_Middle01,
            midAlt: "현대오일뱅크 이미지01"
        },
        {id: 6, alt: "포트폴리오07", src: vrBg07, title: "KGEOP 입지분석시스템", subtitle: "WEBSITE", desc: "관리자 및 GIS기반 퍼블리싱, AmChart 등 라이브러리 활용", frac: "공공기관 구축", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/15_kgeo%EC%9E%85%EC%A7%80%EB%B6%84%EC%84%9D%EC%8B%9C%EC%8A%A4%ED%85%9C/kgeop/build/html/00_coding_list.html",
            midSrc: vr07_Middle01,
            midAlt: "KGEOP입지분석시스템 이미지01"
        },
        {id: 7, alt: "포트폴리오08", src: vrBg08, title: "KGEOP 부동산개발업", subtitle: "WEBSITE", desc: "관리자 퍼블리싱, JqGrid 라이브러리 활용하며 BackEnd 개발자와 협업", frac: "공공기관 구축", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/18_KLIS%EB%B6%80%EB%8F%99%EC%82%B0%EA%B0%9C%EB%B0%9C%EC%97%85/%EB%B6%80%EB%8F%99%EC%82%B0%EA%B0%9C%EB%B0%9C%EC%97%85/build/html/00_coding_list.html",
            midSrc: null,
            midAlt: null
        },
        {id: 8, alt: "포트폴리오09", src: vrBg09, title: "REPIS 부동산원", subtitle: "WEBSITE", desc: "관리자 퍼블리싱, JqGrid / MyChart 등 라이브러리 활용", frac: "공공기관 구축", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/23_REPIS-%EB%B6%80%EB%8F%99%EC%82%B0%EC%9B%90/%EB%B6%80%EB%8F%99%EC%82%B0%EC%9B%90/build/html/00_coding_list.html",
        midSrc: null,
        midAlt: null
        },
        {id: 9, alt: "포트폴리오10", src: vrBg10, title: "똑똑청년농부", subtitle: "WEBSITE(반응형)", desc: "대민사이트 퍼블리싱", frac: "공공기관 구축", skill: "Publishing", link: "https://j45bongsik.github.io/ifcom/25_%EB%98%91%EB%98%91%EC%B2%AD%EB%85%84%EB%86%8D%EB%B6%80/%EB%98%91%EB%98%91%EC%B2%AD%EB%85%84%EB%86%8D%EB%B6%80/build/html/00_coding_list.html",
            midSrc: vr08_Middle01,
            midAlt: "똑똑청년농부 이미지01"
        },
        {id: 10, alt: "포트폴리오11", src: vrBg11, title: "룰루메딕", subtitle: "WEBAPP", desc: "현대이지웰app 내부 룰루메딕 webapp 퍼블리싱", frac: "민간업체", skill: "Publishing", link: "https://j45bongsik.github.io/short-period-of-time/02_PJT02/index.html",
            midSrc: vr09_Middle01,
            midAlt: "룰루메딕 이미지01"
        },
        {id: 11, alt: "포트폴리오12", src: vrBg12, title: "워크트로닉스", subtitle: "MOBILEWEB", desc: "워크트로닉스 민간 홈페이지 모바일 퍼블리싱", frac: "민간업체", skill: "Publishing", link: "https://j45bongsik.github.io/short-period-of-time/01_PJT01/%EC%9B%8C%ED%81%AC%ED%8A%B8%EB%A1%9C%EB%8B%89%EC%8A%A4/build/html/00_coding_list.html",
            midSrc: vr10_Middle01,
            midAlt: "워크트로닉스 이미지01"
        },
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
            link: '#section1',
        },
        {
            id: 1,
            name: 'gnb01',
            link: '#section2',
        },
        {
            id: 2,
            name: 'gnb02',
            link: '#section3',
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
            link: '#section6',
        },
    ]

    return [gnbList]

}