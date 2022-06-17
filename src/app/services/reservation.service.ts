import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseURL = "http://localhost:7070/reservations";


  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id)
  }


  public save(reservation:any):Observable<any>{
    return this.httpClient.post(this.baseURL, reservation);
  }

  public findByDateDebut(dateDebut:Date):Observable<any>{
    return this.httpClient.get(this.baseURL+"/dateDebut/"+dateDebut);
  }
}
