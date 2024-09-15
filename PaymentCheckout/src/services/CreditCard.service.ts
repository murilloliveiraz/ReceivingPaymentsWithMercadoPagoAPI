import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroment';
import { CreditCardRequest } from 'src/models/creditCardRequest';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  private readonly baseURL = enviroment.backendURL;
  constructor(private httpClient: HttpClient) { }

  cobrarCartao(creditCardRequest: CreditCardRequest){
    return this.httpClient.post<CreditCardRequest>(`${this.baseURL}/credit-card`, creditCardRequest);
  }
}
