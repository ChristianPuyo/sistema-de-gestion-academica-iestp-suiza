const { PlanDeEstudio, Asignatura } = require("../db")

const createCurso = async (nombre, creditos, ciclo, plan )=>{
    

  const searchPlan = await PlanDeEstudio.findOne({
    where: {
      descripcion: plan
    }
  });


    const id_plan= searchPlan.id_plan;
    
    const newCurso = await Asignatura.create({nombre, creditos, ciclo, id_plan})
    return newCurso;
}

const findCurso = async (id_plan)=>{
  const result = await Asignatura.findAll({
      where : {
          id_plan: id_plan
      } 
  })
  return result
}

const getCurso = async ()=>{
  const result = await Asignatura.findAll();
  return result;

};



// const getPlan = async ()=>{
//     const plan = await PlanDeEstudio.findAll();
//     return plan;

// };

// const findStudent = async (firstName)=>{
//     const result = await Student.findAll({
//         where : {
//             firstName: {[Op.iLike]: `%${firstName}%`}
//         }
//     })
//     return result
// }

// const findStudentById = async (id)=>{
//     const studentFound = await Student.findByPk(id);
    
//     return studentFound;
// }

// const deleteStudent = async (id)=>{
//     const user = await Student.findByPk(id);
//     await user.destroy();
//     return user;
// }



module.exports = { 
    
    createCurso,
    findCurso,
    getCurso
  
    
};  //exporting the functions to be used in other files