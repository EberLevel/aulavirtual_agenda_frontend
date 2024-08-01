import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { environment } from 'src/app/environment/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/components/onlineclasses/service/login.service';

interface tiporol {
	name: string;
	value: number;
	code: string;
}

@Component({
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

	rememberMe: boolean = false;
	tiporoles!: tiporol[];
	rol: tiporol | undefined;
	email: string = '';
	password: string = '';

	constructor(private layoutService: LayoutService,
		private router: Router,
		private loginService: LoginService,
	) { }



	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}

	ngOnInit() {

		this.tiporoles = [
			{ name: 'Alumno', value: 1, code: 'NY' },
			{ name: 'Administrador', value: 2, code: 'RM' },
			{ name: 'Docente', value: 3, code: 'LDN' },

		];
		if (this.checkUserIsLogged()) {
			this.router.navigate(['/pl-virtual']);
		}


	}
	checkUserIsLogged() {
		if (localStorage.getItem('user')) {
			return true;
		}
		return false;
	}

	irAlLogin() {
		if (this.email.trim() && this.password.trim()) {
			const formData = new FormData();
			formData.append('email', this.email);
			formData.append('password', this.password);
			this.loginService.loginUser(formData).subscribe((response: any) => {
				try {
					if (response.status === 200) {
						const user = response.user;
						if (!localStorage.getItem('user')) {
							localStorage.setItem('user', JSON.stringify(user));
						} else {
							localStorage.removeItem('user');
							localStorage.setItem('user', JSON.stringify(user));
						}
						Swal.fire({
							title: '¡Éxito!',
							text: 'Datos correctos',
							icon: 'success',
							confirmButtonText: 'Aceptar',
						}).then(() => {
						});
						this.router.navigate(['/pl-virtual']);

					} else {
						Swal.fire({
							title: '¡Error!',
							text: 'Revisa los datos ingresados',
							icon: 'error',
							confirmButtonText: 'Aceptar',
						});
					}
				} catch (e) {
					Swal.fire({
						title: '¡Error!',
						text: 'Revisa los datos ingresados',
						icon: 'error',
						confirmButtonText: 'Aceptar',
					});
				}
			})

		} else {
			Swal.fire({
				title: '¡Error!',
				text: 'Revisa los datos ingresados',
				icon: 'error',
				confirmButtonText: 'Aceptar',
			});
		}
	}

}
