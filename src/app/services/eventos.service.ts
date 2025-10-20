import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Evento{
  id?: number;
  nombre: string;
  descripcion: string;
  img: string;
  fecha: string;
  publicado : boolean;

}

@Injectable({
  providedIn: 'root'
})
export class EventosService {
   
   private apiUrl = 'http://localhost:3000/eventos'; // URL de tu NestJS




  constructor(private http:HttpClient) {

   }

  //crear eventos

  createEvento(evento:Evento):Observable<Evento>{
    return this.http.post<Evento>(this.apiUrl,evento);
  }

  //listar eventos
  
  liseventos():Observable<Evento[]>{
    return this.http.get<Evento[]>(this.apiUrl);
  }

  //buscar eventos por id
  
  getEventoid(id:number):Observable<Evento>{
    return this.http.get<Evento>(`${this.apiUrl}/${id}`);
 
 }
 // update eventos
 updateEventoid(id:number,evento:Evento):Observable<Evento>{
     return this.http.patch<Evento>(`${this.apiUrl}/${id}`, evento);
 }

 //eliminar eventos
 deleteEventoid(id:number):Observable<void>{
     return this.http.delete<void>(`${this.apiUrl}/${id}`);
 }

 //estado de  eventos 
 updateEvento(id:number, data:Partial<Evento>){
  return  this.http.patch(`${this.apiUrl}/${id}`, data);
  
 }


 

  



}
  




