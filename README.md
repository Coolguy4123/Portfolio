# Freeman Yiu — Portfolio

A Next.js portfolio focused on autonomous vehicles, robotics, machine learning,
data science, and software engineering.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to GitHub Pages

The site is configured as a static Next.js export and deploys automatically from
`main` with `.github/workflows/deploy-pages.yml`.

1. Push the repository to `Coolguy4123/Portfolio`.
2. In the GitHub repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Run the workflow or push to `main`.

The published URL will be `https://coolguy4123.github.io/Portfolio/`.

For a different repository name, update `NEXT_PUBLIC_BASE_PATH` in the workflow.

## Production build

```bash
npm run build
```

The static site is generated in `out/`.
