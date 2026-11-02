import type { Spec } from "@/lib/catalog";

export function SpecTable({ specs }: { specs: Spec[] }) {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {specs.map((spec) => (
        <div key={spec.label} className="grid gap-1 py-4 sm:grid-cols-12 sm:items-baseline">
          <dt className="text-sm text-muted sm:col-span-4">{spec.label}</dt>
          <dd className="font-medium text-fg sm:col-span-8">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
