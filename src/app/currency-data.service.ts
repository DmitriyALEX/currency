import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './dataInterface';
import { Observable } from 'rxjs';
import { filter, map, take} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class CurrencyDataService {

  constructor(private htpp: HttpClient) { }
  
  currencyCodeA: string;

  ApiRequest(): Observable<data[]> {
    return this.htpp.get<data[]>('https://api.monobank.ua/bank/currency')
      .pipe(
        map(arraydata => arraydata.map(ratedata => ({
            currencyCodeA: ratedata.currencyCodeA,
            currencyCodeB: ratedata.currencyCodeB,
            date: ratedata.date,
            rateBuy: ratedata.rateBuy,
            rateSell: ratedata.rateSell,                
            }))
            .filter(ratedata => ratedata.currencyCodeA == 978 && ratedata.currencyCodeB == 980 ||
            ratedata.currencyCodeA == 840 && ratedata.currencyCodeB == 980
            )),
            take(2)    
  )}
}
