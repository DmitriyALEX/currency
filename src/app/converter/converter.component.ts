import { Component, OnInit } from '@angular/core';
import { data } from '../dataInterface';
import { CurrencyDataService } from '../currency-data.service';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
   
    constructor(private currencyDataService: CurrencyDataService) {
    }

    currencyNames: string[] = ["UAH",  "USD", "EUR"];
    data: any[];
    selectedUp: string; 
    selectedDown: string;
    valueUp: number;
    valueDown: number;
    inputUp:number;
    inputDown:number;
    usdToEur: number;
    eurToUsd: number;
    inputValue: number;
    usd: number;
    usdbuy: number;
    usdsell: number;
    eur: number;
    eurbuy: number;
    eursell: number;

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

    SelectItemUp(event: any) {
        this.selectedUp = event.target.value
    }

    SelectItemDown(event: any) {
        this.selectedDown = event.target.value
    }

    inputUpValue() {
        if (this.selectedUp ===  this.selectedDown) {
            this.valueDown = this.valueUp 
        } 
        else {  
            if (this.selectedUp == 'UAH' && this.selectedDown == 'USD') {
                this.valueDown = Number(this.valueUp) / Number(this.usdbuy)
                this.valueDown = Number(this.valueDown.toFixed(2))
                this.valueDown.toPrecision(2)
            }
            
            if (this.selectedUp == 'USD' && this.selectedDown == 'UAH') {
                this.valueDown = Number(this.valueUp) * Number(this.usdsell)
                this.valueDown = Number(this.valueDown.toFixed(2))
                this.valueDown.toPrecision(2)   
            }


            if (this.selectedUp == 'UAH' && this.selectedDown == 'EUR') {
                this.valueDown = Number(this.valueUp) / Number(this.eurbuy) 
                this.valueDown = Number(this.valueDown.toFixed(2))
                this.valueDown.toPrecision(2)  
            }

            if (this.selectedUp == 'EUR' && this.selectedDown == 'UAH') {
                this.valueDown = Number(this.valueUp) * Number(this.eursell)
                this.valueDown = Number(this.valueDown.toFixed(2))
                this.valueDown.toPrecision(2)   
            }

            if (this.selectedUp == 'USD' && this.selectedDown == 'EUR') {
                let usdToEur = Number(this.valueUp) * Number(this.usdsell) 
                this.valueDown = Number(usdToEur) / Number(this.eurbuy)
                this.valueDown = Number(this.valueDown.toFixed(2))
                this.valueDown.toPrecision(2)
            }
            
            if (this.selectedUp == 'EUR' && this.selectedDown == 'USD') {
                let eurToUsd = Number(this.valueUp) * Number(this.eursell)
                this.valueDown = Number(eurToUsd) / Number(this.usdbuy)
                this.valueDown = Number(this.valueDown.toFixed(2))
                this.valueDown.toPrecision(2)
            }
        }
    }

    inputDownValue() {
        if (this.selectedDown ===  this.selectedUp) {
            this.valueUp = this.valueDown 
        } 
        else {  
            if (this.selectedDown == 'UAH' && this.selectedUp== 'USD') {
                this.valueUp = Number(this.valueDown) / Number(this.usdbuy)
                this.valueUp = Number(this.valueUp.toFixed(2))
                this.valueUp.toPrecision(2)
            }
            
            if (this.selectedDown == 'USD' && this.selectedUp == 'UAH') {
                this.valueUp = Number(this.valueDown) * Number(this.usdsell) 
                this.valueUp = Number(this.valueUp.toFixed(2))
                this.valueUp.toPrecision(2)  
            }

            if (this.selectedDown == 'UAH' && this.selectedUp == 'EUR') {
                this.valueUp = Number(this.valueDown) / Number(this.eurbuy)
                this.valueUp = Number(this.valueUp.toFixed(2))
                this.valueUp.toPrecision(2)   
            }

            if (this.selectedDown == 'EUR' && this.selectedUp == 'UAH') {
                this.valueUp = Number(this.valueDown) * Number(this.eursell)
                this.valueUp = Number(this.valueUp.toFixed(2))
                this.valueUp.toPrecision(2)   
            }

            if (this.selectedDown == 'USD' && this.selectedUp == 'EUR') {
                let usdToEur = Number(this.valueDown) * Number(this.usdsell) 
                this.valueUp = Number(usdToEur) / Number(this.eurbuy)
                this.valueUp = Number(this.valueUp.toFixed(2))
                this.valueUp.toPrecision(2)
            }
            
            if (this.selectedDown == 'EUR' && this.selectedUp == 'USD') {
                let eurToUsd = Number(this.valueDown) * Number(this.eursell)
                this.valueUp = Number(eurToUsd) / Number(this.usdbuy)
                this.valueUp = Number(this.valueUp.toFixed(2))
                this.valueUp.toPrecision(2)
            }
        }
    }
}