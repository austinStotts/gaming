(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const ua="156",Is=0,_a=1,Ds=2,ko=1,Ns=2,yi=3,Pi=0,Bt=1,li=2,Ri=0,hr=1,xa=2,ya=3,Sa=4,Fs=5,lr=100,Bs=101,Os=102,Ma=103,Ea=104,zs=200,Vs=201,Hs=202,Ws=203,qo=204,jo=205,Gs=206,ks=207,qs=208,js=209,Xs=210,Ys=0,Zs=1,Ks=2,ea=3,Js=4,Qs=5,$s=6,el=7,Xo=0,tl=1,il=2,Ci=0,rl=1,nl=2,al=3,ol=4,sl=5,Yo=300,dr=301,pr=302,ta=303,ia=304,fn=306,ra=1e3,ei=1001,na=1002,Dt=1003,ba=1004,Mn=1005,Xt=1006,ll=1007,Lr=1008,Li=1009,cl=1010,hl=1011,da=1012,Zo=1013,Ti=1014,Ai=1015,Pr=1016,Ko=1017,Jo=1018,zi=1020,ul=1021,ti=1023,dl=1024,pl=1025,Vi=1026,fr=1027,fl=1028,Qo=1029,ml=1030,$o=1031,es=1033,En=33776,bn=33777,wn=33778,Tn=33779,wa=35840,Ta=35841,Aa=35842,Ra=35843,gl=36196,Ca=37492,La=37496,Pa=37808,Ua=37809,Ia=37810,Da=37811,Na=37812,Fa=37813,Ba=37814,Oa=37815,za=37816,Va=37817,Ha=37818,Wa=37819,Ga=37820,ka=37821,An=36492,qa=36494,ja=36495,vl=36283,Xa=36284,Ya=36285,Za=36286,ts=3e3,Hi=3001,_l=3200,xl=3201,yl=0,Sl=1,Wi="",vt="srgb",ui="srgb-linear",mn="display-p3",Rn=7680,Ml=519,El=512,bl=513,wl=514,Tl=515,Al=516,Rl=517,Cl=518,Ll=519,Ka=35044,Ja="300 es",aa=1035,Si=2e3,dn=2001;class gr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let a=0,n=i.length;a<n;a++)i[a].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cn=Math.PI/180,oa=180/Math.PI;function Ur(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[r&255]+Pt[r>>8&255]+Pt[r>>16&255]+Pt[r>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Ft(r,e,t){return Math.max(e,Math.min(t,r))}function Pl(r,e){return(r%e+e)%e}function Ln(r,e,t){return(1-t)*r+t*e}function Qa(r){return(r&r-1)===0&&r!==0}function sa(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function xr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),n=this.x-e.x,o=this.y-e.y;return this.x=n*i-o*a+e.x,this.y=n*a+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,i,a,n,o,s,c,d){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,n,o,s,c,d)}set(e,t,i,a,n,o,s,c,d){const h=this.elements;return h[0]=e,h[1]=a,h[2]=s,h[3]=t,h[4]=n,h[5]=c,h[6]=i,h[7]=o,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,n=this.elements,o=i[0],s=i[3],c=i[6],d=i[1],h=i[4],l=i[7],u=i[2],f=i[5],g=i[8],v=a[0],m=a[3],p=a[6],x=a[1],_=a[4],y=a[7],E=a[2],C=a[5],N=a[8];return n[0]=o*v+s*x+c*E,n[3]=o*m+s*_+c*C,n[6]=o*p+s*y+c*N,n[1]=d*v+h*x+l*E,n[4]=d*m+h*_+l*C,n[7]=d*p+h*y+l*N,n[2]=u*v+f*x+g*E,n[5]=u*m+f*_+g*C,n[8]=u*p+f*y+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],n=e[3],o=e[4],s=e[5],c=e[6],d=e[7],h=e[8];return t*o*h-t*s*d-i*n*h+i*s*c+a*n*d-a*o*c}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],n=e[3],o=e[4],s=e[5],c=e[6],d=e[7],h=e[8],l=h*o-s*d,u=s*c-h*n,f=d*n-o*c,g=t*l+i*u+a*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=l*v,e[1]=(a*d-h*i)*v,e[2]=(s*i-a*o)*v,e[3]=u*v,e[4]=(h*t-a*c)*v,e[5]=(a*n-s*t)*v,e[6]=f*v,e[7]=(i*c-d*t)*v,e[8]=(o*t-i*n)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,n,o,s){const c=Math.cos(n),d=Math.sin(n);return this.set(i*c,i*d,-i*(c*o+d*s)+o+e,-a*d,a*c,-a*(-d*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Pn.makeScale(e,t)),this}rotate(e){return this.premultiply(Pn.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pn=new it;function is(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function pn(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ul(){const r=pn("canvas");return r.style.display="block",r}const $a={};function Cr(r){r in $a||($a[r]=!0,console.warn(r))}function ur(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Un(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Il=new it().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Dl=new it().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Nl(r){return r.convertSRGBToLinear().applyMatrix3(Dl)}function Fl(r){return r.applyMatrix3(Il).convertLinearToSRGB()}const Bl={[ui]:r=>r,[vt]:r=>r.convertSRGBToLinear(),[mn]:Nl},Ol={[ui]:r=>r,[vt]:r=>r.convertLinearToSRGB(),[mn]:Fl},Zt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return ui},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Bl[e],a=Ol[t];if(i===void 0||a===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return a(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let qi;class rs{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=pn("canvas")),qi.width=e.width,qi.height=e.height;const i=qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pn("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),n=a.data;for(let o=0;o<n.length;o++)n[o]=ur(n[o]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zl=0;class ns{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=Ur(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let n;if(Array.isArray(a)){n=[];for(let o=0,s=a.length;o<s;o++)a[o].isDataTexture?n.push(In(a[o].image)):n.push(In(a[o]))}else n=In(a);i.url=n}return t||(e.images[this.uuid]=i),i}}function In(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rs.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vl=0;class kt extends gr{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=ei,a=ei,n=Xt,o=Lr,s=ti,c=Li,d=kt.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=Ur(),this.name="",this.source=new ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=n,this.minFilter=o,this.anisotropy=d,this.format=s,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Hi?vt:Wi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ra:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ra:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?Hi:ts}set encoding(e){Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hi?vt:Wi}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Yo;kt.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,a=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,n=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a+o[12]*n,this.y=o[1]*t+o[5]*i+o[9]*a+o[13]*n,this.z=o[2]*t+o[6]*i+o[10]*a+o[14]*n,this.w=o[3]*t+o[7]*i+o[11]*a+o[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,n;const o=e.elements,s=o[0],c=o[4],d=o[8],h=o[1],l=o[5],u=o[9],f=o[2],g=o[6],v=o[10];if(Math.abs(c-h)<.01&&Math.abs(d-f)<.01&&Math.abs(u-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+f)<.1&&Math.abs(u+g)<.1&&Math.abs(s+l+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(s+1)/2,x=(l+1)/2,_=(v+1)/2,y=(c+h)/4,E=(d+f)/4,C=(u+g)/4;return p>x&&p>_?p<.01?(i=0,a=.707106781,n=.707106781):(i=Math.sqrt(p),a=y/i,n=E/i):x>_?x<.01?(i=.707106781,a=0,n=.707106781):(a=Math.sqrt(x),i=y/a,n=C/a):_<.01?(i=.707106781,a=.707106781,n=0):(n=Math.sqrt(_),i=E/n,a=C/n),this.set(i,a,n,t),this}let m=Math.sqrt((g-u)*(g-u)+(d-f)*(d-f)+(h-c)*(h-c));return Math.abs(m)<.001&&(m=1),this.x=(g-u)/m,this.y=(d-f)/m,this.z=(h-c)/m,this.w=Math.acos((s+l+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hl extends gr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(Cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hi?vt:Wi),this.texture=new kt(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Xt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ns(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends Hl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class as extends kt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wl extends kt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,n,o,s){let c=i[a+0],d=i[a+1],h=i[a+2],l=i[a+3];const u=n[o+0],f=n[o+1],g=n[o+2],v=n[o+3];if(s===0){e[t+0]=c,e[t+1]=d,e[t+2]=h,e[t+3]=l;return}if(s===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(l!==v||c!==u||d!==f||h!==g){let m=1-s;const p=c*u+d*f+h*g+l*v,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),C=Math.atan2(E,p*x);m=Math.sin(m*C)/E,s=Math.sin(s*C)/E}const y=s*x;if(c=c*m+u*y,d=d*m+f*y,h=h*m+g*y,l=l*m+v*y,m===1-s){const E=1/Math.sqrt(c*c+d*d+h*h+l*l);c*=E,d*=E,h*=E,l*=E}}e[t]=c,e[t+1]=d,e[t+2]=h,e[t+3]=l}static multiplyQuaternionsFlat(e,t,i,a,n,o){const s=i[a],c=i[a+1],d=i[a+2],h=i[a+3],l=n[o],u=n[o+1],f=n[o+2],g=n[o+3];return e[t]=s*g+h*l+c*f-d*u,e[t+1]=c*g+h*u+d*l-s*f,e[t+2]=d*g+h*f+s*u-c*l,e[t+3]=h*g-s*l-c*u-d*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,a=e._y,n=e._z,o=e._order,s=Math.cos,c=Math.sin,d=s(i/2),h=s(a/2),l=s(n/2),u=c(i/2),f=c(a/2),g=c(n/2);switch(o){case"XYZ":this._x=u*h*l+d*f*g,this._y=d*f*l-u*h*g,this._z=d*h*g+u*f*l,this._w=d*h*l-u*f*g;break;case"YXZ":this._x=u*h*l+d*f*g,this._y=d*f*l-u*h*g,this._z=d*h*g-u*f*l,this._w=d*h*l+u*f*g;break;case"ZXY":this._x=u*h*l-d*f*g,this._y=d*f*l+u*h*g,this._z=d*h*g+u*f*l,this._w=d*h*l-u*f*g;break;case"ZYX":this._x=u*h*l-d*f*g,this._y=d*f*l+u*h*g,this._z=d*h*g-u*f*l,this._w=d*h*l+u*f*g;break;case"YZX":this._x=u*h*l+d*f*g,this._y=d*f*l+u*h*g,this._z=d*h*g-u*f*l,this._w=d*h*l-u*f*g;break;case"XZY":this._x=u*h*l-d*f*g,this._y=d*f*l-u*h*g,this._z=d*h*g+u*f*l,this._w=d*h*l+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],n=t[8],o=t[1],s=t[5],c=t[9],d=t[2],h=t[6],l=t[10],u=i+s+l;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(n-d)*f,this._z=(o-a)*f}else if(i>s&&i>l){const f=2*Math.sqrt(1+i-s-l);this._w=(h-c)/f,this._x=.25*f,this._y=(a+o)/f,this._z=(n+d)/f}else if(s>l){const f=2*Math.sqrt(1+s-i-l);this._w=(n-d)/f,this._x=(a+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+l-i-s);this._w=(o-a)/f,this._x=(n+d)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,n=e._z,o=e._w,s=t._x,c=t._y,d=t._z,h=t._w;return this._x=i*h+o*s+a*d-n*c,this._y=a*h+o*c+n*s-i*d,this._z=n*h+o*d+i*c-a*s,this._w=o*h-i*s-a*c-n*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,n=this._z,o=this._w;let s=o*e._w+i*e._x+a*e._y+n*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=a,this._z=n,this;const c=1-s*s;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*a+t*this._y,this._z=f*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(c),h=Math.atan2(d,s),l=Math.sin((1-t)*h)/d,u=Math.sin(t*h)/d;return this._w=o*l+this._w*u,this._x=i*l+this._x*u,this._y=a*l+this._y*u,this._z=n*l+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(n),i*Math.cos(n),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,i=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*a,this.y=n[1]*t+n[4]*i+n[7]*a,this.z=n[2]*t+n[5]*i+n[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,n=e.elements,o=1/(n[3]*t+n[7]*i+n[11]*a+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*a+n[12])*o,this.y=(n[1]*t+n[5]*i+n[9]*a+n[13])*o,this.z=(n[2]*t+n[6]*i+n[10]*a+n[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,n=e.x,o=e.y,s=e.z,c=e.w,d=c*t+o*a-s*i,h=c*i+s*t-n*a,l=c*a+n*i-o*t,u=-n*t-o*i-s*a;return this.x=d*c+u*-n+h*-s-l*-o,this.y=h*c+u*-o+l*-n-d*-s,this.z=l*c+u*-s+d*-o-h*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*a,this.y=n[1]*t+n[5]*i+n[9]*a,this.z=n[2]*t+n[6]*i+n[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,n=e.z,o=t.x,s=t.y,c=t.z;return this.x=a*c-n*s,this.y=n*o-i*c,this.z=i*s-a*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dn.copy(this).projectOnVector(e),this.sub(Dn)}reflect(e){return this.sub(Dn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dn=new ie,eo=new Ir;class Dr{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ji.copy(e.boundingBox),ji.applyMatrix4(e.matrixWorld),this.union(ji);else{const a=e.geometry;if(a!==void 0)if(t&&a.attributes!==void 0&&a.attributes.position!==void 0){const n=a.attributes.position;for(let o=0,s=n.count;o<s;o++)mi.fromBufferAttribute(n,o).applyMatrix4(e.matrixWorld),this.expandByPoint(mi)}else a.boundingBox===null&&a.computeBoundingBox(),ji.copy(a.boundingBox),ji.applyMatrix4(e.matrixWorld),this.union(ji)}const i=e.children;for(let a=0,n=i.length;a<n;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),zr.subVectors(this.max,yr),Xi.subVectors(e.a,yr),Yi.subVectors(e.b,yr),Zi.subVectors(e.c,yr),Mi.subVectors(Yi,Xi),Ei.subVectors(Zi,Yi),Ui.subVectors(Xi,Zi);let t=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-Ui.z,Ui.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,Ui.z,0,-Ui.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-Ui.y,Ui.x,0];return!Nn(t,Xi,Yi,Zi,zr)||(t=[1,0,0,0,1,0,0,0,1],!Nn(t,Xi,Yi,Zi,zr))?!1:(Vr.crossVectors(Mi,Ei),t=[Vr.x,Vr.y,Vr.z],Nn(t,Xi,Yi,Zi,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],mi=new ie,ji=new Dr,Xi=new ie,Yi=new ie,Zi=new ie,Mi=new ie,Ei=new ie,Ui=new ie,yr=new ie,zr=new ie,Vr=new ie,Ii=new ie;function Nn(r,e,t,i,a){for(let n=0,o=r.length-3;n<=o;n+=3){Ii.fromArray(r,n);const s=a.x*Math.abs(Ii.x)+a.y*Math.abs(Ii.y)+a.z*Math.abs(Ii.z),c=e.dot(Ii),d=t.dot(Ii),h=i.dot(Ii);if(Math.max(-Math.max(c,d,h),Math.min(c,d,h))>s)return!1}return!0}const Gl=new Dr,Sr=new ie,Fn=new ie;class gn{constructor(e=new ie,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gl.setFromPoints(e).getCenter(i);let a=0;for(let n=0,o=e.length;n<o;n++)a=Math.max(a,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Sr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Fn)),this.expandByPoint(Sr.copy(e.center).sub(Fn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new ie,Bn=new ie,Hr=new ie,bi=new ie,On=new ie,Wr=new ie,zn=new ie;class os{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Bn.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Bn);const n=e.distanceTo(t)*.5,o=-this.direction.dot(Hr),s=bi.dot(this.direction),c=-bi.dot(Hr),d=bi.lengthSq(),h=Math.abs(1-o*o);let l,u,f,g;if(h>0)if(l=o*c-s,u=o*s-c,g=n*h,l>=0)if(u>=-g)if(u<=g){const v=1/h;l*=v,u*=v,f=l*(l+o*u+2*s)+u*(o*l+u+2*c)+d}else u=n,l=Math.max(0,-(o*u+s)),f=-l*l+u*(u+2*c)+d;else u=-n,l=Math.max(0,-(o*u+s)),f=-l*l+u*(u+2*c)+d;else u<=-g?(l=Math.max(0,-(-o*n+s)),u=l>0?-n:Math.min(Math.max(-n,-c),n),f=-l*l+u*(u+2*c)+d):u<=g?(l=0,u=Math.min(Math.max(-n,-c),n),f=u*(u+2*c)+d):(l=Math.max(0,-(o*n+s)),u=l>0?n:Math.min(Math.max(-n,-c),n),f=-l*l+u*(u+2*c)+d);else u=o>0?-n:n,l=Math.max(0,-(o*u+s)),f=-l*l+u*(u+2*c)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,l),a&&a.copy(Bn).addScaledVector(Hr,u),f}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),a=gi.dot(gi)-i*i,n=e.radius*e.radius;if(a>n)return null;const o=Math.sqrt(n-a),s=i-o,c=i+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,n,o,s,c;const d=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,u=this.origin;return d>=0?(i=(e.min.x-u.x)*d,a=(e.max.x-u.x)*d):(i=(e.max.x-u.x)*d,a=(e.min.x-u.x)*d),h>=0?(n=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(n=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||n>a||((n>i||isNaN(i))&&(i=n),(o<a||isNaN(a))&&(a=o),l>=0?(s=(e.min.z-u.z)*l,c=(e.max.z-u.z)*l):(s=(e.max.z-u.z)*l,c=(e.min.z-u.z)*l),i>c||s>a)||((s>i||i!==i)&&(i=s),(c<a||a!==a)&&(a=c),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,a,n){On.subVectors(t,e),Wr.subVectors(i,e),zn.crossVectors(On,Wr);let o=this.direction.dot(zn),s;if(o>0){if(a)return null;s=1}else if(o<0)s=-1,o=-o;else return null;bi.subVectors(this.origin,e);const c=s*this.direction.dot(Wr.crossVectors(bi,Wr));if(c<0)return null;const d=s*this.direction.dot(On.cross(bi));if(d<0||c+d>o)return null;const h=-s*bi.dot(zn);return h<0?null:this.at(h/o,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,i,a,n,o,s,c,d,h,l,u,f,g,v,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,n,o,s,c,d,h,l,u,f,g,v,m)}set(e,t,i,a,n,o,s,c,d,h,l,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=a,p[1]=n,p[5]=o,p[9]=s,p[13]=c,p[2]=d,p[6]=h,p[10]=l,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Ki.setFromMatrixColumn(e,0).length(),n=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,n=e.z,o=Math.cos(i),s=Math.sin(i),c=Math.cos(a),d=Math.sin(a),h=Math.cos(n),l=Math.sin(n);if(e.order==="XYZ"){const u=o*h,f=o*l,g=s*h,v=s*l;t[0]=c*h,t[4]=-c*l,t[8]=d,t[1]=f+g*d,t[5]=u-v*d,t[9]=-s*c,t[2]=v-u*d,t[6]=g+f*d,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,f=c*l,g=d*h,v=d*l;t[0]=u+v*s,t[4]=g*s-f,t[8]=o*d,t[1]=o*l,t[5]=o*h,t[9]=-s,t[2]=f*s-g,t[6]=v+u*s,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,f=c*l,g=d*h,v=d*l;t[0]=u-v*s,t[4]=-o*l,t[8]=g+f*s,t[1]=f+g*s,t[5]=o*h,t[9]=v-u*s,t[2]=-o*d,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,f=o*l,g=s*h,v=s*l;t[0]=c*h,t[4]=g*d-f,t[8]=u*d+v,t[1]=c*l,t[5]=v*d+u,t[9]=f*d-g,t[2]=-d,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,f=o*d,g=s*c,v=s*d;t[0]=c*h,t[4]=v-u*l,t[8]=g*l+f,t[1]=l,t[5]=o*h,t[9]=-s*h,t[2]=-d*h,t[6]=f*l+g,t[10]=u-v*l}else if(e.order==="XZY"){const u=o*c,f=o*d,g=s*c,v=s*d;t[0]=c*h,t[4]=-l,t[8]=d*h,t[1]=u*l+v,t[5]=o*h,t[9]=f*l-g,t[2]=g*l-f,t[6]=s*h,t[10]=v*l+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kl,e,ql)}lookAt(e,t,i){const a=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),wi.crossVectors(i,Wt),wi.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),wi.crossVectors(i,Wt)),wi.normalize(),Gr.crossVectors(Wt,wi),a[0]=wi.x,a[4]=Gr.x,a[8]=Wt.x,a[1]=wi.y,a[5]=Gr.y,a[9]=Wt.y,a[2]=wi.z,a[6]=Gr.z,a[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,n=this.elements,o=i[0],s=i[4],c=i[8],d=i[12],h=i[1],l=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],x=i[3],_=i[7],y=i[11],E=i[15],C=a[0],N=a[4],z=a[8],S=a[12],M=a[1],U=a[5],V=a[9],D=a[13],G=a[2],W=a[6],oe=a[10],F=a[14],I=a[3],Z=a[7],X=a[11],T=a[15];return n[0]=o*C+s*M+c*G+d*I,n[4]=o*N+s*U+c*W+d*Z,n[8]=o*z+s*V+c*oe+d*X,n[12]=o*S+s*D+c*F+d*T,n[1]=h*C+l*M+u*G+f*I,n[5]=h*N+l*U+u*W+f*Z,n[9]=h*z+l*V+u*oe+f*X,n[13]=h*S+l*D+u*F+f*T,n[2]=g*C+v*M+m*G+p*I,n[6]=g*N+v*U+m*W+p*Z,n[10]=g*z+v*V+m*oe+p*X,n[14]=g*S+v*D+m*F+p*T,n[3]=x*C+_*M+y*G+E*I,n[7]=x*N+_*U+y*W+E*Z,n[11]=x*z+_*V+y*oe+E*X,n[15]=x*S+_*D+y*F+E*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],n=e[12],o=e[1],s=e[5],c=e[9],d=e[13],h=e[2],l=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+n*c*l-a*d*l-n*s*u+i*d*u+a*s*f-i*c*f)+v*(+t*c*f-t*d*u+n*o*u-a*o*f+a*d*h-n*c*h)+m*(+t*d*l-t*s*f-n*o*l+i*o*f+n*s*h-i*d*h)+p*(-a*s*h-t*c*l+t*s*u+a*o*l-i*o*u+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],n=e[3],o=e[4],s=e[5],c=e[6],d=e[7],h=e[8],l=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=l*m*d-v*u*d+v*c*f-s*m*f-l*c*p+s*u*p,_=g*u*d-h*m*d-g*c*f+o*m*f+h*c*p-o*u*p,y=h*v*d-g*l*d+g*s*f-o*v*f-h*s*p+o*l*p,E=g*l*c-h*v*c-g*s*u+o*v*u+h*s*m-o*l*m,C=t*x+i*_+a*y+n*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/C;return e[0]=x*N,e[1]=(v*u*n-l*m*n-v*a*f+i*m*f+l*a*p-i*u*p)*N,e[2]=(s*m*n-v*c*n+v*a*d-i*m*d-s*a*p+i*c*p)*N,e[3]=(l*c*n-s*u*n-l*a*d+i*u*d+s*a*f-i*c*f)*N,e[4]=_*N,e[5]=(h*m*n-g*u*n+g*a*f-t*m*f-h*a*p+t*u*p)*N,e[6]=(g*c*n-o*m*n-g*a*d+t*m*d+o*a*p-t*c*p)*N,e[7]=(o*u*n-h*c*n+h*a*d-t*u*d-o*a*f+t*c*f)*N,e[8]=y*N,e[9]=(g*l*n-h*v*n-g*i*f+t*v*f+h*i*p-t*l*p)*N,e[10]=(o*v*n-g*s*n+g*i*d-t*v*d-o*i*p+t*s*p)*N,e[11]=(h*s*n-o*l*n-h*i*d+t*l*d+o*i*f-t*s*f)*N,e[12]=E*N,e[13]=(h*v*a-g*l*a+g*i*u-t*v*u-h*i*m+t*l*m)*N,e[14]=(g*s*a-o*v*a-g*i*c+t*v*c+o*i*m-t*s*m)*N,e[15]=(o*l*a-h*s*a+h*i*c-t*l*c-o*i*u+t*s*u)*N,this}scale(e){const t=this.elements,i=e.x,a=e.y,n=e.z;return t[0]*=i,t[4]*=a,t[8]*=n,t[1]*=i,t[5]*=a,t[9]*=n,t[2]*=i,t[6]*=a,t[10]*=n,t[3]*=i,t[7]*=a,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),n=1-i,o=e.x,s=e.y,c=e.z,d=n*o,h=n*s;return this.set(d*o+i,d*s-a*c,d*c+a*s,0,d*s+a*c,h*s+i,h*c-a*o,0,d*c-a*s,h*c+a*o,n*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,n,o){return this.set(1,i,n,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,n=t._x,o=t._y,s=t._z,c=t._w,d=n+n,h=o+o,l=s+s,u=n*d,f=n*h,g=n*l,v=o*h,m=o*l,p=s*l,x=c*d,_=c*h,y=c*l,E=i.x,C=i.y,N=i.z;return a[0]=(1-(v+p))*E,a[1]=(f+y)*E,a[2]=(g-_)*E,a[3]=0,a[4]=(f-y)*C,a[5]=(1-(u+p))*C,a[6]=(m+x)*C,a[7]=0,a[8]=(g+_)*N,a[9]=(m-x)*N,a[10]=(1-(u+v))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let n=Ki.set(a[0],a[1],a[2]).length();const o=Ki.set(a[4],a[5],a[6]).length(),s=Ki.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),e.x=a[12],e.y=a[13],e.z=a[14],Kt.copy(this);const c=1/n,d=1/o,h=1/s;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=d,Kt.elements[5]*=d,Kt.elements[6]*=d,Kt.elements[8]*=h,Kt.elements[9]*=h,Kt.elements[10]*=h,t.setFromRotationMatrix(Kt),i.x=n,i.y=o,i.z=s,this}makePerspective(e,t,i,a,n,o,s=Si){const c=this.elements,d=2*n/(t-e),h=2*n/(i-a),l=(t+e)/(t-e),u=(i+a)/(i-a);let f,g;if(s===Si)f=-(o+n)/(o-n),g=-2*o*n/(o-n);else if(s===dn)f=-o/(o-n),g=-o*n/(o-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=d,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,a,n,o,s=Si){const c=this.elements,d=1/(t-e),h=1/(i-a),l=1/(o-n),u=(t+e)*d,f=(i+a)*h;let g,v;if(s===Si)g=(o+n)*l,v=-2*l;else if(s===dn)g=n*l,v=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ki=new ie,Kt=new At,kl=new ie(0,0,0),ql=new ie(1,1,1),wi=new ie,Gr=new ie,Wt=new ie,to=new At,io=new Ir;class Nr{constructor(e=0,t=0,i=0,a=Nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,n=a[0],o=a[4],s=a[8],c=a[1],d=a[5],h=a[9],l=a[2],u=a[6],f=a[10];switch(t){case"XYZ":this._y=Math.asin(Ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,n)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-l,n),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-l,n)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return to.makeRotationFromQuaternion(e),this.setFromRotationMatrix(to,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return io.setFromEuler(this),this.setFromQuaternion(io,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nr.DEFAULT_ORDER="XYZ";class ss{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jl=0;const ro=new ie,Ji=new Ir,vi=new At,kr=new ie,Mr=new ie,Xl=new ie,Yl=new Ir,no=new ie(1,0,0),ao=new ie(0,1,0),oo=new ie(0,0,1),Zl={type:"added"},Kl={type:"removed"};class Ot extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new ie,t=new Nr,i=new Ir,a=new ie(1,1,1);function n(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new At},normalMatrix:{value:new it}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(no,e)}rotateY(e){return this.rotateOnAxis(ao,e)}rotateZ(e){return this.rotateOnAxis(oo,e)}translateOnAxis(e,t){return ro.copy(e).applyQuaternion(this.quaternion),this.position.add(ro.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(no,e)}translateY(e){return this.translateOnAxis(ao,e)}translateZ(e){return this.translateOnAxis(oo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kr.copy(e):kr.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Mr,kr,this.up):vi.lookAt(kr,Mr,this.up),this.quaternion.setFromRotationMatrix(vi),a&&(vi.extractRotation(a.matrixWorld),Ji.setFromRotationMatrix(vi),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let a=0,n=this.children.length;a<n;a++){const o=this.children[a].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,Xl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Yl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let n=0,o=a.length;n<o;n++){const s=a[n];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function n(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){const l=c[d];n(e.shapes,l)}else n(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,d=this.material.length;c<d;c++)s.push(n(e.materials,this.material[c]));a.material=s}else a.material=n(e.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];a.animations.push(n(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),d=o(e.textures),h=o(e.images),l=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);s.length>0&&(i.geometries=s),c.length>0&&(i.materials=c),d.length>0&&(i.textures=d),h.length>0&&(i.images=h),l.length>0&&(i.shapes=l),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=a,i;function o(s){const c=[];for(const d in s){const h=s[d];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Ot.DEFAULT_UP=new ie(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new ie,_i=new ie,Vn=new ie,xi=new ie,Qi=new ie,$i=new ie,so=new ie,Hn=new ie,Wn=new ie,Gn=new ie;let qr=!1;class $t{constructor(e=new ie,t=new ie,i=new ie){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Jt.subVectors(e,t),a.cross(Jt);const n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(e,t,i,a,n){Jt.subVectors(a,t),_i.subVectors(i,t),Vn.subVectors(e,t);const o=Jt.dot(Jt),s=Jt.dot(_i),c=Jt.dot(Vn),d=_i.dot(_i),h=_i.dot(Vn),l=o*d-s*s;if(l===0)return n.set(-2,-1,-1);const u=1/l,f=(d*c-s*h)*u,g=(o*h-s*c)*u;return n.set(1-f-g,g,f)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,xi),xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getUV(e,t,i,a,n,o,s,c){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),this.getInterpolation(e,t,i,a,n,o,s,c)}static getInterpolation(e,t,i,a,n,o,s,c){return this.getBarycoord(e,t,i,a,xi),c.setScalar(0),c.addScaledVector(n,xi.x),c.addScaledVector(o,xi.y),c.addScaledVector(s,xi.z),c}static isFrontFacing(e,t,i,a){return Jt.subVectors(i,t),_i.subVectors(e,t),Jt.cross(_i).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Jt.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,n){return qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qr=!0),$t.getInterpolation(e,this.a,this.b,this.c,t,i,a,n)}getInterpolation(e,t,i,a,n){return $t.getInterpolation(e,this.a,this.b,this.c,t,i,a,n)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,n=this.c;let o,s;Qi.subVectors(a,i),$i.subVectors(n,i),Hn.subVectors(e,i);const c=Qi.dot(Hn),d=$i.dot(Hn);if(c<=0&&d<=0)return t.copy(i);Wn.subVectors(e,a);const h=Qi.dot(Wn),l=$i.dot(Wn);if(h>=0&&l<=h)return t.copy(a);const u=c*l-h*d;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Qi,o);Gn.subVectors(e,n);const f=Qi.dot(Gn),g=$i.dot(Gn);if(g>=0&&f<=g)return t.copy(n);const v=f*d-c*g;if(v<=0&&d>=0&&g<=0)return s=d/(d-g),t.copy(i).addScaledVector($i,s);const m=h*g-f*l;if(m<=0&&l-h>=0&&f-g>=0)return so.subVectors(n,a),s=(l-h)/(l-h+(f-g)),t.copy(a).addScaledVector(so,s);const p=1/(m+v+u);return o=v*p,s=u*p,t.copy(i).addScaledVector(Qi,o).addScaledVector($i,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Jl=0;class Fr extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=hr,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=jo,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rn,this.stencilZFail=Rn,this.stencilZPass=Rn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(n){const o=[];for(const s in n){const c=n[s];delete c.metadata,o.push(c)}return o}if(t){const n=a(e.textures),o=a(e.images);n.length>0&&(i.textures=n),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let n=0;n!==a;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ls={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qt={h:0,s:0,l:0},jr={h:0,s:0,l:0};function kn(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Zt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Zt.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Zt.workingColorSpace){if(e=Pl(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,o=2*i-n;this.r=kn(o,n,e+1/3),this.g=kn(o,n,e),this.b=kn(o,n,e-1/3)}return Zt.toWorkingColorSpace(this,a),this}setStyle(e,t=vt){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const o=a[1],s=a[2];switch(o){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=a[1],o=n.length;if(o===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const i=ls[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Zt.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Ft(Ut.r*255,0,255))*65536+Math.round(Ft(Ut.g*255,0,255))*256+Math.round(Ft(Ut.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ut.copy(this),t);const i=Ut.r,a=Ut.g,n=Ut.b,o=Math.max(i,a,n),s=Math.min(i,a,n);let c,d;const h=(s+o)/2;if(s===o)c=0,d=0;else{const l=o-s;switch(d=h<=.5?l/(o+s):l/(2-o-s),o){case i:c=(a-n)/l+(a<n?6:0);break;case a:c=(n-i)/l+2;break;case n:c=(i-a)/l+4;break}c/=6}return e.h=c,e.s=d,e.l=h,e}getRGB(e,t=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=vt){Zt.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,a=Ut.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Qt),Qt.h+=e,Qt.s+=t,Qt.l+=i,this.setHSL(Qt.h,Qt.s,Qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qt),e.getHSL(jr);const i=Ln(Qt.h,jr.h,t),a=Ln(Qt.s,jr.s,t),n=Ln(Qt.l,jr.l,t);return this.setHSL(i,a,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*a,this.g=n[1]*t+n[4]*i+n[7]*a,this.b=n[2]*t+n[5]*i+n[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new pt;pt.NAMES=ls;class Br extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new ie,Xr=new dt;class ci{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ka,this.updateRange={offset:0,count:-1},this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,n=this.itemSize;a<n;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),a=Nt(a,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ka&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class cs extends ci{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hs extends ci{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ri extends ci{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ql=0;const qt=new At,qn=new Ot,er=new ie,Gt=new Dr,Er=new Dr,Tt=new ie;class ni extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(is(e)?hs:cs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new it().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return qn.lookAt(e),qn.updateMatrix(),this.applyMatrix4(qn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new ri(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const n=t[i];Gt.setFromBufferAttribute(n),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ie,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const s=t[n];Er.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(Gt.min,Er.min),Gt.expandByPoint(Tt),Tt.addVectors(Gt.max,Er.max),Gt.expandByPoint(Tt)):(Gt.expandByPoint(Er.min),Gt.expandByPoint(Er.max))}Gt.getCenter(i);let a=0;for(let n=0,o=e.count;n<o;n++)Tt.fromBufferAttribute(e,n),a=Math.max(a,i.distanceToSquared(Tt));if(t)for(let n=0,o=t.length;n<o;n++){const s=t[n],c=this.morphTargetsRelative;for(let d=0,h=s.count;d<h;d++)Tt.fromBufferAttribute(s,d),c&&(er.fromBufferAttribute(e,d),Tt.add(er)),a=Math.max(a,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,n=t.normal.array,o=t.uv.array,s=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,d=[],h=[];for(let M=0;M<s;M++)d[M]=new ie,h[M]=new ie;const l=new ie,u=new ie,f=new ie,g=new dt,v=new dt,m=new dt,p=new ie,x=new ie;function _(M,U,V){l.fromArray(a,M*3),u.fromArray(a,U*3),f.fromArray(a,V*3),g.fromArray(o,M*2),v.fromArray(o,U*2),m.fromArray(o,V*2),u.sub(l),f.sub(l),v.sub(g),m.sub(g);const D=1/(v.x*m.y-m.x*v.y);isFinite(D)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(D),x.copy(f).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(D),d[M].add(p),d[U].add(p),d[V].add(p),h[M].add(x),h[U].add(x),h[V].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let M=0,U=y.length;M<U;++M){const V=y[M],D=V.start,G=V.count;for(let W=D,oe=D+G;W<oe;W+=3)_(i[W+0],i[W+1],i[W+2])}const E=new ie,C=new ie,N=new ie,z=new ie;function S(M){N.fromArray(n,M*3),z.copy(N);const U=d[M];E.copy(U),E.sub(N.multiplyScalar(N.dot(U))).normalize(),C.crossVectors(z,U);const V=C.dot(h[M])<0?-1:1;c[M*4]=E.x,c[M*4+1]=E.y,c[M*4+2]=E.z,c[M*4+3]=V}for(let M=0,U=y.length;M<U;++M){const V=y[M],D=V.start,G=V.count;for(let W=D,oe=D+G;W<oe;W+=3)S(i[W+0]),S(i[W+1]),S(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const a=new ie,n=new ie,o=new ie,s=new ie,c=new ie,d=new ie,h=new ie,l=new ie;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);a.fromBufferAttribute(t,g),n.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,n),l.subVectors(a,n),h.cross(l),s.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),d.fromBufferAttribute(i,m),s.add(h),c.add(h),d.add(h),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let u=0,f=t.count;u<f;u+=3)a.fromBufferAttribute(t,u+0),n.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,n),l.subVectors(a,n),h.cross(l),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(s,c){const d=s.array,h=s.itemSize,l=s.normalized,u=new d.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){s.isInterleavedBufferAttribute?f=c[v]*s.data.stride+s.offset:f=c[v]*h;for(let p=0;p<h;p++)u[g++]=d[f++]}return new ci(u,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,i=this.index.array,a=this.attributes;for(const s in a){const c=a[s],d=e(c,i);t.setAttribute(s,d)}const n=this.morphAttributes;for(const s in n){const c=[],d=n[s];for(let h=0,l=d.length;h<l;h++){const u=d[h],f=e(u,i);c.push(f)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const d=o[s];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const d=i[c];e.data.attributes[c]=d.toJSON(e.data)}const a={};let n=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],h=[];for(let l=0,u=d.length;l<u;l++){const f=d[l];h.push(f.toJSON(e.data))}h.length>0&&(a[c]=h,n=!0)}n&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const d in a){const h=a[d];this.setAttribute(d,h.clone(t))}const n=e.morphAttributes;for(const d in n){const h=[],l=n[d];for(let u=0,f=l.length;u<f;u++)h.push(l[u].clone(t));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,h=o.length;d<h;d++){const l=o[d];this.addGroup(l.start,l.count,l.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lo=new At,Di=new os,Yr=new gn,co=new ie,tr=new ie,ir=new ie,rr=new ie,jn=new ie,Zr=new ie,Kr=new dt,Jr=new dt,Qr=new dt,ho=new ie,uo=new ie,po=new ie,$r=new ie,en=new ie;class ii extends Ot{constructor(e=new ni,t=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=i.length;a<n;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,n=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const s=this.morphTargetInfluences;if(n&&s){Zr.set(0,0,0);for(let c=0,d=n.length;c<d;c++){const h=s[c],l=n[c];h!==0&&(jn.fromBufferAttribute(l,e),o?Zr.addScaledVector(jn,h):Zr.addScaledVector(jn.sub(t),h))}t.add(Zr)}return t}raycast(e,t){const i=this.geometry,a=this.material,n=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(n),Di.copy(e.ray).recast(e.near),!(Yr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Yr,co)===null||Di.origin.distanceToSquared(co)>(e.far-e.near)**2))&&(lo.copy(n).invert(),Di.copy(e.ray).applyMatrix4(lo),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,i){let a;const n=this.geometry,o=this.material,s=n.index,c=n.attributes.position,d=n.attributes.uv,h=n.attributes.uv1,l=n.attributes.normal,u=n.groups,f=n.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(s.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,E=_;y<E;y+=3){const C=s.getX(y),N=s.getX(y+1),z=s.getX(y+2);a=tn(this,p,e,i,d,h,l,C,N,z),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,f.start),v=Math.min(s.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=s.getX(m),_=s.getX(m+1),y=s.getX(m+2);a=tn(this,o,e,i,d,h,l,x,_,y),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,E=_;y<E;y+=3){const C=y,N=y+1,z=y+2;a=tn(this,p,e,i,d,h,l,C,N,z),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,_=m+1,y=m+2;a=tn(this,o,e,i,d,h,l,x,_,y),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function $l(r,e,t,i,a,n,o,s){let c;if(e.side===Bt?c=i.intersectTriangle(o,n,a,!0,s):c=i.intersectTriangle(a,n,o,e.side===Pi,s),c===null)return null;en.copy(s),en.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(en);return d<t.near||d>t.far?null:{distance:d,point:en.clone(),object:r}}function tn(r,e,t,i,a,n,o,s,c,d){r.getVertexPosition(s,tr),r.getVertexPosition(c,ir),r.getVertexPosition(d,rr);const h=$l(r,e,t,i,tr,ir,rr,$r);if(h){a&&(Kr.fromBufferAttribute(a,s),Jr.fromBufferAttribute(a,c),Qr.fromBufferAttribute(a,d),h.uv=$t.getInterpolation($r,tr,ir,rr,Kr,Jr,Qr,new dt)),n&&(Kr.fromBufferAttribute(n,s),Jr.fromBufferAttribute(n,c),Qr.fromBufferAttribute(n,d),h.uv1=$t.getInterpolation($r,tr,ir,rr,Kr,Jr,Qr,new dt),h.uv2=h.uv1),o&&(ho.fromBufferAttribute(o,s),uo.fromBufferAttribute(o,c),po.fromBufferAttribute(o,d),h.normal=$t.getInterpolation($r,tr,ir,rr,ho,uo,po,new ie),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const l={a:s,b:c,c:d,normal:new ie,materialIndex:0};$t.getNormal(tr,ir,rr,l.normal),h.face=l}return h}class vr extends ni{constructor(e=1,t=1,i=1,a=1,n=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:n,depthSegments:o};const s=this;a=Math.floor(a),n=Math.floor(n),o=Math.floor(o);const c=[],d=[],h=[],l=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,n,0),g("z","y","x",1,-1,i,t,-e,o,n,1),g("x","z","y",1,1,e,i,t,a,o,2),g("x","z","y",1,-1,e,i,-t,a,o,3),g("x","y","z",1,-1,e,t,i,a,n,4),g("x","y","z",-1,-1,e,t,-i,a,n,5),this.setIndex(c),this.setAttribute("position",new ri(d,3)),this.setAttribute("normal",new ri(h,3)),this.setAttribute("uv",new ri(l,2));function g(v,m,p,x,_,y,E,C,N,z,S){const M=y/N,U=E/z,V=y/2,D=E/2,G=C/2,W=N+1,oe=z+1;let F=0,I=0;const Z=new ie;for(let X=0;X<oe;X++){const T=X*U-D;for(let B=0;B<W;B++){const A=B*M-V;Z[v]=A*x,Z[m]=T*_,Z[p]=G,d.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[p]=C>0?1:-1,h.push(Z.x,Z.y,Z.z),l.push(B/N),l.push(1-X/z),F+=1}}for(let X=0;X<z;X++)for(let T=0;T<N;T++){const B=u+T+W*X,A=u+T+W*(X+1),P=u+(T+1)+W*(X+1),R=u+(T+1)+W*X;c.push(B,A,R),c.push(A,P,R),I+=6}s.addGroup(f,I,S),f+=I,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mr(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const a=r[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function It(r){const e={};for(let t=0;t<r.length;t++){const i=mr(r[t]);for(const a in i)e[a]=i[a]}return e}function ec(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function us(r){return r.getRenderTarget()===null?r.outputColorSpace:ui}const tc={clone:mr,merge:It};var ic=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ic,this.fragmentShader=rc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=ec(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const n=this.uniforms[a].value;n&&n.isTexture?t.uniforms[a]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[a]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[a]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[a]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[a]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[a]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[a]={type:"m4",value:n.toArray()}:t.uniforms[a]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ds extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yt extends ds{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Cn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,n,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cn*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,n=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,d=o.fullHeight;n+=o.offsetX*a/c,t-=o.offsetY*i/d,a*=o.width/c,i*=o.height/d}const s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const nr=-90,ar=1;class nc extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const a=new Yt(nr,ar,e,t);a.layers=this.layers,this.add(a);const n=new Yt(nr,ar,e,t);n.layers=this.layers,this.add(n);const o=new Yt(nr,ar,e,t);o.layers=this.layers,this.add(o);const s=new Yt(nr,ar,e,t);s.layers=this.layers,this.add(s);const c=new Yt(nr,ar,e,t);c.layers=this.layers,this.add(c);const d=new Yt(nr,ar,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,n,o,s,c]=t;for(const d of t)this.remove(d);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===dn)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,n,o,s,c,d]=this.children,h=e.getRenderTarget(),l=e.xr.enabled;e.xr.enabled=!1;const u=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,a),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=u,e.setRenderTarget(i,5),e.render(t,d),e.setRenderTarget(h),e.xr.enabled=l,i.texture.needsPMREMUpdate=!0}}class ps extends kt{constructor(e,t,i,a,n,o,s,c,d,h){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,i,a,n,o,s,c,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ac extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(Cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hi?vt:Wi),this.texture=new ps(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new vr(5,5,5),n=new ki({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Ri});n.uniforms.tEquirect.value=t;const o=new ii(a,n),s=t.minFilter;return t.minFilter===Lr&&(t.minFilter=Xt),new nc(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,a){const n=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,a);e.setRenderTarget(n)}}const Xn=new ie,oc=new ie,sc=new it;class Fi{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Xn.subVectors(i,t).cross(oc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Xn),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/a;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sc.getNormalMatrix(e),a=this.coplanarPoint(Xn).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new gn,rn=new ie;class fs{constructor(e=new Fi,t=new Fi,i=new Fi,a=new Fi,n=new Fi,o=new Fi){this.planes=[e,t,i,a,n,o]}set(e,t,i,a,n,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(a),s[4].copy(n),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si){const i=this.planes,a=e.elements,n=a[0],o=a[1],s=a[2],c=a[3],d=a[4],h=a[5],l=a[6],u=a[7],f=a[8],g=a[9],v=a[10],m=a[11],p=a[12],x=a[13],_=a[14],y=a[15];if(i[0].setComponents(c-n,u-d,m-f,y-p).normalize(),i[1].setComponents(c+n,u+d,m+f,y+p).normalize(),i[2].setComponents(c+o,u+h,m+g,y+x).normalize(),i[3].setComponents(c-o,u-h,m-g,y-x).normalize(),i[4].setComponents(c-s,u-l,m-v,y-_).normalize(),t===Si)i[5].setComponents(c+s,u+l,m+v,y+_).normalize();else if(t===dn)i[5].setComponents(s,l,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(rn.x=a.normal.x>0?e.max.x:e.min.x,rn.y=a.normal.y>0?e.max.y:e.min.y,rn.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(rn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ms(){let r=null,e=!1,t=null,i=null;function a(n,o){t(n,o),i=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){r=n}}}function lc(r,e){const t=e.isWebGL2,i=new WeakMap;function a(d,h){const l=d.array,u=d.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,l,u),d.onUploadCallback();let g;if(l instanceof Float32Array)g=r.FLOAT;else if(l instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=r.SHORT;else if(l instanceof Uint32Array)g=r.UNSIGNED_INT;else if(l instanceof Int32Array)g=r.INT;else if(l instanceof Int8Array)g=r.BYTE;else if(l instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:d.version}}function n(d,h,l){const u=h.array,f=h.updateRange;r.bindBuffer(l,d),f.count===-1?r.bufferSubData(l,0,u):(t?r.bufferSubData(l,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(l,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function s(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=i.get(d);h&&(r.deleteBuffer(h.buffer),i.delete(d))}function c(d,h){if(d.isGLBufferAttribute){const u=i.get(d);(!u||u.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const l=i.get(d);l===void 0?i.set(d,a(d,h)):l.version<d.version&&(n(l.buffer,d,h),l.version=d.version)}return{get:o,remove:s,update:c}}class vn extends ni{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const n=e/2,o=t/2,s=Math.floor(i),c=Math.floor(a),d=s+1,h=c+1,l=e/s,u=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const x=p*u-o;for(let _=0;_<d;_++){const y=_*l-n;g.push(y,-x,0),v.push(0,0,1),m.push(_/s),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<s;x++){const _=x+d*p,y=x+d*(p+1),E=x+1+d*(p+1),C=x+1+d*p;f.push(_,y,C),f.push(y,E,C)}this.setIndex(f),this.setAttribute("position",new ri(g,3)),this.setAttribute("normal",new ri(v,3)),this.setAttribute("uv",new ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.widthSegments,e.heightSegments)}}var cc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_c=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ec=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ac=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ic=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$c=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,th=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ih=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ah=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,oh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ph=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_h=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Eh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,wh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Th=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ch=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ph=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ih=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Yh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$h=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,au=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ou=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,su=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,du=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_u=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yu=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Su=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Au=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ru=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ou=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:cc,alphahash_pars_fragment:hc,alphamap_fragment:uc,alphamap_pars_fragment:dc,alphatest_fragment:pc,alphatest_pars_fragment:fc,aomap_fragment:mc,aomap_pars_fragment:gc,begin_vertex:vc,beginnormal_vertex:_c,bsdfs:xc,iridescence_fragment:yc,bumpmap_pars_fragment:Sc,clipping_planes_fragment:Mc,clipping_planes_pars_fragment:Ec,clipping_planes_pars_vertex:bc,clipping_planes_vertex:wc,color_fragment:Tc,color_pars_fragment:Ac,color_pars_vertex:Rc,color_vertex:Cc,common:Lc,cube_uv_reflection_fragment:Pc,defaultnormal_vertex:Uc,displacementmap_pars_vertex:Ic,displacementmap_vertex:Dc,emissivemap_fragment:Nc,emissivemap_pars_fragment:Fc,colorspace_fragment:Bc,colorspace_pars_fragment:Oc,envmap_fragment:zc,envmap_common_pars_fragment:Vc,envmap_pars_fragment:Hc,envmap_pars_vertex:Wc,envmap_physical_pars_fragment:eh,envmap_vertex:Gc,fog_vertex:kc,fog_pars_vertex:qc,fog_fragment:jc,fog_pars_fragment:Xc,gradientmap_pars_fragment:Yc,lightmap_fragment:Zc,lightmap_pars_fragment:Kc,lights_lambert_fragment:Jc,lights_lambert_pars_fragment:Qc,lights_pars_begin:$c,lights_toon_fragment:th,lights_toon_pars_fragment:ih,lights_phong_fragment:rh,lights_phong_pars_fragment:nh,lights_physical_fragment:ah,lights_physical_pars_fragment:oh,lights_fragment_begin:sh,lights_fragment_maps:lh,lights_fragment_end:ch,logdepthbuf_fragment:hh,logdepthbuf_pars_fragment:uh,logdepthbuf_pars_vertex:dh,logdepthbuf_vertex:ph,map_fragment:fh,map_pars_fragment:mh,map_particle_fragment:gh,map_particle_pars_fragment:vh,metalnessmap_fragment:_h,metalnessmap_pars_fragment:xh,morphcolor_vertex:yh,morphnormal_vertex:Sh,morphtarget_pars_vertex:Mh,morphtarget_vertex:Eh,normal_fragment_begin:bh,normal_fragment_maps:wh,normal_pars_fragment:Th,normal_pars_vertex:Ah,normal_vertex:Rh,normalmap_pars_fragment:Ch,clearcoat_normal_fragment_begin:Lh,clearcoat_normal_fragment_maps:Ph,clearcoat_pars_fragment:Uh,iridescence_pars_fragment:Ih,opaque_fragment:Dh,packing:Nh,premultiplied_alpha_fragment:Fh,project_vertex:Bh,dithering_fragment:Oh,dithering_pars_fragment:zh,roughnessmap_fragment:Vh,roughnessmap_pars_fragment:Hh,shadowmap_pars_fragment:Wh,shadowmap_pars_vertex:Gh,shadowmap_vertex:kh,shadowmask_pars_fragment:qh,skinbase_vertex:jh,skinning_pars_vertex:Xh,skinning_vertex:Yh,skinnormal_vertex:Zh,specularmap_fragment:Kh,specularmap_pars_fragment:Jh,tonemapping_fragment:Qh,tonemapping_pars_fragment:$h,transmission_fragment:eu,transmission_pars_fragment:tu,uv_pars_fragment:iu,uv_pars_vertex:ru,uv_vertex:nu,worldpos_vertex:au,background_vert:ou,background_frag:su,backgroundCube_vert:lu,backgroundCube_frag:cu,cube_vert:hu,cube_frag:uu,depth_vert:du,depth_frag:pu,distanceRGBA_vert:fu,distanceRGBA_frag:mu,equirect_vert:gu,equirect_frag:vu,linedashed_vert:_u,linedashed_frag:xu,meshbasic_vert:yu,meshbasic_frag:Su,meshlambert_vert:Mu,meshlambert_frag:Eu,meshmatcap_vert:bu,meshmatcap_frag:wu,meshnormal_vert:Tu,meshnormal_frag:Au,meshphong_vert:Ru,meshphong_frag:Cu,meshphysical_vert:Lu,meshphysical_frag:Pu,meshtoon_vert:Uu,meshtoon_frag:Iu,points_vert:Du,points_frag:Nu,shadow_vert:Fu,shadow_frag:Bu,sprite_vert:Ou,sprite_frag:zu},Be={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},si={basic:{uniforms:It([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:It([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new pt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:It([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:It([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:It([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new pt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:It([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:It([Be.points,Be.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:It([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:It([Be.common,Be.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:It([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:It([Be.sprite,Be.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:It([Be.common,Be.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:It([Be.lights,Be.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};si.physical={uniforms:It([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const nn={r:0,b:0,g:0};function Vu(r,e,t,i,a,n,o){const s=new pt(0);let c=n===!0?0:1,d,h,l=null,u=0,f=null;function g(m,p){let x=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(s,c):_&&_.isColor&&(v(_,1),x=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===fn)?(h===void 0&&(h=new ii(new vr(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:mr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=_.colorSpace!==vt,(l!==_||u!==_.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,l=_,u=_.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(d===void 0&&(d=new ii(new vn(2,2),new ki({name:"BackgroundMaterial",uniforms:mr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=_,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=_.colorSpace!==vt,_.matrixAutoUpdate===!0&&_.updateMatrix(),d.material.uniforms.uvTransform.value.copy(_.matrix),(l!==_||u!==_.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,l=_,u=_.version,f=r.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null))}function v(m,p){m.getRGB(nn,us(r)),i.buffers.color.setClear(nn.r,nn.g,nn.b,p,o)}return{getClearColor:function(){return s},setClearColor:function(m,p=1){s.set(m),c=p,v(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(s,c)},render:g}}function Hu(r,e,t,i){const a=r.getParameter(r.MAX_VERTEX_ATTRIBS),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||n!==null,s={},c=m(null);let d=c,h=!1;function l(G,W,oe,F,I){let Z=!1;if(o){const X=v(F,oe,W);d!==X&&(d=X,f(d.object)),Z=p(G,F,oe,I),Z&&x(G,F,oe,I)}else{const X=W.wireframe===!0;(d.geometry!==F.id||d.program!==oe.id||d.wireframe!==X)&&(d.geometry=F.id,d.program=oe.id,d.wireframe=X,Z=!0)}I!==null&&t.update(I,r.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,z(G,W,oe,F),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function u(){return i.isWebGL2?r.createVertexArray():n.createVertexArrayOES()}function f(G){return i.isWebGL2?r.bindVertexArray(G):n.bindVertexArrayOES(G)}function g(G){return i.isWebGL2?r.deleteVertexArray(G):n.deleteVertexArrayOES(G)}function v(G,W,oe){const F=oe.wireframe===!0;let I=s[G.id];I===void 0&&(I={},s[G.id]=I);let Z=I[W.id];Z===void 0&&(Z={},I[W.id]=Z);let X=Z[F];return X===void 0&&(X=m(u()),Z[F]=X),X}function m(G){const W=[],oe=[],F=[];for(let I=0;I<a;I++)W[I]=0,oe[I]=0,F[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:oe,attributeDivisors:F,object:G,attributes:{},index:null}}function p(G,W,oe,F){const I=d.attributes,Z=W.attributes;let X=0;const T=oe.getAttributes();for(const B in T)if(T[B].location>=0){const A=I[B];let P=Z[B];if(P===void 0&&(B==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),B==="instanceColor"&&G.instanceColor&&(P=G.instanceColor)),A===void 0||A.attribute!==P||P&&A.data!==P.data)return!0;X++}return d.attributesNum!==X||d.index!==F}function x(G,W,oe,F){const I={},Z=W.attributes;let X=0;const T=oe.getAttributes();for(const B in T)if(T[B].location>=0){let A=Z[B];A===void 0&&(B==="instanceMatrix"&&G.instanceMatrix&&(A=G.instanceMatrix),B==="instanceColor"&&G.instanceColor&&(A=G.instanceColor));const P={};P.attribute=A,A&&A.data&&(P.data=A.data),I[B]=P,X++}d.attributes=I,d.attributesNum=X,d.index=F}function _(){const G=d.newAttributes;for(let W=0,oe=G.length;W<oe;W++)G[W]=0}function y(G){E(G,0)}function E(G,W){const oe=d.newAttributes,F=d.enabledAttributes,I=d.attributeDivisors;oe[G]=1,F[G]===0&&(r.enableVertexAttribArray(G),F[G]=1),I[G]!==W&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,W),I[G]=W)}function C(){const G=d.newAttributes,W=d.enabledAttributes;for(let oe=0,F=W.length;oe<F;oe++)W[oe]!==G[oe]&&(r.disableVertexAttribArray(oe),W[oe]=0)}function N(G,W,oe,F,I,Z,X){X===!0?r.vertexAttribIPointer(G,W,oe,I,Z):r.vertexAttribPointer(G,W,oe,F,I,Z)}function z(G,W,oe,F){if(i.isWebGL2===!1&&(G.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const I=F.attributes,Z=oe.getAttributes(),X=W.defaultAttributeValues;for(const T in Z){const B=Z[T];if(B.location>=0){let A=I[T];if(A===void 0&&(T==="instanceMatrix"&&G.instanceMatrix&&(A=G.instanceMatrix),T==="instanceColor"&&G.instanceColor&&(A=G.instanceColor)),A!==void 0){const P=A.normalized,R=A.itemSize,Y=t.get(A);if(Y===void 0)continue;const ne=Y.buffer,ee=Y.type,K=Y.bytesPerElement,de=i.isWebGL2===!0&&(ee===r.INT||ee===r.UNSIGNED_INT||A.gpuType===Zo);if(A.isInterleavedBufferAttribute){const ue=A.data,H=ue.stride,we=A.offset;if(ue.isInstancedInterleavedBuffer){for(let fe=0;fe<B.locationSize;fe++)E(B.location+fe,ue.meshPerAttribute);G.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let fe=0;fe<B.locationSize;fe++)y(B.location+fe);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let fe=0;fe<B.locationSize;fe++)N(B.location+fe,R/B.locationSize,ee,P,H*K,(we+R/B.locationSize*fe)*K,de)}else{if(A.isInstancedBufferAttribute){for(let ue=0;ue<B.locationSize;ue++)E(B.location+ue,A.meshPerAttribute);G.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let ue=0;ue<B.locationSize;ue++)y(B.location+ue);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let ue=0;ue<B.locationSize;ue++)N(B.location+ue,R/B.locationSize,ee,P,R*K,R/B.locationSize*ue*K,de)}}else if(X!==void 0){const P=X[T];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(B.location,P);break;case 3:r.vertexAttrib3fv(B.location,P);break;case 4:r.vertexAttrib4fv(B.location,P);break;default:r.vertexAttrib1fv(B.location,P)}}}}C()}function S(){V();for(const G in s){const W=s[G];for(const oe in W){const F=W[oe];for(const I in F)g(F[I].object),delete F[I];delete W[oe]}delete s[G]}}function M(G){if(s[G.id]===void 0)return;const W=s[G.id];for(const oe in W){const F=W[oe];for(const I in F)g(F[I].object),delete F[I];delete W[oe]}delete s[G.id]}function U(G){for(const W in s){const oe=s[W];if(oe[G.id]===void 0)continue;const F=oe[G.id];for(const I in F)g(F[I].object),delete F[I];delete oe[G.id]}}function V(){D(),h=!0,d!==c&&(d=c,f(d.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:l,reset:V,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:y,disableUnusedAttributes:C}}function Wu(r,e,t,i){const a=i.isWebGL2;let n;function o(d){n=d}function s(d,h){r.drawArrays(n,d,h),t.update(h,n,1)}function c(d,h,l){if(l===0)return;let u,f;if(a)u=r,f="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](n,d,h,l),t.update(h,n,l)}this.setMode=o,this.render=s,this.renderInstances=c}function Gu(r,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const c=n(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const d=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,l=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,y=o||e.has("OES_texture_float"),E=_&&y,C=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:d,getMaxAnisotropy:a,getMaxPrecision:n,precision:s,logarithmicDepthBuffer:h,maxTextures:l,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:C}}function ku(r){const e=this;let t=null,i=0,a=!1,n=!1;const o=new Fi,s=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,u){const f=l.length!==0||u||i!==0||a;return a=u,i=l.length,f},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(l,u){t=h(l,u,0)},this.setState=function(l,u,f){const g=l.clippingPlanes,v=l.clipIntersection,m=l.clipShadows,p=r.get(l);if(!a||g===null||g.length===0||n&&!m)n?h(null):d();else{const x=n?0:i,_=x*4;let y=p.clippingState||null;c.value=y,y=h(g,u,_,f);for(let E=0;E!==_;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function d(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(l,u,f,g){const v=l!==null?l.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,x=u.matrixWorldInverse;s.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==v;++_,y+=4)o.copy(l[_]).applyMatrix4(x,s),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function qu(r){let e=new WeakMap;function t(o,s){return s===ta?o.mapping=dr:s===ia&&(o.mapping=pr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===ta||s===ia)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const d=new ac(c.height/2);return d.fromEquirectangularTexture(r,o),e.set(o,d),o.addEventListener("dispose",a),t(d.texture,o.mapping)}else return null}}return o}function a(o){const s=o.target;s.removeEventListener("dispose",a);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class ju extends ds{constructor(e=-1,t=1,i=1,a=-1,n=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=n,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,n,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let n=i-e,o=i+e,s=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=d*this.view.offsetX,o=n+d*this.view.width,s-=h*this.view.offsetY,c=s-h*this.view.height}this.projectionMatrix.makeOrthographic(n,o,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cr=4,fo=[.125,.215,.35,.446,.526,.582],Oi=20,Yn=new ju,mo=new pt;let Zn=null;const Bi=(1+Math.sqrt(5))/2,or=1/Bi,go=[new ie(1,1,1),new ie(-1,1,1),new ie(1,1,-1),new ie(-1,1,-1),new ie(0,Bi,or),new ie(0,Bi,-or),new ie(or,0,Bi),new ie(-or,0,Bi),new ie(Bi,or,0),new ie(-Bi,or,0)];class vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Zn=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,a,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zn),e.scissorTest=!1,an(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zn=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Pr,format:ti,colorSpace:ui,depthBuffer:!1},a=_o(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_o(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xu(n)),this._blurMaterial=Yu(n,e,t)}return a}_compileMaterial(e){const t=new ii(this._lodPlanes[0],e);this._renderer.compile(t,Yn)}_sceneToCubeUV(e,t,i,a){const n=new Yt(90,1,t,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(mo),c.toneMapping=Ci,c.autoClear=!1;const l=new Br({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),u=new ii(new vr,l);let f=!1;const g=e.background;g?g.isColor&&(l.color.copy(g),e.background=null,f=!0):(l.color.copy(mo),f=!0);for(let v=0;v<6;v++){const m=v%3;m===0?(n.up.set(0,o[v],0),n.lookAt(s[v],0,0)):m===1?(n.up.set(0,0,o[v]),n.lookAt(0,s[v],0)):(n.up.set(0,o[v],0),n.lookAt(0,0,s[v]));const p=this._cubeSize;an(a,m*p,v>2?p:0,p,p),c.setRenderTarget(a),f&&c.render(u,n),c.render(e,n)}u.geometry.dispose(),u.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===dr||e.mapping===pr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xo());const n=a?this._cubemapMaterial:this._equirectMaterial,o=new ii(this._lodPlanes[0],n),s=n.uniforms;s.envMap.value=e;const c=this._cubeSize;an(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Yn)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=go[(a-1)%go.length];this._blur(e,a-1,a,n,o)}t.autoClear=i}_blur(e,t,i,a,n){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,a,"latitudinal",n),this._halfBlur(o,e,i,i,a,"longitudinal",n)}_halfBlur(e,t,i,a,n,o,s){const c=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new ii(this._lodPlanes[a],d),u=d.uniforms,f=this._sizeLods[i]-1,g=isFinite(n)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),v=n/g,m=isFinite(n)?1+Math.floor(h*v):Oi;m>Oi&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let x=0;for(let N=0;N<Oi;++N){const z=N/v,S=Math.exp(-z*z/2);p.push(S),N===0?x+=S:N<m&&(x+=2*S)}for(let N=0;N<p.length;N++)p[N]=p[N]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",s&&(u.poleAxis.value=s);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;const y=this._sizeLods[a],E=3*y*(a>_-cr?a-_+cr:0),C=4*(this._cubeSize-y);an(t,E,C,3*y,2*y),c.setRenderTarget(t),c.render(l,Yn)}}function Xu(r){const e=[],t=[],i=[];let a=r;const n=r-cr+1+fo.length;for(let o=0;o<n;o++){const s=Math.pow(2,a);t.push(s);let c=1/s;o>r-cr?c=fo[o-r+cr-1]:o===0&&(c=0),i.push(c);const d=1/(s-2),h=-d,l=1+d,u=[h,h,l,h,l,l,h,h,l,l,h,l],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){const N=C%3*2/3-1,z=C>2?0:-1,S=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];x.set(S,v*g*C),_.set(u,m*g*C);const M=[C,C,C,C,C,C];y.set(M,p*g*C)}const E=new ni;E.setAttribute("position",new ci(x,v)),E.setAttribute("uv",new ci(_,m)),E.setAttribute("faceIndex",new ci(y,p)),e.push(E),a>cr&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _o(r,e,t){const i=new Gi(r,e,t);return i.texture.mapping=fn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function an(r,e,t,i,a){r.viewport.set(e,t,i,a),r.scissor.set(e,t,i,a)}function Yu(r,e,t){const i=new Float32Array(Oi),a=new ie(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function xo(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function yo(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zu(r){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const c=s.mapping,d=c===ta||c===ia,h=c===dr||c===pr;if(d||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let l=e.get(s);return t===null&&(t=new vo(r)),l=d?t.fromEquirectangular(s,l):t.fromCubemap(s,l),e.set(s,l),l.texture}else{if(e.has(s))return e.get(s).texture;{const l=s.image;if(d&&l&&l.height>0||h&&l&&a(l)){t===null&&(t=new vo(r));const u=d?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,u),s.addEventListener("dispose",n),u.texture}else return null}}}return s}function a(s){let c=0;const d=6;for(let h=0;h<d;h++)s[h]!==void 0&&c++;return c===d}function n(s){const c=s.target;c.removeEventListener("dispose",n);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ku(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function Ju(r,e,t,i){const a={},n=new WeakMap;function o(l){const u=l.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}u.removeEventListener("dispose",o),delete a[u.id];const f=n.get(u);f&&(e.remove(f),n.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function s(l,u){return a[u.id]===!0||(u.addEventListener("dispose",o),a[u.id]=!0,t.memory.geometries++),u}function c(l){const u=l.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const f=l.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],r.ARRAY_BUFFER)}}function d(l){const u=[],f=l.index,g=l.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let _=0,y=x.length;_<y;_+=3){const E=x[_+0],C=x[_+1],N=x[_+2];u.push(E,C,C,N,N,E)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const E=_+0,C=_+1,N=_+2;u.push(E,C,C,N,N,E)}}else return;const m=new(is(u)?hs:cs)(u,1);m.version=v;const p=n.get(l);p&&e.remove(p),n.set(l,m)}function h(l){const u=n.get(l);if(u){const f=l.index;f!==null&&u.version<f.version&&d(l)}else d(l);return n.get(l)}return{get:s,update:c,getWireframeAttribute:h}}function Qu(r,e,t,i){const a=i.isWebGL2;let n;function o(u){n=u}let s,c;function d(u){s=u.type,c=u.bytesPerElement}function h(u,f){r.drawElements(n,f,s,u*c),t.update(f,n,1)}function l(u,f,g){if(g===0)return;let v,m;if(a)v=r,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](n,f,s,u*c,g),t.update(f,n,g)}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=l}function $u(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,o,s){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=s*(n/3);break;case r.LINES:t.lines+=s*(n/2);break;case r.LINE_STRIP:t.lines+=s*(n-1);break;case r.LINE_LOOP:t.lines+=s*n;break;case r.POINTS:t.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function ed(r,e){return r[0]-e[0]}function td(r,e){return Math.abs(e[1])-Math.abs(r[1])}function id(r,e,t){const i={},a=new Float32Array(8),n=new WeakMap,o=new Lt,s=[];for(let d=0;d<8;d++)s[d]=[d,0];function c(d,h,l){const u=d.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0;let v=n.get(h);if(v===void 0||v.count!==g){let x=function(){D.dispose(),n.delete(h),h.removeEventListener("dispose",x)};v!==void 0&&v.texture.dispose();const _=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),E===!0&&(S=3);let M=h.attributes.position.count*S,U=1;M>e.maxTextureSize&&(U=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const V=new Float32Array(M*U*4*g),D=new as(V,M,U,g);D.type=Ai,D.needsUpdate=!0;const G=S*4;for(let W=0;W<g;W++){const oe=C[W],F=N[W],I=z[W],Z=M*U*4*W;for(let X=0;X<oe.count;X++){const T=X*G;_===!0&&(o.fromBufferAttribute(oe,X),V[Z+T+0]=o.x,V[Z+T+1]=o.y,V[Z+T+2]=o.z,V[Z+T+3]=0),y===!0&&(o.fromBufferAttribute(F,X),V[Z+T+4]=o.x,V[Z+T+5]=o.y,V[Z+T+6]=o.z,V[Z+T+7]=0),E===!0&&(o.fromBufferAttribute(I,X),V[Z+T+8]=o.x,V[Z+T+9]=o.y,V[Z+T+10]=o.z,V[Z+T+11]=I.itemSize===4?o.w:1)}}v={count:g,texture:D,size:new dt(M,U)},n.set(h,v),h.addEventListener("dispose",x)}let m=0;for(let x=0;x<u.length;x++)m+=u[x];const p=h.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",u),l.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const f=u===void 0?0:u.length;let g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];i[h.id]=g}for(let _=0;_<f;_++){const y=g[_];y[0]=_,y[1]=u[_]}g.sort(td);for(let _=0;_<8;_++)_<f&&g[_][1]?(s[_][0]=g[_][0],s[_][1]=g[_][1]):(s[_][0]=Number.MAX_SAFE_INTEGER,s[_][1]=0);s.sort(ed);const v=h.morphAttributes.position,m=h.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const y=s[_],E=y[0],C=y[1];E!==Number.MAX_SAFE_INTEGER&&C?(v&&h.getAttribute("morphTarget"+_)!==v[E]&&h.setAttribute("morphTarget"+_,v[E]),m&&h.getAttribute("morphNormal"+_)!==m[E]&&h.setAttribute("morphNormal"+_,m[E]),a[_]=C,p+=C):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),a[_]=0)}const x=h.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",a)}}return{update:c}}function rd(r,e,t,i){let a=new WeakMap;function n(c){const d=i.render.frame,h=c.geometry,l=e.get(c,h);if(a.get(l)!==d&&(e.update(l),a.set(l,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),a.get(c)!==d&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),a.set(c,d))),c.isSkinnedMesh){const u=c.skeleton;a.get(u)!==d&&(u.update(),a.set(u,d))}return l}function o(){a=new WeakMap}function s(c){const d=c.target;d.removeEventListener("dispose",s),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:n,dispose:o}}const gs=new kt,vs=new as,_s=new Wl,xs=new ps,So=[],Mo=[],Eo=new Float32Array(16),bo=new Float32Array(9),wo=new Float32Array(4);function _r(r,e,t){const i=r[0];if(i<=0||i>0)return r;const a=e*t;let n=So[a];if(n===void 0&&(n=new Float32Array(a),So[a]=n),e!==0){i.toArray(n,0);for(let o=1,s=0;o!==e;++o)s+=t,r[o].toArray(n,s)}return n}function bt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function wt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function _n(r,e){let t=Mo[e];t===void 0&&(t=new Int32Array(e),Mo[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function nd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ad(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2fv(this.addr,e),wt(t,e)}}function od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;r.uniform3fv(this.addr,e),wt(t,e)}}function sd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4fv(this.addr,e),wt(t,e)}}function ld(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;wo.set(i),r.uniformMatrix2fv(this.addr,!1,wo),wt(t,i)}}function cd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;bo.set(i),r.uniformMatrix3fv(this.addr,!1,bo),wt(t,i)}}function hd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Eo.set(i),r.uniformMatrix4fv(this.addr,!1,Eo),wt(t,i)}}function ud(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2iv(this.addr,e),wt(t,e)}}function pd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3iv(this.addr,e),wt(t,e)}}function fd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4iv(this.addr,e),wt(t,e)}}function md(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function gd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2uiv(this.addr,e),wt(t,e)}}function vd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3uiv(this.addr,e),wt(t,e)}}function _d(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4uiv(this.addr,e),wt(t,e)}}function xd(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2D(e||gs,a)}function yd(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||_s,a)}function Sd(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||xs,a)}function Md(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||vs,a)}function Ed(r){switch(r){case 5126:return nd;case 35664:return ad;case 35665:return od;case 35666:return sd;case 35674:return ld;case 35675:return cd;case 35676:return hd;case 5124:case 35670:return ud;case 35667:case 35671:return dd;case 35668:case 35672:return pd;case 35669:case 35673:return fd;case 5125:return md;case 36294:return gd;case 36295:return vd;case 36296:return _d;case 35678:case 36198:case 36298:case 36306:case 35682:return xd;case 35679:case 36299:case 36307:return yd;case 35680:case 36300:case 36308:case 36293:return Sd;case 36289:case 36303:case 36311:case 36292:return Md}}function bd(r,e){r.uniform1fv(this.addr,e)}function wd(r,e){const t=_r(e,this.size,2);r.uniform2fv(this.addr,t)}function Td(r,e){const t=_r(e,this.size,3);r.uniform3fv(this.addr,t)}function Ad(r,e){const t=_r(e,this.size,4);r.uniform4fv(this.addr,t)}function Rd(r,e){const t=_r(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Cd(r,e){const t=_r(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ld(r,e){const t=_r(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Pd(r,e){r.uniform1iv(this.addr,e)}function Ud(r,e){r.uniform2iv(this.addr,e)}function Id(r,e){r.uniform3iv(this.addr,e)}function Dd(r,e){r.uniform4iv(this.addr,e)}function Nd(r,e){r.uniform1uiv(this.addr,e)}function Fd(r,e){r.uniform2uiv(this.addr,e)}function Bd(r,e){r.uniform3uiv(this.addr,e)}function Od(r,e){r.uniform4uiv(this.addr,e)}function zd(r,e,t){const i=this.cache,a=e.length,n=_n(t,a);bt(i,n)||(r.uniform1iv(this.addr,n),wt(i,n));for(let o=0;o!==a;++o)t.setTexture2D(e[o]||gs,n[o])}function Vd(r,e,t){const i=this.cache,a=e.length,n=_n(t,a);bt(i,n)||(r.uniform1iv(this.addr,n),wt(i,n));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||_s,n[o])}function Hd(r,e,t){const i=this.cache,a=e.length,n=_n(t,a);bt(i,n)||(r.uniform1iv(this.addr,n),wt(i,n));for(let o=0;o!==a;++o)t.setTextureCube(e[o]||xs,n[o])}function Wd(r,e,t){const i=this.cache,a=e.length,n=_n(t,a);bt(i,n)||(r.uniform1iv(this.addr,n),wt(i,n));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||vs,n[o])}function Gd(r){switch(r){case 5126:return bd;case 35664:return wd;case 35665:return Td;case 35666:return Ad;case 35674:return Rd;case 35675:return Cd;case 35676:return Ld;case 5124:case 35670:return Pd;case 35667:case 35671:return Ud;case 35668:case 35672:return Id;case 35669:case 35673:return Dd;case 5125:return Nd;case 36294:return Fd;case 36295:return Bd;case 36296:return Od;case 35678:case 36198:case 36298:case 36306:case 35682:return zd;case 35679:case 36299:case 36307:return Vd;case 35680:case 36300:case 36308:case 36293:return Hd;case 36289:case 36303:case 36311:case 36292:return Wd}}class kd{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Ed(t.type)}}class qd{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Gd(t.type)}}class jd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let n=0,o=a.length;n!==o;++n){const s=a[n];s.setValue(e,t[s.id],i)}}}const Kn=/(\w+)(\])?(\[|\.)?/g;function To(r,e){r.seq.push(e),r.map[e.id]=e}function Xd(r,e,t){const i=r.name,a=i.length;for(Kn.lastIndex=0;;){const n=Kn.exec(i),o=Kn.lastIndex;let s=n[1];const c=n[2]==="]",d=n[3];if(c&&(s=s|0),d===void 0||d==="["&&o+2===a){To(t,d===void 0?new kd(s,r,e):new qd(s,r,e));break}else{let h=t.map[s];h===void 0&&(h=new jd(s),To(t,h)),t=h}}}class ln{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const n=e.getActiveUniform(t,a),o=e.getUniformLocation(t,n.name);Xd(n,o,this)}}setValue(e,t,i,a){const n=this.map[t];n!==void 0&&n.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let n=0,o=t.length;n!==o;++n){const s=t[n],c=i[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,n=e.length;a!==n;++a){const o=e[a];o.id in t&&i.push(o)}return i}}function Ao(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}let Yd=0;function Zd(r,e){const t=r.split(`
`),i=[],a=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let o=a;o<n;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function Kd(r){switch(r){case ui:return["Linear","( value )"];case vt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function Ro(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(i&&a==="")return"";const n=/ERROR: 0:(\d+)/.exec(a);if(n){const o=parseInt(n[1]);return t.toUpperCase()+`

`+a+`

`+Zd(r.getShaderSource(e),o)}else return a}function Jd(r,e){const t=Kd(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Qd(r,e){let t;switch(e){case rl:t="Linear";break;case nl:t="Reinhard";break;case al:t="OptimizedCineon";break;case ol:t="ACESFilmic";break;case sl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $d(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wr).join(`
`)}function ep(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tp(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const n=r.getActiveAttrib(e,a),o=n.name;let s=1;n.type===r.FLOAT_MAT2&&(s=2),n.type===r.FLOAT_MAT3&&(s=3),n.type===r.FLOAT_MAT4&&(s=4),t[o]={type:n.type,location:r.getAttribLocation(e,o),locationSize:s}}return t}function wr(r){return r!==""}function Co(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(r){return r.replace(ip,np)}const rp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function np(r,e){let t=et[e];if(t===void 0){const i=rp.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return la(t)}const ap=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Po(r){return r.replace(ap,op)}function op(r,e,t,i){let a="";for(let n=parseInt(e);n<parseInt(t);n++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Uo(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ko?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ns?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function lp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case fn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function hp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xo:e="ENVMAP_BLENDING_MULTIPLY";break;case tl:e="ENVMAP_BLENDING_MIX";break;case il:e="ENVMAP_BLENDING_ADD";break}return e}function up(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function dp(r,e,t,i){const a=r.getContext(),n=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=sp(t),d=lp(t),h=cp(t),l=hp(t),u=up(t),f=t.isWebGL2?"":$d(t),g=ep(n),v=a.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Uo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[f,Uo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?et.tonemapping_pars_fragment:"",t.toneMapping!==Ci?Qd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Jd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=la(o),o=Co(o,t),o=Lo(o,t),s=la(s),s=Co(s,t),s=Lo(s,t),o=Po(o),s=Po(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+m+o,y=x+p+s,E=Ao(a,a.VERTEX_SHADER,_),C=Ao(a,a.FRAGMENT_SHADER,y);if(a.attachShader(v,E),a.attachShader(v,C),t.index0AttributeName!==void 0?a.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v),r.debug.checkShaderErrors){const S=a.getProgramInfoLog(v).trim(),M=a.getShaderInfoLog(E).trim(),U=a.getShaderInfoLog(C).trim();let V=!0,D=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,v,E,C);else{const G=Ro(a,E,"vertex"),W=Ro(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+G+`
`+W)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(M===""||U==="")&&(D=!1);D&&(this.diagnostics={runnable:V,programLog:S,vertexShader:{log:M,prefix:m},fragmentShader:{log:U,prefix:p}})}a.deleteShader(E),a.deleteShader(C);let N;this.getUniforms=function(){return N===void 0&&(N=new ln(a,v)),N};let z;return this.getAttributes=function(){return z===void 0&&(z=tp(a,v)),z},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yd++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=C,this}let pp=0;class fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),n=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(n)===!1&&(o.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mp(e),t.set(e,i)),i}}class mp{constructor(e){this.id=pp++,this.code=e,this.usedTimes=0}}function gp(r,e,t,i,a,n,o){const s=new ss,c=new fp,d=[],h=a.isWebGL2,l=a.logarithmicDepthBuffer,u=a.vertexTextures;let f=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,M,U,V,D){const G=V.fog,W=D.geometry,oe=S.isMeshStandardMaterial?V.environment:null,F=(S.isMeshStandardMaterial?t:e).get(S.envMap||oe),I=F&&F.mapping===fn?F.image.height:null,Z=g[S.type];S.precision!==null&&(f=a.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const X=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,T=X!==void 0?X.length:0;let B=0;W.morphAttributes.position!==void 0&&(B=1),W.morphAttributes.normal!==void 0&&(B=2),W.morphAttributes.color!==void 0&&(B=3);let A,P,R,Y;if(Z){const Rt=si[Z];A=Rt.vertexShader,P=Rt.fragmentShader}else A=S.vertexShader,P=S.fragmentShader,c.update(S),R=c.getVertexShaderID(S),Y=c.getFragmentShaderID(S);const ne=r.getRenderTarget(),ee=D.isInstancedMesh===!0,K=!!S.map,de=!!S.matcap,ue=!!F,H=!!S.aoMap,we=!!S.lightMap,fe=!!S.bumpMap,re=!!S.normalMap,ce=!!S.displacementMap,De=!!S.emissiveMap,Pe=!!S.metalnessMap,Ge=!!S.roughnessMap,Re=S.anisotropy>0,Je=S.clearcoat>0,Ze=S.iridescence>0,L=S.sheen>0,w=S.transmission>0,J=Re&&!!S.anisotropyMap,me=Je&&!!S.clearcoatMap,pe=Je&&!!S.clearcoatNormalMap,ve=Je&&!!S.clearcoatRoughnessMap,We=Ze&&!!S.iridescenceMap,Se=Ze&&!!S.iridescenceThicknessMap,se=L&&!!S.sheenColorMap,Xe=L&&!!S.sheenRoughnessMap,ke=!!S.specularMap,je=!!S.specularColorMap,Ve=!!S.specularIntensityMap,Oe=w&&!!S.transmissionMap,Qe=w&&!!S.thicknessMap,tt=!!S.gradientMap,k=!!S.alphaMap,Ce=S.alphaTest>0,ae=!!S.alphaHash,xe=!!S.extensions,Te=!!W.attributes.uv1,at=!!W.attributes.uv2,st=!!W.attributes.uv3;let ht=Ci;return S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ht=r.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:A,fragmentShader:P,defines:S.defines,customVertexShaderID:R,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,instancing:ee,instancingColor:ee&&D.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ui,map:K,matcap:de,envMap:ue,envMapMode:ue&&F.mapping,envMapCubeUVHeight:I,aoMap:H,lightMap:we,bumpMap:fe,normalMap:re,displacementMap:u&&ce,emissiveMap:De,normalMapObjectSpace:re&&S.normalMapType===Sl,normalMapTangentSpace:re&&S.normalMapType===yl,metalnessMap:Pe,roughnessMap:Ge,anisotropy:Re,anisotropyMap:J,clearcoat:Je,clearcoatMap:me,clearcoatNormalMap:pe,clearcoatRoughnessMap:ve,iridescence:Ze,iridescenceMap:We,iridescenceThicknessMap:Se,sheen:L,sheenColorMap:se,sheenRoughnessMap:Xe,specularMap:ke,specularColorMap:je,specularIntensityMap:Ve,transmission:w,transmissionMap:Oe,thicknessMap:Qe,gradientMap:tt,opaque:S.transparent===!1&&S.blending===hr,alphaMap:k,alphaTest:Ce,alphaHash:ae,combine:S.combine,mapUv:K&&v(S.map.channel),aoMapUv:H&&v(S.aoMap.channel),lightMapUv:we&&v(S.lightMap.channel),bumpMapUv:fe&&v(S.bumpMap.channel),normalMapUv:re&&v(S.normalMap.channel),displacementMapUv:ce&&v(S.displacementMap.channel),emissiveMapUv:De&&v(S.emissiveMap.channel),metalnessMapUv:Pe&&v(S.metalnessMap.channel),roughnessMapUv:Ge&&v(S.roughnessMap.channel),anisotropyMapUv:J&&v(S.anisotropyMap.channel),clearcoatMapUv:me&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:se&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&v(S.sheenRoughnessMap.channel),specularMapUv:ke&&v(S.specularMap.channel),specularColorMapUv:je&&v(S.specularColorMap.channel),specularIntensityMapUv:Ve&&v(S.specularIntensityMap.channel),transmissionMapUv:Oe&&v(S.transmissionMap.channel),thicknessMapUv:Qe&&v(S.thicknessMap.channel),alphaMapUv:k&&v(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(re||Re),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:at,vertexUv3s:st,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(K||k),fog:!!G,useFog:S.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:B,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:ht,useLegacyLights:r._useLegacyLights,decodeVideoTexture:K&&S.map.isVideoTexture===!0&&S.map.colorSpace===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===li,flipSided:S.side===Bt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:xe&&S.extensions.derivatives===!0,extensionFragDepth:xe&&S.extensions.fragDepth===!0,extensionDrawBuffers:xe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)M.push(U),M.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(x(M,S),_(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){s.disableAll(),M.isWebGL2&&s.enable(0),M.supportsVertexTextures&&s.enable(1),M.instancing&&s.enable(2),M.instancingColor&&s.enable(3),M.matcap&&s.enable(4),M.envMap&&s.enable(5),M.normalMapObjectSpace&&s.enable(6),M.normalMapTangentSpace&&s.enable(7),M.clearcoat&&s.enable(8),M.iridescence&&s.enable(9),M.alphaTest&&s.enable(10),M.vertexColors&&s.enable(11),M.vertexAlphas&&s.enable(12),M.vertexUv1s&&s.enable(13),M.vertexUv2s&&s.enable(14),M.vertexUv3s&&s.enable(15),M.vertexTangents&&s.enable(16),M.anisotropy&&s.enable(17),S.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.skinning&&s.enable(4),M.morphTargets&&s.enable(5),M.morphNormals&&s.enable(6),M.morphColors&&s.enable(7),M.premultipliedAlpha&&s.enable(8),M.shadowMapEnabled&&s.enable(9),M.useLegacyLights&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),S.push(s.mask)}function y(S){const M=g[S.type];let U;if(M){const V=si[M];U=tc.clone(V.uniforms)}else U=S.uniforms;return U}function E(S,M){let U;for(let V=0,D=d.length;V<D;V++){const G=d[V];if(G.cacheKey===M){U=G,++U.usedTimes;break}}return U===void 0&&(U=new dp(r,M,S,n),d.push(U)),U}function C(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function N(S){c.remove(S)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:C,releaseShaderCache:N,programs:d,dispose:z}}function vp(){let r=new WeakMap;function e(n){let o=r.get(n);return o===void 0&&(o={},r.set(n,o)),o}function t(n){r.delete(n)}function i(n,o,s){r.get(n)[o]=s}function a(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function _p(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Io(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Do(){const r=[];let e=0;const t=[],i=[],a=[];function n(){e=0,t.length=0,i.length=0,a.length=0}function o(l,u,f,g,v,m){let p=r[e];return p===void 0?(p={id:l.id,object:l,geometry:u,material:f,groupOrder:g,renderOrder:l.renderOrder,z:v,group:m},r[e]=p):(p.id=l.id,p.object=l,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=l.renderOrder,p.z=v,p.group=m),e++,p}function s(l,u,f,g,v,m){const p=o(l,u,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?a.push(p):t.push(p)}function c(l,u,f,g,v,m){const p=o(l,u,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?a.unshift(p):t.unshift(p)}function d(l,u){t.length>1&&t.sort(l||_p),i.length>1&&i.sort(u||Io),a.length>1&&a.sort(u||Io)}function h(){for(let l=e,u=r.length;l<u;l++){const f=r[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:a,init:n,push:s,unshift:c,finish:h,sort:d}}function xp(){let r=new WeakMap;function e(i,a){const n=r.get(i);let o;return n===void 0?(o=new Do,r.set(i,[o])):a>=n.length?(o=new Do,n.push(o)):o=n[a],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function yp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new pt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=t,t}}}function Sp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Mp=0;function Ep(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bp(r,e){const t=new yp,i=Sp(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)a.probe.push(new ie);const n=new ie,o=new At,s=new At;function c(h,l){let u=0,f=0,g=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let v=0,m=0,p=0,x=0,_=0,y=0,E=0,C=0,N=0,z=0;h.sort(Ep);const S=l===!0?Math.PI:1;for(let U=0,V=h.length;U<V;U++){const D=h[U],G=D.color,W=D.intensity,oe=D.distance,F=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=G.r*W*S,f+=G.g*W*S,g+=G.b*W*S;else if(D.isLightProbe)for(let I=0;I<9;I++)a.probe[I].addScaledVector(D.sh.coefficients[I],W);else if(D.isDirectionalLight){const I=t.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const Z=D.shadow,X=i.get(D);X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,a.directionalShadow[v]=X,a.directionalShadowMap[v]=F,a.directionalShadowMatrix[v]=D.shadow.matrix,y++}a.directional[v]=I,v++}else if(D.isSpotLight){const I=t.get(D);I.position.setFromMatrixPosition(D.matrixWorld),I.color.copy(G).multiplyScalar(W*S),I.distance=oe,I.coneCos=Math.cos(D.angle),I.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),I.decay=D.decay,a.spot[p]=I;const Z=D.shadow;if(D.map&&(a.spotLightMap[N]=D.map,N++,Z.updateMatrices(D),D.castShadow&&z++),a.spotLightMatrix[p]=Z.matrix,D.castShadow){const X=i.get(D);X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,a.spotShadow[p]=X,a.spotShadowMap[p]=F,C++}p++}else if(D.isRectAreaLight){const I=t.get(D);I.color.copy(G).multiplyScalar(W),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),a.rectArea[x]=I,x++}else if(D.isPointLight){const I=t.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity*S),I.distance=D.distance,I.decay=D.decay,D.castShadow){const Z=D.shadow,X=i.get(D);X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,a.pointShadow[m]=X,a.pointShadowMap[m]=F,a.pointShadowMatrix[m]=D.shadow.matrix,E++}a.point[m]=I,m++}else if(D.isHemisphereLight){const I=t.get(D);I.skyColor.copy(D.color).multiplyScalar(W*S),I.groundColor.copy(D.groundColor).multiplyScalar(W*S),a.hemi[_]=I,_++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Be.LTC_FLOAT_1,a.rectAreaLTC2=Be.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Be.LTC_HALF_1,a.rectAreaLTC2=Be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=u,a.ambient[1]=f,a.ambient[2]=g;const M=a.hash;(M.directionalLength!==v||M.pointLength!==m||M.spotLength!==p||M.rectAreaLength!==x||M.hemiLength!==_||M.numDirectionalShadows!==y||M.numPointShadows!==E||M.numSpotShadows!==C||M.numSpotMaps!==N)&&(a.directional.length=v,a.spot.length=p,a.rectArea.length=x,a.point.length=m,a.hemi.length=_,a.directionalShadow.length=y,a.directionalShadowMap.length=y,a.pointShadow.length=E,a.pointShadowMap.length=E,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=y,a.pointShadowMatrix.length=E,a.spotLightMatrix.length=C+N-z,a.spotLightMap.length=N,a.numSpotLightShadowsWithMaps=z,M.directionalLength=v,M.pointLength=m,M.spotLength=p,M.rectAreaLength=x,M.hemiLength=_,M.numDirectionalShadows=y,M.numPointShadows=E,M.numSpotShadows=C,M.numSpotMaps=N,a.version=Mp++)}function d(h,l){let u=0,f=0,g=0,v=0,m=0;const p=l.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){const y=h[x];if(y.isDirectionalLight){const E=a.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(p),u++}else if(y.isSpotLight){const E=a.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const E=a.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),s.identity(),o.copy(y.matrixWorld),o.premultiply(p),s.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),v++}else if(y.isPointLight){const E=a.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const E=a.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:c,setupView:d,state:a}}function No(r,e){const t=new bp(r,e),i=[],a=[];function n(){i.length=0,a.length=0}function o(h){i.push(h)}function s(h){a.push(h)}function c(h){t.setup(i,h)}function d(h){t.setupView(i,h)}return{init:n,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:c,setupLightsView:d,pushLight:o,pushShadow:s}}function wp(r,e){let t=new WeakMap;function i(n,o=0){const s=t.get(n);let c;return s===void 0?(c=new No(r,e),t.set(n,[c])):o>=s.length?(c=new No(r,e),s.push(c)):c=s[o],c}function a(){t=new WeakMap}return{get:i,dispose:a}}class Tp extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ap extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lp(r,e,t){let i=new fs;const a=new dt,n=new dt,o=new Lt,s=new Tp({depthPacking:xl}),c=new Ap,d={},h=t.maxTextureSize,l={[Pi]:Bt,[Bt]:Pi,[li]:li},u=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Rp,fragmentShader:Cp}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new ni;g.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ii(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ko;let p=this.type;this.render=function(E,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const z=r.getRenderTarget(),S=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Ri),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=p!==yi&&this.type===yi,D=p===yi&&this.type!==yi;for(let G=0,W=E.length;G<W;G++){const oe=E[G],F=oe.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;a.copy(F.mapSize);const I=F.getFrameExtents();if(a.multiply(I),n.copy(F.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(n.x=Math.floor(h/I.x),a.x=n.x*I.x,F.mapSize.x=n.x),a.y>h&&(n.y=Math.floor(h/I.y),a.y=n.y*I.y,F.mapSize.y=n.y)),F.map===null||V===!0||D===!0){const X=this.type!==yi?{minFilter:Dt,magFilter:Dt}:{};F.map!==null&&F.map.dispose(),F.map=new Gi(a.x,a.y,X),F.map.texture.name=oe.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const Z=F.getViewportCount();for(let X=0;X<Z;X++){const T=F.getViewport(X);o.set(n.x*T.x,n.y*T.y,n.x*T.z,n.y*T.w),U.viewport(o),F.updateMatrices(oe,X),i=F.getFrustum(),y(C,N,F.camera,oe,this.type)}F.isPointLightShadow!==!0&&this.type===yi&&x(F,N),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(z,S,M)};function x(E,C){const N=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Gi(a.x,a.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(C,null,N,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(C,null,N,f,v,null)}function _(E,C,N,z){let S=null;const M=N.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(M!==void 0)S=M;else if(S=N.isPointLight===!0?c:s,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const U=S.uuid,V=C.uuid;let D=d[U];D===void 0&&(D={},d[U]=D);let G=D[V];G===void 0&&(G=S.clone(),D[V]=G),S=G}if(S.visible=C.visible,S.wireframe=C.wireframe,z===yi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:l[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=r.properties.get(S);U.light=N}return S}function y(E,C,N,z,S){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===yi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,E.matrixWorld);const U=e.update(E),V=E.material;if(Array.isArray(V)){const D=U.groups;for(let G=0,W=D.length;G<W;G++){const oe=D[G],F=V[oe.materialIndex];if(F&&F.visible){const I=_(E,F,z,S);r.renderBufferDirect(N,null,U,I,E,oe)}}}else if(V.visible){const D=_(E,V,z,S);r.renderBufferDirect(N,null,U,D,E,null)}}const M=E.children;for(let U=0,V=M.length;U<V;U++)y(M[U],C,N,z,S)}}function Pp(r,e,t){const i=t.isWebGL2;function a(){let k=!1;const Ce=new Lt;let ae=null;const xe=new Lt(0,0,0,0);return{setMask:function(Te){ae!==Te&&!k&&(r.colorMask(Te,Te,Te,Te),ae=Te)},setLocked:function(Te){k=Te},setClear:function(Te,at,st,ht,Rt){Rt===!0&&(Te*=ht,at*=ht,st*=ht),Ce.set(Te,at,st,ht),xe.equals(Ce)===!1&&(r.clearColor(Te,at,st,ht),xe.copy(Ce))},reset:function(){k=!1,ae=null,xe.set(-1,0,0,0)}}}function n(){let k=!1,Ce=null,ae=null,xe=null;return{setTest:function(Te){Te?ne(r.DEPTH_TEST):ee(r.DEPTH_TEST)},setMask:function(Te){Ce!==Te&&!k&&(r.depthMask(Te),Ce=Te)},setFunc:function(Te){if(ae!==Te){switch(Te){case Ys:r.depthFunc(r.NEVER);break;case Zs:r.depthFunc(r.ALWAYS);break;case Ks:r.depthFunc(r.LESS);break;case ea:r.depthFunc(r.LEQUAL);break;case Js:r.depthFunc(r.EQUAL);break;case Qs:r.depthFunc(r.GEQUAL);break;case $s:r.depthFunc(r.GREATER);break;case el:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=Te}},setLocked:function(Te){k=Te},setClear:function(Te){xe!==Te&&(r.clearDepth(Te),xe=Te)},reset:function(){k=!1,Ce=null,ae=null,xe=null}}}function o(){let k=!1,Ce=null,ae=null,xe=null,Te=null,at=null,st=null,ht=null,Rt=null;return{setTest:function($e){k||($e?ne(r.STENCIL_TEST):ee(r.STENCIL_TEST))},setMask:function($e){Ce!==$e&&!k&&(r.stencilMask($e),Ce=$e)},setFunc:function($e,le,he){(ae!==$e||xe!==le||Te!==he)&&(r.stencilFunc($e,le,he),ae=$e,xe=le,Te=he)},setOp:function($e,le,he){(at!==$e||st!==le||ht!==he)&&(r.stencilOp($e,le,he),at=$e,st=le,ht=he)},setLocked:function($e){k=$e},setClear:function($e){Rt!==$e&&(r.clearStencil($e),Rt=$e)},reset:function(){k=!1,Ce=null,ae=null,xe=null,Te=null,at=null,st=null,ht=null,Rt=null}}}const s=new a,c=new n,d=new o,h=new WeakMap,l=new WeakMap;let u={},f={},g=new WeakMap,v=[],m=null,p=!1,x=null,_=null,y=null,E=null,C=null,N=null,z=null,S=!1,M=null,U=null,V=null,D=null,G=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,F=0;const I=r.getParameter(r.VERSION);I.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(I)[1]),oe=F>=1):I.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),oe=F>=2);let Z=null,X={};const T=r.getParameter(r.SCISSOR_BOX),B=r.getParameter(r.VIEWPORT),A=new Lt().fromArray(T),P=new Lt().fromArray(B);function R(k,Ce,ae,xe){const Te=new Uint8Array(4),at=r.createTexture();r.bindTexture(k,at),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<ae;st++)i&&(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)?r.texImage3D(Ce,0,r.RGBA,1,1,xe,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(Ce+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return at}const Y={};Y[r.TEXTURE_2D]=R(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=R(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Y[r.TEXTURE_2D_ARRAY]=R(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=R(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ne(r.DEPTH_TEST),c.setFunc(ea),ce(!1),De(_a),ne(r.CULL_FACE),fe(Ri);function ne(k){u[k]!==!0&&(r.enable(k),u[k]=!0)}function ee(k){u[k]!==!1&&(r.disable(k),u[k]=!1)}function K(k,Ce){return f[k]!==Ce?(r.bindFramebuffer(k,Ce),f[k]=Ce,i&&(k===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Ce),k===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Ce)),!0):!1}function de(k,Ce){let ae=v,xe=!1;if(k)if(ae=g.get(Ce),ae===void 0&&(ae=[],g.set(Ce,ae)),k.isWebGLMultipleRenderTargets){const Te=k.texture;if(ae.length!==Te.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let at=0,st=Te.length;at<st;at++)ae[at]=r.COLOR_ATTACHMENT0+at;ae.length=Te.length,xe=!0}}else ae[0]!==r.COLOR_ATTACHMENT0&&(ae[0]=r.COLOR_ATTACHMENT0,xe=!0);else ae[0]!==r.BACK&&(ae[0]=r.BACK,xe=!0);xe&&(t.isWebGL2?r.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function ue(k){return m!==k?(r.useProgram(k),m=k,!0):!1}const H={[lr]:r.FUNC_ADD,[Bs]:r.FUNC_SUBTRACT,[Os]:r.FUNC_REVERSE_SUBTRACT};if(i)H[Ma]=r.MIN,H[Ea]=r.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(H[Ma]=k.MIN_EXT,H[Ea]=k.MAX_EXT)}const we={[zs]:r.ZERO,[Vs]:r.ONE,[Hs]:r.SRC_COLOR,[qo]:r.SRC_ALPHA,[Xs]:r.SRC_ALPHA_SATURATE,[qs]:r.DST_COLOR,[Gs]:r.DST_ALPHA,[Ws]:r.ONE_MINUS_SRC_COLOR,[jo]:r.ONE_MINUS_SRC_ALPHA,[js]:r.ONE_MINUS_DST_COLOR,[ks]:r.ONE_MINUS_DST_ALPHA};function fe(k,Ce,ae,xe,Te,at,st,ht){if(k===Ri){p===!0&&(ee(r.BLEND),p=!1);return}if(p===!1&&(ne(r.BLEND),p=!0),k!==Fs){if(k!==x||ht!==S){if((_!==lr||C!==lr)&&(r.blendEquation(r.FUNC_ADD),_=lr,C=lr),ht)switch(k){case hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xa:r.blendFunc(r.ONE,r.ONE);break;case ya:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sa:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xa:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ya:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sa:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,E=null,N=null,z=null,x=k,S=ht}return}Te=Te||Ce,at=at||ae,st=st||xe,(Ce!==_||Te!==C)&&(r.blendEquationSeparate(H[Ce],H[Te]),_=Ce,C=Te),(ae!==y||xe!==E||at!==N||st!==z)&&(r.blendFuncSeparate(we[ae],we[xe],we[at],we[st]),y=ae,E=xe,N=at,z=st),x=k,S=!1}function re(k,Ce){k.side===li?ee(r.CULL_FACE):ne(r.CULL_FACE);let ae=k.side===Bt;Ce&&(ae=!ae),ce(ae),k.blending===hr&&k.transparent===!1?fe(Ri):fe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),s.setMask(k.colorWrite);const xe=k.stencilWrite;d.setTest(xe),xe&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ge(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ne(r.SAMPLE_ALPHA_TO_COVERAGE):ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function ce(k){M!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),M=k)}function De(k){k!==Is?(ne(r.CULL_FACE),k!==U&&(k===_a?r.cullFace(r.BACK):k===Ds?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ee(r.CULL_FACE),U=k}function Pe(k){k!==V&&(oe&&r.lineWidth(k),V=k)}function Ge(k,Ce,ae){k?(ne(r.POLYGON_OFFSET_FILL),(D!==Ce||G!==ae)&&(r.polygonOffset(Ce,ae),D=Ce,G=ae)):ee(r.POLYGON_OFFSET_FILL)}function Re(k){k?ne(r.SCISSOR_TEST):ee(r.SCISSOR_TEST)}function Je(k){k===void 0&&(k=r.TEXTURE0+W-1),Z!==k&&(r.activeTexture(k),Z=k)}function Ze(k,Ce,ae){ae===void 0&&(Z===null?ae=r.TEXTURE0+W-1:ae=Z);let xe=X[ae];xe===void 0&&(xe={type:void 0,texture:void 0},X[ae]=xe),(xe.type!==k||xe.texture!==Ce)&&(Z!==ae&&(r.activeTexture(ae),Z=ae),r.bindTexture(k,Ce||Y[k]),xe.type=k,xe.texture=Ce)}function L(){const k=X[Z];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function w(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xe(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function je(k){A.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),A.copy(k))}function Ve(k){P.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),P.copy(k))}function Oe(k,Ce){let ae=l.get(Ce);ae===void 0&&(ae=new WeakMap,l.set(Ce,ae));let xe=ae.get(k);xe===void 0&&(xe=r.getUniformBlockIndex(Ce,k.name),ae.set(k,xe))}function Qe(k,Ce){const ae=l.get(Ce).get(k);h.get(Ce)!==ae&&(r.uniformBlockBinding(Ce,ae,k.__bindingPointIndex),h.set(Ce,ae))}function tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Z=null,X={},f={},g=new WeakMap,v=[],m=null,p=!1,x=null,_=null,y=null,E=null,C=null,N=null,z=null,S=!1,M=null,U=null,V=null,D=null,G=null,A.set(0,0,r.canvas.width,r.canvas.height),P.set(0,0,r.canvas.width,r.canvas.height),s.reset(),c.reset(),d.reset()}return{buffers:{color:s,depth:c,stencil:d},enable:ne,disable:ee,bindFramebuffer:K,drawBuffers:de,useProgram:ue,setBlending:fe,setMaterial:re,setFlipSided:ce,setCullFace:De,setLineWidth:Pe,setPolygonOffset:Ge,setScissorTest:Re,activeTexture:Je,bindTexture:Ze,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:J,texImage2D:Xe,texImage3D:ke,updateUBOMapping:Oe,uniformBlockBinding:Qe,texStorage2D:Se,texStorage3D:se,texSubImage2D:me,texSubImage3D:pe,compressedTexSubImage2D:ve,compressedTexSubImage3D:We,scissor:je,viewport:Ve,reset:tt}}function Up(r,e,t,i,a,n,o){const s=a.isWebGL2,c=a.maxTextures,d=a.maxCubemapSize,h=a.maxTextureSize,l=a.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,w){return p?new OffscreenCanvas(L,w):pn("canvas")}function _(L,w,J,me){let pe=1;if((L.width>me||L.height>me)&&(pe=me/Math.max(L.width,L.height)),pe<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ve=w?sa:Math.floor,We=ve(pe*L.width),Se=ve(pe*L.height);v===void 0&&(v=x(We,Se));const se=J?x(We,Se):v;return se.width=We,se.height=Se,se.getContext("2d").drawImage(L,0,0,We,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+We+"x"+Se+")."),se}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return Qa(L.width)&&Qa(L.height)}function E(L){return s?!1:L.wrapS!==ei||L.wrapT!==ei||L.minFilter!==Dt&&L.minFilter!==Xt}function C(L,w){return L.generateMipmaps&&w&&L.minFilter!==Dt&&L.minFilter!==Xt}function N(L){r.generateMipmap(L)}function z(L,w,J,me,pe=!1){if(s===!1)return w;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ve=w;return w===r.RED&&(J===r.FLOAT&&(ve=r.R32F),J===r.HALF_FLOAT&&(ve=r.R16F),J===r.UNSIGNED_BYTE&&(ve=r.R8)),w===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ve=r.R8UI),J===r.UNSIGNED_SHORT&&(ve=r.R16UI),J===r.UNSIGNED_INT&&(ve=r.R32UI),J===r.BYTE&&(ve=r.R8I),J===r.SHORT&&(ve=r.R16I),J===r.INT&&(ve=r.R32I)),w===r.RG&&(J===r.FLOAT&&(ve=r.RG32F),J===r.HALF_FLOAT&&(ve=r.RG16F),J===r.UNSIGNED_BYTE&&(ve=r.RG8)),w===r.RGBA&&(J===r.FLOAT&&(ve=r.RGBA32F),J===r.HALF_FLOAT&&(ve=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ve=me===vt&&pe===!1?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(ve=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ve=r.RGB5_A1)),(ve===r.R16F||ve===r.R32F||ve===r.RG16F||ve===r.RG32F||ve===r.RGBA16F||ve===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function S(L,w,J){return C(L,J)===!0||L.isFramebufferTexture&&L.minFilter!==Dt&&L.minFilter!==Xt?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function M(L){return L===Dt||L===ba||L===Mn?r.NEAREST:r.LINEAR}function U(L){const w=L.target;w.removeEventListener("dispose",U),D(w),w.isVideoTexture&&g.delete(w)}function V(L){const w=L.target;w.removeEventListener("dispose",V),W(w)}function D(L){const w=i.get(L);if(w.__webglInit===void 0)return;const J=L.source,me=m.get(J);if(me){const pe=me[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&G(L),Object.keys(me).length===0&&m.delete(J)}i.remove(L)}function G(L){const w=i.get(L);r.deleteTexture(w.__webglTexture);const J=L.source,me=m.get(J);delete me[w.__cacheKey],o.memory.textures--}function W(L){const w=L.texture,J=i.get(L),me=i.get(w);if(me.__webglTexture!==void 0&&(r.deleteTexture(me.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(J.__webglFramebuffer[pe]))for(let ve=0;ve<J.__webglFramebuffer[pe].length;ve++)r.deleteFramebuffer(J.__webglFramebuffer[pe][ve]);else r.deleteFramebuffer(J.__webglFramebuffer[pe]);J.__webglDepthbuffer&&r.deleteRenderbuffer(J.__webglDepthbuffer[pe])}else{if(Array.isArray(J.__webglFramebuffer))for(let pe=0;pe<J.__webglFramebuffer.length;pe++)r.deleteFramebuffer(J.__webglFramebuffer[pe]);else r.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&r.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&r.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let pe=0;pe<J.__webglColorRenderbuffer.length;pe++)J.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(J.__webglColorRenderbuffer[pe]);J.__webglDepthRenderbuffer&&r.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let pe=0,ve=w.length;pe<ve;pe++){const We=i.get(w[pe]);We.__webglTexture&&(r.deleteTexture(We.__webglTexture),o.memory.textures--),i.remove(w[pe])}i.remove(w),i.remove(L)}let oe=0;function F(){oe=0}function I(){const L=oe;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),oe+=1,L}function Z(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function X(L,w){const J=i.get(L);if(L.isVideoTexture&&Je(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(J,L,w);return}}t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+w)}function T(L,w){const J=i.get(L);if(L.version>0&&J.__version!==L.version){K(J,L,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+w)}function B(L,w){const J=i.get(L);if(L.version>0&&J.__version!==L.version){K(J,L,w);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+w)}function A(L,w){const J=i.get(L);if(L.version>0&&J.__version!==L.version){de(J,L,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+w)}const P={[ra]:r.REPEAT,[ei]:r.CLAMP_TO_EDGE,[na]:r.MIRRORED_REPEAT},R={[Dt]:r.NEAREST,[ba]:r.NEAREST_MIPMAP_NEAREST,[Mn]:r.NEAREST_MIPMAP_LINEAR,[Xt]:r.LINEAR,[ll]:r.LINEAR_MIPMAP_NEAREST,[Lr]:r.LINEAR_MIPMAP_LINEAR},Y={[El]:r.NEVER,[Ll]:r.ALWAYS,[bl]:r.LESS,[Tl]:r.LEQUAL,[wl]:r.EQUAL,[Cl]:r.GEQUAL,[Al]:r.GREATER,[Rl]:r.NOTEQUAL};function ne(L,w,J){if(J?(r.texParameteri(L,r.TEXTURE_WRAP_S,P[w.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,P[w.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,P[w.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,R[w.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,R[w.minFilter])):(r.texParameteri(L,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(L,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(w.wrapS!==ei||w.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,r.TEXTURE_MAG_FILTER,M(w.magFilter)),r.texParameteri(L,r.TEXTURE_MIN_FILTER,M(w.minFilter)),w.minFilter!==Dt&&w.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Y[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Dt||w.minFilter!==Mn&&w.minFilter!==Lr||w.type===Ai&&e.has("OES_texture_float_linear")===!1||s===!1&&w.type===Pr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(r.texParameterf(L,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ee(L,w){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",U));const me=w.source;let pe=m.get(me);pe===void 0&&(pe={},m.set(me,pe));const ve=Z(w);if(ve!==L.__cacheKey){pe[ve]===void 0&&(pe[ve]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,J=!0),pe[ve].usedTimes++;const We=pe[L.__cacheKey];We!==void 0&&(pe[L.__cacheKey].usedTimes--,We.usedTimes===0&&G(w)),L.__cacheKey=ve,L.__webglTexture=pe[ve].texture}return J}function K(L,w,J){let me=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=r.TEXTURE_3D);const pe=ee(L,w),ve=w.source;t.bindTexture(me,L.__webglTexture,r.TEXTURE0+J);const We=i.get(ve);if(ve.version!==We.__version||pe===!0){t.activeTexture(r.TEXTURE0+J),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Se=E(w)&&y(w.image)===!1;let se=_(w.image,Se,!1,h);se=Ze(w,se);const Xe=y(se)||s,ke=n.convert(w.format,w.colorSpace);let je=n.convert(w.type),Ve=z(w.internalFormat,ke,je,w.colorSpace,w.isVideoTexture);ne(me,w,Xe);let Oe;const Qe=w.mipmaps,tt=s&&w.isVideoTexture!==!0,k=We.__version===void 0||pe===!0,Ce=S(w,se,Xe);if(w.isDepthTexture)Ve=r.DEPTH_COMPONENT,s?w.type===Ai?Ve=r.DEPTH_COMPONENT32F:w.type===Ti?Ve=r.DEPTH_COMPONENT24:w.type===zi?Ve=r.DEPTH24_STENCIL8:Ve=r.DEPTH_COMPONENT16:w.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Vi&&Ve===r.DEPTH_COMPONENT&&w.type!==da&&w.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ti,je=n.convert(w.type)),w.format===fr&&Ve===r.DEPTH_COMPONENT&&(Ve=r.DEPTH_STENCIL,w.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=zi,je=n.convert(w.type))),k&&(tt?t.texStorage2D(r.TEXTURE_2D,1,Ve,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Ve,se.width,se.height,0,ke,je,null));else if(w.isDataTexture)if(Qe.length>0&&Xe){tt&&k&&t.texStorage2D(r.TEXTURE_2D,Ce,Ve,Qe[0].width,Qe[0].height);for(let ae=0,xe=Qe.length;ae<xe;ae++)Oe=Qe[ae],tt?t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Oe.width,Oe.height,ke,je,Oe.data):t.texImage2D(r.TEXTURE_2D,ae,Ve,Oe.width,Oe.height,0,ke,je,Oe.data);w.generateMipmaps=!1}else tt?(k&&t.texStorage2D(r.TEXTURE_2D,Ce,Ve,se.width,se.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,ke,je,se.data)):t.texImage2D(r.TEXTURE_2D,0,Ve,se.width,se.height,0,ke,je,se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){tt&&k&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Ve,Qe[0].width,Qe[0].height,se.depth);for(let ae=0,xe=Qe.length;ae<xe;ae++)Oe=Qe[ae],w.format!==ti?ke!==null?tt?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,Oe.width,Oe.height,se.depth,ke,Oe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,Ve,Oe.width,Oe.height,se.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,Oe.width,Oe.height,se.depth,ke,je,Oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,Ve,Oe.width,Oe.height,se.depth,0,ke,je,Oe.data)}else{tt&&k&&t.texStorage2D(r.TEXTURE_2D,Ce,Ve,Qe[0].width,Qe[0].height);for(let ae=0,xe=Qe.length;ae<xe;ae++)Oe=Qe[ae],w.format!==ti?ke!==null?tt?t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,Oe.width,Oe.height,ke,Oe.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,Ve,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Oe.width,Oe.height,ke,je,Oe.data):t.texImage2D(r.TEXTURE_2D,ae,Ve,Oe.width,Oe.height,0,ke,je,Oe.data)}else if(w.isDataArrayTexture)tt?(k&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Ve,se.width,se.height,se.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ke,je,se.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ve,se.width,se.height,se.depth,0,ke,je,se.data);else if(w.isData3DTexture)tt?(k&&t.texStorage3D(r.TEXTURE_3D,Ce,Ve,se.width,se.height,se.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ke,je,se.data)):t.texImage3D(r.TEXTURE_3D,0,Ve,se.width,se.height,se.depth,0,ke,je,se.data);else if(w.isFramebufferTexture){if(k)if(tt)t.texStorage2D(r.TEXTURE_2D,Ce,Ve,se.width,se.height);else{let ae=se.width,xe=se.height;for(let Te=0;Te<Ce;Te++)t.texImage2D(r.TEXTURE_2D,Te,Ve,ae,xe,0,ke,je,null),ae>>=1,xe>>=1}}else if(Qe.length>0&&Xe){tt&&k&&t.texStorage2D(r.TEXTURE_2D,Ce,Ve,Qe[0].width,Qe[0].height);for(let ae=0,xe=Qe.length;ae<xe;ae++)Oe=Qe[ae],tt?t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ke,je,Oe):t.texImage2D(r.TEXTURE_2D,ae,Ve,ke,je,Oe);w.generateMipmaps=!1}else tt?(k&&t.texStorage2D(r.TEXTURE_2D,Ce,Ve,se.width,se.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,je,se)):t.texImage2D(r.TEXTURE_2D,0,Ve,ke,je,se);C(w,Xe)&&N(me),We.__version=ve.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function de(L,w,J){if(w.image.length!==6)return;const me=ee(L,w),pe=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+J);const ve=i.get(pe);if(pe.version!==ve.__version||me===!0){t.activeTexture(r.TEXTURE0+J),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const We=w.isCompressedTexture||w.image[0].isCompressedTexture,Se=w.image[0]&&w.image[0].isDataTexture,se=[];for(let ae=0;ae<6;ae++)!We&&!Se?se[ae]=_(w.image[ae],!1,!0,d):se[ae]=Se?w.image[ae].image:w.image[ae],se[ae]=Ze(w,se[ae]);const Xe=se[0],ke=y(Xe)||s,je=n.convert(w.format,w.colorSpace),Ve=n.convert(w.type),Oe=z(w.internalFormat,je,Ve,w.colorSpace),Qe=s&&w.isVideoTexture!==!0,tt=ve.__version===void 0||me===!0;let k=S(w,Xe,ke);ne(r.TEXTURE_CUBE_MAP,w,ke);let Ce;if(We){Qe&&tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,k,Oe,Xe.width,Xe.height);for(let ae=0;ae<6;ae++){Ce=se[ae].mipmaps;for(let xe=0;xe<Ce.length;xe++){const Te=Ce[xe];w.format!==ti?je!==null?Qe?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,0,0,Te.width,Te.height,je,Te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,Oe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,0,0,Te.width,Te.height,je,Ve,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe,Oe,Te.width,Te.height,0,je,Ve,Te.data)}}}else{Ce=w.mipmaps,Qe&&tt&&(Ce.length>0&&k++,t.texStorage2D(r.TEXTURE_CUBE_MAP,k,Oe,se[0].width,se[0].height));for(let ae=0;ae<6;ae++)if(Se){Qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,se[ae].width,se[ae].height,je,Ve,se[ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Oe,se[ae].width,se[ae].height,0,je,Ve,se[ae].data);for(let xe=0;xe<Ce.length;xe++){const Te=Ce[xe].image[ae].image;Qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,0,0,Te.width,Te.height,je,Ve,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,Oe,Te.width,Te.height,0,je,Ve,Te.data)}}else{Qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,je,Ve,se[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Oe,je,Ve,se[ae]);for(let xe=0;xe<Ce.length;xe++){const Te=Ce[xe];Qe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,0,0,je,Ve,Te.image[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe+1,Oe,je,Ve,Te.image[ae])}}}C(w,ke)&&N(r.TEXTURE_CUBE_MAP),ve.__version=pe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ue(L,w,J,me,pe,ve){const We=n.convert(J.format,J.colorSpace),Se=n.convert(J.type),se=z(J.internalFormat,We,Se,J.colorSpace);if(!i.get(w).__hasExternalTextures){const Xe=Math.max(1,w.width>>ve),ke=Math.max(1,w.height>>ve);pe===r.TEXTURE_3D||pe===r.TEXTURE_2D_ARRAY?t.texImage3D(pe,ve,se,Xe,ke,w.depth,0,We,Se,null):t.texImage2D(pe,ve,se,Xe,ke,0,We,Se,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),Re(w)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,pe,i.get(J).__webglTexture,0,Ge(w)):(pe===r.TEXTURE_2D||pe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,pe,i.get(J).__webglTexture,ve),t.bindFramebuffer(r.FRAMEBUFFER,null)}function H(L,w,J){if(r.bindRenderbuffer(r.RENDERBUFFER,L),w.depthBuffer&&!w.stencilBuffer){let me=r.DEPTH_COMPONENT16;if(J||Re(w)){const pe=w.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Ai?me=r.DEPTH_COMPONENT32F:pe.type===Ti&&(me=r.DEPTH_COMPONENT24));const ve=Ge(w);Re(w)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve,me,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,me,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,me,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,L)}else if(w.depthBuffer&&w.stencilBuffer){const me=Ge(w);J&&Re(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,r.DEPTH24_STENCIL8,w.width,w.height):Re(w)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,L)}else{const me=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let pe=0;pe<me.length;pe++){const ve=me[pe],We=n.convert(ve.format,ve.colorSpace),Se=n.convert(ve.type),se=z(ve.internalFormat,We,Se,ve.colorSpace),Xe=Ge(w);J&&Re(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,se,w.width,w.height):Re(w)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xe,se,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,se,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);const J=i.get(w.depthTexture).__webglTexture,me=Ge(w);if(w.depthTexture.format===Vi)Re(w)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(w.depthTexture.format===fr)Re(w)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function fe(L){const w=i.get(L),J=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,L)}else if(J){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]=r.createRenderbuffer(),H(w.__webglDepthbuffer[me],L,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),H(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(L,w,J){const me=i.get(L);w!==void 0&&ue(me.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&fe(L)}function ce(L){const w=L.texture,J=i.get(L),me=i.get(w);L.addEventListener("dispose",V),L.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=w.version,o.memory.textures++);const pe=L.isWebGLCubeRenderTarget===!0,ve=L.isWebGLMultipleRenderTargets===!0,We=y(L)||s;if(pe){J.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(s&&w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[Se]=[];for(let se=0;se<w.mipmaps.length;se++)J.__webglFramebuffer[Se][se]=r.createFramebuffer()}else J.__webglFramebuffer[Se]=r.createFramebuffer()}else{if(s&&w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let Se=0;Se<w.mipmaps.length;Se++)J.__webglFramebuffer[Se]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(ve)if(a.drawBuffers){const Se=L.texture;for(let se=0,Xe=Se.length;se<Xe;se++){const ke=i.get(Se[se]);ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&L.samples>0&&Re(L)===!1){const Se=ve?w:[w];J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let se=0;se<Se.length;se++){const Xe=Se[se];J.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[se]);const ke=n.convert(Xe.format,Xe.colorSpace),je=n.convert(Xe.type),Ve=z(Xe.internalFormat,ke,je,Xe.colorSpace,L.isXRRenderTarget===!0),Oe=Ge(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,Ve,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,J.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),H(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),ne(r.TEXTURE_CUBE_MAP,w,We);for(let Se=0;Se<6;Se++)if(s&&w.mipmaps&&w.mipmaps.length>0)for(let se=0;se<w.mipmaps.length;se++)ue(J.__webglFramebuffer[Se][se],L,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,se);else ue(J.__webglFramebuffer[Se],L,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);C(w,We)&&N(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){const Se=L.texture;for(let se=0,Xe=Se.length;se<Xe;se++){const ke=Se[se],je=i.get(ke);t.bindTexture(r.TEXTURE_2D,je.__webglTexture),ne(r.TEXTURE_2D,ke,We),ue(J.__webglFramebuffer,L,ke,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,0),C(ke,We)&&N(r.TEXTURE_2D)}t.unbindTexture()}else{let Se=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(s?Se=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,me.__webglTexture),ne(Se,w,We),s&&w.mipmaps&&w.mipmaps.length>0)for(let se=0;se<w.mipmaps.length;se++)ue(J.__webglFramebuffer[se],L,w,r.COLOR_ATTACHMENT0,Se,se);else ue(J.__webglFramebuffer,L,w,r.COLOR_ATTACHMENT0,Se,0);C(w,We)&&N(Se),t.unbindTexture()}L.depthBuffer&&fe(L)}function De(L){const w=y(L)||s,J=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let me=0,pe=J.length;me<pe;me++){const ve=J[me];if(C(ve,w)){const We=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Se=i.get(ve).__webglTexture;t.bindTexture(We,Se),N(We),t.unbindTexture()}}}function Pe(L){if(s&&L.samples>0&&Re(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],J=L.width,me=L.height;let pe=r.COLOR_BUFFER_BIT;const ve=[],We=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=i.get(L),se=L.isWebGLMultipleRenderTargets===!0;if(se)for(let Xe=0;Xe<w.length;Xe++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Xe=0;Xe<w.length;Xe++){ve.push(r.COLOR_ATTACHMENT0+Xe),L.depthBuffer&&ve.push(We);const ke=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(ke===!1&&(L.depthBuffer&&(pe|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&(pe|=r.STENCIL_BUFFER_BIT)),se&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[Xe]),ke===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[We]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[We])),se){const je=i.get(w[Xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,je,0)}r.blitFramebuffer(0,0,J,me,0,0,J,me,pe,r.NEAREST),f&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ve)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let Xe=0;Xe<w.length;Xe++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.RENDERBUFFER,Se.__webglColorRenderbuffer[Xe]);const ke=i.get(w[Xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.TEXTURE_2D,ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function Ge(L){return Math.min(l,L.samples)}function Re(L){const w=i.get(L);return s&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Je(L){const w=o.render.frame;g.get(L)!==w&&(g.set(L,w),L.update())}function Ze(L,w){const J=L.colorSpace,me=L.format,pe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===aa||J!==ui&&J!==Wi&&(J===vt||J===mn?s===!1?e.has("EXT_sRGB")===!0&&me===ti?(L.format=aa,L.minFilter=Xt,L.generateMipmaps=!1):w=rs.sRGBToLinear(w):(me!==ti||pe!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),w}this.allocateTextureUnit=I,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=T,this.setTexture3D=B,this.setTextureCube=A,this.rebindTextures=re,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Re}const Ip=0,Et=1;function Dp(r,e,t){const i=t.isWebGL2;function a(n,o=Wi){let s;const c=o===vt||o===mn?Et:Ip;if(n===Li)return r.UNSIGNED_BYTE;if(n===Ko)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===cl)return r.BYTE;if(n===hl)return r.SHORT;if(n===da)return r.UNSIGNED_SHORT;if(n===Zo)return r.INT;if(n===Ti)return r.UNSIGNED_INT;if(n===Ai)return r.FLOAT;if(n===Pr)return i?r.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(n===ul)return r.ALPHA;if(n===ti)return r.RGBA;if(n===dl)return r.LUMINANCE;if(n===pl)return r.LUMINANCE_ALPHA;if(n===Vi)return r.DEPTH_COMPONENT;if(n===fr)return r.DEPTH_STENCIL;if(n===aa)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(n===fl)return r.RED;if(n===Qo)return r.RED_INTEGER;if(n===ml)return r.RG;if(n===$o)return r.RG_INTEGER;if(n===es)return r.RGBA_INTEGER;if(n===En||n===bn||n===wn||n===Tn)if(c===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===En)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===En)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bn)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wn)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tn)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Ta||n===Aa||n===Ra)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gl)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Ca||n===La)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ca)return c===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===La)return c===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pa||n===Ua||n===Ia||n===Da||n===Na||n===Fa||n===Ba||n===Oa||n===za||n===Va||n===Ha||n===Wa||n===Ga||n===ka)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Pa)return c===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return c===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ia)return c===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return c===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return c===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return c===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return c===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return c===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return c===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return c===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return c===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return c===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return c===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return c===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===An||n===qa||n===ja)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===An)return c===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ja)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vl||n===Xa||n===Ya||n===Za)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===An)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i?r.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):r[n]!==void 0?r[n]:null}return{convert:a}}class Np extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tr extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fp={type:"move"};class Jn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,n=null,o=null;const s=this._targetRay,c=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(d,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=d.joints["index-finger-tip"],l=d.joints["thumb-tip"],u=h.position.distanceTo(l.position),f=.02,g=.005;d.inputState.pinching&&u>f+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&u<=f-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(c.matrix.fromArray(n.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,n.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(n.linearVelocity)):c.hasLinearVelocity=!1,n.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(n.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&n!==null&&(a=n),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Fp)))}return s!==null&&(s.visible=a!==null),c!==null&&(c.visible=n!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Tr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Bp extends kt{constructor(e,t,i,a,n,o,s,c,d,h){if(h=h!==void 0?h:Vi,h!==Vi&&h!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Vi&&(i=Ti),i===void 0&&h===fr&&(i=zi),super(null,a,n,o,s,c,h,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Dt,this.minFilter=c!==void 0?c:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Op extends gr{constructor(e,t){super();const i=this;let a=null,n=1,o=null,s="local-floor",c=1,d=null,h=null,l=null,u=null,f=null,g=null;const v=t.getContextAttributes();let m=null,p=null;const x=[],_=[],y=new Yt;y.layers.enable(1),y.viewport=new Lt;const E=new Yt;E.layers.enable(2),E.viewport=new Lt;const C=[y,E],N=new Np;N.layers.enable(1),N.layers.enable(2);let z=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let B=x[T];return B===void 0&&(B=new Jn,x[T]=B),B.getTargetRaySpace()},this.getControllerGrip=function(T){let B=x[T];return B===void 0&&(B=new Jn,x[T]=B),B.getGripSpace()},this.getHand=function(T){let B=x[T];return B===void 0&&(B=new Jn,x[T]=B),B.getHandSpace()};function M(T){const B=_.indexOf(T.inputSource);if(B===-1)return;const A=x[B];A!==void 0&&(A.update(T.inputSource,T.frame,d||o),A.dispatchEvent({type:T.type,data:T.inputSource}))}function U(){a.removeEventListener("select",M),a.removeEventListener("selectstart",M),a.removeEventListener("selectend",M),a.removeEventListener("squeeze",M),a.removeEventListener("squeezestart",M),a.removeEventListener("squeezeend",M),a.removeEventListener("end",U),a.removeEventListener("inputsourceschange",V);for(let T=0;T<x.length;T++){const B=_[T];B!==null&&(_[T]=null,x[T].disconnect(B))}z=null,S=null,e.setRenderTarget(m),f=null,u=null,l=null,a=null,p=null,X.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){n=T,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){s=T,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(T){d=T},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return l},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(T){if(a=T,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",M),a.addEventListener("selectstart",M),a.addEventListener("selectend",M),a.addEventListener("squeeze",M),a.addEventListener("squeezestart",M),a.addEventListener("squeezeend",M),a.addEventListener("end",U),a.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await t.makeXRCompatible(),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:a.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:n};f=new XRWebGLLayer(a,t,B),a.updateRenderState({baseLayer:f}),p=new Gi(f.framebufferWidth,f.framebufferHeight,{format:ti,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let B=null,A=null,P=null;v.depth&&(P=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=v.stencil?fr:Vi,A=v.stencil?zi:Ti);const R={colorFormat:t.RGBA8,depthFormat:P,scaleFactor:n};l=new XRWebGLBinding(a,t),u=l.createProjectionLayer(R),a.updateRenderState({layers:[u]}),p=new Gi(u.textureWidth,u.textureHeight,{format:ti,type:Li,depthTexture:new Bp(u.textureWidth,u.textureHeight,A,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Y=e.properties.get(p);Y.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),d=null,o=await a.requestReferenceSpace(s),X.setContext(a),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function V(T){for(let B=0;B<T.removed.length;B++){const A=T.removed[B],P=_.indexOf(A);P>=0&&(_[P]=null,x[P].disconnect(A))}for(let B=0;B<T.added.length;B++){const A=T.added[B];let P=_.indexOf(A);if(P===-1){for(let Y=0;Y<x.length;Y++)if(Y>=_.length){_.push(A),P=Y;break}else if(_[Y]===null){_[Y]=A,P=Y;break}if(P===-1)break}const R=x[P];R&&R.connect(A)}}const D=new ie,G=new ie;function W(T,B,A){D.setFromMatrixPosition(B.matrixWorld),G.setFromMatrixPosition(A.matrixWorld);const P=D.distanceTo(G),R=B.projectionMatrix.elements,Y=A.projectionMatrix.elements,ne=R[14]/(R[10]-1),ee=R[14]/(R[10]+1),K=(R[9]+1)/R[5],de=(R[9]-1)/R[5],ue=(R[8]-1)/R[0],H=(Y[8]+1)/Y[0],we=ne*ue,fe=ne*H,re=P/(-ue+H),ce=re*-ue;B.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(ce),T.translateZ(re),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();const De=ne+re,Pe=ee+re,Ge=we-ce,Re=fe+(P-ce),Je=K*ee/Pe*De,Ze=de*ee/Pe*De;T.projectionMatrix.makePerspective(Ge,Re,Je,Ze,De,Pe),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}function oe(T,B){B===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(B.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(a===null)return;N.near=E.near=y.near=T.near,N.far=E.far=y.far=T.far,(z!==N.near||S!==N.far)&&(a.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,S=N.far);const B=T.parent,A=N.cameras;oe(N,B);for(let P=0;P<A.length;P++)oe(A[P],B);A.length===2?W(N,y,E):N.projectionMatrix.copy(y.projectionMatrix),F(T,N,B)};function F(T,B,A){A===null?T.matrix.copy(B.matrixWorld):(T.matrix.copy(A.matrixWorld),T.matrix.invert(),T.matrix.multiply(B.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(B.projectionMatrix),T.projectionMatrixInverse.copy(B.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=oa*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(T){c=T,u!==null&&(u.fixedFoveation=T),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=T)};let I=null;function Z(T,B){if(h=B.getViewerPose(d||o),g=B,h!==null){const A=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let P=!1;A.length!==N.cameras.length&&(N.cameras.length=0,P=!0);for(let R=0;R<A.length;R++){const Y=A[R];let ne=null;if(f!==null)ne=f.getViewport(Y);else{const K=l.getViewSubImage(u,Y);ne=K.viewport,R===0&&(e.setRenderTargetTextures(p,K.colorTexture,u.ignoreDepthValues?void 0:K.depthStencilTexture),e.setRenderTarget(p))}let ee=C[R];ee===void 0&&(ee=new Yt,ee.layers.enable(R),ee.viewport=new Lt,C[R]=ee),ee.matrix.fromArray(Y.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Y.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ne.x,ne.y,ne.width,ne.height),R===0&&(N.matrix.copy(ee.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),P===!0&&N.cameras.push(ee)}}for(let A=0;A<x.length;A++){const P=_[A],R=x[A];P!==null&&R!==void 0&&R.update(P,B,d||o)}I&&I(T,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),g=null}const X=new ms;X.setAnimationLoop(Z),this.setAnimationLoop=function(T){I=T},this.dispose=function(){}}}function zp(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,us(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,x,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(m,p):p.isMeshToonMaterial?(n(m,p),l(m,p)):p.isMeshPhongMaterial?(n(m,p),h(m,p)):p.isMeshStandardMaterial?(n(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(n(m,p),g(m,p)):p.isMeshDepthMaterial?n(m,p):p.isMeshDistanceMaterial?(n(m,p),v(m,p)):p.isMeshNormalMaterial?n(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?c(m,p,x,_):p.isSpriteMaterial?d(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Vp(r,e,t,i){let a={},n={},o=[];const s=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function d(x,_){let y=a[x.id];y===void 0&&(g(x),y=h(x),a[x.id]=y,x.addEventListener("dispose",m));const E=_.program;i.updateUBOMapping(x,E);const C=e.render.frame;n[x.id]!==C&&(u(x),n[x.id]=C)}function h(x){const _=l();x.__bindingPointIndex=_;const y=r.createBuffer(),E=x.__size,C=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,y),y}function l(){for(let x=0;x<s;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const _=a[x.id],y=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let C=0,N=y.length;C<N;C++){const z=y[C];if(f(z,C,E)===!0){const S=z.__offset,M=Array.isArray(z.value)?z.value:[z.value];let U=0;for(let V=0;V<M.length;V++){const D=M[V],G=v(D);typeof D=="number"?(z.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,S+U,z.__data)):D.isMatrix3?(z.__data[0]=D.elements[0],z.__data[1]=D.elements[1],z.__data[2]=D.elements[2],z.__data[3]=D.elements[0],z.__data[4]=D.elements[3],z.__data[5]=D.elements[4],z.__data[6]=D.elements[5],z.__data[7]=D.elements[0],z.__data[8]=D.elements[6],z.__data[9]=D.elements[7],z.__data[10]=D.elements[8],z.__data[11]=D.elements[0]):(D.toArray(z.__data,U),U+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,S,z.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,_,y){const E=x.value;if(y[_]===void 0){if(typeof E=="number")y[_]=E;else{const C=Array.isArray(E)?E:[E],N=[];for(let z=0;z<C.length;z++)N.push(C[z].clone());y[_]=N}return!0}else if(typeof E=="number"){if(y[_]!==E)return y[_]=E,!0}else{const C=Array.isArray(y[_])?y[_]:[y[_]],N=Array.isArray(E)?E:[E];for(let z=0;z<C.length;z++){const S=C[z];if(S.equals(N[z])===!1)return S.copy(N[z]),!0}}return!1}function g(x){const _=x.uniforms;let y=0;const E=16;let C=0;for(let N=0,z=_.length;N<z;N++){const S=_[N],M={boundary:0,storage:0},U=Array.isArray(S.value)?S.value:[S.value];for(let V=0,D=U.length;V<D;V++){const G=U[V],W=v(G);M.boundary+=W.boundary,M.storage+=W.storage}if(S.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,N>0){C=y%E;const V=E-C;C!==0&&V-M.boundary<0&&(y+=E-C,S.__offset=y)}y+=M.storage}return C=y%E,C>0&&(y+=E-C),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(a[_.id]),delete a[_.id],delete n[_.id]}function p(){for(const x in a)r.deleteBuffer(a[x]);o=[],a={},n={}}return{bind:c,update:d,dispose:p}}class ys{constructor(e={}){const{canvas:t=Ul(),context:i=null,depth:a=!0,stencil:n=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=Ci,this.toneMappingExposure=1;const _=this;let y=!1,E=0,C=0,N=null,z=-1,S=null;const M=new Lt,U=new Lt;let V=null;const D=new pt(0);let G=0,W=t.width,oe=t.height,F=1,I=null,Z=null;const X=new Lt(0,0,W,oe),T=new Lt(0,0,W,oe);let B=!1;const A=new fs;let P=!1,R=!1,Y=null;const ne=new At,ee=new dt,K=new ie,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return N===null?F:1}let H=i;function we(b,O){for(let q=0;q<b.length;q++){const j=b[q],Q=t.getContext(j,O);if(Q!==null)return Q}return null}try{const b={alpha:!0,depth:a,stencil:n,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ua}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",xe,!1),H===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),H=we(O,b),H===null)throw we(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let fe,re,ce,De,Pe,Ge,Re,Je,Ze,L,w,J,me,pe,ve,We,Se,se,Xe,ke,je,Ve,Oe,Qe;function tt(){fe=new Ku(H),re=new Gu(H,fe,e),fe.init(re),Ve=new Dp(H,fe,re),ce=new Pp(H,fe,re),De=new $u(H),Pe=new vp,Ge=new Up(H,fe,ce,Pe,re,Ve,De),Re=new qu(_),Je=new Zu(_),Ze=new lc(H,re),Oe=new Hu(H,fe,Ze,re),L=new Ju(H,Ze,De,Oe),w=new rd(H,L,Ze,De),Xe=new id(H,re,Ge),We=new ku(Pe),J=new gp(_,Re,Je,fe,re,Oe,We),me=new zp(_,Pe),pe=new xp,ve=new wp(fe,re),se=new Vu(_,Re,Je,ce,w,u,c),Se=new Lp(_,w,re),Qe=new Vp(H,De,re,ce),ke=new Wu(H,fe,De,re),je=new Qu(H,fe,De,re),De.programs=J.programs,_.capabilities=re,_.extensions=fe,_.properties=Pe,_.renderLists=pe,_.shadowMap=Se,_.state=ce,_.info=De}tt();const k=new Op(_,H);this.xr=k,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=fe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=fe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(b){b!==void 0&&(F=b,this.setSize(W,oe,!1))},this.getSize=function(b){return b.set(W,oe)},this.setSize=function(b,O,q=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,oe=O,t.width=Math.floor(b*F),t.height=Math.floor(O*F),q===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(W*F,oe*F).floor()},this.setDrawingBufferSize=function(b,O,q){W=b,oe=O,F=q,t.width=Math.floor(b*q),t.height=Math.floor(O*q),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(X)},this.setViewport=function(b,O,q,j){b.isVector4?X.set(b.x,b.y,b.z,b.w):X.set(b,O,q,j),ce.viewport(M.copy(X).multiplyScalar(F).floor())},this.getScissor=function(b){return b.copy(T)},this.setScissor=function(b,O,q,j){b.isVector4?T.set(b.x,b.y,b.z,b.w):T.set(b,O,q,j),ce.scissor(U.copy(T).multiplyScalar(F).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(b){ce.setScissorTest(B=b)},this.setOpaqueSort=function(b){I=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(b=!0,O=!0,q=!0){let j=0;if(b){let Q=!1;if(N!==null){const $=N.texture.format;Q=$===es||$===$o||$===Qo}if(Q){const $=N.texture.type,Ee=$===Li||$===Ti||$===da||$===zi||$===Ko||$===Jo,Ae=se.getClearColor(),He=se.getClearAlpha(),Ne=Ae.r,Fe=Ae.g,ye=Ae.b;Ee?(f[0]=Ne,f[1]=Fe,f[2]=ye,f[3]=He,H.clearBufferuiv(H.COLOR,0,f)):(g[0]=Ne,g[1]=Fe,g[2]=ye,g[3]=He,H.clearBufferiv(H.COLOR,0,g))}else j|=H.COLOR_BUFFER_BIT}O&&(j|=H.DEPTH_BUFFER_BIT),q&&(j|=H.STENCIL_BUFFER_BIT),H.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),pe.dispose(),ve.dispose(),Pe.dispose(),Re.dispose(),Je.dispose(),w.dispose(),Oe.dispose(),Qe.dispose(),J.dispose(),k.dispose(),k.removeEventListener("sessionstart",$e),k.removeEventListener("sessionend",le),Y&&(Y.dispose(),Y=null),he.stop()};function Ce(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=De.autoReset,O=Se.enabled,q=Se.autoUpdate,j=Se.needsUpdate,Q=Se.type;tt(),De.autoReset=b,Se.enabled=O,Se.autoUpdate=q,Se.needsUpdate=j,Se.type=Q}function xe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Te(b){const O=b.target;O.removeEventListener("dispose",Te),at(O)}function at(b){st(b),Pe.remove(b)}function st(b){const O=Pe.get(b).programs;O!==void 0&&(O.forEach(function(q){J.releaseProgram(q)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,q,j,Q,$){O===null&&(O=de);const Ee=Q.isMesh&&Q.matrixWorld.determinant()<0,Ae=be(b,O,q,j,Q);ce.setMaterial(j,Ee);let He=q.index,Ne=1;if(j.wireframe===!0){if(He=L.getWireframeAttribute(q),He===void 0)return;Ne=2}const Fe=q.drawRange,ye=q.attributes.position;let lt=Fe.start*Ne,nt=(Fe.start+Fe.count)*Ne;$!==null&&(lt=Math.max(lt,$.start*Ne),nt=Math.min(nt,($.start+$.count)*Ne)),He!==null?(lt=Math.max(lt,0),nt=Math.min(nt,He.count)):ye!=null&&(lt=Math.max(lt,0),nt=Math.min(nt,ye.count));const ut=nt-lt;if(ut<0||ut===1/0)return;Oe.setup(Q,j,Ae,q,He);let Mt,rt=ke;if(He!==null&&(Mt=Ze.get(He),rt=je,rt.setIndex(Mt)),Q.isMesh)j.wireframe===!0?(ce.setLineWidth(j.wireframeLinewidth*ue()),rt.setMode(H.LINES)):rt.setMode(H.TRIANGLES);else if(Q.isLine){let qe=j.linewidth;qe===void 0&&(qe=1),ce.setLineWidth(qe*ue()),Q.isLineSegments?rt.setMode(H.LINES):Q.isLineLoop?rt.setMode(H.LINE_LOOP):rt.setMode(H.LINE_STRIP)}else Q.isPoints?rt.setMode(H.POINTS):Q.isSprite&&rt.setMode(H.TRIANGLES);if(Q.isInstancedMesh)rt.renderInstances(lt,ut,Q.count);else if(q.isInstancedBufferGeometry){const qe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,zt=Math.min(q.instanceCount,qe);rt.renderInstances(lt,ut,zt)}else rt.render(lt,ut)},this.compile=function(b,O){function q(j,Q,$){j.transparent===!0&&j.side===li&&j.forceSinglePass===!1?(j.side=Bt,j.needsUpdate=!0,Le(j,Q,$),j.side=Pi,j.needsUpdate=!0,Le(j,Q,$),j.side=li):Le(j,Q,$)}m=ve.get(b),m.init(),x.push(m),b.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(_._useLegacyLights),b.traverse(function(j){const Q=j.material;if(Q)if(Array.isArray(Q))for(let $=0;$<Q.length;$++){const Ee=Q[$];q(Ee,b,j)}else q(Q,b,j)}),x.pop(),m=null};let ht=null;function Rt(b){ht&&ht(b)}function $e(){he.stop()}function le(){he.start()}const he=new ms;he.setAnimationLoop(Rt),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(b){ht=b,k.setAnimationLoop(b),b===null?he.stop():he.start()},k.addEventListener("sessionstart",$e),k.addEventListener("sessionend",le),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(O),O=k.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,O,N),m=ve.get(b,x.length),m.init(),x.push(m),ne.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),A.setFromProjectionMatrix(ne),R=this.localClippingEnabled,P=We.init(this.clippingPlanes,R),v=pe.get(b,p.length),v.init(),p.push(v),ge(b,O,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(I,Z),this.info.render.frame++,P===!0&&We.beginShadows();const q=m.state.shadowsArray;if(Se.render(q,b,O),P===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(v,b),m.setupLights(_._useLegacyLights),O.isArrayCamera){const j=O.cameras;for(let Q=0,$=j.length;Q<$;Q++){const Ee=j[Q];_e(v,b,Ee,Ee.viewport)}}else _e(v,b,O);N!==null&&(Ge.updateMultisampleRenderTarget(N),Ge.updateRenderTargetMipmap(N)),b.isScene===!0&&b.onAfterRender(_,b,O),Oe.resetDefaultState(),z=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ge(b,O,q,j){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||A.intersectsSprite(b)){j&&K.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ne);const $=w.update(b),Ee=b.material;Ee.visible&&v.push(b,$,Ee,q,K.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||A.intersectsObject(b))){const $=w.update(b),Ee=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),K.copy(b.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),K.copy($.boundingSphere.center)),K.applyMatrix4(b.matrixWorld).applyMatrix4(ne)),Array.isArray(Ee)){const Ae=$.groups;for(let He=0,Ne=Ae.length;He<Ne;He++){const Fe=Ae[He],ye=Ee[Fe.materialIndex];ye&&ye.visible&&v.push(b,$,ye,q,K.z,Fe)}}else Ee.visible&&v.push(b,$,Ee,q,K.z,null)}}const Q=b.children;for(let $=0,Ee=Q.length;$<Ee;$++)ge(Q[$],O,q,j)}function _e(b,O,q,j){const Q=b.opaque,$=b.transmissive,Ee=b.transparent;m.setupLightsView(q),P===!0&&We.setGlobalState(_.clippingPlanes,q),$.length>0&&Ke(Q,$,O,q),j&&ce.viewport(M.copy(j)),Q.length>0&&Ue(Q,O,q),$.length>0&&Ue($,O,q),Ee.length>0&&Ue(Ee,O,q),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Ke(b,O,q,j){const Q=re.isWebGL2;Y===null&&(Y=new Gi(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Pr:Li,minFilter:Lr,samples:Q?4:0})),_.getDrawingBufferSize(ee),Q?Y.setSize(ee.x,ee.y):Y.setSize(sa(ee.x),sa(ee.y));const $=_.getRenderTarget();_.setRenderTarget(Y),_.getClearColor(D),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear();const Ee=_.toneMapping;_.toneMapping=Ci,Ue(b,q,j),Ge.updateMultisampleRenderTarget(Y),Ge.updateRenderTargetMipmap(Y);let Ae=!1;for(let He=0,Ne=O.length;He<Ne;He++){const Fe=O[He],ye=Fe.object,lt=Fe.geometry,nt=Fe.material,ut=Fe.group;if(nt.side===li&&ye.layers.test(j.layers)){const Mt=nt.side;nt.side=Bt,nt.needsUpdate=!0,Me(ye,q,j,lt,nt,ut),nt.side=Mt,nt.needsUpdate=!0,Ae=!0}}Ae===!0&&(Ge.updateMultisampleRenderTarget(Y),Ge.updateRenderTargetMipmap(Y)),_.setRenderTarget($),_.setClearColor(D,G),_.toneMapping=Ee}function Ue(b,O,q){const j=O.isScene===!0?O.overrideMaterial:null;for(let Q=0,$=b.length;Q<$;Q++){const Ee=b[Q],Ae=Ee.object,He=Ee.geometry,Ne=j===null?Ee.material:j,Fe=Ee.group;Ae.layers.test(q.layers)&&Me(Ae,O,q,He,Ne,Fe)}}function Me(b,O,q,j,Q,$){b.onBeforeRender(_,O,q,j,Q,$),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Q.onBeforeRender(_,O,q,j,b,$),Q.transparent===!0&&Q.side===li&&Q.forceSinglePass===!1?(Q.side=Bt,Q.needsUpdate=!0,_.renderBufferDirect(q,O,j,Q,b,$),Q.side=Pi,Q.needsUpdate=!0,_.renderBufferDirect(q,O,j,Q,b,$),Q.side=li):_.renderBufferDirect(q,O,j,Q,b,$),b.onAfterRender(_,O,q,j,Q,$)}function Le(b,O,q){O.isScene!==!0&&(O=de);const j=Pe.get(b),Q=m.state.lights,$=m.state.shadowsArray,Ee=Q.state.version,Ae=J.getParameters(b,Q.state,$,O,q),He=J.getProgramCacheKey(Ae);let Ne=j.programs;j.environment=b.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(b.isMeshStandardMaterial?Je:Re).get(b.envMap||j.environment),Ne===void 0&&(b.addEventListener("dispose",Te),Ne=new Map,j.programs=Ne);let Fe=Ne.get(He);if(Fe!==void 0){if(j.currentProgram===Fe&&j.lightsStateVersion===Ee)return te(b,Ae),Fe}else Ae.uniforms=J.getUniforms(b),b.onBuild(q,Ae,_),b.onBeforeCompile(Ae,_),Fe=J.acquireProgram(Ae,He),Ne.set(He,Fe),j.uniforms=Ae.uniforms;const ye=j.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ye.clippingPlanes=We.uniform),te(b,Ae),j.needsLights=ze(b),j.lightsStateVersion=Ee,j.needsLights&&(ye.ambientLightColor.value=Q.state.ambient,ye.lightProbe.value=Q.state.probe,ye.directionalLights.value=Q.state.directional,ye.directionalLightShadows.value=Q.state.directionalShadow,ye.spotLights.value=Q.state.spot,ye.spotLightShadows.value=Q.state.spotShadow,ye.rectAreaLights.value=Q.state.rectArea,ye.ltc_1.value=Q.state.rectAreaLTC1,ye.ltc_2.value=Q.state.rectAreaLTC2,ye.pointLights.value=Q.state.point,ye.pointLightShadows.value=Q.state.pointShadow,ye.hemisphereLights.value=Q.state.hemi,ye.directionalShadowMap.value=Q.state.directionalShadowMap,ye.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ye.spotShadowMap.value=Q.state.spotShadowMap,ye.spotLightMatrix.value=Q.state.spotLightMatrix,ye.spotLightMap.value=Q.state.spotLightMap,ye.pointShadowMap.value=Q.state.pointShadowMap,ye.pointShadowMatrix.value=Q.state.pointShadowMatrix);const lt=Fe.getUniforms(),nt=ln.seqWithValue(lt.seq,ye);return j.currentProgram=Fe,j.uniformsList=nt,Fe}function te(b,O){const q=Pe.get(b);q.outputColorSpace=O.outputColorSpace,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function be(b,O,q,j,Q){O.isScene!==!0&&(O=de),Ge.resetTextureUnits();const $=O.fog,Ee=j.isMeshStandardMaterial?O.environment:null,Ae=N===null?_.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ui,He=(j.isMeshStandardMaterial?Je:Re).get(j.envMap||Ee),Ne=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Fe=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ye=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,nt=!!q.morphAttributes.color;let ut=Ci;j.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ut=_.toneMapping);const Mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,rt=Mt!==void 0?Mt.length:0,qe=Pe.get(j),zt=m.state.lights;if(P===!0&&(R===!0||b!==S)){const ct=b===S&&j.id===z;We.setState(j,b,ct)}let ft=!1;j.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==zt.state.version||qe.outputColorSpace!==Ae||Q.isInstancedMesh&&qe.instancing===!1||!Q.isInstancedMesh&&qe.instancing===!0||Q.isSkinnedMesh&&qe.skinning===!1||!Q.isSkinnedMesh&&qe.skinning===!0||Q.isInstancedMesh&&qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&qe.instancingColor===!1&&Q.instanceColor!==null||qe.envMap!==He||j.fog===!0&&qe.fog!==$||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==We.numPlanes||qe.numIntersection!==We.numIntersection)||qe.vertexAlphas!==Ne||qe.vertexTangents!==Fe||qe.morphTargets!==ye||qe.morphNormals!==lt||qe.morphColors!==nt||qe.toneMapping!==ut||re.isWebGL2===!0&&qe.morphTargetsCount!==rt)&&(ft=!0):(ft=!0,qe.__version=j.version);let Ye=qe.currentProgram;ft===!0&&(Ye=Le(j,O,Q));let mt=!1,Ct=!1,_t=!1;const ot=Ye.getUniforms(),yt=qe.uniforms;if(ce.useProgram(Ye.program)&&(mt=!0,Ct=!0,_t=!0),j.id!==z&&(z=j.id,Ct=!0),mt||S!==b){ot.setValue(H,"projectionMatrix",b.projectionMatrix),ot.setValue(H,"viewMatrix",b.matrixWorldInverse);const ct=ot.map.cameraPosition;ct!==void 0&&ct.setValue(H,K.setFromMatrixPosition(b.matrixWorld)),re.logarithmicDepthBuffer&&ot.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ot.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Ct=!0,_t=!0)}if(Q.isSkinnedMesh){ot.setOptional(H,Q,"bindMatrix"),ot.setOptional(H,Q,"bindMatrixInverse");const ct=Q.skeleton;ct&&(re.floatVertexTextures?(ct.boneTexture===null&&ct.computeBoneTexture(),ot.setValue(H,"boneTexture",ct.boneTexture,Ge),ot.setValue(H,"boneTextureSize",ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Vt=q.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0&&re.isWebGL2===!0)&&Xe.update(Q,q,Ye),(Ct||qe.receiveShadow!==Q.receiveShadow)&&(qe.receiveShadow=Q.receiveShadow,ot.setValue(H,"receiveShadow",Q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(yt.envMap.value=He,yt.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Ct&&(ot.setValue(H,"toneMappingExposure",_.toneMappingExposure),qe.needsLights&&Ie(yt,_t),$&&j.fog===!0&&me.refreshFogUniforms(yt,$),me.refreshMaterialUniforms(yt,j,F,oe,Y),ln.upload(H,qe.uniformsList,yt,Ge)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ln.upload(H,qe.uniformsList,yt,Ge),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ot.setValue(H,"center",Q.center),ot.setValue(H,"modelViewMatrix",Q.modelViewMatrix),ot.setValue(H,"normalMatrix",Q.normalMatrix),ot.setValue(H,"modelMatrix",Q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const ct=j.uniformsGroups;for(let Ht=0,pi=ct.length;Ht<pi;Ht++)if(re.isWebGL2){const oi=ct[Ht];Qe.update(oi,Ye),Qe.bind(oi,Ye)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ye}function Ie(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function ze(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,O,q){Pe.get(b.texture).__webglTexture=O,Pe.get(b.depthTexture).__webglTexture=q;const j=Pe.get(b);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){const q=Pe.get(b);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,q=0){N=b,E=O,C=q;let j=!0,Q=null,$=!1,Ee=!1;if(b){const Ae=Pe.get(b);Ae.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(H.FRAMEBUFFER,null),j=!1):Ae.__webglFramebuffer===void 0?Ge.setupRenderTarget(b):Ae.__hasExternalTextures&&Ge.rebindTextures(b,Pe.get(b.texture).__webglTexture,Pe.get(b.depthTexture).__webglTexture);const He=b.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ee=!0);const Ne=Pe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?Q=Ne[O][q]:Q=Ne[O],$=!0):re.isWebGL2&&b.samples>0&&Ge.useMultisampledRTT(b)===!1?Q=Pe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?Q=Ne[q]:Q=Ne,M.copy(b.viewport),U.copy(b.scissor),V=b.scissorTest}else M.copy(X).multiplyScalar(F).floor(),U.copy(T).multiplyScalar(F).floor(),V=B;if(ce.bindFramebuffer(H.FRAMEBUFFER,Q)&&re.drawBuffers&&j&&ce.drawBuffers(b,Q),ce.viewport(M),ce.scissor(U),ce.setScissorTest(V),$){const Ae=Pe.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ae.__webglTexture,q)}else if(Ee){const Ae=Pe.get(b.texture),He=O||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ae.__webglTexture,q||0,He)}z=-1},this.readRenderTargetPixels=function(b,O,q,j,Q,$,Ee){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){ce.bindFramebuffer(H.FRAMEBUFFER,Ae);try{const He=b.texture,Ne=He.format,Fe=He.type;if(Ne!==ti&&Ve.convert(Ne)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ye=Fe===Pr&&(fe.has("EXT_color_buffer_half_float")||re.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Fe!==Li&&Ve.convert(Fe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Ai&&(re.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-j&&q>=0&&q<=b.height-Q&&H.readPixels(O,q,j,Q,Ve.convert(Ne),Ve.convert(Fe),$)}finally{const He=N!==null?Pe.get(N).__webglFramebuffer:null;ce.bindFramebuffer(H.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(b,O,q=0){const j=Math.pow(2,-q),Q=Math.floor(O.image.width*j),$=Math.floor(O.image.height*j);Ge.setTexture2D(O,0),H.copyTexSubImage2D(H.TEXTURE_2D,q,0,0,b.x,b.y,Q,$),ce.unbindTexture()},this.copyTextureToTexture=function(b,O,q,j=0){const Q=O.image.width,$=O.image.height,Ee=Ve.convert(q.format),Ae=Ve.convert(q.type);Ge.setTexture2D(q,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment),O.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,j,b.x,b.y,Q,$,Ee,Ae,O.image.data):O.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,j,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,Ee,O.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,j,b.x,b.y,Ee,Ae,O.image),j===0&&q.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ce.unbindTexture()},this.copyTextureToTexture3D=function(b,O,q,j,Q=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const $=b.max.x-b.min.x+1,Ee=b.max.y-b.min.y+1,Ae=b.max.z-b.min.z+1,He=Ve.convert(j.format),Ne=Ve.convert(j.type);let Fe;if(j.isData3DTexture)Ge.setTexture3D(j,0),Fe=H.TEXTURE_3D;else if(j.isDataArrayTexture)Ge.setTexture2DArray(j,0),Fe=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const ye=H.getParameter(H.UNPACK_ROW_LENGTH),lt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),nt=H.getParameter(H.UNPACK_SKIP_PIXELS),ut=H.getParameter(H.UNPACK_SKIP_ROWS),Mt=H.getParameter(H.UNPACK_SKIP_IMAGES),rt=q.isCompressedTexture?q.mipmaps[0]:q.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,rt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,rt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,b.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,b.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,b.min.z),q.isDataTexture||q.isData3DTexture?H.texSubImage3D(Fe,Q,O.x,O.y,O.z,$,Ee,Ae,He,Ne,rt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Fe,Q,O.x,O.y,O.z,$,Ee,Ae,He,rt.data)):H.texSubImage3D(Fe,Q,O.x,O.y,O.z,$,Ee,Ae,He,Ne,rt),H.pixelStorei(H.UNPACK_ROW_LENGTH,ye),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,lt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,nt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ut),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Mt),Q===0&&j.generateMipmaps&&H.generateMipmap(Fe),ce.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Ge.setTextureCube(b,0):b.isData3DTexture?Ge.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ge.setTexture2DArray(b,0):Ge.setTexture2D(b,0),ce.unbindTexture()},this.resetState=function(){E=0,C=0,N=null,ce.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?Hi:ts}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hi?vt:ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Hp extends ys{}Hp.prototype.isWebGL1Renderer=!0;class Wp extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ss extends Fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fo=new ie,Bo=new ie,Oo=new At,Qn=new os,on=new gn;class zo extends Ot{constructor(e=new ni,t=new Ss){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,n=t.count;a<n;a++)Fo.fromBufferAttribute(t,a-1),Bo.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Fo.distanceTo(Bo);e.setAttribute("lineDistance",new ri(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,n=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),on.copy(i.boundingSphere),on.applyMatrix4(a),on.radius+=n,e.ray.intersectsSphere(on)===!1)return;Oo.copy(a).invert(),Qn.copy(e.ray).applyMatrix4(Oo);const s=n/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,d=new ie,h=new ie,l=new ie,u=new ie,f=this.isLineSegments?2:1,g=i.index,v=i.attributes.position;if(g!==null){const m=Math.max(0,o.start),p=Math.min(g.count,o.start+o.count);for(let x=m,_=p-1;x<_;x+=f){const y=g.getX(x),E=g.getX(x+1);if(d.fromBufferAttribute(v,y),h.fromBufferAttribute(v,E),Qn.distanceSqToSegment(d,h,u,l)>c)continue;u.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(u);C<e.near||C>e.far||t.push({distance:C,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),p=Math.min(v.count,o.start+o.count);for(let x=m,_=p-1;x<_;x+=f){if(d.fromBufferAttribute(v,x),h.fromBufferAttribute(v,x+1),Qn.distanceSqToSegment(d,h,u,l)>c)continue;u.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(u);y<e.near||y>e.far||t.push({distance:y,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=i.length;a<n;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}class fa extends ni{constructor(e=1,t=32,i=16,a=0,n=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:n,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+s,Math.PI);let d=0;const h=[],l=new ie,u=new ie,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const x=[],_=p/i;let y=0;p===0&&o===0?y=.5/t:p===i&&c===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const C=E/t;l.x=-e*Math.cos(a+C*n)*Math.sin(o+_*s),l.y=e*Math.cos(o+_*s),l.z=e*Math.sin(a+C*n)*Math.sin(o+_*s),g.push(l.x,l.y,l.z),u.copy(l).normalize(),v.push(u.x,u.y,u.z),m.push(C+y,1-_),x.push(d++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const _=h[p][x+1],y=h[p][x],E=h[p+1][x],C=h[p+1][x+1];(p!==0||o>0)&&f.push(_,y,C),(p!==i-1||c<Math.PI)&&f.push(y,E,C)}this.setIndex(f),this.setAttribute("position",new ri(g,3)),this.setAttribute("normal",new ri(v,3)),this.setAttribute("uv",new ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ua);function sn(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ms={exports:{}};(function(r,e){(function(t){r.exports=t()})(function(){return function t(i,a,n){function o(d,h){if(!a[d]){if(!i[d]){var l=typeof sn=="function"&&sn;if(!h&&l)return l(d,!0);if(s)return s(d,!0);throw new Error("Cannot find module '"+d+"'")}var u=a[d]={exports:{}};i[d][0].call(u.exports,function(f){var g=i[d][1][f];return o(g||f)},u,u.exports,t,i,a,n)}return a[d].exports}for(var s=typeof sn=="function"&&sn,c=0;c<n.length;c++)o(n[c]);return o}({1:[function(t,i,a){i.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(t,i,a){i.exports={version:t("../package.json").version,AABB:t("./collision/AABB"),ArrayCollisionMatrix:t("./collision/ArrayCollisionMatrix"),Body:t("./objects/Body"),Box:t("./shapes/Box"),Broadphase:t("./collision/Broadphase"),Constraint:t("./constraints/Constraint"),ContactEquation:t("./equations/ContactEquation"),Narrowphase:t("./world/Narrowphase"),ConeTwistConstraint:t("./constraints/ConeTwistConstraint"),ContactMaterial:t("./material/ContactMaterial"),ConvexPolyhedron:t("./shapes/ConvexPolyhedron"),Cylinder:t("./shapes/Cylinder"),DistanceConstraint:t("./constraints/DistanceConstraint"),Equation:t("./equations/Equation"),EventTarget:t("./utils/EventTarget"),FrictionEquation:t("./equations/FrictionEquation"),GSSolver:t("./solver/GSSolver"),GridBroadphase:t("./collision/GridBroadphase"),Heightfield:t("./shapes/Heightfield"),HingeConstraint:t("./constraints/HingeConstraint"),LockConstraint:t("./constraints/LockConstraint"),Mat3:t("./math/Mat3"),Material:t("./material/Material"),NaiveBroadphase:t("./collision/NaiveBroadphase"),ObjectCollisionMatrix:t("./collision/ObjectCollisionMatrix"),Pool:t("./utils/Pool"),Particle:t("./shapes/Particle"),Plane:t("./shapes/Plane"),PointToPointConstraint:t("./constraints/PointToPointConstraint"),Quaternion:t("./math/Quaternion"),Ray:t("./collision/Ray"),RaycastVehicle:t("./objects/RaycastVehicle"),RaycastResult:t("./collision/RaycastResult"),RigidVehicle:t("./objects/RigidVehicle"),RotationalEquation:t("./equations/RotationalEquation"),RotationalMotorEquation:t("./equations/RotationalMotorEquation"),SAPBroadphase:t("./collision/SAPBroadphase"),SPHSystem:t("./objects/SPHSystem"),Shape:t("./shapes/Shape"),Solver:t("./solver/Solver"),Sphere:t("./shapes/Sphere"),SplitSolver:t("./solver/SplitSolver"),Spring:t("./objects/Spring"),Trimesh:t("./shapes/Trimesh"),Vec3:t("./math/Vec3"),Vec3Pool:t("./utils/Vec3Pool"),World:t("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(t,i,a){var n=t("../math/Vec3");t("../utils/Utils"),i.exports=o;function o(d){d=d||{},this.lowerBound=new n,d.lowerBound&&this.lowerBound.copy(d.lowerBound),this.upperBound=new n,d.upperBound&&this.upperBound.copy(d.upperBound)}var s=new n;o.prototype.setFromPoints=function(d,h,l,u){var f=this.lowerBound,g=this.upperBound,v=l;f.copy(d[0]),v&&v.vmult(f,f),g.copy(f);for(var m=1;m<d.length;m++){var p=d[m];v&&(v.vmult(p,s),p=s),p.x>g.x&&(g.x=p.x),p.x<f.x&&(f.x=p.x),p.y>g.y&&(g.y=p.y),p.y<f.y&&(f.y=p.y),p.z>g.z&&(g.z=p.z),p.z<f.z&&(f.z=p.z)}return h&&(h.vadd(f,f),h.vadd(g,g)),u&&(f.x-=u,f.y-=u,f.z-=u,g.x+=u,g.y+=u,g.z+=u),this},o.prototype.copy=function(d){return this.lowerBound.copy(d.lowerBound),this.upperBound.copy(d.upperBound),this},o.prototype.clone=function(){return new o().copy(this)},o.prototype.extend=function(d){var h=d.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var l=d.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var h=d.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var l=d.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var h=d.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var l=d.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},o.prototype.overlaps=function(d){var h=this.lowerBound,l=this.upperBound,u=d.lowerBound,f=d.upperBound;return(u.x<=l.x&&l.x<=f.x||h.x<=f.x&&f.x<=l.x)&&(u.y<=l.y&&l.y<=f.y||h.y<=f.y&&f.y<=l.y)&&(u.z<=l.z&&l.z<=f.z||h.z<=f.z&&f.z<=l.z)},o.prototype.contains=function(d){var h=this.lowerBound,l=this.upperBound,u=d.lowerBound,f=d.upperBound;return h.x<=u.x&&l.x>=f.x&&h.y<=u.y&&l.y>=f.y&&h.z<=u.z&&l.z>=f.z},o.prototype.getCorners=function(d,h,l,u,f,g,v,m){var p=this.lowerBound,x=this.upperBound;d.copy(p),h.set(x.x,p.y,p.z),l.set(x.x,x.y,p.z),u.set(p.x,x.y,x.z),f.set(x.x,p.y,p.z),g.set(p.x,x.y,p.z),v.set(p.x,p.y,x.z),m.copy(x)};var c=[new n,new n,new n,new n,new n,new n,new n,new n];o.prototype.toLocalFrame=function(d,h){var l=c,u=l[0],f=l[1],g=l[2],v=l[3],m=l[4],p=l[5],x=l[6],_=l[7];this.getCorners(u,f,g,v,m,p,x,_);for(var y=0;y!==8;y++){var E=l[y];d.pointToLocal(E,E)}return h.setFromPoints(l)},o.prototype.toWorldFrame=function(d,h){var l=c,u=l[0],f=l[1],g=l[2],v=l[3],m=l[4],p=l[5],x=l[6],_=l[7];this.getCorners(u,f,g,v,m,p,x,_);for(var y=0;y!==8;y++){var E=l[y];d.pointToWorld(E,E)}return h.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(t,i,a){i.exports=n;function n(){this.matrix=[]}n.prototype.get=function(o,s){if(o=o.index,s=s.index,s>o){var c=s;s=o,o=c}return this.matrix[(o*(o+1)>>1)+s-1]},n.prototype.set=function(o,s,c){if(o=o.index,s=s.index,s>o){var d=s;s=o,o=d}this.matrix[(o*(o+1)>>1)+s-1]=c?1:0},n.prototype.reset=function(){for(var o=0,s=this.matrix.length;o!==s;o++)this.matrix[o]=0},n.prototype.setNumObjects=function(o){this.matrix.length=o*(o-1)>>1}},{}],5:[function(t,i,a){var n=t("../objects/Body"),o=t("../math/Vec3"),s=t("../math/Quaternion");t("../shapes/Shape"),t("../shapes/Plane"),i.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(v,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var d=n.STATIC|n.KINEMATIC;c.prototype.needBroadphaseCollision=function(v,m){return!(!(v.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&v.collisionFilterMask)||(v.type&d||v.sleepState===n.SLEEPING)&&(m.type&d||m.sleepState===n.SLEEPING))},c.prototype.intersectionTest=function(v,m,p,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(v,m,p,x):this.doBoundingSphereBroadphase(v,m,p,x)};var h=new o;new o,new s,new o,c.prototype.doBoundingSphereBroadphase=function(v,m,p,x){var _=h;m.position.vsub(v.position,_);var y=Math.pow(v.boundingRadius+m.boundingRadius,2),E=_.norm2();E<y&&(p.push(v),x.push(m))},c.prototype.doBoundingBoxBroadphase=function(v,m,p,x){v.aabbNeedsUpdate&&v.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),v.aabb.overlaps(m.aabb)&&(p.push(v),x.push(m))};var l={keys:[]},u=[],f=[];c.prototype.makePairsUnique=function(v,m){for(var p=l,x=u,_=f,y=v.length,E=0;E!==y;E++)x[E]=v[E],_[E]=m[E];v.length=0,m.length=0;for(var E=0;E!==y;E++){var C=x[E].id,N=_[E].id,z=C<N?C+","+N:N+","+C;p[z]=E,p.keys.push(z)}for(var E=0;E!==p.keys.length;E++){var z=p.keys.pop(),S=p[z];v.push(x[S]),m.push(_[S]),delete p[z]}},c.prototype.setWorld=function(v){};var g=new o;c.boundingSphereCheck=function(v,m){var p=g;return v.position.vsub(m.position,p),Math.pow(v.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},c.prototype.aabbQuery=function(v,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(t,i,a){i.exports=c;var n=t("./Broadphase"),o=t("../math/Vec3"),s=t("../shapes/Shape");function c(h,l,u,f,g){n.apply(this),this.nx=u||10,this.ny=f||10,this.nz=g||10,this.aabbMin=h||new o(100,100,100),this.aabbMax=l||new o(-100,-100,-100);var v=this.nx*this.ny*this.nz;if(v<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=v,this.binLengths.length=v;for(var m=0;m<v;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new n,c.prototype.constructor=c;var d=new o;new o,c.prototype.collisionPairs=function(h,l,u){var f=h.numObjects(),g=h.bodies,ne=this.aabbMax,Y=this.aabbMin,v=this.nx,m=this.ny,p=this.nz,x=m*p,_=p,y=1,E=ne.x,C=ne.y,N=ne.z,z=Y.x,S=Y.y,M=Y.z,U=v/(E-z),V=m/(C-S),D=p/(N-M),G=(E-z)/v,W=(C-S)/m,oe=(N-M)/p,F=Math.sqrt(G*G+W*W+oe*oe)*.5,I=s.types,Z=I.SPHERE,X=I.PLANE;I.BOX,I.COMPOUND,I.CONVEXPOLYHEDRON;for(var T=this.bins,B=this.binLengths,A=this.bins.length,P=0;P!==A;P++)B[P]=0;var R=Math.ceil,Y=Math.min,ne=Math.max;function ee(Se,se,Xe,ke,je,Ve,Oe){var Qe=(Se-z)*U|0,tt=(se-S)*V|0,k=(Xe-M)*D|0,Ce=R((ke-z)*U),ae=R((je-S)*V),xe=R((Ve-M)*D);Qe<0?Qe=0:Qe>=v&&(Qe=v-1),tt<0?tt=0:tt>=m&&(tt=m-1),k<0?k=0:k>=p&&(k=p-1),Ce<0?Ce=0:Ce>=v&&(Ce=v-1),ae<0?ae=0:ae>=m&&(ae=m-1),xe<0?xe=0:xe>=p&&(xe=p-1),Qe*=x,tt*=_,k*=y,Ce*=x,ae*=_,xe*=y;for(var Te=Qe;Te<=Ce;Te+=x)for(var at=tt;at<=ae;at+=_)for(var st=k;st<=xe;st+=y){var ht=Te+at+st;T[ht][B[ht]++]=Oe}}for(var P=0;P!==f;P++){var K=g[P],de=K.shape;switch(de.type){case Z:var ue=K.position.x,H=K.position.y,we=K.position.z,fe=de.radius;ee(ue-fe,H-fe,we-fe,ue+fe,H+fe,we+fe,K);break;case X:de.worldNormalNeedsUpdate&&de.computeWorldNormal(K.quaternion);var re=de.worldNormal,ce=z+G*.5-K.position.x,De=S+W*.5-K.position.y,Pe=M+oe*.5-K.position.z,Ge=d;Ge.set(ce,De,Pe);for(var Re=0,Je=0;Re!==v;Re++,Je+=x,Ge.y=De,Ge.x+=G)for(var Ze=0,L=0;Ze!==m;Ze++,L+=_,Ge.z=Pe,Ge.y+=W)for(var w=0,J=0;w!==p;w++,J+=y,Ge.z+=oe)if(Ge.dot(re)<F){var me=Je+L+J;T[me][B[me]++]=K}break;default:K.aabbNeedsUpdate&&K.computeAABB(),ee(K.aabb.lowerBound.x,K.aabb.lowerBound.y,K.aabb.lowerBound.z,K.aabb.upperBound.x,K.aabb.upperBound.y,K.aabb.upperBound.z,K);break}}for(var P=0;P!==A;P++){var pe=B[P];if(pe>1)for(var ve=T[P],Re=0;Re!==pe;Re++)for(var K=ve[Re],Ze=0;Ze!==Re;Ze++){var We=ve[Ze];this.needBroadphaseCollision(K,We)&&this.intersectionTest(K,We,l,u)}}this.makePairsUnique(l,u)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(t,i,a){i.exports=s;var n=t("./Broadphase"),o=t("./AABB");function s(){n.apply(this)}s.prototype=new n,s.prototype.constructor=s,s.prototype.collisionPairs=function(c,d,h){var l=c.bodies,u=l.length,f,g,v,m;for(f=0;f!==u;f++)for(g=0;g!==f;g++)v=l[f],m=l[g],this.needBroadphaseCollision(v,m)&&this.intersectionTest(v,m,d,h)},new o,s.prototype.aabbQuery=function(c,d,h){h=h||[];for(var l=0;l<c.bodies.length;l++){var u=c.bodies[l];u.aabbNeedsUpdate&&u.computeAABB(),u.aabb.overlaps(d)&&h.push(u)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(t,i,a){i.exports=n;function n(){this.matrix={}}n.prototype.get=function(o,s){if(o=o.id,s=s.id,s>o){var c=s;s=o,o=c}return o+"-"+s in this.matrix},n.prototype.set=function(o,s,c){if(o=o.id,s=s.id,s>o){var d=s;s=o,o=d}c?this.matrix[o+"-"+s]=!0:delete this.matrix[o+"-"+s]},n.prototype.reset=function(){this.matrix={}},n.prototype.setNumObjects=function(o){}},{}],9:[function(t,i,a){i.exports=l;var n=t("../math/Vec3"),o=t("../math/Quaternion"),s=t("../math/Transform");t("../shapes/ConvexPolyhedron"),t("../shapes/Box");var c=t("../collision/RaycastResult"),d=t("../shapes/Shape"),h=t("../collision/AABB");function l(A,P){this.from=A?A.clone():new n,this.to=P?P.clone():new n,this._direction=new n,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(R){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var u=new h,f=[];l.prototype.intersectWorld=function(A,P){return this.mode=P.mode||l.ANY,this.result=P.result||new c,this.skipBackfaces=!!P.skipBackfaces,this.collisionFilterMask=typeof P.collisionFilterMask<"u"?P.collisionFilterMask:-1,this.collisionFilterGroup=typeof P.collisionFilterGroup<"u"?P.collisionFilterGroup:-1,P.from&&this.from.copy(P.from),P.to&&this.to.copy(P.to),this.callback=P.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(u),f.length=0,A.broadphase.aabbQuery(A,u,f),this.intersectBodies(f),this.hasHit};var g=new n,v=new n;l.pointInTriangle=m;function m(A,P,R,Y){Y.vsub(P,X),R.vsub(P,g),A.vsub(P,v);var ne=X.dot(X),ee=X.dot(g),K=X.dot(v),de=g.dot(g),ue=g.dot(v),H,we;return(H=de*K-ee*ue)>=0&&(we=ne*ue-ee*K)>=0&&H+we<ne*de-ee*ee}var p=new n,x=new o;l.prototype.intersectBody=function(A,P){P&&(this.result=P,this._updateDirection());var R=this.checkCollisionResponse;if(!(R&&!A.collisionResponse)&&!(!(this.collisionFilterGroup&A.collisionFilterMask)||!(A.collisionFilterGroup&this.collisionFilterMask)))for(var Y=p,ne=x,ee=0,K=A.shapes.length;ee<K;ee++){var de=A.shapes[ee];if(!(R&&!de.collisionResponse)&&(A.quaternion.mult(A.shapeOrientations[ee],ne),A.quaternion.vmult(A.shapeOffsets[ee],Y),Y.vadd(A.position,Y),this.intersectShape(de,ne,Y,A),this.result._shouldStop))break}},l.prototype.intersectBodies=function(A,P){P&&(this.result=P,this._updateDirection());for(var R=0,Y=A.length;!this.result._shouldStop&&R<Y;R++)this.intersectBody(A[R])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(A,P,R,Y){var ne=this.from,ee=B(ne,this._direction,R);if(!(ee>A.boundingSphereRadius)){var K=this[A.type];K&&K.call(this,A,P,R,Y)}},new n,new n;var _=new n,y=new n,E=new n,C=new n;new n,new c,l.prototype.intersectBox=function(A,P,R,Y){return this.intersectConvex(A.convexPolyhedronRepresentation,P,R,Y)},l.prototype[d.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(A,P,R,Y){var ne=this.from,ee=this.to,K=this._direction,de=new n(0,0,1);P.vmult(de,de);var ue=new n;ne.vsub(R,ue);var H=ue.dot(de);ee.vsub(R,ue);var we=ue.dot(de);if(!(H*we>0)&&!(ne.distanceTo(ee)<H)){var fe=de.dot(K);if(!(Math.abs(fe)<this.precision)){var re=new n,ce=new n,De=new n;ne.vsub(R,re);var Pe=-de.dot(re)/fe;K.scale(Pe,ce),ne.vadd(ce,De),this.reportIntersection(de,De,A,Y,-1)}}},l.prototype[d.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(A){var P=this.to,R=this.from;A.lowerBound.x=Math.min(P.x,R.x),A.lowerBound.y=Math.min(P.y,R.y),A.lowerBound.z=Math.min(P.z,R.z),A.upperBound.x=Math.max(P.x,R.x),A.upperBound.y=Math.max(P.y,R.y),A.upperBound.z=Math.max(P.z,R.z)};var N={faceList:[0]};l.prototype.intersectHeightfield=function(A,P,R,Y){A.data,A.elementSize;var ne=new n,ee=new l(this.from,this.to);s.pointToLocalFrame(R,P,ee.from,ee.from),s.pointToLocalFrame(R,P,ee.to,ee.to);var K=[],de=null,ue=null,H=null,we=null,fe=A.getIndexOfPosition(ee.from.x,ee.from.y,K,!1);if(fe&&(de=K[0],ue=K[1],H=K[0],we=K[1]),fe=A.getIndexOfPosition(ee.to.x,ee.to.y,K,!1),fe&&((de===null||K[0]<de)&&(de=K[0]),(H===null||K[0]>H)&&(H=K[0]),(ue===null||K[1]<ue)&&(ue=K[1]),(we===null||K[1]>we)&&(we=K[1])),de!==null){var re=[];A.getRectMinMax(de,ue,H,we,re),re[0],re[1];for(var ce=de;ce<=H;ce++)for(var De=ue;De<=we;De++){if(this.result._shouldStop||(A.getConvexTrianglePillar(ce,De,!1),s.pointToWorldFrame(R,P,A.pillarOffset,ne),this.intersectConvex(A.pillarConvex,P,ne,Y,N),this.result._shouldStop))return;A.getConvexTrianglePillar(ce,De,!0),s.pointToWorldFrame(R,P,A.pillarOffset,ne),this.intersectConvex(A.pillarConvex,P,ne,Y,N)}}},l.prototype[d.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var z=new n,S=new n;l.prototype.intersectSphere=function(A,P,R,Y){var ne=this.from,ee=this.to,K=A.radius,de=Math.pow(ee.x-ne.x,2)+Math.pow(ee.y-ne.y,2)+Math.pow(ee.z-ne.z,2),ue=2*((ee.x-ne.x)*(ne.x-R.x)+(ee.y-ne.y)*(ne.y-R.y)+(ee.z-ne.z)*(ne.z-R.z)),H=Math.pow(ne.x-R.x,2)+Math.pow(ne.y-R.y,2)+Math.pow(ne.z-R.z,2)-Math.pow(K,2),we=Math.pow(ue,2)-4*de*H,fe=z,re=S;if(!(we<0))if(we===0)ne.lerp(ee,we,fe),fe.vsub(R,re),re.normalize(),this.reportIntersection(re,fe,A,Y,-1);else{var ce=(-ue-Math.sqrt(we))/(2*de),De=(-ue+Math.sqrt(we))/(2*de);if(ce>=0&&ce<=1&&(ne.lerp(ee,ce,fe),fe.vsub(R,re),re.normalize(),this.reportIntersection(re,fe,A,Y,-1)),this.result._shouldStop)return;De>=0&&De<=1&&(ne.lerp(ee,De,fe),fe.vsub(R,re),re.normalize(),this.reportIntersection(re,fe,A,Y,-1))}},l.prototype[d.types.SPHERE]=l.prototype.intersectSphere;var M=new n;new n,new n;var U=new n;l.prototype.intersectConvex=function(A,P,R,Y,ne){for(var ee=M,K=U,de=ne&&ne.faceList||null,ue=A.faces,H=A.vertices,we=A.faceNormals,fe=this._direction,re=this.from,ce=this.to,De=re.distanceTo(ce),Pe=de?de.length:ue.length,Ge=this.result,Re=0;!Ge._shouldStop&&Re<Pe;Re++){var Je=de?de[Re]:Re,Ze=ue[Je],L=we[Je],w=P,J=R;K.copy(H[Ze[0]]),w.vmult(K,K),K.vadd(J,K),K.vsub(re,K),w.vmult(L,ee);var me=fe.dot(ee);if(!(Math.abs(me)<this.precision)){var pe=ee.dot(K)/me;if(!(pe<0)){fe.mult(pe,_),_.vadd(re,_),y.copy(H[Ze[0]]),w.vmult(y,y),J.vadd(y,y);for(var ve=1;!Ge._shouldStop&&ve<Ze.length-1;ve++){E.copy(H[Ze[ve]]),C.copy(H[Ze[ve+1]]),w.vmult(E,E),w.vmult(C,C),J.vadd(E,E),J.vadd(C,C);var We=_.distanceTo(re);!(m(_,y,E,C)||m(_,E,y,C))||We>De||this.reportIntersection(ee,_,A,Y,Je)}}}}},l.prototype[d.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var V=new n,D=new n,G=new n,W=new n,oe=new n,F=new n;new h;var I=[],Z=new s;l.prototype.intersectTrimesh=function(A,P,R,Y,ne){var ee=V,K=I,de=Z,ue=U,H=D,we=G,fe=W,re=F,ce=oe;ne&&ne.faceList;var De=A.indices;A.vertices,A.faceNormals;var Pe=this.from,Ge=this.to,Re=this._direction;de.position.copy(R),de.quaternion.copy(P),s.vectorToLocalFrame(R,P,Re,H),s.pointToLocalFrame(R,P,Pe,we),s.pointToLocalFrame(R,P,Ge,fe);var Je=we.distanceSquared(fe);A.tree.rayQuery(this,de,K);for(var Ze=0,L=K.length;!this.result._shouldStop&&Ze!==L;Ze++){var w=K[Ze];A.getNormal(w,ee),A.getVertex(De[w*3],y),y.vsub(we,ue);var J=H.dot(ee),me=ee.dot(ue)/J;if(!(me<0)){H.scale(me,_),_.vadd(we,_),A.getVertex(De[w*3+1],E),A.getVertex(De[w*3+2],C);var pe=_.distanceSquared(we);!(m(_,E,y,C)||m(_,y,E,C))||pe>Je||(s.vectorToWorldFrame(P,ee,ce),s.pointToWorldFrame(R,P,_,re),this.reportIntersection(ce,re,A,Y,w))}}K.length=0},l.prototype[d.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(A,P,R,Y,ne){var ee=this.from,K=this.to,de=ee.distanceTo(P),ue=this.result;if(!(this.skipBackfaces&&A.dot(this._direction)>0))switch(ue.hitFaceIndex=typeof ne<"u"?ne:-1,this.mode){case l.ALL:this.hasHit=!0,ue.set(ee,K,A,P,R,Y,de),ue.hasHit=!0,this.callback(ue);break;case l.CLOSEST:(de<ue.distance||!ue.hasHit)&&(this.hasHit=!0,ue.hasHit=!0,ue.set(ee,K,A,P,R,Y,de));break;case l.ANY:this.hasHit=!0,ue.hasHit=!0,ue.set(ee,K,A,P,R,Y,de),ue._shouldStop=!0;break}};var X=new n,T=new n;function B(A,P,R){R.vsub(A,X);var Y=X.dot(P);P.mult(Y,T),T.vadd(A,T);var ne=R.distanceTo(T);return ne}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(t,i,a){var n=t("../math/Vec3");i.exports=o;function o(){this.rayFromWorld=new n,this.rayToWorld=new n,this.hitNormalWorld=new n,this.hitPointWorld=new n,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}o.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},o.prototype.abort=function(){this._shouldStop=!0},o.prototype.set=function(s,c,d,h,l,u,f){this.rayFromWorld.copy(s),this.rayToWorld.copy(c),this.hitNormalWorld.copy(d),this.hitPointWorld.copy(h),this.shape=l,this.body=u,this.distance=f}},{"../math/Vec3":30}],11:[function(t,i,a){t("../shapes/Shape");var n=t("../collision/Broadphase");i.exports=o;function o(s){n.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(d){c.push(d.body)},this._removeBodyHandler=function(d){var h=c.indexOf(d.body);h!==-1&&c.splice(h,1)},s&&this.setWorld(s)}o.prototype=new n,o.prototype.setWorld=function(s){this.axisList.length=0;for(var c=0;c<s.bodies.length;c++)this.axisList.push(s.bodies[c]);s.removeEventListener("addBody",this._addBodyHandler),s.removeEventListener("removeBody",this._removeBodyHandler),s.addEventListener("addBody",this._addBodyHandler),s.addEventListener("removeBody",this._removeBodyHandler),this.world=s,this.dirty=!0},o.insertionSortX=function(s){for(var c=1,d=s.length;c<d;c++){for(var h=s[c],l=c-1;l>=0&&!(s[l].aabb.lowerBound.x<=h.aabb.lowerBound.x);l--)s[l+1]=s[l];s[l+1]=h}return s},o.insertionSortY=function(s){for(var c=1,d=s.length;c<d;c++){for(var h=s[c],l=c-1;l>=0&&!(s[l].aabb.lowerBound.y<=h.aabb.lowerBound.y);l--)s[l+1]=s[l];s[l+1]=h}return s},o.insertionSortZ=function(s){for(var c=1,d=s.length;c<d;c++){for(var h=s[c],l=c-1;l>=0&&!(s[l].aabb.lowerBound.z<=h.aabb.lowerBound.z);l--)s[l+1]=s[l];s[l+1]=h}return s},o.prototype.collisionPairs=function(s,c,d){var h=this.axisList,l=h.length,u=this.axisIndex,f,g;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==l;f++){var v=h[f];for(g=f+1;g<l;g++){var m=h[g];if(this.needBroadphaseCollision(v,m)){if(!o.checkBounds(v,m,u))break;this.intersectionTest(v,m,c,d)}}}},o.prototype.sortList=function(){for(var s=this.axisList,c=this.axisIndex,d=s.length,h=0;h!==d;h++){var l=s[h];l.aabbNeedsUpdate&&l.computeAABB()}c===0?o.insertionSortX(s):c===1?o.insertionSortY(s):c===2&&o.insertionSortZ(s)},o.checkBounds=function(s,c,d){var h,l;d===0?(h=s.position.x,l=c.position.x):d===1?(h=s.position.y,l=c.position.y):d===2&&(h=s.position.z,l=c.position.z);var u=s.boundingRadius,f=c.boundingRadius,g=h+u,v=l-f;return v<g},o.prototype.autoDetectAxis=function(){for(var s=0,c=0,d=0,h=0,l=0,u=0,f=this.axisList,g=f.length,v=1/g,m=0;m!==g;m++){var p=f[m],x=p.position.x;s+=x,c+=x*x;var _=p.position.y;d+=_,h+=_*_;var y=p.position.z;l+=y,u+=y*y}var E=c-s*s*v,C=h-d*d*v,N=u-l*l*v;E>C?E>N?this.axisIndex=0:this.axisIndex=2:C>N?this.axisIndex=1:this.axisIndex=2},o.prototype.aabbQuery=function(s,c,d){d=d||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,l="x";h===1&&(l="y"),h===2&&(l="z");var u=this.axisList;c.lowerBound[l],c.upperBound[l];for(var f=0;f<u.length;f++){var g=u[f];g.aabbNeedsUpdate&&g.computeAABB(),g.aabb.overlaps(c)&&d.push(g)}return d}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(t,i,a){i.exports=d,t("./Constraint");var n=t("./PointToPointConstraint"),o=t("../equations/ConeEquation"),s=t("../equations/RotationalEquation");t("../equations/ContactEquation");var c=t("../math/Vec3");function d(h,l,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6,g=u.pivotA?u.pivotA.clone():new c,v=u.pivotB?u.pivotB.clone():new c;this.axisA=u.axisA?u.axisA.clone():new c,this.axisB=u.axisB?u.axisB.clone():new c,n.call(this,h,g,l,v,f),this.collideConnected=!!u.collideConnected,this.angle=typeof u.angle<"u"?u.angle:0;var m=this.coneEquation=new o(h,l,u),p=this.twistEquation=new s(h,l,u);this.twistAngle=typeof u.twistAngle<"u"?u.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}d.prototype=new n,d.constructor=d,new c,new c,d.prototype.update=function(){var h=this.bodyA,l=this.bodyB,u=this.coneEquation,f=this.twistEquation;n.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,u.axisA),l.vectorToWorldFrame(this.axisB,u.axisB),this.axisA.tangents(f.axisA,f.axisA),h.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),l.vectorToWorldFrame(f.axisB,f.axisB),u.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(t,i,a){i.exports=o;var n=t("../utils/Utils");function o(s,c,d){d=n.defaults(d,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=s,this.bodyB=c,this.id=o.idCounter++,this.collideConnected=d.collideConnected,d.wakeUpBodies&&(s&&s.wakeUp(),c&&c.wakeUp())}o.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},o.prototype.enable=function(){for(var s=this.equations,c=0;c<s.length;c++)s[c].enabled=!0},o.prototype.disable=function(){for(var s=this.equations,c=0;c<s.length;c++)s[c].enabled=!1},o.idCounter=0},{"../utils/Utils":53}],14:[function(t,i,a){i.exports=s;var n=t("./Constraint"),o=t("../equations/ContactEquation");function s(c,d,h,l){n.call(this,c,d),typeof h>"u"&&(h=c.position.distanceTo(d.position)),typeof l>"u"&&(l=1e6),this.distance=h;var u=this.distanceEquation=new o(c,d);this.equations.push(u),u.minForce=-l,u.maxForce=l}s.prototype=new n,s.prototype.update=function(){var c=this.bodyA,d=this.bodyB,h=this.distanceEquation,l=this.distance*.5,u=h.ni;d.position.vsub(c.position,u),u.normalize(),u.mult(l,h.ri),u.mult(-l,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(t,i,a){i.exports=d,t("./Constraint");var n=t("./PointToPointConstraint"),o=t("../equations/RotationalEquation"),s=t("../equations/RotationalMotorEquation");t("../equations/ContactEquation");var c=t("../math/Vec3");function d(u,f,g){g=g||{};var v=typeof g.maxForce<"u"?g.maxForce:1e6,m=g.pivotA?g.pivotA.clone():new c,p=g.pivotB?g.pivotB.clone():new c;n.call(this,u,m,f,p,v);var x=this.axisA=g.axisA?g.axisA.clone():new c(1,0,0);x.normalize();var _=this.axisB=g.axisB?g.axisB.clone():new c(1,0,0);_.normalize();var y=this.rotationalEquation1=new o(u,f,g),E=this.rotationalEquation2=new o(u,f,g),C=this.motorEquation=new s(u,f,v);C.enabled=!1,this.equations.push(y,E,C)}d.prototype=new n,d.constructor=d,d.prototype.enableMotor=function(){this.motorEquation.enabled=!0},d.prototype.disableMotor=function(){this.motorEquation.enabled=!1},d.prototype.setMotorSpeed=function(u){this.motorEquation.targetVelocity=u},d.prototype.setMotorMaxForce=function(u){this.motorEquation.maxForce=u,this.motorEquation.minForce=-u};var h=new c,l=new c;d.prototype.update=function(){var u=this.bodyA,f=this.bodyB,g=this.motorEquation,v=this.rotationalEquation1,m=this.rotationalEquation2,p=h,x=l,_=this.axisA,y=this.axisB;n.prototype.update.call(this),u.quaternion.vmult(_,p),f.quaternion.vmult(y,x),p.tangents(v.axisA,m.axisA),v.axisB.copy(x),m.axisB.copy(x),this.motorEquation.enabled&&(u.quaternion.vmult(this.axisA,g.axisA),f.quaternion.vmult(this.axisB,g.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(t,i,a){i.exports=c,t("./Constraint");var n=t("./PointToPointConstraint"),o=t("../equations/RotationalEquation");t("../equations/RotationalMotorEquation"),t("../equations/ContactEquation");var s=t("../math/Vec3");function c(d,h,l){l=l||{};var u=typeof l.maxForce<"u"?l.maxForce:1e6,f=new s,g=new s,v=new s;d.position.vadd(h.position,v),v.scale(.5,v),h.pointToLocalFrame(v,g),d.pointToLocalFrame(v,f),n.call(this,d,f,h,g,u);var m=this.rotationalEquation1=new o(d,h,l),p=this.rotationalEquation2=new o(d,h,l),x=this.rotationalEquation3=new o(d,h,l);this.equations.push(m,p,x)}c.prototype=new n,c.constructor=c,new s,new s,c.prototype.update=function(){var d=this.bodyA,h=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,u=this.rotationalEquation2,f=this.rotationalEquation3;n.prototype.update.call(this),d.vectorToWorldFrame(s.UNIT_X,l.axisA),h.vectorToWorldFrame(s.UNIT_Y,l.axisB),d.vectorToWorldFrame(s.UNIT_Y,u.axisA),h.vectorToWorldFrame(s.UNIT_Z,u.axisB),d.vectorToWorldFrame(s.UNIT_Z,f.axisA),h.vectorToWorldFrame(s.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(t,i,a){i.exports=c;var n=t("./Constraint"),o=t("../equations/ContactEquation"),s=t("../math/Vec3");function c(d,h,l,u,f){n.call(this,d,l),f=typeof f<"u"?f:1e6,this.pivotA=h?h.clone():new s,this.pivotB=u?u.clone():new s;var g=this.equationX=new o(d,l),v=this.equationY=new o(d,l),m=this.equationZ=new o(d,l);this.equations.push(g,v,m),g.minForce=v.minForce=m.minForce=-f,g.maxForce=v.maxForce=m.maxForce=f,g.ni.set(1,0,0),v.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new n,c.prototype.update=function(){var d=this.bodyA,h=this.bodyB,l=this.equationX,u=this.equationY,f=this.equationZ;d.quaternion.vmult(this.pivotA,l.ri),h.quaternion.vmult(this.pivotB,l.rj),u.ri.copy(l.ri),u.rj.copy(l.rj),f.ri.copy(l.ri),f.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(t,i,a){i.exports=s;var n=t("../math/Vec3");t("../math/Mat3");var o=t("./Equation");function s(h,l,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6;o.call(this,h,l,-f,f),this.axisA=u.axisA?u.axisA.clone():new n(1,0,0),this.axisB=u.axisB?u.axisB.clone():new n(0,1,0),this.angle=typeof u.angle<"u"?u.angle:0}s.prototype=new o,s.prototype.constructor=s;var c=new n,d=new n;s.prototype.computeB=function(h){var l=this.a,u=this.b,f=this.axisA,g=this.axisB,v=c,m=d,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(g,v),g.cross(f,m),p.rotational.copy(m),x.rotational.copy(v);var _=Math.cos(this.angle)-f.dot(g),y=this.computeGW(),E=this.computeGiMf(),C=-_*l-y*u-h*E;return C}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(t,i,a){i.exports=s;var n=t("./Equation"),o=t("../math/Vec3");t("../math/Mat3");function s(m,p,x){x=typeof x<"u"?x:1e6,n.call(this,m,p,0,x),this.restitution=0,this.ri=new o,this.rj=new o,this.ni=new o}s.prototype=new n,s.prototype.constructor=s;var c=new o,d=new o,h=new o;s.prototype.computeB=function(m){var p=this.a,x=this.b,_=this.bi,y=this.bj,E=this.ri,C=this.rj,N=c,z=d,S=_.velocity,M=_.angularVelocity;_.force,_.torque;var U=y.velocity,V=y.angularVelocity;y.force,y.torque;var D=h,G=this.jacobianElementA,W=this.jacobianElementB,oe=this.ni;E.cross(oe,N),C.cross(oe,z),oe.negate(G.spatial),N.negate(G.rotational),W.spatial.copy(oe),W.rotational.copy(z),D.copy(y.position),D.vadd(C,D),D.vsub(_.position,D),D.vsub(E,D);var F=oe.dot(D),I=this.restitution+1,Z=I*U.dot(oe)-I*S.dot(oe)+V.dot(z)-M.dot(N),X=this.computeGiMf(),T=-F*p-Z*x-m*X;return T};var l=new o,u=new o,f=new o,g=new o,v=new o;s.prototype.getImpactVelocityAlongNormal=function(){var m=l,p=u,x=f,_=g,y=v;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,_),this.bi.getVelocityAtWorldPoint(x,m),this.bj.getVelocityAtWorldPoint(_,p),m.vsub(p,y),this.ni.dot(y)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(t,i,a){i.exports=s;var n=t("../math/JacobianElement"),o=t("../math/Vec3");function s(v,m,p,x){this.id=s.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof x>"u"?1e6:x,this.bi=v,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new n,this.jacobianElementB=new n,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}s.prototype.constructor=s,s.id=0,s.prototype.setSpookParams=function(v,m,p){var x=m,_=v,y=p;this.a=4/(y*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(y*y*_*(1+4*x))},s.prototype.computeB=function(v,m,p){var x=this.computeGW(),_=this.computeGq(),y=this.computeGiMf();return-_*v-x*m-y*p},s.prototype.computeGq=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,_=p.position,y=x.position;return v.spatial.dot(_)+m.spatial.dot(y)};var c=new o;s.prototype.computeGW=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,_=p.velocity,y=x.velocity,E=p.angularVelocity||c,C=x.angularVelocity||c;return v.multiplyVectors(_,E)+m.multiplyVectors(y,C)},s.prototype.computeGWlambda=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,_=p.vlambda,y=x.vlambda,E=p.wlambda||c,C=x.wlambda||c;return v.multiplyVectors(_,E)+m.multiplyVectors(y,C)};var d=new o,h=new o,l=new o,u=new o;s.prototype.computeGiMf=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,_=p.force,y=p.torque,E=x.force,C=x.torque,N=p.invMassSolve,z=x.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(y,l):l.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(C,u):u.set(0,0,0),_.mult(N,d),E.mult(z,h),v.multiplyVectors(d,l)+m.multiplyVectors(h,u)};var f=new o;s.prototype.computeGiMGt=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,x=this.bj,_=p.invMassSolve,y=x.invMassSolve,E=p.invInertiaWorldSolve,C=x.invInertiaWorldSolve,N=_+y;return E&&(E.vmult(v.rotational,f),N+=f.dot(v.rotational)),C&&(C.vmult(m.rotational,f),N+=f.dot(m.rotational)),N};var g=new o;new o,new o,new o,new o,new o,s.prototype.addToWlambda=function(v){var m=this.jacobianElementA,p=this.jacobianElementB,x=this.bi,_=this.bj,y=g;m.spatial.mult(x.invMassSolve*v,y),x.vlambda.vadd(y,x.vlambda),p.spatial.mult(_.invMassSolve*v,y),_.vlambda.vadd(y,_.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(m.rotational,y),y.mult(v,y),x.wlambda.vadd(y,x.wlambda)),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(p.rotational,y),y.mult(v,y),_.wlambda.vadd(y,_.wlambda))},s.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(t,i,a){i.exports=s;var n=t("./Equation"),o=t("../math/Vec3");t("../math/Mat3");function s(h,l,u){n.call(this,h,l,-u,u),this.ri=new o,this.rj=new o,this.t=new o}s.prototype=new n,s.prototype.constructor=s;var c=new o,d=new o;s.prototype.computeB=function(h){this.a;var l=this.b;this.bi,this.bj;var u=this.ri,f=this.rj,g=c,v=d,m=this.t;u.cross(m,g),f.cross(m,v);var p=this.jacobianElementA,x=this.jacobianElementB;m.negate(p.spatial),g.negate(p.rotational),x.spatial.copy(m),x.rotational.copy(v);var _=this.computeGW(),y=this.computeGiMf(),E=-_*l-h*y;return E}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(t,i,a){i.exports=s;var n=t("../math/Vec3");t("../math/Mat3");var o=t("./Equation");function s(h,l,u){u=u||{};var f=typeof u.maxForce<"u"?u.maxForce:1e6;o.call(this,h,l,-f,f),this.axisA=u.axisA?u.axisA.clone():new n(1,0,0),this.axisB=u.axisB?u.axisB.clone():new n(0,1,0),this.maxAngle=Math.PI/2}s.prototype=new o,s.prototype.constructor=s;var c=new n,d=new n;s.prototype.computeB=function(h){var l=this.a,u=this.b,f=this.axisA,g=this.axisB,v=c,m=d,p=this.jacobianElementA,x=this.jacobianElementB;f.cross(g,v),g.cross(f,m),p.rotational.copy(m),x.rotational.copy(v);var _=Math.cos(this.maxAngle)-f.dot(g),y=this.computeGW(),E=this.computeGiMf(),C=-_*l-y*u-h*E;return C}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(t,i,a){i.exports=s;var n=t("../math/Vec3");t("../math/Mat3");var o=t("./Equation");function s(c,d,h){h=typeof h<"u"?h:1e6,o.call(this,c,d,-h,h),this.axisA=new n,this.axisB=new n,this.targetVelocity=0}s.prototype=new o,s.prototype.constructor=s,s.prototype.computeB=function(c){this.a;var d=this.b;this.bi,this.bj;var h=this.axisA,l=this.axisB,u=this.jacobianElementA,f=this.jacobianElementB;u.rotational.copy(h),l.negate(f.rotational);var g=this.computeGW()-this.targetVelocity,v=this.computeGiMf(),m=-g*d-c*v;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(t,i,a){var n=t("../utils/Utils");i.exports=o;function o(s,c,d){d=n.defaults(d,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=o.idCounter++,this.materials=[s,c],this.friction=d.friction,this.restitution=d.restitution,this.contactEquationStiffness=d.contactEquationStiffness,this.contactEquationRelaxation=d.contactEquationRelaxation,this.frictionEquationStiffness=d.frictionEquationStiffness,this.frictionEquationRelaxation=d.frictionEquationRelaxation}o.idCounter=0},{"../utils/Utils":53}],25:[function(t,i,a){i.exports=n;function n(o){var s="";o=o||{},typeof o=="string"?(s=o,o={}):typeof o=="object"&&(s=""),this.name=s,this.id=n.idCounter++,this.friction=typeof o.friction<"u"?o.friction:-1,this.restitution=typeof o.restitution<"u"?o.restitution:-1}n.idCounter=0},{}],26:[function(t,i,a){i.exports=o;var n=t("./Vec3");function o(){this.spatial=new n,this.rotational=new n}o.prototype.multiplyElement=function(s){return s.spatial.dot(this.spatial)+s.rotational.dot(this.rotational)},o.prototype.multiplyVectors=function(s,c){return s.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(t,i,a){i.exports=o;var n=t("./Vec3");function o(s){s?this.elements=s:this.elements=[0,0,0,0,0,0,0,0,0]}o.prototype.identity=function(){var s=this.elements;s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=1,s[5]=0,s[6]=0,s[7]=0,s[8]=1},o.prototype.setZero=function(){var s=this.elements;s[0]=0,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=0,s[6]=0,s[7]=0,s[8]=0},o.prototype.setTrace=function(s){var c=this.elements;c[0]=s.x,c[4]=s.y,c[8]=s.z},o.prototype.getTrace=function(c){var c=c||new n,d=this.elements;c.x=d[0],c.y=d[4],c.z=d[8]},o.prototype.vmult=function(s,c){c=c||new n;var d=this.elements,h=s.x,l=s.y,u=s.z;return c.x=d[0]*h+d[1]*l+d[2]*u,c.y=d[3]*h+d[4]*l+d[5]*u,c.z=d[6]*h+d[7]*l+d[8]*u,c},o.prototype.smult=function(s){for(var c=0;c<this.elements.length;c++)this.elements[c]*=s},o.prototype.mmult=function(s,c){for(var d=c||new o,h=0;h<3;h++)for(var l=0;l<3;l++){for(var u=0,f=0;f<3;f++)u+=s.elements[h+f*3]*this.elements[f+l*3];d.elements[h+l*3]=u}return d},o.prototype.scale=function(s,c){c=c||new o;for(var d=this.elements,h=c.elements,l=0;l!==3;l++)h[3*l+0]=s.x*d[3*l+0],h[3*l+1]=s.y*d[3*l+1],h[3*l+2]=s.z*d[3*l+2];return c},o.prototype.solve=function(s,c){c=c||new n;for(var d=3,h=4,l=[],u=0;u<d*h;u++)l.push(0);var u,f;for(u=0;u<3;u++)for(f=0;f<3;f++)l[u+h*f]=this.elements[u+3*f];l[3+4*0]=s.x,l[3+4*1]=s.y,l[3+4*2]=s.z;var g=3,v=g,m,p=4,x;do{if(u=v-g,l[u+h*u]===0){for(f=u+1;f<v;f++)if(l[u+h*f]!==0){m=p;do x=p-m,l[x+h*u]+=l[x+h*f];while(--m);break}}if(l[u+h*u]!==0)for(f=u+1;f<v;f++){var _=l[u+h*f]/l[u+h*u];m=p;do x=p-m,l[x+h*f]=x<=u?0:l[x+h*f]-l[x+h*u]*_;while(--m)}}while(--g);if(c.z=l[2*h+3]/l[2*h+2],c.y=(l[1*h+3]-l[1*h+2]*c.z)/l[1*h+1],c.x=(l[0*h+3]-l[0*h+2]*c.z-l[0*h+1]*c.y)/l[0*h+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+s.toString()+"], A=["+this.toString()+"]";return c},o.prototype.e=function(s,c,d){if(d===void 0)return this.elements[c+3*s];this.elements[c+3*s]=d},o.prototype.copy=function(s){for(var c=0;c<s.elements.length;c++)this.elements[c]=s.elements[c];return this},o.prototype.toString=function(){for(var s="",c=",",d=0;d<9;d++)s+=this.elements[d]+c;return s},o.prototype.reverse=function(s){s=s||new o;for(var c=3,d=6,h=[],l=0;l<c*d;l++)h.push(0);var l,u;for(l=0;l<3;l++)for(u=0;u<3;u++)h[l+d*u]=this.elements[l+3*u];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var f=3,g=f,v,m=d,p;do{if(l=g-f,h[l+d*l]===0){for(u=l+1;u<g;u++)if(h[l+d*u]!==0){v=m;do p=m-v,h[p+d*l]+=h[p+d*u];while(--v);break}}if(h[l+d*l]!==0)for(u=l+1;u<g;u++){var x=h[l+d*u]/h[l+d*l];v=m;do p=m-v,h[p+d*u]=p<=l?0:h[p+d*u]-h[p+d*l]*x;while(--v)}}while(--f);l=2;do{u=l-1;do{var x=h[l+d*u]/h[l+d*l];v=d;do p=d-v,h[p+d*u]=h[p+d*u]-h[p+d*l]*x;while(--v)}while(u--)}while(--l);l=2;do{var x=1/h[l+d*l];v=d;do p=d-v,h[p+d*l]=h[p+d*l]*x;while(--v)}while(l--);l=2;do{u=2;do{if(p=h[c+u+d*l],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";s.e(l,u,p)}while(u--)}while(l--);return s},o.prototype.setRotationFromQuaternion=function(s){var c=s.x,d=s.y,h=s.z,l=s.w,u=c+c,f=d+d,g=h+h,v=c*u,m=c*f,p=c*g,x=d*f,_=d*g,y=h*g,E=l*u,C=l*f,N=l*g,z=this.elements;return z[3*0+0]=1-(x+y),z[3*0+1]=m-N,z[3*0+2]=p+C,z[3*1+0]=m+N,z[3*1+1]=1-(v+y),z[3*1+2]=_-E,z[3*2+0]=p-C,z[3*2+1]=_+E,z[3*2+2]=1-(v+x),this},o.prototype.transpose=function(s){s=s||new o;for(var c=s.elements,d=this.elements,h=0;h!==3;h++)for(var l=0;l!==3;l++)c[3*h+l]=d[3*l+h];return s}},{"./Vec3":30}],28:[function(t,i,a){i.exports=o;var n=t("./Vec3");function o(u,f,g,v){this.x=u!==void 0?u:0,this.y=f!==void 0?f:0,this.z=g!==void 0?g:0,this.w=v!==void 0?v:1}o.prototype.set=function(u,f,g,v){this.x=u,this.y=f,this.z=g,this.w=v},o.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},o.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},o.prototype.setFromAxisAngle=function(u,f){var g=Math.sin(f*.5);this.x=u.x*g,this.y=u.y*g,this.z=u.z*g,this.w=Math.cos(f*.5)},o.prototype.toAxisAngle=function(u){u=u||new n,this.normalize();var f=2*Math.acos(this.w),g=Math.sqrt(1-this.w*this.w);return g<.001?(u.x=this.x,u.y=this.y,u.z=this.z):(u.x=this.x/g,u.y=this.y/g,u.z=this.z/g),[u,f]};var s=new n,c=new n;o.prototype.setFromVectors=function(u,f){if(u.isAntiparallelTo(f)){var g=s,v=c;u.tangents(g,v),this.setFromAxisAngle(g,Math.PI)}else{var m=u.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(u.norm(),2)*Math.pow(f.norm(),2))+u.dot(f),this.normalize()}};var d=new n,h=new n,l=new n;o.prototype.mult=function(u,f){f=f||new o;var g=this.w,v=d,m=h,p=l;return v.set(this.x,this.y,this.z),m.set(u.x,u.y,u.z),f.w=g*u.w-v.dot(m),v.cross(m,p),f.x=g*m.x+u.w*v.x+p.x,f.y=g*m.y+u.w*v.y+p.y,f.z=g*m.z+u.w*v.z+p.z,f},o.prototype.inverse=function(u){var f=this.x,g=this.y,v=this.z,m=this.w;u=u||new o,this.conjugate(u);var p=1/(f*f+g*g+v*v+m*m);return u.x*=p,u.y*=p,u.z*=p,u.w*=p,u},o.prototype.conjugate=function(u){return u=u||new o,u.x=-this.x,u.y=-this.y,u.z=-this.z,u.w=this.w,u},o.prototype.normalize=function(){var u=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(u=1/u,this.x*=u,this.y*=u,this.z*=u,this.w*=u)},o.prototype.normalizeFast=function(){var u=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=u,this.y*=u,this.z*=u,this.w*=u)},o.prototype.vmult=function(u,f){f=f||new n;var g=u.x,v=u.y,m=u.z,p=this.x,x=this.y,_=this.z,y=this.w,E=y*g+x*m-_*v,C=y*v+_*g-p*m,N=y*m+p*v-x*g,z=-p*g-x*v-_*m;return f.x=E*y+z*-p+C*-_-N*-x,f.y=C*y+z*-x+N*-p-E*-_,f.z=N*y+z*-_+E*-x-C*-p,f},o.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this.w=u.w,this},o.prototype.toEuler=function(u,f){f=f||"YZX";var g,v,m,p=this.x,x=this.y,_=this.z,y=this.w;switch(f){case"YZX":var E=p*x+_*y;if(E>.499&&(g=2*Math.atan2(p,y),v=Math.PI/2,m=0),E<-.499&&(g=-2*Math.atan2(p,y),v=-Math.PI/2,m=0),isNaN(g)){var C=p*p,N=x*x,z=_*_;g=Math.atan2(2*x*y-2*p*_,1-2*N-2*z),v=Math.asin(2*E),m=Math.atan2(2*p*y-2*x*_,1-2*C-2*z)}break;default:throw new Error("Euler order "+f+" not supported yet.")}u.y=g,u.z=v,u.x=m},o.prototype.setFromEuler=function(u,f,g,v){v=v||"XYZ";var m=Math.cos(u/2),p=Math.cos(f/2),x=Math.cos(g/2),_=Math.sin(u/2),y=Math.sin(f/2),E=Math.sin(g/2);return v==="XYZ"?(this.x=_*p*x+m*y*E,this.y=m*y*x-_*p*E,this.z=m*p*E+_*y*x,this.w=m*p*x-_*y*E):v==="YXZ"?(this.x=_*p*x+m*y*E,this.y=m*y*x-_*p*E,this.z=m*p*E-_*y*x,this.w=m*p*x+_*y*E):v==="ZXY"?(this.x=_*p*x-m*y*E,this.y=m*y*x+_*p*E,this.z=m*p*E+_*y*x,this.w=m*p*x-_*y*E):v==="ZYX"?(this.x=_*p*x-m*y*E,this.y=m*y*x+_*p*E,this.z=m*p*E-_*y*x,this.w=m*p*x+_*y*E):v==="YZX"?(this.x=_*p*x+m*y*E,this.y=m*y*x+_*p*E,this.z=m*p*E-_*y*x,this.w=m*p*x-_*y*E):v==="XZY"&&(this.x=_*p*x-m*y*E,this.y=m*y*x-_*p*E,this.z=m*p*E+_*y*x,this.w=m*p*x+_*y*E),this},o.prototype.clone=function(){return new o(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(t,i,a){var n=t("./Vec3"),o=t("./Quaternion");i.exports=s;function s(d){d=d||{},this.position=new n,d.position&&this.position.copy(d.position),this.quaternion=new o,d.quaternion&&this.quaternion.copy(d.quaternion)}var c=new o;s.pointToLocalFrame=function(d,h,l,f){var f=f||new n;return l.vsub(d,f),h.conjugate(c),c.vmult(f,f),f},s.prototype.pointToLocal=function(d,h){return s.pointToLocalFrame(this.position,this.quaternion,d,h)},s.pointToWorldFrame=function(d,h,l,f){var f=f||new n;return h.vmult(l,f),f.vadd(d,f),f},s.prototype.pointToWorld=function(d,h){return s.pointToWorldFrame(this.position,this.quaternion,d,h)},s.prototype.vectorToWorldFrame=function(d,l){var l=l||new n;return this.quaternion.vmult(d,l),l},s.vectorToWorldFrame=function(d,h,l){return d.vmult(h,l),l},s.vectorToLocalFrame=function(d,h,l,f){var f=f||new n;return h.w*=-1,h.vmult(l,f),h.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(t,i,a){i.exports=o;var n=t("./Mat3");function o(h,l,u){this.x=h||0,this.y=l||0,this.z=u||0}o.ZERO=new o(0,0,0),o.UNIT_X=new o(1,0,0),o.UNIT_Y=new o(0,1,0),o.UNIT_Z=new o(0,0,1),o.prototype.cross=function(h,l){var u=h.x,f=h.y,g=h.z,v=this.x,m=this.y,p=this.z;return l=l||new o,l.x=m*g-p*f,l.y=p*u-v*g,l.z=v*f-m*u,l},o.prototype.set=function(h,l,u){return this.x=h,this.y=l,this.z=u,this},o.prototype.setZero=function(){this.x=this.y=this.z=0},o.prototype.vadd=function(h,l){if(l)l.x=h.x+this.x,l.y=h.y+this.y,l.z=h.z+this.z;else return new o(this.x+h.x,this.y+h.y,this.z+h.z)},o.prototype.vsub=function(h,l){if(l)l.x=this.x-h.x,l.y=this.y-h.y,l.z=this.z-h.z;else return new o(this.x-h.x,this.y-h.y,this.z-h.z)},o.prototype.crossmat=function(){return new n([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},o.prototype.normalize=function(){var h=this.x,l=this.y,u=this.z,f=Math.sqrt(h*h+l*l+u*u);if(f>0){var g=1/f;this.x*=g,this.y*=g,this.z*=g}else this.x=0,this.y=0,this.z=0;return f},o.prototype.unit=function(h){h=h||new o;var l=this.x,u=this.y,f=this.z,g=Math.sqrt(l*l+u*u+f*f);return g>0?(g=1/g,h.x=l*g,h.y=u*g,h.z=f*g):(h.x=1,h.y=0,h.z=0),h},o.prototype.norm=function(){var h=this.x,l=this.y,u=this.z;return Math.sqrt(h*h+l*l+u*u)},o.prototype.length=o.prototype.norm,o.prototype.norm2=function(){return this.dot(this)},o.prototype.lengthSquared=o.prototype.norm2,o.prototype.distanceTo=function(h){var l=this.x,u=this.y,f=this.z,g=h.x,v=h.y,m=h.z;return Math.sqrt((g-l)*(g-l)+(v-u)*(v-u)+(m-f)*(m-f))},o.prototype.distanceSquared=function(h){var l=this.x,u=this.y,f=this.z,g=h.x,v=h.y,m=h.z;return(g-l)*(g-l)+(v-u)*(v-u)+(m-f)*(m-f)},o.prototype.mult=function(h,l){l=l||new o;var u=this.x,f=this.y,g=this.z;return l.x=h*u,l.y=h*f,l.z=h*g,l},o.prototype.scale=o.prototype.mult,o.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},o.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},o.prototype.negate=function(h){return h=h||new o,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var s=new o,c=new o;o.prototype.tangents=function(h,l){var u=this.norm();if(u>0){var f=s,g=1/u;f.set(this.x*g,this.y*g,this.z*g);var v=c;Math.abs(f.x)<.9?(v.set(1,0,0),f.cross(v,h)):(v.set(0,1,0),f.cross(v,h)),f.cross(h,l)}else h.set(1,0,0),l.set(0,1,0)},o.prototype.toString=function(){return this.x+","+this.y+","+this.z},o.prototype.toArray=function(){return[this.x,this.y,this.z]},o.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},o.prototype.lerp=function(h,l,u){var f=this.x,g=this.y,v=this.z;u.x=f+(h.x-f)*l,u.y=g+(h.y-g)*l,u.z=v+(h.z-v)*l},o.prototype.almostEquals=function(h,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-h.x)>l||Math.abs(this.y-h.y)>l||Math.abs(this.z-h.z)>l)},o.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var d=new o;o.prototype.isAntiparallelTo=function(h,l){return this.negate(d),d.almostEquals(h,l)},o.prototype.clone=function(){return new o(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(t,i,a){i.exports=l;var n=t("../utils/EventTarget");t("../shapes/Shape");var o=t("../math/Vec3"),s=t("../math/Mat3"),c=t("../math/Quaternion");t("../material/Material");var d=t("../collision/AABB"),h=t("../shapes/Box");function l(U){U=U||{},n.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new o,this.collisionFilterGroup=typeof U.collisionFilterGroup=="number"?U.collisionFilterGroup:1,this.collisionFilterMask=typeof U.collisionFilterMask=="number"?U.collisionFilterMask:1,this.collisionResponse=!0,this.position=new o,U.position&&this.position.copy(U.position),this.previousPosition=new o,this.initPosition=new o,this.velocity=new o,U.velocity&&this.velocity.copy(U.velocity),this.initVelocity=new o,this.force=new o;var V=typeof U.mass=="number"?U.mass:0;this.mass=V,this.invMass=V>0?1/V:0,this.material=U.material||null,this.linearDamping=typeof U.linearDamping=="number"?U.linearDamping:.01,this.type=V<=0?l.STATIC:l.DYNAMIC,typeof U.type==typeof l.STATIC&&(this.type=U.type),this.allowSleep=typeof U.allowSleep<"u"?U.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof U.sleepSpeedLimit<"u"?U.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof U.sleepTimeLimit<"u"?U.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new o,this.quaternion=new c,U.quaternion&&this.quaternion.copy(U.quaternion),this.initQuaternion=new c,this.angularVelocity=new o,U.angularVelocity&&this.angularVelocity.copy(U.angularVelocity),this.initAngularVelocity=new o,this.interpolatedPosition=new o,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new o,this.invInertia=new o,this.invInertiaWorld=new s,this.invMassSolve=0,this.invInertiaSolve=new o,this.invInertiaWorldSolve=new s,this.fixedRotation=typeof U.fixedRotation<"u"?U.fixedRotation:!1,this.angularDamping=typeof U.angularDamping<"u"?U.angularDamping:.01,this.aabb=new d,this.aabbNeedsUpdate=!0,this.wlambda=new o,U.shape&&this.addShape(U.shape),this.updateMassProperties()}l.prototype=new n,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var U=this.sleepState;this.sleepState=0,U===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(U){if(this.allowSleep){var V=this.sleepState,D=this.velocity.norm2()+this.angularVelocity.norm2(),G=Math.pow(this.sleepSpeedLimit,2);V===l.AWAKE&&D<G?(this.sleepState=l.SLEEPY,this.timeLastSleepy=U,this.dispatchEvent(l.sleepyEvent)):V===l.SLEEPY&&D>G?this.wakeUp():V===l.SLEEPY&&U-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(U,D){var D=D||new o;return U.vsub(this.position,D),this.quaternion.conjugate().vmult(D,D),D},l.prototype.vectorToLocalFrame=function(U,D){var D=D||new o;return this.quaternion.conjugate().vmult(U,D),D},l.prototype.pointToWorldFrame=function(U,D){var D=D||new o;return this.quaternion.vmult(U,D),D.vadd(this.position,D),D},l.prototype.vectorToWorldFrame=function(U,D){var D=D||new o;return this.quaternion.vmult(U,D),D};var u=new o,f=new c;l.prototype.addShape=function(U,V,D){var G=new o,W=new c;return V&&G.copy(V),D&&W.copy(D),this.shapes.push(U),this.shapeOffsets.push(G),this.shapeOrientations.push(W),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var U=this.shapes,V=this.shapeOffsets,D=U.length,G=0,W=0;W!==D;W++){var oe=U[W];oe.updateBoundingSphereRadius();var F=V[W].norm(),I=oe.boundingSphereRadius;F+I>G&&(G=F+I)}this.boundingRadius=G};var g=new d;l.prototype.computeAABB=function(){for(var U=this.shapes,V=this.shapeOffsets,D=this.shapeOrientations,G=U.length,W=u,oe=f,F=this.quaternion,I=this.aabb,Z=g,X=0;X!==G;X++){var T=U[X];D[X].mult(F,oe),oe.vmult(V[X],W),W.vadd(this.position,W),T.calculateWorldAABB(W,oe,Z.lowerBound,Z.upperBound),X===0?I.copy(Z):I.extend(Z)}this.aabbNeedsUpdate=!1};var v=new s,m=new s;new s,l.prototype.updateInertiaWorld=function(U){var V=this.invInertia;if(!(V.x===V.y&&V.y===V.z&&!U)){var D=v,G=m;D.setRotationFromQuaternion(this.quaternion),D.transpose(G),D.scale(V,D),D.mmult(G,this.invInertiaWorld)}};var p=new o,x=new o;l.prototype.applyForce=function(U,V){if(this.type===l.DYNAMIC){var D=p;V.vsub(this.position,D);var G=x;D.cross(U,G),this.force.vadd(U,this.force),this.torque.vadd(G,this.torque)}};var _=new o,y=new o;l.prototype.applyLocalForce=function(U,V){if(this.type===l.DYNAMIC){var D=_,G=y;this.vectorToWorldFrame(U,D),this.pointToWorldFrame(V,G),this.applyForce(D,G)}};var E=new o,C=new o,N=new o;l.prototype.applyImpulse=function(U,V){if(this.type===l.DYNAMIC){var D=E;V.vsub(this.position,D);var G=C;G.copy(U),G.mult(this.invMass,G),this.velocity.vadd(G,this.velocity);var W=N;D.cross(U,W),this.invInertiaWorld.vmult(W,W),this.angularVelocity.vadd(W,this.angularVelocity)}};var z=new o,S=new o;l.prototype.applyLocalImpulse=function(U,V){if(this.type===l.DYNAMIC){var D=z,G=S;this.vectorToWorldFrame(U,D),this.pointToWorldFrame(V,G),this.applyImpulse(D,G)}};var M=new o;l.prototype.updateMassProperties=function(){var U=M;this.invMass=this.mass>0?1/this.mass:0;var V=this.inertia,D=this.fixedRotation;this.computeAABB(),U.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(U,this.mass,V),this.invInertia.set(V.x>0&&!D?1/V.x:0,V.y>0&&!D?1/V.y:0,V.z>0&&!D?1/V.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(U,V){var D=new o;return U.vsub(this.position,D),this.angularVelocity.cross(D,V),this.velocity.vadd(V,V),V}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(t,i,a){t("./Body");var n=t("../math/Vec3"),o=t("../math/Quaternion");t("../collision/RaycastResult");var s=t("../collision/Ray"),c=t("../objects/WheelInfo");i.exports=d;function d(F){this.chassisBody=F.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof F.indexRightAxis<"u"?F.indexRightAxis:1,this.indexForwardAxis=typeof F.indexForwardAxis<"u"?F.indexForwardAxis:0,this.indexUpAxis=typeof F.indexUpAxis<"u"?F.indexUpAxis:2}new n,new n,new n;var h=new n,l=new n,u=new n;new s,d.prototype.addWheel=function(F){F=F||{};var I=new c(F),Z=this.wheelInfos.length;return this.wheelInfos.push(I),Z},d.prototype.setSteeringValue=function(F,I){var Z=this.wheelInfos[I];Z.steering=F},new n,d.prototype.applyEngineForce=function(F,I){this.wheelInfos[I].engineForce=F},d.prototype.setBrake=function(F,I){this.wheelInfos[I].brake=F},d.prototype.addToWorld=function(F){this.constraints,F.add(this.chassisBody);var I=this;this.preStepCallback=function(){I.updateVehicle(F.dt)},F.addEventListener("preStep",this.preStepCallback),this.world=F},d.prototype.getVehicleAxisWorld=function(F,I){I.set(F===0?1:0,F===1?1:0,F===2?1:0),this.chassisBody.vectorToWorldFrame(I,I)},d.prototype.updateVehicle=function(F){for(var I=this.wheelInfos,Z=I.length,X=this.chassisBody,T=0;T<Z;T++)this.updateWheelTransform(T);this.currentVehicleSpeedKmHour=3.6*X.velocity.norm();var B=new n;this.getVehicleAxisWorld(this.indexForwardAxis,B),B.dot(X.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var T=0;T<Z;T++)this.castRay(I[T]);this.updateSuspension(F);for(var A=new n,P=new n,T=0;T<Z;T++){var R=I[T],Y=R.suspensionForce;Y>R.maxSuspensionForce&&(Y=R.maxSuspensionForce),R.raycastResult.hitNormalWorld.scale(Y*F,A),R.raycastResult.hitPointWorld.vsub(X.position,P),X.applyImpulse(A,R.raycastResult.hitPointWorld)}this.updateFriction(F);var ne=new n,ee=new n,K=new n;for(T=0;T<Z;T++){var R=I[T];X.getVelocityAtWorldPoint(R.chassisConnectionPointWorld,K);var de=1;switch(this.indexUpAxis){case 1:de=-1;break}if(R.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,ee);var ue=ee.dot(R.raycastResult.hitNormalWorld);R.raycastResult.hitNormalWorld.scale(ue,ne),ee.vsub(ne,ee);var H=ee.dot(K);R.deltaRotation=de*H*F/R.radius}(R.sliding||!R.isInContact)&&R.engineForce!==0&&R.useCustomSlidingRotationalSpeed&&(R.deltaRotation=(R.engineForce>0?1:-1)*R.customSlidingRotationalSpeed*F),Math.abs(R.brake)>Math.abs(R.engineForce)&&(R.deltaRotation=0),R.rotation+=R.deltaRotation,R.deltaRotation*=.99}},d.prototype.updateSuspension=function(F){for(var I=this.chassisBody,Z=I.mass,X=this.wheelInfos,T=X.length,B=0;B<T;B++){var A=X[B];if(A.isInContact){var P,R=A.suspensionRestLength,Y=A.suspensionLength,ne=R-Y;P=A.suspensionStiffness*ne*A.clippedInvContactDotSuspension;var ee=A.suspensionRelativeVelocity,K;ee<0?K=A.dampingCompression:K=A.dampingRelaxation,P-=K*ee,A.suspensionForce=P*Z,A.suspensionForce<0&&(A.suspensionForce=0)}else A.suspensionForce=0}},d.prototype.removeFromWorld=function(F){this.constraints,F.remove(this.chassisBody),F.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new n,g=new n;d.prototype.castRay=function(F){var I=f,Z=g;this.updateWheelTransformWorld(F);var X=this.chassisBody,T=-1,B=F.suspensionRestLength+F.radius;F.directionWorld.scale(B,I);var A=F.chassisConnectionPointWorld;A.vadd(I,Z);var P=F.raycastResult;P.reset();var R=X.collisionResponse;X.collisionResponse=!1,this.world.rayTest(A,Z,P),X.collisionResponse=R;var Y=P.body;if(F.raycastResult.groundObject=0,Y){T=P.distance,F.raycastResult.hitNormalWorld=P.hitNormalWorld,F.isInContact=!0;var ne=P.distance;F.suspensionLength=ne-F.radius;var ee=F.suspensionRestLength-F.maxSuspensionTravel,K=F.suspensionRestLength+F.maxSuspensionTravel;F.suspensionLength<ee&&(F.suspensionLength=ee),F.suspensionLength>K&&(F.suspensionLength=K,F.raycastResult.reset());var de=F.raycastResult.hitNormalWorld.dot(F.directionWorld),ue=new n;X.getVelocityAtWorldPoint(F.raycastResult.hitPointWorld,ue);var H=F.raycastResult.hitNormalWorld.dot(ue);if(de>=-.1)F.suspensionRelativeVelocity=0,F.clippedInvContactDotSuspension=1/.1;else{var we=-1/de;F.suspensionRelativeVelocity=H*we,F.clippedInvContactDotSuspension=we}}else F.suspensionLength=F.suspensionRestLength+0*F.maxSuspensionTravel,F.suspensionRelativeVelocity=0,F.directionWorld.scale(-1,F.raycastResult.hitNormalWorld),F.clippedInvContactDotSuspension=1;return T},d.prototype.updateWheelTransformWorld=function(F){F.isInContact=!1;var I=this.chassisBody;I.pointToWorldFrame(F.chassisConnectionPointLocal,F.chassisConnectionPointWorld),I.vectorToWorldFrame(F.directionLocal,F.directionWorld),I.vectorToWorldFrame(F.axleLocal,F.axleWorld)},d.prototype.updateWheelTransform=function(F){var I=h,Z=l,X=u,T=this.wheelInfos[F];this.updateWheelTransformWorld(T),T.directionLocal.scale(-1,I),Z.copy(T.axleLocal),I.cross(Z,X),X.normalize(),Z.normalize();var B=T.steering,A=new o;A.setFromAxisAngle(I,B);var P=new o;P.setFromAxisAngle(Z,T.rotation);var R=T.worldTransform.quaternion;this.chassisBody.quaternion.mult(A,R),R.mult(P,R),R.normalize();var Y=T.worldTransform.position;Y.copy(T.directionWorld),Y.scale(T.suspensionLength,Y),Y.vadd(T.chassisConnectionPointWorld,Y)};var v=[new n(1,0,0),new n(0,1,0),new n(0,0,1)];d.prototype.getWheelTransformWorld=function(F){return this.wheelInfos[F].worldTransform};var m=new n,p=[],x=[],_=1;d.prototype.updateFriction=function(F){for(var I=m,Z=this.wheelInfos,X=Z.length,T=this.chassisBody,B=x,A=p,P=0;P<X;P++){var R=Z[P],Y=R.raycastResult.body;R.sideImpulse=0,R.forwardImpulse=0,B[P]||(B[P]=new n),A[P]||(A[P]=new n)}for(var P=0;P<X;P++){var R=Z[P],Y=R.raycastResult.body;if(Y){var ne=A[P],ee=this.getWheelTransformWorld(P);ee.vectorToWorldFrame(v[this.indexRightAxis],ne);var K=R.raycastResult.hitNormalWorld,de=ne.dot(K);K.scale(de,I),ne.vsub(I,ne),ne.normalize(),K.cross(ne,B[P]),B[P].normalize(),R.sideImpulse=oe(T,R.raycastResult.hitPointWorld,Y,R.raycastResult.hitPointWorld,ne),R.sideImpulse*=_}}var ue=1,H=.5;this.sliding=!1;for(var P=0;P<X;P++){var R=Z[P],Y=R.raycastResult.body,we=0;if(R.slipInfo=1,Y){var fe=0,re=R.brake?R.brake:fe;we=N(T,Y,R.raycastResult.hitPointWorld,B[P],re),we+=R.engineForce*F;var ce=re/we;R.slipInfo*=ce}if(R.forwardImpulse=0,R.skidInfo=1,Y){R.skidInfo=1;var De=R.suspensionForce*F*R.frictionSlip,Pe=De,Ge=De*Pe;R.forwardImpulse=we;var Re=R.forwardImpulse*H,Je=R.sideImpulse*ue,Ze=Re*Re+Je*Je;if(R.sliding=!1,Ze>Ge){this.sliding=!0,R.sliding=!0;var ce=De/Math.sqrt(Ze);R.skidInfo*=ce}}}if(this.sliding)for(var P=0;P<X;P++){var R=Z[P];R.sideImpulse!==0&&R.skidInfo<1&&(R.forwardImpulse*=R.skidInfo,R.sideImpulse*=R.skidInfo)}for(var P=0;P<X;P++){var R=Z[P],L=new n;if(L.copy(R.raycastResult.hitPointWorld),R.forwardImpulse!==0){var w=new n;B[P].scale(R.forwardImpulse,w),T.applyImpulse(w,L)}if(R.sideImpulse!==0){var Y=R.raycastResult.body,J=new n;J.copy(R.raycastResult.hitPointWorld);var me=new n;A[P].scale(R.sideImpulse,me),T.pointToLocalFrame(L,L),L["xyz"[this.indexUpAxis]]*=R.rollInfluence,T.pointToWorldFrame(L,L),T.applyImpulse(me,L),me.scale(-1,me),Y.applyImpulse(me,J)}}};var y=new n,E=new n,C=new n;function N(F,I,Z,X,T){var B=0,A=Z,P=y,R=E,Y=C;F.getVelocityAtWorldPoint(A,P),I.getVelocityAtWorldPoint(A,R),P.vsub(R,Y);var ne=X.dot(Y),ee=V(F,Z,X),K=V(I,Z,X),de=1,ue=de/(ee+K);return B=-ne*ue,T<B&&(B=T),B<-T&&(B=-T),B}var z=new n,S=new n,M=new n,U=new n;function V(F,I,Z){var X=z,T=S,B=M,A=U;return I.vsub(F.position,X),X.cross(Z,T),F.invInertiaWorld.vmult(T,A),A.cross(X,B),F.invMass+Z.dot(B)}var D=new n,G=new n,W=new n;function oe(F,I,Z,X,T,de){var A=T.norm2();if(A>1.1)return 0;var P=D,R=G,Y=W;F.getVelocityAtWorldPoint(I,P),Z.getVelocityAtWorldPoint(X,R),P.vsub(R,Y);var ne=T.dot(Y),ee=.2,K=1/(F.invMass+Z.invMass),de=-ee*ne*K;return de}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(t,i,a){var n=t("./Body"),o=t("../shapes/Sphere"),s=t("../shapes/Box"),c=t("../math/Vec3"),d=t("../constraints/HingeConstraint");i.exports=h;function h(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new c(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var g=new s(new c(5,2,.5));this.chassisBody=new n(1,g)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(f){f=f||{};var g=f.body;g||(g=new n(1,new o(1.2))),this.wheelBodies.push(g),this.wheelForces.push(0),new c;var v=typeof f.position<"u"?f.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(v,m),g.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new c(0,1,0);this.wheelAxes.push(p);var x=new d(this.chassisBody,g,{pivotA:v,axisA:p,pivotB:c.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(f,g){var v=this.wheelAxes[g],m=Math.cos(f),p=Math.sin(f),x=v.x,_=v.y;this.constraints[g].axisA.set(m*x-p*_,p*x+m*_,0)},h.prototype.setMotorSpeed=function(f,g){var v=this.constraints[g];v.enableMotor(),v.motorTargetVelocity=f},h.prototype.disableMotor=function(f){var g=this.constraints[f];g.disableMotor()};var l=new c;h.prototype.setWheelForce=function(f,g){this.wheelForces[g]=f},h.prototype.applyWheelForce=function(f,g){var v=this.wheelAxes[g],m=this.wheelBodies[g],p=m.torque;v.scale(f,l),m.vectorToWorldFrame(l,l),p.vadd(l,p)},h.prototype.addToWorld=function(f){for(var g=this.constraints,v=this.wheelBodies.concat([this.chassisBody]),m=0;m<v.length;m++)f.add(v[m]);for(var m=0;m<g.length;m++)f.addConstraint(g[m]);f.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var f=this.wheelForces,g=0;g<f.length;g++)this.applyWheelForce(f[g],g)},h.prototype.removeFromWorld=function(f){for(var g=this.constraints,v=this.wheelBodies.concat([this.chassisBody]),m=0;m<v.length;m++)f.remove(v[m]);for(var m=0;m<g.length;m++)f.removeConstraint(g[m])};var u=new c;h.prototype.getWheelSpeed=function(f){var g=this.wheelAxes[f],v=this.wheelBodies[f],m=v.angularVelocity;return this.chassisBody.vectorToWorldFrame(g,u),m.dot(u)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(t,i,a){i.exports=o,t("../shapes/Shape");var n=t("../math/Vec3");t("../math/Quaternion"),t("../shapes/Particle"),t("../objects/Body"),t("../material/Material");function o(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}o.prototype.add=function(g){this.particles.push(g),this.neighbors.length<this.particles.length&&this.neighbors.push([])},o.prototype.remove=function(g){var v=this.particles.indexOf(g);v!==-1&&(this.particles.splice(v,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var s=new n;o.prototype.getNeighbors=function(g,v){for(var m=this.particles.length,p=g.id,x=this.smoothingRadius*this.smoothingRadius,_=s,y=0;y!==m;y++){var E=this.particles[y];E.position.vsub(g.position,_),p!==E.id&&_.norm2()<x&&v.push(E)}};var c=new n,d=new n,h=new n,l=new n,u=new n,f=new n;o.prototype.update=function(){for(var g=this.particles.length,v=c,m=this.speedOfSound,p=this.eps,x=0;x!==g;x++){var _=this.particles[x],y=this.neighbors[x];y.length=0,this.getNeighbors(_,y),y.push(this.particles[x]);for(var E=y.length,C=0,N=0;N!==E;N++){_.position.vsub(y[N].position,v);var z=v.norm(),S=this.w(z);C+=y[N].mass*S}this.densities[x]=C,this.pressures[x]=m*m*(this.densities[x]-this.density)}for(var M=d,U=h,V=l,D=u,G=f,x=0;x!==g;x++){var W=this.particles[x];M.set(0,0,0),U.set(0,0,0);for(var oe,F,y=this.neighbors[x],E=y.length,N=0;N!==E;N++){var I=y[N];W.position.vsub(I.position,D);var Z=D.norm();oe=-I.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+p)+this.pressures[N]/(this.densities[N]*this.densities[N]+p)),this.gradw(D,V),V.mult(oe,V),M.vadd(V,M),I.velocity.vsub(W.velocity,G),G.mult(1/(1e-4+this.densities[x]*this.densities[N])*this.viscosity*I.mass,G),F=this.nablaw(Z),G.mult(F,G),U.vadd(G,U)}U.mult(W.mass,U),M.mult(W.mass,M),W.force.vadd(U,W.force),W.force.vadd(M,W.force)}},o.prototype.w=function(g){var v=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(v,9))*Math.pow(v*v-g*g,3)},o.prototype.gradw=function(g,v){var m=g.norm(),p=this.smoothingRadius;g.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),v)},o.prototype.nablaw=function(g){var v=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(v,9))*(v*v-g*g)*(7*g*g-3*v*v);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(t,i,a){var n=t("../math/Vec3");i.exports=o;function o(x,_,y){y=y||{},this.restLength=typeof y.restLength=="number"?y.restLength:1,this.stiffness=y.stiffness||100,this.damping=y.damping||1,this.bodyA=x,this.bodyB=_,this.localAnchorA=new n,this.localAnchorB=new n,y.localAnchorA&&this.localAnchorA.copy(y.localAnchorA),y.localAnchorB&&this.localAnchorB.copy(y.localAnchorB),y.worldAnchorA&&this.setWorldAnchorA(y.worldAnchorA),y.worldAnchorB&&this.setWorldAnchorB(y.worldAnchorB)}o.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},o.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},o.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},o.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var s=new n,c=new n,d=new n,h=new n,l=new n,u=new n,f=new n,g=new n,v=new n,m=new n,p=new n;o.prototype.applyForce=function(){var x=this.stiffness,_=this.damping,y=this.restLength,E=this.bodyA,C=this.bodyB,N=s,z=c,S=d,M=h,U=p,V=l,D=u,G=f,W=g,oe=v,F=m;this.getWorldAnchorA(V),this.getWorldAnchorB(D),V.vsub(E.position,G),D.vsub(C.position,W),D.vsub(V,N);var I=N.norm();z.copy(N),z.normalize(),C.velocity.vsub(E.velocity,S),C.angularVelocity.cross(W,U),S.vadd(U,S),E.angularVelocity.cross(G,U),S.vsub(U,S),z.mult(-x*(I-y)-_*S.dot(z),M),E.force.vsub(M,E.force),C.force.vadd(M,C.force),G.cross(M,oe),W.cross(M,F),E.torque.vsub(oe,E.torque),C.torque.vadd(F,C.torque)}},{"../math/Vec3":30}],36:[function(t,i,a){var n=t("../math/Vec3"),o=t("../math/Transform"),s=t("../collision/RaycastResult"),c=t("../utils/Utils");i.exports=d;function d(u){u=c.defaults(u,{chassisConnectionPointLocal:new n,chassisConnectionPointWorld:new n,directionLocal:new n,directionWorld:new n,axleLocal:new n,axleWorld:new n,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=u.maxSuspensionTravel,this.customSlidingRotationalSpeed=u.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=u.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=u.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=u.chassisConnectionPointWorld.clone(),this.directionLocal=u.directionLocal.clone(),this.directionWorld=u.directionWorld.clone(),this.axleLocal=u.axleLocal.clone(),this.axleWorld=u.axleWorld.clone(),this.suspensionRestLength=u.suspensionRestLength,this.suspensionMaxLength=u.suspensionMaxLength,this.radius=u.radius,this.suspensionStiffness=u.suspensionStiffness,this.dampingCompression=u.dampingCompression,this.dampingRelaxation=u.dampingRelaxation,this.frictionSlip=u.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=u.rollInfluence,this.maxSuspensionForce=u.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=u.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new s,this.worldTransform=new o,this.isInContact=!1}var l=new n,h=new n,l=new n;d.prototype.updateWheel=function(u){var f=this.raycastResult;if(this.isInContact){var g=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(u.position,h),u.getVelocityAtWorldPoint(h,l);var v=f.hitNormalWorld.dot(l);if(g>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/g;this.suspensionRelativeVelocity=v*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(t,i,a){i.exports=c;var n=t("./Shape"),o=t("../math/Vec3"),s=t("./ConvexPolyhedron");function c(l){n.call(this),this.type=n.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new n,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,u=this.halfExtents.y,f=this.halfExtents.z,g=o,v=[new g(-l,-u,-f),new g(l,-u,-f),new g(l,u,-f),new g(-l,u,-f),new g(-l,-u,f),new g(l,-u,f),new g(l,u,f),new g(-l,u,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new g(0,0,1),new g(0,1,0),new g(1,0,0);var p=new s(v,m);this.convexPolyhedronRepresentation=p,p.material=this.material},c.prototype.calculateLocalInertia=function(l,u){return u=u||new o,c.calculateInertia(this.halfExtents,l,u),u},c.calculateInertia=function(l,u,f){var g=l;f.x=1/12*u*(2*g.y*2*g.y+2*g.z*2*g.z),f.y=1/12*u*(2*g.x*2*g.x+2*g.z*2*g.z),f.z=1/12*u*(2*g.y*2*g.y+2*g.x*2*g.x)},c.prototype.getSideNormals=function(l,u){var f=l,g=this.halfExtents;if(f[0].set(g.x,0,0),f[1].set(0,g.y,0),f[2].set(0,0,g.z),f[3].set(-g.x,0,0),f[4].set(0,-g.y,0),f[5].set(0,0,-g.z),u!==void 0)for(var v=0;v!==f.length;v++)u.vmult(f[v],f[v]);return f},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var d=new o;new o,c.prototype.forEachWorldCorner=function(l,u,f){for(var g=this.halfExtents,v=[[g.x,g.y,g.z],[-g.x,g.y,g.z],[-g.x,-g.y,g.z],[-g.x,-g.y,-g.z],[g.x,-g.y,-g.z],[g.x,g.y,-g.z],[-g.x,g.y,-g.z],[g.x,-g.y,g.z]],m=0;m<v.length;m++)d.set(v[m][0],v[m][1],v[m][2]),u.vmult(d,d),l.vadd(d,d),f(d.x,d.y,d.z)};var h=[new o,new o,new o,new o,new o,new o,new o,new o];c.prototype.calculateWorldAABB=function(l,u,f,g){var v=this.halfExtents;h[0].set(v.x,v.y,v.z),h[1].set(-v.x,v.y,v.z),h[2].set(-v.x,-v.y,v.z),h[3].set(-v.x,-v.y,-v.z),h[4].set(v.x,-v.y,-v.z),h[5].set(v.x,v.y,-v.z),h[6].set(-v.x,v.y,-v.z),h[7].set(v.x,-v.y,v.z);var m=h[0];u.vmult(m,m),l.vadd(m,m),g.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=h[p];u.vmult(m,m),l.vadd(m,m);var x=m.x,_=m.y,y=m.z;x>g.x&&(g.x=x),_>g.y&&(g.y=_),y>g.z&&(g.z=y),x<f.x&&(f.x=x),_<f.y&&(f.y=_),y<f.z&&(f.z=y)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(t,i,a){i.exports=c;var n=t("./Shape"),o=t("../math/Vec3");t("../math/Quaternion");var s=t("../math/Transform");function c(T,B,A){n.call(this),this.type=n.types.CONVEXPOLYHEDRON,this.vertices=T||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=B||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=A?A.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new n,c.prototype.constructor=c;var d=new o;c.prototype.computeEdges=function(){var T=this.faces,B=this.vertices;B.length;var A=this.uniqueEdges;A.length=0;for(var P=d,R=0;R!==T.length;R++)for(var Y=T[R],ne=Y.length,ee=0;ee!==ne;ee++){var K=(ee+1)%ne;B[Y[ee]].vsub(B[Y[K]],P),P.normalize();for(var de=!1,ue=0;ue!==A.length;ue++)if(A[ue].almostEquals(P)||A[ue].almostEquals(P)){de=!0;break}de||A.push(P.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var T=0;T<this.faces.length;T++){for(var B=0;B<this.faces[T].length;B++)if(!this.vertices[this.faces[T][B]])throw new Error("Vertex "+this.faces[T][B]+" not found!");var A=this.faceNormals[T]||new o;this.getFaceNormal(T,A),A.negate(A),this.faceNormals[T]=A;var P=this.vertices[this.faces[T][0]];if(A.dot(P)<0){console.error(".faceNormals["+T+"] = Vec3("+A.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var B=0;B<this.faces[T].length;B++)console.warn(".vertices["+this.faces[T][B]+"] = Vec3("+this.vertices[this.faces[T][B]].toString()+")")}}};var h=new o,l=new o;c.computeNormal=function(T,B,A,P){B.vsub(T,l),A.vsub(B,h),h.cross(l,P),P.isZero()||P.normalize()},c.prototype.getFaceNormal=function(T,B){var A=this.faces[T],P=this.vertices[A[0]],R=this.vertices[A[1]],Y=this.vertices[A[2]];return c.computeNormal(P,R,Y,B)};var u=new o;c.prototype.clipAgainstHull=function(T,B,A,P,R,Y,ne,ee,K){for(var de=u,ue=-1,H=-Number.MAX_VALUE,we=0;we<A.faces.length;we++){de.copy(A.faceNormals[we]),R.vmult(de,de);var fe=de.dot(Y);fe>H&&(H=fe,ue=we)}for(var re=[],ce=A.faces[ue],De=ce.length,Pe=0;Pe<De;Pe++){var Ge=A.vertices[ce[Pe]],Re=new o;Re.copy(Ge),R.vmult(Re,Re),P.vadd(Re,Re),re.push(Re)}ue>=0&&this.clipFaceAgainstHull(Y,T,B,re,ne,ee,K)};var f=new o,g=new o,v=new o,m=new o,p=new o,x=new o;c.prototype.findSeparatingAxis=function(T,B,A,P,R,Y,ne,ee){var K=f,de=g,ue=v,H=m,we=p,fe=x,re=Number.MAX_VALUE,ce=this;if(ce.uniqueAxes)for(var De=0;De!==ce.uniqueAxes.length;De++){A.vmult(ce.uniqueAxes[De],K);var Pe=ce.testSepAxis(K,T,B,A,P,R);if(Pe===!1)return!1;Pe<re&&(re=Pe,Y.copy(K))}else for(var Ge=ne?ne.length:ce.faces.length,De=0;De<Ge;De++){var Re=ne?ne[De]:De;K.copy(ce.faceNormals[Re]),A.vmult(K,K);var Pe=ce.testSepAxis(K,T,B,A,P,R);if(Pe===!1)return!1;Pe<re&&(re=Pe,Y.copy(K))}if(T.uniqueAxes)for(var De=0;De!==T.uniqueAxes.length;De++){R.vmult(T.uniqueAxes[De],de);var Pe=ce.testSepAxis(de,T,B,A,P,R);if(Pe===!1)return!1;Pe<re&&(re=Pe,Y.copy(de))}else for(var Je=ee?ee.length:T.faces.length,De=0;De<Je;De++){var Re=ee?ee[De]:De;de.copy(T.faceNormals[Re]),R.vmult(de,de);var Pe=ce.testSepAxis(de,T,B,A,P,R);if(Pe===!1)return!1;Pe<re&&(re=Pe,Y.copy(de))}for(var Ze=0;Ze!==ce.uniqueEdges.length;Ze++){A.vmult(ce.uniqueEdges[Ze],H);for(var L=0;L!==T.uniqueEdges.length;L++)if(R.vmult(T.uniqueEdges[L],we),H.cross(we,fe),!fe.almostZero()){fe.normalize();var w=ce.testSepAxis(fe,T,B,A,P,R);if(w===!1)return!1;w<re&&(re=w,Y.copy(fe))}}return P.vsub(B,ue),ue.dot(Y)>0&&Y.negate(Y),!0};var _=[],y=[];c.prototype.testSepAxis=function(T,B,A,P,R,Y){var ne=this;c.project(ne,T,A,P,_),c.project(B,T,R,Y,y);var ee=_[0],K=_[1],de=y[0],ue=y[1],H=ee-ue,we=de-K,fe=H<we?H:we;return fe};var E=new o,C=new o;c.prototype.calculateLocalInertia=function(T,B){this.computeLocalAABB(E,C);var A=C.x-E.x,P=C.y-E.y,R=C.z-E.z;B.x=1/12*T*(2*P*2*P+2*R*2*R),B.y=1/12*T*(2*A*2*A+2*R*2*R),B.z=1/12*T*(2*P*2*P+2*A*2*A)},c.prototype.getPlaneConstantOfFace=function(T){var B=this.faces[T],A=this.faceNormals[T],P=this.vertices[B[0]],R=-A.dot(P);return R};var N=new o,z=new o,S=new o,M=new o,U=new o,V=new o,D=new o,G=new o;c.prototype.clipFaceAgainstHull=function(T,B,A,P,R,Y,ne){for(var ee=N,K=z,de=S,ue=M,H=U,we=V,fe=D,re=G,ce=this,De=[],Pe=P,Ge=De,Re=-1,Je=Number.MAX_VALUE,Ze=0;Ze<ce.faces.length;Ze++){ee.copy(ce.faceNormals[Ze]),A.vmult(ee,ee);var L=ee.dot(T);L<Je&&(Je=L,Re=Ze)}if(!(Re<0)){var w=ce.faces[Re];w.connectedFaces=[];for(var J=0;J<ce.faces.length;J++)for(var me=0;me<ce.faces[J].length;me++)w.indexOf(ce.faces[J][me])!==-1&&J!==Re&&w.connectedFaces.indexOf(J)===-1&&w.connectedFaces.push(J);Pe.length;for(var pe=w.length,ve=0;ve<pe;ve++){var We=ce.vertices[w[ve]],Se=ce.vertices[w[(ve+1)%pe]];We.vsub(Se,K),de.copy(K),A.vmult(de,de),B.vadd(de,de),ue.copy(this.faceNormals[Re]),A.vmult(ue,ue),B.vadd(ue,ue),de.cross(ue,H),H.negate(H),we.copy(We),A.vmult(we,we),B.vadd(we,we),-we.dot(H);var se;{var Xe=w.connectedFaces[ve];fe.copy(this.faceNormals[Xe]);var ke=this.getPlaneConstantOfFace(Xe);re.copy(fe),A.vmult(re,re);var se=ke-re.dot(B)}for(this.clipFaceAgainstPlane(Pe,Ge,re,se);Pe.length;)Pe.shift();for(;Ge.length;)Pe.push(Ge.shift())}fe.copy(this.faceNormals[Re]);var ke=this.getPlaneConstantOfFace(Re);re.copy(fe),A.vmult(re,re);for(var se=ke-re.dot(B),J=0;J<Pe.length;J++){var je=re.dot(Pe[J])+se;if(je<=R&&(console.log("clamped: depth="+je+" to minDist="+(R+"")),je=R),je<=Y){var Ve=Pe[J];if(je<=0){var Oe={point:Ve,normal:re,depth:je};ne.push(Oe)}}}}},c.prototype.clipFaceAgainstPlane=function(T,B,A,P){var R,Y,ne=T.length;if(ne<2)return B;var ee=T[T.length-1],K=T[0];R=A.dot(ee)+P;for(var de=0;de<ne;de++){if(K=T[de],Y=A.dot(K)+P,R<0)if(Y<0){var ue=new o;ue.copy(K),B.push(ue)}else{var ue=new o;ee.lerp(K,R/(R-Y),ue),B.push(ue)}else if(Y<0){var ue=new o;ee.lerp(K,R/(R-Y),ue),B.push(ue),B.push(K)}ee=K,R=Y}return B},c.prototype.computeWorldVertices=function(T,B){for(var A=this.vertices.length;this.worldVertices.length<A;)this.worldVertices.push(new o);for(var P=this.vertices,R=this.worldVertices,Y=0;Y!==A;Y++)B.vmult(P[Y],R[Y]),T.vadd(R[Y],R[Y]);this.worldVerticesNeedsUpdate=!1},new o,c.prototype.computeLocalAABB=function(T,B){var A=this.vertices.length,P=this.vertices;T.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),B.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var R=0;R<A;R++){var Y=P[R];Y.x<T.x?T.x=Y.x:Y.x>B.x&&(B.x=Y.x),Y.y<T.y?T.y=Y.y:Y.y>B.y&&(B.y=Y.y),Y.z<T.z?T.z=Y.z:Y.z>B.z&&(B.z=Y.z)}},c.prototype.computeWorldFaceNormals=function(T){for(var B=this.faceNormals.length;this.worldFaceNormals.length<B;)this.worldFaceNormals.push(new o);for(var A=this.faceNormals,P=this.worldFaceNormals,R=0;R!==B;R++)T.vmult(A[R],P[R]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var T=0,B=this.vertices,A=0,P=B.length;A!==P;A++){var R=B[A].norm2();R>T&&(T=R)}this.boundingSphereRadius=Math.sqrt(T)};var W=new o;c.prototype.calculateWorldAABB=function(T,B,A,P){for(var R=this.vertices.length,Y=this.vertices,ne,ee,K,de,ue,H,we=0;we<R;we++){W.copy(Y[we]),B.vmult(W,W),T.vadd(W,W);var fe=W;fe.x<ne||ne===void 0?ne=fe.x:(fe.x>de||de===void 0)&&(de=fe.x),fe.y<ee||ee===void 0?ee=fe.y:(fe.y>ue||ue===void 0)&&(ue=fe.y),fe.z<K||K===void 0?K=fe.z:(fe.z>H||H===void 0)&&(H=fe.z)}A.set(ne,ee,K),P.set(de,ue,H)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(T){T=T||new o;for(var B=this.vertices.length,A=this.vertices,P=0;P<B;P++)T.vadd(A[P],T);return T.mult(1/B,T),T},c.prototype.transformAllPoints=function(T,B){var A=this.vertices.length,P=this.vertices;if(B){for(var R=0;R<A;R++){var Y=P[R];B.vmult(Y,Y)}for(var R=0;R<this.faceNormals.length;R++){var Y=this.faceNormals[R];B.vmult(Y,Y)}}if(T)for(var R=0;R<A;R++){var Y=P[R];Y.vadd(T,Y)}};var oe=new o,F=new o,I=new o;c.prototype.pointIsInside=function(T){var B=this.vertices.length,A=this.vertices,P=this.faces,R=this.faceNormals,Y=null,ne=this.faces.length,ee=oe;this.getAveragePointLocal(ee);for(var K=0;K<ne;K++){this.faces[K].length;var B=R[K],de=A[P[K][0]],ue=F;T.vsub(de,ue);var H=B.dot(ue),we=I;ee.vsub(de,we);var fe=B.dot(we);if(H<0&&fe>0||H>0&&fe<0)return!1}return Y?1:-1},new o;var Z=new o,X=new o;c.project=function(T,B,A,P,R){var Y=T.vertices.length,ne=Z,ee=0,K=0,de=X,ue=T.vertices;de.setZero(),s.vectorToLocalFrame(A,P,B,ne),s.pointToLocalFrame(A,P,de,de);var H=de.dot(ne);K=ee=ue[0].dot(ne);for(var we=1;we<Y;we++){var fe=ue[we].dot(ne);fe>ee&&(ee=fe),fe<K&&(K=fe)}if(K-=H,ee-=H,K>ee){var re=K;K=ee,ee=re}R[0]=ee,R[1]=K}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(t,i,a){i.exports=c;var n=t("./Shape"),o=t("../math/Vec3");t("../math/Quaternion");var s=t("./ConvexPolyhedron");function c(d,h,l,u){var f=u,g=[],v=[],m=[],p=[],x=[],_=Math.cos,y=Math.sin;g.push(new o(h*_(0),h*y(0),-l*.5)),p.push(0),g.push(new o(d*_(0),d*y(0),l*.5)),x.push(1);for(var E=0;E<f;E++){var C=2*Math.PI/f*(E+1),N=2*Math.PI/f*(E+.5);E<f-1?(g.push(new o(h*_(C),h*y(C),-l*.5)),p.push(2*E+2),g.push(new o(d*_(C),d*y(C),l*.5)),x.push(2*E+3),m.push([2*E+2,2*E+3,2*E+1,2*E])):m.push([0,1,2*E+1,2*E]),(f%2===1||E<f/2)&&v.push(new o(_(N),y(N),0))}m.push(x),v.push(new o(0,0,1));for(var z=[],E=0;E<p.length;E++)z.push(p[p.length-E-1]);m.push(z),this.type=n.types.CONVEXPOLYHEDRON,s.call(this,g,m,v)}c.prototype=new s},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(t,i,a){var n=t("./Shape"),o=t("./ConvexPolyhedron"),s=t("../math/Vec3"),c=t("../utils/Utils");i.exports=d;function d(h,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,n.call(this),this.pillarConvex=new o,this.pillarOffset=new s,this.type=n.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}d.prototype=new n,d.prototype.update=function(){this._cachedPillars={}},d.prototype.updateMinValue=function(){for(var h=this.data,l=h[0][0],u=0;u!==h.length;u++)for(var f=0;f!==h[u].length;f++){var g=h[u][f];g<l&&(l=g)}this.minValue=l},d.prototype.updateMaxValue=function(){for(var h=this.data,l=h[0][0],u=0;u!==h.length;u++)for(var f=0;f!==h[u].length;f++){var g=h[u][f];g>l&&(l=g)}this.maxValue=l},d.prototype.setHeightValueAtIndex=function(h,l,u){var f=this.data;f[h][l]=u,this.clearCachedConvexTrianglePillar(h,l,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,l,!0),this.clearCachedConvexTrianglePillar(h-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(h,l-1,!0),this.clearCachedConvexTrianglePillar(h,l-1,!1)),l>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,l-1,!0)},d.prototype.getRectMinMax=function(h,l,u,f,g){g=g||[];for(var v=this.data,m=this.minValue,p=h;p<=u;p++)for(var x=l;x<=f;x++){var _=v[p][x];_>m&&(m=_)}g[0]=this.minValue,g[1]=m},d.prototype.getIndexOfPosition=function(h,l,u,f){var g=this.elementSize,v=this.data,m=Math.floor(h/g),p=Math.floor(l/g);return u[0]=m,u[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=v.length-1&&(m=v.length-1),p>=v[0].length-1&&(p=v[0].length-1)),!(m<0||p<0||m>=v.length-1||p>=v[0].length-1)},d.prototype.getHeightAt=function(h,l,u){var f=[];this.getIndexOfPosition(h,l,f,u);var g=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,g),(g[0]+g[1])/2},d.prototype.getCacheConvexTrianglePillarKey=function(h,l,u){return h+"_"+l+"_"+(u?1:0)},d.prototype.getCachedConvexTrianglePillar=function(h,l,u){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]},d.prototype.setCachedConvexTrianglePillar=function(h,l,u,f,g){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]={convex:f,offset:g}},d.prototype.clearCachedConvexTrianglePillar=function(h,l,u){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]},d.prototype.getConvexTrianglePillar=function(h,l,u){var f=this.pillarConvex,g=this.pillarOffset;if(this.cacheEnabled){var v=this.getCachedConvexTrianglePillar(h,l,u);if(v){this.pillarConvex=v.convex,this.pillarOffset=v.offset;return}f=new o,g=new s,this.pillarConvex=f,this.pillarOffset=g}var v=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var x=0;x<6;x++)f.vertices[x]||(f.vertices[x]=new s);p.length=5;for(var x=0;x<5;x++)p[x]||(p[x]=[]);var _=f.vertices,y=(Math.min(v[h][l],v[h+1][l],v[h][l+1],v[h+1][l+1])-this.minValue)/2+this.minValue;u?(g.set((h+.75)*m,(l+.75)*m,y),_[0].set(.25*m,.25*m,v[h+1][l+1]-y),_[1].set(-.75*m,.25*m,v[h][l+1]-y),_[2].set(.25*m,-.75*m,v[h+1][l]-y),_[3].set(.25*m,.25*m,-y-1),_[4].set(-.75*m,.25*m,-y-1),_[5].set(.25*m,-.75*m,-y-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(g.set((h+.25)*m,(l+.25)*m,y),_[0].set(-.25*m,-.25*m,v[h][l]-y),_[1].set(.75*m,-.25*m,v[h+1][l]-y),_[2].set(-.25*m,.75*m,v[h][l+1]-y),_[3].set(-.25*m,-.25*m,-y-1),_[4].set(.75*m,-.25*m,-y-1),_[5].set(-.25*m,.75*m,-y-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,l,u,f,g)},d.prototype.calculateLocalInertia=function(h,l){return l=l||new s,l.set(0,0,0),l},d.prototype.volume=function(){return Number.MAX_VALUE},d.prototype.calculateWorldAABB=function(h,l,u,f){u.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},d.prototype.updateBoundingSphereRadius=function(){var h=this.data,l=this.elementSize;this.boundingSphereRadius=new s(h.length*l,h[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(t,i,a){i.exports=s;var n=t("./Shape"),o=t("../math/Vec3");function s(){n.call(this),this.type=n.types.PARTICLE}s.prototype=new n,s.prototype.constructor=s,s.prototype.calculateLocalInertia=function(c,d){return d=d||new o,d.set(0,0,0),d},s.prototype.volume=function(){return 0},s.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},s.prototype.calculateWorldAABB=function(c,d,h,l){h.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(t,i,a){i.exports=s;var n=t("./Shape"),o=t("../math/Vec3");function s(){n.call(this),this.type=n.types.PLANE,this.worldNormal=new o,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}s.prototype=new n,s.prototype.constructor=s,s.prototype.computeWorldNormal=function(d){var h=this.worldNormal;h.set(0,0,1),d.vmult(h,h),this.worldNormalNeedsUpdate=!1},s.prototype.calculateLocalInertia=function(d,h){return h=h||new o,h},s.prototype.volume=function(){return Number.MAX_VALUE};var c=new o;s.prototype.calculateWorldAABB=function(d,h,l,u){c.set(0,0,1),h.vmult(c,c);var f=Number.MAX_VALUE;l.set(-f,-f,-f),u.set(f,f,f),c.x===1&&(u.x=d.x),c.y===1&&(u.y=d.y),c.z===1&&(u.z=d.z),c.x===-1&&(l.x=d.x),c.y===-1&&(l.y=d.y),c.z===-1&&(l.z=d.z)},s.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(t,i,a){i.exports=n;var n=t("./Shape");t("../math/Vec3"),t("../math/Quaternion"),t("../material/Material");function n(){this.id=n.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}n.prototype.constructor=n,n.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},n.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},n.prototype.calculateLocalInertia=function(o,s){throw"calculateLocalInertia() not implemented for shape type "+this.type},n.idCounter=0,n.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(t,i,a){i.exports=s;var n=t("./Shape"),o=t("../math/Vec3");function s(c){if(n.call(this),this.radius=c!==void 0?Number(c):1,this.type=n.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}s.prototype=new n,s.prototype.constructor=s,s.prototype.calculateLocalInertia=function(c,d){d=d||new o;var h=2*c*this.radius*this.radius/5;return d.x=h,d.y=h,d.z=h,d},s.prototype.volume=function(){return 4*Math.PI*this.radius/3},s.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},s.prototype.calculateWorldAABB=function(c,d,h,l){for(var u=this.radius,f=["x","y","z"],g=0;g<f.length;g++){var v=f[g];h[v]=c[v]-u,l[v]=c[v]+u}}},{"../math/Vec3":30,"./Shape":43}],45:[function(t,i,a){i.exports=h;var n=t("./Shape"),o=t("../math/Vec3");t("../math/Quaternion");var s=t("../math/Transform"),c=t("../collision/AABB"),d=t("../utils/Octree");function h(z,S){n.call(this),this.type=n.types.TRIMESH,this.vertices=new Float32Array(z),this.indices=new Int16Array(S),this.normals=new Float32Array(S.length),this.aabb=new c,this.edges=null,this.scale=new o(1,1,1),this.tree=new d,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new n,h.prototype.constructor=h;var l=new o;h.prototype.updateTree=function(){var z=this.tree;z.reset(),z.aabb.copy(this.aabb);var S=this.scale;z.aabb.lowerBound.x*=1/S.x,z.aabb.lowerBound.y*=1/S.y,z.aabb.lowerBound.z*=1/S.z,z.aabb.upperBound.x*=1/S.x,z.aabb.upperBound.y*=1/S.y,z.aabb.upperBound.z*=1/S.z;for(var M=new c,U=new o,V=new o,D=new o,G=[U,V,D],W=0;W<this.indices.length/3;W++){var oe=W*3;this._getUnscaledVertex(this.indices[oe],U),this._getUnscaledVertex(this.indices[oe+1],V),this._getUnscaledVertex(this.indices[oe+2],D),M.setFromPoints(G),z.insert(M,W)}z.removeEmptyNodes()};var u=new c;h.prototype.getTrianglesInAABB=function(z,S){u.copy(z);var M=this.scale,U=M.x,V=M.y,D=M.z,G=u.lowerBound,W=u.upperBound;return G.x/=U,G.y/=V,G.z/=D,W.x/=U,W.y/=V,W.z/=D,this.tree.aabbQuery(u,S)},h.prototype.setScale=function(z){var S=this.scale.x===this.scale.y===this.scale.z,M=z.x===z.y===z.z;S&&M||this.updateNormals(),this.scale.copy(z),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var z=l,S=this.normals,M=0;M<this.indices.length/3;M++){var U=M*3,V=this.indices[U],D=this.indices[U+1],G=this.indices[U+2];this.getVertex(V,p),this.getVertex(D,x),this.getVertex(G,_),h.computeNormal(x,p,_,z),S[U]=z.x,S[U+1]=z.y,S[U+2]=z.z}},h.prototype.updateEdges=function(){for(var z={},S=function(oe,F){var I=V<D?V+"_"+D:D+"_"+V;z[I]=!0},M=0;M<this.indices.length/3;M++){var U=M*3,V=this.indices[U],D=this.indices[U+1];this.indices[U+2],S(),S(),S()}var G=Object.keys(z);this.edges=new Int16Array(G.length*2);for(var M=0;M<G.length;M++){var W=G[M].split("_");this.edges[2*M]=parseInt(W[0],10),this.edges[2*M+1]=parseInt(W[1],10)}},h.prototype.getEdgeVertex=function(z,S,M){var U=this.edges[z*2+(S?1:0)];this.getVertex(U,M)};var f=new o,g=new o;h.prototype.getEdgeVector=function(z,S){var M=f,U=g;this.getEdgeVertex(z,0,M),this.getEdgeVertex(z,1,U),U.vsub(M,S)};var v=new o,m=new o;h.computeNormal=function(z,S,M,U){S.vsub(z,m),M.vsub(S,v),v.cross(m,U),U.isZero()||U.normalize()};var p=new o,x=new o,_=new o;h.prototype.getVertex=function(z,S){var M=this.scale;return this._getUnscaledVertex(z,S),S.x*=M.x,S.y*=M.y,S.z*=M.z,S},h.prototype._getUnscaledVertex=function(z,S){var M=z*3,U=this.vertices;return S.set(U[M],U[M+1],U[M+2])},h.prototype.getWorldVertex=function(z,S,M,U){return this.getVertex(z,U),s.pointToWorldFrame(S,M,U,U),U},h.prototype.getTriangleVertices=function(z,S,M,U){var V=z*3;this.getVertex(this.indices[V],S),this.getVertex(this.indices[V+1],M),this.getVertex(this.indices[V+2],U)},h.prototype.getNormal=function(z,S){var M=z*3;return S.set(this.normals[M],this.normals[M+1],this.normals[M+2])};var y=new c;h.prototype.calculateLocalInertia=function(z,S){this.computeLocalAABB(y);var M=y.upperBound.x-y.lowerBound.x,U=y.upperBound.y-y.lowerBound.y,V=y.upperBound.z-y.lowerBound.z;return S.set(1/12*z*(2*U*2*U+2*V*2*V),1/12*z*(2*M*2*M+2*V*2*V),1/12*z*(2*U*2*U+2*M*2*M))};var E=new o;h.prototype.computeLocalAABB=function(z){var S=z.lowerBound,M=z.upperBound,U=this.vertices.length;this.vertices;var V=E;this.getVertex(0,V),S.copy(V),M.copy(V);for(var D=0;D!==U;D++)this.getVertex(D,V),V.x<S.x?S.x=V.x:V.x>M.x&&(M.x=V.x),V.y<S.y?S.y=V.y:V.y>M.y&&(M.y=V.y),V.z<S.z?S.z=V.z:V.z>M.z&&(M.z=V.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var z=0,S=this.vertices,M=new o,U=0,V=S.length/3;U!==V;U++){this.getVertex(U,M);var D=M.norm2();D>z&&(z=D)}this.boundingSphereRadius=Math.sqrt(z)},new o;var C=new s,N=new c;h.prototype.calculateWorldAABB=function(z,S,M,U){var V=C,D=N;V.position=z,V.quaternion=S,this.aabb.toWorldFrame(V,D),M.copy(D.lowerBound),U.copy(D.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(z,S,M,U,V){z=z||1,S=S||.5,M=M||8,U=U||6,V=V||Math.PI*2;for(var D=[],G=[],W=0;W<=M;W++)for(var oe=0;oe<=U;oe++){var F=oe/U*V,I=W/M*Math.PI*2,Z=(z+S*Math.cos(I))*Math.cos(F),X=(z+S*Math.cos(I))*Math.sin(F),T=S*Math.sin(I);D.push(Z,X,T)}for(var W=1;W<=M;W++)for(var oe=1;oe<=U;oe++){var B=(U+1)*W+oe-1,A=(U+1)*(W-1)+oe-1,P=(U+1)*(W-1)+oe,R=(U+1)*W+oe;G.push(B,A,R),G.push(A,P,R)}return new h(D,G)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(t,i,a){i.exports=o,t("../math/Vec3"),t("../math/Quaternion");var n=t("./Solver");function o(){n.call(this),this.iterations=10,this.tolerance=1e-7}o.prototype=new n;var s=[],c=[],d=[];o.prototype.solve=function(h,l){var u=0,f=this.iterations,g=this.tolerance*this.tolerance,v=this.equations,m=v.length,p=l.bodies,x=p.length,_=h,y,E,C,N,z,S;if(m!==0)for(var M=0;M!==x;M++)p[M].updateSolveMassProperties();var U=c,V=d,D=s;U.length=m,V.length=m,D.length=m;for(var M=0;M!==m;M++){var G=v[M];D[M]=0,V[M]=G.computeB(_),U[M]=1/G.computeC()}if(m!==0){for(var M=0;M!==x;M++){var W=p[M],oe=W.vlambda,F=W.wlambda;oe.set(0,0,0),F&&F.set(0,0,0)}for(u=0;u!==f;u++){N=0;for(var I=0;I!==m;I++){var G=v[I];y=V[I],E=U[I],S=D[I],z=G.computeGWlambda(),C=E*(y-z-G.eps*S),S+C<G.minForce?C=G.minForce-S:S+C>G.maxForce&&(C=G.maxForce-S),D[I]+=C,N+=C>0?C:-C,G.addToWlambda(C)}if(N*N<g)break}for(var M=0;M!==x;M++){var W=p[M],Z=W.velocity,X=W.angularVelocity;Z.vadd(W.vlambda,Z),X&&X.vadd(W.wlambda,X)}}return u}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(t,i,a){i.exports=n;function n(){this.equations=[]}n.prototype.solve=function(o,s){return 0},n.prototype.addEquation=function(o){o.enabled&&this.equations.push(o)},n.prototype.removeEquation=function(o){var s=this.equations,c=s.indexOf(o);c!==-1&&s.splice(c,1)},n.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(t,i,a){i.exports=s,t("../math/Vec3"),t("../math/Quaternion");var n=t("./Solver"),o=t("../objects/Body");function s(p){for(n.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}s.prototype=new n;var c=[],d=[],h={bodies:[]},l=o.STATIC;function u(p){for(var x=p.length,_=0;_!==x;_++){var y=p[_];if(!y.visited&&!(y.body.type&l))return y}return!1}var f=[];function g(p,x,_,y){for(f.push(p),p.visited=!0,x(p,_,y);f.length;)for(var E=f.pop(),C;C=u(E.children);)C.visited=!0,x(C,_,y),f.push(C)}function v(p,x,_){x.push(p.body);for(var y=p.eqs.length,E=0;E!==y;E++){var C=p.eqs[E];_.indexOf(C)===-1&&_.push(C)}}s.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},s.prototype.solve=function(p,x){for(var _=c,y=this.nodePool,E=x.bodies,C=this.equations,N=C.length,z=E.length,S=this.subsolver;y.length<z;)y.push(this.createNode());_.length=z;for(var M=0;M<z;M++)_[M]=y[M];for(var M=0;M!==z;M++){var U=_[M];U.body=E[M],U.children.length=0,U.eqs.length=0,U.visited=!1}for(var V=0;V!==N;V++){var D=C[V],M=E.indexOf(D.bi),G=E.indexOf(D.bj),W=_[M],oe=_[G];W.children.push(oe),W.eqs.push(D),oe.children.push(W),oe.eqs.push(D)}var F,I=0,Z=d;S.tolerance=this.tolerance,S.iterations=this.iterations;for(var X=h;F=u(_);){Z.length=0,X.bodies.length=0,g(F,v,X.bodies,Z);var T=Z.length;Z=Z.sort(m);for(var M=0;M!==T;M++)S.addEquation(Z[M]);S.solve(p,X),S.removeAllEquations(),I++}return I};function m(p,x){return x.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(t,i,a){var n=function(){};i.exports=n,n.prototype={constructor:n,addEventListener:function(o,s){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[o]===void 0&&(c[o]=[]),c[o].indexOf(s)===-1&&c[o].push(s),this},hasEventListener:function(o,s){if(this._listeners===void 0)return!1;var c=this._listeners;return c[o]!==void 0&&c[o].indexOf(s)!==-1},removeEventListener:function(o,s){if(this._listeners===void 0)return this;var c=this._listeners;if(c[o]===void 0)return this;var d=c[o].indexOf(s);return d!==-1&&c[o].splice(d,1),this},dispatchEvent:function(o){if(this._listeners===void 0)return this;var s=this._listeners,c=s[o.type];if(c!==void 0){o.target=this;for(var d=0,h=c.length;d<h;d++)c[d].call(this,o)}return this}}},{}],50:[function(t,i,a){var n=t("../collision/AABB"),o=t("../math/Vec3");i.exports=c;function s(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new n,this.data=[],this.children=[]}function c(l,u){u=u||{},u.root=null,u.aabb=l,s.call(this,u),this.maxDepth=typeof u.maxDepth<"u"?u.maxDepth:8}c.prototype=new s,s.prototype.reset=function(l,u){this.children.length=this.data.length=0},s.prototype.insert=function(l,u,f){var g=this.data;if(f=f||0,!this.aabb.contains(l))return!1;var v=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;v.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(v[p].insert(l,u,f+1))return!0;m&&(v.length=0)}return g.push(u),!0};var d=new o;s.prototype.subdivide=function(){var l=this.aabb,u=l.lowerBound,f=l.upperBound,g=this.children;g.push(new s({aabb:new n({lowerBound:new o(0,0,0)})}),new s({aabb:new n({lowerBound:new o(1,0,0)})}),new s({aabb:new n({lowerBound:new o(1,1,0)})}),new s({aabb:new n({lowerBound:new o(1,1,1)})}),new s({aabb:new n({lowerBound:new o(0,1,1)})}),new s({aabb:new n({lowerBound:new o(0,0,1)})}),new s({aabb:new n({lowerBound:new o(1,0,1)})}),new s({aabb:new n({lowerBound:new o(0,1,0)})})),f.vsub(u,d),d.scale(.5,d);for(var v=this.root||this,m=0;m!==8;m++){var p=g[m];p.root=v;var x=p.aabb.lowerBound;x.x*=d.x,x.y*=d.y,x.z*=d.z,x.vadd(u,x),x.vadd(d,p.aabb.upperBound)}},s.prototype.aabbQuery=function(l,u){this.data,this.children;for(var f=[this];f.length;){var g=f.pop();g.aabb.overlaps(l)&&Array.prototype.push.apply(u,g.data),Array.prototype.push.apply(f,g.children)}return u};var h=new n;s.prototype.rayQuery=function(l,u,f){return l.getAABB(h),h.toLocalFrame(u,h),this.aabbQuery(h,f),f},s.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var u=l.pop(),f=u.children.length-1;f>=0;f--)u.children[f].data.length||u.children.splice(f,1);Array.prototype.push.apply(l,u.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(t,i,a){i.exports=n;function n(){this.objects=[],this.type=Object}n.prototype.release=function(){for(var o=arguments.length,s=0;s!==o;s++)this.objects.push(arguments[s])},n.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},n.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(t,i,a){i.exports=n;function n(){this.data={keys:[]}}n.prototype.get=function(o,s){if(o>s){var c=s;s=o,o=c}return this.data[o+"-"+s]},n.prototype.set=function(o,s,c){if(o>s){var d=s;s=o,o=d}var h=o+"-"+s;this.get(o,s)||this.data.keys.push(h),this.data[h]=c},n.prototype.reset=function(){for(var o=this.data,s=o.keys;s.length>0;){var c=s.pop();delete o[c]}}},{}],53:[function(t,i,a){function n(){}i.exports=n,n.defaults=function(o,s){o=o||{};for(var c in s)c in o||(o[c]=s[c]);return o}},{}],54:[function(t,i,a){i.exports=s;var n=t("../math/Vec3"),o=t("./Pool");function s(){o.call(this),this.type=n}s.prototype=new o,s.prototype.constructObject=function(){return new n}},{"../math/Vec3":30,"./Pool":51}],55:[function(t,i,a){i.exports=g;var n=t("../collision/AABB"),o=t("../shapes/Shape"),s=t("../collision/Ray"),c=t("../math/Vec3"),d=t("../math/Transform");t("../shapes/ConvexPolyhedron");var h=t("../math/Quaternion");t("../solver/Solver");var l=t("../utils/Vec3Pool"),u=t("../equations/ContactEquation"),f=t("../equations/FrictionEquation");function g(le){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=le,this.currentContactMaterial=null,this.enableFrictionReduction=!1}g.prototype.createContactEquation=function(le,he,ge,_e,Ke,Ue){var Me;this.contactPointPool.length?(Me=this.contactPointPool.pop(),Me.bi=le,Me.bj=he):Me=new u(le,he),Me.enabled=le.collisionResponse&&he.collisionResponse&&ge.collisionResponse&&_e.collisionResponse;var Le=this.currentContactMaterial;Me.restitution=Le.restitution,Me.setSpookParams(Le.contactEquationStiffness,Le.contactEquationRelaxation,this.world.dt);var te=ge.material||le.material,be=_e.material||he.material;return te&&be&&te.restitution>=0&&be.restitution>=0&&(Me.restitution=te.restitution*be.restitution),Me.si=Ke||ge,Me.sj=Ue||_e,Me},g.prototype.createFrictionEquationsFromContact=function(le,he){var ge=le.bi,_e=le.bj,Ke=le.si,Ue=le.sj,Me=this.world,Le=this.currentContactMaterial,te=Le.friction,be=Ke.material||ge.material,Ie=Ue.material||_e.material;if(be&&Ie&&be.friction>=0&&Ie.friction>=0&&(te=be.friction*Ie.friction),te>0){var ze=te*Me.gravity.length(),b=ge.invMass+_e.invMass;b>0&&(b=1/b);var O=this.frictionEquationPool,q=O.length?O.pop():new f(ge,_e,ze*b),j=O.length?O.pop():new f(ge,_e,ze*b);return q.bi=j.bi=ge,q.bj=j.bj=_e,q.minForce=j.minForce=-ze*b,q.maxForce=j.maxForce=ze*b,q.ri.copy(le.ri),q.rj.copy(le.rj),j.ri.copy(le.ri),j.rj.copy(le.rj),le.ni.tangents(q.t,j.t),q.setSpookParams(Le.frictionEquationStiffness,Le.frictionEquationRelaxation,Me.dt),j.setSpookParams(Le.frictionEquationStiffness,Le.frictionEquationRelaxation,Me.dt),q.enabled=j.enabled=le.enabled,he.push(q,j),!0}return!1};var v=new c,m=new c,p=new c;g.prototype.createFrictionFromAverage=function(le){var he=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(he,this.frictionResult)||le===1)){var ge=this.frictionResult[this.frictionResult.length-2],_e=this.frictionResult[this.frictionResult.length-1];v.setZero(),m.setZero(),p.setZero();var Ke=he.bi;he.bj;for(var Ue=0;Ue!==le;Ue++)he=this.result[this.result.length-1-Ue],he.bodyA!==Ke?(v.vadd(he.ni,v),m.vadd(he.ri,m),p.vadd(he.rj,p)):(v.vsub(he.ni,v),m.vadd(he.rj,m),p.vadd(he.ri,p));var Me=1/le;m.scale(Me,ge.ri),p.scale(Me,ge.rj),_e.ri.copy(ge.ri),_e.rj.copy(ge.rj),v.normalize(),v.tangents(ge.t,_e.t)}};var x=new c,_=new c,y=new h,E=new h;g.prototype.getContacts=function(le,he,ge,_e,Ke,Ue,Me){this.contactPointPool=Ke,this.frictionEquationPool=Me,this.result=_e,this.frictionResult=Ue;for(var Le=y,te=E,be=x,Ie=_,ze=0,b=le.length;ze!==b;ze++){var O=le[ze],q=he[ze],j=null;O.material&&q.material&&(j=ge.getContactMaterial(O.material,q.material)||null);for(var Q=0;Q<O.shapes.length;Q++){O.quaternion.mult(O.shapeOrientations[Q],Le),O.quaternion.vmult(O.shapeOffsets[Q],be),be.vadd(O.position,be);for(var $=O.shapes[Q],Ee=0;Ee<q.shapes.length;Ee++){q.quaternion.mult(q.shapeOrientations[Ee],te),q.quaternion.vmult(q.shapeOffsets[Ee],Ie),Ie.vadd(q.position,Ie);var Ae=q.shapes[Ee];if(!(be.distanceTo(Ie)>$.boundingSphereRadius+Ae.boundingSphereRadius)){var He=null;$.material&&Ae.material&&(He=ge.getContactMaterial($.material,Ae.material)||null),this.currentContactMaterial=He||j||ge.defaultContactMaterial;var Ne=this[$.type|Ae.type];Ne&&($.type<Ae.type?Ne.call(this,$,Ae,be,Ie,Le,te,O,q,$,Ae):Ne.call(this,Ae,$,Ie,be,te,Le,q,O,$,Ae))}}}}},g.prototype[o.types.BOX|o.types.BOX]=g.prototype.boxBox=function(le,he,ge,_e,Ke,Ue,Me,Le){le.convexPolyhedronRepresentation.material=le.material,he.convexPolyhedronRepresentation.material=he.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,he.convexPolyhedronRepresentation.collisionResponse=he.collisionResponse,this.convexConvex(le.convexPolyhedronRepresentation,he.convexPolyhedronRepresentation,ge,_e,Ke,Ue,Me,Le,le,he)},g.prototype[o.types.BOX|o.types.CONVEXPOLYHEDRON]=g.prototype.boxConvex=function(le,he,ge,_e,Ke,Ue,Me,Le){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexConvex(le.convexPolyhedronRepresentation,he,ge,_e,Ke,Ue,Me,Le,le,he)},g.prototype[o.types.BOX|o.types.PARTICLE]=g.prototype.boxParticle=function(le,he,ge,_e,Ke,Ue,Me,Le){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexParticle(le.convexPolyhedronRepresentation,he,ge,_e,Ke,Ue,Me,Le,le,he)},g.prototype[o.types.SPHERE]=g.prototype.sphereSphere=function(le,he,ge,_e,Ke,Ue,Me,Le){var te=this.createContactEquation(Me,Le,le,he);_e.vsub(ge,te.ni),te.ni.normalize(),te.ri.copy(te.ni),te.rj.copy(te.ni),te.ri.mult(le.radius,te.ri),te.rj.mult(-he.radius,te.rj),te.ri.vadd(ge,te.ri),te.ri.vsub(Me.position,te.ri),te.rj.vadd(_e,te.rj),te.rj.vsub(Le.position,te.rj),this.result.push(te),this.createFrictionEquationsFromContact(te,this.frictionResult)};var C=new c,N=new c,z=new c;g.prototype[o.types.PLANE|o.types.TRIMESH]=g.prototype.planeTrimesh=function(le,he,ge,_e,Ke,Ue,Me,Le){var te=new c,be=C;be.set(0,0,1),Ke.vmult(be,be);for(var Ie=0;Ie<he.vertices.length/3;Ie++){he.getVertex(Ie,te);var ze=new c;ze.copy(te),d.pointToWorldFrame(_e,Ue,ze,te);var b=N;te.vsub(ge,b);var O=be.dot(b);if(O<=0){var q=this.createContactEquation(Me,Le,le,he);q.ni.copy(be);var j=z;be.scale(b.dot(be),j),te.vsub(j,j),q.ri.copy(j),q.ri.vsub(Me.position,q.ri),q.rj.copy(te),q.rj.vsub(Le.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}};var S=new c,M=new c;new c;var U=new c,V=new c,D=new c,G=new c,W=new c,oe=new c,F=new c,I=new c,Z=new c,X=new c,T=new c,B=new n,A=[];g.prototype[o.types.SPHERE|o.types.TRIMESH]=g.prototype.sphereTrimesh=function(le,he,ge,_e,Ke,Ue,Me,Le){var te=D,be=G,Ie=W,ze=oe,b=F,O=I,q=B,j=V,Q=M,$=A;d.pointToLocalFrame(_e,Ue,ge,b);var Ee=le.radius;q.lowerBound.set(b.x-Ee,b.y-Ee,b.z-Ee),q.upperBound.set(b.x+Ee,b.y+Ee,b.z+Ee),he.getTrianglesInAABB(q,$);for(var Ae=U,He=le.radius*le.radius,Ne=0;Ne<$.length;Ne++)for(var Fe=0;Fe<3;Fe++)if(he.getVertex(he.indices[$[Ne]*3+Fe],Ae),Ae.vsub(b,Q),Q.norm2()<=He){j.copy(Ae),d.pointToWorldFrame(_e,Ue,j,Ae),Ae.vsub(ge,Q);var ye=this.createContactEquation(Me,Le,le,he);ye.ni.copy(Q),ye.ni.normalize(),ye.ri.copy(ye.ni),ye.ri.scale(le.radius,ye.ri),ye.ri.vadd(ge,ye.ri),ye.ri.vsub(Me.position,ye.ri),ye.rj.copy(Ae),ye.rj.vsub(Le.position,ye.rj),this.result.push(ye),this.createFrictionEquationsFromContact(ye,this.frictionResult)}for(var Ne=0;Ne<$.length;Ne++)for(var Fe=0;Fe<3;Fe++){he.getVertex(he.indices[$[Ne]*3+Fe],te),he.getVertex(he.indices[$[Ne]*3+(Fe+1)%3],be),be.vsub(te,Ie),b.vsub(be,O);var lt=O.dot(Ie);b.vsub(te,O);var nt=O.dot(Ie);if(nt>0&&lt<0){b.vsub(te,O),ze.copy(Ie),ze.normalize(),nt=O.dot(ze),ze.scale(nt,O),O.vadd(te,O);var ut=O.distanceTo(b);if(ut<le.radius){var ye=this.createContactEquation(Me,Le,le,he);O.vsub(b,ye.ni),ye.ni.normalize(),ye.ni.scale(le.radius,ye.ri),d.pointToWorldFrame(_e,Ue,O,O),O.vsub(Le.position,ye.rj),d.vectorToWorldFrame(Ue,ye.ni,ye.ni),d.vectorToWorldFrame(Ue,ye.ri,ye.ri),this.result.push(ye),this.createFrictionEquationsFromContact(ye,this.frictionResult)}}}for(var Mt=Z,rt=X,qe=T,zt=S,Ne=0,ft=$.length;Ne!==ft;Ne++){he.getTriangleVertices($[Ne],Mt,rt,qe),he.getNormal($[Ne],zt),b.vsub(Mt,O);var ut=O.dot(zt);if(zt.scale(ut,O),b.vsub(O,O),ut=O.distanceTo(b),s.pointInTriangle(O,Mt,rt,qe)&&ut<le.radius){var ye=this.createContactEquation(Me,Le,le,he);O.vsub(b,ye.ni),ye.ni.normalize(),ye.ni.scale(le.radius,ye.ri),d.pointToWorldFrame(_e,Ue,O,O),O.vsub(Le.position,ye.rj),d.vectorToWorldFrame(Ue,ye.ni,ye.ni),d.vectorToWorldFrame(Ue,ye.ri,ye.ri),this.result.push(ye),this.createFrictionEquationsFromContact(ye,this.frictionResult)}}$.length=0};var P=new c,R=new c;g.prototype[o.types.SPHERE|o.types.PLANE]=g.prototype.spherePlane=function(le,he,ge,_e,Ke,Ue,Me,Le){var te=this.createContactEquation(Me,Le,le,he);if(te.ni.set(0,0,1),Ue.vmult(te.ni,te.ni),te.ni.negate(te.ni),te.ni.normalize(),te.ni.mult(le.radius,te.ri),ge.vsub(_e,P),te.ni.mult(te.ni.dot(P),R),P.vsub(R,te.rj),-P.dot(te.ni)<=le.radius){var be=te.ri,Ie=te.rj;be.vadd(ge,be),be.vsub(Me.position,be),Ie.vadd(_e,Ie),Ie.vsub(Le.position,Ie),this.result.push(te),this.createFrictionEquationsFromContact(te,this.frictionResult)}};var Y=new c,ne=new c,ee=new c;function K(le,he,ge){for(var _e=null,Ke=le.length,Ue=0;Ue!==Ke;Ue++){var Me=le[Ue],Le=Y;le[(Ue+1)%Ke].vsub(Me,Le);var te=ne;Le.cross(he,te);var be=ee;ge.vsub(Me,be);var Ie=te.dot(be);if(_e===null||Ie>0&&_e===!0||Ie<=0&&_e===!1){_e===null&&(_e=Ie>0);continue}else return!1}return!0}var de=new c,ue=new c,H=new c,we=new c,fe=[new c,new c,new c,new c,new c,new c],re=new c,ce=new c,De=new c,Pe=new c;g.prototype[o.types.SPHERE|o.types.BOX]=g.prototype.sphereBox=function(le,he,ge,_e,Ke,Ue,Me,Le){var te=this.v3pool,be=fe;ge.vsub(_e,de),he.getSideNormals(be,Ue);for(var Ie=le.radius,ze=!1,b=ce,O=De,q=Pe,j=null,Q=0,$=0,Ee=0,Ae=null,He=0,Ne=be.length;He!==Ne&&ze===!1;He++){var Fe=ue;Fe.copy(be[He]);var ye=Fe.norm();Fe.normalize();var lt=de.dot(Fe);if(lt<ye+Ie&&lt>0){var nt=H,ut=we;nt.copy(be[(He+1)%3]),ut.copy(be[(He+2)%3]);var Mt=nt.norm(),rt=ut.norm();nt.normalize(),ut.normalize();var qe=de.dot(nt),zt=de.dot(ut);if(qe<Mt&&qe>-Mt&&zt<rt&&zt>-rt){var ft=Math.abs(lt-ye-Ie);(Ae===null||ft<Ae)&&(Ae=ft,$=qe,Ee=zt,j=ye,b.copy(Fe),O.copy(nt),q.copy(ut),Q++)}}}if(Q){ze=!0;var Ye=this.createContactEquation(Me,Le,le,he);b.mult(-Ie,Ye.ri),Ye.ni.copy(b),Ye.ni.negate(Ye.ni),b.mult(j,b),O.mult($,O),b.vadd(O,b),q.mult(Ee,q),b.vadd(q,Ye.rj),Ye.ri.vadd(ge,Ye.ri),Ye.ri.vsub(Me.position,Ye.ri),Ye.rj.vadd(_e,Ye.rj),Ye.rj.vsub(Le.position,Ye.rj),this.result.push(Ye),this.createFrictionEquationsFromContact(Ye,this.frictionResult)}for(var mt=te.get(),Ct=re,_t=0;_t!==2&&!ze;_t++)for(var ot=0;ot!==2&&!ze;ot++)for(var yt=0;yt!==2&&!ze;yt++)if(mt.set(0,0,0),_t?mt.vadd(be[0],mt):mt.vsub(be[0],mt),ot?mt.vadd(be[1],mt):mt.vsub(be[1],mt),yt?mt.vadd(be[2],mt):mt.vsub(be[2],mt),_e.vadd(mt,Ct),Ct.vsub(ge,Ct),Ct.norm2()<Ie*Ie){ze=!0;var Ye=this.createContactEquation(Me,Le,le,he);Ye.ri.copy(Ct),Ye.ri.normalize(),Ye.ni.copy(Ye.ri),Ye.ri.mult(Ie,Ye.ri),Ye.rj.copy(mt),Ye.ri.vadd(ge,Ye.ri),Ye.ri.vsub(Me.position,Ye.ri),Ye.rj.vadd(_e,Ye.rj),Ye.rj.vsub(Le.position,Ye.rj),this.result.push(Ye),this.createFrictionEquationsFromContact(Ye,this.frictionResult)}te.release(mt),mt=null;for(var Vt=te.get(),ct=te.get(),Ye=te.get(),Ht=te.get(),ft=te.get(),pi=be.length,_t=0;_t!==pi&&!ze;_t++)for(var ot=0;ot!==pi&&!ze;ot++)if(_t%3!==ot%3){be[ot].cross(be[_t],Vt),Vt.normalize(),be[_t].vadd(be[ot],ct),Ye.copy(ge),Ye.vsub(ct,Ye),Ye.vsub(_e,Ye);var oi=Ye.dot(Vt);Vt.mult(oi,Ht);for(var yt=0;yt===_t%3||yt===ot%3;)yt++;ft.copy(ge),ft.vsub(Ht,ft),ft.vsub(ct,ft),ft.vsub(_e,ft);var Ps=Math.abs(oi),Us=ft.norm();if(Ps<be[yt].norm()&&Us<Ie){ze=!0;var gt=this.createContactEquation(Me,Le,le,he);ct.vadd(Ht,gt.rj),gt.rj.copy(gt.rj),ft.negate(gt.ni),gt.ni.normalize(),gt.ri.copy(gt.rj),gt.ri.vadd(_e,gt.ri),gt.ri.vsub(ge,gt.ri),gt.ri.normalize(),gt.ri.mult(Ie,gt.ri),gt.ri.vadd(ge,gt.ri),gt.ri.vsub(Me.position,gt.ri),gt.rj.vadd(_e,gt.rj),gt.rj.vsub(Le.position,gt.rj),this.result.push(gt),this.createFrictionEquationsFromContact(gt,this.frictionResult)}}te.release(Vt,ct,Ye,Ht,ft)};var Ge=new c,Re=new c,Je=new c,Ze=new c,L=new c,w=new c,J=new c,me=new c,pe=new c,ve=new c;g.prototype[o.types.SPHERE|o.types.CONVEXPOLYHEDRON]=g.prototype.sphereConvex=function(le,he,ge,_e,Ke,Ue,Me,Le){var te=this.v3pool;ge.vsub(_e,Ge);for(var be=he.faceNormals,Ie=he.faces,ze=he.vertices,b=le.radius,O=0;O!==ze.length;O++){var q=ze[O],j=L;Ue.vmult(q,j),_e.vadd(j,j);var Q=Ze;if(j.vsub(ge,Q),Q.norm2()<b*b){Ee=!0;var $=this.createContactEquation(Me,Le,le,he);$.ri.copy(Q),$.ri.normalize(),$.ni.copy($.ri),$.ri.mult(b,$.ri),j.vsub(_e,$.rj),$.ri.vadd(ge,$.ri),$.ri.vsub(Me.position,$.ri),$.rj.vadd(_e,$.rj),$.rj.vsub(Le.position,$.rj),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult);return}}for(var Ee=!1,O=0,Ae=Ie.length;O!==Ae&&Ee===!1;O++){var He=be[O],Ne=Ie[O],Fe=w;Ue.vmult(He,Fe);var ye=J;Ue.vmult(ze[Ne[0]],ye),ye.vadd(_e,ye);var lt=me;Fe.mult(-b,lt),ge.vadd(lt,lt);var nt=pe;lt.vsub(ye,nt);var ut=nt.dot(Fe),Mt=ve;if(ge.vsub(ye,Mt),ut<0&&Mt.dot(Fe)>0){for(var rt=[],qe=0,zt=Ne.length;qe!==zt;qe++){var ft=te.get();Ue.vmult(ze[Ne[qe]],ft),_e.vadd(ft,ft),rt.push(ft)}if(K(rt,Fe,ge)){Ee=!0;var $=this.createContactEquation(Me,Le,le,he);Fe.mult(-b,$.ri),Fe.negate($.ni);var Ye=te.get();Fe.mult(-ut,Ye);var mt=te.get();Fe.mult(-b,mt),ge.vsub(_e,$.rj),$.rj.vadd(mt,$.rj),$.rj.vadd(Ye,$.rj),$.rj.vadd(_e,$.rj),$.rj.vsub(Le.position,$.rj),$.ri.vadd(ge,$.ri),$.ri.vsub(Me.position,$.ri),te.release(Ye),te.release(mt),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult);for(var qe=0,Ct=rt.length;qe!==Ct;qe++)te.release(rt[qe]);return}else for(var qe=0;qe!==Ne.length;qe++){var _t=te.get(),ot=te.get();Ue.vmult(ze[Ne[(qe+1)%Ne.length]],_t),Ue.vmult(ze[Ne[(qe+2)%Ne.length]],ot),_e.vadd(_t,_t),_e.vadd(ot,ot);var yt=Re;ot.vsub(_t,yt);var Vt=Je;yt.unit(Vt);var ct=te.get(),Ht=te.get();ge.vsub(_t,Ht);var pi=Ht.dot(Vt);Vt.mult(pi,ct),ct.vadd(_t,ct);var oi=te.get();if(ct.vsub(ge,oi),pi>0&&pi*pi<yt.norm2()&&oi.norm2()<b*b){var $=this.createContactEquation(Me,Le,le,he);ct.vsub(_e,$.rj),ct.vsub(ge,$.ni),$.ni.normalize(),$.ni.mult(b,$.ri),$.rj.vadd(_e,$.rj),$.rj.vsub(Le.position,$.rj),$.ri.vadd(ge,$.ri),$.ri.vsub(Me.position,$.ri),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult);for(var qe=0,Ct=rt.length;qe!==Ct;qe++)te.release(rt[qe]);te.release(_t),te.release(ot),te.release(ct),te.release(oi),te.release(Ht);return}te.release(_t),te.release(ot),te.release(ct),te.release(oi),te.release(Ht)}for(var qe=0,Ct=rt.length;qe!==Ct;qe++)te.release(rt[qe])}}},new c,new c,g.prototype[o.types.PLANE|o.types.BOX]=g.prototype.planeBox=function(le,he,ge,_e,Ke,Ue,Me,Le){he.convexPolyhedronRepresentation.material=he.material,he.convexPolyhedronRepresentation.collisionResponse=he.collisionResponse,this.planeConvex(le,he.convexPolyhedronRepresentation,ge,_e,Ke,Ue,Me,Le)};var We=new c,Se=new c,se=new c,Xe=new c;g.prototype[o.types.PLANE|o.types.CONVEXPOLYHEDRON]=g.prototype.planeConvex=function(le,he,ge,_e,Ke,Ue,Me,Le){var te=We,be=Se;be.set(0,0,1),Ke.vmult(be,be);for(var Ie=0,ze=se,b=0;b!==he.vertices.length;b++){te.copy(he.vertices[b]),Ue.vmult(te,te),_e.vadd(te,te),te.vsub(ge,ze);var O=be.dot(ze);if(O<=0){var q=this.createContactEquation(Me,Le,le,he),j=Xe;be.mult(be.dot(ze),j),te.vsub(j,j),j.vsub(ge,q.ri),q.ni.copy(be),te.vsub(_e,q.rj),q.ri.vadd(ge,q.ri),q.ri.vsub(Me.position,q.ri),q.rj.vadd(_e,q.rj),q.rj.vsub(Le.position,q.rj),this.result.push(q),Ie++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(q,this.frictionResult)}}this.enableFrictionReduction&&Ie&&this.createFrictionFromAverage(Ie)};var ke=new c,je=new c;g.prototype[o.types.CONVEXPOLYHEDRON]=g.prototype.convexConvex=function(le,he,ge,_e,Ke,Ue,Me,Le,te,be,Ie,ze){var b=ke;if(!(ge.distanceTo(_e)>le.boundingSphereRadius+he.boundingSphereRadius)&&le.findSeparatingAxis(he,ge,Ke,_e,Ue,b,Ie,ze)){var O=[],q=je;le.clipAgainstHull(ge,Ke,he,_e,Ue,b,-100,100,O);for(var j=0,Q=0;Q!==O.length;Q++){var $=this.createContactEquation(Me,Le,le,he,te,be),Ee=$.ri,Ae=$.rj;b.negate($.ni),O[Q].normal.negate(q),q.mult(O[Q].depth,q),O[Q].point.vadd(q,Ee),Ae.copy(O[Q].point),Ee.vsub(ge,Ee),Ae.vsub(_e,Ae),Ee.vadd(ge,Ee),Ee.vsub(Me.position,Ee),Ae.vadd(_e,Ae),Ae.vsub(Le.position,Ae),this.result.push($),j++,this.enableFrictionReduction||this.createFrictionEquationsFromContact($,this.frictionResult)}this.enableFrictionReduction&&j&&this.createFrictionFromAverage(j)}};var Ve=new c,Oe=new c,Qe=new c;g.prototype[o.types.PLANE|o.types.PARTICLE]=g.prototype.planeParticle=function(le,he,ge,_e,Ke,Ue,Me,Le){var te=Ve;te.set(0,0,1),Me.quaternion.vmult(te,te);var be=Oe;_e.vsub(Me.position,be);var Ie=te.dot(be);if(Ie<=0){var ze=this.createContactEquation(Le,Me,he,le);ze.ni.copy(te),ze.ni.negate(ze.ni),ze.ri.set(0,0,0);var b=Qe;te.mult(te.dot(_e),b),_e.vsub(b,b),ze.rj.copy(b),this.result.push(ze),this.createFrictionEquationsFromContact(ze,this.frictionResult)}};var tt=new c;g.prototype[o.types.PARTICLE|o.types.SPHERE]=g.prototype.sphereParticle=function(le,he,ge,_e,Ke,Ue,Me,Le){var te=tt;te.set(0,0,1),_e.vsub(ge,te);var be=te.norm2();if(be<=le.radius*le.radius){var Ie=this.createContactEquation(Le,Me,he,le);te.normalize(),Ie.rj.copy(te),Ie.rj.mult(le.radius,Ie.rj),Ie.ni.copy(te),Ie.ni.negate(Ie.ni),Ie.ri.set(0,0,0),this.result.push(Ie),this.createFrictionEquationsFromContact(Ie,this.frictionResult)}};var k=new h,Ce=new c;new c;var ae=new c,xe=new c,Te=new c;g.prototype[o.types.PARTICLE|o.types.CONVEXPOLYHEDRON]=g.prototype.convexParticle=function(le,he,ge,_e,Ke,Ue,Me,Le){var te=-1,be=ae,Ie=Te,ze=null,b=Ce;if(b.copy(_e),b.vsub(ge,b),Ke.conjugate(k),k.vmult(b,b),le.pointIsInside(b)){le.worldVerticesNeedsUpdate&&le.computeWorldVertices(ge,Ke),le.worldFaceNormalsNeedsUpdate&&le.computeWorldFaceNormals(Ke);for(var O=0,q=le.faces.length;O!==q;O++){var j=[le.worldVertices[le.faces[O][0]]],Q=le.worldFaceNormals[O];_e.vsub(j[0],xe);var $=-Q.dot(xe);(ze===null||Math.abs($)<Math.abs(ze))&&(ze=$,te=O,be.copy(Q))}if(te!==-1){var Ee=this.createContactEquation(Le,Me,he,le);be.mult(ze,Ie),Ie.vadd(_e,Ie),Ie.vsub(ge,Ie),Ee.rj.copy(Ie),be.negate(Ee.ni),Ee.ri.set(0,0,0);var Ae=Ee.ri,He=Ee.rj;Ae.vadd(_e,Ae),Ae.vsub(Le.position,Ae),He.vadd(ge,He),He.vsub(Me.position,He),this.result.push(Ee),this.createFrictionEquationsFromContact(Ee,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},g.prototype[o.types.BOX|o.types.HEIGHTFIELD]=g.prototype.boxHeightfield=function(le,he,ge,_e,Ke,Ue,Me,Le){le.convexPolyhedronRepresentation.material=le.material,le.convexPolyhedronRepresentation.collisionResponse=le.collisionResponse,this.convexHeightfield(le.convexPolyhedronRepresentation,he,ge,_e,Ke,Ue,Me,Le)};var at=new c,st=new c,ht=[0];g.prototype[o.types.CONVEXPOLYHEDRON|o.types.HEIGHTFIELD]=g.prototype.convexHeightfield=function(le,he,ge,_e,Ke,Ue,Me,Le){var te=he.data,be=he.elementSize,Ie=le.boundingSphereRadius,ze=st,b=ht,O=at;d.pointToLocalFrame(_e,Ue,ge,O);var q=Math.floor((O.x-Ie)/be)-1,j=Math.ceil((O.x+Ie)/be)+1,Q=Math.floor((O.y-Ie)/be)-1,$=Math.ceil((O.y+Ie)/be)+1;if(!(j<0||$<0||q>te.length||Q>te[0].length)){q<0&&(q=0),j<0&&(j=0),Q<0&&(Q=0),$<0&&($=0),q>=te.length&&(q=te.length-1),j>=te.length&&(j=te.length-1),$>=te[0].length&&($=te[0].length-1),Q>=te[0].length&&(Q=te[0].length-1);var Ee=[];he.getRectMinMax(q,Q,j,$,Ee);var Ae=Ee[0],He=Ee[1];if(!(O.z-Ie>He||O.z+Ie<Ae))for(var Ne=q;Ne<j;Ne++)for(var Fe=Q;Fe<$;Fe++)he.getConvexTrianglePillar(Ne,Fe,!1),d.pointToWorldFrame(_e,Ue,he.pillarOffset,ze),ge.distanceTo(ze)<he.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.convexConvex(le,he.pillarConvex,ge,ze,Ke,Ue,Me,Le,null,null,b,null),he.getConvexTrianglePillar(Ne,Fe,!0),d.pointToWorldFrame(_e,Ue,he.pillarOffset,ze),ge.distanceTo(ze)<he.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.convexConvex(le,he.pillarConvex,ge,ze,Ke,Ue,Me,Le,null,null,b,null)}};var Rt=new c,$e=new c;g.prototype[o.types.SPHERE|o.types.HEIGHTFIELD]=g.prototype.sphereHeightfield=function(le,he,ge,_e,Ke,Ue,Me,Le){var te=he.data,be=le.radius,Ie=he.elementSize,ze=$e,b=Rt;d.pointToLocalFrame(_e,Ue,ge,b);var O=Math.floor((b.x-be)/Ie)-1,q=Math.ceil((b.x+be)/Ie)+1,j=Math.floor((b.y-be)/Ie)-1,Q=Math.ceil((b.y+be)/Ie)+1;if(!(q<0||Q<0||O>te.length||Q>te[0].length)){O<0&&(O=0),q<0&&(q=0),j<0&&(j=0),Q<0&&(Q=0),O>=te.length&&(O=te.length-1),q>=te.length&&(q=te.length-1),Q>=te[0].length&&(Q=te[0].length-1),j>=te[0].length&&(j=te[0].length-1);var $=[];he.getRectMinMax(O,j,q,Q,$);var Ee=$[0],Ae=$[1];if(!(b.z-be>Ae||b.z+be<Ee))for(var He=this.result,Ne=O;Ne<q;Ne++)for(var Fe=j;Fe<Q;Fe++){var ye=He.length;he.getConvexTrianglePillar(Ne,Fe,!1),d.pointToWorldFrame(_e,Ue,he.pillarOffset,ze),ge.distanceTo(ze)<he.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.sphereConvex(le,he.pillarConvex,ge,ze,Ke,Ue,Me,Le),he.getConvexTrianglePillar(Ne,Fe,!0),d.pointToWorldFrame(_e,Ue,he.pillarOffset,ze),ge.distanceTo(ze)<he.pillarConvex.boundingSphereRadius+le.boundingSphereRadius&&this.sphereConvex(le,he.pillarConvex,ge,ze,Ke,Ue,Me,Le);var lt=He.length-ye;if(lt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(t,i,a){i.exports=y;var n=t("../shapes/Shape"),o=t("../math/Vec3"),s=t("../math/Quaternion"),c=t("../solver/GSSolver");t("../utils/Vec3Pool"),t("../equations/ContactEquation"),t("../equations/FrictionEquation");var d=t("./Narrowphase"),h=t("../utils/EventTarget"),l=t("../collision/ArrayCollisionMatrix"),u=t("../material/Material"),f=t("../material/ContactMaterial"),g=t("../objects/Body"),v=t("../utils/TupleDictionary"),m=t("../collision/RaycastResult"),p=t("../collision/AABB"),x=t("../collision/Ray"),_=t("../collision/NaiveBroadphase");function y(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new o,this.broadphase=new _,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new d(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new v,this.defaultMaterial=new u("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}y.prototype=new h,new p;var E=new x;if(y.prototype.getContactMaterial=function(I,Z){return this.contactMaterialTable.get(I.id,Z.id)},y.prototype.numObjects=function(){return this.bodies.length},y.prototype.collisionMatrixTick=function(){var I=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=I,this.collisionMatrix.reset()},y.prototype.add=y.prototype.addBody=function(I){this.bodies.indexOf(I)===-1&&(I.index=this.bodies.length,this.bodies.push(I),I.world=this,I.initPosition.copy(I.position),I.initVelocity.copy(I.velocity),I.timeLastSleepy=this.time,I instanceof g&&(I.initAngularVelocity.copy(I.angularVelocity),I.initQuaternion.copy(I.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=I,this.dispatchEvent(this.addBodyEvent))},y.prototype.addConstraint=function(I){this.constraints.push(I)},y.prototype.removeConstraint=function(I){var Z=this.constraints.indexOf(I);Z!==-1&&this.constraints.splice(Z,1)},y.prototype.rayTest=function(I,Z,X){X instanceof m?this.raycastClosest(I,Z,{skipBackfaces:!0},X):this.raycastAll(I,Z,{skipBackfaces:!0},X)},y.prototype.raycastAll=function(I,Z,X,T){return X.mode=x.ALL,X.from=I,X.to=Z,X.callback=T,E.intersectWorld(this,X)},y.prototype.raycastAny=function(I,Z,X,T){return X.mode=x.ANY,X.from=I,X.to=Z,X.result=T,E.intersectWorld(this,X)},y.prototype.raycastClosest=function(I,Z,X,T){return X.mode=x.CLOSEST,X.from=I,X.to=Z,X.result=T,E.intersectWorld(this,X)},y.prototype.remove=function(I){I.world=null;var Z=this.bodies.length-1,X=this.bodies,T=X.indexOf(I);if(T!==-1){X.splice(T,1);for(var B=0;B!==X.length;B++)X[B].index=B;this.collisionMatrix.setNumObjects(Z),this.removeBodyEvent.body=I,this.dispatchEvent(this.removeBodyEvent)}},y.prototype.removeBody=y.prototype.remove,y.prototype.addMaterial=function(I){this.materials.push(I)},y.prototype.addContactMaterial=function(I){this.contactmaterials.push(I),this.contactMaterialTable.set(I.materials[0].id,I.materials[1].id,I)},typeof performance>"u"&&(performance={}),!performance.now){var C=Date.now();performance.timing&&performance.timing.navigationStart&&(C=performance.timing.navigationStart),performance.now=function(){return Date.now()-C}}var N=new o;y.prototype.step=function(I,Z,X){if(X=X||10,Z=Z||0,Z===0)this.internalStep(I),this.time+=I;else{var T=Math.floor((this.time+Z)/I)-Math.floor(this.time/I);T=Math.min(T,X);for(var B=performance.now(),A=0;A!==T&&(this.internalStep(I),!(performance.now()-B>I*1e3));A++);this.time+=Z;for(var P=this.time%I,R=P/I,Y=N,ne=this.bodies,ee=0;ee!==ne.length;ee++){var K=ne[ee];K.type!==g.STATIC&&K.sleepState!==g.SLEEPING?(K.position.vsub(K.previousPosition,Y),Y.scale(R,Y),K.position.vadd(Y,K.interpolatedPosition)):(K.interpolatedPosition.copy(K.position),K.interpolatedQuaternion.copy(K.quaternion))}}};var z={type:"postStep"},S={type:"preStep"},M={type:"collide",body:null,contact:null},U=[],V=[],D=[],G=[];new o,new o,new o,new o,new o,new o,new o,new o,new o,new s;var W=new s,oe=new s,F=new o;y.prototype.internalStep=function(I){this.dt=I;var Z=this.contacts,X=D,T=G,B=this.numObjects(),A=this.bodies,P=this.solver,R=this.gravity,Y=this.doProfiling,ne=this.profile,ee=g.DYNAMIC,K,de=this.constraints,ue=V;R.norm();var H=R.x,we=R.y,fe=R.z,re=0;for(Y&&(K=performance.now()),re=0;re!==B;re++){var ce=A[re];if(ce.type&ee){var De=ce.force,Pe=ce.mass;De.x+=Pe*H,De.y+=Pe*we,De.z+=Pe*fe}}for(var re=0,Ge=this.subsystems.length;re!==Ge;re++)this.subsystems[re].update();Y&&(K=performance.now()),X.length=0,T.length=0,this.broadphase.collisionPairs(this,X,T),Y&&(ne.broadphase=performance.now()-K);var ke=de.length;for(re=0;re!==ke;re++){var Re=de[re];if(!Re.collideConnected)for(var Je=X.length-1;Je>=0;Je-=1)(Re.bodyA===X[Je]&&Re.bodyB===T[Je]||Re.bodyB===X[Je]&&Re.bodyA===T[Je])&&(X.splice(Je,1),T.splice(Je,1))}this.collisionMatrixTick(),Y&&(K=performance.now());var Ze=U,L=Z.length;for(re=0;re!==L;re++)Ze.push(Z[re]);Z.length=0;var w=this.frictionEquations.length;for(re=0;re!==w;re++)ue.push(this.frictionEquations[re]);this.frictionEquations.length=0,this.narrowphase.getContacts(X,T,this,Z,Ze,this.frictionEquations,ue),Y&&(ne.narrowphase=performance.now()-K),Y&&(K=performance.now());for(var re=0;re<this.frictionEquations.length;re++)P.addEquation(this.frictionEquations[re]);for(var J=Z.length,me=0;me!==J;me++){var Re=Z[me],ce=Re.bi,pe=Re.bj;Re.si,Re.sj;var ve;if(ce.material&&pe.material?ve=this.getContactMaterial(ce.material,pe.material)||this.defaultContactMaterial:ve=this.defaultContactMaterial,ve.friction,ce.material&&pe.material&&(ce.material.friction>=0&&pe.material.friction>=0&&ce.material.friction*pe.material.friction,ce.material.restitution>=0&&pe.material.restitution>=0&&(Re.restitution=ce.material.restitution*pe.material.restitution)),P.addEquation(Re),ce.allowSleep&&ce.type===g.DYNAMIC&&ce.sleepState===g.SLEEPING&&pe.sleepState===g.AWAKE&&pe.type!==g.STATIC){var We=pe.velocity.norm2()+pe.angularVelocity.norm2(),Se=Math.pow(pe.sleepSpeedLimit,2);We>=Se*2&&(ce._wakeUpAfterNarrowphase=!0)}if(pe.allowSleep&&pe.type===g.DYNAMIC&&pe.sleepState===g.SLEEPING&&ce.sleepState===g.AWAKE&&ce.type!==g.STATIC){var se=ce.velocity.norm2()+ce.angularVelocity.norm2(),Xe=Math.pow(ce.sleepSpeedLimit,2);se>=Xe*2&&(pe._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ce,pe,!0),this.collisionMatrixPrevious.get(ce,pe)||(M.body=pe,M.contact=Re,ce.dispatchEvent(M),M.body=ce,pe.dispatchEvent(M))}for(Y&&(ne.makeContactConstraints=performance.now()-K,K=performance.now()),re=0;re!==B;re++){var ce=A[re];ce._wakeUpAfterNarrowphase&&(ce.wakeUp(),ce._wakeUpAfterNarrowphase=!1)}var ke=de.length;for(re=0;re!==ke;re++){var Re=de[re];Re.update();for(var Je=0,je=Re.equations.length;Je!==je;Je++){var Ve=Re.equations[Je];P.addEquation(Ve)}}P.solve(I,this),Y&&(ne.solve=performance.now()-K),P.removeAllEquations();var Oe=Math.pow;for(re=0;re!==B;re++){var ce=A[re];if(ce.type&ee){var Qe=Oe(1-ce.linearDamping,I),tt=ce.velocity;tt.mult(Qe,tt);var k=ce.angularVelocity;if(k){var Ce=Oe(1-ce.angularDamping,I);k.mult(Ce,k)}}}for(this.dispatchEvent(S),re=0;re!==B;re++){var ce=A[re];ce.preStep&&ce.preStep.call(ce)}Y&&(K=performance.now());var ae=W,xe=oe,Te=this.stepnumber,at=g.DYNAMIC|g.KINEMATIC,st=Te%(this.quatNormalizeSkip+1)===0,ht=this.quatNormalizeFast,Rt=I*.5;for(n.types.PLANE,n.types.CONVEXPOLYHEDRON,re=0;re!==B;re++){var $e=A[re],le=$e.force,he=$e.torque;if($e.type&at&&$e.sleepState!==g.SLEEPING){var ge=$e.velocity,_e=$e.angularVelocity,Ke=$e.position,Ue=$e.quaternion,Me=$e.invMass,Le=$e.invInertiaWorld;ge.x+=le.x*Me*I,ge.y+=le.y*Me*I,ge.z+=le.z*Me*I,$e.angularVelocity&&(Le.vmult(he,F),F.mult(I,F),F.vadd(_e,_e)),Ke.x+=ge.x*I,Ke.y+=ge.y*I,Ke.z+=ge.z*I,$e.angularVelocity&&(ae.set(_e.x,_e.y,_e.z,0),ae.mult(Ue,xe),Ue.x+=Rt*xe.x,Ue.y+=Rt*xe.y,Ue.z+=Rt*xe.z,Ue.w+=Rt*xe.w,st&&(ht?Ue.normalizeFast():Ue.normalize())),$e.aabb&&($e.aabbNeedsUpdate=!0),$e.updateInertiaWorld&&$e.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,Y&&(ne.integrate=performance.now()-K),this.time+=I,this.stepnumber+=1,this.dispatchEvent(z),re=0;re!==B;re++){var ce=A[re],te=ce.postStep;te&&te.call(ce)}if(this.allowSleep)for(re=0;re!==B;re++)A[re].sleepTick(this.time)},y.prototype.clearForces=function(){for(var I=this.bodies,Z=I.length,X=0;X!==Z;X++){var T=I[X];T.force,T.torque,T.force.set(0,0,0),T.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Ms);var hi=Ms.exports;const xn=(r,e,t,i,a=!1)=>{const n=new vr(r,e,t),o=new Br({color:i,wireframe:a});return new ii(n,o)},Gp=()=>{const r=new Ss({color:16777215}),e=new ni().setFromPoints([new ie(0,-.02,0),new ie(0,.02,0)]),t=new zo(e,r),i=new ni().setFromPoints([new ie(-.02,0,0),new ie(.02,0,0)]),a=new zo(i,r),n=new Tr;return n.add(t),n.add(a),n.position.set(0,2,1.4),n};class kp{constructor(e=0,t=30){this.hp=100,this.ammo=e,this.magazineSize=t,this.inMagazine=t,this.inReserve=e-t}reload(){this.inReserve>=this.magazineSize-this.inMagazine?(this.inReserve+=this.inMagazine,this.inMagazine=this.magazineSize,this.inReserve-=this.magazineSize):(this.inReserve+=this.inMagazine,this.inMagazine=this.inReserve,this.inReserve=0)}removeAmmo(){this.inMagazine-=1}}let ca=2e-4,Ar=.25,Vo=2,ha=!1,Ho=0;const Wo=600,qp=3;let $n=200,Es=5;const jp=150;let Or=new kp(60,30),Xp=800;window.speed=(r=.25)=>typeof r=="number"?(Ar=r,`speed updated to: ${r}`):"invalid speed value";window.sens=(r=2e-4)=>typeof r=="number"?(ca=r,`sensitivity updated to: ${r}`):"invalid sensitivity value";window.position=(r,e,t)=>{typeof r=="number"&&typeof e=="number"&&typeof t=="number"&&xt.position.set(r,e,t)};let ma=r=>{let e=document.getElementById("mag"),t=document.getElementById("reserve");e.textContent=r.inMagazine,t.textContent=r.inReserve};const ai=new Wp,xt=new Yt(75,window.innerWidth/window.innerHeight,.1,1e3);xt.position.set(0,5,2);xt.lookAt(0,5,0);const yn=new ys;yn.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(yn.domElement);yn.domElement.id="canvas";let di=new hi.World;di.gravity.set(0,-10,0);di.broadphase=new hi.NaiveBroadphase;di.solver.iterations=10;const Yp=new vn(1e3,1e3),Zp=new Br({color:16777215,side:li,wireframe:!1}),Sn=new ii(Yp,Zp);Sn.rotation.x=-Math.PI/2;Sn.position.y=0;ai.add(Sn);const Kp=new hi.Plane,bs=new hi.Body({mass:100,shape:Kp});bs.userData={physicsMesh:Sn,collisionClass:"floor"};di.addBody(bs);ma(Or);let ws=xn(1,50,1,5495190);ws.position.set(0,0,0);ai.add(ws);let Ts=xn(500,.2,1,9502720);Ts.position.set(0,0,0);ai.add(Ts);let As=xn(1,.2,500,9502720);As.position.set(0,0,0);ai.add(As);let Go=r=>Math.floor(Math.random()*100)%2==0?Math.random()*r*-1:Math.random()*r,Jp=()=>{let r=new hi.Box(new hi.Vec3(2,2,2)),e=10,t=new hi.Body({mass:e});return t.addShape(r),t.angularVelocity.set(1,0,1),t.angularDamping=.01,t.position.set(Go(100),1,Go(100)),t},Rr=[],cn=[],ga=[],Qp=[];for(let r=0;r<20;r++){let e=Jp(),t=xn(2,2,2,6770343,!1);e.add,e.addEventListener("collide",i=>{i.body.userData.collisionClass!="userProjectile"||(ga.push(i.target),ai.remove(i.target.userData.physicsMesh))}),ai.add(t),di.addBody(e),t.userData.physicsBody=e,e.userData={physicsMesh:t,collisionClass:"chaseBox"},Rr.push(t),cn.push(e)}let $p=(r,e)=>{let t=new ie;xt.getWorldPosition(t),t.sub(r.position);const i=5,a=t.clone().normalize().multiplyScalar(i);e.velocity.set(a.x,a.y,a.z)},ef=()=>{for(let r=0;r<Rr.length;r++)$p(Rr[r],cn[r]),Rr[r].position.copy(cn[r].position),Rr[r].quaternion.copy(cn[r].quaternion)};Gp();const jt={};document.addEventListener("keydown",r=>{jt[r.key]=!0});document.addEventListener("keyup",r=>{jt[r.key]=!1});const tf=()=>{const r=new ie(0,0,-1);if(r.applyQuaternion(xt.quaternion),r.setY(0),(jt.ArrowUp||jt.w)&&xt.position.addScaledVector(r,Ar),(jt.ArrowDown||jt.s)&&xt.position.addScaledVector(r,-Ar),jt.ArrowLeft||jt.a){const e=new ie(-1,0,0);e.applyQuaternion(xt.quaternion),xt.position.addScaledVector(e,Ar)}if(jt.ArrowRight||jt.d){const e=new ie(1,0,0);e.applyQuaternion(xt.quaternion),xt.position.addScaledVector(e,Ar)}jt.r&&rf(Or),xt.position.y<Vo&&(xt.position.y=Vo)};let hn=!1,rf=r=>{hn||(hn=!0,setTimeout(()=>{r.reload(),hn=!1,ma(Or)},Xp))};document.addEventListener("keydown",r=>{r.key===" "&&!ha&&nf()});function nf(){ha=!0,Ho=Date.now();const r=xt.position.y;function e(){const t=Date.now()-Ho;if(t>=Wo){xt.position.y=r,ha=!1,console.log(xt.position.y);return}const i=t/Wo;xt.position.y=r+qp*Math.sin(i*Math.PI),requestAnimationFrame(e)}e()}const br=new Nr(0,0,0,"YXZ");document.addEventListener("mousemove",r=>{jt.Alt||(br.x-=r.movementY*ca,br.y-=r.movementX*ca,br.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,br.x)),xt.rotation.copy(br)),r.movementX,r.movementY});let sr=document.querySelector("canvas");sr.onclick=r=>{sr.requestPointerLock=sr.requestPointerLock||sr.mozRequestPointerLock||sr.webkitRequestPointerLock,sr.requestPointerLock()};let un=[];function Rs(r,e,t,i){if(i.inMagazine>0&&!hn){i.removeAmmo(),ma(i);const a=new fa(.1,32,32),n=new Br({color:65280}),o=new ii(a,n);ai.add(o);const s=.1,c=new hi.Sphere(.1),d=new hi.Body({mass:s,shape:c});d.userData={physicsMesh:o,collisionClass:"userProjectile"},di.addBody(d),o.position.copy(r),d.position.copy(o.position);const h=new ie;e.getWorldDirection(h);const l=new hi.Vec3(h.x*$n,h.y*$n,h.z*$n);d.velocity.copy(l);let u=0;const f=setInterval(()=>{u+=1/60,u>=t&&(ai.remove(o),di.remove(d),clearInterval(f))},1e3/60);un.push({mesh:o,body:d,removeAfterSeconds:t})}}let af=()=>{for(let r=un.length-1;r>=0;r--){const e=un[r];e.mesh.position.copy(e.body.position),e.removeAfterSeconds-=1/60,e.removeAfterSeconds<=0&&(ai.remove(e.mesh),di.remove(e.body),un.splice(r,1))}};document.addEventListener("click",()=>{Rs(xt.position,xt,Es,Or)});let va=!1,Cs;function of(){Cs=setInterval(()=>{va&&Rs(xt.position,xt,Es,Or)},jp)}function sf(){clearInterval(Cs)}document.addEventListener("mousedown",()=>{va=!0,of()});document.addEventListener("mouseup",()=>{va=!1,sf()});let lf=(r,e)=>{r&&(di.remove(r),ga.splice(e,1))},cf=(r,e)=>{r&&(ai.remove(r),shapesToRemove.splice(e,1))};const Ls=()=>{di.step(1/60),af(),ef(),tf(),ga.forEach(lf),Qp.forEach(cf),requestAnimationFrame(Ls),yn.render(ai,xt)};Ls();
