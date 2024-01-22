import {FaPen,FaRegCircle,FaTimes,FaAd} from "react-icons/fa";


function Icon({name}){

    if(name=="circle")
       return <FaRegCircle/>;
    else if(name=="cross")
       return <FaTimes/>;

    else if(name=='ad')
       return <FaAd/>;
    else{
        return <FaPen/>
    }
}

export default Icon;