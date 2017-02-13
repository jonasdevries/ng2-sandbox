import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { PositionService } from '../services/position.service';
import { Position } from '../datatypes/position';

@Component({    
  moduleId: module.id,
  selector: 'positions',
  templateUrl: 'positions.component.html',
  providers:  [ PositionService ]
})

export class PositionsComponent implements OnInit {  
    isPositionsFileLoaded = false;
    positionsFromFileString:string;

    positions: Position[];   

    testCostPrice:any;

    constructor(private positionService:PositionService){}   

    ngOnInit(): void {
        this.getPositions();            
    }

    getPositions(): void {
        //this.positionService.getPositions().then(positions => this.positions = positions); // our Http
        this.positions = this.positionService.getMockPositions(); // our Mock
    }

    // push the loadPos
    calculatePositions(positionsFromFileString:string): void {
        this.positionService.calculatePositions(positionsFromFileString);
    }    

    // testButton
    getCostPrice(){
        this.positionService.getCostPrice('AXU').subscribe(testCostPrice => {
            this.testCostPrice = testCostPrice;            
        });

    }

    // bind to event of file input
    changeListener($event):void{
      this.readFile($event.target);           
    }

    private readFile(positionsFile:any){      
      var file:File = positionsFile.files[0];           
      var fileReader:FileReader = new FileReader();      
      
      fileReader.readAsText(file);
      fileReader.onloadend = (e) => {        
        this.positionsFromFileString = fileReader.result;

        this.calculatePositions(this.positionsFromFileString); 
        this.isPositionsFileLoaded = true;
      };           
      fileReader.onerror = (e) => {
        console.log(e);
      }      
    }       
        
}