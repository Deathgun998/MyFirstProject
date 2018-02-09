import { Component } from '@angular/core';
import {Nuovofile} from '../nuovofile'
import { ComunicatorService } from '../comunicator.service';
@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
   currentNuovofile : Nuovofile;
  constructor(private comunicatorService:ComunicatorService ) {
   
      this.comunicatorService.mySubject$.subscribe( (newValue: Nuovofile) => {  
      this.currentNuovofile = newValue;
      }); 
   }
  }

  


