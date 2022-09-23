import styled from 'styled-components'

const StyledHomeContainer = styled.div`
    position: relative;
`

const StyledHeroImage = styled.div`
    div {
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
    }
`

const StyledHomeContent = styled.div`
    position: absolute;
    z-index: 2;
    top: 50%;
    padding: 0 30px;
    width: 100%;
    transform: translateY(-50%);
    .loading {
        margin-bottom: 40px;
        text-align: center;
        span {
            position: relative;
            display: block;
            max-width: 500px;
            margin: 10px auto 0;
            height: 50px;
            text-indent: -999999px;
            border: 5px solid #000;
            border-radius: 30px;
            &:before {
                position: absolute;
                top: 4px;
                left: 6px;
                border-top-left-radius: 24px;
                border-bottom-left-radius: 24px;
                width: 40%;
                height: 32px;
                background-color: #000;
                content: "";
            }
        }
    }
    h1 {
        margin-bottom: 50px;
        font-size: 70px;
        font-weight: 700;
        text-align: center;
    }
    ul {
        text-align: center;
        li {
            margin: 0 20px;
            max-width: 100px;
            display: inline-block;
            vertical-align: middle;
            span {
                display: none;
            }
        }
    }
`

export {
    StyledHomeContainer,
    StyledHomeContent,
    StyledHeroImage,
}