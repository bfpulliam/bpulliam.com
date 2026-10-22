# bpulliam.com

Portfolio for Bettina Pulliam, Lead Web Software Engineer.

Built with Next.js (static export), TypeScript and Tailwind CSS, hosted on AWS Amplify.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```

## Update content

All text, projects, skills and experience live in `content/site.ts`. Project media lives in `public/work/`.

## Deploy

Connect this repo's `main` branch in AWS Amplify Hosting. `amplify.yml` builds the site and publishes `out/`. Add `bpulliam.com` under Amplify's custom domains, then remove `CNAME` once DNS points to Amplify.

The previous site is kept in `legacy/` until its cleanup is done.
