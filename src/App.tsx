import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Audiences from "./components/Audiences";
import WhyUs from "./components/WhyUs";
import Compare from "./components/Compare";
import Founder from "./components/Founder";
import Videos from "./components/Videos";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const [selectedService, setSelectedService] = useState("");
  const [requestKey, setRequestKey] = useState(0);

  const handleBook = useCallback((service?: string) => {
    if (service) setSelectedService(service);
    setRequestKey((key) => key + 1);
    const target = document.getElementById("booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#050b14] text-[#d7dee8] antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services onBook={handleBook} />
        <Audiences onBook={handleBook} />
        <WhyUs onBook={handleBook} />
        <Compare onBook={handleBook} />
        <Founder onBook={handleBook} />
        <Videos onBook={handleBook} />
        <Testimonials onBook={handleBook} />
        <Pricing onBook={handleBook} />
        <Faq onBook={handleBook} />
        <Booking selectedService={selectedService} requestKey={requestKey} />
      </main>
      <Footer onBook={handleBook} />
      <WhatsAppFloat />
    </div>
  );
}
