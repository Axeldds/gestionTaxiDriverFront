import { Component, OnInit } from '@angular/core';
import { Client } from 'app/modules/client';
import { Utilisateur } from 'app/modules/utilisateur';
import { ClientService } from 'app/services/client.service';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  users!: any[];
  user: Utilisateur=new Utilisateur();
  clients!: any[];
  client: Client=new Client;
  constructor(private utilisateurService:UtilisateurService, private clientService:ClientService) { }

  ngOnInit(){
    this.findAllUtil();
    this.findAllClient();
  }

  findAllUtil(){
    this.utilisateurService.findAll().subscribe(data => {this.users = data});
  }

  deleteUtilisateur(id:number){
    this.utilisateurService.delete(id).subscribe(() => {this.findAllUtil()});
  }

  saveUtil(){
    this.utilisateurService.save(this.user).subscribe(() => {
      this.findAllUtil();
      this.user = new Utilisateur();
    })
  }

  findAllClient(){
    this.clientService.findAll().subscribe(data => {this.clients = data});
  }

  deleteClient(id:number){
    this.clientService.delete(id).subscribe(() => {this.findAllClient()})
  }

  saveClient(){
    this.clientService.save(this.client).subscribe(() => {
      this.findAllClient();
      this.client = new Client();
    })
  }
}
