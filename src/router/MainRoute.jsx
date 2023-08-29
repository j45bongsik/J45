import React from "react";
import styled from 'styled-components';
import Loading from '../components/contents/_Loading';
import Section01 from "../components/sections/_section01";
import Section02 from "../components/sections/_section02";

const MainStyle = {
    wrap:styled.main `
    
    `,
}


const MainRoute = (props) => {
    return (
        <>
        <Loading></Loading>
        <MainStyle.wrap>
            <Section01></Section01>
            <Section02></Section02>
        </MainStyle.wrap>
        </>

    )
}

export default MainRoute;