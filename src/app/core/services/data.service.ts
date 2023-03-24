import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Http, HttpOptions } from '@capacitor-community/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  async getMethod(endpoint: string) {
    //   return this.http.get(environment.trelloUrl + endpoint);
    const options = {
      url: environment.trelloUrl + endpoint,
    };

    const response: HttpResponse = await CapacitorHttp.get(options);
    return response.data;
  }
  getFn(endpoint: string) {
    return this.http.get(environment.trelloUrl + endpoint);
  }
  getMethod2(endpoint: any, parameters = {}) {
    const options: HttpOptions = {
      url: environment?.trelloUrl + endpoint,
      params: parameters,
    };
    return Http.get(options)
      .then((res: any) => {
        console.log(res);
        return res;
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
