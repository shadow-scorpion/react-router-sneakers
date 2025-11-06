import {useParams} from "react-router-dom";
import {Sneaker, sneakers} from "../../state/State.ts";





const Model = () => {
    const params = useParams()
    // const currentModal = params ? sneakers[params.brand].find((shoes: Sneaker) => shoes.id === params.id) : null

    let currentSneaker = null

    // todo: make this component using

    switch (params.brand){
        case 'adidas':
            currentSneaker = sneakers.adidas.find(sneaker => sneaker.id === params.id)
            break
        case 'puma':
            currentSneaker = sneakers.puma.find(sneaker => sneaker.id === params.id)
            break
        case 'abibas':
            break
        default:
            'Nothing'
    }

    return (
        (currentSneaker ?
                <div>
                    <h2>{currentSneaker?.model}</h2>
                    <div>
                        <p>{currentSneaker?.collection}</p>
                        <p>{currentSneaker?.price}</p>
                        <img src={currentSneaker?.picture} alt={currentSneaker?.model}/>
                    </div>
                </div>
                :
                <div>This model doesn't exist - {params.brand} {params.id}</div>
        )
    )
};

export default Model;