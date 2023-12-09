/*import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())
export default app
*/
const oracledb = require('oracledb');
const branches = require('./routers/branches.js');
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
const app = express()

const getOracle = async (req, res, next) => {
    try {
        const connection = await oracledb.getConnection({
            user: 'COMP214_f23_ers_12',
            password: 'comp214',
            connectString: '199.212.26.208:1521/SQLD'
        });
        console.log("Successfully connected to Oracle!")
        req.dbConnection  = connection;
        next();
    } 
    catch (err) {
        console.log("Error: ", err);
    } 
}

app.use('/api/branches', getOracle, branches)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())
export default app
