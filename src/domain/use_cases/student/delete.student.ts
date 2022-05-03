import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/domain/entitys/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteSutdent {
  constructor(@InjectRepository(Student) private readonly studentRepository: Repository<Student>) {}

  async call(id) : Promise<void>{
    const student = await this.studentRepository.findOne(id);
    if (!student) {
      throw new NotFoundException('Resource not found');
    }

    this.studentRepository.remove(student);
  }
}
