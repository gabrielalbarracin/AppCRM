import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const URI = 'http://localhost:9000/Nuevopedidos'
const CompCreatePedido = () =>{
    // const [id, setId] = useState('')
    // const [descripcion, setDescripcion] = useState('')
    // const [cantidad, setCantidad] = useState('')
    // const [fecha, setFecha] = useState('')
    // const navigate = useNavigate()

    // //procedimiento guardar
    // const store = async (e) => {
    //     e.preventDefault()
    //     await axios.post(URI, {id: id, descripcion: descripcion, cantidad: cantidad, fecha: fecha })
    //     navigate('/')
    // }

    return(
        <div><h1>ola</h1></div>
        
    //     <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //     <div className="modal-dialog">
    //       <div className="modal-content">
    //         <div className="modal-header">
    //           <h5 className="modal-title" id="exampleModalLabel">New message</h5>
    //           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //         </div>
    //         <div className="modal-body">
    //           <form>
    //             <div className="mb-3">
    //               <label for="recipient-name" className="col-form-label">Recipient:</label>
    //               <input type="text" className="form-control" id="recipient-name"/>
    //             </div>
    //             <div className="mb-3">
    //               <label for="message-text" className="col-form-label">Message:</label>
    //               <textarea className="form-control" id="message-text"></textarea>
    //             </div>
    //           </form>
    //         </div>
    //         <div className="modal-footer">
    //           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //           <button type="button" class="btn btn-primary">Send message</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    )
}

export default CompCreatePedido