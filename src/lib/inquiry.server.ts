import { createServerFn } from "@tanstack/react-start";

export type Inquiry = {
  name: string;
  business: string;
  email: string;
  phone: string;
  machine: string;
  message: string;
};

function readInquiry(input: unknown): Inquiry {
  if (!input || typeof input !== "object") throw new Error("Invalid inquiry");
  const raw = input as Record<string, unknown>;
  const name = String(raw.name ?? "").trim();
  const email = String(raw.email ?? "").trim();
  const business = String(raw.business ?? "").trim();
  const phone = String(raw.phone ?? "").trim();
  const machine = String(raw.machine ?? "").trim();
  const message = String(raw.message ?? "").trim();
  if (!name || name.length > 120) throw new Error("Name is required");
  if (!email.includes("@") || email.length > 200) throw new Error("A real email is required");
  if (business.length > 160 || phone.length > 40 || machine.length > 80 || message.length > 2000) {
    throw new Error("That note is too long");
  }
  return { name, business, email, phone, machine: machine || "Not sure yet", message };
}

export const draftFollowUp = createServerFn({ method: "POST" })
  .validator(readInquiry)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { followUp: null as string | null };

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 220,
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content:
              "You draft short follow-up emails for Razor's Edge Manufacturing in Western New York. They build a pepperoni slicer, a fleshing machine, and a BX cutter. Never invent prices, lead times, certifications, or specs. Plain text only, under 120 words. Sign off as Razor's Edge.",
          },
          {
            role: "user",
            content: `Write the email the shop can send back to this lead.\nName: ${data.name}\nBusiness: ${data.business || "not given"}\nMachine: ${data.machine}\nWhat they are cutting: ${data.message || "not specified"}`,
          },
        ],
      }),
    });

    if (!res.ok) return { followUp: null as string | null };
    const body = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    const text = body.choices?.[0]?.message?.content?.trim() ?? "";
    return { followUp: text ? text.slice(0, 1500) : null };
  });
