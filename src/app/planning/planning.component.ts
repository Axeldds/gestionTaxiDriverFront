import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Chauffeur } from 'app/modules/chauffeur';
import { Reservation } from 'app/modules/reservation';
import { ChauffeurService } from 'app/services/chauffeur.service';
import { ReservationService } from 'app/services/reservation.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  dateDebut:Date;
  reservations!:any[];
  chauffeurs!: any[];
  chauffeur: Chauffeur=new Chauffeur();
  reservation: Reservation=new Reservation();
  isAdmin=false;
  isClient=false;
  isResp=false;
  isChauffeur=false;
  constructor(private chauffeurService:ChauffeurService, private reservationService:ReservationService, private appService: AppService) { }

  ngOnInit(): void {
    this.findAllChauffeur();
    //this.findAllReservation();
    this.findbyDateDebut();
  }

  findAllChauffeur() {
    this.chauffeurService.findAll().subscribe(data => {this.chauffeurs = data});
}

  /*findAllReservation(){
    this.reservationService.findAll().subscribe(data=>{this.reservations=data});
  }*/

  deleteReservation(id:number){
    this.reservationService.delete(id).subscribe(()=>{})
  }
  findbyDateDebut(){
    this.reservationService.findByDateDebut(this.dateDebut).subscribe(data=>{this.reservations=data})
  }
  onSubmitDate(){
    this.findbyDateDebut();
  }

  authenticated(){
    return this.appService.authenticated; // false
  }

  authorities(){
    console.log("isResp="+this.appService.isResp);
    if(this.appService.isResp==true){
      return false;
    }else{
      return true;
    }
  }

}
