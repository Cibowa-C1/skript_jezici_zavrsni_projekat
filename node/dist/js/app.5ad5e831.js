(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01ec":function(t,e,n){"use strict";n("bd8d")},"034f":function(t,e,n){"use strict";n("85ec")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("div",[1==t.logged?n("router-link",{attrs:{to:"/home"}},[t._v("Home")]):t._e()],1)]),n("router-view")],1)},r=[],s=n("5530"),o=n("2f62"),c={name:"App",methods:Object(s["a"])({},Object(o["b"])(["load_vinyls","load_cds"])),mounted:function(){this.load_vinyls(),this.load_cds()}},l=c,u=(n("034f"),n("2877")),d=Object(u["a"])(l,a,r,!1,null,null,null),m=d.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Header"),n("b-container",[n("b-row",{staticClass:"p-3"},[1==t.admin?n("b-button",{attrs:{variant:"secondary",size:"lg"},on:{click:t.newVinyl}},[t._v("New Vinyl")]):t._e()],1),n("b-row",[n("b-col",{attrs:{cm:"6"}},[n("VinylList")],1)],1)],1),n("b-container",[n("HeaderT"),n("b-row",{staticClass:"p-3"},[1==t.admin?n("b-button",{attrs:{variant:"secondary",size:"lg"},on:{click:t.newCD}},[t._v("New CD")]):t._e()],1),n("b-row",[n("b-col",{attrs:{cm:"6"}},[n("CDList")],1)],1),n("b-row",{staticClass:"p-3"},[n("b-button",{attrs:{variant:"secondary",size:"lg"},on:{click:t.logOut}},[t._v("Log Out")])],1)],1)],1)},h=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-jumbotron",{attrs:{header:"Vinyl disks",lead:"Currently available: "+t.vinyls.length}})],1)},v=[],g={name:"Header",computed:Object(s["a"])({},Object(o["c"])(["vinyls"]))},y=g,_=Object(u["a"])(y,b,v,!1,null,"73c727e2",null),w=_.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table table-dark table-striped"},[t._m(0),n("tbody",t._l(t.vinyls,(function(e){return n("tr",[n("td",{on:{click:function(n){return t.editVinyl(e)}}},[t._v(" "+t._s(e.title)+" ")]),n("td",{on:{click:function(n){return t.editVinyl(e)}}},[t._v(" "+t._s(e.artist)+" ")]),n("td",{on:{click:function(n){return t.editVinyl(e)}}},[t._v(" "+t._s(e.rating)+" ")]),n("td",[1==t.admin?n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(n){return t.delete_vinyl(e.id)}}},[t._v("Delete")]):t._e()])])})),0)])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticStyle:{background:"black"}},[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Title")]),n("th",{attrs:{scope:"col"}},[t._v("Artist")]),n("th",{attrs:{scope:"col"}},[t._v("Rating /100")]),n("th",{attrs:{scope:"col"}})])])}],x={name:"VinylList",computed:Object(s["a"])({},Object(o["c"])(["vinyls","admin"])),data:function(){return{fields:[{key:"title"},{key:"artist"},{key:"rating"}]}},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["delete_vinyl"])),{},{editVinyl:function(t,e,n){pe.push({path:"/vinyl/".concat(t.id)})}})},k=x,C=(n("b436"),Object(u["a"])(k,j,O,!1,null,null,null)),T=C.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("b-container",[n("b-row",[n("b-col",{attrs:{cm:"6"}},[t.edit?n("div",[n("EditVinyl",{attrs:{title:t.vinyl.title,artist:t.vinyl.artist,rating:t.vinyl.rating}})],1):n("div",[t.vinyls.length?n("ShowVinyl",{attrs:{vinyl:t.vinyl}}):t._e()],1)])],1),n("b-row",[n("b-col",{staticStyle:{"margin-top":"10px"},attrs:{cm:"2"}},[1==t.admin?n("b-button",{attrs:{variant:"secondary",size:"lg"},domProps:{innerHTML:t._s(t.edit?"Cancel":"Edit")},on:{click:t.toggleEdit}}):t._e()],1)],1),n("b-row",[n("b-col",{staticStyle:{"margin-top":"10px"},attrs:{cm:"2"}},[1==t.admin?n("b-button",{attrs:{variant:"secondary",size:"lg"},on:{click:t.cancelAction}},[t._v("Home")]):t._e()],1)],1)],1)],1)},S=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-form",[n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{sm:"2",offset:"2"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Title"},model:{value:t.newTitle,callback:function(e){t.newTitle=e},expression:"newTitle"}})],1),n("b-col",{attrs:{sm:"2",offset:"2"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Artist"},model:{value:t.newArtist,callback:function(e){t.newArtist=e},expression:"newArtist"}})],1)],1),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{sm:"2",offset:"2"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Rating"},model:{value:t.newRating,callback:function(e){t.newRating=e},expression:"newRating"}})],1)],1),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{sm:"1"}},[n("b-button",{attrs:{variant:"secondary",size:"lg"},on:{click:t.addNew}},[t._v("Save")])],1)],1)],1)],1)},$=[],D=(n("d3b7"),n("ddb0"),n("498a"),{name:"EditVinyl",props:{title:{type:String,default:""},artist:{type:String,default:""},rating:{type:String,default:""}},data:function(){return{newTitle:"",newArtist:"",newRating:""}},mounted:function(){this.newTitle=this.title,this.newArtist=this.artist,this.newRating=this.rating},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["new_vinyl","change_vinyl"])),{},{addNew:function(){var t=n("f0b1"),e=t.object().keys({title:t.string().trim().required(),artist:t.string().trim().required(),rating:t.string().trim().required()}),i=(t.object().keys({id:t.number().min(1).max(50).required()}),JSON.stringify({title:this.newTitle,artist:this.newArtist,rating:this.newRating})),a=t.validate(i,e),r=a.error;r?alert(r.details[0].message):(this.$route.params.id?this.change_vinyl({id:this.$route.params.id,vin:i}):this.new_vinyl(i),this.newTitle="",this.newArtist="",this.newRating="",pe.push({path:"/home"}))}})}),R=D,V=Object(u["a"])(R,A,$,!1,null,"73e6d2f0",null),H=V.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"2"}},[n("rating",{attrs:{for:"title"}},[t._v("Title:")])],1),n("b-col",{attrs:{sm:"10"}},[n("p",{staticStyle:{"text-align":"left"},attrs:{id:"title"}},[t._v(t._s(t.vinyl.title))])])],1),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{sm:"2"}},[n("rating",{attrs:{for:"artist"}},[t._v("Artist:")])],1),n("b-col",{attrs:{sm:"10"}},[n("p",{staticStyle:{"text-align":"left"},attrs:{id:"Artist"}},[t._v(t._s(t.vinyl.artist))])])],1),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{sm:"2"}},[n("rating",{attrs:{for:"rating"}},[t._v("Rating:")])],1),n("b-col",{attrs:{sm:"10"}},[n("p",{staticStyle:{"text-align":"left"},attrs:{id:"rating"}},[t._v(t._s(t.vinyl.rating))])])],1)],1)},P=[],L={name:"ShowVinyl",props:{vinyl:Object}},q=L,z=Object(u["a"])(q,N,P,!1,null,null,null),U=z.exports,J={name:"Vinyl",components:{Header:w,EditVinyl:H,ShowVinyl:U},data:function(){return{edit:!1}},computed:Object(s["a"])(Object(s["a"])({},Object(o["c"])(["vinyls","admin"])),{},{vinyl:function(){for(var t=0;t<this.vinyls.length;t++)if(this.vinyls[t].id===parseInt(this.$route.params.id))return this.vinyls[t]}}),methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["load_vinyls"])),{},{toggleEdit:function(){this.edit=!this.edit},cancelAction:function(){pe.push({path:"/home"})}})},M=J,I=Object(u["a"])(M,E,S,!1,null,"30d9560a",null),W=I.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table table-dark table-striped"},[t._m(0),n("tbody",t._l(t.cds,(function(e){return n("tr",[n("td",{on:{click:function(n){return t.editCD(e)}}},[t._v(" "+t._s(e.title)+" ")]),n("td",{on:{click:function(n){return t.editCD(e)}}},[t._v(" "+t._s(e.artist)+" ")]),n("td",{on:{click:function(n){return t.editCD(e)}}},[t._v(" "+t._s(e.rating)+" ")]),n("td",[1==t.admin?n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(n){return t.delete_cd(e.id)}}},[t._v("Delete")]):t._e()])])})),0)])},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticStyle:{background:"black"}},[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Title")]),n("th",{attrs:{scope:"col"}},[t._v("Artist")]),n("th",{attrs:{scope:"col"}},[t._v("Rating /100")]),n("th",{attrs:{scope:"col"}})])])}],G={name:"CDList",computed:Object(s["a"])({},Object(o["c"])(["cds","admin"])),data:function(){return{fields:[{key:"title"},{key:"artist"},{key:"rating"}]}},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["delete_cd"])),{},{editCD:function(t){pe.push({path:"/cd/".concat(t.id)})}})},K=G,Q=(n("01ec"),Object(u["a"])(K,F,B,!1,null,null,null)),X=Q.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-jumbotron",{attrs:{header:"CD showcase",lead:"Currently available: "+t.cds.length}})],1)},Z=[],tt={name:"Header",computed:Object(s["a"])({},Object(o["c"])(["cds"]))},et=tt,nt=Object(u["a"])(et,Y,Z,!1,null,"7ff537dc",null),it=nt.exports,at={name:"home",components:{Header:w,HeaderT:it,VinylList:T,CDList:X},computed:Object(s["a"])({},Object(o["c"])(["admin"])),methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["logOut"])),{},{newVinyl:function(){pe.push("/edit")},newCD:function(){pe.push("/editCD")}})},rt=at,st=Object(u["a"])(rt,p,h,!1,null,null,null),ot=st.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("HeaderT"),n("b-container",[n("b-row",[n("b-col",{attrs:{cm:"6"}},[t.edit?n("div",[n("EditCD",{attrs:{title:t.cd.title,artist:t.cd.artist,rating:t.cd.rating}})],1):n("div",[t.cds.length?n("ShowCD",{attrs:{cd:t.cd}}):t._e()],1)])],1),n("b-row",[n("b-col",{staticStyle:{"margin-top":"10px"},attrs:{cm:"2"}},[1==t.admin?n("b-button",{attrs:{variant:"secondary",size:"lg"},domProps:{innerHTML:t._s(t.edit?"Cancel":"Edit")},on:{click:t.toggleEdit}}):t._e()],1)],1),n("b-row",[n("b-col",{staticStyle:{"margin-top":"10px"},attrs:{cm:"2"}},[1==t.admin?n("b-button",{attrs:{variant:"secondary",size:"lg"},on:{click:t.cancelAction}},[t._v("Home")]):t._e()],1)],1)],1)],1)},lt=[],ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-form",[n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{sm:"2",offset:"2"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Title"},model:{value:t.newTitle,callback:function(e){t.newTitle=e},expression:"newTitle"}})],1),n("b-col",{attrs:{sm:"2",offset:"2"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Artist"},model:{value:t.newArtist,callback:function(e){t.newArtist=e},expression:"newArtist"}})],1)],1),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{sm:"2",offset:"2"}},[n("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{placeholder:"Rating"},model:{value:t.newRating,callback:function(e){t.newRating=e},expression:"newRating"}})],1)],1),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{sm:"1"}},[n("b-button",{attrs:{variant:"secondary",size:"lg"},on:{click:t.addNew}},[t._v("Save")])],1)],1)],1)],1)},dt=[],mt={name:"EditCD",props:{title:{type:String,default:""},artist:{type:String,default:""},rating:{type:String,default:""}},data:function(){return{newTitle:"",newArtist:"",newRating:""}},mounted:function(){this.newTitle=this.title,this.newArtist=this.artist,this.newRating=this.rating},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["new_cd","change_cd"])),{},{addNew:function(){var t=n("f0b1"),e=t.object().keys({title:t.string().trim().required(),artist:t.string().trim().required(),rating:t.string().trim().required()}),i=(t.object().keys({id:t.number().min(1).max(50).required()}),JSON.stringify({title:this.newTitle,artist:this.newArtist,rating:this.newRating})),a=t.validate(i,e),r=a.error;r?alert(r.details[0].message):(this.$route.params.id?this.change_cd({id:this.$route.params.id,ceedee:i}):this.new_cd(i),this.newTitle="",this.newArtist="",this.newRating="",pe.push({path:"/home"}))}})},ft=mt,pt=Object(u["a"])(ft,ut,dt,!1,null,"6ab3aae4",null),ht=pt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"2"}},[n("rating",{attrs:{for:"title"}},[t._v("Title:")])],1),n("b-col",{attrs:{sm:"10"}},[n("p",{staticStyle:{"text-align":"left"},attrs:{id:"title"}},[t._v(t._s(t.cd.title))])])],1),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{sm:"2"}},[n("rating",{attrs:{for:"artist"}},[t._v("Artist:")])],1),n("b-col",{attrs:{sm:"10"}},[n("p",{staticStyle:{"text-align":"left"},attrs:{id:"Artist"}},[t._v(t._s(t.cd.artist))])])],1),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{sm:"2"}},[n("rating",{attrs:{for:"rating"}},[t._v("Rating:")])],1),n("b-col",{attrs:{sm:"10"}},[n("p",{staticStyle:{"text-align":"left"},attrs:{id:"rating"}},[t._v(t._s(t.cd.rating))])])],1)],1)},vt=[],gt={name:"ShowCD",props:{cd:Object}},yt=gt,_t=Object(u["a"])(yt,bt,vt,!1,null,null,null),wt=_t.exports,jt={name:"CD",components:{HeaderT:it,EditCD:ht,ShowCD:wt},data:function(){return{edit:!1}},computed:Object(s["a"])(Object(s["a"])({},Object(o["c"])(["cds","admin"])),{},{cd:function(){for(var t=0;t<this.cds.length;t++)if(this.cds[t].id===parseInt(this.$route.params.id))return this.cds[t]}}),methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["load_cds"])),{},{toggleEdit:function(){this.edit=!this.edit},cancelAction:function(){pe.push({path:"/home"})}})},Ot=jt,xt=Object(u["a"])(Ot,ct,lt,!1,null,"ac533502",null),kt=xt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Header"),n("b-container",[n("b-row",[n("b-col",{attrs:{cm:"6"}},[n("EditVinyl")],1)],1)],1)],1)},Tt=[],Et={name:"NewVinyl",components:{Header:w,EditVinyl:H}},St=Et,At=Object(u["a"])(St,Ct,Tt,!1,null,"26d5d544",null),$t=At.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login"}},[n("h1",[t._v("Login")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.loginF}},[t._v("login")])])},Rt=[],Vt=n("f0b1"),Ht=Vt.object().keys({username:Vt.string().min(2).max(40).required(),password:Vt.string().min(2).max(15).required()}),Nt={name:"Login",data:function(){return{username:"",password:""}},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["login","isAdmin"])),{},{loginF:function(){var t=JSON.stringify({username:this.username,password:this.password}),e=Ht.validate({username:this.username,password:this.password}),n=e.error;e.value;n?alert(n):(this.login(t),this.isAdmin(this.username))}})},Pt=Nt,Lt=(n("7018"),Object(u["a"])(Pt,Dt,Rt,!1,null,"2a897601",null)),qt=Lt.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"register"}},[n("h1",[t._v(" Registration ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{attrs:{type:"button"},on:{click:t.addNew}},[t._v("Register")])])},Ut=[],Jt=n("f0b1"),Mt=Jt.object().keys({username:Jt.string().min(5).max(40).required(),password:Jt.string().min(5).max(15).required()}),It={name:"Register",data:function(){return{username:"",password:""}},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["newUser"])),{},{addNew:function(){var t=JSON.stringify({username:this.username,password:this.password}),e=Mt.validate({username:this.username,password:this.password}),n=e.error;e.value;n?(console.log(n),alert(n)):this.newUser(t)}})},Wt=It,Ft=(n("593b"),Object(u["a"])(Wt,zt,Ut,!1,null,"5e0a51fe",null)),Bt=Ft.exports,Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Welcome"),n("b-container",[n("b-row",[n("b-col",{attrs:{cm:"6"}})],1)],1)],1)},Kt=[],Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-jumbotron",{attrs:{header:"Welcome!",lead:"Login or register if you don't have an account!"}}),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{sm:"1",offset:"5"}},[n("b-button",{attrs:{variant:"secondary",size:"lg"},on:{click:t.login}},[t._v("Login")])],1),n("b-col",{attrs:{sm:"1",offset:"0"}},[n("b-button",{attrs:{variant:"secondary",size:"lg"},on:{click:t.register}},[t._v("Register")])],1)],1)],1)},Xt=[],Yt={name:"Welcome",methods:{login:function(){pe.push("/login")},register:function(){pe.push("/register")}}},Zt=Yt,te=Object(u["a"])(Zt,Qt,Xt,!1,null,"7b1c0431",null),ee=te.exports,ne={name:"welcome",components:{Welcome:ee}},ie=ne,ae=Object(u["a"])(ie,Gt,Kt,!1,null,"64a09cab",null),re=ae.exports,se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HeaderT"),n("b-container",[n("b-row",[n("b-col",{attrs:{cm:"6"}},[n("EditCD")],1)],1)],1)],1)},oe=[],ce={name:"NewCD",components:{HeaderT:it,EditCD:ht}},le=ce,ue=Object(u["a"])(le,se,oe,!1,null,"15aa8bcc",null),de=ue.exports;i["default"].use(f["a"]);var me=[{path:"/home",name:"home",component:ot},{path:"/edit",name:"NewVinyl",component:$t},{path:"/vinyl/:id",name:"vinyl",component:W},{path:"/login",name:"login",component:qt},{path:"/register",name:"register",component:Bt},{path:"/",name:"welcome",component:re},{path:"/editCD",name:"NewCD",component:de},{path:"/cd/:id",name:"cd",component:kt}],fe=new f["a"]({mode:"history",base:"/",routes:me}),pe=fe;n("a434");i["default"].use(o["a"]);var he=new o["a"].Store({state:{users:[],vinyls:[],cds:[],admin:!1,logged:!1},mutations:{setUser:function(t,e){t.user=e},set_admin:function(t,e){t.admin=e},set_vinyls:function(t,e){t.vinyls=e},add_vinyl:function(t,e){t.vinyls.push(e)},remove_vinyl:function(t,e){for(var n=0;n<t.vinyls.length;n++)if(t.vinyls[n].id===e){t.vinyls.splice(n,1);break}},update_vinyl:function(t,e){for(var n=0;n<t.vinyls.length;n++)if(t.vinyls[n].id===parseInt(e.id)){t.vinyls[n].title=e.vinyl.title,t.vinyls[n].artist=e.vinyl.artist,t.vinyls[n].rating=e.vinyl.rating;break}},set_cds:function(t,e){t.cds=e},add_cd:function(t,e){t.cds.push(e)},remove_cd:function(t,e){for(var n=0;n<t.cds.length;n++)if(t.cds[n].id===e){t.cds.splice(n,1);break}},update_cd:function(t,e){for(var n=0;n<t.cds.length;n++)if(t.cds[n].id===parseInt(e.id)){t.cds[n].title=e.cds.title,t.cds[n].artist=e.cds.artist,t.cds[n].rating=e.cds.rating;break}}},actions:{isAdmin:function(t,e){var n=t.commit;fetch("http://localhost:81/api/isAdmin/"+e,{method:"get"}).then((function(t){return t.json()})).then((function(t){n("set_admin",t)}))},login:function(t,e){var n=t.commit;fetch("http://localhost:81/api/login",{method:"post",headers:{"Content-Type":"application/json"},body:e}).then((function(t){if(!t.ok)throw t;pe.push("/home")})).then((function(t){n("setUser",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},logOut:function(){pe.push("/")},goHome:function(){pe.push("/home")},newUser:function(t,e){t.commit;fetch("http://localhost:81/api/register",{method:"post",headers:{"Content-Type":"application/json"},body:e}).then((function(t){if(!t.ok)throw t;pe.push("/")})).then((function(t){})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},load_vinyls:function(t){var e=t.commit;fetch("http://localhost:81/api/vinyls",{method:"get"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){e("set_vinyls",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},delete_vinyl:function(t,e){var n=t.commit;fetch("http://localhost:81/api/vinyl/"+e,{method:"delete"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){n("remove_vinyl",t.id)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},new_vinyl:function(t,e){var n=t.commit;fetch("http://localhost:81/api/vinyl",{method:"post",headers:{"Content-Type":"application/json"},body:e}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){n("add_vinyl",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},change_vinyl:function(t,e){var n=t.commit;fetch("http://localhost:81/api/vinyl/"+e.id,{method:"put",headers:{"Content-Type":"application/json"},body:e.vin}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){n("update_vinyl",{id:e.id,vin:t})})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},load_cds:function(t){var e=t.commit;fetch("http://localhost:81/api/cds",{method:"get"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){e("set_cds",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},delete_cd:function(t,e){var n=t.commit;fetch("http://localhost:81/api/cd/"+e,{method:"delete"}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){n("remove_cd",t.id)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},new_cd:function(t,e){var n=t.commit;fetch("http://localhost:81/api/cd",{method:"post",headers:{"Content-Type":"application/json"},body:e}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){n("add_cd",t)})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))},change_cd:function(t,e){var n=t.commit;fetch("http://localhost:81/api/cd/"+e.id,{method:"put",headers:{"Content-Type":"application/json"},body:e.ceedee}).then((function(t){if(!t.ok)throw t;return t.json()})).then((function(t){n("update_cd",{id:e.id,ceedee:t})})).catch((function(t){"function"===typeof t.text?t.text().then((function(t){alert(t)})):alert(t)}))}}}),be=n("5f5b");n("f9e3"),n("2dd8");i["default"].use(be["a"]),i["default"].config.productionTip=!1,new i["default"]({router:pe,store:he,render:function(t){return t(m)}}).$mount("#app")},"593b":function(t,e,n){"use strict";n("9486")},6:function(t,e){},7:function(t,e){},7018:function(t,e,n){"use strict";n("ffbf")},8:function(t,e){},"85ec":function(t,e,n){},9:function(t,e){},9486:function(t,e,n){},b436:function(t,e,n){"use strict";n("b609")},b609:function(t,e,n){},bd8d:function(t,e,n){},ffbf:function(t,e,n){}});
//# sourceMappingURL=app.5ad5e831.js.map