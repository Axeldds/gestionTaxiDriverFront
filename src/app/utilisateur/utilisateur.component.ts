import { Component, OnInit } from '@angular/core';
import { Chauffeur } from 'app/modules/chauffeur';
import { Client } from 'app/modules/client';
import { Utilisateur } from 'app/modules/utilisateur';
import { ChauffeurService } from 'app/services/chauffeur.service';
import { ClientService } from 'app/services/client.service';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  chauffeurs!:any[];
  chauffeur:Chauffeur = new Chauffeur();
  clients!: any[];
  client : Client = new Client();
  users!: any[];
  user: Utilisateur=new Utilisateur();
  constructor(private utilisateurService:UtilisateurService, private clientService: ClientService, private chauffeurService: ChauffeurService) { }

  ngOnInit(){
    this.findAll();
    this.findAllClient();
    //this.findAllChauffeur();
  }

  findAll(){
    this.utilisateurService.findAll().subscribe(data => {this.users = data});
  }

  deleteClient(id:number){
    this.clientService.delete(id).subscribe(() => {this.findAllClient()})
  }

  save(){
    this.utilisateurService.save(this.user).subscribe(() => {
      this.findAll();
      this.user = new Utilisateur();
    })
  }
  findAllClient(){
    this.clientService.findAll().subscribe(data=>{this.clients=data});
  }
  
}
