(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,n){e.exports=n("2v48")},"2v48":function(e,t,n){"use strict";n.r(t);var r,o=n("ENSU"),a=n("kZht"),i=n("6uGs"),c=n("hCLc"),s=n("uryd"),u=n("P0vk"),l=n("aJOL"),f=n("FxgA"),d=n("1VvW"),v=n("bI4O"),b=n("jg4I"),p=n("ROBh"),h=n("gCgJ"),y=(n("K8MB"),n("pTnX")),m=n("An66");function k(e){var t="string"==typeof e?e.trim():e;return[void 0,null,NaN,"","null",1/0].includes(t)}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return new Date(e.setHours(23,59,59,999))}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,n=new Date(t),r=n.getFullYear()+(e.years||0),o=n.getMonth()+(e.months||0),a=n.getDate()+(e.days||0),i=n.getHours()+(e.hours||0),c=n.getMinutes()+(e.minutes||0),s=n.getSeconds()+(e.seconds||0),u=n.getMilliseconds()+(e.milliseconds||0);return new Date(r,o,a,i,c,s,u)}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return new Date(e.setHours(0,0,0,0))}new a.r("Suggestion strategy map");var w=function(){var e=function(){function e(t){Object(v.a)(this,e),this.dateAdapter=t}return Object(b.a)(e,[{key:"updateIntervalFor",value:function(e,t){var n,r=t.dateFromKey,o=t.dateToKey,a=((new Date).getDay()+7-this.dateAdapter.getFirstDayOfWeek())%7;e.patchValue((n={},Object(h.a)(n,r,O(j({days:-a}))),Object(h.a)(n,o,g()),n))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Sb(y.a))},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac}),e}(),x=function(){var e=function(){function e(){Object(v.a)(this,e)}return Object(b.a)(e,[{key:"updateIntervalFor",value:function(e,t){var n,r=t.dateFromKey,o=t.dateToKey;e.patchValue((n={},Object(h.a)(n,r,O(e.value[r])),Object(h.a)(n,o,g(e.value[r])),n))}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac}),e}(),E=new a.r("Days count for date suggestion"),T=function(){var e=function(){function e(t){Object(v.a)(this,e),this.lastDaysCount=t}return Object(b.a)(e,[{key:"updateIntervalFor",value:function(e,t){var n,r=t.dateFromKey,o=t.dateToKey,a=-(this.lastDaysCount-1);e.patchValue((n={},Object(h.a)(n,r,O(j({days:a},e.value[o]))),Object(h.a)(n,o,g(e.value[o])),n))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Sb(E))},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac}),e}(),D=function(){var e=function(){function e(t){Object(v.a)(this,e),this.daysCount=t}return Object(b.a)(e,[{key:"updateIntervalFor",value:function(e,t){var n,r=t.dateFromKey,o=t.dateToKey,a=-(this.daysCount-1);e.patchValue((n={},Object(h.a)(n,r,O(j({days:a}))),Object(h.a)(n,o,g()),n))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Sb(E))},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac}),e}(),N=function(){var e=function(){function e(t){Object(v.a)(this,e),this.daysCount=t}return Object(b.a)(e,[{key:"updateIntervalFor",value:function(e,t){var n,r=t.dateFromKey,o=t.dateToKey,a=j({days:-this.daysCount});e.patchValue((n={},Object(h.a)(n,r,O(a)),Object(h.a)(n,o,g(a)),n))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Sb(E))},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac}),e}();function S(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null!=e?e:(new Date).getTime(),o=null!==(t=n.format)&&void 0!==t?t:"dd.MM.yyyy HH:mm:ss";return new m.d("en-US").transform(r,o,n.timezone)||""}r={},Object(h.a)(r,"TODAY",{strategy:N,providers:[{provide:E,useValue:0}]}),Object(h.a)(r,"YESTERDAY",{strategy:N,providers:[{provide:E,useValue:1}]}),Object(h.a)(r,"CALENDAR_WEEK",{strategy:w}),Object(h.a)(r,"LAST_3_DAYS",{strategy:D,providers:[{provide:E,useValue:3}]}),Object(h.a)(r,"LAST_7_DAYS",{strategy:D,providers:[{provide:E,useValue:7}]}),Object(h.a)(r,"LAST_99_DAYS",{strategy:D,providers:[{provide:E,useValue:99}]}),Object(h.a)(r,"FIRST_DAY_OF_INTERVAL",{strategy:x}),Object(h.a)(r,"LAST_99_DAYS_OF_INTERVAL",{strategy:T,providers:[{provide:E,useValue:99}]});var W=function(){var e=function(){function e(){Object(v.a)(this,e),this.workerFunctionToUrlMap=new WeakMap,this.promiseToWorkerMap=new WeakMap}return Object(b.a)(e,[{key:"run",value:function(e,t){var n=this.getOrCreateWorkerUrl(e);return this.runUrl(n,t)}},{key:"runUrl",value:function(e,t){var n=new Worker(e),r=this.createPromiseForWorker(n,t),o=this.createPromiseCleaner(r);return this.promiseToWorkerMap.set(r,n),r.then(o).catch(o),r}},{key:"terminate",value:function(e){return this.removePromise(e)}},{key:"getWorker",value:function(e){return this.promiseToWorkerMap.get(e)}},{key:"createPromiseForWorker",value:function(e,t){return new Promise(function(n,r){e.addEventListener("message",function(e){return n(e.data)}),e.addEventListener("error",r),e.postMessage(t)})}},{key:"getOrCreateWorkerUrl",value:function(t){if(!this.workerFunctionToUrlMap.has(t)){var n=e.createWorkerUrl(t);return this.workerFunctionToUrlMap.set(t,n),n}return this.workerFunctionToUrlMap.get(t)}},{key:"createPromiseCleaner",value:function(e){var t=this;return function(n){return t.removePromise(e),n}}},{key:"removePromise",value:function(e){var t=this.promiseToWorkerMap.get(e);return t&&t.terminate(),this.promiseToWorkerMap.delete(e),e}}],[{key:"createWorkerUrl",value:function(e){var t=e.toString(),n="\n            self.addEventListener('message', function(e) {\n                postMessage((".concat(t,")(e.data));\n            });\n        "),r=new Blob([n],{type:"text/javascript"});return URL.createObjectURL(r)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac}),e}(),A=n("aDqW"),C=function(){var e=function(){function e(t){Object(v.a)(this,e),this.webWorker=t}return Object(b.a)(e,[{key:"exportExcelByWorkbook",value:function(e){this.webWorker.run(function(e){var t,n,r,o,a={HEAD:"HeadCellStyle",BODY:"BodyCellStyle",BIG_DATA:"CellBigDataStyle"},i=(t=e.worksheets,n=l(e.translatedKeys),r=a,o="",t.forEach(function(e){var t=e.worksheetName,a=function(e,t,n){var r,o=l(t,e.excludeKeys);return((null===(r=e.keys)||void 0===r?void 0:r.length)?e.keys:Object.keys(o)).map(function(t){var r,o=void 0!==n["".concat(null==e?void 0:e.prefixKeyForTranslate,".").concat(t)]?n["".concat(null==e?void 0:e.prefixKeyForTranslate,".").concat(t)]:t;return r=t,f(o)!==f(r)?o:t})}(e,e.entries[0],n);o+='\n                          <Worksheet ss:Name="'.concat(t,'"><Table ss:DefaultColumnWidth="').concat(140,'" ss:DefaultRowHeight="').concat(40,'">').concat(function(e,t,n){return e.reduce(function(e,t){var n=7*t.length;return e+'<Column ss:Width="'.concat(n>140?n:140,'" />')},"")}(a),"\n                              ").concat(function(e,t,n,r,o,a,i){var s="";return t.forEach(function(t,r){var o=0===r?"\t<Row>".concat(function(e,t){return e.reduce(function(e,n){return e+c(n,t.HEAD)},"")}(n,i),"\t</Row>"):"";s+="".concat(o,'<Row ss:Height="').concat(40,'"> ').concat(function(e,t,n,r,o){return function(e,t,n,r,o){var a,i="";return((null===(a=e.keys)||void 0===a?void 0:a.length)?e.keys:Object.keys(t)).forEach(function(e){var n=String(t[e]).length;i+=c(t[e],5*n>=140?o.BIG_DATA:o.BODY)}),i}(e,l(t,e.excludeKeys),0,0,o)}(e,t,0,0,i),"  </Row>\n                                         ")}),s}(e,e.entries,a,0,0,0,r),"\n                            </Table> </Worksheet>\n                          ")}),o);function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"String",r="number"==typeof e?"Number":n,o=s(e,"-");return"string"==typeof o&&(o=(o=o.trim()).replace(/[<>]/g,"")),'<Cell ss:StyleID="'.concat(t,'"><Data ss:Type="').concat(r,'">').concat(o,"</Data></Cell>")}function s(e,t){return function(e){var t="string"==typeof e?e.trim():e;return[void 0,null,NaN,"","null",1/0].includes(t)}(e)?t:e}function u(e,t,n){if("object"==typeof e[n]&&null!==e[n]){var r=l(e[n]);for(var o in r)r.hasOwnProperty(o)&&(t["".concat(n,".").concat(o)]=r[o])}else t[n]=e[n]}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};for(var r in e)e.hasOwnProperty(r)&&!t.includes(r)&&u(e,n,r);return n}function f(e){return e.split(".").pop()}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:'<Font ss:Bold="0" ss:FontName="Arial" />';return"".concat(e,' <Borders><Border ss:Position="Bottom" ss:Color="#000000" ss:LineStyle="Continuous" ss:Weight="1"/><Border ss:Position="Right" ss:Color="#000000" ss:LineStyle="Continuous" ss:Weight="1"/></Borders>')}var v='\n                          <?xml version="1.0"?>\n                          <?mso-application progid="Excel.Sheet"?>\n                          <Workbook\n                           xmlns="urn:schemas-microsoft-com:office:spreadsheet"\n                           xmlns:o="urn:schemas-microsoft-com:office:office"\n                           xmlns:x="urn:schemas-microsoft-com:office:excel"\n                           xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"\n                           xmlns:html="https://www.w3.org/TR/html40/">\n                           <Styles>\n                            <Style ss:ID="'.concat(a.HEAD,'">\n                               <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="0" />\n                               ').concat(d('<Font ss:Bold="1" ss:FontName="Arial" />'),'\n                            </Style>\n                            <Style ss:ID="').concat(a.BIG_DATA,'">\n                               <Alignment ss:Horizontal="Left" ss:Vertical="Top" ss:WrapText="1" />\n                               ').concat(d(),'\n                            </Style>\n                            <Style ss:ID="').concat(a.BODY,'">\n                              <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="0" />\n                              ').concat(d(),"\n                            </Style>\n                          </Styles>\n                           ").concat(i,"\n                          </Workbook>\n                      ");return new Blob(["\ufeff",v],{type:"application/vnd.ms-excel;charset=UTF-8"})},e).then(function(t){return function(e){if(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.every(k)}(e.name,e.extension))throw new Error("File name or file extension must be provided");var t=document.createElement("a"),n=window.URL.createObjectURL(e.blob),r=[e.name,e.extension].filter(Boolean).join(".");t.href=n,t.download=r,t.click(),window.URL.revokeObjectURL(n)}({blob:t,name:"".concat(e.filename,".").concat(S()),extension:"xls"})})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Sb(W))},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac}),e}(),F=new a.r("EXCEL_BUILDER_INTERCEPTOR_TOKEN"),L=function(){var e=function(){function e(t,n){Object(v.a)(this,e),this.interceptor=t,this.builder=n}return Object(b.a)(e,[{key:"exportExcel",value:function(e){var t=this;this.getTranslatedColumn().toPromise().then(function(n){var r;t.builder.exportExcelByWorkbook({filename:t.interceptFilename(e),worksheets:t.interceptWorksheets(e),translatedKeys:null!==(r=null!=n?n:e.translatedKeys)&&void 0!==r?r:{}})})}},{key:"interceptFilename",value:function(e){var t,n,r,o;return null!==(o=null!==(r=null===(n=(t=this.interceptor).instant)||void 0===n?void 0:n.call(t,e.filename))&&void 0!==r?r:e.filename)&&void 0!==o?o:"UNKNOWN FILENAME"}},{key:"interceptWorksheets",value:function(e){var t,n=this;return(null!==(t=e.worksheets)&&void 0!==t?t:[]).map(function(e){var t,r,o,a,i,c=null!==(a=null!==(o=null===(r=null===(t=n.interceptor)||void 0===t?void 0:t.instant)||void 0===r?void 0:r.call(t,e.worksheetName))&&void 0!==o?o:e.worksheetName)&&void 0!==a?a:"UNKNOWN WORKSHEET NAME",s=null===(i=e.keys)||void 0===i?void 0:i.filter(function(t){var n,r;return!(null!==(r=null===(n=e.excludeKeys)||void 0===n?void 0:n.includes(t))&&void 0!==r&&r)});return Object.assign(Object.assign({},e),{keys:s,worksheetName:c})})}},{key:"getTranslatedColumn",value:function(){var e,t,n;return null!==(n=null===(t=null===(e=this.interceptor)||void 0===e?void 0:e.getTranslatedColumn)||void 0===t?void 0:t.call(e))&&void 0!==n?n:Object(p.a)(null)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Sb(F),a.Sb(C))},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac}),e}(),_=function(){var e=function e(){Object(v.a)(this,e)};return e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac=function(t){return new(t||e)}}),e}(),K=function(){var e=function(){function e(){Object(v.a)(this,e)}return Object(b.a)(e,null,[{key:"forRoot",value:function(){return{ngModule:e,providers:[L,C,{provide:F,useClass:_}]}}}]),e}();return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},providers:[W]}),e}(),M={provide:F,useClass:function(){var e=function(){function e(t){Object(v.a)(this,e),this.translate=t}return Object(b.a)(e,[{key:"instant",value:function(e){return e?this.translate.instant(e):e}},{key:"getTranslatedColumn",value:function(){var e,t=null!==(e=this.translate.currentLang)&&void 0!==e?e:this.translate.defaultLang;if(null==t)throw new Error("Not found lang");return this.translate.getTranslation(t)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Sb(A.c))},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac}),e}()},R=n("cgGC"),H=n("8EXQ"),I=function(){function e(e,t){this.excel=e,this.translate=t,this.data=[{id:"id",name:"Maria",info:{value:1,other:2},excluded:"excluded",description:"Fugiat tempor sunt nostrud ad fugiat. Laboris velit duis incididunt culpa"}],this.translate.setDefaultLang("ru")}return e.prototype.exportExcel=function(){this.excel.exportExcel({filename:"My excel file",worksheets:[{entries:this.data,worksheetName:"worksheet name",excludeKeys:["excluded"]}]})},e.prototype.exportExcelWithI18n=function(){this.excel.exportExcel({filename:"APP_KEYS.TITLE",worksheets:[{entries:this.data,prefixKeyForTranslate:"APP_KEYS.MODELS",worksheetName:"APP_KEYS.WORKSHEET_NAME",keys:["info.value","description","name"],excludeKeys:["description"]}]})},e.\u0275fac=function(t){return new(t||e)(a.Lb(L),a.Lb(A.c))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-root"]],decls:51,vars:0,consts:[[1,"dashboard"],["mode","side","opened","",1,"dashboard__menu"],[1,"title"],["src","assets/img/angular.svg","alt","angular",1,"logo"],["routerLink","/",1,"logo-title"],[1,"menu"],[1,"menu__item"],["routerLink","/"],[1,"dashboard__content"],[1,"dashboard__content-examples"],["mat-button","","mat-stroked-button","",3,"click"]],template:function(e,t){1&e&&(a.Ob(0,"mat-drawer-container",0),a.jc(1,"\n    "),a.Ob(2,"mat-drawer",1),a.jc(3,"\n        "),a.Ob(4,"mat-toolbar",2),a.jc(5,"\n            "),a.Mb(6,"img",3),a.jc(7,"\n            "),a.Ob(8,"a",4),a.jc(9,"@angular-ru/ng-excel-builder"),a.Nb(),a.jc(10,"\n        "),a.Nb(),a.jc(11,"\n\n        "),a.Ob(12,"mat-list",5),a.jc(13,"\n            "),a.Ob(14,"mat-list-item",6),a.jc(15,"\n                "),a.Ob(16,"a",7),a.jc(17,"- "),a.Ob(18,"strong"),a.jc(19,"Guide overview"),a.Nb(),a.Nb(),a.jc(20,"\n            "),a.Nb(),a.jc(21,"\n            "),a.Mb(22,"mat-divider"),a.jc(23,"\n        "),a.Nb(),a.jc(24,"\n    "),a.Nb(),a.jc(25,"\n\n    "),a.Ob(26,"mat-drawer-content",8),a.jc(27,"\n        "),a.Ob(28,"div",9),a.jc(29,"\n            "),a.Ob(30,"div"),a.jc(31,"\n                "),a.Ob(32,"h3"),a.jc(33,"Export excel"),a.Nb(),a.jc(34,"\n                "),a.Ob(35,"button",10),a.Vb("click",function(){return t.exportExcel()}),a.jc(36,"Export excel"),a.Nb(),a.jc(37,"\n            "),a.Nb(),a.jc(38,"\n\n            "),a.Ob(39,"div"),a.jc(40,"\n                "),a.Ob(41,"h3"),a.jc(42,"Export with i18n (lang: ru)"),a.Nb(),a.jc(43,"\n                "),a.Ob(44,"button",10),a.Vb("click",function(){return t.exportExcelWithI18n()}),a.jc(45,"Export excel"),a.Nb(),a.jc(46,"\n            "),a.Nb(),a.jc(47,"\n        "),a.Nb(),a.jc(48,"\n    "),a.Nb(),a.jc(49,"\n"),a.Nb(),a.jc(50,"\n"))},directives:[u.b,u.a,l.a,d.a,s.a,s.b,H.a,u.c,c.a],styles:[""],encapsulation:2,changeDetection:0}),e}();function P(e){return new R.a(e,"./assets/i18n/",".json")}var U=function(){function e(){}return e.\u0275mod=a.Jb({type:e,bootstrap:[I]}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},providers:[M],imports:[[o.a,s.c,i.b,l.b,u.d,c.b,f.b,A.b.forRoot({loader:{deps:[i.a],provide:A.a,useFactory:P}}),d.b.forRoot([]),K.forRoot()]]}),e}();Object(a.T)(),o.b().bootstrapModule(U).catch(function(e){return console.error(e)})},zn8P:function(e,t){function n(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,0,5]]]);