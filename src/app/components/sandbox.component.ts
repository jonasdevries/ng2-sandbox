import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { YqlService} from '../services/yql.service';

@Component({    
  moduleId: module.id,
  selector: 'sandbox',
  templateUrl: 'sandbox.component.html',
  providers:  [ YqlService ]
})

export class SandBoxComponent implements OnInit {  
    positions: Position[];   

    constructor(private yqlService:YqlService){}   

    ngOnInit(): void {
        this.getPositions();
    }

    getPositions(): void {
        this.yqlService.getPositions().then(positions => this.positions = positions);
    }
    
}