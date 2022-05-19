import { Connection } from "typeorm";
import { Student } from "../../../domain/entitys/student.entity";


export const studentProvider = [
    {
      provider: Student.name,
      useFactory: (connection: Connection) => connection.getRepository(Student),
      inject: ['DATABASE_CONNECTION'],
    },
  ];