import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, BookOpen, GraduationCap, Star } from 'lucide-react';

const Home = () => {
  // Mock data for testimonials
  const testimonials = [
    { id: 1, name: "Sarah K.", text: "The study environment here is perfect for focused learning.", rating: 5 ,image: "https://i.postimg.cc/g0Rzffrg/313405056add7f5d960ca76c227d9b0d.jpg"},
    { id: 2, name: "Mike R.", text: "Best investment in my education journey. Affordable and effective.", rating: 5 , image: "https://i.postimg.cc/g0Rzffrg/313405056add7f5d960ca76c227d9b0d.jpg"},
    { id: 3, name: "Priya M.", text: "The career counseling sessions helped me choose the right path.", rating: 5, image: "https://i.postimg.cc/g0Rzffrg/313405056add7f5d960ca76c227d9b0d.jpg" }
  ];

  // Mock data for FAQ
  const faqs = [
    { question: "How much does it cost?", answer: "Starting at just ₹10 per day, we offer flexible plans to suit your needs." },
    { question: "What facilities are included?", answer: "Air-conditioned spaces, comfortable seating, quiet zones, and expert counseling services." },
    { question: "How do I book a spot?", answer: "You can book directly through our front desk or contact us for reservations." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white">
      {/* Hero Section with Glassmorphism */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
                <span className="text-blue-900 font-medium">🎉 Special Offer</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                Transform Your <span className="text-purple-600">Learning Journey</span>
              </h1>
              <p className="text-xl text-blue-800/80">
                Experience focused learning in AC comfort for just ₹10 a day. Join a community of ambitious learners.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
                  Book Your Spot Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 animate-pulse" />
                <img
                  src="https://i.postimg.cc/TYjzmfFj/study-students.jpg"
                  alt="Students studying"
                  className="relative rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Students Choose Us</h2>
            <p className="text-blue-600/80">Join thousands of successful students who've transformed their study habits</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Premium Study Spaces",
                description: "Air-conditioned environments designed for maximum focus and comfort"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Counselling",
                description: "Get personalized guidance from experienced career counselors"
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Affordable Plans",
                description: "Flexible pricing starting at just ₹10 per day"
              },
              {
                icon: <img src="/coffie.png" alt="Icon" className="w-8 h-8" />,

                title: "Drinks & Snacks",
                description: "Getting bored get a cup of tea or coffee at your desk."
              },
              {
                icon: <img src="/study.png"className="w-8 h-8" />,
                title: "Modern & Comfortable",
                description: "Get comfort while reading and studying with our modern architecture."
              },
              {
                icon: <img src="/print.png" className="w-8 h-8" />,
                title: "Printing & Scanning",
                description: "Available printing and scanning of your documents,notes etc."
              },
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{feature.title}</h3>
                  <p className="text-blue-600/80">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Spaces Gallery */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Spaces</h2>
            <p className="text-blue-600/80">Take a virtual tour of our modern study facilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://i.postimg.cc/L5kZ2JX0/AUR-Library-Study-Room.jpg",
              "https://i.postimg.cc/K8W4XPf8/Carrels2.jpg",
              "https://i.postimg.cc/mrFkTPpN/study-hub-panvel-navi-mumbai-libraries-lj6hrcnjwr.avif"
            ].map((imageUrl, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={imageUrl}
                  alt={`Study space ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-24">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-5xl font-extrabold text-blue-900 mb-6">
        What Our Students Say
      </h2>
      <p className="text-lg text-blue-600/80">
        Hear from our thriving community of learners
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <Card
          key={testimonial.id}
          className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div className="p-6">
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-800 mb-4 text-center italic">
              "{testimonial.text}"
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <img
                src={testimonial.image} // Add an image URL in the `testimonials` data for each student
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-sm"
              />
              <p className="font-semibold text-blue-900 text-center">
                {testimonial.name}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-blue-600/80">Find answers to common questions about our services</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{faq.question}</h3>
                  <p className="text-blue-600/80">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;