import { ArrowRight, ArrowUpRight, Clock3, Mail, MapPin, PhoneCall, Scale, ShieldCheck } from "lucide-react";
import { CONTACT, toBn, waLink } from "../data";
import { Logo, Reveal, WhatsAppGlyph } from "./ui";

const SERVICE_LINKS = [
  { label: "ট্রেড লাইসেন্স", service: "ট্রেড লাইসেন্স (নতুন/নবায়ন)" },
  { label: "কোম্পানি নিবন্ধন", service: "কোম্পানি নিবন্ধন" },
  { label: "জমির নামজারি", service: "জমির নামজারি/মিউটেশন" },
  { label: "ট্রেড মার্ক নিবন্ধন", service: "ট্রেড মার্ক নিবন্ধন" },
  { label: "ভিসা প্রসেসিং", service: "সকল দেশের ভিসা প্রসেসিং" },
  { label: "লিগ্যাল নোটিশ", service: "লিগ্যাল নোটিশ" },
];

const COMPANY_LINKS = [
  { label: "কেন Legal Solutions", href: "#why-us" },
  { label: "অন্য ফার্মের সাথে তুলনা", href: "#compare" },
  { label: "ভিডিও লাইব্রেরি", href: "#videos" },
  { label: "প্যাকেজ ও ফি", href: "#pricing" },
  { label: "সাধারণ প্রশ্ন", href: "#faq" },
  { label: "ফ্রি কনসালটেশন", href: "#booking" },
];

export default function Footer({ onBook }: { onBook: (service?: string) => void }) {
  return (
    <footer className="relative overflow-hidden border-t border-white/8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#03080f]" />
        <div className="absolute left-1/2 top-0 size-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(151,112,45,0.16),transparent_65%)] blur-3xl" />
        <div className="absolute inset-0 grid-lines opacity-25" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        {/* Final CTA */}
        <Reveal>
          <div className="glass-gold relative overflow-hidden rounded-[1.8rem] p-5 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-16 -top-24 size-80 rounded-full bg-[#e8c77e]/12 blur-3xl" />
            <Scale className="pointer-events-none absolute -bottom-10 right-2 size-52 text-white/[0.035]" strokeWidth={1} />
            <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#e8c77e]/25 bg-[#e8c77e]/10 px-3 py-1.5 text-[11px] text-[#f3dfae]">
                  <ShieldCheck className="size-3.5" /> প্রথম ১৫ মিনিট সম্পূর্ণ ফ্রি
                </span>
                <h2 className="mt-3 max-w-2xl text-[25px] font-bold leading-[1.4] text-white sm:text-[34px]">
                  আইনের অনিশ্চয়তায় আটকে থাকবেন না — <span className="gold-text">আজই কথা বলুন।</span>
                </h2>
                <p className="mt-2.5 max-w-xl text-[13px] leading-relaxed text-[#b5c3d1] sm:text-sm">
                  ফোন করুন, WhatsApp করুন কিংবা ক্যালেন্ডারে স্লট নিন। আপনার সমস্যাটি শুনে সঠিক পথ ও খরচের স্পষ্ট ধারণা
                  দেওয়াই আমাদের প্রথম কাজ।
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-[#a5b6c7]">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-[#6fe0a4]" /> ৫,০০০+ ক্লায়েন্টের আস্থা
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-[#e8c77e]" /> ২৬টি আইনি সেবা
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-[#9ec9ff]" /> সারা দেশে অনলাইন
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:min-w-[250px]">
                <button type="button" onClick={() => onBook()} className="btn-gold w-full !rounded-xl !py-3.5">
                  ফ্রি কনসালটেশন বুক করুন
                  <ArrowRight className="size-4" />
                </button>
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="btn-outline w-full !rounded-xl !py-3"
                >
                  <PhoneCall className="size-4 text-[#e8c77e]" />
                  <span dir="ltr">{CONTACT.phoneDisplay}</span>
                </a>
                <p className="text-center text-[10px] text-[#94a7ba]">শনি–বৃহস্পতি · সকাল ১০টা – রাত ৮টা</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Main footer */}
        <div className="mt-14 grid gap-9 border-t border-white/8 pt-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.85fr_0.85fr_1.15fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[12.5px] leading-[1.9] text-[#92a6b9]">
              বাংলাদেশের মানুষ ও ব্যবসার পাশে দাঁড়ানো একটি আধুনিক আইনি পরামর্শদাতা প্রতিষ্ঠান। ২৬টি সেবা, স্বচ্ছ ফি এবং
              প্রতিটি ধাপে ব্যক্তিগত দায়িত্ব — এটাই আমাদের অঙ্গীকার।
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#6fe0a4]/25 bg-[#6fe0a4]/8 px-2.5 py-2 text-[10.5px] text-[#9df0c3] transition hover:bg-[#6fe0a4]/15"
              >
                <WhatsAppGlyph className="size-3.5" /> WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-[10.5px] text-[#c4d2df] transition hover:border-[#e8c77e]/35"
              >
                <Mail className="size-3.5 text-[#e8c77e]" /> ইমেইল
              </a>
              <a
                href="#booking"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-[10.5px] text-[#c4d2df] transition hover:border-[#e8c77e]/35"
              >
                বুকিং <ArrowUpRight className="size-3 text-[#e8c77e]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-[#e8c77e]">
              জনপ্রিয় সেবা
            </h3>
            <ul className="mt-3.5 space-y-2">
              {SERVICE_LINKS.map((service) => (
                <li key={service.service}>
                  <button
                    type="button"
                    onClick={() => onBook(service.service)}
                    className="group inline-flex items-start gap-1.5 text-left text-[12px] leading-snug text-[#9cafc1] transition hover:text-[#f0d9a4]"
                  >
                    <span className="mt-1.5 size-1 shrink-0 rotate-45 bg-[#e8c77e]/45 transition group-hover:bg-[#e8c77e]" />
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-[#e8c77e]">
              প্রতিষ্ঠান
            </h3>
            <ul className="mt-3.5 space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-start gap-1.5 text-[12px] leading-snug text-[#9cafc1] transition hover:text-[#f0d9a4]"
                  >
                    <span className="mt-1.5 size-1 shrink-0 rotate-45 bg-[#e8c77e]/45 transition group-hover:bg-[#e8c77e]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[12px] font-semibold uppercase tracking-[0.16em] text-[#e8c77e]">
              যোগাযোগ
            </h3>
            <ul className="mt-3.5 space-y-2.5">
              <li>
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="flex items-start gap-2.5 rounded-lg text-[12px] text-[#b8c6d4] transition hover:text-[#f0d9a4]"
                >
                  <PhoneCall className="mt-0.5 size-3.5 shrink-0 text-[#e8c77e]" />
                  <span>
                    <span className="block text-[9.5px] text-[#7f94a8]">সেল / হোয়াটসঅ্যাপ</span>
                    <span dir="ltr">{CONTACT.phoneDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-2.5 rounded-lg text-[12px] text-[#b8c6d4] transition hover:text-[#f0d9a4]"
                >
                  <Mail className="mt-0.5 size-3.5 shrink-0 text-[#e8c77e]" />
                  <span className="min-w-0">
                    <span className="block text-[9.5px] text-[#7f94a8]">ইমেইল</span>
                    <span className="break-all text-[11px]">{CONTACT.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[12px] text-[#b8c6d4]">
                <Clock3 className="mt-0.5 size-3.5 shrink-0 text-[#e8c77e]" />
                <span>
                  <span className="block text-[9.5px] text-[#7f94a8]">অফিস সময়</span>
                  {CONTACT.hours}
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-[12px] text-[#b8c6d4]">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-[#e8c77e]" />
                <span>
                  <span className="block text-[9.5px] text-[#7f94a8]">লোকেশন</span>
                  {CONTACT.location}
                </span>
              </li>
            </ul>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2.5">
              <p className="text-[10px] leading-relaxed text-[#92a6b9]">
                <span className="font-semibold text-[#e8c77e]">{CONTACT.founder}</span> — {CONTACT.role}
                <br />
                {CONTACT.firm}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-white/8 py-5 text-[10.5px] text-[#71869a] sm:flex-row sm:items-center sm:justify-between">
          <p>© {toBn(new Date().getFullYear())} Legal Solutions Consultancy Firm. সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <a href="#faq" className="transition hover:text-[#d9c298]">গোপনীয়তা নীতি</a>
            <a href="#faq" className="transition hover:text-[#d9c298]">শর্তাবলি</a>
            <span className="hidden sm:inline text-[#4d5f71]">|</span>
            <span>সুরক্ষিত ও গোপনীয় যোগাযোগ</span>
          </div>
        </div>

        <p className="pb-5 text-[9.5px] leading-relaxed text-[#586c80]">
          দাবিত্যাগ: এই ওয়েবসাইটের সাধারণ তথ্য শুধুমাত্র সচেতনতার জন্য, কোনো নির্দিষ্ট মামলার আইনি পরামর্শ বা
          অ্যাটর্নি-ক্লায়েন্ট সম্পর্ক তৈরি করে না। নির্দিষ্ট বিষয়ে সিদ্ধান্তের আগে যোগ্য আইনজীবীর সঙ্গে সরাসরি পরামর্শ
          করুন।
        </p>

        <div className="relative -mb-6 select-none overflow-hidden" aria-hidden="true">
          <p className="text-center font-display text-[13vw] font-extrabold leading-none tracking-tighter text-white/[0.035] sm:text-[10vw]">
            LEGAL SOLUTIONS
          </p>
        </div>
      </div>
    </footer>
  );
}
