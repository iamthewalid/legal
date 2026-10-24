import { ArrowRight, Building2, Check, Crown, Minus, ShieldCheck, UserRound, X } from "lucide-react";
import { COMPARE_ROWS, toBn } from "../data";
import { Reveal, SectionHead } from "./ui";

function Value({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="mx-auto grid size-6 place-items-center rounded-full bg-[#6fe0a4]/15 text-[#6fe0a4]">
        <Check className="size-3.5" strokeWidth={3} />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="mx-auto grid size-6 place-items-center rounded-full bg-[#e8c77e]/12 text-[#e8c77e]" title="আংশিক / নিশ্চিত নয়">
        <Minus className="size-3.5" strokeWidth={3} />
      </span>
    );
  }
  return (
    <span className="mx-auto grid size-6 place-items-center rounded-full bg-white/5 text-[#68788b]" title="সাধারণত নেই">
      <X className="size-3.5" strokeWidth={2.5} />
    </span>
  );
}

export default function Compare({ onBook }: { onBook: (service?: string) => void }) {
  return (
    <section id="compare" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,24,34,0.75),transparent)]" />
        <div className="absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(146,108,42,0.18),transparent_66%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="তুলনা করুন"
          title={
            <>
              কেন অন্য ফার্মের চেয়ে <span className="gold-text">Legal Solutions</span> আলাদা?
            </>
          }
          description="একই টাকায় আপনি শুধু পরামর্শ নয়, পাচ্ছেন একটি সম্পূর্ণ দায়িত্বশীল প্রক্রিয়া। নিচের তুলনাটি নিজেই দেখুন।"
          center
        />

        <Reveal delay={120} className="mt-11">
          <div className="glass overflow-hidden rounded-2xl">
            <div className="no-scrollbar overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th scope="col" className="w-[34%] px-4 py-4 text-[11.5px] font-medium tracking-wide text-[#93a6ba] sm:px-5">
                      যেসব বিষয় সত্যিই গুরুত্বপূর্ণ
                    </th>
                    <th scope="col" className="relative w-[24%] bg-gradient-to-b from-[#e8c77e]/16 to-[#e8c77e]/5 px-3 py-4 text-center">
                      <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#e8c77e] to-transparent" />
                      <span className="mb-1.5 inline-flex items-center gap-1 rounded-full border border-[#e8c77e]/40 bg-[#07111f]/50 px-2 py-0.5 text-[9.5px] font-semibold text-[#f7e8c3]">
                        <Crown className="size-2.5" /> আমাদের পছন্দ
                      </span>
                      <span className="flex items-center justify-center gap-1.5 font-display text-[13px] font-semibold text-white sm:text-[15px]">
                        <ShieldCheck className="size-4 text-[#e8c77e]" />
                        Legal Solutions
                      </span>
                    </th>
                    <th scope="col" className="w-[21%] px-3 py-4 text-center">
                      <span className="flex items-center justify-center gap-1.5 font-display text-[12px] font-medium text-[#c1cedb] sm:text-[13.5px]">
                        <Building2 className="size-4 text-[#8297ac]" />
                        সাধারণ ল ফার্ম
                      </span>
                    </th>
                    <th scope="col" className="w-[21%] px-3 py-4 text-center">
                      <span className="flex items-center justify-center gap-1.5 font-display text-[12px] font-medium text-[#c1cedb] sm:text-[13.5px]">
                        <UserRound className="size-4 text-[#8297ac]" />
                        একক আইনজীবী
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-b border-white/6 transition hover:bg-white/[0.025] ${
                        i === COMPARE_ROWS.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <th scope="row" className="px-4 py-3.5 text-[12.5px] font-normal leading-snug text-[#c3cfdd] sm:px-5 sm:text-[13.5px]">
                        {row.label}
                      </th>
                      <td className="bg-[#e8c77e]/[0.055] px-3 py-3.5 text-center">
                        <Value value={row.us} />
                      </td>
                      <td className="px-3 py-3.5 text-center">
                        <Value value={row.other} />
                      </td>
                      <td className="px-3 py-3.5 text-center">
                        <Value value={row.solo} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-4 flex flex-col items-start justify-between gap-3 px-1 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#8497ab]">
              <span className="inline-flex items-center gap-1.5">
                <Check className="size-3 text-[#6fe0a4]" /> সাধারণত আছে
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Minus className="size-3 text-[#e8c77e]" /> আংশিক / নিশ্চিত নয়
              </span>
              <span className="inline-flex items-center gap-1.5">
                <X className="size-3 text-[#68788b]" /> সাধারণত নেই
              </span>
            </div>
            <p className="text-[10.5px] text-[#6f8296]">
              * তুলনাটি বাজারের সাধারণ অভিজ্ঞতার ভিত্তিতে; প্রতিটি প্রতিষ্ঠানের সেবা ও শর্ত ভিন্ন হতে পারে।
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-9">
          <div className="glass-gold flex flex-col items-center justify-between gap-4 rounded-2xl px-5 py-5 sm:flex-row sm:px-7">
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-semibold text-white">
                পার্থক্যটা নিজের অভিজ্ঞতায় বুঝুন — <span className="gold-text">{toBn(15)} মিনিট ফ্রি</span>
              </p>
              <p className="mt-1 text-[12.5px] text-[#aebdcb]">আপনার সমস্যা শুনে সেরা পথ ও আনুমানিক খরচ জানিয়ে দেব, কোনো অগ্রিম নেই।</p>
            </div>
            <button type="button" onClick={() => onBook()} className="btn-gold w-full shrink-0 !rounded-xl !py-3 sm:w-auto">
              ফ্রি পরামর্শ বুক করুন
              <ArrowRight className="size-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
