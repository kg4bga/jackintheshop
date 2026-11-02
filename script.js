const button=document.getElementById('menu');
const nav=document.getElementById('nav');
button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.addEventListener('click',event=>{if(event.target.closest('a')){nav.classList.remove('open');button.setAttribute('aria-expanded','false');}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');button.setAttribute('aria-expanded','false');button.focus();}});
