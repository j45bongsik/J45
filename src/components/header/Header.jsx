import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Logo from "./_Logo";
import Gnb from "./_Gnb";
import styled from 'styled-components';
import { Outlet } from "react-router";

const HeaderStyle = {
    Wrap: styled.header`
        position: fixed;
        left: 0; top: 0;
        width: 100%; height: 100px;
        transition: all 0.5s;
        background: rgba(0,0,0,0.4);
        z-index: 50;
    `,
    Inner: styled.article`
        width: 100%; max-width: 1440px;
        height: 100%;
        margin: 0 auto;
        display: flex; justify-content: flex-start; align-items: center;
    `,
};

const Header = () => {

    useEffect(() => {
        document.querySelectorAll('#header nav a').forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetBox = link.getAttribute('href');
            const targetElement = document.querySelector(targetBox);
    
            if (targetElement) {
              const targetBoxOffset = targetElement.getBoundingClientRect().top + window.scrollY - 50;
    
              window.scrollTo({
                top: targetBoxOffset,
                behavior: 'smooth'
              });
            }
          });
        });
      }, []);

    


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const showNav = gsap.from("#header", {
            yPercent: -200,
            paused: true,
            duration: 0.2,
        }).progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
                self.direction === -1 ? showNav.play() : showNav.reverse();
            },
        });
    }, []);

    return (
        <>
            <HeaderStyle.Wrap id="header">
                <HeaderStyle.Inner>
                    <Logo />
                    <Gnb />
                </HeaderStyle.Inner>
            </HeaderStyle.Wrap>

            <Outlet />
        </>
    );
};

export default Header;
