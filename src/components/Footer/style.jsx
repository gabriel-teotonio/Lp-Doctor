import styled from "styled-components";

export const Container = styled.footer`
    background-color: #e0e0e0; 
    height: auto;
    font-size: 14px;
    font-weight: 600;
    `
export const ContentFooter = styled.div`
    display: grid;
    grid-template-columns: 15rem 15rem auto;
    padding: 2rem 4rem;
    padding-bottom: 6rem;
`

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    a{
        transition: all .2s;
        &:hover{
            color: #0d3eff;
        }
    }
`
export const SocialContent = styled.div`
    .group-icon{
        margin: 6px 0;
        display: flex;
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
            padding: 6px;
            border-radius: 50%;
            margin: 4px;
            background-color: #005cf1;
            color: white;
            transition: .4s;
            font-size: 1.5rem;
            &:hover{
                transform: scale(1.1);
            }
        }
    }
` 
export const CompanyContent = styled.div`
    text-align: end;
`
export const BotonFooter = styled.div`
    width: 100%;
    border-top: 1px solid black;
    text-align: center;
    padding: 2rem 0;
`