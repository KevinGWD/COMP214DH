import config from './config/config.js'
import app from './server/express.js'
import router from'./server/routers/product.router.js' 
import staffRouter from'./server/routers/dhStaff.router.js' 
import oracledb from 'oracledb'
import express from 'express'
import bodyParser from 'body-parser'

 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })



// app.get("/staffs", (req,res)=>{
//     async function Read(){
//       try{const connection = await oracledb.getConnection ({
//         user          : config.oracleDBUser,
//         password      : config.oracleDBPwd,
//         connectString : config.oracleDBhost
//     });
//     console.log('connectedtosql')
  
//     const results= await connection.execute(
//         'SELECT * FROM TEST'
//     );
//    // await connection.close();
//     return results.rows}
//     catch(error){
//       console.log(error);
//         return error
//     }
//   }

//     Read().then(dbRes=>{
//       res.send(dbRes)
//     }
//     ).catch(err=>{
//       console.log(err);
//       res.send(err)});
// })

app.use('/api/dhstaff',jsonParser, staffRouter)


app.use('/api/product', router);

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})

