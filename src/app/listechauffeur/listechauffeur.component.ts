import { Component, OnInit } from '@angular/core';
import { Chauffeur } from 'app/modules/chauffeur';
import { Utilisateur } from 'app/modules/utilisateur';
import { ChauffeurService } from 'app/services/chauffeur.service';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-listechauffeur',
  templateUrl: './listechauffeur.component.html',
  styleUrls: ['./listechauffeur.component.scss']
})
export class ListechauffeurComponent implements OnInit {
  chauffeurs!: any[];
  chauffeur: Chauffeur = new Chauffeur();
  users!: any[];
  user: Utilisateur=new Utilisateur();

  constructor(private chauffeurService : ChauffeurService, private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.findAllChauffeur();
  }

  deleteChauffeur(id:number){
    this.chauffeurService.delete(id).subscribe(() => {this.findAllChauffeur()});
  }

  findAllChauffeur(){
    this.chauffeurService.findAll().subscribe(data=>{this.chauffeurs=data});
  }
  
}
