;(function (globalScope) {
	'use strict';	
	/*
		# logarithmica_numerus_lite.js
		My "lite" attempt to store large numbers that only uses logarithms to convert.
		The full version will release later with negative numbers support.

		This library uses Decimal which is expressed as 10^(logarithm). There is only a factor:
		- Logarithm: The logarithm of the number.
		
		It is also almost 2x faster than break_infinity.js!
		If you want to use accuracy instead of performance, please use this library from the link: https://github.com/Patashu/break_infinity.js/blob/master/break_infinity.min.js
	*/
	class Decimal {
		static fromValue(v) {
			return new Decimal(v)
		}
		
		constructor(v) { 
			if (v==null) {
				this.l=Number.NEGATIVE_INFINITY
			} else if (v instanceof Decimal) {
				this.l=v.l
			} else if (typeof(v)=='string') {
				var findE=v.search('e')
				if (findE==-1) {
					v=parseFloat(v)
					this.l=Math.log10(v)
				} else {
					var split=[v.slice(0,findE),v.slice(findE+1,v.length)]
					split[1]=parseFloat(split[1])
					if (split[0]=='') this.l=split[1]
					else {
						split[0]=parseFloat(split[0])
						this.l=Math.log10(split[0])+split[1]
					}
				}
			} else if (typeof(v)=='number') {
				this.l=Math.log10(v)
			} else {
				this.l=Number.NEGATIVE_INFINITY
			}
		}
		
		static fromNumber(v) {
			var tmp=new Decimal()
			tmp.l=Math.log10(v)
			return tmp
		}
		
		static fromString(v) {
			var tmp=new Decimal()
			var findE=v.search('e')
			if (findE==-1) {
				v=parseFloat(v)
				tmp.l=Math.log10(v)
			} else {
				var split=[v.slice(0,findE),v.slice(findE+1,v.length)]
				split[1]=parseFloat(split[1])
				if (split[0]=='') tmp.l=split[1]
				else {
					split[0]=parseFloat(split[0])
					tmp.l=Math.log10(split[0])+split[1]
				}
			}
			return tmp
		}
		
		static fromMantissaExponent(m,e) {
			var v=new Decimal()
			v.l=e+Math.log10(m)
			return v
		}
		
		static fromMantissaExponent_noNormalize(m,e) {
			return Decimal.fromMantissaExponent(m,e)
		}
		
		static toString(v) {
			v=new Decimal(v)
			if (v.l==Number.NEGATIVE_INFINITY) return '0'
			if (v.l==Number.POSITIVE_INFINITY) {
				return 'Infinity'
			}
			if (v.l>=1e21||v.l<=-1e21) {
				return 'e'+v.l
			}
			if (v.l>=21||v.l<-6) {
				var logInt=Math.floor(v.l)
				return Math.pow(10,v.l-logInt)+'e'+logInt
			}
			return Math.pow(10,v.l).toString()
		}
		
		toString() {
			return Decimal.toString(this)
		}
		
		static toNumber(v) {
			v=new Decimal(v)
			if (v.l>=309) return Number.POSITIVE_INFINITY
			if (v.l<=-309) return 0
			return Math.pow(10,v.l)
		}
		
		toNumber() {
			return Decimal.toNumber(this)
		}
		
		static toPrecision(v,dp) {
			v=new Decimal(v)
			if (v.l==Number.NEGATIVE_INFINITY) return (0).toPrecision(dp)
			if (v.l==Number.POSITIVE_INFINITY) {
				return 'Infinity'
			}
			if (v.l>=1e21||v.l<=-1e21) {
				return 'e'+v.l
			}
			if (v.l>=dp||v.l<6) {
				var logInt=Math.floor(v.l)
				return Math.pow(10,v.l-logInt).toPrecision(dp)+'e'+logInt
			}
			return Math.pow(10,v.l).toPrecision(dp)
		}
		
		toPrecision(dp) {
			return Decimal.toPrecision(this,dp)
		}
		
		static toFixed(v,dp) {
			v=new Decimal(v)
			if (v.l<-dp-1) return (0).toFixed(dp)
			if (v.l==Number.POSITIVE_INFINITY) {
				return 'Infinity'
			}
			if (v.l>=1e21) {
				return 'e'+v.l
			}
			if (v.l>=21) {
				return Math.pow(10,v.l%1).toFixed(dp)+'e'+Math.floor(v.l)
			}
			return Math.pow(10,v.l).toFixed(dp)
		}
		
		toFixed(dp) {
			return Decimal.toFixed(this,dp)
		}
		
		static toExponential(v,dp) {
			v=new Decimal(v)
			if (v.l==Number.NEGATIVE_INFINITY) return (0).toExponential(dp)
			if (v.l==Number.POSITIVE_INFINITY) {
				return 'Infinity'
			}
			if (v.l>=1e21||v.l<=-1e21) {
				return 'e'+v.l
			}
			var logInt=Math.floor(v.l)
			return Math.pow(10,v.l-logInt).toFixed(dp)+'e'+logInt
		}
		
		toExponential(dp) {
			return Decimal.toExponential(this,dp)
		}
		
		static add(v1,v2) {
			v1=new Decimal(v1)
			v2=new Decimal(v2)
			var expdiff=v1.l-v2.l
			if (expdiff>=15||v2.l==Number.NEGATIVE_INFINITY) return v1
			if (expdiff<=-15||v1.l==Number.NEGATIVE_INFINITY) return v2
			v2.l=v2.l+Math.log10(1+Math.pow(10,expdiff))
			return v2
		}
		
		add(v) {
			return Decimal.add(this,v)
		}
		
		static plus(v1,v2) {
			return Decimal.add(v1,v2)
		}
		
		plus(v) {
			return Decimal.add(this,v)
		}
		
		static sub(v1,v2) {
			v1=new Decimal(v1)
			v2=new Decimal(v2)
			var expdiff=v1.l-v2.l
			if (expdiff<0) {
				v1.l=Number.NEGATIVE_INFINITY
				return v1
			}
			if (expdiff>=15||v2.l==Number.NEGATIVE_INFINITY) return v1
			v1.l=v1.l+Math.log10(1-Math.pow(10,-expdiff))
			return v1
		}
		
		sub(v) {
			return Decimal.sub(this,v)
		}
		
		static subtract(v1,v2) {
			return Decimal.sub(v1,v2)
		}
		
		subtract(v) {
			return Decimal.sub(this,v)
		}
		
		static minus(v1,v2) {
			return Decimal.sub(v1,v2)
		}
		
		minus(v) {
			return Decimal.sub(this,v)
		}
		
		static mul(v1,v2) {
			v1=new Decimal(v1)
			v2=new Decimal(v2)
			v1.l=v1.l+v2.l
			return v1
		}
		
		mul(v) {
			return Decimal.mul(this,v)
		}
		
		static multiply(v1,v2) {
			return Decimal.mul(v1,v2)
		}
		
		multiply(v) {
			return Decimal.mul(this,v)
		}
		
		static times(v1,v2) {
			return Decimal.mul(v1,v2)
		}
		
		times(v) {
			return Decimal.mul(this,v)
		}
		
		static div(v1,v2) {
			v1=new Decimal(v1)
			v2=new Decimal(v2)
			if ((v1.l==Number.POSITIVE_INFINITY||v1.l==Number.NEGATIVE_INFINITY)&&v2.l==v1.l) {
				v1.l=Number.NEGATIVE_INFINITY
				return v1
			}
			v1.l=v1.l-v2.l
			return v1
		}
		
		div(v) {
			return Decimal.div(this,v)
		}
		
		static divide(v1,v2) {
			return Decimal.div(v1,v2)
		}
		
		divide(v) {
			return Decimal.div(this,v)
		}
		
		static divideBy(v1,v2) {
			return Decimal.div(v1,v2)
		}
		
		divideBy(v) {
			return Decimal.div(this,v)
		}
		
		static dividedBy(v1,v2) {
			return Decimal.div(v1,v2)
		}
		
		dividedBy(v) {
			return Decimal.div(this,v)
		}
		
		static recip(v) {
			v=new Decimal(v)
			v.l=-v.l
			return v
		}
		
		recip() {
			return Decimal.recip(this)
		}
		
		static reciprocal(v) {
			return Decimal.recip(v)
		}
		
		reciprocal() {
			return Decimal.recip(this)
		}
		
		static reciprocate(v) {
			return Decimal.recip(v)
		}
		
		reciprocate() {
			return Decimal.recip(this)
		}
		
		static mod(v1,v2) {
			v1=new Decimal(v1)
			v2=new Decimal(v2)
			if ((v1.l==Number.POSITIVE_INFINITY||v1.l==Number.NEGATIVE_INFINITY)&&v2.l==v1.l) {
				v1.l=Number.NEGATIVE_INFINITY
				return v1
			}
			var expdiff=v1.l-v2.l
			if (expdiff<0) return v1
			if (expdiff>=15) v2.l=Number.NEGATIVE_INFINITY
			else v2.l=v2.l+Math.log10(Math.pow(10,expdiff)%1)
			return v2
		}
		
		mod(v) {
			return Decimal.mod(this,v)
		}
		
		static remainder(v1,v2) {
			return Decimal.mod(v1,v2)
		}
		
		remainder(v) {
			return Decimal.mod(this,v)
		}
		
		static pow(v,power) {
			v=new Decimal(v)
			v.l=v.l*power
			return v
		}
		
		pow(v) {
			return Decimal.pow(this,v)
		}
		
		static power(v,power) {
			return Decimal.pow(v,power)
		}
		
		power(v) {
			return Decimal.pow(this,v)
		}
		
		pow_b(v) {
			return Decimal.pow(v,this)
		}
		
		static sqr(v) {
			v=new Decimal(v)
			v.l=v.l*2
			return v
		}
		
		sqr() {
			return Decimal.square(this)
		}
		
		static square(v) {
			return Decimal.sqr(v)
		}
		
		square() {
			return Decimal.sqr(this)
		}
		
		static cub(v) {
			v=new Decimal(v)
			v.l=v.l*3
			return v
		}
		
		cub() {
			return Decimal.cube(this)
		}
		
		static cube(v) {
			return Decimal.cub(v)
		}
		
		cube() {
			return Decimal.cub(this)
		}
		
		static exp(v) {
			v=new Decimal(v)
			v.l=v.l*Math.log10(Math.E)
			return v
		}
		
		exp() {
			return Decimal.exp(this)
		}
		
		static root(v,power) {
			v=new Decimal(v)
			v.l=v.l/power
			return v
		}
		
		root(v) {
			return Decimal.root(this,v)
		}
		
		static sqrt(v) {
			v=new Decimal(v)
			v.l=v.l/2
			return v
		}
		
		sqrt() {
			return Decimal.sqrt(this)
		}
		
		static cbrt(v) {
			v=new Decimal(v)
			v.l=v.l/3
			return v
		}
		
		cbrt() {
			return Decimal.cbrt(this)
		}
		
		static log10(v) {
			v=new Decimal(v)
			return v.l
		}
		
		log10() {
			return this.l
		}
		
		static log10integer(v) {
			v=new Decimal(v)
			return Math.floor(v.l)
		}
		
		log10integer() {
			return Decimal.log10integer(this)
		}
		
		static log10remainder(v) {
			v=new Decimal(v)
			return v.l-Math.floor(v.l)
		}
		
		log10remainder() {
			return Decimal.log10remainder(this)
		}
		
		static log2(v) {
			v=new Decimal(v)
			if (v.l >= 5.411595565927716e+307) {
				v.l = Math.log10(v.l) + Math.log10(3.32192809488736234787)
				return v
			}
			return v.l*3.32192809488736234787
		}
		
		log2() {
			return Decimal.log2(this)
		}
		
		static log(v,b) {
			v=new Decimal(v)
			b=new Decimal(b)
			return v.l/b.l
		}
		
		log(b) {
			return Decimal.log(this,b)
		}
		
		static l(v,b) {
			return Decimal.log(v,b)
		}
		
		l(b) {
			return Decimal.log(this,b)
		}
		
		static ln(v) {
			v=new Decimal(v)
			return v.l*2.30258509299404568402
		}
		
		ln() {
			return this.l*2.30258509299404568402
		}
		
		static floor(v) {
			v=new Decimal(v)
			if (v.l<0) v.l=Number.NEGATIVE_INFINITY
			else if (v.l<15) v.l=Math.log10(Math.floor(Math.pow(10,v.l)+Math.pow(10,v.l-14)))
			return v
		}
		
		floor() {
			return Decimal.floor(this)
		}
		
		static ceil(v) {
			v=new Decimal(v)
			if (v.l==Number.NEGATIVE_INFINITY) return v
			else if (v.l<0) v.l=0
			else if (v.l<15) v.l=Math.log10(Math.ceil(Math.pow(10,v.l)-Math.pow(10,v.l-14)))
			return v
		}
		
		ceil() {
			return Decimal.ceil(this)
		}
		
		static round(v) {
			v=new Decimal(v)
			if (v.l<=-1) v.l=Number.NEGATIVE_INFINITY
			else if (v.l<15) v.l=Math.log10(Math.round(Math.pow(10,v.l)))
			return v
		}
		
		round() {
			return Decimal.round(this)
		}
		
		static min(v1,v2) {
			v1=new Decimal(v1)
			v2=new Decimal(v2)
			if (v1.l>v2.l) return v2
			return v1
		}
		
		min(v) {
			return Decimal.min(this,v)
		}
		
		static max(v1,v2) {
			v1=new Decimal(v1)
			v2=new Decimal(v2)
			if (v1.l>v2.l) return v1
			return v2
		}
		
		max(v) {
			return Decimal.max(this,v)
		}
		
		static cmp(v1,v2) {
			v1=new Decimal(v1)
			v2=new Decimal(v2)
			if (v1.l>v2.l) return 1
			if (v1.l<v2.l) return -1
			return 0
		}
		
		compareTo(v) {
			return Decimal.cmp(this,v)
		}
		
		static compare(v1,v2) {
			return Decimal.cmp(v1,v2)
		}
		
		compare(v) {
			return Decimal.cmp(this,v)
		}
		
		static compareTo(v1,v2) {
			return Decimal.cmp(v1,v2)
		}
		
		compareTo(v) {
			return Decimal.cmp(this,v)
		}
		
		static lt(v1,v2) {
			v1=new Decimal(v1)
			v2=new Decimal(v2)
			return v1.l<v2.l
		}
		
		lt(v) {
			return Decimal.lt(this,v)
		}
		
		static lte(v1,v2) {
			v1=new Decimal(v1)
			v2=new Decimal(v2)
			return v1.l<=v2.l
		}
		
		lte(v) {
			return Decimal.lte(this,v)
		}
		
		static eq(v1,v2) {
			v1=new Decimal(v1)
			v2=new Decimal(v2)
			return v1.l==v2.l
		}
		
		eq(v) {
			return Decimal.eq(this,v)
		}
		
		static equals(v1,v2) {
			return Decimal.eq(v1,v2)
		}
		
		equals(v) {
			return Decimal.eq(this,v)
		}
		
		static neq(v1,v2) {
			v1=new Decimal(v1)
			v2=new Decimal(v2)
			return v1.l!=v2.l
		}
		
		neq(v) {
			return Decimal.neq(this,v)
		}
		
		static notEquals(v1,v2) {
			return Decimal.neq(v1,v2)
		}
		
		notEquals(v) {
			return Decimal.neq(this,v)
		}
		
		static gte(v1,v2) {
			v1=new Decimal(v1)
			v2=new Decimal(v2)
			return v1.l>=v2.l
		}
		
		gte(v) {
			return Decimal.gte(this,v)
		}
		
		static gt(v1,v2) {
			v1=new Decimal(v1)
			v2=new Decimal(v2)
			return v1.l>v2.l
		}
		
		gt(v) {
			return Decimal.gt(this,v)
		}
		
		static isFinite(v) {
			v=new Decimal(v)
			return v.l<Number.POSITIVE_INFINITY
		}
		
		isFinite() {
			return Decimal.isFinite(this)
		}
		
		get mantissaAndExponent() {
			if (this.l==Number.NEGATIVE_INFINITY) return {m:0,e:0}
			var logInt=Math.floor(this.l)
			return {m:Math.pow(10,this.l-logInt),e:logInt}
		}
		get e() {
			if (this.l==Number.NEGATIVE_INFINITY) return 0
			return Math.floor(this.l)
		}
		get exponent() {return this.e;}
		get m() {
			if (this.l==Number.NEGATIVE_INFINITY) return 0
			var logInt=Math.floor(this.l)
			return Math.pow(10,this.l-logInt)
		}
		get mantissa() {return this.m;}
		get logarithm() {return this.l;}
		
		vOf() { return this.toString(); }
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