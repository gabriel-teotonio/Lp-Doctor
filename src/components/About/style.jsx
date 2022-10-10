import styled from "styled-components";
import { primaryColor, secundaryColor } from "../Main/style";



export const Container = styled.section`
    display: flex;
    height: auto;
    align-items: center;
    padding: 4rem;
    justify-content: space-between;
`

// infos
export const Infos = styled.article`
    width: 50%; 
    padding: 1rem;
    .info-title{
        text-align: left;
    }
`
export const InfoText = styled.p`
    color: #4f4f4f;
`

//about experience
export const ExperienceList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const ExperienceItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    gap: 1rem;
    svg{
        font-size: 2.5rem;
        width: 50px;
        color: ${primaryColor};
        transition: all .4s;
        &:hover{
            transform: translateY(-4px);
        }
    }
    h3{
        font-size: 2.5rem;
        color: ${primaryColor}; 
        transition: all .4s;
        cursor: context-menu;
        &:hover{
            transform: translateY(-4px);
        }
    }
` 
export const ItemDescription = styled.h4`
    color: #4f4f4f;
`