const MODULES = [
  {
    key: "collections",
    label: "Collections",
    description:
      "Receive funds through Standard ACH, Same Day ACH, RTP, Swift Wire, Named Virtual Accounts, Card Acquiring, Foreign Exchange, and Stablecoin.",
  },
  {
    key: "disbursements",
    label: "Disbursements",
    description:
      "Send or deliver funds through Standard ACH, Same Day ACH, RTP, Swift Wire, Foreign Exchange, Card Issuance, and Stablecoin.",
  },
  {
    key: "accounts",
    label: "Accounts",
    description:
      "Launch stored-balance experiences with multi-currency wallets, virtual bank accounts, stablecoin wallets, and virtual card issuance.",
  },
];

const PAYMENT_METHODS = [
  {
    key: "standardAch",
    label: "Standard ACH",
    description: "Veem's standard domestic U.S. bank transfer option for lower-cost transactions where moderate settlement speed is acceptable.",
  },
  {
    key: "sameDayAch",
    label: "Same Day ACH",
    description: "Domestic U.S. ACH with same-day settlement for faster bank movement when timing matters.",
  },
  {
    key: "rtp",
    label: "RTP",
    description: "Real-Time Payments for instant U.S. bank transfers and immediate settlement in time-sensitive use cases.",
  },
  {
    key: "swiftWire",
    label: "Swift Wire",
    description: "Domestic or cross-border USD wire transfers through the SWIFT network for direct bank-to-bank settlement.",
  },
  {
    key: "namedVirtualAccounts",
    label: "Named Virtual Accounts",
    description: "Unique U.S.-based account and routing numbers that support incoming payments, reconciliation, and account-level tracking.",
  },
  {
    key: "foreignExchange",
    label: "Foreign Exchange",
    description: "Currency conversion supported by institutional liquidity providers for cross-border payments and treasury movement.",
  },
  {
    key: "cardAcquiring",
    label: "Card Acquiring",
    description: "Card-funded payment acceptance for partners taking debit or credit card payments.",
  },
  {
    key: "cardIssuance",
    label: "Card Issuance",
    description: "Commercial prepaid card issuance, including virtual card experiences for wallets and ecommerce use cases.",
  },
  {
    key: "stablecoin",
    label: "Stablecoin",
    description: "USDC and USDT on-ramp and off-ramp support across multiple blockchain networks with routed settlement options.",
  },
];

const ADDITIONAL_SERVICES = [
  {
    key: "plaidBankAccountVerification",
    label: "Plaid Bank Account Verification",
    description: "Secure bank account verification services that support account ownership, identity, and bank connection validation.",
  },
  {
    key: "riskServices",
    label: "Risk Services",
    description: "Additional risk controls and related support services for managing payment and compliance exposure.",
  },
];

const TRANSACTION_TYPES = [
  "Domestic",
  "FX",
  "Cross border USD",
  "Money storage accounts only",
];

const ENTITY_TYPES = [
  { value: "corporation", label: "Corporation" },
  { value: "llc", label: "LLC" },
  { value: "partnership", label: "Partnership" },
  { value: "sole-proprietorship", label: "Sole proprietorship" },
  { value: "nonprofit", label: "Nonprofit" },
  { value: "other", label: "Other" },
];

const RANGE_OPTIONS = {
  revenue: [
    "< $1M",
    "$1M - $5M",
    "$5M - $10M",
    "$10M - $25M",
    "$25M - $100M",
    "$100M+",
  ],
  volume: [
    "< $5M",
    "$5M - $25M",
    "$25M - $100M",
    "$100M - $250M",
    "$250M - $1B",
    "$1B+",
  ],
  payments: [
    "< 10K",
    "10K - 100K",
    "100K - 500K",
    "500K - 1M",
    "1M - 10M",
    "10M+",
  ],
};

const CURRENCY_OPTIONS = [
  "USD",
  "EUR",
  "GBP",
  "CAD",
  "AUD",
  "MXN",
  "SGD",
  "JPY",
  "AED",
  "SAR",
  "INR",
  "CNY",
  "HKD",
  "NZD",
  "PHP",
  "IDR",
  "KRW",
  "THB",
  "TRY",
  "ZAR",
  "USDC",
  "USDT",
];

const COUNTRY_OPTIONS = [
  { region: "North America", code: "CA", name: "Canada" },
  { region: "North America", code: "MX", name: "Mexico" },
  { region: "North America", code: "US", name: "United States" },
  { region: "Central America", code: "CR", name: "Costa Rica" },
  { region: "Central America", code: "GT", name: "Guatemala" },
  { region: "Central America", code: "HN", name: "Honduras" },
  { region: "Caribbean", code: "BS", name: "Bahamas" },
  { region: "Caribbean", code: "BB", name: "Barbados" },
  { region: "Caribbean", code: "BM", name: "Bermuda" },
  { region: "Caribbean", code: "KY", name: "Cayman Islands" },
  { region: "Caribbean", code: "DO", name: "Dominican Republic" },
  { region: "Caribbean", code: "JM", name: "Jamaica" },
  { region: "Caribbean", code: "TT", name: "Trinidad & Tobago" },
  { region: "South America", code: "AR", name: "Argentina" },
  { region: "South America", code: "BR", name: "Brazil" },
  { region: "South America", code: "CL", name: "Chile" },
  { region: "South America", code: "CO", name: "Colombia" },
  { region: "South America", code: "EC", name: "Ecuador" },
  { region: "South America", code: "PE", name: "Peru" },
  { region: "South America", code: "UY", name: "Uruguay" },
  { region: "Europe", code: "AL", name: "Albania" },
  { region: "Europe", code: "AT", name: "Austria" },
  { region: "Europe", code: "BE", name: "Belgium" },
  { region: "Europe", code: "BG", name: "Bulgaria" },
  { region: "Europe", code: "HR", name: "Croatia" },
  { region: "Europe", code: "CY", name: "Cyprus" },
  { region: "Europe", code: "CZ", name: "Czech Republic" },
  { region: "Europe", code: "DK", name: "Denmark" },
  { region: "Europe", code: "EE", name: "Estonia" },
  { region: "Europe", code: "FI", name: "Finland" },
  { region: "Europe", code: "FR", name: "France" },
  { region: "Europe", code: "GE", name: "Georgia" },
  { region: "Europe", code: "DE", name: "Germany" },
  { region: "Europe", code: "GR", name: "Greece" },
  { region: "Europe", code: "HU", name: "Hungary" },
  { region: "Europe", code: "IS", name: "Iceland" },
  { region: "Europe", code: "IE", name: "Ireland" },
  { region: "Europe", code: "IT", name: "Italy" },
  { region: "Europe", code: "LV", name: "Latvia" },
  { region: "Europe", code: "LI", name: "Liechtenstein" },
  { region: "Europe", code: "LT", name: "Lithuania" },
  { region: "Europe", code: "LU", name: "Luxembourg" },
  { region: "Europe", code: "MT", name: "Malta" },
  { region: "Europe", code: "MC", name: "Monaco" },
  { region: "Europe", code: "NL", name: "Netherlands" },
  { region: "Europe", code: "NO", name: "Norway" },
  { region: "Europe", code: "PL", name: "Poland" },
  { region: "Europe", code: "PT", name: "Portugal" },
  { region: "Europe", code: "RO", name: "Romania" },
  { region: "Europe", code: "RS", name: "Serbia" },
  { region: "Europe", code: "SK", name: "Slovakia" },
  { region: "Europe", code: "SI", name: "Slovenia" },
  { region: "Europe", code: "ES", name: "Spain" },
  { region: "Europe", code: "SE", name: "Sweden" },
  { region: "Europe", code: "CH", name: "Switzerland" },
  { region: "Europe", code: "UA", name: "Ukraine" },
  { region: "Europe", code: "GB", name: "United Kingdom" },
  { region: "Middle East", code: "BH", name: "Bahrain" },
  { region: "Middle East", code: "IL", name: "Israel" },
  { region: "Middle East", code: "JO", name: "Jordan" },
  { region: "Middle East", code: "KW", name: "Kuwait" },
  { region: "Middle East", code: "LB", name: "Lebanon" },
  { region: "Middle East", code: "OM", name: "Oman" },
  { region: "Middle East", code: "QA", name: "Qatar" },
  { region: "Middle East", code: "SA", name: "Saudi Arabia" },
  { region: "Middle East", code: "AE", name: "United Arab Emirates" },
  { region: "Africa", code: "DZ", name: "Algeria" },
  { region: "Africa", code: "EG", name: "Egypt" },
  { region: "Africa", code: "SZ", name: "Eswatini" },
  { region: "Africa", code: "KE", name: "Kenya" },
  { region: "Africa", code: "MW", name: "Malawi" },
  { region: "Africa", code: "MU", name: "Mauritius" },
  { region: "Africa", code: "MA", name: "Morocco" },
  { region: "Africa", code: "MZ", name: "Mozambique" },
  { region: "Africa", code: "NG", name: "Nigeria" },
  { region: "Africa", code: "ZA", name: "South Africa" },
  { region: "Africa", code: "TN", name: "Tunisia" },
  { region: "Africa", code: "UG", name: "Uganda" },
  { region: "Africa", code: "ZM", name: "Zambia" },
  { region: "APAC", code: "AM", name: "Armenia" },
  { region: "APAC", code: "AU", name: "Australia" },
  { region: "APAC", code: "BD", name: "Bangladesh" },
  { region: "APAC", code: "BN", name: "Brunei Darussalam" },
  { region: "APAC", code: "CN", name: "China" },
  { region: "APAC", code: "FJ", name: "Fiji" },
  { region: "APAC", code: "HK", name: "Hong Kong" },
  { region: "APAC", code: "IN", name: "India" },
  { region: "APAC", code: "ID", name: "Indonesia" },
  { region: "APAC", code: "JP", name: "Japan" },
  { region: "APAC", code: "KZ", name: "Kazakhstan" },
  { region: "APAC", code: "KR", name: "Korea (South)" },
  { region: "APAC", code: "MO", name: "Macao" },
  { region: "APAC", code: "MY", name: "Malaysia" },
  { region: "APAC", code: "NP", name: "Nepal" },
  { region: "APAC", code: "NZ", name: "New Zealand" },
  { region: "APAC", code: "PK", name: "Pakistan" },
  { region: "APAC", code: "PH", name: "Philippines" },
  { region: "APAC", code: "SG", name: "Singapore" },
  { region: "APAC", code: "LK", name: "Sri Lanka" },
  { region: "APAC", code: "TW", name: "Taiwan" },
  { region: "APAC", code: "TH", name: "Thailand" },
  { region: "APAC", code: "TR", name: "Turkey" },
  { region: "APAC", code: "VN", name: "Vietnam" },
];

const FLOW_MODULE_KEYS = ["collections", "disbursements"];

const STEP_CONTENT = {
  intro: {
    eyebrow: "Contact Information",
    title: "Provide contact information.",
    description:
      "Please provide the primary contact details for this inquiry together with basic company information.",
    footer:
      "This information will be used for follow-up correspondence.",
  },
  role: {
    eyebrow: "Business Profile",
    title: "Provide business profile and licensing information.",
    description:
      "",
    footer:
      "Please answer based on your current operating model.",
  },
  financials: {
    eyebrow: "Financial Profile",
    title: "Provide current scale and expected growth.",
    description:
      "Please provide directional ranges for revenue, payment volume, payment count, and expected growth over the next 12 months.",
    footer:
      "Approximate figures are acceptable.",
  },
  solutions: {
    eyebrow: "Flow Selection",
    title: "Choose the solution areas you would like to discuss.",
    description:
      "Select collections, disbursements, or both.",
    footer:
      "",
  },
  markets: {
    eyebrow: "Product Scope",
    title: "Identify products and services.",
    description:
      "Select the products and additional services most relevant to your business.",
    footer:
      "Please focus on the solutions most relevant to your near-term plans.",
  },
  collections: {
    eyebrow: "Collections Information",
    title: "Provide information on originating users.",
    description:
      "Please provide information on the users who send funds into your collections flow.",
    footer:
      "This information helps us assess your collections requirements.",
  },
  disbursements: {
    eyebrow: "Disbursement Information",
    title: "Provide information on receiving users.",
    description:
      "Please provide information on the users who receive funds from your disbursement flow.",
    footer:
      "This information helps us assess your disbursement requirements.",
  },
  review: {
    eyebrow: "Review",
    title: "Review your responses and provide any additional context.",
    description:
      "You may use this section to provide implementation considerations, launch timing, priorities, or any other relevant context.",
    footer:
      "Continue to view the available documents.",
  },
  thankyou: {
    eyebrow: "Documents",
    title: "Thank you for your submission.",
    description:
      "Based on the information provided, the following documents are available for download.",
  },
};

const DOCUMENT_LIBRARY = {
  kyc: {
    id: "kyc",
    title: "Modular KYC Workbook",
    format: "XLSX",
    badge: "Included with all submissions",
    description:
      "Reference workbook covering base and add-on KYC fields for payment processing, stored value, and issuance scenarios.",
    href: "./assets/docs/veem-modular-kyc.xlsx",
  },
  accountIssuance: {
    id: "accountIssuance",
    title: "Account Issuance Overview",
    format: "PDF",
    badge: "Included with all submissions",
    description:
      "Overview of account issuance and stored-balance partner capabilities, including wallet and account concepts.",
    href: "./assets/docs/veem-account-issuance-overview.pdf",
  },
  coverage: {
    id: "coverage",
    title: "Global Payments & Account Coverage",
    format: "XLSX",
    badge: "Included with all submissions",
    description:
      "Coverage workbook for collections, disbursements, and accounts by country, payment method, and currency.",
    href: "./assets/docs/veem-global-payments-account-coverage.xlsx",
  },
  collections: {
    id: "collections",
    title: "Collections Overview",
    format: "PDF",
    badge: "Included based on your responses",
    description:
      "Partner overview for collection flows, payer-side coverage, and relevant collection solution detail.",
    href: "./assets/docs/veem-collections-overview.pdf",
  },
  disbursements: {
    id: "disbursements",
    title: "Disbursements Overview",
    format: "PDF",
    badge: "Included based on your responses",
    description:
      "Partner overview for payout and delivery flows, including beneficiary-side capabilities and payout options.",
    href: "./assets/docs/veem-disbursements-overview.pdf",
  },
  stablecoin: {
    id: "stablecoin",
    title: "Stablecoin Overview",
    format: "PDF",
    badge: "Included based on your responses",
    description:
      "Overview of Veem's stablecoin-linked flows across collections, wallets, and disbursements.",
    href: "./assets/docs/veem-stablecoin-overview.pdf",
  },
};

const APP_CONFIG = window.VEEM_ONBOARDING_CONFIG || {};
const SUBMISSION_WEBHOOK_URL = String(APP_CONFIG.submissionWebhookUrl || "").trim();
const escapeSelectorValue = (value) => {
  const stringValue = String(value ?? "");
  if (globalThis.CSS && typeof globalThis.CSS.escape === "function") {
    return globalThis.CSS.escape(stringValue);
  }

  return stringValue.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
};

const countryLookup = new Map(COUNTRY_OPTIONS.map((country) => [country.code, country]));
const COUNTRY_SEARCH_OPTIONS = COUNTRY_OPTIONS.map((country) => ({
  value: country.code,
  label: country.name,
  meta: country.code,
  keywords: `${country.name} ${country.code} ${country.region}`,
}));
const CURRENCY_SEARCH_OPTIONS = CURRENCY_OPTIONS.map((currency) => ({
  value: currency,
  label: currency,
  keywords: currency,
}));
const SEARCH_SELECTOR_DEFINITIONS = {
  operatingCountries: {
    options: COUNTRY_SEARCH_OPTIONS,
    placeholder: "Search countries",
    selectionLabel: "selected",
    emptySelectionLabel: "Selected countries will appear here.",
  },
  currencies: {
    options: CURRENCY_SEARCH_OPTIONS,
    placeholder: "Search currencies",
    selectionLabel: "selected",
    emptySelectionLabel: "Selected currencies will appear here.",
  },
  "collections.senderCountries": {
    options: COUNTRY_SEARCH_OPTIONS,
    placeholder: "Search countries",
    selectionLabel: "selected",
    emptySelectionLabel: "Selected countries will appear here.",
  },
  "collections.senderCurrencies": {
    options: CURRENCY_SEARCH_OPTIONS,
    placeholder: "Search currencies",
    selectionLabel: "selected",
    emptySelectionLabel: "Selected currencies will appear here.",
  },
  "disbursements.receiverCountries": {
    options: COUNTRY_SEARCH_OPTIONS,
    placeholder: "Search countries",
    selectionLabel: "selected",
    emptySelectionLabel: "Selected countries will appear here.",
  },
  "disbursements.receiverCurrencies": {
    options: CURRENCY_SEARCH_OPTIONS,
    placeholder: "Search currencies",
    selectionLabel: "selected",
    emptySelectionLabel: "Selected currencies will appear here.",
  },
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

let currentStepIndex = 0;
let maxUnlockedStepIndex = 0;
let activeErrors = [];
const selectorUiState = {};
const submissionState = {
  status: "idle",
  submittedAt: "",
  submissionId: "",
};

const state = {
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
  },
  company: {
    companyName: "",
    entityType: "",
    url: "",
  },
  role: {
    inFlow: "",
    flowOfFundsChart: null,
    licensed: "",
    additionalLicenses: "",
    additionalLicenseLocations: "",
    pricingModel: "",
  },
  financials: {
    revenueRange: "",
    companyGrowth: 30,
    annualVolumeRange: "",
    paymentCountRange: "",
    averageTicket: 2500,
  },
  modules: buildInterestMap(MODULES),
  transactionTypes: [],
  operatingCountries: [],
  currencies: ["USD"],
  paymentMethods: buildVolumeInterestMap(PAYMENT_METHODS),
  additionalServices: buildInterestMap(ADDITIONAL_SERVICES),
  collections: {
    senderTypes: [],
    payerCount: "",
    payerCountBasis: "",
    senderCountries: [],
    senderCurrencies: ["USD"],
  },
  disbursements: {
    receiverTypes: [],
    highRiskIndustries: "",
    payeeCount: "",
    payeeCountBasis: "",
    receiverCountries: [],
    receiverCurrencies: ["USD"],
  },
  additionalInfo: "",
};

const app = document.getElementById("app");

if (app instanceof HTMLElement) {
  app.addEventListener("click", handleClick);
  app.addEventListener("input", handleInput);
  app.addEventListener("change", handleInput);
  app.addEventListener("keydown", handleKeyDown);
  app.addEventListener("focusout", handleBlur);
  render();
} else {
  console.error('Partner onboarding app could not start because the "#app" container was not found.');
}

function buildInterestMap(items) {
  return Object.fromEntries(items.map((item) => [item.key, { current: false, interested: false }]));
}

function buildVolumeInterestMap(items) {
  return Object.fromEntries(
    items.map((item) => [
      item.key,
      {
        current: false,
        interested: false,
        share: 20,
        shareBasis: "current",
      },
    ])
  );
}

function buildSteps() {
  const steps = [
    { id: "intro", validate: validateIntro },
    { id: "solutions", validate: validateSolutions },
  ];

  if (!getSelectedFlowLabels().length) {
    return steps;
  }

  if (isModuleSelected("collections")) {
    steps.push({ id: "collections", validate: validateCollections });
  }

  if (isModuleSelected("disbursements")) {
    steps.push({ id: "disbursements", validate: validateDisbursements });
  }

  steps.push({ id: "markets", validate: validateMarkets });
  steps.push({ id: "financials", validate: validateFinancials });
  steps.push({ id: "role", validate: validateRole });
  steps.push({ id: "review", validate: () => [] });
  steps.push({ id: "thankyou", validate: () => [] });
  return steps;
}

function ensureLayout() {
  if (app.dataset.layoutReady === "true") {
    return;
  }

  app.innerHTML = `
    <main class="page-shell">
      <div class="shell-frame">
        <aside class="sidebar">
          <div class="brand-lockup">
            <div class="brand-chip">
              <span class="brand-chip__dot"></span>
              Veem Partner Intake Form
            </div>
          </div>

          <div class="step-map" data-render="step-map"></div>
        </aside>

        <section class="question-panel">
          <div class="panel-inner">
            <header class="panel-header" data-render="panel-header"></header>
            <div class="step-body" data-render="step-body"></div>
            <footer class="step-footer" data-render="step-footer"></footer>
          </div>
        </section>
      </div>
    </main>
  `;

  app.dataset.layoutReady = "true";
}

function render() {
  ensureLayout();

  const steps = buildSteps();
  currentStepIndex = Math.min(currentStepIndex, steps.length - 1);
  maxUnlockedStepIndex = Math.max(currentStepIndex, Math.min(maxUnlockedStepIndex, steps.length - 1));
  const currentStep = steps[currentStepIndex];
  const currentContent = STEP_CONTENT[currentStep.id];
  const recommendedDocs = getRecommendedDocs();
  const stepMap = app.querySelector('[data-render="step-map"]');
  const panelHeader = app.querySelector('[data-render="panel-header"]');
  const stepBody = app.querySelector('[data-render="step-body"]');
  const stepFooter = app.querySelector('[data-render="step-footer"]');

  stepMap.innerHTML = `
    <p class="step-map__title">Questionnaire map</p>
    <div class="step-list">
      ${steps
        .map((step, index) => {
          const content = STEP_CONTENT[step.id];
          const isUnlocked = index <= maxUnlockedStepIndex;
          const statusClass =
            index === currentStepIndex
              ? "is-active"
              : index < currentStepIndex
                ? "is-complete"
                : "";
          if (step.id === "thankyou" && submissionState.status !== "success") return "";
          return `
            <button
              class="step-item ${statusClass} ${isUnlocked ? "is-clickable" : "is-locked"}"
              type="button"
              data-action="goto-step"
              data-step-index="${index}"
              ${isUnlocked ? "" : "disabled"}
            >
              <div class="step-item__index">${index + 1}</div>
              <div class="step-item__copy">
                <strong>${escapeHtml(content.eyebrow)}</strong>
                <span>${escapeHtml(content.title)}</span>
              </div>
            </button>
          `;
        })
        .join("")}
    </div>
  `;

  panelHeader.innerHTML = `
    <p class="panel-header__eyebrow">${escapeHtml(currentContent.eyebrow)}</p>
    <h2>${escapeHtml(currentContent.title)}</h2>
    <p>${escapeHtml(currentContent.description)}</p>
    <div class="progress-rail">
      <span style="width: ${Math.round(((currentStepIndex + 1) / steps.length) * 100)}%"></span>
    </div>
  `;

  stepBody.innerHTML = `
    ${activeErrors.length ? renderErrorBox(activeErrors) : ""}
    ${renderStepContent(currentStep.id, recommendedDocs)}
  `;

  if (currentStep.id === "thankyou") {
    stepFooter.hidden = true;
    stepFooter.className = "step-footer";
    stepFooter.innerHTML = "";
    return;
  }

  stepFooter.hidden = false;
  stepFooter.className = `step-footer ${currentContent.footer ? "" : "is-actions-only"}`.trim();
  stepFooter.innerHTML = `
    ${currentContent.footer ? `<div class="footer-copy">${escapeHtml(currentContent.footer)}</div>` : ""}
    <div class="footer-actions">
      ${
        currentStepIndex > 0
          ? `<button class="ghost-button" type="button" data-action="prev-step" ${submissionState.status === "submitting" ? "disabled" : ""}>Previous</button>`
          : ""
      }
      <button class="button" type="button" data-action="next-step" ${submissionState.status === "submitting" ? "disabled" : ""}>
        ${
          submissionState.status === "submitting"
            ? "Submitting..."
            : currentStep.id === "review"
              ? "Submit and view documents"
              : "Continue"
        }
      </button>
    </div>
  `;
}

function renderStepContent(stepId, recommendedDocs) {
  switch (stepId) {
    case "intro":
      return renderIntroStep();
    case "role":
      return renderRoleStep();
    case "financials":
      return renderFinancialsStep();
    case "solutions":
      return renderSolutionsStep();
    case "markets":
      return renderMarketsStep();
    case "collections":
      return renderCollectionsStep();
    case "disbursements":
      return renderDisbursementsStep();
    case "review":
      return renderReviewStep(recommendedDocs);
    case "thankyou":
      return renderThankYouStep(recommendedDocs);
    default:
      return "";
  }
}

function renderIntroStep() {
  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Primary contact</h3>
        <p class="section-card__intro">Please provide the primary contact for this inquiry.</p>
        <div class="field-grid">
          ${renderTextField("First name *", "contact.firstName", state.contact.firstName, "text", "Ada", "is-half")}
          ${renderTextField("Last name *", "contact.lastName", state.contact.lastName, "text", "Lovelace", "is-half")}
          ${renderTextField("Email *", "contact.email", state.contact.email, "email", "name@company.com", "is-half")}
          ${renderTextField("WhatsApp number", "contact.whatsapp", state.contact.whatsapp, "tel", "+1 555 000 0000", "is-half")}
        </div>
      </section>

      <section class="section-card">
        <h3>Company details</h3>
        <p class="section-card__intro">Please provide basic company information.</p>
        <div class="field-grid">
          ${renderTextField("Company name *", "company.companyName", state.company.companyName, "text", "Acme Payments", "is-half")}
          ${renderSelectField("Entity type *", "company.entityType", state.company.entityType, ENTITY_TYPES, "Choose one", "is-half")}
          ${renderTextField("URL", "company.url", state.company.url, "url", "https://www.company.com")}
        </div>
      </section>
    </div>
  `;
}

function renderRoleStep() {
  const selectedFlowPhrase = getSelectedFlowPhrase();

  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Business profile</h3>
        <p class="section-card__intro">Please provide information on your role in the flow of funds and your licensing status for ${escapeHtml(selectedFlowPhrase)}.</p>
        <div class="field-grid">
          <div class="field">
            <label>Are you currently in the flow of funds business? *</label>
            ${renderSegmentedButtons("role.inFlow", state.role.inFlow, [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ])}
          </div>

          ${
            state.role.inFlow === "yes"
              ? renderFileField(
                  "Please provide a flow of funds chart (optional)",
                  "role.flowOfFundsChart",
                  state.role.flowOfFundsChart,
                  ".pdf,.png,.jpg,.jpeg,.doc,.docx,.ppt,.pptx,.xls,.xlsx",
                  "Upload a file if available."
                )
              : ""
          }

          <div class="field is-half">
            <label>Are you licensed in the countries in which you operate? *</label>
            ${renderSegmentedButtons("role.licensed", state.role.licensed, [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ])}
          </div>

          <div class="field is-half">
            <label>Do you hold any additional licenses? *</label>
            ${renderSegmentedButtons("role.additionalLicenses", state.role.additionalLicenses, [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ])}
          </div>

          ${
            state.role.additionalLicenses === "yes"
              ? renderTextareaField(
                  "Where do you hold additional licenses? *",
                  "role.additionalLicenseLocations",
                  state.role.additionalLicenseLocations,
                  "List jurisdictions and, if useful, the license type."
                )
              : ""
          }

          <div class="field">
            <label>Which commercial model do you prefer? *</label>
            ${renderSegmentedButtons("role.pricingModel", state.role.pricingModel, [
              { value: "wholesale", label: "Wholesale pricing" },
              { value: "revshare", label: "Revenue share" },
            ])}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderFinancialsStep() {
  const selectedFlowPhrase = getSelectedFlowPhrase();

  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Company financials</h3>
        <p class="section-card__intro">Please provide directional ranges for the business supporting ${escapeHtml(selectedFlowPhrase)}.</p>
        <div class="field-grid">
          ${renderSelectField(
            "Annual company revenue *",
            "financials.revenueRange",
            state.financials.revenueRange,
            RANGE_OPTIONS.revenue.map((option) => ({ value: option, label: option })),
            "Select a range",
            "is-half"
          )}
          ${renderSelectField(
            "Annual volume *",
            "financials.annualVolumeRange",
            state.financials.annualVolumeRange,
            RANGE_OPTIONS.volume.map((option) => ({ value: option, label: option })),
            "Select a range",
            "is-half"
          )}
          ${renderSelectField(
            "Payment count *",
            "financials.paymentCountRange",
            state.financials.paymentCountRange,
            RANGE_OPTIONS.payments.map((option) => ({ value: option, label: option })),
            "Select a range",
            "is-half"
          )}
          <div class="field is-half">
            ${renderRangeCard(
              "Average ticket size",
              "financials.averageTicket",
              state.financials.averageTicket,
              0,
              25000,
              250,
              "currency",
              "Please provide an approximate value."
            )}
          </div>
        </div>

        <div class="range-group">
          ${renderRangeCard(
            "Expected company growth (Next 12 months)",
            "financials.companyGrowth",
            state.financials.companyGrowth,
            0,
            200,
            5,
            "percent"
          )}
        </div>
      </section>
    </div>
  `;
}

function renderSolutionsStep() {
  const flowModules = MODULES.filter((module) => FLOW_MODULE_KEYS.includes(module.key));
  const selectedCount = getSelectedFlowLabels().length;

  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Solutions of interest</h3>
        <p class="section-card__intro">Select the solution areas you would like to discuss. The remaining steps will adjust to your selection.</p>
        <div class="option-grid">
          ${flowModules
            .map((module) => {
              const entry = state.modules[module.key];
              return `
                <button
                  class="option-card option-card--button ${entry.interested ? "is-selected" : ""}"
                  type="button"
                  data-action="toggle-interest"
                  data-store="modules"
                  data-key="${module.key}"
                  data-field="interested"
                  aria-pressed="${entry.interested ? "true" : "false"}"
                >
                  <span class="option-card__title">${escapeHtml(module.label)}</span>
                  <span class="option-card__description">${escapeHtml(module.description)}</span>
                </button>
              `;
            })
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderMarketsStep() {
  const productsIntro = isModuleSelected("collections") && !isModuleSelected("disbursements")
    ? "Please indicate the products relevant to your incoming collection flows."
    : isModuleSelected("disbursements") && !isModuleSelected("collections")
      ? "Please indicate the products relevant to your outgoing disbursement flows."
      : "Please indicate the products relevant to your selected flows.";

  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Products</h3>
        <p class="section-card__intro">${escapeHtml(productsIntro)}</p>
        ${renderInterestGrid(PAYMENT_METHODS, "paymentMethods", true)}
      </section>

      <section class="section-card">
        <h3>Additional services</h3>
        <p class="section-card__intro">Please select any additional services relevant to this opportunity.</p>
        ${renderInterestGrid(ADDITIONAL_SERVICES, "additionalServices", false)}
      </section>
    </div>
  `;
}

function renderCollectionsStep() {
  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Originating users</h3>
        <p class="section-card__intro">Please provide information on the users sending funds.</p>
        <div class="field-grid">
          <div class="field">
            <label>Who are the originating users? *</label>
            ${renderChipSelector("collections.senderTypes", state.collections.senderTypes, [
              { value: "consumers", label: "Consumers" },
              { value: "businesses", label: "Businesses" },
              { value: "soleProprietors", label: "Sole proprietors" },
            ])}
          </div>

          ${renderTextField(
            "Number of users (payers) *",
            "collections.payerCount",
            state.collections.payerCount,
            "number",
            "",
            "is-half"
          )}

          <div class="field is-half">
            <label>Are these users actual or estimated? *</label>
            ${renderSegmentedButtons("collections.payerCountBasis", state.collections.payerCountBasis, [
              { value: "actual", label: "Actual" },
              { value: "estimated", label: "Estimated" },
            ])}
          </div>
        </div>

        ${renderSearchMultiSelect(
          "collections.senderCountries",
          state.collections.senderCountries,
          "List the countries where sender users are located *",
          "Select the countries where your sender users are located."
        )}

        <div class="field" style="margin-top: 18px;">
          <label>Which currencies are used for sending funds? *</label>
          ${renderSearchMultiSelect(
            "collections.senderCurrencies",
            state.collections.senderCurrencies,
            "",
            "",
            "Search currencies"
          )}
        </div>
      </section>
    </div>
  `;
}

function renderDisbursementsStep() {
  const showHighRiskQuestion = state.disbursements.receiverTypes.includes("businesses");

  return `
    <div class="section-stack">
      <section class="section-card">
        <h3>Receiving users</h3>
        <p class="section-card__intro">Please provide information on the users receiving funds.</p>
        <div class="field-grid">
          <div class="field">
            <label>Who are the receiving users? *</label>
            ${renderChipSelector("disbursements.receiverTypes", state.disbursements.receiverTypes, [
              { value: "consumers", label: "Consumers" },
              { value: "businesses", label: "Businesses" },
              { value: "soleProprietors", label: "Sole proprietors" },
            ])}
          </div>

          ${
            showHighRiskQuestion
              ? `
                <div class="field">
                  <label>Are any of the businesses operating in high risk industries? *</label>
                  ${renderSegmentedButtons("disbursements.highRiskIndustries", state.disbursements.highRiskIndustries, [
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ])}
                </div>
              `
              : ""
          }

          ${renderTextField(
            "Number of receiving users (payees / beneficiaries) *",
            "disbursements.payeeCount",
            state.disbursements.payeeCount,
            "number",
            "",
            "is-half"
          )}

          <div class="field is-half">
            <label>Are these users actual or estimated? *</label>
            ${renderSegmentedButtons("disbursements.payeeCountBasis", state.disbursements.payeeCountBasis, [
              { value: "actual", label: "Actual" },
              { value: "estimated", label: "Estimated" },
            ])}
          </div>
        </div>

        ${renderSearchMultiSelect(
          "disbursements.receiverCountries",
          state.disbursements.receiverCountries,
          "List the countries where receiving users are located *",
          "Select the countries where your receiving users are located."
        )}

        <div class="field" style="margin-top: 18px;">
          <label>Which currencies are used for delivered funds? *</label>
          ${renderSearchMultiSelect(
            "disbursements.receiverCurrencies",
            state.disbursements.receiverCurrencies,
            "",
            "",
            "Search currencies"
          )}
        </div>
      </section>
    </div>
  `;
}

function renderReviewStep(recommendedDocs) {
  const selectedFlows = getSelectedFlowLabels();
  const pricingModelLabel =
    state.role.pricingModel === "revshare"
      ? "Revenue share"
      : state.role.pricingModel === "wholesale"
        ? "Wholesale pricing"
        : "Pricing model not selected";
  const collectionsLocationSummary = isModuleSelected("collections")
    ? `Collections: ${[
        state.collections.senderCountries.length
          ? `Countries: ${state.collections.senderCountries
              .map((code) => countryLookup.get(code)?.name || code)
              .join(", ")}`
          : "",
        state.collections.senderCurrencies.length
          ? `Currencies: ${state.collections.senderCurrencies.join(", ")}`
          : "",
      ].filter(Boolean).join(" | ")}`
    : "";
  const disbursementsLocationSummary = isModuleSelected("disbursements")
    ? `Disbursements: ${[
        state.disbursements.receiverCountries.length
          ? `Countries: ${state.disbursements.receiverCountries
              .map((code) => countryLookup.get(code)?.name || code)
              .join(", ")}`
          : "",
        state.disbursements.receiverCurrencies.length
          ? `Currencies: ${state.disbursements.receiverCurrencies.join(", ")}`
          : "",
      ].filter(Boolean).join(" | ")}`
    : "";

  return `
    <div class="section-stack">
      <section class="section-card review-summary-card">
        <h3>Summary</h3>
        <p class="section-card__intro">Please review the information provided below.</p>

        <div class="summary-grid">
          <div class="summary-card">
            <strong>Selected flows</strong>
            <span>${escapeHtml(selectedFlows.length ? formatList(selectedFlows) : "None indicated")}</span>
          </div>
          <div class="summary-card">
            <strong>Markets and Currencies</strong>
            <span>${escapeHtml(
              [
                collectionsLocationSummary,
                disbursementsLocationSummary,
              ].filter(Boolean).join(" | ") || "No countries or currencies indicated"
            )}</span>
          </div>
          <div class="summary-card">
            <strong>Commercial model</strong>
            <span>${escapeHtml(pricingModelLabel)} with ${escapeHtml(state.financials.revenueRange || "revenue range not provided")} revenue range.</span>
          </div>
        </div>

        <p class="completion-note">
          Based on the information provided to date, ${recommendedDocs.length} documents will be available on the next screen.
        </p>
      </section>

      <section class="section-card">
        <h3>Additional information</h3>
        <p class="section-card__intro">Please provide any additional information that would assist our review.</p>
        ${renderTextareaField(
          "Additional context",
          "additionalInfo",
          state.additionalInfo,
          "Please provide any relevant context, implementation considerations, launch timing, priorities, or other information."
        )}
      </section>
    </div>
  `;
}

function renderThankYouStep(recommendedDocs) {
  const selectedFlows = getSelectedFlowLabels();
  return `
    <div class="thank-you">
      <section class="thank-you__hero">
        <span class="brand-chip">
          <span class="brand-chip__dot"></span>
          Available documents
        </span>
        <h3>Thank you for completing the questionnaire.</h3>
        <p>Based on the information provided, the following documents are available for download.</p>
        ${
          submissionState.submittedAt
            ? `<p class="completion-note">Submission received on ${escapeHtml(formatSubmittedAt(submissionState.submittedAt))}.</p>`
            : ""
        }
        <div>
          <span class="inline-stat"><strong>${recommendedDocs.length}</strong> documents available</span>
          <span class="inline-stat"><strong>${selectedFlows.length}</strong> flows selected</span>
          <span class="inline-stat"><strong>${countSelectedItems(state.paymentMethods)}</strong> products indicated</span>
        </div>
        <div class="thank-you__actions">
          <button class="button" type="button" data-action="download-pack">Download documents</button>
          <button class="mini-button" type="button" data-action="restart">Restart questionnaire</button>
        </div>
      </section>

      <section class="section-card">
        <h3>Available documents</h3>
        <p class="section-card__intro">KYC, account issuance, and coverage are included with all submissions. Additional documents appear based on the information provided.</p>
        <div class="document-grid">
          ${recommendedDocs
            .map(
              (doc) => `
                <article class="document-card">
                  <span class="document-card__badge">${escapeHtml(doc.badge)}</span>
                  <strong>${escapeHtml(doc.title)} · ${escapeHtml(doc.format)}</strong>
                  <span>${escapeHtml(doc.description)}</span>
                  <div class="document-card__actions">
                    <button class="ghost-button document-card__button" type="button" data-action="download-doc" data-doc-id="${doc.id}">
                      Download
                    </button>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderErrorBox(errors) {
  const isSubmissionIssue =
    errors.length === 1 &&
    (submissionState.status === "error" || errors[0].toLowerCase().includes("server"));
  const preview = errors.slice(0, 4).join(", ");
  const remaining = errors.length > 4 ? ` and ${errors.length - 4} more` : "";
  return `
    <div class="alert">
      <strong>${isSubmissionIssue ? "We could not save this submission." : "Please complete the following required fields."}</strong>
      <span>${escapeHtml(preview + remaining)}</span>
    </div>
  `;
}

function renderTextField(label, name, value, type = "text", placeholder = "", className = "") {
  return `
    <div class="field ${className}">
      <label for="${toId(name)}">${escapeHtml(label)}</label>
      <input
        class="text-input"
        id="${toId(name)}"
        name="${name}"
        type="${type}"
        value="${escapeHtml(String(value || ""))}"
        placeholder="${escapeHtml(placeholder)}"
      />
    </div>
  `;
}

function renderTextareaField(label, name, value, placeholder = "") {
  return `
    <div class="field">
      <label for="${toId(name)}">${escapeHtml(label)}</label>
      <textarea
        class="textarea-input"
        id="${toId(name)}"
        name="${name}"
        placeholder="${escapeHtml(placeholder)}"
      >${escapeHtml(String(value || ""))}</textarea>
    </div>
  `;
}

function renderFileField(label, name, value, accept = "", help = "") {
  const fileName =
    value && typeof value === "object" && value.name
      ? value.name
      : "";

  return `
    <div class="field">
      <label for="${toId(name)}">${escapeHtml(label)}</label>
      <input
        class="text-input"
        id="${toId(name)}"
        name="${name}"
        type="file"
        ${accept ? `accept="${escapeHtml(accept)}"` : ""}
      />
      ${help ? `<small>${escapeHtml(help)}</small>` : ""}
      ${fileName ? `<small>Selected file: ${escapeHtml(fileName)}</small>` : ""}
    </div>
  `;
}

function renderSelectField(label, name, value, options, placeholder, className = "") {
  return `
    <div class="field ${className}">
      <label for="${toId(name)}">${escapeHtml(label)}</label>
      <select class="select-input" id="${toId(name)}" name="${name}">
        <option value="">${escapeHtml(placeholder)}</option>
        ${options
          .map(
            (option) => `
              <option value="${escapeHtml(option.value)}" ${value === option.value ? "selected" : ""}>
                ${escapeHtml(option.label)}
              </option>
            `
          )
          .join("")}
      </select>
    </div>
  `;
}

function renderSegmentedButtons(path, selected, options) {
  return `
    <div class="segmented">
      ${options
        .map(
          (option) => `
            <button
              class="segment ${selected === option.value ? "is-active" : ""}"
              type="button"
              data-action="set-value"
              data-path="${path}"
              data-value="${option.value}"
            >
              ${escapeHtml(option.label)}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderChipSelector(path, selectedValues, options) {
  return `
    <div class="chip-cloud">
      ${options
        .map(
          (option) => `
            <button
              class="selection-chip ${selectedValues.includes(option.value) ? "is-active" : ""}"
              type="button"
              data-action="toggle-array"
              data-path="${path}"
              data-value="${option.value}"
            >
              ${escapeHtml(option.label)}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderSearchMultiSelect(path, selectedValues, title = "", intro = "", placeholder = "") {
  const definition = getSearchSelectorDefinition(path);
  const query = getSelectorQuery(path);
  const suggestions = getSearchSuggestions(path, query, selectedValues);

  return `
    <div class="search-select">
      ${
        title || intro
          ? `
            <div class="search-select__header">
              <div>
                ${title ? `<strong>${escapeHtml(title)}</strong>` : ""}
                ${intro ? `<p>${escapeHtml(intro)}</p>` : ""}
              </div>
              <div class="selection-chip is-soft">${selectedValues.length} ${escapeHtml(definition.selectionLabel)}</div>
            </div>
          `
          : ""
      }

      <div class="search-select__input-wrap">
        <input
          class="text-input search-select__input"
          type="text"
          name="selector-search:${path}"
          data-selector-search="${path}"
          value="${escapeHtml(query)}"
          placeholder="${escapeHtml(placeholder || definition.placeholder)}"
          autocomplete="off"
          spellcheck="false"
        />

        ${
          query.trim()
            ? `
              <div class="search-select__suggestions">
                ${
                  suggestions.length
                    ? suggestions
                        .map(
                          (option) => `
                            <button
                              class="search-select__suggestion"
                              type="button"
                              data-action="add-selector-option"
                              data-path="${path}"
                              data-value="${option.value}"
                            >
                              <span>${escapeHtml(option.label)}</span>
                              ${option.meta ? `<span class="search-select__suggestion-meta">${escapeHtml(option.meta)}</span>` : ""}
                            </button>
                          `
                        )
                        .join("")
                    : `<div class="search-select__empty">No matches found.</div>`
                }
              </div>
            `
            : ""
        }
      </div>

      <div class="search-select__tags">
        ${
          selectedValues.length
            ? selectedValues
                .map((value) => {
                  const label = labelForSearchValue(path, value);
                  return `
                    <button
                      class="search-tag"
                      type="button"
                      data-action="remove-selector-option"
                      data-path="${path}"
                      data-value="${value}"
                      aria-label="Remove ${escapeHtml(label)}"
                    >
                      <span>${escapeHtml(label)}</span>
                      <span class="search-tag__remove" aria-hidden="true">x</span>
                    </button>
                  `;
                })
                .join("")
            : `<span class="search-select__placeholder">${escapeHtml(definition.emptySelectionLabel)}</span>`
        }
      </div>
    </div>
  `;
}

function renderRangeCard(label, name, value, min, max, step, format, help = "") {
  return `
    <div class="range-card">
      <div class="range-card__header">
        <strong>${escapeHtml(label)}</strong>
        <span class="range-card__value" data-output="${name}" data-format="${format}">
          ${escapeHtml(formatOutput(value, format))}
        </span>
      </div>
      <input
        class="range-input"
        type="range"
        name="${name}"
        min="${min}"
        max="${max}"
        step="${step}"
        value="${value}"
        data-format="${format}"
      />
      ${help ? `<small>${escapeHtml(help)}</small>` : ""}
    </div>
  `;
}

function renderInterestGrid(items, storeKey, withShare) {
  return `
    <div class="option-grid">
      ${items
        .map((item) => {
          const entry = state[storeKey][item.key];
          const selected = entry.current || entry.interested;

          return `
            <article class="option-card ${selected ? "is-selected" : ""}">
              <h4>${escapeHtml(item.label)}</h4>
              <p>${escapeHtml(item.description)}</p>
              <div class="toggle-pair">
                <button
                  class="pill-button ${entry.current ? "is-active" : ""}"
                  type="button"
                  data-action="toggle-interest"
                  data-store="${storeKey}"
                  data-key="${item.key}"
                  data-field="current"
                >
                  Current use
                </button>
                <button
                  class="pill-button ${entry.interested ? "is-active" : ""}"
                  type="button"
                  data-action="toggle-interest"
                  data-store="${storeKey}"
                  data-key="${item.key}"
                  data-field="interested"
                >
                  Interested in Veem
                </button>
              </div>
              ${
                withShare && selected
                  ? `
                    <div class="subcard">
                      <div class="field">
                        <label>Estimated share of volume</label>
                        ${renderSegmentedButtons(`${storeKey}.${item.key}.shareBasis`, entry.shareBasis, [
                          { value: "current", label: "Last 12 months" },
                          { value: "expected", label: "Expected share" },
                        ])}
                      </div>
                      ${renderRangeCard(
                        "Estimated share of volume",
                        `${storeKey}.${item.key}.share`,
                        entry.share,
                        0,
                        100,
                        5,
                        "percent"
                      )}
                    </div>
                  `
                  : ""
              }
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

async function handleClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) {
    return;
  }

  const action = button.dataset.action;

  if (action === "goto-step") {
    const targetStepIndex = Number(button.dataset.stepIndex);
    if (targetStepIndex > maxUnlockedStepIndex) {
      return;
    }
    activeErrors = [];
    currentStepIndex = targetStepIndex;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (action === "prev-step") {
    activeErrors = [];
    currentStepIndex = Math.max(0, currentStepIndex - 1);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (action === "next-step") {
    const steps = buildSteps();
    const currentStep = steps[currentStepIndex];
    const errors = currentStep.validate();

    if (errors.length) {
      activeErrors = errors;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (currentStep.id === "review") {
      const submissionError = await submitCurrentResponse();
      if (submissionError) {
        activeErrors = [submissionError];
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    activeErrors = [];
    currentStepIndex = Math.min(currentStepIndex + 1, steps.length - 1);
    maxUnlockedStepIndex = Math.max(maxUnlockedStepIndex, currentStepIndex);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (action === "set-value") {
    setValueByPath(state, button.dataset.path, button.dataset.value);
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    return;
  }

  if (action === "toggle-array") {
    toggleArrayValue(button.dataset.path, button.dataset.value);
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    return;
  }

  if (action === "add-selector-option") {
    addArrayValue(button.dataset.path, button.dataset.value);
    clearSelectorQuery(button.dataset.path);
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    focusSelectorInput(button.dataset.path);
    return;
  }

  if (action === "remove-selector-option") {
    removeArrayValue(button.dataset.path, button.dataset.value);
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    focusSelectorInput(button.dataset.path);
    return;
  }

  if (action === "toggle-interest") {
    const { store, key, field } = button.dataset;
    state[store][key][field] = !state[store][key][field];
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    return;
  }

  if (action === "download-doc") {
    const doc = DOCUMENT_LIBRARY[button.dataset.docId];
    if (doc) {
      triggerDownload(doc);
    }
    return;
  }

  if (action === "download-pack") {
    getRecommendedDocs().forEach((doc, index) => {
      window.setTimeout(() => triggerDownload(doc), index * 140);
    });
    return;
  }

  if (action === "restart") {
    window.location.reload();
  }
}

function handleBlur(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;

  const existing = target.parentElement.querySelector(".field-inline-error");
  if (existing) existing.remove();
  target.classList.remove("is-invalid");

  let errorMsg = "";

  if (target.name === "contact.email") {
    const val = target.value.trim();
    if (val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      errorMsg = "Please enter a valid email address.";
    }
  }

  if (target.name === "contact.whatsapp") {
    const val = target.value.trim();
    if (val && !/^\+?[\d\s\-().]{7,20}$/.test(val)) {
      errorMsg = "Please enter a valid phone number (e.g. +1 555 000 0000).";
    }
  }

  if (errorMsg) {
    const span = document.createElement("span");
    span.className = "field-inline-error";
    span.textContent = errorMsg;
    target.classList.add("is-invalid");
    target.insertAdjacentElement("afterend", span);
  }
}

function handleInput(event) {
  const target = event.target;

  if (!target.name) {
    return;
  }

  if (target.dataset.selectorSearch) {
    selectorUiState[target.dataset.selectorSearch] = target.value;
    activeErrors = [];
    rerenderPreservingPosition();
    return;
  }

  if (target instanceof HTMLInputElement && target.type === "file") {
    const file = target.files && target.files[0]
      ? {
          name: target.files[0].name,
          size: target.files[0].size,
          type: target.files[0].type,
          lastModified: target.files[0].lastModified,
        }
      : null;
    setValueByPath(state, target.name, file);
    markSubmissionDirty();
    activeErrors = [];
    rerenderPreservingPosition();
    return;
  }

  let value = target.value;
  if (target.type === "range" || target.type === "number") {
    value = target.value === "" ? "" : Number(target.value);
  }
  if (target.name === "contact.whatsapp") {
    value = target.value.replace(/[^\d+\s\-().]/g, "");
    target.value = value;
  }

  setValueByPath(state, target.name, value);
  markSubmissionDirty();

  if (target.type === "range") {
    updateRangeOutput(target.name, value, target.dataset.format);
  }

  // clear inline error for this field while user is correcting it
  if (target.name === "contact.email" || target.name === "contact.whatsapp") {
    const existing = target.parentElement && target.parentElement.querySelector(".field-inline-error");
    if (existing) existing.remove();
    target.classList.remove("is-invalid");
  }

  activeErrors = [];
}

function handleKeyDown(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement) || !target.dataset.selectorSearch) {
    return;
  }

  const path = target.dataset.selectorSearch;
  const query = target.value.trim();

  if (event.key === "Enter") {
    const suggestions = getSearchSuggestions(path, query, getValueByPath(state, path));
    if (suggestions.length) {
      event.preventDefault();
      addArrayValue(path, suggestions[0].value);
      clearSelectorQuery(path);
      markSubmissionDirty();
      activeErrors = [];
      rerenderPreservingPosition();
      focusSelectorInput(path);
    }
    return;
  }

  if (event.key === "Backspace" && !query) {
    const selectedValues = getValueByPath(state, path);
    if (selectedValues.length) {
      event.preventDefault();
      removeArrayValue(path, selectedValues[selectedValues.length - 1]);
      markSubmissionDirty();
      activeErrors = [];
      rerenderPreservingPosition();
      focusSelectorInput(path);
    }
  }
}

function validateIntro() {
  const errors = [];

  if (!state.contact.firstName.trim()) {
    errors.push("First name");
  }
  if (!state.contact.lastName.trim()) {
    errors.push("Last name");
  }
  if (!state.contact.email.trim()) {
    errors.push("Email");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.contact.email.trim())) {
    errors.push("Email — please enter a valid email address");
  }
  if (state.contact.whatsapp.trim() && !/^\+?[\d\s\-().]{7,20}$/.test(state.contact.whatsapp.trim())) {
    errors.push("WhatsApp number — please enter a valid phone number (e.g. +1 555 000 0000)");
  }
  if (!state.company.companyName.trim()) {
    errors.push("Company name");
  }
  if (!state.company.entityType) {
    errors.push("Entity type");
  }

  return errors;
}

function validateRole() {
  const errors = [];

  if (!state.role.inFlow) {
    errors.push("Flow of funds business status");
  }
  if (!state.role.licensed) {
    errors.push("Licensing status");
  }
  if (!state.role.additionalLicenses) {
    errors.push("Additional licenses");
  }
  if (state.role.additionalLicenses === "yes" && !state.role.additionalLicenseLocations.trim()) {
    errors.push("Additional license locations");
  }
  if (!state.role.pricingModel) {
    errors.push("Preferred pricing model");
  }

  return errors;
}

function validateFinancials() {
  const errors = [];

  if (!state.financials.revenueRange) {
    errors.push("Annual company revenue");
  }
  if (!state.financials.annualVolumeRange) {
    errors.push("Annual volume");
  }
  if (!state.financials.paymentCountRange) {
    errors.push("Payment count");
  }

  return errors;
}

function validateSolutions() {
  const errors = [];

  if (!getSelectedFlowLabels().length) {
    errors.push("Collections or disbursements interest");
  }

  return errors;
}

function validateMarkets() {
  return [];
}

function validateCollections() {
  const errors = [];

  if (!state.collections.senderTypes.length) {
    errors.push("Originating user type");
  }
  if (!state.collections.payerCount) {
    errors.push("Number of payer users");
  }
  if (!state.collections.payerCountBasis) {
    errors.push("Whether payer users are actual or estimated");
  }
  if (!state.collections.senderCountries.length) {
    errors.push("Sender user countries");
  }
  if (!state.collections.senderCurrencies.length) {
    errors.push("Sender currencies");
  }

  return errors;
}

function validateDisbursements() {
  const errors = [];

  if (!state.disbursements.receiverTypes.length) {
    errors.push("Receiving user type");
  }
  if (state.disbursements.receiverTypes.includes("businesses") && !state.disbursements.highRiskIndustries) {
    errors.push("High risk industry status");
  }
  if (!state.disbursements.payeeCount) {
    errors.push("Number of payee users");
  }
  if (!state.disbursements.payeeCountBasis) {
    errors.push("Whether payee users are actual or estimated");
  }
  if (!state.disbursements.receiverCountries.length) {
    errors.push("Receiving user countries");
  }
  if (!state.disbursements.receiverCurrencies.length) {
    errors.push("Delivered fund currencies");
  }

  return errors;
}

function getRecommendedDocs() {
  const docIds = ["kyc", "accountIssuance", "coverage"];

  if (isModuleSelected("collections")) {
    docIds.push("collections");
  }

  if (isModuleSelected("disbursements")) {
    docIds.push("disbursements");
  }

  if (hasStablecoinInterest()) {
    docIds.push("stablecoin");
  }

  return [...new Set(docIds)].map((id) => DOCUMENT_LIBRARY[id]);
}

function hasStablecoinInterest() {
  return state.paymentMethods.stablecoin.current || state.paymentMethods.stablecoin.interested;
}

function isModuleSelected(moduleKey) {
  const module = state.modules[moduleKey];
  return module.current || module.interested;
}

function getSelectedModuleLabels() {
  return MODULES.filter((module) => isModuleSelected(module.key)).map((module) => module.label);
}

function getSelectedFlowLabels() {
  return MODULES.filter(
    (module) => FLOW_MODULE_KEYS.includes(module.key) && isModuleSelected(module.key)
  ).map((module) => module.label);
}

function getSelectedFlowPhrase() {
  const labels = getSelectedFlowLabels().map((label) => label.toLowerCase());
  return formatList(labels) || "your selected payment flows";
}

function formatList(values) {
  if (!values.length) {
    return "";
  }

  if (values.length === 1) {
    return values[0];
  }

  if (values.length === 2) {
    return `${values[0]} and ${values[1]}`;
  }

  return `${values.slice(0, -1).join(", ")}, and ${values[values.length - 1]}`;
}

function countSelectedItems(group) {
  return Object.values(group).filter((item) => item.current || item.interested).length;
}

function setValueByPath(object, path, value) {
  const segments = path.split(".");
  const last = segments.pop();
  const target = segments.reduce((accumulator, segment) => accumulator[segment], object);
  target[last] = value;
}

function getValueByPath(object, path) {
  return path.split(".").reduce((accumulator, segment) => accumulator[segment], object);
}

function toggleArrayValue(path, value) {
  const list = getValueByPath(state, path);
  const index = list.indexOf(value);
  if (index >= 0) {
    list.splice(index, 1);
  } else {
    list.push(value);
  }
}

function addArrayValue(path, value) {
  const list = getValueByPath(state, path);
  if (!list.includes(value)) {
    list.push(value);
  }
}

function removeArrayValue(path, value) {
  const list = getValueByPath(state, path);
  const index = list.indexOf(value);
  if (index >= 0) {
    list.splice(index, 1);
  }
}

function getSearchSelectorDefinition(path) {
  return SEARCH_SELECTOR_DEFINITIONS[path] || {
    options: [],
    placeholder: "Search",
    selectionLabel: "selected",
    emptySelectionLabel: "Selected items will appear here.",
  };
}

function getSelectorQuery(path) {
  return selectorUiState[path] || "";
}

function clearSelectorQuery(path) {
  delete selectorUiState[path];
}

function getSearchSuggestions(path, query, selectedValues) {
  const trimmedQuery = query.trim().toLowerCase();
  if (!trimmedQuery) {
    return [];
  }

  return getSearchSelectorDefinition(path).options
    .filter((option) => {
      if (selectedValues.includes(option.value)) {
        return false;
      }

      const haystack = String(option.keywords || option.label || option.value).toLowerCase();
      return haystack.includes(trimmedQuery);
    })
    .slice(0, 8);
}

function labelForSearchValue(path, value) {
  return (
    getSearchSelectorDefinition(path).options.find((option) => option.value === value)?.label || value
  );
}

function focusSelectorInput(path) {
  window.requestAnimationFrame(() => {
    const selector = `[data-selector-search="${escapeSelectorValue(path)}"]`;
    const input = document.querySelector(selector);
    if (input) {
      input.focus();
    }
  });
}

function updateRangeOutput(name, value, format) {
  const output = document.querySelector(`[data-output="${escapeSelectorValue(name)}"]`);
  if (output) {
    output.textContent = formatOutput(value, format);
  }
}

function formatOutput(value, format) {
  if (format === "currency") {
    return currencyFormatter.format(Number(value || 0));
  }
  if (format === "percent") {
    return `${Number(value || 0)}%`;
  }
  return String(value ?? "");
}

function triggerDownload(doc) {
  const anchor = document.createElement("a");
  anchor.href = doc.href;
  anchor.download = "";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

async function submitCurrentResponse() {
  if (!SUBMISSION_WEBHOOK_URL) {
    return "Submission service is not configured. Paste your Zapier webhook URL into `submissionWebhookUrl` in config.js before deploying this form.";
  }

  submissionState.status = "submitting";
  render();

  const payload = buildSubmissionPayload();

  try {
    const response = await fetch(SUBMISSION_WEBHOOK_URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    let result = null;
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      result = await response.json();
    }

    if (!response.ok || (result && result.ok === false)) {
      if (response.status === 501) {
        throw new Error(
          "The configured webhook does not accept POST requests. Confirm that the Zapier Catch Hook URL is correct."
        );
      }
      if (response.status === 404) {
        throw new Error(
          "The configured webhook was not found. Confirm that the Zapier Catch Hook URL is correct."
        );
      }
      throw new Error(result?.error || `Request failed with status ${response.status}`);
    }

    submissionState.status = "success";
    submissionState.submittedAt = payload.submittedAt;
    submissionState.submissionId = result?.submissionId || payload.submissionId;

    const _hsq = window._hsq = window._hsq || [];
    _hsq.push(["identify", {
      email: state.contact.email,
      firstname: state.contact.firstName,
      lastname: state.contact.lastName,
      company: state.company.companyName,
    }]);
    _hsq.push(["trackPageView"]);

    return "";
  } catch (error) {
    submissionState.status = "error";
    const message = error instanceof Error ? error.message : String(error || "");
    if (
      message.includes("Failed to fetch") ||
      message.includes("NetworkError") ||
      message.includes("Load failed")
    ) {
      return "The webhook is not reachable. Confirm that the Zapier Catch Hook URL is correct and that the browser is allowed to send requests to it.";
    }

    return `The questionnaire could not be saved: ${message || "Please try again."}`;
  }
}

function buildSubmissionPayload() {
  const rawData = cloneSubmissionState(state);

  return {
    event: "veem.partner_onboarding.submitted",
    submissionId: generateSubmissionId(),
    submittedAt: new Date().toISOString(),
    pageUrl: window.location.href,
    userAgent: navigator.userAgent,
    contact: rawData.contact,
    company: rawData.company,
    selectedDocuments: getRecommendedDocs().map((doc) => doc.title),
    summary: buildSummary(),
    rawData,
    responses: rawData,
  };
}

function buildSummary() {
  const entityTypeLabel = labelForOption(ENTITY_TYPES, state.company.entityType);
  const pricingModelLabel = state.role.pricingModel === "revshare" ? "Revenue share" : state.role.pricingModel === "wholesale" ? "Wholesale pricing" : "N/A";
  const selectedFlows = getSelectedFlowLabels();
  const selectedCountries = state.operatingCountries
    .map((code) => countryLookup.get(code)?.name || code)
    .join(", ");
  const selectedDocs = getRecommendedDocs().map((doc) => doc.title).join(", ");
  const paymentMethodSummary = summarizeInterestGroup(PAYMENT_METHODS, state.paymentMethods);
  const servicesSummary = summarizeInterestGroup(ADDITIONAL_SERVICES, state.additionalServices);
  const lines = [
    "Veem partner onboarding response",
    "",
    `Contact: ${state.contact.firstName} ${state.contact.lastName}`.trim(),
    `Email: ${state.contact.email || "N/A"}`,
    `WhatsApp: ${state.contact.whatsapp || "N/A"}`,
    `Company: ${state.company.companyName || "N/A"}`,
    `Entity type: ${entityTypeLabel || "N/A"}`,
    `URL: ${state.company.url || "N/A"}`,
    "",
    `Selected flows: ${selectedFlows.length ? formatList(selectedFlows) : "N/A"}`,
    `Flow of funds business: ${state.role.inFlow || "N/A"}`,
    `Flow of funds chart: ${state.role.flowOfFundsChart?.name || "N/A"}`,
    `Licensed in operating countries: ${state.role.licensed || "N/A"}`,
    `Additional licenses: ${state.role.additionalLicenses || "N/A"}`,
    `Additional license locations: ${state.role.additionalLicenseLocations || "N/A"}`,
    `Pricing model: ${pricingModelLabel}`,
    "",
    `Revenue range: ${state.financials.revenueRange || "N/A"}`,
    `Expected company growth (next 12 months): ${state.financials.companyGrowth}%`,
    `Annual volume range: ${state.financials.annualVolumeRange || "N/A"}`,
    `Payment count range: ${state.financials.paymentCountRange || "N/A"}`,
    `Average ticket size: ${currencyFormatter.format(Number(state.financials.averageTicket || 0))}`,
    "",
    `Operating countries: ${selectedCountries || "N/A"}`,
    `Currencies: ${state.currencies.join(", ") || "N/A"}`,
    `Products: ${paymentMethodSummary || "N/A"}`,
    `Additional services: ${servicesSummary || "N/A"}`,
  ];

  if (isModuleSelected("collections")) {
    lines.push(
      "",
      `Collections sender types: ${state.collections.senderTypes.join(", ") || "N/A"}`,
      `Collections payer count: ${state.collections.payerCount || "N/A"} (${state.collections.payerCountBasis})`,
      `Collections sender countries: ${state.collections.senderCountries
        .map((code) => countryLookup.get(code)?.name || code)
        .join(", ") || "N/A"}`,
      `Collections sender currencies: ${state.collections.senderCurrencies.join(", ") || "N/A"}`
    );
  }

  if (isModuleSelected("disbursements")) {
    lines.push(
      "",
      `Disbursements receiver types: ${state.disbursements.receiverTypes.join(", ") || "N/A"}`,
      `High risk industries: ${state.disbursements.highRiskIndustries || "N/A"}`,
      `Disbursements payee count: ${state.disbursements.payeeCount || "N/A"} (${state.disbursements.payeeCountBasis})`,
      `Disbursements receiver countries: ${state.disbursements.receiverCountries
        .map((code) => countryLookup.get(code)?.name || code)
        .join(", ") || "N/A"}`,
      `Disbursements currencies: ${state.disbursements.receiverCurrencies.join(", ") || "N/A"}`
    );
  }

  lines.push(
    "",
    `Additional info: ${state.additionalInfo || "N/A"}`,
    `Selected documents: ${selectedDocs || "N/A"}`
  );

  return lines.join("\n");
}

function summarizeInterestGroup(items, groupState) {
  return items
    .filter((item) => groupState[item.key].current || groupState[item.key].interested)
    .map((item) => {
      const entry = groupState[item.key];
      const states = [
        entry.current ? "current" : "",
        entry.interested ? "interested" : "",
      ].filter(Boolean);

      if (Object.prototype.hasOwnProperty.call(entry, "share")) {
        return `${item.label} (${states.join(" + ")}, ${entry.share}% ${entry.shareBasis})`;
      }

      return `${item.label} (${states.join(" + ")})`;
    })
    .join(", ");
}

function labelForOption(options, value) {
  return options.find((option) => option.value === value)?.label || value;
}

function markSubmissionDirty() {
  if (submissionState.status === "idle") {
    return;
  }

  submissionState.status = "idle";
  submissionState.submittedAt = "";
  submissionState.submissionId = "";
}

function generateSubmissionId() {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }

  return `submission-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
}

function cloneSubmissionState(value) {
  if (typeof globalThis.structuredClone === "function") {
    return globalThis.structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value));
}

function formatSubmittedAt(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function rerenderPreservingPosition() {
  const snapshot = captureUiState();
  render();
  restoreUiState(snapshot);
}

function captureUiState() {
  const activeElement = document.activeElement;
  return {
    windowScrollY: window.scrollY,
    countryScrolls: Array.from(document.querySelectorAll("[data-country-scroll]")).map((element) => ({
      key: element.dataset.countryScroll,
      top: element.scrollTop,
    })),
    activeSelector:
      activeElement instanceof HTMLInputElement && activeElement.dataset.selectorSearch
        ? {
            path: activeElement.dataset.selectorSearch,
            start: activeElement.selectionStart ?? activeElement.value.length,
            end: activeElement.selectionEnd ?? activeElement.value.length,
          }
        : null,
  };
}

function restoreUiState(snapshot) {
  if (!snapshot) {
    return;
  }

  snapshot.countryScrolls.forEach(({ key, top }) => {
    const selector = `[data-country-scroll="${escapeSelectorValue(key)}"]`;
    const element = document.querySelector(selector);
    if (element) {
      element.scrollTop = top;
    }
  });

  window.scrollTo({ top: snapshot.windowScrollY });

  if (snapshot.activeSelector) {
    const selector = `[data-selector-search="${escapeSelectorValue(snapshot.activeSelector.path)}"]`;
    const input = document.querySelector(selector);
    if (input instanceof HTMLInputElement) {
      input.focus();
      input.setSelectionRange(snapshot.activeSelector.start, snapshot.activeSelector.end);
    }
  }
}

function toId(value) {
  return value.replace(/[^a-zA-Z0-9]+/g, "-");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
