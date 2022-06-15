import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrajetService {
  private baseURL = "http://localhost:7070/trajets";


  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id)
  }


  public save(trajet:any):Observable<any>{
    return this.httpClient.post(this.baseURL, trajet);
  }
}
