import React from "react";
import axios from "axios";
import { useEffect, useState, } from "react";
import { useNavigate, useParams, } from "react-router-dom";

const URI = 'http://localhost:9000/transporte/'

const CompEditStock = () =>{
   // const[id, setId] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [patente, setPatente] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    

    //procedimiento para editar
    const update = async (e) =>{
        e.preventDeFault()
        await axios.put(URI+id,{
           
            descripcion:descripcion,
            marca:marca,
            modelo:modelo,
            patente:patente
        })
        navigate('/prueba')
    }

    useEffect( () => {
        getTransporteById()
    },[])

    const getTransporteById = async () =>{
        const res = await axios.get(URI+id)
       
        setDescripcion(res.data.descripcion)
        setMarca(res.data.marca)
        setModelo(res.data.modelo)
        setPatente(res.data.patente)
    }
    return(
        <div>
            <h1>Editar</h1>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">descripcion</label>
                    <input
                        value={descripcion}
                        onChange={(e)=>setDescripcion(e.target.value)}
                        type='text'
                        className="form-control"/>
                </div>
                <div className="mb-3">
                <label className="form-label">marca</label>
                    <input
                        value={marca}
                        onChange={(e)=>setMarca(e.target.value)}
                        type='text'
                        className="form-control"/>
                </div>
                <div className="mb-3">
                <label className="form-label">modelo</label>
                    <input
                        value={modelo}
                        onChange={(e)=>setModelo(e.target.value)}
                        type='text'
                        className="form-control"/>
                </div>
                <div className="mb-3">
                <label className="form-label">patente</label>
                    <input
                        value={patente}
                        onChange={(e)=>setPatente(e.target.value)}
                        type='text'
                        className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">guardar</button>
            </form>
        </div>
    )
}

export default CompEditStock