# Emmanuel Owusu Addo — Portfolio

A one-page portfolio site built with React, Tailwind CSS, and Vite.

## Live Sites

- Portfolio: `[your-vercel-url.vercel.app]` *(update after Vercel deployment)*
- LinkedIn: https://www.linkedin.com/in/emmanuel-owusu-addo-67733821a
- GitHub: https://github.com/eyowusu
- Email: emmanuelowusuaddo44@gmail.com

## Projects Featured

- **PayGlobe.net** — Fintech payments platform (live site + private repo, source on request)
- **AbessentiaGH.com** — E-commerce and online shop platform (live site + private repo, source on request)
- **Document Automation Platform** — Editable templates + worksheet upload + auto-generated contracts and documents in bulk or singles (public GitHub repo)
- **School Feeding Program** — Modern Next.js public website with inbuilt admin dashboard for non-technical users to manage content (public GitHub repo)

## Run Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

The output goes to the `dist/` folder.

## Deploy to Vercel

### Option A: Vercel CLI (fastest)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from this folder:
   ```bash
   cd emmanuel-portfolio
   vercel --prod
   ```

### Option B: Vercel Dashboard + GitHub

1. Push this project to a new GitHub repository.
2. Go to https://vercel.com/emmanuelowusuaddo44-5495/dashboard.
3. Click **Add New Project**.
4. Import the GitHub repository you just created.
5. Vercel will auto-detect Vite. Make sure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**.

After deployment, Vercel will give you a public URL like `https://your-project-name.vercel.app`. Copy that URL into your CV and LinkedIn profile.

## Customization

Edit `src/App.jsx` to update projects, skills, links, or text.
