import { Component, OnInit } from '@angular/core';
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

  constructor(private annonceService:AnnonceService) {}

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
  }


