import React from "react";
import styled from 'styled-components';
import Loading from '../components/contents/_Loading';
import Section01 from "../components/sections/_section01";
import Section02 from "../components/sections/_section02";
import VrSection from "../components/sections/_vrsection";

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
            <VrSection></VrSection>
        </MainStyle.wrap>
        </>

    )
}

export default MainRoute;