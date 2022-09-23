import { useEffect } from 'react';
import { StyledMain } from './index.styled'

import Home from '../../pages/Home'

function Main( { navActive } : any ) : JSX.Element {

    useEffect(() => {
    }, [navActive]);

    return (
        <StyledMain className={ navActive ? 'active' : '' }>
            <Home />
        </StyledMain>
    ) 
}

export default Main;