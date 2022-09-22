(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785],{6884:function(e,r,t){"use strict";t.d(r,{X:function(){return n}});var n=(0,t(9867).I)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"})},8928:function(e,r,t){"use strict";t.d(r,{h:function(){return i}});var n=t(9867),a=t(7294),i=(0,n.I)({displayName:"ExternalLinkIcon",path:a.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2"},a.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),a.createElement("path",{d:"M15 3h6v6"}),a.createElement("path",{d:"M10 14L21 3"}))})},8322:function(e,r,t){"use strict";t.d(r,{E:function(){return f}});var n=t(63),a=t(3852),i=t(4651),s=t(3808),l=t(7294),c=t(8327);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}var d=l.forwardRef(((e,r)=>{var{htmlWidth:t,htmlHeight:n,alt:a}=e,i=u(e,["htmlWidth","htmlHeight","alt"]);return l.createElement("img",o({width:t,height:n,ref:r,alt:a},i))})),f=(0,n.G)(((e,r)=>{var{fallbackSrc:t,fallback:n,src:s,srcSet:f,align:h,fit:p,loading:m,ignoreFallback:g,crossOrigin:v}=e,x=u(e,["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"]),j=null!=m||g||void 0===t&&void 0===n,y=function(e){var{loading:r,src:t,srcSet:n,onLoad:a,onError:i,crossOrigin:s,sizes:o,ignoreFallback:u}=e,[d,f]=(0,l.useState)("pending");(0,l.useEffect)((()=>{f(t?"loading":"pending")}),[t]);var h=(0,l.useRef)(),p=(0,l.useCallback)((()=>{if(t){m();var e=new Image;e.src=t,s&&(e.crossOrigin=s),n&&(e.srcset=n),o&&(e.sizes=o),r&&(e.loading=r),e.onload=e=>{m(),f("loaded"),null==a||a(e)},e.onerror=e=>{m(),f("failed"),null==i||i(e)},h.current=e}}),[t,s,n,o,a,i,r]),m=()=>{h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,c.G)((()=>{if(!u)return"loading"===d&&p(),()=>{m()}}),[d,p,u]),u?"loaded":d}(o({},e,{ignoreFallback:j})),b=o({ref:r,objectFit:p,objectPosition:h},j?x:(0,i.CE)(x,["onError","onLoad"]));return"loaded"!==y?n||l.createElement(a.m$.img,o({as:d,className:"chakra-image__placeholder",src:t},b)):l.createElement(a.m$.img,o({as:d,src:s,srcSet:f,crossOrigin:v,loading:m,className:"chakra-image"},b))}));s.Ts&&(f.displayName="Image")},8125:function(e,r,t){"use strict";t.d(r,{C:function(){return d}});var n=t(63),a=t(3793),i=t(5284),s=t(3852),l=t(4461),c=t(3808),o=t(7294);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var d=(0,n.G)(((e,r)=>{var t=(0,a.m)("Badge",e),n=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}((0,i.Lr)(e),["className"]);return o.createElement(s.m$.span,u({ref:r,className:(0,l.cx)("chakra-badge",e.className)},n,{__css:u({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},t)}))}));c.Ts&&(d.displayName="Badge")},3762:function(e,r,t){"use strict";t.d(r,{aV:function(){return p},HC:function(){return v}});var n=t(58),a=t(63),i=t(3793),s=t(5284),l=t(9676),c=t(3852),o=t(3808),u=t(4255),d=t(7294);function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function h(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}var p=(0,a.G)(((e,r)=>{var t=(0,i.j)("List",e),n=(0,s.Lr)(e),{children:a,styleType:o="none",stylePosition:p,spacing:m}=n,g=h(n,["children","styleType","stylePosition","spacing"]),v=(0,u.W)(a),x=m?{"& > *:not(style) ~ *:not(style)":{mt:m}}:{};return d.createElement(l.Fo,{value:t},d.createElement(c.m$.ul,f({ref:r,listStyleType:o,listStylePosition:p,role:"list",__css:f({},t.container,x)},g),v))}));o.Ts&&(p.displayName="List");var m=(0,a.G)(((e,r)=>{var t=h(e,["as"]);return d.createElement(p,f({ref:r,as:"ol",styleType:"decimal",marginStart:"1em"},t))}));o.Ts&&(m.displayName="OrderedList");var g=(0,a.G)(((e,r)=>{var t=h(e,["as"]);return d.createElement(p,f({ref:r,as:"ul",styleType:"initial",marginStart:"1em"},t))}));o.Ts&&(g.displayName="UnorderedList");var v=(0,a.G)(((e,r)=>{var t=(0,l.yK)();return d.createElement(c.m$.li,f({ref:r},e,{__css:t.item}))}));o.Ts&&(v.displayName="ListItem");var x=(0,a.G)(((e,r)=>{var t=(0,l.yK)();return d.createElement(n.J,f({ref:r,role:"presentation"},e,{__css:t.icon}))}));o.Ts&&(x.displayName="ListIcon")},7555:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/crudapp",function(){return t(2803)}])},8346:function(e,r,t){"use strict";t.d(r,{Pg:function(){return x},Et:function(){return v}});var n=t(5893),a=t(1664),i=t(8045),s=t(63),l=t(3852),c=t(4461),o=t(7294);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}var f=(0,s.G)(((e,r)=>{var{isExternal:t,target:n,rel:a,className:i}=e,s=d(e,["isExternal","target","rel","className"]);return o.createElement(l.m$.a,u({},s,{ref:r,className:(0,c.cx)("chakra-linkbox__overlay",i),rel:t?"noopener noreferrer":a,target:t?"_blank":n,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}}))})),h=(0,s.G)(((e,r)=>{var{className:t}=e,n=d(e,["className"]);return o.createElement(l.m$.div,u({ref:r,position:"relative"},n,{className:(0,c.cx)("chakra-linkbox",t),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}}))})),p=t(8017),m=t(4115),g=t(917),v=function(e){var r=e.children,t=e.id,s=e.title,l=e.thumbnail;return(0,n.jsx)(p.xu,{w:"100%",align:"center",children:(0,n.jsx)(a.default,{href:"/portfolio/".concat(t),children:(0,n.jsxs)(h,{cursor:"pointer",children:[(0,n.jsx)(i.default,{src:l,alt:s,className:"grid-item-thumbnail",placeholder:"blur"}),(0,n.jsx)(f,{href:"/portfolio/".concat(t),children:(0,n.jsx)(m.x,{mt:2,fontSize:20,children:s})}),(0,n.jsx)(m.x,{fontSize:14,children:r})]})})})},x=function(){return(0,n.jsx)(g.xB,{styles:"\n        .grid-item-thumbnail {\n            border-radius: 12px;\n        }\n    "})}},9646:function(e,r,t){"use strict";var n=t(5893),a=t(7751),i=t(9008),s=t(8346),l={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:20}};r.Z=function(e){var r=e.children,t=e.title;return(0,n.jsxs)(a.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:l,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:[(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)(i.default,{children:(0,n.jsxs)("title",{children:[t," Mehdi Aguendich"]})}),r]}),(0,n.jsx)(s.Pg,{})]})}},2803:function(e,r,t){"use strict";t.r(r);var n=t(5893),a=t(3850),i=t(8125),s=t(3762),l=t(9444),c=t(9646),o=t(8293),u=t(3562),d=t(8928);r.default=function(){return(0,n.jsx)(c.Z,{title:"CrudApp",children:(0,n.jsxs)(a.W,{children:[(0,n.jsxs)(o.Title,{children:["Database Management App ",(0,n.jsx)(i.C,{children:"2020"})]}),(0,n.jsx)(u.Z,{children:"An internal customisable database management app for small businesses."}),(0,n.jsxs)(s.aV,{ml:4,my:4,children:[(0,n.jsxs)(s.HC,{children:[(0,n.jsx)(o.Meta,{children:"Source Code"}),(0,n.jsxs)(l.r,{href:"https://github.com/Dovah03/SwingApp",children:["https://www.github.com/Dovah03/SwingApp/ ",(0,n.jsx)(d.h,{mx:"2px"})]})]}),(0,n.jsxs)(s.HC,{children:[(0,n.jsx)(o.Meta,{children:"Platform"}),(0,n.jsx)("span",{children:"Windows/macOS/Linux/ (Java wrapped APP)"})]}),(0,n.jsxs)(s.HC,{children:[(0,n.jsx)(o.Meta,{children:"Stack"}),(0,n.jsx)("span",{children:"Java, Java Swing, MS Access, Java Wrapper"})]})]}),(0,n.jsx)(o.ProjectImage,{src:"/React-Next-portfolio/images/projects/crudapp_01.png",alt:"Java Swing Crud App"}),(0,n.jsx)(o.ProjectImage,{src:"/React-Next-portfolio/images/projects/crudapp_02.png",alt:"Java Swing Crud App"})]})})}},8293:function(e,r,t){"use strict";t.r(r),t.d(r,{Title:function(){return d},ProjectImage:function(){return f},Meta:function(){return h}});var n=t(5893),a=t(6884),i=t(8017),s=t(9444),l=t(3306),c=t(8322),o=t(8125),u=t(1664),d=function(e){var r=e.children;return(0,n.jsxs)(i.xu,{children:[(0,n.jsx)(u.default,{href:"/portfolio",children:(0,n.jsx)(s.r,{children:"Portfolio"})}),(0,n.jsxs)("span",{children:[" ",(0,n.jsx)(a.X,{})," "]}),(0,n.jsx)(l.X,{display:"inline-block",as:"h3",fontsize:20,mb:4,children:r})]})},f=function(e){var r=e.src,t=e.alt;return(0,n.jsx)(c.E,{borderRadius:"lg",w:"full",src:r,alt:t,mb:8})},h=function(e){var r=e.children;return(0,n.jsx)(o.C,{colorScheme:"green",mr:2,children:r})};r.default=d}},function(e){e.O(0,[774,888,179],(function(){return r=7555,e(e.s=r);var r}));var r=e.O();_N_E=r}]);