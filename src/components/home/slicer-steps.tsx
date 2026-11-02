import { steps } from "@/lib/catalog";

export function SlicerSteps() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">How the slicer runs</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-medium tracking-tight text-fg md:text-5xl">
          Three moves. Then you walk away.
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="border-t border-line pt-6">
              <p className="text-sm text-accent">{step.n}</p>
              <h3 className="mt-3 font-display text-2xl font-medium text-fg">{step.title}</h3>
              <p className="mt-3 text-steel">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
