import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/modules/utilisateur';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  users!: any[];
  user: Utilisateur=new Utilisateur();
  constructor(private utilisateurService:UtilisateurService) { }

  ngOnInit(){
    this.findAll();
  }

  findAll(){
    this.utilisateurService.findAll().subscribe(data => {this.users = data});
  }

  deleteUtilisateur(id:number){
    this.utilisateurService.delete(id).subscribe(() => {this.findAll()});
  }

  save(){
    this.utilisateurService.save(this.user).subscribe(() => {
      this.findAll();
      this.user = new Utilisateur();
    })
  }
}
