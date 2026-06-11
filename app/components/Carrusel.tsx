"use client"

import { useState } from "react"

const imagenes = [
  { src: "https://picsum.photos/800/400?random=1", alt: "Imagen 1" },
  { src: "https://picsum.photos/800/400?random=2", alt: "Imagen 2" },
  { src: "https://picsum.photos/800/400?random=3", alt: "Imagen 3" },
]

export default function Carrusel() {
  const [actual, setActual] = useState(0)

  function anterior() {
    setActual(actual === 0 ? imagenes.length - 1 : actual - 1)
  }

  function siguiente() {
    setActual(actual === imagenes.length - 1 ? 0 : actual + 1)
  }

  return (
    
    <div style={{ position: "relative", textAlign: "center", margin: "2rem auto", maxWidth: "800px" }}>
      <img
        src={imagenes[actual].src}
        alt={imagenes[actual].alt}
        style={{ width: "100%", maxWidth: "800px", height: "400px", objectFit: "cover" }}
      />
      <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button onClick={anterior} style={{ padding: "0.5rem 1.5rem", cursor: "pointer" }}>← Anterior</button>
        <span>{actual + 1} / {imagenes.length}</span>
        <button onClick={siguiente} style={{ padding: "0.5rem 1.5rem", cursor: "pointer" }}>Siguiente →</button>
      </div>
    </div>
  )
}