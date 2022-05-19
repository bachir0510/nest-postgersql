import { createConnection } from 'typeorm';


export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: 'Cordoba_school_DB',
        database: 'dabase_password',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];


