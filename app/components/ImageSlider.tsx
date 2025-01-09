'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const images = [
  { src: 'https://i.postimg.cc/cLHgf8pS/photo-library-study-room-with-individual-study-cubicles-933496-41251.avif', alt: 'Modern Study Space' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'Collaborative Area' },
  { src: '/placeholder.svg?height=400&width=600', alt: 'Career Counselling Session' },
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image src={image.src} alt={image.alt} width={600} height={600} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
      <Button variant="outline" size="icon" className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white" onClick={prevSlide}>
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button variant="outline" size="icon" className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white" onClick={nextSlide}>
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

