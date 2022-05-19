import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({})
export class User {
  @PrimaryGeneratedColumn('increment')
  id: string;  

  @Column({ length: 15 })
  userName: number;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ type: 'boolean', default: false })
  active: boolean;

  @CreateDateColumn()
  createdOn: Date;
}
