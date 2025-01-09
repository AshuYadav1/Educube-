'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
          <img src="/ss.png" alt="EduCube Logo" className="h-24 w-auto mr-2" />
           <span className="text-2xl font-bold text-blue-900">Edu</span><span className="text-2xl font-bold text-purple-500">cube</span>
          </Link>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-blue-700 hover:text-blue-900 transition-colors ${
                pathname === item.href ? 'font-semibold text-blue-900' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Button
          asChild
          className="hidden md:inline-flex bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full transition-colors"
        >
          <Link href="/book">Book Now</Link>
        </Button>
        <button
          className="md:hidden text-blue-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      <AnimatePresence>
      {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/90 backdrop-blur-sm"
             initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
             transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-3 px-6 text-blue-700 hover:bg-gray-100 transition-colors ${
                  pathname === item.href ? 'font-semibold text-blue-900' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="p-6">
              <Button
                asChild
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full transition-colors"
              >
                <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
          </AnimatePresence>
    </header>
  );
}