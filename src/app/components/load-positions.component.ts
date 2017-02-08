import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({    
  moduleId: module.id,
  selector: 'load-positions',
  templateUrl: 'load-positions-form.component.html'
})

export class LoadPositionsComponent  {  
        
    isPositionsFileLoaded = false;
    positionsString:string;

    // bind to event of file input
    changeListener($event):void{
      this.readFile($event.target);      
    }

    readFile(positionsFile:any){      
      var file:File = positionsFile.files[0];           
      var fileReader:FileReader = new FileReader();      
      
      fileReader.readAsText(file);
      fileReader.onloadend = (e) => {        
        this.positionsString = fileReader.result;
        this.isPositionsFileLoaded = true;
      };           
      fileReader.onerror = (e) => {
        console.log(e);
      }      
    }          
    
}