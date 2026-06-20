import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Activities from "@/components/sections/Activities/Activities";
import EventInfo from "@/components/sections/EventInfo/EventInfo";
import Organizer from "@/components/sections/Organizer/Organizer";
import Booking from "@/components/sections/Booking/Booking";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Activities />
      <EventInfo />
      <Organizer />
      <Booking />
    </main>
  );
}
