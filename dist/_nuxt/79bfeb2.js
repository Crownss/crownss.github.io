(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{387:function(t,e){},388:function(t,e){},390:function(t,e){},391:function(t,e){},395:function(t,e){},396:function(t,e){},514:function(t,e,r){"use strict";r.r(e);var n=r(16),c=(r(62),r(6),r(31),r(116),r(177),r(394)),o=r.n(c),l=r(393),d=r.n(l),v={data:function(){return{getAllDB:[],search:"",slug:this.$route.params.slug}},computed:{searchResult:function(){var t=this;return this.getAllDB.filter((function(e){return e.title.match(t.search)}))}},watch:{Sanitize:function(){return this.sanitize()}},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://api.jikan.moe/v3/search/anime?status=completed&order_by=end_date&sort=desc&type=tv").then((function(e){t.getAllDB=d.a.sortBy(e.data.results,["title"])}));case 2:case"end":return e.stop()}}),e)})))()},sanitize:function(){return o()(this.searchResult)}}},h=r(72),_=r(115),f=r.n(_),m=r(375),x=r(447),w=r(384),C=r(376),V=r(459),k=r(142),y=r(506),R=r(380),A=r(507),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-text-field",{attrs:{outlined:"",label:"search",rounded:"",danse:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("br"),t._v(" "),r("v-row",t._l((t.getAllDB,t.searchResult),(function(e,n){return r("v-col",{key:n,attrs:{cols:"10","no-gutters":"",md:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text text--primary align-end",attrs:{height:"200px",src:e.image_url}},[r("v-card-title",[t._v(t._s(e.title))])],1),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Type: "+t._s(e.type))]),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Episode: "+t._s(e.episodes))]),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Score: "+t._s(e.score))]),t._v(" "),r("v-card-subtitle",{staticClass:"pb-5"},[t._v("Release:\n          "+t._s(t.$moment(e.start_date).format("ddd, DD-M-YYYY")))]),t._v(" "),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v(t._s(e.synopsis))])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-chip",{attrs:{close:"","close-icon":"mdi-open-in-new",color:"blue",link:"",target:"_blank",outlined:"",nuxt:"",href:e.url}},[t._v("Goto Link")]),t._v(" "),r("v-spacer")],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VApp:m.a,VCard:x.a,VCardActions:w.a,VCardSubtitle:w.b,VCardText:w.c,VCardTitle:w.d,VChip:C.a,VCol:V.a,VImg:k.a,VRow:y.a,VSpacer:R.a,VTextField:A.a})}}]);