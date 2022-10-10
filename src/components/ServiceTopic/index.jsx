import * as C from '../Services-section/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { TopicItem } from '../TopicItem'
import { Data } from '../../data/datas'

export const ServiceTopic = ({icon, data, dataHeader}) => {
return (
        <C.Topic>
            <C.TopicHeader>
                <FontAwesomeIcon icon={icon} />
                <h3>{dataHeader.title}</h3>
                <p>{dataHeader.description}</p>
            </C.TopicHeader>
            <C.TopicItens>
                {
                    data.map((item, index) => (
                        <TopicItem key={index} item={item}/>
                    ))
                }
            </C.TopicItens>
        </C.Topic>
    )
}