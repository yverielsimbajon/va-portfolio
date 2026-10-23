(function(){
var b=document.querySelector('.burger'),n=document.querySelector('nav.links');
if(b)b.addEventListener('click',function(){n.classList.toggle('open')});
document.querySelectorAll('.filters button').forEach(function(btn){btn.addEventListener('click',function(){
  document.querySelectorAll('.filters button').forEach(function(x){x.classList.remove('on')});btn.classList.add('on');
  var f=btn.dataset.f;document.querySelectorAll('.gal figure').forEach(function(fig){fig.classList.toggle('hide',f!=='all'&&fig.dataset.c!==f)});
})});
var lb=document.querySelector('.lb');
document.querySelectorAll('.gal figure').forEach(function(fig){fig.addEventListener('click',function(){lb.querySelector('img').src=fig.querySelector('img').src;lb.classList.add('on')})});
if(lb){lb.addEventListener('click',function(){lb.classList.remove('on')});document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')})}
document.querySelectorAll('form.f').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();
  var ok=f.querySelector('.ok');ok.style.display='block';ok.textContent='Thank you. Your consultation request was received (demo form). We will call you within one business day.';f.reset();ok.scrollIntoView({block:'nearest'})})});
})();
