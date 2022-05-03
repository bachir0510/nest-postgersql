import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import { Environment } from './database.environment';

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],

  async useFactory(config: ConfigService) {
    const isDevelopmentEnv = config.get('NODE_ENV') !== Environment.Production;

    const dbConfig = {
      type: "postgres",
      host: config.get("DB_HOST"),
      port: config.get("DB_PORT"),
      username: config.get("DB_USER"),
      password: config.get("DB_PASSWORD"),
      database: config.get("DB_NAME"),
      logging: config.get("DB_LOGGING"),
      
      autoLoadEntities: true,
      synchronize: isDevelopmentEnv,
    } as ConnectionOptions;

    return dbConfig
  },
});
