export class RequestLogFormat {
    headers: { uid: string; origin: string; userAgent?: string };
    params: string;
    body: string;
    error?: string;
  
    constructor(headers, params: string, body: string, error?: string) {
      this.headers = headers;
      this.params = params;
      this.body = body;
      this.error = error;
    }
  }
  