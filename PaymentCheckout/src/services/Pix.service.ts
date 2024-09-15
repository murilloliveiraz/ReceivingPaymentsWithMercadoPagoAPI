import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroment';
import { PixModel } from 'src/models/PixModel';

@Injectable({
  providedIn: 'root'
})
export class PixService {
  private readonly baseURL = enviroment.backendURL;
  constructor(private httpClient: HttpClient) { }

  cobrarPix(pixRequest: PixModel){
    return this.httpClient.post<PixModel>(`${this.baseURL}/pix`, pixRequest);
  }
}
