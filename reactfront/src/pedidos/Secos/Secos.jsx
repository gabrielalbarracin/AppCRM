import React, { useState, useEffect, useRef } from 'react';

import CompCreatePedidoSecos from './CreatePedidosSecos'
import { Button } from 'primereact/button';
//import CompCreatePedidoPrueb from './CreatePrueba'
//import {useForm} from 'react-hook-form'
import './Secos.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Home from '../../home/home'
import Table from 'react-bootstrap/Table'
const URI = 'http://localhost:9000/secos/'


const PedidoSecos = () => {
        
         const [transportes, setTransporte] = useState([])
         useEffect(()=>{
            getTransportes()
         },[])

        //mostrar todos los transportes
        const getTransportes = async () =>{
            const res = await axios.get(URI)
            setTransporte(res.data)
        }


        

        //procedimiento para eliminar un transporte
        const deleteTransporte = async (id) =>{
          
            await axios.delete(`${URI}${id}`)
            getTransportes()
        }
return(
    <>
    <div>
    <Home/> 
    </div>

<div className="transporte">
    
    <div className='cabezeratransporte'>
      <Link to='/Createsecos' className="btnNuevo btn btn-success mr-2 btn-sm"><i className='fas fa-plus'></i></Link>
      <h5>Maestro de secos</h5>
    </div>
    <div className='btnexportar'>
        <button className='expo'><i className="fa-sharp fa-solid fa-file-pdf"></i></button>
        <button className='expo'><i className="fa-sharp fa-solid fa-file-excel"></i></button>
    </div>
    {/* <Button className="btnNuevo btn btn-success mr-2 btn-sm" type='submit' onClicks={handleShow} />  */}
     <div className='containertabla'>
       <div className='row'>
        <div className='col'>
            <Table striped bordered hover className='tabla'>
                <thead >
                    <tr className='acciones'>
                        <th>Id</th>
                        <th>Categoria</th>
                        <th>Articulo</th>
                        <th>cantidad</th>
                        <th>Fecha entrega</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className='acciones2'>
                    {transportes.map ( (transporte) => (
                        <tr key={transporte.id}>
                            <td>{transporte.id}</td>
                            <td>{transporte.categoria}</td>
                            <td>{transporte.articulos}</td>
                            <td>{transporte.cantidad}</td>
                            <td>{transporte.fecha_entrega}</td>
                            <td className=''>
                                <div className='btnacciones'>
                                    <Link to={`/VerPedidosSecos/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-magnifying-glass"></i></Link>
                                    <Link to={`/EditPedidosSecos/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-pen-to-square"></i></Link>
                                    <button onClick={() =>deleteTransporte(transporte.id)} className='botonesacciones btn'><i className="fa-solid fa-trash"></i></button>

                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    </div>
 </div>
</div>
</>

    );
}

export default PedidoSecos