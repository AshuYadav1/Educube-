import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Check, Sparkles } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Weekly Pass ',
    price: '₹500',
    duration: 'per week',
    features: [
      'Access to study space for one day',
      'Air-conditioned environment',
      'High-speed Wi-Fi',
      'Power outlet access',
    ],
    popular: false,
  },
  {
    name: 'Monthly  Pass',
    price: '₹1000',
    duration: 'per Month',
    features: [
      'Access to study space for 7 consecutive days',
      'Air-conditioned environment',
      'High-speed Wi-Fi',
      'Power outlet access',
      'Access to collaborative areas',
    ],
    popular: true,
  },
  {
    name: 'Yearly Pass',
    price: '₹4000 ',
    duration: ' per Year Inc Tax',
    features: [
      'Access to study space for 30 consecutive days',
      'Air-conditioned environment',
      'High-speed Wi-Fi',
      'Power outlet access',
      'Access to collaborative areas',
      'Priority booking for counselling sessions',
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-blue-700/70">
            Choose the perfect plan for your study needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="relative pt-6"> {/* Added pt-6 for badge space */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full flex items-center gap-2 text-sm font-medium shadow-md">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              <Card className={`relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular ? 'border-blue-200 shadow-xl' : 'border-gray-200 shadow-lg'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-blue-50/30 backdrop-blur-sm -z-10" />
                <CardHeader className="text-center p-6">
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">{plan.name}</h2>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-blue-900">{plan.price}</span>
                    <span className="text-blue-600">{plan.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6 border-t border-b border-blue-100">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                          <Check className="w-3 h-3 text-blue-600" />
                        </div>
                        <span className="text-blue-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6">
                  <Button 
                    className={`w-full group ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-gray-800 hover:bg-gray-900'
                    }`}
                  >
                    Get Started
                    <div className="w-5 h-5 ml-2 relative overflow-hidden inline-flex">
                      <span className="absolute inset-0 transition-transform duration-300 group-hover:translate-x-full">→</span>
                      <span className="absolute inset-0 transition-transform duration-300 -translate-x-full group-hover:translate-x-0">→</span>
                    </div>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-700/70 max-w-2xl mx-auto">
            All plans include basic amenities like air conditioning, Wi-Fi, and power outlets. 
            Need a custom plan? Contact us for special arrangements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;