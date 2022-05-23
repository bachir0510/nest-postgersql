import { Test, TestingModule } from "@nestjs/testing";
import {StudentController} from "../src/app/controllers/v1/student/student.controller"
import {TestHelper} from "../test/testHerper"


beforeAll(async () => {
    await TestHelper.instance.setupTestDB();
});

afterAll(() => {
    TestHelper.instance.teardownTestDB();
});

describe(StudentController, () => {
    let controller: StudentController;
})


beforeEach(async () => {
    const modulo: TestingModule = await Test.createTestingModule({
        controllers: [StudentController],
        providers: [StudentController],
    }).compile();
    
    controller = module.get<StudentController>(StudentController);
});
it ('should be defined', () => {
    expect(controller).toBeDefined()
})

