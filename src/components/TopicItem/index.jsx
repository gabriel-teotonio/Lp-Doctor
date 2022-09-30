import * as C from '../Services-section//style'

export const TopicItem = ({ item }) => {
    return(
        <C.TopicItem>
        <h5>{item.title}</h5>
        <p>{item.description}</p>
        </C.TopicItem> 
    )
}