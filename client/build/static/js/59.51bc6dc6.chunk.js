(this.webpackJsonpwalleyworks=this.webpackJsonpwalleyworks||[]).push([[59],{1325:function(e,t,a){"use strict";a.d(t,"c",(function(){return j})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return A}));var r=a(2),i=a(6),n=a(123),c=a(0),o=Object(i.a)(n.a,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"center","& li":{width:18,height:18,opacity:.32,cursor:"pointer"},"& li.slick-active":Object(r.a)({opacity:1},t&&{"& .dotActive":{width:16,borderRadius:6}})}})),s=Object(i.a)("div")((function(){return{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}})),l=Object(i.a)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function j(e){var t=null===e||void 0===e?void 0:e.color,a=(null===e||void 0===e?void 0:e.rounded)||!1;return{appendDots:function(t){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o,Object(r.a)(Object(r.a)({rounded:a,component:"ul"},e),{},{children:t}))})},customPaging:function(){return Object(c.jsx)(s,{children:Object(c.jsx)(l,{className:"dotActive",sx:{bgcolor:t||"primary.main"}})})}}}var d=a(26),b=a(53),h=a(1203),x=a(27),O=a(43),u=["filled","customIcon","onNext","onPrevious","children"],p=Object(i.a)(O.b,{shouldForwardProp:function(e){return"filled"!==e}})((function(e){var t=e.filled,a=e.theme;return Object(r.a)({width:40,height:40,cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:a.palette.text.primary}},t&&{opacity:.48,borderRadius:1.5*Number(a.shape.borderRadius),color:a.palette.common.white,backgroundColor:a.palette.grey[900],"&:hover":{opacity:1,color:a.palette.common.white,backgroundColor:a.palette.grey[900]}})}));function m(e){var t=e.filled,a=void 0!==t&&t,i=e.customIcon,o=e.onNext,s=e.onPrevious,l=e.children,j=Object(d.a)(e,u),x="rtl"===Object(b.a)().direction,O={position:"absolute",mt:-2.5,top:"50%",zIndex:9};return l?Object(c.jsxs)(n.a,Object(r.a)(Object(r.a)({},j),{},{children:[Object(c.jsx)(n.a,{className:"arrow left",sx:Object(r.a)(Object(r.a)({},O),{},{left:0}),children:Object(c.jsx)(p,{filled:a,onClick:s,children:g(i,x)})}),l,Object(c.jsx)(n.a,{className:"arrow right",sx:Object(r.a)(Object(r.a)({},O),{},{right:0}),children:Object(c.jsx)(p,{filled:a,onClick:o,children:f(i,x)})})]})):Object(c.jsxs)(h.a,Object(r.a)(Object(r.a)({direction:"row",spacing:1},j),{},{children:[Object(c.jsx)(p,{className:"arrow left",filled:a,onClick:s,children:g(i,x)}),Object(c.jsx)(p,{className:"arrow right",filled:a,onClick:o,children:f(i,x)})]}))}var g=function(e,t){return Object(c.jsx)(x.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},f=function(e,t){return Object(c.jsx)(x.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20},t&&{transform:" scaleX(-1)"})})},v=a(52),w=a(1223),y=a(312),I=["index","total","onNext","onPrevious","customIcon"],k=Object(i.a)(n.a)((function(e){var t=e.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:Object(v.a)(t.palette.grey[900],.48)}})),C=Object(i.a)(w.a)((function(e){return{padding:6,opacity:.48,color:e.theme.palette.common.white,"&:hover":{opacity:1}}}));function A(e){var t=e.index,a=e.total,i=e.onNext,n=e.onPrevious,o=e.customIcon,s=Object(d.a)(e,I),l="rtl"===Object(b.a)().direction;return Object(c.jsxs)(k,Object(r.a)(Object(r.a)({},s),{},{children:[Object(c.jsx)(C,{size:"small",onClick:n,children:N(o,l)}),Object(c.jsxs)(y.a,{variant:"subtitle2",children:[t+1,"/",a]}),Object(c.jsx)(C,{size:"small",onClick:i,children:R(o,l)})]}))}var N=function(e,t){return Object(c.jsx)(x.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},R=function(e,t){return Object(c.jsx)(x.a,{icon:e||"eva:arrow-right-fill",sx:Object(r.a)({width:20,height:20},t&&{transform:" scaleX(-1)"})})}},2074:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Se}));var r=a(53),i=a(1298),n=a(1294),c=a(1203),o=a(44),s=a(63),l=a(420),j=a(1331),d=a.n(j),b=a(1333),h=a.n(b),x=a(6),O=a(1315),u=a(123),p=a(312),m=a(233),g=a(425),f=a(27),v=a(0),w=Object(x.a)(O.a)((function(e){var t=e.theme;return{display:"flex",position:"relative",alignItems:"center",padding:t.spacing(3),backgroundColor:t.palette.primary.darker}})),y=Object(x.a)(f.a)((function(e){var t=e.theme;return{width:120,height:120,opacity:.12,position:"absolute",right:t.spacing(-3),color:t.palette.common.white}}));function I(e){var t=e.title,a=e.total,i=e.icon,n=e.color,c=void 0===n?"primary":n,o=e.chartData,s=Object(r.a)(),l=d()(Object(g.a)(),{colors:[s.palette[c].main],chart:{sparkline:{enabled:!0}},legend:{show:!1},plotOptions:{radialBar:{hollow:{size:"78%"},track:{margin:0},dataLabels:{name:{show:!1},value:{offsetY:6,color:s.palette.common.white,fontSize:s.typography.subtitle2.fontSize}}}}});return Object(v.jsxs)(w,{sx:{bgcolor:s.palette[c].darker},children:[Object(v.jsx)(h.a,{type:"radialBar",series:[o],options:l,width:86,height:86}),Object(v.jsxs)(u.a,{sx:{ml:3,color:"common.white"},children:[Object(v.jsxs)(p.a,{variant:"h4",children:[" ",Object(m.c)(a)]}),Object(v.jsx)(p.a,{variant:"body2",sx:{opacity:.72},children:t})]}),Object(v.jsx)(y,{icon:i})]})}var k=a(4),C=a(38),A=a(1375),N=a(1218),R=a(103),S=Object(x.a)(O.a)((function(e){var t=e.theme;return Object(k.a)({boxShadow:"none",textAlign:"center",backgroundColor:t.palette.primary.lighter},t.breakpoints.up("md"),{height:"100%",display:"flex",textAlign:"left",alignItems:"center",justifyContent:"space-between"})}));function z(e){var t=e.displayName;return Object(v.jsxs)(S,{children:[Object(v.jsxs)(A.a,{sx:{p:{md:0},pl:{md:5},color:"grey.800"},children:[Object(v.jsxs)(p.a,{gutterBottom:!0,variant:"h4",children:["Welcome back,",Object(v.jsx)("br",{})," ",t||"...","!"]}),Object(v.jsx)(p.a,{variant:"body2",sx:{pb:{xs:3,xl:5},maxWidth:480,mx:"auto"},children:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything"}),Object(v.jsx)(N.a,{variant:"contained",to:"#",component:C.b,children:"Go Now"})]}),Object(v.jsx)(R.n,{sx:{p:3,width:360,margin:{xs:"auto",md:"inherit"}}})]})}var D=a(2),W=a(13),P=a(1328),T=a.n(P),M=a(1284),F=a(1),B=a(52),X=a(1221),G=a(167),J=a(59),_=a(43),E=a(1325),L=Object(x.a)("div")((function(e){var t=e.theme;return{top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute",backgroundColor:Object(B.a)(t.palette.grey[900],.64)}}));function V(){var e=Object(r.a)(),t=Object(F.useRef)(null),a=Object(F.useState)("rtl"===e.direction?G.f.length-1:0),i=Object(W.a)(a,2),n=i[0],c=i[1],o=Object(D.a)({speed:800,dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===e.direction),beforeChange:function(e,t){return c(t)}},Object(E.c)({zIndex:9,top:24,left:24,position:"absolute"}));return Object(v.jsxs)(O.a,{children:[Object(v.jsx)(T.a,Object(D.a)(Object(D.a)({ref:t},o),{},{children:G.f.map((function(e,t){return Object(v.jsx)(U,{item:e,isActive:t===n},e.id)}))})),Object(v.jsx)(E.b,{onNext:function(){t.current.slickNext()},onPrevious:function(){t.current.slickPrev()},spacing:0,sx:{top:16,right:16,position:"absolute","& .arrow":{p:0,width:32,height:32,opacity:.48,color:"common.white","&:hover":{color:"common.white",opacity:1}}}})]})}function U(e){var t=e.item,a=e.isActive,r=t.image,i=t.title,n=t.description;return Object(v.jsxs)(u.a,{sx:{position:"relative"},children:[Object(v.jsxs)(A.a,{component:_.c,animate:a,action:!0,sx:{bottom:0,width:1,zIndex:9,textAlign:"left",position:"absolute",color:"common.white"},children:[Object(v.jsx)(M.a.div,{variants:Object(_.g)().inRight,children:Object(v.jsx)(p.a,{variant:"overline",component:"div",sx:{mb:1,opacity:.48},children:"Featured App"})}),Object(v.jsx)(M.a.div,{variants:Object(_.g)().inRight,children:Object(v.jsx)(X.a,{component:C.b,to:"#",color:"inherit",underline:"none",children:Object(v.jsx)(p.a,{variant:"h5",gutterBottom:!0,noWrap:!0,children:i})})}),Object(v.jsx)(M.a.div,{variants:Object(_.g)().inRight,children:Object(v.jsx)(p.a,{variant:"body2",noWrap:!0,children:n})})]}),Object(v.jsx)(L,{}),Object(v.jsx)(J.a,{alt:i,src:r,sx:{height:{xs:280,xl:320}}})]})}var Y=a(1353),q=a(1639),H=a(1376),K=a(1377),Q=a(1378),Z=a(1379),$=a(1380),ee=a(1381),te=a(1268),ae=a(1223),re=a(1308),ie=a(235),ne=a(95),ce=a(114);function oe(){var e=Object(r.a)();return Object(v.jsxs)(O.a,{children:[Object(v.jsx)(q.a,{title:"New Invoice",sx:{mb:3}}),Object(v.jsx)(ne.a,{children:Object(v.jsx)(H.a,{sx:{minWidth:720},children:Object(v.jsxs)(K.a,{children:[Object(v.jsx)(Q.a,{children:Object(v.jsxs)(Z.a,{children:[Object(v.jsx)($.a,{children:"Invoice ID"}),Object(v.jsx)($.a,{children:"Category"}),Object(v.jsx)($.a,{children:"Price"}),Object(v.jsx)($.a,{children:"Status"}),Object(v.jsx)($.a,{})]})}),Object(v.jsx)(ee.a,{children:G.h.map((function(t){return Object(v.jsxs)(Z.a,{children:[Object(v.jsx)($.a,{children:"INV-".concat(t.id)}),Object(v.jsx)($.a,{children:t.category}),Object(v.jsx)($.a,{children:Object(m.a)(t.price)}),Object(v.jsx)($.a,{children:Object(v.jsx)(ie.a,{variant:"light"===e.palette.mode?"ghost":"filled",color:("in_progress"===t.status?"warning":"out_of_date"===t.status&&"error")||"success",children:Object(Y.a)(t.status)})}),Object(v.jsx)($.a,{align:"right",children:Object(v.jsx)(se,{})})]},t.id)}))})]})})}),Object(v.jsx)(te.a,{}),Object(v.jsx)(u.a,{sx:{p:2,textAlign:"right"},children:Object(v.jsx)(N.a,{size:"small",color:"inherit",endIcon:Object(v.jsx)(f.a,{icon:"eva:arrow-ios-forward-fill"}),children:"View All"})})]})}function se(){var e=Object(F.useState)(null),t=Object(W.a)(e,2),a=t[0],r=t[1],i={mr:2,width:20,height:20};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ae.a,{size:"large",onClick:function(e){r(e.currentTarget)},children:Object(v.jsx)(f.a,{icon:"eva:more-vertical-fill",width:20,height:20})}),Object(v.jsxs)(ce.a,{open:Boolean(a),anchorEl:a,onClose:function(){r(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-.5,width:160,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75}},children:[Object(v.jsxs)(re.a,{children:[Object(v.jsx)(f.a,{icon:"eva:download-fill",sx:Object(D.a)({},i)}),"Download"]}),Object(v.jsxs)(re.a,{children:[Object(v.jsx)(f.a,{icon:"eva:printer-fill",sx:Object(D.a)({},i)}),"Print"]}),Object(v.jsxs)(re.a,{children:[Object(v.jsx)(f.a,{icon:"eva:share-fill",sx:Object(D.a)({},i)}),"Share"]}),Object(v.jsx)(te.a,{sx:{borderStyle:"dashed"}}),Object(v.jsxs)(re.a,{sx:{color:"error.main"},children:[Object(v.jsx)(f.a,{icon:"eva:trash-2-outline",sx:Object(D.a)({},i)}),"Delete"]})]})]})}var le=a(1385),je=a.n(le),de=a(632),be=Object(x.a)("div")((function(e){var t=e.theme;return{width:40,height:40,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:t.palette.primary.main,backgroundColor:Object(B.a)(t.palette.primary.main,.08)}}));function he(){var e=je()(G.e,["favourite"],["desc"]);return Object(v.jsxs)(O.a,{children:[Object(v.jsx)(q.a,{title:"Top Authors"}),Object(v.jsx)(c.a,{spacing:3,sx:{p:3},children:e.map((function(e,t){return Object(v.jsx)(xe,{author:e,index:t},e.id)}))})]})}function xe(e){var t=e.author,a=e.index;return Object(v.jsxs)(c.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(v.jsx)(de.a,{alt:t.name,src:t.avatar}),Object(v.jsxs)(u.a,{sx:{flexGrow:1},children:[Object(v.jsx)(p.a,{variant:"subtitle2",children:t.name}),Object(v.jsxs)(p.a,{variant:"caption",sx:{mt:.5,display:"flex",alignItems:"center",color:"text.secondary"},children:[Object(v.jsx)(f.a,{icon:"eva:heart-fill",sx:{width:16,height:16,mr:.5}}),Object(m.e)(t.favourite)]})]}),Object(v.jsx)(be,{sx:Object(D.a)(Object(D.a)({},1===a&&{color:"info.main",bgcolor:function(e){return Object(B.a)(e.palette.info.main,.08)}}),2===a&&{color:"error.main",bgcolor:function(e){return Object(B.a)(e.palette.error.main,.08)}}),children:Object(v.jsx)(f.a,{icon:"ant-design:trophy-filled",width:20,height:20})})]})}var Oe=a(1413);function ue(){return Object(v.jsxs)(O.a,{children:[Object(v.jsx)(q.a,{title:"Top Related Applications"}),Object(v.jsx)(ne.a,{children:Object(v.jsx)(c.a,{spacing:3,sx:{p:3,pr:0},children:G.i.map((function(e){return Object(v.jsx)(pe,{app:e},e.id)}))})})]})}function pe(e){var t=e.app,a=Object(r.a)(),i=t.shortcut,n=t.system,o=t.price,s=t.rating,l=t.review,j=t.name;return Object(v.jsxs)(c.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(v.jsx)(u.a,{sx:{width:48,height:48,flexShrink:0,display:"flex",borderRadius:1.5,alignItems:"center",justifyContent:"center",bgcolor:"background.neutral"},children:Object(v.jsx)(J.a,{src:i,alt:j,sx:{width:24,height:24}})}),Object(v.jsxs)(u.a,{sx:{flexGrow:1,minWidth:160},children:[Object(v.jsx)(p.a,{variant:"subtitle2",children:j}),Object(v.jsxs)(c.a,{direction:"row",alignItems:"center",sx:{mt:.5,color:"text.secondary"},children:[Object(v.jsx)(f.a,{width:16,height:16,icon:"Mac"===n?"ant-design:apple-filled":"ant-design:windows-filled"}),Object(v.jsx)(p.a,{variant:"caption",sx:{ml:.5,mr:1},children:n}),Object(v.jsx)(ie.a,{variant:"light"===a.palette.mode?"ghost":"filled",color:0===o?"success":"error",children:0===o?"Free":Object(m.a)(o)})]})]}),Object(v.jsxs)(c.a,{alignItems:"flex-end",sx:{pr:3},children:[Object(v.jsx)(Oe.a,{readOnly:!0,size:"small",precision:.5,name:"reviews",value:s}),Object(v.jsxs)(p.a,{variant:"caption",sx:{mt:.5,color:"text.secondary"},children:[Object(m.e)(l),"\xa0reviews"]})]})]})}var me=a(1312),ge=[{year:2019,data:[{name:"Asia",data:[10,41,35,51,49,62,69,91,148]},{name:"America",data:[10,34,13,56,77,88,99,77,45]}]},{year:2020,data:[{name:"Asia",data:[148,91,69,62,49,51,35,41,10]},{name:"America",data:[45,77,99,88,77,56,13,34,10]}]}];function fe(){var e=Object(F.useState)(2019),t=Object(W.a)(e,2),a=t[0],r=t[1],i=d()(Object(g.a)(),{xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}});return Object(v.jsxs)(O.a,{children:[Object(v.jsx)(q.a,{title:"Area Installed",subheader:"(+43%) than last year",action:Object(v.jsx)(me.a,{select:!0,fullWidth:!0,value:a,SelectProps:{native:!0},onChange:function(e){r(Number(e.target.value))},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:ge.map((function(e){return Object(v.jsx)("option",{value:e.year,children:e.year},e.year)}))})}),ge.map((function(e){return Object(v.jsx)(u.a,{sx:{mt:3,mx:3},dir:"ltr",children:e.year===a&&Object(v.jsx)(h.a,{type:"line",series:e.data,options:i,height:364})},e.year)}))]})}var ve=Object(x.a)("div")((function(e){var t=e.theme;return{width:24,height:24,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:t.palette.success.main,backgroundColor:Object(B.a)(t.palette.success.main,.16)}}));function we(e){var t=e.title,a=e.percent,i=e.total,n=e.chartColor,o=e.chartData,s=Object(r.a)(),l={colors:[n],chart:{sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"68%",borderRadius:2}},tooltip:{x:{show:!1},y:{formatter:function(e){return Object(m.c)(e)},title:{formatter:function(){return""}}},marker:{show:!1}}};return Object(v.jsxs)(O.a,{sx:{display:"flex",alignItems:"center",p:3},children:[Object(v.jsxs)(u.a,{sx:{flexGrow:1},children:[Object(v.jsx)(p.a,{variant:"subtitle2",children:t}),Object(v.jsxs)(c.a,{direction:"row",alignItems:"center",spacing:1,sx:{mt:2,mb:1},children:[Object(v.jsx)(ve,{sx:Object(D.a)({},a<0&&{color:"error.main",bgcolor:Object(B.a)(s.palette.error.main,.16)}),children:Object(v.jsx)(f.a,{width:16,height:16,icon:a>=0?"eva:trending-up-fill":"eva:trending-down-fill"})}),Object(v.jsxs)(p.a,{component:"span",variant:"subtitle2",children:[a>0&&"+",Object(m.d)(a)]})]}),Object(v.jsx)(p.a,{variant:"h3",children:Object(m.c)(i)})]}),Object(v.jsx)(h.a,{type:"bar",series:[{data:o}],options:l,width:60,height:36})]})}var ye=Object(x.a)("div")((function(e){var t=e.theme;return{height:392,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:392},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(320,"px) !important")}}})),Ie=[12244,53345,44313,78343];function ke(){var e=Object(r.a)(),t=d()(Object(g.a)(),{colors:[e.palette.primary.lighter,e.palette.primary.light,e.palette.primary.main,e.palette.primary.dark],labels:["Mac","Window","iOS","Android"],stroke:{colors:[e.palette.background.paper]},legend:{floating:!0,horizontalAlign:"center"},tooltip:{fillSeriesColor:!1,y:{formatter:function(e){return Object(m.c)(e)},title:{formatter:function(e){return"".concat(e)}}}},plotOptions:{pie:{donut:{size:"90%",labels:{value:{formatter:function(e){return Object(m.c)(e)}},total:{formatter:function(e){var t=e.globals.seriesTotals.reduce((function(e,t){return e+t}),0);return Object(m.c)(t)}}}}}}});return Object(v.jsxs)(O.a,{children:[Object(v.jsx)(q.a,{title:"Current Download"}),Object(v.jsx)(ye,{dir:"ltr",children:Object(v.jsx)(h.a,{type:"donut",series:Ie,options:t,height:280})})]})}var Ce=Object(x.a)((function(e){return Object(v.jsx)(c.a,Object(D.a)({direction:"row",alignItems:"center"},e))}))({minWidth:72,flex:"1 1"}),Ae=Object(x.a)(f.a)((function(e){var t=e.theme;return{width:16,height:16,marginRight:t.spacing(.5),color:t.palette.text.disabled}}));function Ne(){return Object(v.jsxs)(O.a,{children:[Object(v.jsx)(q.a,{title:"Top Installed Countries"}),Object(v.jsx)(ne.a,{children:Object(v.jsx)(c.a,{spacing:3,sx:{p:3},children:G.g.map((function(e){return Object(v.jsx)(Re,{country:e},e.id)}))})})]})}function Re(e){var t=e.country;return Object(v.jsxs)(c.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(v.jsxs)(Ce,{sx:{minWidth:120},children:[Object(v.jsx)(J.a,{disabledEffect:!0,alt:t.name,src:t.flag,sx:{width:28,mr:1}}),Object(v.jsx)(p.a,{variant:"subtitle2",children:t.name})]}),Object(v.jsxs)(Ce,{children:[Object(v.jsx)(Ae,{icon:"ant-design:android-filled"}),Object(v.jsx)(p.a,{variant:"body2",children:Object(m.e)(t.android)})]}),Object(v.jsxs)(Ce,{children:[Object(v.jsx)(Ae,{icon:"ant-design:windows-filled"}),Object(v.jsx)(p.a,{variant:"body2",children:Object(m.e)(t.windows)})]}),Object(v.jsxs)(Ce,{sx:{minWidth:88},children:[Object(v.jsx)(Ae,{icon:"ant-design:apple-filled"}),Object(v.jsx)(p.a,{variant:"body2",children:Object(m.e)(t.windows)})]})]})}function Se(){var e=Object(o.a)().user,t=Object(r.a)(),a=Object(s.a)().themeStretch;return Object(v.jsx)(l.a,{title:"General: App",children:Object(v.jsx)(i.a,{maxWidth:!a&&"xl",children:Object(v.jsxs)(n.a,{container:!0,spacing:3,children:[Object(v.jsx)(n.a,{item:!0,xs:12,md:8,children:Object(v.jsx)(z,{displayName:null===e||void 0===e?void 0:e.displayName})}),Object(v.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(V,{})}),Object(v.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(we,{title:"Total Active Users",percent:2.6,total:18765,chartColor:t.palette.primary.main,chartData:[5,18,12,51,68,11,39,37,27,20]})}),Object(v.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(we,{title:"Total Installed",percent:.2,total:4876,chartColor:t.palette.chart.blue[0],chartData:[20,41,63,33,28,35,50,46,11,26]})}),Object(v.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(we,{title:"Total Downloads",percent:-.1,total:678,chartColor:t.palette.chart.red[0],chartData:[8,9,31,8,16,37,8,33,46,31]})}),Object(v.jsx)(n.a,{item:!0,xs:12,md:6,lg:4,children:Object(v.jsx)(ke,{})}),Object(v.jsx)(n.a,{item:!0,xs:12,md:6,lg:8,children:Object(v.jsx)(fe,{})}),Object(v.jsx)(n.a,{item:!0,xs:12,lg:8,children:Object(v.jsx)(oe,{})}),Object(v.jsx)(n.a,{item:!0,xs:12,md:6,lg:4,children:Object(v.jsx)(ue,{})}),Object(v.jsx)(n.a,{item:!0,xs:12,md:6,lg:4,children:Object(v.jsx)(Ne,{})}),Object(v.jsx)(n.a,{item:!0,xs:12,md:6,lg:4,children:Object(v.jsx)(he,{})}),Object(v.jsx)(n.a,{item:!0,xs:12,md:6,lg:4,children:Object(v.jsxs)(c.a,{spacing:3,children:[Object(v.jsx)(I,{title:"Conversion",total:38566,icon:"eva:person-fill",chartData:48}),Object(v.jsx)(I,{title:"Applications",total:55566,icon:"eva:email-fill",color:"warning",chartData:75})]})})]})})})}}}]);
//# sourceMappingURL=59.51bc6dc6.chunk.js.map