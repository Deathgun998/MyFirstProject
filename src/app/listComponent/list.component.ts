import { Component,EventEmitter, Input,Output } from '@angular/core';
import { Nuovofile } from '../nuovofile';
import { ComunicatorService } from '../comunicator.service';



@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
 

  @Input()
  items: Nuovofile[] ;

 constructor(private comunicatorService: ComunicatorService){

 }

ngOnInit() {
  this.items.push(new Nuovofile());
  
}
ngOnDestroy() {
 
  
}

   cliccami(item: Nuovofile){
     //chiamo il next nel subject
     this.comunicatorService.changeSubject(item);
    }
}
