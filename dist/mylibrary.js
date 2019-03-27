!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("mylibrary",[],r):"object"==typeof exports?exports.mylibrary=r():e.mylibrary=r()}("undefined"!=typeof self?self:this,function(){return function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return{}.hasOwnProperty.call(e,r)},n.p="",n(n.s=2)}([function(e,r,n){e.exports=n(1)},function(e,r,n){"undefined"!=typeof self&&self,e.exports=function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return{}.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r,n){"use strict";n.r(r);var t={ELEMENT:"element",TEXT:"text",COMPONENT:"component",FRAGMENT:"fragment"};function o(e,r){for(var n=[],t=0;t<e.length;t++){var o=e[t].render(r);if(o)if(Array.isArray(o))for(var i=0;i<o.length;i++){var f=o[i];f&&n.push(f)}else n.push(o)}return n}var i=function(){function e(e,r,n){this.type=t.ELEMENT,this.name=void 0,this.props=void 0,this.children=void 0,this.onRender=void 0,this.name=e,this.props=r,this.children=n;var o=r.onRender;"function"==typeof o&&(this.onRender=o,delete r.onRender)}var r=e.prototype;return r.render=function(e){var r=e(this);return this.onRender&&this.onRender(r),r},r.renderChildren=function(e){return o(this.children,e)},e}(),f=function(){function e(e){this.type=t.FRAGMENT,this.children=void 0,this.children=e}return e.prototype.render=function(e){return this.children.map(e)},e}(),u=function(){function e(e){this.type=t.TEXT,this.text=void 0,this.text=e}return e.prototype.render=function(e){return e(this)},e}(),p=function(){function e(e,r,n){this.type=t.COMPONENT,this.component=void 0,this.props=void 0,this.children=void 0,this.component=e,this.props=r,this.children=n}var r=e.prototype;return r.renderComponent=function(e){var r=function(e){var r=c(Array.isArray(e)?e:[e]);return 1===r.length?r[0]:r.length>1?new f(r):void 0}(this.component(this.props,this.children));if(r)return r.render(e)},r.render=function(e){return e(this)},r.renderChildren=function(e){return o(this.children,e)},e}();function c(e){for(var r=[],n=0;n<e.length;n++){var o=e[n];if(o)if("string"==typeof o)r.push(new u(o));else if(Array.isArray(o))for(var i=0,f=c(o);i<f.length;i++)r.push(f[i]);else{if(!o||o.type!==t.ELEMENT&&o.type!==t.TEXT&&o.type!==t.COMPONENT)throw new TypeError("Unrecognized node type: "+typeof o);r.push(o)}}return r}var a,l=function(e,r){for(var n=arguments.length,t=new Array(n>2?n-2:0),o=2;o<n;o++)t[o-2]=arguments[o];if(r=r||{},t=c(t),"string"==typeof e)return new i(e,r,t);if("function"==typeof e)return new p(e,r,t);throw new TypeError("Expected jsx element to be a string or a function")},d=function(e,r){if(e&&Object.keys(e).length)throw new Error("Do not pass props to Fragment");return r},s="0123456789abcdef",h={HTML:"html",IFRAME:"iframe",SCRIPT:"script",NODE:"node",DEFAULT:"default"},E={ID:"id",INNER_HTML:"innerHTML",EL:"el"},y=((a={})[h.IFRAME]=function(e,r){var n=r.children[0];if(1!==r.children.length||!n||n.type!==t.ELEMENT||n.name!==h.HTML)throw new Error("Expected only single html element node as child of "+h.IFRAME+" element");e.addEventListener("load",function(){var r=e.contentWindow;if(!r)throw new Error("Expected frame to have contentWindow");for(var t=r.document,o=t.documentElement;o.children&&o.children.length;)o.removeChild(o.children[0]);for(var i=n.render(T({doc:t}));i.children.length;)o.appendChild(i.children[0])})},a[h.SCRIPT]=function(e,r){var n=r.children[0];if(1!==r.children.length||!n||n.type!==t.TEXT)throw new Error("Expected only single text node as child of "+h.SCRIPT+" element");e.text=n.text},a[h.DEFAULT]=function(e,r,n){for(var t=0,o=r.renderChildren(n);t<o.length;t++)e.appendChild(o[t])},a);function T(e){void 0===e&&(e={});var r=e.doc,n=void 0===r?document:r;return function e(r){if(r.type===t.COMPONENT)return r.renderComponent(e);if(r.type===t.TEXT)return function(e,r){return e.createTextNode(r.text)}(n,r);if(r.type===t.ELEMENT){var o=function(e,r){return r.props[E.EL]?r.props[E.EL]:e.createElement(r.name)}(n,r);return function(e,r){for(var n=r.props,t=0,o=Object.keys(n);t<o.length;t++){var i=o[t],f=n[i];if(null!=f&&i!==E.EL&&i!==E.INNER_HTML)if(i.match(/^on[A-Z][a-z]/)&&"function"==typeof f)e.addEventListener(i.slice(2).toLowerCase(),f);else if("string"==typeof f||"number"==typeof f)e.setAttribute(i,f.toString());else{if("boolean"!=typeof f)throw new TypeError("Can not render prop "+i+" of type "+typeof f);!0===f&&e.setAttribute(i,"")}}e.tagName.toLowerCase()!==h.IFRAME||n.id||e.setAttribute(E.ID,"jsx-iframe-"+"xxxxxxxxxx".replace(/./g,function(){return s.charAt(Math.floor(Math.random()*s.length))}))}(o,r),function(e,r,n,t){if(r.props.hasOwnProperty(E.INNER_HTML)){if(r.children.length)throw new Error("Expected no children to be passed when "+E.INNER_HTML+" prop is set");var o=r.props[E.INNER_HTML];if("string"!=typeof o)throw new TypeError(E.INNER_HTML+" prop must be string");r.name===h.SCRIPT?e.text=o:(e.innerHTML=o,function(e,r){void 0===r&&(r=window.document);for(var n=0,t=e.querySelectorAll("script");n<t.length;n++){var o=t[n],i=o.parentNode;if(i){var f=r.createElement("script");f.text=o.textContent,i.replaceChild(f,o)}}}(e,n))}else(y[r.name]||y[h.DEFAULT])(e,r,t)}(o,r,n,e),o}throw new TypeError("Unhandleable node")}}function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function v(e){var r=(void 0===e?{}:e).React;if(!r)throw new Error("Must pass React library to react renderer");return function e(n){if(n.type===t.COMPONENT)return r.createElement.apply(r,[function(){return n.renderComponent(e)||null},n.props].concat(n.renderChildren(e)));if(n.type===t.ELEMENT)return r.createElement.apply(r,[n.name,(o=n.props,i=o.innerHTML,m({dangerouslySetInnerHTML:i?{__html:i}:null},function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r.indexOf(n=i[t])>=0||(o[n]=e[n]);return o}(o,["innerHTML"])))].concat(n.renderChildren(e)));var o,i;if(n.type===t.TEXT)return n.text;throw new TypeError("Unhandleable node")}}var N={INNER_HTML:"innerHTML"},g={br:!0};function x(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/\//g,"&#x2F;")}function M(){return function e(r){if(r.type===t.COMPONENT)return[].concat(r.renderComponent(e)).join("");if(r.type===t.ELEMENT){var n=(i=r.props,(f=Object.keys(i).filter(function(e){var r=i[e];return e!==N.INNER_HTML&&!!r&&("string"==typeof r||"number"==typeof r||!0===r)})).length?" "+f.map(function(e){var r=i[e];if(!0===r)return""+x(e);if("string"!=typeof r&&"number"!=typeof r)throw new TypeError("Unexpected prop type: "+typeof r);return x(e)+'="'+x(r.toString())+'"'}).join(" "):"");if(g[r.name])return"<"+r.name+n+" />";var o="string"==typeof r.props[N.INNER_HTML]?r.props[N.INNER_HTML]:r.renderChildren(e).join("");return"<"+r.name+n+">"+o+"</"+r.name+">"}var i,f;if(r.type===t.TEXT)return x(r.text);throw new TypeError("Unhandleable node: "+r.type)}}n.d(r,"ElementNode",function(){return i}),n.d(r,"FragmentNode",function(){return f}),n.d(r,"TextNode",function(){return u}),n.d(r,"ComponentNode",function(){return p}),n.d(r,"node",function(){return l}),n.d(r,"Fragment",function(){return d}),n.d(r,"dom",function(){return T}),n.d(r,"react",function(){return v}),n.d(r,"html",function(){return M}),n.d(r,"NODE_TYPE",function(){return t})}])},function(e,r,n){"use strict";n.r(r);var t,o=n(0),i="0123456789abcdef",f={HTML:"html",IFRAME:"iframe",SCRIPT:"script",NODE:"node",DEFAULT:"default"},u={ID:"id",INNER_HTML:"innerHTML",EL:"el"},p=((t={})[f.IFRAME]=function(e,r){var n=r.children[0];if(1!==r.children.length||!n||n.type!==o.NODE_TYPE.ELEMENT||n.name!==f.HTML)throw new Error("Expected only single html element node as child of "+f.IFRAME+" element");e.addEventListener("load",function(){var r=e.contentWindow;if(!r)throw new Error("Expected frame to have contentWindow");for(var t=r.document,o=t.documentElement;o.children&&o.children.length;)o.removeChild(o.children[0]);for(var i=n.render(c({doc:t}));i.children.length;)o.appendChild(i.children[0])})},t[f.SCRIPT]=function(e,r){var n=r.children[0];if(1!==r.children.length||!n||n.type!==o.NODE_TYPE.TEXT)throw new Error("Expected only single text node as child of "+f.SCRIPT+" element");e.text=n.text},t[f.DEFAULT]=function(e,r,n){for(var t=0,o=r.renderChildren(n);t<o.length;t++)e.appendChild(o[t])},t);function c(e){void 0===e&&(e={});var r=e.doc,n=void 0===r?document:r;return function e(r){if(r.type===o.NODE_TYPE.COMPONENT)return r.renderComponent(e);if(r.type===o.NODE_TYPE.TEXT)return function(e,r){return e.createTextNode(r.text)}(n,r);if(r.type===o.NODE_TYPE.ELEMENT){var t=function(e,r){return r.props[u.EL]?r.props[u.EL]:e.createElement(r.name)}(n,r);return function(e,r){for(var n=r.props,t=0,o=Object.keys(n);t<o.length;t++){var p=o[t],c=n[p];if(null!=c&&p!==u.EL&&p!==u.INNER_HTML)if(p.match(/^on[A-Z][a-z]/)&&"function"==typeof c)e.addEventListener(p.slice(2).toLowerCase(),c);else if("string"==typeof c||"number"==typeof c)e.setAttribute("className"===p?"class":p,c.toString());else{if("boolean"!=typeof c)throw new TypeError("Can not render prop "+p+" of type "+typeof c);!0===c&&e.setAttribute(p,"")}}e.tagName.toLowerCase()!==f.IFRAME||n.id||e.setAttribute(u.ID,"jsx-iframe-"+"xxxxxxxxxx".replace(/./g,function(){return i.charAt(Math.floor(Math.random()*i.length))}))}(t,r),function(e,r,n,t){if(r.props.hasOwnProperty(u.INNER_HTML)){if(r.children.length)throw new Error("Expected no children to be passed when "+u.INNER_HTML+" prop is set");var o=r.props[u.INNER_HTML];if("string"!=typeof o)throw new TypeError(u.INNER_HTML+" prop must be string");r.name===f.SCRIPT?e.text=o:(e.innerHTML=o,function(e,r){void 0===r&&(r=window.document);for(var n=0,t=e.querySelectorAll("script");n<t.length;n++){var o=t[n],i=o.parentNode;if(i){var f=r.createElement("script");f.text=o.textContent,i.replaceChild(f,o)}}}(e,n))}else(p[r.name]||p[f.DEFAULT])(e,r,t)}(t,r,n,e),t}throw new TypeError("Unhandleable node")}}var a={INNER_HTML:"innerHTML"},l={br:!0};function d(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/\//g,"&#x2F;")}function s(){return function e(r){if(r.type===o.NODE_TYPE.COMPONENT)return[].concat(r.renderComponent(e)).join("");if(r.type===o.NODE_TYPE.ELEMENT){var n=(i=r.props,(f=Object.keys(i).filter(function(e){var r=i[e];return e!==a.INNER_HTML&&!!r&&("string"==typeof r||"number"==typeof r||!0===r)})).length?" "+f.map(function(e){var r=i[e];if(!0===r)return""+d(e);if("string"!=typeof r&&"number"!=typeof r)throw new TypeError("Unexpected prop type: "+typeof r);return d("className"===e?"class":e)+'="'+d(r.toString())+'"'}).join(" "):"");if(l[r.name])return"<"+r.name+n+" />";var t="string"==typeof r.props[a.INNER_HTML]?r.props[a.INNER_HTML]:r.renderChildren(e).join("");return"<"+r.name+n+">"+t+"</"+r.name+">"}var i,f;if(r.type===o.NODE_TYPE.TEXT)return d(r.text);throw new TypeError("Unhandleable node: "+r.type)}}n.d(r,"dom",function(){return c}),n.d(r,"html",function(){return s}),n.d(r,"TYPES",function(){return!0})}])});
//# sourceMappingURL=mylibrary.js.map