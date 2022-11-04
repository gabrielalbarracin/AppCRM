import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './Frescos.css'
const URI = 'http://localhost:9000/frescos/'


const CompEditPedidoFrescos = () => {
    const [categoria, setCategoria] = useState('')
    const [articulo, setArticulo] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [fecha_entrega, setFechaEntrega] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para editar
    const update = async (e) =>{
      e.preventDefault()
      await axios.put(URI+id,{
          categoria:categoria,
          articulo:articulo,
          cantidad:cantidad,
          fecha_entrega:fecha_entrega
        })
        navigate('/Frescos')
    }

    useEffect( () => {
      getTransporteById()
  },[])

  const getTransporteById = async () =>{
      const res = await axios.get(URI+id)

      setCategoria(res.data.categoria)
      setArticulo(res.data.articulo)
      setCantidad(res.data.cantidad)
      setFechaEntrega(res.data.fecha_entrega)
}

 
  

  
    return(
        <>
        <div className='crearprueba'>
         <form onSubmit={update} >
                <div className='fres'>
                <div className='titulo'>
                  <h5>Editar pedidos frescos</h5>
                </div>
        <select className="categoriafrescos form-select" aria-label="Default select example" value={categoria} onChange={(e)=> setCategoria(e.target.value)}>
                 <option selected>Seleccione categoria</option>
                 <option>Carne</option>
                 <option>Verdura</option>
                 <option></option>
             </select>
             <select className="categoriafrescos form-select" aria-label="Default select example" value={articulo} onChange={(e)=> setArticulo(e.target.value)}>
                 <option selected>Seleccione articulo</option>
                 <option>Carne vaca</option>
                 <option>pollo</option>
                 <option>chancho</option>
             </select>
                <div className="mb-1">
                 <label className="form-label">Ingrese cantidad</label>
                 {/* <input type="text" className="texto1 form-control" id="formGroupExampleInput2"/> */}
                 <input className="cantidad2 form-control form-control-sm" type="text" aria-label=".form-control-sm example" value={cantidad} onChange={(e)=> setCantidad(e.target.value)}></input>
             </div>
            
             <div className="mb-1">
                 <label for="formGroupExampleInput2" className="fecha form-label">Ingrese fecha de entrega</label>
                 <input  type='date' className="calendario form-control" id="formGroupExampleInput2" value={fecha_entrega} onChange={(e)=> setFechaEntrega(e.target.value)}/>
             </div>
             </div>
             <Button type='submit' className='btnlistofrescos btn-sm' variant="success">Listo</Button>
        {/* <div>
             <table className='table'>
        <thead>
        <tr>
          <th>Id</th>
          <th>articulo</th>
          <th>cantidad</th>
          <th>fecha de entrega</th>
        </tr>
      </thead>
       <tbody>
        {pedidos.map ((pedido) =>(
            <tr key={pedido.id}>
            <td>{pedido.id}</td>
            <td>{pedido.articulo}</td>
            <td>{pedido.cantidad}</td>
            <td>{pedido.fecha}</td>
            </tr>
            ))}
        </tbody> 
      </table>
      </div>
      <Button type='submit' className='boton btn-sm' variant="primary">
                      Guardar
                    </Button>  */}
        </form>
    </div>
      </>
    )
}

export default CompEditPedidoFrescos