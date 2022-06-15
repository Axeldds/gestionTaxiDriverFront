import { Component, OnInit } from '@angular/core';
import { Chauffeur } from 'app/modules/chauffeur';
import { ChauffeurService } from 'app/services/chauffeur.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  chauffeurs!: any[];
  chauffeur: Chauffeur=new Chauffeur();
  constructor(private chauffeurService:ChauffeurService) { }

  ngOnInit(): void {
    this.findAllChauffeur();
  }

  findAllChauffeur() {
    this.chauffeurService.findAll().subscribe(data => {this.chauffeurs = data});
}

}
