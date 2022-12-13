import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ELIMINARPRODUCTO_DELETE_ENDPOINT} from "../connections/endpoints";

const EliminarProductoBoton= ({id})=>{
    
       const navegar= useNavigate()

    const eliminar= async()=>{
       axios.delete(`${ELIMINARPRODUCTO_DELETE_ENDPOINT}/${id}`) 
       .then(respuesta=>{
            navegar("/")
       })
       .catch(err=>{
            console.log(err)
       })
    }

    const crearAlerta= ()=>{
        const titulo ="Eliminar producto \n ¿Esta seguro de eliminar el producto?" 
        return (window.confirm(titulo) === true) ? eliminar() : ()=>{}
    }

    return(
        <Button variant="danger" size="sm" 
            onClick={crearAlerta}        
        >
            Eliminar
        </Button>
    )

    
}

export {EliminarProductoBoton}