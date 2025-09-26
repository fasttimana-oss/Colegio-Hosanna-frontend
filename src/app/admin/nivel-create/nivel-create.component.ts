import { Component } from '@angular/core';
import { NivelService } from '../../services/nivel.service';

@Component({
  selector: 'app-nivel-create',
  standalone: false,
  templateUrl: './nivel-create.component.html',
  styleUrl: './nivel-create.component.css'
})
export class NivelCreateComponent {


  nivel={
    nombre:'',
  }


  constructor(private nivelService:NivelService){}

  crearNivel(){
    this.nivelService.createNivel(this.nivel).subscribe({
      next:(res)=>{
        console.log("nivel creado", res);
        alert("nivel creado con éxito");

        this.nivel={
          nombre:'',
        };
       },
       error:(err)=>{
        console.error('Error al crear nivel', err);
        alert("error al crear nivel");
       }
    })
  }
  


}
