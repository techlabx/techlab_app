(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"18X7":function(e,t,n){e.exports={BackgroundWhite:"#F9F9F9",Blue:"#647B98",Orange:"#EFA748",Font:"Roboto,sans-serif",container:"chatbox-module--container--YayMA",box:"chatbox-module--box--2XWXJ",boxClient:"chatbox-module--box-client--2WRES",boxServer:"chatbox-module--box-server--29ULZ",boxServerButton:"chatbox-module--box-server-button--3l9tD"}},"7h0T":function(e,t,n){var r=n("XKFU");r(r.S,"Number",{isNaN:function(e){return e!=e}})},"8jRI":function(e,t,n){"use strict";n("pIFo"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("SRfc"),n("Oyvg");var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],a(n),a(r))}function i(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(e);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var a=i(r[0]);a!==r[0]&&(n[r[0]]=a)}r=o.exec(e)}n["%C2"]="�";for(var A=Object.keys(n),s=0;s<A.length;s++){var c=A[s];e=e.replace(new RegExp(c,"g"),n[c])}return e}(e)}}},"8yz6":function(e,t,n){"use strict";n("V+eJ"),e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},J4zp:function(e,t,n){var r=n("wTVA"),o=n("m0LI"),a=n("ZhPi"),i=n("wkBT");e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()}},JeNB:function(e,t,n){e.exports={BackgroundWhite:"#F9F9F9",Blue:"#647B98",Orange:"#EFA748",Font:"Roboto,sans-serif",container:"chatcontainer-module--container--2EIQY"}},Pmem:function(e,t,n){"use strict";n("a1Th"),n("h7Nl"),n("Btvt"),n("pIFo"),e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},XpBe:function(e,t){e.exports="data:image/png;base64,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"},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},"cr+I":function(e,t,n){"use strict";n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("h7Nl"),n("0l/t"),n("Z2Ku"),n("L9s1");var r=n("J4zp");n("DNiP"),n("hHhE"),n("91GP"),n("Tze0"),n("7h0T"),n("xfY5"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Vd3H"),n("LK8F"),n("bWfx"),n("KKXr"),n("V+eJ"),n("pIFo");var o=n("RIqP");function a(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,A=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){A=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(A)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=n("Pmem"),s=n("8jRI"),c=n("8yz6");function u(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?A(e):encodeURIComponent(e):e}function f(e,t){return t.decode?s(e):e}function p(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function g(e){var t=(e=p(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function m(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function d(e,t){u((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return function(t,n,r){var o="string"==typeof n&&n.split("").indexOf(e.arrayFormatSeparator)>-1?n.split(e.arrayFormatSeparator).map((function(t){return f(t,e)})):null===n?n:f(n,e);r[t]=o};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),o=Object.create(null);if("string"!=typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;var i,A=a(e.split("&"));try{for(A.s();!(i=A.n()).done;){var s=i.value,l=c(t.decode?s.replace(/\+/g," "):s,"="),p=r(l,2),g=p[0],d=p[1];d=void 0===d?null:["comma","separator"].includes(t.arrayFormat)?d:f(d,t),n(f(g,t),d,o)}}catch(w){A.e(w)}finally{A.f()}for(var b=0,v=Object.keys(o);b<v.length;b++){var h=v[b],y=o[h];if("object"==typeof y&&null!==y)for(var I=0,E=Object.keys(y);I<E.length;I++){var B=E[I];y[B]=m(y[B],t)}else o[h]=m(y,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce((function(e,t){var n=o[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))}t.extract=g,t.parse=d,t.stringify=function(e,t){if(!e)return"";u((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var n=function(n){return t.skipNull&&null==e[n]||t.skipEmptyString&&""===e[n]},r=function(e){switch(e.arrayFormat){case"index":return function(t){return function(n,r){var a=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(o(n),null===r?[[l(t,e),"[",a,"]"].join("")]:[[l(t,e),"[",l(a,e),"]=",l(r,e)].join("")])}};case"bracket":return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(o(n),null===r?[[l(t,e),"[]"].join("")]:[[l(t,e),"[]=",l(r,e)].join("")])}};case"comma":case"separator":return function(t){return function(n,r){return null==r||0===r.length?n:0===n.length?[[l(t,e),"=",l(r,e)].join("")]:[[n,l(r,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(n,r){return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:[].concat(o(n),null===r?[l(t,e)]:[[l(t,e),"=",l(r,e)].join("")])}}}}(t),a={},i=0,A=Object.keys(e);i<A.length;i++){var s=A[i];n(s)||(a[s]=e[s])}var c=Object.keys(a);return!1!==t.sort&&c.sort(t.sort),c.map((function(n){var o=e[n];return void 0===o?"":null===o?l(n,t):Array.isArray(o)?o.reduce(r(n),[]).join("&"):l(n,t)+"="+l(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){return{url:p(e).split("?")[0]||"",query:d(g(e),t)}},t.stringifyUrl=function(e,n){var r=p(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o),i=function(e){var t="",n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url),A=Object.assign(a,e.query),s=t.stringify(A,n);return s&&(s="?".concat(s)),"".concat(r).concat(s).concat(i)}},eIFx:function(e,t,n){e.exports={BackgroundWhite:"#F9F9F9",Blue:"#647B98",Orange:"#EFA748",Font:"Roboto,sans-serif",container:"messageinput-module--container--3R9mp",input:"messageinput-module--input--1ki0_",textinput:"messageinput-module--textinput--61qbv",buttoninput:"messageinput-module--buttoninput--1LJyp",send:"messageinput-module--send--z_X8u"}},m0LI:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,A=e[Symbol.iterator]();!(r=(i=A.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==A.return||A.return()}finally{if(o)throw a}}return n}}},vGFD:function(e,t,n){"use strict";n.r(t);n("OG14"),n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rGqo"),n("rE2o"),n("ioFf"),n("VRzm"),n("Btvt");var r=n("o0o1"),o=n.n(r),a=(n("ls82"),n("q1tI")),i=n.n(a),A=n("18X7"),s=n.n(A),c=n("Wbzz"),u=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:s.a.boxServerButton,onClick:function(){Object(c.navigate)("/acolhimento")}},e.text))},l=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"client"==e.direction?s.a.boxClient:s.a.boxServer},e.text))},f=(n("Kh/f"),n("XpBe"),n("eIFx")),p=n.n(f);var g=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).handleChange=function(e){n.setState({message:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),!1===n.props.blocked&&n.props.onSubmit(n.state.message),n.setState({message:""})},n.handleDefaultEscape=function(e){n.setState({message:""})},n.returnToDefault=function(e){""===n.state.message&&n.setState({message:"Digite sua mensagem"})},n.handleClickButton=function(e){!1===n.props.blocked&&n.props.onSubmit(e.target.value)},n.renderButtons=function(e){return i.a.createElement(a.Fragment,null,n.props.options.map((function(e){return i.a.createElement("input",{value:e,type:"button",key:e,className:p.a.buttoninput,onClick:n.handleClickButton,onBlur:n.returnToDefault})})))},n.renderInput=function(){return n.props.options&&n.props.options.length>0?n.renderButtons():i.a.createElement(a.Fragment,null)},n.state={message:"Digite sua mensagem"},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:p.a.input,onSubmit:""!==this.state.message?this.handleSubmit:function(){}},this.renderInput()))},r}(i.a.Component),m=(n("n75M"),n("Rme4"),n("PsDL")),d=(n("E8kk"),n("vOnD"));function b(){var e=E(["\n  && {\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n"]);return b=function(){return e},e}function v(){var e=E(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return v=function(){return e},e}function h(){var e=E(["\n  && {\n    height: 40px;\n  }\n  display: flex;\n  justify-content: center;\n  padding: 5px;\n  background-color: #faf7f7;\n"]);return h=function(){return e},e}function y(){var e=E(["\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  background-color: #faf7f7;\n"]);return y=function(){return e},e}function I(){var e=E(["\n  && {\n    position: fixed;\n    bottom: 0;\n    height: 50px;\n    width: 100%;\n    max-height: 50px;\n    max-width: 800px;\n  }\n"]);return I=function(){return e},e}function E(e,t){return t||(t=e.slice(0)),e.raw=t,e}d.a.div(I()),d.a.div(y()),d.a.div(h()),d.a.div(v()),Object(d.a)(m.a)(b());var B=n("vDqi"),w=n.n(B),C=n("JeNB"),x=n.n(C),Q=n("i8ne");function D(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t,n,r,o,a,i){try{var A=e[a](i),s=A.value}catch(c){return void n(c)}A.done?t(s):Promise.resolve(s).then(r,o)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){j(a,r,o,i,A,"next",e)}function A(e){j(a,r,o,i,A,"throw",e)}i(void 0)}))}}var R=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).messagesEndRef=i.a.createRef(),n.scrollToBottom=function(){n.messagesEndRef.current.scrollIntoView({behavior:"smooth"})},n.componentDidMount=O(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("http://"+n.props.chatAddr+"/questionarios/"+n.props.form+"/begin",{teste:"test"},{headers:{"x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExNTA3MzY3MjI4MzgxNjI2MTQ1NCIsIm5hbWUiOiJJYWdvIEVsaWFzIGRlIEZhcmlhIEJhcmJvc2EiLCJlbWFpbCI6ImlhZ29lbGlmYUB1c3AuYnIiLCJoZCI6InVzcC5iciIsImlhdCI6MTU5MzM2Nzc4MSwiZXhwIjoxNTkzNDU0MTgxfQ.Fd4-fR1hNiUKxc7YlrswAeMvgrZNXXle0-3-Rrw-tpc"}});case 3:t=e.sent,console.log(t),n.setState({sessionId:t.data.session_id,messages:t.data.intro.map((function(e){return console.log(e),{direction:"server",message:e,button:!1}}))}),e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(0),401!=e.t0.response.status){e.next=13;break}return Object(c.navigate)("/LoginPage"),e.abrupt("return");case 13:case"end":return e.stop()}}),e,null,[[0,8]])}))),n.componentDidUpdate=function(){n.scrollToBottom()},n.addMessage=function(e){if(n.scrollToBottom(),console.log(e),"Sair"!=e){var t={direction:"client",message:e,button:!1};if(0===n.state.messageNumber){if("Li e aceito"!==e)return void Object(c.navigate)("/");n.setState({blocked:!1,messages:[].concat(D(n.state.messages),[t,{direction:"server",message:n.props.descricao,button:!1}]),options:["Iniciar","Sair"]})}else n.setState({messages:[].concat(D(n.state.messages),[t]),blocked:!0}),n.getServerResponse(e);n.setState({messageNumber:n.state.messageNumber+1}),n.scrollToBottom()}else Object(c.navigate)("/")},n.getServerResponse=function(){var e=O(o.a.mark((function e(t){var r,a,i,A,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("http://"+n.props.chatAddr+"/questionarios/"+n.props.form+"/"+n.state.sessionId+"/proxima",{answer:t},{headers:{"x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExNTA3MzY3MjI4MzgxNjI2MTQ1NCIsIm5hbWUiOiJJYWdvIEVsaWFzIGRlIEZhcmlhIEJhcmJvc2EiLCJlbWFpbCI6ImlhZ29lbGlmYUB1c3AuYnIiLCJoZCI6InVzcC5iciIsImlhdCI6MTU5MzM2Nzc4MSwiZXhwIjoxNTkzNDU0MTgxfQ.Fd4-fR1hNiUKxc7YlrswAeMvgrZNXXle0-3-Rrw-tpc"}});case 3:if(r=e.sent,a=[{direction:"server",message:r.data.question,button:!1}],console.log(r.data),r.data.options?n.setState({options:r.data.options}):n.setState({options:[]}),""===r.data.question||void 0===r.data.question){for(s in i=r.data.result,A=Array(),i)A.push({direction:"server",message:i[s],button:!1});A.push({direction:"server",message:"Se desejar, você pode marcar uma conversa com a gente! Só clicar no botão abaixo que você será redirecionado para a página de acolhimento.",button:!1}),A.push({direction:"server",message:"Clique aqui para ir para a aba de acolhimento",button:!0}),n.setState({blocked:!0,messages:[].concat(D(n.state.messages),A)})}else n.setState({blocked:!1,messages:[].concat(D(n.state.messages),a)});n.scrollToBottom(),e.next=16;break;case 11:if(e.prev=11,e.t0=e.catch(0),401!=e.t0.response.status){e.next=16;break}return Object(c.navigate)("/LoginPage"),e.abrupt("return");case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),n.renderMessage=function(e,t){return e.button?i.a.createElement(u,{key:t,text:e.message,direction:e.direction}):i.a.createElement(l,{key:t,text:e.message,direction:e.direction})},n.state={sessionId:void 0,messages:[],options:["Li e aceito","Li e não aceito"],messageNumber:0,blocked:!1},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return i.a.createElement(Q.a,{pageTitle:this.props.form,lastPage:"/"},i.a.createElement("div",{className:x.a.container},this.state.messages.map(this.renderMessage),this.props.children,i.a.createElement("div",{ref:this.messagesEndRef})),i.a.createElement(g,{options:this.state.options,blocked:this.state.blocked,onSubmit:this.addMessage}))},r}(i.a.Component),M=n("YwZP"),N=n("cr+I"),F=n.n(N);t.default=function(){return i.a.createElement(M.Location,null,(function(e){var t=e.location;e.navigate;return i.a.createElement(R,{form:t.search?F.a.parse(t.search).form:"SRQ-20",descricao:F.a.parse(t.search).descricao,chatAddr:"34.67.221.90"})}))}},wTVA:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},wkBT:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);
//# sourceMappingURL=component---src-pages-formpage-js-62d095011630d591fe6f.js.map