import { Component, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import Swal from 'sweetalert2';
import { AeCityFormComponent } from './ae-city-form/ae-city-form.component';
import { HelpersService } from 'src/app/helpers.service';
import { CiudadService } from '../service/ciudad.service';
import { DatosPersonalesCandidatoComponent } from '../../agendaVirtual/datos-personales-candidato/datos-personales-candidato.component';
import { CandidatoService } from '../service/candidato.service';

interface City {
    code: string;
    name: string;
    status: string;
    observations: string;
}

@Component({
    selector: 'app-city-list',
    templateUrl: './city-list.component.html',
    styleUrls: ['./city-list.component.scss']
})
export class CityListComponent {
    @ViewChild('dt1') dt1: any;
    loading: boolean = false;
    ciudadesList: any[] = [];
    ref: DynamicDialogRef | undefined;
    domain_id: any;
    filteredCities: any[] = [];
    rol_id: any;
    cantidadCandidatos: any;

    estadoOptions: any[] = [
        { label: 'Todos', value: null }, // Null para "Todos"
        { label: 'Aprobado', value: 'aprobado' },
        { label: 'Desaprobado', value: 'desaprobado' },
        { label: 'Observado', value: 'observado' },
        { label: 'En Evaluación', value: 'en_evaluacion' },
    ];

    selectedEstado: any = null;

    constructor(
        private dialogService: DialogService,
        private ciudadService: CiudadService,
        private helpersService: HelpersService,
        private candidatoService: CandidatoService
    ) {}

    ngOnInit(): void {
        this.rol_id = this.helpersService.getRolId();
        console.log("rol_id",this.rol_id)
        this.domain_id = this.helpersService.getDominioId();
        this.listarCiudades();
    }

    listarCiudades() {
        this.loading = true;
        this.ciudadService.getCiudadesByDomain(this.domain_id).subscribe(
            (response: any) => {
                this.ciudadesList = response;
                this.filteredCities = [...this.ciudadesList];
    
                // Llamada adicional para obtener la cantidad de candidatos por ciudad
                this.ciudadesList.forEach(ciudad => {
                    this.candidatoService.getCandidatosCountByCiudad(ciudad.id).subscribe(
                        (cantidadResponse: any) => {
                            console.log('Cantidad de candidatos para la ciudad:', cantidadResponse);
                            ciudad.cantidadCandidatos = cantidadResponse.cantidadCandidatos; // Asigna la cantidad a ciudad
                        },
                        (error) => {
                            console.error('Error al obtener la cantidad de candidatos por ciudad:', error);
                            ciudad.cantidadCandidatos = 0; // Asignar 0 si hay un error
                        }
                    );
                });
    
                this.loading = false;
    
                // Restablece el paginador
                if (this.dt1) {
                    this.dt1.reset();
                }
            },
            (error) => {
                console.error('Error al obtener las ciudades:', error);
                this.loading = false;
            }
        );
    }
    
     
    
// En tu archivo .ts del componente
formatEstado(estado: string): string {
    switch (estado) {
        case 'aprobado':
            return 'Aprobado';
        case 'observado':
            return 'Observado';
        case 'desaprobado':
            return 'Desaprobado';
        case 'en_evaluacion':
            return 'En Evaluación';
        default:
            return estado;
    }
}

    navigateAdd() {
        this.ref = this.dialogService.open(AeCityFormComponent, {
            width: '90%',
            styleClass: 'custom-dialog-header',
            data: { acciones: 'add' },
        });
        this.ref.onClose.subscribe(() => {
            this.listarCiudades();
        });
    }

    navigateToEdit(ciudad: any) {
        this.ref = this.dialogService.open(AeCityFormComponent, {
            width: '90%',
            styleClass: 'custom-dialog-header',
            data: { acciones: 'actualizar', ciudad: ciudad },
        });
        this.ref.onClose.subscribe(() => {
            this.listarCiudades();
        });
    }

    navigateToDelete(id: number) {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'No podrás revertir esto',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo',
        }).then((result) => {
            if (result.isConfirmed) {
                this.ciudadService.eliminarCiudad(id).subscribe(
                    () => {
                        Swal.fire('Eliminado', 'El registro ha sido eliminado.', 'success');
                        this.listarCiudades();
                    },
                    (error: any) => {
                        Swal.fire('Error', 'Hubo un problema al eliminar el registro.', 'error');
                    }
                );
            }
        });
    }

    navigateToOpenEgresados(ciudad: any) {
        this.ref = this.dialogService.open(DatosPersonalesCandidatoComponent, {
            width: '90%',
            styleClass: 'custom-dialog-header',
            data: { acciones: 'abrir', ciudad: ciudad }, // Pasa la ciudad seleccionada
        });
        this.ref.onClose.subscribe(() => {
            this.listarCiudades();
        });
    }

    onGlobalFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
        if (!filterValue) {
            this.filteredCities = [...this.ciudadesList]; // Restablece la lista filtrada a la lista original
        } else {
            this.filteredCities = this.ciudadesList.filter(
                (ciudad) =>
                    ciudad.nombre.toLowerCase().includes(filterValue) ||
                    ciudad.codigo.toLowerCase().includes(filterValue)
            );
        }

        // Restablece el paginador
        if (this.dt1) {
            this.dt1.reset();
        }
    }
    
    onEstadoFilter(event: any) {
        const estadoSeleccionado = event.value;

        if (!estadoSeleccionado) {
            // Si no se seleccionó un estado, mostrar todas las ciudades
            this.filteredCities = [...this.ciudadesList];
        } else {
            // Filtrar las ciudades según el estado seleccionado
            this.filteredCities = this.ciudadesList.filter(ciudad => ciudad.estado === estadoSeleccionado);
        }

        // Restablece el paginador
        if (this.dt1) {
            this.dt1.reset();
        }
    }
}
