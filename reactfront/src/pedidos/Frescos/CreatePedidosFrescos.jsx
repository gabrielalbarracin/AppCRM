// import axios from 'axios'
// import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import './Frescos.css'
const URI = 'http://localhost:9000/frescos/'


const CompCreatePedidoFrescos = () => {

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
  await axios.post(URI, { categoria:categoria, articulo:articulo, cantidad:cantidad, fecha_entrega:fecha_entrega  })
  navigate('/Frescos')

  }  
    return(
        
        <div className='crearfrescos'>
         <form onSubmit={store}>
                <div className='titulo'>
                  <h5>Pedidos frescos</h5>
                </div>
        <div className='fres'>
                    <div className="mb-1">
                        <label for="formGroupExampleInput2" className="calendariofrescos form-label">Ingrese fecha de entrega</label>
                        <input  type='date' className="calendariofrescos form-control" id="formGroupExampleInput2" required={true} value={fecha_entrega} onChange={(e)=> setFechaEntrega(e.target.value)}/>
                    </div>
                <select className="categoriafrescos form-select"  required={true} value={categoria} onChange={(e)=> setCategoria(e.target.value)}>
                        <option selected>Seleccione categori</option>
                        <option>Carne</option>
                        <option>Verdura</option>
                        <option></option>
                </select>
                    <select className=" categoriafrescos form-select" required={true} value={articulo} onChange={(e)=> setArticulo(e.target.value)}>
                        <option selected >Seleccione articulo</option>
                        <option >Carne vaca</option>
                        <option>pollo</option>
                        <option>chancho</option>
                    </select>
                        <div className="cantidadfrescos mb-1">
                        {/* <label className="cantidad form-label">Ingrese cantidad</label> */}
                        {/* <input type="text" className="texto1 form-control" id="formGroupExampleInput2"/> */}
                        <label for="formGroupExampleInput2" className="cantidadfrescos form-label">Ingrese cantidad</label>
                        <input className="cantidadfrescos form-control form-control-sm" type="text" aria-label=".form-control-sm example" required={true} value={cantidad} onChange={(e)=> setCantidad(e.target.value)}></input>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    
        </div>  
        <Button type='submit' className='btnlistofrescos btn-sm' variant="success">Listo</Button>
         {/* <div className='tabla'>
           <div className='row'>
            <div className='col'>
                <Table striped bordered hover className=''>
                    <thead >
                        <tr >
                            <th>Id</th>
                            <th>Categoria</th>
                            <th>Articulo</th>
                            <th>Cantidad</th>
                            <th>fecha entrega</th>
                            <th>acciones</th>
                        </tr>
                    </thead>
                    <tbody >
                        {transportes.map ( (transporte) => (
                            <tr key={transporte.id}>
                                <td>{transporte.id}</td>
                                <td>{transporte.categoria}</td>
                                <td>{transporte.articulo}</td>
                                <td>{transporte.cantidad}</td>
                                <td>{transporte.fecha_entrega}</td>
                                <td className=''>
                                    <div className='btnguardarfrescos'>
                                    <button type='submit' className='btnguardarfrescos btn-sm' variant="primary">
                                    <i class="fa-solid fa-check"></i>
                                    </button>
                                    <button type='submit' className='btnguardarfrescos btn-sm' variant="primary">
                                    <i className="fa-solid fa-xmark"></i>
                                    </button> 
                                    </div>
                                  </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </div>
            </div>
         </div>  */}
               
        </form>
    </div>
     
    )
}

export default CompCreatePedidoFrescos




// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })
//     return(
//         <div>
//             <Button type="button"  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//             Launch demo modal
//             </Button>
//             <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div clasNames="modal-dialog">
//                 <div className="modal-content">
//                 <div className="modal-header">
//                     <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div className="modal-body">
//                     ...
//                 </div>
//                 <div className="modal-footer">
//                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                     <button type="button" className="btn btn-primary">Save changes</button>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//     )
// }
// export default CompCreatePedido



// class CompCreatePedido extends React.Component{
  
// state={ abierto:false,}
// abirModal=()=>{
//     this.setState({abierto: !this.state.abierto})
// }
// const CompCreatePedido = () => {
// const  [isOpen, closeOpen] = 

// const[isOpen, setIsOpenModal] = useState(true);
// const openModal = ()=>{

// }
// const closeModal = () =>{
//     setIsOpenModal(false)
// }

//     return(
//         <div>
//             <div>
//                 <button onClick={openModal}>crear</button>
//             </div>
//             <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeOpen}>
//                 <dvi className="modal_dialog">
//                     <h1>modal</h1>
//                     <button onClick={closeModal}>cerrar</button>

//                 </dvi>
//             </div>
//         </div>
//         <>
//         <div className='principal'>
//             <div className='secundario'>
//                 <Button color='success' onClick={this.abirModal}>mostrar</Button>
//                 </div></div>

//         <Modal isOpen={this.state.abierto} id='modal1' >
//             <ModalHeader>
//                 Pedidos
//             </ModalHeader>
//             <ModalBody>
//             <select className="form-select" aria-label="Default select example">
//                 <option selected>Seleccione categoria</option>
//                 <option value="1">Frescos</option>
//                 <option value="2">Logistica</option>
//                 <option value="3">Secos</option>
//             </select>
            
//             <select className="form-select" aria-label="Default select example">
//                 <option selected>Seleccione articulo</option>
//                 <option value="1">Carne vaca</option>
//                 <option value="2">pollo</option>
//                 <option value="3">chancho</option>
//             </select>
           
//             <div className="mb-3">
//                 <label className="form-label">Ingrese cantidad</label>
//                 <input   type="text"  className="form-control" id="formGroupExampleInput2"/>
//             </div>
            
//             <div className="mb-3">
//                 <label for="formGroupExampleInput2" className="form-label">Ingrese fecha de entrega</label>
//                 <input  type="text"  className="form-control" id="formGroupExampleInput2"/>
//             </div>
//             <Button color='primary'>Listo</Button>
//             </ModalBody>
//             <ModalFooter>
//                 <Button color='primary'>guardar</Button>
//                 <Button color='secondary' onClick={this.abirModal}>cerrar</Button>
//             </ModalFooter>
//         </Modal>
     
//       </>
//     )
// }

// export default CompCreatePedido