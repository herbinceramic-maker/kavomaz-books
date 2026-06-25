(function () {
  'use strict';

  const GTM_ID = 'GTM-KS4JF3BW';
  const dataLayer = window.dataLayer = window.dataLayer || [];
  const clean = (value) => String(value || '').replace(/\s+/g, ' ').trim().slice(0, 180);
  const pagePath = window.location.pathname || '/';

  function pushEvent(eventName, params = {}) {
    dataLayer.push({
      event: eventName,
      event_source: 'kavomaz_books',
      gtm_container_id: GTM_ID,
      page_path: pagePath,
      page_title: document.title,
      ...params
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', open ? 'true' : 'false');
      pushEvent('menu_toggle', { state: open ? 'open' : 'closed' });
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a') && window.innerWidth <= 850) {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.addEventListener('click', function (event) {
    const link = event.target.closest('a');
    if (!link) return;

    const rawHref = link.getAttribute('href') || '';
    const absoluteHref = link.href || rawHref;
    const productName = link.dataset.product || link.closest('[data-product]')?.dataset.product || '';
    const basePayload = {
      link_url: absoluteHref,
      link_text: clean(link.textContent),
      link_label: link.dataset.label || '',
      product_name: clean(productName),
      partner_name: clean(link.dataset.partner || ''),
      destination_domain: (() => {
        try { return new URL(absoluteHref).hostname; } catch (e) { return ''; }
      })()
    };

    let handled = false;

    if (link.classList.contains('amazon-link') || /amazon\./i.test(rawHref)) {
      pushEvent('amazon_click', { ...basePayload, partner_name: 'Amazon' });
      handled = true;
    }

    if (!handled && link.classList.contains('partner-link')) {
      pushEvent('affiliate_partner_click', { ...basePayload, partner_name: link.dataset.partner || 'Affiliate partner' });
      handled = true;
    }

    if (!handled && (rawHref.includes('/samples/') || /\.pdf($|\?)/i.test(rawHref))) {
      pushEvent('sample_download', { ...basePayload, file_url: absoluteHref });
      handled = true;
    }

    if (!handled && rawHref.startsWith('mailto:')) {
      pushEvent('contact_click', { ...basePayload, contact_method: 'email' });
      handled = true;
    }

    if (!handled && rawHref.startsWith('tel:')) {
      pushEvent('contact_click', { ...basePayload, contact_method: 'phone' });
      handled = true;
    }

    if (!handled && /wa\.me|whatsapp/i.test(rawHref)) {
      pushEvent('contact_click', { ...basePayload, contact_method: 'whatsapp' });
      handled = true;
    }

    if (!handled && (link.classList.contains('js-track') || link.dataset.event)) {
      pushEvent(link.dataset.event || 'cta_click', basePayload);
      handled = true;
    }

    if (/^https?:\/\//i.test(rawHref) && basePayload.destination_domain && basePayload.destination_domain !== window.location.hostname) {
      pushEvent('external_link_click', basePayload);
    }
  }, { capture: true });

  document.querySelectorAll('.js-product').forEach((card) => {
    card.addEventListener('click', function () {
      pushEvent('product_click', {
        product_name: clean(card.dataset.product || card.textContent),
        product_category: clean(card.dataset.category || '')
      });
    }, { capture: true });
  });

  window.KavomazBooksTracking = Object.freeze({ pushEvent, GTM_ID });
  pushEvent('page_ready', { content_group: document.body.dataset.section || 'kavomaz_books' });
  if (pagePath.includes('/affiliate') || pagePath.includes('/blog/affiliate/')) {
    pushEvent('affiliate_hub_view', { affiliate_page_type: pagePath.includes('/blog/affiliate/') ? 'money_article' : 'hub' });
  }
})();
