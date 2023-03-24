(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),o=document.getElementById("timer-hours"),l=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),a=()=>{let e=(new Date("28 june 2023").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}},c=e=>e<10?"0"+e:e;let n=setInterval((()=>{a().timeRemaining>0?(()=>{let e=a();o.textContent=c(e.hours),l.textContent=c(e.minutes),r.textContent=c(e.seconds),t.textContent=c(e.days)})():clearInterval(n)}),1e3)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector("body"),o=()=>{e.classList.toggle("active-menu")};t.addEventListener("click",(t=>{t.target.closest(".menu")||t.target.closest(".close-btn")?o():t.target.closest("menu")?t.target.matches("menu ul a")&&o():e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.documentElement.offsetWidth;let l=0;t.forEach((t=>{t.addEventListener("click",(()=>{o>="768"?(()=>{e.style.display="block",e.style.opacity=l;const t=()=>{l+=.1,e.style.opacity=l,l<1&&requestAnimationFrame(t)};requestAnimationFrame(t)})():e.style.display="block"}))})),e.addEventListener("click",(t=>{const o=t.target;o.closest(".popup-content")&&!o.classList.contains("popup-close")||(e.style.display="none")}))})(),document.querySelectorAll(".calc-block input").forEach((e=>{e.addEventListener("input",(function(t){/[^\d]/g.test(e.value)?(e.value=e.value.replace(t.data,""),console.log("not number")):console.log("number")}))})),document.querySelectorAll("form").forEach((e=>{const t=e.querySelector('input[type="text"]'),o=e.querySelector('input[type="tel"]'),l=e.querySelector('input[type="email"]'),r=e.querySelector("input.mess");e.addEventListener("submit",(function(e){e.preventDefault(),/^[\d\+][\d\(\)\ -]{4,14}\d$/g.test(o.value)?(o.style.border="1px solid green",console.log("tel")):(o.style.border="1px solid red",alert("Введите номер телефона полностью и цифрами")),/^([а-яА-ЯёЁ]+\s)*[а-яА-ЯёЁ]*$/g.test(t.value)?(t.style.border="1px solid green",console.log("text")):(t.style.border="1px solid red",alert("Имя русскими символами")),/^(((\w*\.)|(\w*\-))*\w*)@(\w*\.)+([a-z]+)$/g.test(l.value)?(l.style.border="1px solid green",console.log("email")):(l.style.border="1px solid red",alert("Введите email")),r&&(/^([а-яА-ЯёЁ]+\s)*[а-яА-ЯёЁ]*$/g.test(r.value)?(r.style.border="1px solid green",console.log("textarea")):(r.style.border="1px solid red",alert("Введите сообщение на русском")))})),e.querySelectorAll("input").forEach((e=>{e.addEventListener("blur",(e=>{if("email"===e.target.type){const t=/[^a-zA-Z\d\-\.\_\!\~\*\'\@]/g;e.target.value=e.target.value.replace(t,"")}if("tel"===e.target.type){const t=/[^\d\(\-\)]+$/g;e.target.value=e.target.value.replace(t,"")}if("text"===e.target.type){const t=/[^а-яА-Я\s\-]/g,o=/^([а-яА-ЯёЁ]+\s)*[а-яА-ЯёЁ]*$/g;e.target.value=e.target.value.replace(t,""),""===e.target.value?console.log(e.target.value):(e.target.value=(e=>{let t=/^[\s\-]+|[\s\-]+$/;return e=e.replace(t,""),t=/\s{2,}/g,e.replace(t," ")})(e.target.value),e.target.value=e.target.value.replace(o,(e=>{const t=e.toLowerCase();return e[0].toUpperCase()+t.slice(1)})))}}))}))})),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const l=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===l?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),document.querySelectorAll("menu ul a").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}))})),document.querySelector("main a").addEventListener("click",(e=>{e.preventDefault(),document.querySelector("#service-block").scrollIntoView({behavior:"smooth",block:"center",inline:"start"})})),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),l=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),c=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==l&&t.target!==r&&t.target!==a||(()=>{const t=+o.options[o.selectedIndex].value,n=l.value;let s,i=1,d=1;r.value>1&&(i+=+r.value/10),a.value&&a.value<5?d=2:a.value&&a.value<10&&(d=1.5),s=o.value&&l.value?e*t*n*i*d:0,c.textContent=s})()}))})(100),(e=>{let t="slide-active",o="dot-active";if(e.hasOwnProperty("slideActive")&&(t=e.slideActive),e.hasOwnProperty("dotActive")&&(o=e.dotActive),e.hasOwnProperty("slider")&&!document.querySelector(`.${e.slider}`))return void console.log("Неверный класс слайдера");if(e.hasOwnProperty("items")&&0===document.querySelectorAll(`.${e.items}`).length)return void console.log("Неверный класс элементов");const l=document.querySelector(`.${e.slider}`),r=document.querySelectorAll(`.${e.items}`);let a,c=[],n=0;for(let e=0;e<r.length;e++){const t=document.createElement("li");t.classList.add("dot"),0===e&&t.classList.add(o),document.querySelector(".portfolio-dots").append(t),c.push(t)}const s=(e,t,o)=>{e[t].classList.remove(o)},i=(e,t,o)=>{e[t].classList.add(o)},d=()=>{s(r,n,t),s(c,n,o),n++,n>=r.length&&(n=0),i(r,n,t),i(c,n,o)},u=(e=1500)=>{a=setInterval(d,e)};l.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(s(r,n,t),s(c,n,o),e.target.matches("#arrow-right")?n++:e.target.matches("#arrow-left")?n--:e.target.classList.contains("dot")&&c.forEach(((t,o)=>{e.target===t&&(n=o)})),n>=r.length&&(n=0),n<0&&(n=r.length-1),i(r,n,t),i(c,n,o))})),l.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(a)}),!0),l.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&u(2e3)}),!0),u(2e3)})({slider:"portfolio-content",items:"portfolio-item",slideActive:"portfolio-item-active",dotActive:"dot-active"})})();