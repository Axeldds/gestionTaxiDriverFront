import { Component, OnInit } from '@angular/core';
import { Avis } from 'app/modules/avis';
import { AvisService } from 'app/services/avis.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {
  note:number;
  searchTerm:string="";
  direction:string="asc";
  column:string="first";
  type:string="number";
  avisS!: any[];
  avis: Avis=new Avis();
  constructor(private avisService:AvisService) { }

  ngOnInit(){
    //this.findAll();
    this.findByNote();
  }

  /*findAll(){
    this.avisService.findAll().subscribe(data => {this.avisS = data});
  }*/

  deleteAvis(id:number){
    this.avisService.delete(id).subscribe(() => {this.findByNote()});
  }

  save(){
    this.avisService.save(this.avis).subscribe(() => {
      this.findByNote;
      this.avis=new Avis();
    })
  }

  setSortParams(param){
    this.direction=param.dir;
    this.column=param.col;
    this.type=param.typ;
    }

    findByNote(){
      this.avisService.findByNote(this.note).subscribe(data =>{this.avisS = data});
    }
    onSubmitNote(){
      this.findByNote();
    }

}
