import React from 'react'
import * as C from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faUserNurse } from '@fortawesome/free-solid-svg-icons'
import { TitleSection } from '../Services-section/style'


export const About = () => {
  return (
    <C.Container>
        <C.Infos>
            <TitleSection className='info-title'>Sobre o Dr.Andrade</TitleSection>
            <C.InfoText>It is a long established fact that a reader will be distracted by 
                the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
            </C.InfoText>
        </C.Infos>
       <C.ExperienceList>
            <C.ExperienceItem>
                <FontAwesomeIcon icon={faGraduationCap} />
                <C.ItemDescription>Mestrado em urologia</C.ItemDescription>
            </C.ExperienceItem>
            <C.ExperienceItem>
                <FontAwesomeIcon icon={faUserNurse} />
                <C.ItemDescription>Residente no laboratório Einsten</C.ItemDescription>
            </C.ExperienceItem>
            <C.ExperienceItem>
                <h3>6+</h3>
                <C.ItemDescription>Mais de 6 anos cuidando e ajudando pacientes</C.ItemDescription>
            </C.ExperienceItem>
       </C.ExperienceList>
    </C.Container>
  )
}
