import { Component,EventEmitter, Input,Output } from '@angular/core';
import { Nuovofile } from '../nuovofile';
import { ComunicatorService } from '../comunicator.service';
import { ListService } from '../list.service';



@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
 


  items: Nuovofile[] ;

 constructor(private comunicatorService: ComunicatorService, private listService: ListService){

 }

ngOnInit() {
  this.items = this.listService.getNuovofile();
  
}
ngOnDestroy() {
 
  
}

   cliccami(item: Nuovofile){
     //chiamo il next nel subject
     this.comunicatorService.changeSubject(item);
    }
}
