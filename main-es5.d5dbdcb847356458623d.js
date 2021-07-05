!function(){function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw a}}}}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==t)return;var r,o,i=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){s=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,n,t){e.exports=t("2v48")},"2v48":function(t,r,i){"use strict";i.r(r);var s=i("ENSU"),u=i("kZht");function c(e){var n="string"==typeof e?e.trim():e;return[void 0,null,NaN,"",1/0].includes(n)}function l(e){return null==e}function f(e){return!l(e)}var d=i("6uGs"),h=i("hCLc"),v=i("uryd"),m=i("P0vk"),p=i("aJOL"),y=i("FxgA"),b=i("1VvW"),k=i("ROBh"),g=i("D57K"),w=(i("pTnX"),i("An66"));function x(e){var n,t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=null!=e?e:(new Date).getTime(),i=null!==(n=r.format)&&void 0!==n?n:"dd.MM.yyyy HH:mm:ss";return null!==(t=new w.d("en-US").transform(o,i,r.timezone))&&void 0!==t?t:""}new u.r("Suggestion strategy map"),new u.r("Days count for date suggestion");var j,W,S,C,O,E,T,N,M,R=((C=function(){function e(){o(this,e),this.workerFunctionToUrlMap=new WeakMap,this.promiseToWorkerMap=new WeakMap}return a(e,[{key:"run",value:function(e,n){var t=this.getOrCreateWorkerUrl(e);return this.runUrl(t,n)}},{key:"runUrl",value:function(e,n){var t=new Worker(e),r=this.createPromiseForWorker(t,n),o=this.createPromiseCleaner(r);return this.promiseToWorkerMap.set(r,t),r.then(o).catch(o),r}},{key:"terminate",value:function(e){return this.removePromise(e)}},{key:"getWorker",value:function(e){return this.promiseToWorkerMap.get(e)}},{key:"createPromiseForWorker",value:function(e,n){return new Promise(function(t,r){e.addEventListener("message",function(e){return t(e.data)}),e.addEventListener("error",r),e.postMessage(n)})}},{key:"getOrCreateWorkerUrl",value:function(n){if(!this.workerFunctionToUrlMap.has(n)){var t=e.createWorkerUrl(n);return this.workerFunctionToUrlMap.set(n,t),t}return this.workerFunctionToUrlMap.get(n)}},{key:"createPromiseCleaner",value:function(e){var n=this;return function(t){return n.removePromise(e),t}}},{key:"removePromise",value:function(e){var n=this.promiseToWorkerMap.get(e);return f(n)&&n.terminate(),this.promiseToWorkerMap.delete(e),e}}],[{key:"createWorkerUrl",value:function(e){var n=e.toString(),t=new Blob(["\n            self.addEventListener('message', function(e) {\n                postMessage((".concat(n,")(e.data));\n            });\n        ")],{type:"text/javascript"});return URL.createObjectURL(t)}}]),e}()).\u0275fac=function(e){return new(e||C)},C.\u0275prov=u.Hb({token:C,factory:C.\u0275fac}),C),B=((S=function(){function e(n){o(this,e),this.webWorker=n}return a(e,[{key:"composeSingle",value:function(e,t){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark(function r(){var o,i,a;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.compose([e],t);case 2:return o=r.sent,i=n(o,1),a=i[0],r.abrupt("return",null!=a?a:{});case 6:case"end":return r.stop()}},r,this)}))}},{key:"compose",value:function(e,n){return this.webWorker.run(function(e){return new(function(){function e(n){o(this,e),this.rules=n,this.keySet=new Set}return a(e,[{key:"toPlain",value:function(e){var n,t,r=this;this.keySet.clear();var o=e.map(function(e){return r.flattenAndClean(e)}),i=null!==(t=null===(n=this.rules)||void 0===n?void 0:n.includeKeys)&&void 0!==t?t:Array.from(this.keySet);return o.map(function(e){return r.pickKeys(e,i)})}},{key:"flattenAndClean",value:function(n){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o={};return Object.keys(n).forEach(function(i){var a=r?"".concat(r,".").concat(i):i;if(t.passesBlacklist(a))if(e.isObject(n[i])){var s=t.flattenAndClean(n[i],a);Object.assign(o,s)}else t.keySet.add(a),o[a]=n[i]}),o}},{key:"pickKeys",value:function(e,n){return n.reduce(function(n,t){return n[t]=e[t],n},{})}},{key:"passesBlacklist",value:function(e){var n;return!(null===(n=this.rules)||void 0===n?void 0:n.excludeKeys)||!this.rules.excludeKeys.includes(e)}}],[{key:"isObject",value:function(e){return"object"==typeof e&&null!==e}}]),e}())(e.rules).toPlain(e.entries)},{rules:n,entries:e})}}]),e}()).\u0275fac=function(e){return new(e||S)(u.Sb(R))},S.\u0275prov=u.Hb({token:S,factory:S.\u0275fac}),S),A=((W=function(){function e(){o(this,e)}return a(e,null,[{key:"forRoot",value:function(){return{ngModule:e,providers:[B]}}}]),e}()).\u0275fac=function(e){return new(e||W)},W.\u0275mod=u.Jb({type:W}),W.\u0275inj=u.Ib({providers:[R]}),W),K=((j=function(){function n(e,t){o(this,n),this.plainTableComposer=e,this.webWorker=t}return a(n,[{key:"exportExcelByWorkbook",value:function(e){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.prepareWorkbook(e);case 2:r=t.sent,this.webWorker.run(function(e){var n=function(){function e(n,t){o(this,e),this.sizes=n,this.flattenTranslatedKeys=t}return a(e,[{key:"buildWorkbook",value:function(n){var t=this.generateWorksheets(n);return e.generateWorkbook(t)}},{key:"generateWorksheets",value:function(e){var n=this;return e.map(function(e){return n.generateWorksheet(e)}).join("")}},{key:"generateWorksheet",value:function(e){var n=this.sizes,t=n.minColumnWidth,r=n.rowHeight,o=this.generateColumnsDescriptor(e),i=this.generateBodyRows(e.flatEntries);return'\n                        <Worksheet ss:Name="'.concat(e.worksheetName,'">\n                            <Table ss:DefaultColumnWidth="').concat(t,'" ss:DefaultRowHeight="').concat(r,'">\n                                ').concat(o,"\n                                ").concat(i,"\n                            </Table>\n                        </Worksheet>")}},{key:"generateColumnsDescriptor",value:function(n){var t,r=this,o=n.flatEntries,i=n.columnParameters,a=n.prefixKeyForTranslate,s=Object.keys(null!==(t=null==o?void 0:o[0])&&void 0!==t?t:[]),u="",c="";return s.forEach(function(n){var t=r.getTranslatedTitle(n,a),s=r.getWidthOfColumn(n,o,null==i?void 0:i[n]);u+='<Column ss:Width="'.concat(s,'" />'),c+=e.renderCell(t,"HeadCellStyle")}),"\n                            ".concat(u,"\n                            <Row>").concat(c,"</Row>")}},{key:"getWidthOfColumn",value:function(e,n,t){var r=this.sizes.minColumnWidth;return"MAX_WIDTH"===(null==t?void 0:t.width)?this.calcMaxWidthByEntries(n,e):"number"==typeof(null==t?void 0:t.width)?t.width:r}},{key:"calcMaxWidthByEntries",value:function(e,n){return e.reduce(function(e,t){var r,o,i=(null!==(o=null===(r=t[n])||void 0===r?void 0:r.toString())&&void 0!==o?o:"").length;return Math.max(i,e)},0)*this.sizes.fontWidth}},{key:"getTranslatedTitle",value:function(n,t){var r,o=e.isFilled(t)?"".concat(t,".").concat(n):n;return null!==(r=this.flattenTranslatedKeys[o])&&void 0!==r?r:n}},{key:"generateBodyRows",value:function(e){var n=this,t=this.sizes.rowHeight;return e.map(function(e){var r=n.generateCells(e);return'<Row ss:Height="'.concat(t,'">').concat(r,"</Row>")}).join("")}},{key:"generateCells",value:function(n){var t=this.sizes,r=t.fontWidth,o=t.minColumnWidth;return Object.keys(n).map(function(t){var i=n[t],a=String(i).length;return e.renderCell(i,a*r>=o?"CellBigDataStyle":"BodyCellStyle")}).join("")}}],[{key:"generateWorkbook",value:function(n){return'\n                            <?xml version="1.0"?>\n                            <?mso-application progid="Excel.Sheet"?>\n                            <Workbook\n                                xmlns="urn:schemas-microsoft-com:office:spreadsheet"\n                                xmlns:o="urn:schemas-microsoft-com:office:office"\n                                xmlns:x="urn:schemas-microsoft-com:office:excel"\n                                xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"\n                                xmlns:html="https://www.w3.org/TR/html40/"\n                            >\n                                '.concat(e.commonStyles,"\n                                ").concat(n,"\n                            </Workbook>")}},{key:"renderCell",value:function(e,n){var t="number"==typeof e?"Number":"String",r=function(e){var n="string"==typeof e?e.trim():e;return[void 0,null,NaN,"",1/0].includes(n)}(e)?"-":e;return"string"==typeof r&&(r=(r=r.trim()).replace(/[<>]/g,"")),'<Cell ss:StyleID="'.concat(n,'"><Data ss:Type="').concat(t,'">').concat(r,"</Data></Cell>")}},{key:"isFilled",value:function(e){return"string"==typeof e&&e.length>0}}]),e}();n.commonBorderStyles='\n                        <Borders>\n                            <Border ss:Position="Top" ss:Color="#000000" ss:LineStyle="Continuous" ss:Weight="1"/>\n                            <Border ss:Position="Bottom" ss:Color="#000000" ss:LineStyle="Continuous" ss:Weight="1"/>\n                            <Border ss:Position="Right" ss:Color="#000000" ss:LineStyle="Continuous" ss:Weight="1"/>\n                            <Border ss:Position="Left" ss:Color="#000000" ss:LineStyle="Continuous" ss:Weight="1"/>\n                        </Borders>',n.commonStyles='\n                        <Styles>\n                            <Style ss:ID="HeadCellStyle">\n                                <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="0" />\n                                <Font ss:Bold="1" ss:FontName="Arial" />\n                                '.concat(n.commonBorderStyles,'\n                            </Style>\n                            <Style ss:ID="CellBigDataStyle">\n                                <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1" />\n                                <Font ss:Bold="0" ss:FontName="Arial" />\n                                ').concat(n.commonBorderStyles,'\n                            </Style>\n                            <Style ss:ID="BodyCellStyle">\n                                <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="0" />\n                                <Font ss:Bold="0" ss:FontName="Arial" />\n                                ').concat(n.commonBorderStyles,"\n                            </Style>\n                        </Styles>");var t=new n({fontWidth:6,fontSize:7,minColumnWidth:150,rowHeight:40},e.preparedTranslatedKeys).buildWorkbook(e.worksheets);return new Blob(["\ufeff",t],{type:"application/vnd.ms-excel;charset=UTF-8"})},r).then(function(t){return n.downloadWorkbook(t,e.filename)});case 4:case"end":return t.stop()}},t,this)}))}},{key:"prepareWorkbook",value:function(n){return Object(g.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r,o,i,a,s,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=[],o=e(n.worksheets),t.prev=2,o.s();case 4:if((i=o.n()).done){t.next=15;break}if(a=i.value,s=[],t.t0=f(a.entries),!t.t0){t.next=12;break}return t.next=11,this.plainTableComposer.compose(a.entries,{includeKeys:a.keys,excludeKeys:a.excludeKeys});case 11:s=t.sent;case 12:r.push(Object.assign(Object.assign({},a),{flatEntries:s}));case 13:t.next=4;break;case 15:t.next=20;break;case 17:t.prev=17,t.t1=t.catch(2),o.e(t.t1);case 20:return t.prev=20,o.f(),t.finish(20);case 23:if(!n.translatedKeys){t.next=29;break}return t.next=26,this.plainTableComposer.composeSingle(n.translatedKeys);case 26:t.t2=t.sent,t.next=30;break;case 29:t.t2={};case 30:return u=t.t2,t.abrupt("return",Object.assign(Object.assign({},n),{worksheets:r,preparedTranslatedKeys:u}));case 32:case"end":return t.stop()}},t,this,[[2,17,20,23]])}))}}],[{key:"downloadWorkbook",value:function(e,n){!function(e){if(function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.every(c)}(e.name,e.extension))throw new Error("File name or file extension must be provided");var n=document.createElement("a"),t=window.URL.createObjectURL(e.blob),r=[e.name,e.extension].filter(Boolean).join(".");n.href=t,n.download=r,n.click(),window.URL.revokeObjectURL(t)}({blob:e,name:"".concat(n,".").concat(x()),extension:"xls"})}}]),n}()).\u0275fac=function(e){return new(e||j)(u.Sb(B),u.Sb(R))},j.\u0275prov=u.Hb({token:j,factory:j.\u0275fac}),j),L=new u.r("EXCEL_BUILDER_INTERCEPTOR_TOKEN"),P=((T=function(){function e(n,t){o(this,e),this.interceptor=n,this.builder=t}return a(e,[{key:"exportExcel",value:function(e){var n=this;this.getTranslatedColumn().toPromise().then(function(t){var r;n.builder.exportExcelByWorkbook({filename:n.interceptFilename(e),worksheets:n.interceptWorksheets(e),translatedKeys:null!==(r=null!=t?t:e.translatedKeys)&&void 0!==r?r:{}})})}},{key:"interceptFilename",value:function(e){var n,t,r,o;return null!==(o=null!==(r=null===(t=(n=this.interceptor).instant)||void 0===t?void 0:t.call(n,e.filename))&&void 0!==r?r:e.filename)&&void 0!==o?o:"UNKNOWN FILENAME"}},{key:"interceptWorksheets",value:function(e){var n,t=this;return(null!==(n=e.worksheets)&&void 0!==n?n:[]).map(function(e){var n,r,o,i,a,s,u,c,l=null!==(i=null!==(o=null===(r=null===(n=t.interceptor)||void 0===n?void 0:n.instant)||void 0===r?void 0:r.call(n,e.worksheetName))&&void 0!==o?o:e.worksheetName)&&void 0!==i?i:"UNKNOWN WORKSHEET NAME",f=null===(a=e.keys)||void 0===a?void 0:a.filter((u=null!==(s=e.excludeKeys)&&void 0!==s?s:[],c=Array.isArray(u)?u:[u],function(e){return!c.includes(e)}));return Object.assign(Object.assign({},e),{keys:f,worksheetName:l})})}},{key:"getTranslatedColumn",value:function(){var e,n,t;return null!==(t=null===(n=null===(e=this.interceptor)||void 0===e?void 0:e.getTranslationMap)||void 0===n?void 0:n.call(e))&&void 0!==t?t:Object(k.a)(null)}}]),e}()).\u0275fac=function(e){return new(e||T)(u.Sb(L),u.Sb(K))},T.\u0275prov=u.Hb({token:T,factory:T.\u0275fac}),T),F=((E=function e(){o(this,e)}).\u0275fac=function(e){return new(e||E)},E.\u0275prov=u.Hb({token:E,factory:E.\u0275fac}),E),U=((O=function(){function e(){o(this,e)}return a(e,null,[{key:"forRoot",value:function(){return{ngModule:e,providers:[P,K,{provide:L,useClass:F}]}}}]),e}()).\u0275fac=function(e){return new(e||O)},O.\u0275mod=u.Jb({type:O}),O.\u0275inj=u.Ib({providers:[R],imports:[[A.forRoot()]]}),O),D=i("aDqW"),H={provide:L,useClass:(N=function(){function e(n){o(this,e),this.translate=n}return a(e,[{key:"instant",value:function(e){return f(e)?this.translate.instant(e):e}},{key:"getTranslationMap",value:function(){var e,n=null!==(e=this.translate.currentLang)&&void 0!==e?e:this.translate.defaultLang;if(l(n))throw new Error("Not found lang");return this.translate.getTranslation(n)}}]),e}(),N.\u0275fac=function(e){return new(e||N)(u.Sb(D.c))},N.\u0275prov=u.Hb({token:N,factory:N.\u0275fac}),N)},I=i("cgGC"),_=i("8EXQ"),z=((M=function(){function e(n,t){o(this,e),this.excel=n,this.translate=t,this.data=[{id:"id",name:"Maria",info:{value:1,other:2},excluded:"excluded",description:"Fugiat tempor sunt nostrud ad fugiat. Laboris velit duis incididunt culpa"}],this.translate.setDefaultLang("ru")}return a(e,[{key:"exportExcel",value:function(){this.excel.exportExcel({filename:"My excel file",worksheets:[{entries:this.data,worksheetName:"worksheet name",excludeKeys:["excluded"]}]})}},{key:"exportExcelWithI18n",value:function(){this.excel.exportExcel({filename:"APP_KEYS.TITLE",worksheets:[{entries:this.data,prefixKeyForTranslate:"APP_KEYS.MODELS",worksheetName:"APP_KEYS.WORKSHEET_NAME",keys:["info.value","description","name"],excludeKeys:["description"]}]})}}]),e}()).\u0275fac=function(e){return new(e||M)(u.Lb(P),u.Lb(D.c))},M.\u0275cmp=u.Fb({type:M,selectors:[["app-root"]],decls:51,vars:0,consts:[[1,"dashboard"],["mode","side","opened","",1,"dashboard__menu"],[1,"title"],["src","assets/img/angular.svg","alt","angular",1,"logo"],["routerLink","/",1,"logo-title"],[1,"menu"],[1,"menu__item"],["routerLink","/"],[1,"dashboard__content"],[1,"dashboard__content-examples"],["mat-button","","mat-stroked-button","",3,"click"]],template:function(e,n){1&e&&(u.Ob(0,"mat-drawer-container",0),u.jc(1,"\n    "),u.Ob(2,"mat-drawer",1),u.jc(3,"\n        "),u.Ob(4,"mat-toolbar",2),u.jc(5,"\n            "),u.Mb(6,"img",3),u.jc(7,"\n            "),u.Ob(8,"a",4),u.jc(9,"@angular-ru/ng-excel-builder"),u.Nb(),u.jc(10,"\n        "),u.Nb(),u.jc(11,"\n\n        "),u.Ob(12,"mat-list",5),u.jc(13,"\n            "),u.Ob(14,"mat-list-item",6),u.jc(15,"\n                "),u.Ob(16,"a",7),u.jc(17,"- "),u.Ob(18,"strong"),u.jc(19,"Guide overview"),u.Nb(),u.Nb(),u.jc(20,"\n            "),u.Nb(),u.jc(21,"\n            "),u.Mb(22,"mat-divider"),u.jc(23,"\n        "),u.Nb(),u.jc(24,"\n    "),u.Nb(),u.jc(25,"\n\n    "),u.Ob(26,"mat-drawer-content",8),u.jc(27,"\n        "),u.Ob(28,"div",9),u.jc(29,"\n            "),u.Ob(30,"div"),u.jc(31,"\n                "),u.Ob(32,"h3"),u.jc(33,"Export excel"),u.Nb(),u.jc(34,"\n                "),u.Ob(35,"button",10),u.Vb("click",function(){return n.exportExcel()}),u.jc(36,"Export excel"),u.Nb(),u.jc(37,"\n            "),u.Nb(),u.jc(38,"\n\n            "),u.Ob(39,"div"),u.jc(40,"\n                "),u.Ob(41,"h3"),u.jc(42,"Export with i18n (lang: ru)"),u.Nb(),u.jc(43,"\n                "),u.Ob(44,"button",10),u.Vb("click",function(){return n.exportExcelWithI18n()}),u.jc(45,"Export excel"),u.Nb(),u.jc(46,"\n            "),u.Nb(),u.jc(47,"\n        "),u.Nb(),u.jc(48,"\n    "),u.Nb(),u.jc(49,"\n"),u.Nb(),u.jc(50,"\n"))},directives:[m.b,m.a,p.a,b.a,v.a,v.b,_.a,m.c,h.a],styles:[""],encapsulation:2,changeDetection:0}),M);function J(e){return new I.a(e,"./assets/i18n/",".json")}var V,X=((V=function e(){o(this,e)}).\u0275fac=function(e){return new(e||V)},V.\u0275mod=u.Jb({type:V,bootstrap:[z]}),V.\u0275inj=u.Ib({providers:[H],imports:[[s.a,v.c,d.b,p.b,m.d,h.b,y.b,D.b.forRoot({loader:{deps:[d.a],provide:D.a,useFactory:J}}),b.b.forRoot([]),U.forRoot()]]}),V);Object(u.T)(),s.b().bootstrapModule(X).catch(function(e){return console.error(e)})},zn8P:function(e,n){function t(e){return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id="zn8P"}},[[0,0,5]]])}();