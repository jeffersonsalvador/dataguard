(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-drawer",{attrs:{"content-class":"bg-grey-1","show-if-above":""},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("div",{staticClass:"column full-height"},[a("div",{staticClass:"col"},[a("q-list",[a("q-item-label",{staticClass:"text-main-color text-center q-my-md",attrs:{header:""}},[a("span",{staticClass:"logo"},[e._v("Data"),a("strong",[e._v("Guard")])])]),e._l(e.tabs,(function(t){return a("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2)],1),a("div",{staticClass:"col-auto justify-center q-pa-md row"},[this.$route.params.tab?a("q-toggle",{attrs:{color:e.allPlugins?"green":"red","text-color":e.allPlugins?"green":"red",label:e.allPlugins?"All plugins enabled ":"All plugins disabled","left-label":!0,"checked-icon":"check","unchecked-icon":"clear"},on:{input:e.changePlugins},model:{value:e.allPlugins,callback:function(t){e.allPlugins=t},expression:"allPlugins"}}):e._e()],1)])]),a("q-page-container",[a("router-view",{staticClass:"q-pa-lg"})],1)],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{class:this.$route.params.tab===e.link?"bg-white border-left":"",attrs:{clickable:"",tag:"a",to:e.link}},[e.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"img:img/"+e.icon+".svg"}})],1):e._e(),a("q-item-section",[a("q-item-label",[e._v(e._s(e.title))])],1)],1)},i=[],r={name:"EssentialLink",props:{title:{type:String,required:!0},link:{type:String,default:"#"},icon:{type:String,default:""}}},o=r,c=a("2877"),u=a("66e5"),g=a("4074"),p=a("0016"),b=a("0170"),d=a("eebe"),m=a.n(d),h=Object(c["a"])(o,s,i,!1,null,null,null),f=h.exports;m()(h,"components",{QItem:u["a"],QItemSection:g["a"],QIcon:p["a"],QItemLabel:b["a"]});var w=a("bc3a"),k=a.n(w),v={name:"MainLayout",components:{EssentialLink:f},data(){return{leftDrawerOpen:!0,tabs:[],allPlugins:!0}},beforeMount(){k.a.get("https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json").then(e=>{const{tabs:t,tabdata:a}=e.data.data;t.map(e=>{this.tabs.push({title:a[e].title,link:e,icon:a[e].icon})})})},methods:{changePlugins(){this.$root.$emit("changePlugins",this.allPlugins)}}},q=v,P=a("4d5a"),_=a("9404"),y=a("1c1c"),L=a("9564"),Q=a("09e3"),x=Object(c["a"])(q,l,n,!1,null,null,null);t["default"]=x.exports;m()(x,"components",{QLayout:P["a"],QDrawer:_["a"],QList:y["a"],QItemLabel:b["a"],QToggle:L["a"],QPageContainer:Q["a"]})}}]);