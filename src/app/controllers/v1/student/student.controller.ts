import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateStudentDTO } from '../../../../domain/dto/student/createStudent.dto';
import { UpdateStudentDTO } from '../../../../domain/dto/student/updateStudent.dto';
import {
  CreatStudent,
  DeleteSutdent,
  GetByIdStudent,
  GetSutdents,
  UpdateSutdent,
} from '../../../../domain/use_cases/student';

@ApiTags('student')
@Controller('student')
export class StudentController {
  constructor(
    private readonly getSudents: GetSutdents,
    private readonly getByIdStudent: GetByIdStudent,
    private readonly createStudent: CreatStudent,
    private readonly updateStudent: UpdateSutdent,
    private readonly deleteStudent: DeleteSutdent,
  ) {}

  @Get()
  async getAll() {
    return await this.getSudents.call();
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return await this.getByIdStudent.call(id);
  }

  @Post()
  async create(@Body() studentDTO: CreateStudentDTO) {
    return await this.createStudent.call(studentDTO);
  }

  @Put(':id')
  async update(@Body() studentDTO: UpdateStudentDTO, @Param('id') id: number) {
    return await this.updateStudent.callTwo(id, studentDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteStudent.call(id);
  }
}
