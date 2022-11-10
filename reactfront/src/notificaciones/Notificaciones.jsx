import React from "react";
import Table from 'react-bootstrap/Table'
import './Notificaciones.css'
const Notificaciones = () =>{
    return(
        <div className='tablaotificaciones'>
           <div className='row'>
                <div className='col'>
                    <Table striped bordered hover size="sm" className='accionesnoti'>
                        <thead >
                            <tr>
                                <th>Tipo</th>
                                <th>Descripcion</th>
                                <th>Fecha y Hora</th>
                                <th>Prioridad</th>
                                <th> </th> 
                            </tr>
                        </thead>
                    </Table>
                </div>
            </div>
        </div>
    )
}


export default Notificaciones