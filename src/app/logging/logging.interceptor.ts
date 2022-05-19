import { Injectable, NestInterceptor } from '@nestjs/common';
import * as objectTrim from 'object-trim';
import * as MaskJson from "mask-json"

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
  intercept() {}
}
