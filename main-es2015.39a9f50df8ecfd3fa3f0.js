(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,n){e.exports=n("2v48")},"2v48":function(e,t,n){"use strict";n.r(t);var r=n("ENSU"),o=n("kZht");function s(e){const t="string"==typeof e?e.trim():e;return[void 0,null,NaN,"","null",1/0].includes(t)}function i(e){return null==e}function a(e){return!i(e)}var l=n("6uGs"),c=n("hCLc"),u=n("uryd"),d=n("P0vk"),h=n("aJOL"),m=n("FxgA"),p=n("1VvW"),b=n("ROBh"),f=n("D57K"),v=(n("pTnX"),n("An66"));function y(e,t={}){var n,r;const o=null!=e?e:(new Date).getTime(),s=null!==(n=t.format)&&void 0!==n?n:"dd.MM.yyyy HH:mm:ss";return null!==(r=new v.d("en-US").transform(o,s,t.timezone))&&void 0!==r?r:""}new o.r("Suggestion strategy map"),new o.r("Days count for date suggestion");let k=(()=>{class e{constructor(){this.workerFunctionToUrlMap=new WeakMap,this.promiseToWorkerMap=new WeakMap}static createWorkerUrl(e){const t=e.toString(),n=new Blob([`\n            self.addEventListener('message', function(e) {\n                postMessage((${t})(e.data));\n            });\n        `],{type:"text/javascript"});return URL.createObjectURL(n)}run(e,t){const n=this.getOrCreateWorkerUrl(e);return this.runUrl(n,t)}runUrl(e,t){const n=new Worker(e),r=this.createPromiseForWorker(n,t),o=this.createPromiseCleaner(r);return this.promiseToWorkerMap.set(r,n),r.then(o).catch(o),r}terminate(e){return this.removePromise(e)}getWorker(e){return this.promiseToWorkerMap.get(e)}createPromiseForWorker(e,t){return new Promise((n,r)=>{e.addEventListener("message",e=>n(e.data)),e.addEventListener("error",r),e.postMessage(t)})}getOrCreateWorkerUrl(t){if(!this.workerFunctionToUrlMap.has(t)){const n=e.createWorkerUrl(t);return this.workerFunctionToUrlMap.set(t,n),n}return this.workerFunctionToUrlMap.get(t)}createPromiseCleaner(e){return t=>(this.removePromise(e),t)}removePromise(e){const t=this.promiseToWorkerMap.get(e);return a(t)&&t.terminate(),this.promiseToWorkerMap.delete(e),e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac}),e})(),g=(()=>{class e{constructor(e){this.webWorker=e}composeSingle(e,t){return Object(f.a)(this,void 0,void 0,function*(){const[n]=yield this.compose([e],t);return null!=n?n:{}})}compose(e,t){return this.webWorker.run(e=>{class t{constructor(e){this.rules=e,this.keySet=new Set}static isObject(e){return"object"==typeof e&&null!==e}toPlain(e){var t,n;this.keySet.clear();const r=e.map(e=>this.flattenAndClean(e)),o=null!==(n=null===(t=this.rules)||void 0===t?void 0:t.includeKeys)&&void 0!==n?n:Array.from(this.keySet);return r.map(e=>this.pickKeys(e,o))}flattenAndClean(e,n=""){const r={};return Object.keys(e).forEach(o=>{const s=n?`${n}.${o}`:o;if(this.passesBlacklist(s))if(t.isObject(e[o])){const t=this.flattenAndClean(e[o],s);Object.assign(r,t)}else this.keySet.add(s),r[s]=e[o]}),r}pickKeys(e,t){return t.reduce((t,n)=>(t[n]=e[n],t),{})}passesBlacklist(e){var t;return!(null===(t=this.rules)||void 0===t?void 0:t.excludeKeys)||!this.rules.excludeKeys.includes(e)}}return new t(e.rules).toPlain(e.entries)},{rules:t,entries:e})}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(k))},e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac}),e})(),w=(()=>{class e{static forRoot(){return{ngModule:e,providers:[g]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({providers:[k]}),e})();var x=n("aDqW");let W=(()=>{class e{constructor(e,t){this.plainTableComposer=e,this.webWorker=t}static downloadWorkbook(e,t){!function(e){if(function(...e){return e.every(s)}(e.name,e.extension))throw new Error("File name or file extension must be provided");const t=document.createElement("a"),n=window.URL.createObjectURL(e.blob),r=[e.name,e.extension].filter(Boolean).join(".");t.href=n,t.download=r,t.click(),window.URL.revokeObjectURL(n)}({blob:e,name:`${t}.${y()}`,extension:"xls"})}exportExcelByWorkbook(t){return Object(f.a)(this,void 0,void 0,function*(){const n=yield this.prepareWorkbook(t);this.webWorker.run(e=>{class t{constructor(e,t){this.sizes=e,this.flattenTranslatedKeys=t}static generateWorkbook(e){return`\n                            <?xml version="1.0"?>\n                            <?mso-application progid="Excel.Sheet"?>\n                            <Workbook\n                                xmlns="urn:schemas-microsoft-com:office:spreadsheet"\n                                xmlns:o="urn:schemas-microsoft-com:office:office"\n                                xmlns:x="urn:schemas-microsoft-com:office:excel"\n                                xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"\n                                xmlns:html="https://www.w3.org/TR/html40/"\n                            >\n                                ${t.commonStyles}\n                                ${e}\n                            </Workbook>`}static renderCell(e,t){const n="number"==typeof e?"Number":"String";let r=function(e){const t="string"==typeof e?e.trim():e;return[void 0,null,NaN,"","null",1/0].includes(t)}(e)?"-":e;return"string"==typeof r&&(r=r.trim(),r=r.replace(/[<>]/g,"")),`<Cell ss:StyleID="${t}"><Data ss:Type="${n}">${r}</Data></Cell>`}static isFilled(e){return"string"==typeof e&&e.length>0}buildWorkbook(e){const n=this.generateWorksheets(e);return t.generateWorkbook(n)}generateWorksheets(e){return e.map(e=>this.generateWorksheet(e)).join("")}generateWorksheet(e){const{minColumnWidth:t,rowHeight:n}=this.sizes,r=this.generateColumnsDescriptor(e),o=this.generateBodyRows(e.flatEntries);return`\n                        <Worksheet ss:Name="${e.worksheetName}">\n                            <Table ss:DefaultColumnWidth="${t}" ss:DefaultRowHeight="${n}">\n                                ${r}\n                                ${o}\n                            </Table>\n                        </Worksheet>`}generateColumnsDescriptor(e){var n;const{flatEntries:r,columnParameters:o,prefixKeyForTranslate:s}=e,i=Object.keys(null!==(n=null==r?void 0:r[0])&&void 0!==n?n:[]);let a="",l="";return i.forEach(e=>{const n=this.getTranslatedTitle(e,s),i=this.getWidthOfColumn(e,r,null==o?void 0:o[e]);a+=`<Column ss:Width="${i}" />`,l+=t.renderCell(n,"HeadCellStyle")}),`\n                            ${a}\n                            <Row>${l}</Row>`}getWidthOfColumn(e,t,n){const{minColumnWidth:r}=this.sizes;return"MAX_WIDTH"===(null==n?void 0:n.width)?this.calcMaxWidthByEntries(t,e):"number"==typeof(null==n?void 0:n.width)?n.width:r}calcMaxWidthByEntries(e,t){return e.reduce((e,n)=>{var r,o;const s=(null!==(o=null===(r=n[t])||void 0===r?void 0:r.toString())&&void 0!==o?o:"").length;return Math.max(s,e)},0)*this.sizes.fontWidth}getTranslatedTitle(e,n){var r;const o=t.isFilled(n)?`${n}.${e}`:e;return null!==(r=this.flattenTranslatedKeys[o])&&void 0!==r?r:e}generateBodyRows(e){const{rowHeight:t}=this.sizes;return e.map(e=>{const n=this.generateCells(e);return`<Row ss:Height="${t}">${n}</Row>`}).join("")}generateCells(e){const{fontWidth:n,minColumnWidth:r}=this.sizes;return Object.keys(e).map(o=>{const s=e[o],i=String(s).length;return t.renderCell(s,i*n>=r?"CellBigDataStyle":"BodyCellStyle")}).join("")}}t.commonBorderStyles='\n                        <Borders>\n                            <Border ss:Position="Top" ss:Color="#000000" ss:LineStyle="Continuous" ss:Weight="1"/>\n                            <Border ss:Position="Bottom" ss:Color="#000000" ss:LineStyle="Continuous" ss:Weight="1"/>\n                            <Border ss:Position="Right" ss:Color="#000000" ss:LineStyle="Continuous" ss:Weight="1"/>\n                            <Border ss:Position="Left" ss:Color="#000000" ss:LineStyle="Continuous" ss:Weight="1"/>\n                        </Borders>',t.commonStyles=`\n                        <Styles>\n                            <Style ss:ID="HeadCellStyle">\n                                <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="0" />\n                                <Font ss:Bold="1" ss:FontName="Arial" />\n                                ${t.commonBorderStyles}\n                            </Style>\n                            <Style ss:ID="CellBigDataStyle">\n                                <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1" />\n                                <Font ss:Bold="0" ss:FontName="Arial" />\n                                ${t.commonBorderStyles}\n                            </Style>\n                            <Style ss:ID="BodyCellStyle">\n                                <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="0" />\n                                <Font ss:Bold="0" ss:FontName="Arial" />\n                                ${t.commonBorderStyles}\n                            </Style>\n                        </Styles>`;const n=new t({fontWidth:6,fontSize:7,minColumnWidth:150,rowHeight:40},e.preparedTranslatedKeys).buildWorkbook(e.worksheets);return new Blob(["\ufeff",n],{type:"application/vnd.ms-excel;charset=UTF-8"})},n).then(n=>e.downloadWorkbook(n,t.filename))})}prepareWorkbook(e){return Object(f.a)(this,void 0,void 0,function*(){const t=[];for(const r of e.worksheets){let e=[];a(r.entries)&&(e=yield this.plainTableComposer.compose(r.entries,{includeKeys:r.keys,excludeKeys:r.excludeKeys})),t.push(Object.assign(Object.assign({},r),{flatEntries:e}))}const n=e.translatedKeys?yield this.plainTableComposer.composeSingle(e.translatedKeys):{};return Object.assign(Object.assign({},e),{worksheets:t,preparedTranslatedKeys:n})})}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(g),o.Sb(k))},e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac}),e})();const j=new o.r("EXCEL_BUILDER_INTERCEPTOR_TOKEN");let C=(()=>{class e{constructor(e,t){this.interceptor=e,this.builder=t}exportExcel(e){this.getTranslatedColumn().toPromise().then(t=>{var n;this.builder.exportExcelByWorkbook({filename:this.interceptFilename(e),worksheets:this.interceptWorksheets(e),translatedKeys:null!==(n=null!=t?t:e.translatedKeys)&&void 0!==n?n:{}})})}interceptFilename(e){var t,n,r,o;return null!==(o=null!==(r=null===(n=(t=this.interceptor).instant)||void 0===n?void 0:n.call(t,e.filename))&&void 0!==r?r:e.filename)&&void 0!==o?o:"UNKNOWN FILENAME"}interceptWorksheets(e){var t;return(null!==(t=e.worksheets)&&void 0!==t?t:[]).map(e=>{var t,n,r,o,s,i;const a=null!==(o=null!==(r=null===(n=null===(t=this.interceptor)||void 0===t?void 0:t.instant)||void 0===n?void 0:n.call(t,e.worksheetName))&&void 0!==r?r:e.worksheetName)&&void 0!==o?o:"UNKNOWN WORKSHEET NAME",l=null===(s=e.keys)||void 0===s?void 0:s.filter(function(e){const t=Array.isArray(e)?e:[e];return function(e){return!t.includes(e)}}(null!==(i=e.excludeKeys)&&void 0!==i?i:[]));return Object.assign(Object.assign({},e),{keys:l,worksheetName:a})})}getTranslatedColumn(){var e,t,n;return null!==(n=null===(t=null===(e=this.interceptor)||void 0===e?void 0:e.getTranslationMap)||void 0===t?void 0:t.call(e))&&void 0!==n?n:Object(b.a)(null)}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(j),o.Sb(W))},e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac}),e})(),S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac}),e})(),O=(()=>{class e{static forRoot(){return{ngModule:e,providers:[C,W,{provide:j,useClass:S}]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({providers:[k],imports:[[w.forRoot()]]}),e})();const E={provide:j,useClass:(()=>{class e{constructor(e){this.translate=e}instant(e){return a(e)?this.translate.instant(e):e}getTranslationMap(){var e;const t=null!==(e=this.translate.currentLang)&&void 0!==e?e:this.translate.defaultLang;if(i(t))throw new Error("Not found lang");return this.translate.getTranslation(t)}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(x.c))},e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac}),e})()};var T=n("cgGC"),N=n("8EXQ");let M=(()=>{class e{constructor(e,t){this.excel=e,this.translate=t,this.data=[{id:"id",name:"Maria",info:{value:1,other:2},excluded:"excluded",description:"Fugiat tempor sunt nostrud ad fugiat. Laboris velit duis incididunt culpa"}],this.translate.setDefaultLang("ru")}exportExcel(){this.excel.exportExcel({filename:"My excel file",worksheets:[{entries:this.data,worksheetName:"worksheet name",excludeKeys:["excluded"]}]})}exportExcelWithI18n(){this.excel.exportExcel({filename:"APP_KEYS.TITLE",worksheets:[{entries:this.data,prefixKeyForTranslate:"APP_KEYS.MODELS",worksheetName:"APP_KEYS.WORKSHEET_NAME",keys:["info.value","description","name"],excludeKeys:["description"]}]})}}return e.\u0275fac=function(t){return new(t||e)(o.Lb(C),o.Lb(x.c))},e.\u0275cmp=o.Fb({type:e,selectors:[["app-root"]],decls:51,vars:0,consts:[[1,"dashboard"],["mode","side","opened","",1,"dashboard__menu"],[1,"title"],["src","assets/img/angular.svg","alt","angular",1,"logo"],["routerLink","/",1,"logo-title"],[1,"menu"],[1,"menu__item"],["routerLink","/"],[1,"dashboard__content"],[1,"dashboard__content-examples"],["mat-button","","mat-stroked-button","",3,"click"]],template:function(e,t){1&e&&(o.Ob(0,"mat-drawer-container",0),o.jc(1,"\n    "),o.Ob(2,"mat-drawer",1),o.jc(3,"\n        "),o.Ob(4,"mat-toolbar",2),o.jc(5,"\n            "),o.Mb(6,"img",3),o.jc(7,"\n            "),o.Ob(8,"a",4),o.jc(9,"@angular-ru/ng-excel-builder"),o.Nb(),o.jc(10,"\n        "),o.Nb(),o.jc(11,"\n\n        "),o.Ob(12,"mat-list",5),o.jc(13,"\n            "),o.Ob(14,"mat-list-item",6),o.jc(15,"\n                "),o.Ob(16,"a",7),o.jc(17,"- "),o.Ob(18,"strong"),o.jc(19,"Guide overview"),o.Nb(),o.Nb(),o.jc(20,"\n            "),o.Nb(),o.jc(21,"\n            "),o.Mb(22,"mat-divider"),o.jc(23,"\n        "),o.Nb(),o.jc(24,"\n    "),o.Nb(),o.jc(25,"\n\n    "),o.Ob(26,"mat-drawer-content",8),o.jc(27,"\n        "),o.Ob(28,"div",9),o.jc(29,"\n            "),o.Ob(30,"div"),o.jc(31,"\n                "),o.Ob(32,"h3"),o.jc(33,"Export excel"),o.Nb(),o.jc(34,"\n                "),o.Ob(35,"button",10),o.Vb("click",function(){return t.exportExcel()}),o.jc(36,"Export excel"),o.Nb(),o.jc(37,"\n            "),o.Nb(),o.jc(38,"\n\n            "),o.Ob(39,"div"),o.jc(40,"\n                "),o.Ob(41,"h3"),o.jc(42,"Export with i18n (lang: ru)"),o.Nb(),o.jc(43,"\n                "),o.Ob(44,"button",10),o.Vb("click",function(){return t.exportExcelWithI18n()}),o.jc(45,"Export excel"),o.Nb(),o.jc(46,"\n            "),o.Nb(),o.jc(47,"\n        "),o.Nb(),o.jc(48,"\n    "),o.Nb(),o.jc(49,"\n"),o.Nb(),o.jc(50,"\n"))},directives:[d.b,d.a,h.a,p.a,u.a,u.b,N.a,d.c,c.a],styles:[""],encapsulation:2,changeDetection:0}),e})();function B(e){return new T.a(e,"./assets/i18n/",".json")}let K=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Jb({type:e,bootstrap:[M]}),e.\u0275inj=o.Ib({providers:[E],imports:[[r.a,u.c,l.b,h.b,d.d,c.b,m.b,x.b.forRoot({loader:{deps:[l.a],provide:x.a,useFactory:B}}),p.b.forRoot([]),O.forRoot()]]}),e})();Object(o.T)(),r.b().bootstrapModule(K).catch(e=>console.error(e))},zn8P:function(e,t){function n(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,0,5]]]);