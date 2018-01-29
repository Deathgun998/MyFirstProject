import { Component } from '@angular/core';
import { Nuovofile } from './nuovofile';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  valore: string;
  items: Nuovofile[] = [];
constructor(){
  this.title="cypo";

  let listService: ListService = new ListService();
  this.items = listService.getNuovofile();
}
showValue(){
  alert("valore: "+ this.valore);
  this.valore="";
}

}
