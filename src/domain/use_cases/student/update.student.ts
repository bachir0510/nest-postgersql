import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { UpdateStudentDTO } from "../../dto/student/updateStudent.dto";
import { Student } from "../../entitys/student.entity";

@Injectable()
export class UpdateSutdent {
  constructor(
    @Inject(Student.name)
    private readonly studentRepository: Repository<Student>,
  ) {}

    async call(id : number, studentDTO: UpdateStudentDTO){
        const student = await this.studentRepository.findOne(id)
        if(!student)
            throw new NotFoundException("Student not exist");
        
    const updateStudent = Object.assign(student, studentDTO);
    return await this.studentRepository.save(updateStudent)
    
    }
    async callTwo(id : number, studentDTO: UpdateStudentDTO){
      return this.studentRepository.update(id, studentDTO)
    }
}