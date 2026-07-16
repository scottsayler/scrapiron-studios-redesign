import { Resend } from "resend";
import { NextResponse } from "next/server";
import { site } from "@/lib/content";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  phone?: string;
  organizationOrAthlete?: string;
  sport?: string;
  serviceNeeded?: string;
  timeline?: string;
  graduationYear?: string;
  position?: string;
  schoolOrClub?: string;
  existingFilm?: string;
  organizationType?: string;
  currentWebsite?: string;
  company_website?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatOptional(label: string, value?: string): string | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;
  return `${label}: ${trimmed}`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error(
      "Contact form misconfigured: missing Resend environment variables.",
    );
    return NextResponse.json(
      { error: "Contact form is temporarily unavailable." },
      { status: 503 },
    );
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (body.company_website) {
    return NextResponse.json({ success: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim().toLowerCase();
  const message = body.message?.trim();
  const serviceNeeded = body.serviceNeeded?.trim();

  if (!name || !email || !message || !serviceNeeded) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (name.length > 120 || message.length > 5000) {
    return NextResponse.json(
      { error: "One or more fields are too long." },
      { status: 400 },
    );
  }

  const detailLines = [
    formatOptional("Phone", body.phone),
    formatOptional("Organization / athlete", body.organizationOrAthlete),
    formatOptional("Sport", body.sport),
    formatOptional("Service needed", serviceNeeded),
    formatOptional("Timeline", body.timeline),
    formatOptional("Graduation year", body.graduationYear),
    formatOptional("Position", body.position),
    formatOptional("School or club", body.schoolOrClub),
    formatOptional("Existing film", body.existingFilm),
    formatOptional("Organization type", body.organizationType),
    formatOptional("Current website", body.currentWebsite),
  ].filter(Boolean) as string[];

  const resend = new Resend(apiKey);
  const subject = `New project inquiry — ${serviceNeeded} — ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    ...detailLines,
    "",
    "Project details:",
    message,
  ].join("\n");

  const htmlDetails = detailLines
    .map((line) => {
      const [label, ...rest] = line.split(": ");
      return `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(rest.join(": "))}</p>`;
    })
    .join("");

  const html = `
    <h2>New project inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${htmlDetails}
    <p><strong>Project details:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    <hr />
    <p style="color:#666;font-size:12px;">Sent from ${site.name} contact form</p>
  `;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      {
        error:
          "Unable to send your message right now. Please email us directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
