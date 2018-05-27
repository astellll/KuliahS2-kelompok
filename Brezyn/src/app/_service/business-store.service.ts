// import { Injectable } from '@angular/core';
import { BusinessStore } from '../_model/business-store';
import { BaseService } from './_base/base-service';
// import { Http } from '@angular/http';

let path: string = 'business-store';

// @Injectable()
export class BusinessStoreService extends BaseService {
  selectedBusinessStore: BusinessStore = new BusinessStore()
  
  constructor(
    // baseHttp: Http
  ) {
    super();
    // super(baseHttp, path);
  }

}