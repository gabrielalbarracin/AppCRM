import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './css/CreatePedidos.css'
const URI = 'http://localhost:9000/pedidos/'


const CompCreatetelefono = ({show, handleClose}) => {
    
    return(
        <>
        <Modal className='modal modal-dialog-scrollable' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='titulo'>Regargas telefonicas</Modal.Title>
        </Modal.Header>
        <Modal.Body className='cuerpo' >
        
                <div className="mb-1">
                 <label className="cantidad form-label">Ingrese cliente</label>
                 {/* <input type="text" className="texto1 form-control" id="formGroupExampleInput2"/> */}
                 <input className="cantidad2 form-control form-control-sm" type="text" aria-label=".form-control-sm example"placeholder='Nombre y apellido' ></input>
                 <label className="cantidad form-label">Empresa telefonica</label>
                 <input className="cantidad2 form-control form-control-sm" type="text" aria-label=".form-control-sm example" ></input>
                 <label className="cantidad form-label">Numero de linea</label>
                 <input className="cantidad2 form-control form-control-sm" type="text" aria-label=".form-control-sm example" ></input>
                 <label className="cantidad form-label">importe de la carga</label>
                 <input className="cantidad2 form-control form-control-sm" type="text" aria-label=".form-control-sm example" ></input>
                 <select className="categoria form-select" aria-label="Default select example">
                 <option selected>Pago del consumo</option>
                 <option value="1">PAGO AL INTENDENTE</option>
                 <option value="2">DESCONTAR A EMPRESA CONTRATADORA</option>
                 <option value="3">REEMBOLSABLE</option>
                 <option value="3">DEBE AL INTENDENTE</option>
             </select>
             </div>
            
             {/* <div className="mb-1">
                 <label for="formGroupExampleInput2" className="fecha form-label">Ingrese fecha de entrega</label>
                 <input  type='date' className="calendario form-control" id="formGroupExampleInput2"/>
             </div> */}
            
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
  
        </Modal.Body>
        <Modal.Footer className='barrainferior'>
          <Button className='boton btn-sm' variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
          <Button className='boton btn-sm' variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}

export default CompCreatetelefono