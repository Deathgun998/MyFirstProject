import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Nuovofile} from '../nuovofile'
import { ComunicatorService } from '../comunicator.service';
import { ListService } from '../list.service';
@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
   currentNuovofile : Nuovofile;
  constructor(private route:ActivatedRoute,private listService:ListService ) {
   this.route.params.subscribe(params =>{
     if(params['id'] != '' && params['id'] != null) 
this.currentNuovofile = this.listService.getNuovofileById(params['id']);
     })
   
  }
}

  


