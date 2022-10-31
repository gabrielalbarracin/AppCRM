import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
//import CompCreatePedidoPrueb from './CreatePrueba'
//import {useForm} from 'react-hook-form'
import '../css/Transporte/transporte.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Home from '../../home/home'
import Table from 'react-bootstrap/Table'
const URI = 'http://localhost:9000/transporte/'

const DataTableCrudDemo = () => {

        
         const [transportes, setTransporte] = useState([])
         useEffect(()=>{
            getTransportes()
         },[])

        //mostrar todos los transportes
        const getTransportes = async () =>{
            const res = await axios.get(URI)
            setTransporte(res.data)
        }


        

        //procedimiento para eliminar un transporte
        const deleteTransporte = async (id) =>{
          
            await axios.delete(`${URI}${id}`)
            getTransportes()
        }

        
       
        // const {register, handleSubmit} = useForm();

        // const onSubmit = (data) =>{
        //   console.log(data)
        // }

        //  const [show, setShow] = useState(false);

        //  const handleClose = () => setShow(false);
        //  const handleShow = () => setShow(true);


 return(
    <>
        <div>
        <Home/> 
        </div>

    <div className="transporte">
        
        <div className='cabezeratransporte'>
          <Link to='/Createprueba' className="btnNuevo btn btn-success mr-2 btn-sm"><i className='fas fa-plus'></i></Link>
          <h5>Maestro de vehiculos</h5>
        </div>
        <div className='btnexportar'>
        <button className='expo'><i className="fa-sharp fa-solid fa-file-pdf"></i></button>
        <button className='expo'><i className="fa-sharp fa-solid fa-file-excel"></i></button>
        </div>
        {/* <Button className="btnNuevo btn btn-success mr-2 btn-sm" type='submit' onClicks={handleShow} />  */}
         <div className='containertabla'>
           <div className='row'>
            <div className='col'>
                <Table striped bordered hover className='tabla'>
                    <thead >
                        <tr className='acciones'>
                            <th>Id</th>
                            <th>Descripcion</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Patente</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='acciones2'>
                        {transportes.map ( (transporte) => (
                            <tr key={transporte.id}>
                                <td>{transporte.id}</td>
                                <td>{transporte.descripcion}</td>
                                <td>{transporte.marca}</td>
                                <td>{transporte.modelo}</td>
                                <td>{transporte.patente}</td>
                                <td className=''>
                                    <div className='btnacciones'>
                                        <Link to={`/Verprueba/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-magnifying-glass"></i></Link>
                                        <Link to={`/Editprueba/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() =>deleteTransporte(transporte.id)} className='botonesacciones btn'><i className="fa-solid fa-trash"></i></button>

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>

     </div>




    </div>
    
    </>
)
}
export default DataTableCrudDemo


 {/* <div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>nombre</label>
            <input type='text'{...register('nombre')}></input>
        </div>
        <div>
            <label>direccion</label>
            <input type='text'{...register('direccion')}></input>
        </div>
        <div>
            <label>edad</label>
            <input type='text'{...register('edad')}></input>
        </div>
        <input type='submit' value='enviar'></input>
    </form>
    </div> */}