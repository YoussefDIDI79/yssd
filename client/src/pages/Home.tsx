import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureSection from "@/components/FeatureSection";
import { motion } from "framer-motion";
import { 
  Smile, 
  Award, 
  Users, 
  Star,
  CheckCircle,
  Torus,
  Heart,
  Shield
} from "lucide-react";

export default function Home() {
  const stats = [
    { value: "15+", label: "Années d'Expérience", subtitle: "Years of Excellence" },
    { value: "12K+", label: "Patients Satisfaits", subtitle: "Happy Patients" },
    { value: "98%", label: "Taux de Réussite", subtitle: "Success Rate" },
    { value: "24/7", label: "Service d'Urgence", subtitle: "Emergency Care" }
  ];

  const services = [
    {
      icon: Torus,
      title: "Dentisterie Générale",
      subtitle: "General Dentistry",
      description: "Nettoyages de routine, obturations et soins préventifs pour maintenir votre santé buccodentaire",
      features: ["Nettoyage Complet", "Obturations", "Examens Périodiques", "Soins des Gencives"]
    },
    {
      icon: Smile,
      title: "Dentisterie Esthétique", 
      subtitle: "Cosmetic Dentistry",
      description: "Améliorez votre sourire avec nos procédures et techniques esthétiques avancées",
      features: ["Blanchiment", "Facettes Céramique", "Orthodontie Invisible", "Implants Immédiats"]
    },
    {
      icon: Heart,
      title: "Soins d'Urgence",
      subtitle: "Emergency Care", 
      description: "Soins dentaires immédiats quand vous en avez besoin, disponibles 24h/24",
      features: ["Soulagement Douleur", "Premiers Secours", "Intervention Rapide", "Consultation Immédiate"]
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Patiente Implants Dentaires",
      content: "Dr. Johnson et son équipe ont rendu ma procédure d'implant dentaire complètement indolore. Les résultats sont extraordinaires et je ne pourrais pas être plus heureuse de mon nouveau sourire!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&w=64&h=64&fit=crop&crop=face",
      rating: 5,
      treatment: "Implants Dentaires"
    },
    {
      name: "Pierre Martin", 
      role: "Patient Esthétique",
      content: "Le cabinet est magnifique et le personnel est incroyablement professionnel. Mes résultats de blanchiment dentaire ont dépassé mes attentes. Je recommande vivement!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=64&h=64&fit=crop&crop=face",
      rating: 5,
      treatment: "Blanchiment Dentaire"
    },
    {
      name: "Sophie Laurent",
      role: "Patiente Famille", 
      content: "Mes enfants ont maintenant hâte de leurs rendez-vous dentaires! Dr. Johnson est merveilleuse avec les enfants et le cabinet est très accueillant.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=64&h=64&fit=crop&crop=face",
      rating: 5,
      treatment: "Dentisterie Pédiatrique"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dental-primary to-dental-secondary">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 border border-white/30">
                  <Award className="h-4 w-4 text-dental-primary mr-2" />
                  <span className="text-sm font-medium text-dental-dark">Clinique Certifiée Internationalement</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                  <span className="block text-blue-900 drop-shadow-lg">Votre Sourire</span>
                  <span className="block bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg font-extrabold">Parfait</span>
                  <span className="block text-blue-900 drop-shadow-lg">Commence Ici</span>
                </h1>
                
                <p className="text-xl text-white bg-gradient-to-br from-blue-700/80 to-cyan-500/70 backdrop-blur-md rounded-2xl px-8 py-6 leading-relaxed max-w-2xl shadow-2xl border border-white/20 font-semibold glassmorphism">
                  Découvrez une expérience de soins dentaires exceptionnelle avec nos techniques modernes, notre approche bienveillante et notre engagement envers votre santé bucco-dentaire et votre beau sourire.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/booking">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 text-white font-bold px-12 py-5 text-lg rounded-2xl shadow-xl hover:from-cyan-500 hover:to-blue-700 hover:scale-105 transition-all duration-200 focus:ring-4 focus:ring-cyan-300 neon-glow">
                    Prendre Rendez-vous
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-dental-primary px-10 py-5 text-lg rounded-2xl">
                    Découvrir Nos Services
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-card"
                  >
                    <div className="text-3xl font-bold text-dental-primary mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-dental-dark mb-1">{stat.label}</div>
                    <div className="text-xs text-dental-muted">{stat.subtitle}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
                    alt="Modern dental clinic interior"
                    className="rounded-3xl shadow-professional w-full h-64 object-cover neon-glow"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
                    alt="Professional dental equipment"
                    className="rounded-3xl shadow-professional w-full h-64 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
                    alt="Dentist consultation"
                    className="rounded-3xl shadow-professional w-full h-64 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
                    alt="Happy patient smile"
                    className="rounded-3xl shadow-professional w-full h-64 object-cover neon-glow"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-dental-primary/20 to-transparent rounded-3xl"></div>
              </div>
              
              {/* Floating Achievements */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-dental-success/20 p-3 rounded-2xl">
                    <CheckCircle className="h-6 w-6 text-dental-success" />
                  </div>
                  <div>
                    <div className="font-bold text-dental-dark">Certifié & Agréé</div>
                    <div className="text-sm text-dental-muted">Certified & Licensed</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-dental-primary/20 p-3 rounded-2xl">
                    <Award className="h-6 w-6 text-dental-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-dental-dark">Qualité Mondiale</div>
                    <div className="text-sm text-dental-muted">World-Class Quality</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <AnimatedSection className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50">
        {/* Decorative shapes */}
        <div className="absolute -top-16 -left-16 w-60 h-60 bg-cyan-300/10 rounded-full blur-2xl z-0"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-400/10 rounded-full blur-2xl z-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-300 to-teal-300 text-white mb-4 shadow-md text-base font-semibold border border-white/20">
              <span>Nos Spécialités Exclusives</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 drop-shadow-sm">
              Excellence en
              <span className="inline-block ml-2 px-4 py-1 bg-white/50 backdrop-blur-sm rounded-xl shadow-md border border-blue-100 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-violet-600 to-cyan-400 font-bold text-4xl md:text-5xl align-middle">
                Soins Dentaires
              </span>
            </h2>
            <div className="flex justify-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md px-6 py-4 max-w-2xl border border-blue-50">
                <p className="text-lg text-blue-900 leading-relaxed font-medium text-center">
                  Des soins dentaires complets adaptés à vos besoins, avec les technologies les plus avancées et une approche personnalisée
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="group hover:shadow-professional transition-all duration-500 border-0 bg-white/90 backdrop-blur-lg hover:bg-white hover:scale-105 neon-glow relative overflow-hidden">
                  <div className="absolute inset-0 gradient-primary opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="gradient-primary group-hover:neon-glow p-6 rounded-2xl w-20 h-20 flex items-center justify-center mb-8 transition-all duration-300">
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-blue-900 drop-shadow-lg bg-white/70 px-3 rounded-lg mb-3">{service.title}</h3>
                    <p className="text-sm text-blue-700 font-bold mb-4">{service.subtitle}</p>
                    <p className="text-dental-muted mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-dental-muted">
                          <div className="w-3 h-3 gradient-primary rounded-full mr-3 animate-pulse"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/services">
              <Button size="lg" className="gradient-primary hover:gradient-dark text-white px-12 py-6 text-lg rounded-2xl shadow-professional neon-glow">
                Découvrir Tous Nos Services
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <FeatureSection />

      {/* Testimonials */}
      <AnimatedSection className="py-32 gradient-dark relative overflow-hidden">
        <div className="morphing-shape absolute top-20 left-20 w-80 h-80 bg-dental-violet/20 opacity-40"></div>
        <div className="morphing-shape absolute bottom-20 right-20 w-72 h-72 bg-dental-pink/20 opacity-35" style={{animationDelay: '5s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 border border-white/30 mb-6 neon-glow">
              <span className="text-sm font-medium text-white">Témoignages Exclusifs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Ce Que Disent <span className="text-dental-accent">Nos Patients</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Des témoignages authentiques de nos patients satisfaits qui nous font confiance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex text-dental-warning">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <div className="px-4 py-2 bg-dental-primary text-white rounded-full text-xs font-bold">
                        {testimonial.treatment}
                      </div>
                    </div>
                    
                    <p className="text-dental-dark mb-8 leading-relaxed text-lg">"{testimonial.content}"</p>
                    
                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mr-4 border-2 border-dental-primary/30"
                        />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-dental-primary rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-dental-dark text-lg">{testimonial.name}</div>
                        <div className="text-sm text-dental-muted font-medium">{testimonial.role}</div>
                      </div>
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
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">
                Prêt à Transformer
              </h2>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md px-6 py-4 max-w-2xl border border-blue-50">
                <p className="text-lg text-blue-900 leading-relaxed font-medium text-center">
                  Planifiez votre consultation dès aujourd'hui et franchissez le premier pas vers un sourire plus sain et plus beau. Notre équipe d'experts vous accompagne dans votre transformation unique.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Link href="/booking">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 text-white font-bold px-8 py-4 text-base rounded-xl shadow-md hover:scale-105 transition">
                  Réserver une Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-blue-500 text-blue-700 font-bold px-8 py-4 text-base rounded-xl bg-white hover:bg-blue-50 hover:text-blue-900 transition">
                  Nous Contacter
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100 shadow-sm flex flex-col items-center">
                <CheckCircle className="h-7 w-7 text-blue-500 mb-2" />
                <div className="text-blue-900 font-bold text-base">Consultation Gratuite</div>
                <div className="text-blue-700 text-xs">Évaluation complète offerte</div>
              </div>
              <div className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100 shadow-sm flex flex-col items-center">
                <Heart className="h-7 w-7 text-cyan-500 mb-2" />
                <div className="text-blue-900 font-bold text-base">Urgences 24/7</div>
                <div className="text-blue-700 text-xs">Service d'urgence permanent</div>
              </div>
              <div className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100 shadow-sm flex flex-col items-center">
                <Shield className="h-7 w-7 text-violet-500 mb-2" />
                <div className="text-blue-900 font-bold text-base">Garantie Satisfait</div>
                <div className="text-blue-700 text-xs">100% satisfaction garantie</div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
