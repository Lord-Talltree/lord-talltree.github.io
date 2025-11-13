(function(){
  const COUNT = 90;
  for(let i=0;i<COUNT;i++){
    const s = document.createElement("div");
    s.className = "star";
    s.style.left = (Math.random()*100).toFixed(2) + "vw";
    s.style.top  = (Math.random()*100).toFixed(2) + "vh";
    s.style.setProperty("--sz", (1+Math.random()*2).toFixed(2) + "px");
    s.style.setProperty("--dur",(2+Math.random()*4).toFixed(2) + "s");
    s.style.animationDelay = (-Math.random()*6).toFixed(2) + "s";
    document.body.appendChild(s);
  }
})();
