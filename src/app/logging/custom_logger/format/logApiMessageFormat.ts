import { MetaRequestLogFormat } from './metaRequestLogFormat';

export class LogApiMessageFormat {
  timestamp: Date;
  origin: string;
  type: string;
  logger: MetaRequestLogFormat;

  withTimestamp(timestamp: Date) {
    this.timestamp = timestamp;
    return this;
  }

  withOrigin(origin: string) {
    this.origin = origin;
    return this;
  }

  withType(type: string) {
    this.type = type;
    return this;
  }

  withLogger(logger: MetaRequestLogFormat) {
    this.logger = logger;
    return this;
  }
}
