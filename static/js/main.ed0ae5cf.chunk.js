(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),r=n(8),a=n(1),l=(n(13),n(14),n(4)),u=n.n(l),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.SORT_ALPHABET="alphabet",t.SORT_LENGTH="length",t.SORT_DEFAULT=""}(s||(s={}));var O=function(){var t=Object(a.useState)(s.SORT_DEFAULT),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),O=l[0],j=l[1],T=function(t,e,n){var c=Object(r.a)(t);return e&&c.sort((function(t,n){switch(e){case s.SORT_ALPHABET:return t.localeCompare(n);case s.SORT_LENGTH:return t.length-n.length;default:return 0}})),n&&c.reverse(),c}(h,n,O);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":n!==s.SORT_ALPHABET}),onClick:function(){return c(s.SORT_ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":n!==s.SORT_LENGTH}),onClick:function(){return c(s.SORT_LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!O}),onClick:function(){return j(!O)},children:"Reverse"}),(n||O)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(s.SORT_DEFAULT),j(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{className:"list",children:T.map((function(t){return Object(b.jsx)("li",{className:"item","data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ed0ae5cf.chunk.js.map