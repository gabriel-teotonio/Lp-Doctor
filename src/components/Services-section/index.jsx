import * as C from './style'   
import {faFileWaveform} from '@fortawesome/free-solid-svg-icons'
import {faStethoscope} from '@fortawesome/free-solid-svg-icons'
import {faPersonDotsFromLine} from '@fortawesome/free-solid-svg-icons'
import { ServiceTopic } from '../ServiceTopic'
import { Data } from '../../data/datas'


export const Services = () => {
    return (
        <C.Container>
            <C.TitleSection>Serviços</C.TitleSection>
            <C.ServicesMain>
                <ServiceTopic 
                icon={faFileWaveform}
                data={Data.consultas}
                dataHeader={Data.headers.Hconsulta}
                />
                <ServiceTopic
                icon={faStethoscope}
                data={Data.diagnostico}
                dataHeader={Data.headers.Hdiagnostico}
                />
                <ServiceTopic
                icon={faPersonDotsFromLine} 
                data={Data.tratamento}
                dataHeader={Data.headers.Htratamento}
                />
            </C.ServicesMain>
        </C.Container>
    )
}