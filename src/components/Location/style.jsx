import styled from "styled-components";

export const Container = styled.section`
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title-location{
        margin: 4rem 0;
    }
`
export const MainLocation = styled.article`
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Infos = styled.article`
    font-size: 1.2rem;
    font-weight: 600;
    background-color: #004de8;
    color: white;
    padding: 2rem ;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    svg{
        color: #ffa600;
    }
    `
export const InfoLocation = styled.div`
    span{
        margin-left:1rem;
    }
`
export const InfoOperation = styled.div``
export const ListOperation = styled.ul`
    list-style: none;
`
export const ItemOperation = styled.li`
    margin: .5rem 0;
`
export const InfoContact = styled.div`
    span{
        margin-left: 1rem;
    }
`


export const MapLocation = styled.article`
   
`
