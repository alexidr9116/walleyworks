(this.webpackJsonpwalleyworks=this.webpackJsonpwalleyworks||[]).push([[31],{1321:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var r=a(2),n=a(26),i=a(75),c=a.n(i),o=a(123),s=a(312),l=a(1221),d=a(38),j=a(1339),b=a(0),u=["links","activeLast"];function x(e){var t=e.links,a=e.activeLast,i=void 0!==a&&a,c=Object(n.a)(e,u),l=t[t.length-1].name,d=t.map((function(e){return Object(b.jsx)(h,{link:e},e.name)})),x=t.map((function(e){return Object(b.jsx)("div",{children:e.name!==l?Object(b.jsx)(h,{link:e}):Object(b.jsx)(s.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:l})},e.name)}));return Object(b.jsx)(j.a,Object(r.a)(Object(r.a)({separator:Object(b.jsx)(o.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},c),{},{children:i?d:x}))}function h(e){var t=e.link,a=t.href,r=t.name,n=t.icon;return Object(b.jsxs)(l.a,{variant:"body2",component:d.b,to:a||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[n&&Object(b.jsx)(o.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:n}),r]},r)}var p=["links","action","heading","moreLink","sx"];function O(e){var t=e.links,a=e.action,i=e.heading,d=e.moreLink,j=void 0===d?[]:d,u=e.sx,h=Object(n.a)(e,p);return Object(b.jsxs)(o.a,{sx:Object(r.a)({mb:5},u),children:[Object(b.jsxs)(o.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(b.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:i}),Object(b.jsx)(x,Object(r.a)({links:t},h))]}),a&&Object(b.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(b.jsx)(o.a,{sx:{mt:2},children:c()(j)?Object(b.jsx)(l.a,{href:j,target:"_blank",rel:"noopener",variant:"body2",children:j}):j.map((function(e){return Object(b.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1325:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return R}));var r=a(2),n=a(6),i=a(123),c=a(0),o=Object(n.a)(i.a,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"center","& li":{width:18,height:18,opacity:.32,cursor:"pointer"},"& li.slick-active":Object(r.a)({opacity:1},t&&{"& .dotActive":{width:16,borderRadius:6}})}})),s=Object(n.a)("div")((function(){return{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}})),l=Object(n.a)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function d(e){var t=null===e||void 0===e?void 0:e.color,a=(null===e||void 0===e?void 0:e.rounded)||!1;return{appendDots:function(t){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o,Object(r.a)(Object(r.a)({rounded:a,component:"ul"},e),{},{children:t}))})},customPaging:function(){return Object(c.jsx)(s,{children:Object(c.jsx)(l,{className:"dotActive",sx:{bgcolor:t||"primary.main"}})})}}}var j=a(26),b=a(53),u=a(1203),x=a(27),h=a(43),p=["filled","customIcon","onNext","onPrevious","children"],O=Object(n.a)(h.b,{shouldForwardProp:function(e){return"filled"!==e}})((function(e){var t=e.filled,a=e.theme;return Object(r.a)({width:40,height:40,cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:a.palette.text.primary}},t&&{opacity:.48,borderRadius:1.5*Number(a.shape.borderRadius),color:a.palette.common.white,backgroundColor:a.palette.grey[900],"&:hover":{opacity:1,color:a.palette.common.white,backgroundColor:a.palette.grey[900]}})}));function m(e){var t=e.filled,a=void 0!==t&&t,n=e.customIcon,o=e.onNext,s=e.onPrevious,l=e.children,d=Object(j.a)(e,p),x="rtl"===Object(b.a)().direction,h={position:"absolute",mt:-2.5,top:"50%",zIndex:9};return l?Object(c.jsxs)(i.a,Object(r.a)(Object(r.a)({},d),{},{children:[Object(c.jsx)(i.a,{className:"arrow left",sx:Object(r.a)(Object(r.a)({},h),{},{left:0}),children:Object(c.jsx)(O,{filled:a,onClick:s,children:v(n,x)})}),l,Object(c.jsx)(i.a,{className:"arrow right",sx:Object(r.a)(Object(r.a)({},h),{},{right:0}),children:Object(c.jsx)(O,{filled:a,onClick:o,children:f(n,x)})})]})):Object(c.jsxs)(u.a,Object(r.a)(Object(r.a)({direction:"row",spacing:1},d),{},{children:[Object(c.jsx)(O,{className:"arrow left",filled:a,onClick:s,children:v(n,x)}),Object(c.jsx)(O,{className:"arrow right",filled:a,onClick:o,children:f(n,x)})]}))}var v=function(e,t){return Object(c.jsx)(x.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},f=function(e,t){return Object(c.jsx)(x.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20},t&&{transform:" scaleX(-1)"})})},g=a(52),w=a(1223),y=a(312),k=["index","total","onNext","onPrevious","customIcon"],M=Object(n.a)(i.a)((function(e){var t=e.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:Object(g.a)(t.palette.grey[900],.48)}})),S=Object(n.a)(w.a)((function(e){return{padding:6,opacity:.48,color:e.theme.palette.common.white,"&:hover":{opacity:1}}}));function R(e){var t=e.index,a=e.total,n=e.onNext,i=e.onPrevious,o=e.customIcon,s=Object(j.a)(e,k),l="rtl"===Object(b.a)().direction;return Object(c.jsxs)(M,Object(r.a)(Object(r.a)({},s),{},{children:[Object(c.jsx)(S,{size:"small",onClick:i,children:I(o,l)}),Object(c.jsxs)(y.a,{variant:"subtitle2",children:[t+1,"/",a]}),Object(c.jsx)(S,{size:"small",onClick:n,children:C(o,l)})]}))}var I=function(e,t){return Object(c.jsx)(x.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},C=function(e,t){return Object(c.jsx)(x.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20},t&&{transform:" scaleX(-1)"})})}},1329:function(e,t,a){"use strict";var r=a(2),n=a(26),i=a(1),c=a(1221),o=a(312),s=a(58),l=a(0),d=["asLink","variant","line","persistent","children","sx"],j=Object(i.forwardRef)((function(e,t){var a=e.asLink,i=e.variant,j=void 0===i?"body1":i,b=e.line,u=void 0===b?2:b,x=e.persistent,h=void 0!==x&&x,p=e.children,O=e.sx,m=Object(n.a)(e,d),v=Object(s.a)(j).lineHeight,f=Object(r.a)(Object(r.a)({overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:u,WebkitBoxOrient:"vertical"},h&&{height:v*u}),O);return a?Object(l.jsx)(c.a,Object(r.a)(Object(r.a)({color:"inherit",ref:t,variant:j,sx:Object(r.a)({},f)},m),{},{children:p})):Object(l.jsx)(o.a,Object(r.a)(Object(r.a)({ref:t,variant:j,sx:Object(r.a)({},f)},m),{},{children:p}))}));t.a=j},1339:function(e,t,a){"use strict";var r=a(14),n=a(13),i=a(4),c=a(3),o=a(7),s=a(1),l=(a(201),a(8),a(11)),d=a(166),j=a(6),b=a(15),u=a(312),x=a(52),h=a(48),p=a(0),O=Object(h.a)(Object(p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=a(1215),v=Object(j.a)(m.a,{skipSx:!0})((function(e){var t=e.theme;return Object(c.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(c.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(c.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(x.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(x.c)(t.palette.grey[600],.12)})})})),f=Object(j.a)(O)({width:24,height:16});var g=function(e){var t=e;return Object(p.jsx)("li",{children:Object(p.jsx)(v,Object(c.a)({focusRipple:!0},e,{ownerState:t,children:Object(p.jsx)(f,{ownerState:t})}))})},w=a(100),y=a(113);function k(e){return Object(w.a)("MuiBreadcrumbs",e)}var M=Object(y.a)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=Object(j.a)(u.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(i.a)({},"& .".concat(M.li),t.li),t.root]}})({}),I=Object(j.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),C=Object(j.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function N(e,t,a,r){return e.reduce((function(n,i,c){return c<e.length-1?n=n.concat(i,Object(p.jsx)(C,{"aria-hidden":!0,className:t,ownerState:r,children:a},"separator-".concat(c))):n.push(i),n}),[])}var T=s.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiBreadcrumbs"}),i=a.children,j=a.className,u=a.component,x=void 0===u?"nav":u,h=a.expandText,O=void 0===h?"Show path":h,m=a.itemsAfterCollapse,v=void 0===m?1:m,f=a.itemsBeforeCollapse,w=void 0===f?1:f,y=a.maxItems,M=void 0===y?8:y,C=a.separator,T=void 0===C?"/":C,L=Object(o.a)(a,S),A=s.useState(!1),P=Object(n.a)(A,2),z=P[0],B=P[1],E=Object(c.a)({},a,{component:x,expanded:z,expandText:O,itemsAfterCollapse:v,itemsBeforeCollapse:w,maxItems:M,separator:T}),H=function(e){var t=e.classes;return Object(d.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,t)}(E),W=s.useRef(null),F=s.Children.toArray(i).filter((function(e){return s.isValidElement(e)})).map((function(e,t){return Object(p.jsx)("li",{className:H.li,children:e},"child-".concat(t))}));return Object(p.jsx)(R,Object(c.a)({ref:t,component:x,color:"text.secondary",className:Object(l.a)(H.root,j),ownerState:E},L,{children:Object(p.jsx)(I,{className:H.ol,ref:W,ownerState:E,children:N(z||M&&F.length<=M?F:function(e){return w+v>=e.length?e:[].concat(Object(r.a)(e.slice(0,w)),[Object(p.jsx)(g,{"aria-label":O,onClick:function(){B(!0);var e=W.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(r.a)(e.slice(e.length-v,e.length)))}(F),H.separator,T,E)})}))}));t.a=T},1349:function(e,t,a){"use strict";var r=a(1),n=r.createContext({});t.a=n},1396:function(e,t,a){"use strict";var r=a(29),n=a(18),i=a.n(n),c=a(19),o=a(444),s=a(434),l=(a(44),a(32)),d=function(){var e=Object(r.a)(i.a.mark((function e(t,a){var r,n,d,j,b,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("/api/product/categories");case 3:return r=e.sent,n=r.data.categories,Object(c.a)(Object(o.b)(n)),e.next=8,l.a.get("/api/product/sizes");case 8:return r=e.sent,d=r.data.sizes,Object(c.a)(Object(o.c)(d)),e.next=13,l.a.get("/api/product/tags");case 13:if(r=e.sent,j=r.data.tags,Object(c.a)(Object(o.d)(j)),!t){e.next=27;break}return e.next=19,l.a.post("/api/product/userCategories");case 19:return r=e.sent,b=r.data.userCategories,Object(c.a)(Object(o.e)(b)),e.next=24,l.a.get("/api/account/general");case 24:r=e.sent,u=r.data.account,Object(c.a)(Object(s.d)(u));case 27:e.next=32;break;case 29:e.prev=29,e.t0=e.catch(0),console.log(e.t0);case 32:a();case 33:case"end":return e.stop()}}),e,null,[[0,29]])})));return function(t,a){return e.apply(this,arguments)}}();t.a=d},1502:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"g",(function(){return M})),a.d(t,"f",(function(){return E})),a.d(t,"e",(function(){return G})),a.d(t,"d",(function(){return _})),a.d(t,"b",(function(){return K})),a.d(t,"c",(function(){return ee}));var r=a(14),n=a(1294),i=a(123),c=a(1218),o=a(1641),s=a(1642),l=a(395),d=a(59),j=a(60),b=a(167),u=a(0),x=Object(r.a)(Array(9)).map((function(e,t){return{cover:b.M.image.cover(t),title:b.M.text.title(t),name:b.M.name.fullName(t),avatar:b.M.image.avatar(t),price:b.M.number.price(t)}})),h="/static/hero.jpg";b.M.image.product(24);function p(){var e=Object(j.a)("down","md");return Object(u.jsxs)(n.a,{container:!0,spacing:4,sx:{mb:5},justifyContent:"space-between",children:[Object(u.jsx)(n.a,{item:!0,xs:6,sm:6,md:3,children:Object(u.jsx)(d.a,{src:x[0].cover,ratio:"4/3",sx:{borderRadius:1}})}),e&&Object(u.jsx)(n.a,{item:!0,xs:6,sm:6,md:3,children:Object(u.jsxs)(i.a,{sx:{textAlign:"center"},children:[Object(u.jsx)(l.LazyLoadImage,{src:h,width:"60%",height:"auto",style:{margin:"auto"}}),Object(u.jsx)(c.a,{variant:"contained",children:"See Who's Streaming"})]})}),Object(u.jsx)(n.a,{item:!0,xs:12,sm:12,md:6,children:Object(u.jsx)(o.a,{variant:"quilted",gap:10,cols:4,rows:2,children:x.map((function(e,t){return t>0&&Object(u.jsx)(s.a,{children:Object(u.jsx)(d.a,{src:e.cover,ratio:"4/3",sx:{borderRadius:1}})},t)}))})}),!e&&Object(u.jsx)(n.a,{item:!0,xs:6,sm:6,md:3,children:Object(u.jsxs)(i.a,{sx:{textAlign:"center"},children:[Object(u.jsx)(l.LazyLoadImage,{src:h,width:"60%",height:"auto",style:{margin:"auto"}}),Object(u.jsx)(c.a,{variant:"contained",sx:{mt:2},children:"See Who's Streaming"})]})})]})}var O=a(2),m=a(1),v=a(1328),f=a.n(v),g=a(53),w=a(312),y=a(1325),k={light:b.M.image.product(7),video:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"};function M(){var e=Object(m.useRef)(null),t=Object(g.a)(),a=Object(O.a)({dots:!0,arrows:!0,autoplay:!0,slidesToShow:1,rtl:Boolean("rtl"===t.direction)},Object(y.c)({rounded:!0,sx:{mt:3}}));return Object(u.jsxs)(n.a,{container:!0,spacing:5,justifyContent:"space-between",children:[Object(u.jsx)(n.a,{item:!0,xs:12,sm:5,children:Object(u.jsx)(i.a,{sx:{position:"relative",p:3},children:Object(u.jsxs)(f.a,Object(O.a)(Object(O.a)({ref:e},a),{},{children:[Object(u.jsxs)(i.a,{textAlign:"center",children:[Object(u.jsx)(w.a,{variant:"h4",sx:{},children:"WELCOME TO YOUR"}),Object(u.jsx)(w.a,{variant:"h4",sx:{},children:"SOCIAL-SELLING"}),Object(u.jsx)(w.a,{variant:"h4",sx:{},children:"NETWORK!"}),Object(u.jsx)(w.a,{sx:{},children:"We\u2019ve built the first online platform for live streaming and home shopping shows with a built-in buying experience that anyone can use."}),Object(u.jsx)(c.a,{variant:"contained",sx:{mt:3},children:"Start Streaming For Free"})]},"join-1"),Object(u.jsxs)(i.a,{textAlign:"center",children:[Object(u.jsx)(w.a,{variant:"h4",sx:{},children:"THE SHOPPING"}),Object(u.jsx)(w.a,{variant:"h4",sx:{color:t.primary},children:"EXPERIENCE EVERYONE"}),Object(u.jsx)(w.a,{variant:"h4",sx:{},children:"IS TALKING ABOUT!"}),Object(u.jsx)(w.a,{sx:{},children:"An always live social - shopping network, with your favorite brands, artists, celebrities and useful products."}),Object(u.jsx)(c.a,{variant:"contained",sx:{mt:3},children:"join For Free"})]},"join-2")]}))})}),Object(u.jsx)(n.a,{item:!0,xs:12,sm:7,children:Object(u.jsx)(i.a,{sx:{width:"100%",maxHeight:"60vh",height:"auto",position:"relative",backgroundColor:"black"},children:Object(u.jsx)("video",{controls:!0,muted:!0,autoPlay:!0,width:"100%",height:"100%",poster:k.light,children:Object(u.jsx)("source",{src:k.video,type:"video/mp4"})})})})]})}var S=a(36),R=a(6),I=a(52),C=a(631),N=a(1203),T=a(632),L=a(1329),A=a(43),P=a(200),z=Object(r.a)(Array(6)).map((function(e,t){return{id:b.M.id(t),cover:b.M.image.cover(t),title:b.M.text.title(t),name:b.M.name.fullName(t),avatar:b.M.image.avatar(t),comingAt:b.M.time(t)}})),B=Object(R.a)("div")((function(e){var t=e.theme;return{top:0,right:0,bottom:0,left:0,zIndex:9,position:"absolute",backgroundColor:Object(I.a)(t.palette.grey[900],.42)}}));function E(){var e=Object(m.useRef)(null),t=Object(g.a)(),a=Object(S.g)(),r={arrows:!1,slidesToShow:4,centerMode:!0,centerPadding:"0px",rtl:Boolean("rtl"===t.direction),responsive:[{breakpoint:1279,settings:{slidesToShow:3}},{breakpoint:959,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]};return Object(u.jsxs)(i.a,{children:[Object(u.jsx)(A.d,{variants:Object(A.g)().inUp,children:Object(u.jsx)(w.a,{variant:"h4",sx:{mb:1},children:"New & UpComings"})}),Object(u.jsx)(i.a,{sx:{position:"relative"},children:Object(u.jsx)(y.b,{filled:!0,onNext:function(){e.current.slickNext()},onPrevious:function(){e.current.slickPrev()},children:Object(u.jsx)(f.a,Object(O.a)(Object(O.a)({ref:e},r),{},{children:z.map((function(e,t){return Object(u.jsx)(A.d,{variants:Object(A.g)().in,sx:{px:1.5,py:1},children:Object(u.jsx)(H,{item:e,handleClick:function(){return function(e){console.log(e),a("/live-ecommerce/liveshow/".concat(e.id))}(e)}})},t)}))}))})})]})}function H(e){var t=e.item,a=e.handleClick,r=Object(g.a)(),n=t.avatar,c=t.name,o=t.title,s=t.cover,l=t.comingAt;return Object(u.jsx)(C.a,{sx:{my:2,borderRadius:1,bgcolor:"background.neutral","&:hover":{boxShadow:"0px 4px 10px 3px ".concat(r.palette.grey[50080])}},children:Object(u.jsxs)(i.a,{sx:{position:"relative"},onClick:a,children:[Object(u.jsx)(d.a,{src:s,ratio:"16/9",sx:{borderRadius:1}}),Object(u.jsx)(B,{sx:{borderRadius:1}}),Object(u.jsxs)(N.a,{sx:{left:16,zIndex:9,top:10,position:"absolute"},children:[Object(u.jsx)(w.a,{variant:"h6",sx:{color:"#f0f0f0",display:"block"},children:Object(P.b)(l)}),Object(u.jsx)(w.a,{variant:"h3",sx:{color:"#fff",display:"block"},children:Object(P.e)(l)})]}),Object(u.jsx)(N.a,{spacing:2.5,sx:{left:16,zIndex:9,bottom:10,position:"absolute"},children:Object(u.jsxs)(N.a,{direction:"row",alignItems:"center",spacing:2,sx:{pr:5},children:[Object(u.jsx)(T.a,{alt:c,src:n}),Object(u.jsxs)("div",{children:[Object(u.jsx)(L.a,{sx:{color:"#fff"},line:1,children:o}),Object(u.jsx)(w.a,{sx:{color:"#fff",display:"block"},children:c})]})]})})]})})}var W=a(235),F=a(79),U=Object(r.a)(Array(10)).map((function(e,t){return{cover:b.M.image.cover(t),title:b.M.text.title(t),name:b.M.name.fullName(t),avatar:b.M.image.avatar(t),id:b.M.id(t),active:"passed",date:b.M.time(t)}})),X=Object(R.a)("div")((function(e){var t=e.theme;return Object(O.a)(Object(O.a)({},Object(F.a)(t).bgBlur()),{},{position:"absolute",bottom:0,left:0,right:0,zIndex:99,display:"flex",alignItems:"center",padding:t.spacing(1,2),backgroundColor:t.palette.grey[100040]})}));function G(){var e=Object(m.useRef)(null),t=Object(g.a)(),a=Object(S.g)(),r={arrows:!1,slidesToShow:4,centerMode:!0,centerPadding:"0px",rtl:Boolean("rtl"===t.direction),responsive:[{breakpoint:1279,settings:{slidesToShow:3}},{breakpoint:959,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]};return Object(u.jsxs)(C.a,{sx:{py:1,my:4},children:[Object(u.jsx)(A.d,{variants:Object(A.g)().inUp,children:Object(u.jsx)(w.a,{variant:"h4",sx:{mb:1,pl:3},children:"Recommend Streams"})}),Object(u.jsx)(i.a,{sx:{position:"relative"},children:Object(u.jsx)(y.b,{filled:!0,onNext:function(){e.current.slickNext()},onPrevious:function(){e.current.slickPrev()},children:Object(u.jsx)(f.a,Object(O.a)(Object(O.a)({ref:e},r),{},{children:U.map((function(e,t){return Object(u.jsx)(D,{item:e,handleClick:function(){return function(e,t){"product"===e.type?a("/live-ecommerce/product/".concat(e.id)):a("/live-ecommerce/liveshow/".concat(e.id))}(e)}},t)}))}))})})]})}function D(e){var t=e.item,a=Object(g.a)(),r=t.avatar,n=t.name,c=t.title,o=t.cover,s=t.date,l=t.active;return Object(u.jsxs)(C.a,{sx:{mx:1.5,my:2,borderRadius:1,bgcolor:"background.neutral",position:"relative",overflow:"hidden",border:"1px solid lightgrey","&:hover":{boxShadow:"0px 4px 10px 3px ".concat(a.palette.grey[50080])}},children:[Object(u.jsx)(d.a,{src:o,ratio:"5/4",sx:{borderRadius:1}}),Object(u.jsx)(i.a,{sx:{left:10,zIndex:9,top:10,position:"absolute",bgcolor:"live"===l?"primary.main":"upcoming"===l?"grey.50056":"grey.100080",color:"white",borderRadius:1,px:1,fontSize:12},children:"live"===l?"Live":Object(P.c)(s)}),Object(u.jsx)(X,{children:Object(u.jsxs)(N.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(u.jsx)(T.a,{alt:n,src:r,sx:{border:"2px solid white"}}),Object(u.jsxs)("div",{children:[Object(u.jsx)(L.a,{sx:{color:"#fff !important",lineHeight:1},variant:"body2",line:2,children:c}),Object(u.jsx)(w.a,{sx:{color:"#fff",display:"block",px:1},variant:"caption",children:n})]})]})})]})}function Y(e){var t=e.cardData,a=e.sectionTitle,r=Object(m.useRef)(null),n=Object(g.a)(),c=Object(S.g)(),o={arrows:!1,slidesToShow:4,centerMode:!0,centerPadding:"0px",rtl:Boolean("rtl"===n.direction),responsive:[{breakpoint:1279,settings:{slidesToShow:3}},{breakpoint:959,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]};return Object(u.jsxs)(i.a,{sx:{pb:2},children:[Object(u.jsx)(A.d,{variants:Object(A.g)().inUp,children:Object(u.jsx)(w.a,{variant:"h4",sx:{mb:1},children:a})}),Object(u.jsx)(i.a,{sx:{position:"relative"},children:Object(u.jsx)(y.b,{filled:!0,onNext:function(){r.current.slickNext()},onPrevious:function(){r.current.slickPrev()},children:Object(u.jsx)(f.a,Object(O.a)(Object(O.a)({ref:r},o),{},{children:t.map((function(e,t){return Object(u.jsx)(q,{item:e,handleClick:function(){return function(e,t){console.log(e),"product"===e.type?c("/live-ecommerce/product/".concat(e.id)):c("/live-ecommerce/liveshow/".concat(e.id))}(e)}},t)}))}))})})]})}function q(e){var t=e.item,a=e.handleClick,r=t.avatar,n=t.name,c=t.title,o=t.cover,s=t.price,l=Object(g.a)();return Object(u.jsxs)(C.a,{sx:{mx:1,my:4,borderRadius:1,bgcolor:"background.neutral","&:hover":{boxShadow:"0px 4px 10px 3px ".concat(l.palette.grey[50080])}},onClick:a,children:[Object(u.jsx)(N.a,{spacing:2.5,sx:{px:3,py:1},children:Object(u.jsxs)(N.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(u.jsx)(T.a,{alt:n,src:r,width:14,height:14}),Object(u.jsxs)("div",{children:[Object(u.jsx)(L.a,{line:1,children:c}),Object(u.jsx)(w.a,{variant:"caption",sx:{color:"text.disabled",mt:.5,display:"block"},children:n})]})]})}),Object(u.jsxs)(i.a,{sx:{px:1,position:"relative"},children:[Object(u.jsx)(W.a,{variant:"filled",color:"primary",sx:{right:16,zIndex:9,bottom:50,position:"absolute",textTransform:"capitalize"},children:s}),Object(u.jsx)(d.a,{src:o,ratio:"16/9",sx:{borderRadius:1}}),Object(u.jsx)(L.a,{line:1,sx:{py:.5,px:2},children:c})]})]})}var V=Object(r.a)(Array(10)).map((function(e,t){return{cover:b.M.image.product(t),title:b.M.text.title(t),name:b.M.name.fullName(t),avatar:b.M.image.avatar(t),price:b.M.number.price(t),id:b.M.id(t),type:"product"}}));function _(){return Object(u.jsx)(Y,{sectionTitle:"Recommend Products",cardData:V})}var J=Object(r.a)(Array(6)).map((function(e,t){return{id:b.M.id(t),cover:b.M.image.cover(t),title:b.M.text.title(t),name:b.M.name.fullName(t),avatar:b.M.image.avatar(t)}}));function K(){var e=Object(m.useRef)(null),t=Object(g.a)(),a={arrows:!1,slidesToShow:4,centerMode:!0,centerPadding:"0px",rtl:Boolean("rtl"===t.direction),responsive:[{breakpoint:1279,settings:{slidesToShow:3}},{breakpoint:959,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]};return Object(u.jsxs)(i.a,{sx:{pb:2},children:[Object(u.jsx)(A.d,{variants:Object(A.g)().inUp,children:Object(u.jsx)(w.a,{variant:"h4",sx:{mb:1},children:"Popular Channels"})}),Object(u.jsx)(i.a,{sx:{position:"relative"},children:Object(u.jsx)(y.b,{filled:!0,onNext:function(){e.current.slickNext()},onPrevious:function(){e.current.slickPrev()},children:Object(u.jsx)(f.a,Object(O.a)(Object(O.a)({ref:e},a),{},{children:J.map((function(e,t){return Object(u.jsx)(A.d,{variants:Object(A.g)().in,sx:{px:1.5,py:1},children:Object(u.jsx)(Q,{item:e})},t)}))}))})})]})}function Q(e){var t=e.item,a=Object(g.a)(),r=t.avatar,n=t.name,o=t.title,s=t.cover;return Object(u.jsx)(C.a,{sx:{my:2,borderRadius:1,bgcolor:"background.neutral","&:hover":{boxShadow:"0px 4px 10px 3px ".concat(a.palette.grey[50080])}},children:Object(u.jsxs)(i.a,{sx:{position:"relative"},children:[Object(u.jsx)(d.a,{src:s,ratio:"1/1",sx:{borderRadius:1}}),Object(u.jsx)(N.a,{sx:{right:16,zIndex:9,top:10,position:"absolute"},children:Object(u.jsx)(c.a,{variant:"outlined",sx:{px:1,py:.2},children:"follow"})}),Object(u.jsx)(N.a,{spacing:2.5,sx:{left:16,zIndex:9,bottom:10,position:"absolute"},children:Object(u.jsxs)(N.a,{direction:"row",alignItems:"center",spacing:2,sx:{pr:5},children:[Object(u.jsx)(T.a,{alt:n,src:r}),Object(u.jsxs)("div",{children:[Object(u.jsx)(L.a,{sx:{color:"#fff"},line:1,children:o}),Object(u.jsx)(w.a,{sx:{color:"#fff",display:"block"},children:n})]})]})})]})})}var Z=Object(r.a)(Array(6)).map((function(e,t){return{cover:b.M.image.cover(t),title:b.M.text.title(t),name:b.M.name.fullName(t),avatar:b.M.image.avatar(t),price:b.M.number.price(t)}})),$=Object(r.a)(Array(5)).map((function(e,t){return{cover:b.M.image.product(t),title:b.M.text.title(t),name:b.M.name.fullName(t),avatar:b.M.image.avatar(t),price:b.M.number.price(t)}}));function ee(){Object(g.a)();var e=$.concat(Z);return Object(u.jsxs)(i.a,{sx:{pb:2},children:[Object(u.jsx)(A.d,{variants:Object(A.g)().inUp,children:Object(u.jsx)(w.a,{variant:"h4",sx:{mb:1},children:"Recent Shows And Products"})}),Object(u.jsx)(n.a,{container:!0,spacing:3,children:e.map((function(e,t){return Object(u.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(u.jsx)(te,{item:e})},t)}))})]})}function te(e){var t=e.item,a=t.avatar,r=t.name,n=t.title,c=t.cover,o=t.price,s=Object(g.a)();return Object(u.jsxs)(C.a,{sx:{borderRadius:1,bgcolor:"background.neutral","&:hover":{boxShadow:"0px 4px 10px 3px ".concat(s.palette.grey[50080])}},children:[Object(u.jsx)(N.a,{spacing:2.5,sx:{px:3,py:1},children:Object(u.jsxs)(N.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(u.jsx)(T.a,{alt:r,src:a,width:14,height:14}),Object(u.jsxs)("div",{children:[Object(u.jsx)(L.a,{line:1,children:n}),Object(u.jsx)(w.a,{variant:"caption",sx:{color:"text.disabled",mt:.5,display:"block"},children:r})]})]})}),Object(u.jsxs)(i.a,{sx:{px:1,position:"relative"},children:[Object(u.jsx)(W.a,{variant:"filled",color:"primary",sx:{right:16,zIndex:9,bottom:50,position:"absolute",textTransform:"capitalize"},children:o}),Object(u.jsx)(d.a,{src:c,ratio:"16/9",sx:{borderRadius:1}}),Object(u.jsx)(L.a,{line:1,sx:{py:.5,px:2},children:n})]})]})}},1641:function(e,t,a){"use strict";var r=a(7),n=a(3),i=a(166),c=a(11),o=(a(8),a(1)),s=a(6),l=a(15),d=a(100),j=a(113);function b(e){return Object(d.a)("MuiImageList",e)}Object(j.a)("MuiImageList",["root","masonry","quilted","standard","woven"]);var u=a(1349),x=a(0),h=["children","className","cols","component","rowHeight","gap","style","variant"],p=Object(s.a)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant]]}})((function(e){var t=e.ownerState;return Object(n.a)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===t.variant&&{display:"block"})})),O=o.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiImageList"}),s=a.children,d=a.className,j=a.cols,O=void 0===j?2:j,m=a.component,v=void 0===m?"ul":m,f=a.rowHeight,g=void 0===f?"auto":f,w=a.gap,y=void 0===w?4:w,k=a.style,M=a.variant,S=void 0===M?"standard":M,R=Object(r.a)(a,h),I=o.useMemo((function(){return{rowHeight:g,gap:y,variant:S}}),[g,y,S]);o.useEffect((function(){0}),[]);var C="masonry"===S?Object(n.a)({columnCount:O,columnGap:y},k):Object(n.a)({gridTemplateColumns:"repeat(".concat(O,", 1fr)"),gap:y},k),N=Object(n.a)({},a,{component:v,gap:y,rowHeight:g,variant:S}),T=function(e){var t=e.classes,a={root:["root",e.variant]};return Object(i.a)(a,b,t)}(N);return Object(x.jsx)(p,Object(n.a)({as:v,className:Object(c.a)(T.root,T[S],d),ref:t,style:C,ownerState:N},R,{children:Object(x.jsx)(u.a.Provider,{value:I,children:s})}))}));t.a=O},1642:function(e,t,a){"use strict";var r=a(4),n=a(7),i=a(3),c=a(166),o=a(11),s=(a(8),a(1)),l=(a(201),a(1349)),d=a(6),j=a(15),b=a(182),u=a(100),x=a(113);function h(e){return Object(u.a)("MuiImageListItem",e)}var p=Object(x.a)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),O=a(0),m=["children","className","cols","component","rows","style"],v=Object(d.a)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[Object(r.a)({},"& .".concat(p.img),t.img),t.root,t[a.variant]]}})((function(e){var t=e.ownerState;return Object(i.a)({display:"inline-block",position:"relative",lineHeight:0},"standard"===t.variant&&{display:"flex",flexDirection:"column"},"woven"===t.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},Object(r.a)({},"& .".concat(p.img),Object(i.a)({objectFit:"cover",width:"100%",height:"100%"},"standard"===t.variant&&{height:"auto",flexGrow:1})))})),f=s.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiImageListItem"}),r=a.children,d=a.className,u=a.cols,x=void 0===u?1:u,p=a.component,f=void 0===p?"li":p,g=a.rows,w=void 0===g?1:g,y=a.style,k=Object(n.a)(a,m),M=s.useContext(l.a),S=M.rowHeight,R=void 0===S?"auto":S,I=M.gap,C=M.variant,N="auto";"woven"===C?N=void 0:"auto"!==R&&(N=R*w+I*(w-1));var T=Object(i.a)({},a,{cols:x,component:f,gap:I,rowHeight:R,rows:w,variant:C}),L=function(e){var t=e.classes,a={root:["root",e.variant],img:["img"]};return Object(c.a)(a,h,t)}(T);return Object(O.jsx)(v,Object(i.a)({as:f,className:Object(o.a)(L.root,L[C],d),ref:t,style:Object(i.a)({height:N,gridColumnEnd:"masonry"!==C?"span ".concat(x):void 0,gridRowEnd:"masonry"!==C?"span ".concat(w):void 0,marginBottom:"masonry"===C?I:void 0},y),ownerState:T},k,{children:s.Children.map(r,(function(e){return s.isValidElement(e)?"img"===e.type||Object(b.a)(e,["Image"])?s.cloneElement(e,{className:Object(o.a)(L.img,e.props.className)}):e:null}))}))}));t.a=f},2107:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var r=a(1298),n=a(63),i=a(44),c=a(420),o=(a(1321),a(1502)),s=a(13),l=a(8),d=a.n(l),j=a(1284),b=a(6),u=a(52),x=a(123),h=a(1),p=a(64),O=a(1396),m=a(0),v=Object(b.a)("div")((function(e){return{right:0,bottom:0,zIndex:99999,width:"100%",height:"100%",position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e.theme.palette.background.default}}));function f(e){var t=e.isAuthed,a=Object(h.useState)(!0),r=Object(s.a)(a,2),n=r[0],i=r[1];return Object(h.useEffect)((function(){Object(O.a)(t,(function(){return i(!1)}))}),[]),Object(m.jsx)(m.Fragment,{children:n&&Object(m.jsxs)(v,{children:[Object(m.jsx)(j.a.div,{initial:{rotateY:0},animate:{rotateY:360},transition:{duration:2,ease:"easeInOut",repeatDelay:1,repeat:1/0},children:Object(m.jsx)(p.a,{disabledLink:!0,sx:{width:64,height:64}})}),Object(m.jsx)(x.a,{component:j.a.div,animate:{scale:[1.2,1,1,1.2,1.2],rotate:[270,0,0,270,270],opacity:[.25,1,1,1,.25],borderRadius:["25%","25%","50%","50%","25%"]},transition:{ease:"linear",duration:3.2,repeat:1/0},sx:{width:100,height:100,borderRadius:"25%",position:"absolute",border:function(e){return"solid 3px ".concat(Object(u.a)(e.palette.primary.dark,.24))}}}),Object(m.jsx)(x.a,{component:j.a.div,animate:{scale:[1,1.2,1.2,1,1],rotate:[0,270,270,0,0],opacity:[1,.25,.25,.25,1],borderRadius:["25%","25%","50%","50%","25%"]},transition:{ease:"linear",duration:3.2,repeat:1/0},sx:{width:120,height:120,borderRadius:"25%",position:"absolute",border:function(e){return"solid 8px ".concat(Object(u.a)(e.palette.primary.dark,.24))}}}),"initializing..."]})})}function g(){var e=Object(n.a)().themeStretch,t=null!==Object(i.a)().user;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{isAuthed:t}),Object(m.jsx)(c.a,{title:"The starting point for your next project",children:Object(m.jsxs)(r.a,{maxWidth:!e&&"lg",sx:{position:"relative"},children:[Object(m.jsx)(o.a,{}),Object(m.jsx)(o.g,{}),Object(m.jsx)(o.e,{}),Object(m.jsx)(o.f,{}),Object(m.jsx)(o.d,{}),Object(m.jsx)(o.c,{})]})})]})}f.prototype={isAuthed:d.a.bool}}}]);
//# sourceMappingURL=31.65a36d1a.chunk.js.map