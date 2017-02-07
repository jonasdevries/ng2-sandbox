import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Position } from '../domain/position';
import { POSITIONS } from '../mock/mock-positions';

@Injectable()
export class YqlService {   

    constructor(private http: Http){
      console.log('YqlService is started...');
    }

    getPositions(): Promise<Position[]> {
      return Promise.resolve(POSITIONS);
    }

// https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22yhoo%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=
// http://meumobi.github.io/stocks%20apis/2016/03/13/get-realtime-stock-quotes-yahoo-finance-api.html
// https://github.com/yql/yql-tables/issues

}  