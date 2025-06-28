import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "123 Main Street\nDowntown Medical Center\nNew York, NY 10001"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 123-SMILE"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@smilecare.com"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon - Fri: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: Closed\nEmergency: 24/7"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-blue-100 via-white to-cyan-100">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#2046a6] to-cyan-500 bg-clip-text text-transparent drop-shadow-2xl mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2046a6] to-cyan-400 rounded-full mb-8"></div>
          <div className="bg-white/80 rounded-2xl shadow-xl px-8 py-6 mb-8">
            <p className="text-xl text-blue-900 leading-relaxed font-medium">
              Get in touch with our friendly team. We're here to help with all your dental needs.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="flex flex-col gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-2xl p-8 border border-blue-100 flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Get In Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-blue-600 to-cyan-400 p-3 rounded-full">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-blue-900">{info.title}</div>
                        <div className="text-gray-700 whitespace-pre-line">{info.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-3xl h-64 flex items-center justify-center shadow-xl border border-blue-100">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <div className="font-medium">Interactive Map</div>
                  <div className="text-sm">Google Maps integration</div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white rounded-3xl shadow-2xl border border-blue-100">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        rows={5}
                        className="mt-1"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full bg-gradient-to-r from-[#2046a6] to-cyan-500 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
