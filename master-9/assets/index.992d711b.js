var ee=Object.defineProperty,te=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var W=(t,e,n)=>e in t?ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,O=(t,e)=>{for(var n in e||(e={}))se.call(e,n)&&W(t,n,e[n]);if(P)for(var n of P(e))ae.call(e,n)&&W(t,n,e[n]);return t},V=(t,e)=>te(t,ne(e));const ie=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};ie();var re="./assets/speen.d7e67bf9.svg";const oe="https://tgproxy.ovo.ovh/wiki";async function ce(t){const n=`/api.php?action=parse&page=${encodeURIComponent(t)}&prop=text&format=json`;return(await(await fetch(oe+n)).json()).parse.text["*"]}function A(){return new Promise(t=>{requestAnimationFrame(()=>t())})}function le(t){return new Promise(e=>{setTimeout(()=>e(),t)})}const I=[];function T(t){I.push(...t)}function de(){const t=document.createElement("ul"),e=document.createElement("div");let n=0,a=[],s=!1;const i=c=>{s&&document.querySelector(".page.active").dataset.tab!==c.page&&H.instance.setActive(c.page),c.element.scrollIntoView({block:c.alignment,inline:"nearest",behavior:"auto"}),document.querySelectorAll(".bgus_fz_selected").forEach(f=>f.classList.remove("bgus_fz_selected")),c.element.classList.add("bgus_fz_selected")},r=c=>{n=c,t.querySelectorAll(".selected").forEach(f=>f.classList.remove("selected")),t.children[c].classList.add("selected"),i(a[c])},o=async(c,f)=>{if(!c||c.length<1)return;let m=I;if(s=c[0]==="@",s?c=c.substr(1):m=I.filter(p=>p.page===f),c.length<1)return;const h=c.split("").map(p=>["\\","]","^"].includes(p)?`\\${p}`:p).join("])(.*?)(["),b=new RegExp(`^(.*?)([${h}])(.*?)$`,"i");a=m.map(p=>V(O({},p),{matches:(p.name.match(b)||[]).slice(1).reduce((u,g,v,y)=>(v<2?u.push([g]):y[v-1]===""?u[u.length-1].push(g):g!==""&&u.push([g]),u),[]).map(u=>u.join(""))})).filter(p=>p.matches.length>0).sort((p,u)=>{const g=p.id,v=p.matches,y=u.id,E=u.matches;if(v.length===1&&E.length!==1)return-1;if(v.length!==1&&E.length===1)return 1;const B=S=>!/[^a-zA-Z0-9]*$/.test(S),G=v.filter(B).length-E.filter(B).length;if(G!==0)return G;for(let S=0;S<Math.min(v.length,E.length)-1;S+=2){const D=v[S].length-E[S].length;if(D!==0)return D}const R=v.length-E.length;return R!==0?R:g-y}),await A(),t.innerHTML="",a.forEach(p=>{const u=document.createElement("li");if(p.matches.forEach((g,v)=>{const y=document.createElement(v%2?"strong":"span");y.appendChild(document.createTextNode(g)),u.appendChild(y)}),s){const g=document.createElement("span");g.className="source",g.appendChild(document.createTextNode(p.page.replace(/_/g," "))),u.appendChild(g)}u.addEventListener("click",()=>{i(p),e.classList.add("bgus_hidden")}),t.appendChild(u)}),a.length>0&&r(0)},l=document.createElement("input");let d="";return l.addEventListener("keyup",c=>{switch(c.code){case"Escape":e.classList.add("bgus_hidden");return;case"Enter":a.length>0&&i(a[n]),e.classList.add("bgus_hidden");return;case"ArrowDown":n<a.length-1&&r(n+1);return;case"ArrowUp":n>0&&r(n-1);return;default:if(l.value!==d){const f=document.querySelector(".page.active");o(l.value,f.dataset.tab),d=l.value}}}),document.body.addEventListener("keyup",c=>{c.code==="KeyS"&&l.focus()}),document.body.addEventListener("keydown",c=>{if(c.shiftKey)switch(c.code){case"KeyS":{e.classList.remove("bgus_hidden"),l.value="";break}}}),e.id="bgus_fz_searchbox",e.classList.add("bgus_hidden"),e.appendChild(l),e.appendChild(t),e}function N(t,e){let n=t.parentElement;for(;n!=null&&!e(n);)n=n.parentElement;return n}function _(t){const[e,...n]=Array.from(t.querySelectorAll("tr")),a=Array.from(e.querySelectorAll("th")).map(s=>s.textContent.trim());return n.map(s=>{const i={};return s.querySelectorAll("td,th").forEach((r,o)=>{i[a[o]]=r}),i})}function k(t,e,n){const a=document.createElement("table");if(e.length<1)return a;const s=document.createElement("tr");return t.forEach(i=>{const r=document.createElement("th");r.appendChild(document.createTextNode(i)),s.appendChild(r)}),a.appendChild(s),e.forEach(i=>{const r=document.createElement("tr");t.forEach(o=>{let l=null;i[o].tagName==="TD"||i[o].tagName==="TH"?l=i[o]:(l=document.createElement("td"),l.appendChild(i[o])),r.appendChild(l)}),n&&n(i,r),a.appendChild(r)}),a}function ue(t){t.querySelectorAll("table.wikitable > tbody > tr:not(:first-child) > td:nth-child(2), .tooltiptext").forEach(e=>{const n=e.cloneNode();Array.from(e.childNodes).forEach(a=>{a instanceof HTMLParagraphElement?n.append(...a.childNodes):n.append(a)}),e.parentNode.replaceChild(n,e)}),Array.from(t.querySelectorAll("td")).filter(e=>e.textContent.indexOf(" part")>=0).forEach(e=>{e.innerHTML=e.innerHTML.replace(/((\d+)\s+(?:parts?|units?))(.*?(?:<\/a>|\n|$))/gi,(n,...[a,s,i])=>`<label class="bgus_part ${i.includes("</a>")?"bgus_part_tooltip":""}" data-amount="${s}"><input type="checkbox" class='bgus_checkbox bgus_hidden'/> <span class="bgus_part_label" data-src="${a}">${a}</span></label>${i.replace(/(<a .+?<\/a>)/gi,'<span class="bgus_nobreak bgus_nested_element">$1<span class="bgus_twistie"></span></span>')}`)}),t.querySelectorAll(".bgus_part").forEach(e=>{"parts"in e.parentElement.dataset?e.parentElement.dataset.parts=(parseInt(e.parentElement.dataset.parts,10)+parseInt(e.dataset.amount,10)).toString():e.parentElement.dataset.parts=e.dataset.amount}),t.querySelectorAll("div[data-name] .wikitable.sortable tr").forEach(e=>{const a=N(e,g=>"name"in g.dataset&&g.dataset.name!=="").dataset.name;if(e.querySelector("td")===null){e.querySelectorAll("th").forEach((v,y)=>{if(y<2){v.classList.add("table-head");return}v.parentElement.removeChild(v)});return}const s=Array.from(e.querySelectorAll("td")).slice(1);let i=null,r=null,o=null,l=null,d=null,c=null,f=null,m=null;switch(a){case"Components":[o,d]=s;break;case"Virology Recipes":[d]=s;break;case"Narcotics":[o,d,c,f,m]=s;break;case"Other Reagents":[o,d,c]=s;break;case"Explosive Strength":[i,d,r]=s;break;case"Mutation Toxins":[d,c]=s;break;default:[o,l,d,c,f,m]=s}const h=e.querySelector("th"),b=h.querySelector("p"),p=b==null?void 0:b.innerHTML;b&&h.removeChild(b);let u=`<div class="reagent-header">${h.innerHTML}</div>`;p&&(u+=`<p class="ph-data">${p}</p>`),l&&(u+=`<p class="treatment">${l.innerHTML}</p>`),c&&(u+=`<p class="metabolism">${c.innerHTML}</p>`),i&&(u+=`<p class="conditions">${i.innerHTML}</p>`),r&&(u+=`<p class="explosive">${r.innerHTML}</p>`),m&&m.innerHTML.trim()!=="N/A"&&(u+=`<p class="addiction">${m.innerHTML}</p>`),f&&f.innerHTML.trim()!=="N/A"&&(u+=`<p class="overdose">${f.innerHTML}</p>`),d&&(u+=`<p>${d.innerHTML}</p>`),o&&(u+=`<div class="ph">${o.innerHTML}</div>`),h.classList.add("reagent-ext"),h.innerHTML=u,d&&d.parentElement.removeChild(d),l&&l.parentElement.removeChild(l),c&&c.parentElement.removeChild(c),i&&i.parentElement.removeChild(i),r&&r.parentElement.removeChild(r),f&&f.parentElement.removeChild(f),m&&m.parentElement.removeChild(m),o&&o.parentElement.removeChild(o)})}function fe(t){t.querySelectorAll(".bgus_part_tooltip > .bgus_checkbox").forEach(s=>{const i=s.parentElement.nextElementSibling;s.addEventListener("click",()=>{i.querySelectorAll(".bgus_checkbox").forEach(r=>{r.checked=s.checked})})}),t.querySelectorAll(".bgus_nested_element").forEach(s=>{s.addEventListener("click",()=>{s.classList.toggle("bgus_collapsed")})});const e=(s,i)=>{s.forEach(r=>{const o=r.parentElement.dataset.amount,l=r.parentElement.parentElement.dataset.parts,d=Math.ceil(i*(o/l));r.innerHTML=`${d} ml`;let c=r.parentElement.nextElementSibling;for(;c;){if(c.classList.contains("tooltip")){const f=[];c.querySelector(".tooltiptext").childNodes.forEach(m=>{m.classList&&m.classList.contains("bgus_part")&&f.push(m.querySelector(".bgus_part_label"))}),e(f,d)}if(c.classList.contains("bgus_part"))break;c=c.nextElementSibling}})},n=Array.from(t.querySelectorAll("table.wikitable > tbody > tr:not(:first-child)"));T(Array.from(t.querySelectorAll("table.wikitable > tbody > tr:not(:first-child) th .reagent-header")).map((s,i)=>({page:"Guide_to_chemistry",name:s.textContent.trim().replace(/\n.+$/gm,"").replace("\u25AE",""),element:s.parentElement,alignment:"center",id:i}))),document.body.addEventListener("keydown",s=>{if(s.shiftKey)switch(s.code){case"KeyC":{t.classList.toggle("bgus_cbox"),t.querySelectorAll(".bgus_checkbox:checked").forEach(i=>{i.checked=!1});break}case"KeyB":{const i=parseInt(prompt("Write target ml (0 to reset)","90"),10);if(Number.isNaN(i)||i<=0){t.querySelectorAll(".bgus_part_label").forEach(r=>{r.innerHTML=r.dataset.src});return}e(t.querySelectorAll("td > .bgus_part > .bgus_part_label"),+i);break}}});const a=/<b>(.+):<\/b>(.+)/i;n.forEach(s=>{s.querySelectorAll(".ph").forEach(i=>{const r=[],o=document.createElement("table"),l=document.createElement("tr"),d=document.createElement("tr");o.appendChild(l),o.appendChild(d),i.innerHTML.split("<br>").forEach(c=>{if(c.trim()==="N/A")return;const f=a.exec(c);if(!f){r.push(c);return}const[m,h]=f.slice(1).map(u=>u.trim()),b=document.createElement("th");b.appendChild(document.createTextNode(m)),l.appendChild(b);const p=document.createElement("td");p.appendChild(document.createTextNode(h)),d.append(p)}),i.innerHTML="",l.children.length>0&&i.appendChild(o),i.innerHTML+=`<p>${r.join("<br>")}</p>`,i.classList.add("ph-ext")})})}function pe(t){const e=t.querySelector("#Simple_Diseases .wikitable"),n=_(e).map(o=>{const l=document.createElement("td");return l.innerHTML=`
    <div class="disease-name">${o["Disease Name"].innerHTML}</div>
    <p class="vector">${o["Vector Name"].innerHTML}</p>
    <p class="source">${o.Source.innerHTML}</p>
    <p class="spread">${o.Spread.innerHTML}</p>
    <p class="description">${o.Description.innerHTML}</p>
    `,{Disease:l,Cure:o.Cure}}),a=k(["Disease","Cure"],n);a.className="disease-ext wikitable",e.replaceWith(a);const s=t.querySelector("#Symptoms_Table .wikitable"),i=_(s).sort((o,l)=>parseInt(o.Level.textContent,10)-parseInt(l.Level.textContent,10)).map(o=>{const l=document.createElement("td");l.innerHTML=`
    <div class="disease-name">${o.Symptom.innerHTML}</div>
    <p class="level">${o.Level.innerHTML}</p>
    <p class="chemical">${o["Required Chemical"].innerHTML}</p>
    <p class="description">${o.Effect.innerHTML}</p>
    `;const d=document.createElement("td");d.innerHTML=`
    <table class="stats">
      <tr><th>Stealth</th><td>${o.Stealth.innerHTML}</td></tr>
      <tr><th>Resistance</th><td>${o.Resistance.innerHTML}</td></tr>
      <tr><th>Stage speed</th><td>${o["Stage speed"].innerHTML}</td></tr>
      <tr><th>Transmission</th><td>${o.Transmission.innerHTML}</td></tr>
    </table>
    `;const c=o["Threshold (hover mouse over for details)"];return c.innerHTML=`<ul class="thresholds"><li>${c.innerHTML.split(",").join("</li><li>")}</li></ul>`,{Symptom:l,Stats:d,Thresholds:c}}),r=k(["Symptom","Stats","Thresholds"],i);r.className="symptoms-ext wikitable",s.replaceWith(r)}function me(t){const e=Array.from(t.querySelectorAll(".disease-ext tr:not(:first-child)"));T(e.map((a,s)=>({page:"Infections",name:a.querySelector(".disease-name").textContent.trim(),element:a,alignment:"center",id:s})));const n=Array.from(t.querySelectorAll(".symptoms-ext > tbody > tr:not(:first-child)"));T(n.map((a,s)=>({page:"Infections",name:a.querySelector(".disease-name").textContent.trim(),element:a,alignment:"center",id:s})))}function he(t){[{selector:"#Butchering",title:"Food name",process:"How to acquire"},{selector:"#Knife_\\.26_Rolling_Pin",title:"Food name",process:"How to acquire"},{selector:"#Processor",title:"Processes",process:"Condiments"},{selector:"#All-In-One-Grinder",title:"Blends",process:"How to acquire"},{selector:"#Microwave_Oven",title:"Cooked food",process:"How to acquire"},{selector:"#Junk_Food",title:"Dispenses",process:"Description"},{selector:"#Other_food",title:"Item",process:"Description"}].forEach(({selector:d,title:c,process:f})=>{const m=t.querySelector(`${d} .wikitable`);if(!m)return;const h=_(m).map(p=>{const u=document.createElement("td");u.innerHTML=`<div class="food-block">
<div class="food-pic">${p.Picture.innerHTML}</div>
<div class="food-name">${p[c].innerHTML}</div>
</div>
`;const g={};return g[c]=u,g[f]=p[f],g}),b=k([c,f],h);b.className="food-base-ext wikitable",m.replaceWith(b)});const n=t.querySelector("#Custom_Recipes .wikitable"),a=_(n).map(d=>(d["Custom food"].innerHTML=`<div class="food-name">${d["Custom food"].innerHTML}</div>`,d)),s=k(Object.keys(a[0]),a);s.className="food-base-ext wikitable",n.replaceWith(s);const i=t.querySelector("#Recipe_Books .wikitable"),r=_(i).map(d=>{const c=document.createElement("td");return c.innerHTML=`<div class="food-pic">${d.Picture.innerHTML}</div>
<div class="food-name">${d.Book.innerHTML}</div>
<p class="unlocks">${d.Unlocks.innerHTML}</p>
<p class="notes">${d.Notes.innerHTML}</p>
`,{Book:c,"Where to get":d["Where to get"]}}),o=k(["Book","Where to get"],r);o.className="book-ext wikitable",i.replaceWith(o),["#Burgers","#Breads","#Cakes","#Egg-Based_Food","#Snowcones","#Lizard_Cuisine","#Seafood","#Mexican","#Savory","#Waffles","#Pies","#Pizzas","#Salads","#Sandwiches","#Soups_\\.26_Stews","#Spaghettis","#Icecream_Vat"].forEach(d=>{const c=t.querySelector(`${d} .wikitable`);if(!c)return;const f=_(c).map(h=>{const b=document.createElement("td");b.innerHTML=`
<div class="food-pic">${h.Picture.innerHTML}</div>
<div class="food-name">${h.Recipe.innerHTML}</div>
${"Nutritional Value"in h?`<p class="nutrition">${h["Nutritional Value"].innerHTML}</p>`:""}
${"Notes"in h?`<p class="notes">${h.Notes.innerHTML}</p>`:""}
`;const p=h.Ingredients.innerHTML.split(/,|\+/gi).map(u=>`<p>${u.trim()}</p>`);return h.Ingredients.innerHTML=p.join(""),{Drink:b,Ingredients:h.Ingredients}}),m=k(["Drink","Ingredients"],f);m.className="recipe-ext wikitable",c.replaceWith(m)})}function ge(t){const e=Array.from(t.querySelectorAll(".drink-ext tr:not(:first-child), .food-base-ext tr:not(:first-child), .food-ext tr:not(:first-child)"));T(e.map((n,a)=>({page:"Guide_to_food",name:n.querySelector(".food-name").textContent.trim(),element:n,alignment:"center",id:a})))}function be(t){["#Basic_Drink_Ingredients","#Mixed_Drinks"].forEach(n=>{const a=t.querySelector(`${n} .wikitable`),s=_(a).map(r=>{const o=document.createElement("td");o.innerHTML=`
<div class="food-pic">${r.Picture.innerHTML}</div>
<div class="food-name">${r.Cocktail.innerHTML}</div>
<p class="strength">${r.Strength.innerHTML}</p>
<p class="description">${r["Drink Description"].innerHTML}</p>
<p class="notes">${r.Notes.innerHTML}</p>
`;const l=r.Ingredients.innerHTML.split(/,|\+/gi).map(d=>`<p>${d.trim()}</p>`);return r.Ingredients.innerHTML=l.join(""),{Drink:o,Ingredients:r.Ingredients}}),i=k(["Drink","Ingredients"],s);i.className="drink-ext wikitable",a.replaceWith(i)})}function ve(t){const e=Array.from(t.querySelectorAll(".drink-ext tr:not(:first-child), .food-base-ext tr:not(:first-child), .food-ext tr:not(:first-child)"));T(e.map((n,a)=>({page:"Guide_to_drinks",name:n.querySelector(".food-name").textContent.trim(),element:n,alignment:"center",id:a})))}function C(t,e){const n=Array.from(t.querySelectorAll(".mw-headline-cont[id][data-name]"));T(n.map((a,s)=>({id:s,page:e,name:a.dataset.name.trim(),element:a,alignment:"start"})))}const j={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};var w=(t=>(t[t.RGB=0]="RGB",t[t.HEX=1]="HEX",t))(w||{});function X({h:t,s:e,v:n}){const a=Math.floor(t*6),s=t*6-a,i=n*(1-e),r=n*(1-s*e),o=n*(1-(1-s)*e);switch(a%6){case 0:return{r:n,g:o,b:i};case 1:return{r,g:n,b:i};case 2:return{r:i,g:n,b:o};case 3:return{r:i,g:r,b:n};case 4:return{r:o,g:i,b:n};case 5:return{r:n,g:i,b:r};default:throw new Error("unreacheable")}}function J({r:t,g:e,b:n}){const a=Math.max(t,e,n),s=Math.min(t,e,n),i=a,r=a-s,o=a===0?0:r/a;let l;if(a===s)l=0;else{switch(a){case t:l=(e-n)/r+(e<n?6:0);break;case e:l=(n-t)/r+2;break;case n:l=(t-e)/r+4;break;default:throw new Error("unreacheable")}l/=6}return{h:l,s:o,v:i}}function ye(t){if(j[t])return M(j[t]);const e=document.createElement("div");e.style.color=t,document.body.appendChild(e);const a=window.getComputedStyle(e).getPropertyValue("color");return document.body.removeChild(e),M(a)}function M(t){if(t[0]==="#"){const e=(t.length-1)/3,n=[17,1,.062272][e-1];return{r:Math.round(parseInt(t.substr(1,e),16)*n)/256,g:Math.round(parseInt(t.substr(1+e,e),16)*n)/256,b:Math.round(parseInt(t.substr(1+2*e,e),16)*n)/256}}if(t.startsWith("rgb")){const e=t.split("(")[1].split(")")[0].split(",").map(n=>parseInt(n,10)).map(Math.round);return{r:e[0]/256,g:e[1]/256,b:e[2]/256}}return ye(t)}function Z(t,e){const n=Math.round(t.r*255),a=Math.round(t.g*255),s=Math.round(t.b*255);switch(e){case 0:return`rgb(${n}, ${a}, ${s})`;case 1:{const i=`00${n.toString(16)}`.slice(-2),r=`00${a.toString(16)}`.slice(-2),o=`00${s.toString(16)}`.slice(-2);return`#${i}${r}${o}`}default:return"#000"}}function $(t,e){const n=M(t),a=J(n);a.s<.15?(a.h=.6,a.s=.5,a.v=Math.max(.2,1-a.v)):a.v>.5&&(a.v=.4,a.s>.2&&(a.s=Math.min(1,a.s+.2)));const s=X(a);return Z(s,e)}function _e(t,e){const n=M(t),a=J(n);a.v<.5&&(a.v=.8),a.s>.7&&(a.s=Math.min(1,a.s-.3),a.v=1),Math.abs(a.h-.666)<.1&&(a.h-=.13,a.v=Math.min(1,a.v+.1));const s=X(a);return Z(s,e)}function ke(t){return t==="H1"||t==="H2"||t==="H3"}function Ee(t,e){const n=document.createElement("h1");n.className="pageheader",n.appendChild(document.createTextNode(e.replace(/_/g," "))),t.insertBefore(n,t.firstChild),t.querySelectorAll("img").forEach(s=>s.setAttribute("loading","lazy")),t.querySelectorAll(".mw-editsection").forEach(s=>{s.parentElement.removeChild(s)}),t.querySelectorAll("*[bgcolor]").forEach(s=>{let i=s.getAttribute("bgcolor");i.length===6&&!Number.isNaN(parseInt(i,16))&&(i=`#${i}`),s.setAttribute("bgcolor",$(i,w.HEX).slice(1))}),t.querySelectorAll("*[style]").forEach(s=>{s.style.backgroundColor!==""&&(s.style.backgroundColor=$(s.style.backgroundColor,w.RGB)),s.style.background!==""&&(s.style.backgroundColor=$(s.style.background,w.RGB))}),t.querySelectorAll("*[color]").forEach(s=>{let i=s.getAttribute("color");i.length===6&&!Number.isNaN(parseInt(i,16))&&(i=`#${i}`),s.setAttribute("color",_e(i,w.HEX).slice(1))}),t.querySelectorAll("table[width]").forEach(s=>{s.setAttribute("width","100%")}),t.querySelectorAll("table[style]").forEach(s=>{s.style.width!==""&&(s.style.width="100%")}),t.querySelectorAll("table .floatright > a > img").forEach(s=>{const i=N(s,o=>o instanceof HTMLTableRowElement),r=document.createElement("td");i.appendChild(r)});const a=t.querySelector("#toc");if(a){const s=a.querySelector("h2");a.parentNode.insertBefore(s,a);const i=a.querySelector("#toctitle");i!=null&&a.removeChild(i)}t.querySelectorAll("h1,h2,h3").forEach(s=>{const i=s.parentNode,r=document.createElement("div");for(i.insertBefore(r,s);s.nextSibling&&!ke(s.nextSibling.nodeName);){const o=s.nextSibling;i.removeChild(o),r.appendChild(o)}s.parentNode.removeChild(s),r.insertBefore(s,r.firstChild),r.className="mw-headline-cont"}),t.querySelectorAll("h1 .mw-headline, h2 .mw-headline, h3 .mw-headline").forEach(s=>{const i=N(s,r=>r.classList.contains("mw-headline-cont"));i&&i.querySelectorAll("h1 .mw-headline, h2 .mw-headline, h3 .mw-headline").length===1?(i.id=s.id,s.id+="-span",i.dataset.name=s.textContent):(s.dataset.name=s.textContent,s.classList.add("mw-headline-cont"))})}function Se(t){t.querySelectorAll("div.hidden").forEach(e=>{e.style.display="block",e.style.opacity="1"}),t.querySelector(".action_buttons").style.display="none",t.classList.remove("center")}function Le(t){const e=t.querySelector(".action_buttons");t.querySelectorAll("div[data-name]").forEach(n=>{const{name:a}=n.dataset,s=document.createElement("button");s.className="pretty-button",s.appendChild(document.createTextNode(a)),s.addEventListener("click",async()=>{Se(t),await A(),n.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})}),e.appendChild(s)})}const L={Infections:"fcebeda2fddb46d924f4538cd9c0daeb55aa4c9b",Guide_to_food_and_drinks:"131e010df66ed689d31df53c3ca17ad16635a827",Guide_to_chemistry:"5074d6180fc8b283bac00b99c6aa2325b797da6b",$DEFAULT:"5074d6180fc8b283bac00b99c6aa2325b797da6b"},Te=440;function Ce(t,e){try{Ee(t,e)}catch{console.error(`Error processing page: ${e}`)}try{switch(e){case"Guide_to_chemistry":ue(t);break;case"Infections":pe(t);break;case"Guide_to_food":he(t);break;case"Guide_to_drinks":be(t);break;default:}}catch{console.error(`Error processing page: ${e} (specific enhancements)`)}}function we(t,e){document.querySelectorAll("img[width]").forEach(n=>{const a=n.getAttribute("width");if(a.includes("%"))return;parseInt(a,10)>Te&&(n.setAttribute("width","100%"),n.removeAttribute("height"))})}function Q(t,e){switch(e){case"Guide_to_chemistry":C(t,e),fe(t);break;case"Infections":C(t,e),me(t);break;case"$Welcome":Le(t);break;case"Guide_to_food":C(t,e),ge(t);break;case"Guide_to_drinks":C(t,e),ve(t);break;default:C(t,e);break}}class xe{constructor(e="tg-cache",n="keyval"){this.storeName=n,this.dbp=new Promise((a,s)=>{const i=indexedDB.open(e,1);i.onerror=()=>s(i.error),i.onsuccess=()=>a(i.result),i.onupgradeneeded=()=>{i.result.createObjectStore(n)}})}withIDBStore(e,n){return this.dbp.then(a=>new Promise((s,i)=>{const r=a.transaction(this.storeName,e);r.oncomplete=()=>s(),r.onabort=()=>i(r.error),r.onerror=()=>i(r.error),n(r.objectStore(this.storeName))}))}}let q;function x(){return q||(q=new xe),q}function Me(t,e=x()){let n;return e.withIDBStore("readonly",a=>{n=a.get(t)}).then(()=>n.result)}function Ae(t,e,n,a=x()){return a.withIDBStore("readwrite",s=>{s.put({version:n,value:e},t)})}function He(t,e=x()){return e.withIDBStore("readwrite",n=>{n.delete(t)})}function $e(t=x()){return t.withIDBStore("readwrite",e=>{e.clear()})}function qe(t=x()){const e=[];return t.withIDBStore("readonly",n=>{(n.openKeyCursor||n.openCursor).call(n).onsuccess=function(){!this.result||(e.push(this.result.key),this.result.continue())}}).then(()=>e)}var z={get:Me,set:Ae,keys:qe,del:He,clear:$e},Y="./assets/unknown.d27620e1.svg";function F(t){const e=document.createElement("div");e.className="speen";const n=document.createElement("img");n.src=re,e.appendChild(n),t.appendChild(e)}async function Ie(t,e,n){let a=null;const s=`page:${t}`,i=document.createElement("div");if(i.className="wrapper",n)try{const r=await z.get(s);if(r){const o=t in L?L[t]:L.$DEFAULT;r.version===o?(console.log(`${t}: found cached entry`),a=r.value):console.log(`${t}: found outdated cache entry`)}}catch(r){console.log(`${t}: failed to retrieve cache entry:`,r)}if(a)i.innerHTML=a,we();else{console.log(`${t}: fetching`);let r=0;for(;r<5;)try{a=await ce(t);break}catch{r+=1,await le(1e3)}a=a.replace(/"\/wiki/gi,'"//tgproxy.ovo.ovh/wiki'),await A(),i.innerHTML=a,console.log(`${t}: processing`),Ce(i,t);const o=t in L?L[t]:L.$DEFAULT;z.set(s,i.innerHTML,o).then(()=>{console.log(`${t}: saved to cache`)})}return e.innerHTML=i.outerHTML,Q(e,t),e.classList.remove("waiting"),e}class H{constructor(e,n,a){this.sections={},this.sectionMap={},this.loading=!1,this.cacheEnabled=!0,this.sectionListContainer=e,this.tabListContainer=n,this.tabContentContainer=a,H.instance=this}setLoading(e){if(e)document.getElementById("app").classList.add("waiting"),F(this.tabContentContainer),this.tabContentContainer.querySelector(".speen").appendChild(document.createTextNode("Loading wiki pages"));else{document.getElementById("app").classList.remove("waiting");const n=this.tabContentContainer.querySelector(".speen");this.tabContentContainer.removeChild(n)}}createSection(e){const n=document.createElement("div");n.className="section",n.dataset.section=e,n.appendChild(document.createTextNode(e)),n.addEventListener("click",()=>{n.classList.contains("active")||this.showSection(e)}),this.sectionListContainer.appendChild(n),this.sections[e]={name:e,element:n,tabs:{}}}showSection(e){const n=this.sectionListContainer.querySelector(".active");n&&(n.classList.remove("active"),this.tabListContainer.querySelectorAll(`div[data-section=${n.dataset.section}]`).forEach(a=>a.classList.add("hidden"))),this.sections[e].element.classList.add("active"),this.tabListContainer.querySelectorAll(`div[data-section=${e}]`).forEach(a=>a.classList.remove("hidden"))}async openTab(e,n,a){const{icon:s,active:i,text:r}=a,o=document.createElement("div");o.className="tab",o.dataset.section=e,o.dataset.tab=n,o.addEventListener("click",()=>{o.classList.contains("active")||this.setActive(n)});const l=document.createElement("img");l.src=s||Y,o.title=n.replace(/_/gi," "),o.appendChild(l);const d=r||n.substr(n.lastIndexOf("_")+1,4);o.appendChild(document.createTextNode(d)),this.tabListContainer.appendChild(o);const c=document.createElement("div");c.className="page waiting",c.dataset.tab=n,F(c),this.tabContentContainer.appendChild(c),this.sections[e].tabs[n]={tabListItem:o,tabContentItem:c},this.sectionMap[n]=e,this.sections[e].element.classList.contains("active")||o.classList.add("hidden");const f=await Ie(n,c,this.cacheEnabled);f!==c&&(this.sections[e].tabs[n].tabContentItem=f),i&&this.setActive(n)}setActive(e){const n=this.sectionMap[e];if(!(n in this.sections))throw new Error("section not found");if(!(e in this.sections[n].tabs))throw new Error("tab not found");this.tabListContainer.querySelectorAll(".active").forEach(r=>r.classList.remove("active")),this.tabContentContainer.querySelectorAll(".active").forEach(r=>r.classList.remove("active")),this.sections[n].element.classList.contains("active")||this.showSection(n);const{tabListItem:s,tabContentItem:i}=this.sections[n].tabs[e];this.sections[n].element.classList.add("active"),s.classList.add("active"),i.classList.add("active")}}var Ne="./assets/chemistry.7abf1a2a.svg",Be="./assets/medicine.9d3f841c.svg",Ge="./assets/plumbing.5b589422.svg",Re="./assets/grenade.daa08c76.svg",De="./assets/genetics.98c194dd.svg",Pe="./assets/virus.872bd377.svg",We="./assets/surgery.1a9a1a8a.svg",Oe="./assets/trauma.5439c4dd.svg",Ve="./assets/wound.81b70232.svg",je="./assets/ghetto.d89b4222.svg",ze="./assets/construction.19c2565f.svg",Fe="./assets/machines.e34c096e.svg",Ke="./assets/power.37f2b65c.svg",Ue="./assets/solar.2cfa47c6.svg",Xe="./assets/supermatter.9f86c41a.svg",Je="./assets/shield.02b9c846.svg",Ze="./assets/turbine.f52e7639.svg",Qe="./assets/atmos.b37baa66.svg",Ye="./assets/tcomm.7c30df6c.svg",et="./assets/rnd.1ece438e.svg",tt="./assets/toxins.f91862ec.svg",nt="./assets/xeno.754aabd2.svg",st="./assets/nanites.d404c56f.svg",at="./assets/rules.5c930ea0.svg",it="./assets/aimod.95716c64.svg",rt="./assets/tips.6b677a0b.svg",ot="./assets/critter.1500f570.svg",ct="./assets/races.91c190bf.svg",K="./assets/food.e92bc0f6.svg",lt="./assets/hydro.04d03df3.svg",dt="./assets/song.74f6973d.svg",ut="./assets/crate.3056f203.svg",ft="./assets/space.df0d5856.svg",pt="./assets/auxbase.f179bd7c.svg",mt="./assets/robo.5d91dc4c.svg",ht="./assets/security.f6d2d4b2.svg",gt="./assets/law.2699c5e3.svg",bt="./assets/sop.44ec543e.svg",vt="./assets/trial.1b0d35d8.svg",yt="./assets/traitor.216b4872.svg",_t="./assets/hacking.876c034b.svg",kt="./assets/weapons.4f0c9e0f.svg",Et="./assets/uplink.67f2dd98.svg",St="./assets/rev.7bb075cb.svg",Lt="./assets/cult.401ec22e.svg",Tt="./assets/nuke.9c73049c.svg",Ct="./assets/malf.0cf85ba9.svg",wt="./assets/combat.78ea4d23.svg",xt="./assets/access.b8ff5a08.svg",Mt="./assets/xmorph.cbeceba5.svg",At="./assets/abduction.afb0b54f.svg",Ht="./assets/mafia.5836a9ea.svg";const U=[{name:"Medical",tabs:[{page:"Guide_to_medicine",icon:Be},{page:"Guide_to_chemistry",icon:Ne},{page:"Guide_to_plumbing",icon:Ge},{page:"Grenade",text:"nade",icon:Re},{page:"Infections",text:"virus",icon:Pe},{page:"Surgery",icon:We},{page:"Guide_to_Traumas",text:"trauma",icon:Oe},{page:"Guide_to_Wounds",text:"wound",icon:Ve},{page:"Guide_to_Ghetto_Chemistry",text:"ghetto",icon:je}]},{name:"Engineering",tabs:[{page:"Guide_to_construction",icon:ze},{page:"Machines",icon:Fe},{page:"Guide_to_power",text:"power",icon:Ke},{page:"Solars",text:"solar",icon:Ue},{page:"Guide_to_the_Supermatter",text:"smatt",icon:Xe},{page:"Singularity_and_Tesla_engines",text:"sing/tesl",icon:Je},{page:"Gas_turbine",text:"GAST",icon:Ze},{page:"Guide_to_Atmospherics",text:"atmos",icon:Qe},{page:"Guide_to_Telecommunications",icon:Ye,text:"tcomm"}]},{name:"Science",tabs:[{page:"Guide_to_Research_and_Development",text:"R&D",icon:et},{page:"Guide_to_robotics",icon:mt},{page:"Guide_to_toxins",text:"toxin",icon:tt},{page:"Guide_to_xenobiology",icon:nt},{page:"Guide_to_genetics",icon:De},{page:"Guide_to_Nanites",text:"nanite",icon:st}]},{name:"Security",tabs:[{page:"Guide_to_security",text:"security",icon:ht},{page:"Space_Law",text:"space law",icon:gt},{page:"Standard_Operating_Procedure",text:"S.O.P.",icon:bt},{page:"Guide_to_trials",text:"trials",icon:vt}]},{name:"Antag",tabs:[{page:"Traitor",icon:yt},{page:"Makeshift_weapons",icon:kt},{page:"Hacking",icon:_t},{page:"Guide_to_Combat",icon:wt},{page:"Syndicate_Items",text:"uplk",icon:Et},{page:"Illicit_Access",icon:xt},{page:"Revolutionary",text:"rev",icon:St},{page:"Blood_Cult",text:"cult",icon:Lt},{page:"Nuclear_Operative",text:"nuke",icon:Tt},{page:"Guide_to_malfunction",icon:Ct},{page:"Xenos",text:"xmor",icon:Mt},{page:"Abductor",icon:At},{page:"Families",icon:Ht},{page:"Heretic",icon:null}]},{name:"Other",tabs:[{page:"Rules",text:"rules",icon:at},{page:"AI_modules",text:"aimo",icon:it},{page:"Guide_to_Awesome_Miscellaneous_Stuff",text:"misc",icon:rt},{page:"Critters",icon:ot},{page:"Guide_to_races",icon:ct},{page:"Guide_to_food",text:"food",icon:K},{page:"Guide_to_drinks",text:"drnk",icon:K},{page:"Guide_to_hydroponics",icon:lt},{page:"Songs",icon:dt},{page:"Supply_crates",icon:ut},{page:"Auxiliary_Base_Construction_Area",text:"aux",icon:pt},{page:"Guide_to_Space_Exploration",icon:ft}]}];async function $t(){const t=document.getElementById("section-list"),e=document.getElementById("tab-list"),n=document.getElementById("tabs"),a=new H(t,e,n);a.setLoading(!0),await A();const s=document.querySelector("#tabs > .speen"),i=document.createElement("div");i.className="loading-icons";let r=[];U.forEach(l=>l.tabs.forEach(d=>{const c=document.createElement("img");c.dataset.tab=d.page,c.src=d.icon||Y,c.title=d.page.replace(/_/gi," "),i.appendChild(c)})),s.appendChild(i),r=U.flatMap(l=>(a.createSection(l.name),l.tabs.map(async d=>{await a.openTab(l.name,d.page,{icon:d.icon,text:d.text}),i.removeChild(i.querySelector(`img[data-tab=${d.page}]`))})));const o=document.getElementById("Welcome");Q(o,"$Welcome"),Promise.all(r).then(()=>{a.setLoading(!1),a.showSection("Medical"),o.classList.add("active")})}if("serviceWorker"in navigator){const t={}.VITE_SUBDIR?`${{}.VITE_SUBDIR}/sw.js`:"sw.js";navigator.serviceWorker.register(t).then(e=>{console.log("Registration successful, scope is:",e.scope)}).catch(e=>{console.log("Service worker registration failed, error:",e)})}$t();document.body.appendChild(de());document.getElementById("tgh-version").appendChild(document.createTextNode({}.VITE_APP_REVISION||"unknown"));