webpackJsonp([1],{"8+Gi":function(e,t){},Ah0x:function(e,t){},DKZk:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),a={name:"App",mounted:function(){window.onload=function(){document.onkeydown=function(){var e=window.event||arguments[0];return 123!=e.keyCode&&((!e.ctrlKey||!e.shiftKey||73!=e.keyCode)&&((!e.shiftKey||121!=e.keyCode)&&void 0))},document.oncontextmenu=function(){return!1}}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")(a,i,!1,function(e){n("fbKZ")},null,null).exports,o=n("zL8q"),l=n.n(o),c=(n("tvR6"),n("/ocq")),u={name:"ElHeader",componentName:"ElHeader",props:{height:{type:String,default:"60px"}}},d={render:function(){var e=this.$createElement;return(this._self._c||e)("header",{staticClass:"el-header",style:{height:this.height}},[this._t("default")],2)},staticRenderFns:[]},h=n("VU/8")(u,d,!1,null,null,null).exports,f={name:"ElAside",componentName:"ElAside",props:{width:{type:String,default:"300px"}}},v={render:function(){var e=this.$createElement;return(this._self._c||e)("aside",{staticClass:"el-aside",style:{width:this.width}},[this._t("default")],2)},staticRenderFns:[]},m=n("VU/8")(f,v,!1,null,null,null).exports,p={render:function(){var e=this.$createElement;return(this._self._c||e)("main",{staticClass:"el-main"},[this._t("default")],2)},staticRenderFns:[]},_=n("VU/8")({name:"ElMain",componentName:"ElMain"},p,!1,null,null,null).exports,x={name:"ElFooter",componentName:"ElFooter",props:{height:{type:String,default:"60px"}}},b={render:function(){var e=this.$createElement;return(this._self._c||e)("footer",{staticClass:"el-footer",style:{height:this.height}},[this._t("default")],2)},staticRenderFns:[]},g=n("VU/8")(x,b,!1,null,null,null).exports,E={components:{IEcharts:n("Z1Ko").a},data:function(){return{loading:!1,bar:{title:{text:""},tooltip:{},xAxis:{data:["Shirt","Sweater","Chiffon Shirt","Pants","High Heels","Socks"]},yAxis:{},series:[{name:"Sales",type:"bar",data:[5,20,36,10,10,20]}]}}},methods:{doRandom:function(){for(var e=[],t=0;t<6;t++)e.push(Math.floor(95*Math.random()+5));this.loading=!this.loading,this.bar.series[0].data=e},onReady:function(e){},onClick:function(e,t,n){}}},C={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"echarts1"},[this._v("\n  1\n  ")])},staticRenderFns:[]};var w={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"echarts1"},[this._v("\n2\n    ")])},staticRenderFns:[]};var y={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"echarts1"},[this._v("\n    如需定制，请联系我们！\n")])},staticRenderFns:[]};var R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"aboutus"},[t("div",{staticClass:"title"},[t("h3",[this._v("本项目依赖于前端框架vue")])]),this._v(" "),t("p",{staticClass:"contentcommon"},[this._v("使用前请先对vue进行了解，本项目适合对vue有一定了解的开发人员使用！")]),this._v(" "),t("p",{staticClass:"contentcommon"},[this._v("xmi是基于vue.js进行扩展的常用移动端UI组件及pc端UI组件库。")]),this._v(" "),t("p",{staticClass:"contentcommon"},[this._v("xmi使用d3，echarts等开源工具，深度定制图表，实现数据可视化。")])])}]};var k={components:{ElFooter:g,ElMain:_,ElAside:m,ElHeader:h,echarts1:n("VU/8")(E,C,!1,function(e){n("DKZk")},"data-v-06fab406",null).exports,echarts2:n("VU/8")({},w,!1,function(e){n("Ah0x")},"data-v-43ab7d35",null).exports,echarts3:n("VU/8")({},y,!1,function(e){n("cp8r")},"data-v-466b48be",null).exports,aboutus:n("VU/8")({},R,!1,function(e){n("mbJi")},"data-v-7d31c555",null).exports},name:"HelloWorld",data:function(){return{activeIndex:"1",activeIndex2:"1",current:"aboutus"}},methods:{handleSelect:function(e,t){switch(e){case"1":console.log(e,t),this.current="aboutus";break;case"2":console.log(e,t),this.current="echarts1";break;case"3":console.log(e,t),this.current="echarts2";break;case"4":console.log(e,t),this.current="echarts3";break;case"5":console.log(e,t)}},handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},F={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("el-header",{staticClass:"defined-header"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[e._v("关于")]),e._v(" "),n("el-menu-item",{attrs:{index:"2"}},[e._v("图表可视化")]),e._v(" "),n("el-menu-item",{attrs:{index:"3"}},[e._v("公众版组件")]),e._v(" "),n("el-menu-item",{attrs:{index:"4"}},[e._v("定制版本")]),e._v(" "),n("el-menu-item",{attrs:{index:"5"}},[e._v("专业版")])],1),e._v(" "),n("div",{staticStyle:{clear:"both",overflow:"hidden"}})],1),e._v(" "),n("el-container",{staticClass:"defined-container"},[n("el-main",[n(e.current,{tag:"component"})],1)],1),e._v(" "),n("el-footer",{staticClass:"defined-footer bg-purple-light"},[n("div",[e._v("版权所有 © www.midaiwu.top")])])],1)},staticRenderFns:[]};var U=n("VU/8")(k,F,!1,function(e){n("8+Gi")},"data-v-fed9fbd8",null).exports;s.default.use(c.a);var S=new c.a({routes:[{path:"/",name:"HelloWorld",component:U}]});s.default.use(l.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:S,components:{App:r},template:"<App/>"})},cp8r:function(e,t){},fbKZ:function(e,t){},mbJi:function(e,t){},tvR6:function(e,t){}},["NHnr"]);