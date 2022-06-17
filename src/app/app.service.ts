import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated=false;
  responseAll:any;
  isClient=false;
  isResp=false;
  isChauffeur=false;
  isAdmin=false;

  constructor(private httpClient: HttpClient) { }
  
  authenticate(credentials:any, callback:any){
    const headers = new HttpHeaders(
      credentials ? {
        authorization : 'Basic ' + btoa(credentials.username+ ':'+ credentials.password)
      } : {}
    );
    this.httpClient.get('http://localhost:7070/login/user',{headers:headers}).subscribe(response=>{
      this.responseAll = response;
      if(this.responseAll['username']){
        this.authenticated=true;

      for(let i=0;i<this.responseAll['roles'].length;i++){
        if(this.responseAll['roles'][i]['idRole'] == 1){
          this.isAdmin = true;
        }
        if(this.responseAll['roles'][i]['idRole'] == 2){
          this.isClient = true;
        }
        if(this.responseAll['roles'][i]['idRole'] == 3){
          this.isResp = true;
        }
        if(this.responseAll['roles'][i]['idRole'] == 4){
          this.isChauffeur = true;
        }
      }
      }else{
        this.authenticated=false;
      }
      return callback && callback();
    })
  }
}
