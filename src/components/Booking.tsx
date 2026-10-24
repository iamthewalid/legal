import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  LockKeyhole,
  Mail,
  MapPin,
  PhoneCall,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Video,
} from "lucide-react";
import { CONTACT, SERVICES, toBn, waLink } from "../data";
import { Reveal, SectionHead, WhatsAppGlyph } from "./ui";

const MONTHS = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];
const WEEKDAYS = ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহঃ", "শুক্র", "শনি"];
const SLOTS = [
  { time: "সকাল ১০:০০", popular: false },
  { time: "সকাল ১১:৩০", popular: true },
  { time: "দুপুর ১২:৩০", popular: false },
  { time: "বিকাল ৩:০০", popular: false },
  { time: "বিকাল ৪:৩০", popular: true },
  { time: "সন্ধ্যা ৬:০০", popular: false },
];
const MODES = [
  { id: "office", label: "অফিসে", icon: Building2 },
  { id: "online", label: "অনলাইনে", icon: Video },
  { id: "phone", label: "ফোনে", icon: PhoneCall },
];

type Errors = Record<string, string>;

const formatDate = (date: Date) =>
  `${WEEKDAYS[date.getDay()]}, ${toBn(date.getDate())} ${MONTHS[date.getMonth()]}, ${toBn(date.getFullYear())}`;

export default function Booking({ selectedService, requestKey = 0 }: { selectedService: string; requestKey?: number }) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() });
  const [date, setDate] = useState<Date | null>(null);
  const [slot, setSlot] = useState("");
  const [mode, setMode] = useState("office");
  const [service, setService] = useState(selectedService);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (requestKey === 0) return;
    if (selectedService) setService(selectedService);
    setSubmitted(false);
  }, [selectedService, requestKey]);

  const offset = new Date(view.year, view.month, 1).getDay();
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const cells: (Date | null)[] = [
    ...Array.from({ length: offset }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(view.year, view.month, i + 1)),
  ];
  const currentMonthIndex = today.getFullYear() * 12 + today.getMonth();
  const viewIndex = view.year * 12 + view.month;
  const canPrev = viewIndex > currentMonthIndex;
  const canNext = viewIndex < currentMonthIndex + 3;

  const moveMonth = (dir: number) => {
    if ((dir < 0 && !canPrev) || (dir > 0 && !canNext)) return;
    const next = new Date(view.year, view.month + dir, 1);
    setView({ year: next.getFullYear(), month: next.getMonth() });
  };

  const isDisabled = (d: Date) => d < today || d.getDay() === 5;

  const pickDate = (d: Date) => {
    if (isDisabled(d)) return;
    setDate(d);
    setErrors((prev) => ({ ...prev, date: "" }));
  };

  const resetForm = () => {
    setSubmitted(false);
    setDate(null);
    setSlot("");
    setMode("office");
    setService("");
    setName("");
    setPhone("");
    setEmail("");
    setNote("");
    setConsent(false);
    setErrors({});
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Errors = {};
    if (!date) next.date = "অনুগ্রহ করে একটি তারিখ নির্বাচন করুন।";
    if (!slot) next.time = "একটি সময় স্লট বেছে নিন।";
    if (!service) next.service = "আপনার প্রয়োজনীয় সেবাটি নির্বাচন করুন।";
    if (name.trim().length < 3) next.name = "আপনার পূর্ণ নাম লিখুন।";
    if (!/^[0-9+\-\s]{11,17}$/.test(phone.trim()) || phone.replace(/\D/g, "").length < 11)
      next.phone = "সঠিক মোবাইল নম্বর দিন (যেমন ০১৭XXXXXXXX)।";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "ইমেইল ঠিকানাটি সঠিক নয়।";
    if (!consent) next.consent = "শর্তাবলিতে সম্মতি দিতে হবে।";
    setErrors(next);
    if (Object.keys(next).some((key) => next[key])) return;
    setSubmitted(true);
  };

  const modeLabel = MODES.find((m) => m.id === mode)?.label ?? "অফিসে";
  const successMessage = `আসসালামু আলাইকুম, আমি ${name}। ${date ? formatDate(date) : ""} তারিখে ${slot}-এ ${modeLabel} ${service} নিয়ে ফ্রি কনসালটেশন রিকোয়েস্ট করেছি। অনুগ্রহ করে নিশ্চিত করুন।`;

  return (
    <section id="booking" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(21,84,75,0.4),transparent_62%)]" />
        <div className="absolute bottom-[-10%] right-[-8%] size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(151,112,45,0.24),transparent_68%)] blur-3xl" />
        <div className="absolute inset-0 noise" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="ফ্রি কনসালটেশন বুকিং"
          title={
            <>
              আপনার সমস্যাটা বলুন, <span className="gold-text">বাকিটা আমাদের জিম্মা</span>
            </>
          }
          description="নিচের ক্যালেন্ডার থেকে পছন্দের দিন ও সময় বেছে নিন। ১৫ মিনিটের প্রাথমিক পরামর্শ সম্পূর্ণ ফ্রি — কোনো অগ্রিম পেমেন্ট বা বাধ্যবাধকতা নেই।"
          center
        />

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11.5px] text-[#a9b9c9]">
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-[#6fe0a4]" /> ১৫ মিনিট ফ্রি
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-[#e8c77e]" /> তথ্য গোপন থাকবে
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-3.5 text-[#e8c77e]" /> ৩০ মিনিটে কনফার্মেশন
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-[#e8c77e]" /> অফিস / অনলাইন / ফোন
            </span>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-8">
          <div className="glass-gold relative overflow-hidden rounded-[1.8rem] p-2.5 sm:p-4">
            <div className="pointer-events-none absolute -left-20 -top-24 size-64 rounded-full bg-[#e8c77e]/12 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 size-64 rounded-full bg-[#6fe0a4]/8 blur-3xl" />

            {submitted ? (
              <div className="relative flex flex-col items-center px-3 py-10 text-center sm:px-8 sm:py-14">
                <div className="relative">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#6fe0a4]/20" />
                  <span className="relative grid size-16 place-items-center rounded-full border border-[#6fe0a4]/40 bg-gradient-to-br from-[#1c5b45] to-[#0c2a21] text-[#8af2b8] shadow-[0_0_50px_rgba(111,224,164,0.3)]">
                    <CheckCircle2 className="size-8" />
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
                  আপনার রিকোয়েস্ট আমরা পেয়েছি!
                </h3>
                <p className="mt-2 max-w-lg text-[13px] leading-relaxed text-[#b5c4d2]">
                  ধন্যবাদ, <span className="font-semibold text-[#f0d9a4]">{name.trim()}</span>। আমাদের টিম{" "}
                  <span className="text-white">৩০ মিনিটের মধ্যে</span> ফোন বা WhatsApp-এ আপনার স্লট নিশ্চিত করবে।
                </p>

                <div className="glass mt-6 w-full max-w-xl rounded-2xl p-4 text-left">
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                    <p className="font-display text-[14px] font-semibold text-white">বুকিং সারসংক্ষেপ</p>
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#e8c77e]/30 bg-[#e8c77e]/10 px-2 py-1 text-[9.5px] text-[#f0d9a4]">
                      <Sparkles className="size-2.5" /> ফ্রি সেশন
                    </span>
                  </div>
                  <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                    {[
                      ["তারিখ", date ? formatDate(date) : "—"],
                      ["সময়", slot || "—"],
                      ["মাধ্যম", modeLabel],
                      ["ফোন", phone],
                      ["সেবা", service],
                    ].map(([label, value]) => (
                      <div key={label} className={label === "সেবা" ? "sm:col-span-2" : ""}>
                        <dt className="text-[10px] text-[#8fa3b7]">{label}</dt>
                        <dd className="mt-0.5 text-[12.5px] font-medium leading-snug text-[#edf1f6]">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="mt-5 flex w-full max-w-xl flex-col gap-2 sm:flex-row">
                  <a
                    href={waLink(successMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#6fe0a4]/35 bg-[#25D366] px-4 py-3 text-[13px] font-semibold text-[#062518] transition hover:brightness-105"
                  >
                    <WhatsAppGlyph className="size-4" /> WhatsApp-এ নিশ্চিত করুন
                  </a>
                  <button type="button" onClick={resetForm} className="btn-outline flex-1 !rounded-xl !py-3 !text-[13px]">
                    <RotateCcw className="size-4 text-[#e8c77e]" /> আরেকটি স্লট বুক করুন
                  </button>
                </div>
                <p className="mt-3 text-[10.5px] text-[#8ba0b4]">
                  জরুরি হলে সরাসরি কল করুন{" "}
                  <a href={`tel:${CONTACT.phoneTel}`} className="text-[#e8c77e] underline-offset-2 hover:underline" dir="ltr">
                    {CONTACT.phoneDisplay}
                  </a>
                </p>
              </div>
            ) : (
              <div className="relative grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5">
                {/* Calendar column */}
                <div className="rounded-2xl border border-white/10 bg-[#06121d]/65 p-3.5 backdrop-blur-xl sm:p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="grid size-7 place-items-center rounded-md bg-[#e8c77e]/12 text-[#e8c77e]">
                        <CalendarDays className="size-4" />
                      </span>
                      <div>
                        <p className="text-[12.5px] font-semibold leading-none text-white">তারিখ নির্বাচন করুন</p>
                        <p className="mt-1 text-[10px] leading-none text-[#8fa3b7]">শুক্রবার সাপ্তাহিক বন্ধ</p>
                      </div>
                    </div>
                    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[9.5px] text-[#9db0c3]">
                      পদক্ষেপ ১/৩
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => moveMonth(-1)}
                      disabled={!canPrev}
                      className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-[#d6e1ec] transition enabled:hover:border-[#e8c77e]/40 enabled:hover:text-[#f0d9a4] disabled:cursor-not-allowed disabled:opacity-30"
                      aria-label="আগের মাস"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <p className="font-display text-[14.5px] font-semibold text-[#f5f0e3]">
                      {MONTHS[view.month]} {toBn(view.year)}
                    </p>
                    <button
                      type="button"
                      onClick={() => moveMonth(1)}
                      disabled={!canNext}
                      className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-[#d6e1ec] transition enabled:hover:border-[#e8c77e]/40 enabled:hover:text-[#f0d9a4] disabled:cursor-not-allowed disabled:opacity-30"
                      aria-label="পরের মাস"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>

                  <div className="mt-3 grid grid-cols-7 gap-1">
                    {WEEKDAYS.map((day) => (
                      <span key={day} className="pb-1 text-center text-[9.5px] font-medium text-[#7f93a8]">
                        {day}
                      </span>
                    ))}
                    {cells.map((d, i) => {
                      if (!d) return <span key={`empty-${i}`} />;
                      const disabled = isDisabled(d);
                      const selected = date?.toDateString() === d.toDateString();
                      const isToday = d.toDateString() === today.toDateString();
                      return (
                        <button
                          key={d.toISOString()}
                          type="button"
                          onClick={() => pickDate(d)}
                          disabled={disabled}
                          aria-label={formatDate(d)}
                          aria-pressed={selected}
                          className={`relative aspect-square rounded-lg text-[12px] font-medium transition-all duration-200 ${
                            selected
                              ? "bg-gradient-to-br from-[#f7e8c3] to-[#d3aa60] text-[#07111f] shadow-[0_6px_18px_-6px_rgba(232,199,126,0.7)]"
                              : disabled
                                ? "cursor-not-allowed bg-white/[0.015] text-white/18"
                                : "border border-white/8 bg-white/[0.035] text-[#d2dde8] hover:border-[#e8c77e]/50 hover:bg-[#e8c77e]/10 hover:text-[#f7e8c3]"
                          }`}
                        >
                          {toBn(d.getDate())}
                          {isToday && !selected ? (
                            <span className="absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-[#e8c77e]" />
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                  {errors.date ? <p className="mt-2.5 text-[11px] text-[#ff9d9d]">{errors.date}</p> : null}

                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-white/8 pt-2.5 text-[9.5px] text-[#8499ad]">
                    <span className="inline-flex items-center gap-1">
                      <span className="size-2 rounded-sm bg-gradient-to-br from-[#f7e8c3] to-[#d3aa60]" /> নির্বাচিত
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="size-2 rounded-sm border border-white/20 bg-white/5" /> উপলব্ধ
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="size-2 rounded-sm bg-white/10" /> বন্ধ / অতীত
                    </span>
                  </div>

                  {/* Slots */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <p className="flex items-center gap-1.5 text-[12.5px] font-semibold text-white">
                        <Clock3 className="size-3.5 text-[#e8c77e]" /> সময় স্লট
                      </p>
                      <span className="text-[9.5px] text-[#8fa3b7]">পদক্ষেপ ২/৩</span>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-1.5">
                      {SLOTS.map((s) => {
                        const selected = slot === s.time;
                        return (
                          <button
                            key={s.time}
                            type="button"
                            onClick={() => {
                              setSlot(s.time);
                              setErrors((prev) => ({ ...prev, time: "" }));
                            }}
                            aria-pressed={selected}
                            className={`relative rounded-lg border px-2 py-2 text-[11px] font-medium transition ${
                              selected
                                ? "border-[#e8c77e]/70 bg-[#e8c77e]/18 text-[#f7e8c3]"
                                : "border-white/10 bg-white/[0.03] text-[#b7c5d3] hover:border-[#e8c77e]/35 hover:text-[#f0d9a4]"
                            }`}
                          >
                            {s.time}
                            {s.popular ? (
                              <span className="absolute -right-1 -top-1.5 rounded bg-[#b98a3f] px-1 py-px text-[7px] font-semibold leading-tight text-[#07111f]">
                                জনপ্রিয়
                              </span>
                            ) : null}
                          </button>
                        );
                      })}
                    </div>
                    {errors.time ? <p className="mt-2 text-[11px] text-[#ff9d9d]">{errors.time}</p> : null}
                  </div>

                  {/* Contact quick */}
                  <div className="mt-4 grid gap-1.5 border-t border-white/8 pt-3">
                    <a
                      href={`tel:${CONTACT.phoneTel}`}
                      className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-2 text-[10.5px] text-[#b9c7d5] transition hover:border-[#e8c77e]/35"
                    >
                      <PhoneCall className="size-3.5 shrink-0 text-[#e8c77e]" /> ফোনে বুক করতে চান?
                      <span className="ml-auto text-[#f0d9a4]" dir="ltr">{CONTACT.phoneDisplay}</span>
                    </a>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-2 text-[10.5px] text-[#b9c7d5] transition hover:border-[#e8c77e]/35"
                    >
                      <Mail className="size-3.5 shrink-0 text-[#e8c77e]" />
                      <span className="min-w-0 truncate">{CONTACT.email}</span>
                    </a>
                  </div>
                </div>

                {/* Form column */}
                <form onSubmit={handleSubmit} noValidate className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl sm:p-5">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-display text-[15px] font-semibold text-white">আপনার তথ্য দিন</p>
                      <p className="mt-0.5 text-[10.5px] text-[#93a7bb]">সব তথ্য গোপন রাখা হবে</p>
                    </div>
                    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[9.5px] text-[#9db0c3]">
                      পদক্ষেপ ৩/৩
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="bk-service" className="field-label">
                        প্রয়োজনীয় সেবা <span className="text-[#ff9d9d]">*</span>
                      </label>
                      <select
                        id="bk-service"
                        value={service}
                        onChange={(e) => {
                          setService(e.target.value);
                          setErrors((prev) => ({ ...prev, service: "" }));
                        }}
                        className="field !py-[0.72rem]"
                        aria-invalid={Boolean(errors.service)}
                      >
                        <option value="">সেবা নির্বাচন করুন</option>
                        {service &&
                        service !== "অন্যান্য / নিশ্চিত নই" &&
                        !SERVICES.some((item) => item.title === service) ? (
                          <option value={service}>{service}</option>
                        ) : null}
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="অন্যান্য / নিশ্চিত নই">অন্যান্য / নিশ্চিত নই</option>
                      </select>
                      {errors.service ? <p className="mt-1 text-[10.5px] text-[#ff9d9d]">{errors.service}</p> : null}
                    </div>
                    <div>
                      <label htmlFor="bk-name" className="field-label">
                        আপনার নাম <span className="text-[#ff9d9d]">*</span>
                      </label>
                      <input
                        id="bk-name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          setErrors((prev) => ({ ...prev, name: "" }));
                        }}
                        placeholder="পূর্ণ নাম লিখুন"
                        className="field"
                        autoComplete="name"
                        aria-invalid={Boolean(errors.name)}
                      />
                      {errors.name ? <p className="mt-1 text-[10.5px] text-[#ff9d9d]">{errors.name}</p> : null}
                    </div>
                    <div>
                      <label htmlFor="bk-phone" className="field-label">
                        মোবাইল নম্বর <span className="text-[#ff9d9d]">*</span>
                      </label>
                      <input
                        id="bk-phone"
                        type="tel"
                        inputMode="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setErrors((prev) => ({ ...prev, phone: "" }));
                        }}
                        placeholder="০১৭XXXXXXXX"
                        className="field"
                        autoComplete="tel"
                        dir="ltr"
                        aria-invalid={Boolean(errors.phone)}
                      />
                      {errors.phone ? <p className="mt-1 text-[10.5px] text-[#ff9d9d]">{errors.phone}</p> : null}
                    </div>
                    <div>
                      <label htmlFor="bk-email" className="field-label">
                        ইমেইল <span className="text-[#8fa3b7]">(ঐচ্ছিক)</span>
                      </label>
                      <input
                        id="bk-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrors((prev) => ({ ...prev, email: "" }));
                        }}
                        placeholder="you@email.com"
                        className="field"
                        autoComplete="email"
                        dir="ltr"
                        aria-invalid={Boolean(errors.email)}
                      />
                      {errors.email ? <p className="mt-1 text-[10.5px] text-[#ff9d9d]">{errors.email}</p> : null}
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="field-label">কীভাবে পরামর্শ নিতে চান?</span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {MODES.map((m) => {
                        const Icon = m.icon;
                        const active = mode === m.id;
                        return (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setMode(m.id)}
                            aria-pressed={active}
                            className={`flex items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-[11.5px] font-medium transition ${
                              active
                                ? "border-[#e8c77e]/60 bg-[#e8c77e]/15 text-[#f7e8c3]"
                                : "border-white/10 bg-white/[0.03] text-[#b3c2d1] hover:border-[#e8c77e]/30"
                            }`}
                          >
                            <Icon className="size-3.5" />
                            {m.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-3">
                    <label htmlFor="bk-note" className="field-label">
                      সংক্ষেপে আপনার সমস্যা <span className="text-[#8fa3b7]">(ঐচ্ছিক)</span>
                    </label>
                    <textarea
                      id="bk-note"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      maxLength={400}
                      rows={3}
                      placeholder="যেমন: জমির নামজারি নিয়ে সমস্যা, দলিলে নামের ভুল আছে..."
                      className="field resize-none"
                    />
                    <div className="mt-1 flex justify-end text-[9.5px] text-[#74899e]">{toBn(note.length)}/৪০০</div>
                  </div>

                  <div className="mt-2 rounded-xl border border-[#e8c77e]/20 bg-[#e8c77e]/6 px-3 py-2.5">
                    <div className="flex items-center justify-between gap-2 text-[10.5px]">
                      <span className="flex items-center gap-1.5 text-[#d7c39a]">
                        <CalendarDays className="size-3.5" /> {date ? formatDate(date) : "তারিখ নির্বাচন করুন"}
                      </span>
                      <span className="flex items-center gap-1.5 text-[#d7c39a]">
                        <Clock3 className="size-3.5" /> {slot || "সময় নির্বাচন করুন"}
                      </span>
                    </div>
                  </div>

                  <label className="mt-3 flex cursor-pointer items-start gap-2.5 text-[10.5px] leading-relaxed text-[#94a8bc]">
                    <span className="relative mt-0.5 flex size-4 shrink-0 items-center justify-center">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => {
                          setConsent(e.target.checked);
                          setErrors((prev) => ({ ...prev, consent: "" }));
                        }}
                        className="peer size-4 cursor-pointer appearance-none rounded border border-white/25 bg-[#07131e] transition checked:border-[#e8c77e] checked:bg-[#e8c77e]"
                      />
                      <Check className="pointer-events-none absolute size-3 text-[#07111f] opacity-0 peer-checked:opacity-100" strokeWidth={3.5} />
                    </span>
                    <span>
                      আমি সম্মত যে, আমাকে ফোন/WhatsApp-এ যোগাযোগ করা হবে। আমার তথ্য শুধু পরামর্শের জন্য ব্যবহার হবে।{" "}
                      <span className="text-[#d7c39a] underline decoration-[#e8c77e]/40 underline-offset-2">গোপনীয়তা নীতি</span>
                    </span>
                  </label>
                  {errors.consent ? <p className="mt-1 text-[10.5px] text-[#ff9d9d]">{errors.consent}</p> : null}

                  {(errors.date || errors.time) && (
                    <p className="mt-2 rounded-lg border border-[#ff9d9d]/25 bg-[#ff9d9d]/8 px-2.5 py-2 text-[10.5px] text-[#ffb4b4]">
                      বুকিং সম্পূর্ণ করতে ক্যালেন্ডার থেকে তারিখ এবং একটি সময় স্লট নির্বাচন করুন।
                    </p>
                  )}
                  <button type="submit" className="btn-gold group mt-3.5 w-full !rounded-xl !py-3 !text-[14px]">
                    <LockKeyhole className="size-4" />
                    ফ্রি কনসালটেশন নিশ্চিত করুন
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-[9.5px] text-[#8196aa]">
                    <ShieldCheck className="size-3 text-[#6fe0a4]" /> কোনো পেমেন্ট বা অগ্রিম লাগবে না · তথ্য সম্পূর্ণ সুরক্ষিত
                  </p>
                </form>
              </div>
            )}
          </div>
        </Reveal>

        {/* Urgent strip */}
        <Reveal delay={100} className="mt-5">
          <div className="flex flex-col items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-md sm:flex-row">
            <p className="flex items-center gap-2 text-center text-[11.5px] text-[#a9b8c8] sm:text-left">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#e8c77e] opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-[#e8c77e]" />
              </span>
              হাতে সময় কম? জরুরি আইনি সহায়তার জন্য সরাসরি যোগাযোগ করুন।
            </p>
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <a
                href={waLink("জরুরি আইনি সহায়তা প্রয়োজন। দ্রুত যোগাযোগ করুন।")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#6fe0a4]/30 bg-[#6fe0a4]/10 px-3 py-2 text-[11.5px] font-medium text-[#9df0c3] transition hover:bg-[#6fe0a4]/18 sm:flex-none"
              >
                <WhatsAppGlyph className="size-3.5" /> জরুরি WhatsApp
              </a>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/12 bg-white/5 px-3 py-2 text-[11.5px] font-medium text-[#e3eaf2] transition hover:border-[#e8c77e]/40 sm:flex-none"
              >
                <PhoneCall className="size-3.5 text-[#e8c77e]" />
                <span dir="ltr">{CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </Reveal>
        <div className="mt-4 text-center">
          <a href="#services" className="inline-flex items-center gap-1.5 text-[11px] text-[#8196aa] transition hover:text-[#e8c77e]">
            আগে সার্ভিসগুলো দেখতে চান? <ArrowUpRight className="size-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
