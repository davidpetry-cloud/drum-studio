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
if(a[b]!==s){A.jg(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ew(b)
return new s(c,this)}:function(){if(s===null)s=A.ew(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ew(a).prototype
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
eC(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ex(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.ey==null){A.j4()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.f8("Return interceptor for "+A.n(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.dC
if(o==null)o=$.dC=A.dW(n)
p=q[o]}if(p!=null)return p
p=A.j8(a)
if(p!=null)return p
if(typeof a=="function")return B.K
s=Object.getPrototypeOf(a)
if(s==null)return B.B
if(s===Object.prototype)return B.B
if(typeof q=="function"){o=$.dC
if(o==null)o=$.dC=A.dW(n)
Object.defineProperty(q,o,{value:B.r,enumerable:false,writable:true,configurable:true})
return B.r}return B.r},
hd(a,b){if(a<0||a>4294967295)throw A.c(A.b7(a,0,4294967295,"length",null))
return J.hf(new Array(a),b)},
he(a,b){if(a<0)throw A.c(A.aN("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.h("o<0>"))},
hf(a,b){var s=A.e(a,b.h("o<0>"))
s.$flags=1
return s},
eS(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hg(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.eS(r))break;++b}return b},
hh(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.j(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.eS(q))break}return b},
ao(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aR.prototype
return J.bK.prototype}if(typeof a=="string")return J.au.prototype
if(a==null)return J.aS.prototype
if(typeof a=="boolean")return J.bJ.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
if(typeof a=="symbol")return J.aW.prototype
if(typeof a=="bigint")return J.aU.prototype
return a}if(a instanceof A.h)return a
return J.ex(a)},
fB(a){if(typeof a=="string")return J.au.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
if(typeof a=="symbol")return J.aW.prototype
if(typeof a=="bigint")return J.aU.prototype
return a}if(a instanceof A.h)return a
return J.ex(a)},
fC(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
if(typeof a=="symbol")return J.aW.prototype
if(typeof a=="bigint")return J.aU.prototype
return a}if(a instanceof A.h)return a
return J.ex(a)},
j_(a){if(typeof a=="number")return J.at.prototype
if(a==null)return a
if(!(a instanceof A.h))return J.aC.prototype
return a},
ac(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ao(a).O(a,b)},
eH(a,b,c){return J.j_(a).n(a,b,c)},
W(a){return J.ao(a).gl(a)},
fX(a){return J.fC(a).gbI(a)},
eI(a){return J.fC(a).gG(a)},
eJ(a){return J.fB(a).gk(a)},
fY(a){return J.ao(a).gm(a)},
bv(a){return J.ao(a).i(a)},
bH:function bH(){},
bJ:function bJ(){},
aS:function aS(){},
aV:function aV(){},
a5:function a5(){},
c_:function c_(){},
aC:function aC(){},
a4:function a4(){},
aU:function aU(){},
aW:function aW(){},
o:function o(a){this.$ti=a},
bI:function bI(){},
ck:function ck(a){this.$ti=a},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
at:function at(){},
aR:function aR(){},
bK:function bK(){},
au:function au(){}},A={ee:function ee(){},
eV(a){return new A.bO("Field '"+a+"' has been assigned during initialization.")},
a8(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
el(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ev(a,b,c){return a},
eA(a){var s,r
for(s=$.M.length,r=0;r<s;++r)if(a===$.M[r])return!0
return!1},
eQ(){return new A.ba("No element")},
bO:function bO(a){this.a=a},
d9:function d9(){},
aO:function aO(){},
ag:function ag(){},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
G:function G(){},
fK(a){var s=A.fJ(a)
if(s!=null)return s
return"minified:"+a},
jG(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bv(a)
return s},
c0(a){var s,r=$.f0
if(r==null)r=$.f0=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
eh(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.j(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
hq(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.c.a1(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
c1(a){var s,r,q,p
if(a instanceof A.h)return A.L(A.bt(a),null)
s=J.ao(a)
if(s===B.J||s===B.L||t.D.b(a)){r=B.v(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.L(A.bt(a),null)},
f1(a){var s,r,q
if(a==null||typeof a=="number"||A.es(a))return J.bv(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a3)return a.i(0)
if(a instanceof A.al)return a.bt(!0)
s=$.fW()
for(r=0;r<1;++r){q=s[r].cO(a)
if(q!=null)return q}return"Instance of '"+A.c1(a)+"'"},
E(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.bo(s,10)|55296)>>>0,s&1023|56320)}throw A.c(A.b7(a,0,1114111,null,null))},
hp(a){var s=a.$thrownJsError
if(s==null)return null
return A.aL(s)},
f2(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.B(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
j(a,b){if(a==null)J.eJ(a)
throw A.c(A.fA(a,b))},
fA(a,b){var s,r="index"
if(!A.fq(b))return new A.R(!0,b,r,null)
s=J.eJ(a)
if(b<0||b>=s)return A.eP(b,s,a,r)
return A.ei(b,r)},
iQ(a){return new A.R(!0,a,null,null)},
c(a){return A.B(a,new Error())},
B(a,b){var s
if(a==null)a=new A.a0()
b.dartException=a
s=A.jh
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
jh(){return J.bv(this.dartException)},
eE(a,b){throw A.B(a,b==null?new Error():b)},
bu(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.eE(A.id(a,b,c),s)},
id(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.bb("'"+s+"': Cannot "+o+" "+l+k+n)},
U(a){throw A.c(A.a_(a))},
a1(a){var s,r,q,p,o,n
a=A.jc(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.df(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
dg(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
f7(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ef(a,b){var s=b==null,r=s?null:b.method
return new A.bM(a,r,s?null:b.receiver)},
Z(a){var s
if(a==null)return new A.d7(a)
if(a instanceof A.aP){s=a.a
return A.ab(a,s==null?A.bo(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.ab(a,a.dartException)
return A.iO(a)},
ab(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
iO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.bo(r,16)&8191)===10)switch(q){case 438:return A.ab(a,A.ef(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.ab(a,new A.b5())}}if(a instanceof TypeError){p=$.fM()
o=$.fN()
n=$.fO()
m=$.fP()
l=$.fS()
k=$.fT()
j=$.fR()
$.fQ()
i=$.fV()
h=$.fU()
g=p.I(s)
if(g!=null)return A.ab(a,A.ef(A.p(s),g))
else{g=o.I(s)
if(g!=null){g.method="call"
return A.ab(a,A.ef(A.p(s),g))}else if(n.I(s)!=null||m.I(s)!=null||l.I(s)!=null||k.I(s)!=null||j.I(s)!=null||m.I(s)!=null||i.I(s)!=null||h.I(s)!=null){A.p(s)
return A.ab(a,new A.b5())}}return A.ab(a,new A.c6(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.b9()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ab(a,new A.R(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.b9()
return a},
aL(a){var s
if(a instanceof A.aP)return a.b
if(a==null)return new A.bi(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bi(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fE(a){if(a==null)return J.W(a)
if(typeof a=="object")return A.c0(a)
return J.W(a)},
iZ(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.J(0,a[s],a[r])}return b},
ip(a,b,c,d,e,f){t.Z.a(a)
switch(A.t(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.dr("Unsupported number of arguments for wrapped closure"))},
bs(a,b){var s=a.$identity
if(!!s)return s
s=A.iU(a,b)
a.$identity=s
return s},
iU(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ip)},
h4(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.c3().constructor.prototype):Object.create(new A.as(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.eO(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.h0(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.eO(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
h0(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fZ)}throw A.c("Error in functionType of tearoff")},
h1(a,b,c,d){var s=A.eN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
eO(a,b,c,d){if(c)return A.h3(a,b,d)
return A.h1(b.length,d,a,b)},
h2(a,b,c,d){var s=A.eN,r=A.h_
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
h3(a,b,c){var s,r
if($.eL==null)$.eL=A.eK("interceptor")
if($.eM==null)$.eM=A.eK("receiver")
s=b.length
r=A.h2(s,c,a,b)
return r},
ew(a){return A.h4(a)},
fZ(a,b){return A.bn(v.typeUniverse,A.bt(a.a),b)},
eN(a){return a.a},
h_(a){return a.b},
eK(a){var s,r,q,p=new A.as("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.aN("Field name "+a+" not found.",null))},
dW(a){return v.getIsolateTag(a)},
jF(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
j8(a){var s,r,q,p,o,n=A.p($.fD.$1(a)),m=$.dU[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e0[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.dO($.fw.$2(a,n))
if(q!=null){m=$.dU[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e0[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.e1(s)
$.dU[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.e0[n]=s
return s}if(p==="-"){o=A.e1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fF(a,s)
if(p==="*")throw A.c(A.f8(n))
if(v.leafTags[n]===true){o=A.e1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fF(a,s)},
fF(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eC(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
e1(a){return J.eC(a,!1,null,!!a.$iI)},
ja(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.e1(s)
else return J.eC(s,c,null,null)},
j4(){if(!0===$.ey)return
$.ey=!0
A.j5()},
j5(){var s,r,q,p,o,n,m,l
$.dU=Object.create(null)
$.e0=Object.create(null)
A.j3()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fH.$1(o)
if(n!=null){m=A.ja(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
j3(){var s,r,q,p,o,n,m=B.D()
m=A.aK(B.E,A.aK(B.F,A.aK(B.w,A.aK(B.w,A.aK(B.G,A.aK(B.H,A.aK(B.I(B.v),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fD=new A.dY(p)
$.fw=new A.dZ(o)
$.fH=new A.e_(n)},
aK(a,b){return a(b)||b},
iW(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
eT(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(A.ec("Illegal RegExp pattern ("+String(o)+")",a))},
iX(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jc(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
fI(a,b,c){var s,r=b.gcb()
r.lastIndex=0
s=a.replace(r,A.iX(c))
return s},
aG:function aG(a,b){this.a=a
this.b=b},
b8:function b8(){},
df:function df(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b5:function b5(){},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a){this.a=a},
d7:function d7(a){this.a=a},
aP:function aP(a,b){this.a=a
this.b=b},
bi:function bi(a){this.a=a
this.b=null},
a3:function a3(){},
bA:function bA(){},
bB:function bB(){},
c4:function c4(){},
c3:function c3(){},
as:function as(a,b){this.a=a
this.b=b},
c2:function c2(a){this.a=a},
aX:function aX(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cq:function cq(a,b){this.a=a
this.b=b
this.c=null},
af:function af(a,b){this.a=a
this.$ti=b},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dY:function dY(a){this.a=a},
dZ:function dZ(a){this.a=a},
e_:function e_(a){this.a=a},
al:function al(){},
aF:function aF(){},
bL:function bL(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
dG:function dG(a){this.b=a},
ax:function ax(){},
b3:function b3(){},
bS:function bS(){},
az:function az(){},
b1:function b1(){},
b2:function b2(){},
ay:function ay(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
b4:function b4(){},
bZ:function bZ(){},
bd:function bd(){},
be:function be(){},
bf:function bf(){},
bg:function bg(){},
ek(a,b){var s=b.c
return s==null?b.c=A.bl(a,"ae",[b.x]):s},
f3(a){var s=a.w
if(s===6||s===7)return A.f3(a.x)
return s===11||s===12},
hu(a){return a.as},
dV(a){return A.dM(v.typeUniverse,a,!1)},
am(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.am(a1,s,a3,a4)
if(r===s)return a2
return A.ff(a1,r,!0)
case 7:s=a2.x
r=A.am(a1,s,a3,a4)
if(r===s)return a2
return A.fe(a1,r,!0)
case 8:q=a2.y
p=A.aJ(a1,q,a3,a4)
if(p===q)return a2
return A.bl(a1,a2.x,p)
case 9:o=a2.x
n=A.am(a1,o,a3,a4)
m=a2.y
l=A.aJ(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.ep(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aJ(a1,j,a3,a4)
if(i===j)return a2
return A.fg(a1,k,i)
case 11:h=a2.x
g=A.am(a1,h,a3,a4)
f=a2.y
e=A.iL(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.fd(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aJ(a1,d,a3,a4)
o=a2.x
n=A.am(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.eq(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.by("Attempted to substitute unexpected RTI kind "+a0))}},
aJ(a,b,c,d){var s,r,q,p,o=b.length,n=A.dN(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.am(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
iM(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dN(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.am(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
iL(a,b,c,d){var s,r=b.a,q=A.aJ(a,r,c,d),p=b.b,o=A.aJ(a,p,c,d),n=b.c,m=A.iM(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cb()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
fy(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.j1(s)
return a.$S()}return null},
j6(a,b){var s
if(A.f3(b))if(a instanceof A.a3){s=A.fy(a)
if(s!=null)return s}return A.bt(a)},
bt(a){if(a instanceof A.h)return A.aa(a)
if(Array.isArray(a))return A.K(a)
return A.er(J.ao(a))},
K(a){var s=a[v.arrayRti],r=t.q
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
aa(a){var s=a.$ti
return s!=null?s:A.er(a)},
er(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.il(a,s)},
il(a,b){var s=a instanceof A.a3?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.hZ(v.typeUniverse,s.name)
b.$ccache=r
return r},
j1(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dM(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
j0(a){return A.an(A.aa(a))},
eu(a){var s
if(a instanceof A.al)return A.iY(a.$r,a.b7())
s=a instanceof A.a3?A.fy(a):null
if(s!=null)return s
if(t.k.b(a))return J.fY(a).a
if(Array.isArray(a))return A.K(a)
return A.bt(a)},
an(a){var s=a.r
return s==null?a.r=new A.dL(a):s},
iY(a,b){var s,r,q=b,p=q.length
if(p===0)return t.h
if(0>=p)return A.j(q,0)
s=A.bn(v.typeUniverse,A.eu(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.j(q,r)
s=A.fi(v.typeUniverse,s,A.eu(q[r]))}return A.bn(v.typeUniverse,s,a)},
V(a){return A.an(A.dM(v.typeUniverse,a,!1))},
ik(a){var s=this
s.b=A.iJ(s)
return s.b(a)},
iJ(a){var s,r,q,p,o
if(a===t.K)return A.iv
if(A.ap(a))return A.iz
s=a.w
if(s===6)return A.ii
if(s===1)return A.fs
if(s===7)return A.iq
r=A.iI(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ap)){a.f="$i"+q
if(q==="i")return A.it
if(a===t.m)return A.is
return A.iy}}else if(s===10){p=A.iW(a.x,a.y)
o=p==null?A.fs:p
return o==null?A.bo(o):o}return A.ig},
iI(a){if(a.w===8){if(a===t.S)return A.fq
if(a===t.i||a===t.o)return A.iu
if(a===t.N)return A.ix
if(a===t.y)return A.es}return null},
ij(a){var s=this,r=A.ie
if(A.ap(s))r=A.i4
else if(s===t.K)r=A.bo
else if(A.aM(s)){r=A.ih
if(s===t.a3)r=A.i2
else if(s===t.aD)r=A.dO
else if(s===t.u)r=A.i0
else if(s===t.ae)r=A.fl
else if(s===t.I)r=A.i1
else if(s===t.aQ)r=A.X}else if(s===t.S)r=A.t
else if(s===t.N)r=A.p
else if(s===t.y)r=A.z
else if(s===t.o)r=A.i3
else if(s===t.i)r=A.H
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
ig(a){var s=this
if(a==null)return A.aM(s)
return A.j7(v.typeUniverse,A.j6(a,s),s)},
ii(a){if(a==null)return!0
return this.x.b(a)},
iy(a){var s,r=this
if(a==null)return A.aM(r)
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.ao(a)[s]},
it(a){var s,r=this
if(a==null)return A.aM(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.ao(a)[s]},
is(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.h)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fr(a){if(typeof a=="object"){if(a instanceof A.h)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
ie(a){var s=this
if(a==null){if(A.aM(s))return a}else if(s.b(a))return a
throw A.B(A.fn(a,s),new Error())},
ih(a){var s=this
if(a==null||s.b(a))return a
throw A.B(A.fn(a,s),new Error())},
fn(a,b){return new A.bj("TypeError: "+A.f9(a,A.L(b,null)))},
f9(a,b){return A.bF(a)+": type '"+A.L(A.eu(a),null)+"' is not a subtype of type '"+b+"'"},
P(a,b){return new A.bj("TypeError: "+A.f9(a,b))},
iq(a){var s=this
return s.x.b(a)||A.ek(v.typeUniverse,s).b(a)},
iv(a){return a!=null},
bo(a){if(a!=null)return a
throw A.B(A.P(a,"Object"),new Error())},
iz(a){return!0},
i4(a){return a},
fs(a){return!1},
es(a){return!0===a||!1===a},
z(a){if(!0===a)return!0
if(!1===a)return!1
throw A.B(A.P(a,"bool"),new Error())},
i0(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.B(A.P(a,"bool?"),new Error())},
H(a){if(typeof a=="number")return a
throw A.B(A.P(a,"double"),new Error())},
i1(a){if(typeof a=="number")return a
if(a==null)return a
throw A.B(A.P(a,"double?"),new Error())},
fq(a){return typeof a=="number"&&Math.floor(a)===a},
t(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.B(A.P(a,"int"),new Error())},
i2(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.B(A.P(a,"int?"),new Error())},
iu(a){return typeof a=="number"},
i3(a){if(typeof a=="number")return a
throw A.B(A.P(a,"num"),new Error())},
fl(a){if(typeof a=="number")return a
if(a==null)return a
throw A.B(A.P(a,"num?"),new Error())},
ix(a){return typeof a=="string"},
p(a){if(typeof a=="string")return a
throw A.B(A.P(a,"String"),new Error())},
dO(a){if(typeof a=="string")return a
if(a==null)return a
throw A.B(A.P(a,"String?"),new Error())},
b(a){if(A.fr(a))return a
throw A.B(A.P(a,"JSObject"),new Error())},
X(a){if(a==null)return a
if(A.fr(a))return a
throw A.B(A.P(a,"JSObject?"),new Error())},
fu(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.L(a[q],b)
return s},
iE(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fu(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.L(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fo(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.e([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.j(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.j(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.L(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.L(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.L(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.L(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.L(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
L(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.L(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.L(a.x,b)+">"
if(l===8){p=A.iN(a.x)
o=a.y
return o.length>0?p+("<"+A.fu(o,b)+">"):p}if(l===10)return A.iE(a,b)
if(l===11)return A.fo(a,b,null)
if(l===12)return A.fo(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.j(b,n)
return b[n]}return"?"},
iN(a){var s=A.fJ(a)
if(s!=null)return s
return"minified:"+a},
i_(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
hZ(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dM(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bm(a,5,"#")
q=A.dN(s)
for(p=0;p<s;++p)q[p]=r
o=A.bl(a,b,q)
n[b]=o
return o}else return m},
hY(a,b){return A.fj(a.tR,b)},
hX(a,b){return A.fj(a.eT,b)},
dM(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fh(a,null,b,!1)
r.set(b,s)
return s},
bn(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fh(a,b,c,!0)
q.set(c,r)
return r},
fi(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.ep(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
fh(a,b,c,d){return A.hP(A.hJ(a,b,c,d))},
a9(a,b){b.a=A.ij
b.b=A.ik
return b},
bm(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.T(null,null)
s.w=b
s.as=c
r=A.a9(a,s)
a.eC.set(c,r)
return r},
ff(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.hV(a,b,r,c)
a.eC.set(r,s)
return s},
hV(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ap(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aM(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.T(null,null)
q.w=6
q.x=b
q.as=c
return A.a9(a,q)},
fe(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hT(a,b,r,c)
a.eC.set(r,s)
return s},
hT(a,b,c,d){var s,r
if(d){s=b.w
if(A.ap(b)||b===t.K)return b
else if(s===1)return A.bl(a,"ae",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.T(null,null)
r.w=7
r.x=b
r.as=c
return A.a9(a,r)},
hW(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.T(null,null)
s.w=13
s.x=b
s.as=q
r=A.a9(a,s)
a.eC.set(q,r)
return r},
bk(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
hS(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bl(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bk(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.T(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.a9(a,r)
a.eC.set(p,q)
return q},
ep(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bk(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.T(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.a9(a,o)
a.eC.set(q,n)
return n},
fg(a,b,c){var s,r,q="+"+(b+"("+A.bk(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.T(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.a9(a,s)
a.eC.set(q,r)
return r},
fd(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bk(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bk(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.hS(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.T(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.a9(a,p)
a.eC.set(r,o)
return o},
eq(a,b,c,d){var s,r=b.as+("<"+A.bk(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hU(a,b,c,r,d)
a.eC.set(r,s)
return s},
hU(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dN(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.am(a,b,r,0)
m=A.aJ(a,c,r,0)
return A.eq(a,n,m,c!==m)}}l=new A.T(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.a9(a,l)},
hJ(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hP(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hL(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.fb(a,r,l,k,!1)
else if(q===46)r=A.fb(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ak(a.u,a.e,k.pop()))
break
case 94:k.push(A.hW(a.u,k.pop()))
break
case 35:k.push(A.bm(a.u,5,"#"))
break
case 64:k.push(A.bm(a.u,2,"@"))
break
case 126:k.push(A.bm(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hN(a,k)
break
case 38:A.hM(a,k)
break
case 63:p=a.u
k.push(A.ff(p,A.ak(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fe(p,A.ak(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hK(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fc(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hQ(a.u,a.e,o)
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
return A.ak(a.u,a.e,m)},
hL(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
fb(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.i_(s,o.x)[p]
if(n==null)A.eE('No "'+p+'" in "'+A.hu(o)+'"')
d.push(A.bn(s,o,n))}else d.push(p)
return m},
hN(a,b){var s,r=a.u,q=A.fa(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bl(r,p,q))
else{s=A.ak(r,a.e,p)
switch(s.w){case 11:b.push(A.eq(r,s,q,a.n))
break
default:b.push(A.ep(r,s,q))
break}}},
hK(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.fa(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ak(p,a.e,o)
q=new A.cb()
q.a=s
q.b=n
q.c=m
b.push(A.fd(p,r,q))
return
case-4:b.push(A.fg(p,b.pop(),s))
return
default:throw A.c(A.by("Unexpected state under `()`: "+A.n(o)))}},
hM(a,b){var s=b.pop()
if(0===s){b.push(A.bm(a.u,1,"0&"))
return}if(1===s){b.push(A.bm(a.u,4,"1&"))
return}throw A.c(A.by("Unexpected extended operation "+A.n(s)))},
fa(a,b){var s=b.splice(a.p)
A.fc(a.u,a.e,s)
a.p=b.pop()
return s},
ak(a,b,c){if(typeof c=="string")return A.bl(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hO(a,b,c)}else return c},
fc(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ak(a,b,c[s])},
hQ(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ak(a,b,c[s])},
hO(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.by("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.by("Bad index "+c+" for "+b.i(0)))},
j7(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.A(a,b,null,c,null)
r.set(c,s)}return s},
A(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.ap(d))return!0
s=b.w
if(s===4)return!0
if(A.ap(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.A(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.A(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.A(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.A(a,b.x,c,d,e))return!1
return A.A(a,A.ek(a,b),c,d,e)}if(s===6)return A.A(a,p,c,d,e)&&A.A(a,b.x,c,d,e)
if(q===7){if(A.A(a,b,c,d.x,e))return!0
return A.A(a,b,c,A.ek(a,d),e)}if(q===6)return A.A(a,b,c,p,e)||A.A(a,b,c,d.x,e)
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
if(!A.A(a,j,c,i,e)||!A.A(a,i,e,j,c))return!1}return A.fp(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.fp(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.ir(a,b,c,d,e)}if(o&&q===10)return A.iw(a,b,c,d,e)
return!1},
fp(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
ir(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bn(a,b,r[o])
return A.fk(a,p,null,c,d.y,e)}return A.fk(a,b.y,null,c,d.y,e)},
fk(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.A(a,b[s],d,e[s],f))return!1
return!0},
iw(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.A(a,r[s],c,q[s],e))return!1
return!0},
aM(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ap(a))if(s!==6)r=s===7&&A.aM(a.x)
return r},
ap(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fj(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dN(a){return a>0?new Array(a):v.typeUniverse.sEA},
T:function T(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cb:function cb(){this.c=this.b=this.a=null},
dL:function dL(a){this.a=a},
ca:function ca(){},
bj:function bj(a){this.a=a},
hC(){var s,r,q
if(self.scheduleImmediate!=null)return A.iR()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bs(new A.dm(s),1)).observe(r,{childList:true})
return new A.dl(s,r,q)}else if(self.setImmediate!=null)return A.iS()
return A.iT()},
hD(a){self.scheduleImmediate(A.bs(new A.dn(t.M.a(a)),0))},
hE(a){self.setImmediate(A.bs(new A.dp(t.M.a(a)),0))},
hF(a){t.M.a(a)
A.hR(0,a)},
hR(a,b){var s=new A.dJ()
s.bU(a,b)
return s},
iB(a){return new A.c7(new A.y($.v,a.h("y<0>")),a.h("c7<0>"))},
i8(a,b){a.$2(0,null)
b.b=!0
return b.a},
i5(a,b){A.i9(a,b)},
i7(a,b){b.aO(a)},
i6(a,b){b.aP(A.Z(a),A.aL(a))},
i9(a,b){var s,r,q=new A.dP(b),p=new A.dQ(b)
if(a instanceof A.y)a.br(q,p,t.z)
else{s=t.z
if(a instanceof A.y)a.bM(q,p,s)
else{r=new A.y($.v,t._)
r.a=8
r.c=a
r.br(q,p,s)}}},
iP(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.v
return r.bf(r,t.A.a(new A.dT(s)),t.H,t.S,t.z)},
ch(a){var s
if(t.C.b(a)){s=a.gaa()
if(s!=null)return s}return B.k},
im(a,b){var s=$.v
if(s===B.e)return null
s.c3(s,a,b)
return null},
io(a,b){if($.v!==B.e)A.im(a,b)
if(b==null)if(t.C.b(a)){b=a.gaa()
if(b==null){A.f2(a,B.k)
b=B.k}}else b=B.k
else if(t.C.b(a))A.f2(a,b)
return new A.O(a,b)},
en(a,b,c){var s,r,q,p,o,n={},m=n.a=a
for(s=t._;r=m.a,(r&4)!==0;m=a){a=s.a(m.c)
n.a=a}if(m===b){s=A.hw()
b.au(new A.O(new A.R(!0,m,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=m.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=m
m.bd(p)
return}if(!c)if(b.c==null)m=(s&16)===0||q!==0
else m=!1
else m=!0
if(m){p=b.af()
b.ac(n.a)
A.aD(b,p)
return}b.a^=2
o=b.b
o.a3(o,new A.dv(n,b))},
aD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=e.a=a
for(s=t.n,r=t.F;;){q={}
p=d.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(d.c)
d=d.b
d.b8(d,m.a,m.b)}return}q.a=b
l=b.a
for(d=b;l!=null;d=l,l=k){d.a=null
A.aD(e.a,d)
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
if((d&15)===8)new A.dz(q,e,n).$0()
else if(o){if((d&1)!==0)new A.dy(q,j).$0()}else if((d&2)!==0)new A.dx(e,q).$0()
if(h!=null)$.v=h
d=q.c
if(d instanceof A.y){p=q.a.$ti
p=p.h("ae<2>").b(d)||!p.y[1].b(d)}else p=!1
if(p){g=q.a.b
if((d.a&24)!==0){f=r.a(g.c)
g.c=null
b=g.ag(f)
g.a=d.a&30|g.a&1
g.c=d.c
e.a=d
continue}else A.en(d,g,!0)
return}}g=q.a.b
f=r.a(g.c)
g.c=null
b=g.ag(f)
d=q.b
p=q.c
if(!d){g.$ti.c.a(p)
g.a=8
g.c=p}else{s.a(p)
g.a=g.a&1|16
g.c=p}e.a=g
d=g}},
ft(a,b){var s=t.Q
if(s.b(a))return b.bf(b,s.a(a),t.z,t.K,t.l)
s=t.v
if(s.b(a))return b.bg(b,s.a(a),t.z,t.K)
throw A.c(A.bw(a,"onError",u.c))},
iC(){var s,r
for(s=$.aI;s!=null;s=$.aI){$.br=null
r=s.b
$.aI=r
if(r==null)$.bq=null
s.a.$0()}},
iK(){$.et=!0
try{A.iC()}finally{$.br=null
$.et=!1
if($.aI!=null)$.eG().$1(A.fx())}},
fv(a){var s=new A.c8(a),r=$.bq
if(r==null){$.aI=$.bq=s
if(!$.et)$.eG().$1(A.fx())}else $.bq=r.b=s},
iH(a){var s,r,q,p=$.aI
if(p==null){A.fv(a)
$.br=$.bq
return}s=new A.c8(a)
r=$.br
if(r==null){s.b=p
$.aI=$.br=s}else{q=r.b
s.b=q
$.br=r.b=s
if(q==null)$.bq=s}},
jr(a,b){A.ev(a,"stream",t.K)
return new A.cf(b.h("cf<0>"))},
iF(a,b){A.iH(new A.dS(a,b))},
iG(a,b){if(B.e!==a)b=a.cu(b,t.H)
A.fv(b)},
dm:function dm(a){this.a=a},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a){this.a=a},
dp:function dp(a){this.a=a},
dJ:function dJ(){},
dK:function dK(a,b){this.a=a
this.b=b},
c7:function c7(a,b){this.a=a
this.b=!1
this.$ti=b},
dP:function dP(a){this.a=a},
dQ:function dQ(a){this.a=a},
dT:function dT(a){this.a=a},
O:function O(a,b){this.a=a
this.b=b},
c9:function c9(){},
bc:function bc(a,b){this.a=a
this.$ti=b},
a2:function a2(a,b,c,d,e){var _=this
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
ds:function ds(a,b){this.a=a
this.b=b},
dw:function dw(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a,b){this.a=a
this.b=b},
dB:function dB(a){this.a=a},
dy:function dy(a,b){this.a=a
this.b=b},
dx:function dx(a,b){this.a=a
this.b=b},
c8:function c8(a){this.a=a
this.b=null},
cf:function cf(a){this.$ti=a},
dj:function dj(){},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a,b){this.a=a
this.b=b},
eX(a,b,c){return b.h("@<0>").t(c).h("eW<1,2>").a(A.iZ(a,new A.aX(b.h("@<0>").t(c).h("aX<1,2>"))))},
hj(a){return new A.aj(a.h("aj<0>"))},
hk(a){return new A.aj(a.h("aj<0>"))},
eo(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hI(a,b,c){var s=new A.aE(a,b,c.h("aE<0>"))
s.c=a.e
return s},
eY(a,b){var s,r,q=A.hj(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.U)(a),++r)q.j(0,b.a(a[r]))
return q},
f_(a){var s,r
if(A.eA(a))return"{...}"
s=new A.aB("")
try{r={}
B.a.j($.M,a)
s.a+="{"
r.a=!0
a.a7(0,new A.cr(r,s))
s.a+="}"}finally{if(0>=$.M.length)return A.j($.M,-1)
$.M.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aj:function aj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ce:function ce(a){this.a=a
this.b=null},
aE:function aE(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
r:function r(){},
F:function F(){},
cr:function cr(a,b){this.a=a
this.b=b},
aA:function aA(){},
bh:function bh(){},
iD(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.Z(r)
q=A.ec(String(s),null)
throw A.c(q)}q=A.dR(p)
return q},
dR(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.cc(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.dR(a[s])
return a},
eU(a,b,c){return new A.aY(a,b)},
ic(a){return a.bN()},
hG(a,b){return new A.dD(a,[],A.iV())},
hH(a,b,c){var s,r=new A.aB(""),q=A.hG(r,b)
q.ar(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
cc:function cc(a,b){this.a=a
this.b=b
this.c=null},
cd:function cd(a){this.a=a},
bC:function bC(){},
bE:function bE(){},
aY:function aY(a,b){this.a=a
this.b=b},
bN:function bN(a,b){this.a=a
this.b=b},
cl:function cl(){},
cn:function cn(a){this.b=a},
cm:function cm(a){this.a=a},
dE:function dE(){},
dF:function dF(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c){this.c=a
this.a=b
this.b=c},
ez(a){var s=A.eh(a,null)
if(s!=null)return s
throw A.c(A.ec(a,null))},
h5(a,b){a=A.B(a,new Error())
if(a==null)a=A.bo(a)
a.stack=b.i(0)
throw a},
aw(a,b,c,d){var s,r=c?J.he(a,d):J.hd(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hl(a,b,c){var s,r,q=A.e([],c.h("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.U)(a),++r)B.a.j(q,c.a(a[r]))
q.$flags=1
return q},
aZ(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.h("o<0>"))
s=A.e([],b.h("o<0>"))
for(r=J.eI(a);r.q();)B.a.j(s,r.gB())
return s},
eZ(a,b){var s=A.hl(a,!1,b)
s.$flags=3
return s},
ej(a){return new A.bL(a,A.eT(a,!1,!0,!1,!1,""))},
f5(a,b,c){var s=J.eI(b)
if(!s.q())return a
if(c.length===0){do a+=A.n(s.gB())
while(s.q())}else{a+=A.n(s.gB())
while(s.q())a=a+c+A.n(s.gB())}return a},
hw(){return A.aL(new Error())},
bF(a){if(typeof a=="number"||A.es(a)||a==null)return J.bv(a)
if(typeof a=="string")return JSON.stringify(a)
return A.f1(a)},
h6(a,b){A.ev(a,"error",t.K)
A.ev(b,"stackTrace",t.l)
A.h5(a,b)},
by(a){return new A.bx(a)},
aN(a,b){return new A.R(!1,null,b,a)},
bw(a,b,c){return new A.R(!0,a,b,c)},
ei(a,b){return new A.b6(null,null,!0,a,b,"Value not in range")},
b7(a,b,c,d,e){return new A.b6(b,c,!0,a,d,"Invalid value")},
hs(a,b,c){if(0>a||a>c)throw A.c(A.b7(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.b7(b,a,c,"end",null))
return b}return c},
hr(a,b){if(a<0)throw A.c(A.b7(a,0,null,b,null))
return a},
eP(a,b,c,d){return new A.bG(b,!0,a,d,"Index out of range")},
em(a){return new A.bb(a)},
f8(a){return new A.c5(a)},
f4(a){return new A.ba(a)},
a_(a){return new A.bD(a)},
ec(a,b){return new A.aQ(a,b)},
hc(a,b,c){var s,r
if(A.eA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.j($.M,a)
try{A.iA(a,s)}finally{if(0>=$.M.length)return A.j($.M,-1)
$.M.pop()}r=A.f5(b,t.U.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
ed(a,b,c){var s,r
if(A.eA(a))return b+"..."+c
s=new A.aB(b)
B.a.j($.M,a)
try{r=s
r.a=A.f5(r.a,a,", ")}finally{if(0>=$.M.length)return A.j($.M,-1)
$.M.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
iA(a,b){var s,r,q,p,o,n,m,l=a.gG(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.q())return
s=A.n(l.gB())
B.a.j(b,s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.j(b,-1)
r=b.pop()
if(0>=b.length)return A.j(b,-1)
q=b.pop()}else{p=l.gB();++j
if(!l.q()){if(j<=4){B.a.j(b,A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.j(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB();++j
for(;l.q();p=o,o=n){n=l.gB();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.j(b,-1)
k-=b.pop().length+2;--j}B.a.j(b,"...")
return}}q=A.n(p)
r=A.n(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.j(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.j(b,m)
B.a.j(b,q)
B.a.j(b,r)},
hn(a,b,c,d){var s
if(B.m===c){s=B.b.gl(a)
b=J.W(b)
return A.el(A.a8(A.a8($.eb(),s),b))}if(B.m===d){s=B.b.gl(a)
b=J.W(b)
c=J.W(c)
return A.el(A.a8(A.a8(A.a8($.eb(),s),b),c))}s=B.b.gl(a)
b=J.W(b)
c=J.W(c)
d=J.W(d)
d=A.el(A.a8(A.a8(A.a8(A.a8($.eb(),s),b),c),d))
return d},
dq:function dq(){},
q:function q(){},
bx:function bx(a){this.a=a},
a0:function a0(){},
R:function R(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b6:function b6(a,b,c,d,e,f){var _=this
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
bb:function bb(a){this.a=a},
c5:function c5(a){this.a=a},
ba:function ba(a){this.a=a},
bD:function bD(a){this.a=a},
b9:function b9(){},
dr:function dr(a){this.a=a},
aQ:function aQ(a,b){this.a=a
this.b=b},
f:function f(){},
w:function w(){},
h:function h(){},
cg:function cg(){},
aB:function aB(a){this.a=a},
d6:function d6(a){this.a=a},
bp(a){var s
if(typeof a=="function")throw A.c(A.aN("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.ia,a)
s[$.ea()]=a
return s},
aH(a){var s
if(typeof a=="function")throw A.c(A.aN("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.ib,a)
s[$.ea()]=a
return s},
ia(a){return t.Z.a(a).$0()},
ib(a,b,c){t.Z.a(a)
if(A.t(c)>=1)return a.$1(b)
return a.$0()},
fG(a,b){var s=new A.y($.v,b.h("y<0>")),r=new A.bc(s,b.h("bc<0>"))
a.then(A.bs(new A.e4(r,b),1),A.bs(new A.e5(r),1))
return s},
e4:function e4(a,b){this.a=a
this.b=b},
e5:function e5(a){this.a=a},
dH:function dH(){this.b=this.a=0},
a6(a,b){var s=A.eg(a),r=b.a,q=b.b,p=A.aZ(b.c,t.L)
return new A.S(s,r,q,p,b.d,b.e,b.f)},
ho(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!(a instanceof A.F))return g
s=a.p(0,"name")
r=a.p(0,"bpm")
q=a.p(0,"meter")
if(typeof s!="string"||B.c.a1(s).length===0)return g
if(typeof r!="number"||typeof q!="string")return g
p=A.b0(q)
if(p==null)return g
o=a.p(0,"levels")
if(t.j.b(o)){n=A.e([],t.a)
for(m=o.length,l=0;l<o.length;o.length===m||(0,A.U)(o),++l)n.push(A.hi(A.n(o[l])))
k=n}else k=p.V()
if(k.length!==p.a)k=p.V()
j=a.p(0,"swing")
n=A.eg(s)
m=B.b.n(B.d.v(r),20,300)
i=A.f6(A.n(a.p(0,"sub")))
h=typeof j=="number"?B.b.n(B.d.v(j),50,75):50
return new A.S(n,m,p,k,i,h,J.ac(a.p(0,"dotted"),!0)&&p.gN())},
eg(a){var s=B.c.a1(a),r=A.ej("\\s+"),q=A.fI(s,r," ")
return q.length>40?B.c.P(q,0,40):q},
Y(a){var s,r,q=A.e([],t.J)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.U)(a),++r)q.push(a[r].bN())
return B.j.bz(q,null)},
fz(a){var s,r,q,p,o,n,m
if(a==null||a.length===0)return A.e([],t.e)
s=null
try{s=B.j.by(a,null)}catch(r){if(A.Z(r) instanceof A.aQ)return A.e([],t.e)
else throw r}if(!t.j.b(s))return A.e([],t.e)
q=A.e([],t.e)
for(p=s,o=p.length,n=0;n<p.length;p.length===o||(0,A.U)(p),++n){m=A.ho(p[n])
if(m!=null)q.push(m)}return q},
ji(a,b){var s,r,q,p,o=A.e([b],t.e)
for(s=a.length,r=b.a,q=0;q<a.length;a.length===s||(0,A.U)(a),++q){p=a[q]
if(p.a.toLowerCase()!==r.toLowerCase())o.push(p)}return o},
je(){var s="4/4",r=new A.e7()
return A.e([r.$4$sub("Rock eighths",100,s,B.q),r.$4$sub("Funk sixteenths",92,s,B.p),r.$5$sub$swing("Swing",140,s,B.q,67),r.$4$dotted("Shuffle 12/8",72,"12/8",!0),r.$3("Jazz waltz",150,"3/4"),r.$4$sub("Songo",112,s,B.p),r.$3("Odd: 7/8",180,"7/8:2+2+3")],t.e)},
S:function S(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
e7:function e7(){},
hi(a){return B.a.bF(B.o,new A.co(a),new A.cp())},
f6(a){return B.a.bF(B.A,new A.dc(a),new A.dd())},
ah(a,b,c){var s=c==null?A.hm(a,b):c
s=new A.b_(a,b,A.eZ(s,t.S))
s.bS(a,b,c)
return s},
hm(a,b){var s
if(b<8||a<5)return A.aw(a,1,!1,t.S)
if(B.b.a9(a,3)===0)return A.aw(B.b.E(a,3),3,!1,t.S)
if((a&1)===1){s=t.S
s=A.aZ(A.aw(B.b.E(a-3,2),2,!1,s),s)
s.push(3)
return s}return A.aw(B.b.E(a,2),2,!1,t.S)},
b0(a){var s,r,q,p,o,n,m,l,k,j,i=A.ej("^\\s*(\\d+)\\s*/\\s*(\\d+)\\s*(?::\\s*([\\d+\\s]+))?$").cB(a)
if(i==null)return null
p=i.b
if(1>=p.length)return A.j(p,1)
o=p[1]
o.toString
s=A.ez(o)
if(2>=p.length)return A.j(p,2)
o=p[2]
o.toString
r=A.ez(o)
q=null
if(3>=p.length)return A.j(p,3)
n=p[3]
if(n!=null){p=A.e([],t.t)
for(o=n.split("+"),m=o.length,l=0;l<m;++l){k=A.eh(B.c.a1(o[l]),null)
if(k!=null)p.push(k)}q=p}try{p=A.ah(s,r,q)
return p}catch(j){if(A.Z(j) instanceof A.R)return null
else throw j}},
hv(){return new A.db()},
jf(a){var s
A:{if(a<40){s="Grave"
break A}if(a<60){s="Largo"
break A}if(a<66){s="Larghetto"
break A}if(a<76){s="Adagio"
break A}if(a<108){s="Andante"
break A}if(a<120){s="Moderato"
break A}if(a<156){s="Allegro"
break A}if(a<176){s="Vivace"
break A}if(a<200){s="Presto"
break A}s="Prestissimo"
break A}return s},
J:function J(a,b,c){this.c=a
this.a=b
this.b=c},
co:function co(a){this.a=a},
cp:function cp(){},
ai:function ai(a,b){this.a=a
this.b=b},
C:function C(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
dc:function dc(a){this.a=a},
dd:function dd(){},
b_:function b_(a,b,c){this.a=a
this.b=b
this.c=c},
cs:function cs(){},
ct:function ct(){},
cw:function cw(){},
cx:function cx(){},
cu:function cu(){},
cv:function cv(){},
cj:function cj(a,b,c){var _=this
_.a=96
_.b=a
_.c=b
_.d=c
_.e=50
_.f=!1},
db:function db(){var _=this
_.a=!1
_.c=_.b=4
_.d=140},
ci:function ci(){this.a=!1
this.c=this.b=2},
bz:function bz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
da:function da(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.x=_.w=_.r=_.f=_.e=0},
de:function de(a){this.c=a},
d(a,b){var s=A.X(A.b(v.G.document).getElementById(a))
s.toString
return b.a(s)},
N(a,b,c){var s=A.b(A.b(v.G.document).createElement(a))
if(b!=null)s.className=b
if(c!=null)s.textContent=c
return s},
k(a,b,c){return a.addEventListener(b,A.aH(new A.e3(c)))},
jb(a,b){return A.aT(v.G,"addEventListener",a,A.aH(new A.e2(b)),t.X)},
eB(a){var s,r,q,p,o=null
try{s=A.X(v.G.localStorage)
q=s
r=q==null?o:A.aT(q,"getItem",a,o,t.X)
q=r!=null&&typeof r==="string"?A.p(r):o
return q}catch(p){return o}},
Q(a,b){var s,r,q
try{s=A.X(v.G.localStorage)
r=s
if(r!=null)A.aT(r,"setItem",a,b,t.X)}catch(q){}},
eD(){var s=A.b(v.G.navigator).audioSession
if(t.m.b(s))s.type="playback"},
jj(a){var s
try{A.z(A.b(v.G.navigator).vibrate(a))}catch(s){}},
jd(){var s,r,q,p,o,n=A.b(v.G.navigator).serviceWorker,m=t.m
if(!m.b(n))return
try{s=A.aT(A.b(n),"register","sw.js",null,m)
m=A.fG(s,t.X)
r=new A.e6()
q=m.$ti
p=$.v
if(p!==B.e)r=A.ft(r,p)
m.ab(new A.a2(new A.y(p,q),2,null,r,q.h("a2<1,1>")))}catch(o){}},
jk(){var s=v.G,r=A.X(A.b(s.document).getElementById("themeToggle")),q=A.b(A.b(s.document).documentElement)
if(r==null)return
s=new A.e9(q,r)
A.k(r,"click",new A.e8(q,s))
s.$0()},
e3:function e3(a){this.a=a},
e2:function e2(a){this.a=a},
dh:function dh(){this.a=null
this.b=!1},
di:function di(a){this.a=a},
e6:function e6(){},
e9:function e9(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
j9(){var s,r,q,p,o
A.jk()
A.jd()
s=v.G
r=A.X(A.b(s.document).getElementById("metro"))
if(r==null)return
if(!("AudioContext" in s)){s=A.X(A.b(s.document).getElementById("no-audio"))
if(s!=null)s.hidden=!1
return}s=A.ah(4,4,null)
q=A.ah(4,4,null)
q=q.V()
p=t.m
o=new A.bR(new A.cj(s,q,B.f),A.hv(),new A.ci(),A.d("bpm",p),A.d("bpm-range",p),A.d("tempo-unit",p),A.d("tempo-word",p),A.d("start",p),A.d("transport",p),A.d("q-start",p),A.d("q-bpm",p),A.d("flash",p),A.d("position",p),A.d("grid",p),A.d("meter-beats",p),A.d("meter-unit",p),A.d("meter-groups",p),A.d("groups-row",p),A.d("meter-quick",p),A.d("dotted-row",p),A.d("dotted",p),A.d("sub",p),A.d("swing-row",p),A.d("swing",p),A.d("swing-out",p),A.d("sound",p),A.d("volume",p),A.d("sub-volume",p),A.d("vibrate-row",p),A.d("vibrate",p),A.d("big-flash",p),A.d("status",p),A.d("my-presets",p),A.d("presets-empty",p),A.d("preset-undo",p),A.d("preset-undo-text",p),A.d("preset-undo-btn",p),A.d("speed-progress",p),A.d("starter-presets",p),A.d("preset-name",p),A.e([],t.d),A.e([],t.O),new A.de(A.e([],t.w)),new A.dh(),A.e([],t.e))
o.cR()
r.hidden=!1
o.aX()},
fm(a){var s,r=A.b(a.children),q=A.t(A.H(r.length)),p=A.e([],t.O)
for(s=0;s<q;++s)p.push(A.b(A.eR(r,"item",s,null,null,null)))
return p},
j2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=A.ah(a,b,A.aw(a,1,!1,t.S))
if(b<8||a<4)return A.e([A.ah(a,b,null)],t.c)
s=A.hk(t.N)
r=t.t
new A.dX(s).$2(a,A.e([],r))
q=A.ah(a,b,null)
p=A.e([q],t.c)
for(o=A.hI(s,s.r,s.$ti.c),n=q.c,m=o.$ti.c;o.q();){l=o.d
if(l==null)l=m.a(l)
if(l!==B.a.M(n,"+")){k=A.e([],r)
for(l=l.split("+"),j=l.length,i=0;i<j;++i)k.push(A.ez(l[i]))
p.push(A.ah(a,b,k))}}p.push(h)
return p},
bR:function bR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5){var _=this
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
_.to="wood"
_.x1=0.8
_.x2=0.6
_.y1=_.xr=!1
_.bA=_.L=_.y2=null
_.F=!1
_.al=0
_.bB=_.a6=_.am=_.a5=null
_.X=c1
_.an=c2
_.bC=-1
_.cA=c3
_.bE=_.bD=null
_.Y=c4
_.C=c5
_.ao=_.aQ=null
_.aR=_.Z=$},
cM:function cM(a){this.a=a},
cN:function cN(a){this.a=a},
cO:function cO(a){this.a=a},
cZ:function cZ(a){this.a=a},
d_:function d_(a){this.a=a},
d0:function d0(a){this.a=a},
d1:function d1(a){this.a=a},
d2:function d2(a){this.a=a},
d3:function d3(a){this.a=a},
d4:function d4(a){this.a=a},
d5:function d5(a){this.a=a},
cP:function cP(a){this.a=a},
cQ:function cQ(a){this.a=a},
cR:function cR(a){this.a=a},
cS:function cS(a){this.a=a},
cT:function cT(a){this.a=a},
cU:function cU(a){this.a=a},
cV:function cV(a){this.a=a},
cW:function cW(a){this.a=a},
cX:function cX(a){this.a=a},
cY:function cY(a){this.a=a},
cA:function cA(a,b){this.a=a
this.b=b},
cI:function cI(a){this.a=a},
cH:function cH(){},
cy:function cy(){},
cz:function cz(a,b){this.a=a
this.b=b},
cL:function cL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
cK:function cK(a){this.a=a},
cF:function cF(a){this.a=a},
cB:function cB(a){this.a=a},
cD:function cD(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
cJ:function cJ(a){this.a=a},
cC:function cC(a){this.a=a},
cG:function cG(a,b){this.a=a
this.b=b},
dX:function dX(a){this.a=a},
fJ(a){return v.mangledGlobalNames[a]},
jg(a){throw A.B(A.eV(a),new Error())},
eF(){throw A.B(A.eV(""),new Error())},
eR(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else{s=a[b](c,d)
return s}},
aT(a,b,c,d,e){return e.a(A.eR(a,b,c,d,null,null))}},B={}
var w=[A,J,B]
var $={}
A.ee.prototype={}
J.bH.prototype={
O(a,b){return a===b},
gl(a){return A.c0(a)},
i(a){return"Instance of '"+A.c1(a)+"'"},
gm(a){return A.an(A.er(this))}}
J.bJ.prototype={
i(a){return String(a)},
gl(a){return a?519018:218159},
gm(a){return A.an(t.y)},
$il:1,
$iD:1}
J.aS.prototype={
O(a,b){return null==b},
i(a){return"null"},
gl(a){return 0},
$il:1}
J.aV.prototype={$iu:1}
J.a5.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.c_.prototype={}
J.aC.prototype={}
J.a4.prototype={
i(a){var s=a[$.fL()]
if(s==null)s=a[$.ea()]
if(s==null)return this.bQ(a)
return"JavaScript function for "+J.bv(s)},
$iad:1}
J.aU.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.aW.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.o.prototype={
j(a,b){A.K(a).c.a(b)
a.$flags&1&&A.bu(a,29)
a.push(b)},
aq(a,b){a.$flags&1&&A.bu(a,"removeAt",1)
if(b<0||b>=a.length)throw A.c(A.ei(b,null))
return a.splice(b,1)[0]},
U(a){a.$flags&1&&A.bu(a,"clear","clear")
a.length=0},
M(a,b){var s,r=A.aw(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.J(r,s,A.n(a[s]))
return r.join(b)},
cC(a,b,c,d){var s,r,q
d.a(b)
A.K(a).t(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.c(A.a_(a))}return r},
bF(a,b,c){var s,r,q,p=A.K(a)
p.h("D(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.a_(a))}p=c.$0()
return p},
gaS(a){if(a.length>0)return a[0]
throw A.c(A.eQ())},
gbJ(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.eQ())},
bv(a,b){var s,r
A.K(a).h("D(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.a_(a))}return!1},
W(a,b){var s,r
A.K(a).h("D(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.a_(a))}return!0},
a4(a,b){var s
for(s=0;s<a.length;++s)if(J.ac(a[s],b))return!0
return!1},
gbI(a){return a.length!==0},
i(a){return A.ed(a,"[","]")},
gG(a){return new J.ar(a,a.length,A.K(a).h("ar<1>"))},
gl(a){return A.c0(a)},
gk(a){return a.length},
J(a,b,c){A.K(a).c.a(c)
a.$flags&2&&A.bu(a)
if(!(b>=0&&b<a.length))throw A.c(A.fA(a,b))
a[b]=c},
cF(a,b){var s
A.K(a).h("D(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
$if:1,
$ii:1}
J.bI.prototype={
cO(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.c1(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.ck.prototype={}
J.ar.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.U(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.at.prototype={
aN(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.b.gap(b)
if(this.gap(a)===s)return 0
if(this.gap(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gap(a){return a===0?1/a<0:a<0},
v(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.em(""+a+".round()"))},
n(a,b,c){if(B.b.aN(b,c)>0)throw A.c(A.iQ(b))
if(this.aN(a,b)<0)return b
if(this.aN(a,c)>0)return c
return a},
cL(a,b){var s
if(b>20)throw A.c(A.b7(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gap(a))return"-"+s
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
a9(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
bR(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bq(a,b)},
E(a,b){return(a|0)===a?a/b|0:this.bq(a,b)},
bq(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.em("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
bo(a,b){var s
if(a>0)s=this.ck(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ck(a,b){return b>31?0:a>>>b},
gm(a){return A.an(t.o)},
$im:1,
$iaq:1}
J.aR.prototype={
gm(a){return A.an(t.S)},
$il:1,
$ia:1}
J.bK.prototype={
gm(a){return A.an(t.i)},
$il:1}
J.au.prototype={
P(a,b,c){return a.substring(b,A.hs(b,c,a.length))},
a1(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.j(p,0)
if(p.charCodeAt(0)===133){s=J.hg(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.j(p,r)
q=p.charCodeAt(r)===133?J.hh(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
i(a){return a},
gl(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return A.an(t.N)},
gk(a){return a.length},
$il:1,
$id8:1,
$ix:1}
A.bO.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.d9.prototype={}
A.aO.prototype={}
A.ag.prototype={
gG(a){var s=this
return new A.av(s,s.gk(s),A.aa(s).h("av<ag.E>"))},
ga_(a){return this.gk(this)===0}}
A.av.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.fB(q),o=p.gk(q)
if(r.b!==o)throw A.c(A.a_(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ak(q,s);++r.c
return!0}}
A.G.prototype={}
A.aG.prototype={$r:"+(1,2)",$s:1}
A.b8.prototype={}
A.df.prototype={
I(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.b5.prototype={
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
A.d7.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aP.prototype={}
A.bi.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ia7:1}
A.a3.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fK(r==null?"unknown":r)+"'"},
$iad:1,
gcU(){return this},
$C:"$1",
$R:1,
$D:null}
A.bA.prototype={$C:"$0",$R:0}
A.bB.prototype={$C:"$2",$R:2}
A.c4.prototype={}
A.c3.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fK(s)+"'"}}
A.as.prototype={
O(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.as))return!1
return this.$_target===b.$_target&&this.a===b.a},
gl(a){return(A.fE(this.a)^A.c0(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c1(this.a)+"'")}}
A.c2.prototype={
i(a){return"RuntimeError: "+this.a}}
A.aX.prototype={
gk(a){return this.a},
ga_(a){return this.a===0},
ga0(){return new A.af(this,this.$ti.h("af<1>"))},
p(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cG(b)},
cG(a){var s,r,q=this.d
if(q==null)return null
s=this.c6(q,a)
r=this.bG(s,a)
if(r<0)return null
return s[r].b},
J(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.b0(s==null?m.b=m.aF():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.b0(r==null?m.c=m.aF():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aF()
p=J.W(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.aG(b,c)]
else{n=m.bG(o,b)
if(n>=0)o[n].b=c
else o.push(m.aG(b,c))}}},
a7(a,b){var s,r,q=this
q.$ti.h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.a_(q))
s=s.c}},
b0(a,b,c){var s,r=this.$ti
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.aG(b,c)
else s.b=c},
aG(a,b){var s=this,r=s.$ti,q=new A.cq(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
c6(a,b){return a[J.W(b)&1073741823]},
bG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ac(a[r].a,b))return r
return-1},
i(a){return A.f_(this)},
aF(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ieW:1}
A.cq.prototype={}
A.af.prototype={
gk(a){return this.a.a},
ga_(a){return this.a.a===0},
gG(a){var s=this.a
return new A.bP(s,s.r,s.e,this.$ti.h("bP<1>"))}}
A.bP.prototype={
gB(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.a_(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.dY.prototype={
$1(a){return this.a(a)},
$S:5}
A.dZ.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.e_.prototype={
$1(a){return this.a(A.p(a))},
$S:12}
A.al.prototype={
i(a){return this.bt(!1)},
bt(a){var s,r,q,p,o,n=this.c4(),m=this.b7(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.j(m,q)
o=m[q]
l=a?l+A.f1(o):l+A.n(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
c4(){var s,r=this.$s
while($.dI.length<=r)B.a.j($.dI,null)
s=$.dI[r]
if(s==null){s=this.bZ()
B.a.J($.dI,r,s)}return s},
bZ(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.e(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.J(k,q,r[s])}}return A.eZ(k,t.K)}}
A.aF.prototype={
b7(){return[this.a,this.b]},
O(a,b){if(b==null)return!1
return b instanceof A.aF&&this.$s===b.$s&&J.ac(this.a,b.a)&&J.ac(this.b,b.b)},
gl(a){return A.hn(this.$s,this.a,this.b,B.m)}}
A.bL.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
gcb(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.eT(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
cB(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dG(s)},
$id8:1,
$iht:1}
A.dG.prototype={}
A.ax.prototype={
gm(a){return B.U},
$il:1}
A.b3.prototype={}
A.bS.prototype={
gm(a){return B.V},
$il:1}
A.az.prototype={
gk(a){return a.length},
$iI:1}
A.b1.prototype={$if:1,$ii:1}
A.b2.prototype={$if:1,$ii:1}
A.ay.prototype={
gm(a){return B.W},
$il:1,
$iay:1}
A.bT.prototype={
gm(a){return B.X},
$il:1}
A.bU.prototype={
gm(a){return B.Y},
$il:1}
A.bV.prototype={
gm(a){return B.Z},
$il:1}
A.bW.prototype={
gm(a){return B.a_},
$il:1}
A.bX.prototype={
gm(a){return B.a1},
$il:1}
A.bY.prototype={
gm(a){return B.a2},
$il:1}
A.b4.prototype={
gm(a){return B.a3},
gk(a){return a.length},
$il:1}
A.bZ.prototype={
gm(a){return B.a4},
gk(a){return a.length},
$il:1}
A.bd.prototype={}
A.be.prototype={}
A.bf.prototype={}
A.bg.prototype={}
A.T.prototype={
h(a){return A.bn(v.typeUniverse,this,a)},
t(a){return A.fi(v.typeUniverse,this,a)}}
A.cb.prototype={}
A.dL.prototype={
i(a){return A.L(this.a,null)}}
A.ca.prototype={
i(a){return this.a}}
A.bj.prototype={$ia0:1}
A.dm.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:6}
A.dl.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:13}
A.dn.prototype={
$0(){this.a.$0()},
$S:7}
A.dp.prototype={
$0(){this.a.$0()},
$S:7}
A.dJ.prototype={
bU(a,b){if(self.setTimeout!=null)self.setTimeout(A.bs(new A.dK(this,b),0),a)
else throw A.c(A.em("`setTimeout()` not found."))}}
A.dK.prototype={
$0(){this.b.$0()},
$S:0}
A.c7.prototype={
aO(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.b1(a)
else{s=r.a
if(q.h("ae<1>").b(a))s.b2(a)
else s.b4(a)}},
aP(a,b){var s
if(b==null)b=A.ch(a)
s=this.a
if(this.b)s.aA(new A.O(a,b))
else s.au(new A.O(a,b))}}
A.dP.prototype={
$1(a){return this.a.$2(0,a)},
$S:2}
A.dQ.prototype={
$2(a,b){this.a.$2(1,new A.aP(a,t.l.a(b)))},
$S:14}
A.dT.prototype={
$2(a,b){this.a(A.t(a),b)},
$S:15}
A.O.prototype={
i(a){return A.n(this.a)},
$iq:1,
gaa(){return this.b}}
A.c9.prototype={
aP(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.f4("Future already completed"))
s.au(A.io(a,b))},
bx(a){return this.aP(a,null)}}
A.bc.prototype={
aO(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.f4("Future already completed"))
s.b1(r.h("1/").a(a))}}
A.a2.prototype={
cH(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.aJ(s,t.x.a(this.d),a.a,t.y,t.K)},
cE(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.cg(l,q,m,a.b,o,n,t.l)
else p=l.aJ(l,t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.r.b(A.Z(s))){if((r.c&1)!==0)throw A.c(A.aN("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.aN("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.y.prototype={
bM(a,b,c){var s,r,q,p=this.$ti
p.t(c).h("1/(2)").a(a)
s=$.v
if(s===B.e){if(b!=null&&!t.Q.b(b)&&!t.v.b(b))throw A.c(A.bw(b,"onError",u.c))}else{r=p.c
a=s.bg(s,c.h("@<0/>").t(r).h("1(2)").a(a),c.h("0/"),r)
if(b!=null)b=A.ft(b,s)}q=new A.y(s,c.h("y<0>"))
r=b==null?1:3
this.ab(new A.a2(q,r,a,b,p.h("@<1>").t(c).h("a2<1,2>")))
return q},
br(a,b,c){var s,r=this.$ti
r.t(c).h("1/(2)").a(a)
s=new A.y($.v,c.h("y<0>"))
this.ab(new A.a2(s,19,a,b,r.h("@<1>").t(c).h("a2<1,2>")))
return s},
cj(a){this.a=this.a&1|16
this.c=a},
ac(a){this.a=a.a&30|this.a&1
this.c=a.c},
ab(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.ab(a)
return}r.ac(s)}q=r.b
q.a3(q,new A.ds(r,a))}},
bd(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.bd(a)
return}m.ac(n)}l.a=m.ag(a)
s=m.b
s.a3(s,new A.dw(l,m))}},
af(){var s=t.F.a(this.c)
this.c=null
return this.ag(s)},
ag(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
b4(a){var s,r=this
r.$ti.c.a(a)
s=r.af()
r.a=8
r.c=a
A.aD(r,s)},
bY(a){var s=this.af()
this.ac(a)
A.aD(this,s)},
aA(a){var s=this.af()
this.cj(a)
A.aD(this,s)},
b1(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("ae<1>").b(a)){this.b2(a)
return}this.bW(a)},
bW(a){var s,r=this
r.$ti.c.a(a)
r.a^=2
s=r.b
s.a3(s,new A.du(r,a))},
b2(a){A.en(this.$ti.h("ae<1>").a(a),this,!1)
return},
au(a){var s
this.a^=2
s=this.b
s.a3(s,new A.dt(this,a))},
$iae:1}
A.ds.prototype={
$0(){A.aD(this.a,this.b)},
$S:0}
A.dw.prototype={
$0(){A.aD(this.b,this.a.a)},
$S:0}
A.dv.prototype={
$0(){A.en(this.a.a,this.b,!0)},
$S:0}
A.du.prototype={
$0(){this.a.b4(this.b)},
$S:0}
A.dt.prototype={
$0(){this.a.aA(this.b)},
$S:0}
A.dz.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.bh(p,t.G.a(q.d),t.z)}catch(o){s=A.Z(o)
r=A.aL(o)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
p=r
if(p==null)p=A.ch(q)
n=k.a
n.c=new A.O(q,p)
q=n}q.b=!0
return}if(j instanceof A.y&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.y){m=k.b.a
l=new A.y(m.b,m.$ti)
j.bM(new A.dA(l,m),new A.dB(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.dA.prototype={
$1(a){this.a.bY(this.b)},
$S:6}
A.dB.prototype={
$2(a,b){A.bo(a)
t.l.a(b)
this.a.aA(new A.O(a,b))},
$S:16}
A.dy.prototype={
$0(){var s,r,q,p,o,n,m,l,k
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
l=p.b.b
q.c=l.aJ(l,o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(k){s=A.Z(k)
r=A.aL(k)
q=s
p=r
if(p==null)p=A.ch(q)
o=this.a
o.c=new A.O(q,p)
o.b=!0}},
$S:0}
A.dx.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.cH(s)&&p.a.e!=null){p.c=p.a.cE(s)
p.b=!1}}catch(o){r=A.Z(o)
q=A.aL(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ch(p)
m=l.b
m.c=new A.O(p,n)
p=m}p.b=!0}},
$S:0}
A.c8.prototype={}
A.cf.prototype={}
A.dj.prototype={
cu(a,b){return new A.dk(this,this.ce(this,b.h("0()").a(a),b),b)},
b8(a,b,c){var s,r,q,p,o,n,m,l
t.l.a(c)
s=null
if(s==null){A.iF(b,c)
return}r=s.gaY()
q=r.gcV()
p=$.v
try{$.v=q
s.cD(r,r.gaH(),a,b,c)
$.v=p}catch(m){o=A.Z(m)
n=A.aL(m)
$.v=p
l=b===o?c:n
q.b8(r,o,l)}},
bh(a,b,c){var s,r,q
c.h("0()").a(b)
r=$.v
if(r===a)return b.$0()
s=r
$.v=a
try{r=b.$0()
return r}finally{$.v=s}q=null.gaY()
return null.cW(q,q.gaH(),a,b)},
aJ(a,b,c,d,e){var s,r,q
d.h("@<0>").t(e).h("1(2)").a(b)
e.a(c)
r=$.v
if(r===a)return b.$1(c)
s=r
$.v=a
try{r=b.$1(c)
return r}finally{$.v=s}q=null.gaY()
return null.cD(q,q.gaH(),a,b,c)},
cg(a,b,c,d,e,f,g){var s,r,q
e.h("@<0>").t(f).t(g).h("1(2,3)").a(b)
f.a(c)
g.a(d)
r=$.v
if(r===a)return b.$2(c,d)
s=r
$.v=a
try{r=b.$2(c,d)
return r}finally{$.v=s}q=null.gaY()
return null.cX(q,q.gaH(),a,b,c,d)},
ce(a,b,c){c.h("0()").a(b)
return b},
bg(a,b,c,d){c.h("@<0>").t(d).h("1(2)").a(b)
return b},
bf(a,b,c,d,e){c.h("@<0>").t(d).t(e).h("1(2,3)").a(b)
return b},
c3(a,b,c){return null},
a3(a,b){A.iG(a,t.M.a(b))
return}}
A.dk.prototype={
$0(){var s=this.a
return s.bh(s,this.b,this.c)},
$S(){return this.c.h("0()")}}
A.dS.prototype={
$0(){A.h6(this.a,this.b)},
$S:0}
A.aj.prototype={
gG(a){var s=this,r=new A.aE(s,s.r,A.aa(s).h("aE<1>"))
r.c=s.e
return r},
gk(a){return this.a},
a4(a,b){var s
if((b&1073741823)===b){s=this.c
if(s==null)return!1
return t.R.a(s[b])!=null}else return this.c_(b)},
c_(a){var s=this.d
if(s==null)return!1
return this.b6(s[this.b5(a)],a)>=0},
j(a,b){var s,r,q=this
A.aa(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.b3(s==null?q.b=A.eo():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.b3(r==null?q.c=A.eo():r,b)}else return q.bV(b)},
bV(a){var s,r,q,p=this
A.aa(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.eo()
r=p.b5(a)
q=s[r]
if(q==null)s[r]=[p.az(a)]
else{if(p.b6(q,a)>=0)return!1
q.push(p.az(a))}return!0},
b3(a,b){A.aa(this).c.a(b)
if(t.R.a(a[b])!=null)return!1
a[b]=this.az(b)
return!0},
az(a){var s=this,r=new A.ce(A.aa(s).c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
b5(a){return J.W(a)&1073741823},
b6(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ac(a[r].a,b))return r
return-1}}
A.ce.prototype={}
A.aE.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.a_(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}}}
A.r.prototype={
gG(a){return new A.av(a,a.length,A.bt(a).h("av<r.E>"))},
ak(a,b){if(!(b>=0&&b<a.length))return A.j(a,b)
return a[b]},
gbI(a){return a.length!==0},
i(a){return A.ed(a,"[","]")}}
A.F.prototype={
a7(a,b){var s,r,q,p=A.aa(this)
p.h("~(F.K,F.V)").a(b)
for(s=this.ga0(),s=s.gG(s),p=p.h("F.V");s.q();){r=s.gB()
q=this.p(0,r)
b.$2(r,q==null?p.a(q):q)}},
gk(a){var s=this.ga0()
return s.gk(s)},
ga_(a){var s=this.ga0()
return s.ga_(s)},
i(a){return A.f_(this)},
$ibQ:1}
A.cr.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.n(a)
r.a=(r.a+=s)+": "
s=A.n(b)
r.a+=s},
$S:8}
A.aA.prototype={
i(a){return A.ed(this,"{","}")},
$if:1}
A.bh.prototype={}
A.cc.prototype={
p(a,b){var s,r=this.b
if(r==null)return this.c.p(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.cd(b):s}},
gk(a){return this.b==null?this.c.a:this.ad().length},
ga_(a){return this.gk(0)===0},
ga0(){if(this.b==null){var s=this.c
return new A.af(s,s.$ti.h("af<1>"))}return new A.cd(this)},
a7(a,b){var s,r,q,p,o=this
t.cQ.a(b)
if(o.b==null)return o.c.a7(0,b)
s=o.ad()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.dR(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.a_(o))}},
ad(){var s=t.aL.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
cd(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.dR(this.a[a])
return this.b[a]=s}}
A.cd.prototype={
gk(a){return this.a.gk(0)},
ak(a,b){var s=this.a
if(s.b==null)s=s.ga0().ak(0,b)
else{s=s.ad()
if(!(b>=0&&b<s.length))return A.j(s,b)
s=s[b]}return s},
gG(a){var s=this.a
if(s.b==null){s=s.ga0()
s=s.gG(s)}else{s=s.ad()
s=new J.ar(s,s.length,A.K(s).h("ar<1>"))}return s}}
A.bC.prototype={}
A.bE.prototype={}
A.aY.prototype={
i(a){var s=A.bF(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.bN.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.cl.prototype={
by(a,b){var s=A.iD(a,this.gcw().a)
return s},
bz(a,b){var s=A.hH(a,this.gcz().b,null)
return s},
gcz(){return B.N},
gcw(){return B.M}}
A.cn.prototype={}
A.cm.prototype={}
A.dE.prototype={
bP(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.P(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.P(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.P(a,r,q)
r=q+1
o=A.E(92)
s.a+=o
o=A.E(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.P(a,r,m)},
aw(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.bN(a,null))}B.a.j(s,a)},
ar(a){var s,r,q,p,o=this
if(o.bO(a))return
o.aw(a)
try{s=o.b.$1(a)
if(!o.bO(s)){q=A.eU(a,null,o.gbc())
throw A.c(q)}q=o.a
if(0>=q.length)return A.j(q,-1)
q.pop()}catch(p){r=A.Z(p)
q=A.eU(a,r,o.gbc())
throw A.c(q)}},
bO(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.i(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.bP(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.aw(a)
q.cS(a)
s=q.a
if(0>=s.length)return A.j(s,-1)
s.pop()
return!0}else if(a instanceof A.F){q.aw(a)
r=q.cT(a)
s=q.a
if(0>=s.length)return A.j(s,-1)
s.pop()
return r}else return!1},
cS(a){var s,r=this.c
r.a+="["
if(J.fX(a)){if(0>=a.length)return A.j(a,0)
this.ar(a[0])
for(s=1;s<a.length;++s){r.a+=","
this.ar(a[s])}}r.a+="]"},
cT(a){var s,r,q,p,o,n,m=this,l={}
if(a.ga_(a)){m.c.a+="{}"
return!0}s=a.gk(a)*2
r=A.aw(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.a7(0,new A.dF(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.bP(A.p(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.j(r,n)
m.ar(r[n])}p.a+="}"
return!0}}
A.dF.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.J(s,r.a++,a)
B.a.J(s,r.a++,b)},
$S:8}
A.dD.prototype={
gbc(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.dq.prototype={
i(a){return this.aC()}}
A.q.prototype={
gaa(){return A.hp(this)}}
A.bx.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bF(s)
return"Assertion failed"}}
A.a0.prototype={}
A.R.prototype={
gaE(){return"Invalid argument"+(!this.a?"(s)":"")},
gaD(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.n(p),n=s.gaE()+q+o
if(!s.a)return n
return n+s.gaD()+": "+A.bF(s.gaT())},
gaT(){return this.b}}
A.b6.prototype={
gaT(){return A.fl(this.b)},
gaE(){return"RangeError"},
gaD(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.bG.prototype={
gaT(){return A.t(this.b)},
gaE(){return"RangeError"},
gaD(){if(A.t(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.bb.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.c5.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.ba.prototype={
i(a){return"Bad state: "+this.a}}
A.bD.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bF(s)+"."}}
A.b9.prototype={
i(a){return"Stack Overflow"},
gaa(){return null},
$iq:1}
A.dr.prototype={
i(a){return"Exception: "+this.a}}
A.aQ.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.c.P(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.f.prototype={
gk(a){var s,r=this.gG(this)
for(s=0;r.q();)++s
return s},
ak(a,b){var s,r
A.hr(b,"index")
s=this.gG(this)
for(r=b;s.q();){if(r===0)return s.gB();--r}throw A.c(A.eP(b,b-r,this,"index"))},
i(a){return A.hc(this,"(",")")}}
A.w.prototype={
gl(a){return A.h.prototype.gl.call(this,0)},
i(a){return"null"}}
A.h.prototype={$ih:1,
O(a,b){return this===b},
gl(a){return A.c0(this)},
i(a){return"Instance of '"+A.c1(this)+"'"},
gm(a){return A.j0(this)},
toString(){return this.i(this)}}
A.cg.prototype={
i(a){return""},
$ia7:1}
A.aB.prototype={
gk(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ihx:1}
A.d6.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.e4.prototype={
$1(a){return this.a.aO(this.b.h("0/?").a(a))},
$S:2}
A.e5.prototype={
$1(a){if(a==null)return this.a.bx(new A.d6(a===undefined))
return this.a.bx(a)},
$S:2}
A.dH.prototype={
bT(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.R()
l.R()
l.R()
l.R()},
R(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.b.E(o-n+(q-p)+(m-r),4294967296)>>>0},
cI(){var s,r=this
r.R()
s=r.a
r.R()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992}}
A.S.prototype={
bw(a){var s,r,q=this
a.a=q.b
s=q.c
a.b=s
r=A.aZ(q.d,t.L)
a.sbK(r)
a.d=q.e
a.e=q.f
a.f=q.r&&s.gN()},
gb_(){var s,r,q=this,p=q.r?" (dotted quarter)":""
p=A.e([""+q.b+" BPM"+p,q.c.ga8()],t.s)
s=q.e
if(s!==B.f){r=A.ej(" \\(\\d\\)")
p.push(A.fI(s.d,r,""))}if((s.c&1)===0&&q.f>50)p.push("swing "+q.f+"%")
return B.a.M(p," \xb7 ")},
bN(){var s,r,q,p=this,o=p.c.gK(),n=A.e([],t.s)
for(s=p.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.U)(s),++q)n.push(s[q].b)
return A.eX(["name",p.a,"bpm",p.b,"meter",o,"levels",n,"sub",p.e.b,"swing",p.f,"dotted",p.r],t.N,t.K)}}
A.e7.prototype={
$6$dotted$sub$swing(a,b,c,d,e,f){var s=A.b0(c)
return new A.S(a,b,s,s.V(),e,f,d)},
$3(a,b,c){return this.$6$dotted$sub$swing(a,b,c,!1,B.f,50)},
$4$sub(a,b,c,d){return this.$6$dotted$sub$swing(a,b,c,!1,d,50)},
$5$sub$swing(a,b,c,d,e){return this.$6$dotted$sub$swing(a,b,c,!1,d,e)},
$4$dotted(a,b,c,d){return this.$6$dotted$sub$swing(a,b,c,d,B.f,50)},
$S:17}
A.J.prototype={
aC(){return"Level."+this.b}}
A.co.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:18}
A.cp.prototype={
$0(){return B.l},
$S:19}
A.ai.prototype={
aC(){return"Voice."+this.b}}
A.C.prototype={
aC(){return"Subdivision."+this.b}}
A.dc.prototype={
$1(a){return t.Y.a(a).b===this.a},
$S:20}
A.dd.prototype={
$0(){return B.f},
$S:21}
A.b_.prototype={
bS(a,b,c){var s,r=this.a
if(r<1||r>32)throw A.c(A.bw(r,"beats","must be 1 to 32"))
s=this.b
if(!B.a.a4(B.n,s))throw A.c(A.bw(s,"unit","must be one of "+A.n(B.n)))
s=this.c
if(B.a.bv(s,new A.cs())||B.a.cC(s,0,new A.ct(),t.S)!==r)throw A.c(A.bw(c,"groups","must add up to "+r))},
gN(){if(this.b>=8){var s=this.a
s=B.b.a9(s,3)===0&&s>3&&B.a.W(this.c,new A.cw())}else s=!1
return s},
gaZ(){var s,r,q,p,o,n=A.e([],t.t)
for(s=this.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
B.a.j(n,q)
q+=o}return n},
ga8(){var s=this,r=s.c,q=B.a.W(r,new A.cx())||s.gN(),p=""+s.a,o=""+s.b
return q?p+"/"+o:p+"/"+o+" ("+B.a.M(r,"+")+")"},
gK(){var s=this.c,r=""+this.a,q=""+this.b
return B.a.W(s,new A.cu())?r+"/"+q:r+"/"+q+":"+B.a.M(s,"+")},
V(){var s,r,q,p,o=this.gaZ(),n=A.eY(o,A.K(o).c)
o=A.e([],t.a)
for(s=this.a,r=this.c,q=0;q<s;++q){if(q===0)p=B.x
else if(n.a4(0,q))p=B.l
else p=B.a.W(r,new A.cv())?B.l:B.y
o.push(p)}return o},
O(a,b){if(b==null)return!1
return b instanceof A.b_&&b.gK()===this.gK()},
gl(a){return B.c.gl(this.gK())}}
A.cs.prototype={
$1(a){return A.t(a)<1},
$S:1}
A.ct.prototype={
$2(a,b){return A.t(a)+A.t(b)},
$S:22}
A.cw.prototype={
$1(a){return A.t(a)===3},
$S:1}
A.cx.prototype={
$1(a){return A.t(a)===1},
$S:1}
A.cu.prototype={
$1(a){return A.t(a)===1},
$S:1}
A.cv.prototype={
$1(a){return A.t(a)===1},
$S:1}
A.cj.prototype={
cv(a){var s,r,q=this,p=60/q.a,o=q.f&&q.b.gN()?p/3:p,n=q.d.c,m=o/n
if((n&1)!==0||q.e===50)return m
s=m*2
r=B.b.n(q.e,50,75)/100
return(a&1)===0?s*r:s*(1-r)},
cQ(a,b){var s,r=this.c
if(!(a<r.length))return A.j(r,a)
s=r[a]
if(s===B.z)return B.h
if(b>0)return B.u
switch(s.a){case 0:r=B.i
break
case 1:r=B.t
break
case 2:r=B.C
break
case 3:r=B.h
break
default:r=null}return r},
sbK(a){this.c=t.B.a(a)}}
A.db.prototype={
aU(a){var s,r=this,q=!1
if(r.a)if(r.c>=1){s=r.b
if(s!==0){q=r.d
q=s>0?B.b.n(B.b.v(q),20,300)>a:B.b.n(B.b.v(q),20,300)<a}}return q},
aW(a,b){var s,r,q,p=this
if(!p.aU(a))return a
s=B.b.n(B.b.v(p.d),20,300)
r=p.b
q=a+r*B.b.bR(b,p.c)
return B.b.n(B.d.v(r>0?Math.min(q,s):Math.max(q,s)),20,300)},
ct(a,b){var s,r=this
if(!r.aU(a)||r.aW(a,b)===B.b.n(B.b.v(r.d),20,300))return null
s=r.c
return s-B.b.a9(b,s)},
cJ(a,b){var s,r,q,p,o,n,m=this
if(!m.a)return""
if(!m.aU(a)){s=m.b
if(s===0)s="Speed trainer: set a change other than 0 BPM."
else{r=m.d
s=s>0?"not above":"not below"
s="Speed trainer: the target ("+r+" BPM) is "+s+" the current tempo, so the tempo will stay put."}return s}q=m.aW(a,b)
p=m.ct(a,b)
if(p==null)return"Speed trainer: reached "+m.d+" BPM. Holding here."
s=m.b
o=s>0?"+":"\u2212"
r=m.d
n=p===1?"":"s"
return"Speed trainer: "+q+" \u2192 "+r+" BPM \xb7 next "+o+Math.abs(s)+" in "+A.n(p)+" bar"+n}}
A.ci.prototype={
bH(a){var s,r=this
if(!r.a||r.c<1||r.b<1)return!1
s=r.b
return B.b.a9(a,s+r.c)>=s}}
A.bz.prototype={
i(a){var s=this
return"Click("+B.d.cL(s.a,3)+", "+s.b.i(0)+", bar "+s.c+", cell "+s.d+"."+s.e+")"}}
A.da.prototype={
aV(){var s,r,q=this
q.d=q.a.a
s=q.r===0&&q.w===0
r=q.f
q.e=s?r:r+1}}
A.de.prototype={
cK(a){var s=this.c
if(s.length!==0&&a-B.a.gbJ(s)>2000)B.a.U(s)
B.a.j(s,a)
if(s.length>5)B.a.aq(s,0)
if(s.length<2)return null
return B.b.n(B.d.v(6e4/((B.a.gbJ(s)-B.a.gaS(s))/(s.length-1))),20,300)}}
A.e3.prototype={
$1(a){return this.a.$0()},
$S:3}
A.e2.prototype={
$1(a){return this.a.$0()},
$S:3}
A.dh.prototype={
T(){var s=0,r=A.iB(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$T=A.iP(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:n.b=!0
m=A.b(v.G.navigator).wakeLock
k=t.m
if(!k.b(m)||n.a!=null){s=1
break}p=4
l=A.aT(A.b(m),"request","screen",null,k)
s=7
return A.i5(A.fG(l,k),$async$T)
case 7:k=b
n.a=k
k.toString
A.k(k,"release",new A.di(n))
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
case 6:case 1:return A.i7(q,r)
case 2:return A.i6(o.at(-1),r)}})
return A.i8($async$T,r)},
bL(){var s,r
this.b=!1
s=this.a
this.a=null
if(s!=null)try{A.aT(s,"release",null,null,t.X)}catch(r){}}}
A.di.prototype={
$0(){return this.a.a=null},
$S:0}
A.e6.prototype={
$1(a){A.bo(a)
return null},
$S:23}
A.e9.prototype={
$0(){var s,r=A.dO(this.a.getAttribute("data-theme"))==="light",q=r?"Switch to dark theme":"Switch to light theme",p=this.b
p.setAttribute("aria-label",q)
p.setAttribute("title",q)
s=A.X(p.firstElementChild)
if(s!=null){p=r?"\u263e":"\u2600"
s.textContent=p}},
$S:0}
A.e8.prototype={
$0(){var s=this.a,r=A.dO(s.getAttribute("data-theme"))==="light"?"dark":"light"
s.setAttribute("data-theme",r)
A.Q("ds-theme",r)
this.b.$0()},
$S:0}
A.bR.prototype={
gH(){var s,r=this,q=r.d
if(q===$){s=r.a
q=r.d=new A.da(s,r.b,r.c,s.a)}return q},
gaB(){var s,r=this,q=r.aR
if(q===$){s=A.aH(r.gc1())
r.aR!==$&&A.eF()
r.aR=s
q=s}return q},
cR(){var s,r,q,p=this,o="input",n="change",m="click"
p.cf()
p.c5()
p.bX()
A.k(p.f,o,new A.cM(p))
s=p.e
A.k(s,o,new A.cN(p))
A.k(s,n,new A.cO(p))
s=t.m
A.k(A.d("bpm-down",s),m,new A.cZ(p))
A.k(A.d("bpm-up",s),m,new A.d_(p))
A.k(A.d("bpm-down-5",s),m,new A.d0(p))
A.k(A.d("bpm-up-5",s),m,new A.d1(p))
r=p.gcM()
A.k(p.x,m,r)
q=p.gcn()
A.k(A.d("tap",s),m,q)
A.k(p.z,m,r)
A.k(A.d("q-tap",s),m,q)
A.k(A.d("q-down",s),m,new A.d2(p))
A.k(A.d("q-up",s),m,new A.d3(p))
q=v.G
A.b(q.document).addEventListener("scroll",A.aH(new A.d4(p)))
A.jb("resize",p.gcP())
r=p.gc9()
A.k(p.ay,n,r)
A.k(p.ch,n,r)
A.k(p.CW,n,new A.d5(p))
A.k(p.dx,n,new A.cP(p))
A.k(A.d("reset-accents",s),m,new A.cQ(p))
A.k(p.dy,n,new A.cR(p))
A.k(p.fx,o,new A.cS(p))
A.k(p.go,n,new A.cT(p))
A.k(p.id,o,new A.cU(p))
A.k(p.k1,o,new A.cV(p))
if("vibrate" in A.b(q.navigator)){p.k2.hidden=!1
A.k(p.k3,n,new A.cW(p))}A.k(p.k4,n,new A.cX(p))
p.cs()
p.cr()
p.cq()
A.b(q.document).addEventListener("visibilitychange",A.aH(new A.cY(p)))
p.bk()},
c5(){var s,r,q,p,o,n,m="option"
for(s=this.ay,r=1;r<=32;++r){q=""+r
p=A.N(m,null,q)
p.setAttribute("value",q)
s.appendChild(p)}for(s=this.ch,o=0;o<4;++o){q=""+B.n[o]
p=A.N(m,null,q)
p.setAttribute("value",q)
s.appendChild(p)}for(s=this.dy,o=0;o<8;++o){n=B.A[o]
q=A.N(m,null,n.d)
q.setAttribute("value",n.b)
s.appendChild(q)}},
bX(){var s,r,q,p,o,n
for(s=["4/4","3/4","2/4","5/4","6/8","7/8","9/8","12/8"],r=s.length,q=this.cy,p=0;p<r;++p){o=s[p]
n=A.N("button","chip",o)
n.setAttribute("type","button")
n.setAttribute("aria-label","Time signature "+o)
A.k(n,"click",new A.cA(this,o))
q.appendChild(n)}},
A(a){var s=B.c.a1(B.c.a1(a)),r=A.eh(s,null)
if(r==null)r=A.hq(s)
return r==null?null:B.d.v(r)},
bj(a,b){var s=this,r=s.a
r.a=B.b.n(B.b.v(a),20,300)
s.gH().aV()
s.bn(b)
if(!s.F)s.aj()
A.Q("ds-last",A.Y(A.e([A.a6("last",r)],t.e)))},
D(a){return this.bj(a,!1)},
bn(a){var s,r=this,q=r.a,p=r.bC=q.a,o=""+p
r.f.value=o
if(!a)r.e.value=o
r.w.textContent=A.jf(p)
r.Q.textContent=o
if(q.f&&q.b.gN())s="dotted quarter"
else{switch(q.b.b){case 2:q="half note"
break
case 4:q="quarter note"
break
case 8:q="eighth note"
break
default:q="sixteenth note"
break}s=q}r.r.textContent="Beats per minute, counting each "+s},
S(){return this.bn(!1)},
bp(){var s=this,r=v.G,q=s.cA.cK(A.H(A.b(r.performance).now())),p=s.bD
if(p!=null)r.clearTimeout(p)
if(q==null){s.u("Tap again in time with the beat.")
return}s.D(q)
s.bD=A.t(r.setTimeout(A.bp(new A.cI(s)),900))},
ca(){var s,r=this,q=r.A(A.p(r.ay.value))
if(q==null)q=4
s=r.A(A.p(r.ch.value))
r.aK(A.ah(q,s==null?4:s,null))},
aK(a){var s=this,r=s.a,q=a.a===r.b.a&&B.a.M(a.c,"+")===B.a.M(r.b.c,"+")
if(!a.gN())r.f=!1
if(!q)r.c=a.V()
r.b=a
s.bl()
s.av()
s.S()
A.Q("ds-last",A.Y(A.e([A.a6("last",r)],t.e)))},
bl(){var s,r,q,p,o,n,m,l=this,k=l.a,j=k.b,i=j.a,h=""+i
l.ay.value=h
s=j.b
r=""+s
l.ch.value=r
q=A.j2(i,s)
l.cx.hidden=q.length<2
s=l.CW
s.replaceChildren()
for(i=q.length,p=0;p<q.length;q.length===i||(0,A.U)(q),++p){o=q[p]
n=o.c
n=A.N("option",null,B.a.W(n,new A.cH())?"Every beat":B.a.M(n," + "))
n.setAttribute("value",o.gK())
s.appendChild(n)}s.value=j.gK()
l.db.hidden=!j.gN()
l.dx.checked=k.f
for(k=A.fm(l.cy),i=k.length,r=h+"/"+r,p=0;p<k.length;k.length===i||(0,A.U)(k),++p){m=k[p]
if(A.p(m.textContent)===r){h=j.gK()
s=A.b0(r)
h=h===(s==null?null:s.gK())}else h=!1
m.setAttribute("aria-pressed",""+h)}},
av(){var s,r,q,p,o,n,m,l,k=this,j=null,i="span",h=k.ax
h.replaceChildren()
s=k.an
B.a.U(s)
r=k.a
q=r.b.gaZ()
p=A.eY(q,A.K(q).c)
o=!B.a.W(r.b.c,new A.cy())
for(n=0;n<r.b.a;n=l){m=A.N("button","cell",j)
m.setAttribute("type","button")
if(o&&p.a4(0,n)&&n>0)A.b(m.classList).add("group-start")
l=n+1
m.appendChild(A.N(i,"cell-num",""+l))
q=A.N(i,"cell-mark",j)
q.setAttribute("aria-hidden","true")
m.appendChild(q)
m.appendChild(A.N(i,"cell-level",j))
A.k(m,"click",new A.cz(k,n))
h.appendChild(m)
B.a.j(s,m)
k.bb(n)}k.ae(j)},
bb(a){var s,r,q,p,o,n=this.a.c
if(!(a<n.length))return A.j(n,a)
s=n[a]
n=this.an
if(!(a<n.length))return A.j(n,a)
r=n[a]
for(q=0;q<4;++q){p=B.o[q]
A.z(A.b(r.classList).toggle("lv-"+p.b,p===s))}n=A.fm(r)
if(2>=n.length)return A.j(n,2)
o=s.c
n[2].textContent=o
r.setAttribute("aria-label","Beat "+(a+1)+", "+o+". Press to change.")},
aL(){var s,r=this,q=r.a
r.dy.value=q.d.b
r.fr.hidden=(q.d.c&1)!==0
r.fx.value=""+q.e
s=q.e
A:{if(50===s){q="Straight (50%)"
break A}if(s>=66&&s<=68){q="Triplet swing ("+s+"%)"
break A}if(75===s){q="Dotted feel (75%)"
break A}q=""+s+"%"
break A}r.fy.textContent=q},
cs(){var s,r,q=t.m,p=A.d("speed-on",q),o=A.d("speed-step",q),n=A.d("speed-every",q),m=A.d("speed-target",q),l=A.d("gap-on",q),k=A.d("gap-play",q),j=A.d("gap-mute",q),i=new A.cL(this,p,o,n,m,l,k,j)
for(q=[p,o,n,m,l,k,j],s=q.length,r=0;r<s;++r)A.k(q[r],"change",i)
i.$0()},
bm(a){var s,r,q=this,p=q.RG,o=q.b
p.hidden=!o.a
if(!o.a)return
s=a==null
r=s?0:Math.max(0,a.c-q.gH().e)
p.textContent=o.cJ(s?q.a.a:q.gH().d,r)},
aj(){return this.bm(null)},
cr(){var s,r,q,p=this
p.C=A.fz(A.eB("ds-presets"))
A.d("preset-form",t.m).addEventListener("submit",A.aH(new A.cK(p)))
A.k(p.R8,"click",p.gco())
for(s=A.je(),r=p.rx,q=0;q<7;++q)r.appendChild(p.be(s[q],!0))
p.ah()},
ci(){var s,r,q=this,p={},o=q.ry,n=A.eg(A.p(o.value))
p.a=n
if(n.length===0){s=q.a
p.a=""+s.a+" BPM "+s.b.ga8()}r=B.a.bv(q.C,new A.cF(p))
s=A.ji(q.C,A.a6(p.a,q.a))
q.C=s
A.Q("ds-presets",A.Y(s))
o.value=""
q.ah()
p=p.a
q.u(r?"Updated \u201c"+p+"\u201d.":"Saved \u201c"+p+"\u201d.")},
ah(){var s,r,q,p=this,o=p.p1
o.replaceChildren()
for(s=p.C,r=s.length,q=0;q<s.length;s.length===r||(0,A.U)(s),++q)o.appendChild(p.cc(s[q]))
p.p2.hidden=p.C.length!==0},
c0(a){var s,r,q=this,p=B.a.cF(q.C,new A.cB(a))
if(p<0)return
s=A.aZ(q.C,t.b)
B.a.aq(s,p)
q.C=s
A.Q("ds-presets",A.Y(s))
q.ah()
q.aQ=new A.aG(p,a)
s="Deleted \u201c"+a.a
q.p4.textContent=s+"\u201d."
q.p3.hidden=!1
q.R8.focus()
q.u(s+"\u201d. Press Undo to bring it back.")
r=q.ao
if(r!=null)v.G.clearTimeout(r)
q.ao=A.t(v.G.setTimeout(A.bp(q.gc7()),1e4))},
cp(){var s,r,q,p,o=this,n=o.aQ
if(n==null)return
s=n.a
r=n.b
q=A.aZ(o.C,t.b)
p=A.t(Math.min(s,o.C.length))
A.K(q).c.a(r)
q.$flags&1&&A.bu(q,"insert",2)
if(p<0||p>q.length)A.eE(A.ei(p,null))
q.splice(p,0,r)
o.C=q
A.Q("ds-presets",A.Y(q))
o.ah()
o.b9()
o.u("Restored \u201c"+r.a+"\u201d.")},
b9(){var s,r=this
r.aQ=null
s=r.ao
if(s!=null)v.G.clearTimeout(s)
r.ao=null
if(A.X(A.b(v.G.document).activeElement)===r.R8)r.ry.focus()
r.p3.hidden=!0},
be(a,b){var s,r,q=A.N("li","preset",null),p=A.N("button","preset-load",null)
p.setAttribute("type","button")
s=a.a
p.appendChild(A.N("span","preset-name",s))
p.appendChild(A.N("span","preset-sum",a.gb_()))
A.k(p,"click",new A.cD(this,a))
q.appendChild(p)
if(!b){r=A.N("button","preset-del","\xd7")
r.setAttribute("type","button")
r.setAttribute("aria-label","Delete \u201c"+s+"\u201d")
A.k(r,"click",new A.cE(this,a))
q.appendChild(r)}return q},
cc(a){return this.be(a,!1)},
cf(){var s,r,q,p,o,n,m,l,k,j=this,i=A.fz(A.eB("ds-last"))
if(i.length!==0)B.a.gaS(i).bw(j.a)
try{l=A.eB("ds-prefs")
s=B.j.by(l==null?"{}":l,null)
if(s instanceof A.F){r=s.p(0,"sound")
q=null
if(typeof r=="string"){q=r
l=B.a.a4(B.O,q)}else l=!1
if(l)j.to=q
p=s.p(0,"volume")
o=null
if(typeof p=="number"){o=p
j.x1=J.eH(o,0,1)}n=s.p(0,"subVolume")
m=null
if(typeof n=="number"){m=n
j.x2=J.eH(m,0,1)}j.xr=J.ac(s.p(0,"haptics"),!0)
j.y1=J.ac(s.p(0,"bigFlash"),!0)}}catch(k){if(!(A.Z(k) instanceof A.aQ))throw k}},
a2(){var s=this
return A.Q("ds-prefs",B.j.bz(A.eX(["sound",s.to,"volume",s.x1,"subVolume",s.x2,"haptics",s.xr,"bigFlash",s.y1],t.N,t.K),null))},
bk(){var s=this
s.bl()
s.av()
s.aL()
s.S()
s.go.value=s.to
s.id.value=""+B.d.v(s.x1*100)
s.k1.value=""+B.d.v(s.x2*100)
s.k3.checked=s.xr
s.k4.checked=s.y1},
cq(){A.b(v.G.document).addEventListener("keydown",A.aH(new A.cJ(this)))},
cN(){var s,r,q,p,o,n,m,l,k=this
if(k.F){k.F=!1
s=k.am
if(s!=null)v.G.clearInterval(s)
r=k.a6
if(r!=null)v.G.cancelAnimationFrame(r)
q=k.L
if(q!=null)q.disconnect()
k.L=null
q=k.y2
if(q!=null)A.b(q.suspend())
B.a.U(k.X)
k.Y.bL()
q=k.a
p=q.a
o=k.b
if(o.a)q.a=k.gH().d
k.ae(null)
k.ai(!1)
k.S()
k.aj()
k.u(o.a?"Stopped. You reached "+p+" BPM.":"Stopped.")}else{n=k.y2
if(n==null)n=k.y2=A.b(new v.G.AudioContext())
A.eD()
A.b(n.resume())
q=A.b(n.createGain())
A.b(q.connect(A.b(n.destination)))
k.L=q
A.b(q.gain).value=k.x1
k.F=!0
q=k.gH()
q.x=q.f=q.r=q.w=q.e=0
q.d=q.a.a
B.a.U(k.X)
k.a5=null
k.al=A.H(n.currentTime)+0.08
k.aM()
q=v.G
m=k.Z
if(m===$){l=A.bp(k.gbs())
k.Z!==$&&A.eF()
k.Z=l
m=l}k.am=A.t(q.setInterval(m,25))
k.a6=A.t(q.requestAnimationFrame(k.gaB()))
k.ai(!0)
k.Y.T()
q=k.a
k.u("Playing at "+q.a+" BPM, "+q.b.ga8()+".")}return null},
cl(){var s,r,q,p=this,o=p.y2
if(o==null)o=p.y2=A.b(new v.G.AudioContext())
A.eD()
A.b(o.resume())
s=A.b(o.createGain())
A.b(s.connect(A.b(o.destination)))
p.L=s
A.b(s.gain).value=p.x1
p.F=!0
s=p.gH()
s.x=s.f=s.r=s.w=s.e=0
s.d=s.a.a
B.a.U(p.X)
p.a5=null
p.al=A.H(o.currentTime)+0.08
p.aM()
s=v.G
r=p.Z
if(r===$){q=A.bp(p.gbs())
p.Z!==$&&A.eF()
p.Z=q
r=q}p.am=A.t(s.setInterval(r,25))
p.a6=A.t(s.requestAnimationFrame(p.gaB()))
p.ai(!0)
p.Y.T()
s=p.a
p.u("Playing at "+s.a+" BPM, "+s.b.ga8()+".")},
cm(){var s,r,q,p,o,n=this
n.F=!1
s=n.am
if(s!=null)v.G.clearInterval(s)
r=n.a6
if(r!=null)v.G.cancelAnimationFrame(r)
q=n.L
if(q!=null)q.disconnect()
n.L=null
q=n.y2
if(q!=null)A.b(q.suspend())
B.a.U(n.X)
n.Y.bL()
q=n.a
p=q.a
o=n.b
if(o.a)q.a=n.gH().d
n.ae(null)
n.ai(!1)
n.S()
n.aj()
n.u(o.a?"Stopped. You reached "+p+" BPM.":"Stopped.")},
ai(a){var s,r,q,p,o,n
for(s=[this.x,this.z],r=s.length,q=""+a,p=0;p<r;++p){o=s[p]
n=a?"Stop":"Start"
o.textContent=n
o.setAttribute("aria-pressed",q)
A.z(A.b(o.classList).toggle("is-running",a))}},
aX(){var s=A.b(this.x.getBoundingClientRect()),r=A.H(s.bottom)>0&&A.H(s.top)<A.H(v.G.innerHeight),q=this.y
if(A.z(q.hidden)===r)return
q.hidden=r
A.z(A.b(A.b(A.b(v.G.document).body).classList).toggle("has-transport",!r))},
aM(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.y2,f=h.L
if(!h.F||g==null||f==null)return
s=A.z(A.b(v.G.document).hidden)?1.5:0.12
for(r=h.X;;){q=h.a5
if(q==null){p=h.gH()
o=p.r
n=p.a
if(o>=n.b.a){o=p.w=p.r=0;++p.f}m=p.w
if(m>=n.d.c)m=p.w=0
if(o===0&&m===0&&p.b.a)n.a=p.b.aW(p.d,p.f-p.e)
l=p.c.bH(p.f)?B.h:n.cQ(p.r,p.w)
o=p.x
m=p.f
k=p.r
j=p.w
q=new A.bz(o,l,m,k,j,n.a)
p.x=o+n.cv(j)
if(++p.w>=n.d.c){p.w=0
if(++p.r>=n.b.a){p.r=0;++p.f}}}p=h.al
o=q.a
i=p+o
if(i<A.H(g.currentTime)){p+=A.H(g.currentTime)+0.05-i
h.al=p
i=p+o}if(i>=A.H(g.currentTime)+s){h.a5=q
break}h.a5=null
h.aI(g,f,q.b,i)
B.a.j(r,new A.aG(i,q))}while(r.length>128)B.a.aq(r,0)},
aI(a,b,c,d){var s,r,q,p,o,n,m=this
switch(c.a){case 0:s=1
break
case 1:s=0.6
break
case 2:s=0.24
break
case 3:s=0.36*m.x2
break
case 4:s=0
break
default:s=null}if(s<0.005)return
r=c===B.i
q=c===B.u
switch(m.to){case"beep":if(r)p=1760
else p=q?880:1320
m.bu(a,b,"sine",p,s,d,0.05)
break
case"stick":if(r)p=3200
else p=q?1800:2500
m.ba(a,b,p,s*1.4,d)
break
default:if(r)o=1250
else o=q?760:950
n=A.b(a.createBiquadFilter())
n.type="bandpass"
A.b(n.connect(b))
A.b(n.frequency).value=o
A.b(n.Q).value=6
m.bu(a,n,"triangle",o,s*2.2,d,0.04)
m.ba(a,b,o*2,s*0.25,d)}},
bu(a,b,c,d,e,f,g){var s,r,q,p=A.b(a.createOscillator())
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
ba(a,b,c,d,e){var s,r,q,p,o=this.bA
if(o==null)o=this.bA=this.c8(a)
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
c8(a){var s,r,q=B.d.v(A.H(a.sampleRate)*0.05),p=A.b(a.createBuffer(1,q,A.H(a.sampleRate))),o=t.E.a(p.getChannelData(0)),n=new A.dH()
n.bT(7)
for(s=0;s<q;++s){r=n.cI()
o.$flags&2&&A.bu(o)
if(!(s<o.length))return A.j(o,s)
o[s]=r*2-1}return p},
c2(a){var s,r,q,p,o=this
A.H(a)
s=o.y2
if(!o.F||s==null)return
r=o.X
q=null
for(;;){if(!(r.length!==0&&B.a.gaS(r).a<=A.H(s.currentTime)))break
p=B.a.aq(r,0).b
if(p.e===0)q=p}if(q!=null)o.ae(q)
o.a6=A.t(v.G.requestAnimationFrame(o.gaB()))},
ae(a){var s,r,q,p,o,n=this,m=a==null,l=m?null:a.d
if(l==null)l=-1
if(m){for(m=n.an,s=m.length,r=0;r<m.length;m.length===s||(0,A.U)(m),++r)A.z(A.b(m[r].classList).toggle("is-on",!1))
n.as.className="flash"
n.at.textContent="Not playing"
return}for(m=n.an,q=0;q<m.length;++q)A.z(A.b(m[q].classList).toggle("is-on",q===l))
m=a.c
s=""+(m+1)
m=n.c.bH(m)?"Bar "+s+" \xb7 silent: keep the time going":"Bar "+s+" \xb7 Beat "+(l+1)+" of "+n.a.b.a
n.at.textContent=m
p=a.b
A:{if(B.i===p){m="is-accent"
break A}if(B.t===p||B.u===p){m="is-normal"
break A}if(B.C===p){m="is-ghost"
break A}if(B.h===p){m="is-silent"
break A}m=null}s=n.y1&&p!==B.h?" is-big":""
n.as.className="flash "+m+s
o=n.bB
if(o!=null)v.G.clearTimeout(o)
m=v.G
n.bB=A.t(m.setTimeout(A.bp(new A.cC(n)),90))
if(n.xr&&p!==B.h)A.jj(p===B.i?45:20)
if(n.b.a&&a.d===0)n.bm(a)
if(a.f!==n.bC&&A.X(A.b(m.document).activeElement)!==n.e)n.S()},
u(a){this.ok.textContent=a
return a},
bi(a){var s=this.bE
if(s!=null)v.G.clearTimeout(s)
this.bE=A.t(v.G.setTimeout(A.bp(new A.cG(this,a)),600))}}
A.cM.prototype={
$0(){var s=this.a,r=s.A(A.p(s.f.value))
return s.D(r==null?s.a.a:r)},
$S:0}
A.cN.prototype={
$0(){var s=this.a,r=s.A(A.p(s.e.value))
if(r!=null&&r>=20&&r<=300)s.bj(r,!0)},
$S:0}
A.cO.prototype={
$0(){var s=this.a,r=s.A(A.p(s.e.value))
return s.D(r==null?s.a.a:r)},
$S:0}
A.cZ.prototype={
$0(){var s=this.a
return s.D(s.a.a+-1)},
$S:0}
A.d_.prototype={
$0(){var s=this.a
return s.D(s.a.a+1)},
$S:0}
A.d0.prototype={
$0(){var s=this.a
return s.D(s.a.a+-5)},
$S:0}
A.d1.prototype={
$0(){var s=this.a
return s.D(s.a.a+5)},
$S:0}
A.d2.prototype={
$0(){var s=this.a
return s.D(s.a.a+-1)},
$S:0}
A.d3.prototype={
$0(){var s=this.a
return s.D(s.a.a+1)},
$S:0}
A.d4.prototype={
$1(a){return this.a.aX()},
$S:3}
A.d5.prototype={
$0(){var s=this.a,r=A.b0(A.p(s.CW.value))
if(r!=null)s.aK(r)},
$S:0}
A.cP.prototype={
$0(){var s=this.a,r=s.a
r.f=A.z(s.dx.checked)
s.S()
A.Q("ds-last",A.Y(A.e([A.a6("last",r)],t.e)))},
$S:0}
A.cQ.prototype={
$0(){var s=this.a,r=s.a
r.sbK(r.b.V())
s.av()
A.Q("ds-last",A.Y(A.e([A.a6("last",r)],t.e)))
s.u("Accents reset.")},
$S:0}
A.cR.prototype={
$0(){var s=this.a,r=s.a
r.d=A.f6(A.p(s.dy.value))
s.aL()
A.Q("ds-last",A.Y(A.e([A.a6("last",r)],t.e)))},
$S:0}
A.cS.prototype={
$0(){var s=this.a,r=s.a,q=s.A(A.p(s.fx.value))
r.e=q==null?50:q
s.aL()
A.Q("ds-last",A.Y(A.e([A.a6("last",r)],t.e)))},
$S:0}
A.cT.prototype={
$0(){var s,r,q,p=this.a
p.to=A.p(p.go.value)
p.a2()
if(!p.F){s=p.y2
if(s==null)s=p.y2=A.b(new v.G.AudioContext())
A.eD()
A.b(s.resume())
r=A.b(s.createGain())
A.b(r.connect(A.b(s.destination)))
A.b(r.gain).value=p.x1
q=A.H(s.currentTime)+0.05
p.aI(s,r,B.i,q)
p.aI(s,r,B.t,q+0.25)}},
$S:0}
A.cU.prototype={
$0(){var s,r=this.a,q=r.A(A.p(r.id.value))
q=(q==null?80:q)/100
r.x1=q
s=r.L
if(s!=null)A.b(s.gain).value=q
r.a2()},
$S:0}
A.cV.prototype={
$0(){var s=this.a,r=s.A(A.p(s.k1.value))
s.x2=(r==null?60:r)/100
s.a2()},
$S:0}
A.cW.prototype={
$0(){var s=this.a
s.xr=A.z(s.k3.checked)
s.a2()},
$S:0}
A.cX.prototype={
$0(){var s=this.a
s.y1=A.z(s.k4.checked)
s.a2()},
$S:0}
A.cY.prototype={
$1(a){var s
if(!A.z(A.b(v.G.document).hidden)){s=this.a
s=s.F&&s.Y.b}else s=!1
if(s)this.a.Y.T()},
$S:25}
A.cA.prototype={
$0(){var s=this.a,r=this.b,q=A.b0(r)
q.toString
s.aK(q)
s.u("Time signature "+A.b0(r).ga8()+".")},
$S:0}
A.cI.prototype={
$0(){var s=this.a
return s.u("Tempo set to "+s.a.a+" BPM.")},
$S:0}
A.cH.prototype={
$1(a){return A.t(a)===1},
$S:1}
A.cy.prototype={
$1(a){return A.t(a)===1},
$S:1}
A.cz.prototype={
$0(){var s=this.a,r=s.a,q=r.c,p=this.b
if(!(p<q.length))return A.j(q,p)
B.a.J(q,p,B.o[(q[p].a+1)%4])
s.bb(p)
A.Q("ds-last",A.Y(A.e([A.a6("last",r)],t.e)))
r=r.c
if(!(p<r.length))return A.j(r,p)
s.u("Beat "+(p+1)+": "+r[p].c+".")},
$S:0}
A.cL.prototype={
$0(){var s,r=this,q=r.a,p=q.b
p.a=A.z(r.b.checked)
s=q.A(A.p(r.c.value))
p.b=B.b.n(s==null?4:s,-50,50)
s=q.A(A.p(r.d.value))
p.c=B.b.n(s==null?4:s,1,64)
s=q.A(A.p(r.e.value))
p.d=B.b.n(B.b.v(s==null?140:s),20,300)
p=q.c
p.a=A.z(r.f.checked)
s=q.A(A.p(r.r.value))
p.b=B.b.n(s==null?2:s,1,64)
s=q.A(A.p(r.w.value))
p.c=B.b.n(s==null?2:s,1,64)
q.gH().aV()
q.aj()},
$S:0}
A.cK.prototype={
$1(a){A.b(a).preventDefault()
this.a.ci()},
$S:9}
A.cF.prototype={
$1(a){return t.b.a(a).a.toLowerCase()===this.a.a.toLowerCase()},
$S:10}
A.cB.prototype={
$1(a){return t.b.a(a).a===this.a.a},
$S:10}
A.cD.prototype={
$0(){var s=this.b,r=this.a,q=r.a
s.bw(q)
r.gH().aV()
r.bk()
A.Q("ds-last",A.Y(A.e([A.a6("last",q)],t.e)))
r.u("Loaded \u201c"+s.a+"\u201d: "+s.gb_()+".")},
$S:0}
A.cE.prototype={
$0(){return this.a.c0(this.b)},
$S:0}
A.cJ.prototype={
$1(a){var s,r,q,p,o,n,m=this
A.b(a)
if(A.z(a.ctrlKey)||A.z(a.metaKey)||A.z(a.altKey))return
s=A.X(a.target)
r=s==null?null:A.p(s.tagName)
if(r==null)r=""
s=!(r==="INPUT"||r==="SELECT"||r==="TEXTAREA")
q=!s||r==="BUTTON"||r==="A"||r==="SUMMARY"
A:{p=A.p(a.key)
if(" "===p&&!q){a.preventDefault()
s=m.a
if(s.F)s.cm()
else s.cl()
break A}if("ArrowUp"===p&&s){a.preventDefault()
s=m.a
o=A.z(a.shiftKey)?10:1
n=s.a
s.D(n.a+o)
s.bi(""+n.a+" BPM")
break A}if("ArrowDown"===p&&s){a.preventDefault()
s=m.a
o=A.z(a.shiftKey)?-10:-1
n=s.a
s.D(n.a+o)
s.bi(""+n.a+" BPM")
break A}if(("t"===p||"T"===p)&&s&&!A.z(a.repeat))m.a.bp()}},
$S:9}
A.cC.prototype={
$0(){return A.b(this.a.as.classList).add("is-fading")},
$S:0}
A.cG.prototype={
$0(){return this.a.u(this.b)},
$S:0}
A.dX.prototype={
$2(a,b){var s,r,q,p,o,n
t.V.a(b)
s=this.a
if(s.a>=12)return
if(a===0){s.j(0,B.a.M(b,"+"))
return}for(s=[2,3],r=s.length,q=t.S,p=0;p<r;++p){o=s[p]
if(o<=a&&a-o!==1){n=A.aZ(b,q)
n.push(o)
this.$2(a-o,n)}}},
$S:26};(function aliases(){var s=J.a5.prototype
s.bQ=s.i})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
s(A,"iR","hD",4)
s(A,"iS","hE",4)
s(A,"iT","hF",4)
r(A,"fx","iK",0)
s(A,"iV","ic",5)
var o
q(o=A.bR.prototype,"gcn","bp",0)
q(o,"gc9","ca",0)
q(o,"gco","cp",0)
q(o,"gc7","b9",0)
q(o,"gcM","cN",0)
q(o,"gcP","aX",0)
q(o,"gbs","aM",0)
p(o,"gc1","c2",24)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.h,null)
q(A.h,[A.ee,J.bH,A.b8,J.ar,A.q,A.d9,A.f,A.av,A.G,A.al,A.df,A.d7,A.aP,A.bi,A.a3,A.F,A.cq,A.bP,A.bL,A.dG,A.T,A.cb,A.dL,A.dJ,A.c7,A.O,A.c9,A.a2,A.y,A.c8,A.cf,A.dj,A.aA,A.ce,A.aE,A.r,A.bC,A.bE,A.dE,A.dq,A.b9,A.dr,A.aQ,A.w,A.cg,A.aB,A.d6,A.dH,A.S,A.b_,A.cj,A.db,A.ci,A.bz,A.da,A.de,A.dh,A.bR])
q(J.bH,[J.bJ,J.aS,J.aV,J.aU,J.aW,J.at,J.au])
q(J.aV,[J.a5,J.o,A.ax,A.b3])
q(J.a5,[J.c_,J.aC,J.a4])
r(J.bI,A.b8)
r(J.ck,J.o)
q(J.at,[J.aR,J.bK])
q(A.q,[A.bO,A.a0,A.bM,A.c6,A.c2,A.ca,A.aY,A.bx,A.R,A.bb,A.c5,A.ba,A.bD])
r(A.aO,A.f)
q(A.aO,[A.ag,A.af])
r(A.aF,A.al)
r(A.aG,A.aF)
r(A.b5,A.a0)
q(A.a3,[A.bA,A.bB,A.c4,A.dY,A.e_,A.dm,A.dl,A.dP,A.dA,A.e4,A.e5,A.e7,A.co,A.dc,A.cs,A.cw,A.cx,A.cu,A.cv,A.e3,A.e2,A.e6,A.d4,A.cY,A.cH,A.cy,A.cK,A.cF,A.cB,A.cJ])
q(A.c4,[A.c3,A.as])
q(A.F,[A.aX,A.cc])
q(A.bB,[A.dZ,A.dQ,A.dT,A.dB,A.cr,A.dF,A.ct,A.dX])
q(A.b3,[A.bS,A.az])
q(A.az,[A.bd,A.bf])
r(A.be,A.bd)
r(A.b1,A.be)
r(A.bg,A.bf)
r(A.b2,A.bg)
q(A.b1,[A.ay,A.bT])
q(A.b2,[A.bU,A.bV,A.bW,A.bX,A.bY,A.b4,A.bZ])
r(A.bj,A.ca)
q(A.bA,[A.dn,A.dp,A.dK,A.ds,A.dw,A.dv,A.du,A.dt,A.dz,A.dy,A.dx,A.dk,A.dS,A.cp,A.dd,A.di,A.e9,A.e8,A.cM,A.cN,A.cO,A.cZ,A.d_,A.d0,A.d1,A.d2,A.d3,A.d5,A.cP,A.cQ,A.cR,A.cS,A.cT,A.cU,A.cV,A.cW,A.cX,A.cA,A.cI,A.cz,A.cL,A.cD,A.cE,A.cC,A.cG])
r(A.bc,A.c9)
r(A.bh,A.aA)
r(A.aj,A.bh)
r(A.cd,A.ag)
r(A.bN,A.aY)
r(A.cl,A.bC)
q(A.bE,[A.cn,A.cm])
r(A.dD,A.dE)
q(A.R,[A.b6,A.bG])
q(A.dq,[A.J,A.ai,A.C])
s(A.bd,A.r)
s(A.be,A.G)
s(A.bf,A.r)
s(A.bg,A.G)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",m:"double",aq:"num",x:"String",D:"bool",w:"Null",i:"List",h:"Object",bQ:"Map",u:"JSObject"},mangledNames:{},types:["~()","D(a)","~(@)","~(h?)","~(~())","@(@)","w(@)","w()","~(h?,h?)","w(u)","D(S)","@(@,x)","@(x)","w(~())","w(@,a7)","~(a,@)","w(h,a7)","S(x,a,x{dotted:D,sub:C,swing:a})","D(J)","J()","D(C)","C()","a(a,a)","w(h)","~(m)","w(h?)","~(a,i<a>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aG&&a.b(c.a)&&b.b(c.b)}}
A.hY(v.typeUniverse,JSON.parse('{"c_":"a5","aC":"a5","a4":"a5","jp":"ax","bJ":{"D":[],"l":[]},"aS":{"l":[]},"aV":{"u":[]},"a5":{"u":[]},"o":{"i":["1"],"u":[],"f":["1"]},"bI":{"b8":[]},"ck":{"o":["1"],"i":["1"],"u":[],"f":["1"]},"at":{"m":[],"aq":[]},"aR":{"m":[],"a":[],"aq":[],"l":[]},"bK":{"m":[],"aq":[],"l":[]},"au":{"x":[],"d8":[],"l":[]},"bO":{"q":[]},"aO":{"f":["1"]},"ag":{"f":["1"]},"aG":{"aF":[],"al":[]},"b5":{"a0":[],"q":[]},"bM":{"q":[]},"c6":{"q":[]},"bi":{"a7":[]},"a3":{"ad":[]},"bA":{"ad":[]},"bB":{"ad":[]},"c4":{"ad":[]},"c3":{"ad":[]},"as":{"ad":[]},"c2":{"q":[]},"aX":{"F":["1","2"],"eW":["1","2"],"bQ":["1","2"],"F.K":"1","F.V":"2"},"af":{"f":["1"]},"aF":{"al":[]},"bL":{"ht":[],"d8":[]},"ay":{"r":["m"],"i":["m"],"I":["m"],"u":[],"f":["m"],"G":["m"],"l":[],"r.E":"m"},"ax":{"u":[],"l":[]},"b3":{"u":[]},"bS":{"u":[],"l":[]},"az":{"I":["1"],"u":[]},"b1":{"r":["m"],"i":["m"],"I":["m"],"u":[],"f":["m"],"G":["m"]},"b2":{"r":["a"],"i":["a"],"I":["a"],"u":[],"f":["a"],"G":["a"]},"bT":{"r":["m"],"i":["m"],"I":["m"],"u":[],"f":["m"],"G":["m"],"l":[],"r.E":"m"},"bU":{"r":["a"],"i":["a"],"I":["a"],"u":[],"f":["a"],"G":["a"],"l":[],"r.E":"a"},"bV":{"r":["a"],"i":["a"],"I":["a"],"u":[],"f":["a"],"G":["a"],"l":[],"r.E":"a"},"bW":{"r":["a"],"i":["a"],"I":["a"],"u":[],"f":["a"],"G":["a"],"l":[],"r.E":"a"},"bX":{"r":["a"],"i":["a"],"I":["a"],"u":[],"f":["a"],"G":["a"],"l":[],"r.E":"a"},"bY":{"r":["a"],"i":["a"],"I":["a"],"u":[],"f":["a"],"G":["a"],"l":[],"r.E":"a"},"b4":{"r":["a"],"i":["a"],"I":["a"],"u":[],"f":["a"],"G":["a"],"l":[],"r.E":"a"},"bZ":{"r":["a"],"i":["a"],"I":["a"],"u":[],"f":["a"],"G":["a"],"l":[],"r.E":"a"},"ca":{"q":[]},"bj":{"a0":[],"q":[]},"O":{"q":[]},"bc":{"c9":["1"]},"y":{"ae":["1"]},"aj":{"aA":["1"],"f":["1"]},"F":{"bQ":["1","2"]},"aA":{"f":["1"]},"bh":{"aA":["1"],"f":["1"]},"cc":{"F":["x","@"],"bQ":["x","@"],"F.K":"x","F.V":"@"},"cd":{"ag":["x"],"f":["x"],"ag.E":"x"},"aY":{"q":[]},"bN":{"q":[]},"m":{"aq":[]},"a":{"aq":[]},"i":{"f":["1"]},"x":{"d8":[]},"bx":{"q":[]},"a0":{"q":[]},"R":{"q":[]},"b6":{"q":[]},"bG":{"q":[]},"bb":{"q":[]},"c5":{"q":[]},"ba":{"q":[]},"bD":{"q":[]},"b9":{"q":[]},"cg":{"a7":[]},"aB":{"hx":[]},"hb":{"i":["a"],"f":["a"]},"hB":{"i":["a"],"f":["a"]},"hA":{"i":["a"],"f":["a"]},"h9":{"i":["a"],"f":["a"]},"hy":{"i":["a"],"f":["a"]},"ha":{"i":["a"],"f":["a"]},"hz":{"i":["a"],"f":["a"]},"h7":{"i":["m"],"f":["m"]},"h8":{"i":["m"],"f":["m"]}}'))
A.hX(v.typeUniverse,JSON.parse('{"aO":1,"az":1,"bh":1,"bC":2,"bE":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dV
return{n:s("O"),C:s("q"),Z:s("ad"),U:s("f<@>"),O:s("o<u>"),a:s("o<J>"),J:s("o<bQ<x,h>>"),c:s("o<b_>"),f:s("o<h>"),e:s("o<S>"),d:s("o<+(m,bz)>"),s:s("o<x>"),w:s("o<m>"),q:s("o<@>"),t:s("o<a>"),T:s("aS"),m:s("u"),g:s("a4"),p:s("I<@>"),L:s("J"),B:s("i<J>"),j:s("i<@>"),V:s("i<a>"),E:s("ay"),P:s("w"),K:s("h"),b:s("S"),W:s("jq"),h:s("+()"),l:s("a7"),N:s("x"),Y:s("C"),k:s("l"),r:s("a0"),D:s("aC"),_:s("y<@>"),y:s("D"),x:s("D(h)"),i:s("m"),z:s("@"),G:s("@()"),v:s("@(h)"),Q:s("@(h,a7)"),S:s("a"),bc:s("ae<w>?"),aQ:s("u?"),aL:s("i<@>?"),X:s("h?"),aD:s("x?"),F:s("a2<@,@>?"),R:s("ce?"),u:s("D?"),I:s("m?"),a3:s("a?"),ae:s("aq?"),o:s("aq"),H:s("~"),M:s("~()"),cQ:s("~(x,@)"),A:s("~(a,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.J=J.bH.prototype
B.a=J.o.prototype
B.b=J.aR.prototype
B.d=J.at.prototype
B.c=J.au.prototype
B.K=J.a4.prototype
B.L=J.aV.prototype
B.B=J.c_.prototype
B.r=J.aC.prototype
B.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.D=function() {
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
B.I=function(getTagFallback) {
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
B.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.H=function(hooks) {
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
B.G=function(hooks) {
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
B.F=function(hooks) {
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
B.w=function(hooks) { return hooks; }

B.j=new A.cl()
B.m=new A.d9()
B.e=new A.dj()
B.k=new A.cg()
B.M=new A.cm(null)
B.N=new A.cn(null)
B.x=new A.J("Accent",0,"accent")
B.y=new A.J("Ghost",2,"ghost")
B.z=new A.J("Mute",3,"mute")
B.l=new A.J("Normal",1,"normal")
B.n=s([2,4,8,16],t.t)
B.f=new A.C(1,"None (beats only)",0,"none")
B.q=new A.C(2,"Eighth notes (2)",1,"eighths")
B.T=new A.C(3,"Triplets (3)",2,"triplets")
B.p=new A.C(4,"Sixteenth notes (4)",3,"sixteenths")
B.S=new A.C(5,"Quintuplets (5)",4,"quintuplets")
B.R=new A.C(6,"Sextuplets (6)",5,"sextuplets")
B.Q=new A.C(7,"Septuplets (7)",6,"septuplets")
B.P=new A.C(8,"32nd notes (8)",7,"thirtySeconds")
B.A=s([B.f,B.q,B.T,B.p,B.S,B.R,B.Q,B.P],A.dV("o<C>"))
B.O=s(["wood","beep","stick"],t.s)
B.o=s([B.x,B.l,B.y,B.z],t.a)
B.U=A.V("jl")
B.V=A.V("jm")
B.W=A.V("h7")
B.X=A.V("h8")
B.Y=A.V("h9")
B.Z=A.V("ha")
B.a_=A.V("hb")
B.a0=A.V("h")
B.a1=A.V("hy")
B.a2=A.V("hz")
B.a3=A.V("hA")
B.a4=A.V("hB")
B.i=new A.ai(0,"accent")
B.t=new A.ai(1,"normal")
B.C=new A.ai(2,"ghost")
B.u=new A.ai(3,"sub")
B.h=new A.ai(4,"silent")})();(function staticFields(){$.dC=null
$.M=A.e([],t.f)
$.f0=null
$.eM=null
$.eL=null
$.fD=null
$.fw=null
$.fH=null
$.dU=null
$.e0=null
$.ey=null
$.dI=A.e([],A.dV("o<i<h>?>"))
$.aI=null
$.bq=null
$.br=null
$.et=!1
$.v=B.e})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"jo","fL",()=>A.dW("_$dart_dartClosure"))
s($,"jn","ea",()=>A.dW("_$dart_dartClosure_dartJSInterop"))
s($,"jE","fW",()=>A.e([new J.bI()],A.dV("o<b8>")))
s($,"js","fM",()=>A.a1(A.dg({
toString:function(){return"$receiver$"}})))
s($,"jt","fN",()=>A.a1(A.dg({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"ju","fO",()=>A.a1(A.dg(null)))
s($,"jv","fP",()=>A.a1(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jy","fS",()=>A.a1(A.dg(void 0)))
s($,"jz","fT",()=>A.a1(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jx","fR",()=>A.a1(A.f7(null)))
s($,"jw","fQ",()=>A.a1(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"jB","fV",()=>A.a1(A.f7(void 0)))
s($,"jA","fU",()=>A.a1(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"jC","eG",()=>A.hC())
s($,"jD","eb",()=>A.fE(B.a0))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ax,SharedArrayBuffer:A.ax,ArrayBufferView:A.b3,DataView:A.bS,Float32Array:A.ay,Float64Array:A.bT,Int16Array:A.bU,Int32Array:A.bV,Int8Array:A.bW,Uint16Array:A.bX,Uint32Array:A.bY,Uint8ClampedArray:A.b4,CanvasPixelArray:A.b4,Uint8Array:A.bZ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.az.$nativeSuperclassTag="ArrayBufferView"
A.bd.$nativeSuperclassTag="ArrayBufferView"
A.be.$nativeSuperclassTag="ArrayBufferView"
A.b1.$nativeSuperclassTag="ArrayBufferView"
A.bf.$nativeSuperclassTag="ArrayBufferView"
A.bg.$nativeSuperclassTag="ArrayBufferView"
A.b2.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.j9
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()