(self.webpackChunkKamiKaze=self.webpackChunkKamiKaze||[]).push([[175],{3175:function(t,n,e){"use strict";e.r(n),e.d(n,{HomeModule:function(){return x}});var i=e(1116),o=e(3319),s=e(7238),c=e(529),l=e(8619),r=e(2693),a=e(7757);let d=(()=>{class t{constructor(t,n){this.http=t,this.us=n,this.url=c.N.ApiServerUrl,this.param=new URLSearchParams}ngOnInit(){}getAll(){return this.http.get(`${this.url}v1/condominio`)}}return t.\u0275fac=function(n){return new(n||t)(l.LFG(r.eN),l.LFG(a.f))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function g(t,n){if(1&t&&(l.TgZ(0,"div",15),l.TgZ(1,"div",16),l.TgZ(2,"div",17),l.TgZ(3,"div"),l.TgZ(4,"h1"),l._uU(5),l.qZA(),l.TgZ(6,"p"),l._uU(7),l.qZA(),l.qZA(),l.TgZ(8,"button",18),l._uU(9,"Acessar"),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&t){const t=n.$implicit;l.xp6(1),l.Jzz("background-image: url(",t.imagem,");"),l.xp6(4),l.Oqu(t.nome),l.xp6(2),l.Oqu(t.descricao)}}function u(t,n){if(1&t){const t=l.EpF();l.TgZ(0,"a",19),l.NdJ("click",function(){return l.CHM(t),l.oxw(2).plusSlides(-1)}),l._uU(1,"\u276e"),l.qZA()}}function h(t,n){if(1&t){const t=l.EpF();l.TgZ(0,"a",20),l.NdJ("click",function(){return l.CHM(t),l.oxw(2).plusSlides(1)}),l._uU(1,"\u276f"),l.qZA()}}function p(t,n){if(1&t){const t=l.EpF();l.TgZ(0,"span",21),l.NdJ("click",function(){const n=l.CHM(t).$implicit;return l.oxw(2).currentSlide(n.id)}),l.qZA()}}function m(t,n){if(1&t&&(l.TgZ(0,"div",8),l.YNc(1,g,10,5,"div",9),l.YNc(2,u,2,0,"a",10),l.YNc(3,h,2,0,"a",11),l.TgZ(4,"div",12),l.TgZ(5,"div",13),l.YNc(6,p,1,0,"span",14),l.qZA(),l.qZA(),l.qZA()),2&t){const t=l.oxw();l.xp6(1),l.Q6J("ngForOf",t.condominios),l.xp6(1),l.Q6J("ngIf",1==t.isPopulate),l.xp6(1),l.Q6J("ngIf",1==t.isPopulate),l.xp6(3),l.Q6J("ngForOf",t.condominios)}}const f=[{path:"",component:(()=>{class t{constructor(t){this.sv=t,this.condominios=[],this.slideIndex=0,this.isPopulate=!1,this.src=c.N.src}ngOnInit(){this.isPopulate=!1,this.showSlides(this.slideIndex=1),setTimeout(()=>{this.next()},500),setInterval(()=>{this.next()},5500),this.getAll()}next(){this.slideIndex===this.condominios.length?(this.showSlides(this.slideIndex),this.slideIndex=1):(this.showSlides(this.slideIndex),this.slideIndex++)}plusSlides(t){this.showSlides(this.slideIndex+=t)}currentSlide(t){this.showSlides(this.slideIndex=t)}showSlides(t){let n,e=document.getElementsByClassName("slide-content"),i=document.getElementsByClassName("dot");if(e.length>0){for(t>e.length&&(this.slideIndex=1),t<1&&(this.slideIndex=e.length),n=0;n<e.length;n++)e[n].style.display="none",e[n].style.opacity="0";for(n=0;n<i.length;n++)i[n].className=i[n].className.replace(" active","");e[this.slideIndex-1].style.display="block",e[this.slideIndex-1].style.opacity="1",i[this.slideIndex-1].className+=" active"}}getAll(){this.sv.getAll().subscribe(t=>{this.condominios=t,this.isPopulate=!0,(0,s.uG)(t)})}}return t.\u0275fac=function(n){return new(n||t)(l.Y36(d))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-home"]],decls:17,vars:2,consts:[[1,"nav-bar"],["id","check1","type","checkbox",1,"menu__toggle"],["for","check1",1,"menu__btn"],["alt","",1,"logo-menu",3,"src"],[1,"menu"],["routerLink","/luzy-controll-app/portaria"],["routerLink","/luzy-controll-app/login"],["class","slide-responsive",4,"ngIf"],[1,"slide-responsive"],["class","slide-content fade",4,"ngFor","ngForOf"],["class","prev",3,"click",4,"ngIf"],["class","next",3,"click",4,"ngIf"],[2,"text-align","center"],[1,"circle"],["class","dot",3,"click",4,"ngFor","ngForOf"],[1,"slide-content","fade"],[1,"wrapper"],[1,"message"],[1,"btn","btn-outline-primary"],[1,"prev",3,"click"],[1,"next",3,"click"],[1,"dot",3,"click"]],template:function(t,n){1&t&&(l.TgZ(0,"nav",0),l._UZ(1,"input",1),l.TgZ(2,"label",2),l._UZ(3,"span"),l.qZA(),l._UZ(4,"img",3),l.TgZ(5,"ul",4),l.TgZ(6,"li"),l._uU(7,"In\xedcio"),l.qZA(),l.TgZ(8,"li"),l._uU(9,"Informa\xe7\xe3o"),l.qZA(),l.TgZ(10,"li"),l._uU(11,"Contacto"),l.qZA(),l.TgZ(12,"li",5),l._uU(13,"Portaria"),l.qZA(),l.TgZ(14,"li",6),l._uU(15,"Morador"),l.qZA(),l.qZA(),l.qZA(),l.YNc(16,m,7,4,"div",7)),2&t&&(l.xp6(4),l.MGl("src","",n.src,"LuziTec.gif",l.LSH),l.xp6(12),l.Q6J("ngIf",1==n.isPopulate))},directives:[o.rH,i.O5,i.sg],styles:["#home-work[_ngcontent-%COMP%]{margin:0;padding:0;display:block;width:100vw;height:100vh}#home-work[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{height:150px;padding:15px;background-color:#002fff}#home-work[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], #home-work[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{width:100%;box-shadow:0 0 .25em rgba(67,71,85,.27),0 .25em 1em rgb(90 125 188/5%)}#home-work[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{height:100%;max-height:77%;background-color:hsla(240,0%,60%,.712);text-align:center}#home-work[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .group-div[_ngcontent-%COMP%]{width:100%;height:auto;display:flex;position:relative;background-color:aqua}#home-work[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .group-div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:250px;height:150px;display:inline-flex;align-content:center;position:relative;background-color:#8a2be2;margin:2px}"]}),t})()},{path:"",redirectTo:"/home",pathMatch:"full"},{path:"**",component:e(3901).w}];let Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[o.Bz.forChild(f)],o.Bz]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[i.ez,Z]]}),t})()}}]);