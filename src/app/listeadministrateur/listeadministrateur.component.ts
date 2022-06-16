import { Component, OnInit } from '@angular/core';
import { Administrateur } from 'app/modules/administrateur';
import { AdministrateurService } from 'app/services/administrateur.service';

@Component({
  selector: 'app-listeadministrateur',
  templateUrl: './listeadministrateur.component.html',
  styleUrls: ['./listeadministrateur.component.scss']
})
export class ListeadministrateurComponent implements OnInit {
  administrateurs!: any[];
  administrateur: Administrateur = new Administrateur();

  constructor(private administrateurService : AdministrateurService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.administrateurService.findAll().subscribe(data => {this.administrateurs = data});
  }

  deleteAdmin(id:number){
    this.administrateurService.delete(id).subscribe(() => {this.findAll()});
  }

}
