!function(){"use strict";var t={6705:function(t,e,n){var o=n(2667),r=(n(2004),n(8407),n(5101),n(6394),n(3080),n(2322),n(4669),n(9268),n(3233),n(5466)),i=n(3074),a=n.n(i),l=n(4426),s=n(2259),u=n(612),c=n(5464),f=n(3085),h=n(1397),p=n(9688);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(s,t);var e,n,o,i,a=(o=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(o);if(i){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return b(this,t)});function s(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),a.call(this,t,"author-about")}return e=s,(n=[{key:"pageContent",value:function(){var t=null,e=[],n=[];if(this.state.author){var o;if(void 0!==this.state.author.description&&this.state.author.description&&""!==this.state.author.description&&(t=this.state.author.description),void 0!==this.state.author.location_info&&this.state.author.location_info.length){var i=[];for(o=0;o<this.state.author.location_info.length;)void 0!==this.state.author.location_info[o].title&&void 0!==this.state.author.location_info[o].url&&i.push(r.createElement("a",{key:o,href:(0,p.U)(this.state.author.location_info[o].url,l.Z.get("config-site").url),title:this.state.author.location_info[o].title},this.state.author.location_info[o].title)),o+=1;e.push(r.createElement("li",{key:"location"},r.createElement("span",null,"Location:"),r.createElement("span",null,i)))}else void 0!==this.state.author.location&&this.state.author.location&&""!==this.state.author.location&&e.push(r.createElement("li",{key:"location"},r.createElement("span",null,"Location:"),r.createElement("span",null,this.state.author.location)));if(void 0!==this.state.author.home_page&&this.state.author.home_page&&""!==this.state.author.home_page&&e.push(r.createElement("li",{key:"website"},r.createElement("span",null,"Website:"),r.createElement("span",null,this.state.author.home_page.trim()))),void 0!==this.state.author.social_media_links&&this.state.author.social_media_links&&""!==this.state.author.social_media_links){var a=this.state.author.social_media_links.split(",");if(a.length){for(o=0;o<a.length;)n.push(r.createElement("span",{key:o},a[o].trim())),o+=1;e.push(r.createElement("li",{key:"social_media"},r.createElement("span",null,"Social media:"),r.createElement("span",{className:"author-social-media"},n)))}}}return[this.state.author?r.createElement(u.Z,{key:"ProfilePagesHeader",author:this.state.author,type:"about"}):null,this.state.author?r.createElement(c.Z,{key:"ProfilePagesContent"},null===t&&0<e.length?null:l.Z.get("config-options").pages.profile.htmlInDescription?r.createElement("div",{className:"media-list-wrapper profile-about-content items-list-ver"},r.createElement(f.G,{title:this.props.title},r.createElement("span",{dangerouslySetInnerHTML:{__html:t||null}}))):r.createElement(h._,{className:"profile-about-content items-list-ver",title:this.props.title},t),e.length?r.createElement(h._,{className:"profile-about-content items-list-ver",title:"Details"},r.createElement("ul",{className:"profile-details"},e)):null):null]}}])&&y(e.prototype,n),s}(s.G);g.propTypes={title:a().string.isRequired},g.defaultProps={title:"Biography"},(0,o.X)("page-profile-about",g)}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.j=797,function(){var t={797:0},e=[[6705,431]],o=function(){};function r(){for(var o,r=0;r<e.length;r++){for(var i=e[r],a=!0,l=1;l<i.length;l++){var s=i[l];0!==t[s]&&(a=!1)}a&&(e.splice(r--,1),o=n(n.s=i[0]))}return 0===e.length&&(n.x(),n.x=function(){}),o}n.x=function(){n.x=function(){},a=a.slice();for(var t=0;t<a.length;t++)i(a[t]);return(o=r)()};var i=function(r){for(var i,a,s=r[0],u=r[1],c=r[2],f=r[3],h=0,p=[];h<s.length;h++)a=s[h],n.o(t,a)&&t[a]&&p.push(t[a][0]),t[a]=0;for(i in u)n.o(u,i)&&(n.m[i]=u[i]);for(c&&c(n),l(r);p.length;)p.shift()();return f&&e.push.apply(e,f),o()},a=self.webpackChunk_mediacms_frontend=self.webpackChunk_mediacms_frontend||[],l=a.push.bind(a);a.push=i}(),n.x()}();