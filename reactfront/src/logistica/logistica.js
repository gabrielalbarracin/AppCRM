import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
//import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import Button from 'react-bootstrap/Button';
//import './css/style.css'
import PedidoLogistica from './PedidoLogistica';
const URI = 'http://localhost:9000/pedidos/'

const Logistica = () => {
    const [pedidos, setPedido] = useState([])
    useEffect( ()=>{
        getPedidos()
    },[])
    
    //procedimiento para mostrar todos los pedidos
    const getPedidos = async () => {
        const res = await axios.get(URI)
        setPedido(res.data)
    }

    //procedimiento para eliminar un pedido
    const deletePedido = async (id) => {
       await axios.delete(`${URI}${id}`)
        getPedidos()
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })
    return(
        <>
        <div className='container'>
            <div className='row'>
                
                    <div className='titulofrescos'>
                    <Button className='btn-volver' href='/home'><i className="fa-solid fa-arrow-left"></i></Button>
                    <Button variant='success' onClick={handleShow} to="/pedidos"  className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Button>
                    
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                               <th>Id</th> 
                               <th>Operario</th>
                               <th>Fecha pedido</th>
                               <th>Fecha entrega</th>
                               <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pedidos.map ((pedido) =>(
                               <tr key={pedido.id}>
                                    <td>{pedido.id}</td>
                                    <td>{pedido.operario}</td>
                                    <td>{pedido.fecha_carga}</td>
                                    <td>{pedido.fecha_entrega}</td>
                                    <td>
                                        
                                        <button  className='btn-acciones btn btn-success btn-sm'><i className="fa-solid fa-magnifying-glass"></i></button> 
                                        <Link to={`/edit/${pedido.id}`} className='btn-acciones btn btn-info btn-sm'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deletePedido(pedido.id)} className='btn-acciones btn btn-danger btn-sm'><i className="fa-solid fa-trash"></i></button>
                                        
                                    </td>
                               </tr> 
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div> 
        <PedidoLogistica show={show} handleClose={handleClose}/>
        </>
    )
}

export default Logistica