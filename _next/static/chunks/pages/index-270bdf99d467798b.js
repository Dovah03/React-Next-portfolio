(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4651:function(e,n,r){"use strict";r.d(n,{Ee:function(){return u}});var i=r(6052),t=r(4592),s=r(7294),a=r(4697);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},o.apply(this,arguments)}function l(e,n){if(null==e)return{};var r,i,t={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}var c=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],h=s.forwardRef((function(e,n){var r=e.htmlWidth,i=e.htmlHeight,t=e.alt,a=l(e,c);return s.createElement("img",o({width:r,height:i,ref:n,alt:t},a))})),u=(0,i.Gp)((function(e,n){var r=e.fallbackSrc,c=e.fallback,u=e.src,g=e.srcSet,x=e.align,j=e.fit,f=e.loading,m=e.ignoreFallback,p=e.crossOrigin,v=l(e,d),b=null!=f||m||void 0===r&&void 0===c,y=function(e){var n=e.loading,r=e.src,i=e.srcSet,t=e.onLoad,o=e.onError,l=e.crossOrigin,c=e.sizes,d=e.ignoreFallback,h=(0,s.useState)("pending"),u=h[0],g=h[1];(0,s.useEffect)((function(){g(r?"loading":"pending")}),[r]);var x=(0,s.useRef)(),j=(0,s.useCallback)((function(){if(r){f();var e=new Image;e.src=r,l&&(e.crossOrigin=l),i&&(e.srcset=i),c&&(e.sizes=c),n&&(e.loading=n),e.onload=function(e){f(),g("loaded"),null==t||t(e)},e.onerror=function(e){f(),g("failed"),null==o||o(e)},x.current=e}}),[r,l,i,c,t,o,n]),f=function(){x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,a.a)((function(){if(!d)return"loading"===u&&j(),function(){f()}}),[u,j,d]),d?"loaded":u}(o({},e,{ignoreFallback:b})),w=o({ref:n,objectFit:j,objectPosition:x},b?v:(0,t.CE)(v,["onError","onLoad"]));return"loaded"!==y?c||s.createElement(i.m$.img,o({as:h,className:"chakra-image__placeholder",src:r},w)):s.createElement(i.m$.img,o({as:h,src:u,srcSet:g,crossOrigin:p,loading:f,className:"chakra-image"},w))}));t.Ts&&(u.displayName="Image")},5557:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3884)}])},944:function(e,n,r){"use strict";r.d(n,{Et:function(){return d},Pg:function(){return h}});var i=r(5893),t=r(1664),s=r.n(t),a=r(8045),o=r.n(a),l=r(8527),c=r(917),d=function(e){var n=e.children,r=e.id,t=e.title,a=e.thumbnail;return(0,i.jsx)(l.xu,{w:"100%",align:"center",children:(0,i.jsx)(s(),{href:"/portfolio/".concat(r),children:(0,i.jsxs)(l.fG,{cursor:"pointer",children:[(0,i.jsx)(o(),{src:a,alt:t,className:"grid-item-thumbnail",placeholder:"blur"}),(0,i.jsx)(l.AB,{href:"/portfolio/".concat(r),children:(0,i.jsx)(l.xv,{mt:2,fontSize:20,children:t})}),(0,i.jsx)(l.xv,{fontSize:14,children:n})]})})})},h=function(){return(0,i.jsx)(c.xB,{styles:"\n        .grid-item-thumbnail {\n            border-radius: 12px;\n        }\n    "})}},9646:function(e,n,r){"use strict";var i=r(5893),t=r(7751),s=r(9008),a=r.n(s),o=r(944),l={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:20}};n.Z=function(e){var n=e.children,r=e.title;return(0,i.jsxs)(t.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:l,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:[(0,i.jsxs)(i.Fragment,{children:[r&&(0,i.jsx)(a(),{children:(0,i.jsxs)("title",{children:[r," Mehdi Aguendich"]})}),n]}),(0,i.jsx)(o.Pg,{})]})}},3884:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return E}});var i=r(5893),t=r(1664),s=r.n(t),a=r(8527),o=r(949),l=r(4651),c=r(5193),d=r(894),h=r(3562),u=r(7578),g=r(9876),x=r(7297),j=r(6829);function f(){var e=(0,x.Z)(["\n    padding-left: 3.4em;\n    text-indent: -3.4em;    \n"]);return f=function(){return e},e}function m(){var e=(0,x.Z)(["\n    font-weight : bold;\n    margin-right: 1em;\n"]);return m=function(){return e},e}var p=(0,j.Z)(a.xu)(f()),v=j.Z.span(m()),b=r(7751),y=r(9646),w=r(2370),E=function(){return(0,i.jsx)(y.Z,{children:(0,i.jsxs)(a.W2,{children:[(0,i.jsx)(a.xu,{borderRadius:"lg",bg:(0,o.ff)("whiteAlpha.500","whiteAlpha.200"),p:3,mb:6,align:"center",children:(0,i.jsx)("div",{children:"Hello, I'm a full-stack developer based in Morocco!"})}),(0,i.jsxs)(a.xu,{display:{md:"flex"},children:[(0,i.jsxs)(a.xu,{flexGrow:1,children:[(0,i.jsx)(a.X6,{as:"h2",variant:"page-title",children:"Mehdi Aguendich"}),(0,i.jsx)("p",{children:"Software Engineer (Full-Stack Developer / AI Enthusiast)"})]}),(0,i.jsx)(a.xu,{flexShrink:0,mt:{base:4,md:0},ml:{md:6},align:"center",children:(0,i.jsx)(l.Ee,{borderColor:"whiteAlpha.800",borderWidth:2,borderStyle:"solid",maxWidth:"100px",display:"inline-block",borderRadius:"full",src:"/React-Next-portfolio/images/Profil-pic.jpg",alt:"profil Image"})})]}),(0,i.jsxs)(u.Z,{delay:.1,children:[(0,i.jsx)(a.X6,{as:"h3",variant:"section-title",children:"\ud83d\udcdc Get To Know Me"}),(0,i.jsxs)(h.Z,{children:["Hi There! I'm Mehdi Aguendich, a Software Engineer, Full-Stack Developer, Computer Vision, Machine Learning enthousiast and open source contributor based in Morocco. I have been developing all sorts of applications for over 4 years now, and have recently created many Angular 12 based projects. Also I have worked in teams for various startups as either an Intern or a freelancer and helped them in launching their products/applications. and thus earned valuable learning experience.",(0,i.jsx)("br",{}),"I recently got my Engineering Degree at the Morrocan School of Engineering Sciences (E.M.S.I) and am currently working on developing and upgrading MAVIS my personal AI Assistant."]}),(0,i.jsx)("br",{}),(0,i.jsx)(a.xu,{align:"center",my:4,children:(0,i.jsx)(s(),{href:"/portfolio",children:(0,i.jsx)(b.E.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,i.jsx)(c.zx,{rightIcon:(0,i.jsx)(g.XC,{}),colorScheme:"teal",children:"My Portfolio"})})})})]}),(0,i.jsxs)(u.Z,{delay:.1,children:[(0,i.jsx)(a.X6,{as:"h3",variant:"section-title",children:"\ud83d\ude80 Projects"}),(0,i.jsxs)(h.Z,{children:[" ","- I\u2019m currently working on my laptop \ud83d\udc68\u200d\ud83d\udcbb or playing Elden Ring.",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),"- I \u2764\ufe0f Web Development using Angular 12, React.js and Next.js.",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),"- I also \u2764\ufe0f developing backend infrastructures using the Java Framework Spring for entreprises and Node.js (M.E.R.N) for small to medium projects. ",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),"- Currently working on improving my Data Structures and Algorithm skills\ud83d\udc68\u200d\ud83d\udcbb and getting better at Flutter.",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),"- I love making Next.js Projects\ud83d\udc68\u200d\ud83d\udcbb using THREE.js the most.",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),"- I have a huge interest in Machine Learning \ud83e\udd16 and OpenCV \ud83c\udf10 and so being good at Python is a must.",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),"- I\u2019m open for collaboration \ud83e\udde0 on ANY kind of project.",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),"- Fun fact: My quick-wittedness\ud83d\ude0e lies in my laziness \ud83d\ude34.",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),"- After visiting my Portfolio Website\ud83d\udc68\u200d\ud83d\udcbb do suggest me ways on how to improve it.",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{})]}),(0,i.jsx)(a.xu,{align:"center",my:4,children:(0,i.jsx)(s(),{href:"/portfolio",children:(0,i.jsx)(b.E.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,i.jsx)(c.zx,{rightIcon:(0,i.jsx)(g.XC,{}),colorScheme:"teal",children:"My Portfolio"})})})})]}),(0,i.jsxs)(u.Z,{delay:.2,children:[(0,i.jsx)(a.X6,{as:"h3",variant:"section-title",children:"\ud83c\udf2e Work Experience"}),(0,i.jsxs)(p,{children:[(0,i.jsx)(v,{children:"2023"}),(0,i.jsxs)("strong",{children:[" ","Urban Agency of Dakhla - Oued Eddahab : IT Engineer, (FULL-TIME)"," "]})," ","- Urban Agency IT solutions developement and maintenance."]}),(0,i.jsxs)(p,{children:[(0,i.jsx)(v,{children:"2022"}),(0,i.jsxs)("strong",{children:[" ","INOVAR : Pega System Architect, (FULL-TIME REMOTE)"," "]})," ","- Software solution evolution and maintenance using PEGA System tools. Primarily PEGA AppStudio and PEGA DevStudio"]}),(0,i.jsxs)(p,{children:[(0,i.jsx)(v,{children:"2022"}),(0,i.jsxs)("strong",{children:[" ","ASATECHNO CONSULTING : Software Engineer (FULL-TIME)"," "]})," ","- Work environment preparation, Collaborative teamwork using a CI/CD tool, Insurance sector software solutions evolution and maintenance, and documentation writing of all tasks mentioned above."]}),(0,i.jsxs)(p,{children:[(0,i.jsx)(v,{children:"2021"}),(0,i.jsxs)("strong",{children:[" ","ISO QUAL TECH : Software Development Intern (E.S.P)"," "]})," ","- Working on various tasks to develop and modify the existing system by creating useful APIs and integrating MongoDB and MySQL Databases using Angular11, Spring-boot and Spring-security."]}),(0,i.jsxs)(p,{children:[(0,i.jsx)(v,{children:"2020"}),(0,i.jsx)("strong",{children:" Diana's : Full-Stack Developer (Freelance gig) "})," - Developed a Full-Fledged E-Shop website using Angular11 and Node.js."]}),(0,i.jsxs)(p,{children:[(0,i.jsx)(v,{children:"2019"}),(0,i.jsxs)("strong",{children:[" ","O.M.P.I.C : Full Stack Developer (Freelance gig)"," "]})," ","- Creating and Developing a Java Swing desktop app for the team's internal use cases."]}),(0,i.jsxs)(p,{children:[(0,i.jsx)(v,{children:"2018"}),(0,i.jsxs)("strong",{children:[" ","the Commune of Sal\xe9 : CMS Wordpress Developer Intern"," "]})," ","- Developing a dynamic website using Wordpress."]})]}),(0,i.jsxs)(u.Z,{delay:.3,children:[(0,i.jsxs)(a.X6,{as:"h3",variant:"section-title",children:["What I ",(0,i.jsx)("text",{style:{color:"red"},children:"\u2665"})]}),(0,i.jsxs)(h.Z,{children:["I enjoy reading, listening to music and doing camping trips with friends among many other things."," "]})]}),(0,i.jsxs)(u.Z,{delay:.4,children:[(0,i.jsx)(a.X6,{as:"h3",variant:"section-title",children:"\ud83d\udcdd Contact Me"}),(0,i.jsxs)(a.aV,{children:[(0,i.jsx)(a.HC,{children:(0,i.jsx)(a.rU,{href:"https://github.com/Dovah03",target:"_blank",children:(0,i.jsx)(c.zx,{variant:"ghost",colorScheme:"teal",leftIcon:(0,i.jsx)(d.JO,{as:w.JOq}),children:"@Dovah03"})})}),(0,i.jsx)(a.HC,{children:(0,i.jsx)(a.rU,{href:"https://www.linkedin.com/in/elmehdi-aguendich/",target:"_blank",children:(0,i.jsx)(c.zx,{variant:"ghost",colorScheme:"teal",leftIcon:(0,i.jsx)(d.JO,{as:w.gXb}),children:"@elmehdi-aguendich"})})}),(0,i.jsx)(a.HC,{children:(0,i.jsx)(a.rU,{children:(0,i.jsx)(c.zx,{variant:"ghost",colorScheme:"teal",leftIcon:(0,i.jsx)(d.JO,{as:w.GYo}),children:"mehdi_aguendich@protonmail.com"})})}),(0,i.jsx)(a.HC,{children:(0,i.jsx)(c.zx,{onClick:function(){fetch("/React-Next-portfolio/images/Mehdi_CV_En.pdf").then((function(e){e.blob().then((function(e){var n=window.URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download="Mehdi-Aguendich_Resume_En.pdf",r.click()}))}))},variant:"ghost",colorScheme:"teal",leftIcon:(0,i.jsx)(d.JO,{as:w.Q5z}),children:"Download Resume"})})]})]})]})})}}},function(e){e.O(0,[774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);