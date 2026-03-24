# Veem Partner Intake Form Handoff

## What this project is

This project is a static multi-step intake form for Veem partner onboarding.

Its purpose is to help Veem collect structured information from prospective partners across:

- contact and company information
- selected solution flows
- collections requirements
- disbursement requirements
- product and service interest
- financial profile
- business profile and licensing context

The experience ends with a review screen and a document recommendation / download screen based on the responses entered.

## Current goal

The current work is focused on turning the intake experience into a polished, review-ready questionnaire that:

- matches the latest business requirements
- reflects updated product and content decisions
- is easier to review internally with stakeholders
- feels visually aligned with Veem branding

This is an actively iterated prototype / deployable static form, not a finished long-term production application.

## Project structure

- `site/partner-onboarding/`
  Main static app version.
- `docs/`
  GitHub Pages / docs-hosted version of the same app.
- `deployment/`
  Deployment notes and example backend submission handler.
- `docs/team-feedback-questionnaire-outline.md`
  Stakeholder review document that mirrors the current form structure and wording.

Important:

- `site/partner-onboarding/` and `docs/` must stay in sync.
- Most product and UI changes were applied to both copies.

## Tech approach

This project uses:

- plain HTML
- plain CSS
- plain JavaScript

There is no frontend framework and no build step.

The form logic, rendering, conditional steps, validation, and review screen behavior are handled in `app.js`.

## Current form flow

The current questionnaire order is:

1. Contact Information
2. Flow Selection
3. Collection Information
   Only shown if `Collections` is selected
4. Disbursement Information
   Only shown if `Disbursements` is selected
5. Product Scope
6. Financial Profile
7. Business Profile
8. Review
9. Thank You / Available Documents

The sidebar uses progressive locking:

- future sections stay locked
- sections unlock through the `Continue` action
- step visibility depends on selected flow where applicable

## Key business/content updates already made

- Renamed the experience to `Veem Partner Intake Form`
- Reordered the flow so `Product Scope` appears before `Financial Profile`
- Removed `Transaction types`
- Removed the old `Markets and currencies` section from Product Scope
- Merged payment methods and money storage into one `Products` section
- Reduced `Additional services` to:
  - Plaid Bank Account Verification
  - Risk Services
- Updated Flow Selection descriptions for Collections and Disbursements
- Added `Sole proprietors` to relevant user-type questions
- Removed numeric placeholders from payer / payee count fields
- Made `Are these users actual or estimated?` required with no default selection
- Replaced the old `Who is the end customer?` question with an optional flow-of-funds chart upload when the business is in the flow of funds
- Updated Review summary behavior and document page messaging

## Current product scope

Products currently listed:

- Standard ACH
- Same Day ACH
- RTP
- Swift Wire
- Named Virtual Accounts
- Foreign Exchange
- Card Acquiring
- Card Issuance
- Stablecoin

Additional services currently listed:

- Plaid Bank Account Verification
- Risk Services

## Current UI / branding direction

The form has been restyled toward a Veem-aligned visual language with:

- dark sidebar
- white content panels
- blue primary accents
- orange CTA usage in limited places
- rounded pills, tags, and cards

Recent UI work has mainly focused on:

- reducing visual clutter
- improving consistency between selected states
- aligning the Review and Documents pages with the rest of the form
- flattening overly heavy shadows and background glow effects

## Ongoing development

The project is still being refined in these areas:

- final visual polish and consistency between local and GitHub-hosted rendering
- continued tuning of shadows, selected states, and card styling
- maintaining parity between `site/partner-onboarding` and `docs`
- continued copy review with stakeholders
- validating whether the current questions and order are final

## Known implementation notes

- The app is static and does not require a build step.
- The thank-you page recommends downloadable documents based on answers in the form.
- The optional flow-of-funds upload is currently a UI-level file picker; it does not implement full backend file storage.
- The deployment folder includes an example backend handler, but backend integration may still need production wiring depending on deployment target.

## How to continue work safely

- Always update both:
  - `site/partner-onboarding/app.js`
  - `docs/app.js`
  - `site/partner-onboarding/styles.css`
  - `docs/styles.css`
- If content changes, also review:
  - `docs/team-feedback-questionnaire-outline.md`
- Check both local versions after UI or logic changes:
  - `http://127.0.0.1:4173/`
  - `http://127.0.0.1:4174/`
- Be careful not to reintroduce removed fields such as transaction types unless explicitly requested.

## Suggested next steps

- finalize visual cleanup for hosted rendering
- confirm remaining stakeholder feedback on wording and section order
- decide whether the file upload needs real backend handling
- do a final sync pass between app behavior and the review questionnaire doc
- prepare a stable release / deployment pass once content and styling are approved
