# Chittoor Trader

A single-page static website for **Yashwanth G** — a personal trading ledger
covering his story, his 90% psychology / 10% strategy philosophy, his trading
rules, and his two biggest influences: Jesse Livermore and Mark Douglas.

## Files

```
chittoortrader/
├── index.html      → all page content
├── style.css       → the ledger/ticker-tape visual design
├── script.js       → small scroll-reveal effect (no dependencies)
├── assets/         → empty on purpose, see assets/README.txt
└── README.md       → this file
```

It's 100% static — no build step, no framework, no server required.

## Image licensing notes

- **Jesse Livermore's photo** is loaded directly from Wikimedia Commons
  (a public-domain 1940 press photo), so nothing needs to be uploaded.
- **Mark Douglas** has no known freely-licensed photo available online, so
  the site shows a designed "MD" monogram card instead of risking a
  copyrighted image. See `assets/README.txt` for how to swap in a licensed
  photo later if you get one.
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

## Adding a custom domain later (optional, not required now)

Whenever you do buy a domain (e.g. `chittoortrader.com`):
1. In **Settings → Pages**, enter it under **Custom domain** and save.
   GitHub will create a `CNAME` file in your repo automatically.
2. At your domain registrar, add these DNS records:
   - Four `A` records for the apex domain pointing to GitHub's IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - A `CNAME` record for `www` pointing to `YOUR-USERNAME.github.io`
3. Wait for DNS to propagate (can take a few hours), then check
   **Enforce HTTPS** back in the Pages settings.

You don't need to do any of this today — the free `github.io` URL works
immediately and is a normal way to host a personal site long-term.
