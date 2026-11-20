(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.jh(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ez(b)
return new s(c,this)}:function(){if(s===null)s=A.ez(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ez(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
eF(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eA(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.eB==null){A.j6()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.fa("Return interceptor for "+A.o(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.dE
if(o==null)o=$.dE=A.dX(n)
p=q[o]}if(p!=null)return p
p=A.ja(a)
if(p!=null)return p
if(typeof a=="function")return B.L
s=Object.getPrototypeOf(a)
if(s==null)return B.C
if(s===Object.prototype)return B.C
if(typeof q=="function"){o=$.dE
if(o==null)o=$.dE=A.dX(n)
Object.defineProperty(q,o,{value:B.u,enumerable:false,writable:true,configurable:true})
return B.u}return B.u},
hf(a,b){if(a<0||a>4294967295)throw A.c(A.b8(a,0,4294967295,"length",null))
return J.hh(new Array(a),b)},
hg(a,b){if(a<0)throw A.c(A.aN("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.h("n<0>"))},
hh(a,b){var s=A.e(a,b.h("n<0>"))
s.$flags=1
return s},
eU(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hi(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.eU(r))break;++b}return b},
hj(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.i(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.eU(q))break}return b},
ap(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aS.prototype
return J.bK.prototype}if(typeof a=="string")return J.av.prototype
if(a==null)return J.aT.prototype
if(typeof a=="boolean")return J.bJ.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
if(typeof a=="symbol")return J.aX.prototype
if(typeof a=="bigint")return J.aV.prototype
return a}if(a instanceof A.h)return a
return J.eA(a)},
fD(a){if(typeof a=="string")return J.av.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
if(typeof a=="symbol")return J.aX.prototype
if(typeof a=="bigint")return J.aV.prototype
return a}if(a instanceof A.h)return a
return J.eA(a)},
fE(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
if(typeof a=="symbol")return J.aX.prototype
if(typeof a=="bigint")return J.aV.prototype
return a}if(a instanceof A.h)return a
return J.eA(a)},
j1(a){if(typeof a=="number")return J.au.prototype
if(a==null)return a
if(!(a instanceof A.h))return J.aD.prototype
return a},
ad(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ap(a).T(a,b)},
ed(a,b,c){return J.j1(a).n(a,b,c)},
X(a){return J.ap(a).gl(a)},
fZ(a){return J.fE(a).gbQ(a)},
eK(a){return J.fE(a).gG(a)},
eL(a){return J.fD(a).gk(a)},
h_(a){return J.ap(a).gm(a)},
bw(a){return J.ap(a).i(a)},
bH:function bH(){},
bJ:function bJ(){},
aT:function aT(){},
aW:function aW(){},
a6:function a6(){},
c_:function c_(){},
aD:function aD(){},
a5:function a5(){},
aV:function aV(){},
aX:function aX(){},
n:function n(a){this.$ti=a},
bI:function bI(){},
cl:function cl(a){this.$ti=a},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
au:function au(){},
aS:function aS(){},
bK:function bK(){},
av:function av(){}},A={eg:function eg(){},
eX(a){return new A.bO("Field '"+a+"' has been assigned during initialization.")},
a9(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
en(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ey(a,b,c){return a},
eD(a){var s,r
for(s=$.O.length,r=0;r<s;++r)if(a===$.O[r])return!0
return!1},
eS(){return new A.bb("No element")},
bO:function bO(a){this.a=a},
db:function db(){},
aP:function aP(){},
ah:function ah(){},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
H:function H(){},
fM(a){var s=A.fL(a)
if(s!=null)return s
return"minified:"+a},
jH(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
o(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bw(a)
return s},
c0(a){var s,r=$.f2
if(r==null)r=$.f2=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ej(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.i(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
hs(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.c.a5(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
c1(a){var s,r,q,p
if(a instanceof A.h)return A.N(A.bu(a),null)
s=J.ap(a)
if(s===B.K||s===B.M||t.D.b(a)){r=B.w(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.N(A.bu(a),null)},
f3(a){var s,r,q
if(a==null||typeof a=="number"||A.eu(a))return J.bw(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a4)return a.i(0)
if(a instanceof A.am)return a.bz(!0)
s=$.fY()
for(r=0;r<1;++r){q=s[r].cW(a)
if(q!=null)return q}return"Instance of '"+A.c1(a)+"'"},
E(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.bu(s,10)|55296)>>>0,s&1023|56320)}throw A.c(A.b8(a,0,1114111,null,null))},
hr(a){var s=a.$thrownJsError
if(s==null)return null
return A.aL(s)},
f4(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.B(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
i(a,b){if(a==null)J.eL(a)
throw A.c(A.fC(a,b))},
fC(a,b){var s,r="index"
if(!A.ew(b))return new A.S(!0,b,r,null)
s=J.eL(a)
if(b<0||b>=s)return A.eR(b,s,a,r)
return A.ek(b,r)},
iS(a){return new A.S(!0,a,null,null)},
c(a){return A.B(a,new Error())},
B(a,b){var s
if(a==null)a=new A.a1()
b.dartException=a
s=A.ji
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
ji(){return J.bw(this.dartException)},
eH(a,b){throw A.B(a,b==null?new Error():b)},
bv(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.eH(A.ig(a,b,c),s)},
ig(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.bc("'"+s+"': Cannot "+o+" "+l+k+n)},
V(a){throw A.c(A.a0(a))},
a2(a){var s,r,q,p,o,n
a=A.je(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.dh(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
di(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
f9(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
eh(a,b){var s=b==null,r=s?null:b.method
return new A.bM(a,r,s?null:b.receiver)},
a_(a){var s
if(a==null)return new A.d9(a)
if(a instanceof A.aQ){s=a.a
return A.ac(a,s==null?A.bp(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.ac(a,a.dartException)
return A.iQ(a)},
ac(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
iQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.bu(r,16)&8191)===10)switch(q){case 438:return A.ac(a,A.eh(A.o(s)+" (Error "+q+")",null))
case 445:case 5007:A.o(s)
return A.ac(a,new A.b6())}}if(a instanceof TypeError){p=$.fO()
o=$.fP()
n=$.fQ()
m=$.fR()
l=$.fU()
k=$.fV()
j=$.fT()
$.fS()
i=$.fX()
h=$.fW()
g=p.J(s)
if(g!=null)return A.ac(a,A.eh(A.p(s),g))
else{g=o.J(s)
if(g!=null){g.method="call"
return A.ac(a,A.eh(A.p(s),g))}else if(n.J(s)!=null||m.J(s)!=null||l.J(s)!=null||k.J(s)!=null||j.J(s)!=null||m.J(s)!=null||i.J(s)!=null||h.J(s)!=null){A.p(s)
return A.ac(a,new A.b6())}}return A.ac(a,new A.c6(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ba()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ac(a,new A.S(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ba()
return a},
aL(a){var s
if(a instanceof A.aQ)return a.b
if(a==null)return new A.bj(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bj(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fG(a){if(a==null)return J.X(a)
if(typeof a=="object")return A.c0(a)
return J.X(a)},
j0(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.K(0,a[s],a[r])}return b},
ir(a,b,c,d,e,f){t.Z.a(a)
switch(A.u(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.dt("Unsupported number of arguments for wrapped closure"))},
bt(a,b){var s=a.$identity
if(!!s)return s
s=A.iW(a,b)
a.$identity=s
return s},
iW(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ir)},
h6(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.c3().constructor.prototype):Object.create(new A.at(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.eQ(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.h2(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.eQ(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
h2(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.h0)}throw A.c("Error in functionType of tearoff")},
h3(a,b,c,d){var s=A.eP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
eQ(a,b,c,d){if(c)return A.h5(a,b,d)
return A.h3(b.length,d,a,b)},
h4(a,b,c,d){var s=A.eP,r=A.h1
switch(b?-1:a){case 0:throw A.c(new A.c2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
h5(a,b,c){var s,r
if($.eN==null)$.eN=A.eM("interceptor")
if($.eO==null)$.eO=A.eM("receiver")
s=b.length
r=A.h4(s,c,a,b)
return r},
ez(a){return A.h6(a)},
h0(a,b){return A.bo(v.typeUniverse,A.bu(a.a),b)},
eP(a){return a.a},
h1(a){return a.b},
eM(a){var s,r,q,p=new A.at("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.aN("Field name "+a+" not found.",null))},
dX(a){return v.getIsolateTag(a)},
jG(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ja(a){var s,r,q,p,o,n=A.p($.fF.$1(a)),m=$.dW[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e1[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.dQ($.fy.$2(a,n))
if(q!=null){m=$.dW[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e1[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.e2(s)
$.dW[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.e1[n]=s
return s}if(p==="-"){o=A.e2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fH(a,s)
if(p==="*")throw A.c(A.fa(n))
if(v.leafTags[n]===true){o=A.e2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fH(a,s)},
fH(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eF(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
e2(a){return J.eF(a,!1,null,!!a.$iK)},
jc(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.e2(s)
else return J.eF(s,c,null,null)},
j6(){if(!0===$.eB)return
$.eB=!0
A.j7()},
j7(){var s,r,q,p,o,n,m,l
$.dW=Object.create(null)
$.e1=Object.create(null)
A.j5()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fJ.$1(o)
if(n!=null){m=A.jc(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
j5(){var s,r,q,p,o,n,m=B.E()
m=A.aK(B.F,A.aK(B.G,A.aK(B.x,A.aK(B.x,A.aK(B.H,A.aK(B.I,A.aK(B.J(B.w),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fF=new A.dZ(p)
$.fy=new A.e_(o)
$.fJ=new A.e0(n)},
aK(a,b){return a(b)||b},
iY(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
eV(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(A.ee("Illegal RegExp pattern ("+String(o)+")",a))},
iZ(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
je(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
fK(a,b,c){var s,r=b.gcj()
r.lastIndex=0
s=a.replace(r,A.iZ(c))
return s},
G:function G(a,b){this.a=a
this.b=b},
b9:function b9(){},
dh:function dh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b6:function b6(){},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a){this.a=a},
d9:function d9(a){this.a=a},
aQ:function aQ(a,b){this.a=a
this.b=b},
bj:function bj(a){this.a=a
this.b=null},
a4:function a4(){},
bA:function bA(){},
bB:function bB(){},
c4:function c4(){},
c3:function c3(){},
at:function at(a,b){this.a=a
this.b=b},
c2:function c2(a){this.a=a},
aY:function aY(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cr:function cr(a,b){this.a=a
this.b=b
this.c=null},
ag:function ag(a,b){this.a=a
this.$ti=b},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dZ:function dZ(a){this.a=a},
e_:function e_(a){this.a=a},
e0:function e0(a){this.a=a},
am:function am(){},
aG:function aG(){},
bL:function bL(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
dI:function dI(a){this.b=a},
ay:function ay(){},
b4:function b4(){},
bS:function bS(){},
aA:function aA(){},
b2:function b2(){},
b3:function b3(){},
az:function az(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
b5:function b5(){},
bZ:function bZ(){},
be:function be(){},
bf:function bf(){},
bg:function bg(){},
bh:function bh(){},
em(a,b){var s=b.c
return s==null?b.c=A.bm(a,"af",[b.x]):s},
f5(a){var s=a.w
if(s===6||s===7)return A.f5(a.x)
return s===11||s===12},
hw(a){return a.as},
ch(a){return A.dO(v.typeUniverse,a,!1)},
an(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.an(a1,s,a3,a4)
if(r===s)return a2
return A.fh(a1,r,!0)
case 7:s=a2.x
r=A.an(a1,s,a3,a4)
if(r===s)return a2
return A.fg(a1,r,!0)
case 8:q=a2.y
p=A.aJ(a1,q,a3,a4)
if(p===q)return a2
return A.bm(a1,a2.x,p)
case 9:o=a2.x
n=A.an(a1,o,a3,a4)
m=a2.y
l=A.aJ(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.er(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aJ(a1,j,a3,a4)
if(i===j)return a2
return A.fi(a1,k,i)
case 11:h=a2.x
g=A.an(a1,h,a3,a4)
f=a2.y
e=A.iN(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.ff(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aJ(a1,d,a3,a4)
o=a2.x
n=A.an(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.es(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bz("Attempted to substitute unexpected RTI kind "+a0))}},
aJ(a,b,c,d){var s,r,q,p,o=b.length,n=A.dP(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.an(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
iO(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dP(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.an(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
iN(a,b,c,d){var s,r=b.a,q=A.aJ(a,r,c,d),p=b.b,o=A.aJ(a,p,c,d),n=b.c,m=A.iO(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cb()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
fA(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.j3(s)
return a.$S()}return null},
j8(a,b){var s
if(A.f5(b))if(a instanceof A.a4){s=A.fA(a)
if(s!=null)return s}return A.bu(a)},
bu(a){if(a instanceof A.h)return A.ab(a)
if(Array.isArray(a))return A.M(a)
return A.et(J.ap(a))},
M(a){var s=a[v.arrayRti],r=t.q
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
ab(a){var s=a.$ti
return s!=null?s:A.et(a)},
et(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.io(a,s)},
io(a,b){var s=a instanceof A.a4?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.i0(v.typeUniverse,s.name)
b.$ccache=r
return r},
j3(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dO(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
j2(a){return A.ao(A.ab(a))},
ex(a){var s
if(a instanceof A.am)return A.j_(a.$r,a.bc())
s=a instanceof A.a4?A.fA(a):null
if(s!=null)return s
if(t.k.b(a))return J.h_(a).a
if(Array.isArray(a))return A.M(a)
return A.bu(a)},
ao(a){var s=a.r
return s==null?a.r=new A.dN(a):s},
j_(a,b){var s,r,q=b,p=q.length
if(p===0)return t.h
if(0>=p)return A.i(q,0)
s=A.bo(v.typeUniverse,A.ex(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.i(q,r)
s=A.fk(v.typeUniverse,s,A.ex(q[r]))}return A.bo(v.typeUniverse,s,a)},
W(a){return A.ao(A.dO(v.typeUniverse,a,!1))},
im(a){var s=this
s.b=A.iL(s)
return s.b(a)},
iL(a){var s,r,q,p,o
if(a===t.K)return A.ix
if(A.aq(a))return A.iB
s=a.w
if(s===6)return A.ik
if(s===1)return A.ft
if(s===7)return A.is
r=A.iK(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.aq)){a.f="$i"+q
if(q==="j")return A.iv
if(a===t.m)return A.iu
return A.iA}}else if(s===10){p=A.iY(a.x,a.y)
o=p==null?A.ft:p
return o==null?A.bp(o):o}return A.ii},
iK(a){if(a.w===8){if(a===t.S)return A.ew
if(a===t.i||a===t.o)return A.iw
if(a===t.N)return A.iz
if(a===t.y)return A.eu}return null},
il(a){var s=this,r=A.ih
if(A.aq(s))r=A.i6
else if(s===t.K)r=A.bp
else if(A.aM(s)){r=A.ij
if(s===t.a3)r=A.i4
else if(s===t.aD)r=A.dQ
else if(s===t.u)r=A.i2
else if(s===t.ae)r=A.fn
else if(s===t.I)r=A.i3
else if(s===t.aQ)r=A.Y}else if(s===t.S)r=A.u
else if(s===t.N)r=A.p
else if(s===t.y)r=A.z
else if(s===t.o)r=A.i5
else if(s===t.i)r=A.I
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
ii(a){var s=this
if(a==null)return A.aM(s)
return A.j9(v.typeUniverse,A.j8(a,s),s)},
ik(a){if(a==null)return!0
return this.x.b(a)},
iA(a){var s,r=this
if(a==null)return A.aM(r)
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.ap(a)[s]},
iv(a){var s,r=this
if(a==null)return A.aM(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.ap(a)[s]},
iu(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.h)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fs(a){if(typeof a=="object"){if(a instanceof A.h)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
ih(a){var s=this
if(a==null){if(A.aM(s))return a}else if(s.b(a))return a
throw A.B(A.fp(a,s),new Error())},
ij(a){var s=this
if(a==null||s.b(a))return a
throw A.B(A.fp(a,s),new Error())},
fp(a,b){return new A.bk("TypeError: "+A.fb(a,A.N(b,null)))},
fb(a,b){return A.bF(a)+": type '"+A.N(A.ex(a),null)+"' is not a subtype of type '"+b+"'"},
Q(a,b){return new A.bk("TypeError: "+A.fb(a,b))},
is(a){var s=this
return s.x.b(a)||A.em(v.typeUniverse,s).b(a)},
ix(a){return a!=null},
bp(a){if(a!=null)return a
throw A.B(A.Q(a,"Object"),new Error())},
iB(a){return!0},
i6(a){return a},
ft(a){return!1},
eu(a){return!0===a||!1===a},
z(a){if(!0===a)return!0
if(!1===a)return!1
throw A.B(A.Q(a,"bool"),new Error())},
i2(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.B(A.Q(a,"bool?"),new Error())},
I(a){if(typeof a=="number")return a
throw A.B(A.Q(a,"double"),new Error())},
i3(a){if(typeof a=="number")return a
if(a==null)return a
throw A.B(A.Q(a,"double?"),new Error())},
ew(a){return typeof a=="number"&&Math.floor(a)===a},
u(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.B(A.Q(a,"int"),new Error())},
i4(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.B(A.Q(a,"int?"),new Error())},
iw(a){return typeof a=="number"},
i5(a){if(typeof a=="number")return a
throw A.B(A.Q(a,"num"),new Error())},
fn(a){if(typeof a=="number")return a
if(a==null)return a
throw A.B(A.Q(a,"num?"),new Error())},
iz(a){return typeof a=="string"},
p(a){if(typeof a=="string")return a
throw A.B(A.Q(a,"String"),new Error())},
dQ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.B(A.Q(a,"String?"),new Error())},
b(a){if(A.fs(a))return a
throw A.B(A.Q(a,"JSObject"),new Error())},
Y(a){if(a==null)return a
if(A.fs(a))return a
throw A.B(A.Q(a,"JSObject?"),new Error())},
fw(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.N(a[q],b)
return s},
iG(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fw(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.N(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fq(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.e([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.j(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.i(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.N(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.N(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.N(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.N(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.N(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
N(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.N(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.N(a.x,b)+">"
if(l===8){p=A.iP(a.x)
o=a.y
return o.length>0?p+("<"+A.fw(o,b)+">"):p}if(l===10)return A.iG(a,b)
if(l===11)return A.fq(a,b,null)
if(l===12)return A.fq(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.i(b,n)
return b[n]}return"?"},
iP(a){var s=A.fL(a)
if(s!=null)return s
return"minified:"+a},
i1(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
i0(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dO(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bn(a,5,"#")
q=A.dP(s)
for(p=0;p<s;++p)q[p]=r
o=A.bm(a,b,q)
n[b]=o
return o}else return m},
i_(a,b){return A.fl(a.tR,b)},
hZ(a,b){return A.fl(a.eT,b)},
dO(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fj(a,null,b,!1)
r.set(b,s)
return s},
bo(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fj(a,b,c,!0)
q.set(c,r)
return r},
fk(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.er(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
fj(a,b,c,d){return A.hR(A.hL(a,b,c,d))},
aa(a,b){b.a=A.il
b.b=A.im
return b},
bn(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.U(null,null)
s.w=b
s.as=c
r=A.aa(a,s)
a.eC.set(c,r)
return r},
fh(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.hX(a,b,r,c)
a.eC.set(r,s)
return s},
hX(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.aq(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aM(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.U(null,null)
q.w=6
q.x=b
q.as=c
return A.aa(a,q)},
fg(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hV(a,b,r,c)
a.eC.set(r,s)
return s},
hV(a,b,c,d){var s,r
if(d){s=b.w
if(A.aq(b)||b===t.K)return b
else if(s===1)return A.bm(a,"af",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.U(null,null)
r.w=7
r.x=b
r.as=c
return A.aa(a,r)},
hY(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.U(null,null)
s.w=13
s.x=b
s.as=q
r=A.aa(a,s)
a.eC.set(q,r)
return r},
bl(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
hU(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bm(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bl(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.U(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.aa(a,r)
a.eC.set(p,q)
return q},
er(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bl(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.U(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.aa(a,o)
a.eC.set(q,n)
return n},
fi(a,b,c){var s,r,q="+"+(b+"("+A.bl(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.U(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.aa(a,s)
a.eC.set(q,r)
return r},
ff(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bl(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bl(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.hU(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.U(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.aa(a,p)
a.eC.set(r,o)
return o},
es(a,b,c,d){var s,r=b.as+("<"+A.bl(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hW(a,b,c,r,d)
a.eC.set(r,s)
return s},
hW(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dP(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.an(a,b,r,0)
m=A.aJ(a,c,r,0)
return A.es(a,n,m,c!==m)}}l=new A.U(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.aa(a,l)},
hL(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hR(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hN(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.fd(a,r,l,k,!1)
else if(q===46)r=A.fd(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.al(a.u,a.e,k.pop()))
break
case 94:k.push(A.hY(a.u,k.pop()))
break
case 35:k.push(A.bn(a.u,5,"#"))
break
case 64:k.push(A.bn(a.u,2,"@"))
break
case 126:k.push(A.bn(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hP(a,k)
break
case 38:A.hO(a,k)
break
case 63:p=a.u
k.push(A.fh(p,A.al(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fg(p,A.al(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hM(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fe(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hS(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.al(a.u,a.e,m)},
hN(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
fd(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.i1(s,o.x)[p]
if(n==null)A.eH('No "'+p+'" in "'+A.hw(o)+'"')
d.push(A.bo(s,o,n))}else d.push(p)
return m},
hP(a,b){var s,r=a.u,q=A.fc(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bm(r,p,q))
else{s=A.al(r,a.e,p)
switch(s.w){case 11:b.push(A.es(r,s,q,a.n))
break
default:b.push(A.er(r,s,q))
break}}},
hM(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.fc(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.al(p,a.e,o)
q=new A.cb()
q.a=s
q.b=n
q.c=m
b.push(A.ff(p,r,q))
return
case-4:b.push(A.fi(p,b.pop(),s))
return
default:throw A.c(A.bz("Unexpected state under `()`: "+A.o(o)))}},
hO(a,b){var s=b.pop()
if(0===s){b.push(A.bn(a.u,1,"0&"))
return}if(1===s){b.push(A.bn(a.u,4,"1&"))
return}throw A.c(A.bz("Unexpected extended operation "+A.o(s)))},
fc(a,b){var s=b.splice(a.p)
A.fe(a.u,a.e,s)
a.p=b.pop()
return s},
al(a,b,c){if(typeof c=="string")return A.bm(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hQ(a,b,c)}else return c},
fe(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.al(a,b,c[s])},
hS(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.al(a,b,c[s])},
hQ(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.bz("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bz("Bad index "+c+" for "+b.i(0)))},
j9(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.A(a,b,null,c,null)
r.set(c,s)}return s},
A(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.aq(d))return!0
s=b.w
if(s===4)return!0
if(A.aq(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.A(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.A(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.A(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.A(a,b.x,c,d,e))return!1
return A.A(a,A.em(a,b),c,d,e)}if(s===6)return A.A(a,p,c,d,e)&&A.A(a,b.x,c,d,e)
if(q===7){if(A.A(a,b,c,d.x,e))return!0
return A.A(a,b,c,A.em(a,d),e)}if(q===6)return A.A(a,b,c,p,e)||A.A(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.W)return!0
if(q===12){if(b===t.g)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.A(a,j,c,i,e)||!A.A(a,i,e,j,c))return!1}return A.fr(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.fr(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.it(a,b,c,d,e)}if(o&&q===10)return A.iy(a,b,c,d,e)
return!1},
fr(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.A(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.A(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.A(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.A(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.A(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
it(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bo(a,b,r[o])
return A.fm(a,p,null,c,d.y,e)}return A.fm(a,b.y,null,c,d.y,e)},
fm(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.A(a,b[s],d,e[s],f))return!1
return!0},
iy(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.A(a,r[s],c,q[s],e))return!1
return!0},
aM(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.aq(a))if(s!==6)r=s===7&&A.aM(a.x)
return r},
aq(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fl(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dP(a){return a>0?new Array(a):v.typeUniverse.sEA},
U:function U(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cb:function cb(){this.c=this.b=this.a=null},
dN:function dN(a){this.a=a},
ca:function ca(){},
bk:function bk(a){this.a=a},
hE(){var s,r,q
if(self.scheduleImmediate!=null)return A.iT()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bt(new A.dp(s),1)).observe(r,{childList:true})
return new A.dn(s,r,q)}else if(self.setImmediate!=null)return A.iU()
return A.iV()},
hF(a){self.scheduleImmediate(A.bt(new A.dq(t.M.a(a)),0))},
hG(a){self.setImmediate(A.bt(new A.dr(t.M.a(a)),0))},
hH(a){t.M.a(a)
A.hT(0,a)},
hT(a,b){var s=new A.dL()
s.c0(a,b)
return s},
iD(a){return new A.c7(new A.y($.v,a.h("y<0>")),a.h("c7<0>"))},
ia(a,b){a.$2(0,null)
b.b=!0
return b.a},
i7(a,b){A.ib(a,b)},
i9(a,b){b.aT(a)},
i8(a,b){b.aU(A.a_(a),A.aL(a))},
ib(a,b){var s,r,q=new A.dR(b),p=new A.dS(b)
if(a instanceof A.y)a.bx(q,p,t.z)
else{s=t.z
if(a instanceof A.y)a.bU(q,p,s)
else{r=new A.y($.v,t._)
r.a=8
r.c=a
r.bx(q,p,s)}}},
iR(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.v
return r.bl(r,t.aS.a(new A.dV(s)),t.H,t.S,t.z)},
ci(a){var s
if(t.C.b(a)){s=a.gad()
if(s!=null)return s}return B.l},
ip(a,b){var s=$.v
if(s===B.e)return null
s.ca(s,a,b)
return null},
iq(a,b){if($.v!==B.e)A.ip(a,b)
if(b==null)if(t.C.b(a)){b=a.gad()
if(b==null){A.f4(a,B.l)
b=B.l}}else b=B.l
else if(t.C.b(a))A.f4(a,b)
return new A.P(a,b)},
ep(a,b,c){var s,r,q,p,o,n={},m=n.a=a
for(s=t._;r=m.a,(r&4)!==0;m=a){a=s.a(m.c)
n.a=a}if(m===b){s=A.hy()
b.aC(new A.P(new A.S(!0,m,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=m.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=m
m.bj(p)
return}if(!c)if(b.c==null)m=(s&16)===0||q!==0
else m=!1
else m=!0
if(m){p=b.aj()
b.ag(n.a)
A.aE(b,p)
return}b.a^=2
o=b.b
o.a7(o,new A.dx(n,b))},
aE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=e.a=a
for(s=t.n,r=t.F;;){q={}
p=d.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(d.c)
d=d.b
d.bd(d,m.a,m.b)}return}q.a=b
l=b.a
for(d=b;l!=null;d=l,l=k){d.a=null
A.aE(e.a,d)
q.a=l
k=l.a}j=e.a.c
q.b=n
q.c=j
if(o){p=d.c
p=(p&1)!==0||(p&15)===8}else p=!0
if(p){i=d.b.b
h=$.v
if(h!==i)$.v=i
else h=null
d=d.c
if((d&15)===8)new A.dB(q,e,n).$0()
else if(o){if((d&1)!==0)new A.dA(q,j).$0()}else if((d&2)!==0)new A.dz(e,q).$0()
if(h!=null)$.v=h
d=q.c
if(d instanceof A.y){p=q.a.$ti
p=p.h("af<2>").b(d)||!p.y[1].b(d)}else p=!1
if(p){g=q.a.b
if((d.a&24)!==0){f=r.a(g.c)
g.c=null
b=g.ak(f)
g.a=d.a&30|g.a&1
g.c=d.c
e.a=d
continue}else A.ep(d,g,!0)
return}}g=q.a.b
f=r.a(g.c)
g.c=null
b=g.ak(f)
d=q.b
p=q.c
if(!d){g.$ti.c.a(p)
g.a=8
g.c=p}else{s.a(p)
g.a=g.a&1|16
g.c=p}e.a=g
d=g}},
fv(a,b){var s=t.Q
if(s.b(a))return b.bl(b,s.a(a),t.z,t.K,t.l)
s=t.v
if(s.b(a))return b.bm(b,s.a(a),t.z,t.K)
throw A.c(A.bx(a,"onError",u.c))},
iE(){var s,r
for(s=$.aI;s!=null;s=$.aI){$.bs=null
r=s.b
$.aI=r
if(r==null)$.br=null
s.a.$0()}},
iM(){$.ev=!0
try{A.iE()}finally{$.bs=null
$.ev=!1
if($.aI!=null)$.eJ().$1(A.fz())}},
fx(a){var s=new A.c8(a),r=$.br
if(r==null){$.aI=$.br=s
if(!$.ev)$.eJ().$1(A.fz())}else $.br=r.b=s},
iJ(a){var s,r,q,p=$.aI
if(p==null){A.fx(a)
$.bs=$.br
return}s=new A.c8(a)
r=$.bs
if(r==null){s.b=p
$.aI=$.bs=s}else{q=r.b
s.b=q
$.bs=r.b=s
if(q==null)$.br=s}},
js(a,b){A.ey(a,"stream",t.K)
return new A.cf(b.h("cf<0>"))},
iH(a,b){A.iJ(new A.dU(a,b))},
iI(a,b){if(B.e!==a)b=a.cD(b,t.H)
A.fx(b)},
dp:function dp(a){this.a=a},
dn:function dn(a,b,c){this.a=a
this.b=b
this.c=c},
dq:function dq(a){this.a=a},
dr:function dr(a){this.a=a},
dL:function dL(){},
dM:function dM(a,b){this.a=a
this.b=b},
c7:function c7(a,b){this.a=a
this.b=!1
this.$ti=b},
dR:function dR(a){this.a=a},
dS:function dS(a){this.a=a},
dV:function dV(a){this.a=a},
P:function P(a,b){this.a=a
this.b=b},
c9:function c9(){},
bd:function bd(a,b){this.a=a
this.$ti=b},
a3:function a3(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
y:function y(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
du:function du(a,b){this.a=a
this.b=b},
dy:function dy(a,b){this.a=a
this.b=b},
dx:function dx(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
dC:function dC(a,b){this.a=a
this.b=b},
dD:function dD(a){this.a=a},
dA:function dA(a,b){this.a=a
this.b=b},
dz:function dz(a,b){this.a=a
this.b=b},
c8:function c8(a){this.a=a
this.b=null},
cf:function cf(a){this.$ti=a},
dl:function dl(){},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a,b){this.a=a
this.b=b},
eZ(a,b,c){return b.h("@<0>").t(c).h("eY<1,2>").a(A.j0(a,new A.aY(b.h("@<0>").t(c).h("aY<1,2>"))))},
hl(a){return new A.ak(a.h("ak<0>"))},
hm(a){return new A.ak(a.h("ak<0>"))},
eq(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hK(a,b,c){var s=new A.aF(a,b,c.h("aF<0>"))
s.c=a.e
return s},
f_(a,b){var s,r,q=A.hl(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.V)(a),++r)q.j(0,b.a(a[r]))
return q},
f1(a){var s,r
if(A.eD(a))return"{...}"
s=new A.aC("")
try{r={}
B.a.j($.O,a)
s.a+="{"
r.a=!0
a.ac(0,new A.cs(r,s))
s.a+="}"}finally{if(0>=$.O.length)return A.i($.O,-1)
$.O.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ak:function ak(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ce:function ce(a){this.a=a
this.b=null},
aF:function aF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
t:function t(){},
F:function F(){},
cs:function cs(a,b){this.a=a
this.b=b},
aB:function aB(){},
bi:function bi(){},
iF(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.a_(r)
q=A.ee(String(s),null)
throw A.c(q)}q=A.dT(p)
return q},
dT(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.cc(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.dT(a[s])
return a},
eW(a,b,c){return new A.aZ(a,b)},
ie(a){return a.bV()},
hI(a,b){return new A.dF(a,[],A.iX())},
hJ(a,b,c){var s,r=new A.aC(""),q=A.hI(r,b)
q.aA(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
cc:function cc(a,b){this.a=a
this.b=b
this.c=null},
cd:function cd(a){this.a=a},
bC:function bC(){},
bE:function bE(){},
aZ:function aZ(a,b){this.a=a
this.b=b},
bN:function bN(a,b){this.a=a
this.b=b},
cm:function cm(){},
co:function co(a){this.b=a},
cn:function cn(a){this.a=a},
dG:function dG(){},
dH:function dH(a,b){this.a=a
this.b=b},
dF:function dF(a,b,c){this.c=a
this.a=b
this.b=c},
eC(a){var s=A.ej(a,null)
if(s!=null)return s
throw A.c(A.ee(a,null))},
h7(a,b){a=A.B(a,new Error())
if(a==null)a=A.bp(a)
a.stack=b.i(0)
throw a},
ax(a,b,c,d){var s,r=c?J.hg(a,d):J.hf(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hn(a,b,c){var s,r,q=A.e([],c.h("n<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.V)(a),++r)B.a.j(q,c.a(a[r]))
q.$flags=1
return q},
b_(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.h("n<0>"))
s=A.e([],b.h("n<0>"))
for(r=J.eK(a);r.q();)B.a.j(s,r.gB())
return s},
f0(a,b){var s=A.hn(a,!1,b)
s.$flags=3
return s},
el(a){return new A.bL(a,A.eV(a,!1,!0,!1,!1,""))},
f7(a,b,c){var s=J.eK(b)
if(!s.q())return a
if(c.length===0){do a+=A.o(s.gB())
while(s.q())}else{a+=A.o(s.gB())
while(s.q())a=a+c+A.o(s.gB())}return a},
hy(){return A.aL(new Error())},
bF(a){if(typeof a=="number"||A.eu(a)||a==null)return J.bw(a)
if(typeof a=="string")return JSON.stringify(a)
return A.f3(a)},
h8(a,b){A.ey(a,"error",t.K)
A.ey(b,"stackTrace",t.l)
A.h7(a,b)},
bz(a){return new A.by(a)},
aN(a,b){return new A.S(!1,null,b,a)},
bx(a,b,c){return new A.S(!0,a,b,c)},
ek(a,b){return new A.b7(null,null,!0,a,b,"Value not in range")},
b8(a,b,c,d,e){return new A.b7(b,c,!0,a,d,"Invalid value")},
hu(a,b,c){if(0>a||a>c)throw A.c(A.b8(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.b8(b,a,c,"end",null))
return b}return c},
ht(a,b){if(a<0)throw A.c(A.b8(a,0,null,b,null))
return a},
eR(a,b,c,d){return new A.bG(b,!0,a,d,"Index out of range")},
eo(a){return new A.bc(a)},
fa(a){return new A.c5(a)},
f6(a){return new A.bb(a)},
a0(a){return new A.bD(a)},
ee(a,b){return new A.aR(a,b)},
he(a,b,c){var s,r
if(A.eD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.j($.O,a)
try{A.iC(a,s)}finally{if(0>=$.O.length)return A.i($.O,-1)
$.O.pop()}r=A.f7(b,t.U.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
ef(a,b,c){var s,r
if(A.eD(a))return b+"..."+c
s=new A.aC(b)
B.a.j($.O,a)
try{r=s
r.a=A.f7(r.a,a,", ")}finally{if(0>=$.O.length)return A.i($.O,-1)
$.O.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
iC(a,b){var s,r,q,p,o,n,m,l=a.gG(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.q())return
s=A.o(l.gB())
B.a.j(b,s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.i(b,-1)
r=b.pop()
if(0>=b.length)return A.i(b,-1)
q=b.pop()}else{p=l.gB();++j
if(!l.q()){if(j<=4){B.a.j(b,A.o(p))
return}r=A.o(p)
if(0>=b.length)return A.i(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB();++j
for(;l.q();p=o,o=n){n=l.gB();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.i(b,-1)
k-=b.pop().length+2;--j}B.a.j(b,"...")
return}}q=A.o(p)
r=A.o(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.i(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.j(b,m)
B.a.j(b,q)
B.a.j(b,r)},
hp(a,b,c,d){var s
if(B.o===c){s=B.b.gl(a)
b=J.X(b)
return A.en(A.a9(A.a9($.ec(),s),b))}if(B.o===d){s=B.b.gl(a)
b=J.X(b)
c=J.X(c)
return A.en(A.a9(A.a9(A.a9($.ec(),s),b),c))}s=B.b.gl(a)
b=J.X(b)
c=J.X(c)
d=J.X(d)
d=A.en(A.a9(A.a9(A.a9(A.a9($.ec(),s),b),c),d))
return d},
ds:function ds(){},
q:function q(){},
by:function by(a){this.a=a},
a1:function a1(){},
S:function S(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b7:function b7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bG:function bG(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bc:function bc(a){this.a=a},
c5:function c5(a){this.a=a},
bb:function bb(a){this.a=a},
bD:function bD(a){this.a=a},
ba:function ba(){},
dt:function dt(a){this.a=a},
aR:function aR(a,b){this.a=a
this.b=b},
f:function f(){},
x:function x(){},
h:function h(){},
cg:function cg(){},
aC:function aC(a){this.a=a},
d8:function d8(a){this.a=a},
bq(a){var s
if(typeof a=="function")throw A.c(A.aN("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.ic,a)
s[$.eb()]=a
return s},
aH(a){var s
if(typeof a=="function")throw A.c(A.aN("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.id,a)
s[$.eb()]=a
return s},
ic(a){return t.Z.a(a).$0()},
id(a,b,c){t.Z.a(a)
if(A.u(c)>=1)return a.$1(b)
return a.$0()},
fI(a,b){var s=new A.y($.v,b.h("y<0>")),r=new A.bd(s,b.h("bd<0>"))
a.then(A.bt(new A.e5(r,b),1),A.bt(new A.e6(r),1))
return s},
e5:function e5(a,b){this.a=a
this.b=b},
e6:function e6(a){this.a=a},
dJ:function dJ(){this.b=this.a=0},
a7(a,b){var s=A.ei(a),r=b.a,q=b.b,p=A.b_(b.c,t.L)
return new A.T(s,r,q,p,b.d,b.e,b.f)},
hq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!(a instanceof A.F))return g
s=a.p(0,"name")
r=a.p(0,"bpm")
q=a.p(0,"meter")
if(typeof s!="string"||B.c.a5(s).length===0)return g
if(typeof r!="number"||typeof q!="string")return g
p=A.b1(q)
if(p==null)return g
o=a.p(0,"levels")
if(t.j.b(o)){n=A.e([],t.a)
for(m=o.length,l=0;l<o.length;o.length===m||(0,A.V)(o),++l)n.push(A.hk(A.o(o[l])))
k=n}else k=p.Z()
if(k.length!==p.a)k=p.Z()
j=a.p(0,"swing")
n=A.ei(s)
m=B.b.n(B.d.A(r),20,300)
i=A.f8(A.o(a.p(0,"sub")))
h=typeof j=="number"?B.b.n(B.d.A(j),50,75):50
return new A.T(n,m,p,k,i,h,J.ad(a.p(0,"dotted"),!0)&&p.gR())},
ei(a){var s=B.c.a5(a),r=A.el("\\s+"),q=A.fK(s,r," ")
return q.length>40?B.c.U(q,0,40):q},
Z(a){var s,r,q=A.e([],t.J)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.V)(a),++r)q.push(a[r].bV())
return B.k.bG(q,null)},
fB(a){var s,r,q,p,o,n,m
if(a==null||a.length===0)return A.e([],t.e)
s=null
try{s=B.k.bF(a,null)}catch(r){if(A.a_(r) instanceof A.aR)return A.e([],t.e)
else throw r}if(!t.j.b(s))return A.e([],t.e)
q=A.e([],t.e)
for(p=s,o=p.length,n=0;n<p.length;p.length===o||(0,A.V)(p),++n){m=A.hq(p[n])
if(m!=null)q.push(m)}return q},
jj(a,b){var s,r,q,p,o=A.e([b],t.e)
for(s=a.length,r=b.a,q=0;q<a.length;a.length===s||(0,A.V)(a),++q){p=a[q]
if(p.a.toLowerCase()!==r.toLowerCase())o.push(p)}return o},
jg(){var s="4/4",r=new A.e8()
return A.e([r.$4$sub("Rock eighths",100,s,B.t),r.$4$sub("Funk sixteenths",92,s,B.r),r.$5$sub$swing("Swing",140,s,B.t,67),r.$4$dotted("Shuffle 12/8",72,"12/8",!0),r.$3("Jazz waltz",150,"3/4"),r.$4$sub("Songo",112,s,B.r),r.$3("Odd: 7/8",180,"7/8:2+2+3")],t.e)},
T:function T(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
e8:function e8(){},
hk(a){return B.a.bN(B.q,new A.cp(a),new A.cq())},
f8(a){return B.a.bN(B.B,new A.de(a),new A.df())},
ai(a,b,c){var s=c==null?A.ho(a,b):c
s=new A.b0(a,b,A.f0(s,t.S))
s.bZ(a,b,c)
return s},
ho(a,b){var s
if(b<8||a<5)return A.ax(a,1,!1,t.S)
if(B.b.a6(a,3)===0)return A.ax(B.b.E(a,3),3,!1,t.S)
if((a&1)===1){s=t.S
s=A.b_(A.ax(B.b.E(a-3,2),2,!1,s),s)
s.push(3)
return s}return A.ax(B.b.E(a,2),2,!1,t.S)},
b1(a){var s,r,q,p,o,n,m,l,k,j,i=A.el("^\\s*(\\d+)\\s*/\\s*(\\d+)\\s*(?::\\s*([\\d+\\s]+))?$").cI(a)
if(i==null)return null
p=i.b
if(1>=p.length)return A.i(p,1)
o=p[1]
o.toString
s=A.eC(o)
if(2>=p.length)return A.i(p,2)
o=p[2]
o.toString
r=A.eC(o)
q=null
if(3>=p.length)return A.i(p,3)
n=p[3]
if(n!=null){p=A.e([],t.t)
for(o=n.split("+"),m=o.length,l=0;l<m;++l){k=A.ej(B.c.a5(o[l]),null)
if(k!=null)p.push(k)}q=p}try{p=A.ai(s,r,q)
return p}catch(j){if(A.a_(j) instanceof A.S)return null
else throw j}},
hx(){return new A.dd()},
fu(a){var s,r=0
for(;;){s=r+1
if(!(s<10&&a>=B.f[s].a))break
r=s}return r},
L:function L(a,b,c){this.c=a
this.a=b
this.b=c},
cp:function cp(a){this.a=a},
cq:function cq(){},
aj:function aj(a,b){this.a=a
this.b=b},
C:function C(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
de:function de(a){this.a=a},
df:function df(){},
b0:function b0(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(){},
cu:function cu(){},
cx:function cx(){},
cy:function cy(){},
cv:function cv(){},
cw:function cw(){},
ck:function ck(a,b,c){var _=this
_.a=96
_.b=a
_.c=b
_.d=c
_.e=50
_.f=!1},
dd:function dd(){var _=this
_.a=!1
_.c=_.b=4
_.d=140},
cj:function cj(){this.a=!1
this.c=this.b=2},
aO:function aO(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
dc:function dc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=0},
dg:function dg(a){this.c=a},
d(a,b){var s=A.Y(A.b(v.G.document).getElementById(a))
s.toString
return b.a(s)},
J(a,b,c){var s=A.b(A.b(v.G.document).createElement(a))
if(b!=null)s.className=b
if(c!=null)s.textContent=c
return s},
k(a,b,c){return a.addEventListener(b,A.aH(new A.e4(c)))},
jd(a,b){return A.aU(v.G,"addEventListener",a,A.aH(new A.e3(b)),t.X)},
eE(a){var s,r,q,p,o=null
try{s=A.Y(v.G.localStorage)
q=s
r=q==null?o:A.aU(q,"getItem",a,o,t.X)
q=r!=null&&typeof r==="string"?A.p(r):o
return q}catch(p){return o}},
R(a,b){var s,r,q
try{s=A.Y(v.G.localStorage)
r=s
if(r!=null)A.aU(r,"setItem",a,b,t.X)}catch(q){}},
eG(){var s=A.b(v.G.navigator).audioSession
if(t.m.b(s))s.type="playback"},
jk(a){var s
try{A.z(A.b(v.G.navigator).vibrate(a))}catch(s){}},
jf(){var s,r,q,p,o,n=A.b(v.G.navigator).serviceWorker,m=t.m
if(!m.b(n))return
try{s=A.aU(A.b(n),"register","sw.js",null,m)
m=A.fI(s,t.X)
r=new A.e7()
q=m.$ti
p=$.v
if(p!==B.e)r=A.fv(r,p)
m.ae(new A.a3(new A.y(p,q),2,null,r,q.h("a3<1,1>")))}catch(o){}},
jl(){var s=v.G,r=A.Y(A.b(s.document).getElementById("themeToggle")),q=A.b(A.b(s.document).documentElement)
if(r==null)return
s=new A.ea(q,r)
A.k(r,"click",new A.e9(q,s))
s.$0()},
e4:function e4(a){this.a=a},
e3:function e3(a){this.a=a},
dj:function dj(){this.a=null
this.b=!1},
dk:function dk(a){this.a=a},
e7:function e7(){},
ea:function ea(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
jb(){var s,r,q,p,o
A.jl()
A.jf()
s=v.G
r=A.Y(A.b(s.document).getElementById("metro"))
if(r==null)return
if(!("AudioContext" in s)){s=A.Y(A.b(s.document).getElementById("no-audio"))
if(s!=null)s.hidden=!1
return}s=A.ai(4,4,null)
q=A.ai(4,4,null)
q=q.Z()
p=t.m
o=new A.bR(new A.ck(s,q,B.h),A.hx(),new A.cj(),A.d("bpm",p),A.d("bpm-range",p),A.d("tempo-unit",p),A.d("tempo-word",p),A.d("start",p),A.d("transport",p),A.d("q-start",p),A.d("q-bpm",p),A.d("flash",p),A.d("position",p),A.d("grid",p),A.d("meter-beats",p),A.d("meter-unit",p),A.d("meter-groups",p),A.d("groups-row",p),A.d("meter-quick",p),A.d("dotted-row",p),A.d("dotted",p),A.d("sub",p),A.d("swing-row",p),A.d("swing",p),A.d("swing-out",p),A.d("sound",p),A.d("volume",p),A.d("sub-volume",p),A.d("vibrate-row",p),A.d("vibrate",p),A.d("big-flash",p),A.d("count-in",p),A.d("tempo-range",p),A.d("status",p),A.d("my-presets",p),A.d("presets-empty",p),A.d("preset-undo",p),A.d("preset-undo-text",p),A.d("preset-undo-btn",p),A.d("speed-progress",p),A.d("starter-presets",p),A.d("preset-name",p),A.e([],t.d),A.e([],t.O),A.e([],t.A),new A.dg(A.e([],t.w)),new A.dj(),A.e([],t.e))
o.cZ()
r.hidden=!1
o.b1()},
fo(a){var s,r=A.b(a.children),q=A.u(A.I(r.length)),p=A.e([],t.O)
for(s=0;s<q;++s)p.push(A.b(A.eT(r,"item",s,null,null,null)))
return p},
j4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=A.ai(a,b,A.ax(a,1,!1,t.S))
if(b<8||a<4)return A.e([A.ai(a,b,null)],t.c)
s=A.hm(t.N)
r=t.t
new A.dY(s).$2(a,A.e([],r))
q=A.ai(a,b,null)
p=A.e([q],t.c)
for(o=A.hK(s,s.r,s.$ti.c),n=q.c,m=o.$ti.c;o.q();){l=o.d
if(l==null)l=m.a(l)
if(l!==B.a.O(n,"+")){k=A.e([],r)
for(l=l.split("+"),j=l.length,i=0;i<j;++i)k.push(A.eC(l[i]))
p.push(A.ai(a,b,k))}}p.push(h)
return p},
bR:function bR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=o
_.ch=p
_.CW=q
_.cx=r
_.cy=s
_.db=a0
_.dx=a1
_.dy=a2
_.fr=a3
_.fx=a4
_.fy=a5
_.go=a6
_.id=a7
_.k1=a8
_.k2=a9
_.k3=b0
_.k4=b1
_.ok=b2
_.p1=b3
_.p2=b4
_.p3=b5
_.p4=b6
_.R8=b7
_.RG=b8
_.rx=b9
_.ry=c0
_.to=c1
_.x1=c2
_.x2="wood"
_.xr=0.8
_.y1=0.6
_.a9=_.y2=!1
_.M=0
_.bH=_.N=_.I=null
_.F=!1
_.ap=0
_.bI=_.ab=_.aq=_.aa=null
_.a0=c3
_.ar=c4
_.bJ=c5
_.au=null
_.bK=-1
_.cH=c6
_.bM=_.bL=null
_.a1=c7
_.C=c8
_.av=_.aV=null
_.aW=_.a2=$},
cN:function cN(a){this.a=a},
cO:function cO(a){this.a=a},
cP:function cP(a){this.a=a},
d_:function d_(a){this.a=a},
d1:function d1(a){this.a=a},
d2:function d2(a){this.a=a},
d3:function d3(a){this.a=a},
d4:function d4(a){this.a=a},
d5:function d5(a){this.a=a},
d6:function d6(a){this.a=a},
d7:function d7(a){this.a=a},
cQ:function cQ(a){this.a=a},
cR:function cR(a){this.a=a},
cS:function cS(a){this.a=a},
cT:function cT(a){this.a=a},
cU:function cU(a){this.a=a},
cV:function cV(a){this.a=a},
cW:function cW(a){this.a=a},
cX:function cX(a){this.a=a},
cY:function cY(a){this.a=a},
cZ:function cZ(a){this.a=a},
d0:function d0(a){this.a=a},
cB:function cB(a,b){this.a=a
this.b=b},
cJ:function cJ(a){this.a=a},
cI:function cI(){},
cz:function cz(){},
cA:function cA(a,b){this.a=a
this.b=b},
cM:function cM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
cL:function cL(a){this.a=a},
cG:function cG(a){this.a=a},
cC:function cC(a){this.a=a},
cE:function cE(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
cK:function cK(a){this.a=a},
cD:function cD(a){this.a=a},
cH:function cH(a,b){this.a=a
this.b=b},
dY:function dY(a){this.a=a},
fL(a){return v.mangledGlobalNames[a]},
jh(a){throw A.B(A.eX(a),new Error())},
eI(){throw A.B(A.eX(""),new Error())},
eT(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else{s=a[b](c,d)
return s}},
aU(a,b,c,d,e){return e.a(A.eT(a,b,c,d,null,null))}},B={}
var w=[A,J,B]
var $={}
A.eg.prototype={}
J.bH.prototype={
T(a,b){return a===b},
gl(a){return A.c0(a)},
i(a){return"Instance of '"+A.c1(a)+"'"},
gm(a){return A.ao(A.et(this))}}
J.bJ.prototype={
i(a){return String(a)},
gl(a){return a?519018:218159},
gm(a){return A.ao(t.y)},
$il:1,
$iD:1}
J.aT.prototype={
T(a,b){return null==b},
i(a){return"null"},
gl(a){return 0},
$il:1}
J.aW.prototype={$ir:1}
J.a6.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.c_.prototype={}
J.aD.prototype={}
J.a5.prototype={
i(a){var s=a[$.fN()]
if(s==null)s=a[$.eb()]
if(s==null)return this.bY(a)
return"JavaScript function for "+J.bw(s)},
$iae:1}
J.aV.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.aX.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.n.prototype={
j(a,b){A.M(a).c.a(b)
a.$flags&1&&A.bv(a,29)
a.push(b)},
az(a,b){a.$flags&1&&A.bv(a,"removeAt",1)
if(b<0||b>=a.length)throw A.c(A.ek(b,null))
return a.splice(b,1)[0]},
P(a){a.$flags&1&&A.bv(a,"clear","clear")
a.length=0},
O(a,b){var s,r=A.ax(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.K(r,s,A.o(a[s]))
return r.join(b)},
cJ(a,b,c,d){var s,r,q
d.a(b)
A.M(a).t(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.c(A.a0(a))}return r},
bN(a,b,c){var s,r,q,p=A.M(a)
p.h("D(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.a0(a))}p=c.$0()
return p},
gaX(a){if(a.length>0)return a[0]
throw A.c(A.eS())},
gbR(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.eS())},
bB(a,b){var s,r
A.M(a).h("D(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.a0(a))}return!1},
a_(a,b){var s,r
A.M(a).h("D(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.a0(a))}return!0},
a8(a,b){var s
for(s=0;s<a.length;++s)if(J.ad(a[s],b))return!0
return!1},
gbQ(a){return a.length!==0},
i(a){return A.ef(a,"[","]")},
gG(a){return new J.as(a,a.length,A.M(a).h("as<1>"))},
gl(a){return A.c0(a)},
gk(a){return a.length},
K(a,b,c){A.M(a).c.a(c)
a.$flags&2&&A.bv(a)
if(!(b>=0&&b<a.length))throw A.c(A.fC(a,b))
a[b]=c},
cM(a,b){var s
A.M(a).h("D(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
$if:1,
$ij:1}
J.bI.prototype={
cW(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.c1(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.cl.prototype={}
J.as.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.V(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.au.prototype={
aS(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.b.gaw(b)
if(this.gaw(a)===s)return 0
if(this.gaw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaw(a){return a===0?1/a<0:a<0},
A(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.eo(""+a+".round()"))},
n(a,b,c){if(B.b.aS(b,c)>0)throw A.c(A.iS(b))
if(this.aS(a,b)<0)return b
if(this.aS(a,c)>0)return c
return a},
cT(a,b){var s
if(b>20)throw A.c(A.b8(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaw(a))return"-"+s
return s},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a6(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
b4(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bw(a,b)},
E(a,b){return(a|0)===a?a/b|0:this.bw(a,b)},
bw(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.eo("Result of truncating division is "+A.o(s)+": "+A.o(a)+" ~/ "+b))},
bu(a,b){var s
if(a>0)s=this.cr(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cr(a,b){return b>31?0:a>>>b},
gm(a){return A.ao(t.o)},
$im:1,
$iar:1}
J.aS.prototype={
gm(a){return A.ao(t.S)},
$il:1,
$ia:1}
J.bK.prototype={
gm(a){return A.ao(t.i)},
$il:1}
J.av.prototype={
U(a,b,c){return a.substring(b,A.hu(b,c,a.length))},
a5(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.i(p,0)
if(p.charCodeAt(0)===133){s=J.hi(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.i(p,r)
q=p.charCodeAt(r)===133?J.hj(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
i(a){return a},
gl(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return A.ao(t.N)},
gk(a){return a.length},
$il:1,
$ida:1,
$iw:1}
A.bO.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.db.prototype={}
A.aP.prototype={}
A.ah.prototype={
gG(a){var s=this
return new A.aw(s,s.gk(s),A.ab(s).h("aw<ah.E>"))},
ga3(a){return this.gk(this)===0}}
A.aw.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.fD(q),o=p.gk(q)
if(r.b!==o)throw A.c(A.a0(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ao(q,s);++r.c
return!0}}
A.H.prototype={}
A.G.prototype={$r:"+(1,2)",$s:1}
A.b9.prototype={}
A.dh.prototype={
J(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.b6.prototype={
i(a){return"Null check operator used on a null value"}}
A.bM.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.c6.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.d9.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aQ.prototype={}
A.bj.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ia8:1}
A.a4.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fM(r==null?"unknown":r)+"'"},
$iae:1,
gd1(){return this},
$C:"$1",
$R:1,
$D:null}
A.bA.prototype={$C:"$0",$R:0}
A.bB.prototype={$C:"$2",$R:2}
A.c4.prototype={}
A.c3.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fM(s)+"'"}}
A.at.prototype={
T(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.at))return!1
return this.$_target===b.$_target&&this.a===b.a},
gl(a){return(A.fG(this.a)^A.c0(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c1(this.a)+"'")}}
A.c2.prototype={
i(a){return"RuntimeError: "+this.a}}
A.aY.prototype={
gk(a){return this.a},
ga3(a){return this.a===0},
ga4(){return new A.ag(this,this.$ti.h("ag<1>"))},
p(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cN(b)},
cN(a){var s,r,q=this.d
if(q==null)return null
s=this.cd(q,a)
r=this.bO(s,a)
if(r<0)return null
return s[r].b},
K(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.b5(s==null?m.b=m.aK():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.b5(r==null?m.c=m.aK():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aK()
p=J.X(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.aL(b,c)]
else{n=m.bO(o,b)
if(n>=0)o[n].b=c
else o.push(m.aL(b,c))}}},
ac(a,b){var s,r,q=this
q.$ti.h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.a0(q))
s=s.c}},
b5(a,b,c){var s,r=this.$ti
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.aL(b,c)
else s.b=c},
aL(a,b){var s=this,r=s.$ti,q=new A.cr(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
cd(a,b){return a[J.X(b)&1073741823]},
bO(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ad(a[r].a,b))return r
return-1},
i(a){return A.f1(this)},
aK(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ieY:1}
A.cr.prototype={}
A.ag.prototype={
gk(a){return this.a.a},
ga3(a){return this.a.a===0},
gG(a){var s=this.a
return new A.bP(s,s.r,s.e,this.$ti.h("bP<1>"))}}
A.bP.prototype={
gB(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.a0(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.dZ.prototype={
$1(a){return this.a(a)},
$S:5}
A.e_.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.e0.prototype={
$1(a){return this.a(A.p(a))},
$S:12}
A.am.prototype={
i(a){return this.bz(!1)},
bz(a){var s,r,q,p,o,n=this.cb(),m=this.bc(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.i(m,q)
o=m[q]
l=a?l+A.f3(o):l+A.o(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
cb(){var s,r=this.$s
while($.dK.length<=r)B.a.j($.dK,null)
s=$.dK[r]
if(s==null){s=this.c5()
B.a.K($.dK,r,s)}return s},
c5(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.e(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.K(k,q,r[s])}}return A.f0(k,t.K)}}
A.aG.prototype={
bc(){return[this.a,this.b]},
T(a,b){if(b==null)return!1
return b instanceof A.aG&&this.$s===b.$s&&J.ad(this.a,b.a)&&J.ad(this.b,b.b)},
gl(a){return A.hp(this.$s,this.a,this.b,B.o)}}
A.bL.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
gcj(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.eV(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
cI(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dI(s)},
$ida:1,
$ihv:1}
A.dI.prototype={}
A.ay.prototype={
gm(a){return B.a4},
$il:1}
A.b4.prototype={}
A.bS.prototype={
gm(a){return B.a5},
$il:1}
A.aA.prototype={
gk(a){return a.length},
$iK:1}
A.b2.prototype={$if:1,$ij:1}
A.b3.prototype={$if:1,$ij:1}
A.az.prototype={
gm(a){return B.a6},
$il:1,
$iaz:1}
A.bT.prototype={
gm(a){return B.a7},
$il:1}
A.bU.prototype={
gm(a){return B.a8},
$il:1}
A.bV.prototype={
gm(a){return B.a9},
$il:1}
A.bW.prototype={
gm(a){return B.aa},
$il:1}
A.bX.prototype={
gm(a){return B.ac},
$il:1}
A.bY.prototype={
gm(a){return B.ad},
$il:1}
A.b5.prototype={
gm(a){return B.ae},
gk(a){return a.length},
$il:1}
A.bZ.prototype={
gm(a){return B.af},
gk(a){return a.length},
$il:1}
A.be.prototype={}
A.bf.prototype={}
A.bg.prototype={}
A.bh.prototype={}
A.U.prototype={
h(a){return A.bo(v.typeUniverse,this,a)},
t(a){return A.fk(v.typeUniverse,this,a)}}
A.cb.prototype={}
A.dN.prototype={
i(a){return A.N(this.a,null)}}
A.ca.prototype={
i(a){return this.a}}
A.bk.prototype={$ia1:1}
A.dp.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:6}
A.dn.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:13}
A.dq.prototype={
$0(){this.a.$0()},
$S:7}
A.dr.prototype={
$0(){this.a.$0()},
$S:7}
A.dL.prototype={
c0(a,b){if(self.setTimeout!=null)self.setTimeout(A.bt(new A.dM(this,b),0),a)
else throw A.c(A.eo("`setTimeout()` not found."))}}
A.dM.prototype={
$0(){this.b.$0()},
$S:0}
A.c7.prototype={
aT(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.b6(a)
else{s=r.a
if(q.h("af<1>").b(a))s.b7(a)
else s.b9(a)}},
aU(a,b){var s
if(b==null)b=A.ci(a)
s=this.a
if(this.b)s.aF(new A.P(a,b))
else s.aC(new A.P(a,b))}}
A.dR.prototype={
$1(a){return this.a.$2(0,a)},
$S:2}
A.dS.prototype={
$2(a,b){this.a.$2(1,new A.aQ(a,t.l.a(b)))},
$S:14}
A.dV.prototype={
$2(a,b){this.a(A.u(a),b)},
$S:15}
A.P.prototype={
i(a){return A.o(this.a)},
$iq:1,
gad(){return this.b}}
A.c9.prototype={
aU(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.f6("Future already completed"))
s.aC(A.iq(a,b))},
bE(a){return this.aU(a,null)}}
A.bd.prototype={
aT(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.f6("Future already completed"))
s.b6(r.h("1/").a(a))}}
A.a3.prototype={
cO(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.aO(s,t.x.a(this.d),a.a,t.y,t.K)},
cL(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.co(l,q,m,a.b,o,n,t.l)
else p=l.aO(l,t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.r.b(A.a_(s))){if((r.c&1)!==0)throw A.c(A.aN("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.aN("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.y.prototype={
bU(a,b,c){var s,r,q,p=this.$ti
p.t(c).h("1/(2)").a(a)
s=$.v
if(s===B.e){if(b!=null&&!t.Q.b(b)&&!t.v.b(b))throw A.c(A.bx(b,"onError",u.c))}else{r=p.c
a=s.bm(s,c.h("@<0/>").t(r).h("1(2)").a(a),c.h("0/"),r)
if(b!=null)b=A.fv(b,s)}q=new A.y(s,c.h("y<0>"))
r=b==null?1:3
this.ae(new A.a3(q,r,a,b,p.h("@<1>").t(c).h("a3<1,2>")))
return q},
bx(a,b,c){var s,r=this.$ti
r.t(c).h("1/(2)").a(a)
s=new A.y($.v,c.h("y<0>"))
this.ae(new A.a3(s,19,a,b,r.h("@<1>").t(c).h("a3<1,2>")))
return s},
cq(a){this.a=this.a&1|16
this.c=a},
ag(a){this.a=a.a&30|this.a&1
this.c=a.c},
ae(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.ae(a)
return}r.ag(s)}q=r.b
q.a7(q,new A.du(r,a))}},
bj(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.bj(a)
return}m.ag(n)}l.a=m.ak(a)
s=m.b
s.a7(s,new A.dy(l,m))}},
aj(){var s=t.F.a(this.c)
this.c=null
return this.ak(s)},
ak(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
b9(a){var s,r=this
r.$ti.c.a(a)
s=r.aj()
r.a=8
r.c=a
A.aE(r,s)},
c4(a){var s=this.aj()
this.ag(a)
A.aE(this,s)},
aF(a){var s=this.aj()
this.cq(a)
A.aE(this,s)},
b6(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("af<1>").b(a)){this.b7(a)
return}this.c2(a)},
c2(a){var s,r=this
r.$ti.c.a(a)
r.a^=2
s=r.b
s.a7(s,new A.dw(r,a))},
b7(a){A.ep(this.$ti.h("af<1>").a(a),this,!1)
return},
aC(a){var s
this.a^=2
s=this.b
s.a7(s,new A.dv(this,a))},
$iaf:1}
A.du.prototype={
$0(){A.aE(this.a,this.b)},
$S:0}
A.dy.prototype={
$0(){A.aE(this.b,this.a.a)},
$S:0}
A.dx.prototype={
$0(){A.ep(this.a.a,this.b,!0)},
$S:0}
A.dw.prototype={
$0(){this.a.b9(this.b)},
$S:0}
A.dv.prototype={
$0(){this.a.aF(this.b)},
$S:0}
A.dB.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.bn(p,t.G.a(q.d),t.z)}catch(o){s=A.a_(o)
r=A.aL(o)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
p=r
if(p==null)p=A.ci(q)
n=k.a
n.c=new A.P(q,p)
q=n}q.b=!0
return}if(j instanceof A.y&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.y){m=k.b.a
l=new A.y(m.b,m.$ti)
j.bU(new A.dC(l,m),new A.dD(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.dC.prototype={
$1(a){this.a.c4(this.b)},
$S:6}
A.dD.prototype={
$2(a,b){A.bp(a)
t.l.a(b)
this.a.aF(new A.P(a,b))},
$S:16}
A.dA.prototype={
$0(){var s,r,q,p,o,n,m,l,k
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
l=p.b.b
q.c=l.aO(l,o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(k){s=A.a_(k)
r=A.aL(k)
q=s
p=r
if(p==null)p=A.ci(q)
o=this.a
o.c=new A.P(q,p)
o.b=!0}},
$S:0}
A.dz.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.cO(s)&&p.a.e!=null){p.c=p.a.cL(s)
p.b=!1}}catch(o){r=A.a_(o)
q=A.aL(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ci(p)
m=l.b
m.c=new A.P(p,n)
p=m}p.b=!0}},
$S:0}
A.c8.prototype={}
A.cf.prototype={}
A.dl.prototype={
cD(a,b){return new A.dm(this,this.cm(this,b.h("0()").a(a),b),b)},
bd(a,b,c){var s,r,q,p,o,n,m,l
t.l.a(c)
s=null
if(s==null){A.iH(b,c)
return}r=s.gb2()
q=r.gd2()
p=$.v
try{$.v=q
s.cK(r,r.gaM(),a,b,c)
$.v=p}catch(m){o=A.a_(m)
n=A.aL(m)
$.v=p
l=b===o?c:n
q.bd(r,o,l)}},
bn(a,b,c){var s,r,q
c.h("0()").a(b)
r=$.v
if(r===a)return b.$0()
s=r
$.v=a
try{r=b.$0()
return r}finally{$.v=s}q=null.gb2()
return null.d3(q,q.gaM(),a,b)},
aO(a,b,c,d,e){var s,r,q
d.h("@<0>").t(e).h("1(2)").a(b)
e.a(c)
r=$.v
if(r===a)return b.$1(c)
s=r
$.v=a
try{r=b.$1(c)
return r}finally{$.v=s}q=null.gb2()
return null.cK(q,q.gaM(),a,b,c)},
co(a,b,c,d,e,f,g){var s,r,q
e.h("@<0>").t(f).t(g).h("1(2,3)").a(b)
f.a(c)
g.a(d)
r=$.v
if(r===a)return b.$2(c,d)
s=r
$.v=a
try{r=b.$2(c,d)
return r}finally{$.v=s}q=null.gb2()
return null.d4(q,q.gaM(),a,b,c,d)},
cm(a,b,c){c.h("0()").a(b)
return b},
bm(a,b,c,d){c.h("@<0>").t(d).h("1(2)").a(b)
return b},
bl(a,b,c,d,e){c.h("@<0>").t(d).t(e).h("1(2,3)").a(b)
return b},
ca(a,b,c){return null},
a7(a,b){A.iI(a,t.M.a(b))
return}}
A.dm.prototype={
$0(){var s=this.a
return s.bn(s,this.b,this.c)},
$S(){return this.c.h("0()")}}
A.dU.prototype={
$0(){A.h8(this.a,this.b)},
$S:0}
A.ak.prototype={
gG(a){var s=this,r=new A.aF(s,s.r,A.ab(s).h("aF<1>"))
r.c=s.e
return r},
gk(a){return this.a},
a8(a,b){var s
if((b&1073741823)===b){s=this.c
if(s==null)return!1
return t.R.a(s[b])!=null}else return this.c6(b)},
c6(a){var s=this.d
if(s==null)return!1
return this.bb(s[this.ba(a)],a)>=0},
j(a,b){var s,r,q=this
A.ab(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.b8(s==null?q.b=A.eq():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.b8(r==null?q.c=A.eq():r,b)}else return q.c1(b)},
c1(a){var s,r,q,p=this
A.ab(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.eq()
r=p.ba(a)
q=s[r]
if(q==null)s[r]=[p.aE(a)]
else{if(p.bb(q,a)>=0)return!1
q.push(p.aE(a))}return!0},
b8(a,b){A.ab(this).c.a(b)
if(t.R.a(a[b])!=null)return!1
a[b]=this.aE(b)
return!0},
aE(a){var s=this,r=new A.ce(A.ab(s).c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
ba(a){return J.X(a)&1073741823},
bb(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ad(a[r].a,b))return r
return-1}}
A.ce.prototype={}
A.aF.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.a0(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}}}
A.t.prototype={
gG(a){return new A.aw(a,a.length,A.bu(a).h("aw<t.E>"))},
ao(a,b){if(!(b>=0&&b<a.length))return A.i(a,b)
return a[b]},
gbQ(a){return a.length!==0},
i(a){return A.ef(a,"[","]")}}
A.F.prototype={
ac(a,b){var s,r,q,p=A.ab(this)
p.h("~(F.K,F.V)").a(b)
for(s=this.ga4(),s=s.gG(s),p=p.h("F.V");s.q();){r=s.gB()
q=this.p(0,r)
b.$2(r,q==null?p.a(q):q)}},
gk(a){var s=this.ga4()
return s.gk(s)},
ga3(a){var s=this.ga4()
return s.ga3(s)},
i(a){return A.f1(this)},
$ibQ:1}
A.cs.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.o(a)
r.a=(r.a+=s)+": "
s=A.o(b)
r.a+=s},
$S:8}
A.aB.prototype={
i(a){return A.ef(this,"{","}")},
$if:1}
A.bi.prototype={}
A.cc.prototype={
p(a,b){var s,r=this.b
if(r==null)return this.c.p(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.cl(b):s}},
gk(a){return this.b==null?this.c.a:this.ah().length},
ga3(a){return this.gk(0)===0},
ga4(){if(this.b==null){var s=this.c
return new A.ag(s,s.$ti.h("ag<1>"))}return new A.cd(this)},
ac(a,b){var s,r,q,p,o=this
t.cQ.a(b)
if(o.b==null)return o.c.ac(0,b)
s=o.ah()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.dT(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.a0(o))}},
ah(){var s=t.aL.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
cl(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.dT(this.a[a])
return this.b[a]=s}}
A.cd.prototype={
gk(a){return this.a.gk(0)},
ao(a,b){var s=this.a
if(s.b==null)s=s.ga4().ao(0,b)
else{s=s.ah()
if(!(b>=0&&b<s.length))return A.i(s,b)
s=s[b]}return s},
gG(a){var s=this.a
if(s.b==null){s=s.ga4()
s=s.gG(s)}else{s=s.ah()
s=new J.as(s,s.length,A.M(s).h("as<1>"))}return s}}
A.bC.prototype={}
A.bE.prototype={}
A.aZ.prototype={
i(a){var s=A.bF(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.bN.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.cm.prototype={
bF(a,b){var s=A.iF(a,this.gcF().a)
return s},
bG(a,b){var s=A.hJ(a,this.gcG().b,null)
return s},
gcG(){return B.O},
gcF(){return B.N}}
A.co.prototype={}
A.cn.prototype={}
A.dG.prototype={
bX(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.U(a,r,q)
r=q+1
o=A.E(92)
s.a+=o
o=A.E(117)
s.a+=o
o=A.E(100)
s.a+=o
o=p>>>8&15
o=A.E(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.E(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.E(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.U(a,r,q)
r=q+1
o=A.E(92)
s.a+=o
switch(p){case 8:o=A.E(98)
s.a+=o
break
case 9:o=A.E(116)
s.a+=o
break
case 10:o=A.E(110)
s.a+=o
break
case 12:o=A.E(102)
s.a+=o
break
case 13:o=A.E(114)
s.a+=o
break
default:o=A.E(117)
s.a+=o
o=A.E(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.E(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.E(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.U(a,r,q)
r=q+1
o=A.E(92)
s.a+=o
o=A.E(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.U(a,r,m)},
aD(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.bN(a,null))}B.a.j(s,a)},
aA(a){var s,r,q,p,o=this
if(o.bW(a))return
o.aD(a)
try{s=o.b.$1(a)
if(!o.bW(s)){q=A.eW(a,null,o.gbi())
throw A.c(q)}q=o.a
if(0>=q.length)return A.i(q,-1)
q.pop()}catch(p){r=A.a_(p)
q=A.eW(a,r,o.gbi())
throw A.c(q)}},
bW(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.i(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.bX(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.aD(a)
q.d_(a)
s=q.a
if(0>=s.length)return A.i(s,-1)
s.pop()
return!0}else if(a instanceof A.F){q.aD(a)
r=q.d0(a)
s=q.a
if(0>=s.length)return A.i(s,-1)
s.pop()
return r}else return!1},
d_(a){var s,r=this.c
r.a+="["
if(J.fZ(a)){if(0>=a.length)return A.i(a,0)
this.aA(a[0])
for(s=1;s<a.length;++s){r.a+=","
this.aA(a[s])}}r.a+="]"},
d0(a){var s,r,q,p,o,n,m=this,l={}
if(a.ga3(a)){m.c.a+="{}"
return!0}s=a.gk(a)*2
r=A.ax(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.ac(0,new A.dH(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.bX(A.p(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.i(r,n)
m.aA(r[n])}p.a+="}"
return!0}}
A.dH.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.K(s,r.a++,a)
B.a.K(s,r.a++,b)},
$S:8}
A.dF.prototype={
gbi(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.ds.prototype={
i(a){return this.aH()}}
A.q.prototype={
gad(){return A.hr(this)}}
A.by.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bF(s)
return"Assertion failed"}}
A.a1.prototype={}
A.S.prototype={
gaJ(){return"Invalid argument"+(!this.a?"(s)":"")},
gaI(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.o(p),n=s.gaJ()+q+o
if(!s.a)return n
return n+s.gaI()+": "+A.bF(s.gaY())},
gaY(){return this.b}}
A.b7.prototype={
gaY(){return A.fn(this.b)},
gaJ(){return"RangeError"},
gaI(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.o(q):""
else if(q==null)s=": Not greater than or equal to "+A.o(r)
else if(q>r)s=": Not in inclusive range "+A.o(r)+".."+A.o(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.o(r)
return s}}
A.bG.prototype={
gaY(){return A.u(this.b)},
gaJ(){return"RangeError"},
gaI(){if(A.u(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.bc.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.c5.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bb.prototype={
i(a){return"Bad state: "+this.a}}
A.bD.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bF(s)+"."}}
A.ba.prototype={
i(a){return"Stack Overflow"},
gad(){return null},
$iq:1}
A.dt.prototype={
i(a){return"Exception: "+this.a}}
A.aR.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.c.U(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.f.prototype={
gk(a){var s,r=this.gG(this)
for(s=0;r.q();)++s
return s},
ao(a,b){var s,r
A.ht(b,"index")
s=this.gG(this)
for(r=b;s.q();){if(r===0)return s.gB();--r}throw A.c(A.eR(b,b-r,this,"index"))},
i(a){return A.he(this,"(",")")}}
A.x.prototype={
gl(a){return A.h.prototype.gl.call(this,0)},
i(a){return"null"}}
A.h.prototype={$ih:1,
T(a,b){return this===b},
gl(a){return A.c0(this)},
i(a){return"Instance of '"+A.c1(this)+"'"},
gm(a){return A.j2(this)},
toString(){return this.i(this)}}
A.cg.prototype={
i(a){return""},
$ia8:1}
A.aC.prototype={
gk(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ihz:1}
A.d8.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.e5.prototype={
$1(a){return this.a.aT(this.b.h("0/?").a(a))},
$S:2}
A.e6.prototype={
$1(a){if(a==null)return this.a.bE(new A.d8(a===undefined))
return this.a.bE(a)},
$S:2}
A.dJ.prototype={
c_(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.b.E(a-s,k)
r=a>>>0
a=B.b.E(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.b.E(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.b.E(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.b.E(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.b.E(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.b.E(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.V()
l.V()
l.V()
l.V()},
V(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.b.E(o-n+(q-p)+(m-r),4294967296)>>>0},
cQ(){var s,r=this
r.V()
s=r.a
r.V()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992}}
A.T.prototype={
bC(a){var s,r,q=this
a.a=q.b
s=q.c
a.b=s
r=A.b_(q.d,t.L)
a.sbS(r)
a.d=q.e
a.e=q.f
a.f=q.r&&s.gR()},
gb3(){var s,r,q=this,p=q.r?" (dotted quarter)":""
p=A.e([""+q.b+" BPM"+p,q.c.gS()],t.s)
s=q.e
if(s!==B.h){r=A.el(" \\(\\d\\)")
p.push(A.fK(s.d,r,""))}if((s.c&1)===0&&q.f>50)p.push("swing "+q.f+"%")
return B.a.O(p," \xb7 ")},
bV(){var s,r,q,p=this,o=p.c.gL(),n=A.e([],t.s)
for(s=p.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.V)(s),++q)n.push(s[q].b)
return A.eZ(["name",p.a,"bpm",p.b,"meter",o,"levels",n,"sub",p.e.b,"swing",p.f,"dotted",p.r],t.N,t.K)}}
A.e8.prototype={
$6$dotted$sub$swing(a,b,c,d,e,f){var s=A.b1(c)
return new A.T(a,b,s,s.Z(),e,f,d)},
$3(a,b,c){return this.$6$dotted$sub$swing(a,b,c,!1,B.h,50)},
$4$sub(a,b,c,d){return this.$6$dotted$sub$swing(a,b,c,!1,d,50)},
$5$sub$swing(a,b,c,d,e){return this.$6$dotted$sub$swing(a,b,c,!1,d,e)},
$4$dotted(a,b,c,d){return this.$6$dotted$sub$swing(a,b,c,d,B.h,50)},
$S:17}
A.L.prototype={
aH(){return"Level."+this.b}}
A.cp.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:18}
A.cq.prototype={
$0(){return B.m},
$S:19}
A.aj.prototype={
aH(){return"Voice."+this.b}}
A.C.prototype={
aH(){return"Subdivision."+this.b}}
A.de.prototype={
$1(a){return t.Y.a(a).b===this.a},
$S:20}
A.df.prototype={
$0(){return B.h},
$S:21}
A.b0.prototype={
bZ(a,b,c){var s,r=this.a
if(r<1||r>32)throw A.c(A.bx(r,"beats","must be 1 to 32"))
s=this.b
if(!B.a.a8(B.p,s))throw A.c(A.bx(s,"unit","must be one of "+A.o(B.p)))
s=this.c
if(B.a.bB(s,new A.ct())||B.a.cJ(s,0,new A.cu(),t.S)!==r)throw A.c(A.bx(c,"groups","must add up to "+r))},
gR(){if(this.b>=8){var s=this.a
s=B.b.a6(s,3)===0&&s>3&&B.a.a_(this.c,new A.cx())}else s=!1
return s},
gaB(){var s,r,q,p,o,n=A.e([],t.t)
for(s=this.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
B.a.j(n,q)
q+=o}return n},
gS(){var s=this,r=s.c,q=B.a.a_(r,new A.cy())||s.gR(),p=""+s.a,o=""+s.b
return q?p+"/"+o:p+"/"+o+" ("+B.a.O(r,"+")+")"},
gL(){var s=this.c,r=""+this.a,q=""+this.b
return B.a.a_(s,new A.cv())?r+"/"+q:r+"/"+q+":"+B.a.O(s,"+")},
Z(){var s,r,q,p,o=this.gaB(),n=A.f_(o,A.M(o).c)
o=A.e([],t.a)
for(s=this.a,r=this.c,q=0;q<s;++q){if(q===0)p=B.y
else if(n.a8(0,q))p=B.m
else p=B.a.a_(r,new A.cw())?B.m:B.z
o.push(p)}return o},
T(a,b){if(b==null)return!1
return b instanceof A.b0&&b.gL()===this.gL()},
gl(a){return B.c.gl(this.gL())}}
A.ct.prototype={
$1(a){return A.u(a)<1},
$S:1}
A.cu.prototype={
$2(a,b){return A.u(a)+A.u(b)},
$S:22}
A.cx.prototype={
$1(a){return A.u(a)===3},
$S:1}
A.cy.prototype={
$1(a){return A.u(a)===1},
$S:1}
A.cv.prototype={
$1(a){return A.u(a)===1},
$S:1}
A.cw.prototype={
$1(a){return A.u(a)===1},
$S:1}
A.ck.prototype={
gbD(){var s=60/this.a
return this.f&&this.b.gR()?s/3:s},
cE(a){var s,r,q=this,p=q.gbD(),o=q.d.c,n=p/o
if((o&1)!==0||q.e===50)return n
s=n*2
r=B.b.n(q.e,50,75)/100
return(a&1)===0?s*r:s*(1-r)},
cY(a,b){var s,r=this.c
if(!(a<r.length))return A.i(r,a)
s=r[a]
if(s===B.A)return B.j
if(b>0)return B.v
switch(s.a){case 0:r=B.i
break
case 1:r=B.n
break
case 2:r=B.D
break
case 3:r=B.j
break
default:r=null}return r},
sbS(a){this.c=t.B.a(a)}}
A.dd.prototype={
aZ(a){var s,r=this,q=!1
if(r.a)if(r.c>=1){s=r.b
if(s!==0){q=r.d
q=s>0?B.b.n(B.b.A(q),20,300)>a:B.b.n(B.b.A(q),20,300)<a}}return q},
b0(a,b){var s,r,q,p=this
if(!p.aZ(a))return a
s=B.b.n(B.b.A(p.d),20,300)
r=p.b
q=a+r*B.b.b4(b,p.c)
return B.b.n(B.d.A(r>0?Math.min(q,s):Math.max(q,s)),20,300)},
cC(a,b){var s,r=this
if(!r.aZ(a)||r.b0(a,b)===B.b.n(B.b.A(r.d),20,300))return null
s=r.c
return s-B.b.a6(b,s)},
cR(a,b){var s,r,q,p,o,n,m=this
if(!m.a)return""
if(!m.aZ(a)){s=m.b
if(s===0)s="Speed trainer: set a change other than 0 BPM."
else{r=m.d
s=s>0?"not above":"not below"
s="Speed trainer: the target ("+r+" BPM) is "+s+" the current tempo, so the tempo will stay put."}return s}q=m.b0(a,b)
p=m.cC(a,b)
if(p==null)return"Speed trainer: reached "+m.d+" BPM. Holding here."
s=m.b
o=s>0?"+":"\u2212"
r=m.d
n=p===1?"":"s"
return"Speed trainer: "+q+" \u2192 "+r+" BPM \xb7 next "+o+Math.abs(s)+" in "+A.o(p)+" bar"+n}}
A.cj.prototype={
bP(a){var s,r=this
if(!r.a||r.c<1||r.b<1)return!1
s=r.b
return B.b.a6(a,s+r.c)>=s}}
A.aO.prototype={
i(a){var s=this
return"Click("+B.d.cT(s.a,3)+", "+s.b.i(0)+", bar "+s.c+", cell "+s.d+"."+s.e+")"}}
A.dc.prototype={
b_(){var s,r,q=this
q.d=q.a.a
s=q.y===0&&q.z===0
r=q.x
q.e=s?r:r+1},
cP(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(g.r>0){s=g.a
r=s.b
q=r.c
p=r.gaB()
r=g.w
o=q.length
n=B.b.a6(r,o)
m=g.Q
l=n===0?B.i:B.n
k=g.f
r=B.b.b4(r,o)
if(!(n<p.length))return A.i(p,n)
j=p[n]
i=s.a
g.Q=m+s.gbD()*q[n];++g.w;--g.r
return new A.aO(m,l,-k+r,j,0,i,!0,n+1,o)}s=g.y
r=g.a
if(s>=r.b.a){s=g.z=g.y=0;++g.x}o=g.z
if(o>=r.d.c)o=g.z=0
if(s===0&&o===0&&g.b.a)r.a=g.b.b0(g.d,g.x-g.e)
h=g.c.bP(g.x)?B.j:r.cY(g.y,g.z)
s=g.Q
o=g.x
m=g.y
l=g.z
k=r.a
g.Q=s+r.cE(l)
if(++g.z>=r.d.c){g.z=0
if(++g.y>=r.b.a){g.y=0;++g.x}}return new A.aO(s,h,o,m,l,k,!1,0,0)}}
A.dg.prototype={
cS(a){var s=this.c
if(s.length!==0&&a-B.a.gbR(s)>2000)B.a.P(s)
B.a.j(s,a)
if(s.length>5)B.a.az(s,0)
if(s.length<2)return null
return B.b.n(B.d.A(6e4/((B.a.gbR(s)-B.a.gaX(s))/(s.length-1))),20,300)}}
A.e4.prototype={
$1(a){return this.a.$0()},
$S:3}
A.e3.prototype={
$1(a){return this.a.$0()},
$S:3}
A.dj.prototype={
Y(){var s=0,r=A.iD(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$Y=A.iR(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:n.b=!0
m=A.b(v.G.navigator).wakeLock
k=t.m
if(!k.b(m)||n.a!=null){s=1
break}p=4
l=A.aU(A.b(m),"request","screen",null,k)
s=7
return A.i7(A.fI(l,k),$async$Y)
case 7:k=b
n.a=k
k.toString
A.k(k,"release",new A.dk(n))
p=2
s=6
break
case 4:p=3
i=o.pop()
n.a=null
s=6
break
case 3:s=2
break
case 6:case 1:return A.i9(q,r)
case 2:return A.i8(o.at(-1),r)}})
return A.ia($async$Y,r)},
bT(){var s,r
this.b=!1
s=this.a
this.a=null
if(s!=null)try{A.aU(s,"release",null,null,t.X)}catch(r){}}}
A.dk.prototype={
$0(){return this.a.a=null},
$S:0}
A.e7.prototype={
$1(a){A.bp(a)
return null},
$S:23}
A.ea.prototype={
$0(){var s,r=A.dQ(this.a.getAttribute("data-theme"))==="light",q=r?"Switch to dark theme":"Switch to light theme",p=this.b
p.setAttribute("aria-label",q)
p.setAttribute("title",q)
s=A.Y(p.firstElementChild)
if(s!=null){p=r?"\u263e":"\u2600"
s.textContent=p}},
$S:0}
A.e9.prototype={
$0(){var s=this.a,r=A.dQ(s.getAttribute("data-theme"))==="light"?"dark":"light"
s.setAttribute("data-theme",r)
A.R("ds-theme",r)
this.b.$0()},
$S:0}
A.bR.prototype={
gH(){var s,r=this,q=r.d
if(q===$){s=r.a
q=r.d=new A.dc(s,r.b,r.c,s.a)}return q},
gaG(){var s,r=this,q=r.aW
if(q===$){s=A.aH(r.gc8())
r.aW!==$&&A.eI()
r.aW=s
q=s}return q},
cZ(){var s,r,q,p=this,o="input",n="change",m="click"
p.cn()
p.cc()
p.c3()
A.k(p.f,o,new A.cN(p))
s=p.e
A.k(s,o,new A.cO(p))
A.k(s,n,new A.cP(p))
s=t.m
A.k(A.d("bpm-down",s),m,new A.d_(p))
A.k(A.d("bpm-up",s),m,new A.d1(p))
A.k(A.d("bpm-down-5",s),m,new A.d2(p))
A.k(A.d("bpm-up-5",s),m,new A.d3(p))
r=p.gcU()
A.k(p.x,m,r)
q=p.gcu()
A.k(A.d("tap",s),m,q)
A.k(p.z,m,r)
A.k(A.d("q-tap",s),m,q)
A.k(A.d("q-down",s),m,new A.d4(p))
A.k(A.d("q-up",s),m,new A.d5(p))
q=v.G
A.b(q.document).addEventListener("scroll",A.aH(new A.d6(p)))
A.jd("resize",p.gcX())
r=p.gcg()
A.k(p.ay,n,r)
A.k(p.ch,n,r)
A.k(p.CW,n,new A.d7(p))
A.k(p.dx,n,new A.cQ(p))
A.k(A.d("reset-accents",s),m,new A.cR(p))
A.k(p.dy,n,new A.cS(p))
A.k(p.fx,o,new A.cT(p))
A.k(p.go,n,new A.cU(p))
A.k(p.id,o,new A.cV(p))
A.k(p.k1,o,new A.cW(p))
if("vibrate" in A.b(q.navigator)){p.k2.hidden=!1
A.k(p.k3,n,new A.cX(p))}A.k(p.ok,n,new A.cY(p))
A.k(p.k4,n,new A.cZ(p))
p.cB()
p.cA()
p.cz()
A.b(q.document).addEventListener("visibilitychange",A.aH(new A.d0(p)))
p.bq()},
cc(){var s,r,q,p,o,n,m="option"
for(s=this.ay,r=1;r<=32;++r){q=""+r
p=A.J(m,null,q)
p.setAttribute("value",q)
s.appendChild(p)}for(s=this.ch,o=0;o<4;++o){q=""+B.p[o]
p=A.J(m,null,q)
p.setAttribute("value",q)
s.appendChild(p)}for(s=this.dy,o=0;o<8;++o){n=B.B[o]
q=A.J(m,null,n.d)
q.setAttribute("value",n.b)
s.appendChild(q)}},
c3(){var s,r,q,p,o,n
for(s=["4/4","3/4","2/4","5/4","6/8","7/8","9/8","12/8"],r=s.length,q=this.cy,p=0;p<r;++p){o=s[p]
n=A.J("button","chip",o)
n.setAttribute("type","button")
n.setAttribute("aria-label","Time signature "+o)
A.k(n,"click",new A.cB(this,o))
q.appendChild(n)}},
u(a){var s=B.c.a5(B.c.a5(a)),r=A.ej(s,null)
if(r==null)r=A.hs(s)
return r==null?null:B.d.A(r)},
bp(a,b){var s=this,r=s.a
r.a=B.b.n(B.b.A(a),20,300)
s.gH().b_()
s.bt(b)
if(!s.F)s.an()
A.R("ds-last",A.Z(A.e([A.a7("last",r)],t.e)))},
D(a){return this.bp(a,!1)},
bt(a){var s,r,q,p,o=this,n=o.a,m=o.bK=n.a,l=""+m
o.f.value=l
if(!a)o.e.value=l
s=A.fu(m)
if(!(s<10))return A.i(B.f,s)
o.w.textContent=B.f[s].b
r=A.fu(m)
s=r+1
q=s<10?B.f[s].a-1:300
if(!(r<10))return A.i(B.f,r)
o.p1.textContent=""+B.f[r].a+"\u2013"+q+" BPM"
o.Q.textContent=l
if(n.f&&n.b.gR())p="dotted quarter"
else{switch(n.b.b){case 2:n="half note"
break
case 4:n="quarter note"
break
case 8:n="eighth note"
break
default:n="sixteenth note"
break}p=n}o.r.textContent="Beats per minute, counting each "+p},
X(){return this.bt(!1)},
bv(){var s=this,r=v.G,q=s.cH.cS(A.I(A.b(r.performance).now())),p=s.bL
if(p!=null)r.clearTimeout(p)
if(q==null){s.v("Tap again in time with the beat.")
return}s.D(q)
s.bL=A.u(r.setTimeout(A.bq(new A.cJ(s)),900))},
ci(){var s,r=this,q=r.u(A.p(r.ay.value))
if(q==null)q=4
s=r.u(A.p(r.ch.value))
r.aP(A.ai(q,s==null?4:s,null))},
aP(a){var s=this,r=s.a,q=a.a===r.b.a&&B.a.O(a.c,"+")===B.a.O(r.b.c,"+")
if(!a.gR())r.f=!1
if(!q)r.c=a.Z()
r.b=a
s.br()
s.af()
s.X()
A.R("ds-last",A.Z(A.e([A.a7("last",r)],t.e)))},
br(){var s,r,q,p,o,n,m,l=this,k=l.a,j=k.b,i=j.a,h=""+i
l.ay.value=h
s=j.b
r=""+s
l.ch.value=r
q=A.j4(i,s)
l.cx.hidden=q.length<2
s=l.CW
s.replaceChildren()
for(i=q.length,p=0;p<q.length;q.length===i||(0,A.V)(q),++p){o=q[p]
n=o.c
n=A.J("option",null,B.a.a_(n,new A.cI())?"Every beat":B.a.O(n," + "))
n.setAttribute("value",o.gL())
s.appendChild(n)}s.value=j.gL()
l.db.hidden=!j.gR()
l.dx.checked=k.f
for(k=A.fo(l.cy),i=k.length,r=h+"/"+r,p=0;p<k.length;k.length===i||(0,A.V)(k),++p){m=k[p]
if(A.p(m.textContent)===r){h=j.gL()
s=A.b1(r)
h=h===(s==null?null:s.gL())}else h=!1
m.setAttribute("aria-pressed",""+h)}},
af(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c="span",b=e.ax
b.replaceChildren()
s=e.ar
B.a.P(s)
r=e.bJ
B.a.P(r)
e.au=null
q=e.a
p=q.b.gaB()
o=A.f_(p,A.M(p).c)
n=!B.a.a_(q.b.c,new A.cz())
for(p=t.O,m=0;m<q.b.a;m=k){l=A.J("button","cell",d)
l.setAttribute("type","button")
if(n&&o.a8(0,m)&&m>0)A.b(l.classList).add("group-start")
k=m+1
l.appendChild(A.J(c,"cell-num",""+k))
j=A.J(c,"cell-mark",d)
j.setAttribute("aria-hidden","true")
l.appendChild(j)
l.appendChild(A.J(c,"cell-level",d))
i=A.e([],p)
if(q.d.c>1){h=A.J(c,"cell-subs",d)
h.setAttribute("aria-hidden","true")
for(g=0;g<q.d.c;++g){f=A.J(c,g===0?"tick is-beat":"tick",d)
h.appendChild(f)
B.a.j(i,f)}l.appendChild(h)}B.a.j(r,i)
A.k(l,"click",new A.cA(e,m))
b.appendChild(l)
B.a.j(s,l)
e.bh(m)}e.ai(d)},
bh(a){var s,r,q,p,o,n=this.a.c
if(!(a<n.length))return A.i(n,a)
s=n[a]
n=this.ar
if(!(a<n.length))return A.i(n,a)
r=n[a]
for(q=0;q<4;++q){p=B.q[q]
A.z(A.b(r.classList).toggle("lv-"+p.b,p===s))}n=A.fo(r)
if(2>=n.length)return A.i(n,2)
o=s.c
n[2].textContent=o
r.setAttribute("aria-label","Beat "+(a+1)+", "+o+". Press to change.")},
aQ(){var s,r=this,q=r.a
r.dy.value=q.d.b
r.fr.hidden=(q.d.c&1)!==0
r.fx.value=""+q.e
s=q.e
A:{if(50===s){q="Straight (50%)"
break A}if(s>=66&&s<=68){q="Triplet swing ("+s+"%)"
break A}if(75===s){q="Dotted feel (75%)"
break A}q=""+s+"%"
break A}r.fy.textContent=q},
cB(){var s,r,q=t.m,p=A.d("speed-on",q),o=A.d("speed-step",q),n=A.d("speed-every",q),m=A.d("speed-target",q),l=A.d("gap-on",q),k=A.d("gap-play",q),j=A.d("gap-mute",q),i=new A.cM(this,p,o,n,m,l,k,j)
for(q=[p,o,n,m,l,k,j],s=q.length,r=0;r<s;++r)A.k(q[r],"change",i)
i.$0()},
bs(a){var s,r,q=this,p=q.ry,o=q.b
p.hidden=!o.a
if(!o.a)return
s=a==null
r=s?0:Math.max(0,a.c-q.gH().e)
p.textContent=o.cR(s?q.a.a:q.gH().d,r)},
an(){return this.bs(null)},
cA(){var s,r,q,p=this
p.C=A.fB(A.eE("ds-presets"))
A.d("preset-form",t.m).addEventListener("submit",A.aH(new A.cL(p)))
A.k(p.rx,"click",p.gcv())
for(s=A.jg(),r=p.to,q=0;q<7;++q)r.appendChild(p.bk(s[q],!0))
p.al()},
cp(){var s,r,q=this,p={},o=q.x1,n=A.ei(A.p(o.value))
p.a=n
if(n.length===0){s=q.a
p.a=""+s.a+" BPM "+s.b.gS()}r=B.a.bB(q.C,new A.cG(p))
s=A.jj(q.C,A.a7(p.a,q.a))
q.C=s
A.R("ds-presets",A.Z(s))
o.value=""
q.al()
p=p.a
q.v(r?"Updated \u201c"+p+"\u201d.":"Saved \u201c"+p+"\u201d.")},
al(){var s,r,q,p=this,o=p.p3
o.replaceChildren()
for(s=p.C,r=s.length,q=0;q<s.length;s.length===r||(0,A.V)(s),++q)o.appendChild(p.ck(s[q]))
p.p4.hidden=p.C.length!==0},
c7(a){var s,r,q=this,p=B.a.cM(q.C,new A.cC(a))
if(p<0)return
s=A.b_(q.C,t.b)
B.a.az(s,p)
q.C=s
A.R("ds-presets",A.Z(s))
q.al()
q.aV=new A.G(p,a)
s="Deleted \u201c"+a.a
q.RG.textContent=s+"\u201d."
q.R8.hidden=!1
q.rx.focus()
q.v(s+"\u201d. Press Undo to bring it back.")
r=q.av
if(r!=null)v.G.clearTimeout(r)
q.av=A.u(v.G.setTimeout(A.bq(q.gce()),1e4))},
cw(){var s,r,q,p,o=this,n=o.aV
if(n==null)return
s=n.a
r=n.b
q=A.b_(o.C,t.b)
p=A.u(Math.min(s,o.C.length))
A.M(q).c.a(r)
q.$flags&1&&A.bv(q,"insert",2)
if(p<0||p>q.length)A.eH(A.ek(p,null))
q.splice(p,0,r)
o.C=q
A.R("ds-presets",A.Z(q))
o.al()
o.be()
o.v("Restored \u201c"+r.a+"\u201d.")},
be(){var s,r=this
r.aV=null
s=r.av
if(s!=null)v.G.clearTimeout(s)
r.av=null
if(A.Y(A.b(v.G.document).activeElement)===r.rx)r.x1.focus()
r.R8.hidden=!0},
bk(a,b){var s,r,q=A.J("li","preset",null),p=A.J("button","preset-load",null)
p.setAttribute("type","button")
s=a.a
p.appendChild(A.J("span","preset-name",s))
p.appendChild(A.J("span","preset-sum",a.gb3()))
A.k(p,"click",new A.cE(this,a))
q.appendChild(p)
if(!b){r=A.J("button","preset-del","\xd7")
r.setAttribute("type","button")
r.setAttribute("aria-label","Delete \u201c"+s+"\u201d")
A.k(r,"click",new A.cF(this,a))
q.appendChild(r)}return q},
ck(a){return this.bk(a,!1)},
cn(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.fB(A.eE("ds-last"))
if(g.length!==0)B.a.gaX(g).bC(h.a)
try{j=A.eE("ds-prefs")
s=B.k.bF(j==null?"{}":j,null)
if(s instanceof A.F){r=s.p(0,"sound")
q=null
if(typeof r=="string"){q=r
j=B.a.a8(B.P,q)}else j=!1
if(j)h.x2=q
p=s.p(0,"volume")
o=null
if(typeof p=="number"){o=p
h.xr=J.ed(o,0,1)}n=s.p(0,"subVolume")
m=null
if(typeof n=="number"){m=n
h.y1=J.ed(m,0,1)}h.y2=J.ad(s.p(0,"haptics"),!0)
h.a9=J.ad(s.p(0,"bigFlash"),!0)
l=s.p(0,"countIn")
k=null
if(A.ew(l)){k=l
h.M=J.ed(k,0,2)}}}catch(i){if(!(A.a_(i) instanceof A.aR))throw i}},
W(){var s=this
return A.R("ds-prefs",B.k.bG(A.eZ(["sound",s.x2,"volume",s.xr,"subVolume",s.y1,"haptics",s.y2,"bigFlash",s.a9,"countIn",s.M],t.N,t.K),null))},
bq(){var s=this
s.br()
s.af()
s.aQ()
s.X()
s.go.value=s.x2
s.id.value=""+B.d.A(s.xr*100)
s.k1.value=""+B.d.A(s.y1*100)
s.k3.checked=s.y2
s.k4.checked=s.a9
s.ok.value=""+s.M},
cz(){A.b(v.G.document).addEventListener("keydown",A.aH(new A.cK(this)))},
cV(){var s,r,q,p,o,n,m,l,k,j=this
if(j.F){j.F=!1
s=j.aq
if(s!=null)v.G.clearInterval(s)
r=j.ab
if(r!=null)v.G.cancelAnimationFrame(r)
q=j.N
if(q!=null)q.disconnect()
j.N=null
q=j.I
if(q!=null)A.b(q.suspend())
B.a.P(j.a0)
j.a1.bT()
q=j.a
p=q.a
o=j.b
if(o.a)q.a=j.gH().d
j.ai(null)
j.am(!1)
j.X()
j.an()
j.v(o.a?"Stopped. You reached "+p+" BPM.":"Stopped.")}else{n=j.I
if(n==null)n=j.I=A.b(new v.G.AudioContext())
A.eG()
A.b(n.resume())
q=A.b(n.createGain())
A.b(q.connect(A.b(n.destination)))
j.N=q
A.b(q.gain).value=j.xr
j.F=!0
q=j.gH()
o=j.M
q.f=o
q.Q=q.x=q.y=q.z=q.e=0
m=q.a
q.d=m.a
q.w=0
q.r=Math.max(0,o)*m.b.c.length
B.a.P(j.a0)
j.aa=null
j.ap=A.I(n.currentTime)+0.08
j.aR()
m=v.G
l=j.a2
if(l===$){k=A.bq(j.gby())
j.a2!==$&&A.eI()
j.a2=k
l=k}j.aq=A.u(m.setInterval(l,25))
j.ab=A.u(m.requestAnimationFrame(j.gaG()))
j.am(!0)
j.a1.Y()
q=j.M
if(q>0){o=q===1?"":"s"
m=j.a
m="Counting in "+q+" bar"+o+", then playing at "+m.a+" BPM, "+m.b.gS()+"."
q=m}else{q=j.a
q="Playing at "+q.a+" BPM, "+q.b.gS()+"."}j.v(q)}return null},
cs(){var s,r,q,p,o,n=this,m=n.I
if(m==null)m=n.I=A.b(new v.G.AudioContext())
A.eG()
A.b(m.resume())
s=A.b(m.createGain())
A.b(s.connect(A.b(m.destination)))
n.N=s
A.b(s.gain).value=n.xr
n.F=!0
s=n.gH()
r=n.M
s.f=r
s.Q=s.x=s.y=s.z=s.e=0
q=s.a
s.d=q.a
s.w=0
s.r=Math.max(0,r)*q.b.c.length
B.a.P(n.a0)
n.aa=null
n.ap=A.I(m.currentTime)+0.08
n.aR()
q=v.G
p=n.a2
if(p===$){o=A.bq(n.gby())
n.a2!==$&&A.eI()
n.a2=o
p=o}n.aq=A.u(q.setInterval(p,25))
n.ab=A.u(q.requestAnimationFrame(n.gaG()))
n.am(!0)
n.a1.Y()
s=n.M
if(s>0){r=s===1?"":"s"
q=n.a
q="Counting in "+s+" bar"+r+", then playing at "+q.a+" BPM, "+q.b.gS()+"."
s=q}else{s=n.a
s="Playing at "+s.a+" BPM, "+s.b.gS()+"."}n.v(s)},
ct(){var s,r,q,p,o,n=this
n.F=!1
s=n.aq
if(s!=null)v.G.clearInterval(s)
r=n.ab
if(r!=null)v.G.cancelAnimationFrame(r)
q=n.N
if(q!=null)q.disconnect()
n.N=null
q=n.I
if(q!=null)A.b(q.suspend())
B.a.P(n.a0)
n.a1.bT()
q=n.a
p=q.a
o=n.b
if(o.a)q.a=n.gH().d
n.ai(null)
n.am(!1)
n.X()
n.an()
n.v(o.a?"Stopped. You reached "+p+" BPM.":"Stopped.")},
am(a){var s,r,q,p,o,n
for(s=[this.x,this.z],r=s.length,q=""+a,p=0;p<r;++p){o=s[p]
n=a?"Stop":"Start"
o.textContent=n
o.setAttribute("aria-pressed",q)
A.z(A.b(o.classList).toggle("is-running",a))}},
b1(){var s=A.b(this.x.getBoundingClientRect()),r=A.I(s.bottom)>0&&A.I(s.top)<A.I(v.G.innerHeight),q=this.y
if(A.z(q.hidden)===r)return
q.hidden=r
A.z(A.b(A.b(A.b(v.G.document).body).classList).toggle("has-transport",!r))},
aR(){var s,r,q,p,o,n,m=this,l=m.I,k=m.N
if(!m.F||l==null||k==null)return
s=A.z(A.b(v.G.document).hidden)?1.5:0.12
for(r=m.a0;;){q=m.aa
if(q==null)q=m.gH().cP()
p=m.ap
o=q.a
n=p+o
if(n<A.I(l.currentTime)){p+=A.I(l.currentTime)+0.05-n
m.ap=p
n=p+o}if(n>=A.I(l.currentTime)+s){m.aa=q
break}m.aa=null
m.aN(l,k,q.b,n)
B.a.j(r,new A.G(n,q))}while(r.length>128)B.a.az(r,0)},
aN(a,b,c,d){var s,r,q,p,o,n,m=this
switch(c.a){case 0:s=1
break
case 1:s=0.6
break
case 2:s=0.24
break
case 3:s=0.36*m.y1
break
case 4:s=0
break
default:s=null}if(s<0.005)return
r=c===B.i
q=c===B.v
switch(m.x2){case"beep":if(r)p=1760
else p=q?880:1320
m.bA(a,b,"sine",p,s,d,0.05)
break
case"stick":if(r)p=3200
else p=q?1800:2500
m.bg(a,b,p,s*1.4,d)
break
default:if(r)o=1250
else o=q?760:950
n=A.b(a.createBiquadFilter())
n.type="bandpass"
A.b(n.connect(b))
A.b(n.frequency).value=o
A.b(n.Q).value=6
m.bA(a,n,"triangle",o,s*2.2,d,0.04)
m.bg(a,b,o*2,s*0.25,d)}},
bA(a,b,c,d,e,f,g){var s,r,q,p=A.b(a.createOscillator())
p.type=c
s=A.b(a.createGain())
A.b(p.frequency).value=d
r=A.b(s.gain)
A.b(r.setValueAtTime(e,f))
q=f+g
A.b(r.exponentialRampToValueAtTime(0.0001,q))
A.b(A.b(p.connect(s)).connect(b))
p.start(f)
p.stop(q+0.01)},
bg(a,b,c,d,e){var s,r,q,p,o=this.bH
if(o==null)o=this.bH=this.cf(a)
s=A.b(a.createBufferSource())
s.buffer=o
r=A.b(a.createBiquadFilter())
r.type="bandpass"
A.b(r.frequency).value=c
A.b(r.Q).value=1.5
q=A.b(a.createGain())
p=A.b(q.gain)
A.b(p.setValueAtTime(d,e))
A.b(p.exponentialRampToValueAtTime(0.0001,e+0.03))
A.b(A.b(A.b(s.connect(r)).connect(q)).connect(b))
s.start(e)
s.stop(e+0.04)},
cf(a){var s,r,q=B.d.A(A.I(a.sampleRate)*0.05),p=A.b(a.createBuffer(1,q,A.I(a.sampleRate))),o=t.E.a(p.getChannelData(0)),n=new A.dJ()
n.c_(7)
for(s=0;s<q;++s){r=n.cQ()
o.$flags&2&&A.bv(o)
if(!(s<o.length))return A.i(o,s)
o[s]=r*2-1}return p},
c9(a){var s,r,q,p,o,n=this
A.I(a)
s=n.I
if(!n.F||s==null)return
r=n.a0
q=null
p=null
for(;;){if(!(r.length!==0&&B.a.gaX(r).a<=A.I(s.currentTime)))break
o=B.a.az(r,0).b
if(o.e===0)q=o
p=o}if(q!=null)n.ai(q)
if(p!=null)n.bf(p)
n.ab=A.u(v.G.requestAnimationFrame(n.gaG()))},
ai(a){var s,r,q,p,o,n,m,l,k,j=this,i=a==null,h=i?null:a.d
if(h==null)h=-1
if(i){for(i=j.ar,s=i.length,r=0;r<i.length;i.length===s||(0,A.V)(i),++r)A.z(A.b(i[r].classList).toggle("is-on",!1))
j.bf(null)
j.as.className="flash"
j.at.textContent="Not playing"
return}for(i=j.ar,s=a.r,q=!s,p=0;p<i.length;++p){o=A.b(i[p].classList)
n=q&&p===h
A.z(o.toggle("is-on",n))}m=q&&j.c.bP(a.c)
if(s)i="Count-in \xb7 "+a.w+" of "+a.x
else{i=a.c+1
i=m?"Bar "+i+" \xb7 silent: keep the time going":"Bar "+i+" \xb7 Beat "+(h+1)+" of "+j.a.b.a}j.at.textContent=i
l=a.b
A:{if(B.i===l){i="is-accent"
break A}if(B.n===l||B.v===l){i="is-normal"
break A}if(B.D===l){i="is-ghost"
break A}if(B.j===l){i="is-silent"
break A}i=null}s=j.a9&&l!==B.j?" is-big":""
j.as.className="flash "+i+s
k=j.bI
if(k!=null)v.G.clearTimeout(k)
i=v.G
j.bI=A.u(i.setTimeout(A.bq(new A.cD(j)),90))
if(j.y2&&l!==B.j)A.jk(l===B.i?45:20)
if(j.b.a&&a.d===0&&q)j.bs(a)
if(a.f!==j.bK&&A.Y(A.b(i.document).activeElement)!==j.e)j.X()},
bf(a){var s,r,q,p=this,o=p.au
if(o!=null)A.b(o.classList).remove("is-on")
p.au=null
if(a==null||a.r)return
o=a.d
s=p.bJ
r=s.length
if(o>=r)return
if(!(o>=0))return A.i(s,o)
q=s[o]
o=a.e
if(o>=q.length)return
o=q[o]
A.b(o.classList).add("is-on")
p.au=o},
v(a){this.p2.textContent=a
return a},
bo(a){var s=this.bM
if(s!=null)v.G.clearTimeout(s)
this.bM=A.u(v.G.setTimeout(A.bq(new A.cH(this,a)),600))}}
A.cN.prototype={
$0(){var s=this.a,r=s.u(A.p(s.f.value))
return s.D(r==null?s.a.a:r)},
$S:0}
A.cO.prototype={
$0(){var s=this.a,r=s.u(A.p(s.e.value))
if(r!=null&&r>=20&&r<=300)s.bp(r,!0)},
$S:0}
A.cP.prototype={
$0(){var s=this.a,r=s.u(A.p(s.e.value))
return s.D(r==null?s.a.a:r)},
$S:0}
A.d_.prototype={
$0(){var s=this.a
return s.D(s.a.a+-1)},
$S:0}
A.d1.prototype={
$0(){var s=this.a
return s.D(s.a.a+1)},
$S:0}
A.d2.prototype={
$0(){var s=this.a
return s.D(s.a.a+-5)},
$S:0}
A.d3.prototype={
$0(){var s=this.a
return s.D(s.a.a+5)},
$S:0}
A.d4.prototype={
$0(){var s=this.a
return s.D(s.a.a+-1)},
$S:0}
A.d5.prototype={
$0(){var s=this.a
return s.D(s.a.a+1)},
$S:0}
A.d6.prototype={
$1(a){return this.a.b1()},
$S:3}
A.d7.prototype={
$0(){var s=this.a,r=A.b1(A.p(s.CW.value))
if(r!=null)s.aP(r)},
$S:0}
A.cQ.prototype={
$0(){var s=this.a,r=s.a
r.f=A.z(s.dx.checked)
s.X()
A.R("ds-last",A.Z(A.e([A.a7("last",r)],t.e)))},
$S:0}
A.cR.prototype={
$0(){var s=this.a,r=s.a
r.sbS(r.b.Z())
s.af()
A.R("ds-last",A.Z(A.e([A.a7("last",r)],t.e)))
s.v("Accents reset.")},
$S:0}
A.cS.prototype={
$0(){var s=this.a,r=s.a
r.d=A.f8(A.p(s.dy.value))
s.aQ()
s.af()
A.R("ds-last",A.Z(A.e([A.a7("last",r)],t.e)))},
$S:0}
A.cT.prototype={
$0(){var s=this.a,r=s.a,q=s.u(A.p(s.fx.value))
r.e=q==null?50:q
s.aQ()
A.R("ds-last",A.Z(A.e([A.a7("last",r)],t.e)))},
$S:0}
A.cU.prototype={
$0(){var s,r,q,p=this.a
p.x2=A.p(p.go.value)
p.W()
if(!p.F){s=p.I
if(s==null)s=p.I=A.b(new v.G.AudioContext())
A.eG()
A.b(s.resume())
r=A.b(s.createGain())
A.b(r.connect(A.b(s.destination)))
A.b(r.gain).value=p.xr
q=A.I(s.currentTime)+0.05
p.aN(s,r,B.i,q)
p.aN(s,r,B.n,q+0.25)}},
$S:0}
A.cV.prototype={
$0(){var s,r=this.a,q=r.u(A.p(r.id.value))
q=(q==null?80:q)/100
r.xr=q
s=r.N
if(s!=null)A.b(s.gain).value=q
r.W()},
$S:0}
A.cW.prototype={
$0(){var s=this.a,r=s.u(A.p(s.k1.value))
s.y1=(r==null?60:r)/100
s.W()},
$S:0}
A.cX.prototype={
$0(){var s=this.a
s.y2=A.z(s.k3.checked)
s.W()},
$S:0}
A.cY.prototype={
$0(){var s=this.a,r=s.u(A.p(s.ok.value))
s.M=B.b.n(r==null?0:r,0,2)
s.W()},
$S:0}
A.cZ.prototype={
$0(){var s=this.a
s.a9=A.z(s.k4.checked)
s.W()},
$S:0}
A.d0.prototype={
$1(a){var s
if(!A.z(A.b(v.G.document).hidden)){s=this.a
s=s.F&&s.a1.b}else s=!1
if(s)this.a.a1.Y()},
$S:25}
A.cB.prototype={
$0(){var s=this.a,r=this.b,q=A.b1(r)
q.toString
s.aP(q)
s.v("Time signature "+A.b1(r).gS()+".")},
$S:0}
A.cJ.prototype={
$0(){var s=this.a
return s.v("Tempo set to "+s.a.a+" BPM.")},
$S:0}
A.cI.prototype={
$1(a){return A.u(a)===1},
$S:1}
A.cz.prototype={
$1(a){return A.u(a)===1},
$S:1}
A.cA.prototype={
$0(){var s=this.a,r=s.a,q=r.c,p=this.b
if(!(p<q.length))return A.i(q,p)
B.a.K(q,p,B.q[(q[p].a+1)%4])
s.bh(p)
A.R("ds-last",A.Z(A.e([A.a7("last",r)],t.e)))
r=r.c
if(!(p<r.length))return A.i(r,p)
s.v("Beat "+(p+1)+": "+r[p].c+".")},
$S:0}
A.cM.prototype={
$0(){var s,r=this,q=r.a,p=q.b
p.a=A.z(r.b.checked)
s=q.u(A.p(r.c.value))
p.b=B.b.n(s==null?4:s,-50,50)
s=q.u(A.p(r.d.value))
p.c=B.b.n(s==null?4:s,1,64)
s=q.u(A.p(r.e.value))
p.d=B.b.n(B.b.A(s==null?140:s),20,300)
p=q.c
p.a=A.z(r.f.checked)
s=q.u(A.p(r.r.value))
p.b=B.b.n(s==null?2:s,1,64)
s=q.u(A.p(r.w.value))
p.c=B.b.n(s==null?2:s,1,64)
q.gH().b_()
q.an()},
$S:0}
A.cL.prototype={
$1(a){A.b(a).preventDefault()
this.a.cp()},
$S:9}
A.cG.prototype={
$1(a){return t.b.a(a).a.toLowerCase()===this.a.a.toLowerCase()},
$S:10}
A.cC.prototype={
$1(a){return t.b.a(a).a===this.a.a},
$S:10}
A.cE.prototype={
$0(){var s=this.b,r=this.a,q=r.a
s.bC(q)
r.gH().b_()
r.bq()
A.R("ds-last",A.Z(A.e([A.a7("last",q)],t.e)))
r.v("Loaded \u201c"+s.a+"\u201d: "+s.gb3()+".")},
$S:0}
A.cF.prototype={
$0(){return this.a.c7(this.b)},
$S:0}
A.cK.prototype={
$1(a){var s,r,q,p,o,n,m=this
A.b(a)
if(A.z(a.ctrlKey)||A.z(a.metaKey)||A.z(a.altKey))return
s=A.Y(a.target)
r=s==null?null:A.p(s.tagName)
if(r==null)r=""
s=!(r==="INPUT"||r==="SELECT"||r==="TEXTAREA")
q=!s||r==="BUTTON"||r==="A"||r==="SUMMARY"
A:{p=A.p(a.key)
if(" "===p&&!q){a.preventDefault()
s=m.a
if(s.F)s.ct()
else s.cs()
break A}if("ArrowUp"===p&&s){a.preventDefault()
s=m.a
o=A.z(a.shiftKey)?10:1
n=s.a
s.D(n.a+o)
s.bo(""+n.a+" BPM")
break A}if("ArrowDown"===p&&s){a.preventDefault()
s=m.a
o=A.z(a.shiftKey)?-10:-1
n=s.a
s.D(n.a+o)
s.bo(""+n.a+" BPM")
break A}if(("t"===p||"T"===p)&&s&&!A.z(a.repeat))m.a.bv()}},
$S:9}
A.cD.prototype={
$0(){return A.b(this.a.as.classList).add("is-fading")},
$S:0}
A.cH.prototype={
$0(){return this.a.v(this.b)},
$S:0}
A.dY.prototype={
$2(a,b){var s,r,q,p,o,n
t.V.a(b)
s=this.a
if(s.a>=12)return
if(a===0){s.j(0,B.a.O(b,"+"))
return}for(s=[2,3],r=s.length,q=t.S,p=0;p<r;++p){o=s[p]
if(o<=a&&a-o!==1){n=A.b_(b,q)
n.push(o)
this.$2(a-o,n)}}},
$S:26};(function aliases(){var s=J.a6.prototype
s.bY=s.i})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
s(A,"iT","hF",4)
s(A,"iU","hG",4)
s(A,"iV","hH",4)
r(A,"fz","iM",0)
s(A,"iX","ie",5)
var o
q(o=A.bR.prototype,"gcu","bv",0)
q(o,"gcg","ci",0)
q(o,"gcv","cw",0)
q(o,"gce","be",0)
q(o,"gcU","cV",0)
q(o,"gcX","b1",0)
q(o,"gby","aR",0)
p(o,"gc8","c9",24)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.h,null)
q(A.h,[A.eg,J.bH,A.b9,J.as,A.q,A.db,A.f,A.aw,A.H,A.am,A.dh,A.d9,A.aQ,A.bj,A.a4,A.F,A.cr,A.bP,A.bL,A.dI,A.U,A.cb,A.dN,A.dL,A.c7,A.P,A.c9,A.a3,A.y,A.c8,A.cf,A.dl,A.aB,A.ce,A.aF,A.t,A.bC,A.bE,A.dG,A.ds,A.ba,A.dt,A.aR,A.x,A.cg,A.aC,A.d8,A.dJ,A.T,A.b0,A.ck,A.dd,A.cj,A.aO,A.dc,A.dg,A.dj,A.bR])
q(J.bH,[J.bJ,J.aT,J.aW,J.aV,J.aX,J.au,J.av])
q(J.aW,[J.a6,J.n,A.ay,A.b4])
q(J.a6,[J.c_,J.aD,J.a5])
r(J.bI,A.b9)
r(J.cl,J.n)
q(J.au,[J.aS,J.bK])
q(A.q,[A.bO,A.a1,A.bM,A.c6,A.c2,A.ca,A.aZ,A.by,A.S,A.bc,A.c5,A.bb,A.bD])
r(A.aP,A.f)
q(A.aP,[A.ah,A.ag])
r(A.aG,A.am)
r(A.G,A.aG)
r(A.b6,A.a1)
q(A.a4,[A.bA,A.bB,A.c4,A.dZ,A.e0,A.dp,A.dn,A.dR,A.dC,A.e5,A.e6,A.e8,A.cp,A.de,A.ct,A.cx,A.cy,A.cv,A.cw,A.e4,A.e3,A.e7,A.d6,A.d0,A.cI,A.cz,A.cL,A.cG,A.cC,A.cK])
q(A.c4,[A.c3,A.at])
q(A.F,[A.aY,A.cc])
q(A.bB,[A.e_,A.dS,A.dV,A.dD,A.cs,A.dH,A.cu,A.dY])
q(A.b4,[A.bS,A.aA])
q(A.aA,[A.be,A.bg])
r(A.bf,A.be)
r(A.b2,A.bf)
r(A.bh,A.bg)
r(A.b3,A.bh)
q(A.b2,[A.az,A.bT])
q(A.b3,[A.bU,A.bV,A.bW,A.bX,A.bY,A.b5,A.bZ])
r(A.bk,A.ca)
q(A.bA,[A.dq,A.dr,A.dM,A.du,A.dy,A.dx,A.dw,A.dv,A.dB,A.dA,A.dz,A.dm,A.dU,A.cq,A.df,A.dk,A.ea,A.e9,A.cN,A.cO,A.cP,A.d_,A.d1,A.d2,A.d3,A.d4,A.d5,A.d7,A.cQ,A.cR,A.cS,A.cT,A.cU,A.cV,A.cW,A.cX,A.cY,A.cZ,A.cB,A.cJ,A.cA,A.cM,A.cE,A.cF,A.cD,A.cH])
r(A.bd,A.c9)
r(A.bi,A.aB)
r(A.ak,A.bi)
r(A.cd,A.ah)
r(A.bN,A.aZ)
r(A.cm,A.bC)
q(A.bE,[A.co,A.cn])
r(A.dF,A.dG)
q(A.S,[A.b7,A.bG])
q(A.ds,[A.L,A.aj,A.C])
s(A.be,A.t)
s(A.bf,A.H)
s(A.bg,A.t)
s(A.bh,A.H)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",m:"double",ar:"num",w:"String",D:"bool",x:"Null",j:"List",h:"Object",bQ:"Map",r:"JSObject"},mangledNames:{},types:["~()","D(a)","~(@)","~(h?)","~(~())","@(@)","x(@)","x()","~(h?,h?)","x(r)","D(T)","@(@,w)","@(w)","x(~())","x(@,a8)","~(a,@)","x(h,a8)","T(w,a,w{dotted:D,sub:C,swing:a})","D(L)","L()","D(C)","C()","a(a,a)","x(h)","~(m)","x(h?)","~(a,j<a>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.G&&a.b(c.a)&&b.b(c.b)}}
A.i_(v.typeUniverse,JSON.parse('{"c_":"a6","aD":"a6","a5":"a6","jq":"ay","bJ":{"D":[],"l":[]},"aT":{"l":[]},"aW":{"r":[]},"a6":{"r":[]},"n":{"j":["1"],"r":[],"f":["1"]},"bI":{"b9":[]},"cl":{"n":["1"],"j":["1"],"r":[],"f":["1"]},"au":{"m":[],"ar":[]},"aS":{"m":[],"a":[],"ar":[],"l":[]},"bK":{"m":[],"ar":[],"l":[]},"av":{"w":[],"da":[],"l":[]},"bO":{"q":[]},"aP":{"f":["1"]},"ah":{"f":["1"]},"G":{"aG":[],"am":[]},"b6":{"a1":[],"q":[]},"bM":{"q":[]},"c6":{"q":[]},"bj":{"a8":[]},"a4":{"ae":[]},"bA":{"ae":[]},"bB":{"ae":[]},"c4":{"ae":[]},"c3":{"ae":[]},"at":{"ae":[]},"c2":{"q":[]},"aY":{"F":["1","2"],"eY":["1","2"],"bQ":["1","2"],"F.K":"1","F.V":"2"},"ag":{"f":["1"]},"aG":{"am":[]},"bL":{"hv":[],"da":[]},"az":{"t":["m"],"j":["m"],"K":["m"],"r":[],"f":["m"],"H":["m"],"l":[],"t.E":"m"},"ay":{"r":[],"l":[]},"b4":{"r":[]},"bS":{"r":[],"l":[]},"aA":{"K":["1"],"r":[]},"b2":{"t":["m"],"j":["m"],"K":["m"],"r":[],"f":["m"],"H":["m"]},"b3":{"t":["a"],"j":["a"],"K":["a"],"r":[],"f":["a"],"H":["a"]},"bT":{"t":["m"],"j":["m"],"K":["m"],"r":[],"f":["m"],"H":["m"],"l":[],"t.E":"m"},"bU":{"t":["a"],"j":["a"],"K":["a"],"r":[],"f":["a"],"H":["a"],"l":[],"t.E":"a"},"bV":{"t":["a"],"j":["a"],"K":["a"],"r":[],"f":["a"],"H":["a"],"l":[],"t.E":"a"},"bW":{"t":["a"],"j":["a"],"K":["a"],"r":[],"f":["a"],"H":["a"],"l":[],"t.E":"a"},"bX":{"t":["a"],"j":["a"],"K":["a"],"r":[],"f":["a"],"H":["a"],"l":[],"t.E":"a"},"bY":{"t":["a"],"j":["a"],"K":["a"],"r":[],"f":["a"],"H":["a"],"l":[],"t.E":"a"},"b5":{"t":["a"],"j":["a"],"K":["a"],"r":[],"f":["a"],"H":["a"],"l":[],"t.E":"a"},"bZ":{"t":["a"],"j":["a"],"K":["a"],"r":[],"f":["a"],"H":["a"],"l":[],"t.E":"a"},"ca":{"q":[]},"bk":{"a1":[],"q":[]},"P":{"q":[]},"bd":{"c9":["1"]},"y":{"af":["1"]},"ak":{"aB":["1"],"f":["1"]},"F":{"bQ":["1","2"]},"aB":{"f":["1"]},"bi":{"aB":["1"],"f":["1"]},"cc":{"F":["w","@"],"bQ":["w","@"],"F.K":"w","F.V":"@"},"cd":{"ah":["w"],"f":["w"],"ah.E":"w"},"aZ":{"q":[]},"bN":{"q":[]},"m":{"ar":[]},"a":{"ar":[]},"j":{"f":["1"]},"w":{"da":[]},"by":{"q":[]},"a1":{"q":[]},"S":{"q":[]},"b7":{"q":[]},"bG":{"q":[]},"bc":{"q":[]},"c5":{"q":[]},"bb":{"q":[]},"bD":{"q":[]},"ba":{"q":[]},"cg":{"a8":[]},"aC":{"hz":[]},"hd":{"j":["a"],"f":["a"]},"hD":{"j":["a"],"f":["a"]},"hC":{"j":["a"],"f":["a"]},"hb":{"j":["a"],"f":["a"]},"hA":{"j":["a"],"f":["a"]},"hc":{"j":["a"],"f":["a"]},"hB":{"j":["a"],"f":["a"]},"h9":{"j":["m"],"f":["m"]},"ha":{"j":["m"],"f":["m"]}}'))
A.hZ(v.typeUniverse,JSON.parse('{"aP":1,"aA":1,"bi":1,"bC":2,"bE":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.ch
return{n:s("P"),C:s("q"),Z:s("ae"),U:s("f<@>"),O:s("n<r>"),a:s("n<L>"),A:s("n<j<r>>"),J:s("n<bQ<w,h>>"),c:s("n<b0>"),f:s("n<h>"),e:s("n<T>"),d:s("n<+(m,aO)>"),s:s("n<w>"),w:s("n<m>"),q:s("n<@>"),t:s("n<a>"),T:s("aT"),m:s("r"),g:s("a5"),p:s("K<@>"),L:s("L"),B:s("j<L>"),j:s("j<@>"),V:s("j<a>"),E:s("az"),P:s("x"),K:s("h"),b:s("T"),W:s("jr"),h:s("+()"),l:s("a8"),N:s("w"),Y:s("C"),k:s("l"),r:s("a1"),D:s("aD"),_:s("y<@>"),y:s("D"),x:s("D(h)"),i:s("m"),z:s("@"),G:s("@()"),v:s("@(h)"),Q:s("@(h,a8)"),S:s("a"),bc:s("af<x>?"),aQ:s("r?"),aL:s("j<@>?"),X:s("h?"),aD:s("w?"),F:s("a3<@,@>?"),R:s("ce?"),u:s("D?"),I:s("m?"),a3:s("a?"),ae:s("ar?"),o:s("ar"),H:s("~"),M:s("~()"),cQ:s("~(w,@)"),aS:s("~(a,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.K=J.bH.prototype
B.a=J.n.prototype
B.b=J.aS.prototype
B.d=J.au.prototype
B.c=J.av.prototype
B.L=J.a5.prototype
B.M=J.aW.prototype
B.C=J.c_.prototype
B.u=J.aD.prototype
B.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.E=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.J=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.I=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.H=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.G=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.x=function(hooks) { return hooks; }

B.k=new A.cm()
B.o=new A.db()
B.e=new A.dl()
B.l=new A.cg()
B.N=new A.cn(null)
B.O=new A.co(null)
B.y=new A.L("Accent",0,"accent")
B.z=new A.L("Ghost",2,"ghost")
B.A=new A.L("Mute",3,"mute")
B.m=new A.L("Normal",1,"normal")
B.p=s([2,4,8,16],t.t)
B.V=new A.G(20,"Grave")
B.W=new A.G(40,"Largo")
B.X=new A.G(60,"Larghetto")
B.Y=new A.G(66,"Adagio")
B.Z=new A.G(76,"Andante")
B.Q=new A.G(108,"Moderato")
B.R=new A.G(120,"Allegro")
B.S=new A.G(156,"Vivace")
B.T=new A.G(176,"Presto")
B.U=new A.G(200,"Prestissimo")
B.f=s([B.V,B.W,B.X,B.Y,B.Z,B.Q,B.R,B.S,B.T,B.U],A.ch("n<+(a,w)>"))
B.h=new A.C(1,"None (beats only)",0,"none")
B.t=new A.C(2,"Eighth notes (2)",1,"eighths")
B.a3=new A.C(3,"Triplets (3)",2,"triplets")
B.r=new A.C(4,"Sixteenth notes (4)",3,"sixteenths")
B.a2=new A.C(5,"Quintuplets (5)",4,"quintuplets")
B.a1=new A.C(6,"Sextuplets (6)",5,"sextuplets")
B.a0=new A.C(7,"Septuplets (7)",6,"septuplets")
B.a_=new A.C(8,"32nd notes (8)",7,"thirtySeconds")
B.B=s([B.h,B.t,B.a3,B.r,B.a2,B.a1,B.a0,B.a_],A.ch("n<C>"))
B.P=s(["wood","beep","stick"],t.s)
B.q=s([B.y,B.m,B.z,B.A],t.a)
B.a4=A.W("jm")
B.a5=A.W("jn")
B.a6=A.W("h9")
B.a7=A.W("ha")
B.a8=A.W("hb")
B.a9=A.W("hc")
B.aa=A.W("hd")
B.ab=A.W("h")
B.ac=A.W("hA")
B.ad=A.W("hB")
B.ae=A.W("hC")
B.af=A.W("hD")
B.i=new A.aj(0,"accent")
B.n=new A.aj(1,"normal")
B.D=new A.aj(2,"ghost")
B.v=new A.aj(3,"sub")
B.j=new A.aj(4,"silent")})();(function staticFields(){$.dE=null
$.O=A.e([],t.f)
$.f2=null
$.eO=null
$.eN=null
$.fF=null
$.fy=null
$.fJ=null
$.dW=null
$.e1=null
$.eB=null
$.dK=A.e([],A.ch("n<j<h>?>"))
$.aI=null
$.br=null
$.bs=null
$.ev=!1
$.v=B.e})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"jp","fN",()=>A.dX("_$dart_dartClosure"))
s($,"jo","eb",()=>A.dX("_$dart_dartClosure_dartJSInterop"))
s($,"jF","fY",()=>A.e([new J.bI()],A.ch("n<b9>")))
s($,"jt","fO",()=>A.a2(A.di({
toString:function(){return"$receiver$"}})))
s($,"ju","fP",()=>A.a2(A.di({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"jv","fQ",()=>A.a2(A.di(null)))
s($,"jw","fR",()=>A.a2(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jz","fU",()=>A.a2(A.di(void 0)))
s($,"jA","fV",()=>A.a2(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jy","fT",()=>A.a2(A.f9(null)))
s($,"jx","fS",()=>A.a2(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"jC","fX",()=>A.a2(A.f9(void 0)))
s($,"jB","fW",()=>A.a2(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"jD","eJ",()=>A.hE())
s($,"jE","ec",()=>A.fG(B.ab))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ay,SharedArrayBuffer:A.ay,ArrayBufferView:A.b4,DataView:A.bS,Float32Array:A.az,Float64Array:A.bT,Int16Array:A.bU,Int32Array:A.bV,Int8Array:A.bW,Uint16Array:A.bX,Uint32Array:A.bY,Uint8ClampedArray:A.b5,CanvasPixelArray:A.b5,Uint8Array:A.bZ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aA.$nativeSuperclassTag="ArrayBufferView"
A.be.$nativeSuperclassTag="ArrayBufferView"
A.bf.$nativeSuperclassTag="ArrayBufferView"
A.b2.$nativeSuperclassTag="ArrayBufferView"
A.bg.$nativeSuperclassTag="ArrayBufferView"
A.bh.$nativeSuperclassTag="ArrayBufferView"
A.b3.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.jb
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()