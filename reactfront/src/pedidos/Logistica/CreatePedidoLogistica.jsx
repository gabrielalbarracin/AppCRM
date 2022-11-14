import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table'
//import './PedidoLogistica.css'
const URI = 'http://localhost:9000/logistica/'


const CompCreatePedidoLogistica = () => {

    const [transportes, setTransporte] = useState([])
    useEffect(()=>{
       getTransportes()
    },[])
    const getTransportes = async () =>{
        const res = await axios.get(URI)
        setTransporte(res.data)
    }

    const [categoria, setCategoria] = useState('')
    const [articulo, setArticulo] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [fecha_entrega, setFechaEntrega] = useState('')



  const navigate = useNavigate()
  //procedimiento guardar
  const store = async (e) =>{
  e.preventDefault()
  await axios.post(URI, { categoria:categoria, articulo:articulo, cantidad:cantidad, fecha_entrega:fecha_entrega })
  navigate('/Logistica')

  }
    return(
        <>
        
        <div className='crearlogistica'>
         <form onSubmit={store}>
          <div className='titulologistica'>
          <h5>Pedidos logistica</h5>
          </div>
                    <div className="mb-1">
                        <label for="formGroupExampleInput2" className="calendariologistica form-label">Ingrese fecha de entrega</label>
                        <input  type='date' className="calendariologistica form-control" id="formGroupExampleInput2" required={true} value={fecha_entrega} onChange={(e)=> setFechaEntrega(e.target.value)}/>
                    </div>
                <select className="categorialogistica form-select" aria-label="Default select example" required={true}>
                        <option selected>Seleccione categoria</option>
                        <option value="1">Cosas de cama</option>
                        <option value="2">Cosas de cocina</option>
                        <option value="3">Otros</option>
                    </select>
                    <select className="categorialogistica form-select" aria-label="Default select example" required={true}>
                        <option selected>Seleccione articulo</option>
                        <option value="1">Platos</option>
                        <option value="2">Cuchillos</option>
                        <option value="3">Vasos</option>
                    </select>
                        <div className="cantidadlogistica mb-1">
                         <label className="cantidadlogistica form-label">Ingrese cantidad</label> 
                        {/* <input type="text" className="texto1 form-control" id="formGroupExampleInput2"/> */}
                        <input className="cantidadlogistica form-control form-control-sm" type="text" aria-label=".form-control-sm example" required={true} value={cantidad} onChange={(e)=> setCantidad(e.target.value)}></input>
                    </div>
                    <br/>
                    <br/>
                   
                    <Button className='btnlistologistica btn-sm' variant="success">Listo</Button>
                    <div className='tablafrescos'>
           <div className='row'>
            <div className='col'>
                <Table striped bordered hover className='tabla'>
                    <thead >
                        <tr className='accionesfrescos'>
                            <th>Id</th>
                            <th>Descripcion</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Patente</th>
                            
                        </tr>
                    </thead>
                    <tbody className='accionesfrescos'>
                        {transportes.map ( (transporte) => (
                            <tr key={transporte.id}>
                                <td>{transporte.id}</td>
                                <td>{transporte.descripcion}</td>
                                <td>{transporte.marca}</td>
                                <td>{transporte.modelo}</td>
                                <td>{transporte.patente}</td>
                                <td className=''>
                                    <div className='btnguardarfrescos'>
                                    <button type='submit' className='btnguardarfrescos btn-sm' variant="primary">
                                        Guardar
                                    </button>
                                    <button type='submit' className='btnguardarfrescos btn-sm' variant="primary">
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
                </div>
        </form>
    </div>
    
      </>
    )
}

export default CompCreatePedidoLogistica
