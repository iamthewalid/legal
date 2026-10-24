import { useState } from "react";
import { ArrowUpRight, Clock3, Mail, Minus, PhoneCall, Plus } from "lucide-react";
import { CONTACT, toBn, waLink } from "../data";
import { Reveal, SectionHead, WhatsAppGlyph } from "./ui";

export default function Faq({ onBook }: { onBook: (service?: string) => void }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute right-[-8%] top-[20%] size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(19,80,74,0.27),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <SectionHead
              eyebrow="সাধারণ প্রশ্ন"
              title={
                <>
                  প্রথমে যা <span className="gold-text">জানাটা জরুরি</span>
                </>
              }
              description="আইনি কাজ শুরু করার আগে সাধারণ মানুষের সবচেয়ে বেশি যে প্রশ্নগুলো আসে — সেগুলোর সরল উত্তর এখানে।"
            />

            <Reveal delay={160} className="mt-7">
              <div className="glass-gold rounded-2xl p-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#6fe0a4] opacity-60" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-[#6fe0a4]" />
                  </span>
                  <p className="text-[12px] font-medium text-[#f0d9a4]">এখনই কথা বলতে চান?</p>
                </div>
                <p className="mt-2 text-[12.5px] leading-relaxed text-[#b7c5d3]">
                  প্রশ্নের উত্তর খুঁজে না পেলে সরাসরি ফোন করুন অথবা WhatsApp-এ লিখুন। অফিস সময়ে{" "}
                  <span className="text-white">৩০ মিনিটের মধ্যে</span> উত্তর দেওয়ার চেষ্টা করি।
                </p>
                <div className="mt-4 space-y-2">
                  <a
                    href={`tel:${CONTACT.phoneTel}`}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-[#07131e]/60 px-3.5 py-2.5 transition hover:border-[#e8c77e]/35"
                  >
                    <span className="flex items-center gap-2.5 text-[12.5px] text-[#dbe5ef]">
                      <PhoneCall className="size-4 text-[#e8c77e]" /> ফোনে পরামর্শ
                    </span>
                    <span dir="ltr" className="text-[11.5px] text-[#9db0c3]">{CONTACT.phoneDisplay}</span>
                  </a>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-[#6fe0a4]/20 bg-[#6fe0a4]/7 px-3.5 py-2.5 transition hover:border-[#6fe0a4]/45"
                  >
                    <span className="flex items-center gap-2.5 text-[12.5px] text-[#dbe5ef]">
                      <WhatsAppGlyph className="size-4 text-[#6fe0a4]" /> WhatsApp
                    </span>
                    <span className="text-[11px] text-[#9db0c3]">সবচেয়ে দ্রুত</span>
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-[#07131e]/60 px-3.5 py-2.5 transition hover:border-[#e8c77e]/35"
                  >
                    <span className="flex shrink-0 items-center gap-2.5 text-[12.5px] text-[#dbe5ef]">
                      <Mail className="size-4 text-[#e8c77e]" /> ইমেইল
                    </span>
                    <span className="truncate text-[10.5px] text-[#9db0c3]">{CONTACT.email}</span>
                  </a>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-[10.5px] text-[#8fa3b7]">
                  <Clock3 className="size-3 text-[#e8c77e]" /> {CONTACT.hours}
                </p>
                <button
                  type="button"
                  onClick={() => onBook()}
                  className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#f0d9a4] transition hover:gap-2.5"
                >
                  ফ্রি স্লট বুক করুন <ArrowUpRight className="size-3.5" />
                </button>
              </div>
            </Reveal>
          </div>

          <div className="space-y-2.5">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 45}>
                  <div
                    className={`glass overflow-hidden rounded-xl transition-colors ${
                      isOpen ? "border-[#e8c77e]/30 bg-white/[0.055]" : "hover:border-white/20"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 font-display text-[10.5px] font-bold ${
                            isOpen ? "text-[#e8c77e]" : "text-[#708497]"
                          }`}
                        >
                          {toBn(String(i + 1).padStart(2, "0"))}
                        </span>
                        <span className={`text-[13px] font-medium leading-snug sm:text-[14px] ${isOpen ? "text-[#f7e8c3]" : "text-[#dde5ee]"}`}>
                          {item.q}
                        </span>
                      </span>
                      <span
                        className={`grid size-6 shrink-0 place-items-center rounded-md border transition ${
                          isOpen
                            ? "border-[#e8c77e]/40 bg-[#e8c77e]/15 text-[#f0d9a4]"
                            : "border-white/12 bg-white/5 text-[#a8b8c9]"
                        }`}
                      >
                        {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-400 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-4 pl-[3.15rem] text-[12.5px] leading-[1.9] text-[#a4b5c6] sm:px-5 sm:pb-5 sm:pl-[3.4rem]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "ফ্রি কনসালটেশন কীভাবে বুক করব?",
    a: "এই পেজের নিচের ‘ফ্রি কনসালটেশন বুক করুন’ ক্যালেন্ডারে পছন্দের তারিখ ও সময় নির্বাচন করে নাম, ফোন নম্বর এবং সমস্যার সংক্ষিপ্ত বর্ণনা দিন। আমরা ৩০ মিনিটের মধ্যে ফোন বা WhatsApp-এ নিশ্চিত করব। চাইলে সরাসরি +88 01710-348623 নম্বরেও যোগাযোগ করতে পারেন।",
  },
  {
    q: "আপনাদের ফি কেমন এবং কীভাবে নির্ধারিত হয়?",
    a: "কাজের ধরন, জটিলতা, সময় ও ডকুমেন্টের সংখ্যা দেখে সাধারণত ফি নির্ধারিত হয়। প্রাথমিক মূল্যায়ন ফ্রি; কাজ শুরুর আগে লিখিত ফি-এসটিমেট দেওয়া হয়। সরকারি ফি, কোর্ট ফি, স্ট্যাম্প ডিউটি ও ভ্রমণ খরচ আলাদাভাবে প্রযোজ্য।",
  },
  {
    q: "ঢাকার বাইরে থেকে কি সেবা নেওয়া যাবে?",
    a: "অবশ্যই। ভিডিও কনসালটেশন, ইমেইল বা WhatsApp-এ ডকুমেন্ট আদান-প্রদান এবং ডিজিটাল স্বাক্ষরের মাধ্যমে সারা বাংলাদেশ ও প্রবাসী বাংলাদেশিরা সেবা নিতে পারেন। যেসব কাজে সরাসরি স্বাক্ষর বা উপস্থিতি বাধ্যতামূলক, সেখানে নির্দিষ্ট নির্দেশনা জানিয়ে দেওয়া হয়।",
  },
  {
    q: "প্রথমে আমার কী কী তথ্য বা ডকুমেন্ট দরকার?",
    a: "প্রথমে শুধু আপনার সমস্যাটি সহজ ভাষায় লিখুন। প্রাসঙ্গিক কাগজ থাকলে (যেমন দলিল, চুক্তি, নোটিশ, NID) স্ক্যান করে আপলোড করতে পারেন — না থাকলেও সমস্যা নেই। প্রথম আলোচনার পর টিম জানাবে কোন ডকুমেন্ট লাগবে এবং কীভাবে সংগ্রহ করবেন।",
  },
  {
    q: "আমার ব্যক্তিগত তথ্য কি গোপন থাকবে?",
    a: "হ্যাঁ। আপনার ফাইল, নথি ও আলোচনার তথ্য শুধু আপনার জন্য নিয়োজিত আইনি টিমের কাছে সংরক্ষিত থাকে। তৃতীয় পক্ষের সঙ্গে তথ্য শেয়ার করা হয় না, কেবল আপনার লিখিত অনুমতি বা আইনি বাধ্যবাধকতার ক্ষেত্রে ব্যতিক্রম।",
  },
  {
    q: "কত দিনে আমার কাজ শেষ হবে?",
    a: "কাজের ধরনের ওপর নির্ভর করে সময়। ডকুমেন্ট ড্রাফটিং সাধারণত ১–৩ কার্যদিবস; কোম্পানি নিবন্ধন বা ভিসা ফাইলে বেশি সময় লাগতে পারে। সরকারি অফিসের প্রক্রিয়ায় সময়সীমা পরিবর্তিত হতে পারে। কাজ শুরুর আগেই বাস্তবসম্মত সময়সীমা জানানো হয় এবং ধাপে ধাপে আপডেট দেওয়া হয়।",
  },
  {
    q: "পেমেন্টের সুযোগ কী কী?",
    a: "bKash, Nagad, ব্যাংক ট্রান্সফার এবং অফিসে ক্যাশ — সবই গ্রহণযোগ্য। কাজ অনুযায়ী ৫০% প্রাথমিক ও বাকিটা ডেলিভারির সময়, অথবা প্যাকেজ অনুযায়ী সম্পূর্ণ পেমেন্ট। প্রতিটি পেমেন্টের রসিদ দেওয়া হয়।",
  },
  {
    q: "আমি কি সরাসরি আইনজীবীর সঙ্গে কথা বলতে পারব?",
    a: "হ্যাঁ। বুক করা সেশনে প্রতিষ্ঠাতা ও CEO আতিকুল ইসলাম রাসেল অথবা আপনার সেবার জন্য নিয়োজিত বিশেষজ্ঞ পরামর্শদাতার সঙ্গে সরাসরি কথা বলবেন। সহকারীর কাছে বার্তা রেখে যেতে হবে না।",
  },
];
