(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},164:function(e,t,n){},169:function(e,t,n){},277:function(e,t,n){},278:function(e,t,n){},279:function(e,t,n){},280:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(27),c=n.n(r),s=(n(134),n(135),n(8)),o=(n(136),n(23)),i=n(10),l=n(285),j=n(286),u=n(122),d=n(1),b=function(){return Object(d.jsx)("footer",{style:{width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center"},children:Object(d.jsx)(l.a,{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(u.a,{className:"text-center py-3",children:"Developed by Somesh Bhosale"})})})})},p=n(291),h=n(292),O=n(290),f=n(125),x=n(289),g=n(7),m=n(11),v=n(25),y="USER_LOGIN_REQUEST",S="USER_LOGIN_SUCCESS",E="USER_LOGIN_FAIL",C="USER_LOGOUT",I="USER_REGISTER_REQUEST",w="USER_REGISTER_SUCCESS",L="USER_REGISTER_FAIL",N="USER_UPDATE_REQUEST",T="USER_UPDATE_SUCCESS",_="USER_UPDATE_FAIL",U=n(28),P=n.n(U);var k=function(e){var t=e.setSearch,n=Object(g.b)(),r=Object(g.c)((function(e){return e.userLogin})).userInfo;return Object(a.useEffect)((function(){}),[r]),Object(d.jsx)(p.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(p.a.Brand,{href:"/",children:"ToDo List App"}),Object(d.jsx)(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsxs)(p.a.Collapse,{id:"responsive-navbar-nav",children:[Object(d.jsx)(h.a,{className:"m-auto",children:r&&Object(d.jsx)(O.a,{inline:!0,children:Object(d.jsx)(f.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){return t(e.target.value)}})})}),Object(d.jsx)(h.a,{children:r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h.a.Link,{href:"/mynotes",children:"My Notes"}),Object(d.jsxs)(x.a,{title:"".concat(r.name),id:"collasible-nav-dropdown",children:[Object(d.jsx)(x.a.Item,{href:"/profile",children:"My Profile"}),Object(d.jsx)(x.a.Divider,{}),Object(d.jsx)(x.a.Item,{onClick:function(){n(function(){var e=Object(v.a)(Object(m.a)().mark((function e(t){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:C});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]})]}):Object(d.jsx)(h.a.Link,{href:"/login",children:"Login"})})]})]})})},R=n(127);n(164);var D=function(e){var t=e.history,n=Object(g.c)((function(e){return e.userLogin})).userInfo;return Object(a.useEffect)((function(){n&&t.push("/mynotes")}),[t,n]),Object(d.jsx)("div",{className:"main",children:Object(d.jsx)(l.a,{children:Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{className:"intro-text",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"title",children:"Welcome to ToDo App"}),Object(d.jsx)("p",{className:"subtitle",children:"One Safe place for all your notes."})]}),Object(d.jsxs)("div",{className:"buttonContainer",children:[Object(d.jsx)(o.b,{to:"/login",children:Object(d.jsx)(R.a,{size:"lg",className:"landingbutton",children:"Login"})}),Object(d.jsx)(o.b,{to:"/register",children:Object(d.jsx)(R.a,{variant:"outline-primary",size:"lg",className:"landingbutton",children:"Signup"})})]})]})})})})},A=n(293),G=n(295),F=n(288);n(169);var B=function(e){var t=e.children,n=e.title;return Object(d.jsx)("div",{className:"mainback",children:Object(d.jsx)(l.a,{children:Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{className:"page",children:[n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"heading",children:n}),Object(d.jsx)("hr",{})]}),t]})})})})},z=n(46),H=n.n(z),Q="NOTES_LIST_REQUEST",J="NOTES_LIST_SUCCESS",q="NOTES_LIST_FAIL",M="NOTES_CREATE_REQUEST",W="NOTES_CREATE_SUCCESS",K="NOTES_CREATE_FAIL",V="NOTES_UPDATE_REQUEST",X="NOTES_UPDATE_SUCCESS",Y="NOTES_UPDATE_FAIL",Z="NOTES_DELETE_REQUEST",$="NOTES_DELETE_SUCCESS",ee="NOTES_DELETE_FAIL",te=function(e){return function(){var t=Object(v.a)(Object(m.a)().mark((function t(n,a){var r,c,s,o,i,l;return Object(m.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:Z}),r=a(),c=r.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,P.a.delete("/api/notes/".concat(e),s);case 6:o=t.sent,i=o.data,n({type:$,payload:i}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,n({type:ee,payload:l});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},ne=n(287);var ae=function(e){var t=e.size,n=void 0===t?100:t;return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:Object(d.jsx)(ne.a,{style:{width:n,height:n},animation:"border"})})},re=n(294),ce=function(e){var t=e.variant,n=void 0===t?"info":t,a=e.children;return Object(d.jsx)(re.a,{variant:n,style:{fontSize:20},children:Object(d.jsx)("strong",{children:a})})};var se=function(e){var t=e.history,n=e.search,r=Object(g.b)(),c=Object(g.c)((function(e){return e.noteList})),s=c.loading,i=c.error,l=c.notes,j=Object(g.c)((function(e){return e.userLogin})).userInfo,u=Object(g.c)((function(e){return e.noteDelete})),b=u.loading,p=u.error,h=u.success,O=Object(g.c)((function(e){return e.noteCreate})).success,f=Object(g.c)((function(e){return e.noteUpdate})).success;return Object(a.useEffect)((function(){r(function(){var e=Object(v.a)(Object(m.a)().mark((function e(t,n){var a,r,c,s,o,i;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:Q}),a=n(),r=a.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(r.token)}},e.next=6,P.a.get("/api/notes",c);case 6:s=e.sent,o=s.data,t({type:J,payload:o}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:q,payload:i});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()),j||t.push("/")}),[r,t,j,h,O,f]),Object(d.jsxs)(B,{title:"Welcome Back ".concat(j&&j.name,".."),children:[console.log(l),Object(d.jsx)(o.b,{to:"/createnote",children:Object(d.jsx)(R.a,{style:{marginLeft:10,marginBottom:6},size:"lg",children:"Create new Note"})}),i&&Object(d.jsx)(ce,{variant:"danger",children:i}),p&&Object(d.jsx)(ce,{variant:"danger",children:p}),s&&Object(d.jsx)(ae,{}),b&&Object(d.jsx)(ae,{}),l&&l.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})).reverse().map((function(e){return Object(d.jsx)(A.a,{children:Object(d.jsxs)(G.a,{style:{margin:10},children:[Object(d.jsxs)(G.a.Header,{style:{display:"flex"},children:[Object(d.jsx)("span",{style:{color:"black",textDecoration:"none",flex:1,cursor:"pointer",alignSelf:"center",fontSize:18},children:Object(d.jsx)(A.a.Toggle,{as:G.a.Text,variant:"link",eventKey:"0",children:e.title})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(R.a,{href:"/note/".concat(e._id),children:"Edit"}),Object(d.jsx)(R.a,{variant:"danger",className:"mx-2",onClick:function(){return t=e._id,void(window.confirm("Are you sure?")&&r(te(t)));var t},children:"Delete"})]})]}),Object(d.jsx)(A.a.Collapse,{eventKey:"0",children:Object(d.jsxs)(G.a.Body,{children:[Object(d.jsx)("h4",{children:Object(d.jsxs)(F.a,{className:"badge bg-secondary m-2",children:["Category - ",e.category]})}),Object(d.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(d.jsx)(H.a,{children:e.content}),Object(d.jsxs)("footer",{className:"blockquote-footer",children:["Created on"," ",Object(d.jsx)("cite",{title:"Source Title",children:e.createdAt.substring(0,10)})]})]})]})})]},e._id)})}))]})};var oe=function(e){var t=e.match,n=e.history,r=Object(a.useState)(),c=Object(s.a)(r,2),o=c[0],i=c[1],l=Object(a.useState)(),j=Object(s.a)(l,2),u=j[0],b=j[1],p=Object(a.useState)(),h=Object(s.a)(p,2),f=h[0],x=h[1],y=Object(a.useState)(""),S=Object(s.a)(y,2),E=S[0],C=S[1],I=Object(g.b)(),w=Object(g.c)((function(e){return e.noteUpdate})),L=w.loading,N=w.error,T=Object(g.c)((function(e){return e.noteDelete})),_=T.loading,U=T.error;return Object(a.useEffect)((function(){var e=function(){var e=Object(v.a)(Object(m.a)().mark((function e(){var n,a;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("/api/notes/".concat(t.params.id));case 2:n=e.sent,a=n.data,i(a.title),b(a.content),x(a.category),C(a.updatedAt);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t.params.id,E]),Object(d.jsx)(B,{title:"Edit Note",children:Object(d.jsxs)(G.a,{children:[Object(d.jsx)(G.a.Header,{children:"Edit your Note"}),Object(d.jsx)(G.a.Body,{children:Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),I(function(e,t,n,a){return function(){var r=Object(v.a)(Object(m.a)().mark((function r(c,s){var o,i,l,j,u,d;return Object(m.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:V}),o=s(),i=o.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},r.next=6,P.a.put("/api/notes/".concat(e),{title:t,content:n,category:a},l);case 6:j=r.sent,u=j.data,c({type:X,payload:u}),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),d=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message,c({type:Y,payload:d});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()}(t.params.id,o,u,f)),o&&u&&f&&(i(""),x(""),b(""),n.push("/mynotes"))},children:[_&&Object(d.jsx)(ae,{}),N&&Object(d.jsx)(ce,{variant:"danger",children:N}),U&&Object(d.jsx)(ce,{variant:"danger",children:U}),Object(d.jsxs)(O.a.Group,{controlId:"title",children:[Object(d.jsx)(O.a.Label,{children:"Title"}),Object(d.jsx)(O.a.Control,{type:"title",placeholder:"Enter the title",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Content"}),Object(d.jsx)(O.a.Control,{as:"textarea",placeholder:"Enter the content",rows:4,value:u,onChange:function(e){return b(e.target.value)}})]}),u&&Object(d.jsxs)(G.a,{children:[Object(d.jsx)(G.a.Header,{children:"Note Preview"}),Object(d.jsx)(G.a.Body,{children:Object(d.jsx)(H.a,{children:u})})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Category"}),Object(d.jsx)(O.a.Control,{type:"content",placeholder:"Enter the Category",value:f,onChange:function(e){return x(e.target.value)}})]}),L&&Object(d.jsx)(ae,{size:50}),Object(d.jsx)(R.a,{variant:"primary",type:"submit",children:"Update Note"}),Object(d.jsx)(R.a,{className:"mx-2",variant:"danger",onClick:function(){return e=t.params.id,window.confirm("Are you sure?")&&I(te(e)),void n.push("/mynotes");var e},children:"Delete Note"})]})}),Object(d.jsxs)(G.a.Footer,{className:"text-muted",children:["Updated on - ",E.substring(0,10)]})]})})};n(277);var ie=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],l=Object(a.useState)(""),b=Object(s.a)(l,2),p=b[0],h=b[1],f=Object(g.b)(),x=Object(g.c)((function(e){return e.userLogin})),C=x.loading,I=x.error,w=x.userInfo;return Object(a.useEffect)((function(){w&&t.push("/mynotes")}),[t,w]),Object(d.jsx)(B,{title:"LOGIN",children:Object(d.jsxs)("div",{className:"loginContainer",children:[I&&Object(d.jsx)(ce,{variant:"danger",children:I}),C&&Object(d.jsx)(ae,{}),Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),f(function(e,t){return function(){var n=Object(v.a)(Object(m.a)().mark((function n(a){var r,c,s;return Object(m.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:y}),r={headers:{"Content-type":"application/json"}},n.next=5,P.a.post("/api/users/login",{email:e,password:t},r);case 5:c=n.sent,s=c.data,a({type:S,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:E,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(c,p))},children:[Object(d.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(O.a.Label,{children:"Email address"}),Object(d.jsx)(O.a.Control,{type:"email",value:c,placeholder:"Enter email",onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",value:p,placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)(R.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(d.jsx)(j.a,{className:"py-3",children:Object(d.jsxs)(u.a,{children:["New Customer ? ",Object(d.jsx)(o.b,{to:"/register",children:"Register Here"})]})})]})})};n(278);var le=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],l=Object(a.useState)(""),b=Object(s.a)(l,2),p=b[0],h=b[1],f=Object(a.useState)("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"),x=Object(s.a)(f,2),y=x[0],E=x[1],C=Object(a.useState)(""),N=Object(s.a)(C,2),T=N[0],_=N[1],U=Object(a.useState)(""),k=Object(s.a)(U,2),D=k[0],A=k[1],G=Object(a.useState)(null),F=Object(s.a)(G,2),z=F[0],H=F[1],Q=Object(a.useState)(null),J=Object(s.a)(Q,2),q=J[0],M=J[1],W=Object(g.b)(),K=Object(g.c)((function(e){return e.userRegister})),V=K.loading,X=K.error,Y=K.userInfo;return Object(a.useEffect)((function(){Y&&t.push("/")}),[t,Y]),Object(d.jsx)(B,{title:"REGISTER",children:Object(d.jsxs)("div",{className:"loginContainer",children:[X&&Object(d.jsx)(ce,{variant:"danger",children:X}),z&&Object(d.jsx)(ce,{variant:"danger",children:z}),V&&Object(d.jsx)(ae,{}),Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),T!==D?H("Passwords do not match"):W(function(e,t,n,a){return function(){var r=Object(v.a)(Object(m.a)().mark((function r(c){var s,o,i;return Object(m.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:I}),s={headers:{"Content-type":"application/json"}},r.next=5,P.a.post("/api/users",{name:e,pic:a,email:t,password:n},s);case 5:o=r.sent,i=o.data,c({type:w,payload:i}),c({type:S,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),c({type:L,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()}(p,c,T,y))},children:[Object(d.jsxs)(O.a.Group,{controlId:"name",children:[Object(d.jsx)(O.a.Label,{children:"Name"}),Object(d.jsx)(O.a.Control,{type:"name",value:p,placeholder:"Enter name",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(O.a.Label,{children:"Email address"}),Object(d.jsx)(O.a.Control,{type:"email",value:c,placeholder:"Enter email",onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",value:T,placeholder:"Password",onChange:function(e){return _(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"confirmPassword",children:[Object(d.jsx)(O.a.Label,{children:"Confirm Password"}),Object(d.jsx)(O.a.Control,{type:"password",value:D,placeholder:"Confirm Password",onChange:function(e){return A(e.target.value)}})]}),q&&Object(d.jsx)(ce,{variant:"danger",children:q}),Object(d.jsxs)(O.a.Group,{controlId:"pic",children:[Object(d.jsx)(O.a.Label,{children:"Profile Picture"}),Object(d.jsx)(O.a.File,{onChange:function(e){return function(e){if("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"===e)return M("Please Select an Image");if(M(null),"image/jpg"!==e.type&&"image/png"!==e.type&&"image/jpeg"!==e.type)return M("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","todoapp"),t.append("cloud_name","somesh2811"),fetch("https://api.cloudinary.com/v1_1/somesh2811/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){E(e.url.toString())})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(d.jsx)(R.a,{variant:"primary",type:"submit",children:"Register"})]}),Object(d.jsx)(j.a,{className:"py-3",children:Object(d.jsxs)(u.a,{children:["Have an Account ? ",Object(d.jsx)(o.b,{to:"/login",children:"Login"})]})})]})})};var je=function(e){var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),j=l[0],u=l[1],b=Object(a.useState)(""),p=Object(s.a)(b,2),h=p[0],f=p[1],x=Object(g.b)(),y=Object(g.c)((function(e){return e.noteCreate})),S=y.loading,E=y.error,C=y.note;console.log(C);var I=function(){o(""),f(""),u("")};return Object(a.useEffect)((function(){}),[]),Object(d.jsx)(B,{title:"Create a Note",children:Object(d.jsxs)(G.a,{children:[Object(d.jsx)(G.a.Header,{children:"Create a new Note"}),Object(d.jsx)(G.a.Body,{children:Object(d.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),x(function(e,t,n){return function(){var a=Object(v.a)(Object(m.a)().mark((function a(r,c){var s,o,i,l,j,u;return Object(m.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:M}),s=c(),o=s.userLogin.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},a.next=6,P.a.post("/api/notes/create",{title:e,content:t,category:n},i);case 6:l=a.sent,j=l.data,r({type:W,payload:j}),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),u=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message,r({type:K,payload:u});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e,t){return a.apply(this,arguments)}}()}(c,j,h)),c&&j&&h&&(I(),t.push("/mynotes"))},children:[E&&Object(d.jsx)(ce,{variant:"danger",children:E}),Object(d.jsxs)(O.a.Group,{controlId:"title",children:[Object(d.jsx)(O.a.Label,{children:"Title"}),Object(d.jsx)(O.a.Control,{type:"title",value:c,placeholder:"Enter the title",onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Content"}),Object(d.jsx)(O.a.Control,{as:"textarea",value:j,placeholder:"Enter the content",rows:4,onChange:function(e){return u(e.target.value)}})]}),j&&Object(d.jsxs)(G.a,{children:[Object(d.jsx)(G.a.Header,{children:"Note Preview"}),Object(d.jsx)(G.a.Body,{children:Object(d.jsx)(H.a,{children:j})})]}),Object(d.jsxs)(O.a.Group,{controlId:"content",children:[Object(d.jsx)(O.a.Label,{children:"Category"}),Object(d.jsx)(O.a.Control,{type:"content",value:h,placeholder:"Enter the Category",onChange:function(e){return f(e.target.value)}})]}),S&&Object(d.jsx)(ae,{size:50}),Object(d.jsx)(R.a,{type:"submit",variant:"primary",children:"Create Note"}),Object(d.jsx)(R.a,{className:"mx-2",onClick:I,variant:"danger",children:"Reset Feilds"})]})}),Object(d.jsxs)(G.a.Footer,{className:"text-muted",children:["Creating on - ",(new Date).toLocaleDateString()]})]})})},ue=(n(279),function(e){e.location;var t=e.history,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),b=l[0],p=l[1],h=Object(a.useState)(),f=Object(s.a)(h,2),x=f[0],y=f[1],E=Object(a.useState)(""),C=Object(s.a)(E,2),I=C[0],w=C[1],L=Object(a.useState)(""),U=Object(s.a)(L,2),k=U[0],D=U[1],A=Object(a.useState)(),G=Object(s.a)(A,2),F=G[0],z=G[1],H=Object(g.b)(),Q=Object(g.c)((function(e){return e.userLogin})).userInfo,J=Object(g.c)((function(e){return e.userUpdate})),q=J.loading,M=J.error,W=J.success;Object(a.useEffect)((function(){Q?(o(Q.name),p(Q.email),y(Q.pic)):t.push("/")}),[t,Q]);return Object(d.jsx)(B,{title:"EDIT PROFILE",children:Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{className:"profileContainer",children:[Object(d.jsx)(u.a,{md:6,children:Object(d.jsxs)(O.a,{onSubmit:function(e){var t;e.preventDefault(),H((t={name:c,email:b,password:I,pic:x},function(){var e=Object(v.a)(Object(m.a)().mark((function e(n,a){var r,c,s,o,i;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:N}),r=a(),c=r.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,P.a.post("/api/users/profile",t,s);case 6:o=e.sent,i=o.data,n({type:T,payload:i}),n({type:S,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n({type:_,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()))},children:[q&&Object(d.jsx)(ae,{}),W&&Object(d.jsx)(ce,{variant:"success",children:"Updated Successfully"}),M&&Object(d.jsx)(ce,{variant:"danger",children:M}),Object(d.jsxs)(O.a.Group,{controlId:"name",children:[Object(d.jsx)(O.a.Label,{children:"Name"}),Object(d.jsx)(O.a.Control,{type:"text",placeholder:"Enter Name",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"email",children:[Object(d.jsx)(O.a.Label,{children:"Email Address"}),Object(d.jsx)(O.a.Control,{type:"email",placeholder:"Enter Email",value:b,onChange:function(e){return p(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"password",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",placeholder:"Enter Password",value:I,onChange:function(e){return w(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{controlId:"confirmPassword",children:[Object(d.jsx)(O.a.Label,{children:"Confirm Password"}),Object(d.jsx)(O.a.Control,{type:"password",placeholder:"Confirm Password",value:k,onChange:function(e){return D(e.target.value)}})]})," ",F&&Object(d.jsx)(ce,{variant:"danger",children:F}),Object(d.jsxs)(O.a.Group,{controlId:"pic",children:[Object(d.jsx)(O.a.Label,{children:"Change Profile Picture"}),Object(d.jsx)(O.a.File,{onChange:function(e){return function(e){if(z(null),"image/jpg"!==e.type&&"image/png"!==e.type&&"image/jpeg"!==e.type)return z("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","todoapp"),t.append("cloud_name","somesh2811"),fetch("https://api.cloudinary.com/v1_1/somesh2811/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){y(e.url.toString()),console.log(x)})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(d.jsx)(R.a,{type:"submit",varient:"primary",children:"Update"})]})}),Object(d.jsx)(u.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(d.jsx)("img",{src:x,alt:c,className:"profilePic"})})]})})})});var de=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(k,{setSearch:function(e){return r(e)}}),Object(d.jsxs)("main",{className:"App",children:[Object(d.jsx)(i.a,{path:"/",component:D,exact:!0}),Object(d.jsx)(i.a,{path:"/login",component:ie}),Object(d.jsx)(i.a,{path:"/register",component:le}),Object(d.jsx)(i.a,{path:"/mynotes",component:function(e){var t=e.history;return Object(d.jsx)(se,{search:n,history:t})}}),Object(d.jsx)(i.a,{path:"/note/:id",component:oe}),Object(d.jsx)(i.a,{path:"/createnote",component:je}),Object(d.jsx)(i.a,{path:"/profile",component:ue})]}),Object(d.jsx)(b,{})]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,296)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},pe=n(53),he=n(129),Oe=n(128),fe=Object(pe.combineReducers)({noteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return{loading:!0};case J:return{loading:!1,notes:t.payload};case q:return{loading:!1,error:t.payload};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loading:!0};case S:return{loading:!1,userInfo:t.payload};case E:return{loading:!1,error:t.payload};case C:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{loading:!0};case w:return{loading:!1,userInfo:t.payload};case L:return{loading:!1,error:t.payload};default:return e}},noteCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{loading:!0};case W:return{loading:!1,success:!0};case K:return{loading:!1,error:t.payload};default:return e}},noteDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return{loading:!0};case $:return{loading:!1,success:!0};case ee:return{loading:!1,error:t.payload,success:!1};default:return e}},noteUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return{loading:!0};case X:return{loading:!1,success:!0};case Y:return{loading:!1,error:t.payload,success:!1};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{loading:!0};case T:return{loading:!1,userInfo:t.payload,success:!0};case _:return{loading:!1,error:t.payload,success:!1};default:return e}}}),xe={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},ge=[he.a],me=Object(pe.createStore)(fe,xe,Object(Oe.composeWithDevTools)(pe.applyMiddleware.apply(void 0,ge)));c.a.render(Object(d.jsx)(g.a,{store:me,children:Object(d.jsx)(de,{})}),document.getElementById("root")),be()}},[[280,1,2]]]);
//# sourceMappingURL=main.4dfcb8a7.chunk.js.map