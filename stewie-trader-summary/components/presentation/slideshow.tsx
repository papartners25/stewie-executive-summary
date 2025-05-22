"use client"

import { useState, useEffect, type ReactNode } from "react"
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SlideshowProps {
  slides: ReactNode[]
  onClose: () => void
}

export function Slideshow({ slides, onClose }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide, onClose])

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
      <div className="flex justify-between items-center p-4 bg-slate-900">
        <div className="text-white text-sm">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-300 hover:text-white hover:bg-slate-800"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-300 hover:text-white hover:bg-slate-800"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div key={index} className="h-full min-w-full">
                {slide}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/50 hover:bg-slate-900 text-white rounded-full h-12 w-12"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/50 hover:bg-slate-900 text-white rounded-full h-12 w-12"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="p-4 bg-slate-900 flex justify-center">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentSlide ? "bg-emerald-500" : "bg-slate-700"}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

