import styled from 'styled-components'
import { device } from './../../utils/styled'
import pattern from './../../assets/images/5086.jpg'

const StyledNavBar = styled.div`
    background: rgba(255,255,255,.8);
    box-shadow: 0 3px 5px 0px rgba(0,0,0,0.20);
    -webkit-box-shadow: 0 3px 5px 0px rgba(0,0,0,0.20);
    -moz-box-shadow: 0 3px 5px 0px rgba(0,0,0,0.20);
    position: fixed;
    top: 0;
    z-index: 99;
    max-width: 210px;
    height: 100vh;
    background: url(${pattern.src}) repeat;
    background-size: 34%;
    border-right: 5px solid #fff;
    transition: all ease-in-out .2s;
    @media ${device.tabletL} {
        left: -210px;
        &.active {
            left: 0;
        }
    }
`

const StyledNavLogo = styled.div`
    span {
        overflow: inherit!important;
        img {
            background: rgba(255,255,255);
            max-width: 300px!important;
            width: auto!important;
            padding: 20px 40px!important;
            border-right: 5px solid #000!important;
            @media ${device.tabletL } {
                position: fixed;
                left:0;
                top:0;
                z-index: 99;
                max-width: 210px;
                padding: 10px 20px;
            }
        }
    }
`

const StyledNavigation = styled.div`
    ul {
        margin-top: 3em;
        @media ${device.tabletL} {
            margin-top: 7em; 
        }
        li {
            margin-bottom: 20px;
            @media ${device.tabletL} {
                margin-bottom: 10px; 
            }
            a { 
                position: relative;
                display: block;
                padding: 15px 25px;
                font-size: 28px;
                text-decoration: none;
                background-color: #fff;
                color: #000;
                span {
                    position: relative;
                    z-index: 1;
                }
                &:before {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 0;
                    height: 100%;
                    width: 5px;
                    background-color: #000;
                    transition: all ease-in-out .2s;
                    content: '';                      
                }
                &:hover span {
                    color: #fff!important;
                }
                &:hover:before {
                    width: 105%;
                }
            }
            &:nth-last-child(-n+2) {
                a {
                    font-size: 20px;
                }
            }
            .miniLoader {
                position: absolute;
                top: 0;
                right: -45px;
            }
        }
    }
`

const StyledNavFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 210px;
    padding: 20px;
    @media ${device.tabletL} {
        position: unset;
        padding: 20px 10px 0;
    }
    ul {
        li {
            display: inline-block;
            width: 50%;
            padding: 10px;
            font-size: 0;
            box-sizing: border-box;
            @media ${device.tabletL} {
                position: unset;
                width: 25%;
                padding: 5px;
            }
            img {
                width: 100%;
                height: auto;
            }
        }
    }
`
const StyledHambugerMenu = styled.div`
    display: none;
    padding: 10px;
    position: fixed;
    z-index: 99;
    top: 15px;
    right: 15px;
    cursor: pointer;
    span {
        position: relative;
        display: block;
        width: 50px;
        height: 6px;
        background-color: #000;
        border-radius: 250px;
        transition: all .2s ease-in-out;
        user-select: none;
        &:nth-child(1) {
            margin-top: 0;
        }
        &:nth-child(2),
        &:nth-child(3) {
            margin-top: 10px;
        }
    }
    &.menu-open span {
        &:nth-child(1) {
            transform: translateY(16px) rotate(38deg);
        }
        &:nth-child(2) {
            opacity: 0;
        }
        &:nth-child(3) {
            transform: translateY(-16px) rotate(138deg);
        }
    }
    @media ${device.tabletL} {
        display: block;
    }
`

export { 
    StyledNavBar,
    StyledNavLogo,
    StyledNavigation,
    StyledNavFooter,
    StyledHambugerMenu
};