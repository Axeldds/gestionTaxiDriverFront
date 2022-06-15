import { Component, OnInit } from '@angular/core';
import { Chauffeur } from 'app/modules/chauffeur';
import { ChauffeurService } from 'app/services/chauffeur.service';
import { ReservationService } from 'app/services/reservation.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  reservations!:any[];
  chauffeurs!: any[];
  chauffeur: Chauffeur=new Chauffeur();
  constructor(private chauffeurService:ChauffeurService, private reservationService:ReservationService) { }

  ngOnInit(): void {
    this.findAllChauffeur();
  }

  findAllChauffeur() {
    this.chauffeurService.findAll().subscribe(data => {this.chauffeurs = data});
}

  findAllReservation(){
    this.reservationService.findAll().subscribe(data=>{this.reservations=data});
  }

}
