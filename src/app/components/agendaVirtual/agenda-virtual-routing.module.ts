import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                data: { breadcrumd: 'Inicio' },
                loadChildren: () =>
                    import(
                        'src/app/demo/components/dashboards/ecommerce/ecommerce.dashboard.module'
                    ).then((m) => m.EcommerceDashboardModule),
            },
        ]),
    ],

    exports: [RouterModule],
})
export class AgendaVirtualRoutingModule { }
