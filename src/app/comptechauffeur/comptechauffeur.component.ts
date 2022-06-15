import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Agence } from 'app/modules/agence';
import { Chauffeur } from 'app/modules/chauffeur';
import { Taxi } from 'app/modules/taxi';
import { Utilisateur } from 'app/modules/utilisateur';
import { AgenceService } from 'app/services/agence.service';
import { ChauffeurService } from 'app/services/chauffeur.service';
import { TaxiService } from 'app/services/taxi.service';
import { UtilisateurService } from 'app/services/utilisateur.service';
import { analytics } from 'googleapis/build/src/apis/analytics';

declare var $:any;

@Component({
  selector: 'app-comptechauffeur',
  templateUrl: './comptechauffeur.component.html',
  styleUrls: ['./comptechauffeur.component.scss']
})
export class ComptechauffeurComponent implements OnInit {

  chauffeurs!:any[];
  chauffeur: Chauffeur=new Chauffeur();
  utilisateurs!:any[];
  utilisateur: Utilisateur=new Utilisateur();
  taxis!:[];
  taxi: Taxi=new Taxi();
  newChauffeur: Chauffeur=new Chauffeur();
  agences!: any[];
  agence: Agence=new Agence();

  constructor(private chauffeurService:ChauffeurService, private utilisateurService:UtilisateurService, private taxiService:TaxiService, private agenceService:AgenceService) { }

  ngOnInit() {
    this.findAll();
    this.findAllTaxi();
    this.findAllAgence();
  }

  findAllTaxi(){
    this.taxiService.findAll().subscribe(data => {this.taxis = data});
  }
  findAll(){
    this.chauffeurService.findAll().subscribe(data => {this.chauffeurs = data})
  }

  findAllAgence(){
    this.agenceService.findAll().subscribe(data => {this.agences = data})
  }

  deleteChauffeur(id:number){
    this.chauffeurService.delete(id).subscribe(() => {this.findAll()});
  }

  saveChauffeur(){
    this.chauffeurService.save(this.chauffeur).subscribe(()=> {
      this.findAll();
      this.chauffeur =new Chauffeur();
    })
  }

  updateChauffeur(id:number){
    this.chauffeurService.update(id).subscribe(() => {
     if (this.chauffeur.taxi.idTaxi !== null){
        this.chauffeur.taxi.idTaxi == this.chauffeur.taxi.idTaxi
        this.chauffeur.taxi.idTaxi = null     
      }
    });
  }

  saveUtilisateur(){
    this.utilisateurService.save(this.utilisateur).subscribe(()=> {
      this.findAll();
      this.utilisateur=new Utilisateur();
    })
    this.chauffeurService.save(this.chauffeur).subscribe(()=> {
      this.findAll();
      this.chauffeur=new Chauffeur();
    })
  }
  showNotification(from, align){
    const type = ['success'];

    var color = Math.floor((Math.random() * 4) + 1);
    $.notify({
        icon: "pe-7s-gift",
        message: "Compte crée ! Bienvenue au nouveau Samy Naceri de l'entreprise"
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
