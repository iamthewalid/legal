import { ArrowUpRight, Quote, ShieldCheck, Users } from "lucide-react";
import { ADVANTAGES, PROCESS } from "../data";
import { Reveal, SectionHead } from "./ui";

export default function WhyUs({ onBook }: { onBook: (service?: string) => void }) {
  return (
    <section id="why-us" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute right-[8%] top-[10%] size-[26rem] rounded-full bg-[radial-gradient(circle,rgba(20,86,82,0.32),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="কেন Legal Solutions"
          title={
            <>
              সঠিক আইনজীবী খুঁজতে <span className="gold-text">সময় নষ্ট নয়</span> — সমাধান এখানেই
            </>
          }
          description="আইনি সেবায় সবচেয়ে বড় দুশ্চিন্তা দুটি — খরচ কত হবে, আর কাজটা ঠিকভাবে হবে কি না। আমরা দুটোই আগেই পরিষ্কার করে দিই, লিখিতভাবে।"
          center
          className="mx-auto"
        />

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          {/* Visual */}
          <Reveal className="relative">
            <div className="glass relative h-full overflow-hidden rounded-[1.8rem] p-2.5">
              <div className="relative h-full min-h-[360px] overflow-hidden rounded-[1.3rem]">
                <img
                  src="/images/office.jpg"
                  alt="Legal Solutions Consultancy Firm-এর আধুনিক আইনি পরামর্শ কক্ষ"
                  className="h-full w-full object-cover object-center transition-transform duration-[1.2s] hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-[#050b14]/45 to-transparent" />

                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#050b14]/50 px-3 py-1.5 text-[11.5px] text-[#f2e3bf] backdrop-blur-md">
                  <ShieldCheck className="size-3.5 text-[#e8c77e]" />
                  গোপনীয়তা আমাদের অঙ্গীকার
                </div>

                <div className="absolute inset-x-4 bottom-4">
                  <div className="glass-soft rounded-xl p-4">
                    <Quote className="size-5 text-[#e8c77e]/80" />
                    <p className="font-quote mt-2 text-[15px] leading-[1.85] text-[#f3eee2] sm:text-[16.5px]">
                      “আইন জানা মানুষের সবচেয়ে বড় শক্তি — আমরা সেটাকে আপনার সহজ ভাষায় পৌঁছে দিই।”
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
                      <p className="text-[11.5px] leading-tight text-[#a9b9c9]">
                        <span className="font-semibold text-[#f0d9a4]">প্রতিষ্ঠাতা ও CEO</span>
                        <br />
                        Legal Solutions Consultancy Firm
                      </p>
                      <span className="flex items-center gap-1 rounded-md bg-[#e8c77e]/12 px-2 py-1 text-[10.5px] text-[#f0d9a4]">
                        <Users className="size-3" /> ডেডিকেটেড টিম
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 -top-5 z-10 sm:right-4">
              <div className="animate-floaty glass-gold flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 shadow-2xl">
                <span className="font-display text-2xl font-bold gold-text">১২+</span>
                <span className="text-[10.5px] leading-tight text-[#d8e1eb]">
                  বছরের
                  <br />
                  আইনি অভিজ্ঞতা
                </span>
              </div>
            </div>

          </Reveal>

          {/* Advantages */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-0">
            {ADVANTAGES.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 70}>
                  <div className="group glass-soft h-full rounded-xl p-4 transition duration-300 hover:border-[#e8c77e]/30 hover:bg-white/[0.06]">
                    <div className="flex items-start gap-3">
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-[#e8c77e]/20 bg-[#e8c77e]/10 text-[#e8c77e] transition group-hover:bg-[#e8c77e]/20">
                        <Icon className="size-[18px]" strokeWidth={1.8} />
                      </span>
                      <div>
                        <h3 className="text-[14.5px] font-semibold text-[#f2f1eb]">{item.title}</h3>
                        <p className="mt-1.5 text-[12.5px] leading-[1.8] text-[#94a6ba]">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={430} className="sm:col-span-2">
              <button
                type="button"
                onClick={() => onBook()}
                className="group glass flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-left transition hover:border-[#e8c77e]/35"
              >
                <div>
                  <p className="font-display text-[14px] font-semibold text-white">প্রথমে কথা বলুন, খরচ জানুন — তারপর সিদ্ধান্ত</p>
                  <p className="mt-0.5 text-[11.5px] text-[#94a6ba]">ফ্রি ১৫ মিনিট কনসালটেশনে কোনো বাধ্যবাধকতা নেই</p>
                </div>
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#e8c77e]/35 bg-[#e8c77e]/10 text-[#f0d9a4] transition group-hover:bg-[#e8c77e] group-hover:text-[#07111f]">
                  <ArrowUpRight className="size-4" />
                </span>
              </button>
            </Reveal>
          </div>
        </div>

        {/* Process */}
        <div className="mt-20 sm:mt-24">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <Reveal>
              <p className="text-[12px] font-medium tracking-wider text-[#e8c77e]">শুরু করার সহজ পথ</p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-[32px]">
                মাত্র ৪ ধাপে আপনার আইনি কাজ শুরু
              </h3>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-md text-[13px] leading-relaxed text-[#93a5b8]">
                লম্বা ফরম বা জটিল ভাষা নয়। প্রথম ধাপটাই আমরা সহজ করে রেখেছি — বাকিটা আমাদের দায়িত্ব।
              </p>
            </Reveal>
          </div>

          <div className="relative mt-9">
            <div className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-transparent via-[#e8c77e]/30 to-transparent lg:block" />
            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((step, i) => (
                <Reveal key={step.step} delay={i * 90}>
                  <div className="group glass relative h-full overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1 hover:border-[#e8c77e]/30">
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-full border border-[#e8c77e]/35 bg-[#07131e] font-display text-[15px] font-bold text-[#f0d9a4] shadow-[0_0_0_6px_rgba(5,11,20,0.6)]">
                        {step.step}
                      </span>
                      <span className="font-display text-[10px] tracking-widest text-white/20">ধাপ {step.step}</span>
                    </div>
                    <h4 className="mt-4 text-[15px] font-semibold text-white">{step.title}</h4>
                    <p className="mt-1.5 text-[12.5px] leading-[1.8] text-[#98a9bc]">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
