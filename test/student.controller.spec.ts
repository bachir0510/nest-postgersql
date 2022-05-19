import {Test} from '@nestjs/testing';
import {StudentController} from '../src/app/controllers/v1/student/student.controller'
import {GetSutdent,GetSutdents,CreatStudent,DeleteSutdent,UpdateSutdent} from '../src/domain/use_cases/student'

describe("StudentController", () => {

    let studentController: StudentController;
    let getStudents: GetSutdents;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [StudentController],
            providers: [GetSutdent, GetSutdents, CreatStudent, DeleteSutdent, UpdateSutdent],
          
        }).compile();
  
        studentController = module.get<StudentController>(StudentController);
        getStudents = module.get<GetSutdents>(GetSutdents);
    })   
    
    describe('findAll', () => {
       it('should return an array of student', async ()=>{
           const result = [];

           jest.spyOn(getStudents, "call").mockImplementation(() => Promise.resolve(result));

           expect(await studentController.getAll()).toBe(result);
       })
    })
})
