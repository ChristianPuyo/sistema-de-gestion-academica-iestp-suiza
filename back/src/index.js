const express = require('express');
const { database } = require('./db');
const morgan = require('morgan');
const cors = require('cors');
const studentRouter = require('./routes/studentRouter');
const departamentoRouter = require("./routes/departamentoRouter");
const planRouter = require('./routes/planRouter');
const consultaPlanDepartamento=require('./routes/consultaPlanDepartamento');
const cursoRouter = require('./routes/cursoRouter');
const periodoRouter = require('./routes/periodoRouter');
const notaRouter = require('./routes/notaRouter');
const certificadoRouter = require('./routes/certificadoRouter');
const userRouter = require('./routes/userRouter');

const consultaEstudianteNotasRouter = require('./routes/consultaEstudianteNotasRouter');


const server = express();

//Middlewares
server.use(cors());
server.use(morgan("dev"));
server.use(express.json()); 

server.use("/student", studentRouter)
server.use("/departamento", departamentoRouter)
server.use("/plan", planRouter)
server.use("/curso", cursoRouter)
server.use("/consulta1", consultaPlanDepartamento)
server.use("/periodo", periodoRouter)
server.use("/nota", notaRouter )
server.use("/certificado", certificadoRouter)
server.use("/user", userRouter)
server.use("/consultaestudiantenotas", consultaEstudianteNotasRouter)
const PORT = 3001; 
 
// force:true -> Elimina todas las tablas de la DB y las vuelve a crear en base a los modelos
// alter: true -> Actualiza las tablas de la DB en base a los modelos. 

database  
.sync({alter: true})
.then(()=>{ 
    server.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}).catch(error => console.log("El error es el siguiente:", error.message)) 

