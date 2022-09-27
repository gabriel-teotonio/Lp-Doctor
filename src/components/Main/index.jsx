import { BtnPrimary } from '../Header/style'
import * as C from './style'

import imgDoctor from '../../assets/images/img-doctor.png'
import elementsBg from '../../assets/images/Elements-bg.png'

export const Main = () => {
    return (
        <C.Container>
            <C.infoMain>
                <C.TitleMain>O melhor <C.EmphasesTitle>urologista</C.EmphasesTitle> da região.vem tratar seu pênis fdp</C.TitleMain>
                <C.paragraphMain>Faça uma consulta agora mesmo, e encontre o melhor para sua saúde</C.paragraphMain>
                <BtnPrimary 
                    type={'secundary'}
                    style={{
                        marginTop:'1rem'
                    }}
                >
                Marcar consulta
                </BtnPrimary>
            </C.infoMain>

            <C.ImageMain src={imgDoctor} alt=''></C.ImageMain>

        </C.Container>
    )
}