import React from 'react'
import * as C from './style'
import { 
    AiFillInstagram,
    AiFillFacebook,
    AiFillTwitterCircle,
} from 'react-icons//ai'

import { FaTiktok } from 'react-icons/fa'

export const Footer = () => {
  return (
    <C.Container>
        <C.ContentFooter>
            <C.AboutContent>
                <h4>Dr.Andrade</h4>
                <a href='#'>Sobre</a>
                <a href='#'>Termos de uso</a>
                <a href='#'>Perguntas frequentes</a>
                <a href='#'>contato@drAndrade.com</a>
            </C.AboutContent>
            <C.SocialContent>
                <h4>Redes sociais</h4>
                <div className='group-icon'>
                <a href="#"><AiFillInstagram /></a>
                <a href="#"><AiFillTwitterCircle /></a>
                </div>
                <div className='group-icon'>
                <a href="#"><AiFillFacebook /></a>
                <a href="#"><FaTiktok /></a>
                </div>
            </C.SocialContent>
            <C.CompanyContent>
                <p>Rua alcindo cacela</p>
                <p>Belém, PA</p>
                <p>Cep: 66124-076</p>
                <p>Cnpj:18.432.123/0028-87</p>
            </C.CompanyContent>
        </C.ContentFooter>
        <C.BotonFooter>
            <span>&copy; Dr.Andrade - 2022</span>
        </C.BotonFooter>
    </C.Container>
  )
}
