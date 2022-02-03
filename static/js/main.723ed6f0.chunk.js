(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(19),i=c.n(a),r=(c(28),c(8)),l=c(0);var o=function(){return Object(l.jsx)("div",{className:"base-wrapper",children:Object(l.jsxs)("div",{className:"white-block",children:[Object(l.jsxs)("div",{className:"text-block",children:[Object(l.jsx)("h2",{children:"Finding recipes made easy"}),Object(l.jsx)("p",{className:"landing-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"}),Object(l.jsx)(r.b,{to:"/main",className:"start-link",children:Object(l.jsx)("button",{className:"startbtn",children:"Get Started"})})]}),Object(l.jsx)("div",{className:"green-block-landing",children:Object(l.jsx)("div",{className:"photo-block"})})]})})},j=c(2),d=c(4),m=c(23);c(17).config();var b=function(e){var t=Object(s.useState)([]),c=Object(d.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)([]),r=Object(d.a)(i,2),o=r[0],j=r[1],b=Object(s.useState)(""),g=Object(d.a)(b,2),u=g[0],p=g[1],h=Object(s.useState)(""),O=Object(d.a)(h,2),x=O[0],f=O[1],v=function(e){console.log("search ".concat(e)),fetch("https://api.spoonacular.com/food/ingredients/autocomplete?query=".concat(e,"&number=5&apiKey=").concat("82138415fc524a1d950b2bc22191c8cc")).then((function(e){return e.json()})).then((function(e){a(e)})),console.log(n)},N=Object(s.useRef)(),w=function(){N.current.focus()};return Object(l.jsxs)("div",{className:"green-block-main",children:[Object(l.jsxs)("div",{className:"green-upper-wrapper",children:[Object(l.jsx)("h4",{children:"Ingredients"}),Object(l.jsx)("form",{className:"search-form",children:Object(l.jsx)("input",{className:"search-bar",ref:N,type:"text",value:u,onChange:function(e){p(e.target.value),clearTimeout(x);var t=e.target.value,c=setTimeout((function(){""!==t&&v(t)}),500);f(c)}})}),Object(l.jsxs)("div",{className:"green-info-wrapper",children:[0===n.length&&0===o.length&&Object(l.jsxs)("div",{className:"green-instructions-wrapper",children:[Object(l.jsx)("img",{className:"green-arrow",src:"Images/greenarrow.png",alt:"up arrow"}),Object(l.jsx)("p",{className:"green-instructions",children:"Add an ingredient to begin your search"})]}),0!==n.length&&Object(l.jsx)("div",{className:"auto-complete-dropdown",children:n.map((function(t){return Object(l.jsx)("p",{className:"suggestions",onClick:function(){!function(t){var c=e.search+","+t,s=o.concat([t]);a(""),j(s),p(""),w(),console.log(c),console.log(s),e.searchStringAdd(c)}(t.name)},children:t.name},t.name)}))}),0!==o.length&&Object(l.jsx)("div",{className:"ing-list",children:o.map((function(t){return Object(l.jsxs)("div",{className:"ing-wrapper",children:[Object(l.jsx)("li",{className:"ingredient",children:t}),Object(l.jsx)("button",{onClick:function(){return function(t){var c=Object(m.a)(o).filter((function(e){return e!==t}));j(c),e.searchStringRemove(t)}(t)},className:"ing-x-button",children:"X"})]},t)}))})]})]}),0!==o.length&&Object(l.jsx)("button",{className:"reset-button",onClick:function(){return j([]),void e.searchStringReset()},children:"Reset"})]})};var g=function(e){return Object(l.jsxs)("div",{className:"filter-wrapper",children:[Object(l.jsxs)("div",{className:"time-wrapper",children:[Object(l.jsxs)("div",{className:"time-button",children:[Object(l.jsx)("div",{className:"time-light",children:Object(l.jsx)("p",{className:"filter-text",children:"Time"})}),Object(l.jsx)("div",{className:"time-dark",onClick:function(){return e.toggleTimeDropdown()},children:Object(l.jsx)("img",{className:"filter-arrow",src:"Images/filterarrow.png",alt:"drop down arrow"})})]}),Object(l.jsxs)("div",{className:"time-dropdown",style:{display:e.dropdown},children:[Object(l.jsx)("button",{className:"time-option",onClick:function(){return e.handleTime("15")},children:"15 min"}),Object(l.jsx)("button",{className:"time-option",onClick:function(){return e.handleTime("30")},children:"30 min"}),Object(l.jsx)("button",{className:"time-option",onClick:function(){return e.handleTime("60")},children:"1 hr"})]})]}),Object(l.jsxs)("div",{className:"diet-wrapper",children:[Object(l.jsx)("div",{className:"diet-light",children:Object(l.jsx)("p",{className:"filter-text",children:"Diet"})}),Object(l.jsxs)("div",{className:"diet-dark",children:[Object(l.jsxs)("div",{className:"filter-wrapper",children:[Object(l.jsx)("button",{className:"gluten-btn",onClick:function(){return e.toggleGlutenFilter(e.searchState)},style:{backgroundColor:e.glutenFreeColor}}),Object(l.jsx)("p",{className:"filter-subtext",children:"Gluten free"})]}),Object(l.jsxs)("div",{className:"filter-wrapper",children:[Object(l.jsx)("button",{className:"veg-btn",onClick:function(){return e.toggleVegetarianFilter(e.searchState)},style:{backgroundColor:e.vegetarianColor}}),Object(l.jsx)("p",{className:"filter-subtext",children:"Vegetarian"})]})]})]})]})},u=c(22);var p=function(e){var t=Object(s.useState)(10),c=Object(d.a)(t,2),n=c[0],a=c[1],i=Object(s.useRef)(null);return Object(u.a)(i,(function(){return a(n+10),void console.log("should be loading more")})),Object(l.jsxs)("div",{className:"white-block-main",ref:i,children:[e.recipes&&e.recipes.slice(0,n).map((function(e,t){return Object(l.jsx)(r.b,{to:{pathname:"/recipe",activeClassName:"recipe-card",key:{index:t},state:{recipeImage:e.image,recipeTitle:e.title,recipeTime:e.readyInMinutes,ingredients:e.extendedIngredients,instructions:e.analyzedInstructions}},children:Object(l.jsxs)("div",{className:"recipe-card",children:[Object(l.jsx)("img",{className:"recipe-image",src:e.image,alt:e.title}),Object(l.jsx)("div",{className:"recipe-card-title-bar",children:Object(l.jsx)("p",{className:"card-text",children:e.title},t)}),Object(l.jsxs)("div",{className:"recipe-card-icon-bar",children:[Object(l.jsxs)("div",{className:"time-display",children:[Object(l.jsx)("img",{className:"clock-logo",src:"Images/clock.png",alt:"time icon"}),Object(l.jsxs)("p",{className:"card-icon-text",children:[e.readyInMinutes," min "]})]}),Object(l.jsxs)("div",{className:"time-display",children:[Object(l.jsx)("img",{className:"diet-logo",src:"Images/diet.png",alt:"time icon"}),Object(l.jsx)("p",{className:"card-icon-text",children:"test"})]})]})]},t)})})),0===e.recipes.length&&Object(l.jsx)("img",{className:"placeholder-plate",src:"Images/plate.png",alt:"plate with fork"})]})};var h=function(e){return Object(l.jsxs)("div",{className:"blue-block-main",children:[Object(l.jsx)(p,{recipes:e.recipes}),Object(l.jsx)(g,{toggleGlutenFilter:e.toggleGlutenFilter,glutenFreeColor:e.glutenFreeColor,toggleVegetarianFilter:e.toggleVegetarianFilter,vegetarianColor:e.vegetarianColor,searchState:e.searchState,toggleTimeDropdown:e.toggleTimeDropdown,dropdown:e.dropdown,handleTime:e.handleTime})]})};c(17).config();var O=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),i=Object(d.a)(a,2),r=i[0],o=i[1],j=Object(s.useState)(""),m=Object(d.a)(j,2),g=m[0],u=m[1],p=Object(s.useState)(""),O=Object(d.a)(p,2),x=O[0],f=O[1],v=Object(s.useState)(""),N=Object(d.a)(v,2),w=N[0],S=N[1],k=Object(s.useState)(""),C=Object(d.a)(k,2),y=C[0],F=C[1],I=Object(s.useState)("none"),T=Object(d.a)(I,2),R=T[0],G=T[1],D=Object(s.useState)(""),V=Object(d.a)(D,2),E=V[0],L=V[1];return Object(s.useEffect)((function(){var e,t;t=!0===c?"&intolerances=gluten":"",e=!0===r?"&diet=vegetarian":"",console.log("useEffect Fetch"),console.log("--time filter:".concat(E)),console.log("--veg filter:".concat(r)),console.log("--Gluten Filter:".concat(c)),console.log("--search is:".concat(w)),fetch("https://api.spoonacular.com/recipes/complexSearch?&includeIngredients=".concat(w,"&number=40").concat(t).concat(e).concat(E,"&addRecipeInformation=true&instructionsRequired=true&fillIngredients=true&apiKey=").concat("82138415fc524a1d950b2bc22191c8cc")).then((function(e){return e.json()})).then((function(e){F(e.results),console.log(e)}))}),[E,c,r,w]),Object(l.jsxs)("div",{className:"base-wrapper-main",children:[Object(l.jsx)(b,{glutenFree:c,vegetarian:r,search:w,searchStringAdd:function(e){S(e),console.log(e)},searchStringRemove:function(e){var t=","+e,c=w.replace(t,"");S(c),console.log(c)},searchStringReset:function(){S(""),console.log("list reset")}}),Object(l.jsx)(h,{toggleGlutenFilter:function(e){console.log("toggle");var t=c;!1===t?(n(!0),u("white"),t=!0):(n(!1),u(""),t=!1),console.log(t)},glutenFreeColor:g,toggleVegetarianFilter:function(e){console.log("toggle");var t=r;!1===t?(o(!0),f("white"),t=!0):(o(!1),f(""),t=!1),console.log(t)},vegetarianColor:x,searchState:w,toggleTimeDropdown:function(){G("none"===R?"flex":"none")},dropdown:R,handleTime:function(e){L("&maxReadyTime=".concat(e)),console.log(e)},recipes:y})]})};var x=function(){var e=Object(j.f)();console.log(e.state);var t=e.state.recipeImage,c=e.state.recipeTitle,n=e.state.recipeTime,a=e.state.ingredients,i=e.state.instructions[0].steps;return Object(s.useEffect)((function(){console.log(c),console.log(a),console.log(i)}),[t,c,n,i,a]),Object(l.jsxs)("div",{className:"section-wrapper",children:[Object(l.jsx)("div",{className:"rp-green"}),Object(l.jsx)("div",{className:"rp-blue",children:Object(l.jsxs)("div",{className:"rp-white",children:[Object(l.jsxs)("div",{className:"recipe-display",children:[Object(l.jsx)("img",{className:"recipe-image",src:t,alt:c}),Object(l.jsx)("div",{className:"recipe-card-title-bar",children:Object(l.jsx)("p",{className:"card-text",children:c})}),Object(l.jsxs)("div",{className:"recipe-card-icon-bar",children:[Object(l.jsxs)("div",{className:"time-display",children:[Object(l.jsx)("img",{className:"clock-logo",src:"Images/clock.png",alt:"time icon"}),Object(l.jsxs)("p",{className:"card-icon-text",children:[n," min "]})]}),Object(l.jsxs)("div",{className:"time-display",children:[Object(l.jsx)("img",{className:"diet-logo",src:"Images/diet.png",alt:"time icon"}),Object(l.jsx)("p",{className:"card-icon-text",children:"test"})]})]})]}),Object(l.jsxs)("div",{className:"recipe-details",children:[Object(l.jsx)("div",{className:"ingredients-list-wrapper",children:a.map((function(e){return Object(l.jsx)("li",{className:"ingredients-list",children:e.original},e)}))}),Object(l.jsx)("div",{className:"instructions-list-wrapper",children:Object(l.jsx)("ol",{children:i.map((function(e){return Object(l.jsx)("li",{className:"instructions-list",children:e.step})}))})})]})]})})]})};var f=function(){return Object(l.jsx)(r.a,{basename:"/",children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("img",{className:"logo",src:"Images/Smart-chef-logo.png",alt:"Smart Chef Logo"}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/",exact:!0,component:o}),Object(l.jsx)(j.a,{path:"/main",exact:!0,component:O}),Object(l.jsx)(j.a,{path:"/recipe",exact:!0,component:x})]})]})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),v()}},[[38,1,2]]]);
//# sourceMappingURL=main.723ed6f0.chunk.js.map