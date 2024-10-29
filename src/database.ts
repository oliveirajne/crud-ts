import { DataSource } from 'typeorm';
import { Course } from './CourseEntity';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'courses.db',
  synchronize: true,
  entities: [Course],
});

export default AppDataSource;
