import * as ContextStore from 'request-context';
import { v1 as uuidv1 } from 'uuid';

export class ContextService {
  static KEYS = {
    REQUEST_ID: 'request:id',
    REQUEST_ORIGIN: 'request:origin',
    REQUEST_GUID: 'request:guid',
    APPINSIGHTS_USER: 'insights:user',
    APPINSIGHTS_REQUEST: 'insights:request',
    APPINSIGHTS_SECTION: 'insights:section',
  };

  static middleware(req, _res, next) {
    ContextService.set(ContextService.KEYS.REQUEST_ID, uuidv1());
    ContextService.set(
      ContextService.KEYS.REQUEST_ORIGIN,
      req.headers['x-origin'],
    );
    ContextService.set(
      ContextService.KEYS.APPINSIGHTS_SECTION,
      req.headers['rme-appinsights-section'],
    );
    ContextService.set(
      ContextService.KEYS.APPINSIGHTS_REQUEST,
      req.headers['rme-appinsights-request'],
    );
    ContextService.set(
      ContextService.KEYS.APPINSIGHTS_USER,
      req.headers['rme-appinsights-user'],
    );
    ContextService.set(ContextService.KEYS.REQUEST_GUID, req.headers.uid);
    next();
  }

  static set(key: string, value: any) {
    ContextStore.set(key, value);
  }

  static get(key: string): any {
    return ContextStore.get(key);
  }
}
