import styled from "styled-components";

const StyledPreloader = styled.div`
    display: none;
    position: absolute;
    top: 45%;
    left: 45%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    padding: 20px;
    z-index: 99;
    background-color: #fff;
    animation-name: rotate-windows;
    animation-iteration-count: infinite;
    animation-duration: 3s;
    border-radius: 100%;
    border: 5px solid #000;
`

export {
    StyledPreloader
}