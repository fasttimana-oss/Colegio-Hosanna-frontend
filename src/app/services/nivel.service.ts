import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



export interface Nivel{
  id?: number;
  nombre: string;
}
@Injectable({
  providedIn: 'root'
})
export class NivelService {


  private  apiUrl = 'http://localhost:3000/nivel'; // URL de tu NestJS

  constructor(private  http: HttpClient) {}



  //crear un nivel


  createNivel(nivel:Nivel):Observable<Nivel>{
    return this.http.post<Nivel>(this.apiUrl,nivel);
  }


  //listar niveles

  getNiveles():Observable<Nivel[]>{
    return this.http.get<Nivel[]>(this.apiUrl);
  }

 //editar nivel 
 
 updateNivelid(id:number,nivel:Nivel):Observable<Nivel>{
   return this.http.patch<Nivel>(`${this.apiUrl}/${id}`, nivel);
 }


 //buscar nivel por id

 getNivelid(id:number):Observable<Nivel>{
    return this.http.get<Nivel>(`${this.apiUrl}/${id}`);

 }


 //eleminar nivel 

 deleteNivelid(id:number):Observable<void>{
     return this.http.delete<void>(`${this.apiUrl}/${id}`);
 }

}
