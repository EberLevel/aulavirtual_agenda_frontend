"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[3244],{1996:(T,d,r)=>{r.r(d),r.d(d,{FileAppModule:()=>N});var a=r(6814),C=r(6223),g=r(707),f=r(4480),c=r(9552),x=r(1122),_=r(3722),v=r(9252),t=r(8926),y=r(9862);let Z=(()=>{class o{constructor(e){this.http=e}getFiles(){return this.http.get("assets/demo/data/file-management.json").toPromise().then(e=>e.files).then(e=>e)}getMetrics(){return this.http.get("assets/demo/data/file-management.json").toPromise().then(e=>e.metrics).then(e=>e)}getFoldersSmall(){return this.http.get("assets/demo/data/file-management.json").toPromise().then(e=>e.folders_small).then(e=>e)}getFoldersLarge(){return this.http.get("assets/demo/data/file-management.json").toPromise().then(e=>e.folders_large).then(e=>e)}static#t=this.\u0275fac=function(n){return new(n||o)(t.LFG(y.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac})}return o})();var b=r(4104),U=r(1214),A=r(3859),u=r(5219);const F=["buttonEl"];function w(o,p){1&o&&(t.TgZ(0,"div",8),t._UZ(1,"i",9),t.TgZ(2,"span",10),t._uU(3,"Upload Files"),t.qZA(),t.TgZ(4,"span",11),t._uU(5,"Drop or select files"),t.qZA()())}function S(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"div",14),t.NdJ("mouseenter",function(){const l=t.CHM(e).$implicit,s=t.oxw(3);return t.KtG(s.onImageMouseOver(l))})("mouseleave",function(){const l=t.CHM(e).$implicit,s=t.oxw(3);return t.KtG(s.onImageMouseLeave(l))}),t._UZ(1,"img",15),t.TgZ(2,"button",16,17),t.NdJ("click",function(i){const s=t.CHM(e).$implicit,m=t.oxw(3);return t.KtG(m.removeImage(i,s))}),t.qZA()()}if(2&o){const e=p.$implicit;t.xp6(1),t.Q6J("src",e.objectURL,t.LSH)("alt",e.name),t.xp6(1),t.Q6J("id",e.name)}}function q(o,p){if(1&o&&(t.TgZ(0,"div",12),t.YNc(1,S,4,3,"div",13),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.uploadedFiles)}}function O(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"div",5),t.NdJ("click",function(){t.CHM(e),t.oxw();const i=t.MAs(3);return t.KtG(i.advancedFileInput.nativeElement.click())}),t.YNc(1,w,6,0,"div",6),t.YNc(2,q,2,1,"div",7),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",!e.uploadedFiles.length),t.xp6(1),t.Q6J("ngIf",e.uploadedFiles.length)}}let M=(()=>{class o{constructor(e){this.messageService=e,this.uploadedFiles=[]}onUpload(e){for(let n of e.files)this.uploadedFiles.push(n);this.messageService.add({severity:"success",summary:"Success",detail:"File uploaded successfully"})}onImageMouseOver(e){this.buttonEl.toArray().forEach(n=>{n.nativeElement.id===e.name&&(n.nativeElement.style.display="flex")})}onImageMouseLeave(e){this.buttonEl.toArray().forEach(n=>{n.nativeElement.id===e.name&&(n.nativeElement.style.display="none")})}removeImage(e,n){e.stopPropagation(),this.uploadedFiles=this.uploadedFiles.filter(i=>i!==n)}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(u.ez))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-file-uploader"]],viewQuery:function(n,i){if(1&n&&t.Gf(F,5),2&n){let l;t.iGM(l=t.CRH())&&(i.buttonEl=l)}},features:[t._Bn([u.ez])],decls:5,vars:5,consts:[["key","fu"],[1,"card"],["name","demo[]","url","./upload.php","accept","image/*",1,"w-full",3,"customUpload","multiple","showUploadButton","showCancelButton","auto","onUpload","onSelect"],["fileUploader",""],["pTemplate","content"],[1,"w-full","py-3",2,"cursor","copy",3,"click"],["class","h-full flex flex-column justify-content-center align-items-center",4,"ngIf"],["class","flex flex-wrap gap-5",4,"ngIf"],[1,"h-full","flex","flex-column","justify-content-center","align-items-center"],[1,"pi","pi-upload","text-900","text-2xl","mb-3"],[1,"font-bold","text-900","text-xl","mb-3"],[1,"font-medium","text-600","text-md","text-center"],[1,"flex","flex-wrap","gap-5"],["class","h-full relative w-7rem h-7rem border-3 border-transparent border-round hover:bg-primary transition-duration-100 cursor-auto","style","padding: 1px;",3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"h-full","relative","w-7rem","h-7rem","border-3","border-transparent","border-round","hover:bg-primary","transition-duration-100","cursor-auto",2,"padding","1px",3,"mouseenter","mouseleave"],[1,"w-full","h-full","border-round","shadow-2",3,"src","alt"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-primary","text-sm","absolute","justify-content-center","align-items-center","cursor-pointer",2,"top","-10px","right","-10px","display","none",3,"id","click"],["buttonEl",""]],template:function(n,i){1&n&&(t._UZ(0,"p-toast",0),t.TgZ(1,"div",1)(2,"p-fileUpload",2,3),t.NdJ("onUpload",function(s){return i.onUpload(s)})("onSelect",function(s){return i.onUpload(s)}),t.YNc(4,O,3,2,"ng-template",4),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("customUpload",!0)("multiple",!0)("showUploadButton",!0)("showCancelButton",!1)("auto",!0))},dependencies:[a.sg,a.O5,g.Hq,u.jx,f.H,b.FN,_.p],encapsulation:2})}return o})();function J(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"div",26)(1,"div",27)(2,"div",28)(3,"span",29),t._uU(4),t.qZA(),t.TgZ(5,"div")(6,"button",30),t.NdJ("click",function(i){t.CHM(e);const l=t.MAs(8);return t.KtG(l.toggle(i))}),t.qZA(),t._UZ(7,"p-menu",31,32),t.qZA()(),t.TgZ(9,"div")(10,"div",33),t._UZ(11,"div",34),t.qZA(),t.TgZ(12,"div",35)(13,"span",36),t._uU(14),t.qZA(),t.TgZ(15,"span",36),t._uU(16),t.qZA()()()()()}if(2&o){const e=p.$implicit,n=t.oxw();t.xp6(4),t.Oqu(e.title),t.xp6(2),t.Q6J("icon",e.icon),t.xp6(1),t.Q6J("popup",!0)("model",n.menuitems),t.xp6(3),t.Q6J("ngClass",e.color),t.xp6(1),t.Q6J("ngClass",e.fieldColor),t.xp6(3),t.Oqu(e.files),t.xp6(2),t.Oqu(e.fileSize)}}function B(o,p){if(1&o&&(t.TgZ(0,"div",37)(1,"div",38)(2,"div",11),t._UZ(3,"i",39),t.TgZ(4,"span",40),t._uU(5),t.qZA()(),t.TgZ(6,"span",41),t._uU(7),t.qZA()()()),2&o){const e=p.$implicit;t.xp6(3),t.Q6J("ngClass",e.icon),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.size)}}function P(o,p){1&o&&(t.TgZ(0,"tr")(1,"th",42),t._uU(2,"Name "),t._UZ(3,"p-sortIcon",43),t.qZA(),t.TgZ(4,"th",44),t._uU(5,"Date "),t._UZ(6,"p-sortIcon",45),t.qZA(),t.TgZ(7,"th",46),t._uU(8,"File Size "),t._UZ(9,"p-sortIcon",43),t.qZA(),t._UZ(10,"th",47),t.qZA())}function j(o,p){if(1&o&&(t.TgZ(0,"tr")(1,"td")(2,"div",11),t._UZ(3,"i"),t.TgZ(4,"span"),t._uU(5),t.qZA()()(),t.TgZ(6,"td")(7,"span"),t._uU(8),t.qZA()(),t.TgZ(9,"td")(10,"span"),t._uU(11),t.qZA()(),t.TgZ(12,"td",48),t._UZ(13,"button",49)(14,"button",50),t.qZA()()),2&o){const e=p.$implicit;t.xp6(3),t.Tol("text-xl text-primary mr-2 "+e.icon),t.xp6(2),t.Oqu(e.name),t.xp6(3),t.Oqu(e.date),t.xp6(3),t.Oqu(e.fileSize)}}const Q=function(){return{width:"75%"}};let E=(()=>{class o{constructor(e,n){this.fileService=e,this.layoutService=n,this.files=[],this.metrics=[],this.folders=[],this.menuitems=[],this.subscription=this.layoutService.configUpdate$.subscribe(i=>{this.initChart()})}ngOnInit(){this.fileService.getFiles().then(e=>this.files=e),this.fileService.getMetrics().then(e=>this.metrics=e),this.fileService.getFoldersLarge().then(e=>this.folders=e),this.initChart(),this.menuitems=[{label:"View",icon:"pi pi-search"},{label:"Refresh",icon:"pi pi-refresh"}]}initChart(){const e=getComputedStyle(document.documentElement),n=e.getPropertyValue("--text-color");this.chartPlugins=[{beforeDraw:function(i){let l=i.ctx,s=i.width,m=i.height,z=l.fillStyle;l.restore(),l.font="1.5rem sans-serif",l.textBaseline="middle";let h="Free Space",R=Math.round((s-l.measureText(h).width)/2),G=(m+i.chartArea.top)/2.25,$=Math.round((s-l.measureText(h).width)/2.1),L=(m+i.chartArea.top)/1.75;l.fillStyle=i.config.data.datasets[0].backgroundColor[0],l.fillText(h,R,G),l.fillText("50GB / 80GB",$,L),l.fillStyle=z,l.save()}}],this.fileChart={datasets:[{data:[300,100],backgroundColor:[e.getPropertyValue("--primary-600"),e.getPropertyValue("--primary-100")],hoverBackgroundColor:[e.getPropertyValue("--primary-700"),e.getPropertyValue("--primary-200")],borderColor:"transparent",fill:!0}]},this.fileChartOptions={animation:{duration:0},cutout:"90%",plugins:{legend:{labels:{color:n}}}}}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(Z),t.Y36(A.P))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],decls:50,vars:11,consts:[[1,"grid"],["class","col-12 md:col-6 lg:col-3",4,"ngFor","ngForOf"],[1,"col-12","md:col-5","xl:col-3"],[1,"card"],[1,"text-900","text-xl","font-semibold","mb-3"],["type","doughnut","id","country-chart",3,"plugins","data","options"],[1,"mt-5","flex","gap-3"],["pButton","","pRipple","","icon","pi pi-search","label","Details",1,"p-button-outlined","flex-1"],["pButton","","pRipple","","icon","pi pi-upload","label","Upgrade",1,"flex-1"],[1,"list-none","p-0","m-0"],[1,"p-3","mb-3","flex","align-items-center","justify-content-between","cursor-pointer","border-round","bg-indigo-50","text-indigo-900"],[1,"flex","align-items-center"],[1,"pi","pi-image","text-2xl","mr-3"],[1,"ext-lg","font-medium"],[1,"text-lg","font-bold"],[1,"p-3","mb-3","flex","align-items-center","justify-content-between","cursor-pointer","border-round","bg-purple-50","text-purple-900"],[1,"pi","pi-file","text-2xl","mr-3"],[1,"p-3","flex","align-items-center","justify-content-between","cursor-pointer","border-round","bg-teal-50","text-teal-900"],[1,"pi","pi-video","text-2xl","mr-3"],[1,"card","p-0"],[1,"col-12","md:col-7","xl:col-9"],["class","col-12 md:col-6 xl:col-4",4,"ngFor","ngForOf"],["responsiveLayout","scroll",3,"value","rows","paginator"],["dt",""],["pTemplate","header"],["pTemplate","body"],[1,"col-12","md:col-6","lg:col-3"],[1,"card","h-full"],[1,"flex","align-items-center","justify-content-between","mb-3"],[1,"text-900","text-xl","font-semibold"],["pButton","","pRipple","",1,"p-button-text","p-button-sm","p-button-rounded",3,"icon","click"],["appendTo","body",3,"popup","model"],["menu",""],[1,"border-round",2,"height","6px",3,"ngClass"],[1,"h-full","border-round",2,"width","34%",3,"ngClass"],[1,"flex","align-item-center","justify-content-between"],[1,"text-900","mt-3","text-md","font-medium"],[1,"col-12","md:col-6","xl:col-4"],[1,"p-3","border-1","surface-border","flex","align-items-center","justify-content-between","hover:surface-100","cursor-pointer","border-round"],[1,"text-2xl","mr-3",3,"ngClass"],[1,"text-900","text-lg","font-medium"],[1,"text-600","text-lg","font-semibold"],["pSortableColumn","name",1,"white-space-nowrap",2,"min-width","12rem"],["field","name"],["pSortableColumn","date",1,"white-space-nowrap",2,"min-width","12rem"],["field","date"],["pSortableColumn","fileSize",1,"white-space-nowrap",2,"min-width","12rem"],[2,"width","10rem"],[1,"text-center"],["pButton","","pRipple","","icon","pi pi-times",1,"p-button-danger","p-button-text","p-button-rounded","mr-2"],["pButton","","pRipple","","icon","pi pi-search",1,"p-button-text","p-button-rounded"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.YNc(1,J,17,8,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4),t._uU(5,"Account Storage"),t.qZA(),t._UZ(6,"p-chart",5),t.TgZ(7,"div",6),t._UZ(8,"button",7)(9,"button",8),t.qZA()(),t.TgZ(10,"div",3)(11,"div",4),t._uU(12,"Categories"),t.qZA(),t.TgZ(13,"ul",9)(14,"li",10)(15,"div",11),t._UZ(16,"i",12),t.TgZ(17,"span",13),t._uU(18,"Images"),t.qZA()(),t.TgZ(19,"span",14),t._uU(20,"85"),t.qZA()(),t.TgZ(21,"li",15)(22,"div",11),t._UZ(23,"i",16),t.TgZ(24,"span",13),t._uU(25,"Documents"),t.qZA()(),t.TgZ(26,"span",14),t._uU(27,"231"),t.qZA()(),t.TgZ(28,"li",17)(29,"div",11),t._UZ(30,"i",18),t.TgZ(31,"span",13),t._uU(32,"Videos"),t.qZA()(),t.TgZ(33,"span",14),t._uU(34,"40"),t.qZA()()()(),t.TgZ(35,"div",19),t._UZ(36,"app-file-uploader"),t.qZA()(),t.TgZ(37,"div",20)(38,"div",3)(39,"div",4),t._uU(40,"Folders"),t.qZA(),t.TgZ(41,"div",0),t.YNc(42,B,8,3,"div",21),t.qZA()(),t.TgZ(43,"div",3)(44,"div",4),t._uU(45,"Recent Uploads"),t.qZA(),t.TgZ(46,"p-table",22,23),t.YNc(48,P,11,0,"ng-template",24),t.YNc(49,j,15,5,"ng-template",25),t.qZA()()()()),2&n&&(t.xp6(1),t.Q6J("ngForOf",i.metrics),t.xp6(5),t.Akn(t.DdM(10,Q)),t.Q6J("plugins",i.chartPlugins)("data",i.fileChart)("options",i.fileChartOptions),t.xp6(36),t.Q6J("ngForOf",i.folders),t.xp6(4),t.Q6J("value",i.files)("rows",8)("paginator",!0))},dependencies:[a.mk,a.sg,g.Hq,u.jx,f.H,c.iA,c.lQ,c.fz,x.v2,v.C,M],styles:["[_nghost-%COMP%]     .p-fileupload-content{border:0 none}[_nghost-%COMP%]     .p-fileupload-row{display:none}[_nghost-%COMP%]     .p-progressbar{display:none}[_nghost-%COMP%]     .p-fileupload{padding:0}[_nghost-%COMP%]     .p-fileupload-buttonbar{display:none}"]})}return o})(),I=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[U.Bz.forChild([{path:"",component:E}]),U.Bz]})}return o})(),N=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({providers:[Z],imports:[a.ez,I,C.u5,g.hJ,f.T,b.EV,c.U$,x.$9,_.O,v.S]})}return o})()},4552:(T,d,r)=>{r.d(d,{l:()=>a});const a={now:()=>(a.delegate||Date).now(),delegate:void 0}}}]);