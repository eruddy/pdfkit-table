import express from "express";
import indexRoutes from "./routes/index.js"
const app=express();
app.use(indexRoutes);
app.listen(4000,()=>{
    console.log('Server on port 4000')
})