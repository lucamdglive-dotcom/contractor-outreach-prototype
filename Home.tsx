import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface BusinessData {
  name: string;
  phone: string;
  address: string;
  services: string;
  rating: number;
  reviews: number;
}

// Get business data from URL or use default
function getBusinessData(): BusinessData {
  const params = new URLSearchParams(window.location.search);
  const dataParam = params.get("data");

  if (dataParam) {
    try {
      return JSON.parse(decodeURIComponent(dataParam));
    } catch (e) {
      console.error("Failed to parse business data:", e);
    }
  }

  // Default fallback
  return {
    name: "Professional Services",
    phone: "07123 456 789",
    address: "Your Address Here, UK",
    services: "Premium Services & Solutions",
    rating: 5,
    reviews: 10,
  };
}

const servicesList = [
  "Professional expertise with 10+ years experience",
  "Trusted by local families and businesses",
  "Free consultations and quotes",
  "Fully insured and certified",
];

export default function Home() {
  const business = getBusinessData();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to your backend
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you shortly.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-500">{business.name}</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-amber-500 transition">Services</a>
            <a href="#testimonials" className="hover:text-amber-500 transition">Reviews</a>
            <a href="#contact" className="hover:text-amber-500 transition">Contact</a>
          </div>
          <a href={`tel:${business.phone}`} className="bg-amber-500 px-4 py-2 rounded-lg font-semibold hover:bg-amber-600 transition">
            {business.phone}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden pt-20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="grid md:grid-cols-2 gap-12 w-full items-center">
            {/* Left content */}
            <div className="text-white">
              <p className="text-amber-500 font-semibold text-lg mb-4">PROFESSIONAL SERVICES IN {business.address.split(",")[1]?.toUpperCase() || "YOUR AREA"}</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {business.services}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Trusted by local families for over 10 years. Call now for the BEST service by the most trusted professionals in the area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${business.phone}`} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
                  <Phone size={20} />
                  {business.phone}
                </a>
                <button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition">
                  Get Free Quote
                </button>
              </div>
            </div>

            {/* Right side - Stats */}
            <div className="hidden md:flex flex-col gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <Star className="w-12 h-12 text-amber-500 fill-amber-500" />
                  <div>
                    <div className="text-4xl font-bold text-white">{business.rating}.0</div>
                    <div className="text-gray-300">Rating</div>
                  </div>
                </div>
                <div className="text-gray-300">Based on {business.reviews}+ verified reviews</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-12 h-12 text-amber-500" />
                  <div>
                    <div className="text-lg font-bold text-white">Local Expert</div>
                    <div className="text-gray-300">Serving your area</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {servicesList.map((service, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition">
                <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-gray-900">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Excellent service and very professional. Highly recommend to anyone looking for quality work. Will definitely use again!"
                </p>
                <p className="font-semibold text-gray-900">Happy Customer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <Phone className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href={`tel:${business.phone}`} className="text-amber-500 hover:text-amber-400 text-lg">
                      {business.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-gray-300">{business.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(808) 555-1234"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your needs..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 text-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 {business.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
