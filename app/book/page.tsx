'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

export default function Book() {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    date: '',
    service: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic
    console.log('Booking submitted:', bookingData)
    setBookingData({ name: '', email: '', date: '', service: '' })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Book Your Space or Session
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={bookingData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={bookingData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-600 mb-2">
              Date
            </label>
            <Input
              type="date"
              id="date"
              name="date"
              value={bookingData.date}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-600 mb-2">
              Service
            </label>
            <Select
              id="service"
              name="service"
              value={bookingData.service}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="study-space">Study Space</option>
              <option value="counselling">Career Counselling</option>
            </Select>
          </div>
          <Button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition-all"
          >
            Book Now
          </Button>
        </form>
      </div>
    </div>
  )
}
