import oracledb from 'oracledb'
import config from '../../config/config.js'
import bodyParser from 'body-parser';

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
const {clientDB}=config;

const Insert= async (req, res)=>{
    console.log('inserting to client')
    console.log(req.body.clientno)

    try{const connection = await oracledb.getConnection ({
        user          : config.oracleDBUser,
        password      : config.oracleDBPwd,
        connectString : config.oracleDBhost
    });
    

    await connection.execute(//if change to another table, the stored procedure is needed to edit
        ` BEGIN P_INSERT_NEW_CLIENT('${req.body.clientno}' , 
        '${req.body.fname}' , '${req.body.lname}' , '${req.body.telno}' , 
        '${req.body.street}' , '${req.body.city}', '${req.body.email}' , 
        '${req.body.preftype}' , '${req.body.maxrent}'); END;`
    );

    await connection.close();}
    catch (error){
        console.log(error)
    }
}

const Read= async (req, res)=>{
    console.log('grabbing from client')

    try{const connection = await oracledb.getConnection ({
        user          : config.oracleDBUser,
        password      : config.oracleDBPwd,
        connectString : config.oracleDBhost
      });

      const results= await connection.execute(
          `select * from ${config.clientDB} order by clientno desc`
      );
     // await connection.close();
      res.send(results.rows) }
      catch(error){
        console.log(error);
          return error
      }
  }

  const Update= async (req,res)=> {

    console.log('updating')
    console.log("client number: " + req.body.clientno)
    console.log("client number: " + req.body)
    try{const connection = await oracledb.getConnection ({
        user          : config.oracleDBUser,
        password      : config.oracleDBPwd,
        connectString : config.oracleDBhost
    });
    await connection.execute(
        `BEGIN 
        UPDATE dh_client SET fname='${req.body.fname}',lname='${req.body.lname}',telno='${req.body.telno}',
        street='${req.body.street}',city='${req.body.city}',email='${req.body.email}',
        preftype='${req.body.preftype}',maxrent=${req.body.maxrent} WHERE 
        clientNO='${req.body.clientno}'; commit; END;`)
    console.log('updated')
    await connection.close();}
    catch (error){
        console.log(error)
    }
  }

  const Delete= async (req,res)=> {

    console.log('deleting')
    console.log(req.query.id)

    try{const connection = await oracledb.getConnection ({
        user          : config.oracleDBUser,
        password      : config.oracleDBPwd,
        connectString : config.oracleDBhost
    });
    await connection.execute(
        `BEGIN DELETE FROM ${clientDB} WHERE clientno= '${req.query.id}'; commit; END;` 
        )
    console.log('deleted')
    await connection.close();}
    catch (error){
        console.log(error)
    }
  }

  export {Read, Insert, Update , Delete}