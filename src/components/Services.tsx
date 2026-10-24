import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, LayoutGrid, PhoneCall, SearchCheck, Sparkles } from "lucide-react";
import { CATEGORIES, CONTACT, SERVICES } from "../data";
import { toBn } from "../data";
import { Reveal, SectionHead } from "./ui";

const INITIAL_VISIBLE = 9;

export default function Services({ onBook }: { onBook: (service?: string) => void }) {
  const [category, setCategory] = useState<string>("all");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(
    () => (category === "all" ? SERVICES : SERVICES.filter((s) => s.category === category)),
    [category]
  );
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const remaining = filtered.length - INITIAL_VISIBLE;

  return (
    <section id="services" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[15%] size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(15,88,76,0.35),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-8%] top-[45%] size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(146,108,42,0.22),transparent_68%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            eyebrow="আমাদের সেবাসমূহ"
            title={
              <>
                জীবনের প্রায় প্রতিটি আইনি প্রয়োজনে <span className="gold-text">একটাই বিশ্বস্ত ঠিকানা</span>
              </>
            }
            description="কোম্পানি প্রতিষ্ঠা থেকে জমির দলিল, পারিবারিক আইন থেকে ভিসা — ২৬টি সেবা সুবিন্যস্ত ৬টি বিভাগে। নিচের ক্যাটাগরি থেকে আপনার প্রয়োজনটি বেছে নিন।"
          />
          <Reveal delay={180}>
            <div className="glass flex items-center gap-4 rounded-2xl px-4 py-3.5">
              <span className="grid size-11 place-items-center rounded-xl bg-[#e8c77e]/12 text-[#e8c77e]">
                <LayoutGrid className="size-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-white">২৬টি সার্ভিস · ৬টি বিভাগ</p>
                <p className="mt-0.5 text-[12px] text-[#97a8bb]">একটিমাত্র পরামর্শদাতা টিমের দায়িত্বে</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Category tabs */}
        <Reveal delay={100} className="mt-9">
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
            {CATEGORIES.map((cat) => {
              const isActive = category === cat.key;
              const count =
                cat.key === "all" ? SERVICES.length : SERVICES.filter((s) => s.category === cat.key).length;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => {
                    setCategory(cat.key);
                    setExpanded(false);
                  }}
                  className={`group inline-flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2.5 text-[13px] font-medium transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "border-[#f4e0ae]/70 bg-gradient-to-br from-[#f7e8c3] to-[#d3aa60] text-[#07111f] shadow-[0_10px_25px_-12px_rgba(232,199,126,0.8)]"
                      : "border-white/10 bg-white/[0.035] text-[#c4d0dd] backdrop-blur-md hover:border-[#e8c77e]/35 hover:bg-white/[0.07] hover:text-[#f5e5be]"
                  }`}
                  aria-pressed={isActive}
                >
                  {cat.label}
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ${
                      isActive ? "bg-[#07111f]/12 text-[#07111f]" : "bg-white/8 text-[#9fb0c3]"
                    }`}
                  >
                    {toBn(count)}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-6 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={Math.min(i * 45, 320)}>
                <article className="group glass relative flex h-full flex-col overflow-hidden rounded-2xl p-5 transition-all duration-400 hover:-translate-y-1.5 hover:border-[#e8c77e]/35 hover:shadow-[0_24px_60px_-30px_rgba(232,199,126,0.45)]">
                  <div className="pointer-events-none absolute -right-8 -top-10 size-28 rounded-full bg-[#e8c77e]/8 blur-2xl transition group-hover:bg-[#e8c77e]/16" />
                  <div className="flex items-start justify-between">
                    <span className="grid size-11 place-items-center rounded-xl border border-[#e8c77e]/20 bg-gradient-to-br from-[#e8c77e]/18 to-[#e8c77e]/5 text-[#f0d9a4] shadow-inner transition group-hover:scale-105 group-hover:text-[#fbf1d7]">
                      <Icon className="size-5" strokeWidth={1.8} />
                    </span>
                    <span className="font-display text-[26px] font-bold leading-none text-white/8 transition group-hover:text-[#e8c77e]/20">
                      {toBn(String(service.id).padStart(2, "0"))}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[16.5px] font-semibold leading-snug text-[#f5f3ec] transition group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-[1.8] text-[#98a9bc]">{service.desc}</p>
                  <button
                    type="button"
                    onClick={() => onBook(service.title)}
                    className="mt-4 inline-flex w-fit items-center gap-1.5 border-b border-transparent pt-1 text-[12.5px] font-medium text-[#e8c77e] transition hover:gap-2.5 hover:border-[#e8c77e]/40"
                  >
                    এই সেবার জন্য পরামর্শ নিন
                    <ArrowUpRight className="size-3.5" />
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {remaining > 0 || expanded ? (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="btn-outline !rounded-xl !px-5 !py-3 !text-sm"
            >
              {expanded ? "কম দেখুন" : `আরও ${toBn(remaining)}টি সেবা দেখুন`}
              <ArrowRight className={`size-4 transition-transform ${expanded ? "-rotate-90" : ""}`} />
            </button>
          ) : null}
          <a href="#booking" className="inline-flex items-center gap-2 text-[13.5px] text-[#a8b7c8] transition hover:text-[#f0d9a4]">
            <SearchCheck className="size-4 text-[#e8c77e]" />
            আপনার প্রয়োজন বুঝতে পারছেন না? ফ্রি পরামর্শ নিন
          </a>
        </div>

        {/* Full service index */}
        <Reveal delay={60} className="mt-8">
          <div className="glass-soft rounded-2xl p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-md bg-[#e8c77e]/12 text-[#e8c77e]">
                  <LayoutGrid className="size-3.5" />
                </span>
                <p className="font-display text-[13px] font-semibold text-[#f0ece2]">সব সেবা এক নজরে</p>
                <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9.5px] text-[#9fb0c3]">
                  ২৬টি
                </span>
              </div>
              <p className="text-[10px] text-[#8296aa]">যেকোনো সেবায় ক্লিক করে ফ্রি পরামর্শের জন্য নির্বাচন করুন</p>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {SERVICES.map((service) => (
                <button
                  key={`index-${service.id}`}
                  type="button"
                  onClick={() => onBook(service.title)}
                  className="rounded-full border border-white/8 bg-white/[0.025] px-2.5 py-1 text-[10.5px] leading-snug text-[#9fb0c3] transition hover:border-[#e8c77e]/40 hover:bg-[#e8c77e]/8 hover:text-[#f0d9a4]"
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Help strip */}
        <Reveal delay={120} className="mt-12">
          <div className="glass-gold relative overflow-hidden rounded-2xl p-5 sm:p-7">
            <div className="pointer-events-none absolute -right-12 -top-16 size-56 rounded-full bg-[#e8c77e]/15 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 hidden size-12 shrink-0 place-items-center rounded-xl border border-[#e8c77e]/30 bg-[#e8c77e]/15 text-[#f3dfae] sm:grid">
                  <Sparkles className="size-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-white sm:text-xl">
                    কোন সার্ভিসটি দরকার, নিশ্চিত নন?
                  </p>
                  <p className="mt-1 max-w-xl text-[13px] leading-relaxed text-[#bdcad8] sm:text-sm">
                    ৩০ সেকেন্ডে আপনার পরিস্থিতি জানান — কোন কাজটি লাগবে, কী কী কাগজ লাগবে এবং আনুমানিক খরচ কত, প্রথম
                    আলোচনাতেই স্পষ্ট করে দেব।
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                <a href={`tel:${CONTACT.phoneTel}`} className="btn-outline !rounded-xl !py-2.5 !text-[13px]">
                  <PhoneCall className="size-4 text-[#e8c77e]" />
                  <span dir="ltr">{CONTACT.phoneDisplay}</span>
                </a>
                <button
                  type="button"
                  onClick={() => onBook()}
                  className="btn-gold !rounded-xl !py-2.5 !text-[13px]"
                >
                  ফ্রি বুকিং <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
