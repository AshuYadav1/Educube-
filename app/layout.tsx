import './globals.css';
import { Poppins } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react'; // Import React

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Educube Study Spaces and Counselling',
  description: 'Affordable study spaces and expert career counselling for students',
};

// Explicitly define the type of the children prop
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased text-gray-800 bg-gray-50`}>
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}