<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" />
</p>
<h1 align="center">Personal portfolio</h1>

[![Site preview](/public/site-preview.png)](https://ubaid.ai)

Portfolio site for Ubaid ur Rehman — AI Engineer. Built with [Remix](https://remix.run/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/).

## Install & run

Make sure you have Node.js `19.9.0` or higher and npm installed. Install dependencies with:

```bash
npm install
```

Once it's done start up a local server with:

```bash
npm run dev
```

To view the components storybook:

```bash
npm run dev:storybook
```

## Deployment

The site is set up for Cloudflare Pages. Deploy the site to Cloudflare Pages:

```bash
npm run deploy
```

## FAQs

<details>
  <summary>How do I get the contact form to work?</summary>
  
  Set up a free account at [Resend](https://resend.com), get an API key, and configure `RESEND_API_KEY` and `EMAIL` in `.dev.vars` (for dev) or Cloudflare Pages environment variables (for production).
</details>
