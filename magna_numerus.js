//Start Yaffle's BigInteger (https://github.com/Yaffle/BigInteger/)
!function(r){"use strict";for(var n=function(r,n,t,e){for(var i=n-1,u=0,o=e<10?e:10;++i<t;){var a=r.charCodeAt(i),f=a-48;if((f<0||o<=f)&&((f=-55+a)<10||e<=f)&&((f=-87+a)<10||e<=f))throw new RangeError;u=u*e+f}return u},t=function(r){for(var n=new Array(r),t=-1;++t<r;)n[t]=0;return n},e=2/9007199254740992;1+e/2!=1;)e/=2;for(var i=2/e,u=134217728;u*u<2/e;)u*=2;var o=u+1,a=function(r,n,t){var e=o*r,i=e-(e-r),u=r-i,a=o*n,f=a-(a-n),g=n-f;return i*f+t+i*g+u*f+u*g},f=function(r){var n=r-i+i;return n>r?n-1:n},g=function(r,n,t){var e=n*t,u=a(n,t,-e),o=f(e/i),g=e-o*i+u;return g<0&&(g+=i,o-=1),(g+=r-i)<0?g+=i:o+=1,{lo:g,hi:o}},h=function(r,n,t){if(r>=t)throw new RangeError;var e=r*i,u=f(e/t),o=0-a(u,t,-e);o<0&&(u-=1,o+=t),(o+=n-t)<0?o+=t:u+=1;var g=f(o/t);return{q:u+=g,r:o-=g*t}};function v(r,n,t){this.sign=r,this.magnitude=n,this.length=t}var d=function(r,n,t){return new v(r,n,t)};v.parseInt=function(r,e){if(void 0==e&&(e=10),10!==e&&(e<2||e>36||e!==Math.floor(e)))throw new RangeError("radix argument must be an integer between 2 and 36");var u=r.length;if(0===u)throw new RangeError;var o=0,a=r.charCodeAt(0),h=0;if(43===a&&(h=1),45===a&&(h=1,o=1),0===(u-=h))throw new RangeError;if(function(r,n){for(var t=1,e=r,i=n;i>1;){var u=Math.floor(i/2);2*u!==i&&(t*=e),e*=e,i=u}return t*e}(e,u)<=i){var v=n(r,h,h+u,e),l=t(1);return l[0]=v,d(0===v?0:o,l,0===v?0:1)}for(var m=0,c=1,s=f(i/e);c<=s;)m+=1,c*=e;for(var b=Math.floor((u-1)/m)+1,p=t(b),w=h+1+(u-1-(b-1)*m)-m,y=-1;++y<b;){for(var R=w+y*m,E=n(r,R>=h?R:h,R+m,e),A=-1;++A<y;){var S=g(E,p[A],c),I=S.lo,M=S.hi;p[A]=I,E=M}p[y]=E}for(;b>0&&0===p[b-1];)b-=1;return d(0===b?0:o,p,b)};var l=function(r,n){if(r.length!==n.length)return r.length<n.length?-1:1;for(var t=r.length;--t>=0;)if(r.magnitude[t]!==n.magnitude[t])return r.magnitude[t]<n.magnitude[t]?-1:1;return 0};v.compareTo=function(r,n){var t=r.sign===n.sign?l(r,n):1;return 1===r.sign?0-t:t},v.addAndSubtract=function(r,n,e){var u=l(r,n),o=u<0?0!==e?1-n.sign:n.sign:r.sign,a=u<0?r:n,f=u<0?n:r;if(0===a.length)return d(o,f.magnitude,f.length);var g=0,h=f.length;if(r.sign!==(0!==e?1-n.sign:n.sign)){if(g=1,a.length===h)for(;h>0&&a.magnitude[h-1]===f.magnitude[h-1];)h-=1;if(0===h)return d(0,t(0),0)}for(var v=t(h+(1-g)),m=-1,c=0;++m<h;){var s=m<a.length?a.magnitude[m]:0;(c+=f.magnitude[m]+(0!==g?0-s:s-i))<0?(v[m]=i+c,c=0-g):(v[m]=c,c=1-g)}if(0===g)v[h]=c,h+=0!==c?1:0;else for(;h>0&&0===v[h-1];)h-=1;return d(o,v,h)},v.add=function(r,n){return v.addAndSubtract(r,n,0)},v.subtract=function(r,n){return v.addAndSubtract(r,n,1)},v.multiply=function(r,n){if(0===r.length||0===n.length)return d(0,t(0),0);var e=1===r.sign?1-n.sign:n.sign;if(1===r.length&&1===r.magnitude[0])return d(e,n.magnitude,n.length);if(1===n.length&&1===n.magnitude[0])return d(e,r.magnitude,r.length);for(var u=r.length+n.length,o=t(u),a=-1;++a<r.length;)o[a]=0;for(var f=-1;++f<n.length;){for(var h=0,v=-1;++v<r.length;){var l=0;(h+=o[v+f]-i)>=0?l=1:h+=i;var m=g(h,r.magnitude[v],n.magnitude[f]),c=m.lo,s=m.hi;o[v+f]=c,h=s+l}o[r.length+f]=h}for(;u>0&&0===o[u-1];)u-=1;return d(e,o,u)},v.divideAndRemainder=function(r,n,e){if(0===n.length)throw new RangeError;if(0===r.length)return d(0,t(0),0);var u=1===r.sign?1-n.sign:n.sign;if(1===n.length&&1===n.magnitude[0])return 0!==e?d(u,r.magnitude,r.length):d(0,t(0),0);for(var o=r.length+1,a=t(o+n.length+1),v=a,l=a,m=-1;++m<r.length;)l[m]=r.magnitude[m];l[r.length]=0;for(var c=-1;++c<n.length;)v[o+c]=n.magnitude[c];v[o+n.length]=0;var s=v[o+n.length-1],b=1;if(n.length>1){if((b=f(i/(s+1)))>1){for(var p=0,w=-1;++w<o+n.length;){var y=g(p,a[w],b),R=y.lo,E=y.hi;a[w]=R,p=E}a[o+n.length]=p,s=v[o+n.length-1]}if(s<f(i/2))throw new RangeError}var A=r.length-n.length+1;A<0&&(A=0);for(var S=void 0,I=0,M=A;--M>=0;){var N=n.length+M,q=i-1;if(l[N]!==s)q=h(l[N],l[N-1],s).q;for(var T=0,x=0,C=M-1;++C<=N;){var B=l[C],j=g(x,q,v[o+C-M]),k=j.lo,z=j.hi;l[C]=k,x=z,(T+=B-l[C])<0?(l[C]=i+T,T=-1):(l[C]=T,T=0)}for(;0!==T;){q-=1;for(var D=0,F=M-1;++F<=N;)(D+=l[F]-i+v[o+F-M])<0?(l[F]=i+D,D=0):(l[F]=D,D=1);T+=D}0!==e&&0!==q&&(0===I&&(S=t(I=M+1)),S[M]=q)}if(0!==e)return 0===I?d(0,t(0),0):d(u,S,I);var G=r.length+1;if(b>1){for(var H=0,J=G;--J>=0;){var K=h(H,l[J],b),L=K.q,O=K.r;l[J]=L,H=O}if(0!==H)throw new RangeError}for(;G>0&&0===l[G-1];)G-=1;if(0===G)return d(0,t(0),0);for(var P=t(G),Q=-1;++Q<G;)P[Q]=l[Q];return d(r.sign,P,G)},v.divide=function(r,n){return v.divideAndRemainder(r,n,1)},v.remainder=function(r,n){return v.divideAndRemainder(r,n,0)},v.negate=function(r){return d(0===r.length?r.sign:1-r.sign,r.magnitude,r.length)},v.prototype.toString=function(r){if(void 0==r&&(r=10),10!==r&&(r<2||r>36||r!==Math.floor(r)))throw new RangeError("radix argument must be an integer between 2 and 36");var n=1===this.sign?"-":"",e=this.length;if(0===e)return"0";if(1===e)return n+=this.magnitude[0].toString(r);for(var u=0,o=1,a=f(i/r);o<=a;)u+=1,o*=r;if(o*r<=i)throw new RangeError;for(var g=e+Math.floor((e-1)/u)+1,v=t(g),d=-1;++d<e;)v[d]=this.magnitude[d];for(var l=g;0!==e;){for(var m=0,c=e;--c>=0;){var s=h(m,v[c],o),b=s.q,p=s.r;v[c]=b,m=p}for(;e>0&&0===v[e-1];)e-=1;v[l-=1]=m}for(n+=v[l].toString(r);++l<g;){for(var w=v[l].toString(r),y=u-w.length;--y>=0;)n+="0";n+=w}return n},v.fromNumber=function(r){var n=t(1);return n[0]=r<0?0-r:0+r,d(r<0?1:0,n,0===r?0:1)},v.isSafeInteger=function(r){return r.length<2},v.toNumber=function(r){if(0===r.length)return 0;if(1===r.length)return 1===r.sign?0-r.magnitude[0]:r.magnitude[0];throw new RangeError};var m=function(r){return function(n,t){return r(n,t)}},c=m(function(r,n){return v.parseInt(r,n)}),s=function(r){return"number"==typeof r?v.fromNumber(r):r},b=m(function(r,n){var t=s(r),e=s(n);return v.compareTo(t,e)}),p=function(r){return v.isSafeInteger(r)?v.toNumber(r):r},w=m(function(r,n){var t=s(r),e=s(n);return p(v.add(t,e))}),y=m(function(r,n){var t=s(r),e=s(n);return p(v.subtract(t,e))}),R=m(function(r,n){var t=s(r),e=s(n);return p(v.multiply(t,e))}),E=m(function(r,n){var t=s(r),e=s(n);return p(v.divide(t,e))}),A=m(function(r,n){var t=s(r),e=s(n);return p(v.remainder(t,e))}),S=m(function(r){var n=s(r);return p(v.negate(n))});function I(){}I.parseInt=function(r,n){if("string"==typeof r&&"number"==typeof n){var t=0+Number.parseInt(r,n);if(t>=-9007199254740991&&t<=9007199254740991)return t}return c(r,n)},I.compareTo=function(r,n){return"number"==typeof r&&"number"==typeof n?r<n?-1:n<r?1:0:b(r,n)},I.add=function(r,n){if("number"==typeof r&&"number"==typeof n){var t=r+n;if(t>=-9007199254740991&&t<=9007199254740991)return t}return w(r,n)},I.subtract=function(r,n){if("number"==typeof r&&"number"==typeof n){var t=r-n;if(t>=-9007199254740991&&t<=9007199254740991)return t}return y(r,n)},I.multiply=function(r,n){if("number"==typeof r&&"number"==typeof n){var t=0+r*n;if(t>=-9007199254740991&&t<=9007199254740991)return t}return R(r,n)},I.divide=function(r,n){return"number"==typeof r&&"number"==typeof n&&0!==n?0===r?0:r>0&&n>0||r<0&&n<0?0+Math.floor(r/n):0-Math.floor((0-r)/n):E(r,n)},I.remainder=function(r,n){return"number"==typeof r&&"number"==typeof n&&0!==n?0+r%n:A(r,n)},I.negate=function(r){return"number"==typeof r?0-r:S(r)},r.BigInteger=I}(this);
//End BigInteger

;(function (globalScope) {
	'use strict';	
		
	const EXP_LIMIT=Math.pow(2,53)
		
	class Decimal {
		static fromValue(value) {
			if (value==null) {
				return {mantissa:0,exponent:0}
			} if (value instanceof Decimal) {
				return value
			} else if (value.constructor.name=='v') {
				return {mantissa:0,exponent:0}
			} else if (typeof(value)=='number') {
				if (value==1/0) {
					return {mantissa:1,exponent:EXP_LIMIT}
				} else if (value==-1/0) {
					return {mantissa:-1,exponent:EXP_LIMIT}
				} else if (value==0) {
					return {mantissa:0,exponent:0}
				} else {
					var log=Math.floor(Math.log10(Math.abs(value)))
					return {mantissa:value/Math.pow(10,log),exponent:log}
				}
			} else {
				return {mantissa:0,exponent:0}
			}
		}
		
		constructor(value) { 
			var value=Decimal.fromValue(value)
			this.mantissa=value.mantissa
			this.exponent=value.exponent
		}
		
		static fromMantissaExponent(mantissa,exponent) {
			var value=new Decimal()
			var mantissalog=Math.floor(Math.log10(Math.abs(mantissa)))
			value.mantissa=mantissa/Math.pow(10,mantissalog)
			value.exponent=BigInteger.add(exponent,mantissalog)
			return value
		}
		
		static add(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			var expdiff=BigInteger.subtract(value1.exponent,value2.exponent)
			if (expdiff>17) return value1
			if (expdiff<-17) return value2
			if (expdiff>0) return Decimal.fromMantissaExponent(value1.mantissa+value2.mantissa/Math.pow(10,expdiff),value1.exponent)
			return Decimal.fromMantissaExponent(value2.mantissa+value1.mantissa*Math.pow(10,expdiff),value2.exponent)
		}
		
		add(value) {
			return Decimal.add(this,value)
		}
		
		static sub(value1,value2) {
			return Decimal.add(value1,Decimal.negate(value2))
		}
		
		sub(value) {
			return Decimal.add(this,Decimal.negate(value))
		}
		
		static multiply(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			return Decimal.fromMantissaExponent(value1.mantissa*value2.mantissa,BigInteger.add(value1.exponent,value2.exponent))
		}
		
		multiply(value) {
			return Decimal.multiply(this,value)
		}
		
		static divide(value1,value2) {
			return Decimal.multiply(value1,Decimal.reciprocal(value2))
		}
		
		divide(value) {
			return Decimal.multiply(this,Decimal.reciprocal(value))
		}
		
		static reciprocal(value) {
			value=new Decimal(value)
			return Decimal.fromMantissaExponent(1/value.mantissa,BigInteger.negate(value.exponent))
		}
		
		reciprocal() {
			return Decimal.reciprocal(this)
		}
		
		static pow(value,power) {
			value=new Decimal(value)
			var mantissalog=BigInteger.multiply(Math.log10(value.mantissa),Math.round(Math.pow(2,53)*power))
			var exponentlog=BigInteger.multiply(value.exponent,Math.round(Math.pow(2,53)*power))
			var logInt=BigInteger.divide(BigInteger.add(mantissalog,exponentlog),Math.pow(2,53))
			var logDec=BigInteger.remainder(BigInteger.add(mantissalog,exponentlog),Math.pow(2,53))/Math.pow(2,53)
			return Decimal.fromMantissaExponent(Math.pow(10,logDec),logInt)
		}
		
		pow(value) {
			return Decimal.pow(this,value)
		}
		
		static sqrt(value) {
			return Decimal.pow(this,0.5)
		}
		
		sqrt() {
			return Decimal.pow(this,0.5)
		}
		
		static cbrt(value) {
			return Decimal.pow(this,1/3)
		}
		
		cbrt() {
			return Decimal.pow(this,1/3)
		}
		
		static negate(value) {
			value=new Decimal(value)
			value.mantissa=-value.mantissa
			return value
		}
		
		negate() {
			return Decimal.negate(this)
		}
		
		static compareTo(value1,value2) {
			value1=Decimal.fromValue(value1)
			value2=Decimal.fromValue(value2)
			var firstCompare=BigInteger.compareTo(value1.exponent,value2.exponent)
			if (firstCompare==0) return (value1.mantissa<value2.mantissa)?-1:(value1.mantissa>value2.mantissa)?1:0
			return firstCompare
		}
		
		compareTo(value) {
			return Decimal.compareTo(this,value)
		}
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