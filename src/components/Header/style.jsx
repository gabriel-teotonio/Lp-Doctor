import styled, { css } from "styled-components";

const primaryColor = (props) => props.theme.colors.primaryColor
const secundaryColor = (props) => props.theme.colors.secundaryColor

const RESOLVE_STYLE = {
    primary: css`
        color: white;
        background-color: ${secundaryColor};
        &:hover{
        filter: brightness(95%);
        box-shadow: 0 0 4px #ff740a7f;
    }
    `,
    secundary: css`
        color: white;
        background-color: ${primaryColor};
        &:hover{
        filter: brightness(95%);
        box-shadow: 0 0 4px #0aa1ff7d;
    }
    `
}



export const Container = styled.header`
    color: ${primaryColor};
    padding: .7rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const LogoName = styled.h4`
    position: relative;
    font-size: 1.5rem;
    ::before{
        content: '';
        display: block;
        background-color: #ff7a0e;
        height: 100%;
        width: 3px;
        position: absolute;
        left: -8px;
    }
`

// nav

export const NavBar = styled.nav`
    display: flex;
    gap: 4rem;
    align-items: center;
`
export const Menu = styled.ul`
    display: flex;
    gap: 1rem;
    font-weight: 600;
    color: #999999;
`
export const MenuItem = styled.li`
    border-bottom: 2px solid transparent;
    &:hover{
        border-bottom: 2px solid ${primaryColor};
        color: ${primaryColor};
    }
`
export const MenuLink = styled.a``

export const BtnPrimary = styled.a`
    cursor: pointer;
    border-radius: 6px;
    border: none;
    background-color: ${props => RESOLVE_STYLE[props.type]};
    color: white;
    padding: .8rem;
`