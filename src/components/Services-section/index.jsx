import * as C from './style'   
import {faFileWaveform} from '@fortawesome/free-solid-svg-icons'
import {faStethoscope} from '@fortawesome/free-solid-svg-icons'
import {faPersonDotsFromLine} from '@fortawesome/free-solid-svg-icons'
import { ServiceTopic } from '../ServiceTopic'


export const Services = () => {
    return (
        <C.Container>
            <C.TitleServices>Serviços</C.TitleServices>
            <C.ServicesMain>
                <ServiceTopic 
                icon={faFileWaveform}
                />
                <ServiceTopic
                icon={faStethoscope}
                />
                <ServiceTopic
                icon={faPersonDotsFromLine} 
                />
            </C.ServicesMain>
        </C.Container>
    )
}