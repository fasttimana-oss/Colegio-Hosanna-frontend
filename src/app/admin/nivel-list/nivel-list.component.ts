import { Component } from '@angular/core';
import { NOMEM } from 'dns';
import { Nivel, NivelService } from '../../services/nivel.service';

@Component({
  selector: 'app-nivel-list',
  standalone: false,
  templateUrl: './nivel-list.component.html',
  styleUrl: './nivel-list.component.css'
})
export class NivelListComponent {

  
  niveles:Nivel[]=[];
  nivelseleccionado:Nivel| null=null;

  constructor( private nivelservice:NivelService){}

  ngOnInit():void{
    this.cargarNiveles();

  }

  cargarNiveles():void{
    this.nivelservice.getNiveles().subscribe({
      next:(data) => this.niveles=data,
      error:(err) => console.error('Error cargando niveles', err)
   });
  }

  editarNivel(nivel:Nivel):void{
    this.nivelseleccionado = {...nivel};
  }

guardarCambios():void{
  if(!this.nivelseleccionado?.id) return;

    this.nivelservice.updateNivelid(this.nivelseleccionado.id,this.nivelseleccionado)
      .subscribe({
        next:()=>{
          alert('Nivel actualizado con éxito');
          this.nivelseleccionado=null;
          this.cargarNiveles();
        },
        error:(err)=>{
          console.error('Error al actualizar', err);
          alert('No se pudo actualizar');
        }
      });
}

eliminarNivel(id:number):void{
  this.nivelservice.deleteNivelid(id).subscribe({
    next:()=>{
      alert('Nivel eliminado');
      this.cargarNiveles();
    },
    error:(err)=>console.error('Error al eliminar', err)
  });
}



}
