import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Nivel, NivelService } from '../../services/nivel.service';
import { GradoService } from '../../services/grado.service';

@Component({
  selector: 'app-grado-create',
  standalone: false,
  templateUrl: './grado-create.component.html',
  styleUrls: ['./grado-create.component.css'] // ✅ también corregido (styleUrls)
})
export class GradoCreateComponent implements OnInit {

  formGrado!: FormGroup;
  niveles: Nivel[] = [];
  mensajeExito: string = ''; // 👈 variable para mostrar mensaje

  constructor(
    private fb: FormBuilder,
    private nivelService: NivelService,
    private gradoService: GradoService
  ) {}

  ngOnInit(): void {
    this.formGrado = this.fb.group({
      nombre: ['', Validators.required],
      nivelId: ['', Validators.required]
    });

    this.nivelService.getNiveles().subscribe((data) => {
      this.niveles = data;
    });
  }

  crearGrado() {
    if (this.formGrado.valid) {
      const grado = {
        nombre: this.formGrado.value.nombre,
        nivel: { id: this.formGrado.value.nivelId } // ✅ corregido
      };

      this.gradoService.createGrado(grado).subscribe({
        next: (res) => {
          console.log('Grado creado:', res);
          this.mensajeExito = '✅ Grado creado correctamente';
          this.formGrado.reset();

          // 👇 Limpia el mensaje después de 3 segundos
          setTimeout(() => {
            this.mensajeExito = '';
          }, 3000);
        },
        error: (err) => {
          console.error('Error al crear grado:', err);
        }
      });
    }
  }
}
