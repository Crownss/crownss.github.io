(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{218:function(t,e,r){var content=r(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("6502b3de",content,!0,{sourceMap:!1})},245:function(t,e,r){"use strict";var o={data:function(){return{clipped:!0,drawer:!1,fixed:!0,items:[{icon:"mdi-home",title:"Home",to:"/"},{icon:"mdi-filmstrip",title:"Movie",to:"/movie"},{icon:"mdi-chevron-right",title:"On Going",to:"/on-going"},{icon:"mdi-drama-masks",title:"Genre",to:"/genre"},{icon:"mdi-format-list-bulleted-square",title:"Anime List",to:"/anime-list"},{icon:"mdi-information-variant",title:"About",to:"/about"}],miniVariant:!1,right:!0,rightDrawer:!0,title:"DBAnime"}}},n=r(72),l=r(115),c=r.n(l),v=r(375),d=r(382),h=r(377),_=r(246),m=r(383),f=r(378),w=r(168),x=r(169),k=r(108),C=r(170),V=r(86),y=r(379),E=r(381),A=r(380),B=r(241),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticClass:"bg",attrs:{dark:""}},[r("v-container",[r("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),t.$auth.loggedIn?r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",[t._v(t._s(t.$auth.user.email))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"grey",nuxt:"",to:"/accounts/logout"}},[t._v("Logout")])],1):r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("Copyright© "+t._s((new Date).getFullYear())+", DBAnime® All\n        Rights Reserved")])])],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:h.a,VBtn:_.a,VContainer:m.a,VFooter:f.a,VIcon:w.a,VList:x.a,VListItem:k.a,VListItemAction:C.a,VListItemContent:V.a,VListItemTitle:V.b,VMain:y.a,VNavigationDrawer:E.a,VSpacer:A.a,VToolbarTitle:B.a})},256:function(t,e,r){r(257),t.exports=r(258)},280:function(t,e,r){"use strict";r(218)},281:function(t,e,r){var o=r(19)(!1);o.push([t.i,"h1[data-v-58c3c49c]{font-size:20px}",""]),t.exports=o},346:function(t,e,r){"use strict";r.r(e);var o=r(72),component=Object(o.a)({},undefined,undefined,!1,null,null,null);e.default=component.exports},347:function(t,e){function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=347},79:function(t,e,r){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",authenticateRequired:"403 Authenticate Required",internalError:"500 Internal Server Error",badRequest:"400 Bad Request",otherError:"An error occurred"}},head:function(){return{title:[404===this.error.statusCode?this.pageNotFound:this.otherError,403===this.error.statusCode?this.authenticateRequired:this.otherError,400===this.error.statusCode?this.badRequest:this.otherError,500===this.error.statusCode?this.internalError:this.otherError]}}},n=(r(280),r(72)),l=r(115),c=r.n(l),v=r(375),d=r(376),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),404===t.error.statusCode?r("div",[r("center",[r("h1",{staticStyle:{color:"gray"}},[t._v(t._s(t.pageNotFound))]),t._v(" "),r("h1",{staticClass:"required"},[t._v("You're lost dude")]),t._v(" "),r("hr"),t._v(" "),r("v-chip",{attrs:{close:"","close-icon":"mdi-home",color:"blue",link:"",outlined:"",nuxt:"",to:"/"}},[t._v("Back to home")])],1)],1):403===t.error.statusCode?r("div",[r("center",[r("h1",{staticStyle:{color:"gray"}},[t._v(t._s(t.authenticateRequired))]),t._v(" "),r("h1",{staticClass:"required"},[t._v("There's no way for you to access this page")]),t._v(" "),r("hr"),t._v(" "),r("v-chip",{attrs:{close:"","close-icon":"mdi-home",color:"blue",link:"",outlined:"",nuxt:"",to:"/"}},[t._v("Back to home")])],1)],1):400===t.error.statusCode?r("div",[r("center",[r("h1",{staticStyle:{color:"gray"}},[t._v(t._s(t.badRequest))]),t._v(" "),r("h1",{staticClass:"required"},[t._v("Something wrong with your request")]),t._v(" "),r("hr"),t._v(" "),r("v-chip",{attrs:{close:"","close-icon":"mdi-home",color:"blue",link:"",outlined:"",nuxt:"",to:"/"}},[t._v("Back to home")])],1)],1):500===t.error.statusCode?r("div",[r("center",[r("h1",{staticStyle:{color:"gray"}},[t._v(t._s(t.internalError))]),t._v(" "),r("h1",{staticClass:"required"},[t._v("Oups !, looks like our internal server error")]),t._v(" "),r("hr"),t._v(" "),r("v-chip",{attrs:{close:"","close-icon":"mdi-home",color:"blue",link:"",outlined:"",nuxt:"",to:"/"}},[t._v("Back to home")])],1)],1):t._e()])}),[],!1,null,"58c3c49c",null);e.a=component.exports;c()(component,{VApp:v.a,VChip:d.a})}},[[256,20,4,21]]]);