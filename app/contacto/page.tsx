import type { Metadata } from "next"
import FormularioContacto from "./FormularioContacto"

export const metadata: Metadata = {
  title: "Contacto — Estudio Jurídico",
  description: "Contactate con nuestro estudio jurídico y te respondemos a la brevedad",
}

export default function Contacto() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Contacto</h1>
      <FormularioContacto />
    </main>
  )
}