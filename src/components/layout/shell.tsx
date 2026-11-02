import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/catalog";
import { navItems } from "@/lib/nav";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg pb-14 text-fg md:pb-0">
      <SiteHeader />
      {children}
      <SiteFooter />
      <MobileBar />
    </div>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3 no-underline" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-sm bg-accent text-xs font-semibold tracking-wide text-accent-ink">
            RE
          </span>
          <span className="font-display text-sm font-bold tracking-wide text-fg">Razor's Edge</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="text-sm text-muted no-underline hover:text-fg"
              activeProps={{ className: "text-sm text-fg no-underline" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg no-underline"
          >
            {PHONE_DISPLAY}
          </a>
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line text-fg md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-bg px-5 py-4 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-line py-4 text-lg text-fg no-underline"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${PHONE_TEL}`} className="py-4 text-lg text-accent no-underline">
              Call {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold text-fg">Razor's Edge LLC</p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            Precision-built equipment for shops that cut to order. Made in America.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="text-muted no-underline hover:text-fg">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-1 text-sm">
          <a href={`tel:${PHONE_TEL}`} className="text-fg no-underline hover:text-accent">
            {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="text-muted no-underline hover:text-fg">
            {EMAIL}
          </a>
          <p className="text-muted">Western New York · © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-bg/95 backdrop-blur md:hidden">
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex h-14 flex-1 items-center justify-center text-sm font-medium text-fg no-underline"
      >
        Call the shop
      </a>
      <Link
        to="/contact"
        className="flex h-14 flex-1 items-center justify-center bg-accent text-sm font-medium text-accent-ink no-underline"
      >
        Request a quote
      </Link>
    </div>
  );
}
