import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { AppService } from 'app/app.service';
import { Agence } from 'app/modules/agence';
import { Chauffeur } from 'app/modules/chauffeur';
import { Taxi } from 'app/modules/taxi';
import { Utilisateur } from 'app/modules/utilisateur';
import { AgenceService } from 'app/services/agence.service';
import { ChauffeurService } from 'app/services/chauffeur.service';
import { TaxiService } from 'app/services/taxi.service';
import { UtilisateurService } from 'app/services/utilisateur.service';
import { data } from 'jquery';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'},
      initialView: 'timeGridWeek',
    events: [
      { title: 'event 1', date: '2019-04-01' },
    ]
  };


    chauffeurs!: any[];
    taxis!: any[];
    agences!:any[];
    chauffeur: Chauffeur=new Chauffeur();
    taxi: Taxi=new Taxi();
    agence: Agence=new Agence();
    utilisateurs!: any[];
    utilisateur: Utilisateur =new Utilisateur();
    responseAll: any;
    isAdmin=false;
    isClient=false;
    isResp=false;
    isChauffeur=false;

  constructor(private chauffeurService:ChauffeurService, private taxiService:TaxiService, private agenceService:AgenceService,private utilisateurService:UtilisateurService, private httpClient:HttpClient, private appService:AppService) { }

  ngOnInit() {
    this.findAllChauffeur();
    this.findAllTaxi();
    this.findAllAgence();
    this.findAllUtilisateur();
  }

  findAllUtilisateur(){
    this.utilisateurService.findAll().subscribe(data => {this.utilisateurs = data});
  }
  findAllAgence(){
    this.agenceService.findAll().subscribe(data => {this.agences = data});
  }
    findAllTaxi() {
        this.taxiService.findAll().subscribe(data => {this.taxis = data});
    }
    findAllChauffeur() {
        this.chauffeurService.findAll().subscribe(data => {this.chauffeurs = data});
    }

      deleteTaxi(id:number){
        this.taxiService.delete(id).subscribe(() => {this.findAllTaxi()})
      }

      deleteChauffeur(id:number){
        this.chauffeurService.delete(id).subscribe(() => {this.findAllChauffeur()});
        //this.utilisateurService.delete(id).subscribe(() => {this.findAllUtilisateur()});
      }

      updateChauffeur(id:number){
        this.chauffeurService.update(id).subscribe(() => {
          if (this.chauffeur.taxi.idTaxi !== null){
            this.chauffeur.taxi.idTaxi == this.chauffeur.taxi.idTaxi
            this.chauffeur.taxi.idTaxi = null     
          }
        });
      }
      saveTaxi(){
        this.taxiService.save(this.taxi).subscribe(() => {
          this.findAllTaxi();
          this.taxi = new Taxi();
        })
      }
      saveChauffeur(){
        this.chauffeurService.save(this.taxi).subscribe(() => {
          this.findAllChauffeur();
          this.chauffeur = new Chauffeur();
        })
      }

      authenticated(){
        return this.appService.authenticated; // false
      }

      authorities(){
        console.log("isAdmin="+this.appService.isAdmin);
        if(this.appService.isAdmin==true){
          return false;
        }else{
          return true;
        }
      }
      
    }
    
