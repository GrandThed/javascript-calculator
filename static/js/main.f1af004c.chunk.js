(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],[,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return CalcContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return CalcContextProvider}));var C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),CalcContext=Object(react__WEBPACK_IMPORTED_MODULE_6__.createContext)(),CalcContextProvider=function(_Component){Object(C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(CalcContextProvider,_Component);var _super=Object(C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(CalcContextProvider);function CalcContextProvider(e,t){var a;return Object(C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,CalcContextProvider),(a=_super.call(this,e,t)).state={restart:!1,onNumbers:!0,input:["0"],display:[]},a.add=a.add.bind(Object(C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(a)),a}return Object(C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(CalcContextProvider,[{key:"add",value:function(e){var t=this.state.onNumbers;switch(e){case"0":case".":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":if(this.state.restart)break;t?"0"!==this.state.input[0]?this.setState({input:[].concat(Object(C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.input),[e]),onNumbers:!0}):this.setState({input:[e]}):this.setState({display:[].concat(Object(C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.display),[this.state.input]),input:[e],onNumbers:!0});break;case"/":case"*":case"+":if(console.log(this.state.restart),this.state.restart)break;this.state.input===["-"]?this.setState({input:[e]}):t?this.setState({display:[].concat(Object(C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.display),[this.state.input.join("")]),input:[e],onNumbers:!1}):this.setState({input:[e]});break;case"-":if(this.state.restart)break;"-"===this.state.input[0]?this.state.input.length>1&&this.setState({display:[].concat(Object(C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.display),[this.state.input.join("").replace(/^0/,"")]),input:e}):this.setState({display:[].concat(Object(C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.display),[this.state.input.join("").replace(/^0/,"")]),input:e,onNumbers:!this.state.onNumbers});break;case"AC":this.ac();break;case"=":if(this.state.restart)break;this.equal()}}},{key:"evaluate",value:function evaluate(){var char=this.state.display,result=eval(char.join(""));return char.length>39?result.toExponential(char.length-39):result}},{key:"ac",value:function(){this.setState({display:[],input:["0"],restart:!1})}},{key:"equal",value:function(){var e=this;this.state.onNumbers&&this.setState({restart:!0,display:[].concat(Object(C_Users_Benjamin_Ca_as_Desktop_JavaScript_FreeCodeCamp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.display),[this.state.input.join("")])},(function(){try{e.setState({input:[e.evaluate()]})}catch(t){e.setState({input:[t]})}}))}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(CalcContext.Provider,{value:{state:this.state,add:this.add}},this.props.children)}}]),CalcContextProvider}(react__WEBPACK_IMPORTED_MODULE_6__.Component)},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var _=a(0),r=a.n(_),n=a(5),s=a.n(n),c=(a(15),a(16),a(2)),o=function(){return r.a.createElement(c.a.Consumer,null,(function(e){var t=e.add;return r.a.createElement("div",{className:"keyboard"},r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"clear",className:"btns-calc ac"},"AC"),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"divide",className:"btns-calc operator"},"/"),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"multiply",className:"btns-calc operator"},"*"),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"seven",className:"btns-calc number"},"7"),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"eight",className:"btns-calc number"},"8"),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"nine",className:"btns-calc number"},"9"),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"subtract",className:"btns-calc sub operator"},"-"),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"four",className:"btns-calc number"},"4"),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"five",className:"btns-calc number"},"5"),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"six",className:"btns-calc number"},"6"),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"add",className:"btns-calc add operator "},"+"),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"one",className:"btns-calc number"},"1"),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"two",className:"btns-calc number"},"2"),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"three",className:"btns-calc number"},"3"),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"equals",className:"btns-calc equal"},"="),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"zero",className:"btns-calc number zero"},"0"),r.a.createElement("button",{onClick:function(e){return t(e.target.innerHTML)},id:"decimal",className:"btns-calc number dot"},"."))}))},i=(a(17),function(){return r.a.createElement(c.a.Consumer,null,(function(e){var t=e.state.display.join(" "),a=e.state.input;return r.a.createElement("div",null,r.a.createElement("p",{className:"live"},t),r.a.createElement("p",{className:"current"},a))}))}),l=(a(18),function(){return r.a.createElement("div",{id:"repo-div"},r.a.createElement("a",{id:"repo-btn",href:"https://github.com/GrandThed/javascript-calculator",target:"_blank",rel:"noopener noreferrer"},"Go to Repo"))}),u=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l,null),r.a.createElement(c.b,null,r.a.createElement(i,null),r.a.createElement(o,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.f1af004c.chunk.js.map