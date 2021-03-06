import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { Taxi } from 'app/modules/taxi';
import { TaxiService } from 'app/services/taxi.service';

@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.component.html',
  styleUrls: ['./taxi.component.scss']
})
export class TaxiComponent implements OnInit {

  taxis!:any [];
  taxi: Taxi = new Taxi();

  constructor(private taxiService:TaxiService, private appService:AppService) { }

  ngOnInit(){
    this.findAllTaxi();
  }

  findAllTaxi(){
    this.taxiService.findAll().subscribe(data =>{this.taxis=data});
  }

  deleteTaxi(id:number){
    this.taxiService.delete(id).subscribe(()=>{this.findAllTaxi()});
  }

  saveTaxi(){
    this.taxiService.save(this.taxi).subscribe(()=>{
      this.findAllTaxi();
      this.taxi=new Taxi();
    })
  }

  authorities(){
    console.log("isAdmin="+this.appService.isAdmin);
    if(this.appService.isAdmin==true){
      return false;
    }
    if(this.appService.isResp==true){
      return false;
    }else{
      return true;
    }
  }

}
