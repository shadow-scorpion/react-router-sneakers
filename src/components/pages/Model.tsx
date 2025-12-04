import {useLocation, useParams} from "react-router-dom";
import {sneakers} from "../../state/State.ts";

const Model = () => {
    const params = useParams()
    const pathname = useLocation().pathname
    const regex = /([a-z]+)/i;
    const brand = pathname.match(regex)?.[0];
    console.log(params)

    let currentSneaker = null

    switch (brand){
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
                <h2>This model didn't find</h2>
        )
    )
};

export default Model;