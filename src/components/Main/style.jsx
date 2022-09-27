import styled from "styled-components";

 
export const primaryColor = (props) => props.theme.colors.primaryColor
export const secundaryColor = (props) => props.theme.colors.secundaryColor

export const Container = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    padding: 0 4rem;    
`

export const EmphasesTitle = styled.span`
    background-color: ${secundaryColor};
    color: white;
    padding: 0 4px;
    border-radius: 2px;
`

// infosMain
export const infoMain = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 50%;
    gap: 1rem   ;
`
export const TitleMain = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    color: #404040;
`
export const paragraphMain = styled.p`
    color: #737373;
`


// imageMain
export const ImageMain = styled.img`
    max-width: 520px;
`
