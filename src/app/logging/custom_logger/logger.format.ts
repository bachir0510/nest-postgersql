import { ContextService } from './context.service';
import { LogApiMessageFormat } from './format/logApiMessageFormat';
import { MetaRequestLogFormat } from './format/metaRequestLogFormat';
import { RequestLogMessage } from './format/requestLogMessage';

export class LoggerFormat {
  static TYPE: {
    REQUEST: 'request';
    RESPONSE: 'response';
    ERROR: 'error';
    INTERNAL: 'internal';
  };

  static getRequestLogMessage = (message: RequestLogMessage): string => {
    const logger = new MetaRequestLogFormat()
      .withId(ContextService.get(ContextService.KEYS.REQUEST_ID))
      .withMethod(message.meta.method)
      .withUrl(message.meta.url)
      .withRequest(message.meta.request)
      .withResponse(message.meta.response);
    const response: LogApiMessageFormat = new LogApiMessageFormat()
      .withTimestamp(message.timestamp)
      .withOrigin(message.origin)
      .withType(message.type)
      .withLogger(logger);
    return JSON.stringify(response);
  };

  static getExceptionLogMessage = (message: RequestLogMessage): string => {
    const logger = new MetaRequestLogFormat()
      .withId(ContextService.get(ContextService.KEYS.REQUEST_ID))
      .withStack(message.stack);
    const response: LogApiMessageFormat = new LogApiMessageFormat()
      .withTimestamp(message.timestamp)
      .withOrigin(message.origin)
      .withType(message.type)
      .withLogger(logger);

    return JSON.stringify(response);
  };
}
