(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[870],{4651:function(n,r,e){"use strict";e.d(r,{Ee:function(){return d}});var t=e(6052),i=e(4592),a=e(7294),c=e(4697);function l(){return l=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},l.apply(this,arguments)}function o(n,r){if(null==n)return{};var e,t,i={},a=Object.keys(n);for(t=0;t<a.length;t++)e=a[t],r.indexOf(e)>=0||(i[e]=n[e]);return i}var s=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],f=a.forwardRef((function(n,r){var e=n.htmlWidth,t=n.htmlHeight,i=n.alt,c=o(n,s);return a.createElement("img",l({width:e,height:t,ref:r,alt:i},c))})),d=(0,t.Gp)((function(n,r){var e=n.fallbackSrc,s=n.fallback,d=n.src,g=n.srcSet,h=n.align,m=n.fit,b=n.loading,v=n.ignoreFallback,k=n.crossOrigin,p=o(n,u),j=null!=b||v||void 0===e&&void 0===s,E=function(n){var r=n.loading,e=n.src,t=n.srcSet,i=n.onLoad,l=n.onError,o=n.crossOrigin,s=n.sizes,u=n.ignoreFallback,f=(0,a.useState)("pending"),d=f[0],g=f[1];(0,a.useEffect)((function(){g(e?"loading":"pending")}),[e]);var h=(0,a.useRef)(),m=(0,a.useCallback)((function(){if(e){b();var n=new Image;n.src=e,o&&(n.crossOrigin=o),t&&(n.srcset=t),s&&(n.sizes=s),r&&(n.loading=r),n.onload=function(n){b(),g("loaded"),null==i||i(n)},n.onerror=function(n){b(),g("failed"),null==l||l(n)},h.current=n}}),[e,o,t,s,i,l,r]),b=function(){h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,c.a)((function(){if(!u)return"loading"===d&&m(),function(){b()}}),[d,m,u]),u?"loaded":d}(l({},n,{ignoreFallback:j})),_=l({ref:r,objectFit:m,objectPosition:h},j?p:(0,i.CE)(p,["onError","onLoad"]));return"loaded"!==E?s||a.createElement(t.m$.img,l({as:f,className:"chakra-image__placeholder",src:e},_)):a.createElement(t.m$.img,l({as:f,src:d,srcSet:g,crossOrigin:k,loading:b,className:"chakra-image"},_))}));i.Ts&&(d.displayName="Image")},1349:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/title",function(){return e(8293)}])},8293:function(n,r,e){"use strict";e.r(r),e.d(r,{Meta:function(){return f},ProjectImage:function(){return u},Title:function(){return s}});var t=e(5893),i=e(9876),a=e(8527),c=e(4651),l=e(1664),o=e.n(l),s=function(n){var r=n.children;return(0,t.jsxs)(a.xu,{children:[(0,t.jsx)(o(),{href:"/portfolio",children:(0,t.jsx)(a.rU,{children:"Portfolio"})}),(0,t.jsxs)("span",{children:[" ",(0,t.jsx)(i.XC,{})," "]}),(0,t.jsx)(a.X6,{display:"inline-block",as:"h3",fontsize:20,mb:4,children:r})]})},u=function(n){var r=n.src,e=n.alt;return(0,t.jsx)(c.Ee,{borderRadius:"lg",w:"full",src:r,alt:e,mb:8})},f=function(n){var r=n.children;return(0,t.jsx)(a.Ct,{colorScheme:"green",mr:2,children:r})};r.default=s}},function(n){n.O(0,[774,888,179],(function(){return r=1349,n(n.s=r);var r}));var r=n.O();_N_E=r}]);