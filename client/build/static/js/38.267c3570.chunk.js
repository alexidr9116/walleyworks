(this.webpackJsonpwalleyworks=this.webpackJsonpwalleyworks||[]).push([[38],{1321:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(2),a=n(26),i=n(75),c=n.n(i),s=n(123),o=n(312),l=n(1221),d=n(38),j=n(1339),h=n(0),u=["links","activeLast"];function b(e){var t=e.links,n=e.activeLast,i=void 0!==n&&n,c=Object(a.a)(e,u),l=t[t.length-1].name,d=t.map((function(e){return Object(h.jsx)(x,{link:e},e.name)})),b=t.map((function(e){return Object(h.jsx)("div",{children:e.name!==l?Object(h.jsx)(x,{link:e}):Object(h.jsx)(o.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:l})},e.name)}));return Object(h.jsx)(j.a,Object(r.a)(Object(r.a)({separator:Object(h.jsx)(s.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},c),{},{children:i?d:b}))}function x(e){var t=e.link,n=t.href,r=t.name,a=t.icon;return Object(h.jsxs)(l.a,{variant:"body2",component:d.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&Object(h.jsx)(s.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),r]},r)}var O=["links","action","heading","moreLink","sx"];function f(e){var t=e.links,n=e.action,i=e.heading,d=e.moreLink,j=void 0===d?[]:d,u=e.sx,x=Object(a.a)(e,O);return Object(h.jsxs)(s.a,{sx:Object(r.a)({mb:5},u),children:[Object(h.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},children:[Object(h.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(h.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:i}),Object(h.jsx)(b,Object(r.a)({links:t},x))]}),n&&Object(h.jsx)(s.a,{sx:{flexShrink:0},children:n})]}),Object(h.jsx)(s.a,{sx:{mt:2},children:c()(j)?Object(h.jsx)(l.a,{href:j,target:"_blank",rel:"noopener",variant:"body2",children:j}):j.map((function(e){return Object(h.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1327:function(e,t,n){"use strict";var r=n(4),a=n(2),i=n(6),c=n(1312),s=Object(i.a)(c.a,{shouldForwardProp:function(e){return"stretchStart"!==e}})((function(e){var t=e.stretchStart,n=e.theme;return{"& .MuiOutlinedInput-root":Object(a.a)({transition:n.transitions.create(["box-shadow","width"],{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.shorter}),"&.Mui-focused":{boxShadow:n.customShadows.z12}},t&&{width:t,"&.Mui-focused":Object(r.a)({boxShadow:n.customShadows.z12},n.breakpoints.up("sm"),{width:t+60})}),"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(n.palette.grey[50032]," !important")}}}));t.a=s},1334:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(2),a=n(26),i=n(631),c=n(312),s=n(0),o=["searchQuery"];function l(e){var t=e.searchQuery,n=void 0===t?"":t,l=Object(a.a)(e,o);return n?Object(s.jsxs)(i.a,Object(r.a)(Object(r.a)({},l),{},{children:[Object(s.jsx)(c.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(s.jsxs)(c.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(s.jsxs)("strong",{children:['"',n,'"']}),". Try checking for typos or using complete words."]})]})):Object(s.jsx)(c.a,{variant:"body2",children:" Please enter keywords"})}},1433:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(10),a=n(427);function i(e,t){return void 0===t&&(t={}),function(e,t){return void 0===t&&(t={}),Object(a.a)(e,Object(r.a)({delimiter:"."},t))}(e,Object(r.a)({delimiter:"-"},t))}},2093:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Y}));var r=n(13),a=n(1353),i=n(1),c=n(38),s=n(53),o=n(1298),l=n(1218),d=n(1315),j=n(1376),h=n(1377),u=n(1381),b=n(1379),x=n(1380),O=n(1288),f=n(632),g=n(312),m=n(2104),p=n(24),v=n(63),w=n(167),y=n(420),k=n(235),S=n(27),C=n(95),R=n(1334),I=n(1321),L=n(2),N=n(1378),P=n(2103),D=n(123),U=n(0),B={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};function M(e){var t=e.order,n=e.orderBy,r=e.rowCount,a=e.headLabel,i=e.numSelected,c=e.onRequestSort,s=e.onSelectAllClick;return Object(U.jsx)(N.a,{children:Object(U.jsxs)(b.a,{children:[Object(U.jsx)(x.a,{padding:"checkbox",children:Object(U.jsx)(O.a,{indeterminate:i>0&&i<r,checked:r>0&&i===r,onChange:s})}),a.map((function(e){return Object(U.jsx)(x.a,{align:e.alignRight?"right":"left",sortDirection:n===e.id&&t,children:Object(U.jsxs)(P.a,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:(r=e.id,function(e){c(e,r)}),children:[e.label,n===e.id?Object(U.jsx)(D.a,{sx:Object(L.a)({},B),children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))]})})}var W=n(6),F=n(1304),z=n(1307),A=n(1222),J=n(1223),Q=n(1327),V=Object(W.a)(F.a)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}}));function q(e){var t=e.numSelected,n=e.filterName,r=e.onFilterName,a=e.onDeleteUsers,i="light"===Object(s.a)().palette.mode;return Object(U.jsxs)(V,{sx:Object(L.a)({},t>0&&{color:i?"primary.main":"text.primary",bgcolor:i?"primary.lighter":"primary.dark"}),children:[t>0?Object(U.jsxs)(g.a,{component:"div",variant:"subtitle1",children:[t," selected"]}):Object(U.jsx)(Q.a,{stretchStart:240,value:n,onChange:function(e){return r(e.target.value)},placeholder:"Search user...",InputProps:{startAdornment:Object(U.jsx)(z.a,{position:"start",children:Object(U.jsx)(S.a,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}}),t>0?Object(U.jsx)(A.a,{title:"Delete",children:Object(U.jsx)(J.a,{onClick:a,children:Object(U.jsx)(S.a,{icon:"eva:trash-2-outline"})})}):Object(U.jsx)(A.a,{title:"Filter list",children:Object(U.jsx)(J.a,{children:Object(U.jsx)(S.a,{icon:"ic:round-filter-list"})})})]})}var E=n(1433),T=n(1308),_=n(114);function G(e){var t=e.onDelete,n=e.userName,a=Object(i.useState)(null),s=Object(r.a)(a,2),o=s[0],l=s[1],d={mr:2,width:20,height:20};return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(J.a,{onClick:function(e){l(e.currentTarget)},children:Object(U.jsx)(S.a,{icon:"eva:more-vertical-fill",width:20,height:20})}),Object(U.jsxs)(_.a,{open:Boolean(o),anchorEl:o,onClose:function(){l(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-1,width:160,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75}},children:[Object(U.jsxs)(T.a,{onClick:t,sx:{color:"error.main"},children:[Object(U.jsx)(S.a,{icon:"eva:trash-2-outline",sx:Object(L.a)({},d)}),"Delete"]}),Object(U.jsxs)(T.a,{component:c.b,to:"".concat(p.c.user.root,"/").concat(Object(E.a)(n),"/edit"),children:[Object(U.jsx)(S.a,{icon:"eva:edit-fill",sx:Object(L.a)({},d)}),"Edit"]})]})]})}var H=[{id:"name",label:"Name",alignRight:!1},{id:"company",label:"Company",alignRight:!1},{id:"role",label:"Role",alignRight:!1},{id:"isVerified",label:"Verified",alignRight:!1},{id:"status",label:"Status",alignRight:!1},{id:""}];function Y(){var e=Object(s.a)(),t=Object(v.a)().themeStretch,n=Object(i.useState)(w.J),L=Object(r.a)(n,2),N=L[0],P=L[1],D=Object(i.useState)(0),B=Object(r.a)(D,2),W=B[0],F=B[1],z=Object(i.useState)("asc"),A=Object(r.a)(z,2),J=A[0],Q=A[1],V=Object(i.useState)([]),E=Object(r.a)(V,2),T=E[0],_=E[1],Y=Object(i.useState)("name"),X=Object(r.a)(Y,2),Z=X[0],$=X[1],ee=Object(i.useState)(""),te=Object(r.a)(ee,2),ne=te[0],re=te[1],ae=Object(i.useState)(5),ie=Object(r.a)(ae,2),ce=ie[0],se=ie[1],oe=W>0?Math.max(0,(1+W)*ce-N.length):0,le=function(e,t,n){var r=e.map((function(e,t){return[e,t]}));if(r.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n)return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())}));return r.map((function(e){return e[0]}))}(N,function(e,t){return"desc"===e?function(e,n){return K(e,n,t)}:function(e,n){return-K(e,n,t)}}(J,Z),ne),de=!le.length&&Boolean(ne);return Object(U.jsx)(y.a,{title:"User: List",children:Object(U.jsxs)(o.a,{maxWidth:!t&&"lg",children:[Object(U.jsx)(I.a,{heading:"User List",links:[{name:"Dashboard",href:p.c.root},{name:"User",href:p.c.user.root},{name:"List"}],action:Object(U.jsx)(l.a,{variant:"contained",component:c.b,to:p.c.user.newUser,startIcon:Object(U.jsx)(S.a,{icon:"eva:plus-fill"}),children:"New User"})}),Object(U.jsxs)(d.a,{children:[Object(U.jsx)(q,{numSelected:T.length,filterName:ne,onFilterName:function(e){re(e),F(0)},onDeleteUsers:function(){return function(e){var t=N.filter((function(t){return!e.includes(t.name)}));_([]),P(t)}(T)}}),Object(U.jsx)(C.a,{children:Object(U.jsx)(j.a,{sx:{minWidth:800},children:Object(U.jsxs)(h.a,{children:[Object(U.jsx)(M,{order:J,orderBy:Z,headLabel:H,rowCount:N.length,numSelected:T.length,onRequestSort:function(e){Q(Z===e&&"asc"===J?"desc":"asc"),$(e)},onSelectAllClick:function(e){if(e){var t=N.map((function(e){return e.name}));_(t)}else _([])}}),Object(U.jsxs)(u.a,{children:[le.slice(W*ce,W*ce+ce).map((function(t){var n=t.id,r=t.name,i=t.role,c=t.status,s=t.company,o=t.avatarUrl,l=t.isVerified,d=-1!==T.indexOf(r);return Object(U.jsxs)(b.a,{hover:!0,tabIndex:-1,role:"checkbox",selected:d,"aria-checked":d,children:[Object(U.jsx)(x.a,{padding:"checkbox",children:Object(U.jsx)(O.a,{checked:d,onClick:function(){return function(e){var t=T.indexOf(e),n=[];-1===t?n=n.concat(T,e):0===t?n=n.concat(T.slice(1)):t===T.length-1?n=n.concat(T.slice(0,-1)):t>0&&(n=n.concat(T.slice(0,t),T.slice(t+1))),_(n)}(r)}})}),Object(U.jsxs)(x.a,{sx:{display:"flex",alignItems:"center"},children:[Object(U.jsx)(f.a,{alt:r,src:o,sx:{mr:2}}),Object(U.jsx)(g.a,{variant:"subtitle2",noWrap:!0,children:r})]}),Object(U.jsx)(x.a,{align:"left",children:s}),Object(U.jsx)(x.a,{align:"left",children:i}),Object(U.jsx)(x.a,{align:"left",children:l?"Yes":"No"}),Object(U.jsx)(x.a,{align:"left",children:Object(U.jsx)(k.a,{variant:"light"===e.palette.mode?"ghost":"filled",color:"banned"===c?"error":"success",children:Object(a.a)(c)})}),Object(U.jsx)(x.a,{align:"right",children:Object(U.jsx)(G,{onDelete:function(){return function(e){var t=N.filter((function(t){return t.id!==e}));_([]),P(t)}(n)},userName:r})})]},n)})),oe>0&&Object(U.jsx)(b.a,{style:{height:53*oe},children:Object(U.jsx)(x.a,{colSpan:6})})]}),de&&Object(U.jsx)(u.a,{children:Object(U.jsx)(b.a,{children:Object(U.jsx)(x.a,{align:"center",colSpan:6,sx:{py:3},children:Object(U.jsx)(R.a,{searchQuery:ne})})})})]})})}),Object(U.jsx)(m.a,{rowsPerPageOptions:[5,10,25],component:"div",count:N.length,rowsPerPage:ce,page:W,onPageChange:function(e,t){return F(t)},onRowsPerPageChange:function(e){se(parseInt(e.target.value,10)),F(0)}})]})]})})}function K(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}}}]);
//# sourceMappingURL=38.267c3570.chunk.js.map