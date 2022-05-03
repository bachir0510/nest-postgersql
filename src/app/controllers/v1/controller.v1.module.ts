import { Module } from "@nestjs/common";
import { StudentModule } from "src/domain/use_cases/student/student.module";
import { StudentController } from "./student/student.controller";



@Module({
    imports:[StudentModule],
    controllers:[StudentController]
})
export class ControllerV1Module{}