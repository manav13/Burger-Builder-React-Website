(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2r7Ws",BreadTop:"BurgerIngredient_BreadTop__3Z_oz",Seeds1:"BurgerIngredient_Seeds1__3LsBA",Seeds2:"BurgerIngredient_Seeds2__3RWUP",Meat:"BurgerIngredient_Meat__24gwa",Cheese:"BurgerIngredient_Cheese__TtRX8",Salad:"BurgerIngredient_Salad__1YjBf",Bacon:"BurgerIngredient_Bacon__2xnsz"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__3XwCy",Label:"BuildControl_Label__33pgX",Less:"BuildControl_Less__1G7hF",More:"BuildControl_More__342B3"}},,,,,,,function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__2YcM2",OrderButton:"BuildControls_OrderButton__1vmOy",enable:"BuildControls_enable__1A3Ia"}},,,function(e,t,a){e.exports={Content:"Layout_Content__3hWSV"}},function(e,t,a){e.exports={Burger:"Burger_Burger__26uRw"}},,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),i=a.n(l),o=(a(21),function(e){return e.children}),s=a(12),c=a.n(s),d=function(e){return r.a.createElement(o,null,r.a.createElement("main",{className:c.a.Content},e.children))},u=a(8),m=a(3),b=a(4),_=a(6),g=a(5),p=a(7),B=a(14),h=a(13),v=a.n(h),f=a(1),E=a.n(f),y=function(e){function t(){return Object(m.a)(this,t),Object(_.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:E.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:E.a.BreadTop},r.a.createElement("div",{className:E.a.Seeds1}),r.a.createElement("div",{className:E.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:E.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:E.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:E.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:E.a.Salad});break;default:e=null}return e}}]),t}(n.Component),C=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(B.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(y,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding Ingredients!")),r.a.createElement("div",{className:v.a.Burger},r.a.createElement(y,{type:"bread-top"}),t,r.a.createElement(y,{type:"bread-bottom"}))},O=a(9),k=a.n(O),w=a(2),N=a.n(w),S=function(e){return r.a.createElement("div",{className:N.a.BuildControl},r.a.createElement("div",{className:N.a.Label},e.label),r.a.createElement("button",{className:N.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:N.a.More,onClick:e.added},"More"))},j=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],I=function(e){return r.a.createElement("div",{className:k.a.BuildControls},r.a.createElement("p",null,"Current Price : \u20b9 ",r.a.createElement("strong",null,e.price)),j.map(function(t){return r.a.createElement(S,{added:function(){e.ingredientAdded(t.type)},removed:function(){e.ingredientRemoved(t.type)},key:t.label,label:t.label,disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:k.a.OrderButton,disabled:!e.purchasable},"ORDER NOW"))},P={salad:10,cheese:20,bacon:30,meat:25},L=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(_.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:30,purchasable:!1},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(u.a)({},a.state.ingredients);n[e]=t;var r=a.state.totalPrice+P[e];a.setState({totalPrice:r,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e]-1,n=Object(u.a)({},a.state.ingredients);n[e]=t;var r=a.state.totalPrice-P[e];a.setState({totalPrice:r,ingredients:n}),a.updatePurchaseState(n)},a}return Object(p.a)(t,e),Object(b.a)(t,[{key:"updatePurchaseState",value:function(e){var t=0;for(var a in e)t+=e[a];this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(u.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(o,null,r.a.createElement(C,{ingredients:this.state.ingredients}),r.a.createElement(I,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,price:this.state.totalPrice}))}}]),t}(n.Component);var M=function(){return r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.552b36f7.chunk.js.map