(this.webpackJsonpunsplash=this.webpackJsonpunsplash||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(5),i=n.n(c),s=n(2),o=n(3),u=n.n(o),l=n(6),d=n(7),f={headers:{Authorization:"Client-ID ".concat("1XZXSR2y8vDrLDP4nyzRxcJaw6O8D_PGHAQ7ULWyfZo")}},h={},j=Object(d.a)((function(e){return{images:[],error:!1,loading:!1,fetch:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var t=Object(l.a)(u.a.mark((function t(n){var r,a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e({loading:!0}),t.prev=1,r="https://api.unsplash.com/search/photos?"+new URLSearchParams({query:n}),h[r]){t.next=11;break}return t.next=6,fetch(r,f);case 6:return a=t.sent,t.next=9,a.json();case 9:c=t.sent,h[r]=null===c||void 0===c?void 0:c.results;case 11:e({images:h[r],error:!1,loading:!1}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),e({error:!0,loading:!1});case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}())}})),v=(n(13),n(0)),b=function(e){var t=e.text;return Object(v.jsx)("div",{className:"image-grid-message",children:t})},m=function(e){var t=e.alt,n=e.src,a=Object(r.useState)(!1),c=Object(s.a)(a,2),i=c[0],o=c[1];return Object(v.jsx)("img",{className:"image-grid-item ".concat(i?"visible":"hidden"),alt:t,src:n,onLoad:function(){return o(!0)}})};var g=function(){var e=j((function(e){return e.error})),t=j((function(e){return e.images})),n=j((function(e){return e.loading}));return e?Object(v.jsx)(b,{text:"Problem fetching images"}):n?Object(v.jsx)(b,{text:"Loading images..."}):(null===t||void 0===t?void 0:t.length)?Object(v.jsx)("div",{className:"image-grid",children:null===t||void 0===t?void 0:t.map((function(e){var t;return Object(v.jsx)(m,{alt:null===e||void 0===e?void 0:e.alt_description,src:null===e||void 0===e||null===(t=e.urls)||void 0===t?void 0:t.small},null===e||void 0===e?void 0:e.id)}))}):Object(v.jsx)(b,{text:"No images"})};n(15);var p=function(){var e=j((function(e){return e.fetch})),t=Object(r.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){e(a)}),[e,a]),Object(v.jsx)("div",{className:"search",children:Object(v.jsxs)("form",{className:"search-form",onSubmit:function(e){return e.preventDefault(),!1},children:[Object(v.jsx)("label",{className:"search-label",htmlFor:"search-input","aria-label":"Search input",children:"Search for Pictures:"}),Object(v.jsx)("input",{autoComplete:"off",className:"search-input",name:"search-input",value:a,onChange:function(e){return c(e.target.value)}})]})})};n(16);var x=function(){return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)(p,{}),Object(v.jsx)(g,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};n(17);i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(x,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.ca361d46.chunk.js.map