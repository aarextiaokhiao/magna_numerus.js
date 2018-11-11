//Start break_infinity.min.js code. Credit to Patashu for making this!
"use strict";var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(e){var t=function(e,t,n){if(null==e||null==t)return e;var a=String(e),i=a.length;if(i>=t)return a;var r=null==n?"":String(n);""===r&&(r=" ");for(var s=t-i;r.length<s;)r+=r;return a+(r.length>s?r.substr(0,s):r)};Math.log10=Math.log10||function(e){return Math.log(e)*Math.LOG10E},Number.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},Number.isSafeInteger=Number.isSafeInteger||function(e){return Number.isInteger(e)&&Math.abs(e)<=Number.MAX_SAFE_INTEGER},Math.trunc||(Math.trunc=function(e){return e=+e,isFinite(e)?e-e%1||(e<0?-0:0===e?e:0):e}),Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e});for(var n=17,a=9e15,i=-324,r=[],s=i+1;s<=308;s++)r.push(Number("1e"+s));var u=323,o=function(){function e(t){_classCallCheck(this,e),t instanceof e?this.fromDecimal(t):"number"==typeof t?this.fromNumber(t):"string"==typeof t?this.fromString(t):(this.mantissa=0,this.exponent=0)}return _createClass(e,[{key:"normalize",value:function(){if(0==this.mantissa)return this.mantissa=0,void(this.exponent=0);if(!(this.mantissa>=1&&this.mantissa<10)){var e=Math.floor(Math.log10(Math.abs(this.mantissa)));return this.mantissa=this.mantissa/r[e+u],this.exponent+=e,this}}},{key:"fromMantissaExponent",value:function(e,t){return isFinite(e)&&isFinite(t)||(e=Number.NaN,t=Number.NaN),this.mantissa=e,this.exponent=t,this.normalize(),this}},{key:"fromMantissaExponent_noNormalize",value:function(e,t){return this.mantissa=e,this.exponent=t,this}},{key:"fromDecimal",value:function(e){return this.mantissa=e.mantissa,this.exponent=e.exponent,this}},{key:"fromNumber",value:function(e){return isNaN(e)?(this.mantissa=Number.NaN,this.exponent=Number.NaN):e==Number.POSITIVE_INFINITY?(this.mantissa=1,this.exponent=a):e==Number.NEGATIVE_INFINITY?(this.mantissa=-1,this.exponent=a):0==e?(this.mantissa=0,this.exponent=0):(this.exponent=Math.floor(Math.log10(Math.abs(e))),this.exponent==i?this.mantissa=10*e/1e-323:this.mantissa=e/r[this.exponent+u],this.normalize()),this}},{key:"fromString",value:function(e){if(-1!=e.indexOf("e")){var t=e.split("e");this.mantissa=parseFloat(t[0]),this.exponent=parseFloat(t[1]),this.normalize()}else if("NaN"==e)this.mantissa=Number.NaN,this.exponent=Number.NaN;else if(this.fromNumber(parseFloat(e)),isNaN(this.mantissa))throw Error("[DecimalError] Invalid argument: "+e);return this}},{key:"fromValue",value:function(t){return t instanceof e?this.fromDecimal(t):"number"==typeof t?this.fromNumber(t):"string"==typeof t?this.fromString(t):(this.mantissa=0,this.exponent=0,this)}}]),_createClass(e,[{key:"toNumber",value:function(){if(!isFinite(this.exponent))return Number.NaN;if(this.exponent>308)return this.mantissa>0?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(this.exponent<i)return 0;if(this.exponent==i)return this.mantissa>0?5e-324:-5e-324;var e=this.mantissa*r[this.exponent+u];if(!isFinite(e)||this.exponent<0)return e;var t=Math.round(e);return Math.abs(t-e)<1e-10?t:e}},{key:"mantissaWithDecimalPlaces",value:function(e){if(isNaN(this.mantissa)||isNaN(this.exponent))return Number.NaN;if(0==this.mantissa)return 0;var t=e+1,n=Math.ceil(Math.log10(Math.abs(this.mantissa))),a=Math.round(this.mantissa*Math.pow(10,t-n))*Math.pow(10,n-t);return parseFloat(a.toFixed(Math.max(t-n,0)))}},{key:"toString",value:function(){return isNaN(this.mantissa)||isNaN(this.exponent)?"NaN":this.exponent>=a?this.mantissa>0?"Infinity":"-Infinity":this.exponent<=-a||0==this.mantissa?"0":this.exponent<21&&this.exponent>-7?this.toNumber().toString():this.mantissa+"e"+(this.exponent>=0?"+":"")+this.exponent}},{key:"toExponential",value:function(e){if(isNaN(this.mantissa)||isNaN(this.exponent))return"NaN";if(this.exponent>=a)return this.mantissa>0?"Infinity":"-Infinity";if(this.exponent<=-a||0==this.mantissa)return"0"+(e>0?t(".",e+1,"0"):"")+"e+0";if(this.exponent>i&&this.exponent<308)return this.toNumber().toExponential(e);isFinite(e)||(e=n);var r=e+1,s=Math.max(1,Math.ceil(Math.log10(Math.abs(this.mantissa))));return(Math.round(this.mantissa*Math.pow(10,r-s))*Math.pow(10,s-r)).toFixed(Math.max(r-s,0))+"e"+(this.exponent>=0?"+":"")+this.exponent}},{key:"toFixed",value:function(e){return isNaN(this.mantissa)||isNaN(this.exponent)?"NaN":this.exponent>=a?this.mantissa>0?"Infinity":"-Infinity":this.exponent<=-a||0==this.mantissa?"0"+(e>0?t(".",e+1,"0"):""):this.exponent>=n?this.mantissa.toString().replace(".","").padEnd(this.exponent+1,"0")+(e>0?t(".",e+1,"0"):""):this.toNumber().toFixed(e)}},{key:"toPrecision",value:function(e){return this.exponent<=-7?this.toExponential(e-1):e>this.exponent?this.toFixed(e-this.exponent-1):this.toExponential(e-1)}},{key:"valueOf",value:function(){return this.toString()}},{key:"toJSON",value:function(){return this.toString()}},{key:"toStringWithDecimalPlaces",value:function(e){return this.toExponential(e)}},{key:"abs",value:function(){return e.fromMantissaExponent(Math.abs(this.mantissa),this.exponent)}},{key:"neg",value:function(){return e.fromMantissaExponent(-this.mantissa,this.exponent)}},{key:"negate",value:function(){return this.neg()}},{key:"negated",value:function(){return this.neg()}},{key:"sign",value:function(){return Math.sign(this.mantissa)}},{key:"sgn",value:function(){return this.sign()}},{key:"round",value:function(){return this.exponent<-1?new e(0):this.exponent<n?new e(Math.round(this.toNumber())):this}},{key:"floor",value:function(){return this.exponent<-1?Math.sign(this.mantissa)>=0?new e(0):new e(-1):this.exponent<n?new e(Math.floor(this.toNumber())):this}},{key:"ceil",value:function(){return this.exponent<-1?Math.sign(this.mantissa)>0?new e(1):new e(0):this.exponent<n?new e(Math.ceil(this.toNumber())):this}},{key:"trunc",value:function(){return this.exponent<0?new e(0):this.exponent<n?new e(Math.trunc(this.toNumber())):this}},{key:"add",value:function(t){return t=e.fromValue(t),0==this.mantissa?t:0==t.mantissa?this:(this.exponent>=t.exponent?(a=this,i=t):(a=t,i=this),a.exponent-i.exponent>n?a:e.fromMantissaExponent(Math.round(1e14*a.mantissa+1e14*i.mantissa*r[i.exponent-a.exponent+u]),a.exponent-14));var a,i}},{key:"plus",value:function(e){return this.add(e)}},{key:"sub",value:function(t){return t=e.fromValue(t),this.add(e.fromMantissaExponent(-t.mantissa,t.exponent))}},{key:"subtract",value:function(e){return this.sub(e)}},{key:"minus",value:function(e){return this.sub(e)}},{key:"mul",value:function(t){return t=e.fromValue(t),e.fromMantissaExponent(this.mantissa*t.mantissa,this.exponent+t.exponent)}},{key:"multiply",value:function(e){return this.mul(e)}},{key:"times",value:function(e){return this.mul(e)}},{key:"div",value:function(t){return t=e.fromValue(t),this.mul(t.recip())}},{key:"divide",value:function(e){return this.div(e)}},{key:"divideBy",value:function(e){return this.div(e)}},{key:"dividedBy",value:function(e){return this.div(e)}},{key:"recip",value:function(){return e.fromMantissaExponent(1/this.mantissa,-this.exponent)}},{key:"reciprocal",value:function(){return this.recip()}},{key:"reciprocate",value:function(){return this.recip()}},{key:"cmp",value:function(t){if(t=e.fromValue(t),0==this.mantissa){if(0==t.mantissa)return 0;if(t.mantissa<0)return 1;if(t.mantissa>0)return-1}else if(0==t.mantissa){if(this.mantissa<0)return-1;if(this.mantissa>0)return 1}return this.mantissa>0?t.mantissa<0?1:this.exponent>t.exponent?1:this.exponent<t.exponent?-1:this.mantissa>t.mantissa?1:this.mantissa<t.mantissa?-1:0:this.mantissa<0?t.mantissa>0?-1:this.exponent>t.exponent?-1:this.exponent<t.exponent?1:this.mantissa>t.mantissa?1:this.mantissa<t.mantissa?-1:0:void 0}},{key:"compare",value:function(e){return this.cmp(e)}},{key:"eq",value:function(t){return t=e.fromValue(t),this.exponent==t.exponent&&this.mantissa==t.mantissa}},{key:"equals",value:function(e){return this.eq(e)}},{key:"neq",value:function(t){return t=e.fromValue(t),this.exponent!=t.exponent||this.mantissa!=t.mantissa}},{key:"notEquals",value:function(e){return this.neq(e)}},{key:"lt",value:function(t){return t=e.fromValue(t),0==this.mantissa?t.mantissa>0:0==t.mantissa?this.mantissa<=0:this.exponent==t.exponent?this.mantissa<t.mantissa:this.mantissa>0?t.mantissa>0&&this.exponent<t.exponent:t.mantissa>0||this.exponent>t.exponent}},{key:"lte",value:function(t){return t=e.fromValue(t),0==this.mantissa?t.mantissa>=0:0==t.mantissa?this.mantissa<=0:this.exponent==t.exponent?this.mantissa<=t.mantissa:this.mantissa>0?t.mantissa>0&&this.exponent<t.exponent:t.mantissa>0||this.exponent>t.exponent}},{key:"gt",value:function(t){return t=e.fromValue(t),0==this.mantissa?t.mantissa<0:0==t.mantissa?this.mantissa>0:this.exponent==t.exponent?this.mantissa>t.mantissa:this.mantissa>0?t.mantissa<0||this.exponent>t.exponent:t.mantissa<0&&this.exponent<t.exponent}},{key:"gte",value:function(t){return t=e.fromValue(t),0==this.mantissa?t.mantissa<=0:0==t.mantissa?this.mantissa>0:this.exponent==t.exponent?this.mantissa>=t.mantissa:this.mantissa>0?t.mantissa<0||this.exponent>t.exponent:t.mantissa<0&&this.exponent<t.exponent}},{key:"max",value:function(t){return t=e.fromValue(t),this.gte(t)?this:t}},{key:"min",value:function(t){return t=e.fromValue(t),this.lte(t)?this:t}},{key:"cmp_tolerance",value:function(t,n){return t=e.fromValue(t),this.eq_tolerance(t,n)?0:this.cmp(t)}},{key:"compare_tolerance",value:function(e,t){return this.cmp_tolerance(e,t)}},{key:"eq_tolerance",value:function(t,n){return t=e.fromValue(t),e.lte(this.sub(t).abs(),e.max(this.abs(),t.abs()).mul(n))}},{key:"equals_tolerance",value:function(e,t){return this.eq_tolerance(e,t)}},{key:"neq_tolerance",value:function(t,n){return t=e.fromValue(t),!this.eq_tolerance(t,n)}},{key:"notEquals_tolerance",value:function(e,t){return this.neq_tolerance(e,t)}},{key:"lt_tolerance",value:function(t,n){return t=e.fromValue(t),!this.eq_tolerance(t,n)&&this.lt(t)}},{key:"lte_tolerance",value:function(t,n){return t=e.fromValue(t),!!this.eq_tolerance(t,n)||this.lt(t)}},{key:"gt_tolerance",value:function(t,n){return t=e.fromValue(t),!this.eq_tolerance(t,n)&&this.gt(t)}},{key:"gte_tolerance",value:function(t,n){return t=e.fromValue(t),!!this.eq_tolerance(t,n)||this.gt(t)}},{key:"log10",value:function(){return this.exponent+Math.log10(this.mantissa)}},{key:"log",value:function(e){return Math.LN10/Math.log(e)*this.log10()}},{key:"log2",value:function(){return 3.321928094887362*this.log10()}},{key:"ln",value:function(){return 2.302585092994046*this.log10()}},{key:"logarithm",value:function(e){return this.log(e)}},{key:"pow",value:function(t){t instanceof e&&(t=t.toNumber());var n=this.exponent*t;if(Number.isSafeInteger(n)){var a=Math.pow(this.mantissa,t);if(isFinite(a))return e.fromMantissaExponent(a,n)}var i=Math.trunc(n),r=n-i;a=Math.pow(10,t*Math.log10(this.mantissa)+r);return isFinite(a)?e.fromMantissaExponent(a,i):e.pow10(t*this.log10())}},{key:"pow_base",value:function(t){return(t=e.fromValue(t)).pow(this)}},{key:"factorial",value:function(){var t=this.toNumber()+1;return e.pow(t/Math.E*Math.sqrt(t*Math.sinh(1/t)+1/(810*Math.pow(t,6))),t).mul(Math.sqrt(2*Math.PI/t))}},{key:"exp",value:function(){var t,n,a=this.toNumber();return-706<a&&a<709?e.fromNumber(Math.exp(a)):(t=0,(n=this.exponent)>=0&&(t=Math.trunc(a/Math.LN10),(a-=t*Math.LN10)>=Math.LN10&&(++t,a-=Math.LN10)),a<0&&(--t,a+=Math.LN10),a=Math.exp(a),0!=t&&(n=Math.floor(t),a=e.fromMantissaExponent(a,n)),a)}},{key:"sqr",value:function(){return e.fromMantissaExponent(Math.pow(this.mantissa,2),2*this.exponent)}},{key:"sqrt",value:function(){return this.mantissa<0?new e(Number.NaN):this.exponent%2!=0?e.fromMantissaExponent(3.16227766016838*Math.sqrt(this.mantissa),Math.floor(this.exponent/2)):e.fromMantissaExponent(Math.sqrt(this.mantissa),Math.floor(this.exponent/2))}},{key:"cube",value:function(){return e.fromMantissaExponent(Math.pow(this.mantissa,3),3*this.exponent)}},{key:"cbrt",value:function(){var t=1,n=this.mantissa;n<0&&(t=-1,n=-n);var a=t*Math.pow(n,1/3),i=this.exponent%3;return 1==i||-1==i?e.fromMantissaExponent(2.154434690031884*a,Math.floor(this.exponent/3)):0!=i?e.fromMantissaExponent(4.641588833612779*a,Math.floor(this.exponent/3)):e.fromMantissaExponent(a,Math.floor(this.exponent/3))}},{key:"sinh",value:function(){return this.exp().sub(this.negate().exp()).div(2)}},{key:"cosh",value:function(){return this.exp().add(this.negate().exp()).div(2)}},{key:"tanh",value:function(){return this.sinh().div(this.cosh())}},{key:"asinh",value:function(){return e.ln(this.add(this.sqr().add(1).sqrt()))}},{key:"acosh",value:function(){return e.ln(this.add(this.sqr().sub(1).sqrt()))}},{key:"atanh",value:function(){return this.abs().gte(1)?Number.NaN:e.ln(this.add(1).div(new e(1).sub(this))).div(2)}},{key:"ascensionPenalty",value:function(e){return 0==e?this:this.pow(Math.pow(10,-e))}},{key:"egg",value:function(){return this.add(9)}},{key:"lessThanOrEqualTo",value:function(e){return this.cmp(e)<1}},{key:"lessThan",value:function(e){return this.cmp(e)<0}},{key:"greaterThanOrEqualTo",value:function(e){return this.cmp(e)>-1}},{key:"greaterThan",value:function(e){return this.cmp(e)>0}},{key:"m",get:function(){return this.mantissa},set:function(e){this.mantissa=e}},{key:"e",get:function(){return this.exponent},set:function(e){this.exponent=e}},{key:"s",get:function(){return this.sign()},set:function(e){0==e&&(this.e=0,this.m=0),this.sgn()!=e&&(this.m=-this.m)}}],[{key:"fromMantissaExponent",value:function(t,n){return(new e).fromMantissaExponent(t,n)}},{key:"fromMantissaExponent_noNormalize",value:function(t,n){return(new e).fromMantissaExponent_noNormalize(t,n)}},{key:"fromDecimal",value:function(t){return(new e).fromDecimal(t)}},{key:"fromNumber",value:function(t){return(new e).fromNumber(t)}},{key:"fromString",value:function(t){return(new e).fromString(t)}},{key:"fromValue",value:function(t){return t instanceof e?t:new e(t)}},{key:"abs",value:function(t){return(t=e.fromValue(t)).abs()}},{key:"neg",value:function(t){return(t=e.fromValue(t)).neg()}},{key:"negate",value:function(t){return(t=e.fromValue(t)).neg()}},{key:"negated",value:function(t){return(t=e.fromValue(t)).neg()}},{key:"sign",value:function(t){return(t=e.fromValue(t)).sign()}},{key:"sgn",value:function(t){return(t=e.fromValue(t)).sign()}},{key:"round",value:function(t){return(t=e.fromValue(t)).round()}},{key:"floor",value:function(t){return(t=e.fromValue(t)).floor()}},{key:"ceil",value:function(t){return(t=e.fromValue(t)).ceil()}},{key:"trunc",value:function(t){return(t=e.fromValue(t)).trunc()}},{key:"add",value:function(t,n){return(t=e.fromValue(t)).add(n)}},{key:"plus",value:function(t,n){return(t=e.fromValue(t)).add(n)}},{key:"sub",value:function(t,n){return(t=e.fromValue(t)).sub(n)}},{key:"subtract",value:function(t,n){return(t=e.fromValue(t)).sub(n)}},{key:"minus",value:function(t,n){return(t=e.fromValue(t)).sub(n)}},{key:"mul",value:function(t,n){return(t=e.fromValue(t)).mul(n)}},{key:"multiply",value:function(t,n){return(t=e.fromValue(t)).mul(n)}},{key:"times",value:function(t,n){return(t=e.fromValue(t)).mul(n)}},{key:"div",value:function(t,n){return(t=e.fromValue(t)).div(n)}},{key:"divide",value:function(t,n){return(t=e.fromValue(t)).div(n)}},{key:"divideBy",value:function(t,n){return(t=e.fromValue(t)).div(n)}},{key:"dividedBy",value:function(t,n){return(t=e.fromValue(t)).div(n)}},{key:"recip",value:function(t){return(t=e.fromValue(t)).recip()}},{key:"reciprocal",value:function(t){return(t=e.fromValue(t)).recip()}},{key:"reciprocate",value:function(t){return(t=e.fromValue(t)).reciprocate()}},{key:"cmp",value:function(t,n){return(t=e.fromValue(t)).cmp(n)}},{key:"compare",value:function(t,n){return(t=e.fromValue(t)).cmp(n)}},{key:"eq",value:function(t,n){return(t=e.fromValue(t)).eq(n)}},{key:"equals",value:function(t,n){return(t=e.fromValue(t)).eq(n)}},{key:"neq",value:function(t,n){return(t=e.fromValue(t)).neq(n)}},{key:"notEquals",value:function(t,n){return(t=e.fromValue(t)).notEquals(n)}},{key:"lt",value:function(t,n){return(t=e.fromValue(t)).lt(n)}},{key:"lte",value:function(t,n){return(t=e.fromValue(t)).lte(n)}},{key:"gt",value:function(t,n){return(t=e.fromValue(t)).gt(n)}},{key:"gte",value:function(t,n){return(t=e.fromValue(t)).gte(n)}},{key:"max",value:function(t,n){return(t=e.fromValue(t)).max(n)}},{key:"min",value:function(t,n){return(t=e.fromValue(t)).min(n)}},{key:"cmp_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).cmp_tolerance(n,a)}},{key:"compare_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).cmp_tolerance(n,a)}},{key:"eq_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).eq_tolerance(n,a)}},{key:"equals_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).eq_tolerance(n,a)}},{key:"neq_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).neq_tolerance(n,a)}},{key:"notEquals_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).notEquals_tolerance(n,a)}},{key:"lt_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).lt_tolerance(n,a)}},{key:"lte_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).lte_tolerance(n,a)}},{key:"gt_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).gt_tolerance(n,a)}},{key:"gte_tolerance",value:function(t,n,a){return(t=e.fromValue(t)).gte_tolerance(n,a)}},{key:"log10",value:function(t){return(t=e.fromValue(t)).log10()}},{key:"log",value:function(t,n){return(t=e.fromValue(t)).log(n)}},{key:"log2",value:function(t){return(t=e.fromValue(t)).log2()}},{key:"ln",value:function(t){return(t=e.fromValue(t)).ln()}},{key:"logarithm",value:function(t,n){return(t=e.fromValue(t)).logarithm(n)}},{key:"pow10",value:function(t){return Number.isInteger(t)?e.fromMantissaExponent_noNormalize(1,t):e.fromMantissaExponent(Math.pow(10,t%1),Math.trunc(t))}},{key:"pow",value:function(t,n){return 10==t&&Number.isInteger(n)?e.fromMantissaExponent(1,n):(t=e.fromValue(t)).pow(n)}},{key:"exp",value:function(t){return(t=e.fromValue(t)).exp()}},{key:"sqr",value:function(t){return(t=e.fromValue(t)).sqr()}},{key:"sqrt",value:function(t){return(t=e.fromValue(t)).sqrt()}},{key:"cube",value:function(t){return(t=e.fromValue(t)).cube()}},{key:"cbrt",value:function(t){return(t=e.fromValue(t)).cbrt()}},{key:"affordGeometricSeries",value:function(t,n,a,i){t=e.fromValue(t),n=e.fromValue(n),a=e.fromValue(a);var r=n.mul(e.pow(a,i));return e.floor(e.log10(t.div(r).mul(a.sub(1)).add(1))/e.log10(a))}},{key:"sumGeometricSeries",value:function(t,n,a,i){return n=e.fromValue(n),a=e.fromValue(a),n.mul(e.pow(a,i)).mul(e.sub(1,e.pow(a,t))).div(e.sub(1,a))}},{key:"affordArithmeticSeries",value:function(t,n,a,i){t=e.fromValue(t),n=e.fromValue(n),a=e.fromValue(a),i=e.fromValue(i);var r=n.add(e.mul(i,a)).sub(a.div(2)),s=r.pow(2);return e.floor(r.neg().add(e.sqrt(s.add(e.mul(a,t).mul(2)))).div(a))}},{key:"sumArithmeticSeries",value:function(t,n,a,i){t=e.fromValue(t),n=e.fromValue(n),a=e.fromValue(a),i=e.fromValue(i);var r=n.add(e.mul(i,a));return e.div(t,2).mul(e.mul(2,r).plus(t.sub(1).mul(a)))}},{key:"efficiencyOfPurchase",value:function(t,n,a){return t=e.fromValue(t),n=e.fromValue(n),a=e.fromValue(a),e.add(t.div(n),t.div(a))}},{key:"randomDecimalForTesting",value:function(t){if(20*Math.random()<1)return e.fromMantissaExponent(0,0);var n=10*Math.random();10*Math.random()<1&&(n=Math.round(n)),n*=Math.sign(2*Math.random()-1);var a=Math.floor(Math.random()*t*2)-t;return e.fromMantissaExponent(n,a)}}]),e}();if("function"==typeof define&&define.amd)define(function(){return o});else if("undefined"!=typeof module&&module.exports)module.exports=o;else{e||(e="undefined"!=typeof self&&self&&self.self==self?self:Function("return this")());var l=e.Decimal_BI;o.noConflict=function(){return e.Decimal_BI=l,o},e.Decimal_BI=o}}(void 0);

;(function (globalScope) {
	'use strict';	
	/*
		# confractus_numerus.js
		logarithmica_numerus_lite.js extension, now with break_infinity.js exponents!
		
		This library uses Decimal which is expressed as 10^(logarithm). There is only a factor:
		- Logarithm: The logarithm of the number. It can be stored as Number or break_infinity's Decimal.
	*/
	class Decimal {
		static fromValue(value) {
			if (value==null) {
				return {logarithm:Number.NEGATIVE_INFINITY}
			} else if (value.logarithm!=undefined) {
				return value
			} else if (typeof(value)=='string') {
				var findE=value.search('e')
				if (findE==-1) {
					value=parseFloat(value)
					return {logarithm:Math.log10(value)}
				}
				var split=[value.slice(0,findE),value.slice(findE+1,value.length)]
				var split1Safe=parseFloat(split[1])
				if (split1Safe==Number.POSITIVE_INFINITY||split1Safe==Number.NEGATIVE_INFINITY) {
					if (split[0]<0) return {logarithm:Number.NaN}
					return {logarithm:Decimal_BI.fromString(split[1])}
				}
				if (split[0]=='') return {logarithm:split1Safe}
				else {
					split[0]=parseFloat(split[0])
					return {logarithm:Math.log10(split[0])+split1Safe}
				}
			} else if (typeof(value)=='number') {
				return {logarithm:Math.log10(value)}
			} else {
				return {logarithm:Number.NEGATIVE_INFINITY}
			}
		}
		
		constructor(value) { 
			var value=Decimal.fromValue(value)
			this.logarithm=value.logarithm
		}
		
		static fromNumber(value) {
			var valueTemp=new Decimal()
			valueTemp.logarithm=Math.log10(value)
			return valueTemp
		}
		
		fromNumber() {
			return Decimal.fromNumber(this)
		}
		
		static fromString(value) {
			var valueTemp=new Decimal()
			var findE=value.search('e')
			if (findE==-1) {
				value=parseFloat(value)
				return {logarithm:Math.log10(value)}
			}
			var split=[value.slice(0,findE),value.slice(findE+1,value.length)]
			var split1Safe=parseFloat(split[1])
			if (split1Safe==Number.POSITIVE_INFINITY||split1Safe==Number.NEGATIVE_INFINITY) {
				if (split[0]<0) valueTemp.logarithm=Number.NaN
				valueTemp.logarithm=Decimal_BI.fromString(split[1])
			} else {
				if (split[0]=='') valueTemp.logarithm=split1Safe
				else {
					split[0]=parseFloat(split[0])
					valueTemp.logarithm=Math.log10(split[0])+split1Safe
				}
			}
			return valueTemp
		}
		
		fromString() {
			return Decimal.fromString(this)
		}
		
		static fromMantissaExponent(m,e) {
			var value=new Decimal()
			value.logarithm=e+Math.log10(m)
			return value
		}
		
		static toString(value) {
			value=new Decimal(value)
			if (value.logarithm instanceof Decimal_BI) return 'e'+value.logarithm.toString()
			if (value.logarithm==Number.NEGATIVE_INFINITY) return '0'
			if (value.logarithm==Number.POSITIVE_INFINITY) {
				return 'Infinity'
			}
			if (value.logarithm>=1e21||value.logarithm<=-1e21) {
				return 'e'+value.logarithm
			}
			if (value.logarithm>=21||value.logarithm<-6) {
				var logInt=Math.floor(value.logarithm)
				return Math.pow(10,value.logarithm-logInt)+'e'+logInt
			}
			return Math.pow(10,value.logarithm).toString()
		}
		
		toString() {
			return Decimal.toString(this)
		}
		
		static toNumber(value) {
			value=new Decimal(value)
			if (value instanceof Decimal_BI) {
				if (value.logarithm.mantissa>0) return Number.POSITIVE_INFINITY
				if (value.logarithm.mantissa<0) return 0
			}
			if (value.logarithm>=309) return Number.POSITIVE_INFINITY
			if (value.logarithm<=-309) return 0
			return Math.pow(10,value.logarithm)
		}
		
		toNumber() {
			return Decimal.toNumber(this)
		}
		
		static toPrecision(value,dp) {
			value=new Decimal(value)
			if (value.logarithm instanceof Decimal_BI) return 'e'+value.logarithm.toString()
			if (value.logarithm==Number.NEGATIVE_INFINITY) return (0).toPrecision(dp)
			if (value.logarithm==Number.POSITIVE_INFINITY) {
				return 'Infinity'
			}
			if (value.logarithm>=1e21||value.logarithm<=-1e21) {
				return 'e'+value.logarithm
			}
			if (value.logarithm>=dp||value.logarithm<6) {
				var logInt=Math.floor(value.logarithm)
				return Math.pow(10,value.logarithm-logInt).toPrecision(dp)+'e'+logInt
			}
			return Math.pow(10,value.logarithm).toPrecision(dp)
		}
		
		toPrecision(dp) {
			return Decimal.toPrecision(this,dp)
		}
		
		static toFixed(value,dp) {
			value=new Decimal(value)
			if (value.logarithm instanceof Decimal_BI) return 'e'+value.logarithm.toString()
			if (value.logarithm<-dp-1) return (0).toFixed(dp)
			if (value.logarithm==Number.POSITIVE_INFINITY) {
				return 'Infinity'
			}
			if (value.logarithm>=1e21) {
				return 'e'+value.logarithm
			}
			if (value.logarithm>=21) {
				return Math.pow(10,value.logarithm%1).toFixed(dp)+'e'+Math.floor(value.logarithm)
			}
			return Math.pow(10,value.logarithm).toFixed(dp)
		}
		
		toFixed(dp) {
			return Decimal.toFixed(this,dp)
		}
		
		static toExponential(value,dp) {
			value=new Decimal(value)
			if (value.logarithm instanceof Decimal_BI) return 'e'+value.logarithm.toString()
			if (value.logarithm==Number.NEGATIVE_INFINITY) return (0).toExponential(dp)
			if (value.logarithm==Number.POSITIVE_INFINITY) {
				return 'Infinity'
			}
			if (value.logarithm>=1e21||value.logarithm<=-1e21) {
				return 'e'+value.logarithm
			}
			var logInt=Math.floor(value.logarithm)
			return Math.pow(10,value.logarithm-logInt).toFixed(dp)+'e'+logInt
		}
		
		toExponential(dp) {
			return Decimal.toExponential(this,dp)
		}
		
		static add(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			if (typeof(value1.logarithm)=="number"&&typeof(value2.logarithm)=="number") {
				var expdiff=value1.logarithm-value2.logarithm
				if (expdiff>=15||value2.logarithm==Number.NEGATIVE_INFINITY) return value1
				if (expdiff<=-15||value1.logarithm==Number.NEGATIVE_INFINITY) return value2
				value2.logarithm=value2.logarithm+Math.log10(1+Math.pow(10,expdiff))
				return value2
			}
			if (Decimal_BI.cmp(value1.logarithm,value2.logarithm)>0) return value1
			return value2
		}
		
		add(value) {
			return Decimal.add(this,value)
		}
		
		static plus(value1,value2) {
			return Decimal.add(value1,value2)
		}
		
		plus(value) {
			return Decimal.add(this,value)
		}
		
		static sub(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			if (typeof(value1.logarithm)=="number"&&typeof(value2.logarithm)=="number") {
				var expdiff=value1.logarithm-value2.logarithm
				if (expdiff>=15||value2.logarithm==Number.NEGATIVE_INFINITY) return value1
				value1.logarithm=value1.logarithm+Math.log10(1-Math.pow(10,-expdiff))
				return value1
			}
			var cmp=Decimal_BI.cmp(value1.logarithm,value2.logarithm)
			if (cmp<1) value1.logarithm=Number.NEGATIVE_INFINITY
			else if (cmp<0) value1.logarithm=Number.NaN
			return value1
		}
		
		sub(value) {
			return Decimal.sub(this,value)
		}
		
		static subtract(value1,value2) {
			return Decimal.sub(value1,value2)
		}
		
		subtract(value) {
			return Decimal.sub(this,value)
		}
		
		static minus(value1,value2) {
			return Decimal.sub(value1,value2)
		}
		
		minus(value) {
			return Decimal.sub(this,value)
		}
		
		static mul(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			value1.logarithm=Decimal.expHelperAdd(value1.logarithm,value2.logarithm)
			return value1
		}
		
		mul(value) {
			return Decimal.mul(this,value)
		}
		
		static multiply(value1,value2) {
			return Decimal.mul(value1,value2)
		}
		
		multiply(value) {
			return Decimal.mul(this,value)
		}
		
		static times(value1,value2) {
			return Decimal.mul(value1,value2)
		}
		
		times(value) {
			return Decimal.mul(this,value)
		}
		
		static div(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			value1.logarithm=Decimal.expHelperSub(value1.logarithm,value2.logarithm)
			return value1
		}
		
		div(value) {
			return Decimal.div(this,value)
		}
		
		static divide(value1,value2) {
			return Decimal.div(value1,value2)
		}
		
		divide(value) {
			return Decimal.div(this,value)
		}
		
		static divideBy(value1,value2) {
			return Decimal.div(value1,value2)
		}
		
		divideBy(value) {
			return Decimal.div(this,value)
		}
		
		static dividedBy(value1,value2) {
			return Decimal.div(value1,value2)
		}
		
		dividedBy(value) {
			return Decimal.div(this,value)
		}
		
		static recip(value) {
			value=new Decimal(value)
			if (typeof(value.logarithm)=="number") value.logarithm=-value.logarithm
			else value.logarithm=Decimal_BI.neg(value.logarithm)
			return value
		}
		
		recip() {
			return Decimal.recip(this)
		}
		
		static reciprocal(value) {
			return Decimal.recip(value)
		}
		
		reciprocal() {
			return Decimal.recip(this)
		}
		
		static reciprocate(value) {
			return Decimal.recip(value)
		}
		
		reciprocate() {
			return Decimal.recip(this)
		}
		
		static mod(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			if (typeof(value1.logarithm)=="number"&&typeof(value2.logarithm)=="number") {
				var expdiff=value1.logarithm-value2.logarithm
				if (expdiff<0) return value1
				if (expdiff>=15) value2.logarithm=Number.NEGATIVE_INFINITY
				else value2.logarithm=value2.logarithm+Math.log10(Math.pow(10,expdiff)%1)
				return value2
			}
			if (Decimal.cmp(value1.logarithm,value2.logarithm)>=0) value1.logarithm=Number.NEGATIVE_INFINITY
			return value1
		}
		
		mod(value) {
			return Decimal.mod(this,value)
		}
		
		static remainder(value1,value2) {
			return Decimal.mod(value1,value2)
		}
		
		remainder(value) {
			return Decimal.mod(this,value)
		}
		
		static pow(value,power) {
			value=new Decimal(value)
			value.logarithm=Decimal.expHelperTimes(value.logarithm,power)
			return value
		}
		
		pow(value) {
			return Decimal.pow(this,value)
		}
		
		static power(value,power) {
			return Decimal.pow(value,power)
		}
		
		power(value) {
			return Decimal.pow(this,value)
		}
		
		pow_base(value) {
			return Decimal.pow(value,this)
		}
		
		static sqr(value) {
			value=new Decimal(value)
			value.logarithm=Decimal.expHelperTimes(value.logarithm,2)
			return value
		}
		
		sqr() {
			return Decimal.square(this)
		}
		
		static square(value) {
			return Decimal.sqr(value)
		}
		
		square() {
			return Decimal.sqr(this)
		}
		
		static cub(value) {
			value=new Decimal(value)
			value.logarithm=Decimal.expHelperTimes(value.logarithm,3)
			return value
		}
		
		cub() {
			return Decimal.cube(this)
		}
		
		static cube(value) {
			return Decimal.cub(value)
		}
		
		cube() {
			return Decimal.cub(this)
		}
		
		static exp(value) {
			value=new Decimal(value)
			value.logarithm=Decimal.expHelperTimes(value.logarithm,Math.log10(Math.E))
			return value
		}
		
		exp() {
			return Decimal.exp(this)
		}
		
		static root(value,power) {
			value=new Decimal(value)
			value.logarithm=Decimal.expHelperDiv(value.logarithm,power)
			return value
		}
		
		root(value) {
			return Decimal.root(this,value)
		}
		
		static sqrt(value) {
			value=new Decimal(value)
			value.logarithm=Decimal.expHelperDiv(value.logarithm,2)
			return value
		}
		
		sqrt() {
			return Decimal.sqrt(this)
		}
		
		static cbrt(value) {
			value=new Decimal(value)
			value.logarithm=Decimal.expHelperDiv(value.logarithm,3)
			return value
		}
		
		cbrt() {
			return Decimal.cbrt(this)
		}
		
		static log10(value) {
			value=new Decimal(value)
			return value.logarithm
		}
		
		log10() {
			return this.logarithm
		}
		
		static log10integer(value) {
			value=new Decimal(value)
			if (typeof(value.logarithm)=="number") return Math.floor(value.logarithm)
			return value.logarithm
		}
		
		log10integer() {
			return Decimal.log10integer(this)
		}
		
		static log10remainder(value) {
			value=new Decimal(value)
			if (typeof(value.logarithm)=="number") return value.logarithm-Math.floor(value.logarithm)
			return 0
		}
		
		log10remainder() {
			return Decimal.log10remainder(this)
		}
		
		static log2(value) {
			value=new Decimal(value)
			return Decimal.expHelperTimes(value.logarithm,3.32192809488736234787)
		}
		
		log2() {
			return Decimal.expHelperTimes(this.logarithm,3.32192809488736234787)
		}
		
		static log(value,base) {
			value=new Decimal(value)
			base=new Decimal(base)
			return Decimal.expHelperDiv(value.logarithm,base.logarithm)
		}
		
		log(base) {
			return Decimal.log(this,base)
		}
		
		static logarithm(value,base) {
			return Decimal.log(value,base)
		}
		
		logarithm(base) {
			return Decimal.log(this,base)
		}
		
		static ln(value) {
			value=new Decimal(value)
			return Decimal.expHelperTimes(value.logarithm,2.30258509299404568402)
		}
		
		ln() {
			return Decimal.expHelperTimes(this.logarithm,2.30258509299404568402)
		}
		
		static expPow(value,power) {
			value=new Decimal(value)
			value.logarithm=Decimal.expHelperPow(value.logarithm,power)
			return value
		}
		
		expPow(power) {
			return Decimal.expPow(this,power)
		}
		
		static expRoot(value,root) {
			value=new Decimal(value)
			value.logarithm=Decimal.expHelperPow(value.logarithm,1/root)
			return value
		}
		
		expRoot(root) {
			return Decimal.expRoot(this,root)
		}
		
		static doubleLog10(value) {
			value=new Decimal(value)
			if (typeof(value.logarithm)=="number") return Math.log10(value.logarithm)
			return value.logarithm.log10()
		}
		
		doubleLog10() {
			return Decimal.doubleLog10(this)
		}
		
		static doubleLn(value) {
			value=new Decimal(value)
			var log1=Decimal.expHelperTimes(value.logarithm,2.30258509299404568402)
			if (typeof(log1)=="number") {
				var quickRes=Math.log10(log1)*2.30258509299404568402
				if (quickRes>Number.NEGATIVE_INFINITY&&quickRes<Number.POSITIVE_INFINITY) return quickRes
				log1=new Decimal_BI(log1)
			}
			return log1.ln()
		}
		
		doubleLn() {
			return Decimal.doubleLn(this)
		}
		
		static doubleLog(value,base) {
			return Decimal.logAlogB(value,base,base)
		}
		
		doubleLog(base) {
			return Decimal.logAlogB(this,base,base)
		}
		
		static logAlogB(value,base1,base2) {
			value=new Decimal(value)
			base1=new Decimal(base1)
			base2=new Decimal(base2)
			var log1=Decimal.expHelperDiv(value.logarithm,base2.logarithm)
			if (typeof(log1)=="number") {
				var quickRes=Math.log10(log1)/base1.logarithm
				if (quickRes>Number.NEGATIVE_INFINITY&&quickRes<Number.POSITIVE_INFINITY) return quickRes
				log1=new Decimal_BI(log1)
			}
			return log1.log(base1)
		}
		
		logAlogB(base1,base2) {
			return Decimal.logAlogB(this,base1,base2)
		}
		
		static floor(value) {
			value=new Decimal(value)
			if (typeof(value.logarithm)=="number") {
				if (value.logarithm<0) value.logarithm=Number.NEGATIVE_INFINITY
				else if (value.logarithm<15) value.logarithm=Math.log10(Math.floor(Math.pow(10,value.logarithm)+Math.pow(10,value.logarithm-14)))
				return value
			}
			if (value.logarithm.mantissa<0) value.logarithm=Number.NEGATIVE_INFINITY
			return value
		}
		
		floor() {
			return Decimal.floor(this)
		}
		
		static ceil(value) {
			value=new Decimal(value)
			if (typeof(value.logarithm)=="number") {
				if (value.logarithm==Number.NEGATIVE_INFINITY) return value
				else if (value.logarithm<0) value.logarithm=0
				else if (value.logarithm<15) value.logarithm=Math.log10(Math.ceil(Math.pow(10,value.logarithm)-Math.pow(10,value.logarithm-14)))
				return value
			}
			if (value.logarithm.mantissa<0) value.logarithm=0
			return value
		}
		
		ceil() {
			return Decimal.ceil(this)
		}
		
		static round(value) {
			value=new Decimal(value)
			if (typeof(value.logarithm)=="number") {
				if (value.logarithm<=-1) value.logarithm=Number.NEGATIVE_INFINITY
				else if (value.logarithm<15) value.logarithm=Math.log10(Math.round(Math.pow(10,value.logarithm)))
				return value
			}
			if (value.logarithm.mantissa<0) value.logarithm=0
			return value
		}
		
		round() {
			return Decimal.round(this)
		}
		
		static min(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			if (Decimal.expHelperCompare(value1.logarithm,value2.logarithm)>0) return value2
			return value1
		}
		
		min(value) {
			return Decimal.min(this,value)
		}
		
		static max(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			if (Decimal.expHelperCompare(value1.logarithm,value2.logarithm)>0) return value1
			return value2
		}
		
		max(value) {
			return Decimal.max(this,value)
		}
		
		static cmp(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			return Decimal.expHelperCompare(value1.logarithm,value2.logarithm)
		}
		
		compareTo(value) {
			return Decimal.cmp(this,value)
		}
		
		static compare(value1,value2) {
			return Decimal.cmp(value1,value2)
		}
		
		compare(value) {
			return Decimal.cmp(this,value)
		}
		
		static compareTo(value1,value2) {
			return Decimal.cmp(value1,value2)
		}
		
		compareTo(value) {
			return Decimal.cmp(this,value)
		}
		
		static lt(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			return Decimal.expHelperCompare(value1.logarithm,value2.logarithm)<0
		}
		
		lt(value) {
			return Decimal.lt(this,value)
		}
		
		static lte(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			return Decimal.expHelperCompare(value1.logarithm,value2.logarithm)<1
		}
		
		lte(value) {
			return Decimal.lte(this,value)
		}
		
		static eq(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			return Decimal.expHelperCompare(value1.logarithm,value2.logarithm)==0
		}
		
		eq(value) {
			return Decimal.eq(this,value)
		}
		
		static equals(value1,value2) {
			return Decimal.eq(value1,value2)
		}
		
		equals(value) {
			return Decimal.eq(this,value)
		}
		
		static neq(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			return Decimal.expHelperCompare(value1.logarithm,value2.logarithm)!=0
		}
		
		neq(value) {
			return Decimal.neq(this,value)
		}
		
		static notEquals(value1,value2) {
			return Decimal.neq(value1,value2)
		}
		
		notEquals(value) {
			return Decimal.neq(this,value)
		}
		
		static gte(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			return Decimal.expHelperCompare(value1.logarithm,value2.logarithm)>-1
		}
		
		gte(value) {
			return Decimal.gte(this,value)
		}
		
		static gt(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			return Decimal.expHelperCompare(value1.logarithm,value2.logarithm)>0
		}
		
		gt(value) {
			return Decimal.gt(this,value)
		}
		
		static isFinite(value) {
			value=new Decimal(value)
			if (typeof(value.logarithm)=="number") return value.logarithm<Number.POSITIVE_INFINITY
			return false
		}
		
		isFinite() {
			return Decimal.isFinite(this)
		}
		
		static expHelperAdd(e1, e2) {
			if (typeof(e1)=="number"&&typeof(e2)=="number") {
				var res=e1+e2
				var hardCalc=false
				if (res==Number.POSITIVE_INFINITY||res==Number.NEGATIVE_INFINITY) {
					if (e1==Number.POSITIVE_INFINITY) {}
					else if (e1==Number.NEGATIVE_INFINITY) {}
					else if (e2==Number.POSITIVE_INFINITY) {}
					else if (e2==Number.NEGATIVE_INFINITY) {}
					else hardCalc=true
				}
				if (hardCalc) return Decimal_BI.add(e1,e2)
				return res
			}
			var res=Decimal_BI.add(e1,e2)
			var mantissa=res.mantissa
			var exponent=res.exponent
			if (exponent<308) return res.toNumber()
			if (exponent==308) if (mantissa>-1.7976931348623157&&mantissa<1.7976931348623157) return res.toNumber()
			if (exponent==9e15) {
				if (mantissa<-1) return Number.NEGATIVE_INFINITY
				if (mantissa>1) return Number.POSITIVE_INFINITY
			}
			if (exponent>9e15) {
				if (mantissa<0) return Number.NEGATIVE_INFINITY
				return Number.POSITIVE_INFINITY
			}
			return res
		}
		
		static expHelperSub(e1, e2) {
			if (typeof(e1)=="number"&&typeof(e2)=="number") {
				var res=e1-e2
				var hardCalc=false
				if (res==Number.POSITIVE_INFINITY||res==Number.NEGATIVE_INFINITY) {
					if (e1==Number.POSITIVE_INFINITY) {}
					else if (e1==Number.NEGATIVE_INFINITY) {}
					else if (e2==Number.POSITIVE_INFINITY) {}
					else if (e2==Number.NEGATIVE_INFINITY) {}
					else hardCalc=true
				}
				if (hardCalc) return Decimal_BI.sub(e1,e2)
				return res
			}
			var res=Decimal_BI.sub(e1,e2)
			var mantissa=res.mantissa
			var exponent=res.exponent
			if (exponent<308) return res.toNumber()
			if (exponent==308) if (mantissa>-1.7976931348623157&&mantissa<1.7976931348623157) return res.toNumber()
			if (exponent==9e15) {
				if (mantissa<-1) return Number.NEGATIVE_INFINITY
				if (mantissa>1) return Number.POSITIVE_INFINITY
			}
			if (exponent>9e15) {
				if (mantissa<0) return Number.NEGATIVE_INFINITY
				return Number.POSITIVE_INFINITY
			}
			return res
		}
		
		static expHelperTimes(e1, e2) {
			if (typeof(e1)=="number"&&typeof(e2)=="number") {
				var res=e1*e2
				var hardCalc=false
				if (res==Number.POSITIVE_INFINITY||res==Number.NEGATIVE_INFINITY) {
					if (e1==Number.POSITIVE_INFINITY) {}
					else if (e1==Number.NEGATIVE_INFINITY) {}
					else if (e2==Number.POSITIVE_INFINITY) {}
					else if (e2==Number.NEGATIVE_INFINITY) {}
					else hardCalc=true
				}
				if (hardCalc) return Decimal_BI.times(e1,e2)
				return res
			}
			var res=Decimal_BI.times(e1,e2)
			var mantissa=res.mantissa
			var exponent=res.exponent
			if (exponent<308) return res.toNumber()
			if (exponent==308) if (mantissa>-1.7976931348623157&&mantissa<1.7976931348623157) return res.toNumber()
			if (exponent==9e15) {
				if (mantissa<-1) return Number.NEGATIVE_INFINITY
				if (mantissa>1) return Number.POSITIVE_INFINITY
			}
			if (exponent>9e15) {
				if (mantissa<0) return Number.NEGATIVE_INFINITY
				return Number.POSITIVE_INFINITY
			}
			return res
		}
		
		static expHelperDiv(e1, e2) {
			if (typeof(e1)=="number"&&typeof(e2)=="number") {
				var res=e1/e2
				var hardCalc=false
				if (res==Number.POSITIVE_INFINITY||res==Number.NEGATIVE_INFINITY) {
					if (e1==Number.POSITIVE_INFINITY) {}
					else if (e1==Number.NEGATIVE_INFINITY) {}
					else if (e2==Number.POSITIVE_INFINITY) {}
					else if (e2==Number.NEGATIVE_INFINITY) {}
					else hardCalc=true
				}
				if (hardCalc) return Decimal_BI.div(e1,e2)
				return res
			}
			var res=Decimal_BI.div(e1,e2)
			var mantissa=res.mantissa
			var exponent=res.exponent
			if (exponent<308) return res.toNumber()
			if (exponent==308) if (mantissa>-1.7976931348623157&&mantissa<1.7976931348623157) return res.toNumber()
			if (exponent==9e15) {
				if (mantissa<-1) return Number.NEGATIVE_INFINITY
				if (mantissa>1) return Number.POSITIVE_INFINITY
			}
			if (exponent>9e15) {
				if (mantissa<0) return Number.NEGATIVE_INFINITY
				return Number.POSITIVE_INFINITY
			}
			return res
		}
		
		static expHelperPow(e, ep) {
			if (typeof(e)=="number") {
				var res=Math.pow(e,ep)
				var hardCalc=false
				if (res==Number.POSITIVE_INFINITY||res==Number.NEGATIVE_INFINITY) {
					if (e==Number.POSITIVE_INFINITY) {}
					else if (e==Number.NEGATIVE_INFINITY) {}
					else if (ep==Number.POSITIVE_INFINITY) {}
					else if (ep==Number.NEGATIVE_INFINITY) {}
					else hardCalc=true
				}
				if (hardCalc) return Decimal_BI.pow(e,ep)
				return res
			}
			var res=Decimal_BI.pow(e,ep)
			var mantissa=res.mantissa
			var exponent=res.exponent
			if (exponent<308) return res.toNumber()
			if (exponent==308) if (mantissa>-1.7976931348623157&&mantissa<1.7976931348623157) return res.toNumber()
			if (exponent==9e15) {
				if (mantissa<-1) return Number.NEGATIVE_INFINITY
				if (mantissa>1) return Number.POSITIVE_INFINITY
			}
			if (exponent>9e15) {
				if (mantissa<0) return Number.NEGATIVE_INFINITY
				return Number.POSITIVE_INFINITY
			}
			return res
		}
		
		static expHelperCompare(e1, e2) {
			if (typeof(e1)=="number"&&typeof(e2)=="number") {
				if (e1>e2) return 1
				if (e1<e2) return -1
				return 0
			}
			return Decimal_BI.cmp(e1,e2)
		}
		
		get mantissaAndExponent() {
			if (this.logarithm instanceof Decimal_BI) return {m:1,e:this.logarithm}
			if (this.logarithm==Number.NEGATIVE_INFINITY) return {m:0,e:0}
			var logInt=Math.floor(this.logarithm)
			return {m:Math.pow(10,this.logarithm-logInt),e:logInt}
		}
		get e() {
			if (this.logarithm instanceof Decimal_BI) return this.logarithm
			if (this.logarithm==Number.NEGATIVE_INFINITY) return 0
			return Math.floor(this.logarithm)
		}
		get exponent() {return this.e;}
		get m() {
			if (this.logarithm instanceof Decimal_BI) return 1
			if (this.logarithm==Number.NEGATIVE_INFINITY) return 0
			var logInt=Math.floor(this.logarithm)
			return Math.pow(10,this.logarithm-logInt)
		}
		get mantissa() {return this.m;}
		
		valueOf() { return this.toString(); }
		toJSON() { return this.toString(); }
	}
	
	//Used from Patashu's break_infinity.js (and credited the author too, https://github.com/Patashu/break_infinity.js)
	if (typeof define == 'function' && define.amd) {
		define(function () {
		return Decimal;
	});

	// Node and other environments that support module.exports.
	} else if (typeof module != 'undefined' && module.exports) {
		module.exports = Decimal;

	// Browser.
	} else {
	if (!globalScope) {
		globalScope = typeof self != 'undefined' && self && self.self == self
		? self : Function('return this')();
	}

	var noConflict = globalScope.Decimal;
	Decimal.noConflict = function () {
		globalScope.Decimal = noConflict;
		return Decimal;
	};

	globalScope.Decimal = Decimal;
	}
})(this);
