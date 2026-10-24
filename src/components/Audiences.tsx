import { ArrowUpRight, Briefcase, Check, HeartHandshake, Landmark, Plane } from "lucide-react";
import { Reveal, SectionHead } from "./ui";

const AUDIENCES = [
  {
    icon: Briefcase,
    label: "ছোট ও মাঝারি ব্যবসা",
    title: "ব্যবসা শুরু থেকে সুরক্ষা পর্যন্ত",
    desc: "নতুন লাইসেন্স, কোম্পানি গঠন কিংবা ট্রেডমার্ক — ব্যবসার প্রতিটি ধাপে আইনি ভিত্তি মজবুত করুন।",
    points: ["কোম্পানি ও পার্টনারশিপ নিবন্ধন", "ট্রেড লাইসেন্স ও টিআইএন", "ট্রেডমার্ক ও চুক্তিপত্র"],
    service: "কোম্পানি নিবন্ধন",
  },
  {
    icon: Plane,
    label: "প্রবাসী বাংলাদেশি",
    title: "দেশে থাকা সম্পদ, বিদেশ থেকে সুরক্ষা",
    desc: "দেশে না থেকেও অনলাইনে জমির কাজ, পাওয়ার অব অ্যাটর্নি ও ভিসা-সংক্রান্ত সহায়তা নিন।",
    points: ["জমির নামজারি ও খাজনা", "অনলাইন কনসালটেশন", "ভিসা ও ডকুমেন্ট প্রস্তুতি"],
    service: "জমির নামজারি/মিউটেশন",
  },
  {
    icon: Landmark,
    label: "জমি ও সম্পত্তির মালিক",
    title: "দলিলের একটি ভুলও নয়",
    desc: "জমি কেনা-বেচা, মিউটেশন কিংবা উত্তরাধিকারের হিসাব — ঝুঁকি দেখে তবেই এগোবেন।",
    points: ["দলিল ও মালিকানা যাচাই", "ক্রয়-বিক্রয় চুক্তিপত্র", "খাজনা ও রেকর্ড সংশোধন"],
    service: "জমি/ফ্ল্যাট/দোকান ক্রয়-বিক্রয় চুক্তিপত্র",
  },
  {
    icon: HeartHandshake,
    label: "পরিবার ও ব্যক্তি",
    title: "ব্যক্তিগত বিষয়েও পূর্ণ গোপনীয়তা",
    desc: "পারিবারিক সম্পত্তি, বিবাহ বা নাগরিক সেবা — সংবেদনশীল বিষয়ের সমাধান সম্মান ও গোপনীয়তার সঙ্গে।",
    points: ["কোর্ট ম্যারেজ ও অ্যাফিডেভিট", "জন্ম নিবন্ধন ও NID সংশোধন", "পারিবারিক সম্পত্তি বণ্টন"],
    service: "কোর্ট ম্যারেজ/হাফনামা/অ্যাফিডেভিট",
  },
];

export default function Audiences({ onBook }: { onBook: (service?: string) => void }) {
  return (
    <section id="audiences" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute left-1/2 top-1/3 size-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(20,76,74,0.22),transparent_68%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="আপনার জন্য আমাদের সেবা"
          title={
            <>
              আপনার পরিচয় যাই হোক, <span className="gold-text">আইনি সুরক্ষা আপনারও প্রয়োজন</span>
            </>
          }
          description="প্রতিটি মানুষের আইনি প্রয়োজন আলাদা। তাই আপনার পরিস্থিতি অনুযায়ী সবচেয়ে প্রয়োজনীয় সেবাগুলো এক জায়গায় সাজিয়ে দিয়েছি।"
          center
        />

        <div className="mt-11 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((audience, i) => {
            const Icon = audience.icon;
            return (
              <Reveal key={audience.label} delay={i * 80}>
                <article className="group glass relative flex h-full flex-col overflow-hidden rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[#e8c77e]/30">
                  <div className="pointer-events-none absolute -right-10 -top-12 size-28 rounded-full bg-[#e8c77e]/7 blur-2xl transition group-hover:bg-[#e8c77e]/14" />
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl border border-[#e8c77e]/20 bg-gradient-to-br from-[#e8c77e]/16 to-transparent text-[#f0d9a4]">
                      <Icon className="size-5" strokeWidth={1.8} />
                    </span>
                    <span className="text-[9.5px] font-medium tracking-wide text-[#8296aa]">{audience.label}</span>
                  </div>
                  <h3 className="mt-4 text-[16px] font-semibold leading-snug text-white">{audience.title}</h3>
                  <p className="mt-2 text-[12px] leading-[1.8] text-[#94a7ba]">{audience.desc}</p>
                  <ul className="mt-3.5 flex-1 space-y-1.5">
                    {audience.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-[11.5px] leading-snug text-[#bcc9d6]">
                        <span className="mt-0.5 grid size-3.5 shrink-0 place-items-center rounded-full bg-[#6fe0a4]/12 text-[#6fe0a4]">
                          <Check className="size-2.5" strokeWidth={3.5} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => onBook(audience.service)}
                    className="mt-4 inline-flex items-center gap-1.5 border-t border-white/8 pt-3 text-left text-[11.5px] font-medium text-[#e8c77e] transition hover:gap-2.5 hover:text-[#f7e8c3]"
                  >
                    সম্পর্কিত পরামর্শ নিন
                    <ArrowUpRight className="size-3.5" />
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-5 flex flex-col items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 backdrop-blur-md sm:flex-row">
            <p className="text-center text-[12px] leading-relaxed text-[#a9b8c8] sm:text-left">
              <span className="font-semibold text-[#f0d9a4]">আপনার তালিকায় নেই?</span> ২৬টি সেবার যেকোনোটিতে আমরা সাহায্য
              করতে পারি — শুধু জানান।
            </p>
            <button type="button" onClick={() => onBook()} className="btn-outline shrink-0 !rounded-lg !px-4 !py-2.5 !text-[12px]">
              বিস্তারিত জানতে চাই <ArrowUpRight className="size-3.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
