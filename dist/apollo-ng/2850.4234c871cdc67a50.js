"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[2850],{2850:(T,b,r)=>{r.r(b),r.d(b,{AvanceCurricularModule:()=>J});var i=r(6814),m=r(4104),a=r(9552),s=r(707),g=r(3714),d=r(6804),h=r(4480),c=r(4055),e=r(3965),t=r(1230),y=r(6760),C=r(6651),M=r(7902),S=r(6022),A=r(3722),E=r(1494),R=r(6218),_=r(3259),Z=r(3904),x=r(3530),w=r(5118),P=r(3999),U=r(1214),o=r(8926),B=r(4067),H=r(5219);const $=["filter"],F=["dt1"];function D(n,v){1&n&&(o.TgZ(0,"span",2),o._uU(1,"Reporte de Avance Curricular"),o.qZA())}function z(n,v){if(1&n){const l=o.EpF();o.TgZ(0,"div",12)(1,"div",13)(2,"span",14)(3,"input",15,16),o.NdJ("input",function(p){o.CHM(l),o.oxw();const f=o.MAs(4),W=o.oxw();return o.KtG(W.onGlobalFilter(f,p))}),o.qZA()()()()}}function I(n,v){1&n&&(o.TgZ(0,"tr")(1,"th",17)(2,"div",18),o._uU(3," C\xf3digo "),o.qZA()(),o.TgZ(4,"th",17)(5,"div",18),o._uU(6," Nombre del curso "),o.qZA()(),o.TgZ(7,"th",17)(8,"div",18),o._uU(9," Carrera T\xe9cnica "),o.qZA()(),o.TgZ(10,"th",17)(11,"div"),o._uU(12," Ciclo "),o.qZA()(),o.TgZ(13,"th",17)(14,"div"),o._uU(15," \xc1rea de informaci\xf3n "),o.qZA()(),o.TgZ(16,"th",17)(17,"div"),o._uU(18," M\xf3dulo normativo "),o.qZA()(),o.TgZ(19,"th",17)(20,"div"),o._uU(21," Cr\xe9ditos "),o.qZA()(),o.TgZ(22,"th",17)(23,"div"),o._uU(24," Acciones "),o.qZA()()())}function j(n,v){if(1&n){const l=o.EpF();o.TgZ(0,"tr")(1,"td"),o._uU(2,"140014Q"),o.qZA(),o.TgZ(3,"td"),o._uU(4,"Matematica"),o.qZA(),o.TgZ(5,"td"),o._uU(6,"Matematica"),o.qZA(),o.TgZ(7,"td"),o._uU(8,"Primer Ciclo"),o.qZA(),o.TgZ(9,"td"),o._uU(10,"\xc1rea de informaci\xf3n"),o.qZA(),o.TgZ(11,"td"),o._uU(12,"M\xf3dulo normativo"),o.qZA(),o.TgZ(13,"td"),o._uU(14,"4"),o.qZA(),o.TgZ(15,"td")(16,"button",19),o.NdJ("click",function(){o.CHM(l);const p=o.oxw(2);return o.KtG(p.navigateTocurso())}),o.qZA()()()}}function O(n,v){1&n&&(o.TgZ(0,"tr")(1,"td",20),o._uU(2,"No se encontraron registros"),o.qZA()())}function N(n,v){1&n&&(o.TgZ(0,"tr")(1,"td",21),o._uU(2,"Cargando registros. Por favor espere."),o.qZA()())}function G(n,v){if(1&n&&(o.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),o.YNc(5,z,5,0,"ng-template",8),o.YNc(6,I,25,0,"ng-template",0),o.YNc(7,j,17,0,"ng-template",9),o.YNc(8,O,3,0,"ng-template",10),o.YNc(9,N,3,0,"ng-template",11),o.qZA()()()()),2&n){const l=o.oxw();o.xp6(3),o.Q6J("value",l.carrerastecnicasList)("rows",10)("loading",l.loading)("rowHover",!0)("paginator",!0)}}let Y=(()=>{class n{constructor(l,u,p){this.dialogService=l,this.maestroService=u,this.router=p,this.loading=!1,this.miembro=[],this.miembrosActualizados=new o.vpe,this.carrerastecnicasList=[{codigo:"140014Q",nombre:"Enfermer\xeda",cursosAsignados:"Ninguno"},{codigo:"001001478CD",nombre:"Enfermer\xeda",cursosAsignados:"Ninguno"}]}ngOnInit(){}navigateToNuevo(){}navigateTocurso(){}navigateToDetalle(){}onGlobalFilter(l,u){l.filterGlobal(u.target.value,"contains")}editarMiembro(){}eliminarMiembro(){}agregarcurso(){}onRowSelect(l){console.log("Organo-colegaido-sect")}onRowUnselect(l){}static#t=this.\u0275fac=function(u){return new(u||n)(o.Y36(w.xA),o.Y36(B.m),o.Y36(U.F0))};static#e=this.\u0275cmp=o.Xpm({type:n,selectors:[["app-bandeja-avance-curricular"]],viewQuery:function(u,p){if(1&u&&(o.Gf($,5),o.Gf(F,5)),2&u){let f;o.iGM(f=o.CRH())&&(p.filter=f.first),o.iGM(f=o.CRH())&&(p.tabledt1=f.first)}},inputs:{miembro:"miembro"},outputs:{miembrosActualizados:"miembrosActualizados"},decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row","mb-4"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"custom-search-input",3,"value","rows","loading","rowHover","paginator"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar",1,"w-full",3,"input"],["filter",""],["scope","col",2,"min-width","10rem"],[1,"flex","justify-content-between","align-items-center"],["pButton","","icon","pi pi-eye","title","Ver toda la Informaci\xf3n",1,"p-button-rounded","p-button-text","p-button-success",2,"border-radius","30px",3,"click"],["colspan","8"],["colspan","4"]],template:function(u,p){1&u&&(o.TgZ(0,"p-panel"),o.YNc(1,D,2,0,"ng-template",0),o.YNc(2,G,10,5,"ng-template",1),o.qZA())},dependencies:[s.Hq,H.jx,a.iA,g.o,t.s]})}return n})(),L=(()=>{class n{static#t=this.\u0275fac=function(u){return new(u||n)};static#e=this.\u0275mod=o.oAB({type:n});static#o=this.\u0275inj=o.cJS({imports:[U.Bz.forChild([{path:"",component:Y}]),U.Bz]})}return n})();var K=r(1066);let J=(()=>{class n{static#t=this.\u0275fac=function(u){return new(u||n)};static#e=this.\u0275mod=o.oAB({type:n});static#o=this.\u0275inj=o.cJS({imports:[i.ez,L,y._8,a.U$,S.Xt,s.hJ,M.JH,g.j,R.A,d.KZ,h.T,c.q4,e.kW,t.Q,C.q,m.EV,E.n,A.O,_.z,m.EV,E.n,Z.D,A.O,x.S,w.DL,P.aw,h.T,c.q4,K.Z_]})}return n})()},4067:(T,b,r)=>{r.d(b,{m:()=>d});var i=r(9862),m=r(5516),a=r(7398),s=r(9397),g=r(8926);let d=(()=>{class h{constructor(e,t,y){this.http=e,this.httpClientFormData=t,this.handler=y,this.baseUrl=`${m.N.API_BASE}`,this.urlparametro=`${m.N.API_BASE}`,this.httpClientFormData=new i.eN(this.handler)}getAllParametro(){return this.http.get(`${this.urlparametro}parametros`).pipe((0,a.U)(e=>{if("0"===e.responseCode)return e.response;throw new Error(e.responseMessage)}))}listarmiembros(){return this.http.get(`${this.baseUrl}parametros`).pipe((0,a.U)(e=>{if(0===e.responseCode)return e.response;throw new Error(e.msgResultado)}))}getCarrerasTecnicas(){return this.http.get(`${this.baseUrl}carreras`,{observe:"response"}).pipe((0,s.b)(e=>{console.log("HTTP Status Code:",e.status)}),(0,a.U)(e=>{if(console.log("Response body:",e.body),200===e.status&&e.body)return e.body;throw new Error(e.body?e.body.responseMessage:"Unknown error")}))}guardarCarreraTecnica(e){return this.http.post(`${this.baseUrl}carreras`,e,{observe:"response"}).pipe((0,s.b)(t=>{console.log("HTTP Status Code:",t.status)}),(0,a.U)(t=>{if(console.log("Response body:",t.body),201===t.status&&t.body)return t.body;throw new Error(t.body?t.body.responseMessage:"Unknown error")}))}editarCarreraTecnica(e){return this.http.put(`${this.baseUrl}carreras/${e.id}`,e,{observe:"response"}).pipe((0,s.b)(t=>{console.log("HTTP Status Code:",t.status)}),(0,a.U)(t=>{if(console.log("Response body:",t.body),201===t.status&&t.body)return t.body;throw new Error(t.body?t.body.responseMessage:"Unknown error")}))}eliminarCarreraTecnica(e){return this.http.delete(`${this.baseUrl}carreras/${e}`,{observe:"response"}).pipe((0,s.b)(t=>{console.log("HTTP Status Code:",t.status)}),(0,a.U)(t=>{if(console.log("Response body:",t.body),201===t.status&&t.body)return t.body;throw new Error(t.body?t.body.responseMessage:"Unknown error")}))}guardarCurso(e){return this.http.post(`${this.baseUrl}cursos`,e,{observe:"response"}).pipe((0,s.b)(t=>{console.log("HTTP Status Code:",t.status)}),(0,a.U)(t=>{if(console.log("Response body:",t.body),201===t.status&&t.body)return t.body;throw new Error(t.body?t.body.responseMessage:"Unknown error")}))}actualizarCurso(e){return this.http.put(`${this.baseUrl}cursos/${e.cursoId}`,e,{observe:"response"}).pipe((0,s.b)(t=>{console.log("HTTP Status Code:",t.status)}),(0,a.U)(t=>{if(console.log("Response body:",t.body),200===t.status&&t.body)return t.body;throw new Error(t.body?t.body.responseMessage:"Unknown error")}))}eliminarCurso(e){return this.http.delete(`${this.baseUrl}cursos/${e}`,{observe:"response"}).pipe((0,s.b)(t=>{console.log("HTTP Status Code:",t.status)}),(0,a.U)(t=>{if(console.log("Response body:",t.body),200===t.status&&t.body)return t.body;throw new Error(t.body?t.body.responseMessage:"Unknown error")}))}getCursos(e){return this.http.get(`${this.baseUrl}cursos/carrera/${e}`,{observe:"response"}).pipe((0,s.b)(t=>{console.log("HTTP Status Code:",t.status)}),(0,a.U)(t=>{if(console.log("Response body:",t.body),200===t.status&&t.body)return t.body;throw new Error(t.body?t.body.responseMessage:"Unknown error")}))}getAreaDeFormacion(){return this.http.get(`${this.baseUrl}parametros?tx_nombre=area_de_formacion`,{observe:"response"}).pipe((0,s.b)(e=>{console.log("HTTP Status Code:",e.status)}),(0,a.U)(e=>{if(console.log("Response body:",e.body),200===e.status&&e.body)return e.body;throw new Error(e.body?e.body.responseMessage:"Unknown error")}))}getCiclo(){return this.http.get(`${this.baseUrl}parametros?tx_nombre=ciclo`,{observe:"response"}).pipe((0,s.b)(e=>{console.log("HTTP Status Code:",e.status)}),(0,a.U)(e=>{if(console.log("Response body:",e.body),200===e.status&&e.body)return e.body;throw new Error(e.body?e.body.responseMessage:"Unknown error")}))}getModuloFormativo(){return this.http.get(`${this.baseUrl}parametros?tx_nombre=modulo_formativo`,{observe:"response"}).pipe((0,s.b)(e=>{console.log("HTTP Status Code:",e.status)}),(0,a.U)(e=>{if(console.log("Response body:",e.body),200===e.status&&e.body)return e.body;throw new Error(e.body?e.body.responseMessage:"Unknown error")}))}getEstados(){return this.http.get(`${this.baseUrl}parametros?tx_nombre=estado`,{observe:"response"}).pipe((0,s.b)(e=>{console.log("HTTP Status Code:",e.status)}),(0,a.U)(e=>{if(console.log("Response body:",e.body),200===e.status&&e.body)return e.body;throw new Error(e.body?e.body.responseMessage:"Unknown error")}))}getMaestros(){return this.http.get(`${this.baseUrl}parametrosAll`,{observe:"response"}).pipe((0,s.b)(e=>{console.log("HTTP Status Code:",e.status)}),(0,a.U)(e=>{if(console.log("Response body:",e.body),200===e.status&&e.body)return e.body;throw new Error(e.body?e.body.responseMessage:"Unknown error")}))}getMaestrosRecursive(){return this.http.get(`${this.baseUrl}parametrosRecursive`,{observe:"response"}).pipe((0,s.b)(e=>{console.log("HTTP Status Code:",e.status)}),(0,a.U)(e=>{if(console.log("Response body:",e.body),200===e.status&&e.body)return e.body;throw new Error(e.body?e.body.responseMessage:"Unknown error")}))}eliminarParametro(e){return this.http.delete(`${this.baseUrl}parametros/${e}`,{observe:"response"}).pipe((0,s.b)(t=>{console.log("HTTP Status Code:",t.status)}),(0,a.U)(t=>{if(console.log("Response body:",t.body),201===t.status&&t.body)return t.body;throw new Error(t.body?t.body.responseMessage:"Unknown error")}))}guardarParametro(e){return this.http.post(`${this.baseUrl}parametros`,e,{observe:"response"}).pipe((0,s.b)(t=>{console.log("HTTP Status Code:",t.status)}),(0,a.U)(t=>{if(console.log("Response body:",t.body),201===t.status&&t.body)return t.body;throw new Error(t.body?t.body.responseMessage:"Unknown error")}))}updateParametro(e){return this.http.put(`${this.baseUrl}parametros/${e.id}`,e,{observe:"response"}).pipe((0,s.b)(t=>{console.log("HTTP Status Code:",t.status)}),(0,a.U)(t=>{if(console.log("Response body:",t.body),200===t.status&&t.body)return t.body;throw new Error(t.body?t.body.responseMessage:"Unknown error")}))}guardarGrupoEvaluaciones(e){return this.http.post(`${this.baseUrl}grupo-de-evaluaciones`,e,{observe:"response"}).pipe((0,s.b)(t=>{console.log("HTTP Status Code:",t.status)}),(0,a.U)(t=>{if(console.log("Response body:",t.body),201===t.status&&t.body)return t.body;throw new Error(t.body?t.body.responseMessage:"Unknown error")}))}actualizarGrupoEvaluaciones(e){return this.http.put(`${this.baseUrl}grupo-de-evaluaciones/${e.id}`,e,{observe:"response"}).pipe((0,s.b)(t=>{console.log("HTTP Status Code:",t.status)}),(0,a.U)(t=>{if(console.log("Response body:",t.body),200===t.status&&t.body)return t.body;throw new Error(t.body?t.body.responseMessage:"Unknown error")}))}eliminarGrupoEvaluaciones(e){return this.http.delete(`${this.baseUrl}grupo-de-evaluaciones/${e}`,{observe:"response"}).pipe((0,s.b)(t=>{console.log("HTTP Status Code:",t.status)}),(0,a.U)(t=>{if(console.log("Response body:",t.body),201===t.status&&t.body)return t.body;throw new Error(t.body?t.body.responseMessage:"Unknown error")}))}static#t=this.\u0275fac=function(t){return new(t||h)(g.LFG(i.eN),g.LFG(i.eN),g.LFG(i.jN))};static#e=this.\u0275prov=g.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},5516:(T,b,r)=>{r.d(b,{N:()=>i});const i={production:!1,API_BASE:"http://143.198.161.217/api/test/",parametro:"parametro"}},6218:(T,b,r)=>{r.d(b,{A:()=>g,g:()=>s});var i=r(8926),m=r(6814),a=r(6223);let s=(()=>{class d{el;ngModel;control;cd;autoResize;onResize=new i.vpe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(c,e,t,y){this.el=c,this.ngModel=e,this.control=t,this.cd=y}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewChecked(){this.updateState()}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(c){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(c){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(c||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(e){return new(e||d)(i.Y36(i.SBq),i.Y36(a.On,8),i.Y36(a.a5,8),i.Y36(i.sBO))};static \u0275dir=i.lG2({type:d,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(e,t){1&e&&i.NdJ("input",function(C){return t.onInput(C)}),2&e&&i.ekj("p-filled",t.filled)("p-inputtextarea-resizable",t.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return d})(),g=(()=>{class d{static \u0275fac=function(e){return new(e||d)};static \u0275mod=i.oAB({type:d});static \u0275inj=i.cJS({imports:[m.ez]})}return d})()}}]);