(this.webpackJsonpwalleyworks=this.webpackJsonpwalleyworks||[]).push([[55],{1321:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(2),i=n(26),c=n(75),s=n.n(c),r=n(123),o=n(312),l=n(1221),d=n(38),j=n(1339),b=n(0),u=["links","activeLast"];function x(e){var t=e.links,n=e.activeLast,c=void 0!==n&&n,s=Object(i.a)(e,u),l=t[t.length-1].name,d=t.map((function(e){return Object(b.jsx)(h,{link:e},e.name)})),x=t.map((function(e){return Object(b.jsx)("div",{children:e.name!==l?Object(b.jsx)(h,{link:e}):Object(b.jsx)(o.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:l})},e.name)}));return Object(b.jsx)(j.a,Object(a.a)(Object(a.a)({separator:Object(b.jsx)(r.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},s),{},{children:c?d:x}))}function h(e){var t=e.link,n=t.href,a=t.name,i=t.icon;return Object(b.jsxs)(l.a,{variant:"body2",component:d.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[i&&Object(b.jsx)(r.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:i}),a]},a)}var m=["links","action","heading","moreLink","sx"];function p(e){var t=e.links,n=e.action,c=e.heading,d=e.moreLink,j=void 0===d?[]:d,u=e.sx,h=Object(i.a)(e,m);return Object(b.jsxs)(r.a,{sx:Object(a.a)({mb:5},u),children:[Object(b.jsxs)(r.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(b.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:c}),Object(b.jsx)(x,Object(a.a)({links:t},h))]}),n&&Object(b.jsx)(r.a,{sx:{flexShrink:0},children:n})]}),Object(b.jsx)(r.a,{sx:{mt:2},children:s()(j)?Object(b.jsx)(l.a,{href:j,target:"_blank",rel:"noopener",variant:"body2",children:j}):j.map((function(e){return Object(b.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},2083:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return re}));var a=n(13),i=n(1278),c=n(1),s=n(1298),r=n(2022),o=n(2027),l=n(123),d=n(24),j=n(63),b=n(278),u=n(167),x=n(420),h=n(27),m=n(1321),p=n(1294),O=n(1203),v=n(1315),f=n(312),g=n(1218),w=n(631),k=n(0);function y(e){var t=e.addressBook;return Object(k.jsx)(v.a,{sx:{p:3},children:Object(k.jsxs)(O.a,{spacing:3,alignItems:"flex-start",children:[Object(k.jsx)(f.a,{variant:"overline",sx:{color:"text.secondary"},children:"Billing Info"}),t.map((function(e){return Object(k.jsxs)(w.a,{sx:{p:3,width:1,bgcolor:"background.neutral"},children:[Object(k.jsx)(f.a,{variant:"subtitle1",gutterBottom:!0,children:e.name}),Object(k.jsxs)(f.a,{variant:"body2",gutterBottom:!0,children:[Object(k.jsx)(f.a,{variant:"body2",component:"span",sx:{color:"text.secondary"},children:"Address: \xa0"}),"".concat(e.street,", ").concat(e.city,", ").concat(e.state,", ").concat(e.country," ").concat(e.zipCode)]}),Object(k.jsxs)(f.a,{variant:"body2",gutterBottom:!0,children:[Object(k.jsx)(f.a,{variant:"body2",component:"span",sx:{color:"text.secondary"},children:"Phone: \xa0"}),e.phone]}),Object(k.jsxs)(l.a,{sx:{mt:1},children:[Object(k.jsx)(g.a,{color:"error",size:"small",startIcon:Object(k.jsx)(h.a,{icon:"eva:trash-2-outline"}),onClick:function(){},sx:{mr:1},children:"Delete"}),Object(k.jsx)(g.a,{size:"small",startIcon:Object(k.jsx)(h.a,{icon:"eva:edit-fill"}),onClick:function(){},children:"Edit"})]})]},e.id)})),Object(k.jsx)(g.a,{size:"small",startIcon:Object(k.jsx)(h.a,{icon:"eva:plus-fill"}),children:"Add new address"})]})})}var L=n(1223),S=n(1225),C=n(1312),P=n(1292),N=n(59);function A(e){var t=e.cards,n=e.isOpen,a=e.onOpen,i=e.onCancel;return Object(k.jsxs)(v.a,{sx:{p:3},children:[Object(k.jsx)(f.a,{variant:"overline",sx:{mb:3,display:"block",color:"text.secondary"},children:"Payment Method"}),Object(k.jsx)(O.a,{spacing:2,direction:{xs:"column",md:"row"},children:t.map((function(e){return Object(k.jsxs)(w.a,{sx:{p:3,width:1,position:"relative",border:function(e){return"solid 1px ".concat(e.palette.grey[50032])}},children:[Object(k.jsx)(N.a,{alt:"icon",src:"master_card"===e.cardType?"https://minimal-assets-api.vercel.app/assets/icons/ic_mastercard.svg":"https://minimal-assets-api.vercel.app/assets/icons/ic_visa.svg",sx:{mb:1,maxWidth:36}}),Object(k.jsx)(f.a,{variant:"subtitle2",children:e.cardNumber}),Object(k.jsx)(L.a,{sx:{top:8,right:8,position:"absolute"},children:Object(k.jsx)(h.a,{icon:"eva:more-vertical-fill",width:20,height:20})})]},e.id)}))}),Object(k.jsx)(l.a,{sx:{mt:3},children:Object(k.jsx)(g.a,{size:"small",startIcon:Object(k.jsx)(h.a,{icon:"eva:plus-fill"}),onClick:a,children:"Add new card"})}),Object(k.jsx)(S.a,{in:n,children:Object(k.jsx)(l.a,{sx:{padding:3,marginTop:3,borderRadius:1,bgcolor:"background.neutral"},children:Object(k.jsxs)(O.a,{spacing:3,children:[Object(k.jsx)(f.a,{variant:"subtitle1",children:"Add new card"}),Object(k.jsxs)(O.a,{direction:{xs:"column",sm:"row"},spacing:2,children:[Object(k.jsx)(C.a,{fullWidth:!0,label:"Name on card"}),Object(k.jsx)(C.a,{fullWidth:!0,label:"Card number"})]}),Object(k.jsxs)(O.a,{direction:{xs:"column",sm:"row"},spacing:2,children:[Object(k.jsx)(C.a,{fullWidth:!0,label:"Expiration date",placeholder:"MM/YY"}),Object(k.jsx)(C.a,{fullWidth:!0,label:"Cvv"})]}),Object(k.jsxs)(O.a,{direction:"row",justifyContent:"flex-end",spacing:1.5,children:[Object(k.jsx)(g.a,{color:"inherit",variant:"outlined",onClick:i,children:"Cancel"}),Object(k.jsx)(P.a,{type:"submit",variant:"contained",onClick:i,children:"Save Change"})]})]})})})]})}var I=n(38),z=n(1221),B=n(200),W=n(233);function q(e){var t=e.invoices;return Object(k.jsxs)(O.a,{spacing:3,alignItems:"flex-end",children:[Object(k.jsx)(f.a,{variant:"subtitle1",sx:{width:1},children:"Invoice History"}),Object(k.jsx)(O.a,{spacing:2,sx:{width:1},children:t.map((function(e){return Object(k.jsxs)(O.a,{direction:"row",justifyContent:"space-between",sx:{width:1},children:[Object(k.jsx)(f.a,{variant:"body2",sx:{minWidth:160},children:Object(B.a)(e.createdAt)}),Object(k.jsx)(f.a,{variant:"body2",children:Object(W.a)(e.price)}),Object(k.jsx)(z.a,{component:I.b,to:"#",children:"PDF"})]},e.id)}))}),Object(k.jsx)(g.a,{size:"small",endIcon:Object(k.jsx)(h.a,{icon:"eva:arrow-ios-forward-fill"}),children:"All invoices"})]})}function E(e){var t=e.cards,n=e.addressBook,i=e.invoices,s=Object(c.useState)(!1),r=Object(a.a)(s,2),o=r[0],d=r[1];return Object(k.jsxs)(p.a,{container:!0,spacing:5,children:[Object(k.jsx)(p.a,{item:!0,xs:12,md:8,children:Object(k.jsxs)(O.a,{spacing:3,children:[Object(k.jsxs)(v.a,{sx:{p:3},children:[Object(k.jsx)(f.a,{variant:"overline",sx:{mb:3,display:"block",color:"text.secondary"},children:"Your Plan"}),Object(k.jsx)(f.a,{variant:"h4",children:"Premium"}),Object(k.jsxs)(l.a,{sx:{mt:{xs:2,sm:0},position:{sm:"absolute"},top:{sm:24},right:{sm:24}},children:[Object(k.jsx)(g.a,{size:"small",color:"inherit",variant:"outlined",sx:{mr:1},children:"Cancel plan"}),Object(k.jsx)(g.a,{size:"small",variant:"outlined",children:"Upgrade plan"})]})]}),Object(k.jsx)(A,{cards:t,isOpen:o,onOpen:function(){return d(!o)},onCancel:function(){return d(!1)}}),Object(k.jsx)(y,{addressBook:n})]})}),Object(k.jsx)(p.a,{item:!0,xs:12,md:4,children:Object(k.jsx)(q,{invoices:i})})]})}var _=n(29),R=n(18),T=n.n(R),U=n(236),V=n(237),F=n(422),M=n(31),D=n(202);function G(){var e=Object(V.b)().enqueueSnackbar,t=U.e().shape({oldPassword:U.g().required("Old Password is required"),newPassword:U.g().min(6,"Password must be at least 6 characters").required("New Password is required"),confirmNewPassword:U.g().oneOf([U.f("newPassword"),null],"Passwords must match")}),n=Object(M.f)({resolver:Object(F.a)(t),defaultValues:{oldPassword:"",newPassword:"",confirmNewPassword:""}}),a=n.reset,i=n.handleSubmit,c=n.formState.isSubmitting,s=function(){var t=Object(_.a)(T.a.mark((function t(){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:a(),e("Update success!"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(k.jsx)(v.a,{sx:{p:3},children:Object(k.jsx)(D.a,{methods:n,onSubmit:i(s),children:Object(k.jsxs)(O.a,{spacing:3,alignItems:"flex-end",children:[Object(k.jsx)(D.h,{name:"oldPassword",type:"password",label:"Old Password"}),Object(k.jsx)(D.h,{name:"newPassword",type:"password",label:"New Password"}),Object(k.jsx)(D.h,{name:"confirmNewPassword",type:"password",label:"Confirm New Password"}),Object(k.jsx)(P.a,{type:"submit",variant:"contained",loading:c,children:"Save Changes"})]})})})}n(44);var Y=n(19),H=n(434);function J(){var e=Object(Y.d)(),t=Object(V.b)().enqueueSnackbar,n=Object(Y.e)((function(e){return e.account})),a=n.account,i=n.isLoading,s={displayName:a?"".concat(a.firstName," ").concat(a.lastName):"",email:(null===a||void 0===a?void 0:a.email)||"",avatar:(null===a||void 0===a?void 0:a.avatar)||"",phoneNumber1:(null===a||void 0===a?void 0:a.phoneNumber1)||"",country:(null===a||void 0===a?void 0:a.country)||"",address:(null===a||void 0===a?void 0:a.address)||"",state:(null===a||void 0===a?void 0:a.state)||"",city:(null===a||void 0===a?void 0:a.city)||"",zipCode:(null===a||void 0===a?void 0:a.zipCode)||"",about:(null===a||void 0===a?void 0:a.about)||""},r=U.e().shape({displayName:U.g().required("Name is required")}),o=Object(M.f)({resolver:Object(F.a)(r),defaultValues:s}),d=o.setValue,j=(o.reset,o.handleSubmit),b=(o.formState.isSubmitting,function(){var n=Object(_.a)(T.a.mark((function n(a){return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{e(Object(H.e)(a,t))}catch(i){console.error(i)}case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),x=Object(c.useCallback)((function(e){var t=e[0];t&&d("avatar",Object.assign(t,{preview:URL.createObjectURL(t)}))}),[d]);return console.log(a),Object(k.jsx)(D.a,{methods:o,onSubmit:j(b),children:Object(k.jsxs)(p.a,{container:!0,spacing:3,children:[Object(k.jsx)(p.a,{item:!0,xs:12,md:4,children:Object(k.jsx)(v.a,{sx:{py:10,px:3,textAlign:"center"},children:Object(k.jsx)(D.i,{name:"avatar",accept:"image/*",maxSize:3145728,onDrop:x,helperText:Object(k.jsxs)(f.a,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",Object(k.jsx)("br",{})," max size of ",Object(W.b)(3145728)]})})})}),Object(k.jsx)(p.a,{item:!0,xs:12,md:8,children:Object(k.jsxs)(v.a,{sx:{p:3},children:[Object(k.jsxs)(l.a,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[Object(k.jsx)(D.h,{name:"displayName",label:"Name"}),Object(k.jsx)(D.h,{name:"email",label:"Email Address"}),Object(k.jsx)(D.h,{name:"phoneNumber1",label:"Phone Number"}),Object(k.jsx)(D.h,{name:"address",label:"Address"}),Object(k.jsxs)(D.f,{name:"country",label:"Country",placeholder:"Country",children:[Object(k.jsx)("option",{value:""}),u.L.map((function(e){return Object(k.jsx)("option",{value:e.label,children:e.label},e.code)}))]}),Object(k.jsx)(D.h,{name:"state",label:"State/Region"}),Object(k.jsx)(D.h,{name:"city",label:"City"}),Object(k.jsx)(D.h,{name:"zipCode",label:"Zip/Code"})]}),Object(k.jsxs)(O.a,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:[Object(k.jsx)(D.h,{name:"about",multiline:!0,rows:4,label:"About"}),Object(k.jsx)(P.a,{type:"submit",variant:"contained",loading:i,children:"Save Changes"})]})]})})]})})}var K=[{value:"activityComments",label:"Email me when someone comments onmy article"},{value:"activityAnswers",label:"Email me when someone answers on my form"},{value:"activityFollows",label:"Email me hen someone follows me"}],Z=[{value:"applicationNews",label:"News and announcements"},{value:"applicationProduct",label:"Weekly product updates"},{value:"applicationBlog",label:"Weekly blog digest"}],Q=!0,X=!0,$=!1,ee=!0,te=!1,ne=!1;function ae(){var e=Object(V.b)().enqueueSnackbar,t={activityComments:Q,activityAnswers:X,activityFollows:$,applicationNews:ee,applicationProduct:te,applicationBlog:ne},n=Object(M.f)({defaultValues:t}),a=n.handleSubmit,i=n.formState.isSubmitting,c=function(){var t=Object(_.a)(T.a.mark((function t(){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:e("Update success!"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();return Object(k.jsx)(v.a,{sx:{p:3},children:Object(k.jsx)(D.a,{methods:n,onSubmit:a(c),children:Object(k.jsxs)(O.a,{spacing:3,alignItems:"flex-end",children:[Object(k.jsxs)(O.a,{spacing:2,sx:{width:1},children:[Object(k.jsx)(f.a,{variant:"overline",sx:{color:"text.secondary"},children:"Activity"}),Object(k.jsx)(O.a,{spacing:1,children:K.map((function(e){return Object(k.jsx)(D.g,{name:e.value,label:e.label,sx:{m:0}},e.value)}))})]}),Object(k.jsxs)(O.a,{spacing:2,sx:{width:1},children:[Object(k.jsx)(f.a,{variant:"overline",sx:{color:"text.secondary"},children:"Application"}),Object(k.jsx)(O.a,{spacing:1,children:Z.map((function(e){return Object(k.jsx)(D.g,{name:e.value,label:e.label,sx:{m:0}},e.value)}))})]}),Object(k.jsx)(P.a,{type:"submit",variant:"contained",loading:i,children:"Save Changes"})]})})})}var ie=n(1307),ce=[{value:"facebookLink",icon:Object(k.jsx)(h.a,{icon:"eva:facebook-fill",width:24,height:24})},{value:"instagramLink",icon:Object(k.jsx)(h.a,{icon:"ant-design:instagram-filled",width:24,height:24})},{value:"linkedinLink",icon:Object(k.jsx)(h.a,{icon:"eva:linkedin-fill",width:24,height:24})},{value:"twitterLink",icon:Object(k.jsx)(h.a,{icon:"eva:twitter-fill",width:24,height:24})}];function se(){var e=Object(V.b)().enqueueSnackbar,t=Object(Y.d)(),n=Object(Y.e)((function(e){return e.account})),a=n.account,i=n.isLoading,s={facebookLink:a&&a.socialLink&&a.socialLink.facebookLink?a.socialLink.facebookLink:"",instagramLink:a&&a.socialLink&&a.socialLink.instagramLink?a.socialLink.instagramLink:"",linkedinLink:a&&a.socialLink&&a.socialLink.linkedinLink?a.socialLink.linkedinLink:"",twitterLink:a&&a.socialLink&&a.socialLink.twitterLink?a.socialLink.twitterLink:""},r=Object(M.f)({defaultValues:s}),o=r.handleSubmit,l=r.reset,d=(r.formState.isSubmitting,function(){var n=Object(_.a)(T.a.mark((function n(a){return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{t(Object(H.c)(a,e))}catch(i){console.error(i)}case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());return Object(c.useEffect)((function(){t(Object(H.b)())}),[t]),Object(c.useEffect)((function(){a&&a.email&&(l(s),console.log(s))}),[a]),Object(k.jsx)(v.a,{sx:{p:3},children:Object(k.jsx)(D.a,{methods:r,onSubmit:o(d),children:Object(k.jsxs)(O.a,{spacing:3,alignItems:"flex-end",children:[ce.map((function(e,t){return Object(k.jsx)(D.h,{name:e.value,InputProps:{startAdornment:Object(k.jsx)(ie.a,{position:"start",children:e.icon})}},t)})),Object(k.jsx)(P.a,{type:"submit",variant:"contained",loading:i,children:"Save Changes"})]})})})}function re(){var e=Object(j.a)().themeStretch,t=Object(b.a)().translate,n=Object(c.useState)("general"),p=Object(a.a)(n,2),O=p[0],v=p[1],f=[{value:"general",icon:Object(k.jsx)(h.a,{icon:"ic:round-account-box",width:20,height:20}),component:Object(k.jsx)(J,{})},{value:"billing",icon:Object(k.jsx)(h.a,{icon:"ic:round-receipt",width:20,height:20}),component:Object(k.jsx)(E,{cards:u.K,addressBook:u.F,invoices:u.I})},{value:"notifications",icon:Object(k.jsx)(h.a,{icon:"eva:bell-fill",width:20,height:20}),component:Object(k.jsx)(ae,{})},{value:"social_links",icon:Object(k.jsx)(h.a,{icon:"eva:share-fill",width:20,height:20}),component:Object(k.jsx)(se,{})},{value:"change_password",icon:Object(k.jsx)(h.a,{icon:"ic:round-vpn-key",width:20,height:20}),component:Object(k.jsx)(G,{})}];return Object(k.jsx)(x.a,{title:"User: Account Settings",children:Object(k.jsxs)(s.a,{maxWidth:!e&&"lg",children:[Object(k.jsx)(m.a,{heading:"Account",links:[{name:"Profile",href:d.a.profile.account},{name:"Account Settings"}]}),Object(k.jsx)(r.a,{value:O,scrollButtons:"auto",variant:"scrollable",allowScrollButtonsMobile:!0,onChange:function(e,t){return v(t)},children:f.map((function(e){return Object(k.jsx)(o.a,{disableRipple:!0,label:Object(i.a)(t(e.value)),icon:e.icon,value:e.value},e.value)}))}),Object(k.jsx)(l.a,{sx:{mb:5}}),f.map((function(e){return e.value===O&&Object(k.jsx)(l.a,{children:e.component},e.value)}))]})})}}}]);
//# sourceMappingURL=55.411c33b2.chunk.js.map