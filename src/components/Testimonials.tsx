import { ArrowUpRight, BadgeCheck, Quote, ShieldCheck, Star, Users } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { Reveal, SectionHead, Stars } from "./ui";

export default function Testimonials({ onBook }: { onBook: (service?: string) => void }) {
  return (
    <section id="testimonials" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute left-[-6%] bottom-[8%] size-[26rem] rounded-full bg-[radial-gradient(circle,rgba(20,82,75,0.3),transparent_68%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
          <div>
            <SectionHead
              eyebrow="ক্লায়েন্টদের কথা"
              title={
                <>
                  যারা আগে <span className="gold-text">আমাদের উপর ভরসা</span> করেছেন
                </>
              }
              description="আমাদের সবচেয়ে বড় পরিচয় আমাদের ক্লায়েন্টদের অভিজ্ঞতা। কিছু সত্যিকারের কথা, তাদের ভাষাতেই।"
            />

            <Reveal delay={180} className="mt-7">
              <div className="glass rounded-2xl p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-display text-5xl font-bold leading-none gold-text">৪.৯</p>
                    <p className="mt-1 text-[11.5px] text-[#93a5b8]">গড় ক্লায়েন্ট রেটিং (৫-এর মধ্যে)</p>
                  </div>
                  <div className="text-right">
                    <Stars className="justify-end" />
                    <p className="mt-1.5 text-[11px] text-[#8fa2b6]">৩২০+ ভেরিফায়েড রিভিউ</p>
                  </div>
                </div>
                <div className="mt-4 space-y-1.5">
                  {[
                    ["৫ স্টার", 94],
                    ["৪ স্টার", 5],
                    ["৩ স্টার", 1],
                  ].map(([label, width]) => (
                    <div key={label as string} className="flex items-center gap-2.5">
                      <span className="w-11 text-[10.5px] text-[#9aacbf]">{label}</span>
                      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/7">
                        <span
                          className="block h-full rounded-full bg-gradient-to-r from-[#b98a3f] to-[#f0d9a4]"
                          style={{ width: `${width}%` }}
                        />
                      </span>
                      <span className="w-7 text-right text-[10px] text-[#7f93a8]">{width}%</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2.5">
                    <Users className="size-4 text-[#e8c77e]" />
                    <p className="mt-1.5 font-display text-sm font-semibold text-white">৫,০০০+</p>
                    <p className="text-[10px] text-[#8fa2b6]">সন্তুষ্ট ক্লায়েন্ট</p>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2.5">
                    <ShieldCheck className="size-4 text-[#6fe0a4]" />
                    <p className="mt-1.5 font-display text-sm font-semibold text-white">১০০%</p>
                    <p className="text-[10px] text-[#8fa2b6]">গোপনীয়তা রক্ষা</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onBook()}
                  className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#e8c77e] transition hover:gap-2.5"
                >
                  আপনি হোন পরবর্তী সন্তুষ্ট ক্লায়েন্ট <ArrowUpRight className="size-3.5" />
                </button>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="group glass relative flex h-full flex-col overflow-hidden rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:border-[#e8c77e]/30 sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <Stars count={t.stars} />
                    <Quote className="size-5 text-[#e8c77e]/25 transition group-hover:text-[#e8c77e]/45" />
                  </div>
                  <blockquote className="mt-3 flex-1 text-[12.8px] leading-[1.9] text-[#b8c5d3] sm:text-[13.5px]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-2.5 border-t border-white/8 pt-3.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#e8c77e]/25 bg-gradient-to-br from-[#274454] to-[#15232f] text-[11px] font-semibold text-[#f2e3bf]">
                      {t.initials}
                    </span>
                    <div className="min-w-0">
                      <p className="flex items-center gap-1 text-[12.5px] font-semibold text-[#f2f0e9]">
                        {t.name}
                        <BadgeCheck className="size-3.5 text-[#6fe0a4]" />
                      </p>
                      <p className="truncate text-[10.5px] text-[#8fa2b6]">{t.meta}</p>
                    </div>
                    <span className="ml-auto hidden shrink-0 rounded-md border border-[#e8c77e]/15 bg-[#e8c77e]/8 px-1.5 py-1 text-[9px] text-[#e8c77e] sm:block">
                      {t.service}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={340} className="sm:col-span-2">
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-[10.5px] text-[#9eb0c3] backdrop-blur-md">
                <span className="inline-flex items-center gap-1.5">
                  <Star className="size-3 fill-[#e8c77e] text-[#e8c77e]" /> ভেরিফায়েড ক্লায়েন্ট রিভিউ
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="size-3 text-[#6fe0a4]" /> পরিচয় গোপন রাখা হয়েছে
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="size-3 text-[#e8c77e]" /> সেবা শেষে সংগৃহীত মতামত
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
