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
if(a[b]!==s){A.jX(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.f1(b)
return new s(c,this)}:function(){if(s===null)s=A.f1(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.f1(a).prototype
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
f7(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f2(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.f3==null){A.jL()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.fF("Return interceptor for "+A.p(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.dT
if(o==null)o=$.dT=A.ec(n)
p=q[o]}if(p!=null)return p
p=A.jP(a)
if(p!=null)return p
if(typeof a=="function")return B.L
s=Object.getPrototypeOf(a)
if(s==null)return B.C
if(s===Object.prototype)return B.C
if(typeof q=="function"){o=$.dT
if(o==null)o=$.dT=A.ec(n)
Object.defineProperty(q,o,{value:B.u,enumerable:false,writable:true,configurable:true})
return B.u}return B.u},
hT(a,b){if(a<0||a>4294967295)throw A.c(A.aI(a,0,4294967295,"length",null))
return J.hV(new Array(a),b)},
hU(a,b){if(a<0)throw A.c(A.ax("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.h("n<0>"))},
hV(a,b){var s=A.e(a,b.h("n<0>"))
s.$flags=1
return s},
fo(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hW(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.fo(r))break;++b}return b},
hX(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.h(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.fo(q))break}return b},
au(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b_.prototype
return J.bT.prototype}if(typeof a=="string")return J.aB.prototype
if(a==null)return J.b0.prototype
if(typeof a=="boolean")return J.bS.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
if(typeof a=="symbol")return J.b3.prototype
if(typeof a=="bigint")return J.b1.prototype
return a}if(a instanceof A.f)return a
return J.f2(a)},
hg(a){if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
if(typeof a=="symbol")return J.b3.prototype
if(typeof a=="bigint")return J.b1.prototype
return a}if(a instanceof A.f)return a
return J.f2(a)},
hh(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
if(typeof a=="symbol")return J.b3.prototype
if(typeof a=="bigint")return J.b1.prototype
return a}if(a instanceof A.f)return a
return J.f2(a)},
jG(a){if(typeof a=="number")return J.aA.prototype
if(a==null)return a
if(!(a instanceof A.f))return J.aL.prototype
return a},
a2(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.au(a).L(a,b)},
eC(a,b,c){return J.jG(a).p(a,b,c)},
V(a){return J.au(a).gl(a)},
hB(a){return J.hh(a).gbX(a)},
eD(a){return J.hh(a).gF(a)},
fe(a){return J.hg(a).gk(a)},
hC(a){return J.au(a).gn(a)},
bD(a){return J.au(a).i(a)},
bQ:function bQ(){},
bS:function bS(){},
b0:function b0(){},
b2:function b2(){},
ac:function ac(){},
c7:function c7(){},
aL:function aL(){},
ab:function ab(){},
b1:function b1(){},
b3:function b3(){},
n:function n(a){this.$ti=a},
bR:function bR(){},
cv:function cv(a){this.$ti=a},
ay:function ay(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aA:function aA(){},
b_:function b_(){},
bT:function bT(){},
aB:function aB(){}},A={eG:function eG(){},
fr(a){return new A.bX("Field '"+a+"' has been assigned during initialization.")},
a4(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dv(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
f0(a,b,c){return a},
f5(a){var s,r
for(s=$.O.length,r=0;r<s;++r)if(a===$.O[r])return!0
return!1},
fm(){return new A.bg("No element")},
bX:function bX(a){this.a=a},
dq:function dq(){},
aX:function aX(){},
al:function al(){},
aC:function aC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
G:function G(){},
ho(a){var s=A.hn(a)
if(s!=null)return s
return"minified:"+a},
ko(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
p(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bD(a)
return s},
c8(a){var s,r=$.fx
if(r==null)r=$.fx=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
eL(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.h(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
ic(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.c.a9(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
c9(a){var s,r,q,p
if(a instanceof A.f)return A.N(A.bB(a),null)
s=J.au(a)
if(s===B.K||s===B.M||t.D.b(a)){r=B.w(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.N(A.bB(a),null)},
fy(a){var s,r,q
if(a==null||typeof a=="number"||A.eW(a))return J.bD(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a9)return a.i(0)
if(a instanceof A.a8)return a.bH(!0)
s=$.hA()
for(r=0;r<1;++r){q=s[r].d6(a)
if(q!=null)return q}return"Instance of '"+A.c9(a)+"'"},
F(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.bC(s,10)|55296)>>>0,s&1023|56320)}throw A.c(A.aI(a,0,1114111,null,null))},
aH(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ib(a){var s=A.aH(a).getUTCFullYear()+0
return s},
i9(a){var s=A.aH(a).getUTCMonth()+1
return s},
i5(a){var s=A.aH(a).getUTCDate()+0
return s},
i6(a){var s=A.aH(a).getUTCHours()+0
return s},
i8(a){var s=A.aH(a).getUTCMinutes()+0
return s},
ia(a){var s=A.aH(a).getUTCSeconds()+0
return s},
i7(a){var s=A.aH(a).getUTCMilliseconds()+0
return s},
i4(a){var s=a.$thrownJsError
if(s==null)return null
return A.aU(s)},
fz(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.C(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
h(a,b){if(a==null)J.fe(a)
throw A.c(A.hf(a,b))},
hf(a,b){var s,r="index"
if(!A.eY(b))return new A.W(!0,b,r,null)
s=J.fe(a)
if(b<0||b>=s)return A.fl(b,s,a,r)
return A.eM(b,r)},
jw(a){return new A.W(!0,a,null,null)},
c(a){return A.C(a,new Error())},
C(a,b){var s
if(a==null)a=new A.a5()
b.dartException=a
s=A.jY
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
jY(){return J.bD(this.dartException)},
ev(a,b){throw A.C(a,b==null?new Error():b)},
bC(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.ev(A.iY(a,b,c),s)},
iY(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.bh("'"+s+"': Cannot "+o+" "+l+k+n)},
U(a){throw A.c(A.Q(a))},
a6(a){var s,r,q,p,o,n
a=A.jT(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.dx(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
dy(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
fE(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
eH(a,b){var s=b==null,r=s?null:b.method
return new A.bV(a,r,s?null:b.receiver)},
a1(a){var s
if(a==null)return new A.dm(a)
if(a instanceof A.aY){s=a.a
return A.ah(a,s==null?A.bx(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.ah(a,a.dartException)
return A.jv(a)},
ah(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jv(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.bC(r,16)&8191)===10)switch(q){case 438:return A.ah(a,A.eH(A.p(s)+" (Error "+q+")",null))
case 445:case 5007:A.p(s)
return A.ah(a,new A.bc())}}if(a instanceof TypeError){p=$.hq()
o=$.hr()
n=$.hs()
m=$.ht()
l=$.hw()
k=$.hx()
j=$.hv()
$.hu()
i=$.hz()
h=$.hy()
g=p.K(s)
if(g!=null)return A.ah(a,A.eH(A.q(s),g))
else{g=o.K(s)
if(g!=null){g.method="call"
return A.ah(a,A.eH(A.q(s),g))}else if(n.K(s)!=null||m.K(s)!=null||l.K(s)!=null||k.K(s)!=null||j.K(s)!=null||m.K(s)!=null||i.K(s)!=null||h.K(s)!=null){A.q(s)
return A.ah(a,new A.bc())}}return A.ah(a,new A.ce(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bf()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ah(a,new A.W(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bf()
return a},
aU(a){var s
if(a instanceof A.aY)return a.b
if(a==null)return new A.br(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.br(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
el(a){if(a==null)return J.V(a)
if(typeof a=="object")return A.c8(a)
return J.V(a)},
jF(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.C(0,a[s],a[r])}return b},
j7(a,b,c,d,e,f){t.Z.a(a)
switch(A.k(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.dI("Unsupported number of arguments for wrapped closure"))},
bA(a,b){var s=a.$identity
if(!!s)return s
s=A.jA(a,b)
a.$identity=s
return s},
jA(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.j7)},
hJ(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cb().constructor.prototype):Object.create(new A.az(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.fj(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.hF(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.fj(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
hF(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.hD)}throw A.c("Error in functionType of tearoff")},
hG(a,b,c,d){var s=A.fi
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
fj(a,b,c,d){if(c)return A.hI(a,b,d)
return A.hG(b.length,d,a,b)},
hH(a,b,c,d){var s=A.fi,r=A.hE
switch(b?-1:a){case 0:throw A.c(new A.ca("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
hI(a,b,c){var s,r
if($.fg==null)$.fg=A.ff("interceptor")
if($.fh==null)$.fh=A.ff("receiver")
s=b.length
r=A.hH(s,c,a,b)
return r},
f1(a){return A.hJ(a)},
hD(a,b){return A.bw(v.typeUniverse,A.bB(a.a),b)},
fi(a){return a.a},
hE(a){return a.b},
ff(a){var s,r,q,p=new A.az("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.ax("Field name "+a+" not found.",null))},
ec(a){return v.getIsolateTag(a)},
kn(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jP(a){var s,r,q,p,o,n=A.q($.hi.$1(a)),m=$.eb[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eh[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.e4($.ha.$2(a,n))
if(q!=null){m=$.eb[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eh[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.ei(s)
$.eb[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.eh[n]=s
return s}if(p==="-"){o=A.ei(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.hk(a,s)
if(p==="*")throw A.c(A.fF(n))
if(v.leafTags[n]===true){o=A.ei(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.hk(a,s)},
hk(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.f7(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ei(a){return J.f7(a,!1,null,!!a.$iL)},
jR(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.ei(s)
else return J.f7(s,c,null,null)},
jL(){if(!0===$.f3)return
$.f3=!0
A.jM()},
jM(){var s,r,q,p,o,n,m,l
$.eb=Object.create(null)
$.eh=Object.create(null)
A.jK()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hl.$1(o)
if(n!=null){m=A.jR(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jK(){var s,r,q,p,o,n,m=B.E()
m=A.aT(B.F,A.aT(B.G,A.aT(B.x,A.aT(B.x,A.aT(B.H,A.aT(B.I,A.aT(B.J(B.w),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.hi=new A.ee(p)
$.ha=new A.ef(o)
$.hl=new A.eg(n)},
aT(a,b){return a(b)||b},
iF(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.h(b,s)
if(!J.a2(r,b[s]))return!1}return!0},
jC(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
fp(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(A.eE("Illegal RegExp pattern ("+String(o)+")",a))},
jW(a,b,c){var s=a.indexOf(b,c)
return s>=0},
jD(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jT(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
hm(a,b,c){var s,r=b.gcs()
r.lastIndex=0
s=a.replace(r,A.jD(c))
return s},
aQ:function aQ(a,b){this.a=a
this.b=b},
J:function J(a){this.a=a},
be:function be(){},
dx:function dx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bc:function bc(){},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(a){this.a=a},
dm:function dm(a){this.a=a},
aY:function aY(a,b){this.a=a
this.b=b},
br:function br(a){this.a=a
this.b=null},
a9:function a9(){},
bH:function bH(){},
bI:function bI(){},
cc:function cc(){},
cb:function cb(){},
az:function az(a,b){this.a=a
this.b=b},
ca:function ca(a){this.a=a},
aj:function aj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cB:function cB(a,b){this.a=a
this.b=b
this.c=null},
ak:function ak(a,b){this.a=a
this.$ti=b},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ee:function ee(a){this.a=a},
ef:function ef(a){this.a=a},
eg:function eg(a){this.a=a},
a8:function a8(){},
aO:function aO(){},
aP:function aP(){},
bU:function bU(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
dX:function dX(a){this.b=a},
aE:function aE(){},
ba:function ba(){},
c_:function c_(){},
aG:function aG(){},
b8:function b8(){},
b9:function b9(){},
aF:function aF(){},
c0:function c0(){},
c1:function c1(){},
c2:function c2(){},
c3:function c3(){},
c4:function c4(){},
c5:function c5(){},
bb:function bb(){},
c6:function c6(){},
bm:function bm(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
eN(a,b){var s=b.c
return s==null?b.c=A.bu(a,"a3",[b.x]):s},
fA(a){var s=a.w
if(s===6||s===7)return A.fA(a.x)
return s===11||s===12},
ih(a){return a.as},
jS(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
cq(a){return A.e2(v.typeUniverse,a,!1)},
as(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.as(a1,s,a3,a4)
if(r===s)return a2
return A.fN(a1,r,!0)
case 7:s=a2.x
r=A.as(a1,s,a3,a4)
if(r===s)return a2
return A.fM(a1,r,!0)
case 8:q=a2.y
p=A.aS(a1,q,a3,a4)
if(p===q)return a2
return A.bu(a1,a2.x,p)
case 9:o=a2.x
n=A.as(a1,o,a3,a4)
m=a2.y
l=A.aS(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.eT(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aS(a1,j,a3,a4)
if(i===j)return a2
return A.fO(a1,k,i)
case 11:h=a2.x
g=A.as(a1,h,a3,a4)
f=a2.y
e=A.js(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.fL(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aS(a1,d,a3,a4)
o=a2.x
n=A.as(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.eU(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bG("Attempted to substitute unexpected RTI kind "+a0))}},
aS(a,b,c,d){var s,r,q,p,o=b.length,n=A.e3(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.as(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
jt(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.e3(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.as(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
js(a,b,c,d){var s,r=b.a,q=A.aS(a,r,c,d),p=b.b,o=A.aS(a,p,c,d),n=b.c,m=A.jt(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cj()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
hc(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.jI(s)
return a.$S()}return null},
jN(a,b){var s
if(A.fA(b))if(a instanceof A.a9){s=A.hc(a)
if(s!=null)return s}return A.bB(a)},
bB(a){if(a instanceof A.f)return A.ag(a)
if(Array.isArray(a))return A.K(a)
return A.eV(J.au(a))},
K(a){var s=a[v.arrayRti],r=t.q
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
ag(a){var s=a.$ti
return s!=null?s:A.eV(a)},
eV(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.j4(a,s)},
j4(a,b){var s=a instanceof A.a9?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.iO(v.typeUniverse,s.name)
b.$ccache=r
return r},
jI(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.e2(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jH(a){return A.at(A.ag(a))},
f_(a){var s
if(a instanceof A.a8)return A.jE(a.$r,a.aP())
s=a instanceof A.a9?A.hc(a):null
if(s!=null)return s
if(t.k.b(a))return J.hC(a).a
if(Array.isArray(a))return A.K(a)
return A.bB(a)},
at(a){var s=a.r
return s==null?a.r=new A.e1(a):s},
jE(a,b){var s,r,q=b,p=q.length
if(p===0)return t.h
if(0>=p)return A.h(q,0)
s=A.bw(v.typeUniverse,A.f_(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.h(q,r)
s=A.fQ(v.typeUniverse,s,A.f_(q[r]))}return A.bw(v.typeUniverse,s,a)},
a_(a){return A.at(A.e2(v.typeUniverse,a,!1))},
j3(a){var s=this
s.b=A.jq(s)
return s.b(a)},
jq(a){var s,r,q,p,o
if(a===t.K)return A.jd
if(A.av(a))return A.jh
s=a.w
if(s===6)return A.j1
if(s===1)return A.h3
if(s===7)return A.j8
r=A.jp(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.av)){a.f="$i"+q
if(q==="j")return A.jb
if(a===t.m)return A.ja
return A.jg}}else if(s===10){p=A.jC(a.x,a.y)
o=p==null?A.h3:p
return o==null?A.bx(o):o}return A.j_},
jp(a){if(a.w===8){if(a===t.S)return A.eY
if(a===t.i||a===t.o)return A.jc
if(a===t.N)return A.jf
if(a===t.y)return A.eW}return null},
j2(a){var s=this,r=A.iZ
if(A.av(s))r=A.iT
else if(s===t.K)r=A.bx
else if(A.aV(s)){r=A.j0
if(s===t.a3)r=A.iR
else if(s===t.aD)r=A.e4
else if(s===t.u)r=A.iQ
else if(s===t.ae)r=A.fU
else if(s===t.I)r=A.fT
else if(s===t.aQ)r=A.S}else if(s===t.S)r=A.k
else if(s===t.N)r=A.q
else if(s===t.y)r=A.y
else if(s===t.o)r=A.iS
else if(s===t.i)r=A.H
else if(s===t.m)r=A.a
s.a=r
return s.a(a)},
j_(a){var s=this
if(a==null)return A.aV(s)
return A.jO(v.typeUniverse,A.jN(a,s),s)},
j1(a){if(a==null)return!0
return this.x.b(a)},
jg(a){var s,r=this
if(a==null)return A.aV(r)
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.au(a)[s]},
jb(a){var s,r=this
if(a==null)return A.aV(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.au(a)[s]},
ja(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.f)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
h2(a){if(typeof a=="object"){if(a instanceof A.f)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
iZ(a){var s=this
if(a==null){if(A.aV(s))return a}else if(s.b(a))return a
throw A.C(A.h_(a,s),new Error())},
j0(a){var s=this
if(a==null||s.b(a))return a
throw A.C(A.h_(a,s),new Error())},
h_(a,b){return new A.bs("TypeError: "+A.fG(a,A.N(b,null)))},
fG(a,b){return A.bO(a)+": type '"+A.N(A.f_(a),null)+"' is not a subtype of type '"+b+"'"},
R(a,b){return new A.bs("TypeError: "+A.fG(a,b))},
j8(a){var s=this
return s.x.b(a)||A.eN(v.typeUniverse,s).b(a)},
jd(a){return a!=null},
bx(a){if(a!=null)return a
throw A.C(A.R(a,"Object"),new Error())},
jh(a){return!0},
iT(a){return a},
h3(a){return!1},
eW(a){return!0===a||!1===a},
y(a){if(!0===a)return!0
if(!1===a)return!1
throw A.C(A.R(a,"bool"),new Error())},
iQ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.C(A.R(a,"bool?"),new Error())},
H(a){if(typeof a=="number")return a
throw A.C(A.R(a,"double"),new Error())},
fT(a){if(typeof a=="number")return a
if(a==null)return a
throw A.C(A.R(a,"double?"),new Error())},
eY(a){return typeof a=="number"&&Math.floor(a)===a},
k(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.C(A.R(a,"int"),new Error())},
iR(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.C(A.R(a,"int?"),new Error())},
jc(a){return typeof a=="number"},
iS(a){if(typeof a=="number")return a
throw A.C(A.R(a,"num"),new Error())},
fU(a){if(typeof a=="number")return a
if(a==null)return a
throw A.C(A.R(a,"num?"),new Error())},
jf(a){return typeof a=="string"},
q(a){if(typeof a=="string")return a
throw A.C(A.R(a,"String"),new Error())},
e4(a){if(typeof a=="string")return a
if(a==null)return a
throw A.C(A.R(a,"String?"),new Error())},
a(a){if(A.h2(a))return a
throw A.C(A.R(a,"JSObject"),new Error())},
S(a){if(a==null)return a
if(A.h2(a))return a
throw A.C(A.R(a,"JSObject?"),new Error())},
h7(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.N(a[q],b)
return s},
jl(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.h7(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.N(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
h0(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.e([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.j(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.h(a4,l)
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
if(l===8){p=A.ju(a.x)
o=a.y
return o.length>0?p+("<"+A.h7(o,b)+">"):p}if(l===10)return A.jl(a,b)
if(l===11)return A.h0(a,b,null)
if(l===12)return A.h0(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.h(b,n)
return b[n]}return"?"},
ju(a){var s=A.hn(a)
if(s!=null)return s
return"minified:"+a},
iP(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
iO(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.e2(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bv(a,5,"#")
q=A.e3(s)
for(p=0;p<s;++p)q[p]=r
o=A.bu(a,b,q)
n[b]=o
return o}else return m},
iN(a,b){return A.fR(a.tR,b)},
iM(a,b){return A.fR(a.eT,b)},
e2(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fP(a,null,b,!1)
r.set(b,s)
return s},
bw(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fP(a,b,c,!0)
q.set(c,r)
return r},
fQ(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.eT(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
fP(a,b,c,d){return A.iD(A.ix(a,b,c,d))},
af(a,b){b.a=A.j2
b.b=A.j3
return b},
bv(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.Y(null,null)
s.w=b
s.as=c
r=A.af(a,s)
a.eC.set(c,r)
return r},
fN(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.iK(a,b,r,c)
a.eC.set(r,s)
return s},
iK(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.av(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aV(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.Y(null,null)
q.w=6
q.x=b
q.as=c
return A.af(a,q)},
fM(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.iI(a,b,r,c)
a.eC.set(r,s)
return s},
iI(a,b,c,d){var s,r
if(d){s=b.w
if(A.av(b)||b===t.K)return b
else if(s===1)return A.bu(a,"a3",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.Y(null,null)
r.w=7
r.x=b
r.as=c
return A.af(a,r)},
iL(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.Y(null,null)
s.w=13
s.x=b
s.as=q
r=A.af(a,s)
a.eC.set(q,r)
return r},
bt(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
iH(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bu(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bt(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.Y(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.af(a,r)
a.eC.set(p,q)
return q},
eT(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bt(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.Y(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.af(a,o)
a.eC.set(q,n)
return n},
fO(a,b,c){var s,r,q="+"+(b+"("+A.bt(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.Y(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.af(a,s)
a.eC.set(q,r)
return r},
fL(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bt(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bt(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.iH(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.Y(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.af(a,p)
a.eC.set(r,o)
return o},
eU(a,b,c,d){var s,r=b.as+("<"+A.bt(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.iJ(a,b,c,r,d)
a.eC.set(r,s)
return s},
iJ(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.e3(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.as(a,b,r,0)
m=A.aS(a,c,r,0)
return A.eU(a,n,m,c!==m)}}l=new A.Y(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.af(a,l)},
ix(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
iD(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.iz(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.fJ(a,r,l,k,!1)
else if(q===46)r=A.fJ(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aq(a.u,a.e,k.pop()))
break
case 94:k.push(A.iL(a.u,k.pop()))
break
case 35:k.push(A.bv(a.u,5,"#"))
break
case 64:k.push(A.bv(a.u,2,"@"))
break
case 126:k.push(A.bv(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.iB(a,k)
break
case 38:A.iA(a,k)
break
case 63:p=a.u
k.push(A.fN(p,A.aq(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fM(p,A.aq(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.iy(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fK(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.iE(a.u,a.e,o)
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
return A.aq(a.u,a.e,m)},
iz(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
fJ(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.iP(s,o.x)[p]
if(n==null)A.ev('No "'+p+'" in "'+A.ih(o)+'"')
d.push(A.bw(s,o,n))}else d.push(p)
return m},
iB(a,b){var s,r=a.u,q=A.fI(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bu(r,p,q))
else{s=A.aq(r,a.e,p)
switch(s.w){case 11:b.push(A.eU(r,s,q,a.n))
break
default:b.push(A.eT(r,s,q))
break}}},
iy(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.fI(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.aq(p,a.e,o)
q=new A.cj()
q.a=s
q.b=n
q.c=m
b.push(A.fL(p,r,q))
return
case-4:b.push(A.fO(p,b.pop(),s))
return
default:throw A.c(A.bG("Unexpected state under `()`: "+A.p(o)))}},
iA(a,b){var s=b.pop()
if(0===s){b.push(A.bv(a.u,1,"0&"))
return}if(1===s){b.push(A.bv(a.u,4,"1&"))
return}throw A.c(A.bG("Unexpected extended operation "+A.p(s)))},
fI(a,b){var s=b.splice(a.p)
A.fK(a.u,a.e,s)
a.p=b.pop()
return s},
aq(a,b,c){if(typeof c=="string")return A.bu(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.iC(a,b,c)}else return c},
fK(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aq(a,b,c[s])},
iE(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aq(a,b,c[s])},
iC(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.bG("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bG("Bad index "+c+" for "+b.i(0)))},
jO(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.B(a,b,null,c,null)
r.set(c,s)}return s},
B(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.av(d))return!0
s=b.w
if(s===4)return!0
if(A.av(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.B(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.B(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.B(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.B(a,b.x,c,d,e))return!1
return A.B(a,A.eN(a,b),c,d,e)}if(s===6)return A.B(a,p,c,d,e)&&A.B(a,b.x,c,d,e)
if(q===7){if(A.B(a,b,c,d.x,e))return!0
return A.B(a,b,c,A.eN(a,d),e)}if(q===6)return A.B(a,b,c,p,e)||A.B(a,b,c,d.x,e)
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
if(!A.B(a,j,c,i,e)||!A.B(a,i,e,j,c))return!1}return A.h1(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.h1(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.j9(a,b,c,d,e)}if(o&&q===10)return A.je(a,b,c,d,e)
return!1},
h1(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.B(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.B(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.B(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.B(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.B(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
j9(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bw(a,b,r[o])
return A.fS(a,p,null,c,d.y,e)}return A.fS(a,b.y,null,c,d.y,e)},
fS(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.B(a,b[s],d,e[s],f))return!1
return!0},
je(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.B(a,r[s],c,q[s],e))return!1
return!0},
aV(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.av(a))if(s!==6)r=s===7&&A.aV(a.x)
return r},
av(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fR(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
e3(a){return a>0?new Array(a):v.typeUniverse.sEA},
Y:function Y(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cj:function cj(){this.c=this.b=this.a=null},
e1:function e1(a){this.a=a},
ci:function ci(){},
bs:function bs(a){this.a=a},
iq(){var s,r,q
if(self.scheduleImmediate!=null)return A.jx()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bA(new A.dE(s),1)).observe(r,{childList:true})
return new A.dD(s,r,q)}else if(self.setImmediate!=null)return A.jy()
return A.jz()},
ir(a){self.scheduleImmediate(A.bA(new A.dF(t.M.a(a)),0))},
is(a){self.setImmediate(A.bA(new A.dG(t.M.a(a)),0))},
it(a){t.M.a(a)
A.iG(0,a)},
iG(a,b){var s=new A.e_()
s.c7(a,b)
return s},
h4(a){return new A.cf(new A.A($.w,a.h("A<0>")),a.h("cf<0>"))},
fY(a,b){a.$2(0,null)
b.b=!0
return b.a},
fV(a,b){A.iU(a,b)},
fX(a,b){b.aZ(a)},
fW(a,b){b.b_(A.a1(a),A.aU(a))},
iU(a,b){var s,r,q=new A.e5(b),p=new A.e6(b)
if(a instanceof A.A)a.bF(q,p,t.z)
else{s=t.z
if(a instanceof A.A)a.c0(q,p,s)
else{r=new A.A($.w,t._)
r.a=8
r.c=a
r.bF(q,p,s)}}},
h9(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.w
return r.bt(r,t.aS.a(new A.e9(s)),t.H,t.S,t.z)},
cs(a){var s
if(t.C.b(a)){s=a.gah()
if(s!=null)return s}return B.m},
j5(a,b){var s=$.w
if(s===B.h)return null
s.cj(s,a,b)
return null},
j6(a,b){if($.w!==B.h)A.j5(a,b)
if(b==null)if(t.C.b(a)){b=a.gah()
if(b==null){A.fz(a,B.m)
b=B.m}}else b=B.m
else if(t.C.b(a))A.fz(a,b)
return new A.P(a,b)},
eP(a,b,c){var s,r,q,p,o,n={},m=n.a=a
for(s=t._;r=m.a,(r&4)!==0;m=a){a=s.a(m.c)
n.a=a}if(m===b){s=A.ij()
b.aI(new A.P(new A.W(!0,m,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=m.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=m
m.br(p)
return}if(!c)if(b.c==null)m=(s&16)===0||q!==0
else m=!1
else m=!0
if(m){p=b.ao()
b.ak(n.a)
A.aM(b,p)
return}b.a^=2
o=b.b
o.ab(o,new A.dM(n,b))},
aM(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=e.a=a
for(s=t.n,r=t.F;;){q={}
p=d.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(d.c)
d=d.b
d.bl(d,m.a,m.b)}return}q.a=b
l=b.a
for(d=b;l!=null;d=l,l=k){d.a=null
A.aM(e.a,d)
q.a=l
k=l.a}j=e.a.c
q.b=n
q.c=j
if(o){p=d.c
p=(p&1)!==0||(p&15)===8}else p=!0
if(p){i=d.b.b
h=$.w
if(h!==i)$.w=i
else h=null
d=d.c
if((d&15)===8)new A.dQ(q,e,n).$0()
else if(o){if((d&1)!==0)new A.dP(q,j).$0()}else if((d&2)!==0)new A.dO(e,q).$0()
if(h!=null)$.w=h
d=q.c
if(d instanceof A.A){p=q.a.$ti
p=p.h("a3<2>").b(d)||!p.y[1].b(d)}else p=!1
if(p){g=q.a.b
if((d.a&24)!==0){f=r.a(g.c)
g.c=null
b=g.ap(f)
g.a=d.a&30|g.a&1
g.c=d.c
e.a=d
continue}else A.eP(d,g,!0)
return}}g=q.a.b
f=r.a(g.c)
g.c=null
b=g.ap(f)
d=q.b
p=q.c
if(!d){g.$ti.c.a(p)
g.a=8
g.c=p}else{s.a(p)
g.a=g.a&1|16
g.c=p}e.a=g
d=g}},
h6(a,b){var s=t.Q
if(s.b(a))return b.bt(b,s.a(a),t.z,t.K,t.l)
s=t.v
if(s.b(a))return b.bu(b,s.a(a),t.z,t.K)
throw A.c(A.bE(a,"onError",u.c))},
jj(){var s,r
for(s=$.aR;s!=null;s=$.aR){$.bz=null
r=s.b
$.aR=r
if(r==null)$.by=null
s.a.$0()}},
jr(){$.eX=!0
try{A.jj()}finally{$.bz=null
$.eX=!1
if($.aR!=null)$.fc().$1(A.hb())}},
h8(a){var s=new A.cg(a),r=$.by
if(r==null){$.aR=$.by=s
if(!$.eX)$.fc().$1(A.hb())}else $.by=r.b=s},
jo(a){var s,r,q,p=$.aR
if(p==null){A.h8(a)
$.bz=$.by
return}s=new A.cg(a)
r=$.bz
if(r==null){s.b=p
$.aR=$.bz=s}else{q=r.b
s.b=q
$.bz=r.b=s
if(q==null)$.by=s}},
k8(a,b){A.f0(a,"stream",t.K)
return new A.co(b.h("co<0>"))},
jm(a,b){A.jo(new A.e8(a,b))},
jn(a,b){if(B.h!==a)b=a.cM(b,t.H)
A.h8(b)},
dE:function dE(a){this.a=a},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(a){this.a=a},
dG:function dG(a){this.a=a},
e_:function e_(){},
e0:function e0(a,b){this.a=a
this.b=b},
cf:function cf(a,b){this.a=a
this.b=!1
this.$ti=b},
e5:function e5(a){this.a=a},
e6:function e6(a){this.a=a},
e9:function e9(a){this.a=a},
P:function P(a,b){this.a=a
this.b=b},
ch:function ch(){},
bi:function bi(a,b){this.a=a
this.$ti=b},
a7:function a7(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
A:function A(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
dJ:function dJ(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
this.b=b},
dM:function dM(a,b){this.a=a
this.b=b},
dL:function dL(a,b){this.a=a
this.b=b},
dK:function dK(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a,b){this.a=a
this.b=b},
dS:function dS(a){this.a=a},
dP:function dP(a,b){this.a=a
this.b=b},
dO:function dO(a,b){this.a=a
this.b=b},
cg:function cg(a){this.a=a
this.b=null},
co:function co(a){this.$ti=a},
dB:function dB(){},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(a,b){this.a=a
this.b=b},
fH(a,b){var s=a[b]
return s===a?null:s},
eR(a,b,c){if(c==null)a[b]=a
else a[b]=c},
eQ(){var s=Object.create(null)
A.eR(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
ft(a,b,c){return b.h("@<0>").t(c).h("fs<1,2>").a(A.jF(a,new A.aj(b.h("@<0>").t(c).h("aj<1,2>"))))},
hZ(a,b){return new A.aj(a.h("@<0>").t(b).h("aj<1,2>"))},
i_(a){return new A.ap(a.h("ap<0>"))},
fu(a){return new A.ap(a.h("ap<0>"))},
eS(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
iw(a,b,c){var s=new A.aN(a,b,c.h("aN<0>"))
s.c=a.e
return s},
fv(a,b){var s,r,q=A.i_(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.U)(a),++r)q.j(0,b.a(a[r]))
return q},
fw(a){var s,r
if(A.f5(a))return"{...}"
s=new A.aK("")
try{r={}
B.a.j($.O,a)
s.a+="{"
r.a=!0
a.a8(0,new A.cC(r,s))
s.a+="}"}finally{if(0>=$.O.length)return A.h($.O,-1)
$.O.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bj:function bj(){},
bl:function bl(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
bk:function bk(a,b){this.a=a
this.$ti=b},
ck:function ck(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ap:function ap(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cn:function cn(a){this.a=a
this.b=null},
aN:function aN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
u:function u(){},
z:function z(){},
cC:function cC(a,b){this.a=a
this.b=b},
aJ:function aJ(){},
bq:function bq(){},
jk(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.a1(r)
q=A.eE(String(s),null)
throw A.c(q)}q=A.e7(p)
return q},
e7(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.cl(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.e7(a[s])
return a},
fq(a,b,c){return new A.b4(a,b)},
iX(a){return a.c1()},
iu(a,b){return new A.dU(a,[],A.jB())},
iv(a,b,c){var s,r=new A.aK(""),q=A.iu(r,b)
q.aF(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
cl:function cl(a,b){this.a=a
this.b=b
this.c=null},
cm:function cm(a){this.a=a},
bJ:function bJ(){},
bL:function bL(){},
b4:function b4(a,b){this.a=a
this.b=b},
bW:function bW(a,b){this.a=a
this.b=b},
cw:function cw(){},
cy:function cy(a){this.b=a},
cx:function cx(a){this.a=a},
dV:function dV(){},
dW:function dW(a,b){this.a=a
this.b=b},
dU:function dU(a,b,c){this.c=a
this.a=b
this.b=c},
f4(a){var s=A.eL(a,null)
if(s!=null)return s
throw A.c(A.eE(a,null))},
hL(a,b){a=A.C(a,new Error())
if(a==null)a=A.bx(a)
a.stack=b.i(0)
throw a},
am(a,b,c,d){var s,r=c?J.hU(a,d):J.hT(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
i0(a,b,c){var s,r=A.e([],c.h("n<0>"))
for(s=J.eD(a);s.q();)B.a.j(r,c.a(s.gu()))
r.$flags=1
return r},
b5(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.h("n<0>"))
s=A.e([],b.h("n<0>"))
for(r=J.eD(a);r.q();)B.a.j(s,r.gu())
return s},
eI(a,b){var s=A.i0(a,!1,b)
s.$flags=3
return s},
dp(a){return new A.bU(a,A.fp(a,!1,!0,!1,!1,""))},
fC(a,b,c){var s=J.eD(b)
if(!s.q())return a
if(c.length===0){do a+=A.p(s.gu())
while(s.q())}else{a+=A.p(s.gu())
while(s.q())a=a+c+A.p(s.gu())}return a},
ij(){return A.aU(new Error())},
hK(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
fk(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bN(a){if(a>=10)return""+a
return"0"+a},
bO(a){if(typeof a=="number"||A.eW(a)||a==null)return J.bD(a)
if(typeof a=="string")return JSON.stringify(a)
return A.fy(a)},
hM(a,b){A.f0(a,"error",t.K)
A.f0(b,"stackTrace",t.l)
A.hL(a,b)},
bG(a){return new A.bF(a)},
ax(a,b){return new A.W(!1,null,b,a)},
bE(a,b,c){return new A.W(!0,a,b,c)},
eM(a,b){return new A.bd(null,null,!0,a,b,"Value not in range")},
aI(a,b,c,d,e){return new A.bd(b,c,!0,a,d,"Invalid value")},
ie(a,b,c){if(0>a||a>c)throw A.c(A.aI(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.aI(b,a,c,"end",null))
return b}return c},
id(a,b){if(a<0)throw A.c(A.aI(a,0,null,b,null))
return a},
fl(a,b,c,d){return new A.bP(b,!0,a,d,"Index out of range")},
eO(a){return new A.bh(a)},
fF(a){return new A.cd(a)},
fB(a){return new A.bg(a)},
Q(a){return new A.bK(a)},
eE(a,b){return new A.aZ(a,b)},
hS(a,b,c){var s,r
if(A.f5(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.j($.O,a)
try{A.ji(a,s)}finally{if(0>=$.O.length)return A.h($.O,-1)
$.O.pop()}r=A.fC(b,t.U.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
eF(a,b,c){var s,r
if(A.f5(a))return b+"..."+c
s=new A.aK(b)
B.a.j($.O,a)
try{r=s
r.a=A.fC(r.a,a,", ")}finally{if(0>=$.O.length)return A.h($.O,-1)
$.O.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ji(a,b){var s,r,q,p,o,n,m,l=a.gF(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.q())return
s=A.p(l.gu())
B.a.j(b,s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.h(b,-1)
r=b.pop()
if(0>=b.length)return A.h(b,-1)
q=b.pop()}else{p=l.gu();++j
if(!l.q()){if(j<=4){B.a.j(b,A.p(p))
return}r=A.p(p)
if(0>=b.length)return A.h(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gu();++j
for(;l.q();p=o,o=n){n=l.gu();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.h(b,-1)
k-=b.pop().length+2;--j}B.a.j(b,"...")
return}}q=A.p(p)
r=A.p(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.h(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.j(b,m)
B.a.j(b,q)
B.a.j(b,r)},
eJ(a,b,c,d){var s
if(B.f===c){s=B.b.gl(a)
b=J.V(b)
return A.dv(A.a4(A.a4($.cr(),s),b))}if(B.f===d){s=B.b.gl(a)
b=J.V(b)
c=J.V(c)
return A.dv(A.a4(A.a4(A.a4($.cr(),s),b),c))}s=B.b.gl(a)
b=J.V(b)
c=J.V(c)
d=J.V(d)
d=A.dv(A.a4(A.a4(A.a4(A.a4($.cr(),s),b),c),d))
return d},
i2(a){var s,r,q=$.cr()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.U)(a),++r)q=A.a4(q,J.V(a[r]))
return A.dv(q)},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
dH:function dH(){},
t:function t(){},
bF:function bF(a){this.a=a},
a5:function a5(){},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bd:function bd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bP:function bP(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bh:function bh(a){this.a=a},
cd:function cd(a){this.a=a},
bg:function bg(a){this.a=a},
bK:function bK(a){this.a=a},
bf:function bf(){},
dI:function dI(a){this.a=a},
aZ:function aZ(a,b){this.a=a
this.b=b},
i:function i(){},
x:function x(){},
f:function f(){},
cp:function cp(){},
aK:function aK(a){this.a=a},
dl:function dl(a){this.a=a},
ar(a){var s
if(typeof a=="function")throw A.c(A.ax("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.iV,a)
s[$.eB()]=a
return s},
Z(a){var s
if(typeof a=="function")throw A.c(A.ax("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.iW,a)
s[$.eB()]=a
return s},
iV(a){return t.Z.a(a).$0()},
iW(a,b,c){t.Z.a(a)
if(A.k(c)>=1)return a.$1(b)
return a.$0()},
eq(a,b){var s=new A.A($.w,b.h("A<0>")),r=new A.bi(s,b.h("bi<0>"))
a.then(A.bA(new A.er(r,b),1),A.bA(new A.es(r),1))
return s},
h5(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
hd(a){if(A.h5(a))return a
return new A.ea(new A.bl(t.G)).$1(a)},
er:function er(a,b){this.a=a
this.b=b},
es:function es(a){this.a=a},
ea:function ea(a){this.a=a},
dY:function dY(){this.b=this.a=0},
ad(a,b){var s=A.eK(a),r=b.a,q=b.b,p=A.b5(b.c,t.L)
return new A.X(s,r,q,p,b.d,b.e,b.f)},
i3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!(a instanceof A.z))return g
s=a.m(0,"name")
r=a.m(0,"bpm")
q=a.m(0,"meter")
if(typeof s!="string"||B.c.a9(s).length===0)return g
if(typeof r!="number"||typeof q!="string")return g
p=A.b7(q)
if(p==null)return g
o=a.m(0,"levels")
if(t.j.b(o)){n=A.e([],t.a)
for(m=o.length,l=0;l<o.length;o.length===m||(0,A.U)(o),++l)n.push(A.hY(A.p(o[l])))
k=n}else k=p.a3()
if(k.length!==p.a)k=p.a3()
j=a.m(0,"swing")
n=A.eK(s)
m=B.b.p(B.d.B(r),20,300)
i=A.fD(A.p(a.m(0,"sub")))
h=typeof j=="number"?B.b.p(B.d.B(j),50,75):50
return new A.X(n,m,p,k,i,h,J.a2(a.m(0,"dotted"),!0)&&p.gV())},
eK(a){var s=B.c.a9(a),r=A.dp("\\s+"),q=A.hm(s,r," ")
return q.length>40?B.c.Y(q,0,40):q},
a0(a){var s,r,q=A.e([],t.J)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.U)(a),++r)q.push(a[r].c1())
return B.l.bO(q,null)},
he(a){var s,r,q,p,o,n,m
if(a==null||a.length===0)return A.e([],t.e)
s=null
try{s=B.l.bN(a,null)}catch(r){if(A.a1(r) instanceof A.aZ)return A.e([],t.e)
else throw r}if(!t.j.b(s))return A.e([],t.e)
q=A.e([],t.e)
for(p=s,o=p.length,n=0;n<p.length;p.length===o||(0,A.U)(p),++n){m=A.i3(p[n])
if(m!=null)q.push(m)}return q},
jZ(a,b){var s,r,q,p,o=A.e([b],t.e)
for(s=a.length,r=b.a,q=0;q<a.length;a.length===s||(0,A.U)(a),++q){p=a[q]
if(p.a.toLowerCase()!==r.toLowerCase())o.push(p)}return o},
jV(){var s="4/4",r=new A.eu()
return A.e([r.$4$sub("Rock eighths",100,s,B.t),r.$4$sub("Funk sixteenths",92,s,B.r),r.$5$sub$swing("Swing",140,s,B.t,67),r.$4$dotted("Shuffle 12/8",72,"12/8",!0),r.$3("Jazz waltz",150,"3/4"),r.$4$sub("Songo",112,s,B.r),r.$3("Odd: 7/8",180,"7/8:2+2+3")],t.e)},
X:function X(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
eu:function eu(){},
f8(a){return B.a.b3($.fd(),new A.ej(a),new A.ek())},
fa(a){return B.a.cY($.fd(),new A.eo(a),new A.ep())},
hY(a){return B.a.b3(B.q,new A.cz(a),new A.cA())},
fD(a){return B.a.b3(B.B,new A.dt(a),new A.du())},
an(a,b,c){var s=c==null?A.i1(a,b):c
s=new A.b6(a,b,A.eI(s,t.S))
s.c5(a,b,c)
return s},
i1(a,b){var s
if(b<8||a<5)return A.am(a,1,!1,t.S)
if(B.b.aa(a,3)===0)return A.am(B.b.G(a,3),3,!1,t.S)
if((a&1)===1){s=t.S
s=A.b5(A.am(B.b.G(a-3,2),2,!1,s),s)
s.push(3)
return s}return A.am(B.b.G(a,2),2,!1,t.S)},
b7(a){var s,r,q,p,o,n,m,l,k,j,i=A.dp("^\\s*(\\d+)\\s*/\\s*(\\d+)\\s*(?::\\s*([\\d+\\s]+))?$").cS(a)
if(i==null)return null
p=i.b
if(1>=p.length)return A.h(p,1)
o=p[1]
o.toString
s=A.f4(o)
if(2>=p.length)return A.h(p,2)
o=p[2]
o.toString
r=A.f4(o)
q=null
if(3>=p.length)return A.h(p,3)
n=p[3]
if(n!=null){p=A.e([],t.t)
for(o=n.split("+"),m=o.length,l=0;l<m;++l){k=A.eL(B.c.a9(o[l]),null)
if(k!=null)p.push(k)}q=p}try{p=A.an(s,r,q)
return p}catch(j){if(A.a1(j) instanceof A.W)return null
else throw j}},
ii(){return new A.ds()},
eZ(a){var s,r=0
for(;;){s=r+1
if(!(s<10&&a>=B.e[s].a[0]))break
r=s}return r},
ej:function ej(a){this.a=a},
ek:function ek(){},
eo:function eo(a){this.a=a},
ep:function ep(){},
M:function M(a,b,c){this.c=a
this.a=b
this.b=c},
cz:function cz(a){this.a=a},
cA:function cA(){},
ao:function ao(a,b){this.a=a
this.b=b},
E:function E(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
dt:function dt(a){this.a=a},
du:function du(){},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(){},
cE:function cE(){},
cH:function cH(){},
cI:function cI(){},
cF:function cF(){},
cG:function cG(){},
cu:function cu(a,b,c){var _=this
_.a=96
_.b=a
_.c=b
_.d=c
_.e=50
_.f=!1},
ds:function ds(){var _=this
_.a=!1
_.c=_.b=4
_.d=140},
ct:function ct(){this.a=!1
this.c=this.b=2},
aW:function aW(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
dr:function dr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=0},
dw:function dw(a){this.c=a},
d(a,b){var s=A.S(A.a(v.G.document).getElementById(a))
s.toString
return b.a(s)},
I(a,b,c){var s=A.a(A.a(v.G.document).createElement(a))
if(b!=null)s.className=b
if(c!=null)s.textContent=c
return s},
o(a,b,c){return a.addEventListener(b,A.Z(new A.en(c)))},
hj(a,b){return A.aa(v.G,"addEventListener",a,A.Z(new A.em(b)),t.X)},
f6(a){var s,r,q,p,o=null
try{s=A.S(v.G.localStorage)
q=s
r=q==null?o:A.aa(q,"getItem",a,o,t.X)
q=r!=null&&typeof r==="string"?A.q(r):o
return q}catch(p){return o}},
T(a,b){var s,r,q
try{s=A.S(v.G.localStorage)
r=s
if(r!=null)A.aa(r,"setItem",a,b,t.X)}catch(q){}},
f9(){var s=A.a(v.G.navigator).audioSession
if(t.m.b(s))s.type="playback"},
k_(a){var s
try{A.y(A.a(v.G.navigator).vibrate(a))}catch(s){}},
jU(){var s,r,q,p,o,n=A.a(v.G.navigator).serviceWorker,m=t.m
if(!m.b(n))return
try{s=A.aa(A.a(n),"register","sw.js",null,m)
m=A.eq(s,t.X)
r=new A.et()
q=m.$ti
p=$.w
if(p!==B.h)r=A.h6(r,p)
m.ai(new A.a7(new A.A(p,q),2,null,r,q.h("a7<1,1>")))}catch(o){}},
k1(){var s=v.G,r=A.S(A.a(s.document).getElementById("themeToggle")),q=A.a(A.a(s.document).documentElement)
if(r==null)return
s=new A.eA(q,r)
A.o(r,"click",new A.ez(q,s))
s.$0()},
k0(){var s,r,q,p={},o=v.G,n=A.S(A.a(o.document).getElementById("installApp")),m=A.S(A.a(o.document).getElementById("ios-install-tip")),l=A.a(o.navigator)
if(A.y(A.a(o.matchMedia("(display-mode: standalone)")).matches)||J.a2(A.hd(l.standalone),!0))return
p.a=null
if(n!=null){A.aa(o,"addEventListener","beforeinstallprompt",A.Z(new A.ew(p,n)),t.X)
A.o(n,"click",new A.ex(p,n))
A.hj("appinstalled",new A.ey(n))}s=A.q(l.userAgent)
p=A.fT(l.maxTouchPoints)
r=p==null?null:A.k(p)
if(r==null)r=0
p=A.dp("iPhone|iPad|iPod")
if(!p.b.test(s))q=B.c.T(s,"Macintosh")&&r>1
else q=!0
if(m!=null&&q)m.hidden=!1},
en:function en(a){this.a=a},
em:function em(a){this.a=a},
dz:function dz(){this.a=null
this.b=!1},
dA:function dA(a){this.a=a},
et:function et(){},
eA:function eA(a,b){this.a=a
this.b=b},
ez:function ez(a,b){this.a=a
this.b=b},
ew:function ew(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
ey:function ey(a){this.a=a},
jQ(){var s,r,q,p,o
A.k1()
A.k0()
A.jU()
s=v.G
r=A.S(A.a(s.document).getElementById("metro"))
if(r==null)return
if(!("AudioContext" in s)){s=A.S(A.a(s.document).getElementById("no-audio"))
if(s!=null)s.hidden=!1
return}s=A.an(4,4,null)
q=A.an(4,4,null)
q=q.a3()
p=t.m
o=new A.bZ(new A.cu(s,q,B.i),A.ii(),new A.ct(),A.d("bpm",p),A.d("bpm-range",p),A.d("tempo-unit",p),A.d("tempo-word",p),A.d("start",p),A.d("transport",p),A.d("q-start",p),A.d("q-bpm",p),A.d("flash",p),A.d("position",p),A.d("grid",p),A.d("meter-beats",p),A.d("meter-unit",p),A.d("meter-groups",p),A.d("groups-row",p),A.d("meter-quick",p),A.d("dotted-row",p),A.d("dotted",p),A.d("sub",p),A.d("swing-row",p),A.d("swing",p),A.d("swing-out",p),A.d("sound",p),A.d("volume",p),A.d("sub-volume",p),A.d("vibrate-row",p),A.d("vibrate",p),A.d("big-flash",p),A.d("count-in",p),A.d("tempo-range",p),A.d("tempo-meaning",p),A.d("bpm-prev",p),A.d("bpm-next",p),A.d("status",p),A.d("my-presets",p),A.d("presets-empty",p),A.d("preset-undo",p),A.d("preset-undo-text",p),A.d("preset-undo-btn",p),A.d("speed-progress",p),A.d("starter-presets",p),A.d("preset-name",p),A.e([],t.d),A.e([],t.O),A.e([],t.A),new A.dw(A.e([],t.w)),new A.dz(),A.e([],t.e))
o.d9()
r.hidden=!1
o.b8()},
fZ(a){var s,r=A.a(a.children),q=A.k(A.H(r.length)),p=A.e([],t.O)
for(s=0;s<q;++s)p.push(A.a(A.fn(r,"item",s,null,null,null)))
return p},
jJ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=A.an(a,b,A.am(a,1,!1,t.S))
if(b<8||a<4)return A.e([A.an(a,b,null)],t.c)
s=A.fu(t.N)
r=t.t
new A.ed(s).$2(a,A.e([],r))
q=A.an(a,b,null)
p=A.e([q],t.c)
for(o=A.iw(s,s.r,s.$ti.c),n=q.c,m=o.$ti.c;o.q();){l=o.d
if(l==null)l=m.a(l)
if(l!==B.a.R(n,"+")){k=A.e([],r)
for(l=l.split("+"),j=l.length,i=0;i<j;++i)k.push(A.f4(l[i]))
p.push(A.an(a,b,k))}}p.push(h)
return p},
bZ:function bZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1){var _=this
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
_.x2=c3
_.xr=c4
_.y1=c5
_.y2="wood"
_.U=0.8
_.ac=0.6
_.ae=_.ad=!1
_.N=0
_.bP=_.O=_.J=null
_.H=!1
_.aw=0
_.bQ=_.ag=_.az=_.af=null
_.a5=c6
_.aA=c7
_.bR=c8
_.aB=null
_.bS=-1
_.cR=c9
_.bU=_.bT=null
_.a6=d0
_.E=d1
_.aC=_.b0=null
_.b1=_.a7=$},
d3:function d3(a){this.a=a},
d4:function d4(a){this.a=a},
d5:function d5(a){this.a=a},
dd:function dd(a){this.a=a},
de:function de(a){this.a=a},
df:function df(a){this.a=a},
dg:function dg(a){this.a=a},
dh:function dh(a){this.a=a},
di:function di(a){this.a=a},
dj:function dj(a){this.a=a},
dk:function dk(a){this.a=a},
d6:function d6(a){this.a=a},
d7:function d7(a){this.a=a},
d8:function d8(a){this.a=a},
d9:function d9(a){this.a=a},
da:function da(a){this.a=a},
db:function db(a){this.a=a},
dc:function dc(a){this.a=a},
cL:function cL(a,b){this.a=a
this.b=b},
cT:function cT(a){this.a=a},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a){this.a=a},
cR:function cR(){},
cS:function cS(a,b){this.a=a
this.b=b},
d_:function d_(a){this.a=a},
cZ:function cZ(){},
cJ:function cJ(){},
cK:function cK(a,b){this.a=a
this.b=b},
d2:function d2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
d1:function d1(a){this.a=a},
cX:function cX(a){this.a=a},
cM:function cM(a){this.a=a},
cV:function cV(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
d0:function d0(a){this.a=a},
cU:function cU(a){this.a=a},
cY:function cY(a,b){this.a=a
this.b=b},
ed:function ed(a){this.a=a},
hn(a){return v.mangledGlobalNames[a]},
jX(a){throw A.C(A.fr(a),new Error())},
fb(){throw A.C(A.fr(""),new Error())},
fn(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else{s=a[b](c,d)
return s}},
aa(a,b,c,d,e){return e.a(A.fn(a,b,c,d,null,null))}},B={}
var w=[A,J,B]
var $={}
A.eG.prototype={}
J.bQ.prototype={
L(a,b){return a===b},
gl(a){return A.c8(a)},
i(a){return"Instance of '"+A.c9(a)+"'"},
gn(a){return A.at(A.eV(this))}}
J.bS.prototype={
i(a){return String(a)},
gl(a){return a?519018:218159},
gn(a){return A.at(t.y)},
$il:1,
$iD:1}
J.b0.prototype={
L(a,b){return null==b},
i(a){return"null"},
gl(a){return 0},
$il:1}
J.b2.prototype={$ir:1}
J.ac.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.c7.prototype={}
J.aL.prototype={}
J.ab.prototype={
i(a){var s=a[$.hp()]
if(s==null)s=a[$.eB()]
if(s==null)return this.c4(a)
return"JavaScript function for "+J.bD(s)},
$iai:1}
J.b1.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.b3.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.n.prototype={
j(a,b){A.K(a).c.a(b)
a.$flags&1&&A.bC(a,29)
a.push(b)},
aE(a,b){a.$flags&1&&A.bC(a,"removeAt",1)
if(b<0||b>=a.length)throw A.c(A.eM(b,null))
return a.splice(b,1)[0]},
S(a){a.$flags&1&&A.bC(a,"clear","clear")
a.length=0},
R(a,b){var s,r=A.am(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.C(r,s,A.p(a[s]))
return r.join(b)},
cT(a,b,c,d){var s,r,q
d.a(b)
A.K(a).t(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.c(A.Q(a))}return r},
b3(a,b,c){var s,r,q,p=A.K(a)
p.h("D(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.Q(a))}p=c.$0()
return p},
cY(a,b,c){var s,r,q,p=A.K(a)
p.h("D(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=s-1;r>=0;--r){q=a[r]
if(b.$1(q))return q
if(s!==a.length)throw A.c(A.Q(a))}p=c.$0()
return p},
gb2(a){if(a.length>0)return a[0]
throw A.c(A.fm())},
gbY(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.fm())},
bJ(a,b){var s,r
A.K(a).h("D(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.Q(a))}return!1},
a4(a,b){var s,r
A.K(a).h("D(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.Q(a))}return!0},
T(a,b){var s
for(s=0;s<a.length;++s)if(J.a2(a[s],b))return!0
return!1},
gbX(a){return a.length!==0},
i(a){return A.eF(a,"[","]")},
gF(a){return new J.ay(a,a.length,A.K(a).h("ay<1>"))},
gl(a){return A.c8(a)},
gk(a){return a.length},
C(a,b,c){A.K(a).c.a(c)
a.$flags&2&&A.bC(a)
if(!(b>=0&&b<a.length))throw A.c(A.hf(a,b))
a[b]=c},
cW(a,b){var s
A.K(a).h("D(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
$ii:1,
$ij:1}
J.bR.prototype={
d6(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.c9(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.cv.prototype={}
J.ay.prototype={
gu(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.U(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.aA.prototype={
aY(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.b.gaD(b)
if(this.gaD(a)===s)return 0
if(this.gaD(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaD(a){return a===0?1/a<0:a<0},
B(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.eO(""+a+".round()"))},
p(a,b,c){if(B.b.aY(b,c)>0)throw A.c(A.jw(b))
if(this.aY(a,b)<0)return b
if(this.aY(a,c)>0)return c
return a},
d3(a,b){var s
if(b>20)throw A.c(A.aI(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaD(a))return"-"+s
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
aa(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
bb(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bE(a,b)},
G(a,b){return(a|0)===a?a/b|0:this.bE(a,b)},
bE(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.eO("Result of truncating division is "+A.p(s)+": "+A.p(a)+" ~/ "+b))},
bC(a,b){var s
if(a>0)s=this.cC(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cC(a,b){return b>31?0:a>>>b},
gn(a){return A.at(t.o)},
$im:1,
$iaw:1}
J.b_.prototype={
gn(a){return A.at(t.S)},
$il:1,
$ib:1}
J.bT.prototype={
gn(a){return A.at(t.i)},
$il:1}
J.aB.prototype={
Y(a,b,c){return a.substring(b,A.ie(b,c,a.length))},
a9(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.h(p,0)
if(p.charCodeAt(0)===133){s=J.hW(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.h(p,r)
q=p.charCodeAt(r)===133?J.hX(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
T(a,b){return A.jW(a,b,0)},
i(a){return a},
gl(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gn(a){return A.at(t.N)},
gk(a){return a.length},
$il:1,
$idn:1,
$iv:1}
A.bX.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.dq.prototype={}
A.aX.prototype={}
A.al.prototype={
gF(a){var s=this
return new A.aC(s,s.gk(s),A.ag(s).h("aC<al.E>"))},
gP(a){return this.gk(this)===0}}
A.aC.prototype={
gu(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.hg(q),o=p.gk(q)
if(r.b!==o)throw A.c(A.Q(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.av(q,s);++r.c
return!0}}
A.G.prototype={}
A.aQ.prototype={$r:"+(1,2)",$s:1}
A.J.prototype={$r:"+(1,2,3,4)",$s:2}
A.be.prototype={}
A.dx.prototype={
K(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.bc.prototype={
i(a){return"Null check operator used on a null value"}}
A.bV.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.ce.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.dm.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aY.prototype={}
A.br.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iae:1}
A.a9.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ho(r==null?"unknown":r)+"'"},
$iai:1,
gdd(){return this},
$C:"$1",
$R:1,
$D:null}
A.bH.prototype={$C:"$0",$R:0}
A.bI.prototype={$C:"$2",$R:2}
A.cc.prototype={}
A.cb.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ho(s)+"'"}}
A.az.prototype={
L(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.az))return!1
return this.$_target===b.$_target&&this.a===b.a},
gl(a){return(A.el(this.a)^A.c8(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c9(this.a)+"'")}}
A.ca.prototype={
i(a){return"RuntimeError: "+this.a}}
A.aj.prototype={
gk(a){return this.a},
gP(a){return this.a===0},
gW(){return new A.ak(this,this.$ti.h("ak<1>"))},
m(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cX(b)},
cX(a){var s,r,q=this.d
if(q==null)return null
s=this.cn(q,a)
r=this.bV(s,a)
if(r<0)return null
return s[r].b},
C(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.bc(s==null?m.b=m.aQ():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.bc(r==null?m.c=m.aQ():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aQ()
p=J.V(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.aH(b,c)]
else{n=m.bV(o,b)
if(n>=0)o[n].b=c
else o.push(m.aH(b,c))}}},
a8(a,b){var s,r,q=this
q.$ti.h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.Q(q))
s=s.c}},
bc(a,b,c){var s,r=this.$ti
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.aH(b,c)
else s.b=c},
aH(a,b){var s=this,r=s.$ti,q=new A.cB(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
cn(a,b){return a[J.V(b)&1073741823]},
bV(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a2(a[r].a,b))return r
return-1},
i(a){return A.fw(this)},
aQ(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ifs:1}
A.cB.prototype={}
A.ak.prototype={
gk(a){return this.a.a},
gP(a){return this.a.a===0},
gF(a){var s=this.a
return new A.bY(s,s.r,s.e,this.$ti.h("bY<1>"))}}
A.bY.prototype={
gu(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.Q(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.ee.prototype={
$1(a){return this.a(a)},
$S:7}
A.ef.prototype={
$2(a,b){return this.a(a,b)},
$S:12}
A.eg.prototype={
$1(a){return this.a(A.q(a))},
$S:13}
A.a8.prototype={
i(a){return this.bH(!1)},
bH(a){var s,r,q,p,o,n=this.ck(),m=this.aP(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.h(m,q)
o=m[q]
l=a?l+A.fy(o):l+A.p(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
ck(){var s,r=this.$s
while($.dZ.length<=r)B.a.j($.dZ,null)
s=$.dZ[r]
if(s==null){s=this.cc()
B.a.C($.dZ,r,s)}return s},
cc(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.e(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.C(k,q,r[s])}}return A.eI(k,t.K)}}
A.aO.prototype={
aP(){return[this.a,this.b]},
L(a,b){if(b==null)return!1
return b instanceof A.aO&&this.$s===b.$s&&J.a2(this.a,b.a)&&J.a2(this.b,b.b)},
gl(a){return A.eJ(this.$s,this.a,this.b,B.f)}}
A.aP.prototype={
aP(){return this.a},
L(a,b){if(b==null)return!1
return b instanceof A.aP&&this.$s===b.$s&&A.iF(this.a,b.a)},
gl(a){return A.eJ(this.$s,A.i2(this.a),B.f,B.f)}}
A.bU.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
gcs(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.fp(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
cS(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dX(s)},
$idn:1,
$iig:1}
A.dX.prototype={}
A.aE.prototype={
gn(a){return B.a4},
$il:1}
A.ba.prototype={}
A.c_.prototype={
gn(a){return B.a5},
$il:1}
A.aG.prototype={
gk(a){return a.length},
$iL:1}
A.b8.prototype={$ii:1,$ij:1}
A.b9.prototype={$ii:1,$ij:1}
A.aF.prototype={
gn(a){return B.a6},
$il:1,
$iaF:1}
A.c0.prototype={
gn(a){return B.a7},
$il:1}
A.c1.prototype={
gn(a){return B.a8},
$il:1}
A.c2.prototype={
gn(a){return B.a9},
$il:1}
A.c3.prototype={
gn(a){return B.aa},
$il:1}
A.c4.prototype={
gn(a){return B.ac},
$il:1}
A.c5.prototype={
gn(a){return B.ad},
$il:1}
A.bb.prototype={
gn(a){return B.ae},
gk(a){return a.length},
$il:1}
A.c6.prototype={
gn(a){return B.af},
gk(a){return a.length},
$il:1}
A.bm.prototype={}
A.bn.prototype={}
A.bo.prototype={}
A.bp.prototype={}
A.Y.prototype={
h(a){return A.bw(v.typeUniverse,this,a)},
t(a){return A.fQ(v.typeUniverse,this,a)}}
A.cj.prototype={}
A.e1.prototype={
i(a){return A.N(this.a,null)}}
A.ci.prototype={
i(a){return this.a}}
A.bs.prototype={$ia5:1}
A.dE.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:8}
A.dD.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:14}
A.dF.prototype={
$0(){this.a.$0()},
$S:4}
A.dG.prototype={
$0(){this.a.$0()},
$S:4}
A.e_.prototype={
c7(a,b){if(self.setTimeout!=null)self.setTimeout(A.bA(new A.e0(this,b),0),a)
else throw A.c(A.eO("`setTimeout()` not found."))}}
A.e0.prototype={
$0(){this.b.$0()},
$S:0}
A.cf.prototype={
aZ(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.bf(a)
else{s=r.a
if(q.h("a3<1>").b(a))s.bg(a)
else s.bj(a)}},
b_(a,b){var s
if(b==null)b=A.cs(a)
s=this.a
if(this.b)s.aK(new A.P(a,b))
else s.aI(new A.P(a,b))}}
A.e5.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.e6.prototype={
$2(a,b){this.a.$2(1,new A.aY(a,t.l.a(b)))},
$S:15}
A.e9.prototype={
$2(a,b){this.a(A.k(a),b)},
$S:16}
A.P.prototype={
i(a){return A.p(this.a)},
$it:1,
gah(){return this.b}}
A.ch.prototype={
b_(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.fB("Future already completed"))
s.aI(A.j6(a,b))},
bM(a){return this.b_(a,null)}}
A.bi.prototype={
aZ(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.fB("Future already completed"))
s.bf(r.h("1/").a(a))}}
A.a7.prototype={
cZ(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.aU(s,t.x.a(this.d),a.a,t.y,t.K)},
cV(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.cz(l,q,m,a.b,o,n,t.l)
else p=l.aU(l,t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.r.b(A.a1(s))){if((r.c&1)!==0)throw A.c(A.ax("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.ax("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.A.prototype={
c0(a,b,c){var s,r,q,p=this.$ti
p.t(c).h("1/(2)").a(a)
s=$.w
if(s===B.h){if(b!=null&&!t.Q.b(b)&&!t.v.b(b))throw A.c(A.bE(b,"onError",u.c))}else{r=p.c
a=s.bu(s,c.h("@<0/>").t(r).h("1(2)").a(a),c.h("0/"),r)
if(b!=null)b=A.h6(b,s)}q=new A.A(s,c.h("A<0>"))
r=b==null?1:3
this.ai(new A.a7(q,r,a,b,p.h("@<1>").t(c).h("a7<1,2>")))
return q},
bF(a,b,c){var s,r=this.$ti
r.t(c).h("1/(2)").a(a)
s=new A.A($.w,c.h("A<0>"))
this.ai(new A.a7(s,19,a,b,r.h("@<1>").t(c).h("a7<1,2>")))
return s},
cB(a){this.a=this.a&1|16
this.c=a},
ak(a){this.a=a.a&30|this.a&1
this.c=a.c},
ai(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.ai(a)
return}r.ak(s)}q=r.b
q.ab(q,new A.dJ(r,a))}},
br(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.br(a)
return}m.ak(n)}l.a=m.ap(a)
s=m.b
s.ab(s,new A.dN(l,m))}},
ao(){var s=t.F.a(this.c)
this.c=null
return this.ap(s)},
ap(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bj(a){var s,r=this
r.$ti.c.a(a)
s=r.ao()
r.a=8
r.c=a
A.aM(r,s)},
cb(a){var s=this.ao()
this.ak(a)
A.aM(this,s)},
aK(a){var s=this.ao()
this.cB(a)
A.aM(this,s)},
bf(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("a3<1>").b(a)){this.bg(a)
return}this.c9(a)},
c9(a){var s,r=this
r.$ti.c.a(a)
r.a^=2
s=r.b
s.ab(s,new A.dL(r,a))},
bg(a){A.eP(this.$ti.h("a3<1>").a(a),this,!1)
return},
aI(a){var s
this.a^=2
s=this.b
s.ab(s,new A.dK(this,a))},
$ia3:1}
A.dJ.prototype={
$0(){A.aM(this.a,this.b)},
$S:0}
A.dN.prototype={
$0(){A.aM(this.b,this.a.a)},
$S:0}
A.dM.prototype={
$0(){A.eP(this.a.a,this.b,!0)},
$S:0}
A.dL.prototype={
$0(){this.a.bj(this.b)},
$S:0}
A.dK.prototype={
$0(){this.a.aK(this.b)},
$S:0}
A.dQ.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.bv(p,t.bd.a(q.d),t.z)}catch(o){s=A.a1(o)
r=A.aU(o)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
p=r
if(p==null)p=A.cs(q)
n=k.a
n.c=new A.P(q,p)
q=n}q.b=!0
return}if(j instanceof A.A&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.A){m=k.b.a
l=new A.A(m.b,m.$ti)
j.c0(new A.dR(l,m),new A.dS(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.dR.prototype={
$1(a){this.a.cb(this.b)},
$S:8}
A.dS.prototype={
$2(a,b){A.bx(a)
t.l.a(b)
this.a.aK(new A.P(a,b))},
$S:17}
A.dP.prototype={
$0(){var s,r,q,p,o,n,m,l,k
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
l=p.b.b
q.c=l.aU(l,o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(k){s=A.a1(k)
r=A.aU(k)
q=s
p=r
if(p==null)p=A.cs(q)
o=this.a
o.c=new A.P(q,p)
o.b=!0}},
$S:0}
A.dO.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.cZ(s)&&p.a.e!=null){p.c=p.a.cV(s)
p.b=!1}}catch(o){r=A.a1(o)
q=A.aU(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.cs(p)
m=l.b
m.c=new A.P(p,n)
p=m}p.b=!0}},
$S:0}
A.cg.prototype={}
A.co.prototype={}
A.dB.prototype={
cM(a,b){return new A.dC(this,this.cv(this,b.h("0()").a(a),b),b)},
bl(a,b,c){var s,r,q,p,o,n,m,l
t.l.a(c)
s=null
if(s==null){A.jm(b,c)
return}r=s.gb9()
q=r.gde()
p=$.w
try{$.w=q
s.cU(r,r.gaS(),a,b,c)
$.w=p}catch(m){o=A.a1(m)
n=A.aU(m)
$.w=p
l=b===o?c:n
q.bl(r,o,l)}},
bv(a,b,c){var s,r,q
c.h("0()").a(b)
r=$.w
if(r===a)return b.$0()
s=r
$.w=a
try{r=b.$0()
return r}finally{$.w=s}q=null.gb9()
return null.df(q,q.gaS(),a,b)},
aU(a,b,c,d,e){var s,r,q
d.h("@<0>").t(e).h("1(2)").a(b)
e.a(c)
r=$.w
if(r===a)return b.$1(c)
s=r
$.w=a
try{r=b.$1(c)
return r}finally{$.w=s}q=null.gb9()
return null.cU(q,q.gaS(),a,b,c)},
cz(a,b,c,d,e,f,g){var s,r,q
e.h("@<0>").t(f).t(g).h("1(2,3)").a(b)
f.a(c)
g.a(d)
r=$.w
if(r===a)return b.$2(c,d)
s=r
$.w=a
try{r=b.$2(c,d)
return r}finally{$.w=s}q=null.gb9()
return null.dg(q,q.gaS(),a,b,c,d)},
cv(a,b,c){c.h("0()").a(b)
return b},
bu(a,b,c,d){c.h("@<0>").t(d).h("1(2)").a(b)
return b},
bt(a,b,c,d,e){c.h("@<0>").t(d).t(e).h("1(2,3)").a(b)
return b},
cj(a,b,c){return null},
ab(a,b){A.jn(a,t.M.a(b))
return}}
A.dC.prototype={
$0(){var s=this.a
return s.bv(s,this.b,this.c)},
$S(){return this.c.h("0()")}}
A.e8.prototype={
$0(){A.hM(this.a,this.b)},
$S:0}
A.bj.prototype={
gk(a){return this.a},
gP(a){return this.a===0},
gW(){return new A.bk(this,this.$ti.h("bk<1>"))},
cO(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.ce(a)},
ce(a){var s=this.d
if(s==null)return!1
return this.Z(this.bi(s,a),a)>=0},
m(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.fH(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.fH(q,b)
return r}else return this.cm(b)},
cm(a){var s,r,q=this.d
if(q==null)return null
s=this.bi(q,a)
r=this.Z(s,a)
return r<0?null:s[r+1]},
C(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.be(s==null?m.b=A.eQ():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.be(r==null?m.c=A.eQ():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.eQ()
p=A.el(b)&1073741823
o=q[p]
if(o==null){A.eR(q,p,[b,c]);++m.a
m.e=null}else{n=m.Z(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
a8(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.bh()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.m(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.c(A.Q(m))}},
bh(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.am(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
be(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.eR(a,b,c)},
bi(a,b){return a[A.el(b)&1073741823]}}
A.bl.prototype={
Z(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.bk.prototype={
gk(a){return this.a.a},
gP(a){return this.a.a===0},
gF(a){var s=this.a
return new A.ck(s,s.bh(),this.$ti.h("ck<1>"))}}
A.ck.prototype={
gu(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.Q(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.ap.prototype={
gF(a){var s=this,r=new A.aN(s,s.r,A.ag(s).h("aN<1>"))
r.c=s.e
return r},
gk(a){return this.a},
T(a,b){var s
if((b&1073741823)===b){s=this.c
if(s==null)return!1
return t.R.a(s[b])!=null}else return this.cd(b)},
cd(a){var s=this.d
if(s==null)return!1
return this.Z(s[this.bk(a)],a)>=0},
j(a,b){var s,r,q=this
A.ag(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bd(s==null?q.b=A.eS():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bd(r==null?q.c=A.eS():r,b)}else return q.c8(b)},
c8(a){var s,r,q,p=this
A.ag(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.eS()
r=p.bk(a)
q=s[r]
if(q==null)s[r]=[p.aR(a)]
else{if(p.Z(q,a)>=0)return!1
q.push(p.aR(a))}return!0},
bd(a,b){A.ag(this).c.a(b)
if(t.R.a(a[b])!=null)return!1
a[b]=this.aR(b)
return!0},
aR(a){var s=this,r=new A.cn(A.ag(s).c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
bk(a){return J.V(a)&1073741823},
Z(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a2(a[r].a,b))return r
return-1}}
A.cn.prototype={}
A.aN.prototype={
gu(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.Q(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}}}
A.u.prototype={
gF(a){return new A.aC(a,a.length,A.bB(a).h("aC<u.E>"))},
av(a,b){if(!(b>=0&&b<a.length))return A.h(a,b)
return a[b]},
gbX(a){return a.length!==0},
i(a){return A.eF(a,"[","]")}}
A.z.prototype={
a8(a,b){var s,r,q,p=A.ag(this)
p.h("~(z.K,z.V)").a(b)
for(s=this.gW(),s=s.gF(s),p=p.h("z.V");s.q();){r=s.gu()
q=this.m(0,r)
b.$2(r,q==null?p.a(q):q)}},
gk(a){var s=this.gW()
return s.gk(s)},
gP(a){var s=this.gW()
return s.gP(s)},
i(a){return A.fw(this)},
$iaD:1}
A.cC.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.p(a)
r.a=(r.a+=s)+": "
s=A.p(b)
r.a+=s},
$S:9}
A.aJ.prototype={
i(a){return A.eF(this,"{","}")},
$ii:1}
A.bq.prototype={}
A.cl.prototype={
m(a,b){var s,r=this.b
if(r==null)return this.c.m(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.cu(b):s}},
gk(a){return this.b==null?this.c.a:this.al().length},
gP(a){return this.gk(0)===0},
gW(){if(this.b==null){var s=this.c
return new A.ak(s,s.$ti.h("ak<1>"))}return new A.cm(this)},
a8(a,b){var s,r,q,p,o=this
t.cQ.a(b)
if(o.b==null)return o.c.a8(0,b)
s=o.al()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.e7(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.Q(o))}},
al(){var s=t.aL.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
cu(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.e7(this.a[a])
return this.b[a]=s}}
A.cm.prototype={
gk(a){return this.a.gk(0)},
av(a,b){var s=this.a
if(s.b==null)s=s.gW().av(0,b)
else{s=s.al()
if(!(b>=0&&b<s.length))return A.h(s,b)
s=s[b]}return s},
gF(a){var s=this.a
if(s.b==null){s=s.gW()
s=s.gF(s)}else{s=s.al()
s=new J.ay(s,s.length,A.K(s).h("ay<1>"))}return s}}
A.bJ.prototype={}
A.bL.prototype={}
A.b4.prototype={
i(a){var s=A.bO(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.bW.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.cw.prototype={
bN(a,b){var s=A.jk(a,this.gcP().a)
return s},
bO(a,b){var s=A.iv(a,this.gcQ().b,null)
return s},
gcQ(){return B.O},
gcP(){return B.N}}
A.cy.prototype={}
A.cx.prototype={}
A.dV.prototype={
c3(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.Y(a,r,q)
r=q+1
o=A.F(92)
s.a+=o
o=A.F(117)
s.a+=o
o=A.F(100)
s.a+=o
o=p>>>8&15
o=A.F(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.F(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.F(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.Y(a,r,q)
r=q+1
o=A.F(92)
s.a+=o
switch(p){case 8:o=A.F(98)
s.a+=o
break
case 9:o=A.F(116)
s.a+=o
break
case 10:o=A.F(110)
s.a+=o
break
case 12:o=A.F(102)
s.a+=o
break
case 13:o=A.F(114)
s.a+=o
break
default:o=A.F(117)
s.a+=o
o=A.F(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.F(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.F(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.Y(a,r,q)
r=q+1
o=A.F(92)
s.a+=o
o=A.F(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.Y(a,r,m)},
aJ(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.bW(a,null))}B.a.j(s,a)},
aF(a){var s,r,q,p,o=this
if(o.c2(a))return
o.aJ(a)
try{s=o.b.$1(a)
if(!o.c2(s)){q=A.fq(a,null,o.gbq())
throw A.c(q)}q=o.a
if(0>=q.length)return A.h(q,-1)
q.pop()}catch(p){r=A.a1(p)
q=A.fq(a,r,o.gbq())
throw A.c(q)}},
c2(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.i(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.c3(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.aJ(a)
q.da(a)
s=q.a
if(0>=s.length)return A.h(s,-1)
s.pop()
return!0}else if(a instanceof A.z){q.aJ(a)
r=q.dc(a)
s=q.a
if(0>=s.length)return A.h(s,-1)
s.pop()
return r}else return!1},
da(a){var s,r=this.c
r.a+="["
if(J.hB(a)){if(0>=a.length)return A.h(a,0)
this.aF(a[0])
for(s=1;s<a.length;++s){r.a+=","
this.aF(a[s])}}r.a+="]"},
dc(a){var s,r,q,p,o,n,m=this,l={}
if(a.gP(a)){m.c.a+="{}"
return!0}s=a.gk(a)*2
r=A.am(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.a8(0,new A.dW(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.c3(A.q(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.h(r,n)
m.aF(r[n])}p.a+="}"
return!0}}
A.dW.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.C(s,r.a++,a)
B.a.C(s,r.a++,b)},
$S:9}
A.dU.prototype={
gbq(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.bM.prototype={
L(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.bM)if(this.a===b.a)s=this.b===b.b
return s},
gl(a){return A.eJ(this.a,this.b,B.f,B.f)},
i(a){var s=this,r=A.hK(A.ib(s)),q=A.bN(A.i9(s)),p=A.bN(A.i5(s)),o=A.bN(A.i6(s)),n=A.bN(A.i8(s)),m=A.bN(A.ia(s)),l=A.fk(A.i7(s)),k=s.b,j=k===0?"":A.fk(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"}}
A.dH.prototype={
i(a){return this.aM()}}
A.t.prototype={
gah(){return A.i4(this)}}
A.bF.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bO(s)
return"Assertion failed"}}
A.a5.prototype={}
A.W.prototype={
gaO(){return"Invalid argument"+(!this.a?"(s)":"")},
gaN(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.p(p),n=s.gaO()+q+o
if(!s.a)return n
return n+s.gaN()+": "+A.bO(s.gb4())},
gb4(){return this.b}}
A.bd.prototype={
gb4(){return A.fU(this.b)},
gaO(){return"RangeError"},
gaN(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.p(q):""
else if(q==null)s=": Not greater than or equal to "+A.p(r)
else if(q>r)s=": Not in inclusive range "+A.p(r)+".."+A.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.p(r)
return s}}
A.bP.prototype={
gb4(){return A.k(this.b)},
gaO(){return"RangeError"},
gaN(){if(A.k(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.bh.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.cd.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bg.prototype={
i(a){return"Bad state: "+this.a}}
A.bK.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bO(s)+"."}}
A.bf.prototype={
i(a){return"Stack Overflow"},
gah(){return null},
$it:1}
A.dI.prototype={
i(a){return"Exception: "+this.a}}
A.aZ.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.c.Y(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.i.prototype={
gk(a){var s,r=this.gF(this)
for(s=0;r.q();)++s
return s},
av(a,b){var s,r
A.id(b,"index")
s=this.gF(this)
for(r=b;s.q();){if(r===0)return s.gu();--r}throw A.c(A.fl(b,b-r,this,"index"))},
i(a){return A.hS(this,"(",")")}}
A.x.prototype={
gl(a){return A.f.prototype.gl.call(this,0)},
i(a){return"null"}}
A.f.prototype={$if:1,
L(a,b){return this===b},
gl(a){return A.c8(this)},
i(a){return"Instance of '"+A.c9(this)+"'"},
gn(a){return A.jH(this)},
toString(){return this.i(this)}}
A.cp.prototype={
i(a){return""},
$iae:1}
A.aK.prototype={
gk(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iik:1}
A.dl.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.er.prototype={
$1(a){return this.a.aZ(this.b.h("0/?").a(a))},
$S:5}
A.es.prototype={
$1(a){if(a==null)return this.a.bM(new A.dl(a===undefined))
return this.a.bM(a)},
$S:5}
A.ea.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(A.h5(a))return a
s=this.a
a.toString
if(s.cO(a))return s.m(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.ev(A.aI(r,-864e13,864e13,"millisecondsSinceEpoch",null))
return new A.bM(r,0,!0)}if(a instanceof RegExp)throw A.c(A.ax("structured clone of RegExp",null))
if(a instanceof Promise)return A.eq(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.hZ(p,p)
s.C(0,a,o)
n=Object.keys(a)
m=[]
for(s=n.length,l=0;l<n.length;n.length===s||(0,A.U)(n),++l)m.push(A.hd(n[l]))
for(k=0;k<n.length;++k){j=n[k]
if(!(k<m.length))return A.h(m,k)
i=m[k]
if(j!=null)o.C(0,i,this.$1(a[j]))}return o}if(a instanceof Array){h=a
o=[]
s.C(0,a,o)
g=A.k(a.length)
for(k=0;k<g;++k){if(!(k<h.length))return A.h(h,k)
o.push(this.$1(h[k]))}return o}return a},
$S:18}
A.dY.prototype={
c6(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.b.G(a-s,k)
r=a>>>0
a=B.b.G(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.b.G(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.b.G(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.b.G(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.b.G(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.b.G(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.a_()
l.a_()
l.a_()
l.a_()},
a_(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.b.G(o-n+(q-p)+(m-r),4294967296)>>>0},
d0(){var s,r=this
r.a_()
s=r.a
r.a_()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992}}
A.X.prototype={
bK(a){var s,r,q=this
a.a=q.b
s=q.c
a.b=s
r=A.b5(q.d,t.L)
a.sbZ(r)
a.d=q.e
a.e=q.f
a.f=q.r&&s.gV()},
gba(){var s,r,q=this,p=q.r?" (dotted quarter)":""
p=A.e([""+q.b+" BPM"+p,q.c.gX()],t.s)
s=q.e
if(s!==B.i){r=A.dp(" \\(\\d\\)")
p.push(A.hm(s.d,r,""))}if((s.c&1)===0&&q.f>50)p.push("swing "+q.f+"%")
return B.a.R(p," \xb7 ")},
c1(){var s,r,q,p=this,o=p.c.gM(),n=A.e([],t.s)
for(s=p.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.U)(s),++q)n.push(s[q].b)
return A.ft(["name",p.a,"bpm",p.b,"meter",o,"levels",n,"sub",p.e.b,"swing",p.f,"dotted",p.r],t.N,t.K)}}
A.eu.prototype={
$6$dotted$sub$swing(a,b,c,d,e,f){var s=A.b7(c)
return new A.X(a,b,s,s.a3(),e,f,d)},
$3(a,b,c){return this.$6$dotted$sub$swing(a,b,c,!1,B.i,50)},
$4$sub(a,b,c,d){return this.$6$dotted$sub$swing(a,b,c,!1,d,50)},
$5$sub$swing(a,b,c,d,e){return this.$6$dotted$sub$swing(a,b,c,!1,d,e)},
$4$dotted(a,b,c,d){return this.$6$dotted$sub$swing(a,b,c,d,B.i,50)},
$S:19}
A.ej.prototype={
$1(a){return A.k(a)>this.a},
$S:1}
A.ek.prototype={
$0(){return 300},
$S:10}
A.eo.prototype={
$1(a){return A.k(a)<this.a},
$S:1}
A.ep.prototype={
$0(){return 20},
$S:10}
A.M.prototype={
aM(){return"Level."+this.b}}
A.cz.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:20}
A.cA.prototype={
$0(){return B.n},
$S:21}
A.ao.prototype={
aM(){return"Voice."+this.b}}
A.E.prototype={
aM(){return"Subdivision."+this.b}}
A.dt.prototype={
$1(a){return t.Y.a(a).b===this.a},
$S:22}
A.du.prototype={
$0(){return B.i},
$S:23}
A.b6.prototype={
c5(a,b,c){var s,r=this.a
if(r<1||r>32)throw A.c(A.bE(r,"beats","must be 1 to 32"))
s=this.b
if(!B.a.T(B.p,s))throw A.c(A.bE(s,"unit","must be one of "+A.p(B.p)))
s=this.c
if(B.a.bJ(s,new A.cD())||B.a.cT(s,0,new A.cE(),t.S)!==r)throw A.c(A.bE(c,"groups","must add up to "+r))},
gV(){if(this.b>=8){var s=this.a
s=B.b.aa(s,3)===0&&s>3&&B.a.a4(this.c,new A.cH())}else s=!1
return s},
gaG(){var s,r,q,p,o,n=A.e([],t.t)
for(s=this.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
B.a.j(n,q)
q+=o}return n},
gX(){var s=this,r=s.c,q=B.a.a4(r,new A.cI())||s.gV(),p=""+s.a,o=""+s.b
return q?p+"/"+o:p+"/"+o+" ("+B.a.R(r,"+")+")"},
gM(){var s=this.c,r=""+this.a,q=""+this.b
return B.a.a4(s,new A.cF())?r+"/"+q:r+"/"+q+":"+B.a.R(s,"+")},
a3(){var s,r,q,p,o=this.gaG(),n=A.fv(o,A.K(o).c)
o=A.e([],t.a)
for(s=this.a,r=this.c,q=0;q<s;++q){if(q===0)p=B.y
else if(n.T(0,q))p=B.n
else p=B.a.a4(r,new A.cG())?B.n:B.z
o.push(p)}return o},
L(a,b){if(b==null)return!1
return b instanceof A.b6&&b.gM()===this.gM()},
gl(a){return B.c.gl(this.gM())}}
A.cD.prototype={
$1(a){return A.k(a)<1},
$S:1}
A.cE.prototype={
$2(a,b){return A.k(a)+A.k(b)},
$S:24}
A.cH.prototype={
$1(a){return A.k(a)===3},
$S:1}
A.cI.prototype={
$1(a){return A.k(a)===1},
$S:1}
A.cF.prototype={
$1(a){return A.k(a)===1},
$S:1}
A.cG.prototype={
$1(a){return A.k(a)===1},
$S:1}
A.cu.prototype={
gbL(){var s=60/this.a
return this.f&&this.b.gV()?s/3:s},
cN(a){var s,r,q=this,p=q.gbL(),o=q.d.c,n=p/o
if((o&1)!==0||q.e===50)return n
s=n*2
r=B.b.p(q.e,50,75)/100
return(a&1)===0?s*r:s*(1-r)},
d8(a,b){var s,r=this.c
if(!(a<r.length))return A.h(r,a)
s=r[a]
if(s===B.A)return B.k
if(b>0)return B.v
switch(s.a){case 0:r=B.j
break
case 1:r=B.o
break
case 2:r=B.D
break
case 3:r=B.k
break
default:r=null}return r},
sbZ(a){this.c=t.B.a(a)}}
A.ds.prototype={
b5(a){var s,r=this,q=!1
if(r.a)if(r.c>=1){s=r.b
if(s!==0){q=r.d
q=s>0?B.b.p(B.b.B(q),20,300)>a:B.b.p(B.b.B(q),20,300)<a}}return q},
b7(a,b){var s,r,q,p=this
if(!p.b5(a))return a
s=B.b.p(B.b.B(p.d),20,300)
r=p.b
q=a+r*B.b.bb(b,p.c)
return B.b.p(B.d.B(r>0?Math.min(q,s):Math.max(q,s)),20,300)},
cL(a,b){var s,r=this
if(!r.b5(a)||r.b7(a,b)===B.b.p(B.b.B(r.d),20,300))return null
s=r.c
return s-B.b.aa(b,s)},
d1(a,b){var s,r,q,p,o,n,m=this
if(!m.a)return""
if(!m.b5(a)){s=m.b
if(s===0)s="Speed trainer: set a change other than 0 BPM."
else{r=m.d
s=s>0?"not above":"not below"
s="Speed trainer: the target ("+r+" BPM) is "+s+" the current tempo, so the tempo will stay put."}return s}q=m.b7(a,b)
p=m.cL(a,b)
if(p==null)return"Speed trainer: reached "+m.d+" BPM. Holding here."
s=m.b
o=s>0?"+":"\u2212"
r=m.d
n=p===1?"":"s"
return"Speed trainer: "+q+" \u2192 "+r+" BPM \xb7 next "+o+Math.abs(s)+" in "+A.p(p)+" bar"+n}}
A.ct.prototype={
bW(a){var s,r=this
if(!r.a||r.c<1||r.b<1)return!1
s=r.b
return B.b.aa(a,s+r.c)>=s}}
A.aW.prototype={
i(a){var s=this
return"Click("+B.d.d3(s.a,3)+", "+s.b.i(0)+", bar "+s.c+", cell "+s.d+"."+s.e+")"}}
A.dr.prototype={
b6(){var s,r,q=this
q.d=q.a.a
s=q.y===0&&q.z===0
r=q.x
q.e=s?r:r+1},
d_(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(g.r>0){s=g.a
r=s.b
q=r.c
p=r.gaG()
r=g.w
o=q.length
n=B.b.aa(r,o)
m=g.Q
l=n===0?B.j:B.o
k=g.f
r=B.b.bb(r,o)
if(!(n<p.length))return A.h(p,n)
j=p[n]
i=s.a
g.Q=m+s.gbL()*q[n];++g.w;--g.r
return new A.aW(m,l,-k+r,j,0,i,!0,n+1,o)}s=g.y
r=g.a
if(s>=r.b.a){s=g.z=g.y=0;++g.x}o=g.z
if(o>=r.d.c)o=g.z=0
if(s===0&&o===0&&g.b.a)r.a=g.b.b7(g.d,g.x-g.e)
h=g.c.bW(g.x)?B.k:r.d8(g.y,g.z)
s=g.Q
o=g.x
m=g.y
l=g.z
k=r.a
g.Q=s+r.cN(l)
if(++g.z>=r.d.c){g.z=0
if(++g.y>=r.b.a){g.y=0;++g.x}}return new A.aW(s,h,o,m,l,k,!1,0,0)}}
A.dw.prototype={
d2(a){var s=this.c
if(s.length!==0&&a-B.a.gbY(s)>2000)B.a.S(s)
B.a.j(s,a)
if(s.length>5)B.a.aE(s,0)
if(s.length<2)return null
return B.b.p(B.d.B(6e4/((B.a.gbY(s)-B.a.gb2(s))/(s.length-1))),20,300)}}
A.en.prototype={
$1(a){return this.a.$0()},
$S:3}
A.em.prototype={
$1(a){return this.a.$0()},
$S:3}
A.dz.prototype={
a2(){var s=0,r=A.h4(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$a2=A.h9(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:n.b=!0
m=A.a(v.G.navigator).wakeLock
k=t.m
if(!k.b(m)||n.a!=null){s=1
break}p=4
l=A.aa(A.a(m),"request","screen",null,k)
s=7
return A.fV(A.eq(l,k),$async$a2)
case 7:k=b
n.a=k
k.toString
A.o(k,"release",new A.dA(n))
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
case 6:case 1:return A.fX(q,r)
case 2:return A.fW(o.at(-1),r)}})
return A.fY($async$a2,r)},
c_(){var s,r
this.b=!1
s=this.a
this.a=null
if(s!=null)try{A.aa(s,"release",null,null,t.X)}catch(r){}}}
A.dA.prototype={
$0(){return this.a.a=null},
$S:0}
A.et.prototype={
$1(a){A.bx(a)
return null},
$S:25}
A.eA.prototype={
$0(){var s,r=A.e4(this.a.getAttribute("data-theme"))==="light",q=r?"Switch to dark theme":"Switch to light theme",p=this.b
p.setAttribute("aria-label",q)
p.setAttribute("title",q)
s=A.S(p.firstElementChild)
if(s!=null){p=r?"\u263e":"\u2600"
s.textContent=p}},
$S:0}
A.ez.prototype={
$0(){var s=this.a,r=A.e4(s.getAttribute("data-theme"))==="light"?"dark":"light"
s.setAttribute("data-theme",r)
A.T("ds-theme",r)
this.b.$0()},
$S:0}
A.ew.prototype={
$1(a){A.a(a)
A.aa(a,"preventDefault",null,null,t.X)
this.a.a=a
this.b.hidden=!1},
$S:2}
A.ex.prototype={
$0(){var s=0,r=A.h4(t.H),q,p=2,o=[],n=this,m,l,k,j
var $async$$0=A.h9(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:l=n.a
k=l.a
if(k==null){s=1
break}l.a=null
p=4
l=t.X
A.aa(k,"prompt",null,null,l)
s=7
return A.fV(A.eq(A.a(k.userChoice),l),$async$$0)
case 7:p=2
s=6
break
case 4:p=3
j=o.pop()
s=6
break
case 3:s=2
break
case 6:n.b.hidden=!0
case 1:return A.fX(q,r)
case 2:return A.fW(o.at(-1),r)}})
return A.fY($async$$0,r)},
$S:26}
A.ey.prototype={
$0(){this.a.hidden=!0
return!0},
$S:0}
A.bZ.prototype={
gI(){var s,r=this,q=r.d
if(q===$){s=r.a
q=r.d=new A.dr(s,r.b,r.c,s.a)}return q},
gaL(){var s,r=this,q=r.b1
if(q===$){s=A.Z(r.gcg())
r.b1!==$&&A.fb()
r.b1=s
q=s}return q},
d9(){var s,r,q,p=this,o="input",n="change",m="click"
p.cw()
p.cl()
p.ca()
A.o(p.f,o,new A.d3(p))
s=p.e
A.o(s,o,new A.d4(p))
A.o(s,n,new A.d5(p))
s=t.m
p.am(A.d("bpm-down",s),-1)
p.am(A.d("bpm-up",s),1)
A.o(A.d("bpm-prev",s),m,new A.dd(p))
A.o(A.d("bpm-next",s),m,new A.de(p))
r=p.gd4()
A.o(p.x,m,r)
q=p.gcF()
A.o(A.d("tap",s),m,q)
A.o(p.z,m,r)
A.o(A.d("q-tap",s),m,q)
p.am(A.d("q-down",s),-1)
p.am(A.d("q-up",s),1)
q=v.G
A.a(q.document).addEventListener("scroll",A.Z(new A.df(p)))
A.hj("resize",p.gd7())
r=p.gcq()
A.o(p.ay,n,r)
A.o(p.ch,n,r)
A.o(p.CW,n,new A.dg(p))
A.o(p.dx,n,new A.dh(p))
A.o(A.d("reset-accents",s),m,new A.di(p))
A.o(p.dy,n,new A.dj(p))
A.o(p.fx,o,new A.dk(p))
A.o(p.go,n,new A.d6(p))
A.o(p.id,o,new A.d7(p))
A.o(p.k1,o,new A.d8(p))
if("vibrate" in A.a(q.navigator)){p.k2.hidden=!1
A.o(p.k3,n,new A.d9(p))}A.o(p.ok,n,new A.da(p))
A.o(p.k4,n,new A.db(p))
p.cK()
p.cJ()
p.cI()
A.a(q.document).addEventListener("visibilitychange",A.Z(new A.dc(p)))
p.by()},
cl(){var s,r,q,p,o,n,m="option"
for(s=this.ay,r=1;r<=32;++r){q=""+r
p=A.I(m,null,q)
p.setAttribute("value",q)
s.appendChild(p)}for(s=this.ch,o=0;o<4;++o){q=""+B.p[o]
p=A.I(m,null,q)
p.setAttribute("value",q)
s.appendChild(p)}for(s=this.dy,o=0;o<8;++o){n=B.B[o]
q=A.I(m,null,n.d)
q.setAttribute("value",n.b)
s.appendChild(q)}},
ca(){var s,r,q,p,o,n
for(s=["4/4","3/4","2/4","5/4","6/8","7/8","9/8","12/8"],r=s.length,q=this.cy,p=0;p<r;++p){o=s[p]
n=A.I("button","chip",o)
n.setAttribute("type","button")
n.setAttribute("aria-label","Time signature "+o)
A.o(n,"click",new A.cL(this,o))
q.appendChild(n)}},
v(a){var s=B.c.a9(B.c.a9(a)),r=A.eL(s,null)
if(r==null)r=A.ic(s)
return r==null?null:B.d.B(r)},
am(a,b){var s,r,q,p,o={}
o.a=o.b=null
s=o.c=0
r=new A.cT(o)
a.addEventListener("pointerdown",A.Z(new A.cP(o,this,r,b)))
for(q=["pointerup","pointercancel","pointerleave"],p=q.length;s<p;++s)a.addEventListener(q[s],A.Z(new A.cQ(r)))
a.addEventListener("contextmenu",A.Z(new A.cR()))
a.addEventListener("click",A.Z(new A.cS(this,b)))},
bx(a,b){var s=this,r=s.a
r.a=B.b.p(B.b.B(a),20,300)
s.gI().b6()
s.bB(b)
if(!s.H)s.au()
A.T("ds-last",A.a0(A.e([A.ad("last",r)],t.e)))},
D(a){return this.bx(a,!1)},
bB(a){var s,r,q,p,o,n,m,l=this,k=l.a,j=l.bS=k.a,i=""+j
l.f.value=i
if(!a)l.e.value=i
s=A.eZ(j)
if(!(s<10))return A.h(B.e,s)
l.w.textContent=B.e[s].a[1]
s=A.eZ(j)
if(!(s<10))return A.h(B.e,s)
s=B.e[s].a
l.p2.textContent=s[2]+" (literally \u201c"+s[3]+"\u201d)"
r=A.eZ(j)
s=r+1
q=s<10?B.e[s].a[0]-1:300
if(!(r<10))return A.h(B.e,r)
l.p1.textContent=""+B.e[r].a[0]+"\u2013"+q+" BPM"
p=A.fa(j)
o=A.f8(j)
s=l.p3
n=""+p
s.textContent="\u2039 "+n
s.setAttribute("aria-label","Previous classic metronome mark: "+n+" BPM")
s.disabled=p===j
s=l.p4
n=""+o
s.textContent=n+" \u203a"
s.setAttribute("aria-label","Next classic metronome mark: "+n+" BPM")
s.disabled=o===j
l.Q.textContent=i
if(k.f&&k.b.gV())m="dotted quarter"
else{switch(k.b.b){case 2:k="half note"
break
case 4:k="quarter note"
break
case 8:k="eighth note"
break
default:k="sixteenth note"
break}m=k}l.r.textContent="Beats per minute, counting each "+m},
a1(){return this.bB(!1)},
bD(){var s=this,r=v.G,q=s.cR.d2(A.H(A.a(r.performance).now())),p=s.bT
if(p!=null)r.clearTimeout(p)
if(q==null){s.A("Tap again in time with the beat.")
return}s.D(q)
s.bT=A.k(r.setTimeout(A.ar(new A.d_(s)),900))},
cr(){var s,r=this,q=r.v(A.q(r.ay.value))
if(q==null)q=4
s=r.v(A.q(r.ch.value))
r.aV(A.an(q,s==null?4:s,null))},
aV(a){var s=this,r=s.a,q=a.a===r.b.a&&B.a.R(a.c,"+")===B.a.R(r.b.c,"+")
if(!a.gV())r.f=!1
if(!q)r.c=a.a3()
r.b=a
s.bz()
s.aj()
s.a1()
A.T("ds-last",A.a0(A.e([A.ad("last",r)],t.e)))},
bz(){var s,r,q,p,o,n,m,l=this,k=l.a,j=k.b,i=j.a,h=""+i
l.ay.value=h
s=j.b
r=""+s
l.ch.value=r
q=A.jJ(i,s)
l.cx.hidden=q.length<2
s=l.CW
s.replaceChildren()
for(i=q.length,p=0;p<q.length;q.length===i||(0,A.U)(q),++p){o=q[p]
n=o.c
n=A.I("option",null,B.a.a4(n,new A.cZ())?"Every beat":B.a.R(n," + "))
n.setAttribute("value",o.gM())
s.appendChild(n)}s.value=j.gM()
l.db.hidden=!j.gV()
l.dx.checked=k.f
for(k=A.fZ(l.cy),i=k.length,r=h+"/"+r,p=0;p<k.length;k.length===i||(0,A.U)(k),++p){m=k[p]
if(A.q(m.textContent)===r){h=j.gM()
s=A.b7(r)
h=h===(s==null?null:s.gM())}else h=!1
m.setAttribute("aria-pressed",""+h)}},
aj(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c="span",b=e.ax
b.replaceChildren()
s=e.aA
B.a.S(s)
r=e.bR
B.a.S(r)
e.aB=null
q=e.a
p=q.b.gaG()
o=A.fv(p,A.K(p).c)
n=!B.a.a4(q.b.c,new A.cJ())
for(p=t.O,m=0;m<q.b.a;m=k){l=A.I("button","cell",d)
l.setAttribute("type","button")
if(n&&o.T(0,m)&&m>0)A.a(l.classList).add("group-start")
k=m+1
l.appendChild(A.I(c,"cell-num",""+k))
j=A.I(c,"cell-mark",d)
j.setAttribute("aria-hidden","true")
l.appendChild(j)
l.appendChild(A.I(c,"cell-level",d))
i=A.e([],p)
if(q.d.c>1){h=A.I(c,"cell-subs",d)
h.setAttribute("aria-hidden","true")
for(g=0;g<q.d.c;++g){f=A.I(c,g===0?"tick is-beat":"tick",d)
h.appendChild(f)
B.a.j(i,f)}l.appendChild(h)}B.a.j(r,i)
A.o(l,"click",new A.cK(e,m))
b.appendChild(l)
B.a.j(s,l)
e.bp(m)}e.an(d)},
bp(a){var s,r,q,p,o,n=this.a.c
if(!(a<n.length))return A.h(n,a)
s=n[a]
n=this.aA
if(!(a<n.length))return A.h(n,a)
r=n[a]
for(q=0;q<4;++q){p=B.q[q]
A.y(A.a(r.classList).toggle("lv-"+p.b,p===s))}n=A.fZ(r)
if(2>=n.length)return A.h(n,2)
o=s.c
n[2].textContent=o
r.setAttribute("aria-label","Beat "+(a+1)+", "+o+". Press to change.")},
aW(){var s,r=this,q=r.a
r.dy.value=q.d.b
r.fr.hidden=(q.d.c&1)!==0
r.fx.value=""+q.e
s=q.e
A:{if(50===s){q="Straight (50%)"
break A}if(s>=66&&s<=68){q="Triplet swing ("+s+"%)"
break A}if(75===s){q="Dotted feel (75%)"
break A}q=""+s+"%"
break A}r.fy.textContent=q},
cK(){var s,r,q=t.m,p=A.d("speed-on",q),o=A.d("speed-step",q),n=A.d("speed-every",q),m=A.d("speed-target",q),l=A.d("gap-on",q),k=A.d("gap-play",q),j=A.d("gap-mute",q),i=new A.d2(this,p,o,n,m,l,k,j)
for(q=[p,o,n,m,l,k,j],s=q.length,r=0;r<s;++r)A.o(q[r],"change",i)
i.$0()},
bA(a){var s,r,q=this,p=q.x2,o=q.b
p.hidden=!o.a
if(!o.a)return
s=a==null
r=s?0:Math.max(0,a.c-q.gI().e)
p.textContent=o.d1(s?q.a.a:q.gI().d,r)},
au(){return this.bA(null)},
cJ(){var s,r,q,p=this
p.E=A.he(A.f6("ds-presets"))
A.d("preset-form",t.m).addEventListener("submit",A.Z(new A.d1(p)))
A.o(p.x1,"click",p.gcG())
for(s=A.jV(),r=p.xr,q=0;q<7;++q)r.appendChild(p.bs(s[q],!0))
p.aq()},
cA(){var s,r,q=this,p={},o=q.y1,n=A.eK(A.q(o.value))
p.a=n
if(n.length===0){s=q.a
p.a=""+s.a+" BPM "+s.b.gX()}r=B.a.bJ(q.E,new A.cX(p))
s=A.jZ(q.E,A.ad(p.a,q.a))
q.E=s
A.T("ds-presets",A.a0(s))
o.value=""
q.aq()
p=p.a
q.A(r?"Updated \u201c"+p+"\u201d.":"Saved \u201c"+p+"\u201d.")},
aq(){var s,r,q,p=this,o=p.RG
o.replaceChildren()
for(s=p.E,r=s.length,q=0;q<s.length;s.length===r||(0,A.U)(s),++q)o.appendChild(p.ct(s[q]))
p.rx.hidden=p.E.length!==0},
cf(a){var s,r,q=this,p=B.a.cW(q.E,new A.cM(a))
if(p<0)return
s=A.b5(q.E,t.b)
B.a.aE(s,p)
q.E=s
A.T("ds-presets",A.a0(s))
q.aq()
q.b0=new A.aQ(p,a)
s="Deleted \u201c"+a.a
q.to.textContent=s+"\u201d."
q.ry.hidden=!1
q.x1.focus()
q.A(s+"\u201d. Press Undo to bring it back.")
r=q.aC
if(r!=null)v.G.clearTimeout(r)
q.aC=A.k(v.G.setTimeout(A.ar(q.gco()),1e4))},
cH(){var s,r,q,p,o=this,n=o.b0
if(n==null)return
s=n.a
r=n.b
q=A.b5(o.E,t.b)
p=A.k(Math.min(s,o.E.length))
A.K(q).c.a(r)
q.$flags&1&&A.bC(q,"insert",2)
if(p<0||p>q.length)A.ev(A.eM(p,null))
q.splice(p,0,r)
o.E=q
A.T("ds-presets",A.a0(q))
o.aq()
o.bm()
o.A("Restored \u201c"+r.a+"\u201d.")},
bm(){var s,r=this
r.b0=null
s=r.aC
if(s!=null)v.G.clearTimeout(s)
r.aC=null
if(A.S(A.a(v.G.document).activeElement)===r.x1)r.y1.focus()
r.ry.hidden=!0},
bs(a,b){var s,r,q=A.I("li","preset",null),p=A.I("button","preset-load",null)
p.setAttribute("type","button")
s=a.a
p.appendChild(A.I("span","preset-name",s))
p.appendChild(A.I("span","preset-sum",a.gba()))
A.o(p,"click",new A.cV(this,a))
q.appendChild(p)
if(!b){r=A.I("button","preset-del","\xd7")
r.setAttribute("type","button")
r.setAttribute("aria-label","Delete \u201c"+s+"\u201d")
A.o(r,"click",new A.cW(this,a))
q.appendChild(r)}return q},
ct(a){return this.bs(a,!1)},
cw(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.he(A.f6("ds-last"))
if(g.length!==0)B.a.gb2(g).bK(h.a)
try{j=A.f6("ds-prefs")
s=B.l.bN(j==null?"{}":j,null)
if(s instanceof A.z){r=s.m(0,"sound")
q=null
if(typeof r=="string"){q=r
j=B.a.T(B.P,q)}else j=!1
if(j)h.y2=q
p=s.m(0,"volume")
o=null
if(typeof p=="number"){o=p
h.U=J.eC(o,0,1)}n=s.m(0,"subVolume")
m=null
if(typeof n=="number"){m=n
h.ac=J.eC(m,0,1)}h.ad=J.a2(s.m(0,"haptics"),!0)
h.ae=J.a2(s.m(0,"bigFlash"),!0)
l=s.m(0,"countIn")
k=null
if(A.eY(l)){k=l
h.N=J.eC(k,0,2)}}}catch(i){if(!(A.a1(i) instanceof A.aZ))throw i}},
a0(){var s=this
return A.T("ds-prefs",B.l.bO(A.ft(["sound",s.y2,"volume",s.U,"subVolume",s.ac,"haptics",s.ad,"bigFlash",s.ae,"countIn",s.N],t.N,t.K),null))},
by(){var s=this
s.bz()
s.aj()
s.aW()
s.a1()
s.go.value=s.y2
s.id.value=""+B.d.B(s.U*100)
s.k1.value=""+B.d.B(s.ac*100)
s.k3.checked=s.ad
s.k4.checked=s.ae
s.ok.value=""+s.N},
cI(){A.a(v.G.document).addEventListener("keydown",A.Z(new A.d0(this)))},
d5(){var s,r,q,p,o,n,m,l,k,j=this
if(j.H){j.H=!1
s=j.az
if(s!=null)v.G.clearInterval(s)
r=j.ag
if(r!=null)v.G.cancelAnimationFrame(r)
q=j.O
if(q!=null)q.disconnect()
j.O=null
q=j.J
if(q!=null)A.a(q.suspend())
B.a.S(j.a5)
j.a6.c_()
q=j.a
p=q.a
o=j.b
if(o.a)q.a=j.gI().d
j.an(null)
j.ar(!1)
j.a1()
j.au()
j.A(o.a?"Stopped. You reached "+p+" BPM.":"Stopped.")}else{n=j.J
if(n==null)n=j.J=A.a(new v.G.AudioContext())
A.f9()
A.a(n.resume())
q=A.a(n.createGain())
A.a(q.connect(A.a(n.destination)))
j.O=q
A.a(q.gain).value=j.U
j.H=!0
q=j.gI()
o=j.N
q.f=o
q.Q=q.x=q.y=q.z=q.e=0
m=q.a
q.d=m.a
q.w=0
q.r=Math.max(0,o)*m.b.c.length
B.a.S(j.a5)
j.af=null
j.aw=A.H(n.currentTime)+0.08
j.aX()
m=v.G
l=j.a7
if(l===$){k=A.ar(j.gbG())
j.a7!==$&&A.fb()
j.a7=k
l=k}j.az=A.k(m.setInterval(l,25))
j.ag=A.k(m.requestAnimationFrame(j.gaL()))
j.ar(!0)
j.a6.a2()
q=j.N
if(q>0){o=q===1?"":"s"
m=j.a
m="Counting in "+q+" bar"+o+", then playing at "+m.a+" BPM, "+m.b.gX()+"."
q=m}else{q=j.a
q="Playing at "+q.a+" BPM, "+q.b.gX()+"."}j.A(q)}return null},
cD(){var s,r,q,p,o,n=this,m=n.J
if(m==null)m=n.J=A.a(new v.G.AudioContext())
A.f9()
A.a(m.resume())
s=A.a(m.createGain())
A.a(s.connect(A.a(m.destination)))
n.O=s
A.a(s.gain).value=n.U
n.H=!0
s=n.gI()
r=n.N
s.f=r
s.Q=s.x=s.y=s.z=s.e=0
q=s.a
s.d=q.a
s.w=0
s.r=Math.max(0,r)*q.b.c.length
B.a.S(n.a5)
n.af=null
n.aw=A.H(m.currentTime)+0.08
n.aX()
q=v.G
p=n.a7
if(p===$){o=A.ar(n.gbG())
n.a7!==$&&A.fb()
n.a7=o
p=o}n.az=A.k(q.setInterval(p,25))
n.ag=A.k(q.requestAnimationFrame(n.gaL()))
n.ar(!0)
n.a6.a2()
s=n.N
if(s>0){r=s===1?"":"s"
q=n.a
q="Counting in "+s+" bar"+r+", then playing at "+q.a+" BPM, "+q.b.gX()+"."
s=q}else{s=n.a
s="Playing at "+s.a+" BPM, "+s.b.gX()+"."}n.A(s)},
cE(){var s,r,q,p,o,n=this
n.H=!1
s=n.az
if(s!=null)v.G.clearInterval(s)
r=n.ag
if(r!=null)v.G.cancelAnimationFrame(r)
q=n.O
if(q!=null)q.disconnect()
n.O=null
q=n.J
if(q!=null)A.a(q.suspend())
B.a.S(n.a5)
n.a6.c_()
q=n.a
p=q.a
o=n.b
if(o.a)q.a=n.gI().d
n.an(null)
n.ar(!1)
n.a1()
n.au()
n.A(o.a?"Stopped. You reached "+p+" BPM.":"Stopped.")},
ar(a){var s,r,q,p,o,n
for(s=[this.x,this.z],r=s.length,q=""+a,p=0;p<r;++p){o=s[p]
n=a?"Stop":"Start"
o.textContent=n
o.setAttribute("aria-pressed",q)
A.y(A.a(o.classList).toggle("is-running",a))}},
b8(){var s=A.a(this.x.getBoundingClientRect()),r=A.H(s.bottom)>0&&A.H(s.top)<A.H(v.G.innerHeight),q=this.y
if(A.y(q.hidden)===r)return
q.hidden=r
A.y(A.a(A.a(A.a(v.G.document).body).classList).toggle("has-transport",!r))},
aX(){var s,r,q,p,o,n,m=this,l=m.J,k=m.O
if(!m.H||l==null||k==null)return
s=A.y(A.a(v.G.document).hidden)?1.5:0.12
for(r=m.a5;;){q=m.af
if(q==null)q=m.gI().d_()
p=m.aw
o=q.a
n=p+o
if(n<A.H(l.currentTime)){p+=A.H(l.currentTime)+0.05-n
m.aw=p
n=p+o}if(n>=A.H(l.currentTime)+s){m.af=q
break}m.af=null
m.aT(l,k,q.b,n)
B.a.j(r,new A.aQ(n,q))}while(r.length>128)B.a.aE(r,0)},
aT(a,b,c,d){var s,r,q,p,o,n,m=this
switch(c.a){case 0:s=1
break
case 1:s=0.6
break
case 2:s=0.24
break
case 3:s=0.36*m.ac
break
case 4:s=0
break
default:s=null}if(s<0.005)return
r=c===B.j
q=c===B.v
switch(m.y2){case"beep":if(r)p=1760
else p=q?880:1320
m.bI(a,b,"sine",p,s,d,0.05)
break
case"stick":if(r)p=3200
else p=q?1800:2500
m.bo(a,b,p,s*1.4,d)
break
default:if(r)o=1250
else o=q?760:950
n=A.a(a.createBiquadFilter())
n.type="bandpass"
A.a(n.connect(b))
A.a(n.frequency).value=o
A.a(n.Q).value=6
m.bI(a,n,"triangle",o,s*2.2,d,0.04)
m.bo(a,b,o*2,s*0.25,d)}},
bI(a,b,c,d,e,f,g){var s,r,q,p=A.a(a.createOscillator())
p.type=c
s=A.a(a.createGain())
A.a(p.frequency).value=d
r=A.a(s.gain)
A.a(r.setValueAtTime(e,f))
q=f+g
A.a(r.exponentialRampToValueAtTime(0.0001,q))
A.a(A.a(p.connect(s)).connect(b))
p.start(f)
p.stop(q+0.01)},
bo(a,b,c,d,e){var s,r,q,p,o=this.bP
if(o==null)o=this.bP=this.cp(a)
s=A.a(a.createBufferSource())
s.buffer=o
r=A.a(a.createBiquadFilter())
r.type="bandpass"
A.a(r.frequency).value=c
A.a(r.Q).value=1.5
q=A.a(a.createGain())
p=A.a(q.gain)
A.a(p.setValueAtTime(d,e))
A.a(p.exponentialRampToValueAtTime(0.0001,e+0.03))
A.a(A.a(A.a(s.connect(r)).connect(q)).connect(b))
s.start(e)
s.stop(e+0.04)},
cp(a){var s,r,q=B.d.B(A.H(a.sampleRate)*0.05),p=A.a(a.createBuffer(1,q,A.H(a.sampleRate))),o=t.E.a(p.getChannelData(0)),n=new A.dY()
n.c6(7)
for(s=0;s<q;++s){r=n.d0()
o.$flags&2&&A.bC(o)
if(!(s<o.length))return A.h(o,s)
o[s]=r*2-1}return p},
ci(a){var s,r,q,p,o,n=this
A.H(a)
s=n.J
if(!n.H||s==null)return
r=n.a5
q=null
p=null
for(;;){if(!(r.length!==0&&B.a.gb2(r).a<=A.H(s.currentTime)))break
o=B.a.aE(r,0).b
if(o.e===0)q=o
p=o}if(q!=null)n.an(q)
if(p!=null)n.bn(p)
n.ag=A.k(v.G.requestAnimationFrame(n.gaL()))},
an(a){var s,r,q,p,o,n,m,l,k,j=this,i=a==null,h=i?null:a.d
if(h==null)h=-1
if(i){for(i=j.aA,s=i.length,r=0;r<i.length;i.length===s||(0,A.U)(i),++r)A.y(A.a(i[r].classList).toggle("is-on",!1))
j.bn(null)
j.as.className="flash"
j.at.textContent="Not playing"
return}for(i=j.aA,s=a.r,q=!s,p=0;p<i.length;++p){o=A.a(i[p].classList)
n=q&&p===h
A.y(o.toggle("is-on",n))}m=q&&j.c.bW(a.c)
if(s)i="Count-in \xb7 "+a.w+" of "+a.x
else{i=a.c+1
i=m?"Bar "+i+" \xb7 silent: keep the time going":"Bar "+i+" \xb7 Beat "+(h+1)+" of "+j.a.b.a}j.at.textContent=i
l=a.b
A:{if(B.j===l){i="is-accent"
break A}if(B.o===l||B.v===l){i="is-normal"
break A}if(B.D===l){i="is-ghost"
break A}if(B.k===l){i="is-silent"
break A}i=null}s=j.ae&&l!==B.k?" is-big":""
j.as.className="flash "+i+s
k=j.bQ
if(k!=null)v.G.clearTimeout(k)
i=v.G
j.bQ=A.k(i.setTimeout(A.ar(new A.cU(j)),90))
if(j.ad&&l!==B.k)A.k_(l===B.j?45:20)
if(j.b.a&&a.d===0&&q)j.bA(a)
if(a.f!==j.bS&&A.S(A.a(i.document).activeElement)!==j.e)j.a1()},
bn(a){var s,r,q,p=this,o=p.aB
if(o!=null)A.a(o.classList).remove("is-on")
p.aB=null
if(a==null||a.r)return
o=a.d
s=p.bR
r=s.length
if(o>=r)return
if(!(o>=0))return A.h(s,o)
q=s[o]
o=a.e
if(o>=q.length)return
o=q[o]
A.a(o.classList).add("is-on")
p.aB=o},
A(a){this.R8.textContent=a
return a},
bw(a){var s=this.bU
if(s!=null)v.G.clearTimeout(s)
this.bU=A.k(v.G.setTimeout(A.ar(new A.cY(this,a)),600))}}
A.d3.prototype={
$0(){var s=this.a,r=s.v(A.q(s.f.value))
return s.D(r==null?s.a.a:r)},
$S:0}
A.d4.prototype={
$0(){var s=this.a,r=s.v(A.q(s.e.value))
if(r!=null&&r>=20&&r<=300)s.bx(r,!0)},
$S:0}
A.d5.prototype={
$0(){var s=this.a,r=s.v(A.q(s.e.value))
return s.D(r==null?s.a.a:r)},
$S:0}
A.dd.prototype={
$0(){var s=this.a
return s.D(A.fa(s.a.a))},
$S:0}
A.de.prototype={
$0(){var s=this.a
return s.D(A.f8(s.a.a))},
$S:0}
A.df.prototype={
$1(a){return this.a.b8()},
$S:3}
A.dg.prototype={
$0(){var s=this.a,r=A.b7(A.q(s.CW.value))
if(r!=null)s.aV(r)},
$S:0}
A.dh.prototype={
$0(){var s=this.a,r=s.a
r.f=A.y(s.dx.checked)
s.a1()
A.T("ds-last",A.a0(A.e([A.ad("last",r)],t.e)))},
$S:0}
A.di.prototype={
$0(){var s=this.a,r=s.a
r.sbZ(r.b.a3())
s.aj()
A.T("ds-last",A.a0(A.e([A.ad("last",r)],t.e)))
s.A("Accents reset.")},
$S:0}
A.dj.prototype={
$0(){var s=this.a,r=s.a
r.d=A.fD(A.q(s.dy.value))
s.aW()
s.aj()
A.T("ds-last",A.a0(A.e([A.ad("last",r)],t.e)))},
$S:0}
A.dk.prototype={
$0(){var s=this.a,r=s.a,q=s.v(A.q(s.fx.value))
r.e=q==null?50:q
s.aW()
A.T("ds-last",A.a0(A.e([A.ad("last",r)],t.e)))},
$S:0}
A.d6.prototype={
$0(){var s,r,q,p=this.a
p.y2=A.q(p.go.value)
p.a0()
if(!p.H){s=p.J
if(s==null)s=p.J=A.a(new v.G.AudioContext())
A.f9()
A.a(s.resume())
r=A.a(s.createGain())
A.a(r.connect(A.a(s.destination)))
A.a(r.gain).value=p.U
q=A.H(s.currentTime)+0.05
p.aT(s,r,B.j,q)
p.aT(s,r,B.o,q+0.25)}},
$S:0}
A.d7.prototype={
$0(){var s,r=this.a,q=r.v(A.q(r.id.value))
q=(q==null?80:q)/100
r.U=q
s=r.O
if(s!=null)A.a(s.gain).value=q
r.a0()},
$S:0}
A.d8.prototype={
$0(){var s=this.a,r=s.v(A.q(s.k1.value))
s.ac=(r==null?60:r)/100
s.a0()},
$S:0}
A.d9.prototype={
$0(){var s=this.a
s.ad=A.y(s.k3.checked)
s.a0()},
$S:0}
A.da.prototype={
$0(){var s=this.a,r=s.v(A.q(s.ok.value))
s.N=B.b.p(r==null?0:r,0,2)
s.a0()},
$S:0}
A.db.prototype={
$0(){var s=this.a
s.ae=A.y(s.k4.checked)
s.a0()},
$S:0}
A.dc.prototype={
$1(a){var s
if(!A.y(A.a(v.G.document).hidden)){s=this.a
s=s.H&&s.a6.b}else s=!1
if(s)this.a.a6.a2()},
$S:28}
A.cL.prototype={
$0(){var s=this.a,r=this.b,q=A.b7(r)
q.toString
s.aV(q)
s.A("Time signature "+A.b7(r).gX()+".")},
$S:0}
A.cT.prototype={
$0(){var s,r=this.a,q=r.b
if(q!=null)v.G.clearTimeout(q)
s=r.a
if(s!=null)v.G.clearInterval(s)
r.b=r.a=null},
$S:0}
A.cP.prototype={
$1(a){var s,r,q,p=this
if(A.k(A.a(a).button)!==0)return
p.c.$0()
s=p.b
r=p.d
s.D(s.a.a+r)
q=p.a
q.c=0
q.b=A.k(v.G.setTimeout(A.ar(new A.cO(q,s,r)),450))},
$S:2}
A.cO.prototype={
$0(){var s=this.a
s.a=A.k(v.G.setInterval(A.ar(new A.cN(s,this.b,this.c)),90))},
$S:4}
A.cN.prototype={
$0(){var s=this.b,r=++this.a.c>10?2:1
return s.D(s.a.a+this.c*r)},
$S:0}
A.cQ.prototype={
$1(a){return this.a.$0()},
$S:3}
A.cR.prototype={
$1(a){return A.a(a).preventDefault()},
$S:29}
A.cS.prototype={
$1(a){var s
if(A.k(A.a(a).detail)===0){s=this.a
s.D(s.a.a+this.b)}},
$S:2}
A.d_.prototype={
$0(){var s=this.a
return s.A("Tempo set to "+s.a.a+" BPM.")},
$S:0}
A.cZ.prototype={
$1(a){return A.k(a)===1},
$S:1}
A.cJ.prototype={
$1(a){return A.k(a)===1},
$S:1}
A.cK.prototype={
$0(){var s=this.a,r=s.a,q=r.c,p=this.b
if(!(p<q.length))return A.h(q,p)
B.a.C(q,p,B.q[(q[p].a+1)%4])
s.bp(p)
A.T("ds-last",A.a0(A.e([A.ad("last",r)],t.e)))
r=r.c
if(!(p<r.length))return A.h(r,p)
s.A("Beat "+(p+1)+": "+r[p].c+".")},
$S:0}
A.d2.prototype={
$0(){var s,r=this,q=r.a,p=q.b
p.a=A.y(r.b.checked)
s=q.v(A.q(r.c.value))
p.b=B.b.p(s==null?4:s,-50,50)
s=q.v(A.q(r.d.value))
p.c=B.b.p(s==null?4:s,1,64)
s=q.v(A.q(r.e.value))
p.d=B.b.p(B.b.B(s==null?140:s),20,300)
p=q.c
p.a=A.y(r.f.checked)
s=q.v(A.q(r.r.value))
p.b=B.b.p(s==null?2:s,1,64)
s=q.v(A.q(r.w.value))
p.c=B.b.p(s==null?2:s,1,64)
q.gI().b6()
q.au()},
$S:0}
A.d1.prototype={
$1(a){A.a(a).preventDefault()
this.a.cA()},
$S:2}
A.cX.prototype={
$1(a){return t.b.a(a).a.toLowerCase()===this.a.a.toLowerCase()},
$S:11}
A.cM.prototype={
$1(a){return t.b.a(a).a===this.a.a},
$S:11}
A.cV.prototype={
$0(){var s=this.b,r=this.a,q=r.a
s.bK(q)
r.gI().b6()
r.by()
A.T("ds-last",A.a0(A.e([A.ad("last",q)],t.e)))
r.A("Loaded \u201c"+s.a+"\u201d: "+s.gba()+".")},
$S:0}
A.cW.prototype={
$0(){return this.a.cf(this.b)},
$S:0}
A.d0.prototype={
$1(a){var s,r,q,p,o,n=this
A.a(a)
if(A.y(a.ctrlKey)||A.y(a.metaKey)||A.y(a.altKey))return
s=A.S(a.target)
r=s==null?null:A.q(s.tagName)
if(r==null)r=""
s=!(r==="INPUT"||r==="SELECT"||r==="TEXTAREA")
q=!s||r==="BUTTON"||r==="A"||r==="SUMMARY"
A:{p=A.q(a.key)
if(" "===p&&!q){a.preventDefault()
s=n.a
if(s.H)s.cE()
else s.cD()
break A}if("ArrowUp"===p&&s){a.preventDefault()
s=n.a
o=s.a
if(A.y(a.shiftKey))s.D(A.f8(o.a))
else s.D(o.a+1)
s.bw(""+o.a+" BPM")
break A}if("ArrowDown"===p&&s){a.preventDefault()
s=n.a
o=s.a
if(A.y(a.shiftKey))s.D(A.fa(o.a))
else s.D(o.a+-1)
s.bw(""+o.a+" BPM")
break A}if(("t"===p||"T"===p)&&s&&!A.y(a.repeat))n.a.bD()}},
$S:2}
A.cU.prototype={
$0(){return A.a(this.a.as.classList).add("is-fading")},
$S:0}
A.cY.prototype={
$0(){return this.a.A(this.b)},
$S:0}
A.ed.prototype={
$2(a,b){var s,r,q,p,o,n
t.V.a(b)
s=this.a
if(s.a>=12)return
if(a===0){s.j(0,B.a.R(b,"+"))
return}for(s=[2,3],r=s.length,q=t.S,p=0;p<r;++p){o=s[p]
if(o<=a&&a-o!==1){n=A.b5(b,q)
n.push(o)
this.$2(a-o,n)}}},
$S:30};(function aliases(){var s=J.ac.prototype
s.c4=s.i})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
s(A,"jx","ir",6)
s(A,"jy","is",6)
s(A,"jz","it",6)
r(A,"hb","jr",0)
s(A,"jB","iX",7)
var o
q(o=A.bZ.prototype,"gcF","bD",0)
q(o,"gcq","cr",0)
q(o,"gcG","cH",0)
q(o,"gco","bm",0)
q(o,"gd4","d5",0)
q(o,"gd7","b8",0)
q(o,"gbG","aX",0)
p(o,"gcg","ci",27)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.f,null)
q(A.f,[A.eG,J.bQ,A.be,J.ay,A.t,A.dq,A.i,A.aC,A.G,A.a8,A.dx,A.dm,A.aY,A.br,A.a9,A.z,A.cB,A.bY,A.bU,A.dX,A.Y,A.cj,A.e1,A.e_,A.cf,A.P,A.ch,A.a7,A.A,A.cg,A.co,A.dB,A.ck,A.aJ,A.cn,A.aN,A.u,A.bJ,A.bL,A.dV,A.bM,A.dH,A.bf,A.dI,A.aZ,A.x,A.cp,A.aK,A.dl,A.dY,A.X,A.b6,A.cu,A.ds,A.ct,A.aW,A.dr,A.dw,A.dz,A.bZ])
q(J.bQ,[J.bS,J.b0,J.b2,J.b1,J.b3,J.aA,J.aB])
q(J.b2,[J.ac,J.n,A.aE,A.ba])
q(J.ac,[J.c7,J.aL,J.ab])
r(J.bR,A.be)
r(J.cv,J.n)
q(J.aA,[J.b_,J.bT])
q(A.t,[A.bX,A.a5,A.bV,A.ce,A.ca,A.ci,A.b4,A.bF,A.W,A.bh,A.cd,A.bg,A.bK])
r(A.aX,A.i)
q(A.aX,[A.al,A.ak,A.bk])
q(A.a8,[A.aO,A.aP])
r(A.aQ,A.aO)
r(A.J,A.aP)
r(A.bc,A.a5)
q(A.a9,[A.bH,A.bI,A.cc,A.ee,A.eg,A.dE,A.dD,A.e5,A.dR,A.er,A.es,A.ea,A.eu,A.ej,A.eo,A.cz,A.dt,A.cD,A.cH,A.cI,A.cF,A.cG,A.en,A.em,A.et,A.ew,A.df,A.dc,A.cP,A.cQ,A.cR,A.cS,A.cZ,A.cJ,A.d1,A.cX,A.cM,A.d0])
q(A.cc,[A.cb,A.az])
q(A.z,[A.aj,A.bj,A.cl])
q(A.bI,[A.ef,A.e6,A.e9,A.dS,A.cC,A.dW,A.cE,A.ed])
q(A.ba,[A.c_,A.aG])
q(A.aG,[A.bm,A.bo])
r(A.bn,A.bm)
r(A.b8,A.bn)
r(A.bp,A.bo)
r(A.b9,A.bp)
q(A.b8,[A.aF,A.c0])
q(A.b9,[A.c1,A.c2,A.c3,A.c4,A.c5,A.bb,A.c6])
r(A.bs,A.ci)
q(A.bH,[A.dF,A.dG,A.e0,A.dJ,A.dN,A.dM,A.dL,A.dK,A.dQ,A.dP,A.dO,A.dC,A.e8,A.ek,A.ep,A.cA,A.du,A.dA,A.eA,A.ez,A.ex,A.ey,A.d3,A.d4,A.d5,A.dd,A.de,A.dg,A.dh,A.di,A.dj,A.dk,A.d6,A.d7,A.d8,A.d9,A.da,A.db,A.cL,A.cT,A.cO,A.cN,A.d_,A.cK,A.d2,A.cV,A.cW,A.cU,A.cY])
r(A.bi,A.ch)
r(A.bl,A.bj)
r(A.bq,A.aJ)
r(A.ap,A.bq)
r(A.cm,A.al)
r(A.bW,A.b4)
r(A.cw,A.bJ)
q(A.bL,[A.cy,A.cx])
r(A.dU,A.dV)
q(A.W,[A.bd,A.bP])
q(A.dH,[A.M,A.ao,A.E])
s(A.bm,A.u)
s(A.bn,A.G)
s(A.bo,A.u)
s(A.bp,A.G)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",m:"double",aw:"num",v:"String",D:"bool",x:"Null",j:"List",f:"Object",aD:"Map",r:"JSObject"},mangledNames:{},types:["~()","D(b)","x(r)","~(f?)","x()","~(@)","~(~())","@(@)","x(@)","~(f?,f?)","b()","D(X)","@(@,v)","@(v)","x(~())","x(@,ae)","~(b,@)","x(f,ae)","f?(f?)","X(v,b,v{dotted:D,sub:E,swing:b})","D(M)","M()","D(E)","E()","b(b,b)","x(f)","a3<~>()","~(m)","x(f?)","~(r)","~(b,j<b>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aQ&&a.b(c.a)&&b.b(c.b),"4;":a=>b=>b instanceof A.J&&A.jS(a,b.a)}}
A.iN(v.typeUniverse,JSON.parse('{"c7":"ac","aL":"ac","ab":"ac","k6":"aE","bS":{"D":[],"l":[]},"b0":{"l":[]},"b2":{"r":[]},"ac":{"r":[]},"n":{"j":["1"],"r":[],"i":["1"]},"bR":{"be":[]},"cv":{"n":["1"],"j":["1"],"r":[],"i":["1"]},"aA":{"m":[],"aw":[]},"b_":{"m":[],"b":[],"aw":[],"l":[]},"bT":{"m":[],"aw":[],"l":[]},"aB":{"v":[],"dn":[],"l":[]},"bX":{"t":[]},"aX":{"i":["1"]},"al":{"i":["1"]},"aQ":{"aO":[],"a8":[]},"J":{"aP":[],"a8":[]},"bc":{"a5":[],"t":[]},"bV":{"t":[]},"ce":{"t":[]},"br":{"ae":[]},"a9":{"ai":[]},"bH":{"ai":[]},"bI":{"ai":[]},"cc":{"ai":[]},"cb":{"ai":[]},"az":{"ai":[]},"ca":{"t":[]},"aj":{"z":["1","2"],"fs":["1","2"],"aD":["1","2"],"z.K":"1","z.V":"2"},"ak":{"i":["1"]},"aO":{"a8":[]},"aP":{"a8":[]},"bU":{"ig":[],"dn":[]},"aF":{"u":["m"],"j":["m"],"L":["m"],"r":[],"i":["m"],"G":["m"],"l":[],"u.E":"m"},"aE":{"r":[],"l":[]},"ba":{"r":[]},"c_":{"r":[],"l":[]},"aG":{"L":["1"],"r":[]},"b8":{"u":["m"],"j":["m"],"L":["m"],"r":[],"i":["m"],"G":["m"]},"b9":{"u":["b"],"j":["b"],"L":["b"],"r":[],"i":["b"],"G":["b"]},"c0":{"u":["m"],"j":["m"],"L":["m"],"r":[],"i":["m"],"G":["m"],"l":[],"u.E":"m"},"c1":{"u":["b"],"j":["b"],"L":["b"],"r":[],"i":["b"],"G":["b"],"l":[],"u.E":"b"},"c2":{"u":["b"],"j":["b"],"L":["b"],"r":[],"i":["b"],"G":["b"],"l":[],"u.E":"b"},"c3":{"u":["b"],"j":["b"],"L":["b"],"r":[],"i":["b"],"G":["b"],"l":[],"u.E":"b"},"c4":{"u":["b"],"j":["b"],"L":["b"],"r":[],"i":["b"],"G":["b"],"l":[],"u.E":"b"},"c5":{"u":["b"],"j":["b"],"L":["b"],"r":[],"i":["b"],"G":["b"],"l":[],"u.E":"b"},"bb":{"u":["b"],"j":["b"],"L":["b"],"r":[],"i":["b"],"G":["b"],"l":[],"u.E":"b"},"c6":{"u":["b"],"j":["b"],"L":["b"],"r":[],"i":["b"],"G":["b"],"l":[],"u.E":"b"},"ci":{"t":[]},"bs":{"a5":[],"t":[]},"P":{"t":[]},"bi":{"ch":["1"]},"A":{"a3":["1"]},"bj":{"z":["1","2"],"aD":["1","2"]},"bl":{"bj":["1","2"],"z":["1","2"],"aD":["1","2"],"z.K":"1","z.V":"2"},"bk":{"i":["1"]},"ap":{"aJ":["1"],"i":["1"]},"z":{"aD":["1","2"]},"aJ":{"i":["1"]},"bq":{"aJ":["1"],"i":["1"]},"cl":{"z":["v","@"],"aD":["v","@"],"z.K":"v","z.V":"@"},"cm":{"al":["v"],"i":["v"],"al.E":"v"},"b4":{"t":[]},"bW":{"t":[]},"m":{"aw":[]},"b":{"aw":[]},"j":{"i":["1"]},"v":{"dn":[]},"bF":{"t":[]},"a5":{"t":[]},"W":{"t":[]},"bd":{"t":[]},"bP":{"t":[]},"bh":{"t":[]},"cd":{"t":[]},"bg":{"t":[]},"bK":{"t":[]},"bf":{"t":[]},"cp":{"ae":[]},"aK":{"ik":[]},"hR":{"j":["b"],"i":["b"]},"ip":{"j":["b"],"i":["b"]},"io":{"j":["b"],"i":["b"]},"hP":{"j":["b"],"i":["b"]},"il":{"j":["b"],"i":["b"]},"hQ":{"j":["b"],"i":["b"]},"im":{"j":["b"],"i":["b"]},"hN":{"j":["m"],"i":["m"]},"hO":{"j":["m"],"i":["m"]}}'))
A.iM(v.typeUniverse,JSON.parse('{"aX":1,"aG":1,"bq":1,"bJ":2,"bL":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.cq
return{n:s("P"),C:s("t"),Z:s("ai"),U:s("i<@>"),O:s("n<r>"),a:s("n<M>"),A:s("n<j<r>>"),J:s("n<aD<v,f>>"),c:s("n<b6>"),f:s("n<f>"),e:s("n<X>"),d:s("n<+(m,aW)>"),s:s("n<v>"),w:s("n<m>"),q:s("n<@>"),t:s("n<b>"),T:s("b0"),m:s("r"),g:s("ab"),p:s("L<@>"),L:s("M"),B:s("j<M>"),j:s("j<@>"),V:s("j<b>"),E:s("aF"),P:s("x"),K:s("f"),b:s("X"),W:s("k7"),h:s("+()"),l:s("ae"),N:s("v"),Y:s("E"),k:s("l"),r:s("a5"),D:s("aL"),_:s("A<@>"),G:s("bl<f?,f?>"),y:s("D"),x:s("D(f)"),i:s("m"),z:s("@"),bd:s("@()"),v:s("@(f)"),Q:s("@(f,ae)"),S:s("b"),bc:s("a3<x>?"),aQ:s("r?"),aL:s("j<@>?"),X:s("f?"),aD:s("v?"),F:s("a7<@,@>?"),R:s("cn?"),u:s("D?"),I:s("m?"),a3:s("b?"),ae:s("aw?"),o:s("aw"),H:s("~"),M:s("~()"),cQ:s("~(v,@)"),aS:s("~(b,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.K=J.bQ.prototype
B.a=J.n.prototype
B.b=J.b_.prototype
B.d=J.aA.prototype
B.c=J.aB.prototype
B.L=J.ab.prototype
B.M=J.b2.prototype
B.C=J.c7.prototype
B.u=J.aL.prototype
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

B.l=new A.cw()
B.f=new A.dq()
B.h=new A.dB()
B.m=new A.cp()
B.N=new A.cx(null)
B.O=new A.cy(null)
B.y=new A.M("Accent",0,"accent")
B.z=new A.M("Ghost",2,"ghost")
B.A=new A.M("Mute",3,"mute")
B.n=new A.M("Normal",1,"normal")
B.p=s([2,4,8,16],t.t)
B.i=new A.E(1,"None (beats only)",0,"none")
B.t=new A.E(2,"Eighth notes (2)",1,"eighths")
B.a3=new A.E(3,"Triplets (3)",2,"triplets")
B.r=new A.E(4,"Sixteenth notes (4)",3,"sixteenths")
B.a2=new A.E(5,"Quintuplets (5)",4,"quintuplets")
B.a1=new A.E(6,"Sextuplets (6)",5,"sextuplets")
B.a0=new A.E(7,"Septuplets (7)",6,"septuplets")
B.a_=new A.E(8,"32nd notes (8)",7,"thirtySeconds")
B.B=s([B.i,B.t,B.a3,B.r,B.a2,B.a1,B.a0,B.a_],A.cq("n<E>"))
B.Q=new A.J([20,"Grave","slow and solemn","serious, heavy"])
B.W=new A.J([40,"Largo","slowly and broadly","broad"])
B.U=new A.J([60,"Larghetto","fairly slowly and broadly","a little broad"])
B.T=new A.J([66,"Adagio","slowly","at ease"])
B.R=new A.J([76,"Andante","at a walking pace","walking"])
B.S=new A.J([108,"Moderato","at a moderate speed","moderate"])
B.Z=new A.J([120,"Allegro","fast and bright","cheerful"])
B.V=new A.J([156,"Vivace","lively and fast","lively"])
B.Y=new A.J([176,"Presto","very fast","quickly"])
B.X=new A.J([200,"Prestissimo","as fast as possible","very quickly"])
B.e=s([B.Q,B.W,B.U,B.T,B.R,B.S,B.Z,B.V,B.Y,B.X],A.cq("n<+(b,v,v,v)>"))
B.P=s(["wood","beep","stick"],t.s)
B.q=s([B.y,B.n,B.z,B.A],t.a)
B.a4=A.a_("k2")
B.a5=A.a_("k3")
B.a6=A.a_("hN")
B.a7=A.a_("hO")
B.a8=A.a_("hP")
B.a9=A.a_("hQ")
B.aa=A.a_("hR")
B.ab=A.a_("f")
B.ac=A.a_("il")
B.ad=A.a_("im")
B.ae=A.a_("io")
B.af=A.a_("ip")
B.j=new A.ao(0,"accent")
B.o=new A.ao(1,"normal")
B.D=new A.ao(2,"ghost")
B.v=new A.ao(3,"sub")
B.k=new A.ao(4,"silent")})();(function staticFields(){$.dT=null
$.O=A.e([],t.f)
$.fx=null
$.fh=null
$.fg=null
$.hi=null
$.ha=null
$.hl=null
$.eb=null
$.eh=null
$.f3=null
$.dZ=A.e([],A.cq("n<j<f>?>"))
$.aR=null
$.by=null
$.bz=null
$.eX=!1
$.w=B.h})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"k5","hp",()=>A.ec("_$dart_dartClosure"))
s($,"k4","eB",()=>A.ec("_$dart_dartClosure_dartJSInterop"))
s($,"kl","hA",()=>A.e([new J.bR()],A.cq("n<be>")))
s($,"k9","hq",()=>A.a6(A.dy({
toString:function(){return"$receiver$"}})))
s($,"ka","hr",()=>A.a6(A.dy({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"kb","hs",()=>A.a6(A.dy(null)))
s($,"kc","ht",()=>A.a6(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kf","hw",()=>A.a6(A.dy(void 0)))
s($,"kg","hx",()=>A.a6(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ke","hv",()=>A.a6(A.fE(null)))
s($,"kd","hu",()=>A.a6(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"ki","hz",()=>A.a6(A.fE(void 0)))
s($,"kh","hy",()=>A.a6(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"kj","fc",()=>A.iq())
s($,"kk","cr",()=>A.el(B.ab))
s($,"km","fd",()=>{var r,q=t.S,p=A.fu(q)
for(r=20;r<60;r+=2)p.j(0,r)
for(r=60;r<72;r+=3)p.j(0,r)
for(r=72;r<120;r+=4)p.j(0,r)
for(r=120;r<144;r+=6)p.j(0,r)
for(r=144;r<=300;r+=8)p.j(0,r)
p.j(0,300)
return A.eI(p,q)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.aE,SharedArrayBuffer:A.aE,ArrayBufferView:A.ba,DataView:A.c_,Float32Array:A.aF,Float64Array:A.c0,Int16Array:A.c1,Int32Array:A.c2,Int8Array:A.c3,Uint16Array:A.c4,Uint32Array:A.c5,Uint8ClampedArray:A.bb,CanvasPixelArray:A.bb,Uint8Array:A.c6})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aG.$nativeSuperclassTag="ArrayBufferView"
A.bm.$nativeSuperclassTag="ArrayBufferView"
A.bn.$nativeSuperclassTag="ArrayBufferView"
A.b8.$nativeSuperclassTag="ArrayBufferView"
A.bo.$nativeSuperclassTag="ArrayBufferView"
A.bp.$nativeSuperclassTag="ArrayBufferView"
A.b9.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.jQ
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()