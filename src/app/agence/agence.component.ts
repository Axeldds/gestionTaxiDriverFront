import { Component, OnInit } from '@angular/core';
import { Agence } from 'app/modules/agence';
import { AgenceService } from 'app/services/agence.service';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.scss']
})
export class AgenceComponent implements OnInit {

  agences!: any[];
  agence: Agence = new Agence;

  constructor(private agenceService: AgenceService) { }

  ngOnInit() {
    this.findAllAgence()
  }

  findAllAgence(){
    this.agenceService.findAll().subscribe(data =>{this.agences=data});
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
