/*! 作者：xulayen 模版地址：https://github.com/xulayen/webpack-for-react-template */
webpackJsonp([1],{"/X48":function(e,t,n){"use strict";var o=n("vzCy").EventEmitter,u=n("BEQ0")({},o.prototype,{items:[],getAll:function(){return this.items},addNewItemHandler:function(e){console.log("addNewItemHandler"),this.items.push(e)},emitChange:function(){console.log("emitChange"),this.emit("change")},addChangeListener:function(e){console.log("addChangeListener"),this.on("change",e)},removeChangeListener:function(e){console.log("removeChangeListener"),this.removeListener("change",e)}});e.exports=u},"1wES":function(e,t,n){e.exports=n.p+"static/data/video/wild.3fecaab2c4e4f9a6ff2e094069388b17.mp4"},"9TkQ":function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MyButtonController=void 0;var u=o(n("Zx67")),l=o(n("Zrlr")),a=o(n("wxAW")),r=o(n("zwoO")),i=o(n("Pf15")),c=o(n("GiK3")),s=o(n("/X48")),d=o(n("twZC")),f=n("bUlW"),m=function(t){function n(e){(0,l.default)(this,n);var t=(0,r.default)(this,(n.__proto__||(0,u.default)(n)).call(this,e));return t.state={items:s.default.getAll()},t}return(0,i.default)(n,t),(0,a.default)(n,[{key:"componentDidMount",value:function(){console.log(e("   7788            ")),s.default.addChangeListener(this._onChange.bind(this))}},{key:"componentWillUnmount",value:function(){s.default.removeChangeListener(this._onChange.bind(this))}},{key:"_onChange",value:function(){console.log("_onChange"),console.log(s.default.getAll()),this.setState({items:s.default.getAll()})}},{key:"createNewItem",value:function(e){console.log("createNewItem"),d.default.addNewItem("new item")}},{key:"render",value:function(){return c.default.createElement(f.MyButton,{items:this.state.items,onClick:this.createNewItem.bind(this)})}}]),n}(c.default.Component);t.MyButtonController=m}).call(t,n("7t+N").trim)},bUlW:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MyButton=void 0;var u=o(n("Zx67")),l=o(n("Zrlr")),a=o(n("wxAW")),r=o(n("zwoO")),i=o(n("Pf15")),c=o(n("GiK3")),s=function(t){function n(t){(0,l.default)(this,n);var o=(0,r.default)(this,(n.__proto__||(0,u.default)(n)).call(this,t));console.log("MyButton.constructor"),console.log(o.props.items);var a=o;return e.ajax({url:"/gettoken",method:"post",type:"json",success:function(e){console.log(e),a.state={token:e}}}),o}return(0,i.default)(n,t),(0,a.default)(n,[{key:"submit",value:function(){e.ajax({url:"/index",method:"post",type:"json",headers:{Authorization:this.state.token},success:function(e){e.code,console.log(e)}})}},{key:"render",value:function(){return c.default.createElement("div",{className:"btnlogin"},c.default.createElement("ul",null,this.props.items.map(function(e,t){return c.default.createElement("li",{key:t},e)})),c.default.createElement("button",{onClick:this.props.onClick},"New Item"),c.default.createElement("form",null,"puizzzz",c.default.createElement("input",{type:"button",value:"提  交",onClick:this.submit.bind(this)})))}}]),n}(c.default.Component);t.MyButton=s}).call(t,n("7t+N"))},gnkm:function(e,t,n){e.exports=n.p+"static/data/music/music.ae566a177249a69b6e69380425f56b8b.mp3"},lVK7:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var u=o(n("GiK3")),l=o(n("O27J")),a=n("F8kA");n("uYw/");o(n("7t+N"));n("z8Ob");var r=n("tTFe"),i=document.createElement("div");i.id="content",document.body.appendChild(i);var c=a.BrowserRouter;console.info("production env use nodejs server,so use BrowserRouter to router"),c=a.BrowserRouter;l.default.render(u.default.createElement(function(){return u.default.createElement(c,{basename:"/"},u.default.createElement("div",null,u.default.createElement(a.Route,{exact:!0,path:"/",render:function(e,t){return u.default.createElement(r.IndexPage,null)}}),u.default.createElement(a.Route,{exact:!0,path:"/other",render:function(e,t){return u.default.createElement("div",null,"other Route")}})))},null),i)},svz8:function(e,t,n){e.exports=n.p+"static/data/video/wild.ca13446c64e898a14ef404dfcb24f9ff.webm"},tTFe:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.IndexPage=void 0;var u=o(n("Zx67")),l=o(n("Zrlr")),a=o(n("wxAW")),r=o(n("zwoO")),i=o(n("Pf15")),c=o(n("GiK3")),s=n("9TkQ"),d=o(n("1wES")),f=o(n("svz8")),m=o(n("gnkm")),p=function(e){function t(e){return(0,l.default)(this,t),(0,r.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e))}return(0,i.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("audio",{controls:"controls"},c.default.createElement("source",{src:m.default,type:"audio/mp3"}),"Your browser does not support this audio format."),c.default.createElement("div",{className:"videobg"},c.default.createElement("div",{className:"gridbg"}),c.default.createElement("video",{className:"video",loop:"loop",autoPlay:"autoplay"},c.default.createElement("source",{src:f.default,type:"video/webm"}),c.default.createElement("source",{src:d.default,type:"video/mp4"})),c.default.createElement(s.MyButtonController,null)))}}]),t}(c.default.Component);t.IndexPage=p},twZC:function(e,t,n){"use strict";var o=n("u+2N"),u={addNewItem:function(e){o.dispatch({actionType:"ADD_NEW_ITEM",text:e})}};e.exports=u},"u+2N":function(e,t,n){"use strict";var o=new(0,n("y4y0").Dispatcher),u=n("/X48");o.register(function(e){switch(e.actionType){case"ADD_NEW_ITEM":u.addNewItemHandler(e.text),u.emitChange()}}),e.exports=o},"uYw/":function(e,t){},z8Ob:function(e,t,n){"use strict";(function(e){console.log(e("      99999966666666   8888       "))}).call(t,n("7t+N").trim)}},["lVK7"]);
//# sourceMappingURL=app.405ef1cff6af40af1db7.js.map