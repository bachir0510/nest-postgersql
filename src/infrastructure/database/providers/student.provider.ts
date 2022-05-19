import { Connection } from "typeorm";
import { Student } from "../../../domain/entitys/student.entity";

export const StudentProviders = [
    {
      provider: 'STUDENT_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(Student),
      inject: ['DATABASE_CONNECTION'],
    },
  ];