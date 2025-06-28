import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À Propos" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-dental-primary rounded-3xl flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L13.5 2.5L16.17 5.17C15.24 5.06 14.32 5 13.5 5C9.5 5 7.45 7.39 7.1 11.5C6.88 14.28 8.19 16.85 10.5 18.16V21C10.5 21.83 11.17 22.5 12 22.5S13.5 21.83 13.5 21V18.16C15.81 16.85 17.12 14.28 16.9 11.5C16.83 10.73 16.65 10 16.35 9.35L19 12L21 9Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="ml-3">
                <span className="text-2xl font-bold text-dental-dark">SourireCare</span>
                <div className="text-xs text-dental-muted font-bold">Clinique Dentaire Premium</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-dental-primary"
                    : "text-dental-dark hover:text-dental-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/booking">
              <Button className="bg-dental-primary hover:bg-dental-secondary text-white px-6 py-2 rounded-xl shadow-lg">
                Prendre RDV
              </Button>
            </Link>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-6 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-dental-primary"
                          : "text-dental-dark hover:text-dental-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/booking" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-dental-primary hover:bg-dental-secondary text-white rounded-xl">
                      Prendre RDV
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
