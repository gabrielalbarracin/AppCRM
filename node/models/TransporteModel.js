//importo la conexion a la db
import db from '../database/db.js'
//importo sequelize
import { DataTypes } from 'sequelize'

const TransporteModel = db.define('transportes',{
    //id:{type: DataTypes.NUMBER},
    descripcion:{type: DataTypes.STRING},
    marca:{type:DataTypes.STRING},
    modelo: {type: DataTypes.STRING},
    patente: {type: DataTypes.STRING},
    patente_acop: {type: DataTypes.NUMBER},
    ven_seguro:{type: DataTypes.NUMBER},
    ven_armat:{type: DataTypes.NUMBER},
    ven_vtv:{type: DataTypes.NUMBER},
    carga_max:{type: DataTypes.NUMBER}
})

export default TransporteModel