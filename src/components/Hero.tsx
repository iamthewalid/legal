import {
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Star,
} from "lucide-react";
import { CONTACT, MARQUEE_ITEMS, STATS, waLink } from "../data";
import { Reveal, WhatsAppGlyph } from "./ui";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#050b14]" />
        <div className="absolute -left-[18%] top-[-12%] size-[46rem] rounded-full bg-[radial-gradient(circle,rgba(19,89,78,0.55),transparent_65%)] blur-2xl" />
        <div className="absolute -right-[10%] top-[2%] size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(151,112,45,0.34),transparent_66%)] blur-2xl" />
        <div className="absolute bottom-[-20%] left-[35%] size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(27,74,110,0.4),transparent_70%)] blur-2xl" />
        <div className="absolute inset-0 grid-lines opacity-70" />
        <div className="absolute inset-0 noise" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10">
          {/* Copy */}
          <div className="relative">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.055] px-3 py-1.5 text-[12px] text-[#d9e3ee] backdrop-blur-xl sm:text-[13px]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#6fe0a4] opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#6fe0a4]" />
                </span>
                বাংলাদেশের বিশ্বস্ত আইনি পরামর্শদাতা
                <span className="hidden h-3 w-px bg-white/20 sm:block" />
                <span className="hidden text-[#e8c77e] sm:block">২৬টি সেবা</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 text-[36px] font-bold leading-[1.28] tracking-tight text-white sm:text-5xl lg:text-[58px] lg:leading-[1.22]">
                আইনের জটিলতায়
                <br />
                আর <span className="gold-text">একা নন।</span>
                <span className="mt-1.5 block text-[22px] font-medium leading-snug text-[#c9d5e3] sm:text-[28px] lg:text-[30px]">
                  আপনার অধিকার, আমাদের দায়িত্ব।
                </span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 max-w-xl text-[15px] leading-[1.9] text-[#a8b7c8] sm:text-[17px]">
                কোম্পানি, জমি-সম্পত্তি, পরিবার, ভিসা কিংবা নাগরিক সেবা — <span className="text-white">২৬টি আইনি সেবা</span> এক
                ছাদের নিচে। অভিজ্ঞ পরামর্শ, আগেই স্পষ্ট ফি এবং প্রতিটি ধাপে আপডেট। প্রথম{" "}
                <span className="font-semibold text-[#f0d9a4]">১৫ মিনিট কনসালটেশন সম্পূর্ণ ফ্রি।</span>
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#booking" className="btn-gold group w-full !rounded-xl sm:w-auto">
                  <CalendarCheck className="size-[18px]" />
                  ফ্রি কনসালটেশন বুক করুন
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline group w-full !rounded-xl sm:w-auto"
                >
                  <span className="grid size-6 place-items-center rounded-full bg-[#25D366]/15">
                    <WhatsAppGlyph className="size-4 text-[#6fe0a4]" />
                  </span>
                  WhatsApp-এ কথা বলুন
                </a>
              </div>
            </Reveal>

            <Reveal delay={255}>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="glass-soft inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[12px] font-medium text-[#e8eef5] transition hover:border-[#e8c77e]/40 hover:text-[#f7e8c3]"
                >
                  <span className="grid size-6 place-items-center rounded-md bg-[#e8c77e]/12 text-[#e8c77e]">
                    <PhoneCall className="size-3" />
                  </span>
                  <span dir="ltr">{CONTACT.phoneDisplay}</span>
                  <span className="text-[10px] text-[#8fa3b7]">· সরাসরি কল</span>
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="glass-soft inline-flex min-w-0 items-center gap-2 rounded-lg px-3 py-2 text-[11px] font-medium text-[#c9d6e3] transition hover:border-[#e8c77e]/40 hover:text-[#f7e8c3]"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-md bg-[#e8c77e]/12 text-[#e8c77e]">
                    <Mail className="size-3" />
                  </span>
                  <span className="truncate">{CONTACT.email}</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-[#93a4b7]">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="size-3.5 text-[#6fe0a4]" /> কোনো অগ্রিম পেমেন্ট নেই
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-[#e8c77e]" /> ১০০% গোপনীয়তা
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-[#e8c77e]" /> অনলাইনে সারা দেশে
                </span>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex -space-x-2.5">
                  {[
                    ["র", "bg-[#1d4b5c]"],
                    ["স", "bg-[#5a4326]"],
                    ["ম", "bg-[#2f4d3b]"],
                    ["ন", "bg-[#41325c]"],
                  ].map(([letter, color]) => (
                    <span
                      key={letter}
                      className={`grid size-9 place-items-center rounded-full border-2 border-[#0a1420] ${color} text-[13px] font-semibold text-[#f4ead2]`}
                    >
                      {letter}
                    </span>
                  ))}
                  <span className="grid size-9 place-items-center rounded-full border-2 border-[#0a1420] bg-[#e8c77e] text-[11px] font-bold text-[#07111f]">
                    ৫,০০০+
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="size-3.5 fill-[#e8c77e] text-[#e8c77e]" />
                    ))}
                    <span className="ml-1 text-[13px] font-semibold text-white">৪.৯/৫</span>
                  </div>
                  <p className="mt-0.5 text-[12px] text-[#8fa0b3]">৫,০০০+ পরিবার ও ব্যবসার আস্থা</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={180} className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 -z-10">
                <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_50%_40%,rgba(232,199,126,0.18),transparent_65%)] blur-2xl" />
                <div className="absolute left-1/2 top-1/2 size-[110%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-[#e8c77e]/15" />
              </div>

              <div className="glass-gold relative overflow-hidden rounded-[2rem] p-2.5 sm:p-3">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0a141f]">
                  <img
                    src="/images/founder-desk.jpg"
                    alt="আতিকুল ইসলাম রাসেল, প্রতিষ্ঠাতা ও CEO — Legal Solutions Consultancy Firm-এর ল অফিসে"
                    className="h-[420px] w-full object-cover object-center sm:h-[480px] lg:h-[540px]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/18 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <div className="glass-soft flex items-center justify-between gap-3 rounded-xl px-3.5 py-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="truncate font-display text-[16px] font-semibold text-white sm:text-lg">
                            {CONTACT.founder}
                          </p>
                          <BadgeCheck className="size-4 shrink-0 text-[#e8c77e]" />
                        </div>
                        <p className="mt-0.5 truncate text-[11.5px] text-[#b8c6d6] sm:text-xs">
                          প্রতিষ্ঠাতা ও CEO · আইন পরামর্শদাতা
                        </p>
                      </div>
                      <a
                        href={`tel:${CONTACT.phoneTel}`}
                        className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#f7e8c3] to-[#c99d53] text-[#07111f] shadow-lg transition hover:scale-105"
                        aria-label="ফোন করুন"
                      >
                        <PhoneCall className="size-[17px]" />
                      </a>
                    </div>
                  </div>
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#050b14]/55 px-2.5 py-1.5 text-[10.5px] font-medium text-[#f1e2bd] backdrop-blur-md">
                    <span className="size-1.5 animate-pulse-dot rounded-full bg-[#6fe0a4]" />
                    আজই ফ্রি পরামর্শ
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="animate-floaty absolute -left-3 top-[19%] sm:-left-6">
                <div className="glass flex items-center gap-2.5 rounded-xl px-3 py-2.5 shadow-2xl">
                  <span className="grid size-8 place-items-center rounded-lg bg-[#e8c77e]/15 text-[#e8c77e]">
                    <ShieldCheck className="size-4" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold leading-none text-white">২৬টি সেবা</p>
                    <p className="mt-1 text-[10px] leading-none text-[#9fb0c3]">এক ছাদের নিচে</p>
                  </div>
                </div>
              </div>

              <div className="animate-floaty-slow absolute -right-2 top-[9%] sm:-right-5">
                <div className="glass-gold rounded-xl px-3 py-2.5 shadow-2xl">
                  <p className="font-display text-[11px] leading-none text-[#f0d9a4]">প্রথম ধাপ</p>
                  <p className="mt-1.5 font-display text-lg font-bold leading-none text-white">ফ্রি</p>
                  <p className="mt-1 text-[10px] leading-none text-[#c8d3df]">১৫ মিনিট</p>
                </div>
              </div>

              <div className="absolute right-2 top-[43%] hidden sm:block">
                <div className="glass flex items-center gap-2 rounded-xl px-3 py-2 shadow-2xl">
                  <div className="flex -space-x-1.5">
                    {["টি", "ভ", "স"].map((l, i) => (
                      <span
                        key={l}
                        className={`grid size-6 place-items-center rounded-full border border-[#0a1420] text-[9px] font-semibold text-[#0e1825] ${
                          i === 0 ? "bg-[#e8c77e]" : i === 1 ? "bg-[#9fc4b9]" : "bg-[#c9b5e0]"
                        }`}
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                  <div className="text-[10px] leading-tight text-[#c6d3e1]">
                    <span className="font-semibold text-white">৪২ জন</span> আজ বুক করেছেন
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={120} className="mt-16 sm:mt-20">
          <div className="glass grid grid-cols-2 divide-x divide-y divide-white/8 overflow-hidden rounded-2xl md:grid-cols-4 md:divide-y-0">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="group relative px-4 py-5 text-center sm:px-6 sm:py-6">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#e8c77e]/6 to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {i === 3 ? <span className="gold-text">{stat.value}</span> : stat.value}
                </p>
                <p className="mt-1 text-[11.5px] text-[#9dafc2] sm:text-[13px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Trust marquee */}
      <div className="relative mt-14 border-y border-white/8 bg-white/[0.025] py-3.5 backdrop-blur-md sm:mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#050b14] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#050b14] to-transparent" />
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((group) => (
            <div key={group} className="flex items-center" aria-hidden={group === 1}>
              {MARQUEE_ITEMS.map((item) => (
                <span key={`${group}-${item}`} className="flex items-center gap-5 px-5">
                  <span className="whitespace-nowrap font-display text-[13px] font-medium tracking-wide text-[#b7c4d2] sm:text-sm">
                    {item}
                  </span>
                  <span className="size-1 rotate-45 bg-[#e8c77e]/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
