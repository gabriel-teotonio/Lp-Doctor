import * as C from '../Services-section/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

export const ServiceTopic = ({icon}) => {
return (
        <C.Topic>
                    <C.TopicHeader>
                        <FontAwesomeIcon icon={icon} />
                        <h3>Consultas</h3>
                        <p>Atendemos diariamente nas seguintes áreas da urologia:</p>
                    </C.TopicHeader>
                    <C.TopicItens>
                        <C.TopicItem>
                            <h5>Urologia Geral</h5>
                            <p>Infecções urinárias , DST´s , avaliações da próstata e saúde masculina de rotina , 
                            doenças benignas e malignas dos rins , ureteres , bexiga , próstata , uretra , pênis e bolsa escrota
                            </p>
                        </C.TopicItem>
                        <C.TopicItem>
                            <h5>Urologia Geral</h5>
                            <p>Infecções urinárias , DST´s , avaliações da próstata e saúde masculina de rotina , 
                            doenças benignas e malignas dos rins , ureteres , bexiga , próstata , uretra , pênis e bolsa escrota
                            </p>
                        </C.TopicItem>
                        <C.TopicItem>
                            <h5>Urologia Geral</h5>
                            <p>Infecções urinárias , DST´s , avaliações da próstata e saúde masculina de rotina , 
                            doenças benignas e malignas dos rins , ureteres , bexiga , próstata , uretra , pênis e bolsa escrota
                            </p>
                        </C.TopicItem>
                    </C.TopicItens>
                </C.Topic>
    )
}