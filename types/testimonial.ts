export interface Testimonial {
  name: string
  title: string
  text: string
  rating: number
  type: "client" | "colleague"
  avatar?: string
}

