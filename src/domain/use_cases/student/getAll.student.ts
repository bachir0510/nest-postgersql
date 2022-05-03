import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "src/domain/entitys/student.entity";
import { Repository } from "typeorm";

@Injectable()
export class GetSutdents {
    constructor(@InjectRepository(Student) private readonly studentRepository: Repository<Student>) {}

    async call(): Promise<Student[]>{
        return await this.studentRepository.find();
    }
}