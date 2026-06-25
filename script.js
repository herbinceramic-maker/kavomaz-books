(function(){
  const d=window.dataLayer=window.dataLayer||[];
  const push=(name,params={})=>d.push({event:name,...params});
  document.getElementById('year')&&(document.getElementById('year').textContent=new Date().getFullYear());
  const menu=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
  if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false');});}
  document.addEventListener('click',function(e){
    const a=e.target.closest('a'); if(!a) return;
    const href=a.getAttribute('href')||'';
    if(a.classList.contains('js-track')) push(a.dataset.event||'link_click',{link_url:href,link_text:a.textContent.trim(),label:a.dataset.label||'',product:a.dataset.product||''});
    if(a.classList.contains('amazon-link')||href.includes('amazon.')) push('amazon_click',{link_url:href,product:a.dataset.product||a.closest('[data-product]')?.dataset.product||''});
    if(href.startsWith('mailto:')) push('contact_click',{method:'email',link_url:href});
    if(href.includes('/samples/')||href.endsWith('.pdf')) push('sample_download',{file_url:href});
  },{capture:true});
  document.querySelectorAll('.js-product').forEach(function(card){card.addEventListener('click',function(){push('product_click',{product:card.dataset.product||''});},{capture:true});});
  // Pixel readiness: add Microsoft Clarity, Google Ads, Pinterest and TikTok tags inside GTM, not here, to prevent duplicate tracking.
})();