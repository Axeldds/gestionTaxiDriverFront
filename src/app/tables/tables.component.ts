import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Chauffeur } from 'app/modules/chauffeur';
import { Taxi } from 'app/modules/taxi';
import { ChauffeurService } from 'app/services/chauffeur.service';
import { TaxiService } from 'app/services/taxi.service';

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
    chauffeur: Chauffeur=new Chauffeur();
    taxi: Taxi=new Taxi();

  constructor(private chauffeurService:ChauffeurService, private taxiService:TaxiService) { }

  ngOnInit() {
    this.findAllChauffeur();
    this.findAllTaxi();
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
          this.chauffeurService.save(this.chauffeur);
          this.findAllChauffeur();
          this.chauffeur= new Chauffeur();
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
