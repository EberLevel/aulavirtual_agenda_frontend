"use strict";(self.webpackChunkapollo_ng=self.webpackChunkapollo_ng||[]).push([[4232],{4232:(h,s,l)=>{l.r(s),l.d(s,{ChartsDemoModule:()=>y});var d=l(177),n=l(8763),t=l(7019),u=l(7693),p=l(6525);let c=(()=>{class a{constructor(r){this.layoutService=r,this.subscription=this.layoutService.configUpdate$.subscribe(o=>{this.initCharts()})}ngOnInit(){this.initCharts()}initCharts(){const r=getComputedStyle(document.documentElement),o=r.getPropertyValue("--text-color"),e=r.getPropertyValue("--text-color-secondary"),i=r.getPropertyValue("--surface-border");this.barData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:r.getPropertyValue("--primary-500"),borderColor:r.getPropertyValue("--primary-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:r.getPropertyValue("--primary-200"),borderColor:r.getPropertyValue("--primary-200"),data:[28,48,40,19,86,27,90]}]},this.barOptions={plugins:{legend:{labels:{fontColor:o}}},scales:{x:{ticks:{color:e,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:e},grid:{color:i,drawBorder:!1}}}},this.pieData={labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[r.getPropertyValue("--indigo-500"),r.getPropertyValue("--purple-500"),r.getPropertyValue("--teal-500")],hoverBackgroundColor:[r.getPropertyValue("--indigo-400"),r.getPropertyValue("--purple-400"),r.getPropertyValue("--teal-400")]}]},this.pieOptions={plugins:{legend:{labels:{usePointStyle:!0,color:o}}}},this.lineData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:r.getPropertyValue("--primary-500"),borderColor:r.getPropertyValue("--primary-500"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:r.getPropertyValue("--primary-200"),borderColor:r.getPropertyValue("--primary-200"),tension:.4}]},this.lineOptions={plugins:{legend:{labels:{fontColor:o}}},scales:{x:{ticks:{color:e},grid:{color:i,drawBorder:!1}},y:{ticks:{color:e},grid:{color:i,drawBorder:!1}}}},this.polarData={datasets:[{data:[11,16,7,3],backgroundColor:[r.getPropertyValue("--indigo-500"),r.getPropertyValue("--purple-500"),r.getPropertyValue("--teal-500"),r.getPropertyValue("--orange-500")],label:"My dataset"}],labels:["Indigo","Purple","Teal","Orange"]},this.polarOptions={plugins:{legend:{labels:{color:o}}},scales:{r:{grid:{color:i}}}},this.radarData={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:r.getPropertyValue("--indigo-400"),pointBackgroundColor:r.getPropertyValue("--indigo-400"),pointBorderColor:r.getPropertyValue("--indigo-400"),pointHoverBackgroundColor:o,pointHoverBorderColor:r.getPropertyValue("--indigo-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:r.getPropertyValue("--purple-400"),pointBackgroundColor:r.getPropertyValue("--purple-400"),pointBorderColor:r.getPropertyValue("--purple-400"),pointHoverBackgroundColor:o,pointHoverBorderColor:r.getPropertyValue("--purple-400"),data:[28,48,40,19,96,27,100]}]},this.radarOptions={plugins:{legend:{labels:{fontColor:o}}},scales:{r:{grid:{color:e}}}}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#t=this.\u0275fac=function(o){return new(o||a)(t.rXU(u.Y))};static#r=this.\u0275cmp=t.VBU({type:a,selectors:[["ng-component"]],decls:27,vars:12,consts:[[1,"grid","p-fluid"],[1,"col-12","lg:col-6"],[1,"card"],["type","line",3,"data","options"],[1,"card","flex","flex-column","align-items-center"],[1,"text-left","w-full"],["type","pie",3,"data","options"],["type","polarArea",3,"data","options"],["type","bar",3,"data","options"],["type","doughnut",3,"data","options"],["type","radar",3,"data","options"]],template:function(o,e){1&o&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),t.EFF(4,"Linear Chart"),t.k0s(),t.nrm(5,"p-chart",3),t.k0s(),t.j41(6,"div",4)(7,"h5",5),t.EFF(8,"Pie Chart"),t.k0s(),t.nrm(9,"p-chart",6),t.k0s(),t.j41(10,"div",4)(11,"h5",5),t.EFF(12,"Polar Area Chart"),t.k0s(),t.nrm(13,"p-chart",7),t.k0s()(),t.j41(14,"div",1)(15,"div",2)(16,"h5"),t.EFF(17,"Bar Chart"),t.k0s(),t.nrm(18,"p-chart",8),t.k0s(),t.j41(19,"div",4)(20,"h5",5),t.EFF(21,"Doughnut Chart"),t.k0s(),t.nrm(22,"p-chart",9),t.k0s(),t.j41(23,"div",4)(24,"h5",5),t.EFF(25,"Radar Chart"),t.k0s(),t.nrm(26,"p-chart",10),t.k0s()()()),2&o&&(t.R7$(5),t.Y8G("data",e.lineData)("options",e.lineOptions),t.R7$(4),t.Y8G("data",e.pieData)("options",e.pieOptions),t.R7$(4),t.Y8G("data",e.polarData)("options",e.polarOptions),t.R7$(5),t.Y8G("data",e.barData)("options",e.barOptions),t.R7$(4),t.Y8G("data",e.pieData)("options",e.pieOptions),t.R7$(4),t.Y8G("data",e.radarData)("options",e.radarOptions))},dependencies:[p.X],encapsulation:2})}return a})(),g=(()=>{class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#r=this.\u0275mod=t.$C({type:a});static#e=this.\u0275inj=t.G2t({imports:[n.iI.forChild([{path:"",component:c}]),n.iI]})}return a})(),y=(()=>{class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#r=this.\u0275mod=t.$C({type:a});static#e=this.\u0275inj=t.G2t({imports:[d.MD,g,p.F]})}return a})()}}]);