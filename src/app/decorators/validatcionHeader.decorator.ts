import { applyDecorators } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';

export function ValidationHeaders() {
  return applyDecorators(
    ApiHeader({
      name: 'MyHeader',
      required: true,
      description: 'Custom header',
    }),
  );
}
