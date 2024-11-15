'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

export default function Page() {
  const { slug } = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const description = "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha. Discover authentic microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan."

  // Array of product images
  const images = [
    { src: '/1.png', alt: 'Product view 1' },
    { src: '/2.png', alt: 'Product view 2' },
    { src: '/3.png', alt: 'Product view 3' },
    { src: '/4.png', alt: 'Product view 4' },
  ]

  // Display hovered image if there's a hover, otherwise show selected image
  const displayedImageIndex = hoveredIndex !== null ? hoveredIndex : currentImageIndex

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-3/5 w-full flex gap-4">
            {/* Left side vertical thumbnails */}
            <div className="flex flex-col gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative md:w-24 md:h-24 w-20 h-20 transition-all duration-300 ${
                    (currentImageIndex === index || hoveredIndex === index)
                      ? 'ring-2 ring-indigo-500 scale-105' 
                      : 'hover:scale-105'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover object-center rounded cursor-pointer"
                  />
                </button>
              ))}
            </div>

            {/* Main image display */}
            <div className="relative flex-1 h-[400px]">
              <Image
                src={images[displayedImageIndex].src}
                alt={images[displayedImageIndex].alt}
                fill
                className="object-cover object-center rounded transition-opacity duration-300"
                priority
              />
            </div>
          </div>

          {/* Product details */}
          <div className="lg:w-2/5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              The Catcher in the Rye
            </h1>

            <div className="mb-8 relative">
              <div 
                className={`transition-all duration-300 ease-in-out relative ${
                  isExpanded ? 'h-auto' : 'h-20'
                } overflow-hidden`}
              >
                <p className="leading-relaxed">
                  {description}
                </p>
              </div>
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
              )}
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-indigo-500 hover:text-indigo-600 mt-2 text-sm font-medium flex items-center gap-1"
              >
                {isExpanded ? 'Show Less' : 'Learn More'}
                <svg 
                  className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center justify-between mb-8">
              <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
              <div className="flex items-center">
                <span className="mr-3">Stock:</span>
                <span className="px-2 py-1 text-sm bg-green-100 text-green-800 rounded">In Stock</span>
              </div>
            </div>

            <div className="space-y-4">
              <Link href="/contact" className="w-full block">
                <button className="w-full text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}