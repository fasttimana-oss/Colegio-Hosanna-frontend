import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interface } from 'readline';
import { Observable } from 'rxjs';


export interface Persona{
  id?: number;
  nombre: string;
  apellido: string;
  tipo: string;
  dni: string;
  usuario: string;
  password: string;

}

@Injectable({

  providedIn: 'root'
})
export class PersonaService {

  private apiUrl = 'http://localhost:3000/persona'; // URL de tu NestJS

  constructor(private  http: HttpClient) { }




//listar usuarios 
getPersonas():Observable<Persona[]>{
  return this.http.get<Persona[]>(this.apiUrl);
}


//editar usuario

updatePersona(id:number,persona:Persona):Observable<Persona>{
    return this.http.patch<Persona>(`${this.apiUrl}/${id}`, persona);
}

//listar usuarios por id 

gerPersonaid(id:number):Observable<Persona>{
   return this.http.get<Persona>(`${this.apiUrl}/${id}`);

}

//eliminar usuario

deletePersona(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);

}


}
