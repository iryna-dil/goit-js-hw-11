import{S as m}from"./vendor-BrddEoy-.js";const a=document.querySelector(".gallery"),s=document.querySelector(".loader"),g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function y(e){const t=e.map(({webformatURL:l,largeImageURL:i,tags:n,likes:c,views:o,comments:r,downloads:p})=>`
				<li class="gallery-item">
					<a class="gallery-link" href="${i}">
						<img
							class="gallery-image"
							src="${l}"
							alt="${n}"
						/>
					</a>
					<div class="image-details">
						<p class="image-stat"><span class="image-stat-title">Likes</span>${c}</p>
						<p class="image-stat"><span class="image-stat-title">Views</span>${o}</p>
						<p class="image-stat"><span class="image-stat-title">Comments</span>${r}</p>
						<p class="image-stat"><span class="image-stat-title">Downloads</span>${p}</p>
					</div>
				</li>
			`).join("");a.insertAdjacentHTML("beforeend",t),g.refresh()}function u(){a.innerHTML=""}function f(){s.classList.add("is-visible")}function L(){s.classList.remove("is-visible")}export{y as a,u as c,L as h,f as s};
//# sourceMappingURL=render-functions-DZHMk0iM.js.map
