

import Icon from '../Icon/Icon.jsx';
import '../Card/Card.css';

function Card({player,index,onPlay}){
      
    let icon=<Icon/>
    if(player =='X'){
        icon=<Icon name='cross'/>

    }
    else if(player=='O'){
        icon=<Icon name='circle'/>
    }

    return (
        <div onClick={()=>onPlay(index)} className="card">
            
             {icon}
        </div>
    )
}

export default Card;