import styled from "styled-components";

const NawWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;
    
    & > a {
        text-decoration: none;
        color: #1e3786;
    }
    
    & > a.active {
        text-decoration: none;
        color: #03aeff;
    }
    
    & > a:hover {
        color: steelblue;
    }
`

export const S = {
    NawWrapper
}