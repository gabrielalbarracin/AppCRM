import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
//import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import Button from 'react-bootstrap/Button';
//import './css/style.css'
import Home from '../../home/home'
import Table from 'react-bootstrap/Table'
//import PedidoLogistica from './PedidoLogistica';
const URI = 'http://localhost:9000/logistica/'

const Logistica = () => {
    const [transportes, setPedido] = useState([])
    useEffect( ()=>{
        getPedidos()
    },[])
    
    //procedimiento para mostrar todos los pedidos
    const getPedidos = async () => {
        const res = await axios.get(URI)
        setPedido(res.data)
    }

    //procedimiento para eliminar un pedido
    const deleteTransporte = async (id) => {
       await axios.delete(`${URI}${id}`)
        getPedidos()
    }


    return(
        <>
        <div>
        <Home/> 
        </div>

    <div className="transporte">
        
        <div className='cabezeratransporte'>
          <Link to='/CreatePedidoLogistica' className="btnNuevo btn btn-success mr-2 btn-sm"><i className='fas fa-plus'></i></Link>
          <h5>Maestro de logistica</h5>
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
                            <th>Descripcion</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Patente</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='acciones2'>
                        {transportes.map ( (transporte) => (
                            <tr key={transporte.id}>
                                <td>{transporte.id}</td>
                                <td>{transporte.descripcion}</td>
                                <td>{transporte.marca}</td>
                                <td>{transporte.modelo}</td>
                                <td>{transporte.patente}</td>
                                <td className=''>
                                    <div className='btnacciones'>
                                        <Link to={`/Verprueba/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-magnifying-glass"></i></Link>
                                        <Link to={`/EditPedidosFrescos/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-pen-to-square"></i></Link>
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
    )
}

export default Logistica