# Veem Partner Intake Form

This project is a static multi-step partner intake form intended to be published at:

- `https://veem.com/partner-intake-form/`

## What to deploy

Deploy the contents of:

- `site/partner-intake-form/`

That folder contains the production site files:

- `index.html`
- `app.js`
- `styles.css`
- `config.js`
- `assets/docs/...`

## Required deployment steps

1. Publish all files from `site/partner-intake-form/` to the web path:
   - `/partner-intake-form/`

2. Make sure these URLs resolve on `veem.com`:
   - `/partner-intake-form/`
   - `/partner-intake-form/app.js`
   - `/partner-intake-form/styles.css`
   - `/partner-intake-form/config.js`
   - `/partner-intake-form/assets/docs/...`

3. Redirect:
   - `/partner-intake-form`
   to
   - `/partner-intake-form/`

4. Set the submission endpoint in:
   - `site/partner-intake-form/config.js`

   The current file uses a Zapier webhook. Replace it with the final production webhook or endpoint before launch.

5. Ensure the submission endpoint accepts the form POST request and returns a `2xx` response on success.

6. Verify the downloadable files in `assets/docs/` remain publicly accessible, because the Thank You screen links directly to them.

## Submission behavior

The frontend is already wired to submit from `config.js`.

Before publishing, confirm `submissionWebhookUrl` points to the correct production destination.

Example:

```js
window.VEEM_ONBOARDING_CONFIG = {
  submissionWebhookUrl: "https://your-production-endpoint"
};
```

## Important notes

- No build step is required.
- The frontend is plain HTML, CSS, and JavaScript.
- `docs/` is the GitHub Pages mirror, not the primary production deployment target.
- If the live form changes, keep both copies in sync:
  - `site/partner-intake-form/`
  - `docs/`

## Helpful files

- `deployment/DEPLOYMENT.md`
- `deployment/nginx.partner-intake-form.conf.example`
- `deployment/partner-intake-form-submission-handler.example.js`
- `docs/project-handoff.md`
- `docs/team-feedback-questionnaire-outline.md`
