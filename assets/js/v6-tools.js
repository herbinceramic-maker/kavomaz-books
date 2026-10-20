(()=>{
const adult={
'overthinking':{title:'How to Stop Overthinking at Night',url:'/books/how-to-stop-overthinking-at-night.html',note:'Best starting point when nighttime rumination and racing thoughts are the main problem.'},
'burnout':{title:'You’re Not Broken — You’re Exhausted',url:'/books/youre-not-broken-youre-exhausted.html',note:'For emotional exhaustion, depleted energy, and recovery without self-blame.'},
'procrastination':{title:'You’re Not Lazy — You’re Avoiding Pain',url:'/books/youre-not-lazy-youre-avoiding-pain.html',note:'For avoidance, emotional resistance, and tasks that feel heavier than they look.'},
'social-skills':{title:'The Little Social Skills Book',url:'/books/the-little-social-skills-book.html',note:'For conversation, boundaries, awkward moments, work messages, and everyday confidence.'},
'responsible-ai':{title:'The Last Human Pass',url:'/books/the-last-human-pass.html',note:'For professionals using AI who want a stronger human-review and accountability standard.'}};
const kids={
'mistakes':[
{title:'Tucko and the One Crooked Fold',url:'/books/tucko-and-the-one-crooked-fold.html',note:'A gentle story about mistakes and trying again.'},
{title:'Pip’s Perfectly Imperfect Nest',url:'/books/pips-perfectly-imperfect-nest.html',note:'A story about imperfect attempts, patience, and meaning.'}],
'feelings':[
{title:'The Cloud Who Held It All In',url:'/books/the-cloud-who-held-it-all-in.html',note:'For naming and sharing big feelings.'},
{title:'The Boy Who Lived in a Box',url:'/books/the-boy-who-lived-in-a-box.html',note:'For feelings, imagination, safety, and connection.'}],
'courage':[{title:'Ollie the Reindeer: The First Flight',url:'/books/ollie-the-reindeer-the-first-flight.html',note:'For first brave steps and confidence through practice.'}],
'kindness':[
{title:'The Little Elf Who Said “Thank You”',url:'/books/the-little-elf-who-said-thank-you.html',note:'For gratitude and noticing kindness.'},
{title:'Noel the Snowman’s Christmas Eve',url:'/books/noel-the-snowmans-christmas-eve.html',note:'For helping, kindness, and warm holiday reading.'}],
'nature':[{title:'Barnaby the Planet Protector',url:'/books/barnaby-the-planet-protector.html',note:'For caring about nature through small responsible actions.'}],
'teamwork':[{title:'The Woodland Express',url:'/books/the-woodland-express.html',note:'For cooperation, friendship, and solving problems together.'}]};
function card(x){return '<article class="v6-result"><h3>'+x.title+'</h3><p>'+x.note+'</p><a class="btn btn-primary" href="'+x.url+'">View book</a></article>'}
const ab=document.getElementById('adult-find'); if(ab)ab.addEventListener('click',()=>{const k=document.getElementById('adult-need').value;document.getElementById('adult-results').innerHTML=k?card(adult[k]):'<p class="v6-callout">Choose a reading need first.</p>'});
const kb=document.getElementById('kids-find'); if(kb)kb.addEventListener('click',()=>{const k=document.getElementById('kids-need').value;document.getElementById('kids-results').innerHTML=k?(kids[k]||[]).map(card).join(''):'<p class="v6-callout">Choose a feeling or skill first.</p>'});
})();