import{S as d}from"./vendor-Bw0cGICD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const o=document.querySelector(".gallery"),n=document.querySelector(".loader"),u=new d(".gallery a",{captionsData:"alt",captionDelay:250});function f(l){const s=l.map(({webformatURL:i,largeImageURL:r,tags:e,likes:t,views:a,comments:c,downloads:p})=>`
				<li class="gallery-item">
					<a class="gallery-link" href="${r}">
						<img
							class="gallery-image"
							src="${i}"
							alt="${e}"
						/>
					</a>
					<div class="image-details">
						<p class="image-stat"><span class="image-stat-title">Likes</span>${t}</p>
						<p class="image-stat"><span class="image-stat-title">Views</span>${a}</p>
						<p class="image-stat"><span class="image-stat-title">Comments</span>${c}</p>
						<p class="image-stat"><span class="image-stat-title">Downloads</span>${p}</p>
					</div>
				</li>
			`).join("");o.insertAdjacentHTML("beforeend",s),u.refresh()}function g(){o.innerHTML=""}function y(){n.classList.add("is-visible")}function h(){n.classList.remove("is-visible")}export{f as a,g as c,h,y as s};
//# sourceMappingURL=render-functions-z8gRvZkf.js.map
