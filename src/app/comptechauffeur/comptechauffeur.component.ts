import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Chauffeur } from 'app/modules/chauffeur';
import { Taxi } from 'app/modules/taxi';
import { Utilisateur } from 'app/modules/utilisateur';
import { ChauffeurService } from 'app/services/chauffeur.service';
import { TaxiService } from 'app/services/taxi.service';
import { UtilisateurService } from 'app/services/utilisateur.service';

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

  constructor(private chauffeurService:ChauffeurService, private utilisateurService:UtilisateurService, private taxiService:TaxiService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.chauffeurService.findAll().subscribe(data => {this.chauffeurs = data})
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
      this.chauffeurService.save(this.newChauffeur);
      this.findAll();
      this.chauffeur=new Chauffeur();
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
    this.taxiService.save(this.taxi).subscribe(() => {
      this.findAll();
      this.taxi=new Taxi();
    })
  }
}
