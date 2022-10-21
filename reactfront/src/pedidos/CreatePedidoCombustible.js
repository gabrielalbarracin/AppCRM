import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './css/CreatePedidos.css'
const URI = 'http://localhost:9000/pedidos/'


const CompCreatePedidoCombustible = ({show, handleClose}) => {
    
    return(
        <>
        <Modal className='modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='titulo'>Carga de combustible</Modal.Title>
        </Modal.Header>
        <Modal.Body className='cuerpo' >
        <select className="categoria form-select" aria-label="Default select example">
                 <option selected>Vehículo</option>
                 <option value="1">Renault Kangoo Dominio:GOA563</option>
                 <option value="2">Renault Kangoo Dominio:PCB159</option>
                 <option value="3">Otros</option>
             </select>
             <select className="form-select" aria-label="Default select example">
                 <option selected>Tipo de combustible</option>
                 <option value="1">Gasoil</option>
                 <option value="2">Nafta</option>
                 <option value="3">GNC</option>
                 <option value="3">Gas envasado</option>
             </select>
                <div className="mb-1">
                 <label className="cantidad form-label">Ingrese cantidad</label>
                 {/* <input type="text" className="texto1 form-control" id="formGroupExampleInput2"/> */}
                 <input className="cantidad2 form-control form-control-sm" type="text" aria-label=".form-control-sm example"></input>
             </div>
            
             <div className="mb-1">
                 <label for="formGroupExampleInput2" className="fecha form-label">Comprobante de referencia</label>
                 <input className="cantidad2 form-control form-control-sm" type="text" aria-label=".form-control-sm example"></input>
             </div>

             <div className="mb-1">
                 <label for="formGroupExampleInput2" className="fecha form-label">Total a pagar</label>
                 <input className="cantidad2 form-control form-control-sm" type="text" aria-label=".form-control-sm example"></input>
             </div>

        <div>
            <h6>Se paga o se debe</h6>
            <fieldset>
                <Form.Group as={Row}>
                <Col sm={10}>
                    <Form.Check
                    type="radio"
                    label="Se paga"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    />
                    <Form.Check
                    type="radio"
                    label="Se anoto en cuenta"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    />
                </Col>
                </Form.Group>
            </fieldset>
        </div>
        </Modal.Body>
      
      </Modal>
      </>
    )
}

export default CompCreatePedidoCombustible