import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { HttpConfigService } from "src/domain/config/http.config";
import { UserService } from "./use.service";

@Module({
    imports:[HttpModule.registerAsync({
        useClass: HttpConfigService,
      })],
    exports:[UserService],
    providers:[UserService],
})
export class ServiceModule{}