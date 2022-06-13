import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  private baseUrl="http://localhost:7070/aviss"

  constructor(private httpClient:HttpClient) { }

  public findAll(): Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }

  public save(avis:any):Observable<any>{
    return this.httpClient.post(this.baseUrl, avis);
  }
  public findByNote(note:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+"/note/"+note);
  }
}
