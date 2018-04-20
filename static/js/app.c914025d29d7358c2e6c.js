webpackJsonp([1],{"39qX":function(t,e){},NHnr:function(t,e,a){"use strict";function n(t){a("bp47")}function s(t){a("39qX")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),c=a("Sazm"),o=a.n(c),l=a("1mcD"),r=a.n(l);i.a.use(r.a);var d={apiKey:"AIzaSyDqHUU6-z_oKzKKhhuv6cRKutPSSQ_SZvo",authDomain:"adressbook-693f1.firebaseapp.com",databaseURL:"https://adressbook-693f1.firebaseio.com"},u=o.a.initializeApp(d),p=u.database(),v=function(){return{contacts:p.ref("contacts")}},f=p.ref(".info/connected"),m={name:"app",data:function(){return{isOnline:!1,statusMessage:"Loading...."}},created:function(){var t=this;f.on("value",function(e){e.val()?(t.isOnline=!0,t.statusMessage="We're offline at the moment!"):t.isOnline=!1})}},_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"addressbook-app"}},[a("h2",{attrs:{id:"title"}},[t._v("Address Book")]),t._v(" "),t.isOnline?t._e():a("div",{staticClass:"offline-note"},[t._v(t._s(t.statusMessage))]),t._v(" "),a("keep-alive",[a("router-view",{attrs:{isOnline:t.isOnline}})],1)],1)},h=[],b={render:_,staticRenderFns:h},g=b,C=a("VU/8"),k=n,D=C(m,g,!1,k,null,null),H=D.exports,x=a("/ocq"),w={name:"contact-list-item",props:["contact"]},$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-list-item",on:{click:function(e){t.$emit("getDetails")}}},[a("span",{staticClass:"contact-name-item"},[t._v(t._s(t.contact.name))]),t._v(" "),a("span",{staticClass:"contact-email-item"},[t._v(t._s(t.contact.email))]),t._v(" "),a("span",{staticClass:"contact-phone-item"},[t._v(t._s(t.contact.phone))])])},y=[],O={render:$,staticRenderFns:y},E=O,F=a("VU/8"),R=F(w,E,!1,null,null,null),U=R.exports,V={name:"home",components:{ContactListItem:U},props:["isOnline"],firebase:v,methods:{getDetails:function(t){this.isOnline&&this.$router.push("/detail/"+t)}}},B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isOnline?a("router-link",{attrs:{to:"/add",id:"addContactBtn"}}):t._e(),t._v(" "),a("div",{attrs:{id:"list"}},[0!==t.contacts.length||t.isOnline?t._e():a("div",{staticClass:"preloader"}),t._v(" "),0===t.contacts.length&&t.isOnline?a("div",{staticClass:"emptylist"}):t._e(),t._v(" "),t._l(t.contacts,function(e){return a("contact-list-item",{key:e[".key"],attrs:{contact:e},on:{getDetails:function(a){t.getDetails(e[".key"])}}})})],2)],1)},S=[],A={render:B,staticRenderFns:S},P=A,q=a("VU/8"),z=s,K=q(V,P,!1,z,null,null),M=K.exports,N={name:"user-input",data:function(){return{isEmpty:!0}},props:{mode:String,label:String,platform:String,value:{type:String,required:!0}},methods:{returnValue:function(t){this.isEmpty=!t,this.$emit("input",t)}}},I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"texthalf"===t.mode?a("div",{staticClass:"row-half"},[a("input",{class:["inputBoxHalf",{invalidForm:t.isEmpty}],attrs:{type:"text",placeholder:t.label},domProps:{value:t.value},on:{input:function(e){t.returnValue(e.target.value)}}})]):"textarea"===t.mode?a("div",{staticClass:"row-full"},[a("textarea",{class:{invalidForm:t.isEmpty},attrs:{rows:"5",cols:"80",placeholder:t.label},domProps:{value:t.value},on:{input:function(e){t.returnValue(e.target.value)}}})]):"social"===t.mode?a("div",{staticClass:"row-half"},[a("input",{class:["inputBoxHalf","iconpadding",{invalidForm:t.isEmpty}],attrs:{type:"text"},domProps:{value:t.value},on:{input:function(e){t.returnValue(e.target.value)}}}),t._v(" "),"facebook"===t.platform?a("span",{staticClass:"icon fbico"}):t._e(),t._v(" "),"twitter"===t.platform?a("span",{staticClass:"icon twico"}):t._e(),t._v(" "),"instagram"===t.platform?a("span",{staticClass:"icon instaico"}):t._e(),t._v(" "),"linkedin"===t.platform?a("span",{staticClass:"icon linkedinico"}):t._e()]):a("div",{staticClass:"row-full"},[a("input",{class:["inputBoxFull",{invalidForm:t.isEmpty}],attrs:{type:"text",placeholder:t.label},domProps:{value:t.value},on:{input:function(e){t.returnValue(e.target.value)}}})])},L=[],W={render:I,staticRenderFns:L},X=W,j=a("VU/8"),J=j(N,X,!1,null,null,null),Q=J.exports,T={name:"add-contact",components:{UserInput:Q},props:["isOnline"],data:function(){return{contact:{name:"",email:"",phone:"",address:"",fbHandle:"",twitterHandle:"",instaHandle:"",linkedinHandle:""}}},firebase:v,methods:{clearOut:function(){for(var t in this.contact)this.contact[t]=""},saveData:function(){this.isOnline&&(this.$firebaseRefs.contacts.push(this.contact),this.clearOut(),this.$router.push("/"))}}},Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-link",{attrs:{to:"/",id:"cancelBtn"}}),t._v(" "),t.isOnline?a("a",{attrs:{href:"#",id:"saveBtn"},on:{click:function(e){return e.preventDefault(),t.saveData(e)}}}):t._e(),t._v(" "),a("div",{staticClass:"add-form"},[a("user-input",{attrs:{label:"Name"},model:{value:t.contact.name,callback:function(e){t.$set(t.contact,"name",e)},expression:"contact.name"}}),t._v(" "),a("user-input",{attrs:{mode:"texthalf",label:"E-Mail"},model:{value:t.contact.email,callback:function(e){t.$set(t.contact,"email",e)},expression:"contact.email"}}),t._v(" "),a("user-input",{attrs:{mode:"texthalf",label:"Phone"},model:{value:t.contact.phone,callback:function(e){t.$set(t.contact,"phone",e)},expression:"contact.phone"}}),t._v(" "),a("user-input",{attrs:{mode:"textarea",label:"Address"},model:{value:t.contact.address,callback:function(e){t.$set(t.contact,"address",e)},expression:"contact.address"}}),t._v(" "),a("user-input",{attrs:{mode:"social",platform:"facebook"},model:{value:t.contact.fbHandle,callback:function(e){t.$set(t.contact,"fbHandle",e)},expression:"contact.fbHandle"}}),t._v(" "),a("user-input",{attrs:{mode:"social",platform:"twitter"},model:{value:t.contact.twitterHandle,callback:function(e){t.$set(t.contact,"twitterHandle",e)},expression:"contact.twitterHandle"}}),t._v(" "),a("user-input",{attrs:{mode:"social",platform:"instagram"},model:{value:t.contact.instaHandle,callback:function(e){t.$set(t.contact,"instaHandle",e)},expression:"contact.instaHandle"}}),t._v(" "),a("user-input",{attrs:{mode:"social",platform:"linkedin"},model:{value:t.contact.linkedinHandle,callback:function(e){t.$set(t.contact,"linkedinHandle",e)},expression:"contact.linkedinHandle"}})],1)],1)},Z=[],G={render:Y,staticRenderFns:Z},tt=G,et=a("VU/8"),at=et(T,tt,!1,null,null,null),nt=at.exports,st={name:"user-response"},it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-response"},[a("div",{staticClass:"user-response-dialog"},[a("span",{staticClass:"user-response-message"},[t._t("default",[t._v("Do you agree?")])],2),t._v(" "),a("a",{attrs:{href:"#",id:"user-response-confirm"},on:{click:function(e){e.preventDefault(),t.$emit("agree")}}},[t._v("Yes")]),t._v(" "),a("a",{attrs:{href:"#",id:"user-response-cancel"},on:{click:function(e){e.preventDefault(),t.$emit("disagree")}}},[t._v("No")])])])},ct=[],ot={render:it,staticRenderFns:ct},lt=ot,rt=a("VU/8"),dt=rt(st,lt,!1,null,null,null),ut=dt.exports,pt={name:"contact-detail",props:["isOnline","id"],components:{UserResponse:ut},data:function(){return{contacts:[],contact:{},showDeleteDialog:!1}},firebase:v,created:function(){this.getData()},watch:{contacts:"getData",$route:"getData"},methods:{getData:function(){var t=this,e=this.contacts.filter(function(e){return e[".key"]===t.id});e.length>0?this.contact=e[0]:this.$router.push("/")},deleteContact:function(t){this.isOnline&&(this.$firebaseRefs.contacts.child(t).remove(),this.showDeleteDialog=!1,this.$router.push("/"))}}},vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.contact?a("div",[a("router-link",{attrs:{to:"/",id:"cancelBtn"}}),t._v(" "),t.isOnline?a("a",{attrs:{href:"#",id:"deleteBtn"},on:{click:function(e){e.preventDefault(),t.showDeleteDialog=!0}}}):t._e(),t._v(" "),a("div",{staticClass:"contact-detail-pane"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.contact.name))]),t._v(" "),a("span",{staticClass:"detail-phone"},[t._v(t._s(t.contact.phone))]),t._v(" "),a("span",{staticClass:"detail-email"},[t._v(t._s(t.contact.email))]),t._v(" "),a("span",{staticClass:"detail-address"},[t._v(t._s(t.contact.address))]),t._v(" "),a("div",{staticClass:"social-ids"},[a("div",{staticClass:"social-id"},[a("span",{class:["icon","fbico",t.contact.fbHandle?"":"icodisabled"]}),t._v(" "),a("span",{staticClass:"social-id-value"},[t._v(t._s(t.contact.fbHandle))])]),t._v(" "),a("div",{staticClass:"social-id"},[a("span",{class:["icon","twico",t.contact.twitterHandle?"":"icodisabled"]}),t._v(" "),a("span",{staticClass:"social-id-value"},[t._v(t._s(t.contact.twitterHandle))])]),t._v(" "),a("div",{staticClass:"social-id"},[a("span",{class:["icon","instaico",t.contact.instaHandle?"":"icodisabled"]}),t._v(" "),a("span",{staticClass:"social-id-value"},[t._v(t._s(t.contact.instaHandle))])]),t._v(" "),a("div",{staticClass:"social-id"},[a("span",{class:["icon","linkedinico",t.contact.linkedinHandle?"":"icodisabled"]}),t._v(" "),a("span",{staticClass:"social-id-value"},[t._v(t._s(t.contact.linkedinHandle))])])])]),t._v(" "),t.showDeleteDialog?a("user-response",{on:{agree:function(e){t.deleteContact(t.id)},disagree:function(e){t.showDeleteDialog=!1}}},[t._v("\n    Do you wish to delete this contact?\n  ")]):t._e()],1):t._e()},ft=[],mt={render:vt,staticRenderFns:ft},_t=mt,ht=a("VU/8"),bt=ht(pt,_t,!1,null,null,null),gt=bt.exports;i.a.use(x.a);var Ct=new x.a({routes:[{path:"/",name:"Home",component:M},{path:"/add",name:"AddContact",component:nt},{path:"/detail/:id",name:"ContactDetail",component:gt,props:!0}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:Ct,template:"<App/>",components:{App:H}})},bp47:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c914025d29d7358c2e6c.js.map