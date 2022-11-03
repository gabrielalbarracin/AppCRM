import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
//import CompCreatePedidoPrueb from './CreatePrueba'
//import {useForm} from 'react-hook-form'

import axios from 'axios'
import { Link } from 'react-router-dom';
import Home from '../../home/home'
import Table from 'react-bootstrap/Table'
const URI = 'http://localhost:9000/frescos/'

const Frescos = () => {

        
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
          <Link to='/CreatePedidosFrescos' className="btnNuevo btn btn-success mr-2 btn-sm"><i className='fas fa-plus'></i></Link>
          <h5>Maestro de frescos</h5>
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
                            <th>Categoria</th>
                            <th>Articulos</th>
                            <th>Cantidad</th>
                            <th>Fech entrega</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='acciones2'>
                        {transportes.map ( (transporte) => (
                            <tr key={transporte.id}>
                                <td>{transporte.id}</td>
                                <td>{transporte.categoria}</td>
                                <td>{transporte.articulos}</td>
                                <td>{transporte.cantidad}</td>
                                <td>{transporte.fecha_entrega}</td>
                                <td className=''>
                                    <div className='btnacciones'>
                                        <Link to={`/VerPedidosFrescos/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-magnifying-glass"></i></Link>
                                        <Link to={`/EditPedidosFrescos/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-pen-to-square"></i></Link>
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
export default Frescos


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