import styled from "styled-components";


export const Container = styled.section`
    color: white;
    min-height: 100vh;
    height: auto;
    display: flex; 
    flex-direction: column;
    gap: 4rem;
    background-color: #f1f1f1;

    .swiper{
        width: 100%;
        min-height: 100%;
    }

    .swiper-slide{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        .client{
            background-color: #0041ce;
            padding: 1rem;
            border-radius: 4px;
            max-width: 320px;
            min-height: 250px; 
            img{
                width: 80px;
                border-radius: 6px;
            }
            p{
                font-size: 14px;
            }
        }
    }
    /* .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
} */
`