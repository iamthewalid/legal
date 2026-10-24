import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Eye, Play, X } from "lucide-react";
import { VIDEOS, toBn } from "../data";
import { Reveal, SectionHead } from "./ui";

type Video = (typeof VIDEOS)[number];

export default function Videos({ onBook }: { onBook: (service?: string) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [active, setActive] = useState<Video | null>(null);

  useEffect(() => {
    if (active) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      const el = trackRef.current;
      if (!el || pausedRef.current || document.hidden) return;
      const first = el.querySelector("article");
      const amount = first ? first.clientWidth + 14 : 340;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 20;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: amount, behavior: "smooth" });
      }
    }, 6000);
    return () => window.clearInterval(timer);
  }, [active]);

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.querySelector("article");
    const amount = first ? first.clientWidth + 14 : 340;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="videos" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(21,74,88,0.32),transparent_58%)]" />
        <div className="absolute inset-0 grid-lines opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            eyebrow="ভিডিও লাইব্রেরি"
            title={
              <>
                আইন শিখুন <span className="gold-text">আপনার নিজের ভাষায়</span>, ঘরে বসেই
              </>
            }
            description="জমি, ব্যবসা, চুক্তি, ভিসা আর পারিবারিক আইন নিয়ে আমাদের বিশেষজ্ঞদের সহজ ব্যাখ্যা — দেখুন, বুঝুন, তারপর সিদ্ধান্ত নিন।"
          />
          <Reveal delay={140}>
            <div className="flex items-center gap-2">
              <a
                href={`https://www.youtube.com/watch?v=${VIDEOS[0].id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2.5 text-[12.5px] text-[#c8d4e0] backdrop-blur-md transition hover:border-[#e8c77e]/40 hover:text-[#f0d9a4]"
              >
                <Play className="size-4 fill-[#ff6b6b] text-[#ff6b6b]" />
                ইউটিউবে দেখুন
              </a>
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                className="grid size-10 place-items-center rounded-xl border border-white/12 bg-white/5 text-[#dbe5ef] backdrop-blur-md transition hover:border-[#e8c77e]/40 hover:text-[#f0d9a4]"
                aria-label="পূর্ববর্তী ভিডিও"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                className="grid size-10 place-items-center rounded-xl border border-[#e8c77e]/30 bg-[#e8c77e]/10 text-[#f0d9a4] backdrop-blur-md transition hover:bg-[#e8c77e] hover:text-[#07111f]"
                aria-label="পরবর্তী ভিডিও"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-10">
          <div
            ref={trackRef}
            className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0"
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
            onTouchStart={() => { pausedRef.current = true; }}
            onFocusCapture={() => { pausedRef.current = true; }}
            onBlurCapture={() => { pausedRef.current = false; }}
          >
            {VIDEOS.map((video, i) => (
              <article
                key={video.id}
                className="group glass w-[82%] shrink-0 snap-start overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-[#e8c77e]/30 xs:w-[72%] sm:w-[46%] lg:w-[calc((100%-28px)/3)]"
              >
                <button
                  type="button"
                  onClick={() => setActive(video)}
                  className="relative block w-full overflow-hidden text-left"
                  aria-label={`${video.title} — ভিডিও চালান`}
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-[radial-gradient(circle_at_30%_20%,#1d3b44,#0a1420_70%)]">
                    <span className="pointer-events-none absolute inset-0 grid place-items-center font-display text-4xl font-bold tracking-widest text-white/8">LS</span>
                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      loading="lazy"
                      className="h-full w-full scale-[1.02] object-cover transition duration-700 group-hover:scale-110"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/90 via-[#050b14]/10 to-[#050b14]/20" />
                    <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-[#050b14]/65 px-2 py-1 text-[9.5px] font-medium text-[#f1e4c5] backdrop-blur-md">
                      {video.topic}
                    </span>
                    <span className="absolute right-2.5 top-2.5 rounded-md bg-[#050b14]/80 px-1.5 py-1 text-[10px] font-medium tabular-nums text-white/90 backdrop-blur-md">
                      {video.duration}
                    </span>
                    <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-[#e8c77e]/95 text-[#07111f] shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition duration-300 group-hover:scale-110 group-hover:bg-[#f8e8bd]">
                      <Play className="ml-0.5 size-5 fill-current" />
                    </span>
                    <span className="absolute inset-x-0 bottom-0 flex items-center justify-between px-3 py-2 text-[10px] text-[#d9e3ee]">
                      <span className="inline-flex items-center gap-1">
                        <Eye className="size-3" /> {video.views} ভিউ
                      </span>
                      <span className="rounded bg-white/10 px-1.5 py-0.5 font-semibold tracking-wide text-white/90">HD</span>
                    </span>
                  </div>
                  <div className="p-3.5">
                    <div className="flex items-start gap-2.5">
                      <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-[#e8c77e]/14 font-display text-[10px] font-bold text-[#e8c77e]">
                        LS
                      </span>
                      <div>
                        <h3 className="text-[13.5px] font-medium leading-[1.65] text-[#eef2f7] transition group-hover:text-[#f5e5be] sm:text-[14px]">
                          {video.title}
                        </h3>
                        <p className="mt-1 text-[10.5px] text-[#8296aa]">
                          Legal Solutions · ভিডিও {toBn(i + 1)} / {toBn(VIDEOS.length)}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>

          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/6">
            <div className="h-full w-[38%] rounded-full bg-gradient-to-r from-[#e8c77e]/30 via-[#e8c77e] to-[#e8c77e]/30" />
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-[#7f93a8] sm:justify-start"><span>← ডানে-বাঁয়ে স্ক্রল করে সব ভিডিও দেখুন</span><span className="inline-flex items-center gap-1.5 text-[10px]"><span className="size-1.5 animate-pulse-dot rounded-full bg-[#6fe0a4]" /> ভিডিও স্লাইড চলছে</span></div>
        </div>

        <Reveal delay={120} className="mt-8">
          <div className="glass flex flex-col items-center justify-between gap-4 rounded-2xl px-5 py-4 sm:flex-row">
            <p className="text-center text-[13px] leading-relaxed text-[#b4c2d0] sm:text-left sm:text-sm">
              <span className="font-semibold text-white">ভিডিওর উত্তর আপনার পরিস্থিতিতে কীভাবে প্রযোজ্য?</span>{" "}
              ১৫ মিনিটে সরাসরি জিজ্ঞেস করুন — ফ্রি।
            </p>
            <button type="button" onClick={() => onBook()} className="btn-gold w-full shrink-0 !rounded-xl !py-2.5 !text-[13px] sm:w-auto">
              বিশেষজ্ঞের সঙ্গে কথা বলুন
              <ArrowRight className="size-4" />
            </button>
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      {active ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#02060b]/85 p-3 backdrop-blur-lg sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="ভিডিও প্লেয়ার"
          onClick={() => setActive(null)}
        >
          <div
            className="glass-gold w-full max-w-4xl overflow-hidden rounded-2xl p-2 sm:p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-2 pb-2 pt-1">
              <p className="line-clamp-1 pr-2 text-[13px] font-medium text-[#f5efe0] sm:text-sm">{active.title}</p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="grid size-8 shrink-0 place-items-center rounded-lg border border-white/12 bg-white/6 text-white transition hover:bg-white/12"
                aria-label="ভিডিও বন্ধ করুন"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 px-2 py-2">
              <p className="text-[11px] text-[#9eb0c3]">Legal Solutions · {active.topic}</p>
              <a
                href={`https://www.youtube.com/watch?v=${active.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11.5px] text-[#e8c77e] hover:text-[#f7e8c3]"
              >
                <ExternalLink className="size-3.5" /> YouTube-এ খুলুন
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
