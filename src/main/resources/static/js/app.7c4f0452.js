(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push(["56d7","chunk-vendors"]),n()})({"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("button",{on:{click:t.getData}},[t._v("get")]),t._v(" "+t._s(t.api)+" "),n("router-view")],1)},o=[],i=n("bc3a"),s=n.n(i),c={name:"App",data:function(){return{api:"asdf"}},methods:{getData:function(){var t=this;s.a.get("http://localhost:8080/api/v1/index").then((function(e){t.api=e.data}))}}},u=c,l=n("2877"),f=Object(l["a"])(u,a,o,!1,null,null,null),p=f.exports,d=n("8c4f"),v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("TaskAgile")])])}],b={name:"LoginPage"},h=b,m=Object(l["a"])(h,v,g,!1,null,"2e825ff4",null),y=m.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"register-form"},[n("div",{staticClass:"logo-wrapper"}),n("form",[n("div",{staticClass:"form-group"}),n("div",{staticClass:"form-group"}),n("div",{staticClass:"form-group"}),n("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}})])])]),n("footer",{staticClass:"footer"},[n("span",{staticClass:"copyright"}),n("ul",{staticClass:"footer-links list-inline float-right"})])])}],O={name:"RegisterPage"},j=O,C=(n("c52d"),Object(l["a"])(j,_,w,!1,null,"30bfc7a5",null)),P=C.exports;r["a"].use(d["a"]);var x=[{path:"/login",name:"LoginPage",component:y},{path:"/register",name:"RegisterPage",component:P}],k=new d["a"]({mode:"history",base:"/",routes:x}),S=k,$=n("2f62");r["a"].use($["a"]);var E=new $["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:S,store:E,render:function(t){return t(p)}}).$mount("#app")},c52d:function(t,e,n){"use strict";n("d824")},d824:function(t,e,n){}});
//# sourceMappingURL=app.7c4f0452.js.map