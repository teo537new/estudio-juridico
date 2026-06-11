"use client"

import { useState, useEffect } from "react"

const imagenes = [
  { src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&h=400&fit=crop", alt: "Abogados" },
  { src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&h=400&fit=crop", alt: "Justicia" },
  { src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=400&fit=crop", alt: "Oficina" },
]

export default function Carrusel() {
  const [actual, setActual] = useState(0)
  const [opacidad, setOpacidad] = useState(1)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setOpacidad(0)
      setTimeout(() => {
        setActual(prev => prev === imagenes.length - 1 ? 0 : prev + 1)
        setOpacidad(1)
      }, 500)
    }, 4000)
    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={imagenes[actual].src}
          alt={imagenes[actual].alt}
          className="w-full h-72 object-cover"
          style={{ opacity: opacidad, transition: "opacity 0.5s ease" }}
        />
      </div>
      <div className="flex justify-center gap-2 py-3">
        {imagenes.map((_, i) => (
          <button
            key={i}
            onClick={() => setActual(i)}
            className={`w-3 h-3 rounded-full ${i === actual ? "bg-[#1a1a2e]" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  )
}