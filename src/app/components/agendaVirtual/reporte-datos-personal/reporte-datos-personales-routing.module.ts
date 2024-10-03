import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteDatosPersonalComponent } from './reporte-datos-personal.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [
      { path: '', component: ReporteDatosPersonalComponent }
  ]
  )],
  exports: [RouterModule]
})
export class ReporteDatosPersonalesRoutingModule { }
