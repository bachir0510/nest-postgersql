import { Injectable, Scope, Logger } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class EmptyLogger extends Logger {
  constructor(context?: string) {
    super(context);
  }
}
