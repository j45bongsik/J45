import React from "react";
import { LogoStyle } from "../../styles/Logo";
import { Link, useNavigate } from 'react-router-dom';

const Logo = ((props) => {

    let navigate = useNavigate();

    return (
        <LogoStyle.logoArea>
            <LogoStyle.LogoTextH>
                <a href="#" onClick= { () => {
                    navigate('/')
                }}>
                    J45
                </a>
                
            </LogoStyle.LogoTextH>
        </LogoStyle.logoArea>
    )
})

export default Logo;