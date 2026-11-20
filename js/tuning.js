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
if(a[b]!==s){A.kX(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.k(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.h0(b)
return new s(c,this)}:function(){if(s===null)s=A.h0(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.h0(a).prototype
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
h5(a,b,c,d){return{i:a,p:b,e:c,x:d}},
h1(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.h2==null){A.kB()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.hx("Return interceptor for "+A.o(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.eF
if(o==null)o=$.eF=A.f_(n)
p=q[o]}if(p!=null)return p
p=A.kI(a)
if(p!=null)return p
if(typeof a=="function")return B.a1
s=Object.getPrototypeOf(a)
if(s==null)return B.K
if(s===Object.prototype)return B.K
if(typeof q=="function"){o=$.eF
if(o==null)o=$.eF=A.f_(n)
Object.defineProperty(q,o,{value:B.A,enumerable:false,writable:true,configurable:true})
return B.A}return B.A},
iQ(a,b){var s=t.D
return J.iz(s.a(a),s.a(b))},
hk(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
iR(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.hk(r))break;++b}return b},
iS(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.hk(q))break}return b},
aS(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bt.prototype
return J.cu.prototype}if(typeof a=="string")return J.ar.prototype
if(a==null)return J.bu.prototype
if(typeof a=="boolean")return J.ct.prototype
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
if(typeof a=="symbol")return J.by.prototype
if(typeof a=="bigint")return J.bw.prototype
return a}if(a instanceof A.h)return a
return J.h1(a)},
bf(a){if(typeof a=="string")return J.ar.prototype
if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
if(typeof a=="symbol")return J.by.prototype
if(typeof a=="bigint")return J.bw.prototype
return a}if(a instanceof A.h)return a
return J.h1(a)},
eZ(a){if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
if(typeof a=="symbol")return J.by.prototype
if(typeof a=="bigint")return J.bw.prototype
return a}if(a instanceof A.h)return a
return J.h1(a)},
kw(a){if(typeof a=="number")return J.aW.prototype
if(typeof a=="string")return J.ar.prototype
if(a==null)return a
if(!(a instanceof A.h))return J.aH.prototype
return a},
kx(a){if(typeof a=="string")return J.ar.prototype
if(a==null)return a
if(!(a instanceof A.h))return J.aH.prototype
return a},
a8(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aS(a).P(a,b)},
S(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.kF(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bf(a).l(a,b)},
iy(a,b){return J.kx(a).bo(a,b)},
iz(a,b){return J.kw(a).J(a,b)},
de(a,b){return J.eZ(a).B(a,b)},
a0(a){return J.aS(a).gv(a)},
hb(a){return J.bf(a).gu(a)},
iA(a){return J.bf(a).gK(a)},
ao(a){return J.eZ(a).gt(a)},
aB(a){return J.bf(a).gj(a)},
iB(a){return J.aS(a).gA(a)},
iC(a,b,c){return J.eZ(a).a_(a,b,c)},
bk(a){return J.aS(a).i(a)},
cq:function cq(){},
ct:function ct(){},
bu:function bu(){},
bx:function bx(){},
at:function at(){},
cH:function cH(){},
aH:function aH(){},
as:function as(){},
bw:function bw(){},
by:function by(){},
q:function q(a){this.$ti=a},
cs:function cs(){},
dx:function dx(a){this.$ti=a},
aC:function aC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aW:function aW(){},
bt:function bt(){},
cu:function cu(){},
ar:function ar(){}},A={fA:function fA(){},
hn(a){return new A.aX("Field '"+a+"' has been assigned during initialization.")},
iU(a){return new A.aX("Field '"+a+"' has not been initialized.")},
iT(a){return new A.aX("Field '"+a+"' has already been initialized.")},
ax(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fL(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
h_(a,b,c){return a},
h3(a){var s,r
for(s=$.W.length,r=0;r<s;++r)if(a===$.W[r])return!0
return!1},
jb(a,b,c,d){A.fI(b,"start")
return new A.bS(a,b,c,d.h("bS<0>"))},
iX(a,b,c,d){if(t.E.b(a))return new A.aE(a,b,c.h("@<0>").p(d).h("aE<1,2>"))
return new A.ah(a,b,c.h("@<0>").p(d).h("ah<1,2>"))},
dw(){return new A.bR("No element")},
b3:function b3(){},
bl:function bl(a,b){this.a=a
this.$ti=b},
bW:function bW(){},
bm:function bm(a,b){this.a=a
this.$ti=b},
aX:function aX(a){this.a=a},
e0:function e0(){},
f:function f(){},
Q:function Q(){},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aG:function aG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ah:function ah(a,b,c){this.a=a
this.b=b
this.$ti=c},
aE:function aE(a,b,c){this.a=a
this.b=b
this.$ti=c},
bG:function bG(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a2:function a2(a,b,c){this.a=a
this.b=b
this.$ti=c},
a6:function a6(a,b,c){this.a=a
this.b=b
this.$ti=c},
aI:function aI(a,b,c){this.a=a
this.b=b
this.$ti=c},
N:function N(){},
cb:function cb(){},
iK(){throw A.c(A.bU("Cannot modify constant Set"))},
ik(a){var s=A.ij(a)
if(s!=null)return s
return"minified:"+a},
kF(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
o(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bk(a)
return s},
bM(a){var s,r=$.hq
if(r==null)r=$.hq=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
b1(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
cK(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.d.by(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
cJ(a){var s,r,q,p
if(a instanceof A.h)return A.V(A.bh(a),null)
s=J.aS(a)
if(s===B.a0||s===B.a2||t.ak.b(a)){r=B.B(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.V(A.bh(a),null)},
hr(a){var s,r,q
if(a==null||typeof a=="number"||A.d8(a))return J.bk(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ap)return a.i(0)
if(a instanceof A.ab)return a.bl(!0)
s=$.ix()
for(r=0;r<1;++r){q=s[r].cz(a)
if(q!=null)return q}return"Instance of '"+A.cJ(a)+"'"},
L(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.bh(s,10)|55296)>>>0,s&1023|56320)}throw A.c(A.au(a,0,1114111,null,null))},
b0(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
j4(a){var s=A.b0(a).getUTCFullYear()+0
return s},
j2(a){var s=A.b0(a).getUTCMonth()+1
return s},
iZ(a){var s=A.b0(a).getUTCDate()+0
return s},
j_(a){var s=A.b0(a).getUTCHours()+0
return s},
j1(a){var s=A.b0(a).getUTCMinutes()+0
return s},
j3(a){var s=A.b0(a).getUTCSeconds()+0
return s},
j0(a){var s=A.b0(a).getUTCMilliseconds()+0
return s},
iY(a){var s=a.$thrownJsError
if(s==null)return null
return A.bg(s)},
hs(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.A(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
d(a,b){if(a==null)J.aB(a)
throw A.c(A.eX(a,b))},
eX(a,b){var s,r="index"
if(!A.d9(b))return new A.a9(!0,b,r,null)
s=J.aB(a)
if(b<0||b>=s)return A.ds(b,s,a,r)
return new A.bN(null,null,!0,b,r,"Value not in range")},
kj(a){return new A.a9(!0,a,null,null)},
c(a){return A.A(a,new Error())},
A(a,b){var s
if(a==null)a=new A.aj()
b.dartException=a
s=A.kY
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
kY(){return J.bk(this.dartException)},
fm(a,b){throw A.A(a,b==null?new Error():b)},
dd(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.fm(A.jJ(a,b,c),s)},
jJ(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.bT("'"+s+"': Cannot "+o+" "+l+k+n)},
am(a){throw A.c(A.M(a))},
ak(a){var s,r,q,p,o,n
a=A.ih(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.k([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.eh(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ei(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
hw(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
fB(a,b){var s=b==null,r=s?null:b.method
return new A.cv(a,r,s?null:b.receiver)},
ad(a){var s
if(a==null)return new A.dJ(a)
if(a instanceof A.bq){s=a.a
return A.aA(a,s==null?A.b9(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.aA(a,a.dartException)
return A.ki(a)},
aA(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ki(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.bh(r,16)&8191)===10)switch(q){case 438:return A.aA(a,A.fB(A.o(s)+" (Error "+q+")",null))
case 445:case 5007:A.o(s)
return A.aA(a,new A.bL())}}if(a instanceof TypeError){p=$.im()
o=$.io()
n=$.ip()
m=$.iq()
l=$.it()
k=$.iu()
j=$.is()
$.ir()
i=$.iw()
h=$.iv()
g=p.L(s)
if(g!=null)return A.aA(a,A.fB(A.n(s),g))
else{g=o.L(s)
if(g!=null){g.method="call"
return A.aA(a,A.fB(A.n(s),g))}else if(n.L(s)!=null||m.L(s)!=null||l.L(s)!=null||k.L(s)!=null||j.L(s)!=null||m.L(s)!=null||i.L(s)!=null||h.L(s)!=null){A.n(s)
return A.aA(a,new A.bL())}}return A.aA(a,new A.cS(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bQ()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.aA(a,new A.a9(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bQ()
return a},
bg(a){var s
if(a instanceof A.bq)return a.b
if(a==null)return new A.c5(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.c5(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
db(a){if(a==null)return J.a0(a)
if(typeof a=="object")return A.bM(a)
return J.a0(a)},
kn(a){if(typeof a=="number")return B.c.gv(a)
if(a instanceof A.d7)return A.bM(a)
if(a instanceof A.ab)return a.gv(a)
return A.db(a)},
i9(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.n(0,a[s],a[r])}return b},
ku(a,b){var s,r=a.length
for(s=0;s<r;++s)b.q(0,a[s])
return b},
jU(a,b,c,d,e,f){t.Z.a(a)
switch(A.R(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.eu("Unsupported number of arguments for wrapped closure"))},
be(a,b){var s=a.$identity
if(!!s)return s
s=A.ko(a,b)
a.$identity=s
return s},
ko(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.jU)},
iJ(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cN().constructor.prototype):Object.create(new A.aU(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.hh(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.iF(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.hh(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
iF(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.iD)}throw A.c("Error in functionType of tearoff")},
iG(a,b,c,d){var s=A.hg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
hh(a,b,c,d){if(c)return A.iI(a,b,d)
return A.iG(b.length,d,a,b)},
iH(a,b,c,d){var s=A.hg,r=A.iE
switch(b?-1:a){case 0:throw A.c(new A.cL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
iI(a,b,c){var s,r
if($.he==null)$.he=A.hd("interceptor")
if($.hf==null)$.hf=A.hd("receiver")
s=b.length
r=A.iH(s,c,a,b)
return r},
h0(a){return A.iJ(a)},
iD(a,b){return A.ca(v.typeUniverse,A.bh(a.a),b)},
hg(a){return a.a},
iE(a){return a.b},
hd(a){var s,r,q,p=new A.aU("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.ce("Field name "+a+" not found.",null))},
f_(a){return v.getIsolateTag(a)},
kI(a){var s,r,q,p,o,n=A.n($.ia.$1(a)),m=$.eY[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.f5[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.eO($.i3.$2(a,n))
if(q!=null){m=$.eY[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.f5[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.f9(s)
$.eY[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.f5[n]=s
return s}if(p==="-"){o=A.f9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.id(a,s)
if(p==="*")throw A.c(A.hx(n))
if(v.leafTags[n]===true){o=A.f9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.id(a,s)},
id(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.h5(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
f9(a){return J.h5(a,!1,null,!!a.$iT)},
kK(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.f9(s)
else return J.h5(s,c,null,null)},
kB(){if(!0===$.h2)return
$.h2=!0
A.kC()},
kC(){var s,r,q,p,o,n,m,l
$.eY=Object.create(null)
$.f5=Object.create(null)
A.kA()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ig.$1(o)
if(n!=null){m=A.kK(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
kA(){var s,r,q,p,o,n,m=B.L()
m=A.bd(B.M,A.bd(B.N,A.bd(B.C,A.bd(B.C,A.bd(B.O,A.bd(B.P,A.bd(B.Q(B.B),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ia=new A.f2(p)
$.i3=new A.f3(o)
$.ig=new A.f4(n)},
bd(a,b){return a(b)||b},
kq(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
hl(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(A.fy("Illegal RegExp pattern ("+String(o)+")",a))},
kS(a,b,c){var s=a.indexOf(b,c)
return s>=0},
i8(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ih(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
fl(a,b,c){var s
if(typeof b=="string")return A.kU(a,b,c)
if(b instanceof A.bv){s=b.gb7()
s.lastIndex=0
return a.replace(s,A.i8(c))}return A.kT(a,b,c)},
kT(a,b,c){var s,r,q,p
for(s=J.iy(b,a),s=s.gt(s),r=0,q="";s.k();){p=s.gm()
q=q+a.substring(r,p.gaU())+c
r=p.gaL()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
kU(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.ih(b),"g"),A.i8(c))},
kV(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.kW(a,s,s+b.length,c)},
kW(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
F:function F(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(){},
bo:function bo(a,b,c){this.a=a
this.b=b
this.$ti=c},
aJ:function aJ(a,b){this.a=a
this.$ti=b},
aK:function aK(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aa:function aa(a,b){this.a=a
this.$ti=b},
bn:function bn(){},
bp:function bp(a,b,c){this.a=a
this.b=b
this.$ti=c},
bP:function bP(){},
eh:function eh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bL:function bL(){},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
cS:function cS(a){this.a=a},
dJ:function dJ(a){this.a=a},
bq:function bq(a,b){this.a=a
this.b=b},
c5:function c5(a){this.a=a
this.b=null},
ap:function ap(){},
ch:function ch(){},
ci:function ci(){},
cP:function cP(){},
cN:function cN(){},
aU:function aU(a,b){this.a=a
this.b=b},
cL:function cL(a){this.a=a},
af:function af(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dB:function dB(a,b){this.a=a
this.b=b
this.c=null},
ag:function ag(a,b){this.a=a
this.$ti=b},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bD:function bD(a,b){this.a=a
this.$ti=b},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bz:function bz(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f2:function f2(a){this.a=a},
f3:function f3(a){this.a=a},
f4:function f4(a){this.a=a},
ab:function ab(){},
b6:function b6(){},
b7:function b7(){},
bv:function bv(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
c_:function c_(a){this.b=a},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cO:function cO(a,b){this.a=a
this.c=b},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
d5:function d5(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aP(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.eX(b,a))},
aZ:function aZ(){},
bJ:function bJ(){},
cx:function cx(){},
b_:function b_(){},
bH:function bH(){},
bI:function bI(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
bK:function bK(){},
cF:function cF(){},
c0:function c0(){},
c1:function c1(){},
c2:function c2(){},
c3:function c3(){},
fK(a,b){var s=b.c
return s==null?b.c=A.c8(a,"ae",[b.x]):s},
ht(a){var s=a.w
if(s===6||s===7)return A.ht(a.x)
return s===11||s===12},
j7(a){return a.as},
ac(a){return A.eM(v.typeUniverse,a,!1)},
aQ(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.aQ(a1,s,a3,a4)
if(r===s)return a2
return A.hG(a1,r,!0)
case 7:s=a2.x
r=A.aQ(a1,s,a3,a4)
if(r===s)return a2
return A.hF(a1,r,!0)
case 8:q=a2.y
p=A.bc(a1,q,a3,a4)
if(p===q)return a2
return A.c8(a1,a2.x,p)
case 9:o=a2.x
n=A.aQ(a1,o,a3,a4)
m=a2.y
l=A.bc(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.fR(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.bc(a1,j,a3,a4)
if(i===j)return a2
return A.hH(a1,k,i)
case 11:h=a2.x
g=A.aQ(a1,h,a3,a4)
f=a2.y
e=A.kf(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.hE(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.bc(a1,d,a3,a4)
o=a2.x
n=A.aQ(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.fS(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.cg("Attempted to substitute unexpected RTI kind "+a0))}},
bc(a,b,c,d){var s,r,q,p,o=b.length,n=A.eN(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aQ(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
kg(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.eN(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aQ(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
kf(a,b,c,d){var s,r=b.a,q=A.bc(a,r,c,d),p=b.b,o=A.bc(a,p,c,d),n=b.c,m=A.kg(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cZ()
s.a=q
s.b=o
s.c=m
return s},
k(a,b){a[v.arrayRti]=b
return a},
i5(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.kz(s)
return a.$S()}return null},
kD(a,b){var s
if(A.ht(b))if(a instanceof A.ap){s=A.i5(a)
if(s!=null)return s}return A.bh(a)},
bh(a){if(a instanceof A.h)return A.z(a)
if(Array.isArray(a))return A.K(a)
return A.fX(J.aS(a))},
K(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
z(a){var s=a.$ti
return s!=null?s:A.fX(a)},
fX(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.jQ(a,s)},
jQ(a,b){var s=a instanceof A.ap?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.jz(v.typeUniverse,s.name)
b.$ccache=r
return r},
kz(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.eM(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ky(a){return A.aR(A.z(a))},
fZ(a){var s
if(a instanceof A.ab)return A.kt(a.$r,a.aw())
s=a instanceof A.ap?A.i5(a):null
if(s!=null)return s
if(t.dm.b(a))return J.iB(a).a
if(Array.isArray(a))return A.K(a)
return A.bh(a)},
aR(a){var s=a.r
return s==null?a.r=new A.d7(a):s},
kt(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.d(q,0)
s=A.ca(v.typeUniverse,A.fZ(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.hJ(v.typeUniverse,s,A.fZ(q[r]))}return A.ca(v.typeUniverse,s,a)},
a7(a){return A.aR(A.eM(v.typeUniverse,a,!1))},
jP(a){var s=this
s.b=A.kd(s)
return s.b(a)},
kd(a){var s,r,q,p,o
if(a===t.K)return A.k_
if(A.aT(a))return A.k3
s=a.w
if(s===6)return A.jN
if(s===1)return A.hV
if(s===7)return A.jV
r=A.kc(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.aT)){a.f="$i"+q
if(q==="m")return A.jY
if(a===t.m)return A.jX
return A.k2}}else if(s===10){p=A.kq(a.x,a.y)
o=p==null?A.hV:p
return o==null?A.b9(o):o}return A.jL},
kc(a){if(a.w===8){if(a===t.S)return A.d9
if(a===t.i||a===t.o)return A.jZ
if(a===t.N)return A.k1
if(a===t.y)return A.d8}return null},
jO(a){var s=this,r=A.jK
if(A.aT(s))r=A.jD
else if(s===t.K)r=A.b9
else if(A.bi(s)){r=A.jM
if(s===t.h6)r=A.jC
else if(s===t.dk)r=A.eO
else if(s===t.fQ)r=A.jB
else if(s===t.cg)r=A.hN
else if(s===t.I)r=A.fT
else if(s===t.bX)r=A.U}else if(s===t.S)r=A.R
else if(s===t.N)r=A.n
else if(s===t.y)r=A.aO
else if(s===t.o)r=A.hM
else if(s===t.i)r=A.b8
else if(s===t.m)r=A.e
s.a=r
return s.a(a)},
jL(a){var s=this
if(a==null)return A.bi(s)
return A.kG(v.typeUniverse,A.kD(a,s),s)},
jN(a){if(a==null)return!0
return this.x.b(a)},
k2(a){var s,r=this
if(a==null)return A.bi(r)
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.aS(a)[s]},
jY(a){var s,r=this
if(a==null)return A.bi(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.aS(a)[s]},
jX(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.h)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
hU(a){if(typeof a=="object"){if(a instanceof A.h)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
jK(a){var s=this
if(a==null){if(A.bi(s))return a}else if(s.b(a))return a
throw A.A(A.hR(a,s),new Error())},
jM(a){var s=this
if(a==null||s.b(a))return a
throw A.A(A.hR(a,s),new Error())},
hR(a,b){return new A.c6("TypeError: "+A.hy(a,A.V(b,null)))},
hy(a,b){return A.cn(a)+": type '"+A.V(A.fZ(a),null)+"' is not a subtype of type '"+b+"'"},
a_(a,b){return new A.c6("TypeError: "+A.hy(a,b))},
jV(a){var s=this
return s.x.b(a)||A.fK(v.typeUniverse,s).b(a)},
k_(a){return a!=null},
b9(a){if(a!=null)return a
throw A.A(A.a_(a,"Object"),new Error())},
k3(a){return!0},
jD(a){return a},
hV(a){return!1},
d8(a){return!0===a||!1===a},
aO(a){if(!0===a)return!0
if(!1===a)return!1
throw A.A(A.a_(a,"bool"),new Error())},
jB(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.A(A.a_(a,"bool?"),new Error())},
b8(a){if(typeof a=="number")return a
throw A.A(A.a_(a,"double"),new Error())},
fT(a){if(typeof a=="number")return a
if(a==null)return a
throw A.A(A.a_(a,"double?"),new Error())},
d9(a){return typeof a=="number"&&Math.floor(a)===a},
R(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.A(A.a_(a,"int"),new Error())},
jC(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.A(A.a_(a,"int?"),new Error())},
jZ(a){return typeof a=="number"},
hM(a){if(typeof a=="number")return a
throw A.A(A.a_(a,"num"),new Error())},
hN(a){if(typeof a=="number")return a
if(a==null)return a
throw A.A(A.a_(a,"num?"),new Error())},
k1(a){return typeof a=="string"},
n(a){if(typeof a=="string")return a
throw A.A(A.a_(a,"String"),new Error())},
eO(a){if(typeof a=="string")return a
if(a==null)return a
throw A.A(A.a_(a,"String?"),new Error())},
e(a){if(A.hU(a))return a
throw A.A(A.a_(a,"JSObject"),new Error())},
U(a){if(a==null)return a
if(A.hU(a))return a
throw A.A(A.a_(a,"JSObject?"),new Error())},
i_(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.V(a[q],b)
return s},
k7(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.i_(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.V(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
hS(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.k([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.q(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.d(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.V(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.V(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.V(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.V(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.V(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
V(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.V(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.V(a.x,b)+">"
if(l===8){p=A.kh(a.x)
o=a.y
return o.length>0?p+("<"+A.i_(o,b)+">"):p}if(l===10)return A.k7(a,b)
if(l===11)return A.hS(a,b,null)
if(l===12)return A.hS(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
kh(a){var s=A.ij(a)
if(s!=null)return s
return"minified:"+a},
jA(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
jz(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.eM(a,b,!1)
else if(typeof m=="number"){s=m
r=A.c9(a,5,"#")
q=A.eN(s)
for(p=0;p<s;++p)q[p]=r
o=A.c8(a,b,q)
n[b]=o
return o}else return m},
jy(a,b){return A.hK(a.tR,b)},
jx(a,b){return A.hK(a.eT,b)},
eM(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.hI(a,null,b,!1)
r.set(b,s)
return s},
ca(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.hI(a,b,c,!0)
q.set(c,r)
return r},
hJ(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.fR(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
hI(a,b,c,d){return A.jp(A.jj(a,b,c,d))},
ay(a,b){b.a=A.jO
b.b=A.jP
return b},
c9(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.a4(null,null)
s.w=b
s.as=c
r=A.ay(a,s)
a.eC.set(c,r)
return r},
hG(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.jv(a,b,r,c)
a.eC.set(r,s)
return s},
jv(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.aT(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.bi(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.a4(null,null)
q.w=6
q.x=b
q.as=c
return A.ay(a,q)},
hF(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.jt(a,b,r,c)
a.eC.set(r,s)
return s},
jt(a,b,c,d){var s,r
if(d){s=b.w
if(A.aT(b)||b===t.K)return b
else if(s===1)return A.c8(a,"ae",[b])
else if(b===t.P||b===t.T)return t.eH}r=new A.a4(null,null)
r.w=7
r.x=b
r.as=c
return A.ay(a,r)},
jw(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.a4(null,null)
s.w=13
s.x=b
s.as=q
r=A.ay(a,s)
a.eC.set(q,r)
return r},
c7(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
js(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
c8(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.c7(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.a4(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ay(a,r)
a.eC.set(p,q)
return q},
fR(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.c7(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.a4(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ay(a,o)
a.eC.set(q,n)
return n},
hH(a,b,c){var s,r,q="+"+(b+"("+A.c7(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.a4(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ay(a,s)
a.eC.set(q,r)
return r},
hE(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.c7(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.c7(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.js(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.a4(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ay(a,p)
a.eC.set(r,o)
return o},
fS(a,b,c,d){var s,r=b.as+("<"+A.c7(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.ju(a,b,c,r,d)
a.eC.set(r,s)
return s},
ju(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.eN(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.aQ(a,b,r,0)
m=A.bc(a,c,r,0)
return A.fS(a,n,m,c!==m)}}l=new A.a4(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ay(a,l)},
jj(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
jp(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.jl(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.hC(a,r,l,k,!1)
else if(q===46)r=A.hC(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aN(a.u,a.e,k.pop()))
break
case 94:k.push(A.jw(a.u,k.pop()))
break
case 35:k.push(A.c9(a.u,5,"#"))
break
case 64:k.push(A.c9(a.u,2,"@"))
break
case 126:k.push(A.c9(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.jn(a,k)
break
case 38:A.jm(a,k)
break
case 63:p=a.u
k.push(A.hG(p,A.aN(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.hF(p,A.aN(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.jk(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.hD(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.jq(a.u,a.e,o)
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
return A.aN(a.u,a.e,m)},
jl(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
hC(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.jA(s,o.x)[p]
if(n==null)A.fm('No "'+p+'" in "'+A.j7(o)+'"')
d.push(A.ca(s,o,n))}else d.push(p)
return m},
jn(a,b){var s,r=a.u,q=A.hB(a,b),p=b.pop()
if(typeof p=="string")b.push(A.c8(r,p,q))
else{s=A.aN(r,a.e,p)
switch(s.w){case 11:b.push(A.fS(r,s,q,a.n))
break
default:b.push(A.fR(r,s,q))
break}}},
jk(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.hB(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.aN(p,a.e,o)
q=new A.cZ()
q.a=s
q.b=n
q.c=m
b.push(A.hE(p,r,q))
return
case-4:b.push(A.hH(p,b.pop(),s))
return
default:throw A.c(A.cg("Unexpected state under `()`: "+A.o(o)))}},
jm(a,b){var s=b.pop()
if(0===s){b.push(A.c9(a.u,1,"0&"))
return}if(1===s){b.push(A.c9(a.u,4,"1&"))
return}throw A.c(A.cg("Unexpected extended operation "+A.o(s)))},
hB(a,b){var s=b.splice(a.p)
A.hD(a.u,a.e,s)
a.p=b.pop()
return s},
aN(a,b,c){if(typeof c=="string")return A.c8(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.jo(a,b,c)}else return c},
hD(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aN(a,b,c[s])},
jq(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aN(a,b,c[s])},
jo(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.cg("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.cg("Bad index "+c+" for "+b.i(0)))},
kG(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.G(a,b,null,c,null)
r.set(c,s)}return s},
G(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.aT(d))return!0
s=b.w
if(s===4)return!0
if(A.aT(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.G(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.G(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.G(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.G(a,b.x,c,d,e))return!1
return A.G(a,A.fK(a,b),c,d,e)}if(s===6)return A.G(a,p,c,d,e)&&A.G(a,b.x,c,d,e)
if(q===7){if(A.G(a,b,c,d.x,e))return!0
return A.G(a,b,c,A.fK(a,d),e)}if(q===6)return A.G(a,b,c,p,e)||A.G(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.gT)return!0
if(q===12){if(b===t.h)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.G(a,j,c,i,e)||!A.G(a,i,e,j,c))return!1}return A.hT(a,b.x,c,d.x,e)}if(q===11){if(b===t.h)return!0
if(p)return!1
return A.hT(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.jW(a,b,c,d,e)}if(o&&q===10)return A.k0(a,b,c,d,e)
return!1},
hT(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.G(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.G(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.G(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.G(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.G(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
jW(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.ca(a,b,r[o])
return A.hL(a,p,null,c,d.y,e)}return A.hL(a,b.y,null,c,d.y,e)},
hL(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.G(a,b[s],d,e[s],f))return!1
return!0},
k0(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.G(a,r[s],c,q[s],e))return!1
return!0},
bi(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.aT(a))if(s!==6)r=s===7&&A.bi(a.x)
return r},
aT(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
hK(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
eN(a){return a>0?new Array(a):v.typeUniverse.sEA},
a4:function a4(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cZ:function cZ(){this.c=this.b=this.a=null},
d7:function d7(a){this.a=a},
cY:function cY(){},
c6:function c6(a){this.a=a},
jd(){var s,r,q
if(self.scheduleImmediate!=null)return A.kk()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.be(new A.eq(s),1)).observe(r,{childList:true})
return new A.ep(s,r,q)}else if(self.setImmediate!=null)return A.kl()
return A.km()},
je(a){self.scheduleImmediate(A.be(new A.er(t.M.a(a)),0))},
jf(a){self.setImmediate(A.be(new A.es(t.M.a(a)),0))},
jg(a){t.M.a(a)
A.jr(0,a)},
jr(a,b){var s=new A.eK()
s.bE(a,b)
return s},
hW(a){return new A.cV(new A.E($.x,a.h("E<0>")),a.h("cV<0>"))},
hQ(a,b){a.$2(0,null)
b.b=!0
return b.a},
fU(a,b){A.jE(a,b)},
hP(a,b){b.aI(a)},
hO(a,b){b.aJ(A.ad(a),A.bg(a))},
jE(a,b){var s,r,q=new A.eP(b),p=new A.eQ(b)
if(a instanceof A.E)a.bk(q,p,t.z)
else{s=t.z
if(a instanceof A.E)a.bx(q,p,s)
else{r=new A.E($.x,t._)
r.a=8
r.c=a
r.bk(q,p,s)}}},
i2(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.x
return r.bd(r,t.as.a(new A.eV(s)),t.H,t.S,t.z)},
df(a){var s
if(t.C.b(a)){s=a.ga6()
if(s!=null)return s}return B.o},
jR(a,b){var s=$.x
if(s===B.i)return null
s.bQ(s,a,b)
return null},
jS(a,b){if($.x!==B.i)A.jR(a,b)
if(b==null)if(t.C.b(a)){b=a.ga6()
if(b==null){A.hs(a,B.o)
b=B.o}}else b=B.o
else if(t.C.b(a))A.hs(a,b)
return new A.X(a,b)},
fN(a,b,c){var s,r,q,p,o,n={},m=n.a=a
for(s=t._;r=m.a,(r&4)!==0;m=a){a=s.a(m.c)
n.a=a}if(m===b){s=A.j9()
b.al(new A.X(new A.a9(!0,m,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=m.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=m
m.bb(p)
return}if(!c)if(b.c==null)m=(s&16)===0||q!==0
else m=!1
else m=!0
if(m){p=b.aa()
b.a8(n.a)
A.b4(b,p)
return}b.a^=2
o=b.b
o.a1(o,new A.ey(n,b))},
b4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=e.a=a
for(s=t.n,r=t.F;;){q={}
p=d.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(d.c)
d=d.b
d.b5(d,m.a,m.b)}return}q.a=b
l=b.a
for(d=b;l!=null;d=l,l=k){d.a=null
A.b4(e.a,d)
q.a=l
k=l.a}j=e.a.c
q.b=n
q.c=j
if(o){p=d.c
p=(p&1)!==0||(p&15)===8}else p=!0
if(p){i=d.b.b
h=$.x
if(h!==i)$.x=i
else h=null
d=d.c
if((d&15)===8)new A.eC(q,e,n).$0()
else if(o){if((d&1)!==0)new A.eB(q,j).$0()}else if((d&2)!==0)new A.eA(e,q).$0()
if(h!=null)$.x=h
d=q.c
if(d instanceof A.E){p=q.a.$ti
p=p.h("ae<2>").b(d)||!p.y[1].b(d)}else p=!1
if(p){g=q.a.b
if((d.a&24)!==0){f=r.a(g.c)
g.c=null
b=g.ab(f)
g.a=d.a&30|g.a&1
g.c=d.c
e.a=d
continue}else A.fN(d,g,!0)
return}}g=q.a.b
f=r.a(g.c)
g.c=null
b=g.ab(f)
d=q.b
p=q.c
if(!d){g.$ti.c.a(p)
g.a=8
g.c=p}else{s.a(p)
g.a=g.a&1|16
g.c=p}e.a=g
d=g}},
hZ(a,b){var s=t.R
if(s.b(a))return b.bd(b,s.a(a),t.z,t.K,t.l)
s=t.v
if(s.b(a))return b.be(b,s.a(a),t.z,t.K)
throw A.c(A.hc(a,"onError",u.c))},
k5(){var s,r
for(s=$.bb;s!=null;s=$.bb){$.cd=null
r=s.b
$.bb=r
if(r==null)$.cc=null
s.a.$0()}},
ke(){$.fY=!0
try{A.k5()}finally{$.cd=null
$.fY=!1
if($.bb!=null)$.h9().$1(A.i4())}},
i0(a){var s=new A.cW(a),r=$.cc
if(r==null){$.bb=$.cc=s
if(!$.fY)$.h9().$1(A.i4())}else $.cc=r.b=s},
kb(a){var s,r,q,p=$.bb
if(p==null){A.i0(a)
$.cd=$.cc
return}s=new A.cW(a)
r=$.cd
if(r==null){s.b=p
$.bb=$.cd=s}else{q=r.b
s.b=q
$.cd=r.b=s
if(q==null)$.cc=s}},
l4(a,b){A.h_(a,"stream",t.K)
return new A.d3(b.h("d3<0>"))},
k9(a,b){A.kb(new A.eT(a,b))},
ka(a,b){if(B.i!==a)b=a.ca(b,t.H)
A.i0(b)},
eq:function eq(a){this.a=a},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a){this.a=a},
es:function es(a){this.a=a},
eK:function eK(){},
eL:function eL(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=!1
this.$ti=b},
eP:function eP(a){this.a=a},
eQ:function eQ(a){this.a=a},
eV:function eV(a){this.a=a},
X:function X(a,b){this.a=a
this.b=b},
cX:function cX(){},
bV:function bV(a,b){this.a=a
this.$ti=b},
al:function al(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
E:function E(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ev:function ev(a,b){this.a=a
this.b=b},
ez:function ez(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
ew:function ew(a,b){this.a=a
this.b=b},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
eD:function eD(a,b){this.a=a
this.b=b},
eE:function eE(a){this.a=a},
eB:function eB(a,b){this.a=a
this.b=b},
eA:function eA(a,b){this.a=a
this.b=b},
cW:function cW(a){this.a=a
this.b=null},
d3:function d3(a){this.$ti=a},
en:function en(){},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
eT:function eT(a,b){this.a=a
this.b=b},
hz(a,b){var s=a[b]
return s===a?null:s},
fP(a,b,c){if(c==null)a[b]=a
else a[b]=c},
fO(){var s=Object.create(null)
A.fP(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
fD(a,b,c){return b.h("@<0>").p(c).h("fC<1,2>").a(A.i9(a,new A.af(b.h("@<0>").p(c).h("af<1,2>"))))},
bE(a,b){return new A.af(a.h("@<0>").p(b).h("af<1,2>"))},
iV(a){return new A.aL(a.h("aL<0>"))},
iW(a,b){return b.h("ho<0>").a(A.ku(a,new A.aL(b.h("aL<0>"))))},
fQ(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hA(a,b,c){var s=new A.aM(a,b,c.h("aM<0>"))
s.c=a.e
return s},
iO(a,b){var s=J.ao(a.a)
if(new A.aI(s,a.b,a.$ti.h("aI<1>")).k())return s.gm()
return null},
fG(a){var s,r
if(A.h3(a))return"{...}"
s=new A.b2("")
try{r={}
B.a.q($.W,a)
s.a+="{"
r.a=!0
a.G(0,new A.dG(r,s))
s.a+="}"}finally{if(0>=$.W.length)return A.d($.W,-1)
$.W.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bX:function bX(){},
b5:function b5(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
bY:function bY(a,b){this.a=a
this.$ti=b},
bZ:function bZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aL:function aL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d1:function d1(a){this.a=a
this.c=this.b=null},
aM:function aM(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
t:function t(){},
D:function D(){},
dG:function dG(a,b){this.a=a
this.b=b},
av:function av(){},
c4:function c4(){},
k6(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ad(r)
q=A.fy(String(s),null)
throw A.c(q)}q=A.eS(p)
return q},
eS(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.d_(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.eS(a[s])
return a},
hm(a,b,c){return new A.bA(a,b)},
jI(a){return a.cI()},
jh(a,b){return new A.eG(a,[],A.kp())},
ji(a,b,c){var s,r=new A.b2(""),q=A.jh(r,b)
q.ai(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
d_:function d_(a,b){this.a=a
this.b=b
this.c=null},
d0:function d0(a){this.a=a},
cj:function cj(){},
cl:function cl(){},
bA:function bA(a,b){this.a=a
this.b=b},
cw:function cw(a,b){this.a=a
this.b=b},
dy:function dy(){},
dA:function dA(a){this.b=a},
dz:function dz(a){this.a=a},
eH:function eH(){},
eI:function eI(a,b){this.a=a
this.b=b},
eG:function eG(a,b,c){this.c=a
this.a=b
this.b=c},
ks(a){var s=A.cK(a)
if(s!=null)return s
throw A.c(A.fy("Invalid double",a))},
iM(a,b){a=A.A(a,new Error())
if(a==null)a=A.b9(a)
a.stack=b.i(0)
throw a},
bF(a,b,c){var s,r,q
if(a<0||a>4294967295)A.fm(A.au(a,0,4294967295,"length",null))
s=A.k(new Array(a),c.h("q<0>"))
s.$flags=1
r=s
if(a!==0&&b!=null)for(q=0;q<r.length;++q)r[q]=b
return r},
hp(a,b,c){var s,r,q=A.k([],c.h("q<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.am)(a),++r)B.a.q(q,c.a(a[r]))
q.$flags=1
return q},
fE(a,b){var s,r
if(Array.isArray(a))return A.k(a.slice(0),b.h("q<0>"))
s=A.k([],b.h("q<0>"))
for(r=J.ao(a);r.k();)B.a.q(s,r.gm())
return s},
fF(a,b){var s=A.hp(a,!1,b)
s.$flags=3
return s},
fJ(a){return new A.bv(a,A.hl(a,!1,!0,!1,!1,""))},
hv(a,b,c){var s=J.ao(b)
if(!s.k())return a
if(c.length===0){do a+=A.o(s.gm())
while(s.k())}else{a+=A.o(s.gm())
while(s.k())a=a+c+A.o(s.gm())}return a},
j9(){return A.bg(new Error())},
iL(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
hi(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cm(a){if(a>=10)return""+a
return"0"+a},
cn(a){if(typeof a=="number"||A.d8(a)||a==null)return J.bk(a)
if(typeof a=="string")return JSON.stringify(a)
return A.hr(a)},
iN(a,b){A.h_(a,"error",t.K)
A.h_(b,"stackTrace",t.l)
A.iM(a,b)},
cg(a){return new A.cf(a)},
ce(a,b){return new A.a9(!1,null,b,a)},
hc(a,b,c){return new A.a9(!0,a,b,c)},
au(a,b,c,d,e){return new A.bN(b,c,!0,a,d,"Invalid value")},
j5(a,b,c){if(0>a||a>c)throw A.c(A.au(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.au(b,a,c,"end",null))
return b}return c},
fI(a,b){if(a<0)throw A.c(A.au(a,0,null,b,null))
return a},
ds(a,b,c,d){return new A.cp(b,!0,a,d,"Index out of range")},
bU(a){return new A.bT(a)},
hx(a){return new A.cR(a)},
hu(a){return new A.bR(a)},
M(a){return new A.ck(a)},
fy(a,b){return new A.bs(a,b)},
iP(a,b,c){var s,r
if(A.h3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.k([],t.s)
B.a.q($.W,a)
try{A.k4(a,s)}finally{if(0>=$.W.length)return A.d($.W,-1)
$.W.pop()}r=A.hv(b,t.W.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fz(a,b,c){var s,r
if(A.h3(a))return b+"..."+c
s=new A.b2(b)
B.a.q($.W,a)
try{r=s
r.a=A.hv(r.a,a,", ")}finally{if(0>=$.W.length)return A.d($.W,-1)
$.W.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
k4(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.k())return
s=A.o(l.gm())
B.a.q(b,s)
k+=s.length+2;++j}if(!l.k()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.k()){if(j<=4){B.a.q(b,A.o(p))
return}r=A.o(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.k();p=o,o=n){n=l.gm();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.q(b,"...")
return}}q=A.o(p)
r=A.o(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.q(b,m)
B.a.q(b,q)
B.a.q(b,r)},
fH(a,b,c,d){var s
if(B.k===c){s=B.b.gv(a)
b=J.a0(b)
return A.fL(A.ax(A.ax($.fv(),s),b))}if(B.k===d){s=B.b.gv(a)
b=J.a0(b)
c=J.a0(c)
return A.fL(A.ax(A.ax(A.ax($.fv(),s),b),c))}s=B.b.gv(a)
b=J.a0(b)
c=J.a0(c)
d=J.a0(d)
d=A.fL(A.ax(A.ax(A.ax(A.ax($.fv(),s),b),c),d))
return d},
aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(){},
w:function w(){},
cf:function cf(a){this.a=a},
aj:function aj(){},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cp:function cp(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bT:function bT(a){this.a=a},
cR:function cR(a){this.a=a},
bR:function bR(a){this.a=a},
ck:function ck(a){this.a=a},
bQ:function bQ(){},
eu:function eu(a){this.a=a},
bs:function bs(a,b){this.a=a
this.b=b},
b:function b(){},
B:function B(){},
h:function h(){},
d6:function d6(){},
b2:function b2(a){this.a=a},
dI:function dI(a){this.a=a},
ba(a){var s
if(typeof a=="function")throw A.c(A.ce("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.jF,a)
s[$.h8()]=a
return s},
jF(a,b,c){t.Z.a(a)
if(A.R(c)>=1)return a.$1(b)
return a.$0()},
hY(a){return a==null||A.d8(a)||typeof a=="number"||typeof a=="string"||t.gj.b(a)||t.gc.b(a)||t.go.b(a)||t.dQ.b(a)||t.h7.b(a)||t.an.b(a)||t.bv.b(a)||t.h4.b(a)||t.q.b(a)||t.x.b(a)||t.r.b(a)},
kH(a){if(A.hY(a))return a
return new A.f6(new A.b5(t.A)).$1(a)},
dc(a,b){var s=new A.E($.x,b.h("E<0>")),r=new A.bV(s,b.h("bV<0>"))
a.then(A.be(new A.fe(r,b),1),A.be(new A.ff(r),1))
return s},
hX(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
i6(a){if(A.hX(a))return a
return new A.eW(new A.b5(t.A)).$1(a)},
f6:function f6(a){this.a=a},
fe:function fe(a,b){this.a=a
this.b=b},
ff:function ff(a){this.a=a},
eW:function eW(a){this.a=a},
da(a){var s=69+12*(Math.log(a/440)/0.6931471805599453),r=B.c.C(s)
return new A.dH(r,B.c.C((s-r)*100))},
kR(a){var s,r,q,p=a.length
if(p===0)return 0
for(s=0,r=0;r<p;++r){q=a[r]
s+=q*q}return Math.sqrt(s/p)},
kM(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1/b,f=Math.max(1,B.c.cj(a0/g)),e=a.length,d=Math.min(e-2,B.c.cb(c/g))
if(d<=f)return null
s=A.k([],t.t)
for(r=f,q=r;r<=d;++r){if(!(r>=0&&r<e))return A.d(a,r)
p=a[r]
p=isFinite(p)?p:-200
B.a.q(s,p)
if(!(q>=0&&q<e))return A.d(a,q)
o=a[q]
if(p>(isFinite(o)?o:-200))q=r}B.a.aT(s)
o=s.length
n=o/2|0
if(!(n<o))return A.d(s,n)
m=s[n]
if(!(q>=0&&q<e))return A.d(a,q)
l=a[q]
if(!isFinite(l)||l-m<18)return null
o=q-1
if(!(o>=0))return A.d(a,o)
k=a[o]
o=q+1
if(!(o<e))return A.d(a,o)
j=a[o]
if(isFinite(k)&&isFinite(j)){i=k-2*l+j
h=i!==0?B.c.N(0.5*(k-j)/i,-0.5,0.5):0}else h=0
return(q+h)*g},
ic(a){var s,r,q,p=A.fE(a,t.i)
B.a.aT(p)
s=p.length
r=s/2|0
if((s&1)===1){if(!(r<s))return A.d(p,r)
p=p[r]}else{q=r-1
if(!(q>=0&&q<s))return A.d(p,q)
q=p[q]
if(!(r<s))return A.d(p,r)
p=(q+p[r])/2}return p},
dH:function dH(a,b){this.a=a
this.b=b},
dr:function dr(a){var _=this
_.a=0.02
_.e=null
_.f=0
_.r=a},
dC:function dC(a,b){this.a=a
this.b=b},
dD:function dD(){},
dE:function dE(a){this.a=a
this.b=0},
dF:function dF(){},
ii(a){var s,r,q,p,o=t.s,n=A.k(a.split(" "),o),m=B.a.cr(n,new A.fp()),l=A.k([],o)
for(s=!0,r=0;r<n.length;++r){q=n[r]
if(q.length===0){B.a.q(l,q)
continue}p=!1
if(!s)if(r!==m){o=A.fJ("^[^\\w]+|[^\\w]+$")
o=B.aU.E(0,A.fl(q,o,"").toLowerCase())
p=o}B.a.q(l,p?q.toLowerCase():A.jG(q))
s=B.d.ce(q,":")}return B.a.ag(l," ")},
jG(a){return new A.a2(A.k(a.split("-"),t.s),t.dG.a(new A.eR()),t.dv).ag(0,"-")},
fp:function fp(){},
eR:function eR(){},
hj(a){return B.a.a5(B.u,new A.dg(a),new A.dh())},
bj(a,b){var s,r,q,p,o,n,m=B.ar.l(0,a),l=m.l(0,b)
if(t.dP.b(l))return new A.cG(l.a,l.b,null,l.c)
s=m.gH().cv(0,new A.fg(b))
r=m.l(0,s)
q=r.a
p=r.b
o=r.c
n=s/b
return new A.cG(B.c.O(q*n),B.c.O(p*n),s,o)},
kr(a,b){var s=a.r
if(Math.abs(b-s)<0.75)return"A common depth for a "+a.c.toLowerCase()+": a balance of attack and body."
return b<s?"Shallower than usual: tends toward a quicker, more cutting attack and a shorter, tighter sound.":"Deeper than usual: tends toward more body and low end, with a fuller, longer sound."},
kL(a){return B.a.a5(B.v,new A.fa(a),new A.fb())},
ib(a,b){return B.a.a5(a,new A.f0(b),new A.f1(a))},
kP(a){return B.a.a5(B.x,new A.fi(a),new A.fj())},
j8(a){return B.a.a5(B.G,new A.e1(a),new A.e2())},
i7(a){var s,r,q,p=Math.abs(a),o=B.c.C(p),n=B.c.C((p-o)*100),m=B.b.U(o,12),l=B.b.I(o,12),k=m===1?"Octave":""+m+" octaves"
if(m===0)s=B.w[l]
else s=l===0?k:k+" + "+B.w[l].toLowerCase()
r=Math.abs(n)
if(r<=2)return s
q=n>0?"+":"\u2212"
return s+" "+q+r+"\xa2"},
i1(a){var s=A.fE(a,t.U)
B.a.ak(s,new A.eU())
return s},
ie(a,b,c){var s,r,q,p,o,n=A.i1(a),m=A.k([],t.d)
for(s=b,r=0;r<n.length;++r){if(r>0){q=r-1
p=c.length
if(q<p)o=c[q]
else o=p===0?5:B.a.gcq(c)
s*=Math.pow(2,-o/12)}if(!(r<n.length))return A.d(n,r)
q=n[r]
p=q.a
q=q.b
B.a.q(m,new A.ai(p,q,s,A.bj(p,q)))}return m},
kN(a,b){var s,r,q=A.i1(a),p=A.k([],t.d),o=0
for(;;){s=q.length
if(!(o<s&&o<b.length))break
if(!(o<s))return A.d(q,o)
s=q[o]
r=s.a
s=s.b
if(!(o<b.length))return A.d(b,o)
p.push(new A.ai(r,s,b[o],A.bj(r,s)));++o}return p},
kv(a){var s,r,q,p=A.k([],t.t)
for(s=0;r=s+1,q=a.length,r<q;s=r){if(!(s<q))return A.d(a,s)
p.push(12*(Math.log(a[s].c/a[r].c)/0.6931471805599453))}return p},
O:function O(a,b){this.a=a
this.b=b},
C:function C(a,b,c,d,e,f,g,h){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f
_.a=g
_.b=h},
dg:function dg(a){this.a=a},
dh:function dh(){},
cG:function cG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fg:function fg(a){this.a=a},
br:function br(a,b){this.a=a
this.b=b},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
fa:function fa(a){this.a=a},
fb:function fb(){},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f0:function f0(a){this.a=a},
f1:function f1(a){this.a=a},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fi:function fi(a){this.a=a},
fj:function fj(){},
a5:function a5(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
e1:function e1(a){this.a=a},
e2:function e2(){},
cr:function cr(a,b){this.a=a
this.b=b},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eU:function eU(){},
l(a,b){var s=A.U(A.e(v.G.document).getElementById(a))
s.toString
return b.a(s)},
v(a,b,c){var s=A.e(A.e(v.G.document).createElement(a))
if(b!=null)s.className=b
if(c!=null)s.textContent=c
return s},
I(a,b,c){return a.addEventListener(b,A.ba(new A.fd(c)))},
kE(){var s,r,q,p
try{q=v.G
s=q.top
r=q.self
return!(s===r)}catch(p){return!0}},
h6(a,b){return A.aq(v.G,"addEventListener",a,A.ba(new A.fc(b)),null,null)},
h7(){var s=A.n(A.e(v.G.location).hash)
return A.kV(s,"#","",0)},
kQ(a){var s,r
try{s=A.e(v.G.history)
A.aq(s,"replaceState","","","#"+a,null)}catch(r){}},
h4(a){var s,r,q,p,o=null
try{s=A.U(v.G.localStorage)
q=s
r=q==null?o:A.aq(q,"getItem",a,o,o,o)
q=r!=null&&typeof r==="string"?A.n(r):o
return q}catch(p){return o}},
fk(a,b){var s,r,q
try{s=A.U(v.G.localStorage)
r=s
if(r!=null)A.aq(r,"setItem",a,b,null,null)}catch(q){}},
kO(){var s,r,q,p,o,n,m=null,l=A.e(v.G.navigator).serviceWorker
if(!t.m.b(l))return
try{s=A.e(A.aq(A.e(l),"register","sw.js",m,m,m))
r=A.dc(s,t.X)
q=new A.fh()
p=r.$ti
o=$.x
if(o!==B.i)q=A.hZ(q,o)
r.a7(new A.al(new A.E(o,p),2,m,q,p.h("al<1,1>")))}catch(n){}},
l_(){var s=v.G,r=A.U(A.e(s.document).getElementById("themeToggle")),q=A.e(A.e(s.document).documentElement)
if(r==null)return
s=new A.fu(q,r)
A.I(r,"click",new A.ft(q,s))
s.$0()},
kZ(){var s,r,q,p={},o=v.G,n=A.U(A.e(o.document).getElementById("installApp")),m=A.U(A.e(o.document).getElementById("ios-install-tip")),l=A.e(o.navigator)
if(A.aO(A.e(o.matchMedia("(display-mode: standalone)")).matches)||J.a8(A.i6(l.standalone),!0))return
p.a=null
if(n!=null){A.aq(o,"addEventListener","beforeinstallprompt",A.ba(new A.fq(p,n)),null,null)
A.I(n,"click",new A.fr(p,n))
A.h6("appinstalled",new A.fs(n))}s=A.n(l.userAgent)
p=A.fT(l.maxTouchPoints)
r=p==null?null:A.R(p)
if(r==null)r=0
p=A.fJ("iPhone|iPad|iPod")
if(!p.b.test(s))q=B.d.E(s,"Macintosh")&&r>1
else q=!0
if(m!=null&&q)m.hidden=!1},
fd:function fd(a){this.a=a},
fc:function fc(a){this.a=a},
fh:function fh(){},
fu:function fu(a,b){this.a=a
this.b=b},
ft:function ft(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(a){this.a=a},
kJ(){var s,r,q,p,o,n
A.l_()
A.kZ()
A.kO()
if(A.U(A.e(v.G.document).getElementById("guide"))==null)return
s=t.m
r=new A.co(A.l("drum-type",s),A.l("drum-size",s),A.l("drum-depth",s),A.l("material",s),A.l("batter",s),A.l("reso",s),A.l("relation",s),A.l("range-title",s),A.l("range-low",s),A.l("range-med",s),A.l("range-high",s),A.l("range-scaled",s),A.l("notes",s),B.f,A.k([],t.u))
r.V()
q=new A.cQ(r,A.l("mic-start",s),A.l("reading-hz",s),A.l("reading-note",s),A.l("needle",s),A.l("level",s),A.l("listen-state",s),A.l("sensitivity",s),A.l("lugs",s),A.l("lug-status",s),A.l("target-line",s),A.l("target-mark",s),A.l("tuner-status",s),new A.dr(A.k([],t.t)),B.f,A.l("lug-count",s))
q.V()
p=t.N
new A.cI(A.l("plan-sizes",s),A.l("plan-spacing",s),A.l("plan-spacing-hint",s),A.l("plan-interval-row",s),A.l("plan-interval",s),A.l("plan-top-row",s),A.l("plan-top",s),A.l("plan-out",s),A.l("plan-summary",s),A.iW([B.aH,B.aG,B.aI],t.U),B.m,A.bE(p,t.S),A.bE(p,t.i),A.k([],t.B)).V()
A.k8()
o=new A.e3(new A.f7(q),A.l("tuning-tabs",s))
o.V()
n=A.l("change-drum",s)
n.hidden=!1
A.I(n,"click",new A.f8(o))},
fV(a){return a<100?B.c.F(a,1):B.b.i(B.c.C(a))},
az(a,b){var s,r,q,p
a.replaceChildren()
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.am)(b),++r){q=b[r]
p=A.v("option",null,q.b)
p.setAttribute("value",q.a)
a.appendChild(p)}},
fW(a){return a===B.c.O(a)?""+B.c.C(a)+'"':A.o(a)+'"'},
jH(a){var s,r,q,p,o,n=A.v("p","cite","Sources: ")
for(s=a.length,r=!0,q=0;q<s;++q){p=B.y.l(0,a[q])
if(p==null)continue
if(!r)n.appendChild(A.v("span",null," \xb7 "))
o=A.v("a",null,p.a)
o.setAttribute("href",p.b)
o.setAttribute("rel","noopener")
o.setAttribute("target","_blank")
n.appendChild(o)
r=!1}return n},
k8(){var s,r,q,p,o=A.l("sources",t.m)
for(s=B.y.gbz(),s=s.gt(s);s.k();){r=s.gm()
q=A.v("li",null,null)
p=A.v("a",null,r.a)
p.setAttribute("href",r.b)
p.setAttribute("rel","noopener")
p.setAttribute("target","_blank")
q.appendChild(p)
o.appendChild(q)}},
jc(a){var s,r,q
try{s=A.e(a).name
r=s!=null&&typeof s==="string"?A.n(s):null
return r}catch(q){return null}},
fM(a){var s
A:{if("NotAllowedError"===a||"SecurityError"===a){s="Microphone access is blocked for this site. iPhone/iPad (Safari): tap the page-settings icon in the address bar, choose Website Settings, set Microphone to Allow. Android (Chrome): tap the icon at the left of the address bar, open Permissions, allow Microphone. Then press Start tuner again."
break A}if("NotFoundError"===a||"OverconstrainedError"===a){s="No microphone was found. Connect one, or check that the device\u2019s microphone is switched on, then press Start tuner again."
break A}if("NotReadableError"===a||"AbortError"===a){s="The microphone is busy, probably in a call or another recording app. Close that app, then press Start tuner again."
break A}if("framed"===a){s="For your privacy, the tuner only uses the microphone when Drum Studio is open in its own tab. Open https://davidpetry-cloud.github.io/drum-studio/tuning.html directly."
break A}if("insecure"===a){s="The tuner needs a secure (https) page to use the microphone. Open the app from https://davidpetry-cloud.github.io/drum-studio/tuning.html."
break A}s="The microphone couldn\u2019t start. Check that this site is allowed to use it (usually the icon by the address bar), then press Start tuner again."
break A}return s},
f7:function f7(a){this.a=a},
f8:function f8(a){this.a=a},
e3:function e3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=$},
e5:function e5(a,b){this.a=a
this.b=b},
e6:function e6(a){this.a=a},
e4:function e4(){},
e7:function e7(a){this.a=a},
co:function co(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=14
_.ay=5.5
_.ch=o},
dn:function dn(a){this.a=a},
dp:function dp(a){this.a=a},
dq:function dq(a){this.a=a},
dk:function dk(){},
dm:function dm(){},
dl:function dl(a){this.a=a},
cQ:function cQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.ch=_.ay=_.ax=_.at=null
_.cx=_.CW=$
_.cy=null
_.db=!1
_.dx=n
_.dy=$
_.fr=o
_.fx=p
_.fy=null
_.go=$
_.id=!1
_.k1=0},
eb:function eb(a){this.a=a},
ec:function ec(a){this.a=a},
ed:function ed(a){this.a=a},
ee:function ee(a){this.a=a},
ef:function ef(a){this.a=a},
eg:function eg(a){this.a=a},
e8:function e8(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a,b){var _=this
_.a=a
_.b=b
_.f=_.e=_.d=_.c=$
_.w=_.r=null},
cI:function cI(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=5
_.as=l
_.at=m
_.ax=n},
dX:function dX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a){this.a=a},
e_:function e_(a){this.a=a},
dW:function dW(){},
dV:function dV(a){this.a=a},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dL:function dL(){},
dM:function dM(){},
dS:function dS(a){this.a=a},
dT:function dT(a){this.a=a},
dU:function dU(a){this.a=a},
ij(a){return v.mangledGlobalNames[a]},
kX(a){throw A.A(A.hn(a),new Error())},
an(){throw A.A(A.iU(""),new Error())},
fo(){throw A.A(A.iT(""),new Error())},
fn(){throw A.A(A.hn(""),new Error())},
aq(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}}},B={}
var w=[A,J,B]
var $={}
A.fA.prototype={}
J.cq.prototype={
P(a,b){return a===b},
gv(a){return A.bM(a)},
i(a){return"Instance of '"+A.cJ(a)+"'"},
gA(a){return A.aR(A.fX(this))}}
J.ct.prototype={
i(a){return String(a)},
gv(a){return a?519018:218159},
gA(a){return A.aR(t.y)},
$iu:1,
$ip:1}
J.bu.prototype={
P(a,b){return null==b},
i(a){return"null"},
gv(a){return 0},
$iu:1}
J.bx.prototype={$ir:1}
J.at.prototype={
gv(a){return 0},
i(a){return String(a)}}
J.cH.prototype={}
J.aH.prototype={}
J.as.prototype={
i(a){var s=a[$.il()]
if(s==null)s=a[$.h8()]
if(s==null)return this.bD(a)
return"JavaScript function for "+J.bk(s)},
$iaF:1}
J.bw.prototype={
gv(a){return 0},
i(a){return String(a)}}
J.by.prototype={
gv(a){return 0},
i(a){return String(a)}}
J.q.prototype={
q(a,b){A.K(a).c.a(b)
a.$flags&1&&A.dd(a,29)
a.push(b)},
ad(a,b){var s
A.K(a).h("b<1>").a(b)
a.$flags&1&&A.dd(a,"addAll",2)
if(Array.isArray(b)){this.bG(a,b)
return}for(s=J.ao(b);s.k();)a.push(s.gm())},
bG(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.c(A.M(a))
for(r=0;r<s;++r)a.push(b[r])},
bp(a){a.$flags&1&&A.dd(a,"clear","clear")
a.length=0},
a_(a,b,c){var s=A.K(a)
return new A.a2(a,s.p(c).h("1(2)").a(b),s.h("@<1>").p(c).h("a2<1,2>"))},
ag(a,b){var s,r=A.bF(a.length,"",t.N)
for(s=0;s<a.length;++s)this.n(r,s,A.o(a[s]))
return r.join(b)},
a5(a,b,c){var s,r,q,p=A.K(a)
p.h("p(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.M(a))}if(c!=null)return c.$0()
throw A.c(A.dw())},
B(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
ga4(a){if(a.length>0)return a[0]
throw A.c(A.dw())},
gcq(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.dw())},
ae(a,b){var s,r
A.K(a).h("p(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.M(a))}return!1},
cf(a,b){var s,r
A.K(a).h("p(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.M(a))}return!0},
ak(a,b){var s,r,q,p,o,n=A.K(a)
n.h("a(1,1)?").a(b)
a.$flags&2&&A.dd(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.jT()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.cE()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.be(b,2))
if(p>0)this.c0(a,p)},
aT(a){return this.ak(a,null)},
c0(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cm(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.a8(a[s],b))return s}return-1},
E(a,b){var s
for(s=0;s<a.length;++s)if(J.a8(a[s],b))return!0
return!1},
gu(a){return a.length===0},
gK(a){return a.length!==0},
i(a){return A.fz(a,"[","]")},
gt(a){return new J.aC(a,a.length,A.K(a).h("aC<1>"))},
gv(a){return A.bM(a)},
gj(a){return a.length},
l(a,b){if(!(b>=0&&b<a.length))throw A.c(A.eX(a,b))
return a[b]},
n(a,b,c){A.K(a).c.a(c)
a.$flags&2&&A.dd(a)
if(!(b>=0&&b<a.length))throw A.c(A.eX(a,b))
a[b]=c},
cn(a,b){var s
A.K(a).h("p(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
cr(a,b){var s,r
A.K(a).h("p(1)").a(b)
s=a.length-1
if(s<0)return-1
for(r=s;r>=0;--r){if(!(r<a.length))return A.d(a,r)
if(b.$1(a[r]))return r}return-1},
$if:1,
$ib:1,
$im:1}
J.cs.prototype={
cz(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.cJ(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.dx.prototype={}
J.aC.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.am(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iy:1}
J.aW.prototype={
J(a,b){var s
A.hM(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaf(b)
if(this.gaf(a)===s)return 0
if(this.gaf(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaf(a){return a===0?1/a<0:a<0},
cb(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.bU(""+a+".ceil()"))},
cj(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.c(A.bU(""+a+".floor()"))},
C(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.bU(""+a+".round()"))},
O(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
N(a,b,c){if(this.J(b,c)>0)throw A.c(A.kj(b))
if(this.J(a,b)<0)return b
if(this.J(a,c)>0)return c
return a},
F(a,b){var s
if(b>20)throw A.c(A.au(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaf(a))return"-"+s
return s},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
I(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
U(a,b){return(a|0)===a?a/b|0:this.c8(a,b)},
c8(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.bU("Result of truncating division is "+A.o(s)+": "+A.o(a)+" ~/ "+b))},
bh(a,b){var s
if(a>0)s=this.c6(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
c6(a,b){return b>31?0:a>>>b},
gA(a){return A.aR(t.o)},
$ia1:1,
$ij:1,
$iP:1}
J.bt.prototype={
gA(a){return A.aR(t.S)},
$iu:1,
$ia:1}
J.cu.prototype={
gA(a){return A.aR(t.i)},
$iu:1}
J.ar.prototype={
aH(a,b,c){var s=b.length
if(c>s)throw A.c(A.au(c,0,s,null,null))
return new A.d4(b,a,c)},
bo(a,b){return this.aH(a,b,0)},
ce(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aV(a,r-s)},
R(a,b,c){return a.substring(b,A.j5(b,c,a.length))},
aV(a,b){return this.R(a,b,null)},
by(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.iR(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.iS(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
E(a,b){return A.kS(a,b,0)},
J(a,b){var s
A.n(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
i(a){return a},
gv(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gA(a){return A.aR(t.N)},
gj(a){return a.length},
$iu:1,
$ia1:1,
$idK:1,
$ii:1}
A.b3.prototype={
gt(a){return new A.bl(J.ao(this.gX()),A.z(this).h("bl<1,2>"))},
gj(a){return J.aB(this.gX())},
gu(a){return J.hb(this.gX())},
gK(a){return J.iA(this.gX())},
B(a,b){return A.z(this).y[1].a(J.de(this.gX(),b))},
i(a){return J.bk(this.gX())}}
A.bl.prototype={
k(){return this.a.k()},
gm(){return this.$ti.y[1].a(this.a.gm())},
$iy:1}
A.bW.prototype={
l(a,b){return this.$ti.y[1].a(J.S(this.a,b))},
$if:1,
$im:1}
A.bm.prototype={
gX(){return this.a}}
A.aX.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.e0.prototype={}
A.f.prototype={}
A.Q.prototype={
gt(a){var s=this
return new A.aG(s,s.gj(s),A.z(s).h("aG<Q.E>"))},
gu(a){return this.gj(this)===0},
ae(a,b){var s,r,q=this
A.z(q).h("p(Q.E)").a(b)
s=q.gj(q)
for(r=0;r<s;++r){if(b.$1(q.B(0,r)))return!0
if(s!==q.gj(q))throw A.c(A.M(q))}return!1},
ag(a,b){var s,r,q,p=this,o=p.gj(p)
if(b.length!==0){if(o===0)return""
s=A.o(p.B(0,0))
if(o!==p.gj(p))throw A.c(A.M(p))
for(r=s,q=1;q<o;++q){r=r+b+A.o(p.B(0,q))
if(o!==p.gj(p))throw A.c(A.M(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.o(p.B(0,q))
if(o!==p.gj(p))throw A.c(A.M(p))}return r.charCodeAt(0)==0?r:r}},
a_(a,b,c){var s=A.z(this)
return new A.a2(this,s.p(c).h("1(Q.E)").a(b),s.h("@<Q.E>").p(c).h("a2<1,2>"))}}
A.bS.prototype={
gbP(){var s=J.aB(this.a)
return s},
gc7(){var s=J.aB(this.a),r=this.b
if(r>s)return s
return r},
gj(a){var s=J.aB(this.a),r=this.b
if(r>=s)return 0
return s-r},
B(a,b){var s=this,r=s.gc7()+b
if(b<0||r>=s.gbP())throw A.c(A.ds(b,s.gj(0),s,"index"))
return J.de(s.a,r)}}
A.aG.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.bf(q),o=p.gj(q)
if(r.b!==o)throw A.c(A.M(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.B(q,s);++r.c
return!0},
$iy:1}
A.ah.prototype={
gt(a){return new A.bG(J.ao(this.a),this.b,A.z(this).h("bG<1,2>"))},
gj(a){return J.aB(this.a)},
gu(a){return J.hb(this.a)},
B(a,b){return this.b.$1(J.de(this.a,b))}}
A.aE.prototype={$if:1}
A.bG.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gm())
return!0}s.a=null
return!1},
gm(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iy:1}
A.a2.prototype={
gj(a){return J.aB(this.a)},
B(a,b){return this.b.$1(J.de(this.a,b))}}
A.a6.prototype={
gt(a){return new A.aI(J.ao(this.a),this.b,this.$ti.h("aI<1>"))},
a_(a,b,c){var s=this.$ti
return new A.ah(this,s.p(c).h("1(2)").a(b),s.h("@<1>").p(c).h("ah<1,2>"))}}
A.aI.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gm()))return!0
return!1},
gm(){return this.a.gm()},
$iy:1}
A.N.prototype={}
A.cb.prototype={}
A.F.prototype={$r:"+(1,2)",$s:1}
A.Z.prototype={$r:"+(1,2,3)",$s:2}
A.aV.prototype={
gu(a){return this.gj(this)===0},
i(a){return A.fG(this)},
$iY:1}
A.bo.prototype={
gj(a){return this.b.length},
gb6(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
Y(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
l(a,b){if(!this.Y(b))return null
return this.b[this.a[b]]},
G(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gb6()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gH(){return new A.aJ(this.gb6(),this.$ti.h("aJ<1>"))},
gbz(){return new A.aJ(this.b,this.$ti.h("aJ<2>"))}}
A.aJ.prototype={
gj(a){return this.a.length},
gu(a){return 0===this.a.length},
gK(a){return 0!==this.a.length},
gt(a){var s=this.a
return new A.aK(s,s.length,this.$ti.h("aK<1>"))}}
A.aK.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iy:1}
A.aa.prototype={
a0(){var s=this,r=s.$map
if(r==null){r=new A.bz(s.$ti.h("bz<1,2>"))
A.i9(s.a,r)
s.$map=r}return r},
l(a,b){return this.a0().l(0,b)},
G(a,b){this.$ti.h("~(1,2)").a(b)
this.a0().G(0,b)},
gH(){var s=this.a0()
return new A.ag(s,A.z(s).h("ag<1>"))},
gbz(){var s=this.a0()
return new A.bD(s,A.z(s).h("bD<2>"))},
gj(a){return this.a0().a}}
A.bn.prototype={
q(a,b){A.z(this).c.a(b)
A.iK()}}
A.bp.prototype={
gj(a){return this.b},
gu(a){return this.b===0},
gK(a){return this.b!==0},
gt(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.aK(s,s.length,r.$ti.h("aK<1>"))},
E(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.bP.prototype={}
A.eh.prototype={
L(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.bL.prototype={
i(a){return"Null check operator used on a null value"}}
A.cv.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.cS.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.dJ.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bq.prototype={}
A.c5.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaw:1}
A.ap.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ik(r==null?"unknown":r)+"'"},
$iaF:1,
gcD(){return this},
$C:"$1",
$R:1,
$D:null}
A.ch.prototype={$C:"$0",$R:0}
A.ci.prototype={$C:"$2",$R:2}
A.cP.prototype={}
A.cN.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ik(s)+"'"}}
A.aU.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aU))return!1
return this.$_target===b.$_target&&this.a===b.a},
gv(a){return(A.db(this.a)^A.bM(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cJ(this.a)+"'")}}
A.cL.prototype={
i(a){return"RuntimeError: "+this.a}}
A.af.prototype={
gj(a){return this.a},
gu(a){return this.a===0},
gH(){return new A.ag(this,A.z(this).h("ag<1>"))},
Y(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
l(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.co(b)},
co(a){var s,r,q=this.d
if(q==null)return null
s=this.bV(q,a)
r=this.aN(s,a)
if(r<0)return null
return s[r].b},
n(a,b,c){var s,r,q,p,o,n,m=this,l=A.z(m)
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.aW(s==null?m.b=m.aA():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aW(r==null?m.c=m.aA():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aA()
p=m.aM(b)
o=q[p]
if(o==null)q[p]=[m.aB(b,c)]
else{n=m.aN(o,b)
if(n>=0)o[n].b=c
else o.push(m.aB(b,c))}}},
ct(a,b){var s,r,q=this,p=A.z(q)
p.c.a(a)
p.h("2()").a(b)
if(q.Y(a)){s=q.l(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.n(0,a,r)
return r},
G(a,b){var s,r,q=this
A.z(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.M(q))
s=s.c}},
aW(a,b,c){var s,r=A.z(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.aB(b,c)
else s.b=c},
aB(a,b){var s=this,r=A.z(s),q=new A.dB(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
aM(a){return J.a0(a)&1073741823},
bV(a,b){return a[this.aM(b)]},
aN(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1},
i(a){return A.fG(this)},
aA(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ifC:1}
A.dB.prototype={}
A.ag.prototype={
gj(a){return this.a.a},
gu(a){return this.a.a===0},
gt(a){var s=this.a
return new A.bB(s,s.r,s.e,this.$ti.h("bB<1>"))}}
A.bB.prototype={
gm(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.M(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iy:1}
A.bD.prototype={
gj(a){return this.a.a},
gu(a){return this.a.a===0},
gt(a){var s=this.a
return new A.bC(s,s.r,s.e,this.$ti.h("bC<1>"))}}
A.bC.prototype={
gm(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.M(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iy:1}
A.bz.prototype={
aM(a){return A.kn(a)&1073741823},
aN(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1}}
A.f2.prototype={
$1(a){return this.a(a)},
$S:14}
A.f3.prototype={
$2(a,b){return this.a(a,b)},
$S:42}
A.f4.prototype={
$1(a){return this.a(A.n(a))},
$S:19}
A.ab.prototype={
i(a){return this.bl(!1)},
bl(a){var s,r,q,p,o,n=this.bS(),m=this.aw(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.hr(o):l+A.o(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bS(){var s,r=this.$s
while($.eJ.length<=r)B.a.q($.eJ,null)
s=$.eJ[r]
if(s==null){s=this.bK()
B.a.n($.eJ,r,s)}return s},
bK(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.k(new Array(l),t.G)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.n(k,q,r[s])}}return A.fF(k,t.K)}}
A.b6.prototype={
aw(){return[this.a,this.b]},
P(a,b){if(b==null)return!1
return b instanceof A.b6&&this.$s===b.$s&&J.a8(this.a,b.a)&&J.a8(this.b,b.b)},
gv(a){return A.fH(this.$s,this.a,this.b,B.k)}}
A.b7.prototype={
aw(){return[this.a,this.b,this.c]},
P(a,b){var s=this
if(b==null)return!1
return b instanceof A.b7&&s.$s===b.$s&&J.a8(s.a,b.a)&&J.a8(s.b,b.b)&&J.a8(s.c,b.c)},
gv(a){var s=this
return A.fH(s.$s,s.a,s.b,s.c)}}
A.bv.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
gb7(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.hl(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
ci(a){var s=this.b.exec(a)
if(s==null)return null
return new A.c_(s)},
aH(a,b,c){var s=b.length
if(c>s)throw A.c(A.au(c,0,s,null,null))
return new A.cT(this,b,c)},
bo(a,b){return this.aH(0,b,0)},
bR(a,b){var s,r=this.gb7()
if(r==null)r=A.b9(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.c_(s)},
$idK:1,
$ij6:1}
A.c_.prototype={
gaU(){return this.b.index},
gaL(){var s=this.b
return s.index+s[0].length},
$iaY:1,
$ibO:1}
A.cT.prototype={
gt(a){return new A.cU(this.a,this.b,this.c)}}
A.cU.prototype={
gm(){var s=this.d
return s==null?t.cz.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.bR(l,s)
if(p!=null){m.d=p
o=p.gaL()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.d(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.d(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iy:1}
A.cO.prototype={
gaL(){return this.a+this.c.length},
$iaY:1,
gaU(){return this.a}}
A.d4.prototype={
gt(a){return new A.d5(this.a,this.b,this.c)}}
A.d5.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.cO(s,o)
q.c=r===q.c?r+1:r
return!0},
gm(){var s=this.d
s.toString
return s},
$iy:1}
A.aZ.prototype={
gA(a){return B.b6},
$iu:1,
$ifw:1}
A.bJ.prototype={}
A.cx.prototype={
gA(a){return B.b7},
$iu:1,
$ifx:1}
A.b_.prototype={
gj(a){return a.length},
$iT:1}
A.bH.prototype={
l(a,b){A.aP(b,a,a.length)
return a[b]},
$if:1,
$ib:1,
$im:1}
A.bI.prototype={$if:1,$ib:1,$im:1}
A.cy.prototype={
gA(a){return B.b8},
$iu:1,
$idi:1}
A.cz.prototype={
gA(a){return B.b9},
$iu:1,
$idj:1}
A.cA.prototype={
gA(a){return B.ba},
l(a,b){A.aP(b,a,a.length)
return a[b]},
$iu:1,
$idt:1}
A.cB.prototype={
gA(a){return B.bb},
l(a,b){A.aP(b,a,a.length)
return a[b]},
$iu:1,
$idu:1}
A.cC.prototype={
gA(a){return B.bc},
l(a,b){A.aP(b,a,a.length)
return a[b]},
$iu:1,
$idv:1}
A.cD.prototype={
gA(a){return B.be},
l(a,b){A.aP(b,a,a.length)
return a[b]},
$iu:1,
$iej:1}
A.cE.prototype={
gA(a){return B.bf},
l(a,b){A.aP(b,a,a.length)
return a[b]},
$iu:1,
$iek:1}
A.bK.prototype={
gA(a){return B.bg},
gj(a){return a.length},
l(a,b){A.aP(b,a,a.length)
return a[b]},
$iu:1,
$iel:1}
A.cF.prototype={
gA(a){return B.bh},
gj(a){return a.length},
l(a,b){A.aP(b,a,a.length)
return a[b]},
$iu:1,
$iem:1}
A.c0.prototype={}
A.c1.prototype={}
A.c2.prototype={}
A.c3.prototype={}
A.a4.prototype={
h(a){return A.ca(v.typeUniverse,this,a)},
p(a){return A.hJ(v.typeUniverse,this,a)}}
A.cZ.prototype={}
A.d7.prototype={
i(a){return A.V(this.a,null)}}
A.cY.prototype={
i(a){return this.a}}
A.c6.prototype={$iaj:1}
A.eq.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:10}
A.ep.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:29}
A.er.prototype={
$0(){this.a.$0()},
$S:7}
A.es.prototype={
$0(){this.a.$0()},
$S:7}
A.eK.prototype={
bE(a,b){if(self.setTimeout!=null)self.setTimeout(A.be(new A.eL(this,b),0),a)
else throw A.c(A.bU("`setTimeout()` not found."))}}
A.eL.prototype={
$0(){this.b.$0()},
$S:0}
A.cV.prototype={
aI(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.aX(a)
else{s=r.a
if(q.h("ae<1>").b(a))s.aY(a)
else s.b2(a)}},
aJ(a,b){var s
if(b==null)b=A.df(a)
s=this.a
if(this.b)s.aq(new A.X(a,b))
else s.al(new A.X(a,b))}}
A.eP.prototype={
$1(a){return this.a.$2(0,a)},
$S:2}
A.eQ.prototype={
$2(a,b){this.a.$2(1,new A.bq(a,t.l.a(b)))},
$S:43}
A.eV.prototype={
$2(a,b){this.a(A.R(a),b)},
$S:28}
A.X.prototype={
i(a){return A.o(this.a)},
$iw:1,
ga6(){return this.b}}
A.cX.prototype={
aJ(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.hu("Future already completed"))
s.al(A.jS(a,b))},
br(a){return this.aJ(a,null)}}
A.bV.prototype={
aI(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.hu("Future already completed"))
s.aX(r.h("1/").a(a))}}
A.al.prototype={
cs(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.aE(s,t.al.a(this.d),a.a,t.y,t.K)},
cl(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.R.b(q))p=l.c1(l,q,m,a.b,o,n,t.l)
else p=l.aE(l,t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.ad(s))){if((r.c&1)!==0)throw A.c(A.ce("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.ce("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.E.prototype={
bx(a,b,c){var s,r,q,p=this.$ti
p.p(c).h("1/(2)").a(a)
s=$.x
if(s===B.i){if(b!=null&&!t.R.b(b)&&!t.v.b(b))throw A.c(A.hc(b,"onError",u.c))}else{r=p.c
a=s.be(s,c.h("@<0/>").p(r).h("1(2)").a(a),c.h("0/"),r)
if(b!=null)b=A.hZ(b,s)}q=new A.E(s,c.h("E<0>"))
r=b==null?1:3
this.a7(new A.al(q,r,a,b,p.h("@<1>").p(c).h("al<1,2>")))
return q},
bk(a,b,c){var s,r=this.$ti
r.p(c).h("1/(2)").a(a)
s=new A.E($.x,c.h("E<0>"))
this.a7(new A.al(s,19,a,b,r.h("@<1>").p(c).h("al<1,2>")))
return s},
c3(a){this.a=this.a&1|16
this.c=a},
a8(a){this.a=a.a&30|this.a&1
this.c=a.c},
a7(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.a7(a)
return}r.a8(s)}q=r.b
q.a1(q,new A.ev(r,a))}},
bb(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.bb(a)
return}m.a8(n)}l.a=m.ab(a)
s=m.b
s.a1(s,new A.ez(l,m))}},
aa(){var s=t.F.a(this.c)
this.c=null
return this.ab(s)},
ab(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
b2(a){var s,r=this
r.$ti.c.a(a)
s=r.aa()
r.a=8
r.c=a
A.b4(r,s)},
bJ(a){var s=this.aa()
this.a8(a)
A.b4(this,s)},
aq(a){var s=this.aa()
this.c3(a)
A.b4(this,s)},
aX(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("ae<1>").b(a)){this.aY(a)
return}this.bI(a)},
bI(a){var s,r=this
r.$ti.c.a(a)
r.a^=2
s=r.b
s.a1(s,new A.ex(r,a))},
aY(a){A.fN(this.$ti.h("ae<1>").a(a),this,!1)
return},
al(a){var s
this.a^=2
s=this.b
s.a1(s,new A.ew(this,a))},
$iae:1}
A.ev.prototype={
$0(){A.b4(this.a,this.b)},
$S:0}
A.ez.prototype={
$0(){A.b4(this.b,this.a.a)},
$S:0}
A.ey.prototype={
$0(){A.fN(this.a.a,this.b,!0)},
$S:0}
A.ex.prototype={
$0(){this.a.b2(this.b)},
$S:0}
A.ew.prototype={
$0(){this.a.aq(this.b)},
$S:0}
A.eC.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.bg(p,t.fO.a(q.d),t.z)}catch(o){s=A.ad(o)
r=A.bg(o)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
p=r
if(p==null)p=A.df(q)
n=k.a
n.c=new A.X(q,p)
q=n}q.b=!0
return}if(j instanceof A.E&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.E){m=k.b.a
l=new A.E(m.b,m.$ti)
j.bx(new A.eD(l,m),new A.eE(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.eD.prototype={
$1(a){this.a.bJ(this.b)},
$S:10}
A.eE.prototype={
$2(a,b){A.b9(a)
t.l.a(b)
this.a.aq(new A.X(a,b))},
$S:17}
A.eB.prototype={
$0(){var s,r,q,p,o,n,m,l,k
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
l=p.b.b
q.c=l.aE(l,o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(k){s=A.ad(k)
r=A.bg(k)
q=s
p=r
if(p==null)p=A.df(q)
o=this.a
o.c=new A.X(q,p)
o.b=!0}},
$S:0}
A.eA.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.cs(s)&&p.a.e!=null){p.c=p.a.cl(s)
p.b=!1}}catch(o){r=A.ad(o)
q=A.bg(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.df(p)
m=l.b
m.c=new A.X(p,n)
p=m}p.b=!0}},
$S:0}
A.cW.prototype={}
A.d3.prototype={}
A.en.prototype={
ca(a,b){return new A.eo(this,this.bZ(this,b.h("0()").a(a),b),b)},
b5(a,b,c){var s,r,q,p,o,n,m,l
t.l.a(c)
s=null
if(s==null){A.k9(b,c)
return}r=s.gaQ()
q=r.gcF()
p=$.x
try{$.x=q
s.ck(r,r.gaC(),a,b,c)
$.x=p}catch(m){o=A.ad(m)
n=A.bg(m)
$.x=p
l=b===o?c:n
q.b5(r,o,l)}},
bg(a,b,c){var s,r,q
c.h("0()").a(b)
r=$.x
if(r===a)return b.$0()
s=r
$.x=a
try{r=b.$0()
return r}finally{$.x=s}q=null.gaQ()
return null.cG(q,q.gaC(),a,b)},
aE(a,b,c,d,e){var s,r,q
d.h("@<0>").p(e).h("1(2)").a(b)
e.a(c)
r=$.x
if(r===a)return b.$1(c)
s=r
$.x=a
try{r=b.$1(c)
return r}finally{$.x=s}q=null.gaQ()
return null.ck(q,q.gaC(),a,b,c)},
c1(a,b,c,d,e,f,g){var s,r,q
e.h("@<0>").p(f).p(g).h("1(2,3)").a(b)
f.a(c)
g.a(d)
r=$.x
if(r===a)return b.$2(c,d)
s=r
$.x=a
try{r=b.$2(c,d)
return r}finally{$.x=s}q=null.gaQ()
return null.cH(q,q.gaC(),a,b,c,d)},
bZ(a,b,c){c.h("0()").a(b)
return b},
be(a,b,c,d){c.h("@<0>").p(d).h("1(2)").a(b)
return b},
bd(a,b,c,d,e){c.h("@<0>").p(d).p(e).h("1(2,3)").a(b)
return b},
bQ(a,b,c){return null},
a1(a,b){A.ka(a,t.M.a(b))
return}}
A.eo.prototype={
$0(){var s=this.a
return s.bg(s,this.b,this.c)},
$S(){return this.c.h("0()")}}
A.eT.prototype={
$0(){A.iN(this.a,this.b)},
$S:0}
A.bX.prototype={
gj(a){return this.a},
gu(a){return this.a===0},
gH(){return new A.bY(this,this.$ti.h("bY<1>"))},
Y(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.bM(a)},
bM(a){var s=this.d
if(s==null)return!1
return this.S(this.b1(s,a),a)>=0},
l(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.hz(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.hz(q,b)
return r}else return this.bU(b)},
bU(a){var s,r,q=this.d
if(q==null)return null
s=this.b1(q,a)
r=this.S(s,a)
return r<0?null:s[r+1]},
n(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.b_(s==null?m.b=A.fO():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.b_(r==null?m.c=A.fO():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.fO()
p=A.db(b)&1073741823
o=q[p]
if(o==null){A.fP(q,p,[b,c]);++m.a
m.e=null}else{n=m.S(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
G(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.b0()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.l(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.c(A.M(m))}},
b0(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.bF(i.a,null,t.z)
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
b_(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.fP(a,b,c)},
b1(a,b){return a[A.db(b)&1073741823]}}
A.b5.prototype={
S(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.bY.prototype={
gj(a){return this.a.a},
gu(a){return this.a.a===0},
gK(a){return this.a.a!==0},
gt(a){var s=this.a
return new A.bZ(s,s.b0(),this.$ti.h("bZ<1>"))}}
A.bZ.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.M(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iy:1}
A.aL.prototype={
gt(a){var s=this,r=new A.aM(s,s.r,s.$ti.h("aM<1>"))
r.c=s.e
return r},
gj(a){return this.a},
gu(a){return this.a===0},
gK(a){return this.a!==0},
E(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else{r=this.bL(b)
return r}},
bL(a){var s=this.d
if(s==null)return!1
return this.S(s[J.a0(a)&1073741823],a)>=0},
q(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aZ(s==null?q.b=A.fQ():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aZ(r==null?q.c=A.fQ():r,b)}else return q.bF(b)},
bF(a){var s,r,q,p=this
p.$ti.c.a(a)
s=p.d
if(s==null)s=p.d=A.fQ()
r=J.a0(a)&1073741823
q=s[r]
if(q==null)s[r]=[p.ap(a)]
else{if(p.S(q,a)>=0)return!1
q.push(p.ap(a))}return!0},
cw(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.bf(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.bf(s.c,b)
else return s.c_(b)},
c_(a){var s,r,q,p,o=this.d
if(o==null)return!1
s=J.a0(a)&1073741823
r=o[s]
q=this.S(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.bn(p)
return!0},
aZ(a,b){this.$ti.c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.ap(b)
return!0},
bf(a,b){var s
if(a==null)return!1
s=t.g.a(a[b])
if(s==null)return!1
this.bn(s)
delete a[b]
return!0},
az(){this.r=this.r+1&1073741823},
ap(a){var s,r=this,q=new A.d1(r.$ti.c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.az()
return q},
bn(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.az()},
S(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a8(a[r].a,b))return r
return-1},
$iho:1}
A.d1.prototype={}
A.aM.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.M(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$iy:1}
A.t.prototype={
gt(a){return new A.aG(a,this.gj(a),A.bh(a).h("aG<t.E>"))},
B(a,b){return this.l(a,b)},
gu(a){return this.gj(a)===0},
gK(a){return!this.gu(a)},
a_(a,b,c){var s=A.bh(a)
return new A.a2(a,s.p(c).h("1(t.E)").a(b),s.h("@<t.E>").p(c).h("a2<1,2>"))},
i(a){return A.fz(a,"[","]")}}
A.D.prototype={
G(a,b){var s,r,q,p=A.z(this)
p.h("~(D.K,D.V)").a(b)
for(s=this.gH(),s=s.gt(s),p=p.h("D.V");s.k();){r=s.gm()
q=this.l(0,r)
b.$2(r,q==null?p.a(q):q)}},
gj(a){var s=this.gH()
return s.gj(s)},
gu(a){var s=this.gH()
return s.gu(s)},
i(a){return A.fG(this)},
$iY:1}
A.dG.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.o(a)
r.a=(r.a+=s)+": "
s=A.o(b)
r.a+=s},
$S:8}
A.av.prototype={
gu(a){return this.gj(this)===0},
gK(a){return this.gj(this)!==0},
ad(a,b){var s,r,q
A.z(this).h("b<1>").a(b)
for(s=A.hA(b,b.r,b.$ti.c),r=s.$ti.c;s.k();){q=s.d
this.q(0,q==null?r.a(q):q)}},
a_(a,b,c){var s=A.z(this)
return new A.aE(this,s.p(c).h("1(2)").a(b),s.h("@<1>").p(c).h("aE<1,2>"))},
i(a){return A.fz(this,"{","}")},
B(a,b){var s,r
A.fI(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gm();--r}throw A.c(A.ds(b,b-r,this,"index"))},
$if:1,
$ib:1,
$icM:1}
A.c4.prototype={}
A.d_.prototype={
l(a,b){var s,r=this.b
if(r==null)return this.c.l(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.bW(b):s}},
gj(a){return this.b==null?this.c.a:this.a9().length},
gu(a){return this.gj(0)===0},
gH(){if(this.b==null){var s=this.c
return new A.ag(s,A.z(s).h("ag<1>"))}return new A.d0(this)},
G(a,b){var s,r,q,p,o=this
t.cA.a(b)
if(o.b==null)return o.c.G(0,b)
s=o.a9()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.eS(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.M(o))}},
a9(){var s=t.bM.a(this.c)
if(s==null)s=this.c=A.k(Object.keys(this.a),t.s)
return s},
bW(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.eS(this.a[a])
return this.b[a]=s}}
A.d0.prototype={
gj(a){return this.a.gj(0)},
B(a,b){var s=this.a
if(s.b==null)s=s.gH().B(0,b)
else{s=s.a9()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gt(a){var s=this.a
if(s.b==null){s=s.gH()
s=s.gt(s)}else{s=s.a9()
s=new J.aC(s,s.length,A.K(s).h("aC<1>"))}return s}}
A.cj.prototype={}
A.cl.prototype={}
A.bA.prototype={
i(a){var s=A.cn(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.cw.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.dy.prototype={
bs(a,b){var s=A.k6(a,this.gcc().a)
return s},
bu(a,b){var s=A.ji(a,this.gcd().b,null)
return s},
gcd(){return B.a4},
gcc(){return B.a3}}
A.dA.prototype={}
A.dz.prototype={}
A.eH.prototype={
bB(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.d.R(a,r,q)
r=q+1
o=A.L(92)
s.a+=o
o=A.L(117)
s.a+=o
o=A.L(100)
s.a+=o
o=p>>>8&15
o=A.L(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.L(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.L(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.d.R(a,r,q)
r=q+1
o=A.L(92)
s.a+=o
switch(p){case 8:o=A.L(98)
s.a+=o
break
case 9:o=A.L(116)
s.a+=o
break
case 10:o=A.L(110)
s.a+=o
break
case 12:o=A.L(102)
s.a+=o
break
case 13:o=A.L(114)
s.a+=o
break
default:o=A.L(117)
s.a+=o
o=A.L(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.L(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.L(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.d.R(a,r,q)
r=q+1
o=A.L(92)
s.a+=o
o=A.L(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.d.R(a,r,m)},
ao(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.cw(a,null))}B.a.q(s,a)},
ai(a){var s,r,q,p,o=this
if(o.bA(a))return
o.ao(a)
try{s=o.b.$1(a)
if(!o.bA(s)){q=A.hm(a,null,o.gb9())
throw A.c(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.ad(p)
q=A.hm(a,r,o.gb9())
throw A.c(q)}},
bA(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.i(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.bB(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.ao(a)
q.cB(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.ao(a)
r=q.cC(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
cB(a){var s,r,q=this.c
q.a+="["
s=J.bf(a)
if(s.gK(a)){this.ai(s.l(a,0))
for(r=1;r<s.gj(a);++r){q.a+=","
this.ai(s.l(a,r))}}q.a+="]"},
cC(a){var s,r,q,p,o,n,m=this,l={}
if(a.gu(a)){m.c.a+="{}"
return!0}s=a.gj(a)*2
r=A.bF(s,null,t.X)
q=l.a=0
l.b=!0
a.G(0,new A.eI(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.bB(A.n(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.ai(r[n])}p.a+="}"
return!0}}
A.eI.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.n(s,r.a++,a)
B.a.n(s,r.a++,b)},
$S:8}
A.eG.prototype={
gb9(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.aD.prototype={
P(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.aD)if(this.a===b.a)s=this.b===b.b
return s},
gv(a){return A.fH(this.a,this.b,B.k,B.k)},
J(a,b){var s
t.k.a(b)
s=B.b.J(this.a,b.a)
if(s!==0)return s
return B.b.J(this.b,b.b)},
i(a){var s=this,r=A.iL(A.j4(s)),q=A.cm(A.j2(s)),p=A.cm(A.iZ(s)),o=A.cm(A.j_(s)),n=A.cm(A.j1(s)),m=A.cm(A.j3(s)),l=A.hi(A.j0(s)),k=s.b,j=k===0?"":A.hi(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"},
$ia1:1}
A.et.prototype={
i(a){return this.ar()}}
A.w.prototype={
ga6(){return A.iY(this)}}
A.cf.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cn(s)
return"Assertion failed"}}
A.aj.prototype={}
A.a9.prototype={
gav(){return"Invalid argument"+(!this.a?"(s)":"")},
gau(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gav()+q+o
if(!s.a)return n
return n+s.gau()+": "+A.cn(s.gaO())},
gaO(){return this.b}}
A.bN.prototype={
gaO(){return A.hN(this.b)},
gav(){return"RangeError"},
gau(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.o(q):""
else if(q==null)s=": Not greater than or equal to "+A.o(r)
else if(q>r)s=": Not in inclusive range "+A.o(r)+".."+A.o(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.o(r)
return s}}
A.cp.prototype={
gaO(){return A.R(this.b)},
gav(){return"RangeError"},
gau(){if(A.R(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.bT.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.cR.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bR.prototype={
i(a){return"Bad state: "+this.a}}
A.ck.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cn(s)+"."}}
A.bQ.prototype={
i(a){return"Stack Overflow"},
ga6(){return null},
$iw:1}
A.eu.prototype={
i(a){return"Exception: "+this.a}}
A.bs.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.d.R(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.b.prototype={
a_(a,b,c){var s=A.z(this)
return A.iX(this,s.p(c).h("1(b.E)").a(b),s.h("b.E"),c)},
cv(a,b){var s,r
A.z(this).h("b.E(b.E,b.E)").a(b)
s=this.gt(this)
if(!s.k())throw A.c(A.dw())
r=s.gm()
while(s.k())r=b.$2(r,s.gm())
return r},
gj(a){var s,r=this.gt(this)
for(s=0;r.k();)++s
return s},
gu(a){return!this.gt(this).k()},
gK(a){return!this.gu(this)},
B(a,b){var s,r
A.fI(b,"index")
s=this.gt(this)
for(r=b;s.k();){if(r===0)return s.gm();--r}throw A.c(A.ds(b,b-r,this,"index"))},
i(a){return A.iP(this,"(",")")}}
A.B.prototype={
gv(a){return A.h.prototype.gv.call(this,0)},
i(a){return"null"}}
A.h.prototype={$ih:1,
P(a,b){return this===b},
gv(a){return A.bM(this)},
i(a){return"Instance of '"+A.cJ(this)+"'"},
gA(a){return A.ky(this)},
toString(){return this.i(this)}}
A.d6.prototype={
i(a){return""},
$iaw:1}
A.b2.prototype={
gj(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ija:1}
A.dI.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.f6.prototype={
$1(a){var s,r,q,p
if(A.hY(a))return a
s=this.a
if(s.Y(a))return s.l(0,a)
if(t.f.b(a)){r={}
s.n(0,a,r)
for(s=a.gH(),s=s.gt(s);s.k();){q=s.gm()
r[q]=this.$1(a.l(0,q))}return r}else if(t.W.b(a)){p=[]
s.n(0,a,p)
B.a.ad(p,J.iC(a,this,t.z))
return p}else return a},
$S:9}
A.fe.prototype={
$1(a){return this.a.aI(this.b.h("0/?").a(a))},
$S:2}
A.ff.prototype={
$1(a){if(a==null)return this.a.br(new A.dI(a===undefined))
return this.a.br(a)},
$S:2}
A.eW.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.hX(a))return a
s=this.a
a.toString
if(s.Y(a))return s.l(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.fm(A.au(r,-864e13,864e13,"millisecondsSinceEpoch",null))
return new A.aD(r,0,!0)}if(a instanceof RegExp)throw A.c(A.ce("structured clone of RegExp",null))
if(a instanceof Promise)return A.dc(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.bE(p,p)
s.n(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.eZ(n),p=s.gt(n);p.k();)m.push(A.i6(p.gm()))
for(l=0;l<s.gj(n);++l){k=s.l(n,l)
if(!(l<m.length))return A.d(m,l)
j=m[l]
if(k!=null)o.n(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.n(0,a,o)
h=A.R(a.length)
for(s=J.bf(i),l=0;l<h;++l)o.push(this.$1(s.l(i,l)))
return o}return a},
$S:9}
A.dH.prototype={
gaK(){var s,r=this.b,q=Math.abs(r)
if(q<=2){r=this.a
return B.l[B.b.I(r,12)]+(B.b.U(r,12)-1)+" in tune"}s=r>0?"+":"\u2212"
r=this.a
return B.l[B.b.I(r,12)]+(B.b.U(r,12)-1)+" "+s+q+"\xa2"}}
A.dr.prototype={
cg(a,b,c){var s,r,q=this,p=q.e
if(p==null){if(b>q.a&&b>q.f*3){q.e=c
B.a.bp(q.r)}else q.f=q.f*0.9+b*0.1
return null}s=c-p
if(s>=40&&s<=300&&a!=null)B.a.q(q.r,a)
if(!(s>300))r=s>40&&b<q.a/4
else r=!0
if(r){q.e=null
q.f=b
r=q.r
if(r.length<3)return null
return A.ic(r)}return null}}
A.dC.prototype={
gah(){var s,r,q,p,o=A.k([],t.t)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p)o.push(1200*(Math.log(s[p]/q)/0.6931471805599453))
return o},
gcp(a){return this.a.length>=2&&B.a.cf(this.gah(),new A.dD())}}
A.dD.prototype={
$1(a){return Math.abs(A.b8(a))<=20},
$S:3}
A.dE.prototype={
gZ(){var s=this.a,r=A.K(s)
return new A.a6(s,r.h("p(1)").a(new A.dF()),r.h("a6<1>")).gj(0)},
bw(a){var s,r,q=this,p=B.b.N(a,3,16),o=A.k([],t.c)
for(s=0;s<p;++s){r=q.a
o.push(s<r.length?r[s]:null)}q.a=o
if(q.b>=p)q.b=0},
cu(a){var s,r,q,p,o,n=this
B.a.n(n.a,n.b,a)
for(s=n.a,r=s.length,q=n.b,p=1;p<=r;++p){o=B.b.I(q+p,r)
if(s[o]==null){n.b=o
return}}n.b=B.b.I(q+1,r)},
bq(){this.a=A.bF(this.a.length,null,t.I)
this.b=0},
gan(){var s,r,q,p,o=A.k([],t.t)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.am)(s),++q){p=s[q]
if(p!=null)o.push(p)}s=A.fF(o,t.i)
return new A.dC(s,o.length===0?0:A.ic(o))},
gah(){var s,r,q,p,o=this.gan().b,n=A.k([],t.c)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.am)(s),++q){p=s[q]
n.push(p==null?null:1200*(Math.log(p/o)/0.6931471805599453))}return n},
gcA(){var s,r,q,p,o,n
if(this.gZ()<2)return null
s=this.gah()
for(r=s.length,q=null,p=0;p<r;++p){o=s[p]
if(o==null)continue
if(q!=null){if(q>>>0!==q||q>=r)return A.d(s,q)
n=s[q]
n.toString
n=Math.abs(o)>Math.abs(n)}else n=!0
if(n)q=p}if(q!=null){if(q>>>0!==q||q>=r)return A.d(s,q)
r=s[q]
r.toString
r=Math.abs(r)>20}else r=!1
return r?q:null}}
A.dF.prototype={
$1(a){return A.fT(a)!=null},
$S:15}
A.fp.prototype={
$1(a){return A.n(a).length!==0},
$S:22}
A.eR.prototype={
$1(a){var s,r,q
A.n(a)
s=A.fJ("[A-Za-z]").ci(a)
if(s==null)return a
r=s.b.index
q=B.d.R(a,0,r)
if(!(r>=0&&r<a.length))return A.d(a,r)
return q+a[r].toUpperCase()+B.d.aV(a,r+1)},
$S:16}
A.O.prototype={}
A.C.prototype={
ar(){return"DrumType."+this.b}}
A.dg.prototype={
$1(a){return t.Q.a(a).b===this.a},
$S:13}
A.dh.prototype={
$0(){return B.f},
$S:18}
A.cG.prototype={}
A.fg.prototype={
$2(a,b){var s
A.R(a)
A.R(b)
s=this.a
return Math.abs(a-s)<=Math.abs(b-s)?a:b},
$S:25}
A.br.prototype={
ar(){return"Family."+this.b}}
A.H.prototype={}
A.fa.prototype={
$1(a){return t.w.a(a).a===this.a},
$S:20}
A.fb.prototype={
$0(){return B.a.ga4(B.v)},
$S:21}
A.J.prototype={}
A.f0.prototype={
$1(a){return t.d4.a(a).a===this.a},
$S:45}
A.f1.prototype={
$0(){return B.a.ga4(this.a)},
$S:23}
A.a3.prototype={}
A.fi.prototype={
$1(a){return t.ec.a(a).a===this.a},
$S:24}
A.fj.prototype={
$0(){return B.a.ga4(B.x)},
$S:44}
A.a5.prototype={
ar(){return"Spacing."+this.b}}
A.e1.prototype={
$1(a){return t.dJ.a(a).b===this.a},
$S:26}
A.e2.prototype={
$0(){return B.m},
$S:27}
A.cr.prototype={}
A.ai.prototype={}
A.eU.prototype={
$2(a,b){var s=t.U
return B.b.J(s.a(a).b,s.a(b).b)},
$S:12}
A.fd.prototype={
$1(a){return this.a.$0()},
$S:6}
A.fc.prototype={
$1(a){return this.a.$0()},
$S:6}
A.fh.prototype={
$1(a){A.b9(a)
return null},
$S:30}
A.fu.prototype={
$0(){var s,r=A.eO(this.a.getAttribute("data-theme"))==="light",q=r?"Switch to dark theme":"Switch to light theme",p=this.b
p.setAttribute("aria-label",q)
p.setAttribute("title",q)
s=A.U(p.firstElementChild)
if(s!=null){p=r?"\u263e":"\u2600"
s.textContent=p}},
$S:0}
A.ft.prototype={
$0(){var s=this.a,r=A.eO(s.getAttribute("data-theme"))==="light"?"dark":"light"
s.setAttribute("data-theme",r)
A.fk("ds-theme",r)
this.b.$0()},
$S:0}
A.fq.prototype={
$1(a){var s=null
A.e(a)
A.aq(a,"preventDefault",s,s,s,s)
this.a.a=a
this.b.hidden=!1},
$S:5}
A.fr.prototype={
$0(){var s=0,r=A.hW(t.H),q,p=2,o=[],n=this,m,l,k,j
var $async$$0=A.i2(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:l=n.a
k=l.a
if(k==null){s=1
break}l.a=null
p=4
A.aq(k,"prompt",null,null,null,null)
s=7
return A.fU(A.dc(A.e(k.userChoice),t.X),$async$$0)
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
case 1:return A.hP(q,r)
case 2:return A.hO(o.at(-1),r)}})
return A.hQ($async$$0,r)},
$S:32}
A.fs.prototype={
$0(){this.a.hidden=!0
return!0},
$S:0}
A.f7.prototype={
$1(a){if(a!=="tuner")this.a.bv()},
$S:33}
A.f8.prototype={
$0(){return this.a.aS("guide",!0)},
$S:0}
A.e3.prototype={
gac(){var s,r,q,p,o,n=this.c
if(n===$){s=A.k([],t.O)
for(r=v.G,q=0;q<4;++q){p=B.e[q]
o=A.U(A.e(r.document).getElementById("tab-"+p))
o.toString
s.push(o)}this.c!==$&&A.fn()
this.c=s
n=s}return n},
gb8(){var s,r,q,p,o,n=this.d
if(n===$){s=A.k([],t.O)
for(r=v.G,q=0;q<4;++q){p=B.e[q]
o=A.U(A.e(r.document).getElementById(p))
o.toString
s.push(o)}this.d!==$&&A.fn()
this.d=s
n=s}return n},
V(){var s,r,q,p,o,n=this
for(s=0;s<4;++s){r=n.gb8()
if(!(s<r.length))return A.d(r,s)
r=r[s]
r.setAttribute("role","tabpanel")
r.setAttribute("aria-labelledby","tab-"+B.e[s])
q=B.e[s]
r=n.gac()
if(!(s<r.length))return A.d(r,s)
A.I(r[s],"click",new A.e5(n,q))}r=n.b
r.addEventListener("keydown",A.ba(new A.e6(n)))
r.hidden=!1
p=A.h7()
o=A.h4("ds-tuning-tab")
if(B.a.E(B.e,p))r=p
else if(B.a.E(B.e,o)){o.toString
r=o}else r="tuner"
n.bC(r,!1)
A.h6("hashchange",new A.e7(n))},
aj(a,b,c){var s,r,q,p,o=this
for(s=0;s<4;++s){r=B.e[s]===a
q=o.gac()
if(!(s<q.length))return A.d(q,s)
q=q[s]
q.setAttribute("aria-selected",""+r)
p=r?"0":"-1"
q.setAttribute("tabindex",p)
p=o.gb8()
if(!(s<p.length))return A.d(p,s)
p[s].hidden=!r}A.fk("ds-tuning-tab",a)
if(c)A.kQ(a)
if(b){q=o.gac()
p=B.a.cm(B.e,a)
if(!(p>=0&&p<q.length))return A.d(q,p)
q[p].focus()}o.a.$1(a)},
aS(a,b){return this.aj(a,b,!0)},
bC(a,b){return this.aj(a,!1,b)},
aR(a){return this.aj(a,!1,!0)}}
A.e5.prototype={
$0(){return this.a.aR(this.b)},
$S:0}
A.e6.prototype={
$1(a){var s,r,q
A.e(a)
s=this.a
r=B.a.cn(s.gac(),new A.e4())
if(r<0)return
switch(A.n(a.key)){case"ArrowRight":q=B.b.I(r+1,4)
break
case"ArrowLeft":q=B.b.I(r-1+4,4)
break
case"Home":q=0
break
case"End":q=3
break
default:q=-1
break}if(q<0)return
a.preventDefault()
s.aS(B.e[q],!0)},
$S:5}
A.e4.prototype={
$1(a){return A.e(a)===A.U(A.e(v.G.document).activeElement)},
$S:34}
A.e7.prototype={
$0(){if(B.a.E(B.e,A.h7()))this.a.aR(A.h7())},
$S:0}
A.co.prototype={
gbt(){return A.fW(this.ax)+" "+this.at.c.toLowerCase()},
V(){var s,r,q,p,o,n,m,l=this,k="change",j=l.a,i=t.L,h=A.k([],i)
for(s=0;s<4;++s){r=B.u[s]
h.push(new A.F(r.b,r.c))}A.az(j,h)
h=l.d
q=A.k([],i)
for(s=0;s<11;++s){p=B.v[s]
q.push(new A.F(p.a,p.b))}A.az(h,q)
q=l.e
o=A.k([],i)
for(s=0;s<5;++s){n=B.D[s]
o.push(new A.F(n.a,n.b))}A.az(q,o)
o=l.r
i=A.k([],i)
for(s=0;s<3;++s){m=B.x[s]
i.push(new A.F(m.a,m.b))}A.az(o,i)
l.aD()
A.I(j,k,new A.dn(l))
A.I(l.b,k,new A.dp(l))
A.I(l.c,k,new A.dq(l))
for(j=[h,q,l.f,o],i=j.length,h=l.gc9(),s=0;s<i;++s)A.I(j[s],k,h)
l.a3()},
b4(){var s,r,q,p,o,n,m,l,k=this,j=k.b,i=t.L,h=A.k([],i)
for(s=k.at.d,r=s.length,q=0;q<r;++q){p=s[q]
o=""+p
h.push(new A.F(o,(p===B.b.O(p)?""+B.b.C(p)+'"':o+'"')+" diameter"))}A.az(j,h)
j.value=""+k.ax
j=k.c
h=A.k([],i)
for(s=k.at.f,r=s.length,q=0;q<r;++q){p=s[q]
o=A.o(p)
h.push(new A.F(o,(p===B.c.O(p)?""+B.c.C(p)+'"':o+'"')+" deep"))}A.az(j,h)
j.value=A.o(k.ay)
j=k.f
n=A.n(j.value)
i=A.k([],i)
for(q=0;q<5;++q){m=B.F[q]
h=m.a
if(h!=="port"||k.at===B.q)s=h!=="snare"||k.at===B.f
else s=!1
if(s)i.push(new A.F(h,m.b))}A.az(j,i)
l=k.at
A:{if(B.f===l){i="snare"
break A}i=!1
if(n.length!==0)if(n!=="snare")i=n!=="port"||l===B.q
if(i){i=n
break A}i="1x"
break A}j.value=i},
aD(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.X,f=A.bE(g,g)
try{g=A.h4("ds-drum")
s=B.n.bs(g==null?"{}":g,h)
if(t.f.b(s))f=s}catch(r){if(!(A.ad(r) instanceof A.bs))throw r}g=J.S(f,"type")
i.at=A.hj(A.o(g==null?"snare":g))
q=J.S(f,"diameter")
i.ax=A.d9(q)&&B.a.E(i.at.d,q)?q:i.at.e
p=J.S(f,"depth")
i.ay=typeof p=="number"&&B.a.E(i.at.f,p)?p:i.at.r
i.a.value=i.at.b
i.b4()
o=new A.dk()
g=i.d
o.$2(g,J.S(f,"material"))
n=i.e
o.$2(n,J.S(f,"batter"))
m=i.f
o.$2(m,J.S(f,"reso"))
l=i.r
o.$2(l,J.S(f,"relation"))
for(g=[g,n,m,l],n=g.length,k=0;k<n;++k){j=g[k]
if(A.n(j.value).length===0)j.value=A.n(A.e(A.aq(A.e(j.options),"item",0,h,h,h)).value)}},
a3(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.bj(h.at,h.ax)
h.w.textContent=A.ii("Starting range for a "+h.gbt())
s=new A.dm()
r=g.a
s.$2(h.x,r)
q=g.b
s.$2(h.y,Math.sqrt(r*q))
s.$2(h.z,q)
r=g.c
if(r!=null)r="No source we found lists this size, so this range is scaled from the "+A.fW(r)+" range (pitch goes roughly as one over the diameter). Treat it as a rough guide."
else{r=B.y.l(0,g.d)
r=r==null?null:r.a
r="Range from "+(r==null?"the sources below":r)+". A starting point: tune by ear from here."}h.Q.textContent=r
r=h.d
p=A.kL(A.n(r.value))
q=h.e
o=A.ib(B.D,A.n(q.value))
n=h.f
m=A.ib(B.F,A.n(n.value))
l=h.r
k=A.kP(A.n(l.value))
h.as.replaceChildren()
j=new A.dl(h)
j.$3("Shell: "+p.b,p.d,p.e)
j.$3("Depth: "+A.fW(h.ay),A.kr(h.at,h.ay),B.am)
j.$3("Batter head: "+o.b,o.c,o.d)
j.$3("Resonant head: "+m.b,m.c,m.d)
if(h.at===B.f)j.$3("Batter and snare side","On a snare, many drummers tune the snare-side head higher than the batter for a crisp wire response. Treat it as a starting point and adjust by ear.",B.af)
else j.$3("Head relationship: "+k.b,k.c,k.d)
A.l("relation-row",t.m).hidden=h.at===B.f
A.fk("ds-drum",B.n.bu(A.fD(["type",h.at.b,"diameter",h.ax,"depth",h.ay,"material",A.n(r.value),"batter",A.n(q.value),"reso",A.n(n.value),"relation",A.n(l.value)],t.N,t.K),null))
for(r=h.ch,q=r.length,i=0;i<r.length;r.length===q||(0,A.am)(r),++i)r[i].$0()}}
A.dn.prototype={
$0(){var s=this.a,r=s.at=A.hj(A.n(s.a.value))
s.ax=r.e
s.ay=r.r
s.b4()
s.a3()},
$S:0}
A.dp.prototype={
$0(){var s=this.a,r=A.b1(A.n(s.b.value),null)
s.ax=r==null?s.at.e:r
s.a3()},
$S:0}
A.dq.prototype={
$0(){var s=this.a,r=B.d.by(A.n(s.c.value)),q=A.b1(r,null)
if(q==null)q=A.cK(r)
s.ay=q==null?s.at.r:q
s.a3()},
$S:0}
A.dk.prototype={
$2(a,b){if(typeof b=="string"&&b.length!==0)a.value=b},
$S:35}
A.dm.prototype={
$2(a,b){var s=A.fV(b),r=A.da(b).a
r=s+" Hz \xb7 "+(B.l[B.b.I(r,12)]+(B.b.U(r,12)-1))
a.textContent=r
return r},
$S:36}
A.dl.prototype={
$3(a,b,c){var s,r,q=null
t.dy.a(c)
s=A.v("li","note-card",q)
s.appendChild(A.v("h3",q,A.ii(a)))
s.appendChild(A.v("p",q,b))
r=c.length===0?A.v("span",q,q):A.jH(c)
s.appendChild(r)
this.a.as.appendChild(s)},
$S:37}
A.cQ.prototype={
gM(){var s,r=this,q=r.dy
if(q===$){s=A.bF(B.b.N(r.a.at.w,3,16),null,t.I)
r.dy!==$&&A.fn()
q=r.dy=new A.dE(s)}return q},
gb3(){var s,r=this,q=r.go
if(q===$){s=A.ba(r.gbN())
r.go!==$&&A.fn()
r.go=s
q=s}return q},
V(){var s,r,q,p=this,o=v.G
if(A.U(A.e(o.navigator).mediaDevices)==null||!("AudioContext" in o)){o=t.m
A.l("tuner-body",o).hidden=!0
A.l("no-mic",o).hidden=!1
return}p.b.addEventListener("click",A.ba(new A.eb(p)))
A.e(o.document).addEventListener("visibilitychange",A.ba(new A.ec(p)))
A.h6("pagehide",new A.ed(p))
A.I(p.w,"input",p.gbX())
A.I(A.l("lugs-clear",t.m),"click",new A.ee(p))
for(o=p.fx,s=3;s<=16;++s){r=""+s
q=A.v("option",null,r)
q.setAttribute("value",r)
o.appendChild(q)}o.value=""+p.gM().a.length
A.I(o,"change",new A.ef(p))
o=p.a
p.fr=o.at
o=o.ch
B.a.q(o,new A.eg(p))
B.a.q(o,p.gc5())
p.bc()
p.T()
p.aF()},
bc(){var s=A.b1(A.n(this.w.value),null),r=B.b.N(s==null?6:s,1,10)
this.dx.a=0.08/(r*r/4+1)},
a2(){var s=0,r=A.hW(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$a2=A.i2(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:if(m.id||m.db){s=1
break}if(A.kE()){m.D(A.fM("framed"))
s=1
break}e=v.G
d=e.isSecureContext
if(A.d8(d))c=!d
else c=!1
if(c){m.D(A.fM("insecure"))
s=1
break}m.D("Asking for the microphone\u2026")
m.id=!0
p=4
c=t.N
b=t.K
b=A.kH(A.fD(["audio",A.fD(["channelCount",1,"echoCancellation",!1,"noiseSuppression",!1,"autoGainControl",!1],c,b),"video",!1],c,b))
b.toString
l=A.e(b)
s=7
return A.fU(A.dc(A.e(A.U(A.e(e.navigator).mediaDevices).getUserMedia(l)),t.m),$async$a2)
case 7:k=a4
j=A.e(new e.AudioContext())
s=8
return A.fU(A.dc(A.e(j.resume()),t.X),$async$a2)
case 8:i=A.e(j.createMediaStreamSource(k))
a=A.e(j.createAnalyser())
a.fftSize=8192
a.smoothingTimeConstant=0
h=a
a0=A.e(j.createAnalyser())
a0.fftSize=1024
g=a0
b=i
A.e(b.connect(h))
A.e(b.connect(g))
m.at=j
m.ax=k
m.ay=h
m.ch=g
b=B.b.U(A.R(h.fftSize),2)
m.CW=new Float32Array(b)
c=A.R(g.fftSize)
m.cx=new Float32Array(c)
m.db=!0
m.k1=A.b8(A.e(e.performance).now())
c=m.b
c.textContent="Stop tuner"
c.setAttribute("aria-pressed","true")
A.aO(A.e(c.classList).toggle("is-running",!0))
m.r.textContent="Listening: tap the drum"
m.D("Tuner on. Tap the drum lightly about an inch from a tension rod.")
m.cy=A.R(e.requestAnimationFrame(m.gb3()))
n.push(6)
s=5
break
case 4:p=3
a2=o.pop()
f=A.ad(a2)
m.D(A.fM(A.jc(f)))
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.id=!1
s=n.pop()
break
case 6:case 1:return A.hP(q,r)
case 2:return A.hO(o.at(-1),r)}})
return A.hQ($async$a2,r)},
aP(a){if(!this.db)return
this.bi()
this.D(a+" The microphone is closed.")},
bv(){return this.aP("Tuner off while you\u2019re on another tab.")},
bi(){var s,r,q,p=this
p.db=!1
s=p.cy
if(s!=null)v.G.cancelAnimationFrame(s)
r=p.ax
if(r==null)q=null
else{r=t.a6.a(r.getTracks())
r=t.cl.b(r)?r:new A.bm(r,A.K(r).h("bm<1,r>"))
q=r}for(r=J.ao(q==null?B.ae:q);r.k();)r.gm().stop()
r=p.at
if(r!=null)A.e(r.close())
p.ax=p.at=null
r=p.b
r.textContent="Start tuner"
r.setAttribute("aria-pressed","false")
A.aO(A.e(r.classList).toggle("is-running",!1))
p.r.textContent="Microphone off"
A.e(p.f.style).setProperty("--level","0")
p.D("Tuner off. The microphone is closed.")},
bO(a){var s,r,q,p,o,n,m,l,k,j,i=this
A.b8(a)
s=i.at
r=i.ay
q=i.ch
if(!i.db||s==null||r==null||q==null)return
p=i.cx
p===$&&A.an()
q.getFloatTimeDomainData(p)
p=i.CW
p===$&&A.an()
r.getFloatFrequencyData(p)
o=A.kR(i.cx)
A.e(i.f.style).setProperty("--level",B.c.F(B.c.N(o*8,0,1),3))
p=i.CW
n=A.b8(s.sampleRate)
m=i.dx
l=m.cg(A.kM(p,A.R(r.fftSize),1200,35,n),o,a)
p=m.e!=null?"Reading\u2026":"Listening: tap the drum"
i.r.textContent=p
if(l!=null){i.fy=l
k=A.da(l)
i.c.textContent=B.c.F(l,1)+" Hz"
i.d.textContent=k.gaK()
p=i.e
p.hidden=!1
A.e(p.style).setProperty("--cents",""+k.b)
p=i.gM()
j=p.b
p.cu(l)
i.T()
i.aF()
p=B.c.F(l,1)
n=k.gaK()
n=A.fl(n,"\u266f"," sharp")
n=A.fl(n,"\xa2"," cents")
i.D("Lug "+(j+1)+": "+p+" hertz, "+A.fl(n,"\u2212","minus ")+".")}if(m.e!=null)i.k1=a
if(a-i.k1>12e4){i.aP("Tuner off after 2 minutes without a tap.")
return}i.cy=A.R(v.G.requestAnimationFrame(i.gb3()))},
T(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="span",a3=a1.gM(),a4=a3.gcA()
if(a4!=null&&a3.gZ()===a3.a.length)a3.b=B.b.N(a4,0,a3.a.length-1)
s=a3.gah()
r=a1.x
r.replaceChildren()
for(q=t.I,p=0;o=a3.a,p<o.length;p=d){n=A.hp(o,!1,q)
n.$flags=3
o=n
if(!(p<o.length))return A.d(o,p)
m=o[p]
if(!(p<s.length))return A.d(s,p)
o=s[p]
l=o==null?null:B.c.C(o)
o=l==null
if(o)k=""
else if(l>0)k="+"
else{j=l<0?"\u2212":"\xb1"
k=j}i=p===a3.b
j=m==null
if(j)h="not read yet"
else{g=B.c.F(m,1)
if(a3.gZ()>1&&!o){if(l>0)f="sharp"
else f=l<0?"flat":"even"
f=", "+Math.abs(l)+" cents "+f}else f=""
h=g+" hertz"+f}e=A.v("button","lug",null)
e.setAttribute("type","button")
e.setAttribute("aria-pressed",""+i)
d=p+1
g=""+d
f="Lug "+g
c=i?" Next reading goes here.":" Press to read it next."
e.setAttribute("aria-label",f+": "+h+"."+c)
e.appendChild(A.v(a2,"lug-n",f+(i?" \xb7 next":"")))
e.appendChild(A.v(a2,"lug-hz",j?"\u2013":B.c.F(m,1)+" Hz"))
e.appendChild(A.v(a2,"lug-off",a3.gZ()>1&&!o?k+Math.abs(l)+"\xa2":""))
if(i)A.e(e.classList).add("is-next")
if(a4===p)A.e(e.classList).add("is-worst")
A.I(e,"click",new A.e8(a1,p))
b=A.v("li","lug-row",null)
b.appendChild(e)
if(!j){a=A.v("button","lug-clear","\xd7")
a.setAttribute("type","button")
a.setAttribute("aria-label","Clear lug "+g)
A.I(a,"click",new A.e9(a1,p))
b.appendChild(a)}r.appendChild(b)}a0=a3.gZ()
A:{if(0===a0){a3="Tap about an inch from any tension rod: that\u2019s lug 1. Then work round the drum. Each reading fills the next lug, and you can tap a lug to re-read it."
break A}if(1===a0){a3="One lug read. Next: lug "+(a3.b+1)+"."
break A}r=a3.gan().gcp(0)
if(r){r=B.c.F(a3.gan().b,1)
a3=a3.gZ()<a3.a.length?" Next: lug "+(a3.b+1)+".":""
a3="Even: every lug read is within 20\xa2 of the middle ("+r+" Hz)."+a3
break A}a3=new A.ea(a1,a4,s).$0()
break A}a1.y.textContent=a3},
aF(){var s,r,q,p,o,n,m,l,k=this,j=k.a,i=A.bj(j.at,j.ax)
j=j.gbt()
s=i.a
r=A.fV(s)
q=i.b
p=A.fV(q)
o=A.da(s).a
n=B.l[B.b.I(o,12)]
o=B.b.U(o,12)
m=A.da(q).a
k.z.textContent="Target for your "+j+": about "+r+" to "+p+" Hz ("+(n+(o-1))+" to "+(B.l[B.b.I(m,12)]+(B.b.U(m,12)-1))+"). Hit the centre to compare."
l=k.fy
m=k.Q
o=l==null
m.hidden=o
if(!o){A.e(m.style).setProperty("--pos",B.c.F(B.c.N(Math.log(l/s)/0.6931471805599453/(Math.log(q/s)/0.6931471805599453),-0.08,1.08),3))
m.setAttribute("title",B.c.F(l,1)+" Hz")}},
D(a){this.as.textContent=a
return a}}
A.eb.prototype={
$1(a){var s
if(!A.aO(A.e(a).isTrusted))return
s=this.a
if(s.db)s.bi()
else s.a2()},
$S:5}
A.ec.prototype={
$1(a){if(A.aO(A.e(v.G.document).hidden))this.a.aP("Tuner off because the page was hidden.")},
$S:39}
A.ed.prototype={
$0(){return this.a.bv()},
$S:0}
A.ee.prototype={
$0(){var s=this.a
s.gM().bq()
s.T()
s.D("Lug readings cleared.")},
$S:0}
A.ef.prototype={
$0(){var s=this.a,r=s.gM(),q=A.b1(A.n(s.fx.value),null)
r.bw(q==null?r.a.length:q)
s.T()
s.D(""+r.a.length+" lugs.")},
$S:0}
A.eg.prototype={
$0(){var s=this.a,r=s.a.at
if(r===s.fr)return
s.fr=r
r=s.gM()
r.bw(s.fr.w)
r.bq()
s.fx.value=""+r.a.length
s.T()},
$S:0}
A.e8.prototype={
$0(){var s=this.a,r=s.gM(),q=this.b
r.b=B.b.N(q,0,r.a.length-1)
s.T()
s.D("The next reading goes to lug "+(q+1)+".")},
$S:0}
A.e9.prototype={
$0(){var s=this.a,r=s.gM(),q=this.b
B.a.n(r.a,q,null)
r.b=q
s.T()
s.D("Lug "+(q+1)+" cleared. It\u2019s next to read.")},
$S:0}
A.ea.prototype={
$0(){var s,r,q,p=this.b
p.toString
s=this.c
if(!(p<s.length))return A.d(s,p)
s=s[p]
s.toString
r=s>0?"sharp: loosen it slightly":"flat: tighten it slightly"
s=B.c.C(Math.abs(s))
q=this.a.gM().b
q=q===p?" It\u2019s selected, so your next tap re-reads it.":" Next: lug "+(q+1)+"."
return"Lug "+(p+1)+" is "+s+"\xa2 "+r+"."+q},
$S:40}
A.d2.prototype={}
A.cI.prototype={
V(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null,a3="input",a4="chip-check",a5="change"
a1.aD()
for(s=[B.h,B.p],r=s.length,q=a1.y,p=a1.a,o=0;o<r;++o){n=s[o]
for(m=n.d,l=m.length,k=n===B.h,j="plan-"+n.b+"-",i=0;i<l;++i){h=m[i]
g=""+h
f=j+g
e=A.v(a3,a2,a2)
e.setAttribute("type","checkbox")
e.setAttribute("id",f)
e.checked=q.E(0,new A.F(n,h))
d=A.v("label",a4,a2)
d.setAttribute("for",f)
d.appendChild(e)
g=h===B.b.O(h)?""+B.b.C(h)+'"':g+'"'
c=k?"rack":"floor"
d.appendChild(A.v("span",a2,g+" "+c))
p.appendChild(d)
A.I(e,a5,new A.dX(a1,e,n,h))}}for(s=a1.b,o=0;o<3;++o){b=B.G[o]
r=b.b
f="plan-spacing-"+r
a=A.v(a3,a2,a2)
a.setAttribute("type","radio")
a.setAttribute("name","plan-spacing")
a.setAttribute("id",f)
a.setAttribute("value",r)
a.checked=b===a1.z
r=A.v("label",a4,a2)
r.setAttribute("for",f)
r.appendChild(a)
r.appendChild(A.v("span",a2,b.c))
s.appendChild(r)
A.I(a,a5,new A.dY(a1,a,b))}s=a1.e
r=A.k([],t.L)
for(q=$.ha(),p=q.length,o=0;o<p;++o){a0=q[o]
r.push(new A.F(""+a0.a,a0.b))}A.az(s,r)
s.value=""+a1.Q
A.I(s,a5,new A.dZ(a1))
s=a1.r
A.I(s,a3,a1.gbY())
A.I(A.l("plan-suggest",t.m),"click",new A.e_(a1))
if(A.n(s.value).length===0)a1.bj()
a1.am()},
gaG(){var s=A.fE(this.y,t.U)
B.a.ak(s,new A.dW())
return s},
gbm(){var s=A.cK(A.n(this.r.value))
return s!=null&&s>=30&&s<=1000?s:null},
bj(){var s,r=this.gaG()
if(r.length===0)return
s=A.bj(B.a.ga4(r).a,B.a.ga4(r).b)
this.r.value=B.b.i(B.c.C(Math.sqrt(s.a*s.b)))},
bT(a){var s,r,q=this.ax,p=q.length
if(!(a<p))return A.d(q,a)
s=q[a]
r=a+1
if(!(r<p))return A.d(q,r)
r=q[r]
return s.a.b+"-"+s.b+">"+(r.a.b+"-"+r.b)},
c4(a){var s,r,q,p,o,n,m,l,k=this,j=k.ba()
if(a===B.j&&j!=null)for(s=j.length,r=k.at,q=0;q<j.length;j.length===s||(0,A.am)(j),++q){p=j[q]
r.n(0,p.a.b+"-"+p.b,A.ks(B.c.F(p.c,1)))}if(a===B.z&&k.z===B.m)for(s=k.ax,r=k.as,o=0;n=o+1,m=s.length,n<m;o=n){if(!(o<m))return A.d(s,o)
m=s[o]
l=s[n]
r.ct(m.a.b+"-"+m.b+">"+(l.a.b+"-"+l.b),new A.dV(k))}k.z=a
k.am()},
am(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null,a3="td",a4=a1.ax
B.a.bp(a4)
s=A.k([],t.B)
for(r=a1.gaG(),q=r.length,p=0;p<r.length;r.length===q||(0,A.am)(r),++p){o=r[p]
s.push(new A.d2(o.a,o.b))}B.a.ad(a4,s)
s=a1.w
s.replaceChildren()
a1.c.textContent=a1.z.d
a1.d.hidden=a1.z!==B.m
a1.f.hidden=a1.z===B.j
for(r=a1.at,q=a1.as,o=t.L,n=0;n<a4.length;++n){m=a4[n]
l=m.a
k=m.b
j=k===B.b.O(k)?""+B.b.C(k)+'"':""+k+'"'
i=l===B.h?"rack":"floor"
h=j+" "+i
g=A.v("tr",a2,a2)
i=A.v("th",a2,h)
i.setAttribute("scope","row")
g.appendChild(i)
i=A.v(a3,a2,a2)
m.c!==$&&A.fo()
m.c=i
if(a1.z===B.j){f=A.v("input",a2,a2)
f.setAttribute("type","number")
f.setAttribute("min","30")
f.setAttribute("max","1000")
f.setAttribute("step","0.1")
f.setAttribute("inputmode","decimal")
f.setAttribute("aria-label","Pitch for the "+h+" tom, in hertz")
f.className="plan-hz"
j=r.l(0,l.b+"-"+k)
if(j==null){l=A.bj(l,k)
l=Math.sqrt(l.a*l.b)}else l=j
f.value=B.c.F(l,1)
A.I(f,"input",new A.dN(a1,f,m))
m.r=f
i.appendChild(f)}l=A.v(a3,a2,a2)
m.d!==$&&A.fo()
m.d=l
k=A.v(a3,a2,a2)
m.e!==$&&A.fo()
m.e=k
if(a1.z===B.z&&n+1<a4.length){j=n+1
if(!(j<a4.length))return A.d(a4,j)
e=a4[j]
d=A.v("select",a2,a2)
c=e.b
c=c===B.b.O(c)?""+B.b.C(c)+'"':""+c+'"'
b=e.a===B.h?"rack":"floor"
d.setAttribute("aria-label","Interval from the "+h+" tom down to the "+(c+" "+b)+" tom")
b=A.k([],o)
for(c=$.ha(),a=c.length,p=0;p<a;++p){a0=c[p]
b.push(new A.F(""+a0.a,a0.b))}A.az(d,b)
c=a4.length
if(!(n<c))return A.d(a4,n)
b=a4[n]
if(!(j<c))return A.d(a4,j)
j=a4[j]
j=q.l(0,b.a.b+"-"+b.b+">"+(j.a.b+"-"+j.b))
d.value=""+(j==null?a1.Q:j)
A.I(d,"change",new A.dO(a1,n,d))
m.w=d
k.appendChild(d)}j=A.v(a3,a2,a2)
m.f!==$&&A.fo()
m.f=j
g.appendChild(i)
g.appendChild(l)
g.appendChild(k)
g.appendChild(j)
s.appendChild(g)}a1.W()},
ba(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.gaG()
if(e.length===0)return f
switch(g.z.a){case 0:s=g.gbm()
if(s==null)r=f
else{r=g.Q
r=A.ie(e,s,A.bF(Math.max(0,e.length-1),r,t.S))}return r
case 1:s=g.gbm()
if(s==null||g.ax.length!==e.length)return f
r=A.k([],t.Y)
for(q=g.ax,p=g.as,o=0;n=o+1,m=q.length,n<m;o=n){if(!(o<m))return A.d(q,o)
m=q[o]
l=q[n]
l=p.l(0,m.a.b+"-"+m.b+">"+(l.a.b+"-"+l.b))
r.push(l==null?g.Q:l)}return A.ie(e,s,r)
case 2:r=A.k([],t.t)
for(q=g.ax,p=q.length,m=g.at,k=0;k<q.length;q.length===p||(0,A.am)(q),++k){j=q[k]
l=j.a
i=j.b
h=m.l(0,l.b+"-"+i)
if(h==null){l=A.bj(l,i)
l=Math.sqrt(l.a*l.b)}else l=h
r.push(l)}if(B.a.ae(r,new A.dP()))return f
return A.kN(e,r)}},
W(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.c2()
s=e.ba()
if(s==null){for(r=e.ax,q=r.length,p=0;o=r.length,p<o;r.length===q||(0,A.am)(r),++p){n=r[p]
if(n.r==null){o=n.c
o===$&&A.an()
o.textContent="\u2013"}o=n.d
o===$&&A.an()
o.textContent="\u2013"
if(n.w==null){o=n.e
o===$&&A.an()
o.textContent=""}o=n.f
o===$&&A.an()
o.textContent=""
o.className=""}if(o===0)r="Pick at least one tom."
else r=e.z===B.j?"Enter a pitch between 30 and 1000 Hz for every tom.":"Enter a pitch for your smallest tom, between 30 and 1000 Hz."
e.x.textContent=r
return}m=A.kv(s)
for(r=e.ax,l=0;l<s.length;++l){k=s[l]
if(!(l<r.length))return A.d(r,l)
n=r[l]
if(n.r==null){q=n.c
q===$&&A.an()
o=k.c
q.textContent=(o<100?B.c.F(o,1):B.b.i(B.c.C(o)))+" Hz"}q=n.d
q===$&&A.an()
o=k.c
q.textContent=A.da(o).gaK()
if(n.w==null){q=n.e
q===$&&A.an()
if(l<m.length){j=m[l]
j=j<0?A.i7(j)+" (next tom is higher)":A.i7(j)}else j="\u2014"
q.textContent=j}q=n.f
q===$&&A.an()
j=k.d
i=o>=j.a
h=i&&o<=j.b?"fits":"outside"
q.className=h
if(i&&o<=j.b)o="In range"
else o=o>j.b?"Above range":"Below range"
q.textContent=o}r=A.K(s)
g=new A.a6(s,r.h("p(1)").a(new A.dQ()),r.h("a6<1>")).gj(0)
r=A.K(m)
f=new A.a6(m,r.h("p(1)").a(new A.dR()),r.h("a6<1>")).gj(0)
if(g===0)r="Every tom lands inside its starting range."
else{r=g===1?"tom lands":"toms land"
r=""+g+" "+r+" outside its starting range."}r=A.k([r],t.s)
if(f>0){q=f===1?"larger tom is":"larger toms are"
r.push(""+f+" "+q+" tuned higher than the tom above.")}if(g>0&&e.z!==B.j)r.push(e.bH(s))
e.x.textContent=B.a.ag(r," ")},
bH(a){var s,r,q
t.b2.a(a)
s=A.jb(a,1,null,A.K(a).c)
r=s.ae(0,new A.dL())
q=s.ae(0,new A.dM())
if(r&&!q)return"Try wider intervals, or a lower pitch on the smallest tom."
if(q&&!r)return"Try narrower intervals, or a higher pitch on the smallest tom."
return"Try a different pitch on the smallest tom, or adjust the intervals."},
aD(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=t.X,a=A.bE(b,b)
try{b=A.h4("ds-plan")
s=B.n.bs(b==null?"{}":b,null)
if(t.f.b(s))a=s}catch(r){if(A.ad(r) instanceof A.bs)return
else throw r}q=J.S(a,"toms")
if(t.j.b(q)){p=A.iV(t.U)
for(b=J.ao(q),o=t.gy,n=t.d7,m=t.Q,l=t.s;b.k();){k=A.k(A.o(b.gm()).split("-"),l)
if(k.length!==2)continue
j=A.iO(new A.a6(B.u,o.a(new A.dS(k)),n),m)
if(1>=k.length)return A.d(k,1)
i=A.b1(k[1],null)
if(j!=null&&i!=null&&B.a.E(j.d,i))p.q(0,new A.F(j,i))}if(p.a!==0){b=c.y
if(b.a>0){b.b=b.c=b.d=b.e=b.f=null
b.a=0
b.az()}b.ad(0,p)}}c.z=A.j8(A.o(J.S(a,"spacing")))
h=J.S(a,"interval")
if(A.d9(h)){b=h>=1&&h<=12
g=h}else{g=null
b=!1}if(b)c.Q=g
f=J.S(a,"top")
if(typeof f=="number")c.r.value=B.c.i(f)
e=J.S(a,"gaps")
b=t.f
if(b.b(e))e.G(0,new A.dT(c))
d=J.S(a,"free")
if(b.b(d))d.G(0,new A.dU(c))},
c2(){var s,r,q,p,o=this,n=A.bE(t.N,t.K),m=A.k([],t.s)
for(s=o.y,s=A.hA(s,s.r,s.$ti.c),r=s.$ti.c;s.k();){q=s.d
if(q==null)q=r.a(q)
m.push(q.a.b+"-"+q.b)}n.n(0,"toms",m)
n.n(0,"spacing",o.z.b)
n.n(0,"interval",o.Q)
p=A.cK(A.n(o.r.value))
if(p!=null)n.n(0,"top",p)
n.n(0,"gaps",o.as)
n.n(0,"free",o.at)
return A.fk("ds-plan",B.n.bu(n,null))}}
A.dX.prototype={
$0(){var s=this,r=s.a,q=s.c,p=s.d,o=r.y
if(A.aO(s.b.checked))o.q(0,new A.F(q,p))
else o.cw(0,new A.F(q,p))
r.am()},
$S:0}
A.dY.prototype={
$0(){if(A.aO(this.b.checked))this.a.c4(this.c)},
$S:0}
A.dZ.prototype={
$0(){var s=this.a,r=A.b1(A.n(s.e.value),null)
s.Q=r==null?5:r
s.W()},
$S:0}
A.e_.prototype={
$0(){var s=this.a
s.bj()
s.W()},
$S:0}
A.dW.prototype={
$2(a,b){var s=t.U
return B.b.J(s.a(a).b,s.a(b).b)},
$S:12}
A.dV.prototype={
$0(){return this.a.Q},
$S:41}
A.dN.prototype={
$0(){var s,r=this,q=A.cK(A.n(r.b.value))
if(q!=null){s=r.c
r.a.at.n(0,s.a.b+"-"+s.b,q)}r.a.W()},
$S:0}
A.dO.prototype={
$0(){var s=this.a,r=s.bT(this.b),q=A.b1(A.n(this.c.value),null)
if(q==null)q=5
s.as.n(0,r,q)
s.W()},
$S:0}
A.dP.prototype={
$1(a){A.b8(a)
return a<30||a>1000},
$S:3}
A.dQ.prototype={
$1(a){var s,r
t.J.a(a)
s=a.d
r=a.c
return!(r>=s.a&&r<=s.b)},
$S:1}
A.dR.prototype={
$1(a){return A.b8(a)<0},
$S:3}
A.dL.prototype={
$1(a){t.J.a(a)
return a.c>a.d.b},
$S:1}
A.dM.prototype={
$1(a){t.J.a(a)
return a.c<a.d.a},
$S:1}
A.dS.prototype={
$1(a){var s
t.Q.a(a)
s=this.a
if(0>=s.length)return A.d(s,0)
return a.b===s[0]},
$S:13}
A.dT.prototype={
$2(a,b){if(A.d9(b)&&b>=1&&b<=12)this.a.as.n(0,A.o(a),b)},
$S:11}
A.dU.prototype={
$2(a,b){if(typeof b=="number")this.a.at.n(0,A.o(a),b)},
$S:11};(function aliases(){var s=J.at.prototype
s.bD=s.i})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u
s(J,"jT","iQ",31)
r(A,"kk","je",4)
r(A,"kl","jf",4)
r(A,"km","jg",4)
q(A,"i4","ke",0)
r(A,"kp","jI",14)
p(A.co.prototype,"gc9","a3",0)
var n
p(n=A.cQ.prototype,"gbX","bc",0)
o(n,"gbN","bO",38)
p(n,"gc5","aF",0)
p(A.cI.prototype,"gbY","W",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.h,null)
q(A.h,[A.fA,J.cq,A.bP,J.aC,A.b,A.bl,A.w,A.e0,A.aG,A.bG,A.aI,A.N,A.ab,A.aV,A.aK,A.av,A.eh,A.dJ,A.bq,A.c5,A.ap,A.D,A.dB,A.bB,A.bC,A.bv,A.c_,A.cU,A.cO,A.d5,A.a4,A.cZ,A.d7,A.eK,A.cV,A.X,A.cX,A.al,A.E,A.cW,A.d3,A.en,A.bZ,A.d1,A.aM,A.t,A.cj,A.cl,A.eH,A.aD,A.et,A.bQ,A.eu,A.bs,A.B,A.d6,A.b2,A.dI,A.dH,A.dr,A.dC,A.dE,A.O,A.cG,A.H,A.J,A.a3,A.cr,A.ai,A.e3,A.co,A.cQ,A.d2,A.cI])
q(J.cq,[J.ct,J.bu,J.bx,J.bw,J.by,J.aW,J.ar])
q(J.bx,[J.at,J.q,A.aZ,A.bJ])
q(J.at,[J.cH,J.aH,J.as])
r(J.cs,A.bP)
r(J.dx,J.q)
q(J.aW,[J.bt,J.cu])
q(A.b,[A.b3,A.f,A.ah,A.a6,A.aJ,A.cT,A.d4])
r(A.cb,A.b3)
r(A.bW,A.cb)
r(A.bm,A.bW)
q(A.w,[A.aX,A.aj,A.cv,A.cS,A.cL,A.cY,A.bA,A.cf,A.a9,A.bT,A.cR,A.bR,A.ck])
q(A.f,[A.Q,A.ag,A.bD,A.bY])
q(A.Q,[A.bS,A.a2,A.d0])
r(A.aE,A.ah)
q(A.ab,[A.b6,A.b7])
r(A.F,A.b6)
r(A.Z,A.b7)
q(A.aV,[A.bo,A.aa])
q(A.av,[A.bn,A.c4])
r(A.bp,A.bn)
r(A.bL,A.aj)
q(A.ap,[A.ch,A.ci,A.cP,A.f2,A.f4,A.eq,A.ep,A.eP,A.eD,A.f6,A.fe,A.ff,A.eW,A.dD,A.dF,A.fp,A.eR,A.dg,A.fa,A.f0,A.fi,A.e1,A.fd,A.fc,A.fh,A.fq,A.f7,A.e6,A.e4,A.dl,A.eb,A.ec,A.dP,A.dQ,A.dR,A.dL,A.dM,A.dS])
q(A.cP,[A.cN,A.aU])
q(A.D,[A.af,A.bX,A.d_])
r(A.bz,A.af)
q(A.ci,[A.f3,A.eQ,A.eV,A.eE,A.dG,A.eI,A.fg,A.eU,A.dk,A.dm,A.dW,A.dT,A.dU])
q(A.bJ,[A.cx,A.b_])
q(A.b_,[A.c0,A.c2])
r(A.c1,A.c0)
r(A.bH,A.c1)
r(A.c3,A.c2)
r(A.bI,A.c3)
q(A.bH,[A.cy,A.cz])
q(A.bI,[A.cA,A.cB,A.cC,A.cD,A.cE,A.bK,A.cF])
r(A.c6,A.cY)
q(A.ch,[A.er,A.es,A.eL,A.ev,A.ez,A.ey,A.ex,A.ew,A.eC,A.eB,A.eA,A.eo,A.eT,A.dh,A.fb,A.f1,A.fj,A.e2,A.fu,A.ft,A.fr,A.fs,A.f8,A.e5,A.e7,A.dn,A.dp,A.dq,A.ed,A.ee,A.ef,A.eg,A.e8,A.e9,A.ea,A.dX,A.dY,A.dZ,A.e_,A.dV,A.dN,A.dO])
r(A.bV,A.cX)
r(A.b5,A.bX)
r(A.aL,A.c4)
r(A.cw,A.bA)
r(A.dy,A.cj)
q(A.cl,[A.dA,A.dz])
r(A.eG,A.eH)
q(A.a9,[A.bN,A.cp])
q(A.et,[A.C,A.br,A.a5])
s(A.cb,A.t)
s(A.c0,A.t)
s(A.c1,A.N)
s(A.c2,A.t)
s(A.c3,A.N)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",j:"double",P:"num",i:"String",p:"bool",B:"Null",m:"List",h:"Object",Y:"Map",r:"JSObject"},mangledNames:{},types:["~()","p(ai)","~(@)","p(j)","~(~())","B(r)","~(h?)","B()","~(h?,h?)","h?(h?)","B(@)","~(@,@)","a(+(C,a),+(C,a))","p(C)","@(@)","p(j?)","i(i)","B(h,aw)","C()","@(i)","p(H)","H()","p(i)","J()","p(a3)","a(a,a)","p(a5)","a5()","~(a,@)","B(~())","B(h)","a(@,@)","ae<~>()","~(i)","p(r)","~(r,h?)","~(r,j)","~(i,i,m<i>)","~(j)","B(h?)","i()","a()","@(@,i)","B(@,aw)","a3()","p(J)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.F&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.Z&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.jy(v.typeUniverse,JSON.parse('{"cH":"at","aH":"at","as":"at","l2":"aZ","q":{"m":["1"],"f":["1"],"r":[],"b":["1"]},"ct":{"p":[],"u":[]},"bu":{"u":[]},"bx":{"r":[]},"at":{"r":[]},"cs":{"bP":[]},"dx":{"q":["1"],"m":["1"],"f":["1"],"r":[],"b":["1"]},"aC":{"y":["1"]},"aW":{"j":[],"P":[],"a1":["P"]},"bt":{"j":[],"a":[],"P":[],"a1":["P"],"u":[]},"cu":{"j":[],"P":[],"a1":["P"],"u":[]},"ar":{"i":[],"a1":["i"],"dK":[],"u":[]},"b3":{"b":["2"]},"bl":{"y":["2"]},"bW":{"t":["2"],"m":["2"],"b3":["1","2"],"f":["2"],"b":["2"]},"bm":{"bW":["1","2"],"t":["2"],"m":["2"],"b3":["1","2"],"f":["2"],"b":["2"],"t.E":"2","b.E":"2"},"aX":{"w":[]},"f":{"b":["1"]},"Q":{"f":["1"],"b":["1"]},"bS":{"Q":["1"],"f":["1"],"b":["1"],"Q.E":"1","b.E":"1"},"aG":{"y":["1"]},"ah":{"b":["2"],"b.E":"2"},"aE":{"ah":["1","2"],"f":["2"],"b":["2"],"b.E":"2"},"bG":{"y":["2"]},"a2":{"Q":["2"],"f":["2"],"b":["2"],"Q.E":"2","b.E":"2"},"a6":{"b":["1"],"b.E":"1"},"aI":{"y":["1"]},"F":{"b6":[],"ab":[]},"Z":{"b7":[],"ab":[]},"aV":{"Y":["1","2"]},"bo":{"aV":["1","2"],"Y":["1","2"]},"aJ":{"b":["1"],"b.E":"1"},"aK":{"y":["1"]},"aa":{"aV":["1","2"],"Y":["1","2"]},"bn":{"av":["1"],"cM":["1"],"f":["1"],"b":["1"]},"bp":{"bn":["1"],"av":["1"],"cM":["1"],"f":["1"],"b":["1"]},"bL":{"aj":[],"w":[]},"cv":{"w":[]},"cS":{"w":[]},"c5":{"aw":[]},"ap":{"aF":[]},"ch":{"aF":[]},"ci":{"aF":[]},"cP":{"aF":[]},"cN":{"aF":[]},"aU":{"aF":[]},"cL":{"w":[]},"af":{"D":["1","2"],"fC":["1","2"],"Y":["1","2"],"D.K":"1","D.V":"2"},"ag":{"f":["1"],"b":["1"],"b.E":"1"},"bB":{"y":["1"]},"bD":{"f":["1"],"b":["1"],"b.E":"1"},"bC":{"y":["1"]},"bz":{"af":["1","2"],"D":["1","2"],"fC":["1","2"],"Y":["1","2"],"D.K":"1","D.V":"2"},"b6":{"ab":[]},"b7":{"ab":[]},"bv":{"j6":[],"dK":[]},"c_":{"bO":[],"aY":[]},"cT":{"b":["bO"],"b.E":"bO"},"cU":{"y":["bO"]},"cO":{"aY":[]},"d4":{"b":["aY"],"b.E":"aY"},"d5":{"y":["aY"]},"aZ":{"r":[],"fw":[],"u":[]},"bJ":{"r":[]},"cx":{"fx":[],"r":[],"u":[]},"b_":{"T":["1"],"r":[]},"bH":{"t":["j"],"m":["j"],"T":["j"],"f":["j"],"r":[],"b":["j"],"N":["j"]},"bI":{"t":["a"],"m":["a"],"T":["a"],"f":["a"],"r":[],"b":["a"],"N":["a"]},"cy":{"di":[],"t":["j"],"m":["j"],"T":["j"],"f":["j"],"r":[],"b":["j"],"N":["j"],"u":[],"t.E":"j"},"cz":{"dj":[],"t":["j"],"m":["j"],"T":["j"],"f":["j"],"r":[],"b":["j"],"N":["j"],"u":[],"t.E":"j"},"cA":{"dt":[],"t":["a"],"m":["a"],"T":["a"],"f":["a"],"r":[],"b":["a"],"N":["a"],"u":[],"t.E":"a"},"cB":{"du":[],"t":["a"],"m":["a"],"T":["a"],"f":["a"],"r":[],"b":["a"],"N":["a"],"u":[],"t.E":"a"},"cC":{"dv":[],"t":["a"],"m":["a"],"T":["a"],"f":["a"],"r":[],"b":["a"],"N":["a"],"u":[],"t.E":"a"},"cD":{"ej":[],"t":["a"],"m":["a"],"T":["a"],"f":["a"],"r":[],"b":["a"],"N":["a"],"u":[],"t.E":"a"},"cE":{"ek":[],"t":["a"],"m":["a"],"T":["a"],"f":["a"],"r":[],"b":["a"],"N":["a"],"u":[],"t.E":"a"},"bK":{"el":[],"t":["a"],"m":["a"],"T":["a"],"f":["a"],"r":[],"b":["a"],"N":["a"],"u":[],"t.E":"a"},"cF":{"em":[],"t":["a"],"m":["a"],"T":["a"],"f":["a"],"r":[],"b":["a"],"N":["a"],"u":[],"t.E":"a"},"cY":{"w":[]},"c6":{"aj":[],"w":[]},"X":{"w":[]},"bV":{"cX":["1"]},"E":{"ae":["1"]},"bX":{"D":["1","2"],"Y":["1","2"]},"b5":{"bX":["1","2"],"D":["1","2"],"Y":["1","2"],"D.K":"1","D.V":"2"},"bY":{"f":["1"],"b":["1"],"b.E":"1"},"bZ":{"y":["1"]},"aL":{"av":["1"],"ho":["1"],"cM":["1"],"f":["1"],"b":["1"]},"aM":{"y":["1"]},"D":{"Y":["1","2"]},"av":{"cM":["1"],"f":["1"],"b":["1"]},"c4":{"av":["1"],"cM":["1"],"f":["1"],"b":["1"]},"d_":{"D":["i","@"],"Y":["i","@"],"D.K":"i","D.V":"@"},"d0":{"Q":["i"],"f":["i"],"b":["i"],"Q.E":"i","b.E":"i"},"bA":{"w":[]},"cw":{"w":[]},"aD":{"a1":["aD"]},"j":{"P":[],"a1":["P"]},"a":{"P":[],"a1":["P"]},"m":{"f":["1"],"b":["1"]},"P":{"a1":["P"]},"bO":{"aY":[]},"i":{"a1":["i"],"dK":[]},"cf":{"w":[]},"aj":{"w":[]},"a9":{"w":[]},"bN":{"w":[]},"cp":{"w":[]},"bT":{"w":[]},"cR":{"w":[]},"bR":{"w":[]},"ck":{"w":[]},"bQ":{"w":[]},"d6":{"aw":[]},"b2":{"ja":[]},"dv":{"m":["a"],"f":["a"],"b":["a"]},"em":{"m":["a"],"f":["a"],"b":["a"]},"el":{"m":["a"],"f":["a"],"b":["a"]},"dt":{"m":["a"],"f":["a"],"b":["a"]},"ej":{"m":["a"],"f":["a"],"b":["a"]},"du":{"m":["a"],"f":["a"],"b":["a"]},"ek":{"m":["a"],"f":["a"],"b":["a"]},"di":{"m":["j"],"f":["j"],"b":["j"]},"dj":{"m":["j"],"f":["j"],"b":["j"]}}'))
A.jx(v.typeUniverse,JSON.parse('{"cb":2,"b_":1,"c4":1,"cj":2,"cl":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.ac
return{n:s("X"),x:s("fw"),r:s("fx"),D:s("a1<@>"),k:s("aD"),Q:s("C"),E:s("f<@>"),C:s("w"),h4:s("di"),q:s("dj"),Z:s("aF"),V:s("aa<a,+(j,j,i)>"),d4:s("J"),dQ:s("dt"),an:s("du"),gj:s("dv"),W:s("b<@>"),e:s("q<J>"),O:s("q<r>"),G:s("q<h>"),d:s("q<ai>"),L:s("q<+(i,i)>"),s:s("q<i>"),B:s("q<d2>"),t:s("q<j>"),b:s("q<@>"),Y:s("q<a>"),a6:s("q<h?>"),c:s("q<j?>"),a:s("q<P>"),u:s("q<~()>"),T:s("bu"),m:s("r"),h:s("as"),p:s("T<@>"),cl:s("m<r>"),b2:s("m<ai>"),dy:s("m<i>"),j:s("m<@>"),f:s("Y<@,@>"),dv:s("a2<i,i>"),w:s("H"),P:s("B"),K:s("h"),J:s("ai"),gT:s("l3"),bQ:s("+()"),U:s("+(C,a)"),dP:s("+(h?,h?,h?)"),cz:s("bO"),ec:s("a3"),dJ:s("a5"),l:s("aw"),N:s("i"),dG:s("i(i)"),dm:s("u"),eK:s("aj"),h7:s("ej"),bv:s("ek"),go:s("el"),gc:s("em"),ak:s("aH"),d7:s("a6<C>"),_:s("E<@>"),A:s("b5<h?,h?>"),y:s("p"),gy:s("p(C)"),al:s("p(h)"),i:s("j"),z:s("@"),fO:s("@()"),v:s("@(h)"),R:s("@(h,aw)"),S:s("a"),eH:s("ae<B>?"),bX:s("r?"),bM:s("m<@>?"),X:s("h?"),dk:s("i?"),F:s("al<@,@>?"),g:s("d1?"),fQ:s("p?"),I:s("j?"),h6:s("a?"),cg:s("P?"),o:s("P"),H:s("~"),M:s("~()"),cA:s("~(i,@)"),as:s("~(a,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.a0=J.cq.prototype
B.a=J.q.prototype
B.b=J.bt.prototype
B.c=J.aW.prototype
B.d=J.ar.prototype
B.a1=J.as.prototype
B.a2=J.bx.prototype
B.K=J.cH.prototype
B.A=J.aH.prototype
B.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.L=function() {
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
B.Q=function(getTagFallback) {
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
B.M=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.P=function(hooks) {
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
B.O=function(hooks) {
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
B.N=function(hooks) {
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
B.C=function(hooks) { return hooks; }

B.n=new A.dy()
B.k=new A.e0()
B.i=new A.en()
B.o=new A.d6()
B.a5=s([10,12,13,14],t.Y)
B.aj=s([3.5,4,5,5.5,6,6.5,7,8],t.a)
B.f=new A.C("Snare",B.a5,14,B.aj,5.5,10,0,"snare")
B.a7=s([14,16,18],t.Y)
B.a6=s([12,13,14,16],t.a)
B.p=new A.C("Floor tom",B.a7,16,B.a6,14,8,2,"floorTom")
B.ab=s([18,20,22,24,26],t.Y)
B.a8=s([14,16,18,20],t.a)
B.q=new A.C("Bass drum (kick)",B.ab,22,B.a8,18,10,3,"kick")
B.aa=s([8,10,12,13],t.Y)
B.a9=s([6,7,8,9,10],t.a)
B.h=new A.C("Rack tom",B.aa,12,B.a9,8,6,1,"rackTom")
B.a3=new A.dz(null)
B.a4=new A.dA(null)
B.u=s([B.f,B.h,B.p,B.q],A.ac("q<C>"))
B.bi=new A.br(0,"wood")
B.t=s(["lm","g4m"],t.s)
B.au=new A.H("maple","Maple","Warm and balanced: an even spread of lows and highs with slightly boosted mids. The all-rounder.",B.t)
B.av=new A.H("birch","Birch","Brighter and more focused than maple, with a crisp, dry \u201cpop\u201d on the attack. A studio favorite.",B.t)
B.aA=new A.H("mahogany","Mahogany","Warm and dark: robust lows, mellow highs, and less projection than birch. A vintage feel.",B.t)
B.aC=new A.H("oak","Oak","Dry and punchy with strong projection and a solid low-mid.",B.t)
B.ag=s(["g4m","md"],t.s)
B.aw=new A.H("walnut","Walnut","Warm and rounded, with an even spread of lows, mids and highs and a darker, vintage character.",B.ag)
B.bj=new A.br(1,"synthetic")
B.ai=s(["md","lm"],t.s)
B.ay=new A.H("acrylic","Acrylic","Strong, focused attack and plenty of projection. Sources disagree on whether it reads bright or warm; acrylic kicks often want some damping.",B.ai)
B.bk=new A.br(2,"metal")
B.I=s(["thomannShell","yamahaSnare"],t.s)
B.ax=new A.H("steel","Steel","Bright and cutting with long sustain and a penetrating rimshot. Heavier and more aggressive than aluminum.",B.I)
B.aD=new A.H("aluminum","Aluminum","Dry, bright and crisp with a short sustain, so it often needs little or no damping.",B.I)
B.an=s(["yamahaSnare","thomannShell"],t.s)
B.at=new A.H("brass","Brass","Dry and articulate with darker overtones, a sharp crack and more low end than most metals.",B.an)
B.H=s(["thomannShell"],t.s)
B.aB=new A.H("bronze","Bronze","Dark and warm, more subdued than brass or steel. Increasingly popular on high-end snares.",B.H)
B.az=new A.H("copper","Copper","Warmer, with more low end than brass or steel. A long-time orchestral choice.",B.H)
B.v=s([B.au,B.av,B.aA,B.aC,B.aw,B.ay,B.ax,B.aD,B.at,B.aB,B.az],A.ac("q<H>"))
B.l=s(["C","C\u266f","D","D\u266f","E","F","F\u266f","G","G\u266f","A","A\u266f","B"],t.s)
B.r=s(["dcp","gc"],t.s)
B.R=new A.J("1c","Single-ply, coated","Open and warm with lots of overtones and touch sensitivity. The classic for jazz and for brushes.",B.r)
B.a_=new A.J("1x","Single-ply, clear","The most open and bright: maximum sustain and overtones, very responsive to dynamics.",B.r)
B.Z=new A.J("2c","Two-ply, coated","Deeper and more controlled with shorter sustain, plus the durability of two plies.",B.r)
B.V=new A.J("2x","Two-ply, clear","Punchy and fat with a bright attack and a controlled ring. Built for heavy hitting.",B.r)
B.E=s(["gc"],t.s)
B.Y=new A.J("ring","With a muffling ring or built-in control","Fewer overtones and a shorter ring, so the drum needs less extra damping.",B.E)
B.D=s([B.R,B.a_,B.Z,B.V,B.Y],t.e)
B.w=s(["Unison","Minor second","Major second","Minor third","Major third","Perfect fourth","Tritone","Perfect fifth","Minor sixth","Major sixth","Minor seventh","Major seventh","Octave"],t.s)
B.ae=s([],t.O)
B.af=s([],t.s)
B.ah=s(["gc","dcp"],t.s)
B.X=new A.J("1x","Single-ply, clear","The usual choice: thin enough to let the shell resonate and carry the note.",B.ah)
B.ad=s(["dcp"],t.s)
B.W=new A.J("1c","Single-ply, coated","Like clear single-ply with slightly softened overtones.",B.ad)
B.T=new A.J("2","Two-ply","Rarely recommended underneath: the extra mass tends to choke the shell\u2019s tone.",B.E)
B.ac=s(["daddario"],t.s)
B.U=new A.J("port","Kick front head with a port hole","Releases air so the kick sounds punchier with less boom, and gives a microphone a way in.",B.ac)
B.al=s(["yamahaSnare"],t.s)
B.S=new A.J("snare","Snare-side (very thin)","Made thin so the snare wires respond to the lightest notes.",B.al)
B.F=s([B.X,B.W,B.T,B.U,B.S],t.e)
B.m=new A.a5("Same interval","Every tom the same interval below the one above it.",0,"same")
B.z=new A.a5("Custom per gap","Choose the interval between each pair of neighbouring toms.",1,"perGap")
B.j=new A.a5("Free tuning","Type each tom\u2019s pitch. Nothing is enforced; the planner shows the intervals you end up with.",2,"free")
B.G=s([B.m,B.z,B.j],A.ac("q<a5>"))
B.ak=s(["yamaha2"],t.s)
B.aS=new A.a3("same","Same pitch","The most sustain and the steadiest pitch. Yamaha suggests it as the starting point for toms and kick.",B.ak)
B.J=s(["yamaha2","thomannTuning"],t.s)
B.aT=new A.a3("higher","Resonant head higher","Less sustain and a pitch that bends as the note dies away. Sources disagree on which way it bends, so listen on your own drum.",B.J)
B.aR=new A.a3("lower","Resonant head lower","Less sustain with a slight pitch bend, often heard as a \u201cdropping\u201d tom. As above, sources disagree on the direction; trust your ears.",B.J)
B.x=s([B.aS,B.aT,B.aR],A.ac("q<a3>"))
B.e=s(["tuner","guide","planner","howto"],t.s)
B.am=s(["yamahaSnare","md"],t.s)
B.aF={dtchart:0,tunebot:1,yamaha2:2,yamahaSnare:3,thomannShell:4,thomannTuning:5,lm:6,g4m:7,md:8,dcp:9,gc:10,daddario:11}
B.b4=new A.O("Drum Tuning: frequency chart","https://drum-tuning.com/drum-tuning-chart/")
B.b2=new A.O("Tune-Bot: artist tuning settings","https://tune-bot.com/artists/")
B.aV=new A.O("Yamaha Hub: discover the sonic possibilities of your drums, part 2","https://hub.yamaha.com/drums/d-how-to/discover-the-sonic-possibilities-of-your-drums-part-2/")
B.b0=new A.O("Yamaha Hub: the five different kinds of snare drums","https://hub.yamaha.com/drums/stage/the-five-different-kinds-of-snare-drums-explained")
B.b_=new A.O("Thomann: snare drum shell materials","https://www.thomannmusic.com/onlineexpert_page_snare_drums_shell_materials.html")
B.b1=new A.O("Thomann: drumheads and drum tuning","https://www.thomann.co.uk/onlineexpert_page_drumheads_drum_tuning.html")
B.b3=new A.O("Long & McQuade: a guide to the sound of different shell materials","https://www.long-mcquade.com/blog/576/The-Heart-of-Your-Drums-A-Guide-to-the-Sound-of-Different-Shell-Materials.htm")
B.aW=new A.O("Gear4music: your guide to shell materials","https://www.gear4music.com/blog/what-wood-sounds-good-your-guide-to-shell-materials")
B.aY=new A.O("Modern Drummer: what you need to know about drum shells","https://www.moderndrummer.com/2015/02/need-know-drum-shells/")
B.aX=new A.O("Drum Center of Portsmouth: coated vs clear drum heads","https://drumcenternh.com/blogs/news/coated-drum-heads-vs-clear-drum-heads-which-is-best")
B.aZ=new A.O("Guitar Center: best drum heads guide","https://www.guitarcenter.com/riffs/buying-guides/drums/best-drum-heads-guide")
B.b5=new A.O("D'Addario: how to choose a bass drumhead","https://www.daddario.com/en-de/blogs/percussion/how-to-choose-a-bass-drumhead")
B.y=new A.bo(B.aF,[B.b4,B.b2,B.aV,B.b0,B.b_,B.b1,B.b3,B.aW,B.aY,B.aX,B.aZ,B.b5],A.ac("bo<i,O>"))
B.aL=new A.Z(170,250,"dtchart")
B.ap=new A.aa([14,B.aL],t.V)
B.aK=new A.Z(130,180,"dtchart")
B.aJ=new A.Z(100,150,"dtchart")
B.aQ=new A.Z(90,140,"dtchart")
B.aq=new A.aa([10,B.aK,12,B.aJ,13,B.aQ],t.V)
B.aP=new A.Z(80,120,"dtchart")
B.aO=new A.Z(65,100,"dtchart")
B.ao=new A.aa([14,B.aP,16,B.aO],t.V)
B.aN=new A.Z(55,80,"dtchart")
B.aM=new A.Z(50,70,"dtchart")
B.as=new A.aa([20,B.aN,22,B.aM],t.V)
B.ar=new A.aa([B.f,B.ap,B.h,B.aq,B.p,B.ao,B.q,B.as],A.ac("aa<C,Y<a,+(j,j,i)>>"))
B.aG=new A.F(B.h,12)
B.aH=new A.F(B.h,10)
B.aI=new A.F(B.p,16)
B.aE={a:0,an:1,the:2,and:3,but:4,or:5,nor:6,for:7,so:8,yet:9,as:10,at:11,by:12,in:13,of:14,on:15,per:16,to:17,up:18,via:19,vs:20,from:21,into:22,onto:23,over:24,than:25,upon:26,with:27}
B.aU=new A.bp(B.aE,28,A.ac("bp<i>"))
B.b6=A.a7("fw")
B.b7=A.a7("fx")
B.b8=A.a7("di")
B.b9=A.a7("dj")
B.ba=A.a7("dt")
B.bb=A.a7("du")
B.bc=A.a7("dv")
B.bd=A.a7("h")
B.be=A.a7("ej")
B.bf=A.a7("ek")
B.bg=A.a7("el")
B.bh=A.a7("em")})();(function staticFields(){$.eF=null
$.W=A.k([],t.G)
$.hq=null
$.hf=null
$.he=null
$.ia=null
$.i3=null
$.ig=null
$.eY=null
$.f5=null
$.h2=null
$.eJ=A.k([],A.ac("q<m<h>?>"))
$.bb=null
$.cc=null
$.cd=null
$.fY=!1
$.x=B.i})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"l1","il",()=>A.f_("_$dart_dartClosure"))
s($,"l0","h8",()=>A.f_("_$dart_dartClosure_dartJSInterop"))
s($,"lh","ix",()=>A.k([new J.cs()],A.ac("q<bP>")))
s($,"l5","im",()=>A.ak(A.ei({
toString:function(){return"$receiver$"}})))
s($,"l6","io",()=>A.ak(A.ei({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"l7","ip",()=>A.ak(A.ei(null)))
s($,"l8","iq",()=>A.ak(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"lb","it",()=>A.ak(A.ei(void 0)))
s($,"lc","iu",()=>A.ak(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"la","is",()=>A.ak(A.hw(null)))
s($,"l9","ir",()=>A.ak(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"le","iw",()=>A.ak(A.hw(void 0)))
s($,"ld","iv",()=>A.ak(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"lf","h9",()=>A.jd())
s($,"lg","fv",()=>A.db(B.bd))
s($,"li","ha",()=>{var r,q,p,o=[]
for(r=1;r<=12;++r){q=B.w[r]
p=r===1?"":"s"
o.push(new A.cr(r,q+" ("+r+" semitone"+p+")"))}return A.fF(o,A.ac("cr"))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.aZ,SharedArrayBuffer:A.aZ,ArrayBufferView:A.bJ,DataView:A.cx,Float32Array:A.cy,Float64Array:A.cz,Int16Array:A.cA,Int32Array:A.cB,Int8Array:A.cC,Uint16Array:A.cD,Uint32Array:A.cE,Uint8ClampedArray:A.bK,CanvasPixelArray:A.bK,Uint8Array:A.cF})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.b_.$nativeSuperclassTag="ArrayBufferView"
A.c0.$nativeSuperclassTag="ArrayBufferView"
A.c1.$nativeSuperclassTag="ArrayBufferView"
A.bH.$nativeSuperclassTag="ArrayBufferView"
A.c2.$nativeSuperclassTag="ArrayBufferView"
A.c3.$nativeSuperclassTag="ArrayBufferView"
A.bI.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
Function.prototype.$1$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.kJ
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()