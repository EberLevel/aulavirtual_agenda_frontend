"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[3052],{3052:(y,m,e)=>{e.r(m),e.d(m,{CiclosModule:()=>H});var o=e(6814),v=e(4104),c=e(6223),f=e(9552),h=e(707),i=e(3714),S=e(6804),r=e(4480),a=e(4055),p=e(3965),d=e(1230),C=e(6760),T=e(6651),A=e(7902),E=e(6022),Z=e(3722),z=e(1494),b=e(6218),D=e(3259),I=e(3904),M=e(1214),t=e(8926),R=e(3859),x=e(5219),B=e(3999);function F(n,U){1&n&&(t.TgZ(0,"span",2),t._uU(1,"Ciclos Academicos"),t.qZA())}function Y(n,U){if(1&n){const l=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"span",6)(4,"p-dropdown",7),t.NdJ("ngModelChange",function(u){t.CHM(l);const g=t.oxw();return t.KtG(g.tipoDocumentoSeleccionado=u)}),t.qZA(),t.TgZ(5,"label",8),t._uU(6,"Selecione carrera "),t.qZA(),t.TgZ(7,"small",9),t._uU(8,"Campo obligatorio * "),t.qZA()()(),t.TgZ(9,"div",5)(10,"span",10),t._UZ(11,"i",11),t.TgZ(12,"input",12),t.NdJ("ngModelChange",function(u){t.CHM(l);const g=t.oxw();return t.KtG(g.nrociclos=u)}),t.qZA(),t.TgZ(13,"label",13),t._uU(14,"Ciclos"),t.qZA()(),t.TgZ(15,"small",9),t._uU(16,"Campo obligatorio *"),t.qZA()()()(),t.TgZ(17,"div",14),t._UZ(18,"button",15)(19,"button",16),t.qZA()}if(2&n){const l=t.oxw();t.xp6(4),t.Q6J("autoDisplayFirst",!1)("options",l.cantciclos)("ngModel",l.tipoDocumentoSeleccionado),t.xp6(8),t.Q6J("ngModel",l.nrociclos)}}let O=(()=>{class n{constructor(l,s,u,g){this.layoutService=l,this.router=s,this.primengConfig=u,this.translate=g,this.nrociclos=null}get dark(){return"light"!==this.layoutService.config.colorScheme}ngOnInit(){this.cantciclos=[{name:"Administraci\xf3n",value:1,code:"NY"},{name:"Computaci\xf3n e Informatica",value:2,code:"RM"},{name:"Marqueting",value:3,code:"NY"},{name:"Enfermeria",value:4,code:"RM"},{name:"Agropecuario",value:5,code:"NY"}]}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(R.P),t.Y36(M.F0),t.Y36(x.b4),t.Y36(B.sK))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-ciclos"]],decls:3,vars:0,consts:[["pTemplate","header"],["pTemplate","content"],[1,"text-primary","font-semibold","text-xl"],[1,"row"],[1,"grid","p-fluid"],[1,"field","md:col-6"],[1,"p-float-label"],["inputId","dropdown","optionLabel","name",3,"autoDisplayFirst","options","ngModel","ngModelChange"],["for","dropdown"],[2,"color","brown"],[1,"p-float-label","p-input-icon-left"],[1,"pi","pi-user-edit"],["type","number","id","nrociclos","pInputText","",3,"ngModel","ngModelChange"],["for","nrociclos"],[1,"row","mb-5","text-right"],["pButton","","label","Guardar","icon","pi pi-plus","id","btnGuardar",1,"p-button-success","mr-2"],["pButton","","label","Cancelar","icon","pi pi-times","id","btnCancelar",1,"p-button-danger"]],template:function(s,u){1&s&&(t.TgZ(0,"p-panel"),t.YNc(1,F,2,0,"ng-template",0),t.YNc(2,Y,20,4,"ng-template",1),t.qZA())},dependencies:[c.Fj,c.wV,c.JJ,c.On,h.Hq,x.jx,i.o,p.Lt,d.s]})}return n})(),J=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[M.Bz.forChild([{path:"",component:O}]),M.Bz]})}return n})(),H=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[o.ez,J,c.u5,C._8,E.Xt,h.hJ,A.JH,i.j,b.A,S.KZ,r.T,a.q4,p.kW,d.Q,T.q,Z.O,D.z,v.EV,f.U$,z.n,I.D]})}return n})()},6218:(y,m,e)=>{e.d(m,{A:()=>h,g:()=>f});var o=e(8926),v=e(6814),c=e(6223);let f=(()=>{class i{el;ngModel;control;cd;autoResize;onResize=new o.vpe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(r,a,p,d){this.el=r,this.ngModel=a,this.control=p,this.cd=d}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewChecked(){this.updateState()}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(r){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(r){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(r||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(a){return new(a||i)(o.Y36(o.SBq),o.Y36(c.On,8),o.Y36(c.a5,8),o.Y36(o.sBO))};static \u0275dir=o.lG2({type:i,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(a,p){1&a&&o.NdJ("input",function(C){return p.onInput(C)}),2&a&&o.ekj("p-filled",p.filled)("p-inputtextarea-resizable",p.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return i})(),h=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=o.oAB({type:i});static \u0275inj=o.cJS({imports:[v.ez]})}return i})()}}]);