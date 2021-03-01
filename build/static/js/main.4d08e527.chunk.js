(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{55:function(e,t,n){e.exports=n(93)},89:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),u=n.n(c),l=n(15),s=n(53),o=n(7),i=n(8),m=n(95),p=function(){var e=Object(o.c)((function(e){return e.blogs}));return r.a.createElement("div",{className:"blogList"},r.a.createElement(m.a,{striped:!0},r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(l.b,{to:"/blogs/".concat(e.id)},e.title)))})))))},d=n(3),f=n.n(d),b=n(6),E=n(98),v=n(96),g=n(17),h=n.n(g),O={login:function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=n(19),j=function(){var e=Object(b.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.a.get("/api/users"),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y={create:function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAll:j},x=null,k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;return function(){var n=Object(b.a)(f.a.mark((function n(a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a({type:"SET_MESSAGE",text:e}),clearTimeout(x),x=setTimeout((function(){a({type:"CLEAR_MESSAGE"})}),t);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;return function(){var n=Object(b.a)(f.a.mark((function n(a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a({type:"SET_ERROR",text:e}),clearTimeout(x),x=setTimeout((function(){a({type:"CLEAR_MESSAGE"})}),t);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MESSAGE":return{text:t.text,variant:"success"};case"SET_ERROR":return{text:t.text,variant:"danger"};case"CLEAR_MESSAGE":return"";default:return e}},C=function(){var e=Object(o.b)(),t=Object(a.useState)(""),n=Object(w.a)(t,2),c=n[0],u=n[1],l=Object(a.useState)(""),s=Object(w.a)(l,2),i=s[0],m=s[1],p=Object(a.useState)(""),d=Object(w.a)(p,2),g=d[0],h=d[1],O=function(){var t=Object(b.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={username:c,password:i,name:g},u(""),m(""),h(""),t.prev=5,t.next=8,y.create(a);case 8:200===t.sent.status&&e(k("User created")),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(S("user creation failed"));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(E.a,{className:"userCreateForm",onSubmit:O},r.a.createElement(E.a.Control,{placeholder:"New username",value:c,name:"new username",onChange:function(e){return u(e.target.value)}}),r.a.createElement(E.a.Control,{placeholder:"New Password",value:i,name:"new password",onChange:function(e){return m(e.target.value)}}),r.a.createElement(E.a.Control,{placeholder:"Name",value:g,name:"new name",onChange:function(e){return h(e.target.value)}}),r.a.createElement(v.a,{type:"submit"},"create new user"))},I=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),c=Object(w.a)(n,2),u=c[0],l=c[1],s=Object(a.useState)(!1),o=Object(w.a)(s,2),i=o[0],m=o[1],p={display:u?"none":""},d={display:u?"":"none"},f=function(){l(!u)},b=function(){m(!i)};return Object(a.useImperativeHandle)(t,(function(){return{toggleExpanded:b}})),r.a.createElement("span",null,r.a.createElement("span",{style:p},r.a.createElement(v.a,{variant:"info",onClick:f,className:"infoEnable"},e.buttonLabel)),r.a.createElement("span",{style:d,className:"togglableComponent"},r.a.createElement(v.a,{variant:"secondary",onClick:f,className:"infoDisable"},"hide"),e.children))}));I.displayName="Togglable";var T=I,L=n(10),U=null,B=function(){var e=Object(b.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.a.get("/api/blogs"),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:U}},e.next=3,h.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(b.a)(f.a.mark((function e(t,n){var a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:U}},r="".concat("/api/blogs","/").concat(t),e.next=4,h.a.put(r,n,a).catch((function(e){console.log("err",e),console.log(),console.log("config.headers :>> ",a.headers),console.log("newObject :>> ",n)}));case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:U}},e.next=3,h.a.delete("".concat("/api/blogs","/").concat(t),n);case 3:return e.abrupt("return",B());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G={getAll:B,create:R,update:_,setToken:function(e){U="bearer ".concat(e)},removeBlog:A,createComment:function(){var e=Object(b.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat("/api/blogs","/").concat(t,"/comments"),{comment:n});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},D=function(e){return function(t){t({type:"LOGIN",data:e})}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loggedInUser:null,allUsers:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return Object(L.a)(Object(L.a)({},e),{},{allUsers:t.data});case"RETRIEVE_USERS":return G.setToken(t.data.token),Object(L.a)(Object(L.a)({},e),{},{loggedInUser:t.data});case"LOGIN":return window.localStorage.setItem("loggedInUser",JSON.stringify(t.data)),G.setToken(t.data.token),Object(L.a)(Object(L.a)({},e),{},{loggedInUser:t.data});case"LOGOUT":return window.localStorage.removeItem("loggedInUser"),Object(L.a)(Object(L.a)({},e),{},{loggedInUser:null});case"CREATE_USER":default:return e}},J=function(){var e=Object(o.b)(),t=Object(i.f)(),n=function(){var n=Object(b.a)(f.a.mark((function n(a){var r,c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),r=a.target,n.prev=2,n.next=5,O.login({username:r.username.value,password:r.password.value});case 5:c=n.sent,e(D(c)),e(k("logged in")),t.push("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),e(S("login failed"));case 14:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement("div",{className:"login"},r.a.createElement(E.a,{className:"loginForm",onSubmit:n},r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Control,{name:"username",placeholder:"Username"})," ",r.a.createElement("br",null),r.a.createElement(E.a.Control,{name:"password",placeholder:"password",type:"password"}),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"primary",type:"submit"},"login"))),r.a.createElement(T,{className:"newUser",buttonLabel:"create user"},r.a.createElement("h4",null,"Create new user"),r.a.createElement(C,null)))},z=n(22),F=n(54),H=function(e){return function(){var t=Object(b.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.removeBlog(e.id);case 2:a=t.sent,n({type:"DELETE_BLOG",data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},K=function(e){return function(){var t=Object(b.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.update(e.id,Object(L.a)(Object(L.a)({},e),{},{likes:e.likes+1,user:e.user.id}));case 2:a=t.sent,n({type:"LIKE_BLOG",data:Object(L.a)(Object(L.a)({},a),{},{user:e.user})});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":return t.data;case"CREATE_BLOG":return[].concat(Object(F.a)(e),[t.data]);case"DELETE_BLOG":return t.data;case"ADD_COMMENT":var n=e.find((function(e){return e.id===t.data.blog})),a=Object(L.a)(Object(L.a)({},n),{},{comments:t.data.comments});console.log("newBlog :>> ",a);var r=e.map((function(e){return e.id!==t.data.blog?e:a}));return r;case"LIKE_BLOG":return e.map((function(e){return e.id!==t.data.id?e:t.data})).sort((function(e,t){return e.content<t.content?1:-1})).sort((function(e,t){return e.likes<t.likes?1:-1}));default:return e}},W=function(e,t){var n=Object(a.useState)(""),r=Object(w.a)(n,2),c=r[0],u=r[1];return{type:e,value:c,placeholder:t,onChange:function(e){u(e.target.value)},reset:function(){u("")}}},P=function(){var e=Object(o.b)(),t=W("text","title"),n=t.reset,a=Object(z.a)(t,["reset"]),c=W("text","author"),u=c.reset,l=Object(z.a)(c,["reset"]),s=W("text","url"),i=s.reset,m=Object(z.a)(s,["reset"]);return r.a.createElement("span",null,r.a.createElement(E.a,{className:"blogForm",onSubmit:function(t){t.preventDefault();var r={title:a.value,author:l.value,url:m.value,likes:0};e(function(e){return function(){var t=Object(b.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.create(e);case 2:a=t.sent,n({type:"CREATE_BLOG",data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(r)),e(k("added new blog")),n(),u(),i()}},r.a.createElement("h3",null,"Add new blog"),r.a.createElement(E.a.Control,a),r.a.createElement(E.a.Control,l),r.a.createElement(E.a.Control,m),r.a.createElement(v.a,{variant:"primary",type:"submit"},"save")))},q=n(97),Q=function(){var e=Object(o.c)((function(e){return e.notification}));return null!==e.text?r.a.createElement(q.a,{variant:e.variant},e.text):null},X=function(){var e=Object(o.c)((function(e){return e.users.allUsers}));return r.a.createElement("div",{className:"userList"},r.a.createElement("h2",null,"Users"),r.a.createElement(m.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Blog Count"))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.username},r.a.createElement("td",null,r.a.createElement(l.b,{to:"/users/".concat(e.username)},e.username)),r.a.createElement("td",null,e.blogs.length))})))))},Y=function(e){var t=e.user,n={border:"solid",padding:5,borderWidth:1};return t?r.a.createElement("div",{className:"blogList"},r.a.createElement("h1",null,"Blogs added by ",t.username),r.a.createElement(m.a,{striped:!0},r.a.createElement("tbody",null,t.blogs.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{style:n},r.a.createElement(l.b,{to:"/blogs/".concat(e.id)},e.title)))}))))):null},Z=n(99),$=function(e){var t=e.blog,n=Object(o.b)(),a=W("text","comment"),c=(a.reset,Object(z.a)(a,["reset"])),u=Object(o.c)((function(e){return e.users.loggedInUser})),l=function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.confirm("delete blog ".concat(t.title,"?"))&&n(H(t));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(K(t));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t?r.a.createElement("div",{className:"blog"},r.a.createElement(Z.a,{className:"blogCard"},r.a.createElement(Z.a.Header,null,r.a.createElement("h1",null,t.title),r.a.createElement(v.a,{className:"cardBtn",variant:"success",href:t.url},"Source")),r.a.createElement("div",{className:"inline"},"Likes: ",t.likes,r.a.createElement(v.a,{className:"cardBtn",onClick:s,id:"likeBtn"},"like")),"added by:",t.user.username,u.username===t.user.username?r.a.createElement("span",null,r.a.createElement(v.a,{variant:"danger",onClick:l},"delete"),r.a.createElement("br",null)):r.a.createElement("div",null)),r.a.createElement("div",{className:"card",style:{width:"60rem"}},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"Comments")),r.a.createElement("ul",{className:"list-group list-group-flush"},t.comments.map((function(e){return r.a.createElement("li",{key:e._id,className:"list-group-item"},e.content)})))),r.a.createElement(E.a,null,r.a.createElement(E.a.Control,c),r.a.createElement(v.a,{variant:"success",onClick:function(){n(function(e,t){return function(){var n=Object(b.a)(f.a.mark((function n(a){var r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,G.createComment(t.id,e);case 2:r=n.sent,a({type:"ADD_COMMENT",data:{blog:t.id,comments:r}});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(c.value,t))}},"Submit"))):null},ee=function(){var e=Object(o.b)(),t=Object(i.f)(),n=Object(o.c)((function(e){return e.users})),a={color:"white",padding:"14px 10px",textAlign:"center",textDecoration:"none",display:"inline-block"};return r.a.createElement("div",{className:"topBar"},r.a.createElement(l.b,{style:a,to:"/"},r.a.createElement("h2",null,"Blogs")),r.a.createElement(l.b,{style:a,to:"/users"},r.a.createElement("h2",null,"Users")),n.loggedInUser?r.a.createElement("span",{className:"logged"},n.loggedInUser.username," logged in",r.a.createElement(v.a,{variant:"danger",className:"logBtn",onClick:function(){e((function(e){e({type:"LOGOUT"})})),e(k("logged out")),t.push("/login")}},"log out")):r.a.createElement(v.a,{variant:"success",className:"logBtn",onClick:function(){t.push("/login")}},"login"))},te=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.users})),n=Object(o.c)((function(e){return e.blogs}));Object(a.useEffect)((function(){e(function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",data:n.sort((function(e,t){return e.likes-t.likes})).reverse()});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n.sort((function(e,t){return e.blogs.length-t.blogs.length})).reverse()});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.useEffect)((function(){var t,n=window.localStorage.getItem("loggedInUser");n&&e((t=JSON.parse(n),function(e){e({type:"RETRIEVE_USERS",data:t})}))}),[e]);var c=Object(i.g)("/users/:username"),u=c?t.allUsers.find((function(e){return e.username===c.params.username})):null,l=Object(i.g)("/blogs/:id"),s=l?n.find((function(e){return e.id===l.params.id})):null;return r.a.createElement("span",null,r.a.createElement(ee,null),r.a.createElement("div",{className:"container"},r.a.createElement(Q,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/login"},r.a.createElement(J,null)),r.a.createElement(i.a,{path:"/",exact:!0},r.a.createElement("div",{className:"blogList"},r.a.createElement("h1",null,"Blogs"),r.a.createElement(p,null))),r.a.createElement(i.a,{path:"/users",exact:!0},r.a.createElement(X,null)),r.a.createElement(i.a,{path:"/users/:username"},r.a.createElement(Y,{user:u})),r.a.createElement(i.a,{path:"/blogs/:id"},r.a.createElement($,{blog:s})))),r.a.createElement(i.a,{path:"/",exact:!0},r.a.createElement(T,{buttonLabel:"add a new blog"},r.a.createElement(P,null))))},ne=n(21),ae=n(51),re=n(52),ce=Object(ne.combineReducers)({blogs:V,notification:N,users:M}),ue=Object(ne.createStore)(ce,Object(re.composeWithDevTools)(Object(ne.applyMiddleware)(ae.a))),le=(n(89),ue);u.a.render(r.a.createElement(l.a,{history:s.createBrowserHistory},r.a.createElement(o.a,{store:le},r.a.createElement(te,null))),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.4d08e527.chunk.js.map