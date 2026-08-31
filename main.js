

/* ---------------- DATA ---------------- */

// categorías: comun, pseudo, legendario, ultraente, reclutamiento

const ROSTER = [

["Gengar","comun","gengar"],["Slowbro","comun","slowbro"],["Arcanine","comun","arcanine"],

["Gyarados","comun","gyarados"],["Chansey","comun","chansey"],["Cloyster","comun","cloyster"],

["Alakazam","comun","alakazam"],["Starmie","comun","starmie"],["Nidoking","comun","nidoking"],

["Ninetales","comun","ninetales"],["Ninetales","comun","ninetales-alola","Alola"],

["Kangaskhan","comun","kangaskhan"],["Venusaur","comun","venusaur"],["Charizard","comun","charizard"],

["Blastoise","comun","blastoise"],["Tauros","comun","tauros"],

["Tauros","comun","tauros-paldea-combat-breed","Combate"],

["Tauros","comun","tauros-paldea-blaze-breed","Llama"],

["Tauros","comun","tauros-paldea-aqua-breed","Acuático"],

["Scizor","comun","scizor"],["Skarmory","comun","skarmory"],["Azumarill","comun","azumarill"],

["Quagsire","comun","quagsire"],["Crobat","comun","crobat"],["Umbreon","comun","umbreon"],

["Forretress","comun","forretress"],["Heracross","comun","heracross"],["Porygon","comun","porygon"],

["Espeon","comun","espeon"],["Houndoom","comun","houndoom"],["Steelix","comun","steelix"],

["Miltank","comun","miltank"],["Smeargle","comun","smeargle"],["Breloom","comun","breloom"],

["Gardevoir","comun","gardevoir"],["Milotic","comun","milotic"],["Pelipper","comun","pelipper"],

["Sableye","comun","sableye"],["Blaziken","comun","blaziken"],["Dusclops","comun","dusclops"],

["Swampert","comun","swampert"],["Ludicolo","comun","ludicolo"],["Walrein","comun","walrein"],

["Manectric","comun","manectric"],["Cradily","comun","cradily"],["Claydol","comun","claydol"],

["Camerupt","comun","camerupt"],["Gliscor","comun","gliscor"],["Mamoswine","comun","mamoswine"],

["Weavile","comun","weavile"],

["Rotom","comun","rotom"],["Rotom","comun","rotom-heat","Calor"],["Rotom","comun","rotom-wash","Lavado"],

["Rotom","comun","rotom-frost","Hielo"],["Rotom","comun","rotom-fan","Ventilador"],["Rotom","comun","rotom-mow","Corte"],

["Togekiss","comun","togekiss"],["Roserade","comun","roserade"],

["Infernape","comun","infernape"],["Empoleon","comun","empoleon"],["Gallade","comun","gallade"],

["Bronzong","comun","bronzong"],["Drapion","comun","drapion"],["Froslass","comun","froslass"],

["Yanmega","comun","yanmega"],["Amoonguss","comun","amoonguss"],["Volcarona","comun","volcarona"],

["Ferrothorn","comun","ferrothorn"],["Excadrill","comun","excadrill"],["Reuniclus","comun","reuniclus"],

["Conkeldurr","comun","conkeldurr"],["Krookodile","comun","krookodile"],["Chandelure","comun","chandelure"],

["Mienshao","comun","mienshao"],["Whimsicott","comun","whimsicott"],["Jellicent","comun","jellicent-male"],

["Seismitoad","comun","seismitoad"],["Galvantula","comun","galvantula"],

["Darmanitan","comun","darmanitan-standard"],["Darmanitan","comun","darmanitan-galar-standard","Galar"],

["Stoutland","comun","stoutland"],["Greninja","comun","greninja"],["Clefable","comun","clefable"],

["Talonflame","comun","talonflame"],["Kingambit","comun","kingambit"],["Serperior","comun","serperior"],

["Sylveon","comun","sylveon"],["Diggersby","comun","diggersby"],["Trevenant","comun","trevenant"],

["Noivern","comun","noivern"],["Heliolisk","comun","heliolisk"],["Gourgeist","comun","gourgeist-average"],

["Barbaracle","comun","barbaracle"],["Clawitzer","comun","clawitzer"],["Malamar","comun","malamar"],

["Toxapex","comun","toxapex"],["Mimikyu","comun","mimikyu-disguised"],

["Muk","comun","muk"],["Muk","comun","muk-alola","Alola"],

["Golisopod","comun","golisopod"],["Araquanid","comun","araquanid"],["Salazzle","comun","salazzle"],

["Ribombee","comun","ribombee"],["Tsareena","comun","tsareena"],["Mudsdale","comun","mudsdale"],

["Palossand","comun","palossand"],["Dhelmise","comun","dhelmise"],["Bewear","comun","bewear"],

["Incineroar","comun","incineroar"],["Primarina","comun","primarina"],["Minior","comun","minior-red-meteor"],

["Crabominable","comun","crabominable"],["Rillaboom","comun","rillaboom"],["Cinderace","comun","cinderace"],

["Hatterene","comun","hatterene"],["Corviknight","comun","corviknight"],["Barraskewda","comun","barraskewda"],

["Grimmsnarl","comun","grimmsnarl"],["Dracovish","comun","dracovish"],["Polteageist","comun","polteageist"],

["Dracozolt","comun","dracozolt"],["Arctozolt","comun","arctozolt"],["Obstagoon","comun","obstagoon"],

["Centiskorch","comun","centiskorch"],["Sandaconda","comun","sandaconda"],["Gholdengo","comun","gholdengo"],

["Glimmora","comun","glimmora"],["Meowscarada","comun","meowscarada"],["Skeledirge","comun","skeledirge"],

["Dondozo","comun","dondozo"],["Tinkaton","comun","tinkaton"],["Ceruledge","comun","ceruledge"],

["Pawmot","comun","pawmot"],["Lokix","comun","lokix"],["Garganacl","comun","garganacl"],

["Arboliva","comun","arboliva"],["Espathra","comun","espathra"],["Hippowdon","comun","hippowdon"],

["Tangrowth","comun","tangrowth"],["Eelektross","comun","eelektross"],["Torterra","comun","torterra"],

["Garchomp","pseudo","garchomp"],["Metagross","pseudo","metagross"],["Dragapult","pseudo","dragapult"],

["Zapdos","legendario","zapdos"],["Zapdos","legendario","zapdos-galar","Galar"],

["Moltres","legendario","moltres"],["Moltres","legendario","moltres-galar","Galar"],

["Articuno","legendario","articuno"],["Articuno","legendario","articuno-galar","Galar"],

["Zacian","legendario","zacian"],["Zamazenta","legendario","zamazenta"],

["Celesteela","ultraente","celesteela"],["Buzzwole","ultraente","buzzwole"],

["Staraptor","reclutamiento","staraptor"],["Lucario","reclutamiento","lucario"],["Raichu","reclutamiento","raichu"],

];

const CATS = {

  comun:{label:"Comunes", plural:"comunes"},

  pseudo:{label:"Pseudo-legendarios", plural:"pseudo"},

  legendario:{label:"Legendarios", plural:"legendarios"},

  ultraente:{label:"Ultra Entes", plural:"ultraente"},

  reclutamiento:{label:"Reclutamiento Umbral", plural:"reclutamiento"},

};

const CAT_ORDER = ["comun","pseudo","legendario","ultraente","reclutamiento"];

const TYPE_ES = {

  normal:"Normal", fire:"Fuego", water:"Agua", electric:"Eléctrico", grass:"Planta",

  ice:"Hielo", fighting:"Lucha", poison:"Veneno", ground:"Tierra", flying:"Volador",

  psychic:"Psíquico", bug:"Bicho", rock:"Roca", ghost:"Fantasma", dragon:"Dragón",

  dark:"Siniestro", steel:"Acero", fairy:"Hada"

};

const TYPE_ORDER = Object.keys(TYPE_ES);

/* ---------------- STATE ---------------- */

const state = { category:"todos", types:new Set(), query:"" };

const cache = {}; // slug -> {name, sprite, types}

const speciesCache = {}; // slug -> {genus, desc}

/* ---------------- BUILD CONTROLS ---------------- */

const tabsEl = document.getElementById("tabs");

const allTabBtn = mkTab("todos","Todos");

tabsEl.appendChild(allTabBtn);

CAT_ORDER.forEach(c => tabsEl.appendChild(mkTab(c, CATS[c].label)));

function mkTab(key,label){

  const b = document.createElement("button");

  b.textContent = label;

  b.dataset.key = key;

  if(key==="todos") b.classList.add("active");

  b.addEventListener("click", ()=>{

    state.category = key;

    [...tabsEl.children].forEach(x=>x.classList.toggle("active", x===b));

    render();

  });

  return b;

}

const typeRow = document.getElementById("type-row");

TYPE_ORDER.forEach(t=>{

  const chip = document.createElement("button");

  chip.className = "type-chip";

  chip.style.color = \`var(--t-${t})\`;

  chip.innerHTML = \`<span class="dot" style="background:var(--t-${t})"></span>${TYPE_ES[t]}\`;

  chip.addEventListener("click", ()=>{

    if(state.types.has(t)) state.types.delete(t); else state.types.add(t);

    chip.classList.toggle("active");

    render();

  });

  typeRow.appendChild(chip);

});

const clearBtn = document.createElement("button");

clearBtn.className = "clear-types";

clearBtn.textContent = "Limpiar tipos";

clearBtn.addEventListener("click", ()=>{

  state.types.clear();

  [...typeRow.querySelectorAll(".type-chip")].forEach(c=>c.classList.remove("active"));

  render();

});

typeRow.appendChild(clearBtn);

document.getElementById("search").addEventListener("input", e=>{

  state.query = e.target.value.trim().toLowerCase();

  render();

});

/* ---------------- STATS ---------------- */

CAT_ORDER.forEach(c=>{

  const count = new Set(ROSTER.filter(r=>r[1]===c).map(r=>r[0])).size;

  document.getElementById(\`stat-${c}\`).textContent = count;

});

/* ---------------- FETCH ---------------- */

async function fetchMon(slug){

  if(cache[slug]) return cache[slug];

  try{

    const res = await fetch(\`https://pokeapi.co/api/v2/pokemon/$%7Bslug}\`);

    if(!res.ok) throw new Error("not found");

    const d = await res.json();

    const sprite = d.sprites?.other?.["official-artwork"]?.front_default || d.sprites?.front_default;

    cache[slug] = {

      sprite,

      types: d.types.map(t=>t.type.name),

      height: d.height,

      weight: d.weight,

      speciesUrl: d.species?.url,

      stats: (d.stats || []).map(s => ({

        name: s.stat?.name || "",

        value: Number(s.base_stat) || 0

      })),

      abilities: (d.abilities || []).map(a => ({

        name: a.ability?.name || "",

        url: a.ability?.url || "",

        hidden: !!a.is_hidden

      }))

    };

  }catch(e){

    cache[slug] = {sprite:null, types:[], error:true};

  }

  return cache[slug];

}

const abilityCache = {}; // ability url -> {name, desc}

const translationCache = {}; // texto inglés -> español

// Traducción automática de respaldo.

// Se utiliza únicamente cuando PokéAPI no tiene la traducción española.

async function translateToSpanish(text){

  if(!text) return "";

  text = text

    .replace(/[\n\f\r]/g, " ")

    .replace(/\s+/g, " ")

    .trim();

  if(!text) return "";

  // Si ya tenemos la traducción guardada, no hacemos otra petición.

  if(translationCache[text]){

    return translationCache[text];

  }

  try{

    // MyMemory permite hasta 500 bytes por consulta.

    // Las descripciones normales de habilidades suelen estar por debajo.

    const chunks = [];

    if(text.length <= 450){

      chunks.push(text);

    }else{

      // Divide textos largos en fragmentos.

      let remaining = text;

      while(remaining.length > 0){

        let cut = remaining.slice(0, 450);

        // Intentar cortar en un espacio para no partir palabras.

        const lastSpace = cut.lastIndexOf(" ");

        if(lastSpace > 200){

          cut = cut.slice(0, lastSpace);

        }

        chunks.push(cut);

        remaining = remaining.slice(cut.length).trim();

      }

    }

    const translatedChunks = [];

    for(const chunk of chunks){

      const url =

        \`https://api.mymemory.translated.net/get\` +

        \`?q=${encodeURIComponent(chunk)}\` +

        \`&langpair=en|es\`;

      const response = await fetch(url);

      if(!response.ok){

        throw new Error("translation request failed");

      }

      const data = await response.json();

      const translated =

        data?.responseData?.translatedText;

      if(translated){

        translatedChunks.push(translated);

      }else{

        translatedChunks.push(chunk);

      }

    }

    const translatedText = translatedChunks.join(" ");

    translationCache[text] = translatedText;

    return translatedText;

  }catch(error){

    console.warn(

      "No se pudo traducir automáticamente:",

      error

    );

    // Si el traductor falla, devolvemos el texto original

    // en lugar de dejar la habilidad vacía.

    return text;

  }

}

async function fetchAbility(url){

  if(!url){

    return {

      name:"",

      desc:"Sin descripción disponible."

    };

  }

  // Usar caché para no volver a consultar la API.

  if(abilityCache[url]){

    return abilityCache[url];

  }

  try{

    const res = await fetch(url);

    if(!res.ok){

      throw new Error("ability not found");

    }

    const d = await res.json();

    /* -----------------------------------------

       NOMBRE DE LA HABILIDAD

       ----------------------------------------- */

    const spanishName =

      d.names?.find(

        n => n.language?.name === "es"

      )?.name;

    const englishName =

      d.names?.find(

        n => n.language?.name === "en"

      )?.name;

    /* -----------------------------------------

       DESCRIPCIÓN EN ESPAÑOL

       ----------------------------------------- */

    const spanishEffect =

      d.effect_entries?.find(

        e => e.language?.name === "es"

      );

    const spanishFlavor =

      d.flavor_text_entries?.find(

        e => e.language?.name === "es"

      );

    /* -----------------------------------------

       DESCRIPCIÓN EN INGLÉS

       COMO RESPALDO

       ----------------------------------------- */

    const englishEffect =

      d.effect_entries?.find(

        e => e.language?.name === "en"

      );

    const englishFlavor =

      d.flavor_text_entries?.find(

        e => e.language?.name === "en"

      );

    let description = "";

    let needsTranslation = false;

    /*

     * PRIORIDAD:

     *

     * 1. effect_entries español

     * 2. flavor_text español

     * 3. effect_entries inglés

     * 4. flavor_text inglés

     */

    if(spanishEffect?.effect){

      description = spanishEffect.effect;

    }else if(spanishFlavor?.flavor_text){

      description = spanishFlavor.flavor_text;

    }else if(englishEffect?.effect){

      description = englishEffect.effect;

      needsTranslation = true;

    }else if(englishFlavor?.flavor_text){

      description = englishFlavor.flavor_text;

      needsTranslation = true;

    }else{

      description = "Sin descripción disponible.";

    }

    /* -----------------------------------------

       LIMPIAR DESCRIPCIÓN

       ----------------------------------------- */

    description = description

      .replace(/[\n\f\r]/g, " ")

      .replace(/\s+/g, " ")

      .trim();

    /* -----------------------------------------

       TRADUCIR SI SOLO TENEMOS INGLÉS

       ----------------------------------------- */

    if(

      needsTranslation &&

      description &&

      description !== "Sin descripción disponible."

    ){

      description = await translateToSpanish(description);

    }

    /* -----------------------------------------

       RESULTADO FINAL

       ----------------------------------------- */

    const result = {

      name:

        spanishName ||

        englishName ||

        d.name ||

        "Desconocida",

      desc:

        description ||

        "Sin descripción disponible."

    };

    // Guardar en caché.

    abilityCache[url] = result;

    return result;

  }catch(e){

    console.error(

      "Error cargando habilidad:",

      e

    );

    const result = {

      name:"",

      desc:

        "No se pudo cargar la descripción de esta habilidad."

    };

    abilityCache[url] = result;

    return result;

  }

}

async function fetchSpecies(slug, speciesUrl){

  if(speciesCache[slug]) return speciesCache[slug];

  try{

    const res = await fetch(speciesUrl);

    const d = await res.json();

    const flavorEntry = d.flavor_text_entries.find(f=>f.language.name==="es") || d.flavor_text_entries.find(f=>f.language.name==="en");

    const genusEntry = d.genera.find(g=>g.language.name==="es") || d.genera.find(g=>g.language.name==="en");

    speciesCache[slug] = {

      desc: flavorEntry ? flavorEntry.flavor_text.replace(/[\n\f\r]/g," ") : "Sin descripción disponible.",

      genus: genusEntry ? genusEntry.genus : ""

    };

  }catch(e){

    speciesCache[slug] = {desc:"No se pudo cargar la descripción.", genus:""};

  }

  return speciesCache[slug];

}

// limited concurrency loader

async function loadAll(){

  const slugs = ROSTER.map(r=>r[2]);

  let i = 0;

  const CONC = 8;

  async function worker(){

    while(i < slugs.length){

      const idx = i++;

      await fetchMon(slugs[idx]);

      const card = document.querySelector(\`[data-slug="${slugs[idx]}"]\`);

      if(card) paintCard(card, slugs[idx]);

    }

  }

  await Promise.all(Array.from({length:CONC}, worker));

}

function paintCard(card, slug){

  const data = cache[slug];

  if(!data) return;

  const imgWrap = card.querySelector(".img-wrap");

  if(data.sprite){

    imgWrap.innerHTML = \`<img src="${data.sprite}" alt="${card.dataset.name}" loading="lazy">\`;

  } else {

    imgWrap.innerHTML = \`<div class="skel" style="animation:none;opacity:.3;"></div>\`;

  }

  const typesEl = card.querySelector(".types");

  typesEl.innerHTML = data.types.map(t=>\`<span class="type-dot" style="background:var(--t-${t})" title="${TYPE_ES[t]||t}"></span>\`).join("");

}

/* ---------------- RENDER GRID ---------------- */

const main = document.getElementById("main");

function passesFilter(entry){

  const [name, cat, slug] = entry;

  if(state.category !== "todos" && state.category !== cat) return false;

  if(state.query && !name.toLowerCase().includes(state.query)) return false;

  if(state.types.size){

    const data = cache[slug];

    if(!data || !data.types.some(t=>state.types.has(t))) return false;

  }

  return true;

}

function render(){

  const filtered = ROSTER.filter(passesFilter);

  document.getElementById("result-count").textContent = \`${filtered.length} Pokémon mostrados\`;

  main.innerHTML = "";

  if(!filtered.length){

    main.innerHTML = \`<div class="empty">Ningún Pokémon coincide con estos filtros.</div>\`;

    return;

  }

  const groups = state.category === "todos"

    ? CAT_ORDER.filter(c=>filtered.some(f=>f[1]===c))

    : [state.category];

  groups.forEach(cat=>{

    const items = filtered.filter(f=>f[1]===cat);

    if(!items.length) return;

    const label = document.createElement("div");

    label.className = "section-label";

    label.textContent = CATS[cat].label;

    main.appendChild(label);

    const grid = document.createElement("div");

    grid.className = "grid";

    items.forEach(entry=>{

      const [name, cat2, slug, form] = entry;

      const card = document.createElement("div");

      card.className = "card";

      card.dataset.slug = slug;

      card.dataset.name = name;

      card.innerHTML = \`

        ${form ? \`<span class="form-tag">${form}</span>\`:""}

        <div class="img-wrap"><div class="skel"></div></div>

        <div class="name">${name}${form?\` <span style="color:var(--text-faint);font-weight:500;">(${form})</span>\`:""}</div>

        <div class="types"></div>

      \`;

      card.addEventListener("mouseenter", e=>openPanel(card, slug, name, form));

      card.addEventListener("mouseleave", closePanelSoon);

      card.addEventListener("click", e=>{

        if(panel.classList.contains("show") && panel.dataset.slug===slug){

          closePanel();

        } else {

          openPanel(card, slug, name, form, true);

        }

      });

      grid.appendChild(card);

      if(cache[slug]) paintCard(card, slug);

    });

    main.appendChild(grid);

  });

}

/* ---------------- INFO PANEL ---------------- */

const panel = document.getElementById("info-panel");

document.getElementById("close-panel").addEventListener("click", closePanel);

let panelTimer = null;

async function openPanel(card, slug, name, form, pinned){

  clearTimeout(panelTimer);

  panel.dataset.slug = slug;

  const data = cache[slug] || await fetchMon(slug);

  document.getElementById("ip-name").textContent =

    name + (form ? \` (${form})\` : "");

  document.getElementById("ip-genus").textContent = "";

  document.getElementById("ip-types").innerHTML = (data.types||[]).map(t =>

    \`<span class="type-pill" style="background:var(--t-${t})">${TYPE_ES[t]||t}</span>\`

  ).join("");

  document.getElementById("ip-height").textContent =

    data.height ? (data.height/10).toFixed(1)+" m" : "—";

  document.getElementById("ip-weight").textContent =

    data.weight ? (data.weight/10).toFixed(1)+" kg" : "—";

  const desc = document.getElementById("ip-desc");

  desc.textContent = "Cargando información…";

  desc.classList.add("loading");

  const statsEl = document.getElementById("ip-stats");

  statsEl.innerHTML = \`<span class="loading">Cargando stats…</span>\`;

  const abilitiesEl = document.getElementById("ip-abilities");

  abilitiesEl.innerHTML = \`<span class="loading">Cargando habilidades…</span>\`;

  positionPanel(card);

  panel.classList.add("show");

  // Descripción base del Pokémon.

  if(data.speciesUrl){

    const sp = await fetchSpecies(slug, data.speciesUrl);

    if(panel.dataset.slug === slug){

      desc.textContent = sp.desc;

      desc.classList.remove("loading");

      document.getElementById("ip-genus").textContent = sp.genus;

    }

  }else{

    desc.textContent = "Información no disponible.";

    desc.classList.remove("loading");

  }

  // Stats base: máximo visual de 255 por stat.

  if(panel.dataset.slug === slug){

    const stats = data.stats || [];

    const total = stats.reduce((sum, stat) => sum + stat.value, 0);

    const statNames = {

      hp: "PS",

      attack: "ATQ",

      defense: "DEF",

      "special-attack": "AT. ESP.",

      "special-defense": "DEF. ESP.",

      speed: "VEL."

    };

    statsEl.innerHTML = stats.map(stat => {

      // Cada barra representa el valor real del stat frente al máximo base de 255.

      // Así, 50 será aproximadamente 19.6%, 100 = 39.2%, 200 = 78.4%, etc.

      const percent = Math.min((stat.value / 255) * 100, 100);

      const label = statNames[stat.name] || stat.name;

      return \`

        <div class="stat-line">

          <span class="stat-name">${label}</span>

          <div class="stat-bar" title="${stat.value} / 255">

            <div class="stat-fill stat-${stat.name}" style="width:${percent}%"></div>

          </div>

          <span class="stat-value">${stat.value}</span>

        </div>

      \`;

    }).join("") + \`

      <div class="stat-line stat-total">

        <span class="stat-name">TOTAL</span>

        <div class="stat-bar" title="${total} / 720">

          <div class="stat-fill stat-total" style="width:${Math.min((total / 720) * 100, 100)}%"></div>

        </div>

        <span class="stat-value">${total}</span>

      </div>

    \`;

  }

  // Habilidades: nombre + descripción desde /ability/{id}.

  const abilities = data.abilities || [];

  const abilityDetails = await Promise.all(

    abilities.map(a => fetchAbility(a.url))

  );

  if(panel.dataset.slug === slug){

    abilitiesEl.innerHTML = abilityDetails.length

      ? abilityDetails.map((ability, i) => {

          const original = abilities[i];

          const hiddenLabel = original?.hidden ? " · Oculta" : "";

          const abilityName =

            ability.name || original?.name || "Desconocida";

          return \`

            <div class="ability">

              <span class="ability-name">${abilityName}${hiddenLabel}</span>

              <span class="ability-desc">${ability.desc}</span>

            </div>

          \`;

        }).join("")

      : \`<span class="loading">Sin habilidades disponibles.</span>\`;

  }

}

function positionPanel(card){

  const r = card.getBoundingClientRect();

  const panelW = 270;

  let left = r.right + 12;

  if(left + panelW > window.innerWidth - 10) left = r.left - panelW - 12;

  if(left < 10) left = Math.min(Math.max(10, r.left), window.innerWidth - panelW - 10);

  let top = r.top;

  if(top + 260 > window.innerHeight) top = Math.max(10, window.innerHeight - 270);

  panel.style.left = left + "px";

  panel.style.top = top + "px";

}

function closePanelSoon(){

  panelTimer = setTimeout(closePanel, 150);

}

function closePanel(){

  panel.classList.remove("show");

  panel.dataset.slug = "";

}

panel.addEventListener("mouseenter", ()=>clearTimeout(panelTimer));

panel.addEventListener("mouseleave", closePanelSoon);

document.addEventListener("click", e=>{

  if(!panel.contains(e.target) && !e.target.closest(".card")){

    closePanel();

  }

});

/* ---------------- INIT ---------------- */

render();

loadAll().then(render);

\