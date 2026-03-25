# Veem Partner Onboarding Handoff

This package is prepared for deployment at:

- `https://veem.com/partner-intake-form/`

## Package layout

- [site/partner-onboarding](/Users/danielsinukoff/Documents/veem-partner-onboarding-handoff/site/partner-onboarding)
  This is the static microsite your web team should deploy at `/partner-onboarding/`.

- [deployment/DEPLOYMENT.md](/Users/danielsinukoff/Documents/veem-partner-onboarding-handoff/deployment/DEPLOYMENT.md)
  This is the main implementation guide for the web team.

- [deployment/nginx.partner-onboarding.conf.example](/Users/danielsinukoff/Documents/veem-partner-onboarding-handoff/deployment/nginx.partner-onboarding.conf.example)
  Example Nginx config for serving the microsite and proxying the submission API.

- [deployment/email-submission-handler.example.js](/Users/danielsinukoff/Documents/veem-partner-onboarding-handoff/deployment/email-submission-handler.example.js)
  Example backend endpoint that accepts submissions and emails them to your team.

## What the web team should do

1. Deploy everything inside `site/partner-onboarding/` to the public path `/partner-onboarding/`.
2. Stand up `POST /api/partner-onboarding/submissions` on the main site.
3. Wire that endpoint to send submission emails to the intended internal inbox.
4. Use the Nginx example if helpful for routing.

## Notes

- No frontend build step is required.
- The frontend is already configured to submit to `/api/partner-onboarding/submissions`.
- The downloadable PDFs/XLSX files are inside `site/partner-onboarding/assets/docs/`.
