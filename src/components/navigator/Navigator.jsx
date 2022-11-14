import {useNavigate} from "react-router-dom";

const Navigator = ({destinoUno, destinoDos, pathUno, pathDos}) => {

    //En una variable, NO un hook, instancio el método useNavigate...para poder acceder a los métodos de react-router-dom

    const surfer = useNavigate();

     return (
         <div className='navigatorDesign'>
            <div onClick={()=>surfer(pathUno)}>{destinoUno}</div>
            <div onClick={()=>surfer(pathDos)}>{destinoDos}</div>
        </div>
     )
}
export default Navigator;