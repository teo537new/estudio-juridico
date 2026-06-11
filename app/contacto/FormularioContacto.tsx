"use client"

import { useState } from "react"
import { enviarContacto } from "./actions"


export default function FormularioContacto() {
  const [enviado, setEnviado] = useState(false)

  async function handleSubmit(formData: FormData) {
    const resultado = await enviarContacto(formData)
    if (resultado.ok) setEnviado(true)
  }

  return (
    <div>
      {enviado ? (
        <p className="text-green-600 text-lg">¡Mensaje enviado correctamente!</p>
      ) : (
        <form action={handleSubmit} className="flex flex-col gap-4">
          <input name="nombre" placeholder="Tu nombre" required
            className="p-2 text-base border border-gray-300 rounded" />
          <input name="email" type="email" placeholder="Tu email" required
            className="p-2 text-base border border-gray-300 rounded" />
          <textarea name="mensaje" placeholder="Tu mensaje" rows={5} required
            className="p-2 text-base border border-gray-300 rounded" />
          <button type="submit"
            className="py-3 bg-[#1a1a2e] text-white cursor-pointer text-base rounded hover:bg-[#2a2a4e]">
            Enviar mensaje
          </button>
        </form>
      )}
    </div>
  )
}