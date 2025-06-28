import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  Torus, 
  Smile, 
  Heart, 
  AlignCenter, 
  Ambulance, 
  Baby,
  CheckCircle
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Torus,
      title: "General Dentistry",
      description: "Routine cleanings, fillings, and preventive care to maintain your oral health.",
      features: ["Regular Cleanings", "Cavity Fillings", "Oral Examinations", "Fluoride Treatments"],
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      icon: Smile,
      title: "Cosmetic Dentistry", 
      description: "Enhance your smile with our advanced cosmetic procedures and treatments.",
      features: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeovers", "Bonding"],
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      icon: Heart,
      title: "Dental Implants",
      description: "Permanent tooth replacement solution that looks and feels natural.",
      features: ["Single Implants", "Multiple Implants", "Full Mouth Restoration", "Implant Crowns"],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      icon: AlignCenter,
      title: "Orthodontics",
      description: "Straighten your teeth with traditional braces or clear aligners.",
      features: ["Traditional Braces", "Clear Aligners", "Retainers", "Adult Orthodontics"],
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      icon: Ambulance,
      title: "Emergency Care",
      description: "Immediate dental care when you need it most, available 24/7.",
      features: ["Pain Relief", "Broken Torus Repair", "Lost Filling Replacement", "Emergency Extractions"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a fun, comfortable environment.",
      features: ["Child-Friendly Cleanings", "Fluoride Treatments", "Sealants", "Early Orthodontics"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-blue-100 via-white to-cyan-100">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-4">
            <svg className="w-10 h-10 text-[#2046a6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2v20M2 12h20" />
            </svg>
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#2046a6] to-cyan-500 bg-clip-text text-transparent drop-shadow-2xl">
              Our Services
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2046a6] to-cyan-400 rounded-full mb-8"></div>
          <div className="bg-white/80 rounded-2xl shadow-xl px-8 py-6 mb-8">
            <p className="text-xl text-blue-900 leading-relaxed font-medium">
              Comprehensive dental care tailored to your needs, from routine cleanings to advanced procedures.
            </p>
          </div>
          <Link href="/booking">
            <Button size="lg" className="bg-gradient-to-r from-[#2046a6] to-cyan-500 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:scale-105 transition">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </AnimatedSection>

      {/* Services Grid */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="bg-white rounded-3xl shadow-2xl border border-blue-100 hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                  <CardContent className="p-0 flex flex-col h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-t-3xl"
                    />
                    <div className="p-8 flex flex-col flex-1">
                      <div className="bg-gradient-to-br from-blue-600 to-cyan-400 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg mx-auto">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">{service.title}</h3>
                      <p className="text-gray-700 mb-6 text-center">{service.description}</p>
                      <ul className="space-y-2 flex-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#2046a6] to-cyan-500 bg-clip-text text-transparent drop-shadow-2xl mb-4">
            Not Sure Which Service You Need?
          </h2>
          <div className="bg-white/80 rounded-2xl shadow-xl px-8 py-6 mb-8">
            <p className="text-xl text-blue-900 leading-relaxed font-medium">
              Schedule a consultation and let us help you determine the best treatment plan for your needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-gradient-to-r from-[#2046a6] to-cyan-500 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:scale-105 transition">
                Book Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-400 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:scale-105 transition">
                Ask Questions
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
