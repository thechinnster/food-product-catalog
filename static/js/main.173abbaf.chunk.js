(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,n){e.exports=n(326)},151:function(e,t,n){},326:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),i=n.n(o),c=(n(151),n(42)),l=n(43),u=n(47),s=n(44),d=n(48),p=n(46),m=n(16),g=n(17);function f(){var e=Object(m.a)(["\nfont-size: 12px;\nmargin-bottom: 20px;\n"]);return f=function(){return e},e}function h(){var e=Object(m.a)(["\nfont-weight: bold;\nfont-size: 16px;\n"]);return h=function(){return e},e}function b(){var e=Object(m.a)(["\nfont-size: 10px;\ntext-transform: uppercase;\nmargin-bottom: 1px;\n"]);return b=function(){return e},e}function v(){var e=Object(m.a)(["\nmargin-left: -20px;\ndisplay: flex;\n& > div { padding-left: 20px;}\nmargin-bottom: 20px;\n"]);return v=function(){return e},e}function x(){var e=Object(m.a)(["\ntext-transform: capitalize;\nmargin: 5px 0 15px ;\n"]);return x=function(){return e},e}function y(){var e=Object(m.a)(["\nbackground-color: ",";\ndisplay: inline-block;\npadding: 0 8px 1px 8px;\ncolor: ",";\nfont-size: 10px;\nborder-radius: 10px;\nline-height: 1.8em;\ntext-transform: uppercase;\n"]);return y=function(){return e},e}function E(){var e=Object(m.a)(["\npadding: 10px;\ncolor: ",";\n"]);return E=function(){return e},e}function j(){var e=Object(m.a)(["\nheight: 182px;\ntext-align: center;\nbackground-color: white;\n"]);return j=function(){return e},e}function O(){var e=Object(m.a)(["\n    width: 300px;\n    background-color: ",";\n    box-shadow: ",";\n    font-family: 'Open Sans', sans-serif;\n    margin-bottom: 20px;\n"]);return O=function(){return e},e}var w=g.a.div(O(),function(e){return e.hasFocus?"#4C7072":"#D5EFA6"},function(e){return e.hasFocus?"0px 15px 25px 0px rgba(0,0,0,0.50);":"-1px 2px 15px -9px rgba(0,0,0,0.75);"}),k=g.a.img(j()),C=g.a.div(E(),function(e){return e.hasFocus?"white":"#1E466A"}),z=g.a.div(y(),function(e){return e.hasFocus?"white":"#1E466A"},function(e){return e.hasFocus?"#1E466A":"white"}),q=g.a.h1(x()),F=g.a.div(v()),P=g.a.div(b()),S=g.a.div(h()),A=g.a.div(f());function D(e){var t=e.product,n=(t.id,t.title),a=t.category,o=t.quantity,i=t.weight,c=t.description,l=t.image,u=t.hasFocus;return r.a.createElement(w,{hasFocus:u},r.a.createElement(k,{src:l,alt:""}),r.a.createElement(C,{hasFocus:u},r.a.createElement(z,{hasFocus:u},"  ",a," "),r.a.createElement(q,null,n),r.a.createElement(F,null,r.a.createElement("div",null,r.a.createElement(P,null,"Quantity"),r.a.createElement(S,null,o)),r.a.createElement("div",null,r.a.createElement(P,null,"Weight"),r.a.createElement(S,null,i))),r.a.createElement(A,null,c)))}function T(){var e=Object(m.a)(["\n    display: flex;\n    margin-left: -20px;\n    flex-wrap: wrap;\n    & > div {\n        margin-left: 20px;\n    }\n"]);return T=function(){return e},e}var I=g.a.div(T());var W=function(e){var t=e.products,n={onProductHover:e.onProductHover};return r.a.createElement(I,null,t.map(function(e){return r.a.createElement(D,Object.assign({key:e.id,product:e},n))}))},B=Object(p.b)(function(e){return{products:e.products}})(W),Q=n(24),R=n(27),U=n(133),_=n.n(U),H=n(132),J=n.n(H);function L(){var e=Object(m.a)(["\nmargin-top: 60px;\nfont-size: 20px;\ncolor: #666;\ndisplay:flex;\nalign-items:center;\n& > * {\n    padding-right: 20px;\n}\n"]);return L=function(){return e},e}var V,N,$=g.a.div(L()),G=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).IncrementItem=function(){n.props.onChange(n.state.clicks+1),n.setState({clicks:n.state.clicks+1})},n.DecreaseItem=function(){n.state.clicks>1&&(n.props.onChange(n.state.clicks-1),n.setState({clicks:n.state.clicks-1}))},n.state={clicks:1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement($,null,r.a.createElement("div",null,"Quantity"),r.a.createElement(J.a,{fontSize:"small",color:"primary",onClick:this.DecreaseItem},"Click to decrease by 1"),r.a.createElement("div",null,this.state.clicks),r.a.createElement(_.a,{fontSize:"small",color:"primary",onClick:this.IncrementItem},"Click to increment by 1"))}}]),t}(a.Component),K=n(331),M=n(54),X=n(135),Y=n.n(X),Z=n(134),ee=n.n(Z),te=n(30),ne=n(53),ae=n.n(ne),re=n(87),oe=n.n(re),ie=Object(te.a)(ee.a)({paddingLeft:"10px",color:(V="color",N={error:"red",default:"inherit"},function(e){return N[e[V]]})}),ce=Object(te.a)(ae.a)({fontSize:"20px"}),le=Object(te.a)(oe.a)({fontSize:"20px"}),ue=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={count:n.props.limit},n.handleChange=n.handleChange.bind(Object(M.a)(Object(M.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.props.onChange(e),this.setState({count:this.props.limit-e.target.value.length})}},{key:"render",value:function(){var e=this.state.count<0?"error":"default",t=this.props.limit?r.a.createElement(ie,{color:e,position:"start"},this.state.count):"";return r.a.createElement(Y.a,Object.assign({},this.props,{onChange:this.handleChange,InputProps:{inputComponent:ce,endAdornment:t},InputLabelProps:{component:le}}))}}]),t}(a.Component),se=n(89),de=n.n(se),pe=n(88),me=n.n(pe),ge=n(90),fe=n.n(ge),he=n(136),be=n.n(he),ve=Object(te.a)(me.a)({fontSize:"20px"}),xe=Object(te.a)(be.a)({textTransform:"capitalize"}),ye=Object(te.a)(fe.a)({textTransform:"capitalize"}),Ee=function(e){var t=e.value,n=e.onChange,a=e.id,o=e.label,i=e.options;return r.a.createElement(de.a,{fullWidth:!0},r.a.createElement(ve,{htmlFor:a},o),r.a.createElement(ye,{value:t,onChange:n,inputProps:{name:a,id:a}},i.map(function(e){return r.a.createElement(xe,{key:"option",value:e},e)})))},je=Object(Q.a)("div",{target:"e10tdig90"})({name:"46b038",styles:"margin-top:30px;"}),Oe=Object(Q.a)("h1",{target:"e10tdig91"})({name:"1tg5xt5",styles:"text-transform:uppercase;margin:0;font-size:36px;"}),we=Object(Q.a)("div",{target:"e10tdig92"})({name:"12fl61d",styles:"width:100%;display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;padding-bottom:20px;border-bottom:5px solid black;"}),ke=Object(Q.a)("div",{target:"e10tdig93"})({name:"1bwg1tt",styles:"display:flex;border-top:5px solid black;justify-content:flex-end;margin:40px 0;padding:20px 0;"}),Ce=Object(Q.a)(R.c,{target:"e10tdig94"})({name:"8atqhb",styles:"width:100%;"}),ze=Object(Q.a)("button",{target:"e10tdig95"})({name:"ptc9tx",styles:"background-color:rgb(238,117,47);padding:20px 35px;color:white;font-size:18px;text-transform:uppercase;border-width:0;border-radius:3px;font-weight:bold;"}),qe=Object(Q.a)(R.a,{target:"e10tdig96"})({name:"tokvmb",styles:"color:red;"}),Fe=function(e){var t=e.field,n=e.id,a=e.label,o=e.limit,i=e.select;e.options;return r.a.createElement(je,null,i&&r.a.createElement(Ee,{select:!0,options:["meat","fish","vegetable"],value:t.value,name:"category",id:"category",onChange:t.onChange,label:"Category"}),!i&&r.a.createElement(ue,{fullWidth:!0,limit:o,label:a,value:t.value,id:n,onChange:t.onChange}))},Pe=function(e){return r.a.createElement("div",null,r.a.createElement(R.d,{initialValues:{productname:"",category:"",quantity:"1",weight:"",description:""},validate:function(e){var t={};return e.productname||(t.productname="Please enter a product name"),e.category||(t.category="Please select a category"),e.weight||(t.weight="Please enter a weight"),e.description||(t.description="Please enter a description"),e.description.length>100&&(t.description="Product description must be less that 100 characters"),t},onSubmit:function(t,n){var a=n.setSubmitting,r=n.resetForm,o=n.setStatus;setTimeout(function(){e.addProduct(t.productname,t.category,t.quantity,t.weight,t.description),a(!1)},400),r({}),o({success:!0})}},function(e){var t=e.isSubmitting,n=e.setFieldValue,a=e.status;return r.a.createElement(Ce,null,r.a.createElement(we,null,r.a.createElement(Oe,null,"Add Product"),r.a.createElement(ze,{type:"submit",disabled:t},"Save Product")),a&&r.a.createElement(K.a,{to:"/food-product-catalog"}),r.a.createElement(R.b,{component:Fe,name:"productname",id:"productname",label:"Product Name"}),r.a.createElement(qe,{name:"productname",component:"div"}),r.a.createElement(R.b,{component:Fe,select:!0,options:["meat","fish","vegetable"],name:"category",id:"category",label:"Category"}),r.a.createElement(qe,{name:"category",component:"div"}),r.a.createElement(je,null,r.a.createElement(R.b,{component:G,onChange:function(e){return n("quantity",e)},name:"quantity",id:"quantity",label:"Quantity"})),r.a.createElement(R.b,{component:Fe,name:"weight",id:"weight",label:"Weight"}),r.a.createElement(qe,{name:"weight",component:"div"}),r.a.createElement(R.b,{limit:100,component:Fe,name:"description",id:"description",label:"Description"}),r.a.createElement(qe,{name:"description",component:"div"}),r.a.createElement(ke,null,r.a.createElement(ze,{type:"submit",disabled:t},"Save Product")))}))},Se=Object(p.b)(function(e){return{products:e.products}},function(e){return{addProduct:function(t,n,a,r,o){return e(function(e,t,n,a,r){return{type:"ADD_PRODUCT",name:e,category:t,quantity:n,weight:a,description:r}}(t,n,a,r,o))}}})(Pe),Ae=n(329),De=n(330),Te=n(328);function Ie(){var e=Object(m.a)(["\n    padding: 10px 0 0 0 ;\n    margin: 30px 0;\n    border-top: 1px solid rgba(164,180,192, .3);\n    text-indent:0;\n    text-transform:uppercase;\n    font-weight: bold;\n    font-size: 14px;\n    list-style-type:none;\n    & li {\n        padding: 10px 0;\n        margin: 0;\n        text-indent:0;\n    }\n    & a {\n        color: #A5B5C2;\n        text-decoration: none;\n    }\n"]);return Ie=function(){return e},e}function We(){var e=Object(m.a)(["\n    background-color: #F2F2F0;\n    padding: 40px;\n    flex-grow: 1;\n"]);return We=function(){return e},e}function Be(){var e=Object(m.a)(["\n    display:block;\n    color: #209CEA;\n    background-color: white;\n    padding: 5px;\n    white-space: nowrap;\n    text-decoration:none;\n    padding: 10px 20px;\n    border-radius: 5px;\n    text-transform: uppercase;\n    font-weight: bold;\n"]);return Be=function(){return e},e}function Qe(){var e=Object(m.a)(["\n    background-color: #1E466A;\n    padding: 40px;\n    color: #A5B5C2;\n"]);return Qe=function(){return e},e}function Re(){var e=Object(m.a)(["\n    background-color: #F2F2F0;\n    padding: 10px;\n    display: flex;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 13px;\n    width: 1288px;\n    margin: 0 auto;\n"]);return Re=function(){return e},e}var Ue=g.a.div(Re()),_e=g.a.div(Qe()),He=Object(g.a)(Te.a)(Be()),Je=g.a.div(We()),Le=g.a.ul(Ie());var Ve=function(e){return r.a.createElement(Ue,null,r.a.createElement(_e,null,r.a.createElement(He,{to:"/add-product"},"Add Products"),r.a.createElement(Le,null,r.a.createElement("li",null,r.a.createElement(Te.a,{to:"/food-product-catalog"},"Dashboard")),r.a.createElement("li",null,r.a.createElement(Te.a,{to:"/food-product-catalog"},"Products")),r.a.createElement("li",null,"Reports"))),r.a.createElement(Je,null,e.children))},Ne=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(Ae.a,null,r.a.createElement(Ve,null,!1,r.a.createElement(De.a,{path:"/food-product-catalog",component:B}),r.a.createElement(De.a,{path:"/add-product",component:Se})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $e=n(45),Ge=n(138),Ke=n(137),Me=[{title:"tomato",category:"vegetables",id:"1",quantity:"5pcs",weight:"3g",description:"The quick brown fox jumps over the lazy dog",image:"http://via.placeholder.com/300x182"},{title:"onion",category:"vegetables",id:"2",quantity:"10pcs",weight:"3g",description:"The quick brown fox jumps over the lazy dog",image:"http://via.placeholder.com/300x182"},{title:"cabbage",category:"vegetables",id:"3",quantity:"5pcs",weight:"3g",description:"The quick brown fox jumps over the lazy dog",image:"http://via.placeholder.com/300x182"},{title:"salmon",category:"fish",id:"4",quantity:"10pcs",weight:"3g",description:"The quick brown fox jumps over the lazy dog",image:"http://via.placeholder.com/300x182"},{title:"carrot",category:"vegetables",id:"5",quantity:"5pcs",weight:"3g",description:"The quick brown fox jumps over the lazy dog",image:"http://via.placeholder.com/300x182"},{title:"pork",category:"meat",id:"6",quantity:"10pcs",weight:"3g",description:"The quick brown fox jumps over the lazy dog",image:"http://via.placeholder.com/300x182"}],Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT":return[].concat(Object(Ke.a)(e),[{id:e[e.length-1].id+1,title:t.name,category:t.category,weight:t.weight,description:t.description,image:"http://via.placeholder.com/300x182"}]);case"FOCUS_TODO":return e.map(function(e){return e.id===t.id?Object(Ge.a)({},e,{focused:!e.focused}):e});default:return e}},Ye=Object($e.b)({products:Xe}),Ze=Object($e.c)(Ye);i.a.render(r.a.createElement(p.a,{store:Ze},r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[146,2,1]]]);
//# sourceMappingURL=main.173abbaf.chunk.js.map