import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios — Estudio Jurídico",
  description: "Conocé todos nuestros servicios legales en derecho civil, comercial y laboral",
}

export default function Servicios() {
  return (
    <main className="px-8 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#1a1a2e] text-center mb-8">Nuestros Servicios</h1>
      <div className="flex flex-col gap-6">
        <div className="p-6 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold text-[#1a1a2e] mb-2">Derecho Civil</h2>
          <p className="text-gray-600">Asesoramiento en contratos, sucesiones, familia y daños.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold text-[#1a1a2e] mb-2">Derecho Comercial</h2>
          <p className="text-gray-600">Constitución de sociedades, contratos comerciales y disputas empresariales.</p>
        </div>
        <div className="p-6 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold text-[#1a1a2e] mb-2">Derecho Laboral</h2>
          <p className="text-gray-600">Defensa de trabajadores y empresas en conflictos laborales.</p>
        </div>
      </div>
    </main>
  )
}