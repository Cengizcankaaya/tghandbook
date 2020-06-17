import { darken, ColorFmt, lighten } from "./darkmode";
import searchBox from "./search";

export default function userscript(root: HTMLElement, docname: string): void {
  root.querySelectorAll(".mw-editsection").forEach((editLink) => {
    editLink.parentElement.removeChild(editLink);
  });

  // Darken bgcolor
  root.querySelectorAll("*[bgcolor]").forEach((td) => {
    let bgcolor = td.getAttribute("bgcolor");
    // Shitty way to detect if it's hex or not
    // Basically, none of the css colors long 6 letters only use hex letters
    // THANK FUCKING GOD
    if (bgcolor.length === 6 && !Number.isNaN(parseInt(bgcolor, 16))) {
      bgcolor = `#${bgcolor}`;
    }
    td.setAttribute("bgcolor", darken(bgcolor, ColorFmt.HEX).slice(1));
  });
  root.querySelectorAll<HTMLElement>("*[style]").forEach((td) => {
    if (td.style.backgroundColor !== "") {
      td.style.backgroundColor = darken(td.style.backgroundColor, ColorFmt.RGB);
    }
    if (td.style.background !== "") {
      td.style.backgroundColor = darken(td.style.background, ColorFmt.RGB);
    }
  });

  // Lighten fgcolors
  root.querySelectorAll("*[color]").forEach((td) => {
    let color = td.getAttribute("color");
    if (color.length === 6 && !Number.isNaN(parseInt(color, 16))) {
      color = `#${color}`;
    }
    td.setAttribute("color", lighten(color, ColorFmt.HEX).slice(1));
  });

  // Remove fixed widths
  root.querySelectorAll("table[width]").forEach((td) => {
    td.setAttribute("width", "100%");
  });
  root.querySelectorAll("table[style]").forEach((td: HTMLTableElement) => {
    if (td.style.width !== "") {
      td.style.width = "100%";
    }
  });

  // Group headers and content so stickies don't overlap
  root.querySelectorAll("h3,h2").forEach((h3) => {
    const parent = h3.parentNode;
    const div = document.createElement("div");
    parent.insertBefore(div, h3);
    while (h3.nextSibling && !h3.nextSibling.nodeName.startsWith("H")) {
      const sibling = h3.nextSibling;
      parent.removeChild(sibling);
      div.appendChild(sibling);
    }
    h3.parentNode.removeChild(h3);
    div.insertBefore(h3, div.firstChild);
    div.className = "mw-headline-cont";
  });

  root.querySelectorAll<HTMLElement>(".mw-headline").forEach((span) => {
    // Find nearest container
    let parent = span.parentElement;
    while (parent !== null) {
      if (parent.classList.contains("mw-headline-cont")) {
        parent.id = span.id;
        span.id += "-span";
        parent.dataset.name = span.innerText;
        return;
      }
      parent = parent.parentElement;
    }
  });

  // Tell user that better chemistry is loading
  const postbody = root;
  const statusMessage = document.createElement("div");
  statusMessage.innerHTML = `
      <table style="background-color: black; margin-bottom:10px;" width="95%" align="center">
      <tbody><tr><td align="center">
      <b>Hang on...</b> Better guides is loading.
      </td></tr></tbody>
      </table>`;
  postbody.insertBefore(statusMessage, postbody.firstChild);

  function betterChemistry() {
    // Fix inconsistencies with <p> on random parts
    // Ideally I'd like a <p> or something on every part, wrapping it completely, but for now let's just kill 'em
    document
      .querySelectorAll(
        "table.wikitable > tbody > tr:not(:first-child) > td:nth-child(2), .tooltiptext"
      )
      .forEach((td) => {
        const tmp = td.cloneNode() as HTMLElement;
        // The cast to Array is necessary because, while childNodes's NodeList technically has a forEach method, it's a live list and operations mess with its lenght in the middle of the loop.
        // Nodes can only have one parent so append removes them from the original NodeList and shifts the following one back into the wrong index.
        Array.from(td.childNodes).forEach((el) => {
          if (el instanceof Element && el.tagName === "P") {
            tmp.append(...el.childNodes);
          } else {
            tmp.append(el);
          }
        });
        td.parentNode.replaceChild(tmp, td);
      });

    // Enrich "x part" with checkboxes and parts
    Array.from(document.querySelectorAll("td"))
      .filter((el) => el.innerText.indexOf(" part") >= 0)
      .forEach((el) => {
        el.innerHTML = el.innerHTML.replace(
          /((\d+)\s+(?:parts?|units?))(.*?(?:<\/a>|\n|$))/gi,
          (match, ...m) =>
            `<label class="bgus_part ${
              m[2].includes("</a>") ? "bgus_part_tooltip" : ""
            }" data-amount="${
              m[1]
            }"><input type="checkbox" class='bgus_checkbox bgus_hidden'/> <span class="bgus_part_label" data-src="${
              m[0]
            }">${m[0]}</span></label>${m[2].replace(
              /(<a .+?<\/a>)/gi,
              '<span class="bgus_nobreak bgus_nested_element">$1<span class="bgus_twistie"></span></span>'
            )}`
        );
      });
    // Add event to autofill child checkboxes
    root
      .querySelectorAll(".bgus_part_tooltip > .bgus_checkbox")
      .forEach((box: HTMLInputElement) => {
        const tooltip = box.parentElement.nextElementSibling;
        box.addEventListener("click", () => {
          tooltip
            .querySelectorAll(".bgus_checkbox")
            .forEach((el: HTMLInputElement) => {
              el.checked = box.checked;
            });
        });
      });

    // Add event to collapse subsections
    root.querySelectorAll(".bgus_nested_element").forEach((twistie) => {
      twistie.addEventListener("click", () => {
        twistie.classList.toggle("bgus_collapsed");
      });
    });

    // Wrap every recipe with extra metadata
    root.querySelectorAll<HTMLElement>(".bgus_part").forEach((el) => {
      if ("parts" in el.parentElement.dataset) {
        el.parentElement.dataset.parts = (
          parseInt(el.parentElement.dataset.parts, 10) +
          parseInt(el.dataset.amount, 10)
        ).toString();
      } else {
        el.parentElement.dataset.parts = el.dataset.amount;
      }
    });

    const setPartSize = (labels, ml) => {
      labels.forEach((el) => {
        const part = el.parentElement.dataset.amount;
        const total = el.parentElement.parentElement.dataset.parts;
        const amt = Math.ceil(ml * (part / total));
        el.innerHTML = `${amt} ml`;
        // Lookup tooltips
        let next = el.parentElement.nextElementSibling;
        while (next) {
          if (next.classList.contains("tooltip")) {
            const sublabels = [];
            next.querySelector(".tooltiptext").childNodes.forEach((ch) => {
              if (ch.classList && ch.classList.contains("bgus_part")) {
                sublabels.push(ch.querySelector(".bgus_part_label"));
              }
            });
            setPartSize(sublabels, amt);
          }
          if (next.classList.contains("bgus_part")) {
            // Done searching
            break;
          }
          next = next.nextElementSibling;
        }
      });
    };

    root.classList.add("bchem");
    // Init fuzzy search with elements
    const el = Array.from(
      root.querySelectorAll<HTMLElement>(
        "table.wikitable > tbody > tr:not(:first-child) > th"
      )
    );
    const name = el.map((elem) => {
      let partial = "";
      elem.childNodes.forEach((t) => {
        if (t instanceof Text) {
          partial += t.textContent;
        }
      });
      return partial.trim();
    });
    const box = searchBox(
      el,
      name.map((e, i) => ({ id: i, str: e }))
    );
    root.appendChild(box);

    // Remove "Removed medicines" section
    const remTable = root.querySelector(
      "#Non-craftable_Medicines + h4 + p + table"
    );
    remTable.parentElement.removeChild(remTable);

    root
      .querySelectorAll<HTMLElement>("div[data-name] .wikitable.sortable tr")
      .forEach((row) => {
        let sectionEl = row.parentElement;
        while (!sectionEl.dataset.name) {
          sectionEl = sectionEl.parentElement;
        }
        const section = sectionEl.dataset.name;
        if (row.querySelector("td") === null) {
          // Remove unused rows if found
          const headers = row.querySelectorAll("th");
          headers.forEach((th, i) => {
            if (i < 2) {
              th.classList.add("table-head");
              return;
            }
            th.parentElement.removeChild(th);
          });
          return;
        }
        const rows = Array.from(row.querySelectorAll("td")).slice(1);
        let treatment = null;
        let desc = null;
        let metabolism = null;
        let overdose = null;
        let addiction = null;
        // Handle special cases
        switch (section) {
          case "Components":
          case "Virology Recipes":
            [desc] = rows;
            break;
          case "Narcotics":
            [desc, metabolism, overdose, addiction] = rows;
            break;
          case "Explosive Strength":
          case "Other Reagents":
          case "Mutation Toxins":
            [desc, metabolism] = rows;
            break;
          default:
            // All fields
            [treatment, desc, metabolism, overdose, addiction] = rows;
        }
        const title = row.querySelector("th");
        let content = `<div class="reagent-header">${title.innerHTML}</div>`;
        if (treatment) {
          content += `<p class="treatment">${treatment.innerHTML}</p>`;
        }
        if (metabolism) {
          content += `<p class="metabolism">${metabolism.innerHTML}</p>`;
        }
        if (addiction && addiction.innerHTML.trim() !== "N/A") {
          content += `<p class="addiction">${addiction.innerHTML}</p>`;
        }
        if (overdose && overdose.innerHTML.trim() !== "N/A") {
          content += `<p class="overdose">${overdose.innerHTML}</p>`;
        }
        if (desc) {
          content += `<p>${desc.innerHTML}</p>`;
        }
        title.classList.add("reagent-ext");
        title.innerHTML = content;
        if (desc) desc.parentElement.removeChild(desc);
        if (treatment) treatment.parentElement.removeChild(treatment);
        if (metabolism) metabolism.parentElement.removeChild(metabolism);
        if (overdose) overdose.parentElement.removeChild(overdose);
        if (addiction) addiction.parentElement.removeChild(addiction);
      });

    document.body.addEventListener("keydown", (ev) => {
      if (ev.shiftKey) {
        switch (ev.keyCode) {
          // SHIFT+C = Toggle checkboxes
          case 67: {
            root.classList.toggle("bgus_cbox");
            root
              .querySelectorAll(".bgus_checkbox:checked")
              .forEach((sel: HTMLInputElement) => {
                sel.checked = false;
              });
            break;
          }

          // SHIFT+B = Set whole size (beaker?) for parts/units
          case 66: {
            const size = parseInt(
              prompt("Write target ml (0 to reset)", "90"),
              10
            );
            if (Number.isNaN(size) || size <= 0) {
              // Reset to parts/unit
              root
                .querySelectorAll(".bgus_part_label")
                .forEach((sel: HTMLElement) => {
                  sel.innerHTML = sel.dataset.src;
                });
              return;
            }
            setPartSize(
              root.querySelectorAll("td > .bgus_part > .bgus_part_label"),
              +size
            );
            break;
          }

          default:
          // Do nothing
        }
      }
    });
  }

  function betterGeneric() {
    const el = Array.from(
      root.querySelectorAll<HTMLElement>("div.mw-headline-cont[id][data-name]")
    );
    const name = el.map((elem: HTMLDivElement) => elem.dataset.name.trim());

    // Init fuzzy search with headlines
    const box = searchBox(
      el,
      name.map((e, i) => ({ id: i, str: e })),
      { alignment: "start" }
    );
    root.appendChild(box);
  }

  switch (docname) {
    case "Guide_to_chemistry":
      betterChemistry();
      break;
    default:
      betterGeneric();
      break;
  }
  // Everything is loaded, remove loading bar
  statusMessage.innerHTML = "";
}
