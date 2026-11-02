import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { QuoteForm } from "@/components/contact/quote-form";
import { SpecTable } from "@/components/products/spec-table";
import { getProduct, products } from "@/lib/catalog";

export const Route = createFileRoute("/_site/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} · Razor's Edge Manufacturing` },
          { name: "description", content: loaderData.product.summary },
        ]
      : [],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const others = products.filter((item) => item.slug !== product.slug);

  return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:py-16">
      <p className="text-sm text-muted">
        <Link to="/products" className="text-muted no-underline hover:text-fg">
          Machines
        </Link>
        <span className="px-2">/</span>
        <span className="text-fg">{product.name}</span>
      </p>
      <div className="mt-6 grid items-start gap-10 md:grid-cols-2">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="aspect-4/3 w-full rounded-card border border-line object-cover"
        />
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">{product.kicker}</p>
          <h1 className="mt-3 font-display text-5xl font-extrabold tracking-tight text-fg">{product.name}</h1>
          <p className="mt-4 text-lg text-steel">{product.summary}</p>
          <ul className="mt-6 flex flex-col gap-3">
            {product.points.map((point) => (
              <li key={point} className="border-t border-line pt-3 text-fg">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="mt-16 font-display text-3xl font-bold text-fg">Specifications</h2>
      <div className="mt-6">
        <SpecTable specs={product.specs} />
      </div>

      <div className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-fg">Quote this machine</h2>
          <p className="mt-3 text-steel">Tell us the product and the pace. We'll price the build.</p>
        </div>
        <QuoteForm defaultMachine={product.slug} />
      </div>

      <div className="mt-16 grid gap-4 border-t border-line pt-10 sm:grid-cols-2">
        {others.map((item) => (
          <Link
            key={item.slug}
            to="/products/$slug"
            params={{ slug: item.slug }}
            className="group overflow-hidden rounded-card border border-line no-underline"
          >
            <img src={item.image} alt="" className="aspect-video w-full object-cover" />
            <div className="p-4">
              <p className="text-xs text-muted">{item.index}</p>
              <p className="font-display text-xl font-bold text-fg group-hover:text-accent">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
