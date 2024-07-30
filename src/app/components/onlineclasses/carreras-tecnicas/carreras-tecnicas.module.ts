import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ToastModule } from 'primeng/toast'
import { FormsModule } from '@angular/forms'
import { TableModule } from 'primeng/table'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { ToggleButtonModule } from 'primeng/togglebutton'
import { RippleModule } from 'primeng/ripple'
import { MultiSelectModule } from 'primeng/multiselect'
import { DropdownModule } from 'primeng/dropdown'
import { PanelModule } from 'primeng/panel'
import { CalendarModule } from 'primeng/calendar'
import { ProgressBarModule } from 'primeng/progressbar'
import { SliderModule } from 'primeng/slider'
import { RatingModule } from 'primeng/rating'
import { FileUploadModule } from 'primeng/fileupload'
import { ConfirmationService, MessageService } from 'primeng/api'
import { ConfirmPopupModule } from 'primeng/confirmpopup'
import es from '@angular/common/locales/es'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { TooltipModule } from 'primeng/tooltip'
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { EditorModule } from 'primeng/editor';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { AppComponent } from 'src/app/app.component';
import { TranslateModule } from '@ngx-translate/core';


import { CarrerasTecnicasRoutingModule } from './carreras-tecnicas-routing.module';
import { BandejaCarreratecnicaComponent } from './bandeja-carreratecnica/bandeja-carreratecnica.component';
import { RegCarrerastecnicasComponent } from './dialog/reg-carrerastecnicas/reg-carrerastecnicas.component';
import { TableSelectCursosComponent } from '../utils/table-select-cursos/table-select-cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarCarreraTecnicaComponent } from './dialog/editar-carrera-tecnica/editar-carrera-tecnica.component';
import { VerCarreraTecnicaComponent } from './dialog/ver-carrera-tecnica/ver-carrera-tecnica.component';
import { VerCursoDeCarreraComponent } from './dialog/ver-curso-de-carrera/ver-curso-de-carrera.component';
import {SeleccionarHorarioCarreraTecnicaComponent} from './dialog/horario-carrera-tecnica/seleccionar-horario-carrera-tecnica.component';
import { SeleccionarAlumnosCursoComponent } from './dialog/seleccionar-alumnos-curso/seleccionar-alumnos-curso.component';
import { MarcarAsistenciaCursoComponent } from './dialog/marcar-asistencia-curso/marcar-asistencia-curso.component'

@NgModule({
  declarations: [
    BandejaCarreratecnicaComponent, RegCarrerastecnicasComponent, TableSelectCursosComponent, EditarCarreraTecnicaComponent, VerCarreraTecnicaComponent, VerCursoDeCarreraComponent,
    SeleccionarHorarioCarreraTecnicaComponent,
    SeleccionarAlumnosCursoComponent,
    MarcarAsistenciaCursoComponent
  ],
  imports: [
    CommonModule,
    CarrerasTecnicasRoutingModule,
    FormsModule,     
    CalendarModule,
    TableModule,
    RatingModule,
    ButtonModule,
    SliderModule,
    InputTextModule,
    InputTextareaModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    DropdownModule,
    PanelModule,
    ProgressBarModule,
    ToastModule,
    ConfirmPopupModule,
    FileUploadModule,
    TooltipModule,
    ToastModule,
    PanelModule,
    TableModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    FileUploadModule,
    EditorModule,
    DialogModule,    
    DynamicDialogModule,      
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class CarrerasTecnicasModule { }
