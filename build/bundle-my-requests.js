webpackJsonp([1],{263:function(e,t,a){"use strict";function n(e){var t=e.auth;return{issues:e.requests.issues,auth:t}}function r(e){return{repoActions:Object(h.b)(j,e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),c=a(3),s=a(13),u=a.n(s),o=a(14),d=a.n(o),i=a(15),m=a.n(i),f=a(16),p=a.n(f),E=a(17),v=a.n(E),b=a(12),h=a(10),y=a(35),N=a(72),_=a(73),g=function(e){var t=e.requests;return l.default.createElement(y.a,{className:"small container double-padding"},l.default.createElement(_.a,{className:"btn block button-outline",style:{marginBottom:"2em"}},l.default.createElement("span",{className:"octicon octicon-plus"})," ADD A PROJECT"),l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"header"},"My requests ",l.default.createElement("span",{className:"counter"},"(",t.length,")")),0===t.length?l.default.createElement("div",{className:"card-row inner"},"You have not created any request."):t.map(function(e){return l.default.createElement(k,{issue:e,key:e.number})})))},k=function(e){var t=e.issue;return l.default.createElement("a",{className:"card-row link inner",href:t.html_url,target:"_blank"},l.default.createElement("div",null,l.default.createElement("div",{style:{float:"right"}},l.default.createElement(q,{state:t.state})),t.title),l.default.createElement("div",{className:"text-secondary"},"Opened ",Object(N.a)(t.created_at)))},q=function(e){var t=e.state,a="closed"===t?"#bd2c00":"#6cc644",n="closed"===t?"closed":"opened";return l.default.createElement("span",{style:{color:a},className:"octicon octicon-issue-"+n})},O=g,j=a(119),w=function(e){function t(){return d()(this,t),p()(this,(t.__proto__||u()(t)).apply(this,arguments))}return v()(t,e),m()(t,[{key:"render",value:function(){var e=this.props.issues;return l.default.createElement(O,{requests:e})}}]),t}(l.Component),A=Object(b.b)(n,r)(w),x=function(){return l.default.createElement("div",null,l.default.createElement(c.e,{exact:!0,path:"/requests",component:A}))};t.default=x}});
//# sourceMappingURL=bundle-my-requests.js.map