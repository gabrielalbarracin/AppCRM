import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import './css/CreatePedidos.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect,  } from "react";
import {  useParams, } from "react-router-dom";
const URI = 'http://localhost:9000/pedidos/'

 

const CompVerPedidoSecos = () => {
    const navigate = useNavigate()
    const {id} = useParams()
  //procedimiento para editar
  const update = async (e) =>{
    e.preventDefault()
    await axios.put(URI+id,{
       
        
    })
    navigate('/secos')
}

useEffect( () => {
    getTransporteById()
},[])

const getTransporteById = async () =>{
    const res = await axios.get(URI+id)

}


    return(
        <>
        <div className='crearprueba'>
         <form >
                  <select className="categoria form-select" aria-label="Default select example">
                          <option selected>Seleccione categoria</option>
                          <option value="1">Enlatado</option>
                          <option value="2">Liquidos</option>
                          <option value="3">Otros</option>
                      </select>
                      <select className="form-select" aria-label="Default select example">
                          <option selected>Seleccione articulo</option>
                          <option value="1">leche</option>
                          <option value="2">Aceite</option>
                          <option value="3">vinagre</option>
                      </select>
                          <div className="mb-1">
                          <label className="cantidad form-label">Ingrese cantidad</label>
                          {/* <input type="text" className="texto1 form-control" id="formGroupExampleInput2"/> */}
                          <input className="cantidad2 form-control form-control-sm" type="text" aria-label=".form-control-sm example"></input>
                      </div>
                      
                      <div className="mb-1">
                          <label for="formGroupExampleInput2" className="fecha form-label">Ingrese fecha de entrega</label>
                          <input  type='date' className="calendario form-control" id="formGroupExampleInput2"/>
                      </div>
                      <Button className='boton1 btn-sm' variant="success">Listo</Button>
                  <div>
              <table className='table'>
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>articulo</th>
                    <th>cantidad</th>
                    <th>fecha de entrega</th>
                  </tr>
                </thead>
                  {/* <tbody>
                    {pedidos.map ((pedido) =>(
                        <tr key={pedido.id}>
                        <td>{pedido.id}</td>
                        <td>{pedido.articulo}</td>
                        <td>{pedido.cantidad}</td>
                        <td>{pedido.fecha}</td>
                        </tr>
                        ))}
                    </tbody> */}
              </table>
                </div>
              <Button type='submit' className='boton btn-sm' variant="primary">
                      Guardar
                    </Button> 
        </form>
    </div>
      </>
    )
}

export default CompVerPedidoSecos