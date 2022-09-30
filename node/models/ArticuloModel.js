//importo la conexion a la db
import db from '../database/db.js'
//importo sequelize
import { DataTypes } from 'sequelize'

const ArticuloModel = db.define('pedidos',{
    // cod_categoria:{type: DataTypes.NUMBER},
    // descripcion:{type: DataTypes.STRING},
    // descripcion: {type: DataTypes.STRING},
    // cantidad: {type: DataTypes.NUMBER},
    operario:{type:DataTypes.NUMBER},
    fecha_carga: {type: DataTypes.NUMBER},
    fecha_entrega: {type: DataTypes.NUMBER}
})

export default ArticuloModel