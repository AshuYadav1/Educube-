'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How much does it cost to use the study space?',
    answer: 'Our study spaces start at just ₹10 per day. We offer various plans to suit different needs and budgets.',
  },
  {
    question: 'What facilities are available in the study spaces?',
    answer: 'Our study spaces are air-conditioned and equipped with comfortable seating, high-speed Wi-Fi, and power outlets for your devices.',
  },
  {
    question: 'How can I book a career counselling session?',
    answer: 'You can book a career counselling session through our website or by contacting our office. We offer both in-person and online sessions.',
  },
  {
    question: 'Are there any group study options available?',
    answer: 'Yes, we have dedicated areas for group study. You can book these spaces in advance for your study groups or project meetings.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-4 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <ChevronUp className="h-5 w-5 text-blue-500" /> : <ChevronDown className="h-5 w-5 text-blue-500" />}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-blue-50 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

