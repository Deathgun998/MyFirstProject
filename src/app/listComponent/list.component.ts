import { Component,EventEmitter, Input,Output } from '@angular/core';
import { Nuovofile } from '../nuovofile';



@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
 

  @Input()
  items: Nuovofile[] ;

  @Output()
  EventEmitterNuovofile = new EventEmitter<Nuovofile>();

   cliccami(item: Nuovofile){
     this.EventEmitterNuovofile.emit(item)
    }
}
