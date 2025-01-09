import Image from 'next/image'

const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'Educube has been a game-changer for my studies. The affordable prices and quiet environment helped me ace my exams!',
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Rahul Patel',
    text: 'The career counselling services at Educube gave me clarity about my future. I\'m now confidently pursuing my dream career.',
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Anita Desai',
    text: 'I love the flexibility of Educube\'s study spaces. It\'s my go-to place for focused study sessions and group projects.',
    image: '/placeholder.svg?height=100&width=100',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4" />
                <h3 className="font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

