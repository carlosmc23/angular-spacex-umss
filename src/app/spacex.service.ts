import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Launch } from './model/launch';

@Injectable()
export class SpacexService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

   public getLaunches(): Observable<Launch[]> {
     return this.httpClient
      .get<Launch[]>('https://api.spacexdata.com/v2/launches');
   }

   public getLatestLaunch(): Observable<Launch> {
    return this.httpClient
      .get<Launch>('https://api.spacexdata.com/v2/launches/latest');
   }
}
