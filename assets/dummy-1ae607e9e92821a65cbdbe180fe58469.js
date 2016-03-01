"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,r){var l=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(l,r["default"].modulePrefix),e["default"]=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP.name,r=n["default"].APP.version;e["default"]=t["default"].extend({version:r,name:a})}),define("dummy/components/focusing-outlet",["exports","ember"],function(e,t){var n=0,a=function l(e){window.scrollTo(0,n),window.removeEventListener("scroll",l)},r=t["default"].Component.extend({_routing:t["default"].inject.service("-routing"),positionalParams:["inputOutletName"],tagName:"div",classNames:["focusing-outlet"],shouldFocus:!1,didReceiveAttrs:function(){this._super.apply(this,arguments),this.set("outletName",this.attrs.inputOutletName||"main")},didInsertElement:function(){this._super.apply(this,arguments),this.setFocus()},setFocus:function(){if(this.element){var e=this.get("shouldFocus");e?(this.element.setAttribute("tabindex","-1"),n=document.body.scrollTop,window.addEventListener("scroll",a),this.element.focus()):this.element.removeAttribute("tabindex")}},actions:{checkFocus:function(e){var n=this.get("outletName"),a=t["default"].getOwner(this)._stashedHandlerInfos.pivotHandler.handler.routeName,r=e[n].render.name,l=a===r;this.set("shouldFocus",l),this.setFocus()}}});r.reopenClass({positionalParams:["inputOutletName"]}),e["default"]=r}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/instance-initializers/ember-a11y",["exports","ember","ember-a11y/ember-internals","ember-a11y/utils/pivot-route-identifier"],function(e,t,n,a){function r(e){e._stashedHandlerInfos=l}e.initialize=r,(0,n.registerKeywords)();var l={};t["default"].Router.reopen({didTransition:function(e){var t=(0,a["default"])(l.handlerInfos,e);l.handlerInfos=e,l.pivotHandler=t,this._super.apply(this,arguments)}}),e["default"]={name:"ember-a11y",initialize:r}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("feed"),this.route("profile"),this.route("messages",function(){this.route("message",{path:"/:id"})})}),e["default"]=a}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.1",loc:{source:null,start:{line:4,column:8},end:{line:4,column:32}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Home");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.1",loc:{source:null,start:{line:5,column:8},end:{line:5,column:39}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Messages");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.1",loc:{source:null,start:{line:6,column:8},end:{line:6,column:31}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Feed");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.1",loc:{source:null,start:{line:7,column:8},end:{line:7,column:37}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Profile");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.4.1",loc:{source:null,start:{line:1,column:0},end:{line:11,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),a=e.createTextNode("Social Network");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("nav"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("ul"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("li"),l=e.createComment("");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("li"),l=e.createComment("");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("li"),l=e.createComment("");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("li"),l=e.createComment("");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2,1]),r=new Array(5);return r[0]=e.createMorphAt(e.childAt(a,[1]),0,0),r[1]=e.createMorphAt(e.childAt(a,[3]),0,0),r[2]=e.createMorphAt(e.childAt(a,[5]),0,0),r[3]=e.createMorphAt(e.childAt(a,[7]),0,0),r[4]=e.createMorphAt(t,4,4,n),r},statements:[["block","link-to",["index"],[],0,null,["loc",[null,[4,8],[4,44]]]],["block","link-to",["messages"],[],1,null,["loc",[null,[5,8],[5,51]]]],["block","link-to",["feed"],[],2,null,["loc",[null,[6,8],[6,43]]]],["block","link-to",["profile"],[],3,null,["loc",[null,[7,8],[7,49]]]],["content","focusing-outlet",["loc",[null,[10,0],[10,19]]]]],locals:[],templates:[e,t,n,a]}}())}),define("dummy/templates/components/focusing-outlet",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.4.1",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"dummy/templates/components/focusing-outlet.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["inline","outlet",[["get","outletName",["loc",[null,[2,11],[2,21]]]]],[],["loc",[null,[2,2],[2,23]]]]],locals:["outletState"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.4.1",loc:{source:null,start:{line:1,column:0},end:{line:3,column:21}},moduleName:"dummy/templates/components/focusing-outlet.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","get-outlet-state",[["get","outletName",["loc",[null,[1,21],[1,31]]]]],[],0,null,["loc",[null,[1,0],[3,21]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/feed",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.4.1",loc:{source:null,start:{line:1,column:0},end:{line:6,column:5}},moduleName:"dummy/templates/feed.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),a=e.createTextNode("Feed");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("ul");e.setAttribute(n,"role","group");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("This is a feed item.");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("This is a feed item.");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("This is a feed item.");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),a=e.createTextNode("Home Page");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/messages/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.1",loc:{source:null,start:{line:3,column:6},end:{line:3,column:68}},moduleName:"dummy/templates/messages/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Conversation with Jimmy");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.1",loc:{source:null,start:{line:4,column:6},end:{line:4,column:70}},moduleName:"dummy/templates/messages/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Conversation with Johnny");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.1",loc:{source:null,start:{line:5,column:6},end:{line:5,column:66}},moduleName:"dummy/templates/messages/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Conversation with Jeff");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.4.1",loc:{source:null,start:{line:1,column:0},end:{line:7,column:0}},moduleName:"dummy/templates/messages/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),a=e.createTextNode("Messages");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("ul");e.setAttribute(n,"role","group");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createComment("");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createComment("");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createComment("");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),r=new Array(3);return r[0]=e.createMorphAt(e.childAt(a,[1]),0,0),r[1]=e.createMorphAt(e.childAt(a,[3]),0,0),r[2]=e.createMorphAt(e.childAt(a,[5]),0,0),r},statements:[["block","link-to",["messages.message","Jimmy"],[],0,null,["loc",[null,[3,6],[3,80]]]],["block","link-to",["messages.message","Johnny"],[],1,null,["loc",[null,[4,6],[4,82]]]],["block","link-to",["messages.message","Jeff"],[],2,null,["loc",[null,[5,6],[5,78]]]]],locals:[],templates:[e,t,n]}}())}),define("dummy/templates/messages/message",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.1",loc:{source:null,start:{line:2,column:0},end:{line:2,column:44}},moduleName:"dummy/templates/messages/message.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Back to message list.");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.4.1",loc:{source:null,start:{line:1,column:0},end:{line:9,column:0}},moduleName:"dummy/templates/messages/message.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),a=e.createTextNode("Messages in thread");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("ul");e.setAttribute(n,"role","group");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("This is a message content.");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("This is a message content.");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("This is a message content.");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("This is a message content.");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,n),a},statements:[["block","link-to",["messages"],[],0,null,["loc",[null,[2,0],[2,56]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/messages",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.4.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/messages.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","focusing-outlet",["loc",[null,[1,0],[1,19]]]]],locals:[],templates:[]}}())}),define("dummy/templates/profile",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.4.1",loc:{source:null,start:{line:1,column:0},end:{line:13,column:0}},moduleName:"dummy/templates/profile.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),a=e.createTextNode("John Doe");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("John Doe is a developer at BigCo");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("h3"),a=e.createTextNode("Summary");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("ul");e.setAttribute(n,"role","group");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("this is a detail about John Doe");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("this is a detail about John Doe");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("li"),r=e.createTextNode("this is a detail about John Doe");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("h3"),a=e.createTextNode("Education");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("John Doe is well-educated.");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("h3"),a=e.createTextNode("Skills");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("John Doe has no skills.");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/utils/pivot-route-identifier",["exports","ember-a11y/utils/pivot-route-identifier"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-a11y",version:"0.1.2+03a0b0cb"});