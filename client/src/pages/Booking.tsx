import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Booking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const bookingMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/appointments", data);
    },
    onSuccess: () => {
      toast({
        title: "Appointment request sent!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        message: ""
      });
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
    },
    onError: () => {
      toast({
        title: "Error booking appointment",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'service', 'preferredDate', 'preferredTime'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    bookingMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-blue-100 via-white to-cyan-100">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#2046a6] to-cyan-500 bg-clip-text text-transparent drop-shadow-2xl mb-4">
            Book Your Appointment
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2046a6] to-cyan-400 rounded-full mb-8"></div>
          <div className="bg-white/80 rounded-2xl shadow-xl px-8 py-6 mb-8">
            <p className="text-xl text-blue-900 leading-relaxed font-medium">
              Schedule your visit and take the first step towards a healthier smile
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Booking Form */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white rounded-3xl shadow-2xl border border-blue-100">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="mt-1"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="mt-1"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="service">Service *</Label>
                    <Select onValueChange={(value) => handleSelectChange('service', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cleaning">Regular Cleaning</SelectItem>
                        <SelectItem value="whitening">Teeth Whitening</SelectItem>
                        <SelectItem value="implants">Dental Implants</SelectItem>
                        <SelectItem value="orthodontics">Orthodontics</SelectItem>
                        <SelectItem value="emergency">Emergency Care</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="preferredDate">Preferred Date *</Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="preferredTime">Preferred Time *</Label>
                  <Select onValueChange={(value) => handleSelectChange('preferredTime', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning</SelectItem>
                      <SelectItem value="afternoon">Afternoon</SelectItem>
                      <SelectItem value="evening">Evening</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about any specific concerns or questions you have..."
                    rows={4}
                    className="mt-1"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={bookingMutation.isPending}
                  className="w-full bg-gradient-to-r from-[#2046a6] to-cyan-500 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition"
                >
                  {bookingMutation.isPending ? "Booking..." : "Book Appointment"}
                </Button>
              </form>
              <div className="text-center text-blue-900 mt-6 font-medium">
                We'll contact you within 24 hours to confirm your appointment.
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
}
