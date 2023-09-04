import React from "react";
import styled from 'styled-components';
import Loading from '../components/contents/_Loading';
import Section01 from "../components/sections/_section01";
import Section02 from "../components/sections/_section02";
import Section03 from "../components/sections/_section03";
import Section04 from "../components/sections/_section04";
import Section05 from "../components/sections/_section05";

const MainStyle = {
    wrap:styled.main `
        height: 100%;
    `,
}


const MainRoute = (props) => {
    return (
        <>
        {/* <Loading></Loading> */}
        <MainStyle.wrap>
            <Section01></Section01>
            {/* <Section02></Section02> */}
            <Section03></Section03>
            <Section04></Section04>
            <Section05></Section05>
        </MainStyle.wrap>
        </>

    )
}

export default MainRoute;