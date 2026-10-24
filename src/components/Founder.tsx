import { ArrowUpRight, BadgeCheck, Quote, Scale, Sparkles } from "lucide-react";
import { CONTACT, waLink } from "../data";
import { Reveal, WhatsAppGlyph } from "./ui";

export default function Founder({ onBook }: { onBook: (service?: string) => void }) {
  return (
    <section id="founder" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e8c77e]/20 to-transparent" />
        <div className="absolute left-[-8%] top-[20%] size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(151,112,45,0.22),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[5%] right-[-5%] size-[25rem] rounded-full bg-[radial-gradient(circle,rgba(19,89,78,0.3),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-gold relative overflow-hidden rounded-[2rem] p-3 sm:p-4 lg:p-5">
          <div className="pointer-events-none absolute -right-16 -top-24 size-72 rounded-full bg-[#e8c77e]/10 blur-3xl" />
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
            {/* Portrait */}
            <Reveal className="relative">
              <div className="relative h-full min-h-[380px] overflow-hidden rounded-[1.4rem] sm:min-h-[460px]">
                <img
                  src="/images/founder-portrait.jpg"
                  alt={`${CONTACT.founder} — ${CONTACT.role}, Legal Solutions Consultancy Firm`}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent" />
                <div className="absolute inset-x-3 bottom-3">
                  <div className="glass-soft rounded-xl px-4 py-3">
                    <div className="flex items-center gap-2">
                      <p className="font-display text-[16px] font-semibold text-white">{CONTACT.founder}</p>
                      <BadgeCheck className="size-4 text-[#e8c77e]" />
                    </div>
                    <p className="mt-0.5 text-[11px] text-[#bcc9d7]">
                      {CONTACT.role} · {CONTACT.firm}
                    </p>
                    <div className="mt-2.5 hidden border-t border-white/10 pt-2 sm:block">
                      <p className="font-quote text-[13px] italic text-[#e8c77e]">Atiqul Islam Rasel</p>
                    </div>
                  </div>
                </div>
                <span className="absolute right-3 top-3 grid size-11 place-items-center rounded-full border border-[#e8c77e]/40 bg-[#050b14]/55 text-[#f0d9a4] backdrop-blur-md">
                  <Scale className="size-5" />
                </span>
              </div>
              <div className="animate-floaty absolute -left-2 top-[12%] hidden sm:block">
                <div className="glass rounded-xl px-3 py-2.5 text-center shadow-2xl">
                  <p className="font-display text-xl font-bold gold-text">৪.৯/৫</p>
                  <p className="mt-0.5 text-[9.5px] text-[#a8b8c8]">ক্লায়েন্ট রেটিং</p>
                </div>
              </div>
            </Reveal>

            {/* Quote & copy */}
            <div className="flex flex-col justify-center py-2 pr-1 sm:py-4 sm:pr-4 lg:py-7 lg:pl-2">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-[11.5px] font-medium tracking-wide text-[#e8c77e]">
                  <Sparkles className="size-3.5" />
                  প্রতিষ্ঠাতার বাণী
                </span>
              </Reveal>

              <Reveal delay={80}>
                <div className="relative mt-4">
                  <Quote className="absolute -left-1 -top-3 size-9 text-[#e8c77e]/20 sm:-left-3 sm:-top-4 sm:size-12" />
                  <blockquote className="font-quote relative pl-4 text-[18px] leading-[1.95] text-[#f3eee2] sm:pl-6 sm:text-[21px] lg:text-[23px]">
                    “আইন শুধু মামলার কাগজ নয় — এটি একজন মানুষের{" "}
                    <span className="text-[#f3dfae]">অধিকার, পরিবার ও ভবিষ্যতের সুরক্ষা</span>। সঠিক সময়ে সঠিক পরামর্শ
                    পেলে অনেক সমস্যা আদালত পর্যন্ত যেতে হয় না। তাই আমরা মামলা লড়ার পাশাপাশি আপনার অধিকারকে আগে থেকেই
                    সুরক্ষিত করি — সহজ ভাষায়, স্পষ্ট ফি এবং পূর্ণ দায়িত্ব নিয়ে।”
                  </blockquote>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="mt-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#e8c77e]/50" />
                  <div>
                    <p className="font-quote text-[17px] italic text-[#f0d9a4]">Atiqul Islam Rasel</p>
                    <p className="mt-0.5 text-[11.5px] text-[#9fb0c2]">
                      {CONTACT.role}, {CONTACT.firm}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {[
                    ["২৬টি", "সেবা এক ছাদে"],
                    ["৫,০০০+", "ক্লায়েন্ট"],
                    ["১০০%", "গোপনীয়তা"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2.5 backdrop-blur-md">
                      <p className="font-display text-lg font-bold text-white">{value}</p>
                      <p className="mt-0.5 text-[10.5px] text-[#94a7ba]">{label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                  <button type="button" onClick={() => onBook()} className="btn-gold !rounded-xl !py-3 !text-sm">
                    স্যারের সঙ্গে সেশন বুক করুন
                    <ArrowUpRight className="size-4" />
                  </button>
                  <a
                    href={waLink("আসসালামু আলাইকুম, প্রতিষ্ঠাতার সঙ্গে সরাসরি কথা বলতে চাই।")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !rounded-xl !py-3 !text-sm"
                  >
                    <WhatsAppGlyph className="size-4 text-[#6fe0a4]" />
                    সরাসরি WhatsApp
                  </a>
                </div>
                <p className="mt-3 text-[11px] text-[#8497ab]">
                  ব্যক্তিগত তথ্য সম্পূর্ণ গোপন রাখা হবে · {CONTACT.hours}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
