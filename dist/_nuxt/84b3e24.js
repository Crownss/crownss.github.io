(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{206:function(t,r,o){var content=o(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("6502b3de",content,!0,{sourceMap:!1})},232:function(t,r,o){"use strict";var e={data:function(){return{direction:"left",fab:!1,fling:!0,hover:!1,tabs:null,top:!1,right:!0,bottom:!0,left:!1,transition:"scale-transition",title:"DBAnime",fixed:!0}},watch:{top:function(t){this.bottom=!t},right:function(t){this.left=!t},bottom:function(t){this.top=!t},left:function(t){this.right=!t}}},n=o(66),l=o(106),c=o.n(l),v=o(351),d=o(356),h=o(357),f=o(359),_=o(353),m=o(158),k=o(354),x=o(355),w=o(358),y=o(228),component=Object(n.a)(e,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("v-app",{staticClass:"bg",attrs:{dark:""}},[o("v-container",{attrs:{fluid:""}},[o("v-app-bar",{attrs:{fixed:"",app:""}},[o("v-spacer"),t._v(" "),o("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),o("v-spacer")],1),t._v(" "),o("v-speed-dial",{attrs:{fixed:"",top:t.top,bottom:t.bottom,right:t.right,left:t.left,direction:t.direction,"open-on-hover":t.hover,transition:t.transition},scopedSlots:t._u([{key:"activator",fn:function(){return[o("v-btn",{attrs:{color:"white",dark:"",fab:""},model:{value:t.fab,callback:function(r){t.fab=r},expression:"fab"}},[t.fab?o("v-icon",{attrs:{color:"black"}},[t._v(" mdi-close ")]):o("v-icon",{attrs:{color:"black"}},[t._v(" mdi-menu-open ")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(r){t.fab=r},expression:"fab"}},[t._v(" "),o("v-btn",{attrs:{fab:"",dark:"",small:"",to:"/",color:"black"}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-home")])],1),t._v(" "),o("v-btn",{attrs:{fab:"",dark:"",small:"",to:"/movie",color:"white"}},[o("v-icon",{attrs:{color:"black"}},[t._v("mdi-filmstrip")])],1),t._v(" "),o("v-btn",{attrs:{fab:"",dark:"",small:"",to:"/on-going",color:"black"}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-chevron-right")])],1),t._v(" "),o("v-btn",{attrs:{fab:"",dark:"",small:"",to:"/genre",color:"white"}},[o("v-icon",{attrs:{color:"black"}},[t._v("mdi-drama-masks")])],1),t._v(" "),o("v-btn",{attrs:{fab:"",dark:"",small:"",to:"/anime-list",color:"black"}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-format-list-bulleted-square")])],1),t._v(" "),o("v-btn",{attrs:{fab:"",dark:"",small:"",to:"/about",color:"white"}},[o("v-icon",{attrs:{color:"black"}},[t._v("mdi-information-variant")])],1)],1),t._v(" "),o("v-main",[o("v-container",{attrs:{fluid:""}},[o("nuxt")],1)],1),t._v(" "),o("v-footer",{attrs:{absolute:!t.fixed,app:""}},[o("span",[t._v("Copyright© "+t._s((new Date).getFullYear())+", DBAnime® All\n        Rights Reserved")])])],1)],1)}),[],!1,null,null,null);r.a=component.exports;c()(component,{VApp:v.a,VAppBar:d.a,VBtn:h.a,VContainer:f.a,VFooter:_.a,VIcon:m.a,VMain:k.a,VSpacer:x.a,VSpeedDial:w.a,VToolbarTitle:y.a})},243:function(t,r,o){o(244),t.exports=o(245)},269:function(t,r,o){"use strict";o(206)},270:function(t,r,o){var e=o(25)(!1);e.push([t.i,"h1[data-v-58c3c49c]{font-size:20px}",""]),t.exports=e},321:function(t,r,o){"use strict";o.r(r);var e=o(66),component=Object(e.a)({},undefined,undefined,!1,null,null,null);r.default=component.exports},322:function(t,r){function o(t){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id=322},75:function(t,r,o){"use strict";var e={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",authenticateRequired:"403 Authenticate Required",internalError:"500 Internal Server Error",badRequest:"400 Bad Request",otherError:"An error occurred"}},head:function(){return{title:[404===this.error.statusCode?this.pageNotFound:this.otherError,403===this.error.statusCode?this.authenticateRequired:this.otherError,400===this.error.statusCode?this.badRequest:this.otherError,500===this.error.statusCode?this.internalError:this.otherError]}}},n=(o(269),o(66)),l=o(106),c=o.n(l),v=o(351),d=o(352),component=Object(n.a)(e,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("v-app",{attrs:{dark:""}},[o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),404===t.error.statusCode?o("div",[o("center",[o("h1",{staticStyle:{color:"gray"}},[t._v(t._s(t.pageNotFound))]),t._v(" "),o("h1",{staticClass:"required"},[t._v("You're lost dude")]),t._v(" "),o("hr"),t._v(" "),o("v-chip",{attrs:{close:"","close-icon":"mdi-home",color:"blue",link:"",outlined:"",nuxt:"",to:"/"}},[t._v("Back to home")])],1)],1):403===t.error.statusCode?o("div",[o("center",[o("h1",{staticStyle:{color:"gray"}},[t._v(t._s(t.authenticateRequired))]),t._v(" "),o("h1",{staticClass:"required"},[t._v("There's no way for you to access this page")]),t._v(" "),o("hr"),t._v(" "),o("v-chip",{attrs:{close:"","close-icon":"mdi-home",color:"blue",link:"",outlined:"",nuxt:"",to:"/"}},[t._v("Back to home")])],1)],1):400===t.error.statusCode?o("div",[o("center",[o("h1",{staticStyle:{color:"gray"}},[t._v(t._s(t.badRequest))]),t._v(" "),o("h1",{staticClass:"required"},[t._v("Something wrong with your request")]),t._v(" "),o("hr"),t._v(" "),o("v-chip",{attrs:{close:"","close-icon":"mdi-home",color:"blue",link:"",outlined:"",nuxt:"",to:"/"}},[t._v("Back to home")])],1)],1):500===t.error.statusCode?o("div",[o("center",[o("h1",{staticStyle:{color:"gray"}},[t._v(t._s(t.internalError))]),t._v(" "),o("h1",{staticClass:"required"},[t._v("Oups !, looks like our internal server error")]),t._v(" "),o("hr"),t._v(" "),o("v-chip",{attrs:{close:"","close-icon":"mdi-home",color:"blue",link:"",outlined:"",nuxt:"",to:"/"}},[t._v("Back to home")])],1)],1):t._e()])}),[],!1,null,"58c3c49c",null);r.a=component.exports;c()(component,{VApp:v.a,VChip:d.a})}},[[243,22,4,23]]]);