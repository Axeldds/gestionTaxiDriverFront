import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chauffeur } from 'app/modules/chauffeur';
import { data } from 'jquery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {
  private baseURL = "http://localhost:7070/chauffeurs";
  d


  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id)
  }

  public save(chauffeur:any) : Observable<any>{
    return this.httpClient.post(this.baseURL, chauffeur);
  }

  public update(id:number): Observable<any>{
    data;
    return this.httpClient.patch(this.baseURL+"/"+id, data);
  }
}
