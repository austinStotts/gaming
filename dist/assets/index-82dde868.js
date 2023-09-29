(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hs="156",Uo=0,_s=1,Do=2,Wa=1,No=2,Mn=3,In=0,ze=1,cn=2,Cn=0,hi=1,xs=2,ys=3,Ms=4,Fo=5,ci=100,Bo=101,Oo=102,Ss=103,Es=104,zo=200,Vo=201,Go=202,Ho=203,ka=204,Xa=205,Wo=206,ko=207,Xo=208,qo=209,Yo=210,Zo=0,Ko=1,jo=2,ts=3,$o=4,Qo=5,Jo=6,tl=7,qa=0,el=1,nl=2,Pn=0,il=1,rl=2,sl=3,al=4,ol=5,Ya=300,fi=301,pi=302,es=303,ns=304,pr=306,is=1e3,tn=1001,rs=1002,Fe=1003,ws=1004,Sr=1005,Ye=1006,ll=1007,Li=1008,Ln=1009,cl=1010,ul=1011,ds=1012,Za=1013,bn=1014,Rn=1015,Ii=1016,Ka=1017,ja=1018,Vn=1020,hl=1021,en=1023,dl=1024,fl=1025,Gn=1026,mi=1027,pl=1028,$a=1029,ml=1030,Qa=1031,Ja=1033,Er=33776,wr=33777,Tr=33778,Ar=33779,Ts=35840,As=35841,bs=35842,Rs=35843,vl=36196,Cs=37492,Ps=37496,Ls=37808,Is=37809,Us=37810,Ds=37811,Ns=37812,Fs=37813,Bs=37814,Os=37815,zs=37816,Vs=37817,Gs=37818,Hs=37819,Ws=37820,ks=37821,br=36492,Xs=36494,qs=36495,gl=36283,Ys=36284,Zs=36285,Ks=36286,to=3e3,Hn=3001,_l=3200,xl=3201,yl=0,Ml=1,Wn="",ve="srgb",dn="srgb-linear",mr="display-p3",Rr=7680,Sl=519,El=512,wl=513,Tl=514,Al=515,bl=516,Rl=517,Cl=518,Pl=519,js=35044,$s="300 es",ss=1035,Sn=2e3,dr=2001;class gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const r=a.indexOf(e);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cr=Math.PI/180,as=180/Math.PI;function Ui(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function Ll(i,t){return(i%t+t)%t}function Pr(i,t,e){return(1-e)*i+e*t}function Qs(i){return(i&i-1)===0&&i!==0}function os(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class fe{constructor(t=0,e=0){fe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6],this.y=a[1]*e+a[4]*n+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),a=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*a+t.x,this.y=r*a+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,e,n,a,r,s,o,c,d){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,d)}set(t,e,n,a,r,s,o,c,d){const u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=s,u[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[3],c=n[6],d=n[1],u=n[4],l=n[7],h=n[2],p=n[5],v=n[8],g=a[0],m=a[3],f=a[6],x=a[1],y=a[4],_=a[7],S=a[2],R=a[5],F=a[8];return r[0]=s*g+o*x+c*S,r[3]=s*m+o*y+c*R,r[6]=s*f+o*_+c*F,r[1]=d*g+u*x+l*S,r[4]=d*m+u*y+l*R,r[7]=d*f+u*_+l*F,r[2]=h*g+p*x+v*S,r[5]=h*m+p*y+v*R,r[8]=h*f+p*_+v*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],d=t[7],u=t[8];return e*s*u-e*o*d-n*r*u+n*o*c+a*r*d-a*s*c}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],d=t[7],u=t[8],l=u*s-o*d,h=o*c-u*r,p=d*r-s*c,v=e*l+n*h+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(a*d-u*n)*g,t[2]=(o*n-a*s)*g,t[3]=h*g,t[4]=(u*e-a*c)*g,t[5]=(a*r-o*e)*g,t[6]=p*g,t[7]=(n*c-d*e)*g,t[8]=(s*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,a,r,s,o){const c=Math.cos(r),d=Math.sin(r);return this.set(n*c,n*d,-n*(c*s+d*o)+s+t,-a*d,a*c,-a*(-d*s+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Lr.makeScale(t,e)),this}rotate(t){return this.premultiply(Lr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<9;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new re;function eo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Il(){const i=fr("canvas");return i.style.display="block",i}const Js={};function Pi(i){i in Js||(Js[i]=!0,console.warn(i))}function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ul=new re().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Dl=new re().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Nl(i){return i.convertSRGBToLinear().applyMatrix3(Dl)}function Fl(i){return i.applyMatrix3(Ul).convertLinearToSRGB()}const Bl={[dn]:i=>i,[ve]:i=>i.convertSRGBToLinear(),[mr]:Nl},Ol={[dn]:i=>i,[ve]:i=>i.convertLinearToSRGB(),[mr]:Fl},Ke={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return dn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Bl[t],a=Ol[e];if(n===void 0||a===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return a(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}};let qn;class no{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qn===void 0&&(qn=fr("canvas")),qn.width=t.width,qn.height=t.height;const n=qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const a=n.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=di(r[s]/255)*255;return n.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zl=0;class io{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=Ui(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Ur(a[s].image)):r.push(Ur(a[s]))}else r=Ur(a);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ur(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?no.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vl=0;class ke extends gi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=tn,a=tn,r=Ye,s=Li,o=en,c=Ln,d=ke.DEFAULT_ANISOTROPY,u=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=Ui(),this.name="",this.source=new io(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hn?ve:Wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ya)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case is:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case rs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case is:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case rs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ve?Hn:to}set encoding(t){Pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Hn?ve:Wn}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Ya;ke.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,a=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,a){return this.x=t,this.y=e,this.z=n,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*a+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,a,r;const c=t.elements,d=c[0],u=c[4],l=c[8],h=c[1],p=c[5],v=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(d+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(d+1)/2,_=(p+1)/2,S=(f+1)/2,R=(u+h)/4,F=(l+g)/4,z=(v+m)/4;return y>_&&y>S?y<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(y),a=R/n,r=F/n):_>S?_<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(_),n=R/a,r=z/a):S<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(S),n=F/r,a=z/r),this.set(n,a,r,e),this}let x=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(l-g)/x,this.z=(h-u)/x,this.w=Math.acos((d+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gl extends gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const a={width:t,height:e,depth:1};n.encoding!==void 0&&(Pi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hn?ve:Wn),this.texture=new ke(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ye,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new io(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends Gl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ro extends ke{constructor(t=null,e=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hl extends ke{constructor(t=null,e=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=0,e=0,n=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=a}static slerpFlat(t,e,n,a,r,s,o){let c=n[a+0],d=n[a+1],u=n[a+2],l=n[a+3];const h=r[s+0],p=r[s+1],v=r[s+2],g=r[s+3];if(o===0){t[e+0]=c,t[e+1]=d,t[e+2]=u,t[e+3]=l;return}if(o===1){t[e+0]=h,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(l!==g||c!==h||d!==p||u!==v){let m=1-o;const f=c*h+d*p+u*v+l*g,x=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const S=Math.sqrt(y),R=Math.atan2(S,f*x);m=Math.sin(m*R)/S,o=Math.sin(o*R)/S}const _=o*x;if(c=c*m+h*_,d=d*m+p*_,u=u*m+v*_,l=l*m+g*_,m===1-o){const S=1/Math.sqrt(c*c+d*d+u*u+l*l);c*=S,d*=S,u*=S,l*=S}}t[e]=c,t[e+1]=d,t[e+2]=u,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,a,r,s){const o=n[a],c=n[a+1],d=n[a+2],u=n[a+3],l=r[s],h=r[s+1],p=r[s+2],v=r[s+3];return t[e]=o*v+u*l+c*p-d*h,t[e+1]=c*v+u*h+d*l-o*p,t[e+2]=d*v+u*p+o*h-c*l,t[e+3]=u*v-o*l-c*h-d*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,a){return this._x=t,this._y=e,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,c=Math.sin,d=o(n/2),u=o(a/2),l=o(r/2),h=c(n/2),p=c(a/2),v=c(r/2);switch(s){case"XYZ":this._x=h*u*l+d*p*v,this._y=d*p*l-h*u*v,this._z=d*u*v+h*p*l,this._w=d*u*l-h*p*v;break;case"YXZ":this._x=h*u*l+d*p*v,this._y=d*p*l-h*u*v,this._z=d*u*v-h*p*l,this._w=d*u*l+h*p*v;break;case"ZXY":this._x=h*u*l-d*p*v,this._y=d*p*l+h*u*v,this._z=d*u*v+h*p*l,this._w=d*u*l-h*p*v;break;case"ZYX":this._x=h*u*l-d*p*v,this._y=d*p*l+h*u*v,this._z=d*u*v-h*p*l,this._w=d*u*l+h*p*v;break;case"YZX":this._x=h*u*l+d*p*v,this._y=d*p*l+h*u*v,this._z=d*u*v-h*p*l,this._w=d*u*l-h*p*v;break;case"XZY":this._x=h*u*l-d*p*v,this._y=d*p*l-h*u*v,this._z=d*u*v+h*p*l,this._w=d*u*l+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,a=Math.sin(n);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],a=e[4],r=e[8],s=e[1],o=e[5],c=e[9],d=e[2],u=e[6],l=e[10],h=n+o+l;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-d)*p,this._z=(s-a)*p}else if(n>o&&n>l){const p=2*Math.sqrt(1+n-o-l);this._w=(u-c)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+d)/p}else if(o>l){const p=2*Math.sqrt(1+o-n-l);this._w=(r-d)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+l-n-o);this._w=(s-a)/p,this._x=(r+d)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const a=Math.min(1,e/n);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,a=t._y,r=t._z,s=t._w,o=e._x,c=e._y,d=e._z,u=e._w;return this._x=n*u+s*o+a*d-r*c,this._y=a*u+s*c+r*o-n*d,this._z=r*u+s*d+n*c-a*o,this._w=s*u-n*o-a*c-r*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+n*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=n,this._y=a,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*s+e*this._w,this._x=p*n+e*this._x,this._y=p*a+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(c),u=Math.atan2(d,o),l=Math.sin((1-e)*u)/d,h=Math.sin(e*u)/d;return this._w=s*l+this._w*h,this._x=n*l+this._x*h,this._y=a*l+this._y*h,this._z=r*l+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),a=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(a),n*Math.sin(r),n*Math.cos(r),e*Math.sin(a))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,e=0,n=0){nt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ta.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ta.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*a,this.y=r[1]*e+r[4]*n+r[7]*a,this.z=r[2]*e+r[5]*n+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,a=this.z,r=t.x,s=t.y,o=t.z,c=t.w,d=c*e+s*a-o*n,u=c*n+o*e-r*a,l=c*a+r*n-s*e,h=-r*e-s*n-o*a;return this.x=d*c+h*-r+u*-o-l*-s,this.y=u*c+h*-s+l*-r-d*-o,this.z=l*c+h*-o+d*-s-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*a,this.y=r[1]*e+r[5]*n+r[9]*a,this.z=r[2]*e+r[6]*n+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,a=t.y,r=t.z,s=e.x,o=e.y,c=e.z;return this.x=a*c-r*o,this.y=r*s-n*c,this.z=n*o-a*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dr.copy(this).projectOnVector(t),this.sub(Dr)}reflect(t){return this.sub(Dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,a=this.z-t.z;return e*e+n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const a=Math.sin(e)*t;return this.x=a*Math.sin(n),this.y=Math.cos(e)*t,this.z=a*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new nt,ta=new Di;class Ni{constructor(t=new nt(1/0,1/0,1/0),e=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Yn.copy(t.boundingBox),Yn.applyMatrix4(t.matrixWorld),this.union(Yn);else{const a=t.geometry;if(a!==void 0)if(e&&a.attributes!==void 0&&a.attributes.position!==void 0){const r=a.attributes.position;for(let s=0,o=r.count;s<o;s++)vn.fromBufferAttribute(r,s).applyMatrix4(t.matrixWorld),this.expandByPoint(vn)}else a.boundingBox===null&&a.computeBoundingBox(),Yn.copy(a.boundingBox),Yn.applyMatrix4(t.matrixWorld),this.union(Yn)}const n=t.children;for(let a=0,r=n.length;a<r;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mi),Vi.subVectors(this.max,Mi),Zn.subVectors(t.a,Mi),Kn.subVectors(t.b,Mi),jn.subVectors(t.c,Mi),En.subVectors(Kn,Zn),wn.subVectors(jn,Kn),Un.subVectors(Zn,jn);let e=[0,-En.z,En.y,0,-wn.z,wn.y,0,-Un.z,Un.y,En.z,0,-En.x,wn.z,0,-wn.x,Un.z,0,-Un.x,-En.y,En.x,0,-wn.y,wn.x,0,-Un.y,Un.x,0];return!Nr(e,Zn,Kn,jn,Vi)||(e=[1,0,0,0,1,0,0,0,1],!Nr(e,Zn,Kn,jn,Vi))?!1:(Gi.crossVectors(En,wn),e=[Gi.x,Gi.y,Gi.z],Nr(e,Zn,Kn,jn,Vi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mn=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],vn=new nt,Yn=new Ni,Zn=new nt,Kn=new nt,jn=new nt,En=new nt,wn=new nt,Un=new nt,Mi=new nt,Vi=new nt,Gi=new nt,Dn=new nt;function Nr(i,t,e,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){Dn.fromArray(i,r);const o=a.x*Math.abs(Dn.x)+a.y*Math.abs(Dn.y)+a.z*Math.abs(Dn.z),c=t.dot(Dn),d=e.dot(Dn),u=n.dot(Dn);if(Math.max(-Math.max(c,d,u),Math.min(c,d,u))>o)return!1}return!0}const Wl=new Ni,Si=new nt,Fr=new nt;class vr{constructor(t=new nt,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wl.setFromPoints(t).getCenter(n);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Si.subVectors(t,this.center);const e=Si.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),a=(n-this.radius)*.5;this.center.addScaledVector(Si,a/n),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Si.copy(t.center).add(Fr)),this.expandByPoint(Si.copy(t.center).sub(Fr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new nt,Br=new nt,Hi=new nt,Tn=new nt,Or=new nt,Wi=new nt,zr=new nt;class so{constructor(t=new nt,e=new nt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,a){Br.copy(t).add(e).multiplyScalar(.5),Hi.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(Br);const r=t.distanceTo(e)*.5,s=-this.direction.dot(Hi),o=Tn.dot(this.direction),c=-Tn.dot(Hi),d=Tn.lengthSq(),u=Math.abs(1-s*s);let l,h,p,v;if(u>0)if(l=s*c-o,h=s*o-c,v=r*u,l>=0)if(h>=-v)if(h<=v){const g=1/u;l*=g,h*=g,p=l*(l+s*h+2*o)+h*(s*l+h+2*c)+d}else h=r,l=Math.max(0,-(s*h+o)),p=-l*l+h*(h+2*c)+d;else h=-r,l=Math.max(0,-(s*h+o)),p=-l*l+h*(h+2*c)+d;else h<=-v?(l=Math.max(0,-(-s*r+o)),h=l>0?-r:Math.min(Math.max(-r,-c),r),p=-l*l+h*(h+2*c)+d):h<=v?(l=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+d):(l=Math.max(0,-(s*r+o)),h=l>0?r:Math.min(Math.max(-r,-c),r),p=-l*l+h*(h+2*c)+d);else h=s>0?-r:r,l=Math.max(0,-(s*h+o)),p=-l*l+h*(h+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,l),a&&a.copy(Br).addScaledVector(Hi,h),p}intersectSphere(t,e){gn.subVectors(t.center,this.origin);const n=gn.dot(this.direction),a=gn.dot(gn)-n*n,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,a,r,s,o,c;const d=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,h=this.origin;return d>=0?(n=(t.min.x-h.x)*d,a=(t.max.x-h.x)*d):(n=(t.max.x-h.x)*d,a=(t.min.x-h.x)*d),u>=0?(r=(t.min.y-h.y)*u,s=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,s=(t.min.y-h.y)*u),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),l>=0?(o=(t.min.z-h.z)*l,c=(t.max.z-h.z)*l):(o=(t.max.z-h.z)*l,c=(t.min.z-h.z)*l),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,n,a,r){Or.subVectors(e,t),Wi.subVectors(n,t),zr.crossVectors(Or,Wi);let s=this.direction.dot(zr),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Tn.subVectors(this.origin,t);const c=o*this.direction.dot(Wi.crossVectors(Tn,Wi));if(c<0)return null;const d=o*this.direction.dot(Or.cross(Tn));if(d<0||c+d>s)return null;const u=-o*Tn.dot(zr);return u<0?null:this.at(u/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,a,r,s,o,c,d,u,l,h,p,v,g,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,d,u,l,h,p,v,g,m)}set(t,e,n,a,r,s,o,c,d,u,l,h,p,v,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=c,f[2]=d,f[6]=u,f[10]=l,f[14]=h,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,a=1/$n.setFromMatrixColumn(t,0).length(),r=1/$n.setFromMatrixColumn(t,1).length(),s=1/$n.setFromMatrixColumn(t,2).length();return e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,a=t.y,r=t.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(a),d=Math.sin(a),u=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const h=s*u,p=s*l,v=o*u,g=o*l;e[0]=c*u,e[4]=-c*l,e[8]=d,e[1]=p+v*d,e[5]=h-g*d,e[9]=-o*c,e[2]=g-h*d,e[6]=v+p*d,e[10]=s*c}else if(t.order==="YXZ"){const h=c*u,p=c*l,v=d*u,g=d*l;e[0]=h+g*o,e[4]=v*o-p,e[8]=s*d,e[1]=s*l,e[5]=s*u,e[9]=-o,e[2]=p*o-v,e[6]=g+h*o,e[10]=s*c}else if(t.order==="ZXY"){const h=c*u,p=c*l,v=d*u,g=d*l;e[0]=h-g*o,e[4]=-s*l,e[8]=v+p*o,e[1]=p+v*o,e[5]=s*u,e[9]=g-h*o,e[2]=-s*d,e[6]=o,e[10]=s*c}else if(t.order==="ZYX"){const h=s*u,p=s*l,v=o*u,g=o*l;e[0]=c*u,e[4]=v*d-p,e[8]=h*d+g,e[1]=c*l,e[5]=g*d+h,e[9]=p*d-v,e[2]=-d,e[6]=o*c,e[10]=s*c}else if(t.order==="YZX"){const h=s*c,p=s*d,v=o*c,g=o*d;e[0]=c*u,e[4]=g-h*l,e[8]=v*l+p,e[1]=l,e[5]=s*u,e[9]=-o*u,e[2]=-d*u,e[6]=p*l+v,e[10]=h-g*l}else if(t.order==="XZY"){const h=s*c,p=s*d,v=o*c,g=o*d;e[0]=c*u,e[4]=-l,e[8]=d*u,e[1]=h*l+g,e[5]=s*u,e[9]=p*l-v,e[2]=v*l-p,e[6]=o*u,e[10]=g*l+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kl,t,Xl)}lookAt(t,e,n){const a=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),An.crossVectors(n,He),An.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),An.crossVectors(n,He)),An.normalize(),ki.crossVectors(He,An),a[0]=An.x,a[4]=ki.x,a[8]=He.x,a[1]=An.y,a[5]=ki.y,a[9]=He.y,a[2]=An.z,a[6]=ki.z,a[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[4],c=n[8],d=n[12],u=n[1],l=n[5],h=n[9],p=n[13],v=n[2],g=n[6],m=n[10],f=n[14],x=n[3],y=n[7],_=n[11],S=n[15],R=a[0],F=a[4],z=a[8],M=a[12],E=a[1],U=a[5],V=a[9],D=a[13],H=a[2],W=a[6],rt=a[10],B=a[14],I=a[3],j=a[7],G=a[11],A=a[15];return r[0]=s*R+o*E+c*H+d*I,r[4]=s*F+o*U+c*W+d*j,r[8]=s*z+o*V+c*rt+d*G,r[12]=s*M+o*D+c*B+d*A,r[1]=u*R+l*E+h*H+p*I,r[5]=u*F+l*U+h*W+p*j,r[9]=u*z+l*V+h*rt+p*G,r[13]=u*M+l*D+h*B+p*A,r[2]=v*R+g*E+m*H+f*I,r[6]=v*F+g*U+m*W+f*j,r[10]=v*z+g*V+m*rt+f*G,r[14]=v*M+g*D+m*B+f*A,r[3]=x*R+y*E+_*H+S*I,r[7]=x*F+y*U+_*W+S*j,r[11]=x*z+y*V+_*rt+S*G,r[15]=x*M+y*D+_*B+S*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],a=t[8],r=t[12],s=t[1],o=t[5],c=t[9],d=t[13],u=t[2],l=t[6],h=t[10],p=t[14],v=t[3],g=t[7],m=t[11],f=t[15];return v*(+r*c*l-a*d*l-r*o*h+n*d*h+a*o*p-n*c*p)+g*(+e*c*p-e*d*h+r*s*h-a*s*p+a*d*u-r*c*u)+m*(+e*d*l-e*o*p-r*s*l+n*s*p+r*o*u-n*d*u)+f*(-a*o*u-e*c*l+e*o*h+a*s*l-n*s*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],d=t[7],u=t[8],l=t[9],h=t[10],p=t[11],v=t[12],g=t[13],m=t[14],f=t[15],x=l*m*d-g*h*d+g*c*p-o*m*p-l*c*f+o*h*f,y=v*h*d-u*m*d-v*c*p+s*m*p+u*c*f-s*h*f,_=u*g*d-v*l*d+v*o*p-s*g*p-u*o*f+s*l*f,S=v*l*c-u*g*c-v*o*h+s*g*h+u*o*m-s*l*m,R=e*x+n*y+a*_+r*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/R;return t[0]=x*F,t[1]=(g*h*r-l*m*r-g*a*p+n*m*p+l*a*f-n*h*f)*F,t[2]=(o*m*r-g*c*r+g*a*d-n*m*d-o*a*f+n*c*f)*F,t[3]=(l*c*r-o*h*r-l*a*d+n*h*d+o*a*p-n*c*p)*F,t[4]=y*F,t[5]=(u*m*r-v*h*r+v*a*p-e*m*p-u*a*f+e*h*f)*F,t[6]=(v*c*r-s*m*r-v*a*d+e*m*d+s*a*f-e*c*f)*F,t[7]=(s*h*r-u*c*r+u*a*d-e*h*d-s*a*p+e*c*p)*F,t[8]=_*F,t[9]=(v*l*r-u*g*r-v*n*p+e*g*p+u*n*f-e*l*f)*F,t[10]=(s*g*r-v*o*r+v*n*d-e*g*d-s*n*f+e*o*f)*F,t[11]=(u*o*r-s*l*r-u*n*d+e*l*d+s*n*p-e*o*p)*F,t[12]=S*F,t[13]=(u*g*a-v*l*a+v*n*h-e*g*h-u*n*m+e*l*m)*F,t[14]=(v*o*a-s*g*a-v*n*c+e*g*c+s*n*m-e*o*m)*F,t[15]=(s*l*a-u*o*a+u*n*c-e*l*c-s*n*h+e*o*h)*F,this}scale(t){const e=this.elements,n=t.x,a=t.y,r=t.z;return e[0]*=n,e[4]*=a,e[8]*=r,e[1]*=n,e[5]*=a,e[9]*=r,e[2]*=n,e[6]*=a,e[10]*=r,e[3]*=n,e[7]*=a,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,a))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),a=Math.sin(e),r=1-n,s=t.x,o=t.y,c=t.z,d=r*s,u=r*o;return this.set(d*s+n,d*o-a*c,d*c+a*o,0,d*o+a*c,u*o+n,u*c-a*s,0,d*c-a*o,u*c+a*s,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,a,r,s){return this.set(1,n,r,0,t,1,s,0,e,a,1,0,0,0,0,1),this}compose(t,e,n){const a=this.elements,r=e._x,s=e._y,o=e._z,c=e._w,d=r+r,u=s+s,l=o+o,h=r*d,p=r*u,v=r*l,g=s*u,m=s*l,f=o*l,x=c*d,y=c*u,_=c*l,S=n.x,R=n.y,F=n.z;return a[0]=(1-(g+f))*S,a[1]=(p+_)*S,a[2]=(v-y)*S,a[3]=0,a[4]=(p-_)*R,a[5]=(1-(h+f))*R,a[6]=(m+x)*R,a[7]=0,a[8]=(v+y)*F,a[9]=(m-x)*F,a[10]=(1-(h+g))*F,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,n){const a=this.elements;let r=$n.set(a[0],a[1],a[2]).length();const s=$n.set(a[4],a[5],a[6]).length(),o=$n.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],je.copy(this);const d=1/r,u=1/s,l=1/o;return je.elements[0]*=d,je.elements[1]*=d,je.elements[2]*=d,je.elements[4]*=u,je.elements[5]*=u,je.elements[6]*=u,je.elements[8]*=l,je.elements[9]*=l,je.elements[10]*=l,e.setFromRotationMatrix(je),n.x=r,n.y=s,n.z=o,this}makePerspective(t,e,n,a,r,s,o=Sn){const c=this.elements,d=2*r/(e-t),u=2*r/(n-a),l=(e+t)/(e-t),h=(n+a)/(n-a);let p,v;if(o===Sn)p=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===dr)p=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,a,r,s,o=Sn){const c=this.elements,d=1/(e-t),u=1/(n-a),l=1/(s-r),h=(e+t)*d,p=(n+a)*u;let v,g;if(o===Sn)v=(s+r)*l,g=-2*l;else if(o===dr)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<16;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $n=new nt,je=new be,kl=new nt(0,0,0),Xl=new nt(1,1,1),An=new nt,ki=new nt,He=new nt,ea=new be,na=new Di;class Fi{constructor(t=0,e=0,n=0,a=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,a=this._order){return this._x=t,this._y=e,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],c=a[1],d=a[5],u=a[9],l=a[2],h=a[6],p=a[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-s,d)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,d));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,d),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ea.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ea,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return na.setFromEuler(this),this.setFromQuaternion(na,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class ao{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ql=0;const ia=new nt,Qn=new Di,_n=new be,Xi=new nt,Ei=new nt,Yl=new nt,Zl=new Di,ra=new nt(1,0,0),sa=new nt(0,1,0),aa=new nt(0,0,1),Kl={type:"added"},jl={type:"removed"};class Ve extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new nt,e=new Fi,n=new Di,a=new nt(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new be},normalMatrix:{value:new re}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.premultiply(Qn),this}rotateX(t){return this.rotateOnAxis(ra,t)}rotateY(t){return this.rotateOnAxis(sa,t)}rotateZ(t){return this.rotateOnAxis(aa,t)}translateOnAxis(t,e){return ia.copy(t).applyQuaternion(this.quaternion),this.position.add(ia.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ra,t)}translateY(t){return this.translateOnAxis(sa,t)}translateZ(t){return this.translateOnAxis(aa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xi.copy(t):Xi.set(t,e,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Ei,Xi,this.up):_n.lookAt(Xi,Ei,this.up),this.quaternion.setFromRotationMatrix(_n),a&&(_n.extractRotation(a.matrixWorld),Qn.setFromRotationMatrix(_n),this.quaternion.premultiply(Qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Kl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let a=0,r=this.children.length;a<r;a++){const s=this.children[a].getObjectsByProperty(t,e);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,t,Yl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,Zl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,a=e.length;n<a;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++){const o=a[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let d=0,u=c.length;d<u;d++){const l=c[d];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,d=this.material.length;c<d;c++)o.push(r(t.materials,this.material[c]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(r(t.animations,c))}}if(e){const o=s(t.geometries),c=s(t.materials),d=s(t.textures),u=s(t.images),l=s(t.shapes),h=s(t.skeletons),p=s(t.animations),v=s(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),u.length>0&&(n.images=u),l.length>0&&(n.shapes=l),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=a,n;function s(o){const c=[];for(const d in o){const u=o[d];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const a=t.children[n];this.add(a.clone())}return this}}Ve.DEFAULT_UP=new nt(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new nt,xn=new nt,Vr=new nt,yn=new nt,Jn=new nt,ti=new nt,oa=new nt,Gr=new nt,Hr=new nt,Wr=new nt;let qi=!1;class Je{constructor(t=new nt,e=new nt,n=new nt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,a){a.subVectors(n,e),$e.subVectors(t,e),a.cross($e);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,e,n,a,r){$e.subVectors(a,e),xn.subVectors(n,e),Vr.subVectors(t,e);const s=$e.dot($e),o=$e.dot(xn),c=$e.dot(Vr),d=xn.dot(xn),u=xn.dot(Vr),l=s*d-o*o;if(l===0)return r.set(-2,-1,-1);const h=1/l,p=(d*c-o*u)*h,v=(s*u-o*c)*h;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,a){return this.getBarycoord(t,e,n,a,yn),yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getUV(t,e,n,a,r,s,o,c){return qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qi=!0),this.getInterpolation(t,e,n,a,r,s,o,c)}static getInterpolation(t,e,n,a,r,s,o,c){return this.getBarycoord(t,e,n,a,yn),c.setScalar(0),c.addScaledVector(r,yn.x),c.addScaledVector(s,yn.y),c.addScaledVector(o,yn.z),c}static isFrontFacing(t,e,n,a){return $e.subVectors(n,e),xn.subVectors(t,e),$e.cross(xn).dot(a)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,a){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,n,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),$e.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,a,r){return qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qi=!0),Je.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}getInterpolation(t,e,n,a,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,a=this.b,r=this.c;let s,o;Jn.subVectors(a,n),ti.subVectors(r,n),Gr.subVectors(t,n);const c=Jn.dot(Gr),d=ti.dot(Gr);if(c<=0&&d<=0)return e.copy(n);Hr.subVectors(t,a);const u=Jn.dot(Hr),l=ti.dot(Hr);if(u>=0&&l<=u)return e.copy(a);const h=c*l-u*d;if(h<=0&&c>=0&&u<=0)return s=c/(c-u),e.copy(n).addScaledVector(Jn,s);Wr.subVectors(t,r);const p=Jn.dot(Wr),v=ti.dot(Wr);if(v>=0&&p<=v)return e.copy(r);const g=p*d-c*v;if(g<=0&&d>=0&&v<=0)return o=d/(d-v),e.copy(n).addScaledVector(ti,o);const m=u*v-p*l;if(m<=0&&l-u>=0&&p-v>=0)return oa.subVectors(r,a),o=(l-u)/(l-u+(p-v)),e.copy(a).addScaledVector(oa,o);const f=1/(m+g+h);return s=g*f,o=h*f,e.copy(n).addScaledVector(Jn,s).addScaledVector(ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let $l=0;class Bi extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=hi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Xa,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(e){const r=a(t.textures),s=a(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const a=e.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const oo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qe={h:0,s:0,l:0},Yi={h:0,s:0,l:0};function kr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class pe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ke.toWorkingColorSpace(this,e),this}setRGB(t,e,n,a=Ke.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ke.toWorkingColorSpace(this,a),this}setHSL(t,e,n,a=Ke.workingColorSpace){if(t=Ll(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=kr(s,r,t+1/3),this.g=kr(s,r,t),this.b=kr(s,r,t-1/3)}return Ke.toWorkingColorSpace(this,a),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){const n=oo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return Ke.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Oe(Ue.r*255,0,255))*65536+Math.round(Oe(Ue.g*255,0,255))*256+Math.round(Oe(Ue.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,a=Ue.g,r=Ue.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let c,d;const u=(o+s)/2;if(o===s)c=0,d=0;else{const l=s-o;switch(d=u<=.5?l/(s+o):l/(2-s-o),s){case n:c=(a-r)/l+(a<r?6:0);break;case a:c=(r-n)/l+2;break;case r:c=(n-a)/l+4;break}c/=6}return t.h=c,t.s=d,t.l=u,t}getRGB(t,e=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=ve){Ke.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,a=Ue.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(t,e,n){return this.getHSL(Qe),Qe.h+=t,Qe.s+=e,Qe.l+=n,this.setHSL(Qe.h,Qe.s,Qe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qe),t.getHSL(Yi);const n=Pr(Qe.h,Yi.h,e),a=Pr(Qe.s,Yi.s,e),r=Pr(Qe.l,Yi.l,e);return this.setHSL(n,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,a=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*a,this.g=r[1]*e+r[4]*n+r[7]*a,this.b=r[2]*e+r[5]*n+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new pe;pe.NAMES=oo;class Oi extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new nt,Zi=new fe;class un{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=js,this.updateRange={offset:0,count:-1},this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=e.array[n+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zi.fromBufferAttribute(this,e),Zi.applyMatrix3(t),this.setXY(e,Zi.x,Zi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,a){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),a=Be(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this}setXYZW(t,e,n,a,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),a=Be(a,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==js&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class lo extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class co extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class rn extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ql=0;const Xe=new be,Xr=new Ve,ei=new nt,We=new Ni,wi=new Ni,Ae=new nt;class sn extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eo(t)?co:lo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Xr.lookAt(t),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){const e=[];for(let n=0,a=t.length;n<a;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,a=e.length;n<a;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new nt,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];wi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(We.min,wi.min),We.expandByPoint(Ae),Ae.addVectors(We.max,wi.max),We.expandByPoint(Ae)):(We.expandByPoint(wi.min),We.expandByPoint(wi.max))}We.getCenter(n);let a=0;for(let r=0,s=t.count;r<s;r++)Ae.fromBufferAttribute(t,r),a=Math.max(a,n.distanceToSquared(Ae));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],c=this.morphTargetsRelative;for(let d=0,u=o.count;d<u;d++)Ae.fromBufferAttribute(o,d),c&&(ei.fromBufferAttribute(t,d),Ae.add(ei)),a=Math.max(a,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,a=e.position.array,r=e.normal.array,s=e.uv.array,o=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,d=[],u=[];for(let E=0;E<o;E++)d[E]=new nt,u[E]=new nt;const l=new nt,h=new nt,p=new nt,v=new fe,g=new fe,m=new fe,f=new nt,x=new nt;function y(E,U,V){l.fromArray(a,E*3),h.fromArray(a,U*3),p.fromArray(a,V*3),v.fromArray(s,E*2),g.fromArray(s,U*2),m.fromArray(s,V*2),h.sub(l),p.sub(l),g.sub(v),m.sub(v);const D=1/(g.x*m.y-m.x*g.y);isFinite(D)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(D),x.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(D),d[E].add(f),d[U].add(f),d[V].add(f),u[E].add(x),u[U].add(x),u[V].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let E=0,U=_.length;E<U;++E){const V=_[E],D=V.start,H=V.count;for(let W=D,rt=D+H;W<rt;W+=3)y(n[W+0],n[W+1],n[W+2])}const S=new nt,R=new nt,F=new nt,z=new nt;function M(E){F.fromArray(r,E*3),z.copy(F);const U=d[E];S.copy(U),S.sub(F.multiplyScalar(F.dot(U))).normalize(),R.crossVectors(z,U);const D=R.dot(u[E])<0?-1:1;c[E*4]=S.x,c[E*4+1]=S.y,c[E*4+2]=S.z,c[E*4+3]=D}for(let E=0,U=_.length;E<U;++E){const V=_[E],D=V.start,H=V.count;for(let W=D,rt=D+H;W<rt;W+=3)M(n[W+0]),M(n[W+1]),M(n[W+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const a=new nt,r=new nt,s=new nt,o=new nt,c=new nt,d=new nt,u=new nt,l=new nt;if(t)for(let h=0,p=t.count;h<p;h+=3){const v=t.getX(h+0),g=t.getX(h+1),m=t.getX(h+2);a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),u.subVectors(s,r),l.subVectors(a,r),u.cross(l),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),d.fromBufferAttribute(n,m),o.add(u),c.add(u),d.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let h=0,p=e.count;h<p;h+=3)a.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),u.subVectors(s,r),l.subVectors(a,r),u.cross(l),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){const d=o.array,u=o.itemSize,l=o.normalized,h=new d.constructor(c.length*u);let p=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*u;for(let f=0;f<u;f++)h[v++]=d[p++]}return new un(h,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sn,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],d=t(c,n);e.setAttribute(o,d)}const r=this.morphAttributes;for(const o in r){const c=[],d=r[o];for(let u=0,l=d.length;u<l;u++){const h=d[u],p=t(h,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const d=s[o];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(t[d]=c[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const d=n[c];t.data.attributes[c]=d.toJSON(t.data)}const a={};let r=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],u=[];for(let l=0,h=d.length;l<h;l++){const p=d[l];u.push(p.toJSON(t.data))}u.length>0&&(a[c]=u,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const a=t.attributes;for(const d in a){const u=a[d];this.setAttribute(d,u.clone(e))}const r=t.morphAttributes;for(const d in r){const u=[],l=r[d];for(let h=0,p=l.length;h<p;h++)u.push(l[h].clone(e));this.morphAttributes[d]=u}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let d=0,u=s.length;d<u;d++){const l=s[d];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const la=new be,Nn=new so,Ki=new vr,ca=new nt,ni=new nt,ii=new nt,ri=new nt,qr=new nt,ji=new nt,$i=new fe,Qi=new fe,Ji=new fe,ua=new nt,ha=new nt,da=new nt,tr=new nt,er=new nt;class nn extends Ve{constructor(t=new sn,e=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){ji.set(0,0,0);for(let c=0,d=r.length;c<d;c++){const u=o[c],l=r[c];u!==0&&(qr.fromBufferAttribute(l,t),s?ji.addScaledVector(qr,u):ji.addScaledVector(qr.sub(e),u))}e.add(ji)}return e}raycast(t,e){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(r),Nn.copy(t.ray).recast(t.near),!(Ki.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Ki,ca)===null||Nn.origin.distanceToSquared(ca)>(t.far-t.near)**2))&&(la.copy(r).invert(),Nn.copy(t.ray).applyMatrix4(la),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let a;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,d=r.attributes.uv,u=r.attributes.uv1,l=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,g=h.length;v<g;v++){const m=h[v],f=s[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,S=y;_<S;_+=3){const R=o.getX(_),F=o.getX(_+1),z=o.getX(_+2);a=nr(this,f,t,n,d,u,l,R,F,z),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const x=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);a=nr(this,s,t,n,d,u,l,x,y,_),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,g=h.length;v<g;v++){const m=h[v],f=s[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,S=y;_<S;_+=3){const R=_,F=_+1,z=_+2;a=nr(this,f,t,n,d,u,l,R,F,z),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const x=m,y=m+1,_=m+2;a=nr(this,s,t,n,d,u,l,x,y,_),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}}}function Jl(i,t,e,n,a,r,s,o){let c;if(t.side===ze?c=n.intersectTriangle(s,r,a,!0,o):c=n.intersectTriangle(a,r,s,t.side===In,o),c===null)return null;er.copy(o),er.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(er);return d<e.near||d>e.far?null:{distance:d,point:er.clone(),object:i}}function nr(i,t,e,n,a,r,s,o,c,d){i.getVertexPosition(o,ni),i.getVertexPosition(c,ii),i.getVertexPosition(d,ri);const u=Jl(i,t,e,n,ni,ii,ri,tr);if(u){a&&($i.fromBufferAttribute(a,o),Qi.fromBufferAttribute(a,c),Ji.fromBufferAttribute(a,d),u.uv=Je.getInterpolation(tr,ni,ii,ri,$i,Qi,Ji,new fe)),r&&($i.fromBufferAttribute(r,o),Qi.fromBufferAttribute(r,c),Ji.fromBufferAttribute(r,d),u.uv1=Je.getInterpolation(tr,ni,ii,ri,$i,Qi,Ji,new fe),u.uv2=u.uv1),s&&(ua.fromBufferAttribute(s,o),ha.fromBufferAttribute(s,c),da.fromBufferAttribute(s,d),u.normal=Je.getInterpolation(tr,ni,ii,ri,ua,ha,da,new nt),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const l={a:o,b:c,c:d,normal:new nt,materialIndex:0};Je.getNormal(ni,ii,ri,l.normal),u.face=l}return u}class _i extends sn{constructor(t=1,e=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const c=[],d=[],u=[],l=[];let h=0,p=0;v("z","y","x",-1,-1,n,e,t,s,r,0),v("z","y","x",1,-1,n,e,-t,s,r,1),v("x","z","y",1,1,t,n,e,a,s,2),v("x","z","y",1,-1,t,n,-e,a,s,3),v("x","y","z",1,-1,t,e,n,a,r,4),v("x","y","z",-1,-1,t,e,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new rn(d,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(l,2));function v(g,m,f,x,y,_,S,R,F,z,M){const E=_/F,U=S/z,V=_/2,D=S/2,H=R/2,W=F+1,rt=z+1;let B=0,I=0;const j=new nt;for(let G=0;G<rt;G++){const A=G*U-D;for(let N=0;N<W;N++){const L=N*E-V;j[g]=L*x,j[m]=A*y,j[f]=H,d.push(j.x,j.y,j.z),j[g]=0,j[m]=0,j[f]=R>0?1:-1,u.push(j.x,j.y,j.z),l.push(N/F),l.push(1-G/z),B+=1}}for(let G=0;G<z;G++)for(let A=0;A<F;A++){const N=h+A+W*G,L=h+A+W*(G+1),P=h+(A+1)+W*(G+1),b=h+(A+1)+W*G;c.push(N,L,b),c.push(L,P,b),I+=6}o.addGroup(p,I,M),p+=I,h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const a=i[e][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=a.clone():Array.isArray(a)?t[e][n]=a.slice():t[e][n]=a}}return t}function Ne(i){const t={};for(let e=0;e<i.length;e++){const n=vi(i[e]);for(const a in n)t[a]=n[a]}return t}function tc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uo(i){return i.getRenderTarget()===null?i.outputColorSpace:dn}const ec={clone:vi,merge:Ne};var nc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ic=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nc,this.fragmentShader=ic,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=tc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?e.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[a]={type:"m4",value:s.toArray()}:e.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ho extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ze extends ho{constructor(t=50,e=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=as*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return as*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,a,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*e,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,d=s.fullHeight;r+=s.offsetX*a/c,e-=s.offsetY*n/d,a*=s.width/c,n*=s.height/d}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const si=-90,ai=1;class rc extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const a=new Ze(si,ai,t,e);a.layers=this.layers,this.add(a);const r=new Ze(si,ai,t,e);r.layers=this.layers,this.add(r);const s=new Ze(si,ai,t,e);s.layers=this.layers,this.add(s);const o=new Ze(si,ai,t,e);o.layers=this.layers,this.add(o);const c=new Ze(si,ai,t,e);c.layers=this.layers,this.add(c);const d=new Ze(si,ai,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,a,r,s,o,c]=e;for(const d of e)this.remove(d);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,s,o,c,d]=this.children,u=t.getRenderTarget(),l=t.xr.enabled;t.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,a),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,s),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=h,t.setRenderTarget(n,5),t.render(e,d),t.setRenderTarget(u),t.xr.enabled=l,n.texture.needsPMREMUpdate=!0}}class fo extends ke{constructor(t,e,n,a,r,s,o,c,d,u){t=t!==void 0?t:[],e=e!==void 0?e:fi,super(t,e,n,a,r,s,o,c,d,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sc extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},a=[n,n,n,n,n,n];e.encoding!==void 0&&(Pi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Hn?ve:Wn),this.texture=new fo(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new _i(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Cn});r.uniforms.tEquirect.value=e;const s=new nn(a,r),o=e.minFilter;return e.minFilter===Li&&(e.minFilter=Ye),new rc(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,a){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,a);t.setRenderTarget(r)}}const Yr=new nt,ac=new nt,oc=new re;class Bn{constructor(t=new nt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,a){return this.normal.set(t,e,n),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const a=Yr.subVectors(n,e).cross(ac.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Yr),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||oc.getNormalMatrix(t),a=this.coplanarPoint(Yr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new vr,ir=new nt;class po{constructor(t=new Bn,e=new Bn,n=new Bn,a=new Bn,r=new Bn,s=new Bn){this.planes=[t,e,n,a,r,s]}set(t,e,n,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn){const n=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],c=a[3],d=a[4],u=a[5],l=a[6],h=a[7],p=a[8],v=a[9],g=a[10],m=a[11],f=a[12],x=a[13],y=a[14],_=a[15];if(n[0].setComponents(c-r,h-d,m-p,_-f).normalize(),n[1].setComponents(c+r,h+d,m+p,_+f).normalize(),n[2].setComponents(c+s,h+u,m+v,_+x).normalize(),n[3].setComponents(c-s,h-u,m-v,_-x).normalize(),n[4].setComponents(c-o,h-l,m-g,_-y).normalize(),e===Sn)n[5].setComponents(c+o,h+l,m+g,_+y).normalize();else if(e===dr)n[5].setComponents(o,l,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,a=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const a=e[n];if(ir.x=a.normal.x>0?t.max.x:t.min.x,ir.y=a.normal.y>0?t.max.y:t.min.y,ir.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mo(){let i=null,t=!1,e=null,n=null;function a(r,s){e(r,s),n=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lc(i,t){const e=t.isWebGL2,n=new WeakMap;function a(d,u){const l=d.array,h=d.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,l,h),d.onUploadCallback();let v;if(l instanceof Float32Array)v=i.FLOAT;else if(l instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)v=i.SHORT;else if(l instanceof Uint32Array)v=i.UNSIGNED_INT;else if(l instanceof Int32Array)v=i.INT;else if(l instanceof Int8Array)v=i.BYTE;else if(l instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:v,bytesPerElement:l.BYTES_PER_ELEMENT,version:d.version}}function r(d,u,l){const h=u.array,p=u.updateRange;i.bindBuffer(l,d),p.count===-1?i.bufferSubData(l,0,h):(e?i.bufferSubData(l,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(l,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const u=n.get(d);u&&(i.deleteBuffer(u.buffer),n.delete(d))}function c(d,u){if(d.isGLBufferAttribute){const h=n.get(d);(!h||h.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const l=n.get(d);l===void 0?n.set(d,a(d,u)):l.version<d.version&&(r(l.buffer,d,u),l.version=d.version)}return{get:s,remove:o,update:c}}class gr extends sn{constructor(t=1,e=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:a};const r=t/2,s=e/2,o=Math.floor(n),c=Math.floor(a),d=o+1,u=c+1,l=t/o,h=e/c,p=[],v=[],g=[],m=[];for(let f=0;f<u;f++){const x=f*h-s;for(let y=0;y<d;y++){const _=y*l-r;v.push(_,-x,0),g.push(0,0,1),m.push(y/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){const y=x+d*f,_=x+d*(f+1),S=x+1+d*(f+1),R=x+1+d*f;p.push(y,_,R),p.push(_,S,R)}this.setIndex(p),this.setAttribute("position",new rn(v,3)),this.setAttribute("normal",new rn(g,3)),this.setAttribute("uv",new rn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.width,t.height,t.widthSegments,t.heightSegments)}}var cc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uc=`#ifdef USE_ALPHAHASH
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
#endif`,hc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gc=`vec3 transformed = vec3( position );
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
#endif`,Mc=`#ifdef USE_BUMPMAP
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
#endif`,Sc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ac=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bc=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pc=`#define PI 3.141592653589793
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
} // validated`,Lc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ic=`vec3 transformedNormal = objectNormal;
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
#endif`,Uc=`#ifdef USE_DISPLACEMENTMAP
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
	
#endif`,Gc=`#ifdef USE_ENVMAP
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
#endif`,Hc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wc=`#ifdef USE_ENVMAP
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
#endif`,Xc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zc=`#ifdef USE_GRADIENTMAP
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
}`,Kc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$c=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jc=`uniform bool receiveShadow;
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
#endif`,tu=`#ifdef USE_ENVMAP
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
#endif`,eu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,su=`PhysicalMaterial material;
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
#endif`,au=`struct PhysicalMaterial {
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
}`,ou=`
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
#endif`,lu=`#if defined( RE_IndirectDiffuse )
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
#endif`,cu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,uu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,du=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gu=`#if defined( USE_POINTS_UV )
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
#endif`,_u=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mu=`#ifdef USE_MORPHNORMALS
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
#endif`,Su=`#ifdef USE_MORPHTARGETS
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
#endif`,Eu=`#ifdef USE_MORPHTARGETS
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
#endif`,wu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Tu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ru=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cu=`#ifdef USE_NORMALMAP
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
#endif`,Pu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Lu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Du=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ou=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ku=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xu=`float getShadowMask() {
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
}`,qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yu=`#ifdef USE_SKINNING
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
#endif`,Zu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ku=`#ifdef USE_SKINNING
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
#endif`,ju=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$u=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ju=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,th=`#ifdef USE_TRANSMISSION
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
#endif`,eh=`#ifdef USE_TRANSMISSION
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
#endif`,nh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ih=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ah=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oh=`uniform sampler2D t2D;
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
}`,lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ch=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dh=`#include <common>
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
}`,fh=`#if DEPTH_PACKING == 3200
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
}`,ph=`#define DISTANCE
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
}`,mh=`#define DISTANCE
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
}`,vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_h=`uniform float scale;
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
}`,xh=`uniform vec3 diffuse;
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
}`,yh=`#include <common>
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
}`,Mh=`uniform vec3 diffuse;
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
}`,Sh=`#define LAMBERT
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
}`,Eh=`#define LAMBERT
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
}`,wh=`#define MATCAP
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
}`,Th=`#define MATCAP
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
}`,Ah=`#define NORMAL
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
}`,bh=`#define NORMAL
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
}`,Rh=`#define PHONG
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
}`,Ch=`#define PHONG
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
}`,Ph=`#define STANDARD
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
}`,Lh=`#define STANDARD
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
}`,Ih=`#define TOON
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
}`,Uh=`#define TOON
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
}`,Dh=`uniform float size;
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
}`,Nh=`uniform vec3 diffuse;
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
}`,Fh=`#include <common>
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
}`,Bh=`uniform vec3 color;
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
}`,Oh=`uniform float rotation;
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
}`,zh=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:cc,alphahash_pars_fragment:uc,alphamap_fragment:hc,alphamap_pars_fragment:dc,alphatest_fragment:fc,alphatest_pars_fragment:pc,aomap_fragment:mc,aomap_pars_fragment:vc,begin_vertex:gc,beginnormal_vertex:_c,bsdfs:xc,iridescence_fragment:yc,bumpmap_pars_fragment:Mc,clipping_planes_fragment:Sc,clipping_planes_pars_fragment:Ec,clipping_planes_pars_vertex:wc,clipping_planes_vertex:Tc,color_fragment:Ac,color_pars_fragment:bc,color_pars_vertex:Rc,color_vertex:Cc,common:Pc,cube_uv_reflection_fragment:Lc,defaultnormal_vertex:Ic,displacementmap_pars_vertex:Uc,displacementmap_vertex:Dc,emissivemap_fragment:Nc,emissivemap_pars_fragment:Fc,colorspace_fragment:Bc,colorspace_pars_fragment:Oc,envmap_fragment:zc,envmap_common_pars_fragment:Vc,envmap_pars_fragment:Gc,envmap_pars_vertex:Hc,envmap_physical_pars_fragment:tu,envmap_vertex:Wc,fog_vertex:kc,fog_pars_vertex:Xc,fog_fragment:qc,fog_pars_fragment:Yc,gradientmap_pars_fragment:Zc,lightmap_fragment:Kc,lightmap_pars_fragment:jc,lights_lambert_fragment:$c,lights_lambert_pars_fragment:Qc,lights_pars_begin:Jc,lights_toon_fragment:eu,lights_toon_pars_fragment:nu,lights_phong_fragment:iu,lights_phong_pars_fragment:ru,lights_physical_fragment:su,lights_physical_pars_fragment:au,lights_fragment_begin:ou,lights_fragment_maps:lu,lights_fragment_end:cu,logdepthbuf_fragment:uu,logdepthbuf_pars_fragment:hu,logdepthbuf_pars_vertex:du,logdepthbuf_vertex:fu,map_fragment:pu,map_pars_fragment:mu,map_particle_fragment:vu,map_particle_pars_fragment:gu,metalnessmap_fragment:_u,metalnessmap_pars_fragment:xu,morphcolor_vertex:yu,morphnormal_vertex:Mu,morphtarget_pars_vertex:Su,morphtarget_vertex:Eu,normal_fragment_begin:wu,normal_fragment_maps:Tu,normal_pars_fragment:Au,normal_pars_vertex:bu,normal_vertex:Ru,normalmap_pars_fragment:Cu,clearcoat_normal_fragment_begin:Pu,clearcoat_normal_fragment_maps:Lu,clearcoat_pars_fragment:Iu,iridescence_pars_fragment:Uu,opaque_fragment:Du,packing:Nu,premultiplied_alpha_fragment:Fu,project_vertex:Bu,dithering_fragment:Ou,dithering_pars_fragment:zu,roughnessmap_fragment:Vu,roughnessmap_pars_fragment:Gu,shadowmap_pars_fragment:Hu,shadowmap_pars_vertex:Wu,shadowmap_vertex:ku,shadowmask_pars_fragment:Xu,skinbase_vertex:qu,skinning_pars_vertex:Yu,skinning_vertex:Zu,skinnormal_vertex:Ku,specularmap_fragment:ju,specularmap_pars_fragment:$u,tonemapping_fragment:Qu,tonemapping_pars_fragment:Ju,transmission_fragment:th,transmission_pars_fragment:eh,uv_pars_fragment:nh,uv_pars_vertex:ih,uv_vertex:rh,worldpos_vertex:sh,background_vert:ah,background_frag:oh,backgroundCube_vert:lh,backgroundCube_frag:ch,cube_vert:uh,cube_frag:hh,depth_vert:dh,depth_frag:fh,distanceRGBA_vert:ph,distanceRGBA_frag:mh,equirect_vert:vh,equirect_frag:gh,linedashed_vert:_h,linedashed_frag:xh,meshbasic_vert:yh,meshbasic_frag:Mh,meshlambert_vert:Sh,meshlambert_frag:Eh,meshmatcap_vert:wh,meshmatcap_frag:Th,meshnormal_vert:Ah,meshnormal_frag:bh,meshphong_vert:Rh,meshphong_frag:Ch,meshphysical_vert:Ph,meshphysical_frag:Lh,meshtoon_vert:Ih,meshtoon_frag:Uh,points_vert:Dh,points_frag:Nh,shadow_vert:Fh,shadow_frag:Bh,sprite_vert:Oh,sprite_frag:zh},Nt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},ln={basic:{uniforms:Ne([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Ne([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Ne([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Ne([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Ne([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Ne([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Ne([Nt.points,Nt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Ne([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Ne([Nt.common,Nt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Ne([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Ne([Nt.sprite,Nt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:Ne([Nt.common,Nt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:Ne([Nt.lights,Nt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};ln.physical={uniforms:Ne([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const rr={r:0,b:0,g:0};function Vh(i,t,e,n,a,r,s){const o=new pe(0);let c=r===!0?0:1,d,u,l=null,h=0,p=null;function v(m,f){let x=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?e:t).get(y)),y===null?g(o,c):y&&y.isColor&&(g(y,1),x=!0);const _=i.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===pr)?(u===void 0&&(u=new nn(new _i(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:vi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=y.colorSpace!==ve,(l!==y||h!==y.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,l=y,h=y.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(d===void 0&&(d=new nn(new gr(2,2),new Xn({name:"BackgroundMaterial",uniforms:vi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=y,d.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,d.material.toneMapped=y.colorSpace!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),d.material.uniforms.uvTransform.value.copy(y.matrix),(l!==y||h!==y.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,l=y,h=y.version,p=i.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null))}function g(m,f){m.getRGB(rr,uo(i)),n.buffers.color.setClear(rr.r,rr.g,rr.b,f,s)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(o,c)},render:v}}function Gh(i,t,e,n){const a=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},c=m(null);let d=c,u=!1;function l(H,W,rt,B,I){let j=!1;if(s){const G=g(B,rt,W);d!==G&&(d=G,p(d.object)),j=f(H,B,rt,I),j&&x(H,B,rt,I)}else{const G=W.wireframe===!0;(d.geometry!==B.id||d.program!==rt.id||d.wireframe!==G)&&(d.geometry=B.id,d.program=rt.id,d.wireframe=G,j=!0)}I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,z(H,W,rt,B),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(H){return n.isWebGL2?i.bindVertexArray(H):r.bindVertexArrayOES(H)}function v(H){return n.isWebGL2?i.deleteVertexArray(H):r.deleteVertexArrayOES(H)}function g(H,W,rt){const B=rt.wireframe===!0;let I=o[H.id];I===void 0&&(I={},o[H.id]=I);let j=I[W.id];j===void 0&&(j={},I[W.id]=j);let G=j[B];return G===void 0&&(G=m(h()),j[B]=G),G}function m(H){const W=[],rt=[],B=[];for(let I=0;I<a;I++)W[I]=0,rt[I]=0,B[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:rt,attributeDivisors:B,object:H,attributes:{},index:null}}function f(H,W,rt,B){const I=d.attributes,j=W.attributes;let G=0;const A=rt.getAttributes();for(const N in A)if(A[N].location>=0){const P=I[N];let b=j[N];if(b===void 0&&(N==="instanceMatrix"&&H.instanceMatrix&&(b=H.instanceMatrix),N==="instanceColor"&&H.instanceColor&&(b=H.instanceColor)),P===void 0||P.attribute!==b||b&&P.data!==b.data)return!0;G++}return d.attributesNum!==G||d.index!==B}function x(H,W,rt,B){const I={},j=W.attributes;let G=0;const A=rt.getAttributes();for(const N in A)if(A[N].location>=0){let P=j[N];P===void 0&&(N==="instanceMatrix"&&H.instanceMatrix&&(P=H.instanceMatrix),N==="instanceColor"&&H.instanceColor&&(P=H.instanceColor));const b={};b.attribute=P,P&&P.data&&(b.data=P.data),I[N]=b,G++}d.attributes=I,d.attributesNum=G,d.index=B}function y(){const H=d.newAttributes;for(let W=0,rt=H.length;W<rt;W++)H[W]=0}function _(H){S(H,0)}function S(H,W){const rt=d.newAttributes,B=d.enabledAttributes,I=d.attributeDivisors;rt[H]=1,B[H]===0&&(i.enableVertexAttribArray(H),B[H]=1),I[H]!==W&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,W),I[H]=W)}function R(){const H=d.newAttributes,W=d.enabledAttributes;for(let rt=0,B=W.length;rt<B;rt++)W[rt]!==H[rt]&&(i.disableVertexAttribArray(rt),W[rt]=0)}function F(H,W,rt,B,I,j,G){G===!0?i.vertexAttribIPointer(H,W,rt,I,j):i.vertexAttribPointer(H,W,rt,B,I,j)}function z(H,W,rt,B){if(n.isWebGL2===!1&&(H.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const I=B.attributes,j=rt.getAttributes(),G=W.defaultAttributeValues;for(const A in j){const N=j[A];if(N.location>=0){let L=I[A];if(L===void 0&&(A==="instanceMatrix"&&H.instanceMatrix&&(L=H.instanceMatrix),A==="instanceColor"&&H.instanceColor&&(L=H.instanceColor)),L!==void 0){const P=L.normalized,b=L.itemSize,Z=e.get(L);if(Z===void 0)continue;const st=Z.buffer,J=Z.type,K=Z.bytesPerElement,dt=n.isWebGL2===!0&&(J===i.INT||J===i.UNSIGNED_INT||L.gpuType===Za);if(L.isInterleavedBufferAttribute){const ut=L.data,k=ut.stride,Tt=L.offset;if(ut.isInstancedInterleavedBuffer){for(let pt=0;pt<N.locationSize;pt++)S(N.location+pt,ut.meshPerAttribute);H.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let pt=0;pt<N.locationSize;pt++)_(N.location+pt);i.bindBuffer(i.ARRAY_BUFFER,st);for(let pt=0;pt<N.locationSize;pt++)F(N.location+pt,b/N.locationSize,J,P,k*K,(Tt+b/N.locationSize*pt)*K,dt)}else{if(L.isInstancedBufferAttribute){for(let ut=0;ut<N.locationSize;ut++)S(N.location+ut,L.meshPerAttribute);H.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let ut=0;ut<N.locationSize;ut++)_(N.location+ut);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ut=0;ut<N.locationSize;ut++)F(N.location+ut,b/N.locationSize,J,P,b*K,b/N.locationSize*ut*K,dt)}}else if(G!==void 0){const P=G[A];if(P!==void 0)switch(P.length){case 2:i.vertexAttrib2fv(N.location,P);break;case 3:i.vertexAttrib3fv(N.location,P);break;case 4:i.vertexAttrib4fv(N.location,P);break;default:i.vertexAttrib1fv(N.location,P)}}}}R()}function M(){V();for(const H in o){const W=o[H];for(const rt in W){const B=W[rt];for(const I in B)v(B[I].object),delete B[I];delete W[rt]}delete o[H]}}function E(H){if(o[H.id]===void 0)return;const W=o[H.id];for(const rt in W){const B=W[rt];for(const I in B)v(B[I].object),delete B[I];delete W[rt]}delete o[H.id]}function U(H){for(const W in o){const rt=o[W];if(rt[H.id]===void 0)continue;const B=rt[H.id];for(const I in B)v(B[I].object),delete B[I];delete rt[H.id]}}function V(){D(),u=!0,d!==c&&(d=c,p(d.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:l,reset:V,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:_,disableUnusedAttributes:R}}function Hh(i,t,e,n){const a=n.isWebGL2;let r;function s(d){r=d}function o(d,u){i.drawArrays(r,d,u),e.update(u,r,1)}function c(d,u,l){if(l===0)return;let h,p;if(a)h=i,p="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,d,u,l),e.update(u,r,l)}this.setMode=s,this.render=o,this.renderInstances=c}function Wh(i,t,e){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const d=s||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,_=s||t.has("OES_texture_float"),S=y&&_,R=s?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:d,getMaxAnisotropy:a,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:l,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:_,floatVertexTextures:S,maxSamples:R}}function kh(i){const t=this;let e=null,n=0,a=!1,r=!1;const s=new Bn,o=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,h){const p=l.length!==0||h||n!==0||a;return a=h,n=l.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,h){e=u(l,h,0)},this.setState=function(l,h,p){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,f=i.get(l);if(!a||v===null||v.length===0||r&&!m)r?u(null):d();else{const x=r?0:n,y=x*4;let _=f.clippingState||null;c.value=_,_=u(v,h,y,p);for(let S=0;S!==y;++S)_[S]=e[S];f.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function d(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(l,h,p,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const f=p+g*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,_=p;y!==g;++y,_+=4)s.copy(l[y]).applyMatrix4(x,o),s.normal.toArray(m,_),m[_+3]=s.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Xh(i){let t=new WeakMap;function e(s,o){return o===es?s.mapping=fi:o===ns&&(s.mapping=pi),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===es||o===ns)if(t.has(s)){const c=t.get(s).texture;return e(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const d=new sc(c.height/2);return d.fromEquirectangularTexture(i,s),t.set(s,d),s.addEventListener("dispose",a),e(d.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class qh extends ho{constructor(t=-1,e=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=a+e,c=a-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,s=r+d*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ui=4,fa=[.125,.215,.35,.446,.526,.582],zn=20,Zr=new qh,pa=new pe;let Kr=null;const On=(1+Math.sqrt(5))/2,oi=1/On,ma=[new nt(1,1,1),new nt(-1,1,1),new nt(1,1,-1),new nt(-1,1,-1),new nt(0,On,oi),new nt(0,On,-oi),new nt(oi,0,On),new nt(-oi,0,On),new nt(On,oi,0),new nt(-On,oi,0)];class va{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,a=100){Kr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,a,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kr),t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fi||t.mapping===pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Ii,format:en,colorSpace:dn,depthBuffer:!1},a=ga(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ga(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yh(r)),this._blurMaterial=Zh(r,t,e)}return a}_compileMaterial(t){const e=new nn(this._lodPlanes[0],t);this._renderer.compile(e,Zr)}_sceneToCubeUV(t,e,n,a){const o=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,l=u.autoClear,h=u.toneMapping;u.getClearColor(pa),u.toneMapping=Pn,u.autoClear=!1;const p=new Oi({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),v=new nn(new _i,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(pa),g=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,c[f],0),o.lookAt(d[f],0,0)):x===1?(o.up.set(0,0,c[f]),o.lookAt(0,d[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,d[f]));const y=this._cubeSize;sr(a,x*y,f>2?y:0,y,y),u.setRenderTarget(a),g&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,a=t.mapping===fi||t.mapping===pi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=xa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_a());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new nn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;sr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(s,Zr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=ma[(a-1)%ma.length];this._blur(t,a-1,a,r,s)}e.autoClear=n}_blur(t,e,n,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,a,"latitudinal",r),this._halfBlur(s,t,n,n,a,"longitudinal",r)}_halfBlur(t,e,n,a,r,s,o){const c=this._renderer,d=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,l=new nn(this._lodPlanes[a],d),h=d.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zn-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):zn;m>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zn}`);const f=[];let x=0;for(let F=0;F<zn;++F){const z=F/g,M=Math.exp(-z*z/2);f.push(M),F===0?x+=M:F<m&&(x+=2*M)}for(let F=0;F<f.length;F++)f[F]=f[F]/x;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=v,h.mipInt.value=y-n;const _=this._sizeLods[a],S=3*_*(a>y-ui?a-y+ui:0),R=4*(this._cubeSize-_);sr(e,S,R,3*_,2*_),c.setRenderTarget(e),c.render(l,Zr)}}function Yh(i){const t=[],e=[],n=[];let a=i;const r=i-ui+1+fa.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let c=1/o;s>i-ui?c=fa[s-i+ui-1]:s===0&&(c=0),n.push(c);const d=1/(o-2),u=-d,l=1+d,h=[u,u,l,u,l,l,u,u,l,l,u,l],p=6,v=6,g=3,m=2,f=1,x=new Float32Array(g*v*p),y=new Float32Array(m*v*p),_=new Float32Array(f*v*p);for(let R=0;R<p;R++){const F=R%3*2/3-1,z=R>2?0:-1,M=[F,z,0,F+2/3,z,0,F+2/3,z+1,0,F,z,0,F+2/3,z+1,0,F,z+1,0];x.set(M,g*v*R),y.set(h,m*v*R);const E=[R,R,R,R,R,R];_.set(E,f*v*R)}const S=new sn;S.setAttribute("position",new un(x,g)),S.setAttribute("uv",new un(y,m)),S.setAttribute("faceIndex",new un(_,f)),t.push(S),a>ui&&a--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ga(i,t,e){const n=new kn(i,t,e);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,a){i.viewport.set(t,e,n,a),i.scissor.set(t,e,n,a)}function Zh(i,t,e){const n=new Float32Array(zn),a=new nt(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:fs(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function _a(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fs(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function xa(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function fs(){return`

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
	`}function Kh(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,d=c===es||c===ns,u=c===fi||c===pi;if(d||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=t.get(o);return e===null&&(e=new va(i)),l=d?e.fromEquirectangular(o,l):e.fromCubemap(o,l),t.set(o,l),l.texture}else{if(t.has(o))return t.get(o).texture;{const l=o.image;if(d&&l&&l.height>0||u&&l&&a(l)){e===null&&(e=new va(i));const h=d?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function a(o){let c=0;const d=6;for(let u=0;u<d;u++)o[u]!==void 0&&c++;return c===d}function r(o){const c=o.target;c.removeEventListener("dispose",r);const d=t.get(c);d!==void 0&&(t.delete(c),d.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function jh(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return t[n]=a,a}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const a=e(n);return a===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function $h(i,t,e,n){const a={},r=new WeakMap;function s(l){const h=l.target;h.index!==null&&t.remove(h.index);for(const v in h.attributes)t.remove(h.attributes[v]);for(const v in h.morphAttributes){const g=h.morphAttributes[v];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}h.removeEventListener("dispose",s),delete a[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(l,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,e.memory.geometries++),h}function c(l){const h=l.attributes;for(const v in h)t.update(h[v],i.ARRAY_BUFFER);const p=l.morphAttributes;for(const v in p){const g=p[v];for(let m=0,f=g.length;m<f;m++)t.update(g[m],i.ARRAY_BUFFER)}}function d(l){const h=[],p=l.index,v=l.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let y=0,_=x.length;y<_;y+=3){const S=x[y+0],R=x[y+1],F=x[y+2];h.push(S,R,R,F,F,S)}}else if(v!==void 0){const x=v.array;g=v.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const S=y+0,R=y+1,F=y+2;h.push(S,R,R,F,F,S)}}else return;const m=new(eo(h)?co:lo)(h,1);m.version=g;const f=r.get(l);f&&t.remove(f),r.set(l,m)}function u(l){const h=r.get(l);if(h){const p=l.index;p!==null&&h.version<p.version&&d(l)}else d(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:u}}function Qh(i,t,e,n){const a=n.isWebGL2;let r;function s(h){r=h}let o,c;function d(h){o=h.type,c=h.bytesPerElement}function u(h,p){i.drawElements(r,p,o,h*c),e.update(p,r,1)}function l(h,p,v){if(v===0)return;let g,m;if(a)g=i,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,o,h*c,v),e.update(p,r,v)}this.setMode=s,this.setIndex=d,this.render=u,this.renderInstances=l}function Jh(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:n}}function td(i,t){return i[0]-t[0]}function ed(i,t){return Math.abs(t[1])-Math.abs(i[1])}function nd(i,t,e){const n={},a=new Float32Array(8),r=new WeakMap,s=new Le,o=[];for(let d=0;d<8;d++)o[d]=[d,0];function c(d,u,l){const h=d.morphTargetInfluences;if(t.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let W=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],F=u.morphAttributes.normal||[],z=u.morphAttributes.color||[];let M=0;y===!0&&(M=1),_===!0&&(M=2),S===!0&&(M=3);let E=u.attributes.position.count*M,U=1;E>t.maxTextureSize&&(U=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const V=new Float32Array(E*U*4*g),D=new ro(V,E,U,g);D.type=Rn,D.needsUpdate=!0;const H=M*4;for(let rt=0;rt<g;rt++){const B=R[rt],I=F[rt],j=z[rt],G=E*U*4*rt;for(let A=0;A<B.count;A++){const N=A*H;y===!0&&(s.fromBufferAttribute(B,A),V[G+N+0]=s.x,V[G+N+1]=s.y,V[G+N+2]=s.z,V[G+N+3]=0),_===!0&&(s.fromBufferAttribute(I,A),V[G+N+4]=s.x,V[G+N+5]=s.y,V[G+N+6]=s.z,V[G+N+7]=0),S===!0&&(s.fromBufferAttribute(j,A),V[G+N+8]=s.x,V[G+N+9]=s.y,V[G+N+10]=s.z,V[G+N+11]=j.itemSize===4?s.w:1)}}m={count:g,texture:D,size:new fe(E,U)},r.set(u,m),u.addEventListener("dispose",W)}let f=0;for(let y=0;y<h.length;y++)f+=h[y];const x=u.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",h),l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const v=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==v){g=[];for(let _=0;_<v;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<v;_++){const S=g[_];S[0]=_,S[1]=h[_]}g.sort(ed);for(let _=0;_<8;_++)_<v&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(td);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let x=0;for(let _=0;_<8;_++){const S=o[_],R=S[0],F=S[1];R!==Number.MAX_SAFE_INTEGER&&F?(m&&u.getAttribute("morphTarget"+_)!==m[R]&&u.setAttribute("morphTarget"+_,m[R]),f&&u.getAttribute("morphNormal"+_)!==f[R]&&u.setAttribute("morphNormal"+_,f[R]),a[_]=F,x+=F):(m&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),f&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),a[_]=0)}const y=u.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",a)}}return{update:c}}function id(i,t,e,n){let a=new WeakMap;function r(c){const d=n.render.frame,u=c.geometry,l=t.get(c,u);if(a.get(l)!==d&&(t.update(l),a.set(l,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;a.get(h)!==d&&(h.update(),a.set(h,d))}return l}function s(){a=new WeakMap}function o(c){const d=c.target;d.removeEventListener("dispose",o),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:r,dispose:s}}const vo=new ke,go=new ro,_o=new Hl,xo=new fo,ya=[],Ma=[],Sa=new Float32Array(16),Ea=new Float32Array(9),wa=new Float32Array(4);function xi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const a=t*e;let r=ya[a];if(r===void 0&&(r=new Float32Array(a),ya[a]=r),t!==0){n.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=e,i[s].toArray(r,o)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _r(i,t){let e=Ma[t];e===void 0&&(e=new Int32Array(t),Ma[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function ad(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function od(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function ld(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;wa.set(n),i.uniformMatrix2fv(this.addr,!1,wa),Te(e,n)}}function cd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Ea.set(n),i.uniformMatrix3fv(this.addr,!1,Ea),Te(e,n)}}function ud(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Sa.set(n),i.uniformMatrix4fv(this.addr,!1,Sa),Te(e,n)}}function hd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function fd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function pd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function md(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function _d(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function xd(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2D(t||vo,a)}function yd(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture3D(t||_o,a)}function Md(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTextureCube(t||xo,a)}function Sd(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2DArray(t||go,a)}function Ed(i){switch(i){case 5126:return rd;case 35664:return sd;case 35665:return ad;case 35666:return od;case 35674:return ld;case 35675:return cd;case 35676:return ud;case 5124:case 35670:return hd;case 35667:case 35671:return dd;case 35668:case 35672:return fd;case 35669:case 35673:return pd;case 5125:return md;case 36294:return vd;case 36295:return gd;case 36296:return _d;case 35678:case 36198:case 36298:case 36306:case 35682:return xd;case 35679:case 36299:case 36307:return yd;case 35680:case 36300:case 36308:case 36293:return Md;case 36289:case 36303:case 36311:case 36292:return Sd}}function wd(i,t){i.uniform1fv(this.addr,t)}function Td(i,t){const e=xi(t,this.size,2);i.uniform2fv(this.addr,e)}function Ad(i,t){const e=xi(t,this.size,3);i.uniform3fv(this.addr,e)}function bd(i,t){const e=xi(t,this.size,4);i.uniform4fv(this.addr,e)}function Rd(i,t){const e=xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cd(i,t){const e=xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pd(i,t){const e=xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ld(i,t){i.uniform1iv(this.addr,t)}function Id(i,t){i.uniform2iv(this.addr,t)}function Ud(i,t){i.uniform3iv(this.addr,t)}function Dd(i,t){i.uniform4iv(this.addr,t)}function Nd(i,t){i.uniform1uiv(this.addr,t)}function Fd(i,t){i.uniform2uiv(this.addr,t)}function Bd(i,t){i.uniform3uiv(this.addr,t)}function Od(i,t){i.uniform4uiv(this.addr,t)}function zd(i,t,e){const n=this.cache,a=t.length,r=_r(e,a);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let s=0;s!==a;++s)e.setTexture2D(t[s]||vo,r[s])}function Vd(i,t,e){const n=this.cache,a=t.length,r=_r(e,a);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let s=0;s!==a;++s)e.setTexture3D(t[s]||_o,r[s])}function Gd(i,t,e){const n=this.cache,a=t.length,r=_r(e,a);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let s=0;s!==a;++s)e.setTextureCube(t[s]||xo,r[s])}function Hd(i,t,e){const n=this.cache,a=t.length,r=_r(e,a);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let s=0;s!==a;++s)e.setTexture2DArray(t[s]||go,r[s])}function Wd(i){switch(i){case 5126:return wd;case 35664:return Td;case 35665:return Ad;case 35666:return bd;case 35674:return Rd;case 35675:return Cd;case 35676:return Pd;case 5124:case 35670:return Ld;case 35667:case 35671:return Id;case 35668:case 35672:return Ud;case 35669:case 35673:return Dd;case 5125:return Nd;case 36294:return Fd;case 36295:return Bd;case 36296:return Od;case 35678:case 36198:case 36298:case 36306:case 35682:return zd;case 35679:case 36299:case 36307:return Vd;case 35680:case 36300:case 36308:case 36293:return Gd;case 36289:case 36303:case 36311:case 36292:return Hd}}class kd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Ed(e.type)}}class Xd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Wd(e.type)}}class qd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,e[o.id],n)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function Ta(i,t){i.seq.push(t),i.map[t.id]=t}function Yd(i,t,e){const n=i.name,a=n.length;for(jr.lastIndex=0;;){const r=jr.exec(n),s=jr.lastIndex;let o=r[1];const c=r[2]==="]",d=r[3];if(c&&(o=o|0),d===void 0||d==="["&&s+2===a){Ta(e,d===void 0?new kd(o,i,t):new Xd(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new qd(o),Ta(e,l)),e=l}}}class lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=t.getActiveUniform(e,a),s=t.getUniformLocation(e,r.name);Yd(r,s,this)}}setValue(t,e,n,a){const r=this.map[e];r!==void 0&&r.setValue(t,n,a)}setOptional(t,e,n){const a=e[n];a!==void 0&&this.setValue(t,n,a)}static upload(t,e,n,a){for(let r=0,s=e.length;r!==s;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,a)}}static seqWithValue(t,e){const n=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in e&&n.push(s)}return n}}function Aa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let Zd=0;function Kd(i,t){const e=i.split(`
`),n=[],a=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===t?">":" "} ${o}: ${e[s]}`)}return n.join(`
`)}function jd(i){switch(i){case dn:return["Linear","( value )"];case ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function ba(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+Kd(i.getShaderSource(t),s)}else return a}function $d(i,t){const e=jd(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Qd(i,t){let e;switch(t){case il:e="Linear";break;case rl:e="Reinhard";break;case sl:e="OptimizedCineon";break;case al:e="ACESFilmic";break;case ol:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Jd(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ai).join(`
`)}function tf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ef(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(t,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[s]={type:r.type,location:i.getAttribLocation(t,s),locationSize:o}}return e}function Ai(i){return i!==""}function Ra(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ca(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ls(i){return i.replace(nf,sf)}const rf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sf(i,t){let e=ne[t];if(e===void 0){const n=rf.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ls(e)}const af=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pa(i){return i.replace(af,of)}function of(i,t,e,n){let a="";for(let r=parseInt(t);r<parseInt(e);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function La(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===No?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function cf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fi:case pi:t="ENVMAP_TYPE_CUBE";break;case pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function uf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pi:t="ENVMAP_MODE_REFRACTION";break}return t}function hf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qa:t="ENVMAP_BLENDING_MULTIPLY";break;case el:t="ENVMAP_BLENDING_MIX";break;case nl:t="ENVMAP_BLENDING_ADD";break}return t}function df(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ff(i,t,e,n){const a=i.getContext(),r=e.defines;let s=e.vertexShader,o=e.fragmentShader;const c=lf(e),d=cf(e),u=uf(e),l=hf(e),h=df(e),p=e.isWebGL2?"":Jd(e),v=tf(r),g=a.createProgram();let m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ai).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ai).join(`
`),f.length>0&&(f+=`
`)):(m=[La(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),f=[p,La(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?ne.tonemapping_pars_fragment:"",e.toneMapping!==Pn?Qd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,$d("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ai).join(`
`)),s=ls(s),s=Ra(s,e),s=Ca(s,e),o=ls(o),o=Ra(o,e),o=Ca(o,e),s=Pa(s),o=Pa(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===$s?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$s?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=x+m+s,_=x+f+o,S=Aa(a,a.VERTEX_SHADER,y),R=Aa(a,a.FRAGMENT_SHADER,_);if(a.attachShader(g,S),a.attachShader(g,R),e.index0AttributeName!==void 0?a.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g),i.debug.checkShaderErrors){const M=a.getProgramInfoLog(g).trim(),E=a.getShaderInfoLog(S).trim(),U=a.getShaderInfoLog(R).trim();let V=!0,D=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,g,S,R);else{const H=ba(a,S,"vertex"),W=ba(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+H+`
`+W)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(E===""||U==="")&&(D=!1);D&&(this.diagnostics={runnable:V,programLog:M,vertexShader:{log:E,prefix:m},fragmentShader:{log:U,prefix:f}})}a.deleteShader(S),a.deleteShader(R);let F;this.getUniforms=function(){return F===void 0&&(F=new lr(a,g)),F};let z;return this.getAttributes=function(){return z===void 0&&(z=ef(a,g)),z},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zd++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=R,this}let pf=0;class mf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,a=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vf(t),e.set(t,n)),n}}class vf{constructor(t){this.id=pf++,this.code=t,this.usedTimes=0}}function gf(i,t,e,n,a,r,s){const o=new ao,c=new mf,d=[],u=a.isWebGL2,l=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,E,U,V,D){const H=V.fog,W=D.geometry,rt=M.isMeshStandardMaterial?V.environment:null,B=(M.isMeshStandardMaterial?e:t).get(M.envMap||rt),I=B&&B.mapping===pr?B.image.height:null,j=v[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const G=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,A=G!==void 0?G.length:0;let N=0;W.morphAttributes.position!==void 0&&(N=1),W.morphAttributes.normal!==void 0&&(N=2),W.morphAttributes.color!==void 0&&(N=3);let L,P,b,Z;if(j){const te=ln[j];L=te.vertexShader,P=te.fragmentShader}else L=M.vertexShader,P=M.fragmentShader,c.update(M),b=c.getVertexShaderID(M),Z=c.getFragmentShaderID(M);const st=i.getRenderTarget(),J=D.isInstancedMesh===!0,K=!!M.map,dt=!!M.matcap,ut=!!B,k=!!M.aoMap,Tt=!!M.lightMap,pt=!!M.bumpMap,it=!!M.normalMap,ct=!!M.displacementMap,Yt=!!M.emissiveMap,bt=!!M.metalnessMap,Ht=!!M.roughnessMap,yt=M.anisotropy>0,Zt=M.clearcoat>0,Qt=M.iridescence>0,C=M.sheen>0,T=M.transmission>0,$=yt&&!!M.anisotropyMap,mt=Zt&&!!M.clearcoatMap,ft=Zt&&!!M.clearcoatNormalMap,gt=Zt&&!!M.clearcoatRoughnessMap,Bt=Qt&&!!M.iridescenceMap,Et=Qt&&!!M.iridescenceThicknessMap,ot=C&&!!M.sheenColorMap,qt=C&&!!M.sheenRoughnessMap,Wt=!!M.specularMap,kt=!!M.specularColorMap,Vt=!!M.specularIntensityMap,Ot=T&&!!M.transmissionMap,$t=T&&!!M.thicknessMap,ie=!!M.gradientMap,X=!!M.alphaMap,Ct=M.alphaTest>0,at=!!M.alphaHash,xt=!!M.extensions,Ut=!!W.attributes.uv1,ee=!!W.attributes.uv2,le=!!W.attributes.uv3;let ue=Pn;return M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ue=i.toneMapping),{isWebGL2:u,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:L,fragmentShader:P,defines:M.defines,customVertexShaderID:b,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:J,instancingColor:J&&D.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:dn,map:K,matcap:dt,envMap:ut,envMapMode:ut&&B.mapping,envMapCubeUVHeight:I,aoMap:k,lightMap:Tt,bumpMap:pt,normalMap:it,displacementMap:h&&ct,emissiveMap:Yt,normalMapObjectSpace:it&&M.normalMapType===Ml,normalMapTangentSpace:it&&M.normalMapType===yl,metalnessMap:bt,roughnessMap:Ht,anisotropy:yt,anisotropyMap:$,clearcoat:Zt,clearcoatMap:mt,clearcoatNormalMap:ft,clearcoatRoughnessMap:gt,iridescence:Qt,iridescenceMap:Bt,iridescenceThicknessMap:Et,sheen:C,sheenColorMap:ot,sheenRoughnessMap:qt,specularMap:Wt,specularColorMap:kt,specularIntensityMap:Vt,transmission:T,transmissionMap:Ot,thicknessMap:$t,gradientMap:ie,opaque:M.transparent===!1&&M.blending===hi,alphaMap:X,alphaTest:Ct,alphaHash:at,combine:M.combine,mapUv:K&&g(M.map.channel),aoMapUv:k&&g(M.aoMap.channel),lightMapUv:Tt&&g(M.lightMap.channel),bumpMapUv:pt&&g(M.bumpMap.channel),normalMapUv:it&&g(M.normalMap.channel),displacementMapUv:ct&&g(M.displacementMap.channel),emissiveMapUv:Yt&&g(M.emissiveMap.channel),metalnessMapUv:bt&&g(M.metalnessMap.channel),roughnessMapUv:Ht&&g(M.roughnessMap.channel),anisotropyMapUv:$&&g(M.anisotropyMap.channel),clearcoatMapUv:mt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:qt&&g(M.sheenRoughnessMap.channel),specularMapUv:Wt&&g(M.specularMap.channel),specularColorMapUv:kt&&g(M.specularColorMap.channel),specularIntensityMapUv:Vt&&g(M.specularIntensityMap.channel),transmissionMapUv:Ot&&g(M.transmissionMap.channel),thicknessMapUv:$t&&g(M.thicknessMap.channel),alphaMapUv:X&&g(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(it||yt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:ee,vertexUv3s:le,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(K||X),fog:!!H,useFog:M.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:N,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,useLegacyLights:i._useLegacyLights,decodeVideoTexture:K&&M.map.isVideoTexture===!0&&M.map.colorSpace===ve,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===cn,flipSided:M.side===ze,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:xt&&M.extensions.derivatives===!0,extensionFragDepth:xt&&M.extensions.fragDepth===!0,extensionDrawBuffers:xt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)E.push(U),E.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(x(E,M),y(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function x(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function _(M){const E=v[M.type];let U;if(E){const V=ln[E];U=ec.clone(V.uniforms)}else U=M.uniforms;return U}function S(M,E){let U;for(let V=0,D=d.length;V<D;V++){const H=d[V];if(H.cacheKey===E){U=H,++U.usedTimes;break}}return U===void 0&&(U=new ff(i,E,M,r),d.push(U)),U}function R(M){if(--M.usedTimes===0){const E=d.indexOf(M);d[E]=d[d.length-1],d.pop(),M.destroy()}}function F(M){c.remove(M)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:S,releaseProgram:R,releaseShaderCache:F,programs:d,dispose:z}}function _f(){let i=new WeakMap;function t(r){let s=i.get(r);return s===void 0&&(s={},i.set(r,s)),s}function e(r){i.delete(r)}function n(r,s,o){i.get(r)[s]=o}function a(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:a}}function xf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ia(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ua(){const i=[];let t=0;const e=[],n=[],a=[];function r(){t=0,e.length=0,n.length=0,a.length=0}function s(l,h,p,v,g,m){let f=i[t];return f===void 0?(f={id:l.id,object:l,geometry:h,material:p,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=f):(f.id=l.id,f.object=l,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=l.renderOrder,f.z=g,f.group=m),t++,f}function o(l,h,p,v,g,m){const f=s(l,h,p,v,g,m);p.transmission>0?n.push(f):p.transparent===!0?a.push(f):e.push(f)}function c(l,h,p,v,g,m){const f=s(l,h,p,v,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?a.unshift(f):e.unshift(f)}function d(l,h){e.length>1&&e.sort(l||xf),n.length>1&&n.sort(h||Ia),a.length>1&&a.sort(h||Ia)}function u(){for(let l=t,h=i.length;l<h;l++){const p=i[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:a,init:r,push:o,unshift:c,finish:u,sort:d}}function yf(){let i=new WeakMap;function t(n,a){const r=i.get(n);let s;return r===void 0?(s=new Ua,i.set(n,[s])):a>=r.length?(s=new Ua,r.push(s)):s=r[a],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function Mf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new nt,color:new pe};break;case"SpotLight":e={position:new nt,direction:new nt,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new nt,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new nt,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return i[t.id]=e,e}}}function Sf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ef=0;function wf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Tf(i,t){const e=new Mf,n=Sf(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)a.probe.push(new nt);const r=new nt,s=new be,o=new be;function c(u,l){let h=0,p=0,v=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let g=0,m=0,f=0,x=0,y=0,_=0,S=0,R=0,F=0,z=0;u.sort(wf);const M=l===!0?Math.PI:1;for(let U=0,V=u.length;U<V;U++){const D=u[U],H=D.color,W=D.intensity,rt=D.distance,B=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=H.r*W*M,p+=H.g*W*M,v+=H.b*W*M;else if(D.isLightProbe)for(let I=0;I<9;I++)a.probe[I].addScaledVector(D.sh.coefficients[I],W);else if(D.isDirectionalLight){const I=e.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const j=D.shadow,G=n.get(D);G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,a.directionalShadow[g]=G,a.directionalShadowMap[g]=B,a.directionalShadowMatrix[g]=D.shadow.matrix,_++}a.directional[g]=I,g++}else if(D.isSpotLight){const I=e.get(D);I.position.setFromMatrixPosition(D.matrixWorld),I.color.copy(H).multiplyScalar(W*M),I.distance=rt,I.coneCos=Math.cos(D.angle),I.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),I.decay=D.decay,a.spot[f]=I;const j=D.shadow;if(D.map&&(a.spotLightMap[F]=D.map,F++,j.updateMatrices(D),D.castShadow&&z++),a.spotLightMatrix[f]=j.matrix,D.castShadow){const G=n.get(D);G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,a.spotShadow[f]=G,a.spotShadowMap[f]=B,R++}f++}else if(D.isRectAreaLight){const I=e.get(D);I.color.copy(H).multiplyScalar(W),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),a.rectArea[x]=I,x++}else if(D.isPointLight){const I=e.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity*M),I.distance=D.distance,I.decay=D.decay,D.castShadow){const j=D.shadow,G=n.get(D);G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,a.pointShadow[m]=G,a.pointShadowMap[m]=B,a.pointShadowMatrix[m]=D.shadow.matrix,S++}a.point[m]=I,m++}else if(D.isHemisphereLight){const I=e.get(D);I.skyColor.copy(D.color).multiplyScalar(W*M),I.groundColor.copy(D.groundColor).multiplyScalar(W*M),a.hemi[y]=I,y++}}x>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Nt.LTC_FLOAT_1,a.rectAreaLTC2=Nt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Nt.LTC_HALF_1,a.rectAreaLTC2=Nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=h,a.ambient[1]=p,a.ambient[2]=v;const E=a.hash;(E.directionalLength!==g||E.pointLength!==m||E.spotLength!==f||E.rectAreaLength!==x||E.hemiLength!==y||E.numDirectionalShadows!==_||E.numPointShadows!==S||E.numSpotShadows!==R||E.numSpotMaps!==F)&&(a.directional.length=g,a.spot.length=f,a.rectArea.length=x,a.point.length=m,a.hemi.length=y,a.directionalShadow.length=_,a.directionalShadowMap.length=_,a.pointShadow.length=S,a.pointShadowMap.length=S,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=_,a.pointShadowMatrix.length=S,a.spotLightMatrix.length=R+F-z,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=z,E.directionalLength=g,E.pointLength=m,E.spotLength=f,E.rectAreaLength=x,E.hemiLength=y,E.numDirectionalShadows=_,E.numPointShadows=S,E.numSpotShadows=R,E.numSpotMaps=F,a.version=Ef++)}function d(u,l){let h=0,p=0,v=0,g=0,m=0;const f=l.matrixWorldInverse;for(let x=0,y=u.length;x<y;x++){const _=u[x];if(_.isDirectionalLight){const S=a.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),h++}else if(_.isSpotLight){const S=a.spot[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),v++}else if(_.isRectAreaLight){const S=a.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(f),o.identity(),s.copy(_.matrixWorld),s.premultiply(f),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const S=a.point[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){const S=a.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:c,setupView:d,state:a}}function Da(i,t){const e=new Tf(i,t),n=[],a=[];function r(){n.length=0,a.length=0}function s(l){n.push(l)}function o(l){a.push(l)}function c(l){e.setup(n,l)}function d(l){e.setupView(n,l)}return{init:r,state:{lightsArray:n,shadowsArray:a,lights:e},setupLights:c,setupLightsView:d,pushLight:s,pushShadow:o}}function Af(i,t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let c;return o===void 0?(c=new Da(i,t),e.set(r,[c])):s>=o.length?(c=new Da(i,t),o.push(c)):c=o[s],c}function a(){e=new WeakMap}return{get:n,dispose:a}}class bf extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rf extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pf=`uniform sampler2D shadow_pass;
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
}`;function Lf(i,t,e){let n=new po;const a=new fe,r=new fe,s=new Le,o=new bf({depthPacking:xl}),c=new Rf,d={},u=e.maxTextureSize,l={[In]:ze,[ze]:In,[cn]:cn},h=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Cf,fragmentShader:Pf}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new sn;v.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new nn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa;let f=this.type;this.render=function(S,R,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const z=i.getRenderTarget(),M=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Cn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=f!==Mn&&this.type===Mn,D=f===Mn&&this.type!==Mn;for(let H=0,W=S.length;H<W;H++){const rt=S[H],B=rt.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const I=B.getFrameExtents();if(a.multiply(I),r.copy(B.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/I.x),a.x=r.x*I.x,B.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/I.y),a.y=r.y*I.y,B.mapSize.y=r.y)),B.map===null||V===!0||D===!0){const G=this.type!==Mn?{minFilter:Fe,magFilter:Fe}:{};B.map!==null&&B.map.dispose(),B.map=new kn(a.x,a.y,G),B.map.texture.name=rt.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const j=B.getViewportCount();for(let G=0;G<j;G++){const A=B.getViewport(G);s.set(r.x*A.x,r.y*A.y,r.x*A.z,r.y*A.w),U.viewport(s),B.updateMatrices(rt,G),n=B.getFrustum(),_(R,F,B.camera,rt,this.type)}B.isPointLightShadow!==!0&&this.type===Mn&&x(B,F),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(z,M,E)};function x(S,R){const F=t.update(g);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new kn(a.x,a.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,F,h,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,F,p,g,null)}function y(S,R,F,z){let M=null;const E=F.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)M=E;else if(M=F.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const U=M.uuid,V=R.uuid;let D=d[U];D===void 0&&(D={},d[U]=D);let H=D[V];H===void 0&&(H=M.clone(),D[V]=H),M=H}if(M.visible=R.visible,M.wireframe=R.wireframe,z===Mn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:l[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=F}return M}function _(S,R,F,z,M){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Mn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld);const V=t.update(S),D=S.material;if(Array.isArray(D)){const H=V.groups;for(let W=0,rt=H.length;W<rt;W++){const B=H[W],I=D[B.materialIndex];if(I&&I.visible){const j=y(S,I,z,M);i.renderBufferDirect(F,null,V,j,S,B)}}}else if(D.visible){const H=y(S,D,z,M);i.renderBufferDirect(F,null,V,H,S,null)}}const U=S.children;for(let V=0,D=U.length;V<D;V++)_(U[V],R,F,z,M)}}function If(i,t,e){const n=e.isWebGL2;function a(){let X=!1;const Ct=new Le;let at=null;const xt=new Le(0,0,0,0);return{setMask:function(Ut){at!==Ut&&!X&&(i.colorMask(Ut,Ut,Ut,Ut),at=Ut)},setLocked:function(Ut){X=Ut},setClear:function(Ut,ee,le,ue,De){De===!0&&(Ut*=ue,ee*=ue,le*=ue),Ct.set(Ut,ee,le,ue),xt.equals(Ct)===!1&&(i.clearColor(Ut,ee,le,ue),xt.copy(Ct))},reset:function(){X=!1,at=null,xt.set(-1,0,0,0)}}}function r(){let X=!1,Ct=null,at=null,xt=null;return{setTest:function(Ut){Ut?st(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(Ut){Ct!==Ut&&!X&&(i.depthMask(Ut),Ct=Ut)},setFunc:function(Ut){if(at!==Ut){switch(Ut){case Zo:i.depthFunc(i.NEVER);break;case Ko:i.depthFunc(i.ALWAYS);break;case jo:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case $o:i.depthFunc(i.EQUAL);break;case Qo:i.depthFunc(i.GEQUAL);break;case Jo:i.depthFunc(i.GREATER);break;case tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=Ut}},setLocked:function(Ut){X=Ut},setClear:function(Ut){xt!==Ut&&(i.clearDepth(Ut),xt=Ut)},reset:function(){X=!1,Ct=null,at=null,xt=null}}}function s(){let X=!1,Ct=null,at=null,xt=null,Ut=null,ee=null,le=null,ue=null,De=null;return{setTest:function(te){X||(te?st(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(te){Ct!==te&&!X&&(i.stencilMask(te),Ct=te)},setFunc:function(te,lt,ht){(at!==te||xt!==lt||Ut!==ht)&&(i.stencilFunc(te,lt,ht),at=te,xt=lt,Ut=ht)},setOp:function(te,lt,ht){(ee!==te||le!==lt||ue!==ht)&&(i.stencilOp(te,lt,ht),ee=te,le=lt,ue=ht)},setLocked:function(te){X=te},setClear:function(te){De!==te&&(i.clearStencil(te),De=te)},reset:function(){X=!1,Ct=null,at=null,xt=null,Ut=null,ee=null,le=null,ue=null,De=null}}}const o=new a,c=new r,d=new s,u=new WeakMap,l=new WeakMap;let h={},p={},v=new WeakMap,g=[],m=null,f=!1,x=null,y=null,_=null,S=null,R=null,F=null,z=null,M=!1,E=null,U=null,V=null,D=null,H=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let rt=!1,B=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(I)[1]),rt=B>=1):I.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),rt=B>=2);let j=null,G={};const A=i.getParameter(i.SCISSOR_BOX),N=i.getParameter(i.VIEWPORT),L=new Le().fromArray(A),P=new Le().fromArray(N);function b(X,Ct,at,xt){const Ut=new Uint8Array(4),ee=i.createTexture();i.bindTexture(X,ee),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<at;le++)n&&(X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ct,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(Ct+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return ee}const Z={};Z[i.TEXTURE_2D]=b(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=b(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Z[i.TEXTURE_2D_ARRAY]=b(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=b(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),d.setClear(0),st(i.DEPTH_TEST),c.setFunc(ts),ct(!1),Yt(_s),st(i.CULL_FACE),pt(Cn);function st(X){h[X]!==!0&&(i.enable(X),h[X]=!0)}function J(X){h[X]!==!1&&(i.disable(X),h[X]=!1)}function K(X,Ct){return p[X]!==Ct?(i.bindFramebuffer(X,Ct),p[X]=Ct,n&&(X===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Ct),X===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Ct)),!0):!1}function dt(X,Ct){let at=g,xt=!1;if(X)if(at=v.get(Ct),at===void 0&&(at=[],v.set(Ct,at)),X.isWebGLMultipleRenderTargets){const Ut=X.texture;if(at.length!==Ut.length||at[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,le=Ut.length;ee<le;ee++)at[ee]=i.COLOR_ATTACHMENT0+ee;at.length=Ut.length,xt=!0}}else at[0]!==i.COLOR_ATTACHMENT0&&(at[0]=i.COLOR_ATTACHMENT0,xt=!0);else at[0]!==i.BACK&&(at[0]=i.BACK,xt=!0);xt&&(e.isWebGL2?i.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function ut(X){return m!==X?(i.useProgram(X),m=X,!0):!1}const k={[ci]:i.FUNC_ADD,[Bo]:i.FUNC_SUBTRACT,[Oo]:i.FUNC_REVERSE_SUBTRACT};if(n)k[Ss]=i.MIN,k[Es]=i.MAX;else{const X=t.get("EXT_blend_minmax");X!==null&&(k[Ss]=X.MIN_EXT,k[Es]=X.MAX_EXT)}const Tt={[zo]:i.ZERO,[Vo]:i.ONE,[Go]:i.SRC_COLOR,[ka]:i.SRC_ALPHA,[Yo]:i.SRC_ALPHA_SATURATE,[Xo]:i.DST_COLOR,[Wo]:i.DST_ALPHA,[Ho]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[qo]:i.ONE_MINUS_DST_COLOR,[ko]:i.ONE_MINUS_DST_ALPHA};function pt(X,Ct,at,xt,Ut,ee,le,ue){if(X===Cn){f===!0&&(J(i.BLEND),f=!1);return}if(f===!1&&(st(i.BLEND),f=!0),X!==Fo){if(X!==x||ue!==M){if((y!==ci||R!==ci)&&(i.blendEquation(i.FUNC_ADD),y=ci,R=ci),ue)switch(X){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xs:i.blendFunc(i.ONE,i.ONE);break;case ys:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ms:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ys:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ms:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}_=null,S=null,F=null,z=null,x=X,M=ue}return}Ut=Ut||Ct,ee=ee||at,le=le||xt,(Ct!==y||Ut!==R)&&(i.blendEquationSeparate(k[Ct],k[Ut]),y=Ct,R=Ut),(at!==_||xt!==S||ee!==F||le!==z)&&(i.blendFuncSeparate(Tt[at],Tt[xt],Tt[ee],Tt[le]),_=at,S=xt,F=ee,z=le),x=X,M=!1}function it(X,Ct){X.side===cn?J(i.CULL_FACE):st(i.CULL_FACE);let at=X.side===ze;Ct&&(at=!at),ct(at),X.blending===hi&&X.transparent===!1?pt(Cn):pt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),o.setMask(X.colorWrite);const xt=X.stencilWrite;d.setTest(xt),xt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ht(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(X){E!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),E=X)}function Yt(X){X!==Uo?(st(i.CULL_FACE),X!==U&&(X===_s?i.cullFace(i.BACK):X===Do?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):J(i.CULL_FACE),U=X}function bt(X){X!==V&&(rt&&i.lineWidth(X),V=X)}function Ht(X,Ct,at){X?(st(i.POLYGON_OFFSET_FILL),(D!==Ct||H!==at)&&(i.polygonOffset(Ct,at),D=Ct,H=at)):J(i.POLYGON_OFFSET_FILL)}function yt(X){X?st(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function Zt(X){X===void 0&&(X=i.TEXTURE0+W-1),j!==X&&(i.activeTexture(X),j=X)}function Qt(X,Ct,at){at===void 0&&(j===null?at=i.TEXTURE0+W-1:at=j);let xt=G[at];xt===void 0&&(xt={type:void 0,texture:void 0},G[at]=xt),(xt.type!==X||xt.texture!==Ct)&&(j!==at&&(i.activeTexture(at),j=at),i.bindTexture(X,Ct||Z[X]),xt.type=X,xt.texture=Ct)}function C(){const X=G[j];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(X){L.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),L.copy(X))}function Vt(X){P.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),P.copy(X))}function Ot(X,Ct){let at=l.get(Ct);at===void 0&&(at=new WeakMap,l.set(Ct,at));let xt=at.get(X);xt===void 0&&(xt=i.getUniformBlockIndex(Ct,X.name),at.set(X,xt))}function $t(X,Ct){const xt=l.get(Ct).get(X);u.get(Ct)!==xt&&(i.uniformBlockBinding(Ct,xt,X.__bindingPointIndex),u.set(Ct,xt))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,G={},p={},v=new WeakMap,g=[],m=null,f=!1,x=null,y=null,_=null,S=null,R=null,F=null,z=null,M=!1,E=null,U=null,V=null,D=null,H=null,L.set(0,0,i.canvas.width,i.canvas.height),P.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),d.reset()}return{buffers:{color:o,depth:c,stencil:d},enable:st,disable:J,bindFramebuffer:K,drawBuffers:dt,useProgram:ut,setBlending:pt,setMaterial:it,setFlipSided:ct,setCullFace:Yt,setLineWidth:bt,setPolygonOffset:Ht,setScissorTest:yt,activeTexture:Zt,bindTexture:Qt,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:$,texImage2D:qt,texImage3D:Wt,updateUBOMapping:Ot,uniformBlockBinding:$t,texStorage2D:Et,texStorage3D:ot,texSubImage2D:mt,texSubImage3D:ft,compressedTexSubImage2D:gt,compressedTexSubImage3D:Bt,scissor:kt,viewport:Vt,reset:ie}}function Uf(i,t,e,n,a,r,s){const o=a.isWebGL2,c=a.maxTextures,d=a.maxCubemapSize,u=a.maxTextureSize,l=a.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,T){return f?new OffscreenCanvas(C,T):fr("canvas")}function y(C,T,$,mt){let ft=1;if((C.width>mt||C.height>mt)&&(ft=mt/Math.max(C.width,C.height)),ft<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const gt=T?os:Math.floor,Bt=gt(ft*C.width),Et=gt(ft*C.height);g===void 0&&(g=x(Bt,Et));const ot=$?x(Bt,Et):g;return ot.width=Bt,ot.height=Et,ot.getContext("2d").drawImage(C,0,0,Bt,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Bt+"x"+Et+")."),ot}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function _(C){return Qs(C.width)&&Qs(C.height)}function S(C){return o?!1:C.wrapS!==tn||C.wrapT!==tn||C.minFilter!==Fe&&C.minFilter!==Ye}function R(C,T){return C.generateMipmaps&&T&&C.minFilter!==Fe&&C.minFilter!==Ye}function F(C){i.generateMipmap(C)}function z(C,T,$,mt,ft=!1){if(o===!1)return T;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let gt=T;return T===i.RED&&($===i.FLOAT&&(gt=i.R32F),$===i.HALF_FLOAT&&(gt=i.R16F),$===i.UNSIGNED_BYTE&&(gt=i.R8)),T===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(gt=i.R8UI),$===i.UNSIGNED_SHORT&&(gt=i.R16UI),$===i.UNSIGNED_INT&&(gt=i.R32UI),$===i.BYTE&&(gt=i.R8I),$===i.SHORT&&(gt=i.R16I),$===i.INT&&(gt=i.R32I)),T===i.RG&&($===i.FLOAT&&(gt=i.RG32F),$===i.HALF_FLOAT&&(gt=i.RG16F),$===i.UNSIGNED_BYTE&&(gt=i.RG8)),T===i.RGBA&&($===i.FLOAT&&(gt=i.RGBA32F),$===i.HALF_FLOAT&&(gt=i.RGBA16F),$===i.UNSIGNED_BYTE&&(gt=mt===ve&&ft===!1?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)),(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function M(C,T,$){return R(C,$)===!0||C.isFramebufferTexture&&C.minFilter!==Fe&&C.minFilter!==Ye?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function E(C){return C===Fe||C===ws||C===Sr?i.NEAREST:i.LINEAR}function U(C){const T=C.target;T.removeEventListener("dispose",U),D(T),T.isVideoTexture&&v.delete(T)}function V(C){const T=C.target;T.removeEventListener("dispose",V),W(T)}function D(C){const T=n.get(C);if(T.__webglInit===void 0)return;const $=C.source,mt=m.get($);if(mt){const ft=mt[T.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&H(C),Object.keys(mt).length===0&&m.delete($)}n.remove(C)}function H(C){const T=n.get(C);i.deleteTexture(T.__webglTexture);const $=C.source,mt=m.get($);delete mt[T.__cacheKey],s.memory.textures--}function W(C){const T=C.texture,$=n.get(C),mt=n.get(T);if(mt.__webglTexture!==void 0&&(i.deleteTexture(mt.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray($.__webglFramebuffer[ft]))for(let gt=0;gt<$.__webglFramebuffer[ft].length;gt++)i.deleteFramebuffer($.__webglFramebuffer[ft][gt]);else i.deleteFramebuffer($.__webglFramebuffer[ft]);$.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer[ft])}else{if(Array.isArray($.__webglFramebuffer))for(let ft=0;ft<$.__webglFramebuffer.length;ft++)i.deleteFramebuffer($.__webglFramebuffer[ft]);else i.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&i.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ft=0;ft<$.__webglColorRenderbuffer.length;ft++)$.__webglColorRenderbuffer[ft]&&i.deleteRenderbuffer($.__webglColorRenderbuffer[ft]);$.__webglDepthRenderbuffer&&i.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ft=0,gt=T.length;ft<gt;ft++){const Bt=n.get(T[ft]);Bt.__webglTexture&&(i.deleteTexture(Bt.__webglTexture),s.memory.textures--),n.remove(T[ft])}n.remove(T),n.remove(C)}let rt=0;function B(){rt=0}function I(){const C=rt;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),rt+=1,C}function j(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function G(C,T){const $=n.get(C);if(C.isVideoTexture&&Zt(C),C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){const mt=C.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,C,T);return}}e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+T)}function A(C,T){const $=n.get(C);if(C.version>0&&$.__version!==C.version){K($,C,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+T)}function N(C,T){const $=n.get(C);if(C.version>0&&$.__version!==C.version){K($,C,T);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+T)}function L(C,T){const $=n.get(C);if(C.version>0&&$.__version!==C.version){dt($,C,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+T)}const P={[is]:i.REPEAT,[tn]:i.CLAMP_TO_EDGE,[rs]:i.MIRRORED_REPEAT},b={[Fe]:i.NEAREST,[ws]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[ll]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},Z={[El]:i.NEVER,[Pl]:i.ALWAYS,[wl]:i.LESS,[Al]:i.LEQUAL,[Tl]:i.EQUAL,[Cl]:i.GEQUAL,[bl]:i.GREATER,[Rl]:i.NOTEQUAL};function st(C,T,$){if($?(i.texParameteri(C,i.TEXTURE_WRAP_S,P[T.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,P[T.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,P[T.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,b[T.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,b[T.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==tn||T.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,E(T.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,E(T.minFilter)),T.minFilter!==Fe&&T.minFilter!==Ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const mt=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Fe||T.minFilter!==Sr&&T.minFilter!==Li||T.type===Rn&&t.has("OES_texture_float_linear")===!1||o===!1&&T.type===Ii&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(C,mt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function J(C,T){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",U));const mt=T.source;let ft=m.get(mt);ft===void 0&&(ft={},m.set(mt,ft));const gt=j(T);if(gt!==C.__cacheKey){ft[gt]===void 0&&(ft[gt]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,$=!0),ft[gt].usedTimes++;const Bt=ft[C.__cacheKey];Bt!==void 0&&(ft[C.__cacheKey].usedTimes--,Bt.usedTimes===0&&H(T)),C.__cacheKey=gt,C.__webglTexture=ft[gt].texture}return $}function K(C,T,$){let mt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=i.TEXTURE_3D);const ft=J(C,T),gt=T.source;e.bindTexture(mt,C.__webglTexture,i.TEXTURE0+$);const Bt=n.get(gt);if(gt.version!==Bt.__version||ft===!0){e.activeTexture(i.TEXTURE0+$),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Et=S(T)&&_(T.image)===!1;let ot=y(T.image,Et,!1,u);ot=Qt(T,ot);const qt=_(ot)||o,Wt=r.convert(T.format,T.colorSpace);let kt=r.convert(T.type),Vt=z(T.internalFormat,Wt,kt,T.colorSpace,T.isVideoTexture);st(mt,T,qt);let Ot;const $t=T.mipmaps,ie=o&&T.isVideoTexture!==!0,X=Bt.__version===void 0||ft===!0,Ct=M(T,ot,qt);if(T.isDepthTexture)Vt=i.DEPTH_COMPONENT,o?T.type===Rn?Vt=i.DEPTH_COMPONENT32F:T.type===bn?Vt=i.DEPTH_COMPONENT24:T.type===Vn?Vt=i.DEPTH24_STENCIL8:Vt=i.DEPTH_COMPONENT16:T.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Gn&&Vt===i.DEPTH_COMPONENT&&T.type!==ds&&T.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=bn,kt=r.convert(T.type)),T.format===mi&&Vt===i.DEPTH_COMPONENT&&(Vt=i.DEPTH_STENCIL,T.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Vn,kt=r.convert(T.type))),X&&(ie?e.texStorage2D(i.TEXTURE_2D,1,Vt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Vt,ot.width,ot.height,0,Wt,kt,null));else if(T.isDataTexture)if($t.length>0&&qt){ie&&X&&e.texStorage2D(i.TEXTURE_2D,Ct,Vt,$t[0].width,$t[0].height);for(let at=0,xt=$t.length;at<xt;at++)Ot=$t[at],ie?e.texSubImage2D(i.TEXTURE_2D,at,0,0,Ot.width,Ot.height,Wt,kt,Ot.data):e.texImage2D(i.TEXTURE_2D,at,Vt,Ot.width,Ot.height,0,Wt,kt,Ot.data);T.generateMipmaps=!1}else ie?(X&&e.texStorage2D(i.TEXTURE_2D,Ct,Vt,ot.width,ot.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,Wt,kt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,ot.width,ot.height,0,Wt,kt,ot.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ie&&X&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Vt,$t[0].width,$t[0].height,ot.depth);for(let at=0,xt=$t.length;at<xt;at++)Ot=$t[at],T.format!==en?Wt!==null?ie?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Ot.width,Ot.height,ot.depth,Wt,Ot.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Vt,Ot.width,Ot.height,ot.depth,0,Ot.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Ot.width,Ot.height,ot.depth,Wt,kt,Ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Vt,Ot.width,Ot.height,ot.depth,0,Wt,kt,Ot.data)}else{ie&&X&&e.texStorage2D(i.TEXTURE_2D,Ct,Vt,$t[0].width,$t[0].height);for(let at=0,xt=$t.length;at<xt;at++)Ot=$t[at],T.format!==en?Wt!==null?ie?e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,Ot.width,Ot.height,Wt,Ot.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Vt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?e.texSubImage2D(i.TEXTURE_2D,at,0,0,Ot.width,Ot.height,Wt,kt,Ot.data):e.texImage2D(i.TEXTURE_2D,at,Vt,Ot.width,Ot.height,0,Wt,kt,Ot.data)}else if(T.isDataArrayTexture)ie?(X&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Vt,ot.width,ot.height,ot.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Wt,kt,ot.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,ot.width,ot.height,ot.depth,0,Wt,kt,ot.data);else if(T.isData3DTexture)ie?(X&&e.texStorage3D(i.TEXTURE_3D,Ct,Vt,ot.width,ot.height,ot.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Wt,kt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,ot.width,ot.height,ot.depth,0,Wt,kt,ot.data);else if(T.isFramebufferTexture){if(X)if(ie)e.texStorage2D(i.TEXTURE_2D,Ct,Vt,ot.width,ot.height);else{let at=ot.width,xt=ot.height;for(let Ut=0;Ut<Ct;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Vt,at,xt,0,Wt,kt,null),at>>=1,xt>>=1}}else if($t.length>0&&qt){ie&&X&&e.texStorage2D(i.TEXTURE_2D,Ct,Vt,$t[0].width,$t[0].height);for(let at=0,xt=$t.length;at<xt;at++)Ot=$t[at],ie?e.texSubImage2D(i.TEXTURE_2D,at,0,0,Wt,kt,Ot):e.texImage2D(i.TEXTURE_2D,at,Vt,Wt,kt,Ot);T.generateMipmaps=!1}else ie?(X&&e.texStorage2D(i.TEXTURE_2D,Ct,Vt,ot.width,ot.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Wt,kt,ot)):e.texImage2D(i.TEXTURE_2D,0,Vt,Wt,kt,ot);R(T,qt)&&F(mt),Bt.__version=gt.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function dt(C,T,$){if(T.image.length!==6)return;const mt=J(C,T),ft=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+$);const gt=n.get(ft);if(ft.version!==gt.__version||mt===!0){e.activeTexture(i.TEXTURE0+$),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Bt=T.isCompressedTexture||T.image[0].isCompressedTexture,Et=T.image[0]&&T.image[0].isDataTexture,ot=[];for(let at=0;at<6;at++)!Bt&&!Et?ot[at]=y(T.image[at],!1,!0,d):ot[at]=Et?T.image[at].image:T.image[at],ot[at]=Qt(T,ot[at]);const qt=ot[0],Wt=_(qt)||o,kt=r.convert(T.format,T.colorSpace),Vt=r.convert(T.type),Ot=z(T.internalFormat,kt,Vt,T.colorSpace),$t=o&&T.isVideoTexture!==!0,ie=gt.__version===void 0||mt===!0;let X=M(T,qt,Wt);st(i.TEXTURE_CUBE_MAP,T,Wt);let Ct;if(Bt){$t&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,X,Ot,qt.width,qt.height);for(let at=0;at<6;at++){Ct=ot[at].mipmaps;for(let xt=0;xt<Ct.length;xt++){const Ut=Ct[xt];T.format!==en?kt!==null?$t?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,0,0,Ut.width,Ut.height,kt,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,Ot,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,0,0,Ut.width,Ut.height,kt,Vt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,Ot,Ut.width,Ut.height,0,kt,Vt,Ut.data)}}}else{Ct=T.mipmaps,$t&&ie&&(Ct.length>0&&X++,e.texStorage2D(i.TEXTURE_CUBE_MAP,X,Ot,ot[0].width,ot[0].height));for(let at=0;at<6;at++)if(Et){$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,ot[at].width,ot[at].height,kt,Vt,ot[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Ot,ot[at].width,ot[at].height,0,kt,Vt,ot[at].data);for(let xt=0;xt<Ct.length;xt++){const ee=Ct[xt].image[at].image;$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,0,0,ee.width,ee.height,kt,Vt,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,Ot,ee.width,ee.height,0,kt,Vt,ee.data)}}else{$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,kt,Vt,ot[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Ot,kt,Vt,ot[at]);for(let xt=0;xt<Ct.length;xt++){const Ut=Ct[xt];$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,0,0,kt,Vt,Ut.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,Ot,kt,Vt,Ut.image[at])}}}R(T,Wt)&&F(i.TEXTURE_CUBE_MAP),gt.__version=ft.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ut(C,T,$,mt,ft,gt){const Bt=r.convert($.format,$.colorSpace),Et=r.convert($.type),ot=z($.internalFormat,Bt,Et,$.colorSpace);if(!n.get(T).__hasExternalTextures){const Wt=Math.max(1,T.width>>gt),kt=Math.max(1,T.height>>gt);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,gt,ot,Wt,kt,T.depth,0,Bt,Et,null):e.texImage2D(ft,gt,ot,Wt,kt,0,Bt,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),yt(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,ft,n.get($).__webglTexture,0,Ht(T)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,mt,ft,n.get($).__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function k(C,T,$){if(i.bindRenderbuffer(i.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let mt=i.DEPTH_COMPONENT16;if($||yt(T)){const ft=T.depthTexture;ft&&ft.isDepthTexture&&(ft.type===Rn?mt=i.DEPTH_COMPONENT32F:ft.type===bn&&(mt=i.DEPTH_COMPONENT24));const gt=Ht(T);yt(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,mt,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,mt,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,mt,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const mt=Ht(T);$&&yt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,i.DEPTH24_STENCIL8,T.width,T.height):yt(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{const mt=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ft=0;ft<mt.length;ft++){const gt=mt[ft],Bt=r.convert(gt.format,gt.colorSpace),Et=r.convert(gt.type),ot=z(gt.internalFormat,Bt,Et,gt.colorSpace),qt=Ht(T);$&&yt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,ot,T.width,T.height):yt(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,ot,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ot,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const mt=n.get(T.depthTexture).__webglTexture,ft=Ht(T);if(T.depthTexture.format===Gn)yt(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0);else if(T.depthTexture.format===mi)yt(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function pt(C){const T=n.get(C),$=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Tt(T.__webglFramebuffer,C)}else if($){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]=i.createRenderbuffer(),k(T.__webglDepthbuffer[mt],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),k(T.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(C,T,$){const mt=n.get(C);T!==void 0&&ut(mt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&pt(C)}function ct(C){const T=C.texture,$=n.get(C),mt=n.get(T);C.addEventListener("dispose",V),C.isWebGLMultipleRenderTargets!==!0&&(mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture()),mt.__version=T.version,s.memory.textures++);const ft=C.isWebGLCubeRenderTarget===!0,gt=C.isWebGLMultipleRenderTargets===!0,Bt=_(C)||o;if(ft){$.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(o&&T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[Et]=[];for(let ot=0;ot<T.mipmaps.length;ot++)$.__webglFramebuffer[Et][ot]=i.createFramebuffer()}else $.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let Et=0;Et<T.mipmaps.length;Et++)$.__webglFramebuffer[Et]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(gt)if(a.drawBuffers){const Et=C.texture;for(let ot=0,qt=Et.length;ot<qt;ot++){const Wt=n.get(Et[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&yt(C)===!1){const Et=gt?T:[T];$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ot=0;ot<Et.length;ot++){const qt=Et[ot];$.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[ot]);const Wt=r.convert(qt.format,qt.colorSpace),kt=r.convert(qt.type),Vt=z(qt.internalFormat,Wt,kt,qt.colorSpace,C.isXRRenderTarget===!0),Ot=Ht(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Vt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,$.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),k($.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),st(i.TEXTURE_CUBE_MAP,T,Bt);for(let Et=0;Et<6;Et++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let ot=0;ot<T.mipmaps.length;ot++)ut($.__webglFramebuffer[Et][ot],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ot);else ut($.__webglFramebuffer[Et],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);R(T,Bt)&&F(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){const Et=C.texture;for(let ot=0,qt=Et.length;ot<qt;ot++){const Wt=Et[ot],kt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,kt.__webglTexture),st(i.TEXTURE_2D,Wt,Bt),ut($.__webglFramebuffer,C,Wt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),R(Wt,Bt)&&F(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?Et=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Et,mt.__webglTexture),st(Et,T,Bt),o&&T.mipmaps&&T.mipmaps.length>0)for(let ot=0;ot<T.mipmaps.length;ot++)ut($.__webglFramebuffer[ot],C,T,i.COLOR_ATTACHMENT0,Et,ot);else ut($.__webglFramebuffer,C,T,i.COLOR_ATTACHMENT0,Et,0);R(T,Bt)&&F(Et),e.unbindTexture()}C.depthBuffer&&pt(C)}function Yt(C){const T=_(C)||o,$=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let mt=0,ft=$.length;mt<ft;mt++){const gt=$[mt];if(R(gt,T)){const Bt=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(gt).__webglTexture;e.bindTexture(Bt,Et),F(Bt),e.unbindTexture()}}}function bt(C){if(o&&C.samples>0&&yt(C)===!1){const T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],$=C.width,mt=C.height;let ft=i.COLOR_BUFFER_BIT;const gt=[],Bt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(C),ot=C.isWebGLMultipleRenderTargets===!0;if(ot)for(let qt=0;qt<T.length;qt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let qt=0;qt<T.length;qt++){gt.push(i.COLOR_ATTACHMENT0+qt),C.depthBuffer&&gt.push(Bt);const Wt=Et.__ignoreDepthValues!==void 0?Et.__ignoreDepthValues:!1;if(Wt===!1&&(C.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),ot&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[qt]),Wt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Bt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Bt])),ot){const kt=n.get(T[qt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,$,mt,0,0,$,mt,ft,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let qt=0;qt<T.length;qt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[qt]);const Wt=n.get(T[qt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}}function Ht(C){return Math.min(l,C.samples)}function yt(C){const T=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Zt(C){const T=s.render.frame;v.get(C)!==T&&(v.set(C,T),C.update())}function Qt(C,T){const $=C.colorSpace,mt=C.format,ft=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ss||$!==dn&&$!==Wn&&($===ve||$===mr?o===!1?t.has("EXT_sRGB")===!0&&mt===en?(C.format=ss,C.minFilter=Ye,C.generateMipmaps=!1):T=no.sRGBToLinear(T):(mt!==en||ft!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}this.allocateTextureUnit=I,this.resetTextureUnits=B,this.setTexture2D=G,this.setTexture2DArray=A,this.setTexture3D=N,this.setTextureCube=L,this.rebindTextures=it,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=yt}const Df=0,Ee=1;function Nf(i,t,e){const n=e.isWebGL2;function a(r,s=Wn){let o;const c=s===ve||s===mr?Ee:Df;if(r===Ln)return i.UNSIGNED_BYTE;if(r===Ka)return i.UNSIGNED_SHORT_4_4_4_4;if(r===ja)return i.UNSIGNED_SHORT_5_5_5_1;if(r===cl)return i.BYTE;if(r===ul)return i.SHORT;if(r===ds)return i.UNSIGNED_SHORT;if(r===Za)return i.INT;if(r===bn)return i.UNSIGNED_INT;if(r===Rn)return i.FLOAT;if(r===Ii)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===hl)return i.ALPHA;if(r===en)return i.RGBA;if(r===dl)return i.LUMINANCE;if(r===fl)return i.LUMINANCE_ALPHA;if(r===Gn)return i.DEPTH_COMPONENT;if(r===mi)return i.DEPTH_STENCIL;if(r===ss)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===pl)return i.RED;if(r===$a)return i.RED_INTEGER;if(r===ml)return i.RG;if(r===Qa)return i.RG_INTEGER;if(r===Ja)return i.RGBA_INTEGER;if(r===Er||r===wr||r===Tr||r===Ar)if(c===Ee)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Er)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Er)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ar)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ts||r===As||r===bs||r===Rs)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ts)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===As)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bs)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rs)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vl)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Cs||r===Ps)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Cs)return c===Ee?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ps)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ls||r===Is||r===Us||r===Ds||r===Ns||r===Fs||r===Bs||r===Os||r===zs||r===Vs||r===Gs||r===Hs||r===Ws||r===ks)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ls)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Is)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Us)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ds)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ns)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fs)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bs)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Os)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zs)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vs)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gs)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hs)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ws)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ks)return c===Ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===br||r===Xs||r===qs)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===br)return c===Ee?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xs)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qs)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gl||r===Ys||r===Zs||r===Ks)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===br)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ys)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zs)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ks)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vn?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:a}}class Ff extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class bi extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bf={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let a=null,r=null,s=null;const o=this._targetRay,c=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){s=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(d,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=d.joints["index-finger-tip"],l=d.joints["thumb-tip"],h=u.position.distanceTo(l.position),p=.02,v=.005;d.inputState.pinching&&h>p+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&h<=p-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(a=e.getPose(t.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bf)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=r!==null),d!==null&&(d.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Of extends ke{constructor(t,e,n,a,r,s,o,c,d,u){if(u=u!==void 0?u:Gn,u!==Gn&&u!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Gn&&(n=bn),n===void 0&&u===mi&&(n=Vn),super(null,a,r,s,o,c,u,n,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Fe,this.minFilter=c!==void 0?c:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class zf extends gi{constructor(t,e){super();const n=this;let a=null,r=1,s=null,o="local-floor",c=1,d=null,u=null,l=null,h=null,p=null,v=null;const g=e.getContextAttributes();let m=null,f=null;const x=[],y=[],_=new Ze;_.layers.enable(1),_.viewport=new Le;const S=new Ze;S.layers.enable(2),S.viewport=new Le;const R=[_,S],F=new Ff;F.layers.enable(1),F.layers.enable(2);let z=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let N=x[A];return N===void 0&&(N=new $r,x[A]=N),N.getTargetRaySpace()},this.getControllerGrip=function(A){let N=x[A];return N===void 0&&(N=new $r,x[A]=N),N.getGripSpace()},this.getHand=function(A){let N=x[A];return N===void 0&&(N=new $r,x[A]=N),N.getHandSpace()};function E(A){const N=y.indexOf(A.inputSource);if(N===-1)return;const L=x[N];L!==void 0&&(L.update(A.inputSource,A.frame,d||s),L.dispatchEvent({type:A.type,data:A.inputSource}))}function U(){a.removeEventListener("select",E),a.removeEventListener("selectstart",E),a.removeEventListener("selectend",E),a.removeEventListener("squeeze",E),a.removeEventListener("squeezestart",E),a.removeEventListener("squeezeend",E),a.removeEventListener("end",U),a.removeEventListener("inputsourceschange",V);for(let A=0;A<x.length;A++){const N=y[A];N!==null&&(y[A]=null,x[A].disconnect(N))}z=null,M=null,t.setRenderTarget(m),p=null,h=null,l=null,a=null,f=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){r=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){o=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||s},this.setReferenceSpace=function(A){d=A},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(A){if(a=A,a!==null){if(m=t.getRenderTarget(),a.addEventListener("select",E),a.addEventListener("selectstart",E),a.addEventListener("selectend",E),a.addEventListener("squeeze",E),a.addEventListener("squeezestart",E),a.addEventListener("squeezeend",E),a.addEventListener("end",U),a.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),a.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const N={antialias:a.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,e,N),a.updateRenderState({baseLayer:p}),f=new kn(p.framebufferWidth,p.framebufferHeight,{format:en,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let N=null,L=null,P=null;g.depth&&(P=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,N=g.stencil?mi:Gn,L=g.stencil?Vn:bn);const b={colorFormat:e.RGBA8,depthFormat:P,scaleFactor:r};l=new XRWebGLBinding(a,e),h=l.createProjectionLayer(b),a.updateRenderState({layers:[h]}),f=new kn(h.textureWidth,h.textureHeight,{format:en,type:Ln,depthTexture:new Of(h.textureWidth,h.textureHeight,L,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const Z=t.properties.get(f);Z.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),d=null,s=await a.requestReferenceSpace(o),G.setContext(a),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function V(A){for(let N=0;N<A.removed.length;N++){const L=A.removed[N],P=y.indexOf(L);P>=0&&(y[P]=null,x[P].disconnect(L))}for(let N=0;N<A.added.length;N++){const L=A.added[N];let P=y.indexOf(L);if(P===-1){for(let Z=0;Z<x.length;Z++)if(Z>=y.length){y.push(L),P=Z;break}else if(y[Z]===null){y[Z]=L,P=Z;break}if(P===-1)break}const b=x[P];b&&b.connect(L)}}const D=new nt,H=new nt;function W(A,N,L){D.setFromMatrixPosition(N.matrixWorld),H.setFromMatrixPosition(L.matrixWorld);const P=D.distanceTo(H),b=N.projectionMatrix.elements,Z=L.projectionMatrix.elements,st=b[14]/(b[10]-1),J=b[14]/(b[10]+1),K=(b[9]+1)/b[5],dt=(b[9]-1)/b[5],ut=(b[8]-1)/b[0],k=(Z[8]+1)/Z[0],Tt=st*ut,pt=st*k,it=P/(-ut+k),ct=it*-ut;N.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(ct),A.translateZ(it),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const Yt=st+it,bt=J+it,Ht=Tt-ct,yt=pt+(P-ct),Zt=K*J/bt*Yt,Qt=dt*J/bt*Yt;A.projectionMatrix.makePerspective(Ht,yt,Zt,Qt,Yt,bt),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}function rt(A,N){N===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(N.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(a===null)return;F.near=S.near=_.near=A.near,F.far=S.far=_.far=A.far,(z!==F.near||M!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,M=F.far);const N=A.parent,L=F.cameras;rt(F,N);for(let P=0;P<L.length;P++)rt(L[P],N);L.length===2?W(F,_,S):F.projectionMatrix.copy(_.projectionMatrix),B(A,F,N)};function B(A,N,L){L===null?A.matrix.copy(N.matrixWorld):(A.matrix.copy(L.matrixWorld),A.matrix.invert(),A.matrix.multiply(N.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(N.projectionMatrix),A.projectionMatrixInverse.copy(N.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=as*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(A){c=A,h!==null&&(h.fixedFoveation=A),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=A)};let I=null;function j(A,N){if(u=N.getViewerPose(d||s),v=N,u!==null){const L=u.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let P=!1;L.length!==F.cameras.length&&(F.cameras.length=0,P=!0);for(let b=0;b<L.length;b++){const Z=L[b];let st=null;if(p!==null)st=p.getViewport(Z);else{const K=l.getViewSubImage(h,Z);st=K.viewport,b===0&&(t.setRenderTargetTextures(f,K.colorTexture,h.ignoreDepthValues?void 0:K.depthStencilTexture),t.setRenderTarget(f))}let J=R[b];J===void 0&&(J=new Ze,J.layers.enable(b),J.viewport=new Le,R[b]=J),J.matrix.fromArray(Z.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Z.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(st.x,st.y,st.width,st.height),b===0&&(F.matrix.copy(J.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),P===!0&&F.cameras.push(J)}}for(let L=0;L<x.length;L++){const P=y[L],b=x[L];P!==null&&b!==void 0&&b.update(P,N,d||s)}I&&I(A,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),v=null}const G=new mo;G.setAnimationLoop(j),this.setAnimationLoop=function(A){I=A},this.dispose=function(){}}}function Vf(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,uo(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,x,y,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),l(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,x,y):f.isSpriteMaterial?d(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function l(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ze&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Gf(i,t,e,n){let a={},r={},s=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,y){const _=y.program;n.uniformBlockBinding(x,_)}function d(x,y){let _=a[x.id];_===void 0&&(v(x),_=u(x),a[x.id]=_,x.addEventListener("dispose",m));const S=y.program;n.updateUBOMapping(x,S);const R=t.render.frame;r[x.id]!==R&&(h(x),r[x.id]=R)}function u(x){const y=l();x.__bindingPointIndex=y;const _=i.createBuffer(),S=x.__size,R=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,S,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function l(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=a[x.id],_=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,F=_.length;R<F;R++){const z=_[R];if(p(z,R,S)===!0){const M=z.__offset,E=Array.isArray(z.value)?z.value:[z.value];let U=0;for(let V=0;V<E.length;V++){const D=E[V],H=g(D);typeof D=="number"?(z.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,M+U,z.__data)):D.isMatrix3?(z.__data[0]=D.elements[0],z.__data[1]=D.elements[1],z.__data[2]=D.elements[2],z.__data[3]=D.elements[0],z.__data[4]=D.elements[3],z.__data[5]=D.elements[4],z.__data[6]=D.elements[5],z.__data[7]=D.elements[0],z.__data[8]=D.elements[6],z.__data[9]=D.elements[7],z.__data[10]=D.elements[8],z.__data[11]=D.elements[0]):(D.toArray(z.__data,U),U+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,z.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,y,_){const S=x.value;if(_[y]===void 0){if(typeof S=="number")_[y]=S;else{const R=Array.isArray(S)?S:[S],F=[];for(let z=0;z<R.length;z++)F.push(R[z].clone());_[y]=F}return!0}else if(typeof S=="number"){if(_[y]!==S)return _[y]=S,!0}else{const R=Array.isArray(_[y])?_[y]:[_[y]],F=Array.isArray(S)?S:[S];for(let z=0;z<R.length;z++){const M=R[z];if(M.equals(F[z])===!1)return M.copy(F[z]),!0}}return!1}function v(x){const y=x.uniforms;let _=0;const S=16;let R=0;for(let F=0,z=y.length;F<z;F++){const M=y[F],E={boundary:0,storage:0},U=Array.isArray(M.value)?M.value:[M.value];for(let V=0,D=U.length;V<D;V++){const H=U[V],W=g(H);E.boundary+=W.boundary,E.storage+=W.storage}if(M.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=_,F>0){R=_%S;const V=S-R;R!==0&&V-E.boundary<0&&(_+=S-R,M.__offset=_)}_+=E.storage}return R=_%S,R>0&&(_+=S-R),x.__size=_,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const _=s.indexOf(y.__bindingPointIndex);s.splice(_,1),i.deleteBuffer(a[y.id]),delete a[y.id],delete r[y.id]}function f(){for(const x in a)i.deleteBuffer(a[x]);s=[],a={},r={}}return{bind:c,update:d,dispose:f}}class yo{constructor(t={}){const{canvas:e=Il(),context:n=null,depth:a=!0,stencil:r=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:l=!1}=t;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=s;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ve,this._useLegacyLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1;const y=this;let _=!1,S=0,R=0,F=null,z=-1,M=null;const E=new Le,U=new Le;let V=null;const D=new pe(0);let H=0,W=e.width,rt=e.height,B=1,I=null,j=null;const G=new Le(0,0,W,rt),A=new Le(0,0,W,rt);let N=!1;const L=new po;let P=!1,b=!1,Z=null;const st=new be,J=new fe,K=new nt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ut(){return F===null?B:1}let k=n;function Tt(w,O){for(let q=0;q<w.length;q++){const Y=w[q],Q=e.getContext(Y,O);if(Q!==null)return Q}return null}try{const w={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hs}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",xt,!1),k===null){const O=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&O.shift(),k=Tt(O,w),k===null)throw Tt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let pt,it,ct,Yt,bt,Ht,yt,Zt,Qt,C,T,$,mt,ft,gt,Bt,Et,ot,qt,Wt,kt,Vt,Ot,$t;function ie(){pt=new jh(k),it=new Wh(k,pt,t),pt.init(it),Vt=new Nf(k,pt,it),ct=new If(k,pt,it),Yt=new Jh(k),bt=new _f,Ht=new Uf(k,pt,ct,bt,it,Vt,Yt),yt=new Xh(y),Zt=new Kh(y),Qt=new lc(k,it),Ot=new Gh(k,pt,Qt,it),C=new $h(k,Qt,Yt,Ot),T=new id(k,C,Qt,Yt),qt=new nd(k,it,Ht),Bt=new kh(bt),$=new gf(y,yt,Zt,pt,it,Ot,Bt),mt=new Vf(y,bt),ft=new yf,gt=new Af(pt,it),ot=new Vh(y,yt,Zt,ct,T,h,c),Et=new Lf(y,T,it),$t=new Gf(k,Yt,it,ct),Wt=new Hh(k,pt,Yt,it),kt=new Qh(k,pt,Yt,it),Yt.programs=$.programs,y.capabilities=it,y.extensions=pt,y.properties=bt,y.renderLists=ft,y.shadowMap=Et,y.state=ct,y.info=Yt}ie();const X=new zf(y,k);this.xr=X,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(W,rt,!1))},this.getSize=function(w){return w.set(W,rt)},this.setSize=function(w,O,q=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,rt=O,e.width=Math.floor(w*B),e.height=Math.floor(O*B),q===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(W*B,rt*B).floor()},this.setDrawingBufferSize=function(w,O,q){W=w,rt=O,B=q,e.width=Math.floor(w*q),e.height=Math.floor(O*q),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(G)},this.setViewport=function(w,O,q,Y){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,O,q,Y),ct.viewport(E.copy(G).multiplyScalar(B).floor())},this.getScissor=function(w){return w.copy(A)},this.setScissor=function(w,O,q,Y){w.isVector4?A.set(w.x,w.y,w.z,w.w):A.set(w,O,q,Y),ct.scissor(U.copy(A).multiplyScalar(B).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(w){ct.setScissorTest(N=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){j=w},this.getClearColor=function(w){return w.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(w=!0,O=!0,q=!0){let Y=0;if(w){let Q=!1;if(F!==null){const tt=F.texture.format;Q=tt===Ja||tt===Qa||tt===$a}if(Q){const tt=F.texture.type,Mt=tt===Ln||tt===bn||tt===ds||tt===Vn||tt===Ka||tt===ja,Rt=ot.getClearColor(),Gt=ot.getClearAlpha(),Ft=Rt.r,Lt=Rt.g,St=Rt.b;Mt?(p[0]=Ft,p[1]=Lt,p[2]=St,p[3]=Gt,k.clearBufferuiv(k.COLOR,0,p)):(v[0]=Ft,v[1]=Lt,v[2]=St,v[3]=Gt,k.clearBufferiv(k.COLOR,0,v))}else Y|=k.COLOR_BUFFER_BIT}O&&(Y|=k.DEPTH_BUFFER_BIT),q&&(Y|=k.STENCIL_BUFFER_BIT),k.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),ft.dispose(),gt.dispose(),bt.dispose(),yt.dispose(),Zt.dispose(),T.dispose(),Ot.dispose(),$t.dispose(),$.dispose(),X.dispose(),X.removeEventListener("sessionstart",te),X.removeEventListener("sessionend",lt),Z&&(Z.dispose(),Z=null),ht.stop()};function Ct(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const w=Yt.autoReset,O=Et.enabled,q=Et.autoUpdate,Y=Et.needsUpdate,Q=Et.type;ie(),Yt.autoReset=w,Et.enabled=O,Et.autoUpdate=q,Et.needsUpdate=Y,Et.type=Q}function xt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ut(w){const O=w.target;O.removeEventListener("dispose",Ut),ee(O)}function ee(w){le(w),bt.remove(w)}function le(w){const O=bt.get(w).programs;O!==void 0&&(O.forEach(function(q){$.releaseProgram(q)}),w.isShaderMaterial&&$.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,q,Y,Q,tt){O===null&&(O=dt);const Mt=Q.isMesh&&Q.matrixWorld.determinant()<0,Rt=At(w,O,q,Y,Q);ct.setMaterial(Y,Mt);let Gt=q.index,Ft=1;if(Y.wireframe===!0){if(Gt=C.getWireframeAttribute(q),Gt===void 0)return;Ft=2}const Lt=q.drawRange,St=q.attributes.position;let se=Lt.start*Ft,oe=(Lt.start+Lt.count)*Ft;tt!==null&&(se=Math.max(se,tt.start*Ft),oe=Math.min(oe,(tt.start+tt.count)*Ft)),Gt!==null?(se=Math.max(se,0),oe=Math.min(oe,Gt.count)):St!=null&&(se=Math.max(se,0),oe=Math.min(oe,St.count));const he=oe-se;if(he<0||he===1/0)return;Ot.setup(Q,Y,Rt,q,Gt);let Se,ae=Wt;if(Gt!==null&&(Se=Qt.get(Gt),ae=kt,ae.setIndex(Se)),Q.isMesh)Y.wireframe===!0?(ct.setLineWidth(Y.wireframeLinewidth*ut()),ae.setMode(k.LINES)):ae.setMode(k.TRIANGLES);else if(Q.isLine){let Xt=Y.linewidth;Xt===void 0&&(Xt=1),ct.setLineWidth(Xt*ut()),Q.isLineSegments?ae.setMode(k.LINES):Q.isLineLoop?ae.setMode(k.LINE_LOOP):ae.setMode(k.LINE_STRIP)}else Q.isPoints?ae.setMode(k.POINTS):Q.isSprite&&ae.setMode(k.TRIANGLES);if(Q.isInstancedMesh)ae.renderInstances(se,he,Q.count);else if(q.isInstancedBufferGeometry){const Xt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ge=Math.min(q.instanceCount,Xt);ae.renderInstances(se,he,Ge)}else ae.render(se,he)},this.compile=function(w,O){function q(Y,Q,tt){Y.transparent===!0&&Y.side===cn&&Y.forceSinglePass===!1?(Y.side=ze,Y.needsUpdate=!0,Pt(Y,Q,tt),Y.side=In,Y.needsUpdate=!0,Pt(Y,Q,tt),Y.side=cn):Pt(Y,Q,tt)}m=gt.get(w),m.init(),x.push(m),w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(y._useLegacyLights),w.traverse(function(Y){const Q=Y.material;if(Q)if(Array.isArray(Q))for(let tt=0;tt<Q.length;tt++){const Mt=Q[tt];q(Mt,w,Y)}else q(Q,w,Y)}),x.pop(),m=null};let ue=null;function De(w){ue&&ue(w)}function te(){ht.stop()}function lt(){ht.start()}const ht=new mo;ht.setAnimationLoop(De),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(w){ue=w,X.setAnimationLoop(w),w===null?ht.stop():ht.start()},X.addEventListener("sessionstart",te),X.addEventListener("sessionend",lt),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,O,F),m=gt.get(w,x.length),m.init(),x.push(m),st.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),L.setFromProjectionMatrix(st),b=this.localClippingEnabled,P=Bt.init(this.clippingPlanes,b),g=ft.get(w,f.length),g.init(),f.push(g),vt(w,O,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(I,j),this.info.render.frame++,P===!0&&Bt.beginShadows();const q=m.state.shadowsArray;if(Et.render(q,w,O),P===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(g,w),m.setupLights(y._useLegacyLights),O.isArrayCamera){const Y=O.cameras;for(let Q=0,tt=Y.length;Q<tt;Q++){const Mt=Y[Q];_t(g,w,Mt,Mt.viewport)}}else _t(g,w,O);F!==null&&(Ht.updateMultisampleRenderTarget(F),Ht.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(y,w,O),Ot.resetDefaultState(),z=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function vt(w,O,q,Y){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||L.intersectsSprite(w)){Y&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(st);const Mt=T.update(w),Rt=w.material;Rt.visible&&g.push(w,Mt,Rt,q,K.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||L.intersectsObject(w))){const Mt=T.update(w),Rt=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),K.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),K.copy(Mt.boundingSphere.center)),K.applyMatrix4(w.matrixWorld).applyMatrix4(st)),Array.isArray(Rt)){const Gt=Mt.groups;for(let Ft=0,Lt=Gt.length;Ft<Lt;Ft++){const St=Gt[Ft],se=Rt[St.materialIndex];se&&se.visible&&g.push(w,Mt,se,q,K.z,St)}}else Rt.visible&&g.push(w,Mt,Rt,q,K.z,null)}}const tt=w.children;for(let Mt=0,Rt=tt.length;Mt<Rt;Mt++)vt(tt[Mt],O,q,Y)}function _t(w,O,q,Y){const Q=w.opaque,tt=w.transmissive,Mt=w.transparent;m.setupLightsView(q),P===!0&&Bt.setGlobalState(y.clippingPlanes,q),tt.length>0&&Kt(Q,tt,O,q),Y&&ct.viewport(E.copy(Y)),Q.length>0&&It(Q,O,q),tt.length>0&&It(tt,O,q),Mt.length>0&&It(Mt,O,q),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Kt(w,O,q,Y){const Q=it.isWebGL2;Z===null&&(Z=new kn(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")?Ii:Ln,minFilter:Li,samples:Q?4:0})),y.getDrawingBufferSize(J),Q?Z.setSize(J.x,J.y):Z.setSize(os(J.x),os(J.y));const tt=y.getRenderTarget();y.setRenderTarget(Z),y.getClearColor(D),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear();const Mt=y.toneMapping;y.toneMapping=Pn,It(w,q,Y),Ht.updateMultisampleRenderTarget(Z),Ht.updateRenderTargetMipmap(Z);let Rt=!1;for(let Gt=0,Ft=O.length;Gt<Ft;Gt++){const Lt=O[Gt],St=Lt.object,se=Lt.geometry,oe=Lt.material,he=Lt.group;if(oe.side===cn&&St.layers.test(Y.layers)){const Se=oe.side;oe.side=ze,oe.needsUpdate=!0,wt(St,q,Y,se,oe,he),oe.side=Se,oe.needsUpdate=!0,Rt=!0}}Rt===!0&&(Ht.updateMultisampleRenderTarget(Z),Ht.updateRenderTargetMipmap(Z)),y.setRenderTarget(tt),y.setClearColor(D,H),y.toneMapping=Mt}function It(w,O,q){const Y=O.isScene===!0?O.overrideMaterial:null;for(let Q=0,tt=w.length;Q<tt;Q++){const Mt=w[Q],Rt=Mt.object,Gt=Mt.geometry,Ft=Y===null?Mt.material:Y,Lt=Mt.group;Rt.layers.test(q.layers)&&wt(Rt,O,q,Gt,Ft,Lt)}}function wt(w,O,q,Y,Q,tt){w.onBeforeRender(y,O,q,Y,Q,tt),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(y,O,q,Y,w,tt),Q.transparent===!0&&Q.side===cn&&Q.forceSinglePass===!1?(Q.side=ze,Q.needsUpdate=!0,y.renderBufferDirect(q,O,Y,Q,w,tt),Q.side=In,Q.needsUpdate=!0,y.renderBufferDirect(q,O,Y,Q,w,tt),Q.side=cn):y.renderBufferDirect(q,O,Y,Q,w,tt),w.onAfterRender(y,O,q,Y,Q,tt)}function Pt(w,O,q){O.isScene!==!0&&(O=dt);const Y=bt.get(w),Q=m.state.lights,tt=m.state.shadowsArray,Mt=Q.state.version,Rt=$.getParameters(w,Q.state,tt,O,q),Gt=$.getProgramCacheKey(Rt);let Ft=Y.programs;Y.environment=w.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(w.isMeshStandardMaterial?Zt:yt).get(w.envMap||Y.environment),Ft===void 0&&(w.addEventListener("dispose",Ut),Ft=new Map,Y.programs=Ft);let Lt=Ft.get(Gt);if(Lt!==void 0){if(Y.currentProgram===Lt&&Y.lightsStateVersion===Mt)return et(w,Rt),Lt}else Rt.uniforms=$.getUniforms(w),w.onBuild(q,Rt,y),w.onBeforeCompile(Rt,y),Lt=$.acquireProgram(Rt,Gt),Ft.set(Gt,Lt),Y.uniforms=Rt.uniforms;const St=Y.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(St.clippingPlanes=Bt.uniform),et(w,Rt),Y.needsLights=zt(w),Y.lightsStateVersion=Mt,Y.needsLights&&(St.ambientLightColor.value=Q.state.ambient,St.lightProbe.value=Q.state.probe,St.directionalLights.value=Q.state.directional,St.directionalLightShadows.value=Q.state.directionalShadow,St.spotLights.value=Q.state.spot,St.spotLightShadows.value=Q.state.spotShadow,St.rectAreaLights.value=Q.state.rectArea,St.ltc_1.value=Q.state.rectAreaLTC1,St.ltc_2.value=Q.state.rectAreaLTC2,St.pointLights.value=Q.state.point,St.pointLightShadows.value=Q.state.pointShadow,St.hemisphereLights.value=Q.state.hemi,St.directionalShadowMap.value=Q.state.directionalShadowMap,St.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,St.spotShadowMap.value=Q.state.spotShadowMap,St.spotLightMatrix.value=Q.state.spotLightMatrix,St.spotLightMap.value=Q.state.spotLightMap,St.pointShadowMap.value=Q.state.pointShadowMap,St.pointShadowMatrix.value=Q.state.pointShadowMatrix);const se=Lt.getUniforms(),oe=lr.seqWithValue(se.seq,St);return Y.currentProgram=Lt,Y.uniformsList=oe,Lt}function et(w,O){const q=bt.get(w);q.outputColorSpace=O.outputColorSpace,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function At(w,O,q,Y,Q){O.isScene!==!0&&(O=dt),Ht.resetTextureUnits();const tt=O.fog,Mt=Y.isMeshStandardMaterial?O.environment:null,Rt=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:dn,Gt=(Y.isMeshStandardMaterial?Zt:yt).get(Y.envMap||Mt),Ft=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Lt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),St=!!q.morphAttributes.position,se=!!q.morphAttributes.normal,oe=!!q.morphAttributes.color;let he=Pn;Y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(he=y.toneMapping);const Se=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ae=Se!==void 0?Se.length:0,Xt=bt.get(Y),Ge=m.state.lights;if(P===!0&&(b===!0||w!==M)){const de=w===M&&Y.id===z;Bt.setState(Y,w,de)}let Jt=!1;Y.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Ge.state.version||Xt.outputColorSpace!==Rt||Q.isInstancedMesh&&Xt.instancing===!1||!Q.isInstancedMesh&&Xt.instancing===!0||Q.isSkinnedMesh&&Xt.skinning===!1||!Q.isSkinnedMesh&&Xt.skinning===!0||Q.isInstancedMesh&&Xt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xt.instancingColor===!1&&Q.instanceColor!==null||Xt.envMap!==Gt||Y.fog===!0&&Xt.fog!==tt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Bt.numPlanes||Xt.numIntersection!==Bt.numIntersection)||Xt.vertexAlphas!==Ft||Xt.vertexTangents!==Lt||Xt.morphTargets!==St||Xt.morphNormals!==se||Xt.morphColors!==oe||Xt.toneMapping!==he||it.isWebGL2===!0&&Xt.morphTargetsCount!==ae)&&(Jt=!0):(Jt=!0,Xt.__version=Y.version);let Re=Xt.currentProgram;Jt===!0&&(Re=Pt(Y,O,Q));let Ce=!1,_e=!1,ye=!1;const ce=Re.getUniforms(),Pe=Xt.uniforms;if(ct.useProgram(Re.program)&&(Ce=!0,_e=!0,ye=!0),Y.id!==z&&(z=Y.id,_e=!0),Ce||M!==w){ce.setValue(k,"projectionMatrix",w.projectionMatrix),ce.setValue(k,"viewMatrix",w.matrixWorldInverse);const de=ce.map.cameraPosition;de!==void 0&&de.setValue(k,K.setFromMatrixPosition(w.matrixWorld)),it.logarithmicDepthBuffer&&ce.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ce.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,_e=!0,ye=!0)}if(Q.isSkinnedMesh){ce.setOptional(k,Q,"bindMatrix"),ce.setOptional(k,Q,"bindMatrixInverse");const de=Q.skeleton;de&&(it.floatVertexTextures?(de.boneTexture===null&&de.computeBoneTexture(),ce.setValue(k,"boneTexture",de.boneTexture,Ht),ce.setValue(k,"boneTextureSize",de.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const jt=q.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0&&it.isWebGL2===!0)&&qt.update(Q,q,Re),(_e||Xt.receiveShadow!==Q.receiveShadow)&&(Xt.receiveShadow=Q.receiveShadow,ce.setValue(k,"receiveShadow",Q.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Pe.envMap.value=Gt,Pe.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),_e&&(ce.setValue(k,"toneMappingExposure",y.toneMappingExposure),Xt.needsLights&&Dt(Pe,ye),tt&&Y.fog===!0&&mt.refreshFogUniforms(Pe,tt),mt.refreshMaterialUniforms(Pe,Y,B,rt,Z),lr.upload(k,Xt.uniformsList,Pe,Ht)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(lr.upload(k,Xt.uniformsList,Pe,Ht),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ce.setValue(k,"center",Q.center),ce.setValue(k,"modelViewMatrix",Q.modelViewMatrix),ce.setValue(k,"normalMatrix",Q.normalMatrix),ce.setValue(k,"modelMatrix",Q.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const de=Y.uniformsGroups;for(let xe=0,pn=de.length;xe<pn;xe++)if(it.isWebGL2){const on=de[xe];$t.update(on,Re),$t.bind(on,Re)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Re}function Dt(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function zt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,O,q){bt.get(w.texture).__webglTexture=O,bt.get(w.depthTexture).__webglTexture=q;const Y=bt.get(w);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const q=bt.get(w);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,q=0){F=w,S=O,R=q;let Y=!0,Q=null,tt=!1,Mt=!1;if(w){const Gt=bt.get(w);Gt.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(k.FRAMEBUFFER,null),Y=!1):Gt.__webglFramebuffer===void 0?Ht.setupRenderTarget(w):Gt.__hasExternalTextures&&Ht.rebindTextures(w,bt.get(w.texture).__webglTexture,bt.get(w.depthTexture).__webglTexture);const Ft=w.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Mt=!0);const Lt=bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Lt[O])?Q=Lt[O][q]:Q=Lt[O],tt=!0):it.isWebGL2&&w.samples>0&&Ht.useMultisampledRTT(w)===!1?Q=bt.get(w).__webglMultisampledFramebuffer:Array.isArray(Lt)?Q=Lt[q]:Q=Lt,E.copy(w.viewport),U.copy(w.scissor),V=w.scissorTest}else E.copy(G).multiplyScalar(B).floor(),U.copy(A).multiplyScalar(B).floor(),V=N;if(ct.bindFramebuffer(k.FRAMEBUFFER,Q)&&it.drawBuffers&&Y&&ct.drawBuffers(w,Q),ct.viewport(E),ct.scissor(U),ct.setScissorTest(V),tt){const Gt=bt.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,Gt.__webglTexture,q)}else if(Mt){const Gt=bt.get(w.texture),Ft=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Gt.__webglTexture,q||0,Ft)}z=-1},this.readRenderTargetPixels=function(w,O,q,Y,Q,tt,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Rt=Rt[Mt]),Rt){ct.bindFramebuffer(k.FRAMEBUFFER,Rt);try{const Gt=w.texture,Ft=Gt.format,Lt=Gt.type;if(Ft!==en&&Vt.convert(Ft)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const St=Lt===Ii&&(pt.has("EXT_color_buffer_half_float")||it.isWebGL2&&pt.has("EXT_color_buffer_float"));if(Lt!==Ln&&Vt.convert(Lt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Lt===Rn&&(it.isWebGL2||pt.has("OES_texture_float")||pt.has("WEBGL_color_buffer_float")))&&!St){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-Y&&q>=0&&q<=w.height-Q&&k.readPixels(O,q,Y,Q,Vt.convert(Ft),Vt.convert(Lt),tt)}finally{const Gt=F!==null?bt.get(F).__webglFramebuffer:null;ct.bindFramebuffer(k.FRAMEBUFFER,Gt)}}},this.copyFramebufferToTexture=function(w,O,q=0){const Y=Math.pow(2,-q),Q=Math.floor(O.image.width*Y),tt=Math.floor(O.image.height*Y);Ht.setTexture2D(O,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,w.x,w.y,Q,tt),ct.unbindTexture()},this.copyTextureToTexture=function(w,O,q,Y=0){const Q=O.image.width,tt=O.image.height,Mt=Vt.convert(q.format),Rt=Vt.convert(q.type);Ht.setTexture2D(q,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment),O.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Y,w.x,w.y,Q,tt,Mt,Rt,O.image.data):O.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Y,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,Mt,O.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,Y,w.x,w.y,Mt,Rt,O.image),Y===0&&q.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(w,O,q,Y,Q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const tt=w.max.x-w.min.x+1,Mt=w.max.y-w.min.y+1,Rt=w.max.z-w.min.z+1,Gt=Vt.convert(Y.format),Ft=Vt.convert(Y.type);let Lt;if(Y.isData3DTexture)Ht.setTexture3D(Y,0),Lt=k.TEXTURE_3D;else if(Y.isDataArrayTexture)Ht.setTexture2DArray(Y,0),Lt=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const St=k.getParameter(k.UNPACK_ROW_LENGTH),se=k.getParameter(k.UNPACK_IMAGE_HEIGHT),oe=k.getParameter(k.UNPACK_SKIP_PIXELS),he=k.getParameter(k.UNPACK_SKIP_ROWS),Se=k.getParameter(k.UNPACK_SKIP_IMAGES),ae=q.isCompressedTexture?q.mipmaps[0]:q.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ae.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ae.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,w.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,w.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,w.min.z),q.isDataTexture||q.isData3DTexture?k.texSubImage3D(Lt,Q,O.x,O.y,O.z,tt,Mt,Rt,Gt,Ft,ae.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Lt,Q,O.x,O.y,O.z,tt,Mt,Rt,Gt,ae.data)):k.texSubImage3D(Lt,Q,O.x,O.y,O.z,tt,Mt,Rt,Gt,Ft,ae),k.pixelStorei(k.UNPACK_ROW_LENGTH,St),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,se),k.pixelStorei(k.UNPACK_SKIP_PIXELS,oe),k.pixelStorei(k.UNPACK_SKIP_ROWS,he),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Se),Q===0&&Y.generateMipmaps&&k.generateMipmap(Lt),ct.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Ht.setTextureCube(w,0):w.isData3DTexture?Ht.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ht.setTexture2DArray(w,0):Ht.setTexture2D(w,0),ct.unbindTexture()},this.resetState=function(){S=0,R=0,F=null,ct.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ve?Hn:to}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Hn?ve:dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Hf extends yo{}Hf.prototype.isWebGL1Renderer=!0;class Wf extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Mo extends Bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Na=new nt,Fa=new nt,Ba=new be,Qr=new so,ar=new vr;class Oa extends Ve{constructor(t=new sn,e=new Mo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let a=1,r=e.count;a<r;a++)Na.fromBufferAttribute(e,a-1),Fa.fromBufferAttribute(e,a),n[a]=n[a-1],n[a]+=Na.distanceTo(Fa);t.setAttribute("lineDistance",new rn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,a=this.matrixWorld,r=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(a),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;Ba.copy(a).invert(),Qr.copy(t.ray).applyMatrix4(Ba);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,d=new nt,u=new nt,l=new nt,h=new nt,p=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const f=Math.max(0,s.start),x=Math.min(v.count,s.start+s.count);for(let y=f,_=x-1;y<_;y+=p){const S=v.getX(y),R=v.getX(y+1);if(d.fromBufferAttribute(m,S),u.fromBufferAttribute(m,R),Qr.distanceSqToSegment(d,u,h,l)>c)continue;h.applyMatrix4(this.matrixWorld);const z=t.ray.origin.distanceTo(h);z<t.near||z>t.far||e.push({distance:z,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,s.start),x=Math.min(m.count,s.start+s.count);for(let y=f,_=x-1;y<_;y+=p){if(d.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),Qr.distanceSqToSegment(d,u,h,l)>c)continue;h.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(h);R<t.near||R>t.far||e.push({distance:R,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class ps extends sn{constructor(t=1,e=32,n=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(s+o,Math.PI);let d=0;const u=[],l=new nt,h=new nt,p=[],v=[],g=[],m=[];for(let f=0;f<=n;f++){const x=[],y=f/n;let _=0;f===0&&s===0?_=.5/e:f===n&&c===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){const R=S/e;l.x=-t*Math.cos(a+R*r)*Math.sin(s+y*o),l.y=t*Math.cos(s+y*o),l.z=t*Math.sin(a+R*r)*Math.sin(s+y*o),v.push(l.x,l.y,l.z),h.copy(l).normalize(),g.push(h.x,h.y,h.z),m.push(R+_,1-y),x.push(d++)}u.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const y=u[f][x+1],_=u[f][x],S=u[f+1][x],R=u[f+1][x+1];(f!==0||s>0)&&p.push(y,_,R),(f!==n-1||c<Math.PI)&&p.push(_,S,R)}this.setIndex(p),this.setAttribute("position",new rn(v,3)),this.setAttribute("normal",new rn(g,3)),this.setAttribute("uv",new rn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hs);function or(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var So={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,a,r){function s(d,u){if(!a[d]){if(!n[d]){var l=typeof or=="function"&&or;if(!u&&l)return l(d,!0);if(o)return o(d,!0);throw new Error("Cannot find module '"+d+"'")}var h=a[d]={exports:{}};n[d][0].call(h.exports,function(p){var v=n[d][1][p];return s(v||p)},h,h.exports,e,n,a,r)}return a[d].exports}for(var o=typeof or=="function"&&or,c=0;c<r.length;c++)s(r[c]);return s}({1:[function(e,n,a){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,a){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,a){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=s;function s(d){d=d||{},this.lowerBound=new r,d.lowerBound&&this.lowerBound.copy(d.lowerBound),this.upperBound=new r,d.upperBound&&this.upperBound.copy(d.upperBound)}var o=new r;s.prototype.setFromPoints=function(d,u,l,h){var p=this.lowerBound,v=this.upperBound,g=l;p.copy(d[0]),g&&g.vmult(p,p),v.copy(p);for(var m=1;m<d.length;m++){var f=d[m];g&&(g.vmult(f,o),f=o),f.x>v.x&&(v.x=f.x),f.x<p.x&&(p.x=f.x),f.y>v.y&&(v.y=f.y),f.y<p.y&&(p.y=f.y),f.z>v.z&&(v.z=f.z),f.z<p.z&&(p.z=f.z)}return u&&(u.vadd(p,p),u.vadd(v,v)),h&&(p.x-=h,p.y-=h,p.z-=h,v.x+=h,v.y+=h,v.z+=h),this},s.prototype.copy=function(d){return this.lowerBound.copy(d.lowerBound),this.upperBound.copy(d.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(d){var u=d.lowerBound.x;this.lowerBound.x>u&&(this.lowerBound.x=u);var l=d.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var u=d.lowerBound.y;this.lowerBound.y>u&&(this.lowerBound.y=u);var l=d.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var u=d.lowerBound.z;this.lowerBound.z>u&&(this.lowerBound.z=u);var l=d.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},s.prototype.overlaps=function(d){var u=this.lowerBound,l=this.upperBound,h=d.lowerBound,p=d.upperBound;return(h.x<=l.x&&l.x<=p.x||u.x<=p.x&&p.x<=l.x)&&(h.y<=l.y&&l.y<=p.y||u.y<=p.y&&p.y<=l.y)&&(h.z<=l.z&&l.z<=p.z||u.z<=p.z&&p.z<=l.z)},s.prototype.contains=function(d){var u=this.lowerBound,l=this.upperBound,h=d.lowerBound,p=d.upperBound;return u.x<=h.x&&l.x>=p.x&&u.y<=h.y&&l.y>=p.y&&u.z<=h.z&&l.z>=p.z},s.prototype.getCorners=function(d,u,l,h,p,v,g,m){var f=this.lowerBound,x=this.upperBound;d.copy(f),u.set(x.x,f.y,f.z),l.set(x.x,x.y,f.z),h.set(f.x,x.y,x.z),p.set(x.x,f.y,f.z),v.set(f.x,x.y,f.z),g.set(f.x,f.y,x.z),m.copy(x)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];s.prototype.toLocalFrame=function(d,u){var l=c,h=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],x=l[6],y=l[7];this.getCorners(h,p,v,g,m,f,x,y);for(var _=0;_!==8;_++){var S=l[_];d.pointToLocal(S,S)}return u.setFromPoints(l)},s.prototype.toWorldFrame=function(d,u){var l=c,h=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],x=l[6],y=l[7];this.getCorners(h,p,v,g,m,f,x,y);for(var _=0;_!==8;_++){var S=l[_];d.pointToWorld(S,S)}return u.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,a){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(s,o){if(s=s.index,o=o.index,o>s){var c=o;o=s,s=c}return this.matrix[(s*(s+1)>>1)+o-1]},r.prototype.set=function(s,o,c){if(s=s.index,o=o.index,o>s){var d=o;o=s,s=d}this.matrix[(s*(s+1)>>1)+o-1]=c?1:0},r.prototype.reset=function(){for(var s=0,o=this.matrix.length;s!==o;s++)this.matrix[s]=0},r.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(e,n,a){var r=e("../objects/Body"),s=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(g,m,f){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var d=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&d||g.sleepState===r.SLEEPING)&&(m.type&d||m.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(g,m,f,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,f,x):this.doBoundingSphereBroadphase(g,m,f,x)};var u=new s;new s,new o,new s,c.prototype.doBoundingSphereBroadphase=function(g,m,f,x){var y=u;m.position.vsub(g.position,y);var _=Math.pow(g.boundingRadius+m.boundingRadius,2),S=y.norm2();S<_&&(f.push(g),x.push(m))},c.prototype.doBoundingBoxBroadphase=function(g,m,f,x){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(f.push(g),x.push(m))};var l={keys:[]},h=[],p=[];c.prototype.makePairsUnique=function(g,m){for(var f=l,x=h,y=p,_=g.length,S=0;S!==_;S++)x[S]=g[S],y[S]=m[S];g.length=0,m.length=0;for(var S=0;S!==_;S++){var R=x[S].id,F=y[S].id,z=R<F?R+","+F:F+","+R;f[z]=S,f.keys.push(z)}for(var S=0;S!==f.keys.length;S++){var z=f.keys.pop(),M=f[z];g.push(x[M]),m.push(y[M]),delete f[z]}},c.prototype.setWorld=function(g){};var v=new s;c.boundingSphereCheck=function(g,m){var f=v;return g.position.vsub(m.position,f),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>f.norm2()},c.prototype.aabbQuery=function(g,m,f){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,a){n.exports=c;var r=e("./Broadphase"),s=e("../math/Vec3"),o=e("../shapes/Shape");function c(u,l,h,p,v){r.apply(this),this.nx=h||10,this.ny=p||10,this.nz=v||10,this.aabbMin=u||new s(100,100,100),this.aabbMax=l||new s(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new r,c.prototype.constructor=c;var d=new s;new s,c.prototype.collisionPairs=function(u,l,h){var p=u.numObjects(),v=u.bodies,st=this.aabbMax,Z=this.aabbMin,g=this.nx,m=this.ny,f=this.nz,x=m*f,y=f,_=1,S=st.x,R=st.y,F=st.z,z=Z.x,M=Z.y,E=Z.z,U=g/(S-z),V=m/(R-M),D=f/(F-E),H=(S-z)/g,W=(R-M)/m,rt=(F-E)/f,B=Math.sqrt(H*H+W*W+rt*rt)*.5,I=o.types,j=I.SPHERE,G=I.PLANE;I.BOX,I.COMPOUND,I.CONVEXPOLYHEDRON;for(var A=this.bins,N=this.binLengths,L=this.bins.length,P=0;P!==L;P++)N[P]=0;var b=Math.ceil,Z=Math.min,st=Math.max;function J(Et,ot,qt,Wt,kt,Vt,Ot){var $t=(Et-z)*U|0,ie=(ot-M)*V|0,X=(qt-E)*D|0,Ct=b((Wt-z)*U),at=b((kt-M)*V),xt=b((Vt-E)*D);$t<0?$t=0:$t>=g&&($t=g-1),ie<0?ie=0:ie>=m&&(ie=m-1),X<0?X=0:X>=f&&(X=f-1),Ct<0?Ct=0:Ct>=g&&(Ct=g-1),at<0?at=0:at>=m&&(at=m-1),xt<0?xt=0:xt>=f&&(xt=f-1),$t*=x,ie*=y,X*=_,Ct*=x,at*=y,xt*=_;for(var Ut=$t;Ut<=Ct;Ut+=x)for(var ee=ie;ee<=at;ee+=y)for(var le=X;le<=xt;le+=_){var ue=Ut+ee+le;A[ue][N[ue]++]=Ot}}for(var P=0;P!==p;P++){var K=v[P],dt=K.shape;switch(dt.type){case j:var ut=K.position.x,k=K.position.y,Tt=K.position.z,pt=dt.radius;J(ut-pt,k-pt,Tt-pt,ut+pt,k+pt,Tt+pt,K);break;case G:dt.worldNormalNeedsUpdate&&dt.computeWorldNormal(K.quaternion);var it=dt.worldNormal,ct=z+H*.5-K.position.x,Yt=M+W*.5-K.position.y,bt=E+rt*.5-K.position.z,Ht=d;Ht.set(ct,Yt,bt);for(var yt=0,Zt=0;yt!==g;yt++,Zt+=x,Ht.y=Yt,Ht.x+=H)for(var Qt=0,C=0;Qt!==m;Qt++,C+=y,Ht.z=bt,Ht.y+=W)for(var T=0,$=0;T!==f;T++,$+=_,Ht.z+=rt)if(Ht.dot(it)<B){var mt=Zt+C+$;A[mt][N[mt]++]=K}break;default:K.aabbNeedsUpdate&&K.computeAABB(),J(K.aabb.lowerBound.x,K.aabb.lowerBound.y,K.aabb.lowerBound.z,K.aabb.upperBound.x,K.aabb.upperBound.y,K.aabb.upperBound.z,K);break}}for(var P=0;P!==L;P++){var ft=N[P];if(ft>1)for(var gt=A[P],yt=0;yt!==ft;yt++)for(var K=gt[yt],Qt=0;Qt!==yt;Qt++){var Bt=gt[Qt];this.needBroadphaseCollision(K,Bt)&&this.intersectionTest(K,Bt,l,h)}}this.makePairsUnique(l,h)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,a){n.exports=o;var r=e("./Broadphase"),s=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(c,d,u){var l=c.bodies,h=l.length,p,v,g,m;for(p=0;p!==h;p++)for(v=0;v!==p;v++)g=l[p],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,d,u)},new s,o.prototype.aabbQuery=function(c,d,u){u=u||[];for(var l=0;l<c.bodies.length;l++){var h=c.bodies[l];h.aabbNeedsUpdate&&h.computeAABB(),h.aabb.overlaps(d)&&u.push(h)}return u}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,a){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(s,o){if(s=s.id,o=o.id,o>s){var c=o;o=s,s=c}return s+"-"+o in this.matrix},r.prototype.set=function(s,o,c){if(s=s.id,o=o.id,o>s){var d=o;o=s,s=d}c?this.matrix[s+"-"+o]=!0:delete this.matrix[s+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(s){}},{}],9:[function(e,n,a){n.exports=l;var r=e("../math/Vec3"),s=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),d=e("../shapes/Shape"),u=e("../collision/AABB");function l(L,P){this.from=L?L.clone():new r,this.to=P?P.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(b){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var h=new u,p=[];l.prototype.intersectWorld=function(L,P){return this.mode=P.mode||l.ANY,this.result=P.result||new c,this.skipBackfaces=!!P.skipBackfaces,this.collisionFilterMask=typeof P.collisionFilterMask<"u"?P.collisionFilterMask:-1,this.collisionFilterGroup=typeof P.collisionFilterGroup<"u"?P.collisionFilterGroup:-1,P.from&&this.from.copy(P.from),P.to&&this.to.copy(P.to),this.callback=P.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(h),p.length=0,L.broadphase.aabbQuery(L,h,p),this.intersectBodies(p),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(L,P,b,Z){Z.vsub(P,G),b.vsub(P,v),L.vsub(P,g);var st=G.dot(G),J=G.dot(v),K=G.dot(g),dt=v.dot(v),ut=v.dot(g),k,Tt;return(k=dt*K-J*ut)>=0&&(Tt=st*ut-J*K)>=0&&k+Tt<st*dt-J*J}var f=new r,x=new s;l.prototype.intersectBody=function(L,P){P&&(this.result=P,this._updateDirection());var b=this.checkCollisionResponse;if(!(b&&!L.collisionResponse)&&!(!(this.collisionFilterGroup&L.collisionFilterMask)||!(L.collisionFilterGroup&this.collisionFilterMask)))for(var Z=f,st=x,J=0,K=L.shapes.length;J<K;J++){var dt=L.shapes[J];if(!(b&&!dt.collisionResponse)&&(L.quaternion.mult(L.shapeOrientations[J],st),L.quaternion.vmult(L.shapeOffsets[J],Z),Z.vadd(L.position,Z),this.intersectShape(dt,st,Z,L),this.result._shouldStop))break}},l.prototype.intersectBodies=function(L,P){P&&(this.result=P,this._updateDirection());for(var b=0,Z=L.length;!this.result._shouldStop&&b<Z;b++)this.intersectBody(L[b])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(L,P,b,Z){var st=this.from,J=N(st,this._direction,b);if(!(J>L.boundingSphereRadius)){var K=this[L.type];K&&K.call(this,L,P,b,Z)}},new r,new r;var y=new r,_=new r,S=new r,R=new r;new r,new c,l.prototype.intersectBox=function(L,P,b,Z){return this.intersectConvex(L.convexPolyhedronRepresentation,P,b,Z)},l.prototype[d.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(L,P,b,Z){var st=this.from,J=this.to,K=this._direction,dt=new r(0,0,1);P.vmult(dt,dt);var ut=new r;st.vsub(b,ut);var k=ut.dot(dt);J.vsub(b,ut);var Tt=ut.dot(dt);if(!(k*Tt>0)&&!(st.distanceTo(J)<k)){var pt=dt.dot(K);if(!(Math.abs(pt)<this.precision)){var it=new r,ct=new r,Yt=new r;st.vsub(b,it);var bt=-dt.dot(it)/pt;K.scale(bt,ct),st.vadd(ct,Yt),this.reportIntersection(dt,Yt,L,Z,-1)}}},l.prototype[d.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(L){var P=this.to,b=this.from;L.lowerBound.x=Math.min(P.x,b.x),L.lowerBound.y=Math.min(P.y,b.y),L.lowerBound.z=Math.min(P.z,b.z),L.upperBound.x=Math.max(P.x,b.x),L.upperBound.y=Math.max(P.y,b.y),L.upperBound.z=Math.max(P.z,b.z)};var F={faceList:[0]};l.prototype.intersectHeightfield=function(L,P,b,Z){L.data,L.elementSize;var st=new r,J=new l(this.from,this.to);o.pointToLocalFrame(b,P,J.from,J.from),o.pointToLocalFrame(b,P,J.to,J.to);var K=[],dt=null,ut=null,k=null,Tt=null,pt=L.getIndexOfPosition(J.from.x,J.from.y,K,!1);if(pt&&(dt=K[0],ut=K[1],k=K[0],Tt=K[1]),pt=L.getIndexOfPosition(J.to.x,J.to.y,K,!1),pt&&((dt===null||K[0]<dt)&&(dt=K[0]),(k===null||K[0]>k)&&(k=K[0]),(ut===null||K[1]<ut)&&(ut=K[1]),(Tt===null||K[1]>Tt)&&(Tt=K[1])),dt!==null){var it=[];L.getRectMinMax(dt,ut,k,Tt,it),it[0],it[1];for(var ct=dt;ct<=k;ct++)for(var Yt=ut;Yt<=Tt;Yt++){if(this.result._shouldStop||(L.getConvexTrianglePillar(ct,Yt,!1),o.pointToWorldFrame(b,P,L.pillarOffset,st),this.intersectConvex(L.pillarConvex,P,st,Z,F),this.result._shouldStop))return;L.getConvexTrianglePillar(ct,Yt,!0),o.pointToWorldFrame(b,P,L.pillarOffset,st),this.intersectConvex(L.pillarConvex,P,st,Z,F)}}},l.prototype[d.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var z=new r,M=new r;l.prototype.intersectSphere=function(L,P,b,Z){var st=this.from,J=this.to,K=L.radius,dt=Math.pow(J.x-st.x,2)+Math.pow(J.y-st.y,2)+Math.pow(J.z-st.z,2),ut=2*((J.x-st.x)*(st.x-b.x)+(J.y-st.y)*(st.y-b.y)+(J.z-st.z)*(st.z-b.z)),k=Math.pow(st.x-b.x,2)+Math.pow(st.y-b.y,2)+Math.pow(st.z-b.z,2)-Math.pow(K,2),Tt=Math.pow(ut,2)-4*dt*k,pt=z,it=M;if(!(Tt<0))if(Tt===0)st.lerp(J,Tt,pt),pt.vsub(b,it),it.normalize(),this.reportIntersection(it,pt,L,Z,-1);else{var ct=(-ut-Math.sqrt(Tt))/(2*dt),Yt=(-ut+Math.sqrt(Tt))/(2*dt);if(ct>=0&&ct<=1&&(st.lerp(J,ct,pt),pt.vsub(b,it),it.normalize(),this.reportIntersection(it,pt,L,Z,-1)),this.result._shouldStop)return;Yt>=0&&Yt<=1&&(st.lerp(J,Yt,pt),pt.vsub(b,it),it.normalize(),this.reportIntersection(it,pt,L,Z,-1))}},l.prototype[d.types.SPHERE]=l.prototype.intersectSphere;var E=new r;new r,new r;var U=new r;l.prototype.intersectConvex=function(P,b,Z,st,J){for(var K=E,dt=U,ut=J&&J.faceList||null,k=P.faces,Tt=P.vertices,pt=P.faceNormals,it=this._direction,ct=this.from,Yt=this.to,bt=ct.distanceTo(Yt),Ht=ut?ut.length:k.length,yt=this.result,Zt=0;!yt._shouldStop&&Zt<Ht;Zt++){var Qt=ut?ut[Zt]:Zt,C=k[Qt],T=pt[Qt],$=b,mt=Z;dt.copy(Tt[C[0]]),$.vmult(dt,dt),dt.vadd(mt,dt),dt.vsub(ct,dt),$.vmult(T,K);var ft=it.dot(K);if(!(Math.abs(ft)<this.precision)){var gt=K.dot(dt)/ft;if(!(gt<0)){it.mult(gt,y),y.vadd(ct,y),_.copy(Tt[C[0]]),$.vmult(_,_),mt.vadd(_,_);for(var Bt=1;!yt._shouldStop&&Bt<C.length-1;Bt++){S.copy(Tt[C[Bt]]),R.copy(Tt[C[Bt+1]]),$.vmult(S,S),$.vmult(R,R),mt.vadd(S,S),mt.vadd(R,R);var Et=y.distanceTo(ct);!(m(y,_,S,R)||m(y,S,_,R))||Et>bt||this.reportIntersection(K,y,P,st,Qt)}}}}},l.prototype[d.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var V=new r,D=new r,H=new r,W=new r,rt=new r,B=new r;new u;var I=[],j=new o;l.prototype.intersectTrimesh=function(P,b,Z,st,J){var K=V,dt=I,ut=j,k=U,Tt=D,pt=H,it=W,ct=B,Yt=rt;J&&J.faceList;var bt=P.indices;P.vertices,P.faceNormals;var Ht=this.from,yt=this.to,Zt=this._direction;ut.position.copy(Z),ut.quaternion.copy(b),o.vectorToLocalFrame(Z,b,Zt,Tt),o.pointToLocalFrame(Z,b,Ht,pt),o.pointToLocalFrame(Z,b,yt,it);var Qt=pt.distanceSquared(it);P.tree.rayQuery(this,ut,dt);for(var C=0,T=dt.length;!this.result._shouldStop&&C!==T;C++){var $=dt[C];P.getNormal($,K),P.getVertex(bt[$*3],_),_.vsub(pt,k);var mt=Tt.dot(K),ft=K.dot(k)/mt;if(!(ft<0)){Tt.scale(ft,y),y.vadd(pt,y),P.getVertex(bt[$*3+1],S),P.getVertex(bt[$*3+2],R);var gt=y.distanceSquared(pt);!(m(y,S,_,R)||m(y,_,S,R))||gt>Qt||(o.vectorToWorldFrame(b,K,Yt),o.pointToWorldFrame(Z,b,y,ct),this.reportIntersection(Yt,ct,P,st,$))}}dt.length=0},l.prototype[d.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(L,P,b,Z,st){var J=this.from,K=this.to,dt=J.distanceTo(P),ut=this.result;if(!(this.skipBackfaces&&L.dot(this._direction)>0))switch(ut.hitFaceIndex=typeof st<"u"?st:-1,this.mode){case l.ALL:this.hasHit=!0,ut.set(J,K,L,P,b,Z,dt),ut.hasHit=!0,this.callback(ut);break;case l.CLOSEST:(dt<ut.distance||!ut.hasHit)&&(this.hasHit=!0,ut.hasHit=!0,ut.set(J,K,L,P,b,Z,dt));break;case l.ANY:this.hasHit=!0,ut.hasHit=!0,ut.set(J,K,L,P,b,Z,dt),ut._shouldStop=!0;break}};var G=new r,A=new r;function N(L,P,b){b.vsub(L,G);var Z=G.dot(P);P.mult(Z,A),A.vadd(L,A);var st=b.distanceTo(A);return st}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(o,c,d,u,l,h,p){this.rayFromWorld.copy(o),this.rayToWorld.copy(c),this.hitNormalWorld.copy(d),this.hitPointWorld.copy(u),this.shape=l,this.body=h,this.distance=p}},{"../math/Vec3":30}],11:[function(e,n,a){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=s;function s(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(d){c.push(d.body)},this._removeBodyHandler=function(d){var u=c.indexOf(d.body);u!==-1&&c.splice(u,1)},o&&this.setWorld(o)}s.prototype=new r,s.prototype.setWorld=function(o){this.axisList.length=0;for(var c=0;c<o.bodies.length;c++)this.axisList.push(o.bodies[c]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},s.insertionSortX=function(o){for(var c=1,d=o.length;c<d;c++){for(var u=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.x<=u.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=u}return o},s.insertionSortY=function(o){for(var c=1,d=o.length;c<d;c++){for(var u=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.y<=u.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=u}return o},s.insertionSortZ=function(o){for(var c=1,d=o.length;c<d;c++){for(var u=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.z<=u.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=u}return o},s.prototype.collisionPairs=function(o,c,d){var u=this.axisList,l=u.length,h=this.axisIndex,p,v;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==l;p++){var g=u[p];for(v=p+1;v<l;v++){var m=u[v];if(this.needBroadphaseCollision(g,m)){if(!s.checkBounds(g,m,h))break;this.intersectionTest(g,m,c,d)}}}},s.prototype.sortList=function(){for(var o=this.axisList,c=this.axisIndex,d=o.length,u=0;u!==d;u++){var l=o[u];l.aabbNeedsUpdate&&l.computeAABB()}c===0?s.insertionSortX(o):c===1?s.insertionSortY(o):c===2&&s.insertionSortZ(o)},s.checkBounds=function(o,c,d){var u,l;d===0?(u=o.position.x,l=c.position.x):d===1?(u=o.position.y,l=c.position.y):d===2&&(u=o.position.z,l=c.position.z);var h=o.boundingRadius,p=c.boundingRadius,v=u+h,g=l-p;return g<v},s.prototype.autoDetectAxis=function(){for(var o=0,c=0,d=0,u=0,l=0,h=0,p=this.axisList,v=p.length,g=1/v,m=0;m!==v;m++){var f=p[m],x=f.position.x;o+=x,c+=x*x;var y=f.position.y;d+=y,u+=y*y;var _=f.position.z;l+=_,h+=_*_}var S=c-o*o*g,R=u-d*d*g,F=h-l*l*g;S>R?S>F?this.axisIndex=0:this.axisIndex=2:R>F?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(o,c,d){d=d||[],this.dirty&&(this.sortList(),this.dirty=!1);var u=this.axisIndex,l="x";u===1&&(l="y"),u===2&&(l="z");var h=this.axisList;c.lowerBound[l],c.upperBound[l];for(var p=0;p<h.length;p++){var v=h[p];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(c)&&d.push(v)}return d}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,a){n.exports=d,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function d(u,l,h){h=h||{};var p=typeof h.maxForce<"u"?h.maxForce:1e6,v=h.pivotA?h.pivotA.clone():new c,g=h.pivotB?h.pivotB.clone():new c;this.axisA=h.axisA?h.axisA.clone():new c,this.axisB=h.axisB?h.axisB.clone():new c,r.call(this,u,v,l,g,p),this.collideConnected=!!h.collideConnected,this.angle=typeof h.angle<"u"?h.angle:0;var m=this.coneEquation=new s(u,l,h),f=this.twistEquation=new o(u,l,h);this.twistAngle=typeof h.twistAngle<"u"?h.twistAngle:0,m.maxForce=0,m.minForce=-p,f.maxForce=0,f.minForce=-p,this.equations.push(m,f)}d.prototype=new r,d.constructor=d,new c,new c,d.prototype.update=function(){var u=this.bodyA,l=this.bodyB,h=this.coneEquation,p=this.twistEquation;r.prototype.update.call(this),u.vectorToWorldFrame(this.axisA,h.axisA),l.vectorToWorldFrame(this.axisB,h.axisB),this.axisA.tangents(p.axisA,p.axisA),u.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),l.vectorToWorldFrame(p.axisB,p.axisB),h.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,a){n.exports=s;var r=e("../utils/Utils");function s(o,c,d){d=r.defaults(d,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=c,this.id=s.idCounter++,this.collideConnected=d.collideConnected,d.wakeUpBodies&&(o&&o.wakeUp(),c&&c.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!0},s.prototype.disable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,a){n.exports=o;var r=e("./Constraint"),s=e("../equations/ContactEquation");function o(c,d,u,l){r.call(this,c,d),typeof u>"u"&&(u=c.position.distanceTo(d.position)),typeof l>"u"&&(l=1e6),this.distance=u;var h=this.distanceEquation=new s(c,d);this.equations.push(h),h.minForce=-l,h.maxForce=l}o.prototype=new r,o.prototype.update=function(){var c=this.bodyA,d=this.bodyB,u=this.distanceEquation,l=this.distance*.5,h=u.ni;d.position.vsub(c.position,h),h.normalize(),h.mult(l,u.ri),h.mult(-l,u.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,a){n.exports=d,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function d(h,p,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new c,f=v.pivotB?v.pivotB.clone():new c;r.call(this,h,m,p,f,g);var x=this.axisA=v.axisA?v.axisA.clone():new c(1,0,0);x.normalize();var y=this.axisB=v.axisB?v.axisB.clone():new c(1,0,0);y.normalize();var _=this.rotationalEquation1=new s(h,p,v),S=this.rotationalEquation2=new s(h,p,v),R=this.motorEquation=new o(h,p,g);R.enabled=!1,this.equations.push(_,S,R)}d.prototype=new r,d.constructor=d,d.prototype.enableMotor=function(){this.motorEquation.enabled=!0},d.prototype.disableMotor=function(){this.motorEquation.enabled=!1},d.prototype.setMotorSpeed=function(h){this.motorEquation.targetVelocity=h},d.prototype.setMotorMaxForce=function(h){this.motorEquation.maxForce=h,this.motorEquation.minForce=-h};var u=new c,l=new c;d.prototype.update=function(){var h=this.bodyA,p=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,f=u,x=l,y=this.axisA,_=this.axisB;r.prototype.update.call(this),h.quaternion.vmult(y,f),p.quaternion.vmult(_,x),f.tangents(g.axisA,m.axisA),g.axisB.copy(x),m.axisB.copy(x),this.motorEquation.enabled&&(h.quaternion.vmult(this.axisA,v.axisA),p.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,a){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function c(d,u,l){l=l||{};var h=typeof l.maxForce<"u"?l.maxForce:1e6,p=new o,v=new o,g=new o;d.position.vadd(u.position,g),g.scale(.5,g),u.pointToLocalFrame(g,v),d.pointToLocalFrame(g,p),r.call(this,d,p,u,v,h);var m=this.rotationalEquation1=new s(d,u,l),f=this.rotationalEquation2=new s(d,u,l),x=this.rotationalEquation3=new s(d,u,l);this.equations.push(m,f,x)}c.prototype=new r,c.constructor=c,new o,new o,c.prototype.update=function(){var d=this.bodyA,u=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,h=this.rotationalEquation2,p=this.rotationalEquation3;r.prototype.update.call(this),d.vectorToWorldFrame(o.UNIT_X,l.axisA),u.vectorToWorldFrame(o.UNIT_Y,l.axisB),d.vectorToWorldFrame(o.UNIT_Y,h.axisA),u.vectorToWorldFrame(o.UNIT_Z,h.axisB),d.vectorToWorldFrame(o.UNIT_Z,p.axisA),u.vectorToWorldFrame(o.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,a){n.exports=c;var r=e("./Constraint"),s=e("../equations/ContactEquation"),o=e("../math/Vec3");function c(d,u,l,h,p){r.call(this,d,l),p=typeof p<"u"?p:1e6,this.pivotA=u?u.clone():new o,this.pivotB=h?h.clone():new o;var v=this.equationX=new s(d,l),g=this.equationY=new s(d,l),m=this.equationZ=new s(d,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-p,v.maxForce=g.maxForce=m.maxForce=p,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var d=this.bodyA,u=this.bodyB,l=this.equationX,h=this.equationY,p=this.equationZ;d.quaternion.vmult(this.pivotA,l.ri),u.quaternion.vmult(this.pivotB,l.rj),h.ri.copy(l.ri),h.rj.copy(l.rj),p.ri.copy(l.ri),p.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(u,l,h){h=h||{};var p=typeof h.maxForce<"u"?h.maxForce:1e6;s.call(this,u,l,-p,p),this.axisA=h.axisA?h.axisA.clone():new r(1,0,0),this.axisB=h.axisB?h.axisB.clone():new r(0,1,0),this.angle=typeof h.angle<"u"?h.angle:0}o.prototype=new s,o.prototype.constructor=o;var c=new r,d=new r;o.prototype.computeB=function(u){var l=this.a,h=this.b,p=this.axisA,v=this.axisB,g=c,m=d,f=this.jacobianElementA,x=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),x.rotational.copy(g);var y=Math.cos(this.angle)-p.dot(v),_=this.computeGW(),S=this.computeGiMf(),R=-y*l-_*h-u*S;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(m,f,x){x=typeof x<"u"?x:1e6,r.call(this,m,f,0,x),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}o.prototype=new r,o.prototype.constructor=o;var c=new s,d=new s,u=new s;o.prototype.computeB=function(m){var f=this.a,x=this.b,y=this.bi,_=this.bj,S=this.ri,R=this.rj,F=c,z=d,M=y.velocity,E=y.angularVelocity;y.force,y.torque;var U=_.velocity,V=_.angularVelocity;_.force,_.torque;var D=u,H=this.jacobianElementA,W=this.jacobianElementB,rt=this.ni;S.cross(rt,F),R.cross(rt,z),rt.negate(H.spatial),F.negate(H.rotational),W.spatial.copy(rt),W.rotational.copy(z),D.copy(_.position),D.vadd(R,D),D.vsub(y.position,D),D.vsub(S,D);var B=rt.dot(D),I=this.restitution+1,j=I*U.dot(rt)-I*M.dot(rt)+V.dot(z)-E.dot(F),G=this.computeGiMf(),A=-B*f-j*x-m*G;return A};var l=new s,h=new s,p=new s,v=new s,g=new s;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,f=h,x=p,y=v,_=g;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(x,m),this.bj.getVelocityAtWorldPoint(y,f),m.vsub(f,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,a){n.exports=o;var r=e("../math/JacobianElement"),s=e("../math/Vec3");function o(g,m,f,x){this.id=o.id++,this.minForce=typeof f>"u"?-1e6:f,this.maxForce=typeof x>"u"?1e6:x,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,f){var x=m,y=g,_=f;this.a=4/(_*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(_*_*y*(1+4*x))},o.prototype.computeB=function(g,m,f){var x=this.computeGW(),y=this.computeGq(),_=this.computeGiMf();return-y*g-x*m-_*f},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,x=this.bj,y=f.position,_=x.position;return g.spatial.dot(y)+m.spatial.dot(_)};var c=new s;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,x=this.bj,y=f.velocity,_=x.velocity,S=f.angularVelocity||c,R=x.angularVelocity||c;return g.multiplyVectors(y,S)+m.multiplyVectors(_,R)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,x=this.bj,y=f.vlambda,_=x.vlambda,S=f.wlambda||c,R=x.wlambda||c;return g.multiplyVectors(y,S)+m.multiplyVectors(_,R)};var d=new s,u=new s,l=new s,h=new s;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,x=this.bj,y=f.force,_=f.torque,S=x.force,R=x.torque,F=f.invMassSolve,z=x.invMassSolve;return f.invInertiaWorldSolve?f.invInertiaWorldSolve.vmult(_,l):l.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(R,h):h.set(0,0,0),y.mult(F,d),S.mult(z,u),g.multiplyVectors(d,l)+m.multiplyVectors(u,h)};var p=new s;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,x=this.bj,y=f.invMassSolve,_=x.invMassSolve,S=f.invInertiaWorldSolve,R=x.invInertiaWorldSolve,F=y+_;return S&&(S.vmult(g.rotational,p),F+=p.dot(g.rotational)),R&&(R.vmult(m.rotational,p),F+=p.dot(m.rotational)),F};var v=new s;new s,new s,new s,new s,new s,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,f=this.jacobianElementB,x=this.bi,y=this.bj,_=v;m.spatial.mult(x.invMassSolve*g,_),x.vlambda.vadd(_,x.vlambda),f.spatial.mult(y.invMassSolve*g,_),y.vlambda.vadd(_,y.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(m.rotational,_),_.mult(g,_),x.wlambda.vadd(_,x.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(f.rotational,_),_.mult(g,_),y.wlambda.vadd(_,y.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(u,l,h){r.call(this,u,l,-h,h),this.ri=new s,this.rj=new s,this.t=new s}o.prototype=new r,o.prototype.constructor=o;var c=new s,d=new s;o.prototype.computeB=function(u){this.a;var l=this.b;this.bi,this.bj;var h=this.ri,p=this.rj,v=c,g=d,m=this.t;h.cross(m,v),p.cross(m,g);var f=this.jacobianElementA,x=this.jacobianElementB;m.negate(f.spatial),v.negate(f.rotational),x.spatial.copy(m),x.rotational.copy(g);var y=this.computeGW(),_=this.computeGiMf(),S=-y*l-u*_;return S}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(u,l,h){h=h||{};var p=typeof h.maxForce<"u"?h.maxForce:1e6;s.call(this,u,l,-p,p),this.axisA=h.axisA?h.axisA.clone():new r(1,0,0),this.axisB=h.axisB?h.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new s,o.prototype.constructor=o;var c=new r,d=new r;o.prototype.computeB=function(u){var l=this.a,h=this.b,p=this.axisA,v=this.axisB,g=c,m=d,f=this.jacobianElementA,x=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),x.rotational.copy(g);var y=Math.cos(this.maxAngle)-p.dot(v),_=this.computeGW(),S=this.computeGiMf(),R=-y*l-_*h-u*S;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(c,d,u){u=typeof u<"u"?u:1e6,s.call(this,c,d,-u,u),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeB=function(c){this.a;var d=this.b;this.bi,this.bj;var u=this.axisA,l=this.axisB,h=this.jacobianElementA,p=this.jacobianElementB;h.rotational.copy(u),l.negate(p.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*d-c*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,a){var r=e("../utils/Utils");n.exports=s;function s(o,c,d){d=r.defaults(d,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[o,c],this.friction=d.friction,this.restitution=d.restitution,this.contactEquationStiffness=d.contactEquationStiffness,this.contactEquationRelaxation=d.contactEquationRelaxation,this.frictionEquationStiffness=d.frictionEquationStiffness,this.frictionEquationRelaxation=d.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,a){n.exports=r;function r(s){var o="";s=s||{},typeof s=="string"?(o=s,s={}):typeof s=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}r.idCounter=0},{}],26:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(){this.spatial=new r,this.rotational=new r}s.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(o,c){return o.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},s.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},s.prototype.setTrace=function(o){var c=this.elements;c[0]=o.x,c[4]=o.y,c[8]=o.z},s.prototype.getTrace=function(c){var c=c||new r,d=this.elements;c.x=d[0],c.y=d[4],c.z=d[8]},s.prototype.vmult=function(o,c){c=c||new r;var d=this.elements,u=o.x,l=o.y,h=o.z;return c.x=d[0]*u+d[1]*l+d[2]*h,c.y=d[3]*u+d[4]*l+d[5]*h,c.z=d[6]*u+d[7]*l+d[8]*h,c},s.prototype.smult=function(o){for(var c=0;c<this.elements.length;c++)this.elements[c]*=o},s.prototype.mmult=function(o,c){for(var d=c||new s,u=0;u<3;u++)for(var l=0;l<3;l++){for(var h=0,p=0;p<3;p++)h+=o.elements[u+p*3]*this.elements[p+l*3];d.elements[u+l*3]=h}return d},s.prototype.scale=function(o,c){c=c||new s;for(var d=this.elements,u=c.elements,l=0;l!==3;l++)u[3*l+0]=o.x*d[3*l+0],u[3*l+1]=o.y*d[3*l+1],u[3*l+2]=o.z*d[3*l+2];return c},s.prototype.solve=function(o,c){c=c||new r;for(var d=3,u=4,l=[],h=0;h<d*u;h++)l.push(0);var h,p;for(h=0;h<3;h++)for(p=0;p<3;p++)l[h+u*p]=this.elements[h+3*p];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,f=4,x;do{if(h=g-v,l[h+u*h]===0){for(p=h+1;p<g;p++)if(l[h+u*p]!==0){m=f;do x=f-m,l[x+u*h]+=l[x+u*p];while(--m);break}}if(l[h+u*h]!==0)for(p=h+1;p<g;p++){var y=l[h+u*p]/l[h+u*h];m=f;do x=f-m,l[x+u*p]=x<=h?0:l[x+u*p]-l[x+u*h]*y;while(--m)}}while(--v);if(c.z=l[2*u+3]/l[2*u+2],c.y=(l[1*u+3]-l[1*u+2]*c.z)/l[1*u+1],c.x=(l[0*u+3]-l[0*u+2]*c.z-l[0*u+1]*c.y)/l[0*u+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return c},s.prototype.e=function(o,c,d){if(d===void 0)return this.elements[c+3*o];this.elements[c+3*o]=d},s.prototype.copy=function(o){for(var c=0;c<o.elements.length;c++)this.elements[c]=o.elements[c];return this},s.prototype.toString=function(){for(var o="",c=",",d=0;d<9;d++)o+=this.elements[d]+c;return o},s.prototype.reverse=function(o){o=o||new s;for(var c=3,d=6,u=[],l=0;l<c*d;l++)u.push(0);var l,h;for(l=0;l<3;l++)for(h=0;h<3;h++)u[l+d*h]=this.elements[l+3*h];u[3+6*0]=1,u[3+6*1]=0,u[3+6*2]=0,u[4+6*0]=0,u[4+6*1]=1,u[4+6*2]=0,u[5+6*0]=0,u[5+6*1]=0,u[5+6*2]=1;var p=3,v=p,g,m=d,f;do{if(l=v-p,u[l+d*l]===0){for(h=l+1;h<v;h++)if(u[l+d*h]!==0){g=m;do f=m-g,u[f+d*l]+=u[f+d*h];while(--g);break}}if(u[l+d*l]!==0)for(h=l+1;h<v;h++){var x=u[l+d*h]/u[l+d*l];g=m;do f=m-g,u[f+d*h]=f<=l?0:u[f+d*h]-u[f+d*l]*x;while(--g)}}while(--p);l=2;do{h=l-1;do{var x=u[l+d*h]/u[l+d*l];g=d;do f=d-g,u[f+d*h]=u[f+d*h]-u[f+d*l]*x;while(--g)}while(h--)}while(--l);l=2;do{var x=1/u[l+d*l];g=d;do f=d-g,u[f+d*l]=u[f+d*l]*x;while(--g)}while(l--);l=2;do{h=2;do{if(f=u[c+h+d*l],isNaN(f)||f===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,h,f)}while(h--)}while(l--);return o},s.prototype.setRotationFromQuaternion=function(o){var c=o.x,d=o.y,u=o.z,l=o.w,h=c+c,p=d+d,v=u+u,g=c*h,m=c*p,f=c*v,x=d*p,y=d*v,_=u*v,S=l*h,R=l*p,F=l*v,z=this.elements;return z[3*0+0]=1-(x+_),z[3*0+1]=m-F,z[3*0+2]=f+R,z[3*1+0]=m+F,z[3*1+1]=1-(g+_),z[3*1+2]=y-S,z[3*2+0]=f-R,z[3*2+1]=y+S,z[3*2+2]=1-(g+x),this},s.prototype.transpose=function(o){o=o||new s;for(var c=o.elements,d=this.elements,u=0;u!==3;u++)for(var l=0;l!==3;l++)c[3*u+l]=d[3*l+u];return o}},{"./Vec3":30}],28:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(h,p,v,g){this.x=h!==void 0?h:0,this.y=p!==void 0?p:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}s.prototype.set=function(h,p,v,g){this.x=h,this.y=p,this.z=v,this.w=g},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(h,p){var v=Math.sin(p*.5);this.x=h.x*v,this.y=h.y*v,this.z=h.z*v,this.w=Math.cos(p*.5)},s.prototype.toAxisAngle=function(h){h=h||new r,this.normalize();var p=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(h.x=this.x,h.y=this.y,h.z=this.z):(h.x=this.x/v,h.y=this.y/v,h.z=this.z/v),[h,p]};var o=new r,c=new r;s.prototype.setFromVectors=function(h,p){if(h.isAntiparallelTo(p)){var v=o,g=c;h.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=h.cross(p);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(h.norm(),2)*Math.pow(p.norm(),2))+h.dot(p),this.normalize()}};var d=new r,u=new r,l=new r;s.prototype.mult=function(h,p){p=p||new s;var v=this.w,g=d,m=u,f=l;return g.set(this.x,this.y,this.z),m.set(h.x,h.y,h.z),p.w=v*h.w-g.dot(m),g.cross(m,f),p.x=v*m.x+h.w*g.x+f.x,p.y=v*m.y+h.w*g.y+f.y,p.z=v*m.z+h.w*g.z+f.z,p},s.prototype.inverse=function(h){var p=this.x,v=this.y,g=this.z,m=this.w;h=h||new s,this.conjugate(h);var f=1/(p*p+v*v+g*g+m*m);return h.x*=f,h.y*=f,h.z*=f,h.w*=f,h},s.prototype.conjugate=function(h){return h=h||new s,h.x=-this.x,h.y=-this.y,h.z=-this.z,h.w=this.w,h},s.prototype.normalize=function(){var h=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);h===0?(this.x=0,this.y=0,this.z=0,this.w=0):(h=1/h,this.x*=h,this.y*=h,this.z*=h,this.w*=h)},s.prototype.normalizeFast=function(){var h=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;h===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=h,this.y*=h,this.z*=h,this.w*=h)},s.prototype.vmult=function(h,p){p=p||new r;var v=h.x,g=h.y,m=h.z,f=this.x,x=this.y,y=this.z,_=this.w,S=_*v+x*m-y*g,R=_*g+y*v-f*m,F=_*m+f*g-x*v,z=-f*v-x*g-y*m;return p.x=S*_+z*-f+R*-y-F*-x,p.y=R*_+z*-x+F*-f-S*-y,p.z=F*_+z*-y+S*-x-R*-f,p},s.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this.w=h.w,this},s.prototype.toEuler=function(h,p){p=p||"YZX";var v,g,m,f=this.x,x=this.y,y=this.z,_=this.w;switch(p){case"YZX":var S=f*x+y*_;if(S>.499&&(v=2*Math.atan2(f,_),g=Math.PI/2,m=0),S<-.499&&(v=-2*Math.atan2(f,_),g=-Math.PI/2,m=0),isNaN(v)){var R=f*f,F=x*x,z=y*y;v=Math.atan2(2*x*_-2*f*y,1-2*F-2*z),g=Math.asin(2*S),m=Math.atan2(2*f*_-2*x*y,1-2*R-2*z)}break;default:throw new Error("Euler order "+p+" not supported yet.")}h.y=v,h.z=g,h.x=m},s.prototype.setFromEuler=function(h,p,v,g){g=g||"XYZ";var m=Math.cos(h/2),f=Math.cos(p/2),x=Math.cos(v/2),y=Math.sin(h/2),_=Math.sin(p/2),S=Math.sin(v/2);return g==="XYZ"?(this.x=y*f*x+m*_*S,this.y=m*_*x-y*f*S,this.z=m*f*S+y*_*x,this.w=m*f*x-y*_*S):g==="YXZ"?(this.x=y*f*x+m*_*S,this.y=m*_*x-y*f*S,this.z=m*f*S-y*_*x,this.w=m*f*x+y*_*S):g==="ZXY"?(this.x=y*f*x-m*_*S,this.y=m*_*x+y*f*S,this.z=m*f*S+y*_*x,this.w=m*f*x-y*_*S):g==="ZYX"?(this.x=y*f*x-m*_*S,this.y=m*_*x+y*f*S,this.z=m*f*S-y*_*x,this.w=m*f*x+y*_*S):g==="YZX"?(this.x=y*f*x+m*_*S,this.y=m*_*x+y*f*S,this.z=m*f*S-y*_*x,this.w=m*f*x-y*_*S):g==="XZY"&&(this.x=y*f*x-m*_*S,this.y=m*_*x-y*f*S,this.z=m*f*S+y*_*x,this.w=m*f*x+y*_*S),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,a){var r=e("./Vec3"),s=e("./Quaternion");n.exports=o;function o(d){d=d||{},this.position=new r,d.position&&this.position.copy(d.position),this.quaternion=new s,d.quaternion&&this.quaternion.copy(d.quaternion)}var c=new s;o.pointToLocalFrame=function(d,u,l,p){var p=p||new r;return l.vsub(d,p),u.conjugate(c),c.vmult(p,p),p},o.prototype.pointToLocal=function(d,u){return o.pointToLocalFrame(this.position,this.quaternion,d,u)},o.pointToWorldFrame=function(d,u,l,p){var p=p||new r;return u.vmult(l,p),p.vadd(d,p),p},o.prototype.pointToWorld=function(d,u){return o.pointToWorldFrame(this.position,this.quaternion,d,u)},o.prototype.vectorToWorldFrame=function(d,l){var l=l||new r;return this.quaternion.vmult(d,l),l},o.vectorToWorldFrame=function(d,u,l){return d.vmult(u,l),l},o.vectorToLocalFrame=function(d,u,l,p){var p=p||new r;return u.w*=-1,u.vmult(l,p),u.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,a){n.exports=s;var r=e("./Mat3");function s(u,l,h){this.x=u||0,this.y=l||0,this.z=h||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(u,l){var h=u.x,p=u.y,v=u.z,g=this.x,m=this.y,f=this.z;return l=l||new s,l.x=m*v-f*p,l.y=f*h-g*v,l.z=g*p-m*h,l},s.prototype.set=function(u,l,h){return this.x=u,this.y=l,this.z=h,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(u,l){if(l)l.x=u.x+this.x,l.y=u.y+this.y,l.z=u.z+this.z;else return new s(this.x+u.x,this.y+u.y,this.z+u.z)},s.prototype.vsub=function(u,l){if(l)l.x=this.x-u.x,l.y=this.y-u.y,l.z=this.z-u.z;else return new s(this.x-u.x,this.y-u.y,this.z-u.z)},s.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var u=this.x,l=this.y,h=this.z,p=Math.sqrt(u*u+l*l+h*h);if(p>0){var v=1/p;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return p},s.prototype.unit=function(u){u=u||new s;var l=this.x,h=this.y,p=this.z,v=Math.sqrt(l*l+h*h+p*p);return v>0?(v=1/v,u.x=l*v,u.y=h*v,u.z=p*v):(u.x=1,u.y=0,u.z=0),u},s.prototype.norm=function(){var u=this.x,l=this.y,h=this.z;return Math.sqrt(u*u+l*l+h*h)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(u){var l=this.x,h=this.y,p=this.z,v=u.x,g=u.y,m=u.z;return Math.sqrt((v-l)*(v-l)+(g-h)*(g-h)+(m-p)*(m-p))},s.prototype.distanceSquared=function(u){var l=this.x,h=this.y,p=this.z,v=u.x,g=u.y,m=u.z;return(v-l)*(v-l)+(g-h)*(g-h)+(m-p)*(m-p)},s.prototype.mult=function(u,l){l=l||new s;var h=this.x,p=this.y,v=this.z;return l.x=u*h,l.y=u*p,l.z=u*v,l},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(u){return this.x*u.x+this.y*u.y+this.z*u.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(u){return u=u||new s,u.x=-this.x,u.y=-this.y,u.z=-this.z,u};var o=new s,c=new s;s.prototype.tangents=function(u,l){var h=this.norm();if(h>0){var p=o,v=1/h;p.set(this.x*v,this.y*v,this.z*v);var g=c;Math.abs(p.x)<.9?(g.set(1,0,0),p.cross(g,u)):(g.set(0,1,0),p.cross(g,u)),p.cross(u,l)}else u.set(1,0,0),l.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this},s.prototype.lerp=function(u,l,h){var p=this.x,v=this.y,g=this.z;h.x=p+(u.x-p)*l,h.y=v+(u.y-v)*l,h.z=g+(u.z-g)*l},s.prototype.almostEquals=function(u,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-u.x)>l||Math.abs(this.y-u.y)>l||Math.abs(this.z-u.z)>l)},s.prototype.almostZero=function(u){return u===void 0&&(u=1e-6),!(Math.abs(this.x)>u||Math.abs(this.y)>u||Math.abs(this.z)>u)};var d=new s;s.prototype.isAntiparallelTo=function(u,l){return this.negate(d),d.almostEquals(u,l)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,a){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var s=e("../math/Vec3"),o=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var d=e("../collision/AABB"),u=e("../shapes/Box");function l(U){U=U||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof U.collisionFilterGroup=="number"?U.collisionFilterGroup:1,this.collisionFilterMask=typeof U.collisionFilterMask=="number"?U.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,U.position&&this.position.copy(U.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,U.velocity&&this.velocity.copy(U.velocity),this.initVelocity=new s,this.force=new s;var V=typeof U.mass=="number"?U.mass:0;this.mass=V,this.invMass=V>0?1/V:0,this.material=U.material||null,this.linearDamping=typeof U.linearDamping=="number"?U.linearDamping:.01,this.type=V<=0?l.STATIC:l.DYNAMIC,typeof U.type==typeof l.STATIC&&(this.type=U.type),this.allowSleep=typeof U.allowSleep<"u"?U.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof U.sleepSpeedLimit<"u"?U.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof U.sleepTimeLimit<"u"?U.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new c,U.quaternion&&this.quaternion.copy(U.quaternion),this.initQuaternion=new c,this.angularVelocity=new s,U.angularVelocity&&this.angularVelocity.copy(U.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof U.fixedRotation<"u"?U.fixedRotation:!1,this.angularDamping=typeof U.angularDamping<"u"?U.angularDamping:.01,this.aabb=new d,this.aabbNeedsUpdate=!0,this.wlambda=new s,U.shape&&this.addShape(U.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var U=this.sleepState;this.sleepState=0,U===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(U){if(this.allowSleep){var V=this.sleepState,D=this.velocity.norm2()+this.angularVelocity.norm2(),H=Math.pow(this.sleepSpeedLimit,2);V===l.AWAKE&&D<H?(this.sleepState=l.SLEEPY,this.timeLastSleepy=U,this.dispatchEvent(l.sleepyEvent)):V===l.SLEEPY&&D>H?this.wakeUp():V===l.SLEEPY&&U-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(U,D){var D=D||new s;return U.vsub(this.position,D),this.quaternion.conjugate().vmult(D,D),D},l.prototype.vectorToLocalFrame=function(U,D){var D=D||new s;return this.quaternion.conjugate().vmult(U,D),D},l.prototype.pointToWorldFrame=function(U,D){var D=D||new s;return this.quaternion.vmult(U,D),D.vadd(this.position,D),D},l.prototype.vectorToWorldFrame=function(U,D){var D=D||new s;return this.quaternion.vmult(U,D),D};var h=new s,p=new c;l.prototype.addShape=function(U,V,D){var H=new s,W=new c;return V&&H.copy(V),D&&W.copy(D),this.shapes.push(U),this.shapeOffsets.push(H),this.shapeOrientations.push(W),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var U=this.shapes,V=this.shapeOffsets,D=U.length,H=0,W=0;W!==D;W++){var rt=U[W];rt.updateBoundingSphereRadius();var B=V[W].norm(),I=rt.boundingSphereRadius;B+I>H&&(H=B+I)}this.boundingRadius=H};var v=new d;l.prototype.computeAABB=function(){for(var U=this.shapes,V=this.shapeOffsets,D=this.shapeOrientations,H=U.length,W=h,rt=p,B=this.quaternion,I=this.aabb,j=v,G=0;G!==H;G++){var A=U[G];D[G].mult(B,rt),rt.vmult(V[G],W),W.vadd(this.position,W),A.calculateWorldAABB(W,rt,j.lowerBound,j.upperBound),G===0?I.copy(j):I.extend(j)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(U){var V=this.invInertia;if(!(V.x===V.y&&V.y===V.z&&!U)){var D=g,H=m;D.setRotationFromQuaternion(this.quaternion),D.transpose(H),D.scale(V,D),D.mmult(H,this.invInertiaWorld)}};var f=new s,x=new s;l.prototype.applyForce=function(U,V){if(this.type===l.DYNAMIC){var D=f;V.vsub(this.position,D);var H=x;D.cross(U,H),this.force.vadd(U,this.force),this.torque.vadd(H,this.torque)}};var y=new s,_=new s;l.prototype.applyLocalForce=function(U,V){if(this.type===l.DYNAMIC){var D=y,H=_;this.vectorToWorldFrame(U,D),this.pointToWorldFrame(V,H),this.applyForce(D,H)}};var S=new s,R=new s,F=new s;l.prototype.applyImpulse=function(U,V){if(this.type===l.DYNAMIC){var D=S;V.vsub(this.position,D);var H=R;H.copy(U),H.mult(this.invMass,H),this.velocity.vadd(H,this.velocity);var W=F;D.cross(U,W),this.invInertiaWorld.vmult(W,W),this.angularVelocity.vadd(W,this.angularVelocity)}};var z=new s,M=new s;l.prototype.applyLocalImpulse=function(U,V){if(this.type===l.DYNAMIC){var D=z,H=M;this.vectorToWorldFrame(U,D),this.pointToWorldFrame(V,H),this.applyImpulse(D,H)}};var E=new s;l.prototype.updateMassProperties=function(){var U=E;this.invMass=this.mass>0?1/this.mass:0;var V=this.inertia,D=this.fixedRotation;this.computeAABB(),U.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(U,this.mass,V),this.invInertia.set(V.x>0&&!D?1/V.x:0,V.y>0&&!D?1/V.y:0,V.z>0&&!D?1/V.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(U,V){var D=new s;return U.vsub(this.position,D),this.angularVelocity.cross(D,V),this.velocity.vadd(V,V),V}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,a){e("./Body");var r=e("../math/Vec3"),s=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=d;function d(B){this.chassisBody=B.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof B.indexRightAxis<"u"?B.indexRightAxis:1,this.indexForwardAxis=typeof B.indexForwardAxis<"u"?B.indexForwardAxis:0,this.indexUpAxis=typeof B.indexUpAxis<"u"?B.indexUpAxis:2}new r,new r,new r;var u=new r,l=new r,h=new r;new o,d.prototype.addWheel=function(B){B=B||{};var I=new c(B),j=this.wheelInfos.length;return this.wheelInfos.push(I),j},d.prototype.setSteeringValue=function(B,I){var j=this.wheelInfos[I];j.steering=B},new r,d.prototype.applyEngineForce=function(B,I){this.wheelInfos[I].engineForce=B},d.prototype.setBrake=function(B,I){this.wheelInfos[I].brake=B},d.prototype.addToWorld=function(B){this.constraints,B.add(this.chassisBody);var I=this;this.preStepCallback=function(){I.updateVehicle(B.dt)},B.addEventListener("preStep",this.preStepCallback),this.world=B},d.prototype.getVehicleAxisWorld=function(B,I){I.set(B===0?1:0,B===1?1:0,B===2?1:0),this.chassisBody.vectorToWorldFrame(I,I)},d.prototype.updateVehicle=function(B){for(var I=this.wheelInfos,j=I.length,G=this.chassisBody,A=0;A<j;A++)this.updateWheelTransform(A);this.currentVehicleSpeedKmHour=3.6*G.velocity.norm();var N=new r;this.getVehicleAxisWorld(this.indexForwardAxis,N),N.dot(G.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var A=0;A<j;A++)this.castRay(I[A]);this.updateSuspension(B);for(var L=new r,P=new r,A=0;A<j;A++){var b=I[A],Z=b.suspensionForce;Z>b.maxSuspensionForce&&(Z=b.maxSuspensionForce),b.raycastResult.hitNormalWorld.scale(Z*B,L),b.raycastResult.hitPointWorld.vsub(G.position,P),G.applyImpulse(L,b.raycastResult.hitPointWorld)}this.updateFriction(B);var st=new r,J=new r,K=new r;for(A=0;A<j;A++){var b=I[A];G.getVelocityAtWorldPoint(b.chassisConnectionPointWorld,K);var dt=1;switch(this.indexUpAxis){case 1:dt=-1;break}if(b.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,J);var ut=J.dot(b.raycastResult.hitNormalWorld);b.raycastResult.hitNormalWorld.scale(ut,st),J.vsub(st,J);var k=J.dot(K);b.deltaRotation=dt*k*B/b.radius}(b.sliding||!b.isInContact)&&b.engineForce!==0&&b.useCustomSlidingRotationalSpeed&&(b.deltaRotation=(b.engineForce>0?1:-1)*b.customSlidingRotationalSpeed*B),Math.abs(b.brake)>Math.abs(b.engineForce)&&(b.deltaRotation=0),b.rotation+=b.deltaRotation,b.deltaRotation*=.99}},d.prototype.updateSuspension=function(B){for(var I=this.chassisBody,j=I.mass,G=this.wheelInfos,A=G.length,N=0;N<A;N++){var L=G[N];if(L.isInContact){var P,b=L.suspensionRestLength,Z=L.suspensionLength,st=b-Z;P=L.suspensionStiffness*st*L.clippedInvContactDotSuspension;var J=L.suspensionRelativeVelocity,K;J<0?K=L.dampingCompression:K=L.dampingRelaxation,P-=K*J,L.suspensionForce=P*j,L.suspensionForce<0&&(L.suspensionForce=0)}else L.suspensionForce=0}},d.prototype.removeFromWorld=function(B){this.constraints,B.remove(this.chassisBody),B.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new r,v=new r;d.prototype.castRay=function(B){var I=p,j=v;this.updateWheelTransformWorld(B);var G=this.chassisBody,A=-1,N=B.suspensionRestLength+B.radius;B.directionWorld.scale(N,I);var L=B.chassisConnectionPointWorld;L.vadd(I,j);var P=B.raycastResult;P.reset();var b=G.collisionResponse;G.collisionResponse=!1,this.world.rayTest(L,j,P),G.collisionResponse=b;var Z=P.body;if(B.raycastResult.groundObject=0,Z){A=P.distance,B.raycastResult.hitNormalWorld=P.hitNormalWorld,B.isInContact=!0;var st=P.distance;B.suspensionLength=st-B.radius;var J=B.suspensionRestLength-B.maxSuspensionTravel,K=B.suspensionRestLength+B.maxSuspensionTravel;B.suspensionLength<J&&(B.suspensionLength=J),B.suspensionLength>K&&(B.suspensionLength=K,B.raycastResult.reset());var dt=B.raycastResult.hitNormalWorld.dot(B.directionWorld),ut=new r;G.getVelocityAtWorldPoint(B.raycastResult.hitPointWorld,ut);var k=B.raycastResult.hitNormalWorld.dot(ut);if(dt>=-.1)B.suspensionRelativeVelocity=0,B.clippedInvContactDotSuspension=1/.1;else{var Tt=-1/dt;B.suspensionRelativeVelocity=k*Tt,B.clippedInvContactDotSuspension=Tt}}else B.suspensionLength=B.suspensionRestLength+0*B.maxSuspensionTravel,B.suspensionRelativeVelocity=0,B.directionWorld.scale(-1,B.raycastResult.hitNormalWorld),B.clippedInvContactDotSuspension=1;return A},d.prototype.updateWheelTransformWorld=function(B){B.isInContact=!1;var I=this.chassisBody;I.pointToWorldFrame(B.chassisConnectionPointLocal,B.chassisConnectionPointWorld),I.vectorToWorldFrame(B.directionLocal,B.directionWorld),I.vectorToWorldFrame(B.axleLocal,B.axleWorld)},d.prototype.updateWheelTransform=function(B){var I=u,j=l,G=h,A=this.wheelInfos[B];this.updateWheelTransformWorld(A),A.directionLocal.scale(-1,I),j.copy(A.axleLocal),I.cross(j,G),G.normalize(),j.normalize();var N=A.steering,L=new s;L.setFromAxisAngle(I,N);var P=new s;P.setFromAxisAngle(j,A.rotation);var b=A.worldTransform.quaternion;this.chassisBody.quaternion.mult(L,b),b.mult(P,b),b.normalize();var Z=A.worldTransform.position;Z.copy(A.directionWorld),Z.scale(A.suspensionLength,Z),Z.vadd(A.chassisConnectionPointWorld,Z)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];d.prototype.getWheelTransformWorld=function(B){return this.wheelInfos[B].worldTransform};var m=new r,f=[],x=[],y=1;d.prototype.updateFriction=function(B){for(var I=m,j=this.wheelInfos,G=j.length,A=this.chassisBody,N=x,L=f,P=0;P<G;P++){var b=j[P],Z=b.raycastResult.body;b.sideImpulse=0,b.forwardImpulse=0,N[P]||(N[P]=new r),L[P]||(L[P]=new r)}for(var P=0;P<G;P++){var b=j[P],Z=b.raycastResult.body;if(Z){var st=L[P],J=this.getWheelTransformWorld(P);J.vectorToWorldFrame(g[this.indexRightAxis],st);var K=b.raycastResult.hitNormalWorld,dt=st.dot(K);K.scale(dt,I),st.vsub(I,st),st.normalize(),K.cross(st,N[P]),N[P].normalize(),b.sideImpulse=rt(A,b.raycastResult.hitPointWorld,Z,b.raycastResult.hitPointWorld,st),b.sideImpulse*=y}}var ut=1,k=.5;this.sliding=!1;for(var P=0;P<G;P++){var b=j[P],Z=b.raycastResult.body,Tt=0;if(b.slipInfo=1,Z){var pt=0,it=b.brake?b.brake:pt;Tt=F(A,Z,b.raycastResult.hitPointWorld,N[P],it),Tt+=b.engineForce*B;var ct=it/Tt;b.slipInfo*=ct}if(b.forwardImpulse=0,b.skidInfo=1,Z){b.skidInfo=1;var Yt=b.suspensionForce*B*b.frictionSlip,bt=Yt,Ht=Yt*bt;b.forwardImpulse=Tt;var yt=b.forwardImpulse*k,Zt=b.sideImpulse*ut,Qt=yt*yt+Zt*Zt;if(b.sliding=!1,Qt>Ht){this.sliding=!0,b.sliding=!0;var ct=Yt/Math.sqrt(Qt);b.skidInfo*=ct}}}if(this.sliding)for(var P=0;P<G;P++){var b=j[P];b.sideImpulse!==0&&b.skidInfo<1&&(b.forwardImpulse*=b.skidInfo,b.sideImpulse*=b.skidInfo)}for(var P=0;P<G;P++){var b=j[P],C=new r;if(C.copy(b.raycastResult.hitPointWorld),b.forwardImpulse!==0){var T=new r;N[P].scale(b.forwardImpulse,T),A.applyImpulse(T,C)}if(b.sideImpulse!==0){var Z=b.raycastResult.body,$=new r;$.copy(b.raycastResult.hitPointWorld);var mt=new r;L[P].scale(b.sideImpulse,mt),A.pointToLocalFrame(C,C),C["xyz"[this.indexUpAxis]]*=b.rollInfluence,A.pointToWorldFrame(C,C),A.applyImpulse(mt,C),mt.scale(-1,mt),Z.applyImpulse(mt,$)}}};var _=new r,S=new r,R=new r;function F(B,I,j,G,A){var N=0,L=j,P=_,b=S,Z=R;B.getVelocityAtWorldPoint(L,P),I.getVelocityAtWorldPoint(L,b),P.vsub(b,Z);var st=G.dot(Z),J=V(B,j,G),K=V(I,j,G),dt=1,ut=dt/(J+K);return N=-st*ut,A<N&&(N=A),N<-A&&(N=-A),N}var z=new r,M=new r,E=new r,U=new r;function V(B,I,j){var G=z,A=M,N=E,L=U;return I.vsub(B.position,G),G.cross(j,A),B.invInertiaWorld.vmult(A,L),L.cross(G,N),B.invMass+j.dot(N)}var D=new r,H=new r,W=new r;function rt(B,I,j,G,A,dt){var L=A.norm2();if(L>1.1)return 0;var P=D,b=H,Z=W;B.getVelocityAtWorldPoint(I,P),j.getVelocityAtWorldPoint(G,b),P.vsub(b,Z);var st=A.dot(Z),J=.2,K=1/(B.invMass+j.invMass),dt=-J*st*K;return dt}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,a){var r=e("./Body"),s=e("../shapes/Sphere"),o=e("../shapes/Box"),c=e("../math/Vec3"),d=e("../constraints/HingeConstraint");n.exports=u;function u(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new c(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var v=new o(new c(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}u.prototype.addWheel=function(p){p=p||{};var v=p.body;v||(v=new r(1,new s(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new c;var g=typeof p.position<"u"?p.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var f=typeof p.axis<"u"?p.axis.clone():new c(0,1,0);this.wheelAxes.push(f);var x=new d(this.chassisBody,v,{pivotA:g,axisA:f,pivotB:c.ZERO,axisB:f,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},u.prototype.setSteeringValue=function(p,v){var g=this.wheelAxes[v],m=Math.cos(p),f=Math.sin(p),x=g.x,y=g.y;this.constraints[v].axisA.set(m*x-f*y,f*x+m*y,0)},u.prototype.setMotorSpeed=function(p,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=p},u.prototype.disableMotor=function(p){var v=this.constraints[p];v.disableMotor()};var l=new c;u.prototype.setWheelForce=function(p,v){this.wheelForces[v]=p},u.prototype.applyWheelForce=function(p,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],f=m.torque;g.scale(p,l),m.vectorToWorldFrame(l,l),f.vadd(l,f)},u.prototype.addToWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.add(g[m]);for(var m=0;m<v.length;m++)p.addConstraint(v[m]);p.addEventListener("preStep",this._update.bind(this))},u.prototype._update=function(){for(var p=this.wheelForces,v=0;v<p.length;v++)this.applyWheelForce(p[v],v)},u.prototype.removeFromWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.remove(g[m]);for(var m=0;m<v.length;m++)p.removeConstraint(v[m])};var h=new c;u.prototype.getWheelSpeed=function(p){var v=this.wheelAxes[p],g=this.wheelBodies[p],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,h),m.dot(h)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,a){n.exports=s,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;s.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,f=v.id,x=this.smoothingRadius*this.smoothingRadius,y=o,_=0;_!==m;_++){var S=this.particles[_];S.position.vsub(v.position,y),f!==S.id&&y.norm2()<x&&g.push(S)}};var c=new r,d=new r,u=new r,l=new r,h=new r,p=new r;s.prototype.update=function(){for(var v=this.particles.length,g=c,m=this.speedOfSound,f=this.eps,x=0;x!==v;x++){var y=this.particles[x],_=this.neighbors[x];_.length=0,this.getNeighbors(y,_),_.push(this.particles[x]);for(var S=_.length,R=0,F=0;F!==S;F++){y.position.vsub(_[F].position,g);var z=g.norm(),M=this.w(z);R+=_[F].mass*M}this.densities[x]=R,this.pressures[x]=m*m*(this.densities[x]-this.density)}for(var E=d,U=u,V=l,D=h,H=p,x=0;x!==v;x++){var W=this.particles[x];E.set(0,0,0),U.set(0,0,0);for(var rt,B,_=this.neighbors[x],S=_.length,F=0;F!==S;F++){var I=_[F];W.position.vsub(I.position,D);var j=D.norm();rt=-I.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+f)+this.pressures[F]/(this.densities[F]*this.densities[F]+f)),this.gradw(D,V),V.mult(rt,V),E.vadd(V,E),I.velocity.vsub(W.velocity,H),H.mult(1/(1e-4+this.densities[x]*this.densities[F])*this.viscosity*I.mass,H),B=this.nablaw(j),H.mult(B,H),U.vadd(H,U)}U.mult(W.mass,U),E.mult(W.mass,E),W.force.vadd(U,W.force),W.force.vadd(E,W.force)}},s.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},s.prototype.gradw=function(v,g){var m=v.norm(),f=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(f,9))*Math.pow(f*f-m*m,2),g)},s.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(x,y,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=x,this.bodyB=y,this.localAnchorA=new r,this.localAnchorB=new r,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}s.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},s.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},s.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},s.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var o=new r,c=new r,d=new r,u=new r,l=new r,h=new r,p=new r,v=new r,g=new r,m=new r,f=new r;s.prototype.applyForce=function(){var x=this.stiffness,y=this.damping,_=this.restLength,S=this.bodyA,R=this.bodyB,F=o,z=c,M=d,E=u,U=f,V=l,D=h,H=p,W=v,rt=g,B=m;this.getWorldAnchorA(V),this.getWorldAnchorB(D),V.vsub(S.position,H),D.vsub(R.position,W),D.vsub(V,F);var I=F.norm();z.copy(F),z.normalize(),R.velocity.vsub(S.velocity,M),R.angularVelocity.cross(W,U),M.vadd(U,M),S.angularVelocity.cross(H,U),M.vsub(U,M),z.mult(-x*(I-_)-y*M.dot(z),E),S.force.vsub(E,S.force),R.force.vadd(E,R.force),H.cross(E,rt),W.cross(E,B),S.torque.vsub(rt,S.torque),R.torque.vadd(B,R.torque)}},{"../math/Vec3":30}],36:[function(e,n,a){var r=e("../math/Vec3"),s=e("../math/Transform"),o=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=d;function d(h){h=c.defaults(h,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=h.maxSuspensionTravel,this.customSlidingRotationalSpeed=h.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=h.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=h.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=h.chassisConnectionPointWorld.clone(),this.directionLocal=h.directionLocal.clone(),this.directionWorld=h.directionWorld.clone(),this.axleLocal=h.axleLocal.clone(),this.axleWorld=h.axleWorld.clone(),this.suspensionRestLength=h.suspensionRestLength,this.suspensionMaxLength=h.suspensionMaxLength,this.radius=h.radius,this.suspensionStiffness=h.suspensionStiffness,this.dampingCompression=h.dampingCompression,this.dampingRelaxation=h.dampingRelaxation,this.frictionSlip=h.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=h.rollInfluence,this.maxSuspensionForce=h.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=h.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new s,this.isInContact=!1}var l=new r,u=new r,l=new r;d.prototype.updateWheel=function(h){var p=this.raycastResult;if(this.isInContact){var v=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(h.position,u),h.getVelocityAtWorldPoint(u,l);var g=p.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3"),o=e("./ConvexPolyhedron");function c(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,h=this.halfExtents.y,p=this.halfExtents.z,v=s,g=[new v(-l,-h,-p),new v(l,-h,-p),new v(l,h,-p),new v(-l,h,-p),new v(-l,-h,p),new v(l,-h,p),new v(l,h,p),new v(-l,h,p)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var f=new o(g,m);this.convexPolyhedronRepresentation=f,f.material=this.material},c.prototype.calculateLocalInertia=function(l,h){return h=h||new s,c.calculateInertia(this.halfExtents,l,h),h},c.calculateInertia=function(l,h,p){var v=l;p.x=1/12*h*(2*v.y*2*v.y+2*v.z*2*v.z),p.y=1/12*h*(2*v.x*2*v.x+2*v.z*2*v.z),p.z=1/12*h*(2*v.y*2*v.y+2*v.x*2*v.x)},c.prototype.getSideNormals=function(l,h){var p=l,v=this.halfExtents;if(p[0].set(v.x,0,0),p[1].set(0,v.y,0),p[2].set(0,0,v.z),p[3].set(-v.x,0,0),p[4].set(0,-v.y,0),p[5].set(0,0,-v.z),h!==void 0)for(var g=0;g!==p.length;g++)h.vmult(p[g],p[g]);return p},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var d=new s;new s,c.prototype.forEachWorldCorner=function(l,h,p){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)d.set(g[m][0],g[m][1],g[m][2]),h.vmult(d,d),l.vadd(d,d),p(d.x,d.y,d.z)};var u=[new s,new s,new s,new s,new s,new s,new s,new s];c.prototype.calculateWorldAABB=function(l,h,p,v){var g=this.halfExtents;u[0].set(g.x,g.y,g.z),u[1].set(-g.x,g.y,g.z),u[2].set(-g.x,-g.y,g.z),u[3].set(-g.x,-g.y,-g.z),u[4].set(g.x,-g.y,-g.z),u[5].set(g.x,g.y,-g.z),u[6].set(-g.x,g.y,-g.z),u[7].set(g.x,-g.y,g.z);var m=u[0];h.vmult(m,m),l.vadd(m,m),v.copy(m),p.copy(m);for(var f=1;f<8;f++){var m=u[f];h.vmult(m,m),l.vadd(m,m);var x=m.x,y=m.y,_=m.z;x>v.x&&(v.x=x),y>v.y&&(v.y=y),_>v.z&&(v.z=_),x<p.x&&(p.x=x),y<p.y&&(p.y=y),_<p.z&&(p.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function c(A,N,L){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=A||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=N||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=L?L.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var d=new s;c.prototype.computeEdges=function(){var A=this.faces,N=this.vertices;N.length;var L=this.uniqueEdges;L.length=0;for(var P=d,b=0;b!==A.length;b++)for(var Z=A[b],st=Z.length,J=0;J!==st;J++){var K=(J+1)%st;N[Z[J]].vsub(N[Z[K]],P),P.normalize();for(var dt=!1,ut=0;ut!==L.length;ut++)if(L[ut].almostEquals(P)||L[ut].almostEquals(P)){dt=!0;break}dt||L.push(P.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var A=0;A<this.faces.length;A++){for(var N=0;N<this.faces[A].length;N++)if(!this.vertices[this.faces[A][N]])throw new Error("Vertex "+this.faces[A][N]+" not found!");var L=this.faceNormals[A]||new s;this.getFaceNormal(A,L),L.negate(L),this.faceNormals[A]=L;var P=this.vertices[this.faces[A][0]];if(L.dot(P)<0){console.error(".faceNormals["+A+"] = Vec3("+L.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var N=0;N<this.faces[A].length;N++)console.warn(".vertices["+this.faces[A][N]+"] = Vec3("+this.vertices[this.faces[A][N]].toString()+")")}}};var u=new s,l=new s;c.computeNormal=function(A,N,L,P){N.vsub(A,l),L.vsub(N,u),u.cross(l,P),P.isZero()||P.normalize()},c.prototype.getFaceNormal=function(A,N){var L=this.faces[A],P=this.vertices[L[0]],b=this.vertices[L[1]],Z=this.vertices[L[2]];return c.computeNormal(P,b,Z,N)};var h=new s;c.prototype.clipAgainstHull=function(A,N,L,P,b,Z,st,J,K){for(var dt=h,ut=-1,k=-Number.MAX_VALUE,Tt=0;Tt<L.faces.length;Tt++){dt.copy(L.faceNormals[Tt]),b.vmult(dt,dt);var pt=dt.dot(Z);pt>k&&(k=pt,ut=Tt)}for(var it=[],ct=L.faces[ut],Yt=ct.length,bt=0;bt<Yt;bt++){var Ht=L.vertices[ct[bt]],yt=new s;yt.copy(Ht),b.vmult(yt,yt),P.vadd(yt,yt),it.push(yt)}ut>=0&&this.clipFaceAgainstHull(Z,A,N,it,st,J,K)};var p=new s,v=new s,g=new s,m=new s,f=new s,x=new s;c.prototype.findSeparatingAxis=function(A,N,L,P,b,Z,st,J){var K=p,dt=v,ut=g,k=m,Tt=f,pt=x,it=Number.MAX_VALUE,ct=this;if(ct.uniqueAxes)for(var bt=0;bt!==ct.uniqueAxes.length;bt++){L.vmult(ct.uniqueAxes[bt],K);var yt=ct.testSepAxis(K,A,N,L,P,b);if(yt===!1)return!1;yt<it&&(it=yt,Z.copy(K))}else for(var Yt=st?st.length:ct.faces.length,bt=0;bt<Yt;bt++){var Ht=st?st[bt]:bt;K.copy(ct.faceNormals[Ht]),L.vmult(K,K);var yt=ct.testSepAxis(K,A,N,L,P,b);if(yt===!1)return!1;yt<it&&(it=yt,Z.copy(K))}if(A.uniqueAxes)for(var bt=0;bt!==A.uniqueAxes.length;bt++){b.vmult(A.uniqueAxes[bt],dt);var yt=ct.testSepAxis(dt,A,N,L,P,b);if(yt===!1)return!1;yt<it&&(it=yt,Z.copy(dt))}else for(var Zt=J?J.length:A.faces.length,bt=0;bt<Zt;bt++){var Ht=J?J[bt]:bt;dt.copy(A.faceNormals[Ht]),b.vmult(dt,dt);var yt=ct.testSepAxis(dt,A,N,L,P,b);if(yt===!1)return!1;yt<it&&(it=yt,Z.copy(dt))}for(var Qt=0;Qt!==ct.uniqueEdges.length;Qt++){L.vmult(ct.uniqueEdges[Qt],k);for(var C=0;C!==A.uniqueEdges.length;C++)if(b.vmult(A.uniqueEdges[C],Tt),k.cross(Tt,pt),!pt.almostZero()){pt.normalize();var T=ct.testSepAxis(pt,A,N,L,P,b);if(T===!1)return!1;T<it&&(it=T,Z.copy(pt))}}return P.vsub(N,ut),ut.dot(Z)>0&&Z.negate(Z),!0};var y=[],_=[];c.prototype.testSepAxis=function(A,N,L,P,b,Z){var st=this;c.project(st,A,L,P,y),c.project(N,A,b,Z,_);var J=y[0],K=y[1],dt=_[0],ut=_[1],k=J-ut,Tt=dt-K,pt=k<Tt?k:Tt;return pt};var S=new s,R=new s;c.prototype.calculateLocalInertia=function(A,N){this.computeLocalAABB(S,R);var L=R.x-S.x,P=R.y-S.y,b=R.z-S.z;N.x=1/12*A*(2*P*2*P+2*b*2*b),N.y=1/12*A*(2*L*2*L+2*b*2*b),N.z=1/12*A*(2*P*2*P+2*L*2*L)},c.prototype.getPlaneConstantOfFace=function(A){var N=this.faces[A],L=this.faceNormals[A],P=this.vertices[N[0]],b=-L.dot(P);return b};var F=new s,z=new s,M=new s,E=new s,U=new s,V=new s,D=new s,H=new s;c.prototype.clipFaceAgainstHull=function(A,N,L,P,b,Z,st){for(var J=F,K=z,dt=M,ut=E,k=U,Tt=V,pt=D,it=H,ct=this,Yt=[],bt=P,Ht=Yt,yt=-1,Zt=Number.MAX_VALUE,Qt=0;Qt<ct.faces.length;Qt++){J.copy(ct.faceNormals[Qt]),L.vmult(J,J);var C=J.dot(A);C<Zt&&(Zt=C,yt=Qt)}if(!(yt<0)){var T=ct.faces[yt];T.connectedFaces=[];for(var $=0;$<ct.faces.length;$++)for(var mt=0;mt<ct.faces[$].length;mt++)T.indexOf(ct.faces[$][mt])!==-1&&$!==yt&&T.connectedFaces.indexOf($)===-1&&T.connectedFaces.push($);bt.length;for(var ft=T.length,gt=0;gt<ft;gt++){var Bt=ct.vertices[T[gt]],Et=ct.vertices[T[(gt+1)%ft]];Bt.vsub(Et,K),dt.copy(K),L.vmult(dt,dt),N.vadd(dt,dt),ut.copy(this.faceNormals[yt]),L.vmult(ut,ut),N.vadd(ut,ut),dt.cross(ut,k),k.negate(k),Tt.copy(Bt),L.vmult(Tt,Tt),N.vadd(Tt,Tt),-Tt.dot(k);var Wt;{var ot=T.connectedFaces[gt];pt.copy(this.faceNormals[ot]);var qt=this.getPlaneConstantOfFace(ot);it.copy(pt),L.vmult(it,it);var Wt=qt-it.dot(N)}for(this.clipFaceAgainstPlane(bt,Ht,it,Wt);bt.length;)bt.shift();for(;Ht.length;)bt.push(Ht.shift())}pt.copy(this.faceNormals[yt]);var qt=this.getPlaneConstantOfFace(yt);it.copy(pt),L.vmult(it,it);for(var Wt=qt-it.dot(N),$=0;$<bt.length;$++){var kt=it.dot(bt[$])+Wt;if(kt<=b&&(console.log("clamped: depth="+kt+" to minDist="+(b+"")),kt=b),kt<=Z){var Vt=bt[$];if(kt<=0){var Ot={point:Vt,normal:it,depth:kt};st.push(Ot)}}}}},c.prototype.clipFaceAgainstPlane=function(A,N,L,P){var b,Z,st=A.length;if(st<2)return N;var J=A[A.length-1],K=A[0];b=L.dot(J)+P;for(var dt=0;dt<st;dt++){if(K=A[dt],Z=L.dot(K)+P,b<0)if(Z<0){var ut=new s;ut.copy(K),N.push(ut)}else{var ut=new s;J.lerp(K,b/(b-Z),ut),N.push(ut)}else if(Z<0){var ut=new s;J.lerp(K,b/(b-Z),ut),N.push(ut),N.push(K)}J=K,b=Z}return N},c.prototype.computeWorldVertices=function(A,N){for(var L=this.vertices.length;this.worldVertices.length<L;)this.worldVertices.push(new s);for(var P=this.vertices,b=this.worldVertices,Z=0;Z!==L;Z++)N.vmult(P[Z],b[Z]),A.vadd(b[Z],b[Z]);this.worldVerticesNeedsUpdate=!1},new s,c.prototype.computeLocalAABB=function(A,N){var L=this.vertices.length,P=this.vertices;A.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),N.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var b=0;b<L;b++){var Z=P[b];Z.x<A.x?A.x=Z.x:Z.x>N.x&&(N.x=Z.x),Z.y<A.y?A.y=Z.y:Z.y>N.y&&(N.y=Z.y),Z.z<A.z?A.z=Z.z:Z.z>N.z&&(N.z=Z.z)}},c.prototype.computeWorldFaceNormals=function(A){for(var N=this.faceNormals.length;this.worldFaceNormals.length<N;)this.worldFaceNormals.push(new s);for(var L=this.faceNormals,P=this.worldFaceNormals,b=0;b!==N;b++)A.vmult(L[b],P[b]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var A=0,N=this.vertices,L=0,P=N.length;L!==P;L++){var b=N[L].norm2();b>A&&(A=b)}this.boundingSphereRadius=Math.sqrt(A)};var W=new s;c.prototype.calculateWorldAABB=function(A,N,L,P){for(var b=this.vertices.length,Z=this.vertices,st,J,K,dt,ut,k,Tt=0;Tt<b;Tt++){W.copy(Z[Tt]),N.vmult(W,W),A.vadd(W,W);var pt=W;pt.x<st||st===void 0?st=pt.x:(pt.x>dt||dt===void 0)&&(dt=pt.x),pt.y<J||J===void 0?J=pt.y:(pt.y>ut||ut===void 0)&&(ut=pt.y),pt.z<K||K===void 0?K=pt.z:(pt.z>k||k===void 0)&&(k=pt.z)}L.set(st,J,K),P.set(dt,ut,k)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(A){A=A||new s;for(var N=this.vertices.length,L=this.vertices,P=0;P<N;P++)A.vadd(L[P],A);return A.mult(1/N,A),A},c.prototype.transformAllPoints=function(A,N){var L=this.vertices.length,P=this.vertices;if(N){for(var b=0;b<L;b++){var Z=P[b];N.vmult(Z,Z)}for(var b=0;b<this.faceNormals.length;b++){var Z=this.faceNormals[b];N.vmult(Z,Z)}}if(A)for(var b=0;b<L;b++){var Z=P[b];Z.vadd(A,Z)}};var rt=new s,B=new s,I=new s;c.prototype.pointIsInside=function(A){var N=this.vertices.length,L=this.vertices,P=this.faces,b=this.faceNormals,Z=null,st=this.faces.length,J=rt;this.getAveragePointLocal(J);for(var K=0;K<st;K++){this.faces[K].length;var N=b[K],dt=L[P[K][0]],ut=B;A.vsub(dt,ut);var k=N.dot(ut),Tt=I;J.vsub(dt,Tt);var pt=N.dot(Tt);if(k<0&&pt>0||k>0&&pt<0)return!1}return Z?1:-1},new s;var j=new s,G=new s;c.project=function(A,N,L,P,b){var Z=A.vertices.length,st=j,J=0,K=0,dt=G,ut=A.vertices;dt.setZero(),o.vectorToLocalFrame(L,P,N,st),o.pointToLocalFrame(L,P,dt,dt);var k=dt.dot(st);K=J=ut[0].dot(st);for(var Tt=1;Tt<Z;Tt++){var pt=ut[Tt].dot(st);pt>J&&(J=pt),pt<K&&(K=pt)}if(K-=k,J-=k,K>J){var it=K;K=J,J=it}b[0]=J,b[1]=K}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function c(d,u,l,h){var p=h,v=[],g=[],m=[],f=[],x=[],y=Math.cos,_=Math.sin;v.push(new s(u*y(0),u*_(0),-l*.5)),f.push(0),v.push(new s(d*y(0),d*_(0),l*.5)),x.push(1);for(var S=0;S<p;S++){var R=2*Math.PI/p*(S+1),F=2*Math.PI/p*(S+.5);S<p-1?(v.push(new s(u*y(R),u*_(R),-l*.5)),f.push(2*S+2),v.push(new s(d*y(R),d*_(R),l*.5)),x.push(2*S+3),m.push([2*S+2,2*S+3,2*S+1,2*S])):m.push([0,1,2*S+1,2*S]),(p%2===1||S<p/2)&&g.push(new s(y(F),_(F),0))}m.push(x),g.push(new s(0,0,1));for(var z=[],S=0;S<f.length;S++)z.push(f[f.length-S-1]);m.push(z),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}c.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,a){var r=e("./Shape"),s=e("./ConvexPolyhedron"),o=e("../math/Vec3"),c=e("../utils/Utils");n.exports=d;function d(u,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=u,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new s,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}d.prototype=new r,d.prototype.update=function(){this._cachedPillars={}},d.prototype.updateMinValue=function(){for(var u=this.data,l=u[0][0],h=0;h!==u.length;h++)for(var p=0;p!==u[h].length;p++){var v=u[h][p];v<l&&(l=v)}this.minValue=l},d.prototype.updateMaxValue=function(){for(var u=this.data,l=u[0][0],h=0;h!==u.length;h++)for(var p=0;p!==u[h].length;p++){var v=u[h][p];v>l&&(l=v)}this.maxValue=l},d.prototype.setHeightValueAtIndex=function(u,l,h){var p=this.data;p[u][l]=h,this.clearCachedConvexTrianglePillar(u,l,!1),u>0&&(this.clearCachedConvexTrianglePillar(u-1,l,!0),this.clearCachedConvexTrianglePillar(u-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(u,l-1,!0),this.clearCachedConvexTrianglePillar(u,l-1,!1)),l>0&&u>0&&this.clearCachedConvexTrianglePillar(u-1,l-1,!0)},d.prototype.getRectMinMax=function(u,l,h,p,v){v=v||[];for(var g=this.data,m=this.minValue,f=u;f<=h;f++)for(var x=l;x<=p;x++){var y=g[f][x];y>m&&(m=y)}v[0]=this.minValue,v[1]=m},d.prototype.getIndexOfPosition=function(u,l,h,p){var v=this.elementSize,g=this.data,m=Math.floor(u/v),f=Math.floor(l/v);return h[0]=m,h[1]=f,p&&(m<0&&(m=0),f<0&&(f=0),m>=g.length-1&&(m=g.length-1),f>=g[0].length-1&&(f=g[0].length-1)),!(m<0||f<0||m>=g.length-1||f>=g[0].length-1)},d.prototype.getHeightAt=function(u,l,h){var p=[];this.getIndexOfPosition(u,l,p,h);var v=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,v),(v[0]+v[1])/2},d.prototype.getCacheConvexTrianglePillarKey=function(u,l,h){return u+"_"+l+"_"+(h?1:0)},d.prototype.getCachedConvexTrianglePillar=function(u,l,h){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,l,h)]},d.prototype.setCachedConvexTrianglePillar=function(u,l,h,p,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,l,h)]={convex:p,offset:v}},d.prototype.clearCachedConvexTrianglePillar=function(u,l,h){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,l,h)]},d.prototype.getConvexTrianglePillar=function(u,l,h){var p=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(u,l,h);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}p=new s,v=new o,this.pillarConvex=p,this.pillarOffset=v}var g=this.data,m=this.elementSize,f=p.faces;p.vertices.length=6;for(var x=0;x<6;x++)p.vertices[x]||(p.vertices[x]=new o);f.length=5;for(var x=0;x<5;x++)f[x]||(f[x]=[]);var y=p.vertices,_=(Math.min(g[u][l],g[u+1][l],g[u][l+1],g[u+1][l+1])-this.minValue)/2+this.minValue;h?(v.set((u+.75)*m,(l+.75)*m,_),y[0].set(.25*m,.25*m,g[u+1][l+1]-_),y[1].set(-.75*m,.25*m,g[u][l+1]-_),y[2].set(.25*m,-.75*m,g[u+1][l]-_),y[3].set(.25*m,.25*m,-_-1),y[4].set(-.75*m,.25*m,-_-1),y[5].set(.25*m,-.75*m,-_-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=2,f[2][1]=5,f[2][2]=3,f[2][3]=0,f[3][0]=3,f[3][1]=4,f[3][2]=1,f[3][3]=0,f[4][0]=1,f[4][1]=4,f[4][2]=5,f[4][3]=2):(v.set((u+.25)*m,(l+.25)*m,_),y[0].set(-.25*m,-.25*m,g[u][l]-_),y[1].set(.75*m,-.25*m,g[u+1][l]-_),y[2].set(-.25*m,.75*m,g[u][l+1]-_),y[3].set(-.25*m,-.25*m,-_-1),y[4].set(.75*m,-.25*m,-_-1),y[5].set(-.25*m,.75*m,-_-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=0,f[2][1]=2,f[2][2]=5,f[2][3]=3,f[3][0]=1,f[3][1]=0,f[3][2]=3,f[3][3]=4,f[4][0]=4,f[4][1]=5,f[4][2]=2,f[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(u,l,h,p,v)},d.prototype.calculateLocalInertia=function(u,l){return l=l||new o,l.set(0,0,0),l},d.prototype.volume=function(){return Number.MAX_VALUE},d.prototype.calculateWorldAABB=function(u,l,h,p){h.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},d.prototype.updateBoundingSphereRadius=function(){var u=this.data,l=this.elementSize;this.boundingSphereRadius=new o(u.length*l,u[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,d){return d=d||new s,d.set(0,0,0),d},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(c,d,u,l){u.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(d){var u=this.worldNormal;u.set(0,0,1),d.vmult(u,u),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(d,u){return u=u||new s,u},o.prototype.volume=function(){return Number.MAX_VALUE};var c=new s;o.prototype.calculateWorldAABB=function(d,u,l,h){c.set(0,0,1),u.vmult(c,c);var p=Number.MAX_VALUE;l.set(-p,-p,-p),h.set(p,p,p),c.x===1&&(h.x=d.x),c.y===1&&(h.y=d.y),c.z===1&&(h.z=d.z),c.x===-1&&(l.x=d.x),c.y===-1&&(l.y=d.y),c.z===-1&&(l.z=d.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,a){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(s,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,d){d=d||new s;var u=2*c*this.radius*this.radius/5;return d.x=u,d.y=u,d.z=u,d},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(c,d,u,l){for(var h=this.radius,p=["x","y","z"],v=0;v<p.length;v++){var g=p[v];u[g]=c[g]-h,l[g]=c[g]+h}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,a){n.exports=u;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),c=e("../collision/AABB"),d=e("../utils/Octree");function u(z,M){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(z),this.indices=new Int16Array(M),this.normals=new Float32Array(M.length),this.aabb=new c,this.edges=null,this.scale=new s(1,1,1),this.tree=new d,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}u.prototype=new r,u.prototype.constructor=u;var l=new s;u.prototype.updateTree=function(){var z=this.tree;z.reset(),z.aabb.copy(this.aabb);var M=this.scale;z.aabb.lowerBound.x*=1/M.x,z.aabb.lowerBound.y*=1/M.y,z.aabb.lowerBound.z*=1/M.z,z.aabb.upperBound.x*=1/M.x,z.aabb.upperBound.y*=1/M.y,z.aabb.upperBound.z*=1/M.z;for(var E=new c,U=new s,V=new s,D=new s,H=[U,V,D],W=0;W<this.indices.length/3;W++){var rt=W*3;this._getUnscaledVertex(this.indices[rt],U),this._getUnscaledVertex(this.indices[rt+1],V),this._getUnscaledVertex(this.indices[rt+2],D),E.setFromPoints(H),z.insert(E,W)}z.removeEmptyNodes()};var h=new c;u.prototype.getTrianglesInAABB=function(z,M){h.copy(z);var E=this.scale,U=E.x,V=E.y,D=E.z,H=h.lowerBound,W=h.upperBound;return H.x/=U,H.y/=V,H.z/=D,W.x/=U,W.y/=V,W.z/=D,this.tree.aabbQuery(h,M)},u.prototype.setScale=function(z){var M=this.scale.x===this.scale.y===this.scale.z,E=z.x===z.y===z.z;M&&E||this.updateNormals(),this.scale.copy(z),this.updateAABB(),this.updateBoundingSphereRadius()},u.prototype.updateNormals=function(){for(var z=l,M=this.normals,E=0;E<this.indices.length/3;E++){var U=E*3,V=this.indices[U],D=this.indices[U+1],H=this.indices[U+2];this.getVertex(V,f),this.getVertex(D,x),this.getVertex(H,y),u.computeNormal(x,f,y,z),M[U]=z.x,M[U+1]=z.y,M[U+2]=z.z}},u.prototype.updateEdges=function(){for(var z={},M=function(rt,B){var I=V<D?V+"_"+D:D+"_"+V;z[I]=!0},E=0;E<this.indices.length/3;E++){var U=E*3,V=this.indices[U],D=this.indices[U+1];this.indices[U+2],M(),M(),M()}var H=Object.keys(z);this.edges=new Int16Array(H.length*2);for(var E=0;E<H.length;E++){var W=H[E].split("_");this.edges[2*E]=parseInt(W[0],10),this.edges[2*E+1]=parseInt(W[1],10)}},u.prototype.getEdgeVertex=function(z,M,E){var U=this.edges[z*2+(M?1:0)];this.getVertex(U,E)};var p=new s,v=new s;u.prototype.getEdgeVector=function(z,M){var E=p,U=v;this.getEdgeVertex(z,0,E),this.getEdgeVertex(z,1,U),U.vsub(E,M)};var g=new s,m=new s;u.computeNormal=function(z,M,E,U){M.vsub(z,m),E.vsub(M,g),g.cross(m,U),U.isZero()||U.normalize()};var f=new s,x=new s,y=new s;u.prototype.getVertex=function(z,M){var E=this.scale;return this._getUnscaledVertex(z,M),M.x*=E.x,M.y*=E.y,M.z*=E.z,M},u.prototype._getUnscaledVertex=function(z,M){var E=z*3,U=this.vertices;return M.set(U[E],U[E+1],U[E+2])},u.prototype.getWorldVertex=function(z,M,E,U){return this.getVertex(z,U),o.pointToWorldFrame(M,E,U,U),U},u.prototype.getTriangleVertices=function(z,M,E,U){var V=z*3;this.getVertex(this.indices[V],M),this.getVertex(this.indices[V+1],E),this.getVertex(this.indices[V+2],U)},u.prototype.getNormal=function(z,M){var E=z*3;return M.set(this.normals[E],this.normals[E+1],this.normals[E+2])};var _=new c;u.prototype.calculateLocalInertia=function(z,M){this.computeLocalAABB(_);var E=_.upperBound.x-_.lowerBound.x,U=_.upperBound.y-_.lowerBound.y,V=_.upperBound.z-_.lowerBound.z;return M.set(1/12*z*(2*U*2*U+2*V*2*V),1/12*z*(2*E*2*E+2*V*2*V),1/12*z*(2*U*2*U+2*E*2*E))};var S=new s;u.prototype.computeLocalAABB=function(z){var M=z.lowerBound,E=z.upperBound,U=this.vertices.length;this.vertices;var V=S;this.getVertex(0,V),M.copy(V),E.copy(V);for(var D=0;D!==U;D++)this.getVertex(D,V),V.x<M.x?M.x=V.x:V.x>E.x&&(E.x=V.x),V.y<M.y?M.y=V.y:V.y>E.y&&(E.y=V.y),V.z<M.z?M.z=V.z:V.z>E.z&&(E.z=V.z)},u.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},u.prototype.updateBoundingSphereRadius=function(){for(var z=0,M=this.vertices,E=new s,U=0,V=M.length/3;U!==V;U++){this.getVertex(U,E);var D=E.norm2();D>z&&(z=D)}this.boundingSphereRadius=Math.sqrt(z)},new s;var R=new o,F=new c;u.prototype.calculateWorldAABB=function(z,M,E,U){var V=R,D=F;V.position=z,V.quaternion=M,this.aabb.toWorldFrame(V,D),E.copy(D.lowerBound),U.copy(D.upperBound)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.createTorus=function(z,M,E,U,V){z=z||1,M=M||.5,E=E||8,U=U||6,V=V||Math.PI*2;for(var D=[],H=[],W=0;W<=E;W++)for(var rt=0;rt<=U;rt++){var B=rt/U*V,I=W/E*Math.PI*2,j=(z+M*Math.cos(I))*Math.cos(B),G=(z+M*Math.cos(I))*Math.sin(B),A=M*Math.sin(I);D.push(j,G,A)}for(var W=1;W<=E;W++)for(var rt=1;rt<=U;rt++){var N=(U+1)*W+rt-1,L=(U+1)*(W-1)+rt-1,P=(U+1)*(W-1)+rt,b=(U+1)*W+rt;H.push(N,L,b),H.push(L,P,b)}return new u(D,H)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,a){n.exports=s,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function s(){r.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new r;var o=[],c=[],d=[];s.prototype.solve=function(u,l){var h=0,p=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,f=l.bodies,x=f.length,y=u,_,S,R,F,z,M;if(m!==0)for(var E=0;E!==x;E++)f[E].updateSolveMassProperties();var U=c,V=d,D=o;U.length=m,V.length=m,D.length=m;for(var E=0;E!==m;E++){var H=g[E];D[E]=0,V[E]=H.computeB(y),U[E]=1/H.computeC()}if(m!==0){for(var E=0;E!==x;E++){var W=f[E],rt=W.vlambda,B=W.wlambda;rt.set(0,0,0),B&&B.set(0,0,0)}for(h=0;h!==p;h++){F=0;for(var I=0;I!==m;I++){var H=g[I];_=V[I],S=U[I],M=D[I],z=H.computeGWlambda(),R=S*(_-z-H.eps*M),M+R<H.minForce?R=H.minForce-M:M+R>H.maxForce&&(R=H.maxForce-M),D[I]+=R,F+=R>0?R:-R,H.addToWlambda(R)}if(F*F<v)break}for(var E=0;E!==x;E++){var W=f[E],j=W.velocity,G=W.angularVelocity;j.vadd(W.vlambda,j),G&&G.vadd(W.wlambda,G)}}return h}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,a){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(s,o){return 0},r.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},r.prototype.removeEquation=function(s){var o=this.equations,c=o.indexOf(s);c!==-1&&o.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,a){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),s=e("../objects/Body");function o(f){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=f,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var c=[],d=[],u={bodies:[]},l=s.STATIC;function h(f){for(var x=f.length,y=0;y!==x;y++){var _=f[y];if(!_.visited&&!(_.body.type&l))return _}return!1}var p=[];function v(f,x,y,_){for(p.push(f),f.visited=!0,x(f,y,_);p.length;)for(var S=p.pop(),R;R=h(S.children);)R.visited=!0,x(R,y,_),p.push(R)}function g(f,x,y){x.push(f.body);for(var _=f.eqs.length,S=0;S!==_;S++){var R=f.eqs[S];y.indexOf(R)===-1&&y.push(R)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(f,x){for(var y=c,_=this.nodePool,S=x.bodies,R=this.equations,F=R.length,z=S.length,M=this.subsolver;_.length<z;)_.push(this.createNode());y.length=z;for(var E=0;E<z;E++)y[E]=_[E];for(var E=0;E!==z;E++){var U=y[E];U.body=S[E],U.children.length=0,U.eqs.length=0,U.visited=!1}for(var V=0;V!==F;V++){var D=R[V],E=S.indexOf(D.bi),H=S.indexOf(D.bj),W=y[E],rt=y[H];W.children.push(rt),W.eqs.push(D),rt.children.push(W),rt.eqs.push(D)}var B,I=0,j=d;M.tolerance=this.tolerance,M.iterations=this.iterations;for(var G=u;B=h(y);){j.length=0,G.bodies.length=0,v(B,g,G.bodies,j);var A=j.length;j=j.sort(m);for(var E=0;E!==A;E++)M.addEquation(j[E]);M.solve(f,G),M.removeAllEquations(),I++}return I};function m(f,x){return x.id-f.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,a){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(s,o){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[s]===void 0&&(c[s]=[]),c[s].indexOf(o)===-1&&c[s].push(o),this},hasEventListener:function(s,o){if(this._listeners===void 0)return!1;var c=this._listeners;return c[s]!==void 0&&c[s].indexOf(o)!==-1},removeEventListener:function(s,o){if(this._listeners===void 0)return this;var c=this._listeners;if(c[s]===void 0)return this;var d=c[s].indexOf(o);return d!==-1&&c[s].splice(d,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var o=this._listeners,c=o[s.type];if(c!==void 0){s.target=this;for(var d=0,u=c.length;d<u;d++)c[d].call(this,s)}return this}}},{}],50:[function(e,n,a){var r=e("../collision/AABB"),s=e("../math/Vec3");n.exports=c;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function c(l,h){h=h||{},h.root=null,h.aabb=l,o.call(this,h),this.maxDepth=typeof h.maxDepth<"u"?h.maxDepth:8}c.prototype=new o,o.prototype.reset=function(l,h){this.children.length=this.data.length=0},o.prototype.insert=function(l,h,p){var v=this.data;if(p=p||0,!this.aabb.contains(l))return!1;var g=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var f=0;f!==8;f++)if(g[f].insert(l,h,p+1))return!0;m&&(g.length=0)}return v.push(h),!0};var d=new s;o.prototype.subdivide=function(){var l=this.aabb,h=l.lowerBound,p=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new s(0,0,0)})}),new o({aabb:new r({lowerBound:new s(1,0,0)})}),new o({aabb:new r({lowerBound:new s(1,1,0)})}),new o({aabb:new r({lowerBound:new s(1,1,1)})}),new o({aabb:new r({lowerBound:new s(0,1,1)})}),new o({aabb:new r({lowerBound:new s(0,0,1)})}),new o({aabb:new r({lowerBound:new s(1,0,1)})}),new o({aabb:new r({lowerBound:new s(0,1,0)})})),p.vsub(h,d),d.scale(.5,d);for(var g=this.root||this,m=0;m!==8;m++){var f=v[m];f.root=g;var x=f.aabb.lowerBound;x.x*=d.x,x.y*=d.y,x.z*=d.z,x.vadd(h,x),x.vadd(d,f.aabb.upperBound)}},o.prototype.aabbQuery=function(l,h){this.data,this.children;for(var p=[this];p.length;){var v=p.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(h,v.data),Array.prototype.push.apply(p,v.children)}return h};var u=new r;o.prototype.rayQuery=function(l,h,p){return l.getAABB(u),u.toLocalFrame(h,u),this.aabbQuery(u,p),p},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var h=l.pop(),p=h.children.length-1;p>=0;p--)h.children[p].data.length||h.children.splice(p,1);Array.prototype.push.apply(l,h.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,a){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var s=arguments.length,o=0;o!==s;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,a){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(s,o){if(s>o){var c=o;o=s,s=c}return this.data[s+"-"+o]},r.prototype.set=function(s,o,c){if(s>o){var d=o;o=s,s=d}var u=s+"-"+o;this.get(s,o)||this.data.keys.push(u),this.data[u]=c},r.prototype.reset=function(){for(var s=this.data,o=s.keys;o.length>0;){var c=o.pop();delete s[c]}}},{}],53:[function(e,n,a){function r(){}n.exports=r,r.defaults=function(s,o){s=s||{};for(var c in o)c in s||(s[c]=o[c]);return s}},{}],54:[function(e,n,a){n.exports=o;var r=e("../math/Vec3"),s=e("./Pool");function o(){s.call(this),this.type=r}o.prototype=new s,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,a){n.exports=v;var r=e("../collision/AABB"),s=e("../shapes/Shape"),o=e("../collision/Ray"),c=e("../math/Vec3"),d=e("../math/Transform");e("../shapes/ConvexPolyhedron");var u=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),h=e("../equations/ContactEquation"),p=e("../equations/FrictionEquation");function v(lt){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=lt,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(lt,ht,vt,_t,Kt,It){var wt;this.contactPointPool.length?(wt=this.contactPointPool.pop(),wt.bi=lt,wt.bj=ht):wt=new h(lt,ht),wt.enabled=lt.collisionResponse&&ht.collisionResponse&&vt.collisionResponse&&_t.collisionResponse;var Pt=this.currentContactMaterial;wt.restitution=Pt.restitution,wt.setSpookParams(Pt.contactEquationStiffness,Pt.contactEquationRelaxation,this.world.dt);var et=vt.material||lt.material,At=_t.material||ht.material;return et&&At&&et.restitution>=0&&At.restitution>=0&&(wt.restitution=et.restitution*At.restitution),wt.si=Kt||vt,wt.sj=It||_t,wt},v.prototype.createFrictionEquationsFromContact=function(lt,ht){var vt=lt.bi,_t=lt.bj,Kt=lt.si,It=lt.sj,wt=this.world,Pt=this.currentContactMaterial,et=Pt.friction,At=Kt.material||vt.material,Dt=It.material||_t.material;if(At&&Dt&&At.friction>=0&&Dt.friction>=0&&(et=At.friction*Dt.friction),et>0){var zt=et*wt.gravity.length(),w=vt.invMass+_t.invMass;w>0&&(w=1/w);var O=this.frictionEquationPool,q=O.length?O.pop():new p(vt,_t,zt*w),Y=O.length?O.pop():new p(vt,_t,zt*w);return q.bi=Y.bi=vt,q.bj=Y.bj=_t,q.minForce=Y.minForce=-zt*w,q.maxForce=Y.maxForce=zt*w,q.ri.copy(lt.ri),q.rj.copy(lt.rj),Y.ri.copy(lt.ri),Y.rj.copy(lt.rj),lt.ni.tangents(q.t,Y.t),q.setSpookParams(Pt.frictionEquationStiffness,Pt.frictionEquationRelaxation,wt.dt),Y.setSpookParams(Pt.frictionEquationStiffness,Pt.frictionEquationRelaxation,wt.dt),q.enabled=Y.enabled=lt.enabled,ht.push(q,Y),!0}return!1};var g=new c,m=new c,f=new c;v.prototype.createFrictionFromAverage=function(lt){var ht=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ht,this.frictionResult)||lt===1)){var vt=this.frictionResult[this.frictionResult.length-2],_t=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),f.setZero();var Kt=ht.bi;ht.bj;for(var It=0;It!==lt;It++)ht=this.result[this.result.length-1-It],ht.bodyA!==Kt?(g.vadd(ht.ni,g),m.vadd(ht.ri,m),f.vadd(ht.rj,f)):(g.vsub(ht.ni,g),m.vadd(ht.rj,m),f.vadd(ht.ri,f));var wt=1/lt;m.scale(wt,vt.ri),f.scale(wt,vt.rj),_t.ri.copy(vt.ri),_t.rj.copy(vt.rj),g.normalize(),g.tangents(vt.t,_t.t)}};var x=new c,y=new c,_=new u,S=new u;v.prototype.getContacts=function(lt,ht,vt,_t,Kt,It,wt){this.contactPointPool=Kt,this.frictionEquationPool=wt,this.result=_t,this.frictionResult=It;for(var Pt=_,et=S,At=x,Dt=y,zt=0,w=lt.length;zt!==w;zt++){var O=lt[zt],q=ht[zt],Y=null;O.material&&q.material&&(Y=vt.getContactMaterial(O.material,q.material)||null);for(var Q=0;Q<O.shapes.length;Q++){O.quaternion.mult(O.shapeOrientations[Q],Pt),O.quaternion.vmult(O.shapeOffsets[Q],At),At.vadd(O.position,At);for(var tt=O.shapes[Q],Mt=0;Mt<q.shapes.length;Mt++){q.quaternion.mult(q.shapeOrientations[Mt],et),q.quaternion.vmult(q.shapeOffsets[Mt],Dt),Dt.vadd(q.position,Dt);var Rt=q.shapes[Mt];if(!(At.distanceTo(Dt)>tt.boundingSphereRadius+Rt.boundingSphereRadius)){var Gt=null;tt.material&&Rt.material&&(Gt=vt.getContactMaterial(tt.material,Rt.material)||null),this.currentContactMaterial=Gt||Y||vt.defaultContactMaterial;var Ft=this[tt.type|Rt.type];Ft&&(tt.type<Rt.type?Ft.call(this,tt,Rt,At,Dt,Pt,et,O,q,tt,Rt):Ft.call(this,Rt,tt,Dt,At,et,Pt,q,O,tt,Rt))}}}}},v.prototype[s.types.BOX|s.types.BOX]=v.prototype.boxBox=function(lt,ht,vt,_t,Kt,It,wt,Pt){lt.convexPolyhedronRepresentation.material=lt.material,ht.convexPolyhedronRepresentation.material=ht.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,ht.convexPolyhedronRepresentation.collisionResponse=ht.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,ht.convexPolyhedronRepresentation,vt,_t,Kt,It,wt,Pt,lt,ht)},v.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(lt,ht,vt,_t,Kt,It,wt,Pt){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,ht,vt,_t,Kt,It,wt,Pt,lt,ht)},v.prototype[s.types.BOX|s.types.PARTICLE]=v.prototype.boxParticle=function(lt,ht,vt,_t,Kt,It,wt,Pt){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexParticle(lt.convexPolyhedronRepresentation,ht,vt,_t,Kt,It,wt,Pt,lt,ht)},v.prototype[s.types.SPHERE]=v.prototype.sphereSphere=function(lt,ht,vt,_t,Kt,It,wt,Pt){var et=this.createContactEquation(wt,Pt,lt,ht);_t.vsub(vt,et.ni),et.ni.normalize(),et.ri.copy(et.ni),et.rj.copy(et.ni),et.ri.mult(lt.radius,et.ri),et.rj.mult(-ht.radius,et.rj),et.ri.vadd(vt,et.ri),et.ri.vsub(wt.position,et.ri),et.rj.vadd(_t,et.rj),et.rj.vsub(Pt.position,et.rj),this.result.push(et),this.createFrictionEquationsFromContact(et,this.frictionResult)};var R=new c,F=new c,z=new c;v.prototype[s.types.PLANE|s.types.TRIMESH]=v.prototype.planeTrimesh=function(lt,ht,vt,_t,Kt,It,wt,Pt){var et=new c,At=R;At.set(0,0,1),Kt.vmult(At,At);for(var Dt=0;Dt<ht.vertices.length/3;Dt++){ht.getVertex(Dt,et);var zt=new c;zt.copy(et),d.pointToWorldFrame(_t,It,zt,et);var w=F;et.vsub(vt,w);var O=At.dot(w);if(O<=0){var q=this.createContactEquation(wt,Pt,lt,ht);q.ni.copy(At);var Y=z;At.scale(w.dot(At),Y),et.vsub(Y,Y),q.ri.copy(Y),q.ri.vsub(wt.position,q.ri),q.rj.copy(et),q.rj.vsub(Pt.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}};var M=new c,E=new c;new c;var U=new c,V=new c,D=new c,H=new c,W=new c,rt=new c,B=new c,I=new c,j=new c,G=new c,A=new c,N=new r,L=[];v.prototype[s.types.SPHERE|s.types.TRIMESH]=v.prototype.sphereTrimesh=function(lt,ht,vt,_t,Kt,It,wt,Pt){var et=D,At=H,Dt=W,zt=rt,w=B,O=I,q=N,Y=V,Q=E,tt=L;d.pointToLocalFrame(_t,It,vt,w);var Mt=lt.radius;q.lowerBound.set(w.x-Mt,w.y-Mt,w.z-Mt),q.upperBound.set(w.x+Mt,w.y+Mt,w.z+Mt),ht.getTrianglesInAABB(q,tt);for(var Rt=U,Gt=lt.radius*lt.radius,Ft=0;Ft<tt.length;Ft++)for(var Lt=0;Lt<3;Lt++)if(ht.getVertex(ht.indices[tt[Ft]*3+Lt],Rt),Rt.vsub(w,Q),Q.norm2()<=Gt){Y.copy(Rt),d.pointToWorldFrame(_t,It,Y,Rt),Rt.vsub(vt,Q);var St=this.createContactEquation(wt,Pt,lt,ht);St.ni.copy(Q),St.ni.normalize(),St.ri.copy(St.ni),St.ri.scale(lt.radius,St.ri),St.ri.vadd(vt,St.ri),St.ri.vsub(wt.position,St.ri),St.rj.copy(Rt),St.rj.vsub(Pt.position,St.rj),this.result.push(St),this.createFrictionEquationsFromContact(St,this.frictionResult)}for(var Ft=0;Ft<tt.length;Ft++)for(var Lt=0;Lt<3;Lt++){ht.getVertex(ht.indices[tt[Ft]*3+Lt],et),ht.getVertex(ht.indices[tt[Ft]*3+(Lt+1)%3],At),At.vsub(et,Dt),w.vsub(At,O);var se=O.dot(Dt);w.vsub(et,O);var oe=O.dot(Dt);if(oe>0&&se<0){w.vsub(et,O),zt.copy(Dt),zt.normalize(),oe=O.dot(zt),zt.scale(oe,O),O.vadd(et,O);var he=O.distanceTo(w);if(he<lt.radius){var St=this.createContactEquation(wt,Pt,lt,ht);O.vsub(w,St.ni),St.ni.normalize(),St.ni.scale(lt.radius,St.ri),d.pointToWorldFrame(_t,It,O,O),O.vsub(Pt.position,St.rj),d.vectorToWorldFrame(It,St.ni,St.ni),d.vectorToWorldFrame(It,St.ri,St.ri),this.result.push(St),this.createFrictionEquationsFromContact(St,this.frictionResult)}}}for(var Se=j,ae=G,Xt=A,Ge=M,Ft=0,Jt=tt.length;Ft!==Jt;Ft++){ht.getTriangleVertices(tt[Ft],Se,ae,Xt),ht.getNormal(tt[Ft],Ge),w.vsub(Se,O);var he=O.dot(Ge);if(Ge.scale(he,O),w.vsub(O,O),he=O.distanceTo(w),o.pointInTriangle(O,Se,ae,Xt)&&he<lt.radius){var St=this.createContactEquation(wt,Pt,lt,ht);O.vsub(w,St.ni),St.ni.normalize(),St.ni.scale(lt.radius,St.ri),d.pointToWorldFrame(_t,It,O,O),O.vsub(Pt.position,St.rj),d.vectorToWorldFrame(It,St.ni,St.ni),d.vectorToWorldFrame(It,St.ri,St.ri),this.result.push(St),this.createFrictionEquationsFromContact(St,this.frictionResult)}}tt.length=0};var P=new c,b=new c;v.prototype[s.types.SPHERE|s.types.PLANE]=v.prototype.spherePlane=function(lt,ht,vt,_t,Kt,It,wt,Pt){var et=this.createContactEquation(wt,Pt,lt,ht);if(et.ni.set(0,0,1),It.vmult(et.ni,et.ni),et.ni.negate(et.ni),et.ni.normalize(),et.ni.mult(lt.radius,et.ri),vt.vsub(_t,P),et.ni.mult(et.ni.dot(P),b),P.vsub(b,et.rj),-P.dot(et.ni)<=lt.radius){var At=et.ri,Dt=et.rj;At.vadd(vt,At),At.vsub(wt.position,At),Dt.vadd(_t,Dt),Dt.vsub(Pt.position,Dt),this.result.push(et),this.createFrictionEquationsFromContact(et,this.frictionResult)}};var Z=new c,st=new c,J=new c;function K(lt,ht,vt){for(var _t=null,Kt=lt.length,It=0;It!==Kt;It++){var wt=lt[It],Pt=Z;lt[(It+1)%Kt].vsub(wt,Pt);var et=st;Pt.cross(ht,et);var At=J;vt.vsub(wt,At);var Dt=et.dot(At);if(_t===null||Dt>0&&_t===!0||Dt<=0&&_t===!1){_t===null&&(_t=Dt>0);continue}else return!1}return!0}var dt=new c,ut=new c,k=new c,Tt=new c,pt=[new c,new c,new c,new c,new c,new c],it=new c,ct=new c,Yt=new c,bt=new c;v.prototype[s.types.SPHERE|s.types.BOX]=v.prototype.sphereBox=function(lt,ht,vt,_t,Kt,It,wt,Pt){var et=this.v3pool,At=pt;vt.vsub(_t,dt),ht.getSideNormals(At,It);for(var Dt=lt.radius,zt=!1,w=ct,O=Yt,q=bt,Y=null,Q=0,tt=0,Mt=0,Rt=null,Gt=0,Ft=At.length;Gt!==Ft&&zt===!1;Gt++){var Lt=ut;Lt.copy(At[Gt]);var St=Lt.norm();Lt.normalize();var se=dt.dot(Lt);if(se<St+Dt&&se>0){var oe=k,he=Tt;oe.copy(At[(Gt+1)%3]),he.copy(At[(Gt+2)%3]);var Se=oe.norm(),ae=he.norm();oe.normalize(),he.normalize();var Xt=dt.dot(oe),Ge=dt.dot(he);if(Xt<Se&&Xt>-Se&&Ge<ae&&Ge>-ae){var xe=Math.abs(se-St-Dt);(Rt===null||xe<Rt)&&(Rt=xe,tt=Xt,Mt=Ge,Y=St,w.copy(Lt),O.copy(oe),q.copy(he),Q++)}}}if(Q){zt=!0;var jt=this.createContactEquation(wt,Pt,lt,ht);w.mult(-Dt,jt.ri),jt.ni.copy(w),jt.ni.negate(jt.ni),w.mult(Y,w),O.mult(tt,O),w.vadd(O,w),q.mult(Mt,q),w.vadd(q,jt.rj),jt.ri.vadd(vt,jt.ri),jt.ri.vsub(wt.position,jt.ri),jt.rj.vadd(_t,jt.rj),jt.rj.vsub(Pt.position,jt.rj),this.result.push(jt),this.createFrictionEquationsFromContact(jt,this.frictionResult)}for(var Jt=et.get(),Re=it,Ce=0;Ce!==2&&!zt;Ce++)for(var _e=0;_e!==2&&!zt;_e++)for(var ye=0;ye!==2&&!zt;ye++)if(Jt.set(0,0,0),Ce?Jt.vadd(At[0],Jt):Jt.vsub(At[0],Jt),_e?Jt.vadd(At[1],Jt):Jt.vsub(At[1],Jt),ye?Jt.vadd(At[2],Jt):Jt.vsub(At[2],Jt),_t.vadd(Jt,Re),Re.vsub(vt,Re),Re.norm2()<Dt*Dt){zt=!0;var jt=this.createContactEquation(wt,Pt,lt,ht);jt.ri.copy(Re),jt.ri.normalize(),jt.ni.copy(jt.ri),jt.ri.mult(Dt,jt.ri),jt.rj.copy(Jt),jt.ri.vadd(vt,jt.ri),jt.ri.vsub(wt.position,jt.ri),jt.rj.vadd(_t,jt.rj),jt.rj.vsub(Pt.position,jt.rj),this.result.push(jt),this.createFrictionEquationsFromContact(jt,this.frictionResult)}et.release(Jt),Jt=null;for(var ce=et.get(),Pe=et.get(),jt=et.get(),de=et.get(),xe=et.get(),pn=At.length,Ce=0;Ce!==pn&&!zt;Ce++)for(var _e=0;_e!==pn&&!zt;_e++)if(Ce%3!==_e%3){At[_e].cross(At[Ce],ce),ce.normalize(),At[Ce].vadd(At[_e],Pe),jt.copy(vt),jt.vsub(Pe,jt),jt.vsub(_t,jt);var on=jt.dot(ce);ce.mult(on,de);for(var ye=0;ye===Ce%3||ye===_e%3;)ye++;xe.copy(vt),xe.vsub(de,xe),xe.vsub(Pe,xe),xe.vsub(_t,xe);var Lo=Math.abs(on),Io=xe.norm();if(Lo<At[ye].norm()&&Io<Dt){zt=!0;var me=this.createContactEquation(wt,Pt,lt,ht);Pe.vadd(de,me.rj),me.rj.copy(me.rj),xe.negate(me.ni),me.ni.normalize(),me.ri.copy(me.rj),me.ri.vadd(_t,me.ri),me.ri.vsub(vt,me.ri),me.ri.normalize(),me.ri.mult(Dt,me.ri),me.ri.vadd(vt,me.ri),me.ri.vsub(wt.position,me.ri),me.rj.vadd(_t,me.rj),me.rj.vsub(Pt.position,me.rj),this.result.push(me),this.createFrictionEquationsFromContact(me,this.frictionResult)}}et.release(ce,Pe,jt,de,xe)};var Ht=new c,yt=new c,Zt=new c,Qt=new c,C=new c,T=new c,$=new c,mt=new c,ft=new c,gt=new c;v.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(lt,ht,vt,_t,Kt,It,wt,Pt){var et=this.v3pool;vt.vsub(_t,Ht);for(var At=ht.faceNormals,Dt=ht.faces,zt=ht.vertices,w=lt.radius,O=0;O!==zt.length;O++){var q=zt[O],Y=C;It.vmult(q,Y),_t.vadd(Y,Y);var Q=Qt;if(Y.vsub(vt,Q),Q.norm2()<w*w){Mt=!0;var tt=this.createContactEquation(wt,Pt,lt,ht);tt.ri.copy(Q),tt.ri.normalize(),tt.ni.copy(tt.ri),tt.ri.mult(w,tt.ri),Y.vsub(_t,tt.rj),tt.ri.vadd(vt,tt.ri),tt.ri.vsub(wt.position,tt.ri),tt.rj.vadd(_t,tt.rj),tt.rj.vsub(Pt.position,tt.rj),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult);return}}for(var Mt=!1,O=0,Rt=Dt.length;O!==Rt&&Mt===!1;O++){var Gt=At[O],Ft=Dt[O],Lt=T;It.vmult(Gt,Lt);var St=$;It.vmult(zt[Ft[0]],St),St.vadd(_t,St);var se=mt;Lt.mult(-w,se),vt.vadd(se,se);var oe=ft;se.vsub(St,oe);var he=oe.dot(Lt),Se=gt;if(vt.vsub(St,Se),he<0&&Se.dot(Lt)>0){for(var ae=[],Xt=0,Ge=Ft.length;Xt!==Ge;Xt++){var Jt=et.get();It.vmult(zt[Ft[Xt]],Jt),_t.vadd(Jt,Jt),ae.push(Jt)}if(K(ae,Lt,vt)){Mt=!0;var tt=this.createContactEquation(wt,Pt,lt,ht);Lt.mult(-w,tt.ri),Lt.negate(tt.ni);var Re=et.get();Lt.mult(-he,Re);var Ce=et.get();Lt.mult(-w,Ce),vt.vsub(_t,tt.rj),tt.rj.vadd(Ce,tt.rj),tt.rj.vadd(Re,tt.rj),tt.rj.vadd(_t,tt.rj),tt.rj.vsub(Pt.position,tt.rj),tt.ri.vadd(vt,tt.ri),tt.ri.vsub(wt.position,tt.ri),et.release(Re),et.release(Ce),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult);for(var Xt=0,_e=ae.length;Xt!==_e;Xt++)et.release(ae[Xt]);return}else for(var Xt=0;Xt!==Ft.length;Xt++){var ye=et.get(),ce=et.get();It.vmult(zt[Ft[(Xt+1)%Ft.length]],ye),It.vmult(zt[Ft[(Xt+2)%Ft.length]],ce),_t.vadd(ye,ye),_t.vadd(ce,ce);var Pe=yt;ce.vsub(ye,Pe);var jt=Zt;Pe.unit(jt);var de=et.get(),xe=et.get();vt.vsub(ye,xe);var pn=xe.dot(jt);jt.mult(pn,de),de.vadd(ye,de);var on=et.get();if(de.vsub(vt,on),pn>0&&pn*pn<Pe.norm2()&&on.norm2()<w*w){var tt=this.createContactEquation(wt,Pt,lt,ht);de.vsub(_t,tt.rj),de.vsub(vt,tt.ni),tt.ni.normalize(),tt.ni.mult(w,tt.ri),tt.rj.vadd(_t,tt.rj),tt.rj.vsub(Pt.position,tt.rj),tt.ri.vadd(vt,tt.ri),tt.ri.vsub(wt.position,tt.ri),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult);for(var Xt=0,_e=ae.length;Xt!==_e;Xt++)et.release(ae[Xt]);et.release(ye),et.release(ce),et.release(de),et.release(on),et.release(xe);return}et.release(ye),et.release(ce),et.release(de),et.release(on),et.release(xe)}for(var Xt=0,_e=ae.length;Xt!==_e;Xt++)et.release(ae[Xt])}}},new c,new c,v.prototype[s.types.PLANE|s.types.BOX]=v.prototype.planeBox=function(lt,ht,vt,_t,Kt,It,wt,Pt){ht.convexPolyhedronRepresentation.material=ht.material,ht.convexPolyhedronRepresentation.collisionResponse=ht.collisionResponse,this.planeConvex(lt,ht.convexPolyhedronRepresentation,vt,_t,Kt,It,wt,Pt)};var Bt=new c,Et=new c,ot=new c,qt=new c;v.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(lt,ht,vt,_t,Kt,It,wt,Pt){var et=Bt,At=Et;At.set(0,0,1),Kt.vmult(At,At);for(var Dt=0,zt=ot,w=0;w!==ht.vertices.length;w++){et.copy(ht.vertices[w]),It.vmult(et,et),_t.vadd(et,et),et.vsub(vt,zt);var O=At.dot(zt);if(O<=0){var q=this.createContactEquation(wt,Pt,lt,ht),Y=qt;At.mult(At.dot(zt),Y),et.vsub(Y,Y),Y.vsub(vt,q.ri),q.ni.copy(At),et.vsub(_t,q.rj),q.ri.vadd(vt,q.ri),q.ri.vsub(wt.position,q.ri),q.rj.vadd(_t,q.rj),q.rj.vsub(Pt.position,q.rj),this.result.push(q),Dt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(q,this.frictionResult)}}this.enableFrictionReduction&&Dt&&this.createFrictionFromAverage(Dt)};var Wt=new c,kt=new c;v.prototype[s.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(lt,ht,vt,_t,Kt,It,wt,Pt,et,At,Dt,zt){var w=Wt;if(!(vt.distanceTo(_t)>lt.boundingSphereRadius+ht.boundingSphereRadius)&&lt.findSeparatingAxis(ht,vt,Kt,_t,It,w,Dt,zt)){var O=[],q=kt;lt.clipAgainstHull(vt,Kt,ht,_t,It,w,-100,100,O);for(var Y=0,Q=0;Q!==O.length;Q++){var tt=this.createContactEquation(wt,Pt,lt,ht,et,At),Mt=tt.ri,Rt=tt.rj;w.negate(tt.ni),O[Q].normal.negate(q),q.mult(O[Q].depth,q),O[Q].point.vadd(q,Mt),Rt.copy(O[Q].point),Mt.vsub(vt,Mt),Rt.vsub(_t,Rt),Mt.vadd(vt,Mt),Mt.vsub(wt.position,Mt),Rt.vadd(_t,Rt),Rt.vsub(Pt.position,Rt),this.result.push(tt),Y++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(tt,this.frictionResult)}this.enableFrictionReduction&&Y&&this.createFrictionFromAverage(Y)}};var Vt=new c,Ot=new c,$t=new c;v.prototype[s.types.PLANE|s.types.PARTICLE]=v.prototype.planeParticle=function(lt,ht,vt,_t,Kt,It,wt,Pt){var et=Vt;et.set(0,0,1),wt.quaternion.vmult(et,et);var At=Ot;_t.vsub(wt.position,At);var Dt=et.dot(At);if(Dt<=0){var zt=this.createContactEquation(Pt,wt,ht,lt);zt.ni.copy(et),zt.ni.negate(zt.ni),zt.ri.set(0,0,0);var w=$t;et.mult(et.dot(_t),w),_t.vsub(w,w),zt.rj.copy(w),this.result.push(zt),this.createFrictionEquationsFromContact(zt,this.frictionResult)}};var ie=new c;v.prototype[s.types.PARTICLE|s.types.SPHERE]=v.prototype.sphereParticle=function(lt,ht,vt,_t,Kt,It,wt,Pt){var et=ie;et.set(0,0,1),_t.vsub(vt,et);var At=et.norm2();if(At<=lt.radius*lt.radius){var Dt=this.createContactEquation(Pt,wt,ht,lt);et.normalize(),Dt.rj.copy(et),Dt.rj.mult(lt.radius,Dt.rj),Dt.ni.copy(et),Dt.ni.negate(Dt.ni),Dt.ri.set(0,0,0),this.result.push(Dt),this.createFrictionEquationsFromContact(Dt,this.frictionResult)}};var X=new u,Ct=new c;new c;var at=new c,xt=new c,Ut=new c;v.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(lt,ht,vt,_t,Kt,It,wt,Pt){var et=-1,At=at,Dt=Ut,zt=null,w=Ct;if(w.copy(_t),w.vsub(vt,w),Kt.conjugate(X),X.vmult(w,w),lt.pointIsInside(w)){lt.worldVerticesNeedsUpdate&&lt.computeWorldVertices(vt,Kt),lt.worldFaceNormalsNeedsUpdate&&lt.computeWorldFaceNormals(Kt);for(var O=0,q=lt.faces.length;O!==q;O++){var Y=[lt.worldVertices[lt.faces[O][0]]],Q=lt.worldFaceNormals[O];_t.vsub(Y[0],xt);var tt=-Q.dot(xt);(zt===null||Math.abs(tt)<Math.abs(zt))&&(zt=tt,et=O,At.copy(Q))}if(et!==-1){var Mt=this.createContactEquation(Pt,wt,ht,lt);At.mult(zt,Dt),Dt.vadd(_t,Dt),Dt.vsub(vt,Dt),Mt.rj.copy(Dt),At.negate(Mt.ni),Mt.ri.set(0,0,0);var Rt=Mt.ri,Gt=Mt.rj;Rt.vadd(_t,Rt),Rt.vsub(Pt.position,Rt),Gt.vadd(vt,Gt),Gt.vsub(wt.position,Gt),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[s.types.BOX|s.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(lt,ht,vt,_t,Kt,It,wt,Pt){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexHeightfield(lt.convexPolyhedronRepresentation,ht,vt,_t,Kt,It,wt,Pt)};var ee=new c,le=new c,ue=[0];v.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(lt,ht,vt,_t,Kt,It,wt,Pt){var et=ht.data,At=ht.elementSize,Dt=lt.boundingSphereRadius,zt=le,w=ue,O=ee;d.pointToLocalFrame(_t,It,vt,O);var q=Math.floor((O.x-Dt)/At)-1,Y=Math.ceil((O.x+Dt)/At)+1,Q=Math.floor((O.y-Dt)/At)-1,tt=Math.ceil((O.y+Dt)/At)+1;if(!(Y<0||tt<0||q>et.length||Q>et[0].length)){q<0&&(q=0),Y<0&&(Y=0),Q<0&&(Q=0),tt<0&&(tt=0),q>=et.length&&(q=et.length-1),Y>=et.length&&(Y=et.length-1),tt>=et[0].length&&(tt=et[0].length-1),Q>=et[0].length&&(Q=et[0].length-1);var Mt=[];ht.getRectMinMax(q,Q,Y,tt,Mt);var Rt=Mt[0],Gt=Mt[1];if(!(O.z-Dt>Gt||O.z+Dt<Rt))for(var Ft=q;Ft<Y;Ft++)for(var Lt=Q;Lt<tt;Lt++)ht.getConvexTrianglePillar(Ft,Lt,!1),d.pointToWorldFrame(_t,It,ht.pillarOffset,zt),vt.distanceTo(zt)<ht.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,ht.pillarConvex,vt,zt,Kt,It,wt,Pt,null,null,w,null),ht.getConvexTrianglePillar(Ft,Lt,!0),d.pointToWorldFrame(_t,It,ht.pillarOffset,zt),vt.distanceTo(zt)<ht.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,ht.pillarConvex,vt,zt,Kt,It,wt,Pt,null,null,w,null)}};var De=new c,te=new c;v.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(lt,ht,vt,_t,Kt,It,wt,Pt){var et=ht.data,At=lt.radius,Dt=ht.elementSize,zt=te,w=De;d.pointToLocalFrame(_t,It,vt,w);var O=Math.floor((w.x-At)/Dt)-1,q=Math.ceil((w.x+At)/Dt)+1,Y=Math.floor((w.y-At)/Dt)-1,Q=Math.ceil((w.y+At)/Dt)+1;if(!(q<0||Q<0||O>et.length||Q>et[0].length)){O<0&&(O=0),q<0&&(q=0),Y<0&&(Y=0),Q<0&&(Q=0),O>=et.length&&(O=et.length-1),q>=et.length&&(q=et.length-1),Q>=et[0].length&&(Q=et[0].length-1),Y>=et[0].length&&(Y=et[0].length-1);var tt=[];ht.getRectMinMax(O,Y,q,Q,tt);var Mt=tt[0],Rt=tt[1];if(!(w.z-At>Rt||w.z+At<Mt))for(var Gt=this.result,Ft=O;Ft<q;Ft++)for(var Lt=Y;Lt<Q;Lt++){var St=Gt.length;ht.getConvexTrianglePillar(Ft,Lt,!1),d.pointToWorldFrame(_t,It,ht.pillarOffset,zt),vt.distanceTo(zt)<ht.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,ht.pillarConvex,vt,zt,Kt,It,wt,Pt),ht.getConvexTrianglePillar(Ft,Lt,!0),d.pointToWorldFrame(_t,It,ht.pillarOffset,zt),vt.distanceTo(zt)<ht.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,ht.pillarConvex,vt,zt,Kt,It,wt,Pt);var se=Gt.length-St;if(se>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,a){n.exports=_;var r=e("../shapes/Shape"),s=e("../math/Vec3"),o=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var d=e("./Narrowphase"),u=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),h=e("../material/Material"),p=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),f=e("../collision/AABB"),x=e("../collision/Ray"),y=e("../collision/NaiveBroadphase");function _(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new y,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new d(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new h("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new u,new f;var S=new x;if(_.prototype.getContactMaterial=function(I,j){return this.contactMaterialTable.get(I.id,j.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var I=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=I,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(I){this.bodies.indexOf(I)===-1&&(I.index=this.bodies.length,this.bodies.push(I),I.world=this,I.initPosition.copy(I.position),I.initVelocity.copy(I.velocity),I.timeLastSleepy=this.time,I instanceof v&&(I.initAngularVelocity.copy(I.angularVelocity),I.initQuaternion.copy(I.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=I,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(I){this.constraints.push(I)},_.prototype.removeConstraint=function(I){var j=this.constraints.indexOf(I);j!==-1&&this.constraints.splice(j,1)},_.prototype.rayTest=function(I,j,G){G instanceof m?this.raycastClosest(I,j,{skipBackfaces:!0},G):this.raycastAll(I,j,{skipBackfaces:!0},G)},_.prototype.raycastAll=function(I,j,G,A){return G.mode=x.ALL,G.from=I,G.to=j,G.callback=A,S.intersectWorld(this,G)},_.prototype.raycastAny=function(I,j,G,A){return G.mode=x.ANY,G.from=I,G.to=j,G.result=A,S.intersectWorld(this,G)},_.prototype.raycastClosest=function(I,j,G,A){return G.mode=x.CLOSEST,G.from=I,G.to=j,G.result=A,S.intersectWorld(this,G)},_.prototype.remove=function(I){I.world=null;var j=this.bodies.length-1,G=this.bodies,A=G.indexOf(I);if(A!==-1){G.splice(A,1);for(var N=0;N!==G.length;N++)G[N].index=N;this.collisionMatrix.setNumObjects(j),this.removeBodyEvent.body=I,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(I){this.materials.push(I)},_.prototype.addContactMaterial=function(I){this.contactmaterials.push(I),this.contactMaterialTable.set(I.materials[0].id,I.materials[1].id,I)},typeof performance>"u"&&(performance={}),!performance.now){var R=Date.now();performance.timing&&performance.timing.navigationStart&&(R=performance.timing.navigationStart),performance.now=function(){return Date.now()-R}}var F=new s;_.prototype.step=function(I,j,G){if(G=G||10,j=j||0,j===0)this.internalStep(I),this.time+=I;else{var A=Math.floor((this.time+j)/I)-Math.floor(this.time/I);A=Math.min(A,G);for(var N=performance.now(),L=0;L!==A&&(this.internalStep(I),!(performance.now()-N>I*1e3));L++);this.time+=j;for(var P=this.time%I,b=P/I,Z=F,st=this.bodies,J=0;J!==st.length;J++){var K=st[J];K.type!==v.STATIC&&K.sleepState!==v.SLEEPING?(K.position.vsub(K.previousPosition,Z),Z.scale(b,Z),K.position.vadd(Z,K.interpolatedPosition)):(K.interpolatedPosition.copy(K.position),K.interpolatedQuaternion.copy(K.quaternion))}}};var z={type:"postStep"},M={type:"preStep"},E={type:"collide",body:null,contact:null},U=[],V=[],D=[],H=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new o;var W=new o,rt=new o,B=new s;_.prototype.internalStep=function(I){this.dt=I;var j=this.contacts,G=D,A=H,N=this.numObjects(),L=this.bodies,P=this.solver,b=this.gravity,Z=this.doProfiling,st=this.profile,J=v.DYNAMIC,K,dt=this.constraints,ut=V;b.norm();var k=b.x,Tt=b.y,pt=b.z,it=0;for(Z&&(K=performance.now()),it=0;it!==N;it++){var ct=L[it];if(ct.type&J){var Yt=ct.force,bt=ct.mass;Yt.x+=bt*k,Yt.y+=bt*Tt,Yt.z+=bt*pt}}for(var it=0,Ht=this.subsystems.length;it!==Ht;it++)this.subsystems[it].update();Z&&(K=performance.now()),G.length=0,A.length=0,this.broadphase.collisionPairs(this,G,A),Z&&(st.broadphase=performance.now()-K);var Wt=dt.length;for(it=0;it!==Wt;it++){var yt=dt[it];if(!yt.collideConnected)for(var Zt=G.length-1;Zt>=0;Zt-=1)(yt.bodyA===G[Zt]&&yt.bodyB===A[Zt]||yt.bodyB===G[Zt]&&yt.bodyA===A[Zt])&&(G.splice(Zt,1),A.splice(Zt,1))}this.collisionMatrixTick(),Z&&(K=performance.now());var Qt=U,C=j.length;for(it=0;it!==C;it++)Qt.push(j[it]);j.length=0;var T=this.frictionEquations.length;for(it=0;it!==T;it++)ut.push(this.frictionEquations[it]);this.frictionEquations.length=0,this.narrowphase.getContacts(G,A,this,j,Qt,this.frictionEquations,ut),Z&&(st.narrowphase=performance.now()-K),Z&&(K=performance.now());for(var it=0;it<this.frictionEquations.length;it++)P.addEquation(this.frictionEquations[it]);for(var $=j.length,mt=0;mt!==$;mt++){var yt=j[mt],ct=yt.bi,ft=yt.bj;yt.si,yt.sj;var gt;if(ct.material&&ft.material?gt=this.getContactMaterial(ct.material,ft.material)||this.defaultContactMaterial:gt=this.defaultContactMaterial,gt.friction,ct.material&&ft.material&&(ct.material.friction>=0&&ft.material.friction>=0&&ct.material.friction*ft.material.friction,ct.material.restitution>=0&&ft.material.restitution>=0&&(yt.restitution=ct.material.restitution*ft.material.restitution)),P.addEquation(yt),ct.allowSleep&&ct.type===v.DYNAMIC&&ct.sleepState===v.SLEEPING&&ft.sleepState===v.AWAKE&&ft.type!==v.STATIC){var Bt=ft.velocity.norm2()+ft.angularVelocity.norm2(),Et=Math.pow(ft.sleepSpeedLimit,2);Bt>=Et*2&&(ct._wakeUpAfterNarrowphase=!0)}if(ft.allowSleep&&ft.type===v.DYNAMIC&&ft.sleepState===v.SLEEPING&&ct.sleepState===v.AWAKE&&ct.type!==v.STATIC){var ot=ct.velocity.norm2()+ct.angularVelocity.norm2(),qt=Math.pow(ct.sleepSpeedLimit,2);ot>=qt*2&&(ft._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ct,ft,!0),this.collisionMatrixPrevious.get(ct,ft)||(E.body=ft,E.contact=yt,ct.dispatchEvent(E),E.body=ct,ft.dispatchEvent(E))}for(Z&&(st.makeContactConstraints=performance.now()-K,K=performance.now()),it=0;it!==N;it++){var ct=L[it];ct._wakeUpAfterNarrowphase&&(ct.wakeUp(),ct._wakeUpAfterNarrowphase=!1)}var Wt=dt.length;for(it=0;it!==Wt;it++){var yt=dt[it];yt.update();for(var Zt=0,kt=yt.equations.length;Zt!==kt;Zt++){var Vt=yt.equations[Zt];P.addEquation(Vt)}}P.solve(I,this),Z&&(st.solve=performance.now()-K),P.removeAllEquations();var Ot=Math.pow;for(it=0;it!==N;it++){var ct=L[it];if(ct.type&J){var $t=Ot(1-ct.linearDamping,I),ie=ct.velocity;ie.mult($t,ie);var X=ct.angularVelocity;if(X){var Ct=Ot(1-ct.angularDamping,I);X.mult(Ct,X)}}}for(this.dispatchEvent(M),it=0;it!==N;it++){var ct=L[it];ct.preStep&&ct.preStep.call(ct)}Z&&(K=performance.now());var at=W,xt=rt,Ut=this.stepnumber,ee=v.DYNAMIC|v.KINEMATIC,le=Ut%(this.quatNormalizeSkip+1)===0,ue=this.quatNormalizeFast,De=I*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,it=0;it!==N;it++){var te=L[it],lt=te.force,ht=te.torque;if(te.type&ee&&te.sleepState!==v.SLEEPING){var vt=te.velocity,_t=te.angularVelocity,Kt=te.position,It=te.quaternion,wt=te.invMass,Pt=te.invInertiaWorld;vt.x+=lt.x*wt*I,vt.y+=lt.y*wt*I,vt.z+=lt.z*wt*I,te.angularVelocity&&(Pt.vmult(ht,B),B.mult(I,B),B.vadd(_t,_t)),Kt.x+=vt.x*I,Kt.y+=vt.y*I,Kt.z+=vt.z*I,te.angularVelocity&&(at.set(_t.x,_t.y,_t.z,0),at.mult(It,xt),It.x+=De*xt.x,It.y+=De*xt.y,It.z+=De*xt.z,It.w+=De*xt.w,le&&(ue?It.normalizeFast():It.normalize())),te.aabb&&(te.aabbNeedsUpdate=!0),te.updateInertiaWorld&&te.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,Z&&(st.integrate=performance.now()-K),this.time+=I,this.stepnumber+=1,this.dispatchEvent(z),it=0;it!==N;it++){var ct=L[it],et=ct.postStep;et&&et.call(ct)}if(this.allowSleep)for(it=0;it!==N;it++)L[it].sleepTick(this.time)},_.prototype.clearForces=function(){for(var I=this.bodies,j=I.length,G=0;G!==j;G++){var A=I[G];A.force,A.torque,A.force.set(0,0,0),A.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(So);var hn=So.exports;const xr=(i,t,e,n,a=!1)=>{const r=new _i(i,t,e),s=new Oi({color:n,wireframe:a});return new nn(r,s)},kf=()=>{const e=new Mo({color:16777215}),n=new sn().setFromPoints([new nt(0,-.02,0),new nt(0,.02,0)]),a=new Oa(n,e),r=new sn().setFromPoints([new nt(-.02,0,0),new nt(.02,0,0)]),s=new Oa(r,e),o=new bi;return o.add(a),o.add(s),o.position.set(0,2,1.4),o};class Xf{constructor(t=0,e=30){this.hp=100,this.ammo=t,this.magazineSize=e,this.inMagazine=e,this.inReserve=t-e}reload(){this.inReserve>=this.magazineSize-this.inMagazine?(this.inReserve+=this.inMagazine,this.inMagazine=this.magazineSize,this.inReserve-=this.magazineSize):(this.inReserve+=this.inMagazine,this.inMagazine=this.inReserve,this.inReserve=0)}removeAmmo(){this.inMagazine-=1}}let cs=2e-4,Ri=.25,za=2,us=!1,Va=0;const Ga=600,qf=3;let Jr=200,Eo=5;const Yf=150;let zi=new Xf(60,30),Zf=800;window.speed=(i=.25)=>typeof i=="number"?(Ri=i,`speed updated to: ${i}`):"invalid speed value";window.sens=(i=2e-4)=>typeof i=="number"?(cs=i,`sensitivity updated to: ${i}`):"invalid sensitivity value";window.position=(i,t,e)=>{typeof i=="number"&&typeof t=="number"&&typeof e=="number"&&ge.position.set(i,t,e)};let ms=i=>{let t=document.getElementById("mag"),e=document.getElementById("reserve");t.textContent=i.inMagazine,e.textContent=i.inReserve};const an=new Wf,ge=new Ze(75,window.innerWidth/window.innerHeight,.1,1e3);ge.position.set(0,5,2);ge.lookAt(0,5,0);const yr=new yo;yr.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(yr.domElement);yr.domElement.id="canvas";let fn=new hn.World;fn.gravity.set(0,-10,0);fn.broadphase=new hn.NaiveBroadphase;fn.solver.iterations=10;const Kf=new gr(1e3,1e3),jf=new Oi({color:16777215,side:cn,wireframe:!1}),Mr=new nn(Kf,jf);Mr.rotation.x=-Math.PI/2;Mr.position.y=0;an.add(Mr);const $f=new hn.Plane,wo=new hn.Body({mass:100,shape:$f});wo.userData={physicsMesh:Mr,collisionClass:"floor"};fn.addBody(wo);ms(zi);let To=xr(1,50,1,5495190);To.position.set(0,0,0);an.add(To);let Ao=xr(500,.2,1,9502720);Ao.position.set(0,0,0);an.add(Ao);let bo=xr(1,.2,500,9502720);bo.position.set(0,0,0);an.add(bo);let Ha=i=>Math.floor(Math.random()*100)%2==0?Math.random()*i*-1:Math.random()*i,Qf=()=>{let i=new hn.Box(new hn.Vec3(2,2,2)),t=10,e=new hn.Body({mass:t});return e.addShape(i),e.angularVelocity.set(1,0,1),e.angularDamping=.01,e.position.set(Ha(100),1,Ha(100)),e},Ci=[],cr=[],vs=[],Jf=[];for(let i=0;i<20;i++){let t=Qf(),e=xr(2,2,2,6770343,!1);t.add,t.addEventListener("collide",n=>{n.body.userData.collisionClass!="userProjectile"||(vs.push(n.target),an.remove(n.target.userData.physicsMesh))}),an.add(e),fn.addBody(t),e.userData.physicsBody=t,t.userData={physicsMesh:e,collisionClass:"chaseBox"},Ci.push(e),cr.push(t)}let tp=(i,t)=>{let e=new nt;ge.getWorldPosition(e),e.sub(i.position);const n=5,a=e.clone().normalize().multiplyScalar(n);t.velocity.set(a.x,a.y,a.z)},ep=()=>{for(let i=0;i<Ci.length;i++)tp(Ci[i],cr[i]),Ci[i].position.copy(cr[i].position),Ci[i].quaternion.copy(cr[i].quaternion)};kf();const qe={};document.addEventListener("keydown",i=>{qe[i.key]=!0});document.addEventListener("keyup",i=>{qe[i.key]=!1});const np=()=>{const i=new nt(0,0,-1);if(i.applyQuaternion(ge.quaternion),i.setY(0),(qe.ArrowUp||qe.w)&&ge.position.addScaledVector(i,Ri),(qe.ArrowDown||qe.s)&&ge.position.addScaledVector(i,-Ri),qe.ArrowLeft||qe.a){const t=new nt(-1,0,0);t.applyQuaternion(ge.quaternion),ge.position.addScaledVector(t,Ri)}if(qe.ArrowRight||qe.d){const t=new nt(1,0,0);t.applyQuaternion(ge.quaternion),ge.position.addScaledVector(t,Ri)}qe.r&&ip(zi),ge.position.y<za&&(ge.position.y=za)};let ur=!1,ip=i=>{ur||(ur=!0,setTimeout(()=>{i.reload(),ur=!1,ms(zi)},Zf))};document.addEventListener("keydown",i=>{i.key===" "&&!us&&rp()});function rp(){us=!0,Va=Date.now();const i=ge.position.y;function t(){const n=Date.now()-Va;if(n>=Ga){ge.position.y=i,us=!1,console.log(ge.position.y);return}const a=n/Ga;ge.position.y=i+qf*Math.sin(a*Math.PI),requestAnimationFrame(t)}t()}const Ti=new Fi(0,0,0,"YXZ");document.addEventListener("mousemove",i=>{qe.Alt||(Ti.x-=i.movementY*cs,Ti.y-=i.movementX*cs,Ti.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,Ti.x)),ge.rotation.copy(Ti)),i.movementX,i.movementY});let li=document.querySelector("canvas");li.onclick=i=>{li.requestPointerLock=li.requestPointerLock||li.mozRequestPointerLock||li.webkitRequestPointerLock,li.requestPointerLock()};let hr=[];function Ro(i,t,e,n){if(n.inMagazine>0&&!ur){n.removeAmmo(),ms(n);const a=new ps(.1,32,32),r=new Oi({color:65280}),s=new nn(a,r);an.add(s);const o=.1,c=new hn.Sphere(.1),d=new hn.Body({mass:o,shape:c});d.userData={physicsMesh:s,collisionClass:"userProjectile"},fn.addBody(d),s.position.copy(i),d.position.copy(s.position);const u=new nt;t.getWorldDirection(u);const l=new hn.Vec3(u.x*Jr,u.y*Jr,u.z*Jr);d.velocity.copy(l);let h=0;const p=setInterval(()=>{h+=1/60,h>=e&&(an.remove(s),fn.remove(d),clearInterval(p))},1e3/60);hr.push({mesh:s,body:d,removeAfterSeconds:e})}}let sp=()=>{for(let i=hr.length-1;i>=0;i--){const t=hr[i];t.mesh.position.copy(t.body.position),t.removeAfterSeconds-=1/60,t.removeAfterSeconds<=0&&(an.remove(t.mesh),fn.remove(t.body),hr.splice(i,1))}};document.addEventListener("click",()=>{Ro(ge.position,ge,Eo,zi)});let gs=!1,Co;function ap(){Co=setInterval(()=>{gs&&Ro(ge.position,ge,Eo,zi)},Yf)}function op(){clearInterval(Co)}document.addEventListener("mousedown",()=>{gs=!0,ap()});document.addEventListener("mouseup",()=>{gs=!1,op()});let lp=(i,t)=>{i&&(fn.remove(i),vs.splice(t,1))},cp=(i,t)=>{i&&(an.remove(i),shapesToRemove.splice(t,1))};const Po=()=>{fn.step(1/60),sp(),ep(),np(),vs.forEach(lp),Jf.forEach(cp),requestAnimationFrame(Po),yr.render(an,ge)};Po();
