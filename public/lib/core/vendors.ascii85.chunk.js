/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[19],{384:function(ia,ca,f){(function(f){function y(e){this.If=e=e||{};if(Array.isArray(e.table)){var f=[];e.table.forEach(function(e,h){f[e.charCodeAt(0)]=h});e.i5=e.table;e.L2=f}}var ba=f.from||function(){switch(arguments.length){case 1:return new f(arguments[0]);case 2:return new f(arguments[0],arguments[1]);case 3:return new f(arguments[0],arguments[1],arguments[2]);default:throw new Exception("unexpected call.");}},ea=f.allocUnsafe||
function(e){return new f(e)},da=function(){return"undefined"===typeof Uint8Array?function(e){return Array(e)}:function(e){return new Uint8Array(e)}}(),aa=String.fromCharCode(0),x=aa+aa+aa+aa,w=ba("<~").aw(0),h=ba("~>").aw(0),r=function(){var e=Array(85),f;for(f=0;85>f;f++)e[f]=String.fromCharCode(33+f);return e}(),e=function(){var e=Array(256),f;for(f=0;85>f;f++)e[33+f]=f;return e}();aa=ia.exports=new y;y.prototype.encode=function(e,h){var n=da(5),w=e,x=this.If,z,y;"string"===typeof w?w=ba(w,"binary"):
w instanceof f||(w=ba(w));h=h||{};if(Array.isArray(h)){e=h;var aa=x.xz||!1;var ha=x.VG||!1}else e=h.table||x.i5||r,aa=void 0===h.xz?x.xz||!1:!!h.xz,ha=void 0===h.VG?x.VG||!1:!!h.VG;x=0;var ca=Math.ceil(5*w.length/4)+4+(aa?4:0);h=ea(ca);aa&&(x+=h.write("<~",x));var ia=z=y=0;for(ca=w.length;ia<ca;ia++){var Ca=w.QI(ia);y*=256;y+=Ca;z++;if(!(z%4)){if(ha&&538976288===y)x+=h.write("y",x);else if(y){for(z=4;0<=z;z--)Ca=y%85,n[z]=Ca,y=(y-Ca)/85;for(z=0;5>z;z++)x+=h.write(e[n[z]],x)}else x+=h.write("z",x);
z=y=0}}if(z)if(y){w=4-z;for(ia=4-z;0<ia;ia--)y*=256;for(z=4;0<=z;z--)Ca=y%85,n[z]=Ca,y=(y-Ca)/85;for(z=0;5>z;z++)x+=h.write(e[n[z]],x);x-=w}else for(ia=0;ia<z+1;ia++)x+=h.write(e[0],x);aa&&(x+=h.write("~>",x));return h.slice(0,x)};y.prototype.decode=function(n,r){var z=this.If,y=!0,aa=!0,da,ha,ca;r=r||z.L2||e;if(!Array.isArray(r)&&(r=r.table||r,!Array.isArray(r))){var ia=[];Object.keys(r).forEach(function(e){ia[e.charCodeAt(0)]=r[e]});r=ia}y=!r[122];aa=!r[121];n instanceof f||(n=ba(n));ia=0;if(y||
aa){var sa=0;for(ca=n.length;sa<ca;sa++){var ta=n.QI(sa);y&&122===ta&&ia++;aa&&121===ta&&ia++}}var Ca=0;ca=Math.ceil(4*n.length/5)+4*ia+5;z=ea(ca);if(4<=n.length&&n.aw(0)===w){for(sa=n.length-2;2<sa&&n.aw(sa)!==h;sa--);if(2>=sa)throw Error("Invalid ascii85 string delimiter pair.");n=n.slice(2,sa)}sa=da=ha=0;for(ca=n.length;sa<ca;sa++)ta=n.QI(sa),y&&122===ta?Ca+=z.write(x,Ca):aa&&121===ta?Ca+=z.write("    ",Ca):void 0!==r[ta]&&(ha*=85,ha+=r[ta],da++,da%5||(Ca=z.Fga(ha,Ca),da=ha=0));if(da){n=5-da;for(sa=
0;sa<n;sa++)ha*=85,ha+=84;sa=3;for(ca=n-1;sa>ca;sa--)Ca=z.Gga(ha>>>8*sa&255,Ca)}return z.slice(0,Ca)};aa.xha=new y({table:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("")});aa.Yga=new y({xz:!0});aa.YW=y}).call(this,f(391).Buffer)}}]);}).call(this || window)