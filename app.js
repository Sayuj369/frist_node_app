const express = require('express');
const router = require("./Routes/Pages");
const fs = require( 'fs').promises;

const app = express();
const PORT = 3000;

app.use(router);

// using async so it wont block the code, "/" denotes the root path, request first then respond other way around can crash the code.
app.get("/", async(req,res) =>{

    // reason for using try and catch is to make sure if we encounter a problem we can throw in an error for the user to see
    try { 
      const data = await fs.readFile("example.txt", "utf-8"); // await is used to tell the code to wait for the promises to be fullfilled before continuing making async work like sync
      res.send(data); // response to send data that has been read from the file above hence use of const data
    } catch (error) {
      console.error('Error reading file:', error);
      res.status(500).send("Internal server error");// responding if try fails
    }  
});

// old code commented out.
/*app.get('/', (req, res)=> {
  res.send("hello world");
}); */


//letting the code run  on designated port, basically executing it 
app.listen(PORT, ()=>{
  console.log(`Server started on http://localhost:${PORT}`);

});