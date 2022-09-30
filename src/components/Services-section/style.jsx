import styled from "styled-components";
import { primaryColor } from "../Main/style";



export const Container = styled.section`
    min-height: 100vh;
    height: auto;
    padding: 2rem 0;
`
export const TitleServices = styled.h2`
    text-align: center;
    font-size: 3rem;
    color: #858585;
`

export const ServicesMain = styled.article`
    display: flex;
    justify-content: space-around;
    margin-top: 4rem;
`

// Topic of services
export const Topic = styled.div`
    max-width: 320px;
`
export const TopicHeader = styled.header`
    text-align: center;
    border-bottom: #6e6e6e 2px solid;
    padding: 4px 2px;
    min-height: 250px;
    svg{
        font-size: 6rem;
        color: ${primaryColor};
    }
    h3{
        font-size: 2rem;
        margin: .5rem 0;
    }
    p{
        color: #757575;
    }
`

export const TopicItens = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`
export const TopicItem = styled.li`
    text-align: center;
    background-color: rgba(6, 122, 255, 0.064);
    border-radius: 2px;
    padding: 1rem .5rem;
    margin: .5rem 0;
    h5{
        font-size: 1rem;
    }       
    p{
        color: #757575;
    }
`
