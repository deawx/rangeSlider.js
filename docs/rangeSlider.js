!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){void 0===t&&(t={}),this.events=t}return t.prototype.on=function(t,e){var n=this,r=this.events[t];return r?r.push(e):this.events[t]=[e],function(){n.events[t]=n.events[t].filter((function(t){return e!==t}))}},t.prototype.emit=function(t,e){var n=this.events[t];n&&n.forEach((function(t){return t(e)}))},t}();e.default=r},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(5)),a=i(n(6)),s=n(7),l=function(){function t(t,e,n){this.anchor=t,this.settingsVisualModel=e,this.settingsModel=n,this.initMVC(e,n)}return t.prototype.initMVC=function(t,e){this.model=new o.default,this.visualModel=new a.default,this.visualModel.setState(t),this.model.setState(e),this.app=(new s.ApplicationConfigurator).main(this.visualModel.state,this.anchor),this.app.createUI(this.visualModel.state),this.bindEvents(),this.app.init(this.visualModel.state)},t.prototype.bindEvents=function(){var t=this;this.app.on("finishInit",(function(e){return t.arrangeHandlers(e)})),this.model.on("pxValueDone",(function(e){return t.app.paint(e)})),this.app.on("onUserMove",(function(e){return t.model.setState(e)})),this.app.settings&&this.app.settings.on("newSettings",(function(e){t.model.setState(e),t.arrangeHandlers(e)})),this.model.on("pxValueDone",(function(){return t.app.settings&&t.app.settings.paint(r(r({},t.model.state),t.visualModel.state))})),this.app.settings&&this.app.settings.on("reCreateApp",(function(e){return t.reCreateApplication(e)})),this.model.on("pxValueDone",(function(){return t.anchor.dispatchEvent(new CustomEvent("onChange",{detail:t.model.state}))}))},t.prototype.arrangeHandlers=function(t){for(var e=t.edge,n=t.handlers,r=0;r<n.length;r+=1)this.model.setState({edge:e,tempTarget:n[r],tempValue:this.model.state.values[r]})},t.prototype.reCreateApplication=function(t){var e=Object.assign(this.settingsVisualModel,t),n=this.saveOldModel(this.settingsModel,this.model.state);this.app.removeHTML(),this.initMVC(e,n)},t.prototype.saveOldModel=function(t,e){for(var n in t)t[n]=e[n];return t},t}();e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(3),n(16)},function(t,e,n){"use strict";n.r(e),function(t){var e=n(1),r=n.n(e);!function(t){const e={init:function(e={},n={}){if(t(this).data("rangeSlider"))return;const i=t.extend({direction:"horizontal",skin:"green",bar:!0,tip:!0,type:"single",scale:!1,settings:!1},e),o=t.extend({min:10,max:50,values:[20,40],step:2},n);return this.each((function(){t.data(this,{rangeSlider:new r.a(this,i,o)}),t(this).data().startingVisualModel=i,t(this).data().startingModel=o}))},updateValues:function(e){const n=t(this).data("rangeSlider");n.model.setState(e),n.reCreateApplication(n.visualModel.state)},updateVisual:function(e){const n=t(this).data("rangeSlider");n.reCreateApplication(Object.assign(n.visualModel.state,e))},reset:function(){const e=t(this).data("rangeSlider");e.model.setState(t(this).data().startingModel),e.reCreateApplication(t(this).data().startingVisualModel)},destroy:function(){t(this).data("rangeSlider").app.removeHTML(),t(this).off("onChange")},onChange:function(e){t(this).on("onChange",e)}};t.fn.rangeSlider=function(t){if(e[t])return e[t].apply(this,Array.prototype.slice.call(arguments,1));"object"==typeof t&&e.init.apply(this,arguments)}}(t)}.call(this,n(4))},function(t,e){t.exports=$},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(e){void 0===e&&(e={});var n=t.call(this)||this;return n.state={},n.mapOfHandlers=new Map,n.setState(e),n}return i(e,t),e.prototype.setState=function(t){void 0===t&&(t={}),Object.assign(this.state,t),(t.min||t.max||t.step||t.values)&&(this.correctMinMaxRange(),this.correctStep(),this.correctValues()),t.tempTarget&&t.edge&&t.tempValue&&this.initialCounting(t),t.tempTarget&&t.left&&this.dynamicCounting(t)},e.prototype.initialCounting=function(t){this.state.tempPxValue=this.countPxValueFromValue(t.tempValue),this.createArrayOfPxValues(this.state.values),this.mapOfHandlers.set(t.tempTarget,{tempValue:t.tempValue,tempPxValue:this.state.tempPxValue})},e.prototype.dynamicCounting=function(t){this.state.tempValue=this.countValueFromLeft(t.left),this.state.tempPxValue=this.countPxValueFromValue(this.state.tempValue),this.mapOfHandlers.set(t.tempTarget,{tempValue:this.state.tempValue,tempPxValue:this.state.tempPxValue}),this.updateArrayOfValues(),this.createArrayOfPxValues(this.state.values)},e.prototype.correctValues=function(){var t=this;this.state.values=this.state.values.map((function(e){return t.correctValueInTheRange(e)})).sort((function(t,e){return t-e}))},e.prototype.updateArrayOfValues=function(){this.state.values=[];for(var t=0,e=Array.from(this.mapOfHandlers.values());t<e.length;t++){var n=e[t];this.state.values.push(n.tempValue)}this.state.values.sort((function(t,e){return t-e})),1===this.mapOfHandlers.size&&(this.state.values[1]=this.state.max)},e.prototype.createArrayOfPxValues=function(t){var e=this,n=t.map((function(t){return e.countPxValueFromValue(t)})).sort((function(t,e){return t-e}));this.emit("pxValueDone",{tempPxValues:n,values:this.state.values,tempTarget:this.state.tempTarget,tempValue:this.state.tempValue,tempPxValue:this.state.tempPxValue,edge:this.state.edge,ratio:this.getRatio()})},e.prototype.countValueFromLeft=function(t){var e=this.state,n=Math.round(t/this.getRatio())*e.step+e.min;return this.correctValueInTheRange(n)},e.prototype.countPxValueFromValue=function(t){var e=this.state;return(t-e.min)*(this.getRatio()/e.step)},e.prototype.correctMinMaxRange=function(){if(this.state.min>this.state.max){var t=this.state.min;this.state.min=this.state.max,this.state.max=t}},e.prototype.correctStep=function(){this.state.step<1&&(this.state.step=1),this.state.step>this.state.max&&(this.state.step=this.state.max)},e.prototype.correctValueInTheRange=function(t){return t<this.state.min?+this.state.min:t>this.state.max?+this.state.max:t},e.prototype.getRatio=function(){var t=this.state;return+t.edge/(t.max-t.min)*t.step},e}(o(n(0)).default);e.default=a},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(e){void 0===e&&(e={});var n=t.call(this)||this;return n.state=e,n}return i(e,t),e.prototype.setState=function(t){void 0===t&&(t={}),this.correctState(t),Object.assign(this.state,t),this.emit("newVisualModel",this.state)},e.prototype.correctState=function(t){t.bar=JSON.parse(t.bar),t.scale=JSON.parse(t.scale),t.settings=JSON.parse(t.settings),t.tip=JSON.parse(t.tip)},e}(o(n(0)).default);e.default=a},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(8),s=o(n(0)),l=n(15),u=function(t){function e(e,n){var r=t.call(this)||this;return r.factory=e,r.anchor=n,r}return i(e,t),e.prototype.createUI=function(t){var e=t.bar,n=t.scale,r=t.settings;this.template=this.factory.createTemplate(),this.handler=this.factory.createHandler(),e&&(this.bar=this.factory.createBar()),n&&(this.scale=this.factory.createScale()),r&&(this.settings=this.factory.createSettings())},e.prototype.init=function(t){this.template.init(t,this.anchor);for(var e=0,n=Object.keys(this);e<n.length;e++){var r=n[e];"factory"!==r&&"template"!==r&&"events"!==r&&"anchor"!==r&&this.template.append(this[r],this.anchor)}t.tip&&(this.tip=this.factory.createTip(),this.handler.append(this.tip));var i=this.getEdge(t),o=this.anchor.querySelectorAll(".slider__handler"),a=this.anchor.querySelector(".wrapper-slider");this.listenUserEvents(a,t),this.emit("finishInit",{handlers:o,edge:i})},e.prototype.paint=function(t){for(var e=0,n=Object.keys(this);e<n.length;e++){var r=n[e];"factory"!==r&&"template"!==r&&"events"!==r&&"anchor"!==r&&"settings"!==r&&this[r].paint(t)}},e.prototype.removeHTML=function(){this.anchor.removeChild(this.settings.settingsHTML),this.anchor.removeChild(this.template.templateHTML)},e.prototype.getEdge=function(t){var e=this.anchor.querySelector(".wrapper-slider"),n=this.anchor.querySelectorAll(".slider__handler");return t.direction===l.constants.DIRECTION_VERTICAL?e.clientHeight-n[0].offsetHeight:e.offsetWidth-n[0].offsetWidth},e.prototype.listenUserEvents=function(t,e){var n=this;t.addEventListener("mousedown",(function(r){if(r.preventDefault(),"slider__handler"===r.target.className){var i=r.target,o=r.offsetX,a=i.offsetHeight-r.offsetY,s=function(n){var r;r=e.direction===l.constants.DIRECTION_VERTICAL?t.offsetHeight-n.clientY-a+t.getBoundingClientRect().top:n.clientX-o-t.offsetLeft;this.emit("onUserMove",{left:r,tempTarget:i})}.bind(n),u=function(){document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",u)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",u)}}))},e}(s.default);e.Application=u;var c=function(){function t(){}return t.prototype.main=function(t,e){var n,r=t.type,i=t.direction;if(r===l.constants.TYPE_SINGLE&&i===l.constants.DIRECTION_HORIZONTAL)n=new a.SingleHorizontalFactory;else if(r===l.constants.TYPE_SINGLE&&i===l.constants.DIRECTION_VERTICAL)n=new a.SingleVerticalFactory;else if(r===l.constants.TYPE_INTERVAL&&i===l.constants.DIRECTION_HORIZONTAL)n=new a.IntervalHorizontalFactory;else{if(r!==l.constants.TYPE_INTERVAL||i!==l.constants.DIRECTION_VERTICAL)throw new Error("Error! Unknown "+r+" or "+i);n=new a.IntervalVerticalFactory}return new u(n,e)},t}();e.ApplicationConfigurator=c},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=o(n(9)),s=o(n(10)),l=n(11),u=n(12),c=n(13),p=n(14),f=function(){function t(){}return t.prototype.createTemplate=function(){return new a.default},t.prototype.createSettings=function(){return new s.default},t}(),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.createBar=function(){return new u.SingleHorizontalBar},e.prototype.createHandler=function(){return new c.SingleHorizontalHandler},e.prototype.createTip=function(){return new l.SingleTip},e.prototype.createScale=function(){return new p.HorizontalScale},e}(f);e.SingleHorizontalFactory=d;var h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.createBar=function(){return new u.SingleVerticalBar},e.prototype.createHandler=function(){return new c.SingleVerticalHandler},e.prototype.createTip=function(){return new l.SingleTip},e.prototype.createScale=function(){return new p.VerticalScale},e}(f);e.SingleVerticalFactory=h;var v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.createBar=function(){return new u.IntervalHorizontalBar},e.prototype.createHandler=function(){return new c.IntervalHorizontalHandler},e.prototype.createTip=function(){return new l.IntervalTip},e.prototype.createScale=function(){return new p.HorizontalScale},e}(f);e.IntervalHorizontalFactory=v;var _=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.createBar=function(){return new u.IntervalVerticalBar},e.prototype.createHandler=function(){return new c.IntervalVerticalHandler},e.prototype.createTip=function(){return new l.IntervalTip},e.prototype.createScale=function(){return new p.VerticalScale},e}(f);e.IntervalVerticalFactory=_},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.prototype.init=function(t,e){var n=t.skin,r=t.direction,i='\n      <div class="wrapper-slider wrapper-slider--'+r+'">\n        <div class="slider slider--'+r+" slider--"+n+'"></div>\n      </div>\n    ';e.insertAdjacentHTML("afterbegin",i),this.templateHTML=e.querySelector(".wrapper-slider")},t.prototype.append=function(t,e){t.init(e)},t}();e.default=r},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.init=function(t){this.anchor=t;t.insertAdjacentHTML("beforeend",'<div class="settings">\n                                <label class="settings__label"><input id="min" class="settings__input" type="number">\n                                  <b class="settings__option">min</b>\n                                </label>\n                                <label class="settings__label"><input id="max" class="settings__input" type="number">\n                                  <b class="settings__option">max</b>\n                                </label>\n                                <label class="settings__label"><input id="step" class="settings__input" type="number">\n                                  <b class="settings__option">step</b>\n                                </label>\n                                <label class="settings__label"><input id="valueFrom" class="settings__input" type="number">\n                                  <b class="settings__option">valueFrom</b>\n                                </label>\n                                <label class="settings__label"><input id="valueTo" class="settings__input" type="number">\n                                  <b class="settings__option">valueTo</b>\n                                </label>\n                                <div class="settings__separation"></div>\n                                <label class="settings__label">\n                                  <select id="skin">\n                                    <option>green</option>\n                                    <option>red</option>\n                                  </select>\n                                  <b class="settings__option">skin</b>\n                                </label>\n                                <label class="settings__label">\n                                  <select id="direction">\n                                    <option>horizontal</option>\n                                    <option>vertical</option>\n                                  </select>\n                                  <b class="settings__option">direction</b>\n                                </label>\n                                <label class="settings__label">\n                                  <select id="type">\n                                    <option>single</option>\n                                    <option>interval</option>\n                                  </select>\n                                  <b class="settings__option">type</b>\n                                </label>\n                                <label class="settings__label">\n                                  <select id="scale">\n                                    <option>true</option>\n                                    <option>false</option>\n                                  </select>\n                                  <b class="settings__option">scale</b>\n                                </label>\n                                <label class="settings__label">\n                                  <select id="bar">\n                                    <option>true</option>\n                                    <option>false</option>\n                                  </select>\n                                  <b class="settings__option">bar</b>\n                                </label>\n                                <label class="settings__label">\n                                  <select id="tip">\n                                    <option>true</option>\n                                    <option>false</option>\n                                  </select>\n                                  <b class="settings__option">tip</b>\n                                </label>\n                              </div>\n                            '),this.settingsHTML=t.querySelector(".settings"),this.startListenEvents()},e.prototype.paint=function(t){this.state=t;var e=this.settingsHTML.querySelectorAll("input"),n=t.values,r=n[0],i=n[1];Object.assign(t,{valueFrom:r,valueTo:i});for(var o=0,a=e;o<a.length;o++){var s=a[o];s.value=t[s.id]}for(var l=0,u=this.settingsHTML.querySelectorAll("select");l<u.length;l++){var c=u[l];c.value=t[c.id]}},e.prototype.startListenEvents=function(){var t=this;this.settingsHTML.addEventListener("change",(function(e){var n,r,i=e.target;if("INPUT"===i.tagName){var o=t.anchor.querySelectorAll(".slider__handler");if("valueFrom"===i.id||"valueTo"===i.id){var a=t.settingsHTML.querySelector("#valueFrom").value,s=t.settingsHTML.querySelector("#valueTo").value;t.emit("newSettings",{handlers:o,edge:t.state.edge,values:[a,s]})}else t.emit("newSettings",((n={handlers:o,edge:t.state.edge})[i.id]=Number(i.value),n))}else"SELECT"===i.tagName&&t.emit("reCreateApp",((r={})[i.id]=i.value,r))}))},e}(o(n(0)).default);e.default=a},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.prototype.init=function(t){t.insertAdjacentHTML("beforeend",'<div class="slider__tip"><div class="slider__tongue"></div></div>')},t}();e.Tip=o;var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.paint=function(t){var e=t.tempTarget,n=t.tempValue;t.tempPxValues;e.querySelector(".slider__tip").setAttribute("data-value",""+n)},e}(o);e.SingleTip=a;var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.paint=function(t){var e=t.tempTarget,n=t.tempValue,r=t.tempPxValues,i=t.values,o=e.querySelector(".slider__tip");o.setAttribute("data-value",""+n);var a=e.parentElement&&e.parentElement.querySelectorAll(".slider__tip"),s=a&&Array.from(a).find((function(t){return t!==o}));s&&(r[1]-r[0]<=s.offsetWidth?(o.style.display="none",s.classList.add("slider__tip--extended"),s.setAttribute("data-extendedValue",""+(i&&i.join(" - ")))):(o.style.display="inline-block",s.style.display="inline-block",s.classList.remove("slider__tip--extended"),o.classList.remove("slider__tip--extended")))},e}(o);e.IntervalTip=s},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.prototype.init=function(t){t.querySelector(".slider").insertAdjacentHTML("beforeend",'<div class="slider__bar"></div>')},t}();e.Bar=o;var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.paint=function(t){var e=t.tempPxValue,n=t.tempTarget,r=n.parentElement&&n.parentElement.querySelector(".slider__bar");r&&(r.style.width=e+10+"px")},e}(o);e.SingleHorizontalBar=a;var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.paint=function(t){var e=t.tempPxValue,n=t.tempTarget,r=n.parentElement&&n.parentElement.querySelector(".slider__bar");r&&(r.style.height=e+10+"px")},e}(o);e.SingleVerticalBar=s;var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.paint=function(t){var e=t.tempPxValues,n=t.tempTarget,r=n.parentElement&&n.parentElement.querySelector(".slider__bar");r&&(r.style.left=e[0]+"px"),r&&(r.style.width=e[1]-e[0]+10+"px")},e}(o);e.IntervalHorizontalBar=l;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.paint=function(t){var e=t.tempPxValues,n=t.tempTarget,r=n.parentElement&&n.parentElement.querySelector(".slider__bar");r&&(r.style.bottom=e[0]+"px"),r&&(r.style.height=e[1]-e[0]+10+"px")},e}(o);e.IntervalVerticalBar=u},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.prototype.init=function(t){this.anchor=t;t.querySelector(".slider").insertAdjacentHTML("beforeend",'<div class="slider__handler"></div>')},t.prototype.append=function(t){for(var e=this.anchor.querySelectorAll(".slider__handler"),n=0,r=Array.from(e);n<r.length;n++){var i=r[n];t.init(i)}},t}();e.Handler=o;var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.paint=function(t){var e=t.tempTarget,n=t.tempPxValue;e.style.left=n+"px"},e}(o);e.SingleHorizontalHandler=a;var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.paint=function(t){var e=t.tempTarget,n=t.tempPxValue;e.style.bottom=n+"px"},e}(o);e.SingleVerticalHandler=s;var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.init=function(t){this.anchor=t;var e=t.querySelector(".slider");e.insertAdjacentHTML("beforeend",'<div class="slider__handler"></div>'),e.insertAdjacentHTML("beforeend",'<div class="slider__handler"></div>')},e.prototype.paint=function(t){var e=t.tempTarget,n=t.tempPxValue;e.style.left=n+"px"},e}(o);e.IntervalHorizontalHandler=l;var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.init=function(t){this.anchor=t;var e=t.querySelector(".slider");e.insertAdjacentHTML("beforeend",'<div class="slider__handler"></div>'),e.insertAdjacentHTML("beforeend",'<div class="slider__handler"></div>')},e.prototype.paint=function(t){var e=t.tempTarget,n=t.tempPxValue;e.style.bottom=n+"px"},e}(o);e.IntervalVerticalHandler=u},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.init=function(t){this.anchor=t,this.slider=t.querySelector(".slider");this.slider.insertAdjacentHTML("afterbegin",'<div class="slider__scale scale"></div>')},e}(o(n(0)).default);e.Scale=a;var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.paint=function(t){var e=t.edge,n=t.ratio;this.scaleHTML=this.anchor.querySelector(".slider__scale");var r=e/n;if(this.scaleHTML.children.length!==r+1&&(this.scaleHTML.innerHTML=""),0===this.scaleHTML.children.length)for(var i=this.scaleHTML.children.length;i<r+1;i++)this.scaleHTML.insertAdjacentHTML("beforeend",'<div class="scale__dash"></div>');this.scaleHTML.style.width=e+"px";this.slider.querySelector(".slider__handler");this.scaleHTML.style.marginLeft="11px"},e}(a);e.HorizontalScale=s;var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.paint=function(t){var e=t.edge,n=t.ratio;this.scaleHTML=this.anchor.querySelector(".slider__scale");var r=e/n;if(0===this.scaleHTML.children.length)for(var i=0;i<r+1;i++)this.scaleHTML.insertAdjacentHTML("beforeend",'<div class="scale__dash"></div>');this.scaleHTML.style.height=e+"px";this.slider.querySelector(".slider__handler");this.scaleHTML.style.marginTop="11px"},e}(a);e.VerticalScale=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.constants={DIRECTION_VERTICAL:"vertical",DIRECTION_HORIZONTAL:"horizontal",TYPE_INTERVAL:"interval",TYPE_SINGLE:"single"}},function(t,e,n){var r=n(17);"string"==typeof r&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};n(18)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){},function(t,e,n){"use strict";var r,i={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function s(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function l(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(_(r.parts[a],e))}else{for(var s=[];a<r.parts.length;a++)s.push(_(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function u(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var c,p=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function f(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=p(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function d(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i&&t.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,v=0;function _(t,e){var n,r,i;if(e.singleton){var o=v++;n=h||(h=u(e)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=u(e),r=d.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=s(t,e);return l(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o],u=i[a.id];u&&(u.refs--,r.push(u))}t&&l(s(t,e),e);for(var c=0;c<r.length;c++){var p=r[c];if(0===p.refs){for(var f=0;f<p.parts.length;f++)p.parts[f]();delete i[p.id]}}}}}]);