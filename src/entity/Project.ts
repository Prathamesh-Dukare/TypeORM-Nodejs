import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  Relation,
} from "typeorm";
import { User } from "./User";

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

  @OneToOne(() => User, (user) => user.project)
  @JoinColumn()
  user: Relation<User>;
}
