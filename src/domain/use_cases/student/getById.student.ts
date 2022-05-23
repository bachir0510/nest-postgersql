import { Inject, Injectable } from "@nestjs/common";
import { Student } from "src/domain/entitys/student.entity";
import { Repository } from "typeorm";

@Injectable()
export class GetByIdStudent {
    constructor(
        @Inject(Student.name)
        private readonly studentRepository: Repository<Student>,
      ) {}

    async call(id: number): Promise<Student>{
        return await this.studentRepository.findOne(id)
        
    }
}