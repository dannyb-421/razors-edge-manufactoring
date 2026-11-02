import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/home/hero";
import { SlicerSteps } from "@/components/home/slicer-steps";
import { Stats } from "@/components/home/stats";
import { ProductCard } from "@/components/products/product-card";
import { products } from "@/lib/catalog";

export const Route = createFileRoute("/_site/")({
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">The line</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-fg md:text-5xl">
              Three machines. One shop.
            </h2>
          </div>
          <Link to="/products" className="text-sm text-muted no-underline hover:text-fg">
            All machines
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <SlicerSteps />
    </main>
  );
}
