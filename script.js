(function(){
  const MIN=40, MAX=160, density=14000;
  function calc(){return Math.max(MIN,Math.min(MAX,Math.round((innerWidth*innerHeight)/density)));}
  function clearStars(){document.querySelectorAll(".star").forEach(n=>n.remove());}
  function addStar(){const s=document.createElement("div");s.className="star";
    s.style.left=(Math.random()*100).toFixed(2)+"vw";
    s.style.top=(Math.random()*100).toFixed(2)+"vh";
    s.style.setProperty("--sz",(1+Math.random()*2).toFixed(2)+"px");
    s.style.setProperty("--dur",(2+Math.random()*4).toFixed(2)+"s");
    s.style.animationDelay=(-Math.random()*6).toFixed(2)+"s";
    document.body.appendChild(s);}
  function make(){clearStars();const n=calc();for(let i=0;i<n;i++) addStar();}
  let t;window.addEventListener("resize",()=>{clearTimeout(t);t=setTimeout(make,150);});
  document.addEventListener("DOMContentLoaded",make);
})();
