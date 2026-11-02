import { Link } from "@tanstack/react-router";
import { MediaFrame } from "@/components/media-frame";
import { products } from "@/lib/catalog";

const slicer = products[0];

export function Hero() {
  return (
    <section className="grid min-h-[calc(100svh-4rem)] border-b border-line md:grid-cols-2">
      <div className="order-2 flex flex-col justify-end px-5 py-12 md:order-1 md:px-14 md:py-16">
        <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">Made in America</p>
        <h1 className="mt-5 max-w-xl font-display text-5xl leading-none font-medium tracking-tight text-fg md:text-7xl">
          Cut it when you need it.
        </h1>
        <p className="mt-6 max-w-md text-lg text-steel">
          Equipment for shops that slice, flesh, and portion on the line. Steel, a dial you can feel, and a cut
          that matches the pie in front of you.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/products/$slug"
            params={{ slug: slicer.slug }}
            className="inline-flex h-12 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg no-underline"
          >
            Pepperoni slicer
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-ink no-underline"
          >
            Request a quote
          </Link>
        </div>
      </div>
      <MediaFrame
        image={slicer.image}
        video={slicer.video}
        alt={slicer.imageAlt}
        className="order-1 min-h-80 md:order-2 md:min-h-full"
      />
    </section>
  );
}
