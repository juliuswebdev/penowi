import styled from "styled-components";
import { device } from './../../utils/styled'

const StyledMain = styled.div`
    position: relative;
    margin-left: 210px;
    background-color: rgba(98, 69, 63, .2);
    transition: all .2s ease-in-out;
    @media ${device.tabletL} {
        margin-left: 0;
        min-width: auto;
        &.active {
            margin-left: 210px; 
            min-width: 400px;
        }
    }
`

export {
    StyledMain
};