"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[7964],{3561:(Z,m,i)=>{i.d(m,{N:()=>R});var o=i(1214),s=i(2538),h=i(3519),f=i.n(h),t=i(8926),l=i(3859),v=i(5219),u=i(3999),r=i(5118),d=i(1230),g=i(707),_=i(3714);function T(e,c){1&e&&(t.TgZ(0,"span",2),t._uU(1,"Registrar institutos"),t.qZA())}function b(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"span",6),t._UZ(4,"i",7)(5,"input",8),t.TgZ(6,"label",9),t._uU(7,"C\xf3digo"),t.qZA()(),t.TgZ(8,"small",10),t._uU(9,"Campo obligatorio *"),t.qZA()(),t.TgZ(10,"div",5)(11,"span",6),t._UZ(12,"i",7)(13,"input",8),t.TgZ(14,"label",9),t._uU(15,"Nombres"),t.qZA()(),t.TgZ(16,"small",10),t._uU(17,"Campo obligatorio *"),t.qZA()()()(),t.TgZ(18,"div",3)(19,"div",4)(20,"div",5)(21,"span",6),t._UZ(22,"i",7)(23,"input",11),t.TgZ(24,"label",12),t._uU(25,"Siglas"),t.qZA()(),t.TgZ(26,"small",10),t._uU(27,"Campo obligatorio *"),t.qZA()(),t.TgZ(28,"div",5)(29,"span",6),t._UZ(30,"i",7)(31,"input",13),t.TgZ(32,"label",14),t._uU(33,"Tel\xe9fono"),t.qZA()(),t.TgZ(34,"small",10),t._uU(35,"Campo obligatorio *"),t.qZA()()()(),t.TgZ(36,"div",3)(37,"div",4)(38,"div",5)(39,"span",6),t._UZ(40,"i",7)(41,"input",11),t.TgZ(42,"label",12),t._uU(43,"Correo electr\xf3nico"),t.qZA()(),t.TgZ(44,"small",10),t._uU(45,"Campo obligatorio *"),t.qZA()(),t.TgZ(46,"div",5)(47,"span",6),t._UZ(48,"i",7)(49,"input",13),t.TgZ(50,"label",14),t._uU(51,"Direcci\xf3n"),t.qZA()(),t.TgZ(52,"small",10),t._uU(53,"Campo obligatorio *"),t.qZA()()()(),t.TgZ(54,"div",3)(55,"div",4)(56,"div",5)(57,"span",6),t._UZ(58,"i",7)(59,"input",11),t.TgZ(60,"label",12),t._uU(61,"Ubigeo"),t.qZA()(),t.TgZ(62,"small",10),t._uU(63,"Campo obligatorio *"),t.qZA()()()(),t.TgZ(64,"div",15)(65,"button",16),t.NdJ("click",function(){t.CHM(n);const p=t.oxw();return t.KtG(p.Guardaruser())}),t.qZA(),t.TgZ(66,"button",17),t.NdJ("click",function(){t.CHM(n);const p=t.oxw();return t.KtG(p.closeModal())}),t.qZA()()}}let x=(()=>{class e{constructor(n,a,p,O,Y,L){this.layoutService=n,this.router=a,this.primengConfig=p,this.translate=O,this.ref=Y,this.translateService=L,this.contsylabus="",this.calendarOptions={initialView:"dayGridMonth",locale:s.Z},this.dialogVisible=!1,this.visible=!1}ngOnInit(){this.listciclos=[{name:"Administrador",value:1,code:"NY"},{name:"Alumno",value:2,code:"RM"},{name:"Docente",value:3,code:"NY"}],this.listcarrera=[{name:"DNI",value:1,code:"NY"},{name:"PASAPORTE",value:2,code:"RM"}],this.listareaformativa=[{name:"\xc1rea de formaci\xf3n 1",value:1,code:"NY"},{name:"\xc1rea de formaci\xf3n 2",value:2,code:"RM"},{name:"\xc1rea de formaci\xf3n 3",value:2,code:"RM"}],this.lsitadocente=[{name:"Docente 1",value:1,code:"NY"},{name:"Docente 2",value:2,code:"RM"},{name:"Docente 3",value:2,code:"RM"}],this.translate?this.translateChange("es"):console.error("TranslateService is not initialized.")}cambiarIdioma(){this.translateService.use("es")}translateChange(n){this.translate?this.translate.use(n):console.error("TranslateService is not initialized.")}onDropdownChangetipoDni(n){console.log("Dropdown value changed:",n)}Guardaruser(){this.ref.close(),f().fire({title:"\xa1\xc9xito!",text:"Los Datos se registraron correctamente",icon:"success",confirmButtonText:"Aceptar"}).then(()=>{})}closeDialog(){this.visible=!1}closeModal(){this.ref.close({register:!1})}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(l.P),t.Y36(o.F0),t.Y36(v.b4),t.Y36(u.sK),t.Y36(r.E7),t.Y36(u.sK))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-registra-usuario"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row"],[1,"grid","p-fluid"],[1,"field","md:col-6"],[1,"p-float-label","p-input-icon-left"],[1,"pi","pi-user-edit"],["type","text","id","director","pInputText",""],["for","director"],[2,"color","brown"],["type","text","id","siglas","pInputText",""],["for","siglas"],["type","text","id","logotipo","pInputText",""],["for","logotipo"],[1,"row","mb-5","text-right"],["pButton","","label","Guardar","icon","pi pi-plus","id","btnGuardar",1,"p-button-success","mr-2",3,"click"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"]],template:function(a,p){1&a&&(t.TgZ(0,"p-panel"),t.YNc(1,T,2,0,"ng-template",0),t.YNc(2,b,67,0,"ng-template",1),t.qZA())},dependencies:[d.s,v.jx,g.Hq,_.o],styles:[".swal2-custom-class[_ngcontent-%COMP%]{z-index:9999!important}"]})}return e})();var A=i(6814),C=i(9552);function y(e,c){1&e&&(t.TgZ(0,"span",2),t._uU(1,"Buscar instituciones"),t.qZA())}function U(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"span",13),t._UZ(3,"input",14),t.qZA()(),t.TgZ(4,"div",15)(5,"button",16),t.NdJ("click",function(){t.CHM(n);const p=t.oxw(2);return t.KtG(p.navigateToNuevo())}),t.qZA()()()}}function M(e,c){1&e&&(t.TgZ(0,"tr")(1,"th",17),t._uU(2,"Codigo"),t.qZA(),t.TgZ(3,"th",17),t._uU(4,"Nivel"),t.qZA(),t.TgZ(5,"th",17),t._uU(6,"Siglas"),t.qZA(),t.TgZ(7,"th",17),t._uU(8,"Nombre"),t.qZA(),t.TgZ(9,"th",17),t._uU(10,"Ubigeo"),t.qZA(),t.TgZ(11,"th",17),t._uU(12,"Direcci\xf3n"),t.qZA(),t.TgZ(13,"th",17),t._uU(14,"Tel\xe9fono"),t.qZA(),t.TgZ(15,"th",17),t._uU(16,"Acci\xf3n"),t.qZA()())}const S=function(){return{color:"var(--primary-color)","font-size":"1.5rem"}},w=function(){return{color:"var(--error-color)","font-size":"1.5rem"}};function q(e,c){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td",18)(16,"button",19),t._UZ(17,"i",20),t.qZA(),t.TgZ(18,"button",21),t._UZ(19,"i",22),t.qZA()()()),2&e){const n=c.$implicit;t.xp6(2),t.Oqu(n.item),t.xp6(2),t.Oqu(n.nombre),t.xp6(2),t.Oqu(n.abreviatura),t.xp6(2),t.Oqu(n.grupo),t.xp6(2),t.Oqu(n.dominio),t.xp6(2),t.Oqu(n.direccion),t.xp6(2),t.Oqu(n.telefono),t.xp6(3),t.Akn(t.DdM(10,S)),t.xp6(2),t.Q6J("ngStyle",t.DdM(11,w))}}function D(e,c){1&e&&(t.TgZ(0,"tr")(1,"td",23),t._uU(2,"No se encontraron registros"),t.qZA()())}function E(e,c){1&e&&(t.TgZ(0,"tr")(1,"td",23),t._uU(2," Cargando registros. Por favor espere. "),t.qZA()())}function N(e,c){if(1&e&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6),t.YNc(4,U,6,0,"ng-template",7),t.YNc(5,M,17,0,"ng-template",0),t.YNc(6,q,20,12,"ng-template",8),t.YNc(7,D,3,0,"ng-template",9),t.YNc(8,E,3,0,"ng-template",10),t.qZA()()()()),2&e){const n=t.oxw();t.xp6(3),t.Q6J("value",n.data)}}let I=(()=>{class e{constructor(n,a){this.router=n,this.dialogService=a,this.data=[{item:"prueba1",nombre:"Nombre1",abreviatura:"Abrev1",grupo:"Grupo1",dominio:"Dominio1",direccion:"Direcci\xf3n",telefono:"tel\xe9fono"},{item:"prueba2",nombre:"Nombre2",abreviatura:"Abrev2",grupo:"Grupo2",dominio:"Dominio2"},{item:"prueba2",nombre:"Nombre2",abreviatura:"Abrev2",grupo:"Grupo2",dominio:"Dominio2"}]}navigateToNuevo(){this.ref=this.dialogService.open(x,{width:"60%",styleClass:"custom-dialog-header"}),this.ref.onClose.subscribe(n=>{this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.onSameUrlNavigation="reload"})}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(o.F0),t.Y36(r.xA))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-lista-instituciones"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row"],[1,"grid","p-fluid"],[1,"field","md:col-12"],[1,"w-full","custom-search-input",3,"value"],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar miembro",1,"w-full"],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],[2,"min-width","10rem"],[1,"text-center","flex","gap-2"],["pButton","","title","Editar miembro",1,"p-button-rounded","p-button-text","custom-edit-button",2,"width","fit-content"],["aria-hidden","true",1,"pi","pi-user-edit"],["pButton","","title","Eliminar miembro",1,"p-button-danger","p-button-rounded",2,"width","fit-content"],["aria-hidden","true",1,"pi","pi-trash",3,"ngStyle"],["colspan","6"]],template:function(a,p){1&a&&(t.TgZ(0,"p-panel"),t.YNc(1,y,2,0,"ng-template",0),t.YNc(2,N,9,1,"ng-template",1),t.qZA())},dependencies:[A.PC,d.s,v.jx,g.Hq,C.iA,_.o],styles:[".selects_content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.selects_content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column}.selects_content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%], .selects_content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid rgb(136,133,133);border-radius:10px;margin-top:.4rem;width:14.5rem;padding:.8rem 1rem;outline:none}"]})}return e})(),R=(()=>{class e{static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[o.Bz.forChild([{path:"",component:I}]),o.Bz]})}return e})()},2538:(Z,m,i)=>{i.d(m,{Z:()=>o});var o={code:"es",week:{dow:1,doy:4},buttonText:{prev:"Ant",next:"Sig",today:"Hoy",year:"A\xf1o",month:"Mes",week:"Semana",day:"D\xeda",list:"Agenda"},buttonHints:{prev:"$0 antes",next:"$0 siguiente",today:s=>"D\xeda"===s?"Hoy":("Semana"===s?"Esta":"Este")+" "+s.toLocaleLowerCase()},viewHint:s=>"Vista "+("Semana"===s?"de la":"del")+" "+s.toLocaleLowerCase(),weekText:"Sm",weekTextLong:"Semana",allDayText:"Todo el d\xeda",moreLinkText:"m\xe1s",moreLinkHint:s=>`Mostrar ${s} eventos m\xe1s`,noEventsText:"No hay eventos para mostrar",navLinkHint:"Ir al $0",closeHint:"Cerrar",timeHint:"La hora",eventHint:"Evento"}},6218:(Z,m,i)=>{i.d(m,{A:()=>t,g:()=>f});var o=i(8926),s=i(6814),h=i(6223);let f=(()=>{class l{el;ngModel;control;cd;autoResize;onResize=new o.vpe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(u,r,d,g){this.el=u,this.ngModel=r,this.control=d,this.cd=g}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewChecked(){this.updateState()}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(u){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(u){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(u||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(r){return new(r||l)(o.Y36(o.SBq),o.Y36(h.On,8),o.Y36(h.a5,8),o.Y36(o.sBO))};static \u0275dir=o.lG2({type:l,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(r,d){1&r&&o.NdJ("input",function(_){return d.onInput(_)}),2&r&&o.ekj("p-filled",d.filled)("p-inputtextarea-resizable",d.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return l})(),t=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=o.oAB({type:l});static \u0275inj=o.cJS({imports:[s.ez]})}return l})()}}]);