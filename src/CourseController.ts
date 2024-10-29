import { Request, Response } from 'express';
import AppDataSource from './database';
import { Course } from './CourseEntity';

const courseRepository = AppDataSource.getRepository(Course);

export const createCourse = async (req: Request, res: Response) : Promise<void> => {
  try {
    const { title, description, duration, instructor } = req.body;
    const course = courseRepository.create({ title, description, duration, instructor });

    await courseRepository.save(course);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error creating course', error });
  }
}

export const getAllCourses = async (_req: Request, res: Response): Promise<void> => {
  try {
    const courses = await courseRepository.find();

    res.status(200).json(courses)
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving courses', error });
  }
}

export const getCourseById = async (req: Request, res: Response): Promise<void> => {
  try {
    const course = await courseRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!course) {
      res.status(404).json({ error: "Course not found" });
      return;
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving course', error });
  }
}

export const updateCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const course = await courseRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!course) {
      res.status(404).json({ error: "Course not found" });
      return;
    }

    courseRepository.merge(course, req.body);
    const result = await courseRepository.save(course);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error updating course', error });
  }
}

export const deleteCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await courseRepository.delete(req.params.id);
    if (result.affected === 0) {
      res.status(404).json({ error: "Course not found" });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting course', error });
  }
}
