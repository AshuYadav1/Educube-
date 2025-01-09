'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-blue-900 text-center mb-16">Contact Us</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form Card */}
          <div className="lg:w-1/2">
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-blue-700/70 mb-8 leading-relaxed">
                  Have questions about our services or want to book a study space?
                  Fill out the form below, and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-blue-900 font-medium mb-2">Name</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-blue-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-blue-900 font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-blue-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-blue-900 font-medium mb-2">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-blue-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Card */}
          <div className="lg:w-1/2">
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Information</h2>
                <p className="text-lg text-blue-700/70 mb-6 leading-relaxed">
                  You can also reach us using the following contact information:
                </p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-blue-900">
                        <Mail className="w-4 h-4 text-blue-600"/>
                        <span>info@educube.com</span>
                    </li>
                    <li className="flex items-center gap-2 text-blue-900">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span>+91 1234567890</span>
                    </li>
                    <li className="flex items-start gap-2 text-blue-900">
                        <MapPin className="w-4 h-4 text-blue-600 mt-1" />
                        <span>123 Study Street, Knowledge City, India</span>
                    </li>
                 </ul>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5965367424506!2d77.59791841482183!3d12.971598990855802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1620830144951!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        className="rounded-2xl shadow-lg"
                    ></iframe>
                  </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}