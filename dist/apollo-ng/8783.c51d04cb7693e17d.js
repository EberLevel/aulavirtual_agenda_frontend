"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[8783],{8783:(Rt,T,i)=>{i.r(T),i.d(T,{CarrerasTecnicasModule:()=>Xt});var j=i(177),F=i(9998),l=i(9417),C=i(9280),u=i(1141),_=i(2242),N=i(3973),S=i(563),G=i(6296),E=i(8150),p=i(5473),I=i(612),X=i(1579),R=i(9266),P=i(4714),k=i(320),y=i(7835),$=i(1305),V=i(8542),L=i(4799),x=i(1142),M=i(6781),d=i(2100),U=i(9664),v=i(8763),t=i(7019),B=i(6271),h=i(4960),A=i(8032),m=i.n(A),f=i(3088),b=i(8774),g=i(5779);function O(r,s){1&r&&(t.j41(0,"span",2),t.EFF(1,"Editar Carrera T\xe9cnica"),t.k0s())}function J(r,s){if(1&r){const e=t.RV6();t.j41(0,"form",3),t.bIt("ngSubmit",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.editarParametro())}),t.j41(1,"div",4)(2,"div",5)(3,"div",6)(4,"span",7),t.nrm(5,"input",8),t.j41(6,"label",9),t.EFF(7,"C\xf3digo"),t.k0s()()(),t.j41(8,"div",6)(9,"span",7),t.nrm(10,"input",10),t.j41(11,"label",9),t.EFF(12,"Nombre de Carrera"),t.k0s()()(),t.j41(13,"div",6)(14,"span",7),t.nrm(15,"p-dropdown",11),t.j41(16,"label",9),t.EFF(17,"Plan de Estudios"),t.k0s()()()()(),t.j41(18,"div",4)(19,"div",12)(20,"div",13),t.nrm(21,"button",14),t.j41(22,"button",15),t.bIt("click",function(n){t.eBV(e);const a=t.XpG();return t.Njj(a.closeModal(n))}),t.k0s()()()()()}if(2&r){const e=t.XpG();t.Y8G("formGroup",e.parametroForm),t.R7$(15),t.Y8G("options",e.estadosList)}}let H=(()=>{class r{constructor(e,o,n,a,c){this.fb=e,this.ref=o,this.config=n,this.parametroService=a,this.helpersService=c,this.loading=!1,this.estadosList=[],this.domain_id=this.helpersService.getDominioId(),this.parametroForm=this.fb.group({codigo:[this.config.data.data.codigo,l.k0.required],nombres:[this.config.data.data.nombres,l.k0.required],domain_id:[this.domain_id],id:[this.config.data.data.id],plan_de_estudios_id:[this.config.data.data.plan_de_estudios_id,l.k0.required]})}ngOnInit(){this.listarPlanEstudio()}listarPlanEstudio(){return new Promise((e,o)=>{this.parametroService.getEstadoDeCurso().subscribe(n=>{console.log("Lista de Planes de Estudio:",n),this.estadosList=n.map(a=>({name:a.nombre,value:a.id})),e()},n=>o(n))})}editarParametro(){this.parametroForm.valid?(console.log("Formulario v\xe1lido",this.parametroForm.value),this.parametroService.editarCarreraTecnica(this.parametroForm.value).subscribe(e=>{this.ref?.close(),m().fire({title:"\xa1\xc9xito!",text:"Los Datos se registraron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{})},e=>{console.error("Error al editar el par\xe1metro",e)})):console.error("Formulario inv\xe1lido")}closeModal(e){e.preventDefault(),this.ref?.close()}static#t=this.\u0275fac=function(o){return new(o||r)(t.rXU(l.ok),t.rXU(d.Pw),t.rXU(d.sb),t.rXU(f.O),t.rXU(b.V))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-editar-carrera-tecnica"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"grid","p-fluid"],[1,"field","col-12","md:col-6"],[1,"p-float-label"],["type","text","pInputText","","formControlName","codigo"],[1,"required"],["type","text","pInputText","","formControlName","nombres"],["formControlName","plan_de_estudios_id","optionLabel","name","optionValue","value","placeholder","Selecciona un Plan de Estudios",3,"options"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","icon","pi pi-plus","label","Guardar","iconPos","right","type","submit",1,"p-button-success","p-button-sm"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"]],template:function(o,n){1&o&&(t.j41(0,"p-panel"),t.DNE(1,O,2,0,"ng-template",0),t.DNE(2,J,23,2,"ng-template",1),t.k0s())},dependencies:[g.Ei,l.qT,l.me,l.BC,l.cb,u._f,_.S,E.ms,p.Z,l.j4,l.JD]})}return r})();var D=i(9961);function z(r,s){1&r&&(t.j41(0,"span",2),t.EFF(1,"Ver Carrera T\xe9cnica"),t.k0s())}function Y(r,s){if(1&r){const e=t.RV6();t.j41(0,"form",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"span",7),t.nrm(5,"input",8),t.j41(6,"label",9),t.EFF(7,"C\xf3digo"),t.k0s()()(),t.j41(8,"div",6)(9,"span",7),t.nrm(10,"input",10),t.j41(11,"label",9),t.EFF(12,"Nombre de Carrera"),t.k0s()()()()(),t.j41(13,"div",4)(14,"div",11)(15,"div",12)(16,"button",13),t.bIt("click",function(n){t.eBV(e);const a=t.XpG();return t.Njj(a.closeModal(n))}),t.k0s()()()()()}if(2&r){const e=t.XpG();t.Y8G("formGroup",e.parametroForm),t.R7$(5),t.Y8G("disabled",!0),t.R7$(5),t.Y8G("disabled",!0)}}let Z=(()=>{class r{constructor(e,o,n){this.fb=e,this.ref=o,this.config=n,this.loading=!1,this.parametroDatos=new D.A7,this.parametro=new D.A7,this.mostrarCursos=!1,this.parametroForm=this.fb.group({codigo:[{value:this.config.data.data.codigo,disabled:!0},l.k0.required],nombres:[{value:this.config.data.data.nombres,disabled:!0},l.k0.required],domain_id:[{value:1,disabled:!0}],id:[{value:this.config.data.data.id,disabled:!0}]})}closeModal(e){e.preventDefault(),this.ref?.close()}static#t=this.\u0275fac=function(o){return new(o||r)(t.rXU(l.ok),t.rXU(d.Pw),t.rXU(d.sb))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-ver-carrera-tecnica"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[3,"formGroup"],[1,"row"],[1,"grid","p-fluid"],[1,"field","col-12","md:col-6"],[1,"p-float-label"],["type","text","pInputText","","formControlName","codigo",3,"disabled"],[1,"required"],["type","text","pInputText","","formControlName","nombres",3,"disabled"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"]],template:function(o,n){1&o&&(t.j41(0,"p-panel"),t.DNE(1,z,2,0,"ng-template",0),t.DNE(2,Y,17,3,"ng-template",1),t.k0s())},dependencies:[g.Ei,l.qT,l.me,l.BC,l.cb,u._f,_.S,p.Z,l.j4,l.JD]})}return r})();var Q=i(3157),K=i(9010),W=i(2362),q=i(3431),tt=i(7533);function et(r,s){1&r&&(t.j41(0,"span",2),t.EFF(1,"Visualizar Syllabus"),t.k0s())}function ot(r,s){}const rt=function(){return{height:"450px"}};function nt(r,s){if(1&r){const e=t.RV6();t.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-editor",6),t.bIt("ngModelChange",function(n){t.eBV(e);const a=t.XpG();return t.Njj(a.contenido=n)}),t.DNE(4,ot,0,0,"ng-template",0),t.k0s()()()(),t.j41(5,"div",7)(6,"div",8)(7,"div",9)(8,"button",10),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.closeModal())}),t.k0s()()()()}if(2&r){const e=t.XpG();t.R7$(3),t.Aen(t.lJ4(5,rt)),t.Y8G("ngModel",e.contenido)("readonly",!0)("modules",e.modules)}}let at=(()=>{class r{constructor(e,o,n,a){this.ref=e,this.parametroService=o,this.config=n,this.helperService=a,this.idCurso=0,this.contenido="",this.domain_id=1,this.subscriptions=[],this.curso={},this.modules={toolbar:!1}}ngOnInit(){this.idCurso=this.config.data.cursoId,Promise.all([this.obtenerSyllabus(this.idCurso)]).then(()=>{this.contenido=this.curso.syllabus})}obtenerSyllabus(e){return new Promise((o,n)=>{this.parametroService.getSyllabusByCurso(e).subscribe(a=>{console.log("Datos Curso",a.Datos),this.curso=a.Datos,o()},a=>n(a))})}closeModal(){this.ref.close({register:!1})}static#t=this.\u0275fac=function(o){return new(o||r)(t.rXU(d.Pw),t.rXU(f.O),t.rXU(d.sb),t.rXU(b.V))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-ver-syllabus"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mt-2"],[1,"grid","p-fluid"],[1,"field","col-12","md:col-12"],[3,"ngModel","readonly","modules","ngModelChange"],[1,"row"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"]],template:function(o,n){1&o&&(t.j41(0,"p-panel"),t.DNE(1,et,2,0,"ng-template",0),t.DNE(2,nt,9,6,"ng-template",1),t.k0s())},dependencies:[g.Ei,l.BC,l.vS,u._f,p.Z,x.KE]})}return r})();function it(r,s){1&r&&(t.j41(0,"span",2),t.EFF(1,"Visualizar Temas"),t.k0s())}function st(r,s){}const ct=function(){return{height:"450px"}};function lt(r,s){if(1&r){const e=t.RV6();t.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-editor",6),t.bIt("ngModelChange",function(n){t.eBV(e);const a=t.XpG();return t.Njj(a.contenido=n)}),t.DNE(4,st,0,0,"ng-template",0),t.k0s()()()(),t.j41(5,"div",7)(6,"div",8)(7,"div",9)(8,"button",10),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.closeModal())}),t.k0s()()()()}if(2&r){const e=t.XpG();t.R7$(3),t.Aen(t.lJ4(5,ct)),t.Y8G("ngModel",e.contenido)("readonly",!0)("modules",e.modules)}}let dt=(()=>{class r{constructor(e,o,n,a){this.ref=e,this.parametroService=o,this.config=n,this.helperService=a,this.idCurso=0,this.contenido="",this.domain_id=1,this.subscriptions=[],this.curso={},this.modules={toolbar:!1}}ngOnInit(){this.idCurso=this.config.data.cursoId,Promise.all([this.obtenerTema(this.idCurso)]).then(()=>{this.contenido=this.curso.tema})}obtenerTema(e){return new Promise((o,n)=>{this.parametroService.getTemaByCurso(e).subscribe(a=>{console.log("Datos Curso",a.Datos),this.curso=a.Datos,o()},a=>n(a))})}closeModal(){this.ref.close({register:!1})}static#t=this.\u0275fac=function(o){return new(o||r)(t.rXU(d.Pw),t.rXU(f.O),t.rXU(d.sb),t.rXU(b.V))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-ver-temas"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mt-2"],[1,"grid","p-fluid"],[1,"field","col-12","md:col-12"],[3,"ngModel","readonly","modules","ngModelChange"],[1,"row"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"]],template:function(o,n){1&o&&(t.j41(0,"p-panel"),t.DNE(1,it,2,0,"ng-template",0),t.DNE(2,lt,9,6,"ng-template",1),t.k0s())},dependencies:[g.Ei,l.BC,l.vS,u._f,p.Z,x.KE]})}return r})();const pt=["filter"],ut=["dt1"];function mt(r,s){1&r&&(t.j41(0,"span",2),t.EFF(1,"Bandeja de Unidad Didactica"),t.k0s())}function gt(r,s){if(1&r){const e=t.RV6();t.j41(0,"div",12)(1,"div",13)(2,"span",14)(3,"input",15,16),t.bIt("input",function(n){t.eBV(e);const a=t.XpG(2);return t.Njj(a.onGlobalFilter(n))}),t.k0s()()(),t.j41(5,"div",17)(6,"button",18),t.bIt("click",function(){t.eBV(e);const n=t.XpG(2);return t.Njj(n.navigateAddCurso())}),t.k0s()()()}}function _t(r,s){1&r&&(t.j41(0,"tr")(1,"th",19),t.EFF(2," C\xf3digo "),t.k0s(),t.j41(3,"th",19),t.EFF(4," Nombre de la Unidad Didactica "),t.k0s(),t.j41(5,"th",19),t.EFF(6," Acciones "),t.k0s(),t.j41(7,"th",19),t.EFF(8," Configuraci\xf3n "),t.k0s(),t.j41(9,"th",19),t.EFF(10," Promedio General "),t.k0s(),t.j41(11,"th",19),t.EFF(12," Cr\xe9ditos "),t.k0s(),t.j41(13,"th",19),t.EFF(14," % Cr\xe9ditos "),t.k0s(),t.j41(15,"th",19),t.EFF(16," Horas Te\xf3ricas "),t.k0s(),t.j41(17,"th",19),t.EFF(18," Horas Practicas "),t.k0s(),t.j41(19,"th",19),t.EFF(20," Total Horas "),t.k0s(),t.j41(21,"th",19),t.EFF(22," Ciclo "),t.k0s(),t.j41(23,"th",19),t.EFF(24," Carrera t\xe9cnica "),t.k0s(),t.j41(25,"th",19),t.EFF(26," M\xf3dulo "),t.k0s(),t.j41(27,"th",19),t.EFF(28," Competencia "),t.k0s()())}function ht(r,s){if(1&r){const e=t.RV6();t.j41(0,"button",31),t.bIt("click",function(){t.eBV(e);const n=t.XpG().$implicit,a=t.XpG(2);return t.Njj(a.verHorarios(n))}),t.EFF(1," Ho "),t.k0s()}}function ft(r,s){if(1&r){const e=t.RV6();t.j41(0,"button",32),t.bIt("click",function(){t.eBV(e);const n=t.XpG().$implicit,a=t.XpG(2);return t.Njj(a.verAsistencia(n))}),t.EFF(1," As "),t.k0s()}}function bt(r,s){if(1&r){const e=t.RV6();t.j41(0,"button",33),t.bIt("click",function(){t.eBV(e);const n=t.XpG().$implicit,a=t.XpG(2);return t.Njj(a.verEvaluaciones(n))}),t.EFF(1," Ev "),t.k0s()}}function Ct(r,s){if(1&r){const e=t.RV6();t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td")(6,"div",20)(7,"button",21),t.bIt("click",function(){const a=t.eBV(e).$implicit,c=t.XpG(2);return t.Njj(c.verSyllabus(a.id))}),t.EFF(8," Sy "),t.k0s(),t.j41(9,"button",22),t.bIt("click",function(){const a=t.eBV(e).$implicit,c=t.XpG(2);return t.Njj(c.verAlumnos(a))}),t.EFF(10," Al "),t.k0s(),t.DNE(11,ht,2,0,"button",23),t.DNE(12,ft,2,0,"button",24),t.j41(13,"button",25),t.bIt("click",function(){const a=t.eBV(e).$implicit,c=t.XpG(2);return t.Njj(c.verTemas(a.id))}),t.EFF(14," Te "),t.k0s(),t.DNE(15,bt,2,0,"button",26),t.k0s()(),t.j41(16,"td")(17,"button",27),t.bIt("click",function(){const a=t.eBV(e).$implicit,c=t.XpG(2);return t.Njj(c.navigateToDetalle(a))}),t.k0s(),t.j41(18,"button",28),t.bIt("click",function(){const a=t.eBV(e).$implicit,c=t.XpG(2);return t.Njj(c.navigateToEdit(a))}),t.k0s(),t.j41(19,"button",29),t.bIt("click",function(){const a=t.eBV(e).$implicit,c=t.XpG(2);return t.Njj(c.navigateToDelete(a.id))}),t.k0s(),t.j41(20,"button",30),t.bIt("click",function(){const a=t.eBV(e).$implicit,c=t.XpG(2);return t.Njj(c.navigateToDuplicar(a))}),t.k0s()(),t.j41(21,"td"),t.EFF(22),t.k0s(),t.j41(23,"td"),t.EFF(24),t.k0s(),t.j41(25,"td"),t.EFF(26),t.k0s(),t.j41(27,"td"),t.EFF(28),t.k0s(),t.j41(29,"td"),t.EFF(30),t.k0s(),t.j41(31,"td"),t.EFF(32),t.k0s(),t.j41(33,"td"),t.EFF(34),t.k0s(),t.j41(35,"td"),t.EFF(36),t.k0s(),t.j41(37,"td"),t.EFF(38),t.k0s(),t.j41(39,"td"),t.EFF(40),t.k0s()()}if(2&r){const e=s.$implicit,o=t.XpG(2);t.R7$(2),t.JRh(e.codigo),t.R7$(2),t.JRh(e.nombre),t.R7$(7),t.Y8G("ngIf",8!==o.rolId),t.R7$(1),t.Y8G("ngIf",8!==o.rolId),t.R7$(3),t.Y8G("ngIf",8!==o.rolId),t.R7$(7),t.JRh(e.promedio_general),t.R7$(2),t.JRh(e.cantidad_de_creditos),t.R7$(2),t.JRh(e.porcentaje_de_creditos),t.R7$(2),t.JRh(e.cantidad_de_horas),t.R7$(2),t.JRh(e.horas_practicas),t.R7$(2),t.JRh(e.totalHoras),t.R7$(2),t.JRh(e.ciclo_nombre),t.R7$(2),t.JRh(e.carrera_nombre),t.R7$(2),t.JRh(e.area_de_formacion_nombre),t.R7$(2),t.JRh(e.modulo_formativo_nombre)}}function vt(r,s){1&r&&(t.j41(0,"tr")(1,"td",34),t.EFF(2," No se encontraron registros "),t.k0s()())}function xt(r,s){1&r&&(t.j41(0,"tr")(1,"td",34),t.EFF(2," Cargando registros. Por favor espere. "),t.k0s()())}function Tt(r,s){if(1&r&&(t.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),t.DNE(5,gt,7,0,"ng-template",8),t.DNE(6,_t,29,0,"ng-template",0),t.DNE(7,Ct,41,15,"ng-template",9),t.DNE(8,vt,3,0,"ng-template",10),t.DNE(9,xt,3,0,"ng-template",11),t.k0s()()()()),2&r){const e=t.XpG();t.R7$(3),t.Y8G("value",e.carrerastecnicasList)("rows",10)("loading",e.loading)("rowHover",!0)("paginator",!0)}}let jt=(()=>{class r{constructor(e,o,n,a,c){this.dialogService=e,this.cursosService=o,this.router=n,this.config=a,this.helpersService=c,this.loading=!1,this.miembro=[],this.miembrosActualizados=new t.bkB,this.carrerastecnicasList=[],this.originalCarrerastecnicasList=[]}ngOnInit(){this.listarCursos(),this.rolId=this.helpersService.getRolId(),console.log("this.carrerastecnicasList",this.carrerastecnicasList)}listarCursos(){this.cursosService.getCursos(this.config.data.data.id).subscribe(e=>{console.log("Cursos obtenidos del backend:",e),this.carrerastecnicasList=e.map(o=>{const n=parseFloat(o.cantidad_de_horas)||0,a=parseFloat(o.horas_practicas)||0;return o.totalHoras=n+a,this.cursosService.getPromedioCurso(o.id).subscribe(c=>{console.log(`Promedio obtenido para el curso ${o.id}:`,c),o.promedio_general=c.promedio_general},c=>{console.error(`Error al obtener el promedio para el curso ${o.id}:`,c),o.promedio_general="N/A"}),o}),this.originalCarrerastecnicasList=[...this.carrerastecnicasList],console.log("Lista de cursos con promedios:",this.carrerastecnicasList)})}navigateToNuevo(){console.log("nuevo"),this.ref=this.dialogService.open(B.N,{width:"60%",styleClass:"custom-dialog-header"}),this.ref.onClose.subscribe(e=>{console.log("Cerrando dialogo"),this.listarCursos()})}navigateAddCurso(){console.log("Datos que se enviar\xe1n navigateAddCurso : ",this.config.data.data),console.log("ID navigateAddCurso: ",this.config.data.data.id),console.log("Total Cr\xe9ditos navigateAddCurso: ",this.config.data.data.total_creditos),console.log(this.config.data.data.id),this.ref=this.dialogService.open(h.Z,{width:"60%",styleClass:"custom-dialog-header",data:{id:this.config.data.data.id,total_creditos:this.config.data.data.total_creditos,acciones:"add"}}),this.ref.onClose.subscribe(e=>{this.listarCursos()})}navigateToDetalle(e){this.ref=this.dialogService.open(h.Z,{width:"80%",styleClass:"custom-dialog-header",data:{id:this.config.data.data.id,total_creditos:this.config.data.data.total_creditos,acciones:"ver",data:e}}),this.ref.onClose.subscribe(o=>{this.listarCursos()})}navigateToEdit(e){console.log("Editar",e),this.ref=this.dialogService.open(h.Z,{width:"60%",styleClass:"custom-dialog-header",data:{id:this.config.data.data.id,total_creditos:this.config.data.data.total_creditos,acciones:"editar",data:e}}),this.ref.onClose.subscribe(o=>{this.listarCursos()})}navigateToDuplicar(e){this.ref=this.dialogService.open(h.Z,{width:"60%",styleClass:"custom-dialog-header",data:{id:this.config.data.data.id,total_creditos:this.config.data.data.total_creditos,acciones:"duplicar",data:e}}),this.ref.onClose.subscribe(()=>{this.listarCursos()})}navigateToDelete(e){m().fire({title:"\xbfEst\xe1s seguro?",text:"No podr\xe1s revertir esto",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminarlo",customClass:{popup:"custom-swal-popup"},didOpen:()=>{const o=document.querySelector(".swal2-container");o&&o.setAttribute("style","z-index: 2147483647 !important")}}).then(o=>{o.isConfirmed&&this.cursosService.eliminarCurso(e).subscribe(n=>{m().fire({title:"Eliminado",text:"La carrera t\xe9cnica ha sido eliminada.",icon:"success",showClass:{popup:"\n                                    background-color: #78CBF2;\n                                    color: white;\n                                    z-index: 10000!important;\n                                "},didOpen:()=>{const a=document.querySelector(".swal2-container");a&&a.setAttribute("style","z-index: 2147483647 !important")}}).then(()=>{this.listarCursos()})},n=>{m().fire("Error","Hubo un problema al eliminar la carrera t\xe9cnica.","error")})})}onGlobalFilter(e){const o=e.target.value.toLowerCase();console.log("Filtro Global",o),this.carrerastecnicasList=o?this.originalCarrerastecnicasList.filter(n=>n.codigo&&n.codigo.toLowerCase().includes(o)||n.nombres&&n.nombres.toLowerCase().includes(o)||n.cursos&&n.cursos.toLowerCase().includes(o)):[...this.originalCarrerastecnicasList]}verSyllabus(e){this.ref=this.dialogService.open(at,{width:"80%",styleClass:"custom-dialog-header",data:{cursoId:e}})}verTemas(e){this.ref=this.dialogService.open(dt,{width:"80%",styleClass:"custom-dialog-header",data:{cursoId:e}})}verAlumnos(e){this.ref=this.dialogService.open(K.z,{width:"80%",styleClass:"custom-dialog-header",data:{cursoId:e.id,domainId:e.domain_id,cursoNombre:e.nombre}})}verHorarios(e){this.ref=this.dialogService.open(Q.p,{width:"80%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{console.log("Dialog cerrado",o)})}verAsistencia(e){this.ref=this.dialogService.open(W.q,{width:"80%",styleClass:"custom-dialog-header",data:{cursoId:e.id,domainId:e.domain_id,fecha:null,cursoNombre:e.nombre,docenteId:e.docente_id}})}verEvaluaciones(e){console.log("evaluaciones",e),this.ref=this.dialogService.open(q.t,{width:"60%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{this.listarCursos()})}verForos(e){this.ref=this.dialogService.open(tt.F,{width:"60%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{this.listarCursos()})}static#t=this.\u0275fac=function(o){return new(o||r)(t.rXU(d.o3),t.rXU(f.O),t.rXU(v.Ix),t.rXU(d.sb),t.rXU(b.V))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-ver-curso-de-carrera"]],viewQuery:function(o,n){if(1&o&&(t.GBs(pt,5),t.GBs(ut,5)),2&o){let a;t.mGM(a=t.lsd())&&(n.filter=a.first),t.mGM(a=t.lsd())&&(n.tabledt1=a.first)}},inputs:{miembro:"miembro"},outputs:{miembrosActualizados:"miembrosActualizados"},decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar Unidad Didactica",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],["scope","col",2,"min-width","10rem"],[1,"button-group"],["pButton","","pTooltip","Ver Syllabus","tooltipPosition","top",1,"p-button-rounded","p-button-info","button-custom",2,"background","gray",3,"click"],["pButton","","pTooltip","Ver Alumnos","tooltipPosition","top",1,"p-button-rounded","p-button-success","button-custom",2,"background","blue",3,"click"],["pButton","","class","p-button-rounded p-button-warning button-custom","style","background: yellow","pTooltip","Ver Horarios","tooltipPosition","top",3,"click",4,"ngIf"],["pButton","","class","p-button-rounded p-button-primary button-custom","style","background: rgb(103, 87, 87)","pTooltip","Ver Asistencia","tooltipPosition","top",3,"click",4,"ngIf"],["pButton","","pTooltip","Ver Temas","tooltipPosition","top",1,"p-button-rounded","p-button-secondary","button-custom",2,"background","green",3,"click"],["pButton","","class","p-button-rounded p-button-help button-custom","style","background: rgb(24, 15, 67)","pTooltip","Ver Evaluaciones","tooltipPosition","top",3,"click",4,"ngIf"],["pButton","","icon","pi pi-eye","title","Ver",1,"p-button-rounded","p-button-text","p-button-success",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-pencil","title","Editar",1,"p-button-rounded","p-button-text","p-button-warning",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-trash","title","Eliminar",1,"p-button-rounded","p-button-text","p-button-danger",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-copy","title","Duplicar",1,"p-button-rounded","p-button-text","p-button-secondary",2,"width","70px","border-radius","30px",3,"click"],["pButton","","pTooltip","Ver Horarios","tooltipPosition","top",1,"p-button-rounded","p-button-warning","button-custom",2,"background","yellow",3,"click"],["pButton","","pTooltip","Ver Asistencia","tooltipPosition","top",1,"p-button-rounded","p-button-primary","button-custom",2,"background","rgb(103, 87, 87)",3,"click"],["pButton","","pTooltip","Ver Evaluaciones","tooltipPosition","top",1,"p-button-rounded","p-button-help","button-custom",2,"background","rgb(24, 15, 67)",3,"click"],["colspan","23"]],template:function(o,n){1&o&&(t.j41(0,"p-panel"),t.DNE(1,mt,2,0,"ng-template",0),t.DNE(2,Tt,10,5,"ng-template",1),t.k0s())},dependencies:[j.bT,g.Ei,u._f,C.XI,_.S,p.Z,V.m],styles:['@charset "UTF-8";.button-custom[_ngcontent-%COMP%]{width:1rem;height:3rem;background-color:#f0f8ff;background:#2c5f8b;color:#faebd7;border:none;border-radius:inherit;display:flex;justify-content:center;align-items:center;text-align:center}.button-group[_ngcontent-%COMP%]{display:flex;gap:10px}.custom-swal-popup[_ngcontent-%COMP%], .swal2-popup[_ngcontent-%COMP%]{z-index:2147483647!important}body.swal2-shown[_ngcontent-%COMP%]:not(.swal2-no-backdrop):not(.swal2-toast-shown){z-index:2147483647!important}']})}return r})();const Ft=["filter"],Et=["dt1"];function kt(r,s){1&r&&(t.j41(0,"span",2),t.EFF(1,"Bandeja de Carreras T\xe9cnicas"),t.k0s())}function yt(r,s){if(1&r){const e=t.RV6();t.j41(0,"div",12)(1,"div",13)(2,"span",14)(3,"input",15,16),t.bIt("input",function(n){t.eBV(e);const a=t.XpG(2);return t.Njj(a.onGlobalFilter(n))}),t.k0s()()(),t.j41(5,"div",17)(6,"button",18),t.bIt("click",function(){t.eBV(e);const n=t.XpG(2);return t.Njj(n.navigateToNuevo())}),t.k0s()()()}}function Vt(r,s){1&r&&(t.j41(0,"tr")(1,"th",19),t.EFF(2,"C\xf3digo"),t.k0s(),t.j41(3,"th",19),t.EFF(4,"Nombre de Carrera T\xe9cnica"),t.k0s(),t.j41(5,"th",19),t.EFF(6,"Plan de Estudios"),t.k0s(),t.j41(7,"th",19),t.EFF(8,"Configuraciones"),t.k0s()())}function Bt(r,s){if(1&r){const e=t.RV6();t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td")(8,"button",20),t.bIt("click",function(){const a=t.eBV(e).$implicit,c=t.XpG(2);return t.Njj(c.navigateTocurso(a))}),t.k0s(),t.j41(9,"button",21),t.bIt("click",function(){const a=t.eBV(e).$implicit,c=t.XpG(2);return t.Njj(c.navigateToEdit(a))}),t.k0s(),t.j41(10,"button",22),t.bIt("click",function(){const a=t.eBV(e).$implicit,c=t.XpG(2);return t.Njj(c.navigateToDelete(a.id))}),t.k0s()()()}if(2&r){const e=s.$implicit;t.R7$(2),t.JRh(e.codigo),t.R7$(2),t.JRh(e.nombres),t.R7$(2),t.JRh(e.plan_de_estudios_nombre)}}function Dt(r,s){1&r&&(t.j41(0,"tr")(1,"td",23),t.EFF(2,"No se encontraron registros"),t.k0s()())}function wt(r,s){1&r&&(t.j41(0,"tr")(1,"td",24),t.EFF(2,"Cargando registros. Por favor espere."),t.k0s()())}function Nt(r,s){if(1&r&&(t.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),t.DNE(5,yt,7,0,"ng-template",8),t.DNE(6,Vt,9,0,"ng-template",0),t.DNE(7,Bt,11,3,"ng-template",9),t.DNE(8,Dt,3,0,"ng-template",10),t.DNE(9,wt,3,0,"ng-template",11),t.k0s()()()()),2&r){const e=t.XpG();t.R7$(3),t.Y8G("value",e.carrerastecnicasList)("rows",10)("loading",e.loading)("rowHover",!0)("paginator",!0)}}let St=(()=>{class r{constructor(e,o,n,a){this.dialogService=e,this.carrerasTecnicasService=o,this.router=n,this.helpersService=a,this.loading=!1,this.miembro=[],this.miembrosActualizados=new t.bkB,this.carrerastecnicasList=[],this.originalCarrerastecnicasList=[]}ngOnInit(){this.listarCarrerasTecnicas()}listarCarrerasTecnicas(){const e=this.helpersService.getDominioId();this.carrerasTecnicasService.getCarrerasTecnicas(e).subscribe(o=>{this.carrerastecnicasList=o,this.originalCarrerastecnicasList=[...o]})}navigateToNuevo(){console.log("nuevo"),this.ref=this.dialogService.open(B.N,{width:"60%",height:"75%",styleClass:"custom-dialog-header"}),this.ref.onClose.subscribe(e=>{console.log("Cerrando dialogo"),this.listarCarrerasTecnicas()})}navigateAddCurso(e,o){this.ref=this.dialogService.open(h.Z,{width:"60%",styleClass:"custom-dialog-header",data:{id:e,total_creditos:o}}),this.ref.onClose.subscribe(n=>{this.listarCarrerasTecnicas()})}navigateTocurso(e){this.ref=this.dialogService.open(jt,{width:"80%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{this.listarCarrerasTecnicas()})}navigateToDetalle(e){this.ref=this.dialogService.open(Z,{width:"60%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{this.listarCarrerasTecnicas()})}navigateToEdit(e){console.log("Editar",e),this.ref=this.dialogService.open(H,{width:"60%",styleClass:"custom-dialog-header",data:{data:e}}),this.ref.onClose.subscribe(o=>{this.listarCarrerasTecnicas()})}navigateToDelete(e){m().fire({title:"\xbfEst\xe1s seguro?",text:"No podr\xe1s revertir esto",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminarlo"}).then(o=>{o.isConfirmed&&(this.carrerasTecnicasService.eliminarCarreraTecnica(e).subscribe(n=>{m().fire("Eliminado","La carrera t\xe9cnica ha sido eliminada.","success")},n=>{m().fire("Error","Hubo un problema al eliminar la carrera t\xe9cnica.","error")}),this.listarCarrerasTecnicas())})}onGlobalFilter(e){const o=e.target.value.toLowerCase();console.log("Filtro Global",o),this.carrerastecnicasList=o?this.originalCarrerastecnicasList.filter(n=>n.codigo&&n.codigo.toLowerCase().includes(o)||n.nombres&&n.nombres.toLowerCase().includes(o)||n.cursos&&n.cursos.toLowerCase().includes(o)):[...this.originalCarrerastecnicasList]}editarMiembro(){}eliminarMiembro(){}agregarcurso(){}onRowSelect(e){console.log("Organo-colegaido-sect")}onRowUnselect(e){}static#t=this.\u0275fac=function(o){return new(o||r)(t.rXU(d.o3),t.rXU(f.O),t.rXU(v.Ix),t.rXU(b.V))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-bandeja-carreratecnica"]],viewQuery:function(o,n){if(1&o&&(t.GBs(Ft,5),t.GBs(Et,5)),2&o){let a;t.mGM(a=t.lsd())&&(n.filter=a.first),t.mGM(a=t.lsd())&&(n.tabledt1=a.first)}},inputs:{miembro:"miembro"},outputs:{miembrosActualizados:"miembrosActualizados"},decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar carreras t\xe9cnicas",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],["scope","col",2,"min-width","10rem"],["pButton","","icon","pi pi-briefcase","title","Agregar Unidad Didactica",1,"p-button-rounded","p-button-text","p-button-success",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-pencil","title","Editar",1,"p-button-rounded","p-button-text","p-button-warning",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-trash","title","Eliminar",1,"p-button-rounded","p-button-text","p-button-danger",2,"width","70px","border-radius","30px",3,"click"],["colspan","8"],["colspan","4"]],template:function(o,n){1&o&&(t.j41(0,"p-panel"),t.DNE(1,kt,2,0,"ng-template",0),t.DNE(2,Nt,10,5,"ng-template",1),t.k0s())},dependencies:[g.Ei,u._f,C.XI,_.S,p.Z],styles:[".button-full-width[_ngcontent-%COMP%]{width:100%}"]})}return r})(),Gt=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=t.$C({type:r});static#o=this.\u0275inj=t.G2t({imports:[v.iI.forChild([{path:"",component:St}]),v.iI]})}return r})();var It=i(6064),w=i(5430);let Xt=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=t.$C({type:r});static#o=this.\u0275inj=t.G2t({imports:[j.MD,w.q4,Gt,l.YN,I.rO,C.bG,P.wZ,u.tm,R.SW,_.u,$.f,N.d0,S.Z,G.iV,E.kr,p.b,X.d,F.MB,y.H,k.e,V.S,F.MB,p.b,C.bG,y.H,L.F,k.e,x.sv,M.P,d.k_,U.h,l.X1,It.E,w.q4]})}return r})()}}]);