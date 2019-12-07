(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{31:function(t,n,e){t.exports=e(45)},36:function(t,n,e){},43:function(t,n,e){},45:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),a=e(13),i=e.n(a),c=(e(36),e(7)),u=e(8),l=e(10),s=e(9),d=e(11),p=e(4),f=e(6),b="SET_FILTER",h="SET_TODOS",m="ADD_TODO",O="REMOVE_TODO",g="REMOVE_ALL",v="COMPLETE_STATUS",j="SHOW_NOTIFICATION";function y(t){return{type:j,value:t}}var E=e(3);function w(){var t=Object(p.a)(["\n  float: right;\n"]);return w=function(){return t},t}function x(){var t=Object(p.a)(["\n  display: block;\n  padding: 5px;\n  border-bottom: 1px solid green;\n  cursor: pointer;\n  margin-bottom: 10px;\n"]);return x=function(){return t},t}var T=E.c.div(x()),k=E.c.span(w());var S=Object(f.b)(null,(function(t){return{removeTodo:function(n){t({type:O,id:n})},completeStatus:function(n){t({type:v,id:n})},showNotification:function(n){t(y(n))}}}))((function(t){var n=t.content,e=t.id,r="todo-item";return t.checked&&(r+=" checked"),o.a.createElement(T,{className:r,onClick:function(){t.completeStatus(e)}},n,o.a.createElement(k,{onClick:function(n){n.stopPropagation(),t.removeTodo(e),t.showNotification("Todo was deleted")}},"X"))}));function N(){var t=Object(p.a)(["\n","\ntext-align: center;\ncolor: #fff;\npadding: 15px;\nborder-radius: 5px;\nmargin-top: 30px;\nmargin-bottom: 20px;\n"]);return N=function(){return t},t}function C(){var t=Object(p.a)(["\n  background: linear-gradient(to right, rgba(236, 146, 86, 0.87) , rgba(236, 221, 86, 0.87), rgba(133, 236, 86, 0.87), rgba(86, 231, 236, 0.87), rgba(86, 96, 236, 0.87), rgba(236, 86, 211, 0.87));\n"]);return C=function(){return t},t}var P=Object(E.b)(C()),D=E.c.h3(N(),P);function I(){var t=Object(p.a)(["\n  margin-top: 35px;\n  font-size: 22px;\n"]);return I=function(){return t},t}function A(){var t=Object(p.a)(["\n  width: 50rem;\n  align-items: center;\n"]);return A=function(){return t},t}var F=E.c.div(A()),V=Object(E.c)(D)(I()),_=function(t){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(F,{className:"todo-list"},o.a.createElement(V,null,this.props.title," (",this.props.todos.length,")"),this.props.todos.map((function(t){return o.a.createElement(S,Object.assign({},t,{key:t.id}))})))}}]),n}(o.a.Component),J=e(15),z=function(t){function n(t){var e;return Object(c.a)(this,n),(e=Object(l.a)(this,Object(s.a)(n).call(this,t))).addTodo=function(t){e.props.addTodo({content:t,id:Math.random(),checked:!1})},e.state={inputVal:""},e.changeInput=e.changeInput.bind(Object(J.a)(e)),e.addTodoEvent=e.addTodoEvent.bind(Object(J.a)(e)),e}return Object(d.a)(n,t),Object(u.a)(n,[{key:"changeInput",value:function(t){var n=t.target.value;this.setState({inputVal:n})}},{key:"addTodoEvent",value:function(t){t.preventDefault(),this.addTodo(this.state.inputVal),this.props.showNotification("Todo was added"),this.setState({inputVal:""})}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.addTodoEvent},o.a.createElement("div",{className:"input-field",style:{margin:"35px 0 35px 0"}},o.a.createElement("input",{type:"text",value:this.state.inputVal,onChange:this.changeInput,placeholder:"Add Todo..."})))}}]),n}(o.a.Component),L=Object(f.b)(null,(function(t){return{addTodo:function(n){t({type:m,todo:n})},showNotification:function(n){t(y(n))}}}))(z);function M(){var t=Object(p.a)(["\n","\nfont-family: 'Sulphur Point', sans-serif;\nfont-weight: light;\nletter-spacing: 2px;\nfont-size: 22px;\ntext-align: center;\ncolor: #fff;\npadding: 15px;\nmargin: 0;\nwidth: 50rem;\nborder-radius: 5px;\nmargin-bottom: 35px;\ncursor: pointer;\n"]);return M=function(){return t},t}var K=E.c.button(M(),P),R=function(t){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){var t=this;return o.a.createElement(K,{className:"remove-all",onClick:function(){t.props.removeAll()}},"T\xfcm\xfcn\xfc Sil")}}]),n}(o.a.Component),W=Object(f.b)(null,(function(t){return{removeAll:function(n){t(function(t){return{type:g,todos:t}}(n))}}}))(R);function B(){var t=Object(p.a)(["\n  display: inline-block;\n  width: 200px;\n  margin: 10px;\n  font-size: 20px;\n  padding: 15px;\n  border-radius: 5px;\n  color: #fff;\n  transition: all .3s ease\n  cursor: pointer;\n\n  &:hover { box-shadow: 5px 5px 5px 0px rgba(195,75,219,1); }\n  &:active {transform: scale(.96); }\n  &:first-child {\n    background: rgba(86, 96, 236, 0.87);\n  }\n  &:nth-child(2){\n    background: rgba(236, 86, 211, 0.87);\n  }\n  &:last-child {\n    background: rgba(236, 221, 86, 0.87);\n  }\n"]);return B=function(){return t},t}var H=[{label:"Hepsi",labelKey:"all"},{label:"Tamamlanm\u0131\u015f",labelKey:"completed"},{label:"Tamamlanmam\u0131\u015f",labelKey:"uncompleted"}],U=E.c.div(B()),X=function(t){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){var t=this;return console.log(this.props),o.a.createElement("div",{className:"filter-container",style:{textAlign:"center"}},H.map((function(n){return o.a.createElement(U,{onClick:function(){return t.props.changeFilter(n.labelKey)}},n.label)})))}}]),n}(r.Component),$=Object(f.b)((function(t){return{activeFilter:t.filter}}),(function(t){return{changeFilter:function(n){t(function(t){return{type:b,activeFilter:t}}(n))}}}))(X),q=(e(43),e(24),e(16));e(44);function G(){var t=Object(p.a)(["\n  width: 100%;\n  heigh: 98vh;\n"]);return G=function(){return t},t}function Q(){var t=Object(p.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Sulphur+Point&display=swap');\n  @import url('https://fonts.googleapis.com/css?family=Cantarell');\n  \n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center\n    font-family: 'Sulphur Point', sans-serif;\n    font-weight: light;\n    letter-spacing: 2px;\n    font-size: 22px;\n    font-size: 100%;\n    line-height: 1.5;\n  }\n"]);return Q=function(){return t},t}var Y=Object(E.a)(Q());q.a.configure();var Z=E.c.div(G()),tt=function(t){function n(){var t,e;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=Object(l.a)(this,(t=Object(s.a)(n)).call.apply(t,[this].concat(o)))).filterTodos=function(t,n){return"all"===n?t:"completed"===n?t.filter((function(t){return t.checked})):t.filter((function(t){return!t.checked}))},e}return Object(d.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=window.localStorage.getItem("todos");t&&(t=JSON.parse(t)),this.props.setTodos(t||[])}},{key:"componentDidUpdate",value:function(t,n,e){JSON.stringify(t.todos)!==JSON.stringify(this.props.todos)&&window.localStorage.setItem("todos",JSON.stringify(this.props.todos))}},{key:"render",value:function(){return o.a.createElement(Z,{className:"App",id:"todo"},o.a.createElement(Y,null),o.a.createElement("div",{className:"todo-list todo-list-add"},o.a.createElement(D,null,"To-do's"),o.a.createElement(L,null),o.a.createElement(W,null),o.a.createElement($,null)),o.a.createElement(_,{title:"TodoList",todos:this.filterTodos(this.props.todos,this.props.activeFilter)}))}}]),n}(r.Component),nt=Object(f.b)((function(t){return{activeFilter:t.filter,todos:t.todos}}),(function(t){return{setTodos:function(n){t(function(t){return{type:h,todos:t}}(n))}}}))(tt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var et=e(18),rt=e(28);function ot(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function at(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?ot(Object(e),!0).forEach((function(n){Object(rt.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ot(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}q.a.configure();var it=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{filter:"all",todos:[]},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b:return at({},t,{filter:n.activeFilter});case h:return at({},t,{todos:n.todos});case m:return at({},t,{todos:t.todos.concat([n.todo])});case O:return at({},t,{todos:t.todos.filter((function(t){return t.id!==n.id}))});case g:return at({},t,{todos:[]});case v:return at({},t,{todos:t.todos.map((function(t){if(n.id===t.id){var e=at({},t);return e.checked=!e.checked,e}return t}))});case j:return Object(q.a)(n.value,{autoClose:2e3}),at({},t);default:return t}},ct=Object(et.b)(it);i.a.render(o.a.createElement((function(t){return o.a.createElement(f.a,{store:ct},o.a.createElement(nt,null)," ")}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.12ad1603.chunk.js.map