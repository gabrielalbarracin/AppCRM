import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
//import './css/transporte.css'

import axios from "axios";

import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:9000/transporte/'

     

const CompCreatePedidoPrueba = async ( ) => {
  const [id, setId] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [patente, setPatente] = useState('')
  const navigate = useNavigate()
  //procedimiento guardar
  const store = async (e) =>{
  e.preventDefault()
  await axios.post(URI, {id:id, descripcion:descripcion, marca:marca, modelo:modelo, patente:patente })
  navigate('/')

  }
 const CompCreatePedidoPrueb = ({show, handleClose} ) => {
  //  const { handleSubmit} = useForm();

  // const onSubmit = (data) =>{
  //   console.log(data)
 
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
              
            {/* <form  onSubmit={handleSubmit(onSubmit)}> */}
            <form onSubmit={store}>
                <div className='primercampo'>
                {/* value={id} onChange={(e)=> setId(e.target.value)} */}
                    <input className="codigo1 form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Cod'  ></input>
                    {/* value={descripcion} onChange={(e)=> setDescripcion(e.target.value)} */}
                    <input className="codigo form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Descripción'  ></input>
                    <Form.Check required  label="Anular"  feedback="You must agree before submitting."  feedbackType="invalid"/>
                </div>

                <div className='segundocampo'>
                    <h5>Datos del vehículo</h5>
                    <hr/>
                </div>
                <div className='segundoinput'>
                {/* value={marca} onChange={(e)=> setMarca(e.target.value)} */}
                    <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Marca' ></input> 
                    {/* value={modelo} onChange={(e)=> setModelo(e.target.value)} */}
                    <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Modelo' ></input>
                    {/* value={patente} onChange={(e)=> setPatente(e.target.value)} */}
                    <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Patente' ></input>
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
                <input type='submit' value="guardar"/>
                </form>
                </Modal.Body>
                <Modal.Footer className='barrainferior'>
                    <Button className='boton btn-sm' variant="danger">
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
}
    export default CompCreatePedidoPrueba