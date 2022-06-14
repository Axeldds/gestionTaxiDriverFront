import { Component, OnInit } from '@angular/core';
import { Agence } from 'app/modules/agence';
import { Reclamation } from 'app/modules/reclamation';
import { AgenceService } from 'app/services/agence.service';
import { ReclamationService } from 'app/services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {
  reclamations!: any[];
  agences!: any[];
  reclamation: Reclamation=new Reclamation();
  agence: Agence=new Agence();

  constructor(private reclamationService:ReclamationService, private agenceService:AgenceService) { }

  ngOnInit(): void {
    this.findAllReclamation();
    this.findAllAgence();
  }
  findAllReclamation(){
    this.reclamationService.findAll().subscribe(data => {this.reclamations = data});
  }
  findAllAgence(){
    this.agenceService.findAll().subscribe(data => {this.agences = data});
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
