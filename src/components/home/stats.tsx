const stats = [
  ["75", "slices / minute"],
  ["1/32″", "per half turn"],
  ["1/2″", "thickest slice"],
  ["0", "waste on the stick"],
];

export function Stats() {
  return (
    <section className="border-y border-line" aria-label="Slicer numbers">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="border-line px-5 py-6 odd:border-r md:border-r md:last:border-r-0">
            <dt className="font-display text-4xl font-bold text-fg">{value}</dt>
            <dd className="mt-1 text-sm text-muted">{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
