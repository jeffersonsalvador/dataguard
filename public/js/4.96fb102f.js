(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{bad2:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"card-title"},[t._v(t._s(t.title)+" plugins")]),a("div",{staticClass:"row q-col-gutter-lg"},[t.cards()?t._l(t.cards().plugins,(function(e,s){return a("div",{key:s,staticClass:"col-4",attrs:{disabled:e.disabled}},[a("q-card",{staticClass:"no-box-shadow rounded-borders full-height",attrs:{bordered:""}},[a("q-card-section",[a("div",{staticClass:"row"},[a("div",{staticClass:"card-title col-6"},[t._v(t._s(e.title))]),a("div",{staticClass:"col-6 justify-end items-end"},[a("q-toggle",{attrs:{color:e.active?"green":"red",text:e.active?"green":"red",label:e.active?"Allowed":"Blocked",disable:e.disabled},model:{value:e.active,callback:function(a){t.$set(e,"active",a)},expression:"card.active"}})],1)])]),a("q-card-section",[a("span",{staticClass:"card-content"},[t._v("\n                        "+t._s(e.description)+"\n                    ")])])],1)],1)})):[t._v("loading...")]],2)])},i=[],l=(a("e01a"),a("bc3a")),d=a.n(l),n={name:"Plugins",data(){return{title:"",tabs:[]}},mounted(){this.getCards()},computed:{tab(){return this.$route.params.tab}},watch:{$route(){this.getTitle()}},methods:{cards(){return this.tabs[this.tab]},getTitle(){this.title=this.tabs[this.tab].title},getPlugins(t,e,a){let s=["active","inactive","disabled"],i=[];return s.map(s=>{e[t][s].map(t=>{i.push({title:a[t].title,description:a[t].description,active:"active"===s,disabled:"disabled"===s})})}),i},getCards(){d.a.get("https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json").then(t=>{const{tabs:e,tabdata:a,plugins:s}=t.data.data;e.map(t=>{let e=this.getPlugins(t,a,s);this.tabs[t]={title:a[t].title,plugins:e}}),this.getTitle(this.$route.params.tab)})}}},c=n,r=a("2877"),o=a("f09f"),u=a("a370"),b=a("9564"),g=a("eebe"),h=a.n(g),p=Object(r["a"])(c,s,i,!1,null,null,null);e["default"]=p.exports;h()(p,"components",{QCard:o["a"],QCardSection:u["a"],QToggle:b["a"]})}}]);