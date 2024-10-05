import { Component } from '@angular/core';
import { AeDatosPersonalesCandidatoComponent } from '../datos-personales-candidato/ae-datos-personales-candidato/ae-datos-personales-candidato.component';
import {
    DynamicDialogRef,
    DialogService,
    DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { HelpersService } from 'src/app/helpers.service';
import Swal from 'sweetalert2';
import { CandidatoService } from '../../onlineclasses/service/candidato.service';
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-reporte-datos-personal',
    templateUrl: './reporte-datos-personal.component.html',
    styleUrls: ['./reporte-datos-personal.component.scss'],
})
export class ReporteDatosPersonalComponent {
    loading: boolean = false;
    candidatoList: any[] = [];
    originalCandidatoList: any[] = [];
    ref: DynamicDialogRef | undefined;
    domain_id!: number;
    candidato_id: any;
    ciudad_id: any;

    estadoOptions: any[] = [
        { label: 'Todos', value: null }, // 'null' para "Todos"
        { label: 'Aprobado', value: 'aprobado' },
        { label: 'Desaprobado', value: 'desaprobado' },
        { label: 'Observado', value: 'observado' },
        { label: 'En Evaluación', value: 'en_evaluacion' },
    ];

    selectedEstado: any = null;

    constructor(
        private dialogService: DialogService,
        public helpersService: HelpersService,
        private candidatoService: CandidatoService,
        public config: DynamicDialogConfig
    ) {}

    ngOnInit(): void {
        this.domain_id = this.helpersService.getDominioId();
        this.candidato_id = this.helpersService.getCandidatoId();

        this.selectedEstado = null;
        this.listarPostulantesSegunRol();
    }

    listarPostulantesSegunRol() {
        this.loading = true;

        this.candidatoService.getCandidatos(this.domain_id).subscribe(
            (response: any) => {
                console.log('Candidatos obtenidos por dominio:', response);
                this.candidatoList = response; // Directamente asigna la respuesta
                this.originalCandidatoList = [...this.candidatoList]; // Copia para filtros
                this.loading = false;
            },
            (error: any) => {
                console.error(
                    'Error al obtener los candidatos por dominio:',
                    error
                );
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
                return estado || 'Sin Estado';
        }
    }

    navigateAddPostulante() {
        this.ref = this.dialogService.open(
            AeDatosPersonalesCandidatoComponent,
            {
                width: '90%',
                styleClass: 'custom-dialog-header',
                data: { acciones: 'add', ciudad_id: this.ciudad_id },
            }
        );
        this.ref.onClose.subscribe(() => {
            this.listarPostulantesSegunRol();
        });
    }

    navigateToDetalle(data: any) {
        this.ref = this.dialogService.open(
            AeDatosPersonalesCandidatoComponent,
            {
                width: '90%',
                styleClass: 'custom-dialog-header',
                data: { acciones: 'ver', data: data },
            }
        );
    }

    navigateToEdit(data: any) {
        this.ref = this.dialogService.open(
            AeDatosPersonalesCandidatoComponent,
            {
                width: '90%',
                styleClass: 'custom-dialog-header',
                data: {
                    acciones: 'actualizar',
                    data: data,
                    postulanteId: data.id,
                    ciudad_id: this.ciudad_id,
                },
            }
        );
        this.ref.onClose.subscribe(() => {
            this.listarPostulantesSegunRol();
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
                this.candidatoService.eliminarCandidato(id).subscribe(
                    () => {
                        Swal.fire(
                            'Eliminado',
                            'El registro ha sido eliminado.',
                            'success'
                        );
                        // Remover el candidato de la lista localmente antes de recargar
                        this.candidatoList = this.candidatoList.filter(
                            (candidato) => candidato.id !== id
                        );
                        // Llamar a listarPostulantesSegunRol para obtener la lista actualizada
                        this.listarPostulantesSegunRol();
                    },
                    (error: any) => {
                        Swal.fire(
                            'Error',
                            'Hubo un problema al eliminar el registro.',
                            'error'
                        );
                    }
                );
            }
        });
    }

    onGlobalFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
        if (!filterValue) {
            this.candidatoList = [...this.originalCandidatoList];
            return;
        }
    
        this.candidatoList = this.originalCandidatoList.filter((postulante) =>
            postulante.identification_number?.toLowerCase().includes(filterValue) ||
            postulante.nombre?.toLowerCase().includes(filterValue) ||
            postulante.apaterno?.toLowerCase().includes(filterValue) ||
            postulante.amaterno?.toLowerCase().includes(filterValue)
        );
    }
    

    onEstadoFilter(event: any) {
        const estadoSeleccionado = event.value;
        this.candidatoList = this.originalCandidatoList.filter((postulante) => {
            // Si no se seleccionó un estado, retornar todos
            if (!estadoSeleccionado) {
                return true; // Retorna todos los candidatos
            }
            return postulante.estado_actual === estadoSeleccionado;
        });
    }
    exportarAExcel() {
        // Crear un array con las cabeceras que deseas
        const headers = [
            'DNI',
            'A. Paterno',
            'A. Materno',
            'Nombres',
            'DISTRITO',
            'PROVINCIA',
            'REGIÓN',
            'Estado',
            '% AV',
            'Celular',
        ];
    
        // Crear un array con los datos formateados
        const data = this.candidatoList.map(postulante => ({
            'DNI': postulante.identification_number || "Sin documento",
            'A. Paterno': postulante.apaterno || "Sin apellido paterno",
            'A. Materno': postulante.amaterno || "Sin apellido materno",
            'Nombres': postulante.nombre || "Sin nombre",
            'DISTRITO': postulante?.distrito?.name || "Sin distrito",
            'PROVINCIA': postulante?.distrito?.province?.name || "Sin provincia",
            'REGIÓN': postulante?.distrito?.department?.name || "Sin región",
            'Estado': this.formatEstado(postulante.estado_actual),
            '% AV': postulante.education_degree_id || "Sin % de Avance",
            'Celular': postulante.phone || "Sin teléfono",
        }));
    
        // Crear un nuevo libro de Excel
        const worksheet = XLSX.utils.json_to_sheet(data, { header: headers });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Candidatos');
    
        // Exportar el archivo
        XLSX.writeFile(workbook, 'candidatos.xlsx');
    }
    
    
    
}
