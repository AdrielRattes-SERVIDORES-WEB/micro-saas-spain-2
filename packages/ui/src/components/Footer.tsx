import React from 'react'

interface FooterProps {
  title: string
  tagline: string
}

export function Footer({ title, tagline }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-semibold text-white text-lg">{title}</p>
        <p className="mt-2 text-sm">{tagline}</p>
        <p className="mt-6 text-xs">© {new Date().getFullYear()} {title}. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 mt-4 text-xs">
          <a href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</a>
          <a href="/terminos" className="hover:text-white transition-colors">Términos de Servicio</a>
          <a href="/contacto" className="hover:text-white transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
