import { ArrowRight, Check, Crown, MessageCircleQuestion, Sparkles } from "lucide-react";
import { CONTACT, PLANS, waLink } from "../data";
import { Reveal, SectionHead, WhatsAppGlyph } from "./ui";

export default function Pricing({ onBook }: { onBook: (service?: string) => void }) {
  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,23,33,0.7),transparent)]" />
        <div className="absolute left-1/2 top-[18%] size-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(150,110,42,0.17),transparent_65%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="স্বচ্ছ প্যাকেজ"
          title={
            <>
              আপনার বাজেট অনুযায়ী <span className="gold-text">সঠিক আইনি সুরক্ষা</span> বেছে নিন
            </>
          }
          description="কোনো লুকানো চার্জ নেই। কাজ শুরুর আগেই সব খরচ লিখিতভাবে জানুন। প্রতিটি প্যাকেজে আছে নির্দিষ্ট পরামর্শদাতা ও সময়মতো আপডেট।"
          center
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className={plan.popular ? "lg:-mt-3 lg:mb-3" : ""}>
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-5 transition duration-300 sm:p-6 ${
                  plan.popular
                    ? "glass-gold border-[#e8c77e]/45 shadow-[0_30px_80px_-35px_rgba(232,199,126,0.5)]"
                    : "glass hover:-translate-y-1 hover:border-[#e8c77e]/25"
                }`}
              >
                {plan.popular ? (
                  <>
                    <div className="pointer-events-none absolute -right-10 -top-14 size-44 rounded-full bg-[#e8c77e]/15 blur-3xl" />
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#f7e8c3] to-[#d3aa60] px-2.5 py-1 text-[9.5px] font-bold text-[#07111f] shadow-lg">
                      <Crown className="size-2.5" /> সবচেয়ে জনপ্রিয়
                    </span>
                  </>
                ) : (
                  <span className="absolute right-4 top-4 text-[10px] tracking-wider text-white/20">0{i + 1}</span>
                )}

                <span
                  className={`grid size-11 place-items-center rounded-xl border ${
                    plan.popular
                      ? "border-[#e8c77e]/40 bg-[#e8c77e]/18 text-[#f7e8c3]"
                      : "border-white/10 bg-white/5 text-[#e8c77e]"
                  }`}
                >
                  <Sparkles className="size-5" />
                </span>

                <h3 className="mt-4 font-display text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 min-h-[38px] text-[12px] leading-relaxed text-[#94a7ba]">{plan.tagline}</p>

                <div className="mt-4 flex items-end gap-1.5 border-y border-white/10 py-4">
                  <span className={`font-display text-[19px] font-semibold ${plan.popular ? "text-[#e8c77e]" : "text-[#b9c8d7]"}`}>৳</span>
                  <span className="font-display text-[38px] font-bold leading-none text-white">{plan.price}</span>
                  <span className="pb-1 text-[11px] text-[#9db0c3]">{plan.unit}</span>
                </div>

                <ul className="mt-4 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[12.5px] leading-snug text-[#becad8]">
                      <span
                        className={`mt-0.5 grid size-4 shrink-0 place-items-center rounded-full ${
                          plan.popular ? "bg-[#e8c77e]/20 text-[#f0d9a4]" : "bg-[#6fe0a4]/12 text-[#6fe0a4]"
                        }`}
                      >
                        <Check className="size-2.5" strokeWidth={3.5} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onBook(`প্যাকেজ: ${plan.name}`)}
                  className={`mt-5 w-full !rounded-xl !py-3 !text-[13.5px] ${plan.popular ? "btn-gold" : "btn-outline"}`}
                >
                  {plan.cta}
                  <ArrowRight className="size-4" />
                </button>
                {plan.popular ? (
                  <p className="mt-2 text-center text-[10px] text-[#a9bbc9]">প্রথম সেশন ফ্রি · পরে সিদ্ধান্ত নিন</p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-[#8b9eb2]">
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3 text-[#6fe0a4]" /> সর্বনিম্ন ৩০% সাশ্রয় প্যাকেজে
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3 text-[#6fe0a4]" /> সরকারি ফি ও কোর্ট ফি আলাদা
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3 text-[#6fe0a4]" /> প্রয়োজনে কাস্টম প্যাকেজ
            </span>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-8">
          <div className="glass flex flex-col items-start justify-between gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:p-6">
            <div className="flex items-start gap-3.5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-[#6fe0a4]/25 bg-[#6fe0a4]/10 text-[#6fe0a4]">
                <MessageCircleQuestion className="size-5" />
              </span>
              <div>
                <p className="font-display text-[15.5px] font-semibold text-white">আপনার ব্যবসার জন্য কাস্টম প্ল্যান দরকার?</p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#9aacbf]">
                  বড় কোম্পানি, স্টার্টআপ নাকি প্রবাসী? আপনার প্রয়োজন বুঝে আলাদা প্যাকেজ তৈরি করে দেব।
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="btn-outline shrink-0 !rounded-xl !py-2.5 !text-[12.5px]"
              >
                <span dir="ltr">{CONTACT.phoneDisplay}</span>
              </a>
              <a
                href={waLink("আমার জন্য একটি কাস্টম লিগ্যাল প্যাকেজ দরকার। বিস্তারিত জানতে চাই।")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold shrink-0 !rounded-xl !py-2.5 !text-[12.5px]"
              >
                <WhatsAppGlyph className="size-4" /> কাস্টম কোট নিন
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
