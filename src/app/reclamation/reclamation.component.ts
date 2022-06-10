import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'app/modules/reclamation';
import { ReclamationService } from 'app/services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {
  reclamations!: any[];
  reclamation: Reclamation=new Reclamation();

  constructor(private reclamationService:ReclamationService) { }

  ngOnInit(): void {
    this.findAllReclamation();
  }
  findAllReclamation(){
    this.reclamationService.findAll().subscribe(data => {this.reclamations = data});
  }

  deleteReclamation(id:number){
    this.reclamationService.delete(id).subscribe(() => {this.findAllReclamation()});
  }

  saveReclamation(){
    this.reclamationService.save(this.reclamation).subscribe(() => {
      this.findAllReclamation();
      this.reclamation = new Reclamation();
    })
  }
}
