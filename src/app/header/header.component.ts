import { Component, OnInit } from '@angular/core';
import { data } from '../dataInterface';
import { CurrencyDataService } from '../currency-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:  [CurrencyDataService],
})
export class HeaderComponent implements OnInit {
    
    data: data[] = [];
    constructor(private currencyDataService: CurrencyDataService) {
    }

    usd: any;
    usdbuy: any;
    usdsell: any;
     
    eur: any;
    eurbuy: any;
    eursell: any;

    ngOnInit() {
    this.currencyDataService.ApiRequest().subscribe(data => {
        this.data = data;
        this.usd = this.data[0]
        this.usdbuy = this.data[0].rateBuy.toFixed(2)
        this.usdsell = this.data[0].rateSell.toFixed(2)

        this.eur = this.data[1]
        this.eurbuy = this.data[1].rateBuy.toFixed(2)
        this.eursell = this.data[1].rateSell.toFixed(2)
    })
  }
}