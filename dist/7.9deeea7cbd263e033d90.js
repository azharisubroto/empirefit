(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{FpO7:function(t,e,n){t.exports=function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3);Object.defineProperty(e,"conformToMask",{enumerable:!0,get:function(){return i(o).default}});var r=n(2);Object.defineProperty(e,"adjustCaretPosition",{enumerable:!0,get:function(){return i(r).default}});var l=n(5);Object.defineProperty(e,"createTextMaskInputElement",{enumerable:!0,get:function(){return i(l).default}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.placeholderChar="_",e.strFunction="function"},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.previousConformedValue,o=void 0===e?i:e,r=t.previousPlaceholder,l=void 0===r?i:r,s=t.currentCaretPosition,a=void 0===s?0:s,u=t.conformedValue,c=t.rawValue,p=t.placeholderChar,d=t.placeholder,f=t.indexesOfPipedChars,h=void 0===f?n:f,v=t.caretTrapIndexes,g=void 0===v?n:v;if(0===a||!c.length)return 0;var m=o.length,b=d.length,k=u.length,y=c.length-m,C=y>0;if(y>1&&!C&&0!==m)return a;var S=0,O=void 0,A=void 0;if(!C||o!==u&&u!==d){var w=u.toLowerCase(),P=c.toLowerCase().substr(0,a).split(i).filter(function(t){return-1!==w.indexOf(t)});A=P[P.length-1];var _=l.substr(0,P.length).split(i).filter(function(t){return t!==p}).length,M=d.substr(0,P.length).split(i).filter(function(t){return t!==p}).length;!C&&(M!==_||void 0!==l[P.length-1]&&void 0!==d[P.length-2]&&l[P.length-1]!==p&&l[P.length-1]!==d[P.length-1]&&l[P.length-1]===d[P.length-2])&&_>0&&d.indexOf(A)>-1&&void 0!==c[a]&&(O=!0,A=c[a]);for(var x=h.map(function(t){return w[t]}).filter(function(t){return t===A}).length,R=P.filter(function(t){return t===A}).length,I=d.substr(0,d.indexOf(p)).split(i).filter(function(t,e){return t===A&&c[e]!==t}).length+R+x+(O?1:0),E=0,N=0;N<k&&(S=N+1,w[N]===A&&E++,!(E>=I));N++);}else S=a-y;if(C){for(var T=S,j=S;j<=b;j++)if(d[j]===p&&(T=j),d[j]===p||-1!==g.indexOf(j)||j===b)return T}else if(O){for(var U=S-1;U>=0;U--)if(u[U]===A||-1!==g.indexOf(U)||0===U)return U}else for(var V=S;V>=0;V--)if(d[V-1]===p||-1!==g.indexOf(V)||0===V)return V};var n=[],i=""},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,o.isArray)(e)){if((void 0===e?"undefined":i(e))!==r.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");e=e(t,n),e=(0,o.processCaretTraps)(e).maskWithoutCaretTraps}var a=n.guide,u=void 0===a||a,c=n.previousConformedValue,p=void 0===c?s:c,d=n.placeholderChar,f=void 0===d?r.placeholderChar:d,h=n.placeholder,v=void 0===h?(0,o.convertMaskToPlaceholder)(e,f):h,g=n.keepCharPositions,m=!1===u&&void 0!==p,b=t.length,k=p.length,y=v.length,C=e.length,S=b-k,O=S>0,A=n.currentCaretPosition+(O?-S:0),w=A+Math.abs(S);if(!0===g&&!O){for(var P=s,_=A;_<w;_++)v[_]===f&&(P+=f);t=t.slice(0,A)+P+t.slice(A,b)}for(var M=t.split(s).map(function(t,e){return{char:t,isNew:e>=A&&e<w}}),x=b-1;x>=0;x--){var R=M[x].char;R!==f&&R===v[x>=A&&k===C?x-S:x]&&M.splice(x,1)}var I=s,E=!1;t:for(var N=0;N<y;N++){var T=v[N];if(T===f){if(M.length>0)for(;M.length>0;){var j=M.shift(),U=j.char,V=j.isNew;if(U===f&&!0!==m){I+=f;continue t}if(e[N].test(U)){if(!0===g&&!1!==V&&p!==s&&!1!==u&&O){for(var D=M.length,L=null,z=0;z<D;z++){var J=M[z];if(J.char!==f&&!1===J.isNew)break;if(J.char===f){L=z;break}}null!==L?(I+=U,M.splice(L,1)):N--}else I+=U;continue t}E=!0}!1===m&&(I+=v.substr(N,y));break}I+=T}if(m&&!1===O){for(var Q=null,G=0;G<I.length;G++)v[G]===f&&(Q=G);I=null!==Q?I.substr(0,Q+1):s}return{conformedValue:I,meta:{someCharsRejected:E}}};var o=n(4),r=n(1),l=[],s=""},function(t,e,n){"use strict";function i(t){return Array.isArray&&Array.isArray(t)||t instanceof Array}Object.defineProperty(e,"__esModule",{value:!0}),e.convertMaskToPlaceholder=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.placeholderChar;if(!i(t))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==t.indexOf(e))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(e)+"\n\nThe mask that was received is: "+JSON.stringify(t));return t.map(function(t){return t instanceof RegExp?e:t}).join("")},e.isArray=i,e.isString=function(t){return"string"==typeof t||t instanceof String},e.isNumber=function(t){return"number"==typeof t&&void 0===t.length&&!isNaN(t)},e.isNil=function(t){return null==t},e.processCaretTraps=function(t){for(var e=[],n=void 0;-1!==(n=t.indexOf(l));)e.push(n),t.splice(n,1);return{maskWithoutCaretTraps:t,indexes:e}};var o=n(1),r=[],l="[]"},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){document.activeElement===t&&(h?v(function(){return t.setSelectionRange(e,e,d)},0):t.setSelectionRange(e,e,d))}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function(t){var e={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:e,update:function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,d=i.inputElement,h=i.mask,v=i.guide,g=i.pipe,m=i.placeholderChar,b=void 0===m?c.placeholderChar:m,k=i.keepCharPositions,y=void 0!==k&&k,C=i.showMask,S=void 0!==C&&C;if(void 0===n&&(n=d.value),n!==e.previousConformedValue){(void 0===h?"undefined":l(h))===f&&void 0!==h.pipe&&void 0!==h.mask&&(g=h.pipe,h=h.mask);var O=void 0,A=void 0;if(h instanceof Array&&(O=(0,u.convertMaskToPlaceholder)(h,b)),!1!==h){var w=function(t){if((0,u.isString)(t))return t;if((0,u.isNumber)(t))return String(t);if(null==t)return p;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(t))}(n),P=d.selectionEnd,_=e.previousConformedValue,M=e.previousPlaceholder,x=void 0;if((void 0===h?"undefined":l(h))===c.strFunction){if(!1===(A=h(w,{currentCaretPosition:P,previousConformedValue:_,placeholderChar:b})))return;var R=(0,u.processCaretTraps)(A);x=R.indexes,O=(0,u.convertMaskToPlaceholder)(A=R.maskWithoutCaretTraps,b)}else A=h;var I={previousConformedValue:_,guide:v,placeholderChar:b,pipe:g,placeholder:O,currentCaretPosition:P,keepCharPositions:y},E=(0,a.default)(w,A,I).conformedValue,N=(void 0===g?"undefined":l(g))===c.strFunction,T={};N&&(!1===(T=g(E,r({rawValue:w},I)))?T={value:_,rejected:!0}:(0,u.isString)(T)&&(T={value:T}));var j=N?T.value:E,U=(0,s.default)({previousConformedValue:_,previousPlaceholder:M,conformedValue:j,placeholder:O,rawValue:w,currentCaretPosition:P,placeholderChar:b,indexesOfPipedChars:T.indexesOfPipedChars,caretTrapIndexes:x}),V=j===O&&0===U?S?O:p:j;e.previousConformedValue=V,e.previousPlaceholder=O,d.value!==V&&(d.value=V,o(d,U))}}}}};var s=i(n(2)),a=i(n(3)),u=n(4),c=n(1),p="",d="none",f="object",h="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),v="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])},QvNt:function(t,e,n){"use strict";var i=n("CcnG"),o=n("Ip0R");n("vMEl"),n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u});var r=i["\u0275crt"]({encapsulation:0,styles:[["button[_ngcontent-%COMP%]{position:relative;transition:all .15s ease-in-out}button.loading[_ngcontent-%COMP%]{padding-left:36px}button[_ngcontent-%COMP%]   .btn-spinner[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;margin:auto;left:10px}"]],data:{}});function l(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,0,"div",[["class","btn-spinner float-left"]],null,null,null,null,null))],null,null)}function s(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),i["\u0275ncd"](null,0)],null,null)}function a(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),i["\u0275ted"](1,null,["",""]))],null,function(t,e){t(e,1,0,e.component.loadingText)})}function u(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,8,"button",[],[[8,"type",0],[8,"disabled",0]],null,null,null,null)),i["\u0275did"](1,278528,null,0,o.NgClass,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i["\u0275pod"](2,{loading:0}),(t()(),i["\u0275and"](16777216,null,null,1,null,l)),i["\u0275did"](4,16384,null,0,o.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,s)),i["\u0275did"](6,16384,null,0,o.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,a)),i["\u0275did"](8,16384,null,0,o.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,e){var n=e.component,o=i["\u0275inlineInterpolate"](1,"btn ",n.btnClass,""),r=t(e,2,0,n.loading);t(e,1,0,o,r),t(e,4,0,n.loading),t(e,6,0,!n.loading),t(e,8,0,n.loading)},function(t,e){var n=e.component;t(e,0,0,n.type,n.loading)})}},TXLM:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){return function(){}}()},UVXo:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("CcnG"),o=n("gIcY"),r=n("ZYjt"),l=n("FpO7");e.TextMaskConfig=function(){return function(){}}(),e.MASKEDINPUT_VALUE_ACCESSOR={provide:o.NG_VALUE_ACCESSOR,useExisting:i.forwardRef(function(){return s}),multi:!0};var s=function(){function t(t,e,n){var i;this._renderer=t,this._elementRef=e,this._compositionMode=n,this.textMaskConfig={mask:[],guide:!0,placeholderChar:"_",pipe:void 0,keepCharPositions:!1},this.onChange=function(t){},this.onTouched=function(){},this._composing=!1,null==this._compositionMode&&(this._compositionMode=(i=r.\u0275getDOM()?r.\u0275getDOM().getUserAgent():"",!/android (\d+)/.test(i.toLowerCase())))}return t.prototype.ngOnChanges=function(t){this._setupMask(!0),void 0!==this.textMaskInputElement&&this.textMaskInputElement.update(this.inputElement.value)},t.prototype.writeValue=function(t){this._setupMask(),this._renderer.setProperty(this.inputElement,"value",null==t?"":t),void 0!==this.textMaskInputElement&&this.textMaskInputElement.update(t)},t.prototype.registerOnChange=function(t){this.onChange=t},t.prototype.registerOnTouched=function(t){this.onTouched=t},t.prototype.setDisabledState=function(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)},t.prototype._handleInput=function(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&(this._setupMask(),void 0!==this.textMaskInputElement&&(this.textMaskInputElement.update(t),this.onChange(t=this.inputElement.value)))},t.prototype._setupMask=function(t){void 0===t&&(t=!1),this.inputElement||(this.inputElement="INPUT"===this._elementRef.nativeElement.tagName.toUpperCase()?this._elementRef.nativeElement:this._elementRef.nativeElement.getElementsByTagName("INPUT")[0]),this.inputElement&&t&&(this.textMaskInputElement=l.createTextMaskInputElement(Object.assign({inputElement:this.inputElement},this.textMaskConfig)))},t.prototype._compositionStart=function(){this._composing=!0},t.prototype._compositionEnd=function(t){this._composing=!1,this._compositionMode&&this._handleInput(t)},t.decorators=[{type:i.Directive,args:[{host:{"(input)":"_handleInput($event.target.value)","(blur)":"onTouched()","(compositionstart)":"_compositionStart()","(compositionend)":"_compositionEnd($event.target.value)"},selector:"[textMask]",exportAs:"textMask",providers:[e.MASKEDINPUT_VALUE_ACCESSOR]}]}],t.propDecorators={textMaskConfig:[{type:i.Input,args:["textMask"]}]},t}();e.MaskedInputDirective=s,e.TextMaskModule=function(){function t(){}return t.decorators=[{type:i.NgModule,args:[{declarations:[s],exports:[s]}]}],t}();var a=n("FpO7");e.conformToMask=a.conformToMask},a8VR:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r});var i=n("CcnG"),o=(n("eLtQ"),i["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function r(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"div",[],[[8,"hidden",0]],null,null,null,null)),i["\u0275ncd"](null,0)],null,function(t,e){t(e,0,0,!e.component.isActive)})}},eLtQ:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("CcnG"),o=function(){function t(){this.hidden=!1,this.isValid=!0,this.showNext=!0,this.showPrev=!0,this.onNext=new i.EventEmitter,this.onPrev=new i.EventEmitter,this.onComplete=new i.EventEmitter,this._isActive=!1,this.isDisabled=!0}return Object.defineProperty(t.prototype,"isActive",{get:function(){return this._isActive},set:function(t){this._isActive=t,this.isDisabled=!1},enumerable:!0,configurable:!0}),t}()},eyYc:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i=n("t/Na"),o=n("tZUg"),r=n("CcnG"),l=function(){function t(t,e){this.http=t,this.store=e,this.apiURL="https://api.empirefit.club/api",this.httpOptions={headers:new i.g({Authorization:"Bearer "+this.store.getItem("access_token")})}}return t.prototype.checkStaffRegistration=function(t,e){return this.http.get(this.apiURL+"/finger/staff_registrations/check/"+t+"/"+e)},t.prototype.checkMemberRegistration=function(t,e){return this.http.get(this.apiURL+"/finger/registrations/check/"+t+"/"+e)},t.prototype.classAttendance=function(t){return this.http.get(this.apiURL+"/finger/member_auto_attendance/"+t)},t.prototype.checkAttendance=function(t){return this.http.get(this.apiURL+"/finger/member_attendance/check/"+t,this.httpOptions)},t.prototype.checkAutoRegClass=function(t,e){return this.http.post(this.apiURL+"/finger/member_register_class/check/"+t,e,this.httpOptions)},t.prototype.checkPtAttendance=function(t,e){return this.http.get(this.apiURL+"/finger/member_pt_attendances/check/"+t+"/"+e)},t.prototype.checkPtAttendance2=function(t,e){return this.http.get(this.apiURL+"/finger/pt_attendances/check/"+t+"/"+e)},t.prototype.checkStaffAttendance=function(t,e){return this.http.post(this.apiURL+"/finger/staff_attendance/check/"+t,e,this.httpOptions)},t.prototype.checkStaffAttendanceOut=function(t,e){return this.http.post(this.apiURL+"/finger/staff_attendance_out/check/"+t,e,this.httpOptions)},t.ngInjectableDef=r.defineInjectable({factory:function(){return new t(r.inject(i.c),r.inject(o.a))},token:t,providedIn:"root"}),t}()},"hf/o":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s});var i=n("CcnG"),o=(n("KDM/"),n("Ip0R")),r=i["\u0275crt"]({encapsulation:0,styles:[".webcam-wrapper[_ngcontent-%COMP%]{display:inline-block;position:relative;line-height:0}.webcam-wrapper[_ngcontent-%COMP%]   video.mirrored[_ngcontent-%COMP%]{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.webcam-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:none}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.18)}"],data:{}});function l(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,0,"div",[["class","camera-switch"]],null,[[null,"click"]],function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component.rotateVideoInput(!0)&&i),i},null,null))],null,null)}function s(t){return i["\u0275vid"](0,[i["\u0275qud"](402653184,1,{video:0}),i["\u0275qud"](402653184,2,{canvas:0}),(t()(),i["\u0275eld"](2,0,null,null,4,"div",[["class","webcam-wrapper"]],null,[[null,"click"]],function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component.imageClick.next()&&i),i},null,null)),(t()(),i["\u0275eld"](3,0,[[1,0],["video",1]],null,0,"video",[["autoplay",""],["muted",""],["playsinline",""]],[[8,"width",0],[8,"height",0],[8,"className",0]],[[null,"resize"]],function(t,e,n){var i=!0;return"resize"===e&&(i=!1!==t.component.videoResize()&&i),i},null,null)),(t()(),i["\u0275and"](16777216,null,null,1,null,l)),i["\u0275did"](5,16384,null,0,o.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275eld"](6,0,[[2,0],["canvas",1]],null,0,"canvas",[],[[8,"width",0],[8,"height",0]],null,null,null,null))],function(t,e){var n=e.component;t(e,5,0,n.allowCameraSwitch&&n.availableVideoInputs.length>1&&n.videoInitialized)},function(t,e){var n=e.component;t(e,3,0,n.videoWidth,n.videoHeight,n.videoStyleClasses),t(e,6,0,n.width,n.height)})}},kIgK:function(t,e,n){"use strict";var i=n("CcnG"),o=n("Ip0R");n("qZzz"),n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s});var r=i["\u0275crt"]({encapsulation:0,styles:[[".card[_ngcontent-%COMP%]{height:100%}.card-header[_ngcontent-%COMP%]{background-color:#fff;padding:0;font-size:1.25rem}.card-block[_ngcontent-%COMP%]{overflow-y:auto}.card-footer[_ngcontent-%COMP%]{background-color:#fff;border-top:0}.nav-item[_ngcontent-%COMP%]{padding:1rem 0;border-bottom:.5rem solid #ccc}.active[_ngcontent-%COMP%]{font-weight:700;color:#000;border-bottom-color:#1976d2!important}.enabled[_ngcontent-%COMP%]{cursor:pointer;border-bottom-color:#58a2ea}.disabled[_ngcontent-%COMP%]{color:#ccc}.completed[_ngcontent-%COMP%]{cursor:default}"]],data:{}});function l(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),i["\u0275did"](1,278528,null,0,o.NgClass,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i["\u0275pod"](2,{active:0,enabled:1,disabled:2,completed:3}),(t()(),i["\u0275eld"](3,0,null,null,1,"a",[],null,[[null,"click"]],function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component.goToStep(t.context.$implicit)&&i),i},null,null)),(t()(),i["\u0275ted"](4,null,["",""]))],function(t,e){var n=t(e,2,0,e.context.$implicit.isActive,!e.context.$implicit.isDisabled,e.context.$implicit.isDisabled,e.component.isCompleted);t(e,1,0,"nav-item",n)},function(t,e){t(e,4,0,e.context.$implicit.title)})}function s(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,15,"div",[["class","card"]],null,null,null,null,null)),(t()(),i["\u0275eld"](1,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(t()(),i["\u0275eld"](2,0,null,null,2,"ul",[["class","nav nav-justified"]],null,null,null,null,null)),(t()(),i["\u0275and"](16777216,null,null,1,null,l)),i["\u0275did"](4,278528,null,0,o.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),i["\u0275eld"](5,0,null,null,1,"div",[["class","card-block"]],null,null,null,null,null)),i["\u0275ncd"](null,0),(t()(),i["\u0275eld"](7,0,null,null,8,"div",[["class","card-footer"]],[[8,"hidden",0]],null,null,null,null)),(t()(),i["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-rounded btn-secondary float-left prevaja"],["type","button"]],[[8,"hidden",0]],[[null,"click"]],function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component.previous()&&i),i},null,null)),(t()(),i["\u0275ted"](-1,null,["Previous"])),(t()(),i["\u0275eld"](10,0,null,null,1,"button",[["class","btn btn-rounded btn-secondary float-right nextaja"],["type","button"]],[[8,"disabled",0],[8,"hidden",0]],[[null,"click"]],function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component.next()&&i),i},null,null)),(t()(),i["\u0275ted"](-1,null,["Next"])),(t()(),i["\u0275eld"](12,0,null,null,1,"button",[["class","btn btn-rounded btn-secondary float-right"],["type","button"]],[[8,"disabled",0],[8,"hidden",0]],[[null,"click"]],function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component.complete()&&i),i},null,null)),(t()(),i["\u0275ted"](-1,null,["Done"])),(t()(),i["\u0275eld"](14,0,null,null,1,"button",[["class","btn mr-2 btn-rounded btn-secondary float-right"],["type","button"]],[[8,"hidden",0]],[[null,"click"]],function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component.skip()&&i),i},null,null)),(t()(),i["\u0275ted"](-1,null,["Skip"]))],function(t,e){t(e,4,0,e.component.steps)},function(t,e){var n=e.component;t(e,7,0,n.isCompleted),t(e,8,0,!n.hasPrevStep||!n.activeStep.showPrev),t(e,10,0,!n.activeStep.isValid,!n.hasNextStep||!n.activeStep.showNext),t(e,12,0,!n.activeStep.isValid,n.hasNextStep),t(e,14,0,!n.hasSkipStep)})}},kmKP:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i=n("t/Na"),o=n("tZUg"),r=n("CcnG"),l=function(){function t(t,e){this.http=t,this.store=e,this.apiURL="https://api.empirefit.club/api",this.httpOptions={headers:new i.g({Authorization:"Bearer "+this.store.getItem("access_token")})}}return t.prototype.showUser=function(t){return this.http.get(this.apiURL+"/users/"+t,this.httpOptions)},t.prototype.getUsers=function(){return this.http.get(this.apiURL+"/users",this.httpOptions)},t.prototype.getSingleUser=function(){return this.http.get(this.apiURL+"/get_user",this.httpOptions)},t.prototype.userCheckPassword=function(t,e){return this.http.post(this.apiURL+"/check_password/"+t,e,this.httpOptions)},t.prototype.updateUser=function(t,e){return this.http.put(this.apiURL+"/users/"+t,e,this.httpOptions)},t.prototype.createUser=function(t){return this.http.post(this.apiURL+"/users",t,this.httpOptions)},t.prototype.deleteUser=function(t){return this.http.delete(this.apiURL+"/users/"+t,this.httpOptions)},t.ngInjectableDef=r.defineInjectable({factory:function(){return new t(r.inject(i.c),r.inject(o.a))},token:t,providedIn:"root"}),t}()},qZzz:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("CcnG"),o=(n("eLtQ"),function(){function t(){this._steps=[],this._isCompleted=!1,this.onStepChanged=new i.EventEmitter}return t.prototype.ngAfterContentInit=function(){var t=this;this.wizardSteps.forEach(function(e){return t._steps.push(e)}),this.steps[0].isActive=!0},Object.defineProperty(t.prototype,"steps",{get:function(){return this._steps.filter(function(t){return!t.hidden})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isCompleted",{get:function(){return this._isCompleted},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"activeStep",{get:function(){return this.steps.find(function(t){return t.isActive})},set:function(t){t===this.activeStep||t.isDisabled||(this.activeStep.isActive=!1,t.isActive=!0,this.onStepChanged.emit(t))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"activeStepIndex",{get:function(){return this.steps.indexOf(this.activeStep)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasNextStep",{get:function(){return this.activeStepIndex<this.steps.length-1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasSkipStep",{get:function(){return 1==this.activeStepIndex},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasPrevStep",{get:function(){return this.activeStepIndex>0},enumerable:!0,configurable:!0}),t.prototype.goToStep=function(t){this.isCompleted||(this.activeStep=t)},t.prototype.next=function(){if(this.hasNextStep){var t=this.steps[this.activeStepIndex+1];this.activeStep.onNext.emit(),t.isDisabled=!1,this.activeStep=t}},t.prototype.skip=function(){if(this.hasSkipStep){var t=this.steps[this.activeStepIndex+1];this.activeStep.onNext.emit(),t.isDisabled=!1,this.activeStep=t}},t.prototype.previous=function(){if(this.hasPrevStep){var t=this.steps[this.activeStepIndex-1];this.activeStep.onPrev.emit(),t.isDisabled=!1,this.activeStep=t}},t.prototype.complete=function(){this.activeStep.onComplete.emit(),this._isCompleted=!0},t}())},qbsC:function(t,e,n){"use strict";var i=n("DtyJ");n.d(e,"a",function(){return i.interval})},uToW:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("t/Na"),o=n("tZUg"),r=n("CcnG"),l=n("ZYCi"),s=function(){function t(t,e,n){this.http=t,this.store=e,this.router=n,this.apiURL="https://api.empirefit.club/api",this.httpOptions={headers:new i.g({Authorization:"Bearer "+this.store.getItem("access_token")})}}return t.prototype.getBanks=function(){return this.http.get(this.apiURL+"/banks",this.httpOptions)},t.prototype.createBank=function(t){return this.http.post(this.apiURL+"/banks",t,this.httpOptions)},t.prototype.deleteBank=function(t){return this.http.delete(this.apiURL+"/banks/"+t,this.httpOptions)},t.prototype.showBank=function(t){return this.http.get(this.apiURL+"/banks/"+t,this.httpOptions)},t.prototype.updateBank=function(t,e){return this.http.put(this.apiURL+"/banks/"+t,e,this.httpOptions)},t.ngInjectableDef=r.defineInjectable({factory:function(){return new t(r.inject(i.c),r.inject(o.a),r.inject(l.q))},token:t,providedIn:"root"}),t}()}}]);