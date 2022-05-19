import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { StudentProviders } from '../../../infrastructure/database/providers/student.provider';
import { CreatStudent } from './create.student';
import { DeleteSutdent } from './delete.student';
import { GetSutdents } from './getAll.student';
import { GetSutdent } from './getOne.student';
import { UpdateSutdent } from './update.student';

@Module({
  imports: [DatabaseModule],
  providers: [
  StudentProviders,
    GetSutdent,
    GetSutdents,
    CreatStudent,
    UpdateSutdent,
    DeleteSutdent,
  ],
  exports: [
    GetSutdent,
    GetSutdents,
    CreatStudent,
    UpdateSutdent,
    DeleteSutdent,
  ],
})
export class StudentModule {}
