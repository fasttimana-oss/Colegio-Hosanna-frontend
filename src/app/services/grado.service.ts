import { Injectable } from '@angular/core';
import { Nivel } from './nivel.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





export  interface Grado {
  id?: Number;
  nombre : string;
  nivel: {
    id: number; // 👈 solo pedimos el id
  };
}



@Injectable({
  providedIn: 'root'
})
export class GradoService {

private  apiUrl = 'http://localhost:3000/grados'; // URL de tu NestJS

  constructor(private  http: HttpClient) { }



  createGrado(grado:Grado):Observable<Grado>{
    return this.http.post<Grado>(this.apiUrl,grado);
  }


  getgrados():Observable<Grado[]>{
    return this.http.get<Grado[]>(this.apiUrl);
  }

  getgradoId(id:number):Observable<Grado>{
    return this.http.get<Grado>(`${this.apiUrl}/${id}`);
  }

  updateGraodoId(id:number,grado:Grado):Observable<Grado>{
    return this.http.patch<Grado>(`${this.apiUrl}/${id}`, grado);
  }

  deleteGradoId(id:Number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  } 



}

