import express from 'express';

// import student controller 
import { createStudent, deleteStudent, getAllStudents, getSingleStudent, updateStudent } from '../controllers/studentController.js';

// init router 
const router = express.Router();

//route
router.get('/', getAllStudents);
router.post('/', createStudent );
router.get('/:id', getSingleStudent );
router.delete('/:id', deleteStudent );
router.patch('/:id', updateStudent );


// export  router 
 export default router 