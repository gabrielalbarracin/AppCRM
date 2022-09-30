import express from "express";
import { crearPedido, deletePedido, getArticulo, getAllArticulos, updatePedido } from "../controllers/ArticuloController.js";

const router = express.Router()

router.get('/', getAllArticulos)
router.get('/:id', getArticulo)
router.post('/', crearPedido)
router.put('/:id', updatePedido)
router.delete('/:id', deletePedido)

export default router