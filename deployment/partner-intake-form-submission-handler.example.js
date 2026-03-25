/*
  Example production endpoint for:
  POST /api/partner-intake-form/submissions

  Requires:
  - npm install express nodemailer

  Environment variables:
  - PORT=9009
  - SMTP_HOST=smtp.example.com
  - SMTP_PORT=587
  - SMTP_SECURE=false
  - SMTP_USER=...
  - SMTP_PASS=...
  - FROM_EMAIL=no-reply@veem.com
  - PARTNER_ONBOARDING_RECIPIENTS=partner-intake-form@veem.com,ops@veem.com
*/

const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json({ limit: "2mb" }));

const port = Number(process.env.PORT || 9009);
const recipients = String(process.env.PARTNER_ONBOARDING_RECIPIENTS || "")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

if (!recipients.length) {
  throw new Error("Missing PARTNER_ONBOARDING_RECIPIENTS environment variable.");
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: String(process.env.SMTP_SECURE || "false") === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/partner-intake-form/submissions", async (request, response) => {
  try {
    const payload = request.body || {};
    if (!payload.responses) {
      return response.status(400).json({
        ok: false,
        error: "Invalid submission payload.",
      });
    }

    const contact = payload.responses.contact || {};
    const company = payload.responses.company || {};
    const subjectParts = [
      "Partner intake form submission",
      company.companyName || "Unknown company",
      [contact.firstName, contact.lastName].filter(Boolean).join(" ") || "Unknown contact",
    ];

    const textBody = [
      payload.summary || "No summary provided.",
      "",
      "Raw payload:",
      JSON.stringify(payload, null, 2),
    ].join("\n");

    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: recipients,
      replyTo: contact.email || undefined,
      subject: subjectParts.join(" | "),
      text: textBody,
    });

    return response.json({
      ok: true,
      submissionId: payload.submissionId || "",
    });
  } catch (error) {
    return response.status(500).json({
      ok: false,
      error: error instanceof Error ? error.message : "Unknown submission error.",
    });
  }
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Partner intake form email API listening on http://127.0.0.1:${port}`);
});
