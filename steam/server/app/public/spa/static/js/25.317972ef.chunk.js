(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{859:function(e,t,a){"use strict";a.r(t);var n=a(93),r=a.n(n),i=a(15),c=a(141),s={table:{page:1,pageSize:10,total:0,data:[]},viewFromIdentity:[],view_authority:[],isPersonalType:null,apiFromIdentity:[],apiIdentity:[]};t.default={namespace:"role",state:s,reducers:{changeTable:function(e,t){return Object(i.a)({},e,{table:Object(i.a)({},e.table,t.payload)})},changeData:function(e,t){var a=t.payload;return Object(i.a)({},e,a)}},effects:{fetch:r.a.mark(function e(t,a){var n,o,u,d,p,y;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,o=a.call,u=a.put,d=Object(i.a)({page:s.table.page,pageSize:s.table.pageSize},n),e.next=5,o(c.showIdentity,d);case 5:return p=e.sent,e.next=8,u({type:"changeTable",payload:{data:p.data}});case 8:return e.next=10,o(c.showViewAuthority);case 10:return y=e.sent,e.next=13,u({type:"changeData",payload:{view_authority:y.data}});case 13:case"end":return e.stop()}},e,this)}),getViewFromIdentity:r.a.mark(function e(t,a){var n,i,s,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.identity_id,i=a.call,s=a.put,e.next=4,i(c.getViewFromIdentity,n);case 4:return o=e.sent,e.next=7,s({type:"changeData",payload:{viewFromIdentity:o.data}});case 7:case"end":return e.stop()}},e,this)}),setIdentityView:r.a.mark(function e(t,a){var n,i,s,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.identity_id,i=t.view_authority_id,s=a.call,o=a.put,e.next=4,s(c.setIdentityView,{identity_id:n,view_authority_id:i});case 4:return e.next=6,o({type:"getViewFromIdentity",identity_id:n});case 6:case"end":return e.stop()}},e,this)}),addRole:r.a.mark(function e(t,a){var n,i,s,o,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.identity_text,i=a.call,s=a.put,o={identity_text:n},e.next=5,i(c.addIdentity,o);case 5:return u=e.sent,e.next=8,s({type:"fetch"},{});case 8:return e.abrupt("return",Promise.resolve(u));case 9:case"end":return e.stop()}},e,this)})}}}}]);
//# sourceMappingURL=25.317972ef.chunk.js.map