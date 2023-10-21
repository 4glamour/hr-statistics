"use strict";(self.webpackChunkhr_statistics=self.webpackChunkhr_statistics||[]).push([[406],{3406:function(e,n,t){t.r(n),t.d(n,{default:function(){return ve}});var r,a,c,i,s,o,l,d,u,x,p,f,h,v,Z,g,j,m,y=t(1413),b=t(3433),w=t(4165),k=t(5861),S=t(9439),C=t(2791),R=t(168),A=t(225),z=A.Z.section(r||(r=(0,R.Z)(["\n  padding: 30px 0;\n\n  border-bottom: 1px solid #e6e6fa;\n"]))),T=A.Z.h2(a||(a=(0,R.Z)(["\n  margin-bottom: 10px;\n\n  text-align: center;\n  font-size: 20px;\n"]))),B=t(184),_=function(e){var n=e.children,t=e.title;return(0,B.jsxs)(z,{children:[t&&(0,B.jsx)(T,{children:t}),n]})},D=A.Z.form(c||(c=(0,R.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n"]))),F=(A.Z.input(i||(i=(0,R.Z)(["\n  width: 150px;\n  padding: 7px;\n\n  border: 1px solid gray;\n  border-radius: 10px;\n"]))),A.Z.select(s||(s=(0,R.Z)(["\n  width: 130px;\n  padding: 7px;\n\n  border: 1px solid gray;\n  border-radius: 10px;\n\n  cursor: pointer;\n"]))),t(6151)),I=t(4925),L=t(9891),W=t(8096),E=t(7198),H=t(7391),N=function(e){var n=e.addCategory,t=(0,C.useState)("messages"),r=(0,S.Z)(t,2),a=r[0],c=r[1],i=(0,C.useState)(""),s=(0,S.Z)(i,2),o=s[0],l=s[1],d=(0,C.useState)(""),u=(0,S.Z)(d,2),x=u[0],p=u[1];return(0,B.jsx)(_,{title:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435",children:(0,B.jsxs)(D,{children:[(0,B.jsxs)(W.Z,{sx:{minWidth:150},size:"small",children:[(0,B.jsx)(I.Z,{id:"category-type",children:"Type"}),(0,B.jsxs)(E.Z,{labelId:"category-type",id:"category-type",value:a,label:"Type",onChange:function(e){return c(e.target.value)},children:[(0,B.jsx)(L.Z,{value:"messages",children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"}),(0,B.jsx)(L.Z,{value:"calls",children:"\u0417\u0432\u043e\u043d\u043a\u0438"})]})]}),(0,B.jsx)(H.Z,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",variant:"outlined",value:o,onChange:function(e){l(e.target.value)},required:!0,size:"small"}),(0,B.jsx)(H.Z,{label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",variant:"outlined",value:x,onChange:function(e){p(e.target.value)},size:"small"}),(0,B.jsx)(F.Z,{variant:"contained",size:"small",onClick:function(e){e.preventDefault(),o&&n({type:a,name:o,phone:x||"No phone number"})},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})},Q=A.Z.div(o||(o=(0,R.Z)(["\n  padding: 0 30px;\n"]))),q=function(e){var n=e.children;return(0,B.jsx)(Q,{children:n})},J=t(5600),K=A.Z.button(l||(l=(0,R.Z)(["\n  width: 100px;\n  height: 100px;\n\n  border-radius: 50%;\n\n  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);\n\n  background-color: #ffebcd;\n\n  transform: scale(1);\n  transition: transform 100ms ease-out, background-color 100ms ease-out;\n\n  &:hover,\n  &:focus {\n    background-color: #ffe4c4;\n    transform: scale(1.05);\n  }\n\n  &:active {\n    background-color: #deb887;\n    color: #fff;\n  }\n\n  &:disabled {\n    opacity: 0.7;\n    transform: scale(1);\n    background-color: #ffebcd;\n\n    cursor: not-allowed;\n  }\n"]))),M=A.Z.p(d||(d=(0,R.Z)(["\n  font-weight: 700;\n  font-size: 22px;\n"]))),P=A.Z.p(u||(u=(0,R.Z)(["\n  font-size: 14px;\n"]))),G=A.Z.p(x||(x=(0,R.Z)(["\n  font-size: 12px;\n"]))),O=A.Z.div(p||(p=(0,R.Z)(["\n  display: flex;\n"]))),U=A.Z.div(f||(f=(0,R.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  gap: 5px;\n"]))),V=function(e){var n=e.info,t=e.addRecord,r=e.currentActionTotal,a=e.filter,c=e.updateBtnActiveStatus;return(0,B.jsxs)(U,{children:[(0,B.jsxs)(K,{type:"button",onClick:function(){var e=n._id;t({category:e})},disabled:!n.active,children:[(0,B.jsx)(M,{children:r}),(0,B.jsx)(P,{children:n.name})]}),(0,B.jsx)(G,{children:n.phone}),(0,B.jsx)(O,{children:"active"===a?(0,B.jsx)(F.Z,{variant:"outlined",onClick:function(){var e=n._id;(0,J.It)(e,{active:!1}),c(e,{active:!1})},size:"small",children:"Hide"}):(0,B.jsx)(F.Z,{variant:"outlined",onClick:function(){var e=n._id;(0,J.It)(e,{active:!0}),c(e,{active:!0})},size:"small",children:"Show"})})]})},X=A.Z.div(h||(h=(0,R.Z)(["\n  display: flex;\n  gap: 10px;\n  justify-content: space-between;\n"]))),Y=A.Z.div(v||(v=(0,R.Z)(["\n  text-align: center;\n  font-weight: 600;\n"]))),$=A.Z.span(Z||(Z=(0,R.Z)(["\n  color: #32cd32;\n  font-size: 18px;\n  font-weight: 700;\n"]))),ee=A.Z.div(g||(g=(0,R.Z)(["\n  padding-right: 100px;\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n"]))),ne=function(e){var n=e.callsBtns,t=e.addRecord,r=e.callsRecords,a=e.updateBtnActiveStatus,c=(0,C.useState)("active"),i=(0,S.Z)(c,2),s=i[0],o=i[1],l=n.filter((function(e){return"active"===s?e.active:!e.active}));return(0,B.jsxs)(_,{children:[(0,B.jsxs)(X,{children:[(0,B.jsxs)(Y,{children:["\u0417\u0432\u043e\u043d\u043a\u0438 \u0432\u0441\u0435\u0433\u043e: ",(0,B.jsx)($,{children:r.length})]}),(0,B.jsxs)(W.Z,{sx:{minWidth:100},size:"small",children:[(0,B.jsx)(I.Z,{id:"category-type",children:"Type"}),(0,B.jsxs)(E.Z,{labelId:"category-type",id:"category-type",value:s,label:"Type",onChange:function(e){return o(e.target.value)},children:[(0,B.jsx)(L.Z,{value:"active",children:"Active"}),(0,B.jsx)(L.Z,{value:"hidden",children:"Hidden"})]})]})]}),(0,B.jsx)(ee,{children:l.map((function(e){var n=r.filter((function(n){return n.category.name===e.name})).length;return(0,B.jsx)(V,{info:e,addRecord:t,currentActionTotal:n,filter:s,updateBtnActiveStatus:a},e._id)}))})]})},te=A.Z.div(j||(j=(0,R.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),re=A.Z.div(m||(m=(0,R.Z)(["\n  margin-bottom: 10px;\n\n  display: flex;\n  justify-content: center;\n"]))),ae=t(9836),ce=t(3382),ie=t(3994),se=t(9281),oe=t(6890),le=t(5855),de=t(5527),ue=t(3400),xe=t(7247),pe=t(8258),fe=function(e){var n=e.actionRecords,t=e.deleteRecord,r=e.setActionRecords,a=(0,C.useState)((function(){return new Date})),c=(0,S.Z)(a,2),i=c[0],s=c[1],o=(0,b.Z)(n).reverse();(0,C.useEffect)((function(){(0,k.Z)((0,w.Z)().mark((function e(){var n;return(0,w.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,J.Q6)(i);case 3:n=e.sent,r(n.data.result),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[i,r]);return(0,B.jsxs)(_,{title:"Timeline",children:[(0,B.jsx)(re,{children:(0,B.jsx)(pe.M,{value:i,onChange:function(e){s(e)}})}),(0,B.jsx)(te,{children:(0,B.jsx)(se.Z,{component:de.Z,sx:{maxWidth:650},children:(0,B.jsxs)(ae.Z,{"aria-label":"simple table",children:[(0,B.jsx)(oe.Z,{children:(0,B.jsxs)(le.Z,{sx:{bgcolor:"#4682B4"},children:[(0,B.jsx)(ie.Z,{children:"Name"}),(0,B.jsx)(ie.Z,{children:"Type"}),(0,B.jsx)(ie.Z,{sx:{width:200},children:"Date"}),(0,B.jsx)(ie.Z,{sx:{width:80},children:"Delete"})]})}),(0,B.jsx)(ce.Z,{children:o.map((function(e){var n=new Date(e.createdAt);return(0,B.jsxs)(le.Z,{sx:{"&:last-child td, &:last-child th":{border:0},"&:nth-of-type(even)":{bgcolor:"#F0F8FF"}},children:[(0,B.jsx)(ie.Z,{children:e.category.name}),(0,B.jsx)(ie.Z,{children:e.category.type}),(0,B.jsx)(ie.Z,{children:n.toLocaleString()}),(0,B.jsx)(ie.Z,{children:(0,B.jsx)(ue.Z,{"aria-label":"delete",onClick:function(){return t(e._id)},sx:{color:"#F08080"},children:(0,B.jsx)(xe.Z,{})})})]},e._id)}))})]})})})]})},he=function(e){var n=e.messagesBtns,t=e.addRecord,r=e.messagesRecords,a=e.updateBtnActiveStatus,c=(0,C.useState)("active"),i=(0,S.Z)(c,2),s=i[0],o=i[1],l=n.filter((function(e){return"active"===s?e.active:!e.active}));return(0,B.jsxs)(_,{children:[(0,B.jsxs)(X,{children:[(0,B.jsxs)(Y,{children:["C\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0433\u043e: ",(0,B.jsx)($,{children:r.length})]}),(0,B.jsxs)(W.Z,{sx:{minWidth:100},size:"small",children:[(0,B.jsx)(I.Z,{id:"category-type",children:"Type"}),(0,B.jsxs)(E.Z,{labelId:"category-type",id:"category-type",value:s,label:"Type",onChange:function(e){return o(e.target.value)},children:[(0,B.jsx)(L.Z,{value:"active",children:"Active"}),(0,B.jsx)(L.Z,{value:"hidden",children:"Hidden"})]})]})]}),(0,B.jsx)(ee,{children:l.map((function(e){var n=r.filter((function(n){return n.category.name===e.name})).length;return(0,B.jsx)(V,{info:e,addRecord:t,currentActionTotal:n,filter:s,updateBtnActiveStatus:a},e._id)}))})]})};function ve(){var e=(0,C.useState)([]),n=(0,S.Z)(e,2),t=n[0],r=n[1],a=(0,C.useState)([]),c=(0,S.Z)(a,2),i=c[0],s=c[1];(0,C.useEffect)((function(){(0,k.Z)((0,w.Z)().mark((function e(){var n,t;return(0,w.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,J.CP)();case 3:return n=e.sent,r(n.data.result),e.next=7,(0,J.Q6)();case 7:t=e.sent,s(t.data.result),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}),[]);var o=function(){var e=(0,k.Z)((0,w.Z)().mark((function e(n){var t;return(0,w.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,J.i8)(n);case 3:t=e.sent,r((function(e){return[].concat((0,b.Z)(e),[t.data.result])})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=t.filter((function(e){return"calls"===e.type})),d=t.filter((function(e){return"messages"===e.type})),u=function(){var e=(0,k.Z)((0,w.Z)().mark((function e(n){var t;return(0,w.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,J.xK)(n);case 3:t=e.sent,s((function(e){return[].concat((0,b.Z)(e),[t.data.result])})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),x=i.filter((function(e){return"calls"===e.category.type})),p=i.filter((function(e){return"messages"===e.category.type})),f=function(){var e=(0,k.Z)((0,w.Z)().mark((function e(n){return(0,w.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,J.JS)(n);case 3:s((function(e){return e.filter((function(e){return e._id!==n}))})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),h=function(e,n){r((function(t){return t.map((function(t){return t._id===e?(0,y.Z)((0,y.Z)({},t),n):t}))}))};return(0,C.useEffect)((function(){return function e(){var n=(new Date).toLocaleString();console.log("\x1b[36m","".concat(n," \n\t\t\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440")),fetch("https://hr-statistics-ja95.onrender.com/api/records").then((function(e){var n=(new Date).toLocaleString();console.log("\x1b[32m","".concat(n," \n\t\t\u0417\u0430\u043f\u0440\u043e\u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e"))})).catch((function(e){var n=(new Date).toLocaleString();console.log("\x1b[31m","".concat(n," \n\t\t\u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0431\u044b\u043b \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d"))})),setTimeout(e,84e4)}(),function(){console.log("\u0442\u0443\u0442 \u043d\u0430\u0434\u043e \u0431\u0443\u0434\u0435\u0442 \u043e\u0447\u0438\u0449\u0430\u0442\u044c setTimeout")}}),[]),(0,B.jsxs)(q,{children:[(0,B.jsx)(N,{addCategory:o}),(0,B.jsx)(ne,{callsBtns:l,addRecord:u,callsRecords:x,updateBtnActiveStatus:h}),(0,B.jsx)(he,{messagesBtns:d,addRecord:u,messagesRecords:p,updateBtnActiveStatus:h}),(0,B.jsx)(fe,{actionRecords:i,deleteRecord:f,setActionRecords:s})]})}}}]);
//# sourceMappingURL=406.c6fd5c82.chunk.js.map