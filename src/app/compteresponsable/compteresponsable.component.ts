import { Component, OnInit } from '@angular/core';
import { ResponsableAgence } from 'app/modules/responsable-agence';
import { Utilisateur } from 'app/modules/utilisateur';
import { ResponsableService } from 'app/services/responsable.service';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-compteresponsable',
  templateUrl: './compteresponsable.component.html',
  styleUrls: ['./compteresponsable.component.scss']
})
export class CompteresponsableComponent implements OnInit {
  responsables!: any[];
  responsable: ResponsableAgence =new ResponsableAgence();

  utilisateurs!: any[];
  utilisateur: Utilisateur = new Utilisateur();
  constructor(private responsableService:ResponsableService, private utilisateurService:UtilisateurService) { }

  ngOnInit(){
    this.findAll();
    this.findAllUser();
  }

  findAll(){
  this.responsableService.findAll().subscribe(data => {this.responsables = data});
  }

  findAllUser(){
    this.utilisateurService.findAll().subscribe(data => {this.utilisateur = data});
  }
  deleteResp(id:number){
    this.responsableService.delete(id).subscribe(() => {this.findAll()});
  }

  save(){
    this.responsableService.save(this.responsable).subscribe(() => {
      this.findAll();
      this.responsable =new ResponsableAgence();
    })
    this.utilisateurService.save(this.utilisateur).subscribe(() => {
      this.findAll();
      this.utilisateur = new Utilisateur
    })
  }
}
