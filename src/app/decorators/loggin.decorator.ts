import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from '../logging/logging.interceptor';

export function Log() {
  return applyDecorators(UseInterceptors(LoggingInterceptor));
}
