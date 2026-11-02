import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/contact/quote-form";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/catalog";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Razor's Edge Manufacturing" },
      {
        name: "description",
        content: "Request a quote from Razor's Edge Manufacturing in Western New York.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-2 md:py-16">
      <div>
        <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">Talk to the shop</p>
        <h1 className="mt-3 font-display text-5xl font-extrabold tracking-tight text-fg">Tell us the cut.</h1>
        <p className="mt-4 max-w-md text-steel">
          Pizzeria or plant, one slicer or a line. Call, or send the job and we'll come back with a quote.
        </p>
        <a
          href={`tel:${PHONE_TEL}`}
          className="mt-8 block font-display text-4xl font-bold tracking-tight text-fg no-underline hover:text-accent"
        >
          {PHONE_DISPLAY}
        </a>
        <a href={`mailto:${EMAIL}`} className="mt-2 block text-steel no-underline hover:text-fg">
          {EMAIL}
        </a>
        <p className="mt-6 text-sm text-muted">Western New York · Made in America</p>
      </div>
      <QuoteForm />
    </main>
  );
}
