"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[5283],{5283:(tt,c,n)=>{n.r(c),n.d(c,{CursosModule:()=>q});var l=n(6814),d=n(4104),h=n(6223),m=n(9552),g=n(707),f=n(3714),Z=n(6804),T=n(4480),b=n(4055),_=n(3965),p=n(1230),A=n(6760),j=n(6651),B=n(7902),y=n(6022),v=n(3722),C=n(1494),M=n(6218),N=n(3259),U=n(3904),F=n(1066),G=n(3530),x=n(5118),J=n(3999),u=n(1214),t=n(8926),H=n(3749),S=n(9837),Y=n(5219);const E=["filter"],z=["dt1"];function K(e,a){1&e&&(t.TgZ(0,"span",2),t._uU(1,"Bandeja de Cursos"),t.qZA())}function Q(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"span",14)(3,"input",15,16),t.NdJ("input",function(r){t.CHM(o),t.oxw();const s=t.MAs(4),k=t.oxw();return t.KtG(k.onGlobalFilter(s,r))}),t.qZA()()(),t.TgZ(5,"div",17)(6,"button",18),t.NdJ("click",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.navigateToNuevo())}),t.qZA()()()}}function D(e,a){1&e&&(t.TgZ(0,"tr")(1,"th",19)(2,"div",20),t._uU(3," C\xf3digo "),t.qZA()(),t.TgZ(4,"th",19)(5,"div",20),t._uU(6," Nombre del curso "),t.qZA()(),t.TgZ(7,"th",19)(8,"div",20),t._uU(9," Carrera t\xe9cnica "),t.qZA()(),t.TgZ(10,"th",19)(11,"div",20),t._uU(12," \xc1rea de formaci\xf3n "),t.qZA()(),t.TgZ(13,"th",19)(14,"div",20),t._uU(15," Creditos "),t.qZA()(),t.TgZ(16,"th",19)(17,"div",20),t._uU(18," Configuraci\xf3n "),t.qZA()()())}function I(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(o);const r=t.oxw(3);return t.KtG(r.eliminarMiembro())}),t._UZ(1,"span",28),t.qZA()}2&e&&(t.xp6(1),t.Udp("color","red"))}const L=function(){return{color:"var(--primary-color)","font-size":"1.5rem"}},R=function(){return{color:"var(--error-color)","font-size":"1.5rem"}};function O(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td",21)(12,"button",22),t.NdJ("click",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.editarMiembro())}),t._UZ(13,"i",23),t.qZA(),t.TgZ(14,"button",24),t.NdJ("click",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.eliminarMiembro())}),t._UZ(15,"i",25),t.qZA(),t.YNc(16,I,2,2,"button",26),t.qZA()()}if(2&e){const o=a.$implicit;t.xp6(2),t.hij(" ",o.txNumeroDoc," "),t.xp6(2),t.hij(" ",o.tx_abreviatura," "),t.xp6(2),t.hij(" ",o.nu_item," "),t.xp6(2),t.hij(" ",o.nu_item," "),t.xp6(2),t.hij(" ",o.nu_item," "),t.xp6(3),t.Akn(t.DdM(9,L)),t.xp6(2),t.Q6J("ngStyle",t.DdM(10,R)),t.xp6(1),t.Q6J("ngIf",o.historico)}}function V(e,a){1&e&&(t.TgZ(0,"tr")(1,"td",29),t._uU(2,"No se encontraron registros"),t.qZA()())}function $(e,a){1&e&&(t.TgZ(0,"tr")(1,"td",29),t._uU(2,"Cargando registros. Por favor espere."),t.qZA()())}const P=function(){return["nuIdMiembro","txnombre","txitemdescription","nu_item","dominio","created_at"]};function X(e,a){if(1&e&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"p-table",6,7),t.YNc(5,Q,7,0,"ng-template",8),t.YNc(6,D,19,0,"ng-template",0),t.YNc(7,O,17,11,"ng-template",9),t.YNc(8,V,3,0,"ng-template",10),t.YNc(9,$,3,0,"ng-template",11),t.qZA()()()()),2&e){const o=t.oxw();t.xp6(3),t.Q6J("value",o.cursosList)("rows",10)("loading",o.loading)("rowHover",!0)("paginator",!0)("globalFilterFields",t.DdM(6,P))}}let w=(()=>{class e{constructor(o,i,r){this.dialogService=o,this.maestroService=i,this.router=r,this.cursosList=[],this.loading=!1,this.miembro=[],this.miembrosActualizados=new t.vpe}ngOnInit(){this.listarmiembros()}listarmiembros(){this.maestroService.listarmiembros().subscribe(o=>{console.log("Lista de Miembros creados",o),this.miembrosList=o})}navigateToNuevo(){this.ref=this.dialogService.open(H.V,{width:"60%",styleClass:"custom-dialog-header"}),this.ref.onClose.subscribe(o=>{this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.onSameUrlNavigation="reload"})}onGlobalFilter(o,i){o.filterGlobal(i.target.value,"contains")}editarMiembro(){}eliminarMiembro(){}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(x.xA),t.Y36(S.m),t.Y36(u.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-bandeja-cursos"]],viewQuery:function(i,r){if(1&i&&(t.Gf(E,5),t.Gf(z,5)),2&i){let s;t.iGM(s=t.CRH())&&(r.filter=s.first),t.iGM(s=t.CRH())&&(r.tabledt1=s.first)}},inputs:{miembro:"miembro"},outputs:{miembrosActualizados:"miembrosActualizados"},decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row"],[1,"grid","p-fluid"],[1,"field","md:col-12"],["dataKey","nuIdMiembro","styleClass","p-datatable-gridlines","responsiveLayout","scroll",1,"w-full","custom-search-input",3,"value","rows","loading","rowHover","paginator","globalFilterFields"],["dt1",""],["pTemplate","caption"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"flex","justify-content-between","flex-wrap","flex-wrap"],[1,"flex-grow-1","mb-2","mr-2"],[1,"p-input-icon-left","w-full"],["pInputText","","type","text","placeholder","Buscar cursos",1,"w-full",3,"input"],["filter",""],[1,"mb-2"],["pButton","","label","Nuevo","icon","pi pi-user-plus","id","btnNuevo",1,"p-button-primary","mr-2",2,"border-radius","30px",3,"click"],["scope","col",2,"min-width","10rem"],[1,"flex","justify-content-between","align-items-center"],[1,"text-center"],["pButton","","title","Editar Curso",1,"p-button-rounded","p-button-text","custom-edit-button",3,"click"],["aria-hidden","true",1,"pi","pi-user-edit"],["pButton","","title","Eliminar miembro",1,"p-button-danger","p-button-rounded",3,"click"],["aria-hidden","true",1,"pi","pi-trash",3,"ngStyle"],["pButton","","class","p-button-rounded p-button-text","title","Eliminar",3,"click",4,"ngIf"],["pButton","","title","Eliminar",1,"p-button-rounded","p-button-text",3,"click"],[1,"pi","pi-circle-fill"],["colspan","8"]],template:function(i,r){1&i&&(t.TgZ(0,"p-panel"),t.YNc(1,K,2,0,"ng-template",0),t.YNc(2,X,10,7,"ng-template",1),t.qZA())},dependencies:[l.O5,l.PC,g.Hq,Y.jx,m.iA,f.o,p.s]})}return e})(),W=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[u.Bz.forChild([{path:"",component:w}]),u.Bz]})}return e})(),q=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[l.ez,W,h.u5,A._8,m.U$,y.Xt,g.hJ,B.JH,f.j,M.A,Z.KZ,T.T,b.q4,_.kW,p.Q,j.q,d.EV,C.n,v.O,N.z,d.EV,p.Q,m.U$,C.n,U.D,v.O,F.Z_,G.S,x.DL,J.aw]})}return e})()}}]);