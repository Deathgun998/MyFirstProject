import { Component } from '@angular/core';
import { Nuovofile } from './nuovofile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  items: Nuovofile[] = [];
  valore: string;
constructor(){
  this.title="cypo";
  this.items.push(new Nuovofile("","",0));
  this.items.push(new Nuovofile("esatto"));
  this.items.push(new Nuovofile("maina","gioia"));
  
  
  
}
showValue(){
  alert("valore: "+ this.valore);
  this.valore="";
}

}
