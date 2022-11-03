//importo la conexion a la db
import db from '../database/db.js'
//importo sequelize
import { DataTypes } from 'sequelize'

const CombustibleModel = db.define('combustible',{
    
vehiculo:{type: DataTypes.STRING},
tipo_combustible :{type: DataTypes.STRING}, 
cantidad :{type: DataTypes.STRING},
comprobante :{type: DataTypes.STRING},
    
})

export default CombustibleModel