import type { LucideIcon } from "lucide-react";
import {
  Baby,
  BadgeCheck,
  BookMarked,
  Building2,
  Car,
  ClipboardCheck,
  Copyright,
  CreditCard,
  FileSignature,
  Globe2,
  Handshake,
  HeartHandshake,
  IdCard,
  Landmark,
  Laptop,
  MapPinned,
  Megaphone,
  MessageSquareWarning,
  PlaneTakeoff,
  ReceiptText,
  ScrollText,
  ShieldCheck,
  Ship,
  Stamp,
  Store,
  Users,
  Wallet,
} from "lucide-react";

export const CONTACT = {
  firm: "Legal Solutions Consultancy Firm",
  firmBn: "লিগ্যাল সলিউশনস কনসালটেন্সি ফার্ম",
  founder: "আতিকুল ইসলাম রাসেল",
  founderEn: "Atiqul Islam Rasel",
  role: "প্রতিষ্ঠাতা ও CEO",
  phoneDisplay: "+88 01710-348623",
  phoneTel: "+8801710348623",
  whatsapp: "8801710348623",
  email: "adv.atiqulislam1996@gmail.com",
  hours: "শনি–বৃহস্পতি, সকাল ১০টা – রাত ৮টা",
  location: "ঢাকা, বাংলাদেশ · অনলাইন সেবা সারা দেশে",
};

export const waLink = (
  message = "আসসালামু আলাইকুম, আমি Legal Solutions-এর আইনি পরামর্শ নিতে চাই।"
) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const toBn = (value: number | string) =>
  String(value).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

export type CategoryKey =
  | "corporate"
  | "business"
  | "property"
  | "legal"
  | "citizen"
  | "travel";

export const CATEGORIES: { key: CategoryKey | "all"; label: string; short: string }[] = [
  { key: "all", label: "সব সার্ভিস", short: "২৬টি সেবা" },
  { key: "corporate", label: "ট্যাক্স ও কর্পোরেট", short: "কোম্পানি, ট্যাক্স, ট্রেডমার্ক" },
  { key: "business", label: "ব্যবসা ও লাইসেন্স", short: "লাইসেন্স, রেজিস্ট্রেশন" },
  { key: "property", label: "জমি ও সম্পত্তি", short: "দলিল, মিউটেশন, খাজনা" },
  { key: "legal", label: "আইনি ও নোটারি", short: "নোটিশ, নোটারি, অভিযোগ" },
  { key: "citizen", label: "নাগরিক সেবা", short: "সংশোধন, লাইসেন্স, ক্লিয়ারেন্স" },
  { key: "travel", label: "ভিসা ও ভ্রমণ", short: "ভিসা, টিকেট, ইমিগ্রেশন" },
];

export type Service = {
  id: number;
  title: string;
  desc: string;
  category: CategoryKey;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "ইনকাম ট্যাক্স রিটার্ন",
    desc: "ব্যক্তিগত ও প্রতিষ্ঠানের আয়কর রিটার্ন প্রস্তুত, দাখিল ও পরামর্শ।",
    category: "corporate",
    icon: ReceiptText,
  },
  {
    id: 2,
    title: "ট্রেড লাইসেন্স (নতুন/নবায়ন)",
    desc: "নতুন ব্যবসার লাইসেন্স থেকে শুরু করে সময়মতো নবায়ন পর্যন্ত।",
    category: "business",
    icon: Store,
  },
  {
    id: 3,
    title: "ভূমি রেজিস্ট্রেশন/ভূমি রিটার্ন",
    desc: "জমি রেজিস্ট্রেশন, নামজারি সংক্রান্ত ফাইল ও ভূমি রিটার্ন সহায়তা।",
    category: "property",
    icon: Landmark,
  },
  {
    id: 4,
    title: "টিন সার্টিফিকেট সংশোধন",
    desc: "TIN-এর নাম, ঠিকানা বা তথ্য সংশোধনের সম্পূর্ণ প্রক্রিয়া।",
    category: "citizen",
    icon: CreditCard,
  },
  {
    id: 5,
    title: "লিগ্যাল নোটিশ",
    desc: "আইনসম্মত ভাষায় শক্তিশালী নোটিশ ড্রাফট ও ডেলিভারি।",
    category: "legal",
    icon: Megaphone,
  },
  {
    id: 6,
    title: "নোটারি সার্ভিস",
    desc: "অ্যাফিডেভিট, সত্যায়ন ও নোটারাইজেশন — নির্ধারিত সময়ে।",
    category: "legal",
    icon: Stamp,
  },
  {
    id: 7,
    title: "আমদানি–রপ্তানি লাইসেন্স",
    desc: "ERC সংক্রান্ত আবেদন, নবায়ন ও প্রয়োজনীয় ডকুমেন্টেশন।",
    category: "travel",
    icon: Ship,
  },
  {
    id: 8,
    title: "কোম্পানি নিবন্ধন",
    desc: "RJSC-তে নতুন কোম্পানি গঠন, নাম অনুমোদন ও সনদ সংগ্রহ।",
    category: "business",
    icon: Building2,
  },
  {
    id: 9,
    title: "কোম্পানি অডিট ও রিটার্ন সার্ভিস",
    desc: "বার্ষিক রিটার্ন, অডিটর সমন্বয় ও কমপ্লায়েন্স প্রস্তুতি।",
    category: "corporate",
    icon: ClipboardCheck,
  },
  {
    id: 10,
    title: "ট্রেড মার্ক নিবন্ধন",
    desc: "আপনার ব্র্যান্ড নাম, লোগো ও ট্রেডমার্ক আইনি সুরক্ষা।",
    category: "corporate",
    icon: Copyright,
  },
  {
    id: 11,
    title: "সার্টিফিকেশন (ক্যাব রেজিস্ট্রেশন)",
    desc: "ক্যাব ও সংশ্লিষ্ট ব্যবসার প্রয়োজনীয় সনদ এবং রেজিস্ট্রেশন প্রক্রিয়ায় সহায়তা।",
    category: "business",
    icon: BadgeCheck,
  },
  {
    id: 12,
    title: "পার্টনারশিপ লাইসেন্স",
    desc: "অংশীদারি চুক্তি, ফার্ম রেজিস্ট্রেশন ও লাইসেন্স সহায়তা।",
    category: "business",
    icon: Handshake,
  },
  {
    id: 13,
    title: "জমি/ফ্ল্যাট/দোকান ক্রয়-বিক্রয় চুক্তিপত্র",
    desc: "বায়নানামা ও বিক্রয় চুক্তি — ঝুঁকিমুক্ত ভাষায় ড্রাফট।",
    category: "property",
    icon: FileSignature,
  },
  {
    id: 14,
    title: "সব ধরনের চুক্তিপত্র/দলিল সম্পাদন",
    desc: "ব্যবসা, চাকরি ও ব্যক্তিগত প্রয়োজনে যেকোনো চুক্তিপত্র।",
    category: "property",
    icon: ScrollText,
  },
  {
    id: 15,
    title: "জমির নামজারি/মিউটেশন",
    desc: "মালিকানা হস্তান্তর, নামজারি ও রেকর্ড সংশোধনের পূর্ণ সহায়তা।",
    category: "property",
    icon: MapPinned,
  },
  {
    id: 16,
    title: "জমির খাজনা প্রদান",
    desc: "ভূমি উন্নয়ন কর হিসাব, পরিশোধ ও রসিদ সংরক্ষণ।",
    category: "property",
    icon: Wallet,
  },
  {
    id: 17,
    title: "কোর্ট ম্যারেজ/হাফনামা/অ্যাফিডেভিট",
    desc: "কোর্ট ম্যারেজ, হাফনামা ও প্রয়োজনীয় হলফনামা প্রস্তুতি।",
    category: "legal",
    icon: HeartHandshake,
  },
  {
    id: 18,
    title: "জন্ম নিবন্ধন সংশোধন",
    desc: "নাম, জন্ম তারিখ ও তথ্য ভুল সংশোধনের জন্য আবেদন।",
    category: "citizen",
    icon: Baby,
  },
  {
    id: 19,
    title: "জাতীয় পরিচয় পত্র সংশোধন",
    desc: "NID-র নাম, জন্মতারিখ ও অন্যান্য তথ্য সংশোধন।",
    category: "citizen",
    icon: IdCard,
  },
  {
    id: 20,
    title: "পাসপোর্ট সংশোধন",
    desc: "নাম, ঠিকানা ও তথ্য সংশোধনে নির্ভুল আবেদন সহায়তা।",
    category: "citizen",
    icon: BookMarked,
  },
  {
    id: 21,
    title: "সকল দেশের ভিসা প্রসেসিং",
    desc: "ট্যুরিস্ট, স্টুডেন্ট, ওয়ার্ক ও বিজনেস ভিসা ফাইল প্রস্তুতি।",
    category: "travel",
    icon: Globe2,
  },
  {
    id: 22,
    title: "এয়ার টিকেট বুকিং",
    desc: "দেশ-বিদেশের কমদামি ও নির্ভরযোগ্য এয়ার টিকেট বুকিং।",
    category: "travel",
    icon: PlaneTakeoff,
  },
  {
    id: 23,
    title: "পুলিশ ক্লিয়ারেন্স",
    desc: "পুলিশ ক্লিয়ারেন্স সার্টিফিকেটের আবেদন ও ফলোআপ।",
    category: "citizen",
    icon: ShieldCheck,
  },
  {
    id: 24,
    title: "ড্রাইভিং লাইসেন্স",
    desc: "নতুন লাইসেন্স ও নবায়ন — যাবতীয় নাগরিক সেবা।",
    category: "citizen",
    icon: Car,
  },
  {
    id: 25,
    title: "অভিযোগ (জিডি)/সাধারণ ডায়েরি",
    desc: "থানায় যেকোনো অভিযোগ বা সাধারণ ডায়েরি রচনা ও দাখিল।",
    category: "legal",
    icon: MessageSquareWarning,
  },
  {
    id: 26,
    title: "অনলাইন জিডি",
    desc: "ঘরে বসেই অনলাইনে সাধারণ ডায়েরি করার নির্ভরযোগ্য সহায়তা।",
    category: "legal",
    icon: Laptop,
  },
];

export const VIDEOS = [
  {
    id: "awf08aFmRes",
    title: "জমি কেনার আগে যে ৭টি দলিল অবশ্যই যাচাই করবেন",
    topic: "জমি ও সম্পত্তি",
    duration: "৮:৪২",
    views: "৪২ হাজার",
  },
  {
    id: "gHjxqdhTEFg",
    title: "কোম্পানি নিবন্ধনের সহজ গাইড — ধাপে ধাপে",
    topic: "ব্যবসা",
    duration: "১২:০৫",
    views: "৩১ হাজার",
  },
  {
    id: "oVr1b2AfFfw",
    title: "ট্রেড লাইসেন্স নবায়ন করবেন যেভাবে",
    topic: "লাইসেন্স",
    duration: "৬:৫৮",
    views: "২৮ হাজার",
  },
  {
    id: "I6ZQOhqPGKw",
    title: "লিগ্যাল নোটিশ কীভাবে কাজ করে — সম্পূর্ণ ব্যাখ্যা",
    topic: "আইনি পরামর্শ",
    duration: "৯:১৪",
    views: "৩৬ হাজার",
  },
  {
    id: "ADAP9YRfSR0",
    title: "ভিসা আবেদনে সবচেয়ে সাধারণ ভুল ও তার সমাধান",
    topic: "ভিসা ও ভ্রমণ",
    duration: "১০:৩১",
    views: "৫৪ হাজার",
  },
  {
    id: "crIi6kc3-9o",
    title: "চুক্তিপত্রে যে ৫টি ক্লজ কখনো বাদ দেবেন না",
    topic: "চুক্তি",
    duration: "৭:২৩",
    views: "১৯ হাজার",
  },
  {
    id: "1pyfFgoyYEc",
    title: "পারিবারিক সম্পত্তি বণ্টনের আইনি পথ ও সতর্কতা",
    topic: "পারিবারিক আইন",
    duration: "১১:৪৭",
    views: "২৩ হাজার",
  },
];

export const STATS = [
  { value: "১২+", label: "বছরের সম্মিলিত অভিজ্ঞতা" },
  { value: "৫,০০০+", label: "পরিবার ও ব্যবসার পাশে" },
  { value: "২৬", label: "আইনি ও নাগরিক সেবা" },
  { value: "৪.৯/৫", label: "ক্লায়েন্ট রেটিং" },
];

export const ADVANTAGES = [
  {
    icon: Building2,
    title: "২৬টি সেবা, এক ছাদের নিচে",
    desc: "কোম্পানি থেকে জমি, ভিসা থেকে নোটারি — বারবার আলাদা আইনজীবী খোঁজার প্রয়োজন নেই।",
  },
  {
    icon: Wallet,
    title: "ফি আগেই স্পষ্ট",
    desc: "কাজ শুরুর আগেই লিখিত ফি-এসটিমেট। লুকানো চার্জ বা অপ্রত্যাশিত বিল নেই।",
  },
  {
    icon: ShieldCheck,
    title: "১০০% গোপনীয়তা",
    desc: "আপনার ডকুমেন্ট ও পারিবারিক তথ্য সংরক্ষিত। শুধু আপনার কেস টিমই অ্যাক্সেস পায়।",
  },
  {
    icon: Laptop,
    title: "সারা দেশে অনলাইন সেবা",
    desc: "ভিডিও কনসালটেশন, ডকুমেন্ট আপলোড ও ডিজিটাল স্বাক্ষরে ঘরে বসেই কাজ শেষ।",
  },
  {
    icon: ClipboardCheck,
    title: "প্রতিটি ধাপে আপডেট",
    desc: "ফাইল কোথায় আছে, কী লাগবে — সময়মতো WhatsApp-এ পরিষ্কার আপডেট পাবেন।",
  },
  {
    icon: Users,
    title: "বিশেষজ্ঞ টিম রিভিউ",
    desc: "প্রতিটি নোটিশ, চুক্তি বা আবেদন জমা দেওয়ার আগে সিনিয়র টিম রিভিউ করে।",
  },
];

export const PROCESS = [
  {
    step: "০১",
    title: "সমস্যাটি সহজ ভাষায় বলুন",
    desc: "ফোন, WhatsApp বা ওয়েবসাইটের ফর্মে আপনার পরিস্থিতি জানান। আইনি জ্ঞান লাগবে না।",
  },
  {
    step: "০২",
    title: "১৫ মিনিটের ফ্রি মূল্যায়ন",
    desc: "প্রাথমিক সম্ভাবনা, প্রয়োজনীয় ডকুমেন্ট ও ঝুঁকি নিয়ে বিনামূল্যে কথা বলুন।",
  },
  {
    step: "০৩",
    title: "লিখিত কৌশল ও ফি",
    desc: "পথ, সময়সীমা ও খরচ আগেই জানুন। সবকিছু আপনার সম্মতির পর কাজ শুরু।",
  },
  {
    step: "০৪",
    title: "কাজ শেষ পর্যন্ত আমাদের দায়িত্ব",
    desc: "ফাইলিং, ফলোআপ ও ডেলিভারি — প্রতিটি ধাপে আপডেটসহ সম্পূর্ণ সাপোর্ট।",
  },
];

export const COMPARE_ROWS = [
  { label: "সরাসরি অভিজ্ঞ আইনি পরামর্শ", us: true, other: "partial", solo: "partial" },
  { label: "ফি আগেই লিখিতভাবে স্পষ্ট", us: true, other: false, solo: "partial" },
  { label: "২৬টি সার্ভিস এক ছাদের নিচে", us: true, other: false, solo: false },
  { label: "ফাইল ও ডকুমেন্টের অগ্রগতি আপডেট", us: true, other: "partial", solo: false },
  { label: "অনলাইন কনসালটেশন ও ডিজিটাল ফাইল", us: true, other: "partial", solo: "partial" },
  { label: "স্পেশালাইজড টিম রিভিউ", us: true, other: true, solo: false },
  { label: "মামলার বাইরে প্রতিরোধমূলক আইনি সেবা", us: true, other: "partial", solo: false },
  { label: "প্রথমে ফ্রি প্রাথমিক মূল্যায়ন", us: true, other: false, solo: "partial" },
  { label: "একই জায়গায় কর্পোরেট + ব্যক্তিগত সেবা", us: true, other: "partial", solo: false },
];

export const TESTIMONIALS = [
  {
    name: "রফিকুল ইসলাম",
    meta: "ব্যবসায়ী · ঢাকা",
    service: "ট্রেড লাইসেন্স ও ট্রেডমার্ক",
    quote:
      "নতুন ব্র্যান্ডের ট্রেডমার্ক নিয়ে দুশ্চিন্তায় ছিলাম। ইউনিক নাম চেক থেকে সার্টিফিকেট হাতে পাওয়া পর্যন্ত প্রতিটি ধাপে আপডেট পেয়েছি। ফি নিয়ে কোনো বিভ্রান্তি হয়নি।",
    initials: "রই",
    stars: 5,
  },
  {
    name: "সাদিয়া আক্তার",
    meta: "গৃহিণী · নারায়ণগঞ্জ",
    service: "জমির নামজারি",
    quote:
      "জমির নামজারি নিয়ে অনেক জায়গায় ঘুরেছি, কেউ স্পষ্ট উত্তর দেয়নি। এখানে ফোনেই সব বুঝিয়ে দিয়েছেন এবং নির্দিষ্ট সময়ের মধ্যেই কাজ শেষ হয়েছে। প্রচুর হয়রানি বেঁচেছে।",
    initials: "সা",
    stars: 5,
  },
  {
    name: "মাহমুদ হাসান",
    meta: "স্টার্টআপ ফাউন্ডার · সিলেট",
    service: "কোম্পানি রেজিস্ট্রেশন",
    quote:
      "স্টার্টআপের কোম্পানি রেজিস্ট্রেশন আর ইনভেস্টমেন্ট চুক্তি — দুটোই খুব প্রফেশনালভাবে সম্পন্ন হয়েছে। শুরুতে খরচ কত হবে সেটা লিখিতভাবে পেয়েছি, যা বিরল অভিজ্ঞতা।",
    initials: "মহা",
    stars: 5,
  },
  {
    name: "নুসরাত জাহান",
    meta: "প্রবাসী · দুবাই",
    service: "পাওয়ার অব অ্যাটর্নি",
    quote:
      "দেশের বাইরে থেকে জমির কাজ কীভাবে করব ভেবেই পাচ্ছিলাম না। ভিডিও কলে কনসালটেশন আর অনলাইনে ডকুমেন্ট আপলোড করে সব কাজ হয়েছে। কমিউনিকেশনটা অসাধারণ ছিল।",
    initials: "নু",
    stars: 5,
  },
];

export const PLANS = [
  {
    name: "প্রাথমিক পরামর্শ",
    tagline: "একটি নির্দিষ্ট প্রশ্ন বা সমস্যার দ্রুত সমাধান",
    price: "১,৯৯৯",
    unit: "/ সেশন",
    popular: false,
    features: [
      "৪৫ মিনিটের ১:১ কনসালটেশন",
      "৫ পেজ পর্যন্ত ডকুমেন্ট রিভিউ",
      "লিখিত আইনি মতামত (সংক্ষিপ্ত)",
      "৭ দিনের WhatsApp ফলোআপ",
      "অফিসে বা অনলাইন — যেকোনো একটি",
    ],
    cta: "সেশন বুক করুন",
  },
  {
    name: "ব্যবসা সুরক্ষা",
    tagline: "ছোট ও মাঝারি ব্যবসার বছরের আইনি প্যাকেজ",
    price: "৭,৯০০",
    unit: "/ বছর",
    popular: true,
    features: [
      "বছরে ১২টি কনসালটেশন মিটিং",
      "ট্রেড লাইসেন্স ও টিআইএন নবায়ন সহায়তা",
      "৫টি চুক্তি বা নোটিশ ড্রাফটিং",
      "ডেডিকেটেড কনসালট্যান্ট",
      "২৪ ঘণ্টায় প্রায়োরিটি রেসপন্স",
      "কমপ্লায়েন্স ক্যালেন্ডার ও রিমাইন্ডার",
    ],
    cta: "ব্যবসা সুরক্ষিত করুন",
  },
  {
    name: "প্রিমিয়াম লিগ্যাল কেয়ার",
    tagline: "কর্পোরেট ও পরিবারের সার্বক্ষণিক আইনি পাশে",
    price: "১৪,৯০০",
    unit: "/ বছর",
    popular: false,
    features: [
      "আনলিমিটেড কনসালটেশন (অ্যাপয়েন্টমেন্টে)",
      "বছরে ১০টি ডকুমেন্ট ড্রাফটিং",
      "বার্ষিক আইনি ঝুঁকি অডিট",
      "কোর্ট ফাইলিং ও প্রতিনিধিত্বের গাইডেন্স",
      "কর্পোরেট + পারিবারিক লিগ্যাল সাপোর্ট",
      "২৪/৭ হোয়াটসঅ্যাপ চ্যানেল",
    ],
    cta: "প্রিমিয়াম নিন",
  },
];

export const NAV_LINKS = [
  { href: "#services", label: "সার্ভিস" },
  { href: "#why-us", label: "কেন আমরা" },
  { href: "#compare", label: "তুলনা" },
  { href: "#videos", label: "ভিডিও" },
  { href: "#pricing", label: "প্যাকেজ" },
  { href: "#booking", label: "কনসালটেশন" },
];

export const MARQUEE_ITEMS = [
  "কর্পোরেট ল",
  "জমি ও প্রপার্টি",
  "ট্যাক্স ও কমপ্লায়েন্স",
  "ট্রেডমার্ক",
  "ফ্যামিলি ল",
  "ইমিগ্রেশন",
  "লিটিগেশন সাপোর্ট",
  "নোটারাইজেশন",
  "কোম্পানি রেজিস্ট্রেশন",
  "ভিসা প্রসেসিং",
];
