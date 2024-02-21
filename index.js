import  express  from "express";
import connectDb from "./db/connectDb.js";
import updateDoc from "./modules/Movies.js";
const app = express()
const port = process.env.PORT ||8000
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/movies'

connectDb(DATABASE_URL)

updateDoc();

  // app.get('/', (req, res) => {
  //   res.json('the boy');
  // });

app.listen(port, ()=>{
 console.log('server listening on port' +" "+port);
})