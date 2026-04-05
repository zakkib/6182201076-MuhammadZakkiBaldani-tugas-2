System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,n,o,l,s,a,p,c,u,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,s=e.SpriteFrame,a=e.CCFloat,p=e.Collider2D,c=e.Contact2DType,u=e.Sprite,h=e.Component}],execute:function(){var d,v,g,f,m,y,B,C,b,T,R;o._RF.push({},"48698gqABtH+4cfOXbz6d3R","Bird",void 0);var z=l.ccclass,D=l.property;e("Bird",(d=z("Bird"),v=D({type:[s]}),g=D({type:[a]}),f=D({type:s}),m=D({type:s}),d((C=t((B=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return t=e.call.apply(e,[this].concat(o))||this,r(t,"spriteBird",C,n(t)),r(t,"scaleList",b,n(t)),r(t,"spriteBirdKuning",T,n(t)),r(t,"spriteBirdMerah",R,n(t)),t.listToRemove=[],t.level=0,t.node=void 0,t}i(t,e);var o=t.prototype;return o.start=function(){var e=this.getComponent(p);e&&(e.on(c.BEGIN_CONTACT,this.onBeginContact,this),e.on(c.END_CONTACT,this.onEndContact,this))},o.onBeginContact=function(e,i,r){if(e.group==i.group){var n=e.node.getComponent(t),o=i.node.getComponent(t);n&&o&&n.level==o.level&&(this.levelUp(),this.listToRemove.push(i.node))}},o.onEndContact=function(e,t,i){},o.levelUp=function(){this.level+1<this.spriteBird.length&&(this.level++,this.getComponent(u).spriteFrame=this.spriteBird[this.level%this.spriteBird.length],this.level<this.scaleList.length&&this.node.scale.multiplyScalar(this.scaleList[this.level]))},o.update=function(e){for(var t=0;t<this.listToRemove.length;t++)this.listToRemove[t].active=!1;this.listToRemove=[]},t}(h)).prototype,"spriteBird",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),b=t(B.prototype,"scaleList",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),T=t(B.prototype,"spriteBirdKuning",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=t(B.prototype,"spriteBirdMerah",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=B))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,n,o,i,a,c,l,p,s,u,f,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,c=t.Prefab,l=t.input,p=t.Input,s=t.instantiate,u=t.RigidBody2D,f=t.ERigidBody2DType,y=t.Component}],execute:function(){var d,h,b,g,m;i._RF.push({},"48ab1Pa7fBLY7q8cVOx8GWW","GameController",void 0);var v=a.ccclass,P=a.property;t("GameController",(d=v("GameController"),h=P({type:c}),d((m=e((g=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n(e,"birdPrefab",m,o(e)),e}r(e,t);var i=e.prototype;return i.start=function(){l.on(p.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(t){var e=s(this.birdPrefab),r=t.getUILocation();e.setParent(this.node),e.setWorldPosition(r.x,r.y,0),e.getComponent(u).type=f.Dynamic,e.getComponent(u).wakeUp()},i.update=function(t){},e}(y)).prototype,"birdPrefab",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=g))||b));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bird.ts","./GameController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});