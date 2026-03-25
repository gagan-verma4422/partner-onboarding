# Deployment Guide

This package is prepared to live at:

- `https://veem.com/partner-intake-form/`

It expects a submission webhook URL configured in:

- `/partner-intake-form/config.js`

## 1. Static site deployment

Deploy the contents of the `site/partner-intake-form/` folder so these files resolve:

- `/partner-intake-form/`
- `/partner-intake-form/app.js`
- `/partner-intake-form/styles.css`
- `/partner-intake-form/config.js`
- `/partner-intake-form/assets/docs/...`

Important:

- redirect `/partner-intake-form` to `/partner-intake-form/`
- keep the `assets/docs` files under the same folder because the thank-you screen links directly to them

## 2. Zapier webhook contract

The frontend sends:

```json
{
  "event": "veem.partner_onboarding.submitted",
  "submissionId": "uuid-or-random-id",
  "submittedAt": "2026-03-19T12:34:56.000Z",
  "pageUrl": "https://example.com/partner-intake-form/",
  "userAgent": "browser user agent string",
  "contact": {},
  "company": {},
  "selectedDocuments": [
    "Modular KYC Workbook",
    "Account Issuance Overview"
  ],
  "summary": "Plain-text submission summary...",
  "rawData": {
    "contact": {},
    "company": {},
    "role": {},
    "financials": {},
    "modules": {},
    "transactionTypes": [],
    "operatingCountries": [],
    "currencies": [],
    "paymentMethods": {},
    "storageProducts": {},
    "additionalServices": {},
    "collections": {},
    "disbursements": {},
    "additionalInfo": ""
  },
  "responses": {
    "contact": {},
    "company": {},
    "role": {},
    "financials": {},
    "modules": {},
    "transactionTypes": [],
    "operatingCountries": [],
    "currencies": [],
    "paymentMethods": {},
    "storageProducts": {},
    "additionalServices": {},
    "collections": {},
    "disbursements": {},
    "additionalInfo": ""
  }
}
```

The webhook should respond with any `2xx` status. If it returns JSON, the frontend can read:

```json
{
  "ok": true,
  "submissionId": "same-or-new-id"
}
```

If submission fails, return a non-2xx response and optionally:

```json
{
  "ok": false,
  "error": "Human-readable error message"
}
```

## 3. Zapier behavior

Recommended production behavior:

- use a Zapier Catch Hook URL as `submissionWebhookUrl`
- map `rawData` into your Zap or store the entire webhook body
- use `summary` for email/slack-friendly notifications
- use `selectedDocuments` if you want document-based routing or tagging

There is still a sample Node implementation in `deployment/partner-intake-form-submission-handler.example.js` if you ever decide to place your own backend between the site and Zapier.

## 4. Config example

Set the Zapier Catch Hook URL in `/partner-intake-form/config.js`:

```js
window.VEEM_ONBOARDING_CONFIG = {
  submissionWebhookUrl: "https://hooks.zapier.com/hooks/catch/123456/abcdef/"
};
```

## 5. File layout example

```text
/var/www/veem/
  partner-intake-form/
    index.html
    app.js
    styles.css
    config.js
    assets/
      docs/
        veem-account-issuance-overview.pdf
        veem-collections-overview.pdf
        veem-disbursements-overview.pdf
        veem-global-payments-account-coverage.xlsx
        veem-modular-kyc.xlsx
        veem-stablecoin-overview.pdf
```

## 6. Notes for the web team

- The frontend is plain HTML, CSS, and JavaScript. No build step is required.
- Set `config.js` to the final Zapier webhook URL before publishing.
- This package intentionally excludes the old local workbook and Apps Script submission helpers.
