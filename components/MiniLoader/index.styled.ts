import styled from "styled-components";

const StyledMiniLoader = styled.div`
    border: 7px solid #f3f3f3;
    border-radius: 50%;
    border-top: 7px solid #3498db;
    width: 30px;
    height: 30px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    span {
        display: none;
    }
`

export {
    StyledMiniLoader
}