import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
//import './css/transporte.css'





const CompCreatePedidoTransporte = ({show, handleClose}) => {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) =>{
    console.log(data)
  }
    return(
        
            <>
              <Modal  className='modal' show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Alta de vehículos
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='primercampo'>
                    <input className="codigo1 form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Cod'></input>
                    <input className="codigo form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Descripción'></input>
                    <Form.Check required  label="Anular"  feedback="You must agree before submitting."  feedbackType="invalid"/>
                </div>

                <div className='segundocampo'>
                    <h5>Datos del vehículo</h5>
                    <hr/>
                </div>
                <div className='segundoinput'>
                    <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Marca'></input>
                    <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Modelo'></input>
                    <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Patente'></input>
                    <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Patente acoplado'></input>
                    <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Carga maxima'></input>
                   
                    <Form.Check required  label="Refrigerado"  feedback="You must agree before submitting."  feedbackType="invalid"/>
                </div>
                <br/>
                <br/>
                <br/>
                <div className='tercercampo'>
                    <h5>Datos adicionales</h5>
                    <hr/>
                </div>

                <div className='tercerinput'>
                <h5>Vencimiento seguro</h5> <h5>Vencimiento patente</h5>
                <input  type='date' className="calendario form-control" id="formGroupExampleInput2"/>
                <input  type='date' className="calendario form-control" id="formGroupExampleInput2"/>
                
                  <h5>Vencimiento armat</h5> <h5>Vencimiento VTV</h5>
                  <input  type='date' className="calendario form-control" id="formGroupExampleInput2"/>
                <input  type='date' className="calendario form-control" id="formGroupExampleInput2"/>
               
                </div>
          </form>
                </Modal.Body>
                <Modal.Footer className='barrainferior'>
                    <Button className='boton btn-sm' variant="danger" onClick={handleClose}>
                      Cerrar
                    </Button>
                    <Button type='submit' className='boton btn-sm' variant="primary">
                      Guardar
                    </Button>
                </Modal.Footer>
              </Modal>
            </>
        )
    }
    
    export default CompCreatePedidoTransporte



    //     <>
    //     <Modal className='modal' show={show} onHide={handleClose}>
    //     <Modal.Header closeButton>
    //       <Modal.Title className='titulo'>Transporte</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body className='cuerpo' >
    //     <select className="categoria form-select" aria-label="Default select example">
    //              <option selected>Seleccione categoria</option>
    //              <option value="1">Carne</option>
    //              <option value="2">Verdura</option>
    //              <option value="3"></option>
    //          </select>
    //          <select className="form-select" aria-label="Default select example">
    //              <option selected>Seleccione articulo</option>
    //              <option value="1">Carne vaca</option>
    //              <option value="2">pollo</option>
    //              <option value="3">chancho</option>
    //          </select>
    //             <div className="mb-1">
    //              <label className="cantidad form-label">Ingrese cantidad</label>
    //              {/* <input type="text" className="texto1 form-control" id="formGroupExampleInput2"/> */}
    //              <input className="cantidad2 form-control form-control-sm" type="text" aria-label=".form-control-sm example"></input>
    //          </div>
            
    //          <div className="mb-1">
    //              <label for="formGroupExampleInput2" className="fecha form-label">Ingrese fecha de entrega</label>
    //              <input  type='date' className="calendario form-control" id="formGroupExampleInput2"/>
    //          </div>
    //          <Button className='boton1 btn-sm' variant="success">Listo</Button>
    //     <div>
    //          <table className='table'>
    //     <thead>
    //     <tr>
    //       <th>Id</th>
    //       <th>articulo</th>
    //       <th>cantidad</th>
    //       <th>fecha de entrega</th>
    //     </tr>
    //   </thead>
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
    //   </table>
    //   </div>
    //     </Modal.Body>
    //     <Modal.Footer className='barrainferior'>
    //       <Button className='boton btn-sm' variant="danger" onClick={handleClose}>
    //         Cerrar
    //       </Button>
    //       <Button className='boton btn-sm' variant="primary" onClick={handleClose}>
    //         Guardar
    //       </Button>
    //     </Modal.Footer>
    //   </Modal>
  
