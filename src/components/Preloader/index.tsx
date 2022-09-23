import { StyledPreloader } from './index.styled'

import icon_loader from './../../assets/favicon.png'

function Preloader() : JSX.Element {
    return (
        <StyledPreloader>
            <img src={icon_loader} />
        </StyledPreloader>
    )
}

export default Preloader;
