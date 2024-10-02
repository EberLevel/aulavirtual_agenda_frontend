"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[1086],{1086:(rt,v,o)=>{o.r(v),o.d(v,{EscalaModule:()=>lt});var u=o(177),d=o(5473),E=o(8763),c=o(9417),T=o(8032),p=o.n(T),t=o(7019),m=o(2100),b=o(1626),y=o(3587);let _=(()=>{class a{constructor(e){this.http=e,this.baseUrl=`${y.c.API_BASE}`,this.httpOptions={headers:new b.Lr({"Content-Type":"application/json"})}}getEscalas(e){return this.http.get(`${this.baseUrl}escalas/${e}`,this.httpOptions)}getEscalaById(e){return this.http.get(`${this.baseUrl}escala/${e}`,this.httpOptions)}guardarEscala(e){return this.http.post(`${this.baseUrl}escala`,e,this.httpOptions)}actualizarEscala(e,n){return this.http.put(`${this.baseUrl}escala/${e}`,n,this.httpOptions)}eliminarEscala(e){return this.http.delete(`${this.baseUrl}escala/${e}`,this.httpOptions)}static#t=this.\u0275fac=function(n){return new(n||a)(t.KVO(b.Qq))};static#e=this.\u0275prov=t.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var x=o(8774),C=o(5779),g=o(1141),h=o(2242);function G(a,l){if(1&a&&(t.j41(0,"span",2),t.EFF(1),t.k0s()),2&a){const e=t.XpG();t.R7$(1),t.SpI(" ","add"===e.acciones?"Agregar Escala":"ver"===e.acciones?"Ver Escala":"Editar Escala"," ")}}function N(a,l){1&a&&(t.j41(0,"small",20),t.EFF(1,"El nombre es obligatorio"),t.k0s())}function B(a,l){1&a&&(t.j41(0,"small",20),t.EFF(1,"El color es obligatorio"),t.k0s())}function I(a,l){1&a&&(t.j41(0,"small",20),t.EFF(1,"Este campo es opcional"),t.k0s())}function $(a,l){1&a&&t.nrm(0,"button",21)}function D(a,l){1&a&&t.nrm(0,"button",22)}function S(a,l){if(1&a){const e=t.RV6();t.j41(0,"form",3),t.bIt("ngSubmit",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.guardarEscala())}),t.j41(1,"div",4)(2,"div",5)(3,"div",6)(4,"span",7),t.nrm(5,"input",8),t.j41(6,"label",9),t.EFF(7,"Nombre"),t.k0s()(),t.DNE(8,N,2,0,"small",10),t.k0s()()(),t.j41(9,"div",4)(10,"div",5)(11,"div",11)(12,"span",12)(13,"input",13),t.bIt("input",function(s){t.eBV(e);const i=t.XpG();return t.Njj(i.onColorChange(s))}),t.k0s(),t.j41(14,"label",9),t.EFF(15,"Color"),t.k0s()(),t.DNE(16,B,2,0,"small",10),t.k0s(),t.j41(17,"div",11)(18,"span",7),t.nrm(19,"input",14),t.j41(20,"label"),t.EFF(21,"C"),t.k0s()(),t.DNE(22,I,2,0,"small",10),t.k0s()()(),t.j41(23,"div",4)(24,"div",15)(25,"div",16),t.DNE(26,$,1,0,"button",17),t.DNE(27,D,1,0,"button",18),t.j41(28,"button",19),t.bIt("click",function(s){t.eBV(e);const i=t.XpG();return t.Njj(i.closeModal(s))}),t.k0s()()()()()}if(2&a){const e=t.XpG();let n,s,i,r;t.Y8G("formGroup",e.escalaForm),t.R7$(5),t.Y8G("disabled","ver"===e.acciones),t.R7$(3),t.Y8G("ngIf",(null==(n=e.escalaForm.get("nombre"))?null:n.invalid)&&(null==(n=e.escalaForm.get("nombre"))?null:n.touched)),t.R7$(5),t.Y8G("value",null==(s=e.escalaForm.get("color"))?null:s.value),t.R7$(3),t.Y8G("ngIf",(null==(i=e.escalaForm.get("color"))?null:i.invalid)&&(null==(i=e.escalaForm.get("color"))?null:i.touched)),t.R7$(3),t.Y8G("disabled","ver"===e.acciones),t.R7$(3),t.Y8G("ngIf",(null==(r=e.escalaForm.get("c"))?null:r.invalid)&&(null==(r=e.escalaForm.get("c"))?null:r.touched)),t.R7$(4),t.Y8G("ngIf","add"===e.acciones),t.R7$(1),t.Y8G("ngIf","actualizar"===e.acciones)}}let f=(()=>{class a{constructor(e,n,s,i,r){this.fb=e,this.ref=n,this.config=s,this.escalaService=i,this.helpersService=r,this.acciones=this.config.data.acciones,this.escalaForm=this.fb.group({nombre:["",c.k0.required],color:["",c.k0.required],c:[""]})}ngOnInit(){this.domain_id=this.helpersService.getDominioId(),("ver"===this.acciones||"actualizar"===this.acciones)&&this.escalaForm.patchValue({nombre:this.config.data.data.nombre,color:this.config.data.data.color,c:this.config.data.data.c})}onColorChange(e){const n=e.target.value;this.escalaForm.get("color")?.setValue(n)}guardarEscala(){if(this.escalaForm.valid){const e={...this.escalaForm.value,domain_id:this.domain_id};"actualizar"===this.acciones?this.escalaService.actualizarEscala(this.config.data.data.id,e).subscribe(s=>{this.ref?.close(),p().fire({title:"\xa1\xc9xito!",text:"Los Datos se actualizaron correctamente",icon:"success",confirmButtonText:"Aceptar"})},s=>{console.error("Error al actualizar la escala",s)}):this.escalaService.guardarEscala(e).subscribe(n=>{this.ref?.close(),p().fire({title:"\xa1\xc9xito!",text:"Los Datos se registraron correctamente",icon:"success",confirmButtonText:"Aceptar"})},n=>{console.error("Error al guardar la escala",n)})}else console.error("Formulario inv\xe1lido")}closeModal(e){e.preventDefault(),this.ref?.close()}static#t=this.\u0275fac=function(n){return new(n||a)(t.rXU(c.ok),t.rXU(m.Pw),t.rXU(m.sb),t.rXU(_),t.rXU(x.V))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-ae-escala"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"grid","p-fluid"],[1,"field","col-12"],[1,"p-float-label"],["type","text","pInputText","","formControlName","nombre",3,"disabled"],[1,"required"],["class","p-error",4,"ngIf"],[1,"field","col-6"],[1,"p-float-label","color-picker-wrapper"],["type","color",3,"value","input"],["type","text","pInputText","","formControlName","c",3,"disabled"],[1,"flex","justify-content-end","flex-column","sm:flex-row"],[1,"flex","flex-wrap","gap-2"],["pButton","","icon","pi pi-plus","label","Guardar","iconPos","right","class","p-button-success p-button-sm","type","submit",4,"ngIf"],["pButton","","icon","pi pi-refresh","label","Actualizar","iconPos","right","class","p-button-warning p-button-sm","type","submit",4,"ngIf"],["pButton","","label","Cerrar","icon","pi pi-times","iconPos","right",1,"p-button-close-clean",3,"click"],[1,"p-error"],["pButton","","icon","pi pi-plus","label","Guardar","iconPos","right","type","submit",1,"p-button-success","p-button-sm"],["pButton","","icon","pi pi-refresh","label","Actualizar","iconPos","right","type","submit",1,"p-button-warning","p-button-sm"]],template:function(n,s){1&n&&(t.j41(0,"p-panel"),t.DNE(1,G,2,1,"ng-template",0),t.DNE(2,S,29,9,"ng-template",1),t.k0s())},dependencies:[c.qT,c.me,c.BC,c.cb,c.j4,c.JD,u.bT,d.Z,C.Ei,g._f,h.S],styles:["input[_ngcontent-%COMP%]{width:27rem!important;height:3rem!important;border-radius:6px!important}"]})}return a})();var j=o(9280),F=o(8542);function k(a,l){1&a&&(t.j41(0,"span",2),t.EFF(1,"Listado de Escalas"),t.k0s())}function A(a,l){if(1&a){const e=t.RV6();t.j41(0,"div",12)(1,"div",13)(2,"span",14)(3,"input",15,16),t.bIt("input",function(s){t.eBV(e);const i=t.XpG(2);return t.Njj(i.onGlobalFilter(s))}),t.k0s()()(),t.j41(5,"div",17)(6,"button",18),t.bIt("click",function(){t.eBV(e);const s=t.XpG(2);return t.Njj(s.navigateAddEscala())}),t.k0s()()()}}function V(a,l){1&a&&(t.j41(0,"tr")(1,"th",19),t.EFF(2,"Acciones"),t.k0s(),t.j41(3,"th",19),t.EFF(4,"Nombre"),t.k0s(),t.j41(5,"th",19),t.EFF(6,"Color"),t.k0s(),t.j41(7,"th",19),t.EFF(8,"C"),t.k0s()())}const X=function(a){return{"background-color":a}};function O(a,l){if(1&a){const e=t.RV6();t.j41(0,"tr")(1,"td")(2,"button",20),t.bIt("click",function(){const i=t.eBV(e).$implicit,r=t.XpG(2);return t.Njj(r.navigateToDetalle(i))}),t.k0s(),t.j41(3,"button",21),t.bIt("click",function(){const i=t.eBV(e).$implicit,r=t.XpG(2);return t.Njj(r.navigateToEdit(i))}),t.k0s(),t.j41(4,"button",22),t.bIt("click",function(){const i=t.eBV(e).$implicit,r=t.XpG(2);return t.Njj(r.navigateToDelete(i.id))}),t.k0s()(),t.j41(5,"td")(6,"span",23),t.EFF(7),t.k0s()(),t.j41(8,"td"),t.nrm(9,"div",24),t.k0s(),t.j41(10,"td"),t.EFF(11),t.k0s()()}if(2&a){const e=l.$implicit;t.R7$(7),t.JRh(e.nombre),t.R7$(2),t.Y8G("ngStyle",t.eq3(3,X,e.color)),t.R7$(2),t.SpI(" ",e.c," ")}}function P(a,l){1&a&&(t.j41(0,"tr")(1,"td",25),t.EFF(2,"No se encontraron registros"),t.k0s()())}function R(a,l){1&a&&(t.j41(0,"tr")(1,"td",25),t.EFF(2,"Cargando registros. Por favor espere."),t.k0s()())}function M(a,l){if(1&a&&(t.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),t.DNE(5,A,7,0,"ng-template",8),t.DNE(6,V,9,0,"ng-template",0),t.DNE(7,O,12,5,"ng-template",9),t.DNE(8,P,3,0,"ng-template",10),t.DNE(9,R,3,0,"ng-template",11),t.k0s()()()()),2&a){const e=t.XpG();t.R7$(3),t.Y8G("value",e.escalaList)("rows",10)("loading",e.loading)("rowHover",!0)("paginator",!0)}}let L=(()=>{class a{constructor(e,n,s){this.dialogService=e,this.helpersService=n,this.escalaService=s,this.loading=!1,this.escalaList=[],this.originalEscalaList=[]}ngOnInit(){this.domain_id=this.helpersService.getDominioId(),console.log(this.domain_id),this.listarEscalas()}listarEscalas(){this.loading=!0,this.escalaService.getEscalas(this.domain_id).subscribe(e=>{this.escalaList=e.data,this.originalEscalaList=[...e.data],this.loading=!1})}navigateAddEscala(){this.ref=this.dialogService.open(f,{width:"60%",styleClass:"custom-dialog-header",data:{acciones:"add"}}),this.ref.onClose.subscribe(()=>{this.listarEscalas()})}navigateToDetalle(e){this.ref=this.dialogService.open(f,{width:"80%",styleClass:"custom-dialog-header",data:{acciones:"ver",data:e}}),this.ref.onClose.subscribe(()=>{this.listarEscalas()})}navigateToEdit(e){this.ref=this.dialogService.open(f,{width:"60%",styleClass:"custom-dialog-header",data:{acciones:"actualizar",data:e}}),this.ref.onClose.subscribe(()=>{this.listarEscalas()})}navigateToDelete(e){p().fire({title:"\xbfEst\xe1s seguro?",text:"No podr\xe1s revertir esto",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminarlo"}).then(n=>{n.isConfirmed&&this.escalaService.eliminarEscala(e).subscribe(()=>{p().fire("Eliminado","El registro ha sido eliminado.","success"),this.listarEscalas()},s=>{p().fire("Error","Hubo un problema al eliminar el registro.","error")})})}onGlobalFilter(e){const n=e.target.value.toLowerCase();this.escalaList=n?this.originalEscalaList.filter(s=>s.nombre.toLowerCase().includes(n)):[...this.originalEscalaList]}static#t=this.\u0275fac=function(n){return new(n||a)(t.rXU(m.o3),t.rXU(x.V),t.rXU(_))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["app-escala"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar Escalas",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-plus","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],["scope","col",2,"min-width","10rem"],["pButton","","icon","pi pi-eye","title","Ver",1,"p-button-rounded","p-button-text","p-button-success",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-pencil","title","Editar",1,"p-button-rounded","p-button-text","p-button-warning",2,"width","70px","border-radius","30px",3,"click"],["pButton","","icon","pi pi-trash","title","Eliminar",1,"p-button-rounded","p-button-text","p-button-danger",2,"width","70px","border-radius","30px",3,"click"],["pTooltip","Nombre de la Escala","tooltipPosition","top"],[2,"width","30px","height","30px","border-radius","50%",3,"ngStyle"],["colspan","4"]],template:function(n,s){1&n&&(t.j41(0,"p-panel"),t.DNE(1,k,2,0,"ng-template",0),t.DNE(2,M,10,5,"ng-template",1),t.k0s())},dependencies:[u.B3,d.Z,C.Ei,g._f,j.XI,h.S,F.m],styles:[".selects_content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.selects_content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column}.selects_content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%], .selects_content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid rgb(136,133,133);border-radius:10px;margin-top:.4rem;width:14.5rem;padding:.8rem 1rem;outline:none}"]})}return a})(),U=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.$C({type:a});static#a=this.\u0275inj=t.G2t({imports:[E.iI.forChild([{path:"",component:L}]),E.iI]})}return a})();var Y=o(612),w=o(4714),z=o(9266),H=o(1305),Z=o(3973),J=o(563),K=o(6296),Q=o(8150),W=o(1579),q=o(9998),tt=o(7835),et=o(320),at=o(4799),nt=o(1142),ot=o(6781),st=o(9664),it=o(9240);let lt=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.$C({type:a});static#a=this.\u0275inj=t.G2t({imports:[it.YG,c.X1,u.MD,d.b,U,c.YN,Y.rO,j.bG,w.wZ,g.tm,z.SW,h.u,H.f,Z.d0,J.Z,K.iV,Q.kr,W.d,q.MB,tt.H,et.e,F.S,at.F,nt.sv,ot.P,m.k_,st.h]})}return a})()}}]);