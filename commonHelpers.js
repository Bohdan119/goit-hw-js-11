import{i as a}from"./assets/vendor-8e8cd629.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function u(s,r){const i="https://pixabay.com/api/",o="43249627-6464a1b02c37cf8fbedd51288",e=new URLSearchParams({key:o,q:"dog+cat+tiger+lion",image_type:"photo",orientation:"horizontal",safesearch:!0});try{const t=await fetch(`${i}?${e}`);if(!t.ok)throw new Error("Failed to fetch images");return t.json()}catch{throw new Error("Failed to fetch images")}}function d(s){return s.hits.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:n,comments:l,downloads:p})=>`
        <li class="card">
            <div>
                <a href="${o}">
                    <img src="${i}" alt="${e}" class="picture"/>
                </a>
            </div>
            <ul class='descriptions'>
                <li class='descriptions_item'>
                    <span>Likes</span>
                    <span>${t}</span>
                </li>
                <li class='descriptions_item'>
                    <span>Views</span>
                    <span>${n}</span>
                </li>
                <li class='descriptions_item'>
                    <span>Comments</span>
                    <span>${l}</span>
                </li>
                <li class='descriptions_item'>
                    <span>Downloads</span>
                    <span>${p}</span>
                </li>
            </ul>
        </li>`).join("")}const m=document.querySelector(".main_form"),c=document.querySelector(".list_gallery"),f=document.querySelector(".loader");window.addEventListener("load",()=>{setTimeout(()=>{f.remove()},600)});m.addEventListener("submit",h);async function h(s){s.preventDefault(),c.innerHTML="",s.currentTarget.elements.inputElement.value,u().then(r=>{if(r.total==0)return a.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topCenter",timeout:"5000"}),0;c.insertAdjacentHTML("beforeend",d(r)),book.refresh(),s.currentTarget.elements.inputElement.value=""}).catch(r=>{a.show({title:"Ops.",titleColor:"white",message:r,messageColor:"white",color:"red",position:"topCenter",timeout:"5000"})})}
//# sourceMappingURL=commonHelpers.js.map
