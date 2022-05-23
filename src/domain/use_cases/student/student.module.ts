import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { studentProvider } from '../../../infrastructure/database/providers/student.provider';
import {
  CreatStudent,
  GetSutdents,
  GetByIdStudent,
  UpdateSutdent,
  DeleteSutdent,
} from './';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...studentProvider,
    GetByIdStudent,
    GetSutdents,
    CreatStudent,
    UpdateSutdent,
    DeleteSutdent,
  ],
  exports: [
    GetByIdStudent,
    GetSutdents,
    CreatStudent,
    UpdateSutdent,
    DeleteSutdent,
  ],
})
export class StudentModule {}
