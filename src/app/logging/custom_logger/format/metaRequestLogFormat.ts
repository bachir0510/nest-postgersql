import { RequestLogFormat } from './requestLogFormat';
import { ResponseLogFormat } from './responseLogFormat';

export class MetaRequestLogFormat {
  id?: string;
  method: string;
  url: string;
  request: RequestLogFormat;
  response: ResponseLogFormat;
  stack?: string;

  withId(id: string) {
    this.id = id;
    return this;
  }

  withMethod(method: string) {
    this.method = method;
    return this;
  }

  withUrl(url: string) {
    this.url = url;
    return this;
  }

  withRequest(request: RequestLogFormat) {
    this.request = request;
    return this;
  }

  withResponse(response: ResponseLogFormat) {
    this.response = response;
    return this;
  }

  withStack(stack: string) {
    this.stack = stack;
    return this;
  }
}
