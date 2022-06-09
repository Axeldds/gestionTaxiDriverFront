import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private baseURL = "http://localhost:7070/utilisateurs"
  constructor(private HttpClient:HttpClient) { }

  public findAll(): Observable<any>{
    return this.HttpClient.get(this.baseURL);
  }

  public delete(id:number):Observable<any>{
    return this.HttpClient.delete(this.baseURL+"/"+id)
  }

  public save(utilisateur:any) : Observable<any>{
    return this.HttpClient.post(this.baseURL, utilisateur);
  }
}
