import { MetaRequestLogFormat } from './metaRequestLogFormat';
import { RequestLogFormat } from './requestLogFormat';
import { ResponseLogFormat } from './responseLogFormat';

export class RequestLogMessage {
  timestamp: Date;
  origin: string;
  type: string;
  meta?: MetaRequestLogFormat;
  stack?: string;

  constructor(
    timestamp: Date,
    origin: string,
    type: string,
    meta: MetaRequestLogFormat,
    stack?: string,
  ) {
    this.timestamp = timestamp;
    this.origin = origin;
    this.type = type;
    this.meta = meta;
    this.stack = stack;
  }

  static create(
    timestamp: Date,
    origin: { source: string; type: string },
    data: {
      method: string;
      url: string;
      headers: object;
      params: string;
      bodyRequest?: string;
      bodyResponse?: string;
    },
    timeResponse?: number,
  ): RequestLogMessage {
    const request = new RequestLogFormat(
      data.headers,
      data.params,
      data.bodyRequest,
    );
    const response = new ResponseLogFormat(timeResponse, data.bodyResponse);
    const meta = new MetaRequestLogFormat()
      .withUrl(data.url)
      .withMethod(data.method)
      .withRequest(request)
      .withResponse(response);
    return new RequestLogMessage(timestamp, origin.source, origin.type, meta);
  }
}
