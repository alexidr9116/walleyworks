(this.webpackJsonpwalleyworks=this.webpackJsonpwalleyworks||[]).push([[67],{2086:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var c=n(35),r=n(5),a=n(1293),i=n(119),o=n(1213),d=n(310),s=n(1215),l=n(455),u=n(19),b=n(418),j=n(25),h=n(2),f=n(29),x=n(18),m=n.n(x),p=n(235),v=n(237),O=n(33),g=n(1),y=n(38),q=n(420),w=n(1198),k=n(1307),C=n(1286),S=n(0);function V(){var e=Object(O.g)(),t=Object(v.b)().enqueueSnackbar,n=p.d().shape({code1:p.f().required("Code is required"),code2:p.f().required("Code is required"),code3:p.f().required("Code is required"),code4:p.f().required("Code is required"),code5:p.f().required("Code is required"),code6:p.f().required("Code is required")}),c=Object(y.f)({mode:"onBlur",resolver:Object(q.a)(n),defaultValues:{code1:"",code2:"",code3:"",code4:"",code5:"",code6:""}}),r=c.watch,a=c.control,i=c.setValue,o=c.handleSubmit,d=c.formState,s=d.isSubmitting,l=d.isValid,b=r();Object(g.useEffect)((function(){document.addEventListener("paste",x)}),[]);var j=function(){var n=Object(f.a)(m.a.mark((function n(c){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:console.log("code:",Object.values(c).join("")),t("Verify success!"),e(u.c.root,{replace:!0}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),x=function(e){var t,n=(null===e||void 0===e||null===(t=e.clipboardData)||void 0===t?void 0:t.getData("Text"))||"";n=n.split(""),[].forEach.call(document.querySelectorAll("#field-code"),(function(e,t){e.value=n[t];var c="code".concat(t+1);i(c,n[t])}))};return Object(S.jsxs)("form",{onSubmit:o(j),children:[Object(S.jsx)(w.a,{direction:"row",spacing:2,justifyContent:"center",children:Object.keys(b).map((function(e,t){return Object(S.jsx)(y.a,{name:"code".concat(t+1),control:a,render:function(e){var n=e.field;return Object(S.jsx)(k.a,Object(h.a)(Object(h.a)({},n),{},{id:"field-code",autoFocus:0===t,placeholder:"-",onChange:function(e){return function(e,t){var n=e.target,c=n.maxLength,r=n.value,a=n.name.replace("code",""),i=Number(a);if(r.length>=c&&i<6){var o=document.querySelector("input[name=code".concat(i+1,"]"));null!==o&&o.focus()}t(e)}(e,n.onChange)},inputProps:{maxLength:1,sx:{p:0,textAlign:"center",width:{xs:36,sm:56},height:{xs:36,sm:56}}}}))}},e)}))}),Object(S.jsx)(C.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:s,disabled:!l,sx:{mt:3},children:"Verify"})]})}var D=Object(r.a)("div")((function(e){return{display:"flex",height:"100%",alignItems:"center",padding:e.theme.spacing(12,0)}}));function E(){return Object(S.jsx)(b.a,{title:"Verify",sx:{height:1},children:Object(S.jsxs)(D,{children:[Object(S.jsx)(l.a,{}),Object(S.jsx)(a.a,{children:Object(S.jsxs)(i.a,{sx:{maxWidth:480,mx:"auto"},children:[Object(S.jsx)(o.a,{size:"small",component:c.b,to:u.b.login,startIcon:Object(S.jsx)(j.a,{icon:"eva:arrow-ios-back-fill",width:20,height:20}),sx:{mb:3},children:"Back"}),Object(S.jsx)(d.a,{variant:"h3",paragraph:!0,children:"Please check your email!"}),Object(S.jsx)(d.a,{sx:{color:"text.secondary"},children:"We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email."}),Object(S.jsx)(i.a,{sx:{mt:5,mb:3},children:Object(S.jsx)(V,{})}),Object(S.jsxs)(d.a,{variant:"body2",align:"center",children:["Don\u2019t have a code? \xa0",Object(S.jsx)(s.a,{variant:"subtitle2",underline:"none",onClick:function(){},children:"Resend code"})]})]})})]})})}}}]);
//# sourceMappingURL=67.e39532ba.chunk.js.map