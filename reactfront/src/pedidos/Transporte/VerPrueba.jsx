import React from "react";
import axios from "axios";
import { useEffect, useState, } from "react";
import { useNavigate, useParams, } from "react-router-dom";

const URI = 'http://localhost:9000/transporte/'

const CompVerPrueba = () =>{
   // const[id, setId] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [patente, setPatente] = useState('')
    const [ven_seguro, setVenSeguro] = useState ('')
    const navigate = useNavigate()
    const {id} = useParams()

    

    //procedimiento para editar
    const update = async (e) =>{
        e.preventDeFault()
        await axios.put(URI+id,{
           
            descripcion:descripcion,
            marca:marca,
            modelo:modelo,
            patente:patente,
            ven_seguro:ven_seguro

        })
        navigate('/transporte')
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
        setVenSeguro(res.data.patente)
        setVenSeguro(res.data.ven_seguro)
    }
    return(
        <div>
            <h1>Ver</h1>
            <form onSubmit={update} className="verprueba">
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
                <div className="mb-3">
                    <label className="form-label">ven seguro</label>
                        <input
                            value={ven_seguro}
                            onChange={(e)=>setVenSeguro(e.target.value)}
                            type="date"
                            className="form-control"/>

                </div>
            </form>
        </div>
    )
}

export default CompVerPrueba