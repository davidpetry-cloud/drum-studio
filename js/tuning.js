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
if(a[b]!==s){A.kh(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.j(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.fr(b)
return new s(c,this)}:function(){if(s===null)s=A.fr(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.fr(a).prototype
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
fw(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ft(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.fu==null){A.k0()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.h0("Return interceptor for "+A.m(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.el
if(o==null)o=$.el=A.eF(n)
p=q[o]}if(p!=null)return p
p=A.k6(a)
if(p!=null)return p
if(typeof a=="function")return B.a0
s=Object.getPrototypeOf(a)
if(s==null)return B.J
if(s===Object.prototype)return B.J
if(typeof q=="function"){o=$.el
if(o==null)o=$.el=A.eF(n)
Object.defineProperty(q,o,{value:B.z,enumerable:false,writable:true,configurable:true})
return B.z}return B.z},
id(a,b){var s=t.d
return J.hY(s.a(a),s.a(b))},
fM(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ie(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.fM(r))break;++b}return b},
ig(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.fM(q))break}return b},
aN(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bj.prototype
return J.cm.prototype}if(typeof a=="string")return J.an.prototype
if(a==null)return J.bk.prototype
if(typeof a=="boolean")return J.cl.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
if(typeof a=="symbol")return J.bo.prototype
if(typeof a=="bigint")return J.bm.prototype
return a}if(a instanceof A.f)return a
return J.ft(a)},
c6(a){if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
if(typeof a=="symbol")return J.bo.prototype
if(typeof a=="bigint")return J.bm.prototype
return a}if(a instanceof A.f)return a
return J.ft(a)},
fs(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
if(typeof a=="symbol")return J.bo.prototype
if(typeof a=="bigint")return J.bm.prototype
return a}if(a instanceof A.f)return a
return J.ft(a)},
jW(a){if(typeof a=="number")return J.aS.prototype
if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(!(a instanceof A.f))return J.aD.prototype
return a},
jX(a){if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(!(a instanceof A.f))return J.aD.prototype
return a},
ak(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aN(a).O(a,b)},
R(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.k3(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c6(a).m(a,b)},
hX(a,b){return J.jX(a).bd(a,b)},
hY(a,b){return J.jW(a).M(a,b)},
d5(a,b){return J.fs(a).B(a,b)},
a_(a){return J.aN(a).gv(a)},
fD(a){return J.c6(a).gu(a)},
hZ(a){return J.c6(a).gG(a)},
al(a){return J.fs(a).gq(a)},
ax(a){return J.c6(a).gj(a)},
i_(a){return J.aN(a).gA(a)},
i0(a,b,c){return J.fs(a).U(a,b,c)},
ba(a){return J.aN(a).i(a)},
ci:function ci(){},
cl:function cl(){},
bk:function bk(){},
bn:function bn(){},
ap:function ap(){},
cA:function cA(){},
aD:function aD(){},
ao:function ao(){},
bm:function bm(){},
bo:function bo(){},
n:function n(a){this.$ti=a},
ck:function ck(){},
dp:function dp(a){this.$ti=a},
ay:function ay(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aS:function aS(){},
bj:function bj(){},
cm:function cm(){},
an:function an(){}},A={f7:function f7(){},
fP(a){return new A.aT("Field '"+a+"' has been assigned during initialization.")},
ii(a){return new A.aT("Field '"+a+"' has not been initialized.")},
ih(a){return new A.aT("Field '"+a+"' has already been initialized.")},
as(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fg(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fq(a,b,c){return a},
fv(a){var s,r
for(s=$.V.length,r=0;r<s;++r)if(a===$.V[r])return!0
return!1},
iv(a,b,c,d){A.fe(b,"start")
return new A.bI(a,b,c,d.h("bI<0>"))},
im(a,b,c,d){if(t.r.b(a))return new A.az(a,b,c.h("@<0>").n(d).h("az<1,2>"))
return new A.ac(a,b,c.h("@<0>").n(d).h("ac<1,2>"))},
dn(){return new A.bH("No element")},
aY:function aY(){},
bb:function bb(a,b){this.a=a
this.$ti=b},
bM:function bM(){},
bc:function bc(a,b){this.a=a
this.$ti=b},
aT:function aT(a){this.a=a},
dS:function dS(){},
e:function e(){},
P:function P(){},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aC:function aC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ac:function ac(a,b,c){this.a=a
this.b=b
this.$ti=c},
az:function az(a,b,c){this.a=a
this.b=b
this.$ti=c},
bu:function bu(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a0:function a0(a,b,c){this.a=a
this.b=b
this.$ti=c},
ag:function ag(a,b,c){this.a=a
this.b=b
this.$ti=c},
aE:function aE(a,b,c){this.a=a
this.b=b
this.$ti=c},
M:function M(){},
c2:function c2(){},
i8(){throw A.c(A.bK("Cannot modify constant Set"))},
hK(a){var s=A.hJ(a)
if(s!=null)return s
return"minified:"+a},
k3(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ba(a)
return s},
bA(a){var s,r=$.fS
if(r==null)r=$.fS=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bB(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
cD(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.d.bj(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
cC(a){var s,r,q,p
if(a instanceof A.f)return A.U(A.b7(a),null)
s=J.aN(a)
if(s===B.a_||s===B.a1||t.ak.b(a)){r=B.A(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.U(A.b7(a),null)},
fT(a){var s,r,q
if(a==null||typeof a=="number"||A.ez(a))return J.ba(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.am)return a.i(0)
if(a instanceof A.a8)return a.ba(!0)
s=$.hW()
for(r=0;r<1;++r){q=s[r].cg(a)
if(q!=null)return q}return"Instance of '"+A.cC(a)+"'"},
J(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.b7(s,10)|55296)>>>0,s&1023|56320)}throw A.c(A.bD(a,0,1114111,null,null))},
io(a){var s=a.$thrownJsError
if(s==null)return null
return A.b6(s)},
fU(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.A(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
d(a,b){if(a==null)J.ax(a)
throw A.c(A.eD(a,b))},
eD(a,b){var s,r="index"
if(!A.d2(b))return new A.a6(!0,b,r,null)
s=J.ax(a)
if(b<0||b>=s)return A.dj(b,s,a,r)
return A.fV(b,r)},
jJ(a){return new A.a6(!0,a,null,null)},
c(a){return A.A(a,new Error())},
A(a,b){var s
if(a==null)a=new A.ae()
b.dartException=a
s=A.kj
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
kj(){return J.ba(this.dartException)},
fz(a,b){throw A.A(a,b==null?new Error():b)},
c7(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.fz(A.j6(a,b,c),s)},
j6(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.bJ("'"+s+"': Cannot "+o+" "+l+k+n)},
aP(a){throw A.c(A.K(a))},
af(a){var s,r,q,p,o,n
a=A.hH(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.j([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.dY(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
dZ(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
h_(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
f8(a,b){var s=b==null,r=s?null:b.method
return new A.cn(a,r,s?null:b.receiver)},
aj(a){var s
if(a==null)return new A.dA(a)
if(a instanceof A.bg){s=a.a
return A.aw(a,s==null?A.b1(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.aw(a,a.dartException)
return A.jH(a)},
aw(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.b7(r,16)&8191)===10)switch(q){case 438:return A.aw(a,A.f8(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.aw(a,new A.bz())}}if(a instanceof TypeError){p=$.hM()
o=$.hN()
n=$.hO()
m=$.hP()
l=$.hS()
k=$.hT()
j=$.hR()
$.hQ()
i=$.hV()
h=$.hU()
g=p.H(s)
if(g!=null)return A.aw(a,A.f8(A.q(s),g))
else{g=o.H(s)
if(g!=null){g.method="call"
return A.aw(a,A.f8(A.q(s),g))}else if(n.H(s)!=null||m.H(s)!=null||l.H(s)!=null||k.H(s)!=null||j.H(s)!=null||m.H(s)!=null||i.H(s)!=null||h.H(s)!=null){A.q(s)
return A.aw(a,new A.bz())}}return A.aw(a,new A.cL(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bG()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.aw(a,new A.a6(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bG()
return a},
b6(a){var s
if(a instanceof A.bg)return a.b
if(a==null)return new A.bX(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bX(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
d4(a){if(a==null)return J.a_(a)
if(typeof a=="object")return A.bA(a)
return J.a_(a)},
jN(a){if(typeof a=="number")return B.b.gv(a)
if(a instanceof A.d0)return A.bA(a)
if(a instanceof A.a8)return a.gv(a)
return A.d4(a)},
hz(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.t(0,a[s],a[r])}return b},
jU(a,b){var s,r=a.length
for(s=0;s<r;++s)b.p(0,a[s])
return b},
jh(a,b,c,d,e,f){t.Z.a(a)
switch(A.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.ea("Unsupported number of arguments for wrapped closure"))},
b5(a,b){var s=a.$identity
if(!!s)return s
s=A.jO(a,b)
a.$identity=s
return s},
jO(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.jh)},
i7(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cG().constructor.prototype):Object.create(new A.aQ(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.fJ(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.i3(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.fJ(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
i3(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.i1)}throw A.c("Error in functionType of tearoff")},
i4(a,b,c,d){var s=A.fI
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
fJ(a,b,c,d){if(c)return A.i6(a,b,d)
return A.i4(b.length,d,a,b)},
i5(a,b,c,d){var s=A.fI,r=A.i2
switch(b?-1:a){case 0:throw A.c(new A.cE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
i6(a,b,c){var s,r
if($.fG==null)$.fG=A.fF("interceptor")
if($.fH==null)$.fH=A.fF("receiver")
s=b.length
r=A.i5(s,c,a,b)
return r},
fr(a){return A.i7(a)},
i1(a,b){return A.c1(v.typeUniverse,A.b7(a.a),b)},
fI(a){return a.a},
i2(a){return a.b},
fF(a){var s,r,q,p=new A.aQ("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.d6("Field name "+a+" not found.",null))},
eF(a){return v.getIsolateTag(a)},
k6(a){var s,r,q,p,o,n=A.q($.hA.$1(a)),m=$.eE[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eL[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.eu($.hu.$2(a,n))
if(q!=null){m=$.eE[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eL[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.eN(s)
$.eE[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.eL[n]=s
return s}if(p==="-"){o=A.eN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.hE(a,s)
if(p==="*")throw A.c(A.h0(n))
if(v.leafTags[n]===true){o=A.eN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.hE(a,s)},
hE(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.fw(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
eN(a){return J.fw(a,!1,null,!!a.$iS)},
k8(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.eN(s)
else return J.fw(s,c,null,null)},
k0(){if(!0===$.fu)return
$.fu=!0
A.k1()},
k1(){var s,r,q,p,o,n,m,l
$.eE=Object.create(null)
$.eL=Object.create(null)
A.k_()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hG.$1(o)
if(n!=null){m=A.k8(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
k_(){var s,r,q,p,o,n,m=B.K()
m=A.b4(B.L,A.b4(B.M,A.b4(B.B,A.b4(B.B,A.b4(B.N,A.b4(B.O,A.b4(B.P(B.A),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.hA=new A.eI(p)
$.hu=new A.eJ(o)
$.hG=new A.eK(n)},
b4(a,b){return a(b)||b},
jQ(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
fN(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(A.f4("Illegal RegExp pattern ("+String(o)+")",a))},
hy(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
hH(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
eX(a,b,c){var s
if(typeof b=="string")return A.kg(a,b,c)
if(b instanceof A.bl){s=b.gaZ()
s.lastIndex=0
return a.replace(s,A.hy(c))}return A.kf(a,b,c)},
kf(a,b,c){var s,r,q,p
for(s=J.hX(b,a),s=s.gq(s),r=0,q="";s.k();){p=s.gl()
q=q+a.substring(r,p.gaM())+c
r=p.gaG()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
kg(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.hH(b),"g"),A.hy(c))},
E:function E(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(){},
be:function be(a,b,c){this.a=a
this.b=b
this.$ti=c},
aF:function aF(a,b){this.a=a
this.$ti=b},
aG:function aG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a7:function a7(a,b){this.a=a
this.$ti=b},
bd:function bd(){},
bf:function bf(a,b,c){this.a=a
this.b=b
this.$ti=c},
bF:function bF(){},
dY:function dY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bz:function bz(){},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a){this.a=a},
dA:function dA(a){this.a=a},
bg:function bg(a,b){this.a=a
this.b=b},
bX:function bX(a){this.a=a
this.b=null},
am:function am(){},
ca:function ca(){},
cb:function cb(){},
cI:function cI(){},
cG:function cG(){},
aQ:function aQ(a,b){this.a=a
this.b=b},
cE:function cE(a){this.a=a},
aa:function aa(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dt:function dt(a,b){this.a=a
this.b=b
this.c=null},
ab:function ab(a,b){this.a=a
this.$ti=b},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bt:function bt(a,b){this.a=a
this.$ti=b},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bp:function bp(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eI:function eI(a){this.a=a},
eJ:function eJ(a){this.a=a},
eK:function eK(a){this.a=a},
a8:function a8(){},
b_:function b_(){},
b0:function b0(){},
bl:function bl(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
bR:function bR(a){this.b=a},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cH:function cH(a,b){this.a=a
this.c=b},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aK(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.eD(b,a))},
aV:function aV(){},
bx:function bx(){},
cq:function cq(){},
aW:function aW(){},
bv:function bv(){},
bw:function bw(){},
cr:function cr(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
by:function by(){},
cy:function cy(){},
bS:function bS(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
ff(a,b){var s=b.c
return s==null?b.c=A.c_(a,"aB",[b.x]):s},
fX(a){var s=a.w
if(s===6||s===7)return A.fX(a.x)
return s===11||s===12},
ir(a){return a.as},
a4(a){return A.es(v.typeUniverse,a,!1)},
aL(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.aL(a1,s,a3,a4)
if(r===s)return a2
return A.ha(a1,r,!0)
case 7:s=a2.x
r=A.aL(a1,s,a3,a4)
if(r===s)return a2
return A.h9(a1,r,!0)
case 8:q=a2.y
p=A.b3(a1,q,a3,a4)
if(p===q)return a2
return A.c_(a1,a2.x,p)
case 9:o=a2.x
n=A.aL(a1,o,a3,a4)
m=a2.y
l=A.b3(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.fj(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.b3(a1,j,a3,a4)
if(i===j)return a2
return A.hb(a1,k,i)
case 11:h=a2.x
g=A.aL(a1,h,a3,a4)
f=a2.y
e=A.jE(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.h8(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.b3(a1,d,a3,a4)
o=a2.x
n=A.aL(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.fk(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.c9("Attempted to substitute unexpected RTI kind "+a0))}},
b3(a,b,c,d){var s,r,q,p,o=b.length,n=A.et(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aL(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
jF(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.et(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aL(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
jE(a,b,c,d){var s,r=b.a,q=A.b3(a,r,c,d),p=b.b,o=A.b3(a,p,c,d),n=b.c,m=A.jF(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cS()
s.a=q
s.b=o
s.c=m
return s},
j(a,b){a[v.arrayRti]=b
return a},
hw(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.jZ(s)
return a.$S()}return null},
k2(a,b){var s
if(A.fX(b))if(a instanceof A.am){s=A.hw(a)
if(s!=null)return s}return A.b7(a)},
b7(a){if(a instanceof A.f)return A.z(a)
if(Array.isArray(a))return A.L(a)
return A.fn(J.aN(a))},
L(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
z(a){var s=a.$ti
return s!=null?s:A.fn(a)},
fn(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.jd(a,s)},
jd(a,b){var s=a instanceof A.am?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.iT(v.typeUniverse,s.name)
b.$ccache=r
return r},
jZ(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.es(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jY(a){return A.aM(A.z(a))},
fp(a){var s
if(a instanceof A.a8)return A.jT(a.$r,a.ao())
s=a instanceof A.am?A.hw(a):null
if(s!=null)return s
if(t.dm.b(a))return J.i_(a).a
if(Array.isArray(a))return A.L(a)
return A.b7(a)},
aM(a){var s=a.r
return s==null?a.r=new A.d0(a):s},
jT(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.d(q,0)
s=A.c1(v.typeUniverse,A.fp(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.hd(v.typeUniverse,s,A.fp(q[r]))}return A.c1(v.typeUniverse,s,a)},
a5(a){return A.aM(A.es(v.typeUniverse,a,!1))},
jc(a){var s=this
s.b=A.jC(s)
return s.b(a)},
jC(a){var s,r,q,p,o
if(a===t.K)return A.jn
if(A.aO(a))return A.jr
s=a.w
if(s===6)return A.ja
if(s===1)return A.ho
if(s===7)return A.ji
r=A.jB(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.aO)){a.f="$i"+q
if(q==="l")return A.jl
if(a===t.m)return A.jk
return A.jq}}else if(s===10){p=A.jQ(a.x,a.y)
o=p==null?A.ho:p
return o==null?A.b1(o):o}return A.j8},
jB(a){if(a.w===8){if(a===t.S)return A.d2
if(a===t.i||a===t.o)return A.jm
if(a===t.N)return A.jp
if(a===t.y)return A.ez}return null},
jb(a){var s=this,r=A.j7
if(A.aO(s))r=A.iY
else if(s===t.K)r=A.b1
else if(A.b8(s)){r=A.j9
if(s===t.h6)r=A.iX
else if(s===t.dk)r=A.eu
else if(s===t.fQ)r=A.iV
else if(s===t.cg)r=A.hh
else if(s===t.cD)r=A.iW
else if(s===t.an)r=A.av}else if(s===t.S)r=A.Z
else if(s===t.N)r=A.q
else if(s===t.y)r=A.d1
else if(s===t.o)r=A.hg
else if(s===t.i)r=A.c3
else if(s===t.m)r=A.r
s.a=r
return s.a(a)},
j8(a){var s=this
if(a==null)return A.b8(s)
return A.k4(v.typeUniverse,A.k2(a,s),s)},
ja(a){if(a==null)return!0
return this.x.b(a)},
jq(a){var s,r=this
if(a==null)return A.b8(r)
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.aN(a)[s]},
jl(a){var s,r=this
if(a==null)return A.b8(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.aN(a)[s]},
jk(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.f)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
hn(a){if(typeof a=="object"){if(a instanceof A.f)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
j7(a){var s=this
if(a==null){if(A.b8(s))return a}else if(s.b(a))return a
throw A.A(A.hj(a,s),new Error())},
j9(a){var s=this
if(a==null||s.b(a))return a
throw A.A(A.hj(a,s),new Error())},
hj(a,b){return new A.bY("TypeError: "+A.h1(a,A.U(b,null)))},
h1(a,b){return A.cf(a)+": type '"+A.U(A.fp(a),null)+"' is not a subtype of type '"+b+"'"},
Y(a,b){return new A.bY("TypeError: "+A.h1(a,b))},
ji(a){var s=this
return s.x.b(a)||A.ff(v.typeUniverse,s).b(a)},
jn(a){return a!=null},
b1(a){if(a!=null)return a
throw A.A(A.Y(a,"Object"),new Error())},
jr(a){return!0},
iY(a){return a},
ho(a){return!1},
ez(a){return!0===a||!1===a},
d1(a){if(!0===a)return!0
if(!1===a)return!1
throw A.A(A.Y(a,"bool"),new Error())},
iV(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.A(A.Y(a,"bool?"),new Error())},
c3(a){if(typeof a=="number")return a
throw A.A(A.Y(a,"double"),new Error())},
iW(a){if(typeof a=="number")return a
if(a==null)return a
throw A.A(A.Y(a,"double?"),new Error())},
d2(a){return typeof a=="number"&&Math.floor(a)===a},
Z(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.A(A.Y(a,"int"),new Error())},
iX(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.A(A.Y(a,"int?"),new Error())},
jm(a){return typeof a=="number"},
hg(a){if(typeof a=="number")return a
throw A.A(A.Y(a,"num"),new Error())},
hh(a){if(typeof a=="number")return a
if(a==null)return a
throw A.A(A.Y(a,"num?"),new Error())},
jp(a){return typeof a=="string"},
q(a){if(typeof a=="string")return a
throw A.A(A.Y(a,"String"),new Error())},
eu(a){if(typeof a=="string")return a
if(a==null)return a
throw A.A(A.Y(a,"String?"),new Error())},
r(a){if(A.hn(a))return a
throw A.A(A.Y(a,"JSObject"),new Error())},
av(a){if(a==null)return a
if(A.hn(a))return a
throw A.A(A.Y(a,"JSObject?"),new Error())},
hr(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.U(a[q],b)
return s},
jw(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.hr(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.U(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
hk(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.j([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.p(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.d(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.U(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.U(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.U(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.U(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.U(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
U(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.U(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.U(a.x,b)+">"
if(l===8){p=A.jG(a.x)
o=a.y
return o.length>0?p+("<"+A.hr(o,b)+">"):p}if(l===10)return A.jw(a,b)
if(l===11)return A.hk(a,b,null)
if(l===12)return A.hk(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
jG(a){var s=A.hJ(a)
if(s!=null)return s
return"minified:"+a},
iU(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
iT(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.es(a,b,!1)
else if(typeof m=="number"){s=m
r=A.c0(a,5,"#")
q=A.et(s)
for(p=0;p<s;++p)q[p]=r
o=A.c_(a,b,q)
n[b]=o
return o}else return m},
iS(a,b){return A.he(a.tR,b)},
iR(a,b){return A.he(a.eT,b)},
es(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.hc(a,null,b,!1)
r.set(b,s)
return s},
c1(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.hc(a,b,c,!0)
q.set(c,r)
return r},
hd(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.fj(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
hc(a,b,c,d){return A.iJ(A.iD(a,b,c,d))},
at(a,b){b.a=A.jb
b.b=A.jc
return b},
c0(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.a2(null,null)
s.w=b
s.as=c
r=A.at(a,s)
a.eC.set(c,r)
return r},
ha(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.iP(a,b,r,c)
a.eC.set(r,s)
return s},
iP(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.aO(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.b8(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.a2(null,null)
q.w=6
q.x=b
q.as=c
return A.at(a,q)},
h9(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.iN(a,b,r,c)
a.eC.set(r,s)
return s},
iN(a,b,c,d){var s,r
if(d){s=b.w
if(A.aO(b)||b===t.K)return b
else if(s===1)return A.c_(a,"aB",[b])
else if(b===t.P||b===t.T)return t.eH}r=new A.a2(null,null)
r.w=7
r.x=b
r.as=c
return A.at(a,r)},
iQ(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.a2(null,null)
s.w=13
s.x=b
s.as=q
r=A.at(a,s)
a.eC.set(q,r)
return r},
bZ(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
iM(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
c_(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bZ(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.a2(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.at(a,r)
a.eC.set(p,q)
return q},
fj(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bZ(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.a2(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.at(a,o)
a.eC.set(q,n)
return n},
hb(a,b,c){var s,r,q="+"+(b+"("+A.bZ(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.a2(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.at(a,s)
a.eC.set(q,r)
return r},
h8(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bZ(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bZ(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.iM(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.a2(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.at(a,p)
a.eC.set(r,o)
return o},
fk(a,b,c,d){var s,r=b.as+("<"+A.bZ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.iO(a,b,c,r,d)
a.eC.set(r,s)
return s},
iO(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.et(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.aL(a,b,r,0)
m=A.b3(a,c,r,0)
return A.fk(a,n,m,c!==m)}}l=new A.a2(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.at(a,l)},
iD(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
iJ(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.iF(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.h6(a,r,l,k,!1)
else if(q===46)r=A.h6(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aJ(a.u,a.e,k.pop()))
break
case 94:k.push(A.iQ(a.u,k.pop()))
break
case 35:k.push(A.c0(a.u,5,"#"))
break
case 64:k.push(A.c0(a.u,2,"@"))
break
case 126:k.push(A.c0(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.iH(a,k)
break
case 38:A.iG(a,k)
break
case 63:p=a.u
k.push(A.ha(p,A.aJ(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.h9(p,A.aJ(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.iE(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.h7(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.iK(a.u,a.e,o)
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
return A.aJ(a.u,a.e,m)},
iF(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
h6(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.iU(s,o.x)[p]
if(n==null)A.fz('No "'+p+'" in "'+A.ir(o)+'"')
d.push(A.c1(s,o,n))}else d.push(p)
return m},
iH(a,b){var s,r=a.u,q=A.h5(a,b),p=b.pop()
if(typeof p=="string")b.push(A.c_(r,p,q))
else{s=A.aJ(r,a.e,p)
switch(s.w){case 11:b.push(A.fk(r,s,q,a.n))
break
default:b.push(A.fj(r,s,q))
break}}},
iE(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.h5(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.aJ(p,a.e,o)
q=new A.cS()
q.a=s
q.b=n
q.c=m
b.push(A.h8(p,r,q))
return
case-4:b.push(A.hb(p,b.pop(),s))
return
default:throw A.c(A.c9("Unexpected state under `()`: "+A.m(o)))}},
iG(a,b){var s=b.pop()
if(0===s){b.push(A.c0(a.u,1,"0&"))
return}if(1===s){b.push(A.c0(a.u,4,"1&"))
return}throw A.c(A.c9("Unexpected extended operation "+A.m(s)))},
h5(a,b){var s=b.splice(a.p)
A.h7(a.u,a.e,s)
a.p=b.pop()
return s},
aJ(a,b,c){if(typeof c=="string")return A.c_(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.iI(a,b,c)}else return c},
h7(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aJ(a,b,c[s])},
iK(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aJ(a,b,c[s])},
iI(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.c9("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.c9("Bad index "+c+" for "+b.i(0)))},
k4(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.F(a,b,null,c,null)
r.set(c,s)}return s},
F(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.aO(d))return!0
s=b.w
if(s===4)return!0
if(A.aO(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.F(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.F(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.F(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.F(a,b.x,c,d,e))return!1
return A.F(a,A.ff(a,b),c,d,e)}if(s===6)return A.F(a,p,c,d,e)&&A.F(a,b.x,c,d,e)
if(q===7){if(A.F(a,b,c,d.x,e))return!0
return A.F(a,b,c,A.ff(a,d),e)}if(q===6)return A.F(a,b,c,p,e)||A.F(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.gT)return!0
if(q===12){if(b===t.V)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.F(a,j,c,i,e)||!A.F(a,i,e,j,c))return!1}return A.hm(a,b.x,c,d.x,e)}if(q===11){if(b===t.V)return!0
if(p)return!1
return A.hm(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.jj(a,b,c,d,e)}if(o&&q===10)return A.jo(a,b,c,d,e)
return!1},
hm(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.F(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.F(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.F(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.F(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.F(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
jj(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.c1(a,b,r[o])
return A.hf(a,p,null,c,d.y,e)}return A.hf(a,b.y,null,c,d.y,e)},
hf(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.F(a,b[s],d,e[s],f))return!1
return!0},
jo(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.F(a,r[s],c,q[s],e))return!1
return!0},
b8(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.aO(a))if(s!==6)r=s===7&&A.b8(a.x)
return r},
aO(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
he(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
et(a){return a>0?new Array(a):v.typeUniverse.sEA},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cS:function cS(){this.c=this.b=this.a=null},
d0:function d0(a){this.a=a},
cR:function cR(){},
bY:function bY(a){this.a=a},
iw(){var s,r,q
if(self.scheduleImmediate!=null)return A.jK()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.b5(new A.e6(s),1)).observe(r,{childList:true})
return new A.e5(s,r,q)}else if(self.setImmediate!=null)return A.jL()
return A.jM()},
ix(a){self.scheduleImmediate(A.b5(new A.e7(t.M.a(a)),0))},
iy(a){self.setImmediate(A.b5(new A.e8(t.M.a(a)),0))},
iz(a){t.M.a(a)
A.iL(0,a)},
iL(a,b){var s=new A.eq()
s.bp(a,b)
return s},
jt(a){return new A.cO(new A.D($.x,a.h("D<0>")),a.h("cO<0>"))},
j0(a,b){a.$2(0,null)
b.b=!0
return b.a},
hi(a,b){A.j1(a,b)},
j_(a,b){b.aD(a)},
iZ(a,b){b.aE(A.aj(a),A.b6(a))},
j1(a,b){var s,r,q=new A.ev(b),p=new A.ew(b)
if(a instanceof A.D)a.b9(q,p,t.z)
else{s=t.z
if(a instanceof A.D)a.bi(q,p,s)
else{r=new A.D($.x,t._)
r.a=8
r.c=a
r.b9(q,p,s)}}},
jI(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.x
return r.b3(r,t.as.a(new A.eC(s)),t.H,t.S,t.z)},
d7(a){var s
if(t.C.b(a)){s=a.ga2()
if(s!=null)return s}return B.m},
je(a,b){var s=$.x
if(s===B.h)return null
s.bB(s,a,b)
return null},
jf(a,b){if($.x!==B.h)A.je(a,b)
if(b==null)if(t.C.b(a)){b=a.ga2()
if(b==null){A.fU(a,B.m)
b=B.m}}else b=B.m
else if(t.C.b(a))A.fU(a,b)
return new A.W(a,b)},
fh(a,b,c){var s,r,q,p,o,n={},m=n.a=a
for(s=t._;r=m.a,(r&4)!==0;m=a){a=s.a(m.c)
n.a=a}if(m===b){s=A.it()
b.ag(new A.W(new A.a6(!0,m,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=m.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=m
m.b1(p)
return}if(!c)if(b.c==null)m=(s&16)===0||q!==0
else m=!1
else m=!0
if(m){p=b.a6()
b.a4(n.a)
A.aZ(b,p)
return}b.a^=2
o=b.b
o.W(o,new A.ee(n,b))},
aZ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=e.a=a
for(s=t.n,r=t.F;;){q={}
p=d.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(d.c)
d=d.b
d.aX(d,m.a,m.b)}return}q.a=b
l=b.a
for(d=b;l!=null;d=l,l=k){d.a=null
A.aZ(e.a,d)
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
if((d&15)===8)new A.ei(q,e,n).$0()
else if(o){if((d&1)!==0)new A.eh(q,j).$0()}else if((d&2)!==0)new A.eg(e,q).$0()
if(h!=null)$.x=h
d=q.c
if(d instanceof A.D){p=q.a.$ti
p=p.h("aB<2>").b(d)||!p.y[1].b(d)}else p=!1
if(p){g=q.a.b
if((d.a&24)!==0){f=r.a(g.c)
g.c=null
b=g.a7(f)
g.a=d.a&30|g.a&1
g.c=d.c
e.a=d
continue}else A.fh(d,g,!0)
return}}g=q.a.b
f=r.a(g.c)
g.c=null
b=g.a7(f)
d=q.b
p=q.c
if(!d){g.$ti.c.a(p)
g.a=8
g.c=p}else{s.a(p)
g.a=g.a&1|16
g.c=p}e.a=g
d=g}},
hq(a,b){var s=t.Q
if(s.b(a))return b.b3(b,s.a(a),t.z,t.K,t.l)
s=t.v
if(s.b(a))return b.b4(b,s.a(a),t.z,t.K)
throw A.c(A.fE(a,"onError",u.c))},
ju(){var s,r
for(s=$.b2;s!=null;s=$.b2){$.c5=null
r=s.b
$.b2=r
if(r==null)$.c4=null
s.a.$0()}},
jD(){$.fo=!0
try{A.ju()}finally{$.c5=null
$.fo=!1
if($.b2!=null)$.fB().$1(A.hv())}},
hs(a){var s=new A.cP(a),r=$.c4
if(r==null){$.b2=$.c4=s
if(!$.fo)$.fB().$1(A.hv())}else $.c4=r.b=s},
jA(a){var s,r,q,p=$.b2
if(p==null){A.hs(a)
$.c5=$.c4
return}s=new A.cP(a)
r=$.c5
if(r==null){s.b=p
$.b2=$.c5=s}else{q=r.b
s.b=q
$.c5=r.b=s
if(q==null)$.c4=s}},
kp(a,b){A.fq(a,"stream",t.K)
return new A.cX(b.h("cX<0>"))},
jy(a,b){A.jA(new A.eA(a,b))},
jz(a,b){if(B.h!==a)b=a.bX(b,t.H)
A.hs(b)},
e6:function e6(a){this.a=a},
e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},
e7:function e7(a){this.a=a},
e8:function e8(a){this.a=a},
eq:function eq(){},
er:function er(a,b){this.a=a
this.b=b},
cO:function cO(a,b){this.a=a
this.b=!1
this.$ti=b},
ev:function ev(a){this.a=a},
ew:function ew(a){this.a=a},
eC:function eC(a){this.a=a},
W:function W(a,b){this.a=a
this.b=b},
cQ:function cQ(){},
bL:function bL(a,b){this.a=a
this.$ti=b},
ah:function ah(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
D:function D(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
eb:function eb(a,b){this.a=a
this.b=b},
ef:function ef(a,b){this.a=a
this.b=b},
ee:function ee(a,b){this.a=a
this.b=b},
ed:function ed(a,b){this.a=a
this.b=b},
ec:function ec(a,b){this.a=a
this.b=b},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
ej:function ej(a,b){this.a=a
this.b=b},
ek:function ek(a){this.a=a},
eh:function eh(a,b){this.a=a
this.b=b},
eg:function eg(a,b){this.a=a
this.b=b},
cP:function cP(a){this.a=a
this.b=null},
cX:function cX(a){this.$ti=a},
e3:function e3(){},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
eA:function eA(a,b){this.a=a
this.b=b},
h2(a,b){var s=a[b]
return s===a?null:s},
h3(a,b,c){if(c==null)a[b]=a
else a[b]=c},
iA(){var s=Object.create(null)
A.h3(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
fa(a,b,c){return b.h("@<0>").n(c).h("f9<1,2>").a(A.hz(a,new A.aa(b.h("@<0>").n(c).h("aa<1,2>"))))},
cp(a,b){return new A.aa(a.h("@<0>").n(b).h("aa<1,2>"))},
ij(a){return new A.aH(a.h("aH<0>"))},
ik(a,b){return b.h("fQ<0>").a(A.jU(a,new A.aH(b.h("aH<0>"))))},
fi(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
h4(a,b,c){var s=new A.aI(a,b,c.h("aI<0>"))
s.c=a.e
return s},
ib(a,b){var s=J.al(a.a)
if(new A.aE(s,a.b,a.$ti.h("aE<1>")).k())return s.gl()
return null},
fd(a){var s,r
if(A.fv(a))return"{...}"
s=new A.aX("")
try{r={}
B.a.p($.V,a)
s.a+="{"
r.a=!0
a.D(0,new A.dx(r,s))
s.a+="}"}finally{if(0>=$.V.length)return A.d($.V,-1)
$.V.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bN:function bN(){},
bQ:function bQ(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
bO:function bO(a,b){this.a=a
this.$ti=b},
bP:function bP(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aH:function aH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cV:function cV(a){this.a=a
this.c=this.b=null},
aI:function aI(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
o:function o(){},
C:function C(){},
dx:function dx(a,b){this.a=a
this.b=b},
aq:function aq(){},
bW:function bW(){},
jv(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aj(r)
q=A.f4(String(s),null)
throw A.c(q)}q=A.ey(p)
return q},
ey(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.cT(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.ey(a[s])
return a},
fO(a,b,c){return new A.bq(a,b)},
j5(a){return a.cp()},
iB(a,b){return new A.em(a,[],A.jP())},
iC(a,b,c){var s,r=new A.aX(""),q=A.iB(r,b)
q.ae(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
cT:function cT(a,b){this.a=a
this.b=b
this.c=null},
cU:function cU(a){this.a=a},
cc:function cc(){},
ce:function ce(){},
bq:function bq(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=b},
dq:function dq(){},
ds:function ds(a){this.b=a},
dr:function dr(a){this.a=a},
en:function en(){},
eo:function eo(a,b){this.a=a
this.b=b},
em:function em(a,b,c){this.c=a
this.a=b
this.b=c},
jS(a){var s=A.cD(a)
if(s!=null)return s
throw A.c(A.f4("Invalid double",a))},
i9(a,b){a=A.A(a,new Error())
if(a==null)a=A.b1(a)
a.stack=b.i(0)
throw a},
du(a,b,c){var s,r,q
if(a<0||a>4294967295)A.fz(A.bD(a,0,4294967295,"length",null))
s=A.j(new Array(a),c.h("n<0>"))
s.$flags=1
r=s
if(a!==0&&b!=null)for(q=0;q<r.length;++q)r[q]=b
return r},
il(a,b,c){var s,r,q=A.j([],c.h("n<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.aP)(a),++r)B.a.p(q,c.a(a[r]))
q.$flags=1
return q},
fb(a,b){var s,r
if(Array.isArray(a))return A.j(a.slice(0),b.h("n<0>"))
s=A.j([],b.h("n<0>"))
for(r=J.al(a);r.k();)B.a.p(s,r.gl())
return s},
fc(a,b){var s=A.il(a,!1,b)
s.$flags=3
return s},
fW(a){return new A.bl(a,A.fN(a,!1,!0,!1,!1,""))},
fZ(a,b,c){var s=J.al(b)
if(!s.k())return a
if(c.length===0){do a+=A.m(s.gl())
while(s.k())}else{a+=A.m(s.gl())
while(s.k())a=a+c+A.m(s.gl())}return a},
it(){return A.b6(new Error())},
cf(a){if(typeof a=="number"||A.ez(a)||a==null)return J.ba(a)
if(typeof a=="string")return JSON.stringify(a)
return A.fT(a)},
ia(a,b){A.fq(a,"error",t.K)
A.fq(b,"stackTrace",t.l)
A.i9(a,b)},
c9(a){return new A.c8(a)},
d6(a,b){return new A.a6(!1,null,b,a)},
fE(a,b,c){return new A.a6(!0,a,b,c)},
fV(a,b){return new A.bC(null,null,!0,a,b,"Value not in range")},
bD(a,b,c,d,e){return new A.bC(b,c,!0,a,d,"Invalid value")},
ip(a,b,c){if(0>a||a>c)throw A.c(A.bD(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.bD(b,a,c,"end",null))
return b}return c},
fe(a,b){if(a<0)throw A.c(A.bD(a,0,null,b,null))
return a},
dj(a,b,c,d){return new A.ch(b,!0,a,d,"Index out of range")},
bK(a){return new A.bJ(a)},
h0(a){return new A.cK(a)},
fY(a){return new A.bH(a)},
K(a){return new A.cd(a)},
f4(a,b){return new A.bi(a,b)},
ic(a,b,c){var s,r
if(A.fv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.j([],t.s)
B.a.p($.V,a)
try{A.js(a,s)}finally{if(0>=$.V.length)return A.d($.V,-1)
$.V.pop()}r=A.fZ(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
f5(a,b,c){var s,r
if(A.fv(a))return b+"..."+c
s=new A.aX(b)
B.a.p($.V,a)
try{r=s
r.a=A.fZ(r.a,a,", ")}finally{if(0>=$.V.length)return A.d($.V,-1)
$.V.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
js(a,b){var s,r,q,p,o,n,m,l=a.gq(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.k())return
s=A.m(l.gl())
B.a.p(b,s)
k+=s.length+2;++j}if(!l.k()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gl();++j
if(!l.k()){if(j<=4){B.a.p(b,A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gl();++j
for(;l.k();p=o,o=n){n=l.gl();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.p(b,"...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.p(b,m)
B.a.p(b,q)
B.a.p(b,r)},
fR(a,b,c,d){var s
if(B.r===c){s=B.c.gv(a)
b=J.a_(b)
return A.fg(A.as(A.as($.f1(),s),b))}if(B.r===d){s=B.c.gv(a)
b=J.a_(b)
c=J.a_(c)
return A.fg(A.as(A.as(A.as($.f1(),s),b),c))}s=B.c.gv(a)
b=J.a_(b)
c=J.a_(c)
d=J.a_(d)
d=A.fg(A.as(A.as(A.as(A.as($.f1(),s),b),c),d))
return d},
e9:function e9(){},
w:function w(){},
c8:function c8(a){this.a=a},
ae:function ae(){},
a6:function a6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bC:function bC(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ch:function ch(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bJ:function bJ(a){this.a=a},
cK:function cK(a){this.a=a},
bH:function bH(a){this.a=a},
cd:function cd(a){this.a=a},
bG:function bG(){},
ea:function ea(a){this.a=a},
bi:function bi(a,b){this.a=a
this.b=b},
b:function b(){},
I:function I(){},
f:function f(){},
d_:function d_(){},
aX:function aX(a){this.a=a},
dz:function dz(a){this.a=a},
hl(a){var s
if(typeof a=="function")throw A.c(A.d6("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.j2,a)
s[$.fA()]=a
return s},
j2(a,b,c){t.Z.a(a)
if(A.Z(c)>=1)return a.$1(b)
return a.$0()},
hp(a){return a==null||A.ez(a)||typeof a=="number"||typeof a=="string"||t.E.b(a)||t.gc.b(a)||t.go.b(a)||t.D.b(a)||t.h7.b(a)||t.k.b(a)||t.bv.b(a)||t.B.b(a)||t.q.b(a)||t.J.b(a)||t.W.b(a)},
k5(a){if(A.hp(a))return a
return new A.eM(new A.bQ(t.hg)).$1(a)},
fx(a,b){var s=new A.D($.x,b.h("D<0>")),r=new A.bL(s,b.h("bL<0>"))
a.then(A.b5(new A.eR(r,b),1),A.b5(new A.eS(r),1))
return s},
eM:function eM(a){this.a=a},
eR:function eR(a,b){this.a=a
this.b=b},
eS:function eS(a){this.a=a},
d3(a){var s=69+12*(Math.log(a/440)/0.6931471805599453),r=B.b.C(s)
return new A.dy(r,B.b.C((s-r)*100))},
ke(a){var s,r,q,p=a.length
if(p===0)return 0
for(s=0,r=0;r<p;++r){q=a[r]
s+=q*q}return Math.sqrt(s/p)},
ka(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1/b,f=Math.max(1,B.b.c4(a0/g)),e=a.length,d=Math.min(e-2,B.b.bY(c/g))
if(d<=f)return null
s=A.j([],t.u)
for(r=f,q=r;r<=d;++r){if(!(r>=0&&r<e))return A.d(a,r)
p=a[r]
p=isFinite(p)?p:-200
B.a.p(s,p)
if(!(q>=0&&q<e))return A.d(a,q)
o=a[q]
if(p>(isFinite(o)?o:-200))q=r}B.a.aL(s)
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
h=i!==0?B.b.aa(0.5*(k-j)/i,-0.5,0.5):0}else h=0
return(q+h)*g},
hD(a){var s,r,q,p=A.fb(a,t.i)
B.a.aL(p)
s=p.length
r=s/2|0
if((s&1)===1){if(!(r<s))return A.d(p,r)
p=p[r]}else{q=r-1
if(!(q>=0&&q<s))return A.d(p,q)
q=p[q]
if(!(r<s))return A.d(p,r)
p=(q+p[r])/2}return p},
dy:function dy(a,b){this.a=a
this.b=b},
di:function di(a){var _=this
_.a=0.02
_.e=null
_.f=0
_.r=a},
dv:function dv(a,b){this.a=a
this.b=b},
dw:function dw(){},
hI(a){var s,r,q,p,o=t.s,n=A.j(a.split(" "),o),m=B.a.ca(n,new A.eZ()),l=A.j([],o)
for(s=!0,r=0;r<n.length;++r){q=n[r]
if(q.length===0){B.a.p(l,q)
continue}p=!1
if(!s)if(r!==m){o=A.fW("^[^\\w]+|[^\\w]+$")
o=B.aT.N(0,A.eX(q,o,"").toLowerCase())
p=o}B.a.p(l,p?q.toLowerCase():A.j3(q))
s=B.d.c0(q,":")}return B.a.ac(l," ")},
j3(a){return new A.a0(A.j(a.split("-"),t.s),t.dG.a(new A.ex()),t.dv).ac(0,"-")},
eZ:function eZ(){},
ex:function ex(){},
fK(a){return B.a.a0(B.w,new A.d8(a),new A.d9())},
b9(a,b){var s,r,q,p,o,n,m=B.ar.m(0,a),l=m.m(0,b)
if(t.dP.b(l))return new A.cz(l.a,l.b,null,l.c)
s=m.gE().cd(0,new A.eT(b))
r=m.m(0,s)
q=r.a
p=r.b
o=r.c
n=s/b
return new A.cz(B.b.I(q*n),B.b.I(p*n),s,o)},
jR(a,b){var s=a.r
if(Math.abs(b-s)<0.75)return"A common depth for a "+a.c.toLowerCase()+": a balance of attack and body."
return b<s?"Shallower than usual: tends toward a quicker, more cutting attack and a shorter, tighter sound.":"Deeper than usual: tends toward more body and low end, with a fuller, longer sound."},
k9(a){return B.a.a0(B.t,new A.eO(a),new A.eP())},
hB(a,b){return B.a.a0(a,new A.eG(b),new A.eH(a))},
kd(a){return B.a.a0(B.v,new A.eV(a),new A.eW())},
is(a){return B.a.a0(B.F,new A.dT(a),new A.dU())},
hx(a){var s,r,q,p=Math.abs(a),o=B.b.C(p),n=B.b.C((p-o)*100),m=B.c.L(o,12),l=B.c.P(o,12),k=m===1?"Octave":""+m+" octaves"
if(m===0)s=B.u[l]
else s=l===0?k:k+" + "+B.u[l].toLowerCase()
r=Math.abs(n)
if(r<=2)return s
q=n>0?"+":"\u2212"
return s+" "+q+r+"\xa2"},
ht(a){var s=A.fb(a,t.U)
B.a.af(s,new A.eB())
return s},
hF(a,b,c){var s,r,q,p,o,n=A.ht(a),m=A.j([],t.c)
for(s=b,r=0;r<n.length;++r){if(r>0){q=r-1
p=c.length
if(q<p)o=c[q]
else o=p===0?5:B.a.gc9(c)
s*=Math.pow(2,-o/12)}if(!(r<n.length))return A.d(n,r)
q=n[r]
p=q.a
q=q.b
B.a.p(m,new A.ad(p,q,s,A.b9(p,q)))}return m},
kb(a,b){var s,r,q=A.ht(a),p=A.j([],t.c),o=0
for(;;){s=q.length
if(!(o<s&&o<b.length))break
if(!(o<s))return A.d(q,o)
s=q[o]
r=s.a
s=s.b
if(!(o<b.length))return A.d(b,o)
p.push(new A.ad(r,s,b[o],A.b9(r,s)));++o}return p},
jV(a){var s,r,q,p=A.j([],t.u)
for(s=0;r=s+1,q=a.length,r<q;s=r){if(!(s<q))return A.d(a,s)
p.push(12*(Math.log(a[s].c/a[r].c)/0.6931471805599453))}return p},
N:function N(a,b){this.a=a
this.b=b},
B:function B(a,b,c,d,e,f,g){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.a=f
_.b=g},
d8:function d8(a){this.a=a},
d9:function d9(){},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eT:function eT(a){this.a=a},
bh:function bh(a,b){this.a=a
this.b=b},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
eO:function eO(a){this.a=a},
eP:function eP(){},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eG:function eG(a){this.a=a},
eH:function eH(a){this.a=a},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eV:function eV(a){this.a=a},
eW:function eW(){},
a3:function a3(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
dT:function dT(a){this.a=a},
dU:function dU(){},
cj:function cj(a,b){this.a=a
this.b=b},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eB:function eB(){},
k(a,b){var s=A.av(A.r(v.G.document).getElementById(a))
s.toString
return b.a(s)},
v(a,b,c){var s=A.r(A.r(v.G.document).createElement(a))
if(b!=null)s.className=b
if(c!=null)s.textContent=c
return s},
Q(a,b,c){return a.addEventListener(b,A.hl(new A.eQ(c)))},
hC(a){var s,r,q,p,o=null
try{s=A.av(v.G.localStorage)
q=s
r=q==null?o:A.f6(q,"getItem",a,o,t.X)
q=r!=null&&typeof r==="string"?A.q(r):o
return q}catch(p){return o}},
fy(a,b){var s,r,q
try{s=A.av(v.G.localStorage)
r=s
if(r!=null)A.f6(r,"setItem",a,b,t.X)}catch(q){}},
kc(){var s,r,q,p,o,n=A.r(v.G.navigator).serviceWorker,m=t.m
if(!m.b(n))return
try{s=A.f6(A.r(n),"register","sw.js",null,m)
m=A.fx(s,t.X)
r=new A.eU()
q=m.$ti
p=$.x
if(p!==B.h)r=A.hq(r,p)
m.a3(new A.ah(new A.D(p,q),2,null,r,q.h("ah<1,1>")))}catch(o){}},
kk(){var s=v.G,r=A.av(A.r(s.document).getElementById("themeToggle")),q=A.r(A.r(s.document).documentElement)
if(r==null)return
s=new A.f0(q,r)
A.Q(r,"click",new A.f_(q,s))
s.$0()},
eQ:function eQ(a){this.a=a},
eU:function eU(){},
f0:function f0(a,b){this.a=a
this.b=b},
f_:function f_(a,b){this.a=a
this.b=b},
k7(){var s,r,q
A.kk()
A.kc()
if(A.av(A.r(v.G.document).getElementById("guide"))==null)return
s=t.m
r=new A.cg(A.k("drum-type",s),A.k("drum-size",s),A.k("drum-depth",s),A.k("material",s),A.k("batter",s),A.k("reso",s),A.k("relation",s),A.k("range-title",s),A.k("range-low",s),A.k("range-med",s),A.k("range-high",s),A.k("range-scaled",s),A.k("notes",s),B.e,A.j([],t.bT))
r.a1()
q=t.u
new A.cJ(r,A.k("mic-start",s),A.k("reading-hz",s),A.k("reading-note",s),A.k("needle",s),A.k("level",s),A.k("listen-state",s),A.k("sensitivity",s),A.k("lugs",s),A.k("lug-status",s),A.k("target-line",s),A.k("target-mark",s),A.k("tuner-status",s),new A.di(A.j([],q)),A.j([],q)).a1()
q=t.N
new A.cB(A.k("plan-sizes",s),A.k("plan-spacing",s),A.k("plan-spacing-hint",s),A.k("plan-interval-row",s),A.k("plan-interval",s),A.k("plan-top-row",s),A.k("plan-top",s),A.k("plan-out",s),A.k("plan-summary",s),A.ik([B.aF,B.aG,B.aH],t.U),B.k,A.cp(q,t.S),A.cp(q,t.i),A.j([],t.A)).a1()
A.jx()},
fl(a){return a<100?B.b.F(a,1):B.c.i(B.b.C(a))},
au(a,b){var s,r,q,p
a.replaceChildren()
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.aP)(b),++r){q=b[r]
p=A.v("option",null,q.b)
p.setAttribute("value",q.a)
a.appendChild(p)}},
fm(a){return a===B.b.I(a)?""+B.b.C(a)+'"':A.m(a)+'"'},
j4(a){var s,r,q,p,o,n=A.v("p","cite","Sources: ")
for(s=a.length,r=!0,q=0;q<s;++q){p=B.x.m(0,a[q])
if(p==null)continue
if(!r)n.appendChild(A.v("span",null," \xb7 "))
o=A.v("a",null,p.a)
o.setAttribute("href",p.b)
o.setAttribute("rel","noopener")
o.setAttribute("target","_blank")
n.appendChild(o)
r=!1}return n},
jx(){var s,r,q,p,o=A.k("sources",t.m)
for(s=B.x.gbk(),s=s.gq(s);s.k();){r=s.gl()
q=A.v("li",null,null)
p=A.v("a",null,r.a)
p.setAttribute("href",r.b)
p.setAttribute("rel","noopener")
p.setAttribute("target","_blank")
q.appendChild(p)
o.appendChild(q)}},
cg:function cg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
df:function df(a){this.a=a},
dg:function dg(a){this.a=a},
dh:function dh(a){this.a=a},
dc:function dc(){},
de:function de(){},
dd:function dd(a){this.a=a},
cJ:function cJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
dW:function dW(a){this.a=a},
dX:function dX(a){this.a=a},
dV:function dV(a){this.a=a},
cW:function cW(a,b){var _=this
_.a=a
_.b=b
_.f=_.e=_.d=_.c=$
_.w=_.r=null},
cB:function cB(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dO:function dO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dP:function dP(a,b,c){this.a=a
this.b=b
this.c=c},
dQ:function dQ(a){this.a=a},
dR:function dR(a){this.a=a},
dN:function dN(){},
dM:function dM(a){this.a=a},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(a,b,c){this.a=a
this.b=b
this.c=c},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dC:function dC(){},
dD:function dD(){},
dJ:function dJ(a){this.a=a},
dK:function dK(a){this.a=a},
dL:function dL(a){this.a=a},
hJ(a){return v.mangledGlobalNames[a]},
kh(a){throw A.A(A.fP(a),new Error())},
ai(){throw A.A(A.ii(""),new Error())},
eY(){throw A.A(A.ih(""),new Error())},
ki(){throw A.A(A.fP(""),new Error())},
fL(a,b,c,d,e,f){var s
if(d==null)return a[b](c)
else{s=a[b](c,d)
return s}},
f6(a,b,c,d,e){return e.a(A.fL(a,b,c,d,null,null))}},B={}
var w=[A,J,B]
var $={}
A.f7.prototype={}
J.ci.prototype={
O(a,b){return a===b},
gv(a){return A.bA(a)},
i(a){return"Instance of '"+A.cC(a)+"'"},
gA(a){return A.aM(A.fn(this))}}
J.cl.prototype={
i(a){return String(a)},
gv(a){return a?519018:218159},
gA(a){return A.aM(t.y)},
$ip:1,
$it:1}
J.bk.prototype={
O(a,b){return null==b},
i(a){return"null"},
gv(a){return 0},
$ip:1}
J.bn.prototype={$iu:1}
J.ap.prototype={
gv(a){return 0},
i(a){return String(a)}}
J.cA.prototype={}
J.aD.prototype={}
J.ao.prototype={
i(a){var s=a[$.hL()]
if(s==null)s=a[$.fA()]
if(s==null)return this.bo(a)
return"JavaScript function for "+J.ba(s)},
$iaA:1}
J.bm.prototype={
gv(a){return 0},
i(a){return String(a)}}
J.bo.prototype={
gv(a){return 0},
i(a){return String(a)}}
J.n.prototype={
p(a,b){A.L(a).c.a(b)
a.$flags&1&&A.c7(a,29)
a.push(b)},
cf(a,b){var s
a.$flags&1&&A.c7(a,"removeAt",1)
s=a.length
if(b>=s)throw A.c(A.fV(b,null))
return a.splice(b,1)[0]},
a8(a,b){var s
A.L(a).h("b<1>").a(b)
a.$flags&1&&A.c7(a,"addAll",2)
if(Array.isArray(b)){this.br(a,b)
return}for(s=J.al(b);s.k();)a.push(s.gl())},
br(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.c(A.K(a))
for(r=0;r<s;++r)a.push(b[r])},
aC(a){a.$flags&1&&A.c7(a,"clear","clear")
a.length=0},
U(a,b,c){var s=A.L(a)
return new A.a0(a,s.n(c).h("1(2)").a(b),s.h("@<1>").n(c).h("a0<1,2>"))},
ac(a,b){var s,r=A.du(a.length,"",t.N)
for(s=0;s<a.length;++s)this.t(r,s,A.m(a[s]))
return r.join(b)},
a0(a,b,c){var s,r,q,p=A.L(a)
p.h("t(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.K(a))}if(c!=null)return c.$0()
throw A.c(A.dn())},
B(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
ga_(a){if(a.length>0)return a[0]
throw A.c(A.dn())},
gc9(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.dn())},
a9(a,b){var s,r
A.L(a).h("t(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.K(a))}return!1},
c1(a,b){var s,r
A.L(a).h("t(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.K(a))}return!0},
af(a,b){var s,r,q,p,o,n=A.L(a)
n.h("a(1,1)?").a(b)
a.$flags&2&&A.c7(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.jg()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.cl()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.b5(b,2))
if(p>0)this.bM(a,p)},
aL(a){return this.af(a,null)},
bM(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
N(a,b){var s
for(s=0;s<a.length;++s)if(J.ak(a[s],b))return!0
return!1},
gu(a){return a.length===0},
gG(a){return a.length!==0},
i(a){return A.f5(a,"[","]")},
gq(a){return new J.ay(a,a.length,A.L(a).h("ay<1>"))},
gv(a){return A.bA(a)},
gj(a){return a.length},
m(a,b){if(!(b>=0&&b<a.length))throw A.c(A.eD(a,b))
return a[b]},
t(a,b,c){A.L(a).c.a(c)
a.$flags&2&&A.c7(a)
if(!(b>=0&&b<a.length))throw A.c(A.eD(a,b))
a[b]=c},
ca(a,b){var s,r
A.L(a).h("t(1)").a(b)
s=a.length-1
if(s<0)return-1
for(r=s;r>=0;--r){if(!(r<a.length))return A.d(a,r)
if(b.$1(a[r]))return r}return-1},
$ie:1,
$ib:1,
$il:1}
J.ck.prototype={
cg(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.cC(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.dp.prototype={}
J.ay.prototype={
gl(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.aP(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iy:1}
J.aS.prototype={
M(a,b){var s
A.hg(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gab(b)
if(this.gab(a)===s)return 0
if(this.gab(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gab(a){return a===0?1/a<0:a<0},
bY(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.bK(""+a+".ceil()"))},
c4(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.c(A.bK(""+a+".floor()"))},
C(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.bK(""+a+".round()"))},
I(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
aa(a,b,c){if(this.M(b,c)>0)throw A.c(A.jJ(b))
if(this.M(a,b)<0)return b
if(this.M(a,c)>0)return c
return a},
F(a,b){var s
if(b>20)throw A.c(A.bD(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gab(a))return"-"+s
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
P(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
L(a,b){return(a|0)===a?a/b|0:this.bV(a,b)},
bV(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.bK("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
b7(a,b){var s
if(a>0)s=this.bS(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bS(a,b){return b>31?0:a>>>b},
gA(a){return A.aM(t.o)},
$ia9:1,
$ii:1,
$iO:1}
J.bj.prototype={
gA(a){return A.aM(t.S)},
$ip:1,
$ia:1}
J.cm.prototype={
gA(a){return A.aM(t.i)},
$ip:1}
J.an.prototype={
bd(a,b){return new A.cY(b,a,0)},
c0(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aN(a,r-s)},
J(a,b,c){return a.substring(b,A.ip(b,c,a.length))},
aN(a,b){return this.J(a,b,null)},
bj(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.ie(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.ig(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
M(a,b){var s
A.q(b)
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
gA(a){return A.aM(t.N)},
gj(a){return a.length},
$ip:1,
$ia9:1,
$idB:1,
$ih:1}
A.aY.prototype={
gq(a){return new A.bb(J.al(this.gT()),A.z(this).h("bb<1,2>"))},
gj(a){return J.ax(this.gT())},
gu(a){return J.fD(this.gT())},
gG(a){return J.hZ(this.gT())},
B(a,b){return A.z(this).y[1].a(J.d5(this.gT(),b))},
i(a){return J.ba(this.gT())}}
A.bb.prototype={
k(){return this.a.k()},
gl(){return this.$ti.y[1].a(this.a.gl())},
$iy:1}
A.bM.prototype={
m(a,b){return this.$ti.y[1].a(J.R(this.a,b))},
$ie:1,
$il:1}
A.bc.prototype={
gT(){return this.a}}
A.aT.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.dS.prototype={}
A.e.prototype={}
A.P.prototype={
gq(a){var s=this
return new A.aC(s,s.gj(s),A.z(s).h("aC<P.E>"))},
gu(a){return this.gj(this)===0},
a9(a,b){var s,r,q=this
A.z(q).h("t(P.E)").a(b)
s=q.gj(q)
for(r=0;r<s;++r){if(b.$1(q.B(0,r)))return!0
if(s!==q.gj(q))throw A.c(A.K(q))}return!1},
ac(a,b){var s,r,q,p=this,o=p.gj(p)
if(b.length!==0){if(o===0)return""
s=A.m(p.B(0,0))
if(o!==p.gj(p))throw A.c(A.K(p))
for(r=s,q=1;q<o;++q){r=r+b+A.m(p.B(0,q))
if(o!==p.gj(p))throw A.c(A.K(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.m(p.B(0,q))
if(o!==p.gj(p))throw A.c(A.K(p))}return r.charCodeAt(0)==0?r:r}},
U(a,b,c){var s=A.z(this)
return new A.a0(this,s.n(c).h("1(P.E)").a(b),s.h("@<P.E>").n(c).h("a0<1,2>"))}}
A.bI.prototype={
gbA(){var s=J.ax(this.a)
return s},
gbT(){var s=J.ax(this.a),r=this.b
if(r>s)return s
return r},
gj(a){var s=J.ax(this.a),r=this.b
if(r>=s)return 0
return s-r},
B(a,b){var s=this,r=s.gbT()+b
if(b<0||r>=s.gbA())throw A.c(A.dj(b,s.gj(0),s,"index"))
return J.d5(s.a,r)}}
A.aC.prototype={
gl(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.c6(q),o=p.gj(q)
if(r.b!==o)throw A.c(A.K(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.B(q,s);++r.c
return!0},
$iy:1}
A.ac.prototype={
gq(a){return new A.bu(J.al(this.a),this.b,A.z(this).h("bu<1,2>"))},
gj(a){return J.ax(this.a)},
gu(a){return J.fD(this.a)},
B(a,b){return this.b.$1(J.d5(this.a,b))}}
A.az.prototype={$ie:1}
A.bu.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gl())
return!0}s.a=null
return!1},
gl(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iy:1}
A.a0.prototype={
gj(a){return J.ax(this.a)},
B(a,b){return this.b.$1(J.d5(this.a,b))}}
A.ag.prototype={
gq(a){return new A.aE(J.al(this.a),this.b,this.$ti.h("aE<1>"))},
U(a,b,c){var s=this.$ti
return new A.ac(this,s.n(c).h("1(2)").a(b),s.h("@<1>").n(c).h("ac<1,2>"))}}
A.aE.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gl()))return!0
return!1},
gl(){return this.a.gl()},
$iy:1}
A.M.prototype={}
A.c2.prototype={}
A.E.prototype={$r:"+(1,2)",$s:1}
A.X.prototype={$r:"+(1,2,3)",$s:2}
A.aR.prototype={
gu(a){return this.gj(this)===0},
i(a){return A.fd(this)},
$iT:1}
A.be.prototype={
gj(a){return this.b.length},
gaY(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
Z(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
m(a,b){if(!this.Z(b))return null
return this.b[this.a[b]]},
D(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gaY()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gE(){return new A.aF(this.gaY(),this.$ti.h("aF<1>"))},
gbk(){return new A.aF(this.b,this.$ti.h("aF<2>"))}}
A.aF.prototype={
gj(a){return this.a.length},
gu(a){return 0===this.a.length},
gG(a){return 0!==this.a.length},
gq(a){var s=this.a
return new A.aG(s,s.length,this.$ti.h("aG<1>"))}}
A.aG.prototype={
gl(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iy:1}
A.a7.prototype={
V(){var s=this,r=s.$map
if(r==null){r=new A.bp(s.$ti.h("bp<1,2>"))
A.hz(s.a,r)
s.$map=r}return r},
m(a,b){return this.V().m(0,b)},
D(a,b){this.$ti.h("~(1,2)").a(b)
this.V().D(0,b)},
gE(){var s=this.V()
return new A.ab(s,A.z(s).h("ab<1>"))},
gbk(){var s=this.V()
return new A.bt(s,A.z(s).h("bt<2>"))},
gj(a){return this.V().a}}
A.bd.prototype={
p(a,b){A.z(this).c.a(b)
A.i8()}}
A.bf.prototype={
gj(a){return this.b},
gu(a){return this.b===0},
gG(a){return this.b!==0},
gq(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.aG(s,s.length,r.$ti.h("aG<1>"))},
N(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.bF.prototype={}
A.dY.prototype={
H(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.bz.prototype={
i(a){return"Null check operator used on a null value"}}
A.cn.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.cL.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.dA.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bg.prototype={}
A.bX.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iar:1}
A.am.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.hK(r==null?"unknown":r)+"'"},
$iaA:1,
gck(){return this},
$C:"$1",
$R:1,
$D:null}
A.ca.prototype={$C:"$0",$R:0}
A.cb.prototype={$C:"$2",$R:2}
A.cI.prototype={}
A.cG.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.hK(s)+"'"}}
A.aQ.prototype={
O(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aQ))return!1
return this.$_target===b.$_target&&this.a===b.a},
gv(a){return(A.d4(this.a)^A.bA(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cC(this.a)+"'")}}
A.cE.prototype={
i(a){return"RuntimeError: "+this.a}}
A.aa.prototype={
gj(a){return this.a},
gu(a){return this.a===0},
gE(){return new A.ab(this,A.z(this).h("ab<1>"))},
Z(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
m(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.c7(b)},
c7(a){var s,r,q=this.d
if(q==null)return null
s=this.bG(q,a)
r=this.aI(s,a)
if(r<0)return null
return s[r].b},
t(a,b,c){var s,r,q,p,o,n,m=this,l=A.z(m)
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.aO(s==null?m.b=m.aq():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aO(r==null?m.c=m.aq():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aq()
p=m.aH(b)
o=q[p]
if(o==null)q[p]=[m.ar(b,c)]
else{n=m.aI(o,b)
if(n>=0)o[n].b=c
else o.push(m.ar(b,c))}}},
cc(a,b){var s,r,q=this,p=A.z(q)
p.c.a(a)
p.h("2()").a(b)
if(q.Z(a)){s=q.m(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.t(0,a,r)
return r},
D(a,b){var s,r,q=this
A.z(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.K(q))
s=s.c}},
aO(a,b,c){var s,r=A.z(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.ar(b,c)
else s.b=c},
ar(a,b){var s=this,r=A.z(s),q=new A.dt(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
aH(a){return J.a_(a)&1073741823},
bG(a,b){return a[this.aH(b)]},
aI(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ak(a[r].a,b))return r
return-1},
i(a){return A.fd(this)},
aq(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$if9:1}
A.dt.prototype={}
A.ab.prototype={
gj(a){return this.a.a},
gu(a){return this.a.a===0},
gq(a){var s=this.a
return new A.br(s,s.r,s.e,this.$ti.h("br<1>"))}}
A.br.prototype={
gl(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.K(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iy:1}
A.bt.prototype={
gj(a){return this.a.a},
gu(a){return this.a.a===0},
gq(a){var s=this.a
return new A.bs(s,s.r,s.e,this.$ti.h("bs<1>"))}}
A.bs.prototype={
gl(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.K(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iy:1}
A.bp.prototype={
aH(a){return A.jN(a)&1073741823},
aI(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ak(a[r].a,b))return r
return-1}}
A.eI.prototype={
$1(a){return this.a(a)},
$S:10}
A.eJ.prototype={
$2(a,b){return this.a(a,b)},
$S:27}
A.eK.prototype={
$1(a){return this.a(A.q(a))},
$S:37}
A.a8.prototype={
i(a){return this.ba(!1)},
ba(a){var s,r,q,p,o,n=this.bD(),m=this.ao(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.fT(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bD(){var s,r=this.$s
while($.ep.length<=r)B.a.p($.ep,null)
s=$.ep[r]
if(s==null){s=this.bv()
B.a.t($.ep,r,s)}return s},
bv(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.j(new Array(l),t.G)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.t(k,q,r[s])}}return A.fc(k,t.K)}}
A.b_.prototype={
ao(){return[this.a,this.b]},
O(a,b){if(b==null)return!1
return b instanceof A.b_&&this.$s===b.$s&&J.ak(this.a,b.a)&&J.ak(this.b,b.b)},
gv(a){return A.fR(this.$s,this.a,this.b,B.r)}}
A.b0.prototype={
ao(){return[this.a,this.b,this.c]},
O(a,b){var s=this
if(b==null)return!1
return b instanceof A.b0&&s.$s===b.$s&&J.ak(s.a,b.a)&&J.ak(s.b,b.b)&&J.ak(s.c,b.c)},
gv(a){var s=this
return A.fR(s.$s,s.a,s.b,s.c)}}
A.bl.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
gaZ(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.fN(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
c3(a){var s=this.b.exec(a)
if(s==null)return null
return new A.bR(s)},
bd(a,b){return new A.cM(this,b,0)},
bC(a,b){var s,r=this.gaZ()
if(r==null)r=A.b1(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.bR(s)},
$idB:1,
$iiq:1}
A.bR.prototype={
gaM(){return this.b.index},
gaG(){var s=this.b
return s.index+s[0].length},
$iaU:1,
$ibE:1}
A.cM.prototype={
gq(a){return new A.cN(this.a,this.b,this.c)}}
A.cN.prototype={
gl(){var s=this.d
return s==null?t.cz.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.bC(l,s)
if(p!=null){m.d=p
o=p.gaG()
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
A.cH.prototype={
gaG(){return this.a+this.c.length},
$iaU:1,
gaM(){return this.a}}
A.cY.prototype={
gq(a){return new A.cZ(this.a,this.b,this.c)}}
A.cZ.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.cH(s,o)
q.c=r===q.c?r+1:r
return!0},
gl(){var s=this.d
s.toString
return s},
$iy:1}
A.aV.prototype={
gA(a){return B.b5},
$ip:1,
$if2:1}
A.bx.prototype={}
A.cq.prototype={
gA(a){return B.b6},
$ip:1,
$if3:1}
A.aW.prototype={
gj(a){return a.length},
$iS:1}
A.bv.prototype={
m(a,b){A.aK(b,a,a.length)
return a[b]},
$ie:1,
$ib:1,
$il:1}
A.bw.prototype={$ie:1,$ib:1,$il:1}
A.cr.prototype={
gA(a){return B.b7},
$ip:1,
$ida:1}
A.cs.prototype={
gA(a){return B.b8},
$ip:1,
$idb:1}
A.ct.prototype={
gA(a){return B.b9},
m(a,b){A.aK(b,a,a.length)
return a[b]},
$ip:1,
$idk:1}
A.cu.prototype={
gA(a){return B.ba},
m(a,b){A.aK(b,a,a.length)
return a[b]},
$ip:1,
$idl:1}
A.cv.prototype={
gA(a){return B.bb},
m(a,b){A.aK(b,a,a.length)
return a[b]},
$ip:1,
$idm:1}
A.cw.prototype={
gA(a){return B.bd},
m(a,b){A.aK(b,a,a.length)
return a[b]},
$ip:1,
$ie_:1}
A.cx.prototype={
gA(a){return B.be},
m(a,b){A.aK(b,a,a.length)
return a[b]},
$ip:1,
$ie0:1}
A.by.prototype={
gA(a){return B.bf},
gj(a){return a.length},
m(a,b){A.aK(b,a,a.length)
return a[b]},
$ip:1,
$ie1:1}
A.cy.prototype={
gA(a){return B.bg},
gj(a){return a.length},
m(a,b){A.aK(b,a,a.length)
return a[b]},
$ip:1,
$ie2:1}
A.bS.prototype={}
A.bT.prototype={}
A.bU.prototype={}
A.bV.prototype={}
A.a2.prototype={
h(a){return A.c1(v.typeUniverse,this,a)},
n(a){return A.hd(v.typeUniverse,this,a)}}
A.cS.prototype={}
A.d0.prototype={
i(a){return A.U(this.a,null)}}
A.cR.prototype={
i(a){return this.a}}
A.bY.prototype={$iae:1}
A.e6.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:5}
A.e5.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:36}
A.e7.prototype={
$0(){this.a.$0()},
$S:6}
A.e8.prototype={
$0(){this.a.$0()},
$S:6}
A.eq.prototype={
bp(a,b){if(self.setTimeout!=null)self.setTimeout(A.b5(new A.er(this,b),0),a)
else throw A.c(A.bK("`setTimeout()` not found."))}}
A.er.prototype={
$0(){this.b.$0()},
$S:0}
A.cO.prototype={
aD(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.aP(a)
else{s=r.a
if(q.h("aB<1>").b(a))s.aQ(a)
else s.aU(a)}},
aE(a,b){var s
if(b==null)b=A.d7(a)
s=this.a
if(this.b)s.ak(new A.W(a,b))
else s.ag(new A.W(a,b))}}
A.ev.prototype={
$1(a){return this.a.$2(0,a)},
$S:2}
A.ew.prototype={
$2(a,b){this.a.$2(1,new A.bg(a,t.l.a(b)))},
$S:25}
A.eC.prototype={
$2(a,b){this.a(A.Z(a),b)},
$S:16}
A.W.prototype={
i(a){return A.m(this.a)},
$iw:1,
ga2(){return this.b}}
A.cQ.prototype={
aE(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.fY("Future already completed"))
s.ag(A.jf(a,b))},
be(a){return this.aE(a,null)}}
A.bL.prototype={
aD(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.fY("Future already completed"))
s.aP(r.h("1/").a(a))}}
A.ah.prototype={
cb(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.aw(s,t.al.a(this.d),a.a,t.y,t.K)},
c6(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.bN(l,q,m,a.b,o,n,t.l)
else p=l.aw(l,t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.aj(s))){if((r.c&1)!==0)throw A.c(A.d6("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.d6("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.D.prototype={
bi(a,b,c){var s,r,q,p=this.$ti
p.n(c).h("1/(2)").a(a)
s=$.x
if(s===B.h){if(b!=null&&!t.Q.b(b)&&!t.v.b(b))throw A.c(A.fE(b,"onError",u.c))}else{r=p.c
a=s.b4(s,c.h("@<0/>").n(r).h("1(2)").a(a),c.h("0/"),r)
if(b!=null)b=A.hq(b,s)}q=new A.D(s,c.h("D<0>"))
r=b==null?1:3
this.a3(new A.ah(q,r,a,b,p.h("@<1>").n(c).h("ah<1,2>")))
return q},
b9(a,b,c){var s,r=this.$ti
r.n(c).h("1/(2)").a(a)
s=new A.D($.x,c.h("D<0>"))
this.a3(new A.ah(s,19,a,b,r.h("@<1>").n(c).h("ah<1,2>")))
return s},
bP(a){this.a=this.a&1|16
this.c=a},
a4(a){this.a=a.a&30|this.a&1
this.c=a.c},
a3(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.a3(a)
return}r.a4(s)}q=r.b
q.W(q,new A.eb(r,a))}},
b1(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.b1(a)
return}m.a4(n)}l.a=m.a7(a)
s=m.b
s.W(s,new A.ef(l,m))}},
a6(){var s=t.F.a(this.c)
this.c=null
return this.a7(s)},
a7(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aU(a){var s,r=this
r.$ti.c.a(a)
s=r.a6()
r.a=8
r.c=a
A.aZ(r,s)},
bu(a){var s=this.a6()
this.a4(a)
A.aZ(this,s)},
ak(a){var s=this.a6()
this.bP(a)
A.aZ(this,s)},
aP(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("aB<1>").b(a)){this.aQ(a)
return}this.bt(a)},
bt(a){var s,r=this
r.$ti.c.a(a)
r.a^=2
s=r.b
s.W(s,new A.ed(r,a))},
aQ(a){A.fh(this.$ti.h("aB<1>").a(a),this,!1)
return},
ag(a){var s
this.a^=2
s=this.b
s.W(s,new A.ec(this,a))},
$iaB:1}
A.eb.prototype={
$0(){A.aZ(this.a,this.b)},
$S:0}
A.ef.prototype={
$0(){A.aZ(this.b,this.a.a)},
$S:0}
A.ee.prototype={
$0(){A.fh(this.a.a,this.b,!0)},
$S:0}
A.ed.prototype={
$0(){this.a.aU(this.b)},
$S:0}
A.ec.prototype={
$0(){this.a.ak(this.b)},
$S:0}
A.ei.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.b6(p,t.fO.a(q.d),t.z)}catch(o){s=A.aj(o)
r=A.b6(o)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
p=r
if(p==null)p=A.d7(q)
n=k.a
n.c=new A.W(q,p)
q=n}q.b=!0
return}if(j instanceof A.D&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.D){m=k.b.a
l=new A.D(m.b,m.$ti)
j.bi(new A.ej(l,m),new A.ek(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.ej.prototype={
$1(a){this.a.bu(this.b)},
$S:5}
A.ek.prototype={
$2(a,b){A.b1(a)
t.l.a(b)
this.a.ak(new A.W(a,b))},
$S:13}
A.eh.prototype={
$0(){var s,r,q,p,o,n,m,l,k
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
l=p.b.b
q.c=l.aw(l,o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(k){s=A.aj(k)
r=A.b6(k)
q=s
p=r
if(p==null)p=A.d7(q)
o=this.a
o.c=new A.W(q,p)
o.b=!0}},
$S:0}
A.eg.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.cb(s)&&p.a.e!=null){p.c=p.a.c6(s)
p.b=!1}}catch(o){r=A.aj(o)
q=A.b6(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.d7(p)
m=l.b
m.c=new A.W(p,n)
p=m}p.b=!0}},
$S:0}
A.cP.prototype={}
A.cX.prototype={}
A.e3.prototype={
bX(a,b){return new A.e4(this,this.bK(this,b.h("0()").a(a),b),b)},
aX(a,b,c){var s,r,q,p,o,n,m,l
t.l.a(c)
s=null
if(s==null){A.jy(b,c)
return}r=s.gaK()
q=r.gcm()
p=$.x
try{$.x=q
s.c5(r,r.gau(),a,b,c)
$.x=p}catch(m){o=A.aj(m)
n=A.b6(m)
$.x=p
l=b===o?c:n
q.aX(r,o,l)}},
b6(a,b,c){var s,r,q
c.h("0()").a(b)
r=$.x
if(r===a)return b.$0()
s=r
$.x=a
try{r=b.$0()
return r}finally{$.x=s}q=null.gaK()
return null.cn(q,q.gau(),a,b)},
aw(a,b,c,d,e){var s,r,q
d.h("@<0>").n(e).h("1(2)").a(b)
e.a(c)
r=$.x
if(r===a)return b.$1(c)
s=r
$.x=a
try{r=b.$1(c)
return r}finally{$.x=s}q=null.gaK()
return null.c5(q,q.gau(),a,b,c)},
bN(a,b,c,d,e,f,g){var s,r,q
e.h("@<0>").n(f).n(g).h("1(2,3)").a(b)
f.a(c)
g.a(d)
r=$.x
if(r===a)return b.$2(c,d)
s=r
$.x=a
try{r=b.$2(c,d)
return r}finally{$.x=s}q=null.gaK()
return null.co(q,q.gau(),a,b,c,d)},
bK(a,b,c){c.h("0()").a(b)
return b},
b4(a,b,c,d){c.h("@<0>").n(d).h("1(2)").a(b)
return b},
b3(a,b,c,d,e){c.h("@<0>").n(d).n(e).h("1(2,3)").a(b)
return b},
bB(a,b,c){return null},
W(a,b){A.jz(a,t.M.a(b))
return}}
A.e4.prototype={
$0(){var s=this.a
return s.b6(s,this.b,this.c)},
$S(){return this.c.h("0()")}}
A.eA.prototype={
$0(){A.ia(this.a,this.b)},
$S:0}
A.bN.prototype={
gj(a){return this.a},
gu(a){return this.a===0},
gE(){return new A.bO(this,this.$ti.h("bO<1>"))},
Z(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.bx(a)},
bx(a){var s=this.d
if(s==null)return!1
return this.K(this.aT(s,a),a)>=0},
m(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.h2(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.h2(q,b)
return r}else return this.bF(b)},
bF(a){var s,r,q=this.d
if(q==null)return null
s=this.aT(q,a)
r=this.K(s,a)
return r<0?null:s[r+1]},
t(a,b,c){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.y[1].a(c)
s=o.d
if(s==null)s=o.d=A.iA()
r=A.d4(b)&1073741823
q=s[r]
if(q==null){A.h3(s,r,[b,c]);++o.a
o.e=null}else{p=o.K(q,b)
if(p>=0)q[p+1]=c
else{q.push(b,c);++o.a
o.e=null}}},
D(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.aS()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.m(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.c(A.K(m))}},
aS(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.du(i.a,null,t.z)
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
aT(a,b){return a[A.d4(b)&1073741823]}}
A.bQ.prototype={
K(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.bO.prototype={
gj(a){return this.a.a},
gu(a){return this.a.a===0},
gG(a){return this.a.a!==0},
gq(a){var s=this.a
return new A.bP(s,s.aS(),this.$ti.h("bP<1>"))}}
A.bP.prototype={
gl(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.K(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iy:1}
A.aH.prototype={
gq(a){var s=this,r=new A.aI(s,s.r,s.$ti.h("aI<1>"))
r.c=s.e
return r},
gj(a){return this.a},
gu(a){return this.a===0},
gG(a){return this.a!==0},
N(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else{r=this.bw(b)
return r}},
bw(a){var s=this.d
if(s==null)return!1
return this.K(s[J.a_(a)&1073741823],a)>=0},
p(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aR(s==null?q.b=A.fi():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aR(r==null?q.c=A.fi():r,b)}else return q.bq(b)},
bq(a){var s,r,q,p=this
p.$ti.c.a(a)
s=p.d
if(s==null)s=p.d=A.fi()
r=J.a_(a)&1073741823
q=s[r]
if(q==null)s[r]=[p.aj(a)]
else{if(p.K(q,a)>=0)return!1
q.push(p.aj(a))}return!0},
ce(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.b5(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.b5(s.c,b)
else return s.bL(b)},
bL(a){var s,r,q,p,o=this.d
if(o==null)return!1
s=J.a_(a)&1073741823
r=o[s]
q=this.K(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.bc(p)
return!0},
aR(a,b){this.$ti.c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.aj(b)
return!0},
b5(a,b){var s
if(a==null)return!1
s=t.g.a(a[b])
if(s==null)return!1
this.bc(s)
delete a[b]
return!0},
ap(){this.r=this.r+1&1073741823},
aj(a){var s,r=this,q=new A.cV(r.$ti.c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.ap()
return q},
bc(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.ap()},
K(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ak(a[r].a,b))return r
return-1},
$ifQ:1}
A.cV.prototype={}
A.aI.prototype={
gl(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.K(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$iy:1}
A.o.prototype={
gq(a){return new A.aC(a,this.gj(a),A.b7(a).h("aC<o.E>"))},
B(a,b){return this.m(a,b)},
gu(a){return this.gj(a)===0},
gG(a){return!this.gu(a)},
U(a,b,c){var s=A.b7(a)
return new A.a0(a,s.n(c).h("1(o.E)").a(b),s.h("@<o.E>").n(c).h("a0<1,2>"))},
i(a){return A.f5(a,"[","]")}}
A.C.prototype={
D(a,b){var s,r,q,p=A.z(this)
p.h("~(C.K,C.V)").a(b)
for(s=this.gE(),s=s.gq(s),p=p.h("C.V");s.k();){r=s.gl()
q=this.m(0,r)
b.$2(r,q==null?p.a(q):q)}},
gj(a){var s=this.gE()
return s.gj(s)},
gu(a){var s=this.gE()
return s.gu(s)},
i(a){return A.fd(this)},
$iT:1}
A.dx.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:11}
A.aq.prototype={
gu(a){return this.gj(this)===0},
gG(a){return this.gj(this)!==0},
a8(a,b){var s,r,q
A.z(this).h("b<1>").a(b)
for(s=A.h4(b,b.r,b.$ti.c),r=s.$ti.c;s.k();){q=s.d
this.p(0,q==null?r.a(q):q)}},
U(a,b,c){var s=A.z(this)
return new A.az(this,s.n(c).h("1(2)").a(b),s.h("@<1>").n(c).h("az<1,2>"))},
i(a){return A.f5(this,"{","}")},
B(a,b){var s,r
A.fe(b,"index")
s=this.gq(this)
for(r=b;s.k();){if(r===0)return s.gl();--r}throw A.c(A.dj(b,b-r,this,"index"))},
$ie:1,
$ib:1,
$icF:1}
A.bW.prototype={}
A.cT.prototype={
m(a,b){var s,r=this.b
if(r==null)return this.c.m(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.bH(b):s}},
gj(a){return this.b==null?this.c.a:this.a5().length},
gu(a){return this.gj(0)===0},
gE(){if(this.b==null){var s=this.c
return new A.ab(s,A.z(s).h("ab<1>"))}return new A.cU(this)},
D(a,b){var s,r,q,p,o=this
t.cA.a(b)
if(o.b==null)return o.c.D(0,b)
s=o.a5()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.ey(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.K(o))}},
a5(){var s=t.bM.a(this.c)
if(s==null)s=this.c=A.j(Object.keys(this.a),t.s)
return s},
bH(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.ey(this.a[a])
return this.b[a]=s}}
A.cU.prototype={
gj(a){return this.a.gj(0)},
B(a,b){var s=this.a
if(s.b==null)s=s.gE().B(0,b)
else{s=s.a5()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gq(a){var s=this.a
if(s.b==null){s=s.gE()
s=s.gq(s)}else{s=s.a5()
s=new J.ay(s,s.length,A.L(s).h("ay<1>"))}return s}}
A.cc.prototype={}
A.ce.prototype={}
A.bq.prototype={
i(a){var s=A.cf(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.co.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.dq.prototype={
bf(a,b){var s=A.jv(a,this.gbZ().a)
return s},
bh(a,b){var s=A.iC(a,this.gc_().b,null)
return s},
gc_(){return B.a3},
gbZ(){return B.a2}}
A.ds.prototype={}
A.dr.prototype={}
A.en.prototype={
bn(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.d.J(a,r,q)
r=q+1
o=A.J(92)
s.a+=o
o=A.J(117)
s.a+=o
o=A.J(100)
s.a+=o
o=p>>>8&15
o=A.J(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.J(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.J(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.d.J(a,r,q)
r=q+1
o=A.J(92)
s.a+=o
switch(p){case 8:o=A.J(98)
s.a+=o
break
case 9:o=A.J(116)
s.a+=o
break
case 10:o=A.J(110)
s.a+=o
break
case 12:o=A.J(102)
s.a+=o
break
case 13:o=A.J(114)
s.a+=o
break
default:o=A.J(117)
s.a+=o
o=A.J(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.J(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.J(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.d.J(a,r,q)
r=q+1
o=A.J(92)
s.a+=o
o=A.J(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.d.J(a,r,m)},
ai(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.co(a,null))}B.a.p(s,a)},
ae(a){var s,r,q,p,o=this
if(o.bm(a))return
o.ai(a)
try{s=o.b.$1(a)
if(!o.bm(s)){q=A.fO(a,null,o.gb_())
throw A.c(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.aj(p)
q=A.fO(a,r,o.gb_())
throw A.c(q)}},
bm(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.i(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.bn(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.ai(a)
q.ci(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.ai(a)
r=q.cj(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
ci(a){var s,r,q=this.c
q.a+="["
s=J.c6(a)
if(s.gG(a)){this.ae(s.m(a,0))
for(r=1;r<s.gj(a);++r){q.a+=","
this.ae(s.m(a,r))}}q.a+="]"},
cj(a){var s,r,q,p,o,n,m=this,l={}
if(a.gu(a)){m.c.a+="{}"
return!0}s=a.gj(a)*2
r=A.du(s,null,t.X)
q=l.a=0
l.b=!0
a.D(0,new A.eo(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.bn(A.q(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.ae(r[n])}p.a+="}"
return!0}}
A.eo.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.t(s,r.a++,a)
B.a.t(s,r.a++,b)},
$S:11}
A.em.prototype={
gb_(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.e9.prototype={
i(a){return this.al()}}
A.w.prototype={
ga2(){return A.io(this)}}
A.c8.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cf(s)
return"Assertion failed"}}
A.ae.prototype={}
A.a6.prototype={
gan(){return"Invalid argument"+(!this.a?"(s)":"")},
gam(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gan()+q+o
if(!s.a)return n
return n+s.gam()+": "+A.cf(s.gaJ())},
gaJ(){return this.b}}
A.bC.prototype={
gaJ(){return A.hh(this.b)},
gan(){return"RangeError"},
gam(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.ch.prototype={
gaJ(){return A.Z(this.b)},
gan(){return"RangeError"},
gam(){if(A.Z(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.bJ.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.cK.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bH.prototype={
i(a){return"Bad state: "+this.a}}
A.cd.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cf(s)+"."}}
A.bG.prototype={
i(a){return"Stack Overflow"},
ga2(){return null},
$iw:1}
A.ea.prototype={
i(a){return"Exception: "+this.a}}
A.bi.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.d.J(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.b.prototype={
U(a,b,c){var s=A.z(this)
return A.im(this,s.n(c).h("1(b.E)").a(b),s.h("b.E"),c)},
cd(a,b){var s,r
A.z(this).h("b.E(b.E,b.E)").a(b)
s=this.gq(this)
if(!s.k())throw A.c(A.dn())
r=s.gl()
while(s.k())r=b.$2(r,s.gl())
return r},
gj(a){var s,r=this.gq(this)
for(s=0;r.k();)++s
return s},
gu(a){return!this.gq(this).k()},
gG(a){return!this.gu(this)},
B(a,b){var s,r
A.fe(b,"index")
s=this.gq(this)
for(r=b;s.k();){if(r===0)return s.gl();--r}throw A.c(A.dj(b,b-r,this,"index"))},
i(a){return A.ic(this,"(",")")}}
A.I.prototype={
gv(a){return A.f.prototype.gv.call(this,0)},
i(a){return"null"}}
A.f.prototype={$if:1,
O(a,b){return this===b},
gv(a){return A.bA(this)},
i(a){return"Instance of '"+A.cC(this)+"'"},
gA(a){return A.jY(this)},
toString(){return this.i(this)}}
A.d_.prototype={
i(a){return""},
$iar:1}
A.aX.prototype={
gj(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iiu:1}
A.dz.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.eM.prototype={
$1(a){var s,r,q,p
if(A.hp(a))return a
s=this.a
if(s.Z(a))return s.m(0,a)
if(t.f.b(a)){r={}
s.t(0,a,r)
for(s=a.gE(),s=s.gq(s);s.k();){q=s.gl()
r[q]=this.$1(a.m(0,q))}return r}else if(t.R.b(a)){p=[]
s.t(0,a,p)
B.a.a8(p,J.i0(a,this,t.z))
return p}else return a},
$S:12}
A.eR.prototype={
$1(a){return this.a.aD(this.b.h("0/?").a(a))},
$S:2}
A.eS.prototype={
$1(a){if(a==null)return this.a.be(new A.dz(a===undefined))
return this.a.be(a)},
$S:2}
A.dy.prototype={
gaF(){var s,r=this.b,q=Math.abs(r)
if(q<=2){r=this.a
return B.j[B.c.P(r,12)]+(B.c.L(r,12)-1)+" in tune"}s=r>0?"+":"\u2212"
r=this.a
return B.j[B.c.P(r,12)]+(B.c.L(r,12)-1)+" "+s+q+"\xa2"}}
A.di.prototype={
c2(a,b,c){var s,r,q=this,p=q.e
if(p==null){if(b>q.a&&b>q.f*3){q.e=c
B.a.aC(q.r)}else q.f=q.f*0.9+b*0.1
return null}s=c-p
if(s>=40&&s<=300&&a!=null)B.a.p(q.r,a)
if(!(s>300))r=s>40&&b<q.a/4
else r=!0
if(r){q.e=null
q.f=b
r=q.r
if(r.length<3)return null
return A.hD(r)}return null}}
A.dv.prototype={
gad(){var s,r,q,p,o=A.j([],t.u)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p)o.push(1200*(Math.log(s[p]/q)/0.6931471805599453))
return o},
gc8(a){return this.a.length>=2&&B.a.c1(this.gad(),new A.dw())},
gbl(){var s,r,q,p,o
if(this.a.length<2)return null
s=this.gad()
for(r=s.length,q=0,p=1;p<r;++p){o=s[p]
if(!(q>=0&&q<r))return A.d(s,q)
if(Math.abs(o)>Math.abs(s[q]))q=p}if(!(q>=0&&q<r))return A.d(s,q)
return Math.abs(s[q])>20?q:null}}
A.dw.prototype={
$1(a){return Math.abs(A.c3(a))<=20},
$S:1}
A.eZ.prototype={
$1(a){return A.q(a).length!==0},
$S:14}
A.ex.prototype={
$1(a){var s,r,q
A.q(a)
s=A.fW("[A-Za-z]").c3(a)
if(s==null)return a
r=s.b.index
q=B.d.J(a,0,r)
if(!(r>=0&&r<a.length))return A.d(a,r)
return q+a[r].toUpperCase()+B.d.aN(a,r+1)},
$S:15}
A.N.prototype={}
A.B.prototype={
al(){return"DrumType."+this.b}}
A.d8.prototype={
$1(a){return t.O.a(a).b===this.a},
$S:9}
A.d9.prototype={
$0(){return B.e},
$S:17}
A.cz.prototype={}
A.eT.prototype={
$2(a,b){var s
A.Z(a)
A.Z(b)
s=this.a
return Math.abs(a-s)<=Math.abs(b-s)?a:b},
$S:18}
A.bh.prototype={
al(){return"Family."+this.b}}
A.G.prototype={}
A.eO.prototype={
$1(a){return t.w.a(a).a===this.a},
$S:19}
A.eP.prototype={
$0(){return B.a.ga_(B.t)},
$S:20}
A.H.prototype={}
A.eG.prototype={
$1(a){return t.x.a(a).a===this.a},
$S:21}
A.eH.prototype={
$0(){return B.a.ga_(this.a)},
$S:22}
A.a1.prototype={}
A.eV.prototype={
$1(a){return t.ec.a(a).a===this.a},
$S:23}
A.eW.prototype={
$0(){return B.a.ga_(B.v)},
$S:24}
A.a3.prototype={
al(){return"Spacing."+this.b}}
A.dT.prototype={
$1(a){return t.dJ.a(a).b===this.a},
$S:39}
A.dU.prototype={
$0(){return B.k},
$S:26}
A.cj.prototype={}
A.ad.prototype={}
A.eB.prototype={
$2(a,b){var s=t.U
return B.c.M(s.a(a).b,s.a(b).b)},
$S:7}
A.eQ.prototype={
$1(a){return this.a.$0()},
$S:28}
A.eU.prototype={
$1(a){A.b1(a)
return null},
$S:29}
A.f0.prototype={
$0(){var s,r=A.eu(this.a.getAttribute("data-theme"))==="light",q=r?"Switch to dark theme":"Switch to light theme",p=this.b
p.setAttribute("aria-label",q)
p.setAttribute("title",q)
s=A.av(p.firstElementChild)
if(s!=null){p=r?"\u263e":"\u2600"
s.textContent=p}},
$S:0}
A.f_.prototype={
$0(){var s=this.a,r=A.eu(s.getAttribute("data-theme"))==="light"?"dark":"light"
s.setAttribute("data-theme",r)
A.fy("ds-theme",r)
this.b.$0()},
$S:0}
A.cg.prototype={
gbg(){return A.fm(this.ax)+" "+this.at.c.toLowerCase()},
a1(){var s,r,q,p,o,n,m,l=this,k="change",j=l.a,i=t.L,h=A.j([],i)
for(s=0;s<4;++s){r=B.w[s]
h.push(new A.E(r.b,r.c))}A.au(j,h)
h=l.d
q=A.j([],i)
for(s=0;s<11;++s){p=B.t[s]
q.push(new A.E(p.a,p.b))}A.au(h,q)
q=l.e
o=A.j([],i)
for(s=0;s<5;++s){n=B.C[s]
o.push(new A.E(n.a,n.b))}A.au(q,o)
o=l.r
i=A.j([],i)
for(s=0;s<3;++s){m=B.v[s]
i.push(new A.E(m.a,m.b))}A.au(o,i)
l.av()
A.Q(j,k,new A.df(l))
A.Q(l.b,k,new A.dg(l))
A.Q(l.c,k,new A.dh(l))
for(j=[h,q,l.f,o],i=j.length,h=l.gbW(),s=0;s<i;++s)A.Q(j[s],k,h)
l.Y()},
aW(){var s,r,q,p,o,n,m,l,k=this,j=k.b,i=t.L,h=A.j([],i)
for(s=k.at.d,r=s.length,q=0;q<r;++q){p=s[q]
o=""+p
h.push(new A.E(o,(p===B.c.I(p)?""+B.c.C(p)+'"':o+'"')+" diameter"))}A.au(j,h)
j.value=""+k.ax
j=k.c
h=A.j([],i)
for(s=k.at.f,r=s.length,q=0;q<r;++q){p=s[q]
o=A.m(p)
h.push(new A.E(o,(p===B.b.I(p)?""+B.b.C(p)+'"':o+'"')+" deep"))}A.au(j,h)
j.value=A.m(k.ay)
j=k.f
n=A.q(j.value)
i=A.j([],i)
for(q=0;q<5;++q){m=B.E[q]
h=m.a
if(h!=="port"||k.at===B.n)s=h!=="snare"||k.at===B.e
else s=!1
if(s)i.push(new A.E(h,m.b))}A.au(j,i)
l=k.at
A:{if(B.e===l){i="snare"
break A}i=!1
if(n.length!==0)if(n!=="snare")i=n!=="port"||l===B.n
if(i){i=n
break A}i="1x"
break A}j.value=i},
av(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.X,f=A.cp(g,g)
try{g=A.hC("ds-drum")
s=B.l.bf(g==null?"{}":g,h)
if(t.f.b(s))f=s}catch(r){if(!(A.aj(r) instanceof A.bi))throw r}g=J.R(f,"type")
i.at=A.fK(A.m(g==null?"snare":g))
q=J.R(f,"diameter")
i.ax=A.d2(q)&&B.a.N(i.at.d,q)?q:i.at.e
p=J.R(f,"depth")
i.ay=typeof p=="number"&&B.a.N(i.at.f,p)?p:i.at.r
i.a.value=i.at.b
i.aW()
o=new A.dc()
g=i.d
o.$2(g,J.R(f,"material"))
n=i.e
o.$2(n,J.R(f,"batter"))
m=i.f
o.$2(m,J.R(f,"reso"))
l=i.r
o.$2(l,J.R(f,"relation"))
for(g=[g,n,m,l],n=g.length,k=0;k<n;++k){j=g[k]
if(A.q(j.value).length===0)j.value=A.q(A.r(A.fL(A.r(j.options),"item",0,h,h,h)).value)}},
Y(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.b9(h.at,h.ax)
h.w.textContent=A.hI("Starting range for a "+h.gbg())
s=new A.de()
r=g.a
s.$2(h.x,r)
q=g.b
s.$2(h.y,Math.sqrt(r*q))
s.$2(h.z,q)
r=g.c
if(r!=null)r="No source we found lists this size, so this range is scaled from the "+A.fm(r)+" range (pitch goes roughly as one over the diameter). Treat it as a rough guide."
else{r=B.x.m(0,g.d)
r=r==null?null:r.a
r="Range from "+(r==null?"the sources below":r)+". A starting point: tune by ear from here."}h.Q.textContent=r
r=h.d
p=A.k9(A.q(r.value))
q=h.e
o=A.hB(B.C,A.q(q.value))
n=h.f
m=A.hB(B.E,A.q(n.value))
l=h.r
k=A.kd(A.q(l.value))
h.as.replaceChildren()
j=new A.dd(h)
j.$3("Shell: "+p.b,p.d,p.e)
j.$3("Depth: "+A.fm(h.ay),A.jR(h.at,h.ay),B.al)
j.$3("Batter head: "+o.b,o.c,o.d)
j.$3("Resonant head: "+m.b,m.c,m.d)
if(h.at===B.e)j.$3("Batter and snare side","On a snare, many drummers tune the snare-side head higher than the batter for a crisp wire response. Treat it as a starting point and adjust by ear.",B.ae)
else j.$3("Head relationship: "+k.b,k.c,k.d)
A.k("relation-row",t.m).hidden=h.at===B.e
A.fy("ds-drum",B.l.bh(A.fa(["type",h.at.b,"diameter",h.ax,"depth",h.ay,"material",A.q(r.value),"batter",A.q(q.value),"reso",A.q(n.value),"relation",A.q(l.value)],t.N,t.K),null))
for(r=h.ch,q=r.length,i=0;i<r.length;r.length===q||(0,A.aP)(r),++i)r[i].$0()}}
A.df.prototype={
$0(){var s=this.a,r=s.at=A.fK(A.q(s.a.value))
s.ax=r.e
s.ay=r.r
s.aW()
s.Y()},
$S:0}
A.dg.prototype={
$0(){var s=this.a,r=A.bB(A.q(s.b.value),null)
s.ax=r==null?s.at.e:r
s.Y()},
$S:0}
A.dh.prototype={
$0(){var s=this.a,r=B.d.bj(A.q(s.c.value)),q=A.bB(r,null)
if(q==null)q=A.cD(r)
s.ay=q==null?s.at.r:q
s.Y()},
$S:0}
A.dc.prototype={
$2(a,b){if(typeof b=="string"&&b.length!==0)a.value=b},
$S:30}
A.de.prototype={
$2(a,b){var s=A.fl(b),r=A.d3(b).a
r=s+" Hz \xb7 "+(B.j[B.c.P(r,12)]+(B.c.L(r,12)-1))
a.textContent=r
return r},
$S:31}
A.dd.prototype={
$3(a,b,c){var s,r,q=null
t.dy.a(c)
s=A.v("li","note-card",q)
s.appendChild(A.v("h3",q,A.hI(a)))
s.appendChild(A.v("p",q,b))
r=c.length===0?A.v("span",q,q):A.j4(c)
s.appendChild(r)
this.a.as.appendChild(s)},
$S:32}
A.cJ.prototype={
gaV(){var s,r=this,q=r.fx
if(q===$){s=A.hl(r.gby())
r.fx!==$&&A.ki()
r.fx=s
q=s}return q},
a1(){var s=this,r=v.G
if(A.av(A.r(r.navigator).mediaDevices)==null||!("AudioContext" in r)){r=t.m
A.k("tuner-body",r).hidden=!0
A.k("no-mic",r).hidden=!1
return}A.Q(s.b,"click",new A.dW(s))
A.Q(s.w,"input",s.gbI())
A.Q(A.k("lugs-clear",t.m),"click",new A.dX(s))
B.a.p(s.a.ch,s.gbR())
s.b2()
s.az()
s.aA()},
b2(){var s=A.bB(A.q(this.w.value),null),r=B.c.aa(s==null?6:s,1,10)
this.dx.a=0.08/(r*r/4+1)},
X(){var s=0,r=A.jt(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c
var $async$X=A.jI(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:o.S("Asking for the microphone\u2026")
q=3
h=t.N
h=A.k5(A.fa(["audio",A.fa(["echoCancellation",!1,"noiseSuppression",!1,"autoGainControl",!1],h,t.y)],h,t.a3))
h.toString
n=A.r(h)
h=v.G
s=6
return A.hi(A.fx(A.r(A.av(A.r(h.navigator).mediaDevices).getUserMedia(n)),t.m),$async$X)
case 6:m=b
l=A.r(new h.AudioContext())
s=7
return A.hi(A.fx(A.r(l.resume()),t.X),$async$X)
case 7:k=A.r(l.createMediaStreamSource(m))
g=A.r(l.createAnalyser())
g.fftSize=8192
g.smoothingTimeConstant=0
j=g
f=A.r(l.createAnalyser())
f.fftSize=1024
i=f
e=k
A.r(e.connect(j))
A.r(e.connect(i))
o.at=l
o.ax=m
o.ay=j
o.ch=i
e=B.c.L(A.Z(j.fftSize),2)
o.CW=new Float32Array(e)
e=A.Z(i.fftSize)
o.cx=new Float32Array(e)
o.db=!0
e=o.b
e.textContent="Stop tuner"
e.setAttribute("aria-pressed","true")
A.d1(A.r(e.classList).toggle("is-running",!0))
o.r.textContent="Listening: tap the drum"
o.S("Tuner on. Tap the drum lightly about an inch from a tension rod.")
o.cy=A.Z(h.requestAnimationFrame(o.gaV()))
q=1
s=5
break
case 3:q=2
c=p.pop()
o.S("The microphone isn\u2019t available. Check that this site is allowed to use it (usually the icon by the address bar), then try again.")
s=5
break
case 2:s=1
break
case 5:return A.j_(null,r)
case 1:return A.iZ(p.at(-1),r)}})
return A.j0($async$X,r)},
bU(){var s,r,q,p=this
p.db=!1
s=p.cy
if(s!=null)v.G.cancelAnimationFrame(s)
r=p.ax
if(r==null)q=null
else{r=t.a6.a(r.getTracks())
r=t.cl.b(r)?r:new A.bc(r,A.L(r).h("bc<1,u>"))
q=r}for(r=J.al(q==null?B.ad:q);r.k();)r.gl().stop()
r=p.at
if(r!=null)A.r(r.close())
p.ax=p.at=null
r=p.b
r.textContent="Start tuner"
r.setAttribute("aria-pressed","false")
A.d1(A.r(r.classList).toggle("is-running",!1))
p.r.textContent="Microphone off"
A.r(p.f.style).setProperty("--level","0")
p.S("Tuner off. The microphone is closed.")},
bz(a){var s,r,q,p,o,n,m,l,k,j=this
A.c3(a)
s=j.at
r=j.ay
q=j.ch
if(!j.db||s==null||r==null||q==null)return
p=j.cx
p===$&&A.ai()
q.getFloatTimeDomainData(p)
p=j.CW
p===$&&A.ai()
r.getFloatFrequencyData(p)
o=A.ke(j.cx)
A.r(j.f.style).setProperty("--level",B.b.F(B.b.aa(o*8,0,1),3))
p=j.CW
n=A.c3(s.sampleRate)
m=j.dx
l=m.c2(A.ka(p,A.Z(r.fftSize),1200,35,n),o,a)
p=m.e!=null?"Reading\u2026":"Listening: tap the drum"
j.r.textContent=p
if(l!=null){j.fr=l
k=A.d3(l)
j.c.textContent=B.b.F(l,1)+" Hz"
j.d.textContent=k.gaF()
p=j.e
p.hidden=!1
A.r(p.style).setProperty("--cents",""+k.b)
p=j.dy
B.a.p(p,l)
if(p.length>12)B.a.cf(p,0)
j.az()
j.aA()
p=B.b.F(l,1)
n=k.gaF()
n=A.eX(n,"\u266f"," sharp")
n=A.eX(n,"\xa2"," cents")
j.S(p+" hertz, "+A.eX(n,"\u2212","minus ")+".")}j.cy=A.Z(v.G.requestAnimationFrame(j.gaV()))},
az(){var s,r,q,p,o,n,m,l,k,j,i="span",h=this.x
h.replaceChildren()
s=this.dy
r=A.fc(s,t.i)
q=s.length===0?0:A.hD(s)
p=new A.dv(r,q)
o=p.gad()
for(n=0;r=s.length,n<r;n=j){if(!(n<o.length))return A.d(o,n)
m=B.b.C(o[n])
if(m>0)l="+"
else l=m<0?"\u2212":"\xb1"
k=A.v("li","lug",null)
j=n+1
k.appendChild(A.v(i,"lug-n","Lug "+j))
if(!(n<s.length))return A.d(s,n)
k.appendChild(A.v(i,"lug-hz",B.b.F(s[n],1)+" Hz"))
k.appendChild(A.v(i,"lug-off",s.length>1?l+Math.abs(m)+"\xa2":""))
if(p.gbl()===n)A.r(k.classList).add("is-worst")
h.appendChild(k)}A:{if(0===r){h="Tap near each tension rod in turn. Readings appear here so you can compare them."
break A}if(1===r){h="One reading. Tap the next lug."
break A}h=p.gc8(0)
if(h){h="Even: every lug is within 20\xa2 of the middle reading ("+B.b.F(q,1)+" Hz)."
break A}h=new A.dV(p).$0()
break A}this.y.textContent=h},
aA(){var s,r,q,p,o,n,m,l,k=this,j=k.a,i=A.b9(j.at,j.ax)
j=j.gbg()
s=i.a
r=A.fl(s)
q=i.b
p=A.fl(q)
o=A.d3(s).a
n=B.j[B.c.P(o,12)]
o=B.c.L(o,12)
m=A.d3(q).a
k.z.textContent="Target for your "+j+": about "+r+" to "+p+" Hz ("+(n+(o-1))+" to "+(B.j[B.c.P(m,12)]+(B.c.L(m,12)-1))+"). Hit the centre to compare."
l=k.fr
m=k.Q
o=l==null
m.hidden=o
if(!o){A.r(m.style).setProperty("--pos",B.b.F(B.b.aa(Math.log(l/s)/0.6931471805599453/(Math.log(q/s)/0.6931471805599453),-0.08,1.08),3))
m.setAttribute("title",B.b.F(l,1)+" Hz")}},
S(a){this.as.textContent=a
return a}}
A.dW.prototype={
$0(){var s=this.a
return s.db?s.bU():s.X()},
$S:0}
A.dX.prototype={
$0(){var s=this.a
B.a.aC(s.dy)
s.az()
s.S("Lug readings cleared.")},
$S:0}
A.dV.prototype={
$0(){var s,r,q=this.a,p=q.gbl()
p.toString
q=q.gad()
if(!(p<q.length))return A.d(q,p)
s=q[p]
q=B.b.C(Math.abs(s))
r=s>0?"sharp: loosen it slightly":"flat: tighten it slightly"
return"Lug "+(p+1)+" is "+q+"\xa2 "+r+", then tap it again."},
$S:34}
A.cW.prototype={}
A.cB.prototype={
a1(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null,a3="input",a4="chip-check",a5="change"
a1.av()
for(s=[B.f,B.o],r=s.length,q=a1.y,p=a1.a,o=0;o<r;++o){n=s[o]
for(m=n.d,l=m.length,k=n===B.f,j="plan-"+n.b+"-",i=0;i<l;++i){h=m[i]
g=""+h
f=j+g
e=A.v(a3,a2,a2)
e.setAttribute("type","checkbox")
e.setAttribute("id",f)
e.checked=q.N(0,new A.E(n,h))
d=A.v("label",a4,a2)
d.setAttribute("for",f)
d.appendChild(e)
g=h===B.c.I(h)?""+B.c.C(h)+'"':g+'"'
c=k?"rack":"floor"
d.appendChild(A.v("span",a2,g+" "+c))
p.appendChild(d)
A.Q(e,a5,new A.dO(a1,e,n,h))}}for(s=a1.b,o=0;o<3;++o){b=B.F[o]
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
A.Q(a,a5,new A.dP(a1,a,b))}s=a1.e
r=A.j([],t.L)
for(q=$.fC(),p=q.length,o=0;o<p;++o){a0=q[o]
r.push(new A.E(""+a0.a,a0.b))}A.au(s,r)
s.value=""+a1.Q
A.Q(s,a5,new A.dQ(a1))
s=a1.r
A.Q(s,a3,a1.gbJ())
A.Q(A.k("plan-suggest",t.m),"click",new A.dR(a1))
if(A.q(s.value).length===0)a1.b8()
a1.ah()},
gaB(){var s=A.fb(this.y,t.U)
B.a.af(s,new A.dN())
return s},
gbb(){var s=A.cD(A.q(this.r.value))
return s!=null&&s>=30&&s<=1000?s:null},
b8(){var s,r=this.gaB()
if(r.length===0)return
s=A.b9(B.a.ga_(r).a,B.a.ga_(r).b)
this.r.value=B.c.i(B.b.C(Math.sqrt(s.a*s.b)))},
bE(a){var s,r,q=this.ax,p=q.length
if(!(a<p))return A.d(q,a)
s=q[a]
r=a+1
if(!(r<p))return A.d(q,r)
r=q[r]
return s.a.b+"-"+s.b+">"+(r.a.b+"-"+r.b)},
bQ(a){var s,r,q,p,o,n,m,l,k=this,j=k.b0()
if(a===B.i&&j!=null)for(s=j.length,r=k.at,q=0;q<j.length;j.length===s||(0,A.aP)(j),++q){p=j[q]
r.t(0,p.a.b+"-"+p.b,A.jS(B.b.F(p.c,1)))}if(a===B.y&&k.z===B.k)for(s=k.ax,r=k.as,o=0;n=o+1,m=s.length,n<m;o=n){if(!(o<m))return A.d(s,o)
m=s[o]
l=s[n]
r.cc(m.a.b+"-"+m.b+">"+(l.a.b+"-"+l.b),new A.dM(k))}k.z=a
k.ah()},
ah(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null,a3="td",a4=a1.ax
B.a.aC(a4)
s=A.j([],t.A)
for(r=a1.gaB(),q=r.length,p=0;p<r.length;r.length===q||(0,A.aP)(r),++p){o=r[p]
s.push(new A.cW(o.a,o.b))}B.a.a8(a4,s)
s=a1.w
s.replaceChildren()
a1.c.textContent=a1.z.d
a1.d.hidden=a1.z!==B.k
a1.f.hidden=a1.z===B.i
for(r=a1.at,q=a1.as,o=t.L,n=0;n<a4.length;++n){m=a4[n]
l=m.a
k=m.b
j=k===B.c.I(k)?""+B.c.C(k)+'"':""+k+'"'
i=l===B.f?"rack":"floor"
h=j+" "+i
g=A.v("tr",a2,a2)
i=A.v("th",a2,h)
i.setAttribute("scope","row")
g.appendChild(i)
i=A.v(a3,a2,a2)
m.c!==$&&A.eY()
m.c=i
if(a1.z===B.i){f=A.v("input",a2,a2)
f.setAttribute("type","number")
f.setAttribute("min","30")
f.setAttribute("max","1000")
f.setAttribute("step","0.1")
f.setAttribute("inputmode","decimal")
f.setAttribute("aria-label","Pitch for the "+h+" tom, in hertz")
f.className="plan-hz"
j=r.m(0,l.b+"-"+k)
if(j==null){l=A.b9(l,k)
l=Math.sqrt(l.a*l.b)}else l=j
f.value=B.b.F(l,1)
A.Q(f,"input",new A.dE(a1,f,m))
m.r=f
i.appendChild(f)}l=A.v(a3,a2,a2)
m.d!==$&&A.eY()
m.d=l
k=A.v(a3,a2,a2)
m.e!==$&&A.eY()
m.e=k
if(a1.z===B.y&&n+1<a4.length){j=n+1
if(!(j<a4.length))return A.d(a4,j)
e=a4[j]
d=A.v("select",a2,a2)
c=e.b
c=c===B.c.I(c)?""+B.c.C(c)+'"':""+c+'"'
b=e.a===B.f?"rack":"floor"
d.setAttribute("aria-label","Interval from the "+h+" tom down to the "+(c+" "+b)+" tom")
b=A.j([],o)
for(c=$.fC(),a=c.length,p=0;p<a;++p){a0=c[p]
b.push(new A.E(""+a0.a,a0.b))}A.au(d,b)
c=a4.length
if(!(n<c))return A.d(a4,n)
b=a4[n]
if(!(j<c))return A.d(a4,j)
j=a4[j]
j=q.m(0,b.a.b+"-"+b.b+">"+(j.a.b+"-"+j.b))
d.value=""+(j==null?a1.Q:j)
A.Q(d,"change",new A.dF(a1,n,d))
m.w=d
k.appendChild(d)}j=A.v(a3,a2,a2)
m.f!==$&&A.eY()
m.f=j
g.appendChild(i)
g.appendChild(l)
g.appendChild(k)
g.appendChild(j)
s.appendChild(g)}a1.R()},
b0(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.gaB()
if(e.length===0)return f
switch(g.z.a){case 0:s=g.gbb()
if(s==null)r=f
else{r=g.Q
r=A.hF(e,s,A.du(Math.max(0,e.length-1),r,t.S))}return r
case 1:s=g.gbb()
if(s==null||g.ax.length!==e.length)return f
r=A.j([],t.t)
for(q=g.ax,p=g.as,o=0;n=o+1,m=q.length,n<m;o=n){if(!(o<m))return A.d(q,o)
m=q[o]
l=q[n]
l=p.m(0,m.a.b+"-"+m.b+">"+(l.a.b+"-"+l.b))
r.push(l==null?g.Q:l)}return A.hF(e,s,r)
case 2:r=A.j([],t.u)
for(q=g.ax,p=q.length,m=g.at,k=0;k<q.length;q.length===p||(0,A.aP)(q),++k){j=q[k]
l=j.a
i=j.b
h=m.m(0,l.b+"-"+i)
if(h==null){l=A.b9(l,i)
l=Math.sqrt(l.a*l.b)}else l=h
r.push(l)}if(B.a.a9(r,new A.dG()))return f
return A.kb(e,r)}},
R(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.bO()
s=e.b0()
if(s==null){for(r=e.ax,q=r.length,p=0;o=r.length,p<o;r.length===q||(0,A.aP)(r),++p){n=r[p]
if(n.r==null){o=n.c
o===$&&A.ai()
o.textContent="\u2013"}o=n.d
o===$&&A.ai()
o.textContent="\u2013"
if(n.w==null){o=n.e
o===$&&A.ai()
o.textContent=""}o=n.f
o===$&&A.ai()
o.textContent=""
o.className=""}if(o===0)r="Pick at least one tom."
else r=e.z===B.i?"Enter a pitch between 30 and 1000 Hz for every tom.":"Enter a pitch for your smallest tom, between 30 and 1000 Hz."
e.x.textContent=r
return}m=A.jV(s)
for(r=e.ax,l=0;l<s.length;++l){k=s[l]
if(!(l<r.length))return A.d(r,l)
n=r[l]
if(n.r==null){q=n.c
q===$&&A.ai()
o=k.c
q.textContent=(o<100?B.b.F(o,1):B.c.i(B.b.C(o)))+" Hz"}q=n.d
q===$&&A.ai()
o=k.c
q.textContent=A.d3(o).gaF()
if(n.w==null){q=n.e
q===$&&A.ai()
if(l<m.length){j=m[l]
j=j<0?A.hx(j)+" (next tom is higher)":A.hx(j)}else j="\u2014"
q.textContent=j}q=n.f
q===$&&A.ai()
j=k.d
i=o>=j.a
h=i&&o<=j.b?"fits":"outside"
q.className=h
if(i&&o<=j.b)o="In range"
else o=o>j.b?"Above range":"Below range"
q.textContent=o}r=A.L(s)
g=new A.ag(s,r.h("t(1)").a(new A.dH()),r.h("ag<1>")).gj(0)
r=A.L(m)
f=new A.ag(m,r.h("t(1)").a(new A.dI()),r.h("ag<1>")).gj(0)
if(g===0)r="Every tom lands inside its starting range."
else{r=g===1?"tom lands":"toms land"
r=""+g+" "+r+" outside its starting range."}r=A.j([r],t.s)
if(f>0){q=f===1?"larger tom is":"larger toms are"
r.push(""+f+" "+q+" tuned higher than the tom above.")}if(g>0&&e.z!==B.i)r.push(e.bs(s))
e.x.textContent=B.a.ac(r," ")},
bs(a){var s,r,q
t.b2.a(a)
s=A.iv(a,1,null,A.L(a).c)
r=s.a9(0,new A.dC())
q=s.a9(0,new A.dD())
if(r&&!q)return"Try wider intervals, or a lower pitch on the smallest tom."
if(q&&!r)return"Try narrower intervals, or a higher pitch on the smallest tom."
return"Try a different pitch on the smallest tom, or adjust the intervals."},
av(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=t.X,a=A.cp(b,b)
try{b=A.hC("ds-plan")
s=B.l.bf(b==null?"{}":b,null)
if(t.f.b(s))a=s}catch(r){if(A.aj(r) instanceof A.bi)return
else throw r}q=J.R(a,"toms")
if(t.j.b(q)){p=A.ij(t.U)
for(b=J.al(q),o=t.gy,n=t.h,m=t.O,l=t.s;b.k();){k=A.j(A.m(b.gl()).split("-"),l)
if(k.length!==2)continue
j=A.ib(new A.ag(B.w,o.a(new A.dJ(k)),n),m)
if(1>=k.length)return A.d(k,1)
i=A.bB(k[1],null)
if(j!=null&&i!=null&&B.a.N(j.d,i))p.p(0,new A.E(j,i))}if(p.a!==0){b=c.y
if(b.a>0){b.b=b.c=b.d=b.e=b.f=null
b.a=0
b.ap()}b.a8(0,p)}}c.z=A.is(A.m(J.R(a,"spacing")))
h=J.R(a,"interval")
if(A.d2(h)){b=h>=1&&h<=12
g=h}else{g=null
b=!1}if(b)c.Q=g
f=J.R(a,"top")
if(typeof f=="number")c.r.value=B.b.i(f)
e=J.R(a,"gaps")
b=t.f
if(b.b(e))e.D(0,new A.dK(c))
d=J.R(a,"free")
if(b.b(d))d.D(0,new A.dL(c))},
bO(){var s,r,q,p,o=this,n=A.cp(t.N,t.K),m=A.j([],t.s)
for(s=o.y,s=A.h4(s,s.r,s.$ti.c),r=s.$ti.c;s.k();){q=s.d
if(q==null)q=r.a(q)
m.push(q.a.b+"-"+q.b)}n.t(0,"toms",m)
n.t(0,"spacing",o.z.b)
n.t(0,"interval",o.Q)
p=A.cD(A.q(o.r.value))
if(p!=null)n.t(0,"top",p)
n.t(0,"gaps",o.as)
n.t(0,"free",o.at)
return A.fy("ds-plan",B.l.bh(n,null))}}
A.dO.prototype={
$0(){var s=this,r=s.a,q=s.c,p=s.d,o=r.y
if(A.d1(s.b.checked))o.p(0,new A.E(q,p))
else o.ce(0,new A.E(q,p))
r.ah()},
$S:0}
A.dP.prototype={
$0(){if(A.d1(this.b.checked))this.a.bQ(this.c)},
$S:0}
A.dQ.prototype={
$0(){var s=this.a,r=A.bB(A.q(s.e.value),null)
s.Q=r==null?5:r
s.R()},
$S:0}
A.dR.prototype={
$0(){var s=this.a
s.b8()
s.R()},
$S:0}
A.dN.prototype={
$2(a,b){var s=t.U
return B.c.M(s.a(a).b,s.a(b).b)},
$S:7}
A.dM.prototype={
$0(){return this.a.Q},
$S:35}
A.dE.prototype={
$0(){var s,r=this,q=A.cD(A.q(r.b.value))
if(q!=null){s=r.c
r.a.at.t(0,s.a.b+"-"+s.b,q)}r.a.R()},
$S:0}
A.dF.prototype={
$0(){var s=this.a,r=s.bE(this.b),q=A.bB(A.q(this.c.value),null)
if(q==null)q=5
s.as.t(0,r,q)
s.R()},
$S:0}
A.dG.prototype={
$1(a){A.c3(a)
return a<30||a>1000},
$S:1}
A.dH.prototype={
$1(a){var s,r
t.I.a(a)
s=a.d
r=a.c
return!(r>=s.a&&r<=s.b)},
$S:3}
A.dI.prototype={
$1(a){return A.c3(a)<0},
$S:1}
A.dC.prototype={
$1(a){t.I.a(a)
return a.c>a.d.b},
$S:3}
A.dD.prototype={
$1(a){t.I.a(a)
return a.c<a.d.a},
$S:3}
A.dJ.prototype={
$1(a){var s
t.O.a(a)
s=this.a
if(0>=s.length)return A.d(s,0)
return a.b===s[0]},
$S:9}
A.dK.prototype={
$2(a,b){if(A.d2(b)&&b>=1&&b<=12)this.a.as.t(0,A.m(a),b)},
$S:8}
A.dL.prototype={
$2(a,b){if(typeof b=="number")this.a.at.t(0,A.m(a),b)},
$S:8};(function aliases(){var s=J.ap.prototype
s.bo=s.i})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u
s(J,"jg","id",38)
r(A,"jK","ix",4)
r(A,"jL","iy",4)
r(A,"jM","iz",4)
q(A,"hv","jD",0)
r(A,"jP","j5",10)
p(A.cg.prototype,"gbW","Y",0)
var n
p(n=A.cJ.prototype,"gbI","b2",0)
o(n,"gby","bz",33)
p(n,"gbR","aA",0)
p(A.cB.prototype,"gbJ","R",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.f,null)
q(A.f,[A.f7,J.ci,A.bF,J.ay,A.b,A.bb,A.w,A.dS,A.aC,A.bu,A.aE,A.M,A.a8,A.aR,A.aG,A.aq,A.dY,A.dA,A.bg,A.bX,A.am,A.C,A.dt,A.br,A.bs,A.bl,A.bR,A.cN,A.cH,A.cZ,A.a2,A.cS,A.d0,A.eq,A.cO,A.W,A.cQ,A.ah,A.D,A.cP,A.cX,A.e3,A.bP,A.cV,A.aI,A.o,A.cc,A.ce,A.en,A.e9,A.bG,A.ea,A.bi,A.I,A.d_,A.aX,A.dz,A.dy,A.di,A.dv,A.N,A.cz,A.G,A.H,A.a1,A.cj,A.ad,A.cg,A.cJ,A.cW,A.cB])
q(J.ci,[J.cl,J.bk,J.bn,J.bm,J.bo,J.aS,J.an])
q(J.bn,[J.ap,J.n,A.aV,A.bx])
q(J.ap,[J.cA,J.aD,J.ao])
r(J.ck,A.bF)
r(J.dp,J.n)
q(J.aS,[J.bj,J.cm])
q(A.b,[A.aY,A.e,A.ac,A.ag,A.aF,A.cM,A.cY])
r(A.c2,A.aY)
r(A.bM,A.c2)
r(A.bc,A.bM)
q(A.w,[A.aT,A.ae,A.cn,A.cL,A.cE,A.cR,A.bq,A.c8,A.a6,A.bJ,A.cK,A.bH,A.cd])
q(A.e,[A.P,A.ab,A.bt,A.bO])
q(A.P,[A.bI,A.a0,A.cU])
r(A.az,A.ac)
q(A.a8,[A.b_,A.b0])
r(A.E,A.b_)
r(A.X,A.b0)
q(A.aR,[A.be,A.a7])
q(A.aq,[A.bd,A.bW])
r(A.bf,A.bd)
r(A.bz,A.ae)
q(A.am,[A.ca,A.cb,A.cI,A.eI,A.eK,A.e6,A.e5,A.ev,A.ej,A.eM,A.eR,A.eS,A.dw,A.eZ,A.ex,A.d8,A.eO,A.eG,A.eV,A.dT,A.eQ,A.eU,A.dd,A.dG,A.dH,A.dI,A.dC,A.dD,A.dJ])
q(A.cI,[A.cG,A.aQ])
q(A.C,[A.aa,A.bN,A.cT])
r(A.bp,A.aa)
q(A.cb,[A.eJ,A.ew,A.eC,A.ek,A.dx,A.eo,A.eT,A.eB,A.dc,A.de,A.dN,A.dK,A.dL])
q(A.bx,[A.cq,A.aW])
q(A.aW,[A.bS,A.bU])
r(A.bT,A.bS)
r(A.bv,A.bT)
r(A.bV,A.bU)
r(A.bw,A.bV)
q(A.bv,[A.cr,A.cs])
q(A.bw,[A.ct,A.cu,A.cv,A.cw,A.cx,A.by,A.cy])
r(A.bY,A.cR)
q(A.ca,[A.e7,A.e8,A.er,A.eb,A.ef,A.ee,A.ed,A.ec,A.ei,A.eh,A.eg,A.e4,A.eA,A.d9,A.eP,A.eH,A.eW,A.dU,A.f0,A.f_,A.df,A.dg,A.dh,A.dW,A.dX,A.dV,A.dO,A.dP,A.dQ,A.dR,A.dM,A.dE,A.dF])
r(A.bL,A.cQ)
r(A.bQ,A.bN)
r(A.aH,A.bW)
r(A.co,A.bq)
r(A.dq,A.cc)
q(A.ce,[A.ds,A.dr])
r(A.em,A.en)
q(A.a6,[A.bC,A.ch])
q(A.e9,[A.B,A.bh,A.a3])
s(A.c2,A.o)
s(A.bS,A.o)
s(A.bT,A.M)
s(A.bU,A.o)
s(A.bV,A.M)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",i:"double",O:"num",h:"String",t:"bool",I:"Null",l:"List",f:"Object",T:"Map",u:"JSObject"},mangledNames:{},types:["~()","t(i)","~(@)","t(ad)","~(~())","I(@)","I()","a(+(B,a),+(B,a))","~(@,@)","t(B)","@(@)","~(f?,f?)","f?(f?)","I(f,ar)","t(h)","h(h)","~(a,@)","B()","a(a,a)","t(G)","G()","t(H)","H()","t(a1)","a1()","I(@,ar)","a3()","@(@,h)","~(f?)","I(f)","~(u,f?)","~(u,i)","~(h,h,l<h>)","~(i)","h()","a()","I(~())","@(h)","a(@,@)","t(a3)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.E&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.X&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.iS(v.typeUniverse,JSON.parse('{"cA":"ap","aD":"ap","ao":"ap","kn":"aV","n":{"l":["1"],"e":["1"],"u":[],"b":["1"]},"cl":{"t":[],"p":[]},"bk":{"p":[]},"bn":{"u":[]},"ap":{"u":[]},"ck":{"bF":[]},"dp":{"n":["1"],"l":["1"],"e":["1"],"u":[],"b":["1"]},"ay":{"y":["1"]},"aS":{"i":[],"O":[],"a9":["O"]},"bj":{"i":[],"a":[],"O":[],"a9":["O"],"p":[]},"cm":{"i":[],"O":[],"a9":["O"],"p":[]},"an":{"h":[],"a9":["h"],"dB":[],"p":[]},"aY":{"b":["2"]},"bb":{"y":["2"]},"bM":{"o":["2"],"l":["2"],"aY":["1","2"],"e":["2"],"b":["2"]},"bc":{"bM":["1","2"],"o":["2"],"l":["2"],"aY":["1","2"],"e":["2"],"b":["2"],"o.E":"2","b.E":"2"},"aT":{"w":[]},"e":{"b":["1"]},"P":{"e":["1"],"b":["1"]},"bI":{"P":["1"],"e":["1"],"b":["1"],"P.E":"1","b.E":"1"},"aC":{"y":["1"]},"ac":{"b":["2"],"b.E":"2"},"az":{"ac":["1","2"],"e":["2"],"b":["2"],"b.E":"2"},"bu":{"y":["2"]},"a0":{"P":["2"],"e":["2"],"b":["2"],"P.E":"2","b.E":"2"},"ag":{"b":["1"],"b.E":"1"},"aE":{"y":["1"]},"E":{"b_":[],"a8":[]},"X":{"b0":[],"a8":[]},"aR":{"T":["1","2"]},"be":{"aR":["1","2"],"T":["1","2"]},"aF":{"b":["1"],"b.E":"1"},"aG":{"y":["1"]},"a7":{"aR":["1","2"],"T":["1","2"]},"bd":{"aq":["1"],"cF":["1"],"e":["1"],"b":["1"]},"bf":{"bd":["1"],"aq":["1"],"cF":["1"],"e":["1"],"b":["1"]},"bz":{"ae":[],"w":[]},"cn":{"w":[]},"cL":{"w":[]},"bX":{"ar":[]},"am":{"aA":[]},"ca":{"aA":[]},"cb":{"aA":[]},"cI":{"aA":[]},"cG":{"aA":[]},"aQ":{"aA":[]},"cE":{"w":[]},"aa":{"C":["1","2"],"f9":["1","2"],"T":["1","2"],"C.K":"1","C.V":"2"},"ab":{"e":["1"],"b":["1"],"b.E":"1"},"br":{"y":["1"]},"bt":{"e":["1"],"b":["1"],"b.E":"1"},"bs":{"y":["1"]},"bp":{"aa":["1","2"],"C":["1","2"],"f9":["1","2"],"T":["1","2"],"C.K":"1","C.V":"2"},"b_":{"a8":[]},"b0":{"a8":[]},"bl":{"iq":[],"dB":[]},"bR":{"bE":[],"aU":[]},"cM":{"b":["bE"],"b.E":"bE"},"cN":{"y":["bE"]},"cH":{"aU":[]},"cY":{"b":["aU"],"b.E":"aU"},"cZ":{"y":["aU"]},"aV":{"u":[],"f2":[],"p":[]},"bx":{"u":[]},"cq":{"f3":[],"u":[],"p":[]},"aW":{"S":["1"],"u":[]},"bv":{"o":["i"],"l":["i"],"S":["i"],"e":["i"],"u":[],"b":["i"],"M":["i"]},"bw":{"o":["a"],"l":["a"],"S":["a"],"e":["a"],"u":[],"b":["a"],"M":["a"]},"cr":{"da":[],"o":["i"],"l":["i"],"S":["i"],"e":["i"],"u":[],"b":["i"],"M":["i"],"p":[],"o.E":"i"},"cs":{"db":[],"o":["i"],"l":["i"],"S":["i"],"e":["i"],"u":[],"b":["i"],"M":["i"],"p":[],"o.E":"i"},"ct":{"dk":[],"o":["a"],"l":["a"],"S":["a"],"e":["a"],"u":[],"b":["a"],"M":["a"],"p":[],"o.E":"a"},"cu":{"dl":[],"o":["a"],"l":["a"],"S":["a"],"e":["a"],"u":[],"b":["a"],"M":["a"],"p":[],"o.E":"a"},"cv":{"dm":[],"o":["a"],"l":["a"],"S":["a"],"e":["a"],"u":[],"b":["a"],"M":["a"],"p":[],"o.E":"a"},"cw":{"e_":[],"o":["a"],"l":["a"],"S":["a"],"e":["a"],"u":[],"b":["a"],"M":["a"],"p":[],"o.E":"a"},"cx":{"e0":[],"o":["a"],"l":["a"],"S":["a"],"e":["a"],"u":[],"b":["a"],"M":["a"],"p":[],"o.E":"a"},"by":{"e1":[],"o":["a"],"l":["a"],"S":["a"],"e":["a"],"u":[],"b":["a"],"M":["a"],"p":[],"o.E":"a"},"cy":{"e2":[],"o":["a"],"l":["a"],"S":["a"],"e":["a"],"u":[],"b":["a"],"M":["a"],"p":[],"o.E":"a"},"cR":{"w":[]},"bY":{"ae":[],"w":[]},"W":{"w":[]},"bL":{"cQ":["1"]},"D":{"aB":["1"]},"bN":{"C":["1","2"],"T":["1","2"]},"bQ":{"bN":["1","2"],"C":["1","2"],"T":["1","2"],"C.K":"1","C.V":"2"},"bO":{"e":["1"],"b":["1"],"b.E":"1"},"bP":{"y":["1"]},"aH":{"aq":["1"],"fQ":["1"],"cF":["1"],"e":["1"],"b":["1"]},"aI":{"y":["1"]},"C":{"T":["1","2"]},"aq":{"cF":["1"],"e":["1"],"b":["1"]},"bW":{"aq":["1"],"cF":["1"],"e":["1"],"b":["1"]},"cT":{"C":["h","@"],"T":["h","@"],"C.K":"h","C.V":"@"},"cU":{"P":["h"],"e":["h"],"b":["h"],"P.E":"h","b.E":"h"},"bq":{"w":[]},"co":{"w":[]},"i":{"O":[],"a9":["O"]},"a":{"O":[],"a9":["O"]},"l":{"e":["1"],"b":["1"]},"O":{"a9":["O"]},"bE":{"aU":[]},"h":{"a9":["h"],"dB":[]},"c8":{"w":[]},"ae":{"w":[]},"a6":{"w":[]},"bC":{"w":[]},"ch":{"w":[]},"bJ":{"w":[]},"cK":{"w":[]},"bH":{"w":[]},"cd":{"w":[]},"bG":{"w":[]},"d_":{"ar":[]},"aX":{"iu":[]},"dm":{"l":["a"],"e":["a"],"b":["a"]},"e2":{"l":["a"],"e":["a"],"b":["a"]},"e1":{"l":["a"],"e":["a"],"b":["a"]},"dk":{"l":["a"],"e":["a"],"b":["a"]},"e_":{"l":["a"],"e":["a"],"b":["a"]},"dl":{"l":["a"],"e":["a"],"b":["a"]},"e0":{"l":["a"],"e":["a"],"b":["a"]},"da":{"l":["i"],"e":["i"],"b":["i"]},"db":{"l":["i"],"e":["i"],"b":["i"]}}'))
A.iR(v.typeUniverse,JSON.parse('{"c2":2,"aW":1,"bW":1,"cc":2,"ce":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.a4
return{n:s("W"),J:s("f2"),W:s("f3"),d:s("a9<@>"),O:s("B"),r:s("e<@>"),C:s("w"),B:s("da"),q:s("db"),Z:s("aA"),Y:s("a7<a,+(i,i,h)>"),x:s("H"),D:s("dk"),k:s("dl"),E:s("dm"),R:s("b<@>"),e:s("n<H>"),G:s("n<f>"),c:s("n<ad>"),L:s("n<+(h,h)>"),s:s("n<h>"),A:s("n<cW>"),u:s("n<i>"),b:s("n<@>"),t:s("n<a>"),a6:s("n<f?>"),a:s("n<O>"),bT:s("n<~()>"),T:s("bk"),m:s("u"),V:s("ao"),p:s("S<@>"),cl:s("l<u>"),b2:s("l<ad>"),dy:s("l<h>"),j:s("l<@>"),a3:s("T<h,t>"),f:s("T<@,@>"),dv:s("a0<h,h>"),w:s("G"),P:s("I"),K:s("f"),I:s("ad"),gT:s("ko"),bQ:s("+()"),U:s("+(B,a)"),dP:s("+(f?,f?,f?)"),cz:s("bE"),ec:s("a1"),dJ:s("a3"),l:s("ar"),N:s("h"),dG:s("h(h)"),dm:s("p"),eK:s("ae"),h7:s("e_"),bv:s("e0"),go:s("e1"),gc:s("e2"),ak:s("aD"),h:s("ag<B>"),_:s("D<@>"),hg:s("bQ<f?,f?>"),y:s("t"),gy:s("t(B)"),al:s("t(f)"),i:s("i"),z:s("@"),fO:s("@()"),v:s("@(f)"),Q:s("@(f,ar)"),S:s("a"),eH:s("aB<I>?"),an:s("u?"),bM:s("l<@>?"),X:s("f?"),dk:s("h?"),F:s("ah<@,@>?"),g:s("cV?"),fQ:s("t?"),cD:s("i?"),h6:s("a?"),cg:s("O?"),o:s("O"),H:s("~"),M:s("~()"),cA:s("~(h,@)"),as:s("~(a,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.a_=J.ci.prototype
B.a=J.n.prototype
B.c=J.bj.prototype
B.b=J.aS.prototype
B.d=J.an.prototype
B.a0=J.ao.prototype
B.a1=J.bn.prototype
B.J=J.cA.prototype
B.z=J.aD.prototype
B.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.K=function() {
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
B.P=function(getTagFallback) {
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
B.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.O=function(hooks) {
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
B.N=function(hooks) {
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
B.M=function(hooks) {
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
B.B=function(hooks) { return hooks; }

B.l=new A.dq()
B.r=new A.dS()
B.h=new A.e3()
B.m=new A.d_()
B.aa=s([18,20,22,24,26],t.t)
B.a7=s([14,16,18,20],t.a)
B.n=new A.B("Bass drum (kick)",B.aa,22,B.a7,18,3,"kick")
B.a4=s([10,12,13,14],t.t)
B.ai=s([3.5,4,5,5.5,6,6.5,7,8],t.a)
B.e=new A.B("Snare",B.a4,14,B.ai,5.5,0,"snare")
B.a6=s([14,16,18],t.t)
B.a5=s([12,13,14,16],t.a)
B.o=new A.B("Floor tom",B.a6,16,B.a5,14,2,"floorTom")
B.a9=s([8,10,12,13],t.t)
B.a8=s([6,7,8,9,10],t.a)
B.f=new A.B("Rack tom",B.a9,12,B.a8,8,1,"rackTom")
B.a2=new A.dr(null)
B.a3=new A.ds(null)
B.bh=new A.bh(0,"wood")
B.q=s(["lm","g4m"],t.s)
B.at=new A.G("maple","Maple","Warm and balanced: an even spread of lows and highs with slightly boosted mids. The all-rounder.",B.q)
B.au=new A.G("birch","Birch","Brighter and more focused than maple, with a crisp, dry \u201cpop\u201d on the attack. A studio favorite.",B.q)
B.az=new A.G("mahogany","Mahogany","Warm and dark: robust lows, mellow highs, and less projection than birch. A vintage feel.",B.q)
B.aB=new A.G("oak","Oak","Dry and punchy with strong projection and a solid low-mid.",B.q)
B.af=s(["g4m","md"],t.s)
B.av=new A.G("walnut","Walnut","Warm and rounded, with an even spread of lows, mids and highs and a darker, vintage character.",B.af)
B.bi=new A.bh(1,"synthetic")
B.ah=s(["md","lm"],t.s)
B.ax=new A.G("acrylic","Acrylic","Strong, focused attack and plenty of projection. Sources disagree on whether it reads bright or warm; acrylic kicks often want some damping.",B.ah)
B.bj=new A.bh(2,"metal")
B.H=s(["thomannShell","yamahaSnare"],t.s)
B.aw=new A.G("steel","Steel","Bright and cutting with long sustain and a penetrating rimshot. Heavier and more aggressive than aluminum.",B.H)
B.aC=new A.G("aluminum","Aluminum","Dry, bright and crisp with a short sustain, so it often needs little or no damping.",B.H)
B.am=s(["yamahaSnare","thomannShell"],t.s)
B.as=new A.G("brass","Brass","Dry and articulate with darker overtones, a sharp crack and more low end than most metals.",B.am)
B.G=s(["thomannShell"],t.s)
B.aA=new A.G("bronze","Bronze","Dark and warm, more subdued than brass or steel. Increasingly popular on high-end snares.",B.G)
B.ay=new A.G("copper","Copper","Warmer, with more low end than brass or steel. A long-time orchestral choice.",B.G)
B.t=s([B.at,B.au,B.az,B.aB,B.av,B.ax,B.aw,B.aC,B.as,B.aA,B.ay],A.a4("n<G>"))
B.j=s(["C","C\u266f","D","D\u266f","E","F","F\u266f","G","G\u266f","A","A\u266f","B"],t.s)
B.p=s(["dcp","gc"],t.s)
B.Q=new A.H("1c","Single-ply, coated","Open and warm with lots of overtones and touch sensitivity. The classic for jazz and for brushes.",B.p)
B.Z=new A.H("1x","Single-ply, clear","The most open and bright: maximum sustain and overtones, very responsive to dynamics.",B.p)
B.Y=new A.H("2c","Two-ply, coated","Deeper and more controlled with shorter sustain, plus the durability of two plies.",B.p)
B.U=new A.H("2x","Two-ply, clear","Punchy and fat with a bright attack and a controlled ring. Built for heavy hitting.",B.p)
B.D=s(["gc"],t.s)
B.X=new A.H("ring","With a muffling ring or built-in control","Fewer overtones and a shorter ring, so the drum needs less extra damping.",B.D)
B.C=s([B.Q,B.Z,B.Y,B.U,B.X],t.e)
B.u=s(["Unison","Minor second","Major second","Minor third","Major third","Perfect fourth","Tritone","Perfect fifth","Minor sixth","Major sixth","Minor seventh","Major seventh","Octave"],t.s)
B.ad=s([],A.a4("n<u>"))
B.ae=s([],t.s)
B.ag=s(["gc","dcp"],t.s)
B.W=new A.H("1x","Single-ply, clear","The usual choice: thin enough to let the shell resonate and carry the note.",B.ag)
B.ac=s(["dcp"],t.s)
B.V=new A.H("1c","Single-ply, coated","Like clear single-ply with slightly softened overtones.",B.ac)
B.S=new A.H("2","Two-ply","Rarely recommended underneath: the extra mass tends to choke the shell\u2019s tone.",B.D)
B.ab=s(["daddario"],t.s)
B.T=new A.H("port","Kick front head with a port hole","Releases air so the kick sounds punchier with less boom, and gives a microphone a way in.",B.ab)
B.ak=s(["yamahaSnare"],t.s)
B.R=new A.H("snare","Snare-side (very thin)","Made thin so the snare wires respond to the lightest notes.",B.ak)
B.E=s([B.W,B.V,B.S,B.T,B.R],t.e)
B.k=new A.a3("Same interval","Every tom the same interval below the one above it.",0,"same")
B.y=new A.a3("Custom per gap","Choose the interval between each pair of neighbouring toms.",1,"perGap")
B.i=new A.a3("Free tuning","Type each tom\u2019s pitch. Nothing is enforced; the planner shows the intervals you end up with.",2,"free")
B.F=s([B.k,B.y,B.i],A.a4("n<a3>"))
B.aj=s(["yamaha2"],t.s)
B.aR=new A.a1("same","Same pitch","The most sustain and the steadiest pitch. Yamaha suggests it as the starting point for toms and kick.",B.aj)
B.I=s(["yamaha2","thomannTuning"],t.s)
B.aS=new A.a1("higher","Resonant head higher","Less sustain and a pitch that bends as the note dies away. Sources disagree on which way it bends, so listen on your own drum.",B.I)
B.aQ=new A.a1("lower","Resonant head lower","Less sustain with a slight pitch bend, often heard as a \u201cdropping\u201d tom. As above, sources disagree on the direction; trust your ears.",B.I)
B.v=s([B.aR,B.aS,B.aQ],A.a4("n<a1>"))
B.w=s([B.e,B.f,B.o,B.n],A.a4("n<B>"))
B.al=s(["yamahaSnare","md"],t.s)
B.aE={dtchart:0,tunebot:1,yamaha2:2,yamahaSnare:3,thomannShell:4,thomannTuning:5,lm:6,g4m:7,md:8,dcp:9,gc:10,daddario:11}
B.b3=new A.N("Drum Tuning: frequency chart","https://drum-tuning.com/drum-tuning-chart/")
B.b1=new A.N("Tune-Bot: artist tuning settings","https://tune-bot.com/artists/")
B.aU=new A.N("Yamaha Hub: discover the sonic possibilities of your drums, part 2","https://hub.yamaha.com/drums/d-how-to/discover-the-sonic-possibilities-of-your-drums-part-2/")
B.b_=new A.N("Yamaha Hub: the five different kinds of snare drums","https://hub.yamaha.com/drums/stage/the-five-different-kinds-of-snare-drums-explained")
B.aZ=new A.N("Thomann: snare drum shell materials","https://www.thomannmusic.com/onlineexpert_page_snare_drums_shell_materials.html")
B.b0=new A.N("Thomann: drumheads and drum tuning","https://www.thomann.co.uk/onlineexpert_page_drumheads_drum_tuning.html")
B.b2=new A.N("Long & McQuade: a guide to the sound of different shell materials","https://www.long-mcquade.com/blog/576/The-Heart-of-Your-Drums-A-Guide-to-the-Sound-of-Different-Shell-Materials.htm")
B.aV=new A.N("Gear4music: your guide to shell materials","https://www.gear4music.com/blog/what-wood-sounds-good-your-guide-to-shell-materials")
B.aX=new A.N("Modern Drummer: what you need to know about drum shells","https://www.moderndrummer.com/2015/02/need-know-drum-shells/")
B.aW=new A.N("Drum Center of Portsmouth: coated vs clear drum heads","https://drumcenternh.com/blogs/news/coated-drum-heads-vs-clear-drum-heads-which-is-best")
B.aY=new A.N("Guitar Center: best drum heads guide","https://www.guitarcenter.com/riffs/buying-guides/drums/best-drum-heads-guide")
B.b4=new A.N("D'Addario: how to choose a bass drumhead","https://www.daddario.com/en-de/blogs/percussion/how-to-choose-a-bass-drumhead")
B.x=new A.be(B.aE,[B.b3,B.b1,B.aU,B.b_,B.aZ,B.b0,B.b2,B.aV,B.aX,B.aW,B.aY,B.b4],A.a4("be<h,N>"))
B.aK=new A.X(170,250,"dtchart")
B.ao=new A.a7([14,B.aK],t.Y)
B.aJ=new A.X(130,180,"dtchart")
B.aI=new A.X(100,150,"dtchart")
B.aP=new A.X(90,140,"dtchart")
B.ap=new A.a7([10,B.aJ,12,B.aI,13,B.aP],t.Y)
B.aO=new A.X(80,120,"dtchart")
B.aN=new A.X(65,100,"dtchart")
B.an=new A.a7([14,B.aO,16,B.aN],t.Y)
B.aM=new A.X(55,80,"dtchart")
B.aL=new A.X(50,70,"dtchart")
B.aq=new A.a7([20,B.aM,22,B.aL],t.Y)
B.ar=new A.a7([B.e,B.ao,B.f,B.ap,B.o,B.an,B.n,B.aq],A.a4("a7<B,T<a,+(i,i,h)>>"))
B.aF=new A.E(B.f,10)
B.aG=new A.E(B.f,12)
B.aH=new A.E(B.o,16)
B.aD={a:0,an:1,the:2,and:3,but:4,or:5,nor:6,for:7,so:8,yet:9,as:10,at:11,by:12,in:13,of:14,on:15,per:16,to:17,up:18,via:19,vs:20,from:21,into:22,onto:23,over:24,than:25,upon:26,with:27}
B.aT=new A.bf(B.aD,28,A.a4("bf<h>"))
B.b5=A.a5("f2")
B.b6=A.a5("f3")
B.b7=A.a5("da")
B.b8=A.a5("db")
B.b9=A.a5("dk")
B.ba=A.a5("dl")
B.bb=A.a5("dm")
B.bc=A.a5("f")
B.bd=A.a5("e_")
B.be=A.a5("e0")
B.bf=A.a5("e1")
B.bg=A.a5("e2")})();(function staticFields(){$.el=null
$.V=A.j([],t.G)
$.fS=null
$.fH=null
$.fG=null
$.hA=null
$.hu=null
$.hG=null
$.eE=null
$.eL=null
$.fu=null
$.ep=A.j([],A.a4("n<l<f>?>"))
$.b2=null
$.c4=null
$.c5=null
$.fo=!1
$.x=B.h})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"km","hL",()=>A.eF("_$dart_dartClosure"))
s($,"kl","fA",()=>A.eF("_$dart_dartClosure_dartJSInterop"))
s($,"kC","hW",()=>A.j([new J.ck()],A.a4("n<bF>")))
s($,"kq","hM",()=>A.af(A.dZ({
toString:function(){return"$receiver$"}})))
s($,"kr","hN",()=>A.af(A.dZ({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"ks","hO",()=>A.af(A.dZ(null)))
s($,"kt","hP",()=>A.af(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kw","hS",()=>A.af(A.dZ(void 0)))
s($,"kx","hT",()=>A.af(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kv","hR",()=>A.af(A.h_(null)))
s($,"ku","hQ",()=>A.af(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"kz","hV",()=>A.af(A.h_(void 0)))
s($,"ky","hU",()=>A.af(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"kA","fB",()=>A.iw())
s($,"kB","f1",()=>A.d4(B.bc))
s($,"kD","fC",()=>{var r,q,p,o=[]
for(r=1;r<=12;++r){q=B.u[r]
p=r===1?"":"s"
o.push(new A.cj(r,q+" ("+r+" semitone"+p+")"))}return A.fc(o,A.a4("cj"))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.aV,SharedArrayBuffer:A.aV,ArrayBufferView:A.bx,DataView:A.cq,Float32Array:A.cr,Float64Array:A.cs,Int16Array:A.ct,Int32Array:A.cu,Int8Array:A.cv,Uint16Array:A.cw,Uint32Array:A.cx,Uint8ClampedArray:A.by,CanvasPixelArray:A.by,Uint8Array:A.cy})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aW.$nativeSuperclassTag="ArrayBufferView"
A.bS.$nativeSuperclassTag="ArrayBufferView"
A.bT.$nativeSuperclassTag="ArrayBufferView"
A.bv.$nativeSuperclassTag="ArrayBufferView"
A.bU.$nativeSuperclassTag="ArrayBufferView"
A.bV.$nativeSuperclassTag="ArrayBufferView"
A.bw.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.k7
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()