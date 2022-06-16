import { Component, OnInit } from '@angular/core';
import { ResponsableAgence } from 'app/modules/responsable-agence';
import { ResponsableService } from 'app/services/responsable.service';

@Component({
  selector: 'app-listeresposable',
  templateUrl: './listeresposable.component.html',
  styleUrls: ['./listeresposable.component.scss']
})
export class ListeresposableComponent implements OnInit {
  responsables!: any[];
  responsable: ResponsableAgence =new ResponsableAgence();

  constructor(private responsableService : ResponsableService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.responsableService.findAll().subscribe(data => {this.responsables = data});
    }

    deleteResp(id:number){
      this.responsableService.delete(id).subscribe(() => {this.findAll()});
    }

}
