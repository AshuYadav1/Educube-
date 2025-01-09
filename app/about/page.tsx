import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr Jitendra Patil ',
      role: 'Founder & CEO',
      description: 'Visionary leader with 15+ years in education',
      image: "https://i.postimg.cc/HnP1J2VJ/director.jpg"
    },
    {
      name: 'nos',
      role: 'nos',
      description: 'Operations expert with focus on student experience',
      image: "https://i.postimg.cc/4yWhRZGy/team-member-2.jpg"
    },
    {
      name: 'nos',
      role: 'nos',
      description: 'Certified career guidance specialist',
      image: "https://i.postimg.cc/Dw2frhxJ/team-member-3.jpg"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold text-blue-900 mb-6">About Educube</h1>
            <p className="text-xl text-blue-700/70">
              Empowering students with affordable study spaces and expert guidance
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 space-y-6">
                  <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
                    <Target className="w-6 h-6 text-blue-600 inline-block mr-2" />
                    <span className="text-blue-900 font-medium">Our Mission</span>
                  </div>
                  <h2 className="text-3xl font-bold text-blue-900">Transforming Education Access</h2>
                  <p className="text-lg text-blue-700/70 leading-relaxed">
                    At Educube, our mission is to provide affordable, high-quality study spaces and expert career guidance to students, empowering them to achieve their academic and professional goals. We believe that every student deserves access to a conducive learning environment and personalized support to unlock their full potential.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 animate-pulse" />
                    <img
                      src="https://i.postimg.cc/KvRy6dHt/Our-Mission-Vision-Value-1024x1024-removebg-preview.png"
                      alt="Our Mission"
                      className="relative rounded-2xl shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2 space-y-6">
                  <div className="inline-block px-4 py-2 bg-purple-100 rounded-full">
                    <Heart className="w-6 h-6 text-purple-600 inline-block mr-2" />
                    <span className="text-purple-900 font-medium">Our Values</span>
                  </div>
                  <h2 className="text-3xl font-bold text-blue-900">What We Stand For</h2>
                  <div className="space-y-4">
                    {[
                      { title: 'Affordability', desc: 'Making quality education support accessible to all' },
                      { title: 'Excellence', desc: 'Providing top-notch facilities and expert guidance' },
                      { title: 'Innovation', desc: 'Continuously improving our services to meet evolving needs' },
                      { title: 'Empowerment', desc: 'Equipping students with the tools and knowledge to succeed' },
                      { title: 'Community', desc: 'Fostering a supportive environment for collaborative learning' }
                    ].map((value, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                        <div>
                          <h3 className="font-semibold text-blue-900">{value.title}</h3>
                          <p className="text-blue-700/70">{value.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-20 animate-pulse" />
                    <img
                      src="https://i.postimg.cc/N0wqrLfx/5bc18ac2d1d55-thumbnail-removebg-preview.png"
                      alt="Our Values"
                      className="relative rounded-2xl shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2 space-y-6">
                  <div className="inline-block px-4 py-2 bg-purple-100 rounded-full">
                    <Heart className="w-6 h-6 text-purple-600 inline-block mr-2" />
                    <span className="text-purple-900 font-medium">We Provide Psychometric Report</span>
                  </div>
                  <h2 className="text-3xl font-bold text-blue-900">Psychometric Report Highlights</h2>
                  <div className="space-y-4">
                    {[
                      { title: 'Detailed Personality Analysis', desc: 'nsights are based on frameworks like ENTP (Extraversion, Intuition, Thinking, Perceiving), providing actionable understanding of strengths and areas for growth.' },
                      { title: 'Customized Career Interest Evaluation', desc: 'Recommendations focus on fields like marketing, IT, and business management, ensuring alignment with individual passions and abilities.' },
                      { title: 'Learning Style Identification', desc: 'Understand preferred learning methods, such as Reading/Writing, Kinesthetic, or Visual styles.' },
                      { title: 'Emotional Intelligence Assessment', desc: 'Assessments focus on Self-Awareness, Self-Motivation, and Self-Regulation.' },
                      { title: 'Personalized Development Plan', desc: 'Specific action points for skill-building in areas like leadership, communication, and analytical problem-solving' }
                    ].map((value, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                        <div>
                          <h3 className="font-semibold text-blue-900">{value.title}</h3>
                          <p className="text-blue-700/70">{value.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-20 animate-pulse" />
                    <img
                      src="https://i.postimg.cc/Jzn8KYS2/psh.png"
                      alt="Our Values"
                      className="relative rounded-2xl shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Users className="w-6 h-6 text-blue-600 inline-block mr-2" />
              <span className="text-blue-900 font-medium">Our Team</span>
            </div>
            <h2 className="text-3xl font-bold text-blue-900">Meet the Experts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full w-full h-full object-cover relative"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-blue-700/70 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;