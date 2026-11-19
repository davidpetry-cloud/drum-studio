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
if(a[b]!==s){A.js(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.t(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.eO(b)
return new s(c,this)}:function(){if(s===null)s=A.eO(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.eO(a).prototype
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
eT(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eQ(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.eR==null){A.jb()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.fq("Return interceptor for "+A.q(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.dH
if(o==null)o=$.dH=A.e0(n)
p=q[o]}if(p!=null)return p
p=A.ji(a)
if(p!=null)return p
if(typeof a=="function")return B.a_
s=Object.getPrototypeOf(a)
if(s==null)return B.E
if(s===Object.prototype)return B.E
if(typeof q=="function"){o=$.dH
if(o==null)o=$.dH=A.e0(n)
Object.defineProperty(q,o,{value:B.t,enumerable:false,writable:true,configurable:true})
return B.t}return B.t},
hv(a,b){var s=t.W
return J.hh(s.a(a),s.a(b))},
f7(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hw(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.f7(r))break;++b}return b},
hx(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.h(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.f7(q))break}return b},
aE(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b5.prototype
return J.c7.prototype}if(typeof a=="string")return J.au.prototype
if(a==null)return J.b6.prototype
if(typeof a=="boolean")return J.c6.prototype
if(Array.isArray(a))return J.l.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
if(typeof a=="symbol")return J.b9.prototype
if(typeof a=="bigint")return J.b7.prototype
return a}if(a instanceof A.e)return a
return J.eQ(a)},
bR(a){if(typeof a=="string")return J.au.prototype
if(a==null)return a
if(Array.isArray(a))return J.l.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
if(typeof a=="symbol")return J.b9.prototype
if(typeof a=="bigint")return J.b7.prototype
return a}if(a instanceof A.e)return a
return J.eQ(a)},
eP(a){if(a==null)return a
if(Array.isArray(a))return J.l.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
if(typeof a=="symbol")return J.b9.prototype
if(typeof a=="bigint")return J.b7.prototype
return a}if(a instanceof A.e)return a
return J.eQ(a)},
j7(a){if(typeof a=="number")return J.aI.prototype
if(typeof a=="string")return J.au.prototype
if(a==null)return a
if(!(a instanceof A.e))return J.aN.prototype
return a},
ae(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aE(a).N(a,b)},
ao(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.je(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bR(a).l(a,b)},
hh(a,b){return J.j7(a).L(a,b)},
en(a,b){return J.eP(a).E(a,b)},
a4(a){return J.aE(a).gp(a)},
eZ(a){return J.bR(a).gu(a)},
hi(a){return J.bR(a).gH(a)},
aZ(a){return J.eP(a).gq(a)},
bT(a){return J.bR(a).gj(a)},
hj(a){return J.aE(a).gv(a)},
hk(a,b,c){return J.eP(a).S(a,b,c)},
b_(a){return J.aE(a).i(a)},
c4:function c4(){},
c6:function c6(){},
b6:function b6(){},
b8:function b8(){},
ah:function ah(){},
ck:function ck(){},
aN:function aN(){},
ag:function ag(){},
b7:function b7(){},
b9:function b9(){},
l:function l(a){this.$ti=a},
c5:function c5(){},
cZ:function cZ(a){this.$ti=a},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aI:function aI(){},
b5:function b5(){},
c7:function c7(){},
au:function au(){}},A={eu:function eu(){},
f9(a){return new A.bc("Field '"+a+"' has been assigned during initialization.")},
hy(a){return new A.bc("Field '"+a+"' has not been initialized.")},
aj(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
eC(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eN(a,b,c){return a},
eS(a){var s,r
for(s=$.Q.length,r=0;r<s;++r)if(a===$.Q[r])return!0
return!1},
hB(a,b,c,d){if(t.h.b(a))return new A.aq(a,b,c.h("@<0>").n(d).h("aq<1,2>"))
return new A.a8(a,b,c.h("@<0>").n(d).h("a8<1,2>"))},
er(){return new A.bq("No element")},
aO:function aO(){},
b0:function b0(a,b){this.a=a
this.$ti=b},
bv:function bv(){},
b1:function b1(a,b){this.a=a
this.$ti=b},
bc:function bc(a){this.a=a},
de:function de(){},
d:function d(){},
W:function W(){},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a8:function a8(a,b,c){this.a=a
this.b=b
this.$ti=c},
aq:function aq(a,b,c){this.a=a
this.b=b
this.$ti=c},
bg:function bg(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a9:function a9(a,b,c){this.a=a
this.b=b
this.$ti=c},
bs:function bs(a,b,c){this.a=a
this.b=b
this.$ti=c},
bt:function bt(a,b,c){this.a=a
this.b=b
this.$ti=c},
K:function K(){},
bN:function bN(){},
h4(a){var s=A.h3(a)
if(s!=null)return s
return"minified:"+a},
je(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b_(a)
return s},
bm(a){var s,r=$.fg
if(r==null)r=$.fg=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
dd(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.h(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
fh(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.h.b3(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
cm(a){var s,r,q,p
if(a instanceof A.e)return A.P(A.aX(a),null)
s=J.aE(a)
if(s===B.V||s===B.a0||t.cr.b(a)){r=B.u(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.P(A.aX(a),null)},
fi(a){var s,r,q
if(a==null||typeof a=="number"||A.dW(a))return J.b_(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.af)return a.i(0)
if(a instanceof A.a3)return a.aX(!0)
s=$.hg()
for(r=0;r<1;++r){q=s[r].bR(a)
if(q!=null)return q}return"Instance of '"+A.cm(a)+"'"},
I(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.aU(s,10)|55296)>>>0,s&1023|56320)}throw A.c(A.cn(a,0,1114111,null,null))},
hC(a){var s=a.$thrownJsError
if(s==null)return null
return A.aW(s)},
fj(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.w(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
h(a,b){if(a==null)J.bT(a)
throw A.c(A.dZ(a,b))},
dZ(a,b){var s,r="index"
if(!A.eL(b))return new A.a0(!0,b,r,null)
s=J.bT(a)
if(b<0||b>=s)return A.eq(b,s,a,r)
return A.fk(b,r)},
iW(a){return new A.a0(!0,a,null,null)},
c(a){return A.w(a,new Error())},
w(a,b){var s
if(a==null)a=new A.aa()
b.dartException=a
s=A.ju
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
ju(){return J.b_(this.dartException)},
eW(a,b){throw A.w(a,b==null?new Error():b)},
bS(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.eW(A.ii(a,b,c),s)},
ii(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.br("'"+s+"': Cannot "+o+" "+l+k+n)},
cI(a){throw A.c(A.a1(a))},
ab(a){var s,r,q,p,o,n
a=A.h0(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.t([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.di(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
dj(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
fp(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ev(a,b){var s=b==null,r=s?null:b.method
return new A.c8(a,r,s?null:b.receiver)},
an(a){var s
if(a==null)return new A.d8(a)
if(a instanceof A.b3){s=a.a
return A.am(a,s==null?A.bO(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.am(a,a.dartException)
return A.iU(a)},
am(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
iU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.aU(r,16)&8191)===10)switch(q){case 438:return A.am(a,A.ev(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.am(a,new A.bl())}}if(a instanceof TypeError){p=$.h6()
o=$.h7()
n=$.h8()
m=$.h9()
l=$.hc()
k=$.hd()
j=$.hb()
$.ha()
i=$.hf()
h=$.he()
g=p.F(s)
if(g!=null)return A.am(a,A.ev(A.u(s),g))
else{g=o.F(s)
if(g!=null){g.method="call"
return A.am(a,A.ev(A.u(s),g))}else if(n.F(s)!=null||m.F(s)!=null||l.F(s)!=null||k.F(s)!=null||j.F(s)!=null||m.F(s)!=null||i.F(s)!=null||h.F(s)!=null){A.u(s)
return A.am(a,new A.bl())}}return A.am(a,new A.ct(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bp()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.am(a,new A.a0(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bp()
return a},
aW(a){var s
if(a instanceof A.b3)return a.b
if(a==null)return new A.bH(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bH(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
cH(a){if(a==null)return J.a4(a)
if(typeof a=="object")return A.bm(a)
return J.a4(a)},
j_(a){if(typeof a=="number")return B.c.gp(a)
if(a instanceof A.cF)return A.bm(a)
if(a instanceof A.a3)return a.gp(a)
return A.cH(a)},
fV(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.C(0,a[s],a[r])}return b},
j6(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
iu(a,b,c,d,e,f){t.Z.a(a)
switch(A.V(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.dw("Unsupported number of arguments for wrapped closure"))},
aV(a,b){var s=a.$identity
if(!!s)return s
s=A.j0(a,b)
a.$identity=s
return s},
j0(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.iu)},
hr(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cp().constructor.prototype):Object.create(new A.aG(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.f4(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.hn(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.f4(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
hn(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.hl)}throw A.c("Error in functionType of tearoff")},
ho(a,b,c,d){var s=A.f3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
f4(a,b,c,d){if(c)return A.hq(a,b,d)
return A.ho(b.length,d,a,b)},
hp(a,b,c,d){var s=A.f3,r=A.hm
switch(b?-1:a){case 0:throw A.c(new A.co("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
hq(a,b,c){var s,r
if($.f1==null)$.f1=A.f0("interceptor")
if($.f2==null)$.f2=A.f0("receiver")
s=b.length
r=A.hp(s,c,a,b)
return r},
eO(a){return A.hr(a)},
hl(a,b){return A.bM(v.typeUniverse,A.aX(a.a),b)},
f3(a){return a.a},
hm(a){return a.b},
f0(a){var s,r,q,p=new A.aG("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.cJ("Field name "+a+" not found.",null))},
e0(a){return v.getIsolateTag(a)},
ji(a){var s,r,q,p,o,n=A.u($.fW.$1(a)),m=$.e_[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e6[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.dS($.fS.$2(a,n))
if(q!=null){m=$.e_[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e6[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.e8(s)
$.e_[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.e6[n]=s
return s}if(p==="-"){o=A.e8(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fZ(a,s)
if(p==="*")throw A.c(A.fq(n))
if(v.leafTags[n]===true){o=A.e8(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fZ(a,s)},
fZ(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eT(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
e8(a){return J.eT(a,!1,null,!!a.$iN)},
jk(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.e8(s)
else return J.eT(s,c,null,null)},
jb(){if(!0===$.eR)return
$.eR=!0
A.jc()},
jc(){var s,r,q,p,o,n,m,l
$.e_=Object.create(null)
$.e6=Object.create(null)
A.ja()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.h_.$1(o)
if(n!=null){m=A.jk(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ja(){var s,r,q,p,o,n,m=B.F()
m=A.aU(B.G,A.aU(B.H,A.aU(B.v,A.aU(B.v,A.aU(B.I,A.aU(B.J,A.aU(B.K(B.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fW=new A.e3(p)
$.fS=new A.e4(o)
$.h_=new A.e5(n)},
aU(a,b){return a(b)||b},
j2(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
j4(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
h0(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
eV(a,b,c){var s=A.jr(a,b,c)
return s},
jr(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.h0(b),"g"),A.j4(c))},
D:function D(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
aH:function aH(){},
b2:function b2(a,b,c){this.a=a
this.b=b
this.$ti=c},
ax:function ax(a,b){this.a=a
this.$ti=b},
bA:function bA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a2:function a2(a,b){this.a=a
this.$ti=b},
bo:function bo(){},
di:function di(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bl:function bl(){},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a){this.a=a},
d8:function d8(a){this.a=a},
b3:function b3(a,b){this.a=a
this.b=b},
bH:function bH(a){this.a=a
this.b=null},
af:function af(){},
bW:function bW(){},
bX:function bX(){},
cq:function cq(){},
cp:function cp(){},
aG:function aG(a,b){this.a=a
this.b=b},
co:function co(a){this.a=a},
a6:function a6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d2:function d2(a,b){this.a=a
this.b=b
this.c=null},
a7:function a7(a,b){this.a=a
this.$ti=b},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bf:function bf(a,b){this.a=a
this.$ti=b},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ba:function ba(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
e3:function e3(a){this.a=a},
e4:function e4(a){this.a=a},
e5:function e5(a){this.a=a},
a3:function a3(){},
aQ:function aQ(){},
aR:function aR(){},
aB(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.dZ(b,a))},
aJ:function aJ(){},
bj:function bj(){},
ca:function ca(){},
aK:function aK(){},
bh:function bh(){},
bi:function bi(){},
cb:function cb(){},
cc:function cc(){},
cd:function cd(){},
ce:function ce(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
bk:function bk(){},
ci:function ci(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
eA(a,b){var s=b.c
return s==null?b.c=A.bK(a,"as",[b.x]):s},
fm(a){var s=a.w
if(s===6||s===7)return A.fm(a.x)
return s===11||s===12},
hE(a){return a.as},
ad(a){return A.dO(v.typeUniverse,a,!1)},
aC(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.aC(a1,s,a3,a4)
if(r===s)return a2
return A.fz(a1,r,!0)
case 7:s=a2.x
r=A.aC(a1,s,a3,a4)
if(r===s)return a2
return A.fy(a1,r,!0)
case 8:q=a2.y
p=A.aT(a1,q,a3,a4)
if(p===q)return a2
return A.bK(a1,a2.x,p)
case 9:o=a2.x
n=A.aC(a1,o,a3,a4)
m=a2.y
l=A.aT(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.eF(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aT(a1,j,a3,a4)
if(i===j)return a2
return A.fA(a1,k,i)
case 11:h=a2.x
g=A.aC(a1,h,a3,a4)
f=a2.y
e=A.iR(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.fx(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aT(a1,d,a3,a4)
o=a2.x
n=A.aC(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.eG(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bV("Attempted to substitute unexpected RTI kind "+a0))}},
aT(a,b,c,d){var s,r,q,p,o=b.length,n=A.dP(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aC(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
iS(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dP(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aC(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
iR(a,b,c,d){var s,r=b.a,q=A.aT(a,r,c,d),p=b.b,o=A.aT(a,p,c,d),n=b.c,m=A.iS(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cz()
s.a=q
s.b=o
s.c=m
return s},
t(a,b){a[v.arrayRti]=b
return a},
fU(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.j9(s)
return a.$S()}return null},
jd(a,b){var s
if(A.fm(b))if(a instanceof A.af){s=A.fU(a)
if(s!=null)return s}return A.aX(a)},
aX(a){if(a instanceof A.e)return A.J(a)
if(Array.isArray(a))return A.U(a)
return A.eJ(J.aE(a))},
U(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
J(a){var s=a.$ti
return s!=null?s:A.eJ(a)},
eJ(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.iq(a,s)},
iq(a,b){var s=a instanceof A.af?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.i4(v.typeUniverse,s.name)
b.$ccache=r
return r},
j9(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dO(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
j8(a){return A.aD(A.J(a))},
eM(a){var s
if(a instanceof A.a3)return A.j5(a.$r,a.ah())
s=a instanceof A.af?A.fU(a):null
if(s!=null)return s
if(t.bW.b(a))return J.hj(a).a
if(Array.isArray(a))return A.U(a)
return A.aX(a)},
aD(a){var s=a.r
return s==null?a.r=new A.cF(a):s},
j5(a,b){var s,r,q=b,p=q.length
if(p===0)return t.cD
if(0>=p)return A.h(q,0)
s=A.bM(v.typeUniverse,A.eM(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.h(q,r)
s=A.fC(v.typeUniverse,s,A.eM(q[r]))}return A.bM(v.typeUniverse,s,a)},
a_(a){return A.aD(A.dO(v.typeUniverse,a,!1))},
ip(a){var s=this
s.b=A.iP(s)
return s.b(a)},
iP(a){var s,r,q,p,o
if(a===t.K)return A.iA
if(A.aF(a))return A.iE
s=a.w
if(s===6)return A.im
if(s===1)return A.fN
if(s===7)return A.iv
r=A.iO(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.aF)){a.f="$i"+q
if(q==="i")return A.iy
if(a===t.m)return A.ix
return A.iD}}else if(s===10){p=A.j2(a.x,a.y)
o=p==null?A.fN:p
return o==null?A.bO(o):o}return A.ik},
iO(a){if(a.w===8){if(a===t.S)return A.eL
if(a===t.i||a===t.o)return A.iz
if(a===t.N)return A.iC
if(a===t.y)return A.dW}return null},
io(a){var s=this,r=A.ij
if(A.aF(s))r=A.i9
else if(s===t.K)r=A.bO
else if(A.aY(s)){r=A.il
if(s===t.a3)r=A.i8
else if(s===t.aD)r=A.dS
else if(s===t.cG)r=A.i6
else if(s===t.ae)r=A.fG
else if(s===t.a2)r=A.i7
else if(s===t.aQ)r=A.al}else if(s===t.S)r=A.V
else if(s===t.N)r=A.u
else if(s===t.y)r=A.dQ
else if(s===t.o)r=A.fF
else if(s===t.i)r=A.dR
else if(s===t.m)r=A.o
s.a=r
return s.a(a)},
ik(a){var s=this
if(a==null)return A.aY(s)
return A.jf(v.typeUniverse,A.jd(a,s),s)},
im(a){if(a==null)return!0
return this.x.b(a)},
iD(a){var s,r=this
if(a==null)return A.aY(r)
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.aE(a)[s]},
iy(a){var s,r=this
if(a==null)return A.aY(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.e)return!!a[s]
return!!J.aE(a)[s]},
ix(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.e)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fM(a){if(typeof a=="object"){if(a instanceof A.e)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
ij(a){var s=this
if(a==null){if(A.aY(s))return a}else if(s.b(a))return a
throw A.w(A.fI(a,s),new Error())},
il(a){var s=this
if(a==null||s.b(a))return a
throw A.w(A.fI(a,s),new Error())},
fI(a,b){return new A.bI("TypeError: "+A.fr(a,A.P(b,null)))},
fr(a,b){return A.c0(a)+": type '"+A.P(A.eM(a),null)+"' is not a subtype of type '"+b+"'"},
T(a,b){return new A.bI("TypeError: "+A.fr(a,b))},
iv(a){var s=this
return s.x.b(a)||A.eA(v.typeUniverse,s).b(a)},
iA(a){return a!=null},
bO(a){if(a!=null)return a
throw A.w(A.T(a,"Object"),new Error())},
iE(a){return!0},
i9(a){return a},
fN(a){return!1},
dW(a){return!0===a||!1===a},
dQ(a){if(!0===a)return!0
if(!1===a)return!1
throw A.w(A.T(a,"bool"),new Error())},
i6(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.w(A.T(a,"bool?"),new Error())},
dR(a){if(typeof a=="number")return a
throw A.w(A.T(a,"double"),new Error())},
i7(a){if(typeof a=="number")return a
if(a==null)return a
throw A.w(A.T(a,"double?"),new Error())},
eL(a){return typeof a=="number"&&Math.floor(a)===a},
V(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.w(A.T(a,"int"),new Error())},
i8(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.w(A.T(a,"int?"),new Error())},
iz(a){return typeof a=="number"},
fF(a){if(typeof a=="number")return a
throw A.w(A.T(a,"num"),new Error())},
fG(a){if(typeof a=="number")return a
if(a==null)return a
throw A.w(A.T(a,"num?"),new Error())},
iC(a){return typeof a=="string"},
u(a){if(typeof a=="string")return a
throw A.w(A.T(a,"String"),new Error())},
dS(a){if(typeof a=="string")return a
if(a==null)return a
throw A.w(A.T(a,"String?"),new Error())},
o(a){if(A.fM(a))return a
throw A.w(A.T(a,"JSObject"),new Error())},
al(a){if(a==null)return a
if(A.fM(a))return a
throw A.w(A.T(a,"JSObject?"),new Error())},
fQ(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.P(a[q],b)
return s},
iJ(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fQ(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.P(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fJ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.t([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.t(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.h(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.P(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.P(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.P(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.P(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.P(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
P(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.P(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.P(a.x,b)+">"
if(l===8){p=A.iT(a.x)
o=a.y
return o.length>0?p+("<"+A.fQ(o,b)+">"):p}if(l===10)return A.iJ(a,b)
if(l===11)return A.fJ(a,b,null)
if(l===12)return A.fJ(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.h(b,n)
return b[n]}return"?"},
iT(a){var s=A.h3(a)
if(s!=null)return s
return"minified:"+a},
i5(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
i4(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dO(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bL(a,5,"#")
q=A.dP(s)
for(p=0;p<s;++p)q[p]=r
o=A.bK(a,b,q)
n[b]=o
return o}else return m},
i3(a,b){return A.fD(a.tR,b)},
i2(a,b){return A.fD(a.eT,b)},
dO(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fB(a,null,b,!1)
r.set(b,s)
return s},
bM(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fB(a,b,c,!0)
q.set(c,r)
return r},
fC(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.eF(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
fB(a,b,c,d){return A.hV(A.hP(a,b,c,d))},
ak(a,b){b.a=A.io
b.b=A.ip
return b},
bL(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.Y(null,null)
s.w=b
s.as=c
r=A.ak(a,s)
a.eC.set(c,r)
return r},
fz(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.i0(a,b,r,c)
a.eC.set(r,s)
return s},
i0(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.aF(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aY(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.Y(null,null)
q.w=6
q.x=b
q.as=c
return A.ak(a,q)},
fy(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hZ(a,b,r,c)
a.eC.set(r,s)
return s},
hZ(a,b,c,d){var s,r
if(d){s=b.w
if(A.aF(b)||b===t.K)return b
else if(s===1)return A.bK(a,"as",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.Y(null,null)
r.w=7
r.x=b
r.as=c
return A.ak(a,r)},
i1(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.Y(null,null)
s.w=13
s.x=b
s.as=q
r=A.ak(a,s)
a.eC.set(q,r)
return r},
bJ(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
hY(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bK(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bJ(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.Y(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ak(a,r)
a.eC.set(p,q)
return q},
eF(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bJ(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.Y(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ak(a,o)
a.eC.set(q,n)
return n},
fA(a,b,c){var s,r,q="+"+(b+"("+A.bJ(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.Y(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ak(a,s)
a.eC.set(q,r)
return r},
fx(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bJ(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bJ(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.hY(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.Y(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ak(a,p)
a.eC.set(r,o)
return o},
eG(a,b,c,d){var s,r=b.as+("<"+A.bJ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.i_(a,b,c,r,d)
a.eC.set(r,s)
return s},
i_(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dP(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.aC(a,b,r,0)
m=A.aT(a,c,r,0)
return A.eG(a,n,m,c!==m)}}l=new A.Y(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ak(a,l)},
hP(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hV(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hR(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.fv(a,r,l,k,!1)
else if(q===46)r=A.fv(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.az(a.u,a.e,k.pop()))
break
case 94:k.push(A.i1(a.u,k.pop()))
break
case 35:k.push(A.bL(a.u,5,"#"))
break
case 64:k.push(A.bL(a.u,2,"@"))
break
case 126:k.push(A.bL(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hT(a,k)
break
case 38:A.hS(a,k)
break
case 63:p=a.u
k.push(A.fz(p,A.az(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fy(p,A.az(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hQ(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fw(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hW(a.u,a.e,o)
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
return A.az(a.u,a.e,m)},
hR(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
fv(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.i5(s,o.x)[p]
if(n==null)A.eW('No "'+p+'" in "'+A.hE(o)+'"')
d.push(A.bM(s,o,n))}else d.push(p)
return m},
hT(a,b){var s,r=a.u,q=A.fu(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bK(r,p,q))
else{s=A.az(r,a.e,p)
switch(s.w){case 11:b.push(A.eG(r,s,q,a.n))
break
default:b.push(A.eF(r,s,q))
break}}},
hQ(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.fu(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.az(p,a.e,o)
q=new A.cz()
q.a=s
q.b=n
q.c=m
b.push(A.fx(p,r,q))
return
case-4:b.push(A.fA(p,b.pop(),s))
return
default:throw A.c(A.bV("Unexpected state under `()`: "+A.q(o)))}},
hS(a,b){var s=b.pop()
if(0===s){b.push(A.bL(a.u,1,"0&"))
return}if(1===s){b.push(A.bL(a.u,4,"1&"))
return}throw A.c(A.bV("Unexpected extended operation "+A.q(s)))},
fu(a,b){var s=b.splice(a.p)
A.fw(a.u,a.e,s)
a.p=b.pop()
return s},
az(a,b,c){if(typeof c=="string")return A.bK(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hU(a,b,c)}else return c},
fw(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.az(a,b,c[s])},
hW(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.az(a,b,c[s])},
hU(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.bV("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bV("Bad index "+c+" for "+b.i(0)))},
jf(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.A(a,b,null,c,null)
r.set(c,s)}return s},
A(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.aF(d))return!0
s=b.w
if(s===4)return!0
if(A.aF(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.A(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.A(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.A(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.A(a,b.x,c,d,e))return!1
return A.A(a,A.eA(a,b),c,d,e)}if(s===6)return A.A(a,p,c,d,e)&&A.A(a,b.x,c,d,e)
if(q===7){if(A.A(a,b,c,d.x,e))return!0
return A.A(a,b,c,A.eA(a,d),e)}if(q===6)return A.A(a,b,c,p,e)||A.A(a,b,c,d.x,e)
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
if(!A.A(a,j,c,i,e)||!A.A(a,i,e,j,c))return!1}return A.fL(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.fL(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.iw(a,b,c,d,e)}if(o&&q===10)return A.iB(a,b,c,d,e)
return!1},
fL(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
iw(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bM(a,b,r[o])
return A.fE(a,p,null,c,d.y,e)}return A.fE(a,b.y,null,c,d.y,e)},
fE(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.A(a,b[s],d,e[s],f))return!1
return!0},
iB(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.A(a,r[s],c,q[s],e))return!1
return!0},
aY(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.aF(a))if(s!==6)r=s===7&&A.aY(a.x)
return r},
aF(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fD(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dP(a){return a>0?new Array(a):v.typeUniverse.sEA},
Y:function Y(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cz:function cz(){this.c=this.b=this.a=null},
cF:function cF(a){this.a=a},
cy:function cy(){},
bI:function bI(a){this.a=a},
hH(){var s,r,q
if(self.scheduleImmediate!=null)return A.iX()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.aV(new A.ds(s),1)).observe(r,{childList:true})
return new A.dr(s,r,q)}else if(self.setImmediate!=null)return A.iY()
return A.iZ()},
hI(a){self.scheduleImmediate(A.aV(new A.dt(t.M.a(a)),0))},
hJ(a){self.setImmediate(A.aV(new A.du(t.M.a(a)),0))},
hK(a){t.M.a(a)
A.hX(0,a)},
hX(a,b){var s=new A.dM()
s.b9(a,b)
return s},
iG(a){return new A.cv(new A.z($.v,a.h("z<0>")),a.h("cv<0>"))},
ic(a,b){a.$2(0,null)
b.b=!0
return b.a},
fH(a,b){A.id(a,b)},
ib(a,b){b.ap(a)},
ia(a,b){b.aq(A.an(a),A.aW(a))},
id(a,b){var s,r,q=new A.dT(b),p=new A.dU(b)
if(a instanceof A.z)a.aW(q,p,t.z)
else{s=t.z
if(a instanceof A.z)a.b2(q,p,s)
else{r=new A.z($.v,t._)
r.a=8
r.c=a
r.aW(q,p,s)}}},
iV(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.v
return r.aR(r,t.aS.a(new A.dY(s)),t.H,t.S,t.z)},
cK(a){var s
if(t.C.b(a)){s=a.gY()
if(s!=null)return s}return B.j},
ir(a,b){var s=$.v
if(s===B.f)return null
s.bi(s,a,b)
return null},
is(a,b){if($.v!==B.f)A.ir(a,b)
if(b==null)if(t.C.b(a)){b=a.gY()
if(b==null){A.fj(a,B.j)
b=B.j}}else b=B.j
else if(t.C.b(a))A.fj(a,b)
return new A.R(a,b)},
eD(a,b,c){var s,r,q,p,o,n={},m=n.a=a
for(s=t._;r=m.a,(r&4)!==0;m=a){a=s.a(m.c)
n.a=a}if(m===b){s=A.hF()
b.ab(new A.R(new A.a0(!0,m,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=m.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=m
m.aP(p)
return}if(!c)if(b.c==null)m=(s&16)===0||q!==0
else m=!1
else m=!0
if(m){p=b.a2()
b.a0(n.a)
A.aP(b,p)
return}b.a^=2
o=b.b
o.U(o,new A.dA(n,b))},
aP(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=e.a=a
for(s=t.n,r=t.F;;){q={}
p=d.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(d.c)
d=d.b
d.aL(d,m.a,m.b)}return}q.a=b
l=b.a
for(d=b;l!=null;d=l,l=k){d.a=null
A.aP(e.a,d)
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
if((d&15)===8)new A.dE(q,e,n).$0()
else if(o){if((d&1)!==0)new A.dD(q,j).$0()}else if((d&2)!==0)new A.dC(e,q).$0()
if(h!=null)$.v=h
d=q.c
if(d instanceof A.z){p=q.a.$ti
p=p.h("as<2>").b(d)||!p.y[1].b(d)}else p=!1
if(p){g=q.a.b
if((d.a&24)!==0){f=r.a(g.c)
g.c=null
b=g.a3(f)
g.a=d.a&30|g.a&1
g.c=d.c
e.a=d
continue}else A.eD(d,g,!0)
return}}g=q.a.b
f=r.a(g.c)
g.c=null
b=g.a3(f)
d=q.b
p=q.c
if(!d){g.$ti.c.a(p)
g.a=8
g.c=p}else{s.a(p)
g.a=g.a&1|16
g.c=p}e.a=g
d=g}},
fP(a,b){var s=t.Q
if(s.b(a))return b.aR(b,s.a(a),t.z,t.K,t.l)
s=t.v
if(s.b(a))return b.aS(b,s.a(a),t.z,t.K)
throw A.c(A.f_(a,"onError",u.c))},
iH(){var s,r
for(s=$.aS;s!=null;s=$.aS){$.bQ=null
r=s.b
$.aS=r
if(r==null)$.bP=null
s.a.$0()}},
iQ(){$.eK=!0
try{A.iH()}finally{$.bQ=null
$.eK=!1
if($.aS!=null)$.eY().$1(A.fT())}},
fR(a){var s=new A.cw(a),r=$.bP
if(r==null){$.aS=$.bP=s
if(!$.eK)$.eY().$1(A.fT())}else $.bP=r.b=s},
iN(a){var s,r,q,p=$.aS
if(p==null){A.fR(a)
$.bQ=$.bP
return}s=new A.cw(a)
r=$.bQ
if(r==null){s.b=p
$.aS=$.bQ=s}else{q=r.b
s.b=q
$.bQ=r.b=s
if(q==null)$.bP=s}},
jA(a,b){A.eN(a,"stream",t.K)
return new A.cD(b.h("cD<0>"))},
iL(a,b){A.iN(new A.dX(a,b))},
iM(a,b){if(B.f!==a)b=a.bA(b,t.H)
A.fR(b)},
ds:function ds(a){this.a=a},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
dt:function dt(a){this.a=a},
du:function du(a){this.a=a},
dM:function dM(){},
dN:function dN(a,b){this.a=a
this.b=b},
cv:function cv(a,b){this.a=a
this.b=!1
this.$ti=b},
dT:function dT(a){this.a=a},
dU:function dU(a){this.a=a},
dY:function dY(a){this.a=a},
R:function R(a,b){this.a=a
this.b=b},
cx:function cx(){},
bu:function bu(a,b){this.a=a
this.$ti=b},
ac:function ac(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
z:function z(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
dx:function dx(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.b=b},
dA:function dA(a,b){this.a=a
this.b=b},
dz:function dz(a,b){this.a=a
this.b=b},
dy:function dy(a,b){this.a=a
this.b=b},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(a,b){this.a=a
this.b=b},
dG:function dG(a){this.a=a},
dD:function dD(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=a
this.b=b},
cw:function cw(a){this.a=a
this.b=null},
cD:function cD(a){this.$ti=a},
dp:function dp(){},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
dX:function dX(a,b){this.a=a
this.b=b},
fs(a,b){var s=a[b]
return s===a?null:s},
ft(a,b,c){if(c==null)a[b]=a
else a[b]=c},
hL(){var s=Object.create(null)
A.ft(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
ex(a,b,c){return b.h("@<0>").n(c).h("ew<1,2>").a(A.fV(a,new A.a6(b.h("@<0>").n(c).h("a6<1,2>"))))},
fa(a,b){return new A.a6(a.h("@<0>").n(b).h("a6<1,2>"))},
hz(a,b){return b.h("fb<0>").a(A.j6(a,new A.bB(b.h("bB<0>"))))},
eE(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hO(a,b,c){var s=new A.ay(a,b,c.h("ay<0>"))
s.c=a.e
return s},
ez(a){var s,r
if(A.eS(a))return"{...}"
s=new A.aM("")
try{r={}
B.a.t($.Q,a)
s.a+="{"
r.a=!0
a.G(0,new A.d5(r,s))
s.a+="}"}finally{if(0>=$.Q.length)return A.h($.Q,-1)
$.Q.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bw:function bw(){},
bz:function bz(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
bx:function bx(a,b){this.a=a
this.$ti=b},
by:function by(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bB:function bB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cC:function cC(a){this.a=a
this.c=this.b=null},
ay:function ay(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
m:function m(){},
y:function y(){},
d5:function d5(a,b){this.a=a
this.b=b},
aL:function aL(){},
bG:function bG(){},
iI(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.an(r)
q=String(s)
throw A.c(new A.c1(q))}q=A.dV(p)
return q},
dV(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.cA(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.dV(a[s])
return a},
f8(a,b,c){return new A.bb(a,b)},
ih(a){return a.bZ()},
hM(a,b){return new A.dI(a,[],A.j1())},
hN(a,b,c){var s,r=new A.aM(""),q=A.hM(r,b)
q.a9(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
cA:function cA(a,b){this.a=a
this.b=b
this.c=null},
cB:function cB(a){this.a=a},
bY:function bY(){},
c_:function c_(){},
bb:function bb(a,b){this.a=a
this.b=b},
c9:function c9(a,b){this.a=a
this.b=b},
d_:function d_(){},
d1:function d1(a){this.b=a},
d0:function d0(a){this.a=a},
dJ:function dJ(){},
dK:function dK(a,b){this.a=a
this.b=b},
dI:function dI(a,b,c){this.c=a
this.a=b
this.b=c},
hs(a,b){a=A.w(a,new Error())
if(a==null)a=A.bO(a)
a.stack=b.i(0)
throw a},
fc(a,b,c){var s,r
if(a>4294967295)A.eW(A.cn(a,0,4294967295,"length",null))
s=A.t(new Array(a),c.h("l<0>"))
s.$flags=1
r=s
return r},
hA(a,b,c){var s,r,q=A.t([],c.h("l<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.cI)(a),++r)B.a.t(q,c.a(a[r]))
q.$flags=1
return q},
ey(a,b){var s,r
if(Array.isArray(a))return A.t(a.slice(0),b.h("l<0>"))
s=A.t([],b.h("l<0>"))
for(r=J.aZ(a);r.k();)B.a.t(s,r.gm())
return s},
fd(a,b){var s=A.hA(a,!1,b)
s.$flags=3
return s},
fo(a,b,c){var s=J.aZ(b)
if(!s.k())return a
if(c.length===0){do a+=A.q(s.gm())
while(s.k())}else{a+=A.q(s.gm())
while(s.k())a=a+c+A.q(s.gm())}return a},
hF(){return A.aW(new Error())},
c0(a){if(typeof a=="number"||A.dW(a)||a==null)return J.b_(a)
if(typeof a=="string")return JSON.stringify(a)
return A.fi(a)},
ht(a,b){A.eN(a,"error",t.K)
A.eN(b,"stackTrace",t.l)
A.hs(a,b)},
bV(a){return new A.bU(a)},
cJ(a,b){return new A.a0(!1,null,b,a)},
f_(a,b,c){return new A.a0(!0,a,b,c)},
fk(a,b){return new A.bn(null,null,!0,a,b,"Value not in range")},
cn(a,b,c,d,e){return new A.bn(b,c,!0,a,d,"Invalid value")},
hD(a,b,c){if(0>a||a>c)throw A.c(A.cn(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.cn(b,a,c,"end",null))
return b}return c},
fl(a,b){return a},
eq(a,b,c,d){return new A.c3(b,!0,a,d,"Index out of range")},
cu(a){return new A.br(a)},
fq(a){return new A.cs(a)},
fn(a){return new A.bq(a)},
a1(a){return new A.bZ(a)},
hu(a,b,c){var s,r
if(A.eS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.t([],t.s)
B.a.t($.Q,a)
try{A.iF(a,s)}finally{if(0>=$.Q.length)return A.h($.Q,-1)
$.Q.pop()}r=A.fo(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
es(a,b,c){var s,r
if(A.eS(a))return b+"..."+c
s=new A.aM(b)
B.a.t($.Q,a)
try{r=s
r.a=A.fo(r.a,a,", ")}finally{if(0>=$.Q.length)return A.h($.Q,-1)
$.Q.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
iF(a,b){var s,r,q,p,o,n,m,l=a.gq(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.k())return
s=A.q(l.gm())
B.a.t(b,s)
k+=s.length+2;++j}if(!l.k()){if(j<=5)return
if(0>=b.length)return A.h(b,-1)
r=b.pop()
if(0>=b.length)return A.h(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.k()){if(j<=4){B.a.t(b,A.q(p))
return}r=A.q(p)
if(0>=b.length)return A.h(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.k();p=o,o=n){n=l.gm();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.h(b,-1)
k-=b.pop().length+2;--j}B.a.t(b,"...")
return}}q=A.q(p)
r=A.q(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.h(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.t(b,m)
B.a.t(b,q)
B.a.t(b,r)},
fe(a,b,c,d){var s
if(B.o===c){s=B.b.gp(a)
b=J.a4(b)
return A.eC(A.aj(A.aj($.em(),s),b))}if(B.o===d){s=B.b.gp(a)
b=J.a4(b)
c=J.a4(c)
return A.eC(A.aj(A.aj(A.aj($.em(),s),b),c))}s=B.b.gp(a)
b=J.a4(b)
c=J.a4(c)
d=J.a4(d)
d=A.eC(A.aj(A.aj(A.aj(A.aj($.em(),s),b),c),d))
return d},
dv:function dv(){},
r:function r(){},
bU:function bU(a){this.a=a},
aa:function aa(){},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
c3:function c3(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
br:function br(a){this.a=a},
cs:function cs(a){this.a=a},
bq:function bq(a){this.a=a},
bZ:function bZ(a){this.a=a},
bp:function bp(){},
dw:function dw(a){this.a=a},
c1:function c1(a){this.a=a},
b:function b(){},
H:function H(){},
e:function e(){},
cE:function cE(){},
aM:function aM(a){this.a=a},
d7:function d7(a){this.a=a},
fK(a){var s
if(typeof a=="function")throw A.c(A.cJ("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.ie,a)
s[$.eX()]=a
return s},
ie(a,b,c){t.Z.a(a)
if(A.V(c)>=1)return a.$1(b)
return a.$0()},
fO(a){return a==null||A.dW(a)||typeof a=="number"||typeof a=="string"||t.D.b(a)||t.bX.b(a)||t.ca.b(a)||t.O.b(a)||t.c0.b(a)||t.k.b(a)||t.bk.b(a)||t.B.b(a)||t.q.b(a)||t.J.b(a)||t.V.b(a)},
jg(a){if(A.fO(a))return a
return new A.e7(new A.bz(t.dd)).$1(a)},
eU(a,b){var s=new A.z($.v,b.h("z<0>")),r=new A.bu(s,b.h("bu<0>"))
a.then(A.aV(new A.ed(r,b),1),A.aV(new A.ee(r),1))
return s},
e7:function e7(a){this.a=a},
ed:function ed(a,b){this.a=a
this.b=b},
ee:function ee(a){this.a=a},
cG(a){var s=69+12*(Math.log(a/440)/0.6931471805599453),r=B.c.A(s)
return new A.d6(r,B.c.A((s-r)*100))},
jq(a){var s,r,q,p=a.length
if(p===0)return 0
for(s=0,r=0;r<p;++r){q=a[r]
s+=q*q}return Math.sqrt(s/p)},
jm(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1/b,f=Math.max(1,B.c.bI(a0/g)),e=a.length,d=Math.min(e-2,B.c.bB(c/g))
if(d<=f)return null
s=A.t([],t.u)
for(r=f,q=r;r<=d;++r){if(!(r>=0&&r<e))return A.h(a,r)
p=a[r]
p=isFinite(p)?p:-200
B.a.t(s,p)
if(!(q>=0&&q<e))return A.h(a,q)
o=a[q]
if(p>(isFinite(o)?o:-200))q=r}B.a.aA(s)
o=s.length
n=o/2|0
if(!(n<o))return A.h(s,n)
m=s[n]
if(!(q>=0&&q<e))return A.h(a,q)
l=a[q]
if(!isFinite(l)||l-m<18)return null
o=q-1
if(!(o>=0))return A.h(a,o)
k=a[o]
o=q+1
if(!(o<e))return A.h(a,o)
j=a[o]
if(isFinite(k)&&isFinite(j)){i=k-2*l+j
h=i!==0?B.c.a4(0.5*(k-j)/i,-0.5,0.5):0}else h=0
return(q+h)*g},
fY(a){var s,r,q,p=A.ey(a,t.i)
B.a.aA(p)
s=p.length
r=s/2|0
if((s&1)===1){if(!(r<s))return A.h(p,r)
p=p[r]}else{q=r-1
if(!(q>=0&&q<s))return A.h(p,q)
q=p[q]
if(!(r<s))return A.h(p,r)
p=(q+p[r])/2}return p},
d6:function d6(a,b){this.a=a
this.b=b},
cV:function cV(a){var _=this
_.a=0.02
_.e=null
_.f=0
_.r=a},
d3:function d3(a,b){this.a=a
this.b=b},
d4:function d4(){},
f5(a){return B.a.a6(B.A,new A.cL(a),new A.cM())},
ef(a,b){var s,r,q,p,o,n,m=B.ar.l(0,a),l=m.l(0,b)
if(t.b1.b(l))return new A.cj(l.a,l.b,null,l.c)
s=m.gB().bO(0,new A.eg(b))
r=m.l(0,s)
q=r.a
p=r.b
o=r.c
n=s/b
return new A.cj(B.c.M(q*n),B.c.M(p*n),s,o)},
j3(a,b){var s=a.r
if(Math.abs(b-s)<0.75)return"A common depth for a "+a.c.toLowerCase()+": a balance of attack and body."
return b<s?"Shallower than usual: tends toward a quicker, more cutting attack and a shorter, tighter sound.":"Deeper than usual: tends toward more body and low end, with a fuller, longer sound."},
jl(a){return B.a.a6(B.p,new A.e9(a),new A.ea())},
fX(a,b){return B.a.a6(a,new A.e1(b),new A.e2(a))},
jp(a){return B.a.a6(B.q,new A.ei(a),new A.ej())},
jn(a,b,c){var s,r,q,p,o,n,m=A.ey(a,t.U)
B.a.aa(m,new A.ec())
s=A.t([],t.r)
for(r=-c,q=0;q<m.length;++q){p=m[q]
o=Math.pow(2,r*q/12)
if(!(q<m.length))return A.h(m,q)
n=m[q]
s.push(new A.aw(p.a,p.b,b*o,A.ef(n.a,n.b)))}return s},
L:function L(a,b){this.a=a
this.b=b},
E:function E(a,b,c,d,e,f,g){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.a=f
_.b=g},
cL:function cL(a){this.a=a},
cM:function cM(){},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eg:function eg(a){this.a=a},
b4:function b4(a,b){this.a=a
this.b=b},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
e9:function e9(a){this.a=a},
ea:function ea(){},
F:function F(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e1:function e1(a){this.a=a},
e2:function e2(a){this.a=a},
X:function X(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ei:function ei(a){this.a=a},
ej:function ej(){},
at:function at(a,b){this.a=a
this.b=b},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ec:function ec(){},
k(a,b){var s=A.al(A.o(v.G.document).getElementById(a))
s.toString
return b.a(s)},
x(a,b,c){var s=A.o(A.o(v.G.document).createElement(a))
if(b!=null)s.className=b
if(c!=null)s.textContent=c
return s},
Z(a,b,c){return a.addEventListener(b,A.fK(new A.eb(c)))},
jh(a){var s,r,q,p,o=null
try{s=A.al(v.G.localStorage)
q=s
r=q==null?o:A.et(q,"getItem",a,o,t.X)
q=r!=null&&typeof r==="string"?A.u(r):o
return q}catch(p){return o}},
h1(a,b){var s,r,q
try{s=A.al(v.G.localStorage)
r=s
if(r!=null)A.et(r,"setItem",a,b,t.X)}catch(q){}},
jo(){var s,r,q,p,o,n=A.o(v.G.navigator).serviceWorker,m=t.m
if(!m.b(n))return
try{s=A.et(A.o(n),"register","sw.js",null,m)
m=A.eU(s,t.X)
r=new A.eh()
q=m.$ti
p=$.v
if(p!==B.f)r=A.fP(r,p)
m.a_(new A.ac(new A.z(p,q),2,null,r,q.h("ac<1,1>")))}catch(o){}},
jv(){var s=v.G,r=A.al(A.o(s.document).getElementById("themeToggle")),q=A.o(A.o(s.document).documentElement)
if(r==null)return
s=new A.el(q,r)
A.Z(r,"click",new A.ek(q,s))
s.$0()},
eb:function eb(a){this.a=a},
eh:function eh(){},
el:function el(a,b){this.a=a
this.b=b},
ek:function ek(a,b){this.a=a
this.b=b},
jj(){var s,r,q
A.jv()
A.jo()
if(A.al(A.o(v.G.document).getElementById("guide"))==null)return
s=t.m
r=new A.c2(A.k("drum-type",s),A.k("drum-size",s),A.k("drum-depth",s),A.k("material",s),A.k("batter",s),A.k("reso",s),A.k("relation",s),A.k("range-title",s),A.k("range-low",s),A.k("range-med",s),A.k("range-high",s),A.k("range-scaled",s),A.k("notes",s),B.d,A.t([],t.x))
r.X()
q=t.u
new A.cr(r,A.k("mic-start",s),A.k("reading-hz",s),A.k("reading-note",s),A.k("needle",s),A.k("level",s),A.k("listen-state",s),A.k("sensitivity",s),A.k("lugs",s),A.k("lug-status",s),A.k("target-line",s),A.k("target-mark",s),A.k("tuner-status",s),new A.cV(A.t([],q)),A.t([],q)).X()
q=t.U
new A.cl(A.k("plan-sizes",s),A.k("plan-interval",s),A.k("plan-top",s),A.k("plan-out",s),A.k("plan-summary",s),A.hz([B.aE,B.aF,B.aG],q),A.fa(q,s)).X()
A.iK()},
eH(a){return a<100?B.c.I(a,1):B.b.i(B.c.A(a))},
aA(a,b){var s,r,q,p
a.replaceChildren()
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.cI)(b),++r){q=b[r]
p=A.x("option",null,q.b)
p.setAttribute("value",q.a)
a.appendChild(p)}},
eI(a){return a===B.c.M(a)?""+B.c.A(a)+'"':A.q(a)+'"'},
ig(a){var s,r,q,p,o,n=A.x("p","cite","Sources: ")
for(s=a.length,r=!0,q=0;q<s;++q){p=B.r.l(0,a[q])
if(p==null)continue
if(!r)n.appendChild(A.x("span",null," \xb7 "))
o=A.x("a",null,p.a)
o.setAttribute("href",p.b)
o.setAttribute("rel","noopener")
o.setAttribute("target","_blank")
n.appendChild(o)
r=!1}return n},
iK(){var s,r,q,p,o=A.k("sources",t.m)
for(s=B.r.gb4(),s=s.gq(s);s.k();){r=s.gm()
q=A.x("li",null,null)
p=A.x("a",null,r.a)
p.setAttribute("href",r.b)
p.setAttribute("rel","noopener")
p.setAttribute("target","_blank")
q.appendChild(p)
o.appendChild(q)}},
c2:function c2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cS:function cS(a){this.a=a},
cT:function cT(a){this.a=a},
cU:function cU(a){this.a=a},
cP:function cP(){},
cR:function cR(){},
cQ:function cQ(a){this.a=a},
cr:function cr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.dy=o
_.fr=null
_.fx=$},
dg:function dg(a){this.a=a},
dh:function dh(a){this.a=a},
df:function df(a){this.a=a},
cl:function cl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dc:function dc(a){this.a=a},
d9:function d9(){},
da:function da(){},
h3(a){return v.mangledGlobalNames[a]},
js(a){throw A.w(A.f9(a),new Error())},
h2(){throw A.w(A.hy(""),new Error())},
jt(){throw A.w(A.f9(""),new Error())},
f6(a,b,c,d,e,f){var s
if(d==null)return a[b](c)
else{s=a[b](c,d)
return s}},
et(a,b,c,d,e){return e.a(A.f6(a,b,c,d,null,null))}},B={}
var w=[A,J,B]
var $={}
A.eu.prototype={}
J.c4.prototype={
N(a,b){return a===b},
gp(a){return A.bm(a)},
i(a){return"Instance of '"+A.cm(a)+"'"},
gv(a){return A.aD(A.eJ(this))}}
J.c6.prototype={
i(a){return String(a)},
gp(a){return a?519018:218159},
gv(a){return A.aD(t.y)},
$in:1,
$iB:1}
J.b6.prototype={
N(a,b){return null==b},
i(a){return"null"},
gp(a){return 0},
$in:1}
J.b8.prototype={$ip:1}
J.ah.prototype={
gp(a){return 0},
i(a){return String(a)}}
J.ck.prototype={}
J.aN.prototype={}
J.ag.prototype={
i(a){var s=a[$.h5()]
if(s==null)s=a[$.eX()]
if(s==null)return this.b8(a)
return"JavaScript function for "+J.b_(s)},
$iar:1}
J.b7.prototype={
gp(a){return 0},
i(a){return String(a)}}
J.b9.prototype={
gp(a){return 0},
i(a){return String(a)}}
J.l.prototype={
t(a,b){A.U(a).c.a(b)
a.$flags&1&&A.bS(a,29)
a.push(b)},
bQ(a,b){var s
a.$flags&1&&A.bS(a,"removeAt",1)
s=a.length
if(b>=s)throw A.c(A.fk(b,null))
return a.splice(b,1)[0]},
bz(a,b){var s
A.U(a).h("b<1>").a(b)
a.$flags&1&&A.bS(a,"addAll",2)
for(s=b.gq(b);s.k();)a.push(s.gm())},
aZ(a){a.$flags&1&&A.bS(a,"clear","clear")
a.length=0},
S(a,b,c){var s=A.U(a)
return new A.a9(a,s.n(c).h("1(2)").a(b),s.h("@<1>").n(c).h("a9<1,2>"))},
a6(a,b,c){var s,r,q,p=A.U(a)
p.h("B(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.a1(a))}if(c!=null)return c.$0()
throw A.c(A.er())},
E(a,b){if(!(b<a.length))return A.h(a,b)
return a[b]},
gW(a){if(a.length>0)return a[0]
throw A.c(A.er())},
bG(a,b){var s,r
A.U(a).h("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.a1(a))}return!0},
aa(a,b){var s,r,q,p,o,n=A.U(a)
n.h("a(1,1)?").a(b)
a.$flags&2&&A.bS(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.it()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.bV()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.aV(b,2))
if(p>0)this.bq(a,p)},
aA(a){return this.aa(a,null)},
bq(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
a5(a,b){var s
for(s=0;s<a.length;++s)if(J.ae(a[s],b))return!0
return!1},
gu(a){return a.length===0},
gH(a){return a.length!==0},
i(a){return A.es(a,"[","]")},
gq(a){return new J.ap(a,a.length,A.U(a).h("ap<1>"))},
gp(a){return A.bm(a)},
gj(a){return a.length},
l(a,b){if(!(b>=0&&b<a.length))throw A.c(A.dZ(a,b))
return a[b]},
C(a,b,c){A.U(a).c.a(c)
a.$flags&2&&A.bS(a)
if(!(b>=0&&b<a.length))throw A.c(A.dZ(a,b))
a[b]=c},
$id:1,
$ib:1,
$ii:1}
J.c5.prototype={
bR(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.cm(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.cZ.prototype={}
J.ap.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.cI(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iG:1}
J.aI.prototype={
L(a,b){var s
A.fF(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.ga7(b)
if(this.ga7(a)===s)return 0
if(this.ga7(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga7(a){return a===0?1/a<0:a<0},
bB(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.cu(""+a+".ceil()"))},
bI(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.c(A.cu(""+a+".floor()"))},
A(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.cu(""+a+".round()"))},
M(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
a4(a,b,c){if(this.L(b,c)>0)throw A.c(A.iW(b))
if(this.L(a,b)<0)return b
if(this.L(a,c)>0)return c
return a},
I(a,b){var s
if(b>20)throw A.c(A.cn(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.ga7(a))return"-"+s
return s},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gp(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
O(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
K(a,b){return(a|0)===a?a/b|0:this.bx(a,b)},
bx(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.cu("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
aU(a,b){var s
if(a>0)s=this.bv(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bv(a,b){return b>31?0:a>>>b},
gv(a){return A.aD(t.o)},
$ia5:1,
$if:1,
$iM:1}
J.b5.prototype={
gv(a){return A.aD(t.S)},
$in:1,
$ia:1}
J.c7.prototype={
gv(a){return A.aD(t.i)},
$in:1}
J.au.prototype={
Z(a,b,c){return a.substring(b,A.hD(b,c,a.length))},
b3(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.h(p,0)
if(p.charCodeAt(0)===133){s=J.hw(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.h(p,r)
q=p.charCodeAt(r)===133?J.hx(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
L(a,b){var s
A.u(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
i(a){return a},
gp(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gv(a){return A.aD(t.N)},
gj(a){return a.length},
$in:1,
$ia5:1,
$iff:1,
$ij:1}
A.aO.prototype={
gq(a){return new A.b0(J.aZ(this.gR()),A.J(this).h("b0<1,2>"))},
gj(a){return J.bT(this.gR())},
gu(a){return J.eZ(this.gR())},
gH(a){return J.hi(this.gR())},
E(a,b){return A.J(this).y[1].a(J.en(this.gR(),b))},
i(a){return J.b_(this.gR())}}
A.b0.prototype={
k(){return this.a.k()},
gm(){return this.$ti.y[1].a(this.a.gm())},
$iG:1}
A.bv.prototype={
l(a,b){return this.$ti.y[1].a(J.ao(this.a,b))},
$id:1,
$ii:1}
A.b1.prototype={
gR(){return this.a}}
A.bc.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.de.prototype={}
A.d.prototype={}
A.W.prototype={
gq(a){var s=this
return new A.av(s,s.gj(s),A.J(s).h("av<W.E>"))},
gu(a){return this.gj(this)===0},
S(a,b,c){var s=A.J(this)
return new A.a9(this,s.n(c).h("1(W.E)").a(b),s.h("@<W.E>").n(c).h("a9<1,2>"))}}
A.av.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.bR(q),o=p.gj(q)
if(r.b!==o)throw A.c(A.a1(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.E(q,s);++r.c
return!0},
$iG:1}
A.a8.prototype={
gq(a){return new A.bg(J.aZ(this.a),this.b,A.J(this).h("bg<1,2>"))},
gj(a){return J.bT(this.a)},
gu(a){return J.eZ(this.a)},
E(a,b){return this.b.$1(J.en(this.a,b))}}
A.aq.prototype={$id:1}
A.bg.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gm())
return!0}s.a=null
return!1},
gm(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iG:1}
A.a9.prototype={
gj(a){return J.bT(this.a)},
E(a,b){return this.b.$1(J.en(this.a,b))}}
A.bs.prototype={
gq(a){return new A.bt(J.aZ(this.a),this.b,this.$ti.h("bt<1>"))},
S(a,b,c){var s=this.$ti
return new A.a8(this,s.n(c).h("1(2)").a(b),s.h("@<1>").n(c).h("a8<1,2>"))}}
A.bt.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gm()))return!0
return!1},
gm(){return this.a.gm()},
$iG:1}
A.K.prototype={}
A.bN.prototype={}
A.D.prototype={$r:"+(1,2)",$s:1}
A.S.prototype={$r:"+(1,2,3)",$s:2}
A.aH.prototype={
gu(a){return this.gj(this)===0},
i(a){return A.ez(this)},
$iO:1}
A.b2.prototype={
gj(a){return this.b.length},
gaM(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
ar(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
l(a,b){if(!this.ar(b))return null
return this.b[this.a[b]]},
G(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gaM()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gB(){return new A.ax(this.gaM(),this.$ti.h("ax<1>"))},
gb4(){return new A.ax(this.b,this.$ti.h("ax<2>"))}}
A.ax.prototype={
gj(a){return this.a.length},
gu(a){return 0===this.a.length},
gH(a){return 0!==this.a.length},
gq(a){var s=this.a
return new A.bA(s,s.length,this.$ti.h("bA<1>"))}}
A.bA.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iG:1}
A.a2.prototype={
T(){var s=this,r=s.$map
if(r==null){r=new A.ba(s.$ti.h("ba<1,2>"))
A.fV(s.a,r)
s.$map=r}return r},
l(a,b){return this.T().l(0,b)},
G(a,b){this.$ti.h("~(1,2)").a(b)
this.T().G(0,b)},
gB(){var s=this.T()
return new A.a7(s,A.J(s).h("a7<1>"))},
gb4(){var s=this.T()
return new A.bf(s,A.J(s).h("bf<2>"))},
gj(a){return this.T().a}}
A.bo.prototype={}
A.di.prototype={
F(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.c8.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.ct.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.d8.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.b3.prototype={}
A.bH.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iai:1}
A.af.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.h4(r==null?"unknown":r)+"'"},
$iar:1,
gbU(){return this},
$C:"$1",
$R:1,
$D:null}
A.bW.prototype={$C:"$0",$R:0}
A.bX.prototype={$C:"$2",$R:2}
A.cq.prototype={}
A.cp.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.h4(s)+"'"}}
A.aG.prototype={
N(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aG))return!1
return this.$_target===b.$_target&&this.a===b.a},
gp(a){return(A.cH(this.a)^A.bm(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cm(this.a)+"'")}}
A.co.prototype={
i(a){return"RuntimeError: "+this.a}}
A.a6.prototype={
gj(a){return this.a},
gu(a){return this.a===0},
gB(){return new A.a7(this,A.J(this).h("a7<1>"))},
l(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bL(b)},
bL(a){var s,r,q=this.d
if(q==null)return null
s=this.bl(q,a)
r=this.av(s,a)
if(r<0)return null
return s[r].b},
C(a,b,c){var s,r,q,p,o,n,m=this,l=A.J(m)
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.aB(s==null?m.b=m.ai():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aB(r==null?m.c=m.ai():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.ai()
p=m.au(b)
o=q[p]
if(o==null)q[p]=[m.aj(b,c)]
else{n=m.av(o,b)
if(n>=0)o[n].b=c
else o.push(m.aj(b,c))}}},
G(a,b){var s,r,q=this
A.J(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.a1(q))
s=s.c}},
aB(a,b,c){var s,r=A.J(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.aj(b,c)
else s.b=c},
aj(a,b){var s=this,r=A.J(s),q=new A.d2(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
au(a){return J.a4(a)&1073741823},
bl(a,b){return a[this.au(b)]},
av(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ae(a[r].a,b))return r
return-1},
i(a){return A.ez(this)},
ai(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iew:1}
A.d2.prototype={}
A.a7.prototype={
gj(a){return this.a.a},
gu(a){return this.a.a===0},
gq(a){var s=this.a
return new A.bd(s,s.r,s.e,this.$ti.h("bd<1>"))}}
A.bd.prototype={
gm(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.a1(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iG:1}
A.bf.prototype={
gj(a){return this.a.a},
gu(a){return this.a.a===0},
gq(a){var s=this.a
return new A.be(s,s.r,s.e,this.$ti.h("be<1>"))}}
A.be.prototype={
gm(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.a1(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iG:1}
A.ba.prototype={
au(a){return A.j_(a)&1073741823},
av(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ae(a[r].a,b))return r
return-1}}
A.e3.prototype={
$1(a){return this.a(a)},
$S:7}
A.e4.prototype={
$2(a,b){return this.a(a,b)},
$S:21}
A.e5.prototype={
$1(a){return this.a(A.u(a))},
$S:11}
A.a3.prototype={
i(a){return this.aX(!1)},
aX(a){var s,r,q,p,o,n=this.bj(),m=this.ah(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.h(m,q)
o=m[q]
l=a?l+A.fi(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bj(){var s,r=this.$s
while($.dL.length<=r)B.a.t($.dL,null)
s=$.dL[r]
if(s==null){s=this.bd()
B.a.C($.dL,r,s)}return s},
bd(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.t(new Array(l),t.G)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.C(k,q,r[s])}}return A.fd(k,t.K)}}
A.aQ.prototype={
ah(){return[this.a,this.b]},
N(a,b){if(b==null)return!1
return b instanceof A.aQ&&this.$s===b.$s&&J.ae(this.a,b.a)&&J.ae(this.b,b.b)},
gp(a){return A.fe(this.$s,this.a,this.b,B.o)}}
A.aR.prototype={
ah(){return[this.a,this.b,this.c]},
N(a,b){var s=this
if(b==null)return!1
return b instanceof A.aR&&s.$s===b.$s&&J.ae(s.a,b.a)&&J.ae(s.b,b.b)&&J.ae(s.c,b.c)},
gp(a){var s=this
return A.fe(s.$s,s.a,s.b,s.c)}}
A.aJ.prototype={
gv(a){return B.b3},
$in:1,
$ieo:1}
A.bj.prototype={}
A.ca.prototype={
gv(a){return B.b4},
$in:1,
$iep:1}
A.aK.prototype={
gj(a){return a.length},
$iN:1}
A.bh.prototype={
l(a,b){A.aB(b,a,a.length)
return a[b]},
$id:1,
$ib:1,
$ii:1}
A.bi.prototype={$id:1,$ib:1,$ii:1}
A.cb.prototype={
gv(a){return B.b5},
$in:1,
$icN:1}
A.cc.prototype={
gv(a){return B.b6},
$in:1,
$icO:1}
A.cd.prototype={
gv(a){return B.b7},
l(a,b){A.aB(b,a,a.length)
return a[b]},
$in:1,
$icW:1}
A.ce.prototype={
gv(a){return B.b8},
l(a,b){A.aB(b,a,a.length)
return a[b]},
$in:1,
$icX:1}
A.cf.prototype={
gv(a){return B.b9},
l(a,b){A.aB(b,a,a.length)
return a[b]},
$in:1,
$icY:1}
A.cg.prototype={
gv(a){return B.bb},
l(a,b){A.aB(b,a,a.length)
return a[b]},
$in:1,
$idk:1}
A.ch.prototype={
gv(a){return B.bc},
l(a,b){A.aB(b,a,a.length)
return a[b]},
$in:1,
$idl:1}
A.bk.prototype={
gv(a){return B.bd},
gj(a){return a.length},
l(a,b){A.aB(b,a,a.length)
return a[b]},
$in:1,
$idm:1}
A.ci.prototype={
gv(a){return B.be},
gj(a){return a.length},
l(a,b){A.aB(b,a,a.length)
return a[b]},
$in:1,
$idn:1}
A.bC.prototype={}
A.bD.prototype={}
A.bE.prototype={}
A.bF.prototype={}
A.Y.prototype={
h(a){return A.bM(v.typeUniverse,this,a)},
n(a){return A.fC(v.typeUniverse,this,a)}}
A.cz.prototype={}
A.cF.prototype={
i(a){return A.P(this.a,null)}}
A.cy.prototype={
i(a){return this.a}}
A.bI.prototype={$iaa:1}
A.ds.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:6}
A.dr.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:23}
A.dt.prototype={
$0(){this.a.$0()},
$S:4}
A.du.prototype={
$0(){this.a.$0()},
$S:4}
A.dM.prototype={
b9(a,b){if(self.setTimeout!=null)self.setTimeout(A.aV(new A.dN(this,b),0),a)
else throw A.c(A.cu("`setTimeout()` not found."))}}
A.dN.prototype={
$0(){this.b.$0()},
$S:0}
A.cv.prototype={
ap(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.aC(a)
else{s=r.a
if(q.h("as<1>").b(a))s.aD(a)
else s.aG(a)}},
aq(a,b){var s
if(b==null)b=A.cK(a)
s=this.a
if(this.b)s.ae(new A.R(a,b))
else s.ab(new A.R(a,b))}}
A.dT.prototype={
$1(a){return this.a.$2(0,a)},
$S:2}
A.dU.prototype={
$2(a,b){this.a.$2(1,new A.b3(a,t.l.a(b)))},
$S:8}
A.dY.prototype={
$2(a,b){this.a(A.V(a),b)},
$S:9}
A.R.prototype={
i(a){return A.q(this.a)},
$ir:1,
gY(){return this.b}}
A.cx.prototype={
aq(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.fn("Future already completed"))
s.ab(A.is(a,b))},
b_(a){return this.aq(a,null)}}
A.bu.prototype={
ap(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.fn("Future already completed"))
s.aC(r.h("1/").a(a))}}
A.ac.prototype={
bN(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.al(s,t.bG.a(this.d),a.a,t.y,t.K)},
bK(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.bs(l,q,m,a.b,o,n,t.l)
else p=l.al(l,t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.b7.b(A.an(s))){if((r.c&1)!==0)throw A.c(A.cJ("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.cJ("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.z.prototype={
b2(a,b,c){var s,r,q,p=this.$ti
p.n(c).h("1/(2)").a(a)
s=$.v
if(s===B.f){if(b!=null&&!t.Q.b(b)&&!t.v.b(b))throw A.c(A.f_(b,"onError",u.c))}else{r=p.c
a=s.aS(s,c.h("@<0/>").n(r).h("1(2)").a(a),c.h("0/"),r)
if(b!=null)b=A.fP(b,s)}q=new A.z(s,c.h("z<0>"))
r=b==null?1:3
this.a_(new A.ac(q,r,a,b,p.h("@<1>").n(c).h("ac<1,2>")))
return q},
aW(a,b,c){var s,r=this.$ti
r.n(c).h("1/(2)").a(a)
s=new A.z($.v,c.h("z<0>"))
this.a_(new A.ac(s,19,a,b,r.h("@<1>").n(c).h("ac<1,2>")))
return s},
bt(a){this.a=this.a&1|16
this.c=a},
a0(a){this.a=a.a&30|this.a&1
this.c=a.c},
a_(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.a_(a)
return}r.a0(s)}q=r.b
q.U(q,new A.dx(r,a))}},
aP(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.aP(a)
return}m.a0(n)}l.a=m.a3(a)
s=m.b
s.U(s,new A.dB(l,m))}},
a2(){var s=t.F.a(this.c)
this.c=null
return this.a3(s)},
a3(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aG(a){var s,r=this
r.$ti.c.a(a)
s=r.a2()
r.a=8
r.c=a
A.aP(r,s)},
bc(a){var s=this.a2()
this.a0(a)
A.aP(this,s)},
ae(a){var s=this.a2()
this.bt(a)
A.aP(this,s)},
aC(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("as<1>").b(a)){this.aD(a)
return}this.bb(a)},
bb(a){var s,r=this
r.$ti.c.a(a)
r.a^=2
s=r.b
s.U(s,new A.dz(r,a))},
aD(a){A.eD(this.$ti.h("as<1>").a(a),this,!1)
return},
ab(a){var s
this.a^=2
s=this.b
s.U(s,new A.dy(this,a))},
$ias:1}
A.dx.prototype={
$0(){A.aP(this.a,this.b)},
$S:0}
A.dB.prototype={
$0(){A.aP(this.b,this.a.a)},
$S:0}
A.dA.prototype={
$0(){A.eD(this.a.a,this.b,!0)},
$S:0}
A.dz.prototype={
$0(){this.a.aG(this.b)},
$S:0}
A.dy.prototype={
$0(){this.a.ae(this.b)},
$S:0}
A.dE.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.aT(p,t.bd.a(q.d),t.z)}catch(o){s=A.an(o)
r=A.aW(o)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
p=r
if(p==null)p=A.cK(q)
n=k.a
n.c=new A.R(q,p)
q=n}q.b=!0
return}if(j instanceof A.z&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.z){m=k.b.a
l=new A.z(m.b,m.$ti)
j.b2(new A.dF(l,m),new A.dG(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.dF.prototype={
$1(a){this.a.bc(this.b)},
$S:6}
A.dG.prototype={
$2(a,b){A.bO(a)
t.l.a(b)
this.a.ae(new A.R(a,b))},
$S:10}
A.dD.prototype={
$0(){var s,r,q,p,o,n,m,l,k
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
l=p.b.b
q.c=l.al(l,o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(k){s=A.an(k)
r=A.aW(k)
q=s
p=r
if(p==null)p=A.cK(q)
o=this.a
o.c=new A.R(q,p)
o.b=!0}},
$S:0}
A.dC.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.bN(s)&&p.a.e!=null){p.c=p.a.bK(s)
p.b=!1}}catch(o){r=A.an(o)
q=A.aW(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.cK(p)
m=l.b
m.c=new A.R(p,n)
p=m}p.b=!0}},
$S:0}
A.cw.prototype={}
A.cD.prototype={}
A.dp.prototype={
bA(a,b){return new A.dq(this,this.bo(this,b.h("0()").a(a),b),b)},
aL(a,b,c){var s,r,q,p,o,n,m,l
t.l.a(c)
s=null
if(s==null){A.iL(b,c)
return}r=s.gaz()
q=r.gbW()
p=$.v
try{$.v=q
s.bJ(r,r.gak(),a,b,c)
$.v=p}catch(m){o=A.an(m)
n=A.aW(m)
$.v=p
l=b===o?c:n
q.aL(r,o,l)}},
aT(a,b,c){var s,r,q
c.h("0()").a(b)
r=$.v
if(r===a)return b.$0()
s=r
$.v=a
try{r=b.$0()
return r}finally{$.v=s}q=null.gaz()
return null.bX(q,q.gak(),a,b)},
al(a,b,c,d,e){var s,r,q
d.h("@<0>").n(e).h("1(2)").a(b)
e.a(c)
r=$.v
if(r===a)return b.$1(c)
s=r
$.v=a
try{r=b.$1(c)
return r}finally{$.v=s}q=null.gaz()
return null.bJ(q,q.gak(),a,b,c)},
bs(a,b,c,d,e,f,g){var s,r,q
e.h("@<0>").n(f).n(g).h("1(2,3)").a(b)
f.a(c)
g.a(d)
r=$.v
if(r===a)return b.$2(c,d)
s=r
$.v=a
try{r=b.$2(c,d)
return r}finally{$.v=s}q=null.gaz()
return null.bY(q,q.gak(),a,b,c,d)},
bo(a,b,c){c.h("0()").a(b)
return b},
aS(a,b,c,d){c.h("@<0>").n(d).h("1(2)").a(b)
return b},
aR(a,b,c,d,e){c.h("@<0>").n(d).n(e).h("1(2,3)").a(b)
return b},
bi(a,b,c){return null},
U(a,b){A.iM(a,t.M.a(b))
return}}
A.dq.prototype={
$0(){var s=this.a
return s.aT(s,this.b,this.c)},
$S(){return this.c.h("0()")}}
A.dX.prototype={
$0(){A.ht(this.a,this.b)},
$S:0}
A.bw.prototype={
gj(a){return this.a},
gu(a){return this.a===0},
gB(){return new A.bx(this,this.$ti.h("bx<1>"))},
ar(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.bf(a)},
bf(a){var s=this.d
if(s==null)return!1
return this.J(this.aF(s,a),a)>=0},
l(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.fs(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.fs(q,b)
return r}else return this.bk(b)},
bk(a){var s,r,q=this.d
if(q==null)return null
s=this.aF(q,a)
r=this.J(s,a)
return r<0?null:s[r+1]},
C(a,b,c){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.y[1].a(c)
s=o.d
if(s==null)s=o.d=A.hL()
r=A.cH(b)&1073741823
q=s[r]
if(q==null){A.ft(s,r,[b,c]);++o.a
o.e=null}else{p=o.J(q,b)
if(p>=0)q[p+1]=c
else{q.push(b,c);++o.a
o.e=null}}},
G(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.aH()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.l(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.c(A.a1(m))}},
aH(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.fc(i.a,null,t.z)
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
aF(a,b){return a[A.cH(b)&1073741823]}}
A.bz.prototype={
J(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.bx.prototype={
gj(a){return this.a.a},
gu(a){return this.a.a===0},
gH(a){return this.a.a!==0},
gq(a){var s=this.a
return new A.by(s,s.aH(),this.$ti.h("by<1>"))}}
A.by.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.a1(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iG:1}
A.bB.prototype={
gq(a){var s=this,r=new A.ay(s,s.r,s.$ti.h("ay<1>"))
r.c=s.e
return r},
gj(a){return this.a},
gu(a){return this.a===0},
gH(a){return this.a!==0},
a5(a,b){var s=this.be(b)
return s},
be(a){var s=this.d
if(s==null)return!1
return this.J(s[a.gp(0)&1073741823],a)>=0},
t(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aE(s==null?q.b=A.eE():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aE(r==null?q.c=A.eE():r,b)}else return q.ba(b)},
ba(a){var s,r,q,p=this
p.$ti.c.a(a)
s=p.d
if(s==null)s=p.d=A.eE()
r=J.a4(a)&1073741823
q=s[r]
if(q==null)s[r]=[p.ad(a)]
else{if(p.J(q,a)>=0)return!1
q.push(p.ad(a))}return!0},
bP(a,b){var s=this.bp(b)
return s},
bp(a){var s,r,q,p,o=this.d
if(o==null)return!1
s=a.gp(0)&1073741823
r=o[s]
q=this.J(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.by(p)
return!0},
aE(a,b){this.$ti.c.a(b)
if(t.c8.a(a[b])!=null)return!1
a[b]=this.ad(b)
return!0},
aN(){this.r=this.r+1&1073741823},
ad(a){var s,r=this,q=new A.cC(r.$ti.c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.aN()
return q},
by(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.aN()},
J(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ae(a[r].a,b))return r
return-1},
$ifb:1}
A.cC.prototype={}
A.ay.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.a1(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$iG:1}
A.m.prototype={
gq(a){return new A.av(a,this.gj(a),A.aX(a).h("av<m.E>"))},
E(a,b){return this.l(a,b)},
gu(a){return this.gj(a)===0},
gH(a){return!this.gu(a)},
S(a,b,c){var s=A.aX(a)
return new A.a9(a,s.n(c).h("1(m.E)").a(b),s.h("@<m.E>").n(c).h("a9<1,2>"))},
i(a){return A.es(a,"[","]")}}
A.y.prototype={
G(a,b){var s,r,q,p=A.J(this)
p.h("~(y.K,y.V)").a(b)
for(s=this.gB(),s=s.gq(s),p=p.h("y.V");s.k();){r=s.gm()
q=this.l(0,r)
b.$2(r,q==null?p.a(q):q)}},
gj(a){var s=this.gB()
return s.gj(s)},
gu(a){var s=this.gB()
return s.gu(s)},
i(a){return A.ez(this)},
$iO:1}
A.d5.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:3}
A.aL.prototype={
gu(a){return this.a===0},
gH(a){return this.a!==0},
S(a,b,c){var s=this.$ti
return new A.aq(this,s.n(c).h("1(2)").a(b),s.h("@<1>").n(c).h("aq<1,2>"))},
i(a){return A.es(this,"{","}")},
E(a,b){var s,r,q,p=this
A.fl(b,"index")
s=A.hO(p,p.r,p.$ti.c)
for(r=b;s.k();){if(r===0){q=s.d
return q==null?s.$ti.c.a(q):q}--r}throw A.c(A.eq(b,b-r,p,"index"))},
$id:1,
$ib:1,
$ieB:1}
A.bG.prototype={}
A.cA.prototype={
l(a,b){var s,r=this.b
if(r==null)return this.c.l(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.bm(b):s}},
gj(a){return this.b==null?this.c.a:this.a1().length},
gu(a){return this.gj(0)===0},
gB(){if(this.b==null){var s=this.c
return new A.a7(s,A.J(s).h("a7<1>"))}return new A.cB(this)},
G(a,b){var s,r,q,p,o=this
t.cQ.a(b)
if(o.b==null)return o.c.G(0,b)
s=o.a1()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.dV(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.a1(o))}},
a1(){var s=t.aL.a(this.c)
if(s==null)s=this.c=A.t(Object.keys(this.a),t.s)
return s},
bm(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.dV(this.a[a])
return this.b[a]=s}}
A.cB.prototype={
gj(a){return this.a.gj(0)},
E(a,b){var s=this.a
if(s.b==null)s=s.gB().E(0,b)
else{s=s.a1()
if(!(b<s.length))return A.h(s,b)
s=s[b]}return s},
gq(a){var s=this.a
if(s.b==null){s=s.gB()
s=s.gq(s)}else{s=s.a1()
s=new J.ap(s,s.length,A.U(s).h("ap<1>"))}return s}}
A.bY.prototype={}
A.c_.prototype={}
A.bb.prototype={
i(a){var s=A.c0(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.c9.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.d_.prototype={
bC(a,b){var s=A.iI(a,this.gbD().a)
return s},
bE(a,b){var s=A.hN(a,this.gbF().b,null)
return s},
gbF(){return B.a2},
gbD(){return B.a1}}
A.d1.prototype={}
A.d0.prototype={}
A.dJ.prototype={
b7(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.h.Z(a,r,q)
r=q+1
o=A.I(92)
s.a+=o
o=A.I(117)
s.a+=o
o=A.I(100)
s.a+=o
o=p>>>8&15
o=A.I(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.I(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.I(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.h.Z(a,r,q)
r=q+1
o=A.I(92)
s.a+=o
switch(p){case 8:o=A.I(98)
s.a+=o
break
case 9:o=A.I(116)
s.a+=o
break
case 10:o=A.I(110)
s.a+=o
break
case 12:o=A.I(102)
s.a+=o
break
case 13:o=A.I(114)
s.a+=o
break
default:o=A.I(117)
s.a+=o
o=A.I(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.I(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.I(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.h.Z(a,r,q)
r=q+1
o=A.I(92)
s.a+=o
o=A.I(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.h.Z(a,r,m)},
ac(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.c9(a,null))}B.a.t(s,a)},
a9(a){var s,r,q,p,o=this
if(o.b6(a))return
o.ac(a)
try{s=o.b.$1(a)
if(!o.b6(s)){q=A.f8(a,null,o.gaO())
throw A.c(q)}q=o.a
if(0>=q.length)return A.h(q,-1)
q.pop()}catch(p){r=A.an(p)
q=A.f8(a,r,o.gaO())
throw A.c(q)}},
b6(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.i(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.b7(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.ac(a)
q.bS(a)
s=q.a
if(0>=s.length)return A.h(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.ac(a)
r=q.bT(a)
s=q.a
if(0>=s.length)return A.h(s,-1)
s.pop()
return r}else return!1},
bS(a){var s,r,q=this.c
q.a+="["
s=J.bR(a)
if(s.gH(a)){this.a9(s.l(a,0))
for(r=1;r<s.gj(a);++r){q.a+=","
this.a9(s.l(a,r))}}q.a+="]"},
bT(a){var s,r,q,p,o,n,m=this,l={}
if(a.gu(a)){m.c.a+="{}"
return!0}s=a.gj(a)*2
r=A.fc(s,null,t.X)
q=l.a=0
l.b=!0
a.G(0,new A.dK(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.b7(A.u(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.h(r,n)
m.a9(r[n])}p.a+="}"
return!0}}
A.dK.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.C(s,r.a++,a)
B.a.C(s,r.a++,b)},
$S:3}
A.dI.prototype={
gaO(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.dv.prototype={
i(a){return this.aJ()}}
A.r.prototype={
gY(){return A.hC(this)}}
A.bU.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c0(s)
return"Assertion failed"}}
A.aa.prototype={}
A.a0.prototype={
gag(){return"Invalid argument"+(!this.a?"(s)":"")},
gaf(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gag()+q+o
if(!s.a)return n
return n+s.gaf()+": "+A.c0(s.gaw())},
gaw(){return this.b}}
A.bn.prototype={
gaw(){return A.fG(this.b)},
gag(){return"RangeError"},
gaf(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.c3.prototype={
gaw(){return A.V(this.b)},
gag(){return"RangeError"},
gaf(){if(A.V(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.br.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.cs.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bq.prototype={
i(a){return"Bad state: "+this.a}}
A.bZ.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c0(s)+"."}}
A.bp.prototype={
i(a){return"Stack Overflow"},
gY(){return null},
$ir:1}
A.dw.prototype={
i(a){return"Exception: "+this.a}}
A.c1.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException"
return r}}
A.b.prototype={
S(a,b,c){var s=A.J(this)
return A.hB(this,s.n(c).h("1(b.E)").a(b),s.h("b.E"),c)},
bO(a,b){var s,r
A.J(this).h("b.E(b.E,b.E)").a(b)
s=this.gq(this)
if(!s.k())throw A.c(A.er())
r=s.gm()
while(s.k())r=b.$2(r,s.gm())
return r},
gj(a){var s,r=this.gq(this)
for(s=0;r.k();)++s
return s},
gu(a){return!this.gq(this).k()},
gH(a){return!this.gu(this)},
E(a,b){var s,r
A.fl(b,"index")
s=this.gq(this)
for(r=b;s.k();){if(r===0)return s.gm();--r}throw A.c(A.eq(b,b-r,this,"index"))},
i(a){return A.hu(this,"(",")")}}
A.H.prototype={
gp(a){return A.e.prototype.gp.call(this,0)},
i(a){return"null"}}
A.e.prototype={$ie:1,
N(a,b){return this===b},
gp(a){return A.bm(this)},
i(a){return"Instance of '"+A.cm(this)+"'"},
gv(a){return A.j8(this)},
toString(){return this.i(this)}}
A.cE.prototype={
i(a){return""},
$iai:1}
A.aM.prototype={
gj(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ihG:1}
A.d7.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.e7.prototype={
$1(a){var s,r,q,p
if(A.fO(a))return a
s=this.a
if(s.ar(a))return s.l(0,a)
if(t.f.b(a)){r={}
s.C(0,a,r)
for(s=a.gB(),s=s.gq(s);s.k();){q=s.gm()
r[q]=this.$1(a.l(0,q))}return r}else if(t.R.b(a)){p=[]
s.C(0,a,p)
B.a.bz(p,J.hk(a,this,t.z))
return p}else return a},
$S:12}
A.ed.prototype={
$1(a){return this.a.ap(this.b.h("0/?").a(a))},
$S:2}
A.ee.prototype={
$1(a){if(a==null)return this.a.b_(new A.d7(a===undefined))
return this.a.b_(a)},
$S:2}
A.d6.prototype={
gb0(){var s,r=this.b,q=Math.abs(r)
if(q<=2){r=this.a
return B.i[B.b.O(r,12)]+(B.b.K(r,12)-1)+" in tune"}s=r>0?"+":"\u2212"
r=this.a
return B.i[B.b.O(r,12)]+(B.b.K(r,12)-1)+" "+s+q+"\xa2"}}
A.cV.prototype={
bH(a,b,c){var s,r,q=this,p=q.e
if(p==null){if(b>q.a&&b>q.f*3){q.e=c
B.a.aZ(q.r)}else q.f=q.f*0.9+b*0.1
return null}s=c-p
if(s>=40&&s<=300&&a!=null)B.a.t(q.r,a)
if(!(s>300))r=s>40&&b<q.a/4
else r=!0
if(r){q.e=null
q.f=b
r=q.r
if(r.length<3)return null
return A.fY(r)}return null}}
A.d3.prototype={
ga8(){var s,r,q,p,o=A.t([],t.u)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p)o.push(1200*(Math.log(s[p]/q)/0.6931471805599453))
return o},
gbM(a){return this.a.length>=2&&B.a.bG(this.ga8(),new A.d4())},
gb5(){var s,r,q,p,o
if(this.a.length<2)return null
s=this.ga8()
for(r=s.length,q=0,p=1;p<r;++p){o=s[p]
if(!(q>=0&&q<r))return A.h(s,q)
if(Math.abs(o)>Math.abs(s[q]))q=p}if(!(q>=0&&q<r))return A.h(s,q)
return Math.abs(s[q])>20?q:null}}
A.d4.prototype={
$1(a){return Math.abs(A.dR(a))<=20},
$S:13}
A.L.prototype={}
A.E.prototype={
aJ(){return"DrumType."+this.b}}
A.cL.prototype={
$1(a){return t.d.a(a).b===this.a},
$S:14}
A.cM.prototype={
$0(){return B.d},
$S:15}
A.cj.prototype={}
A.eg.prototype={
$2(a,b){var s
A.V(a)
A.V(b)
s=this.a
return Math.abs(a-s)<=Math.abs(b-s)?a:b},
$S:16}
A.b4.prototype={
aJ(){return"Family."+this.b}}
A.C.prototype={}
A.e9.prototype={
$1(a){return t.w.a(a).a===this.a},
$S:17}
A.ea.prototype={
$0(){return B.a.gW(B.p)},
$S:18}
A.F.prototype={}
A.e1.prototype={
$1(a){return t.I.a(a).a===this.a},
$S:19}
A.e2.prototype={
$0(){return B.a.gW(this.a)},
$S:20}
A.X.prototype={}
A.ei.prototype={
$1(a){return t.A.a(a).a===this.a},
$S:33}
A.ej.prototype={
$0(){return B.a.gW(B.q)},
$S:22}
A.at.prototype={}
A.aw.prototype={}
A.ec.prototype={
$2(a,b){var s=t.U
return B.b.L(s.a(a).b,s.a(b).b)},
$S:5}
A.eb.prototype={
$1(a){return this.a.$0()},
$S:24}
A.eh.prototype={
$1(a){A.bO(a)
return null},
$S:25}
A.el.prototype={
$0(){var s,r=A.dS(this.a.getAttribute("data-theme"))==="light",q=r?"Switch to dark theme":"Switch to light theme",p=this.b
p.setAttribute("aria-label",q)
p.setAttribute("title",q)
s=A.al(p.firstElementChild)
if(s!=null){p=r?"\u263e":"\u2600"
s.textContent=p}},
$S:0}
A.ek.prototype={
$0(){var s=this.a,r=A.dS(s.getAttribute("data-theme"))==="light"?"dark":"light"
s.setAttribute("data-theme",r)
A.h1("ds-theme",r)
this.b.$0()},
$S:0}
A.c2.prototype={
gb1(){return A.eI(this.ax)+" "+this.at.c.toLowerCase()},
X(){var s,r,q,p,o,n,m,l=this,k="change",j=l.a,i=t.L,h=A.t([],i)
for(s=0;s<4;++s){r=B.A[s]
h.push(new A.D(r.b,r.c))}A.aA(j,h)
h=l.d
q=A.t([],i)
for(s=0;s<11;++s){p=B.p[s]
q.push(new A.D(p.a,p.b))}A.aA(h,q)
q=l.e
o=A.t([],i)
for(s=0;s<5;++s){n=B.x[s]
o.push(new A.D(n.a,n.b))}A.aA(q,o)
o=l.r
i=A.t([],i)
for(s=0;s<3;++s){m=B.q[s]
i.push(new A.D(m.a,m.b))}A.aA(o,i)
l.br()
A.Z(j,k,new A.cS(l))
A.Z(l.b,k,new A.cT(l))
A.Z(l.c,k,new A.cU(l))
for(j=[h,q,l.f,o],i=j.length,h=l.gao(),s=0;s<i;++s)A.Z(j[s],k,h)
l.D()},
aK(){var s,r,q,p,o,n,m,l,k=this,j=k.b,i=t.L,h=A.t([],i)
for(s=k.at.d,r=s.length,q=0;q<r;++q){p=s[q]
o=""+p
h.push(new A.D(o,(p===B.b.M(p)?""+B.b.A(p)+'"':o+'"')+" diameter"))}A.aA(j,h)
j.value=""+k.ax
j=k.c
h=A.t([],i)
for(s=k.at.f,r=s.length,q=0;q<r;++q){p=s[q]
o=A.q(p)
h.push(new A.D(o,(p===B.c.M(p)?""+B.c.A(p)+'"':o+'"')+" deep"))}A.aA(j,h)
j.value=A.q(k.ay)
j=k.f
n=A.u(j.value)
i=A.t([],i)
for(q=0;q<5;++q){m=B.z[q]
h=m.a
if(h!=="port"||k.at===B.k)s=h!=="snare"||k.at===B.d
else s=!1
if(s)i.push(new A.D(h,m.b))}A.aA(j,i)
l=k.at
A:{if(B.d===l){i="snare"
break A}i=!1
if(n.length!==0)if(n!=="snare")i=n!=="port"||l===B.k
if(i){i=n
break A}i="1x"
break A}j.value=i},
br(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.X,f=A.fa(g,g)
try{g=A.jh("ds-drum")
s=B.w.bC(g==null?"{}":g,h)
if(t.f.b(s))f=s}catch(r){if(!(A.an(r) instanceof A.c1))throw r}g=J.ao(f,"type")
i.at=A.f5(A.q(g==null?"snare":g))
q=J.ao(f,"diameter")
i.ax=A.eL(q)&&B.a.a5(i.at.d,q)?q:i.at.e
p=J.ao(f,"depth")
i.ay=typeof p=="number"&&B.a.a5(i.at.f,p)?p:i.at.r
i.a.value=i.at.b
i.aK()
o=new A.cP()
g=i.d
o.$2(g,J.ao(f,"material"))
n=i.e
o.$2(n,J.ao(f,"batter"))
m=i.f
o.$2(m,J.ao(f,"reso"))
l=i.r
o.$2(l,J.ao(f,"relation"))
for(g=[g,n,m,l],n=g.length,k=0;k<n;++k){j=g[k]
if(A.u(j.value).length===0)j.value=A.u(A.o(A.f6(A.o(j.options),"item",0,h,h,h)).value)}},
D(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.ef(h.at,h.ax)
h.w.textContent="Starting range for a "+h.gb1()
s=new A.cR()
r=g.a
s.$2(h.x,r)
q=g.b
s.$2(h.y,Math.sqrt(r*q))
s.$2(h.z,q)
r=g.c
if(r!=null)r="No source we found lists this size, so this range is scaled from the "+A.eI(r)+" range (pitch goes roughly as one over the diameter). Treat it as a rough guide."
else{r=B.r.l(0,g.d)
r=r==null?null:r.a
r="Range from "+(r==null?"the sources below":r)+". A starting point: tune by ear from here."}h.Q.textContent=r
r=h.d
p=A.jl(A.u(r.value))
q=h.e
o=A.fX(B.x,A.u(q.value))
n=h.f
m=A.fX(B.z,A.u(n.value))
l=h.r
k=A.jp(A.u(l.value))
h.as.replaceChildren()
j=new A.cQ(h)
j.$3("Shell: "+p.b,p.d,p.e)
j.$3("Depth: "+A.eI(h.ay),A.j3(h.at,h.ay),B.al)
j.$3("Batter head: "+o.b,o.c,o.d)
j.$3("Resonant head: "+m.b,m.c,m.d)
if(h.at===B.d)j.$3("Batter and snare side","On a snare, many drummers tune the snare-side head higher than the batter for a crisp wire response. Treat it as a starting point and adjust by ear.",B.ad)
else j.$3("Head relationship: "+k.b,k.c,k.d)
A.k("relation-row",t.m).hidden=h.at===B.d
A.h1("ds-drum",B.w.bE(A.ex(["type",h.at.b,"diameter",h.ax,"depth",h.ay,"material",A.u(r.value),"batter",A.u(q.value),"reso",A.u(n.value),"relation",A.u(l.value)],t.N,t.K),null))
for(r=h.ch,q=r.length,i=0;i<r.length;r.length===q||(0,A.cI)(r),++i)r[i].$0()}}
A.cS.prototype={
$0(){var s=this.a,r=s.at=A.f5(A.u(s.a.value))
s.ax=r.e
s.ay=r.r
s.aK()
s.D()},
$S:0}
A.cT.prototype={
$0(){var s=this.a,r=A.dd(A.u(s.b.value),null)
s.ax=r==null?s.at.e:r
s.D()},
$S:0}
A.cU.prototype={
$0(){var s=this.a,r=B.h.b3(A.u(s.c.value)),q=A.dd(r,null)
if(q==null)q=A.fh(r)
s.ay=q==null?s.at.r:q
s.D()},
$S:0}
A.cP.prototype={
$2(a,b){if(typeof b=="string"&&b.length!==0)a.value=b},
$S:26}
A.cR.prototype={
$2(a,b){var s=A.eH(b),r=A.cG(b).a
r=s+" Hz \xb7 "+(B.i[B.b.O(r,12)]+(B.b.K(r,12)-1))
a.textContent=r
return r},
$S:27}
A.cQ.prototype={
$3(a,b,c){var s,r,q=null
t.aY.a(c)
s=A.x("li","note-card",q)
s.appendChild(A.x("h3",q,a))
s.appendChild(A.x("p",q,b))
r=c.length===0?A.x("span",q,q):A.ig(c)
s.appendChild(r)
this.a.as.appendChild(s)},
$S:28}
A.cr.prototype={
gaI(){var s,r=this,q=r.fx
if(q===$){s=A.fK(r.gbg())
r.fx!==$&&A.jt()
r.fx=s
q=s}return q},
X(){var s=this,r=v.G
if(A.al(A.o(r.navigator).mediaDevices)==null||!("AudioContext" in r)){r=t.m
A.k("tuner-body",r).hidden=!0
A.k("no-mic",r).hidden=!1
return}A.Z(s.b,"click",new A.dg(s))
A.Z(s.w,"input",s.gbn())
A.Z(A.k("lugs-clear",t.m),"click",new A.dh(s))
B.a.t(s.a.ch,s.gbu())
s.aQ()
s.am()
s.an()},
aQ(){var s=A.dd(A.u(this.w.value),null),r=B.b.a4(s==null?6:s,1,10)
this.dx.a=0.08/(r*r/4+1)},
V(){var s=0,r=A.iG(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c
var $async$V=A.iV(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:o.P("Asking for the microphone\u2026")
q=3
h=t.N
h=A.jg(A.ex(["audio",A.ex(["echoCancellation",!1,"noiseSuppression",!1,"autoGainControl",!1],h,t.y)],h,t.ce))
h.toString
n=A.o(h)
h=v.G
s=6
return A.fH(A.eU(A.o(A.al(A.o(h.navigator).mediaDevices).getUserMedia(n)),t.m),$async$V)
case 6:m=b
l=A.o(new h.AudioContext())
s=7
return A.fH(A.eU(A.o(l.resume()),t.X),$async$V)
case 7:k=A.o(l.createMediaStreamSource(m))
g=A.o(l.createAnalyser())
g.fftSize=8192
g.smoothingTimeConstant=0
j=g
f=A.o(l.createAnalyser())
f.fftSize=1024
i=f
e=k
A.o(e.connect(j))
A.o(e.connect(i))
o.at=l
o.ax=m
o.ay=j
o.ch=i
e=B.b.K(A.V(j.fftSize),2)
o.CW=new Float32Array(e)
e=A.V(i.fftSize)
o.cx=new Float32Array(e)
o.db=!0
e=o.b
e.textContent="Stop tuner"
e.setAttribute("aria-pressed","true")
A.dQ(A.o(e.classList).toggle("is-running",!0))
o.r.textContent="Listening: tap the drum"
o.P("Tuner on. Tap the drum lightly about an inch from a tension rod.")
o.cy=A.V(h.requestAnimationFrame(o.gaI()))
q=1
s=5
break
case 3:q=2
c=p.pop()
o.P("The microphone isn\u2019t available. Check that this site is allowed to use it (usually the icon by the address bar), then try again.")
s=5
break
case 2:s=1
break
case 5:return A.ib(null,r)
case 1:return A.ia(p.at(-1),r)}})
return A.ic($async$V,r)},
bw(){var s,r,q,p=this
p.db=!1
s=p.cy
if(s!=null)v.G.cancelAnimationFrame(s)
r=p.ax
if(r==null)q=null
else{r=t.c.a(r.getTracks())
r=t.E.b(r)?r:new A.b1(r,A.U(r).h("b1<1,p>"))
q=r}for(r=J.aZ(q==null?B.ac:q);r.k();)r.gm().stop()
r=p.at
if(r!=null)A.o(r.close())
p.ax=p.at=null
r=p.b
r.textContent="Start tuner"
r.setAttribute("aria-pressed","false")
A.dQ(A.o(r.classList).toggle("is-running",!1))
p.r.textContent="Microphone off"
A.o(p.f.style).setProperty("--level","0")
p.P("Tuner off. The microphone is closed.")},
bh(a){var s,r,q,p,o,n,m,l,k,j=this
A.dR(a)
s=j.at
r=j.ay
q=j.ch
if(!j.db||s==null||r==null||q==null)return
p=j.cx
p===$&&A.h2()
q.getFloatTimeDomainData(p)
p=j.CW
p===$&&A.h2()
r.getFloatFrequencyData(p)
o=A.jq(j.cx)
A.o(j.f.style).setProperty("--level",B.c.I(B.c.a4(o*8,0,1),3))
p=j.CW
n=A.dR(s.sampleRate)
m=j.dx
l=m.bH(A.jm(p,A.V(r.fftSize),1200,35,n),o,a)
p=m.e!=null?"Reading\u2026":"Listening: tap the drum"
j.r.textContent=p
if(l!=null){j.fr=l
k=A.cG(l)
j.c.textContent=B.c.I(l,1)+" Hz"
j.d.textContent=k.gb0()
p=j.e
p.hidden=!1
A.o(p.style).setProperty("--cents",""+k.b)
p=j.dy
B.a.t(p,l)
if(p.length>12)B.a.bQ(p,0)
j.am()
j.an()
p=B.c.I(l,1)
n=k.gb0()
n=A.eV(n,"\u266f"," sharp")
n=A.eV(n,"\xa2"," cents")
j.P(p+" hertz, "+A.eV(n,"\u2212","minus ")+".")}j.cy=A.V(v.G.requestAnimationFrame(j.gaI()))},
am(){var s,r,q,p,o,n,m,l,k,j,i="span",h=this.x
h.replaceChildren()
s=this.dy
r=A.fd(s,t.i)
q=s.length===0?0:A.fY(s)
p=new A.d3(r,q)
o=p.ga8()
for(n=0;r=s.length,n<r;n=j){if(!(n<o.length))return A.h(o,n)
m=B.c.A(o[n])
if(m>0)l="+"
else l=m<0?"\u2212":"\xb1"
k=A.x("li","lug",null)
j=n+1
k.appendChild(A.x(i,"lug-n","Lug "+j))
if(!(n<s.length))return A.h(s,n)
k.appendChild(A.x(i,"lug-hz",B.c.I(s[n],1)+" Hz"))
k.appendChild(A.x(i,"lug-off",s.length>1?l+Math.abs(m)+"\xa2":""))
if(p.gb5()===n)A.o(k.classList).add("is-worst")
h.appendChild(k)}A:{if(0===r){h="Tap near each tension rod in turn. Readings appear here so you can compare them."
break A}if(1===r){h="One reading. Tap the next lug."
break A}h=p.gbM(0)
if(h){h="Even: every lug is within 20\xa2 of the middle reading ("+B.c.I(q,1)+" Hz)."
break A}h=new A.df(p).$0()
break A}this.y.textContent=h},
an(){var s,r,q,p,o,n,m,l,k=this,j=k.a,i=A.ef(j.at,j.ax)
j=j.gb1()
s=i.a
r=A.eH(s)
q=i.b
p=A.eH(q)
o=A.cG(s).a
n=B.i[B.b.O(o,12)]
o=B.b.K(o,12)
m=A.cG(q).a
k.z.textContent="Target for your "+j+": about "+r+" to "+p+" Hz ("+(n+(o-1))+" to "+(B.i[B.b.O(m,12)]+(B.b.K(m,12)-1))+"). Hit the centre to compare."
l=k.fr
m=k.Q
o=l==null
m.hidden=o
if(!o){A.o(m.style).setProperty("--pos",B.c.I(B.c.a4(Math.log(l/s)/0.6931471805599453/(Math.log(q/s)/0.6931471805599453),-0.08,1.08),3))
m.setAttribute("title",B.c.I(l,1)+" Hz")}},
P(a){this.as.textContent=a
return a}}
A.dg.prototype={
$0(){var s=this.a
return s.db?s.bw():s.V()},
$S:0}
A.dh.prototype={
$0(){var s=this.a
B.a.aZ(s.dy)
s.am()
s.P("Lug readings cleared.")},
$S:0}
A.df.prototype={
$0(){var s,r,q=this.a,p=q.gb5()
p.toString
q=q.ga8()
if(!(p<q.length))return A.h(q,p)
s=q[p]
q=B.c.A(Math.abs(s))
r=s>0?"sharp: loosen it slightly":"flat: tighten it slightly"
return"Lug "+(p+1)+" is "+q+"\xa2 "+r+", then tap it again."},
$S:30}
A.cl.prototype={
X(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null
for(s=[B.e,B.l],r=s.length,q=a0.r,p=a0.a,o=a0.f,n=0;n<r;++n){m=s[n]
for(l=m.d,k=l.length,j=m===B.e,i="plan-"+m.b+"-",h=0;h<k;++h){g=l[h]
f=""+g
e=i+f
d=A.x("input",a1,a1)
d.setAttribute("type","checkbox")
d.setAttribute("id",e)
d.checked=o.a5(0,new A.D(m,g))
c=A.x("label","chip-check",a1)
c.setAttribute("for",e)
c.appendChild(d)
f=g===B.b.M(g)?""+B.b.A(g)+'"':f+'"'
b=j?"rack":"floor"
c.appendChild(A.x("span",a1,f+" "+b))
A.Z(d,"change",new A.db(a0,d,m,g))
q.C(0,new A.D(m,g),d)
p.appendChild(c)}}s=a0.b
r=A.t([],t.L)
for(n=0;n<4;++n){a=B.ag[n]
r.push(new A.D(""+a.a,a.b))}A.aA(s,r)
s.value="5"
r=a0.gao()
A.Z(s,"change",r)
A.Z(a0.c,"input",r)
A.Z(A.k("plan-suggest",t.m),"click",new A.dc(a0))
a0.aV()
a0.D()},
gaY(){var s=A.ey(this.f,t.U)
B.a.aa(s,new A.d9())
return s},
aV(){var s,r=this.gaY()
if(r.length===0)return
s=A.ef(B.a.gW(r).a,B.a.gW(r).b)
this.c.value=B.b.i(B.c.A(Math.sqrt(s.a*s.b)))},
D(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d
e.replaceChildren()
s=g.gaY()
r=A.fh(A.u(g.c.value))
q=s.length===0
if(q||r==null||r<30||r>1000){e=q?"Pick at least one tom.":"Enter a pitch for your smallest tom, between 30 and 1000 Hz."
g.e.textContent=e
return}q=A.dd(A.u(g.b.value),f)
p=A.jn(s,r,q==null?5:q)
for(q=p.length,o=0;o<p.length;p.length===q||(0,A.cI)(p),++o){n=p[o]
m=A.x("tr",f,f)
l=n.b
l=l===B.b.M(l)?""+B.b.A(l)+'"':""+l+'"'
k=n.a===B.e?"rack":"floor"
k=A.x("th",f,l+" "+k)
k.setAttribute("scope","row")
m.appendChild(k)
k=n.c
m.appendChild(A.x("td",f,(k<100?B.c.I(k,1):B.b.i(B.c.A(k)))+" Hz"))
l=A.cG(k).a
m.appendChild(A.x("td",f,B.i[B.b.O(l,12)]+(B.b.K(l,12)-1)))
l=n.d
j=k>=l.a
i=j&&k<=l.b?"fits":"outside"
if(j&&k<=l.b)l="In range"
else l=k>l.b?"Above range":"Below range"
m.appendChild(A.x("td",i,l))
e.appendChild(m)}e=A.U(p)
h=new A.bs(p,e.h("B(1)").a(new A.da()),e.h("bs<1>")).gj(0)
if(h===0)e="Every tom lands inside its starting range."
else{e=h===1?"tom lands":"toms land"
e=""+h+" "+e+" outside the starting range. Try a smaller interval or a different top pitch."}g.e.textContent=e}}
A.db.prototype={
$0(){var s=this,r=s.a,q=s.c,p=s.d,o=r.f
if(A.dQ(s.b.checked))o.t(0,new A.D(q,p))
else o.bP(0,new A.D(q,p))
r.D()},
$S:0}
A.dc.prototype={
$0(){var s=this.a
s.aV()
s.D()},
$S:0}
A.d9.prototype={
$2(a,b){var s=t.U
return B.b.L(s.a(a).b,s.a(b).b)},
$S:5}
A.da.prototype={
$1(a){var s,r
t.ch.a(a)
s=a.d
r=a.c
return!(r>=s.a&&r<=s.b)},
$S:31};(function aliases(){var s=J.ah.prototype
s.b8=s.i})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u
s(J,"it","hv",32)
r(A,"iX","hI",1)
r(A,"iY","hJ",1)
r(A,"iZ","hK",1)
q(A,"fT","iQ",0)
r(A,"j1","ih",7)
p(A.c2.prototype,"gao","D",0)
var n
p(n=A.cr.prototype,"gbn","aQ",0)
o(n,"gbg","bh",29)
p(n,"gbu","an",0)
p(A.cl.prototype,"gao","D",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.e,null)
q(A.e,[A.eu,J.c4,A.bo,J.ap,A.b,A.b0,A.r,A.de,A.av,A.bg,A.bt,A.K,A.a3,A.aH,A.bA,A.di,A.d8,A.b3,A.bH,A.af,A.y,A.d2,A.bd,A.be,A.Y,A.cz,A.cF,A.dM,A.cv,A.R,A.cx,A.ac,A.z,A.cw,A.cD,A.dp,A.by,A.aL,A.cC,A.ay,A.m,A.bY,A.c_,A.dJ,A.dv,A.bp,A.dw,A.c1,A.H,A.cE,A.aM,A.d7,A.d6,A.cV,A.d3,A.L,A.cj,A.C,A.F,A.X,A.at,A.aw,A.c2,A.cr,A.cl])
q(J.c4,[J.c6,J.b6,J.b8,J.b7,J.b9,J.aI,J.au])
q(J.b8,[J.ah,J.l,A.aJ,A.bj])
q(J.ah,[J.ck,J.aN,J.ag])
r(J.c5,A.bo)
r(J.cZ,J.l)
q(J.aI,[J.b5,J.c7])
q(A.b,[A.aO,A.d,A.a8,A.bs,A.ax])
r(A.bN,A.aO)
r(A.bv,A.bN)
r(A.b1,A.bv)
q(A.r,[A.bc,A.aa,A.c8,A.ct,A.co,A.cy,A.bb,A.bU,A.a0,A.br,A.cs,A.bq,A.bZ])
q(A.d,[A.W,A.a7,A.bf,A.bx])
r(A.aq,A.a8)
q(A.W,[A.a9,A.cB])
q(A.a3,[A.aQ,A.aR])
r(A.D,A.aQ)
r(A.S,A.aR)
q(A.aH,[A.b2,A.a2])
r(A.bl,A.aa)
q(A.af,[A.bW,A.bX,A.cq,A.e3,A.e5,A.ds,A.dr,A.dT,A.dF,A.e7,A.ed,A.ee,A.d4,A.cL,A.e9,A.e1,A.ei,A.eb,A.eh,A.cQ,A.da])
q(A.cq,[A.cp,A.aG])
q(A.y,[A.a6,A.bw,A.cA])
r(A.ba,A.a6)
q(A.bX,[A.e4,A.dU,A.dY,A.dG,A.d5,A.dK,A.eg,A.ec,A.cP,A.cR,A.d9])
q(A.bj,[A.ca,A.aK])
q(A.aK,[A.bC,A.bE])
r(A.bD,A.bC)
r(A.bh,A.bD)
r(A.bF,A.bE)
r(A.bi,A.bF)
q(A.bh,[A.cb,A.cc])
q(A.bi,[A.cd,A.ce,A.cf,A.cg,A.ch,A.bk,A.ci])
r(A.bI,A.cy)
q(A.bW,[A.dt,A.du,A.dN,A.dx,A.dB,A.dA,A.dz,A.dy,A.dE,A.dD,A.dC,A.dq,A.dX,A.cM,A.ea,A.e2,A.ej,A.el,A.ek,A.cS,A.cT,A.cU,A.dg,A.dh,A.df,A.db,A.dc])
r(A.bu,A.cx)
r(A.bz,A.bw)
r(A.bG,A.aL)
r(A.bB,A.bG)
r(A.c9,A.bb)
r(A.d_,A.bY)
q(A.c_,[A.d1,A.d0])
r(A.dI,A.dJ)
q(A.a0,[A.bn,A.c3])
q(A.dv,[A.E,A.b4])
s(A.bN,A.m)
s(A.bC,A.m)
s(A.bD,A.K)
s(A.bE,A.m)
s(A.bF,A.K)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",f:"double",M:"num",j:"String",B:"bool",H:"Null",i:"List",e:"Object",O:"Map",p:"JSObject"},mangledNames:{},types:["~()","~(~())","~(@)","~(e?,e?)","H()","a(+(E,a),+(E,a))","H(@)","@(@)","H(@,ai)","~(a,@)","H(e,ai)","@(j)","e?(e?)","B(f)","B(E)","E()","a(a,a)","B(C)","C()","B(F)","F()","@(@,j)","X()","H(~())","~(e?)","H(e)","~(p,e?)","~(p,f)","~(j,j,i<j>)","~(f)","j()","B(aw)","a(@,@)","B(X)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.D&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.S&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.i3(v.typeUniverse,JSON.parse('{"ck":"ah","aN":"ah","ag":"ah","jy":"aJ","l":{"i":["1"],"d":["1"],"p":[],"b":["1"]},"c6":{"B":[],"n":[]},"b6":{"n":[]},"b8":{"p":[]},"ah":{"p":[]},"c5":{"bo":[]},"cZ":{"l":["1"],"i":["1"],"d":["1"],"p":[],"b":["1"]},"ap":{"G":["1"]},"aI":{"f":[],"M":[],"a5":["M"]},"b5":{"f":[],"a":[],"M":[],"a5":["M"],"n":[]},"c7":{"f":[],"M":[],"a5":["M"],"n":[]},"au":{"j":[],"a5":["j"],"ff":[],"n":[]},"aO":{"b":["2"]},"b0":{"G":["2"]},"bv":{"m":["2"],"i":["2"],"aO":["1","2"],"d":["2"],"b":["2"]},"b1":{"bv":["1","2"],"m":["2"],"i":["2"],"aO":["1","2"],"d":["2"],"b":["2"],"m.E":"2","b.E":"2"},"bc":{"r":[]},"d":{"b":["1"]},"W":{"d":["1"],"b":["1"]},"av":{"G":["1"]},"a8":{"b":["2"],"b.E":"2"},"aq":{"a8":["1","2"],"d":["2"],"b":["2"],"b.E":"2"},"bg":{"G":["2"]},"a9":{"W":["2"],"d":["2"],"b":["2"],"b.E":"2","W.E":"2"},"bs":{"b":["1"],"b.E":"1"},"bt":{"G":["1"]},"D":{"aQ":[],"a3":[]},"S":{"aR":[],"a3":[]},"aH":{"O":["1","2"]},"b2":{"aH":["1","2"],"O":["1","2"]},"ax":{"b":["1"],"b.E":"1"},"bA":{"G":["1"]},"a2":{"aH":["1","2"],"O":["1","2"]},"bl":{"aa":[],"r":[]},"c8":{"r":[]},"ct":{"r":[]},"bH":{"ai":[]},"af":{"ar":[]},"bW":{"ar":[]},"bX":{"ar":[]},"cq":{"ar":[]},"cp":{"ar":[]},"aG":{"ar":[]},"co":{"r":[]},"a6":{"y":["1","2"],"ew":["1","2"],"O":["1","2"],"y.K":"1","y.V":"2"},"a7":{"d":["1"],"b":["1"],"b.E":"1"},"bd":{"G":["1"]},"bf":{"d":["1"],"b":["1"],"b.E":"1"},"be":{"G":["1"]},"ba":{"a6":["1","2"],"y":["1","2"],"ew":["1","2"],"O":["1","2"],"y.K":"1","y.V":"2"},"aQ":{"a3":[]},"aR":{"a3":[]},"aJ":{"p":[],"eo":[],"n":[]},"bj":{"p":[]},"ca":{"ep":[],"p":[],"n":[]},"aK":{"N":["1"],"p":[]},"bh":{"m":["f"],"i":["f"],"N":["f"],"d":["f"],"p":[],"b":["f"],"K":["f"]},"bi":{"m":["a"],"i":["a"],"N":["a"],"d":["a"],"p":[],"b":["a"],"K":["a"]},"cb":{"cN":[],"m":["f"],"i":["f"],"N":["f"],"d":["f"],"p":[],"b":["f"],"K":["f"],"n":[],"m.E":"f"},"cc":{"cO":[],"m":["f"],"i":["f"],"N":["f"],"d":["f"],"p":[],"b":["f"],"K":["f"],"n":[],"m.E":"f"},"cd":{"cW":[],"m":["a"],"i":["a"],"N":["a"],"d":["a"],"p":[],"b":["a"],"K":["a"],"n":[],"m.E":"a"},"ce":{"cX":[],"m":["a"],"i":["a"],"N":["a"],"d":["a"],"p":[],"b":["a"],"K":["a"],"n":[],"m.E":"a"},"cf":{"cY":[],"m":["a"],"i":["a"],"N":["a"],"d":["a"],"p":[],"b":["a"],"K":["a"],"n":[],"m.E":"a"},"cg":{"dk":[],"m":["a"],"i":["a"],"N":["a"],"d":["a"],"p":[],"b":["a"],"K":["a"],"n":[],"m.E":"a"},"ch":{"dl":[],"m":["a"],"i":["a"],"N":["a"],"d":["a"],"p":[],"b":["a"],"K":["a"],"n":[],"m.E":"a"},"bk":{"dm":[],"m":["a"],"i":["a"],"N":["a"],"d":["a"],"p":[],"b":["a"],"K":["a"],"n":[],"m.E":"a"},"ci":{"dn":[],"m":["a"],"i":["a"],"N":["a"],"d":["a"],"p":[],"b":["a"],"K":["a"],"n":[],"m.E":"a"},"cy":{"r":[]},"bI":{"aa":[],"r":[]},"R":{"r":[]},"bu":{"cx":["1"]},"z":{"as":["1"]},"bw":{"y":["1","2"],"O":["1","2"]},"bz":{"bw":["1","2"],"y":["1","2"],"O":["1","2"],"y.K":"1","y.V":"2"},"bx":{"d":["1"],"b":["1"],"b.E":"1"},"by":{"G":["1"]},"bB":{"aL":["1"],"fb":["1"],"eB":["1"],"d":["1"],"b":["1"]},"ay":{"G":["1"]},"y":{"O":["1","2"]},"aL":{"eB":["1"],"d":["1"],"b":["1"]},"bG":{"aL":["1"],"eB":["1"],"d":["1"],"b":["1"]},"cA":{"y":["j","@"],"O":["j","@"],"y.K":"j","y.V":"@"},"cB":{"W":["j"],"d":["j"],"b":["j"],"b.E":"j","W.E":"j"},"bb":{"r":[]},"c9":{"r":[]},"f":{"M":[],"a5":["M"]},"a":{"M":[],"a5":["M"]},"i":{"d":["1"],"b":["1"]},"M":{"a5":["M"]},"j":{"a5":["j"],"ff":[]},"bU":{"r":[]},"aa":{"r":[]},"a0":{"r":[]},"bn":{"r":[]},"c3":{"r":[]},"br":{"r":[]},"cs":{"r":[]},"bq":{"r":[]},"bZ":{"r":[]},"bp":{"r":[]},"cE":{"ai":[]},"aM":{"hG":[]},"cY":{"i":["a"],"d":["a"],"b":["a"]},"dn":{"i":["a"],"d":["a"],"b":["a"]},"dm":{"i":["a"],"d":["a"],"b":["a"]},"cW":{"i":["a"],"d":["a"],"b":["a"]},"dk":{"i":["a"],"d":["a"],"b":["a"]},"cX":{"i":["a"],"d":["a"],"b":["a"]},"dl":{"i":["a"],"d":["a"],"b":["a"]},"cN":{"i":["f"],"d":["f"],"b":["f"]},"cO":{"i":["f"],"d":["f"],"b":["f"]}}'))
A.i2(v.typeUniverse,JSON.parse('{"bN":2,"aK":1,"bG":1,"bY":2,"c_":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.ad
return{n:s("R"),J:s("eo"),V:s("ep"),W:s("a5<@>"),d:s("E"),h:s("d<@>"),C:s("r"),B:s("cN"),q:s("cO"),Z:s("ar"),Y:s("a2<a,+(f,f,j)>"),I:s("F"),O:s("cW"),k:s("cX"),D:s("cY"),R:s("b<@>"),e:s("l<F>"),G:s("l<e>"),r:s("l<aw>"),L:s("l<+(j,j)>"),s:s("l<j>"),u:s("l<f>"),b:s("l<@>"),t:s("l<a>"),c:s("l<e?>"),a:s("l<M>"),x:s("l<~()>"),T:s("b6"),m:s("p"),g:s("ag"),p:s("N<@>"),E:s("i<p>"),aY:s("i<j>"),j:s("i<@>"),ce:s("O<j,B>"),f:s("O<@,@>"),w:s("C"),P:s("H"),K:s("e"),ch:s("aw"),cY:s("jz"),cD:s("+()"),U:s("+(E,a)"),b1:s("+(e?,e?,e?)"),A:s("X"),l:s("ai"),N:s("j"),bW:s("n"),b7:s("aa"),c0:s("dk"),bk:s("dl"),ca:s("dm"),bX:s("dn"),cr:s("aN"),_:s("z<@>"),dd:s("bz<e?,e?>"),y:s("B"),bG:s("B(e)"),i:s("f"),z:s("@"),bd:s("@()"),v:s("@(e)"),Q:s("@(e,ai)"),S:s("a"),bc:s("as<H>?"),aQ:s("p?"),aL:s("i<@>?"),X:s("e?"),aD:s("j?"),F:s("ac<@,@>?"),c8:s("cC?"),cG:s("B?"),a2:s("f?"),a3:s("a?"),ae:s("M?"),o:s("M"),H:s("~"),M:s("~()"),cQ:s("~(j,@)"),aS:s("~(a,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.V=J.c4.prototype
B.a=J.l.prototype
B.b=J.b5.prototype
B.c=J.aI.prototype
B.h=J.au.prototype
B.a_=J.ag.prototype
B.a0=J.b8.prototype
B.E=J.ck.prototype
B.t=J.aN.prototype
B.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.F=function() {
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
B.K=function(getTagFallback) {
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
B.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.J=function(hooks) {
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
B.I=function(hooks) {
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
B.H=function(hooks) {
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
B.v=function(hooks) { return hooks; }

B.w=new A.d_()
B.o=new A.de()
B.f=new A.dp()
B.j=new A.cE()
B.a9=s([18,20,22,24,26],t.t)
B.a6=s([14,16,18,20],t.a)
B.k=new A.E("Bass drum (kick)",B.a9,22,B.a6,18,3,"kick")
B.a3=s([10,12,13,14],t.t)
B.ai=s([3.5,4,5,5.5,6,6.5,7,8],t.a)
B.d=new A.E("Snare",B.a3,14,B.ai,5.5,0,"snare")
B.a5=s([14,16,18],t.t)
B.a4=s([12,13,14,16],t.a)
B.l=new A.E("Floor tom",B.a5,16,B.a4,14,2,"floorTom")
B.a8=s([8,10,12,13],t.t)
B.a7=s([6,7,8,9,10],t.a)
B.e=new A.E("Rack tom",B.a8,12,B.a7,8,1,"rackTom")
B.a1=new A.d0(null)
B.a2=new A.d1(null)
B.bf=new A.b4(0,"wood")
B.n=s(["lm","g4m"],t.s)
B.at=new A.C("maple","Maple","Warm and balanced: an even spread of lows and highs with slightly boosted mids. The all-rounder.",B.n)
B.au=new A.C("birch","Birch","Brighter and more focused than maple, with a crisp, dry \u201cpop\u201d on the attack. A studio favorite.",B.n)
B.az=new A.C("mahogany","Mahogany","Warm and dark: robust lows, mellow highs, and less projection than birch. A vintage feel.",B.n)
B.aB=new A.C("oak","Oak","Dry and punchy with strong projection and a solid low-mid.",B.n)
B.ae=s(["g4m","md"],t.s)
B.av=new A.C("walnut","Walnut","Warm and rounded, with an even spread of lows, mids and highs and a darker, vintage character.",B.ae)
B.bg=new A.b4(1,"synthetic")
B.ah=s(["md","lm"],t.s)
B.ax=new A.C("acrylic","Acrylic","Strong, focused attack and plenty of projection. Sources disagree on whether it reads bright or warm; acrylic kicks often want some damping.",B.ah)
B.bh=new A.b4(2,"metal")
B.C=s(["thomannShell","yamahaSnare"],t.s)
B.aw=new A.C("steel","Steel","Bright and cutting with long sustain and a penetrating rimshot. Heavier and more aggressive than aluminum.",B.C)
B.aC=new A.C("aluminum","Aluminum","Dry, bright and crisp with a short sustain, so it often needs little or no damping.",B.C)
B.am=s(["yamahaSnare","thomannShell"],t.s)
B.as=new A.C("brass","Brass","Dry and articulate with darker overtones, a sharp crack and more low end than most metals.",B.am)
B.B=s(["thomannShell"],t.s)
B.aA=new A.C("bronze","Bronze","Dark and warm, more subdued than brass or steel. Increasingly popular on high-end snares.",B.B)
B.ay=new A.C("copper","Copper","Warmer, with more low end than brass or steel. A long-time orchestral choice.",B.B)
B.p=s([B.at,B.au,B.az,B.aB,B.av,B.ax,B.aw,B.aC,B.as,B.aA,B.ay],A.ad("l<C>"))
B.i=s(["C","C\u266f","D","D\u266f","E","F","F\u266f","G","G\u266f","A","A\u266f","B"],t.s)
B.m=s(["dcp","gc"],t.s)
B.L=new A.F("1c","Single-ply, coated","Open and warm with lots of overtones and touch sensitivity. The classic for jazz and for brushes.",B.m)
B.U=new A.F("1x","Single-ply, clear","The most open and bright: maximum sustain and overtones, very responsive to dynamics.",B.m)
B.T=new A.F("2c","Two-ply, coated","Deeper and more controlled with shorter sustain, plus the durability of two plies.",B.m)
B.P=new A.F("2x","Two-ply, clear","Punchy and fat with a bright attack and a controlled ring. Built for heavy hitting.",B.m)
B.y=s(["gc"],t.s)
B.S=new A.F("ring","With a muffling ring or built-in control","Fewer overtones and a shorter ring, so the drum needs less extra damping.",B.y)
B.x=s([B.L,B.U,B.T,B.P,B.S],t.e)
B.ac=s([],A.ad("l<p>"))
B.ad=s([],t.s)
B.af=s(["gc","dcp"],t.s)
B.R=new A.F("1x","Single-ply, clear","The usual choice: thin enough to let the shell resonate and carry the note.",B.af)
B.ab=s(["dcp"],t.s)
B.Q=new A.F("1c","Single-ply, coated","Like clear single-ply with slightly softened overtones.",B.ab)
B.N=new A.F("2","Two-ply","Rarely recommended underneath: the extra mass tends to choke the shell\u2019s tone.",B.y)
B.aa=s(["daddario"],t.s)
B.O=new A.F("port","Kick front head with a port hole","Releases air so the kick sounds punchier with less boom, and gives a microphone a way in.",B.aa)
B.ak=s(["yamahaSnare"],t.s)
B.M=new A.F("snare","Snare-side (very thin)","Made thin so the snare wires respond to the lightest notes.",B.ak)
B.z=s([B.R,B.Q,B.N,B.O,B.M],t.e)
B.aj=s(["yamaha2"],t.s)
B.aQ=new A.X("same","Same pitch","The most sustain and the steadiest pitch. Yamaha suggests it as the starting point for toms and kick.",B.aj)
B.D=s(["yamaha2","thomannTuning"],t.s)
B.aR=new A.X("higher","Resonant head higher","Less sustain and a pitch that bends as the note dies away. Sources disagree on which way it bends, so listen on your own drum.",B.D)
B.aP=new A.X("lower","Resonant head lower","Less sustain with a slight pitch bend, often heard as a \u201cdropping\u201d tom. As above, sources disagree on the direction; trust your ears.",B.D)
B.q=s([B.aQ,B.aR,B.aP],A.ad("l<X>"))
B.W=new A.at(3,"Minor third (3 semitones)")
B.Y=new A.at(4,"Major third (4 semitones)")
B.Z=new A.at(5,"Perfect fourth (5 semitones)")
B.X=new A.at(7,"Perfect fifth (7 semitones)")
B.ag=s([B.W,B.Y,B.Z,B.X],A.ad("l<at>"))
B.A=s([B.d,B.e,B.l,B.k],A.ad("l<E>"))
B.al=s(["yamahaSnare","md"],t.s)
B.aD={dtchart:0,tunebot:1,yamaha2:2,yamahaSnare:3,thomannShell:4,thomannTuning:5,lm:6,g4m:7,md:8,dcp:9,gc:10,daddario:11}
B.b1=new A.L("Drum Tuning: frequency chart","https://drum-tuning.com/drum-tuning-chart/")
B.b_=new A.L("Tune-Bot: artist tuning settings","https://tune-bot.com/artists/")
B.aS=new A.L("Yamaha Hub: discover the sonic possibilities of your drums, part 2","https://hub.yamaha.com/drums/d-how-to/discover-the-sonic-possibilities-of-your-drums-part-2/")
B.aY=new A.L("Yamaha Hub: the five different kinds of snare drums","https://hub.yamaha.com/drums/stage/the-five-different-kinds-of-snare-drums-explained")
B.aX=new A.L("Thomann: snare drum shell materials","https://www.thomannmusic.com/onlineexpert_page_snare_drums_shell_materials.html")
B.aZ=new A.L("Thomann: drumheads and drum tuning","https://www.thomann.co.uk/onlineexpert_page_drumheads_drum_tuning.html")
B.b0=new A.L("Long & McQuade: a guide to the sound of different shell materials","https://www.long-mcquade.com/blog/576/The-Heart-of-Your-Drums-A-Guide-to-the-Sound-of-Different-Shell-Materials.htm")
B.aT=new A.L("Gear4music: your guide to shell materials","https://www.gear4music.com/blog/what-wood-sounds-good-your-guide-to-shell-materials")
B.aV=new A.L("Modern Drummer: what you need to know about drum shells","https://www.moderndrummer.com/2015/02/need-know-drum-shells/")
B.aU=new A.L("Drum Center of Portsmouth: coated vs clear drum heads","https://drumcenternh.com/blogs/news/coated-drum-heads-vs-clear-drum-heads-which-is-best")
B.aW=new A.L("Guitar Center: best drum heads guide","https://www.guitarcenter.com/riffs/buying-guides/drums/best-drum-heads-guide")
B.b2=new A.L("D'Addario: how to choose a bass drumhead","https://www.daddario.com/en-de/blogs/percussion/how-to-choose-a-bass-drumhead")
B.r=new A.b2(B.aD,[B.b1,B.b_,B.aS,B.aY,B.aX,B.aZ,B.b0,B.aT,B.aV,B.aU,B.aW,B.b2],A.ad("b2<j,L>"))
B.aJ=new A.S(170,250,"dtchart")
B.ao=new A.a2([14,B.aJ],t.Y)
B.aI=new A.S(130,180,"dtchart")
B.aH=new A.S(100,150,"dtchart")
B.aO=new A.S(90,140,"dtchart")
B.ap=new A.a2([10,B.aI,12,B.aH,13,B.aO],t.Y)
B.aN=new A.S(80,120,"dtchart")
B.aM=new A.S(65,100,"dtchart")
B.an=new A.a2([14,B.aN,16,B.aM],t.Y)
B.aL=new A.S(55,80,"dtchart")
B.aK=new A.S(50,70,"dtchart")
B.aq=new A.a2([20,B.aL,22,B.aK],t.Y)
B.ar=new A.a2([B.d,B.ao,B.e,B.ap,B.l,B.an,B.k,B.aq],A.ad("a2<E,O<a,+(f,f,j)>>"))
B.aE=new A.D(B.e,10)
B.aF=new A.D(B.e,12)
B.aG=new A.D(B.l,16)
B.b3=A.a_("eo")
B.b4=A.a_("ep")
B.b5=A.a_("cN")
B.b6=A.a_("cO")
B.b7=A.a_("cW")
B.b8=A.a_("cX")
B.b9=A.a_("cY")
B.ba=A.a_("e")
B.bb=A.a_("dk")
B.bc=A.a_("dl")
B.bd=A.a_("dm")
B.be=A.a_("dn")})();(function staticFields(){$.dH=null
$.Q=A.t([],t.G)
$.fg=null
$.f2=null
$.f1=null
$.fW=null
$.fS=null
$.h_=null
$.e_=null
$.e6=null
$.eR=null
$.dL=A.t([],A.ad("l<i<e>?>"))
$.aS=null
$.bP=null
$.bQ=null
$.eK=!1
$.v=B.f})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"jx","h5",()=>A.e0("_$dart_dartClosure"))
s($,"jw","eX",()=>A.e0("_$dart_dartClosure_dartJSInterop"))
s($,"jN","hg",()=>A.t([new J.c5()],A.ad("l<bo>")))
s($,"jB","h6",()=>A.ab(A.dj({
toString:function(){return"$receiver$"}})))
s($,"jC","h7",()=>A.ab(A.dj({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"jD","h8",()=>A.ab(A.dj(null)))
s($,"jE","h9",()=>A.ab(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jH","hc",()=>A.ab(A.dj(void 0)))
s($,"jI","hd",()=>A.ab(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jG","hb",()=>A.ab(A.fp(null)))
s($,"jF","ha",()=>A.ab(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"jK","hf",()=>A.ab(A.fp(void 0)))
s($,"jJ","he",()=>A.ab(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"jL","eY",()=>A.hH())
s($,"jM","em",()=>A.cH(B.ba))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.aJ,SharedArrayBuffer:A.aJ,ArrayBufferView:A.bj,DataView:A.ca,Float32Array:A.cb,Float64Array:A.cc,Int16Array:A.cd,Int32Array:A.ce,Int8Array:A.cf,Uint16Array:A.cg,Uint32Array:A.ch,Uint8ClampedArray:A.bk,CanvasPixelArray:A.bk,Uint8Array:A.ci})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aK.$nativeSuperclassTag="ArrayBufferView"
A.bC.$nativeSuperclassTag="ArrayBufferView"
A.bD.$nativeSuperclassTag="ArrayBufferView"
A.bh.$nativeSuperclassTag="ArrayBufferView"
A.bE.$nativeSuperclassTag="ArrayBufferView"
A.bF.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.jj
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()