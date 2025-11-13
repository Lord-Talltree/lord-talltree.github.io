(function(){
  const MIN=40, MAX=160;
  const density=14000; // pixels per star (lower = more stars)
  function calcCount(){
    const area = window.innerWidth * window.innerHeight;
    return Math.max(MIN, Math.min(MAX, Math.round(area / density)));
  }
  function clearStars(){ document.querySelectorAll(".star").forEach(n=>n.remove()); }
  function createStar(){
    const s=document.createElement("div");
    s.className="star";
    s.style.left=(Math.random()*100).toFixed(2)+"vw";
    s.style.top =(Math.random()*100).toFixed(2)+"vh";
    s.style.setProperty("--sz",(1+Math.random()*2).toFixed(2)+"px");
    s.style.setProperty("--dur",(2+Math.random()*4).toFixed(2)+"s");
    s.style.animationDelay=(-Math.random()*6).toFixed(2)+"s";
    document.body.appendChild(s);
  }
  function makeStars(){
    clearStars();
    const N=calcCount();
    for(let i=0;i<N;i++) createStar();
  }
  let t; window.addEventListener("resize",()=>{ clearTimeout(t); t=setTimeout(makeStars,150); });
  document.addEventListener("DOMContentLoaded",makeStars);
})();
