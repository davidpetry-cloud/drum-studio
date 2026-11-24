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
if(a[b]!==s){A.ka(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.f(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.fm(b)
return new s(c,this)}:function(){if(s===null)s=A.fm(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.fm(a).prototype
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
fs(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fn(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.fo==null){A.jY()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.fY("Return interceptor for "+A.q(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.e7
if(o==null)o=$.e7=A.et(n)
p=q[o]}if(p!=null)return p
p=A.k2(a)
if(p!=null)return p
if(typeof a=="function")return B.L
s=Object.getPrototypeOf(a)
if(s==null)return B.C
if(s===Object.prototype)return B.C
if(typeof q=="function"){o=$.e7
if(o==null)o=$.e7=A.et(n)
Object.defineProperty(q,o,{value:B.u,enumerable:false,writable:true,configurable:true})
return B.u}return B.u},
i8(a,b){if(a<0||a>4294967295)throw A.c(A.aO(a,0,4294967295,"length",null))
return J.ia(new Array(a),b)},
i9(a,b){if(a<0)throw A.c(A.aF("Length must be a non-negative integer: "+a,null))
return A.f(new Array(a),b.h("o<0>"))},
ia(a,b){var s=A.f(a,b.h("o<0>"))
s.$flags=1
return s},
fI(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ib(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.fI(r))break;++b}return b},
ic(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.j(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.fI(q))break}return b},
aC(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b6.prototype
return J.c_.prototype}if(typeof a=="string")return J.aI.prototype
if(a==null)return J.b7.prototype
if(typeof a=="boolean")return J.bZ.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
if(typeof a=="symbol")return J.ba.prototype
if(typeof a=="bigint")return J.b8.prototype
return a}if(a instanceof A.i)return a
return J.fn(a)},
hA(a){if(typeof a=="string")return J.aI.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
if(typeof a=="symbol")return J.ba.prototype
if(typeof a=="bigint")return J.b8.prototype
return a}if(a instanceof A.i)return a
return J.fn(a)},
es(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
if(typeof a=="symbol")return J.ba.prototype
if(typeof a=="bigint")return J.b8.prototype
return a}if(a instanceof A.i)return a
return J.fn(a)},
jT(a){if(typeof a=="number")return J.aH.prototype
if(a==null)return a
if(!(a instanceof A.i))return J.aR.prototype
return a},
a6(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aC(a).L(a,b)},
eU(a,b,c){return J.jT(a).u(a,b,c)},
hU(a,b){return J.es(a).V(a,b)},
Y(a){return J.aC(a).gn(a)},
hV(a){return J.es(a).gbZ(a)},
eV(a){return J.es(a).gv(a)},
eW(a){return J.hA(a).gl(a)},
hW(a){return J.aC(a).gt(a)},
hX(a,b,c){return J.es(a).ai(a,b,c)},
bK(a){return J.aC(a).i(a)},
bX:function bX(){},
bZ:function bZ(){},
b7:function b7(){},
b9:function b9(){},
ah:function ah(){},
cd:function cd(){},
aR:function aR(){},
ag:function ag(){},
b8:function b8(){},
ba:function ba(){},
o:function o(a){this.$ti=a},
bY:function bY(){},
cF:function cF(a){this.$ti=a},
am:function am(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aH:function aH(){},
b6:function b6(){},
c_:function c_(){},
aI:function aI(){}},A={f0:function f0(){},
fL(a){return new A.c3("Field '"+a+"' has been assigned during initialization.")},
a9(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dG(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fl(a,b,c){return a},
fq(a){var s,r
for(s=$.P.length,r=0;r<s;++r)if(a===$.P[r])return!0
return!1},
ii(a,b,c,d){if(t.V.b(a))return new A.an(a,b,c.h("@<0>").k(d).h("an<1,2>"))
return new A.at(a,b,c.h("@<0>").k(d).h("at<1,2>"))},
fG(){return new A.bp("No element")},
c3:function c3(a){this.a=a},
dB:function dB(){},
h:function h(){},
a_:function a_(){},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
at:function at(a,b,c){this.a=a
this.b=b
this.$ti=c},
an:function an(a,b,c){this.a=a
this.b=b
this.$ti=c},
be:function be(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a8:function a8(a,b,c){this.a=a
this.b=b
this.$ti=c},
I:function I(){},
hH(a){var s=A.hG(a)
if(s!=null)return s
return"minified:"+a},
kA(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bK(a)
return s},
ce(a){var s,r=$.fQ
if(r==null)r=$.fQ=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
f6(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.j(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
iv(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.c.aa(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
cf(a){var s,r,q,p
if(a instanceof A.i)return A.O(A.b0(a),null)
s=J.aC(a)
if(s===B.K||s===B.M||t.cr.b(a)){r=B.w(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.O(A.b0(a),null)},
fR(a){var s,r,q
if(a==null||typeof a=="number"||A.en(a))return J.bK(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ae)return a.i(0)
if(a instanceof A.ad)return a.bI(!0)
s=$.hT()
for(r=0;r<1;++r){q=s[r].d8(a)
if(q!=null)return q}return"Instance of '"+A.cf(a)+"'"},
G(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.bD(s,10)|55296)>>>0,s&1023|56320)}throw A.c(A.aO(a,0,1114111,null,null))},
aN(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iu(a){var s=A.aN(a).getUTCFullYear()+0
return s},
is(a){var s=A.aN(a).getUTCMonth()+1
return s},
io(a){var s=A.aN(a).getUTCDate()+0
return s},
ip(a){var s=A.aN(a).getUTCHours()+0
return s},
ir(a){var s=A.aN(a).getUTCMinutes()+0
return s},
it(a){var s=A.aN(a).getUTCSeconds()+0
return s},
iq(a){var s=A.aN(a).getUTCMilliseconds()+0
return s},
im(a){var s=a.$thrownJsError
if(s==null)return null
return A.b_(s)},
fS(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.D(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
j(a,b){if(a==null)J.eW(a)
throw A.c(A.hz(a,b))},
hz(a,b){var s,r="index"
if(!A.fi(b))return new A.Z(!0,b,r,null)
s=J.eW(a)
if(b<0||b>=s)return A.fF(b,s,a,r)
return A.f7(b,r)},
jJ(a){return new A.Z(!0,a,null,null)},
c(a){return A.D(a,new Error())},
D(a,b){var s
if(a==null)a=new A.aa()
b.dartException=a
s=A.kb
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
kb(){return J.bK(this.dartException)},
eN(a,b){throw A.D(a,b==null?new Error():b)},
b2(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.eN(A.ja(a,b,c),s)},
ja(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.bq("'"+s+"': Cannot "+o+" "+l+k+n)},
X(a){throw A.c(A.R(a))},
ab(a){var s,r,q,p,o,n
a=A.k6(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.f([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.dI(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
dJ(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
fX(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
f1(a,b){var s=b==null,r=s?null:b.method
return new A.c1(a,r,s?null:b.receiver)},
a5(a){var s
if(a==null)return new A.dy(a)
if(a instanceof A.b4){s=a.a
return A.al(a,s==null?A.bG(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.al(a,a.dartException)
return A.jI(a)},
al(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.bD(r,16)&8191)===10)switch(q){case 438:return A.al(a,A.f1(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.al(a,new A.bl())}}if(a instanceof TypeError){p=$.hJ()
o=$.hK()
n=$.hL()
m=$.hM()
l=$.hP()
k=$.hQ()
j=$.hO()
$.hN()
i=$.hS()
h=$.hR()
g=p.K(s)
if(g!=null)return A.al(a,A.f1(A.r(s),g))
else{g=o.K(s)
if(g!=null){g.method="call"
return A.al(a,A.f1(A.r(s),g))}else if(n.K(s)!=null||m.K(s)!=null||l.K(s)!=null||k.K(s)!=null||j.K(s)!=null||m.K(s)!=null||i.K(s)!=null||h.K(s)!=null){A.r(s)
return A.al(a,new A.bl())}}return A.al(a,new A.ck(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bo()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.al(a,new A.Z(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bo()
return a},
b_(a){var s
if(a instanceof A.b4)return a.b
if(a==null)return new A.bA(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bA(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
eD(a){if(a==null)return J.Y(a)
if(typeof a=="object")return A.ce(a)
return J.Y(a)},
jS(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.A(0,a[s],a[r])}return b},
jk(a,b,c,d,e,f){t.Z.a(a)
switch(A.m(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.dX("Unsupported number of arguments for wrapped closure"))},
bJ(a,b){var s=a.$identity
if(!!s)return s
s=A.jN(a,b)
a.$identity=s
return s},
jN(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.jk)},
i3(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ch().constructor.prototype):Object.create(new A.aG(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.fD(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.i_(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.fD(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
i_(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.hY)}throw A.c("Error in functionType of tearoff")},
i0(a,b,c,d){var s=A.fC
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
fD(a,b,c,d){if(c)return A.i2(a,b,d)
return A.i0(b.length,d,a,b)},
i1(a,b,c,d){var s=A.fC,r=A.hZ
switch(b?-1:a){case 0:throw A.c(new A.cg("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
i2(a,b,c){var s,r
if($.fA==null)$.fA=A.fz("interceptor")
if($.fB==null)$.fB=A.fz("receiver")
s=b.length
r=A.i1(s,c,a,b)
return r},
fm(a){return A.i3(a)},
hY(a,b){return A.bF(v.typeUniverse,A.b0(a.a),b)},
fC(a){return a.a},
hZ(a){return a.b},
fz(a){var s,r,q,p=new A.aG("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.aF("Field name "+a+" not found.",null))},
et(a){return v.getIsolateTag(a)},
kz(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
k2(a){var s,r,q,p,o,n=A.r($.hB.$1(a)),m=$.er[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ey[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.ej($.hu.$2(a,n))
if(q!=null){m=$.er[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ey[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.eA(s)
$.er[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ey[n]=s
return s}if(p==="-"){o=A.eA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.hD(a,s)
if(p==="*")throw A.c(A.fY(n))
if(v.leafTags[n]===true){o=A.eA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.hD(a,s)},
hD(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.fs(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
eA(a){return J.fs(a,!1,null,!!a.$iM)},
k4(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.eA(s)
else return J.fs(s,c,null,null)},
jY(){if(!0===$.fo)return
$.fo=!0
A.jZ()},
jZ(){var s,r,q,p,o,n,m,l
$.er=Object.create(null)
$.ey=Object.create(null)
A.jX()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hE.$1(o)
if(n!=null){m=A.k4(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jX(){var s,r,q,p,o,n,m=B.E()
m=A.aZ(B.F,A.aZ(B.G,A.aZ(B.x,A.aZ(B.x,A.aZ(B.H,A.aZ(B.I,A.aZ(B.J(B.w),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.hB=new A.ev(p)
$.hu=new A.ew(o)
$.hE=new A.ex(n)},
aZ(a,b){return a(b)||b},
iS(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.j(b,s)
if(!J.a6(r,b[s]))return!1}return!0},
jP(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
fJ(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(A.eZ("Illegal RegExp pattern ("+String(o)+")",a))},
k9(a,b,c){var s=a.indexOf(b,c)
return s>=0},
jQ(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
k6(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
hF(a,b,c){var s,r=b.gcu()
r.lastIndex=0
s=a.replace(r,A.jQ(c))
return s},
aW:function aW(a,b){this.a=a
this.b=b},
L:function L(a){this.a=a},
bn:function bn(){},
dI:function dI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bl:function bl(){},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
ck:function ck(a){this.a=a},
dy:function dy(a){this.a=a},
b4:function b4(a,b){this.a=a
this.b=b},
bA:function bA(a){this.a=a
this.b=null},
ae:function ae(){},
bO:function bO(){},
bP:function bP(){},
ci:function ci(){},
ch:function ch(){},
aG:function aG(a,b){this.a=a
this.b=b},
cg:function cg(a){this.a=a},
ap:function ap(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cL:function cL(a,b){this.a=a
this.b=b
this.c=null},
aq:function aq(a,b){this.a=a
this.$ti=b},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ev:function ev(a){this.a=a},
ew:function ew(a){this.a=a},
ex:function ex(a){this.a=a},
ad:function ad(){},
aU:function aU(){},
aV:function aV(){},
c0:function c0(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
eb:function eb(a){this.b=a},
aK:function aK(){},
bj:function bj(){},
c5:function c5(){},
aM:function aM(){},
bh:function bh(){},
bi:function bi(){},
aL:function aL(){},
c6:function c6(){},
c7:function c7(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
bk:function bk(){},
cc:function cc(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
f8(a,b){var s=b.c
return s==null?b.c=A.bD(a,"a7",[b.x]):s},
fT(a){var s=a.w
if(s===6||s===7)return A.fT(a.x)
return s===11||s===12},
iz(a){return a.as},
k5(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
cv(a){return A.eh(v.typeUniverse,a,!1)},
aA(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.aA(a1,s,a3,a4)
if(r===s)return a2
return A.h5(a1,r,!0)
case 7:s=a2.x
r=A.aA(a1,s,a3,a4)
if(r===s)return a2
return A.h4(a1,r,!0)
case 8:q=a2.y
p=A.aY(a1,q,a3,a4)
if(p===q)return a2
return A.bD(a1,a2.x,p)
case 9:o=a2.x
n=A.aA(a1,o,a3,a4)
m=a2.y
l=A.aY(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.fe(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aY(a1,j,a3,a4)
if(i===j)return a2
return A.h6(a1,k,i)
case 11:h=a2.x
g=A.aA(a1,h,a3,a4)
f=a2.y
e=A.jF(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.h3(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aY(a1,d,a3,a4)
o=a2.x
n=A.aA(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.ff(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bN("Attempted to substitute unexpected RTI kind "+a0))}},
aY(a,b,c,d){var s,r,q,p,o=b.length,n=A.ei(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aA(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
jG(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.ei(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aA(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
jF(a,b,c,d){var s,r=b.a,q=A.aY(a,r,c,d),p=b.b,o=A.aY(a,p,c,d),n=b.c,m=A.jG(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cp()
s.a=q
s.b=o
s.c=m
return s},
f(a,b){a[v.arrayRti]=b
return a},
hw(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.jV(s)
return a.$S()}return null},
k_(a,b){var s
if(A.fT(b))if(a instanceof A.ae){s=A.hw(a)
if(s!=null)return s}return A.b0(a)},
b0(a){if(a instanceof A.i)return A.V(a)
if(Array.isArray(a))return A.H(a)
return A.fg(J.aC(a))},
H(a){var s=a[v.arrayRti],r=t.r
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
V(a){var s=a.$ti
return s!=null?s:A.fg(a)},
fg(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.jh(a,s)},
jh(a,b){var s=a instanceof A.ae?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.j0(v.typeUniverse,s.name)
b.$ccache=r
return r},
jV(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.eh(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jU(a){return A.aB(A.V(a))},
fk(a){var s
if(a instanceof A.ad)return A.jR(a.$r,a.aQ())
s=a instanceof A.ae?A.hw(a):null
if(s!=null)return s
if(t.bW.b(a))return J.hW(a).a
if(Array.isArray(a))return A.H(a)
return A.b0(a)},
aB(a){var s=a.r
return s==null?a.r=new A.eg(a):s},
jR(a,b){var s,r,q=b,p=q.length
if(p===0)return t.cD
if(0>=p)return A.j(q,0)
s=A.bF(v.typeUniverse,A.fk(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.j(q,r)
s=A.h8(v.typeUniverse,s,A.fk(q[r]))}return A.bF(v.typeUniverse,s,a)},
a2(a){return A.aB(A.eh(v.typeUniverse,a,!1))},
jg(a){var s=this
s.b=A.jD(s)
return s.b(a)},
jD(a){var s,r,q,p,o
if(a===t.K)return A.jq
if(A.aD(a))return A.ju
s=a.w
if(s===6)return A.je
if(s===1)return A.hm
if(s===7)return A.jl
r=A.jC(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.aD)){a.f="$i"+q
if(q==="l")return A.jo
if(a===t.m)return A.jn
return A.jt}}else if(s===10){p=A.jP(a.x,a.y)
o=p==null?A.hm:p
return o==null?A.bG(o):o}return A.jc},
jC(a){if(a.w===8){if(a===t.S)return A.fi
if(a===t.i||a===t.o)return A.jp
if(a===t.N)return A.js
if(a===t.y)return A.en}return null},
jf(a){var s=this,r=A.jb
if(A.aD(s))r=A.j5
else if(s===t.K)r=A.bG
else if(A.b1(s)){r=A.jd
if(s===t.a3)r=A.j3
else if(s===t.aD)r=A.ej
else if(s===t.u)r=A.j2
else if(s===t.ae)r=A.hc
else if(s===t.I)r=A.hb
else if(s===t.aQ)r=A.T}else if(s===t.S)r=A.m
else if(s===t.N)r=A.r
else if(s===t.y)r=A.A
else if(s===t.o)r=A.j4
else if(s===t.i)r=A.J
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
jc(a){var s=this
if(a==null)return A.b1(s)
return A.k0(v.typeUniverse,A.k_(a,s),s)},
je(a){if(a==null)return!0
return this.x.b(a)},
jt(a){var s,r=this
if(a==null)return A.b1(r)
s=r.f
if(a instanceof A.i)return!!a[s]
return!!J.aC(a)[s]},
jo(a){var s,r=this
if(a==null)return A.b1(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.i)return!!a[s]
return!!J.aC(a)[s]},
jn(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.i)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
hl(a){if(typeof a=="object"){if(a instanceof A.i)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
jb(a){var s=this
if(a==null){if(A.b1(s))return a}else if(s.b(a))return a
throw A.D(A.hi(a,s),new Error())},
jd(a){var s=this
if(a==null||s.b(a))return a
throw A.D(A.hi(a,s),new Error())},
hi(a,b){return new A.bB("TypeError: "+A.fZ(a,A.O(b,null)))},
fZ(a,b){return A.bV(a)+": type '"+A.O(A.fk(a),null)+"' is not a subtype of type '"+b+"'"},
S(a,b){return new A.bB("TypeError: "+A.fZ(a,b))},
jl(a){var s=this
return s.x.b(a)||A.f8(v.typeUniverse,s).b(a)},
jq(a){return a!=null},
bG(a){if(a!=null)return a
throw A.D(A.S(a,"Object"),new Error())},
ju(a){return!0},
j5(a){return a},
hm(a){return!1},
en(a){return!0===a||!1===a},
A(a){if(!0===a)return!0
if(!1===a)return!1
throw A.D(A.S(a,"bool"),new Error())},
j2(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.D(A.S(a,"bool?"),new Error())},
J(a){if(typeof a=="number")return a
throw A.D(A.S(a,"double"),new Error())},
hb(a){if(typeof a=="number")return a
if(a==null)return a
throw A.D(A.S(a,"double?"),new Error())},
fi(a){return typeof a=="number"&&Math.floor(a)===a},
m(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.D(A.S(a,"int"),new Error())},
j3(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.D(A.S(a,"int?"),new Error())},
jp(a){return typeof a=="number"},
j4(a){if(typeof a=="number")return a
throw A.D(A.S(a,"num"),new Error())},
hc(a){if(typeof a=="number")return a
if(a==null)return a
throw A.D(A.S(a,"num?"),new Error())},
js(a){return typeof a=="string"},
r(a){if(typeof a=="string")return a
throw A.D(A.S(a,"String"),new Error())},
ej(a){if(typeof a=="string")return a
if(a==null)return a
throw A.D(A.S(a,"String?"),new Error())},
b(a){if(A.hl(a))return a
throw A.D(A.S(a,"JSObject"),new Error())},
T(a){if(a==null)return a
if(A.hl(a))return a
throw A.D(A.S(a,"JSObject?"),new Error())},
hr(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.O(a[q],b)
return s},
jy(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.hr(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.O(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
hj(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.f([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.j(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.j(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.O(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.O(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.O(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.O(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.O(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
O(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.O(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.O(a.x,b)+">"
if(l===8){p=A.jH(a.x)
o=a.y
return o.length>0?p+("<"+A.hr(o,b)+">"):p}if(l===10)return A.jy(a,b)
if(l===11)return A.hj(a,b,null)
if(l===12)return A.hj(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.j(b,n)
return b[n]}return"?"},
jH(a){var s=A.hG(a)
if(s!=null)return s
return"minified:"+a},
j1(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
j0(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.eh(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bE(a,5,"#")
q=A.ei(s)
for(p=0;p<s;++p)q[p]=r
o=A.bD(a,b,q)
n[b]=o
return o}else return m},
j_(a,b){return A.h9(a.tR,b)},
iZ(a,b){return A.h9(a.eT,b)},
eh(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.h7(a,null,b,!1)
r.set(b,s)
return s},
bF(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.h7(a,b,c,!0)
q.set(c,r)
return r},
h8(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.fe(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
h7(a,b,c,d){return A.iQ(A.iK(a,b,c,d))},
ak(a,b){b.a=A.jf
b.b=A.jg
return b},
bE(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.a1(null,null)
s.w=b
s.as=c
r=A.ak(a,s)
a.eC.set(c,r)
return r},
h5(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.iX(a,b,r,c)
a.eC.set(r,s)
return s},
iX(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.aD(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.b1(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.a1(null,null)
q.w=6
q.x=b
q.as=c
return A.ak(a,q)},
h4(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.iV(a,b,r,c)
a.eC.set(r,s)
return s},
iV(a,b,c,d){var s,r
if(d){s=b.w
if(A.aD(b)||b===t.K)return b
else if(s===1)return A.bD(a,"a7",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.a1(null,null)
r.w=7
r.x=b
r.as=c
return A.ak(a,r)},
iY(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.a1(null,null)
s.w=13
s.x=b
s.as=q
r=A.ak(a,s)
a.eC.set(q,r)
return r},
bC(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
iU(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bD(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bC(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.a1(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ak(a,r)
a.eC.set(p,q)
return q},
fe(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bC(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.a1(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ak(a,o)
a.eC.set(q,n)
return n},
h6(a,b,c){var s,r,q="+"+(b+"("+A.bC(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.a1(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ak(a,s)
a.eC.set(q,r)
return r},
h3(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bC(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bC(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.iU(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.a1(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ak(a,p)
a.eC.set(r,o)
return o},
ff(a,b,c,d){var s,r=b.as+("<"+A.bC(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.iW(a,b,c,r,d)
a.eC.set(r,s)
return s},
iW(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.ei(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.aA(a,b,r,0)
m=A.aY(a,c,r,0)
return A.ff(a,n,m,c!==m)}}l=new A.a1(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ak(a,l)},
iK(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
iQ(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.iM(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.h1(a,r,l,k,!1)
else if(q===46)r=A.h1(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ay(a.u,a.e,k.pop()))
break
case 94:k.push(A.iY(a.u,k.pop()))
break
case 35:k.push(A.bE(a.u,5,"#"))
break
case 64:k.push(A.bE(a.u,2,"@"))
break
case 126:k.push(A.bE(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.iO(a,k)
break
case 38:A.iN(a,k)
break
case 63:p=a.u
k.push(A.h5(p,A.ay(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.h4(p,A.ay(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.iL(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.h2(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.iR(a.u,a.e,o)
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
return A.ay(a.u,a.e,m)},
iM(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
h1(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.j1(s,o.x)[p]
if(n==null)A.eN('No "'+p+'" in "'+A.iz(o)+'"')
d.push(A.bF(s,o,n))}else d.push(p)
return m},
iO(a,b){var s,r=a.u,q=A.h0(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bD(r,p,q))
else{s=A.ay(r,a.e,p)
switch(s.w){case 11:b.push(A.ff(r,s,q,a.n))
break
default:b.push(A.fe(r,s,q))
break}}},
iL(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.h0(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ay(p,a.e,o)
q=new A.cp()
q.a=s
q.b=n
q.c=m
b.push(A.h3(p,r,q))
return
case-4:b.push(A.h6(p,b.pop(),s))
return
default:throw A.c(A.bN("Unexpected state under `()`: "+A.q(o)))}},
iN(a,b){var s=b.pop()
if(0===s){b.push(A.bE(a.u,1,"0&"))
return}if(1===s){b.push(A.bE(a.u,4,"1&"))
return}throw A.c(A.bN("Unexpected extended operation "+A.q(s)))},
h0(a,b){var s=b.splice(a.p)
A.h2(a.u,a.e,s)
a.p=b.pop()
return s},
ay(a,b,c){if(typeof c=="string")return A.bD(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.iP(a,b,c)}else return c},
h2(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ay(a,b,c[s])},
iR(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ay(a,b,c[s])},
iP(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.bN("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bN("Bad index "+c+" for "+b.i(0)))},
k0(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.C(a,b,null,c,null)
r.set(c,s)}return s},
C(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.aD(d))return!0
s=b.w
if(s===4)return!0
if(A.aD(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.C(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.C(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.C(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.C(a,b.x,c,d,e))return!1
return A.C(a,A.f8(a,b),c,d,e)}if(s===6)return A.C(a,p,c,d,e)&&A.C(a,b.x,c,d,e)
if(q===7){if(A.C(a,b,c,d.x,e))return!0
return A.C(a,b,c,A.f8(a,d),e)}if(q===6)return A.C(a,b,c,p,e)||A.C(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.cY)return!0
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
if(!A.C(a,j,c,i,e)||!A.C(a,i,e,j,c))return!1}return A.hk(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.hk(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.jm(a,b,c,d,e)}if(o&&q===10)return A.jr(a,b,c,d,e)
return!1},
hk(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.C(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.C(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.C(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.C(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.C(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
jm(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bF(a,b,r[o])
return A.ha(a,p,null,c,d.y,e)}return A.ha(a,b.y,null,c,d.y,e)},
ha(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.C(a,b[s],d,e[s],f))return!1
return!0},
jr(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.C(a,r[s],c,q[s],e))return!1
return!0},
b1(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.aD(a))if(s!==6)r=s===7&&A.b1(a.x)
return r},
aD(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
h9(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ei(a){return a>0?new Array(a):v.typeUniverse.sEA},
a1:function a1(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cp:function cp(){this.c=this.b=this.a=null},
eg:function eg(a){this.a=a},
co:function co(){},
bB:function bB(a){this.a=a},
iD(){var s,r,q
if(self.scheduleImmediate!=null)return A.jK()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bJ(new A.dT(s),1)).observe(r,{childList:true})
return new A.dS(s,r,q)}else if(self.setImmediate!=null)return A.jL()
return A.jM()},
iE(a){self.scheduleImmediate(A.bJ(new A.dU(t.M.a(a)),0))},
iF(a){self.setImmediate(A.bJ(new A.dV(t.M.a(a)),0))},
iG(a){t.M.a(a)
A.iT(0,a)},
iT(a,b){var s=new A.ee()
s.c9(a,b)
return s},
hn(a){return new A.cl(new A.B($.x,a.h("B<0>")),a.h("cl<0>"))},
hg(a,b){a.$2(0,null)
b.b=!0
return b.a},
hd(a,b){A.j6(a,b)},
hf(a,b){b.b_(a)},
he(a,b){b.b0(A.a5(a),A.b_(a))},
j6(a,b){var s,r,q=new A.ek(b),p=new A.el(b)
if(a instanceof A.B)a.bG(q,p,t.z)
else{s=t.z
if(a instanceof A.B)a.c2(q,p,s)
else{r=new A.B($.x,t._)
r.a=8
r.c=a
r.bG(q,p,s)}}},
ht(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.x
return r.bu(r,t.aS.a(new A.ep(s)),t.H,t.S,t.z)},
cx(a){var s
if(t.C.b(a)){s=a.gaj()
if(s!=null)return s}return B.m},
ji(a,b){var s=$.x
if(s===B.h)return null
s.cl(s,a,b)
return null},
jj(a,b){if($.x!==B.h)A.ji(a,b)
if(b==null)if(t.C.b(a)){b=a.gaj()
if(b==null){A.fS(a,B.m)
b=B.m}}else b=B.m
else if(t.C.b(a))A.fS(a,b)
return new A.Q(a,b)},
fa(a,b,c){var s,r,q,p,o,n={},m=n.a=a
for(s=t._;r=m.a,(r&4)!==0;m=a){a=s.a(m.c)
n.a=a}if(m===b){s=A.iB()
b.aJ(new A.Q(new A.Z(!0,m,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=m.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=m
m.bs(p)
return}if(!c)if(b.c==null)m=(s&16)===0||q!==0
else m=!1
else m=!0
if(m){p=b.aq()
b.am(n.a)
A.aS(b,p)
return}b.a^=2
o=b.b
o.ac(o,new A.e0(n,b))},
aS(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=e.a=a
for(s=t.n,r=t.F;;){q={}
p=d.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(d.c)
d=d.b
d.bm(d,m.a,m.b)}return}q.a=b
l=b.a
for(d=b;l!=null;d=l,l=k){d.a=null
A.aS(e.a,d)
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
if((d&15)===8)new A.e4(q,e,n).$0()
else if(o){if((d&1)!==0)new A.e3(q,j).$0()}else if((d&2)!==0)new A.e2(e,q).$0()
if(h!=null)$.x=h
d=q.c
if(d instanceof A.B){p=q.a.$ti
p=p.h("a7<2>").b(d)||!p.y[1].b(d)}else p=!1
if(p){g=q.a.b
if((d.a&24)!==0){f=r.a(g.c)
g.c=null
b=g.ar(f)
g.a=d.a&30|g.a&1
g.c=d.c
e.a=d
continue}else A.fa(d,g,!0)
return}}g=q.a.b
f=r.a(g.c)
g.c=null
b=g.ar(f)
d=q.b
p=q.c
if(!d){g.$ti.c.a(p)
g.a=8
g.c=p}else{s.a(p)
g.a=g.a&1|16
g.c=p}e.a=g
d=g}},
hq(a,b){var s=t.Q
if(s.b(a))return b.bu(b,s.a(a),t.z,t.K,t.l)
s=t.v
if(s.b(a))return b.bv(b,s.a(a),t.z,t.K)
throw A.c(A.bL(a,"onError",u.c))},
jw(){var s,r
for(s=$.aX;s!=null;s=$.aX){$.bI=null
r=s.b
$.aX=r
if(r==null)$.bH=null
s.a.$0()}},
jE(){$.fh=!0
try{A.jw()}finally{$.bI=null
$.fh=!1
if($.aX!=null)$.fx().$1(A.hv())}},
hs(a){var s=new A.cm(a),r=$.bH
if(r==null){$.aX=$.bH=s
if(!$.fh)$.fx().$1(A.hv())}else $.bH=r.b=s},
jB(a){var s,r,q,p=$.aX
if(p==null){A.hs(a)
$.bI=$.bH
return}s=new A.cm(a)
r=$.bI
if(r==null){s.b=p
$.aX=$.bI=s}else{q=r.b
s.b=q
$.bI=r.b=s
if(q==null)$.bH=s}},
kk(a,b){A.fl(a,"stream",t.K)
return new A.ct(b.h("ct<0>"))},
jz(a,b){A.jB(new A.eo(a,b))},
jA(a,b){if(B.h!==a)b=a.cP(b,t.H)
A.hs(b)},
dT:function dT(a){this.a=a},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a){this.a=a},
dV:function dV(a){this.a=a},
ee:function ee(){},
ef:function ef(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.a=a
this.b=!1
this.$ti=b},
ek:function ek(a){this.a=a},
el:function el(a){this.a=a},
ep:function ep(a){this.a=a},
Q:function Q(a,b){this.a=a
this.b=b},
cn:function cn(){},
br:function br(a,b){this.a=a
this.$ti=b},
ac:function ac(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
B:function B(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
dY:function dY(a,b){this.a=a
this.b=b},
e1:function e1(a,b){this.a=a
this.b=b},
e0:function e0(a,b){this.a=a
this.b=b},
e_:function e_(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b){this.a=a
this.b=b},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a,b){this.a=a
this.b=b},
e6:function e6(a){this.a=a},
e3:function e3(a,b){this.a=a
this.b=b},
e2:function e2(a,b){this.a=a
this.b=b},
cm:function cm(a){this.a=a
this.b=null},
ct:function ct(a){this.$ti=a},
dQ:function dQ(){},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function eo(a,b){this.a=a
this.b=b},
h_(a,b){var s=a[b]
return s===a?null:s},
fc(a,b,c){if(c==null)a[b]=a
else a[b]=c},
fb(){var s=Object.create(null)
A.fc(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
f2(a,b,c){return b.h("@<0>").k(c).h("fM<1,2>").a(A.jS(a,new A.ap(b.h("@<0>").k(c).h("ap<1,2>"))))},
ie(a,b){return new A.ap(a.h("@<0>").k(b).h("ap<1,2>"))},
ig(a){return new A.aw(a.h("aw<0>"))},
fN(a){return new A.aw(a.h("aw<0>"))},
fd(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
iJ(a,b,c){var s=new A.ax(a,b,c.h("ax<0>"))
s.c=a.e
return s},
fO(a,b){var s,r,q=A.ig(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.X)(a),++r)q.j(0,b.a(a[r]))
return q},
fP(a){var s,r
if(A.fq(a))return"{...}"
s=new A.aQ("")
try{r={}
B.a.j($.P,a)
s.a+="{"
r.a=!0
a.a9(0,new A.cM(r,s))
s.a+="}"}finally{if(0>=$.P.length)return A.j($.P,-1)
$.P.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bs:function bs(){},
aT:function aT(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
bt:function bt(a,b){this.a=a
this.$ti=b},
bu:function bu(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aw:function aw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cs:function cs(a){this.a=a
this.b=null},
ax:function ax(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
u:function u(){},
y:function y(){},
cM:function cM(a,b){this.a=a
this.b=b},
aP:function aP(){},
bz:function bz(){},
jx(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.a5(r)
q=A.eZ(String(s),null)
throw A.c(q)}q=A.em(p)
return q},
em(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.cq(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.em(a[s])
return a},
fK(a,b,c){return new A.bb(a,b)},
j9(a){return a.c3()},
iH(a,b){return new A.e8(a,[],A.jO())},
iI(a,b,c){var s,r=new A.aQ(""),q=A.iH(r,b)
q.aG(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
cq:function cq(a,b){this.a=a
this.b=b
this.c=null},
cr:function cr(a){this.a=a},
bQ:function bQ(){},
bS:function bS(){},
bb:function bb(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
cG:function cG(){},
cI:function cI(a){this.b=a},
cH:function cH(a){this.a=a},
e9:function e9(){},
ea:function ea(a,b){this.a=a
this.b=b},
e8:function e8(a,b,c){this.c=a
this.a=b
this.b=c},
fp(a){var s=A.f6(a,null)
if(s!=null)return s
throw A.c(A.eZ(a,null))},
i5(a,b){a=A.D(a,new Error())
if(a==null)a=A.bG(a)
a.stack=b.i(0)
throw a},
as(a,b,c,d){var s,r=c?J.i9(a,d):J.i8(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ih(a,b,c){var s,r=A.f([],c.h("o<0>"))
for(s=J.eV(a);s.p();)B.a.j(r,c.a(s.gq()))
r.$flags=1
return r},
bd(a,b){var s,r
if(Array.isArray(a))return A.f(a.slice(0),b.h("o<0>"))
s=A.f([],b.h("o<0>"))
for(r=J.eV(a);r.p();)B.a.j(s,r.gq())
return s},
f3(a,b){var s=A.ih(a,!1,b)
s.$flags=3
return s},
dA(a){return new A.c0(a,A.fJ(a,!1,!0,!1,!1,""))},
fV(a,b,c){var s=J.eV(b)
if(!s.p())return a
if(c.length===0){do a+=A.q(s.gq())
while(s.p())}else{a+=A.q(s.gq())
while(s.p())a=a+c+A.q(s.gq())}return a},
iB(){return A.b_(new Error())},
i4(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
fE(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bU(a){if(a>=10)return""+a
return"0"+a},
bV(a){if(typeof a=="number"||A.en(a)||a==null)return J.bK(a)
if(typeof a=="string")return JSON.stringify(a)
return A.fR(a)},
i6(a,b){A.fl(a,"error",t.K)
A.fl(b,"stackTrace",t.l)
A.i5(a,b)},
bN(a){return new A.bM(a)},
aF(a,b){return new A.Z(!1,null,b,a)},
bL(a,b,c){return new A.Z(!0,a,b,c)},
f7(a,b){return new A.bm(null,null,!0,a,b,"Value not in range")},
aO(a,b,c,d,e){return new A.bm(b,c,!0,a,d,"Invalid value")},
ix(a,b,c){if(0>a||a>c)throw A.c(A.aO(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.aO(b,a,c,"end",null))
return b}return c},
iw(a,b){if(a<0)throw A.c(A.aO(a,0,null,b,null))
return a},
fF(a,b,c,d){return new A.bW(b,!0,a,d,"Index out of range")},
f9(a){return new A.bq(a)},
fY(a){return new A.cj(a)},
fU(a){return new A.bp(a)},
R(a){return new A.bR(a)},
eZ(a,b){return new A.b5(a,b)},
i7(a,b,c){var s,r
if(A.fq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.f([],t.s)
B.a.j($.P,a)
try{A.jv(a,s)}finally{if(0>=$.P.length)return A.j($.P,-1)
$.P.pop()}r=A.fV(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
f_(a,b,c){var s,r
if(A.fq(a))return b+"..."+c
s=new A.aQ(b)
B.a.j($.P,a)
try{r=s
r.a=A.fV(r.a,a,", ")}finally{if(0>=$.P.length)return A.j($.P,-1)
$.P.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jv(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.p())return
s=A.q(l.gq())
B.a.j(b,s)
k+=s.length+2;++j}if(!l.p()){if(j<=5)return
if(0>=b.length)return A.j(b,-1)
r=b.pop()
if(0>=b.length)return A.j(b,-1)
q=b.pop()}else{p=l.gq();++j
if(!l.p()){if(j<=4){B.a.j(b,A.q(p))
return}r=A.q(p)
if(0>=b.length)return A.j(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq();++j
for(;l.p();p=o,o=n){n=l.gq();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.j(b,-1)
k-=b.pop().length+2;--j}B.a.j(b,"...")
return}}q=A.q(p)
r=A.q(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.j(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.j(b,m)
B.a.j(b,q)
B.a.j(b,r)},
f4(a,b,c,d){var s
if(B.f===c){s=B.b.gn(a)
b=J.Y(b)
return A.dG(A.a9(A.a9($.cw(),s),b))}if(B.f===d){s=B.b.gn(a)
b=J.Y(b)
c=J.Y(c)
return A.dG(A.a9(A.a9(A.a9($.cw(),s),b),c))}s=B.b.gn(a)
b=J.Y(b)
c=J.Y(c)
d=J.Y(d)
d=A.dG(A.a9(A.a9(A.a9(A.a9($.cw(),s),b),c),d))
return d},
ik(a){var s,r,q=$.cw()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.X)(a),++r)q=A.a9(q,J.Y(a[r]))
return A.dG(q)},
bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(){},
v:function v(){},
bM:function bM(a){this.a=a},
aa:function aa(){},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bm:function bm(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bW:function bW(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bq:function bq(a){this.a=a},
cj:function cj(a){this.a=a},
bp:function bp(a){this.a=a},
bR:function bR(a){this.a=a},
bo:function bo(){},
dX:function dX(a){this.a=a},
b5:function b5(a,b){this.a=a
this.b=b},
e:function e(){},
z:function z(){},
i:function i(){},
cu:function cu(){},
aQ:function aQ(a){this.a=a},
dx:function dx(a){this.a=a},
az(a){var s
if(typeof a=="function")throw A.c(A.aF("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.j7,a)
s[$.eT()]=a
return s},
U(a){var s
if(typeof a=="function")throw A.c(A.aF("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.j8,a)
s[$.eT()]=a
return s},
j7(a){return t.Z.a(a).$0()},
j8(a,b,c){t.Z.a(a)
if(A.m(c)>=1)return a.$1(b)
return a.$0()},
hp(a){return a==null||A.en(a)||typeof a=="number"||typeof a=="string"||t.G.b(a)||t.bX.b(a)||t.ca.b(a)||t.W.b(a)||t.c0.b(a)||t.k.b(a)||t.bk.b(a)||t.D.b(a)||t.q.b(a)||t.J.b(a)||t.Y.b(a)},
k1(a){if(A.hp(a))return a
return new A.ez(new A.aT(t.A)).$1(a)},
eI(a,b){var s=new A.B($.x,b.h("B<0>")),r=new A.br(s,b.h("br<0>"))
a.then(A.bJ(new A.eJ(r,b),1),A.bJ(new A.eK(r),1))
return s},
ho(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
hx(a){if(A.ho(a))return a
return new A.eq(new A.aT(t.A)).$1(a)},
ez:function ez(a){this.a=a},
eJ:function eJ(a,b){this.a=a
this.b=b},
eK:function eK(a){this.a=a},
eq:function eq(a){this.a=a},
ec:function ec(){this.b=this.a=0},
ai(a,b){var s=A.f5(a),r=b.a,q=b.b,p=A.bd(b.c,t.L)
return new A.a0(s,r,q,p,b.d,b.e,b.f)},
il(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!(a instanceof A.y))return g
s=a.m(0,"name")
r=a.m(0,"bpm")
q=a.m(0,"meter")
if(typeof s!="string"||B.c.aa(s).length===0)return g
if(typeof r!="number"||typeof q!="string")return g
p=A.bg(q)
if(p==null)return g
o=a.m(0,"levels")
if(t.j.b(o)){n=A.f([],t.a)
for(m=o.length,l=0;l<o.length;o.length===m||(0,A.X)(o),++l)n.push(A.id(A.q(o[l])))
k=n}else k=p.a4()
if(k.length!==p.a)k=p.a4()
j=a.m(0,"swing")
n=A.f5(s)
m=B.b.u(B.d.D(r),20,300)
i=A.fW(A.q(a.m(0,"sub")))
h=typeof j=="number"?B.b.u(B.d.D(j),50,75):50
return new A.a0(n,m,p,k,i,h,J.a6(a.m(0,"dotted"),!0)&&p.gX())},
f5(a){var s=B.c.aa(a),r=A.dA("\\s+"),q=A.hF(s,r," ")
return q.length>40?B.c.Z(q,0,40):q},
a4(a){var s,r,q=A.f([],t.x)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.X)(a),++r)q.push(a[r].c3())
return B.l.bQ(q,null)},
hy(a){var s,r,q,p,o,n,m
if(a==null||a.length===0)return A.f([],t.e)
s=null
try{s=B.l.bP(a,null)}catch(r){if(A.a5(r) instanceof A.b5)return A.f([],t.e)
else throw r}if(!t.j.b(s))return A.f([],t.e)
q=A.f([],t.e)
for(p=s,o=p.length,n=0;n<p.length;p.length===o||(0,A.X)(p),++n){m=A.il(p[n])
if(m!=null)q.push(m)}return q},
kc(a,b){var s,r,q,p,o=A.f([b],t.e)
for(s=a.length,r=b.a,q=0;q<a.length;a.length===s||(0,A.X)(a),++q){p=a[q]
if(p.a.toLowerCase()!==r.toLowerCase())o.push(p)}return o},
k8(){var s="4/4",r=new A.eM()
return A.f([r.$4$sub("Rock eighths",100,s,B.t),r.$4$sub("Funk sixteenths",92,s,B.r),r.$5$sub$swing("Swing",140,s,B.t,67),r.$4$dotted("Shuffle 12/8",72,"12/8",!0),r.$3("Jazz waltz",150,"3/4"),r.$4$sub("Songo",112,s,B.r),r.$3("Odd: 7/8",180,"7/8:2+2+3")],t.e)},
a0:function a0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
eM:function eM(){},
ft(a){return B.a.b4($.fy(),new A.eB(a),new A.eC())},
fv(a){return B.a.d_($.fy(),new A.eG(a),new A.eH())},
id(a){return B.a.b4(B.q,new A.cJ(a),new A.cK())},
fW(a){return B.a.b4(B.B,new A.dE(a),new A.dF())},
au(a,b,c){var s=c==null?A.ij(a,b):c
s=new A.bf(a,b,A.f3(s,t.S))
s.c7(a,b,c)
return s},
ij(a,b){var s
if(b<8||a<5)return A.as(a,1,!1,t.S)
if(B.b.ab(a,3)===0)return A.as(B.b.G(a,3),3,!1,t.S)
if((a&1)===1){s=t.S
s=A.bd(A.as(B.b.G(a-3,2),2,!1,s),s)
s.push(3)
return s}return A.as(B.b.G(a,2),2,!1,t.S)},
bg(a){var s,r,q,p,o,n,m,l,k,j,i=A.dA("^\\s*(\\d+)\\s*/\\s*(\\d+)\\s*(?::\\s*([\\d+\\s]+))?$").cU(a)
if(i==null)return null
p=i.b
if(1>=p.length)return A.j(p,1)
o=p[1]
o.toString
s=A.fp(o)
if(2>=p.length)return A.j(p,2)
o=p[2]
o.toString
r=A.fp(o)
q=null
if(3>=p.length)return A.j(p,3)
n=p[3]
if(n!=null){p=A.f([],t.t)
for(o=n.split("+"),m=o.length,l=0;l<m;++l){k=A.f6(B.c.aa(o[l]),null)
if(k!=null)p.push(k)}q=p}try{p=A.au(s,r,q)
return p}catch(j){if(A.a5(j) instanceof A.Z)return null
else throw j}},
iA(){return new A.dD()},
fj(a){var s,r=0
for(;;){s=r+1
if(!(s<10&&a>=B.e[s].a[0]))break
r=s}return r},
eB:function eB(a){this.a=a},
eC:function eC(){},
eG:function eG(a){this.a=a},
eH:function eH(){},
N:function N(a,b,c){this.c=a
this.a=b
this.b=c},
cJ:function cJ(a){this.a=a},
cK:function cK(){},
av:function av(a,b){this.a=a
this.b=b},
F:function F(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
dE:function dE(a){this.a=a},
dF:function dF(){},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(){},
cO:function cO(){},
cR:function cR(){},
cS:function cS(){},
cP:function cP(){},
cQ:function cQ(){},
cB:function cB(a,b,c){var _=this
_.a=96
_.b=a
_.c=b
_.d=c
_.e=50
_.f=!1},
dD:function dD(){var _=this
_.a=!1
_.c=_.b=4
_.d=140},
cA:function cA(){this.a=!1
this.c=this.b=2},
b3:function b3(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=0},
dH:function dH(a){this.c=a},
d(a,b){var s=A.T(A.b(v.G.document).getElementById(a))
s.toString
return b.a(s)},
K(a,b,c){var s=A.b(A.b(v.G.document).createElement(a))
if(b!=null)s.className=b
if(c!=null)s.textContent=c
return s},
p(a,b,c){return a.addEventListener(b,A.U(new A.eF(c)))},
hC(a,b){return A.af(v.G,"addEventListener",a,A.U(new A.eE(b)),t.X)},
fr(a){var s,r,q,p,o=null
try{s=A.T(v.G.localStorage)
q=s
r=q==null?o:A.af(q,"getItem",a,o,t.X)
q=r!=null&&typeof r==="string"?A.r(r):o
return q}catch(p){return o}},
W(a,b){var s,r,q
try{s=A.T(v.G.localStorage)
r=s
if(r!=null)A.af(r,"setItem",a,b,t.X)}catch(q){}},
fu(){var s=A.b(v.G.navigator).audioSession
if(t.m.b(s))s.type="playback"},
kd(a){var s
try{A.A(A.b(v.G.navigator).vibrate(a))}catch(s){}},
k7(){var s,r,q,p,o,n=A.b(v.G.navigator).serviceWorker,m=t.m
if(!m.b(n))return
try{s=A.af(A.b(n),"register","sw.js",null,m)
m=A.eI(s,t.X)
r=new A.eL()
q=m.$ti
p=$.x
if(p!==B.h)r=A.hq(r,p)
m.ak(new A.ac(new A.B(p,q),2,null,r,q.h("ac<1,1>")))}catch(o){}},
kf(){var s=v.G,r=A.T(A.b(s.document).getElementById("themeToggle")),q=A.b(A.b(s.document).documentElement)
if(r==null)return
s=new A.eS(q,r)
A.p(r,"click",new A.eR(q,s))
s.$0()},
ke(){var s,r,q,p={},o=v.G,n=A.T(A.b(o.document).getElementById("installApp")),m=A.T(A.b(o.document).getElementById("ios-install-tip")),l=A.b(o.navigator)
if(A.A(A.b(o.matchMedia("(display-mode: standalone)")).matches)||J.a6(A.hx(l.standalone),!0))return
p.a=null
if(n!=null){A.af(o,"addEventListener","beforeinstallprompt",A.U(new A.eO(p,n)),t.X)
A.p(n,"click",new A.eP(p,n))
A.hC("appinstalled",new A.eQ(n))}s=A.r(l.userAgent)
p=A.hb(l.maxTouchPoints)
r=p==null?null:A.m(p)
if(r==null)r=0
p=A.dA("iPhone|iPad|iPod")
if(!p.b.test(s))q=B.c.U(s,"Macintosh")&&r>1
else q=!0
if(m!=null&&q)m.hidden=!1},
eF:function eF(a){this.a=a},
eE:function eE(a){this.a=a},
dO:function dO(){this.a=null
this.b=!1},
dP:function dP(a){this.a=a},
eL:function eL(){},
eS:function eS(a,b){this.a=a
this.b=b},
eR:function eR(a,b){this.a=a
this.b=b},
eO:function eO(a,b){this.a=a
this.b=b},
eP:function eP(a,b){this.a=a
this.b=b},
eQ:function eQ(a){this.a=a},
k3(){var s,r,q,p,o
A.kf()
A.ke()
A.k7()
s=v.G
r=A.T(A.b(s.document).getElementById("metro"))
if(r==null)return
if(!("AudioContext" in s)){s=A.T(A.b(s.document).getElementById("no-audio"))
if(s!=null)s.hidden=!1
return}s=A.au(4,4,null)
q=A.au(4,4,null)
q=q.a4()
p=t.m
o=new A.c4(new A.cB(s,q,B.i),A.iA(),new A.cA(),A.d("bpm",p),A.d("bpm-range",p),A.d("tempo-unit",p),A.d("tempo-word",p),A.d("start",p),A.d("transport",p),A.d("q-start",p),A.d("q-bpm",p),A.d("flash",p),A.d("position",p),A.d("grid",p),A.d("meter-beats",p),A.d("meter-unit",p),A.d("meter-groups",p),A.d("groups-row",p),A.d("meter-quick",p),A.d("dotted-row",p),A.d("dotted",p),A.d("sub",p),A.d("swing-row",p),A.d("swing",p),A.d("swing-out",p),A.d("sound",p),A.d("volume",p),A.d("sub-volume",p),A.d("vibrate-row",p),A.d("vibrate",p),A.d("big-flash",p),A.d("count-in",p),A.d("tempo-range",p),A.d("tempo-meaning",p),A.d("bpm-prev",p),A.d("bpm-next",p),A.d("status",p),A.d("my-presets",p),A.d("presets-empty",p),A.d("preset-undo",p),A.d("preset-undo-text",p),A.d("preset-undo-btn",p),A.d("speed-progress",p),A.d("starter-presets",p),A.d("preset-name",p),A.f([],t.h),A.f([],t.O),A.f([],t.d),new A.dH(A.f([],t.w)),new A.dO(),A.f([],t.e))
o.dc()
r.hidden=!1
o.b9()},
hh(a){var s,r=A.b(a.children),q=A.m(A.J(r.length)),p=A.f([],t.O)
for(s=0;s<q;++s)p.push(A.b(A.fH(r,"item",s,null,null,null)))
return p},
jW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=A.au(a,b,A.as(a,1,!1,t.S))
if(b<8||a<4)return A.f([A.au(a,b,null)],t.c)
s=A.fN(t.N)
r=t.t
new A.eu(s).$2(a,A.f([],r))
q=A.au(a,b,null)
p=A.f([q],t.c)
for(o=A.iJ(s,s.r,s.$ti.c),n=q.c,m=o.$ti.c;o.p();){l=o.d
if(l==null)l=m.a(l)
if(l!==B.a.R(n,"+")){k=A.f([],r)
for(l=l.split("+"),j=l.length,i=0;i<j;++i)k.push(A.fp(l[i]))
p.push(A.au(a,b,k))}}p.push(h)
return p},
c4:function c4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1){var _=this
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
_.W=0.8
_.ad=0.6
_.af=_.ae=!1
_.N=0
_.bR=_.O=_.J=null
_.H=!1
_.az=0
_.bS=_.ah=_.aA=_.ag=null
_.a6=c6
_.aB=c7
_.bT=c8
_.aC=null
_.bU=-1
_.cT=c9
_.bW=_.bV=null
_.a7=d0
_.F=d1
_.aD=_.b1=null
_.b2=_.a8=$},
de:function de(a){this.a=a},
df:function df(a){this.a=a},
dg:function dg(a){this.a=a},
dp:function dp(a){this.a=a},
dq:function dq(a){this.a=a},
dr:function dr(a){this.a=a},
ds:function ds(a){this.a=a},
dt:function dt(a){this.a=a},
du:function du(a){this.a=a},
dv:function dv(a){this.a=a},
dw:function dw(a){this.a=a},
dh:function dh(a){this.a=a},
di:function di(a){this.a=a},
dj:function dj(a){this.a=a},
dk:function dk(a){this.a=a},
dl:function dl(a){this.a=a},
dm:function dm(a){this.a=a},
dn:function dn(a){this.a=a},
cV:function cV(a,b){this.a=a
this.b=b},
d3:function d3(a){this.a=a},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a){this.a=a},
d0:function d0(){},
d1:function d1(){},
d2:function d2(a,b){this.a=a
this.b=b},
da:function da(a){this.a=a},
d9:function d9(){},
cT:function cT(){},
cU:function cU(a,b){this.a=a
this.b=b},
dd:function dd(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
dc:function dc(a){this.a=a},
d7:function d7(a){this.a=a},
cW:function cW(a){this.a=a},
d5:function d5(a,b){this.a=a
this.b=b},
d6:function d6(a,b){this.a=a
this.b=b},
db:function db(a){this.a=a},
d4:function d4(a){this.a=a},
d8:function d8(a,b){this.a=a
this.b=b},
eu:function eu(a){this.a=a},
hG(a){return v.mangledGlobalNames[a]},
ka(a){throw A.D(A.fL(a),new Error())},
fw(){throw A.D(A.fL(""),new Error())},
fH(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else{s=a[b](c,d)
return s}},
af(a,b,c,d,e){return e.a(A.fH(a,b,c,d,null,null))}},B={}
var w=[A,J,B]
var $={}
A.f0.prototype={}
J.bX.prototype={
L(a,b){return a===b},
gn(a){return A.ce(a)},
i(a){return"Instance of '"+A.cf(a)+"'"},
gt(a){return A.aB(A.fg(this))}}
J.bZ.prototype={
i(a){return String(a)},
gn(a){return a?519018:218159},
gt(a){return A.aB(t.y)},
$in:1,
$iE:1}
J.b7.prototype={
L(a,b){return null==b},
i(a){return"null"},
gn(a){return 0},
$in:1}
J.b9.prototype={$it:1}
J.ah.prototype={
gn(a){return 0},
i(a){return String(a)}}
J.cd.prototype={}
J.aR.prototype={}
J.ag.prototype={
i(a){var s=a[$.hI()]
if(s==null)s=a[$.eT()]
if(s==null)return this.c6(a)
return"JavaScript function for "+J.bK(s)},
$iao:1}
J.b8.prototype={
gn(a){return 0},
i(a){return String(a)}}
J.ba.prototype={
gn(a){return 0},
i(a){return String(a)}}
J.o.prototype={
j(a,b){A.H(a).c.a(b)
a.$flags&1&&A.b2(a,29)
a.push(b)},
aF(a,b){a.$flags&1&&A.b2(a,"removeAt",1)
if(b<0||b>=a.length)throw A.c(A.f7(b,null))
return a.splice(b,1)[0]},
cN(a,b){var s
A.H(a).h("e<1>").a(b)
a.$flags&1&&A.b2(a,"addAll",2)
for(s=b.gv(b);s.p();)a.push(s.gq())},
T(a){a.$flags&1&&A.b2(a,"clear","clear")
a.length=0},
ai(a,b,c){var s=A.H(a)
return new A.a8(a,s.k(c).h("1(2)").a(b),s.h("@<1>").k(c).h("a8<1,2>"))},
R(a,b){var s,r=A.as(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.A(r,s,A.q(a[s]))
return r.join(b)},
cV(a,b,c,d){var s,r,q
d.a(b)
A.H(a).k(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.c(A.R(a))}return r},
b4(a,b,c){var s,r,q,p=A.H(a)
p.h("E(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.R(a))}p=c.$0()
return p},
d_(a,b,c){var s,r,q,p=A.H(a)
p.h("E(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=s-1;r>=0;--r){q=a[r]
if(b.$1(q))return q
if(s!==a.length)throw A.c(A.R(a))}p=c.$0()
return p},
V(a,b){if(!(b>=0&&b<a.length))return A.j(a,b)
return a[b]},
gb3(a){if(a.length>0)return a[0]
throw A.c(A.fG())},
gc_(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.fG())},
bK(a,b){var s,r
A.H(a).h("E(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.R(a))}return!1},
a5(a,b){var s,r
A.H(a).h("E(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.R(a))}return!0},
U(a,b){var s
for(s=0;s<a.length;++s)if(J.a6(a[s],b))return!0
return!1},
gbZ(a){return a.length!==0},
i(a){return A.f_(a,"[","]")},
gv(a){return new J.am(a,a.length,A.H(a).h("am<1>"))},
gn(a){return A.ce(a)},
gl(a){return a.length},
A(a,b,c){A.H(a).c.a(c)
a.$flags&2&&A.b2(a)
if(!(b>=0&&b<a.length))throw A.c(A.hz(a,b))
a[b]=c},
cY(a,b){var s
A.H(a).h("E(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
$ih:1,
$ie:1,
$il:1}
J.bY.prototype={
d8(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.cf(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.cF.prototype={}
J.am.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.X(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$ia3:1}
J.aH.prototype={
aZ(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.b.gaE(b)
if(this.gaE(a)===s)return 0
if(this.gaE(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaE(a){return a===0?1/a<0:a<0},
D(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.f9(""+a+".round()"))},
u(a,b,c){if(B.b.aZ(b,c)>0)throw A.c(A.jJ(b))
if(this.aZ(a,b)<0)return b
if(this.aZ(a,c)>0)return c
return a},
d5(a,b){var s
if(b>20)throw A.c(A.aO(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaE(a))return"-"+s
return s},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gn(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
ab(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
bc(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bF(a,b)},
G(a,b){return(a|0)===a?a/b|0:this.bF(a,b)},
bF(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.f9("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
bD(a,b){var s
if(a>0)s=this.cE(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cE(a,b){return b>31?0:a>>>b},
gt(a){return A.aB(t.o)},
$ik:1,
$iaE:1}
J.b6.prototype={
gt(a){return A.aB(t.S)},
$in:1,
$ia:1}
J.c_.prototype={
gt(a){return A.aB(t.i)},
$in:1}
J.aI.prototype={
Z(a,b,c){return a.substring(b,A.ix(b,c,a.length))},
aa(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.j(p,0)
if(p.charCodeAt(0)===133){s=J.ib(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.j(p,r)
q=p.charCodeAt(r)===133?J.ic(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
U(a,b){return A.k9(a,b,0)},
i(a){return a},
gn(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gt(a){return A.aB(t.N)},
gl(a){return a.length},
$in:1,
$idz:1,
$iw:1}
A.c3.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.dB.prototype={}
A.h.prototype={}
A.a_.prototype={
gv(a){var s=this
return new A.ar(s,s.gl(s),A.V(s).h("ar<a_.E>"))},
gP(a){return this.gl(this)===0},
ai(a,b,c){var s=A.V(this)
return new A.a8(this,s.k(c).h("1(a_.E)").a(b),s.h("@<a_.E>").k(c).h("a8<1,2>"))}}
A.ar.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s,r=this,q=r.a,p=J.hA(q),o=p.gl(q)
if(r.b!==o)throw A.c(A.R(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.V(q,s);++r.c
return!0},
$ia3:1}
A.at.prototype={
gv(a){var s=this.a
return new A.be(s.gv(s),this.b,A.V(this).h("be<1,2>"))},
gl(a){var s=this.a
return s.gl(s)}}
A.an.prototype={$ih:1}
A.be.prototype={
p(){var s=this,r=s.b
if(r.p()){s.a=s.c.$1(r.gq())
return!0}s.a=null
return!1},
gq(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$ia3:1}
A.a8.prototype={
gl(a){return J.eW(this.a)},
V(a,b){return this.b.$1(J.hU(this.a,b))}}
A.I.prototype={}
A.aW.prototype={$r:"+(1,2)",$s:1}
A.L.prototype={$r:"+(1,2,3,4)",$s:2}
A.bn.prototype={}
A.dI.prototype={
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
A.bl.prototype={
i(a){return"Null check operator used on a null value"}}
A.c1.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.ck.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.dy.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.b4.prototype={}
A.bA.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaj:1}
A.ae.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.hH(r==null?"unknown":r)+"'"},
$iao:1,
gdf(){return this},
$C:"$1",
$R:1,
$D:null}
A.bO.prototype={$C:"$0",$R:0}
A.bP.prototype={$C:"$2",$R:2}
A.ci.prototype={}
A.ch.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.hH(s)+"'"}}
A.aG.prototype={
L(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aG))return!1
return this.$_target===b.$_target&&this.a===b.a},
gn(a){return(A.eD(this.a)^A.ce(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cf(this.a)+"'")}}
A.cg.prototype={
i(a){return"RuntimeError: "+this.a}}
A.ap.prototype={
gl(a){return this.a},
gP(a){return this.a===0},
gS(){return new A.aq(this,this.$ti.h("aq<1>"))},
m(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cZ(b)},
cZ(a){var s,r,q=this.d
if(q==null)return null
s=this.cp(q,a)
r=this.bX(s,a)
if(r<0)return null
return s[r].b},
A(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.bd(s==null?m.b=m.aR():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.bd(r==null?m.c=m.aR():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aR()
p=J.Y(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.aI(b,c)]
else{n=m.bX(o,b)
if(n>=0)o[n].b=c
else o.push(m.aI(b,c))}}},
a9(a,b){var s,r,q=this
q.$ti.h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.R(q))
s=s.c}},
bd(a,b,c){var s,r=this.$ti
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.aI(b,c)
else s.b=c},
aI(a,b){var s=this,r=s.$ti,q=new A.cL(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
cp(a,b){return a[J.Y(b)&1073741823]},
bX(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1},
i(a){return A.fP(this)},
aR(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ifM:1}
A.cL.prototype={}
A.aq.prototype={
gl(a){return this.a.a},
gP(a){return this.a.a===0},
gv(a){var s=this.a
return new A.bc(s,s.r,s.e,this.$ti.h("bc<1>"))}}
A.bc.prototype={
gq(){return this.d},
p(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.R(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$ia3:1}
A.ev.prototype={
$1(a){return this.a(a)},
$S:7}
A.ew.prototype={
$2(a,b){return this.a(a,b)},
$S:14}
A.ex.prototype={
$1(a){return this.a(A.r(a))},
$S:15}
A.ad.prototype={
i(a){return this.bI(!1)},
bI(a){var s,r,q,p,o,n=this.cm(),m=this.aQ(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.j(m,q)
o=m[q]
l=a?l+A.fR(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
cm(){var s,r=this.$s
while($.ed.length<=r)B.a.j($.ed,null)
s=$.ed[r]
if(s==null){s=this.ce()
B.a.A($.ed,r,s)}return s},
ce(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.f(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.A(k,q,r[s])}}return A.f3(k,t.K)}}
A.aU.prototype={
aQ(){return[this.a,this.b]},
L(a,b){if(b==null)return!1
return b instanceof A.aU&&this.$s===b.$s&&J.a6(this.a,b.a)&&J.a6(this.b,b.b)},
gn(a){return A.f4(this.$s,this.a,this.b,B.f)}}
A.aV.prototype={
aQ(){return this.a},
L(a,b){if(b==null)return!1
return b instanceof A.aV&&this.$s===b.$s&&A.iS(this.a,b.a)},
gn(a){return A.f4(this.$s,A.ik(this.a),B.f,B.f)}}
A.c0.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
gcu(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.fJ(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
cU(a){var s=this.b.exec(a)
if(s==null)return null
return new A.eb(s)},
$idz:1,
$iiy:1}
A.eb.prototype={}
A.aK.prototype={
gt(a){return B.a4},
$in:1,
$ieX:1}
A.bj.prototype={}
A.c5.prototype={
gt(a){return B.a5},
$in:1,
$ieY:1}
A.aM.prototype={
gl(a){return a.length},
$iM:1}
A.bh.prototype={$ih:1,$ie:1,$il:1}
A.bi.prototype={$ih:1,$ie:1,$il:1}
A.aL.prototype={
gt(a){return B.a6},
$in:1,
$iaL:1,
$icy:1}
A.c6.prototype={
gt(a){return B.a7},
$in:1,
$icz:1}
A.c7.prototype={
gt(a){return B.a8},
$in:1,
$icC:1}
A.c8.prototype={
gt(a){return B.a9},
$in:1,
$icD:1}
A.c9.prototype={
gt(a){return B.aa},
$in:1,
$icE:1}
A.ca.prototype={
gt(a){return B.ac},
$in:1,
$idK:1}
A.cb.prototype={
gt(a){return B.ad},
$in:1,
$idL:1}
A.bk.prototype={
gt(a){return B.ae},
gl(a){return a.length},
$in:1,
$idM:1}
A.cc.prototype={
gt(a){return B.af},
gl(a){return a.length},
$in:1,
$idN:1}
A.bv.prototype={}
A.bw.prototype={}
A.bx.prototype={}
A.by.prototype={}
A.a1.prototype={
h(a){return A.bF(v.typeUniverse,this,a)},
k(a){return A.h8(v.typeUniverse,this,a)}}
A.cp.prototype={}
A.eg.prototype={
i(a){return A.O(this.a,null)}}
A.co.prototype={
i(a){return this.a}}
A.bB.prototype={$iaa:1}
A.dT.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:8}
A.dS.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:16}
A.dU.prototype={
$0(){this.a.$0()},
$S:4}
A.dV.prototype={
$0(){this.a.$0()},
$S:4}
A.ee.prototype={
c9(a,b){if(self.setTimeout!=null)self.setTimeout(A.bJ(new A.ef(this,b),0),a)
else throw A.c(A.f9("`setTimeout()` not found."))}}
A.ef.prototype={
$0(){this.b.$0()},
$S:0}
A.cl.prototype={
b_(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.bg(a)
else{s=r.a
if(q.h("a7<1>").b(a))s.bh(a)
else s.bk(a)}},
b0(a,b){var s
if(b==null)b=A.cx(a)
s=this.a
if(this.b)s.aL(new A.Q(a,b))
else s.aJ(new A.Q(a,b))}}
A.ek.prototype={
$1(a){return this.a.$2(0,a)},
$S:5}
A.el.prototype={
$2(a,b){this.a.$2(1,new A.b4(a,t.l.a(b)))},
$S:17}
A.ep.prototype={
$2(a,b){this.a(A.m(a),b)},
$S:18}
A.Q.prototype={
i(a){return A.q(this.a)},
$iv:1,
gaj(){return this.b}}
A.cn.prototype={
b0(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.fU("Future already completed"))
s.aJ(A.jj(a,b))},
bN(a){return this.b0(a,null)}}
A.br.prototype={
b_(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.fU("Future already completed"))
s.bg(r.h("1/").a(a))}}
A.ac.prototype={
d0(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.aV(s,t.bG.a(this.d),a.a,t.y,t.K)},
cX(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.cB(l,q,m,a.b,o,n,t.l)
else p=l.aV(l,t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.b7.b(A.a5(s))){if((r.c&1)!==0)throw A.c(A.aF("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.aF("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.B.prototype={
c2(a,b,c){var s,r,q,p=this.$ti
p.k(c).h("1/(2)").a(a)
s=$.x
if(s===B.h){if(b!=null&&!t.Q.b(b)&&!t.v.b(b))throw A.c(A.bL(b,"onError",u.c))}else{r=p.c
a=s.bv(s,c.h("@<0/>").k(r).h("1(2)").a(a),c.h("0/"),r)
if(b!=null)b=A.hq(b,s)}q=new A.B(s,c.h("B<0>"))
r=b==null?1:3
this.ak(new A.ac(q,r,a,b,p.h("@<1>").k(c).h("ac<1,2>")))
return q},
bG(a,b,c){var s,r=this.$ti
r.k(c).h("1/(2)").a(a)
s=new A.B($.x,c.h("B<0>"))
this.ak(new A.ac(s,19,a,b,r.h("@<1>").k(c).h("ac<1,2>")))
return s},
cD(a){this.a=this.a&1|16
this.c=a},
am(a){this.a=a.a&30|this.a&1
this.c=a.c},
ak(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.ak(a)
return}r.am(s)}q=r.b
q.ac(q,new A.dY(r,a))}},
bs(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.bs(a)
return}m.am(n)}l.a=m.ar(a)
s=m.b
s.ac(s,new A.e1(l,m))}},
aq(){var s=t.F.a(this.c)
this.c=null
return this.ar(s)},
ar(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bk(a){var s,r=this
r.$ti.c.a(a)
s=r.aq()
r.a=8
r.c=a
A.aS(r,s)},
cd(a){var s=this.aq()
this.am(a)
A.aS(this,s)},
aL(a){var s=this.aq()
this.cD(a)
A.aS(this,s)},
bg(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("a7<1>").b(a)){this.bh(a)
return}this.cb(a)},
cb(a){var s,r=this
r.$ti.c.a(a)
r.a^=2
s=r.b
s.ac(s,new A.e_(r,a))},
bh(a){A.fa(this.$ti.h("a7<1>").a(a),this,!1)
return},
aJ(a){var s
this.a^=2
s=this.b
s.ac(s,new A.dZ(this,a))},
$ia7:1}
A.dY.prototype={
$0(){A.aS(this.a,this.b)},
$S:0}
A.e1.prototype={
$0(){A.aS(this.b,this.a.a)},
$S:0}
A.e0.prototype={
$0(){A.fa(this.a.a,this.b,!0)},
$S:0}
A.e_.prototype={
$0(){this.a.bk(this.b)},
$S:0}
A.dZ.prototype={
$0(){this.a.aL(this.b)},
$S:0}
A.e4.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.bw(p,t.bd.a(q.d),t.z)}catch(o){s=A.a5(o)
r=A.b_(o)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
p=r
if(p==null)p=A.cx(q)
n=k.a
n.c=new A.Q(q,p)
q=n}q.b=!0
return}if(j instanceof A.B&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.B){m=k.b.a
l=new A.B(m.b,m.$ti)
j.c2(new A.e5(l,m),new A.e6(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.e5.prototype={
$1(a){this.a.cd(this.b)},
$S:8}
A.e6.prototype={
$2(a,b){A.bG(a)
t.l.a(b)
this.a.aL(new A.Q(a,b))},
$S:19}
A.e3.prototype={
$0(){var s,r,q,p,o,n,m,l,k
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
l=p.b.b
q.c=l.aV(l,o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(k){s=A.a5(k)
r=A.b_(k)
q=s
p=r
if(p==null)p=A.cx(q)
o=this.a
o.c=new A.Q(q,p)
o.b=!0}},
$S:0}
A.e2.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.d0(s)&&p.a.e!=null){p.c=p.a.cX(s)
p.b=!1}}catch(o){r=A.a5(o)
q=A.b_(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.cx(p)
m=l.b
m.c=new A.Q(p,n)
p=m}p.b=!0}},
$S:0}
A.cm.prototype={}
A.ct.prototype={}
A.dQ.prototype={
cP(a,b){return new A.dR(this,this.cz(this,b.h("0()").a(a),b),b)},
bm(a,b,c){var s,r,q,p,o,n,m,l
t.l.a(c)
s=null
if(s==null){A.jz(b,c)
return}r=s.gba()
q=r.gdg()
p=$.x
try{$.x=q
s.cW(r,r.gaT(),a,b,c)
$.x=p}catch(m){o=A.a5(m)
n=A.b_(m)
$.x=p
l=b===o?c:n
q.bm(r,o,l)}},
bw(a,b,c){var s,r,q
c.h("0()").a(b)
r=$.x
if(r===a)return b.$0()
s=r
$.x=a
try{r=b.$0()
return r}finally{$.x=s}q=null.gba()
return null.dh(q,q.gaT(),a,b)},
aV(a,b,c,d,e){var s,r,q
d.h("@<0>").k(e).h("1(2)").a(b)
e.a(c)
r=$.x
if(r===a)return b.$1(c)
s=r
$.x=a
try{r=b.$1(c)
return r}finally{$.x=s}q=null.gba()
return null.cW(q,q.gaT(),a,b,c)},
cB(a,b,c,d,e,f,g){var s,r,q
e.h("@<0>").k(f).k(g).h("1(2,3)").a(b)
f.a(c)
g.a(d)
r=$.x
if(r===a)return b.$2(c,d)
s=r
$.x=a
try{r=b.$2(c,d)
return r}finally{$.x=s}q=null.gba()
return null.di(q,q.gaT(),a,b,c,d)},
cz(a,b,c){c.h("0()").a(b)
return b},
bv(a,b,c,d){c.h("@<0>").k(d).h("1(2)").a(b)
return b},
bu(a,b,c,d,e){c.h("@<0>").k(d).k(e).h("1(2,3)").a(b)
return b},
cl(a,b,c){return null},
ac(a,b){A.jA(a,t.M.a(b))
return}}
A.dR.prototype={
$0(){var s=this.a
return s.bw(s,this.b,this.c)},
$S(){return this.c.h("0()")}}
A.eo.prototype={
$0(){A.i6(this.a,this.b)},
$S:0}
A.bs.prototype={
gl(a){return this.a},
gP(a){return this.a===0},
gS(){return new A.bt(this,this.$ti.h("bt<1>"))},
bO(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.cg(a)},
cg(a){var s=this.d
if(s==null)return!1
return this.a_(this.bj(s,a),a)>=0},
m(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.h_(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.h_(q,b)
return r}else return this.co(b)},
co(a){var s,r,q=this.d
if(q==null)return null
s=this.bj(q,a)
r=this.a_(s,a)
return r<0?null:s[r+1]},
A(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.bf(s==null?m.b=A.fb():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.bf(r==null?m.c=A.fb():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.fb()
p=A.eD(b)&1073741823
o=q[p]
if(o==null){A.fc(q,p,[b,c]);++m.a
m.e=null}else{n=m.a_(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
a9(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.bi()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.m(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.c(A.R(m))}},
bi(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.as(i.a,null,!1,t.z)
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
bf(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.fc(a,b,c)},
bj(a,b){return a[A.eD(b)&1073741823]}}
A.aT.prototype={
a_(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.bt.prototype={
gl(a){return this.a.a},
gP(a){return this.a.a===0},
gv(a){var s=this.a
return new A.bu(s,s.bi(),this.$ti.h("bu<1>"))}}
A.bu.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.R(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$ia3:1}
A.aw.prototype={
gv(a){var s=this,r=new A.ax(s,s.r,A.V(s).h("ax<1>"))
r.c=s.e
return r},
gl(a){return this.a},
U(a,b){var s
if((b&1073741823)===b){s=this.c
if(s==null)return!1
return t.U.a(s[b])!=null}else return this.cf(b)},
cf(a){var s=this.d
if(s==null)return!1
return this.a_(s[this.bl(a)],a)>=0},
j(a,b){var s,r,q=this
A.V(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.be(s==null?q.b=A.fd():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.be(r==null?q.c=A.fd():r,b)}else return q.ca(b)},
ca(a){var s,r,q,p=this
A.V(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.fd()
r=p.bl(a)
q=s[r]
if(q==null)s[r]=[p.aS(a)]
else{if(p.a_(q,a)>=0)return!1
q.push(p.aS(a))}return!0},
be(a,b){A.V(this).c.a(b)
if(t.U.a(a[b])!=null)return!1
a[b]=this.aS(b)
return!0},
aS(a){var s=this,r=new A.cs(A.V(s).c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
bl(a){return J.Y(a)&1073741823},
a_(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1}}
A.cs.prototype={}
A.ax.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
p(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.R(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$ia3:1}
A.u.prototype={
gv(a){return new A.ar(a,a.length,A.b0(a).h("ar<u.E>"))},
V(a,b){if(!(b>=0&&b<a.length))return A.j(a,b)
return a[b]},
gbZ(a){return a.length!==0},
ai(a,b,c){var s=A.b0(a)
return new A.a8(a,s.k(c).h("1(u.E)").a(b),s.h("@<u.E>").k(c).h("a8<1,2>"))},
i(a){return A.f_(a,"[","]")}}
A.y.prototype={
a9(a,b){var s,r,q,p=A.V(this)
p.h("~(y.K,y.V)").a(b)
for(s=this.gS(),s=s.gv(s),p=p.h("y.V");s.p();){r=s.gq()
q=this.m(0,r)
b.$2(r,q==null?p.a(q):q)}},
gl(a){var s=this.gS()
return s.gl(s)},
gP(a){var s=this.gS()
return s.gP(s)},
i(a){return A.fP(this)},
$iaJ:1}
A.cM.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:9}
A.aP.prototype={
ai(a,b,c){var s=A.V(this)
return new A.an(this,s.k(c).h("1(2)").a(b),s.h("@<1>").k(c).h("an<1,2>"))},
i(a){return A.f_(this,"{","}")},
$ih:1,
$ie:1}
A.bz.prototype={}
A.cq.prototype={
m(a,b){var s,r=this.b
if(r==null)return this.c.m(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.cw(b):s}},
gl(a){return this.b==null?this.c.a:this.an().length},
gP(a){return this.gl(0)===0},
gS(){if(this.b==null){var s=this.c
return new A.aq(s,s.$ti.h("aq<1>"))}return new A.cr(this)},
a9(a,b){var s,r,q,p,o=this
t.cQ.a(b)
if(o.b==null)return o.c.a9(0,b)
s=o.an()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.em(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.R(o))}},
an(){var s=t.aL.a(this.c)
if(s==null)s=this.c=A.f(Object.keys(this.a),t.s)
return s},
cw(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.em(this.a[a])
return this.b[a]=s}}
A.cr.prototype={
gl(a){return this.a.gl(0)},
V(a,b){var s=this.a
if(s.b==null)s=s.gS().V(0,b)
else{s=s.an()
if(!(b>=0&&b<s.length))return A.j(s,b)
s=s[b]}return s},
gv(a){var s=this.a
if(s.b==null){s=s.gS()
s=s.gv(s)}else{s=s.an()
s=new J.am(s,s.length,A.H(s).h("am<1>"))}return s}}
A.bQ.prototype={}
A.bS.prototype={}
A.bb.prototype={
i(a){var s=A.bV(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.c2.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.cG.prototype={
bP(a,b){var s=A.jx(a,this.gcR().a)
return s},
bQ(a,b){var s=A.iI(a,this.gcS().b,null)
return s},
gcS(){return B.O},
gcR(){return B.N}}
A.cI.prototype={}
A.cH.prototype={}
A.e9.prototype={
c5(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.Z(a,r,q)
r=q+1
o=A.G(92)
s.a+=o
o=A.G(117)
s.a+=o
o=A.G(100)
s.a+=o
o=p>>>8&15
o=A.G(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.G(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.G(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.Z(a,r,q)
r=q+1
o=A.G(92)
s.a+=o
switch(p){case 8:o=A.G(98)
s.a+=o
break
case 9:o=A.G(116)
s.a+=o
break
case 10:o=A.G(110)
s.a+=o
break
case 12:o=A.G(102)
s.a+=o
break
case 13:o=A.G(114)
s.a+=o
break
default:o=A.G(117)
s.a+=o
o=A.G(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.G(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.G(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.Z(a,r,q)
r=q+1
o=A.G(92)
s.a+=o
o=A.G(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.Z(a,r,m)},
aK(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.c2(a,null))}B.a.j(s,a)},
aG(a){var s,r,q,p,o=this
if(o.c4(a))return
o.aK(a)
try{s=o.b.$1(a)
if(!o.c4(s)){q=A.fK(a,null,o.gbr())
throw A.c(q)}q=o.a
if(0>=q.length)return A.j(q,-1)
q.pop()}catch(p){r=A.a5(p)
q=A.fK(a,r,o.gbr())
throw A.c(q)}},
c4(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.i(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.c5(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.aK(a)
q.dd(a)
s=q.a
if(0>=s.length)return A.j(s,-1)
s.pop()
return!0}else if(a instanceof A.y){q.aK(a)
r=q.de(a)
s=q.a
if(0>=s.length)return A.j(s,-1)
s.pop()
return r}else return!1},
dd(a){var s,r=this.c
r.a+="["
if(J.hV(a)){if(0>=a.length)return A.j(a,0)
this.aG(a[0])
for(s=1;s<a.length;++s){r.a+=","
this.aG(a[s])}}r.a+="]"},
de(a){var s,r,q,p,o,n,m=this,l={}
if(a.gP(a)){m.c.a+="{}"
return!0}s=a.gl(a)*2
r=A.as(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.a9(0,new A.ea(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.c5(A.r(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.j(r,n)
m.aG(r[n])}p.a+="}"
return!0}}
A.ea.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.A(s,r.a++,a)
B.a.A(s,r.a++,b)},
$S:9}
A.e8.prototype={
gbr(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.bT.prototype={
L(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.bT)if(this.a===b.a)s=this.b===b.b
return s},
gn(a){return A.f4(this.a,this.b,B.f,B.f)},
i(a){var s=this,r=A.i4(A.iu(s)),q=A.bU(A.is(s)),p=A.bU(A.io(s)),o=A.bU(A.ip(s)),n=A.bU(A.ir(s)),m=A.bU(A.it(s)),l=A.fE(A.iq(s)),k=s.b,j=k===0?"":A.fE(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"}}
A.dW.prototype={
i(a){return this.aN()}}
A.v.prototype={
gaj(){return A.im(this)}}
A.bM.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bV(s)
return"Assertion failed"}}
A.aa.prototype={}
A.Z.prototype={
gaP(){return"Invalid argument"+(!this.a?"(s)":"")},
gaO(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gaP()+q+o
if(!s.a)return n
return n+s.gaO()+": "+A.bV(s.gb5())},
gb5(){return this.b}}
A.bm.prototype={
gb5(){return A.hc(this.b)},
gaP(){return"RangeError"},
gaO(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.bW.prototype={
gb5(){return A.m(this.b)},
gaP(){return"RangeError"},
gaO(){if(A.m(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.bq.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.cj.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bp.prototype={
i(a){return"Bad state: "+this.a}}
A.bR.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bV(s)+"."}}
A.bo.prototype={
i(a){return"Stack Overflow"},
gaj(){return null},
$iv:1}
A.dX.prototype={
i(a){return"Exception: "+this.a}}
A.b5.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.c.Z(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.e.prototype={
ai(a,b,c){var s=A.V(this)
return A.ii(this,s.k(c).h("1(e.E)").a(b),s.h("e.E"),c)},
gl(a){var s,r=this.gv(this)
for(s=0;r.p();)++s
return s},
V(a,b){var s,r
A.iw(b,"index")
s=this.gv(this)
for(r=b;s.p();){if(r===0)return s.gq();--r}throw A.c(A.fF(b,b-r,this,"index"))},
i(a){return A.i7(this,"(",")")}}
A.z.prototype={
gn(a){return A.i.prototype.gn.call(this,0)},
i(a){return"null"}}
A.i.prototype={$ii:1,
L(a,b){return this===b},
gn(a){return A.ce(this)},
i(a){return"Instance of '"+A.cf(this)+"'"},
gt(a){return A.jU(this)},
toString(){return this.i(this)}}
A.cu.prototype={
i(a){return""},
$iaj:1}
A.aQ.prototype={
gl(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iiC:1}
A.dx.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.ez.prototype={
$1(a){var s,r,q,p
if(A.hp(a))return a
s=this.a
if(s.bO(a))return s.m(0,a)
if(a instanceof A.y){r={}
s.A(0,a,r)
for(s=a.gS(),s=s.gv(s);s.p();){q=s.gq()
r[q]=this.$1(a.m(0,q))}return r}else if(t.R.b(a)){p=[]
s.A(0,a,p)
B.a.cN(p,J.hX(a,this,t.z))
return p}else return a},
$S:10}
A.eJ.prototype={
$1(a){return this.a.b_(this.b.h("0/?").a(a))},
$S:5}
A.eK.prototype={
$1(a){if(a==null)return this.a.bN(new A.dx(a===undefined))
return this.a.bN(a)},
$S:5}
A.eq.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(A.ho(a))return a
s=this.a
a.toString
if(s.bO(a))return s.m(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.eN(A.aO(r,-864e13,864e13,"millisecondsSinceEpoch",null))
return new A.bT(r,0,!0)}if(a instanceof RegExp)throw A.c(A.aF("structured clone of RegExp",null))
if(a instanceof Promise)return A.eI(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.ie(p,p)
s.A(0,a,o)
n=Object.keys(a)
m=[]
for(s=n.length,l=0;l<n.length;n.length===s||(0,A.X)(n),++l)m.push(A.hx(n[l]))
for(k=0;k<n.length;++k){j=n[k]
if(!(k<m.length))return A.j(m,k)
i=m[k]
if(j!=null)o.A(0,i,this.$1(a[j]))}return o}if(a instanceof Array){h=a
o=[]
s.A(0,a,o)
g=A.m(a.length)
for(k=0;k<g;++k){if(!(k<h.length))return A.j(h,k)
o.push(this.$1(h[k]))}return o}return a},
$S:10}
A.ec.prototype={
c8(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.a0()
l.a0()
l.a0()
l.a0()},
a0(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.b.G(o-n+(q-p)+(m-r),4294967296)>>>0},
d2(){var s,r=this
r.a0()
s=r.a
r.a0()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992}}
A.a0.prototype={
bL(a){var s,r,q=this
a.a=q.b
s=q.c
a.b=s
r=A.bd(q.d,t.L)
a.sc0(r)
a.d=q.e
a.e=q.f
a.f=q.r&&s.gX()},
gbb(){var s,r,q=this,p=q.r?" (dotted quarter)":""
p=A.f([""+q.b+" BPM"+p,q.c.gY()],t.s)
s=q.e
if(s!==B.i){r=A.dA(" \\(\\d\\)")
p.push(A.hF(s.d,r,""))}if((s.c&1)===0&&q.f>50)p.push("swing "+q.f+"%")
return B.a.R(p," \xb7 ")},
c3(){var s,r,q,p=this,o=p.c.gM(),n=A.f([],t.s)
for(s=p.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.X)(s),++q)n.push(s[q].b)
return A.f2(["name",p.a,"bpm",p.b,"meter",o,"levels",n,"sub",p.e.b,"swing",p.f,"dotted",p.r],t.N,t.K)}}
A.eM.prototype={
$6$dotted$sub$swing(a,b,c,d,e,f){var s=A.bg(c)
return new A.a0(a,b,s,s.a4(),e,f,d)},
$3(a,b,c){return this.$6$dotted$sub$swing(a,b,c,!1,B.i,50)},
$4$sub(a,b,c,d){return this.$6$dotted$sub$swing(a,b,c,!1,d,50)},
$5$sub$swing(a,b,c,d,e){return this.$6$dotted$sub$swing(a,b,c,!1,d,e)},
$4$dotted(a,b,c,d){return this.$6$dotted$sub$swing(a,b,c,d,B.i,50)},
$S:20}
A.eB.prototype={
$1(a){return A.m(a)>this.a},
$S:1}
A.eC.prototype={
$0(){return 300},
$S:11}
A.eG.prototype={
$1(a){return A.m(a)<this.a},
$S:1}
A.eH.prototype={
$0(){return 20},
$S:11}
A.N.prototype={
aN(){return"Level."+this.b}}
A.cJ.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:21}
A.cK.prototype={
$0(){return B.n},
$S:22}
A.av.prototype={
aN(){return"Voice."+this.b}}
A.F.prototype={
aN(){return"Subdivision."+this.b}}
A.dE.prototype={
$1(a){return t.a2.a(a).b===this.a},
$S:23}
A.dF.prototype={
$0(){return B.i},
$S:24}
A.bf.prototype={
c7(a,b,c){var s,r=this.a
if(r<1||r>32)throw A.c(A.bL(r,"beats","must be 1 to 32"))
s=this.b
if(!B.a.U(B.p,s))throw A.c(A.bL(s,"unit","must be one of "+A.q(B.p)))
s=this.c
if(B.a.bK(s,new A.cN())||B.a.cV(s,0,new A.cO(),t.S)!==r)throw A.c(A.bL(c,"groups","must add up to "+r))},
gX(){if(this.b>=8){var s=this.a
s=B.b.ab(s,3)===0&&s>3&&B.a.a5(this.c,new A.cR())}else s=!1
return s},
gaH(){var s,r,q,p,o,n=A.f([],t.t)
for(s=this.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
B.a.j(n,q)
q+=o}return n},
gY(){var s=this,r=s.c,q=B.a.a5(r,new A.cS())||s.gX(),p=""+s.a,o=""+s.b
return q?p+"/"+o:p+"/"+o+" ("+B.a.R(r,"+")+")"},
gM(){var s=this.c,r=""+this.a,q=""+this.b
return B.a.a5(s,new A.cP())?r+"/"+q:r+"/"+q+":"+B.a.R(s,"+")},
a4(){var s,r,q,p,o=this.gaH(),n=A.fO(o,A.H(o).c)
o=A.f([],t.a)
for(s=this.a,r=this.c,q=0;q<s;++q){if(q===0)p=B.y
else if(n.U(0,q))p=B.n
else p=B.a.a5(r,new A.cQ())?B.n:B.z
o.push(p)}return o},
L(a,b){if(b==null)return!1
return b instanceof A.bf&&b.gM()===this.gM()},
gn(a){return B.c.gn(this.gM())}}
A.cN.prototype={
$1(a){return A.m(a)<1},
$S:1}
A.cO.prototype={
$2(a,b){return A.m(a)+A.m(b)},
$S:25}
A.cR.prototype={
$1(a){return A.m(a)===3},
$S:1}
A.cS.prototype={
$1(a){return A.m(a)===1},
$S:1}
A.cP.prototype={
$1(a){return A.m(a)===1},
$S:1}
A.cQ.prototype={
$1(a){return A.m(a)===1},
$S:1}
A.cB.prototype={
gbM(){var s=60/this.a
return this.f&&this.b.gX()?s/3:s},
cQ(a){var s,r,q=this,p=q.gbM(),o=q.d.c,n=p/o
if((o&1)!==0||q.e===50)return n
s=n*2
r=B.b.u(q.e,50,75)/100
return(a&1)===0?s*r:s*(1-r)},
da(a,b){var s,r=this.c
if(!(a<r.length))return A.j(r,a)
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
sc0(a){this.c=t.B.a(a)}}
A.dD.prototype={
b6(a){var s,r=this,q=!1
if(r.a)if(r.c>=1){s=r.b
if(s!==0){q=r.d
q=s>0?B.b.u(B.b.D(q),20,300)>a:B.b.u(B.b.D(q),20,300)<a}}return q},
b8(a,b){var s,r,q,p=this
if(!p.b6(a))return a
s=B.b.u(B.b.D(p.d),20,300)
r=p.b
q=a+r*B.b.bc(b,p.c)
return B.b.u(B.d.D(r>0?Math.min(q,s):Math.max(q,s)),20,300)},
cO(a,b){var s,r=this
if(!r.b6(a)||r.b8(a,b)===B.b.u(B.b.D(r.d),20,300))return null
s=r.c
return s-B.b.ab(b,s)},
d3(a,b){var s,r,q,p,o,n,m=this
if(!m.a)return""
if(!m.b6(a)){s=m.b
if(s===0)s="Speed trainer: set a change other than 0 BPM."
else{r=m.d
s=s>0?"not above":"not below"
s="Speed trainer: the target ("+r+" BPM) is "+s+" the current tempo, so the tempo will stay put."}return s}q=m.b8(a,b)
p=m.cO(a,b)
if(p==null)return"Speed trainer: reached "+m.d+" BPM. Holding here."
s=m.b
o=s>0?"+":"\u2212"
r=m.d
n=p===1?"":"s"
return"Speed trainer: "+q+" \u2192 "+r+" BPM \xb7 next "+o+Math.abs(s)+" in "+A.q(p)+" bar"+n}}
A.cA.prototype={
bY(a){var s,r=this
if(!r.a||r.c<1||r.b<1)return!1
s=r.b
return B.b.ab(a,s+r.c)>=s}}
A.b3.prototype={
i(a){var s=this
return"Click("+B.d.d5(s.a,3)+", "+s.b.i(0)+", bar "+s.c+", cell "+s.d+"."+s.e+")"}}
A.dC.prototype={
b7(){var s,r,q=this
q.d=q.a.a
s=q.y===0&&q.z===0
r=q.x
q.e=s?r:r+1},
d1(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(g.r>0){s=g.a
r=s.b
q=r.c
p=r.gaH()
r=g.w
o=q.length
n=B.b.ab(r,o)
m=g.Q
l=n===0?B.j:B.o
k=g.f
r=B.b.bc(r,o)
if(!(n<p.length))return A.j(p,n)
j=p[n]
i=s.a
g.Q=m+s.gbM()*q[n];++g.w;--g.r
return new A.b3(m,l,-k+r,j,0,i,!0,n+1,o)}s=g.y
r=g.a
if(s>=r.b.a){s=g.z=g.y=0;++g.x}o=g.z
if(o>=r.d.c)o=g.z=0
if(s===0&&o===0&&g.b.a)r.a=g.b.b8(g.d,g.x-g.e)
h=g.c.bY(g.x)?B.k:r.da(g.y,g.z)
s=g.Q
o=g.x
m=g.y
l=g.z
k=r.a
g.Q=s+r.cQ(l)
if(++g.z>=r.d.c){g.z=0
if(++g.y>=r.b.a){g.y=0;++g.x}}return new A.b3(s,h,o,m,l,k,!1,0,0)}}
A.dH.prototype={
d4(a){var s=this.c
if(s.length!==0&&a-B.a.gc_(s)>2000)B.a.T(s)
B.a.j(s,a)
if(s.length>5)B.a.aF(s,0)
if(s.length<2)return null
return B.b.u(B.d.D(6e4/((B.a.gc_(s)-B.a.gb3(s))/(s.length-1))),20,300)}}
A.eF.prototype={
$1(a){return this.a.$0()},
$S:3}
A.eE.prototype={
$1(a){return this.a.$0()},
$S:3}
A.dO.prototype={
a3(){var s=0,r=A.hn(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$a3=A.ht(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:n.b=!0
m=A.b(v.G.navigator).wakeLock
k=t.m
if(!k.b(m)||n.a!=null){s=1
break}p=4
l=A.af(A.b(m),"request","screen",null,k)
s=7
return A.hd(A.eI(l,k),$async$a3)
case 7:k=b
n.a=k
k.toString
A.p(k,"release",new A.dP(n))
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
case 6:case 1:return A.hf(q,r)
case 2:return A.he(o.at(-1),r)}})
return A.hg($async$a3,r)},
c1(){var s,r
this.b=!1
s=this.a
this.a=null
if(s!=null)try{A.af(s,"release",null,null,t.X)}catch(r){}}}
A.dP.prototype={
$0(){return this.a.a=null},
$S:0}
A.eL.prototype={
$1(a){A.bG(a)
return null},
$S:26}
A.eS.prototype={
$0(){var s,r=A.ej(this.a.getAttribute("data-theme"))==="light",q=r?"Switch to dark theme":"Switch to light theme",p=this.b
p.setAttribute("aria-label",q)
p.setAttribute("title",q)
s=A.T(p.firstElementChild)
if(s!=null){p=r?"\u263e":"\u2600"
s.textContent=p}},
$S:0}
A.eR.prototype={
$0(){var s=this.a,r=A.ej(s.getAttribute("data-theme"))==="light"?"dark":"light"
s.setAttribute("data-theme",r)
A.W("ds-theme",r)
this.b.$0()},
$S:0}
A.eO.prototype={
$1(a){A.b(a)
A.af(a,"preventDefault",null,null,t.X)
this.a.a=a
this.b.hidden=!1},
$S:2}
A.eP.prototype={
$0(){var s=0,r=A.hn(t.H),q,p=2,o=[],n=this,m,l,k,j
var $async$$0=A.ht(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:l=n.a
k=l.a
if(k==null){s=1
break}l.a=null
p=4
l=t.X
A.af(k,"prompt",null,null,l)
s=7
return A.hd(A.eI(A.b(k.userChoice),l),$async$$0)
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
case 1:return A.hf(q,r)
case 2:return A.he(o.at(-1),r)}})
return A.hg($async$$0,r)},
$S:27}
A.eQ.prototype={
$0(){this.a.hidden=!0
return!0},
$S:0}
A.c4.prototype={
gI(){var s,r=this,q=r.d
if(q===$){s=r.a
q=r.d=new A.dC(s,r.b,r.c,s.a)}return q},
gaM(){var s,r=this,q=r.b2
if(q===$){s=A.U(r.gcj())
r.b2!==$&&A.fw()
r.b2=s
q=s}return q},
dc(){var s,r,q,p=this,o="input",n="change",m="click"
p.cA()
p.cn()
p.cc()
A.p(p.f,o,new A.de(p))
s=p.e
A.p(s,o,new A.df(p))
A.p(s,n,new A.dg(p))
s=t.m
p.ao(A.d("bpm-down",s),-1)
p.ao(A.d("bpm-up",s),1)
A.p(A.d("bpm-prev",s),m,new A.dp(p))
A.p(A.d("bpm-next",s),m,new A.dq(p))
r=p.gd6()
A.p(p.x,m,r)
q=p.gcH()
A.p(A.d("tap",s),m,q)
A.p(p.z,m,r)
A.p(A.d("q-tap",s),m,q)
p.ao(A.d("q-down",s),-1)
p.ao(A.d("q-up",s),1)
q=v.G
A.b(q.document).addEventListener("scroll",A.U(new A.dr(p)))
A.hC("resize",p.gd9())
r=p.gcs()
A.p(p.ay,n,r)
A.p(p.ch,n,r)
A.p(p.CW,n,new A.ds(p))
A.p(p.dx,n,new A.dt(p))
A.p(A.d("reset-accents",s),m,new A.du(p))
A.p(p.dy,n,new A.dv(p))
A.p(p.fx,o,new A.dw(p))
A.p(p.go,n,new A.dh(p))
A.p(p.id,o,new A.di(p))
A.p(p.k1,o,new A.dj(p))
if("vibrate" in A.b(q.navigator)){p.k2.hidden=!1
A.p(p.k3,n,new A.dk(p))}A.p(p.ok,n,new A.dl(p))
A.p(p.k4,n,new A.dm(p))
p.cM()
p.cL()
p.cK()
A.b(q.document).addEventListener("visibilitychange",A.U(new A.dn(p)))
p.bz()},
cn(){var s,r,q,p,o,n,m="option"
for(s=this.ay,r=1;r<=32;++r){q=""+r
p=A.K(m,null,q)
p.setAttribute("value",q)
s.appendChild(p)}for(s=this.ch,o=0;o<4;++o){q=""+B.p[o]
p=A.K(m,null,q)
p.setAttribute("value",q)
s.appendChild(p)}for(s=this.dy,o=0;o<8;++o){n=B.B[o]
q=A.K(m,null,n.d)
q.setAttribute("value",n.b)
s.appendChild(q)}},
cc(){var s,r,q,p,o,n
for(s=["4/4","3/4","2/4","5/4","6/8","7/8","9/8","12/8"],r=s.length,q=this.cy,p=0;p<r;++p){o=s[p]
n=A.K("button","chip",o)
n.setAttribute("type","button")
n.setAttribute("aria-label","Time signature "+o)
A.p(n,"click",new A.cV(this,o))
q.appendChild(n)}},
B(a){var s=B.c.aa(B.c.aa(a)),r=A.f6(s,null)
if(r==null)r=A.iv(s)
return r==null?null:B.d.D(r)},
ao(a,b){var s,r,q,p,o={}
o.a=o.b=null
s=o.c=0
r=new A.d3(o)
a.addEventListener("pointerdown",A.U(new A.cZ(o,this,r,b)))
for(q=["pointerup","pointercancel","pointerleave"],p=q.length;s<p;++s)a.addEventListener(q[s],A.U(new A.d_(r)))
q=A.U(new A.d0())
p=A.k1(A.f2(["passive",!1],t.N,t.y))
p.toString
a.addEventListener("touchstart",q,A.b(p))
a.addEventListener("contextmenu",A.U(new A.d1()))
a.addEventListener("click",A.U(new A.d2(this,b)))},
by(a,b){var s=this,r=s.a
r.a=B.b.u(B.b.D(a),20,300)
s.gI().b7()
s.bC(b)
if(!s.H)s.aw()
A.W("ds-last",A.a4(A.f([A.ai("last",r)],t.e)))},
E(a){return this.by(a,!1)},
bC(a){var s,r,q,p,o,n,m,l=this,k=l.a,j=l.bU=k.a,i=""+j
l.f.value=i
if(!a)l.e.value=i
s=A.fj(j)
if(!(s<10))return A.j(B.e,s)
l.w.textContent=B.e[s].a[1]
s=A.fj(j)
if(!(s<10))return A.j(B.e,s)
s=B.e[s].a
l.p2.textContent=s[2]+" (literally \u201c"+s[3]+"\u201d)"
r=A.fj(j)
s=r+1
q=s<10?B.e[s].a[0]-1:300
if(!(r<10))return A.j(B.e,r)
l.p1.textContent=""+B.e[r].a[0]+"\u2013"+q+" BPM"
p=A.fv(j)
o=A.ft(j)
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
if(k.f&&k.b.gX())m="dotted quarter"
else{switch(k.b.b){case 2:k="half note"
break
case 4:k="quarter note"
break
case 8:k="eighth note"
break
default:k="sixteenth note"
break}m=k}l.r.textContent="Beats per minute, counting each "+m},
a2(){return this.bC(!1)},
bE(){var s=this,r=v.G,q=s.cT.d4(A.J(A.b(r.performance).now())),p=s.bV
if(p!=null)r.clearTimeout(p)
if(q==null){s.C("Tap again in time with the beat.")
return}s.E(q)
s.bV=A.m(r.setTimeout(A.az(new A.da(s)),900))},
ct(){var s,r=this,q=r.B(A.r(r.ay.value))
if(q==null)q=4
s=r.B(A.r(r.ch.value))
r.aW(A.au(q,s==null?4:s,null))},
aW(a){var s=this,r=s.a,q=a.a===r.b.a&&B.a.R(a.c,"+")===B.a.R(r.b.c,"+")
if(!a.gX())r.f=!1
if(!q)r.c=a.a4()
r.b=a
s.bA()
s.al()
s.a2()
A.W("ds-last",A.a4(A.f([A.ai("last",r)],t.e)))},
bA(){var s,r,q,p,o,n,m,l=this,k=l.a,j=k.b,i=j.a,h=""+i
l.ay.value=h
s=j.b
r=""+s
l.ch.value=r
q=A.jW(i,s)
l.cx.hidden=q.length<2
s=l.CW
s.replaceChildren()
for(i=q.length,p=0;p<q.length;q.length===i||(0,A.X)(q),++p){o=q[p]
n=o.c
n=A.K("option",null,B.a.a5(n,new A.d9())?"Every beat":B.a.R(n," + "))
n.setAttribute("value",o.gM())
s.appendChild(n)}s.value=j.gM()
l.db.hidden=!j.gX()
l.dx.checked=k.f
for(k=A.hh(l.cy),i=k.length,r=h+"/"+r,p=0;p<k.length;k.length===i||(0,A.X)(k),++p){m=k[p]
if(A.r(m.textContent)===r){h=j.gM()
s=A.bg(r)
h=h===(s==null?null:s.gM())}else h=!1
m.setAttribute("aria-pressed",""+h)}},
al(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c="span",b=e.ax
b.replaceChildren()
s=e.aB
B.a.T(s)
r=e.bT
B.a.T(r)
e.aC=null
q=e.a
p=q.b.gaH()
o=A.fO(p,A.H(p).c)
n=!B.a.a5(q.b.c,new A.cT())
for(p=t.O,m=0;m<q.b.a;m=k){l=A.K("button","cell",d)
l.setAttribute("type","button")
if(n&&o.U(0,m)&&m>0)A.b(l.classList).add("group-start")
k=m+1
l.appendChild(A.K(c,"cell-num",""+k))
j=A.K(c,"cell-mark",d)
j.setAttribute("aria-hidden","true")
l.appendChild(j)
l.appendChild(A.K(c,"cell-level",d))
i=A.f([],p)
if(q.d.c>1){h=A.K(c,"cell-subs",d)
h.setAttribute("aria-hidden","true")
for(g=0;g<q.d.c;++g){f=A.K(c,g===0?"tick is-beat":"tick",d)
h.appendChild(f)
B.a.j(i,f)}l.appendChild(h)}B.a.j(r,i)
A.p(l,"click",new A.cU(e,m))
b.appendChild(l)
B.a.j(s,l)
e.bq(m)}e.ap(d)},
bq(a){var s,r,q,p,o,n=this.a.c
if(!(a<n.length))return A.j(n,a)
s=n[a]
n=this.aB
if(!(a<n.length))return A.j(n,a)
r=n[a]
for(q=0;q<4;++q){p=B.q[q]
A.A(A.b(r.classList).toggle("lv-"+p.b,p===s))}n=A.hh(r)
if(2>=n.length)return A.j(n,2)
o=s.c
n[2].textContent=o
r.setAttribute("aria-label","Beat "+(a+1)+", "+o+". Press to change.")},
aX(){var s,r=this,q=r.a
r.dy.value=q.d.b
r.fr.hidden=(q.d.c&1)!==0
r.fx.value=""+q.e
s=q.e
A:{if(50===s){q="Straight (50%)"
break A}if(s>=66&&s<=68){q="Triplet swing ("+s+"%)"
break A}if(75===s){q="Dotted feel (75%)"
break A}q=""+s+"%"
break A}r.fy.textContent=q},
cM(){var s,r,q=t.m,p=A.d("speed-on",q),o=A.d("speed-step",q),n=A.d("speed-every",q),m=A.d("speed-target",q),l=A.d("gap-on",q),k=A.d("gap-play",q),j=A.d("gap-mute",q),i=new A.dd(this,p,o,n,m,l,k,j)
for(q=[p,o,n,m,l,k,j],s=q.length,r=0;r<s;++r)A.p(q[r],"change",i)
i.$0()},
bB(a){var s,r,q=this,p=q.x2,o=q.b
p.hidden=!o.a
if(!o.a)return
s=a==null
r=s?0:Math.max(0,a.c-q.gI().e)
p.textContent=o.d3(s?q.a.a:q.gI().d,r)},
aw(){return this.bB(null)},
cL(){var s,r,q,p=this
p.F=A.hy(A.fr("ds-presets"))
A.d("preset-form",t.m).addEventListener("submit",A.U(new A.dc(p)))
A.p(p.x1,"click",p.gcI())
for(s=A.k8(),r=p.xr,q=0;q<7;++q)r.appendChild(p.bt(s[q],!0))
p.au()},
cC(){var s,r,q=this,p={},o=q.y1,n=A.f5(A.r(o.value))
p.a=n
if(n.length===0){s=q.a
p.a=""+s.a+" BPM "+s.b.gY()}r=B.a.bK(q.F,new A.d7(p))
s=A.kc(q.F,A.ai(p.a,q.a))
q.F=s
A.W("ds-presets",A.a4(s))
o.value=""
q.au()
p=p.a
q.C(r?"Updated \u201c"+p+"\u201d.":"Saved \u201c"+p+"\u201d.")},
au(){var s,r,q,p=this,o=p.RG
o.replaceChildren()
for(s=p.F,r=s.length,q=0;q<s.length;s.length===r||(0,A.X)(s),++q)o.appendChild(p.cv(s[q]))
p.rx.hidden=p.F.length!==0},
ci(a){var s,r,q=this,p=B.a.cY(q.F,new A.cW(a))
if(p<0)return
s=A.bd(q.F,t.b)
B.a.aF(s,p)
q.F=s
A.W("ds-presets",A.a4(s))
q.au()
q.b1=new A.aW(p,a)
s="Deleted \u201c"+a.a
q.to.textContent=s+"\u201d."
q.ry.hidden=!1
q.x1.focus()
q.C(s+"\u201d. Press Undo to bring it back.")
r=q.aD
if(r!=null)v.G.clearTimeout(r)
q.aD=A.m(v.G.setTimeout(A.az(q.gcq()),1e4))},
cJ(){var s,r,q,p,o=this,n=o.b1
if(n==null)return
s=n.a
r=n.b
q=A.bd(o.F,t.b)
p=A.m(Math.min(s,o.F.length))
A.H(q).c.a(r)
q.$flags&1&&A.b2(q,"insert",2)
if(p<0||p>q.length)A.eN(A.f7(p,null))
q.splice(p,0,r)
o.F=q
A.W("ds-presets",A.a4(q))
o.au()
o.bn()
o.C("Restored \u201c"+r.a+"\u201d.")},
bn(){var s,r=this
r.b1=null
s=r.aD
if(s!=null)v.G.clearTimeout(s)
r.aD=null
if(A.T(A.b(v.G.document).activeElement)===r.x1)r.y1.focus()
r.ry.hidden=!0},
bt(a,b){var s,r,q=A.K("li","preset",null),p=A.K("button","preset-load",null)
p.setAttribute("type","button")
s=a.a
p.appendChild(A.K("span","preset-name",s))
p.appendChild(A.K("span","preset-sum",a.gbb()))
A.p(p,"click",new A.d5(this,a))
q.appendChild(p)
if(!b){r=A.K("button","preset-del","\xd7")
r.setAttribute("type","button")
r.setAttribute("aria-label","Delete \u201c"+s+"\u201d")
A.p(r,"click",new A.d6(this,a))
q.appendChild(r)}return q},
cv(a){return this.bt(a,!1)},
cA(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.hy(A.fr("ds-last"))
if(g.length!==0)B.a.gb3(g).bL(h.a)
try{j=A.fr("ds-prefs")
s=B.l.bP(j==null?"{}":j,null)
if(s instanceof A.y){r=s.m(0,"sound")
q=null
if(typeof r=="string"){q=r
j=B.a.U(B.P,q)}else j=!1
if(j)h.y2=q
p=s.m(0,"volume")
o=null
if(typeof p=="number"){o=p
h.W=J.eU(o,0,1)}n=s.m(0,"subVolume")
m=null
if(typeof n=="number"){m=n
h.ad=J.eU(m,0,1)}h.ae=J.a6(s.m(0,"haptics"),!0)
h.af=J.a6(s.m(0,"bigFlash"),!0)
l=s.m(0,"countIn")
k=null
if(A.fi(l)){k=l
h.N=J.eU(k,0,2)}}}catch(i){if(!(A.a5(i) instanceof A.b5))throw i}},
a1(){var s=this
return A.W("ds-prefs",B.l.bQ(A.f2(["sound",s.y2,"volume",s.W,"subVolume",s.ad,"haptics",s.ae,"bigFlash",s.af,"countIn",s.N],t.N,t.K),null))},
bz(){var s=this
s.bA()
s.al()
s.aX()
s.a2()
s.go.value=s.y2
s.id.value=""+B.d.D(s.W*100)
s.k1.value=""+B.d.D(s.ad*100)
s.k3.checked=s.ae
s.k4.checked=s.af
s.ok.value=""+s.N},
cK(){A.b(v.G.document).addEventListener("keydown",A.U(new A.db(this)))},
d7(){var s,r,q,p,o,n,m,l,k,j=this
if(j.H){j.H=!1
s=j.aA
if(s!=null)v.G.clearInterval(s)
r=j.ah
if(r!=null)v.G.cancelAnimationFrame(r)
q=j.O
if(q!=null)q.disconnect()
j.O=null
q=j.J
if(q!=null)A.b(q.suspend())
B.a.T(j.a6)
j.a7.c1()
q=j.a
p=q.a
o=j.b
if(o.a)q.a=j.gI().d
j.ap(null)
j.av(!1)
j.a2()
j.aw()
j.C(o.a?"Stopped. You reached "+p+" BPM.":"Stopped.")}else{n=j.J
if(n==null)n=j.J=A.b(new v.G.AudioContext())
A.fu()
A.b(n.resume())
q=A.b(n.createGain())
A.b(q.connect(A.b(n.destination)))
j.O=q
A.b(q.gain).value=j.W
j.H=!0
q=j.gI()
o=j.N
q.f=o
q.Q=q.x=q.y=q.z=q.e=0
m=q.a
q.d=m.a
q.w=0
q.r=Math.max(0,o)*m.b.c.length
B.a.T(j.a6)
j.ag=null
j.az=A.J(n.currentTime)+0.08
j.aY()
m=v.G
l=j.a8
if(l===$){k=A.az(j.gbH())
j.a8!==$&&A.fw()
j.a8=k
l=k}j.aA=A.m(m.setInterval(l,25))
j.ah=A.m(m.requestAnimationFrame(j.gaM()))
j.av(!0)
j.a7.a3()
q=j.N
if(q>0){o=q===1?"":"s"
m=j.a
m="Counting in "+q+" bar"+o+", then playing at "+m.a+" BPM, "+m.b.gY()+"."
q=m}else{q=j.a
q="Playing at "+q.a+" BPM, "+q.b.gY()+"."}j.C(q)}return null},
cF(){var s,r,q,p,o,n=this,m=n.J
if(m==null)m=n.J=A.b(new v.G.AudioContext())
A.fu()
A.b(m.resume())
s=A.b(m.createGain())
A.b(s.connect(A.b(m.destination)))
n.O=s
A.b(s.gain).value=n.W
n.H=!0
s=n.gI()
r=n.N
s.f=r
s.Q=s.x=s.y=s.z=s.e=0
q=s.a
s.d=q.a
s.w=0
s.r=Math.max(0,r)*q.b.c.length
B.a.T(n.a6)
n.ag=null
n.az=A.J(m.currentTime)+0.08
n.aY()
q=v.G
p=n.a8
if(p===$){o=A.az(n.gbH())
n.a8!==$&&A.fw()
n.a8=o
p=o}n.aA=A.m(q.setInterval(p,25))
n.ah=A.m(q.requestAnimationFrame(n.gaM()))
n.av(!0)
n.a7.a3()
s=n.N
if(s>0){r=s===1?"":"s"
q=n.a
q="Counting in "+s+" bar"+r+", then playing at "+q.a+" BPM, "+q.b.gY()+"."
s=q}else{s=n.a
s="Playing at "+s.a+" BPM, "+s.b.gY()+"."}n.C(s)},
cG(){var s,r,q,p,o,n=this
n.H=!1
s=n.aA
if(s!=null)v.G.clearInterval(s)
r=n.ah
if(r!=null)v.G.cancelAnimationFrame(r)
q=n.O
if(q!=null)q.disconnect()
n.O=null
q=n.J
if(q!=null)A.b(q.suspend())
B.a.T(n.a6)
n.a7.c1()
q=n.a
p=q.a
o=n.b
if(o.a)q.a=n.gI().d
n.ap(null)
n.av(!1)
n.a2()
n.aw()
n.C(o.a?"Stopped. You reached "+p+" BPM.":"Stopped.")},
av(a){var s,r,q,p,o,n
for(s=[this.x,this.z],r=s.length,q=""+a,p=0;p<r;++p){o=s[p]
n=a?"Stop":"Start"
o.textContent=n
o.setAttribute("aria-pressed",q)
A.A(A.b(o.classList).toggle("is-running",a))}},
b9(){var s=A.b(this.x.getBoundingClientRect()),r=A.J(s.bottom)>0&&A.J(s.top)<A.J(v.G.innerHeight),q=this.y
if(A.A(q.hidden)===r)return
q.hidden=r
A.A(A.b(A.b(A.b(v.G.document).body).classList).toggle("has-transport",!r))},
aY(){var s,r,q,p,o,n,m=this,l=m.J,k=m.O
if(!m.H||l==null||k==null)return
s=A.A(A.b(v.G.document).hidden)?1.5:0.12
for(r=m.a6;;){q=m.ag
if(q==null)q=m.gI().d1()
p=m.az
o=q.a
n=p+o
if(n<A.J(l.currentTime)){p+=A.J(l.currentTime)+0.05-n
m.az=p
n=p+o}if(n>=A.J(l.currentTime)+s){m.ag=q
break}m.ag=null
m.aU(l,k,q.b,n)
B.a.j(r,new A.aW(n,q))}while(r.length>128)B.a.aF(r,0)},
aU(a,b,c,d){var s,r,q,p,o,n,m=this
switch(c.a){case 0:s=1
break
case 1:s=0.6
break
case 2:s=0.24
break
case 3:s=0.36*m.ad
break
case 4:s=0
break
default:s=null}if(s<0.005)return
r=c===B.j
q=c===B.v
switch(m.y2){case"beep":if(r)p=1760
else p=q?880:1320
m.bJ(a,b,"sine",p,s,d,0.05)
break
case"stick":if(r)p=3200
else p=q?1800:2500
m.bp(a,b,p,s*1.4,d)
break
default:if(r)o=1250
else o=q?760:950
n=A.b(a.createBiquadFilter())
n.type="bandpass"
A.b(n.connect(b))
A.b(n.frequency).value=o
A.b(n.Q).value=6
m.bJ(a,n,"triangle",o,s*2.2,d,0.04)
m.bp(a,b,o*2,s*0.25,d)}},
bJ(a,b,c,d,e,f,g){var s,r,q,p=A.b(a.createOscillator())
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
bp(a,b,c,d,e){var s,r,q,p,o=this.bR
if(o==null)o=this.bR=this.cr(a)
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
cr(a){var s,r,q=B.d.D(A.J(a.sampleRate)*0.05),p=A.b(a.createBuffer(1,q,A.J(a.sampleRate))),o=t.E.a(p.getChannelData(0)),n=new A.ec()
n.c8(7)
for(s=0;s<q;++s){r=n.d2()
o.$flags&2&&A.b2(o)
if(!(s<o.length))return A.j(o,s)
o[s]=r*2-1}return p},
ck(a){var s,r,q,p,o,n=this
A.J(a)
s=n.J
if(!n.H||s==null)return
r=n.a6
q=null
p=null
for(;;){if(!(r.length!==0&&B.a.gb3(r).a<=A.J(s.currentTime)))break
o=B.a.aF(r,0).b
if(o.e===0)q=o
p=o}if(q!=null)n.ap(q)
if(p!=null)n.bo(p)
n.ah=A.m(v.G.requestAnimationFrame(n.gaM()))},
ap(a){var s,r,q,p,o,n,m,l,k,j=this,i=a==null,h=i?null:a.d
if(h==null)h=-1
if(i){for(i=j.aB,s=i.length,r=0;r<i.length;i.length===s||(0,A.X)(i),++r)A.A(A.b(i[r].classList).toggle("is-on",!1))
j.bo(null)
j.as.className="flash"
j.at.textContent="Not playing"
return}for(i=j.aB,s=a.r,q=!s,p=0;p<i.length;++p){o=A.b(i[p].classList)
n=q&&p===h
A.A(o.toggle("is-on",n))}m=q&&j.c.bY(a.c)
if(s)i="Count-in \xb7 "+a.w+" of "+a.x
else{i=a.c+1
i=m?"Bar "+i+" \xb7 silent: keep the time going":"Bar "+i+" \xb7 Beat "+(h+1)+" of "+j.a.b.a}j.at.textContent=i
l=a.b
A:{if(B.j===l){i="is-accent"
break A}if(B.o===l||B.v===l){i="is-normal"
break A}if(B.D===l){i="is-ghost"
break A}if(B.k===l){i="is-silent"
break A}i=null}s=j.af&&l!==B.k?" is-big":""
j.as.className="flash "+i+s
k=j.bS
if(k!=null)v.G.clearTimeout(k)
i=v.G
j.bS=A.m(i.setTimeout(A.az(new A.d4(j)),90))
if(j.ae&&l!==B.k)A.kd(l===B.j?45:20)
if(j.b.a&&a.d===0&&q)j.bB(a)
if(a.f!==j.bU&&A.T(A.b(i.document).activeElement)!==j.e)j.a2()},
bo(a){var s,r,q,p=this,o=p.aC
if(o!=null)A.b(o.classList).remove("is-on")
p.aC=null
if(a==null||a.r)return
o=a.d
s=p.bT
r=s.length
if(o>=r)return
if(!(o>=0))return A.j(s,o)
q=s[o]
o=a.e
if(o>=q.length)return
o=q[o]
A.b(o.classList).add("is-on")
p.aC=o},
C(a){this.R8.textContent=a
return a},
bx(a){var s=this.bW
if(s!=null)v.G.clearTimeout(s)
this.bW=A.m(v.G.setTimeout(A.az(new A.d8(this,a)),600))}}
A.de.prototype={
$0(){var s=this.a,r=s.B(A.r(s.f.value))
return s.E(r==null?s.a.a:r)},
$S:0}
A.df.prototype={
$0(){var s=this.a,r=s.B(A.r(s.e.value))
if(r!=null&&r>=20&&r<=300)s.by(r,!0)},
$S:0}
A.dg.prototype={
$0(){var s=this.a,r=s.B(A.r(s.e.value))
return s.E(r==null?s.a.a:r)},
$S:0}
A.dp.prototype={
$0(){var s=this.a
return s.E(A.fv(s.a.a))},
$S:0}
A.dq.prototype={
$0(){var s=this.a
return s.E(A.ft(s.a.a))},
$S:0}
A.dr.prototype={
$1(a){return this.a.b9()},
$S:3}
A.ds.prototype={
$0(){var s=this.a,r=A.bg(A.r(s.CW.value))
if(r!=null)s.aW(r)},
$S:0}
A.dt.prototype={
$0(){var s=this.a,r=s.a
r.f=A.A(s.dx.checked)
s.a2()
A.W("ds-last",A.a4(A.f([A.ai("last",r)],t.e)))},
$S:0}
A.du.prototype={
$0(){var s=this.a,r=s.a
r.sc0(r.b.a4())
s.al()
A.W("ds-last",A.a4(A.f([A.ai("last",r)],t.e)))
s.C("Accents reset.")},
$S:0}
A.dv.prototype={
$0(){var s=this.a,r=s.a
r.d=A.fW(A.r(s.dy.value))
s.aX()
s.al()
A.W("ds-last",A.a4(A.f([A.ai("last",r)],t.e)))},
$S:0}
A.dw.prototype={
$0(){var s=this.a,r=s.a,q=s.B(A.r(s.fx.value))
r.e=q==null?50:q
s.aX()
A.W("ds-last",A.a4(A.f([A.ai("last",r)],t.e)))},
$S:0}
A.dh.prototype={
$0(){var s,r,q,p=this.a
p.y2=A.r(p.go.value)
p.a1()
if(!p.H){s=p.J
if(s==null)s=p.J=A.b(new v.G.AudioContext())
A.fu()
A.b(s.resume())
r=A.b(s.createGain())
A.b(r.connect(A.b(s.destination)))
A.b(r.gain).value=p.W
q=A.J(s.currentTime)+0.05
p.aU(s,r,B.j,q)
p.aU(s,r,B.o,q+0.25)}},
$S:0}
A.di.prototype={
$0(){var s,r=this.a,q=r.B(A.r(r.id.value))
q=(q==null?80:q)/100
r.W=q
s=r.O
if(s!=null)A.b(s.gain).value=q
r.a1()},
$S:0}
A.dj.prototype={
$0(){var s=this.a,r=s.B(A.r(s.k1.value))
s.ad=(r==null?60:r)/100
s.a1()},
$S:0}
A.dk.prototype={
$0(){var s=this.a
s.ae=A.A(s.k3.checked)
s.a1()},
$S:0}
A.dl.prototype={
$0(){var s=this.a,r=s.B(A.r(s.ok.value))
s.N=B.b.u(r==null?0:r,0,2)
s.a1()},
$S:0}
A.dm.prototype={
$0(){var s=this.a
s.af=A.A(s.k4.checked)
s.a1()},
$S:0}
A.dn.prototype={
$1(a){var s
if(!A.A(A.b(v.G.document).hidden)){s=this.a
s=s.H&&s.a7.b}else s=!1
if(s)this.a.a7.a3()},
$S:29}
A.cV.prototype={
$0(){var s=this.a,r=this.b,q=A.bg(r)
q.toString
s.aW(q)
s.C("Time signature "+A.bg(r).gY()+".")},
$S:0}
A.d3.prototype={
$0(){var s,r=this.a,q=r.b
if(q!=null)v.G.clearTimeout(q)
s=r.a
if(s!=null)v.G.clearInterval(s)
r.b=r.a=null},
$S:0}
A.cZ.prototype={
$1(a){var s,r,q,p=this
if(A.m(A.b(a).button)!==0)return
p.c.$0()
s=p.b
r=p.d
s.E(s.a.a+r)
q=p.a
q.c=0
q.b=A.m(v.G.setTimeout(A.az(new A.cY(q,s,r)),450))},
$S:2}
A.cY.prototype={
$0(){var s=this.a
s.a=A.m(v.G.setInterval(A.az(new A.cX(s,this.b,this.c)),90))},
$S:4}
A.cX.prototype={
$0(){var s=this.b,r=++this.a.c>10?2:1
return s.E(s.a.a+this.c*r)},
$S:0}
A.d_.prototype={
$1(a){return this.a.$0()},
$S:3}
A.d0.prototype={
$1(a){return A.b(a).preventDefault()},
$S:12}
A.d1.prototype={
$1(a){return A.b(a).preventDefault()},
$S:12}
A.d2.prototype={
$1(a){var s
if(A.m(A.b(a).detail)===0){s=this.a
s.E(s.a.a+this.b)}},
$S:2}
A.da.prototype={
$0(){var s=this.a
return s.C("Tempo set to "+s.a.a+" BPM.")},
$S:0}
A.d9.prototype={
$1(a){return A.m(a)===1},
$S:1}
A.cT.prototype={
$1(a){return A.m(a)===1},
$S:1}
A.cU.prototype={
$0(){var s=this.a,r=s.a,q=r.c,p=this.b
if(!(p<q.length))return A.j(q,p)
B.a.A(q,p,B.q[(q[p].a+1)%4])
s.bq(p)
A.W("ds-last",A.a4(A.f([A.ai("last",r)],t.e)))
r=r.c
if(!(p<r.length))return A.j(r,p)
s.C("Beat "+(p+1)+": "+r[p].c+".")},
$S:0}
A.dd.prototype={
$0(){var s,r=this,q=r.a,p=q.b
p.a=A.A(r.b.checked)
s=q.B(A.r(r.c.value))
p.b=B.b.u(s==null?4:s,-50,50)
s=q.B(A.r(r.d.value))
p.c=B.b.u(s==null?4:s,1,64)
s=q.B(A.r(r.e.value))
p.d=B.b.u(B.b.D(s==null?140:s),20,300)
p=q.c
p.a=A.A(r.f.checked)
s=q.B(A.r(r.r.value))
p.b=B.b.u(s==null?2:s,1,64)
s=q.B(A.r(r.w.value))
p.c=B.b.u(s==null?2:s,1,64)
q.gI().b7()
q.aw()},
$S:0}
A.dc.prototype={
$1(a){A.b(a).preventDefault()
this.a.cC()},
$S:2}
A.d7.prototype={
$1(a){return t.b.a(a).a.toLowerCase()===this.a.a.toLowerCase()},
$S:13}
A.cW.prototype={
$1(a){return t.b.a(a).a===this.a.a},
$S:13}
A.d5.prototype={
$0(){var s=this.b,r=this.a,q=r.a
s.bL(q)
r.gI().b7()
r.bz()
A.W("ds-last",A.a4(A.f([A.ai("last",q)],t.e)))
r.C("Loaded \u201c"+s.a+"\u201d: "+s.gbb()+".")},
$S:0}
A.d6.prototype={
$0(){return this.a.ci(this.b)},
$S:0}
A.db.prototype={
$1(a){var s,r,q,p,o,n=this
A.b(a)
if(A.A(a.ctrlKey)||A.A(a.metaKey)||A.A(a.altKey))return
s=A.T(a.target)
r=s==null?null:A.r(s.tagName)
if(r==null)r=""
s=!(r==="INPUT"||r==="SELECT"||r==="TEXTAREA")
q=!s||r==="BUTTON"||r==="A"||r==="SUMMARY"
A:{p=A.r(a.key)
if(" "===p&&!q){a.preventDefault()
s=n.a
if(s.H)s.cG()
else s.cF()
break A}if("ArrowUp"===p&&s){a.preventDefault()
s=n.a
o=s.a
if(A.A(a.shiftKey))s.E(A.ft(o.a))
else s.E(o.a+1)
s.bx(""+o.a+" BPM")
break A}if("ArrowDown"===p&&s){a.preventDefault()
s=n.a
o=s.a
if(A.A(a.shiftKey))s.E(A.fv(o.a))
else s.E(o.a+-1)
s.bx(""+o.a+" BPM")
break A}if(("t"===p||"T"===p)&&s&&!A.A(a.repeat))n.a.bE()}},
$S:2}
A.d4.prototype={
$0(){return A.b(this.a.as.classList).add("is-fading")},
$S:0}
A.d8.prototype={
$0(){return this.a.C(this.b)},
$S:0}
A.eu.prototype={
$2(a,b){var s,r,q,p,o,n
t.aH.a(b)
s=this.a
if(s.a>=12)return
if(a===0){s.j(0,B.a.R(b,"+"))
return}for(s=[2,3],r=s.length,q=t.S,p=0;p<r;++p){o=s[p]
if(o<=a&&a-o!==1){n=A.bd(b,q)
n.push(o)
this.$2(a-o,n)}}},
$S:30};(function aliases(){var s=J.ah.prototype
s.c6=s.i})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
s(A,"jK","iE",6)
s(A,"jL","iF",6)
s(A,"jM","iG",6)
r(A,"hv","jE",0)
s(A,"jO","j9",7)
var o
q(o=A.c4.prototype,"gcH","bE",0)
q(o,"gcs","ct",0)
q(o,"gcI","cJ",0)
q(o,"gcq","bn",0)
q(o,"gd6","d7",0)
q(o,"gd9","b9",0)
q(o,"gbH","aY",0)
p(o,"gcj","ck",28)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.i,null)
q(A.i,[A.f0,J.bX,A.bn,J.am,A.v,A.dB,A.e,A.ar,A.be,A.I,A.ad,A.dI,A.dy,A.b4,A.bA,A.ae,A.y,A.cL,A.bc,A.c0,A.eb,A.a1,A.cp,A.eg,A.ee,A.cl,A.Q,A.cn,A.ac,A.B,A.cm,A.ct,A.dQ,A.bu,A.aP,A.cs,A.ax,A.u,A.bQ,A.bS,A.e9,A.bT,A.dW,A.bo,A.dX,A.b5,A.z,A.cu,A.aQ,A.dx,A.ec,A.a0,A.bf,A.cB,A.dD,A.cA,A.b3,A.dC,A.dH,A.dO,A.c4])
q(J.bX,[J.bZ,J.b7,J.b9,J.b8,J.ba,J.aH,J.aI])
q(J.b9,[J.ah,J.o,A.aK,A.bj])
q(J.ah,[J.cd,J.aR,J.ag])
r(J.bY,A.bn)
r(J.cF,J.o)
q(J.aH,[J.b6,J.c_])
q(A.v,[A.c3,A.aa,A.c1,A.ck,A.cg,A.co,A.bb,A.bM,A.Z,A.bq,A.cj,A.bp,A.bR])
q(A.e,[A.h,A.at])
q(A.h,[A.a_,A.aq,A.bt])
r(A.an,A.at)
q(A.a_,[A.a8,A.cr])
q(A.ad,[A.aU,A.aV])
r(A.aW,A.aU)
r(A.L,A.aV)
r(A.bl,A.aa)
q(A.ae,[A.bO,A.bP,A.ci,A.ev,A.ex,A.dT,A.dS,A.ek,A.e5,A.ez,A.eJ,A.eK,A.eq,A.eM,A.eB,A.eG,A.cJ,A.dE,A.cN,A.cR,A.cS,A.cP,A.cQ,A.eF,A.eE,A.eL,A.eO,A.dr,A.dn,A.cZ,A.d_,A.d0,A.d1,A.d2,A.d9,A.cT,A.dc,A.d7,A.cW,A.db])
q(A.ci,[A.ch,A.aG])
q(A.y,[A.ap,A.bs,A.cq])
q(A.bP,[A.ew,A.el,A.ep,A.e6,A.cM,A.ea,A.cO,A.eu])
q(A.bj,[A.c5,A.aM])
q(A.aM,[A.bv,A.bx])
r(A.bw,A.bv)
r(A.bh,A.bw)
r(A.by,A.bx)
r(A.bi,A.by)
q(A.bh,[A.aL,A.c6])
q(A.bi,[A.c7,A.c8,A.c9,A.ca,A.cb,A.bk,A.cc])
r(A.bB,A.co)
q(A.bO,[A.dU,A.dV,A.ef,A.dY,A.e1,A.e0,A.e_,A.dZ,A.e4,A.e3,A.e2,A.dR,A.eo,A.eC,A.eH,A.cK,A.dF,A.dP,A.eS,A.eR,A.eP,A.eQ,A.de,A.df,A.dg,A.dp,A.dq,A.ds,A.dt,A.du,A.dv,A.dw,A.dh,A.di,A.dj,A.dk,A.dl,A.dm,A.cV,A.d3,A.cY,A.cX,A.da,A.cU,A.dd,A.d5,A.d6,A.d4,A.d8])
r(A.br,A.cn)
r(A.aT,A.bs)
r(A.bz,A.aP)
r(A.aw,A.bz)
r(A.c2,A.bb)
r(A.cG,A.bQ)
q(A.bS,[A.cI,A.cH])
r(A.e8,A.e9)
q(A.Z,[A.bm,A.bW])
q(A.dW,[A.N,A.av,A.F])
s(A.bv,A.u)
s(A.bw,A.I)
s(A.bx,A.u)
s(A.by,A.I)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",k:"double",aE:"num",w:"String",E:"bool",z:"Null",l:"List",i:"Object",aJ:"Map",t:"JSObject"},mangledNames:{},types:["~()","E(a)","z(t)","~(i?)","z()","~(@)","~(~())","@(@)","z(@)","~(i?,i?)","i?(i?)","a()","~(t)","E(a0)","@(@,w)","@(w)","z(~())","z(@,aj)","~(a,@)","z(i,aj)","a0(w,a,w{dotted:E,sub:F,swing:a})","E(N)","N()","E(F)","F()","a(a,a)","z(i)","a7<~>()","~(k)","z(i?)","~(a,l<a>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aW&&a.b(c.a)&&b.b(c.b),"4;":a=>b=>b instanceof A.L&&A.k5(a,b.a)}}
A.j_(v.typeUniverse,JSON.parse('{"cd":"ah","aR":"ah","ag":"ah","ki":"aK","bZ":{"E":[],"n":[]},"b7":{"n":[]},"b9":{"t":[]},"ah":{"t":[]},"o":{"l":["1"],"h":["1"],"t":[],"e":["1"]},"bY":{"bn":[]},"cF":{"o":["1"],"l":["1"],"h":["1"],"t":[],"e":["1"]},"am":{"a3":["1"]},"aH":{"k":[],"aE":[]},"b6":{"k":[],"a":[],"aE":[],"n":[]},"c_":{"k":[],"aE":[],"n":[]},"aI":{"w":[],"dz":[],"n":[]},"c3":{"v":[]},"h":{"e":["1"]},"a_":{"h":["1"],"e":["1"]},"ar":{"a3":["1"]},"at":{"e":["2"],"e.E":"2"},"an":{"at":["1","2"],"h":["2"],"e":["2"],"e.E":"2"},"be":{"a3":["2"]},"a8":{"a_":["2"],"h":["2"],"e":["2"],"a_.E":"2","e.E":"2"},"aW":{"aU":[],"ad":[]},"L":{"aV":[],"ad":[]},"bl":{"aa":[],"v":[]},"c1":{"v":[]},"ck":{"v":[]},"bA":{"aj":[]},"ae":{"ao":[]},"bO":{"ao":[]},"bP":{"ao":[]},"ci":{"ao":[]},"ch":{"ao":[]},"aG":{"ao":[]},"cg":{"v":[]},"ap":{"y":["1","2"],"fM":["1","2"],"aJ":["1","2"],"y.K":"1","y.V":"2"},"aq":{"h":["1"],"e":["1"],"e.E":"1"},"bc":{"a3":["1"]},"aU":{"ad":[]},"aV":{"ad":[]},"c0":{"iy":[],"dz":[]},"aL":{"cy":[],"u":["k"],"l":["k"],"M":["k"],"h":["k"],"t":[],"e":["k"],"I":["k"],"n":[],"u.E":"k"},"aK":{"t":[],"eX":[],"n":[]},"bj":{"t":[]},"c5":{"eY":[],"t":[],"n":[]},"aM":{"M":["1"],"t":[]},"bh":{"u":["k"],"l":["k"],"M":["k"],"h":["k"],"t":[],"e":["k"],"I":["k"]},"bi":{"u":["a"],"l":["a"],"M":["a"],"h":["a"],"t":[],"e":["a"],"I":["a"]},"c6":{"cz":[],"u":["k"],"l":["k"],"M":["k"],"h":["k"],"t":[],"e":["k"],"I":["k"],"n":[],"u.E":"k"},"c7":{"cC":[],"u":["a"],"l":["a"],"M":["a"],"h":["a"],"t":[],"e":["a"],"I":["a"],"n":[],"u.E":"a"},"c8":{"cD":[],"u":["a"],"l":["a"],"M":["a"],"h":["a"],"t":[],"e":["a"],"I":["a"],"n":[],"u.E":"a"},"c9":{"cE":[],"u":["a"],"l":["a"],"M":["a"],"h":["a"],"t":[],"e":["a"],"I":["a"],"n":[],"u.E":"a"},"ca":{"dK":[],"u":["a"],"l":["a"],"M":["a"],"h":["a"],"t":[],"e":["a"],"I":["a"],"n":[],"u.E":"a"},"cb":{"dL":[],"u":["a"],"l":["a"],"M":["a"],"h":["a"],"t":[],"e":["a"],"I":["a"],"n":[],"u.E":"a"},"bk":{"dM":[],"u":["a"],"l":["a"],"M":["a"],"h":["a"],"t":[],"e":["a"],"I":["a"],"n":[],"u.E":"a"},"cc":{"dN":[],"u":["a"],"l":["a"],"M":["a"],"h":["a"],"t":[],"e":["a"],"I":["a"],"n":[],"u.E":"a"},"co":{"v":[]},"bB":{"aa":[],"v":[]},"Q":{"v":[]},"br":{"cn":["1"]},"B":{"a7":["1"]},"bs":{"y":["1","2"],"aJ":["1","2"]},"aT":{"bs":["1","2"],"y":["1","2"],"aJ":["1","2"],"y.K":"1","y.V":"2"},"bt":{"h":["1"],"e":["1"],"e.E":"1"},"bu":{"a3":["1"]},"aw":{"aP":["1"],"h":["1"],"e":["1"]},"ax":{"a3":["1"]},"y":{"aJ":["1","2"]},"aP":{"h":["1"],"e":["1"]},"bz":{"aP":["1"],"h":["1"],"e":["1"]},"cq":{"y":["w","@"],"aJ":["w","@"],"y.K":"w","y.V":"@"},"cr":{"a_":["w"],"h":["w"],"e":["w"],"a_.E":"w","e.E":"w"},"bb":{"v":[]},"c2":{"v":[]},"k":{"aE":[]},"a":{"aE":[]},"l":{"h":["1"],"e":["1"]},"w":{"dz":[]},"bM":{"v":[]},"aa":{"v":[]},"Z":{"v":[]},"bm":{"v":[]},"bW":{"v":[]},"bq":{"v":[]},"cj":{"v":[]},"bp":{"v":[]},"bR":{"v":[]},"bo":{"v":[]},"cu":{"aj":[]},"aQ":{"iC":[]},"cE":{"l":["a"],"h":["a"],"e":["a"]},"dN":{"l":["a"],"h":["a"],"e":["a"]},"dM":{"l":["a"],"h":["a"],"e":["a"]},"cC":{"l":["a"],"h":["a"],"e":["a"]},"dK":{"l":["a"],"h":["a"],"e":["a"]},"cD":{"l":["a"],"h":["a"],"e":["a"]},"dL":{"l":["a"],"h":["a"],"e":["a"]},"cy":{"l":["k"],"h":["k"],"e":["k"]},"cz":{"l":["k"],"h":["k"],"e":["k"]}}'))
A.iZ(v.typeUniverse,JSON.parse('{"h":1,"aM":1,"bz":1,"bQ":2,"bS":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.cv
return{n:s("Q"),J:s("eX"),Y:s("eY"),V:s("h<@>"),C:s("v"),D:s("cy"),q:s("cz"),Z:s("ao"),W:s("cC"),k:s("cD"),G:s("cE"),R:s("e<@>"),O:s("o<t>"),a:s("o<N>"),d:s("o<l<t>>"),x:s("o<aJ<w,i>>"),c:s("o<bf>"),f:s("o<i>"),e:s("o<a0>"),h:s("o<+(k,b3)>"),s:s("o<w>"),w:s("o<k>"),r:s("o<@>"),t:s("o<a>"),T:s("b7"),m:s("t"),g:s("ag"),p:s("M<@>"),L:s("N"),B:s("l<N>"),j:s("l<@>"),aH:s("l<a>"),E:s("aL"),P:s("z"),K:s("i"),b:s("a0"),cY:s("kj"),cD:s("+()"),l:s("aj"),N:s("w"),a2:s("F"),bW:s("n"),b7:s("aa"),c0:s("dK"),bk:s("dL"),ca:s("dM"),bX:s("dN"),cr:s("aR"),_:s("B<@>"),A:s("aT<i?,i?>"),y:s("E"),bG:s("E(i)"),i:s("k"),z:s("@"),bd:s("@()"),v:s("@(i)"),Q:s("@(i,aj)"),S:s("a"),bc:s("a7<z>?"),aQ:s("t?"),aL:s("l<@>?"),X:s("i?"),aD:s("w?"),F:s("ac<@,@>?"),U:s("cs?"),u:s("E?"),I:s("k?"),a3:s("a?"),ae:s("aE?"),o:s("aE"),H:s("~"),M:s("~()"),cQ:s("~(w,@)"),aS:s("~(a,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.K=J.bX.prototype
B.a=J.o.prototype
B.b=J.b6.prototype
B.d=J.aH.prototype
B.c=J.aI.prototype
B.L=J.ag.prototype
B.M=J.b9.prototype
B.C=J.cd.prototype
B.u=J.aR.prototype
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

B.l=new A.cG()
B.f=new A.dB()
B.h=new A.dQ()
B.m=new A.cu()
B.N=new A.cH(null)
B.O=new A.cI(null)
B.y=new A.N("Accent",0,"accent")
B.z=new A.N("Ghost",2,"ghost")
B.A=new A.N("Mute",3,"mute")
B.n=new A.N("Normal",1,"normal")
B.p=s([2,4,8,16],t.t)
B.i=new A.F(1,"None (beats only)",0,"none")
B.t=new A.F(2,"Eighth notes (2)",1,"eighths")
B.a3=new A.F(3,"Triplets (3)",2,"triplets")
B.r=new A.F(4,"Sixteenth notes (4)",3,"sixteenths")
B.a2=new A.F(5,"Quintuplets (5)",4,"quintuplets")
B.a1=new A.F(6,"Sextuplets (6)",5,"sextuplets")
B.a0=new A.F(7,"Septuplets (7)",6,"septuplets")
B.a_=new A.F(8,"32nd notes (8)",7,"thirtySeconds")
B.B=s([B.i,B.t,B.a3,B.r,B.a2,B.a1,B.a0,B.a_],A.cv("o<F>"))
B.Q=new A.L([20,"Grave","slow and solemn","serious, heavy"])
B.W=new A.L([40,"Largo","slowly and broadly","broad"])
B.U=new A.L([60,"Larghetto","fairly slowly and broadly","a little broad"])
B.T=new A.L([66,"Adagio","slowly","at ease"])
B.R=new A.L([76,"Andante","at a walking pace","walking"])
B.S=new A.L([108,"Moderato","at a moderate speed","moderate"])
B.Z=new A.L([120,"Allegro","fast and bright","cheerful"])
B.V=new A.L([156,"Vivace","lively and fast","lively"])
B.Y=new A.L([176,"Presto","very fast","quickly"])
B.X=new A.L([200,"Prestissimo","as fast as possible","very quickly"])
B.e=s([B.Q,B.W,B.U,B.T,B.R,B.S,B.Z,B.V,B.Y,B.X],A.cv("o<+(a,w,w,w)>"))
B.P=s(["wood","beep","stick"],t.s)
B.q=s([B.y,B.n,B.z,B.A],t.a)
B.a4=A.a2("eX")
B.a5=A.a2("eY")
B.a6=A.a2("cy")
B.a7=A.a2("cz")
B.a8=A.a2("cC")
B.a9=A.a2("cD")
B.aa=A.a2("cE")
B.ab=A.a2("i")
B.ac=A.a2("dK")
B.ad=A.a2("dL")
B.ae=A.a2("dM")
B.af=A.a2("dN")
B.j=new A.av(0,"accent")
B.o=new A.av(1,"normal")
B.D=new A.av(2,"ghost")
B.v=new A.av(3,"sub")
B.k=new A.av(4,"silent")})();(function staticFields(){$.e7=null
$.P=A.f([],t.f)
$.fQ=null
$.fB=null
$.fA=null
$.hB=null
$.hu=null
$.hE=null
$.er=null
$.ey=null
$.fo=null
$.ed=A.f([],A.cv("o<l<i>?>"))
$.aX=null
$.bH=null
$.bI=null
$.fh=!1
$.x=B.h})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"kh","hI",()=>A.et("_$dart_dartClosure"))
s($,"kg","eT",()=>A.et("_$dart_dartClosure_dartJSInterop"))
s($,"kx","hT",()=>A.f([new J.bY()],A.cv("o<bn>")))
s($,"kl","hJ",()=>A.ab(A.dJ({
toString:function(){return"$receiver$"}})))
s($,"km","hK",()=>A.ab(A.dJ({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"kn","hL",()=>A.ab(A.dJ(null)))
s($,"ko","hM",()=>A.ab(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kr","hP",()=>A.ab(A.dJ(void 0)))
s($,"ks","hQ",()=>A.ab(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kq","hO",()=>A.ab(A.fX(null)))
s($,"kp","hN",()=>A.ab(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"ku","hS",()=>A.ab(A.fX(void 0)))
s($,"kt","hR",()=>A.ab(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"kv","fx",()=>A.iD())
s($,"kw","cw",()=>A.eD(B.ab))
s($,"ky","fy",()=>{var r,q=t.S,p=A.fN(q)
for(r=20;r<60;r+=2)p.j(0,r)
for(r=60;r<72;r+=3)p.j(0,r)
for(r=72;r<120;r+=4)p.j(0,r)
for(r=120;r<144;r+=6)p.j(0,r)
for(r=144;r<=300;r+=8)p.j(0,r)
p.j(0,300)
return A.f3(p,q)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.aK,SharedArrayBuffer:A.aK,ArrayBufferView:A.bj,DataView:A.c5,Float32Array:A.aL,Float64Array:A.c6,Int16Array:A.c7,Int32Array:A.c8,Int8Array:A.c9,Uint16Array:A.ca,Uint32Array:A.cb,Uint8ClampedArray:A.bk,CanvasPixelArray:A.bk,Uint8Array:A.cc})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aM.$nativeSuperclassTag="ArrayBufferView"
A.bv.$nativeSuperclassTag="ArrayBufferView"
A.bw.$nativeSuperclassTag="ArrayBufferView"
A.bh.$nativeSuperclassTag="ArrayBufferView"
A.bx.$nativeSuperclassTag="ArrayBufferView"
A.by.$nativeSuperclassTag="ArrayBufferView"
A.bi.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.k3
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()