"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[638],{623:function(t,n,e){e.d(n,{BG:function(){return v},Bt:function(){return h},wr:function(){return p},y:function(){return f},z1:function(){return i}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="https://api.themoviedb.org/3/",s="ce53439883ea43717bbee26a020ebf68",i=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,u.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&query=").concat(n,"&page=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(s));case 2:return n=t.sent,console.log(n.data),t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},638:function(t,n,e){e.r(n),e.d(n,{default:function(){return i}});var r=e(439),a=e(623),c={},u=e(791),o=e(689),s=e(184),i=function(){var t=(0,u.useState)([]),n=(0,r.Z)(t,2),e=n[0],i=n[1],p=(0,o.UO)().movieId;return(0,u.useEffect)((function(){(0,a.Bt)(p).then((function(t){i(t.results)}))}),[p]),(0,s.jsx)(u.Suspense,{children:(0,s.jsx)("ul",{className:c.list,children:0===e.length?(0,s.jsx)("p",{className:c.text,children:"We don't have any reviews for this movie"}):e.map((function(t){return(0,s.jsxs)("li",{className:c.item,children:[(0,s.jsxs)("h3",{children:["Author: ",t.author]}),(0,s.jsxs)("p",{className:c.content,children:["Character: ",t.content]})]},t.id)}))})})}}}]);
//# sourceMappingURL=638.575f855c.chunk.js.map