import oracledb from 'oracledb'
import config from '../../config/config.js'
import bodyParser from 'body-parser';

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const Insert= async (req, res)=>{
    console.log('inserting')
    console.log(req.body.salary)

    try{const connection = await oracledb.getConnection ({
        user          : config.oracleDBUser,
        password      : config.oracleDBPwd,
        connectString : config.oracleDBhost
    });


    await connection.execute(
        ` BEGIN P_INSERT_NEW_STAFF('${req.body.staffNo}' , '${req.body.firstname}' , '${req.body.lastname}' , '${req.body.position}' , '${req.body.sex}' , '${req.body.DOB}' , ${req.body.salary} , '${req.body.branchNo}' , '${req.body.telephone}' , '${req.body.mobile}' , '${req.body.email}'); END;`
    );

    await connection.close();}
    catch (error){
        console.log(error)
    }
}

const Read= async (req, res)=>{
    try{const connection = await oracledb.getConnection ({
          user          : config.oracleDBUser,
          password      : config.oracleDBPwd,
          connectString : config.oracleDBhost
      });
      console.log('connectedtosql')
    
      const results= await connection.execute(
          'select * from TEST order by timestamp_column DESC'
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
    console.log(req.body.staffno)

    try{const connection = await oracledb.getConnection ({
        user          : config.oracleDBUser,
        password      : config.oracleDBPwd,
        connectString : config.oracleDBhost
    });
    await connection.execute(
        `BEGIN UPDATE TEST SET email='${req.body.email}' ,telephone='${req.body.phone}' , salary=${req.body.salary} WHERE STAFFNO= '${req.body.staffno}'; commit; END;` 
        )
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
        `BEGIN DELETE FROM TEST WHERE STAFFNO= '${req.query.id}'; commit; END;` 
        )
    console.log('deleted')
    await connection.close();}
    catch (error){
        console.log(error)
    }
  }

//   const FindItem = async (req, res, next, id) => {
//     if (isValidObjectId(id)) {
//         try {
//             const product = await ProductModel.findById(id);
//             if (product) {
//                 req.profile = product;
//                 next()
//             }
//             else {
//                 res.send('Item not found !')
//             }
//         }
//         catch {
//             (err) => {
//                 res.status(400).json({
//                     error: `${err.message}`
//                 })
//             }
//         }
//     } else {
//         res.send('Invalid MongoDB ID!')
//     }

  export {Read, Insert, Update , Delete}