import { Y as ensure_array_like } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
const munkaimTomb = [
  {
    "title": "1. órai anyag",
    "date": "",
    "desc": "Első óránk, GitHub profilok és weboldalak létrehozása. JavaScript ismétlés",
    "link": "",
    "depolyed": "true"
  },
  {
    "title": "2. órai anyag",
    "date": "",
    "desc": "Markdown megismerése ,ismerkedés a Visual Studio Code-al (témák,pluginok), utf-8 szimbólum kódok (dex,hex) HTMl Inputok megismerése, használata JavaScripttel  ",
    "link": "",
    "depolyed": "true"
  },
  {
    "title": "4.Óra",
    "date": "2024.09.12",
    "desc": "A mai órán nodeJst és Sveltet tanultunk",
    "link": "",
    "depolyed": "true"
  },
  {
    "title": "Számoló gép",
    "date": "2024.09.18 ",
    "desc": "Számoló gép készítése JavaScripttel",
    "link": "",
    "depolyed": "true"
  },
  {
    "title": "Akasztó fa játék",
    "date": "2024.10.09",
    "desc": "Akasztó fa játék",
    "link": "",
    "depolyed": "true"
  },
  {
    "title": "Drag and drop játék",
    "date": "2024.11.07",
    "desc": "Drag and drop játék",
    "link": "https://lorinc-vagi.github.io/CountryDragAndDrop/",
    "depolyed": "true"
  },
  {
    "title": "Quake Fans United",
    "date": "2024.11.25",
    "desc": "Bootstap + AOS weboldal",
    "link": "https://lorinc-vagi.github.io/QuakeFansUnited/",
    "depolyed": "true"
  },
  {
    "title": "GamerZ Essentials",
    "date": "2024.11.27",
    "desc": "Multipage Bootsrapp 5 + AOS weboldal",
    "link": "https://lorinc-vagi.github.io/MultiPageHtml-css-bootsrap5_Hazi2024.11.29/index.html#",
    "depolyed": "true"
  },
  {
    "title": "DEBUG",
    "date": "2024.11.27",
    "desc": "Multipage Bootsrapp 5 + AOS weboldal",
    "link": "https://lorinc-vagi.github.io/MultiPageHtml-css-bootsrap5_Hazi2024.11.29/index.html#",
    "depolyed": "false"
  }
];
function _page($$payload) {
  const each_array = ensure_array_like(munkaimTomb);
  $$payload.out += `<h1>Munkáim</h1> <a class="agomb" href="javascript:history.back()">↩</a> <div class="table"><table><thead><tr><th style="text-decoration: underline;">Név</th><th style="text-decoration: underline;">Dátum</th><th style="text-decoration: underline;">Leírás</th><th style="text-decoration: underline;">link</th></tr></thead><tbody><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let munkak = each_array[$$index];
    if (munkak.depolyed == "true") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<tr><td>${escape_html(munkak.title)}</td><td>${escape_html(munkak.date)}</td><td style="text-align: left;">${escape_html(munkak.desc)}</td><td>`;
      if (munkak.link != "") {
        $$payload.out += "<!--[-->";
        $$payload.out += `<a${attr("href", munkak.link)}>Megnyitás</a>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></td></tr>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></tbody></table></div>`;
}
export {
  _page as default
};
