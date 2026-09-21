import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { NAV } from "@/lib/catalog";
import { cartCount, useCart } from "@/lib/cart";
import { LogoLink } from "./logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function SiteHeader() {
  const count = useCart((s) => cartCount(s.lines));
  const [q, setQ] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const primary = NAV;


  return (
    <header className="sticky top-0 z-40 border-b-4 border-border bg-secondary-background">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-4 px-4">
        <LogoLink />

        <nav className="hidden items-center gap-4 text-sm font-bold lg:flex">

          {primary.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:underline"
              activeProps={{ className: "underline" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            aria-label="Search"
            className="hidden md:inline-flex"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <Search className="size-4" />
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link to="/cart" aria-label="Bag">
              <span className="relative inline-flex">
                <ShoppingBag className="size-4" />
                {count > 0 ? (
                  <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-base border-2 border-border bg-accent text-[10px] leading-none">
                    {count}
                  </span>
                ) : null}
              </span>
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Menu">

                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent title="Menu" side="right">
              <nav className="flex flex-col gap-2">
                {NAV.map((item) => (
                  <SheetTrigger key={item.to} asChild>
                    <Link
                      to={item.to}
                      className="rounded-base border-2 border-border bg-main px-3 py-3 font-bold shadow-shadow"
                    >
                      {item.label}
                    </Link>
                  </SheetTrigger>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {searchOpen ? (
        <form
          className="mx-auto flex max-w-site gap-2 border-t-2 border-border px-4 py-3"
          onSubmit={(e) => {
            e.preventDefault();
            void navigate({ to: "/shop", search: { q } });
            setSearchOpen(false);
          }}
        >
          <Input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search charms, packs, hats…"
            aria-label="Search the shop"
          />
          <Button type="submit">Go</Button>
        </form>
      ) : null}
    </header>
  );
}
