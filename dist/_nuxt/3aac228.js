(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{387:function(t,e){},388:function(t,e){},390:function(t,e){},391:function(t,e){},395:function(t,e){},396:function(t,e){},513:function(t,e,n){"use strict";n.r(e);var r=n(16),c=(n(62),n(6),n(31),n(116),n(177),n(394)),o=n.n(c),l=n(393),d=n.n(l),h={data:function(){return{getAllDB:[],search:"",slug:this.$route.params.slug}},computed:{searchResult:function(){var t=this;return this.getAllDB.filter((function(e){return e.title.match(t.search)}))}},watch:{Sanitize:function(){return this.sanitize()}},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://api.jikan.moe/v3/search/anime?type=movie&order_by=end_date&sort=desc&page="+t.slug).then((function(e){t.getAllDB=d.a.sortBy(e.data.results,["title"])}));case 2:case"end":return e.stop()}}),e)})))()},sanitize:function(){return o()(this.searchResult)}}},v=n(72),f=n(115),m=n.n(f),_=n(375),x=n(447),w=n(384),V=n(376),k=n(459),C=n(142),y=n(506),A=n(380),R=n(507),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-text-field",{attrs:{outlined:"",label:"search",rounded:"",danse:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("br"),t._v(" "),n("v-row",t._l((t.getAllDB,t.searchResult),(function(e,r){return n("v-col",{key:r,attrs:{cols:"10","no-gutters":"",md:"4"}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[n("v-img",{staticClass:"white--text text--primary align-end",attrs:{height:"200px",src:e.image_url}},[n("v-card-title",[t._v(t._s(e.title))])],1),t._v(" "),n("v-card-text",{staticClass:"text--primary"},[n("div",[t._v(t._s(e.synopsis))])]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-chip",{attrs:{close:"","close-icon":"mdi-open-in-new",color:"blue",link:"",target:"_blank",outlined:"",nuxt:"",to:e.url}},[t._v("Goto Link")]),t._v(" "),n("v-spacer")],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VApp:_.a,VCard:x.a,VCardActions:w.a,VCardText:w.c,VCardTitle:w.d,VChip:V.a,VCol:k.a,VImg:C.a,VRow:y.a,VSpacer:A.a,VTextField:R.a})}}]);