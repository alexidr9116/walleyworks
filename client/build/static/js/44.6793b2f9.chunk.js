(this.webpackJsonpwalleyworks=this.webpackJsonpwalleyworks||[]).push([[44],{1319:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(2),c=n(28),a=n(94),i=n.n(a),o=n(121),s=n(312),l=n(1221),d=n(37),j=n(1337),h=n(0),u=["links","activeLast"];function b(e){var t=e.links,n=e.activeLast,a=void 0!==n&&n,i=Object(c.a)(e,u),l=t[t.length-1].name,d=t.map((function(e){return Object(h.jsx)(O,{link:e},e.name)})),b=t.map((function(e){return Object(h.jsx)("div",{children:e.name!==l?Object(h.jsx)(O,{link:e}):Object(h.jsx)(s.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:l})},e.name)}));return Object(h.jsx)(j.a,Object(r.a)(Object(r.a)({separator:Object(h.jsx)(o.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},i),{},{children:a?d:b}))}function O(e){var t=e.link,n=t.href,r=t.name,c=t.icon;return Object(h.jsxs)(l.a,{variant:"body2",component:d.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&Object(h.jsx)(o.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),r]},r)}var x=["links","action","heading","moreLink","sx"];function f(e){var t=e.links,n=e.action,a=e.heading,d=e.moreLink,j=void 0===d?[]:d,u=e.sx,O=Object(c.a)(e,x);return Object(h.jsxs)(o.a,{sx:Object(r.a)({mb:5},u),children:[Object(h.jsxs)(o.a,{sx:{display:"flex",alignItems:"center"},children:[Object(h.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(h.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:a}),Object(h.jsx)(b,Object(r.a)({links:t},O))]}),n&&Object(h.jsx)(o.a,{sx:{flexShrink:0},children:n})]}),Object(h.jsx)(o.a,{sx:{mt:2},children:i()(j)?Object(h.jsx)(l.a,{href:j,target:"_blank",rel:"noopener",variant:"body2",children:j}):j.map((function(e){return Object(h.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1324:function(e,t,n){"use strict";var r=n(4),c=n(2),a=n(6),i=n(1286),o=Object(a.a)(i.a,{shouldForwardProp:function(e){return"stretchStart"!==e}})((function(e){var t=e.stretchStart,n=e.theme;return{"& .MuiOutlinedInput-root":Object(c.a)({transition:n.transitions.create(["box-shadow","width"],{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.shorter}),"&.Mui-focused":{boxShadow:n.customShadows.z12}},t&&{width:t,"&.Mui-focused":Object(r.a)({boxShadow:n.customShadows.z12},n.breakpoints.up("sm"),{width:t+60})}),"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(n.palette.grey[50032]," !important")}}}));t.a=o},1332:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(2),c=n(28),a=n(631),i=n(312),o=n(0),s=["searchQuery"];function l(e){var t=e.searchQuery,n=void 0===t?"":t,l=Object(c.a)(e,s);return n?Object(o.jsxs)(a.a,Object(r.a)(Object(r.a)({},l),{},{children:[Object(o.jsx)(i.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(o.jsxs)(i.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(o.jsxs)("strong",{children:['"',n,'"']}),". Try checking for typos or using complete words."]})]})):Object(o.jsx)(i.a,{variant:"body2",children:" Please enter keywords"})}},2087:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var r=n(13),c=n(1351),a=n(1),i=n(53),o=n(1298),s=n(1313),l=n(1373),d=n(1374),j=n(1378),h=n(1376),u=n(1377),b=n(1289),O=n(312),x=n(121),f=n(2101),p=n(19),g=n(426),m=n(200),v=n(233),w=n(25),y=n(61),k=n(420),S=n(235),C=n(74),P=n(93),L=n(1332),R=n(1319),I=n(2),D=n(1375),W=n(2100),E=n(0),N={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};function A(e){var t=e.order,n=e.orderBy,r=e.rowCount,c=e.headLabel,a=e.numSelected,i=e.onRequestSort,o=e.onSelectAllClick;return Object(E.jsx)(D.a,{children:Object(E.jsxs)(h.a,{children:[Object(E.jsx)(u.a,{padding:"checkbox",children:Object(E.jsx)(b.a,{indeterminate:a>0&&a<r,checked:r>0&&a===r,onChange:o})}),c.map((function(e){return Object(E.jsx)(u.a,{align:e.alignRight?"right":"left",sortDirection:n===e.id&&t,children:Object(E.jsxs)(W.a,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:(r=e.id,function(e){i(r)}),children:[e.label,n===e.id?Object(E.jsx)(x.a,{sx:Object(I.a)({},N),children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))]})})}var B=n(6),M=n(1304),F=n(1307),_=n(1222),z=n(1223),T=n(26),Q=n(1324),q=Object(B.a)(M.a)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}}));function J(e){var t=e.numSelected,n=e.filterName,r=e.onFilterName,c=e.onDeleteProducts,a="light"===Object(i.a)().palette.mode;return Object(E.jsxs)(q,{sx:Object(I.a)({},t>0&&{color:a?"primary.main":"text.primary",bgcolor:a?"primary.lighter":"primary.dark"}),children:[t>0?Object(E.jsxs)(O.a,{component:"div",variant:"subtitle1",children:[t," selected"]}):Object(E.jsx)(Q.a,{stretchStart:240,value:n,onChange:function(e){return r(e.target.value)},placeholder:"Search product...",InputProps:{startAdornment:Object(E.jsx)(F.a,{position:"start",children:Object(E.jsx)(T.a,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}}),t>0?Object(E.jsx)(_.a,{title:"Delete",children:Object(E.jsx)(z.a,{onClick:c,children:Object(E.jsx)(T.a,{icon:"eva:trash-2-outline"})})}):Object(E.jsx)(_.a,{title:"Filter list",children:Object(E.jsx)(z.a,{children:Object(E.jsx)(T.a,{icon:"ic:round-filter-list"})})})]})}var G=n(37),H=n(1308),K=n(112);function U(e){var t=e.onDelete,n=e.product,c=Object(a.useState)(null),i=Object(r.a)(c,2),o=i[0],s=i[1],l={mr:2,width:20,height:20};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(z.a,{onClick:function(e){s(e.currentTarget)},children:Object(E.jsx)(T.a,{icon:"eva:more-vertical-fill",width:20,height:20})}),Object(E.jsxs)(K.a,{open:Boolean(o),anchorEl:o,onClose:function(){s(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-1,width:160,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75}},children:[Object(E.jsxs)(H.a,{onClick:t,sx:{color:"error.main"},children:[Object(E.jsx)(T.a,{icon:"eva:trash-2-outline",sx:Object(I.a)({},l)}),"Delete"]}),Object(E.jsxs)(H.a,{component:G.b,to:"".concat(w.a.profile.root,"/product/").concat(n,"/edit"),children:[Object(E.jsx)(T.a,{icon:"eva:edit-fill",sx:Object(I.a)({},l)}),"Edit"]})]})]})}var V=[{id:"name",label:"Product",alignRight:!1},{id:"createdAt",label:"Create at",alignRight:!1},{id:"inventoryType",label:"Status",alignRight:!1},{id:"price",label:"Price",alignRight:!0},{id:""}];function X(){var e=Object(y.a)().themeStretch,t=Object(i.a)(),n=Object(p.d)(),I=Object(p.e)((function(e){return e.product})).products,D=Object(a.useState)([]),W=Object(r.a)(D,2),N=W[0],B=W[1],M=Object(a.useState)(0),F=Object(r.a)(M,2),_=F[0],z=F[1],T=Object(a.useState)("asc"),Q=Object(r.a)(T,2),q=Q[0],G=Q[1],H=Object(a.useState)([]),K=Object(r.a)(H,2),X=K[0],Z=K[1],$=Object(a.useState)(""),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],re=Object(a.useState)(5),ce=Object(r.a)(re,2),ae=ce[0],ie=ce[1],oe=Object(a.useState)("createdAt"),se=Object(r.a)(oe,2),le=se[0],de=se[1];Object(a.useEffect)((function(){n(Object(g.k)())}),[n]),Object(a.useEffect)((function(){I.length&&B(I)}),[I]);var je=_>0?Math.max(0,(1+_)*ae-N.length):0,he=function(e,t,n){var r=e.map((function(e,t){return[e,t]}));if(r.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n)return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())}));return r.map((function(e){return e[0]}))}(N,function(e,t){return"desc"===e?function(e,n){return Y(e,n,t)}:function(e,n){return-Y(e,n,t)}}(q,le),te),ue=!he.length&&Boolean(te);return Object(E.jsx)(k.a,{title:"Ecommerce: Product List",children:Object(E.jsxs)(o.a,{maxWidth:!e&&"lg",children:[Object(E.jsx)(R.a,{heading:"Product List",links:[{name:"Dashboard",href:w.c.root},{name:"E-Commerce",href:w.c.eCommerce.root},{name:"Product List"}]}),Object(E.jsxs)(s.a,{children:[Object(E.jsx)(J,{numSelected:X.length,filterName:te,onFilterName:function(e){ne(e)},onDeleteProducts:function(){return function(e){var t=N.filter((function(t){return!e.includes(t.name)}));Z([]),B(t)}(X)}}),Object(E.jsx)(P.a,{children:Object(E.jsx)(l.a,{sx:{minWidth:800},children:Object(E.jsxs)(d.a,{children:[Object(E.jsx)(A,{order:q,orderBy:le,headLabel:V,rowCount:N.length,numSelected:X.length,onRequestSort:function(e){G(le===e&&"asc"===q?"desc":"asc"),de(e)},onSelectAllClick:function(e){if(e){var t=N.map((function(e){return e.name}));Z(t)}else Z([])}}),Object(E.jsxs)(j.a,{children:[he.slice(_*ae,_*ae+ae).map((function(e){var n=e.id,r=e.name,a=e.cover,i=e.price,o=e.createdAt,s=e.inventoryType,l=-1!==X.indexOf(r);return Object(E.jsxs)(h.a,{hover:!0,tabIndex:-1,role:"checkbox",selected:l,"aria-checked":l,children:[Object(E.jsx)(u.a,{padding:"checkbox",children:Object(E.jsx)(b.a,{checked:l,onClick:function(){return function(e){var t=X.indexOf(e),n=[];-1===t?n=n.concat(X,e):0===t?n=n.concat(X.slice(1)):t===X.length-1?n=n.concat(X.slice(0,-1)):t>0&&(n=n.concat(X.slice(0,t),X.slice(t+1))),Z(n)}(r)}})}),Object(E.jsxs)(u.a,{sx:{display:"flex",alignItems:"center"},children:[Object(E.jsx)(C.a,{disabledEffect:!0,alt:r,src:a,sx:{borderRadius:1.5,width:64,height:64,mr:2}}),Object(E.jsx)(O.a,{variant:"subtitle2",noWrap:!0,children:r})]}),Object(E.jsx)(u.a,{style:{minWidth:160},children:Object(m.a)(o)}),Object(E.jsx)(u.a,{style:{minWidth:160},children:Object(E.jsx)(S.a,{variant:"light"===t.palette.mode?"ghost":"filled",color:("out_of_stock"===s?"error":"low_stock"===s&&"warning")||"success",children:s?Object(c.a)(s):""})}),Object(E.jsx)(u.a,{align:"right",children:Object(v.a)(i)}),Object(E.jsx)(u.a,{align:"right",children:Object(E.jsx)(U,{productName:r,onDelete:function(){return function(e){var t=N.filter((function(t){return t.id!==e}));Z([]),B(t)}(n)}})})]},n)})),je>0&&Object(E.jsx)(h.a,{style:{height:53*je},children:Object(E.jsx)(u.a,{colSpan:6})})]}),ue&&Object(E.jsx)(j.a,{children:Object(E.jsx)(h.a,{children:Object(E.jsx)(u.a,{align:"center",colSpan:6,children:Object(E.jsx)(x.a,{sx:{py:3},children:Object(E.jsx)(L.a,{searchQuery:te})})})})})]})})}),Object(E.jsx)(f.a,{rowsPerPageOptions:[5,10,25],component:"div",count:N.length,rowsPerPage:ae,page:_,onPageChange:function(e,t){return z(t)},onRowsPerPageChange:function(e){ie(parseInt(e.target.value,10)),z(0)}})]})]})})}function Y(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}}}]);
//# sourceMappingURL=44.6793b2f9.chunk.js.map