//Start Yaffle's BigInteger (https://github.com/Yaffle/BigInteger/)
!function(r){"use strict";for(var n=function(r,n,t,e){for(var i=n-1,u=0,o=e<10?e:10;++i<t;){var a=r.charCodeAt(i),f=a-48;if((f<0||o<=f)&&((f=-55+a)<10||e<=f)&&((f=-87+a)<10||e<=f))throw new RangeError;u=u*e+f}return u},t=function(r){for(var n=new Array(r),t=-1;++t<r;)n[t]=0;return n},e=2/9007199254740992;1+e/2!=1;)e/=2;for(var i=2/e,u=134217728;u*u<2/e;)u*=2;var o=u+1,a=function(r,n,t){var e=o*r,i=e-(e-r),u=r-i,a=o*n,f=a-(a-n),g=n-f;return i*f+t+i*g+u*f+u*g},f=function(r){var n=r-i+i;return n>r?n-1:n},g=function(r,n,t){var e=n*t,u=a(n,t,-e),o=f(e/i),g=e-o*i+u;return g<0&&(g+=i,o-=1),(g+=r-i)<0?g+=i:o+=1,{lo:g,hi:o}},h=function(r,n,t){if(r>=t)throw new RangeError;var e=r*i,u=f(e/t),o=0-a(u,t,-e);o<0&&(u-=1,o+=t),(o+=n-t)<0?o+=t:u+=1;var g=f(o/t);return{q:u+=g,r:o-=g*t}};function v(r,n,t){this.sign=r,this.magnitude=n,this.length=t}var d=function(r,n,t){return new v(r,n,t)};v.parseInt=function(r,e){if(void 0==e&&(e=10),10!==e&&(e<2||e>36||e!==Math.floor(e)))throw new RangeError("radix argument must be an integer between 2 and 36");var u=r.length;if(0===u)throw new RangeError;var o=0,a=r.charCodeAt(0),h=0;if(43===a&&(h=1),45===a&&(h=1,o=1),0===(u-=h))throw new RangeError;if(function(r,n){for(var t=1,e=r,i=n;i>1;){var u=Math.floor(i/2);2*u!==i&&(t*=e),e*=e,i=u}return t*e}(e,u)<=i){var v=n(r,h,h+u,e),l=t(1);return l[0]=v,d(0===v?0:o,l,0===v?0:1)}for(var m=0,c=1,s=f(i/e);c<=s;)m+=1,c*=e;for(var b=Math.floor((u-1)/m)+1,p=t(b),w=h+1+(u-1-(b-1)*m)-m,y=-1;++y<b;){for(var R=w+y*m,E=n(r,R>=h?R:h,R+m,e),A=-1;++A<y;){var S=g(E,p[A],c),I=S.lo,M=S.hi;p[A]=I,E=M}p[y]=E}for(;b>0&&0===p[b-1];)b-=1;return d(0===b?0:o,p,b)};var l=function(r,n){if(r.length!==n.length)return r.length<n.length?-1:1;for(var t=r.length;--t>=0;)if(r.magnitude[t]!==n.magnitude[t])return r.magnitude[t]<n.magnitude[t]?-1:1;return 0};v.compareTo=function(r,n){var t=r.sign===n.sign?l(r,n):1;return 1===r.sign?0-t:t},v.addAndSubtract=function(r,n,e){var u=l(r,n),o=u<0?0!==e?1-n.sign:n.sign:r.sign,a=u<0?r:n,f=u<0?n:r;if(0===a.length)return d(o,f.magnitude,f.length);var g=0,h=f.length;if(r.sign!==(0!==e?1-n.sign:n.sign)){if(g=1,a.length===h)for(;h>0&&a.magnitude[h-1]===f.magnitude[h-1];)h-=1;if(0===h)return d(0,t(0),0)}for(var v=t(h+(1-g)),m=-1,c=0;++m<h;){var s=m<a.length?a.magnitude[m]:0;(c+=f.magnitude[m]+(0!==g?0-s:s-i))<0?(v[m]=i+c,c=0-g):(v[m]=c,c=1-g)}if(0===g)v[h]=c,h+=0!==c?1:0;else for(;h>0&&0===v[h-1];)h-=1;return d(o,v,h)},v.add=function(r,n){return v.addAndSubtract(r,n,0)},v.subtract=function(r,n){return v.addAndSubtract(r,n,1)},v.multiply=function(r,n){if(0===r.length||0===n.length)return d(0,t(0),0);var e=1===r.sign?1-n.sign:n.sign;if(1===r.length&&1===r.magnitude[0])return d(e,n.magnitude,n.length);if(1===n.length&&1===n.magnitude[0])return d(e,r.magnitude,r.length);for(var u=r.length+n.length,o=t(u),a=-1;++a<r.length;)o[a]=0;for(var f=-1;++f<n.length;){for(var h=0,v=-1;++v<r.length;){var l=0;(h+=o[v+f]-i)>=0?l=1:h+=i;var m=g(h,r.magnitude[v],n.magnitude[f]),c=m.lo,s=m.hi;o[v+f]=c,h=s+l}o[r.length+f]=h}for(;u>0&&0===o[u-1];)u-=1;return d(e,o,u)},v.divideAndRemainder=function(r,n,e){if(0===n.length)throw new RangeError;if(0===r.length)return d(0,t(0),0);var u=1===r.sign?1-n.sign:n.sign;if(1===n.length&&1===n.magnitude[0])return 0!==e?d(u,r.magnitude,r.length):d(0,t(0),0);for(var o=r.length+1,a=t(o+n.length+1),v=a,l=a,m=-1;++m<r.length;)l[m]=r.magnitude[m];l[r.length]=0;for(var c=-1;++c<n.length;)v[o+c]=n.magnitude[c];v[o+n.length]=0;var s=v[o+n.length-1],b=1;if(n.length>1){if((b=f(i/(s+1)))>1){for(var p=0,w=-1;++w<o+n.length;){var y=g(p,a[w],b),R=y.lo,E=y.hi;a[w]=R,p=E}a[o+n.length]=p,s=v[o+n.length-1]}if(s<f(i/2))throw new RangeError}var A=r.length-n.length+1;A<0&&(A=0);for(var S=void 0,I=0,M=A;--M>=0;){var N=n.length+M,q=i-1;if(l[N]!==s)q=h(l[N],l[N-1],s).q;for(var T=0,x=0,C=M-1;++C<=N;){var B=l[C],j=g(x,q,v[o+C-M]),k=j.lo,z=j.hi;l[C]=k,x=z,(T+=B-l[C])<0?(l[C]=i+T,T=-1):(l[C]=T,T=0)}for(;0!==T;){q-=1;for(var D=0,F=M-1;++F<=N;)(D+=l[F]-i+v[o+F-M])<0?(l[F]=i+D,D=0):(l[F]=D,D=1);T+=D}0!==e&&0!==q&&(0===I&&(S=t(I=M+1)),S[M]=q)}if(0!==e)return 0===I?d(0,t(0),0):d(u,S,I);var G=r.length+1;if(b>1){for(var H=0,J=G;--J>=0;){var K=h(H,l[J],b),L=K.q,O=K.r;l[J]=L,H=O}if(0!==H)throw new RangeError}for(;G>0&&0===l[G-1];)G-=1;if(0===G)return d(0,t(0),0);for(var P=t(G),Q=-1;++Q<G;)P[Q]=l[Q];return d(r.sign,P,G)},v.divide=function(r,n){return v.divideAndRemainder(r,n,1)},v.remainder=function(r,n){return v.divideAndRemainder(r,n,0)},v.negate=function(r){return d(0===r.length?r.sign:1-r.sign,r.magnitude,r.length)},v.prototype.toString=function(r){if(void 0==r&&(r=10),10!==r&&(r<2||r>36||r!==Math.floor(r)))throw new RangeError("radix argument must be an integer between 2 and 36");var n=1===this.sign?"-":"",e=this.length;if(0===e)return"0";if(1===e)return n+=this.magnitude[0].toString(r);for(var u=0,o=1,a=f(i/r);o<=a;)u+=1,o*=r;if(o*r<=i)throw new RangeError;for(var g=e+Math.floor((e-1)/u)+1,v=t(g),d=-1;++d<e;)v[d]=this.magnitude[d];for(var l=g;0!==e;){for(var m=0,c=e;--c>=0;){var s=h(m,v[c],o),b=s.q,p=s.r;v[c]=b,m=p}for(;e>0&&0===v[e-1];)e-=1;v[l-=1]=m}for(n+=v[l].toString(r);++l<g;){for(var w=v[l].toString(r),y=u-w.length;--y>=0;)n+="0";n+=w}return n},v.fromNumber=function(r){var n=t(1);return n[0]=r<0?0-r:0+r,d(r<0?1:0,n,0===r?0:1)},v.isSafeInteger=function(r){return r.length<2},v.toNumber=function(r){if(0===r.length)return 0;if(1===r.length)return 1===r.sign?0-r.magnitude[0]:r.magnitude[0];throw new RangeError};var m=function(r){return function(n,t){return r(n,t)}},c=m(function(r,n){return v.parseInt(r,n)}),s=function(r){return"number"==typeof r?v.fromNumber(r):r},b=m(function(r,n){var t=s(r),e=s(n);return v.compareTo(t,e)}),p=function(r){return v.isSafeInteger(r)?v.toNumber(r):r},w=m(function(r,n){var t=s(r),e=s(n);return p(v.add(t,e))}),y=m(function(r,n){var t=s(r),e=s(n);return p(v.subtract(t,e))}),R=m(function(r,n){var t=s(r),e=s(n);return p(v.multiply(t,e))}),E=m(function(r,n){var t=s(r),e=s(n);return p(v.divide(t,e))}),A=m(function(r,n){var t=s(r),e=s(n);return p(v.remainder(t,e))}),S=m(function(r){var n=s(r);return p(v.negate(n))});function I(){}I.parseInt=function(r,n){if("string"==typeof r&&"number"==typeof n){var t=0+Number.parseInt(r,n);if(t>=-9007199254740991&&t<=9007199254740991)return t}return c(r,n)},I.compareTo=function(r,n){return"number"==typeof r&&"number"==typeof n?r<n?-1:n<r?1:0:b(r,n)},I.add=function(r,n){if("number"==typeof r&&"number"==typeof n){var t=r+n;if(t>=-9007199254740991&&t<=9007199254740991)return t}return w(r,n)},I.subtract=function(r,n){if("number"==typeof r&&"number"==typeof n){var t=r-n;if(t>=-9007199254740991&&t<=9007199254740991)return t}return y(r,n)},I.multiply=function(r,n){if("number"==typeof r&&"number"==typeof n){var t=0+r*n;if(t>=-9007199254740991&&t<=9007199254740991)return t}return R(r,n)},I.divide=function(r,n){return"number"==typeof r&&"number"==typeof n&&0!==n?0===r?0:r>0&&n>0||r<0&&n<0?0+Math.floor(r/n):0-Math.floor((0-r)/n):E(r,n)},I.remainder=function(r,n){return"number"==typeof r&&"number"==typeof n&&0!==n?0+r%n:A(r,n)},I.negate=function(r){return"number"==typeof r?0-r:S(r)},r.BigInteger=I}(this);
//End BigInteger

//Credits to Patashu for powers of 10 lookup table.
var powersof10 = [1e-323, 1e-322, 1e-321, 1e-320, 1e-319, 1e-318, 1e-317, 1e-316, 1e-315, 1e-314, 1e-313, 1e-312, 1e-311, 1e-310, 1e-309, 1e-308, 1e-307, 1e-306, 1e-305, 1e-304, 1e-303, 1e-302, 1e-301, 1e-300, 1e-299, 1e-298, 1e-297, 1e-296, 1e-295, 1e-294, 1e-293, 1e-292, 1e-291, 1e-290, 1e-289, 1e-288, 1e-287, 1e-286, 1e-285, 1e-284, 1e-283, 1e-282, 1e-281, 1e-280, 1e-279, 1e-278, 1e-277, 1e-276, 1e-275, 1e-274, 1e-273, 1e-272, 1e-271, 1e-270, 1e-269, 1e-268, 1e-267, 1e-266, 1e-265, 1e-264, 1e-263, 1e-262, 1e-261, 1e-260, 1e-259, 1e-258, 1e-257, 1e-256, 1e-255, 1e-254, 1e-253, 1e-252, 1e-251, 1e-250, 1e-249, 1e-248, 1e-247, 1e-246, 1e-245, 1e-244, 1e-243, 1e-242, 1e-241, 1e-240, 1e-239, 1e-238, 1e-237, 1e-236, 1e-235, 1e-234, 1e-233, 1e-232, 1e-231, 1e-230, 1e-229, 1e-228, 1e-227, 1e-226, 1e-225, 1e-224, 1e-223, 1e-222, 1e-221, 1e-220, 1e-219, 1e-218, 1e-217, 1e-216, 1e-215, 1e-214, 1e-213, 1e-212, 1e-211, 1e-210, 1e-209, 1e-208, 1e-207, 1e-206, 1e-205, 1e-204, 1e-203, 1e-202, 1e-201, 1e-200, 1e-199, 1e-198, 1e-197, 1e-196, 1e-195, 1e-194, 1e-193, 1e-192, 1e-191, 1e-190, 1e-189, 1e-188, 1e-187, 1e-186, 1e-185, 1e-184, 1e-183, 1e-182, 1e-181, 1e-180, 1e-179, 1e-178, 1e-177, 1e-176, 1e-175, 1e-174, 1e-173, 1e-172, 1e-171, 1e-170, 1e-169, 1e-168, 1e-167, 1e-166, 1e-165, 1e-164, 1e-163, 1e-162, 1e-161, 1e-160, 1e-159, 1e-158, 1e-157, 1e-156, 1e-155, 1e-154, 1e-153, 1e-152, 1e-151, 1e-150, 1e-149, 1e-148, 1e-147, 1e-146, 1e-145, 1e-144, 1e-143, 1e-142, 1e-141, 1e-140, 1e-139, 1e-138, 1e-137, 1e-136, 1e-135, 1e-134, 1e-133, 1e-132, 1e-131, 1e-130, 1e-129, 1e-128, 1e-127, 1e-126, 1e-125, 1e-124, 1e-123, 1e-122, 1e-121, 1e-120, 1e-119, 1e-118, 1e-117, 1e-116, 1e-115, 1e-114, 1e-113, 1e-112, 1e-111, 1e-110, 1e-109, 1e-108, 1e-107, 1e-106, 1e-105, 1e-104, 1e-103, 1e-102, 1e-101, 1e-100, 1e-99, 1e-98, 1e-97, 1e-96, 1e-95, 1e-94, 1e-93, 1e-92, 1e-91, 1e-90, 1e-89, 1e-88, 1e-87, 1e-86, 1e-85, 1e-84, 1e-83, 1e-82, 1e-81, 1e-80, 1e-79, 1e-78, 1e-77, 1e-76, 1e-75, 1e-74, 1e-73, 1e-72, 1e-71, 1e-70, 1e-69, 1e-68, 1e-67, 1e-66, 1e-65, 1e-64, 1e-63, 1e-62, 1e-61, 1e-60, 1e-59, 1e-58, 1e-57, 1e-56, 1e-55, 1e-54, 1e-53, 1e-52, 1e-51, 1e-50, 1e-49, 1e-48, 1e-47, 1e-46, 1e-45, 1e-44, 1e-43, 1e-42, 1e-41, 1e-40, 1e-39, 1e-38, 1e-37, 1e-36, 1e-35, 1e-34, 1e-33, 1e-32, 1e-31, 1e-30, 1e-29, 1e-28, 1e-27, 1e-26, 1e-25, 1e-24, 1e-23, 1e-22, 1e-21, 1e-20, 1e-19, 1e-18, 1e-17, 1e-16, 1e-15, 1e-14, 1e-13, 1e-12, 1e-11, 1e-10, 1e-9, 1e-8, 1e-7, 1e-6, 1e-5, 1e-4, 1e-3, 1e-2, 1e-1, 1e0, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13, 1e14, 1e15, 1e16, 1e17, 1e18, 1e19, 1e20, 1e21, 1e22, 1e23, 1e24, 1e25, 1e26, 1e27, 1e28, 1e29, 1e30, 1e31, 1e32, 1e33, 1e34, 1e35, 1e36, 1e37, 1e38, 1e39, 1e40, 1e41, 1e42, 1e43, 1e44, 1e45, 1e46, 1e47, 1e48, 1e49, 1e50, 1e51, 1e52, 1e53, 1e54, 1e55, 1e56, 1e57, 1e58, 1e59, 1e60, 1e61, 1e62, 1e63, 1e64, 1e65, 1e66, 1e67, 1e68, 1e69, 1e70, 1e71, 1e72, 1e73, 1e74, 1e75, 1e76, 1e77, 1e78, 1e79, 1e80, 1e81, 1e82, 1e83, 1e84, 1e85, 1e86, 1e87, 1e88, 1e89, 1e90, 1e91, 1e92, 1e93, 1e94, 1e95, 1e96, 1e97, 1e98, 1e99, 1e100, 1e101, 1e102, 1e103, 1e104, 1e105, 1e106, 1e107, 1e108, 1e109, 1e110, 1e111, 1e112, 1e113, 1e114, 1e115, 1e116, 1e117, 1e118, 1e119, 1e120, 1e121, 1e122, 1e123, 1e124, 1e125, 1e126, 1e127, 1e128, 1e129, 1e130, 1e131, 1e132, 1e133, 1e134, 1e135, 1e136, 1e137, 1e138, 1e139, 1e140, 1e141, 1e142, 1e143, 1e144, 1e145, 1e146, 1e147, 1e148, 1e149, 1e150, 1e151, 1e152, 1e153, 1e154, 1e155, 1e156, 1e157, 1e158, 1e159, 1e160, 1e161, 1e162, 1e163, 1e164, 1e165, 1e166, 1e167, 1e168, 1e169, 1e170, 1e171, 1e172, 1e173, 1e174, 1e175, 1e176, 1e177, 1e178, 1e179, 1e180, 1e181, 1e182, 1e183, 1e184, 1e185, 1e186, 1e187, 1e188, 1e189, 1e190, 1e191, 1e192, 1e193, 1e194, 1e195, 1e196, 1e197, 1e198, 1e199, 1e200, 1e201, 1e202, 1e203, 1e204, 1e205, 1e206, 1e207, 1e208, 1e209, 1e210, 1e211, 1e212, 1e213, 1e214, 1e215, 1e216, 1e217, 1e218, 1e219, 1e220, 1e221, 1e222, 1e223, 1e224, 1e225, 1e226, 1e227, 1e228, 1e229, 1e230, 1e231, 1e232, 1e233, 1e234, 1e235, 1e236, 1e237, 1e238, 1e239, 1e240, 1e241, 1e242, 1e243, 1e244, 1e245, 1e246, 1e247, 1e248, 1e249, 1e250, 1e251, 1e252, 1e253, 1e254, 1e255, 1e256, 1e257, 1e258, 1e259, 1e260, 1e261, 1e262, 1e263, 1e264, 1e265, 1e266, 1e267, 1e268, 1e269, 1e270, 1e271, 1e272, 1e273, 1e274, 1e275, 1e276, 1e277, 1e278, 1e279, 1e280, 1e281, 1e282, 1e283, 1e284, 1e285, 1e286, 1e287, 1e288, 1e289, 1e290, 1e291, 1e292, 1e293, 1e294, 1e295, 1e296, 1e297, 1e298, 1e299, 1e300, 1e301, 1e302, 1e303, 1e304, 1e305, 1e306, 1e307, 1e308];
var indexof0inpowersof10 = 323;
	
function turnExponentialToFixed(number) {
	number=number.toString()
	if (number.indexOf('e')==-1) return number
	var split1=number.split('e')
	var indexof=split1[0].indexOf('.')
	if (indexof==-1) return split1[0]+'0'.repeat(parseInt(split1[1]))
	var split2=split1[0].split('.')
	return split2[0]+split2[1]+'0'.repeat(parseInt(split1[1])-split2[1].length)
}

//Start accurate BigInteger multiply function
function BigIntegerMultiply(value1,value2) {
	if (value2.magnitude!=undefined) return BigInteger.multiply(value1,value2)
	if (typeof(value1)=='number') return value1*value2
	
	if (value2%1==0) return BigInteger.multiply(value1,value2)
	return BigInteger.divide(BigInteger.multiply(value1,BigInteger.add(BigInteger.multiply(Math.floor(value2),9007199254740992),(value2%1)*9007199254740992)),9007199254740992)
}

//Start accurate BigInteger divide function
function BigIntegerDivide(value1,value2) {
	if (value2.magnitude!=undefined) return BigInteger.divide(value1,value2)
	if (typeof(value1)=='number') return value1/value2
	
	if (value2%1==0) return BigInteger.divide(value1,value2)
	return BigInteger.divide(BigInteger.multiply(value1,9007199254740992),BigInteger.add(BigInteger.multiply(Math.floor(value2),9007199254740992),(value2%1)*9007199254740992))
}

;(function (globalScope) {
	'use strict';	
	/*
		# magna_numerus.js
		My attempt to store large numbers above JavaScript number limit.

		---

		If you want to use up to e(9e15), please use break_infinity.js.

		If you want to use up to e(1.8e308), please use break_break_infinity.js.

		https://github.com/Patashu/break_infinity.js

		---

		This library uses Decimal which is expressed as (mantissa)*10^(exponent). Here are factors for Decimal:
		- Mantissa uses float from 1 to 10 or 0 if the exponent was 0.
		- Exponent uses BigInteger in every single value up to 10^65536-1 away from the center.
	*/
	const EXP_LIMIT=BigInteger.parseInt('9'.repeat(65536))
	
	class Decimal {
		static fromValue(value) {
			if (value==null) {
				return {mantissa:0,exponent:0}
			} else if (value instanceof Decimal) {
				return value
			} else if (value.magnitude!=undefined) {
				var magnitude=value.magnitude
				var check=magnitude.length-1
				while (magnitude[check]==0) {
					check--
				}
				if (value.sign==1) {
					if (check==0) return Decimal.fromMantissaExponent(-magnitude[0],0)
					return Decimal.pow(9007199254740992,check).times(-magnitude[check]-magnitude[check-1]/9007199254740992)
				}
				if (check==0) return Decimal.fromMantissaExponent(magnitude[0],0)
				return Decimal.pow(9007199254740992,check).times(magnitude[check]+magnitude[check-1]/9007199254740992)
			} else if (typeof(value)=='string') {
				if (value=='Infinity') return {mantissa:1,exponent:EXP_LIMIT}
				if (value=='-Infinity') return {mantissa:-1,exponent:EXP_LIMIT}
				var mantissa=value
				var exponent=0
				var indexof=value.indexOf('e')
				if (indexof>0) {
					mantissa=value.slice(0,indexof)
					exponent=BigInteger.parseInt(turnExponentialToFixed(value.slice(indexof+1,value.length)))
				}
				var mult=1
				if (mantissa.indexOf('-')>0) {
					mantissa=mantissa.replace('-','')
					mult=-1
				}
				var manDecimal=''
				if (mantissa.indexOf('.')>0) {
					var split2=mantissa.split('.')
					mantissa=split2[0]
					manDecimal=split2[1]
				}
				exponent=BigInteger.add(exponent,mantissa.length-1)
				mantissa=mantissa+manDecimal
				mantissa=mantissa.slice(0,Math.min(mantissa.length,15))*powersof10[Math.max(324-mantissa.length,309)]
				return Decimal.fromMantissaExponent(mantissa*mult,exponent)
			} else if (typeof(value)=='number') {
				if (value==Number.POSITIVE_INFINITY) {
					return {mantissa:1,exponent:EXP_LIMIT}
				} else if (value==Number.NEGATIVE_INFINITY) {
					return {mantissa:-1,exponent:EXP_LIMIT}
				} else if (value==0) {
					return {mantissa:0,exponent:0}
				} else {
					var log=Math.floor(Math.log10(Math.abs(value)))
					return {mantissa:Math.round(value*powersof10[indexof0inpowersof10-log+14])/1e14,exponent:log}
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
			var value=new Decimal(0)
			if (mantissa==0) return value
			var mantissalog=Math.floor(Math.log10(Math.abs(mantissa)))
			value.mantissa=Math.round(mantissa*powersof10[indexof0inpowersof10-mantissalog+14])/1e14
			if (mantissalog==0) value.exponent=exponent
			else value.exponent=BigInteger.add(exponent,mantissalog)
			if (BigInteger.compareTo(value.exponent,BigInteger.negate(EXP_LIMIT))<=0) return new Decimal(Number.NEGATIVE_INFINITY)
			if (BigInteger.compareTo(value.exponent,EXP_LIMIT)>=0) return new Decimal(Number.POSITIVE_INFINITY)
			return value
		}
		
		static toString(value) {
			value=new Decimal(value)
			if (BigInteger.compareTo(value.exponent,EXP_LIMIT)==0) {
				if (value.mantissa<0) return '-Infinity'
				return 'Infinity'
			}
			if (value.exponent>20||value.exponent<-7) return value.mantissa+'e'+value.exponent
			return Decimal.toNumber(value).toString()
		}
		
		toString() {
			return Decimal.toString(this)
		}
		
		static toNumber(value) {
			value=new Decimal(value)
			if (value.exponent>308) {
				if (value.mantissa<0) return Number.NEGATIVE_INFINITY
				return Number.POSITIVE_INFINITY
			}
			if (value.exponent<-324) {
				return 0
			}
			return value.mantissa*powersof10[indexof0inpowersof10+value.exponent]
		}
		
		toNumber() {
			return Decimal.toNumber(this)
		}
		
		static toPrecision(value,dp) {
			value=new Decimal(value)
			if (BigInteger.compareTo(value.exponent,EXP_LIMIT)==0) {
				if (value.mantissa<0) return '-Infinity'
				return 'Infinity'
			}
			if (value.exponent>20) return value.mantissa.toPrecision(dp)+'e'+value.exponent
			if (value.exponent<-dp) return '0'
			return (value.mantissa*powersof10[indexof0inpowersof10+value.exponent]).toPrecision(dp)
		}
		
		toPrecision(dp) {
			return Decimal.toPrecision(this,dp)
		}
		
		static toFixed(value,dp) {
			value=new Decimal(value)
			if (BigInteger.compareTo(value.exponent,EXP_LIMIT)==0) {
				if (value.mantissa<0) return '-Infinity'
				return 'Infinity'
			}
			if (value.exponent>20) return value.mantissa.toFixed(dp)+'e'+value.exponent
			if (value.exponent<-dp) return '0'
			return (value.mantissa*powersof10[indexof0inpowersof10+value.exponent]).toFixed(dp)
		}
		
		toFixed(dp) {
			return Decimal.toFixed(this,dp)
		}
		
		static toExponential(value,dp) {
			value=new Decimal(value)
			if (BigInteger.compareTo(value.exponent,EXP_LIMIT)==0) {
				if (value.mantissa<0) return '-Infinity'
				return 'Infinity'
			}
			return (value.mantissa).toFixed(dp)+'e'+value.exponent
		}
		
		toExponential(dp) {
			return Decimal.toExponential(this,dp)
		}
		
		static add(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			if (typeof(value1.exponent)!='number'||typeof(value2.exponent)!='number') {
				var expdiffDecimal=Decimal.sub(value1.exponent,value2.exponent)
				if (expdiffDecimal.exponent>1) {
					if (expdiffDecimal.mantissa<0) return value2
					return value1
				}
			}
			var expdiff=BigInteger.subtract(value1.exponent,value2.exponent)
			if (expdiff>14) return value1
			if (expdiff<-14) return value2
			if (expdiff>0) return Decimal.fromMantissaExponent(Math.round((value1.mantissa+value2.mantissa*powersof10[indexof0inpowersof10-expdiff])*1e14)/1e14,value1.exponent)
			return Decimal.fromMantissaExponent(Math.round((value2.mantissa+value1.mantissa*powersof10[indexof0inpowersof10+expdiff])*1e14)/1e14,value2.exponent)
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
			if (typeof(value1.exponent)!='number'||typeof(value2.exponent)!='number') {
				var expdiffDecimal=Decimal.sub(value1.exponent,value2.exponent)
				if (expdiffDecimal.exponent>1) {
					if (expdiffDecimal.mantissa<0) {
						value2.mantissa=-value2.mantissa
						return value2
					}
					return value1
				}
			}
			var expdiff=BigInteger.subtract(value1.exponent,value2.exponent)
			if (expdiff>14) return value1
			if (expdiff<-14) {
				value2.mantissa=-value2.mantissa
				return value2
			}
			if (expdiff>0) return Decimal.fromMantissaExponent(Math.round((value1.mantissa-value2.mantissa*powersof10[indexof0inpowersof10-expdiff])*1e14)/1e14,value1.exponent)
			return Decimal.fromMantissaExponent(Math.round((value1.mantissa*powersof10[indexof0inpowersof10+expdiff]-value2.mantissa)*1e14)/1e14,value2.exponent)
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
		
		static sign(value) {
			value=new Decimal(value)
			if (value.mantissa<0) return -1
			if (value.mantissa==0) return 0
			return 1
		}
		
		sign() {
			return Decimal.sign(this)
		}
		
		static neg(value) {
			value=new Decimal(value)
			value.mantissa=-value.mantissa
			return value
		}
		
		neg() {
			return Decimal.neg(this)
		}
		
		static negate(value) {
			return Decimal.neg(value)
		}
		
		negate() {
			return Decimal.neg(this)
		}
		
		static mul(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			return Decimal.fromMantissaExponent(value1.mantissa*value2.mantissa,BigInteger.add(value1.exponent,value2.exponent))
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
			return Decimal.fromMantissaExponent(value1.mantissa/value2.mantissa,BigInteger.subtract(value1.exponent,value2.exponent))
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
		
		static recip(value) {
			value=new Decimal(value)
			return Decimal.fromMantissaExponent(1/value.mantissa,BigInteger.negate(value.exponent))
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
		
		static mod(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			if (typeof(value1.exponent)!='number'||typeof(value2.exponent)!='number') {
				var expdiffDecimal=Decimal.sub(value1.exponent,value2.exponent)
				if (expdiffDecimal.exponent>1) {
					if (expdiffDecimal.mantissa<0) return value1
					return new Decimal(0)
				}
			}
			var expdiff=BigInteger.subtract(value1.exponent,value2.exponent)
			if (expdiff>14) return new Decimal(0)
			if (expdiff<-14) return value1
			if (expdiff>0) return Decimal.fromMantissaExponent(value1.mantissa%(value2.mantissa/powersof10[indexof0inpowersof10+expdiff]),value1.exponent)
			if (expdiff==0) return Decimal.fromMantissaExponent(value1.mantissa%value2.mantissa,value1.exponent)
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
			if (typeof(power)=='number') {
				if (power==Number.NEGATIVE_INFINITY) return new Decimal(0)
				if (power==Number.POSITIVE_INFINITY) return new Decimal(Number.POSITIVE_INFINITY)
			}
			if (power instanceof Decimal) power=Decimal.toString(power)
			if (value.compareTo(1)==0) return new Decimal(1)
			if (value.compareTo(10)==0&&power<9007199254740992&&power>-9007199254740992) return Decimal.fromMantissaExponent(Math.pow(10,power%1),Math.floor(power))
			if (power==0) return new Decimal(1)
			if (power==1) return value
			if (power==-1) return Decimal.recip(value)
			if (typeof(power)=='string') {
				if (power<-9007199254740992||power>9007199254740992) power=BigInteger.parseInt(turnExponentialToFixed(power))
				else power=parseFloat(power)
			}
			if (value.mantissa==0) {
				if (power>0) {
					return new Decimal(0)
				} else {
					return new Decimal(Number.POSITIVE_INFINITY)
				}
			} else if (value.mantissa==1) {
				var sumlog=BigIntegerMultiply(BigInteger.multiply(value.exponent,9007199254740992),power)
			} else {
				var mantissalog=BigInteger.multiply(Math.log10(value.mantissa),9007199254740992)
				var exponentlog=BigInteger.multiply(value.exponent,9007199254740992)
				var sumlog=BigIntegerMultiply(BigInteger.add(mantissalog,exponentlog),power)
			}
			var logInt=BigInteger.divide(sumlog,9007199254740992)
			var logDec=BigInteger.remainder(sumlog,9007199254740992)/9007199254740992
			return Decimal.fromMantissaExponent(Math.pow(10,logDec),logInt)
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
		
		static square(value) {
			value=new Decimal(value)
			return Decimal.fromMantissaExponent(value.mantissa*value.mantissa,BigInteger.multiply(value.exponent,2))
		}
		
		square() {
			return Decimal.square(this)
		}
		
		static cube(value) {
			value=new Decimal(value)
			return Decimal.fromMantissaExponent(value.mantissa*value.mantissa*value.mantissa,BigInteger.multiply(value.exponent,3))
		}
		
		cube() {
			return Decimal.cube(this)
		}
		
		static exp(value) {
			return Decimal.pow(Number.E,value)
		}
		
		exp() {
			return Decimal.pow(Number.E,this)
		}
		
		static root(value,power) {
			value=new Decimal(value)
			if (typeof(power)=='number') {
				if (power==Number.NEGATIVE_INFINITY) return new Decimal(0)
				if (power==Number.POSITIVE_INFINITY) return new Decimal(0)
			}
			if (power instanceof Decimal) power=Decimal.toString(power)
			if (value.compareTo(1)==0) return new Decimal(Number.POSITIVE_INFINITY)
			if (value.compareTo(10)==0&&power<9007199254740992&&power>-9007199254740992) return Decimal.fromMantissaExponent(Math.pow(10,(1/power)%1),Math.floor(1/power))
			if (power==0) return new Decimal(1)
			if (power==1) return value
			if (power==-1) return Decimal.recip(value)
			if (typeof(power)=='string') {
				if (power<-9007199254740992||power>9007199254740992) power=BigInteger.parseInt(turnExponentialToFixed(power))
				else power=parseFloat(power)
			}
			if (value.mantissa==0) {
				return new Decimal(0)
			} else if (value.mantissa==1) {
				var sumlog=BigIntegerDivide(BigInteger.multiply(value.exponent,9007199254740992),power)
			} else {
				var mantissalog=BigInteger.multiply(Math.log10(value.mantissa),9007199254740992)
				var exponentlog=BigInteger.multiply(value.exponent,9007199254740992)
				var sumlog=BigIntegerDivide(BigInteger.add(mantissalog,exponentlog),power)
			}
			var logInt=BigInteger.divide(sumlog,9007199254740992)
			var logDec=BigInteger.remainder(sumlog,9007199254740992)/9007199254740992
			return Decimal.fromMantissaExponent(Math.pow(10,logDec),logInt)
		}
		
		root(value) {
			return Decimal.root(this,value)
		}
		
		static sqrt(value) {
			return Decimal.root(value,2)
		}
		
		sqrt() {
			return Decimal.root(this,2)
		}
		
		static cbrt(value) {
			return Decimal.root(value,3)
		}
		
		cbrt() {
			return Decimal.root(this,3)
		}
		
		static log10(value) {
			value=new Decimal(value)
			if (value.mantissa<1) return 0
			if (value.exponent>9007199254740992) return value.exponent
			return value.exponent+Math.log10(value.mantissa)
		}
		
		log10() {
			return Decimal.log10(this)
		}
		
		static log10integer(value) {
			value=new Decimal(value)
			return value.exponent
		}
		
		log10integer() {
			return Decimal.log10integer(this)
		}
		
		static log10remainder(value) {
			value=new Decimal(value)
			if (value.mantissa<1) return 0
			return Math.log10(value.mantissa)
		}
		
		log10remainder() {
			return Decimal.log10remainder(this)
		}
		
		static log(value,base) {
			value=new Decimal(value)
			base=new Decimal(base)
			if (value.mantissa<1) return 0
			if (base.mantissa<1) return Number.POSITIVE_INFINITY
			if (base.mantissa==1&&base.exponent==0) return Number.POSITIVE_INFINITY
			var valueLogInteger=value.exponent
			var valueLogRemainder=Math.log10(value.mantissa)
			var baseLogInteger=base.exponent
			var baseLogRemainder=Math.log10(base.mantissa)
			
			var quotient=BigInteger.add(BigInteger.multiply(baseLogInteger,9007199254740992),baseLogRemainder*9007199254740992)
			if (quotient!=Number.POSITIVE_INFINITY&&quotient!=Number.NEGATIVE_INFINITY) if (valueLogInteger/quotient<9007199254740992||valueLogInteger/quotient>-9007199254740992) {
				var numLog=(valueLogInteger+valueLogRemainder)/(baseLogInteger+baseLogRemainder)
				if (!Number.isNaN(numLog)) if (numLog!=Number.POSITIVE_INFINITY&&numLog!=Number.NEGATIVE_INFINITY) return numLog
			}
			
			return BigInteger.divide(BigInteger.add(BigInteger.multiply(valueLogInteger,9007199254740992),valueLogRemainder*9007199254740992),quotient)
		}
		
		log(base) {
			return Decimal.log(this,base)
		}
		
		static ln(value) {
			return Decimal.log(value,Math.E)
		}
		
		ln() {
			return Decimal.log(this,Math.E)
		}
		
		static floor(value) {
			value=new Decimal(value)
			if (value.exponent>17) return value
			if (value.exponent<0&&value.mantissa<0) return Decimal.fromMantissaExponent(-1,0)
			if (value.exponent<0) return Decimal.fromMantissaExponent(0,0)
			return Decimal.fromMantissaExponent(Math.floor(value.mantissa*powersof10[indexof0inpowersof10+value.exponent]+powersof10[indexof0inpowersof10+value.exponent-16])/powersof10[indexof0inpowersof10+value.exponent],value.exponent)
		}
		
		floor() {
			return Decimal.floor(this)
		}
		
		static ceil(value) {
			value=new Decimal(value)
			if (value.exponent>17) return value
			if (value.exponent<0&&value.mantissa>0) return Decimal.fromMantissaExponent(1,0)
			if (value.exponent<0) return Decimal.fromMantissaExponent(0,0)
			return Decimal.fromMantissaExponent(Math.ceil(value.mantissa*powersof10[indexof0inpowersof10+value.exponent]-powersof10[indexof0inpowersof10+value.exponent-16])/powersof10[indexof0inpowersof10+value.exponent],value.exponent)
		}
		
		ceil() {
			return Decimal.ceil(this)
		}
		
		static round(value) {
			value=new Decimal(value)
			if (value.exponent>17) return value
			if (value.exponent==-1&&value.mantissa>=5) return Decimal.fromMantissaExponent(1,0)
			if (value.exponent==-1&&value.mantissa<=-5) return Decimal.fromMantissaExponent(-1,0)
			if (value.exponent<0) return Decimal.fromMantissaExponent(0,0)
			return Decimal.fromMantissaExponent(Math.round(value.mantissa*powersof10[indexof0inpowersof10+value.exponent])/powersof10[indexof0inpowersof10+value.exponent],value.exponent)
		}
		
		round() {
			return Decimal.ceil(this)
		}
		
		static abs(value) {
			value=new Decimal(value)
			if (value.mantissa<0) value.mantissa=-value.mantissa
			return value
		}
		
		abs() {
			return Decimal.abs(this)
		}
		
		static min(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			var sign1=Decimal.sign(value1)
			var sign2=Decimal.sign(value2)
			if (sign1>sign2) return value2
			if (sign1<sign2) return value1
			if (typeof(value1.exponent)!='number'||typeof(value2.exponent)!='number') {
				var expdiff=Decimal.sub(value1.exponent,value2.exponent)
				if (expdiff.mantissa>0) return value2
				if (expdiff.mantissa<0) return value1
			}
			var firstCompare=BigInteger.compareTo(value1.exponent,value2.exponent)
			if (firstCompare==0) {
				if (value1.mantissa>value2.mantissa) return value2
				return value1
			}
			if (sign1==-1) {
				if (firstCompare<0) return value2
				return value1
			}
			if (firstCompare>0) return value2
			return value1
		}
		
		min(value) {
			return Decimal.min(this,value)
		}
		
		static max(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			var sign1=Decimal.sign(value1)
			var sign2=Decimal.sign(value2)
			if (sign1>sign2) return value1
			if (sign1<sign2) return value2
			if (typeof(value1.exponent)!='number'||typeof(value2.exponent)!='number') {
				var expdiff=Decimal.sub(value1.exponent,value2.exponent)
				if (expdiff.mantissa>0) return value1
				if (expdiff.mantissa<0) return value2
			}
			var firstCompare=BigInteger.compareTo(value1.exponent,value2.exponent)
			if (firstCompare==0) {
				if (value1.mantissa>value2.mantissa) return value1
				return value2
			}
			if (sign1==-1) {
				if (firstCompare<0) return value1
				return value2
			}
			if (firstCompare>0) return value1
			return value2
		}
		
		max(value) {
			return Decimal.max(this,value)
		}
		
		static compareTo(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			var sign1=Decimal.sign(value1)
			var sign2=Decimal.sign(value2)
			if (sign1>sign2) return 1
			if (sign1<sign2) return -1
			if (typeof(value1.exponent)!='number'||typeof(value2.exponent)!='number') {
				var expdiff=Decimal.sub(value1.exponent,value2.exponent)
				if (expdiff.mantissa>0) return 1
				if (expdiff.mantissa<0) return -1
			}
			var firstCompare=BigInteger.compareTo(value1.exponent,value2.exponent)
			if (firstCompare==0) return (value1.mantissa<value2.mantissa)?-1:(value1.mantissa>value2.mantissa)?1:0
			if (sign1==-1) return -firstCompare
			return firstCompare
		}
		
		compareTo(value) {
			return Decimal.compareTo(this,value)
		}
		
		static lt(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			var sign1=Decimal.sign(value1)
			var sign2=Decimal.sign(value2)
			if (sign1>sign2) return false
			if (sign1<sign2) return true
			if (typeof(value1.exponent)!='number'||typeof(value2.exponent)!='number') {
				var expdiff=Decimal.sub(value1.exponent,value2.exponent)
				if (expdiff.mantissa>0) return false
				if (expdiff.mantissa<0) return true
			}
			var firstCompare=BigInteger.compareTo(value1.exponent,value2.exponent)
			if (firstCompare==0) return value1.mantissa<value2.mantissa
			if (sign1==-1) return firstCompare>0
			return firstCompare<0
		}
		
		lt(value) {
			return Decimal.lt(this,value)
		}
		
		static lte(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			var sign1=Decimal.sign(value1)
			var sign2=Decimal.sign(value2)
			if (sign1>sign2) return false
			if (sign1<sign2) return true
			if (typeof(value1.exponent)!='number'||typeof(value2.exponent)!='number') {
				var expdiff=Decimal.sub(value1.exponent,value2.exponent)
				if (expdiff.mantissa>0) return false
				if (expdiff.mantissa<0) return true
			}
			var firstCompare=BigInteger.compareTo(value1.exponent,value2.exponent)
			if (firstCompare==0) return value1.mantissa<=value2.mantissa
			if (sign1==-1) return firstCompare>-1
			return firstCompare<1
		}
		
		lte(value) {
			return Decimal.lte(this,value)
		}
		
		static eq(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			var sign1=Decimal.sign(value1)
			var sign2=Decimal.sign(value2)
			if (sign1!=sign2) return false
			if (typeof(value1.exponent)!='number'||typeof(value2.exponent)!='number') {
				var expdiff=Decimal.sub(value1.exponent,value2.exponent)
				if (expdiff.mantissa!=0) return false
			}
			var firstCompare=BigInteger.compareTo(value1.exponent,value2.exponent)
			if (firstCompare==0) return value1.mantissa==value2.mantissa
			return false
		}
		
		eq(value) {
			return Decimal.eq(this,value)
		}
		
		static neq(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			var sign1=Decimal.sign(value1)
			var sign2=Decimal.sign(value2)
			if (sign1!=sign2) return true
			if (typeof(value1.exponent)!='number'||typeof(value2.exponent)!='number') {
				var expdiff=Decimal.sub(value1.exponent,value2.exponent)
				if (expdiff.mantissa!=0) return true
			}
			var firstCompare=BigInteger.compareTo(value1.exponent,value2.exponent)
			if (firstCompare==0) return value1.mantissa!=value2.mantissa
			return true
		}
		
		neq(value) {
			return Decimal.neq(this,value)
		}
		
		static gte(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			var sign1=Decimal.sign(value1)
			var sign2=Decimal.sign(value2)
			if (sign1>sign2) return true
			if (sign1<sign2) return false
			if (typeof(value1.exponent)!='number'||typeof(value2.exponent)!='number') {
				var expdiff=Decimal.sub(value1.exponent,value2.exponent)
				if (expdiff.mantissa>0) return true
				if (expdiff.mantissa<0) return false
			}
			var firstCompare=BigInteger.compareTo(value1.exponent,value2.exponent)
			if (firstCompare==0) return value1.mantissa>=value2.mantissa
			if (sign1==-1) return firstCompare<1
			return firstCompare>-1
		}
		
		gte(value) {
			return Decimal.gte(this,value)
		}
		
		static gt(value1,value2) {
			value1=new Decimal(value1)
			value2=new Decimal(value2)
			var sign1=Decimal.sign(value1)
			var sign2=Decimal.sign(value2)
			if (sign1>sign2) return true
			if (sign1<sign2) return false
			if (typeof(value1.exponent)!='number'||typeof(value2.exponent)!='number') {
				var expdiff=Decimal.sub(value1.exponent,value2.exponent)
				if (expdiff.mantissa>0) return true
				if (expdiff.mantissa<0) return false
			}
			var firstCompare=BigInteger.compareTo(value1.exponent,value2.exponent)
			if (firstCompare==0) return value1.mantissa>value2.mantissa
			if (sign1==-1) return firstCompare<0
			return firstCompare>0
		}
		
		gt(value) {
			return Decimal.gt(this,value)
		}
		
		static isNegative(value) {
			value=new Decimal(value)
			return value.mantissa<0
		}
		
		isNegative() {
			return Decimal.isNegative(this)
		}
		
		static isFinite(value) {
			value=new Decimal(value)
			return BigInteger.compareTo(value.exponent,EXP_LIMIT)<0
		}
		
		isFinite() {
			return Decimal.isFinite(this)
		}
		
		static sumArithmeticSeries(start,add,length) {
			start=new Decimal(start)
			add=new Decimal(add)
			return Decimal.mul(start,length).add(Decimal.mul(add,Decimal.sub(length,1)).mul(length).div(2))
		}
		
		static sumGeometricSeries(start,ratio,length) {
			start=new Decimal(start)
			ratio=new Decimal(ratio)
			return Decimal.pow(ratio,length).sub(1).div(Decimal.sub(ratio,1)).mul(start)
		}
		
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