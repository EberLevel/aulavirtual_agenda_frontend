import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { HelpersService } from 'src/app/helpers.service';
import Swal from 'sweetalert2';
import { CiudadService } from '../../service/ciudad.service';

@Component({
    selector: 'app-ae-city-form',
    templateUrl: './ae-city-form.component.html',
    styleUrls: ['./ae-city-form.component.scss']
})
export class AeCityFormComponent {
    ciudadForm: FormGroup;
    acciones: any;
    ciudadId: number | undefined; // Nueva variable para almacenar el ID de la ciudad
    estadoOptions = [
        { label: 'Activo', value: 'activo' },
        { label: 'Inactivo', value: 'inactivo' },
    ];

    constructor(
        private fb: FormBuilder,
        private ref: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private ciudadService: CiudadService,
        private helpersService: HelpersService
    ) {
        this.acciones = this.config.data.acciones;

        this.ciudadForm = this.fb.group({
            codigo: ['', Validators.required],
            nombre: ['', Validators.required],
            estado: ['', Validators.required],
            observaciones: [''],
        });
    }

    ngOnInit(): void {
        if (this.acciones === 'actualizar') {
            const data = this.config.data.ciudad;
            this.ciudadId = data.id; // Asignar el ID de la ciudad
            this.ciudadForm.patchValue({
                ...data,
            });
        }
    }

    guardarCiudad() {
        if (this.ciudadForm.valid) {
            const domain_id = this.helpersService.getDominioId();
            const ciudad = {
                ...this.ciudadForm.value,
                domain_id: domain_id,
                id: this.ciudadId // Incluir el ID de la ciudad si está presente
            };

            if (this.acciones === 'actualizar') {
                this.ciudadService.actualizarCiudad(ciudad).subscribe(
                    () => {
                        this.ref?.close();
                        Swal.fire({
                            title: '¡Éxito!',
                            text: 'Ciudad actualizada correctamente',
                            icon: 'success',
                            confirmButtonText: 'Aceptar',
                        });
                    },
                    (error: any) => {
                        console.error('Error al actualizar la ciudad', error);
                    }
                );
            } else {
                this.ciudadService.guardarCiudad(ciudad).subscribe(
                    () => {
                        this.ref?.close();
                        Swal.fire({
                            title: '¡Éxito!',
                            text: 'Ciudad creada correctamente',
                            icon: 'success',
                            confirmButtonText: 'Aceptar',
                        });
                    },
                    (error: any) => {
                        console.error('Error al guardar la ciudad', error);
                    }
                );
            }
        } else {
            console.error('Formulario inválido');
        }
    }

    closeModal(event: Event) {
        event.preventDefault();
        this.ref?.close();
    }
}
