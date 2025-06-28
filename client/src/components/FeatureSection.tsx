import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { Shield, Award, Clock, Users, Star, Heart } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: Shield,
      title: "Technologie Avancée",
      description: "Équipements de pointe et techniques modernes pour des soins précis",
      stats: "100%",
      statsLabel: "Équipement Moderne"
    },
    {
      icon: Award,
      title: "Équipe Certifiée",
      description: "Dentistes qualifiés avec formations internationales",
      stats: "15+",
      statsLabel: "Années d'Expérience"
    },
    {
      icon: Clock,
      title: "Service 24/7",
      description: "Urgences dentaires disponibles à tout moment",
      stats: "24/7",
      statsLabel: "Disponibilité"
    },
    {
      icon: Users,
      title: "Approche Personnalisée",
      description: "Chaque traitement adapté aux besoins individuels",
      stats: "12K+",
      statsLabel: "Patients Satisfaits"
    },
    {
      icon: Star,
      title: "Excellence Reconnue",
      description: "Récompenses et certifications de qualité",
      stats: "98%",
      statsLabel: "Taux de Satisfaction"
    },
    {
      icon: Heart,
      title: "Soins Bienveillants",
      description: "Environnement chaleureux et rassurant pour tous",
      stats: "5★",
      statsLabel: "Note Moyenne"
    }
  ];

  return (
    <AnimatedSection className="py-28 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Decorative shapes */}
      <div className="absolute -top-16 -left-16 w-60 h-60 bg-cyan-300/10 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-2xl z-0"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-teal-400 text-white mb-6 shadow-lg text-base font-bold border border-white/20">
            <Shield className="h-6 w-6 mr-2" />
            <span>Pourquoi Nous Choisir</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 drop-shadow-sm">
            L'Excellence à <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 bg-clip-text text-transparent">Votre Service</span>
          </h2>
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md px-6 py-4 max-w-2xl border border-blue-50">
              <p className="text-lg text-blue-900 leading-relaxed font-medium text-center">
                Découvrez les avantages qui font de notre clinique le choix préféré pour vos soins dentaires
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white via-blue-50 to-cyan-50 border border-blue-100 rounded-3xl hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-blue-600 via-cyan-400 to-teal-400 group-hover:from-cyan-400 group-hover:to-blue-600 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md transition-all duration-300">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="mb-6">
                    <div className="text-4xl font-extrabold text-blue-700 mb-2 drop-shadow-sm">{feature.stats}</div>
                    <div className="text-sm font-semibold text-blue-500">{feature.statsLabel}</div>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{feature.title}</h3>
                  <p className="text-blue-800 leading-relaxed text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}