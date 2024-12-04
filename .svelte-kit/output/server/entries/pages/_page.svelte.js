import { Y as ensure_array_like } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
import { a as attr } from "../../chunks/attributes.js";
const munkaimTomb = [
  {
    "title": "Quake Fans United",
    "date": "2024-11-25",
    "desc": "Bootstap + AOS weboldal",
    "link": "https://lorinc-vagi.github.io/QuakeFansUnited/",
    "depolyed": "true"
  },
  {
    "title": "GamerZ Essentials",
    "date": "2024-11-27",
    "desc": "Multipage Bootsrapp 5 + AOS weboldal",
    "link": "https://lorinc-vagi.github.io/MultiPageHtml-css-bootsrap5_Hazi2024.11.29/index.html#",
    "depolyed": "true"
  }
];
function _page($$payload) {
  const each_array = ensure_array_like(munkaimTomb);
  $$payload.out += `<main><h1>Vági Lőrinc Portfoliója</h1> <div class="munkaim"><h2 style="padding-top: 0px; margin-top: 10px;">Kiemelt munkáim</h2> <div class="munkaimList"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let munka = each_array[$$index];
    $$payload.out += `<div class="munkak"><h2>${escape_html(munka.title)}</h2> <p>${escape_html(munka.date)}</p> <p>${escape_html(munka.desc)}</p> <a class="agomb"${attr("href", munka.link)}>Megnyitás</a></div>`;
  }
  $$payload.out += `<!--]--></div> <a class="agomb" href="/munkaim">Minden órai munka mutatása</a></div> <div class="hasznos"><h2>Hasznos dolgok webfejlesztéshez</h2></div></main>`;
}
export {
  _page as default
};
