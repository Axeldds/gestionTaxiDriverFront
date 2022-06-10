import { Component, OnInit } from '@angular/core';
import { Client } from 'app/modules/client';
import { ClientService } from 'app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients!: any[];
  client: Client=new Client();
  constructor(private clientService:ClientService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.clientService.findAll().subscribe(data =>{this.clients = data})
  }

  deleteClient(id:number){
    this.clientService.delete(id).subscribe(() => {this.findAll()})
  }
}
