"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Testimonial } from "@/types/testimonial"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div whileHover={{ y: -10 }} className="group">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-full">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-600"}`}
              />
            ))}
          </div>

          <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>

          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-gray-800">
              <AvatarImage src={testimonial.avatar || "/placeholder.svg?height=50&width=50"} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium group-hover:text-primary transition-colors">{testimonial.name}</h4>
              <p className="text-gray-400 text-sm">{testimonial.title}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

