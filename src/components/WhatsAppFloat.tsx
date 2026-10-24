import { PhoneCall, X } from "lucide-react";
import { useState } from "react";
import { CONTACT, waLink } from "../data";
import { WhatsAppGlyph } from "./ui";

export default function WhatsAppFloat() {
  const [showCard, setShowCard] = useState(true);

  return (
    <div className="fixed bottom-4 right-3 z-[60] flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-5">
      {showCard ? (
        <div className="glass relative hidden w-[232px] rounded-2xl p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] sm:block sm:w-[252px]">
          <button
            type="button"
            onClick={() => setShowCard(false)}
            className="absolute right-1.5 top-1.5 grid size-5 place-items-center rounded-md text-[#8fa3b7] transition hover:bg-white/10 hover:text-white"
            aria-label="বার্তা বন্ধ করুন"
          >
            <X className="size-3" />
          </button>
          <div className="flex items-center gap-2">
            <span className="relative grid size-8 place-items-center rounded-full bg-[#25D366] text-white">
              <WhatsAppGlyph className="size-4" />
              <span className="absolute inset-0 animate-wa-ring rounded-full border border-[#25D366]" />
            </span>
            <div>
              <p className="text-[11.5px] font-semibold leading-none text-white">Legal Solutions</p>
              <p className="mt-1 flex items-center gap-1 text-[9px] leading-none text-[#9df0c3]">
                <span className="size-1.5 animate-pulse-dot rounded-full bg-[#6fe0a4]" /> অনলাইনে · দ্রুত উত্তর
              </p>
            </div>
          </div>
          <div className="mt-2.5 rounded-lg rounded-tl-sm bg-[#0b2731]/90 px-2.5 py-2 text-[10.5px] leading-relaxed text-[#d6e6e0]">
            আসসালামু আলাইকুম 👋
            <br />
            আইনি সমস্যা নিয়ে ফ্রি পরামর্শ নিতে চান? সরাসরি লিখুন।
          </div>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-2.5 py-2 text-[11px] font-semibold text-[#052a1a] transition hover:brightness-105"
          >
            <WhatsAppGlyph className="size-3.5" /> WhatsApp-এ চ্যাট করুন
          </a>
        </div>
      ) : null}

      <div className="flex items-center gap-2">
        <a
          href={`tel:${CONTACT.phoneTel}`}
          className="glass grid size-11 place-items-center rounded-full text-[#e8c77e] shadow-xl transition hover:scale-105 hover:text-[#fff2d2] sm:size-12"
          aria-label="ফোনে কল করুন"
          title={CONTACT.phoneDisplay}
        >
          <PhoneCall className="size-[18px]" />
        </a>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 rounded-full border border-[#5ce39a]/60 bg-gradient-to-br from-[#2ee07a] to-[#0da757] py-2 pl-2 pr-3 text-[#042315] shadow-[0_16px_40px_-10px_rgba(37,211,102,0.65)] transition hover:scale-[1.03]"
          aria-label="WhatsApp-এ যোগাযোগ করুন"
        >
          <span className="pointer-events-none absolute inset-0 animate-wa-ring rounded-full border-2 border-[#3ee686]" />
          <span className="relative grid size-9 place-items-center rounded-full bg-white/20">
            <WhatsAppGlyph className="size-6 text-white" />
            <span className="absolute -right-0.5 -top-0.5 grid size-3.5 place-items-center rounded-full border border-[#0b5f35] bg-[#ff5a5a] text-[7px] font-bold text-white">
              1
            </span>
          </span>
          <span className="hidden text-left leading-tight sm:block">
            <span className="block font-display text-[12.5px] font-bold">WhatsApp</span>
            <span className="block text-[9px] font-medium text-[#063a24]/80">ফ্রি পরামর্শ নিন</span>
          </span>
        </a>
      </div>
    </div>
  );
}
