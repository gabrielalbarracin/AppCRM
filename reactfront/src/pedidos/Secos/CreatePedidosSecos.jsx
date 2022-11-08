import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table'
import './Secos.css'
//import './css/CreatePedidos.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:9000/secos/'

 

const CompCreatePedidoSecos = () => {
    const [categoria, setCategoria] = useState('')
    const [articulo, setArticulo] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [fecha_entrega, setFechaEntrega] = useState('')
//   const [transportes, setTransporte] = useState([])
//   useEffect(()=>{
//      getTransportes()
//   },[])
//   const getTransportes = async () =>{
//     const res = await axios.get(URI)
//     setTransporte(res.data)
// }
   //const [id, setId] = useState('')

  //const [anular, setAnular] = useState('')
  const navigate = useNavigate()
  //procedimiento guardar
  const store = async (e) =>{
  e.preventDefault()
  await axios.post(URI, { categoria:categoria, articulo:articulo, cantidad:cantidad, fecha_entrega:fecha_entrega,  })
  navigate('/PedidosSecos')

  }  



    return(
        <>
        <div className='crearsecos'>
         <form onSubmit={store}>
          <h5 className='titulosecos'>Pedidos secos</h5>
        
          <div className='secos'>
           
                  <select className="categoriasecos form-select" required={true} value={categoria} onChange={(e)=> setCategoria(e.target.value)} >
                          <option selected>Seleccione categoria</option>
                          <option>Enlatado</option>
                          <option>Liquidos</option>
                          <option>Otros</option>
                      </select>
                      <select className="categoriasecos form-select" required={true} value={articulo} onChange={(e)=> setArticulo(e.target.value)} >
                          <option selected>Seleccione articulo</option>
                          <option>leche</option>
                          <option>Aceite</option>
                          <option>vinagre</option>
                      </select>
                          <div className="cantidadsecos mb-1">
                          <label className=" form-label">Ingrese cantidad</label>
                          {/* <input type="text" className="texto1 form-control" id="formGroupExampleInput2"/> */}
                          <input className="cantidad form-control form-control-sm" type="text" aria-label=".form-control-sm example" required={true} value={cantidad} onChange={(e)=> setCantidad(e.target.value)}></input>
                      </div>
                      <br/>
                      <br/>
                      
                      <div className="calendariosecos mb-1">
                          <label for="formGroupExampleInput2" className="fecha form-label">Ingrese fecha de entrega</label>
                          <input  type='date' className=" form-control" id="formGroupExampleInput2" required={true} value={fecha_entrega} onChange={(e)=> setFechaEntrega(e.target.value)}/>
                      </div>
            </div>
                      <Button type='submit' className='btnlistoseco btn-sm' variant="success">Listo</Button>
          {/* <div className='conteinertablasecos'>
           <div className='row'>
            <div className='col'>
                <Table striped bordered hover className='tablasecos'>
                    <thead >
                        <tr className='accionessecos'>
                            <th>Id</th>
                            <th>Descripcion</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Patente</th>
                            
                        </tr>
                    </thead>
                    <tbody className='accionessecos2'>
                        {transportes.map ( (transporte) => (
                            <tr key={transporte.id}>
                                <td>{transporte.id}</td>
                                <td>{transporte.descripcion}</td>
                                <td>{transporte.marca}</td>
                                <td>{transporte.modelo}</td>
                                <td>{transporte.patente}</td>
                                <td className=''>
                                    <div className='btnguarsdarsecos'>
                                    <button type='submit' className='btnguarsdarsecos btn-sm' variant="primary">
                                        Guardar
                                    </button>
                                    <button type='submit' className='btnguarsdarsecos btn-sm' variant="primary">
                                        Cancelar
                                    </button> 
                                    </div>
                                  </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
              </div>
            </div>
          </div> */}
        </form>
     </div>
      </>
    )
}

export default CompCreatePedidoSecos