import{$ as g,Ca as r,Ea as _,Fa as x,Ga as L,Ha as q,Ia as l,Ja as s,Ka as a,La as T,Ma as c,Na as z,Oa as p,Qa as j,Ra as f,Sa as d,ba as v,ja as w,ka as G,ma as n,ua as m,wa as u}from"./chunk-UMUJIIZU.js";var C=class e{imageUrl=g.required();static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["gifs-list-item"]],inputs:{imageUrl:[1,"imageUrl"]},decls:2,vars:1,consts:[["alt","",1,"h-auto","max-w-full","rounded-lg",3,"src"]],template:function(t,o){t&1&&(l(0,"div"),a(1,"img",0),s()),t&2&&(n(),z("src",o.imageUrl(),G))},encapsulation:2})};function k(e,i){if(e&1&&a(0,"div",1),e&2){c(2);let t=d(2);r("innerHTML",t,w)}}function D(e,i){if(e&1&&a(0,"div",1),e&2){c(2);let t=d(3);r("innerHTML",t,w)}}function U(e,i){if(e&1&&(p(0," inicioBloque = contador == 1; finBloque = contador == 3; "),u(1,k,1,1,"div",1),a(2,"gifs-list-item",2),u(3,D,1,1,"div",1),p(4," contador = (contador == 3) ? 1 : contador + 1; ")),e&2){let t=i.$implicit;c();let o=d(0),b=d(1);n(),_(o?1:-1),n(),r("imageUrl",t),n(),_(b?3:-1)}}function B(e,i){if(e&1&&(j(0)(1)(2)(3)(4)(5),L(6,U,5,3,null,null,x)),e&2){let t=c();f(!0),n(),f(!1),n(),f('<div class="grid gap-4">'),n(),f("</div>"),n(3),q(t.gifs())}}function F(e,i){if(e&1&&a(0,"gifs-list-item",2),e&2){let t=i.$implicit;r("imageUrl",t)}}function P(e,i){if(e&1&&L(0,F,1,1,"gifs-list-item",2,x),e&2){let t=c();q(t.gifs())}}var y=class e{gifs=g.required();masonry=g.required();static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["gifs-list"]],inputs:{gifs:[1,"gifs"],masonry:[1,"masonry"]},decls:3,vars:1,consts:[[1,"grid","grid-cols-2","md:grid-cols-3","gap-4"],[3,"innerHTML"],[3,"imageUrl"]],template:function(t,o){t&1&&(l(0,"div",0),u(1,B,8,4)(2,P,2,0),s()),t&2&&(n(),_(o.masonry()?1:2))},dependencies:[C],encapsulation:2})};var N=["https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg","https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg","https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg","https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg","https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg","https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg","https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg","https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg","https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg","https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg","https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg","https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"],h=class e{listGifs=v(N);verMasonry=v(!1);cambioVista(i){console.log(i),this.verMasonry.update(()=>i)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-trending-page"]],decls:6,vars:2,consts:[[1,"py-5"],["value","",1,"ttext-white","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","me-2","mb-2","dark:bg-blue-600","dark:hover:bg-blue-700","focus:outline-none","dark:focus:ring-blue-800",3,"click"],[3,"gifs","masonry"]],template:function(t,o){t&1&&(l(0,"section",0)(1,"button",1),T("click",function(){return o.cambioVista(!0)}),p(2," Ver masonry "),s(),l(3,"button",1),T("click",function(){return o.cambioVista(!1)}),p(4," Ver default "),s(),a(5,"gifs-list",2),s()),t&2&&(n(5),r("gifs",o.listGifs())("masonry",o.verMasonry()))},dependencies:[y],encapsulation:2})};export{h as default};
