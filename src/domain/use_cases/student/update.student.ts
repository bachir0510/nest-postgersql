import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {  UpdateStudentDTO } from "src/domain/dto/student/updateStudent.dto";
import { Student } from "src/domain/entitys/student.entity";
import { Repository } from "typeorm";

@Injectable()
export class UpdateSutdent {
    constructor(@InjectRepository(Student) private readonly studentRepository: Repository<Student>) {}

    async call(id : number, studentDTO: UpdateStudentDTO){
        const student = await this.studentRepository.findOne(id)
        if(!student)
            throw new NotFoundException("Student not exist");
        
    const updateStudent = Object.assign(student, studentDTO);
    return await this.studentRepository.save(updateStudent)
    
    }
    async callDos(id : number, studentDTO: UpdateStudentDTO){
      return this.studentRepository.update(id, studentDTO)
    }
}