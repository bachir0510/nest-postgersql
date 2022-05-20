export class ResponseLogFormat {
    time: number;
    body: string;
    error?: string;
  
    constructor(time: number, body: string, error?: string) {
      this.time = time;
      this.body = body;
      this.error = error;
    }
  
    public toString = (): string => {
      return JSON.stringify({
        time: `${this.time}ms`,
        body: this.body,
        error: this.error,
      });
    };
  }
  