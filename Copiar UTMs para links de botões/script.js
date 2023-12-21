 (function() {
   const utms = new URLSearchParams(window.location.search);
   if (utms.toString()) {
     var links = document.querySelectorAll('a');
     links.forEach(function(link) {
       if (link.href.indexOf('DOMÍNIO-DA-PÁGINA-DE-DESTINO-AQUI') !== -1) {
         if (link.href.indexOf('?') === -1) {
           link.href += '?' + utms.toString();
         } else {
           link.href += '&' + utms.toString();
         }  
       }
   });
 }
 })();