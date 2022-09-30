import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
const URI = 'http://localhost:9000/pedidos/'

const CompShuwPedidos = () => {
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


    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/pedidos" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
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
                                        <button  className='btn btn-success'>ver</button> 
                                        <Link to={`/edit/${pedido.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deletePedido(pedido.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                                        
                                    </td>
                               </tr> 
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>

            {/* <div className='principal'>
            <div className='secundario'>
                <Button color='success' onClick={this.abirModal}>mostrar</Button>
                </div></div>

        <Modal isOpen={this.state.abierto} id='modal1'>
            <ModalHeader>
                Pedidos
            </ModalHeader>
            <ModalBody>
                select
            </ModalBody>
            <ModalFooter>
                <Button color='primary'>guardar</Button>
                <Button color='secondary' onClick={this.abirModal}>cerrar</Button>
            </ModalFooter>
        </Modal>*/}
        </div> 
    )
}

export default CompShuwPedidos