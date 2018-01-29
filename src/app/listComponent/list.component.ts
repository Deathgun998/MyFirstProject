import { Component, Input } from '@angular/core';
import { Nuovofile } from '../nuovofile';


@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Input()
  items: Nuovofile[] ;


}
