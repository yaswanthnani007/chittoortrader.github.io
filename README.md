# Chittoor Trader

A single-page static website for **Yashwanth G** — a personal "born to win"
record covering his story, his 90% psychology / 10% strategy philosophy, his
trading rules, and his two biggest influences: Jesse Livermore and Mark
Douglas.

## Design

The theme is warm and optimistic: a cream/ivory background, deep forest
green + gold accents, and an ascending "breakout chart line" as the visual
signature — the dip-then-breakout line in the hero doubles as a graphic of
the comeback story itself. Photo frames use a soft warm tone instead of the
harsh grayscale treatment of the old identity. Typefaces are Fraunces
(display serif) and Manrope (body), with IBM Plex Mono for small data-style
labels.

This replaces the earlier dark "case file" identity. If you ever want that
version back, it's recoverable from your GitHub history (or ask and it can
be rebuilt).

## Files

```
chittoortrader/
├── index.html      → all page content
├── style.css       → the cream / "born to win" visual design
├── script.js       → small scroll-reveal effect (no dependencies)
├── assets/         → your photos + notes, see assets/README.txt
└── README.md       → this file
```

It's 100% static — no build step, no framework, no server required.

## Image licensing notes

- **Your photo** (converted from the HEIC you uploaded) is used twice: a
  circular badge in the hero, and a larger "dossier" shot in the Story
  section.
- **Jesse Livermore's and Mark Douglas's photos** are local files
  (`assets/jesse-livermore.jpg`, `assets/mark-douglas.jpg`), cropped from
  the images you supplied down to a clean portrait with no text or logos
  baked in. Worth double-checking you're clear to publish the source images
  before this goes live — the Livermore crop came from a third-party
  trading-blog graphic, and the Douglas one from a separate portrait.
- See `assets/README.txt` for how to swap either photo later.
- The **Trading in the Zone** book cover is an original CSS illustration,
  not a scan of the real (copyrighted) book cover.

## Preview it locally

Just open `index.html` in a browser — no server needed. Or, if you want to
preview it the same way a real webserver would serve it:

```bash
cd chittoortrader
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Hosting it on GitHub Pages (step by step)

You said you don't have a domain yet — that's totally fine. GitHub Pages
gives you a **free URL** like `https://YOUR-USERNAME.github.io/chittoortrader`
with no DNS setup required. You can always add a custom domain later.

### 1. Create a GitHub account (if you don't have one)
Go to [github.com/join](https://github.com/join) and sign up.

### 2. Create a new repository
1. Click the **+** icon (top right) → **New repository**.
2. Repository name: `chittoortrader`
   *(the name doesn't have to match, but this keeps your URL clean)*
3. Set it to **Public** (GitHub Pages requires a public repo on free accounts).
4. Don't add a README/gitignore/license here — you already have your files.
5. Click **Create repository**.

### 3. Upload your files
On the new repo's page:
1. Click **uploading an existing file** (or **Add file → Upload files**).
2. Drag in `index.html`, `style.css`, `script.js`, and the `assets` folder
   from this project (unzip it first if needed).
3. Scroll down, add a commit message like "Initial site", click
   **Commit changes**.

*(Prefer the command line? See the Git commands section below.)*

### 4. Turn on GitHub Pages
1. In your repo, go to **Settings** (top tab).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose `main` (or `master`) and folder `/ (root)`.
5. Click **Save**.

### 5. Wait ~1 minute, then visit your site
GitHub will show a banner like:
> Your site is live at `https://YOUR-USERNAME.github.io/chittoortrader/`

That's it — no DNS, no server, no cost.

---

### Alternative: using Git from the command line

If you'd rather push from your computer's terminal instead of the upload
button:

```bash
cd chittoortrader
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/chittoortrader.git
git push -u origin main
```

Then follow step 4 above to switch on Pages.

---

## Custom domain: chittoortrader.com

This repo is now wired up for `chittoortrader.com` (registered via Cloudflare).
A `CNAME` file containing `chittoortrader.com` has been added to the repo
root — GitHub Pages requires this file to know which domain to serve.

To finish the setup:

1. **Push this repo** (including the new `CNAME` file) to
   `github.com/yaswanthnani007/chittoortrader.github.io`.
2. In the repo, go to **Settings → Pages** and confirm `chittoortrader.com`
   appears under **Custom domain** (GitHub reads it from the `CNAME` file
   automatically once pushed — you can also type it in manually and Save).
3. At **Cloudflare** (in the domain's DNS tab), add these records:
   - Four `A` records, name `@`, pointing to GitHub's IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - A `CNAME` record, name `www`, pointing to
     `yaswanthnani007.github.io`
   - Set these records to **DNS only** (grey cloud, not orange/proxied) at
     first, so GitHub can issue an SSL certificate. You can switch to
     proxied (orange cloud) afterward if you want Cloudflare's CDN/security
     features.
4. Wait for DNS to propagate (usually minutes, sometimes a few hours), then
   go back to **Settings → Pages** and check **Enforce HTTPS**.
5. Visit `https://chittoortrader.com` — it should now show your site.
