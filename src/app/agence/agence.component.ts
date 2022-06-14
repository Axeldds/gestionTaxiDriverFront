import { Component, OnInit } from '@angular/core';
import { Agence } from 'app/modules/agence';
import { AgenceService } from 'app/services/agence.service';
import { ResponsableService } from 'app/services/responsable.service';
import { data } from 'jquery';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.scss']
})
export class AgenceComponent implements OnInit {

  responsables!:any[];
  agences!: any[];
  agence: Agence = new Agence;

  constructor(private agenceService: AgenceService, private responsableService:ResponsableService) { }

  ngOnInit() {
    this.findAllAgence()
    this.findAllResponsable()
  }

  findAllAgence(){
    this.agenceService.findAll().subscribe(data =>{this.agences=data});
  }

  findAllResponsable(){
    this.responsableService.findAll().subscribe(data =>{this.responsables=data; console.log("les responsables"+this.responsables)});
  }

  deleteAgence(id:number){
    this.agenceService.delete(id).subscribe(()=>{this.findAllAgence()});
  }

  saveAgence(){
    this.agenceService.save(this.agence).subscribe(()=>{
      this.findAllAgence;
      this.agence=new Agence;
    })
  }

}
