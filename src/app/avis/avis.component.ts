import { Component, OnInit } from '@angular/core';
import { Avis } from 'app/modules/avis';
import { AvisService } from 'app/services/avis.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {
  searchTerm:string="";
  direction:string="asc";
  column:string="first";
  type:string="number";
  avisS!: any[];
  avis: Avis=new Avis();
  constructor(private avisService:AvisService) { }

  ngOnInit(){
    this.findAll();
  }

  findAll(){
    this.avisService.findAll().subscribe(data => {this.avisS = data});
  }

  deleteAvis(id:number){
    this.avisService.delete(id).subscribe(() => {this.findAll()});
  }

  save(){
    this.avisService.save(this.avis).subscribe(() => {
      this.findAll();
      this.avis=new Avis();
    })
  }

  setSortParams(param){
    this.direction=param.dir;
    this.column=param.col;
    this.type=param.typ;
    }

}
