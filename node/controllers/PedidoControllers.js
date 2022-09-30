//importo el modelo
import PedidoModel from "../models/PedidoModel.js";

//metodos del crud

//mostrar todos los articulos
export const getAllArticulos = async (req, res) =>{
    try{
        const pedidos = await ArticuloModel.findAll()
        res.json(pedidos)
    } catch (error){
        res.json({message: error.message})
    }
}

//mostrar un articulo
export const getArticulo = async (req, res) =>{
    try{
        const pedido = await PedidosModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(pedido[0])
    } catch (error){
        res.json({message: error.message})
    }
}

//crear un pedido
export const crearPedido = async (req, res) => {
    try{
        await PedidoModel.create(req.body)
        res.json({"message":"Pedido creado correctamente"})
    } catch(error){
        res.json({message: error.message})
    }
}

//actualizar un pedido
export const updatePedido = async (req, res) =>{
    try{
        await PedidoModel.update(req.body, {
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