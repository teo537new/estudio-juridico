export default function Navbar() {
  return (
    <nav className="bg-[#1a1a2e] px-8 py-4 flex justify-between items-center">
      <span className="text-white text-xl font-bold">
        Estudio Jurídico
      </span>
      <ul className="list-none flex gap-8 m-0 p-0">
        <li><a href="/" className="text-white no-underline hover:text-gray-300">Inicio</a></li>
        <li><a href="/servicios" className="text-white no-underline hover:text-gray-300">Servicios</a></li>
        <li><a href="/contacto" className="text-white no-underline hover:text-gray-300">Contacto</a></li>
      </ul>
    </nav>
  )
}