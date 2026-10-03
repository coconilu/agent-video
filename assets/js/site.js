/* 全站共享：滚动进度条、完成标记（localStorage）、导航完成点 */
(function(){
  var KEY='aivideo-progress';
  function get(){try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch(e){return[]}}
  function set(v){try{localStorage.setItem(KEY,JSON.stringify(v))}catch(e){}}

  // 滚动进度条
  var bar=document.getElementById('progress');
  if(bar){
    var onScroll=function(){
      var h=document.documentElement;
      var max=h.scrollHeight-h.clientHeight;
      bar.style.width=(max>0?(h.scrollTop/max*100):0)+'%';
    };
    document.addEventListener('scroll',onScroll,{passive:true});
    onScroll();
  }

  // 标记完成
  document.querySelectorAll('.mark-done button').forEach(function(btn){
    var id=btn.getAttribute('data-done');
    function paint(){
      var done=get().indexOf(id)>=0;
      btn.classList.toggle('done',done);
      btn.textContent=done?'✓ 本章已完成（点击取消）':'标记本章为已完成';
    }
    btn.addEventListener('click',function(){
      var arr=get();var i=arr.indexOf(id);
      if(i>=0)arr.splice(i,1);else arr.push(id);
      set(arr);paint();
    });
    paint();
  });

  // 导航与章节卡片的完成点
  var done=get();
  document.querySelectorAll('[data-done-dot]').forEach(function(el){
    if(done.indexOf(el.getAttribute('data-done-dot'))>=0){
      var d=document.createElement('span');d.className='done-dot';d.textContent='●';
      el.appendChild(d);
    }
  });
  document.querySelectorAll('.path-card[data-card]').forEach(function(card){
    if(done.indexOf(card.getAttribute('data-card'))>=0)card.classList.add('is-done');
  });
})();
