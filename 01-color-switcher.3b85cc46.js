const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),d=setInterval((()=>{r.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled",!0),t.removeAttribute("disabled"),clearInterval(d)}));let d=null;
//# sourceMappingURL=01-color-switcher.3b85cc46.js.map