import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap, Award, Target, Eye } from "lucide-react";
import { useState } from "react";

export default function About() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Doctorat en chirurgie dentaire, Harvard School of Dental Medicine",
      subtitle: "Diplômée Magna Cum Laude, 2008"
    },
    {
      icon: Award,
      title: "Résidence en chirurgie buccale",
      subtitle: "Massachusetts General Hospital, 2009-2011"
    },
    {
      icon: Award,
      title: "Certifiée par le Conseil",
      subtitle: "American Board of Oral and Maxillofacial Surgery"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-cyan-50 via-white to-green-50">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center rounded-3xl shadow-2xl p-10 border border-cyan-100">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&w=600&h=600&fit=crop&crop=face"
            alt="Dr. Sarah Johnson"
            className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-xl bg-white mb-6"
          />
          <span className="inline-block bg-gradient-to-r from-cyan-400 to-green-400 text-white text-xs font-bold px-6 py-2 rounded-full shadow mb-4">
            15+ ans d'expérience
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg">Dr. Sarah Johnson</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-2">
            Avec plus de <span className="font-bold text-cyan-600">15 ans d'expérience</span> en soins dentaires, la Dr. Johnson s'engage à offrir des traitements exceptionnels, personnalisés et dans un environnement confortable.
          </p>
        </div>
      </AnimatedSection>

      {/* Education & Experience Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-cyan-100 h-full flex flex-col">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-8 flex items-center gap-3">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"/></svg>
              Formation & Expérience
            </h2>
            <ul className="space-y-6 flex-1">
              <li>
                <div className="font-bold text-cyan-700">Doctorat en chirurgie dentaire, Harvard School of Dental Medicine</div>
                <div className="text-gray-600">Diplômée Magna Cum Laude, 2008</div>
              </li>
              <li>
                <div className="font-bold text-cyan-700">Résidence en chirurgie buccale</div>
                <div className="text-gray-600">Massachusetts General Hospital, 2009-2011</div>
              </li>
              <li>
                <div className="font-bold text-cyan-700">Certifiée par le Conseil</div>
                <div className="text-gray-600">American Board of Oral and Maxillofacial Surgery</div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8 h-full">
            {/* Mission */}
            <div className="bg-gradient-to-br from-cyan-50 to-green-50 rounded-3xl shadow-xl p-8 border border-cyan-100 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/></svg>
                <h3 className="text-2xl font-bold text-blue-900">Notre Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed flex-1">
                Offrir des soins dentaires complets et bienveillants en utilisant les dernières technologies et techniques. Nous croyons en la construction de relations à long terme avec nos patients grâce à la confiance, la communication et des résultats exceptionnels.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-gradient-to-br from-cyan-50 to-green-50 rounded-3xl shadow-xl p-8 border border-cyan-100 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <h3 className="text-2xl font-bold text-blue-900">Notre Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed flex-1">
                Être la référence en matière de soins dentaires dans notre communauté, reconnue pour l'excellence des soins, l'innovation et la création de sourires sains et durables.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 drop-shadow-lg">Nos Valeurs</h2>
            <p className="text-xl text-gray-700">Les principes qui guident notre pratique au quotidien</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Excellence in Care */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-400 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Excellence des Soins</h3>
              <p className="text-gray-700">
                Nous nous engageons à fournir des soins dentaires de la plus haute qualité en utilisant les techniques et équipements les plus avancés.
              </p>
            </div>
            {/* Patient-Centered Approach */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-400 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Approche Centrée Patient</h3>
              <p className="text-gray-700">
                Chaque plan de traitement est adapté aux besoins et objectifs individuels de nos patients, garantissant un accompagnement personnalisé.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Office Features */}
      <AnimatedSection className="py-14 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">Équipement de Pointe</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">Des équipements modernes et un environnement confortable pour des soins optimaux</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FlipCard
              frontImg="https://images.unsplash.com/photo-1588776814546-daab30f4d50d?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
              frontTitle="Technologie Avancée"
              frontText="Imagerie numérique et équipements de traitement de dernière génération"
              backText="Nous utilisons les technologies les plus avancées pour garantir des soins précis et confortables."
            />
            <FlipCard
              frontImg="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
              frontTitle="Environnement Confortable"
              frontText="Atmosphère relaxante pensée pour le bien-être du patient"
              backText="Un environnement apaisant pour une expérience dentaire sans stress."
            />
            <FlipCard
              frontImg="https://images.unsplash.com/photo-1551884436-baa68cc1a75a?ixlib=rb-4.0.3&w=400&h=300&fit=crop"
              frontTitle="Sécurité Maximale"
              frontText="Normes de stérilisation et protocoles de sécurité les plus stricts"
              backText="Des protocoles rigoureux pour votre sécurité et votre tranquillité d'esprit."
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

// FlipCard component
function FlipCard({ frontImg, frontTitle, frontText, backText }) {
  const [flipped, setFlipped] = useState(false);
  const fallbackImg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&w=400&h=300&fit=crop";
  return (
    <div
      className={`relative w-full h-80 cursor-pointer perspective`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`transition-transform duration-700 w-full h-full absolute top-0 left-0 [transform-style:preserve-3d] ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-gradient-to-br from-white via-blue-50 to-cyan-50 rounded-2xl shadow-lg p-6 border border-blue-100 flex flex-col items-center text-center backface-hidden">
          <img
            src={frontImg}
            alt={frontTitle}
            onError={e => { e.currentTarget.src = fallbackImg; }}
            className="rounded-xl shadow w-full h-32 object-cover mb-4"
          />
          <h3 className="text-lg font-extrabold text-blue-900 mb-1">{frontTitle}</h3>
          <div className="text-sm text-blue-600 font-medium mb-2">{frontTitle}</div>
          <p className="text-blue-800 text-sm font-light mb-2">{frontText}</p>
        </div>
        {/* Back */}
        <div className="absolute w-full h-full bg-[#2046a6] rounded-2xl shadow-lg p-6 flex items-center justify-center text-center rotate-y-180 backface-hidden">
          <p className="text-white text-base font-medium leading-relaxed">{backText}</p>
        </div>
      </div>
    </div>
  );
}
