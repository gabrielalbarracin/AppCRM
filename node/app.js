import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import pedidosRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/pedidos', pedidosRoutes)
try{
    await db.authenticate()
    console.log('conexion exitosa a la db')
} catch (error){
    console.log(`el error de conexion es:${error}`)
}
// app.get('/',(req, res) =>{
//     res.send('hola mundo')
// })

app.listen(9000, ()=>{
    console.log('corriendo en http://localhost:9000/')
})