(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();document.querySelector("#app").innerHTML=`
  
<button class="show-modal">Show modal 1</button>
		<button class="show-modal">Show modal 2</button>
		<button class="show-modal">Show modal 3</button>
		<div class="modal hidden">
		<button class="close-modal">&times;</button>
		<h1>I'm a modal window 😍</h1>
		<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
		veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
		velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
		occaecat cupidatat non proident, sunt in culpa qui officia deserunt
		mollit anim id est laborum.
		</p>
    </div>
		<div class="overlay hidden"></div>
`;const s=document.querySelector(".modal"),r=document.querySelector(".overlay"),a=document.querySelector(".close-modal"),u=document.querySelectorAll(".show-modal"),d=function(){s.classList.add("hidden"),r.classList.add("hidden")},m=function(){s.classList.remove("hidden"),r.classList.remove("hidden")};u.forEach(t=>{t.addEventListener("click",m)});a.addEventListener("click",d);r.addEventListener("click",d);const p=t=>{console.log(t,t.key),t.key==="Escape"&&!s.classList.contains("hidden")&&d()};document.addEventListener("keydown",p);
