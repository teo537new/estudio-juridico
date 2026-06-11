"use server"

export async function enviarContacto(formData: FormData) {
  const nombre = formData.get("nombre")
  const email = formData.get("email")
  const mensaje = formData.get("mensaje")

  // Por ahora solo mostramos los datos en consola
  // Después acá va el envío de email real
  console.log({ nombre, email, mensaje })

  return { ok: true }
}