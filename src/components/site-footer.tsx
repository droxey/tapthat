import { Link } from "@tanstack/react-router";
import { Wordmark } from "./logo";
import { NewsletterForm } from "./newsletter-form";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t-4 border-border bg-secondary-background">
      <div className="mx-auto grid max-w-site gap-10 px-4 py-12 md:grid-cols-[1fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Tech-powered charms for lifestyle events. Tap any phone, leave a moment, follow the
            rest.
          </p>
          <a className="mt-4 inline-block text-sm font-bold underline" href="mailto:hello@tapthat.fans">
            hello@tapthat.fans
          </a>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm font-bold">
          <Link to="/shop" className="hover:underline">
            Shop
          </Link>
          <Link to="/app" className="hover:underline">
            App
          </Link>
          <Link to="/how-it-works" className="hover:underline">
            How it works
          </Link>
          <Link to="/faq" className="hover:underline">
            FAQ
          </Link>
          <Link to="/partners" className="hover:underline">
            Pineapples
          </Link>
          <Link to="/squad" className="hover:underline">
            Squad
          </Link>
          <Link to="/journal" className="hover:underline">
            Journal
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
        <div>
          <p className="text-sm font-bold">Join the list</p>
          <p className="mt-1 text-sm text-muted">Drops, rooms, nothing else.</p>
          <NewsletterForm className="mt-4" />
        </div>
      </div>
      <div className="border-t-2 border-border bg-main">
        <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm font-bold">
          <p>© {new Date().getFullYear()} TapThat</p>
          <div className="flex gap-4">
            <Link to="/policies/$slug" params={{ slug: "privacy" }} className="hover:underline">
              Privacy
            </Link>
            <Link to="/policies/$slug" params={{ slug: "terms" }} className="hover:underline">
              Terms
            </Link>
            <Link to="/policies/$slug" params={{ slug: "shipping" }} className="hover:underline">
              Shipping
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
