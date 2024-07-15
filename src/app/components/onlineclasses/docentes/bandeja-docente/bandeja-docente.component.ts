import { Component, ElementRef, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { GeneralService } from '../../service/general.service';
import { Router } from '@angular/router';
import { RegDocenteComponent } from '../dialog/reg-docente/reg-docente.component';

@Component({
  selector: 'app-bandeja-docente',
  templateUrl: './bandeja-docente.component.html',
  styleUrls: ['./bandeja-docente.component.scss']
})
export class BandejaDocenteComponent {


  @ViewChild('filter') filter!: ElementRef;
  @ViewChild('dt1') tabledt1: Table | undefined;
  instituciones: any[] = [];
  loading: boolean = false;

  ref: DynamicDialogRef | undefined;
  constructor(
    private dialogService: DialogService,
    private maestroService: GeneralService,
    private router: Router,
 
  
  ) { }

  ngOnInit() {
   



    console.log("Datos-extraidos-de-bandeja-colegiado-PARA MIEMBRO");
    this.cargaInicial();
   

    
  }

  cargaInicial(): void {
   
  }

  navigateToNuevo() {
    this.ref = this.dialogService.open(RegDocenteComponent, {  
      width: '60%',
      styleClass: 'custom-dialog-header'
    });

    this.ref.onClose.subscribe((data: any) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal(
      (event.target as HTMLInputElement).value,
      'contains'
    )
  }

  onRowSelect(event: any) {
    
    console.log("Organo-colegaido-sect");
  }

  onRowUnselect(event: any) {
    
    
  }

}
