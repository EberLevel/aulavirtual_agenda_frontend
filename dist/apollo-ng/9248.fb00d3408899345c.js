"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[9248],{9248:(K,k,a)=>{a.r(k),a.d(k,{TaskListAppModule:()=>H});var c=a(177),m=a(9417),f=a(8763),e=a(7019),b=a(4412),D=a(1413),F=a(1626);let p=(()=>{class i{constructor(t){this.http=t,this.dialogConfig={visible:!1,header:"",newTask:!1},this.tasks=[],this.taskSource=new b.t(this.tasks),this.selectedTask=new D.B,this.dialogSource=new b.t(this.dialogConfig),this.taskSource$=this.taskSource.asObservable(),this.selectedTask$=this.selectedTask.asObservable(),this.dialogSource$=this.dialogSource.asObservable(),this.http.get("assets/demo/data/tasks.json").toPromise().then(s=>s.data).then(s=>{this.tasks=s,this.taskSource.next(s)})}addTask(t){this.tasks=this.tasks.includes(t)?this.tasks.map(s=>s.id===t.id?t:s):[...this.tasks,t],this.taskSource.next(this.tasks)}removeTask(t){this.tasks=this.tasks.filter(s=>s.id!==t),this.taskSource.next(this.tasks)}onTaskSelect(t){this.selectedTask.next(t)}markAsCompleted(t){this.tasks=this.tasks.map(s=>s.id===t.id?t:s),this.taskSource.next(this.tasks)}showDialog(t,s){this.dialogConfig={visible:!0,header:t,newTask:s},this.dialogSource.next(this.dialogConfig)}closeDialog(){this.dialogConfig={visible:!1},this.dialogSource.next(this.dialogConfig)}static#e=this.\u0275fac=function(s){return new(s||i)(e.KVO(F.Qq))};static#t=this.\u0275prov=e.jDH({token:i,factory:i.\u0275fac})}return i})();var d=a(1141),h=a(563),g=a(5779),R=a(4333),C=a(2242),v=a(1142),T=a(612),_=a(9998),M=a(8537),S=a(6781);function G(i,r){if(1&i&&(e.j41(0,"div",20),e.nrm(1,"img",21),e.j41(2,"span",22),e.EFF(3),e.k0s()()),2&i){const t=r.$implicit;e.R7$(1),e.Mz_("src","assets/demo/images/avatar/",t.image,"",e.B4B),e.Y8G("alt",t.name),e.R7$(2),e.JRh(t.name)}}function I(i,r){if(1&i&&(e.j41(0,"div",23),e.nrm(1,"img",21),e.j41(2,"span",22),e.EFF(3),e.k0s()()),2&i){const t=r.$implicit;e.R7$(1),e.Mz_("src","assets/demo/images/avatar/",t.image,"",e.B4B),e.Y8G("alt",t.name),e.R7$(2),e.JRh(t.name)}}const E=function(){return{height:"150px"}},L=function(){return{height:"2.5rem"}};let w=(()=>{class i{constructor(t,s,n){this.memberService=t,this.messageService=s,this.taskService=n,this.members=[],this.filteredMembers=[],this.dialogConfig={header:"",visible:!1},this.subscription=this.taskService.selectedTask$.subscribe(o=>this.task=o),this.dialogSubscription=this.taskService.dialogSource$.subscribe(o=>{this.dialogConfig=o,this.dialogConfig.newTask&&this.resetTask()})}ngOnInit(){this.memberService.getMembers().then(t=>this.members=t),this.resetTask()}filterMembers(t){let s=[],n=t.query;for(let o=0;o<this.members.length;o++){let l=this.members[o];0==l.name?.toLowerCase().indexOf(n.toLowerCase())&&s.push(l)}this.filteredMembers=s}save(){this.task.id=Math.floor(1e3*Math.random()),this.messageService.add({severity:"success",summary:"Success",detail:`Task "${this.task.name}" created successfully.`}),this.taskService.addTask(this.task),this.taskService.closeDialog()}cancelTask(){this.resetTask(),this.taskService.closeDialog()}resetTask(){this.task={id:this.task&&this.task.id?this.task.id:Math.floor(1e3*Math.random()),status:"Waiting"}}ngOnDestroy(){this.subscription.unsubscribe()}static#e=this.\u0275fac=function(s){return new(s||i)(e.rXU(R.G),e.rXU(g.bg),e.rXU(p))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-create-task"]],features:[e.Jv_([g.bg])],decls:29,vars:18,consts:[["styleClass","mx-3 sm:mx-0 sm:w-full md:w-8 lg:w-6","contentStyleClass","border-round-bottom border-top-1 surface-border p-0",3,"header","visible","modal","dismissableMask","visibleChange"],[1,"p-4"],[1,"grid","p-fluid","formgrid"],[1,"col-12","field"],["for","name",1,"text-900","font-semibold"],["id","name","type","text","placeholder","Title","pInputText","",3,"ngModel","ngModelChange"],["for","description",1,"text-900","font-semibold"],[3,"ngModel","ngModelChange"],[1,"col-6","field","mt-0"],["for","start",1,"text-900","font-semibold"],["appendTo","body","dateFormat","yy-mm-dd","inputId","start","placeholder","Start Date",3,"showTime","ngModel","ngModelChange"],["for","end",1,"text-900","font-semibold"],["appendTo","body","dateFormat","yy-mm-dd","inputId","end","placeholder","Due Date",3,"showTime","ngModel","ngModelChange"],["for","members",1,"text-900","font-semibold"],["appendTo","body","inputId","members","field","name","placeholder","Choose team members",3,"ngModel","suggestions","multiple","inputStyle","ngModelChange","completeMethod"],["pTemplate","selectedItem"],["pTemplate","item"],[1,"col-12","flex","justify-content-end","mt-4"],["pButton","","pRipple","","icon","pi pi-times","label","Cancel",1,"p-button-outlined","w-8rem","mr-3",3,"click"],["pButton","","pRipple","","icon","pi pi-check","label","Save",1,"p-button-primary","w-8rem",3,"click"],[1,"flex","align-items-center"],[1,"h-2rem","w-2rem","mr-2",3,"src","alt"],[1,"text-900","font-medium"],[1,"flex","align-items-center","border-round"]],template:function(s,n){1&s&&(e.nrm(0,"p-toast"),e.j41(1,"p-dialog",0),e.bIt("visibleChange",function(l){return n.dialogConfig.visible=l}),e.j41(2,"div",1)(3,"div",2)(4,"div",3)(5,"label",4),e.EFF(6,"Task Name"),e.k0s(),e.j41(7,"input",5),e.bIt("ngModelChange",function(l){return n.task.name=l}),e.k0s()(),e.j41(8,"div",3)(9,"label",6),e.EFF(10,"Description"),e.k0s(),e.j41(11,"p-editor",7),e.bIt("ngModelChange",function(l){return n.task.description=l}),e.k0s()(),e.j41(12,"div",8)(13,"label",9),e.EFF(14,"Start Date"),e.k0s(),e.j41(15,"p-calendar",10),e.bIt("ngModelChange",function(l){return n.task.startDate=l}),e.k0s()(),e.j41(16,"div",8)(17,"label",11),e.EFF(18,"Due Date"),e.k0s(),e.j41(19,"p-calendar",12),e.bIt("ngModelChange",function(l){return n.task.endDate=l}),e.k0s()(),e.j41(20,"div",3)(21,"label",13),e.EFF(22,"Add Team Member"),e.k0s(),e.j41(23,"p-autoComplete",14),e.bIt("ngModelChange",function(l){return n.task.members=l})("completeMethod",function(l){return n.filterMembers(l)}),e.DNE(24,G,4,3,"ng-template",15),e.DNE(25,I,4,3,"ng-template",16),e.k0s()(),e.j41(26,"div",17)(27,"button",18),e.bIt("click",function(){return n.cancelTask()}),e.k0s(),e.j41(28,"button",19),e.bIt("click",function(){return n.save()}),e.k0s()()()()()),2&s&&(e.R7$(1),e.Y8G("header",n.dialogConfig.header||"")("visible",n.dialogConfig.visible)("modal",!0)("dismissableMask",!0),e.R7$(6),e.Y8G("ngModel",n.task.name),e.R7$(4),e.Aen(e.lJ4(16,E)),e.Y8G("ngModel",n.task.description),e.R7$(4),e.Y8G("showTime",!1)("ngModel",n.task.startDate),e.R7$(4),e.Y8G("showTime",!1)("ngModel",n.task.endDate),e.R7$(4),e.Y8G("ngModel",n.task.members)("suggestions",n.filteredMembers)("multiple",!0)("inputStyle",e.lJ4(17,L)))},dependencies:[m.me,m.BC,m.vS,d._f,g.Ei,C.S,v.KE,T.Vv,_.y8,M.j9,S.l,h.n],encapsulation:2})}return i})();var x=a(9114),$=a(9667),j=a(5430),y=a(5144);const Y=["menu"];function B(i,r){if(1&i&&(e.j41(0,"span",18),e.nrm(1,"i",19),e.EFF(2),e.k0s()),2&i){const t=e.XpG().$implicit;e.R7$(2),e.JRh(t.comments)}}function O(i,r){if(1&i&&(e.j41(0,"span",18),e.nrm(1,"i",20),e.EFF(2),e.k0s()),2&i){const t=e.XpG().$implicit;e.R7$(2),e.JRh(t.attachments)}}function N(i,r){if(1&i&&(e.j41(0,"span",21),e.nrm(1,"i",22),e.EFF(2),e.k0s()),2&i){const t=e.XpG().$implicit,s=e.XpG();e.R7$(2),e.JRh(s.parseDate(t.startDate))}}function X(i,r){1&i&&e.nrm(0,"p-avatar",23),2&i&&e.Mz_("image","assets/demo/images/avatar/",r.$implicit.image,"")}const z=function(){return{"background-color":"#ffffff",color:"#212121",border:"2px solid var(--surface-border)"}};function A(i,r){if(1&i&&e.nrm(0,"p-avatar",24),2&i){const t=e.XpG().$implicit;e.Aen(e.lJ4(3,z)),e.Mz_("label","+ ",t.members.length-4,"")}}const J=function(i){return{"line-through":i}};function U(i,r){if(1&i){const t=e.RV6();e.j41(0,"li",3)(1,"div",4)(2,"p-checkbox",5),e.bIt("onChange",function(n){const l=e.eBV(t).$implicit,u=e.XpG();return e.Njj(u.onCheckboxChange(n,l))})("ngModelChange",function(n){const l=e.eBV(t).$implicit;return e.Njj(l.completed=n)}),e.k0s(),e.j41(3,"label",6),e.EFF(4),e.k0s()(),e.j41(5,"div",7)(6,"div",8),e.DNE(7,B,3,1,"span",9),e.DNE(8,O,3,1,"span",9),e.DNE(9,N,3,1,"span",10),e.k0s(),e.j41(10,"div",11)(11,"p-avatarGroup",12),e.DNE(12,X,1,1,"p-avatar",13),e.nI1(13,"slice"),e.DNE(14,A,1,4,"p-avatar",14),e.k0s(),e.j41(15,"button",15),e.bIt("click",function(n){const l=e.eBV(t).$implicit,u=e.XpG();return e.Njj(u.toggleMenu(n,l))}),e.k0s(),e.nrm(16,"p-menu",16,17),e.k0s()()()}if(2&i){const t=r.$implicit,s=e.XpG();e.R7$(2),e.Y8G("binary",!0)("ngModel",t.completed)("inputId",t.id.toString()),e.R7$(1),e.Y8G("ngClass",e.eq3(16,J,t.completed)),e.R7$(1),e.JRh(t.name),e.R7$(3),e.Y8G("ngIf",t.comments),e.R7$(1),e.Y8G("ngIf",t.attachments),e.R7$(1),e.Y8G("ngIf",t.startDate),e.R7$(3),e.Y8G("ngForOf",e.brH(13,12,t.members,0,4)),e.R7$(2),e.Y8G("ngIf",t&&t.members&&t.members.length>4),e.R7$(2),e.Y8G("popup",!0)("model",s.menuItems)}}let V=(()=>{class i{constructor(t){this.taskService=t,this.menuItems=[]}ngOnInit(){this.menuItems=[{label:"Edit",icon:"pi pi-pencil",command:()=>this.onEdit()},{label:"Delete",icon:"pi pi-trash",command:()=>this.handleDelete()}]}parseDate(t){return new Date(t).toUTCString().split(" ").slice(1,3).join(" ")}handleDelete(){this.taskService.removeTask(this.clickedTask.id)}toggleMenu(t,s){this.clickedTask=s,this.menu.toggle(t)}onEdit(){this.taskService.onTaskSelect(this.clickedTask),this.taskService.showDialog("Edit Task",!1)}onCheckboxChange(t,s){t.originalEvent.stopPropagation(),s.completed=t.checked,this.taskService.markAsCompleted(s)}static#e=this.\u0275fac=function(s){return new(s||i)(e.rXU(p))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-task-list"]],viewQuery:function(s,n){if(1&s&&e.GBs(Y,5),2&s){let o;e.mGM(o=e.lsd())&&(n.menu=o.first)}},inputs:{taskList:"taskList",title:"title"},decls:5,vars:2,consts:[[1,"text-900","font-semibold","text-lg","mt-5","mb-3","border-bottom-1","surface-border","py-3"],[1,"list-none","p-0","m-0"],["class","flex flex-column gap-3 md:flex-row md:align-items-center p-2 border-bottom-1 surface-border",4,"ngFor","ngForOf"],[1,"flex","flex-column","gap-3","md:flex-row","md:align-items-center","p-2","border-bottom-1","surface-border"],[1,"flex","align-items-center","flex-1"],[3,"binary","ngModel","inputId","onChange","ngModelChange"],["for","task.id",1,"font-medium","ml-2",2,"word-break","break-word",3,"ngClass"],[1,"flex","flex-1","gap-3","flex-column","sm:flex-row","sm:justify-content-between"],[1,"flex","align-items-center"],["class","flex align-items-center font-semibold mr-3",4,"ngIf"],["class","flex align-items-center font-semibold white-space-nowrap",4,"ngIf"],[1,"flex","align-items-center","sm:justify-content-end"],["styleClass","mr-3"],["size","large","shape","circle",3,"image",4,"ngFor","ngForOf"],["shape","circle","size","large",3,"label","style",4,"ngIf"],["pButton","","pRipple","","type","button","icon","pi pi-ellipsis-v",1,"p-button-rounded","p-button-text","z-3","ml-auto","sm:ml-0",3,"click"],["styleClass","w-8rem",3,"popup","model"],["menu",""],[1,"flex","align-items-center","font-semibold","mr-3"],[1,"pi","pi-comment","mr-2"],[1,"pi","pi-paperclip","mr-2"],[1,"flex","align-items-center","font-semibold","white-space-nowrap"],[1,"pi","pi-clock","mr-2"],["size","large","shape","circle",3,"image"],["shape","circle","size","large",3,"label"]],template:function(s,n){1&s&&(e.j41(0,"div")(1,"div",0),e.EFF(2),e.k0s(),e.j41(3,"ul",1),e.DNE(4,U,18,18,"li",2),e.k0s()()),2&s&&(e.R7$(2),e.JRh(n.title),e.R7$(2),e.Y8G("ngForOf",n.taskList))},dependencies:[c.YU,c.Sq,c.bT,m.BC,m.vS,d._f,x.e,$.Z,j.Sc,y.W1,h.n,c.P9],encapsulation:2,changeDetection:0})}return i})(),P=(()=>{class i{constructor(t){this.taskService=t,this.todo=[],this.completed=[],this.subscription=this.taskService.taskSource$.subscribe(s=>this.categorize(s))}categorize(t){this.todo=t.filter(s=>!0!==s.completed),this.completed=t.filter(s=>s.completed)}ngOnDestroy(){this.subscription.unsubscribe()}showDialog(){this.taskService.showDialog("Create Task",!0)}static#e=this.\u0275fac=function(s){return new(s||i)(e.rXU(p))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["ng-component"]],decls:8,vars:2,consts:[[1,"card"],[1,"flex","justify-content-between","align-items-center","mb-5"],[1,"text-900","text-xl","font-semibold"],["pButton","","pRipple","","icon","pi pi-plus","label","Create Task",1,"p-button-outlined","font-semibold",3,"click"],["title","ToDo",3,"taskList"],["title","Completed",3,"taskList"]],template:function(s,n){1&s&&(e.j41(0,"div",0)(1,"div",1)(2,"span",2),e.EFF(3,"Task List"),e.k0s(),e.j41(4,"button",3),e.bIt("click",function(){return n.showDialog()}),e.k0s()(),e.nrm(5,"app-task-list",4)(6,"app-task-list",5),e.k0s(),e.nrm(7,"app-create-task")),2&s&&(e.R7$(5),e.Y8G("taskList",n.todo),e.R7$(1),e.Y8G("taskList",n.completed))},dependencies:[d._f,h.n,w,V],encapsulation:2})}return i})(),Q=(()=>{class i{static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.$C({type:i});static#s=this.\u0275inj=e.G2t({imports:[f.iI.forChild([{path:"",component:P}]),f.iI]})}return i})(),H=(()=>{class i{static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.$C({type:i});static#s=this.\u0275inj=e.G2t({providers:[p],imports:[c.MD,m.YN,Q,d.tm,C.u,v.sv,T.rO,_.MB,M.$$,x.m,$.t,j.q4,y.Mk,S.P,h.Z]})}return i})()}}]);