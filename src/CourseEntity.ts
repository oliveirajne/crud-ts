import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  duration: number;

  @Column()
  instructor: string;

  constructor(id: number, title: string, description: string, duration: number, instructor: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.instructor = instructor;
  }

}
