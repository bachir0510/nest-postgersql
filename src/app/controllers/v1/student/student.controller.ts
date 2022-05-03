import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStudentDTO } from 'src/domain/dto/student/createStudent.dto';
import { UpdateStudentDTO } from 'src/domain/dto/student/updateStudent.dto';
import { CreatStudent } from 'src/domain/use_cases/student/create.student';
import { DeleteSutdent } from 'src/domain/use_cases/student/delete.student';
import { GetSutdents } from 'src/domain/use_cases/student/getAll.student';
import { GetSutdent } from 'src/domain/use_cases/student/getOne.student';
import { UpdateSutdent } from 'src/domain/use_cases/student/update.student';

@Controller('student')
export class StudentController {
  constructor(
    private readonly getSudents: GetSutdents,
    private readonly getStudent: GetSutdent,
    private readonly createStudent: CreatStudent,
    private readonly updateStudent: UpdateSutdent,
    private readonly deleteStudent: DeleteSutdent,
  ) {}

  @Get()
  async getAll()  {
    return await this.getSudents.call();
  }

   @Get(':id')
  async getOne(@Param('id') id: number) {
    return await this.getStudent.call(id);
  }

  @Post()
  async create(@Body() studentDTO: CreateStudentDTO) {
    return await this.createStudent.call(studentDTO);
  }

  @Put(':id')
  async update(@Body() studentDTO: UpdateStudentDTO, @Param('id') id: number)  {
    return await this.updateStudent.callDos(id, studentDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteStudent.call(id);
  }
}
