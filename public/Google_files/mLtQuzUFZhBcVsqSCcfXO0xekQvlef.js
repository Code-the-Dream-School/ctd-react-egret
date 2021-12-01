try{
s_a("LtQuz");

var s_M3h=s_o("LtQuz");
var s_XN=function(a){s_j.call(this,a.Ia);var b=this;this.wa=s_Nd(function(){return b.Da("pzCKEc").$b()});this.xd=s_Nd(function(){return b.Da("xl07Ob").$b()});this.oa=!1};s_m(s_XN,s_j);s_XN.Fa=s_j.Fa;s_=s_XN.prototype;s_.iVd=function(){this.oa=!0};s_.NEb=function(){this.oa=!1;this.xd().getAttribute("aria-expanded")?this.wy():(this.Yw(),s_N3h(this))};s_.hVd=function(a){switch(a.event.keyCode){case 38:this.Yw();this.xd().lastElementChild.firstElementChild.focus();break;case 40:this.Yw(),s_N3h(this)}};
s_.lVd=function(a){switch(a.event.keyCode){case 38:(a=a.targetElement.$b().parentElement.previousElementSibling)?("separator"===a.getAttribute("role")&&(a=a.previousElementSibling),a.firstElementChild.focus()):this.xd().lastElementChild.firstElementChild.focus();break;case 40:(a=a.targetElement.$b().parentElement.nextElementSibling)?("separator"===a.getAttribute("role")&&(a=a.nextElementSibling),a.firstElementChild.focus()):s_N3h(this);break;case 27:this.wa().focus()}};
s_.jVd=function(a){a=a.event.relatedTarget;a instanceof HTMLElement&&this.xd().contains(a)||this.oa||this.wy()};s_.Yw=function(){var a=this.wa().offsetHeight;this.xd().setAttribute("aria-expanded",!0);this.xd().style.bottom=String(a)+"px";s_Ns()?this.xd().style.left="0":this.xd().style.right="0";this.xd().style.display="block"};s_.wy=function(){this.xd().style.display="none";this.xd().removeAttribute("aria-expanded")};var s_N3h=function(a){a.xd().firstElementChild.firstElementChild.focus()};
s_H(s_XN.prototype,"Y48pVb",function(){return this.jVd});s_H(s_XN.prototype,"OEXC3c",function(){return this.lVd});s_H(s_XN.prototype,"QXPedb",function(){return this.hVd});s_H(s_XN.prototype,"FwYIgd",function(){return this.NEb});s_H(s_XN.prototype,"lgs1Pb",function(){return this.iVd});s_R(s_M3h,s_XN);

s_b();

}catch(e){_DumpException(e)}
try{
s_a("UFZhBc");

var s_pr=function(a){s_F.call(this,a.Ia);this.location=a.service.window.get().location};s_m(s_pr,s_F);s_pr.ub=s_F.ub;s_pr.Fa=function(){return{service:{window:s_Vi}}};s_pr.prototype.RM=function(){return this.location.port};var s_KGb=function(a){return a.location.hash?(a=a.location.href,a.substr(a.indexOf("#"))):""};s_pr.prototype.toString=function(){return this.location.toString()};s_Xi(s_ck,s_pr);

s_b();

}catch(e){_DumpException(e)}
try{
var s_Ryd=function(a){return s_Pyd("https://www.facebook.com/dialog/share",{app_id:"738026486351791",href:s_Qyd(a),hashtag:"#GoogleDoodle"})},s_Syd=function(a){return s_Pyd("https://twitter.com/intent/tweet",{text:a})},s_Qyd=function(a){var b=a;b&&0==b.indexOf("//")&&(b="https:"+a);return b},s_Pyd=function(a,b){var c=new s_pl,d;for(d in b)c.add(d,b[d]);a=new s_nl(a);a.Fs(c);return a.toString()};

}catch(e){_DumpException(e)}
try{
s_a("VsqSCc");

var s_Tyd=function(a){1!=a.ICb&&s_Cob(a,!0)},s_Uyd=function(){s_Kd.call(this);var a=this;this.Fc=new s_Wo("ddlshare-dialog");this.Fc.Zta=!1;s_Hob(this.Fc,!0);this.Fc.vhb=!0;s_Iob(this.Fc,null);s_Tyd(this.Fc);s_Eob(this.Fc);s_Bob(this.Fc,.95);this.Pc=new s_zj(this);this.oa=new s_Vl;s_cc("ddle","0",!0);s_$b("ddle",function(b){var c=a.Fc&&a.Fc.isVisible();"1"==b?c||a.show():a.close(null,!0)})};s_m(s_Uyd,s_Kd);s_=s_Uyd.prototype;s_.w8b=function(){return this.Fc};
s_.kc=function(){this.close();s_da(this.Pc);this.Pc=null;s_da(this.Fc);this.Fc=null;s_da(this.oa);this.oa=null;s_ac("ddle");s_Kd.prototype.kc.call(this)};s_.Tfb=function(){if(this.oa){var a=this.oa.getSize(),b=this.Fc.Da(),c=s_1h(b);s_Ph(b,Math.max(a.width/2-c.width/2,0),s_Lg(.3*(a.height-c.height),0,a.height-c.height))}};
s_.show=function(){this.Pc.listen(this.Fc,"hide",this.close);this.Pc.listen(this.Fc.c0(),"click",this.close);this.Pc.listen(this.oa,"resize",this.Tfb);this.Fc.setVisible(!0);this.Tfb();s_cc("ddle","1")};s_.close=function(a,b){this.Fc&&this.Fc.isVisible()&&this.Fc.setVisible(!1);this.Pc&&this.Pc.removeAll();b||s_cc("ddle","0",!0)};s_.fK=function(){return this.Fc};var s_Vyd=function(a,b,c,d,e,f,g){s_Uyd.call(this);this.title=a;this.description=b;this.Ca=c;this.Ea=d;this.Ba=e;this.Aa=f;this.wa=g;this.Fc.setTitle(this.title)};
s_m(s_Vyd,s_Uyd);s_Vyd.prototype.kc=function(){s_Uyd.prototype.kc.call(this)};
s_Vyd.prototype.show=function(){s_Uyd.prototype.show.call(this);var a=this,b=this.Fc.ii().querySelector("input.ddls-text");b&&(b.value=s_Qyd(this.Aa),this.Pc.listen(b,"click",function(){b.select()}),b.setAttribute("readonly",!0));s_Wyd(this,"ddls-fbb",s_Ryd(this.Ca),2);s_Wyd(this,"ddls-twb",s_Syd((this.description||this.title)+"\n"+s_Qyd(this.Ea)),3);var c=this.Fc.Da().querySelector(".ddls-emb");if(c){var d=s_Pyd("mailto:",{subject:this.title,body:(this.description||this.title)+"\n"+s_Qyd(this.Ba)});
this.Pc.listen(c,"click",function(){s_0b(document.location,d);a.close();s_Xyd(a,5)})}var e=this.Fc.Da().querySelector(".ddls-text");c=this.Fc.Da().querySelector(".ddls-copy");e&&c&&this.Pc.listen(c,"click",function(){if(s_je||s_ie||s_Pia){var f=document.createRange();e.contentEditable=!0;e.readOnly=!1;f.selectNodeContents(e);var g=window.getSelection();g.removeAllRanges();g.addRange(f);e.setSelectionRange(0,e.value.length);e.contentEditable=!1;e.readOnly=!0}else e.select();document.execCommand("copy");
s_Xyd(a,6)});this.Tfb()};var s_Wyd=function(a,b,c,d){(b=a.Fc.Da().querySelector("."+b))&&a.Pc.listen(b,"click",function(){window.open(c);a.close();s_Xyd(a,d)})},s_Xyd=function(a,b){google.log("doodle","sh,"+b+(a.wa?",ct:"+a.wa:""))},s_Yyd=null;
var s_Zyd=s_o("VsqSCc");
var s__yd=function(a){s_j.call(this,a.Ia);if(a=document.querySelector("#hplogo img")||document.querySelector("img#hplogo")){a=a.getAttribute("title")||a.getAttribute("alt");var b=a+" #GoogleDoodle",c=document.querySelector('meta[property="og:description"]');c&&(b=c.getAttribute("content"));var d=document.querySelector("input.ddl-shortlink");d=d&&d.value||"";c=(c=document.querySelector("input.ddl-facebooklink"))&&c.value||d;var e=document.querySelector("input.ddl-twitterlink");e=e&&e.value||d;var f=
document.querySelector("input.ddl-emaillink");f=f&&f.value||d;var g=document.querySelector("input.ddl-copylink");g=g&&g.value||d;d=null;var h=document.querySelector("#hplogo a")||s_Ug("hplogo").parentElement;h&&h.hasAttribute("href")&&(d=s_qg(h.getAttribute("href"),"ct")||null);s_Yyd=new s_Vyd(a,b,c,e,f,g,d)}};s_m(s__yd,s_j);s__yd.Fa=s_j.Fa;s__yd.prototype.Vg=function(){var a=document.getElementById("ddlshare");if(s_Yyd&&a){var b=s_Yyd.fK();s_Fb(b.ii(),s_pj(a.innerHTML));s_Yyd.show()}};
s_H(s__yd.prototype,"FL9aIe",function(){return this.Vg});s_R(s_Zyd,s__yd);

s_b();

}catch(e){_DumpException(e)}
try{
s_a("kQvlef");

var s_Nr=function(a){s_F.call(this,a.Ia);this.window=a.service.window;a=this.window.get().location;this.wa=new RegExp("^("+a.protocol+"//"+a.host+")?/(url|aclk)\\?.*&rct=j(&|$)");this.Me=null};s_m(s_Nr,s_F);s_Nr.ub=s_F.ub;s_Nr.Fa=function(){return{service:{window:s_Vi}}};s_Nr.prototype.oa=function(a){var b=void 0===b?!1:b;var c=!1;try{this.wa.test(a)&&(s_Fd("google.r",1,void 0),s_eIb(this).src=a,c=!0)}finally{c||(c=this.window.get().location,b?c.replace(a):c.href=a)}};
var s_Or=function(a,b,c){c=void 0===c?!1:c;var d=!1;try{var e=b instanceof s_Rd?s_Gb(b):s_ob(b);if(a.wa.test(e)){s_Fd("google.r",1,void 0);var f=b instanceof s_Rd?b:s_csa(e);s_Hb(s_eIb(a),f);d=!0}}finally{d||a.vJ(b,c)}},s_eIb=function(a){a.Me||(a.Me=s_8g("IFRAME"),a.Me.style.display="none",s_ah(a.Me));return a.Me};s_Nr.prototype.vJ=function(a,b){b=void 0===b?!1:b;a=a instanceof s_Rd?s__f(s_Gb(a)):a;var c=this.window.get().location;b?s_Kb(c,a):s_Jb(c,a)};s_Xi(s_jj,s_Nr);

s_b();

}catch(e){_DumpException(e)}
try{
var s_GVb=s_E("w3Ukrf"),s_HVb=s_E("gXfOqb"),s_IVb=s_E("n1Iq3"),s_JVb=s_E("x6BCfb"),s_KVb=s_E("BVfjhf");

}catch(e){_DumpException(e)}
try{
s_a("fXO0xe");

var s_It=function(a){s_j.call(this,a.Ia);this.rootElement=this.getRoot().el();this.Aa=s_sh(this.rootElement,"g-menu-item");this.Ca=this.getData("hbc").Va("");this.Ea=this.getData("htc").Va("");this.Ga=this.getData("bsdm").Db(!1);this.Ja=this.getData("tsdm").Db(!1);this.Ba=this.getData("btf").Db(!1);this.oa=this.Ga||this.Ba||this.Ja;this.wa=!1;this.Na=this.getData("spt").Db();this.Mn=a.service.location;this.Zd=a.service.navigation};s_m(s_It,s_j);s_It.Fa=function(){return{service:{location:s_pr,navigation:s_Nr}}};
s_=s_It.prototype;s_.fvb=function(){this.wAc()};s_.wAc=function(a){a=void 0===a?null:a;var b=document.getElementById("YUIDDb");this.Na&&b?(s_S(this.rootElement,{interactionContext:1}),b=new s_nl(b.getAttribute("data-spl")),null!=a&&s_ql(b,"cs",a),this.Zd.oa(b.toString())):(s_S(this.rootElement),a=(new s_nl(this.Mn.location.href)).ek("hl")||"",a=s_ql(s_ql(new s_nl("/preferences"),"prev",this.Mn.location.href),"hl",a).lJ("appearance"),this.Zd.oa(a.toString()))};
s_.ywb=function(){this.oa&&(s_C(this.Aa,{background:this.Ca,color:this.Ea}),this.trigger(s_sMb),this.wa=!0,s_h(document,"click",this.Cbc,{once:!0,passive:!0},this))};s_.Cbc=function(){this.oa&&s_h(document,"click",this.Swb,{once:!0,passive:!0},this)};s_.Swb=function(){this.oa&&(s_C(this.Aa,{background:"",color:""}),s_Ii(document,"click",this.Swb,{once:!0,passive:!0},this))};s_.DAd=function(){this.wa&&(this.wa=!1,this.trigger(s_KVb))};s_H(s_It.prototype,"aelxJb",function(){return this.DAd});
s_H(s_It.prototype,"MB7MSb",function(){return this.Swb});s_H(s_It.prototype,"fbAr9c",function(){return this.Cbc});s_H(s_It.prototype,"ggFCce",function(){return this.ywb});s_H(s_It.prototype,"ok5gFc",function(){return this.fvb});s_R(s_TAa,s_It);

s_b();

}catch(e){_DumpException(e)}
// Google Inc.
