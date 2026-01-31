import { Injectable } from '@angular/core';
import { IBaz, IBazSendToEmailRequest } from '@nx-sandbox/one-models';
import {
  ICreateRequest,
  IDeleteRequest,
  IGetRequest,
  IUpdateRequest,
} from '@nx-sandbox/shared-models';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BazApiService {
  /** CRUD */

  public create(req: ICreateRequest<IBaz>) {
    console.log('Baz Create Req = ', req);
    return of();
  }

  public update(req: IUpdateRequest<IBaz>) {
    console.log('Baz Update Req = ', req);
    return of();
  }

  public delete(req: IDeleteRequest) {
    console.log('Baz Delete Req = ', req);
    return of();
  }

  public get(req: IGetRequest) {
    console.log('Baz Get Req = ', req);
    return of();
  }

  /** Custom */

  public sendToEmail(req: IBazSendToEmailRequest) {
    console.log('Baz Send To Email = ', req);
    return of();
  }
}
