(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),s=document.getElementById("timer-seconds"),m=()=>{let e=(new Date("28 february 2023").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}};let r=setInterval((()=>{m().timeRemaining>0?(()=>{let e=m();n.textContent=e.hours<10?"0"+e.hours:e.hours,o.textContent=e.minutes<10?"0"+e.minutes:e.minutes,s.textContent=e.seconds<10?"0"+e.seconds:e.seconds,t.textContent=e.days<10?"0"+e.days:e.days,console.log("hi")})():clearInterval(r)}),1e3)})(),console.log("two.js")})();