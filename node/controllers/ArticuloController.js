//importo el modelo
import ArticuloModel from "../models/ArticuloModel.js";

//metodos del crud

//mostrar todos los articulos
export const getAllArticulos = async (req, res) =>{
    try{
        const articulos = await ArticuloModel.findAll()
        res.json(articulos)
    } catch (error){
        res.json({message: error.message})
    }
}

//mostrar un articulo
export const getArticulo = async (req, res) =>{
    try{
        const articulo = await ArticuloModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(articulo[0])
    } catch (error){
        res.json({message: error.message})
    }
}

//crear un pedido
export const crearPedido = async (req, res) => {
    try{
        await ArticuloModel.create(req.body)
        res.json({"message":"Pedido creado correctamente"})
    } catch(error){
        res.json({message: error.message})
    }
}

//actualizar un pedido
export const updatePedido = async (req, res) =>{
    try{
        await ArticuloModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({"message":"PEdido actualizado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}

//eliminar un pedido
export const deletePedido = async (req, res) =>{
    try{
        await ArticuloModel.destroy({
            where:{id: req.params.id}
        })
        res.json({"message":"Pedido eliminado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}