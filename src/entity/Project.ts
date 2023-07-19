import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  project_name: string;

  @Column()
  project_description: string;

  @Column()
  likes: number;
}
