import { Component, OnInit } from '@angular/core';
import { Administrateur } from 'app/modules/administrateur';
import { Utilisateur } from 'app/modules/utilisateur';
import { AdministrateurService } from 'app/services/administrateur.service';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-compteadministrateur',
  templateUrl: './compteadministrateur.component.html',
  styleUrls: ['./compteadministrateur.component.scss']
})
export class CompteadministrateurComponent implements OnInit {

  administrateurs!: any[];
  administrateur: Administrateur = new Administrateur();
  utilisateurs!: any[];
  utilisateur: Utilisateur = new Utilisateur();

  constructor(private administrateurService:AdministrateurService, private utilisateurService:UtilisateurService) { }

  ngOnInit(){
    this.findAll();
    this.findAllUtil();
  }

  findAllUtil(){
    this.utilisateurService.findAll().subscribe(data => {this.findAll()});
  }

  findAll(){
    this.administrateurService.findAll().subscribe(data => {this.administrateurs = data});
  }

  deleteAdmin(id:number){
    this.administrateurService.delete(id).subscribe(() => {this.findAll()});
  }

  saveAdmin(){
    this.administrateurService.save(this.administrateur).subscribe(() => {
      this.findAll();
      this.administrateur = new Administrateur();
    })
    this.utilisateurService.save(this.utilisateur).subscribe(() => {
      this.findAll();
      this.utilisateur = new Utilisateur();
    })
  }


}
