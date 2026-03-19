import{a as f,S as p,i as a}from"./assets/vendor-D8kWkXeg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="55096474-b1fd7eaea0590dea563cfdba0",y="https://pixabay.com/api/";function h(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(y,{params:o}).then(e=>e.data).catch(e=>{throw console.error("Error:",e),e})}const d=document.querySelector(".gallery"),i=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <div class="info-item"><b>Likes</b><span>${e.likes}</span></div>
        <div class="info-item"><b>Views</b><span>${e.views}</span></div>
        <div class="info-item"><b>Comments</b><span>${e.comments}</span></div>
        <div class="info-item"><b>Downloads</b><span>${e.downloads}</span></div>
      </div>
    </li>`).join("");d.innerHTML=o,g.refresh()}function v(){d.innerHTML=""}function L(){i&&(i.style.display="block")}function u(){i&&(i.style.display="none")}const l=document.querySelector(".form");u();l.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(o===""){a.warning({message:"Будь ласка, введіть слово для пошуку!",position:"topRight"});return}v(),L(),h(o).then(e=>{if(e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(e.hits)}).catch(e=>{console.error(e),a.error({message:"Сталася помилка при завантаженні зображень. Спробуйте пізніше.",position:"topRight"})}).finally(()=>{u(),l.reset()})});
//# sourceMappingURL=index.js.map
