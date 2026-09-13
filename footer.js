/*!
 * WarLore footer: one footer for every WarLore tool.
 *
 * Use:
 *   <script src="https://type37.github.io/warlore-footer/footer.js" data-current="dropfleet" defer></script>
 *
 * It appends <footer class="wlf"> to the end of <body>, or fills an element with
 * [data-warlore-footer] if the page has one. data-current names the tool you are
 * on (dropfleet, dropzone, abs, pacific, dragon, xenos, steelrift, warcrow) so its
 * link gets the "you are here" underline. Apps hide it where it doesn't belong
 * with their own CSS, e.g. body[data-view="builder"] .wlf { display: none }.
 *
 * Every link, logo and feature line lives in the DATA block below. Add a line
 * there and the footer picks it up.
 */
(function () {
  'use strict';
  if (window.__warloreFooter) return;
  window.__warloreFooter = true;

  var script = document.currentScript;
  var BASE = script ? new URL('.', script.src).href : 'https://type37.github.io/warlore-footer/';
  var CURRENT = (script && script.dataset.current) || '';
  var asset = function (p) { return BASE + p; };

  /* ---------------------------------------------------------------- DATA */
  var HOME = 'https://linktr.ee/warlore';
  var EMAIL = 'warlore1@outlook.com';
  var BIG = { name: 'Watch on YouTube', url: 'https://www.youtube.com/warlore' };

  var TOOLS = [
    { id: 'dropfleet', name: 'Dropfleet', url: 'https://type37.github.io/dropfleet-builder/', kind: 'Fleet builder, scenario generator, scenario reference, combat calc, quick reference sheets, rules wiki, starter lists & builds', logo: 'logos/dropfleet.webp' },
    { id: 'dropzone', name: 'Dropzone', url: 'https://type37.github.io/dropzone-3e-army-builder/', kind: 'Army builder, scenario references, rules wiki', logo: 'logos/dropzone.webp' },
    { id: 'abs', name: 'A Billion Suns', url: 'https://type37.github.io/a-billion-suns-shipyard/', kind: 'Fleet builder, solo campaign tracker, ship compendium, starter lists, rules overview, custom faction builder', osprey: 'A Billion Suns' },
    { id: 'pacific', name: 'Pacific Command', url: 'https://jetwong.neocities.org/wargaming/historicals/pacific-command-builder-2', kind: 'Task force builder, campaign builder, historical lists', osprey: 'Pacific Command' },
    { id: 'dragon', name: 'Dragon Rampant', url: 'https://type37.github.io/dragon-rampant-2e-warband-builder/', kind: 'Warband builder, starter warbands', logo: 'logos/dragon-rampant.webp' },
    { id: 'xenos', name: 'Xenos Rampant', url: 'https://type37.github.io/xenos-rampant-force-builder/', kind: 'Detachment builder, pre-made detachments', osprey: 'Xenos Rampant' },
    { id: 'steelrift', name: 'Steel Rift', url: 'https://type37.github.io/Steel-Rift-Hangar-WL/', kind: 'Army builder, print mode', logo: 'logos/steel-rift.svg' },
    { id: 'warcrow', name: 'Warcrow', url: 'https://jetwong.neocities.org/wargaming#warcrow', kind: 'Quick reference sheet, print-friendly rules reference, links, references, fonts, guides for new players', logo: 'logos/warcrow.webp' }
  ];
  var ALL_TOOLS = { id: 'all', name: 'All tools', url: 'https://jetwong.neocities.org/wargaming', full: 'WarLore wargaming tools', kind: 'Every tool and resource' };
  var WIKIS = [
    { name: 'Human Sphere', url: 'https://human-sphere.com', tiny: 'logos/infinity-n.webp' },
    { name: "Wanderer's Inn", url: 'https://wanderers-inn.com/Main_Page', tiny: 'logos/warcrow-w.webp' }
  ];
  var ic = function (paths) { return '<svg class="wlf-ic" aria-hidden="true" viewBox="0 0 24 24">' + paths + '</svg>'; };
  var S = 'fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"';
  /* Tabler brand icons (MIT); Ko-fi from Simple Icons (CC0) */
  var CHANNELS = [
    { name: 'Patreon', url: 'https://www.patreon.com/warlore', icon: ic('<path ' + S + ' d="M20 8.408c-.003-2.299-1.746-4.182-3.79-4.862c-2.54-.844-5.888-.722-8.312.453c-2.939 1.425-3.862 4.545-3.896 7.656c-.028 2.559.22 9.297 3.92 9.345c2.75.036 3.159-3.603 4.43-5.356c.906-1.247 2.071-1.599 3.506-1.963c2.465-.627 4.146-2.626 4.142-5.273"/>') },
    { name: 'Bluesky', url: 'https://bsky.app/profile/warlore.bsky.social', icon: ic('<path ' + S + ' d="M6.335 5.144C4.681 3.945 2 3.017 2 5.97c0 .59.35 4.953.556 5.661C3.269 14.094 5.686 14.381 8 14c-4.045.665-4.889 3.208-2.667 5.41C6.363 20.428 7.246 21 8 21c2 0 3.134-2.769 3.5-3.5q.5-1 .5-1.5q0 .5.5 1.5c.366.731 1.5 3.5 3.5 3.5c.754 0 1.637-.571 2.667-1.59C20.889 17.207 20.045 14.664 16 14c2.314.38 4.73.094 5.444-2.369c.206-.708.556-5.072.556-5.661c0-2.953-2.68-2.025-4.335-.826C15.372 6.806 12.905 10.192 12 12c-.905-1.808-3.372-5.194-5.665-6.856"/>') },
    { name: 'Instagram', url: 'https://www.instagram.com/jetwong1/', icon: ic('<g ' + S + '><path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"/></g>') },
    { name: 'GitHub', url: 'https://github.com/Type37', icon: ic('<path ' + S + ' d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"/>') },
    { name: 'Ko-fi', url: 'https://ko-fi.com/jetwong', icon: ic('<path fill="currentColor" d="M11.351 2.715c-2.7 0-4.986.025-6.83.26C2.078 3.285 0 5.154 0 8.61c0 3.506.182 6.13 1.585 8.493c1.584 2.701 4.233 4.182 7.662 4.182h.83c4.209 0 6.494-2.234 7.637-4a9.5 9.5 0 0 0 1.091-2.338C21.792 14.688 24 12.22 24 9.208v-.415c0-3.247-2.13-5.507-5.792-5.87c-1.558-.156-2.65-.208-6.857-.208m0 1.947c4.208 0 5.09.052 6.571.182c2.624.311 4.13 1.584 4.13 4v.39c0 2.156-1.792 3.844-3.87 3.844h-.935l-.156.649c-.208 1.013-.597 1.818-1.039 2.546c-.909 1.428-2.545 3.064-5.922 3.064h-.805c-2.571 0-4.831-.883-6.078-3.195c-1.09-2-1.298-4.155-1.298-7.506c0-2.181.857-3.402 3.012-3.714c1.533-.233 3.559-.26 6.39-.26m6.547 2.287c-.416 0-.65.234-.65.546v2.935c0 .311.234.545.65.545c1.324 0 2.051-.754 2.051-2s-.727-2.026-2.052-2.026m-10.39.182c-1.818 0-3.013 1.48-3.013 3.142c0 1.533.858 2.857 1.949 3.897c.727.701 1.87 1.429 2.649 1.896a1.47 1.47 0 0 0 1.507 0c.78-.467 1.922-1.195 2.623-1.896c1.117-1.039 1.974-2.364 1.974-3.897c0-1.662-1.247-3.142-3.039-3.142c-1.065 0-1.792.545-2.338 1.298c-.493-.753-1.246-1.298-2.312-1.298"/>') }
  ];
  var WORK = [{ name: 'Hire me for UX', url: 'https://www.notion.so/Welcome-to-Notion-267648d58edc8069a0dae8eb06295caf?source=copy_link' }];
  var BGS = ['01-purple-dm-4k', '02-green-blue-dm-4k', '03-blue-purple-dm-4k', '04-pink-orange-dm-4k', '05-orange-dm-4k', '06-yellow-dm-4k', 'wip-dark', 'wip-dark-full'];

  /* ---------------------------------------------------------------- STYLE */
  /* Everything is scoped under .wlf so it can't leak into (or be broken by) the host app. */
  var CSS = [
    '@font-face{font-family:"WLF TG Open";src:url("' + asset('fonts/terminal-grotesque-open.woff2') + '") format("woff2");font-display:swap}',
    /* amber = made by WarLore (wordmark, tools, wikis); teal = WarLore channels elsewhere */
    '.wlf{--own:#FFCC00;--out:#16E0BD;--dim:#F3F0EA;position:relative;isolation:isolate;overflow:clip;display:block;background:#000;color:var(--out);font-family:"Inter",system-ui,sans-serif;text-align:left;line-height:1.3;padding:clamp(24px,3vw,48px) clamp(20px,3.2vw,56px) clamp(14px,1.6vw,24px)}',
    '.wlf *,.wlf *::before,.wlf *::after{box-sizing:border-box}',
    '.wlf a{color:inherit;text-decoration:none;text-underline-offset:.14em}',
    '.wlf nav,.wlf p{margin:0;padding:0}',
    '.wlf button{font:inherit;color:inherit;background:none;border:0;padding:0;margin:0;cursor:pointer}',
    '.wlf a:focus-visible,.wlf button:focus-visible{outline:2px solid currentColor;outline-offset:3px}',
    '.wlf [aria-current="page"]{text-decoration:underline;text-decoration-thickness:2px}',
    '.wlf-sr{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}',
    '.wlf .wlf-ext::after{content:"\\2197";margin-left:.25em;font-size:.85em}',
    /* one random dark wave per page load, under a 55% black veil so every text colour keeps AA contrast */
    '.wlf-bg{position:absolute;inset:0;z-index:-2;pointer-events:none;background:50% 60%/cover no-repeat}',
    '.wlf::after{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:rgba(0,0,0,.55)}',
    '.wlf-rule{height:clamp(3px,.32vw,5px);background:var(--out);margin-bottom:clamp(18px,2.4vw,36px)}',
    /* WarLore wordmark: gold on black, inverts on hover */
    '.wlf .wlf-wl{display:inline-block;background:#000;color:#FFCC00;font-family:"WLF TG Open",ui-monospace,monospace;font-weight:400;line-height:.88;padding:.05em .12em;flex:none;max-width:100%;font-size:clamp(3.5rem,7.6vw,7.5rem)}',
    '.wlf .wlf-wl:hover,.wlf .wlf-wl:focus-visible{background:#FFCC00;color:#000}',
    '.wlf-head{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:clamp(16px,3vw,48px)}',
    '.wlf-chans{display:flex;flex-wrap:wrap;gap:0 .32em;font:700 clamp(2.5rem,4.6vw,4.5rem)/1 "Inter",system-ui,sans-serif;letter-spacing:-.055em}',
    '.wlf-chans a{color:var(--out);display:inline-flex;align-items:center;white-space:nowrap}',
    '.wlf-chans a:hover{color:var(--dim)}',
    '.wlf-chans .wlf-ext::after{font-size:.32em;vertical-align:.9em;margin-left:.1em;letter-spacing:0}',
    '.wlf-ic{width:.62em;height:.62em;margin-right:.18em;flex:none}',
    '.wlf-band{height:clamp(48px,11vw,180px)}',
    '.wlf-tools{display:flex;flex-wrap:wrap;gap:4px clamp(14px,1.6vw,26px);font:700 clamp(1.25rem,1.7vw,1.75rem)/1.25 "Inter",system-ui,sans-serif;letter-spacing:-.02em}',
    '.wlf-tools a{display:inline-flex;align-items:center;min-height:32px;color:var(--own)}',
    '.wlf-tools a:hover{color:var(--dim)}',
    '.wlf .wlf-bar{display:flex;justify-content:space-between;align-items:center;margin:clamp(18px,2vw,32px) 0 clamp(24px,3vw,44px);padding:clamp(18px,1.8vw,26px);background:var(--out);color:#000;font:600 clamp(1.375rem,2vw,2rem)/1 "Inter",system-ui,sans-serif;letter-spacing:-.02em}',
    '.wlf .wlf-bar:hover{background:var(--own)}',
    '.wlf-bar svg{width:clamp(20px,2vw,30px);height:auto;flex:none}',
    '.wlf-base{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:0 24px;font:500 clamp(1rem,1.1vw,1.125rem)/1.35 "Inter",system-ui,sans-serif}',
    '.wlf-base nav{display:flex;flex-wrap:wrap;gap:0 clamp(18px,2vw,32px)}',
    '.wlf-base a,.wlf-base button{display:inline-flex;align-items:center;min-height:40px;color:var(--dim)}',
    '.wlf-base .wlf-own{color:var(--own)}',
    '.wlf-base a:hover,.wlf-base button:hover{color:var(--out)}',
    '.wlf-tiny{height:1em;width:auto;margin-right:.3em;filter:grayscale(1)}',
    /* hover mark: logo in a fixed 40px slot, feature text under it, box left-aligned to the word */
    '.wlf-reveal{position:absolute;left:0;bottom:8px;display:flex;flex-direction:column;align-items:flex-start;gap:10px;width:360px;max-width:calc(100% - 8px);opacity:0;transition:opacity .12s ease;pointer-events:none}',
    '.wlf-reveal.on{opacity:1}',
    '.wlf-mk{flex:none;height:40px;display:flex;align-items:flex-end}',
    '.wlf-mk img{display:block;width:auto;filter:brightness(0) invert(1);opacity:.72}',
    '.wlf-osp{display:inline-block;background:#004C80;color:#fff;font:800 1.05rem/1 "Inter",system-ui,sans-serif;text-transform:uppercase;letter-spacing:-.01em;padding:.45em .6em .4em;white-space:nowrap;font-style:normal}',
    '.wlf-feat{margin:0;width:360px;max-width:100%;min-height:var(--featH,4.2em);font:500 clamp(1rem,1.2vw,1.25rem)/1.4 "Inter",system-ui,sans-serif;color:var(--dim)}',
    '.wlf-feat b{display:block;font-weight:600}',
    '@media (min-width:900px){.wlf-chans{display:grid;grid-template-columns:repeat(2,max-content);column-gap:.55em}.wlf .wlf-wl{font-size:clamp(6rem,10.5vw,12rem)}}',
    '@media (hover:hover) and (min-width:900px){.wlf-band{height:clamp(200px,15vw,260px)}}',
    '@media (hover:none){.wlf-reveal{display:none}}',
    '@media (prefers-reduced-motion:reduce){.wlf-reveal{transition:none}}',
    '@media (max-width:640px){.wlf-head{flex-direction:column;align-items:stretch}.wlf .wlf-wl{align-self:flex-start;order:-1}.wlf-base{flex-direction:column;align-items:flex-start}}',
    '@media print{.wlf{display:none}}'
  ].join('\n');

  /* ---------------------------------------------------------------- MARKUP */
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var OWN = TOOLS.map(function (t) { return t.url; });
  var newTab = function (u) { return /^https?:/.test(u) && OWN.indexOf(u) < 0; };
  var ARROW = '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 11L11 3M5 3h6v6"/></svg>';

  function link(l, opts) {
    opts = opts || {};
    var nt = newTab(l.url);
    var cls = [opts.cls, nt ? 'wlf-ext' : ''].filter(Boolean).join(' ');
    return '<a href="' + esc(l.url) + '"' +
      (nt ? ' target="_blank" rel="noopener"' : '') +
      (l.id && l.id === CURRENT ? ' aria-current="page"' : '') +
      (cls ? ' class="' + cls + '"' : '') +
      (opts.key ? ' data-wlf-key="' + l.id + '"' : '') + '>' +
      (opts.icon || '') +
      (l.tiny ? '<img class="wlf-tiny" src="' + asset(l.tiny) + '" alt="">' : '') +
      esc(l.name) +
      (l.kind ? '<span class="wlf-sr">, ' + esc(l.kind) + '</span>' : '') +
      (nt ? '<span class="wlf-sr"> (opens in a new tab)</span>' : '') +
      '</a>';
  }

  function build() {
    var html =
      '<div class="wlf-bg" aria-hidden="true"></div>' +
      '<div class="wlf-rule" aria-hidden="true"></div>' +
      '<div class="wlf-head">' +
        '<nav class="wlf-chans" aria-label="WarLore channels">' + CHANNELS.map(function (c) { return link(c, { icon: c.icon }); }).join('') + '</nav>' +
        '<a class="wlf-wl" href="' + HOME + '" target="_blank" rel="noopener">WarLore</a>' +
      '</div>' +
      '<div class="wlf-band"></div>' +
      '<div class="wlf-reveal" aria-hidden="true"></div>' +
      '<nav class="wlf-tools" aria-label="WarLore tools">' + TOOLS.map(function (t) { return link(t, { key: true }); }).join('') + link(ALL_TOOLS, { key: true }) + '</nav>' +
      '<a class="wlf-bar" href="' + BIG.url + '" target="_blank" rel="noopener">' + BIG.name + '<span class="wlf-sr"> (opens in a new tab)</span>' + ARROW + '</a>' +
      '<div class="wlf-base">' +
        '<nav aria-label="Wikis">' + WIKIS.map(function (w) { return link(w, { cls: 'wlf-own' }); }).join('') + '</nav>' +
        '<nav aria-label="WarLore contact">' + WORK.map(function (w) { return link(w); }).join('') +
          '<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>' +
          '<button type="button" data-wlf-top>Back to top</button>' +
        '</nav>' +
      '</div>';
    return html;
  }

  /* ---------------------------------------------------------------- BEHAVIOUR */
  function wire(ft) {
    var bg = ft.querySelector('.wlf-bg');
    bg.style.backgroundImage = 'url("' + asset('bg/' + BGS[Math.floor(Math.random() * BGS.length)] + '.webp') + '")';

    ft.querySelector('[data-wlf-top]').addEventListener('click', function () {
      var still = matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: still ? 'auto' : 'smooth' });
    });

    var box = ft.querySelector('.wlf-reveal');
    var LINKS = TOOLS.concat([ALL_TOOLS]);
    var byId = function (id) { for (var i = 0; i < LINKS.length; i++) if (LINKS[i].id === id) return LINKS[i]; };
    /* only with a real mouse on a wide screen: phones fire mouseenter on tap, and narrow layouts have no room above the tools */
    var canHover = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 900px)');
    var hideT;

    function place(key) {
      var a = ft.querySelector('[data-wlf-key="' + key + '"]'); if (!a) return;
      var hr = ft.getBoundingClientRect(), lr = a.getBoundingClientRect();
      var left = Math.max(0, Math.min(lr.left - hr.left, hr.width - box.offsetWidth));
      box.style.left = left + 'px';
      box.style.bottom = (hr.bottom - lr.top + 4) + 'px';
    }
    function show(key) {
      var l = byId(key); if (!l) return;
      clearTimeout(hideT);
      var mark = l.logo ? '<img src="' + asset(l.logo) + '" alt="">' : l.osprey ? '<i class="wlf-osp">' + esc(l.osprey) + '</i>' : '';
      /* the name only shows when the mark doesn't already spell it */
      var named = !l.logo && !l.osprey;
      box.innerHTML = '<div class="wlf-mk">' + mark + '</div><p class="wlf-feat">' + (named ? '<b>' + esc(l.full || l.name) + '</b>' : '') + esc(l.kind || '') + '</p>';
      box.classList.add('on');
      var img = box.querySelector('.wlf-mk img');
      var fit = function () {
        /* every logo covers about the same area: a 4:1 logo at 34px tall, capped to the 40px slot */
        var H0 = 34, ratio = (img.naturalWidth / img.naturalHeight) || 4;
        img.style.height = Math.round(Math.min(40, Math.max(H0 * 0.6, H0 * Math.sqrt(4 / ratio)))) + 'px';
        place(key);
      };
      if (img) { if (img.complete) fit(); else img.onload = fit; }
      place(key);
    }
    function hide() { hideT = setTimeout(function () { box.classList.remove('on'); }, 120); }
    function measure() {
      /* the text area is as tall as the longest feature list, so every logo lands at the same height */
      var tallest = 0;
      box.style.setProperty('--featH', '0px');
      LINKS.forEach(function (l) {
        box.innerHTML = '<div class="wlf-mk"></div><p class="wlf-feat">' + esc(l.kind || '') + '</p>';
        tallest = Math.max(tallest, box.querySelector('.wlf-feat').offsetHeight);
      });
      box.innerHTML = '';
      box.classList.remove('on');
      box.style.setProperty('--featH', tallest + 'px');
    }

    Array.prototype.forEach.call(ft.querySelectorAll('[data-wlf-key]'), function (a) {
      a.addEventListener('mouseenter', function () { if (canHover.matches) show(a.dataset.wlfKey); });
      a.addEventListener('focus', function () { if (canHover.matches) show(a.dataset.wlfKey); });
      a.addEventListener('mouseleave', hide);
      a.addEventListener('blur', hide);
    });
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(measure);
    window.addEventListener('resize', measure);
  }

  function mount() {
    if (!document.getElementById('wlf-style')) {
      var st = document.createElement('style');
      st.id = 'wlf-style';
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    if (!document.querySelector('link[href*="fonts.googleapis.com"][href*="Inter"]')) {
      var ln = document.createElement('link');
      ln.rel = 'stylesheet';
      ln.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap';
      document.head.appendChild(ln);
    }
    var host = document.querySelector('[data-warlore-footer]');
    var ft = document.createElement('footer');
    ft.className = 'wlf';
    ft.innerHTML = build();
    if (host) host.appendChild(ft); else document.body.appendChild(ft);
    wire(ft);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
