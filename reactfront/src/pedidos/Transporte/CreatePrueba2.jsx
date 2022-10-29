import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
//import './css/Transporte/transporte.css'
import '../css/Transporte/transporte.css'
import axios from "axios";

import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:9000/transporte/'

     

const CompCreatePedidoPrueba2 =  ( ) => {
  //const [id, setId] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [patente, setPatente] = useState('')
  const [ven_seguro, setVenSeguro] = useState ('')
  const navigate = useNavigate()
  //procedimiento guardar
  const store = async (e) =>{
  e.preventDefault()
  await axios.post(URI, { descripcion:descripcion, marca:marca, modelo:modelo, patente:patente })
  navigate('/prueba')

  }


return(
    <div>
         <form onSubmit={store}>
                <div className='primercampo'>
                {/* value={id} onChange={(e)=> setId(e.target.value)} */}
                    {/* <input className="codigo1 form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Cod' value={id} onChange={(e)=> setId(e.target.value)} ></input> */}
                    {/* value={descripcion} onChange={(e)=> setDescripcion(e.target.value)} */}
                    <input className="codigo form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Descripción' value={descripcion} onChange={(e)=> setDescripcion(e.target.value)}  ></input>
                    <Form.Check required  label="Anular"  feedback="You must agree before submitting."  feedbackType="invalid"/>
                </div>

                <div className='segundocampo'>
                    <h5>Datos del vehículo</h5>
                    <hr/>
                </div>
                <div className='segundoinput'>
                {/* value={marca} onChange={(e)=> setMarca(e.target.value)} */}
                    <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Marca' value={marca} onChange={(e)=> setMarca(e.target.value)} ></input> 
                    {/* value={modelo} onChange={(e)=> setModelo(e.target.value)} */}
                    <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Modelo' value={modelo} onChange={(e)=> setModelo(e.target.value)} ></input>
                    {/* value={patente} onChange={(e)=> setPatente(e.target.value)} */}
                    <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Patente' value={patente} onChange={(e)=> setPatente(e.target.value)} ></input>
                    <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Patente acoplado'></input>
                    <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Carga maxima'></input>
                </div>

                <Form.Check required  label="Refrigerado"  feedback="You must agree before submitting."  feedbackType="invalid"/>
               
                <br/>
                <br/>
                <br/>
                <div className='tercercampo'>
                    <h5>Datos adicionales</h5>
                    <hr/>
                </div>

                <div className='tercerinput'>
                <h5>Vencimiento seguro</h5> <h5>Vencimiento patente</h5>
                <input  type='date' className="calendario form-control" id="formGroupExampleInput2" value={ven_seguro} onChange={(e)=> setVenSeguro(e.target.value)}/>
                <input  type='date' className="calendario form-control" id="formGroupExampleInput2"/>
                
                  <h5>Vencimiento armat</h5> <h5>Vencimiento VTV</h5>
                  <input  type='date' className="calendario form-control" id="formGroupExampleInput2"/>
                <input  type='date' className="calendario form-control" id="formGroupExampleInput2"/>
               
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Button type='submit' className='boton btn-sm' variant="primary">
                      Guardar
                    </Button> 
        </form>
    </div>
)
}

export default CompCreatePedidoPrueba2