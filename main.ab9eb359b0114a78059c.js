(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,n,t){e.exports=t("2v48")},"2v48":function(e,n,t){"use strict";t.r(n);var r=t("ENSU"),o=t("kZht"),i=t("6uGs"),a=t("hCLc"),c=t("uryd"),s=t("P0vk"),u=t("aJOL"),l=t("FxgA"),f=t("1VvW"),d=t("bI4O"),v=t("jg4I"),m=t("ROBh"),b=t("An66");function h(e){var n="string"==typeof e?e.trim():e;return[void 0,null,NaN,"","null",1/0].includes(n)}function p(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null!=e?e:(new Date).getTime(),o=null!==(n=t.format)&&void 0!==n?n:"dd.MM.yyyy HH:mm:ss";return new b.d("en-US").transform(r,o,t.timezone)||""}var k=function(){var e=function(){function e(){Object(d.a)(this,e),this.workerFunctionToUrlMap=new WeakMap,this.promiseToWorkerMap=new WeakMap}return Object(v.a)(e,[{key:"run",value:function(e,n){var t=this.getOrCreateWorkerUrl(e);return this.runUrl(t,n)}},{key:"runUrl",value:function(e,n){var t=new Worker(e),r=this.createPromiseForWorker(t,n),o=this.createPromiseCleaner(r);return this.promiseToWorkerMap.set(r,t),r.then(o).catch(o),r}},{key:"terminate",value:function(e){return this.removePromise(e)}},{key:"getWorker",value:function(e){return this.promiseToWorkerMap.get(e)}},{key:"createPromiseForWorker",value:function(e,n){return new Promise(function(t,r){e.addEventListener("message",function(e){return t(e.data)}),e.addEventListener("error",r),e.postMessage(n)})}},{key:"getOrCreateWorkerUrl",value:function(n){if(!this.workerFunctionToUrlMap.has(n)){var t=e.createWorkerUrl(n);return this.workerFunctionToUrlMap.set(n,t),t}return this.workerFunctionToUrlMap.get(n)}},{key:"createPromiseCleaner",value:function(e){var n=this;return function(t){return n.removePromise(e),t}}},{key:"removePromise",value:function(e){var n=this.promiseToWorkerMap.get(e);return n&&n.terminate(),this.promiseToWorkerMap.delete(e),e}}],[{key:"createWorkerUrl",value:function(e){var n=e.toString(),t="\n            self.addEventListener('message', function(e) {\n                postMessage((".concat(n,")(e.data));\n            });\n        "),r=new Blob([t],{type:"text/javascript"});return URL.createObjectURL(r)}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac}),e}(),y=t("aDqW"),w=function(){var e=function(){function e(n){Object(d.a)(this,e),this.webWorker=n}return Object(v.a)(e,[{key:"exportExcelByWorkbook",value:function(e){this.webWorker.run(function(e){var n,t,r,o,i={HEAD:"HeadCellStyle",BODY:"BodyCellStyle",BIG_DATA:"CellBigDataStyle"},a=(n=e.worksheets,t=l(e.translatedKeys),r=i,o="",n.forEach(function(e){var n=e.worksheetName,i=function(e,n,t){var r,o=l(n,e.excludeKeys);return((null===(r=e.keys)||void 0===r?void 0:r.length)?e.keys:Object.keys(o)).map(function(n){var r,o=void 0!==t["".concat(null==e?void 0:e.prefixKeyForTranslate,".").concat(n)]?t["".concat(null==e?void 0:e.prefixKeyForTranslate,".").concat(n)]:n;return r=n,f(o)!==f(r)?o:n})}(e,e.entries[0],t);o+='\n                          <Worksheet ss:Name="'.concat(n,'"><Table ss:DefaultColumnWidth="').concat(140,'" ss:DefaultRowHeight="').concat(40,'">').concat(function(e,n,t){return e.reduce(function(e,n){var t=7*n.length;return e+'<Column ss:Width="'.concat(t>140?t:140,'" />')},"")}(i),"\n                              ").concat(function(e,n,t,r,o,i,a){var s="";return n.forEach(function(n,r){var o=0===r?"\t<Row>".concat(function(e,n){return e.reduce(function(e,t){return e+c(t,n.HEAD)},"")}(t,a),"\t</Row>"):"";s+="".concat(o,'<Row ss:Height="').concat(40,'"> ').concat(function(e,n,t,r,o){return function(e,n,t,r,o){var i,a="";return((null===(i=e.keys)||void 0===i?void 0:i.length)?e.keys:Object.keys(n)).forEach(function(e){var t=String(n[e]).length;a+=c(n[e],5*t>=140?o.BIG_DATA:o.BODY)}),a}(e,l(n,e.excludeKeys),0,0,o)}(e,n,0,0,a),"  </Row>\n                                         ")}),s}(e,e.entries,i,0,0,0,r),"\n                            </Table> </Worksheet>\n                          ")}),o);function c(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"String",r="number"==typeof e?"Number":t,o=s(e,"-");return"string"==typeof o&&(o=(o=o.trim()).replace(/[<>]/g,"")),'<Cell ss:StyleID="'.concat(n,'"><Data ss:Type="').concat(r,'">').concat(o,"</Data></Cell>")}function s(e,n){return function(e){var n="string"==typeof e?e.trim():e;return[void 0,null,NaN,"","null",1/0].includes(n)}(e)?n:e}function u(e,n,t){if("object"==typeof e[t]&&null!==e[t]){var r=l(e[t]);for(var o in r)r.hasOwnProperty(o)&&(n["".concat(t,".").concat(o)]=r[o])}else n[t]=e[t]}function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t={};for(var r in e)e.hasOwnProperty(r)&&!n.includes(r)&&u(e,t,r);return t}function f(e){return e.split(".").pop()}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:'<Font ss:Bold="0" ss:FontName="Arial" />';return"".concat(e,' <Borders><Border ss:Position="Bottom" ss:Color="#000000" ss:LineStyle="Continuous" ss:Weight="1"/><Border ss:Position="Right" ss:Color="#000000" ss:LineStyle="Continuous" ss:Weight="1"/></Borders>')}var v='\n                          <?xml version="1.0"?>\n                          <?mso-application progid="Excel.Sheet"?>\n                          <Workbook\n                           xmlns="urn:schemas-microsoft-com:office:spreadsheet"\n                           xmlns:o="urn:schemas-microsoft-com:office:office"\n                           xmlns:x="urn:schemas-microsoft-com:office:excel"\n                           xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"\n                           xmlns:html="https://www.w3.org/TR/html40/">\n                           <Styles>\n                            <Style ss:ID="'.concat(i.HEAD,'">\n                               <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="0" />\n                               ').concat(d('<Font ss:Bold="1" ss:FontName="Arial" />'),'\n                            </Style>\n                            <Style ss:ID="').concat(i.BIG_DATA,'">\n                               <Alignment ss:Horizontal="Left" ss:Vertical="Top" ss:WrapText="1" />\n                               ').concat(d(),'\n                            </Style>\n                            <Style ss:ID="').concat(i.BODY,'">\n                              <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="0" />\n                              ').concat(d(),"\n                            </Style>\n                          </Styles>\n                           ").concat(a,"\n                          </Workbook>\n                      ");return new Blob(["\ufeff",v],{type:"application/vnd.ms-excel;charset=UTF-8"})},e).then(function(n){return function(e){if(function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.every(h)}(e.name,e.extension))throw new Error("File name or file extension must be provided");var n=document.createElement("a"),t=window.URL.createObjectURL(e.blob),r=[e.name,e.extension].filter(Boolean).join(".");n.href=t,n.download=r,n.click(),window.URL.revokeObjectURL(t)}({blob:n,name:"".concat(e.filename,".").concat(p()),extension:"xls"})})}}]),e}();return e.\u0275fac=function(n){return new(n||e)(o.Sb(k))},e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac}),e}(),g=new o.r("EXCEL_BUILDER_INTERCEPTOR_TOKEN"),x=function(){var e=function(){function e(n,t){Object(d.a)(this,e),this.interceptor=n,this.builder=t}return Object(v.a)(e,[{key:"exportExcel",value:function(e){var n=this;this.getTranslatedColumn().toPromise().then(function(t){var r;n.builder.exportExcelByWorkbook({filename:n.interceptFilename(e),worksheets:n.interceptWorksheets(e),translatedKeys:null!==(r=null!=t?t:e.translatedKeys)&&void 0!==r?r:{}})})}},{key:"interceptFilename",value:function(e){var n,t,r,o;return null!==(o=null!==(r=null===(t=(n=this.interceptor).instant)||void 0===t?void 0:t.call(n,e.filename))&&void 0!==r?r:e.filename)&&void 0!==o?o:"UNKNOWN FILENAME"}},{key:"interceptWorksheets",value:function(e){var n,t=this;return(null!==(n=e.worksheets)&&void 0!==n?n:[]).map(function(e){var n,r,o,i,a,c=null!==(i=null!==(o=null===(r=null===(n=t.interceptor)||void 0===n?void 0:n.instant)||void 0===r?void 0:r.call(n,e.worksheetName))&&void 0!==o?o:e.worksheetName)&&void 0!==i?i:"UNKNOWN WORKSHEET NAME",s=null===(a=e.keys)||void 0===a?void 0:a.filter(function(n){var t,r;return!(null!==(r=null===(t=e.excludeKeys)||void 0===t?void 0:t.includes(n))&&void 0!==r&&r)});return Object.assign(Object.assign({},e),{keys:s,worksheetName:c})})}},{key:"getTranslatedColumn",value:function(){var e,n,t;return null!==(t=null===(n=null===(e=this.interceptor)||void 0===e?void 0:e.getTranslatedColumn)||void 0===n?void 0:n.call(e))&&void 0!==t?t:Object(m.a)(null)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(o.Sb(g),o.Sb(w))},e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac}),e}(),j=function(){var e=function e(){Object(d.a)(this,e)};return e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac=function(n){return new(n||e)}}),e}(),O=function(){var e=function(){function e(){Object(d.a)(this,e)}return Object(v.a)(e,null,[{key:"forRoot",value:function(){return{ngModule:e,providers:[x,w,{provide:g,useClass:j}]}}}]),e}();return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(n){return new(n||e)},providers:[k]}),e}(),E={provide:g,useClass:function(){var e=function(){function e(n){Object(d.a)(this,e),this.translate=n}return Object(v.a)(e,[{key:"instant",value:function(e){return e?this.translate.instant(e):e}},{key:"getTranslatedColumn",value:function(){var e,n=null!==(e=this.translate.currentLang)&&void 0!==e?e:this.translate.defaultLang;if(null==n)throw new Error("Not found lang");return this.translate.getTranslation(n)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(o.Sb(y.c))},e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac}),e}()},N=t("cgGC"),W=t("8EXQ"),T=function(){function e(e,n){this.excel=e,this.translate=n,this.data=[{id:"id",name:"Maria",info:{value:1,other:2},excluded:"excluded",description:"Fugiat tempor sunt nostrud ad fugiat. Laboris velit duis incididunt culpa"}],this.translate.setDefaultLang("ru")}return e.prototype.exportExcel=function(){this.excel.exportExcel({filename:"My excel file",worksheets:[{entries:this.data,worksheetName:"worksheet name",excludeKeys:["excluded"]}]})},e.prototype.exportExcelWithI18n=function(){this.excel.exportExcel({filename:"APP_KEYS.TITLE",worksheets:[{entries:this.data,prefixKeyForTranslate:"APP_KEYS.MODELS",worksheetName:"APP_KEYS.WORKSHEET_NAME",keys:["info.value","description","name"],excludeKeys:["description"]}]})},e.\u0275fac=function(n){return new(n||e)(o.Lb(x),o.Lb(y.c))},e.\u0275cmp=o.Fb({type:e,selectors:[["app-root"]],decls:51,vars:0,consts:[[1,"dashboard"],["mode","side","opened","",1,"dashboard__menu"],[1,"title"],["src","assets/img/angular.svg","alt","angular",1,"logo"],["routerLink","/",1,"logo-title"],[1,"menu"],[1,"menu__item"],["routerLink","/"],[1,"dashboard__content"],[1,"dashboard__content-examples"],["mat-button","","mat-stroked-button","",3,"click"]],template:function(e,n){1&e&&(o.Ob(0,"mat-drawer-container",0),o.jc(1,"\n    "),o.Ob(2,"mat-drawer",1),o.jc(3,"\n        "),o.Ob(4,"mat-toolbar",2),o.jc(5,"\n            "),o.Mb(6,"img",3),o.jc(7,"\n            "),o.Ob(8,"a",4),o.jc(9,"@angular-ru/ng-excel-builder"),o.Nb(),o.jc(10,"\n        "),o.Nb(),o.jc(11,"\n\n        "),o.Ob(12,"mat-list",5),o.jc(13,"\n            "),o.Ob(14,"mat-list-item",6),o.jc(15,"\n                "),o.Ob(16,"a",7),o.jc(17,"- "),o.Ob(18,"strong"),o.jc(19,"Guide overview"),o.Nb(),o.Nb(),o.jc(20,"\n            "),o.Nb(),o.jc(21,"\n            "),o.Mb(22,"mat-divider"),o.jc(23,"\n        "),o.Nb(),o.jc(24,"\n    "),o.Nb(),o.jc(25,"\n\n    "),o.Ob(26,"mat-drawer-content",8),o.jc(27,"\n        "),o.Ob(28,"div",9),o.jc(29,"\n            "),o.Ob(30,"div"),o.jc(31,"\n                "),o.Ob(32,"h3"),o.jc(33,"Export excel"),o.Nb(),o.jc(34,"\n                "),o.Ob(35,"button",10),o.Vb("click",function(){return n.exportExcel()}),o.jc(36,"Export excel"),o.Nb(),o.jc(37,"\n            "),o.Nb(),o.jc(38,"\n\n            "),o.Ob(39,"div"),o.jc(40,"\n                "),o.Ob(41,"h3"),o.jc(42,"Export with i18n (lang: ru)"),o.Nb(),o.jc(43,"\n                "),o.Ob(44,"button",10),o.Vb("click",function(){return n.exportExcelWithI18n()}),o.jc(45,"Export excel"),o.Nb(),o.jc(46,"\n            "),o.Nb(),o.jc(47,"\n        "),o.Nb(),o.jc(48,"\n    "),o.Nb(),o.jc(49,"\n"),o.Nb(),o.jc(50,"\n"))},directives:[s.b,s.a,u.a,f.a,c.a,c.b,W.a,s.c,a.a],styles:[""],encapsulation:2,changeDetection:0}),e}();function C(e){return new N.a(e,"./assets/i18n/",".json")}var S=function(){function e(){}return e.\u0275mod=o.Jb({type:e,bootstrap:[T]}),e.\u0275inj=o.Ib({factory:function(n){return new(n||e)},providers:[E],imports:[[r.a,c.c,i.b,u.b,s.d,a.b,l.b,y.b.forRoot({loader:{deps:[i.a],provide:y.a,useFactory:C}}),f.b.forRoot([]),O.forRoot()]]}),e}();Object(o.T)(),r.b().bootstrapModule(S).catch(function(e){return console.error(e)})},zn8P:function(e,n){function t(e){return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id="zn8P"}},[[0,0,5]]]);