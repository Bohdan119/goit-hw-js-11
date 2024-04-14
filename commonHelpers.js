import{S as m,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(r,o){const s="https://pixabay.com/api/",n=new URLSearchParams({key:"43249627-6464a1b02c37cf8fbedd51288",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${n}`).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).catch(e=>{throw new Error("Failed to fetch images")})}function d(r){return r.hits.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:c,downloads:u})=>`
        <li class="card">
            <div>
                <a href="${n}">
                    <img src="${s}" alt="${e}" class="picture"/>
                </a>
            </div>
            <ul class='descriptions'>
                <li class='descriptions_item'>
                    <span>Likes</span>
                    <span>${t}</span>
                </li>
                <li class='descriptions_item'>
                    <span>Views</span>
                    <span>${i}</span>
                </li>
                <li class='descriptions_item'>
                    <span>Comments</span>
                    <span>${c}</span>
                </li>
                <li class='descriptions_item'>
                    <span>Downloads</span>
                    <span>${u}</span>
                </li>
            </ul>
        </li>`).join("")}const f=new m(".list_gallery a"),h=document.querySelector(".main_form"),l=document.querySelector(".list_gallery"),y=document.querySelector(".loader");window.addEventListener("load",()=>{setTimeout(()=>{y.remove()},600)});h.addEventListener("submit",g);function g(r){r.preventDefault(),l.innerHTML="";let o=r.currentTarget.elements.inputElement.value;console.log(r.currentTarget.elements.inputElement.value),p(o).then(s=>{if(s.total==0)return a.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topCenter",timeout:"5000"}),0;l.insertAdjacentHTML("beforeend",d(s)),f.refresh(),r.currentTarget.elements.inputElement.value="",console.log(r.currentTarget.elements.inputElement.value)}).catch(s=>{a.show({title:"Ops.",titleColor:"white",message:s,messageColor:"white",color:"red",position:"topCenter",timeout:"5000"})})}
//# sourceMappingURL=commonHelpers.js.map
