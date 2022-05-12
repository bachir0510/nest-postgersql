import { Module } from "@nestjs/common";
import { StudentModule } from "src/domain/use_cases/student/student.module";
import { UserModule } from "src/domain/use_cases/user/user.module";
import { StudentController } from "./student/student.controller";
import { UserConroller } from "./user/user.controller";



@Module({
    imports:[StudentModule,UserModule],
    controllers:[StudentController,UserConroller]
})
export class ControllerV1Module{}