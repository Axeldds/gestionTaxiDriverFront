import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Agence } from 'app/modules/agence';
import { Chauffeur } from 'app/modules/chauffeur';
import { Taxi } from 'app/modules/taxi';
import { AgenceService } from 'app/services/agence.service';
import { ChauffeurService } from 'app/services/chauffeur.service';
import { TaxiService } from 'app/services/taxi.service';
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

  constructor(private chauffeurService:ChauffeurService, private taxiService:TaxiService, private agenceService:AgenceService) { }

  ngOnInit() {
    this.findAllChauffeur();
    this.findAllTaxi();
    this.findAllAgence();
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
        this.chauffeurService.delete(id).subscribe(() => {this.findAllChauffeur()})
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
    }
