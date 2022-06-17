import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Annonce } from 'app/modules/annonce';
import { AnnonceService } from 'app/services/annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {

  annonces!:any[]
  annonce : Annonce=new Annonce();
  isAdmin=false;
  isClient=false;
  isResp=false;
  isChauffeur=false;

  constructor(private annonceService:AnnonceService, private appService:AppService) {}

  ngOnInit(): void {    
    this.findAllAnnonce();
  }
  findAllAnnonce(){
    this.annonceService.findAll().subscribe(data => {this.annonces = data});
  }


  deleteAnnonce(id:number){
    this.annonceService.delete(id).subscribe(() => {this.findAllAnnonce()});
  }

  saveAnnonce(){
    this.annonceService.save(this.annonce).subscribe(() => {
      this.findAllAnnonce();
      this.annonce = new Annonce();
    })
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


