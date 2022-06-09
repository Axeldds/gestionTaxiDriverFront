import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    chauffeurs!: any[];
    taxis!: any[];
    chauffeur: Chauffeur=new Chauffeur();
    taxi: Taxi=new Taxi();

  constructor(private chauffeurService:ChauffeurService, private taxiService:TaxiService) { }

  ngOnInit() {
    this.chauffeurService.findAll();
    this.taxiService.findAll();
  }

}
