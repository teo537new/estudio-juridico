import type { Metadata } from "next"
import Carrusel from "./components/Carrusel"

export const metadata: Metadata = {
  title: "Estudio Jurídico — Inicio",
  description: "Más de 20 años de experiencia en derecho civil, comercial y laboral en Buenos Aires",
}

export default function Home() {
  return (
    <main>
      <Carrusel />

      <section className="py-12 px-8 text-center bg-gray-50">
        <h1 className="text-4xl font-bold text-[#1a1a2e]">Estudio Jurídico</h1>
        <p className="max-w-xl mx-auto mt-4 text-lg text-gray-600">
          Más de 20 años de experiencia asesorando a personas y empresas en derecho civil, comercial y laboral.
          Nuestro compromiso es brindar soluciones legales claras y efectivas.
        </p>
        <a href="/contacto" className="inline-block mt-6 px-8 py-3 bg-[#1a1a2e] text-white no-underline rounded hover:bg-[#2a2a4e]">
          Consultanos
        </a>
      </section>

      <section className="py-12 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-8">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Experiencia</h3>
            <p className="text-gray-600">Más de 20 años resolviendo casos complejos con resultados comprobados.</p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Compromiso</h3>
            <p className="text-gray-600">Cada cliente recibe atención personalizada y seguimiento permanente.</p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Resultados</h3>
            <p className="text-gray-600">Estrategias legales claras orientadas a obtener el mejor resultado.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-8 text-center bg-[#1a1a2e] text-white">
        <h2 className="text-3xl font-bold">¿Tenés una consulta legal?</h2>
        <p className="mt-4 text-gray-400">Contactanos hoy y te respondemos a la brevedad.</p>
        <a href="/contacto" className="inline-block mt-6 px-8 py-3 bg-white text-[#1a1a2e] no-underline rounded font-bold hover:bg-gray-100">
          Contactanos
        </a>
      </section>

    </main>
  )
}