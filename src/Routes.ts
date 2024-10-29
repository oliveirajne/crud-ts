import { Router, Request, Response } from 'express';
import AuthController from './AuthController'; 
import { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } from './CourseController';
import { validateLoginInput } from './validationMiddleware';
import { validateJWT } from './validateJWT';

const router = Router();
const authController = new AuthController();

router.post('/login', validateLoginInput, (req: Request, res: Response) => {
  authController.login(req,res)
});

router.post('/courses', validateJWT, createCourse);
router.get('/courses', validateJWT, getAllCourses);
router.get('/courses/:id', validateJWT, getCourseById);
router.put('/courses/:id', validateJWT, updateCourse);
router.delete('/courses/:id', validateJWT, deleteCourse);

export default router;
