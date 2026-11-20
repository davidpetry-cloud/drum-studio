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
if(a[b]!==s){A.jt(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.eI(b)
return new s(c,this)}:function(){if(s===null)s=A.eI(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.eI(a).prototype
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
eO(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eJ(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.eK==null){A.jh()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.d(A.fm("Return interceptor for "+A.o(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.dI
if(o==null)o=$.dI=A.e0(n)
p=q[o]}if(p!=null)return p
p=A.jl(a)
if(p!=null)return p
if(typeof a=="function")return B.L
s=Object.getPrototypeOf(a)
if(s==null)return B.C
if(s===Object.prototype)return B.C
if(typeof q=="function"){o=$.dI
if(o==null)o=$.dI=A.e0(n)
Object.defineProperty(q,o,{value:B.u,enumerable:false,writable:true,configurable:true})
return B.u}return B.u},
hq(a,b){if(a<0||a>4294967295)throw A.d(A.ba(a,0,4294967295,"length",null))
return J.hs(new Array(a),b)},
hr(a,b){if(a<0)throw A.d(A.aP("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.h("n<0>"))},
hs(a,b){var s=A.e(a,b.h("n<0>"))
s.$flags=1
return s},
f4(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ht(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.f4(r))break;++b}return b},
hu(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.f(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.f4(q))break}return b},
ap(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aU.prototype
return J.bM.prototype}if(typeof a=="string")return J.av.prototype
if(a==null)return J.aV.prototype
if(typeof a=="boolean")return J.bL.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a8.prototype
if(typeof a=="symbol")return J.aZ.prototype
if(typeof a=="bigint")return J.aX.prototype
return a}if(a instanceof A.i)return a
return J.eJ(a)},
fO(a){if(typeof a=="string")return J.av.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a8.prototype
if(typeof a=="symbol")return J.aZ.prototype
if(typeof a=="bigint")return J.aX.prototype
return a}if(a instanceof A.i)return a
return J.eJ(a)},
fP(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a8.prototype
if(typeof a=="symbol")return J.aZ.prototype
if(typeof a=="bigint")return J.aX.prototype
return a}if(a instanceof A.i)return a
return J.eJ(a)},
jc(a){if(typeof a=="number")return J.au.prototype
if(a==null)return a
if(!(a instanceof A.i))return J.aD.prototype
return a},
a6(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ap(a).P(a,b)},
ek(a,b,c){return J.jc(a).n(a,b,c)},
S(a){return J.ap(a).gl(a)},
h9(a){return J.fP(a).gbT(a)},
el(a){return J.fP(a).gG(a)},
eW(a){return J.fO(a).gk(a)},
ha(a){return J.ap(a).gm(a)},
by(a){return J.ap(a).i(a)},
bJ:function bJ(){},
bL:function bL(){},
aV:function aV(){},
aY:function aY(){},
a9:function a9(){},
c1:function c1(){},
aD:function aD(){},
a8:function a8(){},
aX:function aX(){},
aZ:function aZ(){},
n:function n(a){this.$ti=a},
bK:function bK(){},
co:function co(a){this.$ti=a},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
au:function au(){},
aU:function aU(){},
bM:function bM(){},
av:function av(){}},A={eo:function eo(){},
f7(a){return new A.bQ("Field '"+a+"' has been assigned during initialization.")},
a1(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dj(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eH(a,b,c){return a},
eM(a){var s,r
for(s=$.O.length,r=0;r<s;++r)if(a===$.O[r])return!0
return!1},
f2(){return new A.bd("No element")},
bQ:function bQ(a){this.a=a},
de:function de(){},
aR:function aR(){},
ai:function ai(){},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
G:function G(){},
fX(a){var s=A.fW(a)
if(s!=null)return s
return"minified:"+a},
jU(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
o(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.by(a)
return s},
c2(a){var s,r=$.fe
if(r==null)r=$.fe=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
es(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.f(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
hC(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.c.a6(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
c3(a){var s,r,q,p
if(a instanceof A.i)return A.N(A.bw(a),null)
s=J.ap(a)
if(s===B.K||s===B.M||t.D.b(a)){r=B.w(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.N(A.bw(a),null)},
ff(a){var s,r,q
if(a==null||typeof a=="number"||A.eC(a))return J.by(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.a7)return a.i(0)
if(a instanceof A.a5)return a.bD(!0)
s=$.h8()
for(r=0;r<1;++r){q=s[r].d_(a)
if(q!=null)return q}return"Instance of '"+A.c3(a)+"'"},
E(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.by(s,10)|55296)>>>0,s&1023|56320)}throw A.d(A.ba(a,0,1114111,null,null))},
hB(a){var s=a.$thrownJsError
if(s==null)return null
return A.aN(s)},
fg(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.B(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
f(a,b){if(a==null)J.eW(a)
throw A.d(A.fN(a,b))},
fN(a,b){var s,r="index"
if(!A.eE(b))return new A.T(!0,b,r,null)
s=J.eW(a)
if(b<0||b>=s)return A.f1(b,s,a,r)
return A.et(b,r)},
j2(a){return new A.T(!0,a,null,null)},
d(a){return A.B(a,new Error())},
B(a,b){var s
if(a==null)a=new A.a2()
b.dartException=a
s=A.ju
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
ju(){return J.by(this.dartException)},
eS(a,b){throw A.B(a,b==null?new Error():b)},
bx(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.eS(A.is(a,b,c),s)},
is(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.be("'"+s+"': Cannot "+o+" "+l+k+n)},
W(a){throw A.d(A.Y(a))},
a3(a){var s,r,q,p,o,n
a=A.jq(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.dl(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
dm(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
fl(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ep(a,b){var s=b==null,r=s?null:b.method
return new A.bO(a,r,s?null:b.receiver)},
a0(a){var s
if(a==null)return new A.dc(a)
if(a instanceof A.aS){s=a.a
return A.ae(a,s==null?A.br(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.ae(a,a.dartException)
return A.j0(a)},
ae(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
j0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.by(r,16)&8191)===10)switch(q){case 438:return A.ae(a,A.ep(A.o(s)+" (Error "+q+")",null))
case 445:case 5007:A.o(s)
return A.ae(a,new A.b8())}}if(a instanceof TypeError){p=$.fZ()
o=$.h_()
n=$.h0()
m=$.h1()
l=$.h4()
k=$.h5()
j=$.h3()
$.h2()
i=$.h7()
h=$.h6()
g=p.J(s)
if(g!=null)return A.ae(a,A.ep(A.p(s),g))
else{g=o.J(s)
if(g!=null){g.method="call"
return A.ae(a,A.ep(A.p(s),g))}else if(n.J(s)!=null||m.J(s)!=null||l.J(s)!=null||k.J(s)!=null||j.J(s)!=null||m.J(s)!=null||i.J(s)!=null||h.J(s)!=null){A.p(s)
return A.ae(a,new A.b8())}}return A.ae(a,new A.c8(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bc()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ae(a,new A.T(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bc()
return a},
aN(a){var s
if(a instanceof A.aS)return a.b
if(a==null)return new A.bl(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bl(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fR(a){if(a==null)return J.S(a)
if(typeof a=="object")return A.c2(a)
return J.S(a)},
jb(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.K(0,a[s],a[r])}return b},
iC(a,b,c,d,e,f){t.Z.a(a)
switch(A.q(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.dx("Unsupported number of arguments for wrapped closure"))},
bv(a,b){var s=a.$identity
if(!!s)return s
s=A.j6(a,b)
a.$identity=s
return s},
j6(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.iC)},
hh(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.c5().constructor.prototype):Object.create(new A.at(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.f0(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.hd(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.f0(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
hd(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.hb)}throw A.d("Error in functionType of tearoff")},
he(a,b,c,d){var s=A.f_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
f0(a,b,c,d){if(c)return A.hg(a,b,d)
return A.he(b.length,d,a,b)},
hf(a,b,c,d){var s=A.f_,r=A.hc
switch(b?-1:a){case 0:throw A.d(new A.c4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
hg(a,b,c){var s,r
if($.eY==null)$.eY=A.eX("interceptor")
if($.eZ==null)$.eZ=A.eX("receiver")
s=b.length
r=A.hf(s,c,a,b)
return r},
eI(a){return A.hh(a)},
hb(a,b){return A.bq(v.typeUniverse,A.bw(a.a),b)},
f_(a){return a.a},
hc(a){return a.b},
eX(a){var s,r,q,p=new A.at("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.aP("Field name "+a+" not found.",null))},
e0(a){return v.getIsolateTag(a)},
jT(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jl(a){var s,r,q,p,o,n=A.p($.fQ.$1(a)),m=$.e_[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e5[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.dU($.fJ.$2(a,n))
if(q!=null){m=$.e_[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e5[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.e6(s)
$.e_[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.e5[n]=s
return s}if(p==="-"){o=A.e6(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fS(a,s)
if(p==="*")throw A.d(A.fm(n))
if(v.leafTags[n]===true){o=A.e6(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fS(a,s)},
fS(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eO(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
e6(a){return J.eO(a,!1,null,!!a.$iL)},
jn(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.e6(s)
else return J.eO(s,c,null,null)},
jh(){if(!0===$.eK)return
$.eK=!0
A.ji()},
ji(){var s,r,q,p,o,n,m,l
$.e_=Object.create(null)
$.e5=Object.create(null)
A.jg()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fU.$1(o)
if(n!=null){m=A.jn(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jg(){var s,r,q,p,o,n,m=B.E()
m=A.aM(B.F,A.aM(B.G,A.aM(B.x,A.aM(B.x,A.aM(B.H,A.aM(B.I,A.aM(B.J(B.w),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fQ=new A.e2(p)
$.fJ=new A.e3(o)
$.fU=new A.e4(n)},
aM(a,b){return a(b)||b},
i2(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.f(b,s)
if(!J.a6(r,b[s]))return!1}return!0},
j8(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
f5(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.d(A.em("Illegal RegExp pattern ("+String(o)+")",a))},
j9(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jq(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
fV(a,b,c){var s,r=b.gcm()
r.lastIndex=0
s=a.replace(r,A.j9(c))
return s},
aI:function aI(a,b){this.a=a
this.b=b},
J:function J(a){this.a=a},
bb:function bb(){},
dl:function dl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b8:function b8(){},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(a){this.a=a},
dc:function dc(a){this.a=a},
aS:function aS(a,b){this.a=a
this.b=b},
bl:function bl(a){this.a=a
this.b=null},
a7:function a7(){},
bC:function bC(){},
bD:function bD(){},
c6:function c6(){},
c5:function c5(){},
at:function at(a,b){this.a=a
this.b=b},
c4:function c4(a){this.a=a},
b_:function b_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cu:function cu(a,b){this.a=a
this.b=b
this.c=null},
ah:function ah(a,b){this.a=a
this.$ti=b},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
e2:function e2(a){this.a=a},
e3:function e3(a){this.a=a},
e4:function e4(a){this.a=a},
a5:function a5(){},
aG:function aG(){},
aH:function aH(){},
bN:function bN(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
dM:function dM(a){this.b=a},
ay:function ay(){},
b6:function b6(){},
bU:function bU(){},
aA:function aA(){},
b4:function b4(){},
b5:function b5(){},
az:function az(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
bZ:function bZ(){},
c_:function c_(){},
b7:function b7(){},
c0:function c0(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
ev(a,b){var s=b.c
return s==null?b.c=A.bo(a,"ag",[b.x]):s},
fh(a){var s=a.w
if(s===6||s===7)return A.fh(a.x)
return s===11||s===12},
hG(a){return a.as},
jp(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
cj(a){return A.dS(v.typeUniverse,a,!1)},
an(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.an(a1,s,a3,a4)
if(r===s)return a2
return A.ft(a1,r,!0)
case 7:s=a2.x
r=A.an(a1,s,a3,a4)
if(r===s)return a2
return A.fs(a1,r,!0)
case 8:q=a2.y
p=A.aL(a1,q,a3,a4)
if(p===q)return a2
return A.bo(a1,a2.x,p)
case 9:o=a2.x
n=A.an(a1,o,a3,a4)
m=a2.y
l=A.aL(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.ez(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aL(a1,j,a3,a4)
if(i===j)return a2
return A.fu(a1,k,i)
case 11:h=a2.x
g=A.an(a1,h,a3,a4)
f=a2.y
e=A.iY(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.fr(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aL(a1,d,a3,a4)
o=a2.x
n=A.an(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.eA(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.bB("Attempted to substitute unexpected RTI kind "+a0))}},
aL(a,b,c,d){var s,r,q,p,o=b.length,n=A.dT(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.an(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
iZ(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dT(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.an(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
iY(a,b,c,d){var s,r=b.a,q=A.aL(a,r,c,d),p=b.b,o=A.aL(a,p,c,d),n=b.c,m=A.iZ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cd()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
fL(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.je(s)
return a.$S()}return null},
jj(a,b){var s
if(A.fh(b))if(a instanceof A.a7){s=A.fL(a)
if(s!=null)return s}return A.bw(a)},
bw(a){if(a instanceof A.i)return A.ad(a)
if(Array.isArray(a))return A.K(a)
return A.eB(J.ap(a))},
K(a){var s=a[v.arrayRti],r=t.q
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
ad(a){var s=a.$ti
return s!=null?s:A.eB(a)},
eB(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.iz(a,s)},
iz(a,b){var s=a instanceof A.a7?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.ib(v.typeUniverse,s.name)
b.$ccache=r
return r},
je(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dS(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jd(a){return A.ao(A.ad(a))},
eG(a){var s
if(a instanceof A.a5)return A.ja(a.$r,a.aN())
s=a instanceof A.a7?A.fL(a):null
if(s!=null)return s
if(t.k.b(a))return J.ha(a).a
if(Array.isArray(a))return A.K(a)
return A.bw(a)},
ao(a){var s=a.r
return s==null?a.r=new A.dR(a):s},
ja(a,b){var s,r,q=b,p=q.length
if(p===0)return t.h
if(0>=p)return A.f(q,0)
s=A.bq(v.typeUniverse,A.eG(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.f(q,r)
s=A.fw(v.typeUniverse,s,A.eG(q[r]))}return A.bq(v.typeUniverse,s,a)},
X(a){return A.ao(A.dS(v.typeUniverse,a,!1))},
iy(a){var s=this
s.b=A.iW(s)
return s.b(a)},
iW(a){var s,r,q,p,o
if(a===t.K)return A.iI
if(A.aq(a))return A.iM
s=a.w
if(s===6)return A.iw
if(s===1)return A.fF
if(s===7)return A.iD
r=A.iV(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.aq)){a.f="$i"+q
if(q==="j")return A.iG
if(a===t.m)return A.iF
return A.iL}}else if(s===10){p=A.j8(a.x,a.y)
o=p==null?A.fF:p
return o==null?A.br(o):o}return A.iu},
iV(a){if(a.w===8){if(a===t.S)return A.eE
if(a===t.i||a===t.o)return A.iH
if(a===t.N)return A.iK
if(a===t.y)return A.eC}return null},
ix(a){var s=this,r=A.it
if(A.aq(s))r=A.ii
else if(s===t.K)r=A.br
else if(A.aO(s)){r=A.iv
if(s===t.a3)r=A.ig
else if(s===t.aD)r=A.dU
else if(s===t.u)r=A.id
else if(s===t.ae)r=A.fz
else if(s===t.I)r=A.ie
else if(s===t.aQ)r=A.Z}else if(s===t.S)r=A.q
else if(s===t.N)r=A.p
else if(s===t.y)r=A.z
else if(s===t.o)r=A.ih
else if(s===t.i)r=A.H
else if(s===t.m)r=A.b
s.a=r
return s.a(a)},
iu(a){var s=this
if(a==null)return A.aO(s)
return A.jk(v.typeUniverse,A.jj(a,s),s)},
iw(a){if(a==null)return!0
return this.x.b(a)},
iL(a){var s,r=this
if(a==null)return A.aO(r)
s=r.f
if(a instanceof A.i)return!!a[s]
return!!J.ap(a)[s]},
iG(a){var s,r=this
if(a==null)return A.aO(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.i)return!!a[s]
return!!J.ap(a)[s]},
iF(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.i)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fE(a){if(typeof a=="object"){if(a instanceof A.i)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
it(a){var s=this
if(a==null){if(A.aO(s))return a}else if(s.b(a))return a
throw A.B(A.fB(a,s),new Error())},
iv(a){var s=this
if(a==null||s.b(a))return a
throw A.B(A.fB(a,s),new Error())},
fB(a,b){return new A.bm("TypeError: "+A.fn(a,A.N(b,null)))},
fn(a,b){return A.bH(a)+": type '"+A.N(A.eG(a),null)+"' is not a subtype of type '"+b+"'"},
Q(a,b){return new A.bm("TypeError: "+A.fn(a,b))},
iD(a){var s=this
return s.x.b(a)||A.ev(v.typeUniverse,s).b(a)},
iI(a){return a!=null},
br(a){if(a!=null)return a
throw A.B(A.Q(a,"Object"),new Error())},
iM(a){return!0},
ii(a){return a},
fF(a){return!1},
eC(a){return!0===a||!1===a},
z(a){if(!0===a)return!0
if(!1===a)return!1
throw A.B(A.Q(a,"bool"),new Error())},
id(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.B(A.Q(a,"bool?"),new Error())},
H(a){if(typeof a=="number")return a
throw A.B(A.Q(a,"double"),new Error())},
ie(a){if(typeof a=="number")return a
if(a==null)return a
throw A.B(A.Q(a,"double?"),new Error())},
eE(a){return typeof a=="number"&&Math.floor(a)===a},
q(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.B(A.Q(a,"int"),new Error())},
ig(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.B(A.Q(a,"int?"),new Error())},
iH(a){return typeof a=="number"},
ih(a){if(typeof a=="number")return a
throw A.B(A.Q(a,"num"),new Error())},
fz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.B(A.Q(a,"num?"),new Error())},
iK(a){return typeof a=="string"},
p(a){if(typeof a=="string")return a
throw A.B(A.Q(a,"String"),new Error())},
dU(a){if(typeof a=="string")return a
if(a==null)return a
throw A.B(A.Q(a,"String?"),new Error())},
b(a){if(A.fE(a))return a
throw A.B(A.Q(a,"JSObject"),new Error())},
Z(a){if(a==null)return a
if(A.fE(a))return a
throw A.B(A.Q(a,"JSObject?"),new Error())},
fH(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.N(a[q],b)
return s},
iR(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fH(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.N(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fC(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.e([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.j(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.f(a4,l)
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
if(l===8){p=A.j_(a.x)
o=a.y
return o.length>0?p+("<"+A.fH(o,b)+">"):p}if(l===10)return A.iR(a,b)
if(l===11)return A.fC(a,b,null)
if(l===12)return A.fC(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.f(b,n)
return b[n]}return"?"},
j_(a){var s=A.fW(a)
if(s!=null)return s
return"minified:"+a},
ic(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
ib(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dS(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bp(a,5,"#")
q=A.dT(s)
for(p=0;p<s;++p)q[p]=r
o=A.bo(a,b,q)
n[b]=o
return o}else return m},
ia(a,b){return A.fx(a.tR,b)},
i9(a,b){return A.fx(a.eT,b)},
dS(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fv(a,null,b,!1)
r.set(b,s)
return s},
bq(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fv(a,b,c,!0)
q.set(c,r)
return r},
fw(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.ez(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
fv(a,b,c,d){return A.i0(A.hV(a,b,c,d))},
ac(a,b){b.a=A.ix
b.b=A.iy
return b},
bp(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.V(null,null)
s.w=b
s.as=c
r=A.ac(a,s)
a.eC.set(c,r)
return r},
ft(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.i7(a,b,r,c)
a.eC.set(r,s)
return s},
i7(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.aq(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aO(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.V(null,null)
q.w=6
q.x=b
q.as=c
return A.ac(a,q)},
fs(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.i5(a,b,r,c)
a.eC.set(r,s)
return s},
i5(a,b,c,d){var s,r
if(d){s=b.w
if(A.aq(b)||b===t.K)return b
else if(s===1)return A.bo(a,"ag",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.V(null,null)
r.w=7
r.x=b
r.as=c
return A.ac(a,r)},
i8(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.V(null,null)
s.w=13
s.x=b
s.as=q
r=A.ac(a,s)
a.eC.set(q,r)
return r},
bn(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
i4(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bo(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bn(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.V(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ac(a,r)
a.eC.set(p,q)
return q},
ez(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bn(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.V(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ac(a,o)
a.eC.set(q,n)
return n},
fu(a,b,c){var s,r,q="+"+(b+"("+A.bn(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.V(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ac(a,s)
a.eC.set(q,r)
return r},
fr(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bn(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bn(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.i4(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.V(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ac(a,p)
a.eC.set(r,o)
return o},
eA(a,b,c,d){var s,r=b.as+("<"+A.bn(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.i6(a,b,c,r,d)
a.eC.set(r,s)
return s},
i6(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dT(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.an(a,b,r,0)
m=A.aL(a,c,r,0)
return A.eA(a,n,m,c!==m)}}l=new A.V(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ac(a,l)},
hV(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
i0(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hX(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.fp(a,r,l,k,!1)
else if(q===46)r=A.fp(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.am(a.u,a.e,k.pop()))
break
case 94:k.push(A.i8(a.u,k.pop()))
break
case 35:k.push(A.bp(a.u,5,"#"))
break
case 64:k.push(A.bp(a.u,2,"@"))
break
case 126:k.push(A.bp(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hZ(a,k)
break
case 38:A.hY(a,k)
break
case 63:p=a.u
k.push(A.ft(p,A.am(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fs(p,A.am(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hW(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fq(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.i1(a.u,a.e,o)
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
return A.am(a.u,a.e,m)},
hX(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
fp(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.ic(s,o.x)[p]
if(n==null)A.eS('No "'+p+'" in "'+A.hG(o)+'"')
d.push(A.bq(s,o,n))}else d.push(p)
return m},
hZ(a,b){var s,r=a.u,q=A.fo(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bo(r,p,q))
else{s=A.am(r,a.e,p)
switch(s.w){case 11:b.push(A.eA(r,s,q,a.n))
break
default:b.push(A.ez(r,s,q))
break}}},
hW(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.fo(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.am(p,a.e,o)
q=new A.cd()
q.a=s
q.b=n
q.c=m
b.push(A.fr(p,r,q))
return
case-4:b.push(A.fu(p,b.pop(),s))
return
default:throw A.d(A.bB("Unexpected state under `()`: "+A.o(o)))}},
hY(a,b){var s=b.pop()
if(0===s){b.push(A.bp(a.u,1,"0&"))
return}if(1===s){b.push(A.bp(a.u,4,"1&"))
return}throw A.d(A.bB("Unexpected extended operation "+A.o(s)))},
fo(a,b){var s=b.splice(a.p)
A.fq(a.u,a.e,s)
a.p=b.pop()
return s},
am(a,b,c){if(typeof c=="string")return A.bo(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.i_(a,b,c)}else return c},
fq(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.am(a,b,c[s])},
i1(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.am(a,b,c[s])},
i_(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.bB("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.bB("Bad index "+c+" for "+b.i(0)))},
jk(a,b,c){var s,r=b.d
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
return A.A(a,A.ev(a,b),c,d,e)}if(s===6)return A.A(a,p,c,d,e)&&A.A(a,b.x,c,d,e)
if(q===7){if(A.A(a,b,c,d.x,e))return!0
return A.A(a,b,c,A.ev(a,d),e)}if(q===6)return A.A(a,b,c,p,e)||A.A(a,b,c,d.x,e)
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
if(!A.A(a,j,c,i,e)||!A.A(a,i,e,j,c))return!1}return A.fD(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.fD(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.iE(a,b,c,d,e)}if(o&&q===10)return A.iJ(a,b,c,d,e)
return!1},
fD(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
iE(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bq(a,b,r[o])
return A.fy(a,p,null,c,d.y,e)}return A.fy(a,b.y,null,c,d.y,e)},
fy(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.A(a,b[s],d,e[s],f))return!1
return!0},
iJ(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.A(a,r[s],c,q[s],e))return!1
return!0},
aO(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.aq(a))if(s!==6)r=s===7&&A.aO(a.x)
return r},
aq(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fx(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dT(a){return a>0?new Array(a):v.typeUniverse.sEA},
V:function V(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cd:function cd(){this.c=this.b=this.a=null},
dR:function dR(a){this.a=a},
cc:function cc(){},
bm:function bm(a){this.a=a},
hO(){var s,r,q
if(self.scheduleImmediate!=null)return A.j3()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bv(new A.dt(s),1)).observe(r,{childList:true})
return new A.ds(s,r,q)}else if(self.setImmediate!=null)return A.j4()
return A.j5()},
hP(a){self.scheduleImmediate(A.bv(new A.du(t.M.a(a)),0))},
hQ(a){self.setImmediate(A.bv(new A.dv(t.M.a(a)),0))},
hR(a){t.M.a(a)
A.i3(0,a)},
i3(a,b){var s=new A.dP()
s.c3(a,b)
return s},
iO(a){return new A.c9(new A.y($.w,a.h("y<0>")),a.h("c9<0>"))},
im(a,b){a.$2(0,null)
b.b=!0
return b.a},
ij(a,b){A.io(a,b)},
il(a,b){b.aX(a)},
ik(a,b){b.aY(A.a0(a),A.aN(a))},
io(a,b){var s,r,q=new A.dV(b),p=new A.dW(b)
if(a instanceof A.y)a.bB(q,p,t.z)
else{s=t.z
if(a instanceof A.y)a.bX(q,p,s)
else{r=new A.y($.w,t._)
r.a=8
r.c=a
r.bB(q,p,s)}}},
j1(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.w
return r.bp(r,t.aS.a(new A.dZ(s)),t.H,t.S,t.z)},
cl(a){var s
if(t.C.b(a)){s=a.gag()
if(s!=null)return s}return B.m},
iA(a,b){var s=$.w
if(s===B.f)return null
s.cd(s,a,b)
return null},
iB(a,b){if($.w!==B.f)A.iA(a,b)
if(b==null)if(t.C.b(a)){b=a.gag()
if(b==null){A.fg(a,B.m)
b=B.m}}else b=B.m
else if(t.C.b(a))A.fg(a,b)
return new A.P(a,b)},
ex(a,b,c){var s,r,q,p,o,n={},m=n.a=a
for(s=t._;r=m.a,(r&4)!==0;m=a){a=s.a(m.c)
n.a=a}if(m===b){s=A.hI()
b.aG(new A.P(new A.T(!0,m,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=m.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=m
m.bn(p)
return}if(!c)if(b.c==null)m=(s&16)===0||q!==0
else m=!1
else m=!0
if(m){p=b.am()
b.aj(n.a)
A.aE(b,p)
return}b.a^=2
o=b.b
o.a8(o,new A.dB(n,b))},
aE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=e.a=a
for(s=t.n,r=t.F;;){q={}
p=d.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(d.c)
d=d.b
d.bh(d,m.a,m.b)}return}q.a=b
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
h=$.w
if(h!==i)$.w=i
else h=null
d=d.c
if((d&15)===8)new A.dF(q,e,n).$0()
else if(o){if((d&1)!==0)new A.dE(q,j).$0()}else if((d&2)!==0)new A.dD(e,q).$0()
if(h!=null)$.w=h
d=q.c
if(d instanceof A.y){p=q.a.$ti
p=p.h("ag<2>").b(d)||!p.y[1].b(d)}else p=!1
if(p){g=q.a.b
if((d.a&24)!==0){f=r.a(g.c)
g.c=null
b=g.an(f)
g.a=d.a&30|g.a&1
g.c=d.c
e.a=d
continue}else A.ex(d,g,!0)
return}}g=q.a.b
f=r.a(g.c)
g.c=null
b=g.an(f)
d=q.b
p=q.c
if(!d){g.$ti.c.a(p)
g.a=8
g.c=p}else{s.a(p)
g.a=g.a&1|16
g.c=p}e.a=g
d=g}},
fG(a,b){var s=t.Q
if(s.b(a))return b.bp(b,s.a(a),t.z,t.K,t.l)
s=t.v
if(s.b(a))return b.bq(b,s.a(a),t.z,t.K)
throw A.d(A.bz(a,"onError",u.c))},
iP(){var s,r
for(s=$.aK;s!=null;s=$.aK){$.bu=null
r=s.b
$.aK=r
if(r==null)$.bt=null
s.a.$0()}},
iX(){$.eD=!0
try{A.iP()}finally{$.bu=null
$.eD=!1
if($.aK!=null)$.eU().$1(A.fK())}},
fI(a){var s=new A.ca(a),r=$.bt
if(r==null){$.aK=$.bt=s
if(!$.eD)$.eU().$1(A.fK())}else $.bt=r.b=s},
iU(a){var s,r,q,p=$.aK
if(p==null){A.fI(a)
$.bu=$.bt
return}s=new A.ca(a)
r=$.bu
if(r==null){s.b=p
$.aK=$.bu=s}else{q=r.b
s.b=q
$.bu=r.b=s
if(q==null)$.bt=s}},
jE(a,b){A.eH(a,"stream",t.K)
return new A.ch(b.h("ch<0>"))},
iS(a,b){A.iU(new A.dY(a,b))},
iT(a,b){if(B.f!==a)b=a.cG(b,t.H)
A.fI(b)},
dt:function dt(a){this.a=a},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a){this.a=a},
dv:function dv(a){this.a=a},
dP:function dP(){},
dQ:function dQ(a,b){this.a=a
this.b=b},
c9:function c9(a,b){this.a=a
this.b=!1
this.$ti=b},
dV:function dV(a){this.a=a},
dW:function dW(a){this.a=a},
dZ:function dZ(a){this.a=a},
P:function P(a,b){this.a=a
this.b=b},
cb:function cb(){},
bf:function bf(a,b){this.a=a
this.$ti=b},
a4:function a4(a,b,c,d,e){var _=this
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
dy:function dy(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.b=b},
dA:function dA(a,b){this.a=a
this.b=b},
dz:function dz(a,b){this.a=a
this.b=b},
dF:function dF(a,b,c){this.a=a
this.b=b
this.c=c},
dG:function dG(a,b){this.a=a
this.b=b},
dH:function dH(a){this.a=a},
dE:function dE(a,b){this.a=a
this.b=b},
dD:function dD(a,b){this.a=a
this.b=b},
ca:function ca(a){this.a=a
this.b=null},
ch:function ch(a){this.$ti=a},
dq:function dq(){},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
dY:function dY(a,b){this.a=a
this.b=b},
f9(a,b,c){return b.h("@<0>").t(c).h("f8<1,2>").a(A.jb(a,new A.b_(b.h("@<0>").t(c).h("b_<1,2>"))))},
hw(a){return new A.al(a.h("al<0>"))},
fa(a){return new A.al(a.h("al<0>"))},
ey(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hU(a,b,c){var s=new A.aF(a,b,c.h("aF<0>"))
s.c=a.e
return s},
fb(a,b){var s,r,q=A.hw(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.W)(a),++r)q.j(0,b.a(a[r]))
return q},
fc(a){var s,r
if(A.eM(a))return"{...}"
s=new A.aC("")
try{r={}
B.a.j($.O,a)
s.a+="{"
r.a=!0
a.af(0,new A.cv(r,s))
s.a+="}"}finally{if(0>=$.O.length)return A.f($.O,-1)
$.O.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
al:function al(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cg:function cg(a){this.a=a
this.b=null},
aF:function aF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
u:function u(){},
F:function F(){},
cv:function cv(a,b){this.a=a
this.b=b},
aB:function aB(){},
bk:function bk(){},
iQ(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.a0(r)
q=A.em(String(s),null)
throw A.d(q)}q=A.dX(p)
return q},
dX(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.ce(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.dX(a[s])
return a},
f6(a,b,c){return new A.b0(a,b)},
ir(a){return a.bY()},
hS(a,b){return new A.dJ(a,[],A.j7())},
hT(a,b,c){var s,r=new A.aC(""),q=A.hS(r,b)
q.aD(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
ce:function ce(a,b){this.a=a
this.b=b
this.c=null},
cf:function cf(a){this.a=a},
bE:function bE(){},
bG:function bG(){},
b0:function b0(a,b){this.a=a
this.b=b},
bP:function bP(a,b){this.a=a
this.b=b},
cp:function cp(){},
cr:function cr(a){this.b=a},
cq:function cq(a){this.a=a},
dK:function dK(){},
dL:function dL(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b,c){this.c=a
this.a=b
this.b=c},
eL(a){var s=A.es(a,null)
if(s!=null)return s
throw A.d(A.em(a,null))},
hi(a,b){a=A.B(a,new Error())
if(a==null)a=A.br(a)
a.stack=b.i(0)
throw a},
ax(a,b,c,d){var s,r=c?J.hr(a,d):J.hq(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hx(a,b,c){var s,r=A.e([],c.h("n<0>"))
for(s=J.el(a);s.q();)B.a.j(r,c.a(s.gA()))
r.$flags=1
return r},
b1(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.h("n<0>"))
s=A.e([],b.h("n<0>"))
for(r=J.el(a);r.q();)B.a.j(s,r.gA())
return s},
eq(a,b){var s=A.hx(a,!1,b)
s.$flags=3
return s},
eu(a){return new A.bN(a,A.f5(a,!1,!0,!1,!1,""))},
fj(a,b,c){var s=J.el(b)
if(!s.q())return a
if(c.length===0){do a+=A.o(s.gA())
while(s.q())}else{a+=A.o(s.gA())
while(s.q())a=a+c+A.o(s.gA())}return a},
hI(){return A.aN(new Error())},
bH(a){if(typeof a=="number"||A.eC(a)||a==null)return J.by(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ff(a)},
hj(a,b){A.eH(a,"error",t.K)
A.eH(b,"stackTrace",t.l)
A.hi(a,b)},
bB(a){return new A.bA(a)},
aP(a,b){return new A.T(!1,null,b,a)},
bz(a,b,c){return new A.T(!0,a,b,c)},
et(a,b){return new A.b9(null,null,!0,a,b,"Value not in range")},
ba(a,b,c,d,e){return new A.b9(b,c,!0,a,d,"Invalid value")},
hE(a,b,c){if(0>a||a>c)throw A.d(A.ba(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.ba(b,a,c,"end",null))
return b}return c},
hD(a,b){if(a<0)throw A.d(A.ba(a,0,null,b,null))
return a},
f1(a,b,c,d){return new A.bI(b,!0,a,d,"Index out of range")},
ew(a){return new A.be(a)},
fm(a){return new A.c7(a)},
fi(a){return new A.bd(a)},
Y(a){return new A.bF(a)},
em(a,b){return new A.aT(a,b)},
hp(a,b,c){var s,r
if(A.eM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.a.j($.O,a)
try{A.iN(a,s)}finally{if(0>=$.O.length)return A.f($.O,-1)
$.O.pop()}r=A.fj(b,t.U.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
en(a,b,c){var s,r
if(A.eM(a))return b+"..."+c
s=new A.aC(b)
B.a.j($.O,a)
try{r=s
r.a=A.fj(r.a,a,", ")}finally{if(0>=$.O.length)return A.f($.O,-1)
$.O.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
iN(a,b){var s,r,q,p,o,n,m,l=a.gG(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.q())return
s=A.o(l.gA())
B.a.j(b,s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.f(b,-1)
r=b.pop()
if(0>=b.length)return A.f(b,-1)
q=b.pop()}else{p=l.gA();++j
if(!l.q()){if(j<=4){B.a.j(b,A.o(p))
return}r=A.o(p)
if(0>=b.length)return A.f(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gA();++j
for(;l.q();p=o,o=n){n=l.gA();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2;--j}B.a.j(b,"...")
return}}q=A.o(p)
r=A.o(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.j(b,m)
B.a.j(b,q)
B.a.j(b,r)},
fd(a,b,c,d){var s
if(B.k===c){s=B.b.gl(a)
b=J.S(b)
return A.dj(A.a1(A.a1($.ck(),s),b))}if(B.k===d){s=B.b.gl(a)
b=J.S(b)
c=J.S(c)
return A.dj(A.a1(A.a1(A.a1($.ck(),s),b),c))}s=B.b.gl(a)
b=J.S(b)
c=J.S(c)
d=J.S(d)
d=A.dj(A.a1(A.a1(A.a1(A.a1($.ck(),s),b),c),d))
return d},
hz(a){var s,r,q=$.ck()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.W)(a),++r)q=A.a1(q,J.S(a[r]))
return A.dj(q)},
dw:function dw(){},
r:function r(){},
bA:function bA(a){this.a=a},
a2:function a2(){},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b9:function b9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bI:function bI(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
be:function be(a){this.a=a},
c7:function c7(a){this.a=a},
bd:function bd(a){this.a=a},
bF:function bF(a){this.a=a},
bc:function bc(){},
dx:function dx(a){this.a=a},
aT:function aT(a,b){this.a=a
this.b=b},
h:function h(){},
x:function x(){},
i:function i(){},
ci:function ci(){},
aC:function aC(a){this.a=a},
db:function db(a){this.a=a},
bs(a){var s
if(typeof a=="function")throw A.d(A.aP("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.ip,a)
s[$.ej()]=a
return s},
aJ(a){var s
if(typeof a=="function")throw A.d(A.aP("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.iq,a)
s[$.ej()]=a
return s},
ip(a){return t.Z.a(a).$0()},
iq(a,b,c){t.Z.a(a)
if(A.q(c)>=1)return a.$1(b)
return a.$0()},
fT(a,b){var s=new A.y($.w,b.h("y<0>")),r=new A.bf(s,b.h("bf<0>"))
a.then(A.bv(new A.ed(r,b),1),A.bv(new A.ee(r),1))
return s},
ed:function ed(a,b){this.a=a
this.b=b},
ee:function ee(a){this.a=a},
dN:function dN(){this.b=this.a=0},
aa(a,b){var s=A.er(a),r=b.a,q=b.b,p=A.b1(b.c,t.L)
return new A.U(s,r,q,p,b.d,b.e,b.f)},
hA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(!(a instanceof A.F))return g
s=a.p(0,"name")
r=a.p(0,"bpm")
q=a.p(0,"meter")
if(typeof s!="string"||B.c.a6(s).length===0)return g
if(typeof r!="number"||typeof q!="string")return g
p=A.b3(q)
if(p==null)return g
o=a.p(0,"levels")
if(t.j.b(o)){n=A.e([],t.a)
for(m=o.length,l=0;l<o.length;o.length===m||(0,A.W)(o),++l)n.push(A.hv(A.o(o[l])))
k=n}else k=p.a_()
if(k.length!==p.a)k=p.a_()
j=a.p(0,"swing")
n=A.er(s)
m=B.b.n(B.d.B(r),20,300)
i=A.fk(A.o(a.p(0,"sub")))
h=typeof j=="number"?B.b.n(B.d.B(j),50,75):50
return new A.U(n,m,p,k,i,h,J.a6(a.p(0,"dotted"),!0)&&p.gT())},
er(a){var s=B.c.a6(a),r=A.eu("\\s+"),q=A.fV(s,r," ")
return q.length>40?B.c.V(q,0,40):q},
a_(a){var s,r,q=A.e([],t.J)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.W)(a),++r)q.push(a[r].bY())
return B.l.bK(q,null)},
fM(a){var s,r,q,p,o,n,m
if(a==null||a.length===0)return A.e([],t.e)
s=null
try{s=B.l.bJ(a,null)}catch(r){if(A.a0(r) instanceof A.aT)return A.e([],t.e)
else throw r}if(!t.j.b(s))return A.e([],t.e)
q=A.e([],t.e)
for(p=s,o=p.length,n=0;n<p.length;p.length===o||(0,A.W)(p),++n){m=A.hA(p[n])
if(m!=null)q.push(m)}return q},
jv(a,b){var s,r,q,p,o=A.e([b],t.e)
for(s=a.length,r=b.a,q=0;q<a.length;a.length===s||(0,A.W)(a),++q){p=a[q]
if(p.a.toLowerCase()!==r.toLowerCase())o.push(p)}return o},
js(){var s="4/4",r=new A.eg()
return A.e([r.$4$sub("Rock eighths",100,s,B.t),r.$4$sub("Funk sixteenths",92,s,B.r),r.$5$sub$swing("Swing",140,s,B.t,67),r.$4$dotted("Shuffle 12/8",72,"12/8",!0),r.$3("Jazz waltz",150,"3/4"),r.$4$sub("Songo",112,s,B.r),r.$3("Odd: 7/8",180,"7/8:2+2+3")],t.e)},
U:function U(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
eg:function eg(){},
eP(a){return B.a.b1($.eV(),new A.e7(a),new A.e8())},
eR(a){return B.a.cR($.eV(),new A.eb(a),new A.ec())},
hv(a){return B.a.b1(B.q,new A.cs(a),new A.ct())},
fk(a){return B.a.b1(B.B,new A.dh(a),new A.di())},
aj(a,b,c){var s=c==null?A.hy(a,b):c
s=new A.b2(a,b,A.eq(s,t.S))
s.c1(a,b,c)
return s},
hy(a,b){var s
if(b<8||a<5)return A.ax(a,1,!1,t.S)
if(B.b.a7(a,3)===0)return A.ax(B.b.E(a,3),3,!1,t.S)
if((a&1)===1){s=t.S
s=A.b1(A.ax(B.b.E(a-3,2),2,!1,s),s)
s.push(3)
return s}return A.ax(B.b.E(a,2),2,!1,t.S)},
b3(a){var s,r,q,p,o,n,m,l,k,j,i=A.eu("^\\s*(\\d+)\\s*/\\s*(\\d+)\\s*(?::\\s*([\\d+\\s]+))?$").cL(a)
if(i==null)return null
p=i.b
if(1>=p.length)return A.f(p,1)
o=p[1]
o.toString
s=A.eL(o)
if(2>=p.length)return A.f(p,2)
o=p[2]
o.toString
r=A.eL(o)
q=null
if(3>=p.length)return A.f(p,3)
n=p[3]
if(n!=null){p=A.e([],t.t)
for(o=n.split("+"),m=o.length,l=0;l<m;++l){k=A.es(B.c.a6(o[l]),null)
if(k!=null)p.push(k)}q=p}try{p=A.aj(s,r,q)
return p}catch(j){if(A.a0(j) instanceof A.T)return null
else throw j}},
hH(){return new A.dg()},
eF(a){var s,r=0
for(;;){s=r+1
if(!(s<10&&a>=B.e[s].a[0]))break
r=s}return r},
e7:function e7(a){this.a=a},
e8:function e8(){},
eb:function eb(a){this.a=a},
ec:function ec(){},
M:function M(a,b,c){this.c=a
this.a=b
this.b=c},
cs:function cs(a){this.a=a},
ct:function ct(){},
ak:function ak(a,b){this.a=a
this.b=b},
D:function D(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
dh:function dh(a){this.a=a},
di:function di(){},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
cw:function cw(){},
cx:function cx(){},
cA:function cA(){},
cB:function cB(){},
cy:function cy(){},
cz:function cz(){},
cn:function cn(a,b,c){var _=this
_.a=96
_.b=a
_.c=b
_.d=c
_.e=50
_.f=!1},
dg:function dg(){var _=this
_.a=!1
_.c=_.b=4
_.d=140},
cm:function cm(){this.a=!1
this.c=this.b=2},
aQ:function aQ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=0},
dk:function dk(a){this.c=a},
c(a,b){var s=A.Z(A.b(v.G.document).getElementById(a))
s.toString
return b.a(s)},
I(a,b,c){var s=A.b(A.b(v.G.document).createElement(a))
if(b!=null)s.className=b
if(c!=null)s.textContent=c
return s},
k(a,b,c){return a.addEventListener(b,A.aJ(new A.ea(c)))},
jo(a,b){return A.aW(v.G,"addEventListener",a,A.aJ(new A.e9(b)),t.X)},
eN(a){var s,r,q,p,o=null
try{s=A.Z(v.G.localStorage)
q=s
r=q==null?o:A.aW(q,"getItem",a,o,t.X)
q=r!=null&&typeof r==="string"?A.p(r):o
return q}catch(p){return o}},
R(a,b){var s,r,q
try{s=A.Z(v.G.localStorage)
r=s
if(r!=null)A.aW(r,"setItem",a,b,t.X)}catch(q){}},
eQ(){var s=A.b(v.G.navigator).audioSession
if(t.m.b(s))s.type="playback"},
jw(a){var s
try{A.z(A.b(v.G.navigator).vibrate(a))}catch(s){}},
jr(){var s,r,q,p,o,n=A.b(v.G.navigator).serviceWorker,m=t.m
if(!m.b(n))return
try{s=A.aW(A.b(n),"register","sw.js",null,m)
m=A.fT(s,t.X)
r=new A.ef()
q=m.$ti
p=$.w
if(p!==B.f)r=A.fG(r,p)
m.ah(new A.a4(new A.y(p,q),2,null,r,q.h("a4<1,1>")))}catch(o){}},
jx(){var s=v.G,r=A.Z(A.b(s.document).getElementById("themeToggle")),q=A.b(A.b(s.document).documentElement)
if(r==null)return
s=new A.ei(q,r)
A.k(r,"click",new A.eh(q,s))
s.$0()},
ea:function ea(a){this.a=a},
e9:function e9(a){this.a=a},
dn:function dn(){this.a=null
this.b=!1},
dp:function dp(a){this.a=a},
ef:function ef(){},
ei:function ei(a,b){this.a=a
this.b=b},
eh:function eh(a,b){this.a=a
this.b=b},
jm(){var s,r,q,p,o
A.jx()
A.jr()
s=v.G
r=A.Z(A.b(s.document).getElementById("metro"))
if(r==null)return
if(!("AudioContext" in s)){s=A.Z(A.b(s.document).getElementById("no-audio"))
if(s!=null)s.hidden=!1
return}s=A.aj(4,4,null)
q=A.aj(4,4,null)
q=q.a_()
p=t.m
o=new A.bT(new A.cn(s,q,B.h),A.hH(),new A.cm(),A.c("bpm",p),A.c("bpm-range",p),A.c("tempo-unit",p),A.c("tempo-word",p),A.c("start",p),A.c("transport",p),A.c("q-start",p),A.c("q-bpm",p),A.c("flash",p),A.c("position",p),A.c("grid",p),A.c("meter-beats",p),A.c("meter-unit",p),A.c("meter-groups",p),A.c("groups-row",p),A.c("meter-quick",p),A.c("dotted-row",p),A.c("dotted",p),A.c("sub",p),A.c("swing-row",p),A.c("swing",p),A.c("swing-out",p),A.c("sound",p),A.c("volume",p),A.c("sub-volume",p),A.c("vibrate-row",p),A.c("vibrate",p),A.c("big-flash",p),A.c("count-in",p),A.c("tempo-range",p),A.c("tempo-meaning",p),A.c("bpm-prev",p),A.c("bpm-next",p),A.c("status",p),A.c("my-presets",p),A.c("presets-empty",p),A.c("preset-undo",p),A.c("preset-undo-text",p),A.c("preset-undo-btn",p),A.c("speed-progress",p),A.c("starter-presets",p),A.c("preset-name",p),A.e([],t.d),A.e([],t.O),A.e([],t.A),new A.dk(A.e([],t.w)),new A.dn(),A.e([],t.e))
o.d2()
r.hidden=!1
o.b6()},
fA(a){var s,r=A.b(a.children),q=A.q(A.H(r.length)),p=A.e([],t.O)
for(s=0;s<q;++s)p.push(A.b(A.f3(r,"item",s,null,null,null)))
return p},
jf(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=A.aj(a,b,A.ax(a,1,!1,t.S))
if(b<8||a<4)return A.e([A.aj(a,b,null)],t.c)
s=A.fa(t.N)
r=t.t
new A.e1(s).$2(a,A.e([],r))
q=A.aj(a,b,null)
p=A.e([q],t.c)
for(o=A.hU(s,s.r,s.$ti.c),n=q.c,m=o.$ti.c;o.q();){l=o.d
if(l==null)l=m.a(l)
if(l!==B.a.O(n,"+")){k=A.e([],r)
for(l=l.split("+"),j=l.length,i=0;i<j;++i)k.push(A.eL(l[i]))
p.push(A.aj(a,b,k))}}p.push(h)
return p},
bT:function bT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1){var _=this
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
_.S=0.8
_.aa=0.6
_.ac=_.ab=!1
_.M=0
_.bL=_.N=_.I=null
_.F=!1
_.au=0
_.bM=_.ae=_.av=_.ad=null
_.a1=c6
_.aw=c7
_.bN=c8
_.az=null
_.bO=-1
_.cK=c9
_.bQ=_.bP=null
_.a2=d0
_.D=d1
_.aA=_.aZ=null
_.b_=_.a3=$},
cQ:function cQ(a){this.a=a},
cR:function cR(a){this.a=a},
cS:function cS(a){this.a=a},
d2:function d2(a){this.a=a},
d4:function d4(a){this.a=a},
d5:function d5(a){this.a=a},
d6:function d6(a){this.a=a},
d7:function d7(a){this.a=a},
d8:function d8(a){this.a=a},
d9:function d9(a){this.a=a},
da:function da(a){this.a=a},
cT:function cT(a){this.a=a},
cU:function cU(a){this.a=a},
cV:function cV(a){this.a=a},
cW:function cW(a){this.a=a},
cX:function cX(a){this.a=a},
cY:function cY(a){this.a=a},
cZ:function cZ(a){this.a=a},
d_:function d_(a){this.a=a},
d0:function d0(a){this.a=a},
d1:function d1(a){this.a=a},
d3:function d3(a){this.a=a},
cE:function cE(a,b){this.a=a
this.b=b},
cM:function cM(a){this.a=a},
cL:function cL(){},
cC:function cC(){},
cD:function cD(a,b){this.a=a
this.b=b},
cP:function cP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
cO:function cO(a){this.a=a},
cJ:function cJ(a){this.a=a},
cF:function cF(a){this.a=a},
cH:function cH(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
cN:function cN(a){this.a=a},
cG:function cG(a){this.a=a},
cK:function cK(a,b){this.a=a
this.b=b},
e1:function e1(a){this.a=a},
fW(a){return v.mangledGlobalNames[a]},
jt(a){throw A.B(A.f7(a),new Error())},
eT(){throw A.B(A.f7(""),new Error())},
f3(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else{s=a[b](c,d)
return s}},
aW(a,b,c,d,e){return e.a(A.f3(a,b,c,d,null,null))}},B={}
var w=[A,J,B]
var $={}
A.eo.prototype={}
J.bJ.prototype={
P(a,b){return a===b},
gl(a){return A.c2(a)},
i(a){return"Instance of '"+A.c3(a)+"'"},
gm(a){return A.ao(A.eB(this))}}
J.bL.prototype={
i(a){return String(a)},
gl(a){return a?519018:218159},
gm(a){return A.ao(t.y)},
$il:1,
$iC:1}
J.aV.prototype={
P(a,b){return null==b},
i(a){return"null"},
gl(a){return 0},
$il:1}
J.aY.prototype={$it:1}
J.a9.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.c1.prototype={}
J.aD.prototype={}
J.a8.prototype={
i(a){var s=a[$.fY()]
if(s==null)s=a[$.ej()]
if(s==null)return this.c0(a)
return"JavaScript function for "+J.by(s)},
$iaf:1}
J.aX.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.aZ.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.n.prototype={
j(a,b){A.K(a).c.a(b)
a.$flags&1&&A.bx(a,29)
a.push(b)},
aC(a,b){a.$flags&1&&A.bx(a,"removeAt",1)
if(b<0||b>=a.length)throw A.d(A.et(b,null))
return a.splice(b,1)[0]},
R(a){a.$flags&1&&A.bx(a,"clear","clear")
a.length=0},
O(a,b){var s,r=A.ax(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.K(r,s,A.o(a[s]))
return r.join(b)},
cM(a,b,c,d){var s,r,q
d.a(b)
A.K(a).t(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.Y(a))}return r},
b1(a,b,c){var s,r,q,p=A.K(a)
p.h("C(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.d(A.Y(a))}p=c.$0()
return p},
cR(a,b,c){var s,r,q,p=A.K(a)
p.h("C(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=s-1;r>=0;--r){q=a[r]
if(b.$1(q))return q
if(s!==a.length)throw A.d(A.Y(a))}p=c.$0()
return p},
gb0(a){if(a.length>0)return a[0]
throw A.d(A.f2())},
gbU(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.f2())},
bF(a,b){var s,r
A.K(a).h("C(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.d(A.Y(a))}return!1},
a0(a,b){var s,r
A.K(a).h("C(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.d(A.Y(a))}return!0},
a9(a,b){var s
for(s=0;s<a.length;++s)if(J.a6(a[s],b))return!0
return!1},
gbT(a){return a.length!==0},
i(a){return A.en(a,"[","]")},
gG(a){return new J.as(a,a.length,A.K(a).h("as<1>"))},
gl(a){return A.c2(a)},
gk(a){return a.length},
K(a,b,c){A.K(a).c.a(c)
a.$flags&2&&A.bx(a)
if(!(b>=0&&b<a.length))throw A.d(A.fN(a,b))
a[b]=c},
cP(a,b){var s
A.K(a).h("C(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
$ih:1,
$ij:1}
J.bK.prototype={
d_(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.c3(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.co.prototype={}
J.as.prototype={
gA(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.W(q)
throw A.d(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.au.prototype={
aW(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.b.gaB(b)
if(this.gaB(a)===s)return 0
if(this.gaB(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaB(a){return a===0?1/a<0:a<0},
B(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.ew(""+a+".round()"))},
n(a,b,c){if(B.b.aW(b,c)>0)throw A.d(A.j2(b))
if(this.aW(a,b)<0)return b
if(this.aW(a,c)>0)return c
return a},
cX(a,b){var s
if(b>20)throw A.d(A.ba(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaB(a))return"-"+s
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
b9(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bA(a,b)},
E(a,b){return(a|0)===a?a/b|0:this.bA(a,b)},
bA(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.ew("Result of truncating division is "+A.o(s)+": "+A.o(a)+" ~/ "+b))},
by(a,b){var s
if(a>0)s=this.cu(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cu(a,b){return b>31?0:a>>>b},
gm(a){return A.ao(t.o)},
$im:1,
$iar:1}
J.aU.prototype={
gm(a){return A.ao(t.S)},
$il:1,
$ia:1}
J.bM.prototype={
gm(a){return A.ao(t.i)},
$il:1}
J.av.prototype={
V(a,b,c){return a.substring(b,A.hE(b,c,a.length))},
a6(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.f(p,0)
if(p.charCodeAt(0)===133){s=J.ht(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.f(p,r)
q=p.charCodeAt(r)===133?J.hu(p,r):o
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
$idd:1,
$iv:1}
A.bQ.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.de.prototype={}
A.aR.prototype={}
A.ai.prototype={
gG(a){var s=this
return new A.aw(s,s.gk(s),A.ad(s).h("aw<ai.E>"))},
ga4(a){return this.gk(this)===0}}
A.aw.prototype={
gA(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.fO(q),o=p.gk(q)
if(r.b!==o)throw A.d(A.Y(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.ar(q,s);++r.c
return!0}}
A.G.prototype={}
A.aI.prototype={$r:"+(1,2)",$s:1}
A.J.prototype={$r:"+(1,2,3,4)",$s:2}
A.bb.prototype={}
A.dl.prototype={
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
A.b8.prototype={
i(a){return"Null check operator used on a null value"}}
A.bO.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.c8.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.dc.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aS.prototype={}
A.bl.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iab:1}
A.a7.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fX(r==null?"unknown":r)+"'"},
$iaf:1,
gd5(){return this},
$C:"$1",
$R:1,
$D:null}
A.bC.prototype={$C:"$0",$R:0}
A.bD.prototype={$C:"$2",$R:2}
A.c6.prototype={}
A.c5.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fX(s)+"'"}}
A.at.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.at))return!1
return this.$_target===b.$_target&&this.a===b.a},
gl(a){return(A.fR(this.a)^A.c2(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c3(this.a)+"'")}}
A.c4.prototype={
i(a){return"RuntimeError: "+this.a}}
A.b_.prototype={
gk(a){return this.a},
ga4(a){return this.a===0},
ga5(){return new A.ah(this,this.$ti.h("ah<1>"))},
p(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cQ(b)},
cQ(a){var s,r,q=this.d
if(q==null)return null
s=this.cg(q,a)
r=this.bR(s,a)
if(r<0)return null
return s[r].b},
K(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.ba(s==null?m.b=m.aO():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.ba(r==null?m.c=m.aO():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aO()
p=J.S(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.aF(b,c)]
else{n=m.bR(o,b)
if(n>=0)o[n].b=c
else o.push(m.aF(b,c))}}},
af(a,b){var s,r,q=this
q.$ti.h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.Y(q))
s=s.c}},
ba(a,b,c){var s,r=this.$ti
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.aF(b,c)
else s.b=c},
aF(a,b){var s=this,r=s.$ti,q=new A.cu(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
cg(a,b){return a[J.S(b)&1073741823]},
bR(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1},
i(a){return A.fc(this)},
aO(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$if8:1}
A.cu.prototype={}
A.ah.prototype={
gk(a){return this.a.a},
ga4(a){return this.a.a===0},
gG(a){var s=this.a
return new A.bR(s,s.r,s.e,this.$ti.h("bR<1>"))}}
A.bR.prototype={
gA(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.Y(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.e2.prototype={
$1(a){return this.a(a)},
$S:5}
A.e3.prototype={
$2(a,b){return this.a(a,b)},
$S:12}
A.e4.prototype={
$1(a){return this.a(A.p(a))},
$S:13}
A.a5.prototype={
i(a){return this.bD(!1)},
bD(a){var s,r,q,p,o,n=this.ce(),m=this.aN(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.f(m,q)
o=m[q]
l=a?l+A.ff(o):l+A.o(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
ce(){var s,r=this.$s
while($.dO.length<=r)B.a.j($.dO,null)
s=$.dO[r]
if(s==null){s=this.c8()
B.a.K($.dO,r,s)}return s},
c8(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.e(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.K(k,q,r[s])}}return A.eq(k,t.K)}}
A.aG.prototype={
aN(){return[this.a,this.b]},
P(a,b){if(b==null)return!1
return b instanceof A.aG&&this.$s===b.$s&&J.a6(this.a,b.a)&&J.a6(this.b,b.b)},
gl(a){return A.fd(this.$s,this.a,this.b,B.k)}}
A.aH.prototype={
aN(){return this.a},
P(a,b){if(b==null)return!1
return b instanceof A.aH&&this.$s===b.$s&&A.i2(this.a,b.a)},
gl(a){return A.fd(this.$s,A.hz(this.a),B.k,B.k)}}
A.bN.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
gcm(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.f5(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
cL(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dM(s)},
$idd:1,
$ihF:1}
A.dM.prototype={}
A.ay.prototype={
gm(a){return B.a4},
$il:1}
A.b6.prototype={}
A.bU.prototype={
gm(a){return B.a5},
$il:1}
A.aA.prototype={
gk(a){return a.length},
$iL:1}
A.b4.prototype={$ih:1,$ij:1}
A.b5.prototype={$ih:1,$ij:1}
A.az.prototype={
gm(a){return B.a6},
$il:1,
$iaz:1}
A.bV.prototype={
gm(a){return B.a7},
$il:1}
A.bW.prototype={
gm(a){return B.a8},
$il:1}
A.bX.prototype={
gm(a){return B.a9},
$il:1}
A.bY.prototype={
gm(a){return B.aa},
$il:1}
A.bZ.prototype={
gm(a){return B.ac},
$il:1}
A.c_.prototype={
gm(a){return B.ad},
$il:1}
A.b7.prototype={
gm(a){return B.ae},
gk(a){return a.length},
$il:1}
A.c0.prototype={
gm(a){return B.af},
gk(a){return a.length},
$il:1}
A.bg.prototype={}
A.bh.prototype={}
A.bi.prototype={}
A.bj.prototype={}
A.V.prototype={
h(a){return A.bq(v.typeUniverse,this,a)},
t(a){return A.fw(v.typeUniverse,this,a)}}
A.cd.prototype={}
A.dR.prototype={
i(a){return A.N(this.a,null)}}
A.cc.prototype={
i(a){return this.a}}
A.bm.prototype={$ia2:1}
A.dt.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:6}
A.ds.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:14}
A.du.prototype={
$0(){this.a.$0()},
$S:7}
A.dv.prototype={
$0(){this.a.$0()},
$S:7}
A.dP.prototype={
c3(a,b){if(self.setTimeout!=null)self.setTimeout(A.bv(new A.dQ(this,b),0),a)
else throw A.d(A.ew("`setTimeout()` not found."))}}
A.dQ.prototype={
$0(){this.b.$0()},
$S:0}
A.c9.prototype={
aX(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.bc(a)
else{s=r.a
if(q.h("ag<1>").b(a))s.bd(a)
else s.be(a)}},
aY(a,b){var s
if(b==null)b=A.cl(a)
s=this.a
if(this.b)s.aI(new A.P(a,b))
else s.aG(new A.P(a,b))}}
A.dV.prototype={
$1(a){return this.a.$2(0,a)},
$S:2}
A.dW.prototype={
$2(a,b){this.a.$2(1,new A.aS(a,t.l.a(b)))},
$S:15}
A.dZ.prototype={
$2(a,b){this.a(A.q(a),b)},
$S:16}
A.P.prototype={
i(a){return A.o(this.a)},
$ir:1,
gag(){return this.b}}
A.cb.prototype={
aY(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.fi("Future already completed"))
s.aG(A.iB(a,b))},
bI(a){return this.aY(a,null)}}
A.bf.prototype={
aX(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.d(A.fi("Future already completed"))
s.bc(r.h("1/").a(a))}}
A.a4.prototype={
cS(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.aS(s,t.x.a(this.d),a.a,t.y,t.K)},
cO(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.cr(l,q,m,a.b,o,n,t.l)
else p=l.aS(l,t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.r.b(A.a0(s))){if((r.c&1)!==0)throw A.d(A.aP("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.aP("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.y.prototype={
bX(a,b,c){var s,r,q,p=this.$ti
p.t(c).h("1/(2)").a(a)
s=$.w
if(s===B.f){if(b!=null&&!t.Q.b(b)&&!t.v.b(b))throw A.d(A.bz(b,"onError",u.c))}else{r=p.c
a=s.bq(s,c.h("@<0/>").t(r).h("1(2)").a(a),c.h("0/"),r)
if(b!=null)b=A.fG(b,s)}q=new A.y(s,c.h("y<0>"))
r=b==null?1:3
this.ah(new A.a4(q,r,a,b,p.h("@<1>").t(c).h("a4<1,2>")))
return q},
bB(a,b,c){var s,r=this.$ti
r.t(c).h("1/(2)").a(a)
s=new A.y($.w,c.h("y<0>"))
this.ah(new A.a4(s,19,a,b,r.h("@<1>").t(c).h("a4<1,2>")))
return s},
ct(a){this.a=this.a&1|16
this.c=a},
aj(a){this.a=a.a&30|this.a&1
this.c=a.c},
ah(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.ah(a)
return}r.aj(s)}q=r.b
q.a8(q,new A.dy(r,a))}},
bn(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.bn(a)
return}m.aj(n)}l.a=m.an(a)
s=m.b
s.a8(s,new A.dC(l,m))}},
am(){var s=t.F.a(this.c)
this.c=null
return this.an(s)},
an(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
be(a){var s,r=this
r.$ti.c.a(a)
s=r.am()
r.a=8
r.c=a
A.aE(r,s)},
c7(a){var s=this.am()
this.aj(a)
A.aE(this,s)},
aI(a){var s=this.am()
this.ct(a)
A.aE(this,s)},
bc(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("ag<1>").b(a)){this.bd(a)
return}this.c5(a)},
c5(a){var s,r=this
r.$ti.c.a(a)
r.a^=2
s=r.b
s.a8(s,new A.dA(r,a))},
bd(a){A.ex(this.$ti.h("ag<1>").a(a),this,!1)
return},
aG(a){var s
this.a^=2
s=this.b
s.a8(s,new A.dz(this,a))},
$iag:1}
A.dy.prototype={
$0(){A.aE(this.a,this.b)},
$S:0}
A.dC.prototype={
$0(){A.aE(this.b,this.a.a)},
$S:0}
A.dB.prototype={
$0(){A.ex(this.a.a,this.b,!0)},
$S:0}
A.dA.prototype={
$0(){this.a.be(this.b)},
$S:0}
A.dz.prototype={
$0(){this.a.aI(this.b)},
$S:0}
A.dF.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.br(p,t.G.a(q.d),t.z)}catch(o){s=A.a0(o)
r=A.aN(o)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
p=r
if(p==null)p=A.cl(q)
n=k.a
n.c=new A.P(q,p)
q=n}q.b=!0
return}if(j instanceof A.y&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.y){m=k.b.a
l=new A.y(m.b,m.$ti)
j.bX(new A.dG(l,m),new A.dH(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.dG.prototype={
$1(a){this.a.c7(this.b)},
$S:6}
A.dH.prototype={
$2(a,b){A.br(a)
t.l.a(b)
this.a.aI(new A.P(a,b))},
$S:17}
A.dE.prototype={
$0(){var s,r,q,p,o,n,m,l,k
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
l=p.b.b
q.c=l.aS(l,o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(k){s=A.a0(k)
r=A.aN(k)
q=s
p=r
if(p==null)p=A.cl(q)
o=this.a
o.c=new A.P(q,p)
o.b=!0}},
$S:0}
A.dD.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.cS(s)&&p.a.e!=null){p.c=p.a.cO(s)
p.b=!1}}catch(o){r=A.a0(o)
q=A.aN(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.cl(p)
m=l.b
m.c=new A.P(p,n)
p=m}p.b=!0}},
$S:0}
A.ca.prototype={}
A.ch.prototype={}
A.dq.prototype={
cG(a,b){return new A.dr(this,this.cp(this,b.h("0()").a(a),b),b)},
bh(a,b,c){var s,r,q,p,o,n,m,l
t.l.a(c)
s=null
if(s==null){A.iS(b,c)
return}r=s.gb7()
q=r.gd6()
p=$.w
try{$.w=q
s.cN(r,r.gaQ(),a,b,c)
$.w=p}catch(m){o=A.a0(m)
n=A.aN(m)
$.w=p
l=b===o?c:n
q.bh(r,o,l)}},
br(a,b,c){var s,r,q
c.h("0()").a(b)
r=$.w
if(r===a)return b.$0()
s=r
$.w=a
try{r=b.$0()
return r}finally{$.w=s}q=null.gb7()
return null.d7(q,q.gaQ(),a,b)},
aS(a,b,c,d,e){var s,r,q
d.h("@<0>").t(e).h("1(2)").a(b)
e.a(c)
r=$.w
if(r===a)return b.$1(c)
s=r
$.w=a
try{r=b.$1(c)
return r}finally{$.w=s}q=null.gb7()
return null.cN(q,q.gaQ(),a,b,c)},
cr(a,b,c,d,e,f,g){var s,r,q
e.h("@<0>").t(f).t(g).h("1(2,3)").a(b)
f.a(c)
g.a(d)
r=$.w
if(r===a)return b.$2(c,d)
s=r
$.w=a
try{r=b.$2(c,d)
return r}finally{$.w=s}q=null.gb7()
return null.d8(q,q.gaQ(),a,b,c,d)},
cp(a,b,c){c.h("0()").a(b)
return b},
bq(a,b,c,d){c.h("@<0>").t(d).h("1(2)").a(b)
return b},
bp(a,b,c,d,e){c.h("@<0>").t(d).t(e).h("1(2,3)").a(b)
return b},
cd(a,b,c){return null},
a8(a,b){A.iT(a,t.M.a(b))
return}}
A.dr.prototype={
$0(){var s=this.a
return s.br(s,this.b,this.c)},
$S(){return this.c.h("0()")}}
A.dY.prototype={
$0(){A.hj(this.a,this.b)},
$S:0}
A.al.prototype={
gG(a){var s=this,r=new A.aF(s,s.r,A.ad(s).h("aF<1>"))
r.c=s.e
return r},
gk(a){return this.a},
a9(a,b){var s
if((b&1073741823)===b){s=this.c
if(s==null)return!1
return t.R.a(s[b])!=null}else return this.c9(b)},
c9(a){var s=this.d
if(s==null)return!1
return this.bg(s[this.bf(a)],a)>=0},
j(a,b){var s,r,q=this
A.ad(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bb(s==null?q.b=A.ey():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bb(r==null?q.c=A.ey():r,b)}else return q.c4(b)},
c4(a){var s,r,q,p=this
A.ad(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.ey()
r=p.bf(a)
q=s[r]
if(q==null)s[r]=[p.aP(a)]
else{if(p.bg(q,a)>=0)return!1
q.push(p.aP(a))}return!0},
bb(a,b){A.ad(this).c.a(b)
if(t.R.a(a[b])!=null)return!1
a[b]=this.aP(b)
return!0},
aP(a){var s=this,r=new A.cg(A.ad(s).c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
bf(a){return J.S(a)&1073741823},
bg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1}}
A.cg.prototype={}
A.aF.prototype={
gA(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.Y(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}}}
A.u.prototype={
gG(a){return new A.aw(a,a.length,A.bw(a).h("aw<u.E>"))},
ar(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
gbT(a){return a.length!==0},
i(a){return A.en(a,"[","]")}}
A.F.prototype={
af(a,b){var s,r,q,p=A.ad(this)
p.h("~(F.K,F.V)").a(b)
for(s=this.ga5(),s=s.gG(s),p=p.h("F.V");s.q();){r=s.gA()
q=this.p(0,r)
b.$2(r,q==null?p.a(q):q)}},
gk(a){var s=this.ga5()
return s.gk(s)},
ga4(a){var s=this.ga5()
return s.ga4(s)},
i(a){return A.fc(this)},
$ibS:1}
A.cv.prototype={
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
i(a){return A.en(this,"{","}")},
$ih:1}
A.bk.prototype={}
A.ce.prototype={
p(a,b){var s,r=this.b
if(r==null)return this.c.p(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.co(b):s}},
gk(a){return this.b==null?this.c.a:this.ak().length},
ga4(a){return this.gk(0)===0},
ga5(){if(this.b==null){var s=this.c
return new A.ah(s,s.$ti.h("ah<1>"))}return new A.cf(this)},
af(a,b){var s,r,q,p,o=this
t.cQ.a(b)
if(o.b==null)return o.c.af(0,b)
s=o.ak()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.dX(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.Y(o))}},
ak(){var s=t.aL.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
co(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.dX(this.a[a])
return this.b[a]=s}}
A.cf.prototype={
gk(a){return this.a.gk(0)},
ar(a,b){var s=this.a
if(s.b==null)s=s.ga5().ar(0,b)
else{s=s.ak()
if(!(b>=0&&b<s.length))return A.f(s,b)
s=s[b]}return s},
gG(a){var s=this.a
if(s.b==null){s=s.ga5()
s=s.gG(s)}else{s=s.ak()
s=new J.as(s,s.length,A.K(s).h("as<1>"))}return s}}
A.bE.prototype={}
A.bG.prototype={}
A.b0.prototype={
i(a){var s=A.bH(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.bP.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.cp.prototype={
bJ(a,b){var s=A.iQ(a,this.gcI().a)
return s},
bK(a,b){var s=A.hT(a,this.gcJ().b,null)
return s},
gcJ(){return B.O},
gcI(){return B.N}}
A.cr.prototype={}
A.cq.prototype={}
A.dK.prototype={
c_(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.c.V(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.c.V(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.c.V(a,r,q)
r=q+1
o=A.E(92)
s.a+=o
o=A.E(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.c.V(a,r,m)},
aH(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.d(new A.bP(a,null))}B.a.j(s,a)},
aD(a){var s,r,q,p,o=this
if(o.bZ(a))return
o.aH(a)
try{s=o.b.$1(a)
if(!o.bZ(s)){q=A.f6(a,null,o.gbm())
throw A.d(q)}q=o.a
if(0>=q.length)return A.f(q,-1)
q.pop()}catch(p){r=A.a0(p)
q=A.f6(a,r,o.gbm())
throw A.d(q)}},
bZ(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.d.i(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.c_(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.aH(a)
q.d3(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return!0}else if(a instanceof A.F){q.aH(a)
r=q.d4(a)
s=q.a
if(0>=s.length)return A.f(s,-1)
s.pop()
return r}else return!1},
d3(a){var s,r=this.c
r.a+="["
if(J.h9(a)){if(0>=a.length)return A.f(a,0)
this.aD(a[0])
for(s=1;s<a.length;++s){r.a+=","
this.aD(a[s])}}r.a+="]"},
d4(a){var s,r,q,p,o,n,m=this,l={}
if(a.ga4(a)){m.c.a+="{}"
return!0}s=a.gk(a)*2
r=A.ax(s,null,!1,t.X)
q=l.a=0
l.b=!0
a.af(0,new A.dL(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.c_(A.p(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.f(r,n)
m.aD(r[n])}p.a+="}"
return!0}}
A.dL.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.K(s,r.a++,a)
B.a.K(s,r.a++,b)},
$S:8}
A.dJ.prototype={
gbm(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.dw.prototype={
i(a){return this.aK()}}
A.r.prototype={
gag(){return A.hB(this)}}
A.bA.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bH(s)
return"Assertion failed"}}
A.a2.prototype={}
A.T.prototype={
gaM(){return"Invalid argument"+(!this.a?"(s)":"")},
gaL(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.o(p),n=s.gaM()+q+o
if(!s.a)return n
return n+s.gaL()+": "+A.bH(s.gb2())},
gb2(){return this.b}}
A.b9.prototype={
gb2(){return A.fz(this.b)},
gaM(){return"RangeError"},
gaL(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.o(q):""
else if(q==null)s=": Not greater than or equal to "+A.o(r)
else if(q>r)s=": Not in inclusive range "+A.o(r)+".."+A.o(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.o(r)
return s}}
A.bI.prototype={
gb2(){return A.q(this.b)},
gaM(){return"RangeError"},
gaL(){if(A.q(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.be.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.c7.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bd.prototype={
i(a){return"Bad state: "+this.a}}
A.bF.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bH(s)+"."}}
A.bc.prototype={
i(a){return"Stack Overflow"},
gag(){return null},
$ir:1}
A.dx.prototype={
i(a){return"Exception: "+this.a}}
A.aT.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.c.V(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.h.prototype={
gk(a){var s,r=this.gG(this)
for(s=0;r.q();)++s
return s},
ar(a,b){var s,r
A.hD(b,"index")
s=this.gG(this)
for(r=b;s.q();){if(r===0)return s.gA();--r}throw A.d(A.f1(b,b-r,this,"index"))},
i(a){return A.hp(this,"(",")")}}
A.x.prototype={
gl(a){return A.i.prototype.gl.call(this,0)},
i(a){return"null"}}
A.i.prototype={$ii:1,
P(a,b){return this===b},
gl(a){return A.c2(this)},
i(a){return"Instance of '"+A.c3(this)+"'"},
gm(a){return A.jd(this)},
toString(){return this.i(this)}}
A.ci.prototype={
i(a){return""},
$iab:1}
A.aC.prototype={
gk(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ihJ:1}
A.db.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.ed.prototype={
$1(a){return this.a.aX(this.b.h("0/?").a(a))},
$S:2}
A.ee.prototype={
$1(a){if(a==null)return this.a.bI(new A.db(a===undefined))
return this.a.bI(a)},
$S:2}
A.dN.prototype={
c2(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.W()
l.W()
l.W()
l.W()},
W(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.b.E(o-n+(q-p)+(m-r),4294967296)>>>0},
cU(){var s,r=this
r.W()
s=r.a
r.W()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992}}
A.U.prototype={
bG(a){var s,r,q=this
a.a=q.b
s=q.c
a.b=s
r=A.b1(q.d,t.L)
a.sbV(r)
a.d=q.e
a.e=q.f
a.f=q.r&&s.gT()},
gb8(){var s,r,q=this,p=q.r?" (dotted quarter)":""
p=A.e([""+q.b+" BPM"+p,q.c.gU()],t.s)
s=q.e
if(s!==B.h){r=A.eu(" \\(\\d\\)")
p.push(A.fV(s.d,r,""))}if((s.c&1)===0&&q.f>50)p.push("swing "+q.f+"%")
return B.a.O(p," \xb7 ")},
bY(){var s,r,q,p=this,o=p.c.gL(),n=A.e([],t.s)
for(s=p.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.W)(s),++q)n.push(s[q].b)
return A.f9(["name",p.a,"bpm",p.b,"meter",o,"levels",n,"sub",p.e.b,"swing",p.f,"dotted",p.r],t.N,t.K)}}
A.eg.prototype={
$6$dotted$sub$swing(a,b,c,d,e,f){var s=A.b3(c)
return new A.U(a,b,s,s.a_(),e,f,d)},
$3(a,b,c){return this.$6$dotted$sub$swing(a,b,c,!1,B.h,50)},
$4$sub(a,b,c,d){return this.$6$dotted$sub$swing(a,b,c,!1,d,50)},
$5$sub$swing(a,b,c,d,e){return this.$6$dotted$sub$swing(a,b,c,!1,d,e)},
$4$dotted(a,b,c,d){return this.$6$dotted$sub$swing(a,b,c,d,B.h,50)},
$S:18}
A.e7.prototype={
$1(a){return A.q(a)>this.a},
$S:1}
A.e8.prototype={
$0(){return 300},
$S:9}
A.eb.prototype={
$1(a){return A.q(a)<this.a},
$S:1}
A.ec.prototype={
$0(){return 20},
$S:9}
A.M.prototype={
aK(){return"Level."+this.b}}
A.cs.prototype={
$1(a){return t.L.a(a).b===this.a},
$S:19}
A.ct.prototype={
$0(){return B.n},
$S:20}
A.ak.prototype={
aK(){return"Voice."+this.b}}
A.D.prototype={
aK(){return"Subdivision."+this.b}}
A.dh.prototype={
$1(a){return t.Y.a(a).b===this.a},
$S:21}
A.di.prototype={
$0(){return B.h},
$S:22}
A.b2.prototype={
c1(a,b,c){var s,r=this.a
if(r<1||r>32)throw A.d(A.bz(r,"beats","must be 1 to 32"))
s=this.b
if(!B.a.a9(B.p,s))throw A.d(A.bz(s,"unit","must be one of "+A.o(B.p)))
s=this.c
if(B.a.bF(s,new A.cw())||B.a.cM(s,0,new A.cx(),t.S)!==r)throw A.d(A.bz(c,"groups","must add up to "+r))},
gT(){if(this.b>=8){var s=this.a
s=B.b.a7(s,3)===0&&s>3&&B.a.a0(this.c,new A.cA())}else s=!1
return s},
gaE(){var s,r,q,p,o,n=A.e([],t.t)
for(s=this.c,r=s.length,q=0,p=0;p<r;++p){o=s[p]
B.a.j(n,q)
q+=o}return n},
gU(){var s=this,r=s.c,q=B.a.a0(r,new A.cB())||s.gT(),p=""+s.a,o=""+s.b
return q?p+"/"+o:p+"/"+o+" ("+B.a.O(r,"+")+")"},
gL(){var s=this.c,r=""+this.a,q=""+this.b
return B.a.a0(s,new A.cy())?r+"/"+q:r+"/"+q+":"+B.a.O(s,"+")},
a_(){var s,r,q,p,o=this.gaE(),n=A.fb(o,A.K(o).c)
o=A.e([],t.a)
for(s=this.a,r=this.c,q=0;q<s;++q){if(q===0)p=B.y
else if(n.a9(0,q))p=B.n
else p=B.a.a0(r,new A.cz())?B.n:B.z
o.push(p)}return o},
P(a,b){if(b==null)return!1
return b instanceof A.b2&&b.gL()===this.gL()},
gl(a){return B.c.gl(this.gL())}}
A.cw.prototype={
$1(a){return A.q(a)<1},
$S:1}
A.cx.prototype={
$2(a,b){return A.q(a)+A.q(b)},
$S:23}
A.cA.prototype={
$1(a){return A.q(a)===3},
$S:1}
A.cB.prototype={
$1(a){return A.q(a)===1},
$S:1}
A.cy.prototype={
$1(a){return A.q(a)===1},
$S:1}
A.cz.prototype={
$1(a){return A.q(a)===1},
$S:1}
A.cn.prototype={
gbH(){var s=60/this.a
return this.f&&this.b.gT()?s/3:s},
cH(a){var s,r,q=this,p=q.gbH(),o=q.d.c,n=p/o
if((o&1)!==0||q.e===50)return n
s=n*2
r=B.b.n(q.e,50,75)/100
return(a&1)===0?s*r:s*(1-r)},
d1(a,b){var s,r=this.c
if(!(a<r.length))return A.f(r,a)
s=r[a]
if(s===B.A)return B.j
if(b>0)return B.v
switch(s.a){case 0:r=B.i
break
case 1:r=B.o
break
case 2:r=B.D
break
case 3:r=B.j
break
default:r=null}return r},
sbV(a){this.c=t.B.a(a)}}
A.dg.prototype={
b3(a){var s,r=this,q=!1
if(r.a)if(r.c>=1){s=r.b
if(s!==0){q=r.d
q=s>0?B.b.n(B.b.B(q),20,300)>a:B.b.n(B.b.B(q),20,300)<a}}return q},
b5(a,b){var s,r,q,p=this
if(!p.b3(a))return a
s=B.b.n(B.b.B(p.d),20,300)
r=p.b
q=a+r*B.b.b9(b,p.c)
return B.b.n(B.d.B(r>0?Math.min(q,s):Math.max(q,s)),20,300)},
cF(a,b){var s,r=this
if(!r.b3(a)||r.b5(a,b)===B.b.n(B.b.B(r.d),20,300))return null
s=r.c
return s-B.b.a7(b,s)},
cV(a,b){var s,r,q,p,o,n,m=this
if(!m.a)return""
if(!m.b3(a)){s=m.b
if(s===0)s="Speed trainer: set a change other than 0 BPM."
else{r=m.d
s=s>0?"not above":"not below"
s="Speed trainer: the target ("+r+" BPM) is "+s+" the current tempo, so the tempo will stay put."}return s}q=m.b5(a,b)
p=m.cF(a,b)
if(p==null)return"Speed trainer: reached "+m.d+" BPM. Holding here."
s=m.b
o=s>0?"+":"\u2212"
r=m.d
n=p===1?"":"s"
return"Speed trainer: "+q+" \u2192 "+r+" BPM \xb7 next "+o+Math.abs(s)+" in "+A.o(p)+" bar"+n}}
A.cm.prototype={
bS(a){var s,r=this
if(!r.a||r.c<1||r.b<1)return!1
s=r.b
return B.b.a7(a,s+r.c)>=s}}
A.aQ.prototype={
i(a){var s=this
return"Click("+B.d.cX(s.a,3)+", "+s.b.i(0)+", bar "+s.c+", cell "+s.d+"."+s.e+")"}}
A.df.prototype={
b4(){var s,r,q=this
q.d=q.a.a
s=q.y===0&&q.z===0
r=q.x
q.e=s?r:r+1},
cT(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(g.r>0){s=g.a
r=s.b
q=r.c
p=r.gaE()
r=g.w
o=q.length
n=B.b.a7(r,o)
m=g.Q
l=n===0?B.i:B.o
k=g.f
r=B.b.b9(r,o)
if(!(n<p.length))return A.f(p,n)
j=p[n]
i=s.a
g.Q=m+s.gbH()*q[n];++g.w;--g.r
return new A.aQ(m,l,-k+r,j,0,i,!0,n+1,o)}s=g.y
r=g.a
if(s>=r.b.a){s=g.z=g.y=0;++g.x}o=g.z
if(o>=r.d.c)o=g.z=0
if(s===0&&o===0&&g.b.a)r.a=g.b.b5(g.d,g.x-g.e)
h=g.c.bS(g.x)?B.j:r.d1(g.y,g.z)
s=g.Q
o=g.x
m=g.y
l=g.z
k=r.a
g.Q=s+r.cH(l)
if(++g.z>=r.d.c){g.z=0
if(++g.y>=r.b.a){g.y=0;++g.x}}return new A.aQ(s,h,o,m,l,k,!1,0,0)}}
A.dk.prototype={
cW(a){var s=this.c
if(s.length!==0&&a-B.a.gbU(s)>2000)B.a.R(s)
B.a.j(s,a)
if(s.length>5)B.a.aC(s,0)
if(s.length<2)return null
return B.b.n(B.d.B(6e4/((B.a.gbU(s)-B.a.gb0(s))/(s.length-1))),20,300)}}
A.ea.prototype={
$1(a){return this.a.$0()},
$S:3}
A.e9.prototype={
$1(a){return this.a.$0()},
$S:3}
A.dn.prototype={
Z(){var s=0,r=A.iO(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$Z=A.j1(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:n.b=!0
m=A.b(v.G.navigator).wakeLock
k=t.m
if(!k.b(m)||n.a!=null){s=1
break}p=4
l=A.aW(A.b(m),"request","screen",null,k)
s=7
return A.ij(A.fT(l,k),$async$Z)
case 7:k=b
n.a=k
k.toString
A.k(k,"release",new A.dp(n))
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
case 6:case 1:return A.il(q,r)
case 2:return A.ik(o.at(-1),r)}})
return A.im($async$Z,r)},
bW(){var s,r
this.b=!1
s=this.a
this.a=null
if(s!=null)try{A.aW(s,"release",null,null,t.X)}catch(r){}}}
A.dp.prototype={
$0(){return this.a.a=null},
$S:0}
A.ef.prototype={
$1(a){A.br(a)
return null},
$S:24}
A.ei.prototype={
$0(){var s,r=A.dU(this.a.getAttribute("data-theme"))==="light",q=r?"Switch to dark theme":"Switch to light theme",p=this.b
p.setAttribute("aria-label",q)
p.setAttribute("title",q)
s=A.Z(p.firstElementChild)
if(s!=null){p=r?"\u263e":"\u2600"
s.textContent=p}},
$S:0}
A.eh.prototype={
$0(){var s=this.a,r=A.dU(s.getAttribute("data-theme"))==="light"?"dark":"light"
s.setAttribute("data-theme",r)
A.R("ds-theme",r)
this.b.$0()},
$S:0}
A.bT.prototype={
gH(){var s,r=this,q=r.d
if(q===$){s=r.a
q=r.d=new A.df(s,r.b,r.c,s.a)}return q},
gaJ(){var s,r=this,q=r.b_
if(q===$){s=A.aJ(r.gcb())
r.b_!==$&&A.eT()
r.b_=s
q=s}return q},
d2(){var s,r,q,p=this,o="input",n="change",m="click"
p.cq()
p.cf()
p.c6()
A.k(p.f,o,new A.cQ(p))
s=p.e
A.k(s,o,new A.cR(p))
A.k(s,n,new A.cS(p))
s=t.m
A.k(A.c("bpm-down",s),m,new A.d2(p))
A.k(A.c("bpm-up",s),m,new A.d4(p))
A.k(A.c("bpm-prev",s),m,new A.d5(p))
A.k(A.c("bpm-next",s),m,new A.d6(p))
r=p.gcY()
A.k(p.x,m,r)
q=p.gcz()
A.k(A.c("tap",s),m,q)
A.k(p.z,m,r)
A.k(A.c("q-tap",s),m,q)
A.k(A.c("q-down",s),m,new A.d7(p))
A.k(A.c("q-up",s),m,new A.d8(p))
q=v.G
A.b(q.document).addEventListener("scroll",A.aJ(new A.d9(p)))
A.jo("resize",p.gd0())
r=p.gck()
A.k(p.ay,n,r)
A.k(p.ch,n,r)
A.k(p.CW,n,new A.da(p))
A.k(p.dx,n,new A.cT(p))
A.k(A.c("reset-accents",s),m,new A.cU(p))
A.k(p.dy,n,new A.cV(p))
A.k(p.fx,o,new A.cW(p))
A.k(p.go,n,new A.cX(p))
A.k(p.id,o,new A.cY(p))
A.k(p.k1,o,new A.cZ(p))
if("vibrate" in A.b(q.navigator)){p.k2.hidden=!1
A.k(p.k3,n,new A.d_(p))}A.k(p.ok,n,new A.d0(p))
A.k(p.k4,n,new A.d1(p))
p.cE()
p.cD()
p.cC()
A.b(q.document).addEventListener("visibilitychange",A.aJ(new A.d3(p)))
p.bu()},
cf(){var s,r,q,p,o,n,m="option"
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
c6(){var s,r,q,p,o,n
for(s=["4/4","3/4","2/4","5/4","6/8","7/8","9/8","12/8"],r=s.length,q=this.cy,p=0;p<r;++p){o=s[p]
n=A.I("button","chip",o)
n.setAttribute("type","button")
n.setAttribute("aria-label","Time signature "+o)
A.k(n,"click",new A.cE(this,o))
q.appendChild(n)}},
u(a){var s=B.c.a6(B.c.a6(a)),r=A.es(s,null)
if(r==null)r=A.hC(s)
return r==null?null:B.d.B(r)},
bt(a,b){var s=this,r=s.a
r.a=B.b.n(B.b.B(a),20,300)
s.gH().b4()
s.bx(b)
if(!s.F)s.aq()
A.R("ds-last",A.a_(A.e([A.aa("last",r)],t.e)))},
C(a){return this.bt(a,!1)},
bx(a){var s,r,q,p,o,n,m,l=this,k=l.a,j=l.bO=k.a,i=""+j
l.f.value=i
if(!a)l.e.value=i
s=A.eF(j)
if(!(s<10))return A.f(B.e,s)
l.w.textContent=B.e[s].a[1]
s=A.eF(j)
if(!(s<10))return A.f(B.e,s)
s=B.e[s].a
l.p2.textContent=s[2]+" (literally \u201c"+s[3]+"\u201d)"
r=A.eF(j)
s=r+1
q=s<10?B.e[s].a[0]-1:300
if(!(r<10))return A.f(B.e,r)
l.p1.textContent=""+B.e[r].a[0]+"\u2013"+q+" BPM"
p=A.eR(j)
o=A.eP(j)
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
if(k.f&&k.b.gT())m="dotted quarter"
else{switch(k.b.b){case 2:k="half note"
break
case 4:k="quarter note"
break
case 8:k="eighth note"
break
default:k="sixteenth note"
break}m=k}l.r.textContent="Beats per minute, counting each "+m},
Y(){return this.bx(!1)},
bz(){var s=this,r=v.G,q=s.cK.cW(A.H(A.b(r.performance).now())),p=s.bP
if(p!=null)r.clearTimeout(p)
if(q==null){s.v("Tap again in time with the beat.")
return}s.C(q)
s.bP=A.q(r.setTimeout(A.bs(new A.cM(s)),900))},
cl(){var s,r=this,q=r.u(A.p(r.ay.value))
if(q==null)q=4
s=r.u(A.p(r.ch.value))
r.aT(A.aj(q,s==null?4:s,null))},
aT(a){var s=this,r=s.a,q=a.a===r.b.a&&B.a.O(a.c,"+")===B.a.O(r.b.c,"+")
if(!a.gT())r.f=!1
if(!q)r.c=a.a_()
r.b=a
s.bv()
s.ai()
s.Y()
A.R("ds-last",A.a_(A.e([A.aa("last",r)],t.e)))},
bv(){var s,r,q,p,o,n,m,l=this,k=l.a,j=k.b,i=j.a,h=""+i
l.ay.value=h
s=j.b
r=""+s
l.ch.value=r
q=A.jf(i,s)
l.cx.hidden=q.length<2
s=l.CW
s.replaceChildren()
for(i=q.length,p=0;p<q.length;q.length===i||(0,A.W)(q),++p){o=q[p]
n=o.c
n=A.I("option",null,B.a.a0(n,new A.cL())?"Every beat":B.a.O(n," + "))
n.setAttribute("value",o.gL())
s.appendChild(n)}s.value=j.gL()
l.db.hidden=!j.gT()
l.dx.checked=k.f
for(k=A.fA(l.cy),i=k.length,r=h+"/"+r,p=0;p<k.length;k.length===i||(0,A.W)(k),++p){m=k[p]
if(A.p(m.textContent)===r){h=j.gL()
s=A.b3(r)
h=h===(s==null?null:s.gL())}else h=!1
m.setAttribute("aria-pressed",""+h)}},
ai(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c="span",b=e.ax
b.replaceChildren()
s=e.aw
B.a.R(s)
r=e.bN
B.a.R(r)
e.az=null
q=e.a
p=q.b.gaE()
o=A.fb(p,A.K(p).c)
n=!B.a.a0(q.b.c,new A.cC())
for(p=t.O,m=0;m<q.b.a;m=k){l=A.I("button","cell",d)
l.setAttribute("type","button")
if(n&&o.a9(0,m)&&m>0)A.b(l.classList).add("group-start")
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
A.k(l,"click",new A.cD(e,m))
b.appendChild(l)
B.a.j(s,l)
e.bl(m)}e.al(d)},
bl(a){var s,r,q,p,o,n=this.a.c
if(!(a<n.length))return A.f(n,a)
s=n[a]
n=this.aw
if(!(a<n.length))return A.f(n,a)
r=n[a]
for(q=0;q<4;++q){p=B.q[q]
A.z(A.b(r.classList).toggle("lv-"+p.b,p===s))}n=A.fA(r)
if(2>=n.length)return A.f(n,2)
o=s.c
n[2].textContent=o
r.setAttribute("aria-label","Beat "+(a+1)+", "+o+". Press to change.")},
aU(){var s,r=this,q=r.a
r.dy.value=q.d.b
r.fr.hidden=(q.d.c&1)!==0
r.fx.value=""+q.e
s=q.e
A:{if(50===s){q="Straight (50%)"
break A}if(s>=66&&s<=68){q="Triplet swing ("+s+"%)"
break A}if(75===s){q="Dotted feel (75%)"
break A}q=""+s+"%"
break A}r.fy.textContent=q},
cE(){var s,r,q=t.m,p=A.c("speed-on",q),o=A.c("speed-step",q),n=A.c("speed-every",q),m=A.c("speed-target",q),l=A.c("gap-on",q),k=A.c("gap-play",q),j=A.c("gap-mute",q),i=new A.cP(this,p,o,n,m,l,k,j)
for(q=[p,o,n,m,l,k,j],s=q.length,r=0;r<s;++r)A.k(q[r],"change",i)
i.$0()},
bw(a){var s,r,q=this,p=q.x2,o=q.b
p.hidden=!o.a
if(!o.a)return
s=a==null
r=s?0:Math.max(0,a.c-q.gH().e)
p.textContent=o.cV(s?q.a.a:q.gH().d,r)},
aq(){return this.bw(null)},
cD(){var s,r,q,p=this
p.D=A.fM(A.eN("ds-presets"))
A.c("preset-form",t.m).addEventListener("submit",A.aJ(new A.cO(p)))
A.k(p.x1,"click",p.gcA())
for(s=A.js(),r=p.xr,q=0;q<7;++q)r.appendChild(p.bo(s[q],!0))
p.ao()},
cs(){var s,r,q=this,p={},o=q.y1,n=A.er(A.p(o.value))
p.a=n
if(n.length===0){s=q.a
p.a=""+s.a+" BPM "+s.b.gU()}r=B.a.bF(q.D,new A.cJ(p))
s=A.jv(q.D,A.aa(p.a,q.a))
q.D=s
A.R("ds-presets",A.a_(s))
o.value=""
q.ao()
p=p.a
q.v(r?"Updated \u201c"+p+"\u201d.":"Saved \u201c"+p+"\u201d.")},
ao(){var s,r,q,p=this,o=p.RG
o.replaceChildren()
for(s=p.D,r=s.length,q=0;q<s.length;s.length===r||(0,A.W)(s),++q)o.appendChild(p.cn(s[q]))
p.rx.hidden=p.D.length!==0},
ca(a){var s,r,q=this,p=B.a.cP(q.D,new A.cF(a))
if(p<0)return
s=A.b1(q.D,t.b)
B.a.aC(s,p)
q.D=s
A.R("ds-presets",A.a_(s))
q.ao()
q.aZ=new A.aI(p,a)
s="Deleted \u201c"+a.a
q.to.textContent=s+"\u201d."
q.ry.hidden=!1
q.x1.focus()
q.v(s+"\u201d. Press Undo to bring it back.")
r=q.aA
if(r!=null)v.G.clearTimeout(r)
q.aA=A.q(v.G.setTimeout(A.bs(q.gci()),1e4))},
cB(){var s,r,q,p,o=this,n=o.aZ
if(n==null)return
s=n.a
r=n.b
q=A.b1(o.D,t.b)
p=A.q(Math.min(s,o.D.length))
A.K(q).c.a(r)
q.$flags&1&&A.bx(q,"insert",2)
if(p<0||p>q.length)A.eS(A.et(p,null))
q.splice(p,0,r)
o.D=q
A.R("ds-presets",A.a_(q))
o.ao()
o.bi()
o.v("Restored \u201c"+r.a+"\u201d.")},
bi(){var s,r=this
r.aZ=null
s=r.aA
if(s!=null)v.G.clearTimeout(s)
r.aA=null
if(A.Z(A.b(v.G.document).activeElement)===r.x1)r.y1.focus()
r.ry.hidden=!0},
bo(a,b){var s,r,q=A.I("li","preset",null),p=A.I("button","preset-load",null)
p.setAttribute("type","button")
s=a.a
p.appendChild(A.I("span","preset-name",s))
p.appendChild(A.I("span","preset-sum",a.gb8()))
A.k(p,"click",new A.cH(this,a))
q.appendChild(p)
if(!b){r=A.I("button","preset-del","\xd7")
r.setAttribute("type","button")
r.setAttribute("aria-label","Delete \u201c"+s+"\u201d")
A.k(r,"click",new A.cI(this,a))
q.appendChild(r)}return q},
cn(a){return this.bo(a,!1)},
cq(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.fM(A.eN("ds-last"))
if(g.length!==0)B.a.gb0(g).bG(h.a)
try{j=A.eN("ds-prefs")
s=B.l.bJ(j==null?"{}":j,null)
if(s instanceof A.F){r=s.p(0,"sound")
q=null
if(typeof r=="string"){q=r
j=B.a.a9(B.P,q)}else j=!1
if(j)h.y2=q
p=s.p(0,"volume")
o=null
if(typeof p=="number"){o=p
h.S=J.ek(o,0,1)}n=s.p(0,"subVolume")
m=null
if(typeof n=="number"){m=n
h.aa=J.ek(m,0,1)}h.ab=J.a6(s.p(0,"haptics"),!0)
h.ac=J.a6(s.p(0,"bigFlash"),!0)
l=s.p(0,"countIn")
k=null
if(A.eE(l)){k=l
h.M=J.ek(k,0,2)}}}catch(i){if(!(A.a0(i) instanceof A.aT))throw i}},
X(){var s=this
return A.R("ds-prefs",B.l.bK(A.f9(["sound",s.y2,"volume",s.S,"subVolume",s.aa,"haptics",s.ab,"bigFlash",s.ac,"countIn",s.M],t.N,t.K),null))},
bu(){var s=this
s.bv()
s.ai()
s.aU()
s.Y()
s.go.value=s.y2
s.id.value=""+B.d.B(s.S*100)
s.k1.value=""+B.d.B(s.aa*100)
s.k3.checked=s.ab
s.k4.checked=s.ac
s.ok.value=""+s.M},
cC(){A.b(v.G.document).addEventListener("keydown",A.aJ(new A.cN(this)))},
cZ(){var s,r,q,p,o,n,m,l,k,j=this
if(j.F){j.F=!1
s=j.av
if(s!=null)v.G.clearInterval(s)
r=j.ae
if(r!=null)v.G.cancelAnimationFrame(r)
q=j.N
if(q!=null)q.disconnect()
j.N=null
q=j.I
if(q!=null)A.b(q.suspend())
B.a.R(j.a1)
j.a2.bW()
q=j.a
p=q.a
o=j.b
if(o.a)q.a=j.gH().d
j.al(null)
j.ap(!1)
j.Y()
j.aq()
j.v(o.a?"Stopped. You reached "+p+" BPM.":"Stopped.")}else{n=j.I
if(n==null)n=j.I=A.b(new v.G.AudioContext())
A.eQ()
A.b(n.resume())
q=A.b(n.createGain())
A.b(q.connect(A.b(n.destination)))
j.N=q
A.b(q.gain).value=j.S
j.F=!0
q=j.gH()
o=j.M
q.f=o
q.Q=q.x=q.y=q.z=q.e=0
m=q.a
q.d=m.a
q.w=0
q.r=Math.max(0,o)*m.b.c.length
B.a.R(j.a1)
j.ad=null
j.au=A.H(n.currentTime)+0.08
j.aV()
m=v.G
l=j.a3
if(l===$){k=A.bs(j.gbC())
j.a3!==$&&A.eT()
j.a3=k
l=k}j.av=A.q(m.setInterval(l,25))
j.ae=A.q(m.requestAnimationFrame(j.gaJ()))
j.ap(!0)
j.a2.Z()
q=j.M
if(q>0){o=q===1?"":"s"
m=j.a
m="Counting in "+q+" bar"+o+", then playing at "+m.a+" BPM, "+m.b.gU()+"."
q=m}else{q=j.a
q="Playing at "+q.a+" BPM, "+q.b.gU()+"."}j.v(q)}return null},
cv(){var s,r,q,p,o,n=this,m=n.I
if(m==null)m=n.I=A.b(new v.G.AudioContext())
A.eQ()
A.b(m.resume())
s=A.b(m.createGain())
A.b(s.connect(A.b(m.destination)))
n.N=s
A.b(s.gain).value=n.S
n.F=!0
s=n.gH()
r=n.M
s.f=r
s.Q=s.x=s.y=s.z=s.e=0
q=s.a
s.d=q.a
s.w=0
s.r=Math.max(0,r)*q.b.c.length
B.a.R(n.a1)
n.ad=null
n.au=A.H(m.currentTime)+0.08
n.aV()
q=v.G
p=n.a3
if(p===$){o=A.bs(n.gbC())
n.a3!==$&&A.eT()
n.a3=o
p=o}n.av=A.q(q.setInterval(p,25))
n.ae=A.q(q.requestAnimationFrame(n.gaJ()))
n.ap(!0)
n.a2.Z()
s=n.M
if(s>0){r=s===1?"":"s"
q=n.a
q="Counting in "+s+" bar"+r+", then playing at "+q.a+" BPM, "+q.b.gU()+"."
s=q}else{s=n.a
s="Playing at "+s.a+" BPM, "+s.b.gU()+"."}n.v(s)},
cw(){var s,r,q,p,o,n=this
n.F=!1
s=n.av
if(s!=null)v.G.clearInterval(s)
r=n.ae
if(r!=null)v.G.cancelAnimationFrame(r)
q=n.N
if(q!=null)q.disconnect()
n.N=null
q=n.I
if(q!=null)A.b(q.suspend())
B.a.R(n.a1)
n.a2.bW()
q=n.a
p=q.a
o=n.b
if(o.a)q.a=n.gH().d
n.al(null)
n.ap(!1)
n.Y()
n.aq()
n.v(o.a?"Stopped. You reached "+p+" BPM.":"Stopped.")},
ap(a){var s,r,q,p,o,n
for(s=[this.x,this.z],r=s.length,q=""+a,p=0;p<r;++p){o=s[p]
n=a?"Stop":"Start"
o.textContent=n
o.setAttribute("aria-pressed",q)
A.z(A.b(o.classList).toggle("is-running",a))}},
b6(){var s=A.b(this.x.getBoundingClientRect()),r=A.H(s.bottom)>0&&A.H(s.top)<A.H(v.G.innerHeight),q=this.y
if(A.z(q.hidden)===r)return
q.hidden=r
A.z(A.b(A.b(A.b(v.G.document).body).classList).toggle("has-transport",!r))},
aV(){var s,r,q,p,o,n,m=this,l=m.I,k=m.N
if(!m.F||l==null||k==null)return
s=A.z(A.b(v.G.document).hidden)?1.5:0.12
for(r=m.a1;;){q=m.ad
if(q==null)q=m.gH().cT()
p=m.au
o=q.a
n=p+o
if(n<A.H(l.currentTime)){p+=A.H(l.currentTime)+0.05-n
m.au=p
n=p+o}if(n>=A.H(l.currentTime)+s){m.ad=q
break}m.ad=null
m.aR(l,k,q.b,n)
B.a.j(r,new A.aI(n,q))}while(r.length>128)B.a.aC(r,0)},
aR(a,b,c,d){var s,r,q,p,o,n,m=this
switch(c.a){case 0:s=1
break
case 1:s=0.6
break
case 2:s=0.24
break
case 3:s=0.36*m.aa
break
case 4:s=0
break
default:s=null}if(s<0.005)return
r=c===B.i
q=c===B.v
switch(m.y2){case"beep":if(r)p=1760
else p=q?880:1320
m.bE(a,b,"sine",p,s,d,0.05)
break
case"stick":if(r)p=3200
else p=q?1800:2500
m.bk(a,b,p,s*1.4,d)
break
default:if(r)o=1250
else o=q?760:950
n=A.b(a.createBiquadFilter())
n.type="bandpass"
A.b(n.connect(b))
A.b(n.frequency).value=o
A.b(n.Q).value=6
m.bE(a,n,"triangle",o,s*2.2,d,0.04)
m.bk(a,b,o*2,s*0.25,d)}},
bE(a,b,c,d,e,f,g){var s,r,q,p=A.b(a.createOscillator())
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
bk(a,b,c,d,e){var s,r,q,p,o=this.bL
if(o==null)o=this.bL=this.cj(a)
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
cj(a){var s,r,q=B.d.B(A.H(a.sampleRate)*0.05),p=A.b(a.createBuffer(1,q,A.H(a.sampleRate))),o=t.E.a(p.getChannelData(0)),n=new A.dN()
n.c2(7)
for(s=0;s<q;++s){r=n.cU()
o.$flags&2&&A.bx(o)
if(!(s<o.length))return A.f(o,s)
o[s]=r*2-1}return p},
cc(a){var s,r,q,p,o,n=this
A.H(a)
s=n.I
if(!n.F||s==null)return
r=n.a1
q=null
p=null
for(;;){if(!(r.length!==0&&B.a.gb0(r).a<=A.H(s.currentTime)))break
o=B.a.aC(r,0).b
if(o.e===0)q=o
p=o}if(q!=null)n.al(q)
if(p!=null)n.bj(p)
n.ae=A.q(v.G.requestAnimationFrame(n.gaJ()))},
al(a){var s,r,q,p,o,n,m,l,k,j=this,i=a==null,h=i?null:a.d
if(h==null)h=-1
if(i){for(i=j.aw,s=i.length,r=0;r<i.length;i.length===s||(0,A.W)(i),++r)A.z(A.b(i[r].classList).toggle("is-on",!1))
j.bj(null)
j.as.className="flash"
j.at.textContent="Not playing"
return}for(i=j.aw,s=a.r,q=!s,p=0;p<i.length;++p){o=A.b(i[p].classList)
n=q&&p===h
A.z(o.toggle("is-on",n))}m=q&&j.c.bS(a.c)
if(s)i="Count-in \xb7 "+a.w+" of "+a.x
else{i=a.c+1
i=m?"Bar "+i+" \xb7 silent: keep the time going":"Bar "+i+" \xb7 Beat "+(h+1)+" of "+j.a.b.a}j.at.textContent=i
l=a.b
A:{if(B.i===l){i="is-accent"
break A}if(B.o===l||B.v===l){i="is-normal"
break A}if(B.D===l){i="is-ghost"
break A}if(B.j===l){i="is-silent"
break A}i=null}s=j.ac&&l!==B.j?" is-big":""
j.as.className="flash "+i+s
k=j.bM
if(k!=null)v.G.clearTimeout(k)
i=v.G
j.bM=A.q(i.setTimeout(A.bs(new A.cG(j)),90))
if(j.ab&&l!==B.j)A.jw(l===B.i?45:20)
if(j.b.a&&a.d===0&&q)j.bw(a)
if(a.f!==j.bO&&A.Z(A.b(i.document).activeElement)!==j.e)j.Y()},
bj(a){var s,r,q,p=this,o=p.az
if(o!=null)A.b(o.classList).remove("is-on")
p.az=null
if(a==null||a.r)return
o=a.d
s=p.bN
r=s.length
if(o>=r)return
if(!(o>=0))return A.f(s,o)
q=s[o]
o=a.e
if(o>=q.length)return
o=q[o]
A.b(o.classList).add("is-on")
p.az=o},
v(a){this.R8.textContent=a
return a},
bs(a){var s=this.bQ
if(s!=null)v.G.clearTimeout(s)
this.bQ=A.q(v.G.setTimeout(A.bs(new A.cK(this,a)),600))}}
A.cQ.prototype={
$0(){var s=this.a,r=s.u(A.p(s.f.value))
return s.C(r==null?s.a.a:r)},
$S:0}
A.cR.prototype={
$0(){var s=this.a,r=s.u(A.p(s.e.value))
if(r!=null&&r>=20&&r<=300)s.bt(r,!0)},
$S:0}
A.cS.prototype={
$0(){var s=this.a,r=s.u(A.p(s.e.value))
return s.C(r==null?s.a.a:r)},
$S:0}
A.d2.prototype={
$0(){var s=this.a
return s.C(s.a.a+-1)},
$S:0}
A.d4.prototype={
$0(){var s=this.a
return s.C(s.a.a+1)},
$S:0}
A.d5.prototype={
$0(){var s=this.a
return s.C(A.eR(s.a.a))},
$S:0}
A.d6.prototype={
$0(){var s=this.a
return s.C(A.eP(s.a.a))},
$S:0}
A.d7.prototype={
$0(){var s=this.a
return s.C(s.a.a+-1)},
$S:0}
A.d8.prototype={
$0(){var s=this.a
return s.C(s.a.a+1)},
$S:0}
A.d9.prototype={
$1(a){return this.a.b6()},
$S:3}
A.da.prototype={
$0(){var s=this.a,r=A.b3(A.p(s.CW.value))
if(r!=null)s.aT(r)},
$S:0}
A.cT.prototype={
$0(){var s=this.a,r=s.a
r.f=A.z(s.dx.checked)
s.Y()
A.R("ds-last",A.a_(A.e([A.aa("last",r)],t.e)))},
$S:0}
A.cU.prototype={
$0(){var s=this.a,r=s.a
r.sbV(r.b.a_())
s.ai()
A.R("ds-last",A.a_(A.e([A.aa("last",r)],t.e)))
s.v("Accents reset.")},
$S:0}
A.cV.prototype={
$0(){var s=this.a,r=s.a
r.d=A.fk(A.p(s.dy.value))
s.aU()
s.ai()
A.R("ds-last",A.a_(A.e([A.aa("last",r)],t.e)))},
$S:0}
A.cW.prototype={
$0(){var s=this.a,r=s.a,q=s.u(A.p(s.fx.value))
r.e=q==null?50:q
s.aU()
A.R("ds-last",A.a_(A.e([A.aa("last",r)],t.e)))},
$S:0}
A.cX.prototype={
$0(){var s,r,q,p=this.a
p.y2=A.p(p.go.value)
p.X()
if(!p.F){s=p.I
if(s==null)s=p.I=A.b(new v.G.AudioContext())
A.eQ()
A.b(s.resume())
r=A.b(s.createGain())
A.b(r.connect(A.b(s.destination)))
A.b(r.gain).value=p.S
q=A.H(s.currentTime)+0.05
p.aR(s,r,B.i,q)
p.aR(s,r,B.o,q+0.25)}},
$S:0}
A.cY.prototype={
$0(){var s,r=this.a,q=r.u(A.p(r.id.value))
q=(q==null?80:q)/100
r.S=q
s=r.N
if(s!=null)A.b(s.gain).value=q
r.X()},
$S:0}
A.cZ.prototype={
$0(){var s=this.a,r=s.u(A.p(s.k1.value))
s.aa=(r==null?60:r)/100
s.X()},
$S:0}
A.d_.prototype={
$0(){var s=this.a
s.ab=A.z(s.k3.checked)
s.X()},
$S:0}
A.d0.prototype={
$0(){var s=this.a,r=s.u(A.p(s.ok.value))
s.M=B.b.n(r==null?0:r,0,2)
s.X()},
$S:0}
A.d1.prototype={
$0(){var s=this.a
s.ac=A.z(s.k4.checked)
s.X()},
$S:0}
A.d3.prototype={
$1(a){var s
if(!A.z(A.b(v.G.document).hidden)){s=this.a
s=s.F&&s.a2.b}else s=!1
if(s)this.a.a2.Z()},
$S:26}
A.cE.prototype={
$0(){var s=this.a,r=this.b,q=A.b3(r)
q.toString
s.aT(q)
s.v("Time signature "+A.b3(r).gU()+".")},
$S:0}
A.cM.prototype={
$0(){var s=this.a
return s.v("Tempo set to "+s.a.a+" BPM.")},
$S:0}
A.cL.prototype={
$1(a){return A.q(a)===1},
$S:1}
A.cC.prototype={
$1(a){return A.q(a)===1},
$S:1}
A.cD.prototype={
$0(){var s=this.a,r=s.a,q=r.c,p=this.b
if(!(p<q.length))return A.f(q,p)
B.a.K(q,p,B.q[(q[p].a+1)%4])
s.bl(p)
A.R("ds-last",A.a_(A.e([A.aa("last",r)],t.e)))
r=r.c
if(!(p<r.length))return A.f(r,p)
s.v("Beat "+(p+1)+": "+r[p].c+".")},
$S:0}
A.cP.prototype={
$0(){var s,r=this,q=r.a,p=q.b
p.a=A.z(r.b.checked)
s=q.u(A.p(r.c.value))
p.b=B.b.n(s==null?4:s,-50,50)
s=q.u(A.p(r.d.value))
p.c=B.b.n(s==null?4:s,1,64)
s=q.u(A.p(r.e.value))
p.d=B.b.n(B.b.B(s==null?140:s),20,300)
p=q.c
p.a=A.z(r.f.checked)
s=q.u(A.p(r.r.value))
p.b=B.b.n(s==null?2:s,1,64)
s=q.u(A.p(r.w.value))
p.c=B.b.n(s==null?2:s,1,64)
q.gH().b4()
q.aq()},
$S:0}
A.cO.prototype={
$1(a){A.b(a).preventDefault()
this.a.cs()},
$S:10}
A.cJ.prototype={
$1(a){return t.b.a(a).a.toLowerCase()===this.a.a.toLowerCase()},
$S:11}
A.cF.prototype={
$1(a){return t.b.a(a).a===this.a.a},
$S:11}
A.cH.prototype={
$0(){var s=this.b,r=this.a,q=r.a
s.bG(q)
r.gH().b4()
r.bu()
A.R("ds-last",A.a_(A.e([A.aa("last",q)],t.e)))
r.v("Loaded \u201c"+s.a+"\u201d: "+s.gb8()+".")},
$S:0}
A.cI.prototype={
$0(){return this.a.ca(this.b)},
$S:0}
A.cN.prototype={
$1(a){var s,r,q,p,o,n=this
A.b(a)
if(A.z(a.ctrlKey)||A.z(a.metaKey)||A.z(a.altKey))return
s=A.Z(a.target)
r=s==null?null:A.p(s.tagName)
if(r==null)r=""
s=!(r==="INPUT"||r==="SELECT"||r==="TEXTAREA")
q=!s||r==="BUTTON"||r==="A"||r==="SUMMARY"
A:{p=A.p(a.key)
if(" "===p&&!q){a.preventDefault()
s=n.a
if(s.F)s.cw()
else s.cv()
break A}if("ArrowUp"===p&&s){a.preventDefault()
s=n.a
o=s.a
if(A.z(a.shiftKey))s.C(A.eP(o.a))
else s.C(o.a+1)
s.bs(""+o.a+" BPM")
break A}if("ArrowDown"===p&&s){a.preventDefault()
s=n.a
o=s.a
if(A.z(a.shiftKey))s.C(A.eR(o.a))
else s.C(o.a+-1)
s.bs(""+o.a+" BPM")
break A}if(("t"===p||"T"===p)&&s&&!A.z(a.repeat))n.a.bz()}},
$S:10}
A.cG.prototype={
$0(){return A.b(this.a.as.classList).add("is-fading")},
$S:0}
A.cK.prototype={
$0(){return this.a.v(this.b)},
$S:0}
A.e1.prototype={
$2(a,b){var s,r,q,p,o,n
t.V.a(b)
s=this.a
if(s.a>=12)return
if(a===0){s.j(0,B.a.O(b,"+"))
return}for(s=[2,3],r=s.length,q=t.S,p=0;p<r;++p){o=s[p]
if(o<=a&&a-o!==1){n=A.b1(b,q)
n.push(o)
this.$2(a-o,n)}}},
$S:27};(function aliases(){var s=J.a9.prototype
s.c0=s.i})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
s(A,"j3","hP",4)
s(A,"j4","hQ",4)
s(A,"j5","hR",4)
r(A,"fK","iX",0)
s(A,"j7","ir",5)
var o
q(o=A.bT.prototype,"gcz","bz",0)
q(o,"gck","cl",0)
q(o,"gcA","cB",0)
q(o,"gci","bi",0)
q(o,"gcY","cZ",0)
q(o,"gd0","b6",0)
q(o,"gbC","aV",0)
p(o,"gcb","cc",25)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.i,null)
q(A.i,[A.eo,J.bJ,A.bb,J.as,A.r,A.de,A.h,A.aw,A.G,A.a5,A.dl,A.dc,A.aS,A.bl,A.a7,A.F,A.cu,A.bR,A.bN,A.dM,A.V,A.cd,A.dR,A.dP,A.c9,A.P,A.cb,A.a4,A.y,A.ca,A.ch,A.dq,A.aB,A.cg,A.aF,A.u,A.bE,A.bG,A.dK,A.dw,A.bc,A.dx,A.aT,A.x,A.ci,A.aC,A.db,A.dN,A.U,A.b2,A.cn,A.dg,A.cm,A.aQ,A.df,A.dk,A.dn,A.bT])
q(J.bJ,[J.bL,J.aV,J.aY,J.aX,J.aZ,J.au,J.av])
q(J.aY,[J.a9,J.n,A.ay,A.b6])
q(J.a9,[J.c1,J.aD,J.a8])
r(J.bK,A.bb)
r(J.co,J.n)
q(J.au,[J.aU,J.bM])
q(A.r,[A.bQ,A.a2,A.bO,A.c8,A.c4,A.cc,A.b0,A.bA,A.T,A.be,A.c7,A.bd,A.bF])
r(A.aR,A.h)
q(A.aR,[A.ai,A.ah])
q(A.a5,[A.aG,A.aH])
r(A.aI,A.aG)
r(A.J,A.aH)
r(A.b8,A.a2)
q(A.a7,[A.bC,A.bD,A.c6,A.e2,A.e4,A.dt,A.ds,A.dV,A.dG,A.ed,A.ee,A.eg,A.e7,A.eb,A.cs,A.dh,A.cw,A.cA,A.cB,A.cy,A.cz,A.ea,A.e9,A.ef,A.d9,A.d3,A.cL,A.cC,A.cO,A.cJ,A.cF,A.cN])
q(A.c6,[A.c5,A.at])
q(A.F,[A.b_,A.ce])
q(A.bD,[A.e3,A.dW,A.dZ,A.dH,A.cv,A.dL,A.cx,A.e1])
q(A.b6,[A.bU,A.aA])
q(A.aA,[A.bg,A.bi])
r(A.bh,A.bg)
r(A.b4,A.bh)
r(A.bj,A.bi)
r(A.b5,A.bj)
q(A.b4,[A.az,A.bV])
q(A.b5,[A.bW,A.bX,A.bY,A.bZ,A.c_,A.b7,A.c0])
r(A.bm,A.cc)
q(A.bC,[A.du,A.dv,A.dQ,A.dy,A.dC,A.dB,A.dA,A.dz,A.dF,A.dE,A.dD,A.dr,A.dY,A.e8,A.ec,A.ct,A.di,A.dp,A.ei,A.eh,A.cQ,A.cR,A.cS,A.d2,A.d4,A.d5,A.d6,A.d7,A.d8,A.da,A.cT,A.cU,A.cV,A.cW,A.cX,A.cY,A.cZ,A.d_,A.d0,A.d1,A.cE,A.cM,A.cD,A.cP,A.cH,A.cI,A.cG,A.cK])
r(A.bf,A.cb)
r(A.bk,A.aB)
r(A.al,A.bk)
r(A.cf,A.ai)
r(A.bP,A.b0)
r(A.cp,A.bE)
q(A.bG,[A.cr,A.cq])
r(A.dJ,A.dK)
q(A.T,[A.b9,A.bI])
q(A.dw,[A.M,A.ak,A.D])
s(A.bg,A.u)
s(A.bh,A.G)
s(A.bi,A.u)
s(A.bj,A.G)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",m:"double",ar:"num",v:"String",C:"bool",x:"Null",j:"List",i:"Object",bS:"Map",t:"JSObject"},mangledNames:{},types:["~()","C(a)","~(@)","~(i?)","~(~())","@(@)","x(@)","x()","~(i?,i?)","a()","x(t)","C(U)","@(@,v)","@(v)","x(~())","x(@,ab)","~(a,@)","x(i,ab)","U(v,a,v{dotted:C,sub:D,swing:a})","C(M)","M()","C(D)","D()","a(a,a)","x(i)","~(m)","x(i?)","~(a,j<a>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aI&&a.b(c.a)&&b.b(c.b),"4;":a=>b=>b instanceof A.J&&A.jp(a,b.a)}}
A.ia(v.typeUniverse,JSON.parse('{"c1":"a9","aD":"a9","a8":"a9","jC":"ay","bL":{"C":[],"l":[]},"aV":{"l":[]},"aY":{"t":[]},"a9":{"t":[]},"n":{"j":["1"],"t":[],"h":["1"]},"bK":{"bb":[]},"co":{"n":["1"],"j":["1"],"t":[],"h":["1"]},"au":{"m":[],"ar":[]},"aU":{"m":[],"a":[],"ar":[],"l":[]},"bM":{"m":[],"ar":[],"l":[]},"av":{"v":[],"dd":[],"l":[]},"bQ":{"r":[]},"aR":{"h":["1"]},"ai":{"h":["1"]},"aI":{"aG":[],"a5":[]},"J":{"aH":[],"a5":[]},"b8":{"a2":[],"r":[]},"bO":{"r":[]},"c8":{"r":[]},"bl":{"ab":[]},"a7":{"af":[]},"bC":{"af":[]},"bD":{"af":[]},"c6":{"af":[]},"c5":{"af":[]},"at":{"af":[]},"c4":{"r":[]},"b_":{"F":["1","2"],"f8":["1","2"],"bS":["1","2"],"F.K":"1","F.V":"2"},"ah":{"h":["1"]},"aG":{"a5":[]},"aH":{"a5":[]},"bN":{"hF":[],"dd":[]},"az":{"u":["m"],"j":["m"],"L":["m"],"t":[],"h":["m"],"G":["m"],"l":[],"u.E":"m"},"ay":{"t":[],"l":[]},"b6":{"t":[]},"bU":{"t":[],"l":[]},"aA":{"L":["1"],"t":[]},"b4":{"u":["m"],"j":["m"],"L":["m"],"t":[],"h":["m"],"G":["m"]},"b5":{"u":["a"],"j":["a"],"L":["a"],"t":[],"h":["a"],"G":["a"]},"bV":{"u":["m"],"j":["m"],"L":["m"],"t":[],"h":["m"],"G":["m"],"l":[],"u.E":"m"},"bW":{"u":["a"],"j":["a"],"L":["a"],"t":[],"h":["a"],"G":["a"],"l":[],"u.E":"a"},"bX":{"u":["a"],"j":["a"],"L":["a"],"t":[],"h":["a"],"G":["a"],"l":[],"u.E":"a"},"bY":{"u":["a"],"j":["a"],"L":["a"],"t":[],"h":["a"],"G":["a"],"l":[],"u.E":"a"},"bZ":{"u":["a"],"j":["a"],"L":["a"],"t":[],"h":["a"],"G":["a"],"l":[],"u.E":"a"},"c_":{"u":["a"],"j":["a"],"L":["a"],"t":[],"h":["a"],"G":["a"],"l":[],"u.E":"a"},"b7":{"u":["a"],"j":["a"],"L":["a"],"t":[],"h":["a"],"G":["a"],"l":[],"u.E":"a"},"c0":{"u":["a"],"j":["a"],"L":["a"],"t":[],"h":["a"],"G":["a"],"l":[],"u.E":"a"},"cc":{"r":[]},"bm":{"a2":[],"r":[]},"P":{"r":[]},"bf":{"cb":["1"]},"y":{"ag":["1"]},"al":{"aB":["1"],"h":["1"]},"F":{"bS":["1","2"]},"aB":{"h":["1"]},"bk":{"aB":["1"],"h":["1"]},"ce":{"F":["v","@"],"bS":["v","@"],"F.K":"v","F.V":"@"},"cf":{"ai":["v"],"h":["v"],"ai.E":"v"},"b0":{"r":[]},"bP":{"r":[]},"m":{"ar":[]},"a":{"ar":[]},"j":{"h":["1"]},"v":{"dd":[]},"bA":{"r":[]},"a2":{"r":[]},"T":{"r":[]},"b9":{"r":[]},"bI":{"r":[]},"be":{"r":[]},"c7":{"r":[]},"bd":{"r":[]},"bF":{"r":[]},"bc":{"r":[]},"ci":{"ab":[]},"aC":{"hJ":[]},"ho":{"j":["a"],"h":["a"]},"hN":{"j":["a"],"h":["a"]},"hM":{"j":["a"],"h":["a"]},"hm":{"j":["a"],"h":["a"]},"hK":{"j":["a"],"h":["a"]},"hn":{"j":["a"],"h":["a"]},"hL":{"j":["a"],"h":["a"]},"hk":{"j":["m"],"h":["m"]},"hl":{"j":["m"],"h":["m"]}}'))
A.i9(v.typeUniverse,JSON.parse('{"aR":1,"aA":1,"bk":1,"bE":2,"bG":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.cj
return{n:s("P"),C:s("r"),Z:s("af"),U:s("h<@>"),O:s("n<t>"),a:s("n<M>"),A:s("n<j<t>>"),J:s("n<bS<v,i>>"),c:s("n<b2>"),f:s("n<i>"),e:s("n<U>"),d:s("n<+(m,aQ)>"),s:s("n<v>"),w:s("n<m>"),q:s("n<@>"),t:s("n<a>"),T:s("aV"),m:s("t"),g:s("a8"),p:s("L<@>"),L:s("M"),B:s("j<M>"),j:s("j<@>"),V:s("j<a>"),E:s("az"),P:s("x"),K:s("i"),b:s("U"),W:s("jD"),h:s("+()"),l:s("ab"),N:s("v"),Y:s("D"),k:s("l"),r:s("a2"),D:s("aD"),_:s("y<@>"),y:s("C"),x:s("C(i)"),i:s("m"),z:s("@"),G:s("@()"),v:s("@(i)"),Q:s("@(i,ab)"),S:s("a"),bc:s("ag<x>?"),aQ:s("t?"),aL:s("j<@>?"),X:s("i?"),aD:s("v?"),F:s("a4<@,@>?"),R:s("cg?"),u:s("C?"),I:s("m?"),a3:s("a?"),ae:s("ar?"),o:s("ar"),H:s("~"),M:s("~()"),cQ:s("~(v,@)"),aS:s("~(a,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.K=J.bJ.prototype
B.a=J.n.prototype
B.b=J.aU.prototype
B.d=J.au.prototype
B.c=J.av.prototype
B.L=J.a8.prototype
B.M=J.aY.prototype
B.C=J.c1.prototype
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

B.l=new A.cp()
B.k=new A.de()
B.f=new A.dq()
B.m=new A.ci()
B.N=new A.cq(null)
B.O=new A.cr(null)
B.y=new A.M("Accent",0,"accent")
B.z=new A.M("Ghost",2,"ghost")
B.A=new A.M("Mute",3,"mute")
B.n=new A.M("Normal",1,"normal")
B.p=s([2,4,8,16],t.t)
B.h=new A.D(1,"None (beats only)",0,"none")
B.t=new A.D(2,"Eighth notes (2)",1,"eighths")
B.a3=new A.D(3,"Triplets (3)",2,"triplets")
B.r=new A.D(4,"Sixteenth notes (4)",3,"sixteenths")
B.a2=new A.D(5,"Quintuplets (5)",4,"quintuplets")
B.a1=new A.D(6,"Sextuplets (6)",5,"sextuplets")
B.a0=new A.D(7,"Septuplets (7)",6,"septuplets")
B.a_=new A.D(8,"32nd notes (8)",7,"thirtySeconds")
B.B=s([B.h,B.t,B.a3,B.r,B.a2,B.a1,B.a0,B.a_],A.cj("n<D>"))
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
B.e=s([B.Q,B.W,B.U,B.T,B.R,B.S,B.Z,B.V,B.Y,B.X],A.cj("n<+(a,v,v,v)>"))
B.P=s(["wood","beep","stick"],t.s)
B.q=s([B.y,B.n,B.z,B.A],t.a)
B.a4=A.X("jy")
B.a5=A.X("jz")
B.a6=A.X("hk")
B.a7=A.X("hl")
B.a8=A.X("hm")
B.a9=A.X("hn")
B.aa=A.X("ho")
B.ab=A.X("i")
B.ac=A.X("hK")
B.ad=A.X("hL")
B.ae=A.X("hM")
B.af=A.X("hN")
B.i=new A.ak(0,"accent")
B.o=new A.ak(1,"normal")
B.D=new A.ak(2,"ghost")
B.v=new A.ak(3,"sub")
B.j=new A.ak(4,"silent")})();(function staticFields(){$.dI=null
$.O=A.e([],t.f)
$.fe=null
$.eZ=null
$.eY=null
$.fQ=null
$.fJ=null
$.fU=null
$.e_=null
$.e5=null
$.eK=null
$.dO=A.e([],A.cj("n<j<i>?>"))
$.aK=null
$.bt=null
$.bu=null
$.eD=!1
$.w=B.f})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"jB","fY",()=>A.e0("_$dart_dartClosure"))
s($,"jA","ej",()=>A.e0("_$dart_dartClosure_dartJSInterop"))
s($,"jR","h8",()=>A.e([new J.bK()],A.cj("n<bb>")))
s($,"jF","fZ",()=>A.a3(A.dm({
toString:function(){return"$receiver$"}})))
s($,"jG","h_",()=>A.a3(A.dm({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"jH","h0",()=>A.a3(A.dm(null)))
s($,"jI","h1",()=>A.a3(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jL","h4",()=>A.a3(A.dm(void 0)))
s($,"jM","h5",()=>A.a3(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jK","h3",()=>A.a3(A.fl(null)))
s($,"jJ","h2",()=>A.a3(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"jO","h7",()=>A.a3(A.fl(void 0)))
s($,"jN","h6",()=>A.a3(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"jP","eU",()=>A.hO())
s($,"jQ","ck",()=>A.fR(B.ab))
s($,"jS","eV",()=>{var r,q=t.S,p=A.fa(q)
for(r=20;r<60;r+=2)p.j(0,r)
for(r=60;r<72;r+=3)p.j(0,r)
for(r=72;r<120;r+=4)p.j(0,r)
for(r=120;r<144;r+=6)p.j(0,r)
for(r=144;r<=300;r+=8)p.j(0,r)
p.j(0,300)
return A.eq(p,q)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ay,SharedArrayBuffer:A.ay,ArrayBufferView:A.b6,DataView:A.bU,Float32Array:A.az,Float64Array:A.bV,Int16Array:A.bW,Int32Array:A.bX,Int8Array:A.bY,Uint16Array:A.bZ,Uint32Array:A.c_,Uint8ClampedArray:A.b7,CanvasPixelArray:A.b7,Uint8Array:A.c0})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aA.$nativeSuperclassTag="ArrayBufferView"
A.bg.$nativeSuperclassTag="ArrayBufferView"
A.bh.$nativeSuperclassTag="ArrayBufferView"
A.b4.$nativeSuperclassTag="ArrayBufferView"
A.bi.$nativeSuperclassTag="ArrayBufferView"
A.bj.$nativeSuperclassTag="ArrayBufferView"
A.b5.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.jm
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()