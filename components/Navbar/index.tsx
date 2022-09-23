import { useState, useEffect } from 'react';
import Image from 'next/image';

import { StyledNavBar, StyledNavLogo, StyledNavigation, StyledNavFooter, StyledHambugerMenu } from './index.styled'

import MiniLoader from '../MiniLoader';

import logo_website from './../../assets/images/logo-web.png';
import icon_lazada from './../../assets/images/icons/lazada.png';
import icon_shopee from './../../assets/images/icons/shopee.png';
import icon_facebook from './../../assets/images/icons/facebook.png';
import icon_instagram from './../../assets/images/icons/instagram.png';

function NavBar( { isActive, isContactActive, isContactLoading }  : any ) : JSX.Element {

    const [active, setActive] = useState(false);

    const handleToggleClassMenu = () => {
        isActive(!active);
        setActive(!active);
    }

    const handleMessengerActive = () => {
        isContactActive(true);
    }

    return (
        <StyledNavBar className={ active ? 'active' : '' }>
            <StyledNavLogo>
                <Image alt="image" src={logo_website} />
            </StyledNavLogo>
            <StyledHambugerMenu 
                className={ active ? 'menu-open' : '' }
                onClick={handleToggleClassMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </StyledHambugerMenu>
            <StyledNavigation>
                <ul>
                    <li><a href="#"><span>Mens</span></a></li>
                    <li><a href="#"><span>Womens</span></a></li>
                    <li><a href="#"><span>Kids</span></a></li>
                    <li>&nbsp;</li>
                    <li><a href="#"><span>About Us</span></a></li>
                    <li><a href="#" className={(!isContactLoading) ? 'disabled' : ''} onClick={handleMessengerActive}><span>Contact Us <div className="miniLoader">{ (!isContactLoading) ? <MiniLoader /> : '' }</div></span></a></li>
                </ul>
            </StyledNavigation>
            <StyledNavFooter>
                <ul>
                    <li><a href="#"><span>Lazada</span><Image alt="image" src={icon_lazada} /></a></li>
                    <li><a href="#"><span>Shopee</span><Image alt="image" src={icon_shopee} /></a></li>
                    <li><a href="#"><span>Facebook</span><Image alt="image" src={icon_facebook} /></a></li>
                    <li><a href="#"><span>Instagram</span><Image alt="image" src={icon_instagram} /></a></li>
                </ul>
            </StyledNavFooter>
        </StyledNavBar>
    )
}

export default NavBar