import axios from 'axios'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './css/style.css'
const URI = 'http://localhost:9000/pedidos/'


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

    // return(
        // <div>
        //     <div>
        //         <button onClick={openModal}>crear</button>
        //     </div>
        //     <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeOpen}>
        //         <dvi className="modal_dialog">
        //             <h1>modal</h1>
        //             <button onClick={closeModal}>cerrar</button>

        //         </dvi>
        //     </div>
        // </div>
    //     <>
    //     <div className='principal'>
    //         <div className='secundario'>
    //             <Button color='success' onClick={this.abirModal}>mostrar</Button>
    //             </div></div>

    //     <Modal isOpen={this.state.abierto} id='modal1' >
    //         <ModalHeader>
    //             Pedidos
    //         </ModalHeader>
    //         <ModalBody>
    //         <select className="form-select" aria-label="Default select example">
    //             <option selected>Seleccione categoria</option>
    //             <option value="1">Frescos</option>
    //             <option value="2">Logistica</option>
    //             <option value="3">Secos</option>
    //         </select>
            
    //         <select className="form-select" aria-label="Default select example">
    //             <option selected>Seleccione articulo</option>
    //             <option value="1">Carne vaca</option>
    //             <option value="2">pollo</option>
    //             <option value="3">chancho</option>
    //         </select>
           
    //         <div className="mb-3">
    //             <label className="form-label">Ingrese cantidad</label>
    //             <input   type="text"  className="form-control" id="formGroupExampleInput2"/>
    //         </div>
            
    //         <div className="mb-3">
    //             <label for="formGroupExampleInput2" className="form-label">Ingrese fecha de entrega</label>
    //             <input  type="text"  className="form-control" id="formGroupExampleInput2"/>
    //         </div>
    //         <Button color='primary'>Listo</Button>
    //         </ModalBody>
    //         <ModalFooter>
    //             <Button color='primary'>guardar</Button>
    //             <Button color='secondary' onClick={this.abirModal}>cerrar</Button>
    //         </ModalFooter>
    //     </Modal>
     
    //   </>
//     )
// }

// export default CompCreatePedido