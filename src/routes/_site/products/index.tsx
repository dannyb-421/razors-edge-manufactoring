import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/products/product-card";
import { products } from "@/lib/catalog";

export const Route = createFileRoute("/_site/products/")({
  head: () => ({
    meta: [
      { title: "Machines · Razor's Edge Manufacturing" },
      {
        name: "description",
        content: "Pepperoni slicer, fleshing machine, and BX cutter from Razor's Edge Manufacturing.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">Machines</p>
      <h1 className="mt-3 max-w-xl font-display text-5xl font-extrabold tracking-tight text-fg">
        Built for the cut in front of you.
      </h1>
      <p className="mt-4 max-w-lg text-steel">
        One slicer for the pizzeria line. Two more machines for yield and portioning. Open a card for the
        spec, then ask the shop to quote it.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </main>
  );
}
