'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';

interface ServiceSectionProps {
    id: string;
    title: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonurl: string;
    imagePlaceholder: string;
    imageAlt: string;
    imageOnLeft?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
    id,
    title,
    description,
    features,
    buttonText,
    buttonurl,
    imagePlaceholder,
    imageAlt,
    imageOnLeft = true,
}) => {
    const handleButtonClick = () => {
        if (buttonurl) {
            window.location.href = buttonurl; // Redirect to the provided URL
        } else {
            console.error('No URL provided for the button.');
        }
    };

    return (
        <Card className="overflow-hidden bg-white/50 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
                <div
                    className={`flex flex-col ${
                        imageOnLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } items-center gap-12`}
                >
                    <div className="lg:w-1/2 space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold text-blue-900 leading-tight">
                                {title}
                            </h2>
                            <p className="text-lg text-blue-700/70">{description}</p>
                        </div>
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <span className="text-blue-800">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <Button
                            className="group bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6"
                            onClick={handleButtonClick} // Ensure the onClick triggers the redirection
                        >
                            {buttonText}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 animate-pulse" />
                            <img
                                src={imagePlaceholder}
                                alt={imageAlt}
                                className="relative w-full h-auto rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-102"
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

const Services = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white">
            <div className="container mx-auto px-4 py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl font-bold text-blue-900 mb-6">Our Services</h1>
                    <p className="text-xl text-blue-700/70">
                        Empowering your educational journey with premium facilities and expert guidance
                    </p>
                </div>

                <div className="space-y-12">
                    <ServiceSection
                        id="study-spaces"
                        title="Premium Study Spaces"
                        description="Experience the perfect blend of comfort and productivity in our modern study environments, starting at just ₹10 per day."
                        features={[
                            "Air-conditioned rooms for maximum comfort",
                            "Ergonomic seating for long study sessions",
                            "High-speed Wi-Fi connectivity",
                            "Convenient power outlets at every seat",
                            "Dedicated quiet zones for deep focus",
                            "Collaborative spaces for group projects",
                        ]}
                        buttonText="Book Your Space Now"
                        buttonurl="https://example.com/book-space"
                        imagePlaceholder="https://i.postimg.cc/K83xMd7m/Such-spaces-often-operating-24x7-brand-themselve-1724004878187-1724012816237.webp"
                        imageAlt="Modern study space interior"
                        imageOnLeft={true}
                    />

                    <ServiceSection
                        id="counselling"
                        title="Expert Career Counselling"
                        description="Navigate your future with confidence through our comprehensive career guidance services."
                        features={[
                            "Personalized one-on-one counselling sessions",
                            "In-depth aptitude and personality assessments",
                            "Strategic career path planning",
                            "Professional resume building assistance",
                            "Interview preparation workshops",
                            "Specialized college admission guidance",
                        ]}
                        buttonText="Schedule a Consultation"
                        buttonurl="https://example.com/schedule-consultation"
                        imagePlaceholder="https://i.postimg.cc/HnP1J2VJ/director.jpg"
                        imageAlt="Career counselling session"
                        imageOnLeft={false}
                    />

                    <ServiceSection
                        id="experience"
                        title="15 Years of Experience"
                        description="Masters in Marketing from Jamnalal Bajaj Institute of Management Studies. Corporate experience includes stints with Reliance Communications and Axis Bank."
                        features={[
                            "Personalized client acquisition and relationship management",
                            "Effective financial oversight and business operations improvement",
                            "Strategic negotiation of supplier contracts for business growth",
                            "Customized career development and process optimization strategies",
                            "Professional skill-building workshops and continuous learning initiatives",
                            "Proactive service delivery and long-term client success planning",
                        ]}
                        buttonText="Schedule a Meet"
                        buttonurl="https://bold.pro/my/swapnilkarvir/537r"
                        imagePlaceholder="https://via.placeholder.com/300"
                        imageAlt="Career counselling session"
                        imageOnLeft={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;
