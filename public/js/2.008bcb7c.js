(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-drawer",{attrs:{"content-class":"bg-grey-1","show-if-above":""},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-main-color text-center q-my-md",attrs:{header:""}},[a("span",{staticClass:"logo"},[t._v("Data"),a("strong",[t._v("Guard")])])]),t._l(t.tabs,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),a("q-page-container",[a("router-view",{staticClass:"q-pa-lg"})],1)],1)},l=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{class:this.$route.params.tab===t.link?"bg-white border-left":"",attrs:{clickable:"",tag:"a",to:t.link}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))])],1)],1)},i=[],r={name:"EssentialLink",props:{title:{type:String,required:!0},link:{type:String,default:"#"},icon:{type:String,default:""}}},o=r,c=a("2877"),u=a("66e5"),p=a("4074"),b=a("0016"),m=a("0170"),d=a("eebe"),f=a.n(d),w=Object(c["a"])(o,s,i,!1,null,null,null),g=w.exports;f()(w,"components",{QItem:u["a"],QItemSection:p["a"],QIcon:b["a"],QItemLabel:m["a"]});var h=a("bc3a"),k=a.n(h),q={name:"MainLayout",components:{EssentialLink:g},data(){return{leftDrawerOpen:!0,tabs:[]}},beforeMount(){k.a.get("https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json").then(t=>{const{tabs:e,tabdata:a}=t.data.data;e.map(t=>{this.tabs.push({title:a[t].title,link:t,icon:a[t].icon})})})}},v=q,_=a("4d5a"),L=a("9404"),y=a("1c1c"),Q=a("09e3"),D=Object(c["a"])(v,n,l,!1,null,null,null);e["default"]=D.exports;f()(D,"components",{QLayout:_["a"],QDrawer:L["a"],QList:y["a"],QItemLabel:m["a"],QPageContainer:Q["a"]})}}]);