# Dr Ashok Kumar — Personal Website

**Live site:** https://drashokkumarrrc-sudo.github.io/personal-website/

A one-page site built from Dr Ashok Kumar's CV, set up the same way as [amolharsh.github.io](https://amolharsh.github.io): **Next.js 15 (App Router) · Tailwind CSS v4 · TypeScript · React 19**, exported to plain HTML and published on **GitHub Pages** by a GitHub Actions workflow.

Features: light/dark theme (follows the device, with a toggle), scroll progress bar, section highlighting in the menu, mobile menu, "Download CV" buttons, copy-email button, search-engine metadata (including a schema.org `Person` profile), and a clean print layout.

## Edit the content

Everything on the page comes from **`content/data.ts`**: profile, highlights, experience, research, outreach, training, memberships, awards and contact details. Edit the text there; no component changes are needed.

| To change | Do this |
| --- | --- |
| Photo | Save a square photo as `public/profile.jpg`, then set `avatar: "/profile.jpg"` in `content/data.ts`. Until then the initials "AK" are shown. |
| CV download | Replace `public/Dr_Ashok_Kumar_CV.pdf` (keep the file name), or set `cv: ""` to hide the buttons. |
| Phone number | Set `phone: ""` to keep it off the page. The CV PDF contains it too. |
| Organisation logos | Put image files in `public/logos/` and set `logo: "/logos/<file>"` on the role. Without one, the initials (RRC, AIIMS, …) are shown. |
| Accent colour | Change `--color-accent` in `app/globals.css` (one value for light, one for dark). |
| "Last updated" | `site.updated` in `content/data.ts`. |

## Preview on your computer

Needs [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` writes the finished static site to the `out` folder.

To look at the last build without Node.js, serve the `out` folder and open http://localhost:8000:

```bash
python3 -m http.server 8000 --directory out
```

## Publishing on GitHub Pages

Every push to the `main` branch rebuilds and publishes the site. `.github/workflows/deploy.yml` runs `npm run build` on GitHub and uploads the `out` folder to Pages. This needs a public repository with *Settings → Pages → Source* set to **GitHub Actions**. The **Actions** tab shows each run, and the site updates about two minutes after a push.

### Updating the site

- **On github.com:** open `content/data.ts`, click the pencil icon, make the change, and click **Commit changes**. To replace the CV or add a photo, open the `public` folder and use **Add file → Upload files**.
- **From this Mac:** edit the files, then run these in this folder:

  ```bash
  git add -A
  git commit -m "Update site"
  git push
  ```

If a run fails, open it in the **Actions** tab to see which step broke. Fix the problem and push again, or click **Re-run all jobs**.

### Custom domain (optional)

1. Buy a domain (e.g. `drashokkumar.in`) from any registrar.
2. *Settings → Pages → Custom domain* → enter it → **Save**.
3. At the registrar, add DNS records:
   - for the bare domain, four `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - for `www`, a `CNAME` record pointing to `drashokkumarrrc-sudo.github.io`
4. When the DNS check passes, tick **Enforce HTTPS**, and set `site.url` in `content/data.ts` to the new address.

The site then lives at the root of the domain instead of under `/personal-website/`; the workflow adjusts its links on the next run.

### Other free hosts

- **Netlify:** run `npm run build`, then drag the `out` folder onto https://app.netlify.com/drop. Sign up first; sites uploaded without an account are temporary.
- **Cloudflare Pages** also accepts the `out` folder as a direct upload.

## Project structure

- `content/data.ts` — all site content
- `app/` — page layout, metadata, global styles (`globals.css`), favicon (`icon.svg`)
- `components/` — one component per section (Hero, Experience, Research, Outreach, …)
- `lib/links.ts` — helpers for file and phone links
- `public/` — the CV PDF and any images
- `out/` — the built site, made by `npm run build` (not stored in Git)
- `.github/workflows/deploy.yml` — builds and publishes the site on every push to `main`
