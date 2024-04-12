import{i}from"./assets/vendor-8e8cd629.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function u(s,r){const n="https://pixabay.com/api/",o="43249627-6464a1b02c37cf8fbedd51288",e=new URLSearchParams({key:o,q:"dog+cat+tiger+lion",image_type:"photo",orientation:"horizontal",safesearch:!0});try{const t=await fetch(`${n}?${e}`);if(!t.ok)throw new Error("Failed to fetch images");return t.json()}catch{throw new Error("Failed to fetch images")}}function p(s){return s.hits.map(({webformatURL:n,largeImageURL:o,tags:e,likes:t,views:a,comments:l,downloads:d})=>`
        <li class="card">
            <div class="place-for-image">
                <a href="${o}">
                    <img src="${n}" alt="${e}" class="picture"/>
                </a>
            </div>
            <div class="info-text">
                <div class="description">
                    <span class="bold-text">Likes</span>
                    <span class="info-value">${t}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Views</span>
                    <span class="info-value">${a}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Comments</span>
                    <span class="info-value">${l}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Downloads</span>
                    <span class="info-value">${d}</span>
                </div>
            </div>
        </li>`).join("")}const m=document.querySelector(".main_form"),c=document.querySelector(".list_gallery"),f=document.querySelector(".loader");window.addEventListener("load",()=>{setTimeout(()=>{f.remove()},600)});m.addEventListener("submit",h);async function h(s){s.preventDefault(),c.innerHTML="",s.currentTarget.elements.inputElement.value,u().then(r=>{if(r.total==0)return i.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topCenter",timeout:"5000"}),0;c.insertAdjacentHTML("beforeend",p(r)),book.refresh(),s.currentTarget.elements.inputElement.value=""}).catch(r=>{i.show({title:"Ops.",titleColor:"white",message:r,messageColor:"white",color:"red",position:"topCenter",timeout:"5000"})})}
//# sourceMappingURL=commonHelpers.js.map
