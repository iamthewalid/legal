import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { CONTACT, NAV_LINKS } from "../data";
import { Logo, WhatsAppGlyph } from "./ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setOpen(false);
    document.body.style.overflow = "";
    window.setTimeout(() => {
      const target = document.getElementById(href.replace("#", ""));
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-white/5" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-[#b98a3f] via-[#e8c77e] to-[#fbf1d7] shadow-[0_0_14px_rgba(232,199,126,0.7)]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-3 sm:px-5">
        <div
          className={`mt-2.5 flex items-center justify-between gap-3 rounded-2xl px-3 py-2.5 transition-all duration-500 sm:mt-4 sm:px-4 ${
            scrolled || open
              ? "glass shadow-[0_20px_60px_-25px_rgba(0,0,0,0.9)]"
              : "border border-transparent bg-transparent"
          }`}
        >
          <Logo />

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="প্রধান নেভিগেশন">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-lg px-3 py-2 text-[14px] font-medium transition-colors ${
                    isActive ? "text-[#f3dfae]" : "text-[#c3cedb] hover:text-[#f3dfae]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[#e8c77e] to-transparent transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[13px] font-medium text-[#dbe4ee] transition hover:border-[#e8c77e]/40 hover:text-[#f3dfae] lg:inline-flex"
            >
              <Phone className="size-3.5 text-[#e8c77e]" />
              <span dir="ltr">{CONTACT.phoneDisplay}</span>
            </a>
            <a href="#booking" className="btn-gold hidden !rounded-xl !px-4 !py-2.5 !text-[14px] sm:inline-flex">
              ফ্রি কনসালটেশন
              <ArrowUpRight className="size-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-xl border border-white/12 bg-white/5 text-white transition hover:bg-white/10 xl:hidden"
              aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`glass mt-2 overflow-hidden rounded-2xl transition-all duration-400 xl:hidden ${
            open ? "max-h-[calc(100dvh-6rem)] opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 p-3" aria-label="মোবাইল নেভিগেশন">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => goToSection(event, link.href)}
                className="flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] text-[#dbe4ee] transition hover:bg-white/8 hover:text-[#f3dfae]"
              >
                {link.label}
                <ArrowUpRight className="size-4 text-[#e8c77e]/70" />
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href="#booking" onClick={(event) => goToSection(event, "#booking")} className="btn-gold !rounded-xl !px-3 !py-3 !text-sm">
                ফ্রি বুকিং
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !rounded-xl !px-3 !py-3 !text-sm"
              >
                <WhatsAppGlyph className="size-4 text-[#6fe0a4]" />
                WhatsApp
              </a>
            </div>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-[#e8c77e]/25 bg-[#e8c77e]/8 py-3 text-sm text-[#f3dfae]"
            >
              <Phone className="size-4" />
              <span dir="ltr">{CONTACT.phoneDisplay}</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
