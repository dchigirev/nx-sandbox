import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
  ICreateRequest,
  IDeleteRequest,
  IGetRequest,
  IUpdateRequest,
} from '@nx-sandbox/shared-models';
import { IFoo } from '@nx-sandbox/one-models';

@Injectable({
  providedIn: 'root',
})
export class FooApiService {
  /** CRUD */

  public create(req: ICreateRequest<IFoo>) {
    console.log('Foo Create Req = ', req);
    return of();
  }

  public update(req: IUpdateRequest<IFoo>) {
    console.log('Foo Update Req = ', req);
    return of();
  }

  public delete(req: IDeleteRequest) {
    console.log('Foo Delete Req = ', req);
    return of();
  }

  public get(req: IGetRequest) {
    console.log('Foo Get Req = ', req);
    return of();
  }
}
