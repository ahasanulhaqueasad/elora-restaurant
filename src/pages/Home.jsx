import Hero from "../components/Hero.jsx";
import Story from "../components/Story.jsx";
import FeaturedMenu from "../components/FeaturedMenu.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Gallery from "../components/Gallery.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Reservation from "../components/Reservation.jsx";
import Contact from "../components/Contact.jsx";

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080F20] text-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Restaurant Story */}
      <Story />

      {/* 3. Featured Menu */}
      <FeaturedMenu />

      {/* 4. Why Choose ÉLORA */}
      <WhyChooseUs />

      {/* 5. Gallery */}
      <Gallery />

      {/* 6. Customer Testimonials */}
      <Testimonials />

      {/* 7. Table Reservation */}
      <Reservation />

      {/* 8. Contact Information */}
      <Contact />
    </main>
  );
}

export default Home;
