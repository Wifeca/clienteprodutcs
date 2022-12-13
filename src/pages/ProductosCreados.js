import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProductoCard } from "../componentes/ProductoCard";
import { PRODUCTOSCREADOS_GET_ENDPOINT } from "../connections/endpoints";

const ProductosCreados= ()=>{
    
    const [losProductos, setLosProductos]= useState([])

    useEffect(()=>{
       axios.get(PRODUCTOSCREADOS_GET_ENDPOINT) 
       .then(respuesta=>{
            setLosProductos(respuesta.data)
       })
       .catch(err=>{
            console.log(err)
       })
    }, [])

    return(
        <Container className="mt-3 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" log="4">
                <h3 className="text-center">Productos Disponibles</h3>
                <div className="row justify-content-center">
                    {losProductos.map(producto=> <ProductoCard key={producto.idProducto} producto={producto}/>)}
                </div>
                </Col>
            </Row>
        </Container>
    )

    
}

export {ProductosCreados}