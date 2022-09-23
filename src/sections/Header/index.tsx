import { useState } from 'react';

import { StyledHeader } from './index.styled'
import NavBar from '../../components/Navbar'

function Header({ navActive, contactActive, isContactLoading } : any) : JSX.Element {

    const [isActive, setIsActive] = useState(false);

    const handleIsActive = (isActive : boolean) => {
        setIsActive(isActive);
        navActive(isActive);
    }

    const handleContactActive = (isContactActive : boolean) => {
        contactActive(isContactActive);
    }

    return (
        <StyledHeader>
            <NavBar isActive={handleIsActive} isContactActive={handleContactActive} isContactLoading={isContactLoading} />
        </StyledHeader>
    )
}

export default Header