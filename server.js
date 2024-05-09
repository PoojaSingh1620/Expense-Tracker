const express = require("express");
const cors = require("cors");
const morgan= require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");

dotenv.config();

//database call
connectDb();

//rest object
 const app = express();
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
//routes
//user routes
app.use('/app/v1/user', require('./routes/userRoute'))
//transaction routes
app.use('/app/v1/transactions', require('./routes/transactionRoutes'));
//port
const PORT = 8000 || Process.env.PORT;
//listen server
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    console.log("pooja")
});