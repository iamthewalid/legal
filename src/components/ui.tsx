import { useEffect, useRef, useState, type ReactNode } from "react";
import { Scale, Sparkles, Star } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Legal Solutions Consultancy Firm — হোম"
    >
      <span className="relative grid size-11 shrink-0 place-items-center rounded-[14px] bg-gradient-to-br from-[#fbf1d7] via-[#e8c77e] to-[#b98a3f] text-[#07111f] shadow-[0_10px_28px_-8px_rgba(219,179,96,0.65)]">
        <Scale className="size-6" strokeWidth={1.9} />
        <span className="absolute inset-[3px] rounded-[11px] border border-[#07111f]/20" />
        <span className="absolute -right-1 -top-1 size-2.5 rounded-full border-2 border-[#07111f] bg-[#69d3a1]" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[15px] font-bold tracking-[0.13em] text-[#f8f6f0] sm:text-base">
          LEGAL SOLUTIONS
        </span>
        <span className="mt-1.5 block font-display text-[8px] font-medium tracking-[0.34em] text-[#e8c77e]/85 sm:text-[9px]">
          CONSULTANCY FIRM
        </span>
      </span>
    </a>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(node);
    // Safety net: ensure content is never permanently hidden (e.g. print,
    // full-page capture, or a browser that misses observer callbacks).
    const fallback = window.setTimeout(() => setVisible(true), 2200);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#e8c77e]/25 bg-[#e8c77e]/8 px-3.5 py-1.5 text-[12px] font-medium tracking-wide text-[#f0d9a4] backdrop-blur-md">
      <Sparkles className="size-3.5 text-[#e8c77e]" />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  description,
  center = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-[28px] font-bold leading-[1.35] text-balance text-white sm:text-4xl lg:text-[42px]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={140}>
          <p className="mt-4 text-[15px] leading-relaxed text-[#a6b5c7] sm:text-base">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function WhatsAppGlyph({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.04 3.2c-7.06 0-12.8 5.73-12.8 12.79 0 2.25.59 4.45 1.71 6.39L3.16 28.8l6.59-1.73a12.77 12.77 0 0 0 6.28 1.64h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.04a12.7 12.7 0 0 0-9.05-3.67Zm0 23.34h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.06 1.07-3.92-.25-.4a10.58 10.58 0 0 1-1.62-5.63c0-5.87 4.78-10.64 10.66-10.64 2.84 0 5.51 1.11 7.52 3.12a10.57 10.57 0 0 1 3.12 7.53c0 5.87-4.78 10.64-10.66 10.64Zm5.84-7.97c-.32-.16-1.9-.94-2.19-1.05-.3-.1-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.63-.53-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.09 1.3 3.3.16.21 2.25 3.44 5.45 4.82.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function Stars({ count = 5, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${count} স্টার রেটিং`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-[#e8c77e] text-[#e8c77e]" />
      ))}
    </div>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#e8c77e]/35 to-transparent" />
      <span className="size-1.5 rotate-45 border border-[#e8c77e]/60" />
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#e8c77e]/35 to-transparent" />
    </div>
  );
}
