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
if(a[b]!==s){A.kz(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.k(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.fE(b)
return new s(c,this)}:function(){if(s===null)s=A.fE(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.fE(a).prototype
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
fK(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fG(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.fH==null){A.ke()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.he("Return interceptor for "+A.n(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.ev
if(o==null)o=$.ev=A.eO(n)
p=q[o]}if(p!=null)return p
p=A.kl(a)
if(p!=null)return p
if(typeof a=="function")return B.a1
s=Object.getPrototypeOf(a)
if(s==null)return B.K
if(s===Object.prototype)return B.K
if(typeof q=="function"){o=$.ev
if(o==null)o=$.ev=A.eO(n)
Object.defineProperty(q,o,{value:B.A,enumerable:false,writable:true,configurable:true})
return B.A}return B.A},
is(a,b){var s=t.r
return J.ia(s.a(a),s.a(b))},
h_(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
it(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.h_(r))break;++b}return b},
iu(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.h_(q))break}return b},
aO(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bm.prototype
return J.cp.prototype}if(typeof a=="string")return J.ao.prototype
if(a==null)return J.bn.prototype
if(typeof a=="boolean")return J.co.prototype
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ap.prototype
if(typeof a=="symbol")return J.bs.prototype
if(typeof a=="bigint")return J.bq.prototype
return a}if(a instanceof A.f)return a
return J.fG(a)},
c9(a){if(typeof a=="string")return J.ao.prototype
if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ap.prototype
if(typeof a=="symbol")return J.bs.prototype
if(typeof a=="bigint")return J.bq.prototype
return a}if(a instanceof A.f)return a
return J.fG(a)},
fF(a){if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ap.prototype
if(typeof a=="symbol")return J.bs.prototype
if(typeof a=="bigint")return J.bq.prototype
return a}if(a instanceof A.f)return a
return J.fG(a)},
k9(a){if(typeof a=="number")return J.aT.prototype
if(typeof a=="string")return J.ao.prototype
if(a==null)return a
if(!(a instanceof A.f))return J.aE.prototype
return a},
ka(a){if(typeof a=="string")return J.ao.prototype
if(a==null)return a
if(!(a instanceof A.f))return J.aE.prototype
return a},
ab(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aO(a).S(a,b)},
R(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.ki(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c9(a).m(a,b)},
i9(a,b){return J.ka(a).bl(a,b)},
ia(a,b){return J.k9(a).P(a,b)},
d8(a,b){return J.fF(a).B(a,b)},
a_(a){return J.aO(a).gv(a)},
fS(a){return J.c9(a).gu(a)},
ib(a){return J.c9(a).gH(a)},
am(a){return J.fF(a).gq(a)},
ax(a){return J.c9(a).gj(a)},
ic(a){return J.aO(a).gA(a)},
id(a,b,c){return J.fF(a).V(a,b,c)},
bd(a){return J.aO(a).i(a)},
cl:function cl(){},
co:function co(){},
bn:function bn(){},
br:function br(){},
aq:function aq(){},
cD:function cD(){},
aE:function aE(){},
ap:function ap(){},
bq:function bq(){},
bs:function bs(){},
p:function p(a){this.$ti=a},
cn:function cn(){},
ds:function ds(a){this.$ti=a},
ay:function ay(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aT:function aT(){},
bm:function bm(){},
cp:function cp(){},
ao:function ao(){}},A={fj:function fj(){},
h2(a){return new A.aU("Field '"+a+"' has been assigned during initialization.")},
iw(a){return new A.aU("Field '"+a+"' has not been initialized.")},
iv(a){return new A.aU("Field '"+a+"' has already been initialized.")},
at(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fs(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fD(a,b,c){return a},
fI(a){var s,r
for(s=$.U.length,r=0;r<s;++r)if(a===$.U[r])return!0
return!1},
iI(a,b,c,d){A.fq(b,"start")
return new A.bL(a,b,c,d.h("bL<0>"))},
iA(a,b,c,d){if(t.x.b(a))return new A.az(a,b,c.h("@<0>").n(d).h("az<1,2>"))
return new A.af(a,b,c.h("@<0>").n(d).h("af<1,2>"))},
dr(){return new A.bK("No element")},
aZ:function aZ(){},
be:function be(a,b){this.a=a
this.$ti=b},
bP:function bP(){},
bf:function bf(a,b){this.a=a
this.$ti=b},
aU:function aU(a){this.a=a},
dV:function dV(){},
e:function e(){},
Q:function Q(){},
bL:function bL(a,b,c,d){var _=this
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
af:function af(a,b,c){this.a=a
this.b=b
this.$ti=c},
az:function az(a,b,c){this.a=a
this.b=b
this.$ti=c},
by:function by(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a0:function a0(a,b,c){this.a=a
this.b=b
this.$ti=c},
aj:function aj(a,b,c){this.a=a
this.b=b
this.$ti=c},
aF:function aF(a,b,c){this.a=a
this.b=b
this.$ti=c},
M:function M(){},
c5:function c5(){},
im(){throw A.c(A.bN("Cannot modify constant Set"))},
hX(a){var s=A.hW(a)
if(s!=null)return s
return"minified:"+a},
ki(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bd(a)
return s},
bE(a){var s,r=$.h5
if(r==null)r=$.h5=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bF(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
cG(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.d.bs(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
cF(a){var s,r,q,p
if(a instanceof A.f)return A.T(A.ba(a),null)
s=J.aO(a)
if(s===B.a0||s===B.a2||t.ak.b(a)){r=B.B(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.T(A.ba(a),null)},
h6(a){var s,r,q
if(a==null||typeof a=="number"||A.d4(a))return J.bd(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.an)return a.i(0)
if(a instanceof A.a8)return a.bi(!0)
s=$.i8()
for(r=0;r<1;++r){q=s[r].cs(a)
if(q!=null)return q}return"Instance of '"+A.cF(a)+"'"},
J(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.be(s,10)|55296)>>>0,s&1023|56320)}throw A.c(A.aD(a,0,1114111,null,null))},
iB(a){var s=a.$thrownJsError
if(s==null)return null
return A.b9(s)},
h7(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.A(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
d(a,b){if(a==null)J.ax(a)
throw A.c(A.eM(a,b))},
eM(a,b){var s,r="index"
if(!A.d5(b))return new A.a6(!0,b,r,null)
s=J.ax(a)
if(b<0||b>=s)return A.dm(b,s,a,r)
return A.h8(b,r)},
jX(a){return new A.a6(!0,a,null,null)},
c(a){return A.A(a,new Error())},
A(a,b){var s
if(a==null)a=new A.ah()
b.dartException=a
s=A.kA
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
kA(){return J.bd(this.dartException)},
fM(a,b){throw A.A(a,b==null?new Error():b)},
ca(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.fM(A.jk(a,b,c),s)},
jk(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.bM("'"+s+"': Cannot "+o+" "+l+k+n)},
aQ(a){throw A.c(A.L(a))},
ai(a){var s,r,q,p,o,n
a=A.hU(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.k([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.e7(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
e8(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
hd(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
fk(a,b){var s=b==null,r=s?null:b.method
return new A.cq(a,r,s?null:b.receiver)},
aa(a){var s
if(a==null)return new A.dD(a)
if(a instanceof A.bj){s=a.a
return A.aw(a,s==null?A.b4(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.aw(a,a.dartException)
return A.jV(a)},
aw(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jV(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.be(r,16)&8191)===10)switch(q){case 438:return A.aw(a,A.fk(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.aw(a,new A.bD())}}if(a instanceof TypeError){p=$.hZ()
o=$.i_()
n=$.i0()
m=$.i1()
l=$.i4()
k=$.i5()
j=$.i3()
$.i2()
i=$.i7()
h=$.i6()
g=p.I(s)
if(g!=null)return A.aw(a,A.fk(A.o(s),g))
else{g=o.I(s)
if(g!=null){g.method="call"
return A.aw(a,A.fk(A.o(s),g))}else if(n.I(s)!=null||m.I(s)!=null||l.I(s)!=null||k.I(s)!=null||j.I(s)!=null||m.I(s)!=null||i.I(s)!=null||h.I(s)!=null){A.o(s)
return A.aw(a,new A.bD())}}return A.aw(a,new A.cO(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bJ()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.aw(a,new A.a6(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bJ()
return a},
b9(a){var s
if(a instanceof A.bj)return a.b
if(a==null)return new A.c_(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.c_(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
d7(a){if(a==null)return J.a_(a)
if(typeof a=="object")return A.bE(a)
return J.a_(a)},
k0(a){if(typeof a=="number")return B.c.gv(a)
if(a instanceof A.d3)return A.bE(a)
if(a instanceof A.a8)return a.gv(a)
return A.d7(a)},
hM(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.t(0,a[s],a[r])}return b},
k7(a,b){var s,r=a.length
for(s=0;s<r;++s)b.p(0,a[s])
return b},
jv(a,b,c,d,e,f){t.Z.a(a)
switch(A.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.ek("Unsupported number of arguments for wrapped closure"))},
b8(a,b){var s=a.$identity
if(!!s)return s
s=A.k1(a,b)
a.$identity=s
return s},
k1(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.jv)},
il(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cJ().constructor.prototype):Object.create(new A.aR(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.fY(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.ih(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.fY(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ih(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ie)}throw A.c("Error in functionType of tearoff")},
ii(a,b,c,d){var s=A.fX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
fY(a,b,c,d){if(c)return A.ik(a,b,d)
return A.ii(b.length,d,a,b)},
ij(a,b,c,d){var s=A.fX,r=A.ig
switch(b?-1:a){case 0:throw A.c(new A.cH("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
ik(a,b,c){var s,r
if($.fV==null)$.fV=A.fU("interceptor")
if($.fW==null)$.fW=A.fU("receiver")
s=b.length
r=A.ij(s,c,a,b)
return r},
fE(a){return A.il(a)},
ie(a,b){return A.c4(v.typeUniverse,A.ba(a.a),b)},
fX(a){return a.a},
ig(a){return a.b},
fU(a){var s,r,q,p=new A.aR("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.d9("Field name "+a+" not found.",null))},
eO(a){return v.getIsolateTag(a)},
kl(a){var s,r,q,p,o,n=A.o($.hN.$1(a)),m=$.eN[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eU[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.eE($.hH.$2(a,n))
if(q!=null){m=$.eN[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eU[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.eY(s)
$.eN[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.eU[n]=s
return s}if(p==="-"){o=A.eY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.hR(a,s)
if(p==="*")throw A.c(A.he(n))
if(v.leafTags[n]===true){o=A.eY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.hR(a,s)},
hR(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.fK(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
eY(a){return J.fK(a,!1,null,!!a.$iS)},
kn(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.eY(s)
else return J.fK(s,c,null,null)},
ke(){if(!0===$.fH)return
$.fH=!0
A.kf()},
kf(){var s,r,q,p,o,n,m,l
$.eN=Object.create(null)
$.eU=Object.create(null)
A.kd()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hT.$1(o)
if(n!=null){m=A.kn(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
kd(){var s,r,q,p,o,n,m=B.L()
m=A.b7(B.M,A.b7(B.N,A.b7(B.C,A.b7(B.C,A.b7(B.O,A.b7(B.P,A.b7(B.Q(B.B),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.hN=new A.eR(p)
$.hH=new A.eS(o)
$.hT=new A.eT(n)},
b7(a,b){return a(b)||b},
k3(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
h0(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.c(A.fh("Illegal RegExp pattern ("+String(o)+")",a))},
hL(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
hU(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
f9(a,b,c){var s
if(typeof b=="string")return A.kw(a,b,c)
if(b instanceof A.bp){s=b.gb4()
s.lastIndex=0
return a.replace(s,A.hL(c))}return A.kv(a,b,c)},
kv(a,b,c){var s,r,q,p
for(s=J.i9(b,a),s=s.gq(s),r=0,q="";s.k();){p=s.gl()
q=q+a.substring(r,p.gaS())+c
r=p.gaJ()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
kw(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.hU(b),"g"),A.hL(c))},
kx(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.ky(a,s,s+b.length,c)},
ky(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
F:function F(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
aS:function aS(){},
bh:function bh(a,b,c){this.a=a
this.b=b
this.$ti=c},
aG:function aG(a,b){this.a=a
this.$ti=b},
aH:function aH(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a7:function a7(a,b){this.a=a
this.$ti=b},
bg:function bg(){},
bi:function bi(a,b,c){this.a=a
this.b=b
this.$ti=c},
bI:function bI(){},
e7:function e7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bD:function bD(){},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a){this.a=a},
dD:function dD(a){this.a=a},
bj:function bj(a,b){this.a=a
this.b=b},
c_:function c_(a){this.a=a
this.b=null},
an:function an(){},
cd:function cd(){},
ce:function ce(){},
cL:function cL(){},
cJ:function cJ(){},
aR:function aR(a,b){this.a=a
this.b=b},
cH:function cH(a){this.a=a},
ad:function ad(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dw:function dw(a,b){this.a=a
this.b=b
this.c=null},
ae:function ae(a,b){this.a=a
this.$ti=b},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bx:function bx(a,b){this.a=a
this.$ti=b},
bw:function bw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bt:function bt(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eR:function eR(a){this.a=a},
eS:function eS(a){this.a=a},
eT:function eT(a){this.a=a},
a8:function a8(){},
b0:function b0(){},
b1:function b1(){},
bp:function bp(a,b){var _=this
_.a=a
_.b=b
_.e=_.c=null},
bU:function bU(a){this.b=a},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cK:function cK(a,b){this.a=a
this.c=b},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aL(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.eM(b,a))},
aW:function aW(){},
bB:function bB(){},
ct:function ct(){},
aX:function aX(){},
bz:function bz(){},
bA:function bA(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
bC:function bC(){},
cB:function cB(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
fr(a,b){var s=b.c
return s==null?b.c=A.c2(a,"aB",[b.x]):s},
ha(a){var s=a.w
if(s===6||s===7)return A.ha(a.x)
return s===11||s===12},
iE(a){return a.as},
a9(a){return A.eC(v.typeUniverse,a,!1)},
aM(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.aM(a1,s,a3,a4)
if(r===s)return a2
return A.ho(a1,r,!0)
case 7:s=a2.x
r=A.aM(a1,s,a3,a4)
if(r===s)return a2
return A.hn(a1,r,!0)
case 8:q=a2.y
p=A.b6(a1,q,a3,a4)
if(p===q)return a2
return A.c2(a1,a2.x,p)
case 9:o=a2.x
n=A.aM(a1,o,a3,a4)
m=a2.y
l=A.b6(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.fw(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.b6(a1,j,a3,a4)
if(i===j)return a2
return A.hp(a1,k,i)
case 11:h=a2.x
g=A.aM(a1,h,a3,a4)
f=a2.y
e=A.jS(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.hm(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.b6(a1,d,a3,a4)
o=a2.x
n=A.aM(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.fx(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.cc("Attempted to substitute unexpected RTI kind "+a0))}},
b6(a,b,c,d){var s,r,q,p,o=b.length,n=A.eD(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aM(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
jT(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.eD(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aM(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
jS(a,b,c,d){var s,r=b.a,q=A.b6(a,r,c,d),p=b.b,o=A.b6(a,p,c,d),n=b.c,m=A.jT(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cV()
s.a=q
s.b=o
s.c=m
return s},
k(a,b){a[v.arrayRti]=b
return a},
hJ(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.kc(s)
return a.$S()}return null},
kg(a,b){var s
if(A.ha(b))if(a instanceof A.an){s=A.hJ(a)
if(s!=null)return s}return A.ba(a)},
ba(a){if(a instanceof A.f)return A.z(a)
if(Array.isArray(a))return A.K(a)
return A.fA(J.aO(a))},
K(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
z(a){var s=a.$ti
return s!=null?s:A.fA(a)},
fA(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.jr(a,s)},
jr(a,b){var s=a instanceof A.an?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.j6(v.typeUniverse,s.name)
b.$ccache=r
return r},
kc(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.eC(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
kb(a){return A.aN(A.z(a))},
fC(a){var s
if(a instanceof A.a8)return A.k6(a.$r,a.aq())
s=a instanceof A.an?A.hJ(a):null
if(s!=null)return s
if(t.dm.b(a))return J.ic(a).a
if(Array.isArray(a))return A.K(a)
return A.ba(a)},
aN(a){var s=a.r
return s==null?a.r=new A.d3(a):s},
k6(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.d(q,0)
s=A.c4(v.typeUniverse,A.fC(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.hr(v.typeUniverse,s,A.fC(q[r]))}return A.c4(v.typeUniverse,s,a)},
a5(a){return A.aN(A.eC(v.typeUniverse,a,!1))},
jq(a){var s=this
s.b=A.jQ(s)
return s.b(a)},
jQ(a){var s,r,q,p,o
if(a===t.K)return A.jB
if(A.aP(a))return A.jF
s=a.w
if(s===6)return A.jo
if(s===1)return A.hB
if(s===7)return A.jw
r=A.jP(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.aP)){a.f="$i"+q
if(q==="m")return A.jz
if(a===t.m)return A.jy
return A.jE}}else if(s===10){p=A.k3(a.x,a.y)
o=p==null?A.hB:p
return o==null?A.b4(o):o}return A.jm},
jP(a){if(a.w===8){if(a===t.S)return A.d5
if(a===t.i||a===t.o)return A.jA
if(a===t.N)return A.jD
if(a===t.y)return A.d4}return null},
jp(a){var s=this,r=A.jl
if(A.aP(s))r=A.jb
else if(s===t.K)r=A.b4
else if(A.bb(s)){r=A.jn
if(s===t.h6)r=A.ja
else if(s===t.dk)r=A.eE
else if(s===t.fQ)r=A.j8
else if(s===t.cg)r=A.hv
else if(s===t.cD)r=A.j9
else if(s===t.an)r=A.a4}else if(s===t.S)r=A.Z
else if(s===t.N)r=A.o
else if(s===t.y)r=A.b2
else if(s===t.o)r=A.hu
else if(s===t.i)r=A.b3
else if(s===t.m)r=A.i
s.a=r
return s.a(a)},
jm(a){var s=this
if(a==null)return A.bb(s)
return A.kj(v.typeUniverse,A.kg(a,s),s)},
jo(a){if(a==null)return!0
return this.x.b(a)},
jE(a){var s,r=this
if(a==null)return A.bb(r)
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.aO(a)[s]},
jz(a){var s,r=this
if(a==null)return A.bb(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.aO(a)[s]},
jy(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.f)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
hA(a){if(typeof a=="object"){if(a instanceof A.f)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
jl(a){var s=this
if(a==null){if(A.bb(s))return a}else if(s.b(a))return a
throw A.A(A.hx(a,s),new Error())},
jn(a){var s=this
if(a==null||s.b(a))return a
throw A.A(A.hx(a,s),new Error())},
hx(a,b){return new A.c0("TypeError: "+A.hf(a,A.T(b,null)))},
hf(a,b){return A.ci(a)+": type '"+A.T(A.fC(a),null)+"' is not a subtype of type '"+b+"'"},
Y(a,b){return new A.c0("TypeError: "+A.hf(a,b))},
jw(a){var s=this
return s.x.b(a)||A.fr(v.typeUniverse,s).b(a)},
jB(a){return a!=null},
b4(a){if(a!=null)return a
throw A.A(A.Y(a,"Object"),new Error())},
jF(a){return!0},
jb(a){return a},
hB(a){return!1},
d4(a){return!0===a||!1===a},
b2(a){if(!0===a)return!0
if(!1===a)return!1
throw A.A(A.Y(a,"bool"),new Error())},
j8(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.A(A.Y(a,"bool?"),new Error())},
b3(a){if(typeof a=="number")return a
throw A.A(A.Y(a,"double"),new Error())},
j9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.A(A.Y(a,"double?"),new Error())},
d5(a){return typeof a=="number"&&Math.floor(a)===a},
Z(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.A(A.Y(a,"int"),new Error())},
ja(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.A(A.Y(a,"int?"),new Error())},
jA(a){return typeof a=="number"},
hu(a){if(typeof a=="number")return a
throw A.A(A.Y(a,"num"),new Error())},
hv(a){if(typeof a=="number")return a
if(a==null)return a
throw A.A(A.Y(a,"num?"),new Error())},
jD(a){return typeof a=="string"},
o(a){if(typeof a=="string")return a
throw A.A(A.Y(a,"String"),new Error())},
eE(a){if(typeof a=="string")return a
if(a==null)return a
throw A.A(A.Y(a,"String?"),new Error())},
i(a){if(A.hA(a))return a
throw A.A(A.Y(a,"JSObject"),new Error())},
a4(a){if(a==null)return a
if(A.hA(a))return a
throw A.A(A.Y(a,"JSObject?"),new Error())},
hE(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.T(a[q],b)
return s},
jK(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.hE(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.T(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
hy(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.k([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.p(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.d(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.T(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.T(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.T(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.T(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.T(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
T(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.T(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.T(a.x,b)+">"
if(l===8){p=A.jU(a.x)
o=a.y
return o.length>0?p+("<"+A.hE(o,b)+">"):p}if(l===10)return A.jK(a,b)
if(l===11)return A.hy(a,b,null)
if(l===12)return A.hy(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
jU(a){var s=A.hW(a)
if(s!=null)return s
return"minified:"+a},
j7(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
j6(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.eC(a,b,!1)
else if(typeof m=="number"){s=m
r=A.c3(a,5,"#")
q=A.eD(s)
for(p=0;p<s;++p)q[p]=r
o=A.c2(a,b,q)
n[b]=o
return o}else return m},
j5(a,b){return A.hs(a.tR,b)},
j4(a,b){return A.hs(a.eT,b)},
eC(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.hq(a,null,b,!1)
r.set(b,s)
return s},
c4(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.hq(a,b,c,!0)
q.set(c,r)
return r},
hr(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.fw(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
hq(a,b,c,d){return A.iX(A.iR(a,b,c,d))},
au(a,b){b.a=A.jp
b.b=A.jq
return b},
c3(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.a2(null,null)
s.w=b
s.as=c
r=A.au(a,s)
a.eC.set(c,r)
return r},
ho(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.j2(a,b,r,c)
a.eC.set(r,s)
return s},
j2(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.aP(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.bb(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.a2(null,null)
q.w=6
q.x=b
q.as=c
return A.au(a,q)},
hn(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.j0(a,b,r,c)
a.eC.set(r,s)
return s},
j0(a,b,c,d){var s,r
if(d){s=b.w
if(A.aP(b)||b===t.K)return b
else if(s===1)return A.c2(a,"aB",[b])
else if(b===t.P||b===t.T)return t.eH}r=new A.a2(null,null)
r.w=7
r.x=b
r.as=c
return A.au(a,r)},
j3(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.a2(null,null)
s.w=13
s.x=b
s.as=q
r=A.au(a,s)
a.eC.set(q,r)
return r},
c1(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
j_(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
c2(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.c1(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.a2(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.au(a,r)
a.eC.set(p,q)
return q},
fw(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.c1(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.a2(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.au(a,o)
a.eC.set(q,n)
return n},
hp(a,b,c){var s,r,q="+"+(b+"("+A.c1(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.a2(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.au(a,s)
a.eC.set(q,r)
return r},
hm(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.c1(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.c1(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.j_(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.a2(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.au(a,p)
a.eC.set(r,o)
return o},
fx(a,b,c,d){var s,r=b.as+("<"+A.c1(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.j1(a,b,c,r,d)
a.eC.set(r,s)
return s},
j1(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.eD(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.aM(a,b,r,0)
m=A.b6(a,c,r,0)
return A.fx(a,n,m,c!==m)}}l=new A.a2(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.au(a,l)},
iR(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
iX(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.iT(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.hk(a,r,l,k,!1)
else if(q===46)r=A.hk(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aK(a.u,a.e,k.pop()))
break
case 94:k.push(A.j3(a.u,k.pop()))
break
case 35:k.push(A.c3(a.u,5,"#"))
break
case 64:k.push(A.c3(a.u,2,"@"))
break
case 126:k.push(A.c3(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.iV(a,k)
break
case 38:A.iU(a,k)
break
case 63:p=a.u
k.push(A.ho(p,A.aK(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.hn(p,A.aK(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.iS(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.hl(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.iY(a.u,a.e,o)
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
return A.aK(a.u,a.e,m)},
iT(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
hk(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.j7(s,o.x)[p]
if(n==null)A.fM('No "'+p+'" in "'+A.iE(o)+'"')
d.push(A.c4(s,o,n))}else d.push(p)
return m},
iV(a,b){var s,r=a.u,q=A.hj(a,b),p=b.pop()
if(typeof p=="string")b.push(A.c2(r,p,q))
else{s=A.aK(r,a.e,p)
switch(s.w){case 11:b.push(A.fx(r,s,q,a.n))
break
default:b.push(A.fw(r,s,q))
break}}},
iS(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.hj(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.aK(p,a.e,o)
q=new A.cV()
q.a=s
q.b=n
q.c=m
b.push(A.hm(p,r,q))
return
case-4:b.push(A.hp(p,b.pop(),s))
return
default:throw A.c(A.cc("Unexpected state under `()`: "+A.n(o)))}},
iU(a,b){var s=b.pop()
if(0===s){b.push(A.c3(a.u,1,"0&"))
return}if(1===s){b.push(A.c3(a.u,4,"1&"))
return}throw A.c(A.cc("Unexpected extended operation "+A.n(s)))},
hj(a,b){var s=b.splice(a.p)
A.hl(a.u,a.e,s)
a.p=b.pop()
return s},
aK(a,b,c){if(typeof c=="string")return A.c2(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.iW(a,b,c)}else return c},
hl(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aK(a,b,c[s])},
iY(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aK(a,b,c[s])},
iW(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.cc("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.cc("Bad index "+c+" for "+b.i(0)))},
kj(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.G(a,b,null,c,null)
r.set(c,s)}return s},
G(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.aP(d))return!0
s=b.w
if(s===4)return!0
if(A.aP(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.G(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.G(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.G(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.G(a,b.x,c,d,e))return!1
return A.G(a,A.fr(a,b),c,d,e)}if(s===6)return A.G(a,p,c,d,e)&&A.G(a,b.x,c,d,e)
if(q===7){if(A.G(a,b,c,d.x,e))return!0
return A.G(a,b,c,A.fr(a,d),e)}if(q===6)return A.G(a,b,c,p,e)||A.G(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.gT)return!0
if(q===12){if(b===t.W)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.G(a,j,c,i,e)||!A.G(a,i,e,j,c))return!1}return A.hz(a,b.x,c,d.x,e)}if(q===11){if(b===t.W)return!0
if(p)return!1
return A.hz(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.jx(a,b,c,d,e)}if(o&&q===10)return A.jC(a,b,c,d,e)
return!1},
hz(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
jx(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.c4(a,b,r[o])
return A.ht(a,p,null,c,d.y,e)}return A.ht(a,b.y,null,c,d.y,e)},
ht(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.G(a,b[s],d,e[s],f))return!1
return!0},
jC(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.G(a,r[s],c,q[s],e))return!1
return!0},
bb(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.aP(a))if(s!==6)r=s===7&&A.bb(a.x)
return r},
aP(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
hs(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
eD(a){return a>0?new Array(a):v.typeUniverse.sEA},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cV:function cV(){this.c=this.b=this.a=null},
d3:function d3(a){this.a=a},
cU:function cU(){},
c0:function c0(a){this.a=a},
iK(){var s,r,q
if(self.scheduleImmediate!=null)return A.jY()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.b8(new A.eg(s),1)).observe(r,{childList:true})
return new A.ef(s,r,q)}else if(self.setImmediate!=null)return A.jZ()
return A.k_()},
iL(a){self.scheduleImmediate(A.b8(new A.eh(t.M.a(a)),0))},
iM(a){self.setImmediate(A.b8(new A.ei(t.M.a(a)),0))},
iN(a){t.M.a(a)
A.iZ(0,a)},
iZ(a,b){var s=new A.eA()
s.bz(a,b)
return s},
jH(a){return new A.cR(new A.E($.x,a.h("E<0>")),a.h("cR<0>"))},
je(a,b){a.$2(0,null)
b.b=!0
return b.a},
hw(a,b){A.jf(a,b)},
jd(a,b){b.aG(a)},
jc(a,b){b.aH(A.aa(a),A.b9(a))},
jf(a,b){var s,r,q=new A.eF(b),p=new A.eG(b)
if(a instanceof A.E)a.bh(q,p,t.z)
else{s=t.z
if(a instanceof A.E)a.br(q,p,s)
else{r=new A.E($.x,t._)
r.a=8
r.c=a
r.bh(q,p,s)}}},
jW(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.x
return r.ba(r,t.as.a(new A.eL(s)),t.H,t.S,t.z)},
da(a){var s
if(t.C.b(a)){s=a.ga2()
if(s!=null)return s}return B.n},
js(a,b){var s=$.x
if(s===B.i)return null
s.bL(s,a,b)
return null},
jt(a,b){if($.x!==B.i)A.js(a,b)
if(b==null)if(t.C.b(a)){b=a.ga2()
if(b==null){A.h7(a,B.n)
b=B.n}}else b=B.n
else if(t.C.b(a))A.h7(a,b)
return new A.V(a,b)},
fu(a,b,c){var s,r,q,p,o,n={},m=n.a=a
for(s=t._;r=m.a,(r&4)!==0;m=a){a=s.a(m.c)
n.a=a}if(m===b){s=A.iG()
b.ai(new A.V(new A.a6(!0,m,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=m.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=m
m.b8(p)
return}if(!c)if(b.c==null)m=(s&16)===0||q!==0
else m=!1
else m=!0
if(m){p=b.a6()
b.a4(n.a)
A.b_(b,p)
return}b.a^=2
o=b.b
o.X(o,new A.eo(n,b))},
b_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=e.a=a
for(s=t.n,r=t.F;;){q={}
p=d.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(d.c)
d=d.b
d.b2(d,m.a,m.b)}return}q.a=b
l=b.a
for(d=b;l!=null;d=l,l=k){d.a=null
A.b_(e.a,d)
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
if((d&15)===8)new A.es(q,e,n).$0()
else if(o){if((d&1)!==0)new A.er(q,j).$0()}else if((d&2)!==0)new A.eq(e,q).$0()
if(h!=null)$.x=h
d=q.c
if(d instanceof A.E){p=q.a.$ti
p=p.h("aB<2>").b(d)||!p.y[1].b(d)}else p=!1
if(p){g=q.a.b
if((d.a&24)!==0){f=r.a(g.c)
g.c=null
b=g.a7(f)
g.a=d.a&30|g.a&1
g.c=d.c
e.a=d
continue}else A.fu(d,g,!0)
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
hD(a,b){var s=t.R
if(s.b(a))return b.ba(b,s.a(a),t.z,t.K,t.l)
s=t.v
if(s.b(a))return b.bb(b,s.a(a),t.z,t.K)
throw A.c(A.fT(a,"onError",u.c))},
jI(){var s,r
for(s=$.b5;s!=null;s=$.b5){$.c8=null
r=s.b
$.b5=r
if(r==null)$.c7=null
s.a.$0()}},
jR(){$.fB=!0
try{A.jI()}finally{$.c8=null
$.fB=!1
if($.b5!=null)$.fQ().$1(A.hI())}},
hF(a){var s=new A.cS(a),r=$.c7
if(r==null){$.b5=$.c7=s
if(!$.fB)$.fQ().$1(A.hI())}else $.c7=r.b=s},
jO(a){var s,r,q,p=$.b5
if(p==null){A.hF(a)
$.c8=$.c7
return}s=new A.cS(a)
r=$.c8
if(r==null){s.b=p
$.b5=$.c8=s}else{q=r.b
s.b=q
$.c8=r.b=s
if(q==null)$.c7=s}},
kG(a,b){A.fD(a,"stream",t.K)
return new A.d_(b.h("d_<0>"))},
jM(a,b){A.jO(new A.eJ(a,b))},
jN(a,b){if(B.i!==a)b=a.c5(b,t.H)
A.hF(b)},
eg:function eg(a){this.a=a},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(a){this.a=a},
ei:function ei(a){this.a=a},
eA:function eA(){},
eB:function eB(a,b){this.a=a
this.b=b},
cR:function cR(a,b){this.a=a
this.b=!1
this.$ti=b},
eF:function eF(a){this.a=a},
eG:function eG(a){this.a=a},
eL:function eL(a){this.a=a},
V:function V(a,b){this.a=a
this.b=b},
cT:function cT(){},
bO:function bO(a,b){this.a=a
this.$ti=b},
ak:function ak(a,b,c,d,e){var _=this
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
el:function el(a,b){this.a=a
this.b=b},
ep:function ep(a,b){this.a=a
this.b=b},
eo:function eo(a,b){this.a=a
this.b=b},
en:function en(a,b){this.a=a
this.b=b},
em:function em(a,b){this.a=a
this.b=b},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a,b){this.a=a
this.b=b},
eu:function eu(a){this.a=a},
er:function er(a,b){this.a=a
this.b=b},
eq:function eq(a,b){this.a=a
this.b=b},
cS:function cS(a){this.a=a
this.b=null},
d_:function d_(a){this.$ti=a},
ed:function ed(){},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
eJ:function eJ(a,b){this.a=a
this.b=b},
hg(a,b){var s=a[b]
return s===a?null:s},
hh(a,b,c){if(c==null)a[b]=a
else a[b]=c},
iO(){var s=Object.create(null)
A.hh(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
fm(a,b,c){return b.h("@<0>").n(c).h("fl<1,2>").a(A.hM(a,new A.ad(b.h("@<0>").n(c).h("ad<1,2>"))))},
cs(a,b){return new A.ad(a.h("@<0>").n(b).h("ad<1,2>"))},
ix(a){return new A.aI(a.h("aI<0>"))},
iy(a,b){return b.h("h3<0>").a(A.k7(a,new A.aI(b.h("aI<0>"))))},
fv(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hi(a,b,c){var s=new A.aJ(a,b,c.h("aJ<0>"))
s.c=a.e
return s},
iq(a,b){var s=J.am(a.a)
if(new A.aF(s,a.b,a.$ti.h("aF<1>")).k())return s.gl()
return null},
fp(a){var s,r
if(A.fI(a))return"{...}"
s=new A.aY("")
try{r={}
B.a.p($.U,a)
s.a+="{"
r.a=!0
a.D(0,new A.dA(r,s))
s.a+="}"}finally{if(0>=$.U.length)return A.d($.U,-1)
$.U.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bQ:function bQ(){},
bT:function bT(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
bR:function bR(a,b){this.a=a
this.$ti=b},
bS:function bS(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aI:function aI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cY:function cY(a){this.a=a
this.c=this.b=null},
aJ:function aJ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
r:function r(){},
D:function D(){},
dA:function dA(a,b){this.a=a
this.b=b},
ar:function ar(){},
bZ:function bZ(){},
jJ(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aa(r)
q=A.fh(String(s),null)
throw A.c(q)}q=A.eI(p)
return q},
eI(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.cW(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.eI(a[s])
return a},
h1(a,b,c){return new A.bu(a,b)},
jj(a){return a.cC()},
iP(a,b){return new A.ew(a,[],A.k2())},
iQ(a,b,c){var s,r=new A.aY(""),q=A.iP(r,b)
q.af(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
cW:function cW(a,b){this.a=a
this.b=b
this.c=null},
cX:function cX(a){this.a=a},
cf:function cf(){},
ch:function ch(){},
bu:function bu(a,b){this.a=a
this.b=b},
cr:function cr(a,b){this.a=a
this.b=b},
dt:function dt(){},
dv:function dv(a){this.b=a},
du:function du(a){this.a=a},
ex:function ex(){},
ey:function ey(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c){this.c=a
this.a=b
this.b=c},
k5(a){var s=A.cG(a)
if(s!=null)return s
throw A.c(A.fh("Invalid double",a))},
io(a,b){a=A.A(a,new Error())
if(a==null)a=A.b4(a)
a.stack=b.i(0)
throw a},
dx(a,b,c){var s,r,q
if(a<0||a>4294967295)A.fM(A.aD(a,0,4294967295,"length",null))
s=A.k(new Array(a),c.h("p<0>"))
s.$flags=1
r=s
if(a!==0&&b!=null)for(q=0;q<r.length;++q)r[q]=b
return r},
iz(a,b,c){var s,r,q=A.k([],c.h("p<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.aQ)(a),++r)B.a.p(q,c.a(a[r]))
q.$flags=1
return q},
fn(a,b){var s,r
if(Array.isArray(a))return A.k(a.slice(0),b.h("p<0>"))
s=A.k([],b.h("p<0>"))
for(r=J.am(a);r.k();)B.a.p(s,r.gl())
return s},
fo(a,b){var s=A.iz(a,!1,b)
s.$flags=3
return s},
h9(a){return new A.bp(a,A.h0(a,!1,!0,!1,!1,""))},
hc(a,b,c){var s=J.am(b)
if(!s.k())return a
if(c.length===0){do a+=A.n(s.gl())
while(s.k())}else{a+=A.n(s.gl())
while(s.k())a=a+c+A.n(s.gl())}return a},
iG(){return A.b9(new Error())},
ci(a){if(typeof a=="number"||A.d4(a)||a==null)return J.bd(a)
if(typeof a=="string")return JSON.stringify(a)
return A.h6(a)},
ip(a,b){A.fD(a,"error",t.K)
A.fD(b,"stackTrace",t.l)
A.io(a,b)},
cc(a){return new A.cb(a)},
d9(a,b){return new A.a6(!1,null,b,a)},
fT(a,b,c){return new A.a6(!0,a,b,c)},
h8(a,b){return new A.bG(null,null,!0,a,b,"Value not in range")},
aD(a,b,c,d,e){return new A.bG(b,c,!0,a,d,"Invalid value")},
iC(a,b,c){if(0>a||a>c)throw A.c(A.aD(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.aD(b,a,c,"end",null))
return b}return c},
fq(a,b){if(a<0)throw A.c(A.aD(a,0,null,b,null))
return a},
dm(a,b,c,d){return new A.ck(b,!0,a,d,"Index out of range")},
bN(a){return new A.bM(a)},
he(a){return new A.cN(a)},
hb(a){return new A.bK(a)},
L(a){return new A.cg(a)},
fh(a,b){return new A.bl(a,b)},
ir(a,b,c){var s,r
if(A.fI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.k([],t.s)
B.a.p($.U,a)
try{A.jG(a,s)}finally{if(0>=$.U.length)return A.d($.U,-1)
$.U.pop()}r=A.hc(b,t.V.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fi(a,b,c){var s,r
if(A.fI(a))return b+"..."+c
s=new A.aY(b)
B.a.p($.U,a)
try{r=s
r.a=A.hc(r.a,a,", ")}finally{if(0>=$.U.length)return A.d($.U,-1)
$.U.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jG(a,b){var s,r,q,p,o,n,m,l=a.gq(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.k())return
s=A.n(l.gl())
B.a.p(b,s)
k+=s.length+2;++j}if(!l.k()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gl();++j
if(!l.k()){if(j<=4){B.a.p(b,A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gl();++j
for(;l.k();p=o,o=n){n=l.gl();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.p(b,"...")
return}}q=A.n(p)
r=A.n(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.p(b,m)
B.a.p(b,q)
B.a.p(b,r)},
h4(a,b,c,d){var s
if(B.t===c){s=B.b.gv(a)
b=J.a_(b)
return A.fs(A.at(A.at($.fe(),s),b))}if(B.t===d){s=B.b.gv(a)
b=J.a_(b)
c=J.a_(c)
return A.fs(A.at(A.at(A.at($.fe(),s),b),c))}s=B.b.gv(a)
b=J.a_(b)
c=J.a_(c)
d=J.a_(d)
d=A.fs(A.at(A.at(A.at(A.at($.fe(),s),b),c),d))
return d},
ej:function ej(){},
w:function w(){},
cb:function cb(a){this.a=a},
ah:function ah(){},
a6:function a6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bG:function bG(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ck:function ck(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bM:function bM(a){this.a=a},
cN:function cN(a){this.a=a},
bK:function bK(a){this.a=a},
cg:function cg(a){this.a=a},
bJ:function bJ(){},
ek:function ek(a){this.a=a},
bl:function bl(a,b){this.a=a
this.b=b},
b:function b(){},
B:function B(){},
f:function f(){},
d2:function d2(){},
aY:function aY(a){this.a=a},
dC:function dC(a){this.a=a},
c6(a){var s
if(typeof a=="function")throw A.c(A.d9("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.jg,a)
s[$.fP()]=a
return s},
jg(a,b,c){t.Z.a(a)
if(A.Z(c)>=1)return a.$1(b)
return a.$0()},
hC(a){return a==null||A.d4(a)||typeof a=="number"||typeof a=="string"||t.gj.b(a)||t.gc.b(a)||t.go.b(a)||t.E.b(a)||t.h7.b(a)||t.k.b(a)||t.bv.b(a)||t.B.b(a)||t.q.b(a)||t.J.b(a)||t.d.b(a)},
kk(a){if(A.hC(a))return a
return new A.eV(new A.bT(t.hg)).$1(a)},
fL(a,b){var s=new A.E($.x,b.h("E<0>")),r=new A.bO(s,b.h("bO<0>"))
a.then(A.b8(new A.f2(r,b),1),A.b8(new A.f3(r),1))
return s},
eV:function eV(a){this.a=a},
f2:function f2(a,b){this.a=a
this.b=b},
f3:function f3(a){this.a=a},
d6(a){var s=69+12*(Math.log(a/440)/0.6931471805599453),r=B.c.C(s)
return new A.dB(r,B.c.C((s-r)*100))},
ku(a){var s,r,q,p=a.length
if(p===0)return 0
for(s=0,r=0;r<p;++r){q=a[r]
s+=q*q}return Math.sqrt(s/p)},
kp(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1/b,f=Math.max(1,B.c.cd(a0/g)),e=a.length,d=Math.min(e-2,B.c.c6(c/g))
if(d<=f)return null
s=A.k([],t.u)
for(r=f,q=r;r<=d;++r){if(!(r>=0&&r<e))return A.d(a,r)
p=a[r]
p=isFinite(p)?p:-200
B.a.p(s,p)
if(!(q>=0&&q<e))return A.d(a,q)
o=a[q]
if(p>(isFinite(o)?o:-200))q=r}B.a.aR(s)
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
h=i!==0?B.c.ab(0.5*(k-j)/i,-0.5,0.5):0}else h=0
return(q+h)*g},
hP(a){var s,r,q,p=A.fn(a,t.i)
B.a.aR(p)
s=p.length
r=s/2|0
if((s&1)===1){if(!(r<s))return A.d(p,r)
p=p[r]}else{q=r-1
if(!(q>=0&&q<s))return A.d(p,q)
q=p[q]
if(!(r<s))return A.d(p,r)
p=(q+p[r])/2}return p},
dB:function dB(a,b){this.a=a
this.b=b},
dl:function dl(a){var _=this
_.a=0.02
_.e=null
_.f=0
_.r=a},
dy:function dy(a,b){this.a=a
this.b=b},
dz:function dz(){},
hV(a){var s,r,q,p,o=t.s,n=A.k(a.split(" "),o),m=B.a.cm(n,new A.fb()),l=A.k([],o)
for(s=!0,r=0;r<n.length;++r){q=n[r]
if(q.length===0){B.a.p(l,q)
continue}p=!1
if(!s)if(r!==m){o=A.h9("^[^\\w]+|[^\\w]+$")
o=B.aU.G(0,A.f9(q,o,"").toLowerCase())
p=o}B.a.p(l,p?q.toLowerCase():A.jh(q))
s=B.d.c9(q,":")}return B.a.ad(l," ")},
jh(a){return new A.a0(A.k(a.split("-"),t.s),t.dG.a(new A.eH()),t.dv).ad(0,"-")},
fb:function fb(){},
eH:function eH(){},
fZ(a){return B.a.a1(B.x,new A.db(a),new A.dc())},
bc(a,b){var s,r,q,p,o,n,m=B.as.m(0,a),l=m.m(0,b)
if(t.dP.b(l))return new A.cC(l.a,l.b,null,l.c)
s=m.gE().cp(0,new A.f4(b))
r=m.m(0,s)
q=r.a
p=r.b
o=r.c
n=s/b
return new A.cC(B.c.L(q*n),B.c.L(p*n),s,o)},
k4(a,b){var s=a.r
if(Math.abs(b-s)<0.75)return"A common depth for a "+a.c.toLowerCase()+": a balance of attack and body."
return b<s?"Shallower than usual: tends toward a quicker, more cutting attack and a shorter, tighter sound.":"Deeper than usual: tends toward more body and low end, with a fuller, longer sound."},
ko(a){return B.a.a1(B.u,new A.eZ(a),new A.f_())},
hO(a,b){return B.a.a1(a,new A.eP(b),new A.eQ(a))},
ks(a){return B.a.a1(B.w,new A.f6(a),new A.f7())},
iF(a){return B.a.a1(B.G,new A.dW(a),new A.dX())},
hK(a){var s,r,q,p=Math.abs(a),o=B.c.C(p),n=B.c.C((p-o)*100),m=B.b.O(o,12),l=B.b.K(o,12),k=m===1?"Octave":""+m+" octaves"
if(m===0)s=B.v[l]
else s=l===0?k:k+" + "+B.v[l].toLowerCase()
r=Math.abs(n)
if(r<=2)return s
q=n>0?"+":"\u2212"
return s+" "+q+r+"\xa2"},
hG(a){var s=A.fn(a,t.U)
B.a.ah(s,new A.eK())
return s},
hS(a,b,c){var s,r,q,p,o,n=A.hG(a),m=A.k([],t.c)
for(s=b,r=0;r<n.length;++r){if(r>0){q=r-1
p=c.length
if(q<p)o=c[q]
else o=p===0?5:B.a.gcl(c)
s*=Math.pow(2,-o/12)}if(!(r<n.length))return A.d(n,r)
q=n[r]
p=q.a
q=q.b
B.a.p(m,new A.ag(p,q,s,A.bc(p,q)))}return m},
kq(a,b){var s,r,q=A.hG(a),p=A.k([],t.c),o=0
for(;;){s=q.length
if(!(o<s&&o<b.length))break
if(!(o<s))return A.d(q,o)
s=q[o]
r=s.a
s=s.b
if(!(o<b.length))return A.d(b,o)
p.push(new A.ag(r,s,b[o],A.bc(r,s)));++o}return p},
k8(a){var s,r,q,p=A.k([],t.u)
for(s=0;r=s+1,q=a.length,r<q;s=r){if(!(s<q))return A.d(a,s)
p.push(12*(Math.log(a[s].c/a[r].c)/0.6931471805599453))}return p},
N:function N(a,b){this.a=a
this.b=b},
C:function C(a,b,c,d,e,f,g){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.a=f
_.b=g},
db:function db(a){this.a=a},
dc:function dc(){},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4:function f4(a){this.a=a},
bk:function bk(a,b){this.a=a
this.b=b},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
eZ:function eZ(a){this.a=a},
f_:function f_(){},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eP:function eP(a){this.a=a},
eQ:function eQ(a){this.a=a},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(a){this.a=a},
f7:function f7(){},
a3:function a3(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
dW:function dW(a){this.a=a},
dX:function dX(){},
cm:function cm(a,b){this.a=a
this.b=b},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(){},
l(a,b){var s=A.a4(A.i(v.G.document).getElementById(a))
s.toString
return b.a(s)},
v(a,b,c){var s=A.i(A.i(v.G.document).createElement(a))
if(b!=null)s.className=b
if(c!=null)s.textContent=c
return s},
P(a,b,c){return a.addEventListener(b,A.c6(new A.f1(c)))},
kh(){var s,r,q,p
try{q=v.G
s=q.top
r=q.self
return!(s===r)}catch(p){return!0}},
hQ(a,b){return A.bo(v.G,"addEventListener",a,A.c6(new A.f0(b)),null,null)},
fO(){var s=A.o(A.i(v.G.location).hash)
return A.kx(s,"#","",0)},
kt(a){var s,r
try{s=A.i(v.G.history)
A.bo(s,"replaceState","","","#"+a,null)}catch(r){}},
fJ(a){var s,r,q,p,o=null
try{s=A.a4(v.G.localStorage)
q=s
r=q==null?o:A.bo(q,"getItem",a,o,o,o)
q=r!=null&&typeof r==="string"?A.o(r):o
return q}catch(p){return o}},
f8(a,b){var s,r,q
try{s=A.a4(v.G.localStorage)
r=s
if(r!=null)A.bo(r,"setItem",a,b,null,null)}catch(q){}},
kr(){var s,r,q,p,o,n,m=null,l=A.i(v.G.navigator).serviceWorker
if(!t.m.b(l))return
try{s=A.i(A.bo(A.i(l),"register","sw.js",m,m,m))
r=A.fL(s,t.X)
q=new A.f5()
p=r.$ti
o=$.x
if(o!==B.i)q=A.hD(q,o)
r.a3(new A.ak(new A.E(o,p),2,m,q,p.h("ak<1,1>")))}catch(n){}},
kB(){var s=v.G,r=A.a4(A.i(s.document).getElementById("themeToggle")),q=A.i(A.i(s.document).documentElement)
if(r==null)return
s=new A.fd(q,r)
A.P(r,"click",new A.fc(q,s))
s.$0()},
f1:function f1(a){this.a=a},
f0:function f0(a){this.a=a},
f5:function f5(){},
fd:function fd(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b},
km(){var s,r,q,p,o,n
A.kB()
A.kr()
if(A.a4(A.i(v.G.document).getElementById("guide"))==null)return
s=t.m
r=new A.cj(A.l("drum-type",s),A.l("drum-size",s),A.l("drum-depth",s),A.l("material",s),A.l("batter",s),A.l("reso",s),A.l("relation",s),A.l("range-title",s),A.l("range-low",s),A.l("range-med",s),A.l("range-high",s),A.l("range-scaled",s),A.l("notes",s),B.f,A.k([],t.bT))
r.R()
q=t.u
p=new A.cM(r,A.l("mic-start",s),A.l("reading-hz",s),A.l("reading-note",s),A.l("needle",s),A.l("level",s),A.l("listen-state",s),A.l("sensitivity",s),A.l("lugs",s),A.l("lug-status",s),A.l("target-line",s),A.l("target-mark",s),A.l("tuner-status",s),new A.dl(A.k([],q)),A.k([],q))
p.R()
q=t.N
new A.cE(A.l("plan-sizes",s),A.l("plan-spacing",s),A.l("plan-spacing-hint",s),A.l("plan-interval-row",s),A.l("plan-interval",s),A.l("plan-top-row",s),A.l("plan-top",s),A.l("plan-out",s),A.l("plan-summary",s),A.iy([B.aG,B.aH,B.aI],t.U),B.l,A.cs(q,t.S),A.cs(q,t.i),A.k([],t.A)).R()
A.jL()
o=new A.dY(new A.eW(p),A.l("tuning-tabs",s))
o.R()
n=A.l("change-drum",s)
n.hidden=!1
A.P(n,"click",new A.eX(o))},
fy(a){return a<100?B.c.F(a,1):B.b.i(B.c.C(a))},
av(a,b){var s,r,q,p
a.replaceChildren()
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.aQ)(b),++r){q=b[r]
p=A.v("option",null,q.b)
p.setAttribute("value",q.a)
a.appendChild(p)}},
fz(a){return a===B.c.L(a)?""+B.c.C(a)+'"':A.n(a)+'"'},
ji(a){var s,r,q,p,o,n=A.v("p","cite","Sources: ")
for(s=a.length,r=!0,q=0;q<s;++q){p=B.y.m(0,a[q])
if(p==null)continue
if(!r)n.appendChild(A.v("span",null," \xb7 "))
o=A.v("a",null,p.a)
o.setAttribute("href",p.b)
o.setAttribute("rel","noopener")
o.setAttribute("target","_blank")
n.appendChild(o)
r=!1}return n},
jL(){var s,r,q,p,o=A.l("sources",t.m)
for(s=B.y.gbt(),s=s.gq(s);s.k();){r=s.gl()
q=A.v("li",null,null)
p=A.v("a",null,r.a)
p.setAttribute("href",r.b)
p.setAttribute("rel","noopener")
p.setAttribute("target","_blank")
q.appendChild(p)
o.appendChild(q)}},
iJ(a){var s,r,q
try{s=A.i(a).name
r=s!=null&&typeof s==="string"?A.o(s):null
return r}catch(q){return null}},
ft(a){var s
A:{if("NotAllowedError"===a||"SecurityError"===a){s="Microphone access is blocked for this site. iPhone/iPad (Safari): tap the page-settings icon in the address bar, choose Website Settings, set Microphone to Allow. Android (Chrome): tap the icon at the left of the address bar, open Permissions, allow Microphone. Then press Start tuner again."
break A}if("NotFoundError"===a||"OverconstrainedError"===a){s="No microphone was found. Connect one, or check that the device\u2019s microphone is switched on, then press Start tuner again."
break A}if("NotReadableError"===a||"AbortError"===a){s="The microphone is busy, probably in a call or another recording app. Close that app, then press Start tuner again."
break A}if("framed"===a){s="For your privacy, the tuner only uses the microphone when Drum Studio is open in its own tab. Open https://davidpetry-cloud.github.io/drum-studio/tuning.html directly."
break A}if("insecure"===a){s="The tuner needs a secure (https) page to use the microphone. Open the app from https://davidpetry-cloud.github.io/drum-studio/tuning.html."
break A}s="The microphone couldn\u2019t start. Check that this site is allowed to use it (usually the icon by the address bar), then press Start tuner again."
break A}return s},
eW:function eW(a){this.a=a},
eX:function eX(a){this.a=a},
dY:function dY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=$},
e_:function e_(a,b){this.a=a
this.b=b},
e0:function e0(a){this.a=a},
dZ:function dZ(){},
e1:function e1(a){this.a=a},
cj:function cj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
di:function di(a){this.a=a},
dj:function dj(a){this.a=a},
dk:function dk(a){this.a=a},
df:function df(){},
dh:function dh(){},
dg:function dg(a){this.a=a},
cM:function cM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fx=$
_.fy=!1
_.go=0},
e3:function e3(a){this.a=a},
e4:function e4(a){this.a=a},
e5:function e5(a){this.a=a},
e6:function e6(a){this.a=a},
e2:function e2(a){this.a=a},
cZ:function cZ(a,b){var _=this
_.a=a
_.b=b
_.f=_.e=_.d=_.c=$
_.w=_.r=null},
cE:function cE(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dR:function dR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a){this.a=a},
dU:function dU(a){this.a=a},
dQ:function dQ(){},
dP:function dP(a){this.a=a},
dH:function dH(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dF:function dF(){},
dG:function dG(){},
dM:function dM(a){this.a=a},
dN:function dN(a){this.a=a},
dO:function dO(a){this.a=a},
hW(a){return v.mangledGlobalNames[a]},
kz(a){throw A.A(A.h2(a),new Error())},
al(){throw A.A(A.iw(""),new Error())},
fa(){throw A.A(A.iv(""),new Error())},
fN(){throw A.A(A.h2(""),new Error())},
bo(a,b,c,d,e,f){var s
if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}}},B={}
var w=[A,J,B]
var $={}
A.fj.prototype={}
J.cl.prototype={
S(a,b){return a===b},
gv(a){return A.bE(a)},
i(a){return"Instance of '"+A.cF(a)+"'"},
gA(a){return A.aN(A.fA(this))}}
J.co.prototype={
i(a){return String(a)},
gv(a){return a?519018:218159},
gA(a){return A.aN(t.y)},
$it:1,
$iu:1}
J.bn.prototype={
S(a,b){return null==b},
i(a){return"null"},
gv(a){return 0},
$it:1}
J.br.prototype={$iq:1}
J.aq.prototype={
gv(a){return 0},
i(a){return String(a)}}
J.cD.prototype={}
J.aE.prototype={}
J.ap.prototype={
i(a){var s=a[$.hY()]
if(s==null)s=a[$.fP()]
if(s==null)return this.by(a)
return"JavaScript function for "+J.bd(s)},
$iaA:1}
J.bq.prototype={
gv(a){return 0},
i(a){return String(a)}}
J.bs.prototype={
gv(a){return 0},
i(a){return String(a)}}
J.p.prototype={
p(a,b){A.K(a).c.a(b)
a.$flags&1&&A.ca(a,29)
a.push(b)},
cr(a,b){var s
a.$flags&1&&A.ca(a,"removeAt",1)
s=a.length
if(b>=s)throw A.c(A.h8(b,null))
return a.splice(b,1)[0]},
a9(a,b){var s
A.K(a).h("b<1>").a(b)
a.$flags&1&&A.ca(a,"addAll",2)
if(Array.isArray(b)){this.bB(a,b)
return}for(s=J.am(b);s.k();)a.push(s.gl())},
bB(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.c(A.L(a))
for(r=0;r<s;++r)a.push(b[r])},
aF(a){a.$flags&1&&A.ca(a,"clear","clear")
a.length=0},
V(a,b,c){var s=A.K(a)
return new A.a0(a,s.n(c).h("1(2)").a(b),s.h("@<1>").n(c).h("a0<1,2>"))},
ad(a,b){var s,r=A.dx(a.length,"",t.N)
for(s=0;s<a.length;++s)this.t(r,s,A.n(a[s]))
return r.join(b)},
a1(a,b,c){var s,r,q,p=A.K(a)
p.h("u(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.L(a))}if(c!=null)return c.$0()
throw A.c(A.dr())},
B(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
ga0(a){if(a.length>0)return a[0]
throw A.c(A.dr())},
gcl(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.dr())},
aa(a,b){var s,r
A.K(a).h("u(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.L(a))}return!1},
ca(a,b){var s,r
A.K(a).h("u(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.L(a))}return!0},
ah(a,b){var s,r,q,p,o,n=A.K(a)
n.h("a(1,1)?").a(b)
a.$flags&2&&A.ca(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.ju()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.cw()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.b8(b,2))
if(p>0)this.bW(a,p)},
aR(a){return this.ah(a,null)},
bW(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cg(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.d(a,s)
if(J.ab(a[s],b))return s}return-1},
G(a,b){var s
for(s=0;s<a.length;++s)if(J.ab(a[s],b))return!0
return!1},
gu(a){return a.length===0},
gH(a){return a.length!==0},
i(a){return A.fi(a,"[","]")},
gq(a){return new J.ay(a,a.length,A.K(a).h("ay<1>"))},
gv(a){return A.bE(a)},
gj(a){return a.length},
m(a,b){if(!(b>=0&&b<a.length))throw A.c(A.eM(a,b))
return a[b]},
t(a,b,c){A.K(a).c.a(c)
a.$flags&2&&A.ca(a)
if(!(b>=0&&b<a.length))throw A.c(A.eM(a,b))
a[b]=c},
ci(a,b){var s
A.K(a).h("u(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
cm(a,b){var s,r
A.K(a).h("u(1)").a(b)
s=a.length-1
if(s<0)return-1
for(r=s;r>=0;--r){if(!(r<a.length))return A.d(a,r)
if(b.$1(a[r]))return r}return-1},
$ie:1,
$ib:1,
$im:1}
J.cn.prototype={
cs(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.cF(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.ds.prototype={}
J.ay.prototype={
gl(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.aQ(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iy:1}
J.aT.prototype={
P(a,b){var s
A.hu(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gac(b)
if(this.gac(a)===s)return 0
if(this.gac(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gac(a){return a===0?1/a<0:a<0},
c6(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.bN(""+a+".ceil()"))},
cd(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.c(A.bN(""+a+".floor()"))},
C(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.bN(""+a+".round()"))},
L(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
ab(a,b,c){if(this.P(b,c)>0)throw A.c(A.jX(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
F(a,b){var s
if(b>20)throw A.c(A.aD(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gac(a))return"-"+s
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
K(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
O(a,b){return(a|0)===a?a/b|0:this.c3(a,b)},
c3(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.bN("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
be(a,b){var s
if(a>0)s=this.c1(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
c1(a,b){return b>31?0:a>>>b},
gA(a){return A.aN(t.o)},
$iac:1,
$ij:1,
$iO:1}
J.bm.prototype={
gA(a){return A.aN(t.S)},
$it:1,
$ia:1}
J.cp.prototype={
gA(a){return A.aN(t.i)},
$it:1}
J.ao.prototype={
aE(a,b,c){var s=b.length
if(c>s)throw A.c(A.aD(c,0,s,null,null))
return new A.d0(b,a,c)},
bl(a,b){return this.aE(a,b,0)},
c9(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aT(a,r-s)},
M(a,b,c){return a.substring(b,A.iC(b,c,a.length))},
aT(a,b){return this.M(a,b,null)},
bs(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.it(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.iu(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
P(a,b){var s
A.o(b)
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
gA(a){return A.aN(t.N)},
gj(a){return a.length},
$it:1,
$iac:1,
$idE:1,
$ih:1}
A.aZ.prototype={
gq(a){return new A.be(J.am(this.gU()),A.z(this).h("be<1,2>"))},
gj(a){return J.ax(this.gU())},
gu(a){return J.fS(this.gU())},
gH(a){return J.ib(this.gU())},
B(a,b){return A.z(this).y[1].a(J.d8(this.gU(),b))},
i(a){return J.bd(this.gU())}}
A.be.prototype={
k(){return this.a.k()},
gl(){return this.$ti.y[1].a(this.a.gl())},
$iy:1}
A.bP.prototype={
m(a,b){return this.$ti.y[1].a(J.R(this.a,b))},
$ie:1,
$im:1}
A.bf.prototype={
gU(){return this.a}}
A.aU.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.dV.prototype={}
A.e.prototype={}
A.Q.prototype={
gq(a){var s=this
return new A.aC(s,s.gj(s),A.z(s).h("aC<Q.E>"))},
gu(a){return this.gj(this)===0},
aa(a,b){var s,r,q=this
A.z(q).h("u(Q.E)").a(b)
s=q.gj(q)
for(r=0;r<s;++r){if(b.$1(q.B(0,r)))return!0
if(s!==q.gj(q))throw A.c(A.L(q))}return!1},
ad(a,b){var s,r,q,p=this,o=p.gj(p)
if(b.length!==0){if(o===0)return""
s=A.n(p.B(0,0))
if(o!==p.gj(p))throw A.c(A.L(p))
for(r=s,q=1;q<o;++q){r=r+b+A.n(p.B(0,q))
if(o!==p.gj(p))throw A.c(A.L(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.n(p.B(0,q))
if(o!==p.gj(p))throw A.c(A.L(p))}return r.charCodeAt(0)==0?r:r}},
V(a,b,c){var s=A.z(this)
return new A.a0(this,s.n(c).h("1(Q.E)").a(b),s.h("@<Q.E>").n(c).h("a0<1,2>"))}}
A.bL.prototype={
gbK(){var s=J.ax(this.a)
return s},
gc2(){var s=J.ax(this.a),r=this.b
if(r>s)return s
return r},
gj(a){var s=J.ax(this.a),r=this.b
if(r>=s)return 0
return s-r},
B(a,b){var s=this,r=s.gc2()+b
if(b<0||r>=s.gbK())throw A.c(A.dm(b,s.gj(0),s,"index"))
return J.d8(s.a,r)}}
A.aC.prototype={
gl(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.c9(q),o=p.gj(q)
if(r.b!==o)throw A.c(A.L(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.B(q,s);++r.c
return!0},
$iy:1}
A.af.prototype={
gq(a){return new A.by(J.am(this.a),this.b,A.z(this).h("by<1,2>"))},
gj(a){return J.ax(this.a)},
gu(a){return J.fS(this.a)},
B(a,b){return this.b.$1(J.d8(this.a,b))}}
A.az.prototype={$ie:1}
A.by.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gl())
return!0}s.a=null
return!1},
gl(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iy:1}
A.a0.prototype={
gj(a){return J.ax(this.a)},
B(a,b){return this.b.$1(J.d8(this.a,b))}}
A.aj.prototype={
gq(a){return new A.aF(J.am(this.a),this.b,this.$ti.h("aF<1>"))},
V(a,b,c){var s=this.$ti
return new A.af(this,s.n(c).h("1(2)").a(b),s.h("@<1>").n(c).h("af<1,2>"))}}
A.aF.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gl()))return!0
return!1},
gl(){return this.a.gl()},
$iy:1}
A.M.prototype={}
A.c5.prototype={}
A.F.prototype={$r:"+(1,2)",$s:1}
A.X.prototype={$r:"+(1,2,3)",$s:2}
A.aS.prototype={
gu(a){return this.gj(this)===0},
i(a){return A.fp(this)},
$iW:1}
A.bh.prototype={
gj(a){return this.b.length},
gb3(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a_(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
m(a,b){if(!this.a_(b))return null
return this.b[this.a[b]]},
D(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gb3()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gE(){return new A.aG(this.gb3(),this.$ti.h("aG<1>"))},
gbt(){return new A.aG(this.b,this.$ti.h("aG<2>"))}}
A.aG.prototype={
gj(a){return this.a.length},
gu(a){return 0===this.a.length},
gH(a){return 0!==this.a.length},
gq(a){var s=this.a
return new A.aH(s,s.length,this.$ti.h("aH<1>"))}}
A.aH.prototype={
gl(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iy:1}
A.a7.prototype={
W(){var s=this,r=s.$map
if(r==null){r=new A.bt(s.$ti.h("bt<1,2>"))
A.hM(s.a,r)
s.$map=r}return r},
m(a,b){return this.W().m(0,b)},
D(a,b){this.$ti.h("~(1,2)").a(b)
this.W().D(0,b)},
gE(){var s=this.W()
return new A.ae(s,A.z(s).h("ae<1>"))},
gbt(){var s=this.W()
return new A.bx(s,A.z(s).h("bx<2>"))},
gj(a){return this.W().a}}
A.bg.prototype={
p(a,b){A.z(this).c.a(b)
A.im()}}
A.bi.prototype={
gj(a){return this.b},
gu(a){return this.b===0},
gH(a){return this.b!==0},
gq(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.aH(s,s.length,r.$ti.h("aH<1>"))},
G(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.bI.prototype={}
A.e7.prototype={
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
A.bD.prototype={
i(a){return"Null check operator used on a null value"}}
A.cq.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.cO.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.dD.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bj.prototype={}
A.c_.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ias:1}
A.an.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.hX(r==null?"unknown":r)+"'"},
$iaA:1,
gcv(){return this},
$C:"$1",
$R:1,
$D:null}
A.cd.prototype={$C:"$0",$R:0}
A.ce.prototype={$C:"$2",$R:2}
A.cL.prototype={}
A.cJ.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.hX(s)+"'"}}
A.aR.prototype={
S(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aR))return!1
return this.$_target===b.$_target&&this.a===b.a},
gv(a){return(A.d7(this.a)^A.bE(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cF(this.a)+"'")}}
A.cH.prototype={
i(a){return"RuntimeError: "+this.a}}
A.ad.prototype={
gj(a){return this.a},
gu(a){return this.a===0},
gE(){return new A.ae(this,A.z(this).h("ae<1>"))},
a_(a){var s=this.b
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
return q}else return this.cj(b)},
cj(a){var s,r,q=this.d
if(q==null)return null
s=this.bQ(q,a)
r=this.aL(s,a)
if(r<0)return null
return s[r].b},
t(a,b,c){var s,r,q,p,o,n,m=this,l=A.z(m)
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.aU(s==null?m.b=m.au():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aU(r==null?m.c=m.au():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.au()
p=m.aK(b)
o=q[p]
if(o==null)q[p]=[m.av(b,c)]
else{n=m.aL(o,b)
if(n>=0)o[n].b=c
else o.push(m.av(b,c))}}},
co(a,b){var s,r,q=this,p=A.z(q)
p.c.a(a)
p.h("2()").a(b)
if(q.a_(a)){s=q.m(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.t(0,a,r)
return r},
D(a,b){var s,r,q=this
A.z(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.L(q))
s=s.c}},
aU(a,b,c){var s,r=A.z(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.av(b,c)
else s.b=c},
av(a,b){var s=this,r=A.z(s),q=new A.dw(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
aK(a){return J.a_(a)&1073741823},
bQ(a,b){return a[this.aK(b)]},
aL(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1},
i(a){return A.fp(this)},
au(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ifl:1}
A.dw.prototype={}
A.ae.prototype={
gj(a){return this.a.a},
gu(a){return this.a.a===0},
gq(a){var s=this.a
return new A.bv(s,s.r,s.e,this.$ti.h("bv<1>"))}}
A.bv.prototype={
gl(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.L(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iy:1}
A.bx.prototype={
gj(a){return this.a.a},
gu(a){return this.a.a===0},
gq(a){var s=this.a
return new A.bw(s,s.r,s.e,this.$ti.h("bw<1>"))}}
A.bw.prototype={
gl(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.L(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iy:1}
A.bt.prototype={
aK(a){return A.k0(a)&1073741823},
aL(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1}}
A.eR.prototype={
$1(a){return this.a(a)},
$S:12}
A.eS.prototype={
$2(a,b){return this.a(a,b)},
$S:41}
A.eT.prototype={
$1(a){return this.a(A.o(a))},
$S:40}
A.a8.prototype={
i(a){return this.bi(!1)},
bi(a){var s,r,q,p,o,n=this.bN(),m=this.aq(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.h6(o):l+A.n(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bN(){var s,r=this.$s
while($.ez.length<=r)B.a.p($.ez,null)
s=$.ez[r]
if(s==null){s=this.bF()
B.a.t($.ez,r,s)}return s},
bF(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.k(new Array(l),t.G)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.t(k,q,r[s])}}return A.fo(k,t.K)}}
A.b0.prototype={
aq(){return[this.a,this.b]},
S(a,b){if(b==null)return!1
return b instanceof A.b0&&this.$s===b.$s&&J.ab(this.a,b.a)&&J.ab(this.b,b.b)},
gv(a){return A.h4(this.$s,this.a,this.b,B.t)}}
A.b1.prototype={
aq(){return[this.a,this.b,this.c]},
S(a,b){var s=this
if(b==null)return!1
return b instanceof A.b1&&s.$s===b.$s&&J.ab(s.a,b.a)&&J.ab(s.b,b.b)&&J.ab(s.c,b.c)},
gv(a){var s=this
return A.h4(s.$s,s.a,s.b,s.c)}}
A.bp.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
gb4(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.h0(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
cc(a){var s=this.b.exec(a)
if(s==null)return null
return new A.bU(s)},
aE(a,b,c){var s=b.length
if(c>s)throw A.c(A.aD(c,0,s,null,null))
return new A.cP(this,b,c)},
bl(a,b){return this.aE(0,b,0)},
bM(a,b){var s,r=this.gb4()
if(r==null)r=A.b4(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.bU(s)},
$idE:1,
$iiD:1}
A.bU.prototype={
gaS(){return this.b.index},
gaJ(){var s=this.b
return s.index+s[0].length},
$iaV:1,
$ibH:1}
A.cP.prototype={
gq(a){return new A.cQ(this.a,this.b,this.c)}}
A.cQ.prototype={
gl(){var s=this.d
return s==null?t.cz.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.bM(l,s)
if(p!=null){m.d=p
o=p.gaJ()
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
A.cK.prototype={
gaJ(){return this.a+this.c.length},
$iaV:1,
gaS(){return this.a}}
A.d0.prototype={
gq(a){return new A.d1(this.a,this.b,this.c)}}
A.d1.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.cK(s,o)
q.c=r===q.c?r+1:r
return!0},
gl(){var s=this.d
s.toString
return s},
$iy:1}
A.aW.prototype={
gA(a){return B.b6},
$it:1,
$iff:1}
A.bB.prototype={}
A.ct.prototype={
gA(a){return B.b7},
$it:1,
$ifg:1}
A.aX.prototype={
gj(a){return a.length},
$iS:1}
A.bz.prototype={
m(a,b){A.aL(b,a,a.length)
return a[b]},
$ie:1,
$ib:1,
$im:1}
A.bA.prototype={$ie:1,$ib:1,$im:1}
A.cu.prototype={
gA(a){return B.b8},
$it:1,
$idd:1}
A.cv.prototype={
gA(a){return B.b9},
$it:1,
$ide:1}
A.cw.prototype={
gA(a){return B.ba},
m(a,b){A.aL(b,a,a.length)
return a[b]},
$it:1,
$idn:1}
A.cx.prototype={
gA(a){return B.bb},
m(a,b){A.aL(b,a,a.length)
return a[b]},
$it:1,
$idp:1}
A.cy.prototype={
gA(a){return B.bc},
m(a,b){A.aL(b,a,a.length)
return a[b]},
$it:1,
$idq:1}
A.cz.prototype={
gA(a){return B.be},
m(a,b){A.aL(b,a,a.length)
return a[b]},
$it:1,
$ie9:1}
A.cA.prototype={
gA(a){return B.bf},
m(a,b){A.aL(b,a,a.length)
return a[b]},
$it:1,
$iea:1}
A.bC.prototype={
gA(a){return B.bg},
gj(a){return a.length},
m(a,b){A.aL(b,a,a.length)
return a[b]},
$it:1,
$ieb:1}
A.cB.prototype={
gA(a){return B.bh},
gj(a){return a.length},
m(a,b){A.aL(b,a,a.length)
return a[b]},
$it:1,
$iec:1}
A.bV.prototype={}
A.bW.prototype={}
A.bX.prototype={}
A.bY.prototype={}
A.a2.prototype={
h(a){return A.c4(v.typeUniverse,this,a)},
n(a){return A.hr(v.typeUniverse,this,a)}}
A.cV.prototype={}
A.d3.prototype={
i(a){return A.T(this.a,null)}}
A.cU.prototype={
i(a){return this.a}}
A.c0.prototype={$iah:1}
A.eg.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:7}
A.ef.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:28}
A.eh.prototype={
$0(){this.a.$0()},
$S:13}
A.ei.prototype={
$0(){this.a.$0()},
$S:13}
A.eA.prototype={
bz(a,b){if(self.setTimeout!=null)self.setTimeout(A.b8(new A.eB(this,b),0),a)
else throw A.c(A.bN("`setTimeout()` not found."))}}
A.eB.prototype={
$0(){this.b.$0()},
$S:0}
A.cR.prototype={
aG(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.aV(a)
else{s=r.a
if(q.h("aB<1>").b(a))s.aW(a)
else s.b_(a)}},
aH(a,b){var s
if(b==null)b=A.da(a)
s=this.a
if(this.b)s.am(new A.V(a,b))
else s.ai(new A.V(a,b))}}
A.eF.prototype={
$1(a){return this.a.$2(0,a)},
$S:2}
A.eG.prototype={
$2(a,b){this.a.$2(1,new A.bj(a,t.l.a(b)))},
$S:31}
A.eL.prototype={
$2(a,b){this.a(A.Z(a),b)},
$S:27}
A.V.prototype={
i(a){return A.n(this.a)},
$iw:1,
ga2(){return this.b}}
A.cT.prototype={
aH(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.hb("Future already completed"))
s.ai(A.jt(a,b))},
bm(a){return this.aH(a,null)}}
A.bO.prototype={
aG(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.hb("Future already completed"))
s.aV(r.h("1/").a(a))}}
A.ak.prototype={
cn(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.aA(s,t.al.a(this.d),a.a,t.y,t.K)},
cf(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.R.b(q))p=l.bX(l,q,m,a.b,o,n,t.l)
else p=l.aA(l,t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.aa(s))){if((r.c&1)!==0)throw A.c(A.d9("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.d9("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.E.prototype={
br(a,b,c){var s,r,q,p=this.$ti
p.n(c).h("1/(2)").a(a)
s=$.x
if(s===B.i){if(b!=null&&!t.R.b(b)&&!t.v.b(b))throw A.c(A.fT(b,"onError",u.c))}else{r=p.c
a=s.bb(s,c.h("@<0/>").n(r).h("1(2)").a(a),c.h("0/"),r)
if(b!=null)b=A.hD(b,s)}q=new A.E(s,c.h("E<0>"))
r=b==null?1:3
this.a3(new A.ak(q,r,a,b,p.h("@<1>").n(c).h("ak<1,2>")))
return q},
bh(a,b,c){var s,r=this.$ti
r.n(c).h("1/(2)").a(a)
s=new A.E($.x,c.h("E<0>"))
this.a3(new A.ak(s,19,a,b,r.h("@<1>").n(c).h("ak<1,2>")))
return s},
bZ(a){this.a=this.a&1|16
this.c=a},
a4(a){this.a=a.a&30|this.a&1
this.c=a.c},
a3(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.a3(a)
return}r.a4(s)}q=r.b
q.X(q,new A.el(r,a))}},
b8(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.b8(a)
return}m.a4(n)}l.a=m.a7(a)
s=m.b
s.X(s,new A.ep(l,m))}},
a6(){var s=t.F.a(this.c)
this.c=null
return this.a7(s)},
a7(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
b_(a){var s,r=this
r.$ti.c.a(a)
s=r.a6()
r.a=8
r.c=a
A.b_(r,s)},
bE(a){var s=this.a6()
this.a4(a)
A.b_(this,s)},
am(a){var s=this.a6()
this.bZ(a)
A.b_(this,s)},
aV(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("aB<1>").b(a)){this.aW(a)
return}this.bD(a)},
bD(a){var s,r=this
r.$ti.c.a(a)
r.a^=2
s=r.b
s.X(s,new A.en(r,a))},
aW(a){A.fu(this.$ti.h("aB<1>").a(a),this,!1)
return},
ai(a){var s
this.a^=2
s=this.b
s.X(s,new A.em(this,a))},
$iaB:1}
A.el.prototype={
$0(){A.b_(this.a,this.b)},
$S:0}
A.ep.prototype={
$0(){A.b_(this.b,this.a.a)},
$S:0}
A.eo.prototype={
$0(){A.fu(this.a.a,this.b,!0)},
$S:0}
A.en.prototype={
$0(){this.a.b_(this.b)},
$S:0}
A.em.prototype={
$0(){this.a.am(this.b)},
$S:0}
A.es.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.bd(p,t.fO.a(q.d),t.z)}catch(o){s=A.aa(o)
r=A.b9(o)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
p=r
if(p==null)p=A.da(q)
n=k.a
n.c=new A.V(q,p)
q=n}q.b=!0
return}if(j instanceof A.E&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.E){m=k.b.a
l=new A.E(m.b,m.$ti)
j.br(new A.et(l,m),new A.eu(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.et.prototype={
$1(a){this.a.bE(this.b)},
$S:7}
A.eu.prototype={
$2(a,b){A.b4(a)
t.l.a(b)
this.a.am(new A.V(a,b))},
$S:16}
A.er.prototype={
$0(){var s,r,q,p,o,n,m,l,k
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
l=p.b.b
q.c=l.aA(l,o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(k){s=A.aa(k)
r=A.b9(k)
q=s
p=r
if(p==null)p=A.da(q)
o=this.a
o.c=new A.V(q,p)
o.b=!0}},
$S:0}
A.eq.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.cn(s)&&p.a.e!=null){p.c=p.a.cf(s)
p.b=!1}}catch(o){r=A.aa(o)
q=A.b9(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.da(p)
m=l.b
m.c=new A.V(p,n)
p=m}p.b=!0}},
$S:0}
A.cS.prototype={}
A.d_.prototype={}
A.ed.prototype={
c5(a,b){return new A.ee(this,this.bU(this,b.h("0()").a(a),b),b)},
b2(a,b,c){var s,r,q,p,o,n,m,l
t.l.a(c)
s=null
if(s==null){A.jM(b,c)
return}r=s.gaO()
q=r.gcz()
p=$.x
try{$.x=q
s.ce(r,r.gaw(),a,b,c)
$.x=p}catch(m){o=A.aa(m)
n=A.b9(m)
$.x=p
l=b===o?c:n
q.b2(r,o,l)}},
bd(a,b,c){var s,r,q
c.h("0()").a(b)
r=$.x
if(r===a)return b.$0()
s=r
$.x=a
try{r=b.$0()
return r}finally{$.x=s}q=null.gaO()
return null.cA(q,q.gaw(),a,b)},
aA(a,b,c,d,e){var s,r,q
d.h("@<0>").n(e).h("1(2)").a(b)
e.a(c)
r=$.x
if(r===a)return b.$1(c)
s=r
$.x=a
try{r=b.$1(c)
return r}finally{$.x=s}q=null.gaO()
return null.ce(q,q.gaw(),a,b,c)},
bX(a,b,c,d,e,f,g){var s,r,q
e.h("@<0>").n(f).n(g).h("1(2,3)").a(b)
f.a(c)
g.a(d)
r=$.x
if(r===a)return b.$2(c,d)
s=r
$.x=a
try{r=b.$2(c,d)
return r}finally{$.x=s}q=null.gaO()
return null.cB(q,q.gaw(),a,b,c,d)},
bU(a,b,c){c.h("0()").a(b)
return b},
bb(a,b,c,d){c.h("@<0>").n(d).h("1(2)").a(b)
return b},
ba(a,b,c,d,e){c.h("@<0>").n(d).n(e).h("1(2,3)").a(b)
return b},
bL(a,b,c){return null},
X(a,b){A.jN(a,t.M.a(b))
return}}
A.ee.prototype={
$0(){var s=this.a
return s.bd(s,this.b,this.c)},
$S(){return this.c.h("0()")}}
A.eJ.prototype={
$0(){A.ip(this.a,this.b)},
$S:0}
A.bQ.prototype={
gj(a){return this.a},
gu(a){return this.a===0},
gE(){return new A.bR(this,this.$ti.h("bR<1>"))},
a_(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.bH(a)},
bH(a){var s=this.d
if(s==null)return!1
return this.N(this.aZ(s,a),a)>=0},
m(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.hg(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.hg(q,b)
return r}else return this.bP(b)},
bP(a){var s,r,q=this.d
if(q==null)return null
s=this.aZ(q,a)
r=this.N(s,a)
return r<0?null:s[r+1]},
t(a,b,c){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.y[1].a(c)
s=o.d
if(s==null)s=o.d=A.iO()
r=A.d7(b)&1073741823
q=s[r]
if(q==null){A.hh(s,r,[b,c]);++o.a
o.e=null}else{p=o.N(q,b)
if(p>=0)q[p+1]=c
else{q.push(b,c);++o.a
o.e=null}}},
D(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.aY()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.m(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.c(A.L(m))}},
aY(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.dx(i.a,null,t.z)
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
aZ(a,b){return a[A.d7(b)&1073741823]}}
A.bT.prototype={
N(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.bR.prototype={
gj(a){return this.a.a},
gu(a){return this.a.a===0},
gH(a){return this.a.a!==0},
gq(a){var s=this.a
return new A.bS(s,s.aY(),this.$ti.h("bS<1>"))}}
A.bS.prototype={
gl(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.L(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iy:1}
A.aI.prototype={
gq(a){var s=this,r=new A.aJ(s,s.r,s.$ti.h("aJ<1>"))
r.c=s.e
return r},
gj(a){return this.a},
gu(a){return this.a===0},
gH(a){return this.a!==0},
G(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else{r=this.bG(b)
return r}},
bG(a){var s=this.d
if(s==null)return!1
return this.N(s[J.a_(a)&1073741823],a)>=0},
p(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aX(s==null?q.b=A.fv():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aX(r==null?q.c=A.fv():r,b)}else return q.bA(b)},
bA(a){var s,r,q,p=this
p.$ti.c.a(a)
s=p.d
if(s==null)s=p.d=A.fv()
r=J.a_(a)&1073741823
q=s[r]
if(q==null)s[r]=[p.al(a)]
else{if(p.N(q,a)>=0)return!1
q.push(p.al(a))}return!0},
cq(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.bc(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.bc(s.c,b)
else return s.bV(b)},
bV(a){var s,r,q,p,o=this.d
if(o==null)return!1
s=J.a_(a)&1073741823
r=o[s]
q=this.N(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.bk(p)
return!0},
aX(a,b){this.$ti.c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.al(b)
return!0},
bc(a,b){var s
if(a==null)return!1
s=t.g.a(a[b])
if(s==null)return!1
this.bk(s)
delete a[b]
return!0},
ar(){this.r=this.r+1&1073741823},
al(a){var s,r=this,q=new A.cY(r.$ti.c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.ar()
return q},
bk(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.ar()},
N(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1},
$ih3:1}
A.cY.prototype={}
A.aJ.prototype={
gl(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.L(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$iy:1}
A.r.prototype={
gq(a){return new A.aC(a,this.gj(a),A.ba(a).h("aC<r.E>"))},
B(a,b){return this.m(a,b)},
gu(a){return this.gj(a)===0},
gH(a){return!this.gu(a)},
V(a,b,c){var s=A.ba(a)
return new A.a0(a,s.n(c).h("1(r.E)").a(b),s.h("@<r.E>").n(c).h("a0<1,2>"))},
i(a){return A.fi(a,"[","]")}}
A.D.prototype={
D(a,b){var s,r,q,p=A.z(this)
p.h("~(D.K,D.V)").a(b)
for(s=this.gE(),s=s.gq(s),p=p.h("D.V");s.k();){r=s.gl()
q=this.m(0,r)
b.$2(r,q==null?p.a(q):q)}},
gj(a){var s=this.gE()
return s.gj(s)},
gu(a){var s=this.gE()
return s.gu(s)},
i(a){return A.fp(this)},
$iW:1}
A.dA.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.n(a)
r.a=(r.a+=s)+": "
s=A.n(b)
r.a+=s},
$S:6}
A.ar.prototype={
gu(a){return this.gj(this)===0},
gH(a){return this.gj(this)!==0},
a9(a,b){var s,r,q
A.z(this).h("b<1>").a(b)
for(s=A.hi(b,b.r,b.$ti.c),r=s.$ti.c;s.k();){q=s.d
this.p(0,q==null?r.a(q):q)}},
V(a,b,c){var s=A.z(this)
return new A.az(this,s.n(c).h("1(2)").a(b),s.h("@<1>").n(c).h("az<1,2>"))},
i(a){return A.fi(this,"{","}")},
B(a,b){var s,r
A.fq(b,"index")
s=this.gq(this)
for(r=b;s.k();){if(r===0)return s.gl();--r}throw A.c(A.dm(b,b-r,this,"index"))},
$ie:1,
$ib:1,
$icI:1}
A.bZ.prototype={}
A.cW.prototype={
m(a,b){var s,r=this.b
if(r==null)return this.c.m(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.bR(b):s}},
gj(a){return this.b==null?this.c.a:this.a5().length},
gu(a){return this.gj(0)===0},
gE(){if(this.b==null){var s=this.c
return new A.ae(s,A.z(s).h("ae<1>"))}return new A.cX(this)},
D(a,b){var s,r,q,p,o=this
t.cA.a(b)
if(o.b==null)return o.c.D(0,b)
s=o.a5()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.eI(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.L(o))}},
a5(){var s=t.bM.a(this.c)
if(s==null)s=this.c=A.k(Object.keys(this.a),t.s)
return s},
bR(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.eI(this.a[a])
return this.b[a]=s}}
A.cX.prototype={
gj(a){return this.a.gj(0)},
B(a,b){var s=this.a
if(s.b==null)s=s.gE().B(0,b)
else{s=s.a5()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gq(a){var s=this.a
if(s.b==null){s=s.gE()
s=s.gq(s)}else{s=s.a5()
s=new J.ay(s,s.length,A.K(s).h("ay<1>"))}return s}}
A.cf.prototype={}
A.ch.prototype={}
A.bu.prototype={
i(a){var s=A.ci(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.cr.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.dt.prototype={
bn(a,b){var s=A.jJ(a,this.gc7().a)
return s},
bp(a,b){var s=A.iQ(a,this.gc8().b,null)
return s},
gc8(){return B.a4},
gc7(){return B.a3}}
A.dv.prototype={}
A.du.prototype={}
A.ex.prototype={
bw(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.d.M(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.d.M(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.d.M(a,r,q)
r=q+1
o=A.J(92)
s.a+=o
o=A.J(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.d.M(a,r,m)},
ak(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.cr(a,null))}B.a.p(s,a)},
af(a){var s,r,q,p,o=this
if(o.bv(a))return
o.ak(a)
try{s=o.b.$1(a)
if(!o.bv(s)){q=A.h1(a,null,o.gb6())
throw A.c(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.aa(p)
q=A.h1(a,r,o.gb6())
throw A.c(q)}},
bv(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.i(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.bw(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.ak(a)
q.ct(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.ak(a)
r=q.cu(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
ct(a){var s,r,q=this.c
q.a+="["
s=J.c9(a)
if(s.gH(a)){this.af(s.m(a,0))
for(r=1;r<s.gj(a);++r){q.a+=","
this.af(s.m(a,r))}}q.a+="]"},
cu(a){var s,r,q,p,o,n,m=this,l={}
if(a.gu(a)){m.c.a+="{}"
return!0}s=a.gj(a)*2
r=A.dx(s,null,t.X)
q=l.a=0
l.b=!0
a.D(0,new A.ey(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.bw(A.o(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.af(r[n])}p.a+="}"
return!0}}
A.ey.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.t(s,r.a++,a)
B.a.t(s,r.a++,b)},
$S:6}
A.ew.prototype={
gb6(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.ej.prototype={
i(a){return this.an()}}
A.w.prototype={
ga2(){return A.iB(this)}}
A.cb.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ci(s)
return"Assertion failed"}}
A.ah.prototype={}
A.a6.prototype={
gap(){return"Invalid argument"+(!this.a?"(s)":"")},
gao(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gap()+q+o
if(!s.a)return n
return n+s.gao()+": "+A.ci(s.gaM())},
gaM(){return this.b}}
A.bG.prototype={
gaM(){return A.hv(this.b)},
gap(){return"RangeError"},
gao(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.ck.prototype={
gaM(){return A.Z(this.b)},
gap(){return"RangeError"},
gao(){if(A.Z(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.bM.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.cN.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bK.prototype={
i(a){return"Bad state: "+this.a}}
A.cg.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ci(s)+"."}}
A.bJ.prototype={
i(a){return"Stack Overflow"},
ga2(){return null},
$iw:1}
A.ek.prototype={
i(a){return"Exception: "+this.a}}
A.bl.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.d.M(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.b.prototype={
V(a,b,c){var s=A.z(this)
return A.iA(this,s.n(c).h("1(b.E)").a(b),s.h("b.E"),c)},
cp(a,b){var s,r
A.z(this).h("b.E(b.E,b.E)").a(b)
s=this.gq(this)
if(!s.k())throw A.c(A.dr())
r=s.gl()
while(s.k())r=b.$2(r,s.gl())
return r},
gj(a){var s,r=this.gq(this)
for(s=0;r.k();)++s
return s},
gu(a){return!this.gq(this).k()},
gH(a){return!this.gu(this)},
B(a,b){var s,r
A.fq(b,"index")
s=this.gq(this)
for(r=b;s.k();){if(r===0)return s.gl();--r}throw A.c(A.dm(b,b-r,this,"index"))},
i(a){return A.ir(this,"(",")")}}
A.B.prototype={
gv(a){return A.f.prototype.gv.call(this,0)},
i(a){return"null"}}
A.f.prototype={$if:1,
S(a,b){return this===b},
gv(a){return A.bE(this)},
i(a){return"Instance of '"+A.cF(this)+"'"},
gA(a){return A.kb(this)},
toString(){return this.i(this)}}
A.d2.prototype={
i(a){return""},
$ias:1}
A.aY.prototype={
gj(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iiH:1}
A.dC.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.eV.prototype={
$1(a){var s,r,q,p
if(A.hC(a))return a
s=this.a
if(s.a_(a))return s.m(0,a)
if(t.f.b(a)){r={}
s.t(0,a,r)
for(s=a.gE(),s=s.gq(s);s.k();){q=s.gl()
r[q]=this.$1(a.m(0,q))}return r}else if(t.V.b(a)){p=[]
s.t(0,a,p)
B.a.a9(p,J.id(a,this,t.z))
return p}else return a},
$S:14}
A.f2.prototype={
$1(a){return this.a.aG(this.b.h("0/?").a(a))},
$S:2}
A.f3.prototype={
$1(a){if(a==null)return this.a.bm(new A.dC(a===undefined))
return this.a.bm(a)},
$S:2}
A.dB.prototype={
gaI(){var s,r=this.b,q=Math.abs(r)
if(q<=2){r=this.a
return B.k[B.b.K(r,12)]+(B.b.O(r,12)-1)+" in tune"}s=r>0?"+":"\u2212"
r=this.a
return B.k[B.b.K(r,12)]+(B.b.O(r,12)-1)+" "+s+q+"\xa2"}}
A.dl.prototype={
cb(a,b,c){var s,r,q=this,p=q.e
if(p==null){if(b>q.a&&b>q.f*3){q.e=c
B.a.aF(q.r)}else q.f=q.f*0.9+b*0.1
return null}s=c-p
if(s>=40&&s<=300&&a!=null)B.a.p(q.r,a)
if(!(s>300))r=s>40&&b<q.a/4
else r=!0
if(r){q.e=null
q.f=b
r=q.r
if(r.length<3)return null
return A.hP(r)}return null}}
A.dy.prototype={
gae(){var s,r,q,p,o=A.k([],t.u)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p)o.push(1200*(Math.log(s[p]/q)/0.6931471805599453))
return o},
gck(a){return this.a.length>=2&&B.a.ca(this.gae(),new A.dz())},
gbu(){var s,r,q,p,o
if(this.a.length<2)return null
s=this.gae()
for(r=s.length,q=0,p=1;p<r;++p){o=s[p]
if(!(q>=0&&q<r))return A.d(s,q)
if(Math.abs(o)>Math.abs(s[q]))q=p}if(!(q>=0&&q<r))return A.d(s,q)
return Math.abs(s[q])>20?q:null}}
A.dz.prototype={
$1(a){return Math.abs(A.b3(a))<=20},
$S:3}
A.fb.prototype={
$1(a){return A.o(a).length!==0},
$S:21}
A.eH.prototype={
$1(a){var s,r,q
A.o(a)
s=A.h9("[A-Za-z]").cc(a)
if(s==null)return a
r=s.b.index
q=B.d.M(a,0,r)
if(!(r>=0&&r<a.length))return A.d(a,r)
return q+a[r].toUpperCase()+B.d.aT(a,r+1)},
$S:15}
A.N.prototype={}
A.C.prototype={
an(){return"DrumType."+this.b}}
A.db.prototype={
$1(a){return t.Q.a(a).b===this.a},
$S:10}
A.dc.prototype={
$0(){return B.f},
$S:17}
A.cC.prototype={}
A.f4.prototype={
$2(a,b){var s
A.Z(a)
A.Z(b)
s=this.a
return Math.abs(a-s)<=Math.abs(b-s)?a:b},
$S:18}
A.bk.prototype={
an(){return"Family."+this.b}}
A.H.prototype={}
A.eZ.prototype={
$1(a){return t.w.a(a).a===this.a},
$S:19}
A.f_.prototype={
$0(){return B.a.ga0(B.u)},
$S:20}
A.I.prototype={}
A.eP.prototype={
$1(a){return t.D.a(a).a===this.a},
$S:43}
A.eQ.prototype={
$0(){return B.a.ga0(this.a)},
$S:22}
A.a1.prototype={}
A.f6.prototype={
$1(a){return t.ec.a(a).a===this.a},
$S:23}
A.f7.prototype={
$0(){return B.a.ga0(B.w)},
$S:24}
A.a3.prototype={
an(){return"Spacing."+this.b}}
A.dW.prototype={
$1(a){return t.dJ.a(a).b===this.a},
$S:25}
A.dX.prototype={
$0(){return B.l},
$S:26}
A.cm.prototype={}
A.ag.prototype={}
A.eK.prototype={
$2(a,b){var s=t.U
return B.b.P(s.a(a).b,s.a(b).b)},
$S:9}
A.f1.prototype={
$1(a){return this.a.$0()},
$S:5}
A.f0.prototype={
$1(a){return this.a.$0()},
$S:5}
A.f5.prototype={
$1(a){A.b4(a)
return null},
$S:29}
A.fd.prototype={
$0(){var s,r=A.eE(this.a.getAttribute("data-theme"))==="light",q=r?"Switch to dark theme":"Switch to light theme",p=this.b
p.setAttribute("aria-label",q)
p.setAttribute("title",q)
s=A.a4(p.firstElementChild)
if(s!=null){p=r?"\u263e":"\u2600"
s.textContent=p}},
$S:0}
A.fc.prototype={
$0(){var s=this.a,r=A.eE(s.getAttribute("data-theme"))==="light"?"dark":"light"
s.setAttribute("data-theme",r)
A.f8("ds-theme",r)
this.b.$0()},
$S:0}
A.eW.prototype={
$1(a){if(a!=="tuner")this.a.bq()},
$S:30}
A.eX.prototype={
$0(){return this.a.aQ("guide",!0)},
$S:0}
A.dY.prototype={
ga8(){var s,r,q,p,o,n=this.c
if(n===$){s=A.k([],t.O)
for(r=v.G,q=0;q<4;++q){p=B.e[q]
o=A.a4(A.i(r.document).getElementById("tab-"+p))
o.toString
s.push(o)}this.c!==$&&A.fN()
this.c=s
n=s}return n},
gb5(){var s,r,q,p,o,n=this.d
if(n===$){s=A.k([],t.O)
for(r=v.G,q=0;q<4;++q){p=B.e[q]
o=A.a4(A.i(r.document).getElementById(p))
o.toString
s.push(o)}this.d!==$&&A.fN()
this.d=s
n=s}return n},
R(){var s,r,q,p,o,n=this
for(s=0;s<4;++s){r=n.gb5()
if(!(s<r.length))return A.d(r,s)
r=r[s]
r.setAttribute("role","tabpanel")
r.setAttribute("aria-labelledby","tab-"+B.e[s])
q=B.e[s]
r=n.ga8()
if(!(s<r.length))return A.d(r,s)
A.P(r[s],"click",new A.e_(n,q))}r=n.b
r.addEventListener("keydown",A.c6(new A.e0(n)))
r.hidden=!1
p=A.fO()
o=A.fJ("ds-tuning-tab")
if(B.a.G(B.e,p))r=p
else if(B.a.G(B.e,o)){o.toString
r=o}else r="tuner"
n.bx(r,!1)
A.hQ("hashchange",new A.e1(n))},
ag(a,b,c){var s,r,q,p,o=this
for(s=0;s<4;++s){r=B.e[s]===a
q=o.ga8()
if(!(s<q.length))return A.d(q,s)
q=q[s]
q.setAttribute("aria-selected",""+r)
p=r?"0":"-1"
q.setAttribute("tabindex",p)
p=o.gb5()
if(!(s<p.length))return A.d(p,s)
p[s].hidden=!r}A.f8("ds-tuning-tab",a)
if(c)A.kt(a)
if(b){q=o.ga8()
p=B.a.cg(B.e,a)
if(!(p>=0&&p<q.length))return A.d(q,p)
q[p].focus()}o.a.$1(a)},
aQ(a,b){return this.ag(a,b,!0)},
bx(a,b){return this.ag(a,!1,b)},
aP(a){return this.ag(a,!1,!0)}}
A.e_.prototype={
$0(){return this.a.aP(this.b)},
$S:0}
A.e0.prototype={
$1(a){var s,r,q
A.i(a)
s=this.a
r=B.a.ci(s.ga8(),new A.dZ())
if(r<0)return
switch(A.o(a.key)){case"ArrowRight":q=B.b.K(r+1,4)
break
case"ArrowLeft":q=B.b.K(r-1+4,4)
break
case"Home":q=0
break
case"End":q=3
break
default:q=-1
break}if(q<0)return
a.preventDefault()
s.aQ(B.e[q],!0)},
$S:8}
A.dZ.prototype={
$1(a){return A.i(a)===A.a4(A.i(v.G.document).activeElement)},
$S:32}
A.e1.prototype={
$0(){if(B.a.G(B.e,A.fO()))this.a.aP(A.fO())},
$S:0}
A.cj.prototype={
gbo(){return A.fz(this.ax)+" "+this.at.c.toLowerCase()},
R(){var s,r,q,p,o,n,m,l=this,k="change",j=l.a,i=t.L,h=A.k([],i)
for(s=0;s<4;++s){r=B.x[s]
h.push(new A.F(r.b,r.c))}A.av(j,h)
h=l.d
q=A.k([],i)
for(s=0;s<11;++s){p=B.u[s]
q.push(new A.F(p.a,p.b))}A.av(h,q)
q=l.e
o=A.k([],i)
for(s=0;s<5;++s){n=B.D[s]
o.push(new A.F(n.a,n.b))}A.av(q,o)
o=l.r
i=A.k([],i)
for(s=0;s<3;++s){m=B.w[s]
i.push(new A.F(m.a,m.b))}A.av(o,i)
l.az()
A.P(j,k,new A.di(l))
A.P(l.b,k,new A.dj(l))
A.P(l.c,k,new A.dk(l))
for(j=[h,q,l.f,o],i=j.length,h=l.gc4(),s=0;s<i;++s)A.P(j[s],k,h)
l.Z()},
b1(){var s,r,q,p,o,n,m,l,k=this,j=k.b,i=t.L,h=A.k([],i)
for(s=k.at.d,r=s.length,q=0;q<r;++q){p=s[q]
o=""+p
h.push(new A.F(o,(p===B.b.L(p)?""+B.b.C(p)+'"':o+'"')+" diameter"))}A.av(j,h)
j.value=""+k.ax
j=k.c
h=A.k([],i)
for(s=k.at.f,r=s.length,q=0;q<r;++q){p=s[q]
o=A.n(p)
h.push(new A.F(o,(p===B.c.L(p)?""+B.c.C(p)+'"':o+'"')+" deep"))}A.av(j,h)
j.value=A.n(k.ay)
j=k.f
n=A.o(j.value)
i=A.k([],i)
for(q=0;q<5;++q){m=B.F[q]
h=m.a
if(h!=="port"||k.at===B.o)s=h!=="snare"||k.at===B.f
else s=!1
if(s)i.push(new A.F(h,m.b))}A.av(j,i)
l=k.at
A:{if(B.f===l){i="snare"
break A}i=!1
if(n.length!==0)if(n!=="snare")i=n!=="port"||l===B.o
if(i){i=n
break A}i="1x"
break A}j.value=i},
az(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.X,f=A.cs(g,g)
try{g=A.fJ("ds-drum")
s=B.m.bn(g==null?"{}":g,h)
if(t.f.b(s))f=s}catch(r){if(!(A.aa(r) instanceof A.bl))throw r}g=J.R(f,"type")
i.at=A.fZ(A.n(g==null?"snare":g))
q=J.R(f,"diameter")
i.ax=A.d5(q)&&B.a.G(i.at.d,q)?q:i.at.e
p=J.R(f,"depth")
i.ay=typeof p=="number"&&B.a.G(i.at.f,p)?p:i.at.r
i.a.value=i.at.b
i.b1()
o=new A.df()
g=i.d
o.$2(g,J.R(f,"material"))
n=i.e
o.$2(n,J.R(f,"batter"))
m=i.f
o.$2(m,J.R(f,"reso"))
l=i.r
o.$2(l,J.R(f,"relation"))
for(g=[g,n,m,l],n=g.length,k=0;k<n;++k){j=g[k]
if(A.o(j.value).length===0)j.value=A.o(A.i(A.bo(A.i(j.options),"item",0,h,h,h)).value)}},
Z(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.bc(h.at,h.ax)
h.w.textContent=A.hV("Starting range for a "+h.gbo())
s=new A.dh()
r=g.a
s.$2(h.x,r)
q=g.b
s.$2(h.y,Math.sqrt(r*q))
s.$2(h.z,q)
r=g.c
if(r!=null)r="No source we found lists this size, so this range is scaled from the "+A.fz(r)+" range (pitch goes roughly as one over the diameter). Treat it as a rough guide."
else{r=B.y.m(0,g.d)
r=r==null?null:r.a
r="Range from "+(r==null?"the sources below":r)+". A starting point: tune by ear from here."}h.Q.textContent=r
r=h.d
p=A.ko(A.o(r.value))
q=h.e
o=A.hO(B.D,A.o(q.value))
n=h.f
m=A.hO(B.F,A.o(n.value))
l=h.r
k=A.ks(A.o(l.value))
h.as.replaceChildren()
j=new A.dg(h)
j.$3("Shell: "+p.b,p.d,p.e)
j.$3("Depth: "+A.fz(h.ay),A.k4(h.at,h.ay),B.am)
j.$3("Batter head: "+o.b,o.c,o.d)
j.$3("Resonant head: "+m.b,m.c,m.d)
if(h.at===B.f)j.$3("Batter and snare side","On a snare, many drummers tune the snare-side head higher than the batter for a crisp wire response. Treat it as a starting point and adjust by ear.",B.af)
else j.$3("Head relationship: "+k.b,k.c,k.d)
A.l("relation-row",t.m).hidden=h.at===B.f
A.f8("ds-drum",B.m.bp(A.fm(["type",h.at.b,"diameter",h.ax,"depth",h.ay,"material",A.o(r.value),"batter",A.o(q.value),"reso",A.o(n.value),"relation",A.o(l.value)],t.N,t.K),null))
for(r=h.ch,q=r.length,i=0;i<r.length;r.length===q||(0,A.aQ)(r),++i)r[i].$0()}}
A.di.prototype={
$0(){var s=this.a,r=s.at=A.fZ(A.o(s.a.value))
s.ax=r.e
s.ay=r.r
s.b1()
s.Z()},
$S:0}
A.dj.prototype={
$0(){var s=this.a,r=A.bF(A.o(s.b.value),null)
s.ax=r==null?s.at.e:r
s.Z()},
$S:0}
A.dk.prototype={
$0(){var s=this.a,r=B.d.bs(A.o(s.c.value)),q=A.bF(r,null)
if(q==null)q=A.cG(r)
s.ay=q==null?s.at.r:q
s.Z()},
$S:0}
A.df.prototype={
$2(a,b){if(typeof b=="string"&&b.length!==0)a.value=b},
$S:33}
A.dh.prototype={
$2(a,b){var s=A.fy(b),r=A.d6(b).a
r=s+" Hz \xb7 "+(B.k[B.b.K(r,12)]+(B.b.O(r,12)-1))
a.textContent=r
return r},
$S:34}
A.dg.prototype={
$3(a,b,c){var s,r,q=null
t.dy.a(c)
s=A.v("li","note-card",q)
s.appendChild(A.v("h3",q,A.hV(a)))
s.appendChild(A.v("p",q,b))
r=c.length===0?A.v("span",q,q):A.ji(c)
s.appendChild(r)
this.a.as.appendChild(s)},
$S:35}
A.cM.prototype={
gb0(){var s,r=this,q=r.fx
if(q===$){s=A.c6(r.gbI())
r.fx!==$&&A.fN()
r.fx=s
q=s}return q},
R(){var s=this,r=v.G
if(A.a4(A.i(r.navigator).mediaDevices)==null||!("AudioContext" in r)){r=t.m
A.l("tuner-body",r).hidden=!0
A.l("no-mic",r).hidden=!1
return}s.b.addEventListener("click",A.c6(new A.e3(s)))
A.i(r.document).addEventListener("visibilitychange",A.c6(new A.e4(s)))
A.hQ("pagehide",new A.e5(s))
A.P(s.w,"input",s.gbS())
A.P(A.l("lugs-clear",t.m),"click",new A.e6(s))
B.a.p(s.a.ch,s.gc0())
s.b9()
s.aB()
s.aC()},
b9(){var s=A.bF(A.o(this.w.value),null),r=B.b.ab(s==null?6:s,1,10)
this.dx.a=0.08/(r*r/4+1)},
Y(){var s=0,r=A.jH(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$Y=A.jW(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:if(m.fy||m.db){s=1
break}if(A.kh()){m.J(A.ft("framed"))
s=1
break}e=v.G
d=e.isSecureContext
if(A.d4(d))c=!d
else c=!1
if(c){m.J(A.ft("insecure"))
s=1
break}m.J("Asking for the microphone\u2026")
m.fy=!0
p=4
c=t.N
b=t.K
b=A.kk(A.fm(["audio",A.fm(["channelCount",1,"echoCancellation",!1,"noiseSuppression",!1,"autoGainControl",!1],c,b),"video",!1],c,b))
b.toString
l=A.i(b)
s=7
return A.hw(A.fL(A.i(A.a4(A.i(e.navigator).mediaDevices).getUserMedia(l)),t.m),$async$Y)
case 7:k=a4
j=A.i(new e.AudioContext())
s=8
return A.hw(A.fL(A.i(j.resume()),t.X),$async$Y)
case 8:i=A.i(j.createMediaStreamSource(k))
a=A.i(j.createAnalyser())
a.fftSize=8192
a.smoothingTimeConstant=0
h=a
a0=A.i(j.createAnalyser())
a0.fftSize=1024
g=a0
b=i
A.i(b.connect(h))
A.i(b.connect(g))
m.at=j
m.ax=k
m.ay=h
m.ch=g
b=B.b.O(A.Z(h.fftSize),2)
m.CW=new Float32Array(b)
c=A.Z(g.fftSize)
m.cx=new Float32Array(c)
m.db=!0
m.go=A.b3(A.i(e.performance).now())
c=m.b
c.textContent="Stop tuner"
c.setAttribute("aria-pressed","true")
A.b2(A.i(c.classList).toggle("is-running",!0))
m.r.textContent="Listening: tap the drum"
m.J("Tuner on. Tap the drum lightly about an inch from a tension rod.")
m.cy=A.Z(e.requestAnimationFrame(m.gb0()))
n.push(6)
s=5
break
case 4:p=3
a2=o.pop()
f=A.aa(a2)
m.J(A.ft(A.iJ(f)))
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.fy=!1
s=n.pop()
break
case 6:case 1:return A.jd(q,r)
case 2:return A.jc(o.at(-1),r)}})
return A.je($async$Y,r)},
aN(a){if(!this.db)return
this.bf()
this.J(a+" The microphone is closed.")},
bq(){return this.aN("Tuner off while you\u2019re on another tab.")},
bf(){var s,r,q,p=this
p.db=!1
s=p.cy
if(s!=null)v.G.cancelAnimationFrame(s)
r=p.ax
if(r==null)q=null
else{r=t.a6.a(r.getTracks())
r=t.cl.b(r)?r:new A.bf(r,A.K(r).h("bf<1,q>"))
q=r}for(r=J.am(q==null?B.ae:q);r.k();)r.gl().stop()
r=p.at
if(r!=null)A.i(r.close())
p.ax=p.at=null
r=p.b
r.textContent="Start tuner"
r.setAttribute("aria-pressed","false")
A.b2(A.i(r.classList).toggle("is-running",!1))
p.r.textContent="Microphone off"
A.i(p.f.style).setProperty("--level","0")
p.J("Tuner off. The microphone is closed.")},
bJ(a){var s,r,q,p,o,n,m,l,k,j=this
A.b3(a)
s=j.at
r=j.ay
q=j.ch
if(!j.db||s==null||r==null||q==null)return
p=j.cx
p===$&&A.al()
q.getFloatTimeDomainData(p)
p=j.CW
p===$&&A.al()
r.getFloatFrequencyData(p)
o=A.ku(j.cx)
A.i(j.f.style).setProperty("--level",B.c.F(B.c.ab(o*8,0,1),3))
p=j.CW
n=A.b3(s.sampleRate)
m=j.dx
l=m.cb(A.kp(p,A.Z(r.fftSize),1200,35,n),o,a)
p=m.e!=null?"Reading\u2026":"Listening: tap the drum"
j.r.textContent=p
if(l!=null){j.fr=l
k=A.d6(l)
j.c.textContent=B.c.F(l,1)+" Hz"
j.d.textContent=k.gaI()
p=j.e
p.hidden=!1
A.i(p.style).setProperty("--cents",""+k.b)
p=j.dy
B.a.p(p,l)
if(p.length>12)B.a.cr(p,0)
j.aB()
j.aC()
p=B.c.F(l,1)
n=k.gaI()
n=A.f9(n,"\u266f"," sharp")
n=A.f9(n,"\xa2"," cents")
j.J(p+" hertz, "+A.f9(n,"\u2212","minus ")+".")}if(m.e!=null)j.go=a
if(a-j.go>12e4){j.aN("Tuner off after 2 minutes without a tap.")
return}j.cy=A.Z(v.G.requestAnimationFrame(j.gb0()))},
aB(){var s,r,q,p,o,n,m,l,k,j,i="span",h=this.x
h.replaceChildren()
s=this.dy
r=A.fo(s,t.i)
q=s.length===0?0:A.hP(s)
p=new A.dy(r,q)
o=p.gae()
for(n=0;r=s.length,n<r;n=j){if(!(n<o.length))return A.d(o,n)
m=B.c.C(o[n])
if(m>0)l="+"
else l=m<0?"\u2212":"\xb1"
k=A.v("li","lug",null)
j=n+1
k.appendChild(A.v(i,"lug-n","Lug "+j))
if(!(n<s.length))return A.d(s,n)
k.appendChild(A.v(i,"lug-hz",B.c.F(s[n],1)+" Hz"))
k.appendChild(A.v(i,"lug-off",s.length>1?l+Math.abs(m)+"\xa2":""))
if(p.gbu()===n)A.i(k.classList).add("is-worst")
h.appendChild(k)}A:{if(0===r){h="Tap near each tension rod in turn. Readings appear here so you can compare them."
break A}if(1===r){h="One reading. Tap the next lug."
break A}h=p.gck(0)
if(h){h="Even: every lug is within 20\xa2 of the middle reading ("+B.c.F(q,1)+" Hz)."
break A}h=new A.e2(p).$0()
break A}this.y.textContent=h},
aC(){var s,r,q,p,o,n,m,l,k=this,j=k.a,i=A.bc(j.at,j.ax)
j=j.gbo()
s=i.a
r=A.fy(s)
q=i.b
p=A.fy(q)
o=A.d6(s).a
n=B.k[B.b.K(o,12)]
o=B.b.O(o,12)
m=A.d6(q).a
k.z.textContent="Target for your "+j+": about "+r+" to "+p+" Hz ("+(n+(o-1))+" to "+(B.k[B.b.K(m,12)]+(B.b.O(m,12)-1))+"). Hit the centre to compare."
l=k.fr
m=k.Q
o=l==null
m.hidden=o
if(!o){A.i(m.style).setProperty("--pos",B.c.F(B.c.ab(Math.log(l/s)/0.6931471805599453/(Math.log(q/s)/0.6931471805599453),-0.08,1.08),3))
m.setAttribute("title",B.c.F(l,1)+" Hz")}},
J(a){this.as.textContent=a
return a}}
A.e3.prototype={
$1(a){var s
if(!A.b2(A.i(a).isTrusted))return
s=this.a
if(s.db)s.bf()
else s.Y()},
$S:8}
A.e4.prototype={
$1(a){if(A.b2(A.i(v.G.document).hidden))this.a.aN("Tuner off because the page was hidden.")},
$S:37}
A.e5.prototype={
$0(){return this.a.bq()},
$S:0}
A.e6.prototype={
$0(){var s=this.a
B.a.aF(s.dy)
s.aB()
s.J("Lug readings cleared.")},
$S:0}
A.e2.prototype={
$0(){var s,r,q=this.a,p=q.gbu()
p.toString
q=q.gae()
if(!(p<q.length))return A.d(q,p)
s=q[p]
q=B.c.C(Math.abs(s))
r=s>0?"sharp: loosen it slightly":"flat: tighten it slightly"
return"Lug "+(p+1)+" is "+q+"\xa2 "+r+", then tap it again."},
$S:38}
A.cZ.prototype={}
A.cE.prototype={
R(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null,a3="input",a4="chip-check",a5="change"
a1.az()
for(s=[B.h,B.p],r=s.length,q=a1.y,p=a1.a,o=0;o<r;++o){n=s[o]
for(m=n.d,l=m.length,k=n===B.h,j="plan-"+n.b+"-",i=0;i<l;++i){h=m[i]
g=""+h
f=j+g
e=A.v(a3,a2,a2)
e.setAttribute("type","checkbox")
e.setAttribute("id",f)
e.checked=q.G(0,new A.F(n,h))
d=A.v("label",a4,a2)
d.setAttribute("for",f)
d.appendChild(e)
g=h===B.b.L(h)?""+B.b.C(h)+'"':g+'"'
c=k?"rack":"floor"
d.appendChild(A.v("span",a2,g+" "+c))
p.appendChild(d)
A.P(e,a5,new A.dR(a1,e,n,h))}}for(s=a1.b,o=0;o<3;++o){b=B.G[o]
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
A.P(a,a5,new A.dS(a1,a,b))}s=a1.e
r=A.k([],t.L)
for(q=$.fR(),p=q.length,o=0;o<p;++o){a0=q[o]
r.push(new A.F(""+a0.a,a0.b))}A.av(s,r)
s.value=""+a1.Q
A.P(s,a5,new A.dT(a1))
s=a1.r
A.P(s,a3,a1.gbT())
A.P(A.l("plan-suggest",t.m),"click",new A.dU(a1))
if(A.o(s.value).length===0)a1.bg()
a1.aj()},
gaD(){var s=A.fn(this.y,t.U)
B.a.ah(s,new A.dQ())
return s},
gbj(){var s=A.cG(A.o(this.r.value))
return s!=null&&s>=30&&s<=1000?s:null},
bg(){var s,r=this.gaD()
if(r.length===0)return
s=A.bc(B.a.ga0(r).a,B.a.ga0(r).b)
this.r.value=B.b.i(B.c.C(Math.sqrt(s.a*s.b)))},
bO(a){var s,r,q=this.ax,p=q.length
if(!(a<p))return A.d(q,a)
s=q[a]
r=a+1
if(!(r<p))return A.d(q,r)
r=q[r]
return s.a.b+"-"+s.b+">"+(r.a.b+"-"+r.b)},
c_(a){var s,r,q,p,o,n,m,l,k=this,j=k.b7()
if(a===B.j&&j!=null)for(s=j.length,r=k.at,q=0;q<j.length;j.length===s||(0,A.aQ)(j),++q){p=j[q]
r.t(0,p.a.b+"-"+p.b,A.k5(B.c.F(p.c,1)))}if(a===B.z&&k.z===B.l)for(s=k.ax,r=k.as,o=0;n=o+1,m=s.length,n<m;o=n){if(!(o<m))return A.d(s,o)
m=s[o]
l=s[n]
r.co(m.a.b+"-"+m.b+">"+(l.a.b+"-"+l.b),new A.dP(k))}k.z=a
k.aj()},
aj(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null,a3="td",a4=a1.ax
B.a.aF(a4)
s=A.k([],t.A)
for(r=a1.gaD(),q=r.length,p=0;p<r.length;r.length===q||(0,A.aQ)(r),++p){o=r[p]
s.push(new A.cZ(o.a,o.b))}B.a.a9(a4,s)
s=a1.w
s.replaceChildren()
a1.c.textContent=a1.z.d
a1.d.hidden=a1.z!==B.l
a1.f.hidden=a1.z===B.j
for(r=a1.at,q=a1.as,o=t.L,n=0;n<a4.length;++n){m=a4[n]
l=m.a
k=m.b
j=k===B.b.L(k)?""+B.b.C(k)+'"':""+k+'"'
i=l===B.h?"rack":"floor"
h=j+" "+i
g=A.v("tr",a2,a2)
i=A.v("th",a2,h)
i.setAttribute("scope","row")
g.appendChild(i)
i=A.v(a3,a2,a2)
m.c!==$&&A.fa()
m.c=i
if(a1.z===B.j){f=A.v("input",a2,a2)
f.setAttribute("type","number")
f.setAttribute("min","30")
f.setAttribute("max","1000")
f.setAttribute("step","0.1")
f.setAttribute("inputmode","decimal")
f.setAttribute("aria-label","Pitch for the "+h+" tom, in hertz")
f.className="plan-hz"
j=r.m(0,l.b+"-"+k)
if(j==null){l=A.bc(l,k)
l=Math.sqrt(l.a*l.b)}else l=j
f.value=B.c.F(l,1)
A.P(f,"input",new A.dH(a1,f,m))
m.r=f
i.appendChild(f)}l=A.v(a3,a2,a2)
m.d!==$&&A.fa()
m.d=l
k=A.v(a3,a2,a2)
m.e!==$&&A.fa()
m.e=k
if(a1.z===B.z&&n+1<a4.length){j=n+1
if(!(j<a4.length))return A.d(a4,j)
e=a4[j]
d=A.v("select",a2,a2)
c=e.b
c=c===B.b.L(c)?""+B.b.C(c)+'"':""+c+'"'
b=e.a===B.h?"rack":"floor"
d.setAttribute("aria-label","Interval from the "+h+" tom down to the "+(c+" "+b)+" tom")
b=A.k([],o)
for(c=$.fR(),a=c.length,p=0;p<a;++p){a0=c[p]
b.push(new A.F(""+a0.a,a0.b))}A.av(d,b)
c=a4.length
if(!(n<c))return A.d(a4,n)
b=a4[n]
if(!(j<c))return A.d(a4,j)
j=a4[j]
j=q.m(0,b.a.b+"-"+b.b+">"+(j.a.b+"-"+j.b))
d.value=""+(j==null?a1.Q:j)
A.P(d,"change",new A.dI(a1,n,d))
m.w=d
k.appendChild(d)}j=A.v(a3,a2,a2)
m.f!==$&&A.fa()
m.f=j
g.appendChild(i)
g.appendChild(l)
g.appendChild(k)
g.appendChild(j)
s.appendChild(g)}a1.T()},
b7(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.gaD()
if(e.length===0)return f
switch(g.z.a){case 0:s=g.gbj()
if(s==null)r=f
else{r=g.Q
r=A.hS(e,s,A.dx(Math.max(0,e.length-1),r,t.S))}return r
case 1:s=g.gbj()
if(s==null||g.ax.length!==e.length)return f
r=A.k([],t.t)
for(q=g.ax,p=g.as,o=0;n=o+1,m=q.length,n<m;o=n){if(!(o<m))return A.d(q,o)
m=q[o]
l=q[n]
l=p.m(0,m.a.b+"-"+m.b+">"+(l.a.b+"-"+l.b))
r.push(l==null?g.Q:l)}return A.hS(e,s,r)
case 2:r=A.k([],t.u)
for(q=g.ax,p=q.length,m=g.at,k=0;k<q.length;q.length===p||(0,A.aQ)(q),++k){j=q[k]
l=j.a
i=j.b
h=m.m(0,l.b+"-"+i)
if(h==null){l=A.bc(l,i)
l=Math.sqrt(l.a*l.b)}else l=h
r.push(l)}if(B.a.aa(r,new A.dJ()))return f
return A.kq(e,r)}},
T(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.bY()
s=e.b7()
if(s==null){for(r=e.ax,q=r.length,p=0;o=r.length,p<o;r.length===q||(0,A.aQ)(r),++p){n=r[p]
if(n.r==null){o=n.c
o===$&&A.al()
o.textContent="\u2013"}o=n.d
o===$&&A.al()
o.textContent="\u2013"
if(n.w==null){o=n.e
o===$&&A.al()
o.textContent=""}o=n.f
o===$&&A.al()
o.textContent=""
o.className=""}if(o===0)r="Pick at least one tom."
else r=e.z===B.j?"Enter a pitch between 30 and 1000 Hz for every tom.":"Enter a pitch for your smallest tom, between 30 and 1000 Hz."
e.x.textContent=r
return}m=A.k8(s)
for(r=e.ax,l=0;l<s.length;++l){k=s[l]
if(!(l<r.length))return A.d(r,l)
n=r[l]
if(n.r==null){q=n.c
q===$&&A.al()
o=k.c
q.textContent=(o<100?B.c.F(o,1):B.b.i(B.c.C(o)))+" Hz"}q=n.d
q===$&&A.al()
o=k.c
q.textContent=A.d6(o).gaI()
if(n.w==null){q=n.e
q===$&&A.al()
if(l<m.length){j=m[l]
j=j<0?A.hK(j)+" (next tom is higher)":A.hK(j)}else j="\u2014"
q.textContent=j}q=n.f
q===$&&A.al()
j=k.d
i=o>=j.a
h=i&&o<=j.b?"fits":"outside"
q.className=h
if(i&&o<=j.b)o="In range"
else o=o>j.b?"Above range":"Below range"
q.textContent=o}r=A.K(s)
g=new A.aj(s,r.h("u(1)").a(new A.dK()),r.h("aj<1>")).gj(0)
r=A.K(m)
f=new A.aj(m,r.h("u(1)").a(new A.dL()),r.h("aj<1>")).gj(0)
if(g===0)r="Every tom lands inside its starting range."
else{r=g===1?"tom lands":"toms land"
r=""+g+" "+r+" outside its starting range."}r=A.k([r],t.s)
if(f>0){q=f===1?"larger tom is":"larger toms are"
r.push(""+f+" "+q+" tuned higher than the tom above.")}if(g>0&&e.z!==B.j)r.push(e.bC(s))
e.x.textContent=B.a.ad(r," ")},
bC(a){var s,r,q
t.b2.a(a)
s=A.iI(a,1,null,A.K(a).c)
r=s.aa(0,new A.dF())
q=s.aa(0,new A.dG())
if(r&&!q)return"Try wider intervals, or a lower pitch on the smallest tom."
if(q&&!r)return"Try narrower intervals, or a higher pitch on the smallest tom."
return"Try a different pitch on the smallest tom, or adjust the intervals."},
az(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=t.X,a=A.cs(b,b)
try{b=A.fJ("ds-plan")
s=B.m.bn(b==null?"{}":b,null)
if(t.f.b(s))a=s}catch(r){if(A.aa(r) instanceof A.bl)return
else throw r}q=J.R(a,"toms")
if(t.j.b(q)){p=A.ix(t.U)
for(b=J.am(q),o=t.gy,n=t.h,m=t.Q,l=t.s;b.k();){k=A.k(A.n(b.gl()).split("-"),l)
if(k.length!==2)continue
j=A.iq(new A.aj(B.x,o.a(new A.dM(k)),n),m)
if(1>=k.length)return A.d(k,1)
i=A.bF(k[1],null)
if(j!=null&&i!=null&&B.a.G(j.d,i))p.p(0,new A.F(j,i))}if(p.a!==0){b=c.y
if(b.a>0){b.b=b.c=b.d=b.e=b.f=null
b.a=0
b.ar()}b.a9(0,p)}}c.z=A.iF(A.n(J.R(a,"spacing")))
h=J.R(a,"interval")
if(A.d5(h)){b=h>=1&&h<=12
g=h}else{g=null
b=!1}if(b)c.Q=g
f=J.R(a,"top")
if(typeof f=="number")c.r.value=B.c.i(f)
e=J.R(a,"gaps")
b=t.f
if(b.b(e))e.D(0,new A.dN(c))
d=J.R(a,"free")
if(b.b(d))d.D(0,new A.dO(c))},
bY(){var s,r,q,p,o=this,n=A.cs(t.N,t.K),m=A.k([],t.s)
for(s=o.y,s=A.hi(s,s.r,s.$ti.c),r=s.$ti.c;s.k();){q=s.d
if(q==null)q=r.a(q)
m.push(q.a.b+"-"+q.b)}n.t(0,"toms",m)
n.t(0,"spacing",o.z.b)
n.t(0,"interval",o.Q)
p=A.cG(A.o(o.r.value))
if(p!=null)n.t(0,"top",p)
n.t(0,"gaps",o.as)
n.t(0,"free",o.at)
return A.f8("ds-plan",B.m.bp(n,null))}}
A.dR.prototype={
$0(){var s=this,r=s.a,q=s.c,p=s.d,o=r.y
if(A.b2(s.b.checked))o.p(0,new A.F(q,p))
else o.cq(0,new A.F(q,p))
r.aj()},
$S:0}
A.dS.prototype={
$0(){if(A.b2(this.b.checked))this.a.c_(this.c)},
$S:0}
A.dT.prototype={
$0(){var s=this.a,r=A.bF(A.o(s.e.value),null)
s.Q=r==null?5:r
s.T()},
$S:0}
A.dU.prototype={
$0(){var s=this.a
s.bg()
s.T()},
$S:0}
A.dQ.prototype={
$2(a,b){var s=t.U
return B.b.P(s.a(a).b,s.a(b).b)},
$S:9}
A.dP.prototype={
$0(){return this.a.Q},
$S:39}
A.dH.prototype={
$0(){var s,r=this,q=A.cG(A.o(r.b.value))
if(q!=null){s=r.c
r.a.at.t(0,s.a.b+"-"+s.b,q)}r.a.T()},
$S:0}
A.dI.prototype={
$0(){var s=this.a,r=s.bO(this.b),q=A.bF(A.o(this.c.value),null)
if(q==null)q=5
s.as.t(0,r,q)
s.T()},
$S:0}
A.dJ.prototype={
$1(a){A.b3(a)
return a<30||a>1000},
$S:3}
A.dK.prototype={
$1(a){var s,r
t.I.a(a)
s=a.d
r=a.c
return!(r>=s.a&&r<=s.b)},
$S:1}
A.dL.prototype={
$1(a){return A.b3(a)<0},
$S:3}
A.dF.prototype={
$1(a){t.I.a(a)
return a.c>a.d.b},
$S:1}
A.dG.prototype={
$1(a){t.I.a(a)
return a.c<a.d.a},
$S:1}
A.dM.prototype={
$1(a){var s
t.Q.a(a)
s=this.a
if(0>=s.length)return A.d(s,0)
return a.b===s[0]},
$S:10}
A.dN.prototype={
$2(a,b){if(A.d5(b)&&b>=1&&b<=12)this.a.as.t(0,A.n(a),b)},
$S:11}
A.dO.prototype={
$2(a,b){if(typeof b=="number")this.a.at.t(0,A.n(a),b)},
$S:11};(function aliases(){var s=J.aq.prototype
s.by=s.i})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u
s(J,"ju","is",42)
r(A,"jY","iL",4)
r(A,"jZ","iM",4)
r(A,"k_","iN",4)
q(A,"hI","jR",0)
r(A,"k2","jj",12)
p(A.cj.prototype,"gc4","Z",0)
var n
p(n=A.cM.prototype,"gbS","b9",0)
o(n,"gbI","bJ",36)
p(n,"gc0","aC",0)
p(A.cE.prototype,"gbT","T",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.f,null)
q(A.f,[A.fj,J.cl,A.bI,J.ay,A.b,A.be,A.w,A.dV,A.aC,A.by,A.aF,A.M,A.a8,A.aS,A.aH,A.ar,A.e7,A.dD,A.bj,A.c_,A.an,A.D,A.dw,A.bv,A.bw,A.bp,A.bU,A.cQ,A.cK,A.d1,A.a2,A.cV,A.d3,A.eA,A.cR,A.V,A.cT,A.ak,A.E,A.cS,A.d_,A.ed,A.bS,A.cY,A.aJ,A.r,A.cf,A.ch,A.ex,A.ej,A.bJ,A.ek,A.bl,A.B,A.d2,A.aY,A.dC,A.dB,A.dl,A.dy,A.N,A.cC,A.H,A.I,A.a1,A.cm,A.ag,A.dY,A.cj,A.cM,A.cZ,A.cE])
q(J.cl,[J.co,J.bn,J.br,J.bq,J.bs,J.aT,J.ao])
q(J.br,[J.aq,J.p,A.aW,A.bB])
q(J.aq,[J.cD,J.aE,J.ap])
r(J.cn,A.bI)
r(J.ds,J.p)
q(J.aT,[J.bm,J.cp])
q(A.b,[A.aZ,A.e,A.af,A.aj,A.aG,A.cP,A.d0])
r(A.c5,A.aZ)
r(A.bP,A.c5)
r(A.bf,A.bP)
q(A.w,[A.aU,A.ah,A.cq,A.cO,A.cH,A.cU,A.bu,A.cb,A.a6,A.bM,A.cN,A.bK,A.cg])
q(A.e,[A.Q,A.ae,A.bx,A.bR])
q(A.Q,[A.bL,A.a0,A.cX])
r(A.az,A.af)
q(A.a8,[A.b0,A.b1])
r(A.F,A.b0)
r(A.X,A.b1)
q(A.aS,[A.bh,A.a7])
q(A.ar,[A.bg,A.bZ])
r(A.bi,A.bg)
r(A.bD,A.ah)
q(A.an,[A.cd,A.ce,A.cL,A.eR,A.eT,A.eg,A.ef,A.eF,A.et,A.eV,A.f2,A.f3,A.dz,A.fb,A.eH,A.db,A.eZ,A.eP,A.f6,A.dW,A.f1,A.f0,A.f5,A.eW,A.e0,A.dZ,A.dg,A.e3,A.e4,A.dJ,A.dK,A.dL,A.dF,A.dG,A.dM])
q(A.cL,[A.cJ,A.aR])
q(A.D,[A.ad,A.bQ,A.cW])
r(A.bt,A.ad)
q(A.ce,[A.eS,A.eG,A.eL,A.eu,A.dA,A.ey,A.f4,A.eK,A.df,A.dh,A.dQ,A.dN,A.dO])
q(A.bB,[A.ct,A.aX])
q(A.aX,[A.bV,A.bX])
r(A.bW,A.bV)
r(A.bz,A.bW)
r(A.bY,A.bX)
r(A.bA,A.bY)
q(A.bz,[A.cu,A.cv])
q(A.bA,[A.cw,A.cx,A.cy,A.cz,A.cA,A.bC,A.cB])
r(A.c0,A.cU)
q(A.cd,[A.eh,A.ei,A.eB,A.el,A.ep,A.eo,A.en,A.em,A.es,A.er,A.eq,A.ee,A.eJ,A.dc,A.f_,A.eQ,A.f7,A.dX,A.fd,A.fc,A.eX,A.e_,A.e1,A.di,A.dj,A.dk,A.e5,A.e6,A.e2,A.dR,A.dS,A.dT,A.dU,A.dP,A.dH,A.dI])
r(A.bO,A.cT)
r(A.bT,A.bQ)
r(A.aI,A.bZ)
r(A.cr,A.bu)
r(A.dt,A.cf)
q(A.ch,[A.dv,A.du])
r(A.ew,A.ex)
q(A.a6,[A.bG,A.ck])
q(A.ej,[A.C,A.bk,A.a3])
s(A.c5,A.r)
s(A.bV,A.r)
s(A.bW,A.M)
s(A.bX,A.r)
s(A.bY,A.M)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",j:"double",O:"num",h:"String",u:"bool",B:"Null",m:"List",f:"Object",W:"Map",q:"JSObject"},mangledNames:{},types:["~()","u(ag)","~(@)","u(j)","~(~())","~(f?)","~(f?,f?)","B(@)","B(q)","a(+(C,a),+(C,a))","u(C)","~(@,@)","@(@)","B()","f?(f?)","h(h)","B(f,as)","C()","a(a,a)","u(H)","H()","u(h)","I()","u(a1)","a1()","u(a3)","a3()","~(a,@)","B(~())","B(f)","~(h)","B(@,as)","u(q)","~(q,f?)","~(q,j)","~(h,h,m<h>)","~(j)","B(f?)","h()","a()","@(h)","@(@,h)","a(@,@)","u(I)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.F&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.X&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.j5(v.typeUniverse,JSON.parse('{"cD":"aq","aE":"aq","ap":"aq","kE":"aW","p":{"m":["1"],"e":["1"],"q":[],"b":["1"]},"co":{"u":[],"t":[]},"bn":{"t":[]},"br":{"q":[]},"aq":{"q":[]},"cn":{"bI":[]},"ds":{"p":["1"],"m":["1"],"e":["1"],"q":[],"b":["1"]},"ay":{"y":["1"]},"aT":{"j":[],"O":[],"ac":["O"]},"bm":{"j":[],"a":[],"O":[],"ac":["O"],"t":[]},"cp":{"j":[],"O":[],"ac":["O"],"t":[]},"ao":{"h":[],"ac":["h"],"dE":[],"t":[]},"aZ":{"b":["2"]},"be":{"y":["2"]},"bP":{"r":["2"],"m":["2"],"aZ":["1","2"],"e":["2"],"b":["2"]},"bf":{"bP":["1","2"],"r":["2"],"m":["2"],"aZ":["1","2"],"e":["2"],"b":["2"],"r.E":"2","b.E":"2"},"aU":{"w":[]},"e":{"b":["1"]},"Q":{"e":["1"],"b":["1"]},"bL":{"Q":["1"],"e":["1"],"b":["1"],"Q.E":"1","b.E":"1"},"aC":{"y":["1"]},"af":{"b":["2"],"b.E":"2"},"az":{"af":["1","2"],"e":["2"],"b":["2"],"b.E":"2"},"by":{"y":["2"]},"a0":{"Q":["2"],"e":["2"],"b":["2"],"Q.E":"2","b.E":"2"},"aj":{"b":["1"],"b.E":"1"},"aF":{"y":["1"]},"F":{"b0":[],"a8":[]},"X":{"b1":[],"a8":[]},"aS":{"W":["1","2"]},"bh":{"aS":["1","2"],"W":["1","2"]},"aG":{"b":["1"],"b.E":"1"},"aH":{"y":["1"]},"a7":{"aS":["1","2"],"W":["1","2"]},"bg":{"ar":["1"],"cI":["1"],"e":["1"],"b":["1"]},"bi":{"bg":["1"],"ar":["1"],"cI":["1"],"e":["1"],"b":["1"]},"bD":{"ah":[],"w":[]},"cq":{"w":[]},"cO":{"w":[]},"c_":{"as":[]},"an":{"aA":[]},"cd":{"aA":[]},"ce":{"aA":[]},"cL":{"aA":[]},"cJ":{"aA":[]},"aR":{"aA":[]},"cH":{"w":[]},"ad":{"D":["1","2"],"fl":["1","2"],"W":["1","2"],"D.K":"1","D.V":"2"},"ae":{"e":["1"],"b":["1"],"b.E":"1"},"bv":{"y":["1"]},"bx":{"e":["1"],"b":["1"],"b.E":"1"},"bw":{"y":["1"]},"bt":{"ad":["1","2"],"D":["1","2"],"fl":["1","2"],"W":["1","2"],"D.K":"1","D.V":"2"},"b0":{"a8":[]},"b1":{"a8":[]},"bp":{"iD":[],"dE":[]},"bU":{"bH":[],"aV":[]},"cP":{"b":["bH"],"b.E":"bH"},"cQ":{"y":["bH"]},"cK":{"aV":[]},"d0":{"b":["aV"],"b.E":"aV"},"d1":{"y":["aV"]},"aW":{"q":[],"ff":[],"t":[]},"bB":{"q":[]},"ct":{"fg":[],"q":[],"t":[]},"aX":{"S":["1"],"q":[]},"bz":{"r":["j"],"m":["j"],"S":["j"],"e":["j"],"q":[],"b":["j"],"M":["j"]},"bA":{"r":["a"],"m":["a"],"S":["a"],"e":["a"],"q":[],"b":["a"],"M":["a"]},"cu":{"dd":[],"r":["j"],"m":["j"],"S":["j"],"e":["j"],"q":[],"b":["j"],"M":["j"],"t":[],"r.E":"j"},"cv":{"de":[],"r":["j"],"m":["j"],"S":["j"],"e":["j"],"q":[],"b":["j"],"M":["j"],"t":[],"r.E":"j"},"cw":{"dn":[],"r":["a"],"m":["a"],"S":["a"],"e":["a"],"q":[],"b":["a"],"M":["a"],"t":[],"r.E":"a"},"cx":{"dp":[],"r":["a"],"m":["a"],"S":["a"],"e":["a"],"q":[],"b":["a"],"M":["a"],"t":[],"r.E":"a"},"cy":{"dq":[],"r":["a"],"m":["a"],"S":["a"],"e":["a"],"q":[],"b":["a"],"M":["a"],"t":[],"r.E":"a"},"cz":{"e9":[],"r":["a"],"m":["a"],"S":["a"],"e":["a"],"q":[],"b":["a"],"M":["a"],"t":[],"r.E":"a"},"cA":{"ea":[],"r":["a"],"m":["a"],"S":["a"],"e":["a"],"q":[],"b":["a"],"M":["a"],"t":[],"r.E":"a"},"bC":{"eb":[],"r":["a"],"m":["a"],"S":["a"],"e":["a"],"q":[],"b":["a"],"M":["a"],"t":[],"r.E":"a"},"cB":{"ec":[],"r":["a"],"m":["a"],"S":["a"],"e":["a"],"q":[],"b":["a"],"M":["a"],"t":[],"r.E":"a"},"cU":{"w":[]},"c0":{"ah":[],"w":[]},"V":{"w":[]},"bO":{"cT":["1"]},"E":{"aB":["1"]},"bQ":{"D":["1","2"],"W":["1","2"]},"bT":{"bQ":["1","2"],"D":["1","2"],"W":["1","2"],"D.K":"1","D.V":"2"},"bR":{"e":["1"],"b":["1"],"b.E":"1"},"bS":{"y":["1"]},"aI":{"ar":["1"],"h3":["1"],"cI":["1"],"e":["1"],"b":["1"]},"aJ":{"y":["1"]},"D":{"W":["1","2"]},"ar":{"cI":["1"],"e":["1"],"b":["1"]},"bZ":{"ar":["1"],"cI":["1"],"e":["1"],"b":["1"]},"cW":{"D":["h","@"],"W":["h","@"],"D.K":"h","D.V":"@"},"cX":{"Q":["h"],"e":["h"],"b":["h"],"Q.E":"h","b.E":"h"},"bu":{"w":[]},"cr":{"w":[]},"j":{"O":[],"ac":["O"]},"a":{"O":[],"ac":["O"]},"m":{"e":["1"],"b":["1"]},"O":{"ac":["O"]},"bH":{"aV":[]},"h":{"ac":["h"],"dE":[]},"cb":{"w":[]},"ah":{"w":[]},"a6":{"w":[]},"bG":{"w":[]},"ck":{"w":[]},"bM":{"w":[]},"cN":{"w":[]},"bK":{"w":[]},"cg":{"w":[]},"bJ":{"w":[]},"d2":{"as":[]},"aY":{"iH":[]},"dq":{"m":["a"],"e":["a"],"b":["a"]},"ec":{"m":["a"],"e":["a"],"b":["a"]},"eb":{"m":["a"],"e":["a"],"b":["a"]},"dn":{"m":["a"],"e":["a"],"b":["a"]},"e9":{"m":["a"],"e":["a"],"b":["a"]},"dp":{"m":["a"],"e":["a"],"b":["a"]},"ea":{"m":["a"],"e":["a"],"b":["a"]},"dd":{"m":["j"],"e":["j"],"b":["j"]},"de":{"m":["j"],"e":["j"],"b":["j"]}}'))
A.j4(v.typeUniverse,JSON.parse('{"c5":2,"aX":1,"bZ":1,"cf":2,"ch":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.a9
return{n:s("V"),J:s("ff"),d:s("fg"),r:s("ac<@>"),Q:s("C"),x:s("e<@>"),C:s("w"),B:s("dd"),q:s("de"),Z:s("aA"),Y:s("a7<a,+(j,j,h)>"),D:s("I"),E:s("dn"),k:s("dp"),gj:s("dq"),V:s("b<@>"),e:s("p<I>"),O:s("p<q>"),G:s("p<f>"),c:s("p<ag>"),L:s("p<+(h,h)>"),s:s("p<h>"),A:s("p<cZ>"),u:s("p<j>"),b:s("p<@>"),t:s("p<a>"),a6:s("p<f?>"),a:s("p<O>"),bT:s("p<~()>"),T:s("bn"),m:s("q"),W:s("ap"),p:s("S<@>"),cl:s("m<q>"),b2:s("m<ag>"),dy:s("m<h>"),j:s("m<@>"),f:s("W<@,@>"),dv:s("a0<h,h>"),w:s("H"),P:s("B"),K:s("f"),I:s("ag"),gT:s("kF"),bQ:s("+()"),U:s("+(C,a)"),dP:s("+(f?,f?,f?)"),cz:s("bH"),ec:s("a1"),dJ:s("a3"),l:s("as"),N:s("h"),dG:s("h(h)"),dm:s("t"),eK:s("ah"),h7:s("e9"),bv:s("ea"),go:s("eb"),gc:s("ec"),ak:s("aE"),h:s("aj<C>"),_:s("E<@>"),hg:s("bT<f?,f?>"),y:s("u"),gy:s("u(C)"),al:s("u(f)"),i:s("j"),z:s("@"),fO:s("@()"),v:s("@(f)"),R:s("@(f,as)"),S:s("a"),eH:s("aB<B>?"),an:s("q?"),bM:s("m<@>?"),X:s("f?"),dk:s("h?"),F:s("ak<@,@>?"),g:s("cY?"),fQ:s("u?"),cD:s("j?"),h6:s("a?"),cg:s("O?"),o:s("O"),H:s("~"),M:s("~()"),cA:s("~(h,@)"),as:s("~(a,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.a0=J.cl.prototype
B.a=J.p.prototype
B.b=J.bm.prototype
B.c=J.aT.prototype
B.d=J.ao.prototype
B.a1=J.ap.prototype
B.a2=J.br.prototype
B.K=J.cD.prototype
B.A=J.aE.prototype
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

B.m=new A.dt()
B.t=new A.dV()
B.i=new A.ed()
B.n=new A.d2()
B.ab=s([18,20,22,24,26],t.t)
B.a8=s([14,16,18,20],t.a)
B.o=new A.C("Bass drum (kick)",B.ab,22,B.a8,18,3,"kick")
B.a5=s([10,12,13,14],t.t)
B.aj=s([3.5,4,5,5.5,6,6.5,7,8],t.a)
B.f=new A.C("Snare",B.a5,14,B.aj,5.5,0,"snare")
B.a7=s([14,16,18],t.t)
B.a6=s([12,13,14,16],t.a)
B.p=new A.C("Floor tom",B.a7,16,B.a6,14,2,"floorTom")
B.aa=s([8,10,12,13],t.t)
B.a9=s([6,7,8,9,10],t.a)
B.h=new A.C("Rack tom",B.aa,12,B.a9,8,1,"rackTom")
B.a3=new A.du(null)
B.a4=new A.dv(null)
B.bi=new A.bk(0,"wood")
B.r=s(["lm","g4m"],t.s)
B.au=new A.H("maple","Maple","Warm and balanced: an even spread of lows and highs with slightly boosted mids. The all-rounder.",B.r)
B.av=new A.H("birch","Birch","Brighter and more focused than maple, with a crisp, dry \u201cpop\u201d on the attack. A studio favorite.",B.r)
B.aA=new A.H("mahogany","Mahogany","Warm and dark: robust lows, mellow highs, and less projection than birch. A vintage feel.",B.r)
B.aC=new A.H("oak","Oak","Dry and punchy with strong projection and a solid low-mid.",B.r)
B.ag=s(["g4m","md"],t.s)
B.aw=new A.H("walnut","Walnut","Warm and rounded, with an even spread of lows, mids and highs and a darker, vintage character.",B.ag)
B.bj=new A.bk(1,"synthetic")
B.ai=s(["md","lm"],t.s)
B.ay=new A.H("acrylic","Acrylic","Strong, focused attack and plenty of projection. Sources disagree on whether it reads bright or warm; acrylic kicks often want some damping.",B.ai)
B.bk=new A.bk(2,"metal")
B.I=s(["thomannShell","yamahaSnare"],t.s)
B.ax=new A.H("steel","Steel","Bright and cutting with long sustain and a penetrating rimshot. Heavier and more aggressive than aluminum.",B.I)
B.aD=new A.H("aluminum","Aluminum","Dry, bright and crisp with a short sustain, so it often needs little or no damping.",B.I)
B.an=s(["yamahaSnare","thomannShell"],t.s)
B.at=new A.H("brass","Brass","Dry and articulate with darker overtones, a sharp crack and more low end than most metals.",B.an)
B.H=s(["thomannShell"],t.s)
B.aB=new A.H("bronze","Bronze","Dark and warm, more subdued than brass or steel. Increasingly popular on high-end snares.",B.H)
B.az=new A.H("copper","Copper","Warmer, with more low end than brass or steel. A long-time orchestral choice.",B.H)
B.u=s([B.au,B.av,B.aA,B.aC,B.aw,B.ay,B.ax,B.aD,B.at,B.aB,B.az],A.a9("p<H>"))
B.k=s(["C","C\u266f","D","D\u266f","E","F","F\u266f","G","G\u266f","A","A\u266f","B"],t.s)
B.q=s(["dcp","gc"],t.s)
B.R=new A.I("1c","Single-ply, coated","Open and warm with lots of overtones and touch sensitivity. The classic for jazz and for brushes.",B.q)
B.a_=new A.I("1x","Single-ply, clear","The most open and bright: maximum sustain and overtones, very responsive to dynamics.",B.q)
B.Z=new A.I("2c","Two-ply, coated","Deeper and more controlled with shorter sustain, plus the durability of two plies.",B.q)
B.V=new A.I("2x","Two-ply, clear","Punchy and fat with a bright attack and a controlled ring. Built for heavy hitting.",B.q)
B.E=s(["gc"],t.s)
B.Y=new A.I("ring","With a muffling ring or built-in control","Fewer overtones and a shorter ring, so the drum needs less extra damping.",B.E)
B.D=s([B.R,B.a_,B.Z,B.V,B.Y],t.e)
B.v=s(["Unison","Minor second","Major second","Minor third","Major third","Perfect fourth","Tritone","Perfect fifth","Minor sixth","Major sixth","Minor seventh","Major seventh","Octave"],t.s)
B.ae=s([],t.O)
B.af=s([],t.s)
B.ah=s(["gc","dcp"],t.s)
B.X=new A.I("1x","Single-ply, clear","The usual choice: thin enough to let the shell resonate and carry the note.",B.ah)
B.ad=s(["dcp"],t.s)
B.W=new A.I("1c","Single-ply, coated","Like clear single-ply with slightly softened overtones.",B.ad)
B.T=new A.I("2","Two-ply","Rarely recommended underneath: the extra mass tends to choke the shell\u2019s tone.",B.E)
B.ac=s(["daddario"],t.s)
B.U=new A.I("port","Kick front head with a port hole","Releases air so the kick sounds punchier with less boom, and gives a microphone a way in.",B.ac)
B.al=s(["yamahaSnare"],t.s)
B.S=new A.I("snare","Snare-side (very thin)","Made thin so the snare wires respond to the lightest notes.",B.al)
B.F=s([B.X,B.W,B.T,B.U,B.S],t.e)
B.l=new A.a3("Same interval","Every tom the same interval below the one above it.",0,"same")
B.z=new A.a3("Custom per gap","Choose the interval between each pair of neighbouring toms.",1,"perGap")
B.j=new A.a3("Free tuning","Type each tom\u2019s pitch. Nothing is enforced; the planner shows the intervals you end up with.",2,"free")
B.G=s([B.l,B.z,B.j],A.a9("p<a3>"))
B.ak=s(["yamaha2"],t.s)
B.aS=new A.a1("same","Same pitch","The most sustain and the steadiest pitch. Yamaha suggests it as the starting point for toms and kick.",B.ak)
B.J=s(["yamaha2","thomannTuning"],t.s)
B.aT=new A.a1("higher","Resonant head higher","Less sustain and a pitch that bends as the note dies away. Sources disagree on which way it bends, so listen on your own drum.",B.J)
B.aR=new A.a1("lower","Resonant head lower","Less sustain with a slight pitch bend, often heard as a \u201cdropping\u201d tom. As above, sources disagree on the direction; trust your ears.",B.J)
B.w=s([B.aS,B.aT,B.aR],A.a9("p<a1>"))
B.x=s([B.f,B.h,B.p,B.o],A.a9("p<C>"))
B.e=s(["tuner","guide","planner","howto"],t.s)
B.am=s(["yamahaSnare","md"],t.s)
B.aF={dtchart:0,tunebot:1,yamaha2:2,yamahaSnare:3,thomannShell:4,thomannTuning:5,lm:6,g4m:7,md:8,dcp:9,gc:10,daddario:11}
B.b4=new A.N("Drum Tuning: frequency chart","https://drum-tuning.com/drum-tuning-chart/")
B.b2=new A.N("Tune-Bot: artist tuning settings","https://tune-bot.com/artists/")
B.aV=new A.N("Yamaha Hub: discover the sonic possibilities of your drums, part 2","https://hub.yamaha.com/drums/d-how-to/discover-the-sonic-possibilities-of-your-drums-part-2/")
B.b0=new A.N("Yamaha Hub: the five different kinds of snare drums","https://hub.yamaha.com/drums/stage/the-five-different-kinds-of-snare-drums-explained")
B.b_=new A.N("Thomann: snare drum shell materials","https://www.thomannmusic.com/onlineexpert_page_snare_drums_shell_materials.html")
B.b1=new A.N("Thomann: drumheads and drum tuning","https://www.thomann.co.uk/onlineexpert_page_drumheads_drum_tuning.html")
B.b3=new A.N("Long & McQuade: a guide to the sound of different shell materials","https://www.long-mcquade.com/blog/576/The-Heart-of-Your-Drums-A-Guide-to-the-Sound-of-Different-Shell-Materials.htm")
B.aW=new A.N("Gear4music: your guide to shell materials","https://www.gear4music.com/blog/what-wood-sounds-good-your-guide-to-shell-materials")
B.aY=new A.N("Modern Drummer: what you need to know about drum shells","https://www.moderndrummer.com/2015/02/need-know-drum-shells/")
B.aX=new A.N("Drum Center of Portsmouth: coated vs clear drum heads","https://drumcenternh.com/blogs/news/coated-drum-heads-vs-clear-drum-heads-which-is-best")
B.aZ=new A.N("Guitar Center: best drum heads guide","https://www.guitarcenter.com/riffs/buying-guides/drums/best-drum-heads-guide")
B.b5=new A.N("D'Addario: how to choose a bass drumhead","https://www.daddario.com/en-de/blogs/percussion/how-to-choose-a-bass-drumhead")
B.y=new A.bh(B.aF,[B.b4,B.b2,B.aV,B.b0,B.b_,B.b1,B.b3,B.aW,B.aY,B.aX,B.aZ,B.b5],A.a9("bh<h,N>"))
B.aL=new A.X(170,250,"dtchart")
B.ap=new A.a7([14,B.aL],t.Y)
B.aK=new A.X(130,180,"dtchart")
B.aJ=new A.X(100,150,"dtchart")
B.aQ=new A.X(90,140,"dtchart")
B.aq=new A.a7([10,B.aK,12,B.aJ,13,B.aQ],t.Y)
B.aP=new A.X(80,120,"dtchart")
B.aO=new A.X(65,100,"dtchart")
B.ao=new A.a7([14,B.aP,16,B.aO],t.Y)
B.aN=new A.X(55,80,"dtchart")
B.aM=new A.X(50,70,"dtchart")
B.ar=new A.a7([20,B.aN,22,B.aM],t.Y)
B.as=new A.a7([B.f,B.ap,B.h,B.aq,B.p,B.ao,B.o,B.ar],A.a9("a7<C,W<a,+(j,j,h)>>"))
B.aG=new A.F(B.h,10)
B.aH=new A.F(B.h,12)
B.aI=new A.F(B.p,16)
B.aE={a:0,an:1,the:2,and:3,but:4,or:5,nor:6,for:7,so:8,yet:9,as:10,at:11,by:12,in:13,of:14,on:15,per:16,to:17,up:18,via:19,vs:20,from:21,into:22,onto:23,over:24,than:25,upon:26,with:27}
B.aU=new A.bi(B.aE,28,A.a9("bi<h>"))
B.b6=A.a5("ff")
B.b7=A.a5("fg")
B.b8=A.a5("dd")
B.b9=A.a5("de")
B.ba=A.a5("dn")
B.bb=A.a5("dp")
B.bc=A.a5("dq")
B.bd=A.a5("f")
B.be=A.a5("e9")
B.bf=A.a5("ea")
B.bg=A.a5("eb")
B.bh=A.a5("ec")})();(function staticFields(){$.ev=null
$.U=A.k([],t.G)
$.h5=null
$.fW=null
$.fV=null
$.hN=null
$.hH=null
$.hT=null
$.eN=null
$.eU=null
$.fH=null
$.ez=A.k([],A.a9("p<m<f>?>"))
$.b5=null
$.c7=null
$.c8=null
$.fB=!1
$.x=B.i})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"kD","hY",()=>A.eO("_$dart_dartClosure"))
s($,"kC","fP",()=>A.eO("_$dart_dartClosure_dartJSInterop"))
s($,"kT","i8",()=>A.k([new J.cn()],A.a9("p<bI>")))
s($,"kH","hZ",()=>A.ai(A.e8({
toString:function(){return"$receiver$"}})))
s($,"kI","i_",()=>A.ai(A.e8({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"kJ","i0",()=>A.ai(A.e8(null)))
s($,"kK","i1",()=>A.ai(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kN","i4",()=>A.ai(A.e8(void 0)))
s($,"kO","i5",()=>A.ai(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kM","i3",()=>A.ai(A.hd(null)))
s($,"kL","i2",()=>A.ai(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"kQ","i7",()=>A.ai(A.hd(void 0)))
s($,"kP","i6",()=>A.ai(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"kR","fQ",()=>A.iK())
s($,"kS","fe",()=>A.d7(B.bd))
s($,"kU","fR",()=>{var r,q,p,o=[]
for(r=1;r<=12;++r){q=B.v[r]
p=r===1?"":"s"
o.push(new A.cm(r,q+" ("+r+" semitone"+p+")"))}return A.fo(o,A.a9("cm"))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.aW,SharedArrayBuffer:A.aW,ArrayBufferView:A.bB,DataView:A.ct,Float32Array:A.cu,Float64Array:A.cv,Int16Array:A.cw,Int32Array:A.cx,Int8Array:A.cy,Uint16Array:A.cz,Uint32Array:A.cA,Uint8ClampedArray:A.bC,CanvasPixelArray:A.bC,Uint8Array:A.cB})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aX.$nativeSuperclassTag="ArrayBufferView"
A.bV.$nativeSuperclassTag="ArrayBufferView"
A.bW.$nativeSuperclassTag="ArrayBufferView"
A.bz.$nativeSuperclassTag="ArrayBufferView"
A.bX.$nativeSuperclassTag="ArrayBufferView"
A.bY.$nativeSuperclassTag="ArrayBufferView"
A.bA.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.km
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()