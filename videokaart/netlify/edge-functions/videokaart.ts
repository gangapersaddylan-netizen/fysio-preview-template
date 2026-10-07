import type { Config, Context } from "@netlify/edge-functions";

// Tijdelijk register voor de eerste test. Later vult W7 dit automatisch.
const LIBRARY = "725090";
const CDN = "https://vz-6ad1f4e6-a13.b-cdn.net";

type Video = {
  guid: string;
  praktijk: string;
  voornaam?: string;
};

const REGISTER: Record<string, Video> = {
  "fysio-me": {
    guid: "7d47d9ec-be9d-47a9-9307-cc57eeaf5fc9",
    praktijk: "Fysio ME",
    voornaam: "Marvin",
  },
};

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function pagina(slug: string, v: Video, origin: string): string {
  const titel = `${v.praktijk}, ik heb je website opnieuw gebouwd`;
  const omschrijving =
    `Een korte persoonlijke video van Dylan: wat me opviel aan de huidige website van ${v.praktijk} en hoe de nieuwe versie eruitziet.`;
  const url = `${origin}/${slug}`;
  const beeld = `${origin}/${slug}/kaart.jpg`;
  const aanhef = v.voornaam ? `Hoi ${esc(v.voornaam)},` : "Hoi,";
  return `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titel)}</title>
<meta name="description" content="${esc(omschrijving)}">
<meta name="robots" content="noindex">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Dylan Gangapersad">
<meta property="og:title" content="${esc(titel)}">
<meta property="og:description" content="${esc(omschrijving)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:image" content="${esc(beeld)}">
<meta property="og:image:secure_url" content="${esc(beeld)}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1920">
<meta property="og:image:height" content="1080">
<meta property="og:image:alt" content="Voorbeeld van de nieuwe website voor ${esc(v.praktijk)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${esc(beeld)}">
<style>
  :root { --bg:#f6f5f2; --tekst:#16181d; --zacht:#5b6070; --kaart:#ffffff; --rand:#e4e2dc; }
  @media (prefers-color-scheme: dark) { :root { --bg:#111317; --tekst:#f2f2f0; --zacht:#a3a8b5; --kaart:#1a1d23; --rand:#2a2e36; } }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--bg); color:var(--tekst); font: 17px/1.55 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
  main { max-width: 920px; margin: 0 auto; padding: 40px 16px 56px; }
  h1 { font-size: clamp(24px, 4vw, 34px); line-height:1.2; margin: 0 0 10px; letter-spacing:-0.01em; }
  p.lead { color: var(--zacht); margin: 0 0 24px; }
  .speler { position:relative; padding-top:56.25%; border-radius:14px; overflow:hidden; background:#000; border:1px solid var(--rand); box-shadow: 0 10px 30px rgba(0,0,0,.12); }
  .speler iframe { position:absolute; inset:0; width:100%; height:100%; border:0; }
  footer { margin-top: 28px; color: var(--zacht); font-size: 14px; }
</style>
</head>
<body>
<main>
  <h1>${aanhef} hier is je video</h1>
  <p class="lead">Ik heb de site van ${esc(v.praktijk)} opnieuw gebouwd. In de video laat ik zien wat me opviel en hoe de nieuwe versie eruitziet.</p>
  <div class="speler">
    <iframe src="https://player.mediadelivery.net/embed/${LIBRARY}/${esc(v.guid)}?autoplay=false&preload=true"
      loading="eager" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>
  </div>
  <footer>Dylan Gangapersad</footer>
</main>
</body>
</html>`;
}

export default async (request: Request, context: Context) => {
  const slug = (context.params.slug || "").toLowerCase();
  const v = REGISTER[slug];
  if (!v) return new Response("Niet gevonden", { status: 404, headers: { "content-type": "text/plain; charset=utf-8" } });

  const url = new URL(request.url);
  if (url.pathname.toLowerCase().endsWith("/kaart.jpg")) {
    // Thumbnail via ons eigen domein, zodat LinkedIn niet afhangt van Bunny.
    const r = await fetch(`${CDN}/${v.guid}/thumbnail.jpg`, {
      headers: { referer: `https://player.mediadelivery.net/` },
    });
    if (!r.ok) return new Response("Beeld niet beschikbaar", { status: 502 });
    return new Response(r.body, {
      status: 200,
      headers: {
        "content-type": "image/jpeg",
        "cache-control": "public, max-age=86400",
      },
    });
  }

  return new Response(pagina(slug, v, url.origin), {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
};

export const config: Config = {
  path: ["/:slug", "/:slug/kaart.jpg"],
};
