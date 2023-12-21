document.addEventListener("DOMContentLoaded", function() {
    function parametrosUTM() {
        const parametrosURL = new URLSearchParams(window.location.search);
        return {
            utm_source: parametrosURL.get('utm_source') || '',
            utm_medium: parametrosURL.get('utm_medium') || '',
            utm_campaign: parametrosURL.get('utm_campaign') || '',
            utm_term: parametrosURL.get('utm_term') || '',
            utm_content: parametrosURL.get('utm_content') || ''
        };
    }

    function preencherCampos(utmParams) {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form =>{
            if (form) {
                form.querySelector('[name="form_fields[utm_source]"]').value = utmParams.utm_source;
                form.querySelector('[name="form_fields[utm_medium]"]').value = utmParams.utm_medium;
                form.querySelector('[name="form_fields[utm_campaign]"]').value = utmParams.utm_campaign;
                form.querySelector('[name="form_fields[utm_term]"]').value = utmParams.utm_term;
                form.querySelector('[name="form_fields[utm_content]"]').value = utmParams.utm_content;

                form.addEventListener('submit', function(event) {
                    event.preventDefault();
                    const urlDestino = 'URL-DA-PÁGINA-DE-DESTINO-AQUI'; 
                    const utmQueryString = new URLSearchParams(utmParams).toString();
                    const redirecionar = `${urlDestino}?${utmQueryString}`;

                    window.location.href = redirecionar;
                });
            }
        })

    }

    const utmParams = parametrosUTM();
    preencherCampos(utmParams);
});