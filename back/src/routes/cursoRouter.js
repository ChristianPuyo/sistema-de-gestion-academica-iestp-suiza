const { Router } = require("express");
const { createCurso, getCurso, findCurso } = require("../controllers/cursoControllers");



const cursoRouter = Router();

cursoRouter.get("/", async (req, res)=>{

    
    const { id_plan } = req.query;
    let curso; 
    try {
        if (id_plan) {
            curso = await findCurso(id_plan);
        } else {
            curso = await getCurso();
        }
        res.status(200).json(curso);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

cursoRouter.post("/", async (req, res)=>{
    
    const { nombre, creditos, ciclo, plan } = req.body;
    try {
        const newCurso = await createCurso(nombre, creditos, ciclo, plan )
        res.status(200).json(newCurso);
        
    } catch (error) {
        res.status(400).json({error: error.message})   
    }
    
})




module.exports = cursoRouter;