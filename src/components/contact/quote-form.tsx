import { useMemo, useState, type FormEvent } from "react";
import { EMAIL, PHONE_DISPLAY, products } from "@/lib/catalog";

type Props = { defaultMachine?: string };

export function QuoteForm({ defaultMachine = "pepperoni-slicer" }: Props) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [machine, setMachine] = useState(defaultMachine);
  const [message, setMessage] = useState("");
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");

  const body = useMemo(() => {
    const picked = products.find((item) => item.slug === machine)?.name ?? machine;
    return [
      `Machine: ${picked}`,
      `Name: ${name}`,
      `Business: ${business || "—"}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      "",
      message || "Please send pricing and lead time.",
    ].join("\n");
  }, [business, email, machine, message, name, phone]);

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent("Quote request — Razor's Edge")}&body=${encodeURIComponent(body)}`;

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !email.includes("@")) {
      setError("Name and a real email are required.");
      setReady(false);
      return;
    }
    setError("");
    setReady(true);
  }

  const field =
    "w-full rounded-xl border border-line bg-bg px-4 py-3 text-base text-fg placeholder:text-muted";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3" noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm text-muted">
          Name
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
        </label>
        <label className="flex flex-col gap-1 text-sm text-muted">
          Shop or plant
          <input className={field} value={business} onChange={(e) => setBusiness(e.target.value)} autoComplete="organization" />
        </label>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm text-muted">
          Email
          <input
            className={field}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-muted">
          Phone
          <input className={field} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
        </label>
      </div>
      <label className="flex flex-col gap-1 text-sm text-muted">
        Machine
        <select className={field} value={machine} onChange={(e) => setMachine(e.target.value)}>
          {products.map((product) => (
            <option key={product.slug} value={product.slug}>
              {product.name}
            </option>
          ))}
          <option value="not-sure">Not sure yet</option>
        </select>
      </label>
      <label className="flex flex-col gap-1 text-sm text-muted">
        What are you cutting?
        <textarea
          className={`${field} min-h-28 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Volume, thickness, product, and when you need it."
        />
      </label>
      {error ? <p className="text-sm text-accent">{error}</p> : null}
      <button type="submit" className="h-12 rounded-full bg-accent text-sm font-medium text-accent-ink">
        Prepare quote email
      </button>
      {ready ? (
        <div className="rounded-2xl border border-line bg-bg p-4">
          <p className="text-sm text-fg">
            Ready to send. This opens your mail app addressed to the shop — we don't sit on a fake inbox.
          </p>
          <a
            href={mailto}
            className="mt-3 inline-flex h-11 items-center rounded-full bg-fg px-4 text-sm font-medium text-bg no-underline"
          >
            Email {EMAIL}
          </a>
          <p className="mt-3 text-sm text-muted">Or call {PHONE_DISPLAY} and ask for the slicer.</p>
        </div>
      ) : (
        <p className="text-sm text-muted">Quotes go to {EMAIL}. No account required.</p>
      )}
    </form>
  );
}
