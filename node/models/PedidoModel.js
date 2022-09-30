//importo la conexion a la db
import db from '../database/db.js'
//importo sequelize
import { DataTypes } from 'sequelize'

const PedidoModel = db.define('linea_pedidos',{
    
    id_linea:{type: DataTypes.NUMBER},
    articulo:{type: DataTypes.STRING},
    cantidad: {type: DataTypes.NUMBER},
})

export default PedidoModel