# WarLore footer

One footer for every WarLore tool. Each app loads it with one line:

```html
<script src="https://type37.github.io/warlore-footer/footer.js" data-current="dropfleet" defer></script>
```

`data-current` is the tool you are on: `dropfleet`, `dropzone`, `abs`, `pacific`, `dragon`, `xenos`, `oathmark`, `steelrift` or `warcrow`. It underlines that tool's link.

The script appends `<footer class="wlf">` to the end of `<body>`. To put it somewhere else, add an element with `data-warlore-footer` and it fills that instead. Everything it adds is scoped under `.wlf`.

## Hide it where it doesn't belong

The builders fill the screen, so the footer only shows on pages that scroll (landing pages, lists, rules). Hide it with the app's own CSS, for example:

```css
body[data-view="builder"] .wlf { display: none; }
```

It never prints.

## Changing links

All links, logos and feature lines are in the `DATA` block at the top of `footer.js`. Edit it and push, and every app updates.

## Assets

- `logos/`: hover logos, drawn as flat white shapes. Osprey games with no logo get a #004C80 title box instead.
- `bg/`: 8 dark greyscale waves. One is picked at random on each page load.
- `fonts/`: Terminal Grotesque Open, the WarLore wordmark font. Inter comes from Google Fonts.
