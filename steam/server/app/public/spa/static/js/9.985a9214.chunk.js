(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{858:function(t,e,r){"use strict";r.r(e);var n=r(93),a=r.n(n),i=r(15),s=r(141);e.default={namespace:"showUser",state:{user:[],identity:[],api_authority:[],identity_api_authority_relatioin:[],view_authority:[],identity_view_authority_relatioin:[],views:[]},reducers:{changeState:function(t,e){return JSON.parse(JSON.stringify(Object(i.a)({},t,e)))}},effects:{requestUser:a.a.mark(function t(e,r){var n,i,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.put,i=r.call,t.next=3,i(s.showUser);case 3:if(1!==(c=t.sent).code){t.next=7;break}return t.next=7,n({type:"changeState",user:c.data});case 7:case"end":return t.stop()}},t,this)}),requestIdentity:a.a.mark(function t(e,r){var n,i,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.put,i=r.call,t.next=3,i(s.showIdentity);case 3:if(1!==(c=t.sent).code){t.next=7;break}return t.next=7,n({type:"changeState",identity:c.data});case 7:case"end":return t.stop()}},t,this)}),requestApiAuthority:a.a.mark(function t(e,r){var n,i,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.put,i=r.call,t.next=3,i(s.showApiAuthority);case 3:if(1!==(c=t.sent).code){t.next=7;break}return t.next=7,n({type:"changeState",api_authority:c.data});case 7:case"end":return t.stop()}},t,this)}),requestIdentityApi:a.a.mark(function t(e,r){var n,i,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.put,i=r.call,t.next=3,i(s.showApiIdentity);case 3:if(1!==(c=t.sent).code){t.next=7;break}return t.next=7,n({type:"changeState",identity_api_authority_relatioin:c.data});case 7:case"end":return t.stop()}},t,this)}),requestViewAuthority:a.a.mark(function t(e,r){var n,i,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.put,i=r.call,t.next=3,i(s.showViewAuthority);case 3:if(1!==(c=t.sent).code){t.next=7;break}return t.next=7,n({type:"changeState",view_authority:c.data});case 7:case"end":return t.stop()}},t,this)}),requestIdentityView:a.a.mark(function t(e,r){var n,i,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.put,i=r.call,t.next=3,i(s.showViewIdentity);case 3:if(1!==(c=t.sent).code){t.next=7;break}return t.next=7,n({type:"changeState",identity_view_authority_relatioin:c.data});case 7:case"end":return t.stop()}},t,this)})}}}}]);
//# sourceMappingURL=9.985a9214.chunk.js.map