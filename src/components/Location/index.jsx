import React from 'react'
import { Container } from './style'
import { faLocationDot, faCalendarDays, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {TitleSection} from '../Services-section/style'
import { BtnPrimary } from '../Header/style'
import * as C from "./style"

export const Location = () => {
  return (
    <Container>
        <TitleSection className='title-location'>Localização e funcionamento</TitleSection>
        <C.MainLocation>
                <C.Infos>
                <C.InfoOperation>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <C.ListOperation>
                        <C.ItemOperation>Segunda à sexta | 08:00 - 12:00 / 13:30 - 18:00</C.ItemOperation>
                        <C.ItemOperation>Sábado | 08:00 - 12:00</C.ItemOperation>
                    </C.ListOperation>
                </C.InfoOperation>
                <C.InfoLocation>
                    <FontAwesomeIcon icon={faLocationDot } />
                    <span>Rua Alcindo Cacela - Avenida Nazaré</span>
                </C.InfoLocation>
                <C.InfoContact>
                    <FontAwesomeIcon icon={faPhoneFlip} />
                    <span>(91) 989675421 | 3257-9865</span>
                </C.InfoContact>
                </C.Infos>
                <C.MapLocation>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31908.289223557753!2d-48.51477260176715!3d-1.452596743467503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e82d745fb3b%3A0x6d5604701be445e3!2zTmF6YXLDqSwgQmVsw6ltIC0gUEEsIDY2MDM1LTE0MA!5e0!3m2!1spt-BR!2sbr!4v1665404637777!5m2!1spt-BR!2sbr" width="400" height="300" style={{border:'0', borderRadius:'4px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </C.MapLocation>
        </C.MainLocation>
        <BtnPrimary
        role="button" 
        href='#'
        type={'primary'}
        style={{width:'300px', margin:'4rem auto'}}
        >
        Fazer uma consulta
        </BtnPrimary>
    </Container>
  )
}