import { Injectable } from '@angular/core';
import { IBar } from '@nx-sandbox/one-models';
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
export class BarApiService {
  /** CRUD */

  public create(req: ICreateRequest<IBar>) {
    console.log('Bar Create Req = ', req);
    return of();
  }

  public update(req: IUpdateRequest<IBar>) {
    console.log('Bar Update Req = ', req);
    return of();
  }

  public delete(req: IDeleteRequest) {
    console.log('Bar Delete Req = ', req);
    return of();
  }

  public get(req: IGetRequest) {
    console.log('Bar Get Req = ', req);
    return of();
  }
}
