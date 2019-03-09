//Start break_infinity.min.js code. Credit to Patashu for making this!
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).Decimal_BI=n()}(this,function(){"use strict";var t=function(t,n,e){if(null==t||null==n)return t;var i=String(t),r="number"==typeof n?n:parseInt(n,10);if(isNaN(r)||!isFinite(r))return i;var o=i.length;if(o>=r)return i;var s=null==e?"":String(e);""===s&&(s=" ");for(var a=r-o;s.length<a;)s+=s;return i+(s.length>a?s.substr(0,a):s)},n=function(){for(var t=[],n=-323;n<=308;n++)t.push(Number("1e"+n));return function(n){return t[n+323]}}(),e=function(t){return o.fromValue_noAlloc(t)},i=function(t,n){return o.fromMantissaExponent(t,n)},r=function(t,n){return o.fromMantissaExponent_noNormalize(t,n)},o=function(){function o(t){this.mantissa=NaN,this.exponent=NaN,t instanceof o?this.fromDecimal(t):"number"==typeof t?this.fromNumber(t):"string"==typeof t?this.fromString(t):(this.mantissa=0,this.exponent=0)}return Object.defineProperty(o.prototype,"m",{get:function(){return this.mantissa},set:function(t){this.mantissa=t},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"e",{get:function(){return this.exponent},set:function(t){this.exponent=t},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"s",{get:function(){return this.sign()},set:function(t){if(0===t)return this.e=0,void(this.m=0);this.sgn()!==t&&(this.m=-this.m)},enumerable:!0,configurable:!0}),o.fromMantissaExponent=function(t,n){return(new o).fromMantissaExponent(t,n)},o.fromMantissaExponent_noNormalize=function(t,n){return(new o).fromMantissaExponent_noNormalize(t,n)},o.fromDecimal=function(t){return(new o).fromDecimal(t)},o.fromNumber=function(t){return(new o).fromNumber(t)},o.fromString=function(t){return(new o).fromString(t)},o.fromValue=function(t){return(new o).fromValue(t)},o.fromValue_noAlloc=function(t){return t instanceof o?t:new o(t)},o.abs=function(t){return e(t).abs()},o.neg=function(t){return e(t).neg()},o.negate=function(t){return e(t).neg()},o.negated=function(t){return e(t).neg()},o.sign=function(t){return e(t).sign()},o.sgn=function(t){return e(t).sign()},o.round=function(t){return e(t).round()},o.floor=function(t){return e(t).floor()},o.ceil=function(t){return e(t).ceil()},o.trunc=function(t){return e(t).trunc()},o.add=function(t,n){return e(t).add(n)},o.plus=function(t,n){return e(t).add(n)},o.sub=function(t,n){return e(t).sub(n)},o.subtract=function(t,n){return e(t).sub(n)},o.minus=function(t,n){return e(t).sub(n)},o.mul=function(t,n){return e(t).mul(n)},o.multiply=function(t,n){return e(t).mul(n)},o.times=function(t,n){return e(t).mul(n)},o.div=function(t,n){return e(t).div(n)},o.divide=function(t,n){return e(t).div(n)},o.recip=function(t){return e(t).recip()},o.reciprocal=function(t){return e(t).recip()},o.reciprocate=function(t){return e(t).reciprocate()},o.cmp=function(t,n){return e(t).cmp(n)},o.compare=function(t,n){return e(t).cmp(n)},o.eq=function(t,n){return e(t).eq(n)},o.equals=function(t,n){return e(t).eq(n)},o.neq=function(t,n){return e(t).neq(n)},o.notEquals=function(t,n){return e(t).notEquals(n)},o.lt=function(t,n){return e(t).lt(n)},o.lte=function(t,n){return e(t).lte(n)},o.gt=function(t,n){return e(t).gt(n)},o.gte=function(t,n){return e(t).gte(n)},o.max=function(t,n){return e(t).max(n)},o.min=function(t,n){return e(t).min(n)},o.cmp_tolerance=function(t,n,i){return e(t).cmp_tolerance(n,i)},o.compare_tolerance=function(t,n,i){return e(t).cmp_tolerance(n,i)},o.eq_tolerance=function(t,n,i){return e(t).eq_tolerance(n,i)},o.equals_tolerance=function(t,n,i){return e(t).eq_tolerance(n,i)},o.neq_tolerance=function(t,n,i){return e(t).neq_tolerance(n,i)},o.notEquals_tolerance=function(t,n,i){return e(t).notEquals_tolerance(n,i)},o.lt_tolerance=function(t,n,i){return e(t).lt_tolerance(n,i)},o.lte_tolerance=function(t,n,i){return e(t).lte_tolerance(n,i)},o.gt_tolerance=function(t,n,i){return e(t).gt_tolerance(n,i)},o.gte_tolerance=function(t,n,i){return e(t).gte_tolerance(n,i)},o.log10=function(t){return e(t).log10()},o.log=function(t,n){return e(t).log(n)},o.log2=function(t){return e(t).log2()},o.ln=function(t){return e(t).ln()},o.logarithm=function(t,n){return e(t).logarithm(n)},o.pow10=function(t){return Number.isInteger(t)?r(1,t):i(Math.pow(10,t%1),Math.trunc(t))},o.pow=function(t,n){return"number"==typeof t&&10===t&&"number"==typeof n&&Number.isInteger(n)?r(1,n):e(t).pow(n)},o.exp=function(t){return e(t).exp()},o.sqr=function(t){return e(t).sqr()},o.sqrt=function(t){return e(t).sqrt()},o.cube=function(t){return e(t).cube()},o.cbrt=function(t){return e(t).cbrt()},o.affordGeometricSeries=function(t,n,i,r){return this.affordGeometricSeries_core(e(t),e(n),e(i),r)},o.sumGeometricSeries=function(t,n,i,r){return this.sumGeometricSeries_core(t,e(n),e(i),r)},o.affordArithmeticSeries=function(t,n,i,r){return this.affordArithmeticSeries_core(e(t),e(n),e(i),e(r))},o.sumArithmeticSeries=function(t,n,i,r){return this.sumArithmeticSeries_core(e(t),e(n),e(i),e(r))},o.efficiencyOfPurchase=function(t,n,i){return this.efficiencyOfPurchase_core(e(t),e(n),e(i))},o.randomDecimalForTesting=function(t){if(20*Math.random()<1)return r(0,0);var n=10*Math.random();10*Math.random()<1&&(n=Math.round(n)),n*=Math.sign(2*Math.random()-1);var e=Math.floor(Math.random()*t*2)-t;return i(n,e)},o.affordGeometricSeries_core=function(t,n,e,i){var r=n.mul(e.pow(i));return o.floor(t.div(r).mul(e.sub(1)).add(1).log10()/e.log10())},o.sumGeometricSeries_core=function(t,n,e,i){return n.mul(e.pow(i)).mul(o.sub(1,e.pow(t))).div(o.sub(1,e))},o.affordArithmeticSeries_core=function(t,n,e,i){var r=n.add(i.mul(e)).sub(e.div(2)),o=r.pow(2);return r.neg().add(o.add(e.mul(t).mul(2)).sqrt()).div(e).floor()},o.sumArithmeticSeries_core=function(t,n,e,i){var r=n.add(i.mul(e));return t.div(2).mul(r.mul(2).plus(t.sub(1).mul(e)))},o.efficiencyOfPurchase_core=function(t,n,e){return t.div(n).add(t.div(e))},o.prototype.normalize=function(){if(!(this.mantissa>=1&&this.mantissa<10)){if(0===this.mantissa)return this.mantissa=0,void(this.exponent=0);var t=Math.floor(Math.log10(Math.abs(this.mantissa)));return this.mantissa=this.mantissa/n(t),this.exponent+=t,this}},o.prototype.fromMantissaExponent=function(t,n){return isFinite(t)&&isFinite(n)?(this.mantissa=t,this.exponent=n,this.normalize(),this):(t=Number.NaN,n=Number.NaN,this)},o.prototype.fromMantissaExponent_noNormalize=function(t,n){return this.mantissa=t,this.exponent=n,this},o.prototype.fromDecimal=function(t){return this.mantissa=t.mantissa,this.exponent=t.exponent,this},o.prototype.fromNumber=function(t){return isNaN(t)?(this.mantissa=Number.NaN,this.exponent=Number.NaN):t===Number.POSITIVE_INFINITY?(this.mantissa=1,this.exponent=9e15):t===Number.NEGATIVE_INFINITY?(this.mantissa=-1,this.exponent=9e15):0===t?(this.mantissa=0,this.exponent=0):(this.exponent=Math.floor(Math.log10(Math.abs(t))),this.mantissa=-324===this.exponent?10*t/1e-323:t/n(this.exponent),this.normalize()),this},o.prototype.fromString=function(t){if(-1!==t.indexOf("e")){var n=t.split("e");this.mantissa=parseFloat(n[0]),this.exponent=parseFloat(n[1]),this.normalize()}else if("NaN"===t)this.mantissa=Number.NaN,this.exponent=Number.NaN;else if(this.fromNumber(parseFloat(t)),isNaN(this.mantissa))throw Error("[DecimalError] Invalid argument: "+t);return this},o.prototype.fromValue=function(t){return t instanceof o?this.fromDecimal(t):"number"==typeof t?this.fromNumber(t):"string"==typeof t?this.fromString(t):(this.mantissa=0,this.exponent=0,this)},o.prototype.toNumber=function(){if(!isFinite(this.exponent))return Number.NaN;if(this.exponent>308)return this.mantissa>0?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(this.exponent<-324)return 0;if(-324===this.exponent)return this.mantissa>0?5e-324:-5e-324;var t=this.mantissa*n(this.exponent);if(!isFinite(t)||this.exponent<0)return t;var e=Math.round(t);return Math.abs(e-t)<1e-10?e:t},o.prototype.mantissaWithDecimalPlaces=function(t){if(isNaN(this.mantissa)||isNaN(this.exponent))return Number.NaN;if(0===this.mantissa)return 0;var n=t+1,e=Math.ceil(Math.log10(Math.abs(this.mantissa))),i=Math.round(this.mantissa*Math.pow(10,n-e))*Math.pow(10,e-n);return parseFloat(i.toFixed(Math.max(n-e,0)))},o.prototype.toString=function(){return isNaN(this.mantissa)||isNaN(this.exponent)?"NaN":this.exponent>=9e15?this.mantissa>0?"Infinity":"-Infinity":this.exponent<=-9e15||0===this.mantissa?"0":this.exponent<21&&this.exponent>-7?this.toNumber().toString():this.mantissa+"e"+(this.exponent>=0?"+":"")+this.exponent},o.prototype.toExponential=function(n){if(isNaN(this.mantissa)||isNaN(this.exponent))return"NaN";if(this.exponent>=9e15)return this.mantissa>0?"Infinity":"-Infinity";if(this.exponent<=-9e15||0===this.mantissa)return"0"+(n>0?t(".",n+1,"0"):"")+"e+0";if(this.exponent>-324&&this.exponent<308)return this.toNumber().toExponential(n);isFinite(n)||(n=17);var e=n+1,i=Math.max(1,Math.ceil(Math.log10(Math.abs(this.mantissa))));return(Math.round(this.mantissa*Math.pow(10,e-i))*Math.pow(10,i-e)).toFixed(Math.max(e-i,0))+"e"+(this.exponent>=0?"+":"")+this.exponent},o.prototype.toFixed=function(n){return isNaN(this.mantissa)||isNaN(this.exponent)?"NaN":this.exponent>=9e15?this.mantissa>0?"Infinity":"-Infinity":this.exponent<=-9e15||0===this.mantissa?"0"+(n>0?t(".",n+1,"0"):""):this.exponent>=17?this.mantissa.toString().replace(".","").padEnd(this.exponent+1,"0")+(n>0?t(".",n+1,"0"):""):this.toNumber().toFixed(n)},o.prototype.toPrecision=function(t){return this.exponent<=-7?this.toExponential(t-1):t>this.exponent?this.toFixed(t-this.exponent-1):this.toExponential(t-1)},o.prototype.valueOf=function(){return this.toString()},o.prototype.toJSON=function(){return this.toString()},o.prototype.toStringWithDecimalPlaces=function(t){return this.toExponential(t)},o.prototype.abs=function(){return r(Math.abs(this.mantissa),this.exponent)},o.prototype.neg=function(){return r(-this.mantissa,this.exponent)},o.prototype.negate=function(){return this.neg()},o.prototype.negated=function(){return this.neg()},o.prototype.sign=function(){return Math.sign(this.mantissa)},o.prototype.sgn=function(){return this.sign()},o.prototype.round=function(){return this.exponent<-1?new o(0):this.exponent<17?new o(Math.round(this.toNumber())):this},o.prototype.floor=function(){return this.exponent<-1?Math.sign(this.mantissa)>=0?new o(0):new o(-1):this.exponent<17?new o(Math.floor(this.toNumber())):this},o.prototype.ceil=function(){return this.exponent<-1?Math.sign(this.mantissa)>0?new o(1):new o(0):this.exponent<17?new o(Math.ceil(this.toNumber())):this},o.prototype.trunc=function(){return this.exponent<0?new o(0):this.exponent<17?new o(Math.trunc(this.toNumber())):this},o.prototype.add=function(t){var r,o,s=e(t);return 0===this.mantissa?s:0===s.mantissa?this:(this.exponent>=s.exponent?(r=this,o=s):(r=s,o=this),r.exponent-o.exponent>17?r:i(Math.round(1e14*r.mantissa+1e14*o.mantissa*n(o.exponent-r.exponent)),r.exponent-14))},o.prototype.plus=function(t){return this.add(t)},o.prototype.sub=function(t){return this.add(e(t).neg())},o.prototype.subtract=function(t){return this.sub(t)},o.prototype.minus=function(t){return this.sub(t)},o.prototype.mul=function(t){var n=e(t);return i(this.mantissa*n.mantissa,this.exponent+n.exponent)},o.prototype.multiply=function(t){return this.mul(t)},o.prototype.times=function(t){return this.mul(t)},o.prototype.div=function(t){return this.mul(e(t).recip())},o.prototype.divide=function(t){return this.div(t)},o.prototype.divideBy=function(t){return this.div(t)},o.prototype.dividedBy=function(t){return this.div(t)},o.prototype.recip=function(){return i(1/this.mantissa,-this.exponent)},o.prototype.reciprocal=function(){return this.recip()},o.prototype.reciprocate=function(){return this.recip()},o.prototype.cmp=function(t){var n=e(t);if(0===this.mantissa){if(0===n.mantissa)return 0;if(n.mantissa<0)return 1;if(n.mantissa>0)return-1}if(0===n.mantissa){if(this.mantissa<0)return-1;if(this.mantissa>0)return 1}if(this.mantissa>0)return n.mantissa<0?1:this.exponent>n.exponent?1:this.exponent<n.exponent?-1:this.mantissa>n.mantissa?1:this.mantissa<n.mantissa?-1:0;if(this.mantissa<0)return n.mantissa>0?-1:this.exponent>n.exponent?-1:this.exponent<n.exponent?1:this.mantissa>n.mantissa?1:this.mantissa<n.mantissa?-1:0;throw Error("Unreachable code")},o.prototype.compare=function(t){return this.cmp(t)},o.prototype.eq=function(t){var n=e(t);return this.exponent===n.exponent&&this.mantissa===n.mantissa},o.prototype.equals=function(t){return this.eq(t)},o.prototype.neq=function(t){return!this.eq(t)},o.prototype.notEquals=function(t){return this.neq(t)},o.prototype.lt=function(t){var n=e(t);return 0===this.mantissa?n.mantissa>0:0===n.mantissa?this.mantissa<=0:this.exponent===n.exponent?this.mantissa<n.mantissa:this.mantissa>0?n.mantissa>0&&this.exponent<n.exponent:n.mantissa>0||this.exponent>n.exponent},o.prototype.lte=function(t){return!this.gt(t)},o.prototype.gt=function(t){var n=e(t);return 0===this.mantissa?n.mantissa<0:0===n.mantissa?this.mantissa>0:this.exponent===n.exponent?this.mantissa>n.mantissa:this.mantissa>0?n.mantissa<0||this.exponent>n.exponent:n.mantissa<0&&this.exponent<n.exponent},o.prototype.gte=function(t){return!this.lt(t)},o.prototype.max=function(t){var n=e(t);return this.lt(n)?n:this},o.prototype.min=function(t){var n=e(t);return this.gt(n)?n:this},o.prototype.cmp_tolerance=function(t,n){var i=e(t);return this.eq_tolerance(i,n)?0:this.cmp(i)},o.prototype.compare_tolerance=function(t,n){return this.cmp_tolerance(t,n)},o.prototype.eq_tolerance=function(t,n){var i=e(t);return o.lte(this.sub(i).abs(),o.max(this.abs(),i.abs()).mul(n))},o.prototype.equals_tolerance=function(t,n){return this.eq_tolerance(t,n)},o.prototype.neq_tolerance=function(t,n){return!this.eq_tolerance(t,n)},o.prototype.notEquals_tolerance=function(t,n){return this.neq_tolerance(t,n)},o.prototype.lt_tolerance=function(t,n){var i=e(t);return!this.eq_tolerance(i,n)&&this.lt(i)},o.prototype.lte_tolerance=function(t,n){var i=e(t);return this.eq_tolerance(i,n)||this.lt(i)},o.prototype.gt_tolerance=function(t,n){var i=e(t);return!this.eq_tolerance(i,n)&&this.gt(i)},o.prototype.gte_tolerance=function(t,n){var i=e(t);return this.eq_tolerance(i,n)||this.gt(i)},o.prototype.abslog10=function(){return this.exponent+Math.log10(Math.abs(this.mantissa))},o.prototype.log10=function(){return this.exponent+Math.log10(this.mantissa)},o.prototype.log=function(t){return Math.LN10/Math.log(t)*this.log10()},o.prototype.log2=function(){return 3.321928094887362*this.log10()},o.prototype.ln=function(){return 2.302585092994046*this.log10()},o.prototype.logarithm=function(t){return this.log(t)},o.prototype.pow=function(t){var n,e=t instanceof o?t.toNumber():t,r=this.exponent*e;if(Number.isSafeInteger(r)&&(n=Math.pow(this.mantissa,e),isFinite(n)))return i(n,r);var s=Math.trunc(r),a=r-s;if(n=Math.pow(10,e*Math.log10(this.mantissa)+a),isFinite(n))return i(n,s);var u=o.pow10(e*this.abslog10());return-1===this.sign()&&e%2==1?u.neg():u},o.prototype.pow_base=function(t){return e(t).pow(this)},o.prototype.factorial=function(){var t=this.toNumber()+1;return o.pow(t/Math.E*Math.sqrt(t*Math.sinh(1/t)+1/(810*Math.pow(t,6))),t).mul(Math.sqrt(2*Math.PI/t))},o.prototype.exp=function(){var t,n=this.toNumber();return-706<n&&n<709?o.fromNumber(Math.exp(n)):(t=0,this.exponent>=0&&(n-=(t=Math.trunc(n/Math.LN10))*Math.LN10)>=Math.LN10&&(++t,n-=Math.LN10),n<0&&(--t,n+=Math.LN10),n=Math.exp(n),0!==t&&Math.floor(t),o.fromNumber(n))},o.prototype.sqr=function(){return i(Math.pow(this.mantissa,2),2*this.exponent)},o.prototype.sqrt=function(){return this.mantissa<0?new o(Number.NaN):this.exponent%2!=0?i(3.16227766016838*Math.sqrt(this.mantissa),Math.floor(this.exponent/2)):i(Math.sqrt(this.mantissa),Math.floor(this.exponent/2))},o.prototype.cube=function(){return i(Math.pow(this.mantissa,3),3*this.exponent)},o.prototype.cbrt=function(){var t=1,n=this.mantissa;n<0&&(t=-1,n=-n);var e=t*Math.pow(n,1/3),r=this.exponent%3;return i(1===r||-1===r?2.154434690031884*e:0!==r?4.641588833612779*e:e,Math.floor(this.exponent/3))},o.prototype.sinh=function(){return this.exp().sub(this.negate().exp()).div(2)},o.prototype.cosh=function(){return this.exp().add(this.negate().exp()).div(2)},o.prototype.tanh=function(){return this.sinh().div(this.cosh())},o.prototype.asinh=function(){return o.ln(this.add(this.sqr().add(1).sqrt()))},o.prototype.acosh=function(){return o.ln(this.add(this.sqr().sub(1).sqrt()))},o.prototype.atanh=function(){return this.abs().gte(1)?Number.NaN:o.ln(this.add(1).div(new o(1).sub(this)))/2},o.prototype.ascensionPenalty=function(t){return 0===t?this:this.pow(Math.pow(10,-t))},o.prototype.egg=function(){return this.add(9)},o.prototype.lessThanOrEqualTo=function(t){return this.cmp(t)<1},o.prototype.lessThan=function(t){return this.cmp(t)<0},o.prototype.greaterThanOrEqualTo=function(t){return this.cmp(t)>-1},o.prototype.greaterThan=function(t){return this.cmp(t)>0},o}();return o});

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
