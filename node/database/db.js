import { Sequelize } from "sequelize";

const db = new Sequelize('prueba_proyecto', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db