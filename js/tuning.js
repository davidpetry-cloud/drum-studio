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
if(a[b]!==s){A.jW(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.k(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.fc(b)
return new s(c,this)}:function(){if(s===null)s=A.fc(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.fc(a).prototype
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
fh(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fe(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.ff==null){A.jG()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.fN("Return interceptor for "+A.n(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.e8
if(o==null)o=$.e8=A.er(n)
p=q[o]}if(p!=null)return p
p=A.jM(a)
if(p!=null)return p
if(typeof a=="function")return B.a0
s=Object.getPrototypeOf(a)
if(s==null)return B.J
if(s===Object.prototype)return B.J
if(typeof q=="function"){o=$.e8
if(o==null)o=$.e8=A.er(n)
Object.defineProperty(q,o,{value:B.z,enumerable:false,writable:true,configurable:true})
return B.z}return B.z},
hV(a,b){var s=t.d
return J.hG(s.a(a),s.a(b))},
fz(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hW(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.fz(r))break;++b}return b},
hX(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.d(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.fz(q))break}return b},
aK(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.be.prototype
return J.cf.prototype}if(typeof a=="string")return J.aA.prototype
if(a==null)return J.bf.prototype
if(typeof a=="boolean")return J.ce.prototype
if(Array.isArray(a))return J.m.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
if(typeof a=="symbol")return J.bi.prototype
if(typeof a=="bigint")return J.bg.prototype
return a}if(a instanceof A.f)return a
return J.fe(a)},
c_(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(Array.isArray(a))return J.m.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
if(typeof a=="symbol")return J.bi.prototype
if(typeof a=="bigint")return J.bg.prototype
return a}if(a instanceof A.f)return a
return J.fe(a)},
fd(a){if(a==null)return a
if(Array.isArray(a))return J.m.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
if(typeof a=="symbol")return J.bi.prototype
if(typeof a=="bigint")return J.bg.prototype
return a}if(a instanceof A.f)return a
return J.fe(a)},
jC(a){if(typeof a=="number")return J.aP.prototype
if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof A.f))return J.aV.prototype
return a},
ak(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aK(a).M(a,b)},
Q(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.jJ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c_(a).l(a,b)},
hG(a,b){return J.jC(a).L(a,b)},
cU(a,b){return J.fd(a).C(a,b)},
a3(a){return J.aK(a).gt(a)},
fp(a){return J.c_(a).gu(a)},
hH(a){return J.c_(a).gH(a)},
al(a){return J.fd(a).gv(a)},
av(a){return J.c_(a).gj(a)},
hI(a){return J.aK(a).gA(a)},
hJ(a,b,c){return J.fd(a).S(a,b,c)},
b7(a){return J.aK(a).i(a)},
cb:function cb(){},
ce:function ce(){},
bf:function bf(){},
bh:function bh(){},
ao:function ao(){},
ct:function ct(){},
aV:function aV(){},
an:function an(){},
bg:function bg(){},
bi:function bi(){},
m:function m(a){this.$ti=a},
cd:function cd(){},
dc:function dc(a){this.$ti=a},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aP:function aP(){},
be:function be(){},
cf:function cf(){},
aA:function aA(){}},A={eR:function eR(){},
fB(a){return new A.aQ("Field '"+a+"' has been assigned during initialization.")},
hZ(a){return new A.aQ("Field '"+a+"' has not been initialized.")},
hY(a){return new A.aQ("Field '"+a+"' has already been initialized.")},
aq(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
f0(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fb(a,b,c){return a},
fg(a){var s,r
for(s=$.V.length,r=0;r<s;++r)if(a===$.V[r])return!0
return!1},
i9(a,b,c,d){A.eY(b,"start")
return new A.bB(a,b,c,d.h("bB<0>"))},
i2(a,b,c,d){if(t.r.b(a))return new A.ax(a,b,c.h("@<0>").n(d).h("ax<1,2>"))
return new A.ab(a,b,c.h("@<0>").n(d).h("ab<1,2>"))},
db(){return new A.bA("No element")},
aW:function aW(){},
b8:function b8(a,b){this.a=a
this.$ti=b},
bE:function bE(){},
b9:function b9(a,b){this.a=a
this.$ti=b},
aQ:function aQ(a){this.a=a},
dF:function dF(){},
e:function e(){},
O:function O(){},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aB:function aB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ab:function ab(a,b,c){this.a=a
this.b=b
this.$ti=c},
ax:function ax(a,b,c){this.a=a
this.b=b
this.$ti=c},
bo:function bo(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ac:function ac(a,b,c){this.a=a
this.b=b
this.$ti=c},
ag:function ag(a,b,c){this.a=a
this.b=b
this.$ti=c},
aC:function aC(a,b,c){this.a=a
this.b=b
this.$ti=c},
K:function K(){},
bV:function bV(){},
ht(a){var s=A.hs(a)
if(s!=null)return s
return"minified:"+a},
jJ(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b7(a)
return s},
bu(a){var s,r=$.fF
if(r==null)r=$.fF=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bv(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.d(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
cw(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.f.bd(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
cv(a){var s,r,q,p
if(a instanceof A.f)return A.U(A.b4(a),null)
s=J.aK(a)
if(s===B.a_||s===B.a1||t.cr.b(a)){r=B.A(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.U(A.b4(a),null)},
fG(a){var s,r,q
if(a==null||typeof a=="number"||A.el(a))return J.b7(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.am)return a.i(0)
if(a instanceof A.a6)return a.b5(!0)
s=$.hF()
for(r=0;r<1;++r){q=s[r].c7(a)
if(q!=null)return q}return"Instance of '"+A.cv(a)+"'"},
J(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.b2(s,10)|55296)>>>0,s&1023|56320)}throw A.c(A.bx(a,0,1114111,null,null))},
i3(a){var s=a.$thrownJsError
if(s==null)return null
return A.b3(s)},
fH(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.y(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
d(a,b){if(a==null)J.av(a)
throw A.c(A.ep(a,b))},
ep(a,b){var s,r="index"
if(!A.cR(b))return new A.a4(!0,b,r,null)
s=J.av(a)
if(b<0||b>=s)return A.d7(b,s,a,r)
return A.fI(b,r)},
jo(a){return new A.a4(!0,a,null,null)},
c(a){return A.y(a,new Error())},
y(a,b){var s
if(a==null)a=new A.ae()
b.dartException=a
s=A.jY
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
jY(){return J.b7(this.dartException)},
fl(a,b){throw A.y(a,b==null?new Error():b)},
c0(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.fl(A.iM(a,b,c),s)},
iM(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.bC("'"+s+"': Cannot "+o+" "+l+k+n)},
aM(a){throw A.c(A.R(a))},
af(a){var s,r,q,p,o,n
a=A.hr(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.k([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.dL(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
dM(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
fM(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
eS(a,b){var s=b==null,r=s?null:b.method
return new A.cg(a,r,s?null:b.receiver)},
aj(a){var s
if(a==null)return new A.dn(a)
if(a instanceof A.bb){s=a.a
return A.au(a,s==null?A.bX(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.au(a,a.dartException)
return A.jm(a)},
au(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jm(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.b2(r,16)&8191)===10)switch(q){case 438:return A.au(a,A.eS(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.au(a,new A.bt())}}if(a instanceof TypeError){p=$.hv()
o=$.hw()
n=$.hx()
m=$.hy()
l=$.hB()
k=$.hC()
j=$.hA()
$.hz()
i=$.hE()
h=$.hD()
g=p.G(s)
if(g!=null)return A.au(a,A.eS(A.r(s),g))
else{g=o.G(s)
if(g!=null){g.method="call"
return A.au(a,A.eS(A.r(s),g))}else if(n.G(s)!=null||m.G(s)!=null||l.G(s)!=null||k.G(s)!=null||j.G(s)!=null||m.G(s)!=null||i.G(s)!=null||h.G(s)!=null){A.r(s)
return A.au(a,new A.bt())}}return A.au(a,new A.cC(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bz()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.au(a,new A.a4(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bz()
return a},
b3(a){var s
if(a instanceof A.bb)return a.b
if(a==null)return new A.bP(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bP(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
cT(a){if(a==null)return J.a3(a)
if(typeof a=="object")return A.bu(a)
return J.a3(a)},
js(a){if(typeof a=="number")return B.b.gt(a)
if(a instanceof A.cP)return A.bu(a)
if(a instanceof A.a6)return a.gt(a)
return A.cT(a)},
hj(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.q(0,a[s],a[r])}return b},
jA(a,b){var s,r=a.length
for(s=0;s<r;++s)b.p(0,a[s])
return b},
iX(a,b,c,d,e,f){t.Z.a(a)
switch(A.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(new A.dY("Unsupported number of arguments for wrapped closure"))},
b2(a,b){var s=a.$identity
if(!!s)return s
s=A.jt(a,b)
a.$identity=s
return s},
jt(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.iX)},
hQ(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cy().constructor.prototype):Object.create(new A.aN(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.fv(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.hM(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.fv(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
hM(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.hK)}throw A.c("Error in functionType of tearoff")},
hN(a,b,c,d){var s=A.fu
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
fv(a,b,c,d){if(c)return A.hP(a,b,d)
return A.hN(b.length,d,a,b)},
hO(a,b,c,d){var s=A.fu,r=A.hL
switch(b?-1:a){case 0:throw A.c(new A.cx("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
hP(a,b,c){var s,r
if($.fs==null)$.fs=A.fr("interceptor")
if($.ft==null)$.ft=A.fr("receiver")
s=b.length
r=A.hO(s,c,a,b)
return r},
fc(a){return A.hQ(a)},
hK(a,b){return A.bU(v.typeUniverse,A.b4(a.a),b)},
fu(a){return a.a},
hL(a){return a.b},
fr(a){var s,r,q,p=new A.aN("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.cV("Field name "+a+" not found.",null))},
er(a){return v.getIsolateTag(a)},
jM(a){var s,r,q,p,o,n=A.r($.hk.$1(a)),m=$.eq[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ex[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.eh($.hf.$2(a,n))
if(q!=null){m=$.eq[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ex[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.ez(s)
$.eq[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ex[n]=s
return s}if(p==="-"){o=A.ez(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.ho(a,s)
if(p==="*")throw A.c(A.fN(n))
if(v.leafTags[n]===true){o=A.ez(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.ho(a,s)},
ho(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.fh(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ez(a){return J.fh(a,!1,null,!!a.$iS)},
jO(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.ez(s)
else return J.fh(s,c,null,null)},
jG(){if(!0===$.ff)return
$.ff=!0
A.jH()},
jH(){var s,r,q,p,o,n,m,l
$.eq=Object.create(null)
$.ex=Object.create(null)
A.jF()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hq.$1(o)
if(n!=null){m=A.jO(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jF(){var s,r,q,p,o,n,m=B.K()
m=A.b1(B.L,A.b1(B.M,A.b1(B.B,A.b1(B.B,A.b1(B.N,A.b1(B.O,A.b1(B.P(B.A),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.hk=new A.eu(p)
$.hf=new A.ev(o)
$.hq=new A.ew(n)},
b1(a,b){return a(b)||b},
jv(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
jy(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
hr(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
fk(a,b,c){var s=A.jV(a,b,c)
return s},
jV(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.hr(b),"g"),A.jy(c))},
C:function C(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
aO:function aO(){},
ba:function ba(a,b,c){this.a=a
this.b=b
this.$ti=c},
aD:function aD(a,b){this.a=a
this.$ti=b},
bJ:function bJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a5:function a5(a,b){this.a=a
this.$ti=b},
by:function by(){},
dL:function dL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bt:function bt(){},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(a){this.a=a},
dn:function dn(a){this.a=a},
bb:function bb(a,b){this.a=a
this.b=b},
bP:function bP(a){this.a=a
this.b=null},
am:function am(){},
c3:function c3(){},
c4:function c4(){},
cz:function cz(){},
cy:function cy(){},
aN:function aN(a,b){this.a=a
this.b=b},
cx:function cx(a){this.a=a},
a9:function a9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dg:function dg(a,b){this.a=a
this.b=b
this.c=null},
aa:function aa(a,b){this.a=a
this.$ti=b},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bn:function bn(a,b){this.a=a
this.$ti=b},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bj:function bj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eu:function eu(a){this.a=a},
ev:function ev(a){this.a=a},
ew:function ew(a){this.a=a},
a6:function a6(){},
aY:function aY(){},
aZ:function aZ(){},
aH(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.ep(b,a))},
aR:function aR(){},
br:function br(){},
cj:function cj(){},
aS:function aS(){},
bp:function bp(){},
bq:function bq(){},
ck:function ck(){},
cl:function cl(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
bs:function bs(){},
cr:function cr(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
bN:function bN(){},
eZ(a,b){var s=b.c
return s==null?b.c=A.bS(a,"az",[b.x]):s},
fJ(a){var s=a.w
if(s===6||s===7)return A.fJ(a.x)
return s===11||s===12},
i5(a){return a.as},
a7(a){return A.ef(v.typeUniverse,a,!1)},
aI(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.aI(a1,s,a3,a4)
if(r===s)return a2
return A.fW(a1,r,!0)
case 7:s=a2.x
r=A.aI(a1,s,a3,a4)
if(r===s)return a2
return A.fV(a1,r,!0)
case 8:q=a2.y
p=A.b0(a1,q,a3,a4)
if(p===q)return a2
return A.bS(a1,a2.x,p)
case 9:o=a2.x
n=A.aI(a1,o,a3,a4)
m=a2.y
l=A.b0(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.f4(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.b0(a1,j,a3,a4)
if(i===j)return a2
return A.fX(a1,k,i)
case 11:h=a2.x
g=A.aI(a1,h,a3,a4)
f=a2.y
e=A.jj(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.fU(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.b0(a1,d,a3,a4)
o=a2.x
n=A.aI(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.f5(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.c2("Attempted to substitute unexpected RTI kind "+a0))}},
b0(a,b,c,d){var s,r,q,p,o=b.length,n=A.eg(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aI(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
jk(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.eg(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aI(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
jj(a,b,c,d){var s,r=b.a,q=A.b0(a,r,c,d),p=b.b,o=A.b0(a,p,c,d),n=b.c,m=A.jk(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cI()
s.a=q
s.b=o
s.c=m
return s},
k(a,b){a[v.arrayRti]=b
return a},
hh(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.jE(s)
return a.$S()}return null},
jI(a,b){var s
if(A.fJ(b))if(a instanceof A.am){s=A.hh(a)
if(s!=null)return s}return A.b4(a)},
b4(a){if(a instanceof A.f)return A.F(a)
if(Array.isArray(a))return A.M(a)
return A.f8(J.aK(a))},
M(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
F(a){var s=a.$ti
return s!=null?s:A.f8(a)},
f8(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.iT(a,s)},
iT(a,b){var s=a instanceof A.am?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.iz(v.typeUniverse,s.name)
b.$ccache=r
return r},
jE(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.ef(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jD(a){return A.aJ(A.F(a))},
fa(a){var s
if(a instanceof A.a6)return A.jz(a.$r,a.an())
s=a instanceof A.am?A.hh(a):null
if(s!=null)return s
if(t.bW.b(a))return J.hI(a).a
if(Array.isArray(a))return A.M(a)
return A.b4(a)},
aJ(a){var s=a.r
return s==null?a.r=new A.cP(a):s},
jz(a,b){var s,r,q=b,p=q.length
if(p===0)return t.cD
if(0>=p)return A.d(q,0)
s=A.bU(v.typeUniverse,A.fa(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.d(q,r)
s=A.fZ(v.typeUniverse,s,A.fa(q[r]))}return A.bU(v.typeUniverse,s,a)},
a2(a){return A.aJ(A.ef(v.typeUniverse,a,!1))},
iS(a){var s=this
s.b=A.jh(s)
return s.b(a)},
jh(a){var s,r,q,p,o
if(a===t.K)return A.j2
if(A.aL(a))return A.j6
s=a.w
if(s===6)return A.iQ
if(s===1)return A.h9
if(s===7)return A.iY
r=A.jg(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.aL)){a.f="$i"+q
if(q==="j")return A.j0
if(a===t.m)return A.j_
return A.j5}}else if(s===10){p=A.jv(a.x,a.y)
o=p==null?A.h9:p
return o==null?A.bX(o):o}return A.iO},
jg(a){if(a.w===8){if(a===t.S)return A.cR
if(a===t.i||a===t.o)return A.j1
if(a===t.N)return A.j4
if(a===t.y)return A.el}return null},
iR(a){var s=this,r=A.iN
if(A.aL(s))r=A.iE
else if(s===t.K)r=A.bX
else if(A.b5(s)){r=A.iP
if(s===t.a3)r=A.iD
else if(s===t.aD)r=A.eh
else if(s===t.cG)r=A.iB
else if(s===t.ae)r=A.h2
else if(s===t.a2)r=A.iC
else if(s===t.aQ)r=A.at}else if(s===t.S)r=A.Z
else if(s===t.N)r=A.r
else if(s===t.y)r=A.cQ
else if(s===t.o)r=A.h1
else if(s===t.i)r=A.bW
else if(s===t.m)r=A.q
s.a=r
return s.a(a)},
iO(a){var s=this
if(a==null)return A.b5(s)
return A.jK(v.typeUniverse,A.jI(a,s),s)},
iQ(a){if(a==null)return!0
return this.x.b(a)},
j5(a){var s,r=this
if(a==null)return A.b5(r)
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.aK(a)[s]},
j0(a){var s,r=this
if(a==null)return A.b5(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.aK(a)[s]},
j_(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.f)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
h8(a){if(typeof a=="object"){if(a instanceof A.f)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
iN(a){var s=this
if(a==null){if(A.b5(s))return a}else if(s.b(a))return a
throw A.y(A.h4(a,s),new Error())},
iP(a){var s=this
if(a==null||s.b(a))return a
throw A.y(A.h4(a,s),new Error())},
h4(a,b){return new A.bQ("TypeError: "+A.fO(a,A.U(b,null)))},
fO(a,b){return A.c8(a)+": type '"+A.U(A.fa(a),null)+"' is not a subtype of type '"+b+"'"},
Y(a,b){return new A.bQ("TypeError: "+A.fO(a,b))},
iY(a){var s=this
return s.x.b(a)||A.eZ(v.typeUniverse,s).b(a)},
j2(a){return a!=null},
bX(a){if(a!=null)return a
throw A.y(A.Y(a,"Object"),new Error())},
j6(a){return!0},
iE(a){return a},
h9(a){return!1},
el(a){return!0===a||!1===a},
cQ(a){if(!0===a)return!0
if(!1===a)return!1
throw A.y(A.Y(a,"bool"),new Error())},
iB(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.y(A.Y(a,"bool?"),new Error())},
bW(a){if(typeof a=="number")return a
throw A.y(A.Y(a,"double"),new Error())},
iC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.y(A.Y(a,"double?"),new Error())},
cR(a){return typeof a=="number"&&Math.floor(a)===a},
Z(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.y(A.Y(a,"int"),new Error())},
iD(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.y(A.Y(a,"int?"),new Error())},
j1(a){return typeof a=="number"},
h1(a){if(typeof a=="number")return a
throw A.y(A.Y(a,"num"),new Error())},
h2(a){if(typeof a=="number")return a
if(a==null)return a
throw A.y(A.Y(a,"num?"),new Error())},
j4(a){return typeof a=="string"},
r(a){if(typeof a=="string")return a
throw A.y(A.Y(a,"String"),new Error())},
eh(a){if(typeof a=="string")return a
if(a==null)return a
throw A.y(A.Y(a,"String?"),new Error())},
q(a){if(A.h8(a))return a
throw A.y(A.Y(a,"JSObject"),new Error())},
at(a){if(a==null)return a
if(A.h8(a))return a
throw A.y(A.Y(a,"JSObject?"),new Error())},
hc(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.U(a[q],b)
return s},
jb(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.hc(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.U(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
h5(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
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
if(l===8){p=A.jl(a.x)
o=a.y
return o.length>0?p+("<"+A.hc(o,b)+">"):p}if(l===10)return A.jb(a,b)
if(l===11)return A.h5(a,b,null)
if(l===12)return A.h5(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
jl(a){var s=A.hs(a)
if(s!=null)return s
return"minified:"+a},
iA(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
iz(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.ef(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bT(a,5,"#")
q=A.eg(s)
for(p=0;p<s;++p)q[p]=r
o=A.bS(a,b,q)
n[b]=o
return o}else return m},
iy(a,b){return A.h_(a.tR,b)},
ix(a,b){return A.h_(a.eT,b)},
ef(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fY(a,null,b,!1)
r.set(b,s)
return s},
bU(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fY(a,b,c,!0)
q.set(c,r)
return r},
fZ(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.f4(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
fY(a,b,c,d){return A.ip(A.ii(a,b,c,d))},
ar(a,b){b.a=A.iR
b.b=A.iS
return b},
bT(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.a0(null,null)
s.w=b
s.as=c
r=A.ar(a,s)
a.eC.set(c,r)
return r},
fW(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.iv(a,b,r,c)
a.eC.set(r,s)
return s},
iv(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.aL(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.b5(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.a0(null,null)
q.w=6
q.x=b
q.as=c
return A.ar(a,q)},
fV(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.it(a,b,r,c)
a.eC.set(r,s)
return s},
it(a,b,c,d){var s,r
if(d){s=b.w
if(A.aL(b)||b===t.K)return b
else if(s===1)return A.bS(a,"az",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.a0(null,null)
r.w=7
r.x=b
r.as=c
return A.ar(a,r)},
iw(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.a0(null,null)
s.w=13
s.x=b
s.as=q
r=A.ar(a,s)
a.eC.set(q,r)
return r},
bR(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
is(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bS(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bR(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.a0(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ar(a,r)
a.eC.set(p,q)
return q},
f4(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bR(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.a0(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ar(a,o)
a.eC.set(q,n)
return n},
fX(a,b,c){var s,r,q="+"+(b+"("+A.bR(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.a0(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ar(a,s)
a.eC.set(q,r)
return r},
fU(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bR(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bR(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.is(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.a0(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ar(a,p)
a.eC.set(r,o)
return o},
f5(a,b,c,d){var s,r=b.as+("<"+A.bR(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.iu(a,b,c,r,d)
a.eC.set(r,s)
return s},
iu(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.eg(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.aI(a,b,r,0)
m=A.b0(a,c,r,0)
return A.f5(a,n,m,c!==m)}}l=new A.a0(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ar(a,l)},
ii(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ip(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.ik(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.fS(a,r,l,k,!1)
else if(q===46)r=A.fS(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aG(a.u,a.e,k.pop()))
break
case 94:k.push(A.iw(a.u,k.pop()))
break
case 35:k.push(A.bT(a.u,5,"#"))
break
case 64:k.push(A.bT(a.u,2,"@"))
break
case 126:k.push(A.bT(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.im(a,k)
break
case 38:A.il(a,k)
break
case 63:p=a.u
k.push(A.fW(p,A.aG(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fV(p,A.aG(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.ij(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fT(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.iq(a.u,a.e,o)
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
return A.aG(a.u,a.e,m)},
ik(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
fS(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.iA(s,o.x)[p]
if(n==null)A.fl('No "'+p+'" in "'+A.i5(o)+'"')
d.push(A.bU(s,o,n))}else d.push(p)
return m},
im(a,b){var s,r=a.u,q=A.fR(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bS(r,p,q))
else{s=A.aG(r,a.e,p)
switch(s.w){case 11:b.push(A.f5(r,s,q,a.n))
break
default:b.push(A.f4(r,s,q))
break}}},
ij(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.fR(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.aG(p,a.e,o)
q=new A.cI()
q.a=s
q.b=n
q.c=m
b.push(A.fU(p,r,q))
return
case-4:b.push(A.fX(p,b.pop(),s))
return
default:throw A.c(A.c2("Unexpected state under `()`: "+A.n(o)))}},
il(a,b){var s=b.pop()
if(0===s){b.push(A.bT(a.u,1,"0&"))
return}if(1===s){b.push(A.bT(a.u,4,"1&"))
return}throw A.c(A.c2("Unexpected extended operation "+A.n(s)))},
fR(a,b){var s=b.splice(a.p)
A.fT(a.u,a.e,s)
a.p=b.pop()
return s},
aG(a,b,c){if(typeof c=="string")return A.bS(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.io(a,b,c)}else return c},
fT(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aG(a,b,c[s])},
iq(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aG(a,b,c[s])},
io(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.c2("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.c2("Bad index "+c+" for "+b.i(0)))},
jK(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.D(a,b,null,c,null)
r.set(c,s)}return s},
D(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.aL(d))return!0
s=b.w
if(s===4)return!0
if(A.aL(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.D(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.D(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.D(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.D(a,b.x,c,d,e))return!1
return A.D(a,A.eZ(a,b),c,d,e)}if(s===6)return A.D(a,p,c,d,e)&&A.D(a,b.x,c,d,e)
if(q===7){if(A.D(a,b,c,d.x,e))return!0
return A.D(a,b,c,A.eZ(a,d),e)}if(q===6)return A.D(a,b,c,p,e)||A.D(a,b,c,d.x,e)
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
if(!A.D(a,j,c,i,e)||!A.D(a,i,e,j,c))return!1}return A.h7(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.h7(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.iZ(a,b,c,d,e)}if(o&&q===10)return A.j3(a,b,c,d,e)
return!1},
h7(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.D(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.D(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.D(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.D(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.D(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
iZ(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bU(a,b,r[o])
return A.h0(a,p,null,c,d.y,e)}return A.h0(a,b.y,null,c,d.y,e)},
h0(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.D(a,b[s],d,e[s],f))return!1
return!0},
j3(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.D(a,r[s],c,q[s],e))return!1
return!0},
b5(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.aL(a))if(s!==6)r=s===7&&A.b5(a.x)
return r},
aL(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
h_(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
eg(a){return a>0?new Array(a):v.typeUniverse.sEA},
a0:function a0(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cI:function cI(){this.c=this.b=this.a=null},
cP:function cP(a){this.a=a},
cH:function cH(){},
bQ:function bQ(a){this.a=a},
ia(){var s,r,q
if(self.scheduleImmediate!=null)return A.jp()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.b2(new A.dU(s),1)).observe(r,{childList:true})
return new A.dT(s,r,q)}else if(self.setImmediate!=null)return A.jq()
return A.jr()},
ib(a){self.scheduleImmediate(A.b2(new A.dV(t.M.a(a)),0))},
ic(a){self.setImmediate(A.b2(new A.dW(t.M.a(a)),0))},
id(a){t.M.a(a)
A.ir(0,a)},
ir(a,b){var s=new A.ed()
s.bj(a,b)
return s},
j8(a){return new A.cE(new A.B($.x,a.h("B<0>")),a.h("cE<0>"))},
iH(a,b){a.$2(0,null)
b.b=!0
return b.a},
h3(a,b){A.iI(a,b)},
iG(a,b){b.aC(a)},
iF(a,b){b.aD(A.aj(a),A.b3(a))},
iI(a,b){var s,r,q=new A.ei(b),p=new A.ej(b)
if(a instanceof A.B)a.b4(q,p,t.z)
else{s=t.z
if(a instanceof A.B)a.bc(q,p,s)
else{r=new A.B($.x,t._)
r.a=8
r.c=a
r.b4(q,p,s)}}},
jn(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(q){e=q
d=c}}}}(a,1),r=$.x
return r.aZ(r,t.aS.a(new A.eo(s)),t.H,t.S,t.z)},
cW(a){var s
if(t.C.b(a)){s=a.ga2()
if(s!=null)return s}return B.m},
iU(a,b){var s=$.x
if(s===B.h)return null
s.bv(s,a,b)
return null},
iV(a,b){if($.x!==B.h)A.iU(a,b)
if(b==null)if(t.C.b(a)){b=a.ga2()
if(b==null){A.fH(a,B.m)
b=B.m}}else b=B.m
else if(t.C.b(a))A.fH(a,b)
return new A.W(a,b)},
f1(a,b,c){var s,r,q,p,o,n={},m=n.a=a
for(s=t._;r=m.a,(r&4)!==0;m=a){a=s.a(m.c)
n.a=a}if(m===b){s=A.i7()
b.af(new A.W(new A.a4(!0,m,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=m.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=m
m.aX(p)
return}if(!c)if(b.c==null)m=(s&16)===0||q!==0
else m=!1
else m=!0
if(m){p=b.a6()
b.a4(n.a)
A.aX(b,p)
return}b.a^=2
o=b.b
o.V(o,new A.e1(n,b))},
aX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=e.a=a
for(s=t.n,r=t.F;;){q={}
p=d.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(d.c)
d=d.b
d.aT(d,m.a,m.b)}return}q.a=b
l=b.a
for(d=b;l!=null;d=l,l=k){d.a=null
A.aX(e.a,d)
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
if((d&15)===8)new A.e5(q,e,n).$0()
else if(o){if((d&1)!==0)new A.e4(q,j).$0()}else if((d&2)!==0)new A.e3(e,q).$0()
if(h!=null)$.x=h
d=q.c
if(d instanceof A.B){p=q.a.$ti
p=p.h("az<2>").b(d)||!p.y[1].b(d)}else p=!1
if(p){g=q.a.b
if((d.a&24)!==0){f=r.a(g.c)
g.c=null
b=g.a7(f)
g.a=d.a&30|g.a&1
g.c=d.c
e.a=d
continue}else A.f1(d,g,!0)
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
hb(a,b){var s=t.Q
if(s.b(a))return b.aZ(b,s.a(a),t.z,t.K,t.l)
s=t.v
if(s.b(a))return b.b_(b,s.a(a),t.z,t.K)
throw A.c(A.fq(a,"onError",u.c))},
j9(){var s,r
for(s=$.b_;s!=null;s=$.b_){$.bZ=null
r=s.b
$.b_=r
if(r==null)$.bY=null
s.a.$0()}},
ji(){$.f9=!0
try{A.j9()}finally{$.bZ=null
$.f9=!1
if($.b_!=null)$.fn().$1(A.hg())}},
hd(a){var s=new A.cF(a),r=$.bY
if(r==null){$.b_=$.bY=s
if(!$.f9)$.fn().$1(A.hg())}else $.bY=r.b=s},
jf(a){var s,r,q,p=$.b_
if(p==null){A.hd(a)
$.bZ=$.bY
return}s=new A.cF(a)
r=$.bZ
if(r==null){s.b=p
$.b_=$.bZ=s}else{q=r.b
s.b=q
$.bZ=r.b=s
if(q==null)$.bY=s}},
k3(a,b){A.fb(a,"stream",t.K)
return new A.cN(b.h("cN<0>"))},
jd(a,b){A.jf(new A.em(a,b))},
je(a,b){if(B.h!==a)b=a.bQ(b,t.H)
A.hd(b)},
dU:function dU(a){this.a=a},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a){this.a=a},
dW:function dW(a){this.a=a},
ed:function ed(){},
ee:function ee(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=!1
this.$ti=b},
ei:function ei(a){this.a=a},
ej:function ej(a){this.a=a},
eo:function eo(a){this.a=a},
W:function W(a,b){this.a=a
this.b=b},
cG:function cG(){},
bD:function bD(a,b){this.a=a
this.$ti=b},
ah:function ah(a,b,c,d,e){var _=this
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
dZ:function dZ(a,b){this.a=a
this.b=b},
e2:function e2(a,b){this.a=a
this.b=b},
e1:function e1(a,b){this.a=a
this.b=b},
e0:function e0(a,b){this.a=a
this.b=b},
e_:function e_(a,b){this.a=a
this.b=b},
e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a,b){this.a=a
this.b=b},
e7:function e7(a){this.a=a},
e4:function e4(a,b){this.a=a
this.b=b},
e3:function e3(a,b){this.a=a
this.b=b},
cF:function cF(a){this.a=a
this.b=null},
cN:function cN(a){this.$ti=a},
dR:function dR(){},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a,b){this.a=a
this.b=b},
fP(a,b){var s=a[b]
return s===a?null:s},
fQ(a,b,c){if(c==null)a[b]=a
else a[b]=c},
ie(){var s=Object.create(null)
A.fQ(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
eU(a,b,c){return b.h("@<0>").n(c).h("eT<1,2>").a(A.hj(a,new A.a9(b.h("@<0>").n(c).h("a9<1,2>"))))},
ci(a,b){return new A.a9(a.h("@<0>").n(b).h("a9<1,2>"))},
i_(a){return new A.aE(a.h("aE<0>"))},
i0(a,b){return b.h("fC<0>").a(A.jA(a,new A.aE(b.h("aE<0>"))))},
f3(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
f2(a,b,c){var s=new A.aF(a,b,c.h("aF<0>"))
s.c=a.e
return s},
hT(a,b){var s=J.al(a.a)
if(new A.aC(s,a.b,a.$ti.h("aC<1>")).k())return s.gm()
return null},
eX(a){var s,r
if(A.fg(a))return"{...}"
s=new A.aU("")
try{r={}
B.a.p($.V,a)
s.a+="{"
r.a=!0
a.D(0,new A.dk(r,s))
s.a+="}"}finally{if(0>=$.V.length)return A.d($.V,-1)
$.V.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bF:function bF(){},
bI:function bI(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
bG:function bG(a,b){this.a=a
this.$ti=b},
bH:function bH(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aE:function aE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cL:function cL(a){this.a=a
this.c=this.b=null},
aF:function aF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
o:function o(){},
A:function A(){},
dk:function dk(a,b){this.a=a
this.b=b},
aT:function aT(){},
bO:function bO(){},
ja(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aj(r)
q=A.fx(String(s),null)
throw A.c(q)}q=A.ek(p)
return q},
ek(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.cJ(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.ek(a[s])
return a},
fA(a,b,c){return new A.bk(a,b)},
iL(a){return a.cf()},
ig(a,b){return new A.e9(a,[],A.ju())},
ih(a,b,c){var s,r=new A.aU(""),q=A.ig(r,b)
q.ad(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
cJ:function cJ(a,b){this.a=a
this.b=b
this.c=null},
cK:function cK(a){this.a=a},
c5:function c5(){},
c7:function c7(){},
bk:function bk(a,b){this.a=a
this.b=b},
ch:function ch(a,b){this.a=a
this.b=b},
dd:function dd(){},
df:function df(a){this.b=a},
de:function de(a){this.a=a},
ea:function ea(){},
eb:function eb(a,b){this.a=a
this.b=b},
e9:function e9(a,b,c){this.c=a
this.a=b
this.b=c},
jx(a){var s=A.cw(a)
if(s!=null)return s
throw A.c(A.fx("Invalid double",a))},
hR(a,b){a=A.y(a,new Error())
if(a==null)a=A.bX(a)
a.stack=b.i(0)
throw a},
dh(a,b,c){var s,r,q
if(a<0||a>4294967295)A.fl(A.bx(a,0,4294967295,"length",null))
s=A.k(new Array(a),c.h("m<0>"))
s.$flags=1
r=s
if(a!==0&&b!=null)for(q=0;q<r.length;++q)r[q]=b
return r},
i1(a,b,c){var s,r,q=A.k([],c.h("m<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.aM)(a),++r)B.a.p(q,c.a(a[r]))
q.$flags=1
return q},
eV(a,b){var s,r
if(Array.isArray(a))return A.k(a.slice(0),b.h("m<0>"))
s=A.k([],b.h("m<0>"))
for(r=J.al(a);r.k();)B.a.p(s,r.gm())
return s},
eW(a,b){var s=A.i1(a,!1,b)
s.$flags=3
return s},
fL(a,b,c){var s=J.al(b)
if(!s.k())return a
if(c.length===0){do a+=A.n(s.gm())
while(s.k())}else{a+=A.n(s.gm())
while(s.k())a=a+c+A.n(s.gm())}return a},
i7(){return A.b3(new Error())},
c8(a){if(typeof a=="number"||A.el(a)||a==null)return J.b7(a)
if(typeof a=="string")return JSON.stringify(a)
return A.fG(a)},
hS(a,b){A.fb(a,"error",t.K)
A.fb(b,"stackTrace",t.l)
A.hR(a,b)},
c2(a){return new A.c1(a)},
cV(a,b){return new A.a4(!1,null,b,a)},
fq(a,b,c){return new A.a4(!0,a,b,c)},
fI(a,b){return new A.bw(null,null,!0,a,b,"Value not in range")},
bx(a,b,c,d,e){return new A.bw(b,c,!0,a,d,"Invalid value")},
i4(a,b,c){if(0>a||a>c)throw A.c(A.bx(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.bx(b,a,c,"end",null))
return b}return c},
eY(a,b){if(a<0)throw A.c(A.bx(a,0,null,b,null))
return a},
d7(a,b,c,d){return new A.ca(b,!0,a,d,"Index out of range")},
cD(a){return new A.bC(a)},
fN(a){return new A.cB(a)},
fK(a){return new A.bA(a)},
R(a){return new A.c6(a)},
fx(a,b){return new A.bd(a,b)},
hU(a,b,c){var s,r
if(A.fg(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.k([],t.s)
B.a.p($.V,a)
try{A.j7(a,s)}finally{if(0>=$.V.length)return A.d($.V,-1)
$.V.pop()}r=A.fL(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
eP(a,b,c){var s,r
if(A.fg(a))return b+"..."+c
s=new A.aU(b)
B.a.p($.V,a)
try{r=s
r.a=A.fL(r.a,a,", ")}finally{if(0>=$.V.length)return A.d($.V,-1)
$.V.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
j7(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.k())return
s=A.n(l.gm())
B.a.p(b,s)
k+=s.length+2;++j}if(!l.k()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.k()){if(j<=4){B.a.p(b,A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.k();p=o,o=n){n=l.gm();++j
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
fD(a,b,c,d){var s
if(B.r===c){s=B.c.gt(a)
b=J.a3(b)
return A.f0(A.aq(A.aq($.eM(),s),b))}if(B.r===d){s=B.c.gt(a)
b=J.a3(b)
c=J.a3(c)
return A.f0(A.aq(A.aq(A.aq($.eM(),s),b),c))}s=B.c.gt(a)
b=J.a3(b)
c=J.a3(c)
d=J.a3(d)
d=A.f0(A.aq(A.aq(A.aq(A.aq($.eM(),s),b),c),d))
return d},
dX:function dX(){},
v:function v(){},
c1:function c1(a){this.a=a},
ae:function ae(){},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bw:function bw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ca:function ca(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bC:function bC(a){this.a=a},
cB:function cB(a){this.a=a},
bA:function bA(a){this.a=a},
c6:function c6(a){this.a=a},
bz:function bz(){},
dY:function dY(a){this.a=a},
bd:function bd(a,b){this.a=a
this.b=b},
b:function b(){},
I:function I(){},
f:function f(){},
cO:function cO(){},
aU:function aU(a){this.a=a},
dm:function dm(a){this.a=a},
h6(a){var s
if(typeof a=="function")throw A.c(A.cV("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.iJ,a)
s[$.fm()]=a
return s},
iJ(a,b,c){t.Z.a(a)
if(A.Z(c)>=1)return a.$1(b)
return a.$0()},
ha(a){return a==null||A.el(a)||typeof a=="number"||typeof a=="string"||t.E.b(a)||t.bX.b(a)||t.ca.b(a)||t.D.b(a)||t.c0.b(a)||t.k.b(a)||t.bk.b(a)||t.B.b(a)||t.q.b(a)||t.J.b(a)||t.W.b(a)},
jL(a){if(A.ha(a))return a
return new A.ey(new A.bI(t.dd)).$1(a)},
fi(a,b){var s=new A.B($.x,b.h("B<0>")),r=new A.bD(s,b.h("bD<0>"))
a.then(A.b2(new A.eD(r,b),1),A.b2(new A.eE(r),1))
return s},
ey:function ey(a){this.a=a},
eD:function eD(a,b){this.a=a
this.b=b},
eE:function eE(a){this.a=a},
cS(a){var s=69+12*(Math.log(a/440)/0.6931471805599453),r=B.b.B(s)
return new A.dl(r,B.b.B((s-r)*100))},
jU(a){var s,r,q,p=a.length
if(p===0)return 0
for(s=0,r=0;r<p;++r){q=a[r]
s+=q*q}return Math.sqrt(s/p)},
jQ(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1/b,f=Math.max(1,B.b.bW(a0/g)),e=a.length,d=Math.min(e-2,B.b.bR(c/g))
if(d<=f)return null
s=A.k([],t.u)
for(r=f,q=r;r<=d;++r){if(!(r>=0&&r<e))return A.d(a,r)
p=a[r]
p=isFinite(p)?p:-200
B.a.p(s,p)
if(!(q>=0&&q<e))return A.d(a,q)
o=a[q]
if(p>(isFinite(o)?o:-200))q=r}B.a.aJ(s)
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
hn(a){var s,r,q,p=A.eV(a,t.i)
B.a.aJ(p)
s=p.length
r=s/2|0
if((s&1)===1){if(!(r<s))return A.d(p,r)
p=p[r]}else{q=r-1
if(!(q>=0&&q<s))return A.d(p,q)
q=p[q]
if(!(r<s))return A.d(p,r)
p=(q+p[r])/2}return p},
dl:function dl(a,b){this.a=a
this.b=b},
d6:function d6(a){var _=this
_.a=0.02
_.e=null
_.f=0
_.r=a},
di:function di(a,b){this.a=a
this.b=b},
dj:function dj(){},
fw(a){return B.a.a0(B.w,new A.cX(a),new A.cY())},
b6(a,b){var s,r,q,p,o,n,m=B.ar.l(0,a),l=m.l(0,b)
if(t.b1.b(l))return new A.cs(l.a,l.b,null,l.c)
s=m.gE().c4(0,new A.eF(b))
r=m.l(0,s)
q=r.a
p=r.b
o=r.c
n=s/b
return new A.cs(B.b.I(q*n),B.b.I(p*n),s,o)},
jw(a,b){var s=a.r
if(Math.abs(b-s)<0.75)return"A common depth for a "+a.c.toLowerCase()+": a balance of attack and body."
return b<s?"Shallower than usual: tends toward a quicker, more cutting attack and a shorter, tighter sound.":"Deeper than usual: tends toward more body and low end, with a fuller, longer sound."},
jP(a){return B.a.a0(B.t,new A.eA(a),new A.eB())},
hl(a,b){return B.a.a0(a,new A.es(b),new A.et(a))},
jT(a){return B.a.a0(B.v,new A.eH(a),new A.eI())},
i6(a){return B.a.a0(B.F,new A.dG(a),new A.dH())},
hi(a){var s,r,q,p=Math.abs(a),o=B.b.B(p),n=B.b.B((p-o)*100),m=B.c.K(o,12),l=B.c.N(o,12),k=m===1?"Octave":""+m+" octaves"
if(m===0)s=B.u[l]
else s=l===0?k:k+" + "+B.u[l].toLowerCase()
r=Math.abs(n)
if(r<=2)return s
q=n>0?"+":"\u2212"
return s+" "+q+r+"\xa2"},
he(a){var s=A.eV(a,t.U)
B.a.ae(s,new A.en())
return s},
hp(a,b,c){var s,r,q,p,o,n=A.he(a),m=A.k([],t.c)
for(s=b,r=0;r<n.length;++r){if(r>0){q=r-1
p=c.length
if(q<p)o=c[q]
else o=p===0?5:B.a.gc1(c)
s*=Math.pow(2,-o/12)}if(!(r<n.length))return A.d(n,r)
q=n[r]
p=q.a
q=q.b
B.a.p(m,new A.ad(p,q,s,A.b6(p,q)))}return m},
jR(a,b){var s,r,q=A.he(a),p=A.k([],t.c),o=0
for(;;){s=q.length
if(!(o<s&&o<b.length))break
if(!(o<s))return A.d(q,o)
s=q[o]
r=s.a
s=s.b
if(!(o<b.length))return A.d(b,o)
p.push(new A.ad(r,s,b[o],A.b6(r,s)));++o}return p},
jB(a){var s,r,q,p=A.k([],t.u)
for(s=0;r=s+1,q=a.length,r<q;s=r){if(!(s<q))return A.d(a,s)
p.push(12*(Math.log(a[s].c/a[r].c)/0.6931471805599453))}return p},
L:function L(a,b){this.a=a
this.b=b},
z:function z(a,b,c,d,e,f,g){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.a=f
_.b=g},
cX:function cX(a){this.a=a},
cY:function cY(){},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eF:function eF(a){this.a=a},
bc:function bc(a,b){this.a=a
this.b=b},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
eA:function eA(a){this.a=a},
eB:function eB(){},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
es:function es(a){this.a=a},
et:function et(a){this.a=a},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eH:function eH(a){this.a=a},
eI:function eI(){},
a1:function a1(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=d},
dG:function dG(a){this.a=a},
dH:function dH(){},
cc:function cc(a,b){this.a=a
this.b=b},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
en:function en(){},
i(a,b){var s=A.at(A.q(v.G.document).getElementById(a))
s.toString
return b.a(s)},
u(a,b,c){var s=A.q(A.q(v.G.document).createElement(a))
if(b!=null)s.className=b
if(c!=null)s.textContent=c
return s},
P(a,b,c){return a.addEventListener(b,A.h6(new A.eC(c)))},
hm(a){var s,r,q,p,o=null
try{s=A.at(v.G.localStorage)
q=s
r=q==null?o:A.eQ(q,"getItem",a,o,t.X)
q=r!=null&&typeof r==="string"?A.r(r):o
return q}catch(p){return o}},
fj(a,b){var s,r,q
try{s=A.at(v.G.localStorage)
r=s
if(r!=null)A.eQ(r,"setItem",a,b,t.X)}catch(q){}},
jS(){var s,r,q,p,o,n=A.q(v.G.navigator).serviceWorker,m=t.m
if(!m.b(n))return
try{s=A.eQ(A.q(n),"register","sw.js",null,m)
m=A.fi(s,t.X)
r=new A.eG()
q=m.$ti
p=$.x
if(p!==B.h)r=A.hb(r,p)
m.a3(new A.ah(new A.B(p,q),2,null,r,q.h("ah<1,1>")))}catch(o){}},
jZ(){var s=v.G,r=A.at(A.q(s.document).getElementById("themeToggle")),q=A.q(A.q(s.document).documentElement)
if(r==null)return
s=new A.eL(q,r)
A.P(r,"click",new A.eK(q,s))
s.$0()},
eC:function eC(a){this.a=a},
eG:function eG(){},
eL:function eL(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b},
jN(){var s,r,q
A.jZ()
A.jS()
if(A.at(A.q(v.G.document).getElementById("guide"))==null)return
s=t.m
r=new A.c9(A.i("drum-type",s),A.i("drum-size",s),A.i("drum-depth",s),A.i("material",s),A.i("batter",s),A.i("reso",s),A.i("relation",s),A.i("range-title",s),A.i("range-low",s),A.i("range-med",s),A.i("range-high",s),A.i("range-scaled",s),A.i("notes",s),B.d,A.k([],t.bx))
r.a1()
q=t.u
new A.cA(r,A.i("mic-start",s),A.i("reading-hz",s),A.i("reading-note",s),A.i("needle",s),A.i("level",s),A.i("listen-state",s),A.i("sensitivity",s),A.i("lugs",s),A.i("lug-status",s),A.i("target-line",s),A.i("target-mark",s),A.i("tuner-status",s),new A.d6(A.k([],q)),A.k([],q)).a1()
q=t.N
new A.cu(A.i("plan-sizes",s),A.i("plan-spacing",s),A.i("plan-spacing-hint",s),A.i("plan-interval-row",s),A.i("plan-interval",s),A.i("plan-top-row",s),A.i("plan-top",s),A.i("plan-out",s),A.i("plan-summary",s),A.i0([B.aE,B.aF,B.aG],t.U),B.k,A.ci(q,t.S),A.ci(q,t.i),A.k([],t.A)).a1()
A.jc()},
f6(a){return a<100?B.b.F(a,1):B.c.i(B.b.B(a))},
as(a,b){var s,r,q,p
a.replaceChildren()
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.aM)(b),++r){q=b[r]
p=A.u("option",null,q.b)
p.setAttribute("value",q.a)
a.appendChild(p)}},
f7(a){return a===B.b.I(a)?""+B.b.B(a)+'"':A.n(a)+'"'},
iK(a){var s,r,q,p,o,n=A.u("p","cite","Sources: ")
for(s=a.length,r=!0,q=0;q<s;++q){p=B.x.l(0,a[q])
if(p==null)continue
if(!r)n.appendChild(A.u("span",null," \xb7 "))
o=A.u("a",null,p.a)
o.setAttribute("href",p.b)
o.setAttribute("rel","noopener")
o.setAttribute("target","_blank")
n.appendChild(o)
r=!1}return n},
jc(){var s,r,q,p,o=A.i("sources",t.m)
for(s=B.x.gbe(),s=s.gv(s);s.k();){r=s.gm()
q=A.u("li",null,null)
p=A.u("a",null,r.a)
p.setAttribute("href",r.b)
p.setAttribute("rel","noopener")
p.setAttribute("target","_blank")
q.appendChild(p)
o.appendChild(q)}},
c9:function c9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
d3:function d3(a){this.a=a},
d4:function d4(a){this.a=a},
d5:function d5(a){this.a=a},
d0:function d0(){},
d2:function d2(){},
d1:function d1(a){this.a=a},
cA:function cA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
dJ:function dJ(a){this.a=a},
dK:function dK(a){this.a=a},
dI:function dI(a){this.a=a},
cM:function cM(a,b){var _=this
_.a=a
_.b=b
_.f=_.e=_.d=_.c=$
_.w=_.r=null},
cu:function cu(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a){this.a=a},
dE:function dE(a){this.a=a},
dA:function dA(){},
dz:function dz(a){this.a=a},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dp:function dp(){},
dq:function dq(){},
dw:function dw(a){this.a=a},
dx:function dx(a){this.a=a},
dy:function dy(a){this.a=a},
hs(a){return v.mangledGlobalNames[a]},
jW(a){throw A.y(A.fB(a),new Error())},
ai(){throw A.y(A.hZ(""),new Error())},
eJ(){throw A.y(A.hY(""),new Error())},
jX(){throw A.y(A.fB(""),new Error())},
fy(a,b,c,d,e,f){var s
if(d==null)return a[b](c)
else{s=a[b](c,d)
return s}},
eQ(a,b,c,d,e){return e.a(A.fy(a,b,c,d,null,null))}},B={}
var w=[A,J,B]
var $={}
A.eR.prototype={}
J.cb.prototype={
M(a,b){return a===b},
gt(a){return A.bu(a)},
i(a){return"Instance of '"+A.cv(a)+"'"},
gA(a){return A.aJ(A.f8(this))}}
J.ce.prototype={
i(a){return String(a)},
gt(a){return a?519018:218159},
gA(a){return A.aJ(t.y)},
$ip:1,
$iw:1}
J.bf.prototype={
M(a,b){return null==b},
i(a){return"null"},
gt(a){return 0},
$ip:1}
J.bh.prototype={$it:1}
J.ao.prototype={
gt(a){return 0},
i(a){return String(a)}}
J.ct.prototype={}
J.aV.prototype={}
J.an.prototype={
i(a){var s=a[$.hu()]
if(s==null)s=a[$.fm()]
if(s==null)return this.bi(a)
return"JavaScript function for "+J.b7(s)},
$iay:1}
J.bg.prototype={
gt(a){return 0},
i(a){return String(a)}}
J.bi.prototype={
gt(a){return 0},
i(a){return String(a)}}
J.m.prototype={
p(a,b){A.M(a).c.a(b)
a.$flags&1&&A.c0(a,29)
a.push(b)},
c6(a,b){var s
a.$flags&1&&A.c0(a,"removeAt",1)
s=a.length
if(b>=s)throw A.c(A.fI(b,null))
return a.splice(b,1)[0]},
a8(a,b){var s
A.M(a).h("b<1>").a(b)
a.$flags&1&&A.c0(a,"addAll",2)
if(Array.isArray(b)){this.bl(a,b)
return}for(s=J.al(b);s.k();)a.push(s.gm())},
bl(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.c(A.R(a))
for(r=0;r<s;++r)a.push(b[r])},
aB(a){a.$flags&1&&A.c0(a,"clear","clear")
a.length=0},
S(a,b,c){var s=A.M(a)
return new A.ac(a,s.n(c).h("1(2)").a(b),s.h("@<1>").n(c).h("ac<1,2>"))},
c0(a,b){var s,r=A.dh(a.length,"",t.N)
for(s=0;s<a.length;++s)this.q(r,s,A.n(a[s]))
return r.join(b)},
a0(a,b,c){var s,r,q,p=A.M(a)
p.h("w(1)").a(b)
p.h("1()?").a(c)
s=a.length
for(r=0;r<s;++r){q=a[r]
if(b.$1(q))return q
if(a.length!==s)throw A.c(A.R(a))}if(c!=null)return c.$0()
throw A.c(A.db())},
C(a,b){if(!(b>=0&&b<a.length))return A.d(a,b)
return a[b]},
ga_(a){if(a.length>0)return a[0]
throw A.c(A.db())},
gc1(a){var s=a.length
if(s>0)return a[s-1]
throw A.c(A.db())},
a9(a,b){var s,r
A.M(a).h("w(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.c(A.R(a))}return!1},
bU(a,b){var s,r
A.M(a).h("w(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.c(A.R(a))}return!0},
ae(a,b){var s,r,q,p,o,n=A.M(a)
n.h("a(1,1)?").a(b)
a.$flags&2&&A.c0(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.iW()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.cb()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.b2(b,2))
if(p>0)this.bF(a,p)},
aJ(a){return this.ae(a,null)},
bF(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
Y(a,b){var s
for(s=0;s<a.length;++s)if(J.ak(a[s],b))return!0
return!1},
gu(a){return a.length===0},
gH(a){return a.length!==0},
i(a){return A.eP(a,"[","]")},
gv(a){return new J.aw(a,a.length,A.M(a).h("aw<1>"))},
gt(a){return A.bu(a)},
gj(a){return a.length},
l(a,b){if(!(b>=0&&b<a.length))throw A.c(A.ep(a,b))
return a[b]},
q(a,b,c){A.M(a).c.a(c)
a.$flags&2&&A.c0(a)
if(!(b>=0&&b<a.length))throw A.c(A.ep(a,b))
a[b]=c},
$ie:1,
$ib:1,
$ij:1}
J.cd.prototype={
c7(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.cv(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.dc.prototype={}
J.aw.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.aM(q)
throw A.c(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iH:1}
J.aP.prototype={
L(a,b){var s
A.h1(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gab(b)
if(this.gab(a)===s)return 0
if(this.gab(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gab(a){return a===0?1/a<0:a<0},
bR(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.c(A.cD(""+a+".ceil()"))},
bW(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.c(A.cD(""+a+".floor()"))},
B(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.cD(""+a+".round()"))},
I(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
aa(a,b,c){if(this.L(b,c)>0)throw A.c(A.jo(b))
if(this.L(a,b)<0)return b
if(this.L(a,c)>0)return c
return a},
F(a,b){var s
if(b>20)throw A.c(A.bx(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gab(a))return"-"+s
return s},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
N(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
K(a,b){return(a|0)===a?a/b|0:this.bO(a,b)},
bO(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.cD("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
b2(a,b){var s
if(a>0)s=this.bL(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bL(a,b){return b>31?0:a>>>b},
gA(a){return A.aJ(t.o)},
$ia8:1,
$ih:1,
$iN:1}
J.be.prototype={
gA(a){return A.aJ(t.S)},
$ip:1,
$ia:1}
J.cf.prototype={
gA(a){return A.aJ(t.i)},
$ip:1}
J.aA.prototype={
T(a,b,c){return a.substring(b,A.i4(b,c,a.length))},
bd(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.d(p,0)
if(p.charCodeAt(0)===133){s=J.hW(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.d(p,r)
q=p.charCodeAt(r)===133?J.hX(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
L(a,b){var s
A.r(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
i(a){return a},
gt(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gA(a){return A.aJ(t.N)},
gj(a){return a.length},
$ip:1,
$ia8:1,
$ifE:1,
$il:1}
A.aW.prototype={
gv(a){return new A.b8(J.al(this.gR()),A.F(this).h("b8<1,2>"))},
gj(a){return J.av(this.gR())},
gu(a){return J.fp(this.gR())},
gH(a){return J.hH(this.gR())},
C(a,b){return A.F(this).y[1].a(J.cU(this.gR(),b))},
i(a){return J.b7(this.gR())}}
A.b8.prototype={
k(){return this.a.k()},
gm(){return this.$ti.y[1].a(this.a.gm())},
$iH:1}
A.bE.prototype={
l(a,b){return this.$ti.y[1].a(J.Q(this.a,b))},
$ie:1,
$ij:1}
A.b9.prototype={
gR(){return this.a}}
A.aQ.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.dF.prototype={}
A.e.prototype={}
A.O.prototype={
gv(a){var s=this
return new A.aB(s,s.gj(s),A.F(s).h("aB<O.E>"))},
gu(a){return this.gj(this)===0},
a9(a,b){var s,r,q=this
A.F(q).h("w(O.E)").a(b)
s=q.gj(q)
for(r=0;r<s;++r){if(b.$1(q.C(0,r)))return!0
if(s!==q.gj(q))throw A.c(A.R(q))}return!1},
S(a,b,c){var s=A.F(this)
return new A.ac(this,s.n(c).h("1(O.E)").a(b),s.h("@<O.E>").n(c).h("ac<1,2>"))}}
A.bB.prototype={
gbu(){var s=J.av(this.a)
return s},
gbM(){var s=J.av(this.a),r=this.b
if(r>s)return s
return r},
gj(a){var s=J.av(this.a),r=this.b
if(r>=s)return 0
return s-r},
C(a,b){var s=this,r=s.gbM()+b
if(b<0||r>=s.gbu())throw A.c(A.d7(b,s.gj(0),s,"index"))
return J.cU(s.a,r)}}
A.aB.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.c_(q),o=p.gj(q)
if(r.b!==o)throw A.c(A.R(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.C(q,s);++r.c
return!0},
$iH:1}
A.ab.prototype={
gv(a){return new A.bo(J.al(this.a),this.b,A.F(this).h("bo<1,2>"))},
gj(a){return J.av(this.a)},
gu(a){return J.fp(this.a)},
C(a,b){return this.b.$1(J.cU(this.a,b))}}
A.ax.prototype={$ie:1}
A.bo.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gm())
return!0}s.a=null
return!1},
gm(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iH:1}
A.ac.prototype={
gj(a){return J.av(this.a)},
C(a,b){return this.b.$1(J.cU(this.a,b))}}
A.ag.prototype={
gv(a){return new A.aC(J.al(this.a),this.b,this.$ti.h("aC<1>"))},
S(a,b,c){var s=this.$ti
return new A.ab(this,s.n(c).h("1(2)").a(b),s.h("@<1>").n(c).h("ab<1,2>"))}}
A.aC.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gm()))return!0
return!1},
gm(){return this.a.gm()},
$iH:1}
A.K.prototype={}
A.bV.prototype={}
A.C.prototype={$r:"+(1,2)",$s:1}
A.X.prototype={$r:"+(1,2,3)",$s:2}
A.aO.prototype={
gu(a){return this.gj(this)===0},
i(a){return A.eX(this)},
$iT:1}
A.ba.prototype={
gj(a){return this.b.length},
gaU(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
Z(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
l(a,b){if(!this.Z(b))return null
return this.b[this.a[b]]},
D(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gaU()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gE(){return new A.aD(this.gaU(),this.$ti.h("aD<1>"))},
gbe(){return new A.aD(this.b,this.$ti.h("aD<2>"))}}
A.aD.prototype={
gj(a){return this.a.length},
gu(a){return 0===this.a.length},
gH(a){return 0!==this.a.length},
gv(a){var s=this.a
return new A.bJ(s,s.length,this.$ti.h("bJ<1>"))}}
A.bJ.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iH:1}
A.a5.prototype={
U(){var s=this,r=s.$map
if(r==null){r=new A.bj(s.$ti.h("bj<1,2>"))
A.hj(s.a,r)
s.$map=r}return r},
l(a,b){return this.U().l(0,b)},
D(a,b){this.$ti.h("~(1,2)").a(b)
this.U().D(0,b)},
gE(){var s=this.U()
return new A.aa(s,A.F(s).h("aa<1>"))},
gbe(){var s=this.U()
return new A.bn(s,A.F(s).h("bn<2>"))},
gj(a){return this.U().a}}
A.by.prototype={}
A.dL.prototype={
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
A.bt.prototype={
i(a){return"Null check operator used on a null value"}}
A.cg.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.cC.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.dn.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bb.prototype={}
A.bP.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iap:1}
A.am.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ht(r==null?"unknown":r)+"'"},
$iay:1,
gca(){return this},
$C:"$1",
$R:1,
$D:null}
A.c3.prototype={$C:"$0",$R:0}
A.c4.prototype={$C:"$2",$R:2}
A.cz.prototype={}
A.cy.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ht(s)+"'"}}
A.aN.prototype={
M(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aN))return!1
return this.$_target===b.$_target&&this.a===b.a},
gt(a){return(A.cT(this.a)^A.bu(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cv(this.a)+"'")}}
A.cx.prototype={
i(a){return"RuntimeError: "+this.a}}
A.a9.prototype={
gj(a){return this.a},
gu(a){return this.a===0},
gE(){return new A.aa(this,A.F(this).h("aa<1>"))},
Z(a){var s=this.b
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
return q}else return this.bZ(b)},
bZ(a){var s,r,q=this.d
if(q==null)return null
s=this.bz(q,a)
r=this.aG(s,a)
if(r<0)return null
return s[r].b},
q(a,b,c){var s,r,q,p,o,n,m=this,l=A.F(m)
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.aK(s==null?m.b=m.ap():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aK(r==null?m.c=m.ap():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.ap()
p=m.aF(b)
o=q[p]
if(o==null)q[p]=[m.aq(b,c)]
else{n=m.aG(o,b)
if(n>=0)o[n].b=c
else o.push(m.aq(b,c))}}},
c3(a,b){var s,r,q=this,p=A.F(q)
p.c.a(a)
p.h("2()").a(b)
if(q.Z(a)){s=q.l(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.q(0,a,r)
return r},
D(a,b){var s,r,q=this
A.F(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.R(q))
s=s.c}},
aK(a,b,c){var s,r=A.F(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.aq(b,c)
else s.b=c},
aq(a,b){var s=this,r=A.F(s),q=new A.dg(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
aF(a){return J.a3(a)&1073741823},
bz(a,b){return a[this.aF(b)]},
aG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ak(a[r].a,b))return r
return-1},
i(a){return A.eX(this)},
ap(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ieT:1}
A.dg.prototype={}
A.aa.prototype={
gj(a){return this.a.a},
gu(a){return this.a.a===0},
gv(a){var s=this.a
return new A.bl(s,s.r,s.e,this.$ti.h("bl<1>"))}}
A.bl.prototype={
gm(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.R(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iH:1}
A.bn.prototype={
gj(a){return this.a.a},
gu(a){return this.a.a===0},
gv(a){var s=this.a
return new A.bm(s,s.r,s.e,this.$ti.h("bm<1>"))}}
A.bm.prototype={
gm(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.R(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iH:1}
A.bj.prototype={
aF(a){return A.js(a)&1073741823},
aG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ak(a[r].a,b))return r
return-1}}
A.eu.prototype={
$1(a){return this.a(a)},
$S:9}
A.ev.prototype={
$2(a,b){return this.a(a,b)},
$S:35}
A.ew.prototype={
$1(a){return this.a(A.r(a))},
$S:34}
A.a6.prototype={
i(a){return this.b5(!1)},
b5(a){var s,r,q,p,o,n=this.bw(),m=this.an(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.d(m,q)
o=m[q]
l=a?l+A.fG(o):l+A.n(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bw(){var s,r=this.$s
while($.ec.length<=r)B.a.p($.ec,null)
s=$.ec[r]
if(s==null){s=this.bp()
B.a.q($.ec,r,s)}return s},
bp(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.k(new Array(l),t.G)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.q(k,q,r[s])}}return A.eW(k,t.K)}}
A.aY.prototype={
an(){return[this.a,this.b]},
M(a,b){if(b==null)return!1
return b instanceof A.aY&&this.$s===b.$s&&J.ak(this.a,b.a)&&J.ak(this.b,b.b)},
gt(a){return A.fD(this.$s,this.a,this.b,B.r)}}
A.aZ.prototype={
an(){return[this.a,this.b,this.c]},
M(a,b){var s=this
if(b==null)return!1
return b instanceof A.aZ&&s.$s===b.$s&&J.ak(s.a,b.a)&&J.ak(s.b,b.b)&&J.ak(s.c,b.c)},
gt(a){var s=this
return A.fD(s.$s,s.a,s.b,s.c)}}
A.aR.prototype={
gA(a){return B.b3},
$ip:1,
$ieN:1}
A.br.prototype={}
A.cj.prototype={
gA(a){return B.b4},
$ip:1,
$ieO:1}
A.aS.prototype={
gj(a){return a.length},
$iS:1}
A.bp.prototype={
l(a,b){A.aH(b,a,a.length)
return a[b]},
$ie:1,
$ib:1,
$ij:1}
A.bq.prototype={$ie:1,$ib:1,$ij:1}
A.ck.prototype={
gA(a){return B.b5},
$ip:1,
$icZ:1}
A.cl.prototype={
gA(a){return B.b6},
$ip:1,
$id_:1}
A.cm.prototype={
gA(a){return B.b7},
l(a,b){A.aH(b,a,a.length)
return a[b]},
$ip:1,
$id8:1}
A.cn.prototype={
gA(a){return B.b8},
l(a,b){A.aH(b,a,a.length)
return a[b]},
$ip:1,
$id9:1}
A.co.prototype={
gA(a){return B.b9},
l(a,b){A.aH(b,a,a.length)
return a[b]},
$ip:1,
$ida:1}
A.cp.prototype={
gA(a){return B.bb},
l(a,b){A.aH(b,a,a.length)
return a[b]},
$ip:1,
$idN:1}
A.cq.prototype={
gA(a){return B.bc},
l(a,b){A.aH(b,a,a.length)
return a[b]},
$ip:1,
$idO:1}
A.bs.prototype={
gA(a){return B.bd},
gj(a){return a.length},
l(a,b){A.aH(b,a,a.length)
return a[b]},
$ip:1,
$idP:1}
A.cr.prototype={
gA(a){return B.be},
gj(a){return a.length},
l(a,b){A.aH(b,a,a.length)
return a[b]},
$ip:1,
$idQ:1}
A.bK.prototype={}
A.bL.prototype={}
A.bM.prototype={}
A.bN.prototype={}
A.a0.prototype={
h(a){return A.bU(v.typeUniverse,this,a)},
n(a){return A.fZ(v.typeUniverse,this,a)}}
A.cI.prototype={}
A.cP.prototype={
i(a){return A.U(this.a,null)}}
A.cH.prototype={
i(a){return this.a}}
A.bQ.prototype={$iae:1}
A.dU.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:6}
A.dT.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:13}
A.dV.prototype={
$0(){this.a.$0()},
$S:7}
A.dW.prototype={
$0(){this.a.$0()},
$S:7}
A.ed.prototype={
bj(a,b){if(self.setTimeout!=null)self.setTimeout(A.b2(new A.ee(this,b),0),a)
else throw A.c(A.cD("`setTimeout()` not found."))}}
A.ee.prototype={
$0(){this.b.$0()},
$S:0}
A.cE.prototype={
aC(a){var s,r=this,q=r.$ti
q.h("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.aL(a)
else{s=r.a
if(q.h("az<1>").b(a))s.aM(a)
else s.aQ(a)}},
aD(a,b){var s
if(b==null)b=A.cW(a)
s=this.a
if(this.b)s.aj(new A.W(a,b))
else s.af(new A.W(a,b))}}
A.ei.prototype={
$1(a){return this.a.$2(0,a)},
$S:1}
A.ej.prototype={
$2(a,b){this.a.$2(1,new A.bb(a,t.l.a(b)))},
$S:14}
A.eo.prototype={
$2(a,b){this.a(A.Z(a),b)},
$S:24}
A.W.prototype={
i(a){return A.n(this.a)},
$iv:1,
ga2(){return this.b}}
A.cG.prototype={
aD(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.fK("Future already completed"))
s.af(A.iV(a,b))},
b8(a){return this.aD(a,null)}}
A.bD.prototype={
aC(a){var s,r=this.$ti
r.h("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.c(A.fK("Future already completed"))
s.aL(r.h("1/").a(a))}}
A.ah.prototype={
c2(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.av(s,t.bG.a(this.d),a.a,t.y,t.K)},
bY(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.Q.b(q))p=l.bG(l,q,m,a.b,o,n,t.l)
else p=l.av(l,t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.b7.b(A.aj(s))){if((r.c&1)!==0)throw A.c(A.cV("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.cV("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.B.prototype={
bc(a,b,c){var s,r,q,p=this.$ti
p.n(c).h("1/(2)").a(a)
s=$.x
if(s===B.h){if(b!=null&&!t.Q.b(b)&&!t.v.b(b))throw A.c(A.fq(b,"onError",u.c))}else{r=p.c
a=s.b_(s,c.h("@<0/>").n(r).h("1(2)").a(a),c.h("0/"),r)
if(b!=null)b=A.hb(b,s)}q=new A.B(s,c.h("B<0>"))
r=b==null?1:3
this.a3(new A.ah(q,r,a,b,p.h("@<1>").n(c).h("ah<1,2>")))
return q},
b4(a,b,c){var s,r=this.$ti
r.n(c).h("1/(2)").a(a)
s=new A.B($.x,c.h("B<0>"))
this.a3(new A.ah(s,19,a,b,r.h("@<1>").n(c).h("ah<1,2>")))
return s},
bI(a){this.a=this.a&1|16
this.c=a},
a4(a){this.a=a.a&30|this.a&1
this.c=a.c},
a3(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.a3(a)
return}r.a4(s)}q=r.b
q.V(q,new A.dZ(r,a))}},
aX(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.aX(a)
return}m.a4(n)}l.a=m.a7(a)
s=m.b
s.V(s,new A.e2(l,m))}},
a6(){var s=t.F.a(this.c)
this.c=null
return this.a7(s)},
a7(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aQ(a){var s,r=this
r.$ti.c.a(a)
s=r.a6()
r.a=8
r.c=a
A.aX(r,s)},
bo(a){var s=this.a6()
this.a4(a)
A.aX(this,s)},
aj(a){var s=this.a6()
this.bI(a)
A.aX(this,s)},
aL(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("az<1>").b(a)){this.aM(a)
return}this.bn(a)},
bn(a){var s,r=this
r.$ti.c.a(a)
r.a^=2
s=r.b
s.V(s,new A.e0(r,a))},
aM(a){A.f1(this.$ti.h("az<1>").a(a),this,!1)
return},
af(a){var s
this.a^=2
s=this.b
s.V(s,new A.e_(this,a))},
$iaz:1}
A.dZ.prototype={
$0(){A.aX(this.a,this.b)},
$S:0}
A.e2.prototype={
$0(){A.aX(this.b,this.a.a)},
$S:0}
A.e1.prototype={
$0(){A.f1(this.a.a,this.b,!0)},
$S:0}
A.e0.prototype={
$0(){this.a.aQ(this.b)},
$S:0}
A.e_.prototype={
$0(){this.a.aj(this.b)},
$S:0}
A.e5.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.b1(p,t.bd.a(q.d),t.z)}catch(o){s=A.aj(o)
r=A.b3(o)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
p=r
if(p==null)p=A.cW(q)
n=k.a
n.c=new A.W(q,p)
q=n}q.b=!0
return}if(j instanceof A.B&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.B){m=k.b.a
l=new A.B(m.b,m.$ti)
j.bc(new A.e6(l,m),new A.e7(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.e6.prototype={
$1(a){this.a.bo(this.b)},
$S:6}
A.e7.prototype={
$2(a,b){A.bX(a)
t.l.a(b)
this.a.aj(new A.W(a,b))},
$S:25}
A.e4.prototype={
$0(){var s,r,q,p,o,n,m,l,k
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
l=p.b.b
q.c=l.av(l,o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(k){s=A.aj(k)
r=A.b3(k)
q=s
p=r
if(p==null)p=A.cW(q)
o=this.a
o.c=new A.W(q,p)
o.b=!0}},
$S:0}
A.e3.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.c2(s)&&p.a.e!=null){p.c=p.a.bY(s)
p.b=!1}}catch(o){r=A.aj(o)
q=A.b3(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.cW(p)
m=l.b
m.c=new A.W(p,n)
p=m}p.b=!0}},
$S:0}
A.cF.prototype={}
A.cN.prototype={}
A.dR.prototype={
bQ(a,b){return new A.dS(this,this.bD(this,b.h("0()").a(a),b),b)},
aT(a,b,c){var s,r,q,p,o,n,m,l
t.l.a(c)
s=null
if(s==null){A.jd(b,c)
return}r=s.gaI()
q=r.gcc()
p=$.x
try{$.x=q
s.bX(r,r.gar(),a,b,c)
$.x=p}catch(m){o=A.aj(m)
n=A.b3(m)
$.x=p
l=b===o?c:n
q.aT(r,o,l)}},
b1(a,b,c){var s,r,q
c.h("0()").a(b)
r=$.x
if(r===a)return b.$0()
s=r
$.x=a
try{r=b.$0()
return r}finally{$.x=s}q=null.gaI()
return null.cd(q,q.gar(),a,b)},
av(a,b,c,d,e){var s,r,q
d.h("@<0>").n(e).h("1(2)").a(b)
e.a(c)
r=$.x
if(r===a)return b.$1(c)
s=r
$.x=a
try{r=b.$1(c)
return r}finally{$.x=s}q=null.gaI()
return null.bX(q,q.gar(),a,b,c)},
bG(a,b,c,d,e,f,g){var s,r,q
e.h("@<0>").n(f).n(g).h("1(2,3)").a(b)
f.a(c)
g.a(d)
r=$.x
if(r===a)return b.$2(c,d)
s=r
$.x=a
try{r=b.$2(c,d)
return r}finally{$.x=s}q=null.gaI()
return null.ce(q,q.gar(),a,b,c,d)},
bD(a,b,c){c.h("0()").a(b)
return b},
b_(a,b,c,d){c.h("@<0>").n(d).h("1(2)").a(b)
return b},
aZ(a,b,c,d,e){c.h("@<0>").n(d).n(e).h("1(2,3)").a(b)
return b},
bv(a,b,c){return null},
V(a,b){A.je(a,t.M.a(b))
return}}
A.dS.prototype={
$0(){var s=this.a
return s.b1(s,this.b,this.c)},
$S(){return this.c.h("0()")}}
A.em.prototype={
$0(){A.hS(this.a,this.b)},
$S:0}
A.bF.prototype={
gj(a){return this.a},
gu(a){return this.a===0},
gE(){return new A.bG(this,this.$ti.h("bG<1>"))},
Z(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.br(a)},
br(a){var s=this.d
if(s==null)return!1
return this.J(this.aP(s,a),a)>=0},
l(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.fP(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.fP(q,b)
return r}else return this.by(b)},
by(a){var s,r,q=this.d
if(q==null)return null
s=this.aP(q,a)
r=this.J(s,a)
return r<0?null:s[r+1]},
q(a,b,c){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.y[1].a(c)
s=o.d
if(s==null)s=o.d=A.ie()
r=A.cT(b)&1073741823
q=s[r]
if(q==null){A.fQ(s,r,[b,c]);++o.a
o.e=null}else{p=o.J(q,b)
if(p>=0)q[p+1]=c
else{q.push(b,c);++o.a
o.e=null}}},
D(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.aO()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.l(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.c(A.R(m))}},
aO(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.dh(i.a,null,t.z)
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
aP(a,b){return a[A.cT(b)&1073741823]}}
A.bI.prototype={
J(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.bG.prototype={
gj(a){return this.a.a},
gu(a){return this.a.a===0},
gH(a){return this.a.a!==0},
gv(a){var s=this.a
return new A.bH(s,s.aO(),this.$ti.h("bH<1>"))}}
A.bH.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.R(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iH:1}
A.aE.prototype={
gv(a){var s=this,r=new A.aF(s,s.r,s.$ti.h("aF<1>"))
r.c=s.e
return r},
gj(a){return this.a},
gu(a){return this.a===0},
gH(a){return this.a!==0},
Y(a,b){var s=this.bq(b)
return s},
bq(a){var s=this.d
if(s==null)return!1
return this.J(s[a.gt(0)&1073741823],a)>=0},
p(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aN(s==null?q.b=A.f3():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aN(r==null?q.c=A.f3():r,b)}else return q.bk(b)},
bk(a){var s,r,q,p=this
p.$ti.c.a(a)
s=p.d
if(s==null)s=p.d=A.f3()
r=J.a3(a)&1073741823
q=s[r]
if(q==null)s[r]=[p.ai(a)]
else{if(p.J(q,a)>=0)return!1
q.push(p.ai(a))}return!0},
c5(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.b0(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.b0(s.c,b)
else return s.bE(b)},
bE(a){var s,r,q,p,o=this.d
if(o==null)return!1
s=J.a3(a)&1073741823
r=o[s]
q=this.J(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.b7(p)
return!0},
aN(a,b){this.$ti.c.a(b)
if(t.V.a(a[b])!=null)return!1
a[b]=this.ai(b)
return!0},
b0(a,b){var s
if(a==null)return!1
s=t.V.a(a[b])
if(s==null)return!1
this.b7(s)
delete a[b]
return!0},
ao(){this.r=this.r+1&1073741823},
ai(a){var s,r=this,q=new A.cL(r.$ti.c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.ao()
return q},
b7(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.ao()},
J(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ak(a[r].a,b))return r
return-1},
$ifC:1}
A.cL.prototype={}
A.aF.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.c(A.R(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$iH:1}
A.o.prototype={
gv(a){return new A.aB(a,this.gj(a),A.b4(a).h("aB<o.E>"))},
C(a,b){return this.l(a,b)},
gu(a){return this.gj(a)===0},
gH(a){return!this.gu(a)},
S(a,b,c){var s=A.b4(a)
return new A.ac(a,s.n(c).h("1(o.E)").a(b),s.h("@<o.E>").n(c).h("ac<1,2>"))},
i(a){return A.eP(a,"[","]")}}
A.A.prototype={
D(a,b){var s,r,q,p=A.F(this)
p.h("~(A.K,A.V)").a(b)
for(s=this.gE(),s=s.gv(s),p=p.h("A.V");s.k();){r=s.gm()
q=this.l(0,r)
b.$2(r,q==null?p.a(q):q)}},
gj(a){var s=this.gE()
return s.gj(s)},
gu(a){var s=this.gE()
return s.gu(s)},
i(a){return A.eX(this)},
$iT:1}
A.dk.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.n(a)
r.a=(r.a+=s)+": "
s=A.n(b)
r.a+=s},
$S:8}
A.aT.prototype={
gu(a){return this.a===0},
gH(a){return this.a!==0},
a8(a,b){var s,r,q
this.$ti.h("b<1>").a(b)
for(s=A.f2(b,b.r,b.$ti.c),r=s.$ti.c;s.k();){q=s.d
this.p(0,q==null?r.a(q):q)}},
S(a,b,c){var s=this.$ti
return new A.ax(this,s.n(c).h("1(2)").a(b),s.h("@<1>").n(c).h("ax<1,2>"))},
i(a){return A.eP(this,"{","}")},
C(a,b){var s,r,q,p=this
A.eY(b,"index")
s=A.f2(p,p.r,p.$ti.c)
for(r=b;s.k();){if(r===0){q=s.d
return q==null?s.$ti.c.a(q):q}--r}throw A.c(A.d7(b,b-r,p,"index"))},
$ie:1,
$ib:1,
$if_:1}
A.bO.prototype={}
A.cJ.prototype={
l(a,b){var s,r=this.b
if(r==null)return this.c.l(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.bA(b):s}},
gj(a){return this.b==null?this.c.a:this.a5().length},
gu(a){return this.gj(0)===0},
gE(){if(this.b==null){var s=this.c
return new A.aa(s,A.F(s).h("aa<1>"))}return new A.cK(this)},
D(a,b){var s,r,q,p,o=this
t.cQ.a(b)
if(o.b==null)return o.c.D(0,b)
s=o.a5()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.ek(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.c(A.R(o))}},
a5(){var s=t.aL.a(this.c)
if(s==null)s=this.c=A.k(Object.keys(this.a),t.s)
return s},
bA(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.ek(this.a[a])
return this.b[a]=s}}
A.cK.prototype={
gj(a){return this.a.gj(0)},
C(a,b){var s=this.a
if(s.b==null)s=s.gE().C(0,b)
else{s=s.a5()
if(!(b>=0&&b<s.length))return A.d(s,b)
s=s[b]}return s},
gv(a){var s=this.a
if(s.b==null){s=s.gE()
s=s.gv(s)}else{s=s.a5()
s=new J.aw(s,s.length,A.M(s).h("aw<1>"))}return s}}
A.c5.prototype={}
A.c7.prototype={}
A.bk.prototype={
i(a){var s=A.c8(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.ch.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.dd.prototype={
b9(a,b){var s=A.ja(a,this.gbS().a)
return s},
bb(a,b){var s=A.ih(a,this.gbT().b,null)
return s},
gbT(){return B.a3},
gbS(){return B.a2}}
A.df.prototype={}
A.de.prototype={}
A.ea.prototype={
bh(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.f.T(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.f.T(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.f.T(a,r,q)
r=q+1
o=A.J(92)
s.a+=o
o=A.J(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.f.T(a,r,m)},
ah(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.c(new A.ch(a,null))}B.a.p(s,a)},
ad(a){var s,r,q,p,o=this
if(o.bg(a))return
o.ah(a)
try{s=o.b.$1(a)
if(!o.bg(s)){q=A.fA(a,null,o.gaV())
throw A.c(q)}q=o.a
if(0>=q.length)return A.d(q,-1)
q.pop()}catch(p){r=A.aj(p)
q=A.fA(a,r,o.gaV())
throw A.c(q)}},
bg(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.i(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.bh(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.ah(a)
q.c8(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.ah(a)
r=q.c9(a)
s=q.a
if(0>=s.length)return A.d(s,-1)
s.pop()
return r}else return!1},
c8(a){var s,r,q=this.c
q.a+="["
s=J.c_(a)
if(s.gH(a)){this.ad(s.l(a,0))
for(r=1;r<s.gj(a);++r){q.a+=","
this.ad(s.l(a,r))}}q.a+="]"},
c9(a){var s,r,q,p,o,n,m=this,l={}
if(a.gu(a)){m.c.a+="{}"
return!0}s=a.gj(a)*2
r=A.dh(s,null,t.X)
q=l.a=0
l.b=!0
a.D(0,new A.eb(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.bh(A.r(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.d(r,n)
m.ad(r[n])}p.a+="}"
return!0}}
A.eb.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.q(s,r.a++,a)
B.a.q(s,r.a++,b)},
$S:8}
A.e9.prototype={
gaV(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.dX.prototype={
i(a){return this.ak()}}
A.v.prototype={
ga2(){return A.i3(this)}}
A.c1.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.c8(s)
return"Assertion failed"}}
A.ae.prototype={}
A.a4.prototype={
gam(){return"Invalid argument"+(!this.a?"(s)":"")},
gal(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gam()+q+o
if(!s.a)return n
return n+s.gal()+": "+A.c8(s.gaH())},
gaH(){return this.b}}
A.bw.prototype={
gaH(){return A.h2(this.b)},
gam(){return"RangeError"},
gal(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.ca.prototype={
gaH(){return A.Z(this.b)},
gam(){return"RangeError"},
gal(){if(A.Z(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.bC.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.cB.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bA.prototype={
i(a){return"Bad state: "+this.a}}
A.c6.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c8(s)+"."}}
A.bz.prototype={
i(a){return"Stack Overflow"},
ga2(){return null},
$iv:1}
A.dY.prototype={
i(a){return"Exception: "+this.a}}
A.bd.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.f.T(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.b.prototype={
S(a,b,c){var s=A.F(this)
return A.i2(this,s.n(c).h("1(b.E)").a(b),s.h("b.E"),c)},
c4(a,b){var s,r
A.F(this).h("b.E(b.E,b.E)").a(b)
s=this.gv(this)
if(!s.k())throw A.c(A.db())
r=s.gm()
while(s.k())r=b.$2(r,s.gm())
return r},
gj(a){var s,r=this.gv(this)
for(s=0;r.k();)++s
return s},
gu(a){return!this.gv(this).k()},
gH(a){return!this.gu(this)},
C(a,b){var s,r
A.eY(b,"index")
s=this.gv(this)
for(r=b;s.k();){if(r===0)return s.gm();--r}throw A.c(A.d7(b,b-r,this,"index"))},
i(a){return A.hU(this,"(",")")}}
A.I.prototype={
gt(a){return A.f.prototype.gt.call(this,0)},
i(a){return"null"}}
A.f.prototype={$if:1,
M(a,b){return this===b},
gt(a){return A.bu(this)},
i(a){return"Instance of '"+A.cv(this)+"'"},
gA(a){return A.jD(this)},
toString(){return this.i(this)}}
A.cO.prototype={
i(a){return""},
$iap:1}
A.aU.prototype={
gj(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ii8:1}
A.dm.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.ey.prototype={
$1(a){var s,r,q,p
if(A.ha(a))return a
s=this.a
if(s.Z(a))return s.l(0,a)
if(t.f.b(a)){r={}
s.q(0,a,r)
for(s=a.gE(),s=s.gv(s);s.k();){q=s.gm()
r[q]=this.$1(a.l(0,q))}return r}else if(t.R.b(a)){p=[]
s.q(0,a,p)
B.a.a8(p,J.hJ(a,this,t.z))
return p}else return a},
$S:12}
A.eD.prototype={
$1(a){return this.a.aC(this.b.h("0/?").a(a))},
$S:1}
A.eE.prototype={
$1(a){if(a==null)return this.a.b8(new A.dm(a===undefined))
return this.a.b8(a)},
$S:1}
A.dl.prototype={
gaE(){var s,r=this.b,q=Math.abs(r)
if(q<=2){r=this.a
return B.j[B.c.N(r,12)]+(B.c.K(r,12)-1)+" in tune"}s=r>0?"+":"\u2212"
r=this.a
return B.j[B.c.N(r,12)]+(B.c.K(r,12)-1)+" "+s+q+"\xa2"}}
A.d6.prototype={
bV(a,b,c){var s,r,q=this,p=q.e
if(p==null){if(b>q.a&&b>q.f*3){q.e=c
B.a.aB(q.r)}else q.f=q.f*0.9+b*0.1
return null}s=c-p
if(s>=40&&s<=300&&a!=null)B.a.p(q.r,a)
if(!(s>300))r=s>40&&b<q.a/4
else r=!0
if(r){q.e=null
q.f=b
r=q.r
if(r.length<3)return null
return A.hn(r)}return null}}
A.di.prototype={
gac(){var s,r,q,p,o=A.k([],t.u)
for(s=this.a,r=s.length,q=this.b,p=0;p<r;++p)o.push(1200*(Math.log(s[p]/q)/0.6931471805599453))
return o},
gc_(a){return this.a.length>=2&&B.a.bU(this.gac(),new A.dj())},
gbf(){var s,r,q,p,o
if(this.a.length<2)return null
s=this.gac()
for(r=s.length,q=0,p=1;p<r;++p){o=s[p]
if(!(q>=0&&q<r))return A.d(s,q)
if(Math.abs(o)>Math.abs(s[q]))q=p}if(!(q>=0&&q<r))return A.d(s,q)
return Math.abs(s[q])>20?q:null}}
A.dj.prototype={
$1(a){return Math.abs(A.bW(a))<=20},
$S:2}
A.L.prototype={}
A.z.prototype={
ak(){return"DrumType."+this.b}}
A.cX.prototype={
$1(a){return t.O.a(a).b===this.a},
$S:10}
A.cY.prototype={
$0(){return B.d},
$S:15}
A.cs.prototype={}
A.eF.prototype={
$2(a,b){var s
A.Z(a)
A.Z(b)
s=this.a
return Math.abs(a-s)<=Math.abs(b-s)?a:b},
$S:16}
A.bc.prototype={
ak(){return"Family."+this.b}}
A.E.prototype={}
A.eA.prototype={
$1(a){return t.w.a(a).a===this.a},
$S:17}
A.eB.prototype={
$0(){return B.a.ga_(B.t)},
$S:18}
A.G.prototype={}
A.es.prototype={
$1(a){return t.x.a(a).a===this.a},
$S:19}
A.et.prototype={
$0(){return B.a.ga_(this.a)},
$S:20}
A.a_.prototype={}
A.eH.prototype={
$1(a){return t.bY.a(a).a===this.a},
$S:21}
A.eI.prototype={
$0(){return B.a.ga_(B.v)},
$S:22}
A.a1.prototype={
ak(){return"Spacing."+this.b}}
A.dG.prototype={
$1(a){return t.az.a(a).b===this.a},
$S:23}
A.dH.prototype={
$0(){return B.k},
$S:37}
A.cc.prototype={}
A.ad.prototype={}
A.en.prototype={
$2(a,b){var s=t.U
return B.c.L(s.a(a).b,s.a(b).b)},
$S:11}
A.eC.prototype={
$1(a){return this.a.$0()},
$S:26}
A.eG.prototype={
$1(a){A.bX(a)
return null},
$S:27}
A.eL.prototype={
$0(){var s,r=A.eh(this.a.getAttribute("data-theme"))==="light",q=r?"Switch to dark theme":"Switch to light theme",p=this.b
p.setAttribute("aria-label",q)
p.setAttribute("title",q)
s=A.at(p.firstElementChild)
if(s!=null){p=r?"\u263e":"\u2600"
s.textContent=p}},
$S:0}
A.eK.prototype={
$0(){var s=this.a,r=A.eh(s.getAttribute("data-theme"))==="light"?"dark":"light"
s.setAttribute("data-theme",r)
A.fj("ds-theme",r)
this.b.$0()},
$S:0}
A.c9.prototype={
gba(){return A.f7(this.ax)+" "+this.at.c.toLowerCase()},
a1(){var s,r,q,p,o,n,m,l=this,k="change",j=l.a,i=t.L,h=A.k([],i)
for(s=0;s<4;++s){r=B.w[s]
h.push(new A.C(r.b,r.c))}A.as(j,h)
h=l.d
q=A.k([],i)
for(s=0;s<11;++s){p=B.t[s]
q.push(new A.C(p.a,p.b))}A.as(h,q)
q=l.e
o=A.k([],i)
for(s=0;s<5;++s){n=B.C[s]
o.push(new A.C(n.a,n.b))}A.as(q,o)
o=l.r
i=A.k([],i)
for(s=0;s<3;++s){m=B.v[s]
i.push(new A.C(m.a,m.b))}A.as(o,i)
l.au()
A.P(j,k,new A.d3(l))
A.P(l.b,k,new A.d4(l))
A.P(l.c,k,new A.d5(l))
for(j=[h,q,l.f,o],i=j.length,h=l.gbP(),s=0;s<i;++s)A.P(j[s],k,h)
l.X()},
aS(){var s,r,q,p,o,n,m,l,k=this,j=k.b,i=t.L,h=A.k([],i)
for(s=k.at.d,r=s.length,q=0;q<r;++q){p=s[q]
o=""+p
h.push(new A.C(o,(p===B.c.I(p)?""+B.c.B(p)+'"':o+'"')+" diameter"))}A.as(j,h)
j.value=""+k.ax
j=k.c
h=A.k([],i)
for(s=k.at.f,r=s.length,q=0;q<r;++q){p=s[q]
o=A.n(p)
h.push(new A.C(o,(p===B.b.I(p)?""+B.b.B(p)+'"':o+'"')+" deep"))}A.as(j,h)
j.value=A.n(k.ay)
j=k.f
n=A.r(j.value)
i=A.k([],i)
for(q=0;q<5;++q){m=B.E[q]
h=m.a
if(h!=="port"||k.at===B.n)s=h!=="snare"||k.at===B.d
else s=!1
if(s)i.push(new A.C(h,m.b))}A.as(j,i)
l=k.at
A:{if(B.d===l){i="snare"
break A}i=!1
if(n.length!==0)if(n!=="snare")i=n!=="port"||l===B.n
if(i){i=n
break A}i="1x"
break A}j.value=i},
au(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.X,f=A.ci(g,g)
try{g=A.hm("ds-drum")
s=B.l.b9(g==null?"{}":g,h)
if(t.f.b(s))f=s}catch(r){if(!(A.aj(r) instanceof A.bd))throw r}g=J.Q(f,"type")
i.at=A.fw(A.n(g==null?"snare":g))
q=J.Q(f,"diameter")
i.ax=A.cR(q)&&B.a.Y(i.at.d,q)?q:i.at.e
p=J.Q(f,"depth")
i.ay=typeof p=="number"&&B.a.Y(i.at.f,p)?p:i.at.r
i.a.value=i.at.b
i.aS()
o=new A.d0()
g=i.d
o.$2(g,J.Q(f,"material"))
n=i.e
o.$2(n,J.Q(f,"batter"))
m=i.f
o.$2(m,J.Q(f,"reso"))
l=i.r
o.$2(l,J.Q(f,"relation"))
for(g=[g,n,m,l],n=g.length,k=0;k<n;++k){j=g[k]
if(A.r(j.value).length===0)j.value=A.r(A.q(A.fy(A.q(j.options),"item",0,h,h,h)).value)}},
X(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.b6(h.at,h.ax)
h.w.textContent="Starting range for a "+h.gba()
s=new A.d2()
r=g.a
s.$2(h.x,r)
q=g.b
s.$2(h.y,Math.sqrt(r*q))
s.$2(h.z,q)
r=g.c
if(r!=null)r="No source we found lists this size, so this range is scaled from the "+A.f7(r)+" range (pitch goes roughly as one over the diameter). Treat it as a rough guide."
else{r=B.x.l(0,g.d)
r=r==null?null:r.a
r="Range from "+(r==null?"the sources below":r)+". A starting point: tune by ear from here."}h.Q.textContent=r
r=h.d
p=A.jP(A.r(r.value))
q=h.e
o=A.hl(B.C,A.r(q.value))
n=h.f
m=A.hl(B.E,A.r(n.value))
l=h.r
k=A.jT(A.r(l.value))
h.as.replaceChildren()
j=new A.d1(h)
j.$3("Shell: "+p.b,p.d,p.e)
j.$3("Depth: "+A.f7(h.ay),A.jw(h.at,h.ay),B.al)
j.$3("Batter head: "+o.b,o.c,o.d)
j.$3("Resonant head: "+m.b,m.c,m.d)
if(h.at===B.d)j.$3("Batter and snare side","On a snare, many drummers tune the snare-side head higher than the batter for a crisp wire response. Treat it as a starting point and adjust by ear.",B.ae)
else j.$3("Head relationship: "+k.b,k.c,k.d)
A.i("relation-row",t.m).hidden=h.at===B.d
A.fj("ds-drum",B.l.bb(A.eU(["type",h.at.b,"diameter",h.ax,"depth",h.ay,"material",A.r(r.value),"batter",A.r(q.value),"reso",A.r(n.value),"relation",A.r(l.value)],t.N,t.K),null))
for(r=h.ch,q=r.length,i=0;i<r.length;r.length===q||(0,A.aM)(r),++i)r[i].$0()}}
A.d3.prototype={
$0(){var s=this.a,r=s.at=A.fw(A.r(s.a.value))
s.ax=r.e
s.ay=r.r
s.aS()
s.X()},
$S:0}
A.d4.prototype={
$0(){var s=this.a,r=A.bv(A.r(s.b.value),null)
s.ax=r==null?s.at.e:r
s.X()},
$S:0}
A.d5.prototype={
$0(){var s=this.a,r=B.f.bd(A.r(s.c.value)),q=A.bv(r,null)
if(q==null)q=A.cw(r)
s.ay=q==null?s.at.r:q
s.X()},
$S:0}
A.d0.prototype={
$2(a,b){if(typeof b=="string"&&b.length!==0)a.value=b},
$S:28}
A.d2.prototype={
$2(a,b){var s=A.f6(b),r=A.cS(b).a
r=s+" Hz \xb7 "+(B.j[B.c.N(r,12)]+(B.c.K(r,12)-1))
a.textContent=r
return r},
$S:29}
A.d1.prototype={
$3(a,b,c){var s,r,q=null
t.aY.a(c)
s=A.u("li","note-card",q)
s.appendChild(A.u("h3",q,a))
s.appendChild(A.u("p",q,b))
r=c.length===0?A.u("span",q,q):A.iK(c)
s.appendChild(r)
this.a.as.appendChild(s)},
$S:30}
A.cA.prototype={
gaR(){var s,r=this,q=r.fx
if(q===$){s=A.h6(r.gbs())
r.fx!==$&&A.jX()
r.fx=s
q=s}return q},
a1(){var s=this,r=v.G
if(A.at(A.q(r.navigator).mediaDevices)==null||!("AudioContext" in r)){r=t.m
A.i("tuner-body",r).hidden=!0
A.i("no-mic",r).hidden=!1
return}A.P(s.b,"click",new A.dJ(s))
A.P(s.w,"input",s.gbB())
A.P(A.i("lugs-clear",t.m),"click",new A.dK(s))
B.a.p(s.a.ch,s.gbK())
s.aY()
s.aw()
s.az()},
aY(){var s=A.bv(A.r(this.w.value),null),r=B.c.aa(s==null?6:s,1,10)
this.dx.a=0.08/(r*r/4+1)},
W(){var s=0,r=A.j8(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c
var $async$W=A.jn(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:o.P("Asking for the microphone\u2026")
q=3
h=t.N
h=A.jL(A.eU(["audio",A.eU(["echoCancellation",!1,"noiseSuppression",!1,"autoGainControl",!1],h,t.y)],h,t.ce))
h.toString
n=A.q(h)
h=v.G
s=6
return A.h3(A.fi(A.q(A.at(A.q(h.navigator).mediaDevices).getUserMedia(n)),t.m),$async$W)
case 6:m=b
l=A.q(new h.AudioContext())
s=7
return A.h3(A.fi(A.q(l.resume()),t.X),$async$W)
case 7:k=A.q(l.createMediaStreamSource(m))
g=A.q(l.createAnalyser())
g.fftSize=8192
g.smoothingTimeConstant=0
j=g
f=A.q(l.createAnalyser())
f.fftSize=1024
i=f
e=k
A.q(e.connect(j))
A.q(e.connect(i))
o.at=l
o.ax=m
o.ay=j
o.ch=i
e=B.c.K(A.Z(j.fftSize),2)
o.CW=new Float32Array(e)
e=A.Z(i.fftSize)
o.cx=new Float32Array(e)
o.db=!0
e=o.b
e.textContent="Stop tuner"
e.setAttribute("aria-pressed","true")
A.cQ(A.q(e.classList).toggle("is-running",!0))
o.r.textContent="Listening: tap the drum"
o.P("Tuner on. Tap the drum lightly about an inch from a tension rod.")
o.cy=A.Z(h.requestAnimationFrame(o.gaR()))
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
case 5:return A.iG(null,r)
case 1:return A.iF(p.at(-1),r)}})
return A.iH($async$W,r)},
bN(){var s,r,q,p=this
p.db=!1
s=p.cy
if(s!=null)v.G.cancelAnimationFrame(s)
r=p.ax
if(r==null)q=null
else{r=t.cm.a(r.getTracks())
r=t.cx.b(r)?r:new A.b9(r,A.M(r).h("b9<1,t>"))
q=r}for(r=J.al(q==null?B.ad:q);r.k();)r.gm().stop()
r=p.at
if(r!=null)A.q(r.close())
p.ax=p.at=null
r=p.b
r.textContent="Start tuner"
r.setAttribute("aria-pressed","false")
A.cQ(A.q(r.classList).toggle("is-running",!1))
p.r.textContent="Microphone off"
A.q(p.f.style).setProperty("--level","0")
p.P("Tuner off. The microphone is closed.")},
bt(a){var s,r,q,p,o,n,m,l,k,j=this
A.bW(a)
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
o=A.jU(j.cx)
A.q(j.f.style).setProperty("--level",B.b.F(B.b.aa(o*8,0,1),3))
p=j.CW
n=A.bW(s.sampleRate)
m=j.dx
l=m.bV(A.jQ(p,A.Z(r.fftSize),1200,35,n),o,a)
p=m.e!=null?"Reading\u2026":"Listening: tap the drum"
j.r.textContent=p
if(l!=null){j.fr=l
k=A.cS(l)
j.c.textContent=B.b.F(l,1)+" Hz"
j.d.textContent=k.gaE()
p=j.e
p.hidden=!1
A.q(p.style).setProperty("--cents",""+k.b)
p=j.dy
B.a.p(p,l)
if(p.length>12)B.a.c6(p,0)
j.aw()
j.az()
p=B.b.F(l,1)
n=k.gaE()
n=A.fk(n,"\u266f"," sharp")
n=A.fk(n,"\xa2"," cents")
j.P(p+" hertz, "+A.fk(n,"\u2212","minus ")+".")}j.cy=A.Z(v.G.requestAnimationFrame(j.gaR()))},
aw(){var s,r,q,p,o,n,m,l,k,j,i="span",h=this.x
h.replaceChildren()
s=this.dy
r=A.eW(s,t.i)
q=s.length===0?0:A.hn(s)
p=new A.di(r,q)
o=p.gac()
for(n=0;r=s.length,n<r;n=j){if(!(n<o.length))return A.d(o,n)
m=B.b.B(o[n])
if(m>0)l="+"
else l=m<0?"\u2212":"\xb1"
k=A.u("li","lug",null)
j=n+1
k.appendChild(A.u(i,"lug-n","Lug "+j))
if(!(n<s.length))return A.d(s,n)
k.appendChild(A.u(i,"lug-hz",B.b.F(s[n],1)+" Hz"))
k.appendChild(A.u(i,"lug-off",s.length>1?l+Math.abs(m)+"\xa2":""))
if(p.gbf()===n)A.q(k.classList).add("is-worst")
h.appendChild(k)}A:{if(0===r){h="Tap near each tension rod in turn. Readings appear here so you can compare them."
break A}if(1===r){h="One reading. Tap the next lug."
break A}h=p.gc_(0)
if(h){h="Even: every lug is within 20\xa2 of the middle reading ("+B.b.F(q,1)+" Hz)."
break A}h=new A.dI(p).$0()
break A}this.y.textContent=h},
az(){var s,r,q,p,o,n,m,l,k=this,j=k.a,i=A.b6(j.at,j.ax)
j=j.gba()
s=i.a
r=A.f6(s)
q=i.b
p=A.f6(q)
o=A.cS(s).a
n=B.j[B.c.N(o,12)]
o=B.c.K(o,12)
m=A.cS(q).a
k.z.textContent="Target for your "+j+": about "+r+" to "+p+" Hz ("+(n+(o-1))+" to "+(B.j[B.c.N(m,12)]+(B.c.K(m,12)-1))+"). Hit the centre to compare."
l=k.fr
m=k.Q
o=l==null
m.hidden=o
if(!o){A.q(m.style).setProperty("--pos",B.b.F(B.b.aa(Math.log(l/s)/0.6931471805599453/(Math.log(q/s)/0.6931471805599453),-0.08,1.08),3))
m.setAttribute("title",B.b.F(l,1)+" Hz")}},
P(a){this.as.textContent=a
return a}}
A.dJ.prototype={
$0(){var s=this.a
return s.db?s.bN():s.W()},
$S:0}
A.dK.prototype={
$0(){var s=this.a
B.a.aB(s.dy)
s.aw()
s.P("Lug readings cleared.")},
$S:0}
A.dI.prototype={
$0(){var s,r,q=this.a,p=q.gbf()
p.toString
q=q.gac()
if(!(p<q.length))return A.d(q,p)
s=q[p]
q=B.b.B(Math.abs(s))
r=s>0?"sharp: loosen it slightly":"flat: tighten it slightly"
return"Lug "+(p+1)+" is "+q+"\xa2 "+r+", then tap it again."},
$S:32}
A.cM.prototype={}
A.cu.prototype={
a1(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null,a3="input",a4="chip-check",a5="change"
a1.au()
for(s=[B.e,B.o],r=s.length,q=a1.y,p=a1.a,o=0;o<r;++o){n=s[o]
for(m=n.d,l=m.length,k=n===B.e,j="plan-"+n.b+"-",i=0;i<l;++i){h=m[i]
g=""+h
f=j+g
e=A.u(a3,a2,a2)
e.setAttribute("type","checkbox")
e.setAttribute("id",f)
e.checked=q.Y(0,new A.C(n,h))
d=A.u("label",a4,a2)
d.setAttribute("for",f)
d.appendChild(e)
g=h===B.c.I(h)?""+B.c.B(h)+'"':g+'"'
c=k?"rack":"floor"
d.appendChild(A.u("span",a2,g+" "+c))
p.appendChild(d)
A.P(e,a5,new A.dB(a1,e,n,h))}}for(s=a1.b,o=0;o<3;++o){b=B.F[o]
r=b.b
f="plan-spacing-"+r
a=A.u(a3,a2,a2)
a.setAttribute("type","radio")
a.setAttribute("name","plan-spacing")
a.setAttribute("id",f)
a.setAttribute("value",r)
a.checked=b===a1.z
r=A.u("label",a4,a2)
r.setAttribute("for",f)
r.appendChild(a)
r.appendChild(A.u("span",a2,b.c))
s.appendChild(r)
A.P(a,a5,new A.dC(a1,a,b))}s=a1.e
r=A.k([],t.L)
for(q=$.fo(),p=q.length,o=0;o<p;++o){a0=q[o]
r.push(new A.C(""+a0.a,a0.b))}A.as(s,r)
s.value=""+a1.Q
A.P(s,a5,new A.dD(a1))
s=a1.r
A.P(s,a3,a1.gbC())
A.P(A.i("plan-suggest",t.m),"click",new A.dE(a1))
if(A.r(s.value).length===0)a1.b3()
a1.ag()},
gaA(){var s=A.eV(this.y,t.U)
B.a.ae(s,new A.dA())
return s},
gb6(){var s=A.cw(A.r(this.r.value))
return s!=null&&s>=30&&s<=1000?s:null},
b3(){var s,r=this.gaA()
if(r.length===0)return
s=A.b6(B.a.ga_(r).a,B.a.ga_(r).b)
this.r.value=B.c.i(B.b.B(Math.sqrt(s.a*s.b)))},
bx(a){var s,r,q=this.ax,p=q.length
if(!(a<p))return A.d(q,a)
s=q[a]
r=a+1
if(!(r<p))return A.d(q,r)
r=q[r]
return s.a.b+"-"+s.b+">"+(r.a.b+"-"+r.b)},
bJ(a){var s,r,q,p,o,n,m,l,k=this,j=k.aW()
if(a===B.i&&j!=null)for(s=j.length,r=k.at,q=0;q<j.length;j.length===s||(0,A.aM)(j),++q){p=j[q]
r.q(0,p.a.b+"-"+p.b,A.jx(B.b.F(p.c,1)))}if(a===B.y&&k.z===B.k)for(s=k.ax,r=k.as,o=0;n=o+1,m=s.length,n<m;o=n){if(!(o<m))return A.d(s,o)
m=s[o]
l=s[n]
r.c3(m.a.b+"-"+m.b+">"+(l.a.b+"-"+l.b),new A.dz(k))}k.z=a
k.ag()},
ag(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null,a3="td",a4=a1.ax
B.a.aB(a4)
s=A.k([],t.A)
for(r=a1.gaA(),q=r.length,p=0;p<r.length;r.length===q||(0,A.aM)(r),++p){o=r[p]
s.push(new A.cM(o.a,o.b))}B.a.a8(a4,s)
s=a1.w
s.replaceChildren()
a1.c.textContent=a1.z.d
a1.d.hidden=a1.z!==B.k
a1.f.hidden=a1.z===B.i
for(r=a1.at,q=a1.as,o=t.L,n=0;n<a4.length;++n){m=a4[n]
l=m.a
k=m.b
j=k===B.c.I(k)?""+B.c.B(k)+'"':""+k+'"'
i=l===B.e?"rack":"floor"
h=j+" "+i
g=A.u("tr",a2,a2)
i=A.u("th",a2,h)
i.setAttribute("scope","row")
g.appendChild(i)
i=A.u(a3,a2,a2)
m.c!==$&&A.eJ()
m.c=i
if(a1.z===B.i){f=A.u("input",a2,a2)
f.setAttribute("type","number")
f.setAttribute("min","30")
f.setAttribute("max","1000")
f.setAttribute("step","0.1")
f.setAttribute("inputmode","decimal")
f.setAttribute("aria-label","Pitch for the "+h+" tom, in hertz")
f.className="plan-hz"
j=r.l(0,l.b+"-"+k)
if(j==null){l=A.b6(l,k)
l=Math.sqrt(l.a*l.b)}else l=j
f.value=B.b.F(l,1)
A.P(f,"input",new A.dr(a1,f,m))
m.r=f
i.appendChild(f)}l=A.u(a3,a2,a2)
m.d!==$&&A.eJ()
m.d=l
k=A.u(a3,a2,a2)
m.e!==$&&A.eJ()
m.e=k
if(a1.z===B.y&&n+1<a4.length){j=n+1
if(!(j<a4.length))return A.d(a4,j)
e=a4[j]
d=A.u("select",a2,a2)
c=e.b
c=c===B.c.I(c)?""+B.c.B(c)+'"':""+c+'"'
b=e.a===B.e?"rack":"floor"
d.setAttribute("aria-label","Interval from the "+h+" tom down to the "+(c+" "+b)+" tom")
b=A.k([],o)
for(c=$.fo(),a=c.length,p=0;p<a;++p){a0=c[p]
b.push(new A.C(""+a0.a,a0.b))}A.as(d,b)
c=a4.length
if(!(n<c))return A.d(a4,n)
b=a4[n]
if(!(j<c))return A.d(a4,j)
j=a4[j]
j=q.l(0,b.a.b+"-"+b.b+">"+(j.a.b+"-"+j.b))
d.value=""+(j==null?a1.Q:j)
A.P(d,"change",new A.ds(a1,n,d))
m.w=d
k.appendChild(d)}j=A.u(a3,a2,a2)
m.f!==$&&A.eJ()
m.f=j
g.appendChild(i)
g.appendChild(l)
g.appendChild(k)
g.appendChild(j)
s.appendChild(g)}a1.O()},
aW(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.gaA()
if(e.length===0)return f
switch(g.z.a){case 0:s=g.gb6()
if(s==null)r=f
else{r=g.Q
r=A.hp(e,s,A.dh(Math.max(0,e.length-1),r,t.S))}return r
case 1:s=g.gb6()
if(s==null||g.ax.length!==e.length)return f
r=A.k([],t.t)
for(q=g.ax,p=g.as,o=0;n=o+1,m=q.length,n<m;o=n){if(!(o<m))return A.d(q,o)
m=q[o]
l=q[n]
l=p.l(0,m.a.b+"-"+m.b+">"+(l.a.b+"-"+l.b))
r.push(l==null?g.Q:l)}return A.hp(e,s,r)
case 2:r=A.k([],t.u)
for(q=g.ax,p=q.length,m=g.at,k=0;k<q.length;q.length===p||(0,A.aM)(q),++k){j=q[k]
l=j.a
i=j.b
h=m.l(0,l.b+"-"+i)
if(h==null){l=A.b6(l,i)
l=Math.sqrt(l.a*l.b)}else l=h
r.push(l)}if(B.a.a9(r,new A.dt()))return f
return A.jR(e,r)}},
O(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.bH()
s=e.aW()
if(s==null){for(r=e.ax,q=r.length,p=0;o=r.length,p<o;r.length===q||(0,A.aM)(r),++p){n=r[p]
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
return}m=A.jB(s)
for(r=e.ax,l=0;l<s.length;++l){k=s[l]
if(!(l<r.length))return A.d(r,l)
n=r[l]
if(n.r==null){q=n.c
q===$&&A.ai()
o=k.c
q.textContent=(o<100?B.b.F(o,1):B.c.i(B.b.B(o)))+" Hz"}q=n.d
q===$&&A.ai()
o=k.c
q.textContent=A.cS(o).gaE()
if(n.w==null){q=n.e
q===$&&A.ai()
if(l<m.length){j=m[l]
j=j<0?A.hi(j)+" (next tom is higher)":A.hi(j)}else j="\u2014"
q.textContent=j}q=n.f
q===$&&A.ai()
j=k.d
i=o>=j.a
h=i&&o<=j.b?"fits":"outside"
q.className=h
if(i&&o<=j.b)o="In range"
else o=o>j.b?"Above range":"Below range"
q.textContent=o}r=A.M(s)
g=new A.ag(s,r.h("w(1)").a(new A.du()),r.h("ag<1>")).gj(0)
r=A.M(m)
f=new A.ag(m,r.h("w(1)").a(new A.dv()),r.h("ag<1>")).gj(0)
if(g===0)r="Every tom lands inside its starting range."
else{r=g===1?"tom lands":"toms land"
r=""+g+" "+r+" outside its starting range."}r=A.k([r],t.s)
if(f>0){q=f===1?"larger tom is":"larger toms are"
r.push(""+f+" "+q+" tuned higher than the tom above.")}if(g>0&&e.z!==B.i)r.push(e.bm(s))
e.x.textContent=B.a.c0(r," ")},
bm(a){var s,r,q
t.be.a(a)
s=A.i9(a,1,null,A.M(a).c)
r=s.a9(0,new A.dp())
q=s.a9(0,new A.dq())
if(r&&!q)return"Try wider intervals, or a lower pitch on the smallest tom."
if(q&&!r)return"Try narrower intervals, or a higher pitch on the smallest tom."
return"Try a different pitch on the smallest tom, or adjust the intervals."},
au(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=t.X,a=A.ci(b,b)
try{b=A.hm("ds-plan")
s=B.l.b9(b==null?"{}":b,null)
if(t.f.b(s))a=s}catch(r){if(A.aj(r) instanceof A.bd)return
else throw r}q=J.Q(a,"toms")
if(t.j.b(q)){p=A.i_(t.U)
for(b=J.al(q),o=t.b_,n=t.h,m=t.O,l=t.s;b.k();){k=A.k(A.n(b.gm()).split("-"),l)
if(k.length!==2)continue
j=A.hT(new A.ag(B.w,o.a(new A.dw(k)),n),m)
if(1>=k.length)return A.d(k,1)
i=A.bv(k[1],null)
if(j!=null&&i!=null&&B.a.Y(j.d,i))p.p(0,new A.C(j,i))}if(p.a!==0){b=c.y
if(b.a>0){b.b=b.c=b.d=b.e=b.f=null
b.a=0
b.ao()}b.a8(0,p)}}c.z=A.i6(A.n(J.Q(a,"spacing")))
h=J.Q(a,"interval")
if(A.cR(h)){b=h>=1&&h<=12
g=h}else{g=null
b=!1}if(b)c.Q=g
f=J.Q(a,"top")
if(typeof f=="number")c.r.value=B.b.i(f)
e=J.Q(a,"gaps")
b=t.f
if(b.b(e))e.D(0,new A.dx(c))
d=J.Q(a,"free")
if(b.b(d))d.D(0,new A.dy(c))},
bH(){var s,r,q,p,o=this,n=A.ci(t.N,t.K),m=A.k([],t.s)
for(s=o.y,s=A.f2(s,s.r,s.$ti.c),r=s.$ti.c;s.k();){q=s.d
if(q==null)q=r.a(q)
m.push(q.a.b+"-"+q.b)}n.q(0,"toms",m)
n.q(0,"spacing",o.z.b)
n.q(0,"interval",o.Q)
p=A.cw(A.r(o.r.value))
if(p!=null)n.q(0,"top",p)
n.q(0,"gaps",o.as)
n.q(0,"free",o.at)
return A.fj("ds-plan",B.l.bb(n,null))}}
A.dB.prototype={
$0(){var s=this,r=s.a,q=s.c,p=s.d,o=r.y
if(A.cQ(s.b.checked))o.p(0,new A.C(q,p))
else o.c5(0,new A.C(q,p))
r.ag()},
$S:0}
A.dC.prototype={
$0(){if(A.cQ(this.b.checked))this.a.bJ(this.c)},
$S:0}
A.dD.prototype={
$0(){var s=this.a,r=A.bv(A.r(s.e.value),null)
s.Q=r==null?5:r
s.O()},
$S:0}
A.dE.prototype={
$0(){var s=this.a
s.b3()
s.O()},
$S:0}
A.dA.prototype={
$2(a,b){var s=t.U
return B.c.L(s.a(a).b,s.a(b).b)},
$S:11}
A.dz.prototype={
$0(){return this.a.Q},
$S:33}
A.dr.prototype={
$0(){var s,r=this,q=A.cw(A.r(r.b.value))
if(q!=null){s=r.c
r.a.at.q(0,s.a.b+"-"+s.b,q)}r.a.O()},
$S:0}
A.ds.prototype={
$0(){var s=this.a,r=s.bx(this.b),q=A.bv(A.r(this.c.value),null)
if(q==null)q=5
s.as.q(0,r,q)
s.O()},
$S:0}
A.dt.prototype={
$1(a){A.bW(a)
return a<30||a>1000},
$S:2}
A.du.prototype={
$1(a){var s,r
t.I.a(a)
s=a.d
r=a.c
return!(r>=s.a&&r<=s.b)},
$S:4}
A.dv.prototype={
$1(a){return A.bW(a)<0},
$S:2}
A.dp.prototype={
$1(a){t.I.a(a)
return a.c>a.d.b},
$S:4}
A.dq.prototype={
$1(a){t.I.a(a)
return a.c<a.d.a},
$S:4}
A.dw.prototype={
$1(a){var s
t.O.a(a)
s=this.a
if(0>=s.length)return A.d(s,0)
return a.b===s[0]},
$S:10}
A.dx.prototype={
$2(a,b){if(A.cR(b)&&b>=1&&b<=12)this.a.as.q(0,A.n(a),b)},
$S:5}
A.dy.prototype={
$2(a,b){if(typeof b=="number")this.a.at.q(0,A.n(a),b)},
$S:5};(function aliases(){var s=J.ao.prototype
s.bi=s.i})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u
s(J,"iW","hV",36)
r(A,"jp","ib",3)
r(A,"jq","ic",3)
r(A,"jr","id",3)
q(A,"hg","ji",0)
r(A,"ju","iL",9)
p(A.c9.prototype,"gbP","X",0)
var n
p(n=A.cA.prototype,"gbB","aY",0)
o(n,"gbs","bt",31)
p(n,"gbK","az",0)
p(A.cu.prototype,"gbC","O",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.f,null)
q(A.f,[A.eR,J.cb,A.by,J.aw,A.b,A.b8,A.v,A.dF,A.aB,A.bo,A.aC,A.K,A.a6,A.aO,A.bJ,A.dL,A.dn,A.bb,A.bP,A.am,A.A,A.dg,A.bl,A.bm,A.a0,A.cI,A.cP,A.ed,A.cE,A.W,A.cG,A.ah,A.B,A.cF,A.cN,A.dR,A.bH,A.aT,A.cL,A.aF,A.o,A.c5,A.c7,A.ea,A.dX,A.bz,A.dY,A.bd,A.I,A.cO,A.aU,A.dm,A.dl,A.d6,A.di,A.L,A.cs,A.E,A.G,A.a_,A.cc,A.ad,A.c9,A.cA,A.cM,A.cu])
q(J.cb,[J.ce,J.bf,J.bh,J.bg,J.bi,J.aP,J.aA])
q(J.bh,[J.ao,J.m,A.aR,A.br])
q(J.ao,[J.ct,J.aV,J.an])
r(J.cd,A.by)
r(J.dc,J.m)
q(J.aP,[J.be,J.cf])
q(A.b,[A.aW,A.e,A.ab,A.ag,A.aD])
r(A.bV,A.aW)
r(A.bE,A.bV)
r(A.b9,A.bE)
q(A.v,[A.aQ,A.ae,A.cg,A.cC,A.cx,A.cH,A.bk,A.c1,A.a4,A.bC,A.cB,A.bA,A.c6])
q(A.e,[A.O,A.aa,A.bn,A.bG])
q(A.O,[A.bB,A.ac,A.cK])
r(A.ax,A.ab)
q(A.a6,[A.aY,A.aZ])
r(A.C,A.aY)
r(A.X,A.aZ)
q(A.aO,[A.ba,A.a5])
r(A.bt,A.ae)
q(A.am,[A.c3,A.c4,A.cz,A.eu,A.ew,A.dU,A.dT,A.ei,A.e6,A.ey,A.eD,A.eE,A.dj,A.cX,A.eA,A.es,A.eH,A.dG,A.eC,A.eG,A.d1,A.dt,A.du,A.dv,A.dp,A.dq,A.dw])
q(A.cz,[A.cy,A.aN])
q(A.A,[A.a9,A.bF,A.cJ])
r(A.bj,A.a9)
q(A.c4,[A.ev,A.ej,A.eo,A.e7,A.dk,A.eb,A.eF,A.en,A.d0,A.d2,A.dA,A.dx,A.dy])
q(A.br,[A.cj,A.aS])
q(A.aS,[A.bK,A.bM])
r(A.bL,A.bK)
r(A.bp,A.bL)
r(A.bN,A.bM)
r(A.bq,A.bN)
q(A.bp,[A.ck,A.cl])
q(A.bq,[A.cm,A.cn,A.co,A.cp,A.cq,A.bs,A.cr])
r(A.bQ,A.cH)
q(A.c3,[A.dV,A.dW,A.ee,A.dZ,A.e2,A.e1,A.e0,A.e_,A.e5,A.e4,A.e3,A.dS,A.em,A.cY,A.eB,A.et,A.eI,A.dH,A.eL,A.eK,A.d3,A.d4,A.d5,A.dJ,A.dK,A.dI,A.dB,A.dC,A.dD,A.dE,A.dz,A.dr,A.ds])
r(A.bD,A.cG)
r(A.bI,A.bF)
r(A.bO,A.aT)
r(A.aE,A.bO)
r(A.ch,A.bk)
r(A.dd,A.c5)
q(A.c7,[A.df,A.de])
r(A.e9,A.ea)
q(A.a4,[A.bw,A.ca])
q(A.dX,[A.z,A.bc,A.a1])
s(A.bV,A.o)
s(A.bK,A.o)
s(A.bL,A.K)
s(A.bM,A.o)
s(A.bN,A.K)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",h:"double",N:"num",l:"String",w:"bool",I:"Null",j:"List",f:"Object",T:"Map",t:"JSObject"},mangledNames:{},types:["~()","~(@)","w(h)","~(~())","w(ad)","~(@,@)","I(@)","I()","~(f?,f?)","@(@)","w(z)","a(+(z,a),+(z,a))","f?(f?)","I(~())","I(@,ap)","z()","a(a,a)","w(E)","E()","w(G)","G()","w(a_)","a_()","w(a1)","~(a,@)","I(f,ap)","~(f?)","I(f)","~(t,f?)","~(t,h)","~(l,l,j<l>)","~(h)","l()","a()","@(l)","@(@,l)","a(@,@)","a1()"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.C&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.X&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.iy(v.typeUniverse,JSON.parse('{"ct":"ao","aV":"ao","an":"ao","k1":"aR","m":{"j":["1"],"e":["1"],"t":[],"b":["1"]},"ce":{"w":[],"p":[]},"bf":{"p":[]},"bh":{"t":[]},"ao":{"t":[]},"cd":{"by":[]},"dc":{"m":["1"],"j":["1"],"e":["1"],"t":[],"b":["1"]},"aw":{"H":["1"]},"aP":{"h":[],"N":[],"a8":["N"]},"be":{"h":[],"a":[],"N":[],"a8":["N"],"p":[]},"cf":{"h":[],"N":[],"a8":["N"],"p":[]},"aA":{"l":[],"a8":["l"],"fE":[],"p":[]},"aW":{"b":["2"]},"b8":{"H":["2"]},"bE":{"o":["2"],"j":["2"],"aW":["1","2"],"e":["2"],"b":["2"]},"b9":{"bE":["1","2"],"o":["2"],"j":["2"],"aW":["1","2"],"e":["2"],"b":["2"],"o.E":"2","b.E":"2"},"aQ":{"v":[]},"e":{"b":["1"]},"O":{"e":["1"],"b":["1"]},"bB":{"O":["1"],"e":["1"],"b":["1"],"O.E":"1","b.E":"1"},"aB":{"H":["1"]},"ab":{"b":["2"],"b.E":"2"},"ax":{"ab":["1","2"],"e":["2"],"b":["2"],"b.E":"2"},"bo":{"H":["2"]},"ac":{"O":["2"],"e":["2"],"b":["2"],"O.E":"2","b.E":"2"},"ag":{"b":["1"],"b.E":"1"},"aC":{"H":["1"]},"C":{"aY":[],"a6":[]},"X":{"aZ":[],"a6":[]},"aO":{"T":["1","2"]},"ba":{"aO":["1","2"],"T":["1","2"]},"aD":{"b":["1"],"b.E":"1"},"bJ":{"H":["1"]},"a5":{"aO":["1","2"],"T":["1","2"]},"bt":{"ae":[],"v":[]},"cg":{"v":[]},"cC":{"v":[]},"bP":{"ap":[]},"am":{"ay":[]},"c3":{"ay":[]},"c4":{"ay":[]},"cz":{"ay":[]},"cy":{"ay":[]},"aN":{"ay":[]},"cx":{"v":[]},"a9":{"A":["1","2"],"eT":["1","2"],"T":["1","2"],"A.K":"1","A.V":"2"},"aa":{"e":["1"],"b":["1"],"b.E":"1"},"bl":{"H":["1"]},"bn":{"e":["1"],"b":["1"],"b.E":"1"},"bm":{"H":["1"]},"bj":{"a9":["1","2"],"A":["1","2"],"eT":["1","2"],"T":["1","2"],"A.K":"1","A.V":"2"},"aY":{"a6":[]},"aZ":{"a6":[]},"aR":{"t":[],"eN":[],"p":[]},"br":{"t":[]},"cj":{"eO":[],"t":[],"p":[]},"aS":{"S":["1"],"t":[]},"bp":{"o":["h"],"j":["h"],"S":["h"],"e":["h"],"t":[],"b":["h"],"K":["h"]},"bq":{"o":["a"],"j":["a"],"S":["a"],"e":["a"],"t":[],"b":["a"],"K":["a"]},"ck":{"cZ":[],"o":["h"],"j":["h"],"S":["h"],"e":["h"],"t":[],"b":["h"],"K":["h"],"p":[],"o.E":"h"},"cl":{"d_":[],"o":["h"],"j":["h"],"S":["h"],"e":["h"],"t":[],"b":["h"],"K":["h"],"p":[],"o.E":"h"},"cm":{"d8":[],"o":["a"],"j":["a"],"S":["a"],"e":["a"],"t":[],"b":["a"],"K":["a"],"p":[],"o.E":"a"},"cn":{"d9":[],"o":["a"],"j":["a"],"S":["a"],"e":["a"],"t":[],"b":["a"],"K":["a"],"p":[],"o.E":"a"},"co":{"da":[],"o":["a"],"j":["a"],"S":["a"],"e":["a"],"t":[],"b":["a"],"K":["a"],"p":[],"o.E":"a"},"cp":{"dN":[],"o":["a"],"j":["a"],"S":["a"],"e":["a"],"t":[],"b":["a"],"K":["a"],"p":[],"o.E":"a"},"cq":{"dO":[],"o":["a"],"j":["a"],"S":["a"],"e":["a"],"t":[],"b":["a"],"K":["a"],"p":[],"o.E":"a"},"bs":{"dP":[],"o":["a"],"j":["a"],"S":["a"],"e":["a"],"t":[],"b":["a"],"K":["a"],"p":[],"o.E":"a"},"cr":{"dQ":[],"o":["a"],"j":["a"],"S":["a"],"e":["a"],"t":[],"b":["a"],"K":["a"],"p":[],"o.E":"a"},"cH":{"v":[]},"bQ":{"ae":[],"v":[]},"W":{"v":[]},"bD":{"cG":["1"]},"B":{"az":["1"]},"bF":{"A":["1","2"],"T":["1","2"]},"bI":{"bF":["1","2"],"A":["1","2"],"T":["1","2"],"A.K":"1","A.V":"2"},"bG":{"e":["1"],"b":["1"],"b.E":"1"},"bH":{"H":["1"]},"aE":{"aT":["1"],"fC":["1"],"f_":["1"],"e":["1"],"b":["1"]},"aF":{"H":["1"]},"A":{"T":["1","2"]},"aT":{"f_":["1"],"e":["1"],"b":["1"]},"bO":{"aT":["1"],"f_":["1"],"e":["1"],"b":["1"]},"cJ":{"A":["l","@"],"T":["l","@"],"A.K":"l","A.V":"@"},"cK":{"O":["l"],"e":["l"],"b":["l"],"O.E":"l","b.E":"l"},"bk":{"v":[]},"ch":{"v":[]},"h":{"N":[],"a8":["N"]},"a":{"N":[],"a8":["N"]},"j":{"e":["1"],"b":["1"]},"N":{"a8":["N"]},"l":{"a8":["l"],"fE":[]},"c1":{"v":[]},"ae":{"v":[]},"a4":{"v":[]},"bw":{"v":[]},"ca":{"v":[]},"bC":{"v":[]},"cB":{"v":[]},"bA":{"v":[]},"c6":{"v":[]},"bz":{"v":[]},"cO":{"ap":[]},"aU":{"i8":[]},"da":{"j":["a"],"e":["a"],"b":["a"]},"dQ":{"j":["a"],"e":["a"],"b":["a"]},"dP":{"j":["a"],"e":["a"],"b":["a"]},"d8":{"j":["a"],"e":["a"],"b":["a"]},"dN":{"j":["a"],"e":["a"],"b":["a"]},"d9":{"j":["a"],"e":["a"],"b":["a"]},"dO":{"j":["a"],"e":["a"],"b":["a"]},"cZ":{"j":["h"],"e":["h"],"b":["h"]},"d_":{"j":["h"],"e":["h"],"b":["h"]}}'))
A.ix(v.typeUniverse,JSON.parse('{"bV":2,"aS":1,"bO":1,"c5":2,"c7":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.a7
return{n:s("W"),J:s("eN"),W:s("eO"),d:s("a8<@>"),O:s("z"),r:s("e<@>"),C:s("v"),B:s("cZ"),q:s("d_"),Z:s("ay"),Y:s("a5<a,+(h,h,l)>"),x:s("G"),D:s("d8"),k:s("d9"),E:s("da"),R:s("b<@>"),e:s("m<G>"),G:s("m<f>"),c:s("m<ad>"),L:s("m<+(l,l)>"),s:s("m<l>"),A:s("m<cM>"),u:s("m<h>"),b:s("m<@>"),t:s("m<a>"),cm:s("m<f?>"),a:s("m<N>"),bx:s("m<~()>"),T:s("bf"),m:s("t"),g:s("an"),p:s("S<@>"),cx:s("j<t>"),be:s("j<ad>"),aY:s("j<l>"),j:s("j<@>"),ce:s("T<l,w>"),f:s("T<@,@>"),w:s("E"),P:s("I"),K:s("f"),I:s("ad"),cY:s("k2"),cD:s("+()"),U:s("+(z,a)"),b1:s("+(f?,f?,f?)"),bY:s("a_"),az:s("a1"),l:s("ap"),N:s("l"),bW:s("p"),b7:s("ae"),c0:s("dN"),bk:s("dO"),ca:s("dP"),bX:s("dQ"),cr:s("aV"),h:s("ag<z>"),_:s("B<@>"),dd:s("bI<f?,f?>"),y:s("w"),b_:s("w(z)"),bG:s("w(f)"),i:s("h"),z:s("@"),bd:s("@()"),v:s("@(f)"),Q:s("@(f,ap)"),S:s("a"),bc:s("az<I>?"),aQ:s("t?"),aL:s("j<@>?"),X:s("f?"),aD:s("l?"),F:s("ah<@,@>?"),V:s("cL?"),cG:s("w?"),a2:s("h?"),a3:s("a?"),ae:s("N?"),o:s("N"),H:s("~"),M:s("~()"),cQ:s("~(l,@)"),aS:s("~(a,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.a_=J.cb.prototype
B.a=J.m.prototype
B.c=J.be.prototype
B.b=J.aP.prototype
B.f=J.aA.prototype
B.a0=J.an.prototype
B.a1=J.bh.prototype
B.J=J.ct.prototype
B.z=J.aV.prototype
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

B.l=new A.dd()
B.r=new A.dF()
B.h=new A.dR()
B.m=new A.cO()
B.aa=s([18,20,22,24,26],t.t)
B.a7=s([14,16,18,20],t.a)
B.n=new A.z("Bass drum (kick)",B.aa,22,B.a7,18,3,"kick")
B.a4=s([10,12,13,14],t.t)
B.ai=s([3.5,4,5,5.5,6,6.5,7,8],t.a)
B.d=new A.z("Snare",B.a4,14,B.ai,5.5,0,"snare")
B.a6=s([14,16,18],t.t)
B.a5=s([12,13,14,16],t.a)
B.o=new A.z("Floor tom",B.a6,16,B.a5,14,2,"floorTom")
B.a9=s([8,10,12,13],t.t)
B.a8=s([6,7,8,9,10],t.a)
B.e=new A.z("Rack tom",B.a9,12,B.a8,8,1,"rackTom")
B.a2=new A.de(null)
B.a3=new A.df(null)
B.bf=new A.bc(0,"wood")
B.q=s(["lm","g4m"],t.s)
B.at=new A.E("maple","Maple","Warm and balanced: an even spread of lows and highs with slightly boosted mids. The all-rounder.",B.q)
B.au=new A.E("birch","Birch","Brighter and more focused than maple, with a crisp, dry \u201cpop\u201d on the attack. A studio favorite.",B.q)
B.az=new A.E("mahogany","Mahogany","Warm and dark: robust lows, mellow highs, and less projection than birch. A vintage feel.",B.q)
B.aB=new A.E("oak","Oak","Dry and punchy with strong projection and a solid low-mid.",B.q)
B.af=s(["g4m","md"],t.s)
B.av=new A.E("walnut","Walnut","Warm and rounded, with an even spread of lows, mids and highs and a darker, vintage character.",B.af)
B.bg=new A.bc(1,"synthetic")
B.ah=s(["md","lm"],t.s)
B.ax=new A.E("acrylic","Acrylic","Strong, focused attack and plenty of projection. Sources disagree on whether it reads bright or warm; acrylic kicks often want some damping.",B.ah)
B.bh=new A.bc(2,"metal")
B.H=s(["thomannShell","yamahaSnare"],t.s)
B.aw=new A.E("steel","Steel","Bright and cutting with long sustain and a penetrating rimshot. Heavier and more aggressive than aluminum.",B.H)
B.aC=new A.E("aluminum","Aluminum","Dry, bright and crisp with a short sustain, so it often needs little or no damping.",B.H)
B.am=s(["yamahaSnare","thomannShell"],t.s)
B.as=new A.E("brass","Brass","Dry and articulate with darker overtones, a sharp crack and more low end than most metals.",B.am)
B.G=s(["thomannShell"],t.s)
B.aA=new A.E("bronze","Bronze","Dark and warm, more subdued than brass or steel. Increasingly popular on high-end snares.",B.G)
B.ay=new A.E("copper","Copper","Warmer, with more low end than brass or steel. A long-time orchestral choice.",B.G)
B.t=s([B.at,B.au,B.az,B.aB,B.av,B.ax,B.aw,B.aC,B.as,B.aA,B.ay],A.a7("m<E>"))
B.j=s(["C","C\u266f","D","D\u266f","E","F","F\u266f","G","G\u266f","A","A\u266f","B"],t.s)
B.p=s(["dcp","gc"],t.s)
B.Q=new A.G("1c","Single-ply, coated","Open and warm with lots of overtones and touch sensitivity. The classic for jazz and for brushes.",B.p)
B.Z=new A.G("1x","Single-ply, clear","The most open and bright: maximum sustain and overtones, very responsive to dynamics.",B.p)
B.Y=new A.G("2c","Two-ply, coated","Deeper and more controlled with shorter sustain, plus the durability of two plies.",B.p)
B.U=new A.G("2x","Two-ply, clear","Punchy and fat with a bright attack and a controlled ring. Built for heavy hitting.",B.p)
B.D=s(["gc"],t.s)
B.X=new A.G("ring","With a muffling ring or built-in control","Fewer overtones and a shorter ring, so the drum needs less extra damping.",B.D)
B.C=s([B.Q,B.Z,B.Y,B.U,B.X],t.e)
B.u=s(["Unison","Minor second","Major second","Minor third","Major third","Perfect fourth","Tritone","Perfect fifth","Minor sixth","Major sixth","Minor seventh","Major seventh","Octave"],t.s)
B.ad=s([],A.a7("m<t>"))
B.ae=s([],t.s)
B.ag=s(["gc","dcp"],t.s)
B.W=new A.G("1x","Single-ply, clear","The usual choice: thin enough to let the shell resonate and carry the note.",B.ag)
B.ac=s(["dcp"],t.s)
B.V=new A.G("1c","Single-ply, coated","Like clear single-ply with slightly softened overtones.",B.ac)
B.S=new A.G("2","Two-ply","Rarely recommended underneath: the extra mass tends to choke the shell\u2019s tone.",B.D)
B.ab=s(["daddario"],t.s)
B.T=new A.G("port","Kick front head with a port hole","Releases air so the kick sounds punchier with less boom, and gives a microphone a way in.",B.ab)
B.ak=s(["yamahaSnare"],t.s)
B.R=new A.G("snare","Snare-side (very thin)","Made thin so the snare wires respond to the lightest notes.",B.ak)
B.E=s([B.W,B.V,B.S,B.T,B.R],t.e)
B.k=new A.a1("Same interval","Every tom the same interval below the one above it.",0,"same")
B.y=new A.a1("Custom per gap","Choose the interval between each pair of neighbouring toms.",1,"perGap")
B.i=new A.a1("Free tuning","Type each tom\u2019s pitch. Nothing is enforced; the planner shows the intervals you end up with.",2,"free")
B.F=s([B.k,B.y,B.i],A.a7("m<a1>"))
B.aj=s(["yamaha2"],t.s)
B.aQ=new A.a_("same","Same pitch","The most sustain and the steadiest pitch. Yamaha suggests it as the starting point for toms and kick.",B.aj)
B.I=s(["yamaha2","thomannTuning"],t.s)
B.aR=new A.a_("higher","Resonant head higher","Less sustain and a pitch that bends as the note dies away. Sources disagree on which way it bends, so listen on your own drum.",B.I)
B.aP=new A.a_("lower","Resonant head lower","Less sustain with a slight pitch bend, often heard as a \u201cdropping\u201d tom. As above, sources disagree on the direction; trust your ears.",B.I)
B.v=s([B.aQ,B.aR,B.aP],A.a7("m<a_>"))
B.w=s([B.d,B.e,B.o,B.n],A.a7("m<z>"))
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
B.x=new A.ba(B.aD,[B.b1,B.b_,B.aS,B.aY,B.aX,B.aZ,B.b0,B.aT,B.aV,B.aU,B.aW,B.b2],A.a7("ba<l,L>"))
B.aJ=new A.X(170,250,"dtchart")
B.ao=new A.a5([14,B.aJ],t.Y)
B.aI=new A.X(130,180,"dtchart")
B.aH=new A.X(100,150,"dtchart")
B.aO=new A.X(90,140,"dtchart")
B.ap=new A.a5([10,B.aI,12,B.aH,13,B.aO],t.Y)
B.aN=new A.X(80,120,"dtchart")
B.aM=new A.X(65,100,"dtchart")
B.an=new A.a5([14,B.aN,16,B.aM],t.Y)
B.aL=new A.X(55,80,"dtchart")
B.aK=new A.X(50,70,"dtchart")
B.aq=new A.a5([20,B.aL,22,B.aK],t.Y)
B.ar=new A.a5([B.d,B.ao,B.e,B.ap,B.o,B.an,B.n,B.aq],A.a7("a5<z,T<a,+(h,h,l)>>"))
B.aE=new A.C(B.e,10)
B.aF=new A.C(B.e,12)
B.aG=new A.C(B.o,16)
B.b3=A.a2("eN")
B.b4=A.a2("eO")
B.b5=A.a2("cZ")
B.b6=A.a2("d_")
B.b7=A.a2("d8")
B.b8=A.a2("d9")
B.b9=A.a2("da")
B.ba=A.a2("f")
B.bb=A.a2("dN")
B.bc=A.a2("dO")
B.bd=A.a2("dP")
B.be=A.a2("dQ")})();(function staticFields(){$.e8=null
$.V=A.k([],t.G)
$.fF=null
$.ft=null
$.fs=null
$.hk=null
$.hf=null
$.hq=null
$.eq=null
$.ex=null
$.ff=null
$.ec=A.k([],A.a7("m<j<f>?>"))
$.b_=null
$.bY=null
$.bZ=null
$.f9=!1
$.x=B.h})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"k0","hu",()=>A.er("_$dart_dartClosure"))
s($,"k_","fm",()=>A.er("_$dart_dartClosure_dartJSInterop"))
s($,"kg","hF",()=>A.k([new J.cd()],A.a7("m<by>")))
s($,"k4","hv",()=>A.af(A.dM({
toString:function(){return"$receiver$"}})))
s($,"k5","hw",()=>A.af(A.dM({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"k6","hx",()=>A.af(A.dM(null)))
s($,"k7","hy",()=>A.af(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ka","hB",()=>A.af(A.dM(void 0)))
s($,"kb","hC",()=>A.af(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"k9","hA",()=>A.af(A.fM(null)))
s($,"k8","hz",()=>A.af(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"kd","hE",()=>A.af(A.fM(void 0)))
s($,"kc","hD",()=>A.af(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"ke","fn",()=>A.ia())
s($,"kf","eM",()=>A.cT(B.ba))
s($,"kh","fo",()=>{var r,q,p,o=[]
for(r=1;r<=12;++r){q=B.u[r]
p=r===1?"":"s"
o.push(new A.cc(r,q+" ("+r+" semitone"+p+")"))}return A.eW(o,A.a7("cc"))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.aR,SharedArrayBuffer:A.aR,ArrayBufferView:A.br,DataView:A.cj,Float32Array:A.ck,Float64Array:A.cl,Int16Array:A.cm,Int32Array:A.cn,Int8Array:A.co,Uint16Array:A.cp,Uint32Array:A.cq,Uint8ClampedArray:A.bs,CanvasPixelArray:A.bs,Uint8Array:A.cr})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aS.$nativeSuperclassTag="ArrayBufferView"
A.bK.$nativeSuperclassTag="ArrayBufferView"
A.bL.$nativeSuperclassTag="ArrayBufferView"
A.bp.$nativeSuperclassTag="ArrayBufferView"
A.bM.$nativeSuperclassTag="ArrayBufferView"
A.bN.$nativeSuperclassTag="ArrayBufferView"
A.bq.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.jN
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()