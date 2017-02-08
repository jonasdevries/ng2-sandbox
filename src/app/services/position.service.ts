import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Position } from '../domain/position';

import { POSITIONS } from '../mock/mock-positions';
  
@Injectable()
export class PositionService {   

    constructor(private http: Http){
      
    }

    getPositions(): Promise<Position[]> {
      return Promise.resolve(POSITIONS);
    }

    getMockPositions(): Position[]{
      return POSITIONS;
    }

     /* simulate slow http connection */
    getPositionsSlowly(): Promise<Position[]> {
        return new Promise(resolve => {        
        setTimeout(() => resolve(this.getPositions()), 5000);
      });
    }   
  
    calculatePositions(positions:string){

      //console.log(positions);
      
      /*
      let pList:any = JSON.parse(positions);
      for (let i of pList){
        console.log(i.symbol);
      } */ 

      this.getCostPrice('AXU');

      
    }

    getCostPrice(symbol:string){
        const yhoo = 'yhoo';
        return this.http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20('"+yhoo+"')&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
        .map(res => res.json);

    }

        // here is some work to do
        // loop


/* loaded format        
  "symbol": "ATY",
	"currency": "CAD",
	"number": 16000,
	"costBasis": 0.5423645,
*/  

/* format to return 
export class Position {
  id: number;
  currency: string;
  symbol: string;  
  quantity: number;
  costPrice: number;
  closePrice: number;
  valueInBase:number;
  unRealizedProfitLoseinBase: number;
  weight: number;
  broker: string;
}  

/*
  export class Position {
  id: number;
  currency: string;
  symbol: string;  
  quantity: number;
  costPrice: number;
  closePrice: number;
  valueInBase:number;
  unRealizedProfitLoseinBase: number;
  weight: number;
  broker: string;
}  
*/    

}   

// 

// http://meumobi.github.io/stocks%20apis/2016/03/13/get-realtime-stock-quotes-yahoo-finance-api.html
// https://github.com/yql/yql-tables/issues

  