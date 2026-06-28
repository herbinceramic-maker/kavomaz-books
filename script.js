
(function(){'use strict';
  const GTM_ID='GTM-KS4JF3BW';
  window.dataLayer=window.dataLayer||[];
  const clean=v=>String(v||'').replace(/\s+/g,' ').trim().slice(0,180);
  const pagePath=window.location.pathname||'/';
  function pushEvent(eventName, params={}){window.dataLayer.push({event:eventName,event_source:'kavomaz_books',gtm_container_id:GTM_ID,page_path:pagePath,page_title:document.title,...params});}
  const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
  const menu=document.querySelector('.menu-toggle'); const nav=document.querySelector('.nav');
  if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false');pushEvent('menu_toggle',{state:open?'open':'closed'});}); nav.addEventListener('click',e=>{if(e.target.closest('a')&&innerWidth<=900){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}});}
  document.addEventListener('click',function(e){const link=e.target.closest('a'); if(!link) return; const raw=link.getAttribute('href')||''; const absolute=link.href||raw; let domain=''; try{domain=new URL(absolute).hostname;}catch(err){}
    const payload={link_url:absolute,link_text:clean(link.textContent),link_label:link.dataset.label||'',product_name:clean(link.dataset.product||link.closest('[data-product]')?.dataset.product||''),partner_name:clean(link.dataset.partner||''),destination_domain:domain};
    if(link.classList.contains('amazon-link')||/amazon\./i.test(raw)) pushEvent('amazon_click',{...payload,partner_name:'Amazon'});
    else if(/\/samples\//.test(raw)||/\.pdf($|\?)/i.test(raw)) pushEvent('sample_download',{...payload,file_url:absolute});
    else if(raw.startsWith('mailto:')) pushEvent('contact_click',{...payload,contact_method:'email'});
    else if(link.classList.contains('js-track')||link.dataset.event) pushEvent(link.dataset.event||'cta_click',payload);
    if(/^https?:\/\//i.test(raw)&&domain&&domain!==location.hostname) pushEvent('external_link_click',payload);
  },{capture:true});
  document.querySelectorAll('.js-product').forEach(card=>card.addEventListener('click',()=>pushEvent('product_click',{product_name:clean(card.dataset.product||card.textContent)}),{capture:true}));
  window.KavomazBooksTracking=Object.freeze({pushEvent,GTM_ID}); pushEvent('page_ready',{content_group:document.body.dataset.section||'kavomaz_books'});
})();
(function(){'use strict';
  const STORAGE_KEY='kavomaz_books_cookie_choice_v2';
  function push(eventName,params){if(window.KavomazBooksTracking) window.KavomazBooksTracking.pushEvent(eventName,params||{}); else {window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:eventName,...(params||{})});}}
  function banner(){if(document.querySelector('.cookie-banner')) return; const b=document.createElement('section'); b.className='cookie-banner'; b.setAttribute('role','dialog'); b.setAttribute('aria-label','Cookie notice'); b.innerHTML='<div><strong>Kavomaz Books uses cookies</strong><p>We use essential cookies plus optional analytics and affiliate measurement cookies. You can accept or decline optional cookies.</p></div><div class="cookie-actions"><button class="btn btn-secondary" type="button" data-cookie-decline>Decline optional</button><button class="btn btn-primary" type="button" data-cookie-accept>Accept cookies</button><a class="btn btn-secondary" href="/cookie-policy.html">Cookie Policy</a></div>'; document.body.appendChild(b); if(!localStorage.getItem(STORAGE_KEY)) b.classList.add('show'); b.querySelector('[data-cookie-accept]').addEventListener('click',()=>{localStorage.setItem(STORAGE_KEY,'accepted');b.classList.remove('show');push('cookie_consent_update',{cookie_choice:'accepted'});}); b.querySelector('[data-cookie-decline]').addEventListener('click',()=>{localStorage.setItem(STORAGE_KEY,'declined');b.classList.remove('show');push('cookie_consent_update',{cookie_choice:'declined'});});}
  document.addEventListener('DOMContentLoaded',banner);
  document.addEventListener('click',e=>{const t=e.target.closest('[data-open-cookie-settings],.cookie-settings-link'); if(!t)return; e.preventDefault(); localStorage.removeItem(STORAGE_KEY); banner(); document.querySelector('.cookie-banner')?.classList.add('show');});
  document.addEventListener('submit',e=>{const form=e.target.closest('[data-newsletter-form]'); if(!form)return; e.preventDefault(); const email=(form.querySelector('input[type="email"]')?.value||'').trim(); if(!email)return; push('newsletter_signup',{signup_source:location.pathname,email_domain:(email.split('@')[1]||'').toLowerCase()}); const subject=encodeURIComponent('Kavomaz Books Newsletter Subscription'); const body=encodeURIComponent('Please add this email to the Kavomaz Books newsletter: '+email); location.href='mailto:books@kavomaz.com?subject='+subject+'&body='+body;});
})();
