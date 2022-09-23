import { StyledPreloader } from './index.styled'

import icon_loader from './../../assets/favicon.png'
import Image from 'next/image';

function Preloader() : JSX.Element {
    return (
        <StyledPreloader>
            <Image alt="image" src={icon_loader} />
        </StyledPreloader>
    )
}

export default Preloader;
