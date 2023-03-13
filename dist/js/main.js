(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),o=document.getElementById("timer-hours"),l=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),n=()=>{let e=(new Date("28 june 2023").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}},s=e=>e<10?"0"+e:e;let c=setInterval((()=>{n().timeRemaining>0?(()=>{let e=n();o.textContent=s(e.hours),l.textContent=s(e.minutes),r.textContent=s(e.seconds),t.textContent=s(e.days)})():clearInterval(c)}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=(t.querySelector(".close-btn"),t.querySelectorAll("ul>li>a"),()=>{t.classList.toggle("active-menu")});e.addEventListener("click",o),t.addEventListener("click",(e=>{"A"===e.target.tagName&&o()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.documentElement.offsetWidth;let l=0;t.forEach((t=>{t.addEventListener("click",(()=>{o>="768"?(()=>{e.style.display="block",e.style.opacity=l;const t=()=>{l+=.1,e.style.opacity=l,l<1&&requestAnimationFrame(t)};requestAnimationFrame(t)})():e.style.display="block"}))})),e.addEventListener("click",(t=>{const o=t.target;o.closest(".popup-content")&&!o.classList.contains("popup-close")||(e.style.display="none")}))})(),document.querySelectorAll(".calc-block input").forEach((e=>{e.addEventListener("input",(function(t){/[^\d]/g.test(e.value)?(e.value=e.value.replace(t.data,""),console.log("not number")):console.log("number")}))})),document.querySelectorAll("form").forEach((e=>{e.addEventListener("submit",(function(t){t.preventDefault();const o=e.querySelector('input[type="text"]'),l=e.querySelector('input[type="tel"]'),r=e.querySelector('input[type="email"]'),n=e.querySelector("input.mess");/^[\d\+][\d\(\)\ -]{4,14}\d$/g.test(l.value)?(l.style.border="1px solid green",console.log("tel")):(l.style.border="1px solid red",alert("Введите номер телефона цифрами")),/^([а-яА-ЯёЁ]+\s)*[а-яА-ЯёЁ]*$/g.test(o.value)?(o.style.border="1px solid green",console.log("text")):(o.style.border="1px solid red",alert("Имя русскими символами")),/^(((\w*\.)|(\w*\-))*\w*)@(\w*\.)+([a-z]+)$/g.test(r.value)?(r.style.border="1px solid green",console.log("email")):(r.style.border="1px solid red",alert("Введите email")),/^([а-яА-ЯёЁ]+\s)*[а-яА-ЯёЁ]*$/g.test(n.value)?(n.style.border="1px solid green",console.log("textarea")):(n.style.border="1px solid red",alert("Введите сообщение на русском"))}))})),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const l=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===l?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),document.querySelectorAll("menu ul a").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}))})),document.querySelector("main a").addEventListener("click",(e=>{e.preventDefault(),document.querySelector("#service-block").scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}))})();