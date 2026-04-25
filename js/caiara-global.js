/**
 * Garante CSS global (FAB + links) em todas as páginas que carregam este script,
 * inclusive a home que não inclui landing.css.
 */
(function ensureCaiaraGlobalCss() {
  if (document.getElementById('caiara-global-css')) return;
  var link = document.createElement('link');
  link.id = 'caiara-global-css';
  link.rel = 'stylesheet';
  var href = '/assets/caiara-global.css';
  try {
    var sc = document.currentScript;
    if (sc && sc.src) {
      href = new URL('../assets/caiara-global.css', sc.src).href;
    }
  } catch (_) {}
  link.href = href;
  document.head.appendChild(link);
})();

/**
 * WhatsApp oficial Caiara (E.164 sem +, para wa.me).
 * Usar em links: https://wa.me/ + WHATSAPP_NUMBER + ?text=...
 */
const WHATSAPP_NUMBER = '5521994961175';
window.WHATSAPP_NUMBER = WHATSAPP_NUMBER;

window.CAIARA_WHATSAPP = {
  number: WHATSAPP_NUMBER,
  urlDefault:
    'https://wa.me/5521994961175?text=' +
    encodeURIComponent(
      'Olá, vi o site da Caiara e quero entender como vocês podem ajudar minha empresa.'
    ),
  urlDiagnostico:
    'https://wa.me/5521994961175?text=' +
    encodeURIComponent(
      'Olá, vi o site da Caiara e quero pedir um diagnóstico para minha empresa.'
    ),
};

/**
 * Eventos de conversão (GA4). Não quebra se gtag não existir.
 * @param {string} eventName
 * @param {Record<string, unknown>} [params]
 */
function trackEvent(eventName, params) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params || {});
  }
}
window.trackEvent = trackEvent;

function bindTracked(selector, eventName, paramKey) {
  document.querySelectorAll(selector).forEach(function (el) {
    el.addEventListener('click', function () {
      trackEvent(eventName, paramKey ? { [paramKey]: el.getAttribute('href') || '' } : {});
    });
  });
}

function injectWhatsAppFab() {
  if (document.getElementById('caiara-whatsapp-fab')) return;
  var legacy = document.getElementById('caiara-wa-fab');
  if (legacy) legacy.remove();

  document.body.classList.add('has-caiara-fab');

  var a = document.createElement('a');
  a.id = 'caiara-whatsapp-fab';
  a.className = 'caiara-whatsapp-fab';
  a.href = window.CAIARA_WHATSAPP.urlDefault;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.setAttribute('aria-label', 'Falar com a Caiara no WhatsApp');
  a.innerHTML =
    '<span class="caiara-whatsapp-fab__icon" aria-hidden="true">' +
    '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
    '</span><span class="caiara-whatsapp-fab__label">Falar com a Caiara</span>';

  a.addEventListener('click', function () {
    trackEvent('click_whatsapp', { link_url: a.href });
  });

  document.body.appendChild(a);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectWhatsAppFab);
} else {
  injectWhatsAppFab();
}

bindTracked('a[href^="mailto:"]', 'click_email', 'link_url');
bindTracked('a[href^="tel:"]', 'click_phone', 'link_url');

document.querySelectorAll('.js-cta-diag').forEach(function (el) {
  el.addEventListener('click', function () {
    trackEvent('click_cta_diagnostico', {
      placement: el.getAttribute('data-diag-placement') || 'unknown',
    });
  });
});
