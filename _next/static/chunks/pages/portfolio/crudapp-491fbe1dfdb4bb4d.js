(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785],{4651:function(n,r,e){"use strict";e.d(r,{Ee:function(){return f}});var t=e(6052),i=e(4592),a=e(7294),c=e(4697);function s(){return s=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},s.apply(this,arguments)}function l(n,r){if(null==n)return{};var e,t,i={},a=Object.keys(n);for(t=0;t<a.length;t++)e=a[t],r.indexOf(e)>=0||(i[e]=n[e]);return i}var o=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=a.forwardRef((function(n,r){var e=n.htmlWidth,t=n.htmlHeight,i=n.alt,c=l(n,o);return a.createElement("img",s({width:e,height:t,ref:r,alt:i},c))})),f=(0,t.Gp)((function(n,r){var e=n.fallbackSrc,o=n.fallback,f=n.src,h=n.srcSet,p=n.align,g=n.fit,x=n.loading,j=n.ignoreFallback,m=n.crossOrigin,v=l(n,u),b=null!=x||j||void 0===e&&void 0===o,w=function(n){var r=n.loading,e=n.src,t=n.srcSet,i=n.onLoad,s=n.onError,l=n.crossOrigin,o=n.sizes,u=n.ignoreFallback,d=(0,a.useState)("pending"),f=d[0],h=d[1];(0,a.useEffect)((function(){h(e?"loading":"pending")}),[e]);var p=(0,a.useRef)(),g=(0,a.useCallback)((function(){if(e){x();var n=new Image;n.src=e,l&&(n.crossOrigin=l),t&&(n.srcset=t),o&&(n.sizes=o),r&&(n.loading=r),n.onload=function(n){x(),h("loaded"),null==i||i(n)},n.onerror=function(n){x(),h("failed"),null==s||s(n)},p.current=n}}),[e,l,t,o,i,s,r]),x=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,c.a)((function(){if(!u)return"loading"===f&&g(),function(){x()}}),[f,g,u]),u?"loaded":f}(s({},n,{ignoreFallback:b})),S=s({ref:r,objectFit:g,objectPosition:p},b?v:(0,i.CE)(v,["onError","onLoad"]));return"loaded"!==w?o||a.createElement(t.m$.img,s({as:d,className:"chakra-image__placeholder",src:e},S)):a.createElement(t.m$.img,s({as:d,src:f,srcSet:h,crossOrigin:m,loading:x,className:"chakra-image"},S))}));i.Ts&&(f.displayName="Image")},1707:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/crudapp",function(){return e(2137)}])},944:function(n,r,e){"use strict";e.d(r,{Et:function(){return u},Pg:function(){return d}});var t=e(5893),i=e(1664),a=e.n(i),c=e(8045),s=e.n(c),l=e(8527),o=e(917),u=function(n){var r=n.children,e=n.id,i=n.title,c=n.thumbnail;return(0,t.jsx)(l.xu,{w:"100%",align:"center",children:(0,t.jsx)(a(),{href:"/portfolio/".concat(e),children:(0,t.jsxs)(l.fG,{cursor:"pointer",children:[(0,t.jsx)(s(),{src:c,alt:i,className:"grid-item-thumbnail",placeholder:"blur"}),(0,t.jsx)(l.AB,{href:"/portfolio/".concat(e),children:(0,t.jsx)(l.xv,{mt:2,fontSize:20,children:i})}),(0,t.jsx)(l.xv,{fontSize:14,children:r})]})})})},d=function(){return(0,t.jsx)(o.xB,{styles:"\n        .grid-item-thumbnail {\n            border-radius: 12px;\n        }\n    "})}},9646:function(n,r,e){"use strict";var t=e(5893),i=e(7751),a=e(9008),c=e.n(a),s=e(944),l={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:20}};r.Z=function(n){var r=n.children,e=n.title;return(0,t.jsxs)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:l,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:[(0,t.jsxs)(t.Fragment,{children:[e&&(0,t.jsx)(c(),{children:(0,t.jsxs)("title",{children:[e," Mehdi Aguendich"]})}),r]}),(0,t.jsx)(s.Pg,{})]})}},2137:function(n,r,e){"use strict";e.r(r);var t=e(5893),i=e(8527),a=e(9646),c=e(8293),s=e(3562),l=e(9876);r.default=function(){return(0,t.jsx)(a.Z,{title:"CrudApp",children:(0,t.jsxs)(i.W2,{children:[(0,t.jsxs)(c.Title,{children:["Database Management App ",(0,t.jsx)(i.Ct,{children:"2020"})]}),(0,t.jsx)(s.Z,{children:"An internal customisable database management app for small businesses."}),(0,t.jsxs)(i.aV,{ml:4,my:4,children:[(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(c.Meta,{children:"Source Code"}),(0,t.jsxs)(i.rU,{href:"https://github.com/Dovah03/SwingApp",children:["https://www.github.com/Dovah03/SwingApp/ ",(0,t.jsx)(l.h0,{mx:"2px"})]})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(c.Meta,{children:"Platform"}),(0,t.jsx)("span",{children:"Windows/macOS/Linux/ (Java wrapped APP)"})]}),(0,t.jsxs)(i.HC,{children:[(0,t.jsx)(c.Meta,{children:"Stack"}),(0,t.jsx)("span",{children:"Java, Java Swing, MS Access, Java Wrapper"})]})]}),(0,t.jsx)(c.ProjectImage,{src:"/React-Next-portfolio/images/projects/crudapp_1.png",alt:"Java Swing Crud App"}),(0,t.jsx)(c.ProjectImage,{src:"/React-Next-portfolio/images/projects/crudapp_2.png",alt:"Java Swing Crud App"})]})})}},8293:function(n,r,e){"use strict";e.r(r),e.d(r,{Meta:function(){return d},ProjectImage:function(){return u},Title:function(){return o}});var t=e(5893),i=e(9876),a=e(8527),c=e(4651),s=e(1664),l=e.n(s),o=function(n){var r=n.children;return(0,t.jsxs)(a.xu,{children:[(0,t.jsx)(l(),{href:"/portfolio",children:(0,t.jsx)(a.rU,{children:"Portfolio"})}),(0,t.jsxs)("span",{children:[" ",(0,t.jsx)(i.XC,{})," "]}),(0,t.jsx)(a.X6,{display:"inline-block",as:"h3",fontsize:20,mb:4,children:r})]})},u=function(n){var r=n.src,e=n.alt;return(0,t.jsx)(c.Ee,{borderRadius:"lg",w:"full",src:r,alt:e,mb:8})},d=function(n){var r=n.children;return(0,t.jsx)(a.Ct,{colorScheme:"green",mr:2,children:r})};r.default=o}},function(n){n.O(0,[774,888,179],(function(){return r=1707,n(n.s=r);var r}));var r=n.O();_N_E=r}]);