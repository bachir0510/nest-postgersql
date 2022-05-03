import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "src/domain/entitys/student.entity";
import { CreatStudent } from "./create.student";
import { DeleteSutdent } from "./delete.student";
import { GetSutdents } from "./getAll.student";
import { GetSutdent } from "./getOne.student";
import { UpdateSutdent } from "./update.student";


@Module({
    imports:[TypeOrmModule.forFeature([Student])],
    providers:[GetSutdent,GetSutdents,CreatStudent,UpdateSutdent,DeleteSutdent],
    exports:[GetSutdent,GetSutdents,CreatStudent,UpdateSutdent,DeleteSutdent]
})
export class StudentModule{}