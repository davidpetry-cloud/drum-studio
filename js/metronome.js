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
if(a[b]!==s){A.jb(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.es(b)
return new s(c,this)}:function(){if(s===null)s=A.es(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.es(a).prototype
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
ey(a,b,c,d){return{i:a,p:b,e:c,x:d}},
et(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.eu==null){A.j0()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.f4("Return interceptor for "+A.m(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.dz
if(o==null)o=$.dz=A.dT(n)
p=q[o]}if(p!=null)return p
p=A.j4(a)
if(p!=null)return p
if(typeof a=="function")return B.K
s=Object.getPrototypeOf(a)
if(s==null)return B.B
if(s===Object.prototype)return B.B
if(typeof q=="function"){o=$.dz
if(o==null)o=$.dz=A.dT(n)
Object.defineProperty(q,o,{value:B.r,enumerable:false,writable:true,configurable:true})
return B.r}return B.r},
h9(a,b){if(a<0||a>4294967295)throw A.c(A.b5(a,0,4294967295,"length",null))
return J.hb(new Array(a),b)},
ha(a,b){if(a<0)throw A.c(A.aM("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.h("n<0>"))},
hb(a,b){var s=A.e(a,b.h("n<0>"))
s.$flags=1
return s},
eO(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hc(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.eO(r))break;++b}return b},
hd(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.j(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.eO(q))break}return b},
ao(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aQ.prototype
return J.bI.prototype}if(typeof a=="string")return J.au.prototype
if(a==null)return J.aR.prototype
if(typeof a=="boolean")return J.bH.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
if(typeof a=="symbol")return J.aU.prototype
if(typeof a=="bigint")return J.aS.prototype
return a}if(a instanceof A.h)return a
return J.et(a)},
fx(a){if(typeof a=="string")return J.au.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
if(typeof a=="symbol")return J.aU.prototype
if(typeof a=="bigint")return J.aS.prototype
return a}if(a instanceof A.h)return a
return J.et(a)},
fy(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
if(typeof a=="symbol")return J.aU.prototype
if(typeof a=="bigint")return J.aS.prototype
return a}if(a instanceof A.h)return a
return J.et(a)},
iW(a){if(typeof a=="number")return J.at.prototype
if(a==null)return a
if(!(a instanceof A.h))return J.aC.prototype
return a},
ac(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ao(a).M(a,b)},
eD(a,b,c){return J.iW(a).n(a,b,c)},
W(a){return J.ao(a).gl(a)},
fT(a){return J.fy(a).gbD(a)},
eE(a){return J.fy(a).gE(a)},
eF(a){return J.fx(a).gk(a)},
fU(a){return J.ao(a).gm(a)},
bt(a){return J.ao(a).i(a)},
bF:function bF(){},
bH:function bH(){},
aR:function aR(){},
aT:function aT(){},
a5:function a5(){},
bZ:function bZ(){},
aC:function aC(){},
a4:function a4(){},
aS:function aS(){},
aU:function aU(){},
n:function n(a){this.$ti=a},
bG:function bG(){},
ck:function ck(a){this.$ti=a},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
at:function at(){},
aQ:function aQ(){},
bI:function bI(){},
au:function au(){}},A={ea:function ea(){},
eR(a){return new A.bN("Field '"+a+"' has been assigned during initialization.")},
a8(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
eh(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
er(a,b,c){return a},
ew(a){var s,r
for(s=$.L.length,r=0;r<s;++r)if(a===$.L[r])return!0
return!1},
eM(){return new A.b8("No element")},
bN:function bN(a){this.a=a},
d6:function d6(){},
aN:function aN(){},
ag:function ag(){},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
G:function G(){},
fG(a){var s=A.fF(a)
if(s!=null)return s
return"minified:"+a},
jB(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bt(a)
return s},
c_(a){var s,r=$.eX
if(r==null)r=$.eX=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ed(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.j(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
hm(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.c.a_(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
c0(a){var s,r,q,p
if(a instanceof A.h)return A.K(A.br(a),null)
s=J.ao(a)
if(s===B.J||s===B.L||t.D.b(a)){r=B.v(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.K(A.br(a),null)},
eY(a){var s,r,q
if(a==null||typeof a=="number"||A.eo(a))return J.bt(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a3)return a.i(0)
if(a instanceof A.al)return a.bp(!0)
s=$.fS()
for(r=0;r<1;++r){q=s[r].cJ(a)
if(q!=null)return q}return"Instance of '"+A.c0(a)+"'"},
E(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.bk(s,10)|55296)>>>0,s&1023|56320)}throw A.c(A.b5(a,0,1114111,null,null))},
hl(a){var s=a.$thrownJsError
if(s==null)return null
return A.aK(s)},
eZ(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.B(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
j(a,b){if(a==null)J.eF(a)
throw A.c(A.fw(a,b))},
fw(a,b){var s,r="index"
if(!A.fm(b))return new A.R(!0,b,r,null)
s=J.eF(a)
if(b<0||b>=s)return A.eL(b,s,a,r)
return A.ee(b,r)},
iM(a){return new A.R(!0,a,null,null)},
c(a){return A.B(a,new Error())},
B(a,b){var s
if(a==null)a=new A.a0()
b.dartException=a
s=A.jc
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
jc(){return J.bt(this.dartException)},
eA(a,b){throw A.B(a,b==null?new Error():b)},
bs(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.eA(A.i9(a,b,c),s)},
i9(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.b9("'"+s+"': Cannot "+o+" "+l+k+n)},
U(a){throw A.c(A.a_(a))},
a1(a){var s,r,q,p,o,n
a=A.j7(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.dc(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
dd(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
f3(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
eb(a,b){var s=b==null,r=s?null:b.method
return new A.bL(a,r,s?null:b.receiver)},
Z(a){var s
if(a==null)return new A.d4(a)
if(a instanceof A.aO){s=a.a
return A.ab(a,s==null?A.bm(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.ab(a,a.dartException)
return A.iK(a)},
ab(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
iK(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.bk(r,16)&8191)===10)switch(q){case 438:return A.ab(a,A.eb(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.ab(a,new A.b3())}}if(a instanceof TypeError){p=$.fI()
o=$.fJ()
n=$.fK()
m=$.fL()
l=$.fO()
k=$.fP()
j=$.fN()
$.fM()
i=$.fR()
h=$.fQ()
g=p.G(s)
if(g!=null)return A.ab(a,A.eb(A.p(s),g))
else{g=o.G(s)
if(g!=null){g.method="call"
return A.ab(a,A.eb(A.p(s),g))}else if(n.G(s)!=null||m.G(s)!=null||l.G(s)!=null||k.G(s)!=null||j.G(s)!=null||m.G(s)!=null||i.G(s)!=null||h.G(s)!=null){A.p(s)
return A.ab(a,new A.b3())}}return A.ab(a,new A.c5(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.b7()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ab(a,new A.R(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.b7()
return a},
aK(a){var s
if(a instanceof A.aO)return a.b
if(a==null)return new A.bg(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bg(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fA(a){if(a==null)return J.W(a)
if(typeof a=="object")return A.c_(a)
return J.W(a)},
iV(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.I(0,a[s],a[r])}return b},
ik(a,b,c,d,e,f){t.Z.a(a)
switch(A.t(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.dn("Unsupported number of arguments for wrapped closure"))},
bq(a,b){var s=a.$identity
if(!!s)return s
s=A.iQ(a,b)
a.$identity=s
return s},
iQ(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ik)},
h0(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.c2().constructor.prototype):Object.create(new A.as(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.eK(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fX(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.eK(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fX(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fV)}throw A.c("Error in functionType of tearoff")},
fY(a,b,c,d){var s=A.eJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
eK(a,b,c,d){if(c)return A.h_(a,b,d)
return A.fY(b.length,d,a,b)},
fZ(a,b,c,d){var s=A.eJ,r=A.fW
switch(b?-1:a){case 0:throw A.c(new A.c1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
h_(a,b,c){var s,r
if($.eH==null)$.eH=A.eG("interceptor")
if($.eI==null)$.eI=A.eG("receiver")
s=b.length
r=A.fZ(s,c,a,b)
return r},
es(a){return A.h0(a)},
fV(a,b){return A.bl(v.typeUniverse,A.br(a.a),b)},
eJ(a){return a.a},
fW(a){return a.b},
eG(a){var s,r,q,p=new A.as("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.aM("Field name "+a+" not found.",null))},
dT(a){return v.getIsolateTag(a)},
jA(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
j4(a){var s,r,q,p,o,n=A.p($.fz.$1(a)),m=$.dR[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dY[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.dL($.fs.$2(a,n))
if(q!=null){m=$.dR[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dY[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dZ(s)
$.dR[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dY[n]=s
return s}if(p==="-"){o=A.dZ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fB(a,s)
if(p==="*")throw A.c(A.f4(n))
if(v.leafTags[n]===true){o=A.dZ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fB(a,s)},
fB(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ey(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dZ(a){return J.ey(a,!1,null,!!a.$iH)},
j6(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dZ(s)
else return J.ey(s,c,null,null)},
j0(){if(!0===$.eu)return
$.eu=!0
A.j1()},
j1(){var s,r,q,p,o,n,m,l
$.dR=Object.create(null)
$.dY=Object.create(null)
A.j_()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fD.$1(o)
if(n!=null){m=A.j6(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
j_(){var s,r,q,p,o,n,m=B.D()
m=A.aJ(B.E,A.aJ(B.F,A.aJ(B.w,A.aJ(B.w,A.aJ(B.G,A.aJ(B.H,A.aJ(B.I(B.v),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fz=new A.dV(p)
$.fs=new A.dW(o)
$.fD=new A.dX(n)},
aJ(a,b){return a(b)||b},
iS(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
eP(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(A.e8("Illegal RegExp pattern ("+String(o)+")",a))},
iT(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
j7(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
fE(a,b,c){var s,r=b.gc6()
r.lastIndex=0
s=a.replace(r,A.iT(c))
return s},
aG:function aG(a,b){this.a=a
this.b=b},
b6:function b6(){},
dc:function dc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b3:function b3(){},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
c5:function c5(a){this.a=a},
d4:function d4(a){this.a=a},
aO:function aO(a,b){this.a=a
this.b=b},
bg:function bg(a){this.a=a
this.b=null},
a3:function a3(){},
by:function by(){},
bz:function bz(){},
c3:function c3(){},
c2:function c2(){},
as:function as(a,b){this.a=a
this.b=b},
c1:function c1(a){this.a=a},
aV:function aV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cq:function cq(a,b){this.a=a
this.b=b
this.c=null},
af:function af(a,b){this.a=a
this.$ti=b},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dV:function dV(a){this.a=a},
dW:function dW(a){this.a=a},
dX:function dX(a){this.a=a},
al:function al(){},
aF:function aF(){},
bK:function bK(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
dD:function dD(a){this.b=a},
ax:function ax(){},
b1:function b1(){},
bR:function bR(){},
az:function az(){},
b_:function b_(){},
b0:function b0(){},
ay:function ay(){},
bS:function bS(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
b2:function b2(){},
bY:function bY(){},
bb:function bb(){},
bc:function bc(){},
bd:function bd(){},
be:function be(){},
eg(a,b){var s=b.c
return s==null?b.c=A.bj(a,"ae",[b.x]):s},
f_(a){var s=a.w
if(s===6||s===7)return A.f_(a.x)
return s===11||s===12},
hq(a){return a.as},
dS(a){return A.dJ(v.typeUniverse,a,!1)},
am(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.am(a1,s,a3,a4)
if(r===s)return a2
return A.fb(a1,r,!0)
case 7:s=a2.x
r=A.am(a1,s,a3,a4)
if(r===s)return a2
return A.fa(a1,r,!0)
case 8:q=a2.y
p=A.aI(a1,q,a3,a4)
if(p===q)return a2
return A.bj(a1,a2.x,p)
case 9:o=a2.x
n=A.am(a1,o,a3,a4)
m=a2.y
l=A.aI(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.el(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aI(a1,j,a3,a4)
if(i===j)return a2
return A.fc(a1,k,i)
case 11:h=a2.x
g=A.am(a1,h,a3,a4)
f=a2.y
e=A.iH(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.f9(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aI(a1,d,a3,a4)
o=a2.x
n=A.am(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.em(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bw("Attempted to substitute unexpected RTI kind "+a0))}},
aI(a,b,c,d){var s,r,q,p,o=b.length,n=A.dK(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.am(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
iI(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dK(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.am(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
iH(a,b,c,d){var s,r=b.a,q=A.aI(a,r,c,d),p=b.b,o=A.aI(a,p,c,d),n=b.c,m=A.iI(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ca()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
fu(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.iY(s)
return a.$S()}return null},
j2(a,b){var s
if(A.f_(b))if(a instanceof A.a3){s=A.fu(a)
if(s!=null)return s}return A.br(a)},
br(a){if(a instanceof A.h)return A.aa(a)
if(Array.isArray(a))return A.J(a)
return A.en(J.ao(a))},
J(a){var s=a[v.arrayRti],r=t.q
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
aa(a){var s=a.$ti
return s!=null?s:A.en(a)},
en(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ih(a,s)},
ih(a,b){var s=a instanceof A.a3?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.hV(v.typeUniverse,s.name)
b.$ccache=r
return r},
iY(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dJ(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
iX(a){return A.an(A.aa(a))},
eq(a){var s
if(a instanceof A.al)return A.iU(a.$r,a.b3())
s=a instanceof A.a3?A.fu(a):null
if(s!=null)return s
if(t.k.b(a))return J.fU(a).a
if(Array.isArray(a))return A.J(a)
return A.br(a)},
an(a){var s=a.r
return s==null?a.r=new A.dI(a):s},
iU(a,b){var s,r,q=b,p=q.length
if(p===0)return t.h
if(0>=p)return A.j(q,0)
s=A.bl(v.typeUniverse,A.eq(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.j(q,r)
s=A.fe(v.typeUniverse,s,A.eq(q[r]))}return A.bl(v.typeUniverse,s,a)},
V(a){return A.an(A.dJ(v.typeUniverse,a,!1))},
ig(a){var s=this
s.b=A.iF(s)
return s.b(a)},
iF(a){var s,r,q,p,o
if(a===t.K)return A.ir
if(A.ap(a))return A.iv
s=a.w
if(s===6)return A.id
if(s===1)return A.fo
if(s===7)return A.il
r=A.iE(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ap)){a.f="$i"+q
if(q==="i")return A.ip
if(a===t.m)return A.io
return A.iu}}else if(s===10){p=A.iS(a.x,a.y)
o=p==null?A.fo:p
return o==null?A.bm(o):o}return A.ib},
iE(a){if(a.w===8){if(a===t.S)return A.fm
if(a===t.i||a===t.o)return A.iq
if(a===t.N)return A.it
if(a===t.y)return A.eo}return null},
ie(a){var s=this,r=A.ia
if(A.ap(s))r=A.i0
else if(s===t.K)r=A.bm
else if(A.aL(s)){r=A.ic
if(s===t.a3)r=A.hZ
else if(s===t.aD)r=A.dL
else if(s===t.u)r=A.hX
else if(s===t.ae)r=A.fh
else if(s===t.I)r=A.hY
else if(s===t.aQ)r=A.X}else if(s===t.S)r=A.t
else if(s===t.N)r=A.p
else if(s===t.y)r=A.y
else if(s===t.o)r=A.i_
else if(s===t.i)r=A.P
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
ib(a){var s=this
if(a==null)return A.aL(s)
return A.j3(v.typeUniverse,A.j2(a,s),s)},
id(a){if(a==null)return!0
return this.x.b(a)},
iu(a){var s,r=this
if(a==null)return A.aL(r)
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.ao(a)[s]},
ip(a){var s,r=this
if(a==null)return A.aL(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.ao(a)[s]},
io(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.h)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fn(a){if(typeof a=="object"){if(a instanceof A.h)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
ia(a){var s=this
if(a==null){if(A.aL(s))return a}else if(s.b(a))return a
throw A.B(A.fj(a,s),new Error())},
ic(a){var s=this
if(a==null||s.b(a))return a
throw A.B(A.fj(a,s),new Error())},
fj(a,b){return new A.bh("TypeError: "+A.f5(a,A.K(b,null)))},
f5(a,b){return A.bD(a)+": type '"+A.K(A.eq(a),null)+"' is not a subtype of type '"+b+"'"},
O(a,b){return new A.bh("TypeError: "+A.f5(a,b))},
il(a){var s=this
return s.x.b(a)||A.eg(v.typeUniverse,s).b(a)},
ir(a){return a!=null},
bm(a){if(a!=null)return a
throw A.B(A.O(a,"Object"),new Error())},
iv(a){return!0},
i0(a){return a},
fo(a){return!1},
eo(a){return!0===a||!1===a},
y(a){if(!0===a)return!0
if(!1===a)return!1
throw A.B(A.O(a,"bool"),new Error())},
hX(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.B(A.O(a,"bool?"),new Error())},
P(a){if(typeof a=="number")return a
throw A.B(A.O(a,"double"),new Error())},
hY(a){if(typeof a=="number")return a
if(a==null)return a
throw A.B(A.O(a,"double?"),new Error())},
fm(a){return typeof a=="number"&&Math.floor(a)===a},
t(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.B(A.O(a,"int"),new Error())},
hZ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.B(A.O(a,"int?"),new Error())},
iq(a){return typeof a=="number"},
i_(a){if(typeof a=="number")return a
throw A.B(A.O(a,"num"),new Error())},
fh(a){if(typeof a=="number")return a
if(a==null)return a
throw A.B(A.O(a,"num?"),new Error())},
it(a){return typeof a=="string"},
p(a){if(typeof a=="string")return a
throw A.B(A.O(a,"String"),new Error())},
dL(a){if(typeof a=="string")return a
if(a==null)return a
throw A.B(A.O(a,"String?"),new Error())},
b(a){if(A.fn(a))return a
throw A.B(A.O(a,"JSObject"),new Error())},
X(a){if(a==null)return a
if(A.fn(a))return a
throw A.B(A.O(a,"JSObject?"),new Error())},
fq(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.K(a[q],b)
return s},
iA(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fq(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.K(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fk(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.K(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.K(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.K(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.K(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.K(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
K(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.K(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.K(a.x,b)+">"
if(l===8){p=A.iJ(a.x)
o=a.y
return o.length>0?p+("<"+A.fq(o,b)+">"):p}if(l===10)return A.iA(a,b)
if(l===11)return A.fk(a,b,null)
if(l===12)return A.fk(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.j(b,n)
return b[n]}return"?"},
iJ(a){var s=A.fF(a)
if(s!=null)return s
return"minified:"+a},
hW(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
hV(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dJ(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bk(a,5,"#")
q=A.dK(s)
for(p=0;p<s;++p)q[p]=r
o=A.bj(a,b,q)
n[b]=o
return o}else return m},
hU(a,b){return A.ff(a.tR,b)},
hT(a,b){return A.ff(a.eT,b)},
dJ(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fd(a,null,b,!1)
r.set(b,s)
return s},
bl(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fd(a,b,c,!0)
q.set(c,r)
return r},
fe(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.el(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
fd(a,b,c,d){return A.hL(A.hF(a,b,c,d))},
a9(a,b){b.a=A.ie
b.b=A.ig
return b},
bk(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.T(null,null)
s.w=b
s.as=c
r=A.a9(a,s)
a.eC.set(c,r)
return r},
fb(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.hR(a,b,r,c)
a.eC.set(r,s)
return s},
hR(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ap(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aL(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.T(null,null)
q.w=6
q.x=b
q.as=c
return A.a9(a,q)},
fa(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hP(a,b,r,c)
a.eC.set(r,s)
return s},
hP(a,b,c,d){var s,r
if(d){s=b.w
if(A.ap(b)||b===t.K)return b
else if(s===1)return A.bj(a,"ae",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.T(null,null)
r.w=7
r.x=b
r.as=c
return A.a9(a,r)},
hS(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.T(null,null)
s.w=13
s.x=b
s.as=q
r=A.a9(a,s)
a.eC.set(q,r)
return r},
bi(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
hO(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bj(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bi(c)+">"
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
el(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bi(r)+">")
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
fc(a,b,c){var s,r,q="+"+(b+"("+A.bi(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.T(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.a9(a,s)
a.eC.set(q,r)
return r},
f9(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bi(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bi(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.hO(i)+"}"}r=n+(g+")")
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
em(a,b,c,d){var s,r=b.as+("<"+A.bi(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hQ(a,b,c,r,d)
a.eC.set(r,s)
return s},
hQ(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dK(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.am(a,b,r,0)
m=A.aI(a,c,r,0)
return A.em(a,n,m,c!==m)}}l=new A.T(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.a9(a,l)},
hF(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hL(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hH(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.f7(a,r,l,k,!1)
else if(q===46)r=A.f7(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ak(a.u,a.e,k.pop()))
break
case 94:k.push(A.hS(a.u,k.pop()))
break
case 35:k.push(A.bk(a.u,5,"#"))
break
case 64:k.push(A.bk(a.u,2,"@"))
break
case 126:k.push(A.bk(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hJ(a,k)
break
case 38:A.hI(a,k)
break
case 63:p=a.u
k.push(A.fb(p,A.ak(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fa(p,A.ak(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hG(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.f8(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hM(a.u,a.e,o)
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
hH(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
f7(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.hW(s,o.x)[p]
if(n==null)A.eA('No "'+p+'" in "'+A.hq(o)+'"')
d.push(A.bl(s,o,n))}else d.push(p)
return m},
hJ(a,b){var s,r=a.u,q=A.f6(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bj(r,p,q))
else{s=A.ak(r,a.e,p)
switch(s.w){case 11:b.push(A.em(r,s,q,a.n))
break
default:b.push(A.el(r,s,q))
break}}},
hG(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.f6(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ak(p,a.e,o)
q=new A.ca()
q.a=s
q.b=n
q.c=m
b.push(A.f9(p,r,q))
return
case-4:b.push(A.fc(p,b.pop(),s))
return
default:throw A.c(A.bw("Unexpected state under `()`: "+A.m(o)))}},
hI(a,b){var s=b.pop()
if(0===s){b.push(A.bk(a.u,1,"0&"))
return}if(1===s){b.push(A.bk(a.u,4,"1&"))
return}throw A.c(A.bw("Unexpected extended operation "+A.m(s)))},
f6(a,b){var s=b.splice(a.p)
A.f8(a.u,a.e,s)
a.p=b.pop()
return s},
ak(a,b,c){if(typeof c=="string")return A.bj(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hK(a,b,c)}else return c},
f8(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ak(a,b,c[s])},
hM(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ak(a,b,c[s])},
hK(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.bw("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bw("Bad index "+c+" for "+b.i(0)))},
j3(a,b,c){var s,r=b.d
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
return A.A(a,A.eg(a,b),c,d,e)}if(s===6)return A.A(a,p,c,d,e)&&A.A(a,b.x,c,d,e)
if(q===7){if(A.A(a,b,c,d.x,e))return!0
return A.A(a,b,c,A.eg(a,d),e)}if(q===6)return A.A(a,b,c,p,e)||A.A(a,b,c,d.x,e)
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
if(!A.A(a,j,c,i,e)||!A.A(a,i,e,j,c))return!1}return A.fl(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.fl(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.im(a,b,c,d,e)}if(o&&q===10)return A.is(a,b,c,d,e)
return!1},
fl(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
im(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bl(a,b,r[o])
return A.fg(a,p,null,c,d.y,e)}return A.fg(a,b.y,null,c,d.y,e)},
fg(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.A(a,b[s],d,e[s],f))return!1
return!0},
is(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.A(a,r[s],c,q[s],e))return!1
return!0},
aL(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ap(a))if(s!==6)r=s===7&&A.aL(a.x)
return r},
ap(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
ff(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dK(a){return a>0?new Array(a):v.typeUniverse.sEA},
T:function T(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ca:function ca(){this.c=this.b=this.a=null},
dI:function dI(a){this.a=a},
c9:function c9(){},
bh:function bh(a){this.a=a},
hy(){var s,r,q
if(self.scheduleImmediate!=null)return A.iN()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bq(new A.dj(s),1)).observe(r,{childList:true})
return new A.di(s,r,q)}else if(self.setImmediate!=null)return A.iO()
return A.iP()},
hz(a){self.scheduleImmediate(A.bq(new A.dk(t.M.a(a)),0))},
hA(a){self.setImmediate(A.bq(new A.dl(t.M.a(a)),0))},
hB(a){t.M.a(a)
A.hN(0,a)},
hN(a,b){var s=new A.dG()
s.bP(a,b)
return s},
ix(a){return new A.c6(new A.z($.v,a.h("z<0>")),a.h("c6<0>"))},
i4(a,b){a.$2(0,null)
b.b=!0
return b.a},
i1(a,b){A.i5(a,b)},
i3(a,b){b.aL(a)},
i2(a,b){b.aM(A.Z(a),A.aK(a))},
i5(a,b){var s,r,q=new A.dM(b),p=new A.dN(b)
if(a instanceof A.z)a.bn(q,p,t.z)
else{s=t.z
if(a instanceof A.z)a.bH(q,p,s)
else{r=new A.z($.v,t._)
r.a=8
r.c=a
r.bn(q,p,s)}}},
iL(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.v
return r.bb(r,t.A.a(new A.dQ(s)),t.H,t.S,t.z)},
ch(a){var s
if(t.C.b(a)){s=a.ga8()
if(s!=null)return s}return B.k},
ii(a,b){var s=$.v
if(s===B.e)return null
s.bZ(s,a,b)
return null},
ij(a,b){if($.v!==B.e)A.ii(a,b)
if(b==null)if(t.C.b(a)){b=a.ga8()
if(b==null){A.eZ(a,B.k)
b=B.k}}else b=B.k
else if(t.C.b(a))A.eZ(a,b)
return new A.N(a,b)},
ej(a,b,c){var s,r,q,p,o,n={},m=n.a=a
for(s=t._;r=m.a,(r&4)!==0;m=a){a=s.a(m.c)
n.a=a}if(m===b){s=A.hs()
b.ap(new A.N(new A.R(!0,m,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=m.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=m
m.b9(p)
return}if(!c)if(b.c==null)m=(s&16)===0||q!==0
else m=!1
else m=!0
if(m){p=b.ad()
b.aa(n.a)
A.aD(b,p)
return}b.a^=2
o=b.b
o.a1(o,new A.ds(n,b))},
aD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=e.a=a
for(s=t.n,r=t.F;;){q={}
p=d.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(d.c)
d=d.b
d.b4(d,m.a,m.b)}return}q.a=b
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
if((d&15)===8)new A.dw(q,e,n).$0()
else if(o){if((d&1)!==0)new A.dv(q,j).$0()}else if((d&2)!==0)new A.du(e,q).$0()
if(h!=null)$.v=h
d=q.c
if(d instanceof A.z){p=q.a.$ti
p=p.h("ae<2>").b(d)||!p.y[1].b(d)}else p=!1
if(p){g=q.a.b
if((d.a&24)!==0){f=r.a(g.c)
g.c=null
b=g.ae(f)
g.a=d.a&30|g.a&1
g.c=d.c
e.a=d
continue}else A.ej(d,g,!0)
return}}g=q.a.b
f=r.a(g.c)
g.c=null
b=g.ae(f)
d=q.b
p=q.c
if(!d){g.$ti.c.a(p)
g.a=8
g.c=p}else{s.a(p)
g.a=g.a&1|16
g.c=p}e.a=g
d=g}},
fp(a,b){var s=t.Q
if(s.b(a))return b.bb(b,s.a(a),t.z,t.K,t.l)
s=t.v
if(s.b(a))return b.bc(b,s.a(a),t.z,t.K)
throw A.c(A.bu(a,"onError",u.c))},
iy(){var s,r
for(s=$.aH;s!=null;s=$.aH){$.bp=null
r=s.b
$.aH=r
if(r==null)$.bo=null
s.a.$0()}},
iG(){$.ep=!0
try{A.iy()}finally{$.bp=null
$.ep=!1
if($.aH!=null)$.eC().$1(A.ft())}},
fr(a){var s=new A.c7(a),r=$.bo
if(r==null){$.aH=$.bo=s
if(!$.ep)$.eC().$1(A.ft())}else $.bo=r.b=s},
iD(a){var s,r,q,p=$.aH
if(p==null){A.fr(a)
$.bp=$.bo
return}s=new A.c7(a)
r=$.bp
if(r==null){s.b=p
$.aH=$.bp=s}else{q=r.b
s.b=q
$.bp=r.b=s
if(q==null)$.bo=s}},
jm(a,b){A.er(a,"stream",t.K)
return new A.ce(b.h("ce<0>"))},
iB(a,b){A.iD(new A.dP(a,b))},
iC(a,b){if(B.e!==a)b=a.cp(b,t.H)
A.fr(b)},
dj:function dj(a){this.a=a},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(a){this.a=a},
dl:function dl(a){this.a=a},
dG:function dG(){},
dH:function dH(a,b){this.a=a
this.b=b},
c6:function c6(a,b){this.a=a
this.b=!1
this.$ti=b},
dM:function dM(a){this.a=a},
dN:function dN(a){this.a=a},
dQ:function dQ(a){this.a=a},
N:function N(a,b){this.a=a
this.b=b},
c8:function c8(){},
ba:function ba(a,b){this.a=a
this.$ti=b},
a2:function a2(a,b,c,d,e){var _=this
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
dp:function dp(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a,b){this.a=a
this.b=b},
dy:function dy(a){this.a=a},
dv:function dv(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
this.b=b},
c7:function c7(a){this.a=a
this.b=null},
ce:function ce(a){this.$ti=a},
dg:function dg(){},
dh:function dh(a,b,c){this.a=a
this.b=b
this.c=c},
dP:function dP(a,b){this.a=a
this.b=b},
eT(a,b,c){return b.h("@<0>").t(c).h("eS<1,2>").a(A.iV(a,new A.aV(b.h("@<0>").t(c).h("aV<1,2>"))))},
hf(a){return new A.aj(a.h("aj<0>"))},
hg(a){return new A.aj(a.h("aj<0>"))},
ek(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hE(a,b,c){var s=new A.aE(a,b,c.h("aE<0>"))
s.c=a.e
return s},
eU(a,b){var s,r,q=A.hf(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.U)(a),++r)q.j(0,b.a(a[r]))
return q},
eW(a){var s,r
if(A.ew(a))return"{...}"
s=new A.aB("")
try{r={}
B.a.j($.L,a)
s.a+="{"
r.a=!0
a.a5(0,new A.cr(r,s))
s.a+="}"}finally{if(0>=$.L.length)return A.j($.L,-1)
$.L.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aj:function aj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cd:function cd(a){this.a=a
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
bf:function bf(){},
iz(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.Z(r)
q=A.e8(String(s),null)
throw A.c(q)}q=A.dO(p)
return q},
dO(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.cb(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.dO(a[s])
return a},
eQ(a,b,c){return new A.aW(a,b)},
i8(a){return a.bI()},
hC(a,b){return new A.dA(a,[],A.iR())},
hD(a,b,c){var s,r=new A.aB(""),q=A.hC(r,b)
q.ao(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
cb:function cb(a,b){this.a=a
this.b=b
this.c=null},
cc:function cc(a){this.a=a},
bA:function bA(){},
bC:function bC(){},
aW:function aW(a,b){this.a=a
this.b=b},
bM:function bM(a,b){this.a=a
this.b=b},
cl:function cl(){},
cn:function cn(a){this.b=a},
cm:function cm(a){this.a=a},
dB:function dB(){},
dC:function dC(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c){this.c=a
this.a=b
this.b=c},
ev(a){var s=A.ed(a,null)
if(s!=null)return s
throw A.c(A.e8(a,null))},
h1(a,b){a=A.B(a,new Error())
if(a==null)a=A.bm(a)
a.stack=b.i(0)
throw a},
aw(a,b,c,d){var s,r=c?J.ha(a,d):J.h9(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hh(a,b,c){var s,r,q=A.e([],c.h("n<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.U)(a),++r)B.a.j(q,c.a(a[r]))
q.$flags=1
return q},
aX(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.h("n<0>"))
s=A.e([],b.h("n<0>"))
for(r=J.eE(a);r.q();)B.a.j(s,r.gB())
return s},
eV(a,b){var s=A.hh(a,!1,b)
s.$flags=3
return s},
ef(a){return new A.bK(a,A.eP(a,!1,!0,!1,!1,""))},
f1(a,b,c){var s=J.eE(b)
if(!s.q())return a
if(c.length===0){do a+=A.m(s.gB())
while(s.q())}else{a+=A.m(s.gB())
while(s.q())a=a+c+A.m(s.gB())}return a},
hs(){return A.aK(new Error())},
bD(a){if(typeof a=="number"||A.eo(a)||a==null)return J.bt(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eY(a)},
h2(a,b){A.er(a,"error",t.K)
A.er(b,"stackTrace",t.l)
A.h1(a,b)},
bw(a){return new A.bv(a)},
aM(a,b){return new A.R(!1,null,b,a)},
bu(a,b,c){return new A.R(!0,a,b,c)},
ee(a,b){return new A.b4(null,null,!0,a,b,"Value not in range")},
b5(a,b,c,d,e){return new A.b4(b,c,!0,a,d,"Invalid value")},
ho(a,b,c){if(0>a||a>c)throw A.c(A.b5(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.b5(b,a,c,"end",null))
return b}return c},
hn(a,b){if(a<0)throw A.c(A.b5(a,0,null,b,null))
return a},
eL(a,b,c,d){return new A.bE(b,!0,a,d,"Index out of range")},
ei(a){return new A.b9(a)},
f4(a){return new A.c4(a)},
f0(a){return new A.b8(a)},
a_(a){return new A.bB(a)},
e8(a,b){return new A.aP(a,b)},
h8(a,b,c){var s,r
if(A.ew(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.j($.L,a)
try{A.iw(a,s)}finally{if(0>=$.L.length)return A.j($.L,-1)
$.L.pop()}r=A.f1(b,t.U.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
e9(a,b,c){var s,r
if(A.ew(a))return b+"..."+c
s=new A.aB(b)
B.a.j($.L,a)
try{r=s
r.a=A.f1(r.a,a,", ")}finally{if(0>=$.L.length)return A.j($.L,-1)
$.L.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
iw(a,b){var s,r,q,p,o,n,m,l=a.gE(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.q())return
s=A.m(l.gB())
B.a.j(b,s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.j(b,-1)
r=b.pop()
if(0>=b.length)return A.j(b,-1)
q=b.pop()}else{p=l.gB();++j
if(!l.q()){if(j<=4){B.a.j(b,A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.j(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB();++j
for(;l.q();p=o,o=n){n=l.gB();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.j(b,-1)
k-=b.pop().length+2;--j}B.a.j(b,"...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.j(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.j(b,m)
B.a.j(b,q)
B.a.j(b,r)},
hj(a,b,c,d){var s
if(B.m===c){s=B.b.gl(a)
b=J.W(b)
return A.eh(A.a8(A.a8($.e7(),s),b))}if(B.m===d){s=B.b.gl(a)
b=J.W(b)
c=J.W(c)
return A.eh(A.a8(A.a8(A.a8($.e7(),s),b),c))}s=B.b.gl(a)
b=J.W(b)
c=J.W(c)
d=J.W(d)
d=A.eh(A.a8(A.a8(A.a8(A.a8($.e7(),s),b),c),d))
return d},
dm:function dm(){},
q:function q(){},
bv:function bv(a){this.a=a},
a0:function a0(){},
R:function R(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b4:function b4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bE:function bE(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b9:function b9(a){this.a=a},
c4:function c4(a){this.a=a},
b8:function b8(a){this.a=a},
bB:function bB(a){this.a=a},
b7:function b7(){},
dn:function dn(a){this.a=a},
aP:function aP(a,b){this.a=a
this.b=b},
f:function f(){},
w:function w(){},
h:function h(){},
cf:function cf(){},
aB:function aB(a){this.a=a},
d3:function d3(a){this.a=a},
bn(a){var s
if(typeof a=="function")throw A.c(A.aM("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.i6,a)
s[$.e6()]=a
return s},
cg(a){var s
if(typeof a=="function")throw A.c(A.aM("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.i7,a)
s[$.e6()]=a
return s},
i6(a){return t.Z.a(a).$0()},
i7(a,b,c){t.Z.a(a)
if(A.t(c)>=1)return a.$1(b)
return a.$0()},
fC(a,b){var s=new A.z($.v,b.h("z<0>")),r=new A.ba(s,b.h("ba<0>"))
a.then(A.bq(new A.e0(r,b),1),A.bq(new A.e1(r),1))
return s},
e0:function e0(a,b){this.a=a
this.b=b},
e1:function e1(a){this.a=a},
dE:function dE(){this.b=this.a=0},
a6(a,b){var s=A.ec(a),r=b.a,q=b.b,p=A.aX(b.c,t.L)
return new A.S(s,r,q,p,b.d,b.e,b.f)},
hk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!(a instanceof A.F))return g
s=a.p(0,"name")
r=a.p(0,"bpm")
q=a.p(0,"meter")
if(typeof s!="string"||B.c.a_(s).length===0)return g
if(typeof r!="number"||typeof q!="string")return g
p=A.aZ(q)
if(p==null)return g
o=a.p(0,"levels")
if(t.j.b(o)){n=A.e([],t.a)
for(m=o.length,l=0;l<o.length;o.length===m||(0,A.U)(o),++l)n.push(A.he(A.m(o[l])))
k=n}else k=p.T()
if(k.length!==p.a)k=p.T()
j=a.p(0,"swing")
n=A.ec(s)
m=B.b.n(B.d.v(r),20,300)
i=A.f2(A.m(a.p(0,"sub")))
h=typeof j=="number"?B.b.n(B.d.v(j),50,75):50
return new A.S(n,m,p,k,i,h,J.ac(a.p(0,"dotted"),!0)&&p.gL())},
ec(a){var s=B.c.a_(a),r=A.ef("\\s+"),q=A.fE(s,r," ")
return q.length>40?B.c.N(q,0,40):q},
Y(a){var s,r,q=A.e([],t.J)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.U)(a),++r)q.push(a[r].bI())
return B.j.bv(q,null)},
fv(a){var s,r,q,p,o,n,m
if(a==null||a.length===0)return A.e([],t.e)
s=null
try{s=B.j.bu(a,null)}catch(r){if(A.Z(r) instanceof A.aP)return A.e([],t.e)
else throw r}if(!t.j.b(s))return A.e([],t.e)
q=A.e([],t.e)
for(p=s,o=p.length,n=0;n<p.length;p.length===o||(0,A.U)(p),++n){m=A.hk(p[n])
if(m!=null)q.push(m)}return q},
jd(a,b){var s,r,q,p,o=A.e([b],t.e)
for(s=a.length,r=b.a,q=0;q<a.length;a.length===s||(0,A.U)(a),++q){p=a[q]
if(p.a.toLowerCase()!==r.toLowerCase())o.push(p)}return o},
j9(){var s="4/4",r=new A.e3()
return A.e([r.$4$sub("Rock eighths",100,s,B.q),r.$4$sub("Funk sixteenths",92,s,B.p),r.$5$sub$swing("Swing",140,s,B.q,67),r.$4$dotted("Shuffle 12/8",72,"12/8",!0),r.$3("Jazz waltz",150,"3/4"),r.$4$sub("Songo",112,s,B.p),r.$3("Odd: 7/8",180,"7/8:2+2+3")],t.e)},
S:function S(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
e3:function e3(){},
he(a){return B.a.bA(B.o,new A.co(a),new A.cp())},
f2(a){return B.a.bA(B.A,new A.d9(a),new A.da())},
ah(a,b,c){var s=c==null?A.hi(a,b):c
s=new A.aY(a,b,A.eV(s,t.S))
s.bN(a,b,c)
return s},
hi(a,b){var s
if(b<8||a<5)return A.aw(a,1,!1,t.S)
if(B.b.a7(a,3)===0)return A.aw(B.b.D(a,3),3,!1,t.S)
if((a&1)===1){s=t.S
s=A.aX(A.aw(B.b.D(a-3,2),2,!1,s),s)
s.push(3)
return s}return A.aw(B.b.D(a,2),2,!1,t.S)},
aZ(a){var s,r,q,p,o,n,m,l,k,j,i=A.ef("^\\s*(\\d+)\\s*/\\s*(\\d+)\\s*(?::\\s*([\\d+\\s]+))?$").cu(a)
if(i==null)return null
p=i.b
if(1>=p.length)return A.j(p,1)
o=p[1]
o.toString
s=A.ev(o)
if(2>=p.length)return A.j(p,2)
o=p[2]
o.toString
r=A.ev(o)
q=null
if(3>=p.length)return A.j(p,3)
n=p[3]
if(n!=null){p=A.e([],t.t)
for(o=n.split("+"),m=o.length,l=0;l<m;++l){k=A.ed(B.c.a_(o[l]),null)
if(k!=null)p.push(k)}q=p}try{p=A.ah(s,r,q)
return p}catch(j){if(A.Z(j) instanceof A.R)return null
else throw j}},
hr(){return new A.d8()},
ja(a){var s
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
I:function I(a,b,c){this.c=a
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
d9:function d9(a){this.a=a},
da:function da(){},
aY:function aY(a,b,c){this.a=a
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
d8:function d8(){var _=this
_.a=!1
_.c=_.b=4
_.d=140},
ci:function ci(){this.a=!1
this.c=this.b=2},
bx:function bx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.x=_.w=_.r=_.f=_.e=0},
db:function db(a){this.c=a},
d(a,b){var s=A.X(A.b(v.G.document).getElementById(a))
s.toString
return b.a(s)},
M(a,b,c){var s=A.b(A.b(v.G.document).createElement(a))
if(b!=null)s.className=b
if(c!=null)s.textContent=c
return s},
o(a,b,c){return a.addEventListener(b,A.cg(new A.e_(c)))},
ex(a){var s,r,q,p,o=null
try{s=A.X(v.G.localStorage)
q=s
r=q==null?o:A.bJ(q,"getItem",a,o,t.X)
q=r!=null&&typeof r==="string"?A.p(r):o
return q}catch(p){return o}},
Q(a,b){var s,r,q
try{s=A.X(v.G.localStorage)
r=s
if(r!=null)A.bJ(r,"setItem",a,b,t.X)}catch(q){}},
ez(){var s=A.b(v.G.navigator).audioSession
if(t.m.b(s))s.type="playback"},
je(a){var s
try{A.y(A.b(v.G.navigator).vibrate(a))}catch(s){}},
j8(){var s,r,q,p,o,n=A.b(v.G.navigator).serviceWorker,m=t.m
if(!m.b(n))return
try{s=A.bJ(A.b(n),"register","sw.js",null,m)
m=A.fC(s,t.X)
r=new A.e2()
q=m.$ti
p=$.v
if(p!==B.e)r=A.fp(r,p)
m.a9(new A.a2(new A.z(p,q),2,null,r,q.h("a2<1,1>")))}catch(o){}},
jf(){var s=v.G,r=A.X(A.b(s.document).getElementById("themeToggle")),q=A.b(A.b(s.document).documentElement)
if(r==null)return
s=new A.e5(q,r)
A.o(r,"click",new A.e4(q,s))
s.$0()},
e_:function e_(a){this.a=a},
de:function de(){this.a=null
this.b=!1},
df:function df(a){this.a=a},
e2:function e2(){},
e5:function e5(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
j5(){var s,r,q,p
A.jf()
A.j8()
s=v.G
r=A.X(A.b(s.document).getElementById("metro"))
if(r==null)return
if(!("AudioContext" in s)){s=A.X(A.b(s.document).getElementById("no-audio"))
if(s!=null)s.hidden=!1
return}s=A.ah(4,4,null)
q=A.ah(4,4,null)
q=q.T()
p=t.m
new A.bQ(new A.cj(s,q,B.f),A.hr(),new A.ci(),A.d("bpm",p),A.d("bpm-range",p),A.d("tempo-unit",p),A.d("tempo-word",p),A.d("start",p),A.d("flash",p),A.d("position",p),A.d("grid",p),A.d("meter-beats",p),A.d("meter-unit",p),A.d("meter-groups",p),A.d("groups-row",p),A.d("meter-quick",p),A.d("dotted-row",p),A.d("dotted",p),A.d("sub",p),A.d("swing-row",p),A.d("swing",p),A.d("swing-out",p),A.d("sound",p),A.d("volume",p),A.d("sub-volume",p),A.d("vibrate-row",p),A.d("vibrate",p),A.d("big-flash",p),A.d("status",p),A.d("my-presets",p),A.d("presets-empty",p),A.d("preset-undo",p),A.d("preset-undo-text",p),A.d("preset-undo-btn",p),A.d("speed-progress",p),A.d("starter-presets",p),A.d("preset-name",p),A.e([],t.d),A.e([],t.O),new A.db(A.e([],t.w)),new A.de(),A.e([],t.e)).cL()
r.hidden=!1},
fi(a){var s,r=A.b(a.children),q=A.t(A.P(r.length)),p=A.e([],t.O)
for(s=0;s<q;++s)p.push(A.b(A.eN(r,"item",s,null,null,null)))
return p},
iZ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=A.ah(a,b,A.aw(a,1,!1,t.S))
if(b<8||a<4)return A.e([A.ah(a,b,null)],t.c)
s=A.hg(t.N)
r=t.t
new A.dU(s).$2(a,A.e([],r))
q=A.ah(a,b,null)
p=A.e([q],t.c)
for(o=A.hE(s,s.r,s.$ti.c),n=q.c,m=o.$ti.c;o.q();){l=o.d
if(l==null)l=m.a(l)
if(l!==B.a.K(n,"+")){k=A.e([],r)
for(l=l.split("+"),j=l.length,i=0;i<j;++i)k.push(A.ev(l[i]))
p.push(A.ah(a,b,k))}}p.push(h)
return p},
bQ:function bQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2){var _=this
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
_.RG="wood"
_.rx=0.8
_.ry=0.6
_.x1=_.to=!1
_.y1=_.xr=_.x2=null
_.y2=!1
_.ai=0
_.bw=_.a4=_.aj=_.a3=null
_.V=b8
_.ak=b9
_.bx=-1
_.ct=c0
_.bz=_.by=null
_.W=c1
_.C=c2
_.al=_.aN=null
_.aO=_.X=$},
cM:function cM(a){this.a=a},
cN:function cN(a){this.a=a},
cO:function cO(a){this.a=a},
cW:function cW(a){this.a=a},
cX:function cX(a){this.a=a},
cY:function cY(a){this.a=a},
cZ:function cZ(a){this.a=a},
d_:function d_(a){this.a=a},
d0:function d0(a){this.a=a},
d1:function d1(a){this.a=a},
d2:function d2(a){this.a=a},
cP:function cP(a){this.a=a},
cQ:function cQ(a){this.a=a},
cR:function cR(a){this.a=a},
cS:function cS(a){this.a=a},
cT:function cT(a){this.a=a},
cU:function cU(a){this.a=a},
cV:function cV(a){this.a=a},
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
dU:function dU(a){this.a=a},
fF(a){return v.mangledGlobalNames[a]},
jb(a){throw A.B(A.eR(a),new Error())},
eB(){throw A.B(A.eR(""),new Error())},
eN(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else{s=a[b](c,d)
return s}},
bJ(a,b,c,d,e){return e.a(A.eN(a,b,c,d,null,null))}},B={}
var w=[A,J,B]
var $={}
A.ea.prototype={}
J.bF.prototype={
M(a,b){return a===b},
gl(a){return A.c_(a)},
i(a){return"Instance of '"+A.c0(a)+"'"},
gm(a){return A.an(A.en(this))}}
J.bH.prototype={
i(a){return String(a)},
gl(a){return a?519018:218159},
gm(a){return A.an(t.y)},
$ik:1,
$iD:1}
J.aR.prototype={
M(a,b){return null==b},
i(a){return"null"},
gl(a){return 0},
$ik:1}
J.aT.prototype={$iu:1}
J.a5.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.bZ.prototype={}
J.aC.prototype={}
J.a4.prototype={
i(a){var s=a[$.fH()]
if(s==null)s=a[$.e6()]
if(s==null)return this.bL(a)
return"JavaScript function for "+J.bt(s)},
$iad:1}
J.aS.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.aU.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.n.prototype={
j(a,b){A.J(a).c.a(b)
a.$flags&1&&A.bs(a,29)
a.push(b)},
an(a,b){a.$flags&1&&A.bs(a,"removeAt",1)
if(b<0||b>=a.length)throw A.c(A.ee(b,null))
return a.splice(b,1)[0]},
S(a){a.$flags&1&&A.bs(a,"clear","clear")
a.length=0},
K(a,b){var s,r=A.aw(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.I(r,s,A.m(a[s]))
return r.join(b)},
cv(a,b,c,d){var s,r,q
d.a(b)
A.J(a).t(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.c(A.a_(a))}return r},
bA(a,b,c){var s,r,q,p=A.J(a)
p.h("D(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.a_(a))}p=c.$0()
return p},
gaP(a){if(a.length>0)return a[0]
throw A.c(A.eM())},
gbE(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.eM())},
br(a,b){var s,r
A.J(a).h("D(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.a_(a))}return!1},
U(a,b){var s,r
A.J(a).h("D(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.a_(a))}return!0},
a2(a,b){var s
for(s=0;s<a.length;++s)if(J.ac(a[s],b))return!0
return!1},
gbD(a){return a.length!==0},
i(a){return A.e9(a,"[","]")},
gE(a){return new J.ar(a,a.length,A.J(a).h("ar<1>"))},
gl(a){return A.c_(a)},
gk(a){return a.length},
I(a,b,c){A.J(a).c.a(c)
a.$flags&2&&A.bs(a)
if(!(b>=0&&b<a.length))throw A.c(A.fw(a,b))
a[b]=c},
cA(a,b){var s
A.J(a).h("D(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
$if:1,
$ii:1}
J.bG.prototype={
cJ(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.c0(a)+"'"
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
aK(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.b.gam(b)
if(this.gam(a)===s)return 0
if(this.gam(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gam(a){return a===0?1/a<0:a<0},
v(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.ei(""+a+".round()"))},
n(a,b,c){if(B.b.aK(b,c)>0)throw A.c(A.iM(b))
if(this.aK(a,b)<0)return b
if(this.aK(a,c)>0)return c
return a},
cG(a,b){var s
if(b>20)throw A.c(A.b5(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gam(a))return"-"+s
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
a7(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
bM(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bm(a,b)},
D(a,b){return(a|0)===a?a/b|0:this.bm(a,b)},
bm(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.ei("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
bk(a,b){var s
if(a>0)s=this.ce(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ce(a,b){return b>31?0:a>>>b},
gm(a){return A.an(t.o)},
$il:1,
$iaq:1}
J.aQ.prototype={
gm(a){return A.an(t.S)},
$ik:1,
$ia:1}
J.bI.prototype={
gm(a){return A.an(t.i)},
$ik:1}
J.au.prototype={
N(a,b,c){return a.substring(b,A.ho(b,c,a.length))},
a_(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.j(p,0)
if(p.charCodeAt(0)===133){s=J.hc(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.j(p,r)
q=p.charCodeAt(r)===133?J.hd(p,r):o
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
$ik:1,
$id5:1,
$ix:1}
A.bN.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.d6.prototype={}
A.aN.prototype={}
A.ag.prototype={
gE(a){var s=this
return new A.av(s,s.gk(s),A.aa(s).h("av<ag.E>"))},
gY(a){return this.gk(this)===0}}
A.av.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.fx(q),o=p.gk(q)
if(r.b!==o)throw A.c(A.a_(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ah(q,s);++r.c
return!0}}
A.G.prototype={}
A.aG.prototype={$r:"+(1,2)",$s:1}
A.b6.prototype={}
A.dc.prototype={
G(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.b3.prototype={
i(a){return"Null check operator used on a null value"}}
A.bL.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.c5.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.d4.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aO.prototype={}
A.bg.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ia7:1}
A.a3.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fG(r==null?"unknown":r)+"'"},
$iad:1,
gcO(){return this},
$C:"$1",
$R:1,
$D:null}
A.by.prototype={$C:"$0",$R:0}
A.bz.prototype={$C:"$2",$R:2}
A.c3.prototype={}
A.c2.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fG(s)+"'"}}
A.as.prototype={
M(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.as))return!1
return this.$_target===b.$_target&&this.a===b.a},
gl(a){return(A.fA(this.a)^A.c_(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c0(this.a)+"'")}}
A.c1.prototype={
i(a){return"RuntimeError: "+this.a}}
A.aV.prototype={
gk(a){return this.a},
gY(a){return this.a===0},
gZ(){return new A.af(this,this.$ti.h("af<1>"))},
p(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cB(b)},
cB(a){var s,r,q=this.d
if(q==null)return null
s=this.c1(q,a)
r=this.bB(s,a)
if(r<0)return null
return s[r].b},
I(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.aX(s==null?m.b=m.aC():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aX(r==null?m.c=m.aC():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aC()
p=J.W(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.aD(b,c)]
else{n=m.bB(o,b)
if(n>=0)o[n].b=c
else o.push(m.aD(b,c))}}},
a5(a,b){var s,r,q=this
q.$ti.h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.a_(q))
s=s.c}},
aX(a,b,c){var s,r=this.$ti
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.aD(b,c)
else s.b=c},
aD(a,b){var s=this,r=s.$ti,q=new A.cq(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
c1(a,b){return a[J.W(b)&1073741823]},
bB(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ac(a[r].a,b))return r
return-1},
i(a){return A.eW(this)},
aC(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ieS:1}
A.cq.prototype={}
A.af.prototype={
gk(a){return this.a.a},
gY(a){return this.a.a===0},
gE(a){var s=this.a
return new A.bO(s,s.r,s.e,this.$ti.h("bO<1>"))}}
A.bO.prototype={
gB(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.a_(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.dV.prototype={
$1(a){return this.a(a)},
$S:4}
A.dW.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.dX.prototype={
$1(a){return this.a(A.p(a))},
$S:11}
A.al.prototype={
i(a){return this.bp(!1)},
bp(a){var s,r,q,p,o,n=this.c_(),m=this.b3(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.j(m,q)
o=m[q]
l=a?l+A.eY(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
c_(){var s,r=this.$s
while($.dF.length<=r)B.a.j($.dF,null)
s=$.dF[r]
if(s==null){s=this.bU()
B.a.I($.dF,r,s)}return s},
bU(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.e(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.I(k,q,r[s])}}return A.eV(k,t.K)}}
A.aF.prototype={
b3(){return[this.a,this.b]},
M(a,b){if(b==null)return!1
return b instanceof A.aF&&this.$s===b.$s&&J.ac(this.a,b.a)&&J.ac(this.b,b.b)},
gl(a){return A.hj(this.$s,this.a,this.b,B.m)}}
A.bK.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
gc6(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.eP(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
cu(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dD(s)},
$id5:1,
$ihp:1}
A.dD.prototype={}
A.ax.prototype={
gm(a){return B.U},
$ik:1}
A.b1.prototype={}
A.bR.prototype={
gm(a){return B.V},
$ik:1}
A.az.prototype={
gk(a){return a.length},
$iH:1}
A.b_.prototype={$if:1,$ii:1}
A.b0.prototype={$if:1,$ii:1}
A.ay.prototype={
gm(a){return B.W},
$ik:1,
$iay:1}
A.bS.prototype={
gm(a){return B.X},
$ik:1}
A.bT.prototype={
gm(a){return B.Y},
$ik:1}
A.bU.prototype={
gm(a){return B.Z},
$ik:1}
A.bV.prototype={
gm(a){return B.a_},
$ik:1}
A.bW.prototype={
gm(a){return B.a1},
$ik:1}
A.bX.prototype={
gm(a){return B.a2},
$ik:1}
A.b2.prototype={
gm(a){return B.a3},
gk(a){return a.length},
$ik:1}
A.bY.prototype={
gm(a){return B.a4},
gk(a){return a.length},
$ik:1}
A.bb.prototype={}
A.bc.prototype={}
A.bd.prototype={}
A.be.prototype={}
A.T.prototype={
h(a){return A.bl(v.typeUniverse,this,a)},
t(a){return A.fe(v.typeUniverse,this,a)}}
A.ca.prototype={}
A.dI.prototype={
i(a){return A.K(this.a,null)}}
A.c9.prototype={
i(a){return this.a}}
A.bh.prototype={$ia0:1}
A.dj.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:5}
A.di.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.dk.prototype={
$0(){this.a.$0()},
$S:6}
A.dl.prototype={
$0(){this.a.$0()},
$S:6}
A.dG.prototype={
bP(a,b){if(self.setTimeout!=null)self.setTimeout(A.bq(new A.dH(this,b),0),a)
else throw A.c(A.ei("`setTimeout()` not found."))}}
A.dH.prototype={
$0(){this.b.$0()},
$S:0}
A.c6.prototype={
aL(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.aY(a)
else{s=r.a
if(q.h("ae<1>").b(a))s.aZ(a)
else s.b0(a)}},
aM(a,b){var s
if(b==null)b=A.ch(a)
s=this.a
if(this.b)s.av(new A.N(a,b))
else s.ap(new A.N(a,b))}}
A.dM.prototype={
$1(a){return this.a.$2(0,a)},
$S:2}
A.dN.prototype={
$2(a,b){this.a.$2(1,new A.aO(a,t.l.a(b)))},
$S:13}
A.dQ.prototype={
$2(a,b){this.a(A.t(a),b)},
$S:14}
A.N.prototype={
i(a){return A.m(this.a)},
$iq:1,
ga8(){return this.b}}
A.c8.prototype={
aM(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.f0("Future already completed"))
s.ap(A.ij(a,b))},
bt(a){return this.aM(a,null)}}
A.ba.prototype={
aL(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.f0("Future already completed"))
s.aY(r.h("1/").a(a))}}
A.a2.prototype={
cC(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.aG(s,t.x.a(this.d),a.a,t.y,t.K)},
cz(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.cb(l,q,m,a.b,o,n,t.l)
else p=l.aG(l,t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.r.b(A.Z(s))){if((r.c&1)!==0)throw A.c(A.aM("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.aM("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.z.prototype={
bH(a,b,c){var s,r,q,p=this.$ti
p.t(c).h("1/(2)").a(a)
s=$.v
if(s===B.e){if(b!=null&&!t.Q.b(b)&&!t.v.b(b))throw A.c(A.bu(b,"onError",u.c))}else{r=p.c
a=s.bc(s,c.h("@<0/>").t(r).h("1(2)").a(a),c.h("0/"),r)
if(b!=null)b=A.fp(b,s)}q=new A.z(s,c.h("z<0>"))
r=b==null?1:3
this.a9(new A.a2(q,r,a,b,p.h("@<1>").t(c).h("a2<1,2>")))
return q},
bn(a,b,c){var s,r=this.$ti
r.t(c).h("1/(2)").a(a)
s=new A.z($.v,c.h("z<0>"))
this.a9(new A.a2(s,19,a,b,r.h("@<1>").t(c).h("a2<1,2>")))
return s},
cd(a){this.a=this.a&1|16
this.c=a},
aa(a){this.a=a.a&30|this.a&1
this.c=a.c},
a9(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.a9(a)
return}r.aa(s)}q=r.b
q.a1(q,new A.dp(r,a))}},
b9(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.b9(a)
return}m.aa(n)}l.a=m.ae(a)
s=m.b
s.a1(s,new A.dt(l,m))}},
ad(){var s=t.F.a(this.c)
this.c=null
return this.ae(s)},
ae(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
b0(a){var s,r=this
r.$ti.c.a(a)
s=r.ad()
r.a=8
r.c=a
A.aD(r,s)},
bT(a){var s=this.ad()
this.aa(a)
A.aD(this,s)},
av(a){var s=this.ad()
this.cd(a)
A.aD(this,s)},
aY(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("ae<1>").b(a)){this.aZ(a)
return}this.bR(a)},
bR(a){var s,r=this
r.$ti.c.a(a)
r.a^=2
s=r.b
s.a1(s,new A.dr(r,a))},
aZ(a){A.ej(this.$ti.h("ae<1>").a(a),this,!1)
return},
ap(a){var s
this.a^=2
s=this.b
s.a1(s,new A.dq(this,a))},
$iae:1}
A.dp.prototype={
$0(){A.aD(this.a,this.b)},
$S:0}
A.dt.prototype={
$0(){A.aD(this.b,this.a.a)},
$S:0}
A.ds.prototype={
$0(){A.ej(this.a.a,this.b,!0)},
$S:0}
A.dr.prototype={
$0(){this.a.b0(this.b)},
$S:0}
A.dq.prototype={
$0(){this.a.av(this.b)},
$S:0}
A.dw.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.bd(p,t.G.a(q.d),t.z)}catch(o){s=A.Z(o)
r=A.aK(o)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
p=r
if(p==null)p=A.ch(q)
n=k.a
n.c=new A.N(q,p)
q=n}q.b=!0
return}if(j instanceof A.z&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.z){m=k.b.a
l=new A.z(m.b,m.$ti)
j.bH(new A.dx(l,m),new A.dy(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.dx.prototype={
$1(a){this.a.bT(this.b)},
$S:5}
A.dy.prototype={
$2(a,b){A.bm(a)
t.l.a(b)
this.a.av(new A.N(a,b))},
$S:15}
A.dv.prototype={
$0(){var s,r,q,p,o,n,m,l,k
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
l=p.b.b
q.c=l.aG(l,o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(k){s=A.Z(k)
r=A.aK(k)
q=s
p=r
if(p==null)p=A.ch(q)
o=this.a
o.c=new A.N(q,p)
o.b=!0}},
$S:0}
A.du.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.cC(s)&&p.a.e!=null){p.c=p.a.cz(s)
p.b=!1}}catch(o){r=A.Z(o)
q=A.aK(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ch(p)
m=l.b
m.c=new A.N(p,n)
p=m}p.b=!0}},
$S:0}
A.c7.prototype={}
A.ce.prototype={}
A.dg.prototype={
cp(a,b){return new A.dh(this,this.c9(this,b.h("0()").a(a),b),b)},
b4(a,b,c){var s,r,q,p,o,n,m,l
t.l.a(c)
s=null
if(s==null){A.iB(b,c)
return}r=s.gaU()
q=r.gcP()
p=$.v
try{$.v=q
s.cw(r,r.gaE(),a,b,c)
$.v=p}catch(m){o=A.Z(m)
n=A.aK(m)
$.v=p
l=b===o?c:n
q.b4(r,o,l)}},
bd(a,b,c){var s,r,q
c.h("0()").a(b)
r=$.v
if(r===a)return b.$0()
s=r
$.v=a
try{r=b.$0()
return r}finally{$.v=s}q=null.gaU()
return null.cQ(q,q.gaE(),a,b)},
aG(a,b,c,d,e){var s,r,q
d.h("@<0>").t(e).h("1(2)").a(b)
e.a(c)
r=$.v
if(r===a)return b.$1(c)
s=r
$.v=a
try{r=b.$1(c)
return r}finally{$.v=s}q=null.gaU()
return null.cw(q,q.gaE(),a,b,c)},
cb(a,b,c,d,e,f,g){var s,r,q
e.h("@<0>").t(f).t(g).h("1(2,3)").a(b)
f.a(c)
g.a(d)
r=$.v
if(r===a)return b.$2(c,d)
s=r
$.v=a
try{r=b.$2(c,d)
return r}finally{$.v=s}q=null.gaU()
return null.cR(q,q.gaE(),a,b,c,d)},
c9(a,b,c){c.h("0()").a(b)
return b},
bc(a,b,c,d){c.h("@<0>").t(d).h("1(2)").a(b)
return b},
bb(a,b,c,d,e){c.h("@<0>").t(d).t(e).h("1(2,3)").a(b)
return b},
bZ(a,b,c){return null},
a1(a,b){A.iC(a,t.M.a(b))
return}}
A.dh.prototype={
$0(){var s=this.a
return s.bd(s,this.b,this.c)},
$S(){return this.c.h("0()")}}
A.dP.prototype={
$0(){A.h2(this.a,this.b)},
$S:0}
A.aj.prototype={
gE(a){var s=this,r=new A.aE(s,s.r,A.aa(s).h("aE<1>"))
r.c=s.e
return r},
gk(a){return this.a},
a2(a,b){var s
if((b&1073741823)===b){s=this.c
if(s==null)return!1
return t.R.a(s[b])!=null}else return this.bV(b)},
bV(a){var s=this.d
if(s==null)return!1
return this.b2(s[this.b1(a)],a)>=0},
j(a,b){var s,r,q=this
A.aa(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.b_(s==null?q.b=A.ek():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.b_(r==null?q.c=A.ek():r,b)}else return q.bQ(b)},
bQ(a){var s,r,q,p=this
A.aa(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.ek()
r=p.b1(a)
q=s[r]
if(q==null)s[r]=[p.au(a)]
else{if(p.b2(q,a)>=0)return!1
q.push(p.au(a))}return!0},
b_(a,b){A.aa(this).c.a(b)
if(t.R.a(a[b])!=null)return!1
a[b]=this.au(b)
return!0},
au(a){var s=this,r=new A.cd(A.aa(s).c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
b1(a){return J.W(a)&1073741823},
b2(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ac(a[r].a,b))return r
return-1}}
A.cd.prototype={}
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
gE(a){return new A.av(a,a.length,A.br(a).h("av<r.E>"))},
ah(a,b){if(!(b>=0&&b<a.length))return A.j(a,b)
return a[b]},
gbD(a){return a.length!==0},
i(a){return A.e9(a,"[","]")}}
A.F.prototype={
a5(a,b){var s,r,q,p=A.aa(this)
p.h("~(F.K,F.V)").a(b)
for(s=this.gZ(),s=s.gE(s),p=p.h("F.V");s.q();){r=s.gB()
q=this.p(0,r)
b.$2(r,q==null?p.a(q):q)}},
gk(a){var s=this.gZ()
return s.gk(s)},
gY(a){var s=this.gZ()
return s.gY(s)},
i(a){return A.eW(this)},
$ibP:1}
A.cr.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:7}
A.aA.prototype={
i(a){return A.e9(this,"{","}")},
$if:1}
A.bf.prototype={}
A.cb.prototype={
p(a,b){var s,r=this.b
if(r==null)return this.c.p(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.c8(b):s}},
gk(a){return this.b==null?this.c.a:this.ab().length},
gY(a){return this.gk(0)===0},
gZ(){if(this.b==null){var s=this.c
return new A.af(s,s.$ti.h("af<1>"))}return new A.cc(this)},
a5(a,b){var s,r,q,p,o=this
t.cQ.a(b)
if(o.b==null)return o.c.a5(0,b)
s=o.ab()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.dO(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.a_(o))}},
ab(){var s=t.aL.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
c8(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.dO(this.a[a])
return this.b[a]=s}}
A.cc.prototype={
gk(a){return this.a.gk(0)},
ah(a,b){var s=this.a
if(s.b==null)s=s.gZ().ah(0,b)
else{s=s.ab()
if(!(b>=0&&b<s.length))return A.j(s,b)
s=s[b]}return s},
gE(a){var s=this.a
if(s.b==null){s=s.gZ()
s=s.gE(s)}else{s=s.ab()
s=new J.ar(s,s.length,A.J(s).h("ar<1>"))}return s}}
A.bA.prototype={}
A.bC.prototype={}
A.aW.prototype={
i(a){var s=A.bD(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.bM.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.cl.prototype={
bu(a,b){var s=A.iz(a,this.gcr().a)
return s},
bv(a,b){var s=A.hD(a,this.gcs().b,null)
return s},
gcs(){return B.N},
gcr(){return B.M}}
A.cn.prototype={}
A.cm.prototype={}
A.dB.prototype={
bK(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.N(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.N(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.N(a,r,q)
r=q+1
o=A.E(92)
s.a+=o
o=A.E(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.N(a,r,m)},
ar(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.bM(a,null))}B.a.j(s,a)},
ao(a){var s,r,q,p,o=this
if(o.bJ(a))return
o.ar(a)
try{s=o.b.$1(a)
if(!o.bJ(s)){q=A.eQ(a,null,o.gb8())
throw A.c(q)}q=o.a
if(0>=q.length)return A.j(q,-1)
q.pop()}catch(p){r=A.Z(p)
q=A.eQ(a,r,o.gb8())
throw A.c(q)}},
bJ(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.i(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.bK(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.ar(a)
q.cM(a)
s=q.a
if(0>=s.length)return A.j(s,-1)
s.pop()
return!0}else if(a instanceof A.F){q.ar(a)
r=q.cN(a)
s=q.a
if(0>=s.length)return A.j(s,-1)
s.pop()
return r}else return!1},
cM(a){var s,r=this.c
r.a+="["
if(J.fT(a)){if(0>=a.length)return A.j(a,0)
this.ao(a[0])
for(s=1;s<a.length;++s){r.a+=","
this.ao(a[s])}}r.a+="]"},
cN(a){var s,r,q,p,o,n,m=this,l={}
if(a.gY(a)){m.c.a+="{}"
return!0}s=a.gk(a)*2
r=A.aw(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.a5(0,new A.dC(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.bK(A.p(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.j(r,n)
m.ao(r[n])}p.a+="}"
return!0}}
A.dC.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.I(s,r.a++,a)
B.a.I(s,r.a++,b)},
$S:7}
A.dA.prototype={
gb8(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.dm.prototype={
i(a){return this.az()}}
A.q.prototype={
ga8(){return A.hl(this)}}
A.bv.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bD(s)
return"Assertion failed"}}
A.a0.prototype={}
A.R.prototype={
gaB(){return"Invalid argument"+(!this.a?"(s)":"")},
gaA(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.m(p),n=s.gaB()+q+o
if(!s.a)return n
return n+s.gaA()+": "+A.bD(s.gaQ())},
gaQ(){return this.b}}
A.b4.prototype={
gaQ(){return A.fh(this.b)},
gaB(){return"RangeError"},
gaA(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.bE.prototype={
gaQ(){return A.t(this.b)},
gaB(){return"RangeError"},
gaA(){if(A.t(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.b9.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.c4.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.b8.prototype={
i(a){return"Bad state: "+this.a}}
A.bB.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bD(s)+"."}}
A.b7.prototype={
i(a){return"Stack Overflow"},
ga8(){return null},
$iq:1}
A.dn.prototype={
i(a){return"Exception: "+this.a}}
A.aP.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.c.N(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.f.prototype={
gk(a){var s,r=this.gE(this)
for(s=0;r.q();)++s
return s},
ah(a,b){var s,r
A.hn(b,"index")
s=this.gE(this)
for(r=b;s.q();){if(r===0)return s.gB();--r}throw A.c(A.eL(b,b-r,this,"index"))},
i(a){return A.h8(this,"(",")")}}
A.w.prototype={
gl(a){return A.h.prototype.gl.call(this,0)},
i(a){return"null"}}
A.h.prototype={$ih:1,
M(a,b){return this===b},
gl(a){return A.c_(this)},
i(a){return"Instance of '"+A.c0(this)+"'"},
gm(a){return A.iX(this)},
toString(){return this.i(this)}}
A.cf.prototype={
i(a){return""},
$ia7:1}
A.aB.prototype={
gk(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iht:1}
A.d3.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.e0.prototype={
$1(a){return this.a.aL(this.b.h("0/?").a(a))},
$S:2}
A.e1.prototype={
$1(a){if(a==null)return this.a.bt(new A.d3(a===undefined))
return this.a.bt(a)},
$S:2}
A.dE.prototype={
bO(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.b.D(a-s,k)
r=a>>>0
a=B.b.D(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.b.D(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.b.D(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.b.D(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.b.D(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.b.D(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.O()
l.O()
l.O()
l.O()},
O(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.b.D(o-n+(q-p)+(m-r),4294967296)>>>0},
cD(){var s,r=this
r.O()
s=r.a
r.O()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992}}
A.S.prototype={
bs(a){var s,r,q=this
a.a=q.b
s=q.c
a.b=s
r=A.aX(q.d,t.L)
a.sbF(r)
a.d=q.e
a.e=q.f
a.f=q.r&&s.gL()},
gaW(){var s,r,q=this,p=q.r?" (dotted quarter)":""
p=A.e([""+q.b+" BPM"+p,q.c.ga6()],t.s)
s=q.e
if(s!==B.f){r=A.ef(" \\(\\d\\)")
p.push(A.fE(s.d,r,""))}if((s.c&1)===0&&q.f>50)p.push("swing "+q.f+"%")
return B.a.K(p," \xb7 ")},
bI(){var s,r,q,p=this,o=p.c.gJ(),n=A.e([],t.s)
for(s=p.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.U)(s),++q)n.push(s[q].b)
return A.eT(["name",p.a,"bpm",p.b,"meter",o,"levels",n,"sub",p.e.b,"swing",p.f,"dotted",p.r],t.N,t.K)}}
A.e3.prototype={
$6$dotted$sub$swing(a,b,c,d,e,f){var s=A.aZ(c)
return new A.S(a,b,s,s.T(),e,f,d)},
$3(a,b,c){return this.$6$dotted$sub$swing(a,b,c,!1,B.f,50)},
$4$sub(a,b,c,d){return this.$6$dotted$sub$swing(a,b,c,!1,d,50)},
$5$sub$swing(a,b,c,d,e){return this.$6$dotted$sub$swing(a,b,c,!1,d,e)},
$4$dotted(a,b,c,d){return this.$6$dotted$sub$swing(a,b,c,d,B.f,50)},
$S:16}
A.I.prototype={
az(){return"Level."+this.b}}
A.co.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:17}
A.cp.prototype={
$0(){return B.l},
$S:18}
A.ai.prototype={
az(){return"Voice."+this.b}}
A.C.prototype={
az(){return"Subdivision."+this.b}}
A.d9.prototype={
$1(a){return t.Y.a(a).b===this.a},
$S:19}
A.da.prototype={
$0(){return B.f},
$S:20}
A.aY.prototype={
bN(a,b,c){var s,r=this.a
if(r<1||r>32)throw A.c(A.bu(r,"beats","must be 1 to 32"))
s=this.b
if(!B.a.a2(B.n,s))throw A.c(A.bu(s,"unit","must be one of "+A.m(B.n)))
s=this.c
if(B.a.br(s,new A.cs())||B.a.cv(s,0,new A.ct(),t.S)!==r)throw A.c(A.bu(c,"groups","must add up to "+r))},
gL(){if(this.b>=8){var s=this.a
s=B.b.a7(s,3)===0&&s>3&&B.a.U(this.c,new A.cw())}else s=!1
return s},
gaV(){var s,r,q,p,o,n=A.e([],t.t)
for(s=this.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
B.a.j(n,q)
q+=o}return n},
ga6(){var s=this,r=s.c,q=B.a.U(r,new A.cx())||s.gL(),p=""+s.a,o=""+s.b
return q?p+"/"+o:p+"/"+o+" ("+B.a.K(r,"+")+")"},
gJ(){var s=this.c,r=""+this.a,q=""+this.b
return B.a.U(s,new A.cu())?r+"/"+q:r+"/"+q+":"+B.a.K(s,"+")},
T(){var s,r,q,p,o=this.gaV(),n=A.eU(o,A.J(o).c)
o=A.e([],t.a)
for(s=this.a,r=this.c,q=0;q<s;++q){if(q===0)p=B.x
else if(n.a2(0,q))p=B.l
else p=B.a.U(r,new A.cv())?B.l:B.y
o.push(p)}return o},
M(a,b){if(b==null)return!1
return b instanceof A.aY&&b.gJ()===this.gJ()},
gl(a){return B.c.gl(this.gJ())}}
A.cs.prototype={
$1(a){return A.t(a)<1},
$S:1}
A.ct.prototype={
$2(a,b){return A.t(a)+A.t(b)},
$S:21}
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
cq(a){var s,r,q=this,p=60/q.a,o=q.f&&q.b.gL()?p/3:p,n=q.d.c,m=o/n
if((n&1)!==0||q.e===50)return m
s=m*2
r=B.b.n(q.e,50,75)/100
return(a&1)===0?s*r:s*(1-r)},
cK(a,b){var s,r=this.c
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
sbF(a){this.c=t.B.a(a)}}
A.d8.prototype={
aR(a){var s,r=this,q=!1
if(r.a)if(r.c>=1){s=r.b
if(s!==0){q=r.d
q=s>0?B.b.n(B.b.v(q),20,300)>a:B.b.n(B.b.v(q),20,300)<a}}return q},
aT(a,b){var s,r,q,p=this
if(!p.aR(a))return a
s=B.b.n(B.b.v(p.d),20,300)
r=p.b
q=a+r*B.b.bM(b,p.c)
return B.b.n(B.d.v(r>0?Math.min(q,s):Math.max(q,s)),20,300)},
co(a,b){var s,r=this
if(!r.aR(a)||r.aT(a,b)===B.b.n(B.b.v(r.d),20,300))return null
s=r.c
return s-B.b.a7(b,s)},
cE(a,b){var s,r,q,p,o,n,m=this
if(!m.a)return""
if(!m.aR(a)){s=m.b
if(s===0)s="Speed trainer: set a change other than 0 BPM."
else{r=m.d
s=s>0?"not above":"not below"
s="Speed trainer: the target ("+r+" BPM) is "+s+" the current tempo, so the tempo will stay put."}return s}q=m.aT(a,b)
p=m.co(a,b)
if(p==null)return"Speed trainer: reached "+m.d+" BPM. Holding here."
s=m.b
o=s>0?"+":"\u2212"
r=m.d
n=p===1?"":"s"
return"Speed trainer: "+q+" \u2192 "+r+" BPM \xb7 next "+o+Math.abs(s)+" in "+A.m(p)+" bar"+n}}
A.ci.prototype={
bC(a){var s,r=this
if(!r.a||r.c<1||r.b<1)return!1
s=r.b
return B.b.a7(a,s+r.c)>=s}}
A.bx.prototype={
i(a){var s=this
return"Click("+B.d.cG(s.a,3)+", "+s.b.i(0)+", bar "+s.c+", cell "+s.d+"."+s.e+")"}}
A.d7.prototype={
aS(){var s,r,q=this
q.d=q.a.a
s=q.r===0&&q.w===0
r=q.f
q.e=s?r:r+1}}
A.db.prototype={
cF(a){var s=this.c
if(s.length!==0&&a-B.a.gbE(s)>2000)B.a.S(s)
B.a.j(s,a)
if(s.length>5)B.a.an(s,0)
if(s.length<2)return null
return B.b.n(B.d.v(6e4/((B.a.gbE(s)-B.a.gaP(s))/(s.length-1))),20,300)}}
A.e_.prototype={
$1(a){return this.a.$0()},
$S:22}
A.de.prototype={
R(){var s=0,r=A.ix(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$R=A.iL(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:n.b=!0
m=A.b(v.G.navigator).wakeLock
k=t.m
if(!k.b(m)||n.a!=null){s=1
break}p=4
l=A.bJ(A.b(m),"request","screen",null,k)
s=7
return A.i1(A.fC(l,k),$async$R)
case 7:k=b
n.a=k
k.toString
A.o(k,"release",new A.df(n))
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
case 6:case 1:return A.i3(q,r)
case 2:return A.i2(o.at(-1),r)}})
return A.i4($async$R,r)},
bG(){var s,r
this.b=!1
s=this.a
this.a=null
if(s!=null)try{A.bJ(s,"release",null,null,t.X)}catch(r){}}}
A.df.prototype={
$0(){return this.a.a=null},
$S:0}
A.e2.prototype={
$1(a){A.bm(a)
return null},
$S:23}
A.e5.prototype={
$0(){var s,r=A.dL(this.a.getAttribute("data-theme"))==="light",q=r?"Switch to dark theme":"Switch to light theme",p=this.b
p.setAttribute("aria-label",q)
p.setAttribute("title",q)
s=A.X(p.firstElementChild)
if(s!=null){p=r?"\u263e":"\u2600"
s.textContent=p}},
$S:0}
A.e4.prototype={
$0(){var s=this.a,r=A.dL(s.getAttribute("data-theme"))==="light"?"dark":"light"
s.setAttribute("data-theme",r)
A.Q("ds-theme",r)
this.b.$0()},
$S:0}
A.bQ.prototype={
gF(){var s,r=this,q=r.d
if(q===$){s=r.a
q=r.d=new A.d7(s,r.b,r.c,s.a)}return q},
gaw(){var s,r=this,q=r.aO
if(q===$){s=A.cg(r.gbX())
r.aO!==$&&A.eB()
r.aO=s
q=s}return q},
cL(){var s,r,q=this,p="input",o="change",n="click"
q.ca()
q.c0()
q.bS()
A.o(q.f,p,new A.cM(q))
s=q.e
A.o(s,p,new A.cN(q))
A.o(s,o,new A.cO(q))
s=t.m
A.o(A.d("bpm-down",s),n,new A.cW(q))
A.o(A.d("bpm-up",s),n,new A.cX(q))
A.o(A.d("bpm-down-5",s),n,new A.cY(q))
A.o(A.d("bpm-up-5",s),n,new A.cZ(q))
A.o(q.x,n,q.gcH())
A.o(A.d("tap",s),n,q.gci())
r=q.gc4()
A.o(q.as,o,r)
A.o(q.at,o,r)
A.o(q.ax,o,new A.d_(q))
A.o(q.cx,o,new A.d0(q))
A.o(A.d("reset-accents",s),n,new A.d1(q))
A.o(q.cy,o,new A.d2(q))
A.o(q.dx,p,new A.cP(q))
A.o(q.fr,o,new A.cQ(q))
A.o(q.fx,p,new A.cR(q))
A.o(q.fy,p,new A.cS(q))
s=v.G
if("vibrate" in A.b(s.navigator)){q.go.hidden=!1
A.o(q.id,o,new A.cT(q))}A.o(q.k1,o,new A.cU(q))
q.cn()
q.cm()
q.cl()
A.b(s.document).addEventListener("visibilitychange",A.cg(new A.cV(q)))
q.bg()},
c0(){var s,r,q,p,o,n,m="option"
for(s=this.as,r=1;r<=32;++r){q=""+r
p=A.M(m,null,q)
p.setAttribute("value",q)
s.appendChild(p)}for(s=this.at,o=0;o<4;++o){q=""+B.n[o]
p=A.M(m,null,q)
p.setAttribute("value",q)
s.appendChild(p)}for(s=this.cy,o=0;o<8;++o){n=B.A[o]
q=A.M(m,null,n.d)
q.setAttribute("value",n.b)
s.appendChild(q)}},
bS(){var s,r,q,p,o,n
for(s=["4/4","3/4","2/4","5/4","6/8","7/8","9/8","12/8"],r=s.length,q=this.ch,p=0;p<r;++p){o=s[p]
n=A.M("button","chip",o)
n.setAttribute("type","button")
n.setAttribute("aria-label","Time signature "+o)
A.o(n,"click",new A.cA(this,o))
q.appendChild(n)}},
A(a){var s=B.c.a_(B.c.a_(a)),r=A.ed(s,null)
if(r==null)r=A.hm(s)
return r==null?null:B.d.v(r)},
bf(a,b){var s=this,r=s.a
r.a=B.b.n(B.b.v(a),20,300)
s.gF().aS()
s.bj(b)
if(!s.y2)s.ag()
A.Q("ds-last",A.Y(A.e([A.a6("last",r)],t.e)))},
H(a){return this.bf(a,!1)},
bj(a){var s,r=this,q=r.a,p=r.bx=q.a,o=""+p
r.f.value=o
if(!a)r.e.value=o
r.w.textContent=A.ja(p)
if(q.f&&q.b.gL())s="dotted quarter"
else{switch(q.b.b){case 2:q="half note"
break
case 4:q="quarter note"
break
case 8:q="eighth note"
break
default:q="sixteenth note"
break}s=q}r.r.textContent="Beats per minute, counting each "+s},
P(){return this.bj(!1)},
bl(){var s=this,r=v.G,q=s.ct.cF(A.P(A.b(r.performance).now())),p=s.by
if(p!=null)r.clearTimeout(p)
if(q==null){s.u("Tap again in time with the beat.")
return}s.H(q)
s.by=A.t(r.setTimeout(A.bn(new A.cI(s)),900))},
c5(){var s,r=this,q=r.A(A.p(r.as.value))
if(q==null)q=4
s=r.A(A.p(r.at.value))
r.aH(A.ah(q,s==null?4:s,null))},
aH(a){var s=this,r=s.a,q=a.a===r.b.a&&B.a.K(a.c,"+")===B.a.K(r.b.c,"+")
if(!a.gL())r.f=!1
if(!q)r.c=a.T()
r.b=a
s.bh()
s.aq()
s.P()
A.Q("ds-last",A.Y(A.e([A.a6("last",r)],t.e)))},
bh(){var s,r,q,p,o,n,m,l=this,k=l.a,j=k.b,i=j.a,h=""+i
l.as.value=h
s=j.b
r=""+s
l.at.value=r
q=A.iZ(i,s)
l.ay.hidden=q.length<2
s=l.ax
s.replaceChildren()
for(i=q.length,p=0;p<q.length;q.length===i||(0,A.U)(q),++p){o=q[p]
n=o.c
n=A.M("option",null,B.a.U(n,new A.cH())?"Every beat":B.a.K(n," + "))
n.setAttribute("value",o.gJ())
s.appendChild(n)}s.value=j.gJ()
l.CW.hidden=!j.gL()
l.cx.checked=k.f
for(k=A.fi(l.ch),i=k.length,r=h+"/"+r,p=0;p<k.length;k.length===i||(0,A.U)(k),++p){m=k[p]
if(A.p(m.textContent)===r){h=j.gJ()
s=A.aZ(r)
h=h===(s==null?null:s.gJ())}else h=!1
m.setAttribute("aria-pressed",""+h)}},
aq(){var s,r,q,p,o,n,m,l,k=this,j=null,i="span",h=k.Q
h.replaceChildren()
s=k.ak
B.a.S(s)
r=k.a
q=r.b.gaV()
p=A.eU(q,A.J(q).c)
o=!B.a.U(r.b.c,new A.cy())
for(n=0;n<r.b.a;n=l){m=A.M("button","cell",j)
m.setAttribute("type","button")
if(o&&p.a2(0,n)&&n>0)A.b(m.classList).add("group-start")
l=n+1
m.appendChild(A.M(i,"cell-num",""+l))
q=A.M(i,"cell-mark",j)
q.setAttribute("aria-hidden","true")
m.appendChild(q)
m.appendChild(A.M(i,"cell-level",j))
A.o(m,"click",new A.cz(k,n))
h.appendChild(m)
B.a.j(s,m)
k.b7(n)}k.ac(j)},
b7(a){var s,r,q,p,o,n=this.a.c
if(!(a<n.length))return A.j(n,a)
s=n[a]
n=this.ak
if(!(a<n.length))return A.j(n,a)
r=n[a]
for(q=0;q<4;++q){p=B.o[q]
A.y(A.b(r.classList).toggle("lv-"+p.b,p===s))}n=A.fi(r)
if(2>=n.length)return A.j(n,2)
o=s.c
n[2].textContent=o
r.setAttribute("aria-label","Beat "+(a+1)+", "+o+". Press to change.")},
aI(){var s,r=this,q=r.a
r.cy.value=q.d.b
r.db.hidden=(q.d.c&1)!==0
r.dx.value=""+q.e
s=q.e
A:{if(50===s){q="Straight (50%)"
break A}if(s>=66&&s<=68){q="Triplet swing ("+s+"%)"
break A}if(75===s){q="Dotted feel (75%)"
break A}q=""+s+"%"
break A}r.dy.textContent=q},
cn(){var s,r,q=t.m,p=A.d("speed-on",q),o=A.d("speed-step",q),n=A.d("speed-every",q),m=A.d("speed-target",q),l=A.d("gap-on",q),k=A.d("gap-play",q),j=A.d("gap-mute",q),i=new A.cL(this,p,o,n,m,l,k,j)
for(q=[p,o,n,m,l,k,j],s=q.length,r=0;r<s;++r)A.o(q[r],"change",i)
i.$0()},
bi(a){var s,r,q=this,p=q.p3,o=q.b
p.hidden=!o.a
if(!o.a)return
s=a==null
r=s?0:Math.max(0,a.c-q.gF().e)
p.textContent=o.cE(s?q.a.a:q.gF().d,r)},
ag(){return this.bi(null)},
cm(){var s,r,q,p=this
p.C=A.fv(A.ex("ds-presets"))
A.d("preset-form",t.m).addEventListener("submit",A.cg(new A.cK(p)))
A.o(p.p2,"click",p.gcj())
for(s=A.j9(),r=p.p4,q=0;q<7;++q)r.appendChild(p.ba(s[q],!0))
p.af()},
cc(){var s,r,q=this,p={},o=q.R8,n=A.ec(A.p(o.value))
p.a=n
if(n.length===0){s=q.a
p.a=""+s.a+" BPM "+s.b.ga6()}r=B.a.br(q.C,new A.cF(p))
s=A.jd(q.C,A.a6(p.a,q.a))
q.C=s
A.Q("ds-presets",A.Y(s))
o.value=""
q.af()
p=p.a
q.u(r?"Updated \u201c"+p+"\u201d.":"Saved \u201c"+p+"\u201d.")},
af(){var s,r,q,p=this,o=p.k3
o.replaceChildren()
for(s=p.C,r=s.length,q=0;q<s.length;s.length===r||(0,A.U)(s),++q)o.appendChild(p.c7(s[q]))
p.k4.hidden=p.C.length!==0},
bW(a){var s,r,q=this,p=B.a.cA(q.C,new A.cB(a))
if(p<0)return
s=A.aX(q.C,t.b)
B.a.an(s,p)
q.C=s
A.Q("ds-presets",A.Y(s))
q.af()
q.aN=new A.aG(p,a)
s="Deleted \u201c"+a.a
q.p1.textContent=s+"\u201d."
q.ok.hidden=!1
q.p2.focus()
q.u(s+"\u201d. Press Undo to bring it back.")
r=q.al
if(r!=null)v.G.clearTimeout(r)
q.al=A.t(v.G.setTimeout(A.bn(q.gc2()),1e4))},
ck(){var s,r,q,p,o=this,n=o.aN
if(n==null)return
s=n.a
r=n.b
q=A.aX(o.C,t.b)
p=A.t(Math.min(s,o.C.length))
A.J(q).c.a(r)
q.$flags&1&&A.bs(q,"insert",2)
if(p<0||p>q.length)A.eA(A.ee(p,null))
q.splice(p,0,r)
o.C=q
A.Q("ds-presets",A.Y(q))
o.af()
o.b5()
o.u("Restored \u201c"+r.a+"\u201d.")},
b5(){var s,r=this
r.aN=null
s=r.al
if(s!=null)v.G.clearTimeout(s)
r.al=null
if(A.X(A.b(v.G.document).activeElement)===r.p2)r.R8.focus()
r.ok.hidden=!0},
ba(a,b){var s,r,q=A.M("li","preset",null),p=A.M("button","preset-load",null)
p.setAttribute("type","button")
s=a.a
p.appendChild(A.M("span","preset-name",s))
p.appendChild(A.M("span","preset-sum",a.gaW()))
A.o(p,"click",new A.cD(this,a))
q.appendChild(p)
if(!b){r=A.M("button","preset-del","\xd7")
r.setAttribute("type","button")
r.setAttribute("aria-label","Delete \u201c"+s+"\u201d")
A.o(r,"click",new A.cE(this,a))
q.appendChild(r)}return q},
c7(a){return this.ba(a,!1)},
ca(){var s,r,q,p,o,n,m,l,k,j=this,i=A.fv(A.ex("ds-last"))
if(i.length!==0)B.a.gaP(i).bs(j.a)
try{l=A.ex("ds-prefs")
s=B.j.bu(l==null?"{}":l,null)
if(s instanceof A.F){r=s.p(0,"sound")
q=null
if(typeof r=="string"){q=r
l=B.a.a2(B.O,q)}else l=!1
if(l)j.RG=q
p=s.p(0,"volume")
o=null
if(typeof p=="number"){o=p
j.rx=J.eD(o,0,1)}n=s.p(0,"subVolume")
m=null
if(typeof n=="number"){m=n
j.ry=J.eD(m,0,1)}j.to=J.ac(s.p(0,"haptics"),!0)
j.x1=J.ac(s.p(0,"bigFlash"),!0)}}catch(k){if(!(A.Z(k) instanceof A.aP))throw k}},
a0(){var s=this
return A.Q("ds-prefs",B.j.bv(A.eT(["sound",s.RG,"volume",s.rx,"subVolume",s.ry,"haptics",s.to,"bigFlash",s.x1],t.N,t.K),null))},
bg(){var s=this
s.bh()
s.aq()
s.aI()
s.P()
s.fr.value=s.RG
s.fx.value=""+B.d.v(s.rx*100)
s.fy.value=""+B.d.v(s.ry*100)
s.id.checked=s.to
s.k1.checked=s.x1},
cl(){A.b(v.G.document).addEventListener("keydown",A.cg(new A.cJ(this)))},
cI(){var s,r,q,p,o,n,m,l,k=this
if(k.y2){k.y2=!1
s=k.aj
if(s!=null)v.G.clearInterval(s)
r=k.a4
if(r!=null)v.G.cancelAnimationFrame(r)
q=k.xr
if(q!=null)q.disconnect()
k.xr=null
q=k.x2
if(q!=null)A.b(q.suspend())
B.a.S(k.V)
k.W.bG()
q=k.a
p=q.a
o=k.b
if(o.a)q.a=k.gF().d
k.ac(null)
q=k.x
q.textContent="Start"
q.setAttribute("aria-pressed","false")
A.y(A.b(q.classList).toggle("is-running",!1))
k.P()
k.ag()
k.u(o.a?"Stopped. You reached "+p+" BPM.":"Stopped.")}else{n=k.x2
if(n==null)n=k.x2=A.b(new v.G.AudioContext())
A.ez()
A.b(n.resume())
q=A.b(n.createGain())
A.b(q.connect(A.b(n.destination)))
k.xr=q
A.b(q.gain).value=k.rx
k.y2=!0
q=k.gF()
q.x=q.f=q.r=q.w=q.e=0
q.d=q.a.a
B.a.S(k.V)
k.a3=null
k.ai=A.P(n.currentTime)+0.08
k.aJ()
q=v.G
m=k.X
if(m===$){l=A.bn(k.gbo())
k.X!==$&&A.eB()
k.X=l
m=l}k.aj=A.t(q.setInterval(m,25))
k.a4=A.t(q.requestAnimationFrame(k.gaw()))
q=k.x
q.textContent="Stop"
q.setAttribute("aria-pressed","true")
A.y(A.b(q.classList).toggle("is-running",!0))
k.W.R()
q=k.a
k.u("Playing at "+q.a+" BPM, "+q.b.ga6()+".")}return null},
cf(){var s,r,q,p=this,o=p.x2
if(o==null)o=p.x2=A.b(new v.G.AudioContext())
A.ez()
A.b(o.resume())
s=A.b(o.createGain())
A.b(s.connect(A.b(o.destination)))
p.xr=s
A.b(s.gain).value=p.rx
p.y2=!0
s=p.gF()
s.x=s.f=s.r=s.w=s.e=0
s.d=s.a.a
B.a.S(p.V)
p.a3=null
p.ai=A.P(o.currentTime)+0.08
p.aJ()
s=v.G
r=p.X
if(r===$){q=A.bn(p.gbo())
p.X!==$&&A.eB()
p.X=q
r=q}p.aj=A.t(s.setInterval(r,25))
p.a4=A.t(s.requestAnimationFrame(p.gaw()))
s=p.x
s.textContent="Stop"
s.setAttribute("aria-pressed","true")
A.y(A.b(s.classList).toggle("is-running",!0))
p.W.R()
s=p.a
p.u("Playing at "+s.a+" BPM, "+s.b.ga6()+".")},
cg(){var s,r,q,p,o,n=this
n.y2=!1
s=n.aj
if(s!=null)v.G.clearInterval(s)
r=n.a4
if(r!=null)v.G.cancelAnimationFrame(r)
q=n.xr
if(q!=null)q.disconnect()
n.xr=null
q=n.x2
if(q!=null)A.b(q.suspend())
B.a.S(n.V)
n.W.bG()
q=n.a
p=q.a
o=n.b
if(o.a)q.a=n.gF().d
n.ac(null)
q=n.x
q.textContent="Start"
q.setAttribute("aria-pressed","false")
A.y(A.b(q.classList).toggle("is-running",!1))
n.P()
n.ag()
n.u(o.a?"Stopped. You reached "+p+" BPM.":"Stopped.")},
aJ(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.x2,f=h.xr
if(!h.y2||g==null||f==null)return
s=A.y(A.b(v.G.document).hidden)?1.5:0.12
for(r=h.V;;){q=h.a3
if(q==null){p=h.gF()
o=p.r
n=p.a
if(o>=n.b.a){o=p.w=p.r=0;++p.f}m=p.w
if(m>=n.d.c)m=p.w=0
if(o===0&&m===0&&p.b.a)n.a=p.b.aT(p.d,p.f-p.e)
l=p.c.bC(p.f)?B.h:n.cK(p.r,p.w)
o=p.x
m=p.f
k=p.r
j=p.w
q=new A.bx(o,l,m,k,j,n.a)
p.x=o+n.cq(j)
if(++p.w>=n.d.c){p.w=0
if(++p.r>=n.b.a){p.r=0;++p.f}}}p=h.ai
o=q.a
i=p+o
if(i<A.P(g.currentTime)){p+=A.P(g.currentTime)+0.05-i
h.ai=p
i=p+o}if(i>=A.P(g.currentTime)+s){h.a3=q
break}h.a3=null
h.aF(g,f,q.b,i)
B.a.j(r,new A.aG(i,q))}while(r.length>128)B.a.an(r,0)},
aF(a,b,c,d){var s,r,q,p,o,n,m=this
switch(c.a){case 0:s=1
break
case 1:s=0.6
break
case 2:s=0.24
break
case 3:s=0.36*m.ry
break
case 4:s=0
break
default:s=null}if(s<0.005)return
r=c===B.i
q=c===B.u
switch(m.RG){case"beep":if(r)p=1760
else p=q?880:1320
m.bq(a,b,"sine",p,s,d,0.05)
break
case"stick":if(r)p=3200
else p=q?1800:2500
m.b6(a,b,p,s*1.4,d)
break
default:if(r)o=1250
else o=q?760:950
n=A.b(a.createBiquadFilter())
n.type="bandpass"
A.b(n.connect(b))
A.b(n.frequency).value=o
A.b(n.Q).value=6
m.bq(a,n,"triangle",o,s*2.2,d,0.04)
m.b6(a,b,o*2,s*0.25,d)}},
bq(a,b,c,d,e,f,g){var s,r,q,p=A.b(a.createOscillator())
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
b6(a,b,c,d,e){var s,r,q,p,o=this.y1
if(o==null)o=this.y1=this.c3(a)
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
c3(a){var s,r,q=B.d.v(A.P(a.sampleRate)*0.05),p=A.b(a.createBuffer(1,q,A.P(a.sampleRate))),o=t.E.a(p.getChannelData(0)),n=new A.dE()
n.bO(7)
for(s=0;s<q;++s){r=n.cD()
o.$flags&2&&A.bs(o)
if(!(s<o.length))return A.j(o,s)
o[s]=r*2-1}return p},
bY(a){var s,r,q,p,o=this
A.P(a)
s=o.x2
if(!o.y2||s==null)return
r=o.V
q=null
for(;;){if(!(r.length!==0&&B.a.gaP(r).a<=A.P(s.currentTime)))break
p=B.a.an(r,0).b
if(p.e===0)q=p}if(q!=null)o.ac(q)
o.a4=A.t(v.G.requestAnimationFrame(o.gaw()))},
ac(a){var s,r,q,p,o,n=this,m=a==null,l=m?null:a.d
if(l==null)l=-1
if(m){for(m=n.ak,s=m.length,r=0;r<m.length;m.length===s||(0,A.U)(m),++r)A.y(A.b(m[r].classList).toggle("is-on",!1))
n.y.className="flash"
n.z.textContent="Not playing"
return}for(m=n.ak,q=0;q<m.length;++q)A.y(A.b(m[q].classList).toggle("is-on",q===l))
m=a.c
s=""+(m+1)
m=n.c.bC(m)?"Bar "+s+" \xb7 silent: keep the time going":"Bar "+s+" \xb7 Beat "+(l+1)+" of "+n.a.b.a
n.z.textContent=m
p=a.b
A:{if(B.i===p){m="is-accent"
break A}if(B.t===p||B.u===p){m="is-normal"
break A}if(B.C===p){m="is-ghost"
break A}if(B.h===p){m="is-silent"
break A}m=null}s=n.x1&&p!==B.h?" is-big":""
n.y.className="flash "+m+s
o=n.bw
if(o!=null)v.G.clearTimeout(o)
m=v.G
n.bw=A.t(m.setTimeout(A.bn(new A.cC(n)),90))
if(n.to&&p!==B.h)A.je(p===B.i?45:20)
if(n.b.a&&a.d===0)n.bi(a)
if(a.f!==n.bx&&A.X(A.b(m.document).activeElement)!==n.e)n.P()},
u(a){this.k2.textContent=a
return a},
be(a){var s=this.bz
if(s!=null)v.G.clearTimeout(s)
this.bz=A.t(v.G.setTimeout(A.bn(new A.cG(this,a)),600))}}
A.cM.prototype={
$0(){var s=this.a,r=s.A(A.p(s.f.value))
return s.H(r==null?s.a.a:r)},
$S:0}
A.cN.prototype={
$0(){var s=this.a,r=s.A(A.p(s.e.value))
if(r!=null&&r>=20&&r<=300)s.bf(r,!0)},
$S:0}
A.cO.prototype={
$0(){var s=this.a,r=s.A(A.p(s.e.value))
return s.H(r==null?s.a.a:r)},
$S:0}
A.cW.prototype={
$0(){var s=this.a
return s.H(s.a.a+-1)},
$S:0}
A.cX.prototype={
$0(){var s=this.a
return s.H(s.a.a+1)},
$S:0}
A.cY.prototype={
$0(){var s=this.a
return s.H(s.a.a+-5)},
$S:0}
A.cZ.prototype={
$0(){var s=this.a
return s.H(s.a.a+5)},
$S:0}
A.d_.prototype={
$0(){var s=this.a,r=A.aZ(A.p(s.ax.value))
if(r!=null)s.aH(r)},
$S:0}
A.d0.prototype={
$0(){var s=this.a,r=s.a
r.f=A.y(s.cx.checked)
s.P()
A.Q("ds-last",A.Y(A.e([A.a6("last",r)],t.e)))},
$S:0}
A.d1.prototype={
$0(){var s=this.a,r=s.a
r.sbF(r.b.T())
s.aq()
A.Q("ds-last",A.Y(A.e([A.a6("last",r)],t.e)))
s.u("Accents reset.")},
$S:0}
A.d2.prototype={
$0(){var s=this.a,r=s.a
r.d=A.f2(A.p(s.cy.value))
s.aI()
A.Q("ds-last",A.Y(A.e([A.a6("last",r)],t.e)))},
$S:0}
A.cP.prototype={
$0(){var s=this.a,r=s.a,q=s.A(A.p(s.dx.value))
r.e=q==null?50:q
s.aI()
A.Q("ds-last",A.Y(A.e([A.a6("last",r)],t.e)))},
$S:0}
A.cQ.prototype={
$0(){var s,r,q,p=this.a
p.RG=A.p(p.fr.value)
p.a0()
if(!p.y2){s=p.x2
if(s==null)s=p.x2=A.b(new v.G.AudioContext())
A.ez()
A.b(s.resume())
r=A.b(s.createGain())
A.b(r.connect(A.b(s.destination)))
A.b(r.gain).value=p.rx
q=A.P(s.currentTime)+0.05
p.aF(s,r,B.i,q)
p.aF(s,r,B.t,q+0.25)}},
$S:0}
A.cR.prototype={
$0(){var s,r=this.a,q=r.A(A.p(r.fx.value))
q=(q==null?80:q)/100
r.rx=q
s=r.xr
if(s!=null)A.b(s.gain).value=q
r.a0()},
$S:0}
A.cS.prototype={
$0(){var s=this.a,r=s.A(A.p(s.fy.value))
s.ry=(r==null?60:r)/100
s.a0()},
$S:0}
A.cT.prototype={
$0(){var s=this.a
s.to=A.y(s.id.checked)
s.a0()},
$S:0}
A.cU.prototype={
$0(){var s=this.a
s.x1=A.y(s.k1.checked)
s.a0()},
$S:0}
A.cV.prototype={
$1(a){var s
if(!A.y(A.b(v.G.document).hidden)){s=this.a
s=s.y2&&s.W.b}else s=!1
if(s)this.a.W.R()},
$S:25}
A.cA.prototype={
$0(){var s=this.a,r=this.b,q=A.aZ(r)
q.toString
s.aH(q)
s.u("Time signature "+A.aZ(r).ga6()+".")},
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
B.a.I(q,p,B.o[(q[p].a+1)%4])
s.b7(p)
A.Q("ds-last",A.Y(A.e([A.a6("last",r)],t.e)))
r=r.c
if(!(p<r.length))return A.j(r,p)
s.u("Beat "+(p+1)+": "+r[p].c+".")},
$S:0}
A.cL.prototype={
$0(){var s,r=this,q=r.a,p=q.b
p.a=A.y(r.b.checked)
s=q.A(A.p(r.c.value))
p.b=B.b.n(s==null?4:s,-50,50)
s=q.A(A.p(r.d.value))
p.c=B.b.n(s==null?4:s,1,64)
s=q.A(A.p(r.e.value))
p.d=B.b.n(B.b.v(s==null?140:s),20,300)
p=q.c
p.a=A.y(r.f.checked)
s=q.A(A.p(r.r.value))
p.b=B.b.n(s==null?2:s,1,64)
s=q.A(A.p(r.w.value))
p.c=B.b.n(s==null?2:s,1,64)
q.gF().aS()
q.ag()},
$S:0}
A.cK.prototype={
$1(a){A.b(a).preventDefault()
this.a.cc()},
$S:8}
A.cF.prototype={
$1(a){return t.b.a(a).a.toLowerCase()===this.a.a.toLowerCase()},
$S:9}
A.cB.prototype={
$1(a){return t.b.a(a).a===this.a.a},
$S:9}
A.cD.prototype={
$0(){var s=this.b,r=this.a,q=r.a
s.bs(q)
r.gF().aS()
r.bg()
A.Q("ds-last",A.Y(A.e([A.a6("last",q)],t.e)))
r.u("Loaded \u201c"+s.a+"\u201d: "+s.gaW()+".")},
$S:0}
A.cE.prototype={
$0(){return this.a.bW(this.b)},
$S:0}
A.cJ.prototype={
$1(a){var s,r,q,p,o,n,m=this
A.b(a)
if(A.y(a.ctrlKey)||A.y(a.metaKey)||A.y(a.altKey))return
s=A.X(a.target)
r=s==null?null:A.p(s.tagName)
if(r==null)r=""
s=!(r==="INPUT"||r==="SELECT"||r==="TEXTAREA")
q=!s||r==="BUTTON"||r==="A"||r==="SUMMARY"
A:{p=A.p(a.key)
if(" "===p&&!q){a.preventDefault()
s=m.a
if(s.y2)s.cg()
else s.cf()
break A}if("ArrowUp"===p&&s){a.preventDefault()
s=m.a
o=A.y(a.shiftKey)?10:1
n=s.a
s.H(n.a+o)
s.be(""+n.a+" BPM")
break A}if("ArrowDown"===p&&s){a.preventDefault()
s=m.a
o=A.y(a.shiftKey)?-10:-1
n=s.a
s.H(n.a+o)
s.be(""+n.a+" BPM")
break A}if(("t"===p||"T"===p)&&s&&!A.y(a.repeat))m.a.bl()}},
$S:8}
A.cC.prototype={
$0(){return A.b(this.a.y.classList).add("is-fading")},
$S:0}
A.cG.prototype={
$0(){return this.a.u(this.b)},
$S:0}
A.dU.prototype={
$2(a,b){var s,r,q,p,o,n
t.V.a(b)
s=this.a
if(s.a>=12)return
if(a===0){s.j(0,B.a.K(b,"+"))
return}for(s=[2,3],r=s.length,q=t.S,p=0;p<r;++p){o=s[p]
if(o<=a&&a-o!==1){n=A.aX(b,q)
n.push(o)
this.$2(a-o,n)}}},
$S:26};(function aliases(){var s=J.a5.prototype
s.bL=s.i})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
s(A,"iN","hz",3)
s(A,"iO","hA",3)
s(A,"iP","hB",3)
r(A,"ft","iG",0)
s(A,"iR","i8",4)
var o
q(o=A.bQ.prototype,"gci","bl",0)
q(o,"gc4","c5",0)
q(o,"gcj","ck",0)
q(o,"gc2","b5",0)
q(o,"gcH","cI",0)
q(o,"gbo","aJ",0)
p(o,"gbX","bY",24)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.h,null)
q(A.h,[A.ea,J.bF,A.b6,J.ar,A.q,A.d6,A.f,A.av,A.G,A.al,A.dc,A.d4,A.aO,A.bg,A.a3,A.F,A.cq,A.bO,A.bK,A.dD,A.T,A.ca,A.dI,A.dG,A.c6,A.N,A.c8,A.a2,A.z,A.c7,A.ce,A.dg,A.aA,A.cd,A.aE,A.r,A.bA,A.bC,A.dB,A.dm,A.b7,A.dn,A.aP,A.w,A.cf,A.aB,A.d3,A.dE,A.S,A.aY,A.cj,A.d8,A.ci,A.bx,A.d7,A.db,A.de,A.bQ])
q(J.bF,[J.bH,J.aR,J.aT,J.aS,J.aU,J.at,J.au])
q(J.aT,[J.a5,J.n,A.ax,A.b1])
q(J.a5,[J.bZ,J.aC,J.a4])
r(J.bG,A.b6)
r(J.ck,J.n)
q(J.at,[J.aQ,J.bI])
q(A.q,[A.bN,A.a0,A.bL,A.c5,A.c1,A.c9,A.aW,A.bv,A.R,A.b9,A.c4,A.b8,A.bB])
r(A.aN,A.f)
q(A.aN,[A.ag,A.af])
r(A.aF,A.al)
r(A.aG,A.aF)
r(A.b3,A.a0)
q(A.a3,[A.by,A.bz,A.c3,A.dV,A.dX,A.dj,A.di,A.dM,A.dx,A.e0,A.e1,A.e3,A.co,A.d9,A.cs,A.cw,A.cx,A.cu,A.cv,A.e_,A.e2,A.cV,A.cH,A.cy,A.cK,A.cF,A.cB,A.cJ])
q(A.c3,[A.c2,A.as])
q(A.F,[A.aV,A.cb])
q(A.bz,[A.dW,A.dN,A.dQ,A.dy,A.cr,A.dC,A.ct,A.dU])
q(A.b1,[A.bR,A.az])
q(A.az,[A.bb,A.bd])
r(A.bc,A.bb)
r(A.b_,A.bc)
r(A.be,A.bd)
r(A.b0,A.be)
q(A.b_,[A.ay,A.bS])
q(A.b0,[A.bT,A.bU,A.bV,A.bW,A.bX,A.b2,A.bY])
r(A.bh,A.c9)
q(A.by,[A.dk,A.dl,A.dH,A.dp,A.dt,A.ds,A.dr,A.dq,A.dw,A.dv,A.du,A.dh,A.dP,A.cp,A.da,A.df,A.e5,A.e4,A.cM,A.cN,A.cO,A.cW,A.cX,A.cY,A.cZ,A.d_,A.d0,A.d1,A.d2,A.cP,A.cQ,A.cR,A.cS,A.cT,A.cU,A.cA,A.cI,A.cz,A.cL,A.cD,A.cE,A.cC,A.cG])
r(A.ba,A.c8)
r(A.bf,A.aA)
r(A.aj,A.bf)
r(A.cc,A.ag)
r(A.bM,A.aW)
r(A.cl,A.bA)
q(A.bC,[A.cn,A.cm])
r(A.dA,A.dB)
q(A.R,[A.b4,A.bE])
q(A.dm,[A.I,A.ai,A.C])
s(A.bb,A.r)
s(A.bc,A.G)
s(A.bd,A.r)
s(A.be,A.G)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",l:"double",aq:"num",x:"String",D:"bool",w:"Null",i:"List",h:"Object",bP:"Map",u:"JSObject"},mangledNames:{},types:["~()","D(a)","~(@)","~(~())","@(@)","w(@)","w()","~(h?,h?)","w(u)","D(S)","@(@,x)","@(x)","w(~())","w(@,a7)","~(a,@)","w(h,a7)","S(x,a,x{dotted:D,sub:C,swing:a})","D(I)","I()","D(C)","C()","a(a,a)","~(h?)","w(h)","~(l)","w(h?)","~(a,i<a>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aG&&a.b(c.a)&&b.b(c.b)}}
A.hU(v.typeUniverse,JSON.parse('{"bZ":"a5","aC":"a5","a4":"a5","jk":"ax","bH":{"D":[],"k":[]},"aR":{"k":[]},"aT":{"u":[]},"a5":{"u":[]},"n":{"i":["1"],"u":[],"f":["1"]},"bG":{"b6":[]},"ck":{"n":["1"],"i":["1"],"u":[],"f":["1"]},"at":{"l":[],"aq":[]},"aQ":{"l":[],"a":[],"aq":[],"k":[]},"bI":{"l":[],"aq":[],"k":[]},"au":{"x":[],"d5":[],"k":[]},"bN":{"q":[]},"aN":{"f":["1"]},"ag":{"f":["1"]},"aG":{"aF":[],"al":[]},"b3":{"a0":[],"q":[]},"bL":{"q":[]},"c5":{"q":[]},"bg":{"a7":[]},"a3":{"ad":[]},"by":{"ad":[]},"bz":{"ad":[]},"c3":{"ad":[]},"c2":{"ad":[]},"as":{"ad":[]},"c1":{"q":[]},"aV":{"F":["1","2"],"eS":["1","2"],"bP":["1","2"],"F.K":"1","F.V":"2"},"af":{"f":["1"]},"aF":{"al":[]},"bK":{"hp":[],"d5":[]},"ay":{"r":["l"],"i":["l"],"H":["l"],"u":[],"f":["l"],"G":["l"],"k":[],"r.E":"l"},"ax":{"u":[],"k":[]},"b1":{"u":[]},"bR":{"u":[],"k":[]},"az":{"H":["1"],"u":[]},"b_":{"r":["l"],"i":["l"],"H":["l"],"u":[],"f":["l"],"G":["l"]},"b0":{"r":["a"],"i":["a"],"H":["a"],"u":[],"f":["a"],"G":["a"]},"bS":{"r":["l"],"i":["l"],"H":["l"],"u":[],"f":["l"],"G":["l"],"k":[],"r.E":"l"},"bT":{"r":["a"],"i":["a"],"H":["a"],"u":[],"f":["a"],"G":["a"],"k":[],"r.E":"a"},"bU":{"r":["a"],"i":["a"],"H":["a"],"u":[],"f":["a"],"G":["a"],"k":[],"r.E":"a"},"bV":{"r":["a"],"i":["a"],"H":["a"],"u":[],"f":["a"],"G":["a"],"k":[],"r.E":"a"},"bW":{"r":["a"],"i":["a"],"H":["a"],"u":[],"f":["a"],"G":["a"],"k":[],"r.E":"a"},"bX":{"r":["a"],"i":["a"],"H":["a"],"u":[],"f":["a"],"G":["a"],"k":[],"r.E":"a"},"b2":{"r":["a"],"i":["a"],"H":["a"],"u":[],"f":["a"],"G":["a"],"k":[],"r.E":"a"},"bY":{"r":["a"],"i":["a"],"H":["a"],"u":[],"f":["a"],"G":["a"],"k":[],"r.E":"a"},"c9":{"q":[]},"bh":{"a0":[],"q":[]},"N":{"q":[]},"ba":{"c8":["1"]},"z":{"ae":["1"]},"aj":{"aA":["1"],"f":["1"]},"F":{"bP":["1","2"]},"aA":{"f":["1"]},"bf":{"aA":["1"],"f":["1"]},"cb":{"F":["x","@"],"bP":["x","@"],"F.K":"x","F.V":"@"},"cc":{"ag":["x"],"f":["x"],"ag.E":"x"},"aW":{"q":[]},"bM":{"q":[]},"l":{"aq":[]},"a":{"aq":[]},"i":{"f":["1"]},"x":{"d5":[]},"bv":{"q":[]},"a0":{"q":[]},"R":{"q":[]},"b4":{"q":[]},"bE":{"q":[]},"b9":{"q":[]},"c4":{"q":[]},"b8":{"q":[]},"bB":{"q":[]},"b7":{"q":[]},"cf":{"a7":[]},"aB":{"ht":[]},"h7":{"i":["a"],"f":["a"]},"hx":{"i":["a"],"f":["a"]},"hw":{"i":["a"],"f":["a"]},"h5":{"i":["a"],"f":["a"]},"hu":{"i":["a"],"f":["a"]},"h6":{"i":["a"],"f":["a"]},"hv":{"i":["a"],"f":["a"]},"h3":{"i":["l"],"f":["l"]},"h4":{"i":["l"],"f":["l"]}}'))
A.hT(v.typeUniverse,JSON.parse('{"aN":1,"az":1,"bf":1,"bA":2,"bC":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dS
return{n:s("N"),C:s("q"),Z:s("ad"),U:s("f<@>"),O:s("n<u>"),a:s("n<I>"),J:s("n<bP<x,h>>"),c:s("n<aY>"),f:s("n<h>"),e:s("n<S>"),d:s("n<+(l,bx)>"),s:s("n<x>"),w:s("n<l>"),q:s("n<@>"),t:s("n<a>"),T:s("aR"),m:s("u"),g:s("a4"),p:s("H<@>"),L:s("I"),B:s("i<I>"),j:s("i<@>"),V:s("i<a>"),E:s("ay"),P:s("w"),K:s("h"),b:s("S"),W:s("jl"),h:s("+()"),l:s("a7"),N:s("x"),Y:s("C"),k:s("k"),r:s("a0"),D:s("aC"),_:s("z<@>"),y:s("D"),x:s("D(h)"),i:s("l"),z:s("@"),G:s("@()"),v:s("@(h)"),Q:s("@(h,a7)"),S:s("a"),bc:s("ae<w>?"),aQ:s("u?"),aL:s("i<@>?"),X:s("h?"),aD:s("x?"),F:s("a2<@,@>?"),R:s("cd?"),u:s("D?"),I:s("l?"),a3:s("a?"),ae:s("aq?"),o:s("aq"),H:s("~"),M:s("~()"),cQ:s("~(x,@)"),A:s("~(a,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.J=J.bF.prototype
B.a=J.n.prototype
B.b=J.aQ.prototype
B.d=J.at.prototype
B.c=J.au.prototype
B.K=J.a4.prototype
B.L=J.aT.prototype
B.B=J.bZ.prototype
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
B.m=new A.d6()
B.e=new A.dg()
B.k=new A.cf()
B.M=new A.cm(null)
B.N=new A.cn(null)
B.x=new A.I("Accent",0,"accent")
B.y=new A.I("Ghost",2,"ghost")
B.z=new A.I("Mute",3,"mute")
B.l=new A.I("Normal",1,"normal")
B.n=s([2,4,8,16],t.t)
B.f=new A.C(1,"None (beats only)",0,"none")
B.q=new A.C(2,"Eighth notes (2)",1,"eighths")
B.T=new A.C(3,"Triplets (3)",2,"triplets")
B.p=new A.C(4,"Sixteenth notes (4)",3,"sixteenths")
B.S=new A.C(5,"Quintuplets (5)",4,"quintuplets")
B.R=new A.C(6,"Sextuplets (6)",5,"sextuplets")
B.Q=new A.C(7,"Septuplets (7)",6,"septuplets")
B.P=new A.C(8,"32nd notes (8)",7,"thirtySeconds")
B.A=s([B.f,B.q,B.T,B.p,B.S,B.R,B.Q,B.P],A.dS("n<C>"))
B.O=s(["wood","beep","stick"],t.s)
B.o=s([B.x,B.l,B.y,B.z],t.a)
B.U=A.V("jg")
B.V=A.V("jh")
B.W=A.V("h3")
B.X=A.V("h4")
B.Y=A.V("h5")
B.Z=A.V("h6")
B.a_=A.V("h7")
B.a0=A.V("h")
B.a1=A.V("hu")
B.a2=A.V("hv")
B.a3=A.V("hw")
B.a4=A.V("hx")
B.i=new A.ai(0,"accent")
B.t=new A.ai(1,"normal")
B.C=new A.ai(2,"ghost")
B.u=new A.ai(3,"sub")
B.h=new A.ai(4,"silent")})();(function staticFields(){$.dz=null
$.L=A.e([],t.f)
$.eX=null
$.eI=null
$.eH=null
$.fz=null
$.fs=null
$.fD=null
$.dR=null
$.dY=null
$.eu=null
$.dF=A.e([],A.dS("n<i<h>?>"))
$.aH=null
$.bo=null
$.bp=null
$.ep=!1
$.v=B.e})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"jj","fH",()=>A.dT("_$dart_dartClosure"))
s($,"ji","e6",()=>A.dT("_$dart_dartClosure_dartJSInterop"))
s($,"jz","fS",()=>A.e([new J.bG()],A.dS("n<b6>")))
s($,"jn","fI",()=>A.a1(A.dd({
toString:function(){return"$receiver$"}})))
s($,"jo","fJ",()=>A.a1(A.dd({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"jp","fK",()=>A.a1(A.dd(null)))
s($,"jq","fL",()=>A.a1(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jt","fO",()=>A.a1(A.dd(void 0)))
s($,"ju","fP",()=>A.a1(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"js","fN",()=>A.a1(A.f3(null)))
s($,"jr","fM",()=>A.a1(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"jw","fR",()=>A.a1(A.f3(void 0)))
s($,"jv","fQ",()=>A.a1(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"jx","eC",()=>A.hy())
s($,"jy","e7",()=>A.fA(B.a0))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ax,SharedArrayBuffer:A.ax,ArrayBufferView:A.b1,DataView:A.bR,Float32Array:A.ay,Float64Array:A.bS,Int16Array:A.bT,Int32Array:A.bU,Int8Array:A.bV,Uint16Array:A.bW,Uint32Array:A.bX,Uint8ClampedArray:A.b2,CanvasPixelArray:A.b2,Uint8Array:A.bY})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.az.$nativeSuperclassTag="ArrayBufferView"
A.bb.$nativeSuperclassTag="ArrayBufferView"
A.bc.$nativeSuperclassTag="ArrayBufferView"
A.b_.$nativeSuperclassTag="ArrayBufferView"
A.bd.$nativeSuperclassTag="ArrayBufferView"
A.be.$nativeSuperclassTag="ArrayBufferView"
A.b0.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.j5
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()