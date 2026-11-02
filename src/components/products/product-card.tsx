import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-card border border-line bg-surface">
      <Link to="/products/$slug" params={{ slug: product.slug }} className="no-underline">
        <img src={product.image} alt={product.imageAlt} className="aspect-4/3 w-full object-cover" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs tracking-[0.18em] text-accent uppercase">
          {product.index} · {product.kicker}
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-fg">{product.name}</h2>
        <p className="mt-3 flex-1 text-sm text-steel">{product.summary}</p>
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="mt-5 text-sm font-medium text-fg no-underline hover:text-accent"
        >
          Specifications →
        </Link>
      </div>
    </article>
  );
}
