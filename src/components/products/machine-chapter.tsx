import { Link } from "@tanstack/react-router";
import { MediaFrame } from "@/components/media-frame";
import type { Product } from "@/lib/catalog";

export function MachineChapter({ product, flip = false }: { product: Product; flip?: boolean }) {
  return (
    <article className="grid border-t border-line md:min-h-[78svh] md:grid-cols-2">
      <MediaFrame
        image={product.image}
        video={product.video}
        alt={product.imageAlt}
        className={`min-h-72 md:min-h-full ${flip ? "md:order-2" : ""}`}
      />
      <div className="flex flex-col justify-end px-5 py-12 md:px-14 md:py-16">
        <p className="text-sm tracking-[0.18em] text-accent uppercase">
          {product.index} · {product.kicker}
        </p>
        <h2 className="mt-4 max-w-md font-display text-4xl font-medium tracking-tight text-fg md:text-6xl">
          {product.name}
        </h2>
        <p className="mt-5 max-w-md text-lg text-steel">{product.summary}</p>
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="mt-8 inline-flex h-12 w-fit items-center rounded-full border border-line px-5 text-sm font-medium text-fg no-underline hover:border-fg"
        >
          Specifications
        </Link>
      </div>
    </article>
  );
}
