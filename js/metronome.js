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
if(a[b]!==s){A.j7(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.eq(b)
return new s(c,this)}:function(){if(s===null)s=A.eq(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.eq(a).prototype
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
ew(a,b,c,d){return{i:a,p:b,e:c,x:d}},
er(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.es==null){A.iX()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.f2("Return interceptor for "+A.m(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.dy
if(o==null)o=$.dy=A.dS(n)
p=q[o]}if(p!=null)return p
p=A.j0(a)
if(p!=null)return p
if(typeof a=="function")return B.K
s=Object.getPrototypeOf(a)
if(s==null)return B.B
if(s===Object.prototype)return B.B
if(typeof q=="function"){o=$.dy
if(o==null)o=$.dy=A.dS(n)
Object.defineProperty(q,o,{value:B.r,enumerable:false,writable:true,configurable:true})
return B.r}return B.r},
eL(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
h8(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.eL(r))break;++b}return b},
h9(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.j(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.eL(q))break}return b},
ao(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aN.prototype
return J.bE.prototype}if(typeof a=="string")return J.au.prototype
if(a==null)return J.aO.prototype
if(typeof a=="boolean")return J.bD.prototype
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
if(typeof a=="symbol")return J.aR.prototype
if(typeof a=="bigint")return J.aP.prototype
return a}if(a instanceof A.h)return a
return J.er(a)},
fv(a){if(typeof a=="string")return J.au.prototype
if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
if(typeof a=="symbol")return J.aR.prototype
if(typeof a=="bigint")return J.aP.prototype
return a}if(a instanceof A.h)return a
return J.er(a)},
fw(a){if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
if(typeof a=="symbol")return J.aR.prototype
if(typeof a=="bigint")return J.aP.prototype
return a}if(a instanceof A.h)return a
return J.er(a)},
iS(a){if(typeof a=="number")return J.at.prototype
if(a==null)return a
if(!(a instanceof A.h))return J.aB.prototype
return a},
ac(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ao(a).M(a,b)},
eB(a,b,c){return J.iS(a).q(a,b,c)},
W(a){return J.ao(a).gl(a)},
fR(a){return J.fw(a).gbs(a)},
fS(a){return J.fw(a).gC(a)},
eC(a){return J.fv(a).gj(a)},
fT(a){return J.ao(a).gm(a)},
bo(a){return J.ao(a).i(a)},
bB:function bB(){},
bD:function bD(){},
aO:function aO(){},
aQ:function aQ(){},
a5:function a5(){},
bV:function bV(){},
aB:function aB(){},
a4:function a4(){},
aP:function aP(){},
aR:function aR(){},
q:function q(a){this.$ti=a},
bC:function bC(){},
cj:function cj(a){this.$ti=a},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
at:function at(){},
aN:function aN(){},
bE:function bE(){},
au:function au(){}},A={e9:function e9(){},
eO(a){return new A.bJ("Field '"+a+"' has been assigned during initialization.")},
a8(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ef(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ep(a,b,c){return a},
eu(a){var s,r
for(s=$.K.length,r=0;r<s;++r)if(a===$.K[r])return!0
return!1},
eJ(){return new A.b4("No element")},
bJ:function bJ(a){this.a=a},
d5:function d5(){},
aK:function aK(){},
ag:function ag(){},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
G:function G(){},
fE(a){var s=A.fD(a)
if(s!=null)return s
return"minified:"+a},
jx(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bo(a)
return s},
bW(a){var s,r=$.eU
if(r==null)r=$.eU=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ec(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.j(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
hi(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.c.a_(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
bX(a){var s,r,q,p
if(a instanceof A.h)return A.J(A.bn(a),null)
s=J.ao(a)
if(s===B.J||s===B.L||t.D.b(a)){r=B.v(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.J(A.bn(a),null)},
eV(a){var s,r,q
if(a==null||typeof a=="number"||A.em(a))return J.bo(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a3)return a.i(0)
if(a instanceof A.al)return a.bf(!0)
s=$.fQ()
for(r=0;r<1;++r){q=s[r].cq(a)
if(q!=null)return q}return"Instance of '"+A.bX(a)+"'"},
D(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.ba(s,10)|55296)>>>0,s&1023|56320)}throw A.c(A.bY(a,0,1114111,null,null))},
hh(a){var s=a.$thrownJsError
if(s==null)return null
return A.aI(s)},
eW(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.B(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
j(a,b){if(a==null)J.eC(a)
throw A.c(A.fu(a,b))},
fu(a,b){var s,r="index"
if(!A.fk(b))return new A.Q(!0,b,r,null)
s=J.eC(a)
if(b<0||b>=s)return A.eI(b,s,a,r)
return A.eX(b,r)},
iI(a){return new A.Q(!0,a,null,null)},
c(a){return A.B(a,new Error())},
B(a,b){var s
if(a==null)a=new A.Z()
b.dartException=a
s=A.j8
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
j8(){return J.bo(this.dartException)},
ey(a,b){throw A.B(a,b==null?new Error():b)},
cf(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.ey(A.i5(a,b,c),s)},
i5(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.b5("'"+s+"': Cannot "+o+" "+l+k+n)},
P(a){throw A.c(A.Y(a))},
a_(a){var s,r,q,p,o,n
a=A.j3(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.db(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
dc(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
f1(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ea(a,b){var s=b==null,r=s?null:b.method
return new A.bH(a,r,s?null:b.receiver)},
X(a){var s
if(a==null)return new A.d3(a)
if(a instanceof A.aL){s=a.a
return A.ab(a,s==null?A.bj(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.ab(a,a.dartException)
return A.iG(a)},
ab(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
iG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.ba(r,16)&8191)===10)switch(q){case 438:return A.ab(a,A.ea(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.ab(a,new A.b_())}}if(a instanceof TypeError){p=$.fG()
o=$.fH()
n=$.fI()
m=$.fJ()
l=$.fM()
k=$.fN()
j=$.fL()
$.fK()
i=$.fP()
h=$.fO()
g=p.D(s)
if(g!=null)return A.ab(a,A.ea(A.n(s),g))
else{g=o.D(s)
if(g!=null){g.method="call"
return A.ab(a,A.ea(A.n(s),g))}else if(n.D(s)!=null||m.D(s)!=null||l.D(s)!=null||k.D(s)!=null||j.D(s)!=null||m.D(s)!=null||i.D(s)!=null||h.D(s)!=null){A.n(s)
return A.ab(a,new A.b_())}}return A.ab(a,new A.c2(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.b3()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ab(a,new A.Q(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.b3()
return a},
aI(a){var s
if(a instanceof A.aL)return a.b
if(a==null)return new A.bd(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bd(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fy(a){if(a==null)return J.W(a)
if(typeof a=="object")return A.bW(a)
return J.W(a)},
iR(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.G(0,a[s],a[r])}return b},
ig(a,b,c,d,e,f){t.Z.a(a)
switch(A.v(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.dm("Unsupported number of arguments for wrapped closure"))},
bm(a,b){var s=a.$identity
if(!!s)return s
s=A.iM(a,b)
a.$identity=s
return s},
iM(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ig)},
h_(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.c_().constructor.prototype):Object.create(new A.as(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.eH(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.fW(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.eH(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
fW(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.fU)}throw A.c("Error in functionType of tearoff")},
fX(a,b,c,d){var s=A.eG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
eH(a,b,c,d){if(c)return A.fZ(a,b,d)
return A.fX(b.length,d,a,b)},
fY(a,b,c,d){var s=A.eG,r=A.fV
switch(b?-1:a){case 0:throw A.c(new A.bZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
fZ(a,b,c){var s,r
if($.eE==null)$.eE=A.eD("interceptor")
if($.eF==null)$.eF=A.eD("receiver")
s=b.length
r=A.fY(s,c,a,b)
return r},
eq(a){return A.h_(a)},
fU(a,b){return A.bi(v.typeUniverse,A.bn(a.a),b)},
eG(a){return a.a},
fV(a){return a.b},
eD(a){var s,r,q,p=new A.as("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.bp("Field name "+a+" not found.",null))},
dS(a){return v.getIsolateTag(a)},
jw(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
j0(a){var s,r,q,p,o,n=A.n($.fx.$1(a)),m=$.dQ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dX[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.dK($.fq.$2(a,n))
if(q!=null){m=$.dQ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.dX[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.dY(s)
$.dQ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.dX[n]=s
return s}if(p==="-"){o=A.dY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fz(a,s)
if(p==="*")throw A.c(A.f2(n))
if(v.leafTags[n]===true){o=A.dY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fz(a,s)},
fz(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ew(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
dY(a){return J.ew(a,!1,null,!!a.$iH)},
j2(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.dY(s)
else return J.ew(s,c,null,null)},
iX(){if(!0===$.es)return
$.es=!0
A.iY()},
iY(){var s,r,q,p,o,n,m,l
$.dQ=Object.create(null)
$.dX=Object.create(null)
A.iW()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fB.$1(o)
if(n!=null){m=A.j2(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
iW(){var s,r,q,p,o,n,m=B.D()
m=A.aH(B.E,A.aH(B.F,A.aH(B.w,A.aH(B.w,A.aH(B.G,A.aH(B.H,A.aH(B.I(B.v),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fx=new A.dU(p)
$.fq=new A.dV(o)
$.fB=new A.dW(n)},
aH(a,b){return a(b)||b},
iO(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
eM(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(A.e7("Illegal RegExp pattern ("+String(o)+")",a))},
iP(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
j3(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
fC(a,b,c){var s,r=b.gbU()
r.lastIndex=0
s=a.replace(r,A.iP(c))
return s},
bb:function bb(a,b){this.a=a
this.b=b},
b1:function b1(){},
db:function db(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b_:function b_(){},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(a){this.a=a},
d3:function d3(a){this.a=a},
aL:function aL(a,b){this.a=a
this.b=b},
bd:function bd(a){this.a=a
this.b=null},
a3:function a3(){},
bu:function bu(){},
bv:function bv(){},
c0:function c0(){},
c_:function c_(){},
as:function as(a,b){this.a=a
this.b=b},
bZ:function bZ(a){this.a=a},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cp:function cp(a,b){this.a=a
this.b=b
this.c=null},
af:function af(a,b){this.a=a
this.$ti=b},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dU:function dU(a){this.a=a},
dV:function dV(a){this.a=a},
dW:function dW(a){this.a=a},
al:function al(){},
aE:function aE(){},
bG:function bG(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
dC:function dC(a){this.b=a},
ax:function ax(){},
aY:function aY(){},
bN:function bN(){},
az:function az(){},
aW:function aW(){},
aX:function aX(){},
ay:function ay(){},
bO:function bO(){},
bP:function bP(){},
bQ:function bQ(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
aZ:function aZ(){},
bU:function bU(){},
b7:function b7(){},
b8:function b8(){},
b9:function b9(){},
ba:function ba(){},
ee(a,b){var s=b.c
return s==null?b.c=A.bg(a,"ae",[b.x]):s},
eY(a){var s=a.w
if(s===6||s===7)return A.eY(a.x)
return s===11||s===12},
hm(a){return a.as},
dR(a){return A.dI(v.typeUniverse,a,!1)},
am(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.am(a1,s,a3,a4)
if(r===s)return a2
return A.f9(a1,r,!0)
case 7:s=a2.x
r=A.am(a1,s,a3,a4)
if(r===s)return a2
return A.f8(a1,r,!0)
case 8:q=a2.y
p=A.aG(a1,q,a3,a4)
if(p===q)return a2
return A.bg(a1,a2.x,p)
case 9:o=a2.x
n=A.am(a1,o,a3,a4)
m=a2.y
l=A.aG(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.ej(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aG(a1,j,a3,a4)
if(i===j)return a2
return A.fa(a1,k,i)
case 11:h=a2.x
g=A.am(a1,h,a3,a4)
f=a2.y
e=A.iD(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.f7(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aG(a1,d,a3,a4)
o=a2.x
n=A.am(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.ek(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bs("Attempted to substitute unexpected RTI kind "+a0))}},
aG(a,b,c,d){var s,r,q,p,o=b.length,n=A.dJ(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.am(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
iE(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dJ(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.am(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
iD(a,b,c,d){var s,r=b.a,q=A.aG(a,r,c,d),p=b.b,o=A.aG(a,p,c,d),n=b.c,m=A.iE(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.c7()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
fs(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.iU(s)
return a.$S()}return null},
iZ(a,b){var s
if(A.eY(b))if(a instanceof A.a3){s=A.fs(a)
if(s!=null)return s}return A.bn(a)},
bn(a){if(a instanceof A.h)return A.aa(a)
if(Array.isArray(a))return A.T(a)
return A.el(J.ao(a))},
T(a){var s=a[v.arrayRti],r=t.q
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
aa(a){var s=a.$ti
return s!=null?s:A.el(a)},
el(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ic(a,s)},
ic(a,b){var s=a instanceof A.a3?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.hR(v.typeUniverse,s.name)
b.$ccache=r
return r},
iU(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dI(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
iT(a){return A.an(A.aa(a))},
eo(a){var s
if(a instanceof A.al)return A.iQ(a.$r,a.aW())
s=a instanceof A.a3?A.fs(a):null
if(s!=null)return s
if(t.k.b(a))return J.fT(a).a
if(Array.isArray(a))return A.T(a)
return A.bn(a)},
an(a){var s=a.r
return s==null?a.r=new A.dH(a):s},
iQ(a,b){var s,r,q=b,p=q.length
if(p===0)return t.d
if(0>=p)return A.j(q,0)
s=A.bi(v.typeUniverse,A.eo(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.j(q,r)
s=A.fc(v.typeUniverse,s,A.eo(q[r]))}return A.bi(v.typeUniverse,s,a)},
V(a){return A.an(A.dI(v.typeUniverse,a,!1))},
ib(a){var s=this
s.b=A.iB(s)
return s.b(a)},
iB(a){var s,r,q,p,o
if(a===t.K)return A.im
if(A.ap(a))return A.ir
s=a.w
if(s===6)return A.i9
if(s===1)return A.fm
if(s===7)return A.ih
r=A.iA(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ap)){a.f="$i"+q
if(q==="i")return A.ik
if(a===t.m)return A.ij
return A.iq}}else if(s===10){p=A.iO(a.x,a.y)
o=p==null?A.fm:p
return o==null?A.bj(o):o}return A.i7},
iA(a){if(a.w===8){if(a===t.S)return A.fk
if(a===t.i||a===t.o)return A.il
if(a===t.N)return A.ip
if(a===t.y)return A.em}return null},
ia(a){var s=this,r=A.i6
if(A.ap(s))r=A.hX
else if(s===t.K)r=A.bj
else if(A.aJ(s)){r=A.i8
if(s===t.a3)r=A.hV
else if(s===t.aD)r=A.dK
else if(s===t.u)r=A.hT
else if(s===t.ae)r=A.ff
else if(s===t.I)r=A.hU
else if(s===t.aQ)r=A.a1}else if(s===t.S)r=A.v
else if(s===t.N)r=A.n
else if(s===t.y)r=A.y
else if(s===t.o)r=A.hW
else if(s===t.i)r=A.O
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
i7(a){var s=this
if(a==null)return A.aJ(s)
return A.j_(v.typeUniverse,A.iZ(a,s),s)},
i9(a){if(a==null)return!0
return this.x.b(a)},
iq(a){var s,r=this
if(a==null)return A.aJ(r)
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.ao(a)[s]},
ik(a){var s,r=this
if(a==null)return A.aJ(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.ao(a)[s]},
ij(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.h)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fl(a){if(typeof a=="object"){if(a instanceof A.h)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
i6(a){var s=this
if(a==null){if(A.aJ(s))return a}else if(s.b(a))return a
throw A.B(A.fh(a,s),new Error())},
i8(a){var s=this
if(a==null||s.b(a))return a
throw A.B(A.fh(a,s),new Error())},
fh(a,b){return new A.be("TypeError: "+A.f3(a,A.J(b,null)))},
f3(a,b){return A.bz(a)+": type '"+A.J(A.eo(a),null)+"' is not a subtype of type '"+b+"'"},
N(a,b){return new A.be("TypeError: "+A.f3(a,b))},
ih(a){var s=this
return s.x.b(a)||A.ee(v.typeUniverse,s).b(a)},
im(a){return a!=null},
bj(a){if(a!=null)return a
throw A.B(A.N(a,"Object"),new Error())},
ir(a){return!0},
hX(a){return a},
fm(a){return!1},
em(a){return!0===a||!1===a},
y(a){if(!0===a)return!0
if(!1===a)return!1
throw A.B(A.N(a,"bool"),new Error())},
hT(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.B(A.N(a,"bool?"),new Error())},
O(a){if(typeof a=="number")return a
throw A.B(A.N(a,"double"),new Error())},
hU(a){if(typeof a=="number")return a
if(a==null)return a
throw A.B(A.N(a,"double?"),new Error())},
fk(a){return typeof a=="number"&&Math.floor(a)===a},
v(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.B(A.N(a,"int"),new Error())},
hV(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.B(A.N(a,"int?"),new Error())},
il(a){return typeof a=="number"},
hW(a){if(typeof a=="number")return a
throw A.B(A.N(a,"num"),new Error())},
ff(a){if(typeof a=="number")return a
if(a==null)return a
throw A.B(A.N(a,"num?"),new Error())},
ip(a){return typeof a=="string"},
n(a){if(typeof a=="string")return a
throw A.B(A.N(a,"String"),new Error())},
dK(a){if(typeof a=="string")return a
if(a==null)return a
throw A.B(A.N(a,"String?"),new Error())},
b(a){if(A.fl(a))return a
throw A.B(A.N(a,"JSObject"),new Error())},
a1(a){if(a==null)return a
if(A.fl(a))return a
throw A.B(A.N(a,"JSObject?"),new Error())},
fo(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.J(a[q],b)
return s},
iw(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fo(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.J(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fi(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.e([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.k(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.j(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.J(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.J(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.J(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.J(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.J(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
J(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.J(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.J(a.x,b)+">"
if(l===8){p=A.iF(a.x)
o=a.y
return o.length>0?p+("<"+A.fo(o,b)+">"):p}if(l===10)return A.iw(a,b)
if(l===11)return A.fi(a,b,null)
if(l===12)return A.fi(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.j(b,n)
return b[n]}return"?"},
iF(a){var s=A.fD(a)
if(s!=null)return s
return"minified:"+a},
hS(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
hR(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dI(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bh(a,5,"#")
q=A.dJ(s)
for(p=0;p<s;++p)q[p]=r
o=A.bg(a,b,q)
n[b]=o
return o}else return m},
hQ(a,b){return A.fd(a.tR,b)},
hP(a,b){return A.fd(a.eT,b)},
dI(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fb(a,null,b,!1)
r.set(b,s)
return s},
bi(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fb(a,b,c,!0)
q.set(c,r)
return r},
fc(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.ej(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
fb(a,b,c,d){return A.hH(A.hB(a,b,c,d))},
a9(a,b){b.a=A.ia
b.b=A.ib
return b},
bh(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.S(null,null)
s.w=b
s.as=c
r=A.a9(a,s)
a.eC.set(c,r)
return r},
f9(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.hN(a,b,r,c)
a.eC.set(r,s)
return s},
hN(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ap(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aJ(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.S(null,null)
q.w=6
q.x=b
q.as=c
return A.a9(a,q)},
f8(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.hL(a,b,r,c)
a.eC.set(r,s)
return s},
hL(a,b,c,d){var s,r
if(d){s=b.w
if(A.ap(b)||b===t.K)return b
else if(s===1)return A.bg(a,"ae",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.S(null,null)
r.w=7
r.x=b
r.as=c
return A.a9(a,r)},
hO(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.S(null,null)
s.w=13
s.x=b
s.as=q
r=A.a9(a,s)
a.eC.set(q,r)
return r},
bf(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
hK(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bg(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bf(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.S(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.a9(a,r)
a.eC.set(p,q)
return q},
ej(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bf(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.S(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.a9(a,o)
a.eC.set(q,n)
return n},
fa(a,b,c){var s,r,q="+"+(b+"("+A.bf(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.S(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.a9(a,s)
a.eC.set(q,r)
return r},
f7(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bf(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bf(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.hK(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.S(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.a9(a,p)
a.eC.set(r,o)
return o},
ek(a,b,c,d){var s,r=b.as+("<"+A.bf(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.hM(a,b,c,r,d)
a.eC.set(r,s)
return s},
hM(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dJ(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.am(a,b,r,0)
m=A.aG(a,c,r,0)
return A.ek(a,n,m,c!==m)}}l=new A.S(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.a9(a,l)},
hB(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hH(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hD(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.f5(a,r,l,k,!1)
else if(q===46)r=A.f5(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ak(a.u,a.e,k.pop()))
break
case 94:k.push(A.hO(a.u,k.pop()))
break
case 35:k.push(A.bh(a.u,5,"#"))
break
case 64:k.push(A.bh(a.u,2,"@"))
break
case 126:k.push(A.bh(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hF(a,k)
break
case 38:A.hE(a,k)
break
case 63:p=a.u
k.push(A.f9(p,A.ak(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.f8(p,A.ak(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hC(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.f6(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hI(a.u,a.e,o)
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
hD(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
f5(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.hS(s,o.x)[p]
if(n==null)A.ey('No "'+p+'" in "'+A.hm(o)+'"')
d.push(A.bi(s,o,n))}else d.push(p)
return m},
hF(a,b){var s,r=a.u,q=A.f4(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bg(r,p,q))
else{s=A.ak(r,a.e,p)
switch(s.w){case 11:b.push(A.ek(r,s,q,a.n))
break
default:b.push(A.ej(r,s,q))
break}}},
hC(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.f4(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ak(p,a.e,o)
q=new A.c7()
q.a=s
q.b=n
q.c=m
b.push(A.f7(p,r,q))
return
case-4:b.push(A.fa(p,b.pop(),s))
return
default:throw A.c(A.bs("Unexpected state under `()`: "+A.m(o)))}},
hE(a,b){var s=b.pop()
if(0===s){b.push(A.bh(a.u,1,"0&"))
return}if(1===s){b.push(A.bh(a.u,4,"1&"))
return}throw A.c(A.bs("Unexpected extended operation "+A.m(s)))},
f4(a,b){var s=b.splice(a.p)
A.f6(a.u,a.e,s)
a.p=b.pop()
return s},
ak(a,b,c){if(typeof c=="string")return A.bg(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hG(a,b,c)}else return c},
f6(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ak(a,b,c[s])},
hI(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ak(a,b,c[s])},
hG(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.bs("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bs("Bad index "+c+" for "+b.i(0)))},
j_(a,b,c){var s,r=b.d
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
return A.A(a,A.ee(a,b),c,d,e)}if(s===6)return A.A(a,p,c,d,e)&&A.A(a,b.x,c,d,e)
if(q===7){if(A.A(a,b,c,d.x,e))return!0
return A.A(a,b,c,A.ee(a,d),e)}if(q===6)return A.A(a,b,c,p,e)||A.A(a,b,c,d.x,e)
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
if(!A.A(a,j,c,i,e)||!A.A(a,i,e,j,c))return!1}return A.fj(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.fj(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.ii(a,b,c,d,e)}if(o&&q===10)return A.io(a,b,c,d,e)
return!1},
fj(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
ii(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bi(a,b,r[o])
return A.fe(a,p,null,c,d.y,e)}return A.fe(a,b.y,null,c,d.y,e)},
fe(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.A(a,b[s],d,e[s],f))return!1
return!0},
io(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.A(a,r[s],c,q[s],e))return!1
return!0},
aJ(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ap(a))if(s!==6)r=s===7&&A.aJ(a.x)
return r},
ap(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fd(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dJ(a){return a>0?new Array(a):v.typeUniverse.sEA},
S:function S(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
c7:function c7(){this.c=this.b=this.a=null},
dH:function dH(a){this.a=a},
c6:function c6(){},
be:function be(a){this.a=a},
hu(){var s,r,q
if(self.scheduleImmediate!=null)return A.iJ()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bm(new A.di(s),1)).observe(r,{childList:true})
return new A.dh(s,r,q)}else if(self.setImmediate!=null)return A.iK()
return A.iL()},
hv(a){self.scheduleImmediate(A.bm(new A.dj(t.M.a(a)),0))},
hw(a){self.setImmediate(A.bm(new A.dk(t.M.a(a)),0))},
hx(a){t.M.a(a)
A.hJ(0,a)},
hJ(a,b){var s=new A.dF()
s.bE(a,b)
return s},
it(a){return new A.c3(new A.z($.u,a.h("z<0>")),a.h("c3<0>"))},
i0(a,b){a.$2(0,null)
b.b=!0
return b.a},
hY(a,b){A.i1(a,b)},
i_(a,b){b.aF(a)},
hZ(a,b){b.aG(A.X(a),A.aI(a))},
i1(a,b){var s,r,q=new A.dL(b),p=new A.dM(b)
if(a instanceof A.z)a.bd(q,p,t.z)
else{s=t.z
if(a instanceof A.z)a.bw(q,p,s)
else{r=new A.z($.u,t._)
r.a=8
r.c=a
r.bd(q,p,s)}}},
iH(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.u
return r.b2(r,t.A.a(new A.dP(s)),t.H,t.S,t.z)},
cg(a){var s
if(t.C.b(a)){s=a.ga5()
if(s!=null)return s}return B.k},
id(a,b){var s=$.u
if(s===B.e)return null
s.bN(s,a,b)
return null},
ie(a,b){if($.u!==B.e)A.id(a,b)
if(b==null)if(t.C.b(a)){b=a.ga5()
if(b==null){A.eW(a,B.k)
b=B.k}}else b=B.k
else if(t.C.b(a))A.eW(a,b)
return new A.M(a,b)},
eh(a,b,c){var s,r,q,p,o,n={},m=n.a=a
for(s=t._;r=m.a,(r&4)!==0;m=a){a=s.a(m.c)
n.a=a}if(m===b){s=A.ho()
b.ai(new A.M(new A.Q(!0,m,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=m.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=m
m.b0(p)
return}if(!c)if(b.c==null)m=(s&16)===0||q!==0
else m=!1
else m=!0
if(m){p=b.aa()
b.a7(n.a)
A.aC(b,p)
return}b.a^=2
o=b.b
o.a1(o,new A.dr(n,b))},
aC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=e.a=a
for(s=t.n,r=t.F;;){q={}
p=d.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(d.c)
d=d.b
d.aX(d,m.a,m.b)}return}q.a=b
l=b.a
for(d=b;l!=null;d=l,l=k){d.a=null
A.aC(e.a,d)
q.a=l
k=l.a}j=e.a.c
q.b=n
q.c=j
if(o){p=d.c
p=(p&1)!==0||(p&15)===8}else p=!0
if(p){i=d.b.b
h=$.u
if(h!==i)$.u=i
else h=null
d=d.c
if((d&15)===8)new A.dv(q,e,n).$0()
else if(o){if((d&1)!==0)new A.du(q,j).$0()}else if((d&2)!==0)new A.dt(e,q).$0()
if(h!=null)$.u=h
d=q.c
if(d instanceof A.z){p=q.a.$ti
p=p.h("ae<2>").b(d)||!p.y[1].b(d)}else p=!1
if(p){g=q.a.b
if((d.a&24)!==0){f=r.a(g.c)
g.c=null
b=g.ab(f)
g.a=d.a&30|g.a&1
g.c=d.c
e.a=d
continue}else A.eh(d,g,!0)
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
fn(a,b){var s=t.Q
if(s.b(a))return b.b2(b,s.a(a),t.z,t.K,t.l)
s=t.v
if(s.b(a))return b.b3(b,s.a(a),t.z,t.K)
throw A.c(A.bq(a,"onError",u.c))},
iu(){var s,r
for(s=$.aF;s!=null;s=$.aF){$.bl=null
r=s.b
$.aF=r
if(r==null)$.bk=null
s.a.$0()}},
iC(){$.en=!0
try{A.iu()}finally{$.bl=null
$.en=!1
if($.aF!=null)$.eA().$1(A.fr())}},
fp(a){var s=new A.c4(a),r=$.bk
if(r==null){$.aF=$.bk=s
if(!$.en)$.eA().$1(A.fr())}else $.bk=r.b=s},
iz(a){var s,r,q,p=$.aF
if(p==null){A.fp(a)
$.bl=$.bk
return}s=new A.c4(a)
r=$.bl
if(r==null){s.b=p
$.aF=$.bl=s}else{q=r.b
s.b=q
$.bl=r.b=s
if(q==null)$.bk=s}},
ji(a,b){A.ep(a,"stream",t.K)
return new A.cb(b.h("cb<0>"))},
ix(a,b){A.iz(new A.dO(a,b))},
iy(a,b){if(B.e!==a)b=a.c8(b,t.H)
A.fp(b)},
di:function di(a){this.a=a},
dh:function dh(a,b,c){this.a=a
this.b=b
this.c=c},
dj:function dj(a){this.a=a},
dk:function dk(a){this.a=a},
dF:function dF(){},
dG:function dG(a,b){this.a=a
this.b=b},
c3:function c3(a,b){this.a=a
this.b=!1
this.$ti=b},
dL:function dL(a){this.a=a},
dM:function dM(a){this.a=a},
dP:function dP(a){this.a=a},
M:function M(a,b){this.a=a
this.b=b},
c5:function c5(){},
b6:function b6(a,b){this.a=a
this.$ti=b},
a0:function a0(a,b,c,d,e){var _=this
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
dn:function dn(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a,b){this.a=a
this.b=b},
dx:function dx(a){this.a=a},
du:function du(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
c4:function c4(a){this.a=a
this.b=null},
cb:function cb(a){this.$ti=a},
df:function df(){},
dg:function dg(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a,b){this.a=a
this.b=b},
eQ(a,b,c){return b.h("@<0>").p(c).h("eP<1,2>").a(A.iR(a,new A.aS(b.h("@<0>").p(c).h("aS<1,2>"))))},
hb(a){return new A.aj(a.h("aj<0>"))},
hc(a){return new A.aj(a.h("aj<0>"))},
ei(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hA(a,b,c){var s=new A.aD(a,b,c.h("aD<0>"))
s.c=a.e
return s},
eR(a,b){var s,r,q=A.hb(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.P)(a),++r)q.k(0,b.a(a[r]))
return q},
eT(a){var s,r
if(A.eu(a))return"{...}"
s=new A.aA("")
try{r={}
B.a.k($.K,a)
s.a+="{"
r.a=!0
a.a3(0,new A.cr(r,s))
s.a+="}"}finally{if(0>=$.K.length)return A.j($.K,-1)
$.K.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aj:function aj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ca:function ca(a){this.a=a
this.b=null},
aD:function aD(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
r:function r(){},
F:function F(){},
cr:function cr(a,b){this.a=a
this.b=b},
b2:function b2(){},
bc:function bc(){},
iv(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.X(r)
q=A.e7(String(s),null)
throw A.c(q)}q=A.dN(p)
return q},
dN(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.c8(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.dN(a[s])
return a},
eN(a,b,c){return new A.aT(a,b)},
i4(a){return a.bx()},
hy(a,b){return new A.dz(a,[],A.iN())},
hz(a,b,c){var s,r=new A.aA(""),q=A.hy(r,b)
q.ag(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
c8:function c8(a,b){this.a=a
this.b=b
this.c=null},
c9:function c9(a){this.a=a},
bw:function bw(){},
by:function by(){},
aT:function aT(a,b){this.a=a
this.b=b},
bI:function bI(a,b){this.a=a
this.b=b},
ck:function ck(){},
cm:function cm(a){this.b=a},
cl:function cl(a){this.a=a},
dA:function dA(){},
dB:function dB(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c){this.c=a
this.a=b
this.b=c},
et(a){var s=A.ec(a,null)
if(s!=null)return s
throw A.c(A.e7(a,null))},
h0(a,b){a=A.B(a,new Error())
if(a==null)a=A.bj(a)
a.stack=b.i(0)
throw a},
aw(a,b,c){var s,r,q
if(a<0||a>4294967295)A.ey(A.bY(a,0,4294967295,"length",null))
s=A.e(new Array(a),c.h("q<0>"))
s.$flags=1
r=s
if(a!==0&&b!=null)for(q=0;q<r.length;++q)r[q]=b
return r},
hd(a,b,c){var s,r,q=A.e([],c.h("q<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.P)(a),++r)B.a.k(q,c.a(a[r]))
q.$flags=1
return q},
cq(a,b){var s=A.e(a.slice(0),b.h("q<0>"))
return s},
eS(a,b){var s=A.hd(a,!1,b)
s.$flags=3
return s},
ed(a){return new A.bG(a,A.eM(a,!1,!0,!1,!1,""))},
f_(a,b,c){var s=J.fS(b)
if(!s.t())return a
if(c.length===0){do a+=A.m(s.gA())
while(s.t())}else{a+=A.m(s.gA())
while(s.t())a=a+c+A.m(s.gA())}return a},
ho(){return A.aI(new Error())},
bz(a){if(typeof a=="number"||A.em(a)||a==null)return J.bo(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eV(a)},
h1(a,b){A.ep(a,"error",t.K)
A.ep(b,"stackTrace",t.l)
A.h0(a,b)},
bs(a){return new A.br(a)},
bp(a,b){return new A.Q(!1,null,b,a)},
bq(a,b,c){return new A.Q(!0,a,b,c)},
eX(a,b){return new A.b0(null,null,!0,a,b,"Value not in range")},
bY(a,b,c,d,e){return new A.b0(b,c,!0,a,d,"Invalid value")},
hk(a,b,c){if(0>a||a>c)throw A.c(A.bY(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.bY(b,a,c,"end",null))
return b}return c},
hj(a,b){return a},
eI(a,b,c,d){return new A.bA(b,!0,a,d,"Index out of range")},
eg(a){return new A.b5(a)},
f2(a){return new A.c1(a)},
eZ(a){return new A.b4(a)},
Y(a){return new A.bx(a)},
e7(a,b){return new A.aM(a,b)},
h7(a,b,c){var s,r
if(A.eu(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.k($.K,a)
try{A.is(a,s)}finally{if(0>=$.K.length)return A.j($.K,-1)
$.K.pop()}r=A.f_(b,t.U.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
e8(a,b,c){var s,r
if(A.eu(a))return b+"..."+c
s=new A.aA(b)
B.a.k($.K,a)
try{r=s
r.a=A.f_(r.a,a,", ")}finally{if(0>=$.K.length)return A.j($.K,-1)
$.K.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
is(a,b){var s,r,q,p,o,n,m,l=a.gC(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.t())return
s=A.m(l.gA())
B.a.k(b,s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return A.j(b,-1)
r=b.pop()
if(0>=b.length)return A.j(b,-1)
q=b.pop()}else{p=l.gA();++j
if(!l.t()){if(j<=4){B.a.k(b,A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.j(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gA();++j
for(;l.t();p=o,o=n){n=l.gA();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.j(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.j(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
hf(a,b,c,d){var s
if(B.m===c){s=B.b.gl(a)
b=J.W(b)
return A.ef(A.a8(A.a8($.e6(),s),b))}if(B.m===d){s=B.b.gl(a)
b=J.W(b)
c=J.W(c)
return A.ef(A.a8(A.a8(A.a8($.e6(),s),b),c))}s=B.b.gl(a)
b=J.W(b)
c=J.W(c)
d=J.W(d)
d=A.ef(A.a8(A.a8(A.a8(A.a8($.e6(),s),b),c),d))
return d},
dl:function dl(){},
p:function p(){},
br:function br(a){this.a=a},
Z:function Z(){},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b0:function b0(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bA:function bA(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b5:function b5(a){this.a=a},
c1:function c1(a){this.a=a},
b4:function b4(a){this.a=a},
bx:function bx(a){this.a=a},
b3:function b3(){},
dm:function dm(a){this.a=a},
aM:function aM(a,b){this.a=a
this.b=b},
f:function f(){},
w:function w(){},
h:function h(){},
cc:function cc(){},
aA:function aA(a){this.a=a},
d2:function d2(a){this.a=a},
cd(a){var s
if(typeof a=="function")throw A.c(A.bp("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.i2,a)
s[$.e5()]=a
return s},
ce(a){var s
if(typeof a=="function")throw A.c(A.bp("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.i3,a)
s[$.e5()]=a
return s},
i2(a){return t.Z.a(a).$0()},
i3(a,b,c){t.Z.a(a)
if(A.v(c)>=1)return a.$1(b)
return a.$0()},
fA(a,b){var s=new A.z($.u,b.h("z<0>")),r=new A.b6(s,b.h("b6<0>"))
a.then(A.bm(new A.e_(r,b),1),A.bm(new A.e0(r),1))
return s},
e_:function e_(a,b){this.a=a
this.b=b},
e0:function e0(a){this.a=a},
dD:function dD(){this.b=this.a=0},
a6(a,b){var s=A.eb(a),r=b.a,q=b.b,p=A.cq(b.c,t.L)
return new A.R(s,r,q,p,b.d,b.e,b.f)},
hg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!(a instanceof A.F))return g
s=a.n(0,"name")
r=a.n(0,"bpm")
q=a.n(0,"meter")
if(typeof s!="string"||B.c.a_(s).length===0)return g
if(typeof r!="number"||typeof q!="string")return g
p=A.aV(q)
if(p==null)return g
o=a.n(0,"levels")
if(t.j.b(o)){n=A.e([],t.a)
for(m=o.length,l=0;l<o.length;o.length===m||(0,A.P)(o),++l)n.push(A.ha(A.m(o[l])))
k=n}else k=p.T()
if(k.length!==p.a)k=p.T()
j=a.n(0,"swing")
n=A.eb(s)
m=B.b.q(B.d.E(r),20,300)
i=A.f0(A.m(a.n(0,"sub")))
h=typeof j=="number"?B.b.q(B.d.E(j),50,75):50
return new A.R(n,m,p,k,i,h,J.ac(a.n(0,"dotted"),!0)&&p.gL())},
eb(a){var s=B.c.a_(a),r=A.ed("\\s+"),q=A.fC(s,r," ")
return q.length>40?B.c.N(q,0,40):q},
a2(a){var s,r,q=A.e([],t.J)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.P)(a),++r)q.push(a[r].bx())
return B.j.bk(q,null)},
ft(a){var s,r,q,p,o,n,m
if(a==null||a.length===0)return A.e([],t.e)
s=null
try{s=B.j.bj(a,null)}catch(r){if(A.X(r) instanceof A.aM)return A.e([],t.e)
else throw r}if(!t.j.b(s))return A.e([],t.e)
q=A.e([],t.e)
for(p=s,o=p.length,n=0;n<p.length;p.length===o||(0,A.P)(p),++n){m=A.hg(p[n])
if(m!=null)q.push(m)}return q},
j9(a,b){var s,r,q,p,o=A.e([b],t.e)
for(s=a.length,r=b.a,q=0;q<a.length;a.length===s||(0,A.P)(a),++q){p=a[q]
if(p.a.toLowerCase()!==r.toLowerCase())o.push(p)}return o},
j5(){var s="4/4",r=new A.e2()
return A.e([r.$4$sub("Rock eighths",100,s,B.q),r.$4$sub("Funk sixteenths",92,s,B.p),r.$5$sub$swing("Swing",140,s,B.q,67),r.$4$dotted("Shuffle 12/8",72,"12/8",!0),r.$3("Jazz waltz",150,"3/4"),r.$4$sub("Songo",112,s,B.p),r.$3("Odd: 7/8",180,"7/8:2+2+3")],t.e)},
R:function R(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
e2:function e2(){},
ha(a){return B.a.bp(B.o,new A.cn(a),new A.co())},
f0(a){return B.a.bp(B.A,new A.d8(a),new A.d9())},
ah(a,b,c){var s=c==null?A.he(a,b):c
s=new A.aU(a,b,A.eS(s,t.S))
s.bC(a,b,c)
return s},
he(a,b){var s
if(b<8||a<5)return A.aw(a,1,t.S)
if(B.b.ah(a,3)===0)return A.aw(B.b.B(a,3),3,t.S)
if((a&1)===1){s=t.S
s=A.cq(A.aw(B.b.B(a-3,2),2,s),s)
s.push(3)
return s}return A.aw(B.b.B(a,2),2,t.S)},
aV(a){var s,r,q,p,o,n,m,l,k,j,i=A.ed("^\\s*(\\d+)\\s*/\\s*(\\d+)\\s*(?::\\s*([\\d+\\s]+))?$").cd(a)
if(i==null)return null
p=i.b
if(1>=p.length)return A.j(p,1)
o=p[1]
o.toString
s=A.et(o)
if(2>=p.length)return A.j(p,2)
o=p[2]
o.toString
r=A.et(o)
q=null
if(3>=p.length)return A.j(p,3)
n=p[3]
if(n!=null){p=A.e([],t.t)
for(o=n.split("+"),m=o.length,l=0;l<m;++l){k=A.ec(B.c.a_(o[l]),null)
if(k!=null)p.push(k)}q=p}try{p=A.ah(s,r,q)
return p}catch(j){if(A.X(j) instanceof A.Q)return null
else throw j}},
hn(){return new A.d7()},
j6(a){var s
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
cn:function cn(a){this.a=a},
co:function co(){},
ai:function ai(a,b){this.a=a
this.b=b},
C:function C(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
d8:function d8(a){this.a=a},
d9:function d9(){},
aU:function aU(a,b,c){this.a=a
this.b=b
this.c=c},
cs:function cs(){},
ct:function ct(){},
cw:function cw(){},
cx:function cx(){},
cu:function cu(){},
cv:function cv(){},
ci:function ci(a,b,c){var _=this
_.a=96
_.b=a
_.c=b
_.d=c
_.e=50
_.f=!1},
d7:function d7(){var _=this
_.a=!1
_.c=_.b=4
_.d=140},
ch:function ch(){this.a=!1
this.c=this.b=2},
bt:function bt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.x=_.w=_.r=_.f=_.e=0},
da:function da(a){this.c=a},
d(a,b){var s=A.a1(A.b(v.G.document).getElementById(a))
s.toString
return b.a(s)},
L(a,b,c){var s=A.b(A.b(v.G.document).createElement(a))
if(b!=null)s.className=b
if(c!=null)s.textContent=c
return s},
o(a,b,c){return a.addEventListener(b,A.ce(new A.dZ(c)))},
ev(a){var s,r,q,p,o=null
try{s=A.a1(v.G.localStorage)
q=s
r=q==null?o:A.bF(q,"getItem",a,o,t.X)
q=r!=null&&typeof r==="string"?A.n(r):o
return q}catch(p){return o}},
U(a,b){var s,r,q
try{s=A.a1(v.G.localStorage)
r=s
if(r!=null)A.bF(r,"setItem",a,b,t.X)}catch(q){}},
ex(){var s=A.b(v.G.navigator).audioSession
if(t.m.b(s))s.type="playback"},
ja(a){var s
try{A.y(A.b(v.G.navigator).vibrate(a))}catch(s){}},
j4(){var s,r,q,p,o,n=A.b(v.G.navigator).serviceWorker,m=t.m
if(!m.b(n))return
try{s=A.bF(A.b(n),"register","sw.js",null,m)
m=A.fA(s,t.X)
r=new A.e1()
q=m.$ti
p=$.u
if(p!==B.e)r=A.fn(r,p)
m.a6(new A.a0(new A.z(p,q),2,null,r,q.h("a0<1,1>")))}catch(o){}},
jb(){var s=v.G,r=A.a1(A.b(s.document).getElementById("themeToggle")),q=A.b(A.b(s.document).documentElement)
if(r==null)return
s=new A.e4(q,r)
A.o(r,"click",new A.e3(q,s))
s.$0()},
dZ:function dZ(a){this.a=a},
dd:function dd(){this.a=null
this.b=!1},
de:function de(a){this.a=a},
e1:function e1(){},
e4:function e4(a,b){this.a=a
this.b=b},
e3:function e3(a,b){this.a=a
this.b=b},
j1(){var s,r,q,p
A.jb()
A.j4()
s=v.G
r=A.a1(A.b(s.document).getElementById("metro"))
if(r==null)return
if(!("AudioContext" in s)){s=A.a1(A.b(s.document).getElementById("no-audio"))
if(s!=null)s.hidden=!1
return}s=A.ah(4,4,null)
q=A.ah(4,4,null)
q=q.T()
p=t.m
new A.bM(new A.ci(s,q,B.f),A.hn(),new A.ch(),A.d("bpm",p),A.d("bpm-range",p),A.d("tempo-unit",p),A.d("tempo-word",p),A.d("start",p),A.d("flash",p),A.d("position",p),A.d("grid",p),A.d("meter-beats",p),A.d("meter-unit",p),A.d("meter-groups",p),A.d("groups-row",p),A.d("meter-quick",p),A.d("dotted-row",p),A.d("dotted",p),A.d("sub",p),A.d("swing-row",p),A.d("swing",p),A.d("swing-out",p),A.d("sound",p),A.d("volume",p),A.d("sub-volume",p),A.d("vibrate-row",p),A.d("vibrate",p),A.d("big-flash",p),A.d("status",p),A.d("my-presets",p),A.d("presets-empty",p),A.d("starter-presets",p),A.d("preset-name",p),A.e([],t.c),A.e([],t.O),new A.da(A.e([],t.w)),new A.dd(),A.e([],t.e)).cs()
r.hidden=!1},
fg(a){var s,r=A.b(a.children),q=A.v(A.O(r.length)),p=A.e([],t.O)
for(s=0;s<q;++s)p.push(A.b(A.eK(r,"item",s,null,null,null)))
return p},
iV(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=A.ah(a,b,A.aw(a,1,t.S))
if(b<8||a<4)return A.e([A.ah(a,b,null)],t.b)
s=A.hc(t.N)
r=t.t
new A.dT(s).$2(a,A.e([],r))
q=A.ah(a,b,null)
p=A.e([q],t.b)
for(o=A.hA(s,s.r,s.$ti.c),n=q.c,m=o.$ti.c;o.t();){l=o.d
if(l==null)l=m.a(l)
if(l!==B.a.K(n,"+")){k=A.e([],r)
for(l=l.split("+"),j=l.length,i=0;i<j;++i)k.push(A.et(l[i]))
p.push(A.ah(a,b,k))}}p.push(h)
return p},
bM:function bM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var _=this
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
_.p2="wood"
_.p3=0.8
_.p4=0.6
_.RG=_.R8=!1
_.to=_.ry=_.rx=null
_.x1=!1
_.x2=0
_.bl=_.y2=_.y1=_.xr=null
_.V=b4
_.ae=b5
_.bm=-1
_.cc=b6
_.bo=_.bn=null
_.W=b7
_.J=b8
_.aH=_.X=$},
cL:function cL(a){this.a=a},
cM:function cM(a){this.a=a},
cN:function cN(a){this.a=a},
cV:function cV(a){this.a=a},
cW:function cW(a){this.a=a},
cX:function cX(a){this.a=a},
cY:function cY(a){this.a=a},
cZ:function cZ(a){this.a=a},
d_:function d_(a){this.a=a},
d0:function d0(a){this.a=a},
d1:function d1(a){this.a=a},
cO:function cO(a){this.a=a},
cP:function cP(a){this.a=a},
cQ:function cQ(a){this.a=a},
cR:function cR(a){this.a=a},
cS:function cS(a){this.a=a},
cT:function cT(a){this.a=a},
cU:function cU(a){this.a=a},
cA:function cA(a,b){this.a=a
this.b=b},
cH:function cH(a){this.a=a},
cG:function cG(){},
cy:function cy(){},
cz:function cz(a,b){this.a=a
this.b=b},
cK:function cK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
cJ:function cJ(a){this.a=a},
cE:function cE(a){this.a=a},
cC:function cC(a,b){this.a=a
this.b=b},
cD:function cD(a,b){this.a=a
this.b=b},
cI:function cI(a){this.a=a},
cB:function cB(a){this.a=a},
cF:function cF(a,b){this.a=a
this.b=b},
dT:function dT(a){this.a=a},
fD(a){return v.mangledGlobalNames[a]},
j7(a){throw A.B(A.eO(a),new Error())},
ez(){throw A.B(A.eO(""),new Error())},
eK(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else{s=a[b](c,d)
return s}},
bF(a,b,c,d,e){return e.a(A.eK(a,b,c,d,null,null))}},B={}
var w=[A,J,B]
var $={}
A.e9.prototype={}
J.bB.prototype={
M(a,b){return a===b},
gl(a){return A.bW(a)},
i(a){return"Instance of '"+A.bX(a)+"'"},
gm(a){return A.an(A.el(this))}}
J.bD.prototype={
i(a){return String(a)},
gl(a){return a?519018:218159},
gm(a){return A.an(t.y)},
$ik:1,
$iE:1}
J.aO.prototype={
M(a,b){return null==b},
i(a){return"null"},
gl(a){return 0},
$ik:1}
J.aQ.prototype={$it:1}
J.a5.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.bV.prototype={}
J.aB.prototype={}
J.a4.prototype={
i(a){var s=a[$.fF()]
if(s==null)s=a[$.e5()]
if(s==null)return this.bA(a)
return"JavaScript function for "+J.bo(s)},
$iad:1}
J.aP.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.aR.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.q.prototype={
k(a,b){A.T(a).c.a(b)
a.$flags&1&&A.cf(a,29)
a.push(b)},
aK(a,b){var s
a.$flags&1&&A.cf(a,"removeAt",1)
s=a.length
if(b>=s)throw A.c(A.eX(b,null))
return a.splice(b,1)[0]},
S(a){a.$flags&1&&A.cf(a,"clear","clear")
a.length=0},
K(a,b){var s,r=A.aw(a.length,"",t.N)
for(s=0;s<a.length;++s)this.G(r,s,A.m(a[s]))
return r.join(b)},
ce(a,b,c,d){var s,r,q
d.a(b)
A.T(a).p(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.c(A.Y(a))}return r},
bp(a,b,c){var s,r,q,p=A.T(a)
p.h("E(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.Y(a))}p=c.$0()
return p},
gaI(a){if(a.length>0)return a[0]
throw A.c(A.eJ())},
gbt(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.eJ())},
bg(a,b){var s,r
A.T(a).h("E(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.Y(a))}return!1},
U(a,b){var s,r
A.T(a).h("E(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.Y(a))}return!0},
a2(a,b){var s
for(s=0;s<a.length;++s)if(J.ac(a[s],b))return!0
return!1},
gbs(a){return a.length!==0},
i(a){return A.e8(a,"[","]")},
gC(a){return new J.ar(a,a.length,A.T(a).h("ar<1>"))},
gl(a){return A.bW(a)},
gj(a){return a.length},
G(a,b,c){A.T(a).c.a(c)
a.$flags&2&&A.cf(a)
if(!(b>=0&&b<a.length))throw A.c(A.fu(a,b))
a[b]=c},
$if:1,
$ii:1}
J.bC.prototype={
cq(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bX(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.cj.prototype={}
J.ar.prototype={
gA(){var s=this.d
return s==null?this.$ti.c.a(s):s},
t(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.P(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.at.prototype={
aE(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.b.gaf(b)
if(this.gaf(a)===s)return 0
if(this.gaf(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaf(a){return a===0?1/a<0:a<0},
E(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.eg(""+a+".round()"))},
q(a,b,c){if(B.b.aE(b,c)>0)throw A.c(A.iI(b))
if(this.aE(a,b)<0)return b
if(this.aE(a,c)>0)return c
return a},
cn(a,b){var s
if(b>20)throw A.c(A.bY(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaf(a))return"-"+s
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
ah(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
bB(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bc(a,b)},
B(a,b){return(a|0)===a?a/b|0:this.bc(a,b)},
bc(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.eg("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
ba(a,b){var s
if(a>0)s=this.c1(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
c1(a,b){return b>31?0:a>>>b},
gm(a){return A.an(t.o)},
$il:1,
$iaq:1}
J.aN.prototype={
gm(a){return A.an(t.S)},
$ik:1,
$ia:1}
J.bE.prototype={
gm(a){return A.an(t.i)},
$ik:1}
J.au.prototype={
N(a,b,c){return a.substring(b,A.hk(b,c,a.length))},
a_(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.j(p,0)
if(p.charCodeAt(0)===133){s=J.h8(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.j(p,r)
q=p.charCodeAt(r)===133?J.h9(p,r):o
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
gj(a){return a.length},
$ik:1,
$id4:1,
$ix:1}
A.bJ.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.d5.prototype={}
A.aK.prototype={}
A.ag.prototype={
gC(a){return new A.av(this,this.gj(0),A.aa(this).h("av<ag.E>"))},
gY(a){return this.a.gj(0)===0}}
A.av.prototype={
gA(){var s=this.d
return s==null?this.$ti.c.a(s):s},
t(){var s,r=this,q=r.a,p=J.fv(q),o=p.gj(q)
if(r.b!==o)throw A.c(A.Y(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ad(q,s);++r.c
return!0}}
A.G.prototype={}
A.bb.prototype={$r:"+(1,2)",$s:1}
A.b1.prototype={}
A.db.prototype={
D(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.b_.prototype={
i(a){return"Null check operator used on a null value"}}
A.bH.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.c2.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.d3.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aL.prototype={}
A.bd.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ia7:1}
A.a3.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fE(r==null?"unknown":r)+"'"},
$iad:1,
gcv(){return this},
$C:"$1",
$R:1,
$D:null}
A.bu.prototype={$C:"$0",$R:0}
A.bv.prototype={$C:"$2",$R:2}
A.c0.prototype={}
A.c_.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fE(s)+"'"}}
A.as.prototype={
M(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.as))return!1
return this.$_target===b.$_target&&this.a===b.a},
gl(a){return(A.fy(this.a)^A.bW(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bX(this.a)+"'")}}
A.bZ.prototype={
i(a){return"RuntimeError: "+this.a}}
A.aS.prototype={
gj(a){return this.a},
gY(a){return this.a===0},
gZ(){return new A.af(this,this.$ti.h("af<1>"))},
n(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ci(b)},
ci(a){var s,r,q=this.d
if(q==null)return null
s=this.bQ(q,a)
r=this.bq(s,a)
if(r<0)return null
return s[r].b},
G(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.aP(s==null?m.b=m.ar():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aP(r==null?m.c=m.ar():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.ar()
p=J.W(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.au(b,c)]
else{n=m.bq(o,b)
if(n>=0)o[n].b=c
else o.push(m.au(b,c))}}},
a3(a,b){var s,r,q=this
q.$ti.h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.Y(q))
s=s.c}},
aP(a,b,c){var s,r=this.$ti
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.au(b,c)
else s.b=c},
au(a,b){var s=this,r=s.$ti,q=new A.cp(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
bQ(a,b){return a[J.W(b)&1073741823]},
bq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ac(a[r].a,b))return r
return-1},
i(a){return A.eT(this)},
ar(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ieP:1}
A.cp.prototype={}
A.af.prototype={
gj(a){return this.a.a},
gY(a){return this.a.a===0},
gC(a){var s=this.a
return new A.bK(s,s.r,s.e,this.$ti.h("bK<1>"))}}
A.bK.prototype={
gA(){return this.d},
t(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.Y(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.dU.prototype={
$1(a){return this.a(a)},
$S:4}
A.dV.prototype={
$2(a,b){return this.a(a,b)},
$S:9}
A.dW.prototype={
$1(a){return this.a(A.n(a))},
$S:10}
A.al.prototype={
i(a){return this.bf(!1)},
bf(a){var s,r,q,p,o,n=this.bO(),m=this.aW(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.j(m,q)
o=m[q]
l=a?l+A.eV(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bO(){var s,r=this.$s
while($.dE.length<=r)B.a.k($.dE,null)
s=$.dE[r]
if(s==null){s=this.bJ()
B.a.G($.dE,r,s)}return s},
bJ(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.e(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.G(k,q,r[s])}}return A.eS(k,t.K)}}
A.aE.prototype={
aW(){return[this.a,this.b]},
M(a,b){if(b==null)return!1
return b instanceof A.aE&&this.$s===b.$s&&J.ac(this.a,b.a)&&J.ac(this.b,b.b)},
gl(a){return A.hf(this.$s,this.a,this.b,B.m)}}
A.bG.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
gbU(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.eM(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
cd(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dC(s)},
$id4:1,
$ihl:1}
A.dC.prototype={}
A.ax.prototype={
gm(a){return B.U},
$ik:1}
A.aY.prototype={}
A.bN.prototype={
gm(a){return B.V},
$ik:1}
A.az.prototype={
gj(a){return a.length},
$iH:1}
A.aW.prototype={$if:1,$ii:1}
A.aX.prototype={$if:1,$ii:1}
A.ay.prototype={
gm(a){return B.W},
$ik:1,
$iay:1}
A.bO.prototype={
gm(a){return B.X},
$ik:1}
A.bP.prototype={
gm(a){return B.Y},
$ik:1}
A.bQ.prototype={
gm(a){return B.Z},
$ik:1}
A.bR.prototype={
gm(a){return B.a_},
$ik:1}
A.bS.prototype={
gm(a){return B.a1},
$ik:1}
A.bT.prototype={
gm(a){return B.a2},
$ik:1}
A.aZ.prototype={
gm(a){return B.a3},
gj(a){return a.length},
$ik:1}
A.bU.prototype={
gm(a){return B.a4},
gj(a){return a.length},
$ik:1}
A.b7.prototype={}
A.b8.prototype={}
A.b9.prototype={}
A.ba.prototype={}
A.S.prototype={
h(a){return A.bi(v.typeUniverse,this,a)},
p(a){return A.fc(v.typeUniverse,this,a)}}
A.c7.prototype={}
A.dH.prototype={
i(a){return A.J(this.a,null)}}
A.c6.prototype={
i(a){return this.a}}
A.be.prototype={$iZ:1}
A.di.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:5}
A.dh.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:11}
A.dj.prototype={
$0(){this.a.$0()},
$S:6}
A.dk.prototype={
$0(){this.a.$0()},
$S:6}
A.dF.prototype={
bE(a,b){if(self.setTimeout!=null)self.setTimeout(A.bm(new A.dG(this,b),0),a)
else throw A.c(A.eg("`setTimeout()` not found."))}}
A.dG.prototype={
$0(){this.b.$0()},
$S:0}
A.c3.prototype={
aF(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.aQ(a)
else{s=r.a
if(q.h("ae<1>").b(a))s.aR(a)
else s.aT(a)}},
aG(a,b){var s
if(b==null)b=A.cg(a)
s=this.a
if(this.b)s.am(new A.M(a,b))
else s.ai(new A.M(a,b))}}
A.dL.prototype={
$1(a){return this.a.$2(0,a)},
$S:2}
A.dM.prototype={
$2(a,b){this.a.$2(1,new A.aL(a,t.l.a(b)))},
$S:12}
A.dP.prototype={
$2(a,b){this.a(A.v(a),b)},
$S:13}
A.M.prototype={
i(a){return A.m(this.a)},
$ip:1,
ga5(){return this.b}}
A.c5.prototype={
aG(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.eZ("Future already completed"))
s.ai(A.ie(a,b))},
bi(a){return this.aG(a,null)}}
A.b6.prototype={
aF(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.eZ("Future already completed"))
s.aQ(r.h("1/").a(a))}}
A.a0.prototype={
cj(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.az(s,t.x.a(this.d),a.a,t.y,t.K)},
cg(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.bZ(l,q,m,a.b,o,n,t.l)
else p=l.az(l,t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.h.b(A.X(s))){if((r.c&1)!==0)throw A.c(A.bp("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.bp("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.z.prototype={
bw(a,b,c){var s,r,q,p=this.$ti
p.p(c).h("1/(2)").a(a)
s=$.u
if(s===B.e){if(b!=null&&!t.Q.b(b)&&!t.v.b(b))throw A.c(A.bq(b,"onError",u.c))}else{r=p.c
a=s.b3(s,c.h("@<0/>").p(r).h("1(2)").a(a),c.h("0/"),r)
if(b!=null)b=A.fn(b,s)}q=new A.z(s,c.h("z<0>"))
r=b==null?1:3
this.a6(new A.a0(q,r,a,b,p.h("@<1>").p(c).h("a0<1,2>")))
return q},
bd(a,b,c){var s,r=this.$ti
r.p(c).h("1/(2)").a(a)
s=new A.z($.u,c.h("z<0>"))
this.a6(new A.a0(s,19,a,b,r.h("@<1>").p(c).h("a0<1,2>")))
return s},
c0(a){this.a=this.a&1|16
this.c=a},
a7(a){this.a=a.a&30|this.a&1
this.c=a.c},
a6(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.a6(a)
return}r.a7(s)}q=r.b
q.a1(q,new A.dn(r,a))}},
b0(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.b0(a)
return}m.a7(n)}l.a=m.ab(a)
s=m.b
s.a1(s,new A.ds(l,m))}},
aa(){var s=t.F.a(this.c)
this.c=null
return this.ab(s)},
ab(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aT(a){var s,r=this
r.$ti.c.a(a)
s=r.aa()
r.a=8
r.c=a
A.aC(r,s)},
bI(a){var s=this.aa()
this.a7(a)
A.aC(this,s)},
am(a){var s=this.aa()
this.c0(a)
A.aC(this,s)},
aQ(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("ae<1>").b(a)){this.aR(a)
return}this.bG(a)},
bG(a){var s,r=this
r.$ti.c.a(a)
r.a^=2
s=r.b
s.a1(s,new A.dq(r,a))},
aR(a){A.eh(this.$ti.h("ae<1>").a(a),this,!1)
return},
ai(a){var s
this.a^=2
s=this.b
s.a1(s,new A.dp(this,a))},
$iae:1}
A.dn.prototype={
$0(){A.aC(this.a,this.b)},
$S:0}
A.ds.prototype={
$0(){A.aC(this.b,this.a.a)},
$S:0}
A.dr.prototype={
$0(){A.eh(this.a.a,this.b,!0)},
$S:0}
A.dq.prototype={
$0(){this.a.aT(this.b)},
$S:0}
A.dp.prototype={
$0(){this.a.am(this.b)},
$S:0}
A.dv.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.b4(p,t.G.a(q.d),t.z)}catch(o){s=A.X(o)
r=A.aI(o)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
p=r
if(p==null)p=A.cg(q)
n=k.a
n.c=new A.M(q,p)
q=n}q.b=!0
return}if(j instanceof A.z&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.z){m=k.b.a
l=new A.z(m.b,m.$ti)
j.bw(new A.dw(l,m),new A.dx(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.dw.prototype={
$1(a){this.a.bI(this.b)},
$S:5}
A.dx.prototype={
$2(a,b){A.bj(a)
t.l.a(b)
this.a.am(new A.M(a,b))},
$S:14}
A.du.prototype={
$0(){var s,r,q,p,o,n,m,l,k
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
l=p.b.b
q.c=l.az(l,o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(k){s=A.X(k)
r=A.aI(k)
q=s
p=r
if(p==null)p=A.cg(q)
o=this.a
o.c=new A.M(q,p)
o.b=!0}},
$S:0}
A.dt.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.cj(s)&&p.a.e!=null){p.c=p.a.cg(s)
p.b=!1}}catch(o){r=A.X(o)
q=A.aI(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.cg(p)
m=l.b
m.c=new A.M(p,n)
p=m}p.b=!0}},
$S:0}
A.c4.prototype={}
A.cb.prototype={}
A.df.prototype={
c8(a,b){return new A.dg(this,this.bX(this,b.h("0()").a(a),b),b)},
aX(a,b,c){var s,r,q,p,o,n,m,l
t.l.a(c)
s=null
if(s==null){A.ix(b,c)
return}r=s.gaM()
q=r.gcw()
p=$.u
try{$.u=q
s.cf(r,r.gav(),a,b,c)
$.u=p}catch(m){o=A.X(m)
n=A.aI(m)
$.u=p
l=b===o?c:n
q.aX(r,o,l)}},
b4(a,b,c){var s,r,q
c.h("0()").a(b)
r=$.u
if(r===a)return b.$0()
s=r
$.u=a
try{r=b.$0()
return r}finally{$.u=s}q=null.gaM()
return null.cz(q,q.gav(),a,b)},
az(a,b,c,d,e){var s,r,q
d.h("@<0>").p(e).h("1(2)").a(b)
e.a(c)
r=$.u
if(r===a)return b.$1(c)
s=r
$.u=a
try{r=b.$1(c)
return r}finally{$.u=s}q=null.gaM()
return null.cf(q,q.gav(),a,b,c)},
bZ(a,b,c,d,e,f,g){var s,r,q
e.h("@<0>").p(f).p(g).h("1(2,3)").a(b)
f.a(c)
g.a(d)
r=$.u
if(r===a)return b.$2(c,d)
s=r
$.u=a
try{r=b.$2(c,d)
return r}finally{$.u=s}q=null.gaM()
return null.cA(q,q.gav(),a,b,c,d)},
bX(a,b,c){c.h("0()").a(b)
return b},
b3(a,b,c,d){c.h("@<0>").p(d).h("1(2)").a(b)
return b},
b2(a,b,c,d,e){c.h("@<0>").p(d).p(e).h("1(2,3)").a(b)
return b},
bN(a,b,c){return null},
a1(a,b){A.iy(a,t.M.a(b))
return}}
A.dg.prototype={
$0(){var s=this.a
return s.b4(s,this.b,this.c)},
$S(){return this.c.h("0()")}}
A.dO.prototype={
$0(){A.h1(this.a,this.b)},
$S:0}
A.aj.prototype={
gC(a){var s=this,r=new A.aD(s,s.r,A.aa(s).h("aD<1>"))
r.c=s.e
return r},
gj(a){return this.a},
a2(a,b){var s
if((b&1073741823)===b){s=this.c
if(s==null)return!1
return t.R.a(s[b])!=null}else return this.bK(b)},
bK(a){var s=this.d
if(s==null)return!1
return this.aV(s[this.aU(a)],a)>=0},
k(a,b){var s,r,q=this
A.aa(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aS(s==null?q.b=A.ei():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aS(r==null?q.c=A.ei():r,b)}else return q.bF(b)},
bF(a){var s,r,q,p=this
A.aa(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.ei()
r=p.aU(a)
q=s[r]
if(q==null)s[r]=[p.al(a)]
else{if(p.aV(q,a)>=0)return!1
q.push(p.al(a))}return!0},
aS(a,b){A.aa(this).c.a(b)
if(t.R.a(a[b])!=null)return!1
a[b]=this.al(b)
return!0},
al(a){var s=this,r=new A.ca(A.aa(s).c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
aU(a){return J.W(a)&1073741823},
aV(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ac(a[r].a,b))return r
return-1}}
A.ca.prototype={}
A.aD.prototype={
gA(){var s=this.d
return s==null?this.$ti.c.a(s):s},
t(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.Y(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}}}
A.r.prototype={
gC(a){return new A.av(a,a.length,A.bn(a).h("av<r.E>"))},
ad(a,b){if(!(b<a.length))return A.j(a,b)
return a[b]},
gbs(a){return a.length!==0},
i(a){return A.e8(a,"[","]")}}
A.F.prototype={
a3(a,b){var s,r,q,p=A.aa(this)
p.h("~(F.K,F.V)").a(b)
for(s=this.gZ(),s=s.gC(s),p=p.h("F.V");s.t();){r=s.gA()
q=this.n(0,r)
b.$2(r,q==null?p.a(q):q)}},
gj(a){var s=this.gZ()
return s.gj(s)},
gY(a){var s=this.gZ()
return s.gY(s)},
i(a){return A.eT(this)},
$ibL:1}
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
A.b2.prototype={
i(a){return A.e8(this,"{","}")},
$if:1}
A.bc.prototype={}
A.c8.prototype={
n(a,b){var s,r=this.b
if(r==null)return this.c.n(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.bW(b):s}},
gj(a){return this.b==null?this.c.a:this.a8().length},
gY(a){return this.gj(0)===0},
gZ(){if(this.b==null){var s=this.c
return new A.af(s,s.$ti.h("af<1>"))}return new A.c9(this)},
a3(a,b){var s,r,q,p,o=this
t.cQ.a(b)
if(o.b==null)return o.c.a3(0,b)
s=o.a8()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.dN(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.Y(o))}},
a8(){var s=t.aL.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
bW(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.dN(this.a[a])
return this.b[a]=s}}
A.c9.prototype={
gj(a){return this.a.gj(0)},
ad(a,b){var s=this.a
if(s.b==null)s=s.gZ().ad(0,b)
else{s=s.a8()
if(!(b<s.length))return A.j(s,b)
s=s[b]}return s},
gC(a){var s=this.a
if(s.b==null){s=s.gZ()
s=s.gC(s)}else{s=s.a8()
s=new J.ar(s,s.length,A.T(s).h("ar<1>"))}return s}}
A.bw.prototype={}
A.by.prototype={}
A.aT.prototype={
i(a){var s=A.bz(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.bI.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.ck.prototype={
bj(a,b){var s=A.iv(a,this.gca().a)
return s},
bk(a,b){var s=A.hz(a,this.gcb().b,null)
return s},
gcb(){return B.N},
gca(){return B.M}}
A.cm.prototype={}
A.cl.prototype={}
A.dA.prototype={
bz(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.N(a,r,q)
r=q+1
o=A.D(92)
s.a+=o
o=A.D(117)
s.a+=o
o=A.D(100)
s.a+=o
o=p>>>8&15
o=A.D(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.D(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.D(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.N(a,r,q)
r=q+1
o=A.D(92)
s.a+=o
switch(p){case 8:o=A.D(98)
s.a+=o
break
case 9:o=A.D(116)
s.a+=o
break
case 10:o=A.D(110)
s.a+=o
break
case 12:o=A.D(102)
s.a+=o
break
case 13:o=A.D(114)
s.a+=o
break
default:o=A.D(117)
s.a+=o
o=A.D(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.D(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.D(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.N(a,r,q)
r=q+1
o=A.D(92)
s.a+=o
o=A.D(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.N(a,r,m)},
ak(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.bI(a,null))}B.a.k(s,a)},
ag(a){var s,r,q,p,o=this
if(o.by(a))return
o.ak(a)
try{s=o.b.$1(a)
if(!o.by(s)){q=A.eN(a,null,o.gb_())
throw A.c(q)}q=o.a
if(0>=q.length)return A.j(q,-1)
q.pop()}catch(p){r=A.X(p)
q=A.eN(a,r,o.gb_())
throw A.c(q)}},
by(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.i(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.bz(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.ak(a)
q.ct(a)
s=q.a
if(0>=s.length)return A.j(s,-1)
s.pop()
return!0}else if(a instanceof A.F){q.ak(a)
r=q.cu(a)
s=q.a
if(0>=s.length)return A.j(s,-1)
s.pop()
return r}else return!1},
ct(a){var s,r=this.c
r.a+="["
if(J.fR(a)){if(0>=a.length)return A.j(a,0)
this.ag(a[0])
for(s=1;s<a.length;++s){r.a+=","
this.ag(a[s])}}r.a+="]"},
cu(a){var s,r,q,p,o,n,m=this,l={}
if(a.gY(a)){m.c.a+="{}"
return!0}s=a.gj(a)*2
r=A.aw(s,null,t.X)
q=l.a=0
l.b=!0
a.a3(0,new A.dB(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.bz(A.n(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.j(r,n)
m.ag(r[n])}p.a+="}"
return!0}}
A.dB.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.G(s,r.a++,a)
B.a.G(s,r.a++,b)},
$S:7}
A.dz.prototype={
gb_(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.dl.prototype={
i(a){return this.ao()}}
A.p.prototype={
ga5(){return A.hh(this)}}
A.br.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bz(s)
return"Assertion failed"}}
A.Z.prototype={}
A.Q.prototype={
gaq(){return"Invalid argument"+(!this.a?"(s)":"")},
gap(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gaq()+q+o
if(!s.a)return n
return n+s.gap()+": "+A.bz(s.gaJ())},
gaJ(){return this.b}}
A.b0.prototype={
gaJ(){return A.ff(this.b)},
gaq(){return"RangeError"},
gap(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.bA.prototype={
gaJ(){return A.v(this.b)},
gaq(){return"RangeError"},
gap(){if(A.v(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.b5.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.c1.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.b4.prototype={
i(a){return"Bad state: "+this.a}}
A.bx.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bz(s)+"."}}
A.b3.prototype={
i(a){return"Stack Overflow"},
ga5(){return null},
$ip:1}
A.dm.prototype={
i(a){return"Exception: "+this.a}}
A.aM.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.c.N(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.f.prototype={
gj(a){var s,r=this.gC(this)
for(s=0;r.t();)++s
return s},
ad(a,b){var s,r
A.hj(b,"index")
s=this.gC(this)
for(r=b;s.t();){if(r===0)return s.gA();--r}throw A.c(A.eI(b,b-r,this,"index"))},
i(a){return A.h7(this,"(",")")}}
A.w.prototype={
gl(a){return A.h.prototype.gl.call(this,0)},
i(a){return"null"}}
A.h.prototype={$ih:1,
M(a,b){return this===b},
gl(a){return A.bW(this)},
i(a){return"Instance of '"+A.bX(this)+"'"},
gm(a){return A.iT(this)},
toString(){return this.i(this)}}
A.cc.prototype={
i(a){return""},
$ia7:1}
A.aA.prototype={
gj(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ihp:1}
A.d2.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.e_.prototype={
$1(a){return this.a.aF(this.b.h("0/?").a(a))},
$S:2}
A.e0.prototype={
$1(a){if(a==null)return this.a.bi(new A.d2(a===undefined))
return this.a.bi(a)},
$S:2}
A.dD.prototype={
bD(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.b.B(a-s,k)
r=a>>>0
a=B.b.B(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.b.B(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.b.B(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.b.B(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.b.B(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.b.B(q-n,k)>>>0
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
s.b=B.b.B(o-n+(q-p)+(m-r),4294967296)>>>0},
ck(){var s,r=this
r.O()
s=r.a
r.O()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992}}
A.R.prototype={
bh(a){var s,r,q=this
a.a=q.b
s=q.c
a.b=s
r=A.cq(q.d,t.L)
a.sbu(r)
a.d=q.e
a.e=q.f
a.f=q.r&&s.gL()},
gaO(){var s,r,q=this,p=q.r?" (dotted quarter)":""
p=A.e([""+q.b+" BPM"+p,q.c.ga4()],t.s)
s=q.e
if(s!==B.f){r=A.ed(" \\(\\d\\)")
p.push(A.fC(s.d,r,""))}if((s.c&1)===0&&q.f>50)p.push("swing "+q.f+"%")
return B.a.K(p," \xb7 ")},
bx(){var s,r,q,p=this,o=p.c.gI(),n=A.e([],t.s)
for(s=p.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)n.push(s[q].b)
return A.eQ(["name",p.a,"bpm",p.b,"meter",o,"levels",n,"sub",p.e.b,"swing",p.f,"dotted",p.r],t.N,t.K)}}
A.e2.prototype={
$6$dotted$sub$swing(a,b,c,d,e,f){var s=A.aV(c)
return new A.R(a,b,s,s.T(),e,f,d)},
$3(a,b,c){return this.$6$dotted$sub$swing(a,b,c,!1,B.f,50)},
$4$sub(a,b,c,d){return this.$6$dotted$sub$swing(a,b,c,!1,d,50)},
$5$sub$swing(a,b,c,d,e){return this.$6$dotted$sub$swing(a,b,c,!1,d,e)},
$4$dotted(a,b,c,d){return this.$6$dotted$sub$swing(a,b,c,d,B.f,50)},
$S:15}
A.I.prototype={
ao(){return"Level."+this.b}}
A.cn.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:16}
A.co.prototype={
$0(){return B.l},
$S:17}
A.ai.prototype={
ao(){return"Voice."+this.b}}
A.C.prototype={
ao(){return"Subdivision."+this.b}}
A.d8.prototype={
$1(a){return t.Y.a(a).b===this.a},
$S:18}
A.d9.prototype={
$0(){return B.f},
$S:19}
A.aU.prototype={
bC(a,b,c){var s,r=this.a
if(r<1||r>32)throw A.c(A.bq(r,"beats","must be 1 to 32"))
s=this.b
if(!B.a.a2(B.n,s))throw A.c(A.bq(s,"unit","must be one of "+A.m(B.n)))
s=this.c
if(B.a.bg(s,new A.cs())||B.a.ce(s,0,new A.ct(),t.S)!==r)throw A.c(A.bq(c,"groups","must add up to "+r))},
gL(){if(this.b>=8){var s=this.a
s=B.b.ah(s,3)===0&&s>3&&B.a.U(this.c,new A.cw())}else s=!1
return s},
gaN(){var s,r,q,p,o,n=A.e([],t.t)
for(s=this.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
B.a.k(n,q)
q+=o}return n},
ga4(){var s=this,r=s.c,q=B.a.U(r,new A.cx())||s.gL(),p=""+s.a,o=""+s.b
return q?p+"/"+o:p+"/"+o+" ("+B.a.K(r,"+")+")"},
gI(){var s=this.c,r=""+this.a,q=""+this.b
return B.a.U(s,new A.cu())?r+"/"+q:r+"/"+q+":"+B.a.K(s,"+")},
T(){var s,r,q,p,o=this.gaN(),n=A.eR(o,A.T(o).c)
o=A.e([],t.a)
for(s=this.a,r=this.c,q=0;q<s;++q){if(q===0)p=B.x
else if(n.a2(0,q))p=B.l
else p=B.a.U(r,new A.cv())?B.l:B.y
o.push(p)}return o},
M(a,b){if(b==null)return!1
return b instanceof A.aU&&b.gI()===this.gI()},
gl(a){return B.c.gl(this.gI())}}
A.cs.prototype={
$1(a){return A.v(a)<1},
$S:1}
A.ct.prototype={
$2(a,b){return A.v(a)+A.v(b)},
$S:20}
A.cw.prototype={
$1(a){return A.v(a)===3},
$S:1}
A.cx.prototype={
$1(a){return A.v(a)===1},
$S:1}
A.cu.prototype={
$1(a){return A.v(a)===1},
$S:1}
A.cv.prototype={
$1(a){return A.v(a)===1},
$S:1}
A.ci.prototype={
c9(a){var s,r,q=this,p=60/q.a,o=q.f&&q.b.gL()?p/3:p,n=q.d.c,m=o/n
if((n&1)!==0||q.e===50)return m
s=m*2
r=B.b.q(q.e,50,75)/100
return(a&1)===0?s*r:s*(1-r)},
cr(a,b){var s,r=this.c
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
sbu(a){this.c=t.B.a(a)}}
A.d7.prototype={
cm(a,b){var s,r,q,p=this
if(!p.a||p.c<1||p.b===0)return a
s=p.b
r=a+s*B.b.bB(b,p.c)
q=p.d
return B.b.q(B.b.E(s>0?B.b.q(r,a,q):B.b.q(r,q,a)),20,300)}}
A.ch.prototype={
br(a){var s,r=this
if(!r.a||r.c<1||r.b<1)return!1
s=r.b
return B.b.ah(a,s+r.c)>=s}}
A.bt.prototype={
i(a){var s=this
return"Click("+B.d.cn(s.a,3)+", "+s.b.i(0)+", bar "+s.c+", cell "+s.d+"."+s.e+")"}}
A.d6.prototype={
aL(){var s,r,q=this
q.d=q.a.a
s=q.r===0&&q.w===0
r=q.f
q.e=s?r:r+1}}
A.da.prototype={
cl(a){var s=this.c
if(s.length!==0&&a-B.a.gbt(s)>2000)B.a.S(s)
B.a.k(s,a)
if(s.length>5)B.a.aK(s,0)
if(s.length<2)return null
return B.b.q(B.d.E(6e4/((B.a.gbt(s)-B.a.gaI(s))/(s.length-1))),20,300)}}
A.dZ.prototype={
$1(a){return this.a.$0()},
$S:21}
A.dd.prototype={
R(){var s=0,r=A.it(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$R=A.iH(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:n.b=!0
m=A.b(v.G.navigator).wakeLock
k=t.m
if(!k.b(m)||n.a!=null){s=1
break}p=4
l=A.bF(A.b(m),"request","screen",null,k)
s=7
return A.hY(A.fA(l,k),$async$R)
case 7:k=b
n.a=k
k.toString
A.o(k,"release",new A.de(n))
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
case 6:case 1:return A.i_(q,r)
case 2:return A.hZ(o.at(-1),r)}})
return A.i0($async$R,r)},
bv(){var s,r
this.b=!1
s=this.a
this.a=null
if(s!=null)try{A.bF(s,"release",null,null,t.X)}catch(r){}}}
A.de.prototype={
$0(){return this.a.a=null},
$S:0}
A.e1.prototype={
$1(a){A.bj(a)
return null},
$S:22}
A.e4.prototype={
$0(){var s,r=A.dK(this.a.getAttribute("data-theme"))==="light",q=r?"Switch to dark theme":"Switch to light theme",p=this.b
p.setAttribute("aria-label",q)
p.setAttribute("title",q)
s=A.a1(p.firstElementChild)
if(s!=null){p=r?"\u263e":"\u2600"
s.textContent=p}},
$S:0}
A.e3.prototype={
$0(){var s=this.a,r=A.dK(s.getAttribute("data-theme"))==="light"?"dark":"light"
s.setAttribute("data-theme",r)
A.U("ds-theme",r)
this.b.$0()},
$S:0}
A.bM.prototype={
gH(){var s,r=this,q=r.d
if(q===$){s=r.a
q=r.d=new A.d6(s,r.b,r.c,s.a)}return q},
gan(){var s,r=this,q=r.aH
if(q===$){s=A.ce(r.gbL())
r.aH!==$&&A.ez()
r.aH=s
q=s}return q},
cs(){var s,r,q=this,p="input",o="change",n="click"
q.bY()
q.bP()
q.bH()
A.o(q.f,p,new A.cL(q))
s=q.e
A.o(s,p,new A.cM(q))
A.o(s,o,new A.cN(q))
s=t.m
A.o(A.d("bpm-down",s),n,new A.cV(q))
A.o(A.d("bpm-up",s),n,new A.cW(q))
A.o(A.d("bpm-down-5",s),n,new A.cX(q))
A.o(A.d("bpm-up-5",s),n,new A.cY(q))
A.o(q.x,n,q.gco())
A.o(A.d("tap",s),n,q.gc4())
r=q.gbS()
A.o(q.as,o,r)
A.o(q.at,o,r)
A.o(q.ax,o,new A.cZ(q))
A.o(q.cx,o,new A.d_(q))
A.o(A.d("reset-accents",s),n,new A.d0(q))
A.o(q.cy,o,new A.d1(q))
A.o(q.dx,p,new A.cO(q))
A.o(q.fr,o,new A.cP(q))
A.o(q.fx,p,new A.cQ(q))
A.o(q.fy,p,new A.cR(q))
s=v.G
if("vibrate" in A.b(s.navigator)){q.go.hidden=!1
A.o(q.id,o,new A.cS(q))}A.o(q.k1,o,new A.cT(q))
q.c7()
q.c6()
q.c5()
A.b(s.document).addEventListener("visibilitychange",A.ce(new A.cU(q)))
q.b7()},
bP(){var s,r,q,p,o,n,m="option"
for(s=this.as,r=1;r<=32;++r){q=""+r
p=A.L(m,null,q)
p.setAttribute("value",q)
s.appendChild(p)}for(s=this.at,o=0;o<4;++o){q=""+B.n[o]
p=A.L(m,null,q)
p.setAttribute("value",q)
s.appendChild(p)}for(s=this.cy,o=0;o<8;++o){n=B.A[o]
q=A.L(m,null,n.d)
q.setAttribute("value",n.b)
s.appendChild(q)}},
bH(){var s,r,q,p,o,n
for(s=["4/4","3/4","2/4","5/4","6/8","7/8","9/8","12/8"],r=s.length,q=this.ch,p=0;p<r;++p){o=s[p]
n=A.L("button","chip",o)
n.setAttribute("type","button")
n.setAttribute("aria-label","Time signature "+o)
A.o(n,"click",new A.cA(this,o))
q.appendChild(n)}},
u(a){var s=B.c.a_(B.c.a_(a)),r=A.ec(s,null)
if(r==null)r=A.hi(s)
return r==null?null:B.d.E(r)},
b6(a,b){var s=this.a
s.a=B.b.q(B.b.E(a),20,300)
this.gH().aL()
this.b9(b)
A.U("ds-last",A.a2(A.e([A.a6("last",s)],t.e)))},
F(a){return this.b6(a,!1)},
b9(a){var s,r=this,q=r.a,p=r.bm=q.a,o=""+p
r.f.value=o
if(!a)r.e.value=o
r.w.textContent=A.j6(p)
if(q.f&&q.b.gL())s="dotted quarter"
else{switch(q.b.b){case 2:q="half note"
break
case 4:q="quarter note"
break
case 8:q="eighth note"
break
default:q="sixteenth note"
break}s=q}r.r.textContent="Beats per minute, counting each "+s},
P(){return this.b9(!1)},
bb(){var s=this,r=v.G,q=s.cc.cl(A.O(A.b(r.performance).now())),p=s.bn
if(p!=null)r.clearTimeout(p)
if(q==null){s.v("Tap again in time with the beat.")
return}s.F(q)
s.bn=A.v(r.setTimeout(A.cd(new A.cH(s)),900))},
bT(){var s,r=this,q=r.u(A.n(r.as.value))
if(q==null)q=4
s=r.u(A.n(r.at.value))
r.aA(A.ah(q,s==null?4:s,null))},
aA(a){var s=this,r=s.a,q=a.a===r.b.a&&B.a.K(a.c,"+")===B.a.K(r.b.c,"+")
if(!a.gL())r.f=!1
if(!q)r.c=a.T()
r.b=a
s.b8()
s.aj()
s.P()
A.U("ds-last",A.a2(A.e([A.a6("last",r)],t.e)))},
b8(){var s,r,q,p,o,n,m,l=this,k=l.a,j=k.b,i=j.a,h=""+i
l.as.value=h
s=j.b
r=""+s
l.at.value=r
q=A.iV(i,s)
l.ay.hidden=q.length<2
s=l.ax
s.replaceChildren()
for(i=q.length,p=0;p<q.length;q.length===i||(0,A.P)(q),++p){o=q[p]
n=o.c
n=A.L("option",null,B.a.U(n,new A.cG())?"Every beat":B.a.K(n," + "))
n.setAttribute("value",o.gI())
s.appendChild(n)}s.value=j.gI()
l.CW.hidden=!j.gL()
l.cx.checked=k.f
for(k=A.fg(l.ch),i=k.length,r=h+"/"+r,p=0;p<k.length;k.length===i||(0,A.P)(k),++p){m=k[p]
if(A.n(m.textContent)===r){h=j.gI()
s=A.aV(r)
h=h===(s==null?null:s.gI())}else h=!1
m.setAttribute("aria-pressed",""+h)}},
aj(){var s,r,q,p,o,n,m,l,k=this,j=null,i="span",h=k.Q
h.replaceChildren()
s=k.ae
B.a.S(s)
r=k.a
q=r.b.gaN()
p=A.eR(q,A.T(q).c)
o=!B.a.U(r.b.c,new A.cy())
for(n=0;n<r.b.a;n=l){m=A.L("button","cell",j)
m.setAttribute("type","button")
if(o&&p.a2(0,n)&&n>0)A.b(m.classList).add("group-start")
l=n+1
m.appendChild(A.L(i,"cell-num",""+l))
q=A.L(i,"cell-mark",j)
q.setAttribute("aria-hidden","true")
m.appendChild(q)
m.appendChild(A.L(i,"cell-level",j))
A.o(m,"click",new A.cz(k,n))
h.appendChild(m)
B.a.k(s,m)
k.aZ(n)}k.a9(j)},
aZ(a){var s,r,q,p,o,n=this.a.c
if(!(a<n.length))return A.j(n,a)
s=n[a]
n=this.ae
if(!(a<n.length))return A.j(n,a)
r=n[a]
for(q=0;q<4;++q){p=B.o[q]
A.y(A.b(r.classList).toggle("lv-"+p.b,p===s))}n=A.fg(r)
if(2>=n.length)return A.j(n,2)
o=s.c
n[2].textContent=o
r.setAttribute("aria-label","Beat "+(a+1)+", "+o+". Press to change.")},
aC(){var s,r=this,q=r.a
r.cy.value=q.d.b
r.db.hidden=(q.d.c&1)!==0
r.dx.value=""+q.e
s=q.e
A:{if(50===s){q="Straight (50%)"
break A}if(s>=66&&s<=68){q="Triplet swing ("+s+"%)"
break A}if(75===s){q="Dotted feel (75%)"
break A}q=""+s+"%"
break A}r.dy.textContent=q},
c7(){var s,r,q=t.m,p=A.d("speed-on",q),o=A.d("speed-step",q),n=A.d("speed-every",q),m=A.d("speed-target",q),l=A.d("gap-on",q),k=A.d("gap-play",q),j=A.d("gap-mute",q),i=new A.cK(this,p,o,n,m,l,k,j)
for(q=[p,o,n,m,l,k,j],s=q.length,r=0;r<s;++r)A.o(q[r],"change",i)
i.$0()},
c6(){var s,r,q,p=this
p.J=A.ft(A.ev("ds-presets"))
A.d("preset-form",t.m).addEventListener("submit",A.ce(new A.cJ(p)))
for(s=A.j5(),r=p.ok,q=0;q<7;++q)r.appendChild(p.b1(s[q],!0))
p.aB()},
c_(){var s,r,q=this,p={},o=q.p1,n=A.eb(A.n(o.value))
p.a=n
if(n.length===0){s=q.a
p.a=""+s.a+" BPM "+s.b.ga4()}r=B.a.bg(q.J,new A.cE(p))
s=A.j9(q.J,A.a6(p.a,q.a))
q.J=s
A.U("ds-presets",A.a2(s))
o.value=""
q.aB()
p=p.a
q.v(r?"Updated \u201c"+p+"\u201d.":"Saved \u201c"+p+"\u201d.")},
aB(){var s,r,q,p=this,o=p.k3
o.replaceChildren()
for(s=p.J,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)o.appendChild(p.bV(s[q]))
p.k4.hidden=p.J.length!==0},
b1(a,b){var s,r,q=A.L("li","preset",null),p=A.L("button","preset-load",null)
p.setAttribute("type","button")
s=a.a
p.appendChild(A.L("span","preset-name",s))
p.appendChild(A.L("span","preset-sum",a.gaO()))
A.o(p,"click",new A.cC(this,a))
q.appendChild(p)
if(!b){r=A.L("button","preset-del","\xd7")
r.setAttribute("type","button")
r.setAttribute("aria-label","Delete \u201c"+s+"\u201d")
A.o(r,"click",new A.cD(this,a))
q.appendChild(r)}return q},
bV(a){return this.b1(a,!1)},
bY(){var s,r,q,p,o,n,m,l,k,j=this,i=A.ft(A.ev("ds-last"))
if(i.length!==0)B.a.gaI(i).bh(j.a)
try{l=A.ev("ds-prefs")
s=B.j.bj(l==null?"{}":l,null)
if(s instanceof A.F){r=s.n(0,"sound")
q=null
if(typeof r=="string"){q=r
l=B.a.a2(B.O,q)}else l=!1
if(l)j.p2=q
p=s.n(0,"volume")
o=null
if(typeof p=="number"){o=p
j.p3=J.eB(o,0,1)}n=s.n(0,"subVolume")
m=null
if(typeof n=="number"){m=n
j.p4=J.eB(m,0,1)}j.R8=J.ac(s.n(0,"haptics"),!0)
j.RG=J.ac(s.n(0,"bigFlash"),!0)}}catch(k){if(!(A.X(k) instanceof A.aM))throw k}},
a0(){var s=this
return A.U("ds-prefs",B.j.bk(A.eQ(["sound",s.p2,"volume",s.p3,"subVolume",s.p4,"haptics",s.R8,"bigFlash",s.RG],t.N,t.K),null))},
b7(){var s=this
s.b8()
s.aj()
s.aC()
s.P()
s.fr.value=s.p2
s.fx.value=""+B.d.E(s.p3*100)
s.fy.value=""+B.d.E(s.p4*100)
s.id.checked=s.R8
s.k1.checked=s.RG},
c5(){A.b(v.G.document).addEventListener("keydown",A.ce(new A.cI(this)))},
cp(){var s,r,q,p,o,n,m,l,k=this
if(k.x1){k.x1=!1
s=k.y1
if(s!=null)v.G.clearInterval(s)
r=k.y2
if(r!=null)v.G.cancelAnimationFrame(r)
q=k.ry
if(q!=null)q.disconnect()
k.ry=null
q=k.rx
if(q!=null)A.b(q.suspend())
B.a.S(k.V)
k.W.bv()
q=k.a
p=q.a
o=k.b
if(o.a)q.a=k.gH().d
k.a9(null)
q=k.x
q.textContent="Start"
q.setAttribute("aria-pressed","false")
A.y(A.b(q.classList).toggle("is-running",!1))
k.P()
k.v(o.a?"Stopped. You reached "+p+" BPM.":"Stopped.")}else{n=k.rx
if(n==null)n=k.rx=A.b(new v.G.AudioContext())
A.ex()
A.b(n.resume())
q=A.b(n.createGain())
A.b(q.connect(A.b(n.destination)))
k.ry=q
A.b(q.gain).value=k.p3
k.x1=!0
q=k.gH()
q.x=q.f=q.r=q.w=q.e=0
q.d=q.a.a
B.a.S(k.V)
k.xr=null
k.x2=A.O(n.currentTime)+0.08
k.aD()
q=v.G
m=k.X
if(m===$){l=A.cd(k.gbe())
k.X!==$&&A.ez()
k.X=l
m=l}k.y1=A.v(q.setInterval(m,25))
k.y2=A.v(q.requestAnimationFrame(k.gan()))
q=k.x
q.textContent="Stop"
q.setAttribute("aria-pressed","true")
A.y(A.b(q.classList).toggle("is-running",!0))
k.W.R()
q=k.a
k.v("Playing at "+q.a+" BPM, "+q.b.ga4()+".")}return null},
c2(){var s,r,q,p=this,o=p.rx
if(o==null)o=p.rx=A.b(new v.G.AudioContext())
A.ex()
A.b(o.resume())
s=A.b(o.createGain())
A.b(s.connect(A.b(o.destination)))
p.ry=s
A.b(s.gain).value=p.p3
p.x1=!0
s=p.gH()
s.x=s.f=s.r=s.w=s.e=0
s.d=s.a.a
B.a.S(p.V)
p.xr=null
p.x2=A.O(o.currentTime)+0.08
p.aD()
s=v.G
r=p.X
if(r===$){q=A.cd(p.gbe())
p.X!==$&&A.ez()
p.X=q
r=q}p.y1=A.v(s.setInterval(r,25))
p.y2=A.v(s.requestAnimationFrame(p.gan()))
s=p.x
s.textContent="Stop"
s.setAttribute("aria-pressed","true")
A.y(A.b(s.classList).toggle("is-running",!0))
p.W.R()
s=p.a
p.v("Playing at "+s.a+" BPM, "+s.b.ga4()+".")},
c3(){var s,r,q,p,o,n=this
n.x1=!1
s=n.y1
if(s!=null)v.G.clearInterval(s)
r=n.y2
if(r!=null)v.G.cancelAnimationFrame(r)
q=n.ry
if(q!=null)q.disconnect()
n.ry=null
q=n.rx
if(q!=null)A.b(q.suspend())
B.a.S(n.V)
n.W.bv()
q=n.a
p=q.a
o=n.b
if(o.a)q.a=n.gH().d
n.a9(null)
q=n.x
q.textContent="Start"
q.setAttribute("aria-pressed","false")
A.y(A.b(q.classList).toggle("is-running",!1))
n.P()
n.v(o.a?"Stopped. You reached "+p+" BPM.":"Stopped.")},
aD(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.rx,f=h.ry
if(!h.x1||g==null||f==null)return
s=A.y(A.b(v.G.document).hidden)?1.5:0.12
for(r=h.V;;){q=h.xr
if(q==null){p=h.gH()
o=p.r
n=p.a
if(o>=n.b.a){o=p.w=p.r=0;++p.f}m=p.w
if(m>=n.d.c)m=p.w=0
if(o===0&&m===0&&p.b.a)n.a=p.b.cm(p.d,p.f-p.e)
l=p.c.br(p.f)?B.h:n.cr(p.r,p.w)
o=p.x
m=p.f
k=p.r
j=p.w
q=new A.bt(o,l,m,k,j,n.a)
p.x=o+n.c9(j)
if(++p.w>=n.d.c){p.w=0
if(++p.r>=n.b.a){p.r=0;++p.f}}}p=h.x2
o=q.a
i=p+o
if(i<A.O(g.currentTime)){p+=A.O(g.currentTime)+0.05-i
h.x2=p
i=p+o}if(i>=A.O(g.currentTime)+s){h.xr=q
break}h.xr=null
h.aw(g,f,q.b,i)
B.a.k(r,new A.bb(i,q))}while(r.length>128)B.a.aK(r,0)},
aw(a,b,c,d){var s,r,q,p,o,n,m,l=this
switch(c.a){case 0:s=1
break
case 1:s=0.6
break
case 2:s=0.24
break
case 3:s=0.36*l.p4
break
case 4:s=0
break
default:s=null}if(s<0.005)return
r=c===B.i
q=c===B.u
switch(l.p2){case"beep":if(r)p=1760
else p=q?880:1320
l.ac(a,b,"sine",p,s,d,0.05)
break
case"cowbell":if(r)o=1.25
else o=q?0.85:1
n=A.b(a.createBiquadFilter())
n.type="bandpass"
A.b(n.connect(b))
A.b(n.frequency).value=2400*o
A.b(n.Q).value=1.2
s*=0.5
l.ac(a,n,"square",540*o,s,d,0.14)
l.ac(a,n,"square",800*o,s,d,0.14)
break
case"stick":if(r)p=3200
else p=q?1800:2500
l.aY(a,b,p,s*1.4,d)
break
default:if(r)m=1250
else m=q?760:950
n=A.b(a.createBiquadFilter())
n.type="bandpass"
A.b(n.connect(b))
A.b(n.frequency).value=m
A.b(n.Q).value=6
l.ac(a,n,"triangle",m,s*2.2,d,0.04)
l.aY(a,b,m*2,s*0.25,d)}},
ac(a,b,c,d,e,f,g){var s,r,q,p=A.b(a.createOscillator())
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
aY(a,b,c,d,e){var s,r,q,p,o=this.to
if(o==null)o=this.to=this.bR(a)
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
bR(a){var s,r,q=B.d.E(A.O(a.sampleRate)*0.05),p=A.b(a.createBuffer(1,q,A.O(a.sampleRate))),o=t.E.a(p.getChannelData(0)),n=new A.dD()
n.bD(7)
for(s=0;s<q;++s){r=n.ck()
o.$flags&2&&A.cf(o)
if(!(s<o.length))return A.j(o,s)
o[s]=r*2-1}return p},
bM(a){var s,r,q,p,o=this
A.O(a)
s=o.rx
if(!o.x1||s==null)return
r=o.V
q=null
for(;;){if(!(r.length!==0&&B.a.gaI(r).a<=A.O(s.currentTime)))break
p=B.a.aK(r,0).b
if(p.e===0)q=p}if(q!=null)o.a9(q)
o.y2=A.v(v.G.requestAnimationFrame(o.gan()))},
a9(a){var s,r,q,p,o,n=this,m=a==null,l=m?null:a.d
if(l==null)l=-1
if(m){for(m=n.ae,s=m.length,r=0;r<m.length;m.length===s||(0,A.P)(m),++r)A.y(A.b(m[r].classList).toggle("is-on",!1))
n.y.className="flash"
n.z.textContent="Not playing"
return}for(m=n.ae,q=0;q<m.length;++q)A.y(A.b(m[q].classList).toggle("is-on",q===l))
m=a.c
s=""+(m+1)
m=n.c.br(m)?"Bar "+s+" \xb7 silent: keep the time going":"Bar "+s+" \xb7 Beat "+(l+1)+" of "+n.a.b.a
n.z.textContent=m
p=a.b
A:{if(B.i===p){m="is-accent"
break A}if(B.t===p||B.u===p){m="is-normal"
break A}if(B.C===p){m="is-ghost"
break A}if(B.h===p){m="is-silent"
break A}m=null}s=n.RG&&p!==B.h?" is-big":""
n.y.className="flash "+m+s
o=n.bl
if(o!=null)v.G.clearTimeout(o)
m=v.G
n.bl=A.v(m.setTimeout(A.cd(new A.cB(n)),90))
if(n.R8&&p!==B.h)A.ja(p===B.i?45:20)
if(a.f!==n.bm&&A.a1(A.b(m.document).activeElement)!==n.e)n.P()},
v(a){this.k2.textContent=a
return a},
b5(a){var s=this.bo
if(s!=null)v.G.clearTimeout(s)
this.bo=A.v(v.G.setTimeout(A.cd(new A.cF(this,a)),600))}}
A.cL.prototype={
$0(){var s=this.a,r=s.u(A.n(s.f.value))
return s.F(r==null?s.a.a:r)},
$S:0}
A.cM.prototype={
$0(){var s=this.a,r=s.u(A.n(s.e.value))
if(r!=null&&r>=20&&r<=300)s.b6(r,!0)},
$S:0}
A.cN.prototype={
$0(){var s=this.a,r=s.u(A.n(s.e.value))
return s.F(r==null?s.a.a:r)},
$S:0}
A.cV.prototype={
$0(){var s=this.a
return s.F(s.a.a+-1)},
$S:0}
A.cW.prototype={
$0(){var s=this.a
return s.F(s.a.a+1)},
$S:0}
A.cX.prototype={
$0(){var s=this.a
return s.F(s.a.a+-5)},
$S:0}
A.cY.prototype={
$0(){var s=this.a
return s.F(s.a.a+5)},
$S:0}
A.cZ.prototype={
$0(){var s=this.a,r=A.aV(A.n(s.ax.value))
if(r!=null)s.aA(r)},
$S:0}
A.d_.prototype={
$0(){var s=this.a,r=s.a
r.f=A.y(s.cx.checked)
s.P()
A.U("ds-last",A.a2(A.e([A.a6("last",r)],t.e)))},
$S:0}
A.d0.prototype={
$0(){var s=this.a,r=s.a
r.sbu(r.b.T())
s.aj()
A.U("ds-last",A.a2(A.e([A.a6("last",r)],t.e)))
s.v("Accents reset.")},
$S:0}
A.d1.prototype={
$0(){var s=this.a,r=s.a
r.d=A.f0(A.n(s.cy.value))
s.aC()
A.U("ds-last",A.a2(A.e([A.a6("last",r)],t.e)))},
$S:0}
A.cO.prototype={
$0(){var s=this.a,r=s.a,q=s.u(A.n(s.dx.value))
r.e=q==null?50:q
s.aC()
A.U("ds-last",A.a2(A.e([A.a6("last",r)],t.e)))},
$S:0}
A.cP.prototype={
$0(){var s,r,q,p=this.a
p.p2=A.n(p.fr.value)
p.a0()
if(!p.x1){s=p.rx
if(s==null)s=p.rx=A.b(new v.G.AudioContext())
A.ex()
A.b(s.resume())
r=A.b(s.createGain())
A.b(r.connect(A.b(s.destination)))
A.b(r.gain).value=p.p3
q=A.O(s.currentTime)+0.05
p.aw(s,r,B.i,q)
p.aw(s,r,B.t,q+0.25)}},
$S:0}
A.cQ.prototype={
$0(){var s,r=this.a,q=r.u(A.n(r.fx.value))
q=(q==null?80:q)/100
r.p3=q
s=r.ry
if(s!=null)A.b(s.gain).value=q
r.a0()},
$S:0}
A.cR.prototype={
$0(){var s=this.a,r=s.u(A.n(s.fy.value))
s.p4=(r==null?60:r)/100
s.a0()},
$S:0}
A.cS.prototype={
$0(){var s=this.a
s.R8=A.y(s.id.checked)
s.a0()},
$S:0}
A.cT.prototype={
$0(){var s=this.a
s.RG=A.y(s.k1.checked)
s.a0()},
$S:0}
A.cU.prototype={
$1(a){var s
if(!A.y(A.b(v.G.document).hidden)){s=this.a
s=s.x1&&s.W.b}else s=!1
if(s)this.a.W.R()},
$S:24}
A.cA.prototype={
$0(){var s=this.a,r=this.b,q=A.aV(r)
q.toString
s.aA(q)
s.v("Time signature "+A.aV(r).ga4()+".")},
$S:0}
A.cH.prototype={
$0(){var s=this.a
return s.v("Tempo set to "+s.a.a+" BPM.")},
$S:0}
A.cG.prototype={
$1(a){return A.v(a)===1},
$S:1}
A.cy.prototype={
$1(a){return A.v(a)===1},
$S:1}
A.cz.prototype={
$0(){var s=this.a,r=s.a,q=r.c,p=this.b
if(!(p<q.length))return A.j(q,p)
B.a.G(q,p,B.o[(q[p].a+1)%4])
s.aZ(p)
A.U("ds-last",A.a2(A.e([A.a6("last",r)],t.e)))
r=r.c
if(!(p<r.length))return A.j(r,p)
s.v("Beat "+(p+1)+": "+r[p].c+".")},
$S:0}
A.cK.prototype={
$0(){var s,r=this,q=r.a,p=q.b
p.a=A.y(r.b.checked)
s=q.u(A.n(r.c.value))
p.b=B.b.q(s==null?4:s,-50,50)
s=q.u(A.n(r.d.value))
p.c=B.b.q(s==null?4:s,1,64)
s=q.u(A.n(r.e.value))
p.d=B.b.q(B.b.E(s==null?140:s),20,300)
p=q.c
p.a=A.y(r.f.checked)
s=q.u(A.n(r.r.value))
p.b=B.b.q(s==null?2:s,1,64)
s=q.u(A.n(r.w.value))
p.c=B.b.q(s==null?2:s,1,64)
q.gH().aL()},
$S:0}
A.cJ.prototype={
$1(a){A.b(a).preventDefault()
this.a.c_()},
$S:8}
A.cE.prototype={
$1(a){return t.r.a(a).a.toLowerCase()===this.a.a.toLowerCase()},
$S:25}
A.cC.prototype={
$0(){var s=this.b,r=this.a,q=r.a
s.bh(q)
r.gH().aL()
r.b7()
A.U("ds-last",A.a2(A.e([A.a6("last",q)],t.e)))
r.v("Loaded \u201c"+s.a+"\u201d: "+s.gaO()+".")},
$S:0}
A.cD.prototype={
$0(){var s,r,q,p,o,n=this.a,m=A.e([],t.e)
for(s=n.J,r=s.length,q=this.b.a,p=0;p<s.length;s.length===r||(0,A.P)(s),++p){o=s[p]
if(o.a!==q)m.push(o)}n.J=m
A.U("ds-presets",A.a2(m))
n.aB()
n.v("Deleted \u201c"+q+"\u201d.")
n.p1.focus()},
$S:0}
A.cI.prototype={
$1(a){var s,r,q,p,o,n,m=this
A.b(a)
if(A.y(a.ctrlKey)||A.y(a.metaKey)||A.y(a.altKey))return
s=A.a1(a.target)
r=s==null?null:A.n(s.tagName)
if(r==null)r=""
s=!(r==="INPUT"||r==="SELECT"||r==="TEXTAREA")
q=!s||r==="BUTTON"||r==="A"||r==="SUMMARY"
A:{p=A.n(a.key)
if(" "===p&&!q){a.preventDefault()
s=m.a
if(s.x1)s.c3()
else s.c2()
break A}if("ArrowUp"===p&&s){a.preventDefault()
s=m.a
o=A.y(a.shiftKey)?10:1
n=s.a
s.F(n.a+o)
s.b5(""+n.a+" BPM")
break A}if("ArrowDown"===p&&s){a.preventDefault()
s=m.a
o=A.y(a.shiftKey)?-10:-1
n=s.a
s.F(n.a+o)
s.b5(""+n.a+" BPM")
break A}if(("t"===p||"T"===p)&&s&&!A.y(a.repeat))m.a.bb()}},
$S:8}
A.cB.prototype={
$0(){return A.b(this.a.y.classList).add("is-fading")},
$S:0}
A.cF.prototype={
$0(){return this.a.v(this.b)},
$S:0}
A.dT.prototype={
$2(a,b){var s,r,q,p,o,n
t.V.a(b)
s=this.a
if(s.a>=12)return
if(a===0){s.k(0,B.a.K(b,"+"))
return}for(s=[2,3],r=s.length,q=t.S,p=0;p<r;++p){o=s[p]
if(o<=a&&a-o!==1){n=A.cq(b,q)
n.push(o)
this.$2(a-o,n)}}},
$S:26};(function aliases(){var s=J.a5.prototype
s.bA=s.i})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
s(A,"iJ","hv",3)
s(A,"iK","hw",3)
s(A,"iL","hx",3)
r(A,"fr","iC",0)
s(A,"iN","i4",4)
var o
q(o=A.bM.prototype,"gc4","bb",0)
q(o,"gbS","bT",0)
q(o,"gco","cp",0)
q(o,"gbe","aD",0)
p(o,"gbL","bM",23)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.h,null)
q(A.h,[A.e9,J.bB,A.b1,J.ar,A.p,A.d5,A.f,A.av,A.G,A.al,A.db,A.d3,A.aL,A.bd,A.a3,A.F,A.cp,A.bK,A.bG,A.dC,A.S,A.c7,A.dH,A.dF,A.c3,A.M,A.c5,A.a0,A.z,A.c4,A.cb,A.df,A.b2,A.ca,A.aD,A.r,A.bw,A.by,A.dA,A.dl,A.b3,A.dm,A.aM,A.w,A.cc,A.aA,A.d2,A.dD,A.R,A.aU,A.ci,A.d7,A.ch,A.bt,A.d6,A.da,A.dd,A.bM])
q(J.bB,[J.bD,J.aO,J.aQ,J.aP,J.aR,J.at,J.au])
q(J.aQ,[J.a5,J.q,A.ax,A.aY])
q(J.a5,[J.bV,J.aB,J.a4])
r(J.bC,A.b1)
r(J.cj,J.q)
q(J.at,[J.aN,J.bE])
q(A.p,[A.bJ,A.Z,A.bH,A.c2,A.bZ,A.c6,A.aT,A.br,A.Q,A.b5,A.c1,A.b4,A.bx])
r(A.aK,A.f)
q(A.aK,[A.ag,A.af])
r(A.aE,A.al)
r(A.bb,A.aE)
r(A.b_,A.Z)
q(A.a3,[A.bu,A.bv,A.c0,A.dU,A.dW,A.di,A.dh,A.dL,A.dw,A.e_,A.e0,A.e2,A.cn,A.d8,A.cs,A.cw,A.cx,A.cu,A.cv,A.dZ,A.e1,A.cU,A.cG,A.cy,A.cJ,A.cE,A.cI])
q(A.c0,[A.c_,A.as])
q(A.F,[A.aS,A.c8])
q(A.bv,[A.dV,A.dM,A.dP,A.dx,A.cr,A.dB,A.ct,A.dT])
q(A.aY,[A.bN,A.az])
q(A.az,[A.b7,A.b9])
r(A.b8,A.b7)
r(A.aW,A.b8)
r(A.ba,A.b9)
r(A.aX,A.ba)
q(A.aW,[A.ay,A.bO])
q(A.aX,[A.bP,A.bQ,A.bR,A.bS,A.bT,A.aZ,A.bU])
r(A.be,A.c6)
q(A.bu,[A.dj,A.dk,A.dG,A.dn,A.ds,A.dr,A.dq,A.dp,A.dv,A.du,A.dt,A.dg,A.dO,A.co,A.d9,A.de,A.e4,A.e3,A.cL,A.cM,A.cN,A.cV,A.cW,A.cX,A.cY,A.cZ,A.d_,A.d0,A.d1,A.cO,A.cP,A.cQ,A.cR,A.cS,A.cT,A.cA,A.cH,A.cz,A.cK,A.cC,A.cD,A.cB,A.cF])
r(A.b6,A.c5)
r(A.bc,A.b2)
r(A.aj,A.bc)
r(A.c9,A.ag)
r(A.bI,A.aT)
r(A.ck,A.bw)
q(A.by,[A.cm,A.cl])
r(A.dz,A.dA)
q(A.Q,[A.b0,A.bA])
q(A.dl,[A.I,A.ai,A.C])
s(A.b7,A.r)
s(A.b8,A.G)
s(A.b9,A.r)
s(A.ba,A.G)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",l:"double",aq:"num",x:"String",E:"bool",w:"Null",i:"List",h:"Object",bL:"Map",t:"JSObject"},mangledNames:{},types:["~()","E(a)","~(@)","~(~())","@(@)","w(@)","w()","~(h?,h?)","w(t)","@(@,x)","@(x)","w(~())","w(@,a7)","~(a,@)","w(h,a7)","R(x,a,x{dotted:E,sub:C,swing:a})","E(I)","I()","E(C)","C()","a(a,a)","~(h?)","w(h)","~(l)","w(h?)","E(R)","~(a,i<a>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.bb&&a.b(c.a)&&b.b(c.b)}}
A.hQ(v.typeUniverse,JSON.parse('{"bV":"a5","aB":"a5","a4":"a5","jg":"ax","bD":{"E":[],"k":[]},"aO":{"k":[]},"aQ":{"t":[]},"a5":{"t":[]},"q":{"i":["1"],"t":[],"f":["1"]},"bC":{"b1":[]},"cj":{"q":["1"],"i":["1"],"t":[],"f":["1"]},"at":{"l":[],"aq":[]},"aN":{"l":[],"a":[],"aq":[],"k":[]},"bE":{"l":[],"aq":[],"k":[]},"au":{"x":[],"d4":[],"k":[]},"bJ":{"p":[]},"aK":{"f":["1"]},"ag":{"f":["1"]},"bb":{"aE":[],"al":[]},"b_":{"Z":[],"p":[]},"bH":{"p":[]},"c2":{"p":[]},"bd":{"a7":[]},"a3":{"ad":[]},"bu":{"ad":[]},"bv":{"ad":[]},"c0":{"ad":[]},"c_":{"ad":[]},"as":{"ad":[]},"bZ":{"p":[]},"aS":{"F":["1","2"],"eP":["1","2"],"bL":["1","2"],"F.K":"1","F.V":"2"},"af":{"f":["1"]},"aE":{"al":[]},"bG":{"hl":[],"d4":[]},"ay":{"r":["l"],"i":["l"],"H":["l"],"t":[],"f":["l"],"G":["l"],"k":[],"r.E":"l"},"ax":{"t":[],"k":[]},"aY":{"t":[]},"bN":{"t":[],"k":[]},"az":{"H":["1"],"t":[]},"aW":{"r":["l"],"i":["l"],"H":["l"],"t":[],"f":["l"],"G":["l"]},"aX":{"r":["a"],"i":["a"],"H":["a"],"t":[],"f":["a"],"G":["a"]},"bO":{"r":["l"],"i":["l"],"H":["l"],"t":[],"f":["l"],"G":["l"],"k":[],"r.E":"l"},"bP":{"r":["a"],"i":["a"],"H":["a"],"t":[],"f":["a"],"G":["a"],"k":[],"r.E":"a"},"bQ":{"r":["a"],"i":["a"],"H":["a"],"t":[],"f":["a"],"G":["a"],"k":[],"r.E":"a"},"bR":{"r":["a"],"i":["a"],"H":["a"],"t":[],"f":["a"],"G":["a"],"k":[],"r.E":"a"},"bS":{"r":["a"],"i":["a"],"H":["a"],"t":[],"f":["a"],"G":["a"],"k":[],"r.E":"a"},"bT":{"r":["a"],"i":["a"],"H":["a"],"t":[],"f":["a"],"G":["a"],"k":[],"r.E":"a"},"aZ":{"r":["a"],"i":["a"],"H":["a"],"t":[],"f":["a"],"G":["a"],"k":[],"r.E":"a"},"bU":{"r":["a"],"i":["a"],"H":["a"],"t":[],"f":["a"],"G":["a"],"k":[],"r.E":"a"},"c6":{"p":[]},"be":{"Z":[],"p":[]},"M":{"p":[]},"b6":{"c5":["1"]},"z":{"ae":["1"]},"aj":{"f":["1"]},"F":{"bL":["1","2"]},"b2":{"f":["1"]},"bc":{"f":["1"]},"c8":{"F":["x","@"],"bL":["x","@"],"F.K":"x","F.V":"@"},"c9":{"ag":["x"],"f":["x"],"ag.E":"x"},"aT":{"p":[]},"bI":{"p":[]},"l":{"aq":[]},"a":{"aq":[]},"i":{"f":["1"]},"x":{"d4":[]},"br":{"p":[]},"Z":{"p":[]},"Q":{"p":[]},"b0":{"p":[]},"bA":{"p":[]},"b5":{"p":[]},"c1":{"p":[]},"b4":{"p":[]},"bx":{"p":[]},"b3":{"p":[]},"cc":{"a7":[]},"aA":{"hp":[]},"h6":{"i":["a"],"f":["a"]},"ht":{"i":["a"],"f":["a"]},"hs":{"i":["a"],"f":["a"]},"h4":{"i":["a"],"f":["a"]},"hq":{"i":["a"],"f":["a"]},"h5":{"i":["a"],"f":["a"]},"hr":{"i":["a"],"f":["a"]},"h2":{"i":["l"],"f":["l"]},"h3":{"i":["l"],"f":["l"]}}'))
A.hP(v.typeUniverse,JSON.parse('{"aK":1,"az":1,"b2":1,"bc":1,"bw":2,"by":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.dR
return{n:s("M"),C:s("p"),Z:s("ad"),U:s("f<@>"),O:s("q<t>"),a:s("q<I>"),J:s("q<bL<x,h>>"),b:s("q<aU>"),f:s("q<h>"),e:s("q<R>"),c:s("q<+(l,bt)>"),s:s("q<x>"),w:s("q<l>"),q:s("q<@>"),t:s("q<a>"),T:s("aO"),m:s("t"),g:s("a4"),p:s("H<@>"),L:s("I"),B:s("i<I>"),j:s("i<@>"),V:s("i<a>"),E:s("ay"),P:s("w"),K:s("h"),r:s("R"),W:s("jh"),d:s("+()"),l:s("a7"),N:s("x"),Y:s("C"),k:s("k"),h:s("Z"),D:s("aB"),_:s("z<@>"),y:s("E"),x:s("E(h)"),i:s("l"),z:s("@"),G:s("@()"),v:s("@(h)"),Q:s("@(h,a7)"),S:s("a"),bc:s("ae<w>?"),aQ:s("t?"),aL:s("i<@>?"),X:s("h?"),aD:s("x?"),F:s("a0<@,@>?"),R:s("ca?"),u:s("E?"),I:s("l?"),a3:s("a?"),ae:s("aq?"),o:s("aq"),H:s("~"),M:s("~()"),cQ:s("~(x,@)"),A:s("~(a,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.J=J.bB.prototype
B.a=J.q.prototype
B.b=J.aN.prototype
B.d=J.at.prototype
B.c=J.au.prototype
B.K=J.a4.prototype
B.L=J.aQ.prototype
B.B=J.bV.prototype
B.r=J.aB.prototype
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

B.j=new A.ck()
B.m=new A.d5()
B.e=new A.df()
B.k=new A.cc()
B.M=new A.cl(null)
B.N=new A.cm(null)
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
B.A=s([B.f,B.q,B.T,B.p,B.S,B.R,B.Q,B.P],A.dR("q<C>"))
B.O=s(["wood","beep","cowbell","stick"],t.s)
B.o=s([B.x,B.l,B.y,B.z],t.a)
B.U=A.V("jc")
B.V=A.V("jd")
B.W=A.V("h2")
B.X=A.V("h3")
B.Y=A.V("h4")
B.Z=A.V("h5")
B.a_=A.V("h6")
B.a0=A.V("h")
B.a1=A.V("hq")
B.a2=A.V("hr")
B.a3=A.V("hs")
B.a4=A.V("ht")
B.i=new A.ai(0,"accent")
B.t=new A.ai(1,"normal")
B.C=new A.ai(2,"ghost")
B.u=new A.ai(3,"sub")
B.h=new A.ai(4,"silent")})();(function staticFields(){$.dy=null
$.K=A.e([],t.f)
$.eU=null
$.eF=null
$.eE=null
$.fx=null
$.fq=null
$.fB=null
$.dQ=null
$.dX=null
$.es=null
$.dE=A.e([],A.dR("q<i<h>?>"))
$.aF=null
$.bk=null
$.bl=null
$.en=!1
$.u=B.e})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"jf","fF",()=>A.dS("_$dart_dartClosure"))
s($,"je","e5",()=>A.dS("_$dart_dartClosure_dartJSInterop"))
s($,"jv","fQ",()=>A.e([new J.bC()],A.dR("q<b1>")))
s($,"jj","fG",()=>A.a_(A.dc({
toString:function(){return"$receiver$"}})))
s($,"jk","fH",()=>A.a_(A.dc({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"jl","fI",()=>A.a_(A.dc(null)))
s($,"jm","fJ",()=>A.a_(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jp","fM",()=>A.a_(A.dc(void 0)))
s($,"jq","fN",()=>A.a_(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jo","fL",()=>A.a_(A.f1(null)))
s($,"jn","fK",()=>A.a_(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"js","fP",()=>A.a_(A.f1(void 0)))
s($,"jr","fO",()=>A.a_(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"jt","eA",()=>A.hu())
s($,"ju","e6",()=>A.fy(B.a0))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ax,SharedArrayBuffer:A.ax,ArrayBufferView:A.aY,DataView:A.bN,Float32Array:A.ay,Float64Array:A.bO,Int16Array:A.bP,Int32Array:A.bQ,Int8Array:A.bR,Uint16Array:A.bS,Uint32Array:A.bT,Uint8ClampedArray:A.aZ,CanvasPixelArray:A.aZ,Uint8Array:A.bU})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.az.$nativeSuperclassTag="ArrayBufferView"
A.b7.$nativeSuperclassTag="ArrayBufferView"
A.b8.$nativeSuperclassTag="ArrayBufferView"
A.aW.$nativeSuperclassTag="ArrayBufferView"
A.b9.$nativeSuperclassTag="ArrayBufferView"
A.ba.$nativeSuperclassTag="ArrayBufferView"
A.aX.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.j1
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()