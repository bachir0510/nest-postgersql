import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import * as MaskJson from 'mask-json';
import * as objectTrim from 'object-trim';
import { ServerResponse } from 'http';
import { CustomLogger } from './custom_logger/costumLogger.service';
import { RequestLogMessage } from './custom_logger/format/requestLogMessage';
import { RequestLogFormat } from './custom_logger/format/requestLogFormat';
import { ResponseLogFormat } from './custom_logger/format/responseLogFormat';
import { MetaRequestLogFormat } from './custom_logger/format/metaRequestLogFormat';
import { LoggerFormat } from './custom_logger/logger.format';


const trim = (x) =>
  Array.isArray(x) || typeof x === 'string'
    ? x.slice(0, 4)
    : typeof x === 'object'
    ? objectTrim(x, 4)
    : x;

const redactions = ['password', 'data', 'records'];
const redact = MaskJson(redactions);

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private stringify = require('fast-json-stable-stringify');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const handlerId = `${context.getClass().name}/${context.getHandler().name}`;
    const logger = new CustomLogger(handlerId);

    const { body, hostname, method, originalUrl, headers, params } =
      context.getArgByIndex(0);

    const requestData = { method, body, originalUrl, headers, params };
    this.printRequestLogs(logger, requestData, hostname);

    const now = Date.now();
    return next.handle().pipe(
      tap((result) => {
        const responseData = { method, result, originalUrl, headers, params };
        this.printResponseLogs(logger, now, responseData);
      }),
      catchError((e) => {
        const stack = e.message?.stack || e?.stack;
        const logerFormatted = this.handleErrorLog(stack);
        logger.error(logerFormatted, stack);
        throw e;
      }),
    );
  }

  private handleErrorLog(stack: string) {
    const response: RequestLogMessage = {
      origin: 'middleware',
      timestamp: new Date(),
      type: 'error',
      stack,
    };
    return LoggerFormat.getExceptionLogMessage(response);
  }

  private printRequestLogs(
    logger: CustomLogger,
    requestData,
    hostname: string,
  ) {
    logger.log(
      `Request: ${this.stringify({
        method: requestData.method,
        originalUrl: requestData.originalUrl,
        body: redact(requestData.body),
        hostname,
      })}`,
    );
    logger.debug(
      this.mapperRequestApiLog(
        { source: 'middleware', type: 'request' },
        {
          bodyRequest: redact(requestData.body),
          ...requestData,
        },
        requestData.originalUrl,
      ),
    );
  }

  private printResponseLogs(logger: CustomLogger, now: number, responseData) {
    const after = Date.now();
    logger.log(
      `Trimmed response: ${
        responseData.result instanceof ServerResponse
          ? 'Express response object'
          : this.stringify(redact(trim(responseData.result)))
      }. +${after - now}ms`,
    );
    logger.debug(
      this.mapperRequestApiLog(
        { source: 'middleware', type: 'response' },
        {
          bodyResponse: redact(trim(responseData.result)),
          ...responseData,
        },
        responseData.originalUrl,
        after - now,
      ),
    );
  }

  private mapperRequestApiLog(
    origin: { source: string; type: string },
    data: {
      method: string;
      headers: Map<string, object>;
      params: string;
      bodyRequest?: string;
      bodyResponse?: string;
    },
    url: string,
    timeResponse?: number,
  ): string {
    const request = new RequestLogFormat(
      data.headers,
      data.params,
      data.bodyRequest,
    );
    const response = new ResponseLogFormat(timeResponse, data.bodyResponse);
    const meta = new MetaRequestLogFormat()
      .withUrl(url)
      .withMethod(data.method)
      .withRequest(request)
      .withResponse(response);

    const message = new RequestLogMessage(
      new Date(),
      origin.source,
      origin.type,
      meta,
    );
    return LoggerFormat.getRequestLogMessage(message);
  }
}
