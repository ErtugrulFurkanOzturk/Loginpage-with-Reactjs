(this.webpackJsonpmyapp2=this.webpackJsonpmyapp2||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(18),u=n.n(a),i=(n(25),n(2)),s=n(4),o=n(7),j=(n(26),n(0)),O=function(){var t=Object(c.useState)(0),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(c.useEffect)((function(){console.log("Updating...."),document.title="".concat(n)}),[n]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("button",{onClick:function(){return r((function(t){return t+1}))},children:["\u0130ncrease ",n]}),Object(j.jsxs)("button",{onClick:function(){return r((function(t){return t-1}))},children:["Decrease ",n]})]})},b=function(t){var e=t.text,n=t.max,r=Object(c.useState)(!0),a=Object(i.a)(r,2),u=a[0],s=a[1];return e.lenght<n?Object(j.jsx)("span",{children:e}):Object(j.jsxs)("span",{children:[u?"".concat(e.substr(0,n).trim()," ..."):e,u?Object(j.jsx)("button",{onClick:function(){return s(!1)},children:"Show more"}):Object(j.jsx)("button",{onClick:function(){return s(!0)},children:"Show less"})]})},l=function(){var t=Object(c.useState)({firstname:"",lastname:""}),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{name:"firstname",type:"text",value:n.firstname,onChange:function(t){return r(Object(s.a)(Object(s.a)({},n),{},{firstname:t.target.value}))}}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{name:"lastname",type:"text",value:n.lastname,onChange:function(t){return r(Object(s.a)(Object(s.a)({},n),{},{lastname:t.target.value}))}}),Object(j.jsxs)("div",{children:["Firstname: ",n.firstname,Object(j.jsx)("br",{}),"Lastname: ",n.lastname]})]})},d=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),n=e[0],a=e[1],u=Object(c.useState)([]),s=Object(i.a)(u,2),O=s[0],b=s[1];return Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),b((function(t){return[].concat(Object(o.a)(t),[{id:O.length,item:n}])})),a("")},children:Object(j.jsx)("input",{name:"list",type:"text",value:n,onChange:function(t){return a(t.target.value)}})}),Object(j.jsx)("ul",{children:O.map((function(t){return Object(j.jsxs)("li",{children:[" ",t.item]},t.id)}))})]})},f=n(9),p=n.n(f),m=n(19),x=n(20),h=n.n(x),v=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1],a=function(){var t=Object(m.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://jsonplaceholder.typicode.com/posts");case 2:e=t.sent,n=e.data,r(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(j.jsx)("div",{children:Object(j.jsx)("ul",{children:n.map((function(t){return Object(j.jsx)("li",{children:t.title},t.id)}))})})},D={TODO_ADD:"todo_add",TODO_DELETE:"todo_delete",TODO_COMPLETE:"todo_complete"},y=D,E=function(t){var e=t.todo,n=t.dispatch;return Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{style:{background:e.okey?"#438":"#999"},children:e.name}),Object(j.jsx)("button",{onClick:function(){return n({type:D.TODO_COMPLETE,id:e.id})},children:"Complete"}),Object(j.jsx)("button",{onClick:function(){return n({type:D.TODO_DELETE,id:e.id})},children:"Delete"})]})},g=function(t,e){switch(e.type){case y.TODO_ADD:return[].concat(Object(o.a)(t),[k(e.payload.name)]);case y.TODO_COMPLETE:return t.map((function(t){return t.id===e.id?Object(s.a)(Object(s.a)({},t),{},{okey:!t.okey}):Object(s.a)({},t)}));case y.TODO_DELETE:return t.filter((function(t){return t.id!==e.id}));default:return t}},k=function(t){return{id:Date.now(),name:t,okey:!1}};var T=function(){var t=Object(c.useReducer)(g,[]),e=Object(i.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(""),u=Object(i.a)(a,2),s=u[0],o=u[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(O,{}),Object(j.jsx)(b,{text:"Hello I am Ertu\u011frul Furkan \xd6zt\xfcrk!!",max:10}),Object(j.jsx)(l,{}),Object(j.jsx)(d,{}),Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),r({type:y.TODO_ADD,payload:{name:s}}),o()},children:Object(j.jsx)("input",{type:"text",value:s,onChange:function(t){return o(t.target.value)}})}),n.map((function(t){return Object(j.jsx)(E,{todo:t,dispatch:r},t.id)})),Object(j.jsx)(v,{})]})};u.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.d8607a81.chunk.js.map