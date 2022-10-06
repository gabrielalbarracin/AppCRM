import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './css/PedidoLogistica.css'
const URI = 'http://localhost:9000/pedidos/'


const PedidoLogistica = ({show, handleClose}) => {
    
    return(
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='titulo'>Pedidos Logistica</Modal.Title>
        </Modal.Header>
        <Modal.Body className='cuerpo'>
        <select className="categoria form-select" aria-label="Default select example">
                 <option selected>Seleccione categoria</option>
                 <option value="1">Carne</option>
                 <option value="2">Verdura</option>
                 <option value="3"></option>
             </select>
             <select className="form-select" aria-label="Default select example">
                 <option selected>Seleccione articulo</option>
                 <option value="1">Carne vaca</option>
                 <option value="2">pollo</option>
                 <option value="3">chancho</option>
             </select>
                <div className="mb-1">
                 <label className="cantidad form-label">Ingrese cantidad</label>
                 {/* <input type="text" className="texto1 form-control" id="formGroupExampleInput2"/> */}
                 <input className="cantidad2 form-control form-control-sm" type="text" aria-label=".form-control-sm example"></input>
             </div>
            
             <div className="mb-1">
                 <label for="formGroupExampleInput2" className="fecha form-label">Ingrese fecha de entrega</label>
                 <input  type='date' className="calendario form-control" id="formGroupExampleInput2"/>
             </div>
             <Button className='boton1 btn-sm' variant="success">Listo</Button>
        <div>
             <table className='table'>
        <thead>
        <tr>
          <th>Id</th>
          <th>articulo</th>
          <th>cantidad</th>
          <th>fecha de entrega</th>
        </tr>
      </thead>
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
      </table>
      </div>
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

export default PedidoLogistica