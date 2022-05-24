// import { Test, TestingModule } from '@nestjs/testing';
// import {
//   INestApplication,
//   CacheModule,
//   BadRequestException,
//   ValidationPipe,
//   Logger,
//   UnprocessableEntityException,
//   Module,
//   NestModule,
//   MiddlewareConsumer,
// } from '@nestjs/common';
// import * as ContextStore from 'request-context';
// import { ControllersV1Module } from '../src/app/controllers/v1/controllers.v1.module';
// import { ContextService } from '../src/app/logging';
// import { ErrorFilter } from '../src/app/filters/error.filter';

// interface ITestsAppModule {
//   mulesoftClientToUse?: any;
//   gigyaClientToUse?: any;
//   ipaaSClientToUse?: any;
// }

// @Module({
//   imports: [ControllersV1Module],
//   providers: [],
// })
// export class TestModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {}
// }

// // express for use in e2e
// export const testsAppModule = async ({}: ITestsAppModule = {}): Promise<
//   [INestApplication, TestingModule]
// > => {
//   const nestModule = await Test.createTestingModule({
//     imports: [
//       CacheModule.register({
//         ttl: 60 * 60 * 1,
//       }),
//       TestModule,
//     ],
//     providers: [],
//   }).compile();

//   jest.spyOn(Logger, 'log').mockImplementation(() => {});
//   jest.spyOn(Logger, 'error').mockImplementation(() => {});

//   const app = nestModule.createNestApplication();
//   const httpAdapter = app.getHttpAdapter();
//   app.useGlobalFilters(new ErrorFilter(httpAdapter));
//   app.use(ContextStore.middleware('request'));
//   app.use(ContextService.middleware);
//   app.useGlobalPipes(
//     new ValidationPipe({
//       exceptionFactory: (errors) => {
//         const customError = new BadRequestException(
//           `Validation error ${errors.map((error) => error.property)}`,
//         );
//         throw new UnprocessableEntityException(customError.message);
//       },
//     }),
//   );
//   await app.init();
//   return [app, nestModule];
// };
