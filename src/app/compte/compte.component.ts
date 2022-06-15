import { Component, OnInit } from '@angular/core';
import { Client } from 'app/modules/client';
import { Utilisateur } from 'app/modules/utilisateur';
import { ClientService } from 'app/services/client.service';
import { UtilisateurService } from 'app/services/utilisateur.service';

declare var $:any;

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
    this.clientService.save(this.client).subscribe(() => {
      this.findAllClient();
      this.client = new Client();
    })
  }

  findAllClient(){
    this.clientService.findAll().subscribe(data => {this.clients = data});
  }

  deleteClient(id:number){
    this.clientService.delete(id).subscribe(() => {this.findAllClient()})
  }

  showNotification(from, align){
    const type = ['success'];

    var color = Math.floor((Math.random() * 4) + 1);
    $.notify({
        icon: "pe-7s-gift",
        message: "Compte crée ! Bienvenue a toi jeune Client"
    },{
        type: type[color],
        timer: 1000,
        placement: {
            from: from,
            align: align
        }
    });
}
}
