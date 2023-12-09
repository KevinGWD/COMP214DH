const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    req.dbConnection.execute(
        `SELECT STREET, CITY, POSTCODE
        FROM DH_BRANCH 
        WHERE BRANCHNO = '${req.body.branchNO}'`,  
        function(err, result) {
          if (err) {
            console.error(err.message);
            return;
          }
          res.send(result.rows);
       }
    );
})

router.post('/open', async (req, res) => {

  try{
    const dataToUpload = req.body;

    const branchNo = dataToUpload[0];
    const street = dataToUpload[1];
    const city = dataToUpload[2];
    const postcode = dataToUpload[3];

    await req.dbConnection.execute(
      ` BEGIN NEW_BRANCH(:branchno, :street, :city, :postcode); END;`,
      {
        branchNo,
        street,
        city,
        postcode
      }
    );
    res.send("You Opened a New Branch");
  }
  catch(error){
    console.error(error.message);
    res.status(500).send("Error updating data");
  }
})

router.get('/', (req, res) => {
  req.dbConnection.execute(
    `SELECT *
     FROM DH_BRANCH`,  
   function(err, result) {
      if (err) {
        console.error(err.message);
        return;
      }
      res.send(result.rows);
    }
  );
})

router.put('/', async (req, res) => {
  try {
    const dataToUpdate = req.body; 

    for (const innerArray of dataToUpdate) {
      const branchNo = innerArray[0];
      const street = innerArray[1];
      const city = innerArray[2];
      const postcode = innerArray[3];

      await req.dbConnection.execute(
        ` BEGIN BRANCH_UP(:branchno, :street, :city, :postcode); END;`,
        {
          branchNo,
          street,
          city,
          postcode
        }
      );
    }
    res.send("Update completed!");
  } 
  catch (error) {
    console.error(error.message);
    res.status(500).send("Error updating data");
  }
});


module.exports = router;